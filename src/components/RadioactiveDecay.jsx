import { Text, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RadioactiveDecay() {
    const [halfLife, setHalfLife] = useState(2); // Secondes
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(0);

    // Grille 10x10x2 = 200 atomes
    const TOTAL_ATOMS = 200;

    // État des atomes (false: instable, true: désintégré)
    const [atomsState, setAtomsState] = useState(new Array(TOTAL_ATOMS).fill(false));

    useEffect(() => {
        if (!started) return;

        let startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            setTime(elapsed);

            // Probabilité de désintégration : P = 1 - e^(-lambda * t)
            // lambda = ln(2) / t_1/2
            const lambda = Math.log(2) / halfLife;
            const prob = 1 - Math.exp(-lambda * elapsed);

            // Mise à jour statistique des atomes (Monte Carlo simple)
            // Pour chaque atome instable, est-ce qu'il se désintègre ?
            // Simplification : On simule l'état global attendu
            // Nombre attendu désintégrés = N0 * (1 - exp(-lambda*t))
            const decayedCount = Math.floor(TOTAL_ATOMS * prob);

            setAtomsState(prev => {
                const newState = [...prev];
                // On allume progressivement des atoms au hasard jusqu'à atteindre decayedCount
                let currentDecayed = newState.filter(x => x).length;
                while (currentDecayed < decayedCount && currentDecayed < TOTAL_ATOMS) {
                    const idx = Math.floor(Math.random() * TOTAL_ATOMS);
                    if (!newState[idx]) {
                        newState[idx] = true;
                        currentDecayed++;
                    }
                }
                return newState;
            });

        }, 100);

        return () => clearInterval(interval);
    }, [started, halfLife]);

    const reset = () => {
        setStarted(false);
        setTime(0);
        setAtomsState(new Array(TOTAL_ATOMS).fill(false));
    };

    const remaining = atomsState.filter(x => !x).length;
    const decayed = TOTAL_ATOMS - remaining;

    return (
        <group>
            {/* UI */}
            <Html position={[-5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">☢️ Décroissance Radioactive</h3>

                    <div className="space-y-4">
                        <div className="flex justify-between text-center bg-gray-800 p-2 rounded">
                            <div>
                                <div className="text-red-400 font-bold">{remaining}</div>
                                <div className="text-[10px] text-gray-400">Père (Instable)</div>
                            </div>
                            <div>
                                <div className="text-gray-400 font-bold">{decayed}</div>
                                <div className="text-[10px] text-gray-400">Fils (Stable)</div>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Demi-Vie (T½) : {halfLife}s</label>
                            <input type="range" min="1" max="10" value={halfLife} onChange={e => setHalfLife(Number(e.target.value))} className="w-full" disabled={started} />
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-1">Temps écoulé : {time.toFixed(1)}s</div>
                            <div className="text-xs text-gray-400 mb-1">Demi-vies passées : {(time / halfLife).toFixed(1)}</div>
                        </div>

                        <div className="flex gap-2">
                            <button onClick={() => setStarted(true)} disabled={started} className={`flex-1 py-2 rounded font-bold ${started ? 'bg-gray-700 text-gray-500' : 'bg-green-600 hover:bg-green-500'}`}>Démarrer</button>
                            <button onClick={reset} className="flex-1 py-2 bg-red-600 rounded font-bold hover:bg-red-500">Reset</button>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">LOI DE DÉCROISSANCE N(t)</Text>

            {/* Grille d'atomes */}
            <group position={[-2.5, -2.5, 0]}>
                {atomsState.map((isStable, i) => {
                    const row = Math.floor(i / 20);
                    const col = i % 20;
                    return (
                        <mesh key={i} position={[col * 0.3, row * 0.3, 0]}>
                            <sphereGeometry args={[0.12, 8, 8]} />
                            <meshStandardMaterial
                                color={isStable ? "#4B5563" : "#EF4444"} // Gris (Plomb) ou Rouge (Uranium)
                                emissive={isStable ? "#000" : "#EF4444"}
                                emissiveIntensity={isStable ? 0 : 0.5}
                            />
                        </mesh>
                    );
                })}
            </group>

            {/* Graphique courbe simple */}
            <group position={[3.5, 0, 0]}>
                {/* Axes */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.05, 4, 0.05]} />
                    <meshBasicMaterial color="white" />
                </mesh>
                <mesh position={[2, -2, 0]}>
                    <boxGeometry args={[4, 0.05, 0.05]} />
                    <meshBasicMaterial color="white" />
                </mesh>

                {/* Points Courbe Théorique */}
                {[...Array(20)].map((_, i) => {
                    const t = i * 0.5; // x
                    const N = 2 * Math.exp(-(Math.log(2) / halfLife) * t); // y (max 2)
                    return (
                        <mesh key={i} position={[t * 0.4, N - 2, 0]}>
                            <sphereGeometry args={[0.05]} />
                            <meshBasicMaterial color="cyan" />
                        </mesh>
                    )
                })}

                {/* Curseur temps */}
                <mesh position={[time * 0.4, (remaining / TOTAL_ATOMS) * 2 - 2, 0.1]}>
                    <sphereGeometry args={[0.15]} />
                    <meshBasicMaterial color="yellow" />
                </mesh>
            </group>

        </group>
    );
}
