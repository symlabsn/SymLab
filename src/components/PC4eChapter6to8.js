'use client';
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

// ============================================================
// CHAPITRE 6: SOURCES ET RÉCEPTEURS DE LUMIÈRE
// ============================================================
export function Chap6SourcesLumiere() {
    const [sunOn, setSunOn] = useState(true);
    const [lampOn, setLampOn] = useState(false);
    const [showSecondary, setShowSecondary] = useState(true);
    const moonRef = useRef();
    const bookRef = useRef();

    useFrame(({ clock }) => {
        if (moonRef.current) {
            moonRef.current.rotation.y = clock.elapsedTime * 0.2;
        }
        if (bookRef.current) {
            bookRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.1;
        }
    });

    const primaryActive = sunOn || lampOn;

    return (
        <group>
            <Html position={[4.5, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-yellow-500/30 w-[320px]">
                    <h3 className="text-yellow-400 font-bold text-lg mb-3">💡 Sources de Lumière</h3>

                    <div className="mb-4">
                        <div className="text-xs text-gray-400 mb-2">SOURCES PRIMAIRES (produisent la lumière)</div>
                        <div className="flex gap-2">
                            <button onClick={() => setSunOn(!sunOn)}
                                className={`flex-1 p-3 rounded-lg ${sunOn ? 'bg-yellow-600' : 'bg-gray-800'}`}>
                                <div className="text-2xl">☀️</div>
                                <div className="text-xs">Soleil</div>
                            </button>
                            <button onClick={() => setLampOn(!lampOn)}
                                className={`flex-1 p-3 rounded-lg ${lampOn ? 'bg-orange-600' : 'bg-gray-800'}`}>
                                <div className="text-2xl">💡</div>
                                <div className="text-xs">Lampe</div>
                            </button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="text-xs text-gray-400 mb-2">SOURCES SECONDAIRES (réfléchissent la lumière)</div>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" checked={showSecondary} onChange={e => setShowSecondary(e.target.checked)}
                                className="w-4 h-4 accent-blue-500" />
                            <span className="text-sm">Afficher les objets éclairés</span>
                        </label>
                    </div>

                    <div className={`p-3 rounded-lg text-center ${primaryActive ? 'bg-yellow-900/30' : 'bg-gray-900'}`}>
                        <div className="text-sm">
                            {primaryActive
                                ? "🌟 Les sources primaires éclairent les objets qui deviennent visibles !"
                                : "🌑 Sans source primaire, tout est dans l'obscurité..."}
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.4} color="#FBBF24">SOURCES DE LUMIÈRE</Text>

            {/* Soleil */}
            <group position={[-2.5, 1.5, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color={sunOn ? "#FCD34D" : "#4B5563"}
                        emissive={sunOn ? "#FCD34D" : "#000"} emissiveIntensity={sunOn ? 2 : 0} />
                </mesh>
                {sunOn && <pointLight intensity={3} color="#FCD34D" distance={10} />}
                <Text position={[0, -0.9, 0]} fontSize={0.15} color={sunOn ? "#FCD34D" : "#6B7280"}>Soleil</Text>
                <Text position={[0, -1.2, 0]} fontSize={0.1} color="#10B981">Source Primaire</Text>
            </group>

            {/* Lampe */}
            <group position={[2.5, 1.5, 0]}>
                <mesh>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color={lampOn ? "#F59E0B" : "#4B5563"}
                        emissive={lampOn ? "#F59E0B" : "#000"} emissiveIntensity={lampOn ? 1.5 : 0} />
                </mesh>
                <mesh position={[0, -0.4, 0]}>
                    <cylinderGeometry args={[0.15, 0.25, 0.3]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
                {lampOn && <pointLight intensity={2} color="#F59E0B" distance={8} />}
                <Text position={[0, -0.9, 0]} fontSize={0.15} color={lampOn ? "#F59E0B" : "#6B7280"}>Lampe</Text>
                <Text position={[0, -1.2, 0]} fontSize={0.1} color="#10B981">Source Primaire</Text>
            </group>

            {/* Lune (source secondaire) */}
            {showSecondary && (
                <group position={[-1, -0.5, 0]} ref={moonRef}>
                    <mesh>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color={primaryActive ? "#E5E7EB" : "#1F2937"} />
                    </mesh>
                    <Text position={[0, -0.8, 0]} fontSize={0.15} color={primaryActive ? "#9CA3AF" : "#4B5563"}>Lune</Text>
                    <Text position={[0, -1.1, 0]} fontSize={0.1} color="#3B82F6">Source Secondaire</Text>
                </group>
            )}

            {/* Livre (source secondaire) */}
            {showSecondary && (
                <group position={[1.2, -0.5, 0]} ref={bookRef}>
                    <mesh>
                        <boxGeometry args={[0.6, 0.8, 0.1]} />
                        <meshStandardMaterial color={primaryActive ? "#EF4444" : "#1F2937"} />
                    </mesh>
                    <Text position={[0, -0.7, 0]} fontSize={0.15} color={primaryActive ? "#EF4444" : "#4B5563"}>Livre</Text>
                    <Text position={[0, -1, 0]} fontSize={0.1} color="#3B82F6">Source Secondaire</Text>
                </group>
            )}

            <Text position={[0, -2.2, 0]} fontSize={0.15} color="#9CA3AF">
                {primaryActive ? "Les objets réfléchissent la lumière → on les voit !" : "Sans lumière, rien n'est visible"}
            </Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 7: PROPAGATION RECTILIGNE DE LA LUMIÈRE
// ============================================================
export function Chap7PropagationLumiere() {
    const [lightOn, setLightOn] = useState(true);
    const [obstacle, setObstacle] = useState('none');
    const [showRays, setShowRays] = useState(true);
    const raysRef = useRef([]);

    const obstacles = {
        none: { name: 'Aucun', icon: '✨' },
        opaque: { name: 'Opaque', icon: '🧱', color: '#78716C' },
        transparent: { name: 'Transparent', icon: '🪟', color: '#60A5FA', opacity: 0.3 },
        translucent: { name: 'Translucide', icon: '🧊', color: '#FEF3C7', opacity: 0.6 }
    };

    useFrame(({ clock }) => {
        raysRef.current.forEach((ray, i) => {
            if (ray && lightOn) {
                ray.material.opacity = 0.5 + Math.sin(clock.elapsedTime * 3 + i) * 0.3;
            }
        });
    });

    const shadowVisible = lightOn && obstacle === 'opaque';

    return (
        <group>
            <Html position={[4.5, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-cyan-500/30 w-[320px]">
                    <h3 className="text-cyan-400 font-bold text-lg mb-3">➡️ Propagation de la Lumière</h3>

                    <button onClick={() => setLightOn(!lightOn)}
                        className={`w-full py-3 rounded-lg font-bold mb-4 ${lightOn ? 'bg-yellow-600' : 'bg-gray-700'}`}>
                        {lightOn ? '💡 Éteindre' : '🔦 Allumer'}
                    </button>

                    <div className="text-xs text-gray-400 mb-2">TYPE D'OBSTACLE</div>
                    <div className="grid grid-cols-4 gap-1 mb-4">
                        {Object.entries(obstacles).map(([k, o]) => (
                            <button key={k} onClick={() => setObstacle(k)}
                                className={`p-2 rounded text-center ${obstacle === k ? 'ring-2 ring-cyan-400' : 'bg-gray-800'}`}>
                                <div className="text-xl">{o.icon}</div>
                                <div className="text-[8px]">{o.name}</div>
                            </button>
                        ))}
                    </div>

                    <label className="flex items-center gap-2 mb-4">
                        <input type="checkbox" checked={showRays} onChange={e => setShowRays(e.target.checked)}
                            className="w-4 h-4 accent-cyan-500" />
                        <span className="text-sm">Voir les rayons lumineux</span>
                    </label>

                    <div className="bg-gray-900 p-3 rounded-lg text-sm">
                        <div className="font-bold text-cyan-400 mb-1">Principe:</div>
                        <div>La lumière se propage en LIGNE DROITE dans un milieu homogène.</div>
                        {shadowVisible && <div className="mt-2 text-orange-400">→ L'obstacle opaque crée une ombre !</div>}
                    </div>
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.4} color="#22D3EE">PROPAGATION RECTILIGNE</Text>

            {/* Source lumineuse */}
            <group position={[-3, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.3, 0.2, 0.6]} />
                    <meshStandardMaterial color={lightOn ? "#FCD34D" : "#4B5563"}
                        emissive={lightOn ? "#FCD34D" : "#000"} emissiveIntensity={lightOn ? 1 : 0} />
                </mesh>
                {lightOn && <pointLight intensity={2} color="#FCD34D" distance={8} />}
                <Text position={[0, 0.6, 0]} fontSize={0.15} color="#FCD34D">Lampe</Text>
            </group>

            {/* Rayons lumineux */}
            {showRays && lightOn && Array.from({ length: 5 }).map((_, i) => {
                const angle = (i - 2) * 0.15;
                const blocked = obstacle === 'opaque';
                const length = blocked ? 2.5 : 5;
                return (
                    <mesh key={i} ref={el => raysRef.current[i] = el}
                        position={[-2.5 + length / 2, Math.sin(angle) * 0.5, 0]}
                        rotation={[0, 0, angle]}>
                        <cylinderGeometry args={[0.02, 0.02, length]} />
                        <meshStandardMaterial color="#FBBF24" transparent opacity={0.7}
                            emissive="#FBBF24" emissiveIntensity={0.5} />
                    </mesh>
                );
            })}

            {/* Obstacle */}
            {obstacle !== 'none' && (
                <group position={[0, 0, 0]}>
                    <mesh>
                        <boxGeometry args={[0.3, 2, 1]} />
                        <meshStandardMaterial
                            color={obstacles[obstacle].color || '#78716C'}
                            transparent
                            opacity={obstacles[obstacle].opacity || 1} />
                    </mesh>
                    <Text position={[0, 1.3, 0]} fontSize={0.15} color="#9CA3AF">{obstacles[obstacle].name}</Text>
                </group>
            )}

            {/* Écran */}
            <group position={[3, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.1, 2.5, 1.5]} />
                    <meshStandardMaterial color="#E5E7EB" />
                </mesh>
                {/* Ombre */}
                {shadowVisible && (
                    <mesh position={[-0.1, 0, 0]}>
                        <boxGeometry args={[0.02, 1.8, 0.8]} />
                        <meshStandardMaterial color="#1F2937" />
                    </mesh>
                )}
                <Text position={[0.2, 1.5, 0]} fontSize={0.15} color="#6B7280">Écran</Text>
            </group>

            <Text position={[0, -2, 0]} fontSize={0.15} color="#9CA3AF">
                La lumière voyage à 300 000 km/s en ligne droite !
            </Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 8: RÉFRACTION DE LA LUMIÈRE
// ============================================================
export function Chap8Refraction() {
    const [medium, setMedium] = useState('water');
    const [angle, setAngle] = useState(45);
    const stickRef = useRef();

    const mediums = {
        air: { name: 'Air', n: 1.0, color: '#E0F2FE', icon: '💨' },
        water: { name: 'Eau', n: 1.33, color: '#3B82F6', icon: '💧' },
        glass: { name: 'Verre', n: 1.5, color: '#A5B4FC', icon: '🪟' },
        diamond: { name: 'Diamant', n: 2.42, color: '#67E8F9', icon: '💎' }
    };

    const med = mediums[medium];
    const refractionAngle = Math.asin(Math.sin(angle * Math.PI / 180) / med.n) * 180 / Math.PI;
    const deviation = angle - refractionAngle;

    useFrame(({ clock }) => {
        if (stickRef.current) {
            stickRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.05;
        }
    });

    return (
        <group>
            <Html position={[4.5, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-blue-500/30 w-[320px]">
                    <h3 className="text-blue-400 font-bold text-lg mb-3">🌈 Réfraction de la Lumière</h3>

                    <div className="text-xs text-gray-400 mb-2">MILIEU TRANSPARENT</div>
                    <div className="grid grid-cols-4 gap-1 mb-4">
                        {Object.entries(mediums).map(([k, m]) => (
                            <button key={k} onClick={() => setMedium(k)}
                                className={`p-2 rounded text-center ${medium === k ? 'ring-2 ring-blue-400' : 'bg-gray-800'}`}>
                                <div className="text-xl">{m.icon}</div>
                                <div className="text-[8px]">{m.name}</div>
                            </button>
                        ))}
                    </div>

                    <label className="block text-sm mb-1">Angle d'incidence: {angle}°</label>
                    <input type="range" min="10" max="80" value={angle} onChange={e => setAngle(+e.target.value)}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-blue-500 mb-4" />

                    <div className="bg-gray-900 p-3 rounded-lg space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Indice n ({med.name}):</span>
                            <span className="font-bold">{med.n}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Angle incident:</span>
                            <span className="text-yellow-400">{angle}°</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Angle réfracté:</span>
                            <span className="text-blue-400">{refractionAngle.toFixed(1)}°</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-700 pt-2">
                            <span className="text-gray-400">Déviation:</span>
                            <span className="text-green-400">{deviation.toFixed(1)}°</span>
                        </div>
                    </div>

                    <div className="mt-3 p-2 bg-blue-900/20 rounded text-xs text-center">
                        <strong>Loi de Snell:</strong> n₁ sin(i₁) = n₂ sin(i₂)
                    </div>
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.4} color="#3B82F6">RÉFRACTION DE LA LUMIÈRE</Text>

            {/* Surface de l'eau / milieu */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4, 0.05, 2]} />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>

            {/* Air (au-dessus) */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[4, 2, 2]} />
                <meshStandardMaterial color="#E0F2FE" transparent opacity={0.1} />
            </mesh>
            <Text position={[-1.8, 1.5, 0]} fontSize={0.15} color="#9CA3AF">Air (n=1)</Text>

            {/* Milieu (en-dessous) */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[4, 2, 2]} />
                <meshStandardMaterial color={med.color} transparent opacity={0.4} />
            </mesh>
            <Text position={[-1.8, -1.5, 0]} fontSize={0.15} color={med.color}>{med.name} (n={med.n})</Text>

            {/* Rayon incident */}
            <mesh position={[-0.8, 0.8, 0]} rotation={[0, 0, -(90 - angle) * Math.PI / 180]}>
                <cylinderGeometry args={[0.03, 0.03, 2]} />
                <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={0.5} />
            </mesh>

            {/* Rayon réfracté */}
            <mesh position={[0.6 * Math.tan(refractionAngle * Math.PI / 180), -0.8, 0]}
                rotation={[0, 0, (90 - refractionAngle) * Math.PI / 180]}>
                <cylinderGeometry args={[0.03, 0.03, 2]} />
                <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={0.5} />
            </mesh>

            {/* Bâton dans l'eau (effet visuel) */}
            <group ref={stickRef} position={[1.5, 0, 0]}>
                {/* Partie dans l'air */}
                <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0.2]}>
                    <cylinderGeometry args={[0.05, 0.05, 1.5]} />
                    <meshStandardMaterial color="#92400E" />
                </mesh>
                {/* Partie dans l'eau (décalée) */}
                <mesh position={[0.15, -0.6, 0]} rotation={[0, 0, 0.35]}>
                    <cylinderGeometry args={[0.05, 0.05, 1]} />
                    <meshStandardMaterial color="#92400E" />
                </mesh>
            </group>
            <Text position={[1.5, 1.7, 0]} fontSize={0.12} color="#92400E">Le bâton semble "cassé" !</Text>

            {/* Normale */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 3]} />
                <meshStandardMaterial color="#9CA3AF" />
            </mesh>
            <Text position={[0.3, 1.3, 0]} fontSize={0.1} color="#6B7280">Normale</Text>

            <Text position={[0, -2.3, 0]} fontSize={0.15} color="#9CA3AF">
                La lumière change de direction en changeant de milieu !
            </Text>
        </group>
    );
}
