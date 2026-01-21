'use client';
import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';

// ============================================================================
// SHARED UI COMPONENTS
// ============================================================================
export const ScoreDisplay = ({ score, maxScore, label }) => (
    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
        <span className="text-yellow-400">⭐</span>
        <span className="font-bold text-white">{score}/{maxScore}</span>
        {label && <span className="text-xs text-gray-400">{label}</span>}
    </div>
);

export const ProgressBar = ({ current, max, color = "#2DD4BF" }) => (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full transition-all duration-500" style={{ width: `${(current / max) * 100}%`, backgroundColor: color }} />
    </div>
);

export const GameButton = ({ onClick, children, color = "cyan", disabled = false, size = "normal" }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`${size === 'small' ? 'p-2 text-xs' : 'p-3'} rounded-xl font-bold transition-all transform active:scale-95 ${disabled ? 'bg-gray-600 cursor-not-allowed opacity-50' :
                color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black' :
                    color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 text-black' :
                        color === 'red' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' :
                            color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' :
                                'bg-white/20 hover:bg-white/30 text-white'
            }`}
    >
        {children}
    </button>
);

const ScenarioSelector = ({ scenarios, current, onChange, title }) => (
    <div className="space-y-2">
        <div className="text-xs text-gray-400">{title}</div>
        <div className="grid grid-cols-2 gap-1">
            {scenarios.map((s, i) => (
                <button key={i} onClick={() => onChange(i)}
                    className={`p-2 rounded-lg text-xs text-left transition-all ${current === i ? 'bg-cyan-500/30 border border-cyan-500' : 'bg-white/10 hover:bg-white/20'}`}>
                    <div className="font-bold">{s.emoji} {s.name}</div>
                    <div className="text-gray-400 text-[10px]">{s.difficulty}</div>
                </button>
            ))}
        </div>
    </div>
);

