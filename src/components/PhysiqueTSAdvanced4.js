'use client';
/**
 * Physique Terminale S - Simulations Avancées
 * Partie 4: Phénomènes Corpusculaires (Chapitres 13-15)
 * Mode Défi avec gamification complète
 */
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, GradeBadge, XPBar, PhaseSelector, MissionObjective } from './GamificationUtils';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// (ChallengeTimer supprimé car importé de GamificationUtils)

// ============================================================
// P13. EFFET PHOTOÉLECTRIQUE - VERSION AVANCÉE
// Mission: Ingénieur Cellule Solaire - Optimiser la production
// ============================================================
function PhotoelectriqueAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [wavelength, setWavelength] = useState(400);
    const [intensity, setIntensity] = useState(50);
    const [metalType, setMetalType] = useState('cesium');
    const [time, setTime] = useState(0);

    const h = 6.626e-34;
    const c = 3e8;
    const eV = 1.602e-19;

    const metals = {
        cesium: { name: 'Césium', W: 1.9, color: '#ffd700' },
        sodium: { name: 'Sodium', W: 2.3, color: '#c0c0c0' },
        zinc: { name: 'Zinc', W: 4.3, color: '#808080' },
        cuivre: { name: 'Cuivre', W: 4.7, color: '#b87333' }
    };

    const W = metals[metalType].W;
    const wavelengthM = wavelength * 1e-9;
    const photonEnergy = (h * c / wavelengthM) / eV;
    const kineticEnergy = Math.max(0, photonEnergy - W);
    const isPhotoelectric = photonEnergy > W;
    const lambdaSeuil = (h * c) / (W * eV) * 1e9;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Cellule Domestique', objective: 'Générez des électrons à Ec = 0.50 eV (±0.1) pour une LED.', targetE: 0.5, tolerance: 0.1 },
        { id: 2, title: 'Panneau Satellite', objective: 'Optimisez pour Ec = 1.20 eV (±0.15) en orbite.', targetE: 1.2, tolerance: 0.15 },
        { id: 3, title: 'Capteur UV Industriel', objective: 'Atteignez Ec = 2.50 eV (±0.2) avec des UV.', targetE: 2.5, tolerance: 0.2 }
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
            if (isPhotoelectric && Math.abs(kineticEnergy - mission.targetE) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [kineticEnergy, isPhotoelectric, phase, mission, showSuccess]);

    useFrame((state, delta) => {
        setTime(t => t + delta);
    });

    const handleSuccess = () => {
        setScore(s => s + 600);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    const getColor = (wl) => {
        if (wl < 450) return '#8b5cf6';
        if (wl < 495) return '#3b82f6';
        if (wl < 570) return '#22c55e';
        if (wl < 590) return '#eab308';
        if (wl < 620) return '#f97316';
        return '#ef4444';
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={1.2}>
                <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <boxGeometry args={[4, 3, 0.2]} />
                    <meshStandardMaterial color={metals[metalType].color} metalness={0.8} roughness={0.2} />
                </mesh>

                <mesh position={[-2, 2.5, 0]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={2} />
                </mesh>

                {/* Photons */}
                {Array.from({ length: 5 }).map((_, i) => {
                    const phaseMult = (time * 1.5 + i * 0.4) % 1;
                    return (
                        <mesh key={`p-${i}`} position={[-2 + phaseMult * 2, 2.5 - phaseMult * 3.5, 0]}>
                            <sphereGeometry args={[0.05, 8, 8]} />
                            <meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={1} />
                        </mesh>
                    );
                })}

                {/* Électrons */}
                {isPhotoelectric && Array.from({ length: 5 }).map((_, i) => {
                    const phaseMult = (time * 2 + i * 0.5) % 1;
                    return (
                        <mesh key={`e-${i}`} position={[phaseMult * kineticEnergy * 0.5, -0.8 + phaseMult * 2, 0]}>
                            <sphereGeometry args={[0.04, 8, 8]} />
                            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} />
                        </mesh>
                    );
                })}
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="☀️ Photovoltaïque - Effet Einstein"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-yellow-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🔋" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Métal Cible</label>
                                    <select value={metalType} onChange={(e) => setMetalType(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-1 text-[10px]">
                                        {Object.entries(metals).map(([k, v]) => <option key={k} value={k}>{v.name} (W={v.W}eV)</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">λ: {wavelength} nm</label>
                                    <input type="range" min="200" max="800" value={wavelength} onChange={(e) => setWavelength(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-yellow-500 rounded-full" />
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-yellow-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-yellow-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">QUANTUM_CELL_X1</div>
                                    <div className="text-[10px] font-mono"><span className="text-yellow-400">ÉNERGIE Ec:</span> {kineticEnergy.toFixed(2)} eV</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">SEUIL λ₀:</span> {lambdaSeuil.toFixed(0)} nm</div>
                                    <div className={`text-[9px] mt-1 ${isPhotoelectric ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {isPhotoelectric ? "✓ ÉMISSION ACTIVE" : "✗ ÉNERGIE INSUFFISANTE"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Courant établi ! Mission "${mission?.title}" réussie.`}
                points={600}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P14. NIVEAUX D'ÉNERGIE - VERSION AVANCÉE
// Mission: Spectroscopiste - Identifier les raies spectrales
// ============================================================
function NiveauxEnergieAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [currentLevel, setCurrentLevel] = useState(1);
    const [selectedTransition, setSelectedTransition] = useState(null);
    const [showPhoton, setShowPhoton] = useState(false);
    const [photonPhase, setPhotonPhase] = useState(0);

    const h = 6.626e-34;
    const c = 3e8;
    const eV = 1.602e-19;

    const energyLevels = [
        { n: 1, E: -13.6, y: -2 },
        { n: 2, E: -3.4, y: -0.5 },
        { n: 3, E: -1.51, y: 0.5 },
        { n: 4, E: -0.85, y: 1.2 },
        { n: 5, E: -0.54, y: 1.7 },
        { n: 6, E: -0.38, y: 2.0 }
    ];

    const transitions = [
        { from: 3, to: 2, name: "Hα (rouge)", targetWl: 656 },
        { from: 4, to: 2, name: "Hβ (cyan)", targetWl: 486 },
        { from: 5, to: 2, name: "Hγ (bleu)", targetWl: 434 },
        { from: 6, to: 2, name: "Hδ (violet)", targetWl: 410 }
    ];

    const getTransitionWavelength = (from, to) => {
        const E1 = energyLevels.find(l => l.n === from).E;
        const E2 = energyLevels.find(l => l.n === to).E;
        const deltaE = Math.abs(E1 - E2) * eV;
        return (h * c / deltaE) * 1e9;
    };

    const getColorFromWavelength = (wl) => {
        if (wl > 620) return '#ef4444';
        if (wl > 590) return '#f97316';
        if (wl > 570) return '#eab308';
        if (wl > 495) return '#22c55e';
        if (wl > 450) return '#22d3ee';
        return '#8b5cf6';
    };

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Raie de Balmer Rouge', objective: 'Identifiez la transition générant λ = 656 nm (Hα).', targetWl: 656, tolerance: 10 },
        { id: 2, title: 'Spectre Cyan', objective: 'Trouvez la raie Hβ correspondant à λ = 486 nm.', targetWl: 486, tolerance: 10 },
        { id: 3, title: 'Ultraviolet Proche', objective: 'Identifiez la raie Hδ à λ = 410 nm.', targetWl: 410, tolerance: 10 }
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
        if (phase === 'mission' && selectedTransition && !showSuccess) {
            const actualWl = getTransitionWavelength(selectedTransition.from, selectedTransition.to);
            if (Math.abs(actualWl - mission.targetWl) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [selectedTransition, phase, mission, showSuccess]);

    useFrame((state, delta) => {
        if (showPhoton) {
            setPhotonPhase(p => {
                if (p >= 1) {
                    setShowPhoton(false);
                    return 0;
                }
                return p + delta * 2;
            });
        }
    });

    const executeTransition = (trans) => {
        setSelectedTransition(trans);
        setCurrentLevel(trans.from);
        setShowPhoton(true);
        setPhotonPhase(0);
        setTimeout(() => setCurrentLevel(trans.to), 300);
    };

    const handleSuccess = () => {
        setScore(s => s + 650);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
        setSelectedTransition(null);
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={1.2}>
                {energyLevels.map((lvl) => (
                    <group key={lvl.n} position={[0, lvl.y, 0]}>
                        <Line points={[[-2, 0, 0], [2, 0, 0]]} color={currentLevel === lvl.n ? '#22d3ee' : '#475569'} lineWidth={currentLevel === lvl.n ? 3 : 1} />
                        <Text position={[-2.4, 0, 0]} fontSize={0.12} color="white">n={lvl.n}</Text>
                        <Text position={[2.4, 0, 0]} fontSize={0.1} color="#94a3b8">{lvl.E} eV</Text>
                    </group>
                ))}

                <mesh position={[0, energyLevels.find(l => l.n === currentLevel)?.y || 0, 0.1]}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} />
                </mesh>

                {showPhoton && selectedTransition && (() => {
                    const wl = getTransitionWavelength(selectedTransition.from, selectedTransition.to);
                    const color = getColorFromWavelength(wl);
                    const fromY = energyLevels.find(l => l.n === selectedTransition.from).y;
                    const toY = energyLevels.find(l => l.n === selectedTransition.to).y;
                    return (
                        <mesh position={[0.5 + photonPhase * 2, fromY + (toY - fromY) * photonPhase, 0]}>
                            <sphereGeometry args={[0.08, 8, 8]} />
                            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
                        </mesh>
                    );
                })()}

                {/* Spectre visible */}
                <group position={[0, -3.2, 0]}>
                    <mesh><boxGeometry args={[4, 0.4, 0.1]} /><meshStandardMaterial color="#020617" /></mesh>
                    {transitions.map((t, i) => {
                        const wl = getTransitionWavelength(t.from, t.to);
                        return (
                            <mesh key={i} position={[((wl - 400) / 300) * 3.5 - 1.75, 0, 0.1]}>
                                <boxGeometry args={[0.04, 0.3, 0.02]} />
                                <meshStandardMaterial color={getColorFromWavelength(wl)} emissive={getColorFromWavelength(wl)} emissiveIntensity={1} />
                            </mesh>
                        );
                    })}
                </group>
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🌈 Spectroscopie Atomique"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-indigo-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2500} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🔬" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="grid grid-cols-2 gap-2">
                                {transitions.map((t, i) => (
                                    <button
                                        key={i}
                                        onClick={() => executeTransition(t)}
                                        style={{ borderLeft: `3px solid ${getColorFromWavelength(t.targetWl)}` }}
                                        className={`p-2 rounded bg-gray-800/50 hover:bg-gray-700 transition-all text-left group`}
                                    >
                                        <div className="text-[9px] font-bold text-gray-400">n={t.from} → n={t.to}</div>
                                        <div className="text-[10px] text-white"> Balmer-{i + 1}</div>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-indigo-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-indigo-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">SPECTRA_SCANNR_V5</div>
                                    {selectedTransition ? (
                                        <>
                                            <div className="text-[10px] font-mono"><span className="text-indigo-400">λ:</span> {getTransitionWavelength(selectedTransition.from, selectedTransition.to).toFixed(1)} nm</div>
                                            <div className="text-[10px] font-mono"><span className="text-blue-400">ΔE:</span> {(Math.abs(energyLevels.find(l => l.n === selectedTransition.from).E - energyLevels.find(l => l.n === selectedTransition.to).E)).toFixed(2)} eV</div>
                                        </>
                                    ) : (
                                        <div className="text-[9px] text-gray-500 animate-pulse italic">ATTENTE_TRANSITION...</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Raie identifiée ! Mission "${mission?.title}" réussie.`}
                points={650}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P15. RÉACTIONS NUCLÉAIRES - VERSION AVANCÉE
// Mission: Ingénieur Nucléaire - Contrôler la réaction
// ============================================================
function NucleaireAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [controlRods, setControlRods] = useState(50);
    const [neutronCount, setNeutronCount] = useState(1);
    const [time, setTime] = useState(0);
    const [isReacting, setIsReacting] = useState(false);
    const [chainReaction, setChainReaction] = useState([]);

    const k = (120 - controlRods) / 60; // Facteur de multiplication k
    const power = Math.min(100, neutronCount * k * 8);
    const isCritical = k > 1.1 && controlRods < 40;
    const isStable = k >= 0.9 && k <= 1.1;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Mode Veille', objective: 'Maintenez une puissance P = 20% (±5%) pour le réseau urbain.', targetP: 20, tolerance: 5 },
        { id: 2, title: 'Pic de Consommation', objective: 'Stabilisez à P = 75% (±5%) pendant la tempête.', targetP: 75, tolerance: 5 },
        { id: 3, title: 'Test de Criticité', objective: 'Atteignez P = 95% (±3%) sans fusion du cœur.', targetP: 95, tolerance: 3 }
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
            if (isReacting && Math.abs(power - mission.targetP) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [power, isReacting, phase, mission, showSuccess]);

    useFrame((state, delta) => {
        if (isReacting) {
            setTime(t => t + delta);
            setNeutronCount(n => Math.min(100, Math.max(0.1, n * (1 + (k - 1) * delta * 2))));

            if (Math.random() < k * 0.2) {
                setChainReaction(prev => [...prev.slice(-15), {
                    id: Date.now() + Math.random(),
                    x: (Math.random() - 0.5) * 2.5,
                    y: (Math.random() - 0.5) * 2.5,
                    z: (Math.random() - 0.5) * 2.5
                }]);
            }
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 700);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Cœur du réacteur */}
            <group scale={1.2}>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1.5, 1.5, 3, 32]} />
                    <meshStandardMaterial
                        color={isCritical ? "#ef4444" : isStable ? "#22c55e" : "#3b82f6"}
                        emissive={isCritical ? "#ef4444" : "#22d3ee"}
                        emissiveIntensity={power / 100}
                        transparent
                        opacity={0.6}
                    />
                </mesh>

                {/* Barres de contrôle graphitées */}
                {[-0.8, 0, 0.8].map((x, i) => (
                    <mesh key={i} position={[x, 1 + (controlRods / 100) * 2, 0]}>
                        <cylinderGeometry args={[0.1, 0.1, 2, 8]} />
                        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
                    </mesh>
                ))}

                {/* Neutrons & Fragments - Particules dynamiques */}
                {chainReaction.map((p) => (
                    <mesh key={p.id} position={[p.x, p.y, p.z]}>
                        <sphereGeometry args={[0.06, 8, 8]} />
                        <meshStandardMaterial color={Math.random() > 0.5 ? "#22d3ee" : "#facc15"} emissive={Math.random() > 0.5 ? "#22d3ee" : "#facc15"} emissiveIntensity={1} />
                    </mesh>
                ))}
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="☢️ Gestion Centrale - Fission"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-emerald-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={3000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="☢️" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Barres de Contrôle: {controlRods}%</label>
                                    <input type="range" min="0" max="100" value={controlRods} onChange={(e) => setControlRods(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-emerald-500 rounded-full" />
                                    <div className="flex justify-between text-[8px] text-gray-500 mt-1 font-mono">
                                        <span>MAX_POW</span>
                                        <span>SHUTDOWN</span>
                                    </div>
                                </div>
                                <button onClick={() => { setIsReacting(!isReacting); if (!isReacting) setNeutronCount(1); }} className={`w-full py-1 rounded text-[10px] font-bold transition-all ${isReacting ? 'bg-red-500' : 'bg-emerald-500'}`}>
                                    {isReacting ? 'ARRÊTER RÉACTEUR' : 'DÉMARRER RÉACTEUR'}
                                </button>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-emerald-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-emerald-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">REACTOR_CORE_OS</div>
                                    <div className="text-[10px] font-mono"><span className="text-emerald-400">PUISSANCE:</span> {power.toFixed(1)}%</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">MULT. k:</span> {k.toFixed(3)}</div>
                                    <div className={`text-[9px] mt-1 font-bold ${isCritical ? 'text-red-500' : isStable ? 'text-emerald-400' : 'text-blue-400'}`}>
                                        {isCritical ? "⚠️ ÉTAT CRITIQUE" : isStable ? "✓ RÉGIME STABLE" : "📉 SOUS-CRITIQUE"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Réacteur stabilisé ! Mission "${mission?.title}" réussie.`}
                points={700}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// Export Partie 4
export { PhotoelectriqueAdvanced as PhotoelectriqueTS };
export { NiveauxEnergieAdvanced as NiveauxEnergieTS };
export { NucleaireAdvanced as NucleaireTS };
