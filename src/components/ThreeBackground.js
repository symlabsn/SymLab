'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function Starfield() {
    const ref = useRef();
    const [positions, setPositions] = useMemo(() => {
        const pos = random.inSphere(new Float32Array(8000 * 3), { radius: 10 });
        return [pos, null];
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 30;
        ref.current.rotation.y -= delta / 45;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

function TechGrid() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[100, 100, 50, 50]} />
            <meshBasicMaterial
                color="#00F5D4"
                wireframe
                transparent
                opacity={0.05}
            />
        </mesh>
    );
}

function FloatingCore() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1.5, 64, 64]} position={[0, 0, -5]}>
                <MeshDistortMaterial
                    color="#7C3AED"
                    speed={3}
                    distort={0.4}
                    radius={1}
                    emissive="#7C3AED"
                    emissiveIntensity={0.2}
                    roughness={0}
                    metalness={1}
                />
            </Sphere>
        </Float>
    );
}

function MouseFollower() {
    const { viewport, mouse } = useThree();
    const light = useRef();

    useFrame(() => {
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
        light.current.position.set(x, y, 2);
    });

    return <pointLight ref={light} distance={10} intensity={2} color="#00F5D4" />;
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
                <color attach="background" args={['#000000']} />
                <fog attach="fog" args={['#000000', 5, 15]} />
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#7C3AED" />

                <Starfield />
                <TechGrid />
                <FloatingCore />
                <MouseFollower />
            </Canvas>
            {/* Visual Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,212,0.05)_0%,transparent_70%)]" />
        </div>
    );
}
