import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function DNAReplication() {
    const [progress, setProgress] = useState(0); // 0 à 100%
    const [speed, setSpeed] = useState(0.5);

    // Génération des bases (A, T, C, G)
    const bases = useMemo(() => {
        const seq = [];
        for (let i = 0; i < 40; i++) {
            const type = Math.floor(Math.random() * 4); // 0:A, 1:T, 2:C, 3:G
            seq.push(type);
        }
        return seq;
    }, []);

    // Couleurs : A=Rouge, T=Bleu, C=Vert, G=Jaune
    const colors = ['#EF4444', '#3B82F6', '#22C55E', '#EAB308'];
    const names = ['A', 'T', 'C', 'G'];
    const complements = [1, 0, 3, 2]; // A<->T, C<->G

    const groupRef = useRef();

    useFrame((state, delta) => {
        setProgress(p => Math.min(100, p + delta * speed * 5));

        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group>
            {/* UI */}
            <Html position={[-4.5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🧬 Réplication ADN</h3>

                    <div className="space-y-4">
                        {/* Progression */}
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Progression</span>
                                <span className="text-cyan-400">{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded overflow-hidden">
                                <div className="bg-cyan-500 h-full transition-all duration-100" style={{ width: `${progress}%` }} />
                            </div>
                        </div>

                        {/* Vitesse */}
                        <div>
                            <label className="text-xs text-gray-400">Vitesse Enzyme</label>
                            <input type="range" min="0" max="2" step="0.1" value={speed} onChange={e => setSpeed(Number(e.target.value))} className="w-full accent-purple-500" />
                        </div>

                        <div className="flex gap-2">
                            <button onClick={() => setProgress(0)} className="flex-1 py-2 bg-gray-600 rounded text-sm hover:bg-gray-500">🔄 Redémarrer</button>
                        </div>

                        {/* Légende */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded-full"></div> A (Adénine)</div>
                            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> T (Thymine)</div>
                            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-full"></div> C (Cytosine)</div>
                            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-500 rounded-full"></div> G (Guanine)</div>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">RÉPLICATION SEMI-CONSERVATIVE</Text>

            <group ref={groupRef}>
                {bases.map((baseIdx, i) => {
                    // Position verticale
                    const y = (i - 20) * 0.3;
                    const angle = i * 0.5;

                    // État de réplication pour cette paire
                    // L'ouverture se fait du bas (y négatif) vers le haut (y positif) ou inversement.
                    // Disons que l'enzyme monte.
                    // Index de séparation
                    const splitIndex = (progress / 100) * 40;

                    // Si i < splitIndex, la paire est ouverte
                    const isOpen = i < splitIndex;

                    return (
                        <group key={i} position={[0, y, 0]} rotation={[0, angle, 0]}>
                            {/* Brin Gauche (Original 1) */}
                            <group position={[isOpen ? -1.5 : -0.5, 0, 0]}>
                                <mesh>
                                    <sphereGeometry args={[0.15, 8, 8]} />
                                    <meshStandardMaterial color={colors[baseIdx]} />
                                </mesh>
                                <Text position={[0, 0, 0]} fontSize={0.1} color="black">{names[baseIdx]}</Text>
                            </group>

                            {/* Brin Droit (Original 2) */}
                            <group position={[isOpen ? 1.5 : 0.5, 0, 0]}>
                                <mesh>
                                    <sphereGeometry args={[0.15, 8, 8]} />
                                    <meshStandardMaterial color={colors[complements[baseIdx]]} />
                                </mesh>
                                <Text position={[0, 0, 0]} fontSize={0.1} color="black">{names[complements[baseIdx]]}</Text>
                            </group>

                            {/* Nouvelles Bases (Arrivent si ouvert) */}
                            {isOpen && (
                                <>
                                    {/* Nouveau brin complémentaire à Gauche */}
                                    <group position={[-0.5, 0, 0]}> {/* Se colle au brin gauche original qui est à -1.5 ... Attends, la logique visuelle : */}
                                        {/* Simplification :
                                            Si ouvert :
                                            Original Gauche est à -1.5
                                            Nouveau Droit (complémentaire) vient se coller à -0.5
                                         */}
                                        <mesh position={[-0.4, 0, 0]} scale={[0.8, 0.8, 0.8]}> {/* position relative dans le group parent "isOpen" ? Non, le group parent est centré */}
                                            {/* Utilisons des coordonnées absolues dans le repère de la paire */}
                                        </mesh>
                                    </group>

                                    {/* Nouveau brin complémentaire à Gauche (s'attache à l'original gauche déplacé à -1.5) */}
                                    <mesh position={[-1.1, 0, 0]}>
                                        <sphereGeometry args={[0.15, 8, 8]} />
                                        <meshStandardMaterial color={colors[complements[baseIdx]]} emissive={colors[complements[baseIdx]]} emissiveIntensity={0.5} />
                                    </mesh>

                                    {/* Nouveau brin complémentaire à Droite (s'attache à l'original droite déplacé à +1.5) */}
                                    <mesh position={[1.1, 0, 0]}>
                                        <sphereGeometry args={[0.15, 8, 8]} />
                                        <meshStandardMaterial color={colors[baseIdx]} emissive={colors[baseIdx]} emissiveIntensity={0.5} />
                                    </mesh>
                                </>
                            )}

                            {/* Liaison hydrogène (si fermé) */}
                            {!isOpen && (
                                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                                    <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                                    <meshStandardMaterial color="white" opacity={0.5} transparent />
                                </mesh>
                            )}
                        </group>
                    );
                })}

                {/* Enzyme Hélicase (Cône qui monte) */}
                <mesh position={[0, (progress / 100 * 40 - 20) * 0.3, 0]} rotation={[Math.PI, 0, 0]}>
                    <coneGeometry args={[1, 1.5, 16]} />
                    <meshStandardMaterial color="#F472B6" transparent opacity={0.5} />
                </mesh>
                <Text position={[1.5, (progress / 100 * 40 - 20) * 0.3, 0]} fontSize={0.2} color="#F472B6">Hélicase</Text>
            </group>
        </group>
    );
}
