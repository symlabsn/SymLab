'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, useGLTF, Float, Sphere, Box, Cylinder, Torus, Line } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';

// Images et icônes
const ICONS = {
    science: '🔬', measure: '📏', density: '⛵', weight: '⚖️', elec: '⚡',
    idea: '💡', check: '✅', warning: '⚠️', obs: '👁️'
};

// ============================================================
// CHAPITRE 1: LA DÉMARCHE SCIENTIFIQUE (ENRICHI)
// ============================================================
export function Chap1ScienceIntro() {
    const [scenario, setScenario] = useState('chimie');
    const [step, setStep] = useState(0);
    const [experimentDone, setExperimentDone] = useState(false);
    const [observationLog, setObservationLog] = useState([]);

    // Refs pour animation
    const groupRef = useRef();

    const scenarios = {
        chimie: {
            title: 'Vinaigre + Bicarbonate',
            desc: 'Que se passe-t-il lors du mélange ?',
            steps: [
                { name: 'Observer', text: 'On a du liquide (Acide) et de la poudre (Base).', color: '#3B82F6' },
                { name: 'Hypothèse', text: 'Je pense que ça va exploser ou mousser !', color: '#F59E0B' },
                { name: 'Expérience', text: 'Versons le vinaigre sur la poudre...', color: '#10B981', action: 'Verser' },
                { name: 'Conclusion', text: 'Une réaction chimique crée du gaz (CO₂).', color: '#8B5CF6' }
            ],
            color: '#60A5FA'
        },
        plante: {
            title: 'Plante & Lumière',
            desc: 'De quoi la plante a-t-elle besoin ?',
            steps: [
                { name: 'Observer', text: 'La plante est verte et vivante.', color: '#22C55E' },
                { name: 'Hypothèse', text: 'Sans lumière, elle va mourir.', color: '#F59E0B' },
                { name: 'Expérience', text: 'Cachons la plante sous une boîte noire...', color: '#10B981', action: 'Cacher' },
                { name: 'Conclusion', text: 'La photosynthèse nécessite de la lumière.', color: '#8B5CF6' }
            ],
            color: '#4ADE80'
        },
        flotte: {
            title: 'Œuf & Eau Salée',
            desc: 'Pourquoi l\'œuf flotte-t-il parfois ?',
            steps: [
                { name: 'Observer', text: 'L\'œuf coule dans l\'eau du robinet.', color: '#3B82F6' },
                { name: 'Hypothèse', text: 'Le sel rend l\'eau plus "porteuse" (dense).', color: '#F59E0B' },
                { name: 'Expérience', text: 'Ajoutons beaucoup de sel dans l\'eau...', color: '#10B981', action: 'Saler' },
                { name: 'Conclusion', text: 'L\'eau salée est plus dense que l\'œuf.', color: '#8B5CF6' }
            ],
            color: '#A78BFA'
        }
    };

    const currentScenario = scenarios[scenario];

    const handleNextStep = () => {
        if (step < 3) setStep(step + 1);
        if (step === 1) setExperimentDone(true); // Lance l'anim au moment de l'expérience
    };

    const [mode, setMode] = useState('explore'); // 'explore' | 'challenge'
    const [challenge, setChallenge] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const challenges = [
        { q: "Quelle est la 1ère étape de la démarche ?", options: ["Hypothèse", "Observation", "Conclusion"], ans: 1 },
        { q: "L'hypothèse est...", options: ["Une certitude", "Une supposition", "Un fait"], ans: 1 },
        { q: "Pour valider une idée, il faut...", options: ["Expérimenter", "Deviner", "Attendre"], ans: 0 },
        { q: "Si l'expérience échoue, je...", options: ["Abandonne", "Change les faits", "Revois mon hypothèse"], ans: 2 }
    ];

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        nextQuestion();
    };

    const nextQuestion = () => {
        const rand = Math.floor(Math.random() * challenges.length);
        setChallenge({ ...challenges[rand], answered: false });
        setShowSuccess(false);
    };

    const checkAnswer = (idx) => {
        if (!challenge) return;
        if (idx === challenge.ans) {
            setScore(s => s + 20);
            setShowSuccess(true);
            // Auto next after delay handled by user clicking "Next" in success overlay or similar
        } else {
            // Wrong answer feedback?
            alert("Ce n'est pas la bonne réponse, essaie encore !");
        }
    };

    const reset = () => {
        setStep(0);
        setExperimentDone(false);
    };

    return (
        <group ref={groupRef}>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Démarche Scientifique" showCloseButton={false} defaultPosition="bottom-center" className="w-[350px] border-white/10 text-white" usePortal={false}>
                    {/* Header Controls */}
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-blue-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz Défi 🏆</button>
                        </div>
                        {mode === 'explore' && <button onClick={reset} className="text-xs px-2 py-1 bg-white/10 rounded hover:bg-white/20">🔄 Reset</button>}
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'explore' ? (
                        <>
                            {/* Choix du scénario */}
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => { setScenario(key); reset(); }}
                                        className={`p-2 rounded-lg text-xs font-bold transition-all ${scenario === key ? 'bg-blue-600 ring-2 ring-white' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                        {key === 'chimie' && '🧪 Chimie'}
                                        {key === 'plante' && '🌿 SVT'}
                                        {key === 'flotte' && '🥚 Densité'}
                                    </button>
                                ))}
                            </div>

                            {/* Étapes de la démarche */}
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                                    <span>ÉTAPE {step + 1}/4</span>
                                    <span>{currentScenario.steps[step].name.toUpperCase()}</span>
                                </div>

                                <div className="bg-gray-900/80 p-4 rounded-xl border border-white/5 min-h-[80px] flex items-center justify-center text-center">
                                    <p className="text-lg font-medium" style={{ color: currentScenario.steps[step].color }}>
                                        {currentScenario.steps[step].text}
                                    </p>
                                </div>

                                {/* Barre de progression */}
                                <div className="flex gap-1 h-2 mb-4">
                                    {[0, 1, 2, 3].map(i => (
                                        <div key={i} className={`flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-blue-500' : 'bg-gray-800'}`} />
                                    ))}
                                </div>

                                {step < 3 ? (
                                    <button onClick={handleNextStep}
                                        className="w-full py-4 rounded-xl font-bold text-lg shadow-lg transform transition-all hover:scale-105 active:scale-95"
                                        style={{ backgroundColor: currentScenario.steps[step].color, color: 'black' }}>
                                        {step === 2 ? `🚀 ${currentScenario.steps[step].action}` : 'Suivant ➡️'}
                                    </button>
                                ) : (
                                    <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/50 text-center">
                                        <div className="text-3xl mb-2">🎉</div>
                                        <div className="font-bold text-green-400">Conclusion Validée !</div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-800 p-4 rounded-xl border border-purple-500/50">
                            <h3 className="text-purple-300 font-bold mb-4 flex items-center gap-2">
                                <span>🧠</span> Quiz Scientifique
                            </h3>
                            {challenge && (
                                <div className="space-y-4">
                                    <div className="text-sm font-medium">{challenge.q}</div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                className="w-full text-left p-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors text-sm">
                                                {['A', 'B', 'C'][idx]}. {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>


            <Text position={[0, 3.5, 0]} fontSize={0.5} anchorX="center" color="white" outlineWidth={0.02} outlineColor="black">
                {currentScenario.title.toUpperCase()}
            </Text>

            {/* SCÈNE 3D DYNAMIQUE SELON SCÉNARIO */}
            <group position={[0, -1, 0]}>
                {scenario === 'chimie' && <ChimieScene active={experimentDone && step >= 2} />}
                {scenario === 'plante' && <PlanteScene active={experimentDone && step >= 2} step={step} />}
                {scenario === 'flotte' && <FlotteScene active={experimentDone && step >= 2} />}
            </group>

            <SuccessOverlay show={showSuccess} message="Bonne réponse ! Continue comme ça !" points={20} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// Sous-composants Scènes 3D
function ChimieScene({ active }) {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        if (active) {
            setBubbles(Array.from({ length: 40 }).map(() => ({
                x: (Math.random() - 0.5) * 1.5,
                y: Math.random() * 3,
                scale: Math.random() * 0.1 + 0.05,
                speed: Math.random() * 2 + 1
            })));
        } else {
            setBubbles([]);
        }
    }, [active]);

    return (
        <group>
            {/* Bécher */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1, 1, 2.5, 32, 1, true]} />
                <meshPhysicalMaterial color="#A5F3FC" transmission={0.9} opacity={0.5} transparent roughness={0} thickness={0.5} side={THREE.DoubleSide} />
            </mesh>
            {/* Liquide */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[0.95, 0.9, 1.4, 32]} />
                <meshStandardMaterial color={active ? "#FCD34D" : "#E5E7EB"} transparent opacity={0.8} />
            </mesh>
            {/* Mousse/Bulles si actif */}
            {active && (
                <group position={[0, 0.5, 0]}>
                    <mesh position={[0, 0.5, 0]} scale={[1.1, 0.5, 1.1]}>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshStandardMaterial color="white" roughness={0.4} />
                    </mesh>
                    {bubbles.map((b, i) => (
                        <Float key={i} speed={b.speed} rotationIntensity={0} floatIntensity={2} floatingRange={[b.y, b.y + 2]}>
                            <mesh position={[b.x, b.y, b.x]}>
                                <sphereGeometry args={[b.scale]} />
                                <meshStandardMaterial color="white" transparent opacity={0.6} />
                            </mesh>
                        </Float>
                    ))}
                </group>
            )}
        </group>
    );
}

function PlanteScene({ active, step }) {
    // Si step >= 2 (Expérience), la plante est sous une boîte (visible ou non)
    // Si active (Step 2 passé vers 3), la plante change d'état
    return (
        <group>
            {/* Pot */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.6, 0.4, 1, 8]} />
                <meshStandardMaterial color="#78350F" />
            </mesh>
            {/* Plante */}
            <group position={[0, -0.5, 0]}>
                <mesh position={[0, 1, 0]} scale={active && step === 3 ? [0.8, 0.6, 0.8] : [1, 1, 1]}> {/* Plante fletrie si fin */}
                    <cylinderGeometry args={[0.05, 0.05, 2]} />
                    <meshStandardMaterial color={active && step === 3 ? "#D97706" : "#15803D"} />
                </mesh>
                <mesh position={[0, 1.8, 0]} scale={active && step === 3 ? 0.5 : 1}>
                    <dodecahedronGeometry args={[0.8]} />
                    <meshStandardMaterial color={active && step === 3 ? "#F59E0B" : "#22C55E"} />
                </mesh>
            </group>
            {/* Boîte Noire (Cache) */}
            {step === 2 && (
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[2, 4, 2]} />
                    <meshStandardMaterial color="#1F2937" opacity={0.9} transparent wireframe={false} />
                </mesh>
            )}
            {/* Soleil */}
            <pointLight position={[3, 3, 2]} intensity={2} color="#FDB813" />
        </group>
    );
}

