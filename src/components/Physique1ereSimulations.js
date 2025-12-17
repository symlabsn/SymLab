import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, useTexture, Text, Line, Sphere, Box, Cylinder, Plane, Cone, Environment, Trail } from '@react-three/drei';
import * as THREE from 'three';
import { DraggableHtmlPanel } from './DraggableHtmlPanel';
import confetti from 'canvas-confetti';

// ==========================================
// SHARED UTILS (CONFETTI & UI)
// ==========================================
function triggerSuccess(msg) {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00F5D4', '#FF0055', '#FFFF00']
    });
}

function SuccessOverlay({ show, message, onNext }) {
    if (!show) return null;
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className="bg-black/90 p-8 rounded-3xl border-2 border-[#00F5D4] text-center transform animate-bounce-in pointer-events-auto">
                <h2 className="text-4xl mb-4">🎉 Bravo ! 🎉</h2>
                <p className="text-xl text-white mb-6 font-bold">{message}</p>
                <button onClick={onNext} className="bg-[#00F5D4] text-black px-8 py-3 rounded-full font-black text-lg hover:scale-105 transition-transform">
                    Prochain Défi ➡️
                </button>
            </div>
        </div>
    );
}

function Grid({ size = 30, divisions = 30 }) {
    return <gridHelper args={[size, divisions, '#333', '#111']} position={[0, -2.1, 0]} />;
}

