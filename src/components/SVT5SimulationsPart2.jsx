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
// 4. NUTRITION - Besoins de l'Organisme (4 Scénarios)
// ============================================================================
export function HumanNutrition() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [plate, setPlate] = useState({ batisseurs: 0, energetiques: 0, protecteurs: 0 });

    const scenarios = useMemo(() => [
        {
            name: "Groupes d'Aliments",
            emoji: "🍽️",
            difficulty: "⭐ Facile",
            mode: "classify",
            foods: [
                { name: 'Riz', emoji: '🍚', group: 'energetiques' },
                { name: 'Poisson', emoji: '🐟', group: 'batisseurs' },
                { name: 'Mangue', emoji: '🥭', group: 'protecteurs' },
                { name: 'Pain', emoji: '🍞', group: 'energetiques' },
                { name: 'Œuf', emoji: '🥚', group: 'batisseurs' },
                { name: 'Carotte', emoji: '🥕', group: 'protecteurs' },
            ]
        },
        {
            name: "Composer un Repas",
            emoji: "🥗",
            difficulty: "⭐⭐ Moyen",
            mode: "build",
            target: { batisseurs: 2, energetiques: 2, protecteurs: 2 },
            availableFoods: [
                { name: 'Thiéboudienne', emoji: '🍲', group: 'energetiques', count: 1 },
                { name: 'Viande', emoji: '🥩', group: 'batisseurs', count: 1 },
                { name: 'Lait', emoji: '🥛', group: 'batisseurs', count: 1 },
                { name: 'Mil', emoji: '🌾', group: 'energetiques', count: 1 },
                { name: 'Orange', emoji: '🍊', group: 'protecteurs', count: 1 },
                { name: 'Salade', emoji: '🥬', group: 'protecteurs', count: 1 },
            ]
        },
        {
            name: "Maladies Carences",
            emoji: "🏥",
            difficulty: "⭐⭐ Moyen",
            mode: "quiz",
            questions: [
                { q: "Le Kwashiorkor est causé par un manque de...", a: "Protéines", wrong: ["Vitamines", "Eau"] },
                { q: "Le Scorbut est causé par un manque de...", a: "Vitamine C (fruits)", wrong: ["Fer", "Calcium"] },
                { q: "L'obésité est causée par...", a: "Un excès de nourriture", wrong: ["Un manque de viande", "Trop de fruits"] },
                { q: "Pourquoi faut-il boire de l'eau ?", a: "Le corps est composé de 70% d'eau", wrong: ["Pour grossir", "Pour avoir froid"] },
                { q: "Quel aliment donne de l'énergie rapidement ?", a: "Les glucides (sucres)", wrong: ["Les vitamines", "L'eau"] },
            ]
        },
        {
            name: "Nutritionniste",
            emoji: "👨‍⚕️",
            difficulty: "⭐⭐⭐ Expert",
            mode: "diagnose",
            cases: [
                { symptoms: "Enfant fatigué, cheveux qui tombent, ventre gonflé", diagnosis: "Kwashiorkor", treatment: "Plus de protéines (viande, poisson)", emoji: "👶" },
                { symptoms: "Gencives qui saignent, fatigue", diagnosis: "Scorbut", treatment: "Plus de fruits (oranges, citrons)", emoji: "🍊" },
                { symptoms: "Difficultés à courir, essoufflement, surpoids", diagnosis: "Obésité", treatment: "Moins de graisses, plus d'exercice", emoji: "🏃" },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const [currentFood, setCurrentFood] = useState(0);
    const [classified, setClassified] = useState([]);
    const [addedFoods, setAddedFoods] = useState([]);
    const [quizIndex, setQuizIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [caseIndex, setCaseIndex] = useState(0);

    const handleClassify = (group) => {
        if (scenario.mode !== 'classify') return;
        const food = scenario.foods[currentFood];
        if (food.group === group) {
            setScore(s => s + 15);
            setFeedback(`✅ ${food.name} = ${group === 'batisseurs' ? 'BÂTISSEUR' : group === 'energetiques' ? 'ÉNERGÉTIQUE' : 'PROTECTEUR'}`);
        } else {
            setFeedback(`❌ Non, ${food.name} est un aliment ${food.group === 'batisseurs' ? 'BÂTISSEUR' : food.group === 'energetiques' ? 'ÉNERGÉTIQUE' : 'PROTECTEUR'}`);
        }
        setClassified([...classified, food.name]);
        setTimeout(() => {
            if (currentFood < scenario.foods.length - 1) {
                setCurrentFood(i => i + 1);
                setFeedback('');
            }
        }, 1500);
    };

    const handleAddFood = (food) => {
        if (addedFoods.includes(food.name)) return;
        setAddedFoods([...addedFoods, food.name]);
        setPlate(p => ({ ...p, [food.group]: p[food.group] + 1 }));
        setScore(s => s + 10);
    };

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        if (answer === scenario.questions[quizIndex].a) {
            setScore(s => s + 20);
            setFeedback('✅ Correct !');
        } else {
            setFeedback(`❌ ${scenario.questions[quizIndex].a}`);
        }
    };

    const handleDiagnosis = (diagnosis) => {
        const currentCase = scenario.cases[caseIndex];
        if (diagnosis === currentCase.diagnosis) {
            setScore(s => s + 30);
            setFeedback(`✅ Correct ! Traitement : ${currentCase.treatment}`);
        } else {
            setFeedback(`❌ C'est ${currentCase.diagnosis}`);
        }
        setAnswered(true);
    };

    const next = () => {
        if (scenario.mode === 'quiz' && quizIndex < scenario.questions.length - 1) {
            setQuizIndex(i => i + 1);
            setAnswered(false);
            setFeedback('');
        } else if (scenario.mode === 'diagnose' && caseIndex < scenario.cases.length - 1) {
            setCaseIndex(i => i + 1);
            setAnswered(false);
            setFeedback('');
        }
    };

    const reset = () => {
        setScore(0);
        setCurrentFood(0);
        setClassified([]);
        setAddedFoods([]);
        setPlate({ batisseurs: 0, energetiques: 0, protecteurs: 0 });
        setQuizIndex(0);
        setAnswered(false);
        setFeedback('');
        setCaseIndex(0);
    };

    const isBalanced = plate.batisseurs >= 2 && plate.energetiques >= 2 && plate.protecteurs >= 2;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🍽️ Nutrition Humaine">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Leçon :" />

                        <ScoreDisplay score={score} maxScore={scenario.mode === 'diagnose' ? 90 : 100} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.mode === 'classify' && scenario.foods[currentFood] && !classified.includes(scenario.foods[currentFood]?.name) && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-orange-500/20 to-transparent rounded-xl">
                                    <div className="text-5xl mb-2">{scenario.foods[currentFood].emoji}</div>
                                    <div className="text-lg font-bold text-white">{scenario.foods[currentFood].name}</div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <GameButton onClick={() => handleClassify('batisseurs')} color="red" size="small">🥩 Bâtisseur</GameButton>
                                    <GameButton onClick={() => handleClassify('energetiques')} color="yellow" size="small">🍚 Énergétique</GameButton>
                                    <GameButton onClick={() => handleClassify('protecteurs')} color="green" size="small">🥬 Protecteur</GameButton>
                                </div>
                            </>
                        )}

                        {scenario.mode === 'build' && (
                            <>
                                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                    <div className={`p-2 rounded ${plate.batisseurs >= 2 ? 'bg-green-500/30' : 'bg-red-500/20'}`}>
                                        🥩 {plate.batisseurs}/2
                                    </div>
                                    <div className={`p-2 rounded ${plate.energetiques >= 2 ? 'bg-green-500/30' : 'bg-yellow-500/20'}`}>
                                        🍚 {plate.energetiques}/2
                                    </div>
                                    <div className={`p-2 rounded ${plate.protecteurs >= 2 ? 'bg-green-500/30' : 'bg-green-500/20'}`}>
                                        🥬 {plate.protecteurs}/2
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-1">
                                    {scenario.availableFoods.map(food => (
                                        <button key={food.name} onClick={() => handleAddFood(food)}
                                            disabled={addedFoods.includes(food.name)}
                                            className={`p-2 rounded text-center ${addedFoods.includes(food.name) ? 'bg-green-500/30' : 'bg-white/10 hover:bg-white/20'}`}>
                                            <div className="text-xl">{food.emoji}</div>
                                            <div className="text-[9px]">{food.name}</div>
                                        </button>
                                    ))}
                                </div>
                                {isBalanced && (
                                    <div className="p-2 bg-green-500/30 rounded-lg text-center text-green-300 font-bold">
                                        🎉 Repas équilibré !
                                    </div>
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

                        {scenario.mode === 'diagnose' && (
                            <>
                                <div className="p-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl">
                                    <div className="text-2xl text-center mb-2">{scenario.cases[caseIndex]?.emoji}</div>
                                    <div className="text-xs text-gray-400">Symptômes :</div>
                                    <div className="text-sm text-white">{scenario.cases[caseIndex]?.symptoms}</div>
                                </div>
                                {!answered && (
                                    <div className="space-y-1">
                                        {scenario.cases.map(c => c.diagnosis).filter((v, i, a) => a.indexOf(v) === i).map((diag, i) => (
                                            <button key={i} onClick={() => handleDiagnosis(diag)}
                                                className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                {diag}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {answered && caseIndex < scenario.cases.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Cas suivant →</GameButton>
                                )}
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Food pyramid visualization */}
            <group position={[0, -1, 0]}>
                <mesh position={[0, 0, 0]}><boxGeometry args={[4, 0.5, 3]} /><meshStandardMaterial color="#FFEB3B" /></mesh>
                <mesh position={[0, 0.6, 0]}><boxGeometry args={[3, 0.5, 2.5]} /><meshStandardMaterial color="#F44336" /></mesh>
                <mesh position={[0, 1.2, 0]}><coneGeometry args={[1.5, 1, 4]} /><meshStandardMaterial color="#4CAF50" /></mesh>
            </group>
        </group>
    );
}

// ============================================================================
// 5. RESPIRATION - La Respiration Animale (4 Scénarios)
// ============================================================================
export function AnimalRespiration() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [currentAnimal, setCurrentAnimal] = useState(0);
    const [answered, setAnswered] = useState(false);

    const scenarios = useMemo(() => [
        {
            name: "Poumons vs Branchies",
            emoji: "🫁",
            difficulty: "⭐ Facile",
            animals: [
                { name: 'Homme', emoji: '👨', organ: 'poumons', milieu: 'air' },
                { name: 'Poisson', emoji: '🐟', organ: 'branchies', milieu: 'eau' },
                { name: 'Baleine', emoji: '🐋', organ: 'poumons', milieu: 'eau', note: 'Mammifère marin !' },
                { name: 'Grenouille', emoji: '🐸', organ: 'poumons', milieu: 'air', note: 'Aussi par la peau' },
            ]
        },
        {
            name: "Insectes & Trachées",
            emoji: "🦗",
            difficulty: "⭐⭐ Moyen",
            animals: [
                { name: 'Criquet', emoji: '🦗', organ: 'trachees', desc: 'Petits tubes dans tout le corps' },
                { name: 'Mouche', emoji: '🪰', organ: 'trachees', desc: 'Stigmates sur les côtés' },
                { name: 'Abeille', emoji: '🐝', organ: 'trachees', desc: 'Respire par les spiracles' },
                { name: 'Fourmi', emoji: '🐜', organ: 'trachees', desc: 'Réseau de tubes internes' },
            ]
        },
        {
            name: "Quiz Respiration",
            emoji: "❓",
            difficulty: "⭐⭐ Moyen",
            mode: "quiz",
            questions: [
                { q: "Comment respire un poisson ?", a: "Par des branchies qui filtrent l'O2 de l'eau", wrong: ["Par des poumons", "Il ne respire pas"] },
                { q: "Que rejette-t-on en expirant ?", a: "Du CO2 (dioxyde de carbone)", wrong: ["De l'oxygène", "De l'azote"] },
                { q: "Pourquoi la baleine remonte-t-elle à la surface ?", a: "Elle a des poumons et respire de l'air", wrong: ["Pour manger", "Pour se réchauffer"] },
                { q: "Comment le criquet respire-t-il ?", a: "Par un réseau de trachées (tubes)", wrong: ["Par des branchies", "Par la bouche uniquement"] },
            ]
        },
        {
            name: "Urgence Médicale",
            emoji: "🚑",
            difficulty: "⭐⭐⭐ Expert",
            mode: "emergency",
            situations: [
                { desc: "Un poisson saute hors de l'eau", problem: "Branchies sèchent", solution: "Le remettre dans l'eau", emoji: "🐟" },
                { desc: "Une personne s'étouffe", problem: "Voies respiratoires bloquées", solution: "Manœuvre de Heimlich", emoji: "🆘" },
                { desc: "Asthmatique en crise", problem: "Bronches contractées", solution: "Utiliser son inhalateur", emoji: "💨" },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];

    const handleClassify = (organ) => {
        if (answered) return;
        setAnswered(true);
        const animal = scenario.animals[currentAnimal];
        if (organ === animal.organ) {
            setScore(s => s + 20);
            setFeedback(`✅ ${animal.name} respire par ${organ === 'poumons' ? 'POUMONS' : organ === 'branchies' ? 'BRANCHIES' : 'TRACHÉES'} !`);
        } else {
            setFeedback(`❌ Non, ${animal.name} utilise des ${animal.organ === 'poumons' ? 'POUMONS' : animal.organ === 'branchies' ? 'BRANCHIES' : 'TRACHÉES'}`);
        }
    };

    const [quizIndex, setQuizIndex] = useState(0);
    const [emergencyIndex, setEmergencyIndex] = useState(0);

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        if (answer === scenario.questions[quizIndex].a) {
            setScore(s => s + 25);
            setFeedback('✅ Excellent !');
        } else {
            setFeedback(`❌ ${scenario.questions[quizIndex].a}`);
        }
    };

    const handleEmergency = (solution) => {
        if (answered) return;
        setAnswered(true);
        const sit = scenario.situations[emergencyIndex];
        if (solution === sit.solution) {
            setScore(s => s + 30);
            setFeedback(`✅ Vie sauvée ! Problème : ${sit.problem}`);
        } else {
            setFeedback(`❌ Il fallait : ${sit.solution}`);
        }
    };

    const next = () => {
        if (scenario.mode === 'quiz' && quizIndex < scenario.questions.length - 1) {
            setQuizIndex(i => i + 1);
        } else if (scenario.mode === 'emergency' && emergencyIndex < scenario.situations.length - 1) {
            setEmergencyIndex(i => i + 1);
        } else if (currentAnimal < (scenario.animals?.length || 0) - 1) {
            setCurrentAnimal(i => i + 1);
        }
        setAnswered(false);
        setFeedback('');
    };

    const reset = () => {
        setScore(0);
        setCurrentAnimal(0);
        setFeedback('');
        setAnswered(false);
        setQuizIndex(0);
        setEmergencyIndex(0);
    };

    const animal = scenario.animals?.[currentAnimal];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🫁 Respiration Animale">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Thème :" />

                        <ScoreDisplay score={score} maxScore={scenario.mode === 'emergency' ? 90 : 100} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.animals && !scenario.mode && animal && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-blue-500/20 to-transparent rounded-xl">
                                    <div className="text-5xl mb-2">{animal.emoji}</div>
                                    <div className="text-lg font-bold text-white">{animal.name}</div>
                                    {animal.note && <div className="text-xs text-yellow-400">⭐ {animal.note}</div>}
                                    {animal.desc && <div className="text-xs text-gray-400">{animal.desc}</div>}
                                </div>

                                {!answered && (
                                    <div className="grid grid-cols-3 gap-2">
                                        <GameButton onClick={() => handleClassify('poumons')} color="red" size="small">🫁 Poumons</GameButton>
                                        <GameButton onClick={() => handleClassify('branchies')} color="cyan" size="small">🐟 Branchies</GameButton>
                                        <GameButton onClick={() => handleClassify('trachees')} color="green" size="small">🦗 Trachées</GameButton>
                                    </div>
                                )}

                                {answered && currentAnimal < scenario.animals.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
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

                        {scenario.mode === 'emergency' && (
                            <>
                                <div className="p-3 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-xl animate-pulse">
                                    <div className="text-3xl text-center mb-2">{scenario.situations[emergencyIndex]?.emoji}</div>
                                    <div className="text-center font-bold text-red-300">URGENCE !</div>
                                    <div className="text-sm text-white text-center">{scenario.situations[emergencyIndex]?.desc}</div>
                                </div>
                                {!answered && (
                                    <div className="space-y-1">
                                        {scenario.situations.map(s => s.solution).filter((v, i, a) => a.indexOf(v) === i).map((sol, i) => (
                                            <button key={i} onClick={() => handleEmergency(sol)}
                                                className="w-full p-2 bg-white/10 hover:bg-white/20 rounded-lg text-left text-xs">
                                                {sol}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {answered && emergencyIndex < scenario.situations.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Cas suivant →</GameButton>
                                )}
                            </>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.4} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Lungs visualization */}
            <group position={[-2, 0, 0]}>
                <mesh><sphereGeometry args={[0.8, 16, 16]} /><meshStandardMaterial color="#FFCDD2" /></mesh>
                <mesh position={[0.5, 0, 0]}><sphereGeometry args={[0.7, 16, 16]} /><meshStandardMaterial color="#FFCDD2" /></mesh>
                <Billboard position={[0.2, 1.2, 0]}><Text fontSize={0.3} color="white">🫁 Poumons</Text></Billboard>
            </group>

            {/* Gills visualization */}
            <group position={[2, 0, 0]}>
                <mesh><boxGeometry args={[0.8, 1.2, 0.3]} /><meshStandardMaterial color="#F48FB1" /></mesh>
                {[0, 1, 2, 3].map(i => (
                    <mesh key={i} position={[0.5, -0.4 + i * 0.25, 0]}><boxGeometry args={[0.3, 0.1, 0.2]} /><meshStandardMaterial color="#E91E63" /></mesh>
                ))}
                <Billboard position={[0, 1.2, 0]}><Text fontSize={0.3} color="white">🐟 Branchies</Text></Billboard>
            </group>

            {animal && (
                <Float speed={2} floatIntensity={0.5}>
                    <Billboard position={[0, 2.5, 0]}><Text fontSize={1.2}>{animal.emoji}</Text></Billboard>
                </Float>
            )}
        </group>
    );
}

// ============================================================================
// 6-8. REPRODUCTION (Animale, Plantes à Fleurs, Plantes sans Fleurs)
// ============================================================================
export function AnimalReproduction() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [currentAnimal, setCurrentAnimal] = useState(0);
    const [answered, setAnswered] = useState(false);

    const scenarios = useMemo(() => [
        {
            name: "Ovipares",
            emoji: "🥚",
            difficulty: "⭐ Facile",
            focus: "ovipare",
            animals: [
                { name: 'Poule', emoji: '🐔', type: 'ovipare', desc: 'Pond des œufs à coquille dure' },
                { name: 'Crocodile', emoji: '🐊', type: 'ovipare', desc: 'Enterre ses œufs dans le sable' },
                { name: 'Tortue', emoji: '🐢', type: 'ovipare', desc: 'Pond sur la plage' },
                { name: 'Papillon', emoji: '🦋', type: 'ovipare', desc: 'Pond sur les feuilles' },
            ]
        },
        {
            name: "Vivipares",
            emoji: "🤱",
            difficulty: "⭐ Facile",
            focus: "vivipare",
            animals: [
                { name: 'Vache', emoji: '🐄', type: 'vivipare', desc: 'Le veau se développe dans le ventre' },
                { name: 'Lion', emoji: '🦁', type: 'vivipare', desc: 'Les lionceaux naissent vivants' },
                { name: 'Baleine', emoji: '🐋', type: 'vivipare', desc: 'Allaite son petit' },
                { name: 'Homme', emoji: '👶', type: 'vivipare', desc: '9 mois de gestation' },
            ]
        },
        {
            name: "Classification",
            emoji: "🎯",
            difficulty: "⭐⭐ Moyen",
            mode: "classify",
            animals: [
                { name: 'Serpent', emoji: '🐍', type: 'ovipare' },
                { name: 'Chien', emoji: '🐕', type: 'vivipare' },
                { name: 'Grenouille', emoji: '🐸', type: 'ovipare' },
                { name: 'Éléphant', emoji: '🐘', type: 'vivipare' },
                { name: 'Moustique', emoji: '🦟', type: 'ovipare' },
                { name: 'Dauphin', emoji: '🐬', type: 'vivipare' },
            ]
        },
        {
            name: "Quiz Expert",
            emoji: "🧠",
            difficulty: "⭐⭐⭐ Expert",
            mode: "quiz",
            questions: [
                { q: "Qu'est-ce que la fécondation ?", a: "Rencontre du spermatozoïde et de l'ovule", wrong: ["La naissance", "La ponte"] },
                { q: "Un mammifère est toujours...", a: "Vivipare (sauf ornithorynque)", wrong: ["Ovipare", "Asexué"] },
                { q: "Que contient l'œuf de poule ?", a: "L'embryon et ses réserves nutritives", wrong: ["Uniquement du blanc", "De l'air"] },
                { q: "La gestation de l'éléphant dure...", a: "22 mois (la plus longue)", wrong: ["9 mois comme l'homme", "3 mois"] },
            ]
        }
    ], []);

    const scenario = scenarios[scenarioIndex];
    const [quizIndex, setQuizIndex] = useState(0);

    const handleClassify = (type) => {
        if (answered) return;
        setAnswered(true);
        const animal = scenario.animals[currentAnimal];
        if (type === animal.type) {
            setScore(s => s + 15);
            setFeedback(`✅ ${animal.name} est ${type === 'ovipare' ? 'OVIPARE (pond des œufs)' : 'VIVIPARE (naît vivant)'}`);
        } else {
            setFeedback(`❌ ${animal.name} est ${animal.type === 'ovipare' ? 'OVIPARE' : 'VIVIPARE'}`);
        }
    };

    const handleQuiz = (answer) => {
        if (answered) return;
        setAnswered(true);
        if (answer === scenario.questions[quizIndex].a) {
            setScore(s => s + 25);
            setFeedback('✅ Correct !');
        } else {
            setFeedback(`❌ ${scenario.questions[quizIndex].a}`);
        }
    };

    const next = () => {
        if (scenario.mode === 'quiz' && quizIndex < scenario.questions.length - 1) {
            setQuizIndex(i => i + 1);
        } else if (currentAnimal < (scenario.animals?.length || 0) - 1) {
            setCurrentAnimal(i => i + 1);
        }
        setAnswered(false);
        setFeedback('');
    };

    const reset = () => {
        setScore(0);
        setCurrentAnimal(0);
        setFeedback('');
        setAnswered(false);
        setQuizIndex(0);
    };

    const animal = scenario.animals?.[currentAnimal];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🥚 Reproduction Animale">
                    <div className="space-y-3">
                        <ScenarioSelector scenarios={scenarios} current={scenarioIndex} onChange={(i) => { setScenarioIndex(i); reset(); }} title="Thème :" />

                        <ScoreDisplay score={score} maxScore={100} />

                        {feedback && (
                            <div className={`p-2 rounded-lg text-center text-xs ${feedback.includes('✅') ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
                                {feedback}
                            </div>
                        )}

                        {scenario.animals && !scenario.mode && animal && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-pink-500/20 to-transparent rounded-xl">
                                    <div className="text-5xl mb-2">{animal.emoji}</div>
                                    <div className="text-lg font-bold text-white">{animal.name}</div>
                                    <div className="text-xs text-gray-400">{animal.desc}</div>
                                    <div className={`mt-2 px-3 py-1 rounded-full inline-block text-xs font-bold ${animal.type === 'ovipare' ? 'bg-yellow-500/30 text-yellow-300' : 'bg-pink-500/30 text-pink-300'}`}>
                                        {animal.type === 'ovipare' ? '🥚 OVIPARE' : '🤱 VIVIPARE'}
                                    </div>
                                </div>
                                {currentAnimal < scenario.animals.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
                                )}
                            </>
                        )}

                        {scenario.mode === 'classify' && animal && (
                            <>
                                <div className="text-center p-4 bg-gradient-to-b from-purple-500/20 to-transparent rounded-xl">
                                    <div className="text-5xl mb-2">{animal.emoji}</div>
                                    <div className="text-lg font-bold text-white">{animal.name}</div>
                                </div>
                                {!answered && (
                                    <div className="grid grid-cols-2 gap-2">
                                        <GameButton onClick={() => handleClassify('ovipare')} color="yellow" size="small">🥚 Ovipare</GameButton>
                                        <GameButton onClick={() => handleClassify('vivipare')} color="red" size="small">🤱 Vivipare</GameButton>
                                    </div>
                                )}
                                {answered && currentAnimal < scenario.animals.length - 1 && (
                                    <GameButton onClick={next} color="cyan">Suivant →</GameButton>
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

            {/* Egg */}
            <group position={[-2, 0, 0]}>
                <mesh><sphereGeometry args={[0.6, 16, 16]} /><meshStandardMaterial color="#FFF8E1" /></mesh>
                <Billboard position={[0, 1.2, 0]}><Text fontSize={0.3} color="white">🥚 Ovipare</Text></Billboard>
            </group>

            {/* Womb symbol */}
            <group position={[2, 0, 0]}>
                <mesh><sphereGeometry args={[0.7, 16, 16]} /><meshStandardMaterial color="#FFCDD2" transparent opacity={0.7} /></mesh>
                <mesh><sphereGeometry args={[0.3, 16, 16]} /><meshStandardMaterial color="#FFAB91" /></mesh>
                <Billboard position={[0, 1.2, 0]}><Text fontSize={0.3} color="white">🤱 Vivipare</Text></Billboard>
            </group>

            {animal && (
                <Float speed={2} floatIntensity={0.5}>
                    <Billboard position={[0, 2.5, 0]}><Text fontSize={1.2}>{animal.emoji}</Text></Billboard>
                </Float>
            )}
        </group>
    );
}

// All functions are exported inline with 'export function'
