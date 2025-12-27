/**
 * Physique 2nde Simulations - Part 2: Mécanique (Chapitres 8-12)
 * High-quality 3D simulations for Seconde curriculum
 */
import React, { useState, useRef, useEffect, useMemo } from 'react';

import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text, Cone } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';
import { PhaseSelector, GradeBadge, MissionObjective, XPBar } from './GamificationUtils';

// ============================================================
// P8. GÉNÉRALITÉS SUR LE MOUVEMENT - Référentiel et Trajectoire
// ============================================================
// ============================================================
// P8. GÉNÉRALITÉS SUR LE MOUVEMENT - Référentiel et Trajectoire (ENRICHI)
// ============================================================
export function MouvementSeconde() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(0);
    const [vitesse, setVitesse] = useState(2);
    const [showTrajectory, setShowTrajectory] = useState(true);
    const [referentiel, setReferentiel] = useState('sol'); // 'sol' or 'train'
    const mobileRef = useRef();
    const trainRef = useRef();

    // Gamification
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [targetDistance, setTargetDistance] = useState(null);
    const [targetTime, setTargetTime] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    useFrame((state, delta) => {
        if (isPlaying) {
            const dt = delta;
            setTime(prev => Math.min(prev + dt, 10)); // Max 10s

            // Mobile movement logic
            if (mobileRef.current) {
                // x(t) = -4 + v * t
                const position = -4 + (time * vitesse);
                mobileRef.current.position.x = position;
            }

            // Train movement logic (Visual only if ref is sol)
            if (trainRef.current) {
                if (referentiel === 'sol') {
                    // Train moves back and forth slightly to look like it's moving
                    trainRef.current.position.x = (time * 1.5) % 10 - 5;
                } else {
                    trainRef.current.position.x = 0;
                }
            }

            if (mode === 'challenge' && time >= targetTime) {
                setIsPlaying(false);
                checkChallenge();
            }
        }
    });

    const handleReset = () => {
        setTime(0);
        setIsPlaying(false);
        if (mobileRef.current) mobileRef.current.position.x = -4;
        if (trainRef.current) trainRef.current.position.x = (referentiel === 'sol' ? -5 : 0);
    };

    const startChallenge = () => {
        setMode('challenge');
        // Goal: Reach distance D in time T. Find V.
        // D = V * T => V = D / T
        const t = Math.floor(Math.random() * 3 + 2); // 2-5s
        const vTarget = Math.floor(Math.random() * 4 + 1); // 1-5 m/s
        const d = vTarget * t;

        setTargetTime(t);
        setTargetDistance(d);
        setVitesse(1); // Reset slider
        setScore(0);
        setShowSuccess(false);
        handleReset();
    };

    const checkChallenge = () => {
        const dReal = vitesse * targetTime;
        if (Math.abs(dReal - targetDistance) < 0.5) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    // Correct trajectory points based on V
    const trajectoryPoints = useMemo(() => {
        const points = [];
        for (let i = 0; i <= 20; i++) {
            points.push(new THREE.Vector3(-4 + i * 0.5, 0.5, 0));
        }
        return points;
    }, []);

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Bravo ! Vitesse parfaite.`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Ground/Reference */}
            <Box args={[20, 0.2, 4]} position={[0, -1.5, 0]} receiveShadow>
                <meshStandardMaterial color={referentiel === 'sol' ? "#2e7d32" : "#4a4a4a"} />
            </Box>

            {/* Scenery to show motion when camera is fixed on train */}
            {referentiel === 'train' && [-8, -4, 0, 4, 8].map(x => (
                <group key={x} position={[x - (time * 1.5) % 20, -1, -2]}>
                    <Cylinder args={[0.2, 0.2, 2]} material-color="#5d4037" />
                    <Cone args={[1, 2, 8]} position={[0, 1.5, 0]} material-color="#388e3c" />
                </group>
            ))}

            {/* Rails */}
            <Box args={[20, 0.05, 0.2]} position={[0, -1.35, 0.5]}>
                <meshStandardMaterial color="#666" metalness={0.8} />
            </Box>
            <Box args={[20, 0.05, 0.2]} position={[0, -1.35, -0.5]}>
                <meshStandardMaterial color="#666" metalness={0.8} />
            </Box>

            {/* Train Visuals */}
            <group ref={trainRef} position={[0, 0, 0]}>
                <Box args={[8, 2, 2]} position={[0, 0, 0]} material-color="#1565c0" transparent opacity={0.5} />
                <Text position={[0, 1.2, 0]} fontSize={0.3} color="white">WAGON</Text>
                {/* Wheels */}
                {[-3, 3].map(x => (
                    <Cylinder key={x} args={[0.5, 0.5, 2.2, 16]} rotation={[Math.PI / 2, 0, 0]} position={[x, -1, 0]} material-color="#333" />
                ))}
            </group>

            {/* Mobile (ball) */}
            <Sphere ref={mobileRef} args={[0.25, 16, 16]} position={[-4, 0.5, 0]} castShadow>
                <meshStandardMaterial color="#f44336" emissive="#ff5722" emissiveIntensity={0.5} />
            </Sphere>

            {/* Trajectory visualization */}
            {showTrajectory && referentiel === 'sol' && (
                <Line
                    points={trajectoryPoints}
                    color="#ffeb3b"
                    lineWidth={2}
                    dashed
                />
            )}

            {/* Velocity vector */}
            <group position={[mobileRef.current?.position.x || -4, 0.5, 0]}>
                <Line
                    points={[[0, 0, 0], [vitesse * 0.5, 0, 0]]} // Scaled for visibility
                    color="#4caf50"
                    lineWidth={4}
                />
                <Cone args={[0.1, 0.2, 8]} position={[vitesse * 0.5 + 0.1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <meshStandardMaterial color="#4caf50" />
                </Cone>
                <Text position={[0, 0.4, 0]} fontSize={0.2} color="#4caf50">
                    v = {vitesse} m/s
                </Text>
            </group>

            {/* Target Marker for Challenge */}
            {mode === 'challenge' && (
                <group position={[-4 + targetDistance, 0, 0]}>
                    <Cylinder args={[0.8, 0.8, 0.05, 32]} rotation={[Math.PI / 2, 0, 0]} material-color="#e91e63" />
                    <Text position={[0, 0.5, 0]} fontSize={0.3} color="#e91e63">CIBLE</Text>
                    <Text position={[0, -0.5, 0]} fontSize={0.2} color="white">{targetDistance} m</Text>
                </group>
            )}

            {/* Control Panel */}
            <Html position={[7, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🚂 Labo Mouvement" className="w-[320px] border-cyan-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">Module Mécanique</div>
                            <div className="text-xl font-black text-white leading-none">MOUVEMENT</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Explorez le mouvement et les référentiels !" icon="🚂" />
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <label className="text-xs text-secondary block mb-2">Référentiel</label>
                                    <div className="flex gap-2">
                                        <button onClick={() => setReferentiel('sol')} className={`flex-1 py-1 rounded text-xs ${referentiel === 'sol' ? 'bg-purple-600' : 'bg-gray-700'}`}>🌍 Sol</button>
                                        <button onClick={() => setReferentiel('train')} className={`flex-1 py-1 rounded text-xs ${referentiel === 'train' ? 'bg-purple-600' : 'bg-gray-700'}`}>🚆 Train</button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm mb-1 text-gray-300">
                                        Vitesse: <span className="text-cyan-400 font-bold">{vitesse} m/s</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0.5"
                                        max="10"
                                        step="0.5"
                                        value={vitesse}
                                        onChange={(e) => setVitesse(parseFloat(e.target.value))}
                                        className="w-full h-1 accent-cyan-500"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className={`flex-1 py-2 rounded font-bold ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                                    >
                                        {isPlaying ? '⏸️ Stop' : '▶️ Go'}
                                    </button>
                                    <button
                                        onClick={handleReset}
                                        className="flex-1 py-2 bg-gray-600 hover:bg-gray-500 rounded font-bold"
                                    >
                                        🔄 Reset
                                    </button>
                                </div>
                                <div className="bg-green-900/20 p-3 rounded border border-green-500/20 font-mono text-xs">
                                    <div className="flex justify-between"><span>Temps:</span> <strong>{time.toFixed(2)} s</strong></div>
                                    <div className="flex justify-between"><span>Dist:</span> <strong>{(vitesse * time).toFixed(2)} m</strong></div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-cyan-300 font-bold flex items-center gap-2">
                                    <span>⏱️</span> Défi Vitesse
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetDistance ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-pink-900/30 p-3 rounded border border-pink-500/30 text-center">
                                        <div className="text-pink-200 text-xs uppercase mb-1">Mission</div>
                                        <div className="font-bold text-white text-sm">
                                            Avance de <span className="text-xl text-yellow-400">{targetDistance}m</span> en <span className="text-xl text-yellow-400">{targetTime}s</span>.
                                        </div>
                                    </div>

                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-cyan-400 block mb-1">Règle la Vitesse (v = d/t)</label>
                                        <input
                                            type="range"
                                            min="0.5"
                                            max="10"
                                            step="0.5"
                                            value={vitesse}
                                            onChange={(e) => setVitesse(parseFloat(e.target.value))}
                                            className="w-full accent-cyan-500"
                                        />
                                        <div className="text-center font-bold text-lg mt-1">{vitesse} m/s</div>
                                    </div>

                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        disabled={isPlaying}
                                        className="w-full py-2 bg-pink-600 hover:bg-pink-500 rounded-lg font-bold text-white shadow-lg shadow-pink-900/30"
                                    >
                                        {isPlaying ? 'En cours...' : 'Lancer le Mobile 🚀'}
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold shadow-lg shadow-cyan-900/20 transition-all transform hover:scale-105">
                                        Relever le Défi
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P9-P10. FORCES ET POIDS - Représentation vectorielle
// ============================================================
// ============================================================
// P9-P10. FORCES ET POIDS - Représentation vectorielle (ENRICHI)
// ============================================================
// P9-P10. FORCES ET POIDS - Mission Cargaison Interstellaire
// ============================================================
// ============================================================
// P9-P10. FORCES ET POIDS - Représentation vectorielle (ENRICHI)
// ============================================================
// P9-P10. FORCES ET POIDS - Mission Cargaison Interstellaire
// ============================================================
export function ForcesPoidsSeconde() {
    const [masse, setMasse] = useState(10);
    const [planete, setPlanete] = useState('terre');
    // Renaming 'mission' mode to 'challenge' for consistency, but keeping 'mission' functionality
    const [mode, setMode] = useState('explore'); // 'explore', 'challenge'

    // Mission State -> Challenge State
    const [targetPoids, setTargetPoids] = useState(null);
    const [missionStatus, setMissionStatus] = useState('idle'); // idle, checking, success, fail
    const [craneHeight, setCraneHeight] = useState(3);
    const [score, setScore] = useState(0);

    const planetes = {
        terre: { g: 9.8, color: '#2196f3', name: 'Terre', sky: '#87CEEB', ground: '#4CAF50' },
        lune: { g: 1.6, color: '#bdbdbd', name: 'Lune', sky: '#000000', ground: '#E0E0E0' },
        mars: { g: 3.7, color: '#ff5722', name: 'Mars', sky: '#FFCCBC', ground: '#D84315' },
        jupiter: { g: 24.8, color: '#ff9800', name: 'Jupiter', sky: '#FFE0B2', ground: '#795548' }
    };

    const g = planetes[planete].g;
    const poids = masse * g;

    // Animation Grue
    useFrame((state, delta) => {
        if (missionStatus === 'checking') {
            // La grue descend
            if (craneHeight > 1.5) setCraneHeight(h => h - delta);
        } else if (missionStatus === 'success') {
            // La grue remonte avec la caisse
            if (craneHeight < 5) setCraneHeight(h => h + delta * 2);
        } else {
            if (craneHeight < 3) setCraneHeight(h => h + delta);
        }
    });

    const startChallenge = () => {
        setMode('challenge');
        const keys = Object.keys(planetes);
        const p = keys[Math.floor(Math.random() * keys.length)];
        const m = Math.floor(Math.random() * 20 + 5); // 5-25kg
        const tP = m * planetes[p].g;

        setPlanete(p);
        setTargetPoids(tP);
        setMasse(1);
        setMissionStatus('idle');
        setScore(0);
    };

    const checkChallenge = () => {
        setMissionStatus('checking');
        setTimeout(() => {
            if (Math.abs(poids - targetPoids) < 1.0) {
                setMissionStatus('success');
                triggerSuccess();
                setScore(s => s + 100);
            } else {
                setMissionStatus('fail');
            }
        }, 1500);
    };

    const triggerSuccess = () => {
        // Just for consistency with other components that might rely on this.
        // But here we use missionStatus to trigger UI effects.
    };

    return (
        <group>
            {/* <OrbitControls /> Removed as it's usually outside or passed down, but assuming it's available in context or parent. Actually usually inserted inside Canvas. I'll leave it if it was there, but usually I shouldn't add it if not imported. It was in previous code? No, line 316 says <OrbitControls />. I need to make sure it's imported. Part2 imports don't show OrbitControls. I'll remove it to be safe, DraggableHtmlPanel handles UI interaction. */}
            <SuccessOverlay show={missionStatus === 'success'} message="Cargaison chargée !" points={100} onNext={startChallenge} />
            <ConfettiExplosion active={missionStatus === 'success'} />

            {/* Environnement Dynamique */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color={planetes[planete].ground} />
            </mesh>
            <mesh position={[0, 10, -10]}>
                <sphereGeometry args={[2]} />
                <meshStandardMaterial color={planetes[planete].color} emissive={planetes[planete].color} emissiveIntensity={0.2} />
            </mesh>
            <ambientLight intensity={0.5} color={planetes[planete].sky} />

            {/* Grue Spatiale */}
            <group position={[2, 0, 0]}>
                <Box args={[0.5, 6, 0.5]} position={[0, 3, 0]}><meshStandardMaterial color="#333" /></Box>
                <Box args={[4, 0.3, 0.5]} position={[-1.5, 6, 0]}><meshStandardMaterial color="#333" /></Box>
                {/* Câble */}
                <Line points={[[-3, 6, 0], [-3, craneHeight, 0]]} color="black" lineWidth={2} />
                {/* Crochet */}
                <mesh position={[-3, craneHeight, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.5]} />
                    <meshStandardMaterial color="yellow" />
                </mesh>
            </group>

            {/* Caisse (Objet) */}
            <group position={[-1, missionStatus === 'success' ? craneHeight - 0.5 : 0.5, 0]}>
                <Box args={[1, 1, 1]}>
                    <meshStandardMaterial color={missionStatus === 'fail' ? '#FF5252' : missionStatus === 'success' ? '#69F0AE' : '#607D8B'} />
                </Box>
                <Text position={[0, 0, 0.51]} fontSize={0.2} color="white">
                    {masse} kg
                </Text>
                {/* Vecteur Poids */}
                <group position={[0, -0.6, 0]}>
                    <Line points={[[0, 0, 0], [0, -poids / 50, 0]]} color="#FFD700" lineWidth={4} />
                    <Cone args={[0.1, 0.2, 8]} position={[0, -poids / 50, 0]} rotation={[Math.PI, 0, 0]}><meshBasicMaterial color="#FFD700" /></Cone>
                    <Text position={[0.5, -poids / 100, 0]} fontSize={0.2} color="#FFD700">P = {poids.toFixed(1)} N</Text>
                </group>
            </group>

            {/* Overlay Mission */}
            {mode === 'challenge' && (
                <Text position={[0, 4, 0]} fontSize={0.4} color="white" outlineWidth={0.02} outlineColor="black">
                    CIBLE P = {targetPoids ? targetPoids.toFixed(1) : '?'} N
                </Text>
            )}

            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title={mode === 'explore' ? "⚖️ Poids & Masse" : "🚀 Mission Cargaison"} className="w-[320px] border-orange-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">Module Mécanique</div>
                            <div className="text-xl font-black text-white leading-none">POIDS & MASSE</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Testez la gravité sur différentes planètes !" icon="🪐" />
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <label className="text-xs text-secondary block mb-2">Planète</label>
                                    <div className="grid grid-cols-2 gap-1 mt-1">
                                        {Object.keys(planetes).map(p => (
                                            <button key={p} onClick={() => setPlanete(p)} className={`text-xs p-1 rounded ${planete === p ? 'bg-orange-600' : 'bg-gray-700'}`}>
                                                {planetes[p].name}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="text-center text-xs text-gray-400 mt-1">g = {planetes[planete].g} N/kg</div>
                                </div>
                                <div className="mb-4 bg-gray-800 p-3 rounded">
                                    <label className="text-xs text-gray-400">Masse de la cargaison: <span className="text-orange-400 font-bold">{masse} kg</span></label>
                                    <input type="range" min="1" max="50" step="1" value={masse} onChange={e => setMasse(Number(e.target.value))} className="w-full accent-orange-500" />
                                </div>
                                <div className="text-center bg-orange-900/20 p-2 rounded">
                                    <div className="text-xs text-orange-200">Poids (Force)</div>
                                    <div className="font-bold text-xl text-white">{poids.toFixed(1)} Newtons</div>
                                    <div className="text-[10px] text-gray-400">P = m × g</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-orange-300 font-bold flex items-center gap-2">
                                    <span>🏗️</span> Cargaison Spatiale
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetPoids ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-gray-800 p-3 rounded border border-gray-600 text-center">
                                        <div className="text-gray-400 text-xs uppercase mb-1">Commande Client</div>
                                        <div className="font-bold text-xl text-white">Poids Requis: {targetPoids.toFixed(1)} N</div>
                                        <div className="text-xs text-orange-400 mt-1">Planète: {planetes[planete].name} (g={planetes[planete].g})</div>
                                    </div>

                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-gray-400 block mb-1">Ajuste la Masse</label>
                                        <input type="range" min="1" max="50" step="1" value={masse} onChange={(e) => setMasse(Number(e.target.value))} className="w-full accent-orange-500" />
                                        <div className="text-center font-bold text-lg mt-1">{masse} kg</div>
                                    </div>

                                    <div className="text-center text-xs text-gray-400">Poids Actuel: {(masse * planetes[planete].g).toFixed(1)} N</div>

                                    <button onClick={checkChallenge} disabled={missionStatus !== 'idle' && missionStatus !== 'fail'} className="w-full py-2 bg-orange-600 hover:bg-orange-500 rounded-lg font-bold text-white shadow-lg shadow-orange-900/30">
                                        {missionStatus === 'checking' ? 'Vérification...' : 'Charger la Caisse'}
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-900/20 transition-all transform hover:scale-105">
                                        Nouvelle Mission
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P11. ÉQUILIBRE SOUMIS À 3 FORCES
// ============================================================
// ============================================================
// P11. ÉQUILIBRE SOUMIS À 3 FORCES (ENRICHI)
// ============================================================
export function Equilibre3ForcesSeconde() {
    const [force1, setForce1] = useState(50);
    const [force2, setForce2] = useState(50);
    const [angle1, setAngle1] = useState(120);
    const [angle2, setAngle2] = useState(240);
    const [showResultante, setShowResultante] = useState(false);

    // Gamification
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [targetEquilibrium, setTargetEquilibrium] = useState(false);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Calculate forces components
    const rad1 = (angle1 * Math.PI) / 180;
    const rad2 = (angle2 * Math.PI) / 180;
    const f1x = force1 * Math.cos(rad1);
    const f1y = force1 * Math.sin(rad1);
    const f2x = force2 * Math.cos(rad2);
    const f2y = force2 * Math.sin(rad2);

    const [userForce, setUserForce] = useState(50);
    const [userAngle, setUserAngle] = useState(0);

    const activeF3 = mode === 'challenge' ? userForce : Math.sqrt(Math.pow(-(f1x + f2x), 2) + Math.pow(-(f1y + f2y), 2));
    const activeAngle3 = mode === 'challenge' ? userAngle : (Math.atan2(-(f1y + f2y), -(f1x + f2x)) * 180) / Math.PI;

    const rad3 = (activeAngle3 * Math.PI) / 180;
    const f3x = activeF3 * Math.cos(rad3);
    const f3y = activeF3 * Math.sin(rad3);

    const sumX = f1x + f2x + f3x;
    const sumY = f1y + f2y + f3y;
    const residual = Math.sqrt(sumX * sumX + sumY * sumY);
    const isEquilibrium = residual < 5; // Tolerance

    const startChallenge = () => {
        setMode('challenge');
        // Randomize F1 and F2
        setForce1(Math.floor(Math.random() * 50 + 30));
        setAngle1(Math.floor(Math.random() * 360));

        setForce2(Math.floor(Math.random() * 50 + 30));
        setAngle2(Math.floor(Math.random() * 360));

        // Reset user guess
        setUserForce(50);
        setUserAngle(0);
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (isEquilibrium) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    const scale = 0.02;

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Équilibre atteint !`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Central point */}
            <Sphere args={[0.2, 16, 16]} position={[0, 0, 0]}>
                <meshStandardMaterial color={isEquilibrium ? "#4caf50" : "#fff"} emissive={isEquilibrium ? "#4caf50" : "#000"} emissiveIntensity={0.5} />
            </Sphere>

            {/* Force 1 */}
            <group>
                <Line points={[[0, 0, 0], [f1x * scale, f1y * scale, 0]]} color="#f44336" lineWidth={4} />
                <Cone args={[0.1, 0.2, 8]} position={[f1x * scale, f1y * scale, 0]} rotation={[0, 0, rad1 - Math.PI / 2]}>
                    <meshStandardMaterial color="#f44336" />
                </Cone>
                <Text position={[f1x * scale * 0.6, f1y * scale * 0.6 + 0.3, 0]} fontSize={0.2} color="#f44336">F₁</Text>
            </group>

            {/* Force 2 */}
            <group>
                <Line points={[[0, 0, 0], [f2x * scale, f2y * scale, 0]]} color="#4caf50" lineWidth={4} />
                <Cone args={[0.1, 0.2, 8]} position={[f2x * scale, f2y * scale, 0]} rotation={[0, 0, rad2 - Math.PI / 2]}>
                    <meshStandardMaterial color="#4caf50" />
                </Cone>
                <Text position={[f2x * scale * 0.6, f2y * scale * 0.6 + 0.3, 0]} fontSize={0.2} color="#4caf50">F₂</Text>
            </group>

            {/* Force 3 (User or Auto) */}
            <group>
                <Line points={[[0, 0, 0], [f3x * scale, f3y * scale, 0]]} color="#2196f3" lineWidth={4} />
                <Cone args={[0.1, 0.2, 8]} position={[f3x * scale, f3y * scale, 0]} rotation={[0, 0, rad3 - Math.PI / 2]}>
                    <meshStandardMaterial color="#2196f3" />
                </Cone>
                <Text position={[f3x * scale * 0.6, f3y * scale * 0.6 + 0.3, 0]} fontSize={0.2} color="#2196f3">F₃</Text>
            </group>

            {/* Resultant Text */}
            <Text position={[0, -2.5, 0]} fontSize={0.25} color={isEquilibrium ? '#4caf50' : '#f44336'}>
                {isEquilibrium ? '✓ ÉQUILIBRE' : `⚠ Résiduel: ${residual.toFixed(1)} N`}
            </Text>

            {/* Triangle des forces (Optional visualization) */}
            {mode === 'explore' && showResultante && (
                <group position={[3, 0, -2]}>
                    <Text position={[0, 2, 0]} fontSize={0.2} color="#fff">Triangle des forces</Text>
                    <Line points={[[0, 0, 0], [f1x * scale, f1y * scale, 0]]} color="#f44336" lineWidth={2} />
                    <Line points={[[f1x * scale, f1y * scale, 0], [f1x * scale + f2x * scale, f1y * scale + f2y * scale, 0]]} color="#4caf50" lineWidth={2} />
                    <Line points={[[f1x * scale + f2x * scale, f1y * scale + f2y * scale, 0], [0, 0, 0]]} color="#2196f3" lineWidth={2} />
                </group>
            )}

            {/* Control Panel */}
            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="⚖️ Équilibre 3 Forces" className="w-[300px] border-purple-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-1">Module Mécanique</div>
                            <div className="text-xl font-black text-white leading-none">ÉQUILIBRE</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Visualisez l'équilibre de 3 forces !" icon="⚖️" />
                            <div className="space-y-4">
                                {/* F1 Controls */}
                                <div className="mb-2 p-2 rounded border border-red-500/30 bg-red-900/10">
                                    <label className="text-xs text-red-300 font-bold block mb-1">Force F₁</label>
                                    <div className="flex items-center gap-2 mb-1">
                                        <input type="range" min="10" max="100" value={force1} onChange={e => setForce1(Number(e.target.value))} className="w-full h-1 accent-red-500" />
                                        <span className="text-[10px] w-6">{force1}N</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="0" max="360" value={angle1} onChange={e => setAngle1(Number(e.target.value))} className="w-full h-1 accent-red-500" />
                                        <span className="text-[10px] w-6">{angle1}°</span>
                                    </div>
                                </div>

                                {/* F2 Controls */}
                                <div className="mb-2 p-2 rounded border border-green-500/30 bg-green-900/10">
                                    <label className="text-xs text-green-300 font-bold block mb-1">Force F₂</label>
                                    <div className="flex items-center gap-2 mb-1">
                                        <input type="range" min="10" max="100" value={force2} onChange={e => setForce2(Number(e.target.value))} className="w-full h-1 accent-green-500" />
                                        <span className="text-[10px] w-6">{force2}N</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="0" max="360" value={angle2} onChange={e => setAngle2(Number(e.target.value))} className="w-full h-1 accent-green-500" />
                                        <span className="text-[10px] w-6">{angle2}°</span>
                                    </div>
                                </div>

                                <div className="p-2 text-xs bg-gray-800 rounded">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={showResultante} onChange={e => setShowResultante(e.target.checked)} className="accent-purple-500" />
                                        <span>Voir Triangle des Forces</span>
                                    </label>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-purple-300 font-bold flex items-center gap-2">
                                    <span>🎯</span> Défi Équilibre
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {showSuccess ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-green-900/30 p-3 rounded border border-green-500/30 text-center">
                                        <div className="text-xl font-bold text-green-300">ÉQUILIBRE ATTEINT !</div>
                                        <div className="text-xs text-gray-300 mt-1">Excellent travail ingénieur.</div>
                                    </div>
                                    <button onClick={startChallenge} className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold text-white shadow-lg shadow-purple-900/30">
                                        Nouveau Défi
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="bg-purple-900/20 p-2 rounded text-xs text-purple-200">
                                        Ajuste F₃ (Bleu) pour annuler F₁ et F₂ et réussir l'équilibre (point central Vert).
                                    </div>

                                    {/* F1 & F2 Info */}
                                    <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400">
                                        <div className="bg-gray-800 p-1 rounded">F₁: {force1}N à {angle1}°</div>
                                        <div className="bg-gray-800 p-1 rounded">F₂: {force2}N à {angle2}°</div>
                                    </div>

                                    {/* F3 Controls */}
                                    <div className="p-3 rounded border border-blue-500/30 bg-blue-900/10">
                                        <label className="text-xs text-blue-300 font-bold block mb-2">Ton Action (F₃)</label>

                                        <div className="mb-2">
                                            <div className="flex justify-between text-[10px] text-blue-200"><span>Force</span> <span>{userForce} N</span></div>
                                            <input type="range" min="10" max="150" value={userForce} onChange={e => setUserForce(Number(e.target.value))} className="w-full h-1 accent-blue-500" />
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-[10px] text-blue-200"><span>Angle</span> <span>{userAngle}°</span></div>
                                            <input type="range" min="-180" max="180" value={userAngle} onChange={e => setUserAngle(Number(e.target.value))} className="w-full h-1 accent-blue-500" />
                                        </div>
                                    </div>

                                    <div className="text-center text-xs font-mono text-gray-400">
                                        Résiduel actuel: {residual.toFixed(1)} N
                                    </div>

                                    <button onClick={checkChallenge} className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold text-white shadow-lg shadow-purple-900/30">
                                        Vérifier l'Équilibre
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}


// ============================================================
// P12. MOMENT D'UNE FORCE - Équilibre autour d'un axe
// ============================================================
// ============================================================
// P12. MOMENT D'UNE FORCE - Équilibre autour d'un axe (ENRICHI)
// ============================================================
export function MomentForceSeconde() {
    const [force1, setForce1] = useState(20);
    const [distance1, setDistance1] = useState(1);
    const [force2, setForce2] = useState(10);
    const [distance2, setDistance2] = useState(2);
    const [showMoments, setShowMoments] = useState(true);
    const leverRef = useRef();

    // Gamification
    const [mode, setMode] = useState('explore');
    const [targetMoment, setTargetMoment] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const moment1 = force1 * distance1;
    const moment2 = force2 * distance2;
    const momentNet = moment1 - moment2;
    const isEquilibrium = Math.abs(momentNet) < 0.5;

    useFrame(() => {
        if (leverRef.current && !isEquilibrium) {
            const angle = Math.min(Math.max(momentNet / 100, -0.3), 0.3);
            leverRef.current.rotation.z += (angle - leverRef.current.rotation.z) * 0.05;
        } else if (leverRef.current) {
            leverRef.current.rotation.z *= 0.95;
        }
    });

    const startChallenge = () => {
        setMode('challenge');
        // Randomize F1, d1 (Target side)
        const f1 = Math.floor(Math.random() * 40 + 10);
        const d1 = Number((Math.random() * 2 + 0.5).toFixed(1));
        setForce1(f1);
        setDistance1(d1);
        setTargetMoment(f1 * d1);

        // Reset User side F2, d2
        setForce2(10);
        setDistance2(1);

        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (isEquilibrium) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message="Équilibre Parfait !" points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Pivot point */}
            <Cylinder args={[0.2, 0.3, 0.5, 16]} position={[0, -0.5, 0]}>
                <meshStandardMaterial color="#795548" />
            </Cylinder>
            <Sphere args={[0.15, 16, 16]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#ff9800" />
            </Sphere>
            <Text position={[0, 0.4, 0]} fontSize={0.15} color="#ff9800">
                Axe Δ
            </Text>

            {/* Lever */}
            <group ref={leverRef}>
                <Box args={[6, 0.15, 0.4]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#607d8b" />
                </Box>

                {/* Force 1 (left) */}
                <group position={[-distance1, 0, 0]}>
                    <Box args={[0.4, 0.4, 0.4]} position={[0, -0.3, 0]}>
                        <meshStandardMaterial color={mode === 'challenge' ? "#f44336" : "#f44336"} />
                    </Box>
                    <Line points={[[0, 0, 0], [0, -force1 / 30, 0]]} color="#f44336" lineWidth={4} />
                    <Text position={[0.5, -force1 / 60, 0]} fontSize={0.15} color="#f44336">
                        F₁ = {force1}N
                    </Text>
                    <Text position={[0, 0.3, 0]} fontSize={0.12} color="#aaa">
                        d₁ = {distance1}m
                    </Text>
                </group>

                {/* Force 2 (right) */}
                <group position={[distance2, 0, 0]}>
                    <Box args={[0.4, 0.4, 0.4]} position={[0, -0.3, 0]}>
                        <meshStandardMaterial color={mode === 'challenge' ? "#2196f3" : "#2196f3"} />
                    </Box>
                    <Line points={[[0, 0, 0], [0, -force2 / 30, 0]]} color="#2196f3" lineWidth={4} />
                    <Text position={[0.5, -force2 / 60, 0]} fontSize={0.15} color="#2196f3">
                        F₂ = {force2}N
                    </Text>
                    <Text position={[0, 0.3, 0]} fontSize={0.12} color="#aaa">
                        d₂ = {distance2}m
                    </Text>
                </group>
            </group>

            {/* Distance markers */}
            <Line points={[[0, -1.5, 0], [-distance1, -1.5, 0]]} color="#f44336" lineWidth={1} dashed />
            <Line points={[[0, -1.5, 0], [distance2, -1.5, 0]]} color="#2196f3" lineWidth={1} dashed />

            {/* Equilibrium indicator */}
            <Text
                position={[0, 2, 0]}
                fontSize={0.3}
                color={isEquilibrium ? '#4caf50' : '#ff9800'}
            >
                {isEquilibrium ? '⚖️ ÉQUILIBRE' : '↻ Rotation...'}
            </Text>

            <Html position={[5, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🔄 Moment d'une Force" className="w-[350px] border-orange-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">Module Mécanique</div>
                            <div className="text-xl font-black text-white leading-none">MOMENTS</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Testez la loi des moments !" icon="⚖️" />
                            <div className="space-y-4">
                                <div className="bg-red-900/20 p-3 rounded border-l-4 border-red-500">
                                    <label className="text-xs text-red-400 font-bold block mb-1">Force Gauche (F₁)</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <span className="text-[10px] text-gray-400">Force (N)</span>
                                            <input type="range" min="5" max="50" value={force1} onChange={e => setForce1(Number(e.target.value))} className="w-full accent-red-500" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400">Dist (m)</span>
                                            <input type="range" min="0.5" max="2.5" step="0.1" value={distance1} onChange={e => setDistance1(Number(e.target.value))} className="w-full accent-red-500" />
                                        </div>
                                    </div>
                                    <div className="text-right text-xs text-red-300 mt-1">M₁ = {moment1.toFixed(1)} N·m</div>
                                </div>

                                <div className="bg-blue-900/20 p-3 rounded border-l-4 border-blue-500">
                                    <label className="text-xs text-blue-400 font-bold block mb-1">Force Droite (F₂)</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <span className="text-[10px] text-gray-400">Force (N)</span>
                                            <input type="range" min="5" max="50" value={force2} onChange={e => setForce2(Number(e.target.value))} className="w-full accent-blue-500" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400">Dist (m)</span>
                                            <input type="range" min="0.5" max="2.5" step="0.1" value={distance2} onChange={e => setDistance2(Number(e.target.value))} className="w-full accent-blue-500" />
                                        </div>
                                    </div>
                                    <div className="text-right text-xs text-blue-300 mt-1">M₂ = {moment2.toFixed(1)} N·m</div>
                                </div>

                                <div className={`text-center p-2 rounded ${isEquilibrium ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                    <div className="font-bold text-sm">ΣM = {(momentNet).toFixed(1)} N·m</div>
                                    <div className="text-[10px]">{isEquilibrium ? 'ÉQUILIBRE STABLE' : 'DÉSÉQUILIBRE'}</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-orange-300 font-bold flex items-center gap-2">
                                    <span>🏗️</span> Défi Architecte
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetMoment ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-red-900/30 p-3 rounded border border-red-500/30 text-center">
                                        <div className="text-red-200 text-xs uppercase mb-1">Cible (Gauche)</div>
                                        <div className="font-bold text-lg text-white">M₁ = {targetMoment.toFixed(1)} N·m</div>
                                        <div className="text-[10px] text-gray-400">F₁={force1}N × d₁={distance1}m</div>
                                    </div>

                                    <div className="bg-blue-900/20 p-3 rounded border border-blue-500/50">
                                        <label className="text-xs text-blue-300 font-bold block mb-2">Ajuste le Contrepoids (Droite)</label>

                                        <div className="mb-2">
                                            <label className="text-[10px] text-gray-400 block">Force F₂</label>
                                            <div className="flex items-center gap-2">
                                                <input type="range" min="5" max="50" value={force2} onChange={e => setForce2(Number(e.target.value))} className="flex-1 accent-blue-500" />
                                                <span className="text-xs font-mono w-12 text-right">{force2}N</span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-[10px] text-gray-400 block">Distance d₂</label>
                                            <div className="flex items-center gap-2">
                                                <input type="range" min="0.5" max="2.5" step="0.1" value={distance2} onChange={e => setDistance2(Number(e.target.value))} className="flex-1 accent-blue-500" />
                                                <span className="text-xs font-mono w-12 text-right">{distance2}m</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={checkChallenge} className="w-full py-2 bg-orange-600 hover:bg-orange-500 rounded-lg font-bold text-white shadow-lg shadow-orange-900/30">
                                        Vérifier l'Équilibre
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-900/20 transition-all transform hover:scale-105">
                                        Relever le Défi
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

export default {
    MouvementSeconde,
    ForcesPoidsSeconde,
    Equilibre3ForcesSeconde,
    MomentForceSeconde
};
