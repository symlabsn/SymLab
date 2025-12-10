import { Text, Html } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NuclearInteraction() {
    const [mode, setMode] = useState('fission'); // fission, fusion
    const [triggered, setTriggered] = useState(false);

    // Particules
    const [particles, setParticles] = useState([]);

    const reset = () => {
        setTriggered(false);
        setParticles([]);
    };

    const trigger = () => {
        if (triggered) { reset(); return; }
        setTriggered(true);

        if (mode === 'fission') {
            // Lancer un neutron
            setParticles([{
                type: 'neutron', pos: new THREE.Vector3(-4, 0, 0), vel: new THREE.Vector3(0.1, 0, 0), id: 'n-init'
            }]);
        } else {
            // Fusion: 2 Deutériums foncent l'un sur l'autre
            setParticles([
                { type: 'deuterium', pos: new THREE.Vector3(-3, 0, 0), vel: new THREE.Vector3(0.05, 0, 0), id: 'd1' },
                { type: 'deuterium', pos: new THREE.Vector3(3, 0, 0), vel: new THREE.Vector3(-0.05, 0, 0), id: 'd2' }
            ]);
        }
    };

    useFrame(() => {
        if (!triggered) return;

        // Update physique particules
        setParticles(prev => {
            const next = [];
            let reactionOccurred = false;

            prev.forEach(p => {
                // Mouvement
                const newPos = p.pos.clone().add(p.vel);

                // Collisions
                if (mode === 'fission' && p.type === 'neutron' && newPos.distanceTo(new THREE.Vector3(0, 0, 0)) < 0.8 && !reactionOccurred) {
                    // Impact avec Uranium (fixe à 0,0,0)
                    reactionOccurred = true;
                    // Explosion !
                    // Création produits fission (Ba, Kr, 3 neutrons)
                    next.push({ type: 'Ba', pos: new THREE.Vector3(0, 0, 0), vel: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, 0).normalize().multiplyScalar(0.05), id: 'Ba' });
                    next.push({ type: 'Kr', pos: new THREE.Vector3(0, 0, 0), vel: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, 0).normalize().multiplyScalar(0.05), id: 'Kr' });
                    for (let i = 0; i < 3; i++) next.push({ type: 'neutron', pos: new THREE.Vector3(0, 0, 0), vel: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, 0).normalize().multiplyScalar(0.15), id: `n-${i}` });
                    // Flash énergie ?
                } else if (mode === 'fusion' && p.type === 'deuterium' && newPos.distanceTo(new THREE.Vector3(0, 0, 0)) < 0.2) {
                    // Fusion au centre
                    if (!reactionOccurred) { // Eviter doublons
                        reactionOccurred = true; // On flag pour que l'autre deutérium soit aussi consommé
                        next.push({ type: 'Helium', pos: new THREE.Vector3(0, 0, 0), vel: new THREE.Vector3(0, 0, 0), id: 'He' });
                        next.push({ type: 'neutron', pos: new THREE.Vector3(0, 0, 0), vel: new THREE.Vector3(0, 1, 0).multiplyScalar(0.2), id: 'n-fus' });
                    }
                } else {
                    // Sinon continue
                    if (!reactionOccurred || (p.type !== 'neutron' && p.type !== 'deuterium')) {
                        // Si réaction, les réactifs disparaissent, donc on ne les push pas dans next
                        // Logique un peu simpliste ici pour array.map
                        if (mode === 'fusion' && p.type === 'deuterium' && newPos.distanceTo(new THREE.Vector3(0, 0, 0)) < 0.5) {
                            // Ils vont fusionner, ne pas conserver
                        } else {
                            next.push({ ...p, pos: newPos });
                        }
                    }
                }
            });

            // Si réaction, on a déjà ajouté les produits dans next
            return next;
        });
    });

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚛️ Nucléaire</h3>

                    <div className="space-y-4">
                        <div className="flex bg-gray-700 rounded p-1">
                            <button onClick={() => { setMode('fission'); reset(); }} className={`flex-1 py-1 rounded text-sm ${mode === 'fission' ? 'bg-blue-600' : 'hover:bg-gray-600'}`}>Fission (U235)</button>
                            <button onClick={() => { setMode('fusion'); reset(); }} className={`flex-1 py-1 rounded text-sm ${mode === 'fusion' ? 'bg-orange-600' : 'hover:bg-gray-600'}`}>Fusion (H)</button>
                        </div>

                        <div className="text-xs text-gray-400 p-2 border border-gray-600 rounded">
                            {mode === 'fission'
                                ? "Un neutron percute un noyau d'Uranium lourd, le brisant en noyaux légers + énergie + neutrons (réaction en chaîne)."
                                : "Deux noyaux légers (H) se combinent à haute température pour former de l'Hélium + énergie (Soleil)."}
                        </div>

                        <button onClick={trigger} className={`w-full py-2 rounded font-bold ${triggered ? 'bg-red-600' : 'bg-green-600'}`}>
                            {triggered ? 'Reset' : '🔥 DÉCLENCHER'}
                        </button>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">{mode === 'fission' ? "FISSION NUCLÉAIRE" : "FUSION NUCLÉAIRE"}</Text>

            {/* Cibles Initiales */}
            {!triggered && mode === 'fission' && (
                <group position={[0, 0, 0]}>
                    <mesh>
                        <sphereGeometry args={[0.8, 32, 32]} />
                        <meshStandardMaterial color="#4B5563" roughness={0.5} />
                    </mesh>
                    <Text position={[0, 0, 1]} fontSize={0.3}>U-235</Text>
                </group>
            )}

            {/* Particules dynamiques */}
            {particles.map(p => {
                let color = 'white';
                let size = 0.1;
                if (p.type === 'neutron') { color = 'black'; size = 0.1; }
                if (p.type === 'deuterium') { color = '#3B82F6'; size = 0.2; }
                if (p.type === 'Helium') { color = '#F59E0B'; size = 0.3; }
                if (p.type === 'Ba' || p.type === 'Kr') { color = '#9CA3AF'; size = 0.5; }

                return (
                    <mesh key={p.id} position={p.pos}>
                        <sphereGeometry args={[size]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
                    </mesh>
                )
            })}
        </group>
    );
}