// ==========================================
// P1-P3: MÉCANIQUE & ÉNERGIE (ROLLER COASTER DELUXE)
// ==========================================
export function EnergieMecaniqueSim() {
    // Mode: 'explore', 'challenge'
    const [mode, setMode] = useState('explore');
    const [challengeLevel, setChallengeLevel] = useState(0);
    const [success, setSuccess] = useState(false);

    // Physics State
    const [height, setHeight] = useState(15);
    const [mass, setMass] = useState(50);
    const [friction, setFriction] = useState(0.01);
    const [isPlaying, setIsPlaying] = useState(false);

    // Realtime
    const [pos, setPos] = useState({ x: -15, y: 15 });
    const [velocity, setVelocity] = useState(0);
    const [energies, setEnergies] = useState({ ec: 0, ep: 0, em: 0 });

    const skaterRef = useRef();
    const trailRef = useRef();

    // Challenge Logic
    // Lvl 1: Reach 15 m/s at bottom
    // Lvl 2: Climb a 8m hill (needs enough initial height)
    const challenges = [
        {
            id: 1,
            desc: "Atteignez une vitesse de 18 m/s au point le plus bas (x=0).",
            check: (v, x) => Math.abs(x) < 1 && v >= 17.5 && v <= 18.5,
            hint: "Ajustez la hauteur de départ. Rappel: v = √(2gh)"
        },
        {
            id: 2,
            desc: "Passez la colline de 8m située à x=10.",
            check: (v, x) => x > 10 && v > 1,
            hint: "Il faut assez d'énergie potentielle au départ pour vaincre la gravité et les frottements."
        }
    ];
    const currentChallenge = challenges[challengeLevel] || null;

    // Track Physics: y = 0.08*x^2 (Simple Parabola) or Custom
    const getTrackY = (x) => {
        // Complex track for more fun
        // Basic valley
        let y = 0.08 * x * x;

        // Add a hill at x=10 for all modes to make it interesting
        if (x > 5) {
            // Blend into a hill
            y = 2 + 6 * Math.exp(-Math.pow(x - 10, 2) / 10);
            if (x > 15) y = 0.08 * (x - 20) * (x - 20); // up again
        }
        return Math.max(0, y);
    };

    useFrame((state, delta) => {
        if (isPlaying && skaterRef.current) {
            const currentX = skaterRef.current.position.x;

            // Physics Step
            // 1. Calculate gravity force component along tangent
            // Tangent slope dy/dx
            const eps = 0.01;
            const y1 = getTrackY(currentX);
            const y2 = getTrackY(currentX + eps);
            const slope = (y2 - y1) / eps;
            const angle = Math.atan(slope);

            // Gravity accel along slope
            const g = 9.81;
            const a_gravity = -g * Math.sin(angle);
            const a_friction = -friction * velocity; // Viscous drag approximation

            // Integrate
            let newV = velocity + (a_gravity + a_friction) * delta * 5; // *5 for speedup perception
            let newX = currentX + newV * delta * Math.cos(angle) * 5;

            // Ground hit check
            if (newX < -20 || newX > 25) {
                setIsPlaying(false);
                return;
            }

            // Update Loop
            setVelocity(newV);
            const newY = getTrackY(newX);

            skaterRef.current.position.set(newX, newY, 0);
            skaterRef.current.rotation.z = angle;

            // Energies
            const ep = mass * g * newY;
            const ec = 0.5 * mass * newV * newV;
            setEnergies({ ec, ep, em: ec + ep });

            // Challenge Check
            if (mode === 'challenge' && currentChallenge && !success) {
                if (currentChallenge.check(Math.abs(newV), newX)) {
                    setIsPlaying(false);
                    setSuccess(true);
                    triggerSuccess("Défi Réussi !");
                }
            }
        }
    });

    const reset = () => {
        setIsPlaying(false);
        setSuccess(false);
        setVelocity(0);
        if (skaterRef.current) {
            const startX = -15; // Starting point logic could be improved
            const startY = getTrackY(startX);
            // In setup mode, height slider controls starting Ep essentially
            // But here we map Height Slider -> Starting X position roughly or just sets Y?
            // Let's make slider control "Drop Height" which forces X
            // actually easier: Slider sets Y, we find X
            // For x < 0, y = 0.08 x^2 => x = - sqrt(y/0.08)
            const x = -Math.sqrt(height / 0.08);
            skaterRef.current.position.set(x, height, 0);
            setEnergies({ ec: 0, ep: mass * 9.81 * height, em: mass * 9.81 * height });
        }
    };

    // Initialize position on height change
    useEffect(() => {
        reset();
    }, [height]);

    // Track Mesh Generation
    const trackPoints = useMemo(() => {
        const ptrs = [];
        for (let x = -20; x <= 25; x += 0.2) {
            ptrs.push(new THREE.Vector3(x, getTrackY(x), 0));
        }
        return ptrs;
    }, []);

    return (
        <group>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
            <Environment preset="city" />
            <Grid />
            <OrbitControls makeDefault position={[0, 5, 30]} />

            {/* Track Line */}
            <group>
                <Line points={trackPoints} color="#00F5D4" lineWidth={4} />
                {/* Supports */}
                {trackPoints.filter((_, i) => i % 10 === 0).map((p, i) => (
                    <mesh key={i} position={[p.x, p.y / 2 - 2, p.z]}>
                        <cylinderGeometry args={[0.2, 0.2, p.y + 4]} />
                        <meshStandardMaterial color="#333" />
                        <mesh position={[0, (p.y + 4) / 2, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.3, 0.3, 1]} />
                            <meshStandardMaterial color="#555" />
                        </mesh>
                    </mesh>
                ))}
            </group>

            {/* Skater */}
            <group ref={skaterRef}>
                <mesh castShadow>
                    <sphereGeometry args={[0.8]} />
                    <meshStandardMaterial color={success ? "#00FF00" : "#FF0055"} />
                </mesh>
                <Box args={[1.2, 0.2, 0.6]} position={[0, -0.7, 0]}>
                    <meshStandardMaterial color="black" />
                </Box>
                {/* Wheels */}
                <mesh position={[-0.4, -0.85, 0.3]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.15, 0.15, 0.1]} /><meshStandardMaterial color="gray" /></mesh>
                <mesh position={[0.4, -0.85, 0.3]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.15, 0.15, 0.1]} /><meshStandardMaterial color="gray" /></mesh>
            </group>

            {/* UI overlay for challenges */}
            <Html fullscreen style={{ pointerEvents: 'none' }}>
                {mode === 'challenge' && success && (
                    <SuccessOverlay show={true} message="Niveau Terminé !" onNext={() => {
                        setSuccess(false);
                        setChallengeLevel(l => (l + 1) % challenges.length);
                        reset();
                    }} />
                )}
            </Html>

            <Html position={[10, 10, 0]}>
                <DraggableHtmlPanel title={mode === 'challenge' ? `🏆 Défi ${challengeLevel + 1}` : "🎢 Labo Énergie"}>
                    <div className="p-4 w-72 text-white">
                        <div className="flex bg-gray-800 rounded p-1 mb-4">
                            <button onClick={() => setMode('explore')} className={`flex-1 py-1 rounded text-xs ${mode === 'explore' ? 'bg-[#00F5D4] text-black font-bold' : 'text-gray-400'}`}>Libre</button>
                            <button onClick={() => { setMode('challenge'); reset(); }} className={`flex-1 py-1 rounded text-xs ${mode === 'challenge' ? 'bg-[#00F5D4] text-black font-bold' : 'text-gray-400'}`}>Défis</button>
                        </div>

                        {mode === 'challenge' && currentChallenge && (
                            <div className="bg-blue-900/50 border border-blue-500 p-3 rounded mb-4 text-sm animate-pulse-slow">
                                <p className="font-bold text-blue-300">Objectif:</p>
                                <p>{currentChallenge.desc}</p>
                                <p className="text-xs text-blue-400 italic mt-1">{currentChallenge.hint}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="flex justify-between text-xs font-bold mb-1">
                                    <span>Hauteur Départ (m)</span>
                                    <span>{height.toFixed(1)}m</span>
                                </label>
                                <input type="range" min="2" max="25" step="0.5" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full accent-[#00F5D4]" disabled={isPlaying} />
                            </div>
                            <div>
                                <label className="flex justify-between text-xs font-bold mb-1">
                                    <span>Masse (kg)</span>
                                    <span>{mass}kg</span>
                                </label>
                                <input type="range" min="10" max="100" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full accent-[#00F5D4]" disabled={isPlaying} />
                            </div>

                            <div className="flex gap-2">
                                <button onClick={() => setIsPlaying(!isPlaying)} className={`flex-1 py-2 rounded font-bold shadow-lg transition-transform active:scale-95 ${isPlaying ? 'bg-red-500' : 'bg-green-500'}`}>
                                    {isPlaying ? 'PAUSE' : 'LANCER 🚀'}
                                </button>
                                <button onClick={reset} className="px-4 bg-gray-600 rounded">↺</button>
                            </div>
                        </div>

                        {/* Energy Dashboard */}
                        <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="bg-green-900/50 p-1 rounded border border-green-500/50">
                                <div className="font-bold text-green-400">Ec</div>
                                <div>{(energies.ec).toFixed(0)} J</div>
                            </div>
                            <div className="bg-blue-900/50 p-1 rounded border border-blue-500/50">
                                <div className="font-bold text-blue-400">Ep</div>
                                <div>{(energies.ep).toFixed(0)} J</div>
                            </div>
                            <div className="bg-yellow-900/50 p-1 rounded border border-yellow-500/50">
                                <div className="font-bold text-yellow-400">Em</div>
                                <div>{(energies.em).toFixed(0)} J</div>
                            </div>
                        </div>
                        <div className="mt-2 text-center text-xs text-gray-400">
                            Vitesse: <span className="text-white font-mono text-lg">{Math.abs(velocity).toFixed(1)} m/s</span>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P5-P6: ÉLECTROSTATIQUE (FIELD GOLF)
// ==========================================
export function ElectrostatiqueSim() {
    const [charges, setCharges] = useState([{ x: 2, y: 2, q: 5, id: 1 }, { x: 2, y: -2, q: -5, id: 2 }]); // Preset level 1
    const [testCharge, setTestCharge] = useState({ x: -6, y: 0, vx: 0, vy: 0, active: false });
    const [target, setTarget] = useState({ x: 6, y: 0, r: 1 });
    const [success, setSuccess] = useState(false);

    // Trail
    const [trail, setTrail] = useState([]);

    useFrame((state, delta) => {
        if (testCharge.active) {
            // Physics
            let fx = 0, fy = 0;
            const k = 20;

            charges.forEach(c => {
                const dx = testCharge.x - c.x;
                const dy = testCharge.y - c.y;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);
                if (dist > 0.2) {
                    const f = (k * c.q) / distSq; // q_test assumed +1
                    fx += f * (dx / dist); // Repulsion vector
                    fy += f * (dy / dist);
                }
            });

            // Update
            const newVx = testCharge.vx + fx * delta;
            const newVy = testCharge.vy + fy * delta;
            const newX = testCharge.x + newVx * delta;
            const newY = testCharge.y + newVy * delta;

            setTestCharge(prev => ({ ...prev, x: newX, y: newY, vx: newVx, vy: newVy }));
            setTrail(prev => [...prev, new THREE.Vector3(newX, newY, 0)].slice(-50)); // Keep last 50 points

            // Check Win
            const distToTarget = Math.hypot(newX - target.x, newY - target.y);
            if (distToTarget < target.r) {
                setSuccess(true);
                setTestCharge(p => ({ ...p, active: false }));
                triggerSuccess("But !");
            }
            // Out of bounds
            if (Math.abs(newX) > 10 || Math.abs(newY) > 6) {
                setTestCharge(p => ({ ...p, active: false })); // Fail
            }
        }
    });

    const shoot = () => {
        setTestCharge({ x: -6, y: 0, vx: 2, vy: 0, active: true });
        setTrail([]);
        setSuccess(false);
    };

    const addCharge = (q) => {
        setCharges([...charges, { x: 0, y: 0, q, id: Math.random() }]);
    };

    // Allow dragging charges (simplified: just remove last one for now to keep UI clean)
    const removeLast = () => {
        setCharges(prev => prev.slice(0, -1));
    };

    return (
        <group>
            <OrbitControls makeDefault position={[0, 0, 12]} enableRotate={false} />
            <Grid />
            <Environment preset="studio" />

            {/* Target Area */}
            <mesh position={[target.x, target.y, -0.1]}>
                <ringGeometry args={[0, target.r, 32]} />
                <meshBasicMaterial color="#00F5D4" opacity={0.3} transparent />
            </mesh>
            <mesh position={[target.x, target.y, -0.1]}>
                <ringGeometry args={[target.r, target.r + 0.1, 32]} />
                <meshBasicMaterial color="#00F5D4" />
            </mesh>
            <Text position={[target.x, target.y, 0.5]} fontSize={0.5} color="#00F5D4">CIBLE</Text>

            {/* Launcher */}
            <mesh position={[-6, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <coneGeometry args={[0.3, 1, 16]} />
                <meshStandardMaterial color="yellow" />
            </mesh>

            {/* Charges */}
            {charges.map((c, i) => (
                <group key={c.id} position={[c.x, c.y, 0]}>
                    <Sphere args={[0.4]}>
                        <meshStandardMaterial color={c.q > 0 ? "#FF4444" : "#4444FF"} />
                    </Sphere>
                    <Text position={[0, 0, 0]} fontSize={0.3} color="white">{c.q > 0 ? `+${c.q}` : c.q}</Text>
                    <Text position={[0, -0.6, 0]} fontSize={0.2} color="gray">({c.x.toFixed(1)}, {c.y.toFixed(1)})</Text>
                    {/* Simplified drag handle: click to randomize pos (in real app using drag controls) */}
                </group>
            ))}

            {/* Test Charge & Trail */}
            <group position={[testCharge.x, testCharge.y, 0]}>
                <Sphere args={[0.2]}>
                    <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
                </Sphere>
            </group>
            {trail.length > 1 && <Line points={trail} color="yellow" lineWidth={2} opacity={0.5} transparent />}

            <Html fullscreen style={{ pointerEvents: 'none' }}>
                {success && <SuccessOverlay show={true} message="Cible Atteinte !" onNext={() => { setSuccess(false); shoot(); }} />}
            </Html>

            <Html position={[8, 5, 0]}>
                <DraggableHtmlPanel title="⚡ Electric Golf">
                    <div className="p-4 w-64 text-white">
                        <p className="text-sm mb-4">Placez des charges pour guider la particule (+) vers la cible.</p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <button onClick={() => addCharge(5)} className="bg-red-600/80 hover:bg-red-500 py-2 rounded font-bold">+ Rouge</button>
                            <button onClick={() => addCharge(-5)} className="bg-blue-600/80 hover:bg-blue-500 py-2 rounded font-bold">- Bleu</button>
                        </div>

                        <div className="mb-4 space-y-2">
                            <p className="text-xs font-bold text-gray-400">Positionner la dernière charge:</p>
                            <div className="flex gap-2">
                                <input type="range" min="-8" max="8" step="0.5" onChange={e => {
                                    const newC = [...charges];
                                    if (newC.length) newC[newC.length - 1].x = Number(e.target.value);
                                    setCharges(newC);
                                }} className="w-full" />
                                <span className="text-xs">X</span>
                            </div>
                            <div className="flex gap-2">
                                <input type="range" min="-5" max="5" step="0.5" onChange={e => {
                                    const newC = [...charges];
                                    if (newC.length) newC[newC.length - 1].y = Number(e.target.value);
                                    setCharges(newC);
                                }} className="w-full" />
                                <span className="text-xs">Y</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button onClick={removeLast} className="px-3 bg-gray-700 rounded hover:bg-red-900 border border-red-500/30">Retirer</button>
                            <button onClick={shoot} className="flex-1 bg-[#00F5D4] text-black font-bold py-2 rounded hover:scale-105 transition">
                                TIRER ⚡
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P11: OPTIQUE (IMAGE HUNTER)
// ==========================================
export function OptiqueLentilleSim() {
    const [focal, setFocal] = useState(3);
    const [objPos, setObjPos] = useState(-6); // OA
    const [mode, setMode] = useState('explore');
    const [targetPos, setTargetPos] = useState(9); // Target OA'
    const [success, setSuccess] = useState(false);

    // Calc
    const oa = objPos;
    const f = focal;
    const invOAP = (1 / f) + (1 / oa);
    const oaO = Math.abs(invOAP) < 0.001 ? 1000 : 1 / invOAP; // OA'
    const gamma = oaO / oa;

    // Challenge Logic
    useEffect(() => {
        if (mode === 'challenge') {
            if (Math.abs(oaO - targetPos) < 0.5) {
                if (!success) {
                    setSuccess(true);
                    triggerSuccess("Image Nette !");
                }
            } else {
                setSuccess(false);
            }
        }
    }, [oaO, targetPos, mode]);

    return (
        <group>
            <OrbitControls makeDefault position={[0, 5, 20]} />
            <Grid />

            {/* Optical Bench Rail */}
            <mesh position={[0, -0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
                <boxGeometry args={[0.2, 30, 1]} />
                <meshStandardMaterial color="#222" metalness={0.8} />
            </mesh>
            {/* Graduations */}
            {Array.from({ length: 30 }).map((_, i) => (
                <Line key={i} points={[[i - 15, -0.1, 0.5], [i - 15, -0.1, -0.5]]} color="#555" />
            ))}

            {/* Lens */}
            <group>
                <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[2, 2, 0.2, 32]} />
                    <meshPhysicalMaterial transmission={1} thickness={0.5} roughness={0} ior={1.5} color="#AACCFF" />
                </mesh>
                <Text position={[0, 4, 0]} fontSize={0.5}>Lentille (f'={f})</Text>
                {/* Focal Points */}
                <Sphere args={[0.1]} position={[f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
                <Text position={[f, -0.5, 0]} fontSize={0.3} color="red">F'</Text>
                <Sphere args={[0.1]} position={[-f, 0, 0]}><meshStandardMaterial color="red" /></Sphere>
                <Text position={[-f, -0.5, 0]} fontSize={0.3} color="red">F</Text>
            </group>

            {/* Object (Candle) */}
            <group position={[objPos, 0, 0]}>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 2]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                {/* Flame */}
                <mesh position={[0, 2.2, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={2} />
                </mesh>
                <pointLight position={[0, 2.2, 0]} color="orange" distance={5} />
                <Text position={[0, 3, 0]} fontSize={0.4}>Objet</Text>
            </group>

            {/* Image (Ghost Candle) */}
            <group position={[oaO, 0, 0]} scale={[1, Math.abs(gamma), 1]} rotation={[0, 0, gamma < 0 ? Math.PI : 0]}>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 2]} />
                    <meshStandardMaterial color="#00F5D4" transparent opacity={0.5} />
                </mesh>
                <mesh position={[0, 2.2, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" transparent opacity={0.5} />
                </mesh>
                <Text position={[0, 3, 0]} fontSize={0.4} color="#00F5D4">Image</Text>
            </group>

            {/* Target Screen (Challenge Mode) */}
            {mode === 'challenge' && (
                <group position={[targetPos, 1.5, -1]}>
                    <Box args={[0.2, 4, 4]}>
                        <meshStandardMaterial color="#333" />
                    </Box>
                    <Plane args={[3.8, 3.8]} position={[-0.11, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                        <meshStandardMaterial color="white" />
                    </Plane>
                    <Text position={[0, 3, 0]} fontSize={0.4} color="yellow">Écran Cible</Text>
                </group>
            )}

            {/* Rays */}
            <Line points={[[objPos, 2.2, 0], [0, 2.2, 0], [oaO, 2.2 * gamma, 0]]} color="yellow" opacity={0.5} transparent />
            <Line points={[[objPos, 2.2, 0], [0, 0, 0], [oaO, 2.2 * gamma, 0]]} color="cyan" opacity={0.5} transparent />

            <Html fullscreen style={{ pointerEvents: 'none' }}>
                {success && <SuccessOverlay show={true} message="Image Capturée !" onNext={() => setTargetPos(5 + Math.random() * 5)} />}
            </Html>

            <Html position={[5, 6, 0]}>
                <DraggableHtmlPanel title={mode === 'challenge' ? "🎯 Chasse à l'Image" : "👁️ Banc Optique"}>
                    <div className="p-4 w-72 text-white">
                        <div className="flex bg-gray-800 rounded p-1 mb-4">
                            <button onClick={() => setMode('explore')} className={`flex-1 ${mode === 'explore' ? 'bg-[#00F5D4] text-black' : ''}`}>Libre</button>
                            <button onClick={() => setMode('challenge')} className={`flex-1 ${mode === 'challenge' ? 'bg-[#00F5D4] text-black' : ''}`}>Défi</button>
                        </div>

                        {mode === 'challenge' && (
                            <p className="text-sm mb-4 text-gray-300">
                                Ajustez la position de l'objet ou la focale pour que l'image se forme NETTE sur l'écran cible (boîte blanche).
                            </p>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold">Position Objet: {objPos.toFixed(1)}</label>
                                <input type="range" min="-12" max="-2" step="0.1" value={objPos} onChange={e => setObjPos(Number(e.target.value))} className="w-full accent-[#00F5D4]" />
                            </div>
                            <div>
                                <label className="text-xs font-bold">Focale (f'): {focal}</label>
                                <input type="range" min="1" max="5" step="0.5" value={focal} onChange={e => setFocal(Number(e.target.value))} className="w-full accent-[#00F5D4]" />
                            </div>
                        </div>

                        <div className="mt-4 p-2 bg-black/40 rounded text-xs">
                            <p>γ (Grandissement) : {gamma.toFixed(2)}</p>
                            <p>Image : {oaO > 0 ? "Réelle" : "Virtuelle"}</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P10: ONDES (INTERFERENCE MAKER)
// ==========================================
export function OndesSim() {
    const materialRef = useRef();
    const [freq1, setFreq1] = useState(2);
    const [freq2, setFreq2] = useState(2);
    const [separation, setSeparation] = useState(0.5); // Distance between sources

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
            materialRef.current.uniforms.uFreq1.value = freq1;
            materialRef.current.uniforms.uFreq2.value = freq2;
            materialRef.current.uniforms.uSep.value = separation;
        }
    });

    const WaveInterferenceShader = {
        uniforms: {
            uTime: { value: 0 },
            uFreq1: { value: 2.0 },
            uFreq2: { value: 2.0 },
            uSep: { value: 0.5 },
            uColor: { value: new THREE.Color('#00AACC') }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform float uFreq1;
            uniform float uFreq2;
            uniform float uSep;
            uniform vec3 uColor;
            varying vec2 vUv;
            
            void main() {
                // Remap UV from 0..1 to -1..1
                vec2 p = vUv * 2.0 - 1.0;
                
                // Source positions
                vec2 s1 = vec2(-uSep, 0.0);
                vec2 s2 = vec2(uSep, 0.0);
                
                float d1 = distance(p, s1);
                float d2 = distance(p, s2);
                
                float w1 = sin(d1 * 20.0 - uTime * uFreq1 * 5.0);
                float w2 = sin(d2 * 20.0 - uTime * uFreq2 * 5.0);
                
                float interference = (w1 + w2) * 0.5;
                
                // Circular mask
                float mask = 1.0 - smoothstep(0.8, 1.0, length(p));
                
                // Coloring: peaks are bright, troughs are dark
                vec3 col = uColor + interference * 0.3;
                
                gl_FragColor = vec4(col, mask * 0.8);
            }
        `
    };

    return (
        <group>
            <OrbitControls />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <shaderMaterial ref={materialRef} args={[WaveInterferenceShader]} transparent side={THREE.DoubleSide} />
            </mesh>

            {/* Visual Markers for Sources */}
            <Sphere position={[-separation * 5, 0.1, 0]} args={[0.1]}><meshStandardMaterial color="red" /></Sphere>
            <Sphere position={[separation * 5, 0.1, 0]} args={[0.1]}><meshStandardMaterial color="blue" /></Sphere>

            <Html position={[6, 4, 0]}>
                <DraggableHtmlPanel title="🌊 Interférences">
                    <div className="p-4 w-64 text-white">
                        <p className="text-xs mb-4 text-gray-300">Observez les franges d'interférence créées par deux sources.</p>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-red-400">Fréquence Source 1</label>
                                <input type="range" min="1" max="5" step="0.1" value={freq1} onChange={e => setFreq1(Number(e.target.value))} className="w-full accent-red-500" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-blue-400">Fréquence Source 2</label>
                                <input type="range" min="1" max="5" step="0.1" value={freq2} onChange={e => setFreq2(Number(e.target.value))} className="w-full accent-blue-500" />
                            </div>
                            <div>
                                <label className="text-xs font-bold">Écartement Sources</label>
                                <input type="range" min="0" max="0.8" step="0.05" value={separation} onChange={e => setSeparation(Number(e.target.value))} className="w-full accent-white" />
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ==========================================
// P7-P9: ÉLECTRONIQUE (RC CHALLENGE)
// ==========================================
export function ElectroniqueSim() {
    // Basic Oscillo is functional, let's just polish UI to look like a real device
    return (
        <group>
            {/* Not changing physics logic significantly as it was already correct, just improving wrapper */}
            {/* Integrating previous logic but with better visuals */}
            <ElectroniqueSimInternal />
        </group>
    );
}

function ElectroniqueSimInternal() {
    const [mode, setMode] = useState('charge');
    const [R, setR] = useState(1000);
    const [C, setC] = useState(0.001);

    // Graph points
    const points = useMemo(() => {
        const tau = R * C;
        const pts = [];
        for (let x = 0; x < 10; x += 0.1) {
            let t = x * tau * 0.5; // Scale time so screen covers ~5 tau
            let u = mode === 'charge' ? 5 * (1 - Math.exp(-t / tau)) : 5 * Math.exp(-t / tau);
            pts.push(new THREE.Vector3(x - 5, u - 2.5, 0));
        }
        return pts;
    }, [R, C, mode]);

    return (
        <group>
            <OrbitControls makeDefault />
            <Grid />

            {/* Oscilloscope Body */}
            <group position={[0, 0, -2]}>
                <Box args={[12, 8, 2]}>
                    <meshStandardMaterial color="#222" roughness={0.2} metalness={0.5} />
                </Box>
                {/* Screen Frame */}
                <Box args={[10.5, 6.5, 0.1]} position={[0, 0.5, 1.05]}>
                    <meshStandardMaterial color="#111" />
                </Box>
                {/* Screen Grid */}
                <group position={[0, 0.5, 1.1]}>
                    <gridHelper args={[10, 10, '#333', '#111']} rotation={[Math.PI / 2, 0, 0]} />
                    <Line points={points} color="#00FF00" lineWidth={3} />
                </group>

                {/* Knobs */}
                <group position={[0, -3, 1]}>
                    <Cylinder args={[0.3, 0.3, 0.5]} rotation={[Math.PI / 2, 0, 0]} position={[-3, 0, 0]}><meshStandardMaterial color="gray" /></Cylinder>
                    <Text position={[-3, -0.6, 0]} fontSize={0.25} color="white">Time/Div</Text>

                    <Cylinder args={[0.3, 0.3, 0.5]} rotation={[Math.PI / 2, 0, 0]} position={[3, 0, 0]}><meshStandardMaterial color="gray" /></Cylinder>
                    <Text position={[3, -0.6, 0]} fontSize={0.25} color="white">Volts/Div</Text>
                </group>
            </group>

            <Html position={[7, 4, 0]}>
                <DraggableHtmlPanel title="⚡ Oscilloscope">
                    <div className="p-4 w-64 text-white">
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setMode('charge')} className={`flex-1 py-1 rounded text-xs transition-colors ${mode === 'charge' ? 'bg-green-500' : 'bg-gray-700'}`}>Charge</button>
                            <button onClick={() => setMode('discharge')} className={`flex-1 py-1 rounded text-xs transition-colors ${mode === 'discharge' ? 'bg-red-500' : 'bg-gray-700'}`}>Décharge</button>
                        </div>

                        <label className="text-xs font-bold">Résistance: {R}Ω</label>
                        <input type="range" min="100" max="2000" step="100" value={R} onChange={e => setR(Number(e.target.value))} className="w-full mb-2 accent-green-500" />

                        <label className="text-xs font-bold">Capacité: {(C * 1000).toFixed(1)}mF</label>
                        <input type="range" min="0.1" max="2" step="0.1" value={C * 1000} onChange={e => setC(Number(e.target.value) / 1000)} className="w-full accent-blue-500" />

                        <div className="mt-4 p-2 bg-black/50 border border-white/10 rounded text-center">
                            <span className="text-gray-400 text-xs">Constante de temps</span>
                            <div className="text-xl font-mono text-[#00F5D4] font-bold">τ = {(R * C).toFixed(2)} s</div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    )
}
