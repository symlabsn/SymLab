import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MolarConcentration() {
    const [soluteMoles, setSoluteMoles] = useState(0.5); // Mol
    const [volume, setVolume] = useState(1.0);     // Litres
    const [soluteColor, setSoluteColor] = useState('#EF4444'); // Rouge (KMnO4 par ex)

    // Calcul concentration C = n / V
    const concentration = soluteMoles / volume;

    // Rendu visuel
    const liquidHeight = volume * 1.5; // Echelle visuelle
    // Opacité/Intensité couleur dépend de la concentration
    // C max ~ 2.0 mol/L -> Opacité 1
    const colorIntensity = Math.min(1, concentration / 1.5);

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🧪 Concentration Molaire</h3>

                    <div className="space-y-4">
                        {/* Soluté (n) */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Poudre (Soluté) : {soluteMoles.toFixed(2)} mol
                            </label>
                            <input
                                type="range"
                                min="0.1"
                                max="2.0"
                                step="0.1"
                                value={soluteMoles}
                                onChange={(e) => setSoluteMoles(parseFloat(e.target.value))}
                                className="w-full accent-red-500"
                            />
                        </div>

                        {/* Volume (V) */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Eau (Solvant) : {volume.toFixed(1)} L
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="2.0"
                                step="0.1"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className="w-full accent-blue-500"
                            />
                        </div>

                        {/* Choix couleur */}
                        <div className="flex justify-center gap-2">
                            {['#EF4444', '#3B82F6', '#EAB308', '#A855F7'].map(c => (
                                <button
                                    key={c}
                                    onClick={() => setSoluteColor(c)}
                                    className={`w-6 h-6 rounded-full border-2 ${soluteColor === c ? 'border-white' : 'border-transparent'}`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                        </div>

                        {/* Résultat Calcul */}
                        <div className="p-3 bg-gray-800 rounded text-center border border-gray-600">
                            <div className="text-xs text-gray-400">Concentration C</div>
                            <div className="text-2xl font-bold text-white">
                                {concentration.toFixed(2)} <span className="text-sm">mol/L</span>
                            </div>
                            <div className="text-[10px] bg-black/30 rounded mt-1 font-mono text-gray-300">
                                C = n / V = {soluteMoles} / {volume}
                            </div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                DILUTION & CONCENTRATION
            </Text>

            {/* Bécher Gradué */}
            <group position={[1.5, -1.5, 0]}>
                <mesh position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[1.5, 1.5, 3.2, 32, 1, true]} />
                    <meshStandardMaterial color="#A5B4FC" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Fond */}
                <mesh position={[0, -0.09, 0]}>
                    <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
                    <meshStandardMaterial color="#A5B4FC" transparent opacity={0.3} />
                </mesh>

                {/* Liquide coloré */}
                <mesh position={[0, liquidHeight / 2, 0]}>
                    <cylinderGeometry args={[1.45, 1.45, liquidHeight, 32]} />
                    <meshStandardMaterial
                        color={soluteColor}
                        transparent
                        opacity={0.1 + colorIntensity * 0.8}
                        roughness={0.1}
                        metalness={0.1}
                    />
                </mesh>

                {/* Graduations */}
                {[0.5, 1.0, 1.5, 2.0].map((val) => (
                    <group key={val} position={[1.52, val * 1.5, 0]}>
                        <mesh>
                            <boxGeometry args={[0.2, 0.05, 0.01]} />
                            <meshStandardMaterial color="white" />
                        </mesh>
                        <Text position={[0.4, 0, 0]} fontSize={0.2} color="white">
                            {val} L
                        </Text>
                    </group>
                ))}
            </group>
        </group>
    );
}
