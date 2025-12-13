import { Text, Html } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { useState } from 'react';

// ============================================================
// LENTILLES OPTIQUES - PC 3e
// Simulation des lentilles convergentes et divergentes
// Panneau de contrôle draggable et minimisable
// ============================================================

export function LensOptics() {
    const [lensType, setLensType] = useState('convergent');
    const [focalLength, setFocalLength] = useState(2);
    const [objectDistance, setObjectDistance] = useState(4);
    const [showRays, setShowRays] = useState(true);

    // Calcul de l'image (formule des lentilles: 1/f = 1/p' - 1/p)
    const imageDistance = (focalLength * objectDistance) / (objectDistance - focalLength);
    const magnification = lensType === 'convergent'
        ? -imageDistance / objectDistance
        : imageDistance / objectDistance;

    const isRealImage = lensType === 'convergent' && objectDistance > focalLength;

    return (
        <>
            {/* Panneau de Contrôle - Wrappé dans Html pour compatibilité R3F mais rendu via Portal dans Body */}
            <Html>
                <DraggableHtmlPanel title="🔍 Lentilles et Optique" className="min-w-[280px] text-white" showCloseButton={false} defaultPosition="bottom-center">
                    <div className="space-y-3">
                        {/* Type de Lentille */}
                        <div>
                            <label className="block text-xs text-gray-300 mb-2">Type de Lentille</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setLensType('convergent')}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${lensType === 'convergent'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                        }`}
                                >
                                    🔮 Convergente
                                </button>
                                <button
                                    onClick={() => setLensType('divergent')}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${lensType === 'divergent'
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                        }`}
                                >
                                    🔻 Divergente
                                </button>
                            </div>
                        </div>

                        {/* Distance Focale */}
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-300">Distance Focale f</span>
                                <span className="text-[#60A5FA] font-mono">{focalLength} cm</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="4"
                                step="0.5"
                                value={focalLength}
                                onChange={(e) => setFocalLength(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#60A5FA]"
                            />
                        </div>

                        {/* Distance Objet */}
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-300">Distance Objet p</span>
                                <span className="text-[#FCD34D] font-mono">{objectDistance} cm</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="8"
                                step="0.5"
                                value={objectDistance}
                                onChange={(e) => setObjectDistance(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FCD34D]"
                            />
                        </div>

                        {/* Toggle Rayons */}
                        <button
                            onClick={() => setShowRays(!showRays)}
                            className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${showRays ? 'bg-yellow-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                        >
                            💡 {showRays ? 'Masquer Rayons' : 'Afficher Rayons'}
                        </button>

                        {/* Informations calculées */}
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            <h4 className="text-xs font-bold text-[#00F5D4] mb-2">📊 Résultats</h4>
                            <div className="space-y-1.5 text-xs font-mono">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Image :</span>
                                    <span className={isRealImage ? 'text-green-400' : 'text-purple-400'}>
                                        {isRealImage ? 'Réelle' : 'Virtuelle'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Grandissement :</span>
                                    <span className="text-white">{Math.abs(magnification).toFixed(2)}x</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Sens :</span>
                                    <span className="text-white">{magnification < 0 ? 'Inversée' : 'Droite'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Formules */}
                        <div className="text-xs text-center text-gray-400 bg-black/30 rounded-lg py-2">
                            1/f = 1/p&apos; - 1/p
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Scène 3D */}
            <group>
                <Text position={[0, 3, 0]} fontSize={0.5} color="white">
                    LENTILLE {lensType === 'convergent' ? 'CONVERGENTE' : 'DIVERGENTE'}
                </Text>

                {/* Axe optique */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 12, 8]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>

                {/* Lentille au centre */}
                <group>
                    {lensType === 'convergent' ? (
                        // Lentille biconvexe (convergente)
                        <>
                            <mesh>
                                <torusGeometry args={[1, 0.1, 16, 32, Math.PI]} />
                                <meshStandardMaterial color="#60A5FA" transparent opacity={0.6} />
                            </mesh>
                            <mesh rotation={[0, 0, Math.PI]}>
                                <torusGeometry args={[1, 0.1, 16, 32, Math.PI]} />
                                <meshStandardMaterial color="#60A5FA" transparent opacity={0.6} />
                            </mesh>
                        </>
                    ) : (
                        // Lentille biconcave (divergente)
                        <>
                            <mesh rotation={[0, 0, Math.PI / 2]}>
                                <torusGeometry args={[1, 0.1, 16, 32, Math.PI]} />
                                <meshStandardMaterial color="#FCA5A5" transparent opacity={0.6} />
                            </mesh>
                            <mesh rotation={[0, 0, -Math.PI / 2]}>
                                <torusGeometry args={[1, 0.1, 16, 32, Math.PI]} />
                                <meshStandardMaterial color="#FCA5A5" transparent opacity={0.6} />
                            </mesh>
                        </>
                    )}
                </group>

                {/* Foyers */}
                <mesh position={[focalLength, 0, 0]}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.8} />
                </mesh>
                <Text position={[focalLength, -0.4, 0]} fontSize={0.25} color="#EF4444">F</Text>

                <mesh position={[-focalLength, 0, 0]}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.8} />
                </mesh>
                <Text position={[-focalLength, -0.4, 0]} fontSize={0.25} color="#EF4444">F&apos;</Text>

                {/* Objet (Flèche) */}
                <group position={[-objectDistance, 0, 0]}>
                    <mesh position={[0, 0.5, 0]}>
                        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
                        <meshStandardMaterial color="#10B981" />
                    </mesh>
                    <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI]}>
                        <coneGeometry args={[0.15, 0.3, 8]} />
                        <meshStandardMaterial color="#10B981" />
                    </mesh>
                    <Text position={[0, -0.5, 0]} fontSize={0.2} color="#10B981">Objet</Text>
                </group>

                {/* Image */}
                {
                    isRealImage ? (
                        <group position={[Math.abs(imageDistance), 0, 0]}>
                            <mesh position={[0, Math.abs(magnification) * 0.5, 0]}>
                                <cylinderGeometry args={[0.05, 0.05, Math.abs(magnification), 8]} />
                                <meshStandardMaterial color="#8B5CF6" />
                            </mesh>
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                                <coneGeometry args={[0.12, 0.25, 8]} />
                                <meshStandardMaterial color="#8B5CF6" />
                            </mesh>
                            <Text position={[0, -0.5, 0]} fontSize={0.2} color="#8B5CF6">Image (Réelle)</Text>
                        </group>
                    ) : (
                        <group position={[-Math.abs(imageDistance || 2), 0, 0]}>
                            <mesh position={[0, Math.abs(magnification || 0.5) * 0.5, 0]}>
                                <cylinderGeometry args={[0.04, 0.04, Math.abs(magnification || 0.5), 8]} />
                                <meshStandardMaterial color="#A78BFA" transparent opacity={0.5} />
                            </mesh>
                            <Text position={[0, -0.5, 0]} fontSize={0.2} color="#A78BFA">Image (Virtuelle)</Text>
                        </group>
                    )
                }

                {/* Rayons lumineux */}
                {
                    showRays && (
                        <group>
                            {/* Rayon passant par le centre (non dévié) */}
                            <mesh position={[-objectDistance / 2, 0.5, 0]} rotation={[0, 0, Math.atan(1 / objectDistance) + Math.PI / 2]}>
                                <cylinderGeometry args={[0.02, 0.02, objectDistance * 1.5, 8]} />
                                <meshStandardMaterial color="#FCD34D" />
                            </mesh>

                            {/* Rayon parallèle à l'axe → passe par F */}
                            <mesh position={[-objectDistance / 2, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.02, 0.02, objectDistance, 8]} />
                                <meshStandardMaterial color="#FCD34D" />
                            </mesh>
                        </group>
                    )
                }

                {/* Légende */}
                <Text position={[0, -2.5, 0]} fontSize={0.25} color="white">
                    {lensType === 'convergent' ? 'Corrige l\'Hypermétropie' : 'Corrige la Myopie'}
                </Text>
            </group>
        </>
    );
}
