import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function LightSpectrum() {
    const [lightType, setLightType] = useState('white');
    const [showLabels, setShowLabels] = useState(true);
    const [prismAngle, setPrismAngle] = useState(60);

    const lightRef = useRef();
    const spectrumRefs = useRef([]);

    const COLORS = [
        { name: 'Rouge', color: '#EF4444', wavelength: '700 nm', deviation: 0.3 },
        { name: 'Orange', color: '#F97316', wavelength: '620 nm', deviation: 0.45 },
        { name: 'Jaune', color: '#EAB308', wavelength: '580 nm', deviation: 0.6 },
        { name: 'Vert', color: '#22C55E', wavelength: '530 nm', deviation: 0.75 },
        { name: 'Bleu', color: '#3B82F6', wavelength: '470 nm', deviation: 0.9 },
        { name: 'Violet', color: '#8B5CF6', wavelength: '400 nm', deviation: 1.05 },
    ];

    // Animation des rayons
    useFrame((state) => {
        if (lightRef.current) {
            lightRef.current.material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.4;
        }
        spectrumRefs.current.forEach((ref, i) => {
            if (ref) {
                ref.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + i * 0.3) * 0.5;
            }
        });
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🌈 Spectres Lumineux</h3>

                    <div className="space-y-3">
                        {/* Type de lumière */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Type de lumière</label>
                            <select
                                value={lightType}
                                onChange={(e) => setLightType(e.target.value)}
                                className="w-full p-2 bg-gray-800 rounded text-sm"
                            >
                                <option value="white">Lumière blanche (Polychromatique)</option>
                                <option value="red">Laser rouge (Monochromatique)</option>
                                <option value="green">Laser vert (Monochromatique)</option>
                            </select>
                        </div>

                        {/* Angle du prisme */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Angle du prisme: {prismAngle}°
                            </label>
                            <input
                                type="range"
                                min="30"
                                max="80"
                                value={prismAngle}
                                onChange={(e) => setPrismAngle(parseInt(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Légende des couleurs */}
                        <div className="p-2 bg-gray-900/50 rounded">
                            <div className="text-xs text-gray-400 mb-2">Spectre visible:</div>
                            <div className="flex justify-between">
                                {COLORS.map((c, i) => (
                                    <div key={i} className="text-center">
                                        <div
                                            className="w-4 h-4 rounded-full mx-auto mb-1"
                                            style={{ backgroundColor: c.color }}
                                        />
                                        <div className="text-[8px] text-gray-400">{c.wavelength}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-2 bg-purple-900/30 rounded text-center text-xs">
                            <span className="text-purple-300">
                                λ rouge &gt; λ violet<br />
                                Déviation rouge &lt; Déviation violet
                            </span>
                        </div>

                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={showLabels}
                                onChange={(e) => setShowLabels(e.target.checked)}
                            />
                            Afficher les étiquettes
                        </label>
                    </div>
                </div>
            </Html>

            <Text position={[1, 3.5, 0]} fontSize={0.4} color="white">
                DISPERSION DE LA LUMIÈRE
            </Text>

            {/* Source lumineuse */}
            <group position={[-3, 0.5, 0]}>
                <mesh>
                    <boxGeometry args={[0.5, 0.3, 0.3]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <mesh position={[0.3, 0, 0]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial
                        color={lightType === 'red' ? '#EF4444' : lightType === 'green' ? '#22C55E' : 'white'}
                        emissive={lightType === 'red' ? '#EF4444' : lightType === 'green' ? '#22C55E' : 'white'}
                        emissiveIntensity={2}
                    />
                </mesh>
                <Text position={[0, -0.4, 0]} fontSize={0.15} color="gray">
                    Source
                </Text>
            </group>

            {/* Rayon incident (lumière blanche) */}
            <mesh ref={lightRef} position={[-1.5, 0.5, 0]} rotation={[0, 0, 0]}>
                <boxGeometry args={[2.5, 0.1, 0.05]} />
                <meshStandardMaterial
                    color={lightType === 'red' ? '#EF4444' : lightType === 'green' ? '#22C55E' : 'white'}
                    emissive={lightType === 'red' ? '#EF4444' : lightType === 'green' ? '#22C55E' : 'white'}
                    emissiveIntensity={1}
                    transparent
                />
            </mesh>

            {/* Prisme */}
            <group position={[0, 0, 0]}>
                <mesh rotation={[0, 0, Math.PI]}>
                    <coneGeometry args={[1.5, 2.5, 3]} />
                    <meshStandardMaterial
                        color="#E0E7FF"
                        transparent
                        opacity={0.4}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                <Text position={[0, -1.8, 0]} fontSize={0.2} color="gray">
                    Prisme
                </Text>
            </group>

            {/* Rayons dispersés (arc-en-ciel) */}
            {lightType === 'white' && COLORS.map((c, i) => {
                const baseAngle = -0.15 + c.deviation * (prismAngle / 60) * 0.4;
                return (
                    <group key={i}>
                        <mesh
                            ref={el => spectrumRefs.current[i] = el}
                            position={[2.5 + i * 0.15, 0.5 - c.deviation * 1.2, 0]}
                            rotation={[0, 0, baseAngle]}
                        >
                            <boxGeometry args={[3, 0.08, 0.03]} />
                            <meshStandardMaterial
                                color={c.color}
                                emissive={c.color}
                                emissiveIntensity={0.8}
                                transparent
                            />
                        </mesh>
                        {showLabels && (
                            <Text
                                position={[4.5, 0.5 - c.deviation * 1.2, 0]}
                                fontSize={0.15}
                                color={c.color}
                            >
                                {c.name}
                            </Text>
                        )}
                    </group>
                );
            })}

            {/* Rayon monochromatique (pas de dispersion) */}
            {lightType !== 'white' && (
                <mesh position={[2.5, 0.2, 0]} rotation={[0, 0, -0.15]}>
                    <boxGeometry args={[3.5, 0.1, 0.05]} />
                    <meshStandardMaterial
                        color={lightType === 'red' ? '#EF4444' : '#22C55E'}
                        emissive={lightType === 'red' ? '#EF4444' : '#22C55E'}
                        emissiveIntensity={1}
                    />
                </mesh>
            )}

            {/* Écran de projection */}
            <mesh position={[5.5, 0, 0]} rotation={[0, -0.3, 0]}>
                <boxGeometry args={[0.1, 3.5, 1]} />
                <meshStandardMaterial color="#F3F4F6" />
            </mesh>
            <Text position={[5.8, -2, 0]} fontSize={0.15} color="gray">
                Écran
            </Text>
        </group>
    );
}
