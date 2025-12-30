'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function Starfield() {
    const ref = useRef();
    const [positions, setPositions] = useMemo(() => {
        const pos = random.inSphere(new Float32Array(6000 * 3), { radius: 10 });
        return [pos, null];
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 50;
        ref.current.rotation.y -= delta / 65;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.012}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.2}
                />
            </Points>
        </group>
    );
}

function TechGrid() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[100, 100, 40, 40]} />
            <meshBasicMaterial
                color="#4FD1C5"
                wireframe
                transparent
                opacity={0.03}
            />
        </mesh>
    );
}

function FloatingCore() {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1.2, 64, 64]} position={[0, 0, -6]}>
                <MeshDistortMaterial
                    color="#A78BFA"
                    speed={2}
                    distort={0.3}
                    radius={1}
                    emissive="#A78BFA"
                    emissiveIntensity={0.1}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.6}
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

    return <pointLight ref={light} distance={8} intensity={1} color="#4FD1C5" transparent opacity={0.5} />;
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 5, 15]} />
                <ambientLight intensity={0.1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} color="#A78BFA" />

                <Starfield />
                <TechGrid />
                <FloatingCore />
                <MouseFollower />
            </Canvas>
            {/* Soft Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#050505] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,209,197,0.03)_0%,transparent_80%)]" />
        </div>
    );
}
