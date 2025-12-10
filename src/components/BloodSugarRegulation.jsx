import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BloodSugarRegulation() {
    const [glucoseLevel, setGlucoseLevel] = useState(1.0); // g/L (Normal ~1.0)
    const [insulinLevel, setInsulinLevel] = useState(1);   // Unités arbitraires

    // Références pour animation
    const containerRef = useRef();

    // Génération particules Glucose (Cubes Blancs)
    const glucoses = useMemo(() => {
        const count = Math.floor(glucoseLevel * 15);
        return Array(count).fill(0).map(() => ({
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4,
            speed: 0.5 + Math.random() * 0.5
        }));
    }, [glucoseLevel]);

    // Génération particules Insuline (Sphères Bleues) - régulées par pancréas
    const insulins = useMemo(() => {
        return Array(insulinLevel * 5).fill(0).map(() => ({
            x: (Math.random() - 0.5) * 4,
            y: (Math.random() - 0.5) * 4,
            speed: 1 + Math.random() * 0.5
        }));
    }, [insulinLevel]);

    useFrame((state, delta) => {
        // Animation flux sanguin
        if (containerRef.current) {
            // Rotation lente pour effet 3D
        }
        // Simuler une auto-régulation "Si insuline haute, glucose baisse"
        if (insulinLevel > 2 && glucoseLevel > 0.8) {
            setGlucoseLevel(prev => Math.max(0.6, prev - delta * 0.05));
        }
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🩸 Glycémie & Insuline</h3>

                    <div className="space-y-4">
                        {/* Niveau de Glucose */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                🍬 Glucose sanguin: {glucoseLevel.toFixed(2)} g/L
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="3.0"
                                step="0.1"
                                value={glucoseLevel}
                                onChange={(e) => setGlucoseLevel(parseFloat(e.target.value))}
                                className="w-full accent-white"
                            />
                            <div className={`text-xs font-bold text-center ${glucoseLevel > 1.26 ? 'text-red-500' : glucoseLevel < 0.7 ? 'text-yellow-500' : 'text-green-500'}`}>
                                {glucoseLevel > 1.26 ? "HYPERGLYCÉMIE (Diabète ?)" : glucoseLevel < 0.7 ? "HYPOGLYCÉMIE" : "NORMOGLYCÉMIE"}
                            </div>
                        </div>

                        {/* Injection Insuline */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                💉 Insuline (Pancréas)
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={insulinLevel}
                                onChange={(e) => setInsulinLevel(parseInt(e.target.value))}
                                className="w-full accent-blue-500"
                            />
                        </div>

                        {/* Légende */}
                        <div className="flex justify-around text-xs mt-2 bg-gray-900 rounded p-2">
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-white border border-gray-500"></div> Glucose
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div> Insuline (Clé)
                            </div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                VAISSEAU SANGUIN
            </Text>

            {/* Vaisseau Sanguin */}
            <group position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <mesh>
                    <cylinderGeometry args={[2.5, 2.5, 8, 32, 1, true]} />
                    <meshStandardMaterial color="#991B1B" side={THREE.DoubleSide} transparent opacity={0.8} />
                </mesh>

                {/* Particules Sang (Globules Rouges - Fond) */}
                {[...Array(30)].map((_, i) => (
                    <mesh key={`rbc-${i}`} position={[(Math.random() - 0.5) * 3, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 3]}>
                        <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
                        <meshStandardMaterial color="#DC2626" />
                    </mesh>
                ))}

                {/* Glucose */}
                {glucoses.map((g, i) => (
                    <mesh key={`glu-${i}`} position={[g.x * 0.5, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 3]} rotation={[Math.random(), Math.random(), 0]}>
                        <boxGeometry args={[0.2, 0.2, 0.2]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                ))}

                {/* Insuline */}
                {insulins.map((ins, i) => (
                    <mesh key={`ins-${i}`} position={[ins.x * 0.5, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 3]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5} />
                    </mesh>
                ))}
            </group>
        </group>
    );
}