// ============================================================================
// 1. ENVIRONMENT EXPLORER - 4 SCÉNARIOS
// ============================================================================
export function EnvironmentExplorer() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [found, setFound] = useState([]);
    const [message, setMessage] = useState("");
    const [gameComplete, setGameComplete] = useState(false);
    const [mode, setMode] = useState('hunt'); // hunt, sort, quiz

    const scenarios = useMemo(() => [
        {
            name: "Savane Sénégalaise",
            emoji: "🦁",
            difficulty: "⭐ Facile",
            targetType: 'vivant',
            instruction: "Trouve tous les êtres VIVANTS !",
            items: [
                { id: 'baobab', name: 'Baobab', type: 'vivant', pos: [-3, 0, -2], emoji: '🌳' },
                { id: 'lion', name: 'Lion', type: 'vivant', pos: [2, 0.5, 1], emoji: '🦁' },
                { id: 'gazelle', name: 'Gazelle', type: 'vivant', pos: [-1, 0.3, 2], emoji: '🦌' },
                { id: 'rock', name: 'Rocher', type: 'non-vivant', pos: [3, -0.5, -1], emoji: '🪨' },
                { id: 'water', name: 'Mare', type: 'non-vivant', pos: [0, -0.8, 0], emoji: '💧' },
                { id: 'bird', name: 'Aigle', type: 'vivant', pos: [1, 2, -2], emoji: '🦅' },
            ]
        },
        {
            name: "Plage de Saly",
            emoji: "🏖️",
            difficulty: "⭐ Facile",
            targetType: 'vivant',
            instruction: "Identifie les êtres vivants marins !",
            items: [
                { id: 'poisson', name: 'Thiof', type: 'vivant', pos: [-2, 0, 1], emoji: '🐟' },
                { id: 'crabe', name: 'Crabe', type: 'vivant', pos: [1, -0.5, 2], emoji: '🦀' },
                { id: 'algue', name: 'Algue', type: 'vivant', pos: [0, 0, -1], emoji: '🌿' },
                { id: 'coquillage', name: 'Coquillage vide', type: 'non-vivant', pos: [-1, -0.8, 0], emoji: '🐚' },
                { id: 'sable', name: 'Sable', type: 'non-vivant', pos: [2, -1, -2], emoji: '🏖️' },
                { id: 'mouette', name: 'Mouette', type: 'vivant', pos: [0, 2, 0], emoji: '🕊️' },
                { id: 'pelican', name: 'Pélican', type: 'vivant', pos: [-2, 1.5, -1], emoji: '🦢' },
            ]
        },
        {
            name: "Forêt de Casamance",
            emoji: "🌴",
            difficulty: "⭐⭐ Moyen",
            targetType: 'non-vivant',
            instruction: "Trouve les éléments NON-VIVANTS !",
            items: [
                { id: 'fromager', name: 'Fromager', type: 'vivant', pos: [0, 1, 0], emoji: '🌳' },
                { id: 'singe', name: 'Singe', type: 'vivant', pos: [-2, 1, 1], emoji: '🐒' },
                { id: 'riviere', name: 'Rivière', type: 'non-vivant', pos: [2, -0.5, 0], emoji: '🌊' },
                { id: 'rocher', name: 'Rocher', type: 'non-vivant', pos: [-1, -0.3, -2], emoji: '🪨' },
                { id: 'perroquet', name: 'Perroquet', type: 'vivant', pos: [1, 2, -1], emoji: '🦜' },
                { id: 'nuage', name: 'Nuage', type: 'non-vivant', pos: [0, 3, -3], emoji: '☁️' },
                { id: 'soleil', name: 'Soleil', type: 'non-vivant', pos: [3, 4, -4], emoji: '☀️' },
            ]
        },
        {
            name: "Désert du Ferlo",
            emoji: "🏜️",
            difficulty: "⭐⭐⭐ Difficile",
            targetType: 'vivant',
            instruction: "Même dans le désert, trouve les vivants !",
            items: [
                { id: 'dromadaire', name: 'Dromadaire', type: 'vivant', pos: [-2, 0.5, 0], emoji: '🐪' },
                { id: 'scorpion', name: 'Scorpion', type: 'vivant', pos: [1, -0.5, 1], emoji: '🦂' },
                { id: 'cactus', name: 'Cactus', type: 'vivant', pos: [0, 0, -2], emoji: '🌵' },
                { id: 'dune', name: 'Dune de sable', type: 'non-vivant', pos: [3, 0, 1], emoji: '🏜️' },
                { id: 'fennec', name: 'Fennec', type: 'vivant', pos: [-1, 0, 2], emoji: '🦊' },
                { id: 'vent', name: 'Vent (invisible)', type: 'non-vivant', pos: [2, 1, -1], emoji: '💨' },
                { id: 'fossile', name: 'Fossile', type: 'non-vivant', pos: [-3, -0.5, -1], emoji: '🦴' },
                { id: 'serpent', name: 'Vipère', type: 'vivant', pos: [0, -0.3, 1], emoji: '🐍' },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const targetCount = scenario.items.filter(i => i.type === scenario.targetType).length;

    const handleClick = useCallback((item) => {
        if (found.includes(item.id) || gameComplete) return;

        setFound(prev => [...prev, item.id]);

        if (item.type === scenario.targetType) {
            setScore(prev => prev + 15);
            setMessage(`✅ ${item.name} est bien ${scenario.targetType === 'vivant' ? 'VIVANT' : 'NON-VIVANT'} !`);

            const newFoundTarget = [...found, item.id].filter(id =>
                scenario.items.find(i => i.id === id)?.type === scenario.targetType
            ).length;

            if (newFoundTarget >= targetCount) {
                setGameComplete(true);
                setMessage("🎉 BRAVO ! Mission accomplie !");
            }
        } else {
            setScore(prev => Math.max(0, prev - 5));
            setMessage(`❌ Non ! ${item.name} est ${item.type === 'vivant' ? 'VIVANT' : 'NON-VIVANT'}.`);
        }
    }, [found, gameComplete, scenario, targetCount]);

    const reset = () => {
        setScore(0);
        setFound([]);
        setMessage("");
        setGameComplete(false);
    };

    const nextScenario = () => {
        if (scenarioIndex < scenarios.length - 1) {
            setScenarioIndex(s => s + 1);
            reset();
        }
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌍 Explorateur d'Environnement">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Choisis ton environnement :" />

                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={score} maxScore={targetCount * 15} />
                            <span className="text-xs bg-white/10 px-2 py-1 rounded">{found.filter(id => scenario.items.find(i => i.id === id)?.type === scenario.targetType).length}/{targetCount}</span>
                        </div>

                        <ProgressBar current={found.filter(id => scenario.items.find(i => i.id === id)?.type === scenario.targetType).length} max={targetCount} />

                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg text-center text-sm">
                            🎯 {scenario.instruction}
                        </div>

                        {message && (
                            <div className={`p-2 rounded-lg text-center text-sm font-bold ${message.includes('✅') || message.includes('🎉') ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'}`}>
                                {message}
                            </div>
                        )}

                        <div className="flex gap-2">
                            <GameButton onClick={reset} size="small">🔄</GameButton>
                            {gameComplete && scenarioIndex < scenarios.length - 1 && (
                                <GameButton onClick={nextScenario} color="green" size="small">Niveau suivant →</GameButton>
                            )}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[15, 15]} />
                <meshStandardMaterial color={scenarioIndex === 0 ? '#C4A484' : scenarioIndex === 1 ? '#D4B896' : scenarioIndex === 2 ? '#2E7D32' : '#E8D4A8'} />
            </mesh>

            {scenario.items.map((item) => (
                <group key={item.id} position={item.pos} onClick={() => handleClick(item)}>
                    <Float speed={item.type === 'vivant' ? 3 : 0.5} floatIntensity={0.2}>
                        <Billboard>
                            <Text fontSize={1} anchorX="center" anchorY="middle">
                                {found.includes(item.id) ? (item.type === scenario.targetType ? '✅' : '❌') : item.emoji}
                            </Text>
                        </Billboard>
                        {found.includes(item.id) && item.type === scenario.targetType && (
                            <Sparkles count={15} scale={2} size={3} speed={0.5} color="#4CAF50" />
                        )}
                    </Float>
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 2. VERTEBRATE CLASSIFICATION - 4 SCÉNARIOS
// ============================================================================
export function VertebrateClassification() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [currentAnimal, setCurrentAnimal] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [streak, setStreak] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Animaux d'Afrique",
            emoji: "🌍",
            difficulty: "⭐ Facile",
            animals: [
                { name: 'Lion', emoji: '🦁', correct: 'mammifere', hint: 'Roi de la savane, il rugit' },
                { name: 'Éléphant', emoji: '🐘', correct: 'mammifere', hint: 'Le plus grand animal terrestre' },
                { name: 'Crocodile', emoji: '🐊', correct: 'reptile', hint: 'Vit dans le fleuve Sénégal' },
                { name: 'Flamant rose', emoji: '🦩', correct: 'oiseau', hint: 'Oiseau rose du lac Rose' },
                { name: 'Thiof', emoji: '🐟', correct: 'poisson', hint: 'Poisson star du Thiéboudienne' },
            ]
        },
        {
            name: "Ferme Sénégalaise",
            emoji: "🐓",
            difficulty: "⭐ Facile",
            animals: [
                { name: 'Poule', emoji: '🐔', correct: 'oiseau', hint: 'Donne des œufs chaque matin' },
                { name: 'Mouton', emoji: '🐑', correct: 'mammifere', hint: 'Animal de la Tabaski' },
                { name: 'Canard', emoji: '🦆', correct: 'oiseau', hint: 'Nage dans la mare' },
                { name: 'Chèvre', emoji: '🐐', correct: 'mammifere', hint: 'Grimpe partout' },
                { name: 'Tilapia', emoji: '🐠', correct: 'poisson', hint: 'Poisson d\'élevage' },
            ]
        },
        {
            name: "Animaux du Monde",
            emoji: "🌎",
            difficulty: "⭐⭐ Moyen",
            animals: [
                { name: 'Pingouin', emoji: '🐧', correct: 'oiseau', hint: 'Oiseau qui ne vole pas mais nage' },
                { name: 'Baleine', emoji: '🐋', correct: 'mammifere', hint: 'Vit dans l\'eau mais allaite' },
                { name: 'Tortue marine', emoji: '🐢', correct: 'reptile', hint: 'Pond sur les plages' },
                { name: 'Salamandre', emoji: '🦎', correct: 'amphibien', hint: 'Ressemble à un lézard mais peau humide' },
                { name: 'Dauphin', emoji: '🐬', correct: 'mammifere', hint: 'Intelligent et respire à la surface' },
                { name: 'Orque', emoji: '🐋', correct: 'mammifere', hint: 'Appelée baleine tueuse mais c\'est...' },
            ]
        },
        {
            name: "Pièges et Confusions",
            emoji: "🧠",
            difficulty: "⭐⭐⭐ Expert",
            animals: [
                { name: 'Chauve-souris', emoji: '🦇', correct: 'mammifere', hint: 'Seul mammifère qui vole vraiment' },
                { name: 'Ornithorynque', emoji: '🦫', correct: 'mammifere', hint: 'Pond des œufs mais allaite !' },
                { name: 'Axolotl', emoji: '🦎', correct: 'amphibien', hint: 'Reste toute sa vie comme une larve' },
                { name: 'Raie', emoji: '🐠', correct: 'poisson', hint: 'Aplatie mais respire par branchies' },
                { name: 'Anguille', emoji: '🐍', correct: 'poisson', hint: 'Ressemble à un serpent mais...' },
                { name: 'Caméléon', emoji: '🦎', correct: 'reptile', hint: 'Change de couleur, écailles soudées' },
            ]
        }
    ], []);

    const classes = [
        { id: 'mammifere', name: 'Mammifères', emoji: '🦁', color: '#F44336', criteria: 'Poils + Lait' },
        { id: 'oiseau', name: 'Oiseaux', emoji: '🐦', color: '#2196F3', criteria: 'Plumes + Bec' },
        { id: 'reptile', name: 'Reptiles', emoji: '🦎', color: '#4CAF50', criteria: 'Écailles soudées' },
        { id: 'amphibien', name: 'Amphibiens', emoji: '🐸', color: '#8BC34A', criteria: 'Peau nue humide' },
        { id: 'poisson', name: 'Poissons', emoji: '🐠', color: '#00BCD4', criteria: 'Branchies + Nageoires' },
    ];

    const scenario = scenarios[scenarioIndex];
    const animal = scenario.animals[currentAnimal];

    const handleAnswer = (classId) => {
        if (answered) return;
        setAnswered(true);

        if (classId === animal.correct) {
            const bonus = streak >= 3 ? 5 : 0;
            setScore(s => s + 10 + bonus);
            setStreak(s => s + 1);
            setFeedback(`✅ Correct ! ${bonus > 0 ? `+${bonus} bonus série !` : ''}`);
        } else {
            setStreak(0);
            setFeedback(`❌ C'est un ${classes.find(c => c.id === animal.correct)?.name.slice(0, -1)}`);
        }
    };

    const next = () => {
        if (currentAnimal < scenario.animals.length - 1) {
            setCurrentAnimal(c => c + 1);
            setAnswered(false);
            setFeedback('');
        }
    };

    const reset = () => {
        setCurrentAnimal(0);
        setScore(0);
        setAnswered(false);
        setFeedback('');
        setStreak(0);
    };

    const isComplete = currentAnimal >= scenario.animals.length - 1 && answered;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🐢 Classification des Vertébrés">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Choisis ton défi :" />

                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={score} maxScore={scenario.animals.length * 15} />
                            <div className="flex items-center gap-2">
                                {streak >= 2 && <span className="text-xs bg-orange-500/30 text-orange-300 px-2 py-1 rounded animate-pulse">🔥 x{streak}</span>}
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">{currentAnimal + 1}/{scenario.animals.length}</span>
                            </div>
                        </div>

                        <div className="text-center p-4 bg-gradient-to-b from-purple-500/20 to-transparent rounded-xl">
                            <div className="text-5xl mb-2">{animal.emoji}</div>
                            <div className="text-lg font-bold text-white">{animal.name}</div>
                            <div className="text-xs text-gray-400 italic">💡 {animal.hint}</div>
                        </div>

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-sm font-bold ${feedback.includes('✅') ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'}`}>
                                {feedback}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-1">
                            {classes.map(cls => (
                                <button key={cls.id} onClick={() => handleAnswer(cls.id)} disabled={answered}
                                    className={`p-2 rounded-lg text-xs transition-all ${answered && cls.id === animal.correct ? 'bg-green-500 text-white' :
                                            answered ? 'opacity-40' : 'bg-white/10 hover:bg-white/20'
                                        }`} style={{ borderLeft: `3px solid ${cls.color}` }}>
                                    <div className="font-bold">{cls.emoji} {cls.name}</div>
                                    <div className="text-[10px] text-gray-400">{cls.criteria}</div>
                                </button>
                            ))}
                        </div>

                        {answered && !isComplete && <GameButton onClick={next} color="cyan">Suivant →</GameButton>}

                        {isComplete && (
                            <div className="text-center p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
                                <div className="text-2xl">🏆</div>
                                <div className="font-bold text-yellow-400">Score: {score}/{scenario.animals.length * 15}</div>
                                <GameButton onClick={() => { setScenarioIndex(s => Math.min(s + 1, scenarios.length - 1)); reset(); }} color="green">
                                    {scenarioIndex < scenarios.length - 1 ? 'Niveau suivant' : 'Recommencer'}
                                </GameButton>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {classes.map((cls, i) => (
                <group key={cls.id} position={[Math.cos(i * Math.PI * 2 / 5) * 3, 0, Math.sin(i * Math.PI * 2 / 5) * 3]}>
                    <mesh><cylinderGeometry args={[1, 1, 0.3, 6]} /><meshStandardMaterial color={cls.color} /></mesh>
                    <Billboard position={[0, 0.8, 0]}><Text fontSize={0.4} color="white">{cls.emoji}</Text></Billboard>
                </group>
            ))}

            <Float speed={2} floatIntensity={0.5}>
                <Billboard position={[0, 2.5, 0]}><Text fontSize={1.5}>{animal.emoji}</Text></Billboard>
            </Float>
        </group>
    );
}

// ============================================================================
// 3. FOOD CHAIN - 4 SCÉNARIOS
// ============================================================================
export function FoodChain() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [level, setLevel] = useState(0);
    const [energy, setEnergy] = useState(100);
    const [mode, setMode] = useState('explore'); // explore, build, quiz

    const scenarios = useMemo(() => [
        {
            name: "Savane",
            emoji: "🦁",
            difficulty: "⭐ Facile",
            levels: [
                { name: "Herbe", emoji: "🌱", organisms: "Graminées", energy: 100 },
                { name: "Herbivores", emoji: "🦓", organisms: "Zèbres, Gazelles", energy: 10 },
                { name: "Carnivores", emoji: "🦁", organisms: "Lions", energy: 1 },
                { name: "Charognards", emoji: "🦅", organisms: "Vautours", energy: 0.1 },
            ]
        },
        {
            name: "Océan Atlantique",
            emoji: "🌊",
            difficulty: "⭐⭐ Moyen",
            levels: [
                { name: "Phytoplancton", emoji: "🦠", organisms: "Algues microscopiques", energy: 100 },
                { name: "Zooplancton", emoji: "🦐", organisms: "Petits crustacés", energy: 10 },
                { name: "Petits poissons", emoji: "🐟", organisms: "Sardines", energy: 1 },
                { name: "Grands poissons", emoji: "🦈", organisms: "Thons, Requins", energy: 0.1 },
            ]
        },
        {
            name: "Fleuve Sénégal",
            emoji: "🏞️",
            difficulty: "⭐⭐ Moyen",
            levels: [
                { name: "Algues", emoji: "🌿", organisms: "Algues d'eau douce", energy: 100 },
                { name: "Invertébrés", emoji: "🐌", organisms: "Escargots, Larves", energy: 10 },
                { name: "Poissons", emoji: "🐠", organisms: "Tilapia, Carpe", energy: 1 },
                { name: "Oiseaux", emoji: "🦅", organisms: "Hérons, Martin-pêcheur", energy: 0.1 },
                { name: "Crocodile", emoji: "🐊", organisms: "Superprédateur", energy: 0.01 },
            ]
        },
        {
            name: "Réseau Complexe",
            emoji: "🕸️",
            difficulty: "⭐⭐⭐ Expert",
            levels: [
                { name: "Producteurs", emoji: "🌱", organisms: "Multiples plantes", energy: 100 },
                { name: "Conso. I", emoji: "🐛", organisms: "Insectes, Rongeurs", energy: 15 },
                { name: "Conso. II", emoji: "🐍", organisms: "Serpents, Oiseaux", energy: 2 },
                { name: "Conso. III", emoji: "🦅", organisms: "Aigles, Renards", energy: 0.3 },
                { name: "Décomposeurs", emoji: "🍄", organisms: "Champignons, Bactéries", energy: "♻️" },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const advance = () => {
        if (level < scenario.levels.length - 1) {
            setLevel(l => l + 1);
            const nextEnergy = scenario.levels[level + 1].energy;
            setEnergy(typeof nextEnergy === 'number' ? nextEnergy : 100);
        }
    };

    const reset = () => {
        setLevel(0);
        setEnergy(100);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🦁 Chaînes Alimentaires">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Choisis l'écosystème :" />

                        <div className="text-center">
                            <div className="text-4xl mb-1">{scenario.levels[level].emoji}</div>
                            <div className="font-bold text-lg text-white">{scenario.levels[level].name}</div>
                            <div className="text-xs text-gray-400">{scenario.levels[level].organisms}</div>
                        </div>

                        <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                            <div className="text-xs text-gray-400 mb-1">Énergie disponible</div>
                            <div className="flex items-center gap-2">
                                <ProgressBar current={typeof energy === 'number' ? energy : 100} max={100} color="#FFC107" />
                                <span className="font-bold text-yellow-400">{typeof energy === 'number' ? `${energy}%` : '♻️'}</span>
                            </div>
                        </div>

                        <div className="text-xs text-center p-2 bg-cyan-500/10 rounded text-cyan-400">
                            💡 Règle des 10% : Seulement 10% de l'énergie passe au niveau suivant !
                        </div>

                        <div className="flex gap-1">
                            {scenario.levels.map((_, i) => (
                                <div key={i} className={`flex-1 h-2 rounded transition-all ${i <= level ? 'bg-green-500' : 'bg-gray-700'}`} />
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <GameButton onClick={reset} size="small">🔄</GameButton>
                            <GameButton onClick={advance} color="cyan" disabled={level >= scenario.levels.length - 1} size="small">
                                {level >= scenario.levels.length - 1 ? 'Fin !' : 'Niveau suivant →'}
                            </GameButton>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 10, 5]} intensity={1.5} />

            {scenario.levels.map((lvl, i) => (
                <group key={i} position={[0, i * 1.8 - 3, 0]}>
                    <mesh>
                        <cylinderGeometry args={[2.5 - i * 0.4, 3 - i * 0.4, 1.4, 6]} />
                        <meshStandardMaterial
                            color={i === 0 ? '#4CAF50' : i === scenario.levels.length - 1 ? '#F44336' : '#FFC107'}
                            transparent opacity={i <= level ? 1 : 0.2}
                            emissive={i === level ? '#FFC107' : '#000'} emissiveIntensity={i === level ? 0.3 : 0}
                        />
                    </mesh>
                    <Billboard position={[3.5, 0, 0]}><Text fontSize={0.35} color="white">{lvl.emoji} {lvl.name}</Text></Billboard>
                    {i === level && <Sparkles count={25} scale={4} size={3} speed={0.5} color="#FFC107" />}
                </group>
            ))}
        </group>
    );
}
