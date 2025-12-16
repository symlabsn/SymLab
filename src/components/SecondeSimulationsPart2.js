'use client';
import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Line, useTexture, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================================
// 6. GRAVITATION UNIVERSELLE (Planets)
// =========================================================
export function UniversalGravitationSeconde() {
    const [m1, setM1] = useState(500); // Earth-ish
    const [m2, setM2] = useState(50); // Moon-ish
    const [distance, setDistance] = useState(4); // Units

    // F = G * m1 * m2 / d^2
    const G = 0.001; // Scaled Constant
    const force = (G * m1 * m2) / (distance * distance);

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars />

            {/* Mass 1 (Blue Planet) */}
            <group position={[-distance / 2, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.5 + m1 / 2000, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" emissive="#1D4ED8" emissiveIntensity={0.2} />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.3} color="#3B82F6">Masse A = {m1} kg</Text>
                {/* Force Vector (Towards B) */}
                <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), 1 + force * 100, 0xFFFFFF]} />
                <Html position={[1, 0.5, 0]}>
                    <div className="text-xs font-bold text-white bg-blue-900/50 px-1 rounded">F A/B</div>
                </Html>
            </group>

            {/* Mass 2 (Grey Moon) */}
            <group position={[distance / 2, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.3 + m2 / 2000, 32, 32]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.3} color="#9CA3AF">Masse B = {m2} kg</Text>
                {/* Force Vector (Towards A) */}
                <arrowHelper args={[new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 0, 0), 1 + force * 100, 0xFFFFFF]} />
                <Html position={[-1, 0.5, 0]}>
                    <div className="text-xs font-bold text-white bg-gray-700/50 px-1 rounded">F B/A</div>
                </Html>
            </group>

            {/* Distance Line */}
            <Line points={[[-distance / 2, -0.5, 0], [distance / 2, -0.5, 0]]} color="white" dashed dashSize={0.2} gapSize={0.1} />
            <Text position={[0, -0.7, 0]} fontSize={0.3} color="yellow">d = {distance} m</Text>

            <Html transform={false}>
                <DraggableHtmlPanel title="🪐 Gravitation Universelle" className="w-[320px]" defaultPosition="bottom-center">
                    <div className="space-y-4 text-white">
                        <div className="bg-gray-900 p-3 rounded-lg border border-gray-700">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    F = {(force * 1000).toFixed(2)} mN
                                </span>
                            </div>

                            <div className="space-y-2 text-xs">
                                <div>
                                    <label className="text-blue-400">Masse A (Terre)</label>
                                    <input type="range" min="100" max="1000" step="10" value={m1} onChange={(e) => setM1(Number(e.target.value))} className="w-full h-1 bg-blue-900 rounded accent-blue-500" />
                                </div>
                                <div>
                                    <label className="text-gray-400">Masse B (Lune)</label>
                                    <input type="range" min="10" max="500" step="10" value={m2} onChange={(e) => setM2(Number(e.target.value))} className="w-full h-1 bg-gray-700 rounded accent-gray-500" />
                                </div>
                                <div>
                                    <label className="text-yellow-400">Distance</label>
                                    <input type="range" min="2" max="8" step="0.1" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full h-1 bg-yellow-900 rounded accent-yellow-500" />
                                </div>
                            </div>
                        </div>
                        <div className="text-xs italic text-gray-400 text-center">
                            "La force est proportionnelle aux masses et inversement proportionnelle au carré de la distance."
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 7. REFRACTION LUMIERE (Laser)
// =========================================================
export function RefractionSeconde() {
    const [n2, setN2] = useState(1.33); // Eau
    const [angle, setAngle] = useState(45); // Degrees

    const rad = (deg) => deg * Math.PI / 180;
    const n1 = 1.0; // Air
    // n1 sin i1 = n2 sin i2  => sin i2 = (n1/n2) * sin i1
    let angle2 = Math.asin((n1 / n2) * Math.sin(rad(angle)));
    if (isNaN(angle2)) angle2 = Math.PI / 2; // Total reflection limit

    // Laser rays
    const origin = [0, 2, 0];
    const hit = [0, 0, 0];
    const end = [Math.sin(angle2) * 5, -Math.cos(angle2) * 5, 0];
    const sourcePos = [-Math.sin(rad(angle)) * 3, Math.cos(rad(angle)) * 3, 0];

    return (
        <group>
            <ambientLight intensity={0.5} />

            {/* Milieu 2 (Water/Glass) */}
            <mesh position={[0, -2, 0]}>
                <boxGeometry args={[10, 4, 1]} />
                <meshPhysicalMaterial
                    color={n2 > 1.4 ? "#A5B4FC" : "#CFFAFE"} // Glass vs Water look
                    transmission={0.9}
                    roughness={0.1}
                    transparent
                />
            </mesh>

            {/* Normal Line */}
            <Line points={[[0, 3, 0], [0, -3, 0]]} color="gray" dashed />

            {/* Incident Ray */}
            <Line points={[sourcePos, hit]} color="#EF4444" lineWidth={4} />

            {/* Refracted Ray */}
            <Line points={[hit, end]} color="#EF4444" lineWidth={4} opacity={0.6} transparent />

            {/* Reflection Ray (Partial) */}
            <Line points={[hit, [Math.sin(rad(angle)) * 3, Math.cos(rad(angle)) * 3, 0]]} color="#EF4444" lineWidth={1} dashed />

            {/* Angles Text */}
            <Text position={[-0.5, 0.5, 0]} fontSize={0.2} color="white">{angle}°</Text>
            <Text position={[0.5, -0.5, 0]} fontSize={0.2} color="white">{(angle2 * 180 / Math.PI).toFixed(1)}°</Text>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔦 Réfraction (Snell-Descartes)" className="w-[300px]" defaultPosition="bottom-right">
                    <div className="space-y-4 text-white">
                        <div className="bg-gray-800 p-2 rounded">
                            <label className="text-xs text-gray-400">Angle d'incidence (i1)</label>
                            <input type="range" min="0" max="85" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full h-1 bg-red-900 rounded accent-red-500" />
                        </div>

                        <div className="bg-gray-800 p-2 rounded">
                            <label className="text-xs text-gray-400">Milieu 2 (Indice n2)</label>
                            <div className="flex gap-2 mt-1">
                                <button onClick={() => setN2(1.33)} className={`flex-1 text-xs py-1 rounded ${n2 === 1.33 ? 'bg-blue-600' : 'bg-gray-700'}`}>Eau (1.33)</button>
                                <button onClick={() => setN2(1.5)} className={`flex-1 text-xs py-1 rounded ${n2 === 1.5 ? 'bg-indigo-600' : 'bg-gray-700'}`}>Verre (1.5)</button>
                                <button onClick={() => setN2(2.4)} className={`flex-1 text-xs py-1 rounded ${n2 === 2.4 ? 'bg-purple-600' : 'bg-gray-700'}`}>Diamant (2.4)</button>
                            </div>
                        </div>

                        <div className="text-center font-mono text-sm bg-black/40 p-2 rounded">
                            n₁·sin(i₁) = n₂·sin(i₂)
                            <br />
                            <span className="text-yellow-400">i₂ = {(angle2 * 180 / Math.PI).toFixed(1)}°</span>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 8. SPECTRE LUMIERE (Prism)
// =========================================================
export function PrismDispersion() {
    return (
        <group>
            <ambientLight intensity={0.2} />

            {/* Prism - Triangle Extruded */}
            <mesh rotation={[Math.PI / 2, Math.PI, 0]}>
                <cylinderGeometry args={[2, 2, 2, 3]} />
                <meshPhysicalMaterial
                    color="white" transmission={1} roughness={0}
                    ior={1.5} thickness={2}
                />
            </mesh>

            {/* White Light Beam */}
            <mesh position={[-4, 0.5, 0]} rotation={[0, 0, -0.2]}>
                <cylinderGeometry args={[0.05, 0.05, 4]} />
                <meshBasicMaterial color="white" />
            </mesh>

            {/* Rainbow Fan (Simulated geometry for visual appeal) */}
            <group position={[0.5, -0.5, 0]} rotation={[0, 0, -1]}>
                {['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#EE82EE'].map((color, i) => (
                    <mesh key={i} position={[2, i * 0.15 - 0.5, 0]} rotation={[0, 0, 0.1 * i]}>
                        <cylinderGeometry args={[0.02, 0.05, 5]} rotation={[0, 0, Math.PI / 2]} />
                        <meshBasicMaterial color={color} />
                    </mesh>
                ))}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🌈 Dispersion de la Lumière" className="w-[300px]" defaultPosition="top-right">
                    <div className="text-white space-y-3">
                        <p className="text-sm">La lumière blanche est un mélange de toutes les couleurs (longueurs d'onde).</p>
                        <ul className="text-xs list-disc ml-4 space-y-1 text-gray-300">
                            <li className="text-red-400">Le Rouge est moins dévié (λ ~ 800nm)</li>
                            <li className="text-purple-400">Le Violet est plus dévié (λ ~ 400nm)</li>
                        </ul>
                        <div className="text-xs bg-gray-800 p-2 rounded border border-gray-600">
                            C'est le même phénomène que l'Arc-en-ciel (gouttes d'eau = prisme).
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 9. LA MOLE (Balance)
// =========================================================
export function MoleScale() {
    const [atomType, setAtomType] = useState('C');
    const [moles, setMoles] = useState(1);

    const atoms = {
        C: { name: 'Carbone', M: 12.0, color: '#333' },
        H: { name: 'Hydrogène', M: 1.0, color: '#FFF' },
        Fe: { name: 'Fer', M: 55.8, color: '#A16207' },
        Au: { name: 'Or', M: 197.0, color: '#FACC15' },
    };

    const currentAtom = atoms[atomType];
    const totalMass = (currentAtom.M * moles).toFixed(1);
    const particleCount = (moles * 6.02).toFixed(2); // x 10^23

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} />

            {/* Balance Base */}
            <mesh position={[0, -2, 0]}>
                <boxGeometry args={[4, 0.5, 3]} />
                <meshStandardMaterial color="#374151" />
            </mesh>
            {/* Balance Screen */}
            <group position={[0, -1.74, 1.51]}>
                <mesh>
                    <boxGeometry args={[1.5, 0.5, 0.1]} />
                    <meshBasicMaterial color="#000" />
                </mesh>
                <Text position={[0, 0, 0.06]} fontSize={0.25} color="#00FF00" font="monospace">
                    {totalMass} g
                </Text>
            </group>

            {/* Pile of Atoms */}
            <group position={[0, -1.5, 0]}>
                <PileOfAtoms count={Math.min(50, Math.ceil(moles * 10))} color={currentAtom.color} />
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ La Mole (n)" className="w-[300px]" defaultPosition="bottom-right">
                    <div className="text-white space-y-4">
                        <div className="flex gap-2 justify-center">
                            {Object.entries(atoms).map(([key, data]) => (
                                <button key={key} onClick={() => setAtomType(key)} className={`px-2 py-1 rounded border ${atomType === key ? 'border-yellow-400 bg-yellow-500/20' : 'border-gray-600'}`}>
                                    {key}
                                </button>
                            ))}
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Quantité de matière (n)</label>
                            <input
                                type="range" min="0.1" max="5.0" step="0.1"
                                value={moles} onChange={(e) => setMoles(parseFloat(e.target.value))}
                                className="w-full h-1 bg-gray-700 rounded accent-green-500"
                            />
                            <div className="text-center font-bold text-green-400">{moles} mol</div>
                        </div>

                        <div className="bg-gray-900 p-2 rounded text-sm space-y-1 font-mono">
                            <div>Masse Molaire (M) : {currentAtom.M} g/mol</div>
                            <div className="border-t border-gray-700 pt-1">
                                m = n × M = <span className="text-yellow-400 font-bold">{totalMass} g</span>
                            </div>
                            <div className="text-gray-500 text-xs">
                                N = {particleCount} × 10²³ atomes
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

function PileOfAtoms({ count, color }) {
    // Generate random positions in a pile shape
    const positions = useMemo(() => {
        const pos = [];
        for (let i = 0; i < count; i++) {
            pos.push([
                (Math.random() - 0.5) * 1.5,
                (Math.random()) * 1.0 + (i * 0.02),
                (Math.random() - 0.5) * 1.5
            ]);
        }
        return pos;
    }, [count]);

    return (
        <group>
            {positions.map((p, i) => (
                <mesh key={i} position={p}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            ))}
        </group>
    )
}

// =========================================================
// 10. SOLUTIONS & CONCENTRATION (Beaker)
// =========================================================
export function SolutionsSeconde() {
    const [solute, setSolute] = useState(1); // Mol
    const [volume, setVolume] = useState(0.5); // Litres
    const concentration = solute / volume; // mol/L

    return (
        <group>
            <ambientLight intensity={0.7} />

            {/* Beaker Glass */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 4, 32, 1, true]} />
                <meshPhysicalMaterial color="white" transmission={0.9} roughness={0} thickness={0.2} transparent side={THREE.DoubleSide} />
            </mesh>

            {/* Liquid */}
            <mesh position={[0, -2 + (volume / 1.0) * 2, 0]}>
                <cylinderGeometry args={[1.45, 1.45, (volume / 1.0) * 4, 32]} />
                <meshStandardMaterial
                    color="#3B82F6"
                    transparent
                    opacity={Math.min(0.9, 0.1 + concentration * 0.2)} // Opacity based on concentration
                />
            </mesh>

            {/* Particles floating inside */}
            <ParticlesFloating count={Math.floor(solute * 20)} height={(volume / 1.0) * 4} radius={1.4} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Solutions & Concentration" className="w-[300px]" defaultPosition="bottom-left">
                    <div className="space-y-4 text-white">
                        <div>
                            <label className="text-xs text-blue-300">Soluté (n)</label>
                            <input
                                type="range" min="0.1" max="3" step="0.1"
                                value={solute} onChange={(e) => setSolute(Number(e.target.value))}
                                className="w-full h-1 bg-gray-700 rounded accent-blue-500"
                            />
                            <div className="text-right text-xs">{solute.toFixed(1)} mol</div>
                        </div>
                        <div>
                            <label className="text-xs text-cyan-300">Volume (V)</label>
                            <input
                                type="range" min="0.2" max="1.0" step="0.1"
                                value={volume} onChange={(e) => setVolume(Number(e.target.value))}
                                className="w-full h-1 bg-gray-700 rounded accent-cyan-500"
                            />
                            <div className="text-right text-xs">{volume.toFixed(1)} L</div>
                        </div>

                        <div className="bg-gray-900 p-3 rounded-xl text-center border border-blue-900">
                            <div className="text-xs text-gray-400">Concentration Molaire (C = n/V)</div>
                            <div className="text-2xl font-bold font-mono text-white">
                                {concentration.toFixed(2)} <span className="text-sm text-gray-400">mol/L</span>
                            </div>
                        </div>

                        <div className="text-xs text-gray-400">
                            Regarde la couleur : Plus c'est foncé, plus c'est concentré !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

function ParticlesFloating({ count, height, radius }) {
    const particles = useMemo(() => Array.from({ length: 50 }, () => ({
        pos: [(Math.random() - 0.5) * 2 * radius * 0.8, Math.random(), (Math.random() - 0.5) * 2 * radius * 0.8],
        speed: Math.random() * 0.5 + 0.5
    })), [radius]);

    return (
        <group position={[0, -2, 0]}>
            {particles.slice(0, count).map((p, i) => (
                <MovingParticle key={i} p={p} maxY={height} />
            ))}
        </group>
    )
}

function MovingParticle({ p, maxY }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * p.speed;
        if (ref.current) {
            ref.current.position.y = (t % 1) * maxY;
            ref.current.position.x = p.pos[0] + Math.sin(t * 2) * 0.1;
        }
    });

    return (
        <mesh ref={ref} position={[p.pos[0], 0, p.pos[2]]}>
            <sphereGeometry args={[0.05]} />
            <meshBasicMaterial color="white" />
        </mesh>
    );
}

function Stars() {
    return (
        <points>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={500} array={new Float32Array(1500).map(() => (Math.random() - 0.5) * 50)} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="white" transparent opacity={0.8} />
        </points>
    )
}
