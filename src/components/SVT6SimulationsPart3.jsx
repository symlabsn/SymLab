'use client';
import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { ScoreDisplay, ProgressBar, GameButton } from './SVT6SimulationsAdvanced';

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
// 7. CELL DISCOVERY - 4 SCÉNARIOS
// ============================================================================
export function CellDiscovery() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [selectedOrganelle, setSelectedOrganelle] = useState(null);
    const [discovered, setDiscovered] = useState([]);
    const [quizMode, setQuizMode] = useState(false);
    const [quizQuestion, setQuizQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Cellule Animale",
            emoji: "🦠",
            difficulty: "⭐ Facile",
            shape: "sphere",
            color: "#F8BBD9",
            organelles: [
                { id: 'membrane', name: 'Membrane', pos: [0, 0, 2], color: '#E1BEE7', desc: 'Frontière de la cellule', emoji: '🛡️', size: 0.15 },
                { id: 'noyau', name: 'Noyau', pos: [0, 0, 0], color: '#7B1FA2', desc: 'Contient l\'ADN', emoji: '🧠', size: 0.6 },
                { id: 'cytoplasme', name: 'Cytoplasme', pos: [0.8, 0.5, 0.5], color: '#F8BBD9', desc: 'Gelée cellulaire', emoji: '🫧', size: 0.2 },
                { id: 'mitochondrie', name: 'Mitochondrie', pos: [-0.8, 0.5, 0.5], color: '#FF5722', desc: 'Produit l\'énergie (ATP)', emoji: '⚡', size: 0.25 },
            ]
        },
        {
            name: "Cellule Végétale",
            emoji: "🌱",
            difficulty: "⭐⭐ Moyen",
            shape: "box",
            color: "#A5D6A7",
            organelles: [
                { id: 'paroi', name: 'Paroi cellulaire', pos: [0, 0, 1.8], color: '#8BC34A', desc: 'Mur rigide de cellulose', emoji: '🧱', size: 0.1 },
                { id: 'membrane', name: 'Membrane', pos: [0, 0, 1.6], color: '#C8E6C9', desc: 'Sous la paroi', emoji: '🛡️', size: 0.1 },
                { id: 'noyau', name: 'Noyau', pos: [0, 0, 0], color: '#2E7D32', desc: 'Centre de contrôle', emoji: '🧠', size: 0.5 },
                { id: 'chloroplaste', name: 'Chloroplaste', pos: [0.8, 0.3, 0.5], color: '#4CAF50', desc: 'Photosynthèse', emoji: '🌿', size: 0.3 },
                { id: 'vacuole', name: 'Vacuole', pos: [-0.5, -0.3, 0], color: '#81D4FA', desc: 'Stockage d\'eau', emoji: '💧', size: 0.7 },
            ]
        },
        {
            name: "Bactérie",
            emoji: "🦠",
            difficulty: "⭐⭐ Moyen",
            shape: "capsule",
            color: "#FFCC80",
            organelles: [
                { id: 'paroi_bact', name: 'Paroi bactérienne', pos: [0, 0, 1], color: '#FF9800', desc: 'Protection externe', emoji: '🛡️', size: 0.1 },
                { id: 'membrane_bact', name: 'Membrane plasmique', pos: [0, 0, 0.8], color: '#FFE0B2', desc: 'Échanges', emoji: '🔄', size: 0.1 },
                { id: 'adn_circulaire', name: 'ADN circulaire', pos: [0, 0, 0], color: '#F44336', desc: 'Pas de noyau !', emoji: '🔴', size: 0.3 },
                { id: 'ribosome', name: 'Ribosomes', pos: [0.3, 0.2, 0.2], color: '#795548', desc: 'Fabrique protéines', emoji: '🏭', size: 0.1 },
                { id: 'flagelle', name: 'Flagelle', pos: [0, 0, -1.2], color: '#FFC107', desc: 'Pour se déplacer', emoji: '🏊', size: 0.15 },
            ]
        },
        {
            name: "Quiz Cellulaire",
            emoji: "❓",
            difficulty: "⭐⭐⭐ Expert",
            mode: "quiz",
            questions: [
                { q: "Quel organite produit l'énergie ?", a: "Mitochondrie", wrong: ["Noyau", "Vacuole"] },
                { q: "Où se trouve l'ADN dans une cellule animale ?", a: "Noyau", wrong: ["Cytoplasme", "Membrane"] },
                { q: "Quel organite est unique aux cellules végétales ?", a: "Chloroplaste", wrong: ["Mitochondrie", "Noyau"] },
                { q: "Que contient la grande vacuole ?", a: "Eau et nutriments", wrong: ["ADN", "Énergie"] },
                { q: "Les bactéries ont-elles un noyau ?", a: "Non", wrong: ["Oui", "Parfois"] },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const handleOrganelleClick = (org) => {
        setSelectedOrganelle(org);
        if (!discovered.includes(org.id)) {
            setDiscovered([...discovered, org.id]);
            setScore(s => s + 10);
        }
    };

    const handleQuizAnswer = (answer) => {
        const question = scenario.questions[quizQuestion];
        if (answer === question.a) {
            setScore(s => s + 20);
        }
        if (quizQuestion < scenario.questions.length - 1) {
            setQuizQuestion(q => q + 1);
        }
    };

    const reset = () => {
        setDiscovered([]);
        setSelectedOrganelle(null);
        setScore(0);
        setQuizQuestion(0);
    };

    const currentOrganelles = scenario.organelles || [];

    return (
        <group scale={[zoom, zoom, zoom]}>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Microscope Virtuel">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Type de cellule :" />

                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={score} maxScore={scenario.mode === 'quiz' ? 100 : currentOrganelles.length * 10} />
                        </div>

                        {scenario.mode !== 'quiz' && (
                            <>
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>🔍 Zoom</span>
                                        <span>{zoom.toFixed(1)}x</span>
                                    </div>
                                    <input type="range" min="0.5" max="2" step="0.1" value={zoom}
                                        onChange={(e) => setZoom(parseFloat(e.target.value))}
                                        className="w-full accent-purple-500" />
                                </div>

                                {selectedOrganelle ? (
                                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-2xl">{selectedOrganelle.emoji}</span>
                                            <span className="font-bold text-white">{selectedOrganelle.name}</span>
                                        </div>
                                        <p className="text-xs text-gray-300">{selectedOrganelle.desc}</p>
                                    </div>
                                ) : (
                                    <div className="text-center text-xs text-gray-400 italic p-2">
                                        👆 Clique sur un organite pour l'identifier
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-1">
                                    {currentOrganelles.map(org => (
                                        <span key={org.id} className={`text-lg ${discovered.includes(org.id) ? '' : 'opacity-30 grayscale'}`}>
                                            {org.emoji}
                                        </span>
                                    ))}
                                </div>

                                <ProgressBar current={discovered.length} max={currentOrganelles.length} color="#9C27B0" />
                            </>
                        )}

                        {scenario.mode === 'quiz' && (
                            <div className="space-y-3">
                                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                                    <div className="text-xs text-gray-400 mb-1">Question {quizQuestion + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white">{scenario.questions[quizQuestion].q}</div>
                                </div>

                                <div className="space-y-2">
                                    {[scenario.questions[quizQuestion].a, ...scenario.questions[quizQuestion].wrong]
                                        .sort(() => Math.random() - 0.5)
                                        .map((answer, i) => (
                                            <button key={i} onClick={() => handleQuizAnswer(answer)}
                                                className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-sm">
                                                {answer}
                                            </button>
                                        ))}
                                </div>

                                <ProgressBar current={quizQuestion} max={scenario.questions.length} color="#4CAF50" />
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 5, 5]} intensity={1} color={scenario.color || '#fff'} />

            {scenario.mode !== 'quiz' && (
                <>
                    <mesh>
                        {scenario.shape === 'sphere' && <sphereGeometry args={[2, 32, 32]} />}
                        {scenario.shape === 'box' && <boxGeometry args={[3.5, 3.5, 3.5]} />}
                        {scenario.shape === 'capsule' && <capsuleGeometry args={[0.8, 2]} />}
                        <meshStandardMaterial color={scenario.color} transparent opacity={0.3} side={THREE.DoubleSide} />
                    </mesh>

                    {currentOrganelles.map((org) => (
                        <group key={org.id} position={org.pos} onClick={() => handleOrganelleClick(org)}>
                            <Float speed={2} floatIntensity={0.2}>
                                <mesh>
                                    <sphereGeometry args={[org.size || 0.3]} />
                                    <meshStandardMaterial
                                        color={org.color}
                                        emissive={selectedOrganelle?.id === org.id ? org.color : '#000'}
                                        emissiveIntensity={selectedOrganelle?.id === org.id ? 0.5 : 0}
                                    />
                                </mesh>
                                {selectedOrganelle?.id === org.id && (
                                    <Sparkles count={10} scale={1} size={2} speed={0.5} color={org.color} />
                                )}
                            </Float>
                        </group>
                    ))}
                </>
            )}
        </group>
    );
}

// ============================================================================
// 8. PLANT GROWTH - 4 SCÉNARIOS
// ============================================================================
export function PlantGrowth() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [stage, setStage] = useState(0);
    const [days, setDays] = useState(0);
    const [watered, setWatered] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);
    const [pollinatorVisit, setPollinatorVisit] = useState(false);
    const [score, setScore] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Haricot (Germination)",
            emoji: "🫘",
            difficulty: "⭐ Facile",
            focusStage: "germination",
            stages: [
                { name: 'Graine sèche', emoji: '🫘', desc: 'La vie est en dormance', duration: 2 },
                { name: 'Imbibition', emoji: '💧', desc: 'La graine absorbe l\'eau et gonfle', duration: 2 },
                { name: 'Radicule', emoji: '🌱', desc: 'La racine sort en premier', duration: 3 },
                { name: 'Tigelle', emoji: '🌿', desc: 'La tige pousse vers la lumière', duration: 3 },
                { name: 'Premières feuilles', emoji: '🍃', desc: 'Les cotylédons s\'ouvrent', duration: 0 },
            ]
        },
        {
            name: "Fleur (Reproduction)",
            emoji: "🌸",
            difficulty: "⭐⭐ Moyen",
            focusStage: "reproduction",
            needsPollinator: true,
            stages: [
                { name: 'Bouton floral', emoji: '🌱', desc: 'La fleur se prépare', duration: 3 },
                { name: 'Floraison', emoji: '🌸', desc: 'Pétales ouverts, attire les pollinisateurs', duration: 4 },
                { name: 'Pollinisation', emoji: '🐝', desc: 'Le pollen atteint le pistil', duration: 2, needsPollinator: true },
                { name: 'Fécondation', emoji: '✨', desc: 'L\'ovule est fécondé', duration: 3 },
                { name: 'Fruit', emoji: '🍎', desc: 'Le fruit protège les graines', duration: 0 },
            ]
        },
        {
            name: "Baobab (Arbre)",
            emoji: "🌳",
            difficulty: "⭐⭐ Moyen",
            focusStage: "croissance",
            slowGrowth: true,
            stages: [
                { name: 'Graine', emoji: '🌰', desc: 'Graine de pain de singe', duration: 5 },
                { name: 'Plantule', emoji: '🌱', desc: 'Jeune pousse fragile', duration: 10 },
                { name: 'Arbrisseau', emoji: '🌿', desc: 'Quelques années de croissance', duration: 15 },
                { name: 'Jeune arbre', emoji: '🌲', desc: 'Tronc qui s\'épaissit', duration: 20 },
                { name: 'Baobab mature', emoji: '🌳', desc: 'Peut vivre 1000 ans !', duration: 0 },
            ]
        },
        {
            name: "Cycle Complet",
            emoji: "🔄",
            difficulty: "⭐⭐⭐ Expert",
            focusStage: "cycle",
            stages: [
                { name: 'Graine', emoji: '🌰', desc: 'Début du cycle', duration: 3 },
                { name: 'Germination', emoji: '🌱', desc: 'La plantule apparaît', duration: 4 },
                { name: 'Croissance', emoji: '🌿', desc: 'Développement végétatif', duration: 5 },
                { name: 'Floraison', emoji: '🌸', desc: 'Production de fleurs', duration: 4 },
                { name: 'Fructification', emoji: '🍎', desc: 'Fruits avec graines', duration: 3 },
                { name: 'Dispersion', emoji: '💨', desc: 'Les graines se dispersent', duration: 2 },
                { name: 'Nouvelle graine', emoji: '🌰', desc: 'Le cycle recommence !', duration: 0 },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            if (!watered) return;

            const currentStage = scenario.stages[stage];
            if (currentStage.needsPollinator && !pollinatorVisit) return;

            setDays(d => {
                const newDays = d + 1;
                if (currentStage.duration > 0 && newDays >= currentStage.duration && stage < scenario.stages.length - 1) {
                    setStage(s => s + 1);
                    setScore(sc => sc + 15);
                    setPollinatorVisit(false);
                    return 0;
                }
                return newDays;
            });
            if (Math.random() > 0.8) setWatered(false);
        }, 800);
        return () => clearInterval(interval);
    }, [autoPlay, watered, stage, pollinatorVisit, scenario]);

    const waterPlant = () => setWatered(true);
    const attractPollinator = () => setPollinatorVisit(true);

    const reset = () => {
        setStage(0);
        setDays(0);
        setWatered(true);
        setPollinatorVisit(false);
        setScore(0);
    };

    const currentStage = scenario.stages[stage];
    const isComplete = stage >= scenario.stages.length - 1;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌱 Cycle de Vie Végétal">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Scénario :" />

                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={score} maxScore={(scenario.stages.length - 1) * 15} />
                            <span className="text-xs bg-white/10 px-2 py-1 rounded">Jour {days}</span>
                        </div>

                        <div className="text-center p-3 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl">
                            <div className="text-4xl mb-1">{currentStage.emoji}</div>
                            <div className="font-bold text-white">{currentStage.name}</div>
                            <div className="text-xs text-gray-400">{currentStage.desc}</div>
                        </div>

                        <ProgressBar current={stage} max={scenario.stages.length - 1} color="#4CAF50" />

                        <div className="flex gap-1 overflow-x-auto pb-1">
                            {scenario.stages.map((s, i) => (
                                <div key={i} className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${i <= stage ? 'bg-green-500' : 'bg-gray-700'}`}>
                                    {s.emoji}
                                </div>
                            ))}
                        </div>

                        {!watered && (
                            <div className="p-2 bg-red-500/20 rounded-lg text-center text-red-300 animate-pulse text-xs">
                                ⚠️ La plante a soif !
                            </div>
                        )}

                        {currentStage.needsPollinator && !pollinatorVisit && (
                            <div className="p-2 bg-yellow-500/20 rounded-lg text-center">
                                <div className="text-xs text-yellow-300 mb-1">🐝 Besoin d&apos;un pollinisateur !</div>
                                <GameButton onClick={attractPollinator} color="yellow" size="small">Attirer une abeille</GameButton>
                            </div>
                        )}

                        {pollinatorVisit && (
                            <div className="p-2 bg-green-500/20 rounded-lg text-center text-green-300 text-xs">
                                ✅ Abeille présente ! Pollinisation en cours...
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-2">
                            <GameButton onClick={waterPlant} disabled={watered} size="small">💧</GameButton>
                            <GameButton onClick={() => setAutoPlay(!autoPlay)} color={autoPlay ? 'red' : 'cyan'} size="small">
                                {autoPlay ? '⏸️' : '▶️'}
                            </GameButton>
                            <GameButton onClick={reset} size="small">🔄</GameButton>
                        </div>

                        {isComplete && (
                            <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-xl text-center">
                                <div className="text-2xl">🎉</div>
                                <div className="font-bold text-green-400">Cycle terminé !</div>
                                {scenarioIndex < scenarios.length - 1 && (
                                    <GameButton onClick={() => { setScenarioIndex(s => s + 1); reset(); }} color="green" size="small">
                                        Prochain scénario →
                                    </GameButton>
                                )}
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <circleGeometry args={[4, 32]} />
                <meshStandardMaterial color={watered ? '#5D4037' : '#8D6E63'} />
            </mesh>

            <group position={[0, -2, 0]}>
                {stage >= 0 && (
                    <mesh position={[0, stage === 0 ? 0.1 : -0.2, 0]}>
                        <sphereGeometry args={[0.25]} />
                        <meshStandardMaterial color="#8D6E63" />
                    </mesh>
                )}

                {stage >= 1 && (
                    <mesh position={[0, -0.4, 0]}>
                        <cylinderGeometry args={[0.03, 0.01, 0.6]} />
                        <meshStandardMaterial color="#5D4037" />
                    </mesh>
                )}

                {stage >= 2 && (
                    <mesh position={[0, Math.min(stage * 0.5, 2), 0]}>
                        <cylinderGeometry args={[0.06, 0.1, Math.min(stage * 0.8, 4)]} />
                        <meshStandardMaterial color="#66BB6A" />
                    </mesh>
                )}

                {stage >= 3 && Array.from({ length: Math.min(stage, 6) }).map((_, i) => (
                    <mesh key={i} position={[0, 1 + i * 0.4, 0]} rotation={[0.3, i * Math.PI / 3, 0.2]}>
                        <boxGeometry args={[0.6, 0.05, 0.25]} />
                        <meshStandardMaterial color="#43A047" />
                    </mesh>
                ))}

                {scenario.focusStage === 'reproduction' && stage >= 1 && stage <= 2 && (
                    <group position={[0, 3, 0]}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <mesh key={i} rotation={[0, i * Math.PI / 2.5, 0.5]} position={[0.4, 0, 0]}>
                                <sphereGeometry args={[0.2]} />
                                <meshStandardMaterial color="#E91E63" />
                            </mesh>
                        ))}
                    </group>
                )}

                {stage >= scenario.stages.length - 2 && scenario.focusStage !== 'germination' && (
                    <Float speed={2} floatIntensity={0.3}>
                        <mesh position={[0, 3.5, 0]}>
                            <sphereGeometry args={[0.5]} />
                            <meshStandardMaterial color="#F44336" />
                        </mesh>
                    </Float>
                )}
            </group>

            {pollinatorVisit && (
                <AnimatedBee />
            )}

            {watered && <Sparkles count={10} scale={5} size={2} speed={0.3} color="#4FC3F7" position={[0, 0, 0]} />}
        </group>
    );
}

function AnimatedBee() {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.position.x = Math.sin(clock.elapsedTime * 2) * 2;
            ref.current.position.y = 3 + Math.sin(clock.elapsedTime * 3) * 0.5;
            ref.current.position.z = Math.cos(clock.elapsedTime * 2) * 2;
        }
    });
    return (
        <group ref={ref}>
            <Billboard><Text fontSize={0.5}>🐝</Text></Billboard>
            <Sparkles count={5} scale={1} size={2} speed={1} color="#FFC107" />
        </group>
    );
}

export { CellDiscovery as CellDiscoveryAdvanced, PlantGrowth as PlantGrowthAdvanced };
