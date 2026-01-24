'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF, Float, Text, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import EnhancedQuiz from './EnhancedQuiz'; // Assuming this exists or using standard quiz logic

// =========================================================
// 1. FORCES ET INERTIE (Curling / Glissade)
// =========================================================
export function ForcesInertia() {
    const [surface, setSurface] = useState('ice'); // ice, grass, sand
    const [pushed, setPushed] = useState(false);
    const [position, setPosition] = useState(0);
    const [velocity, setVelocity] = useState(0);

    // Config surfaces
    const surfaces = {
        ice: { name: 'Glace', friction: 0.005, color: '#A5F3FC', emoji: '🧊' },
        wood: { name: 'Parquet', friction: 0.05, color: '#D4A373', emoji: '🪵' },
        sand: { name: 'Sable', friction: 0.3, color: '#EAB308', emoji: '🏖️' }
    };

    useFrame((state, delta) => {
        if (pushed && Math.abs(velocity) > 0.01) {
            setPosition(p => p + velocity * delta * 5);
            // Friction slows down
            const friction = surfaces[surface].friction;
            setVelocity(v => v > 0 ? Math.max(0, v - friction * delta * 5) : 0);
        } else if (pushed && Math.abs(velocity) <= 0.01) {
            setPushed(false);
            setVelocity(0);
        }
    });

    const pushObject = () => {
        setPosition(0);
        setVelocity(5);
        setPushed(true);
    };

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {/* Piste */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <planeGeometry args={[20, 4]} />
                <meshStandardMaterial color={surfaces[surface].color} roughness={0.1} metalness={0.1} />
            </mesh>

            {/* Objet (Stone) */}
            <group position={[position - 5, 0, 0]}>
                <mesh castShadow receiveShadow>
                    <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
                    <meshStandardMaterial color="#ef4444" />
                </mesh>
                <mesh position={[0, 0.2, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <Html position={[0, 1, 0]} center>
                    <div className="text-xs font-bold bg-black/50 text-white px-1 rounded whitespace-nowrap">
                        v = {velocity.toFixed(2)} m/s
                    </div>
                </Html>
            </group>

            {/* Repères distance */}
            {[...Array(10)].map((_, i) => (
                <mesh key={i} position={[-5 + i * 2, -0.49, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[0.1, 0.5]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            ))}

            <Html transform={false}>
                <DraggableHtmlPanel title="🧊 Principe d'Inertie" defaultPosition="bottom-center" className="w-[350px]">
                    <div className="space-y-4 text-white">
                        <div className="bg-gray-800 p-3 rounded-lg">
                            <label className="text-sm text-gray-400">Surface :</label>
                            <div className="flex gap-2 mt-2">
                                {Object.entries(surfaces).map(([k, s]) => (
                                    <button
                                        key={k}
                                        onClick={() => { setSurface(k); setPushed(false); setPosition(0); }}
                                        className={`flex-1 py-2 rounded border ${surface === k ? 'border-blue-400 bg-blue-500/30' : 'border-gray-600 bg-gray-700'}`}
                                    >
                                        <span className="text-lg">{s.emoji}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-sm bg-blue-900/30 p-3 rounded border border-blue-500/30">
                            &quot;Un corps garde sa vitesse si aucune force ne le freine.&quot;
                            <br />
                            <span className="text-yellow-400 text-xs">Frottement = {surfaces[surface].friction}</span>
                        </div>

                        <button
                            onClick={pushObject}
                            disabled={pushed && velocity > 0}
                            className="w-full py-3 bg-green-600 hover:bg-green-500 rounded font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {pushed ? 'Glissade en cours...' : '🚀 Lancer le Palet'}
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 2. LOI DE BOYLE-MARIOTTE (Gaz Parfait)
// =========================================================
export function GasLaws() {
    const [volume, setVolume] = useState(5); // Litres
    // P = nRT/V. Constante k = P*V. Assuming P=1 when V=10. k=10.
    const pressure = 10 / volume;

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {/* Cylindre */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[2, 2, 6, 32, 1, true]} />
                <meshPhysicalMaterial color="#ffffff" transmission={0.9} roughness={0} thickness={0.5} opacity={0.3} transparent side={THREE.DoubleSide} />
            </mesh>

            {/* Piston mobile */}
            <group position={[0, 3 - (10 - volume) / 10 * 6, 0]}>
                <mesh rotation={[0, 0, 0]}>
                    <cylinderGeometry args={[1.9, 1.9, 0.2, 32]} />
                    <meshStandardMaterial color="#666" metalness={0.8} />
                </mesh>
                <mesh position={[0, 2, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 4, 16]} />
                    <meshStandardMaterial color="#666" />
                </mesh>
                <mesh position={[0, 4, 0]}>
                    <boxGeometry args={[3, 0.5, 1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            </group>

            {/* Particules de gaz */}
            <Particles count={50} volume={volume} speed={pressure} />

            <Html transform={false}>
                <DraggableHtmlPanel title="💨 Loi de Boyle-Mariotte" defaultPosition="bottom-right" className="w-[300px]">
                    <div className="space-y-4 text-white">
                        <div>
                            <label className="text-sm text-gray-400">Volume (L)</label>
                            <input
                                type="range" min="1" max="9" step="0.1"
                                value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500"
                            />
                            <div className="flex justify-between text-xl font-mono mt-1">
                                <span>{volume.toFixed(1)} L</span>
                            </div>
                        </div>

                        <div className="bg-black/50 p-4 rounded-xl border border-white/10">
                            <div className="text-gray-400 text-xs uppercase mb-1">Pression (Bar)</div>
                            <div className="text-4xl font-bold text-red-500 font-mono">{pressure.toFixed(2)}</div>
                            <div className="h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-red-500 transition-all duration-300" style={{ width: `${(pressure / 10) * 100}%` }}></div>
                            </div>
                        </div>

                        <div className="text-xs bg-blue-900/30 p-2 rounded text-center">
                            P × V = Constante
                            <br />
                            {(pressure * volume).toFixed(1)} ≈ 10.0
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

function Particles({ count, volume, speed }) {
    const mesh = useRef();
    const particleData = useRef(Array.from({ length: count }, () => ({
        pos: [Math.random() * 3 - 1.5, Math.random() * 4 - 2, Math.random() * 3 - 1.5],
        vel: [(Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)]
    })));

    // Height of container varies with volume (mapped 1-10L to height)
    // 10L = height 6 (full). 1L = height 0.6.
    const h = (volume / 10) * 6;
    const bottom = -3;
    const top = bottom + h;

    useFrame((state, delta) => {
        const dummy = new THREE.Object3D();
        particleData.current.forEach((p, i) => {
            // Update pos
            p.pos[0] += p.vel[0] * delta * speed * 2;
            p.pos[1] += p.vel[1] * delta * speed * 2;
            p.pos[2] += p.vel[2] * delta * speed * 2;

            // Bounce walls (Cylinder radius approx 2)
            if (Math.sqrt(p.pos[0] ** 2 + p.pos[2] ** 2) > 1.8) {
                const angle = Math.atan2(p.pos[2], p.pos[0]);
                p.vel[0] = -Math.cos(angle) * Math.abs(p.vel[0]);
                p.vel[2] = -Math.sin(angle) * Math.abs(p.vel[2]);
            }
            // Bounce Top/Bottom
            if (p.pos[1] > top) { p.pos[1] = top; p.vel[1] *= -1; }
            if (p.pos[1] < bottom) { p.pos[1] = bottom; p.vel[1] *= -1; }

            dummy.position.set(p.pos[0], p.pos[1], p.pos[2]);
            dummy.scale.set(0.1, 0.1, 0.1);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
        </instancedMesh>
    );
}

// =========================================================
// 3. SOUND WAVES (Oscilloscope)
// =========================================================
export function SoundWaves() {
    const [freq, setFreq] = useState(440);
    const [amp, setAmp] = useState(1);
    const pointsRef = useRef();

    useFrame(({ clock }) => {
        if (!pointsRef.current) return;
        const pts = [];
        const t = clock.getElapsedTime();
        // Generate wave points
        for (let x = -5; x <= 5; x += 0.05) {
            const y = Math.sin(x * 2 + t * freq * 0.05) * amp;
            pts.push(new THREE.Vector3(x, y, 0));
        }
        pointsRef.current.setFromPoints(pts);
    });

    return (
        <group>
            <ambientLight />

            {/* Oscilloscope Screen */}
            <mesh position={[0, 0, -1]}>
                <boxGeometry args={[11, 6, 1]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <gridHelper position={[0, 0, -0.4]} args={[10, 10, 0x444444, 0x222222]} rotation={[Math.PI / 2, 0, 0]} />

            {/* The Wave */}
            <line ref={pointsRef} position={[0, 0, 0]}>
                <bufferGeometry />
                <lineBasicMaterial color="#00ff00" linewidth={3} />
            </line>

            {/* Speaker Visual */}
            <group position={[4, -3, 2]}>
                <mesh scale={[1 + amp * 0.2, 1 + amp * 0.2, 1]}>
                    <cylinderGeometry args={[2, 1, 1, 32]} rotation={[Math.PI / 2, 0, 0]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔊 Ondes Sonores" defaultPosition="bottom-center" className="w-[300px]">
                    <div className="space-y-4 text-white">
                        <div>
                            <label className="text-xs text-green-400">Fréquence (Hauteur) - {freq} Hz</label>
                            <input
                                type="range" min="100" max="1000"
                                value={freq} onChange={(e) => setFreq(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg accent-green-500"
                            />
                            <div className="text-[10px] text-gray-400">{freq < 300 ? 'Grave 🐘' : 'Aigu 🐦'}</div>
                        </div>

                        <div>
                            <label className="text-xs text-blue-400">Amplitude (Volume) - {amp}</label>
                            <input
                                type="range" min="0.1" max="2" step="0.1"
                                value={amp} onChange={(e) => setAmp(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500"
                            />
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 4. ATOMIC STRUCTURE (K, L, M Shells)
// =========================================================
export function AtomicStructureSeconde() {
    const [protonCount, setProtonCount] = useState(1);

    // Simple shell config rules: K=2, L=8, M=8
    const getElectronConfig = (n) => {
        let remaining = n;
        const K = Math.min(remaining, 2); remaining -= K;
        const L = Math.min(remaining, 8); remaining -= L;
        const M = Math.min(remaining, 8);
        return { K, L, M };
    };

    const config = getElectronConfig(protonCount);
    const elements = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"];
    const symbol = elements[protonCount - 1] || "?";

    return (
        <group>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            {/* Nucleus */}
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="orange" emissive="red" emissiveIntensity={0.5} />
            </mesh>
            <Text position={[0, 0, 0]} fontSize={0.3} color="white">{symbol}</Text>

            {/* Shells */}
            <ElectronShell radius={2} count={config.K} speed={1} name="K" />
            {config.L > 0 && <ElectronShell radius={3.5} count={config.L} speed={0.7} name="L" />}
            {config.M > 0 && <ElectronShell radius={5} count={config.M} speed={0.5} name="M" />}

            <Html transform={false}>
                <DraggableHtmlPanel title="⚛️ Cortège Électronique" defaultPosition="bottom-right" className="w-[300px]">
                    <div className="text-white space-y-4">
                        <div className="flex items-center justify-between">
                            <button onClick={() => setProtonCount(Math.max(1, protonCount - 1))} className="bg-gray-700 px-3 py-1 rounded">-</button>
                            <div className="text-center">
                                <div className="text-2xl font-bold">{symbol}</div>
                                <div className="text-xs text-gray-400">Z = {protonCount}</div>
                            </div>
                            <button onClick={() => setProtonCount(Math.min(18, protonCount + 1))} className="bg-gray-700 px-3 py-1 rounded">+</button>
                        </div>

                        <div className="bg-black/40 p-2 rounded text-sm font-mono space-y-1">
                            <div className={config.K === 2 ? "text-green-400" : "text-white"}>Couche K : {config.K} / 2e⁻</div>
                            <div className={config.L === 8 ? "text-green-400" : "text-gray-400"}>Couche L : {config.L} / 8e⁻</div>
                            <div className={config.M === 8 ? "text-green-400" : "text-gray-500"}>Couche M : {config.M} / 8e⁻</div>
                        </div>

                        <div className="text-xs bg-gray-800 p-2 rounded">
                            Règle de l&apos;Octet/Duet :
                            <br />
                            Les atomes cherchent à saturer leur couche externe pour être stables (comme les Gaz Nobles).
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

function ElectronShell({ radius, count, speed, name }) {
    const group = useRef();
    useFrame((state, delta) => {
        group.current.rotation.z += delta * speed * 0.5;
        group.current.rotation.x += delta * speed * 0.2;
    });

    return (
        <group ref={group}>
            {/* Orbital Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[radius, 0.02, 16, 100]} />
                <meshBasicMaterial color="gray" opacity={0.3} transparent />
            </mesh>
            {/* Electrons */}
            {Array.from({ length: count }).map((_, i) => {
                const angle = (i / count) * Math.PI * 2;
                return (
                    <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={0.8} />
                    </mesh>
                );
            })}
            <Text position={[radius, 0, 0]} fontSize={0.2} color="gray">{name}</Text>
        </group>
    );
}

// =========================================================
// 5. HYDRODISTILLATION (Extraction)
// =========================================================
export function DistillationSetup() {
    return (
        <group>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 10, 5]} />

            {/* Setup 3D simplistic */}
            {/* Chauffe-ballon */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1, 1.2, 1.5, 32]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            {/* Ballon */}
            <mesh position={[0, 1.5, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhysicalMaterial color="white" transmission={0.9} opacity={0.5} transparent roughness={0} />
            </mesh>
            {/* Liquide boiling inside */}
            <mesh position={[0, 1.2, 0]}>
                <sphereGeometry args={[0.9, 32, 32]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            {/* Colonne */}
            <mesh position={[0, 3, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 2, 16]} />
                <meshPhysicalMaterial color="white" transmission={0.9} transparent />
            </mesh>

            {/* Réfrigérant (Condenser) - Angled */}
            <group position={[1.5, 3.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <mesh>
                    <cylinderGeometry args={[0.4, 0.4, 4, 16]} />
                    <meshPhysicalMaterial color="white" transmission={0.8} transparent opacity={0.4} />
                </mesh>
                {/* Tube interne */}
                <mesh>
                    <cylinderGeometry args={[0.1, 0.1, 4.2, 16]} />
                    <meshStandardMaterial color="#AAF" opacity={0.6} transparent />
                </mesh>
            </group>

            {/* Erlenmeyer (Recolte) */}
            <group position={[3.5, 0.5, 0]}>
                <mesh>
                    <coneGeometry args={[0.8, 1.5, 32]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent />
                </mesh>
                {/* Distillat */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.7, 0.8, 0.5, 32]} />
                    <meshStandardMaterial color="#FFFF00" transparent opacity={0.8} />
                </mesh>
            </group>

            {/* UI */}
            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Hydrodistillation" className="w-[300px]" defaultPosition="top-right">
                    <div className="text-white space-y-2">
                        <p className="text-sm"> Technique pour extraire des huiles essentielles (ex: Citronnelle, Menthe).</p>
                        <ol className="text-xs list-decimal ml-4 space-y-1 text-gray-300">
                            <li><span className="text-orange-400">Ébullition</span> : La vapeur d&apos;eau emporte l&apos;huile.</li>
                            <li><span className="text-blue-400">Condensation</span> : Le réfrigérant refroidit la vapeur.</li>
                            <li><span className="text-yellow-400">Récupération</span> : On obtient le distillat (eau + huile).</li>
                        </ol>
                        <div className="bg-red-900/50 p-2 rounded border border-red-500/50 text-xs mt-2">
                            ⚠️ Attention : L&apos;eau froide doit entrer par le BAS du réfrigérant !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}
