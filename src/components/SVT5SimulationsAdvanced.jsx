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
// 1. LIVING ENVIRONMENT - Le Cadre de Vie (4 Scénarios)
// ============================================================================
export function LivingEnvironment() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [identified, setIdentified] = useState([]);
    const [feedback, setFeedback] = useState('');

    const scenarios = useMemo(() => [
        {
            name: "Mon Quartier",
            emoji: "🏘️",
            difficulty: "⭐ Facile",
            mode: "identify",
            target: "positif",
            instruction: "Identifie les éléments POSITIFS du cadre de vie",
            elements: [
                { id: 'parc', name: 'Parc verdoyant', type: 'positif', pos: [-2, 0, 1], emoji: '🌳' },
                { id: 'ecole', name: 'École propre', type: 'positif', pos: [2, 0, -1], emoji: '🏫' },
                { id: 'poubelle', name: 'Dépotoir sauvage', type: 'negatif', pos: [-1, 0, -2], emoji: '🗑️' },
                { id: 'route', name: 'Route goudronnée', type: 'positif', pos: [0, 0, 2], emoji: '🛤️' },
                { id: 'fumee', name: 'Usine polluante', type: 'negatif', pos: [3, 0, 0], emoji: '🏭' },
            ]
        },
        {
            name: "Problèmes à Résoudre",
            emoji: "⚠️",
            difficulty: "⭐⭐ Moyen",
            mode: "identify",
            target: "negatif",
            instruction: "Trouve les éléments NÉGATIFS à corriger",
            elements: [
                { id: 'eau_stagnante', name: 'Eau stagnante', type: 'negatif', pos: [-2, 0, 0], emoji: '🦟' },
                { id: 'lampadaire', name: 'Éclairage public', type: 'positif', pos: [1, 0, 2], emoji: '💡' },
                { id: 'dechet', name: 'Déchets plastiques', type: 'negatif', pos: [0, 0, -1], emoji: '♻️' },
                { id: 'arbre', name: 'Arbre planté', type: 'positif', pos: [-1, 0, 1], emoji: '🌴' },
                { id: 'bruit', name: 'Zone bruyante', type: 'negatif', pos: [2, 0, 0], emoji: '📢' },
                { id: 'marche', name: 'Marché organisé', type: 'positif', pos: [0, 0, 2], emoji: '🏪' },
            ]
        },
        {
            name: "Améliorer la Ville",
            emoji: "🌟",
            difficulty: "⭐⭐ Moyen",
            mode: "quiz",
            questions: [
                { q: "Que faire des déchets plastiques ?", a: "Les mettre dans une poubelle", wrong: ["Les brûler", "Les jeter dans la rue"] },
                { q: "Comment améliorer la qualité de l'air ?", a: "Planter des arbres", wrong: ["Construire plus d'usines", "Brûler des pneus"] },
                { q: "Que faire de l'eau stagnante ?", a: "La drainer pour éviter les moustiques", wrong: ["La garder pour les animaux", "Y jeter des déchets"] },
                { q: "Comment réduire le bruit ?", a: "Créer des espaces verts tampons", wrong: ["Construire des murs en béton partout", "Ignorer le problème"] },
            ]
        },
        {
            name: "Concepteur Urbain",
            emoji: "🏗️",
            difficulty: "⭐⭐⭐ Expert",
            mode: "build",
            budget: 100,
            improvements: [
                { id: 'arbre', name: 'Planter un arbre', cost: 10, benefit: 15, emoji: '🌳' },
                { id: 'poubelle', name: 'Installer poubelle', cost: 5, benefit: 10, emoji: '🗑️' },
                { id: 'lampe', name: 'Éclairage public', cost: 15, benefit: 20, emoji: '💡' },
                { id: 'banc', name: 'Banc public', cost: 8, benefit: 12, emoji: '🪑' },
                { id: 'fontaine', name: 'Fontaine d\'eau', cost: 20, benefit: 25, emoji: '⛲' },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const handleElementClick = (element) => {
        if (identified.includes(element.id)) return;
        setIdentified([...identified, element.id]);

        if (element.type === scenario.target) {
            setScore(s => s + 15);
            setFeedback(`✅ Oui ! "${element.name}" est un élément ${scenario.target === 'positif' ? 'positif' : 'à améliorer'}`);
        } else {
            setFeedback(`❌ Non, "${element.name}" est un élément ${element.type === 'positif' ? 'positif' : 'négatif'}`);
        }
    };

    const [quizIndex, setQuizIndex] = useState(0);
    const [budget, setBudget] = useState(100);
    const [built, setBuilt] = useState([]);

    const handleQuiz = (answer) => {
        const q = scenario.questions[quizIndex];
        if (answer === q.a) {
            setScore(s => s + 20);
            setFeedback('✅ Excellente réponse !');
        } else {
            setFeedback(`❌ La bonne réponse était : ${q.a}`);
        }
        setTimeout(() => {
            if (quizIndex < scenario.questions.length - 1) {
                setQuizIndex(i => i + 1);
                setFeedback('');
            }
        }, 1500);
    };

    const handleBuild = (item) => {
        if (budget >= item.cost && !built.includes(item.id)) {
            setBudget(b => b - item.cost);
            setBuilt([...built, item.id]);
            setScore(s => s + item.benefit);
        }
    };

    const reset = () => {
        setIdentified([]);
        setScore(0);
        setFeedback('');
        setQuizIndex(0);
        setBudget(100);
        setBuilt([]);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🏘️ Le Cadre de Vie">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Scénario :" />

                        <ScoreDisplay score={score} maxScore={scenario.mode === 'quiz' ? 80 : scenario.mode === 'build' ? 100 : 75} />

                        {scenario.mode === 'identify' && (
                            <>
                                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg text-center text-xs">
                                    🎯 {scenario.instruction}
                                </div>
                                {feedback && (
                                    <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                        {feedback}
                                    </div>
                                )}
                                <ProgressBar current={identified.filter(id => scenario.elements.find(e => e.id === id)?.type === scenario.target).length}
                                    max={scenario.elements.filter(e => e.type === scenario.target).length} color="#4CAF50" />
                            </>
                        )}

                        {scenario.mode === 'quiz' && (
                            <>
                                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                                    <div className="text-xs text-gray-400">Question {quizIndex + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[quizIndex]?.q}</div>
                                </div>
                                {feedback ? (
                                    <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>{feedback}</div>
                                ) : (
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
                            </>
                        )}

                        {scenario.mode === 'build' && (
                            <>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-400">💰 Budget</span>
                                    <span className="font-bold text-yellow-400">{budget} CFA</span>
                                </div>
                                <ProgressBar current={budget} max={100} color="#FFC107" />
                                <div className="space-y-1">
                                    {scenario.improvements.map(item => (
                                        <button key={item.id} onClick={() => handleBuild(item)}
                                            disabled={budget < item.cost || built.includes(item.id)}
                                            className={`w-full p-2 rounded-lg flex items-center gap-2 text-xs ${built.includes(item.id) ? 'bg-green-500/30' : budget < item.cost ? 'opacity-50' : 'bg-white/10 hover:bg-white/20'}`}>
                                            <span className="text-lg">{item.emoji}</span>
                                            <div className="flex-1 text-left">
                                                <div className="font-bold">{item.name}</div>
                                                <div className="text-gray-400">Coût: {item.cost} | Bénéfice: +{item.benefit}</div>
                                            </div>
                                            {built.includes(item.id) && <span>✅</span>}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <planeGeometry args={[15, 15]} />
                <meshStandardMaterial color="#8D6E63" />
            </mesh>

            {scenario.mode === 'identify' && scenario.elements.map((el) => (
                <group key={el.id} position={el.pos} onClick={() => handleElementClick(el)}>
                    <Float speed={2} floatIntensity={0.3}>
                        <Billboard>
                            <Text fontSize={0.8}>
                                {identified.includes(el.id) ? (el.type === scenario.target ? '✅' : '❌') : el.emoji}
                            </Text>
                        </Billboard>
                        {identified.includes(el.id) && el.type === scenario.target && (
                            <Sparkles count={15} scale={2} size={3} color="#4CAF50" />
                        )}
                    </Float>
                </group>
            ))}

            {scenario.mode === 'build' && built.map((id, i) => {
                const item = scenario.improvements.find(imp => imp.id === id);
                return (
                    <group key={id} position={[i * 2 - 4, 0, 0]}>
                        <Float speed={2} floatIntensity={0.2}>
                            <Billboard><Text fontSize={1}>{item?.emoji}</Text></Billboard>
                        </Float>
                        <Sparkles count={10} scale={2} size={2} color="#4CAF50" />
                    </group>
                );
            })}
        </group>
    );
}

// ============================================================================
// 2. POLLUTION - Les Pollutions et Conséquences (4 Scénarios)
// ============================================================================
export function PollutionExplorer() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [pollutionLevel, setPollutionLevel] = useState({ air: 80, eau: 70, sol: 60 });

    const scenarios = useMemo(() => [
        {
            name: "Types de Pollution",
            emoji: "🌫️",
            difficulty: "⭐ Facile",
            mode: "identify",
            pollutions: [
                { id: 'fumee', name: 'Fumée d\'usine', type: 'air', pos: [-2, 1, 0], emoji: '🏭' },
                { id: 'plastique', name: 'Plastique dans l\'eau', type: 'eau', pos: [2, 0, 1], emoji: '🥤' },
                { id: 'pesticide', name: 'Pesticides', type: 'sol', pos: [0, 0, -2], emoji: '☠️' },
                { id: 'voiture', name: 'Gaz d\'échappement', type: 'air', pos: [1, 0.5, 2], emoji: '🚗' },
                { id: 'egout', name: 'Eaux usées', type: 'eau', pos: [-1, 0, 1], emoji: '🚰' },
            ]
        },
        {
            name: "Conséquences Santé",
            emoji: "🏥",
            difficulty: "⭐⭐ Moyen",
            mode: "quiz",
            questions: [
                { q: "Quelle maladie est causée par la pollution de l'air ?", a: "Asthme", wrong: ["Paludisme", "Choléra"] },
                { q: "L'eau polluée peut causer...", a: "La diarrhée et le choléra", wrong: ["Des maux de tête", "Des fractures"] },
                { q: "Les pesticides dans le sol peuvent...", a: "Contaminer les légumes", wrong: ["Améliorer la croissance", "Purifier l'eau"] },
                { q: "Comment le plastique affecte-t-il les animaux marins ?", a: "Ils l'avalent et s'étouffent", wrong: ["Il les nourrit", "Il les protège"] },
            ]
        },
        {
            name: "Solutions Écologiques",
            emoji: "♻️",
            difficulty: "⭐⭐ Moyen",
            mode: "match",
            pairs: [
                { problem: "Déchets plastiques", solution: "Recycler et réutiliser", emoji: "🔄" },
                { problem: "Pollution de l'air", solution: "Transports en commun / Vélo", emoji: "🚲" },
                { problem: "Eau polluée", solution: "Station d'épuration", emoji: "🏭" },
                { problem: "Sol contaminé", solution: "Agriculture biologique", emoji: "🌱" },
            ]
        },
        {
            name: "Sauveur de Planète",
            emoji: "🦸",
            difficulty: "⭐⭐⭐ Expert",
            mode: "cleanup",
            initialPollution: { air: 100, eau: 100, sol: 100 },
            actions: [
                { id: 'arbre', name: 'Planter des arbres', target: 'air', reduction: 20, emoji: '🌳' },
                { id: 'recyclage', name: 'Campagne recyclage', target: 'sol', reduction: 15, emoji: '♻️' },
                { id: 'epuration', name: 'Station épuration', target: 'eau', reduction: 25, emoji: '💧' },
                { id: 'velo', name: 'Pistes cyclables', target: 'air', reduction: 15, emoji: '🚴' },
                { id: 'compost', name: 'Compostage', target: 'sol', reduction: 20, emoji: '🍂' },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const [identified, setIdentified] = useState([]);
    const [matched, setMatched] = useState([]);
    const [selectedProblem, setSelectedProblem] = useState(null);

    const handleIdentify = (poll) => {
        if (identified.includes(poll.id)) return;
        setIdentified([...identified, poll.id]);
        setScore(s => s + 15);
        setFeedback(`✅ ${poll.name} = Pollution de l'${poll.type.toUpperCase()}`);
    };

    const handleQuiz = (answer) => {
        const q = scenario.questions[currentQ];
        if (answer === q.a) {
            setScore(s => s + 20);
            setFeedback('✅ Correct !');
        } else {
            setFeedback(`❌ Réponse : ${q.a}`);
        }
        setTimeout(() => {
            if (currentQ < scenario.questions.length - 1) {
                setCurrentQ(i => i + 1);
                setFeedback('');
            }
        }, 1500);
    };

    const handleMatch = (pair) => {
        if (!matched.includes(pair.problem)) {
            setMatched([...matched, pair.problem]);
            setScore(s => s + 20);
            setFeedback(`✅ ${pair.problem} → ${pair.solution}`);
        }
    };

    const handleCleanup = (action) => {
        setPollutionLevel(prev => ({
            ...prev,
            [action.target]: Math.max(0, prev[action.target] - action.reduction)
        }));
        setScore(s => s + 10);
    };

    const reset = () => {
        setScore(0);
        setCurrentQ(0);
        setFeedback('');
        setIdentified([]);
        setMatched([]);
        setPollutionLevel({ air: 100, eau: 100, sol: 100 });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌫️ Pollutions & Conséquences">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Mission :" />

                        <ScoreDisplay score={score} maxScore={scenario.mode === 'cleanup' ? 100 : 80} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.mode === 'identify' && (
                            <>
                                <div className="text-xs text-center text-gray-400">Clique sur les éléments pour identifier le type de pollution</div>
                                <div className="grid grid-cols-3 gap-1 text-center text-xs">
                                    <div className="p-1 bg-blue-500/20 rounded">🌫️ Air</div>
                                    <div className="p-1 bg-cyan-500/20 rounded">💧 Eau</div>
                                    <div className="p-1 bg-amber-500/20 rounded">🌍 Sol</div>
                                </div>
                            </>
                        )}

                        {scenario.mode === 'quiz' && scenario.questions[currentQ] && !feedback && (
                            <>
                                <div className="p-3 bg-purple-500/20 rounded-xl">
                                    <div className="text-xs text-gray-400">Question {currentQ + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[currentQ].q}</div>
                                </div>
                                <div className="space-y-1">
                                    {[scenario.questions[currentQ].a, ...scenario.questions[currentQ].wrong]
                                        .sort(() => Math.random() - 0.5)
                                        .map((ans, i) => (
                                            <button key={i} onClick={() => handleQuiz(ans)}
                                                className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                {ans}
                                            </button>
                                        ))}
                                </div>
                            </>
                        )}

                        {scenario.mode === 'match' && (
                            <div className="space-y-1">
                                {scenario.pairs.map((pair, i) => (
                                    <button key={i} onClick={() => handleMatch(pair)}
                                        disabled={matched.includes(pair.problem)}
                                        className={`w-full p-2 rounded-lg flex items-center gap-2 text-xs ${matched.includes(pair.problem) ? 'bg-green-500/30' : 'bg-white/10 hover:bg-white/20'}`}>
                                        <span className="text-lg">{pair.emoji}</span>
                                        <div className="flex-1 text-left">
                                            <div className="font-bold">{pair.problem}</div>
                                            <div className="text-gray-400">→ {pair.solution}</div>
                                        </div>
                                        {matched.includes(pair.problem) && <span>✅</span>}
                                    </button>
                                ))}
                            </div>
                        )}

                        {scenario.mode === 'cleanup' && (
                            <>
                                <div className="space-y-2">
                                    <div>
                                        <div className="flex justify-between text-xs"><span>🌫️ Air</span><span>{pollutionLevel.air}%</span></div>
                                        <ProgressBar current={pollutionLevel.air} max={100} color={pollutionLevel.air > 50 ? '#EF4444' : '#4CAF50'} />
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs"><span>💧 Eau</span><span>{pollutionLevel.eau}%</span></div>
                                        <ProgressBar current={pollutionLevel.eau} max={100} color={pollutionLevel.eau > 50 ? '#EF4444' : '#4CAF50'} />
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs"><span>🌍 Sol</span><span>{pollutionLevel.sol}%</span></div>
                                        <ProgressBar current={pollutionLevel.sol} max={100} color={pollutionLevel.sol > 50 ? '#EF4444' : '#4CAF50'} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-1">
                                    {scenario.actions.map(action => (
                                        <button key={action.id} onClick={() => handleCleanup(action)}
                                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-center">
                                            <div className="text-xl">{action.emoji}</div>
                                            <div className="text-[9px]">{action.name}</div>
                                        </button>
                                    ))}
                                </div>
                                {pollutionLevel.air <= 20 && pollutionLevel.eau <= 20 && pollutionLevel.sol <= 20 && (
                                    <div className="p-2 bg-green-500/30 rounded-lg text-center text-green-300 font-bold">
                                        🎉 Planète sauvée !
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Pollution visualization */}
            {scenario.mode === 'cleanup' && (
                <>
                    {/* Air pollution cloud */}
                    <mesh position={[0, 3, 0]}>
                        <sphereGeometry args={[2, 16, 16]} />
                        <meshStandardMaterial color="#666" transparent opacity={pollutionLevel.air / 200} />
                    </mesh>
                    {/* Water */}
                    <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[3, 32]} />
                        <meshStandardMaterial color={pollutionLevel.eau > 50 ? '#558B2F' : '#4FC3F7'} transparent opacity={0.8} />
                    </mesh>
                    {/* Ground */}
                    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[10, 10]} />
                        <meshStandardMaterial color={pollutionLevel.sol > 50 ? '#5D4037' : '#8BC34A'} />
                    </mesh>
                </>
            )}

            {scenario.mode === 'identify' && scenario.pollutions.map((poll) => (
                <group key={poll.id} position={poll.pos} onClick={() => handleIdentify(poll)}>
                    <Float speed={2} floatIntensity={0.3}>
                        <Billboard>
                            <Text fontSize={0.7}>{identified.includes(poll.id) ? '✅' : poll.emoji}</Text>
                        </Billboard>
                    </Float>
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 3. ANIMAL DIETS - Régimes Alimentaires (4 Scénarios)
// ============================================================================
export function AnimalDiets() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [currentAnimal, setCurrentAnimal] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [answered, setAnswered] = useState(false);

    const scenarios = useMemo(() => [
        {
            name: "Carnivores d'Afrique",
            emoji: "🦁",
            difficulty: "⭐ Facile",
            focus: "zoophage",
            animals: [
                { name: 'Lion', emoji: '🦁', diet: 'zoophage', food: '🥩', teeth: 'Crocs pointus' },
                { name: 'Léopard', emoji: '🐆', diet: 'zoophage', food: '🥩', teeth: 'Canines développées' },
                { name: 'Hyène', emoji: '🐕', diet: 'zoophage', food: '🦴', teeth: 'Mâchoire puissante' },
                { name: 'Crocodile', emoji: '🐊', diet: 'zoophage', food: '🐟', teeth: 'Dents coniques' },
            ]
        },
        {
            name: "Herbivores et Ruminants",
            emoji: "🐄",
            difficulty: "⭐ Facile",
            focus: "phytophage",
            animals: [
                { name: 'Vache', emoji: '🐄', diet: 'phytophage', food: '🌿', teeth: 'Molaires plates', special: 'Ruminant' },
                { name: 'Chèvre', emoji: '🐐', diet: 'phytophage', food: '🌱', teeth: 'Molaires', special: 'Ruminant' },
                { name: 'Éléphant', emoji: '🐘', diet: 'phytophage', food: '🌳', teeth: 'Défenses + Molaires' },
                { name: 'Girafe', emoji: '🦒', diet: 'phytophage', food: '🍃', teeth: 'Langue préhensile' },
            ]
        },
        {
            name: "Quiz: Qui Mange Quoi ?",
            emoji: "❓",
            difficulty: "⭐⭐ Moyen",
            mode: "quiz",
            questions: [
                { q: "Quel type de dents a un carnivore ?", a: "Des canines (crocs) développées", wrong: ["Des molaires plates", "Pas de dents"] },
                { q: "Pourquoi la vache rumine-t-elle ?", a: "Pour mieux digérer l'herbe", wrong: ["Pour faire du bruit", "Pour se rafraîchir"] },
                { q: "L'homme est un...", a: "Omnivore (mange de tout)", wrong: ["Carnivore pur", "Herbivore pur"] },
                { q: "L'intestin d'un herbivore est...", a: "Très long (pour digérer les fibres)", wrong: ["Très court", "Absent"] },
                { q: "Le porc mange...", a: "De tout (omnivore)", wrong: ["Seulement de la viande", "Seulement des plantes"] },
            ]
        },
        {
            name: "Expert Dentition",
            emoji: "🦷",
            difficulty: "⭐⭐⭐ Expert",
            mode: "match",
            pairs: [
                { animal: '🦁 Lion', teeth: 'Canines', diet: 'Carnage' },
                { animal: '🐄 Vache', teeth: 'Molaires plates', diet: 'Broyer herbe' },
                { animal: '👤 Homme', teeth: 'Mixte (incisives, canines, molaires)', diet: 'Omnivore' },
                { animal: '🐰 Lapin', teeth: 'Incisives qui poussent', diet: 'Ronger' },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const handleClassify = (diet) => {
        if (answered) return;
        setAnswered(true);
        const animal = scenario.animals[currentAnimal];

        if (diet === animal.diet) {
            setScore(s => s + 15);
            setFeedback(`✅ Oui ! ${animal.name} est ${diet === 'zoophage' ? 'CARNIVORE' : diet === 'phytophage' ? 'HERBIVORE' : 'OMNIVORE'}`);
        } else {
            setFeedback(`❌ Non, ${animal.name} est ${animal.diet === 'zoophage' ? 'CARNIVORE' : 'HERBIVORE'}`);
        }
    };

    const [quizIndex, setQuizIndex] = useState(0);
    const [matchedPairs, setMatchedPairs] = useState([]);

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        const q = scenario.questions[quizIndex];
        if (answer === q.a) {
            setScore(s => s + 20);
            setFeedback('✅ Correct !');
        } else {
            setFeedback(`❌ ${q.a}`);
        }
    };

    const next = () => {
        if (scenario.mode === 'quiz') {
            if (quizIndex < scenario.questions.length - 1) {
                setQuizIndex(i => i + 1);
                setAnswered(false);
                setFeedback('');
            }
        } else {
            if (currentAnimal < scenario.animals.length - 1) {
                setCurrentAnimal(i => i + 1);
                setAnswered(false);
                setFeedback('');
            }
        }
    };

    const reset = () => {
        setScore(0);
        setCurrentAnimal(0);
        setFeedback('');
        setAnswered(false);
        setQuizIndex(0);
        setMatchedPairs([]);
    };

    const animal = scenario.animals?.[currentAnimal];
    const isComplete = scenario.mode === 'quiz'
        ? quizIndex >= scenario.questions.length - 1 && answered
        : currentAnimal >= (scenario.animals?.length || 0) - 1 && answered;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🍽️ Régimes Alimentaires">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Thème :" />

                        <ScoreDisplay score={score} maxScore={scenario.mode === 'quiz' ? 100 : (scenario.animals?.length || 4) * 15} />

                        {scenario.animals && !scenario.mode && animal && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-orange-500/20 to-transparent rounded-xl">
                                    <div className="text-5xl mb-2">{animal.emoji}</div>
                                    <div className="text-lg font-bold text-white">{animal.name}</div>
                                    <div className="text-xs text-gray-400">Nourriture : {animal.food}</div>
                                    <div className="text-xs text-cyan-400">{animal.teeth}</div>
                                    {animal.special && <div className="text-xs text-yellow-400">⭐ {animal.special}</div>}
                                </div>

                                {feedback && (
                                    <div className={`p-2 rounded-lg text-center text-sm ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                        {feedback}
                                    </div>
                                )}

                                {!answered && (
                                    <div className="grid grid-cols-3 gap-2">
                                        <GameButton onClick={() => handleClassify('zoophage')} color="red" size="small">🥩 Carnivore</GameButton>
                                        <GameButton onClick={() => handleClassify('phytophage')} color="green" size="small">🌿 Herbivore</GameButton>
                                        <GameButton onClick={() => handleClassify('omnivore')} size="small">🍽️ Omnivore</GameButton>
                                    </div>
                                )}

                                {answered && !isComplete && <GameButton onClick={next} color="cyan">Suivant →</GameButton>}
                            </>
                        )}

                        {scenario.mode === 'quiz' && (
                            <>
                                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                                    <div className="text-xs text-gray-400">Question {quizIndex + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[quizIndex]?.q}</div>
                                </div>

                                {feedback && (
                                    <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                        {feedback}
                                    </div>
                                )}

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

                                {answered && !isComplete && <GameButton onClick={next} color="cyan">Suivant →</GameButton>}
                            </>
                        )}

                        {isComplete && (
                            <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-xl text-center">
                                <div className="text-2xl">🏆</div>
                                <div className="font-bold text-yellow-400">Bravo ! Score: {score}</div>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Visual representations */}
            <group position={[-2, 0, 0]}>
                <Billboard><Text fontSize={0.5}>🥩 Viande</Text></Billboard>
                <mesh position={[0, -0.3, 0]}><boxGeometry args={[1, 0.2, 1]} /><meshStandardMaterial color="#D32F2F" /></mesh>
            </group>
            <group position={[2, 0, 0]}>
                <Billboard><Text fontSize={0.5}>🌿 Végétaux</Text></Billboard>
                <mesh position={[0, -0.3, 0]}><boxGeometry args={[1, 0.2, 1]} /><meshStandardMaterial color="#4CAF50" /></mesh>
            </group>

            {animal && (
                <Float speed={2} floatIntensity={0.5}>
                    <Billboard position={[0, 2, 0]}><Text fontSize={1.5}>{animal.emoji}</Text></Billboard>
                </Float>
            )}
        </group>
    );
}
