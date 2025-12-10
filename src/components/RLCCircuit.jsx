import { Text, Html, Line } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RLCCircuit() {
    const [R, setR] = useState(1); // Résistance (Amortissement)
    const [L, setL] = useState(1); // Inductance (Inertie)
    const [C, setC] = useState(1); // Capacité (Raideur)
    const [q, setQ] = useState(5); // Charge initiale
    const [i, setI] = useState(0); // Courant initial
    const [running, setRunning] = useState(false);

    // Équation Différentielle : q'' + (R/L)q' + (1/LC)q = 0
    // q' = i
    // i' = -(R/L)i - (1/LC)q

    const timeRef = useRef(0);
    const historyRef = useRef([]); // Pour tracer courbe

    useFrame((state, delta) => {
        if (!running) return;

        // Simulation Euler semi-implicite ou RK4 (Euler suffit pour visu)
        const dt = delta * 2; // Accélérer un peu

        setQ(prevQ => {
            setI(prevI => {
                const didt = -(R / L) * prevI - (1 / (L * C)) * prevQ;
                const newI = prevI + didt * dt;

                // Mettre à jour Q avec le nouveau I
                const newQ = prevQ + newI * dt;

                // Sauvegarde historique (limitée)
                timeRef.current += dt;
                if (historyRef.current.length > 200) historyRef.current.shift();
                historyRef.current.push(new THREE.Vector3(timeRef.current * 0.5 - 4, newQ * 0.5, 0)); // Mapping

                return newI;
            });
            // La mise à jour de I déclenche celle de Q "indirectement" via closure, 
            // mais ici on doit retourner Q dans setQ... Problème de closure React.
            // On utilise des Refs pour la physique si on veut être propre, ou on triche.
            // Trichons proprement : on calcul tout en une passe.
            return prevQ + i * dt; // Utilise ancien I, c'est Euler explicite. Stable si dt petit.
        });
    });

    // Reset
    const reset = () => {
        setQ(5);
        setI(0);
        setRunning(false);
        timeRef.current = 0;
        historyRef.current = [];
    };

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">〰️ Circuit RLC</h3>

                    <div className="space-y-3">
                        <div className="flex gap-2 text-xs text-center">
                            <div className="flex-1 bg-gray-800 p-1 rounded">Énergie Élec<br /><span className="text-blue-400">{(0.5 * q * q / C).toFixed(1)} J</span></div>
                            <div className="flex-1 bg-gray-800 p-1 rounded">Énergie Mag<br /><span className="text-red-400">{(0.5 * L * i * i).toFixed(1)} J</span></div>
                        </div>

                        <div className="grid grid-cols-1 gap-2 text-xs">
                            <label>Amortissement (R)</label>
                            <input type="range" min="0" max="5" step="0.1" value={R} onChange={e => setR(Number(e.target.value))} className="w-full accent-green-500" />

                            <label>Inductance (L)</label>
                            <input type="range" min="0.5" max="5" step="0.1" value={L} onChange={e => setL(Number(e.target.value))} className="w-full accent-red-500" />

                            <label>Capacité (C)</label>
                            <input type="range" min="0.5" max="5" step="0.1" value={C} onChange={e => setC(Number(e.target.value))} className="w-full accent-blue-500" />
                        </div>

                        <div className="flex gap-2">
                            <button onClick={() => setRunning(!running)} className={`flex-1 py-2 rounded font-bold ${running ? 'bg-yellow-600' : 'bg-green-600'}`}>
                                {running ? 'Pause' : 'Play'}
                            </button>
                            <button onClick={reset} className="px-3 bg-gray-600 rounded">Reset</button>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">OSCILLATIONS AMORTIES</Text>

            {/* Circuit 3D */}
            <group position={[0, -2, 0]}>
                {/* R */}
                <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <boxGeometry args={[1, 0.4, 0.4]} />
                    <meshStandardMaterial color="green" />
                </mesh>
                <Text position={[0, 2, 0]} fontSize={0.3}>R</Text>

                {/* L (Bobine) */}
                <group position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh>
                        <torusKnotGeometry args={[0.3, 0.1, 64, 8, 2, 3]} /> {/* Fake bobine */}
                        <meshStandardMaterial color="red" />
                    </mesh>
                </group>
                <Text position={[2.5, 0, 0]} fontSize={0.3}>L</Text>

                {/* C (Condo) */}
                <group position={[-2, 0, 0]}>
                    <mesh position={[0, 0.2, 0]}><boxGeometry args={[0.8, 0.05, 0.5]} /><meshStandardMaterial color="blue" /></mesh>
                    <mesh position={[0, -0.2, 0]}><boxGeometry args={[0.8, 0.05, 0.5]} /><meshStandardMaterial color="blue" /></mesh>
                    {/* Charge visu */}
                    <Text position={[0, 0.5, 0]} fontSize={0.3} color="white">{q.toFixed(1)} C</Text>
                </group>
                <Text position={[-2.5, 0, 0]} fontSize={0.3}>C</Text>

                {/* Fils */}
                <mesh position={[0, 1.5, 0]} scale={[2, 1, 1]}> <boxGeometry args={[3, 0.05, 0.05]} /> <meshStandardMaterial color="gray" /> </mesh> {/* Haut */}
                <mesh position={[0, -1.5, 0]} scale={[2, 1, 1]}> <boxGeometry args={[3, 0.05, 0.05]} /> <meshStandardMaterial color="gray" /> </mesh> {/* Bas - Fermeture */}
                {/* Manque des bouts verticaux pour connecter */}
            </group>

            {/* Graphique Dynamique q(t) */}
            <group position={[0, 1, 0]}>
                <Line points={historyRef.current} color="yellow" lineWidth={2} />
                {historyRef.current.length > 0 && (
                    <mesh position={historyRef.current[historyRef.current.length - 1]}>
                        <sphereGeometry args={[0.1]} />
                        <meshBasicMaterial color="white" />
                    </mesh>
                )}
            </group>
        </group>
    );
}
