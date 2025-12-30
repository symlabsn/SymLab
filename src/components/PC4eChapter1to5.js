'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, useGLTF, Float, Sphere, Box, Cylinder, Torus, Line } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, GradeBadge, XPBar, PhaseSelector, MissionObjective } from './GamificationUtils';

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
    const [phase, setPhase] = useState('explore'); // 'explore' | 'challenge'
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const groupRef = useRef();

    const scenarios = {
        chimie: {
            id: 'mission-volcan',
            title: '🌋 L\'Éruption Chimique',
            desc: 'Découvrez la réaction Acide-Base.',
            objectives: ['Observer les réactifs', 'Formuler une hypothèse', 'Réaliser le mélange', 'Conclure sur le gaz'],
            steps: [
                { name: 'Observer', text: 'On a du vinaigre (Acide) et du bicarbonate (Base).', color: '#3B82F6', icon: '🔍' },
                { name: 'Hypothèse', text: 'Je pense que le mélange va produire une mousse effervescente !', color: '#F59E0B', icon: '💡' },
                { name: 'Expérience', text: 'Mélangeons les poudres avec le liquide...', color: '#10B981', action: 'Lancer Réaction', icon: '🧪' },
                { name: 'Conclusion', text: 'Une réaction chimique a eu lieu, créant du dioxyde de carbone (CO₂).', color: '#8B5CF6', icon: '✅' }
            ],
            color: '#ef4444'
        },
        plante: {
            id: 'mission-vie',
            title: '🌿 Le Secret de la Croissance',
            desc: 'De quoi la plante a-t-elle besoin ?',
            objectives: ['Observer la plante saine', 'Hypothèse sur la lumière', 'Priver de lumière', 'Conclure sur la photosynthèse'],
            steps: [
                { name: 'Observer', text: 'La plante est verte et en pleine santé.', color: '#22C55E', icon: '🔍' },
                { name: 'Hypothèse', text: 'Sans lumière, la plante ne pourra pas se nourrir.', color: '#F59E0B', icon: '💡' },
                { name: 'Expérience', text: 'Plaçons la plante dans une boîte noire...', color: '#10B981', action: 'Mettre sous boîte', icon: '📦' },
                { name: 'Conclusion', text: 'La lumière est indispensable à la survie du végétal.', color: '#8B5CF6', icon: '✅' }
            ],
            color: '#22c55e'
        },
        flotte: {
            id: 'mission-mer',
            title: '⚓ Le Mystère de Flottaison',
            desc: 'Pourquoi certains objets flottent-ils ?',
            objectives: ['Observer l\'œuf qui coule', 'Hypothèse sur le sel', 'Ajouter du sel', 'Conclure sur la densité'],
            steps: [
                { name: 'Observer', text: 'L\'œuf coule directement au fond de l\'eau douce.', color: '#3B82F6', icon: '🔍' },
                { name: 'Hypothèse', text: 'L\'ajout de sel va augmenter la poussée de l\'eau.', color: '#F59E0B', icon: '💡' },
                { name: 'Expérience', text: 'Versons le sel dans le bécher...', color: '#10B981', action: 'Saler l\'eau', icon: '🧂' },
                { name: 'Conclusion', text: 'L\'eau salée est plus dense et fait flotter l\'œuf.', color: '#8B5CF6', icon: '✅' }
            ],
            color: '#3b82f6'
        }
    };

    const currentScenario = scenarios[scenario];

    const handleNextStep = () => {
        if (step < 3) {
            setStep(s => s + 1);
            if (step === 1) setExperimentDone(true);
            setObservationLog(prev => [...prev, currentScenario.steps[step].text]);
        }
    };

    const challenges = [
        { q: "Quelle étape consiste à proposer une explication ?", options: ["Analyse", "Hypothèse", "Expérience"], ans: 1 },
        { q: "L'observation se fait généralement avec...", options: ["Les yeux", "Le hasard", "La conclusion"], ans: 0 },
        { q: "Une expérience sert à vérifier...", options: ["Le titre", "La météo", "L'hypothèse"], ans: 2 },
        { q: "La conclusion vient...", options: ["Au début", "Après l'analyse", "Avant l'hypothèse"], ans: 1 }
    ];

    const startChallenge = () => {
        setPhase('challenge');
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
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Réessaie, ce n'est pas tout à fait ça !");
        }
    };

    const reset = () => {
        setStep(0);
        setExperimentDone(false);
        setObservationLog([]);
    };

    return (
        <group ref={groupRef}>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Mission: Démarche Scientifique" showCloseButton={false} defaultPosition="bottom-center" className="w-[420px] border-blue-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'challenge') startChallenge(); }} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase leading-tight">Expert Scientifique</span>
                            <span className="text-lg font-black tracking-tight">{currentScenario.title}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'explore' ? (
                        <>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => { setScenario(key); reset(); }}
                                        className={`py-2 rounded-xl text-[10px] font-black transition-all border-2 ${scenario === key ? 'bg-blue-600 border-white shadow-lg' : 'bg-gray-800 border-transparent hover:bg-gray-700'}`}>
                                        {key.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <MissionObjective objective={currentScenario.objectives[step]} icon={currentScenario.steps[step].icon} />

                            <div className="mt-4 bg-black/40 p-4 rounded-xl border border-white/5 min-h-[100px] flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute top-2 right-2 text-[10px] font-mono text-gray-600">STEP {step + 1}/4</div>
                                <p className="text-base font-medium leading-relaxed" style={{ color: currentScenario.steps[step].color }}>
                                    {currentScenario.steps[step].text}
                                </p>
                            </div>

                            {/* Progress bar with labels */}
                            <div className="mt-4 flex gap-1 h-1.5">
                                {[0, 1, 2, 3].map(i => (
                                    <div key={i} className={`flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-gray-800'}`} />
                                ))}
                            </div>

                            <div className="mt-6">
                                {step < 3 ? (
                                    <button onClick={handleNextStep}
                                        className="w-full py-4 rounded-xl font-black text-lg shadow-xl transform transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                                        style={{ backgroundColor: currentScenario.steps[step].color, color: 'black' }}>
                                        {step === 2 ? `🚀 ${currentScenario.steps[step].action.toUpperCase()}` : 'Étape Suivante ➡️'}
                                    </button>
                                ) : (
                                    <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/50 text-center animate-in zoom-in">
                                        <div className="text-4xl mb-2">🎉</div>
                                        <div className="font-black text-green-400 uppercase tracking-widest text-sm mb-1">Mission Accomplie !</div>
                                        <div className="text-xs text-green-200/70 italic">Vous avez validé la démarche scientifique.</div>
                                        <button onClick={reset} className="mt-3 text-xs text-white/50 hover:text-white underline font-bold">Refaire la mission</button>
                                    </div>
                                )}
                            </div>

                            {/* Logbook snippet */}
                            {observationLog.length > 0 && (
                                <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                                    <div className="text-[10px] text-gray-500 font-bold uppercase mb-2">Journal d'observation</div>
                                    <div className="space-y-1">
                                        {observationLog.map((log, i) => (
                                            <div key={i} className="text-[10px] text-blue-300 flex items-start gap-2">
                                                <span>•</span> <span className="truncate">{log}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="space-y-6">
                            <XPBar current={score} nextLevel={100} />
                            <div className="bg-gray-900/80 p-5 rounded-2xl border border-blue-500/30 shadow-2xl">
                                <h3 className="text-blue-300 font-black mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <span>🧠</span> Évaluation des connaissances
                                </h3>
                                {challenge && (
                                    <div className="space-y-5">
                                        <div className="text-lg font-bold leading-tight">{challenge.q}</div>
                                        <div className="grid gap-3">
                                            {challenge.options.map((opt, idx) => (
                                                <button key={idx} onClick={() => checkAnswer(idx)}
                                                    className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 transition-all text-sm font-medium group">
                                                    <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">➡️</span>
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.3} anchorX="center" color="white" font="/fonts/Inter-Bold.ttf">
                MISSION : {currentScenario.id.toUpperCase()}
            </Text>

            {/* SCÈNE 3D DYNAMIQUE */}
            <group position={[0, -1, 0]}>
                {scenario === 'chimie' && <ChimieScene active={experimentDone && step >= 2} />}
                {scenario === 'plante' && <PlanteScene active={experimentDone && step >= 2} step={step} />}
                {scenario === 'flotte' && <FlotteScene active={experimentDone && step >= 2} />}
            </group>

            <SuccessOverlay show={showSuccess} message="Analyse Correcte !" points={25} onNext={nextQuestion} />
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
    const [precision, setPrecision] = useState(false);
    const [phase, setPhase] = useState('explore');
    const [mission, setMission] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const tools = {
        ruler: { name: 'Règle', unit: 'cm', color: '#F59E0B', error: 0.1, icon: '📏' },
        balance: { name: 'Balance', unit: 'g', color: '#3B82F6', error: 0.5, icon: '⚖️' },
        cylinder: { name: 'Éprouvette', unit: 'mL', color: '#10B981', error: 1, icon: '🧪' },
        chrono: { name: 'Chrono', unit: 's', color: '#8B5CF6', error: 0.01, icon: '⏱️' }
    };

    const objects = {
        block: { name: 'Bloc de Bois', dim: 12.5, mass: 150, vol: 250, color: '#92400E' },
        apple: { name: 'Pomme Rouge', dim: 8.2, mass: 120, vol: 130, color: '#EF4444' },
        key: { name: 'Clé en Fer', dim: 5.5, mass: 25, vol: 3.2, color: '#9CA3AF' },
        water: { name: 'Fiole d\'Eau', dim: 10, mass: 100, vol: 100, color: '#3B82F6' }
    };

    const missions = [
        { id: 'archéo', text: "Trouve un objet de ~150 g", target: 150, tolerance: 5, unit: 'g', icon: '🏺', color: '#fbbf24' },
        { id: 'bricolage', text: "Mesure un objet de ~12.5 cm", target: 12.5, tolerance: 0.5, unit: 'cm', icon: '🔨', color: '#60a5fa' },
        { id: 'chimie', text: "Isole exactement 100 mL", target: 100, tolerance: 2, unit: 'mL', icon: '🧪', color: '#34d399' },
    ];

    const handleMeasure = () => {
        const obj = objects[object];
        let baseVal = 0;
        if (tool === 'ruler') baseVal = obj.dim;
        if (tool === 'balance') baseVal = obj.mass;
        if (tool === 'cylinder') baseVal = obj.vol;
        if (tool === 'chrono') baseVal = 10.5;

        const errorMargin = precision ? tools[tool].error / 2 : tools[tool].error * 2;
        const randomError = (Math.random() - 0.5) * errorMargin;
        const val = parseFloat((baseVal + randomError).toFixed(precision ? 2 : 1));
        setMeasurement(val);

        if (phase === 'challenge' && mission) {
            if (tools[tool].unit === mission.unit && Math.abs(val - mission.target) <= mission.tolerance) {
                setScore(s => s + 50);
                setShowSuccess(true);
            }
        }
    };

    const nextMission = () => {
        const m = missions[Math.floor(Math.random() * missions.length)];
        setMission(m);
        setShowSuccess(false);
        setMeasurement(null);
    };

    const startChallenge = () => {
        setPhase('challenge');
        nextMission();
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="📏 Expert en Mesures" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-cyan-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={(p) => p === 'challenge' ? startChallenge() : setPhase('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest leading-tight">Contrôle Labo</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Exploration Libre' : 'Mission : ' + mission?.id.toUpperCase()}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'explore' ? (
                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] text-gray-500 font-bold uppercase mb-2 block">1. Objet d'étude</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(objects).map(([k, o]) => (
                                        <button key={k} onClick={() => { setObject(k); setMeasurement(null); }}
                                            className={`px-3 py-2 rounded-xl text-xs font-black transition-all border-2 ${object === k ? 'bg-cyan-600 border-white shadow-lg' : 'bg-gray-800 border-transparent hover:bg-gray-700'}`}>
                                            {o.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-500 font-bold uppercase mb-2 block">2. Instrument</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {Object.entries(tools).map(([k, t]) => (
                                        <button key={k} onClick={() => { setTool(k); setMeasurement(null); }}
                                            className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border-2 ${tool === k ? 'bg-white text-black border-cyan-400 scale-105 shadow-xl' : 'bg-gray-800 text-gray-400 border-transparent hover:bg-gray-750'}`}>
                                            <span className="text-xl">{t.icon}</span>
                                            <span className="text-[8px] uppercase font-black">{t.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {mission && <MissionObjective objective={mission.text} icon={mission.icon} />}
                        </div>
                    )}

                    <div className="mt-4 p-4 bg-black/40 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" checked={precision} onChange={() => setPrecision(!precision)}
                                    className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-cyan-500 focus:ring-cyan-500" />
                                <span className="text-xs font-bold text-gray-300">Mode Haute Précision</span>
                            </div>
                            <span className="text-[10px] font-mono text-gray-500">± {precision ? tools[tool].error / 2 : tools[tool].error * 2} {tools[tool].unit}</span>
                        </div>

                        <button onClick={handleMeasure}
                            className="w-full py-4 rounded-xl font-black text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_20px_rgba(8,145,178,0.3)] transform transition-active group">
                            MESURER L'OBJET
                            <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">➡️</span>
                        </button>
                    </div>

                    {measurement && (
                        <div className="mt-4 p-5 bg-cyan-950/30 rounded-2xl border border-cyan-500/40 text-center animate-in zoom-in slide-in-from-bottom-2 duration-300">
                            <div className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em] mb-1">Affichage Digital</div>
                            <div className="text-5xl font-mono font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                {measurement} <span className="text-2xl text-cyan-400">{tools[tool].unit}</span>
                            </div>
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />

            <Text position={[0, 4, 0]} fontSize={0.4} color="#22D3EE" font="/fonts/Inter-Bold.ttf" outlineWidth={0.02} outlineColor="black">
                LABO DE MÉTROLOGIE
            </Text>

            {/* Visualisation 3D */}
            <group position={[0, -1, 0]}>
                {/* L'Objet */}
                <group position={[0, 0.5, 0]}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        {object === 'block' && <Box args={[2, 2, 2]}><meshStandardMaterial color={objects.block.color} roughness={0.7} /></Box>}
                        {object === 'apple' && <Sphere args={[0.8, 32, 32]}><meshStandardMaterial color={objects.apple.color} roughness={0.3} /></Sphere>}
                        {object === 'key' && <Box args={[0.8, 0.2, 1.8]}><meshStandardMaterial color={objects.key.color} metalness={0.8} roughness={0.2} /></Box>}
                        {object === 'water' && (
                            <group>
                                <Cylinder args={[0.7, 0.7, 2, 32]} position={[0, 0, 0]}>
                                    <meshPhysicalMaterial color="#3B82F6" transmission={0.5} opacity={0.6} transparent roughness={0} />
                                </Cylinder>
                                <Cylinder args={[0.75, 0.75, 2.1, 32, 1, true]}>
                                    <meshPhysicalMaterial color="white" transmission={0.9} opacity={0.3} transparent thickness={0.2} />
                                </Cylinder>
                            </group>
                        )}
                    </Float>
                </group>

                {/* Instrument */}
                <group position={[-3, 0.5, 0]}>
                    {tool === 'ruler' && (
                        <group rotation={[0, 0, Math.PI / 2]} position={[2, 0, 1.2]}>
                            <Box args={[5, 0.5, 0.1]}><meshStandardMaterial color="#F59E0B" /></Box>
                            {Array.from({ length: 11 }).map((_, i) => (
                                <group key={i} position={[-2.5 + i * 0.5, 0.25, 0.06]}>
                                    <Box args={[0.02, 0.1, 0.01]} material-color="black" />
                                    {i % 2 === 0 && <Text position={[0, 0.15, 0]} fontSize={0.1} color="black">{i * 5}</Text>}
                                </group>
                            ))}
                        </group>
                    )}

                    {tool === 'balance' && (
                        <group position={[3, -1.2, 0]}>
                            <Box args={[3.5, 0.4, 3]}><meshStandardMaterial color="#1f2937" /></Box>
                            <Box args={[3.2, 0.1, 2.8]} position={[0, 0.25, 0]}><meshStandardMaterial color="#9ca3af" metalness={0.8} /></Box>
                            <Text position={[0, 0.1, 1.2]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.4} color="#00ff00" font="/fonts/Digital.ttf">
                                {measurement && tool === 'balance' ? measurement : '0.00'}
                            </Text>
                        </group>
                    )}

                    {tool === 'cylinder' && (
                        <group position={[3, 0.5, 0]}>
                            <Cylinder args={[0.8, 0.8, 3, 32, 1, true]}><meshPhysicalMaterial color="white" transmission={0.9} opacity={0.2} transparent /></Cylinder>
                            <Cylinder args={[0.78, 0.78, 1.5, 32]} position={[0, -0.75, 0]}><meshStandardMaterial color="#3b82f6" opacity={0.6} transparent /></Cylinder>
                        </group>
                    )}
                </group>
            </group>

            <SuccessOverlay show={showSuccess} message="Mesure Précise !" points={50} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
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
    const [mode, setMode] = useState('explore');
    const [mysteryMaterial, setMysteryMaterial] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [history, setHistory] = useState([]);

    const liquids = {
        water: { name: 'Eau Distillée', density: 1.0, color: '#3B82F6', icon: '💧' },
        oil: { name: 'Huile Végétale', density: 0.9, color: '#FBBF24', icon: '🌻' },
        honey: { name: 'Miel Liquide', density: 1.4, color: '#D97706', icon: '🍯' },
        mercury: { name: 'Mercure Pur', density: 13.6, color: '#9CA3AF', icon: '🧪' }
    };

    const objects = {
        wood: { name: 'Bois Chêne', density: 0.6, color: '#92400E', icon: '🪵' },
        ice: { name: 'Glace Vive', density: 0.92, color: '#A5F3FC', icon: '🧊' },
        plastic: { name: 'PVC Rouge', density: 1.1, color: '#EF4444', icon: '🔴' },
        iron: { name: 'Acier Brut', density: 7.8, color: '#4B5563', icon: '🔩' },
        gold: { name: 'Or Pur', density: 19.3, color: '#FFD700', icon: '👑' }
    };

    const startDetective = () => {
        const mats = Object.keys(objects);
        const secret = mats[Math.floor(Math.random() * mats.length)];
        setMysteryMaterial(secret);
        setObject('mystery');
        setMode('challenge');
        setShowSuccess(false);
    };

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
            alert("Erreur d'analyse ! Cette matière ne correspond pas à la densité observée.");
        }
    };

    const densityRatio = obj.density / liq.density;
    let immersionLevel = densityRatio < 1 ? 1.5 - (densityRatio * 1.0) : -1.5;

    const logMeasurement = () => {
        const last = history[history.length - 1];
        if (last && last.obj === obj.name && last.liq === liq.name) return;
        setHistory(prev => [...prev.slice(-4), {
            obj: obj.name, liq: liq.name, dObj: obj.density, dLiq: liq.density, floats: obj.density < liq.density
        }]);
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Expert en Densité" showCloseButton={false} defaultPosition="bottom-center" className="w-[420px] border-blue-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startDetective() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Laboratoire d'Archimède</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Simulateur de Flottaison' : 'Enquête de Matière 🕵️'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'challenge' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Identifiez la matière cachée en observant comment elle flotte dans différents liquides." icon="🔍" />
                            <div className="grid grid-cols-3 gap-2">
                                {Object.entries(objects).map(([k, o]) => (
                                    <button key={k} onClick={() => guessMaterial(k)}
                                        className="p-3 bg-gray-900 border border-white/5 rounded-xl flex flex-col items-center gap-1 hover:bg-blue-900/40 transition-all">
                                        <span className="text-xl">{o.icon}</span>
                                        <span className="text-[10px] font-black uppercase text-center leading-none">{o.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] text-gray-500 font-bold uppercase mb-2 block tracking-widest">1. Sélection du Liquide</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {Object.entries(liquids).map(([k, l]) => (
                                        <button key={k} onClick={() => setLiquid(k)}
                                            className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border ${liquid === k ? 'bg-blue-600 border-blue-400 shadow-lg scale-105' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                            <span className="text-xl">{l.icon}</span>
                                            <span className="text-[8px] font-black uppercase text-center leading-none">{l.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] text-gray-500 font-bold uppercase mb-2 block tracking-widest">2. Choix de l'Échantillon</label>
                                <div className="grid grid-cols-5 gap-2">
                                    {Object.entries(objects).map(([k, o]) => (
                                        <button key={k} onClick={() => setObject(k)}
                                            className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border ${object === k ? 'bg-white text-black border-white shadow-lg scale-105' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                            <span className="text-xl">{o.icon}</span>
                                            <span className="text-[8px] font-black uppercase text-center leading-none">{o.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-6 flex gap-2">
                        <button onClick={() => setShowForces(!showForces)} className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${showForces ? 'bg-purple-600 shadow-lg shadow-purple-900/40' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
                            {showForces ? '👁️ Forces Visibles' : 'Afficher les Forces'}
                        </button>
                        <button onClick={logMeasurement} className="flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all">
                            📓 Noter Résultat
                        </button>
                    </div>

                    <div className="mt-4 bg-black/40 p-4 rounded-xl border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest mb-2">
                            <span className="text-gray-500">Ratio de Densité (ρo/ρl)</span>
                            <span className={densityRatio < 1 ? 'text-emerald-400' : 'text-rose-400'}>{densityRatio.toFixed(2)}</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden mb-4">
                            <div className={`h-full transition-all duration-1000 ${densityRatio < 1 ? 'bg-emerald-500' : 'bg-rose-500'}`} style={{ width: `${Math.min(100, densityRatio * 50)}%` }} />
                        </div>
                        <div className={`py-3 rounded-2xl font-black text-center text-xs uppercase tracking-[0.2em] shadow-inner ${densityRatio < 1 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/20 text-rose-400 border border-rose-500/20'}`}>
                            {densityRatio < 1 ? 'L\'objet Flotte 🫧' : 'L\'objet Coule ⚓'}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message={`Eurêka ! La matière était bien : ${objects[mysteryMaterial]?.name}`} points={100} onNext={startDetective} />
            <ConfettiExplosion active={showSuccess} />

            <group position={[0, -1, 0]}>
                {/* Cuve */}
                <Box args={[4.2, 4.2, 3.2]}><meshPhysicalMaterial color="#30507a" transmission={0.9} thickness={0.2} roughness={0} transparent opacity={0.2} side={THREE.BackSide} /></Box>
                <Box args={[4, 4, 3]} position={[0, 0, 0]}><meshPhysicalMaterial color="#88CCFF" transmission={0.7} thickness={0.5} roughness={0.1} transparent opacity={0.3} /></Box>

                {/* Liquide */}
                <Box position={[0, -0.5, 0]} args={[3.9, 2.9, 2.9]}>
                    <meshStandardMaterial color={liq.color} transparent opacity={0.5} emissive={liq.color} emissiveIntensity={0.2} />
                </Box>

                <Float speed={densityRatio < 1 ? 2 : 0} rotationIntensity={0.2} floatIntensity={0.5} position={[0, immersionLevel, 0]}>
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={obj.color} metalness={object === 'iron' || object === 'gold' ? 0.8 : 0} roughness={0.4} />
                    </mesh>

                    {showForces && (
                        <group>
                            {/* Poids (Gravité) */}
                            <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 0, 0), 1.2 + obj.density / 10, 0xef4444, 0.2, 0.1]} />
                            {/* Poussée d'Archimède */}
                            <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 1.2 + (densityRatio < 1 ? obj.density : liq.density) / 10, 0x22c55e, 0.2, 0.1]} />
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
    const [phase, setPhase] = useState('explore');
    const [targetWeight, setTargetWeight] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [useCustomG, setUseCustomG] = useState(false);
    const [customG, setCustomG] = useState(9.8);

    const planets = {
        mercury: { name: 'Mercure', g: 3.7, color: '#9CA3AF', icon: '🪐' },
        venus: { name: 'Vénus', g: 8.87, color: '#FCD34D', icon: '✨' },
        earth: { name: 'Terre', g: 9.81, color: '#3B82F6', icon: '🌍' },
        moon: { name: 'Lune', g: 1.62, color: '#D1D5DB', icon: '🌙' },
        mars: { name: 'Mars', g: 3.71, color: '#EF4444', icon: '🔴' },
        jupiter: { name: 'Jupiter', g: 24.79, color: '#D97706', icon: '🌀' },
        saturn: { name: 'Saturne', g: 10.44, color: '#FDE047', icon: '🪐' },
        void: { name: 'Espace', g: 0.1, color: '#111827', icon: '🌌' }
    };

    const startMission = () => {
        const keys = Object.keys(planets).filter(k => k !== 'void');
        const targetPKey = keys[Math.floor(Math.random() * keys.length)];
        const targetP = planets[targetPKey];
        const randomMass = 50 + Math.floor(Math.random() * 50);
        const w = Math.round(randomMass * targetP.g);

        setMass(randomMass);
        setTargetWeight({ val: w, planetKey: targetPKey });
        setPhase('challenge');
        setPlanet('earth');
        setUseCustomG(false);
        setShowSuccess(false);
    };

    useEffect(() => {
        if (phase === 'challenge' && targetWeight && planet === targetWeight.planetKey) {
            setScore(s => s + 50);
            setShowSuccess(true);
        }
    }, [planet, phase, targetWeight]);

    const g = useCustomG ? customG : planets[planet].g;
    const weight = mass * g;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🚀 Mission Gravité" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-indigo-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={(p) => p === 'challenge' ? startMission() : setPhase('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest leading-tight">Astrophysique Interactive</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Simulateur de Poids' : 'Défi Interstellaire 🌌'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'challenge' && targetWeight && (
                        <div className="mb-4">
                            <MissionObjective objective={`Sur quel astre un objet de ${mass} kg pèse-t-il environ ${targetWeight.val} N ?`} icon="📡" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="grid grid-cols-4 gap-2">
                            {Object.entries(planets).map(([k, p]) => (
                                <button key={k} onClick={() => setPlanet(k)}
                                    className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border-2 ${planet === k && !useCustomG ? 'border-indigo-500 bg-indigo-500/20 scale-105' : 'border-gray-800 bg-gray-900/50 hover:bg-gray-800'}`}>
                                    <span className="text-xl">{p.icon}</span>
                                    <span className="text-[8px] font-black uppercase text-center">{p.name}</span>
                                </button>
                            ))}
                        </div>

                        <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>MASSE (Constant)</span>
                                        <span className="text-white">{mass} KG</span>
                                    </div>
                                    <input type="range" min="10" max="200" value={mass} disabled={phase === 'challenge'} onChange={(e) => setMass(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 disabled:opacity-50" />
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div className="flex flex-col items-center">
                                    <button onClick={() => setUseCustomG(!useCustomG)} disabled={phase === 'challenge'}
                                        className={`p-2 rounded-lg border flex flex-col items-center gap-1 transition-all ${useCustomG ? 'border-purple-500 bg-purple-500/20' : 'border-gray-700 opacity-50'}`}>
                                        <span className="text-sm">🛠️</span>
                                        <span className="text-[8px] font-bold uppercase">Manuel g</span>
                                    </button>
                                </div>
                            </div>

                            {useCustomG && (
                                <div className="animate-in slide-in-from-top-2">
                                    <div className="flex justify-between text-[10px] font-bold text-purple-400 mb-2">
                                        <span>ACCÉLÉRATION GRAVITATIONNELLE (G)</span>
                                        <span className="text-white">{customG.toFixed(2)} N/KG</span>
                                    </div>
                                    <input type="range" min="0.1" max="25" step="0.1" value={customG} onChange={(e) => setCustomG(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                                </div>
                            )}

                            <div className="p-3 bg-indigo-950/30 rounded-lg border border-indigo-500/30 text-center relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="text-[10px] text-indigo-400 font-black mb-1">DYNAMOMÈTRE DIGITAL</div>
                                    <div className="text-4xl font-mono font-black text-white">
                                        {weight.toFixed(1)} <span className="text-xl text-indigo-400">N</span>
                                    </div>
                                </div>
                                <div className={`absolute inset-0 bg-indigo-500/5 transition-all ${weight > 1000 ? 'opacity-20 animate-pulse' : 'opacity-0'}`} />
                                <div className="absolute top-0 right-0 p-1">
                                    <div className={`w-2 h-2 rounded-full ${weight > 1000 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 bg-gray-900/50 p-2 rounded-lg">
                            <span>FORMULE : P = m × g</span>
                            <span className="text-indigo-400">G LOCAL : {g.toFixed(2)} N/kg</span>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />

            <SuccessOverlay show={showSuccess} message="Succès ! La gravité correspond exactement aux mesures." points={50} onNext={startMission} />
            <ConfettiExplosion active={showSuccess} />

            <Text position={[0, 4, 0]} fontSize={0.4} color="#818CF8" font="/fonts/Inter-Bold.ttf" outlineWidth={0.02} outlineColor="black">
                STATION DE PESAGE SPATIALE
            </Text>

            <group position={[0, -2, 0]}>
                {/* Surface de la planète */}
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[25, 25]} />
                    <meshStandardMaterial color={planets[planet].color} roughness={0.8} />
                </mesh>
                <gridHelper args={[25, 15, planets[planet].color, '#333']} rotation={[0, 0, 0]} />

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <group position={[0, 2, 0]}>
                        <mesh>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
                        </mesh>
                        <Text position={[0, 0.7, 0]} fontSize={0.25} color="white" font="/fonts/Inter-Bold.ttf">{mass}kg</Text>

                        {/* Vecteur Poids */}
                        <group position={[0, -0.6, 0]}>
                            <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 0, 0), 0.5 + weight / 500, 0xef4444, 0.2, 0.1]} />
                            <Text position={[0.4, -0.5, 0]} fontSize={0.2} color="#ef4444">P</Text>
                        </group>
                    </group>
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

    // Gamification
    const [phase, setPhase] = useState('explore'); // 'explore' | 'challenge'
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
        setPhase('explore');
    };

    // --- DATA COMPONENTS ---
    const standardComponents = [
        { id: 'wire', name: 'Fil', icon: '➖', r: 0.1, type: 'basic' },
        { id: 'lamp', name: 'Lampe', icon: '💡', r: 10, type: 'basic' },
        { id: 'motor', name: 'Moteur', icon: '⚙️', r: 15, type: 'basic' },
        { id: 'open', name: 'Vide', icon: '🚫', r: Infinity, type: 'basic' }
    ];

    const resistorsList = [
        { val: 10, colors: ['🟤', '⚫', '⚫'] },
        { val: 100, colors: ['🟤', '⚫', '🟤'] },
        { val: 220, colors: ['🔴', '🔴', '🟤'] },
        { val: 1000, colors: ['🟤', '⚫', '🔴'] },
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
        if (phase === 'challenge' && challenge && !showSuccess) {
            if (challenge.type === 'color_code') {
                if (Object.values(slots).includes(`resistor_${challenge.targetVal}`)) {
                    triggerSuccess();
                }
            }
            if (challenge.type === 'target_current') {
                if (status === 'ok' && Math.abs(current - challenge.targetI) < 0.01) {
                    triggerSuccess();
                }
            }
        }

        return { status, msg, current };
    }, [topology, slots, switchState, phase, challenge]);

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
            const targets = [
                { i: 0.04, val: 100, txt: "~0.04 A" },
                { i: 0.02, val: 220, txt: "~0.02 A" },
                { i: 0.45, val: 0, txt: "Maximize (0.45 A)" }
            ];
            const t = targets[Math.floor(Math.random() * targets.length)];
            setSwitchState(true);
            setTopology('series');
            setSlots({ 0: 'lamp', 1: 'wire', 2: 'wire' });
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
        setPhase('challenge');
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
                <DraggableHtmlPanel title="⚡ Expert en Électricité" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-yellow-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={phase} onSelect={(p) => p === 'challenge' ? startChallengeMode() : setPhase('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest leading-tight">Génie Électrique</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Laboratoire Ouvert' : 'Maintenance Critique 🛠️'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'challenge' && challenge && (
                        <div className="mb-4">
                            <MissionObjective objective={challenge.text} icon="📟" />
                            <div className="mt-1 text-[10px] text-white/50 italic px-2">Indice : {challenge.hint}</div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="flex gap-2 p-1 bg-gray-900/50 rounded-xl border border-white/5">
                            <button onClick={() => setTopology('series')}
                                className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${topology === 'series' ? 'bg-yellow-600 text-white shadow-lg' : 'text-gray-400 hover:bg-white/5'}`}>
                                CIRCUIT SÉRIE
                            </button>
                            <button onClick={() => setTopology('parallel')}
                                className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${topology === 'parallel' ? 'bg-yellow-600 text-white shadow-lg' : 'text-gray-400 hover:bg-white/5'}`}>
                                CIRCUIT DÉRIVATION
                            </button>
                        </div>

                        <button onClick={() => setSwitchState(!switchState)}
                            className={`w-full py-3 rounded-xl font-black text-lg shadow-xl transform transition-all active:scale-95 ${switchState ? 'bg-green-600 hover:bg-green-500 shadow-green-900/20' : 'bg-red-600 hover:bg-red-500 shadow-red-900/20'}`}>
                            {switchState ? '🔌 CIRCUIT FERMÉ (ON)' : '⭕ CIRCUIT OUVERT (OFF)'}
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-800/80 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[10px] text-gray-400 uppercase font-black mb-1 tracking-tighter">Diagnostic</div>
                                <div className={`font-mono text-sm font-bold ${analysis.status === 'short' ? 'text-red-500 animate-pulse' : 'text-green-400'}`}>
                                    {analysis.msg}
                                </div>
                            </div>
                            <div className="bg-gray-800/80 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[10px] text-gray-400 uppercase font-black mb-1 tracking-tighter">Ampèremètre</div>
                                <div className="font-mono text-lg font-black text-cyan-400">
                                    {(analysis.current ?? 0).toFixed(3)} <span className="text-xs">A</span>
                                </div>
                            </div>
                        </div>

                        {showMenu !== null && (
                            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 bg-gray-900/95 border border-white/10 p-4 rounded-2xl shadow-2xl z-50 backdrop-blur-xl animate-in zoom-in duration-200">
                                <div className="text-[10px] text-gray-500 text-center uppercase font-black mb-3 tracking-widest">Choisir un composant</div>
                                <div className="grid grid-cols-4 gap-2 mb-4">
                                    {standardComponents.map(c => (
                                        <button key={c.id} onClick={() => setSlotComponent(showMenu, c.id)}
                                            className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded-xl border border-transparent hover:border-yellow-500/50 hover:bg-white/10 transition-all">
                                            <span className="text-xl">{c.icon}</span>
                                            <span className="text-[8px] font-bold uppercase">{c.name}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="text-[10px] text-gray-500 text-center uppercase font-black border-t border-white/10 pt-3 mb-3 tracking-widest">Résistances Ohmiques</div>
                                <div className="grid grid-cols-4 gap-2">
                                    {resistorsList.map(r => (
                                        <button key={r.val} onClick={() => setSlotComponent(showMenu, `resistor_${r.val}`)}
                                            className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded-xl border border-transparent hover:border-yellow-500/50 hover:bg-white/10 transition-all">
                                            <div className="flex gap-[1px] h-2 w-6 bg-[#D2B48C] items-center justify-center rounded-sm overflow-hidden">
                                                {r.colors.map((c, i) => <div key={i} className="w-1 h-full" style={{ backgroundColor: colorEmojiToHex(c) }}></div>)}
                                            </div>
                                            <span className="text-[8px] font-mono font-bold">{r.val}Ω</span>
                                        </button>
                                    ))}
                                </div>
                                <button onClick={() => setShowMenu(null)} className="w-full mt-4 py-2 bg-gray-800 rounded-lg text-xs font-bold text-red-400 hover:bg-gray-750">ANNULER</button>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="C'est exact ! Le circuit est parfaitement équilibré." points={100} onNext={nextChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* SCÈNE 3D */}
            <group position={[0, 0, 0]}>
                <group position={[-3.5, 0, 0]}>
                    <Box args={[1, 1.5, 1]} material-color="#111" />
                    <Box args={[0.9, 1.4, 0.9]} material-color="#333" />
                    <Text position={[0, 0.2, 0.6]} fontSize={0.5} color="#EF4444" font="/fonts/Inter-Bold.ttf">+</Text>
                    <Text position={[0, -0.2, 0.6]} fontSize={0.5} color="#3B82F6" font="/fonts/Inter-Bold.ttf">-</Text>
                    <Text position={[0, 1.1, 0]} fontSize={0.2} color="white">GÉNÉRATEUR</Text>
                </group>

                {topology === 'series' && (
                    <group>
                        <CircuitSegment p1={[-3, 0, 0]} p2={[-1.5, 0, 0]} active={analysis.status === 'ok'} />
                        <Slot3D id={0} pos={[-1, 0, 0]} type={slots[0]} active={analysis.status === 'ok'} onClick={() => setShowMenu(0)} error={analysis.status === 'short'} />
                        <CircuitSegment p1={[-0.5, 0, 0]} p2={[0.5, 0, 0]} active={analysis.status === 'ok'} />
                        <Slot3D id={1} pos={[1, 0, 0]} type={slots[1]} active={analysis.status === 'ok'} onClick={() => setShowMenu(1)} error={analysis.status === 'short'} />
                        <CircuitSegment p1={[1.5, 0, 0]} p2={[2.5, 0, 0]} active={analysis.status === 'ok'} />
                        <Slot3D id={2} pos={[3, 0, 0]} type={slots[2]} active={analysis.status === 'ok'} onClick={() => setShowMenu(2)} error={analysis.status === 'short'} />

                        <group position={[0, -1, 0]}>
                            <CircuitSegment p1={[3.5, 1, 0]} p2={[3.5, 0, 0]} vertical active={analysis.status === 'ok'} />
                            <CircuitSegment p1={[3.5, 0, 0]} p2={[0.2, 0, 0]} active={analysis.status === 'ok'} />
                            <Switch3D position={[0, 0, 0]} closed={switchState} />
                            <CircuitSegment p1={[-0.2, 0, 0]} p2={[-3.5, 0, 0]} active={analysis.status === 'ok'} />
                            <CircuitSegment p1={[-3.5, 0, 0]} p2={[-3.5, 0.5, 0]} vertical active={analysis.status === 'ok'} />
                        </group>
                    </group>
                )}

                {topology === 'parallel' && (
                    <group>
                        <CircuitSegment p1={[-3, 0, 0]} p2={[-1, 0, 0]} active={analysis.status === 'ok'} />
                        <CircuitSegment p1={[-1, 1, 0]} p2={[-1, -1, 0]} vertical active={analysis.status === 'ok'} />

                        <Slot3D id={0} pos={[0, 1, 0]} type={slots[0]} active={analysis.status === 'ok'} onClick={() => setShowMenu(0)} error={analysis.status === 'short'} />
                        <Slot3D id={1} pos={[0, -1, 0]} type={slots[1]} active={analysis.status === 'ok'} onClick={() => setShowMenu(1)} error={analysis.status === 'short'} />

                        <CircuitSegment p1={[1, 1, 0]} p2={[1, -1, 0]} vertical active={analysis.status === 'ok'} />
                        <CircuitSegment p1={[1, 1, 0]} p2={[2.5, 1, 0]} active={analysis.status === 'ok'} />
                        <CircuitSegment p1={[1, -1, 0]} p2={[2.5, -1, 0]} active={analysis.status === 'ok'} />

                        <Slot3D id={2} pos={[3, 1, 0]} type={slots[2]} active={analysis.status === 'ok'} onClick={() => setShowMenu(2)} error={analysis.status === 'short'} />
                        <Slot3D id={3} pos={[3, -1, 0]} type={slots[3]} active={analysis.status === 'ok'} onClick={() => setShowMenu(3)} error={analysis.status === 'short'} />

                        <CircuitSegment p1={[3.5, 1, 0]} p2={[3.5, -1, 0]} vertical active={analysis.status === 'ok'} />
                        <group position={[0, -2.5, 0]}>
                            <CircuitSegment p1={[3.5, 1.5, 0]} p2={[3.5, 0, 0]} vertical active={analysis.status === 'ok'} />
                            <CircuitSegment p1={[3.5, 0, 0]} p2={[0, 0, 0]} active={analysis.status === 'ok'} />
                            <Switch3D position={[0, 0, 0]} closed={switchState} />
                            <CircuitSegment p1={[-0.5, 0, 0]} p2={[-3.5, 0, 0]} active={analysis.status === 'ok'} />
                            <CircuitSegment p1={[-3.5, 0, 0]} p2={[-3.5, 2.5, 0]} vertical active={analysis.status === 'ok'} />
                        </group>
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

    // Electrons
    const electrons = useMemo(() => Array.from({ length: Math.ceil(len * 5) }), [len]);

    return (
        <group position={mid} rotation={rot}>
            {/* Wire */}
            <mesh>
                <cylinderGeometry args={[0.03, 0.03, len]} />
                <meshStandardMaterial color={active ? '#F59E0B' : '#4B5563'} />
            </mesh>

            {/* Electron Flow */}
            {active && electrons.map((_, i) => (
                <MovingElectron key={i} offset={i / electrons.length} len={len} speed={2} />
            ))}
        </group>
    );
}

function MovingElectron({ offset, len, speed }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            // Move along Y axis (cylinder's length)
            const t = (state.clock.elapsedTime * speed + offset) % 1;
            ref.current.position.y = (t - 0.5) * len;
        }
    });
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.04]} />
            <meshBasicMaterial color="#FEF3C7" />
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
            {/* Bulb Glass */}
            <mesh>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshPhysicalMaterial
                    color={active ? "#FEF9C3" : "#E5E7EB"}
                    transparent
                    opacity={0.4}
                    transmission={0.9}
                    roughness={0.1}
                    thickness={0.1}
                />
            </mesh>
            {/* Filament */}
            <mesh>
                <sphereGeometry args={[0.15]} />
                <meshBasicMaterial color={active ? "#FBBF24" : "#4B5563"} />
            </mesh>
            {/* Base */}
            <Cylinder args={[0.2, 0.2, 0.5]} position={[0, -0.4, 0]} material-color="silver" />

            {/* Glow */}
            {active && (
                <>
                    <pointLight distance={3} intensity={intensity} color="orange" />
                    <mesh scale={1.2}>
                        <sphereGeometry args={[0.4]} />
                        <meshBasicMaterial color="#FBBF24" transparent opacity={0.2} />
                    </mesh>
                </>
            )}
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
