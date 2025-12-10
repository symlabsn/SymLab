import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ThermalTransfer() {
    const [mode, setMode] = useState('conduction'); // conduction, convection, radiation
    const [temperature, setTemperature] = useState(0); // 0 à 100

    // Matériau barre conduction
    const barRef = useRef();

    // Particules convection
    const particlesRef = useRef([]);

    useFrame((state, delta) => {
        // Animation chauffage progressif
        if (temperature < 100) setTemperature(t => Math.min(100, t + delta * 10)); // Chauffe auto pour démo

        // Convection : Particules montent vite si chaud
        if (mode === 'convection') {
            // Logique particules
        }

        // Conduction : dégradé couleur sur la barre
        if (mode === 'conduction' && barRef.current) {
            // Dans Three.js standard, dur de faire un gradient dynamique sur un MeshStandardMaterial sans shader custom.
            // On va simuler en changeant la couleur globale vers le rouge
            const r = temperature / 100;
            barRef.current.material.color.setRGB(0.5 + r * 0.5, 0.5 - r * 0.5, 0.5 - r * 0.5); // Gris -> Rouge
            barRef.current.material.emissive.setRGB(r * 0.8, 0, 0);
        }
    });

    return (
        <group>
            {/* UI */}
            <Html position={[-4.5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🔥 Transferts Thermiques</h3>

                    <div className="space-y-4">
                        <div className="flex gap-1">
                            {['conduction', 'convection', 'radiation'].map(m => (
                                <button
                                    key={m}
                                    onClick={() => { setMode(m); setTemperature(0); }}
                                    className={`flex-1 py-1 text-xs rounded capitalize ${mode === m ? 'bg-orange-600' : 'bg-gray-700'}`}
                                >
                                    {m === 'radiation' ? 'Rayonnement' : m}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-800 p-2 rounded text-center">
                            <div className="text-xs text-gray-400">Température Source</div>
                            <div className="text-xl font-bold text-orange-400">{Math.round(temperature)}°C</div>
                        </div>

                        <div className="text-xs text-gray-300 italic p-2 border border-gray-700 rounded bg-black/30">
                            {mode === 'conduction' && "La chaleur se propage de proche en proche dans le solide (vibration atomes)."}
                            {mode === 'convection' && "La matière chaude (moins dense) monte, la froide descend (courants)."}
                            {mode === 'radiation' && "La chaleur voyage par ondes (lumière IR) sans besoin de matière."}
                        </div>

                        <button onClick={() => setTemperature(0)} className="w-full py-2 bg-blue-600 rounded mt-2">❄️ Refroidir</button>
                    </div>
                </div>
            </Html>

            {mode === 'conduction' && (
                <group position={[1.5, 0, 0]}>
                    <Text position={[0, 2, 0]} fontSize={0.4}>CONDUCTION (Solide)</Text>
                    {/* Source Chaude */}
                    <mesh position={[-3, 0, 0]}>
                        <boxGeometry args={[1, 2, 1]} />
                        <meshStandardMaterial color="red" emissive="red" emissiveIntensity={1} />
                    </mesh>
                    <Text position={[-3, -1.5, 0]} fontSize={0.2}>Source 100°C</Text>

                    {/* Barre Métal */}
                    <mesh ref={barRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.3, 0.3, 5, 32]} />
                        <meshStandardMaterial color="gray" />
                    </mesh>

                    {/* Main Froide */}
                    <mesh position={[3, 0, 0]}>
                        <sphereGeometry args={[0.6]} />
                        <meshStandardMaterial color="#FDBA74" /> {/* Peau */}
                    </mesh>
                    <Text position={[3, -1.5, 0]} fontSize={0.2} color={temperature > 80 ? "red" : "white"}>
                        {temperature > 80 ? "AÏE ! BRÛLURE" : "Main Froide"}
                    </Text>
                </group>
            )}

            {mode === 'convection' && (
                <group position={[1.5, 0, 0]}>
                    <Text position={[0, 2.5, 0]} fontSize={0.4}>CONVECTION (Fluide)</Text>
                    {/* Casserole */}
                    <mesh position={[0, -1, 0]}>
                        <cylinderGeometry args={[2, 1.8, 2, 32, 1, true]} />
                        <meshStandardMaterial color="#94A3B8" opacity={0.5} transparent side={THREE.DoubleSide} />
                    </mesh>
                    {/* Eau */}
                    <mesh position={[0, -1.2, 0]}>
                        <cylinderGeometry args={[1.9, 1.7, 1.5, 32]} />
                        <meshStandardMaterial color="#3B82F6" opacity={0.3} transparent />
                    </mesh>

                    {/* Feu */}
                    <pointLight position={[0, -3, 0]} color="orange" intensity={2} distance={5} />
                    <mesh position={[0, -2.5, 0]}>
                        <coneGeometry args={[0.5, 1, 16]} />
                        <meshStandardMaterial color="orange" emissive="orange" emissiveIntensity={1} />
                    </mesh>

                    {/* Particules (Bulles) */}
                    {[...Array(15)].map((_, i) => {
                        // Simulation boucle convection
                        const cycle = (Date.now() / 1000 + i) % 3; // 0 à 3 sec
                        const phase = cycle / 3;
                        // Monte au centre, descend sur les bords
                        let x, y;
                        if (phase < 0.5) { // Monte
                            x = (Math.random() - 0.5) * 0.5;
                            y = -2 + phase * 4; // -2 à 0
                        } else { // Redescend bords
                            const descent = (phase - 0.5) * 2; // 0 à 1
                            const angle = i * 1.5;
                            x = Math.cos(angle) * 1.5;
                            y = 0 - descent * 2;
                        }

                        return (
                            <mesh key={i} position={[x, y, (Math.random() - 0.5) * 0.5]}>
                                <sphereGeometry args={[0.1]} />
                                <meshStandardMaterial color={y > -0.5 ? "red" : "blue"} />
                            </mesh>
                        )
                    })}
                </group>
            )}

            {mode === 'radiation' && (
                <group position={[1.5, 0, 0]}>
                    <Text position={[0, 2, 0]} fontSize={0.4}>RAYONNEMENT (Ondes)</Text>
                    {/* Soleil/Lampe */}
                    <mesh position={[-3, 2, 0]}>
                        <sphereGeometry args={[1]} />
                        <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={2} />
                    </mesh>
                    {/* Rayons (Lignes jaunes) */}
                    {[...Array(8)].map((_, i) => (
                        <mesh key={i} position={[-2 + i * 0.5, 2 - i * 0.3, 0]} rotation={[0, 0, -0.5]}>
                            <cylinderGeometry args={[0.02, 0.02, 2]} />
                            <meshStandardMaterial color="yellow" emissive="yellow" transparent opacity={0.5} />
                        </mesh>
                    ))}

                    {/* Objet chauffé à distance */}
                    <mesh position={[2, -1, 0]}>
                        <boxGeometry args={[1.5, 1.5, 1.5]} />
                        {/* Devient rouge si exposé */}
                        <meshStandardMaterial color={temperature > 50 ? "#EF4444" : "#1F2937"} />
                    </mesh>
                    <Text position={[2, -2.2, 0]} fontSize={0.2} color="white">Objet Noir</Text>
                    <Text position={[2, 0.5, 0]} fontSize={0.2} color="orange">
                        {temperature > 50 ? "Chauffe !" : "Froid"}
                    </Text>
                </group>
            )}
        </group>
    );
}
