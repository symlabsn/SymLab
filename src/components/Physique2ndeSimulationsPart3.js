/**
 * Physique 2nde Simulations - Part 3: Optique (Chapitres 13-15)
 * High-quality 3D simulations for Seconde curriculum
 */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text, Plane } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';

// ============================================================
// P13. PROPAGATION RECTILIGNE DE LA LUMIÈRE
// ============================================================
export function PropagationLumiereSeconde() {
    const [sourceType, setSourceType] = useState('ponctuelle');
    const [showRays, setShowRays] = useState(true);
    const [showShadow, setShowShadow] = useState(true);
    const [obstaclePosition, setObstaclePosition] = useState(0);
    const lightRef = useRef();


    useFrame((state) => {
        if (lightRef.current) {
            lightRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
        }
    });

    // Calculate shadow geometry
    // Thales: h_obstacle / d_source_obstacle = h_shadow / d_source_screen
    // Source is at x=-4. Obstacle at x=obstaclePosition. Screen at x=4.
    const h_obstacle = 0.4; // Cylinder radius (approx width/2) x 2 ?? No radius is 0.4 so diameter 0.8?
    // Let's assume diameter = 0.8
    const d_source_screen = 8;
    const d_source_obstacle = obstaclePosition - (-4); // obstaclePosition + 4

    // Avoid division by zero if obstacle touches source
    const safe_d_so = Math.max(0.1, d_source_obstacle);

    // Shadow Size Calculation (Simplification for visualisation)
    // h_shadow = h_obstacle * (d_screen / d_obstacle)
    const shadowScale = d_source_screen / safe_d_so;
    const shadowWidth = 0.8 * shadowScale;

    const penumbraWidth = sourceType === 'etendue' ? 0.3 * shadowScale : 0;

    // Gamification
    const [mode, setMode] = useState('explore');
    const [targetNotchWidth, setTargetNotchWidth] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const startChallenge = () => {
        setMode('challenge');
        // Random target width
        const target = Math.random() * 2 + 1; // 1m to 3m
        setTargetNotchWidth(target);
        setObstaclePosition(0); // Reset
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (!targetNotchWidth) return;
        // Check if shadowWidth matches targetNotchWidth within 10%
        if (Math.abs(shadowWidth - targetNotchWidth) / targetNotchWidth < 0.1) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };


    return (
        <group>
            <SuccessOverlay show={showSuccess} message={mode === 'challenge' ? `Bravo ! Ombre de ${shadowWidth.toFixed(2)}m obtenue.` : "Défi réussi !"} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Light source */}

            <group position={[-4, 0, 0]}>
                {sourceType === 'ponctuelle' ? (
                    <Sphere args={[0.3, 16, 16]}>
                        <meshStandardMaterial
                            color="#ffeb3b"
                            emissive="#ff9800"
                            emissiveIntensity={1}
                        />
                    </Sphere>
                ) : (
                    <Box args={[0.3, 1.5, 0.3]}>
                        <meshStandardMaterial
                            color="#ffeb3b"
                            emissive="#ff9800"
                            emissiveIntensity={1}
                        />
                    </Box>
                )}
                <Text position={[0, -1, 0]} fontSize={0.2} color="#fff">
                    Source {sourceType === 'ponctuelle' ? 'ponctuelle' : 'étendue'}
                </Text>
                <pointLight ref={lightRef} position={[0, 0, 0]} intensity={1} color="#fff" />
            </group>

            {/* Light rays */}
            {showRays && (
                <group>
                    {[-0.8, -0.4, 0, 0.4, 0.8].map((offset, i) => (
                        <Line
                            key={i}
                            points={[
                                [-3.5, sourceType === 'etendue' ? offset * 0.8 : 0, 0],
                                [obstaclePosition - 0.6, offset, 0]
                            ]}
                            color="#ffeb3b"
                            lineWidth={2}
                            transparent
                            opacity={0.7}
                        />
                    ))}
                </group>
            )}

            {/* Opaque obstacle */}
            <group position={[obstaclePosition, 0, 0]}>
                <Cylinder args={[0.4, 0.4, 1.5, 16]} rotation={[0, 0, 0]}>
                    <meshStandardMaterial color="#333" />
                </Cylinder>
                <Text position={[0, 1.2, 0]} fontSize={0.15} color="#fff">
                    Obstacle opaque
                </Text>
            </group>

            {/* Screen */}
            <Box args={[0.1, 4, 3]} position={[4, 0, 0]}>
                <meshStandardMaterial color="#e0e0e0" />
            </Box>

            {/* Shadow on screen */}
            {showShadow && (
                <group position={[3.9, 0, 0]}>
                    {/* Umbra (full shadow) */}
                    <Plane args={[0.1, shadowWidth]} rotation={[0, -Math.PI / 2, 0]}>
                        <meshBasicMaterial color="#111" side={THREE.DoubleSide} />
                    </Plane>

                    {/* Penumbra (partial shadow for extended source) */}
                    {sourceType === 'etendue' && (
                        <>
                            <Plane
                                args={[0.1, penumbraWidth]}
                                position={[0, shadowWidth / 2 + penumbraWidth / 2, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                            >
                                <meshBasicMaterial color="#444" transparent opacity={0.5} side={THREE.DoubleSide} />
                            </Plane>
                            <Plane
                                args={[0.1, penumbraWidth]}
                                position={[0, -shadowWidth / 2 - penumbraWidth / 2, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                            >
                                <meshBasicMaterial color="#444" transparent opacity={0.5} side={THREE.DoubleSide} />
                            </Plane>
                        </>
                    )}

                    <Text position={[0.2, -2.3, 0]} fontSize={0.15} color="#fff" rotation={[0, -Math.PI / 2, 0]}>
                        {sourceType === 'etendue' ? 'Ombre + Pénombre' : 'Ombre portée'}
                    </Text>
                </group>
            )}

            {/* Labels */}
            <Text position={[4, 2.3, 0]} fontSize={0.2} color="#fff">
                Écran
            </Text>

            {/* Shadow cone visualization */}
            {showShadow && (
                <Line
                    points={[
                        [obstaclePosition, 0.75, 0],
                        [4, shadowWidth / 2 + (sourceType === 'etendue' ? penumbraWidth : 0), 0]
                    ]}
                    color="#666"
                    lineWidth={1}
                    dashed
                />
            )}

            {/* Challenge Target Visuals */}
            {mode === 'challenge' && (
                <group position={[4, 0, 0]}>
                    <Plane args={[0.1, targetNotchWidth]} rotation={[0, -Math.PI / 2, 0]}>
                        <meshBasicMaterial color="#e91e63" transparent opacity={0.3} side={THREE.DoubleSide} />
                    </Plane>
                    <Text position={[0.2, targetNotchWidth / 2 + 0.2, 0]} fontSize={0.15} color="#e91e63" rotation={[0, -Math.PI / 2, 0]}>
                        Cible
                    </Text>
                    <Text position={[0.2, -targetNotchWidth / 2 - 0.2, 0]} fontSize={0.15} color="#e91e63" rotation={[0, -Math.PI / 2, 0]}>
                        Cible
                    </Text>
                </group>
            )}

            {/* Control Panel */}
            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="💡 Propagation de la Lumière">
                    <div className="p-4 w-[300px] text-white">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-amber-600' : 'bg-gray-700'}`}>Labo</button>
                                <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-pink-600' : 'bg-gray-700'}`}>Défi Ombre 🏆</button>
                            </div>
                            {mode === 'challenge' && <div className="font-bold text-pink-400 text-xs">Score: {score}</div>}
                        </div>

                        {mode === 'challenge' && (
                            <div className="bg-pink-900/40 p-2 rounded mb-4 border border-pink-500/30 text-sm animate-pulse">
                                <div className="font-bold text-pink-300">MISSION:</div>
                                Ajuste l'obstacle pour obtenir une ombre de taille exacte (zone rose).
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-sm mb-2 text-gray-300">
                                Type de source:
                            </label>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSourceType('ponctuelle')}
                                    className={`flex-1 py-2 rounded text-xs ${sourceType === 'ponctuelle' ? 'bg-amber-600' : 'bg-gray-700'}`}
                                >
                                    ⚪ Ponctuelle
                                </button>
                                <button
                                    onClick={() => setSourceType('etendue')}
                                    className={`flex-1 py-2 rounded text-xs ${sourceType === 'etendue' ? 'bg-amber-600' : 'bg-gray-700'}`}
                                >
                                    📏 Étendue
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-gray-300">
                                Position obstacle: {obstaclePosition.toFixed(2)}
                            </label>
                            <input
                                type="range"
                                min="-2"
                                max="2"
                                step="0.05"
                                value={obstaclePosition}
                                onChange={(e) => setObstaclePosition(parseFloat(e.target.value))}
                                className="w-full h-1 accent-amber-500"
                            />
                        </div>

                        {mode === 'challenge' ? (
                            <button onClick={checkChallenge} className="w-full py-2 bg-pink-600 hover:bg-pink-500 rounded font-bold text-sm mb-3">
                                Vérifier l'Ombre
                            </button>
                        ) : (
                            <div className="space-y-2 mb-4">
                                <label className="flex items-center gap-2 text-sm text-gray-300">
                                    <input
                                        type="checkbox"
                                        checked={showRays}
                                        onChange={(e) => setShowRays(e.target.checked)}
                                        className="accent-amber-500"
                                    />
                                    Afficher les rayons
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-300">
                                    <input
                                        type="checkbox"
                                        checked={showShadow}
                                        onChange={(e) => setShowShadow(e.target.checked)}
                                        className="accent-amber-500"
                                    />
                                    Afficher l'ombre
                                </label>
                            </div>
                        )}

                        <div className="bg-amber-800/30 p-2 rounded border border-amber-500/20">
                            <p className="text-xs text-amber-200 font-bold mb-1">
                                📊 Résultat:
                            </p>
                            <p className="text-xs text-gray-300">
                                Largeur Ombre: <strong>{shadowWidth.toFixed(2)} m</strong>
                            </p>
                            {sourceType === 'etendue' && (
                                <p className="text-xs text-gray-300">
                                    Largeur Pénombre: <strong>{penumbraWidth.toFixed(2)} m</strong>
                                </p>
                            )}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

        </group>
    );
}

// ============================================================
// P14. RÉFLEXION DE LA LUMIÈRE
// ============================================================
export function ReflexionLumiereSeconde() {
    const [angleIncidence, setAngleIncidence] = useState(45);
    const [showNormal, setShowNormal] = useState(true);
    const [showAngles, setShowAngles] = useState(true);
    const [mirrorType, setMirrorType] = useState('plan');

    const rad = (angleIncidence * Math.PI) / 180;
    const angleReflexion = angleIncidence; // i = r

    // Gamification
    const [mode, setMode] = useState('explore');
    const [targetAngle, setTargetAngle] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [hitTarget, setHitTarget] = useState(false);

    const startChallenge = () => {
        setMode('challenge');
        // Random target angle (reflected ray direction)
        // Ray source is fixed. Mirror is flat. We vary Incidence angle.
        // Wait, if source is fixed, changing mirror orientation changes incidence angle.
        // In this sim, we change "Angle Incidence".
        // Let's assume the source moves to maintain incidence... OR the mirror rotates?
        // Sim simplifies: user sets 'i'. So 'r' = 'i'.
        // Target should be positioned at some angle R. User must match 'i' to that R.
        const target = Math.floor(Math.random() * 60 + 10); // 10 to 70 deg
        setTargetAngle(target);
        setAngleIncidence(45); // reset
        setHitTarget(false);
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (!targetAngle) return;
        if (Math.abs(angleReflexion - targetAngle) < 3) {
            setHitTarget(true);
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };


    // Calculate ray positions
    const rayLength = 3;
    const incidentEnd = [-rayLength * Math.sin(rad), rayLength * Math.cos(rad), 0];
    const reflectedEnd = [rayLength * Math.sin(rad), rayLength * Math.cos(rad), 0];

    return (
        <group>
            <SuccessOverlay show={showSuccess} message="Cible touchée ! Excellent tir." points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Mirror surface */}

            <group rotation={[0, 0, 0]}>
                {mirrorType === 'plan' ? (
                    <Box args={[6, 0.1, 2]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#90caf9" metalness={0.9} roughness={0.1} />
                    </Box>
                ) : (
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[3, 3, 2, 32, 1, true, Math.PI * 0.75, Math.PI * 0.5]} />
                        <meshStandardMaterial color="#90caf9" metalness={0.9} roughness={0.1} side={THREE.DoubleSide} />
                    </mesh>
                )}
                <Text position={[0, -0.5, 0]} fontSize={0.2} color="#fff">
                    Miroir {mirrorType}
                </Text>
            </group>

            {/* Normal line */}
            {showNormal && (
                <group>
                    <Line
                        points={[[0, 0, 0], [0, 3.5, 0]]}
                        color="#9c27b0"
                        lineWidth={2}
                        dashed
                        dashSize={0.1}
                    />
                    <Text position={[0.3, 3.2, 0]} fontSize={0.15} color="#9c27b0">
                        Normale (N)
                    </Text>
                </group>
            )}

            {/* Incident ray */}
            <group>
                <Line
                    points={[incidentEnd, [0, 0, 0]]}
                    color="#ffeb3b"
                    lineWidth={4}
                />
                <Sphere args={[0.1, 8, 8]} position={incidentEnd}>
                    <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={0.5} />
                </Sphere>
                <Text position={[incidentEnd[0] - 0.5, incidentEnd[1] + 0.3, 0]} fontSize={0.15} color="#ffeb3b">
                    Rayon incident
                </Text>
            </group>

            {/* Reflected ray */}
            <group>
                <Line
                    points={[[0, 0, 0], reflectedEnd]}
                    color="#4caf50"
                    lineWidth={4}
                />
                <Text position={[reflectedEnd[0] + 0.3, reflectedEnd[1] + 0.3, 0]} fontSize={0.15} color="#4caf50">
                    Rayon réfléchi
                </Text>
            </group>

            {/* Angle arcs */}
            {showAngles && (
                <group>
                    {/* Incidence angle arc */}
                    <mesh rotation={[0, 0, 0]}>
                        <ringGeometry args={[0.8, 0.9, 32, 1, Math.PI / 2, rad]} />
                        <meshBasicMaterial color="#ffeb3b" transparent opacity={0.5} side={THREE.DoubleSide} />
                    </mesh>
                    <Text position={[-0.5, 1.2, 0]} fontSize={0.15} color="#ffeb3b">
                        i = {angleIncidence}°
                    </Text>

                    {/* Reflection angle arc */}
                    <mesh rotation={[0, 0, 0]}>
                        <ringGeometry args={[0.8, 0.9, 32, 1, Math.PI / 2 - rad, rad]} />
                        <meshBasicMaterial color="#4caf50" transparent opacity={0.5} side={THREE.DoubleSide} />
                    </mesh>
                    <Text position={[0.5, 1.2, 0]} fontSize={0.15} color="#4caf50">
                        r = {angleReflexion}°
                    </Text>
                </group>
            )}

            {/* Point of incidence */}
            <Sphere args={[0.12, 16, 16]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#f44336" />
            </Sphere>
            <Text position={[0.3, -0.25, 0]} fontSize={0.12} color="#f44336">
                I
            </Text>

            {/* Virtual image indicator (for plane mirror) */}
            {mirrorType === 'plan' && mode === 'explore' && (
                <group position={[0, -2.5, 0]}>
                    <Sphere args={[0.15, 16, 16]} position={incidentEnd}>
                        <meshStandardMaterial color="#ffeb3b" transparent opacity={0.4} />
                    </Sphere>
                    <Text position={[incidentEnd[0], incidentEnd[1] - 0.3, 0]} fontSize={0.12} color="#aaa">
                        Image virtuelle
                    </Text>
                    <Line
                        points={[[0, 0, 0], [incidentEnd[0], incidentEnd[1], 0]]}
                        color="#aaa"
                        lineWidth={1}
                        dashed
                    />
                </group>
            )}

            {/* Target for Challenge */}
            {mode === 'challenge' && targetAngle && (
                <group>
                    {/* The Target Position - needs to be hit by reflected ray */}
                    {/* Reflected ray angle is 'r'. We need target to be at angle 'targetAngle' */}
                    <group rotation={[0, 0, -targetAngle * Math.PI / 180]}>
                        <mesh position={[0, 2.5, 0]}>
                            <circleGeometry args={[0.3, 32]} />
                            <meshBasicMaterial color={hitTarget ? "#4caf50" : "#e91e63"} transparent opacity={0.5} />
                        </mesh>
                        <Text position={[0, 2.5, 0.1]} fontSize={0.1} color="white">CIBLE</Text>
                    </group>
                </group>
            )}

            {/* Control Panel */}
            <Html position={[5, 3, 0]} transform={false}>
                <DraggableHtmlPanel title="🪞 Réflexion de la Lumière">
                    <div className="p-4 w-[300px] text-white">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                                <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-pink-600' : 'bg-gray-700'}`}>Défi Tir 🏆</button>
                            </div>
                            {mode === 'challenge' && <div className="font-bold text-pink-400 text-xs">{score} pts</div>}
                        </div>

                        {mode === 'challenge' && (
                            <div className="bg-pink-900/40 p-2 rounded mb-4 border border-pink-500/30 text-sm animate-pulse">
                                <div className="font-bold text-pink-300">MISSION:</div>
                                Oriente le miroir (angle i) pour que le rayon réfléchi touche la cible !
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-gray-300">
                                Angle d'incidence (i): <span className="text-yellow-400 font-bold">{angleIncidence}°</span>
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="80"
                                value={angleIncidence}
                                onChange={(e) => setAngleIncidence(parseFloat(e.target.value))}
                                className="w-full accent-yellow-400"
                            />
                        </div>

                        {mode === 'explore' && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-sm mb-2 text-gray-300">Type de miroir:</label>
                                    <div className="flex gap-2">
                                        <button onClick={() => setMirrorType('plan')} className={`flex-1 py-2 rounded text-xs ${mirrorType === 'plan' ? 'bg-blue-600' : 'bg-gray-700'}`}>📏 Plan</button>
                                        <button onClick={() => setMirrorType('courbe')} className={`flex-1 py-2 rounded text-xs ${mirrorType === 'courbe' ? 'bg-blue-600' : 'bg-gray-700'}`}>🔵 Courbe</button>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <label className="flex items-center gap-2 text-sm text-gray-300">
                                        <input type="checkbox" checked={showNormal} onChange={(e) => setShowNormal(e.target.checked)} className="accent-blue-500" />
                                        Afficher la normale
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-300">
                                        <input type="checkbox" checked={showAngles} onChange={(e) => setShowAngles(e.target.checked)} className="accent-blue-500" />
                                        Afficher les angles
                                    </label>
                                </div>
                            </>
                        )}

                        {mode === 'challenge' && (
                            <button onClick={checkChallenge} disabled={hitTarget} className={`w-full py-2 rounded font-bold text-sm mb-3 ${hitTarget ? 'bg-green-600' : 'bg-pink-600 hover:bg-pink-500'}`}>
                                {hitTarget ? 'CIBLE TOUCHÉE !' : 'Tirer / Vérifier'}
                            </button>
                        )}

                        <div className="bg-blue-900/20 p-2 rounded border border-blue-500/20">
                            <p className="text-xs text-blue-200 font-bold mb-1">
                                ⚖️ Loi de la Réflexion:
                            </p>
                            <div className="flex justify-between text-xs text-gray-300">
                                <span>Incidence (i):</span>
                                <strong className="text-yellow-400">{angleIncidence}°</strong>
                            </div>
                            <div className="flex justify-between text-xs text-gray-300">
                                <span>Réflexion (r):</span>
                                <strong className="text-green-400">{angleReflexion}°</strong>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

        </group>
    );
}

// ============================================================
// P15. RÉFRACTION ET DISPERSION
// ============================================================
export function RefractionDispersionSeconde() {
    const [angleIncidence, setAngleIncidence] = useState(45);
    const [milieu1, setMilieu1] = useState('air');
    const [milieu2, setMilieu2] = useState('eau');
    const [showNormal, setShowNormal] = useState(true);
    const [showDispersion, setShowDispersion] = useState(false);

    // Gamification
    const [mode, setMode] = useState('explore');
    const [mysteryIndex, setMysteryIndex] = useState(null);
    const [guessIndex, setGuessIndex] = useState(1.5);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const indices = {
        air: { n: 1.0, color: '#e3f2fd', name: 'Air' },
        eau: { n: 1.33, color: '#81d4fa', name: 'Eau' },
        verre: { n: 1.5, color: '#b2dfdb', name: 'Verre' },
        diamant: { n: 2.4, color: '#e1bee7', name: 'Diamant' },
        mystery: { n: mysteryIndex || 1.6, color: '#9e9e9e', name: 'Mystère ???' }
    };

    const startChallenge = () => {
        setMode('challenge');
        // Random mystery index between 1.3 and 2.5
        const secret = Number((Math.random() * 1.2 + 1.3).toFixed(2));
        setMysteryIndex(secret);
        setMilieu1('air');
        setMilieu2('mystery');
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (!mysteryIndex) return;
        if (Math.abs(guessIndex - mysteryIndex) < 0.05) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    const n1 = indices[milieu1].n;
    const n2 = indices[milieu2].n;
    const rad1 = (angleIncidence * Math.PI) / 180;

    // Snell-Descartes law: n1 * sin(i1) = n2 * sin(i2)
    const sinI2 = (n1 * Math.sin(rad1)) / n2;
    const hasTotalReflection = sinI2 > 1;
    const angleRefraction = hasTotalReflection ? 90 : (Math.asin(sinI2) * 180) / Math.PI;
    const rad2 = (angleRefraction * Math.PI) / 180;

    // Calculate critical angle
    const criticalAngle = n1 > n2 ? (Math.asin(n2 / n1) * 180) / Math.PI : null;

    const rayLength = 2.5;

    // Dispersion colors (for prism effect)
    const spectrumColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'];

    return (
        <group>
            {/* First medium (top) */}
            <Box args={[8, 3, 2]} position={[0, 1.5, 0]}>
                <meshStandardMaterial
                    color={indices[milieu1].color}
                    transparent
                    opacity={0.3}
                />
            </Box>
            <Text position={[-3, 2.5, 1]} fontSize={0.2} color="#333">
                {indices[milieu1].name} (n₁ = {n1})
            </Text>

            {/* Second medium (bottom) */}
            <Box args={[8, 3, 2]} position={[0, -1.5, 0]}>
                <meshStandardMaterial
                    color={indices[milieu2].color}
                    transparent
                    opacity={0.5}
                />
            </Box>
            <Text position={[-3, -2.5, 1]} fontSize={0.2} color="#333">
                {indices[milieu2].name} (n₂ = {n2})
            </Text>

            {/* Interface (dioptre) */}
            <Box args={[8, 0.05, 2]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#fff" />
            </Box>

            {/* Normal */}
            {showNormal && (
                <group>
                    <Line
                        points={[[0, -2.5, 0], [0, 2.5, 0]]}
                        color="#9c27b0"
                        lineWidth={2}
                        dashed
                    />
                    <Text position={[0.3, 2.2, 0]} fontSize={0.15} color="#9c27b0">
                        Normale
                    </Text>
                </group>
            )}

            {/* Incident ray */}
            <Line
                points={[
                    [-rayLength * Math.sin(rad1), rayLength * Math.cos(rad1), 0],
                    [0, 0, 0]
                ]}
                color="#ffeb3b"
                lineWidth={4}
            />
            <Text position={[-rayLength * Math.sin(rad1) * 0.5 - 0.5, rayLength * Math.cos(rad1) * 0.5, 0]} fontSize={0.15} color="#ffeb3b">
                Incident
            </Text>

            {/* Refracted ray (or total reflection) */}
            {!showDispersion && (
                hasTotalReflection ? (
                    // Total internal reflection
                    <group>
                        <Line
                            points={[
                                [0, 0, 0],
                                [rayLength * Math.sin(rad1), rayLength * Math.cos(rad1), 0]
                            ]}
                            color="#f44336"
                            lineWidth={4}
                        />
                        <Text position={[1.5, 1.5, 0]} fontSize={0.2} color="#f44336">
                            ⚠️ Réflexion Totale!
                        </Text>
                    </group>
                ) : (
                    <group>
                        <Line
                            points={[
                                [0, 0, 0],
                                [rayLength * Math.sin(rad2), -rayLength * Math.cos(rad2), 0]
                            ]}
                            color="#4caf50"
                            lineWidth={4}
                        />
                        <Text position={[rayLength * Math.sin(rad2) * 0.5 + 0.3, -rayLength * Math.cos(rad2) * 0.5, 0]} fontSize={0.15} color="#4caf50">
                            Réfracté
                        </Text>
                    </group>
                )
            )}

            {/* Dispersion (spectrum) */}
            {showDispersion && !hasTotalReflection && (
                <group>
                    {spectrumColors.map((color, i) => {
                        const dispersionAngle = angleRefraction + (i - 3) * 2;
                        const dispRad = (dispersionAngle * Math.PI) / 180;
                        return (
                            <Line
                                key={i}
                                points={[
                                    [0, 0, 0],
                                    [rayLength * Math.sin(dispRad), -rayLength * Math.cos(dispRad), 0]
                                ]}
                                color={color}
                                lineWidth={3}
                            />
                        );
                    })}
                    <Text position={[2, -2, 0]} fontSize={0.15} color="#fff">
                        Dispersion (Spectre)
                    </Text>
                </group>
            )}

            {/* Success Overlay integrated for Refraction */}
            <SuccessOverlay show={showSuccess} message={`Bravo ! Indice n = ${mysteryIndex}`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />


            {/* Angle indicators */}
            <Text position={[-0.8, 0.8, 0]} fontSize={0.15} color="#ffeb3b">
                i₁ = {angleIncidence}°
            </Text>
            {!hasTotalReflection && (
                <Text position={[0.5, -0.8, 0]} fontSize={0.15} color="#4caf50">
                    i₂ = {angleRefraction.toFixed(1)}°
                </Text>
            )}

            {/* Control Panel */}
            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🔬 Réfraction & Dispersion">
                    <div style={{ padding: '15px', minWidth: '300px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>
                                Angle d'incidence: {angleIncidence}°
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="85"
                                value={angleIncidence}
                                onChange={(e) => setAngleIncidence(parseFloat(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                            <div>
                                <label style={{ color: '#fff', display: 'block', marginBottom: '5px', fontSize: '12px' }}>
                                    Milieu 1 (dessus):
                                </label>
                                <select
                                    value={milieu1}
                                    onChange={(e) => setMilieu1(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '6px',
                                        background: '#333',
                                        color: '#fff',
                                        border: 'none'
                                    }}
                                >
                                    {Object.entries(indices).map(([key, val]) => (
                                        <option key={key} value={key}>{val.name} (n={val.n})</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label style={{ color: '#fff', display: 'block', marginBottom: '5px', fontSize: '12px' }}>
                                    Milieu 2 (dessous):
                                </label>
                                <select
                                    value={milieu2}
                                    onChange={(e) => setMilieu2(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        borderRadius: '6px',
                                        background: '#333',
                                        color: '#fff',
                                        border: 'none'
                                    }}
                                >
                                    {Object.entries(indices).map(([key, val]) => (
                                        <option key={key} value={key}>{val.name} (n={val.n})</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Challenge Mode UI */}
                        {mode === 'challenge' ? (
                            <div className="bg-purple-900/40 p-3 rounded mb-4 border border-purple-500/30">
                                <p className="text-xs text-purple-300 font-bold mb-2">🔎 Trouve l'indice n du milieu Mystère !</p>
                                <p className="text-[10px] text-gray-300 mb-2">Indice: Utilise la loi calculée ci-dessous.</p>

                                <label className="block text-xs text-gray-300 mb-1">Ton estimation de n:</label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={guessIndex}
                                        onChange={e => setGuessIndex(Number(e.target.value))}
                                        className="w-20 bg-gray-800 border border-purple-500 rounded px-1 text-sm"
                                    />
                                    <button onClick={checkChallenge} className="flex-1 bg-purple-600 hover:bg-purple-500 rounded font-bold text-xs">
                                        Valider
                                    </button>
                                </div>
                            </div>
                        ) : null}

                        {/* Mode Switcher */}
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('explore')} className={`flex-1 py-1 rounded text-xs ${mode === 'explore' ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`flex-1 py-1 rounded text-xs ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Défi Mystère 🕵️</button>
                        </div>



                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showNormal}
                                    onChange={(e) => setShowNormal(e.target.checked)}
                                />
                                Afficher la normale
                            </label>
                            <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <input
                                    type="checkbox"
                                    checked={showDispersion}
                                    onChange={(e) => setShowDispersion(e.target.checked)}
                                />
                                🌈 Afficher la dispersion
                            </label>
                        </div>

                        <div style={{
                            background: hasTotalReflection ? 'rgba(244,67,54,0.3)' : 'rgba(76,175,80,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '10px'
                        }}>
                            <p style={{ color: hasTotalReflection ? '#ef9a9a' : '#81c784', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                📊 Calculs (Snell-Descartes):
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                n₁ × sin(i₁) = n₂ × sin(i₂)
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                {n1} × sin({angleIncidence}°) = {n2} × sin(i₂)
                            </p>
                            <p style={{ color: '#fff', margin: '3px 0', fontSize: '12px' }}>
                                sin(i₂) = {sinI2.toFixed(4)}
                            </p>
                            {hasTotalReflection ? (
                                <p style={{ color: '#f44336', margin: '8px 0 0 0', fontWeight: 'bold' }}>
                                    ⚠️ sin(i₂) {'>'} 1 → Réflexion totale!
                                </p>
                            ) : (
                                <p style={{ color: '#4caf50', margin: '8px 0 0 0', fontWeight: 'bold' }}>
                                    i₂ = {angleRefraction.toFixed(1)}°
                                </p>
                            )}
                            {criticalAngle && (
                                <p style={{ color: '#ff9800', margin: '5px 0 0 0', fontSize: '11px' }}>
                                    Angle limite: {criticalAngle.toFixed(1)}°
                                </p>
                            )}
                        </div>

                        <div style={{
                            background: 'rgba(33,150,243,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            fontSize: '11px',
                            color: '#90caf9'
                        }}>
                            <strong>📐 Loi de Snell-Descartes:</strong><br />
                            n₁ × sin(i₁) = n₂ × sin(i₂)<br />
                            Utile pour trouver un indice inconnu !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html >

        </group >
    );
}

export default {
    PropagationLumiereSeconde,
    ReflexionLumiereSeconde,
    RefractionDispersionSeconde
};
