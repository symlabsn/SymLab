import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ElectromagneticInduction() {
    const [magnetPos, setMagnetPos] = useState(0); // Position Z (-3 à 3)
    const [current, setCurrent] = useState(0);     // Courant induit
    const [speed, setSpeed] = useState(2);         // Vitesse déplacement auto
    const [auto, setAuto] = useState(false);

    // Pour calculer la vitesse (dérivée de position)
    const lastPosRef = useRef(0);

    useFrame((state, delta) => {
        let newPos = magnetPos;

        if (auto) {
            newPos = Math.sin(state.clock.elapsedTime * speed) * 2;
            setMagnetPos(newPos);
        }

        // Loi de Faraday : e = -dΦ/dt (proportionnel à la vitesse de variation du champ)
        // Ici simplifié : Courant = Vitesse du mouvement
        const velocity = (newPos - lastPosRef.current) / delta;

        // On lisse un peu pour l'affichage
        // Le courant est max quand l'aimant PASSE au centre (vitesse max)
        // Mais ici velocity capte déjà le mouvement.
        // On simule que le champ est fort au centre (position 0).
        // En réalité, dPhi/dt dépend de la position ET vitesse.
        // Simplification éducative : Mouvement = Lumière.

        // Plus on bouge vite près du centre, plus ça éclaire
        const proximity = Math.max(0, 1 - Math.abs(newPos) / 1.5); // 1 au centre, 0 loin
        const inducedCurrent = Math.abs(velocity) * proximity * 5;

        setCurrent(Math.min(10, inducedCurrent));
        lastPosRef.current = newPos;
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚡ Induction Magnétique</h3>

                    <div className="space-y-4">
                        {/* Contrôle Manuel */}
                        {!auto && (
                            <div>
                                <label className="block text-xs text-gray-400 mb-1">Bouger l'aimant (Manuel)</label>
                                <input
                                    type="range"
                                    min="-2.5"
                                    max="2.5"
                                    step="0.01"
                                    value={magnetPos}
                                    onChange={(e) => setMagnetPos(parseFloat(e.target.value))}
                                    className="w-full"
                                />
                                <div className="text-center text-xs text-gray-500">Bougez le curseur vite !</div>
                            </div>
                        )}

                        {/* Contrôle Auto */}
                        <div className="flex items-center gap-2 bg-gray-900 p-2 rounded">
                            <input
                                type="checkbox"
                                checked={auto}
                                onChange={(e) => setAuto(e.target.checked)}
                            />
                            <span className="text-sm">Mode Automatique</span>
                        </div>

                        {auto && (
                            <div>
                                <label className="block text-xs text-gray-400">Vitesse oscillation</label>
                                <input
                                    type="range"
                                    min="0.5"
                                    max="10"
                                    step="0.5"
                                    value={speed}
                                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                    className="w-full"
                                />
                            </div>
                        )}

                        {/* Ampèremètre */}
                        <div className="bg-black p-2 rounded text-center border border-gray-700 font-mono text-cyan-400">
                            {current.toFixed(2)} mA
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[2, 3.5, 0]} fontSize={0.4} color="white">
                LOI DE LENZ-FARADAY
            </Text>

            {/* Bobine (Solénoïde) */}
            <group position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                {/* Spire */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 2, 32, 1, true]} />
                    <meshStandardMaterial color="#B45309" wireframe={true} />
                </mesh>
                {/* Fils de cuivre enroulés */}
                {[...Array(10)].map((_, i) => (
                    <mesh key={i} position={[0, (i - 4.5) * 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[1.02, 0.05, 8, 32]} />
                        <meshStandardMaterial color="#D97706" />
                    </mesh>
                ))}

                {/* Ampoule connectée */}
                <group position={[0, -2, 0]}>
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[0.5]} />
                        <meshStandardMaterial
                            color="#FFFF00"
                            emissive="#FFFF00"
                            emissiveIntensity={current / 2}
                            transparent
                            opacity={0.3 + current / 10}
                        />
                    </mesh>
                    <pointLight color="#FFFF00" intensity={current} distance={3} />
                    <Text position={[0, -0.8, 0]} fontSize={0.3} rotation={[0, 0, -Math.PI / 2]}>💡</Text>
                </group>
            </group>

            {/* Aimant Mobile */}
            <group position={[2 + magnetPos, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
                    <meshStandardMaterial color="#EF4444" /> {/* Nord */}
                </mesh>
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
                    <meshStandardMaterial color="#3B82F6" /> {/* Sud */}
                </mesh>
                <Text position={[0, 0.5, 0.35]} fontSize={0.3} color="white">N</Text>
                <Text position={[0, -0.5, 0.35]} fontSize={0.3} color="white">S</Text>
            </group>

        </group>
    );
}
