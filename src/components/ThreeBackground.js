'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField(props) {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00F5D4"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function FloatingShapes() {
    return (
        <>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[2, 1, -2]}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshStandardMaterial color="#7C3AED" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[-2, -1, -3]}>
                    <torusKnotGeometry args={[0.5, 0.2, 128, 16]} />
                    <meshStandardMaterial color="#F43F5E" wireframe transparent opacity={0.2} />
                </mesh>
            </Float>
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <ParticleField />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
