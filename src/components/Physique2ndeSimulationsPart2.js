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
                <DraggableHtmlPanel title="🚂 Labo Mouvement" usePortal={false} className="w-[320px] text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-pink-600' : 'bg-gray-700'}`}>Défi Vitesse 🏆</button>
                        </div>
                    </div>

                    {mode === 'challenge' && (
                        <div className="bg-pink-900/40 p-2 rounded mb-4 border border-pink-500/30 text-sm animate-pulse">
                            <div className="font-bold text-pink-300">MISSION:</div>
                            Atteindre la cible ({targetDistance}m) en exactement {targetTime} secondes.
                            <br />Règle ta vitesse !
                        </div>
                    )}

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
                            className="w-full accent-cyan-500"
                        />
                    </div>

                    <div className="flex gap-2 mb-4">
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

                    {!mode === 'challenge' && (
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-gray-300">Référentiel:</label>
                            <div className="flex gap-2">
                                <button onClick={() => setReferentiel('sol')} className={`flex-1 py-1 rounded text-xs ${referentiel === 'sol' ? 'bg-purple-600' : 'bg-gray-700'}`}>Sol</button>
                                <button onClick={() => setReferentiel('train')} className={`flex-1 py-1 rounded text-xs ${referentiel === 'train' ? 'bg-purple-600' : 'bg-gray-700'}`}>Train</button>
                            </div>
                        </div>
                    )}

                    <div className="bg-green-900/20 p-3 rounded border border-green-500/20 font-mono text-xs">
                        <div className="flex justify-between"><span>Temps:</span> <strong>{time.toFixed(2)} s</strong></div>
                        <div className="flex justify-between"><span>Dist:</span> <strong>{(vitesse * time).toFixed(2)} m</strong></div>
                    </div>
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
export function ForcesPoidsSeconde() {
    const [masse, setMasse] = useState(5);
    const [gValue, setGValue] = useState(9.8);
    const [planete, setPlanete] = useState('terre');
    const [showComponents, setShowComponents] = useState(false);
    const [inclinaison, setInclinaison] = useState(0);

    // Gamification
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [targetPoids, setTargetPoids] = useState(null);
    const [targetMasse, setTargetMasse] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const poids = masse * gValue;

    const planetes = {
        terre: { g: 9.8, color: '#2196f3', name: 'Terre' },
        lune: { g: 1.6, color: '#bdbdbd', name: 'Lune' },
        mars: { g: 3.7, color: '#ff5722', name: 'Mars' },
        jupiter: { g: 24.8, color: '#ff9800', name: 'Jupiter' }
    };

    useEffect(() => {
        setGValue(planetes[planete].g);
    }, [planete]);

    const inclinaisonRad = (inclinaison * Math.PI) / 180;
    const poidsParallele = poids * Math.sin(inclinaisonRad);
    const poidsPerpendiculaire = poids * Math.cos(inclinaisonRad);

    const startChallenge = () => {
        setMode('challenge');
        // Pick random planet and target mass
        const keys = Object.keys(planetes);
        const randPlanet = keys[Math.floor(Math.random() * keys.length)];
        const randMass = Math.floor(Math.random() * 15 + 5); // 5-20kg
        const targetP = randMass * planetes[randPlanet].g;

        setPlanete(randPlanet);
        setTargetMasse(randMass);
        setTargetPoids(targetP);
        setMasse(1); // Reset user mass
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (!targetMasse) return;
        if (Math.abs(masse - targetMasse) < 0.5) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Excellent ! Masse trouvée.`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Planet indicator */}
            <Sphere args={[0.8, 32, 32]} position={[-4, 2, 0]}>
                <meshStandardMaterial color={planetes[planete].color} />
            </Sphere>
            <Text position={[-4, 3.2, 0]} fontSize={0.25} color="#fff">
                {planetes[planete].name}
            </Text>
            <Text position={[-4, 2.8, 0]} fontSize={0.15} color="#aaa">
                g = {gValue} N/kg
            </Text>

            {/* Inclined plane */}
            <group rotation={[0, 0, -inclinaisonRad]}>
                <Box args={[6, 0.2, 3]} position={[0, -0.5, 0]}>
                    <meshStandardMaterial color="#795548" />
                </Box>

                {/* Object (mass) */}
                <Box args={[0.8, 0.8, 0.8]} position={[0, 0.4, 0]} castShadow>
                    <meshStandardMaterial color="#9c27b0" />
                </Box>
                <Text position={[0, 0.4, 0.5]} fontSize={0.15} color="#fff">
                    {masse} kg
                </Text>
            </group>

            {/* Weight vector (always vertical) */}
            <group position={[0, 0.4, 0]}>
                <Line
                    points={[[0, 0, 0], [0, -poids / 20, 0]]}
                    color="#f44336"
                    lineWidth={4}
                />
                <Cone args={[0.1, 0.2, 8]} position={[0, -poids / 20 - 0.1, 0]} rotation={[Math.PI, 0, 0]}>
                    <meshStandardMaterial color="#f44336" />
                </Cone>
                <Text position={[0.5, -poids / 40, 0]} fontSize={0.2} color="#f44336">
                    P = {poids.toFixed(1)} N
                </Text>
            </group>

            {/* Component vectors (if inclined) */}
            {showComponents && inclinaison > 0 && (
                <>
                    {/* Parallel component */}
                    <group position={[0, 0.4, 0]}>
                        <Line
                            points={[[0, 0, 0], [poidsParallele / 20 * Math.cos(inclinaisonRad), -poidsParallele / 20 * Math.sin(inclinaisonRad), 0]]}
                            color="#4caf50"
                            lineWidth={3}
                        />
                        <Text position={[poidsParallele / 30, -0.3, 0]} fontSize={0.15} color="#4caf50">
                            P// = {poidsParallele.toFixed(1)} N
                        </Text>
                    </group>

                    {/* Perpendicular component */}
                    <group position={[0, 0.4, 0]}>
                        <Line
                            points={[[0, 0, 0], [-poidsPerpendiculaire / 20 * Math.sin(inclinaisonRad), -poidsPerpendiculaire / 20 * Math.cos(inclinaisonRad), 0]]}
                            color="#2196f3"
                            lineWidth={3}
                        />
                        <Text position={[-0.8, -poidsPerpendiculaire / 30, 0]} fontSize={0.15} color="#2196f3">
                            P⊥ = {poidsPerpendiculaire.toFixed(1)} N
                        </Text>
                    </group>
                </>
            )}

            {/* Angle indicator */}
            {inclinaison > 0 && (
                <Text position={[2, -0.8, 0]} fontSize={0.2} color="#ffeb3b">
                    α = {inclinaison}°
                </Text>
            )}

            {/* Challenge Target Indicator */}
            {mode === 'challenge' && (
                <game-overlay>
                    <Text position={[3, 3, 0]} fontSize={0.3} color="#e91e63">
                        Cible: {targetPoids.toFixed(1)} N
                    </Text>
                </game-overlay>
            )}

            {/* Control Panel */}
            <Html position={[5, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="⚖️ Poids & Masse" usePortal={false} className="w-[300px] text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-pink-600' : 'bg-gray-700'}`}>Défi Masse 🏆</button>
                        </div>
                    </div>

                    {mode === 'challenge' && (
                        <div className="bg-pink-900/40 p-2 rounded mb-4 border border-pink-500/30 text-sm animate-pulse">
                            <div className="font-bold text-pink-300">MISSION:</div>
                            Trouve la masse pour obtenir un Poids de {targetPoids.toFixed(1)} N sur {planetes[planete].name}.
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-sm mb-1 text-gray-300">
                            Masse: <span className="text-cyan-400 font-bold">{masse} kg</span>
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            step="1"
                            value={masse}
                            onChange={(e) => setMasse(parseFloat(e.target.value))}
                            className="w-full accent-cyan-500"
                        />
                    </div>

                    {!mode === 'challenge' && (
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-gray-300">
                                Inclinaison: {inclinaison}°
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="60"
                                step="5"
                                value={inclinaison}
                                onChange={(e) => setInclinaison(parseFloat(e.target.value))}
                                className="w-full accent-gray-500"
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        {!mode === 'challenge' ? (
                            <>
                                <label className="block text-sm mb-1 text-gray-300">Planète:</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(planetes).map(([key, val]) => (
                                        <button
                                            key={key}
                                            onClick={() => setPlanete(key)}
                                            className={`py-1 rounded text-xs ${planete === key ? 'bg-purple-600' : 'bg-gray-700'}`}
                                        >
                                            {val.name}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="bg-purple-900/50 p-2 rounded text-center">
                                Planète imposée: <span className="font-bold text-purple-300">{planetes[planete].name}</span>
                            </div>
                        )}
                    </div>

                    {mode === 'challenge' && (
                        <button onClick={checkChallenge} className="w-full py-2 bg-pink-600 hover:bg-pink-500 rounded font-bold text-sm mb-3">
                            Vérifier Masse
                        </button>
                    )}

                    <div className="bg-red-900/20 p-3 rounded border border-red-500/20 font-mono text-xs">
                        <div className="flex justify-between items-center">
                            <span>Pords Calculé:</span>
                            <strong className="text-red-400 text-sm">{poids.toFixed(1)} N</strong>
                        </div>
                    </div>
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
                <meshStandardMaterial color="#fff" />
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
            {mode === 'explore' && (
                <group position={[3, 0, -2]}>
                    <Text position={[0, 2, 0]} fontSize={0.2} color="#fff">Triangle des forces</Text>
                    <Line points={[[0, 0, 0], [f1x * scale, f1y * scale, 0]]} color="#f44336" lineWidth={2} />
                    <Line points={[[f1x * scale, f1y * scale, 0], [f1x * scale + f2x * scale, f1y * scale + f2y * scale, 0]]} color="#4caf50" lineWidth={2} />
                    <Line points={[[f1x * scale + f2x * scale, f1y * scale + f2y * scale, 0], [0, 0, 0]]} color="#2196f3" lineWidth={2} />
                </group>
            )}

            {/* Control Panel */}
            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="⚖️ Équilibre 3 Forces" usePortal={false} className="w-[300px] text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-pink-600' : 'bg-gray-700'}`}>Défi Équilibre 🏆</button>
                        </div>
                    </div>

                    {mode === 'challenge' && (
                        <div className="bg-pink-900/40 p-2 rounded mb-4 border border-pink-500/30 text-sm animate-pulse">
                            <div className="font-bold text-pink-300">MISSION:</div>
                            Ajuste F₃ (Force et Angle) pour annuler F₁ et F₂.
                        </div>
                    )}

                    {/* F1 Controls */}
                    <div className="mb-2 p-2 rounded border border-red-500/30 bg-red-900/10">
                        <label className="text-xs text-red-400 block">F₁: {force1}N à {angle1}°</label>
                        {mode === 'explore' && (
                            <>
                                <input type="range" min="10" max="100" value={force1} onChange={e => setForce1(Number(e.target.value))} className="w-full h-1 accent-red-500" />
                                <input type="range" min="0" max="360" value={angle1} onChange={e => setAngle1(Number(e.target.value))} className="w-full h-1 accent-red-500" />
                            </>
                        )}
                    </div>

                    {/* F2 Controls */}
                    <div className="mb-2 p-2 rounded border border-green-500/30 bg-green-900/10">
                        <label className="text-xs text-green-400 block">F₂: {force2}N à {angle2}°</label>
                        {mode === 'explore' && (
                            <>
                                <input type="range" min="10" max="100" value={force2} onChange={e => setForce2(Number(e.target.value))} className="w-full h-1 accent-green-500" />
                                <input type="range" min="0" max="360" value={angle2} onChange={e => setAngle2(Number(e.target.value))} className="w-full h-1 accent-green-500" />
                            </>
                        )}
                    </div>

                    {/* F3 Controls (Always editable in Challenge, computed in Explore) */}
                    <div className="mb-2 p-2 rounded border border-blue-500/30 bg-blue-900/10">
                        <label className="text-xs text-blue-400 block">F₃ {mode === 'explore' ? '(Calculée)' : '(Ajustable)'}: {activeF3.toFixed(1)}N à {activeAngle3.toFixed(0)}°</label>
                        {mode === 'challenge' && (
                            <>
                                <input type="range" min="10" max="150" value={userForce} onChange={e => setUserForce(Number(e.target.value))} className="w-full h-1 accent-blue-500" />
                                <input type="range" min="-180" max="180" value={userAngle} onChange={e => setUserAngle(Number(e.target.value))} className="w-full h-1 accent-blue-500" />
                            </>
                        )}
                    </div>

                    {mode === 'challenge' && (
                        <button onClick={checkChallenge} className="w-full py-2 bg-pink-600 hover:bg-pink-500 rounded font-bold text-sm mb-3">
                            Vérifier
                        </button>
                    )}

                    <div className="bg-purple-900/20 p-2 rounded text-xs text-purple-300">
                        ΣFx = {sumX.toFixed(1)}, ΣFy = {sumY.toFixed(1)}
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P12. MOMENT D'UNE FORCE - Équilibre autour d'un axe
// ============================================================
export function MomentForceSeconde() {
    const [force1, setForce1] = useState(20);
    const [distance1, setDistance1] = useState(1);
    const [force2, setForce2] = useState(10);
    const [distance2, setDistance2] = useState(2);
    const [showMoments, setShowMoments] = useState(true);
    const leverRef = useRef();

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

    return (
        <group>
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

                {/* Force 1 (left) - causes clockwise rotation */}
                <group position={[-distance1, 0, 0]}>
                    <Box args={[0.4, 0.4, 0.4]} position={[0, -0.3, 0]}>
                        <meshStandardMaterial color="#f44336" />
                    </Box>
                    <Line points={[[0, 0, 0], [0, -force1 / 30, 0]]} color="#f44336" lineWidth={4} />
                    <Text position={[0.5, -force1 / 60, 0]} fontSize={0.15} color="#f44336">
                        F₁ = {force1}N
                    </Text>
                    <Text position={[0, 0.3, 0]} fontSize={0.12} color="#aaa">
                        d₁ = {distance1}m
                    </Text>
                </group>

                {/* Force 2 (right) - causes counter-clockwise rotation */}
                <group position={[distance2, 0, 0]}>
                    <Box args={[0.4, 0.4, 0.4]} position={[0, -0.3, 0]}>
                        <meshStandardMaterial color="#2196f3" />
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

            {/* Control Panel */}
            <Html position={[5, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🔄 Moment d'une Force" usePortal={false}>
                    <div style={{ padding: '15px', minWidth: '300px' }}>
                        <div style={{
                            background: 'rgba(244,67,54,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            marginBottom: '15px'
                        }}>
                            <label style={{ color: '#ef9a9a', display: 'block', marginBottom: '5px' }}>
                                Force F₁: {force1} N
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="50"
                                value={force1}
                                onChange={(e) => setForce1(parseFloat(e.target.value))}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <label style={{ color: '#ef9a9a', display: 'block', marginBottom: '5px' }}>
                                Distance d₁: {distance1} m
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="2.5"
                                step="0.1"
                                value={distance1}
                                onChange={(e) => setDistance1(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '12px' }}>
                                M₁ = F₁ × d₁ = <strong style={{ color: '#f44336' }}>{moment1.toFixed(1)} N·m</strong>
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            marginBottom: '15px'
                        }}>
                            <label style={{ color: '#90caf9', display: 'block', marginBottom: '5px' }}>
                                Force F₂: {force2} N
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="50"
                                value={force2}
                                onChange={(e) => setForce2(parseFloat(e.target.value))}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <label style={{ color: '#90caf9', display: 'block', marginBottom: '5px' }}>
                                Distance d₂: {distance2} m
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="2.5"
                                step="0.1"
                                value={distance2}
                                onChange={(e) => setDistance2(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                            <p style={{ color: '#fff', margin: '5px 0', fontSize: '12px' }}>
                                M₂ = F₂ × d₂ = <strong style={{ color: '#2196f3' }}>{moment2.toFixed(1)} N·m</strong>
                            </p>
                        </div>

                        <div style={{
                            background: isEquilibrium ? 'rgba(76,175,80,0.3)' : 'rgba(255,152,0,0.3)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: '#fff', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Bilan des moments:
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '13px' }}>
                                ΣM = M₁ - M₂ = {moment1.toFixed(1)} - {moment2.toFixed(1)} = <strong>{momentNet.toFixed(1)} N·m</strong>
                            </p>
                            <p style={{
                                color: isEquilibrium ? '#4caf50' : '#ff9800',
                                margin: '8px 0 0 0',
                                fontWeight: 'bold'
                            }}>
                                {isEquilibrium ? '✓ Équilibre (ΣM ≈ 0)' : '✗ Pas d\'équilibre'}
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(156,39,176,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#ce93d8'
                        }}>
                            <strong>🔧 Théorème des moments:</strong><br />
                            À l'équilibre: ΣM = 0<br />
                            Plus le bras de levier est grand, plus l'effet de rotation est important!
                        </div>
                    </div>
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
