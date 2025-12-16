'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Line, useTexture, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================================
// 11. MOUVEMENT RELATIF (Trains)
// =========================================================
export function MotionRelativity() {
    const [trainSpeed, setTrainSpeed] = useState(1);
    const [view, setView] = useState('ground'); // 'ground' or 'train'
    const trainRef = useRef();
    const ballRef = useRef();
    const [ballTime, setBallTime] = useState(0);
    const [isThrowing, setIsThrowing] = useState(false);

    useFrame((state, delta) => {
        // Move Train
        if (trainRef.current) {
            // Reset if too far
            if (trainRef.current.position.x > 10) trainRef.current.position.x = -10;
            trainRef.current.position.x += trainSpeed * delta * 2;
        }

        // Animate Ball
        if (isThrowing && ballRef.current) {
            const t = ballTime + delta;
            setBallTime(t);
            // Parabola: y = vy*t - 0.5*g*t^2, x = vx*t
            // Relative to train: vx = 0
            // Relative to ground: vx = trainSpeed

            // We visualize the ball in World Coords always, but user perception changes
            const startX = trainRef.current.position.x; // Moving start point? No, start point was when thrown.
            // Simplified: Ball is child of train? No, easier to simulate world pos.

            // Let's just animate local to train for "Throw Up"
            // y = 4*t - 5*t^2
            const y = 2 + (4 * t - 4 * t * t);

            if (y < 2 && t > 0.1) {
                setIsThrowing(false); // Caught
                ballRef.current.position.y = 2;
                ballRef.current.position.x = 0; // Relative to train
            } else {
                ballRef.current.position.y = y;
                // x is relative 0 to train
                ballRef.current.position.x = 0;
            }
        }
    });

    // Camera rig for relativity
    useFrame((state) => {
        if (view === 'train' && trainRef.current) {
            state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, trainRef.current.position.x, 0.1);
        } else {
            state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 0, 0.1);
        }
        state.camera.lookAt(state.camera.position.x, 0, 0);
    });

    const throwBall = () => {
        setIsThrowing(true);
        setBallTime(0);
    };

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} />

            {/* Ground */}
            <gridHelper args={[100, 100]} position={[0, -0.5, 0]} color1="gray" color2="gray" />
            <Text position={[0, -0.5, 2]} rotation={[-Math.PI / 2, 0, 0]} fontSize={1} color="gray">QUAI (Référentiel Terrestre)</Text>

            {/* Train Container */}
            <group ref={trainRef} position={[-5, 0, 0]}>
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[6, 3, 2]} />
                    <meshStandardMaterial color="#ef4444" opacity={0.5} transparent />
                </mesh>
                <Text position={[0, 3, 0]} fontSize={0.5} color="white">TRAIN</Text>

                {/* Character Inside */}
                <mesh position={[0, 0.5, 0]}>
                    <capsuleGeometry args={[0.3, 1, 4]} />
                    <meshStandardMaterial color="yellow" />
                </mesh>

                {/* Ball */}
                <mesh ref={ballRef} position={[0, 2, 0]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>

            {/* Tree (Reference Ground) */}
            <group position={[0, 0, -4]}>
                <mesh position={[0, 2, 0]}>
                    <coneGeometry args={[1, 4, 8]} />
                    <meshStandardMaterial color="green" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 1]} />
                    <meshStandardMaterial color="brown" />
                </mesh>
            </group>


            <Html transform={false}>
                <DraggableHtmlPanel title="🚄 Relativité du Mouvement" className="w-[300px]" defaultPosition="bottom-center">
                    <div className="space-y-4 text-white">
                        <div className="flex gap-2 bg-gray-800 p-2 rounded">
                            <button onClick={() => setView('ground')} className={`flex-1 py-1 rounded ${view === 'ground' ? 'bg-blue-600' : 'bg-gray-700'}`}>👁️ Quai (Sol)</button>
                            <button onClick={() => setView('train')} className={`flex-1 py-1 rounded ${view === 'train' ? 'bg-red-600' : 'bg-gray-700'}`}>👁️ Train</button>
                        </div>

                        <div className="text-sm">
                            <p>Le passager lance la balle en l'air.</p>
                            <ul className="list-disc ml-4 text-xs text-gray-300">
                                <li>Pour le passager (Train) : La balle monte et descend verticalement.</li>
                                <li>Pour l'observateur (Quai) : La balle décrit une PARABOLE !</li>
                            </ul>
                        </div>

                        <div className="flex justify-between items-center">
                            <button onClick={throwBall} disabled={isThrowing} className="bg-green-600 px-4 py-2 rounded font-bold hover:bg-green-500 disabled:opacity-50">
                                🥎 Lancer
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 12. CHROMATOGRAPHIE (Couleurs)
// =========================================================
export function ChromatographyExperiment() {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useFrame((state, delta) => {
        if (isRunning && progress < 1) {
            setProgress(p => Math.min(1, p + delta * 0.1));
        }
    });

    // Separation of components
    // Blue travels 0.8, Red 0.6, Yellow 0.4
    const hBlue = progress * 3.5;
    const hRed = progress * 2.5;
    const hYellow = progress * 1.5;

    return (
        <group>
            <ambientLight intensity={0.8} />

            {/* Tank */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[3, 4, 0.2]} />
                <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            {/* Solvent at bottom */}
            <mesh position={[0, -2.5, 0]}>
                <boxGeometry args={[2.8, 1, 0.1]} />
                <meshStandardMaterial color="#BAE6FD" opacity={0.6} transparent />
            </mesh>

            {/* Paper */}
            <group position={[0, 0, 0]}>
                <mesh>
                    <planeGeometry args={[2, 3.5]} />
                    <meshBasicMaterial color="white" />
                </mesh>

                {/* Start Line */}
                <Line points={[[-0.8, -1.5, 0.01], [0.8, -1.5, 0.01]]} color="gray" />

                {/* Ink Spots Moving */}
                {/* Green Spot = Blue + Yellow */}
                <mesh position={[-0.5, -1.5 + hBlue, 0.02]}>
                    <circleGeometry args={[0.1]} />
                    <meshBasicMaterial color="cyan" opacity={0.6} transparent />
                </mesh>
                <mesh position={[-0.5, -1.5 + hYellow, 0.02]}>
                    <circleGeometry args={[0.1]} />
                    <meshBasicMaterial color="yellow" opacity={0.6} transparent />
                </mesh>

                {/* Purple Spot = Blue + Red */}
                <mesh position={[0.5, -1.5 + hBlue, 0.02]}>
                    <circleGeometry args={[0.1]} />
                    <meshBasicMaterial color="cyan" opacity={0.6} transparent />
                </mesh>
                <mesh position={[0.5, -1.5 + hRed, 0.02]}>
                    <circleGeometry args={[0.1]} />
                    <meshBasicMaterial color="magenta" opacity={0.6} transparent />
                </mesh>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🎨 Chromatographie (CCM)" className="w-[300px]" defaultPosition="top-right">
                    <div className="space-y-4 text-white">
                        <p className="text-sm">Séparation des colorants d'un feutre vert et violet.</p>

                        <div className="flex justify-center">
                            <button
                                onClick={() => { setIsRunning(true); if (progress >= 1) setProgress(0); }}
                                className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl font-bold transition-all"
                            >
                                {progress >= 1 ? 'Recommencer 🔄' : isRunning ? 'En cours...' : 'Démarrer l\'élution 💧'}
                            </button>
                        </div>

                        {progress > 0.5 && (
                            <div className="bg-gray-800 p-2 rounded text-xs animate-in fade-in">
                                <p>Observation :</p>
                                <ul className="list-disc ml-4 mt-1">
                                    <li><span className="text-green-400">Vert</span> = Jaune (lent) + Cyan (rapide)</li>
                                    <li><span className="text-purple-400">Violet</span> = Magenta (moyen) + Cyan (rapide)</li>
                                </ul>
                                <p className="mt-2 text-gray-400">Chaque espèce chimique migre à une vitesse différente (Rf).</p>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 13. IDENTIFICATION IONS (Tests Chimiques)
// =========================================================
export function ChemicalIdentification() {
    const [selectedTest, setSelectedTest] = useState(null);
    const [hasDripped, setHasDripped] = useState(false);

    // Tests data
    const tests = [
        { id: 'AgNO3', name: 'Nitrate d\'Argent', ion: 'Cl⁻', result: 'Précipité BLANC', color: 'white' },
        { id: 'NaOH_Cu', name: 'Soude (sur Cu²⁺)', ion: 'Cu²⁺', result: 'Précipité BLEU', color: 'blue' },
        { id: 'NaOH_Fe2', name: 'Soude (sur Fe²⁺)', ion: 'Fe²⁺', result: 'Précipité VERT', color: 'green' },
        { id: 'NaOH_Fe3', name: 'Soude (sur Fe³⁺)', ion: 'Fe³⁺', result: 'Précipité ROUILLE', color: '#8B4513' },
    ];

    const currentTest = tests.find(t => t.id === selectedTest);

    useFrame(() => {
        // Animation logic could go here
    });

    const runTest = (id) => {
        setSelectedTest(id);
        setHasDripped(false);
        setTimeout(() => setHasDripped(true), 500);
    };

    return (
        <group>
            <ambientLight intensity={0.8} />

            {/* Tube à essai */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 3, 32, 1, true]} />
                <meshPhysicalMaterial color="#EEE" transmission={0.9} transparent opacity={0.4} side={THREE.DoubleSide} />
            </mesh>
            {/* Liquid Initial */}
            <mesh position={[0, -1.8, 0]}>
                <cylinderGeometry args={[0.45, 0.45, 1.2, 32]} />
                <meshStandardMaterial color={currentTest ? (currentTest.id.includes('Cu') ? '#BFDBFE' : '#F3F4F6') : '#F3F4F6'} transparent opacity={0.6} />
            </mesh>

            {/* Precipitate appearing */}
            {hasDripped && currentTest && (
                <group position={[0, -2, 0]}>
                    {/* Cloud of particles */}
                    <mesh>
                        <dodecahedronGeometry args={[0.4, 0]} />
                        <meshStandardMaterial color={currentTest.color} roughness={0.8} />
                    </mesh>
                </group>
            )}

            {/* Pipette */}
            <group position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 6]}>
                <mesh>
                    <cylinderGeometry args={[0.1, 0.1, 2]} />
                    <meshStandardMaterial color="#AAA" transparent opacity={0.5} />
                </mesh>
                {/* Drop */}
                <mesh position={[0, -1.1, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Identification des Ions" className="w-[320px]" defaultPosition="bottom-right">
                    <div className="space-y-4 text-white">
                        <div className="grid grid-cols-2 gap-2">
                            {tests.map(t => (
                                <button
                                    key={t.id}
                                    onClick={() => runTest(t.id)}
                                    className={`text-xs p-2 rounded border transition-all ${selectedTest === t.id ? 'bg-blue-600 border-blue-400' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'}`}
                                >
                                    {t.name}
                                </button>
                            ))}
                        </div>

                        {hasDripped && currentTest && (
                            <div className="bg-gray-900 p-3 rounded-xl border border-white/20 animate-in zoom-in duration-300">
                                <div className="text-center font-bold text-lg mb-1" style={{ color: currentTest.color === 'white' ? 'white' : currentTest.color }}>
                                    {currentTest.result}
                                </div>
                                <div className="text-center text-sm text-gray-400">
                                    Cela prouve la présence de l'ion <span className="font-bold text-white">{currentTest.ion}</span>
                                </div>
                            </div>
                        )}
                        {!selectedTest && (
                            <div className="text-center text-gray-500 text-sm">
                                Sélectionne un réactif pour tester la réaction.
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 14. SONAR (Echolocation)
// =========================================================
export function SonarEcholocation() {
    const [depth, setDepth] = useState(500); // meters
    const [pinging, setPinging] = useState(false);
    const [time, setTime] = useState(0);

    // Speed of sound in water approx 1500 m/s
    const V_SOUND = 1500;
    const realTime = (2 * depth) / V_SOUND; // Round trip

    useEffect(() => {
        if (pinging) {
            let start = Date.now();
            const interval = setInterval(() => {
                const elapsed = (Date.now() - start) / 1000; // simulated speedup
                // Let's multiply elapsed by 1000 to make it observable in seconds on screen if we want real physics math?
                // Actually let's just animate a progress bar.
                if (elapsed >= (realTime / 1000)) { // Scale time for UX (1500m/s is fast, 500m takes 0.6s)
                    // Let's slow down the simulation 10x
                }
            }, 16);

            // Simpler: Just CSS animation key
            setTimeout(() => {
                setTime(realTime);
                setPinging(false);
            }, 1500); // Fixed visual duration
        }
    }, [pinging]);

    return (
        <group>
            <ambientLight intensity={0.5} />
            <color attach="background" args={['#001030']} />
            <Fog />

            {/* Boat */}
            <group position={[0, 4, 0]}>
                <mesh>
                    <boxGeometry args={[2, 1, 4]} />
                    <meshStandardMaterial color="gray" />
                </mesh>
            </group>

            {/* Sea Surface */}
            <mesh position={[0, 3.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color="#1E3A8A" transparent opacity={0.5} />
            </mesh>

            {/* Sea Floor */}
            <mesh position={[0, 4 - (depth / 100), 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50, 32, 32]} />
                <meshStandardMaterial color="#000000" wireframe />
            </mesh>
            <Text position={[0, 4 - (depth / 100) + 1, 0]} color="white" fontSize={0.5}>Fond Marin</Text>

            {/* Ping Wave Visual */}
            {pinging && (
                <PingWave startY={3.5} endY={4 - (depth / 100)} duration={1.5} />
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="🦇 Sonar & Écholocation" className="w-[300px]" defaultPosition="bottom-right">
                    <div className="space-y-4 text-white">
                        <div>
                            <label className="text-xs text-blue-300">Profondeur réelle (m)</label>
                            <input
                                type="range" min="100" max="1000" step="10"
                                value={depth} onChange={(e) => setDepth(Number(e.target.value))}
                                className="w-full h-1 bg-gray-700 rounded accent-blue-500"
                            />
                            <div className="text-right">{depth} m</div>
                        </div>

                        <button
                            onClick={() => { setPinging(true); setTime(0); }}
                            disabled={pinging}
                            className="w-full py-3 rounded-xl bg-green-600 font-bold hover:bg-green-500 disabled:opacity-50"
                        >
                            {pinging ? '📡 Mesure en cours...' : 'Envoyer PING'}
                        </button>

                        <div className="bg-black/50 p-3 rounded font-mono text-sm">
                            <div>v (son) = {V_SOUND} m/s</div>
                            <div className="mt-2 text-gray-400">Temps écho (t) :</div>
                            <div className="text-xl text-yellow-400 font-bold">
                                {time > 0 ? time.toFixed(4) : '--'} s
                            </div>
                            <div className="mt-2 border-t border-gray-700 pt-1 text-xs">
                                d = (v × t) / 2 = <span className="text-green-400 font-bold">{time > 0 ? ((V_SOUND * time) / 2).toFixed(0) : '?'} m</span>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

function PingWave({ startY, endY, duration }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        // Simple scaling ring
    });
    return (
        <mesh position={[0, (startY + endY) / 2, 0]}>
            <cylinderGeometry args={[0.1, 0.1, Math.abs(startY - endY), 8]} />
            <meshBasicMaterial color="yellow" transparent opacity={0.5} />
        </mesh>
    )
}

function Fog() {
    return <fog attach="fog" args={['#001030', 5, 30]} />
}

// =========================================================
// 15. PUISSANCE & ÉNERGIE (PowerLifter)
// =========================================================
export function PowerLifter() {
    const [mass, setMass] = useState(50); // kg
    const [height, setHeight] = useState(2); // m
    const [time, setTime] = useState(2); // seconds

    const energy = mass * 9.8 * height; // E = mgh
    const power = energy / time; // P = E/t

    const [lifting, setLifting] = useState(false);
    const weightRef = useRef();

    useFrame(({ clock }) => {
        if (lifting && weightRef.current) {
            // Animate lifting
            // Simple interp
        }
    });

    return (
        <group>
            <ambientLight intensity={0.8} />

            {/* Floor */}
            <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Weight */}
            <group ref={weightRef} position={[0, lifting ? height : 0.4, 0]}>
                <mesh>
                    <boxGeometry args={[1, 0.8, 1]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
                <Text position={[0, 0, 0.6]} fontSize={0.3}>
                    {mass} kg
                </Text>
            </group>

            {/* Target Height Marker */}
            <mesh position={[2, height, 0]}>
                <boxGeometry args={[1, 0.05, 1]} />
                <meshBasicMaterial color="red" />
            </mesh>
            <Text position={[2, height + 0.5, 0]} color="red">{height} m</Text>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Puissance & Énergie" className="w-[300px]" defaultPosition="bottom-left">
                    <div className="space-y-4 text-white">
                        <div className="text-xs space-y-2">
                            <div>
                                <label>Masse (m)</label>
                                <input type="range" min="10" max="100" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full h-1 bg-gray-700 rounded" />
                            </div>
                            <div>
                                <label>Hauteur (h)</label>
                                <input type="range" min="1" max="5" step="0.5" value={height} onChange={e => setHeight(Number(e.target.value))} className="w-full h-1 bg-gray-700 rounded" />
                            </div>
                            <div>
                                <label>Temps du soulevé (t)</label>
                                <input type="range" min="0.5" max="5" step="0.5" value={time} onChange={e => setTime(Number(e.target.value))} className="w-full h-1 bg-gray-700 rounded" />
                                <div className="text-right text-gray-400">{time} s</div>
                            </div>
                        </div>

                        <button
                            onClick={() => { setLifting(false); setTimeout(() => setLifting(true), 100); }}
                            className="w-full bg-red-600 hover:bg-red-500 py-2 rounded font-bold"
                        >
                            🏋️ Soulever
                        </button>

                        <div className="grid grid-cols-2 gap-2 text-center text-sm">
                            <div className="bg-gray-800 p-2 rounded">
                                <div className="text-gray-400 text-xs">Énergie (W = mgh)</div>
                                <div className="font-bold text-yellow-400">{energy.toFixed(0)} J</div>
                            </div>
                            <div className="bg-gray-800 p-2 rounded">
                                <div className="text-gray-400 text-xs">Puissance (P = W/t)</div>
                                <div className="font-bold text-green-400">{power.toFixed(0)} Watt</div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

