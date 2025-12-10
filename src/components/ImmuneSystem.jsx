import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ImmuneSystem({ type = 'infection' }) { // infection (general), hiv (specific)
    const [virusCount, setVirusCount] = useState(20);
    const [defenderCount, setDefenderCount] = useState(3);
    const [health, setHealth] = useState(100);

    // Entités
    const entities = useRef([]);

    // Init
    useMemo(() => {
        const ents = [];
        // Virus
        for (let i = 0; i < virusCount; i++) {
            ents.push({
                type: 'virus',
                pos: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, 0),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, 0),
                id: `v-${i}`
            });
        }
        // Défenseurs
        for (let i = 0; i < defenderCount; i++) {
            ents.push({
                type: 'defender', // Macrophage or T4
                pos: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, 0),
                vel: new THREE.Vector3((Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, 0),
                id: `d-${i}`
            });
        }
        entities.current = ents;
    }, [type]); // Reset on type change need manual reset logic but ok for mounting

    useFrame(() => {
        if (health <= 0) return;

        entities.current.forEach(e => {
            e.pos.add(e.vel);
            // Rebond
            if (Math.abs(e.pos.x) > 4.5) e.vel.x *= -1;
            if (Math.abs(e.pos.y) > 2.5) e.vel.y *= -1;

            // Interaction
            if (e.type === 'defender') {
                // Cherche virus proche
                const target = entities.current.find(v => v.type === 'virus' && v.pos.distanceTo(e.pos) < 0.6);
                if (target) {
                    if (type === 'hiv') {
                        // VIH attaque le défenseur (T4) !
                        if (Math.random() < 0.05) { e.type = 'infected'; e.vel.multiplyScalar(0); } // Le défenseur meurt/infecté
                    } else {
                        // Macrophage mange le virus
                        target.type = 'dead';
                    }
                }
            }
        });

        // Nettoyage morts
        entities.current = entities.current.filter(e => e.type !== 'dead');

        // Infection logic
        if (type === 'hiv') {
            const infected = entities.current.filter(e => e.type === 'infected').length;
            // Si infecté, produit nouveaux virus
            entities.current.forEach(e => {
                if (e.type === 'infected' && Math.random() < 0.01) {
                    entities.current.push({
                        type: 'virus', pos: e.pos.clone(), vel: new THREE.Vector3((Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, 0), id: `v-new-${Math.random()}`
                    });
                }
            });
            // Défenseurs diminuent
            if (infected > defenderCount / 2) setHealth(h => Math.max(0, h - 0.1));
        } else {
            // Infection classique : Virus se multiplient doucement si pas mangés
            if (Math.random() < 0.005 && entities.current.filter(e => e.type === 'virus').length < 50) {
                entities.current.push({
                    type: 'virus', pos: new THREE.Vector3(0, 0, 0), vel: new THREE.Vector3((Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, 0), id: `v-new-${Math.random()}`
                });
            }
            // Santé baisse si trop de virus
            if (entities.current.filter(v => v.type === 'virus').length > 10) setHealth(h => Math.max(0, h - 0.05));
        }
    });

    const [tick, setTick] = useState(0);
    useFrame(() => setTick(t => t + 1));

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">{type === 'hiv' ? "🦠 VIH vs T4" : "🛡️ Immunité"}</h3>

                    <div className="space-y-4">
                        <div className="bg-gray-800 p-2 rounded">
                            <div className="text-xs text-gray-400">Santé de l'Organisme</div>
                            <div className="w-full h-3 bg-red-900 rounded-full mt-1">
                                <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${health}%` }}></div>
                            </div>
                        </div>

                        <div className="flex justify-between text-xs">
                            <div className="text-blue-400">Défenseurs: {entities.current.filter(e => e.type === 'defender').length}</div>
                            <div className="text-red-400">Pathogènes: {entities.current.filter(e => e.type === 'virus').length}</div>
                        </div>

                        {type === 'hiv' && (
                            <div className="text-[10px] text-purple-400 mt-2">
                                Attention : Le VIH cible et détruit les défenseurs (T4) !
                            </div>
                        )}
                        {type === 'infection' && (
                            <div className="text-[10px] text-green-400 mt-2">
                                Les Macrophages (Bleus) mangent les Virus (Rouges).
                            </div>
                        )}

                        <button onClick={() => window.location.reload()} className="w-full py-2 bg-gray-700 rounded text-xs">Recharger</button>
                    </div>
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">{type === 'hiv' ? "LE CYCLE DU VIH" : "RÉPONSE IMMUNITAIRE"}</Text>

            {/* Arène */}
            <mesh>
                <planeGeometry args={[9, 5]} />
                <meshBasicMaterial color="#111827" wireframe transparent opacity={0.2} />
            </mesh>

            {entities.current.map(e => {
                let color = 'white';
                let size = 0.1;
                if (e.type === 'defender') { color = '#3B82F6'; size = 0.3; } // Macrophage/T4
                if (e.type === 'virus') { color = '#EF4444'; size = 0.1; } // Virus
                if (e.type === 'infected') { color = '#9333EA'; size = 0.3; } // Cellule infectée

                return (
                    <mesh key={e.id} position={e.pos}>
                        <sphereGeometry args={[size]} />
                        <meshStandardMaterial color={color} />
                    </mesh>
                );
            })}
        </group>
    );
}
