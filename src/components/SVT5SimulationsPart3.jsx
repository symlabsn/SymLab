'use client';
import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, Sparkles } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { ScoreDisplay, ProgressBar, GameButton } from './SVT5SimulationsAdvanced';

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
// 7. FLOWER REPRODUCTION - Reproduction Plantes à Fleurs (4 Scénarios)
// ============================================================================
export function FlowerReproduction() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [stage, setStage] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Anatomie de la Fleur",
            emoji: "🌸",
            difficulty: "⭐ Facile",
            mode: "learn",
            parts: [
                { name: 'Pétales', emoji: '🌺', desc: 'Attirent les insectes par leurs couleurs', type: 'protection' },
                { name: 'Étamine', emoji: '💛', desc: 'Organe MÂLE, produit le pollen', type: 'male' },
                { name: 'Pistil', emoji: '💚', desc: 'Organe FEMELLE, contient les ovules', type: 'femelle' },
                { name: 'Sépales', emoji: '🌿', desc: 'Protègent le bouton floral', type: 'protection' },
            ]
        },
        {
            name: "La Pollinisation",
            emoji: "🐝",
            difficulty: "⭐⭐ Moyen",
            mode: "simulation",
            steps: [
                { name: 'Abeille attirée', desc: 'L\'abeille voit les couleurs vives', emoji: '🐝', action: 'Cliquez sur l\'abeille' },
                { name: 'Collecte du pollen', desc: 'Le pollen colle aux pattes de l\'abeille', emoji: '💛', action: 'Le pollen est collecté' },
                { name: 'Transport', desc: 'L\'abeille vole vers une autre fleur', emoji: '✈️', action: 'L\'abeille voyage' },
                { name: 'Dépôt sur pistil', desc: 'Le pollen tombe sur le pistil', emoji: '🎯', action: 'Pollinisation réussie !' },
            ]
        },
        {
            name: "De la Fleur au Fruit",
            emoji: "🍎",
            difficulty: "⭐⭐ Moyen",
            mode: "timeline",
            stages: [
                { name: 'Fleur ouverte', emoji: '🌸', desc: 'Prête pour la pollinisation' },
                { name: 'Pollinisation', emoji: '🐝', desc: 'Le pollen atteint le pistil' },
                { name: 'Fécondation', emoji: '✨', desc: 'Le tube pollinique rejoint l\'ovule' },
                { name: 'Fanaison', emoji: '🥀', desc: 'Les pétales tombent' },
                { name: 'Développement', emoji: '🫛', desc: 'Le pistil grossit' },
                { name: 'Fruit mûr', emoji: '🍎', desc: 'Contient les graines' },
            ]
        },
        {
            name: "Quiz Reproduction",
            emoji: "❓",
            difficulty: "⭐⭐⭐ Expert",
            mode: "quiz",
            questions: [
                { q: "Quel organe de la fleur produit le pollen ?", a: "L'étamine", wrong: ["Le pistil", "Le pétale"] },
                { q: "Que devient l'ovule après fécondation ?", a: "La graine", wrong: ["Le fruit", "Le pétale"] },
                { q: "Que devient le pistil après fécondation ?", a: "Le fruit", wrong: ["La graine", "Le pollen"] },
                { q: "Quel est le rôle des pétales colorés ?", a: "Attirer les pollinisateurs", wrong: ["Protéger la plante", "Produire des graines"] },
                { q: "Les abeilles transportent...", a: "Le pollen (cellules mâles)", wrong: ["Les graines", "L'eau"] },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const [partIndex, setPartIndex] = useState(0);
    const [quizIndex, setQuizIndex] = useState(0);
    const [answered, setAnswered] = useState(false);

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        if (answer === scenario.questions[quizIndex].a) {
            setScore(s => s + 20);
            setFeedback('✅ Exact !');
        } else {
            setFeedback(`❌ ${scenario.questions[quizIndex].a}`);
        }
    };

    const next = () => {
        if (scenario.mode === 'quiz' && quizIndex < scenario.questions.length - 1) {
            setQuizIndex(i => i + 1);
            setAnswered(false);
            setFeedback('');
        } else if (scenario.mode === 'learn' && partIndex < scenario.parts.length - 1) {
            setPartIndex(i => i + 1);
            setScore(s => s + 10);
        } else if ((scenario.mode === 'timeline' || scenario.mode === 'simulation') && stage < (scenario.stages?.length || scenario.steps?.length) - 1) {
            setStage(s => s + 1);
            setScore(s => s + 15);
        }
    };

    const reset = () => {
        setScore(0);
        setPartIndex(0);
        setQuizIndex(0);
        setStage(0);
        setAnswered(false);
        setFeedback('');
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌸 Reproduction des Plantes à Fleurs">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Leçon :" />

                        <ScoreDisplay score={score} maxScore={100} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.mode === 'learn' && scenario.parts[partIndex] && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-pink-500/20 to-transparent rounded-xl">
                                    <div className="text-5xl mb-2">{scenario.parts[partIndex].emoji}</div>
                                    <div className="text-lg font-bold text-white">{scenario.parts[partIndex].name}</div>
                                    <div className="text-xs text-gray-300 mt-2">{scenario.parts[partIndex].desc}</div>
                                    <div className={`mt-2 px-3 py-1 rounded-full inline-block text-xs ${scenario.parts[partIndex].type === 'male' ? 'bg-blue-500/30 text-blue-300' :
                                        scenario.parts[partIndex].type === 'femelle' ? 'bg-pink-500/30 text-pink-300' :
                                            'bg-gray-500/30 text-gray-300'
                                        }`}>
                                        {scenario.parts[partIndex].type === 'male' ? '♂ Mâle' : scenario.parts[partIndex].type === 'femelle' ? '♀ Femelle' : '🛡️ Protection'}
                                    </div>
                                </div>
                                {partIndex < scenario.parts.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
                                )}
                            </>
                        )}

                        {scenario.mode === 'simulation' && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-xl">
                                    <div className="text-4xl mb-2">{scenario.steps[stage]?.emoji}</div>
                                    <div className="text-lg font-bold text-white">{scenario.steps[stage]?.name}</div>
                                    <div className="text-xs text-gray-300">{scenario.steps[stage]?.desc}</div>
                                </div>
                                <ProgressBar current={stage + 1} max={scenario.steps.length} color="#FFC107" />
                                {stage < scenario.steps.length - 1 && (
                                    <GameButton onClick={next} color="yellow">🐝 Continuer</GameButton>
                                )}
                                {stage >= scenario.steps.length - 1 && (
                                    <div className="p-2 bg-green-500/30 rounded-lg text-center text-green-300 font-bold">
                                        🎉 Pollinisation réussie !
                                    </div>
                                )}
                            </>
                        )}

                        {scenario.mode === 'timeline' && (
                            <>
                                <div className="flex gap-1 overflow-x-auto pb-2">
                                    {scenario.stages.map((s, i) => (
                                        <div key={i} className={`flex-shrink-0 w-12 text-center p-1 rounded ${i <= stage ? 'bg-green-500/30' : 'bg-gray-700/30'}`}>
                                            <div className="text-xl">{s.emoji}</div>
                                            <div className="text-[8px]">{s.name}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center p-3 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl">
                                    <div className="text-3xl mb-1">{scenario.stages[stage]?.emoji}</div>
                                    <div className="font-bold text-white">{scenario.stages[stage]?.name}</div>
                                    <div className="text-xs text-gray-300">{scenario.stages[stage]?.desc}</div>
                                </div>
                                {stage < scenario.stages.length - 1 && (
                                    <GameButton onClick={next} color="green">Étape suivante →</GameButton>
                                )}
                            </>
                        )}

                        {scenario.mode === 'quiz' && (
                            <>
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <div className="text-xs text-gray-400">Question {quizIndex + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[quizIndex]?.q}</div>
                                </div>
                                {!answered && (
                                    <div className="space-y-1">
                                        {[scenario.questions[quizIndex]?.a, ...scenario.questions[quizIndex]?.wrong]
                                            .sort(() => Math.random() - 0.5)
                                            .map((ans, i) => (
                                                <button key={i} onClick={() => handleQuiz(ans)}
                                                    className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                    {ans}
                                                </button>
                                            ))}
                                    </div>
                                )}
                                {answered && quizIndex < scenario.questions.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
                                )}
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Flower 3D model */}
            <group position={[0, -1, 0]}>
                {/* Stem */}
                <mesh position={[0, 0.5, 0]}><cylinderGeometry args={[0.08, 0.12, 2]} /><meshStandardMaterial color="#4CAF50" /></mesh>

                {/* Petals */}
                {[0, 1, 2, 3, 4].map(i => (
                    <mesh key={i} position={[Math.cos(i * Math.PI * 2 / 5) * 0.8, 1.8, Math.sin(i * Math.PI * 2 / 5) * 0.8]}
                        rotation={[0.5, 0, i * Math.PI * 2 / 5]}>
                        <sphereGeometry args={[0.35, 16, 8]} />
                        <meshStandardMaterial color="#E91E63" />
                    </mesh>
                ))}

                {/* Center (pistil) */}
                <mesh position={[0, 1.8, 0]}><sphereGeometry args={[0.3, 16, 16]} /><meshStandardMaterial color="#FFEB3B" /></mesh>

                {/* Stamens */}
                {[0, 1, 2, 3].map(i => (
                    <group key={i} position={[Math.cos(i * Math.PI / 2) * 0.25, 1.9, Math.sin(i * Math.PI / 2) * 0.25]}>
                        <mesh><cylinderGeometry args={[0.02, 0.02, 0.3]} /><meshStandardMaterial color="#8BC34A" /></mesh>
                        <mesh position={[0, 0.18, 0]}><sphereGeometry args={[0.05]} /><meshStandardMaterial color="#FFC107" /></mesh>
                    </group>
                ))}
            </group>

            {scenario.mode === 'simulation' && stage >= 1 && (
                <Float speed={3} floatIntensity={0.5}>
                    <Billboard position={[stage === 2 ? 2 : 0, 2.5, 0]}><Text fontSize={0.8}>🐝</Text></Billboard>
                </Float>
            )}
        </group>
    );
}

// ============================================================================
// 8. SPORE PLANTS - Reproduction Plantes sans Fleurs (4 Scénarios)
// ============================================================================
export function SporeReproduction() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [stage, setStage] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "La Fougère",
            emoji: "🌿",
            difficulty: "⭐ Facile",
            mode: "learn",
            plant: "Fougère",
            facts: [
                { title: "Pas de fleurs !", emoji: "🚫🌸", desc: "Les fougères n'ont pas de fleurs ni de graines" },
                { title: "Les Sporanges", emoji: "🔴", desc: "Petits amas bruns sous les frondes contenant les spores" },
                { title: "Les Spores", emoji: "💨", desc: "Poussières microscopiques qui se dispersent dans l'air" },
                { title: "Le Prothalle", emoji: "💚", desc: "Petite plante en forme de cœur qui naît de la spore" },
            ]
        },
        {
            name: "Cycle de Vie",
            emoji: "🔄",
            difficulty: "⭐⭐ Moyen",
            mode: "cycle",
            stages: [
                { name: 'Fougère adulte', emoji: '🌿', desc: 'Produit des sporanges' },
                { name: 'Sporanges mûrs', emoji: '🔴', desc: 'Contiennent des milliers de spores' },
                { name: 'Libération spores', emoji: '💨', desc: 'Les spores s\'envolent' },
                { name: 'Germination', emoji: '🌱', desc: 'La spore tombe sur sol humide' },
                { name: 'Prothalle', emoji: '💚', desc: 'Petite plante avec organes sexuels' },
                { name: 'Fécondation', emoji: '💧', desc: 'Nécessite de l\'eau (spermatozoïdes nagent)' },
                { name: 'Nouvelle fougère', emoji: '🌿', desc: 'Le cycle recommence !' },
            ]
        },
        {
            name: "Comparaison",
            emoji: "⚖️",
            difficulty: "⭐⭐ Moyen",
            mode: "compare",
            comparisons: [
                { feature: "Fleurs", withFlower: "Oui 🌸", withoutFlower: "Non ❌" },
                { feature: "Graines", withFlower: "Oui 🌰", withoutFlower: "Non (spores)" },
                { feature: "Pollinisation", withFlower: "Par insectes/vent", withoutFlower: "Pas de pollen" },
                { feature: "Besoin d'eau", withFlower: "Pour croissance", withoutFlower: "Pour fécondation !" },
                { feature: "Exemples", withFlower: "Rose, Manguier", withoutFlower: "Fougère, Mousse" },
            ]
        },
        {
            name: "Quiz Spores",
            emoji: "❓",
            difficulty: "⭐⭐⭐ Expert",
            mode: "quiz",
            questions: [
                { q: "Où trouve-t-on les sporanges sur une fougère ?", a: "Sous les frondes (feuilles)", wrong: ["Sur les racines", "Dans les fleurs"] },
                { q: "De quoi a besoin la fougère pour la fécondation ?", a: "De l'eau (milieu humide)", wrong: ["Des insectes", "Du soleil uniquement"] },
                { q: "Qu'est-ce que le prothalle ?", a: "Une petite plante issue de la spore", wrong: ["Une racine", "Un fruit"] },
                { q: "Pourquoi les fougères poussent-elles en forêt humide ?", a: "L'eau est nécessaire à leur reproduction", wrong: ["Elles aiment l'ombre uniquement", "Pour éviter les animaux"] },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const [factIndex, setFactIndex] = useState(0);
    const [quizIndex, setQuizIndex] = useState(0);
    const [answered, setAnswered] = useState(false);

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        if (answer === scenario.questions[quizIndex].a) {
            setScore(s => s + 25);
            setFeedback('✅ Bravo !');
        } else {
            setFeedback(`❌ ${scenario.questions[quizIndex].a}`);
        }
    };

    const next = () => {
        if (scenario.mode === 'quiz' && quizIndex < scenario.questions.length - 1) {
            setQuizIndex(i => i + 1);
            setAnswered(false);
            setFeedback('');
        } else if (scenario.mode === 'learn' && factIndex < scenario.facts.length - 1) {
            setFactIndex(i => i + 1);
            setScore(s => s + 10);
        } else if (scenario.mode === 'cycle' && stage < scenario.stages.length - 1) {
            setStage(s => s + 1);
            setScore(s => s + 12);
        }
    };

    const reset = () => {
        setScore(0);
        setFactIndex(0);
        setQuizIndex(0);
        setStage(0);
        setAnswered(false);
        setFeedback('');
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌿 Reproduction sans Fleurs">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Leçon :" />

                        <ScoreDisplay score={score} maxScore={100} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.mode === 'learn' && scenario.facts[factIndex] && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl">
                                    <div className="text-4xl mb-2">{scenario.facts[factIndex].emoji}</div>
                                    <div className="text-lg font-bold text-white">{scenario.facts[factIndex].title}</div>
                                    <div className="text-xs text-gray-300 mt-2">{scenario.facts[factIndex].desc}</div>
                                </div>
                                <ProgressBar current={factIndex + 1} max={scenario.facts.length} color="#4CAF50" />
                                {factIndex < scenario.facts.length - 1 && (
                                    <GameButton onClick={next} color="green">Suivant →</GameButton>
                                )}
                            </>
                        )}

                        {scenario.mode === 'cycle' && (
                            <>
                                <div className="flex gap-1 overflow-x-auto pb-2">
                                    {scenario.stages.map((s, i) => (
                                        <div key={i} className={`flex-shrink-0 w-10 text-center p-1 rounded ${i <= stage ? 'bg-green-500/30' : 'bg-gray-700/30'}`}>
                                            <div className="text-lg">{s.emoji}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center p-3 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl">
                                    <div className="text-3xl mb-1">{scenario.stages[stage]?.emoji}</div>
                                    <div className="font-bold text-white">{scenario.stages[stage]?.name}</div>
                                    <div className="text-xs text-gray-300">{scenario.stages[stage]?.desc}</div>
                                </div>
                                {stage < scenario.stages.length - 1 ? (
                                    <GameButton onClick={next} color="green">Étape suivante →</GameButton>
                                ) : (
                                    <div className="p-2 bg-green-500/30 rounded-lg text-center text-green-300 font-bold">
                                        🔄 Cycle complet !
                                    </div>
                                )}
                            </>
                        )}

                        {scenario.mode === 'compare' && (
                            <div className="space-y-2">
                                <div className="grid grid-cols-3 gap-1 text-center text-xs font-bold">
                                    <div className="p-1 bg-gray-700">Caractéristique</div>
                                    <div className="p-1 bg-pink-500/30">🌸 Avec Fleurs</div>
                                    <div className="p-1 bg-green-500/30">🌿 Sans Fleurs</div>
                                </div>
                                {scenario.comparisons.map((c, i) => (
                                    <div key={i} className="grid grid-cols-3 gap-1 text-center text-xs">
                                        <div className="p-1 bg-gray-800 text-gray-300">{c.feature}</div>
                                        <div className="p-1 bg-pink-500/10">{c.withFlower}</div>
                                        <div className="p-1 bg-green-500/10">{c.withoutFlower}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {scenario.mode === 'quiz' && (
                            <>
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <div className="text-xs text-gray-400">Question {quizIndex + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[quizIndex]?.q}</div>
                                </div>
                                {!answered && (
                                    <div className="space-y-1">
                                        {[scenario.questions[quizIndex]?.a, ...scenario.questions[quizIndex]?.wrong]
                                            .sort(() => Math.random() - 0.5)
                                            .map((ans, i) => (
                                                <button key={i} onClick={() => handleQuiz(ans)}
                                                    className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                    {ans}
                                                </button>
                                            ))}
                                    </div>
                                )}
                                {answered && quizIndex < scenario.questions.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
                                )}
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 5, 5]} intensity={1} color="#8BC34A" />

            {/* Fern 3D model */}
            <group position={[0, -1.5, 0]}>
                {[0, 1, 2, 3, 4, 5].map(i => (
                    <group key={i} rotation={[0.3, i * Math.PI / 3, 0]}>
                        <mesh position={[0, 1 + i * 0.1, 0.5]} rotation={[-0.5, 0, 0]}>
                            <boxGeometry args={[0.1 + i * 0.1, 0.02, 1 + i * 0.2]} />
                            <meshStandardMaterial color="#4CAF50" />
                        </mesh>
                        {/* Sporanges */}
                        {i % 2 === 0 && [0, 1, 2].map(j => (
                            <mesh key={j} position={[0, 1 + i * 0.1, 0.3 + j * 0.25]} rotation={[-0.5, 0, 0]}>
                                <sphereGeometry args={[0.04]} />
                                <meshStandardMaterial color="#8D6E63" />
                            </mesh>
                        ))}
                    </group>
                ))}
            </group>

            {scenario.mode === 'cycle' && stage >= 2 && stage <= 3 && (
                <Sparkles count={30} scale={4} size={2} speed={0.5} color="#8BC34A" position={[0, 1, 0]} />
            )}
        </group>
    );
}

// ============================================================================  
// 9-12. EARTH SCIENCES (Sols, Roches Sédimentaires)
// ============================================================================
export function SoilScience() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const scenarios = useMemo(() => [
        {
            name: "Composition du Sol",
            emoji: "🌍",
            difficulty: "⭐ Facile",
            mode: "layers",
            layers: [
                { name: 'Litière', emoji: '🍂', desc: 'Feuilles mortes, débris végétaux', color: '#8D6E63' },
                { name: 'Humus', emoji: '🟤', desc: 'Matière organique décomposée (noire)', color: '#3E2723' },
                { name: 'Couche minérale', emoji: '🪨', desc: 'Sable, argile, cailloux', color: '#795548' },
                { name: 'Roche mère', emoji: '⛰️', desc: 'Roche dure d\'origine', color: '#5D4037' },
            ]
        },
        {
            name: "Types de Sols",
            emoji: "🏜️",
            difficulty: "⭐⭐ Moyen",
            mode: "types",
            soilTypes: [
                { name: 'Sol sableux', emoji: '🏖️', props: 'Drainant, pauvre', good: 'Palmiers', bad: 'Riz' },
                { name: 'Sol argileux', emoji: '🧱', props: 'Retient l\'eau, lourd', good: 'Riz', bad: 'Carottes' },
                { name: 'Sol humifère', emoji: '🌱', props: 'Riche, fertile', good: 'Légumes', bad: 'Rien !' },
            ]
        },
        {
            name: "Formation du Sol",
            emoji: "⏳",
            difficulty: "⭐⭐ Moyen",
            mode: "timeline",
            stages: [
                { name: 'Roche nue', emoji: '🪨', desc: 'Tout commence par la roche', time: '0 ans' },
                { name: 'Altération', emoji: '💨', desc: 'Pluie, gel, vent fissurent la roche', time: '1000 ans' },
                { name: 'Lichens/Mousses', emoji: '🌿', desc: 'Premiers végétaux s\'installent', time: '5000 ans' },
                { name: 'Sol mince', emoji: '🟫', desc: 'Débris de roche + matière organique', time: '10000 ans' },
                { name: 'Sol épais', emoji: '🌍', desc: 'Sol fertile, prêt pour l\'agriculture', time: '100000 ans' },
            ]
        },
        {
            name: "Érosion & Protection",
            emoji: "⚠️",
            difficulty: "⭐⭐⭐ Expert",
            mode: "quiz",
            questions: [
                { q: "Qu'est-ce que l'érosion ?", a: "La destruction du sol par l'eau/vent", wrong: ["La formation du sol", "La plantation d'arbres"] },
                { q: "Quel est le rôle des racines des arbres ?", a: "Retenir le sol (anti-érosion)", wrong: ["Casser la roche", "Attirer la pluie"] },
                { q: "La déforestation cause...", a: "L'érosion et la désertification", wrong: ["La formation de nouveaux sols", "Plus de pluie"] },
                { q: "Combien de temps pour former 1cm de sol ?", a: "Des siècles (100-1000 ans)", wrong: ["1 an", "1 semaine"] },
                { q: "Comment protéger le sol ?", a: "Planter des arbres, éviter le surpâturage", wrong: ["Couper les arbres", "Utiliser plus de pesticides"] },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const [layerIndex, setLayerIndex] = useState(0);
    const [stageIndex, setStageIndex] = useState(0);
    const [quizIndex, setQuizIndex] = useState(0);
    const [answered, setAnswered] = useState(false);

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        if (answer === scenario.questions[quizIndex].a) {
            setScore(s => s + 20);
            setFeedback('✅ Excellent !');
        } else {
            setFeedback(`❌ ${scenario.questions[quizIndex].a}`);
        }
    };

    const next = () => {
        if (scenario.mode === 'quiz' && quizIndex < scenario.questions.length - 1) {
            setQuizIndex(i => i + 1);
            setAnswered(false);
            setFeedback('');
        } else if (scenario.mode === 'layers' && layerIndex < scenario.layers.length - 1) {
            setLayerIndex(i => i + 1);
            setScore(s => s + 15);
        } else if (scenario.mode === 'timeline' && stageIndex < scenario.stages.length - 1) {
            setStageIndex(i => i + 1);
            setScore(s => s + 15);
        }
    };

    const reset = () => {
        setScore(0);
        setLayerIndex(0);
        setStageIndex(0);
        setQuizIndex(0);
        setAnswered(false);
        setFeedback('');
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌍 Science des Sols">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Leçon :" />

                        <ScoreDisplay score={score} maxScore={100} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.mode === 'layers' && (
                            <>
                                <div className="space-y-1">
                                    {scenario.layers.map((layer, i) => (
                                        <div key={i} className={`p-2 rounded flex items-center gap-2 ${i === layerIndex ? 'ring-2 ring-cyan-500' : ''}`}
                                            style={{ backgroundColor: layer.color + '40' }}>
                                            <span className="text-xl">{layer.emoji}</span>
                                            <div className="flex-1">
                                                <div className="font-bold text-white text-sm">{layer.name}</div>
                                                {i === layerIndex && <div className="text-xs text-gray-300">{layer.desc}</div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {layerIndex < scenario.layers.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Couche suivante ⬇️</GameButton>
                                )}
                            </>
                        )}

                        {scenario.mode === 'types' && (
                            <div className="space-y-2">
                                {scenario.soilTypes.map((soil, i) => (
                                    <div key={i} className="p-3 bg-white/10 rounded-lg">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-2xl">{soil.emoji}</span>
                                            <span className="font-bold text-white">{soil.name}</span>
                                        </div>
                                        <div className="text-xs text-gray-400">{soil.props}</div>
                                        <div className="flex justify-between text-xs mt-1">
                                            <span className="text-green-400">✅ Bon : {soil.good}</span>
                                            <span className="text-red-400">❌ Mauvais : {soil.bad}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {scenario.mode === 'timeline' && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-amber-500/20 to-transparent rounded-xl">
                                    <div className="text-3xl mb-2">{scenario.stages[stageIndex]?.emoji}</div>
                                    <div className="text-lg font-bold text-white">{scenario.stages[stageIndex]?.name}</div>
                                    <div className="text-xs text-gray-300">{scenario.stages[stageIndex]?.desc}</div>
                                    <div className="text-xs text-amber-400 mt-2">⏳ {scenario.stages[stageIndex]?.time}</div>
                                </div>
                                <ProgressBar current={stageIndex + 1} max={scenario.stages.length} color="#FFC107" />
                                {stageIndex < scenario.stages.length - 1 && (
                                    <GameButton onClick={next} color="yellow">⏳ +10 000 ans</GameButton>
                                )}
                            </>
                        )}

                        {scenario.mode === 'quiz' && (
                            <>
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <div className="text-xs text-gray-400">Question {quizIndex + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[quizIndex]?.q}</div>
                                </div>
                                {!answered && (
                                    <div className="space-y-1">
                                        {[scenario.questions[quizIndex]?.a, ...scenario.questions[quizIndex]?.wrong]
                                            .sort(() => Math.random() - 0.5)
                                            .map((ans, i) => (
                                                <button key={i} onClick={() => handleQuiz(ans)}
                                                    className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                    {ans}
                                                </button>
                                            ))}
                                    </div>
                                )}
                                {answered && quizIndex < scenario.questions.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
                                )}
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Soil layers 3D */}
            {scenario.mode === 'layers' && scenario.layers.map((layer, i) => (
                <mesh key={i} position={[0, -i * 0.8, 0]}>
                    <boxGeometry args={[4, 0.7, 3]} />
                    <meshStandardMaterial color={layer.color} transparent opacity={i <= layerIndex ? 1 : 0.3} />
                </mesh>
            ))}
        </group>
    );
}

export function SedimentaryRocks() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const scenarios = useMemo(() => [
        {
            name: "Formation des Roches",
            emoji: "🏔️",
            difficulty: "⭐ Facile",
            mode: "process",
            steps: [
                { name: 'Érosion', emoji: '💨', desc: 'La roche est cassée en petits morceaux' },
                { name: 'Transport', emoji: '🌊', desc: 'Les rivières transportent les sédiments' },
                { name: 'Dépôt', emoji: '⬇️', desc: 'Les sédiments se déposent (lac, mer)' },
                { name: 'Compaction', emoji: '⏬', desc: 'Les couches s\'empilent et se tassent' },
                { name: 'Diagenèse', emoji: '🪨', desc: 'La pression transforme en roche dure' },
            ]
        },
        {
            name: "Types de Roches",
            emoji: "🪨",
            difficulty: "⭐⭐ Moyen",
            mode: "gallery",
            rocks: [
                { name: 'Grès', emoji: '🧱', origin: 'Sable compacté', use: 'Construction' },
                { name: 'Calcaire', emoji: '⬜', origin: 'Coquillages, squelettes', use: 'Ciment' },
                { name: 'Argile', emoji: '🟤', origin: 'Boue fine', use: 'Briques, poterie' },
                { name: 'Charbon', emoji: '⬛', origin: 'Forêts enfouies', use: 'Énergie' },
            ]
        },
        {
            name: "Ressources du Sénégal",
            emoji: "🇸🇳",
            difficulty: "⭐⭐ Moyen",
            mode: "senegal",
            resources: [
                { name: 'Phosphates', emoji: '🧪', location: 'Thiès', use: 'Engrais pour agriculture' },
                { name: 'Calcaire', emoji: '⬜', location: 'Bargny', use: 'Ciment SOCOCIM' },
                { name: 'Sable', emoji: '🏖️', location: 'Côtes', use: 'Verre, construction' },
                { name: 'Tourbe', emoji: '🟫', location: 'Delta du Saloum', use: 'Combustible' },
            ]
        },
        {
            name: "Gestion Durable",
            emoji: "♻️",
            difficulty: "⭐⭐⭐ Expert",
            mode: "quiz",
            questions: [
                { q: "Pourquoi les roches sédimentaires sont-elles non renouvelables ?", a: "Elles mettent des millions d'années à se former", wrong: ["Elles sont infinies", "Elles poussent vite"] },
                { q: "Comment gérer durablement le sable ?", a: "Recycler et utiliser des alternatives", wrong: ["En prendre plus", "L'importer de l'espace"] },
                { q: "Les phosphates servent à...", a: "Fabriquer des engrais pour l'agriculture", wrong: ["Faire du verre", "Construire des routes"] },
                { q: "Que peut-on recycler pour préserver le sable ?", a: "Le verre (fait de sable)", wrong: ["Le bois", "L'eau"] },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const [stepIndex, setStepIndex] = useState(0);
    const [quizIndex, setQuizIndex] = useState(0);
    const [answered, setAnswered] = useState(false);

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        if (answer === scenario.questions[quizIndex].a) {
            setScore(s => s + 25);
            setFeedback('✅ Parfait !');
        } else {
            setFeedback(`❌ ${scenario.questions[quizIndex].a}`);
        }
    };

    const next = () => {
        if (scenario.mode === 'quiz' && quizIndex < scenario.questions.length - 1) {
            setQuizIndex(i => i + 1);
            setAnswered(false);
            setFeedback('');
        } else if (scenario.mode === 'process' && stepIndex < scenario.steps.length - 1) {
            setStepIndex(i => i + 1);
            setScore(s => s + 15);
        }
    };

    const reset = () => {
        setScore(0);
        setStepIndex(0);
        setQuizIndex(0);
        setAnswered(false);
        setFeedback('');
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🪨 Roches Sédimentaires">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Thème :" />

                        <ScoreDisplay score={score} maxScore={100} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.mode === 'process' && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-amber-500/20 to-transparent rounded-xl">
                                    <div className="text-4xl mb-2">{scenario.steps[stepIndex]?.emoji}</div>
                                    <div className="text-lg font-bold text-white">{scenario.steps[stepIndex]?.name}</div>
                                    <div className="text-xs text-gray-300">{scenario.steps[stepIndex]?.desc}</div>
                                </div>
                                <ProgressBar current={stepIndex + 1} max={scenario.steps.length} color="#8D6E63" />
                                {stepIndex < scenario.steps.length - 1 && (
                                    <GameButton onClick={next} color="yellow">Étape suivante →</GameButton>
                                )}
                            </>
                        )}

                        {scenario.mode === 'gallery' && (
                            <div className="grid grid-cols-2 gap-2">
                                {scenario.rocks.map((rock, i) => (
                                    <div key={i} className="p-3 bg-white/10 rounded-lg text-center">
                                        <div className="text-3xl mb-1">{rock.emoji}</div>
                                        <div className="font-bold text-white text-sm">{rock.name}</div>
                                        <div className="text-xs text-gray-400">Origine: {rock.origin}</div>
                                        <div className="text-xs text-cyan-400">Usage: {rock.use}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {scenario.mode === 'senegal' && (
                            <div className="space-y-2">
                                <div className="text-center text-xs text-yellow-400 mb-1">🇸🇳 Richesses Géologiques du Sénégal</div>
                                {scenario.resources.map((res, i) => (
                                    <div key={i} className="p-2 bg-white/10 rounded-lg flex items-center gap-2">
                                        <span className="text-2xl">{res.emoji}</span>
                                        <div className="flex-1">
                                            <div className="font-bold text-white text-sm">{res.name}</div>
                                            <div className="text-xs text-gray-400">📍 {res.location}</div>
                                            <div className="text-xs text-green-400">✅ {res.use}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {scenario.mode === 'quiz' && (
                            <>
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <div className="text-xs text-gray-400">Question {quizIndex + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[quizIndex]?.q}</div>
                                </div>
                                {!answered && (
                                    <div className="space-y-1">
                                        {[scenario.questions[quizIndex]?.a, ...scenario.questions[quizIndex]?.wrong]
                                            .sort(() => Math.random() - 0.5)
                                            .map((ans, i) => (
                                                <button key={i} onClick={() => handleQuiz(ans)}
                                                    className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                    {ans}
                                                </button>
                                            ))}
                                    </div>
                                )}
                                {answered && quizIndex < scenario.questions.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
                                )}
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Sedimentary layers */}
            {[0, 1, 2, 3].map(i => (
                <mesh key={i} position={[0, -i * 0.5 - 0.5, 0]}>
                    <boxGeometry args={[4, 0.4, 3]} />
                    <meshStandardMaterial color={['#D7CCC8', '#BCAAA4', '#8D6E63', '#5D4037'][i]} />
                </mesh>
            ))}
        </group>
    );
}

// All functions are exported inline with 'export function'
