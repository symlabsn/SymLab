'use client';
import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Sphere, Box, Cylinder, Line, Float } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { PhaseSelector, GradeBadge, MissionObjective, XPBar, SuccessOverlay, ConfettiExplosion } from './GamificationUtils';
import * as THREE from 'three';

// ============================================================
// CHAPITRE 6: LOI D'OHM (PC 3e)
// ============================================================
export function Chap6LoiOhm() {
    const [voltage, setVoltage] = useState(12);
    const [resistance, setResistance] = useState(4);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const scenarios = {
        lampe: { name: 'Lampe', icon: '💡', U: 6, R: 3, desc: '6V Standard' },
        moteur: { name: 'Moteur', icon: '⚙️', U: 12, R: 6, desc: '12V Puissant' },
        chauffage: { name: 'Radiateur', icon: '🔥', U: 24, R: 8, desc: '24V Haute Résistance' },
        led: { name: 'LED', icon: '🔴', U: 3, R: 150, desc: 'Basse Consommation' }
    };

    const challenges = [
        { q: "Quelle est la formule correcte de la Loi d'Ohm ?", options: ["U = R / I", "U = R × I", "I = R × U"], ans: 1, icon: "⚡" },
        { q: "Si la tension U augmente et R reste fixe, le courant I :", options: ["Augmente", "Diminue", "Reste fixe"], ans: 0, icon: "📈" },
        { q: "Un appareil de 10 Ω branché sur 230V consomme environ :", options: ["23 A", "0.23 A", "2300 A"], ans: 0, icon: "🔌" },
        { q: "L'unité de la résistance électrique est :", options: ["Le Volt (V)", "L'Ampère (A)", "L'Ohm (Ω)"], ans: 2, icon: "🧠" }
    ];

    const current = voltage / resistance;

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setVoltage(sc.U);
        setResistance(sc.R);
    };

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
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Court-circuit ! Révise tes formules.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Expert Électrique" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-yellow-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">Maîtrise de la Résistance</span>
                            <span className="text-lg font-black">{mode === 'explore' ? "Laboratoire d'Ohm" : 'Défi Haute Tension 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Équilibrez la tension et la résistance pour contrôler l'intensité." icon="⚡" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => applyScenario(key)}
                                        className="p-2 bg-gray-900 border border-white/5 rounded-xl flex flex-col items-center gap-1 hover:bg-yellow-900/40 transition-all">
                                        <span className="text-xl">{sc.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{sc.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>TENSION (U)</span>
                                        <span className="text-yellow-400">{voltage} VOLTS</span>
                                    </div>
                                    <input type="range" min={1} max={24} value={voltage} onChange={(e) => setVoltage(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>RÉSISTANCE (R)</span>
                                        <span className="text-orange-400">{resistance} OHMS</span>
                                    </div>
                                    <input type="range" min={1} max={100} value={resistance} onChange={(e) => setResistance(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-950/30 rounded-xl border border-yellow-500/30 text-center relative overflow-hidden">
                                <div className="text-[10px] text-yellow-400 font-black uppercase tracking-widest mb-1">Intensité du Courant (I)</div>
                                <div className="text-4xl font-black text-white">{current.toFixed(2)} <span className="text-xl">A</span></div>
                                <div className="mt-2 text-[10px] font-mono text-gray-500">I = {voltage}V / {resistance}Ω</div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-yellow-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-yellow-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-yellow-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Succès Électrique ! La loi d'Ohm est parfaitement appliquée." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Circuit simple */}
            <Box args={[2.5, 0.4, 0.6]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#F97316" metalness={0.8} roughness={0.1} />
            </Box>
            <Text position={[0, 0.6, 0]} fontSize={0.3} color="white" font="/fonts/Inter-Bold.ttf">R = {resistance} Ω</Text>

            {/* Fils et courant */}
            <Line points={[[-4, 0, 0], [-1.25, 0, 0]]} color="#EF4444" lineWidth={8} />
            <Line points={[[1.25, 0, 0], [4, 0, 0]]} color="#3B82F6" lineWidth={8} />

            {/* Electrons (courant) */}
            {[...Array(5)].map((_, i) => (
                <Float key={i} speed={2} floatIntensity={0.5}>
                    <Sphere args={[0.08]} position={[-3 + (i * 1.5 + Date.now() * 0.001 * current) % 6, 0.3, 0]}>
                        <meshStandardMaterial color="#FDE047" emissive="#FDE047" emissiveIntensity={2} />
                    </Sphere>
                </Float>
            ))}

            <Text position={[0, 1.5, 0]} fontSize={0.4} color="white" font="/fonts/Inter-Bold.ttf">I = {current.toFixed(2)} A</Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 7: TRANSFORMATIONS D'ÉNERGIE (PC 3e)
// ============================================================
export function Chap7TransformationsEnergie() {
    const [device, setDevice] = useState('ampoule');
    const [inputEnergy, setInputEnergy] = useState(100);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const devices = {
        ampoule: { name: 'Ampoule', icon: '💡', input: 'Électrique', outputs: ['Lumineuse', 'Thermique'], efficiency: 0.1, desc: 'Conversion basse intensité' },
        moteur: { name: 'Moteur', icon: '⚙️', input: 'Électrique', outputs: ['Mécanique', 'Thermique'], efficiency: 0.85, desc: 'Mouvement fluide' },
        panneau: { name: 'Solaire', icon: '☀️', input: 'Lumineuse', outputs: ['Électrique'], efficiency: 0.2, desc: 'Capture Photonique' },
        voiture: { name: 'Véhicule', icon: '🚗', input: 'Chimique', outputs: ['Mécanique', 'Thermique'], efficiency: 0.25, desc: 'Cycle combustion' }
    };

    const challenges = [
        { q: "L'énergie ne peut être ni créée ni détruite, elle se :", options: ["Dissipe", "Transforme", "Stocke"], ans: 1, icon: "🔄" },
        { q: "Le rendement est défini par le rapport :", options: ["E_utile / E_totale", "E_perdue / E_utile", "E_totale / E_utile"], ans: 0, icon: "📊" },
        { q: "Une ampoule qui chauffe beaucoup a un rendement :", options: ["Excellent", "Moyen", "Faible"], ans: 2, icon: "🌡️" },
        { q: "L'énergie 'perdue' sous forme de chaleur est dite :", options: ["Cinétique", "Mécanique", "Thermique"], ans: 2, icon: "🔥" }
    ];

    const dev = devices[device];
    const usefulEnergy = inputEnergy * dev.efficiency;
    const wastedEnergy = inputEnergy - usefulEnergy;

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
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Énergie dispersée ! Analyse mieux les pertes.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔄 Expert Énergie" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-emerald-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Optimisation des Flux</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Analyseur de Cycles' : 'Défi Rendement 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Visualisez la répartition de l'énergie et son rendement." icon="🔄" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(devices).map(([key, d]) => (
                                    <button key={key} onClick={() => setDevice(key)}
                                        className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border ${device === key ? 'bg-emerald-600 border-emerald-400 shadow-lg' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                        <span className="text-xl">{d.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{d.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-black/40 p-4 rounded-2xl border border-white/10">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] text-gray-500 font-black uppercase tracking-tighter">Entrée : {dev.input}</span>
                                        <span className="text-xs font-black text-white">{inputEnergy} JOUIES</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[8px] text-gray-500 font-black uppercase tracking-tighter">Rendement : {(dev.efficiency * 100).toFixed(0)}%</span>
                                        <span className={`text-xs font-black ${dev.efficiency > 0.5 ? 'text-emerald-400' : 'text-orange-400'}`}>
                                            {dev.efficiency > 0.5 ? 'HAUT RENDEMENT' : 'PERTES ÉLEVÉES'}
                                        </span>
                                    </div>
                                </div>

                                <div className="h-4 bg-gray-900 rounded-full overflow-hidden flex border border-white/5 p-[2px]">
                                    <div className="bg-emerald-500 transition-all duration-700 rounded-l-full"
                                        style={{ width: `${dev.efficiency * 100}%` }} />
                                    <div className="bg-red-500 transition-all duration-700 rounded-r-full"
                                        style={{ width: `${(1 - dev.efficiency) * 100}%` }} />
                                </div>

                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    <div className="p-3 bg-emerald-950/30 rounded-xl border border-emerald-500/20 text-center">
                                        <div className="text-[8px] text-emerald-400 font-black uppercase mb-1">Énergie Utile</div>
                                        <div className="text-xl font-black text-white">{usefulEnergy.toFixed(0)} J</div>
                                        <div className="text-[8px] text-gray-500 mt-1 uppercase">{dev.outputs[0]}</div>
                                    </div>
                                    <div className="p-3 bg-red-950/30 rounded-xl border border-red-500/20 text-center">
                                        <div className="text-[8px] text-red-400 font-black uppercase mb-1">Énergie Perdue</div>
                                        <div className="text-xl font-black text-white">{wastedEnergy.toFixed(0)} J</div>
                                        <div className="text-[8px] text-gray-500 mt-1 uppercase">Thermique</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-emerald-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-emerald-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Succès Énergétique ! Tu maîtrises les flux de transformation." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Représentation centrale */}
            <Float speed={2} rotationIntensity={0.5}>
                <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#FACC15" emissive="#FACC15" emissiveIntensity={device === 'ampoule' ? 2 : 0.5} />
                </Sphere>
            </Float>

            {/* Particules d'énergie utile */}
            {[...Array(8)].map((_, i) => (
                <Float key={`u-${i}`} speed={3 + i} floatIntensity={2}>
                    <Sphere args={[0.08]} position={[Math.cos(i) * 2.5, Math.sin(i) * 2.5, 0]}>
                        <meshStandardMaterial color="#34D399" emissive="#34D399" emissiveIntensity={2} />
                    </Sphere>
                </Float>
            ))}

            {/* Particules de chaleur (perdue) */}
            {[...Array(8 * (1 - dev.efficiency))].map((_, i) => (
                <Float key={`w-${i}`} speed={2} floatIntensity={1}>
                    <Sphere args={[0.05]} position={[Math.cos(i + 2) * 2, Math.sin(i + 2) * 2, 0]}>
                        <meshStandardMaterial color="#F87171" emissive="#F87171" emissiveIntensity={1} />
                    </Sphere>
                </Float>
            ))}

            <Text position={[0, 2, 0]} fontSize={0.4} color="white" font="/fonts/Inter-Bold.ttf">
                {dev.name.toUpperCase()}
            </Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 8: SOLUTIONS AQUEUSES (PC 3e)
// ============================================================
export function Chap8SolutionsAqueuses() {
    const [mass, setMass] = useState(50);
    const [volume, setVolume] = useState(500);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const scenarios = {
        the: { name: 'Thé', icon: '🍵', m: 30, v: 250, desc: 'Ataya Traditionnel' },
        serum: { name: 'Sérum', icon: '💉', m: 9, v: 1000, desc: 'Salé Médical' },
        sirop: { name: 'Sirop', icon: '🧃', m: 500, v: 1000, desc: 'Concentré Sucré' },
        mer: { name: 'Océan', icon: '🌊', m: 35, v: 1000, desc: 'Eau de Mer' }
    };

    const challenges = [
        { q: "Quelle est la formule de la concentration massique C ?", options: ["C = m × V", "C = m / V", "C = V / m"], ans: 1, icon: "🧪" },
        { q: "Si on ajoute de l'eau à une solution, la concentration :", options: ["Augmente", "Diminue", "Reste pareille"], ans: 1, icon: "💧" },
        { q: "Une solution qui ne peut plus dissoudre de soluté est :", options: ["Diluée", "Concentrée", "Saturée"], ans: 2, icon: "💎" },
        { q: "Le constituant majoritaire de la solution est le :", options: ["Solvant", "Soluté", "Saturant"], ans: 0, icon: "🧠" }
    ];

    const concentration = mass / (volume / 1000);

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setMass(sc.m);
        setVolume(sc.v);
    };

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
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Mélange instable ! Vérifie tes calculs de concentration.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Maître des Solutions" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-cyan-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Chimie Moléculaire</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Laboratoire de Mélange' : 'Défi Concentration 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Préparez des solutions précises en ajustant masse et volume." icon="🧪" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(scenarios).map(([key, sc]) => (
                                    <button key={key} onClick={() => applyScenario(key)}
                                        className="p-2 bg-gray-900 border border-white/5 rounded-xl flex flex-col items-center gap-1 hover:bg-cyan-900/40 transition-all">
                                        <span className="text-xl">{sc.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{sc.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>MASSE SOLUTÉ (m)</span>
                                        <span className="text-cyan-400">{mass} GRAMMES</span>
                                    </div>
                                    <input type="range" min={1} max={200} value={mass} onChange={(e) => setMass(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-2">
                                        <span>VOLUME SOLVANT (V)</span>
                                        <span className="text-blue-400">{volume} mL</span>
                                    </div>
                                    <input type="range" min={100} max={2000} step={50} value={volume} onChange={(e) => setVolume(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                                </div>
                            </div>

                            <div className="p-4 bg-cyan-950/30 rounded-xl border border-cyan-500/30 text-center relative overflow-hidden">
                                <div className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mb-1">Concentration Massique (Cm)</div>
                                <div className="text-4xl font-black text-white">{concentration.toFixed(1)} <span className="text-xl">g/L</span></div>
                                <div className="mt-2 text-[10px] font-mono text-gray-500">C = {mass}g / {(volume / 1000).toFixed(2)}L</div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-cyan-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-cyan-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Solution Parfaite ! La concentration est exactement ce qu'il fallait." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Éprouvette graduée */}
            <Cylinder args={[0.8, 0.8, 4, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#E2E8F0" transparent opacity={0.2} metalness={0.9} roughness={0} />
            </Cylinder>

            {/* Liquide */}
            <Cylinder args={[0.78, 0.78, (volume / 2000) * 3.8, 32]} position={[0, -1.9 + ((volume / 2000) * 3.8) / 2, 0]}>
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.6 + (concentration / 400) * 0.4} emissive="#3B82F6" emissiveIntensity={0.2} />
            </Cylinder>

            {/* Particules de soluté */}
            {[...Array(Math.min(50, Math.floor(mass / 2)))].map((_, i) => (
                <Float key={i} speed={2} floatIntensity={1}>
                    <Sphere args={[0.04]} position={[(Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 1.2]}>
                        <meshStandardMaterial color="#FFFFFF" />
                    </Sphere>
                </Float>
            ))}

            <Text position={[0, 2.5, 0]} fontSize={0.4} color="white" font="/fonts/Inter-Bold.ttf">
                {concentration.toFixed(1)} g/L
            </Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 9: ACIDES, BASES ET pH (PC 3e)
// ============================================================
export function Chap9AcidesBasesPH() {
    const [ph, setPh] = useState(7);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const solutions = {
        citron: { name: 'Citron', icon: '🍋', ph: 2 },
        vinaigre: { name: 'Vinaigre', icon: '🍶', ph: 3 },
        eau: { name: 'Eau Pure', icon: '💧', ph: 7 },
        savon: { name: 'Savon', icon: '🧼', ph: 10 },
        javel: { name: 'Javel', icon: '🧴', ph: 12 },
        soude: { name: 'Soude', icon: '⚗️', ph: 14 }
    };

    const challenges = [
        { q: "Une solution avec un pH de 2 est :", options: ["Acide", "Basique", "Neutre"], ans: 0, icon: "🍋" },
        { q: "Quelle valeur de pH correspond à la neutralité ?", options: ["0", "7", "14"], ans: 1, icon: "💧" },
        { q: "Pour diminuer l'acidité d'une solution, on peut :", options: ["Ajouter un acide", "La diluer avec de l'eau", "La chauffer"], ans: 1, icon: "💧" },
        { q: "Une solution basique a un pH compris entre :", options: ["0 et 7", "7 uniquement", "7 et 14"], ans: 2, icon: "🧼" }
    ];

    const getColor = (p) => {
        if (p < 3) return '#F87171'; // Rouge (Acide fort)
        if (p < 7) return '#FB923C'; // Orange (Acide faible)
        if (p === 7) return '#4ADE80'; // Vert (Neutre)
        if (p < 11) return '#60A5FA'; // Bleu (Base faible)
        return '#818CF8'; // Violet (Base forte)
    };

    const getType = (p) => p < 7 ? 'ACIDE 🔥' : p === 7 ? 'NEUTRE ✨' : 'BASIQUE ❄️';

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
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Réaction erronée ! Analyse mieux l'échelle de pH.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Expert pH" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-purple-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">Équilibre Ionique</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Scanner de pH' : 'Défi Acidité 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Analysez le pH de diverses substances et observez leur nature." icon="🧪" />

                            <div className="grid grid-cols-3 gap-2">
                                {Object.entries(solutions).map(([key, s]) => (
                                    <button key={key} onClick={() => setPh(s.ph)}
                                        className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border ${ph === s.ph ? 'bg-purple-600 border-purple-400 shadow-lg scale-105' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                        <span className="text-xl">{s.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{s.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-black/40 p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: getColor(ph) }} />
                                <div className="text-6xl font-black mb-2 transition-all duration-500" style={{ color: getColor(ph), textShadow: `0 0 20px ${getColor(ph)}44` }}>
                                    {ph}
                                </div>
                                <div className="text-sm font-black text-white tracking-[0.2em]">{getType(ph)}</div>
                            </div>

                            <div className="space-y-2">
                                <div className="h-4 rounded-full flex overflow-hidden border border-white/10 relative">
                                    {[...Array(15)].map((_, i) => (
                                        <div key={i} className="flex-1" style={{ backgroundColor: getColor(i) }} />
                                    ))}
                                    <div className="absolute top-[-4px] bottom-[-4px] w-1 bg-white shadow-[0_0_10px_white] transition-all duration-300 z-10"
                                        style={{ left: `${(ph / 14) * 100}%` }} />
                                </div>
                                <input type="range" min={0} max={14} value={ph} onChange={(e) => setPh(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                                <div className="flex justify-between text-[8px] text-gray-500 font-black uppercase">
                                    <span>ACIDE FORT</span>
                                    <span>NEUTRE</span>
                                    <span>BASE FORTE</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-purple-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-purple-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-purple-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Analyse Réussie ! Tu maîtrises parfaitement l'échelle de pH." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Bécher */}
            <Cylinder args={[1.2, 1, 3, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#E2E8F0" transparent opacity={0.3} metalness={0.9} roughness={0} />
            </Cylinder>

            {/* Liquide coloré par pH */}
            <Cylinder args={[1.15, 0.95, 2.8, 32]} position={[0, -0.1, 0]}>
                <meshStandardMaterial color={getColor(ph)} transparent opacity={0.7} emissive={getColor(ph)} emissiveIntensity={0.5} />
            </Cylinder>

            {/* Ions (bulles) */}
            {[...Array(12)].map((_, i) => (
                <Float key={i} speed={2 + i * 0.2} floatIntensity={1.5}>
                    <Sphere args={[0.06]} position={[(Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 1.5]}>
                        <meshStandardMaterial color="white" transparent opacity={0.4} />
                    </Sphere>
                </Float>
            ))}

            <Text position={[0, 2.2, 0]} fontSize={0.5} color="white" font="/fonts/Inter-Bold.ttf">
                pH {ph}
            </Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 10: PROPRIÉTÉS DES MÉTAUX (PC 3e)
// ============================================================
export function Chap10Metaux() {
    const [metal, setMetal] = useState('fer');
    const [reacting, setReacting] = useState(false);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const metals = {
        fer: { name: 'Fer', icon: '🔩', color: '#888888', reactive: true, desc: 'Aimantée, rouille' },
        zinc: { name: 'Zinc', icon: '⬜', color: '#aaaaaa', reactive: true, desc: 'Protège de corrosion' },
        or: { name: 'Or', icon: '👑', color: '#ffd700', reactive: false, desc: 'Métal noble' },
        sodium: { name: 'Sodium', icon: '🔥', color: '#ff6600', reactive: true, desc: 'Réactivité extrême' }
    };

    const challenges = [
        { q: "Métal + Acide → Sel + ?", options: ["Oxygène (O₂)", "Dihydrogène (H₂)", "Dioxyde de Carbone (CO₂)"], ans: 1, icon: "🧪" },
        { q: "Quel test permet d'identifier le dihydrogène ?", options: ["Trouble l'eau de chaux", "Ralumme l'allumette", "Fait 'pop' à l'allumette"], ans: 2, icon: "👂" },
        { q: "L'or ne réagit pas aux acides car il est dit :", options: ["Noble", "Lourd", "Magnétique"], ans: 0, icon: "👑" },
        { q: "La réaction d'un métal avec un acide est une transformation :", options: ["Physique", "Chimique", "Nucléaire"], ans: 1, icon: "🧠" }
    ];

    const doReaction = () => {
        if (metals[metal].reactive) {
            setReacting(true);
            setTimeout(() => setReacting(false), 2000);
        }
    };

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
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Réaction ratée ! Analyse mieux les propriétés des métaux.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⚙️ Forge des Métaux" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-gray-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Métallurgie Appliquée</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Laboratoire d\'Analyse' : 'Défi Réactivité 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Testez la résistance et la réactivité des métaux face aux acides." icon="🧪" />

                            <div className="grid grid-cols-4 gap-2">
                                {Object.entries(metals).map(([key, m]) => (
                                    <button key={key} onClick={() => setMetal(key)}
                                        className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border ${metal === key ? 'bg-gray-600 border-white/50 shadow-lg scale-105' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                        <span className="text-xl">{m.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{m.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                <div className="text-[10px] text-gray-500 font-black uppercase mb-2">Propriétés : {metals[metal].desc}</div>
                                <button onClick={doReaction} disabled={!metals[metal].reactive || reacting}
                                    className={`w-full py-4 rounded-xl font-black text-xs tracking-widest shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
                                        ${metals[metal].reactive
                                            ? reacting ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-r from-red-600 to-orange-600 hover:scale-[1.02]'
                                            : 'bg-gray-800 cursor-not-allowed opacity-50'}`}>
                                    {reacting ? '💨 DÉGAGEMENT GAZEUX...' : metals[metal].reactive ? '💧 VERSER ACIDE CHLORHYDRIQUE' : '🛡️ MÉTAL INERTE (PAS DE RÉACTION)'}
                                </button>
                            </div>

                            {reacting && (
                                <div className="p-4 bg-red-950/30 rounded-xl border border-red-500/30 text-center animate-in zoom-in">
                                    <div className="text-[10px] text-red-100 font-black uppercase mb-1">Production de Dihydrogène</div>
                                    <div className="text-2xl font-black text-white">🫧 POP !</div>
                                    <div className="text-[8px] text-red-300/70 font-mono mt-1">Zn + 2HCl → ZnCl₂ + H₂</div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-gray-400 hover:text-black border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-gray-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-gray-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Forgeron Expert ! Ta connaissance des métaux est solide." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Bloc de métal */}
            <Float speed={1} rotationIntensity={0.5}>
                <Box args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
                    <meshStandardMaterial color={metals[metal].color} metalness={0.9} roughness={0.1} />
                </Box>
            </Float>

            {/* Bulles de réaction (H2) */}
            {reacting && [...Array(15)].map((_, i) => (
                <Float key={i} speed={4 + i * 0.1} floatIntensity={1}>
                    <Sphere args={[0.08]} position={[(Math.random() - 0.5) * 1.8, 1 + i * 0.3, (Math.random() - 0.5) * 1.8]}>
                        <meshStandardMaterial color="white" transparent opacity={0.6} />
                    </Sphere>
                </Float>
            ))}

            <Text position={[0, 2, 0]} fontSize={0.4} color="white" font="/fonts/Inter-Bold.ttf">
                {metals[metal].name.toUpperCase()}
            </Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 11: HYDROCARBURES ET COMBUSTION (PC 3e)
// ============================================================
export function Chap11Combustion() {
    const [fuel, setFuel] = useState('methane');
    const [burning, setBurning] = useState(false);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const fuels = {
        methane: { name: 'Méthane', icon: '🔥', formula: 'CH₄ + 2O₂ → CO₂ + 2H₂O', color: '#00aaff', desc: 'Gaz Naturel' },
        butane: { name: 'Butane', icon: '🧃', formula: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O', color: '#ffaa00', desc: 'Gaz de Cuisine' },
        essence: { name: 'Octane', icon: '⛽', formula: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O', color: '#ff4400', desc: 'Carburant Supérieur' }
    };

    const challenges = [
        { q: "La combustion complète d'un hydrocarbure produit du CO₂ et de :", options: ["L'Azote (N₂)", "L'Eau (H₂O)", "Le Monoxyde de Carbone (CO)"], ans: 1, icon: "💧" },
        { q: "Dans une combustion, le dioxygène est appelé le :", options: ["Carburant", "Comburant", "Combustible"], ans: 1, icon: "🌬️" },
        { q: "Un hydrocarbure est une molécule composée uniquement de :", options: ["Carbone et Hydrogène", "Carbone et Oxygène", "Oxygène et Hydrogène"], ans: 0, icon: "🧠" },
        { q: "Une flamme bleue indique une combustion :", options: ["Complète", "Incomplète", "Partielle"], ans: 0, icon: "🔥" }
    ];

    const startBurn = () => {
        setBurning(true);
        setTimeout(() => setBurning(false), 3000);
    };

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
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) {
            setScore(s => s + 25);
            setShowSuccess(true);
        } else {
            alert("Extinction ! Révise l'équilibre des combustions.");
        }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔥 Maître du Feu" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-orange-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={(m) => m === 'challenge' ? startChallenge() : setMode('explore')} />
                    </div>

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-orange-400 font-bold uppercase tracking-widest">Énergie Chimique</span>
                            <span className="text-lg font-black">{mode === 'explore' ? 'Chambre de Combustion' : 'Défi Oxidation 🧠'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <div className="space-y-4">
                            <MissionObjective objective="Simulez la combustion d'hydrocarbures et étudiez le bilan énergétique." icon="🔥" />

                            <div className="grid grid-cols-3 gap-2">
                                {Object.entries(fuels).map(([key, f]) => (
                                    <button key={key} onClick={() => setFuel(key)}
                                        className={`p-2 rounded-xl flex flex-col items-center gap-1 transition-all border ${fuel === key ? 'bg-orange-600 border-orange-400 shadow-lg scale-105' : 'bg-gray-900 border-white/5 opacity-50'}`}>
                                        <span className="text-xl">{f.icon}</span>
                                        <span className="text-[8px] font-black uppercase text-center leading-none">{f.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                <div className="text-[10px] text-gray-500 font-black uppercase mb-2">Carburant : {fuels[fuel].desc}</div>
                                <button onClick={startBurn} disabled={burning}
                                    className={`w-full py-4 rounded-xl font-black text-xs tracking-widest shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
                                        ${burning ? 'bg-red-600 animate-pulse' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:scale-[1.02]'}`}>
                                    {burning ? '🔥RÉACTION EXOTHERMIQUE...' : '🧨 DÉCLENCHER LA COMBUSTION'}
                                </button>
                            </div>

                            <div className="p-4 bg-gray-950 rounded-xl border border-orange-500/20 font-mono text-center">
                                <div className="text-[8px] text-gray-500 uppercase mb-1">Équation Équilibrée</div>
                                <div className="text-xs text-orange-300 font-bold">{fuels[fuel].formula}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {challenge && <MissionObjective objective={challenge.q} icon={challenge.icon} />}
                            <div className="space-y-2">
                                {challenge?.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)}
                                        disabled={challenge.answered}
                                        className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center group
                                            ${challenge.answered
                                                ? idx === challenge.ans ? 'bg-green-500 text-white' : 'bg-gray-800/50 text-gray-500'
                                                : 'bg-white/5 hover:bg-orange-500 hover:text-white border border-white/10'
                                            }`}>
                                        {opt}
                                        {challenge.answered && idx === challenge.ans ? '✅' : '➜'}
                                    </button>
                                ))}
                            </div>
                            {challenge?.answered && (
                                <button onClick={nextQuestion} className="w-full py-4 bg-orange-600 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-orange-900/40">
                                    Défi Suivant ➜
                                </button>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            <XPBar current={score % 100} nextLevel={100} />
            <SuccessOverlay show={showSuccess} message="Pyromane Expert ! Ton bilan carbone est impeccable." points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />

            {/* Brûleur */}
            <Cylinder args={[0.4, 0.4, 1.5, 32]} position={[0, -0.8, 0]}>
                <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
            </Cylinder>

            {/* Flamme */}
            {burning && (
                <Float speed={5} rotationIntensity={2} floatIntensity={1}>
                    <Sphere args={[0.5, 16, 16]} position={[0, 0.5, 0]} scale={[1, 2, 1]}>
                        <meshStandardMaterial color={fuels[fuel].color} emissive={fuels[fuel].color} emissiveIntensity={5} transparent opacity={0.6} />
                    </Sphere>
                    <pointLight position={[0, 0.5, 0]} color={fuels[fuel].color} intensity={8} distance={6} />
                </Float>
            )}

            <Text position={[0, 2.2, 0]} fontSize={0.4} color="white" font="/fonts/Inter-Bold.ttf">
                {fuels[fuel].name.toUpperCase()}
            </Text>
        </group>
    );
}
