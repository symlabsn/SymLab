import { Text, Html, Line } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function PendulumOscillations() {
    const [length, setLength] = useState(2); // mètres
    const [gravity, setGravity] = useState(9.8); // m/s^2
    const [angle, setAngle] = useState(Math.PI / 4); // 45 deg initial
    const [running, setRunning] = useState(true);

    const [t, setT] = useState(0);
    const [currentAngle, setCurrentAngle] = useState(angle);

    // Physique : Theta(t) = Theta0 * cos(sqrt(g/L)*t) (approx petites oscillations)
    // Mais pour grand angle, c'est plus complexe. On reste sur l'approx harmonique pour la démo simple.
    // Période T = 2*PI*sqrt(L/g)

    useFrame((state, delta) => {
        if (!running) return;

        const omega = Math.sqrt(gravity / length);
        const newTime = t + delta;

        // Oscillation
        const theta = angle * Math.cos(omega * newTime);

        setCurrentAngle(theta);
        setT(newTime);
    });

    // Position de la masse
    const x = length * Math.sin(currentAngle);
    const y = -length * Math.cos(currentAngle);

    // Energies (approx)
    const mass = 1;
    const h = (y - (-length)); // Hauteur par rapport au poin bas
    const v = Math.abs(-angle * Math.sqrt(gravity / length) * Math.sin(Math.sqrt(gravity / length) * t) * length); // v = L * omega * sin(...)

    const Epp = mass * gravity * (length - length * Math.cos(currentAngle));
    const Ec = mass * gravity * (length - length * Math.cos(angle)) - Epp; // Conservation Em

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🕰️ Pendule Simple</h3>

                    <div className="space-y-4">
                        <div className="flex gap-2 text-xs">
                            <div className="flex-1 bg-gray-800 p-1 rounded text-center">
                                T = {(2 * Math.PI * Math.sqrt(length / gravity)).toFixed(2)} s
                            </div>
                            <div className="flex-1 bg-gray-800 p-1 rounded text-center">
                                f = {(1 / (2 * Math.PI * Math.sqrt(length / gravity))).toFixed(2)} Hz
                            </div>
                        </div>

                        {/* Jauges Energie */}
                        <div className="space-y-1 text-xs">
                            <div className="w-full bg-gray-800 h-1.5 rounded flex">
                                <div className="bg-blue-500 h-full rounded-l transition-all" style={{ width: `${(Ec / (Ec + Epp + 0.01)) * 100}%` }}></div>
                                <div className="bg-green-500 h-full rounded-r transition-all" style={{ width: `${(Epp / (Ec + Epp + 0.01)) * 100}%` }}></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-400">
                                <span className="text-blue-400">Cinétique</span>
                                <span className="text-green-400">Potentielle</span>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Longueur (L) : {length.toFixed(1)} m</label>
                            <input type="range" min="0.5" max="4" step="0.1" value={length} onChange={e => { setLength(Number(e.target.value)); setT(0); }} className="w-full accent-purple-500" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-400">Gravité (g) : {gravity} m/s²</label>
                            <select value={gravity} onChange={e => setGravity(Number(e.target.value))} className="w-full bg-gray-700 rounded p-1 text-xs">
                                <option value={9.8}>Terre (9.81)</option>
                                <option value={1.6}>Lune (1.6)</option>
                                <option value={24.8}>Jupiter (24.8)</option>
                                <option value={3.7}>Mars (3.7)</option>
                            </select>
                        </div>

                        <button onClick={() => setRunning(!running)} className={`w-full py-2 rounded font-bold ${running ? 'bg-gray-600' : 'bg-green-600'}`}>
                            {running ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">OSCILLATEUR HARMONIQUE</Text>

            {/* Support */}
            <mesh position={[0, 0.2, 0]}>
                <boxGeometry args={[2, 0.4, 0.4]} />
                <meshStandardMaterial color="#4B5563" />
            </mesh>

            {/* Fil */}
            {/* On dessine une ligne entre [0,0,0] et [x,y,0] */}
            <Line points={[[0, 0, 0], [x, y, 0]]} color="white" lineWidth={2} />

            {/* Masse */}
            <mesh position={[x, y, 0]}>
                <sphereGeometry args={[0.3]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Trace de la trajectoire (arc) */}
            <Line
                points={new Array(50).fill(0).map((_, i) => {
                    const th = -angle + (i / 49) * 2 * angle;
                    return [length * Math.sin(th), -length * Math.cos(th), 0];
                })}
                color="gray" opacity={0.3} transparent lineWidth={1} dashed
            />

            {/* Vecteur Vitesse (Flèche) */}
            {/* Tangent à la trajectoire */}
            {/* Calcul vecteur approximatif ou exact */}

        </group>
    );
}
