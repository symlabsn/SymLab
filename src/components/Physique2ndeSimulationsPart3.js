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
import { PhaseSelector, GradeBadge, MissionObjective, XPBar } from './GamificationUtils';

// ============================================================
// P13. PROPAGATION RECTILIGNE DE LA LUMIÈRE
// ============================================================
// ============================================================
// P13. PROPAGATION RECTILIGNE DE LA LUMIÈRE (ENRICHI)
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

    const h_obstacle = 0.4;
    const d_source_screen = 8;
    const d_source_obstacle = obstaclePosition - (-4);
    const safe_d_so = Math.max(0.1, d_source_obstacle);
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
        const target = Math.random() * 2 + 1;
        setTargetNotchWidth(target);
        setObstaclePosition(0);
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (!targetNotchWidth) return;
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
                        <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={1} />
                    </Sphere>
                ) : (
                    <Box args={[0.3, 1.5, 0.3]}>
                        <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={1} />
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
                    <Plane args={[0.1, shadowWidth]} rotation={[0, -Math.PI / 2, 0]}>
                        <meshBasicMaterial color="#111" side={THREE.DoubleSide} />
                    </Plane>

                    {sourceType === 'etendue' && (
                        <>
                            <Plane args={[0.1, penumbraWidth]} position={[0, shadowWidth / 2 + penumbraWidth / 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
                                <meshBasicMaterial color="#444" transparent opacity={0.5} side={THREE.DoubleSide} />
                            </Plane>
                            <Plane args={[0.1, penumbraWidth]} position={[0, -shadowWidth / 2 - penumbraWidth / 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
                                <meshBasicMaterial color="#444" transparent opacity={0.5} side={THREE.DoubleSide} />
                            </Plane>
                        </>
                    )}

                    <Text position={[0.2, -2.3, 0]} fontSize={0.15} color="#fff" rotation={[0, -Math.PI / 2, 0]}>
                        {sourceType === 'etendue' ? 'Ombre + Pénombre' : 'Ombre portée'}
                    </Text>
                </group>
            )}

            <Text position={[4, 2.3, 0]} fontSize={0.2} color="#fff">Écran</Text>

            {showShadow && (
                <Line
                    points={[[obstaclePosition, 0.75, 0], [4, shadowWidth / 2 + (sourceType === 'etendue' ? penumbraWidth : 0), 0]]}
                    color="#666" lineWidth={1} dashed
                />
            )}

            {mode === 'challenge' && (
                <group position={[4, 0, 0]}>
                    <Plane args={[0.1, targetNotchWidth]} rotation={[0, -Math.PI / 2, 0]}>
                        <meshBasicMaterial color="#e91e63" transparent opacity={0.3} side={THREE.DoubleSide} />
                    </Plane>
                    <Text position={[0.2, targetNotchWidth / 2 + 0.2, 0]} fontSize={0.15} color="#e91e63" rotation={[0, -Math.PI / 2, 0]}>Cible</Text>
                    <Text position={[0.2, -targetNotchWidth / 2 - 0.2, 0]} fontSize={0.15} color="#e91e63" rotation={[0, -Math.PI / 2, 0]}>Cible</Text>
                </group>
            )}

            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="💡 Propagation de la Lumière" className="w-[350px] border-amber-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">Module Optique</div>
                            <div className="text-xl font-black text-white leading-none">PROPAGATION</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Observez la formation des ombres !" icon="💡" />
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <label className="text-xs text-gray-400 block mb-2">Type de source</label>
                                    <div className="flex gap-2">
                                        <button onClick={() => setSourceType('ponctuelle')} className={`flex-1 py-2 rounded text-xs ${sourceType === 'ponctuelle' ? 'bg-amber-600' : 'bg-gray-700'}`}>⚪ Ponctuelle</button>
                                        <button onClick={() => setSourceType('etendue')} className={`flex-1 py-2 rounded text-xs ${sourceType === 'etendue' ? 'bg-amber-600' : 'bg-gray-700'}`}>📏 Étendue</button>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-3 rounded">
                                    <label className="text-xs text-gray-400 block mb-1">Position obstacle: {obstaclePosition.toFixed(2)}m</label>
                                    <input type="range" min="-2" max="2" step="0.05" value={obstaclePosition} onChange={(e) => setObstaclePosition(parseFloat(e.target.value))} className="w-full accent-amber-500" />
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                                    <label className="flex items-center gap-2"><input type="checkbox" checked={showRays} onChange={(e) => setShowRays(e.target.checked)} className="accent-amber-500" /> Rayons</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" checked={showShadow} onChange={(e) => setShowShadow(e.target.checked)} className="accent-amber-500" /> Ombre</label>
                                </div>

                                <div className="bg-amber-900/20 p-2 rounded text-center">
                                    <div className="text-xs text-amber-200">Largeur Ombre</div>
                                    <div className="text-lg font-bold text-white">{shadowWidth.toFixed(2)} m</div>
                                    {sourceType === 'etendue' && <div className="text-xs text-gray-400 mt-1">Pénombre: {penumbraWidth.toFixed(2)} m</div>}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-amber-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-amber-300 font-bold flex items-center gap-2">
                                    <span>🎥</span> Défi Projectionniste
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetNotchWidth ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-black/30 p-3 rounded border border-amber-500/30 text-center">
                                        <div className="text-amber-200 text-xs uppercase mb-1">Cible (Zone Rose)</div>
                                        <div className="font-bold text-2xl text-white">{targetNotchWidth.toFixed(2)} m</div>
                                        <div className="text-xs text-gray-500">Ajuste la position de l'obstacle</div>
                                    </div>

                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-gray-400 block mb-1">Position Obstacle</label>
                                        <input type="range" min="-2" max="2" step="0.01" value={obstaclePosition} onChange={e => setObstaclePosition(parseFloat(e.target.value))} className="w-full accent-amber-500" />
                                        <div className="flex justify-between text-xs mt-1">
                                            <span>Proche Source</span>
                                            <span>Proche Écran</span>
                                        </div>
                                    </div>

                                    <div className="text-center text-xs">
                                        <span className="text-gray-400">Taille Actuelle: </span>
                                        <strong className={Math.abs(shadowWidth - targetNotchWidth) / targetNotchWidth < 0.1 ? 'text-green-400' : 'text-white'}>{shadowWidth.toFixed(2)} m</strong>
                                    </div>

                                    <button onClick={checkChallenge} className="w-full py-2 bg-pink-600 hover:bg-pink-500 rounded-lg font-bold text-white shadow-lg shadow-pink-900/30">
                                        Vérifier la Taille
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold shadow-lg shadow-amber-900/20 transition-all transform hover:scale-105">
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
// P14. RÉFLEXION DE LA LUMIÈRE
// ============================================================
// ============================================================
// P14. RÉFLEXION DE LA LUMIÈRE (ENRICHI)
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
        // Random target angle
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
                    <Line points={[[0, 0, 0], [0, 3.5, 0]]} color="#9c27b0" lineWidth={2} dashed dashSize={0.1} />
                    <Text position={[0.3, 3.2, 0]} fontSize={0.15} color="#9c27b0">Normale (N)</Text>
                </group>
            )}

            {/* Incident ray */}
            <group>
                <Line points={[incidentEnd, [0, 0, 0]]} color="#ffeb3b" lineWidth={4} />
                <Sphere args={[0.1, 8, 8]} position={incidentEnd}>
                    <meshStandardMaterial color="#ffeb3b" emissive="#ff9800" emissiveIntensity={0.5} />
                </Sphere>
                <Text position={[incidentEnd[0] - 0.5, incidentEnd[1] + 0.3, 0]} fontSize={0.15} color="#ffeb3b">Rayon incident</Text>
            </group>

            {/* Reflected ray */}
            <group>
                <Line points={[[0, 0, 0], reflectedEnd]} color="#4caf50" lineWidth={4} />
                <Text position={[reflectedEnd[0] + 0.3, reflectedEnd[1] + 0.3, 0]} fontSize={0.15} color="#4caf50">Rayon réfléchi</Text>
            </group>

            {/* Angle arcs */}
            {showAngles && (
                <group>
                    <mesh rotation={[0, 0, 0]}>
                        <ringGeometry args={[0.8, 0.9, 32, 1, Math.PI / 2, rad]} />
                        <meshBasicMaterial color="#ffeb3b" transparent opacity={0.5} side={THREE.DoubleSide} />
                    </mesh>
                    <Text position={[-0.5, 1.2, 0]} fontSize={0.15} color="#ffeb3b">i = {angleIncidence}°</Text>

                    <mesh rotation={[0, 0, 0]}>
                        <ringGeometry args={[0.8, 0.9, 32, 1, Math.PI / 2 - rad, rad]} />
                        <meshBasicMaterial color="#4caf50" transparent opacity={0.5} side={THREE.DoubleSide} />
                    </mesh>
                    <Text position={[0.5, 1.2, 0]} fontSize={0.15} color="#4caf50">r = {angleReflexion}°</Text>
                </group>
            )}

            {/* Point of incidence */}
            <Sphere args={[0.12, 16, 16]} position={[0, 0, 0]}><meshStandardMaterial color="#f44336" /></Sphere>
            <Text position={[0.3, -0.25, 0]} fontSize={0.12} color="#f44336">I</Text>

            {/* Virtual image indicator (for plane mirror) */}
            {mirrorType === 'plan' && mode === 'explore' && (
                <group position={[0, -2.5, 0]}>
                    <Sphere args={[0.15, 16, 16]} position={incidentEnd}>
                        <meshStandardMaterial color="#ffeb3b" transparent opacity={0.4} />
                    </Sphere>
                    <Text position={[incidentEnd[0], incidentEnd[1] - 0.3, 0]} fontSize={0.12} color="#aaa">Image virtuelle</Text>
                    <Line points={[[0, 0, 0], [incidentEnd[0], incidentEnd[1], 0]]} color="#aaa" lineWidth={1} dashed />
                </group>
            )}

            {/* Target for Challenge */}
            {mode === 'challenge' && targetAngle && (
                <group>
                    <group rotation={[0, 0, -targetAngle * Math.PI / 180]}>
                        <mesh position={[0, 2.5, 0]}>
                            <circleGeometry args={[0.3, 32]} />
                            <meshBasicMaterial color={hitTarget ? "#4caf50" : "#e91e63"} transparent opacity={0.5} />
                        </mesh>
                        <Text position={[0, 2.5, 0.1]} fontSize={0.1} color="white">CIBLE</Text>
                    </group>
                </group>
            )}

            <Html position={[5, 3, 0]} transform={false}>
                <DraggableHtmlPanel title="🪞 Réflexion de la Lumière" className="w-[350px] border-blue-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Module Optique</div>
                            <div className="text-xl font-black text-white leading-none">RÉFLEXION</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Manipulez la lumière avec un miroir !" icon="🪞" />
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <label className="text-xs text-secondary block mb-2">Type de miroir</label>
                                    <div className="flex gap-2">
                                        <button onClick={() => setMirrorType('plan')} className={`flex-1 py-2 rounded text-xs ${mirrorType === 'plan' ? 'bg-blue-600' : 'bg-gray-700'}`}>📏 Plan</button>
                                        <button onClick={() => setMirrorType('courbe')} className={`flex-1 py-2 rounded text-xs ${mirrorType === 'courbe' ? 'bg-blue-600' : 'bg-gray-700'}`}>🔵 Courbe</button>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-3 rounded border-l-4 border-yellow-500">
                                    <label className="text-xs text-yellow-400 block mb-1">Angle d'incidence (i)</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="10" max="80" value={angleIncidence} onChange={(e) => setAngleIncidence(parseFloat(e.target.value))} className="flex-1 accent-yellow-400" />
                                        <span className="font-bold w-10 text-right">{angleIncidence}°</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                                    <label className="flex items-center gap-2"><input type="checkbox" checked={showNormal} onChange={(e) => setShowNormal(e.target.checked)} className="accent-blue-500" /> Normale</label>
                                    <label className="flex items-center gap-2"><input type="checkbox" checked={showAngles} onChange={(e) => setShowAngles(e.target.checked)} className="accent-blue-500" /> Angles</label>
                                </div>

                                <div className="bg-blue-900/20 p-2 rounded text-center">
                                    <div className="text-xs text-blue-200">Loi de la Réflexion</div>
                                    <div className="font-bold text-white">i = r</div>
                                    <div className="text-xs text-gray-400">{angleIncidence}° = {angleReflexion}°</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-blue-300 font-bold flex items-center gap-2">
                                    <span>🎯</span> Défi Sniper Optique
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetAngle ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-pink-900/30 p-3 rounded border border-pink-500/30 text-center">
                                        <div className="text-pink-200 text-xs uppercase mb-1">Cible Détectée</div>
                                        <div className="font-bold text-lg text-white">Angle Cible: {targetAngle}°</div>
                                    </div>

                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-yellow-400 block mb-1">Ajuste l'Angle d'Incidence</label>
                                        <div className="flex items-center gap-2">
                                            <input type="range" min="10" max="80" value={angleIncidence} onChange={(e) => setAngleIncidence(parseFloat(e.target.value))} className="w-full accent-yellow-500" />
                                            <span className="text-xs font-mono w-8">{angleIncidence}°</span>
                                        </div>
                                    </div>

                                    <button onClick={checkChallenge} disabled={hitTarget} className={`w-full py-2 rounded-lg font-bold text-white shadow-lg ${hitTarget ? 'bg-green-600' : 'bg-pink-600 hover:bg-pink-500 shadow-pink-900/30'}`}>
                                        {hitTarget ? 'CIBLE TOUCHÉE !' : 'Tirer le Rayon'}
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-900/20 transition-all transform hover:scale-105">
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
// P15. RÉFRACTION ET DISPERSION (ENRICHI)
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
        // Random mystery index
        const secret = Number((Math.random() * 1.0 + 1.2).toFixed(2)); // 1.2 to 2.2
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

    // Snell-Descartes: n1 sin i1 = n2 sin i2
    const sinI2 = (n1 * Math.sin(rad1)) / n2;
    const hasTotalReflection = sinI2 > 1;
    const angleRefraction = hasTotalReflection ? 90 : (Math.asin(sinI2) * 180) / Math.PI;
    const rad2 = (angleRefraction * Math.PI) / 180;

    const rayLength = 2.5;
    const spectrumColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'];

    return (
        <group>
            {/* First medium (top) */}
            <Box args={[8, 3, 2]} position={[0, 1.5, 0]}>
                <meshStandardMaterial color={indices[milieu1].color} transparent opacity={0.3} />
            </Box>
            <Text position={[-3, 2.5, 1]} fontSize={0.2} color="#333">{indices[milieu1].name} (n₁ = {n1})</Text>

            {/* Second medium (bottom) */}
            <Box args={[8, 3, 2]} position={[0, -1.5, 0]}>
                <meshStandardMaterial color={indices[milieu2].color} transparent opacity={0.5} />
            </Box>
            <Text position={[-3, -2.5, 1]} fontSize={0.2} color="#333">
                {indices[milieu2].name} (n₂ = {mode === 'challenge' && milieu2 === 'mystery' ? '?' : n2})
            </Text>

            {/* Interface */}
            <Box args={[8, 0.05, 2]} position={[0, 0, 0]}><meshStandardMaterial color="#fff" /></Box>

            {/* Normal */}
            {showNormal && (
                <group>
                    <Line points={[[0, -2.5, 0], [0, 2.5, 0]]} color="#9c27b0" lineWidth={2} dashed />
                    <Text position={[0.3, 2.2, 0]} fontSize={0.15} color="#9c27b0">Normale</Text>
                </group>
            )}

            {/* Incident ray */}
            <Line points={[[-rayLength * Math.sin(rad1), rayLength * Math.cos(rad1), 0], [0, 0, 0]]} color="#ffeb3b" lineWidth={4} />
            <Text position={[-rayLength * Math.sin(rad1) * 0.5 - 0.5, rayLength * Math.cos(rad1) * 0.5, 0]} fontSize={0.15} color="#ffeb3b">Incident</Text>

            {/* Refracted ray */}
            {!showDispersion && (
                hasTotalReflection ? (
                    <group>
                        <Line points={[[0, 0, 0], [rayLength * Math.sin(rad1), rayLength * Math.cos(rad1), 0]]} color="#f44336" lineWidth={4} />
                        <Text position={[1.5, 1.5, 0]} fontSize={0.2} color="#f44336">⚠️ Réflexion Totale!</Text>
                    </group>
                ) : (
                    <group>
                        <Line points={[[0, 0, 0], [rayLength * Math.sin(rad2), -rayLength * Math.cos(rad2), 0]]} color="#4caf50" lineWidth={4} />
                        <Text position={[rayLength * Math.sin(rad2) * 0.5 + 0.3, -rayLength * Math.cos(rad2) * 0.5, 0]} fontSize={0.15} color="#4caf50">Réfracté</Text>
                    </group>
                )
            )}

            {/* Dispersion */}
            {showDispersion && !hasTotalReflection && (
                <group>
                    {spectrumColors.map((color, i) => {
                        const dispersionAngle = angleRefraction + (i - 3) * 2;
                        const dispRad = (dispersionAngle * Math.PI) / 180;
                        return (
                            <Line key={i} points={[[0, 0, 0], [rayLength * Math.sin(dispRad), -rayLength * Math.cos(dispRad), 0]]} color={color} lineWidth={3} />
                        );
                    })}
                    <Text position={[2, -2, 0]} fontSize={0.15} color="#fff">Dispersion (Spectre)</Text>
                </group>
            )}

            <SuccessOverlay show={showSuccess} message={`Bravo ! Indice n = ${mysteryIndex}`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Angle indicators */}
            <Text position={[-0.8, 0.8, 0]} fontSize={0.15} color="#ffeb3b">i₁ = {angleIncidence}°</Text>
            {!hasTotalReflection && (
                <Text position={[0.5, -0.8, 0]} fontSize={0.15} color="#4caf50">i₂ = {angleRefraction.toFixed(1)}°</Text>
            )}

            <Html position={[6, 2, 0]} transform={false}>
                <DraggableHtmlPanel title="🔬 Réfraction & Dispersion" className="w-[380px] border-cyan-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1">Module Optique</div>
                            <div className="text-xl font-black text-white leading-none">RÉFRACTION</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Simulez le changement de milieu !" icon="🧪" />
                            <div className="space-y-4">
                                <div className="bg-gray-800 p-3 rounded">
                                    <label className="text-xs text-secondary block mb-2">Milieux</label>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        <select value={milieu1} onChange={e => setMilieu1(e.target.value)} className="bg-gray-700 text-xs p-1 rounded">
                                            {Object.keys(indices).filter(k => k !== 'mystery').map(k => <option key={k} value={k}>{indices[k].name}</option>)}
                                        </select>
                                        <select value={milieu2} onChange={e => setMilieu2(e.target.value)} className="bg-gray-700 text-xs p-1 rounded">
                                            {Object.keys(indices).filter(k => k !== 'mystery').map(k => <option key={k} value={k}>{indices[k].name}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>n₁ = {n1}</span>
                                        <span>n₂ = {n2}</span>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-3 rounded border-l-4 border-yellow-500">
                                    <label className="text-xs text-yellow-500 block mb-1">Angle d'incidence (i₁)</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="5" max="85" value={angleIncidence} onChange={(e) => setAngleIncidence(parseFloat(e.target.value))} className="flex-1 accent-yellow-400" />
                                        <span className="font-bold w-10 text-right text-sm">{angleIncidence}°</span>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2 text-xs text-gray-300">
                                            <input type="checkbox" checked={showNormal} onChange={(e) => setShowNormal(e.target.checked)} className="accent-cyan-500" /> Normale
                                        </label>
                                        <label className="flex items-center gap-2 text-xs text-gray-300">
                                            <input type="checkbox" checked={showDispersion} onChange={(e) => setShowDispersion(e.target.checked)} className="accent-purple-500" /> Dispersion
                                        </label>
                                    </div>
                                </div>

                                <div className="bg-cyan-900/20 p-2 rounded text-center">
                                    <div className="text-xs text-cyan-200">Loi de Snell-Descartes</div>
                                    <div className="font-bold text-white text-sm">n₁ sin(i₁) = n₂ sin(i₂)</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-cyan-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-cyan-300 font-bold flex items-center gap-2">
                                    <span>🕵️</span> Défi Indice Mystère
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {mysteryIndex ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-gray-800 p-3 rounded border border-gray-600 text-center">
                                        <div className="text-gray-400 text-xs uppercase mb-1">Matériau Inconnu</div>
                                        <div className="font-bold text-xl text-white">n₂ = ???</div>
                                        <div className="text-xs text-gray-500 mt-1">Change l'angle et devine l'indice !</div>
                                    </div>

                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-yellow-400 block mb-1">Angle d'incidence (i₁)</label>
                                        <input type="range" min="5" max="85" value={angleIncidence} onChange={(e) => setAngleIncidence(parseFloat(e.target.value))} className="w-full accent-yellow-400" />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                                            <span>i₁ = {angleIncidence}°</span>
                                            <span>i₂ = {hasTotalReflection ? 'Refl. Tot.' : angleRefraction.toFixed(1) + '°'}</span>
                                        </div>
                                    </div>

                                    <div className="bg-cyan-900/20 p-3 rounded border border-cyan-500/30">
                                        <label className="text-xs text-cyan-300 font-bold block mb-2">Ton Estimation de n₂</label>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => setGuessIndex(g => Math.max(1, Number((g - 0.05).toFixed(2))))} className="px-2 bg-gray-700 rounded text-lg font-bold">-</button>
                                            <div className="flex-1 text-center font-mono text-xl font-bold bg-black/30 rounded py-1 border border-cyan-500/50 text-cyan-400">
                                                {guessIndex.toFixed(2)}
                                            </div>
                                            <button onClick={() => setGuessIndex(g => Math.min(3, Number((g + 0.05).toFixed(2))))} className="px-2 bg-gray-700 rounded text-lg font-bold">+</button>
                                        </div>
                                    </div>

                                    <button onClick={checkChallenge} className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold text-white shadow-lg shadow-cyan-900/30">
                                        Valider mon hypothèse
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

export default {
    PropagationLumiereSeconde,
    ReflexionLumiereSeconde,
    RefractionDispersionSeconde
};
