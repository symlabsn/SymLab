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
// 9. MALARIA CYCLE - 4 SCÉNARIOS
// ============================================================================
export function MalariaCycle() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [phase, setPhase] = useState('intro');
    const [protection, setProtection] = useState({});
    const [infected, setInfected] = useState(false);
    const [timer, setTimer] = useState(30);
    const [score, setScore] = useState(0);
    const [mosquitoes, setMosquitoes] = useState(3);

    const scenarios = useMemo(() => [
        {
            name: "Nuit à Dakar",
            emoji: "🌃",
            difficulty: "⭐ Facile",
            duration: 20,
            mosquitoCount: 3,
            protections: [
                { id: 'moustiquaire', name: 'Moustiquaire', emoji: '🛏️', bonus: 60 },
                { id: 'repulsif', name: 'Répulsif', emoji: '🧴', bonus: 25 },
            ]
        },
        {
            name: "Village du Sine",
            emoji: "🏘️",
            difficulty: "⭐⭐ Moyen",
            duration: 25,
            mosquitoCount: 5,
            protections: [
                { id: 'moustiquaire', name: 'Moustiquaire imprégnée', emoji: '🛏️', bonus: 50 },
                { id: 'repulsif', name: 'Crème anti-moustique', emoji: '🧴', bonus: 20 },
                { id: 'vetements', name: 'Vêtements longs', emoji: '👕', bonus: 15 },
            ]
        },
        {
            name: "Zone Inondée",
            emoji: "🌊",
            difficulty: "⭐⭐⭐ Difficile",
            duration: 30,
            mosquitoCount: 8,
            protections: [
                { id: 'moustiquaire', name: 'Moustiquaire', emoji: '🛏️', bonus: 40 },
                { id: 'repulsif', name: 'Répulsif fort', emoji: '🧴', bonus: 25 },
                { id: 'assainissement', name: 'Vider les eaux', emoji: '🚰', bonus: 25 },
                { id: 'fumigation', name: 'Fumigation', emoji: '💨', bonus: 15 },
            ]
        },
        {
            name: "Épidémie !",
            emoji: "🚨",
            difficulty: "⭐⭐⭐ Expert",
            duration: 40,
            mosquitoCount: 12,
            isEpidemic: true,
            protections: [
                { id: 'moustiquaire', name: 'Moustiquaire MILDA', emoji: '🛏️', bonus: 35 },
                { id: 'repulsif', name: 'Répulsif DEET', emoji: '🧴', bonus: 20 },
                { id: 'assainissement', name: 'Assainissement', emoji: '🚰', bonus: 20 },
                { id: 'sensibilisation', name: 'Sensibilisation', emoji: '📢', bonus: 15 },
                { id: 'traitement', name: 'Traitement préventif', emoji: '💊', bonus: 20 },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const protectionLevel = useMemo(() => {
        let level = 0;
        scenario.protections.forEach(p => {
            if (protection[p.id]) level += p.bonus;
        });
        return Math.min(100, level);
    }, [protection, scenario]);

    useEffect(() => {
        if (phase !== 'playing') return;
        const interval = setInterval(() => {
            setTimer(t => {
                if (t <= 0) {
                    setPhase('result');
                    return 0;
                }
                return t - 1;
            });

            const attackChance = (100 - protectionLevel) / 100;
            if (Math.random() < attackChance * 0.15) {
                if (!infected) {
                    setInfected(true);
                }
            } else {
                setScore(s => s + 5);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [phase, protectionLevel, infected]);

    const startGame = () => {
        setPhase('playing');
        setTimer(scenario.duration);
        setScore(0);
        setInfected(false);
        setMosquitoes(scenario.mosquitoCount);
        setProtection({});
    };

    const toggleProtection = (id) => {
        setProtection(p => ({ ...p, [id]: !p[id] }));
    };

    const reset = () => {
        setPhase('intro');
        setProtection({});
        setInfected(false);
        setScore(0);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🦟 Mission Anti-Paludisme">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Situation :" />

                        {phase === 'intro' && (
                            <>
                                <div className="text-center p-3 bg-gradient-to-b from-red-500/20 to-transparent rounded-xl">
                                    <div className="text-3xl mb-1">{scenario.emoji}</div>
                                    <div className="font-bold text-red-400">{scenario.name}</div>
                                    <p className="text-xs text-gray-300 mt-1">
                                        {scenario.mosquitoCount} moustiques • {scenario.duration}s à survivre
                                    </p>
                                </div>
                                <GameButton onClick={startGame} color="green">🎮 Commencer</GameButton>
                            </>
                        )}

                        {phase === 'playing' && (
                            <>
                                <div className="flex justify-between items-center">
                                    <ScoreDisplay score={score} maxScore={scenario.duration * 5} />
                                    <div className={`px-3 py-1 rounded-full font-bold text-sm ${timer < 10 ? 'bg-red-500 animate-pulse' : 'bg-white/10'}`}>
                                        ⏱️ {timer}s
                                    </div>
                                </div>

                                <div className="p-2 rounded-lg" style={{
                                    background: `linear-gradient(90deg, #4CAF50 ${protectionLevel}%, #333 ${protectionLevel}%)`
                                }}>
                                    <span className="text-xs font-bold text-white">🛡️ Protection: {protectionLevel}%</span>
                                </div>

                                {infected && (
                                    <div className="p-2 bg-red-500/30 rounded-lg text-center text-red-300 animate-pulse text-xs">
                                        ⚠️ INFECTÉ ! Fièvre, frissons, maux de tête...
                                    </div>
                                )}

                                <div className="space-y-1 max-h-40 overflow-y-auto">
                                    {scenario.protections.map(p => (
                                        <button key={p.id} onClick={() => toggleProtection(p.id)}
                                            className={`w-full p-2 rounded-lg text-left flex items-center gap-2 text-xs ${protection[p.id] ? 'bg-green-500/30 border border-green-500' : 'bg-white/10'}`}>
                                            <span className="text-lg">{p.emoji}</span>
                                            <div className="flex-1">
                                                <div className="font-bold">{p.name}</div>
                                                <div className="text-gray-400 text-[10px]">+{p.bonus}% protection</div>
                                            </div>
                                            <span>{protection[p.id] ? '✅' : '❌'}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {phase === 'result' && (
                            <div className="text-center space-y-3">
                                <div className="text-5xl">{infected ? '😷' : '💪'}</div>
                                <div className={`text-xl font-bold ${infected ? 'text-red-400' : 'text-green-400'}`}>
                                    {infected ? 'Infecté...' : 'Protégé !'}
                                </div>
                                <div className="text-white">Score: {score}</div>
                                <div className="text-xs text-gray-400 p-2 bg-white/10 rounded">
                                    💡 La moustiquaire imprégnée d'insecticide est la protection N°1 !
                                </div>
                                <div className="flex gap-2">
                                    <GameButton onClick={startGame} color="cyan" size="small">🔄 Rejouer</GameButton>
                                    {!infected && scenarioIndex < scenarios.length - 1 && (
                                        <GameButton onClick={() => { setScenarioIndex(s => s + 1); reset(); }} color="green" size="small">
                                            Niveau suivant →
                                        </GameButton>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.3} />
            <pointLight position={[0, 5, 5]} intensity={0.5} />
            <color attach="background" args={['#1a1a2e']} />

            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[3, 0.5, 2]} />
                <meshStandardMaterial color="#5D4037" />
            </mesh>

            {protection.moustiquaire && (
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[3.5, 3, 2.5]} />
                    <meshStandardMaterial color="#E8F5E9" transparent opacity={0.2} side={THREE.DoubleSide} wireframe />
                </mesh>
            )}

            {phase === 'playing' && Array.from({ length: mosquitoes }).map((_, i) => (
                <AnimatedMosquito key={i} index={i} blocked={protectionLevel > 50} />
            ))}
        </group>
    );
}

function AnimatedMosquito({ index, blocked }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.elapsedTime + index * 2;
        const targetX = blocked ? 4 + Math.sin(t) : Math.sin(t * 2) * 2.5;
        const targetY = 1.5 + Math.sin(t * 3) * 0.8;
        const targetZ = Math.cos(t * 2) * 2;
        ref.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.03);
    });
    return (
        <group ref={ref}>
            <Billboard><Text fontSize={0.4}>🦟</Text></Billboard>
        </group>
    );
}

// ============================================================================
// 10. ASCARIS PREVENTION - 4 SCÉNARIOS
// ============================================================================
export function AscarisPrevention() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [currentSituation, setCurrentSituation] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [streak, setStreak] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Maison",
            emoji: "🏠",
            difficulty: "⭐ Facile",
            situations: [
                { text: "Tu reviens des toilettes...", correct: 'laver', emoji: '🚽' },
                { text: "Tu vas manger une mangue...", correct: 'laver_fruit', emoji: '🥭' },
                { text: "Maman te sert le déjeuner...", correct: 'manger', emoji: '🍽️' },
            ]
        },
        {
            name: "École",
            emoji: "🏫",
            difficulty: "⭐⭐ Moyen",
            situations: [
                { text: "Après la récréation dans la cour...", correct: 'laver', emoji: '⚽' },
                { text: "Ton ami te donne des bonbons...", correct: 'verifier', emoji: '🍬' },
                { text: "Tu bois de l'eau du robinet de l'école...", correct: 'manger', emoji: '🚰' },
                { text: "Tu ramasses ton stylo tombé par terre...", correct: 'laver', emoji: '✏️' },
            ]
        },
        {
            name: "Marché",
            emoji: "🏪",
            difficulty: "⭐⭐ Moyen",
            situations: [
                { text: "Tu goûtes un fruit chez le vendeur...", correct: 'refuser', emoji: '🍇' },
                { text: "Tu achètes des arachides grillées...", correct: 'manger', emoji: '🥜' },
                { text: "Tu touches les légumes pour choisir...", correct: 'laver', emoji: '🥬' },
                { text: "Le vendeur te donne la monnaie...", correct: 'laver', emoji: '💵' },
            ]
        },
        {
            name: "Quiz Expert",
            emoji: "🧠",
            difficulty: "⭐⭐⭐ Expert",
            mode: "quiz",
            questions: [
                { q: "Comment attrape-t-on l'Ascaris ?", a: "Par la bouche (mains sales)", wrong: ["Par la peau", "Par l'air"] },
                { q: "Où vivent les vers Ascaris adultes ?", a: "Dans l'intestin", wrong: ["Dans le sang", "Dans les poumons"] },
                { q: "Quel est le meilleur moyen de prévention ?", a: "Se laver les mains", wrong: ["Manger des vitamines", "Dormir beaucoup"] },
                { q: "Les œufs d'Ascaris se trouvent où ?", a: "Dans le sol contaminé", wrong: ["Dans l'air", "Dans l'eau de mer"] },
                { q: "Combien de temps pour se laver les mains correctement ?", a: "20-30 secondes", wrong: ["5 secondes", "1 minute"] },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const situation = scenario.situations?.[currentSituation];

    const handleAction = (action) => {
        if (scenario.mode === 'quiz') return;

        const isCorrect = action === situation.correct;
        if (isCorrect) {
            const bonus = streak >= 2 ? 5 : 0;
            setScore(s => s + 15 + bonus);
            setStreak(s => s + 1);
            setFeedback(`✅ Bonne hygiène ! ${bonus > 0 ? `+${bonus} bonus !` : ''}`);
        } else {
            setStreak(0);
            if (action === 'manger' && situation.correct !== 'manger') {
                setFeedback('❌ Risque d\'infection ! Il fallait d\'abord se laver.');
            } else {
                setFeedback('❌ Pas la meilleure action...');
            }
        }

        setTimeout(() => {
            if (currentSituation < scenario.situations.length - 1) {
                setCurrentSituation(c => c + 1);
                setFeedback('');
            }
        }, 1500);
    };

    const handleQuiz = (answer) => {
        const question = scenario.questions[currentSituation];
        if (answer === question.a) {
            setScore(s => s + 20);
            setFeedback('✅ Correct !');
        } else {
            setFeedback(`❌ Non, c'était : ${question.a}`);
        }
        setTimeout(() => {
            if (currentSituation < scenario.questions.length - 1) {
                setCurrentSituation(c => c + 1);
                setFeedback('');
            }
        }, 1500);
    };

    const reset = () => {
        setCurrentSituation(0);
        setScore(0);
        setFeedback('');
        setStreak(0);
    };

    const totalItems = scenario.mode === 'quiz' ? scenario.questions.length : scenario.situations.length;
    const isComplete = currentSituation >= totalItems - 1 && feedback !== '';

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧼 Prévention Parasites">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Lieu :" />

                        <div className="flex justify-between items-center">
                            <ScoreDisplay score={score} maxScore={totalItems * (scenario.mode === 'quiz' ? 20 : 15)} />
                            {streak >= 2 && <span className="text-xs bg-orange-500/30 text-orange-300 px-2 py-1 rounded animate-pulse">🔥 x{streak}</span>}
                        </div>

                        <ProgressBar current={currentSituation + (feedback ? 1 : 0)} max={totalItems} color="#2196F3" />

                        {scenario.mode !== 'quiz' && situation && (
                            <>
                                <div className="p-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl text-center">
                                    <div className="text-3xl mb-1">{situation.emoji}</div>
                                    <div className="text-sm text-white">{situation.text}</div>
                                </div>

                                {feedback && (
                                    <div className={`p-2 rounded-lg text-center text-sm ${feedback.includes('✅') ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'}`}>
                                        {feedback}
                                    </div>
                                )}

                                {!feedback && (
                                    <div className="grid grid-cols-2 gap-2">
                                        <GameButton onClick={() => handleAction('laver')} size="small">🧼 Laver mains</GameButton>
                                        <GameButton onClick={() => handleAction('laver_fruit')} size="small">🍎 Laver fruit</GameButton>
                                        <GameButton onClick={() => handleAction('manger')} color="default" size="small">🍽️ Manger direct</GameButton>
                                        <GameButton onClick={() => handleAction('refuser')} color="red" size="small">🚫 Refuser</GameButton>
                                    </div>
                                )}
                            </>
                        )}

                        {scenario.mode === 'quiz' && scenario.questions[currentSituation] && (
                            <>
                                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                                    <div className="text-xs text-gray-400 mb-1">Question {currentSituation + 1}/{scenario.questions.length}</div>
                                    <div className="font-bold text-white text-sm">{scenario.questions[currentSituation].q}</div>
                                </div>

                                {feedback && (
                                    <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'}`}>
                                        {feedback}
                                    </div>
                                )}

                                {!feedback && (
                                    <div className="space-y-1">
                                        {[scenario.questions[currentSituation].a, ...scenario.questions[currentSituation].wrong]
                                            .sort(() => Math.random() - 0.5)
                                            .map((answer, i) => (
                                                <button key={i} onClick={() => handleQuiz(answer)}
                                                    className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                    {answer}
                                                </button>
                                            ))}
                                    </div>
                                )}
                            </>
                        )}

                        {isComplete && (
                            <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-xl text-center">
                                <div className="text-2xl">🎉</div>
                                <div className="font-bold text-green-400">Scénario terminé !</div>
                                {scenarioIndex < scenarios.length - 1 && (
                                    <GameButton onClick={() => { setScenarioIndex(s => s + 1); reset(); }} color="green" size="small">
                                        Suivant →
                                    </GameButton>
                                )}
                            </div>
                        )}

                        <div className="text-xs text-cyan-400 p-2 bg-cyan-500/10 rounded text-center">
                            💡 Les œufs d'Ascaris entrent par la bouche via les mains ou aliments souillés !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            <group position={[-1.5, 0, 0]}>
                <mesh>
                    <boxGeometry args={[1.2, 1.8, 0.4]} />
                    <meshStandardMaterial color={feedback.includes('✅') ? '#C8E6C9' : feedback.includes('❌') ? '#FFCDD2' : '#FFCCBC'} />
                </mesh>
                <Billboard position={[0, 1.3, 0.3]}><Text fontSize={0.25} color="white">✋</Text></Billboard>
            </group>
        </group>
    );
}

// ============================================================================
// 11. CHOLERA FILTER - 4 SCÉNARIOS
// ============================================================================
export function CholeraFilter() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [treatments, setTreatments] = useState([]);
    const [waterQuality, setWaterQuality] = useState(0);
    const [tested, setTested] = useState(false);
    const [score, setScore] = useState(0);

    const scenarios = useMemo(() => [
        {
            name: "Eau de Puits",
            emoji: "🪣",
            difficulty: "⭐ Facile",
            baseQuality: 50,
            targetQuality: 80,
            availableTreatments: [
                { id: 'filter', name: 'Filtration tissu', emoji: '🧽', bonus: 15 },
                { id: 'javel', name: 'Eau de Javel', emoji: '🧪', bonus: 25 },
            ]
        },
        {
            name: "Eau de Marigot",
            emoji: "🏞️",
            difficulty: "⭐⭐ Moyen",
            baseQuality: 20,
            targetQuality: 80,
            availableTreatments: [
                { id: 'decant', name: 'Décantation', emoji: '⏳', bonus: 10 },
                { id: 'filter', name: 'Filtration sable', emoji: '🧽', bonus: 20 },
                { id: 'javel', name: 'Eau de Javel', emoji: '🧪', bonus: 30 },
                { id: 'boil', name: 'Ébullition', emoji: '🔥', bonus: 35 },
            ]
        },
        {
            name: "Eau de Pluie",
            emoji: "🌧️",
            difficulty: "⭐⭐ Moyen",
            baseQuality: 60,
            targetQuality: 85,
            availableTreatments: [
                { id: 'filter', name: 'Filtration', emoji: '🧽', bonus: 15 },
                { id: 'javel', name: 'Chloration', emoji: '🧪', bonus: 20 },
                { id: 'uv', name: 'Exposition solaire (SODIS)', emoji: '☀️', bonus: 25 },
            ]
        },
        {
            name: "Épidémie Choléra",
            emoji: "🚨",
            difficulty: "⭐⭐⭐ Expert",
            baseQuality: 10,
            targetQuality: 95,
            isEmergency: true,
            availableTreatments: [
                { id: 'decant', name: 'Décantation', emoji: '⏳', bonus: 5 },
                { id: 'filter', name: 'Filtration céramique', emoji: '🧽', bonus: 20 },
                { id: 'javel', name: 'Chloration forte', emoji: '🧪', bonus: 35 },
                { id: 'boil', name: 'Ébullition 10 min', emoji: '🔥', bonus: 40 },
                { id: 'stock', name: 'Stockage hygiénique', emoji: '🫙', bonus: 10 },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    useEffect(() => {
        let quality = scenario.baseQuality;
        treatments.forEach(t => {
            const treatment = scenario.availableTreatments.find(tr => tr.id === t);
            if (treatment) quality += treatment.bonus;
        });
        setWaterQuality(Math.min(100, quality));
    }, [treatments, scenario]);

    const toggleTreatment = (id) => {
        setTreatments(t => t.includes(id) ? t.filter(x => x !== id) : [...t, id]);
        setTested(false);
    };

    const testWater = () => {
        setTested(true);
        if (waterQuality >= scenario.targetQuality) {
            setScore(s => s + 25);
        }
    };

    const reset = () => {
        setTreatments([]);
        setTested(false);
    };

    const isSafe = waterQuality >= scenario.targetQuality;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="💧 Station Eau Potable">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Source d'eau :" />

                        <div className="text-center p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg">
                            <div className="text-xs text-gray-400">Qualité initiale</div>
                            <div className="font-bold text-white">{scenario.baseQuality}% → Objectif: {scenario.targetQuality}%</div>
                        </div>

                        <div className="text-center">
                            <div className={`text-4xl mb-1 ${tested ? (isSafe ? 'animate-bounce' : 'animate-pulse') : ''}`}>
                                {tested ? (isSafe ? '✅' : '⚠️') : '🧪'}
                            </div>
                            <div className={`font-bold ${isSafe ? 'text-green-400' : 'text-red-400'}`}>
                                {tested ? (isSafe ? 'Eau POTABLE !' : 'Encore impure...') : 'Non testée'}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span>Qualité actuelle</span>
                                <span className={isSafe ? 'text-green-400' : 'text-red-400'}>{waterQuality}%</span>
                            </div>
                            <ProgressBar current={waterQuality} max={100} color={isSafe ? '#4CAF50' : '#F44336'} />
                            <div className="w-full h-1 relative mt-1">
                                <div className="absolute h-full w-0.5 bg-yellow-500" style={{ left: `${scenario.targetQuality}%` }} />
                            </div>
                        </div>

                        <div className="space-y-1 max-h-32 overflow-y-auto">
                            {scenario.availableTreatments.map(t => (
                                <button key={t.id} onClick={() => toggleTreatment(t.id)}
                                    className={`w-full p-2 rounded-lg flex items-center gap-2 text-xs ${treatments.includes(t.id) ? 'bg-green-500/30 border border-green-500' : 'bg-white/10'}`}>
                                    <span className="text-lg">{t.emoji}</span>
                                    <span className="flex-1 text-left">{t.name}</span>
                                    <span className="text-green-400">+{t.bonus}%</span>
                                </button>
                            ))}
                        </div>

                        <GameButton onClick={testWater} color={isSafe ? 'green' : 'cyan'}>
                            🔬 Tester l'eau
                        </GameButton>

                        {tested && isSafe && scenarioIndex < scenarios.length - 1 && (
                            <GameButton onClick={() => { setScenarioIndex(s => s + 1); reset(); }} color="green" size="small">
                                Niveau suivant →
                            </GameButton>
                        )}

                        <div className="text-xs text-cyan-400 p-2 bg-cyan-500/10 rounded text-center">
                            💡 Le choléra se transmet par l'eau contaminée. Toujours traiter l'eau douteuse !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1, 0.8, 2.5, 32, 1, true]} />
                <meshPhysicalMaterial transmission={0.9} thickness={0.1} color="white" />
            </mesh>

            <mesh position={[0, -0.7, 0]}>
                <cylinderGeometry args={[0.9, 0.7, 2]} />
                <meshStandardMaterial
                    color={isSafe ? '#4FC3F7' : waterQuality > 50 ? '#81C784' : '#558B2F'}
                    transparent opacity={0.8}
                />
            </mesh>

            {!isSafe && Array.from({ length: Math.floor((100 - waterQuality) / 10) }).map((_, i) => (
                <Float key={i} speed={2} floatIntensity={0.5}>
                    <mesh position={[Math.random() * 1.4 - 0.7, -0.7 + Math.random(), Math.random() * 1.4 - 0.7]}>
                        <sphereGeometry args={[0.05]} />
                        <meshStandardMaterial color="#33691E" />
                    </mesh>
                </Float>
            ))}

            {isSafe && <Sparkles count={20} scale={3} size={3} speed={0.5} color="#4FC3F7" position={[0, 0, 0]} />}
        </group>
    );
}

// ============================================================================
// 12. LANDSCAPE BUILDER - 4 SCÉNARIOS
// ============================================================================
export function LandscapeBuilder() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [elements, setElements] = useState({ vegetation: [], water: [], human: [] });
    const [score, setScore] = useState(0);
    const [validated, setValidated] = useState(false);

    const scenarios = useMemo(() => [
        {
            name: "Vallée du Fleuve",
            emoji: "🏞️",
            difficulty: "⭐ Facile",
            relief: "plaine",
            required: { vegetation: 2, water: 1, human: 1 },
            tools: [
                { id: 'baobab', category: 'vegetation', emoji: '🌳', name: 'Baobab' },
                { id: 'fleuve', category: 'water', emoji: '🌊', name: 'Fleuve' },
                { id: 'village', category: 'human', emoji: '🏘️', name: 'Village' },
            ]
        },
        {
            name: "Zone Côtière",
            emoji: "🏖️",
            difficulty: "⭐⭐ Moyen",
            relief: "littoral",
            required: { vegetation: 2, water: 2, human: 2 },
            tools: [
                { id: 'palmier', category: 'vegetation', emoji: '🌴', name: 'Palmier' },
                { id: 'mangrove', category: 'vegetation', emoji: '🌿', name: 'Mangrove' },
                { id: 'ocean', category: 'water', emoji: '🌊', name: 'Océan' },
                { id: 'lagune', category: 'water', emoji: '💧', name: 'Lagune' },
                { id: 'port', category: 'human', emoji: '⚓', name: 'Port' },
                { id: 'route', category: 'human', emoji: '🛤️', name: 'Route' },
            ]
        },
        {
            name: "Plateau Central",
            emoji: "⛰️",
            difficulty: "⭐⭐ Moyen",
            relief: "plateau",
            required: { vegetation: 3, water: 1, human: 2 },
            tools: [
                { id: 'savane', category: 'vegetation', emoji: '🌾', name: 'Savane' },
                { id: 'acacia', category: 'vegetation', emoji: '🌳', name: 'Acacia' },
                { id: 'mare', category: 'water', emoji: '💧', name: 'Mare' },
                { id: 'village', category: 'human', emoji: '🏘️', name: 'Village' },
                { id: 'champs', category: 'human', emoji: '🌾', name: 'Champs' },
            ]
        },
        {
            name: "Paysage Libre",
            emoji: "🎨",
            difficulty: "⭐⭐⭐ Créatif",
            relief: "variable",
            freeMode: true,
            tools: [
                { id: 'baobab', category: 'vegetation', emoji: '🌳', name: 'Baobab' },
                { id: 'palmier', category: 'vegetation', emoji: '🌴', name: 'Palmier' },
                { id: 'savane', category: 'vegetation', emoji: '🌾', name: 'Savane' },
                { id: 'fleuve', category: 'water', emoji: '🌊', name: 'Fleuve' },
                { id: 'lac', category: 'water', emoji: '💧', name: 'Lac' },
                { id: 'village', category: 'human', emoji: '🏘️', name: 'Village' },
                { id: 'route', category: 'human', emoji: '🛤️', name: 'Route' },
                { id: 'champs', category: 'human', emoji: '🌾', name: 'Cultures' },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const addElement = (tool) => {
        const pos = [Math.random() * 8 - 4, 0, Math.random() * 8 - 4];
        setElements(e => ({
            ...e,
            [tool.category]: [...e[tool.category], { ...tool, pos }]
        }));
        setValidated(false);
    };

    const validate = () => {
        if (scenario.freeMode) {
            const total = elements.vegetation.length + elements.water.length + elements.human.length;
            setScore(s => s + total * 5);
            setValidated(true);
            return;
        }

        const req = scenario.required;
        const vegOk = elements.vegetation.length >= req.vegetation;
        const waterOk = elements.water.length >= req.water;
        const humanOk = elements.human.length >= req.human;

        if (vegOk && waterOk && humanOk) {
            setScore(s => s + 30);
            setValidated(true);
        }
    };

    const reset = () => {
        setElements({ vegetation: [], water: [], human: [] });
        setValidated(false);
    };

    const totalElements = elements.vegetation.length + elements.water.length + elements.human.length;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⛰️ Constructeur de Paysage">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Type de paysage :" />

                        <ScoreDisplay score={score} maxScore={120} label="XP" />

                        {!scenario.freeMode && (
                            <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg text-xs">
                                <div className="font-bold text-white mb-1">Objectifs :</div>
                                <div className="flex justify-between">
                                    <span className={elements.vegetation.length >= scenario.required.vegetation ? 'text-green-400' : ''}>
                                        🌿 {elements.vegetation.length}/{scenario.required.vegetation}
                                    </span>
                                    <span className={elements.water.length >= scenario.required.water ? 'text-green-400' : ''}>
                                        💧 {elements.water.length}/{scenario.required.water}
                                    </span>
                                    <span className={elements.human.length >= scenario.required.human ? 'text-green-400' : ''}>
                                        🏠 {elements.human.length}/{scenario.required.human}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-1 max-h-28 overflow-y-auto">
                            {scenario.tools.map(t => (
                                <button key={t.id} onClick={() => addElement(t)}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded text-center">
                                    <div className="text-lg">{t.emoji}</div>
                                    <div className="text-[9px]">{t.name}</div>
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-1 bg-green-500/20 rounded">🌿 {elements.vegetation.length}</div>
                            <div className="p-1 bg-blue-500/20 rounded">💧 {elements.water.length}</div>
                            <div className="p-1 bg-orange-500/20 rounded">🏠 {elements.human.length}</div>
                        </div>

                        {validated && (
                            <div className="p-2 bg-green-500/30 rounded-lg text-center text-green-300 font-bold">
                                🎉 Paysage validé !
                            </div>
                        )}

                        <div className="flex gap-2">
                            <GameButton onClick={reset} color="red" size="small">🗑️</GameButton>
                            <GameButton onClick={validate} color="green" size="small" disabled={totalElements < 3}>
                                ✓ Valider
                            </GameButton>
                        </div>

                        {validated && scenarioIndex < scenarios.length - 1 && (
                            <GameButton onClick={() => { setScenarioIndex(s => s + 1); reset(); }} color="cyan" size="small">
                                Suivant →
                            </GameButton>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 15, 10]} intensity={1.2} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                <planeGeometry args={[15, 15]} />
                <meshStandardMaterial color="#C4A484" />
            </mesh>

            {scenario.relief === 'plateau' && (
                <mesh position={[0, 0.3, 0]}>
                    <cylinderGeometry args={[5, 5, 0.6, 8]} />
                    <meshStandardMaterial color="#A1887F" />
                </mesh>
            )}

            {elements.vegetation.map((el, i) => (
                <group key={`veg-${i}`} position={el.pos}>
                    <mesh position={[0, 1, 0]}>
                        <coneGeometry args={[0.6, 2, 8]} />
                        <meshStandardMaterial color="#4CAF50" />
                    </mesh>
                    <mesh position={[0, -0.2, 0]}>
                        <cylinderGeometry args={[0.15, 0.2, 0.5]} />
                        <meshStandardMaterial color="#795548" />
                    </mesh>
                </group>
            ))}

            {elements.water.map((el, i) => (
                <mesh key={`water-${i}`} position={[el.pos[0], 0.01, el.pos[2]]} rotation={[-Math.PI / 2, 0, 0]}>
                    <circleGeometry args={[1.5, 32]} />
                    <meshStandardMaterial color="#29B6F6" transparent opacity={0.8} />
                </mesh>
            ))}

            {elements.human.map((el, i) => (
                <group key={`human-${i}`} position={el.pos}>
                    <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[0.8, 1, 0.8]} />
                        <meshStandardMaterial color="#ECEFF1" />
                    </mesh>
                    <mesh position={[0, 1.2, 0]}>
                        <coneGeometry args={[0.6, 0.5, 4]} />
                        <meshStandardMaterial color="#8D6E63" />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

// All functions are exported inline with 'export function'
