import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function EnzymeKinetics() {
    const [substrateCount, setSubstrateCount] = useState(20);
    const [enzymeCount, setEnzymeCount] = useState(3);
    const [productCount, setProductCount] = useState(0);
    const [running, setRunning] = useState(true);

    // Initialisation
    const entities = useRef([]); // { type: 'S'|'E'|'P'|'ES', pos: Vector3, vel: Vector3, timer: 0 }

    // Setup initial
    useMemo(() => {
        entities.current = [];
        // Enzymes (Gros Rouges)
        for (let i = 0; i < enzymeCount; i++) {
            entities.current.push({
                type: 'E',
                pos: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, 0),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0),
                id: `E-${i}`
            });
        }
        // Substrats (Petits Bleus)
        for (let i = 0; i < substrateCount; i++) {
            entities.current.push({
                type: 'S',
                pos: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, 0),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, 0),
                id: `S-${i}`
            });
        }
    }, []); // Initial run only for simplicity, reset needed for updates

    // Fonction reset manuelle pour appliquer les sliders
    const reset = () => {
        setProductCount(0);
        entities.current = [];
        for (let i = 0; i < enzymeCount; i++) {
            entities.current.push({
                type: 'E',
                pos: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, 0),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0),
                id: `E-${i}`
            });
        }
        for (let i = 0; i < substrateCount; i++) {
            entities.current.push({
                type: 'S',
                pos: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, 0),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, 0),
                id: `S-${i}`
            });
        }
    };

    useFrame((state, delta) => {
        if (!running) return;

        // Physique simple
        entities.current.forEach(e => {
            // Mouvement
            e.pos.add(e.vel);
            // Rebond murs
            if (Math.abs(e.pos.x) > 4.5) e.vel.x *= -1;
            if (Math.abs(e.pos.y) > 2.5) e.vel.y *= -1;

            // Logique Complexe Enzyme-Substrat
            if (e.type === 'E') {
                // Chercher substrat proche
                const nearbyS = entities.current.find(s => s.type === 'S' && s.pos.distanceTo(e.pos) < 0.5);
                if (nearbyS) {
                    // Formation complexe ES
                    e.type = 'ES';
                    e.timer = 1.0; // Temps de catalyse (secondes)
                    // Le substrat disparait (absorbé)
                    nearbyS.type = 'DEAD';
                }
            } else if (e.type === 'ES') {
                e.timer -= delta;
                if (e.timer <= 0) {
                    // Relâchement Produit
                    e.type = 'E';
                    // Créer un Produit (P)
                    entities.current.push({
                        type: 'P',
                        pos: e.pos.clone().add(new THREE.Vector3(0.5, 0, 0)), // Ejecté
                        vel: new THREE.Vector3((Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, 0),
                        id: `P-${Date.now()}`
                    });
                    setProductCount(p => p + 1);
                }
            }
        });

        // Nettoyage morts
        entities.current = entities.current.filter(e => e.type !== 'DEAD');
    });

    // Rendu visuel via React State forceUpdate ou ref mapping ?
    // Pour perf, on fait un mapping direct dans le render mais sans state react fréquent
    // On utilise un 'tick' pour forcer le rendu react si on veut voir bouger, 
    // OU on utilise des refs pour les meshs.
    // Ici on a besoin de créer/détruire des meshs (P apparait, S disparait).
    // React doit être au courant.
    // Solution simple : useState pour la liste à afficher, MAIS useFrame pour la physique.
    // Compromis : on utilise un state 'frame' juste pour rafraichir.
    const [tick, setTick] = useState(0);
    useFrame(() => setTick(t => t + 1)); // Force refresh (attention perfs)

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚙️ Cinétique Enzymatique</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between text-xs">
                            <span className="text-red-400 font-bold">Enzymes (E) : {enzymeCount}</span>
                            <span className="text-blue-400 font-bold">Substrats (S) : {entities.current.filter(e => e.type === 'S').length}</span>
                        </div>
                        <div className="bg-gray-800 p-2 rounded text-center">
                            <div className="text-xs text-green-400">Produits (P)</div>
                            <div className="text-2xl font-bold text-white">{productCount}</div>
                        </div>

                        <div className="border-t border-gray-700 pt-2 space-y-2">
                            <div>
                                <label className="text-xs text-gray-400">Nombre Enzymes</label>
                                <input type="range" min="1" max="10" value={enzymeCount} onChange={e => setEnzymeCount(Number(e.target.value))} className="w-full accent-red-500" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Nombre Substrats initiale</label>
                                <input type="range" min="10" max="100" value={substrateCount} onChange={e => setSubstrateCount(Number(e.target.value))} className="w-full accent-blue-500" />
                            </div>
                        </div>

                        <button onClick={reset} className="w-full py-2 bg-purple-600 rounded font-bold hover:bg-purple-500">🔄 Lancer Simulation</button>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">E + S ⇌ ES → E + P</Text>

            {/* Zone de réaction */}
            <mesh position={[0, 0, 0]}>
                <planeGeometry args={[9, 5]} />
                <meshBasicMaterial color="black" transparent opacity={0.5} wireframe />
            </mesh>

            {entities.current.map((e) => {
                let color = 'white';
                let size = 0.2;
                let shape = 'sphere';

                if (e.type === 'E') { color = '#EF4444'; size = 0.4; shape = 'pacman'; } // Rouge
                if (e.type === 'S') { color = '#3B82F6'; size = 0.15; } // Bleu
                if (e.type === 'P') { color = '#10B981'; size = 0.15; shape = 'star'; } // Vert
                if (e.type === 'ES') { color = '#F59E0B'; size = 0.45; } // Orange (Complexe)

                return (
                    <mesh key={e.id} position={e.pos}>
                        {shape === 'pacman' || e.type === 'ES' ? (
                            <sphereGeometry args={[size, 16, 16, 0, e.type === 'E' ? 5 : 6.3]} />
                        ) : (
                            <sphereGeometry args={[size, 8, 8]} />
                        )}
                        <meshStandardMaterial color={color} />
                    </mesh>
                );
            })}
        </group>
    );
}
