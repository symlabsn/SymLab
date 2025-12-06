import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export function MagneticField() {
    // Groupe pour la rotation de la Terre
    const earthRef = useRef();

    // Animation de rotation
    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.002;
        }
    });

    // Lignes de champ magnétique (Courbes de Bézier 3D)
    const renderFieldLines = () => {
        const lines = [];
        const numLines = 12;
        const radius = 2.5;

        for (let i = 0; i < numLines; i++) {
            const angle = (i / numLines) * Math.PI * 2;

            // Points de contrôle pour la courbe (Sort du Nord, rentre au Sud)
            // Attention: Magnétiquement, le Nord géo est un Sud magnétique !
            // Les lignes sortent du Pôle Nord magnétique (Sud géo) et rentrent au Pôle Sud magnétique (Nord géo).
            // Mais pour simplifier la visualisation "scolaire" : Sort du Nord, rentre au Sud.

            // On fait des courbes qui partent du haut (0, 2, 0) vers le bas (0, -2, 0) en s'écartant
            const curve = new THREE.CubicBezierCurve3(
                new THREE.Vector3(0, 1.8, 0),                 // Pôle Nord (Départ)
                new THREE.Vector3(Math.cos(angle) * 4, 1, Math.sin(angle) * 4),   // Contrôle 1 (Large)
                new THREE.Vector3(Math.cos(angle) * 4, -1, Math.sin(angle) * 4),  // Contrôle 2 (Large)
                new THREE.Vector3(0, -1.8, 0)                 // Pôle Sud (Arrivée)
            );

            const points = curve.getPoints(50);

            // Convertir Vector3 en tableau [x, y, z] pour <line> (mais ici on utilise des petits segments ou tube)
            // Pour simplifier avec react-three-fiber, on peut juste dessiner des tubes fins ou faire une Line

            lines.push(
                <mesh key={`line-${i}`} rotation={[0, 0, 0]}>
                    <tubeGeometry args={[curve, 64, 0.02, 8, false]} />
                    <meshStandardMaterial color="#00F5D4" transparent opacity={0.4} emissive="#00F5D4" emissiveIntensity={0.2} />
                </mesh>
            );

            // Flèches de direction sur les lignes
            lines.push(
                <mesh key={`arrow-${i}`} position={[Math.cos(angle) * 2.8, 0, Math.sin(angle) * 2.8]} rotation={[0, -angle, Math.PI / 2]}>
                    <coneGeometry args={[0.08, 0.3, 8]} />
                    <meshStandardMaterial color="#00F5D4" />
                </mesh>
            );
        }
        return lines;
    };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">CHAMP MAGNÉTIQUE TERRESTRE</Text>

            <group ref={earthRef}>
                {/* Terre */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color="#2563EB" metalness={0.1} roughness={0.8} />
                </mesh>

                {/* Continents (Simplifiés - quelques sphères vertes aplaties) */}
                <mesh position={[1.5, 0.5, 0.8]}>
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[-1.2, 0.2, 1]}>
                    <sphereGeometry args={[0.6, 16, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[0.5, -1, 1.5]}>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>

                {/* Axe de rotation */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 5, 8]} />
                    <meshStandardMaterial color="white" transparent opacity={0.3} />
                </mesh>
            </group>

            {/* Pôles Magnétiques (Barre aimantée virtuelle au centre) */}
            <group>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 2, 8]} />
                    <meshStandardMaterial color="#EF4444" transparent opacity={0.5} /> {/* Rouge (Nord) */}
                </mesh>
                <Text position={[0.5, 1.5, 0]} fontSize={0.4} color="#EF4444">N</Text>

                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 2, 8]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.5} /> {/* Bleu (Sud) */}
                </mesh>
                <Text position={[0.5, -1.5, 0]} fontSize={0.4} color="#3B82F6">S</Text>
            </group>

            {/* Lignes de champ */}
            {renderFieldLines()}

            {/* Boussole (Satellite) */}
            <group position={[3, 2, 0]} rotation={[0, 0, Math.PI / 6]}>
                <mesh>
                    <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Aiguille */}
                <group rotation={[0, 0, Math.PI / 2]}>
                    <mesh position={[0, 0.3, 0.06]}>
                        <boxGeometry args={[0.1, 0.6, 0.05]} />
                        <meshStandardMaterial color="#EF4444" /> {/* Nord Rouge */}
                    </mesh>
                    <mesh position={[0, -0.3, 0.06]}>
                        <boxGeometry args={[0.1, 0.6, 0.05]} />
                        <meshStandardMaterial color="white" /> {/* Sud Blanc */}
                    </mesh>
                </group>
                <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">Boussole</Text>
            </group>

            <Text position={[0, -3, 0]} fontSize={0.3} color="gray">
                Le Pôle Nord de la boussole est attiré par le Sud Magnétique (proche du Nord Géo)
            </Text>
        </group>
    );
}