function FlotteScene({ active }) {
    const [saltParticles, setSaltParticles] = useState(null);

    useEffect(() => {
        if (active) {
            const particles = new Float32Array(300).map(() => (Math.random() - 0.5) * 3);
            setSaltParticles(particles);
        } else {
            setSaltParticles(null);
        }
    }, [active]);

    return (
        <group>
            {/* Aquarium */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 3, 2]} />
                <meshPhysicalMaterial color="#BFDBFE" transmission={0.8} opacity={0.3} transparent side={THREE.DoubleSide} />
            </mesh>
            {/* Eau */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[2.9, 2, 1.9]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.5} />
            </mesh>
            {/* Particules de sel si actif */}
            {active && saltParticles && (
                <points position={[0, -1, 0]}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" count={100} array={saltParticles} itemSize={3} />
                    </bufferGeometry>
                    <pointsMaterial size={0.05} color="white" />
                </points>
            )}
            {/* Œuf */}
            <Float floatIntensity={active ? 2 : 0} speed={2}>
                <mesh position={[0, active ? 0.2 : -1.2, 0]} rotation={[0, 0, 0.2]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color="#FEF3C7" roughness={0.5} />
                </mesh>
            </Float>
        </group>
    );
}


// ============================================================
// CHAPITRE 2: MESURES ET INCERTITUDES (ENRICHI)
// ============================================================
export function Chap2Mesures() {
    const [tool, setTool] = useState('ruler');
    const [object, setObject] = useState('block');
    const [measurement, setMeasurement] = useState(null);
    const [precision, setPrecision] = useState(false); // Mode précision

    // Mode Défi
    const [mode, setMode] = useState('explore');
    const [mission, setMission] = useState(null); // { target: X, unit: 'g', type: 'mass' }
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const tools = {
        ruler: { name: 'Règle', unit: 'cm', color: '#F59E0B', error: 0.1 },
        balance: { name: 'Balance', unit: 'g', color: '#3B82F6', error: 0.5 },
        cylinder: { name: 'Éprouvette', unit: 'mL', color: '#10B981', error: 1 },
        chrono: { name: 'Chronomètre', unit: 's', color: '#8B5CF6', error: 0.01 }
    };

    const objects = {
        block: { name: 'Bloc de Bois', dim: 12.5, mass: 150, vol: 250 },
        apple: { name: 'Pomme', dim: 8.2, mass: 120, vol: 130 },
        key: { name: 'Clé en Fer', dim: 5.5, mass: 25, vol: 3.2 },
        water: { name: 'Eau (100mL)', dim: 10, mass: 100, vol: 100 } // Spécial éprouvette
    };

    const handleMeasure = () => {
        const obj = objects[object];
        let baseVal = 0;
        if (tool === 'ruler') baseVal = obj.dim;
        if (tool === 'balance') baseVal = obj.mass;
        if (tool === 'cylinder') baseVal = obj.vol;
        if (tool === 'chrono') baseVal = 10.5; // Temps de chute fictif

        // Simulation d'erreur réaliste
        const errorMargin = precision ? tools[tool].error / 2 : tools[tool].error * 2;
        const randomError = (Math.random() - 0.5) * errorMargin;
        const val = parseFloat((baseVal + randomError).toFixed(precision ? 2 : 1));
        setMeasurement(val);

        if (mode === 'challenge' && mission) {
            checkMission(val, obj, tools[tool].unit);
        }
    };

    const startMission = () => {
        const missions = [
            { text: "Trouve un objet de ~150 g", target: 150, tolerance: 5, unit: 'g' },
            { text: "Trouve un objet de ~12.5 cm", target: 12.5, tolerance: 0.5, unit: 'cm' },
            { text: "Mesure 100 mL de liquide", target: 100, tolerance: 5, unit: 'mL' },
        ];
        const m = missions[Math.floor(Math.random() * missions.length)];
        setMission(m);
        setMode('challenge');
        setShowSuccess(false);
        setMeasurement(null);
    };

    const checkMission = (val, obj, unit) => {
        if (!mission) return;
        // Check unit matching
        if (unit !== mission.unit) return; // Wrong tool

        if (Math.abs(val - mission.target) <= mission.tolerance) {
            setScore(s => s + 50);
            setShowSuccess(true);
        }
    };

    return (
        <group>

            <Html transform={false}>
                <DraggableHtmlPanel title="📏 Laboratoire de Mesure" showCloseButton={false} defaultPosition="bottom-center" className="w-[320px] border-cyan-500/30 text-white" usePortal={false}>

                    {/* Choix Objet */}
                    <div className="mb-4">
                        <label className="text-xs text-gray-400 uppercase font-bold">1. Choisir l'objet</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                            {Object.entries(objects).map(([k, o]) => (
                                <button key={k} onClick={() => { setObject(k); setMeasurement(null); }}
                                    className={`px-3 py-2 rounded-lg text-sm text-left ${object === k ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                                    {o.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Choix Outil */}
                    <div className="mb-4">
                        <label className="text-xs text-gray-400 uppercase font-bold">2. Choisir l'instrument</label>
                        <div className="flex gap-2 mt-1 overflow-x-auto pb-2">
                            {Object.entries(tools).map(([k, t]) => (
                                <button key={k} onClick={() => { setTool(k); setMeasurement(null); }}
                                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-bold ${tool === k ? 'bg-white text-black' : 'bg-gray-800 text-gray-400'}`}
                                    style={{ borderBottom: tool === k ? `4px solid ${t.color}` : 'none' }}>
                                    {t.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <input type="checkbox" checked={precision} onChange={() => setPrecision(!precision)} className="w-4 h-4" />
                        <span className="text-sm text-gray-300">Mode Précision (Instrument Pro)</span>
                    </div>

                    <button onClick={handleMeasure} className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg transition-all">
                        MESURER
                    </button>

                    {measurement && (
                        <div className="mt-4 p-4 bg-white/10 rounded-xl border border-white/20 text-center animate-in zoom-in duration-300">
                            <div className="text-xs text-gray-400 uppercase">Résultat</div>
                            <div className="text-4xl font-mono font-bold text-cyan-300 my-2">
                                {measurement} <span className="text-xl">{tools[tool].unit}</span>
                            </div>
                            <div className="text-xs text-red-300">
                                Incertitude: ± {tools[tool].error} {tools[tool].unit}
                            </div>
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>


            <Text position={[0, 4, 0]} fontSize={0.6} color="#22D3EE" anchorX="center">MESURES & INCERTITUDES</Text>

            {/* Visualisation 3D */}
            <group position={[0, -1, 0]}>
                {/* Objet affiché */}
                <group position={[0, 0.5, 0]}>
                    {object === 'block' && <Box args={[2, 2, 2]} material-color="#92400E" />}
                    {object === 'apple' && <Sphere args={[1]} material-color="#EF4444" />}
                    {object === 'key' && <Box args={[0.5, 0.2, 1.5]} material-color="#9CA3AF" />}
                    {object === 'water' && (
                        <group>
                            <Cylinder args={[1, 1, 2, 32]} material-color="#3B82F6" material-transparent material-opacity={0.6} />
                            <Cylinder args={[1.1, 1.1, 2.1, 32, 1, true]} material-color="white" material-transparent material-opacity={0.3} />
                        </group>
                    )}
                </group>

                {/* Instrument affiché */}
                <group position={[-3, 0.5, 0]}>
                    {tool === 'ruler' && (
                        <group rotation={[0, 0, Math.PI / 2]}>
                            <Box args={[4, 0.5, 0.1]} material-color="#F59E0B" />
                            <Text position={[-1.5, 0, 0.1]} fontSize={0.2} color="black">0</Text>
                            <Text position={[1.5, 0, 0.1]} fontSize={0.2} color="black">30</Text>
                        </group>
                    )}
                    {tool === 'balance' && (
                        <group position={[3, -1.5, 0]}> {/* Balance sous l'objet */}
                            <Box args={[4, 0.2, 3]} material-color="#1F2937" />
                            <Text position={[0, 0.11, 1]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.3} color="red">
                                {measurement ? measurement : '00.0'}
                            </Text>
                        </group>
                    )}
                </group>
            </group>
        </group>
    );
}

// ============================================================
// CHAPITRE 3: DENSITÉ & ARCHIMÈDE
// ============================================================
export function Chap3Densite() {
    const [liquid, setLiquid] = useState('water');
    const [object, setObject] = useState('wood');
    const [showForces, setShowForces] = useState(false);

    // Mode Défi
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [mysteryMaterial, setMysteryMaterial] = useState(null); // 'gold', 'iron', etc.
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Données physiques
    const liquids = {
        water: { name: 'Eau', density: 1.0, color: '#3B82F6' },
        oil: { name: 'Huile', density: 0.9, color: '#FBBF24' },
        honey: { name: 'Miel', density: 1.4, color: '#D97706' },
        mercury: { name: 'Mercure', density: 13.6, color: '#9CA3AF' }
    };

    const objects = {
        wood: { name: 'Bois', density: 0.6, color: '#92400E' },
        ice: { name: 'Glaçon', density: 0.92, color: '#A5F3FC' },
        plastic: { name: 'Plastique', density: 1.1, color: '#EF4444' },
        iron: { name: 'Fer', density: 7.8, color: '#4B5563' },
        gold: { name: 'Or', density: 19.3, color: '#FFD700' }
    };

    // Mode Challenge Setup
    const startDetective = () => {
        const mats = Object.keys(objects);
        const secret = mats[Math.floor(Math.random() * mats.length)];
        setMysteryMaterial(secret); // The object is visually random or generic? No, visually generic but physically specific for now? 
        // Actually let's use the 'mystery' object key
        setObject('mystery');
        setMode('challenge');
        setShowSuccess(false);
    };

    // Use selected object OR mystery properties
    const currentObjKey = object === 'mystery' ? mysteryMaterial : object;
    const currentObjProps = object === 'mystery' ?
        { name: 'Bloc Mystère', density: objects[mysteryMaterial]?.density, color: '#333' }
        : objects[object];

    const liq = liquids[liquid];
    const obj = currentObjProps;

    const guessMaterial = (matKey) => {
        if (matKey === mysteryMaterial) {
            setScore(s => s + 100);
            setShowSuccess(true);
        } else {
            alert("Ce n'est pas cette matière. Regarde si ça flotte !");
        }
    };

    // Calcul flottaison
    // Si d_obj < d_liq : Flotte (fraction immergée = d_obj / d_liq)
    // Si d_obj > d_liq : Coule
    const densityRatio = obj.density / liq.density;
    let immersionLevel = 0;

    if (densityRatio < 1) {
        // Flotte : position Y positive, partie immergée
        immersionLevel = 1.5 - (densityRatio * 1.0); // Simple approx visuelle
    } else {
        // Coule au fond
        immersionLevel = -1.5;
    }

    return (
        <group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Densité & Archimède" showCloseButton={false} defaultPosition="bottom-center" className="w-[320px] border-blue-500/30 text-white" usePortal={false}>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => { setMode('explore'); setObject('wood'); }} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-blue-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startDetective} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-orange-600' : 'bg-gray-700'}`}>Détective 🕵️</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'challenge' && (
                        <div className="mb-4 bg-orange-900/40 p-3 rounded-xl border border-orange-500/50">
                            <div className="text-xs text-orange-300 uppercase mb-2">Enquête</div>
                            <div className="text-sm mb-2">Plonge le bloc mystère dans les liquides pour deviner sa matière !</div>
                            <div className="grid grid-cols-2 gap-1">
                                {Object.entries(objects).map(([k, o]) => (
                                    <button key={k} onClick={() => guessMaterial(k)} className="text-xs bg-gray-800 hover:bg-orange-700 p-1 rounded border border-gray-600">
                                        C'est du {o.name} ?
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs uppercase text-gray-400 mb-2">1. Liquide (Milieu)</label>
                            <div className="grid grid-cols-2 gap-2">
                                {Object.entries(liquids).map(([k, l]) => (
                                    <button key={k} onClick={() => setLiquid(k)}
                                        className={`p-2 rounded-lg text-sm border ${liquid === k ? 'border-blue-400 bg-blue-900/30' : 'border-gray-700 bg-gray-800'}`}>
                                        {l.name} (d={l.density})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {mode === 'explore' && (
                            <div>
                                <label className="block text-xs uppercase text-gray-400 mb-2">2. Objet</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(objects).map(([k, o]) => (
                                        <button key={k} onClick={() => setObject(k)}
                                            className={`p-2 rounded-lg text-sm border ${object === k ? 'border-white bg-white/10' : 'border-gray-700 bg-gray-800'}`}>
                                            {o.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg">
                            <input type="checkbox" checked={showForces} onChange={() => setShowForces(!showForces)} className="w-5 h-5" />
                            <span className="text-sm font-bold">Voir les forces (Archimède)</span>
                        </div>

                        <div className="bg-gray-900 p-3 rounded-lg text-center font-mono text-sm">
                            <div>d(objet) = {mode === 'challenge' ? '???' : obj.density}</div>
                            <div>d(liquide) = {liq.density}</div>
                            <div className={`mt-2 font-bold text-lg ${densityRatio < 1 ? 'text-green-400' : 'text-red-400'}`}>
                                {densityRatio < 1 ? 'FLOTTE 🚢' : 'COULE ⚓'}
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={`Bravo ! C'était bien du ${objects[mysteryMaterial]?.name} !`} points={100} onNext={startDetective} />
            <ConfettiExplosion active={showSuccess} />

            {/* Aquarium */}
            <group position={[0, -1, 0]}>
                <Box args={[4, 4, 3]} material-color="#1E3A5F" material-width={0.5} material-transmission={0.5} material-transparent material-opacity={0.1}>
                    <meshPhysicalMaterial color="#88CCFF" transmission={0.9} thickness={0.5} roughness={0} />
                </Box>
                {/* Liquide */}
                <Box position={[0, -0.5, 0]} args={[3.8, 2.8, 2.8]}>
                    <meshStandardMaterial color={liq.color} transparent opacity={0.6} />
                </Box>

                {/* Objet */}
                <Float speed={densityRatio < 1 ? 2 : 0} rotationIntensity={densityRatio < 1 ? 0.5 : 0} floatIntensity={densityRatio < 1 ? 0.5 : 0}>
                    <mesh position={[0, immersionLevel, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={obj.color} />
                    </mesh>

                    {/* Vecteurs Forces */}
                    {showForces && (
                        <group position={[0, immersionLevel, 0]}>
                            {/* Poids (vers le bas) */}
                            <group position={[0, 0, 0]}>
                                <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 0, 0), 1.5 + obj.density / 10, 0xFF0000]} />
                                <Text position={[0.5, -1.5, 0]} fontSize={0.2} color="red">P</Text>
                            </group>
                            {/* Poussée Archimède (vers le haut) */}
                            <group position={[0, 0, 0]}>
                                <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 1.5 + (densityRatio < 1 ? obj.density : liq.density) / 10, 0x00FF00]} />
                                <Text position={[0.5, 1.5, 0]} fontSize={0.2} color="#00FF00">Fa</Text>
                            </group>
                        </group>
                    )}
                </Float>
            </group>
        </group>
    );
}

// ============================================================
// CHAPITRE 4: POIDS ET MASSE (ENRICHI)
// ============================================================
export function Chap4PoidsMasse() {
    const [planet, setPlanet] = useState('earth');
    const [mass, setMass] = useState(50);
    const astronautRef = useRef();

    // Mode Défi
    const [mode, setMode] = useState('explore');
    const [targetWeight, setTargetWeight] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const planets = {
        mercury: { name: 'Mercure', g: 3.7, color: '#9CA3AF', size: 0.38 },
        venus: { name: 'Vénus', g: 8.87, color: '#FCD34D', size: 0.95 },
        earth: { name: 'Terre', g: 9.81, color: '#3B82F6', size: 1 },
        moon: { name: 'Lune', g: 1.62, color: '#D1D5DB', size: 0.27 },
        mars: { name: 'Mars', g: 3.71, color: '#EF4444', size: 0.53 },
        jupiter: { name: 'Jupiter', g: 24.79, color: '#D97706', size: 11.2 },
        saturn: { name: 'Saturne', g: 10.44, color: '#FDE047', size: 9.45 },
        void: { name: 'Espace', g: 0, color: '#111827', size: 0 }
    };

    const p = planets[planet];
    const weight = mass * p.g;

    const startMission = () => {
        // Find a planet other than current or earth to make it interesting
        const keys = Object.keys(planets).filter(k => k !== 'void');
        const targetPKey = keys[Math.floor(Math.random() * keys.length)];
        const targetP = planets[targetPKey];
        const randomMass = Math.floor(Math.random() * 50 + 50); // 50-100kg
        const w = Math.round(randomMass * targetP.g);

        setMass(randomMass);
        setTargetWeight({ val: w, planetKey: targetPKey });
        setMode('challenge');
        setPlanet('earth'); // Reset pos
        setShowSuccess(false);
    };

    useEffect(() => {
        if (mode === 'challenge' && targetWeight) {
            // Check if current weight is close to target (meaning we are on the right planet with right mass)
            // Actually, mass is fixed in the mission description? 
            // "Une masse de X kg pèse Y Newtons. Où sommes nous ?"
            // So user changes Planet.
            if (planet === targetWeight.planetKey) {
                setScore(s => s + 50);
                setShowSuccess(true);
            }
        }
    }, [planet, mode, targetWeight]);


    return (
        <group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Poids (N) vs Masse (kg)" showCloseButton={false} defaultPosition="bottom-center" className="w-[350px] border-purple-500/30 text-white max-h-[80vh] overflow-y-auto" usePortal={false}>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-purple-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startMission} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-indigo-600' : 'bg-gray-700'}`}>Mission 🚀</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'challenge' && targetWeight && (
                        <div className="mb-4 bg-indigo-900/50 p-3 rounded-xl border border-indigo-500/50 text-center animate-pulse">
                            <div className="text-xs text-indigo-300 uppercase">Alerte Système</div>
                            <div className="text-sm">Localise la planète où ta masse de</div>
                            <div className="font-bold text-white">{mass} kg</div>
                            <div className="text-sm">pèse exactement</div>
                            <div className="font-bold text-xl text-yellow-400">{targetWeight.val} N</div>
                        </div>
                    )}

                    <div className="mb-6">
                        <label className="block text-sm text-gray-400 mb-2">Choisir un astre :</label>
                        <div className="grid grid-cols-4 gap-2">
                            {Object.entries(planets).map(([k, pl]) => (
                                <button key={k} onClick={() => setPlanet(k)}
                                    title={pl.name}
                                    className={`aspect-square rounded-full border-2 flex items-center justify-center transition-all ${planet === k ? 'border-purple-500 scale-110' : 'border-transparent bg-gray-800'}`}
                                    style={{ backgroundColor: planet === k ? pl.color + '40' : '' }}>
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: pl.color }}></div>
                                </button>
                            ))}
                        </div>
                        <div className="text-center mt-2 font-bold text-lg">{p.name}</div>
                    </div>

                    <div className="mb-6 bg-gray-800 p-4 rounded-xl">
                        <label className="block text-sm text-gray-400 mb-2">Masse de l'astronaute (kg)</label>
                        <input type="range" min="30" max="150" value={mass} onChange={(e) => mode === 'explore' && setMass(Number(e.target.value))}
                            disabled={mode === 'challenge'}
                            className={`w-full h-3 bg-gray-700 rounded-lg accent-purple-500 appearance-none ${mode === 'challenge' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} />
                        <div className="text-right font-mono text-xl">{mass} kg</div>
                    </div>

                    <div className="space-y-3 font-mono">
                        <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-gray-400">Intensité g:</span>
                            <span>{p.g} N/kg</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-purple-900/30 border border-purple-500/50 rounded-xl">
                            <span className="text-purple-300">Poids P = m × g</span>
                            <span className="text-2xl font-bold text-purple-400">{weight.toFixed(1)} N</span>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={`Planète identifiée ! Bienvenue sur ${planets[targetWeight?.planetKey]?.name} !`} points={100} onNext={startMission} />
            <ConfettiExplosion active={showSuccess} />

            {/* Sol de la planète */}
            <mesh position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[10, 64, 64]} />
                <meshStandardMaterial color={p.color} roughness={0.8} />
            </mesh>

            {/* Atmosphère si Terre/Mars/Jupiter */}
            {['earth', 'venus', 'jupiter', 'saturn'].includes(planet) && (
                <mesh position={[0, -10, 0]}>
                    <sphereGeometry args={[12, 32, 32]} />
                    <meshBasicMaterial color={p.color} transparent opacity={0.1} side={THREE.BackSide} />
                </mesh>
            )}

            {/* Astronaute */}
            <group position={[0, 0.8, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={planet === 'void' ? 2 : (planet === 'moon' ? 1 : 0.1)}>
                    {/* Corps simple astronaute */}
                    <Box args={[0.5, 0.8, 0.3]} position={[0, 0.4, 0]} material-color="white" />
                    <Sphere args={[0.3]} position={[0, 1, 0]}>
                        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
                    </Sphere>
                    <Box args={[0.2, 0.8, 0.2]} position={[-0.2, -0.4, 0]} material-color="white" />
                    <Box args={[0.2, 0.8, 0.2]} position={[0.2, -0.4, 0]} material-color="white" />
                    <Box args={[0.2, 0.6, 0.2]} position={[-0.4, 0.6, 0]} rotation={[0, 0, 0.5]} material-color="white" />
                    <Box args={[0.2, 0.6, 0.2]} position={[0.4, 0.6, 0]} rotation={[0, 0, -0.5]} material-color="white" />

                    {/* Vecteur Poids dynamique */}
                    {planet !== 'void' && (
                        <group position={[0, 0, 0]}>
                            <arrowHelper args={[
                                new THREE.Vector3(0, -1, 0),
                                new THREE.Vector3(0, 0, 2),
                                1 + (weight / 500), // Longueur proportionnelle au poids
                                0xFF00FF
                            ]} />
                            <Text position={[0.5, -1 - (weight / 1000), 2]} fontSize={0.3} color="#FF00FF">
                                P = {weight.toFixed(0)} N
                            </Text>
                        </group>
                    )}
                </Float>
            </group>
        </group>
    );
}

// ============================================================
// CHAPITRE 5: ÉLECTRICITÉ (ENRICHI)
// ============================================================
// ============================================================
// CHAPITRE 5: ÉLECTRICITÉ (ULTIMATE EDITION)
// ============================================================
export function Chap5Electricite() {
    const [topology, setTopology] = useState('series'); // 'series' | 'parallel'
    const [slots, setSlots] = useState({}); // { 0: 'lamp', 1: 'wire', ... }
    const [switchState, setSwitchState] = useState(false);
    const [showMenu, setShowMenu] = useState(null); // Slot ID being edited

    // Mode Défi
    const [mode, setMode] = useState('explore'); // 'explore' | 'challenge'
    const [challenge, setChallenge] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Initialisation
    useEffect(() => {
        resetCircuit();
    }, [topology]);

    const resetCircuit = () => {
        if (topology === 'series') {
            setSlots({ 0: 'lamp', 1: 'wire', 2: 'wire' });
        } else {
            setSlots({ 0: 'lamp', 1: 'wire', 2: 'motor', 3: 'wire' });
        }
        setSwitchState(false);
        setMode('explore');
    };

    // --- DATA COMPONENTS ---
    // Resistors format: resistor_{value}
    const standardComponents = [
        { id: 'wire', name: 'Fil', icon: '➖', r: 0.1, type: 'basic' },
        { id: 'lamp', name: 'Lampe', icon: '💡', r: 10, type: 'basic' },
        { id: 'motor', name: 'Moteur', icon: '⚙️', r: 15, type: 'basic' },
        { id: 'open', name: 'Vide', icon: '🚫', r: Infinity, type: 'basic' }
    ];

    const resistorsList = [
        { val: 10, colors: ['🟤', '⚫', '⚫'] }, // Brown Black Black (10) - Correction norm: Brown(1) Black(0) Black(x1) = 10
        { val: 100, colors: ['🟤', '⚫', '🟤'] }, // Brown(1) Black(0) Brown(x10) = 100
        { val: 220, colors: ['🔴', '🔴', '🟤'] }, // Red(2) Red(2) Brown(x10) = 220
        { val: 1000, colors: ['🟤', '⚫', '🔴'] }, // Brown(1) Black(0) Red(x100) = 1k
    ];

    const getCompInfo = (id) => {
        if (!id) return standardComponents[3];
        if (id.startsWith('resistor_')) {
            const val = parseInt(id.split('_')[1]);
            return { id, name: `R ${val}Ω`, icon: '▆', r: val, type: 'resistor' };
        }
        return standardComponents.find(c => c.id === id) || standardComponents[3];
    };

    // --- CIRCUIT ANALYSIS ---
    const analysis = useMemo(() => {
        if (!switchState) return { status: 'open', msg: 'Circuit ouvert', current: 0 };

        let status = 'ok';
        let msg = 'Valide';
        let current = 0;

        try {
            if (topology === 'series') {
                const rTotal = [0, 1, 2].reduce((acc, slotId) => acc + getCompInfo(slots[slotId]).r, 0);
                if (rTotal < 1) throw 'short';
                if (rTotal === Infinity) throw 'open';
                current = 4.5 / rTotal;
            } else {
                const rB1 = getCompInfo(slots[0]).r + getCompInfo(slots[1]).r;
                const rB2 = getCompInfo(slots[2]).r + getCompInfo(slots[3]).r;

                if (rB1 < 1 || rB2 < 1) throw 'short';
                if (rB1 === Infinity && rB2 === Infinity) throw 'open';

                current = (rB1 !== Infinity ? 4.5 / rB1 : 0) + (rB2 !== Infinity ? 4.5 / rB2 : 0);
            }
        } catch (e) {
            status = e;
            msg = e === 'short' ? '⚠️ COURT-CIRCUIT !' : 'Circuit Ouvert';
        }

        // Check Challenge Success
        if (mode === 'challenge' && challenge && !showSuccess) {
            if (challenge.type === 'color_code') {
                // Player must place the specific resistor
                if (Object.values(slots).includes(`resistor_${challenge.targetVal}`)) {
                    triggerSuccess();
                }
            }
            if (challenge.type === 'target_current') {
                // Tolerance 10%
                if (status === 'ok' && Math.abs(current - challenge.targetI) < 0.01) {
                    triggerSuccess();
                }
            }
        }

        return { status, msg, current };
    }, [topology, slots, switchState, mode, challenge]);

    const triggerSuccess = () => {
        setScore(s => s + 100);
        setShowSuccess(true);
    };

    const nextChallenge = () => {
        setShowSuccess(false);
        const types = ['color_code', 'target_current'];
        const type = types[Math.floor(Math.random() * types.length)];

        if (type === 'color_code') {
            const r = resistorsList[Math.floor(Math.random() * resistorsList.length)];
            setChallenge({
                type,
                header: "Défi : Code Couleur",
                text: `Insère la résistance : ${getResistorColorName(r.val)}`,
                hint: `Cherche les bandes : ${r.colors.join(' ')}`,
                targetVal: r.val
            });
        } else {
            // Target Current
            // Pick a random setup solvable with one resistor swap
            // Keep it simple: Series, target 0.04A (approx 100 ohm) or 0.02A (220 ohm)
            const targets = [
                { i: 0.04, val: 100, txt: "~0.04 A" },
                { i: 0.02, val: 220, txt: "~0.02 A" },
                { i: 0.45, val: 0, txt: "Maximize (0.45 A)" } // No resistor
            ];
            const t = targets[Math.floor(Math.random() * targets.length)];
            setSwitchState(true);
            setTopology('series');
            setSlots({ 0: 'lamp', 1: 'wire', 2: 'wire' }); // Reset
            setChallenge({
                type,
                header: "Défi : Ingénieur",
                text: `Règle l'intensité du circuit à ${t.txt}`,
                hint: "Utilise la loi d'Ohm : I = U / R",
                targetI: t.i
            });
        }
    };

    const startChallengeMode = () => {
        setMode('challenge');
        setScore(0);
        nextChallenge();
    };

    const setSlotComponent = (id, type) => {
        setSlots(prev => ({ ...prev, [id]: type }));
        setShowMenu(null);
    };

    return (
        <group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Labo Élec & Résistances" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-yellow-500/30 text-white" usePortal={false}>
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <button onClick={() => { setMode('explore'); setChallenge(null); }} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Labo Libre</button>
                            <button onClick={startChallengeMode} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Mode Défi 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {/* Challenge Box */}
                    {mode === 'challenge' && challenge && (
                        <div className="mb-4 bg-purple-900/50 p-3 rounded-xl border border-purple-500 animate-in fade-in slide-in-from-top-4">
                            <div className="text-xs text-purple-300 uppercase font-bold">{challenge.header}</div>
                            <div className="font-bold text-lg">{challenge.text}</div>
                            <div className="text-xs text-gray-400 mt-1 italic">Indices : {challenge.hint}</div>
                        </div>
                    )}

                    {/* Controls */}
                    <div className="space-y-2 mb-4">
                        <div className="flex gap-2 p-1 bg-gray-900 rounded-lg">
                            <button onClick={() => setTopology('series')} className={`flex-1 py-1 text-xs rounded ${topology === 'series' ? 'bg-blue-600' : 'bg-gray-800'}`}>SÉRIE</button>
                            <button onClick={() => setTopology('parallel')} className={`flex-1 py-1 text-xs rounded ${topology === 'parallel' ? 'bg-blue-600' : 'bg-gray-800'}`}>DÉRIVATION</button>
                        </div>

                        <button onClick={() => setSwitchState(!switchState)}
                            className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg ${switchState ? 'bg-green-600' : 'bg-red-600'}`}>
                            {switchState ? 'ON (Fermé)' : 'OFF (Ouvert)'}
                        </button>
                    </div>

                    {/* Status Feedback */}
                    <div className="grid grid-cols-2 gap-2 bg-gray-800 p-3 rounded-xl border border-gray-600">
                        <div>
                            <div className="text-xs text-gray-400">État</div>
                            <div className={`font-bold ${analysis.status === 'short' ? 'text-red-500 animate-pulse' : 'text-green-400'}`}>
                                {analysis.msg}
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-400">Intensité</div>
                            <div className="font-mono text-xl text-cyan-300">{(analysis.current ?? 0).toFixed(3)} A</div>
                        </div>
                    </div>

                    {/* Context Menu for Component Selection */}
                    {showMenu !== null && (
                        <div className="absolute top-10 left-2 right-2 bg-gray-900 border border-white/20 p-3 rounded-xl shadow-2xl z-50 flex flex-col gap-3">
                            <div className="text-xs text-gray-400 text-center uppercase font-bold">Composants de base</div>
                            <div className="grid grid-cols-4 gap-2">
                                {standardComponents.map(c => (
                                    <button key={c.id} onClick={() => setSlotComponent(showMenu, c.id)} className="flex flex-col items-center bg-gray-800 p-2 rounded hover:bg-white/10">
                                        <div className="text-xl">{c.icon}</div>
                                        <div className="text-[9px]">{c.name}</div>
                                    </button>
                                ))}
                            </div>

                            <div className="text-xs text-gray-400 text-center uppercase font-bold border-t border-white/10 pt-2">Résistances (Code Couleur)</div>
                            <div className="grid grid-cols-4 gap-2">
                                {resistorsList.map(r => (
                                    <button key={r.val} onClick={() => setSlotComponent(showMenu, `resistor_${r.val}`)} className="flex flex-col items-center bg-gray-800 p-2 rounded hover:bg-white/10">
                                        {/* Mini representation of resistor color bands */}
                                        <div className="flex gap-[1px] mb-1 h-3 w-8 bg-[#D2B48C] items-center justify-center border border-black/30">
                                            {r.colors.map((c, i) => <div key={i} className="w-1 h-full" style={{ backgroundColor: colorEmojiToHex(c) }}></div>)}
                                        </div>
                                        <div className="text-[9px] font-mono">{r.val}Ω</div>
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setShowMenu(null)} className="w-full text-xs text-red-400 mt-1">Fermer</button>
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>


            <SuccessOverlay show={showSuccess} message="C'est exact ! Excellent travail d'ingénieur !" points={100} onNext={nextChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* SCÈNE 3D DYNAMIQUE */}
            <group position={[0, 0, 0]}>
                {/* Générateur */}
                <group position={[-3, 0, 0]}>
                    <Box args={[1, 1.5, 1]} material-color="#111" />
                    <Box args={[0.9, 1.4, 0.9]} material-color="#333" />
                    <Text position={[0, 0, 0.6]} fontSize={0.5} color="#EF4444">+</Text>
                    <Text position={[0, 0, -0.6]} rotation={[0, Math.PI, 0]} fontSize={0.5} color="#3B82F6">-</Text>
                </group>

                {topology === 'series' && (
                    <group>
                        <CircuitSegment p1={[-2.5, 0.5, 0]} p2={[-1.5, 0.5, 0]} active={analysis.status === 'ok'} />
                        <Slot3D id={0} pos={[-1, 0.5, 0]} type={slots[0]} active={analysis.status === 'ok'} onClick={() => setShowMenu(0)} error={analysis.status === 'short'} />
                        <CircuitSegment p1={[-0.5, 0.5, 0]} p2={[0.5, 0.5, 0]} active={analysis.status === 'ok'} />
                        <Slot3D id={1} pos={[1, 0.5, 0]} type={slots[1]} active={analysis.status === 'ok'} onClick={() => setShowMenu(1)} error={analysis.status === 'short'} />
                        <CircuitSegment p1={[1.5, 0.5, 0]} p2={[2.5, 0.5, 0]} active={analysis.status === 'ok'} />
                        <Slot3D id={2} pos={[3, 0.5, 0]} type={slots[2]} active={analysis.status === 'ok'} onClick={() => setShowMenu(2)} error={analysis.status === 'short'} />

                        <group position={[0, -1, 0]}>
                            <CircuitSegment p1={[3, 1, 0]} p2={[3, 0.5, 0]} vertical active={analysis.status === 'ok'} />
                            <CircuitSegment p1={[3, 0, 0]} p2={[0, 0, 0]} active={analysis.status === 'ok'} />
                            <Switch3D position={[0, 0, 0]} closed={switchState} />
                            <CircuitSegment p1={[-0.5, 0, 0]} p2={[-3, 0, 0]} active={analysis.status === 'ok'} />
                            <CircuitSegment p1={[-3, 0, 0]} p2={[-3, 0.5, 0]} vertical active={analysis.status === 'ok'} />
                        </group>
                    </group>
                )}

                {topology === 'parallel' && (
                    <group>
                        <CircuitSegment p1={[-2.5, 1, 0]} p2={[2, 1, 0]} active={analysis.status === 'ok'} />
                        <CircuitSegment p1={[-1, 1, 0]} p2={[-1, 0.5, 0]} vertical active={analysis.status === 'ok'} />
                        <Slot3D id={0} pos={[-1, 0, 0]} type={slots[0]} active={analysis.status === 'ok'} onClick={() => setShowMenu(0)} error={analysis.status === 'short'} />
                        <Slot3D id={1} pos={[-1, -1, 0]} type={slots[1]} active={analysis.status === 'ok'} onClick={() => setShowMenu(1)} error={analysis.status === 'short'} />
                        <CircuitSegment p1={[-1, -1.5, 0]} p2={[-1, -2, 0]} vertical active={analysis.status === 'ok'} />

                        <CircuitSegment p1={[2, 1, 0]} p2={[2, 0.5, 0]} vertical active={analysis.status === 'ok'} />
                        <Slot3D id={2} pos={[2, 0, 0]} type={slots[2]} active={analysis.status === 'ok'} onClick={() => setShowMenu(2)} error={analysis.status === 'short'} />
                        <Slot3D id={3} pos={[2, -1, 0]} type={slots[3]} active={analysis.status === 'ok'} onClick={() => setShowMenu(3)} error={analysis.status === 'short'} />
                        <CircuitSegment p1={[2, -1.5, 0]} p2={[2, -2, 0]} vertical active={analysis.status === 'ok'} />

                        <CircuitSegment p1={[2, -2, 0]} p2={[-3, -2, 0]} active={analysis.status === 'ok'} />
                        <Switch3D position={[-2, -2, 0]} closed={switchState} />
                        <CircuitSegment p1={[-3, -2, 0]} p2={[-3, -0.75, 0]} vertical active={analysis.status === 'ok'} />
                    </group>
                )}
            </group>
        </group>
    );
}

// --- HELPER FUNCTIONS ---
function colorEmojiToHex(emoji) {
    const map = { '🟤': '#8B4513', '⚫': '#000000', '🔴': '#FF0000', '🟠': '#FFA500', '🟡': '#FFFF00', '🟢': '#008000', '🔵': '#0000FF', '🟣': '#800080', '⚪': '#FFFFFF' };
    return map[emoji] || '#888';
}

function getResistorColorName(val) {
    if (val === 10) return "Marron-Noir-Noir";
    if (val === 100) return "Marron-Noir-Marron";
    if (val === 220) return "Rouge-Rouge-Marron";
    if (val === 1000) return "Marron-Noir-Rouge";
    return "";
}

// --- 3D COMPONENTS ---
function Slot3D({ id, pos, type, active, onClick, error }) {
    const isResistor = type && type.startsWith('resistor_');
    const color = error ? '#EF4444' : (active ? '#FCD34D' : '#374151');

    return (
        <group position={pos} onClick={(e) => { e.stopPropagation(); onClick(); }}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}>

            {/* Socket Base */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
                <meshStandardMaterial color={error ? '#EF4444' : '#1F2937'} />
            </mesh>
            <mesh position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.35, 0.4, 32]} />
                <meshBasicMaterial color={active ? '#FBBF24' : '#4B5563'} />
            </mesh>

            {/* Component Visualization */}
            <group position={[0, 0, 0]}>
                {!type || type === 'open' ? (
                    <Text fontSize={0.3} color="#EF4444" position={[0, 0.3, 0]}>?</Text>
                ) : type === 'wire' ? (
                    <Box args={[0.6, 0.05, 0.05]} position={[0, 0.1, 0]} material-color="#B87333" />
                ) : type === 'lamp' ? (
                    <Lamp3D active={active} intensity={active ? 2 : 0} />
                ) : type === 'motor' ? (
                    <Motor3D active={active} speed={10} />
                ) : isResistor ? (
                    <group position={[0, 0.2, 0]}>
                        <Resistor3D value={parseInt(type.split('_')[1])} />
                    </group>
                ) : null}
            </group>

            {/* Label */}
            <Text position={[0, -0.6, 0]} fontSize={0.12} color="gray">Slot {id + 1}</Text>
        </group>
    );
}

function Resistor3D({ value }) {
    // Decode value to colors (Simplified 3 bands logic for 3D)
    // 10 -> Brown Black Black
    // 100 -> Brown Black Brown
    // 220 -> Red Red Brown
    // 1000 -> Brown Black Red
    let colors = [];
    if (value === 10) colors = ['#8B4513', 'black', 'black'];
    else if (value === 100) colors = ['#8B4513', 'black', '#8B4513'];
    else if (value === 220) colors = ['red', 'red', '#8B4513'];
    else if (value === 1000) colors = ['#8B4513', 'black', 'red'];
    else colors = ['gray', 'gray', 'gray'];

    return (
        <group rotation={[0, 0, Math.PI / 2]}>
            {/* Body */}
            <mesh>
                <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
                <meshStandardMaterial color="#D2B48C" /> {/* Beige */}
            </mesh>
            {/* Bands */}
            {colors.map((c, i) => (
                <mesh key={i} position={[0, 0.15 - (i * 0.15), 0]}>
                    <cylinderGeometry args={[0.105, 0.105, 0.05, 16]} />
                    <meshStandardMaterial color={c} />
                </mesh>
            ))}
            {/* Leads */}
            <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.2]} />
                <meshStandardMaterial color="silver" />
            </mesh>
            <mesh position={[0, -0.4, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.2]} />
                <meshStandardMaterial color="silver" />
            </mesh>
        </group>
    );
}

function CircuitSegment({ p1, p2, vertical, active }) {
    const mid = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, (p1[2] + p2[2]) / 2];
    const len = Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
    const rot = vertical ? [0, 0, 0] : [0, 0, Math.PI / 2];
    return (
        <mesh position={mid} rotation={rot}>
            <cylinderGeometry args={[0.03, 0.03, len]} />
            <meshStandardMaterial color={active ? '#F59E0B' : '#4B5563'} />
        </mesh>
    );
}

function Switch3D({ position, closed }) {
    return (
        <group position={position}>
            <Box args={[0.6, 0.1, 0.4]} material-color="#1F2937" />
            <group position={[-0.25, 0.1, 0]} rotation={[0, 0, closed ? 0 : 0.6]}>
                <Box args={[0.5, 0.05, 0.2]} position={[0.25, 0, 0]} material-color={closed ? "#10B981" : "#EF4444"} />
            </group>
        </group>
    );
}

function Lamp3D({ active, intensity }) {
    return (
        <group position={[0, 1, 0]}>
            <Sphere args={[0.4]} material-color={active ? "yellow" : "gray"} material-emissive={active ? "yellow" : "black"} material-emissiveIntensity={intensity} />
            <Cylinder args={[0.2, 0.2, 0.5]} position={[0, -0.4, 0]} material-color="silver" />
            {active && <pointLight distance={3} intensity={intensity} color="orange" />}
        </group>
    );
}

function Motor3D({ active, speed }) {
    const ref = useRef();
    useFrame(() => {
        if (active && ref.current) ref.current.rotation.z += speed * 0.1;
    });
    return (
        <group position={[0, 1, 0]}>
            <Cylinder args={[0.4, 0.4, 0.8]} rotation={[Math.PI / 2, 0, 0]} material-color="gray" />
            <group ref={ref} position={[0, 0, 0.5]}>
                <Box args={[1, 0.1, 0.1]} material-color="blue" />
                <Box args={[0.1, 1, 0.1]} material-color="blue" />
            </group>
        </group>
    );
}

function Buzzer3D({ active }) {
    const [scale, setScale] = useState(1);
    useFrame(({ clock }) => {
        if (active) {
            setScale(1 + Math.sin(clock.elapsedTime * 50) * 0.1);
        } else {
            setScale(1);
        }
    });
    return (
        <group position={[0, 1, 0]} scale={scale}>
            <Cylinder args={[0.4, 0.5, 0.3]} material-color="black" />
            {active && (
                <Text position={[0, 0.5, 0]} fontSize={0.3} color="red">♪♫♪</Text>
            )}
        </group>
    );
}
