import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

export function Titration() {
    const [volumeDelivered, setVolumeDelivered] = useState(0);
    const [isPouring, setIsPouring] = useState(false);
    const [dropSpeed, setDropSpeed] = useState(1);
    const [indicator, setIndicator] = useState('bbt'); // bbt, phenolphthalein

    const equivalencePoint = 10;
    const dropRef = useRef();
    const liquidRef = useRef();
    const stirrerRef = useRef();

    // Calcul du pH approximatif
    const getPH = () => {
        if (volumeDelivered < equivalencePoint - 2) return 2 + volumeDelivered * 0.3;
        if (volumeDelivered > equivalencePoint + 2) return 12;
        return 7;
    };

    // Couleur selon l'indicateur
    const getColor = () => {
        const pH = getPH();
        if (indicator === 'bbt') {
            // Bleu de Bromothymol: Jaune (< 6) -> Vert (6-7.6) -> Bleu (> 7.6)
            if (pH < 6) return '#FFFF00';
            if (pH > 7.6) return '#3B82F6';
            return '#10B981';
        } else {
            // Phénolphtaléine: Incolore (< 8.2) -> Rose (> 8.2)
            if (pH < 8.2) return '#FAFAFA';
            return '#EC4899';
        }
    };

    useFrame((state, delta) => {
        // Animation de la goutte
        if (dropRef.current && isPouring) {
            const dropY = dropRef.current.position.y - delta * 4 * dropSpeed;
            if (dropY < -1.5) {
                dropRef.current.position.y = 0.5;
                setVolumeDelivered(prev => Math.min(20, prev + 0.3));
            } else {
                dropRef.current.position.y = dropY;
            }
        }

        // Changement de couleur du liquide
        if (liquidRef.current) {
            liquidRef.current.material.color.lerp(new THREE.Color(getColor()), 0.1);
        }

        // Animation de l'agitateur
        if (stirrerRef.current) {
            stirrerRef.current.rotation.y += delta * 3;
        }
    });

    const reset = () => {
        setVolumeDelivered(0);
        setIsPouring(false);
        if (dropRef.current) dropRef.current.position.y = 0.5;
    };

    return (
        <group>
            {/* Panneau de Contrôle */}
            <Html position={[-3.5, 1, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#10B981] font-bold mb-3 text-center">🧪 Dosage Acido-Basique</h3>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-xs mb-2">Indicateur Coloré</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => { setIndicator('bbt'); reset(); }}
                                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-colors ${indicator === 'bbt'
                                            ? 'bg-green-600'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                >
                                    🟡🟢🔵 BBT
                                </button>
                                <button
                                    onClick={() => { setIndicator('phenolphthalein'); reset(); }}
                                    className={`py-2 px-2 rounded-lg text-xs font-bold transition-colors ${indicator === 'phenolphthalein'
                                            ? 'bg-pink-600'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                >
                                    ⚪🩷 Phénol.
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs mb-1">Vitesse : {dropSpeed}x</label>
                            <input
                                type="range"
                                min="0.5"
                                max="3"
                                step="0.5"
                                value={dropSpeed}
                                onChange={(e) => setDropSpeed(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsPouring(!isPouring)}
                                className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${isPouring
                                        ? 'bg-red-600 animate-pulse'
                                        : 'bg-blue-600 hover:bg-blue-500'
                                    }`}
                            >
                                {isPouring ? '⏹ Stop' : '💧 Verser'}
                            </button>
                            <button
                                onClick={reset}
                                className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                            >
                                🔄
                            </button>
                        </div>

                        {/* Indicateurs de mesure */}
                        <div className="p-2 bg-white/10 rounded-lg">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Volume versé :</span>
                                <span className="font-bold">{volumeDelivered.toFixed(1)} mL</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all"
                                    style={{ width: `${(volumeDelivered / 20) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="p-2 bg-white/10 rounded-lg text-center">
                            <div className="text-xs text-gray-400">pH estimé</div>
                            <div className={`text-2xl font-bold ${getPH() < 7 ? 'text-yellow-400' :
                                    getPH() > 7 ? 'text-blue-400' : 'text-green-400'
                                }`}>
                                {getPH().toFixed(1)}
                            </div>
                            <div className="text-xs">
                                {volumeDelivered >= equivalencePoint - 0.5 && volumeDelivered <= equivalencePoint + 0.5
                                    ? '🎯 ÉQUIVALENCE !'
                                    : volumeDelivered < equivalencePoint ? 'Acide' : 'Basique'}
                            </div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">DOSAGE ACIDE-BASE (Titrage)</Text>

            {/* Burette (Haut) */}
            <group position={[0, 2.5, 0]}>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 3, 16]} />
                    <meshStandardMaterial color="#E5E7EB" transparent opacity={0.3} />
                </mesh>
                {/* Liquide Titrant */}
                <mesh position={[0, -0.3 - volumeDelivered * 0.05, 0]}>
                    <cylinderGeometry args={[0.18, 0.18, Math.max(0.1, 2 - volumeDelivered * 0.1), 16]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
                </mesh>
                <Text position={[0.8, 0, 0]} fontSize={0.25} color="#3B82F6">NaOH (Base)</Text>
            </group>

            {/* Robinet */}
            <mesh position={[0, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.1, 0.1, 0.6, 8]} />
                <meshStandardMaterial color={isPouring ? "#10B981" : "#4B5563"} />
            </mesh>

            {/* Goutte qui tombe */}
            {isPouring && (
                <mesh ref={dropRef} position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.1, 8, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
            )}

            {/* Bécher */}
            <group position={[0, -2, 0]}>
                <mesh>
                    <cylinderGeometry args={[1, 0.8, 2, 32]} />
                    <meshStandardMaterial color="#E5E7EB" transparent opacity={0.2} side={THREE.DoubleSide} />
                </mesh>

                {/* Liquide titré */}
                <mesh ref={liquidRef} position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.9, 0.75, 1, 32]} />
                    <meshStandardMaterial color="#FFFF00" transparent opacity={0.8} />
                </mesh>
                <Text position={[1.5, 0, 0]} fontSize={0.25} color={getColor()}>HCl (Acide)</Text>
            </group>

            {/* Agitateur Magnétique */}
            <group position={[0, -3.2, 0]}>
                <mesh>
                    <boxGeometry args={[2.5, 0.4, 2.5]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                {/* Barreau magnétique */}
                <mesh ref={stirrerRef} position={[0, -2.5 + 3.2, 0]}>
                    <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
            </group>

            {/* Légende Indicateur */}
            <group position={[3, -1, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.25} color="white">
                    {indicator === 'bbt' ? 'BBT' : 'Phénolphtaléine'}
                </Text>
                {indicator === 'bbt' ? (
                    <>
                        <group position={[0, 1, 0]}>
                            <mesh position={[-0.3, 0, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#FFFF00" /></mesh>
                            <Text position={[0.3, 0, 0]} fontSize={0.2} color="#FFFF00">pH &lt; 6</Text>
                        </group>
                        <group position={[0, 0.5, 0]}>
                            <mesh position={[-0.3, 0, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#10B981" /></mesh>
                            <Text position={[0.3, 0, 0]} fontSize={0.2} color="#10B981">≈ 7</Text>
                        </group>
                        <group position={[0, 0, 0]}>
                            <mesh position={[-0.3, 0, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#3B82F6" /></mesh>
                            <Text position={[0.3, 0, 0]} fontSize={0.2} color="#3B82F6">pH &gt; 7.6</Text>
                        </group>
                    </>
                ) : (
                    <>
                        <group position={[0, 1, 0]}>
                            <mesh position={[-0.3, 0, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#FAFAFA" /></mesh>
                            <Text position={[0.3, 0, 0]} fontSize={0.2} color="#9CA3AF">pH &lt; 8.2</Text>
                        </group>
                        <group position={[0, 0.5, 0]}>
                            <mesh position={[-0.3, 0, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#EC4899" /></mesh>
                            <Text position={[0.3, 0, 0]} fontSize={0.2} color="#EC4899">pH &gt; 8.2</Text>
                        </group>
                    </>
                )}
            </group>
        </group>
    );
}
