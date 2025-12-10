import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function EnergySkatePark() {
    const [running, setRunning] = useState(true);
    const [mass, setMass] = useState(50); // kg
    const [friction, setFriction] = useState(0.01);

    // État physique
    const [time, setTime] = useState(0);
    const [height, setHeight] = useState(0);
    const [speed, setSpeed] = useState(0);

    // Refs
    const ballRef = useRef();

    // Constantes
    const G = 9.81;
    const MAX_H = 5;

    useFrame((state, delta) => {
        if (!running) return;

        // Simulation simple d'un mouvement harmonique sur une parabole y = x^2
        // Conservation energie : mgh + 1/2mv^2 = E_total
        // Avec frottement : E_total diminue

        // On simule avec une variable de phase "t" qui avance
        const dt = delta * 1.5; // Vitesse simu

        // Amortissement dû au frottement (exponentiel inverse)
        // Amplitude diminue
        const damping = Math.max(0, 1 - friction * dt * 0.5);

        setTime(t => {
            const newTime = t + dt;
            // Position x oscille (cos)
            // L'amplitude dépend du temps (frottement)
            // Pour simplifier, on stocke une "amplitude actuelle" dans une ref ou on la calcule
            return newTime;
        });

        // Calcul position
        // Amplitude actuelle approximative basée sur le temps total (pas parfait mais visuel ok)
        // Une vraie physique demanderait d'intégrer les forces à chaque frame.
        // Faisons une intégration simple :
        if (ballRef.current) {
            const x = ballRef.current.position.x;
            const y = x * x * 0.2; // Parabole douce

            // Tangente : pente = 0.4x
            // Angle = atan(0.4x)
            const angle = Math.atan(0.4 * x);

            // Forces
            const F_gravity_tangent = -G * Math.sin(angle);
            const F_friction = -Math.sign(speed) * friction * 5;

            const acceleration = F_gravity_tangent + F_friction;

            let newSpeed = speed + acceleration * delta; // v = v + a*dt
            let newX = x + newSpeed * delta * Math.cos(angle); // x = x + v_x*dt

            // Bornage
            if (Math.abs(newX) > 5) { newX = Math.sign(newX) * 5; newSpeed = 0; }

            setSpeed(newSpeed);
            ballRef.current.position.x = newX;
            ballRef.current.position.y = newX * newX * 0.2;

            setHeight(ballRef.current.position.y);
        }
    });

    const Ec = 0.5 * mass * speed * speed;
    const Epp = mass * G * height;
    const Em = Ec + Epp;

    const reset = () => {
        if (ballRef.current) {
            ballRef.current.position.x = -4.5;
            ballRef.current.position.y = 4.5 * 4.5 * 0.2;
            setSpeed(0);
        }
    };

    return (
        <group>
            {/* UI */}
            <Html position={[-5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🎢 Énergie Mécanique</h3>

                    {/* Jauges Energie */}
                    <div className="space-y-2 mb-4">
                        <div className="text-xs">
                            <div className="flex justify-between">
                                <span className="text-blue-400">Cinétique (Ec)</span>
                                <span>{Math.round(Ec)} J</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded mt-1">
                                <div className="bg-blue-500 h-2 rounded" style={{ width: `${Math.min(100, Ec / 20)}%` }}></div>
                            </div>
                        </div>
                        <div className="text-xs">
                            <div className="flex justify-between">
                                <span className="text-green-400">Potentielle (Epp)</span>
                                <span>{Math.round(Epp)} J</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded mt-1">
                                <div className="bg-green-500 h-2 rounded" style={{ width: `${Math.min(100, Epp / 20)}%` }}></div>
                            </div>
                        </div>
                        <div className="text-xs">
                            <div className="flex justify-between">
                                <span className="text-yellow-400">Totale (Em)</span>
                                <span>{Math.round(Em)} J</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded mt-1">
                                <div className="bg-yellow-500 h-2 rounded" style={{ width: `${Math.min(100, Em / 20)}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Contrôles */}
                    <div className="space-y-3">
                        <div>
                            <label className="text-xs text-gray-400">Masse : {mass} kg</label>
                            <input type="range" min="10" max="100" value={mass} onChange={e => setMass(Number(e.target.value))} className="w-full" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-400">Frottement</label>
                            <input type="range" min="0" max="0.1" step="0.001" value={friction} onChange={e => setFriction(Number(e.target.value))} className="w-full" />
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => setRunning(!running)} className={`flex-1 py-1 rounded ${running ? 'bg-red-600' : 'bg-green-600'}`}>{running ? 'Pause' : 'Play'}</button>
                            <button onClick={reset} className="flex-1 py-1 rounded bg-gray-600">Reset</button>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, -2]} fontSize={0.5} color="white">CONSERVATION ÉNERGIE</Text>

            {/* Rampe Parabole */}
            <mesh position={[0, 0, 0]}>
                <tubeGeometry args={[
                    new THREE.CatmullRomCurve3(
                        Array.from({ length: 21 }, (_, i) => {
                            const x = (i - 10) * 0.5;
                            return new THREE.Vector3(x, x * x * 0.2, 0);
                        })
                    ),
                    64, 0.5, 8, false
                ]} />
                <meshStandardMaterial color="#4B5563" side={THREE.DoubleSide} wireframe={false} />
            </mesh>

            {/* Bille (Skater) */}
            <mesh ref={ballRef} position={[-4.5, 4.5 * 4.5 * 0.2, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Repère sol */}
            <gridHelper args={[20, 20]} position={[0, -0.5, 0]} />
        </group>
    );
}
