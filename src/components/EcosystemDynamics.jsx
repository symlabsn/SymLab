import { Text, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function EcosystemDynamics() {
    const [rabbits, setRabbits] = useState(20);
    const [foxes, setFoxes] = useState(2);
    const [grass, setGrass] = useState(100);
    const [isPlaying, setIsPlaying] = useState(true);

    // Pour la visualisation, on garde une liste de positions
    const [entities, setEntities] = useState([]);

    // Simulation Loop (Lotka-Volterra simplifiée)
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setGrass(g => Math.min(200, g + 5)); // L'herbe repousse

            setRabbits(r => {
                const growth = r * 0.1; // Reproduction
                const death = (r * foxes) * 0.05; // Prédation
                return Math.max(2, Math.min(100, r + growth - death));
            });

            setFoxes(f => {
                const growth = (f * rabbits) * 0.01; // Manger lapins
                const death = f * 0.05; // Mort naturelle
                return Math.max(1, Math.min(20, f + growth - death));
            });

        }, 500);
        return () => clearInterval(interval);
    }, [isPlaying, rabbits, foxes]);

    // Recalcul des entités visuelles quand les nombres changent
    useEffect(() => {
        const newEntities = [];
        // Lapins (Blancs)
        for (let i = 0; i < Math.floor(rabbits); i++) {
            newEntities.push({ type: 'rabbit', x: (Math.random() - 0.5) * 10, z: (Math.random() - 0.5) * 10, color: 'white' });
        }
        // Renards (Oranges)
        for (let i = 0; i < Math.floor(foxes); i++) {
            newEntities.push({ type: 'fox', x: (Math.random() - 0.5) * 10, z: (Math.random() - 0.5) * 10, color: '#F97316' });
        }
        setEntities(newEntities);
    }, [Math.floor(rabbits), Math.floor(foxes)]); // Dépendance aux entiers

    return (
        <group>
            {/* Panneau de contrôle */}
            <Html position={[-5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[280px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">🌲 Dynamique des Populations</h3>

                    <div className="space-y-4">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 bg-green-900/50 rounded">
                                <div>🌿 Herbe</div>
                                <div className="text-lg font-bold text-green-400">{grass.toFixed(0)}%</div>
                            </div>
                            <div className="p-2 bg-gray-700/50 rounded">
                                <div>🐰 Lapins</div>
                                <div className="text-lg font-bold text-white">{rabbits.toFixed(0)}</div>
                            </div>
                            <div className="p-2 bg-orange-900/50 rounded">
                                <div>🦊 Renards</div>
                                <div className="text-lg font-bold text-orange-400">{foxes.toFixed(0)}</div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className={`flex-1 py-2 rounded font-bold ${isPlaying ? 'bg-red-600' : 'bg-green-600'}`}
                            >
                                {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                            </button>
                            <button
                                onClick={() => { setRabbits(20); setFoxes(2); setGrass(100); }}
                                className="flex-1 py-2 bg-gray-600 rounded font-bold"
                            >
                                🔄 Reset
                            </button>
                        </div>

                        <div className="text-xs text-gray-400 text-center italic">
                            Équilibre Lapins/Renards instable.<br />Si trop de renards, plus de lapins, puis les renards meurent de faim.
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, -5]} fontSize={0.6} color="white">
                ÉCOSYSTÈME
            </Text>

            {/* Terrain Herbe */}
            <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[14, 14]} />
                <meshStandardMaterial color="#166534" />
            </mesh>
            {/* Végétation dense si grass élevé */}
            {grass > 50 && (
                <group>
                    {[...Array(20)].map((_, i) => (
                        <mesh key={i} position={[(Math.random() - 0.5) * 12, 0, (Math.random() - 0.5) * 12]}>
                            <coneGeometry args={[0.2, 0.5, 5]} />
                            <meshStandardMaterial color="#22C55E" />
                        </mesh>
                    ))}
                </group>
            )}

            {/* Entités Mobiles */}
            <group>
                {entities.map((e, i) => (
                    <mesh key={i} position={[e.x, 0, e.z]}>
                        <sphereGeometry args={[e.type === 'rabbit' ? 0.2 : 0.35]} />
                        <meshStandardMaterial color={e.color} />
                    </mesh>
                    /* Note: Idéalement on utiliserait des modèles 3D low poly ou InstancedMesh pour perfs, mais sphere/cube suffit pour la démo conceptuelle */
                ))}
            </group>
        </group>
    );
}
