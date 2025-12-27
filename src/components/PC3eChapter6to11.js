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
        lampe: { name: '💡 Lampe 6V', U: 6, R: 3, desc: 'Éclairage standard' },
        moteur: { name: '⚙️ Moteur 12V', U: 12, R: 6, desc: 'Mouvement mécanique' },
        chauffage: { name: '🔥 Résistance', U: 24, R: 8, desc: 'Chauffage électrique' },
        led: { name: '🔴 LED', U: 3, R: 150, desc: 'Indicateur lumineux' }
    };

    const challenges = [
        { q: "U = R × I donne U en :", options: ["Ampère", "Volt", "Ohm"], ans: 1 },
        { q: "Si U=12V et R=4Ω, I = ?", options: ["3 A", "8 A", "48 A"], ans: 0 },
        { q: "2 résistances de 10Ω en série =", options: ["5 Ω", "10 Ω", "20 Ω"], ans: 2 },
        { q: "L'ohmmètre mesure :", options: ["La tension", "Le courant", "La résistance"], ans: 2 }
    ];

    const current = voltage / resistance;

    const applyScenario = (key) => {
        const sc = scenarios[key];
        setVoltage(sc.U);
        setResistance(sc.R);
    };

    const startChallenge = () => { setMode('challenge'); setScore(0); nextQuestion(); };
    const nextQuestion = () => { setChallenge({ ...challenges[Math.floor(Math.random() * challenges.length)], answered: false }); setShowSuccess(false); };
    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) { setScore(s => s + 25); setShowSuccess(true); } else { alert("Réessaie !"); }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Loi d'Ohm" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-yellow-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-yellow-300 font-bold uppercase tracking-wider mb-1">Module Électricité</div>
                            <div className="text-xl font-black text-white leading-none">RÉSISTANCE & TENSION</div>
                        </div>
                        <div className="text-right">
                            <GradeBadge score={score} />
                        </div>
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Appliquez la loi d'Ohm U = R x I !" icon="⚡" />
                            </div>

                            {/* Scénarios */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Composants</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(scenarios).map(([k, sc]) => (
                                        <button key={k} onClick={() => applyScenario(k)}
                                            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-left transition-all group">
                                            <div className="font-bold group-hover:text-yellow-400 transition-colors">{sc.name}</div>
                                            <div className="text-gray-500 text-[10px]">{sc.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contrôles */}
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs"><span>Tension U</span><span className="text-yellow-400">{voltage} V</span></div>
                                    <input type="range" min={1} max={24} value={voltage} onChange={(e) => setVoltage(parseInt(e.target.value))} className="w-full accent-yellow-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs"><span>Résistance R</span><span className="text-orange-400">{resistance} Ω</span></div>
                                    <input type="range" min={1} max={100} value={resistance} onChange={(e) => setResistance(parseInt(e.target.value))} className="w-full accent-orange-500" />
                                </div>
                            </div>

                            {/* Résultats */}
                            <div className="mt-4 p-4 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-yellow-500/30">
                                <div className="text-center">
                                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">INTENSITÉ I</div>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 my-2">
                                        {current.toFixed(2)} A
                                    </div>
                                    <div className="text-xs text-gray-400">I = U / R = {voltage} / {resistance}</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-yellow-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Quiz Loi d'Ohm
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {!challenge && (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full font-bold shadow-lg shadow-yellow-900/20 transition-all transform hover:scale-105">
                                        Commencer le Défi
                                    </button>
                                </div>
                            )}

                            {challenge && (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm font-medium bg-black/20 p-3 rounded-lg border-l-2 border-yellow-500">
                                        {challenge.q}
                                    </div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                disabled={challenge.answered}
                                                className={`w-full text-left p-3 rounded transition-all text-sm flex justify-between items-center
                                                    ${challenge.answered
                                                        ? idx === challenge.ans
                                                            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                                            : 'bg-gray-800/50 text-gray-500'
                                                        : 'bg-white/5 hover:bg-white/10'
                                                    }
                                                `}>
                                                <span><span className="opacity-50 mr-2">{['A', 'B', 'C'][idx]}.</span> {opt}</span>
                                                {challenge.answered && idx === challenge.ans && <span>✅</span>}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg font-bold shadow-lg mt-4 hover:shadow-yellow-500/20 transition-all">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
            <Box args={[2, 0.3, 0.5]} position={[0, 0, 0]}><meshStandardMaterial color="#ff6600" /></Box>
            <Text position={[0, 0.5, 0]} fontSize={0.3} color="white">R = {resistance} Ω</Text>
            <Line points={[[-3, 0, 0], [-1, 0, 0]]} color="red" lineWidth={3} />
            <Line points={[[1, 0, 0], [3, 0, 0]]} color="blue" lineWidth={3} />
            <SuccessOverlay show={showSuccess} message="Bravo !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
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
        ampoule: { name: '💡 Ampoule', input: 'Électrique', outputs: ['Lumineuse', 'Thermique'], efficiency: 0.1, desc: 'Eclaire mais chauffe beaucoup' },
        moteur: { name: '⚙️ Moteur', input: 'Électrique', outputs: ['Mécanique', 'Thermique'], efficiency: 0.85, desc: 'Transforme élec en mouvement' },
        panneau: { name: '☀️ Panneau Solaire', input: 'Lumineuse', outputs: ['Électrique'], efficiency: 0.2, desc: 'Conversion photovoltaïque' },
        voiture: { name: '🚗 Voiture', input: 'Chimique', outputs: ['Mécanique', 'Thermique'], efficiency: 0.25, desc: 'Moteur à combustion' }
    };

    const challenges = [
        { q: "L'énergie se mesure en :", options: ["Watt", "Joule", "Newton"], ans: 1 },
        { q: "Rendement = E_utile / E_reçue en :", options: ["Joule", "Pourcentage", "Watt"], ans: 1 },
        { q: "L'énergie peut être :", options: ["Créée", "Détruite", "Transformée"], ans: 2 },
        { q: "Une LED a un meilleur rendement qu'une :", options: ["Pile", "Ampoule incandescente", "Batterie"], ans: 1 }
    ];

    const dev = devices[device];
    const usefulEnergy = inputEnergy * dev.efficiency;
    const wastedEnergy = inputEnergy - usefulEnergy;

    const startChallenge = () => { setMode('challenge'); setScore(0); nextQuestion(); };
    const nextQuestion = () => { setChallenge({ ...challenges[Math.floor(Math.random() * challenges.length)], answered: false }); setShowSuccess(false); };
    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) { setScore(s => s + 25); setShowSuccess(true); } else { alert("Non !"); }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔄 Transformations d'Énergie" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-green-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-green-300 font-bold uppercase tracking-wider mb-1">Module Énergie</div>
                            <div className="text-xl font-black text-white leading-none">RENDEMENT & PERTES</div>
                        </div>
                        <div className="text-right">
                            <GradeBadge score={score} />
                        </div>
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Analysez les transferts et le rendement !" icon="🔄" />
                            </div>

                            {/* Scénarios */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Dispositifs</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(devices).map(([k, d]) => (
                                        <button key={k} onClick={() => setDevice(k)}
                                            className={`p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-left transition-all group ${device === k ? 'border-green-500/50 bg-green-900/20' : ''}`}>
                                            <div className="font-bold group-hover:text-green-400 transition-colors">{d.name}</div>
                                            <div className="text-gray-500 text-[10px]">{d.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-green-500/30">
                                <div className="text-center mb-4">
                                    <div className="flex items-center justify-center gap-2 text-sm font-bold">
                                        <span className="text-cyan-400">{dev.input}</span>
                                        <span className="text-gray-500">→</span>
                                        <span className="text-yellow-400">{dev.outputs.join(' + ')}</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-gray-400">Rendement Énergétique</span>
                                        <span className={`font-bold ${dev.efficiency > 0.5 ? 'text-green-400' : 'text-orange-400'}`}>
                                            {(dev.efficiency * 100).toFixed(0)}%
                                        </span>
                                    </div>
                                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden flex shadow-inner">
                                        <div className="bg-green-500 transition-all duration-500" style={{ width: `${dev.efficiency * 100}%` }} title="Énergie Utile" />
                                        <div className="bg-red-500 transition-all duration-500" style={{ width: `${(1 - dev.efficiency) * 100}%` }} title="Énergie Perdue (Chaleur)" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-center">
                                    <div className="p-2 bg-green-500/10 rounded border border-green-500/20">
                                        <div className="text-xs text-green-300">Énergie Utile</div>
                                        <div className="text-xl font-bold text-white">{usefulEnergy.toFixed(0)} J</div>
                                    </div>
                                    <div className="p-2 bg-red-500/10 rounded border border-red-500/20">
                                        <div className="text-xs text-red-300">Pertes (Th.)</div>
                                        <div className="text-xl font-bold text-white">{wastedEnergy.toFixed(0)} J</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-green-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-green-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Quiz Énergie
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {!challenge && (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold shadow-lg shadow-green-900/20 transition-all transform hover:scale-105">
                                        Commencer le Défi
                                    </button>
                                </div>
                            )}

                            {challenge && (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm font-medium bg-black/20 p-3 rounded-lg border-l-2 border-green-500">
                                        {challenge.q}
                                    </div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                disabled={challenge.answered}
                                                className={`w-full text-left p-3 rounded transition-all text-sm flex justify-between items-center
                                                    ${challenge.answered
                                                        ? idx === challenge.ans
                                                            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                                            : 'bg-gray-800/50 text-gray-500'
                                                        : 'bg-white/5 hover:bg-white/10'
                                                    }
                                                `}>
                                                <span><span className="opacity-50 mr-2">{['A', 'B', 'C'][idx]}.</span> {opt}</span>
                                                {challenge.answered && idx === challenge.ans && <span>✅</span>}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-bold shadow-lg mt-4 hover:shadow-green-500/20 transition-all">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
            <Sphere args={[1]} position={[0, 0, 0]}><meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={0.5} /></Sphere>
            <Text position={[0, 1.8, 0]} fontSize={0.3} color="white">{dev.name}</Text>
            <SuccessOverlay show={showSuccess} message="Correct !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
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
        the: { name: '🍵 Thé sucré', m: 30, v: 250, desc: 'Ataya traditionnel' },
        serum: { name: '💉 Sérum', m: 9, v: 1000, desc: 'NaCl 0.9% médical' },
        sirop: { name: '🧃 Sirop', m: 500, v: 1000, desc: 'Boisson concentrée' },
        eau: { name: '💧 Eau salée', m: 35, v: 1000, desc: 'Eau de mer' }
    };

    const challenges = [
        { q: "Le solvant dans l'eau salée est :", options: ["Le sel", "L'eau", "Les deux"], ans: 1 },
        { q: "C = m/V donne C en :", options: ["kg", "g/L", "mL"], ans: 1 },
        { q: "20g dans 500mL → C = ?", options: ["10 g/L", "40 g/L", "25 g/L"], ans: 1 },
        { q: "Solution saturée = ", options: ["Diluée", "Ne peut plus dissoudre", "Vide"], ans: 1 }
    ];

    const concentration = mass / (volume / 1000);

    const applyScenario = (key) => { const sc = scenarios[key]; setMass(sc.m); setVolume(sc.v); };
    const startChallenge = () => { setMode('challenge'); setScore(0); nextQuestion(); };
    const nextQuestion = () => { setChallenge({ ...challenges[Math.floor(Math.random() * challenges.length)], answered: false }); setShowSuccess(false); };
    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) { setScore(s => s + 25); setShowSuccess(true); } else { alert("Non !"); }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Solutions Aqueuses" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-cyan-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-cyan-300 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">CONCENTRATION</div>
                        </div>
                        <div className="text-right">
                            <GradeBadge score={score} />
                        </div>
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Préparez des solutions et calculez C !" icon="🧪" />
                            </div>

                            {/* Scénarios */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-400 uppercase mb-2">Exemples</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(scenarios).map(([k, sc]) => (
                                        <button key={k} onClick={() => applyScenario(k)}
                                            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-left transition-all group">
                                            <div className="font-bold group-hover:text-cyan-400 transition-colors">{sc.name}</div>
                                            <div className="text-gray-500 text-[10px]">{sc.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Contrôles */}
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs"><span>Masse soluté m</span><span className="text-cyan-400">{mass} g</span></div>
                                    <input type="range" min={1} max={200} value={mass} onChange={(e) => setMass(parseInt(e.target.value))} className="w-full accent-cyan-500" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs"><span>Volume solvant V</span><span className="text-blue-400">{volume} mL</span></div>
                                    <input type="range" min={100} max={2000} step={50} value={volume} onChange={(e) => setVolume(parseInt(e.target.value))} className="w-full accent-blue-500" />
                                </div>
                            </div>

                            {/* Résultats */}
                            <div className="mt-4 p-4 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-cyan-500/30">
                                <div className="text-center">
                                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">CONCENTRATION MASSIQUE</div>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 my-2">
                                        {concentration.toFixed(1)} g/L
                                    </div>
                                    <div className="text-xs text-gray-400">C = m / V = {mass}g / {(volume / 1000).toFixed(1)}L</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-cyan-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Quiz Solutions
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {!challenge && (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold shadow-lg shadow-cyan-900/20 transition-all transform hover:scale-105">
                                        Commencer le Défi
                                    </button>
                                </div>
                            )}

                            {challenge && (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm font-medium bg-black/20 p-3 rounded-lg border-l-2 border-cyan-500">
                                        {challenge.q}
                                    </div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                disabled={challenge.answered}
                                                className={`w-full text-left p-3 rounded transition-all text-sm flex justify-between items-center
                                                    ${challenge.answered
                                                        ? idx === challenge.ans
                                                            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                                            : 'bg-gray-800/50 text-gray-500'
                                                        : 'bg-white/5 hover:bg-white/10'
                                                    }
                                                `}>
                                                <span><span className="opacity-50 mr-2">{['A', 'B', 'C'][idx]}.</span> {opt}</span>
                                                {challenge.answered && idx === challenge.ans && <span>✅</span>}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold shadow-lg mt-4 hover:shadow-cyan-500/20 transition-all">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
            <Cylinder args={[0.8, 0.8, 2, 32]} position={[0, 0, 0]}><meshStandardMaterial color="#4488ff" transparent opacity={0.6} /></Cylinder>
            <SuccessOverlay show={showSuccess} message="Excellent !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
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
        citron: { name: '🍋 Citron', ph: 2 }, vinaigre: { name: '🍶 Vinaigre', ph: 3 },
        eau: { name: '💧 Eau pure', ph: 7 }, savon: { name: '🧼 Savon', ph: 10 },
        javel: { name: '🧴 Javel', ph: 12 }, soude: { name: '⚗️ Soude', ph: 14 }
    };

    const challenges = [
        { q: "pH < 7 = solution", options: ["Acide", "Basique", "Neutre"], ans: 0 },
        { q: "pH = 7 = solution", options: ["Acide", "Basique", "Neutre"], ans: 2 },
        { q: "Acide + Base →", options: ["Explosion", "Neutralisation", "Gaz"], ans: 1 },
        { q: "Le citron a un pH d'environ", options: ["2", "7", "12"], ans: 0 }
    ];

    const getColor = (p) => p < 4 ? '#ff0000' : p < 7 ? '#ff8800' : p === 7 ? '#00ff00' : p < 10 ? '#0088ff' : '#8800ff';
    const getType = (p) => p < 7 ? 'ACIDE 🍋' : p === 7 ? 'NEUTRE 💧' : 'BASIQUE 🧼';

    const startChallenge = () => { setMode('challenge'); setScore(0); nextQuestion(); };
    const nextQuestion = () => { setChallenge({ ...challenges[Math.floor(Math.random() * challenges.length)], answered: false }); setShowSuccess(false); };
    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) { setScore(s => s + 25); setShowSuccess(true); } else { alert("Non !"); }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Acides, Bases et pH" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-purple-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">ÉCHELLE pH</div>
                        </div>
                        <div className="text-right">
                            <GradeBadge score={score} />
                        </div>
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Testez le pH de différentes solutions !" icon="🧪" />
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {Object.entries(solutions).map(([k, s]) => (
                                    <button key={k} onClick={() => setPh(s.ph)}
                                        className={`px-3 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105 ${ph === s.ph ? 'ring-2 ring-white scale-110 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'}`}
                                        style={{ backgroundColor: ph === s.ph ? getColor(s.ph) : undefined, color: ph === s.ph ? 'black' : 'white' }}>
                                        {s.name}
                                    </button>
                                ))}
                            </div>

                            <div className="text-center mb-6 p-4 bg-gray-900/80 rounded-xl border border-white/10 shadow-inner">
                                <div className="text-6xl font-black mb-1 transition-colors duration-500" style={{ color: getColor(ph) }}>{ph}</div>
                                <div className="text-lg font-bold uppercase tracking-widest text-white">{getType(ph)}</div>
                            </div>

                            <div className="space-y-2">
                                <div className="h-8 rounded-full flex overflow-hidden border border-white/20 shadow-lg relative">
                                    {[...Array(15)].map((_, i) => <div key={i} className="flex-1 transition-all hover:opacity-100 opacity-80" style={{ backgroundColor: getColor(i) }} />)}
                                    <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white] transition-all duration-300"
                                        style={{ left: `${(ph / 14) * 100}%` }} />
                                </div>
                                <input type="range" min={0} max={14} value={ph} onChange={(e) => setPh(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
                                <div className="flex justify-between text-[10px] text-gray-400 font-mono uppercase">
                                    <span>Acidité max</span>
                                    <span>Neutralité</span>
                                    <span>Basicité max</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-purple-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Quiz pH
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {!challenge && (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold shadow-lg shadow-purple-900/20 transition-all transform hover:scale-105">
                                        Commencer le Défi
                                    </button>
                                </div>
                            )}

                            {challenge && (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm font-medium bg-black/20 p-3 rounded-lg border-l-2 border-purple-500">
                                        {challenge.q}
                                    </div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                disabled={challenge.answered}
                                                className={`w-full text-left p-3 rounded transition-all text-sm flex justify-between items-center
                                                    ${challenge.answered
                                                        ? idx === challenge.ans
                                                            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                                            : 'bg-gray-800/50 text-gray-500'
                                                        : 'bg-white/5 hover:bg-white/10'
                                                    }
                                                `}>
                                                <span><span className="opacity-50 mr-2">{['A', 'B', 'C'][idx]}.</span> {opt}</span>
                                                {challenge.answered && idx === challenge.ans && <span>✅</span>}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold shadow-lg mt-4 hover:shadow-purple-500/20 transition-all">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
            <Cylinder args={[0.5, 0.5, 1.5, 32]} position={[0, 0, 0]}><meshStandardMaterial color={getColor(ph)} transparent opacity={0.7} /></Cylinder>
            <SuccessOverlay show={showSuccess} message="Exact !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
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
        fer: { name: '🔩 Fer', color: '#888888', reactive: true, desc: 'Attiré par aimant' },
        zinc: { name: '⬜ Zinc', color: '#aaaaaa', reactive: true, desc: 'Gris bleuté' },
        or: { name: '👑 Or', color: '#ffd700', reactive: false, desc: 'Jaune brillant' },
        sodium: { name: '🔥 Sodium', color: '#ff6600', reactive: true, desc: 'Très réactif' }
    };

    const challenges = [
        { q: "Métal + Acide → Sel + ?", options: ["O₂", "H₂", "CO₂"], ans: 1 },
        { q: "L'or est un métal :", options: ["Très réactif", "Noble", "Léger"], ans: 1 },
        { q: "La rouille est :", options: ["Oxyde de fer", "Fer pur", "Sel"], ans: 0 },
        { q: "Test du H₂ avec flamme →", options: ["Rien", "Pop !", "Fumée"], ans: 1 }
    ];

    const doReaction = () => { if (metals[metal].reactive) { setReacting(true); setTimeout(() => setReacting(false), 2000); } };

    const startChallenge = () => { setMode('challenge'); setScore(0); nextQuestion(); };
    const nextQuestion = () => { setChallenge({ ...challenges[Math.floor(Math.random() * challenges.length)], answered: false }); setShowSuccess(false); };
    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) { setScore(s => s + 25); setShowSuccess(true); } else { alert("Non !"); }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⚙️ Propriétés des Métaux" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-gray-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">RÉACTIONS ACIDES</div>
                        </div>
                        <div className="text-right">
                            <GradeBadge score={score} />
                        </div>
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Testez la réaction des métaux aux acides !" icon="🧪" />
                            </div>

                            <div className="grid grid-cols-2 gap-2 mb-4">
                                {Object.entries(metals).map(([k, m]) => (
                                    <button key={k} onClick={() => setMetal(k)}
                                        className={`p-3 rounded-lg text-left transition-all group border border-white/5 hover:border-white/20 ${metal === k ? 'bg-white/10 ring-1 ring-white/50' : 'bg-gray-800'}`}>
                                        <div className="font-bold group-hover:text-blue-400 transition-colors flex items-center justify-between">
                                            {m.name}
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: m.color }} />
                                        </div>
                                        <div className="text-gray-500 text-[10px] mt-1">{m.desc}</div>
                                    </button>
                                ))}
                            </div>

                            <button onClick={doReaction} disabled={!metals[metal].reactive || reacting}
                                className={`w-full py-4 rounded-xl font-black text-lg shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
                                    ${metals[metal].reactive
                                        ? reacting ? 'bg-red-500 animate-pulse cursor-wait' : 'bg-gradient-to-r from-red-600 to-orange-600 hover:scale-[1.02]'
                                        : 'bg-gray-700 cursor-not-allowed opacity-50'}`}>
                                {reacting ? (
                                    <><span>⚠️</span> RÉACTION EN COURS...</>
                                ) : metals[metal].reactive ? (
                                    <><span>💧</span> VERSER ACIDE (HCl)</>
                                ) : (
                                    <><span>🚫</span> PAS DE RÉACTION</>
                                )}
                            </button>

                            {reacting && (
                                <div className="mt-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20 text-center animate-in fade-in zoom-in">
                                    <div className="text-2xl mb-1">🫧 POP !</div>
                                    <div className="text-xs text-red-200 font-mono">Dégagement de Dihydrogène (H₂)</div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-gray-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Quiz Métaux
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {!challenge && (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-full font-bold shadow-lg shadow-gray-900/20 transition-all transform hover:scale-105">
                                        Commencer le Défi
                                    </button>
                                </div>
                            )}

                            {challenge && (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm font-medium bg-black/20 p-3 rounded-lg border-l-2 border-gray-500">
                                        {challenge.q}
                                    </div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                disabled={challenge.answered}
                                                className={`w-full text-left p-3 rounded transition-all text-sm flex justify-between items-center
                                                    ${challenge.answered
                                                        ? idx === challenge.ans
                                                            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                                            : 'bg-gray-800/50 text-gray-500'
                                                        : 'bg-white/5 hover:bg-white/10'
                                                    }
                                                `}>
                                                <span><span className="opacity-50 mr-2">{['A', 'B', 'C'][idx]}.</span> {opt}</span>
                                                {challenge.answered && idx === challenge.ans && <span>✅</span>}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg font-bold shadow-lg mt-4 hover:shadow-gray-500/20 transition-all">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
            <Box args={[1, 1, 1]} position={[0, 0, 0]}><meshStandardMaterial color={metals[metal].color} metalness={0.8} roughness={0.2} /></Box>
            {reacting && [...Array(10)].map((_, i) => (
                <Float key={i} speed={5} floatIntensity={2}><Sphere args={[0.1]} position={[Math.random() - 0.5, 0.5 + i * 0.2, Math.random() - 0.5]}><meshStandardMaterial color="white" transparent opacity={0.5} /></Sphere></Float>
            ))}
            <SuccessOverlay show={showSuccess} message="Bien joué !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
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
        methane: { name: '🔥 Méthane CH₄', formula: 'CH₄ + 2O₂ → CO₂ + 2H₂O', color: '#00aaff', desc: 'Gaz de ville' },
        butane: { name: '🧯 Butane C₄H₁₀', formula: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O', color: '#ffaa00', desc: 'Gaz en bouteille' },
        essence: { name: '⛽ Octane C₈H₁₈', formula: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O', color: '#ff4400', desc: 'Carburant voiture' }
    };

    const challenges = [
        { q: "Combustion complète produit :", options: ["CO", "CO₂ + H₂O", "C"], ans: 1 },
        { q: "Le comburant est :", options: ["Le carburant", "L'oxygène", "Le CO₂"], ans: 1 },
        { q: "Les hydrocarbures contiennent :", options: ["C et H", "C et O", "H et O"], ans: 0 },
        { q: "Flamme bleue = combustion", options: ["Incomplète", "Complète", "Nulle"], ans: 1 }
    ];

    const startBurn = () => { setBurning(true); setTimeout(() => setBurning(false), 3000); };
    const startChallenge = () => { setMode('challenge'); setScore(0); nextQuestion(); };
    const nextQuestion = () => { setChallenge({ ...challenges[Math.floor(Math.random() * challenges.length)], answered: false }); setShowSuccess(false); };
    const checkAnswer = (idx) => {
        if (!challenge || challenge.answered) return;
        if (idx === challenge.ans) { setScore(s => s + 25); setShowSuccess(true); } else { alert("Non !"); }
        setChallenge({ ...challenge, answered: true });
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔥 Hydrocarbures" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-orange-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-orange-300 font-bold uppercase tracking-wider mb-1">Module Chimie</div>
                            <div className="text-xl font-black text-white leading-none">COMBUSTIONS</div>
                        </div>
                        <div className="text-right">
                            <GradeBadge score={score} />
                        </div>
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Faites brûler des hydrocarbures !" icon="🔥" />
                            </div>

                            <div className="space-y-2 mb-4">
                                {Object.entries(fuels).map(([k, f]) => (
                                    <button key={k} onClick={() => setFuel(k)}
                                        className={`w-full p-3 rounded-lg text-left text-sm transition-all flex justify-between items-center group ${fuel === k ? 'bg-orange-600 shadow-lg shadow-orange-900/30' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                        <div>
                                            <div className="font-bold">{f.name}</div>
                                            <div className="text-xs text-orange-200/70">{f.desc}</div>
                                        </div>
                                        {fuel === k && <span className="text-xl">👈</span>}
                                    </button>
                                ))}
                            </div>

                            <button onClick={startBurn} disabled={burning}
                                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95 group relative overflow-hidden
                                    ${burning ? 'bg-red-600 animate-pulse' : 'bg-gradient-to-r from-orange-600 to-red-600 hover:scale-[1.02]'}`}>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {burning ? '🔥 COMBUSTION EN COURS' : '🧨 ALLUMER LE FEU'}
                                </span>
                                {!burning && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />}
                            </button>

                            <div className="mt-4 p-3 bg-gray-900 rounded-lg text-xs font-mono text-center border border-white/10">
                                <div className="text-gray-500 mb-1">Équation de réaction :</div>
                                <div className="text-orange-300 font-bold text-sm tracking-wide">{fuels[fuel].formula}</div>
                            </div>

                            {burning && (
                                <div className="mt-2 text-center p-2 bg-orange-500/10 rounded border border-orange-500/20 animate-in fade-in slide-in-from-bottom">
                                    <div className="text-amber-300 font-bold">Produits : CO₂ + H₂O + Énergie 🔥</div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-orange-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Quiz Feu
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {!challenge && (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-900/20 transition-all transform hover:scale-105">
                                        Commencer le Défi
                                    </button>
                                </div>
                            )}

                            {challenge && (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm font-medium bg-black/20 p-3 rounded-lg border-l-2 border-orange-500">
                                        {challenge.q}
                                    </div>
                                    <div className="space-y-2">
                                        {challenge.options.map((opt, idx) => (
                                            <button key={idx} onClick={() => checkAnswer(idx)}
                                                disabled={challenge.answered}
                                                className={`w-full text-left p-3 rounded transition-all text-sm flex justify-between items-center
                                                    ${challenge.answered
                                                        ? idx === challenge.ans
                                                            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                                                            : 'bg-gray-800/50 text-gray-500'
                                                        : 'bg-white/5 hover:bg-white/10'
                                                    }
                                                `}>
                                                <span><span className="opacity-50 mr-2">{['A', 'B', 'C'][idx]}.</span> {opt}</span>
                                                {challenge.answered && idx === challenge.ans && <span>✅</span>}
                                            </button>
                                        ))}
                                    </div>
                                    {challenge.answered && (
                                        <button onClick={nextQuestion} className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-bold shadow-lg mt-4 hover:shadow-orange-500/20 transition-all">
                                            Suivant →
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
            <Cylinder args={[0.3, 0.3, 1, 32]} position={[0, -0.5, 0]}><meshStandardMaterial color="#333" /></Cylinder>
            {burning && (
                <group position={[0, 0.3, 0]}>
                    <Sphere args={[0.4]}><meshStandardMaterial color={fuels[fuel].color} emissive={fuels[fuel].color} emissiveIntensity={2} transparent opacity={0.8} /></Sphere>
                    <pointLight position={[0, 0.5, 0]} color={fuels[fuel].color} intensity={5} distance={5} />
                </group>
            )}
            <SuccessOverlay show={showSuccess} message="Parfait !" points={25} onNext={nextQuestion} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}
