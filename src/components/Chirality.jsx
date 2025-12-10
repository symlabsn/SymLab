import { Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Molécule générique chirale (C avec 4 groupes différents)
function Molecule({ mirror = false, position }) {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    // Positions tétraédriques
    // C au centre
    // 1: Haut (0, 1, 0)
    // 2: Bas-Gauche-Avant (-sin, -cos, sin)
    // ...
    // Pour simplifier miroir : on inverse X pour tous les atomes

    const atoms = [
        { el: 'C', pos: [0, 0, 0], color: 'black', size: 0.5 },
        { el: 'A', pos: [0, 1, 0], color: 'red', size: 0.3 }, // Groupe 1
        { el: 'B', pos: [0.94, -0.33, 0], color: 'blue', size: 0.3 }, // Groupe 2
        { el: 'D', pos: [-0.47, -0.33, 0.81], color: 'green', size: 0.3 }, // Groupe 3
        { el: 'E', pos: [-0.47, -0.33, -0.81], color: 'yellow', size: 0.3 }, // Groupe 4
    ];

    return (
        <group ref={groupRef} position={position}>
            {atoms.map((a, i) => (
                <group key={i}>
                    <mesh position={[mirror ? -a.pos[0] : a.pos[0], a.pos[1], a.pos[2]]}>
                        <sphereGeometry args={[a.size, 32, 32]} />
                        <meshStandardMaterial color={a.color} />
                    </mesh>
                    {/* Liaisons vers C central (sauf pour C lui-même) */}
                    {i > 0 && (
                        <mesh
                            position={[
                                (mirror ? -a.pos[0] : a.pos[0]) / 2,
                                a.pos[1] / 2,
                                a.pos[2] / 2
                            ]}
                            rotation={[
                                0,
                                0, // Rotation complexe à calculer, on met des bâtons simples
                                0
                            ]}
                        // Astuce LookAt en frame ? ou cylinder from to
                        >
                            {/* Problème orientation cylinder. Utilisons ligne simples ou sphères allongées */}
                            <sphereGeometry args={[0.08]} />
                            {/* Simplification visu liaison */}
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
}

export function Chirality() {
    const [superpose, setSuperpose] = useState(false);

    return (
        <group>
            <Html position={[-4.5, 2.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-white/20 min-w-[260px] backdrop-blur-md select-none">
                    <h3 className="text-[#FCD34D] font-bold mb-3 text-center">👐 Chiralité</h3>
                    <div className="text-xs text-gray-300 mb-4 space-y-2">
                        <p>Deux molécules images l'une de l'autre dans un miroir.</p>
                        <p className="text-yellow-400 font-bold">Carbone Asymétrique (4 groupes différents)</p>
                    </div>
                    <button
                        onClick={() => setSuperpose(!superpose)}
                        className={`w-full py-2 rounded font-bold ${superpose ? 'bg-red-600' : 'bg-blue-600'}`}
                    >
                        {superpose ? 'Séparer' : 'Essayer de Superposer'}
                    </button>
                    {superpose && (
                        <div className="mt-2 text-center text-red-400 font-bold text-xs animate-pulse">
                            IMPOSSIBLE !
                        </div>
                    )}
                </div>
            </Html>

            <Text position={[0, 4, 0]} fontSize={0.5} color="white">STÉRÉOISOMÉRIE</Text>

            {/* Molécule Gauche (Originale) */}
            <Molecule position={superpose ? [-0.5, 0, 0] : [-3, 0, 0]} />

            {/* Miroir Plan */}
            <mesh position={[0, 0, -1]} rotation={[0, 0, 0]} visible={!superpose}>
                <planeGeometry args={[0.1, 5]} />
                <meshStandardMaterial color="white" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, 0, 0]} visible={!superpose}>
                <cylinderGeometry args={[0.02, 0.02, 4]} />
                <meshBasicMaterial color="gray" />
            </mesh>

            {/* Molécule Droite (Image Miroir) */}
            <Molecule mirror={true} position={superpose ? [0.5, 0, 0] : [3, 0, 0]} />

            <Text position={[-3, -2, 0]} fontSize={0.3} color="#60A5FA">Énantiomère S</Text>
            <Text position={[3, -2, 0]} fontSize={0.3} color="#F87171">Énantiomère R</Text>

        </group>
    );
}
