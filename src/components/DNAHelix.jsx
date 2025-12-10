import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

// Composant ADN (Double Hélice) - INTERACTIF
export function DNAHelix() {
    const [rotationSpeed, setRotationSpeed] = useState(0.5);
    const [showLabels, setShowLabels] = useState(true);
    const [selectedBase, setSelectedBase] = useState(null);
    const groupRef = useRef();

    const numPairs = 12;
    const helixRadius = 0.8;
    const helixHeight = 6;

    const basePairs = [
        { base1: 'A', base2: 'T', color: '#FCD34D', name: 'Adénine - Thymine' },
        { base1: 'G', base2: 'C', color: '#10B981', name: 'Guanine - Cytosine' }
    ];

    // Animation de rotation
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[3, 1, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[240px] backdrop-blur-md select-none">
                    <h3 className="text-[#8B5CF6] font-bold mb-3 text-center">🧬 ADN - Double Hélice</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">Vitesse Rotation : {rotationSpeed.toFixed(1)}x</label>
                            <input
                                type="range"
                                min="0"
                                max="2"
                                step="0.1"
                                value={rotationSpeed}
                                onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6]"
                            />
                        </div>

                        <button
                            onClick={() => setShowLabels(!showLabels)}
                            className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${showLabels ? 'bg-purple-600' : 'bg-gray-700'
                                }`}
                        >
                            {showLabels ? '🏷️ Masquer Labels' : '🏷️ Afficher Labels'}
                        </button>

                        {/* Info sur la base sélectionnée */}
                        <div className="p-2 bg-white/5 rounded-lg text-center">
                            <div className="text-xs text-gray-400 mb-1">Paires de Bases</div>
                            <div className="flex justify-center gap-3">
                                <span className="px-2 py-1 bg-yellow-600/30 rounded text-yellow-400 text-xs">A-T</span>
                                <span className="px-2 py-1 bg-green-600/30 rounded text-green-400 text-xs">G-C</span>
                            </div>
                        </div>

                        <div className="text-xs text-center text-gray-400">
                            L'ADN contient l'information génétique
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ADN - DOUBLE HÉLICE</Text>

            <group ref={groupRef}>
                {/* Brins d'ADN (deux hélices) */}
                {Array.from({ length: numPairs }).map((_, i) => {
                    const t = (i / numPairs) * Math.PI * 4;
                    const y = (i / numPairs) * helixHeight - helixHeight / 2;
                    const basePair = basePairs[i % 2];

                    return (
                        <group key={`pair-${i}`}>
                            {/* Brin 1 (Bleu - Sucre-Phosphate) */}
                            <mesh position={[
                                Math.cos(t) * helixRadius,
                                y,
                                Math.sin(t) * helixRadius
                            ]}>
                                <sphereGeometry args={[0.18, 16, 16]} />
                                <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.4} />
                            </mesh>

                            {/* Brin 2 (Rouge - Sucre-Phosphate) */}
                            <mesh position={[
                                Math.cos(t + Math.PI) * helixRadius,
                                y,
                                Math.sin(t + Math.PI) * helixRadius
                            ]}>
                                <sphereGeometry args={[0.18, 16, 16]} />
                                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.4} />
                            </mesh>

                            {/* Paire de bases (Barreaux de l'échelle) */}
                            <mesh
                                position={[0, y, 0]}
                                rotation={[0, t, Math.PI / 2]}
                            >
                                <cylinderGeometry args={[0.06, 0.06, helixRadius * 2, 8]} />
                                <meshStandardMaterial
                                    color={basePair.color}
                                    emissive={basePair.color}
                                    emissiveIntensity={0.3}
                                />
                            </mesh>

                            {/* Labels des bases */}
                            {showLabels && i % 3 === 0 && (
                                <>
                                    <Text
                                        position={[Math.cos(t) * helixRadius * 0.5, y, Math.sin(t) * helixRadius * 0.5]}
                                        fontSize={0.15}
                                        color={basePair.color}
                                    >
                                        {basePair.base1}
                                    </Text>
                                    <Text
                                        position={[Math.cos(t + Math.PI) * helixRadius * 0.5, y, Math.sin(t + Math.PI) * helixRadius * 0.5]}
                                        fontSize={0.15}
                                        color={basePair.color}
                                    >
                                        {basePair.base2}
                                    </Text>
                                </>
                            )}
                        </group>
                    );
                })}
            </group>

            {/* Légendes */}
            <group position={[-2.5, 0, 0]}>
                <mesh position={[0, 0.3, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0.5, 0.3, 0]} fontSize={0.15} color="#3B82F6" anchorX="left">Sucre-Phosphate (Brin 1)</Text>

                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0.5, 0, 0]} fontSize={0.15} color="#EF4444" anchorX="left">Sucre-Phosphate (Brin 2)</Text>

                <mesh position={[0, -0.3, 0]}>
                    <boxGeometry args={[0.2, 0.05, 0.05]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0.5, -0.3, 0]} fontSize={0.15} color="#FCD34D" anchorX="left">Bases Azotées</Text>
            </group>

            <Text position={[0, -3.5, 0]} fontSize={0.25} color="white">2 liaisons H (A-T) • 3 liaisons H (G-C)</Text>
        </group>
    );
}
