'use client';
import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Sphere, Box, Cylinder, Line, Float } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanelWrapper';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';
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
        lampe: { name: '💡 Lampe 6V', U: 6, R: 3, desc: 'Éclairage' },
        moteur: { name: '⚙️ Moteur 12V', U: 12, R: 6, desc: 'Mouvement' },
        chauffage: { name: '🔥 Résistance', U: 24, R: 8, desc: 'Chauffage' },
        led: { name: '🔴 LED', U: 3, R: 150, desc: 'Indicateur' }
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
            <DraggableHtmlPanel title="⚡ Loi d'Ohm" showCloseButton={false} defaultPosition="bottom-center" className="w-[340px] text-white">
                <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <div className="flex gap-2">
                        <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Labo</button>
                        <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                    </div>
                    {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                </div>

                {mode === 'explore' ? (
                    <>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {Object.entries(scenarios).map(([k, sc]) => (
                                <button key={k} onClick={() => applyScenario(k)} className="p-2 bg-gray-800 rounded text-xs hover:bg-gray-700">
                                    <div className="font-bold">{sc.name}</div>
                                </button>
                            ))}
                        </div>
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
                        <div className="mt-4 p-3 bg-gray-900 rounded-lg text-center">
                            <div className="text-gray-400 text-xs">I = U / R</div>
                            <div className="text-3xl font-bold text-green-400">{current.toFixed(2)} A</div>
                        </div>
                    </>
                ) : (
                    <div className="bg-gray-800 p-3 rounded-xl">
                        {challenge && (
                            <div className="space-y-3">
                                <div className="text-sm">{challenge.q}</div>
                                {challenge.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)} className="w-full text-left p-2 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                        {['A', 'B', 'C'][idx]}. {opt}
                                    </button>
                                ))}
                                {challenge.answered && <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">Suivant →</button>}
                            </div>
                        )}
                    </div>
                )}
            </DraggableHtmlPanel>
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
        ampoule: { name: '💡 Ampoule', input: 'Électrique', outputs: ['Lumineuse', 'Thermique'], efficiency: 0.1 },
        moteur: { name: '⚙️ Moteur', input: 'Électrique', outputs: ['Mécanique', 'Thermique'], efficiency: 0.85 },
        panneau: { name: '☀️ Panneau Solaire', input: 'Lumineuse', outputs: ['Électrique'], efficiency: 0.2 },
        voiture: { name: '🚗 Voiture', input: 'Chimique', outputs: ['Mécanique', 'Thermique'], efficiency: 0.25 }
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
            <DraggableHtmlPanel title="🔄 Transformations d'Énergie" showCloseButton={false} defaultPosition="bottom-center" className="w-[340px] text-white">
                <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <div className="flex gap-2">
                        <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-green-600' : 'bg-gray-700'}`}>Explorer</button>
                        <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                    </div>
                    {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                </div>

                {mode === 'explore' ? (
                    <>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {Object.entries(devices).map(([k, d]) => (
                                <button key={k} onClick={() => setDevice(k)} className={`p-2 rounded text-xs ${device === k ? 'bg-green-600' : 'bg-gray-800'}`}>
                                    {d.name}
                                </button>
                            ))}
                        </div>
                        <div className="p-3 bg-gray-900 rounded-lg">
                            <div className="text-center mb-2">
                                <span className="text-cyan-400">{dev.input}</span> → <span className="text-yellow-400">{dev.outputs.join(' + ')}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Rendement</span>
                                <span className="text-green-400 font-bold">{(dev.efficiency * 100).toFixed(0)}%</span>
                            </div>
                            <div className="mt-2 h-4 bg-gray-700 rounded overflow-hidden flex">
                                <div className="bg-green-500" style={{ width: `${dev.efficiency * 100}%` }} />
                                <div className="bg-red-500" style={{ width: `${(1 - dev.efficiency) * 100}%` }} />
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                                <span className="text-green-400">Utile: {usefulEnergy.toFixed(0)} J</span>
                                <span className="text-red-400">Perdue: {wastedEnergy.toFixed(0)} J</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="bg-gray-800 p-3 rounded-xl">
                        {challenge && (
                            <div className="space-y-3">
                                <div className="text-sm">{challenge.q}</div>
                                {challenge.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)} className="w-full text-left p-2 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                        {['A', 'B', 'C'][idx]}. {opt}
                                    </button>
                                ))}
                                {challenge.answered && <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">Suivant →</button>}
                            </div>
                        )}
                    </div>
                )}
            </DraggableHtmlPanel>
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
        the: { name: '🍵 Thé sucré', m: 30, v: 250, desc: 'Ataya' },
        serum: { name: '💉 Sérum', m: 9, v: 1000, desc: 'NaCl 0.9%' },
        sirop: { name: '🧃 Sirop', m: 500, v: 1000, desc: 'Concentré' },
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
            <DraggableHtmlPanel title="🧪 Solutions Aqueuses" showCloseButton={false} defaultPosition="bottom-center" className="w-[340px] text-white">
                <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <div className="flex gap-2">
                        <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                        <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                    </div>
                    {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                </div>

                {mode === 'explore' ? (
                    <>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {Object.entries(scenarios).map(([k, sc]) => (
                                <button key={k} onClick={() => applyScenario(k)} className="p-2 bg-gray-800 rounded text-xs hover:bg-gray-700">
                                    <div className="font-bold">{sc.name}</div>
                                    <div className="text-gray-400 text-[10px]">{sc.desc}</div>
                                </button>
                            ))}
                        </div>
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-xs"><span>Masse soluté m</span><span className="text-cyan-400">{mass} g</span></div>
                                <input type="range" min={1} max={200} value={mass} onChange={(e) => setMass(parseInt(e.target.value))} className="w-full accent-cyan-500" />
                            </div>
                            <div>
                                <div className="flex justify-between text-xs"><span>Volume V</span><span className="text-blue-400">{volume} mL</span></div>
                                <input type="range" min={100} max={2000} step={50} value={volume} onChange={(e) => setVolume(parseInt(e.target.value))} className="w-full accent-blue-500" />
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-gray-900 rounded-lg text-center">
                            <div className="text-gray-400 text-xs">C = m / V</div>
                            <div className="text-3xl font-bold text-cyan-400">{concentration.toFixed(1)} g/L</div>
                        </div>
                    </>
                ) : (
                    <div className="bg-gray-800 p-3 rounded-xl">
                        {challenge && (
                            <div className="space-y-3">
                                <div className="text-sm">{challenge.q}</div>
                                {challenge.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)} className="w-full text-left p-2 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                        {['A', 'B', 'C'][idx]}. {opt}
                                    </button>
                                ))}
                                {challenge.answered && <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">Suivant →</button>}
                            </div>
                        )}
                    </div>
                )}
            </DraggableHtmlPanel>
            <Cylinder args={[0.8, 0.8, 2, 32]} position={[0, 0, 0]}><meshStandardMaterial color="#4488ff" transparent opacity={0.6} /></Cylinder>
            <SuccessOverlay show={showSuccess} message="Super !" points={25} onNext={nextQuestion} />
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
            <DraggableHtmlPanel title="🧪 Acides, Bases et pH" showCloseButton={false} defaultPosition="bottom-center" className="w-[340px] text-white">
                <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <div className="flex gap-2">
                        <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-green-600' : 'bg-gray-700'}`}>Explorer</button>
                        <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                    </div>
                    {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                </div>

                {mode === 'explore' ? (
                    <>
                        <div className="flex flex-wrap gap-1 mb-3">
                            {Object.entries(solutions).map(([k, s]) => (
                                <button key={k} onClick={() => setPh(s.ph)} className={`px-2 py-1 rounded text-xs ${ph === s.ph ? 'ring-2 ring-white' : 'bg-gray-800'}`}>
                                    {s.name}
                                </button>
                            ))}
                        </div>
                        <div className="text-center mb-3">
                            <div className="text-5xl font-bold" style={{ color: getColor(ph) }}>{ph}</div>
                            <div className="text-lg">{getType(ph)}</div>
                        </div>
                        <div className="h-6 rounded-full flex overflow-hidden">
                            {[...Array(15)].map((_, i) => <div key={i} className="flex-1" style={{ backgroundColor: getColor(i) }} />)}
                        </div>
                        <input type="range" min={0} max={14} value={ph} onChange={(e) => setPh(parseInt(e.target.value))} className="w-full mt-2" />
                    </>
                ) : (
                    <div className="bg-gray-800 p-3 rounded-xl">
                        {challenge && (
                            <div className="space-y-3">
                                <div className="text-sm">{challenge.q}</div>
                                {challenge.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)} className="w-full text-left p-2 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                        {['A', 'B', 'C'][idx]}. {opt}
                                    </button>
                                ))}
                                {challenge.answered && <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">Suivant →</button>}
                            </div>
                        )}
                    </div>
                )}
            </DraggableHtmlPanel>
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
    const [reagent, setReagent] = useState('acide');
    const [reacting, setReacting] = useState(false);
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const metals = {
        fer: { name: '🔩 Fer', color: '#888888', reactive: true },
        zinc: { name: '⬜ Zinc', color: '#aaaaaa', reactive: true },
        or: { name: '👑 Or', color: '#ffd700', reactive: false },
        sodium: { name: '🔥 Sodium', color: '#ff6600', reactive: true }
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
            <DraggableHtmlPanel title="⚙️ Propriétés des Métaux" showCloseButton={false} defaultPosition="bottom-center" className="w-[340px] text-white">
                <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <div className="flex gap-2">
                        <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-gray-600' : 'bg-gray-700'}`}>Labo</button>
                        <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                    </div>
                    {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                </div>

                {mode === 'explore' ? (
                    <>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {Object.entries(metals).map(([k, m]) => (
                                <button key={k} onClick={() => setMetal(k)} className={`p-2 rounded text-xs ${metal === k ? 'ring-2 ring-white' : 'bg-gray-800'}`}>
                                    {m.name} {!m.reactive && '(noble)'}
                                </button>
                            ))}
                        </div>
                        <button onClick={doReaction} disabled={!metals[metal].reactive || reacting}
                            className={`w-full py-3 rounded-lg font-bold ${metals[metal].reactive ? 'bg-red-600 hover:bg-red-500' : 'bg-gray-600 cursor-not-allowed'}`}>
                            {reacting ? '💨 Réaction en cours...' : metals[metal].reactive ? '🧪 Ajouter Acide' : '❌ Métal noble - pas de réaction'}
                        </button>
                        {reacting && <div className="mt-2 p-2 bg-yellow-500/20 rounded text-center animate-pulse">H₂ ↑ Bulles de dihydrogène !</div>}
                    </>
                ) : (
                    <div className="bg-gray-800 p-3 rounded-xl">
                        {challenge && (
                            <div className="space-y-3">
                                <div className="text-sm">{challenge.q}</div>
                                {challenge.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)} className="w-full text-left p-2 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                        {['A', 'B', 'C'][idx]}. {opt}
                                    </button>
                                ))}
                                {challenge.answered && <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">Suivant →</button>}
                            </div>
                        )}
                    </div>
                )}
            </DraggableHtmlPanel>
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
        methane: { name: '🔥 Méthane CH₄', formula: 'CH₄ + 2O₂ → CO₂ + 2H₂O', color: '#00aaff' },
        butane: { name: '🧯 Butane C₄H₁₀', formula: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O', color: '#ffaa00' },
        essence: { name: '⛽ Octane C₈H₁₈', formula: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O', color: '#ff4400' }
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
            <DraggableHtmlPanel title="🔥 Hydrocarbures" showCloseButton={false} defaultPosition="bottom-center" className="w-[340px] text-white">
                <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
                    <div className="flex gap-2">
                        <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-orange-600' : 'bg-gray-700'}`}>Labo</button>
                        <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Quiz 🏆</button>
                    </div>
                    {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                </div>

                {mode === 'explore' ? (
                    <>
                        <div className="space-y-2 mb-3">
                            {Object.entries(fuels).map(([k, f]) => (
                                <button key={k} onClick={() => setFuel(k)} className={`w-full p-2 rounded text-left text-sm ${fuel === k ? 'bg-orange-600' : 'bg-gray-800'}`}>
                                    {f.name}
                                </button>
                            ))}
                        </div>
                        <button onClick={startBurn} disabled={burning}
                            className={`w-full py-3 rounded-lg font-bold ${burning ? 'bg-red-500 animate-pulse' : 'bg-orange-600 hover:bg-orange-500'}`}>
                            {burning ? '🔥 COMBUSTION EN COURS' : '🔥 Allumer'}
                        </button>
                        <div className="mt-3 p-2 bg-gray-900 rounded text-xs font-mono text-center">
                            {fuels[fuel].formula}
                        </div>
                        {burning && <div className="mt-2 text-center text-sm">→ CO₂ + H₂O + Énergie 🔥</div>}
                    </>
                ) : (
                    <div className="bg-gray-800 p-3 rounded-xl">
                        {challenge && (
                            <div className="space-y-3">
                                <div className="text-sm">{challenge.q}</div>
                                {challenge.options.map((opt, idx) => (
                                    <button key={idx} onClick={() => checkAnswer(idx)} className="w-full text-left p-2 rounded bg-gray-700 hover:bg-gray-600 text-sm">
                                        {['A', 'B', 'C'][idx]}. {opt}
                                    </button>
                                ))}
                                {challenge.answered && <button onClick={nextQuestion} className="w-full py-2 bg-purple-600 rounded font-bold">Suivant →</button>}
                            </div>
                        )}
                    </div>
                )}
            </DraggableHtmlPanel>
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
