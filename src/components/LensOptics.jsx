import { Text, Html } from '@react-three/drei';
import { useState } from 'react';

// Composant Lentilles Optiques - INTERACTIF
// Utilise Html de drei pour créer un overlay HTML dans la scène 3D
export function LensOptics() {
    const [lensType, setLensType] = useState('convergent'); // convergent, divergent
    const [focalLength, setFocalLength] = useState(2);
    const [objectDistance, setObjectDistance] = useState(4);
    const [showRays, setShowRays] = useState(true);
    const [isPanelVisible, setIsPanelVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);

    // Calcul de l'image (formule des lentilles: 1/f = 1/p' - 1/p)
    const imageDistance = (focalLength * objectDistance) / (objectDistance - focalLength);
    const magnification = lensType === 'convergent'
        ? -imageDistance / objectDistance
        : imageDistance / objectDistance;

    const isRealImage = lensType === 'convergent' && objectDistance > focalLength;

    return (
        <group>
            {/* Panneau de Contrôle HTML - Utilise Html de drei */}
            {isPanelVisible && (
                <Html
                    position={[-6, 3, 0]}
                    distanceFactor={10}
                    transform
                    occlude={false}
                    style={{
                        pointerEvents: 'auto'
                    }}
                >
                    <div
                        className="bg-black/95 backdrop-blur-xl rounded-xl border border-white/30 shadow-2xl overflow-hidden text-white"
                        style={{
                            width: isMinimized ? '180px' : '280px',
                            pointerEvents: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-[#00F5D4]/30 to-purple-500/30 border-b border-white/20">
                            <span className="text-sm font-bold text-[#00F5D4] flex items-center gap-1.5">
                                🔍 Lentilles
                            </span>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs transition-all"
                                >
                                    {isMinimized ? '□' : '_'}
                                </button>
                                <button
                                    onClick={() => setIsPanelVisible(false)}
                                    className="w-6 h-6 rounded bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center text-xs text-red-400 transition-all"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        {!isMinimized && (
                            <div className="p-3 space-y-3">
                                <div>
                                    <label className="block text-xs mb-2">Type de Lentille</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setLensType('convergent')}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${lensType === 'convergent'
                                                ? 'bg-blue-600'
                                                : 'bg-gray-700 hover:bg-gray-600'
                                                }`}
                                        >
                                            🔮 Conv.
                                        </button>
                                        <button
                                            onClick={() => setLensType('divergent')}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors ${lensType === 'divergent'
                                                ? 'bg-red-600'
                                                : 'bg-gray-700 hover:bg-gray-600'
                                                }`}
                                        >
                                            🔻 Div.
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs mb-1">Focale f : {focalLength} cm</label>
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

                                <div>
                                    <label className="block text-xs mb-1">Objet p : {objectDistance} cm</label>
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

                                <button
                                    onClick={() => setShowRays(!showRays)}
                                    className={`w-full py-2 rounded-lg font-bold text-xs transition-colors ${showRays ? 'bg-yellow-600' : 'bg-gray-700'}`}
                                >
                                    {showRays ? '💡 Masquer Rayons' : '💡 Afficher Rayons'}
                                </button>

                                {/* Info sur l'image */}
                                <div className="p-2 bg-white/10 rounded-lg text-xs font-mono space-y-1">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Image :</span>
                                        <span className={isRealImage ? 'text-green-400' : 'text-purple-400'}>
                                            {isRealImage ? 'Réelle' : 'Virtuelle'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Grossissement :</span>
                                        <span>{Math.abs(magnification).toFixed(2)}x</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Sens :</span>
                                        <span>{magnification < 0 ? 'Inversée' : 'Droite'}</span>
                                    </div>
                                </div>

                                <div className="text-xs text-center text-gray-400">
                                    1/f = 1/p&apos; - 1/p
                                </div>
                            </div>
                        )}
                    </div>
                </Html>
            )}

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
    );
}
