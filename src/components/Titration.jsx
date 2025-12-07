import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export function Titration() {
    const [volumeDelivered, setVolumeDelivered] = useState(0);
    const [color, setColor] = useState(new THREE.Color('#FFFF00')); // Départ Jaune (Acide)

    // Equivalent point around 10ml
    const equivalencePoint = 10;

    const dropRef = useRef();
    const liquidRef = useRef();

    useFrame((state) => {
        // Animation de la goutte
        if (dropRef.current) {
            const time = state.clock.getElapsedTime();
            // Goutte qui tombe périodiquement
            const dropY = 2 - (time * 2 % 3.5);
            dropRef.current.position.y = dropY > -1.5 ? dropY : 2;

            // Simuler l'ajout de volume (fictif pour l'animation automatique)
            // Dans une vraie app interactive, ce serait sur clic utilisateur
            const newVol = (time * 0.5) % 20; // 0 à 20ml en boucle

            // Changement de couleur (BBT: Jaune -> Vert -> Bleu)
            // Zone de virage autour de 10
            if (newVol < equivalencePoint - 1) {
                liquidRef.current.material.color.lerp(new THREE.Color('#FFFF00'), 0.1); // Jaune
            } else if (newVol > equivalencePoint + 1) {
                liquidRef.current.material.color.lerp(new THREE.Color('#3B82F6'), 0.1); // Bleu
            } else {
                liquidRef.current.material.color.lerp(new THREE.Color('#10B981'), 0.1); // Vert (Equivalence)
            }

            // Mise à jour du texte (volume) via ref si possible, ou state throttle 
            // Ici on simplifie visuellement
        }
    });

    return (
        <group>
            <Text position={[0, 4, 0]} fontSize={0.5} color="white">DOSAGE ACIDE-BASE (Titrage)</Text>

            {/* Burette (Haut) */}
            <group position={[0, 2.5, 0]}>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 3, 16]} />
                    <meshStandardMaterial color="#E5E7EB" transparent opacity={0.3} />
                </mesh>
                {/* Liquide Titrant (Base - Bleu ou Incolore) */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.18, 0.18, 2, 16]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
                </mesh>
                <Text position={[0.8, 0, 0]} fontSize={0.3} color="#3B82F6">Base (Titrant)</Text>
            </group>

            {/* Robinet */}
            <mesh position={[0, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.1, 0.1, 0.6, 8]} />
                <meshStandardMaterial color="#4B5563" />
            </mesh>

            {/* Goutte qui tombe */}
            <mesh ref={dropRef} position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.1, 8, 8]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>

            {/* Bécher (Bas) */}
            <group position={[0, -2, 0]}>
                <mesh>
                    <cylinderGeometry args={[1, 0.8, 2, 32]} />
                    <meshStandardMaterial color="#E5E7EB" transparent opacity={0.2} side={THREE.DoubleSide} />
                </mesh>

                {/* Soluté Titré (Acide + Indicateur) */}
                <mesh ref={liquidRef} position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.9, 0.75, 1, 32]} />
                    <meshStandardMaterial color="#FFFF00" transparent opacity={0.8} /> {/* Couleur dynamique */}
                </mesh>
                <Text position={[-1.5, 0, 0]} fontSize={0.3} color="#FFFF00">Acide (Titré)</Text>
            </group>

            {/* Légende Indicateur Coloré */}
            <group position={[3, 0, 0]}>
                <Text position={[0, 1, 0]} fontSize={0.3} color="white">Indicateur (BBT)</Text>
                <group position={[0, 0.5, 0]}>
                    <mesh position={[-0.5, 0, 0]}><sphereGeometry args={[0.2]} /><meshStandardMaterial color="#FFFF00" /></mesh>
                    <Text position={[0.2, 0, 0]} fontSize={0.25} color="#FFFF00">Acide</Text>
                </group>
                <group position={[0, 0, 0]}>
                    <mesh position={[-0.5, 0, 0]}><sphereGeometry args={[0.2]} /><meshStandardMaterial color="#10B981" /></mesh>
                    <Text position={[0.2, 0, 0]} fontSize={0.25} color="#10B981">Neutre</Text>
                </group>
                <group position={[0, -0.5, 0]}>
                    <mesh position={[-0.5, 0, 0]}><sphereGeometry args={[0.2]} /><meshStandardMaterial color="#3B82F6" /></mesh>
                    <Text position={[0.2, 0, 0]} fontSize={0.25} color="#3B82F6">Basique</Text>
                </group>
            </group>

            {/* Agitateur Magnétique */}
            <group position={[0, -3.2, 0]}>
                <mesh>
                    <boxGeometry args={[2.5, 0.4, 2.5]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[0, -0.5, 0]} fontSize={0.2} color="gray">Agitateur Magnétique</Text>
            </group>
        </group>
    );
}
