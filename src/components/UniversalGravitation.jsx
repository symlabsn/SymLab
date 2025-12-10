import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function UniversalGravitation() {
    const [showForces, setShowForces] = useState(true);
    const [planetMass, setPlanetMass] = useState(1);
    const [distance, setDistance] = useState(3);
    const [orbitSpeed, setOrbitSpeed] = useState(1);
    const [isRunning, setIsRunning] = useState(true);

    const moonRef = useRef();
    const orbitRef = useRef();
    const forceArrowRef = useRef();

    // Constante G (simplifiée pour la visualisation)
    const G = 6.67;
    const earthMass = 5.97;
    const force = (G * earthMass * planetMass) / (distance * distance);

    useFrame((state, delta) => {
        if (!isRunning) return;

        if (orbitRef.current) {
            orbitRef.current.rotation.y += delta * orbitSpeed * 0.5;
        }

        if (forceArrowRef.current && moonRef.current) {
            // Faire pointer la flèche vers le centre
            const moonPos = new THREE.Vector3();
            moonRef.current.getWorldPosition(moonPos);
            forceArrowRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🌍🌙 Gravitation Universelle</h3>

                    <div className="space-y-3">
                        {/* Masse de la planète */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Masse satellite: {planetMass.toFixed(1)} × 10²² kg
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="5"
                                step="0.1"
                                value={planetMass}
                                onChange={(e) => setPlanetMass(parseFloat(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Distance */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Distance: {distance.toFixed(1)} × 10⁸ m
                            </label>
                            <input
                                type="range"
                                min="2"
                                max="5"
                                step="0.1"
                                value={distance}
                                onChange={(e) => setDistance(parseFloat(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Vitesse orbitale */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Vitesse orbitale: {orbitSpeed.toFixed(1)}x
                            </label>
                            <input
                                type="range"
                                min="0.1"
                                max="3"
                                step="0.1"
                                value={orbitSpeed}
                                onChange={(e) => setOrbitSpeed(parseFloat(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Force calculée */}
                        <div className="p-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded">
                            <div className="text-center mb-2">
                                <div className="text-xs text-gray-400">Force gravitationnelle:</div>
                                <div className="text-xl font-bold text-cyan-400">
                                    F = {force.toFixed(2)} × 10²⁰ N
                                </div>
                            </div>
                            <div className="text-xs text-center font-mono text-purple-300 p-2 bg-black/30 rounded">
                                F = G × (m₁ × m₂) / d²
                            </div>
                        </div>

                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={showForces}
                                onChange={(e) => setShowForces(e.target.checked)}
                            />
                            Afficher les forces
                        </label>

                        <button
                            onClick={() => setIsRunning(!isRunning)}
                            className={`w-full py-2 rounded font-bold ${isRunning ? 'bg-red-600' : 'bg-green-600'}`}
                        >
                            {isRunning ? '⏸️ Pause' : '▶️ Play'}
                        </button>
                    </div>
                </div>
            </Html>

            <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                LOI DE GRAVITATION DE NEWTON
            </Text>

            {/* Espace étoilé (arrière-plan) */}
            {Array.from({ length: 50 }).map((_, i) => (
                <mesh key={i} position={[
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10,
                    -3 - Math.random() * 5
                ]}>
                    <sphereGeometry args={[0.02 + Math.random() * 0.03, 8, 8]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            ))}

            {/* Terre */}
            <group position={[1.5, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                {/* Continents simulés */}
                <mesh>
                    <sphereGeometry args={[1.01, 32, 32]} />
                    <meshStandardMaterial
                        color="#22C55E"
                        transparent
                        opacity={0.6}
                        wireframe
                    />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="white">
                    Terre (M = 5.97 × 10²⁴ kg)
                </Text>
            </group>

            {/* Orbite (cercle) */}
            <mesh position={[1.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[distance, 0.02, 16, 64]} />
                <meshStandardMaterial color="#6B7280" transparent opacity={0.5} />
            </mesh>

            {/* Groupe orbital (rotation) */}
            <group ref={orbitRef} position={[1.5, 0, 0]}>
                {/* Lune/Satellite */}
                <group ref={moonRef} position={[distance, 0, 0]}>
                    <mesh>
                        <sphereGeometry args={[0.2 + planetMass * 0.1, 16, 16]} />
                        <meshStandardMaterial color="#9CA3AF" />
                    </mesh>

                    {/* Flèche de force (vers la Terre) */}
                    {showForces && (
                        <group ref={forceArrowRef}>
                            <mesh position={[-0.5 - force * 0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.03, 0.03, 0.8 + force * 0.1, 8]} />
                                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
                            </mesh>
                            <mesh position={[-0.9 - force * 0.1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                                <coneGeometry args={[0.08, 0.2, 8]} />
                                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
                            </mesh>
                        </group>
                    )}
                </group>

                {/* Flèche vitesse tangentielle */}
                {showForces && (
                    <group position={[distance, 0, 0]}>
                        <mesh position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.03, 0.03, 0.8, 8]} />
                            <meshStandardMaterial color="#22C55E" emissive="#22C55E" emissiveIntensity={0.5} />
                        </mesh>
                        <mesh position={[0, 0, 1]} rotation={[0, 0, 0]}>
                            <coneGeometry args={[0.08, 0.2, 8]} />
                            <meshStandardMaterial color="#22C55E" emissive="#22C55E" emissiveIntensity={0.5} />
                        </mesh>
                    </group>
                )}
            </group>

            {/* Légende */}
            {showForces && (
                <group position={[5, -2, 0]}>
                    <mesh position={[0, 0.3, 0]}>
                        <boxGeometry args={[0.3, 0.05, 0.05]} />
                        <meshStandardMaterial color="#EF4444" />
                    </mesh>
                    <Text position={[0.5, 0.3, 0]} fontSize={0.12} color="#EF4444">
                        Force F
                    </Text>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.3, 0.05, 0.05]} />
                        <meshStandardMaterial color="#22C55E" />
                    </mesh>
                    <Text position={[0.5, 0, 0]} fontSize={0.12} color="#22C55E">
                        Vitesse v
                    </Text>
                </group>
            )}
        </group>
    );
}
