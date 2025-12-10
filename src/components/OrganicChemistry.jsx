import { Text, Html } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function OrganicChemistry() {
    const [molecule, setMolecule] = useState('methane'); // methane, ethane, ethanol, propane

    // Définitions molécules (Atomes et Liaisons)
    const MOLECULES = {
        methane: {
            name: "Méthane (CH₄)",
            family: "Alcane",
            atoms: [
                { el: 'C', pos: [0, 0, 0], color: 'black', size: 0.6 },
                { el: 'H', pos: [1, 1, 1], color: 'white', size: 0.3 },
                { el: 'H', pos: [-1, -1, 1], color: 'white', size: 0.3 },
                { el: 'H', pos: [1, -1, -1], color: 'white', size: 0.3 },
                { el: 'H', pos: [-1, 1, -1], color: 'white', size: 0.3 },
            ]
        },
        ethane: {
            name: "Éthane (C₂H₆)",
            family: "Alcane",
            atoms: [
                { el: 'C', pos: [-0.8, 0, 0], color: 'black', size: 0.6 },
                { el: 'C', pos: [0.8, 0, 0], color: 'black', size: 0.6 },
                { el: 'H', pos: [-1.4, 1, 0], color: 'white', size: 0.3 },
                { el: 'H', pos: [-1.4, -0.5, 0.9], color: 'white', size: 0.3 },
                { el: 'H', pos: [-1.4, -0.5, -0.9], color: 'white', size: 0.3 },
                { el: 'H', pos: [1.4, 1, 0], color: 'white', size: 0.3 },
                { el: 'H', pos: [1.4, -0.5, 0.9], color: 'white', size: 0.3 },
                { el: 'H', pos: [1.4, -0.5, -0.9], color: 'white', size: 0.3 },
            ]
        },
        ethanol: {
            name: "Éthanol (C₂H₅OH)",
            family: "Alcool",
            atoms: [
                { el: 'C', pos: [-0.8, 0, 0], color: 'black', size: 0.6 }, // C1
                { el: 'C', pos: [0.8, 0, 0], color: 'black', size: 0.6 },  // C2
                { el: 'O', pos: [1.8, 0.8, 0], color: 'red', size: 0.5 },    // O
                { el: 'H', pos: [2.5, 0.5, 0.5], color: 'white', size: 0.3 },// H du OH
                // H sur C1
                { el: 'H', pos: [-1.4, 1, 0], color: 'white', size: 0.3 },
                { el: 'H', pos: [-1.4, -0.5, 0.9], color: 'white', size: 0.3 },
                { el: 'H', pos: [-1.4, -0.5, -0.9], color: 'white', size: 0.3 },
                // H sur C2
                { el: 'H', pos: [0.8, -1, 0], color: 'white', size: 0.3 },
                { el: 'H', pos: [0.8, 0.5, 1], color: 'white', size: 0.3 },
            ]
        }
    };

    // Génération automatique des liaisons (distance seuil)
    const bonds = useMemo(() => {
        const currentAtoms = MOLECULES[molecule].atoms;
        const b = [];
        for (let i = 0; i < currentAtoms.length; i++) {
            for (let j = i + 1; j < currentAtoms.length; j++) {
                const p1 = new THREE.Vector3(...currentAtoms[i].pos);
                const p2 = new THREE.Vector3(...currentAtoms[j].pos);
                const dist = p1.distanceTo(p2);
                if (dist < 1.8) { // Seuil liaison
                    b.push({ start: p1, end: p2 });
                }
            }
        }
        return b;
    }, [molecule]);

    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <group>
            <Html position={[-4.5, 2, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[250px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">⚗️ Chimie Organique</h3>
                    <div className="space-y-2">
                        {Object.keys(MOLECULES).map(k => (
                            <button
                                key={k}
                                onClick={() => setMolecule(k)}
                                className={`w-full py-2 rounded font-bold text-sm ${molecule === k ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                            >
                                {MOLECULES[k].name}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 text-xs text-gray-400 border-t border-gray-700 pt-2">
                        Famille : <span className="text-purple-400 font-bold">{MOLECULES[molecule].family}</span>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">{MOLECULES[molecule].name}</Text>

            <group ref={groupRef} scale={[1.2, 1.2, 1.2]}>
                {/* Atomes */}
                {MOLECULES[molecule].atoms.map((atom, i) => (
                    <mesh key={i} position={atom.pos}>
                        <sphereGeometry args={[atom.size, 32, 32]} />
                        <meshStandardMaterial color={atom.color} roughness={0.3} metalness={0.2} />
                    </mesh>
                ))}

                {/* Liaisons */}
                {bonds.map((bond, i) => {
                    const start = bond.start;
                    const end = bond.end;
                    const mid = start.clone().add(end).multiplyScalar(0.5);
                    const length = start.distanceTo(end);

                    // Orientation
                    const direction = end.clone().sub(start).normalize();
                    const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

                    return (
                        <mesh key={`bond-${i}`} position={mid} quaternion={quaternion}>
                            <cylinderGeometry args={[0.1, 0.1, length, 8]} />
                            <meshStandardMaterial color="#9CA3AF" />
                        </mesh>
                    );
                })}
            </group>

            <Text position={[4, -2, 0]} fontSize={0.2} color="gray">
                Noir: Carbone | Blanc: Hydrogène | Rouge: Oxygène
            </Text>
        </group>
    );
}
