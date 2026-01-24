import { Text } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RefractionLight() {
    const [incidentAngle, setIncidentAngle] = useState(45);
    const [medium1, setMedium1] = useState('air');
    const [medium2, setMedium2] = useState('water');
    const [showNormal, setShowNormal] = useState(true);

    const rayRef = useRef();

    const MEDIA = {
        air: { n: 1.0, color: '#E0F2FE', name: 'Air' },
        water: { n: 1.33, color: '#3B82F6', name: 'Eau' },
        glass: { n: 1.5, color: '#A5B4FC', name: 'Verre' },
        diamond: { n: 2.42, color: '#F0ABFC', name: 'Diamant' }
    };

    // Calcul de l'angle de réfraction (Snell-Descartes)
    const refractedAngle = useMemo(() => {
        const n1 = MEDIA[medium1].n;
        const n2 = MEDIA[medium2].n;
        const theta1 = (incidentAngle * Math.PI) / 180;

        const sinTheta2 = (n1 * Math.sin(theta1)) / n2;

        // Réflexion totale si sin > 1
        if (Math.abs(sinTheta2) > 1) return null;

        return (Math.asin(sinTheta2) * 180) / Math.PI;
    }, [incidentAngle, medium1, medium2]);

    // Animation du rayon lumineux
    useFrame((state) => {
        if (rayRef.current) {
            rayRef.current.material.opacity = 0.7 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
        }
    });

    return (
        <>
            {/* Panneau de contrôle - Rendu via portail */}
            <DraggableHtmlPanel title="🔦 Réfraction de la Lumière" className="min-w-[280px] border-white/20 text-white">

                <div className="space-y-3">
                    {/* Milieu 1 */}
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Milieu incident (n₁)</label>
                        <select
                            value={medium1}
                            onChange={(e) => setMedium1(e.target.value)}
                            className="w-full p-2 bg-gray-800 rounded text-sm"
                        >
                            {Object.entries(MEDIA).map(([key, val]) => (
                                <option key={key} value={key}>{val.name} (n={val.n})</option>
                            ))}
                        </select>
                    </div>

                    {/* Milieu 2 */}
                    <div>
                        <label className="block text-xs text-gray-400 mb-1">Milieu réfringent (n₂)</label>
                        <select
                            value={medium2}
                            onChange={(e) => setMedium2(e.target.value)}
                            className="w-full p-2 bg-gray-800 rounded text-sm"
                        >
                            {Object.entries(MEDIA).map(([key, val]) => (
                                <option key={key} value={key}>{val.name} (n={val.n})</option>
                            ))}
                        </select>
                    </div>

                    {/* Angle incident */}
                    <div>
                        <label className="block text-xs text-gray-400">
                            Angle d'incidence: {incidentAngle}°
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="85"
                            value={incidentAngle}
                            onChange={(e) => setIncidentAngle(parseInt(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    {/* Résultat */}
                    <div className="p-3 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded">
                        {refractedAngle !== null ? (
                            <>
                                <div className="text-center mb-2">
                                    <span className="text-xs text-gray-400">Angle de réfraction:</span>
                                    <div className="text-2xl font-bold text-cyan-400">{refractedAngle.toFixed(1)}°</div>
                                </div>
                                <div className="text-xs text-center text-gray-400 font-mono">
                                    n₁·sin(i₁) = n₂·sin(i₂)
                                </div>
                            </>
                        ) : (
                            <div className="text-center text-red-400 font-bold">
                                ⚠️ RÉFLEXION TOTALE
                                <div className="text-xs text-gray-400">L&apos;angle critique est dépassé</div>
                            </div>
                        )}
                    </div>

                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={showNormal}
                            onChange={(e) => setShowNormal(e.target.checked)}
                        />
                        Afficher la normale
                    </label>
                </div>
            </DraggableHtmlPanel>

            <group>

                <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                    LOI DE SNELL-DESCARTES
                </Text>

                {/* Milieu 1 (haut) */}
                <mesh position={[1.5, 1.5, 0]}>
                    <boxGeometry args={[6, 3, 0.5]} />
                    <meshStandardMaterial color={MEDIA[medium1].color} transparent opacity={0.3} />
                </mesh>
                <Text position={[4, 2.5, 0.3]} fontSize={0.25} color="white">
                    {MEDIA[medium1].name} (n={MEDIA[medium1].n})
                </Text>

                {/* Milieu 2 (bas) */}
                <mesh position={[1.5, -1.5, 0]}>
                    <boxGeometry args={[6, 3, 0.5]} />
                    <meshStandardMaterial color={MEDIA[medium2].color} transparent opacity={0.5} />
                </mesh>
                <Text position={[4, -2.5, 0.3]} fontSize={0.25} color="white">
                    {MEDIA[medium2].name} (n={MEDIA[medium2].n})
                </Text>

                {/* Interface (surface de séparation) */}
                <mesh position={[1.5, 0, 0.26]}>
                    <planeGeometry args={[6, 0.05]} />
                    <meshStandardMaterial color="white" />
                </mesh>

                {/* Normale (pointillés) */}
                {showNormal && (
                    <mesh position={[1.5, 0, 0.27]}>
                        <planeGeometry args={[0.02, 5]} />
                        <meshStandardMaterial color="#9CA3AF" />
                    </mesh>
                )}

                {/* Rayon incident */}
                <group position={[1.5, 0, 0.3]}>
                    <mesh
                        ref={rayRef}
                        position={[
                            -Math.sin((incidentAngle * Math.PI) / 180) * 1.5,
                            Math.cos((incidentAngle * Math.PI) / 180) * 1.5,
                            0
                        ]}
                        rotation={[0, 0, -(incidentAngle * Math.PI) / 180]}
                    >
                        <boxGeometry args={[0.08, 3, 0.02]} />
                        <meshStandardMaterial
                            color="#FBBF24"
                            emissive="#FBBF24"
                            emissiveIntensity={1}
                            transparent
                        />
                    </mesh>

                    {/* Flèche incidente */}
                    <mesh
                        position={[
                            -Math.sin((incidentAngle * Math.PI) / 180) * 0.3,
                            Math.cos((incidentAngle * Math.PI) / 180) * 0.3,
                            0
                        ]}
                        rotation={[0, 0, Math.PI - (incidentAngle * Math.PI) / 180]}
                    >
                        <coneGeometry args={[0.1, 0.2, 8]} />
                        <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={0.8} />
                    </mesh>
                </group>

                {/* Rayon réfracté */}
                {refractedAngle !== null && (
                    <group position={[1.5, 0, 0.3]}>
                        <mesh
                            position={[
                                Math.sin((refractedAngle * Math.PI) / 180) * 1.5,
                                -Math.cos((refractedAngle * Math.PI) / 180) * 1.5,
                                0
                            ]}
                            rotation={[0, 0, (refractedAngle * Math.PI) / 180]}
                        >
                            <boxGeometry args={[0.08, 3, 0.02]} />
                            <meshStandardMaterial
                                color="#3B82F6"
                                emissive="#3B82F6"
                                emissiveIntensity={0.8}
                                transparent
                                opacity={0.9}
                            />
                        </mesh>
                    </group>
                )}

                {/* Rayon réfléchi (si réflexion totale) */}
                {refractedAngle === null && (
                    <group position={[1.5, 0, 0.3]}>
                        <mesh
                            position={[
                                Math.sin((incidentAngle * Math.PI) / 180) * 1.5,
                                Math.cos((incidentAngle * Math.PI) / 180) * 1.5,
                                0
                            ]}
                            rotation={[0, 0, -(incidentAngle * Math.PI) / 180]}
                        >
                            <boxGeometry args={[0.08, 3, 0.02]} />
                            <meshStandardMaterial
                                color="#EF4444"
                                emissive="#EF4444"
                                emissiveIntensity={0.8}
                            />
                        </mesh>
                    </group>
                )}

                {/* Indicateurs d'angles */}
                <Text position={[0.5, 1.2, 0.5]} fontSize={0.2} color="#FBBF24">
                    i₁ = {incidentAngle}°
                </Text>
                {refractedAngle !== null && (
                    <Text position={[2.5, -1.2, 0.5]} fontSize={0.2} color="#3B82F6">
                        i₂ = {refractedAngle.toFixed(1)}°
                    </Text>
                )}
            </group>
        </>
    );
}
