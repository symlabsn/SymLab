'use client';
/**
 * Physique Terminale S - Simulations Avancées
 * Partie 3: Oscillations - Optique (Chapitres 10-12)
 * Mode Défi avec gamification complète
 */
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, GradeBadge, XPBar, PhaseSelector, MissionObjective } from './GamificationUtils';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// Timer visuel
// (ChallengeTimer supprimé car importé de GamificationUtils)

// ============================================================
// P10. OSCILLATIONS LC/RLC - VERSION AVANCÉE
// Mission: Ingénieur Radio - Syntoniser la bonne fréquence
// ============================================================
function OscillationsLCAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [inductance, setInductance] = useState(0.1);
    const [capacitance, setCapacitance] = useState(100);
    const [resistance, setResistance] = useState(10);
    const [time, setTime] = useState(0);
    const [isOscillating, setIsOscillating] = useState(false);

    const C_farads = capacitance * 1e-6;
    const omega0 = 1 / Math.sqrt(inductance * C_farads);
    const frequency = omega0 / (2 * Math.PI);
    const period = 1 / frequency;
    const periodMs = period * 1000;

    const gamma = resistance / (2 * inductance);
    const energyPos = isOscillating ? Math.cos(omega0 * time) * Math.exp(-gamma * time) : 0;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Syntonisation Audio', objective: 'Réglez f₀ = 100.0 Hz (±10) pour les basses fréquences.', targetFreq: 100, tolerance: 10 },
        { id: 2, title: 'Radio AM Standard', objective: 'Atteignez f₀ = 2000.0 Hz (±100) pour capter le signal.', targetFreq: 2000, tolerance: 100 },
        { id: 3, title: 'Transmission FM', objective: 'Configurez le circuit pour f₀ = 10000.0 Hz (±500).', targetFreq: 10000, tolerance: 500 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(frequency - mission.targetFreq) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [frequency, phase, mission, showSuccess]);

    useFrame((state, delta) => {
        if (isOscillating) {
            setTime(t => t + delta);
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 450);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={1.5}>
                {/* Condensateur */}
                <group position={[-1, 0, 0]}>
                    <mesh position={[-0.08, 0, 0]}>
                        <boxGeometry args={[0.04, 1, 0.6]} />
                        <meshStandardMaterial color="#3b82f6" />
                    </mesh>
                    <mesh position={[0.08, 0, 0]}>
                        <boxGeometry args={[0.04, 1, 0.6]} />
                        <meshStandardMaterial color="#3b82f6" />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.12, Math.max(0, energyPos), 0.5]} />
                        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={Math.abs(energyPos)} transparent opacity={0.6} />
                    </mesh>
                </group>

                {/* Bobine */}
                <group position={[1, 0, 0]}>
                    <mesh>
                        <torusGeometry args={[0.4, 0.1, 16, 32]} />
                        <meshStandardMaterial color="#8b5cf6" metalness={0.6} emissive="#a855f7" emissiveIntensity={Math.abs(1 - Math.abs(energyPos))} />
                    </mesh>
                </group>

                {/* Connexions */}
                <mesh position={[0, 1.2, 0]}>
                    <boxGeometry args={[0.4, 0.15, 0.15]} />
                    <meshStandardMaterial color="#78716c" />
                </mesh>
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="📡 Ingénierie Radio - LC/RLC"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-indigo-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="📻" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Inductance L: {inductance.toFixed(3)} H</label>
                                    <input type="range" min="0.001" max="1" step="0.001" value={inductance} onChange={(e) => setInductance(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-indigo-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Capacité C: {capacitance} µF</label>
                                    <input type="range" min="1" max="1000" step="1" value={capacitance} onChange={(e) => setCapacitance(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">R: {resistance} Ω</label>
                                    <input type="range" min="0" max="100" step="1" value={resistance} onChange={(e) => setResistance(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-red-500 rounded-full" />
                                </div>
                                <button onClick={() => { setIsOscillating(!isOscillating); setTime(0); }} className={`w-full py-1 rounded text-[10px] font-bold transition-all ${isOscillating ? 'bg-red-500' : 'bg-emerald-500'}`}>
                                    {isOscillating ? 'STOP OSCILLATION' : 'START OSCILLATION'}
                                </button>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-indigo-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-indigo-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">SIGNAL_ANALYZER_V10</div>
                                    <div className="text-[10px] font-mono"><span className="text-indigo-400">FRÉQUENCE f₀:</span> {frequency.toFixed(1)} Hz</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">PÉRIODE T₀:</span> {periodMs.toFixed(2)} ms</div>
                                    <div className="text-[9px] text-gray-500 mt-2">{gamma < omega0 ? "📈 Pseudo-périodique" : "📉 Apériodique"}</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    f₀ = 1 / (2π√(LC))
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Circuit syntonisé ! Mission "${mission?.title}" réussie.`}
                points={450}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P11. OSCILLATIONS MÉCANIQUES - VERSION AVANCÉE
// Mission: Horloger Précision - Régler une horloge
// ============================================================
function OscillationsMecaAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [pendulumLength, setPendulumLength] = useState(1);
    const [springK, setSpringK] = useState(100);
    const [mass, setMass] = useState(1);
    const [mode, setMode] = useState('pendulum'); // 'pendulum' or 'spring'
    const [time, setTime] = useState(0);
    const [isOscillating, setIsOscillating] = useState(false);

    const g = 9.81;
    const pendulumPeriod = 2 * Math.PI * Math.sqrt(pendulumLength / g);
    const springPeriod = 2 * Math.PI * Math.sqrt(mass / springK);
    const currentPeriod = mode === 'pendulum' ? pendulumPeriod : springPeriod;

    const omega = 2 * Math.PI / currentPeriod;
    const angle = isOscillating ? Math.sin(omega * time) * 0.4 : 0;
    const springDisplacement = isOscillating ? Math.sin(omega * time) * 0.4 : 0;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Horloge Comtoise', objective: 'Réglez T = 2.00 s (±0.05) pour une horloge de salon.', targetT: 2.0, tolerance: 0.05 },
        { id: 2, title: 'Métronome Musicien', objective: 'Atteignez T = 0.50 s (±0.03) pour un tempo rapide.', targetT: 0.5, tolerance: 0.03 },
        { id: 3, title: 'Balance de Précision', objective: 'Configurez pour T = 1.00 s (±0.02).', targetT: 1.0, tolerance: 0.02 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(currentPeriod - mission.targetT) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [currentPeriod, phase, mission, showSuccess]);

    useFrame((state, delta) => {
        if (isOscillating) {
            setTime(t => t + delta);
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 500);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={1.5}>
                {mode === 'pendulum' ? (
                    <group position={[0, 1.5, 0]} rotation={[0, 0, angle]}>
                        <Line points={[[0, 0, 0], [0, -pendulumLength * 1.5, 0]]} color="#fbbf24" lineWidth={2} />
                        <mesh position={[0, -pendulumLength * 1.5, 0]}>
                            <sphereGeometry args={[0.2, 32, 32]} />
                            <meshStandardMaterial color="#ef4444" metalness={0.8} />
                        </mesh>
                    </group>
                ) : (
                    <group position={[0, 0, 0]}>
                        <mesh position={[0, 1.5, 0]}>
                            <boxGeometry args={[1, 0.1, 0.5]} />
                            <meshStandardMaterial color="#64748b" />
                        </mesh>
                        {/* Spring visual */}
                        <mesh position={[0, 0.75 + springDisplacement / 2, 0]}>
                            <cylinderGeometry args={[0.08, 0.08, 1.5 - springDisplacement, 16]} />
                            <meshStandardMaterial color="#10b981" wireframe />
                        </mesh>
                        <mesh position={[0, springDisplacement, 0]}>
                            <boxGeometry args={[0.4, 0.4, 0.4]} />
                            <meshStandardMaterial color="#3b82f6" />
                        </mesh>
                    </group>
                )}
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🕰️ Haute Horlogerie - Oscillations"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-amber-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-4" />

                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('pendulum')} className={`flex-1 py-1 rounded text-[10px] font-bold border transition-all ${mode === 'pendulum' ? 'bg-red-500/20 border-red-500' : 'bg-gray-800 border-transparent'}`}>PENDULE</button>
                            <button onClick={() => setMode('spring')} className={`flex-1 py-1 rounded text-[10px] font-bold border transition-all ${mode === 'spring' ? 'bg-emerald-500/20 border-emerald-500' : 'bg-gray-800 border-transparent'}`}>RESSORT</button>
                        </div>

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🕰️" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                {mode === 'pendulum' ? (
                                    <div>
                                        <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Longueur L: {pendulumLength.toFixed(2)} m</label>
                                        <input type="range" min="0.1" max="2.5" step="0.01" value={pendulumLength} onChange={(e) => setPendulumLength(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-amber-500 rounded-full" />
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Raideur k: {springK} N/m</label>
                                            <input type="range" min="10" max="500" step="1" value={springK} onChange={(e) => setSpringK(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-emerald-500 rounded-full" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Masse m: {mass.toFixed(1)} kg</label>
                                            <input type="range" min="0.1" max="5" step="0.1" value={mass} onChange={(e) => setMass(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500 rounded-full" />
                                        </div>
                                    </div>
                                )}
                                <button onClick={() => { setIsOscillating(!isOscillating); setTime(0); }} className={`w-full py-1 rounded text-[10px] font-bold transition-all ${isOscillating ? 'bg-red-500' : 'bg-emerald-500'}`}>
                                    {isOscillating ? 'ARRÊTER' : 'LANCER'}
                                </button>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-amber-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-amber-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">CHRONO_MECHA_STATS</div>
                                    <div className="text-[10px] font-mono"><span className="text-amber-400">PÉRIODE T₀:</span> {currentPeriod.toFixed(3)} s</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">FRÉQUENCE f:</span> {(1 / currentPeriod).toFixed(2)} Hz</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    {mode === 'pendulum' ? 'T = 2π√(L/g)' : 'T = 2π√(m/k)'}
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Précision atteinte ! Mission "${mission?.title}" réussie.`}
                points={500}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P12. INTERFÉRENCES LUMINEUSES - VERSION AVANCÉE
// Mission: Physicien Optique - Mesurer la longueur d'onde
// ============================================================
function InterferencesAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [slitSeparation, setSlitSeparation] = useState(0.5);
    const [screenDistance, setScreenDistance] = useState(2);
    const [wavelength, setWavelength] = useState(550);

    const wavelengthM = wavelength * 1e-9;
    const slitSeparationM = slitSeparation * 1e-3;
    const interfringe = (wavelengthM * screenDistance) / slitSeparationM;
    const interfringeMm = interfringe * 1000;

    const getColor = (wl) => {
        if (wl < 450) return '#8b5cf6';
        if (wl < 495) return '#3b82f6';
        if (wl < 570) return '#22c55e';
        if (wl < 590) return '#eab308';
        if (wl < 620) return '#f97316';
        return '#ef4444';
    };

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Calibrage Laser Rouge', objective: 'Ajustez i = 3.00 mm (±0.2) pour caler le laser He-Ne.', targetI: 3.0, tolerance: 0.2 },
        { id: 2, title: 'Analyse Spectrale Verte', objective: 'Ciblez i = 1.50 mm (±0.1) pour une précision spectrale.', targetI: 1.5, tolerance: 0.1 },
        { id: 3, title: 'Optique Quantique Bleue', objective: 'Configurez pour i = 0.80 mm (±0.05).', targetI: 0.8, tolerance: 0.05 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(interfringeMm - mission.targetI) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [interfringeMm, phase, mission, showSuccess]);

    const handleSuccess = () => {
        setScore(s => s + 550);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    const fringes = useMemo(() => {
        const result = [];
        for (let i = -8; i <= 8; i++) {
            result.push({ position: i * interfringeMm * 0.2, intensity: Math.cos(i * 0.2) ** 2 });
        }
        return result;
    }, [interfringeMm]);

    return (
        <group>
            {/* Scène 3D */}
            <group scale={1.2}>
                <mesh position={[-3, 0, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={2} />
                </mesh>

                <group position={[-1, 0, 0]}>
                    <mesh><boxGeometry args={[0.05, 1.5, 0.8]} /><meshStandardMaterial color="#1e293b" /></mesh>
                    <mesh position={[0, slitSeparation * 0.2, 0]}><boxGeometry args={[0.1, 0.02, 0.5]} /><meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={0.5} /></mesh>
                    <mesh position={[0, -slitSeparation * 0.2, 0]}><boxGeometry args={[0.1, 0.02, 0.5]} /><meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={0.5} /></mesh>
                </group>

                <group position={[2, 0, 0]}>
                    <mesh><boxGeometry args={[0.1, 4, 2]} /><meshStandardMaterial color="#020617" /></mesh>
                    {fringes.map((f, i) => (
                        <mesh key={i} position={[0.06, f.position, 0]}>
                            <boxGeometry args={[0.02, 0.1, 1.8]} />
                            <meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={f.intensity * 2} transparent opacity={f.intensity} />
                        </mesh>
                    ))}
                </group>
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🌈 Laboratoire Optique - Young"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-emerald-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🔬" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Wavelength λ: {wavelength} nm</label>
                                    <input type="range" min="400" max="750" step="1" value={wavelength} onChange={(e) => setWavelength(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-emerald-500 rounded-full" style={{ accentColor: getColor(wavelength) }} />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Slit Gap a: {slitSeparation.toFixed(2)} mm</label>
                                    <input type="range" min="0.1" max="2.0" step="0.01" value={slitSeparation} onChange={(e) => setSlitSeparation(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Distance D: {screenDistance.toFixed(1)} m</label>
                                    <input type="range" min="0.5" max="5.0" step="0.1" value={screenDistance} onChange={(e) => setScreenDistance(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-red-500 rounded-full" />
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-emerald-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-emerald-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">OPTIC_ANALYZER_700</div>
                                    <div className="text-[10px] font-mono"><span className="text-emerald-400">INTERFRANGE i:</span> {interfringeMm.toFixed(2)} mm</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">OFFSET:</span> Δx = {interfringeMm.toFixed(3)}</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    i = λ · D / a
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Alignement parfait ! Mission "${mission?.title}" réussie.`}
                points={550}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// Export Partie 3
export { OscillationsLCAdvanced as OscillationsLCTS };
export { OscillationsMecaAdvanced as OscillationsMecaTS };
export { InterferencesAdvanced as InterferencesTS };
