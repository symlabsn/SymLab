import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export function Diffraction() {
    const groupRef = useRef();

    // Animation des ondes
    useFrame((state) => {
        if (groupRef.current) {
            // Animation simple ? Ou juste shader material
            // Ici, on va faire bouger les anneaux
        }
    });



    return (
        <group ref={groupRef}>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DIFFRACTION PAR UNE FENTE</Text>

            {/* Source d'ondes planes (Avant la fente) */}
            <group position={[-2, 0, 0]}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <mesh key={`plane-${i}`} position={[-1 + i * 0.5, 0, 0]} rotation={[0, 0, 0]}>
                        <boxGeometry args={[0.05, 4, 0.1]} />
                        <meshStandardMaterial color="#00F5D4" transparent opacity={0.5} />
                    </mesh>
                ))}
                <Text position={[-1, -2.5, 0]} fontSize={0.3} color="#00F5D4">Onde Plane</Text>
            </group>

            {/* Obstacle avec fente */}
            <group position={[0.5, 0, 0]}>
                {/* Mur haut */}
                <mesh position={[0, 2.2, 0]}>
                    <boxGeometry args={[0.2, 4, 0.5]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Mur bas */}
                <mesh position={[0, -2.2, 0]}>
                    <boxGeometry args={[0.2, 4, 0.5]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                <Text position={[0.5, 3, 0]} fontSize={0.3} color="#4B5563">Obstacle</Text>
            </group>

            {/* Ondes diffractées (Après la fente) */}
            <group position={[0.6, 0, 0]}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <WaveRing key={`ring-${i}`} index={i} />
                ))}
                <Text position={[2, -2.5, 0]} fontSize={0.3} color="#FCD34D">Onde Diffractée (Circulaire)</Text>
            </group>

            <Text position={[0, -3.5, 0]} fontSize={0.3} color="white">θ = λ / a</Text>
        </group>
    );
}

function WaveRing({ index }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Expansion de l'onde
            const speed = 1.5;
            const maxScale = 5;
            const t = (state.clock.elapsedTime * speed + index * 0.5) % maxScale;

            // L'échelle augmente (onde qui s'éloigne)
            meshRef.current.scale.set(t, t, 1);

            // L'opacité diminue avec la distance
            const material = meshRef.current.material;
            if (material) {
                material.opacity = Math.max(0, 1 - t / maxScale);
            }
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            {/* Demi-cercle ou Arc pour montrer la direction vers la droite */}
            {/* On utilise un Torus partiel ou juste un Torus complet centré sur la fente */}
            {/* Ici Torus complet mais coupé ? Non, Torus simple */}
            <ringGeometry args={[0.9, 1.0, 32, 1, -Math.PI / 2, Math.PI]} />
            {/* args: innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength */}
            {/* RingGeometry est 2D. Rotation nécessaire si on veut le voir de face/dessus ? */}
            {/* Simulation3D camera is Perspective [5, 4, 5], looking at 0,0,0 usually. */}
            {/* Si on dessine à plat sur XY, RingGeometry est sur XY. */}
            <meshBasicMaterial color="#FCD34D" transparent side={THREE.DoubleSide} />
        </mesh>
    );
}
