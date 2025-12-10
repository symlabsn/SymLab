import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CellRespiration() {
    const [activityLevel, setActivityLevel] = useState(1); // 1 (Repos) à 5 (Sport Intense)
    const [showLabels, setShowLabels] = useState(true);

    // Refs pour animation
    const mitochondriaRef = useRef();
    const particlesRef = useRef([]);

    // Génération de particules (Glucose, O2 -> ATP, CO2, H2O)
    // Nous allons simuler un flux continu

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        // Pulsation de la mitochondrie (plus vite si activité intense)
        if (mitochondriaRef.current) {
            const scale = 1 + Math.sin(time * 2 * activityLevel) * 0.02;
            mitochondriaRef.current.scale.set(scale, scale, scale);
            mitochondriaRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
        }

        // Animation des particules
        particlesRef.current.forEach((p, i) => {
            if (!p) return;
            // Logique de mouvement cyclique complexe ici simplifiée pour l'exemple
            // On ferait bouger les particules le long d'un chemin (Entrée -> Cycle Krebs -> Chaine respi -> Sortie)
        });
    });

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-5, 1, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚡ Respiration Cellulaire</h3>

                    <div className="space-y-4">
                        {/* Niveau d'activité */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Activité Cellulaire</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                step="1"
                                value={activityLevel}
                                onChange={(e) => setActivityLevel(parseInt(e.target.value))}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Repos</span>
                                <span>Intense</span>
                            </div>
                        </div>

                        {/* Équation Bilan */}
                        <div className="p-3 bg-gray-900 rounded border border-gray-700">
                            <div className="text-center font-mono text-sm">
                                <span className="text-orange-400">C₆H₁₂O₆</span> + <span className="text-blue-400">6O₂</span>
                                <br />↓<br />
                                <span className="text-gray-400">6CO₂</span> + <span className="text-cyan-400">6H₂O</span> + <span className="text-yellow-400 font-bold">36 ATP</span>
                            </div>
                        </div>

                        {/* Stats en temps réel (simulées) */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 bg-gray-800 rounded text-center">
                                <div className="text-xs text-gray-400">Conso O₂</div>
                                <div className="text-lg font-bold text-blue-400">{(activityLevel * 12).toFixed(0)} ml/min</div>
                            </div>
                            <div className="p-2 bg-gray-800 rounded text-center">
                                <div className="text-xs text-gray-400">Prod ATP</div>
                                <div className="text-lg font-bold text-yellow-400">{(activityLevel * 1000).toFixed(0)} /s</div>
                            </div>
                        </div>

                        <label className="flex items-center gap-2 text-sm mt-2">
                            <input
                                type="checkbox"
                                checked={showLabels}
                                onChange={(e) => setShowLabels(e.target.checked)}
                            />
                            Afficher les légendes
                        </label>
                    </div>
                </div>
            </Html>

            <Text position={[1.5, 3.5, 0]} fontSize={0.4} color="white">
                LA MITOCHONDRIE
            </Text>

            {/* Mitochondrie (Forme ovale complexe simplifiée) */}
            <group position={[1.5, 0, 0]} rotation={[0, 0, -0.2]}>
                {/* Membrane Externe */}
                <mesh ref={mitochondriaRef}>
                    <capsuleGeometry args={[1.5, 4, 4, 16]} />
                    <meshStandardMaterial color="#BE185D" transparent opacity={0.3} wireframe={false} />
                </mesh>

                {/* Crêtes mitochondriales (simulées par des tores internes ou géométrie) */}
                <mesh position={[0, 0, 0]} scale={[0.8, 0.9, 0.8]}>
                    <capsuleGeometry args={[1.2, 3.5, 4, 16]} />
                    <meshStandardMaterial color="#9D174D" wireframe />
                </mesh>

                {/* Particules Entrantes (Glucose + O2) */}
                <group position={[-2.5, 1, 0]}>
                    {[...Array(5)].map((_, i) => (
                        <group key={`in-${i}`} position={[i * 0.5, Math.sin(i) * 0.5, 0]}>
                            <mesh position={[0, 0, 0]} >
                                <dodecahedronGeometry args={[0.15]} />
                                <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={0.5} />
                            </mesh>
                            {showLabels && i === 0 && <Text position={[0, 0.3, 0]} fontSize={0.15}>Glucose</Text>}
                        </group>
                    ))}
                    {/* Flèche Entrée */}
                    <mesh position={[0.5, -0.5, 0]} rotation={[0, 0, -0.5]}>
                        <coneGeometry args={[0.1, 0.5, 8]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                </group>

                {/* Particules Sortantes (ATP) - Explosion d'énergie */}
                <group position={[2.5, -1, 0]}>
                    {[...Array(8)].map((_, i) => (
                        <group key={`out-${i}`} position={[(Math.random() - 0.5) * 1, (Math.random() - 0.5) * 1, 0]}>
                            <mesh>
                                <octahedronGeometry args={[0.12]} />
                                <meshStandardMaterial color="#EAB308" emissive="#EAB308" emissiveIntensity={1} />
                            </mesh>
                        </group>
                    ))}
                    {showLabels && <Text position={[0.5, 0.5, 0]} fontSize={0.3} color="#EAB308" font="bold">ATP !!!</Text>}
                </group>

                {/* Cycle de Krebs (Rotation interne) */}
                <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.8, 0.05, 8, 32]} />
                    <meshStandardMaterial color="#4ade80" transparent opacity={0.5} />
                </mesh>
                {showLabels && <Text position={[0, 0, 1]} fontSize={0.15} color="#4ade80">Cycle de Krebs</Text>}
            </group>
        </group>
    );
}
