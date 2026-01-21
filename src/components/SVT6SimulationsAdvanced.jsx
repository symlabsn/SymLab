'use client';
import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles, Trail, MeshWobbleMaterial } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';

// ============================================================================
// SHARED COMPONENTS
// ============================================================================
const ScoreDisplay = ({ score, maxScore, label }) => (
    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
        <span className="text-yellow-400">⭐</span>
        <span className="font-bold text-white">{score}/{maxScore}</span>
        {label && <span className="text-xs text-gray-400">{label}</span>}
    </div>
);

const ProgressBar = ({ current, max, color = "#2DD4BF" }) => (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full transition-all duration-500" style={{ width: `${(current / max) * 100}%`, backgroundColor: color }} />
    </div>
);

const GameButton = ({ onClick, children, color = "cyan", disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full p-3 rounded-xl font-bold transition-all transform active:scale-95 ${disabled ? 'bg-gray-600 cursor-not-allowed opacity-50' :
                color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black' :
                    color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 text-black' :
                        color === 'red' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                            'bg-white/20 hover:bg-white/30 text-white'
            }`}
    >
        {children}
    </button>
);

// ============================================================================
// 1. ENVIRONMENT EXPLORER - Version Gamifiée
// ============================================================================
export function EnvironmentExplorer() {
    const [score, setScore] = useState(0);
    const [found, setFound] = useState([]);
    const [message, setMessage] = useState("Trouvez tous les êtres VIVANTS !");
    const [gameComplete, setGameComplete] = useState(false);

    const items = useMemo(() => [
        { id: 'baobab', name: 'Baobab', type: 'vivant', pos: [-3, 0, -2], emoji: '🌳', points: 10 },
        { id: 'lion', name: 'Lion', type: 'vivant', pos: [2, 0.5, 1], emoji: '🦁', points: 15 },
        { id: 'gazelle', name: 'Gazelle', type: 'vivant', pos: [-1, 0.3, 2], emoji: '🦌', points: 15 },
        { id: 'rock', name: 'Rocher', type: 'non-vivant', pos: [3, -0.5, -1], emoji: '🪨', points: -5 },
        { id: 'water', name: 'Mare', type: 'non-vivant', pos: [0, -0.8, 0], emoji: '💧', points: -5 },
        { id: 'bird', name: 'Oiseau', type: 'vivant', pos: [1, 2, -2], emoji: '🦅', points: 20 },
        { id: 'snake', name: 'Serpent', type: 'vivant', pos: [-2, -0.3, 1], emoji: '🐍', points: 15 },
        { id: 'sun', name: 'Soleil', type: 'non-vivant', pos: [0, 4, -5], emoji: '☀️', points: -5 },
    ], []);

    const livingCount = items.filter(i => i.type === 'vivant').length;

    const handleClick = useCallback((item) => {
        if (found.includes(item.id) || gameComplete) return;

        setFound(prev => [...prev, item.id]);
        setScore(prev => prev + item.points);

        if (item.type === 'vivant') {
            setMessage(`✅ Bravo ! ${item.name} est VIVANT !`);
            const newFoundLiving = [...found, item.id].filter(id =>
                items.find(i => i.id === id)?.type === 'vivant'
            ).length;
            if (newFoundLiving >= livingCount) {
                setGameComplete(true);
                setMessage("🎉 FÉLICITATIONS ! Tu as trouvé tous les êtres vivants !");
            }
        } else {
            setMessage(`❌ Non ! ${item.name} est NON-VIVANT.`);
        }
    }, [found, gameComplete, items, livingCount]);

    const reset = () => {
        setScore(0);
        setFound([]);
        setMessage("Trouvez tous les êtres VIVANTS !");
        setGameComplete(false);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌍 Explorateur d'Environnement">
                    <div className="space-y-3">
                        <ScoreDisplay score={score} maxScore={75} label="XP" />
                        <ProgressBar current={found.filter(id => items.find(i => i.id === id)?.type === 'vivant').length} max={livingCount} />
                        <div className={`p-3 rounded-lg text-center font-bold ${gameComplete ? 'bg-green-500/30 text-green-300' : 'bg-white/10'}`}>
                            {message}
                        </div>
                        <div className="text-xs text-gray-400 text-center">
                            🎯 Mission : Clique sur les êtres VIVANTS
                        </div>
                        {gameComplete && <GameButton onClick={reset} color="green">🔄 Rejouer</GameButton>}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />

            {/* Savane sénégalaise */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#C4A484" />
            </mesh>

            {items.map((item) => (
                <group
                    key={item.id}
                    position={item.pos}
                    onClick={() => handleClick(item)}
                >
                    <Float speed={item.type === 'vivant' ? 3 : 0} floatIntensity={0.3}>
                        <mesh castShadow>
                            {item.id === 'baobab' && <cylinderGeometry args={[0.8, 1.2, 3]} />}
                            {item.id === 'lion' && <boxGeometry args={[1.2, 0.8, 0.6]} />}
                            {item.id === 'gazelle' && <capsuleGeometry args={[0.3, 0.8]} />}
                            {item.id === 'rock' && <dodecahedronGeometry args={[0.8]} />}
                            {item.id === 'water' && <cylinderGeometry args={[2, 2, 0.1, 32]} />}
                            {item.id === 'bird' && <coneGeometry args={[0.3, 0.6]} />}
                            {item.id === 'snake' && <torusGeometry args={[0.5, 0.1, 8, 16]} />}
                            {item.id === 'sun' && <sphereGeometry args={[1.5]} />}
                            <meshStandardMaterial
                                color={found.includes(item.id) ? (item.type === 'vivant' ? '#4CAF50' : '#F44336') : '#FFA726'}
                                emissive={item.id === 'sun' ? '#FDB813' : '#000'}
                                emissiveIntensity={item.id === 'sun' ? 2 : 0}
                            />
                        </mesh>
                        <Billboard position={[0, 1.5, 0]}>
                            <Text fontSize={0.8}>{item.emoji}</Text>
                        </Billboard>
                        {found.includes(item.id) && item.type === 'vivant' && (
                            <Sparkles count={20} scale={2} size={3} speed={0.5} color="#4CAF50" />
                        )}
                    </Float>
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 2. VERTEBRATE CLASSIFICATION - Version Quiz Interactif
// ============================================================================
export function VertebrateClassification() {
    const [currentAnimal, setCurrentAnimal] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [feedback, setFeedback] = useState('');

    const animals = useMemo(() => [
        { name: 'Lion', emoji: '🦁', correct: 'mammifere', hint: 'Il a des poils et allaite ses petits' },
        { name: 'Aigle', emoji: '🦅', correct: 'oiseau', hint: 'Il a des plumes et pond des œufs' },
        { name: 'Crocodile', emoji: '🐊', correct: 'reptile', hint: 'Il a des écailles et le sang froid' },
        { name: 'Grenouille', emoji: '🐸', correct: 'amphibien', hint: 'Peau nue, vit sur terre et dans l\'eau' },
        { name: 'Thiof', emoji: '🐟', correct: 'poisson', hint: 'Il respire sous l\'eau avec des branchies' },
        { name: 'Éléphant', emoji: '🐘', correct: 'mammifere', hint: 'Grand mammifère d\'Afrique' },
        { name: 'Perroquet', emoji: '🦜', correct: 'oiseau', hint: 'Oiseau coloré qui peut parler' },
        { name: 'Tortue', emoji: '🐢', correct: 'reptile', hint: 'Reptile avec une carapace' },
    ], []);

    const classes = [
        { id: 'mammifere', name: 'Mammifères', emoji: '🦁', color: '#F44336' },
        { id: 'oiseau', name: 'Oiseaux', emoji: '🐦', color: '#2196F3' },
        { id: 'reptile', name: 'Reptiles', emoji: '🦎', color: '#4CAF50' },
        { id: 'amphibien', name: 'Amphibiens', emoji: '🐸', color: '#8BC34A' },
        { id: 'poisson', name: 'Poissons', emoji: '🐠', color: '#00BCD4' },
    ];

    const handleAnswer = (classId) => {
        if (answered) return;
        setAnswered(true);

        const animal = animals[currentAnimal];
        if (classId === animal.correct) {
            setScore(s => s + 10);
            setFeedback(`✅ Correct ! ${animal.name} est un ${classes.find(c => c.id === classId)?.name.slice(0, -1)} !`);
        } else {
            setFeedback(`❌ Non, ${animal.name} est un ${classes.find(c => c.id === animal.correct)?.name.slice(0, -1)}.`);
        }
    };

    const next = () => {
        if (currentAnimal < animals.length - 1) {
            setCurrentAnimal(c => c + 1);
            setAnswered(false);
            setFeedback('');
        }
    };

    const animal = animals[currentAnimal];
    const isComplete = currentAnimal >= animals.length - 1 && answered;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🐢 Classification des Vertébrés">
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={score} maxScore={80} />
                            <span className="text-xs text-gray-400">{currentAnimal + 1}/{animals.length}</span>
                        </div>
                        <ProgressBar current={currentAnimal + (answered ? 1 : 0)} max={animals.length} color="#9C27B0" />

                        <div className="text-center p-4 bg-gradient-to-b from-purple-500/20 to-transparent rounded-xl">
                            <div className="text-6xl mb-2">{animal.emoji}</div>
                            <div className="text-xl font-bold text-white">{animal.name}</div>
                            <div className="text-xs text-gray-400 italic">{animal.hint}</div>
                        </div>

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-sm font-bold ${feedback.includes('✅') ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'}`}>
                                {feedback}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-2">
                            {classes.map(cls => (
                                <button
                                    key={cls.id}
                                    onClick={() => handleAnswer(cls.id)}
                                    disabled={answered}
                                    className={`p-2 rounded-lg text-sm font-bold transition-all ${answered && cls.id === animal.correct ? 'bg-green-500 text-white' :
                                            answered ? 'opacity-50' : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                    style={{ borderLeft: `3px solid ${cls.color}` }}
                                >
                                    {cls.emoji} {cls.name}
                                </button>
                            ))}
                        </div>

                        {answered && !isComplete && (
                            <GameButton onClick={next} color="cyan">Suivant →</GameButton>
                        )}
                        {isComplete && (
                            <div className="text-center p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
                                <div className="text-2xl">🎉</div>
                                <div className="font-bold text-yellow-400">Quiz Terminé !</div>
                                <div className="text-white">Score: {score}/80</div>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {classes.map((cls, i) => (
                <group key={cls.id} position={[Math.cos(i * Math.PI * 2 / 5) * 3, 0, Math.sin(i * Math.PI * 2 / 5) * 3]}>
                    <mesh>
                        <cylinderGeometry args={[1, 1, 0.3, 6]} />
                        <meshStandardMaterial color={cls.color} />
                    </mesh>
                    <Billboard position={[0, 0.5, 0]}>
                        <Text fontSize={0.5} color="white">{cls.emoji}</Text>
                    </Billboard>
                </group>
            ))}

            <Float speed={2} floatIntensity={0.5}>
                <Billboard position={[0, 2, 0]}>
                    <Text fontSize={1.5}>{animal.emoji}</Text>
                </Billboard>
            </Float>
        </group>
    );
}

// ============================================================================
// 3. FOOD CHAIN - Version Interactive avec Drag
// ============================================================================
export function FoodChain() {
    const [energy, setEnergy] = useState(100);
    const [level, setLevel] = useState(0);
    const [showInfo, setShowInfo] = useState(null);

    const levels = useMemo(() => [
        { name: "Producteurs", desc: "Les plantes captent l'énergie du soleil", emoji: "🌱", color: "#4CAF50", energyKept: 100 },
        { name: "Herbivores", desc: "Mangent les plantes, gardent 10% de l'énergie", emoji: "🐰", color: "#FFC107", energyKept: 10 },
        { name: "Carnivores", desc: "Mangent les herbivores, gardent 10%", emoji: "🦊", color: "#FF9800", energyKept: 1 },
        { name: "Superprédateurs", desc: "Au sommet de la chaîne", emoji: "🦅", color: "#F44336", energyKept: 0.1 },
    ], []);

    const advance = () => {
        if (level < levels.length - 1) {
            setLevel(l => l + 1);
            setEnergy(levels[level + 1].energyKept);
        }
    };

    const reset = () => {
        setLevel(0);
        setEnergy(100);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🦁 Pyramide Écologique">
                    <div className="space-y-3">
                        <div className="text-center">
                            <div className="text-4xl mb-1">{levels[level].emoji}</div>
                            <div className="font-bold text-lg text-white">{levels[level].name}</div>
                            <div className="text-xs text-gray-400">{levels[level].desc}</div>
                        </div>

                        <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                            <div className="text-xs text-gray-400 mb-1">Énergie disponible</div>
                            <div className="flex items-center gap-2">
                                <ProgressBar current={energy} max={100} color="#FFC107" />
                                <span className="font-bold text-yellow-400">{energy}%</span>
                            </div>
                        </div>

                        <div className="text-xs text-center text-cyan-400 italic">
                            💡 Seulement 10% de l'énergie passe au niveau suivant !
                        </div>

                        <div className="flex gap-2">
                            <GameButton onClick={reset}>🔄 Reset</GameButton>
                            <GameButton onClick={advance} color="cyan" disabled={level >= levels.length - 1}>
                                {level >= levels.length - 1 ? 'Fin !' : 'Manger →'}
                            </GameButton>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 10, 5]} intensity={1.5} />

            {levels.map((lvl, i) => (
                <group key={i} position={[0, i * 2 - 3, 0]}>
                    <mesh onClick={() => setShowInfo(i)}>
                        <cylinderGeometry args={[2.5 - i * 0.5, 3 - i * 0.5, 1.5, 6]} />
                        <meshStandardMaterial
                            color={lvl.color}
                            transparent
                            opacity={i <= level ? 1 : 0.3}
                            emissive={i === level ? lvl.color : '#000'}
                            emissiveIntensity={i === level ? 0.3 : 0}
                        />
                    </mesh>
                    <Billboard position={[3, 0, 0]}>
                        <Text fontSize={0.6} color="white">{lvl.emoji} {lvl.name}</Text>
                    </Billboard>
                    {i === level && (
                        <Sparkles count={30} scale={4} size={4} speed={0.5} color={lvl.color} />
                    )}
                </group>
            ))}

            {/* Energy particles flowing down */}
            <EnergyFlow level={level} />
        </group>
    );
}

function EnergyFlow({ level }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.position.y = ((clock.elapsedTime * 2) % 8) - 3;
        }
    });
    return (
        <mesh ref={ref} position={[0, 0, 0]}>
            <sphereGeometry args={[0.2]} />
            <meshBasicMaterial color="#FFEB3B" />
        </mesh>
    );
}

export { ScoreDisplay, ProgressBar, GameButton };
