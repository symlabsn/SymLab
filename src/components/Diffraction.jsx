import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

export function Diffraction() {
    const [slitWidth, setSlitWidth] = useState(0.4);
    const [wavelength, setWavelength] = useState(1);
    const [isAnimating, setIsAnimating] = useState(true);
    const [lightColor, setLightColor] = useState('#00F5D4');

    const groupRef = useRef();

    // Couleurs disponibles
    const colors = [
        { name: 'Cyan', value: '#00F5D4' },
        { name: 'Rouge', value: '#EF4444' },
        { name: 'Vert', value: '#10B981' },
        { name: 'Violet', value: '#8B5CF6' }
    ];

    // Angle de diffraction approximatif (θ ≈ λ/a)
    const diffractionAngle = (wavelength / (slitWidth * 10)).toFixed(2);

    return (
        <group ref={groupRef}>
            {/* Panneau de Contrôle */}
            <Html position={[-4, 1, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🌊 Diffraction</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-1">Largeur Fente a : {(slitWidth * 10).toFixed(1)} mm</label>
                            <input
                                type="range"
                                min="0.2"
                                max="1"
                                step="0.1"
                                value={slitWidth}
                                onChange={(e) => setSlitWidth(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FCD34D]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Longueur d'Onde λ : {wavelength.toFixed(1)}</label>
                            <input
                                type="range"
                                min="0.5"
                                max="2"
                                step="0.1"
                                value={wavelength}
                                onChange={(e) => setWavelength(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F5D4]"
                            />
                        </div>

                        <div>
                            <label className="block text-xs mb-2">Couleur Lumière</label>
                            <div className="flex gap-1">
                                {colors.map(c => (
                                    <button
                                        key={c.value}
                                        onClick={() => setLightColor(c.value)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${lightColor === c.value ? 'border-white scale-110' : 'border-transparent'
                                            }`}
                                        style={{ backgroundColor: c.value }}
                                    />
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setIsAnimating(!isAnimating)}
                            className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${isAnimating ? 'bg-yellow-600' : 'bg-gray-700'
                                }`}
                        >
                            {isAnimating ? '⏸ Pause' : '▶️ Animer'}
                        </button>

                        {/* Formule */}
                        <div className="p-2 bg-white/10 rounded-lg text-center">
                            <div className="text-xs text-gray-400 mb-1">Angle de diffraction</div>
                            <div className="text-lg font-bold text-[#FCD34D]">θ ≈ {diffractionAngle} rad</div>
                            <div className="text-xs text-gray-400 mt-1">θ = λ / a</div>
                        </div>

                        <div className="text-xs text-center text-gray-400">
                            Plus la fente est petite, plus la diffraction est grande
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DIFFRACTION PAR UNE FENTE</Text>

            {/* Source d'ondes planes */}
            <group position={[-2, 0, 0]}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <mesh key={`plane-${i}`} position={[-1 + i * 0.5, 0, 0]}>
                        <boxGeometry args={[0.05, 4, 0.1]} />
                        <meshStandardMaterial color={lightColor} transparent opacity={0.5} />
                    </mesh>
                ))}
                <Text position={[-1, -2.5, 0]} fontSize={0.25} color={lightColor}>Onde Plane Incidente</Text>
            </group>

            {/* Obstacle avec fente */}
            <group position={[0.5, 0, 0]}>
                {/* Mur haut */}
                <mesh position={[0, slitWidth + 2, 0]}>
                    <boxGeometry args={[0.2, 4, 0.5]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Mur bas */}
                <mesh position={[0, -(slitWidth + 2), 0]}>
                    <boxGeometry args={[0.2, 4, 0.5]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>

                {/* Indicateur largeur fente */}
                <mesh position={[0.3, 0, 0]}>
                    <boxGeometry args={[0.02, slitWidth * 2, 0.02]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0.6, 0, 0]} fontSize={0.2} color="#FCD34D">a</Text>
            </group>

            {/* Ondes diffractées */}
            <group position={[0.6, 0, 0]}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <WaveRing
                        key={`ring-${i}`}
                        index={i}
                        color={lightColor}
                        wavelength={wavelength}
                        isAnimating={isAnimating}
                    />
                ))}
            </group>

            {/* Écran de projection */}
            <group position={[5, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.1, 5, 1]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                {/* Figure de diffraction (franges) */}
                {Array.from({ length: 7 }).map((_, i) => {
                    const y = (i - 3) * 0.6;
                    const intensity = Math.cos((i - 3) * 0.5) ** 2;
                    return (
                        <mesh key={`fringe-${i}`} position={[0.06, y, 0]}>
                            <boxGeometry args={[0.02, 0.4, 0.8]} />
                            <meshStandardMaterial
                                color={lightColor}
                                transparent
                                opacity={intensity}
                                emissive={lightColor}
                                emissiveIntensity={intensity * 0.5}
                            />
                        </mesh>
                    );
                })}
                <Text position={[0.5, -3, 0]} fontSize={0.2} color="white">Écran</Text>
            </group>

            <Text position={[0, -3.5, 0]} fontSize={0.25} color="white">
                Formule de Diffraction: sin(θ) = λ / a
            </Text>
        </group>
    );
}

function WaveRing({ index, color, wavelength, isAnimating }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current && isAnimating) {
            const speed = 1.5 * wavelength;
            const maxScale = 5;
            const t = (state.clock.elapsedTime * speed + index * 0.5) % maxScale;

            meshRef.current.scale.set(t, t, 1);

            const material = meshRef.current.material;
            if (material) {
                material.opacity = Math.max(0, 1 - t / maxScale);
            }
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <ringGeometry args={[0.9, 1.0, 32, 1, -Math.PI / 2, Math.PI]} />
            <meshBasicMaterial color={color} transparent side={THREE.DoubleSide} />
        </mesh>
    );
}
