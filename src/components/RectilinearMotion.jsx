import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export function RectilinearMotion() {
    const [velocity, setVelocity] = useState(2);
    const [isRunning, setIsRunning] = useState(true);
    const [motionType, setMotionType] = useState('uniform'); // uniform, accelerated, decelerated
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);

    const carRef = useRef();
    const wheelsRef = useRef([]);

    useFrame((state, delta) => {
        if (!isRunning || !carRef.current) return;

        let currentVelocity = velocity;

        if (motionType === 'accelerated') {
            currentVelocity = velocity + time * 0.5;
        } else if (motionType === 'decelerated') {
            currentVelocity = Math.max(0.5, velocity - time * 0.3);
        }

        // Mouvement de la voiture
        carRef.current.position.x += delta * currentVelocity;

        // Rotation des roues
        wheelsRef.current.forEach(wheel => {
            if (wheel) wheel.rotation.z -= delta * currentVelocity * 2;
        });

        // Reset position quand elle sort
        if (carRef.current.position.x > 6) {
            carRef.current.position.x = -6;
            setTime(0);
        }

        setDistance(prev => prev + delta * currentVelocity);
        setTime(prev => prev + delta);
    });

    const resetSimulation = () => {
        if (carRef.current) carRef.current.position.x = -4;
        setDistance(0);
        setTime(0);
    };

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-4.5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🚗 Mouvement Rectiligne</h3>

                    <div className="space-y-3">
                        {/* Type de mouvement */}
                        <div>
                            <label className="block text-xs text-gray-400 mb-1">Type de mouvement</label>
                            <select
                                value={motionType}
                                onChange={(e) => { setMotionType(e.target.value); resetSimulation(); }}
                                className="w-full p-2 bg-gray-800 rounded text-sm"
                            >
                                <option value="uniform">Uniforme (MRU)</option>
                                <option value="accelerated">Accéléré (MRUA)</option>
                                <option value="decelerated">Décéléré (Freiné)</option>
                            </select>
                        </div>

                        {/* Vitesse */}
                        <div>
                            <label className="block text-xs text-gray-400">
                                Vitesse initiale: {velocity.toFixed(1)} m/s
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="5"
                                step="0.1"
                                value={velocity}
                                onChange={(e) => setVelocity(parseFloat(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Données en temps réel */}
                        <div className="grid grid-cols-2 gap-2 p-2 bg-gray-900/50 rounded">
                            <div className="text-center">
                                <div className="text-xs text-gray-400">Distance</div>
                                <div className="text-lg font-bold text-cyan-400">{distance.toFixed(1)} m</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xs text-gray-400">Temps</div>
                                <div className="text-lg font-bold text-green-400">{time.toFixed(1)} s</div>
                            </div>
                        </div>

                        {/* Formule affichée */}
                        <div className="p-2 bg-purple-900/30 rounded text-center">
                            <span className="text-purple-300 font-mono text-sm">
                                v = d/t = {(distance / Math.max(time, 0.1)).toFixed(2)} m/s
                            </span>
                        </div>

                        {/* Boutons */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsRunning(!isRunning)}
                                className={`flex-1 py-2 rounded font-bold ${isRunning ? 'bg-red-600' : 'bg-green-600'}`}
                            >
                                {isRunning ? '⏸️ Pause' : '▶️ Play'}
                            </button>
                            <button
                                onClick={resetSimulation}
                                className="flex-1 py-2 bg-gray-600 rounded font-bold"
                            >
                                🔄 Reset
                            </button>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.4} color="white">
                {motionType === 'uniform' ? 'MOUVEMENT RECTILIGNE UNIFORME' :
                    motionType === 'accelerated' ? 'MOUVEMENT ACCÉLÉRÉ' : 'MOUVEMENT DÉCÉLÉRÉ'}
            </Text>

            {/* Route */}
            <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[14, 2]} />
                <meshStandardMaterial color="#374151" />
            </mesh>

            {/* Lignes de route */}
            {Array.from({ length: 14 }).map((_, i) => (
                <mesh key={`line-${i}`} position={[-6.5 + i, -1.19, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[0.3, 0.08]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
            ))}

            {/* Bornes kilométriques */}
            {[-4, -2, 0, 2, 4].map((x, i) => (
                <group key={`borne-${i}`} position={[x, -0.8, 1]}>
                    <mesh>
                        <boxGeometry args={[0.15, 0.5, 0.1]} />
                        <meshStandardMaterial color="#EF4444" />
                    </mesh>
                    <Text position={[0, 0.4, 0]} fontSize={0.2} color="white">
                        {i * 2}m
                    </Text>
                </group>
            ))}

            {/* Voiture (taxi-brousse) */}
            <group ref={carRef} position={[-4, -0.6, 0]}>
                {/* Carrosserie */}
                <mesh position={[0, 0.2, 0]}>
                    <boxGeometry args={[1.2, 0.4, 0.6]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                {/* Cabine */}
                <mesh position={[0.1, 0.5, 0]}>
                    <boxGeometry args={[0.6, 0.3, 0.55]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.7} />
                </mesh>
                {/* Roues */}
                {[[-0.4, -0.1, 0.35], [-0.4, -0.1, -0.35], [0.4, -0.1, 0.35], [0.4, -0.1, -0.35]].map((pos, i) => (
                    <mesh key={`wheel-${i}`} ref={el => wheelsRef.current[i] = el} position={pos} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
                        <meshStandardMaterial color="#1F2937" />
                    </mesh>
                ))}
                {/* Flèche vitesse */}
                <mesh position={[1, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.1, 0.3, 8]} />
                    <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} />
                </mesh>
            </group>
        </group>
    );
}
