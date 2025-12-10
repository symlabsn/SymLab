import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

export function MagneticField() {
    const [rotationSpeed, setRotationSpeed] = useState(1);
    const [showFieldLines, setShowFieldLines] = useState(true);
    const [fieldIntensity, setFieldIntensity] = useState(1);
    const [showCompass, setShowCompass] = useState(true);

    const earthRef = useRef();
    const compassRef = useRef();

    // Animation de rotation
    useFrame((state) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.002 * rotationSpeed;
        }
        if (compassRef.current) {
            // L'aiguille de la boussole oscille légèrement
            compassRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        }
    });

    // Lignes de champ magnétique
    const renderFieldLines = () => {
        if (!showFieldLines) return null;

        const lines = [];
        const numLines = 12;
        const intensity = 2 + fieldIntensity * 2;

        for (let i = 0; i < numLines; i++) {
            const angle = (i / numLines) * Math.PI * 2;

            const curve = new THREE.CubicBezierCurve3(
                new THREE.Vector3(0, 1.8, 0),
                new THREE.Vector3(Math.cos(angle) * intensity, 1, Math.sin(angle) * intensity),
                new THREE.Vector3(Math.cos(angle) * intensity, -1, Math.sin(angle) * intensity),
                new THREE.Vector3(0, -1.8, 0)
            );

            lines.push(
                <mesh key={`line-${i}`}>
                    <tubeGeometry args={[curve, 64, 0.025, 8, false]} />
                    <meshStandardMaterial
                        color="#00F5D4"
                        transparent
                        opacity={0.3 + fieldIntensity * 0.2}
                        emissive="#00F5D4"
                        emissiveIntensity={0.2 * fieldIntensity}
                    />
                </mesh>
            );

            // Flèches de direction
            lines.push(
                <mesh
                    key={`arrow-${i}`}
                    position={[
                        Math.cos(angle) * (intensity * 0.7),
                        0,
                        Math.sin(angle) * (intensity * 0.7)
                    ]}
                    rotation={[0, -angle, Math.PI / 2]}
                >
                    <coneGeometry args={[0.08, 0.3, 8]} />
                    <meshStandardMaterial color="#00F5D4" />
                </mesh>
            );
        }
        return lines;
    };

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[-4, 1, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[250px] backdrop-blur-md select-none">
                    <h3 className="text-[#00F5D4] font-bold mb-3 text-center">🧲 Champ Magnétique</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">Rotation Terre : {rotationSpeed.toFixed(1)}x</label>
                            <input
                                type="range"
                                min="0"
                                max="3"
                                step="0.5"
                                value={rotationSpeed}
                                onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#3B82F6]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Intensité Champ : {fieldIntensity.toFixed(1)}</label>
                            <input
                                type="range"
                                min="0.5"
                                max="2"
                                step="0.1"
                                value={fieldIntensity}
                                onChange={(e) => setFieldIntensity(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F5D4]"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => setShowFieldLines(!showFieldLines)}
                                className={`py-2 px-2 rounded-lg text-xs font-bold transition-colors ${showFieldLines ? 'bg-cyan-600' : 'bg-gray-700'
                                    }`}
                            >
                                {showFieldLines ? '🔵 Lignes ON' : '⚪ Lignes OFF'}
                            </button>
                            <button
                                onClick={() => setShowCompass(!showCompass)}
                                className={`py-2 px-2 rounded-lg text-xs font-bold transition-colors ${showCompass ? 'bg-red-600' : 'bg-gray-700'
                                    }`}
                            >
                                {showCompass ? '🧭 Boussole ON' : '⚪ Boussole OFF'}
                            </button>
                        </div>

                        {/* Info */}
                        <div className="p-2 bg-white/10 rounded-lg text-xs">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <span>Pôle Nord Magnétique</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                                <span>Pôle Sud Magnétique</span>
                            </div>
                        </div>

                        <div className="text-xs text-center text-gray-400">
                            Les lignes sortent du N et rentrent au S
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">CHAMP MAGNÉTIQUE TERRESTRE</Text>

            <group ref={earthRef}>
                {/* Terre */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color="#2563EB" metalness={0.1} roughness={0.8} />
                </mesh>

                {/* Continents simplifiés */}
                <mesh position={[1.5, 0.5, 0.8]}>
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[-1.2, 0.2, 1]}>
                    <sphereGeometry args={[0.6, 16, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[0.5, -1, 1.5]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>

                {/* Axe de rotation */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 5, 8]} />
                    <meshStandardMaterial color="white" transparent opacity={0.3} />
                </mesh>
            </group>

            {/* Pôles Magnétiques */}
            <group>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 2, 8]} />
                    <meshStandardMaterial color="#EF4444" transparent opacity={0.5} />
                </mesh>
                <Text position={[0.5, 1.8, 0]} fontSize={0.4} color="#EF4444">N</Text>

                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 2, 8]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.5} />
                </mesh>
                <Text position={[0.5, -1.8, 0]} fontSize={0.4} color="#3B82F6">S</Text>
            </group>

            {/* Lignes de champ */}
            {renderFieldLines()}

            {/* Boussole */}
            {showCompass && (
                <group position={[3.5, 2, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
                        <meshStandardMaterial color="#4B5563" />
                    </mesh>
                    {/* Aiguille */}
                    <group ref={compassRef}>
                        <mesh position={[0.25, 0, 0.1]}>
                            <boxGeometry args={[0.5, 0.12, 0.06]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                        <mesh position={[-0.25, 0, 0.1]}>
                            <boxGeometry args={[0.5, 0.12, 0.06]} />
                            <meshStandardMaterial color="white" />
                        </mesh>
                    </group>
                    <Text position={[0, 0.8, 0]} fontSize={0.2} color="white">Boussole</Text>
                    <Text position={[0.4, 0, 0.2]} fontSize={0.15} color="#EF4444">N</Text>
                    <Text position={[-0.4, 0, 0.2]} fontSize={0.15} color="white">S</Text>
                </group>
            )}

            <Text position={[0, -3, 0]} fontSize={0.25} color="gray">
                Le Pôle Nord de la boussole pointe vers le Pôle Sud Magnétique (≈ Nord Géographique)
            </Text>
        </group>
    );
}
