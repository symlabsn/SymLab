import { Text, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NerveImpulse() {
    const [stimulated, setStimulated] = useState(false);

    // Particules de signal
    const [signals, setSignals] = useState([]);

    const triggerImpulse = () => {
        setStimulated(true);
        // Créer un nouveau signal qui part du corps cellulaire
        setSignals(prev => [...prev, { x: -4, active: true, id: Date.now() }]);
        setTimeout(() => setStimulated(false), 200);
    };

    useFrame((state, delta) => {
        setSignals(prev => prev.map(s => ({
            ...s,
            x: s.x + delta * 5 // Vitesse propagation
        })).filter(s => s.x < 5)); // Supprimer quand sort de l'axone
    });

    return (
        <group>
            <Html position={[-4.5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🧠 Influx Nerveux</h3>
                    <div className="space-y-4">
                        <button
                            onMouseDown={triggerImpulse}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-xl active:scale-95 transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                        >
                            ⚡ STIMULER
                        </button>
                        <div className="text-xs text-gray-400 text-center">
                            Cliquez pour envoyer un potentiel d'action
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.5} color="white">NEURONE & SYNAPSE</Text>

            {/* Corps Cellulaire (Soma) */}
            <group position={[-4, 0, 0]}>
                <mesh>
                    <dodecahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#A78BFA" roughness={0.3} />
                </mesh>
                <Text position={[0, 0, 1.6]} fontSize={0.3}>Soma</Text>

                {/* Dendrites */}
                {[...Array(8)].map((_, i) => (
                    <mesh key={i} position={[Math.cos(i) * 1.8, Math.sin(i) * 1.8, 0]} rotation={[0, 0, i]}>
                        <cylinderGeometry args={[0.05, 0.2, 1]} />
                        <meshStandardMaterial color="#8B5CF6" />
                    </mesh>
                ))}
            </group>

            {/* Axone (Tube) */}
            <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 8, 16]} />
                <meshStandardMaterial color="#DDD6FE" opacity={0.5} transparent />
            </mesh>

            {/* Myéline (Segments) */}
            {[...Array(5)].map((_, i) => (
                <mesh key={`myelin-${i}`} position={[-2.5 + i * 1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <capsuleGeometry args={[0.4, 1, 4, 8]} />
                    <meshStandardMaterial color="#FEF3C7" />
                </mesh>
            ))}

            {/* Signaux électriques */}
            {signals.map(s => (
                <group key={s.id} position={[s.x, 0, 0]}>
                    <pointLight color="#FFFF00" distance={3} intensity={2} />
                    <mesh>
                        <sphereGeometry args={[0.2]} />
                        <meshBasicMaterial color="#FFFF00" />
                    </mesh>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <ringGeometry args={[0.3, 0.4, 16]} />
                        <meshBasicMaterial color="#FFFF00" side={THREE.DoubleSide} transparent opacity={0.5} />
                    </mesh>
                </group>
            ))}

            {/* Terminaison Synaptique */}
            <group position={[5, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.8]} />
                    <meshStandardMaterial color="#F472B6" />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.3}>Synapse</Text>

                {/* Neurotransmetteurs libérés si signal arrive au bout */}
                {signals.some(s => s.x > 4.5) && (
                    <group>
                        {[...Array(10)].map((_, i) => (
                            <mesh key={i} position={[0.5 + Math.random(), (Math.random() - 0.5), (Math.random() - 0.5)]}>
                                <sphereGeometry args={[0.05]} />
                                <meshBasicMaterial color="red" />
                            </mesh>
                        ))}
                    </group>
                )}
            </group>
        </group>
    );
}
