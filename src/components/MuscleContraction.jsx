import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MuscleContraction() {
    const [contraction, setContraction] = useState(0); // 0 (Relâché) à 1 (Contracté)
    const [atp, setAtp] = useState(true);
    const [calcium, setCalcium] = useState(false);

    // Un sarcomère se raccourcit
    // Bande Z (bords) se rapprochent
    // Actine (fin) glisse sur Myosine (épais)

    const width = 6 - contraction * 2; // Largeur Sarcomère (6 -> 4)

    // Têtes de myosine bougent si Contraction active
    // Condition : Calcium (démasque site) + ATP (énergie)

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">💪 Contraction (Sarcomère)</h3>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={() => setCalcium(!calcium)} className={`py-2 rounded font-bold text-sm ${calcium ? 'bg-green-600' : 'bg-gray-700'}`}>Calcium (Ca²⁺)</button>
                            <button onClick={() => setAtp(!atp)} className={`py-2 rounded font-bold text-sm ${atp ? 'bg-yellow-600' : 'bg-gray-700'}`}>ATP (Énergie)</button>
                        </div>

                        <div className="text-center p-2 bg-gray-800 rounded">
                            <div className="text-xs text-gray-400">État</div>
                            <div className="font-bold">{contraction > 0.5 ? "CONTRACTÉ" : "RELÂCHÉ"}</div>
                        </div>

                        <div>
                            <label className="text-xs text-gray-400">Force Contraction</label>
                            <input
                                type="range"
                                min="0" max="1" step="0.01"
                                value={contraction}
                                onChange={e => {
                                    if (calcium && atp) setContraction(Number(e.target.value));
                                }}
                                disabled={!calcium || !atp}
                                className={`w-full ${(!calcium || !atp) ? 'opacity-50 cursor-not-allowed' : 'accent-red-500'}`}
                            />
                            {(!calcium || !atp) && <div className="text-[10px] text-red-400">Besoin Ca²⁺ et ATP !</div>}
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">SARCOMÈRE</Text>

            {/* Disques Z (Murs gauche/droite) */}
            <mesh position={[-width / 2, 0, 0]}>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#A78BFA" /> {/* Violet */}
            </mesh>
            <mesh position={[width / 2, 0, 0]}>
                <boxGeometry args={[0.2, 3, 0.2]} />
                <meshStandardMaterial color="#A78BFA" />
            </mesh>

            {/* Filaments d'Actine (Fins, attachés aux disques Z) */}
            <group position={[-width / 2 + 1.5, 0.5, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 3]} />
                    <meshStandardMaterial color="#60A5FA" /> {/* Bleu */}
                </mesh>
            </group>
            <group position={[width / 2 - 1.5, 0.5, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 3]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
            </group>
            <group position={[-width / 2 + 1.5, -0.5, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 3]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
            </group>
            <group position={[width / 2 - 1.5, -0.5, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 3]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
            </group>

            {/* Filaments de Myosine (Épais, au centre, fixes relativements) */}
            <group position={[0, 0, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.1, 0.1, 2.5]} />
                    <meshStandardMaterial color="#EF4444" /> {/* Rouge */}
                </mesh>

                {/* Têtes de Myosine (Ponts) */}
                {[...Array(6)].map((_, i) => (
                    <group key={i} position={[(i - 2.5) * 0.4, 0.15, 0]}>
                        <mesh rotation={[0, 0, contraction > 0 ? Math.PI / 4 : -Math.PI / 4]}>
                            <boxGeometry args={[0.1, 0.2, 0.05]} />
                            <meshStandardMaterial color="#FECACA" />
                        </mesh>
                    </group>
                ))}
                {[...Array(6)].map((_, i) => (
                    <group key={i} position={[(i - 2.5) * 0.4, -0.15, 0]}>
                        <mesh rotation={[0, 0, contraction > 0 ? -Math.PI / 4 : Math.PI / 4]}>
                            <boxGeometry args={[0.1, 0.2, 0.05]} />
                            <meshStandardMaterial color="#FECACA" />
                        </mesh>
                    </group>
                ))}
            </group>

            {/* Ions Calcium (Particules flottantes) */}
            {calcium && [...Array(20)].map((_, i) => (
                <mesh key={`ca-${i}`} position={[(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 1]}>
                    <sphereGeometry args={[0.05]} />
                    <meshBasicMaterial color="#10B981" />
                </mesh>
            ))}

        </group>
    );
}
