import { Text, Html, Sphere } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ClimateFeedback() {
    const [co2, setCo2] = useState(280); // ppm (Pre-industriel) -> 420+
    const [iceCover, setIceCover] = useState(1); // 1 = Max (Glacial), 0 = Min (Hot House)
    const [temperature, setTemperature] = useState(15); // °C Moyen

    // Modèle simplifié
    // Température = T_base + S * log(CO2/280) - AlbedoEffect * Ice
    // Ice dépend de Température (Feedback) -> Si T monte, Ice descend.

    // Simulation dynamique
    useFrame((state, delta) => {
        // Calcul T cible basé sur CO2 (Forçage)
        const forcing = 5 * Math.log(co2 / 280); // Sensibilité climatique
        const albedoCooling = iceCover * 10; // La glace refroidit de 10°C max par réflexion
        const targetTemp = 15 + forcing - albedoCooling + 5; // +5 calibration base

        // Inertie thermique
        setTemperature(t => THREE.MathUtils.lerp(t, targetTemp, delta * 0.5));

        // Rétroaction Glace : Si T > 0, glace fond. Si T < -10, glace avance.
        // Glace d'équilibre = map(Temp, -10, 20, 1, 0)
        let targetIce = 1 - (temperature + 5) / 25;
        targetIce = Math.max(0, Math.min(1, targetIce));

        // Inertie fonte
        setIceCover(i => THREE.MathUtils.lerp(i, targetIce, delta * 0.2));
    });

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🌍 Climat & Rétroactions</h3>

                    <div className="space-y-4">
                        <div className="bg-gray-800 p-2 rounded text-center">
                            <div className="text-xs text-gray-400">Température Moyenne</div>
                            <div className={`text-2xl font-bold ${temperature > 20 ? 'text-red-500' : temperature < 10 ? 'text-blue-500' : 'text-green-500'}`}>
                                {temperature.toFixed(1)}°C
                            </div>
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Concentration CO₂ : {co2} ppm</label>
                            <input type="range" min="180" max="1000" value={co2} onChange={e => setCo2(Number(e.target.value))} className="w-full accent-gray-500" />
                        </div>

                        <div className="text-xs text-gray-300 border p-2 rounded border-gray-600">
                            <div className="flex justify-between mb-1"><span>Couverture Glaciaire (Albedo)</span> <span>{(iceCover * 100).toFixed(0)}%</span></div>
                            <div className="w-full h-1 bg-blue-900 rounded"><div className="h-full bg-white rounded transition-all" style={{ width: `${iceCover * 100}%` }}></div></div>
                            <div className="mt-2 italic text-[10px] text-yellow-400">
                                Moins de glace = Moins de réflexion = Plus chaud = Encore moins de glace ! (Boucle Positive)
                            </div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">RÉCHAUFFEMENT & ALBEDO</Text>

            {/* Terre */}
            <group rotation={[0, 0, (23.5 * Math.PI) / 180]}> {/* Inclinaison Axe */}
                <group rotation={[0, Date.now() / 1000 * 0.1, 0]}> {/* Rotation jour */}
                    <Sphere args={[2, 64, 64]}>
                        <meshStandardMaterial color="#1E3A8A" roughness={0.8} /> {/* Océan Bleu */}
                    </Sphere>

                    {/* Continents (Simplifiés, vertex displacement ou texture procédurale ?) */}
                    {/* On met juste des blocs verts pour suggérer */}
                    <mesh position={[1.5, 0.5, 0.5]} rotation={[0, 1, 0]}>
                        <sphereGeometry args={[0.5]} />
                        <meshStandardMaterial color={temperature > 25 ? "#D97706" : "#10B981"} /> {/* Vert ou Jaune sec */}
                    </mesh>
                    <mesh position={[-1.5, -0.5, 0]} rotation={[0, -1, 0]}>
                        <sphereGeometry args={[0.6]} />
                        <meshStandardMaterial color={temperature > 25 ? "#D97706" : "#10B981"} />
                    </mesh>

                    {/* Calottes Glaciaires Dynamiques */}
                    {/* Pôle Nord */}
                    <mesh position={[0, 1.8, 0]} scale={[1 + iceCover * 0.5, 1, 1 + iceCover * 0.5]}>
                        <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, 1.5]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    {/* Pôle Sud */}
                    <mesh position={[0, -1.8, 0]} rotation={[Math.PI, 0, 0]} scale={[1 + iceCover * 0.5, 1, 1 + iceCover * 0.5]}>
                        <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, 1.5]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                </group>
            </group>

            {/* Atmosphère (Halo CO2) */}
            <mesh>
                <sphereGeometry args={[2.2 + (co2 / 1000) * 0.2, 32, 32]} />
                <meshBasicMaterial color="#gray" opacity={0.1 + (co2 / 1000) * 0.3} transparent side={THREE.BackSide} />
            </mesh>

            {/* Soleil */}
            <pointLight position={[10, 5, 5]} intensity={2} color="white" />
        </group>
    );
}
