'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

// Animated starfield with parallax
function Starfield() {
    const ref = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const positions = useMemo(() => {
        const count = isMobile ? 3000 : 5000;
        return random.inSphere(new Float32Array(count * 3), { radius: 12 });
    }, [isMobile]);

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x -= delta / 60;
        ref.current.rotation.y -= delta / 80;
        // Subtle parallax with mouse
        ref.current.rotation.x += state.pointer.y * delta * 0.02;
        ref.current.rotation.y += state.pointer.x * delta * 0.02;
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.35}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

// Animated nebula particles
function NebulaParticles() {
    const ref = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const positions = useMemo(() => {
        const count = isMobile ? 800 : 1500;
        return random.inSphere(new Float32Array(count * 3), { radius: 8 });
    }, [isMobile]);

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x += delta / 40;
        ref.current.rotation.z -= delta / 50;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#8b5cf6"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.2}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

// Subtle tech grid on the floor
function TechGrid() {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta * 0.03;
        }
    });

    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeGeometry args={[80, 80, 30, 30]} />
            <meshBasicMaterial
                color="#06d6a0"
                wireframe
                transparent
                opacity={0.025}
            />
        </mesh>
    );
}

// Main floating orb with distortion
function FloatingCore() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
            <group position={[0, 0.5, -8]}>
                <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                    <MeshDistortMaterial
                        color="#8b5cf6"
                        speed={2}
                        distort={0.35}
                        radius={1}
                        emissive="#8b5cf6"
                        emissiveIntensity={0.15}
                        roughness={0.2}
                        metalness={0.8}
                        transparent
                        opacity={0.7}
                    />
                </Sphere>

                {/* Inner glow */}
                <Sphere args={[1.3, 32, 32]}>
                    <meshBasicMaterial
                        color="#06d6a0"
                        transparent
                        opacity={0.08}
                        side={THREE.BackSide}
                    />
                </Sphere>
            </group>
        </Float>
    );
}

// Secondary accent orb
function AccentOrb() {
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
            <group position={[5, -1, -6]}>
                <Sphere args={[0.6, 32, 32]}>
                    <MeshDistortMaterial
                        color="#06d6a0"
                        speed={3}
                        distort={0.4}
                        radius={1}
                        emissive="#06d6a0"
                        emissiveIntensity={0.2}
                        roughness={0.3}
                        metalness={0.7}
                        transparent
                        opacity={0.6}
                    />
                </Sphere>
            </group>
        </Float>
    );
}

// Third accent orb (pink)
function PinkOrb() {
    return (
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.5}>
            <group position={[-4, 2, -10]}>
                <Sphere args={[0.8, 32, 32]}>
                    <MeshDistortMaterial
                        color="#f472b6"
                        speed={2.5}
                        distort={0.3}
                        radius={1}
                        emissive="#f472b6"
                        emissiveIntensity={0.15}
                        roughness={0.4}
                        metalness={0.6}
                        transparent
                        opacity={0.5}
                    />
                </Sphere>
            </group>
        </Float>
    );
}

// Mouse-following light
function MouseLight() {
    const { viewport } = useThree();
    const light = useRef();

    useFrame((state) => {
        if (light.current) {
            const x = (state.pointer.x * viewport.width) / 2;
            const y = (state.pointer.y * viewport.height) / 2;
            light.current.position.lerp(new THREE.Vector3(x, y, 3), 0.1);
        }
    });

    return (
        <pointLight
            ref={light}
            distance={12}
            intensity={0.8}
            color="#06d6a0"
        />
    );
}

// Camera animation based on mouse
function CameraRig() {
    const { camera } = useThree();

    useFrame((state) => {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.pointer.x * 0.5, 0.02);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.pointer.y * 0.3, 0.02);
        camera.lookAt(0, 0, 0);
    });

    return null;
}

export default function ThreeBackground() {
    const [dpr, setDpr] = useState(1);

    useEffect(() => {
        // Optimize DPR for mobile
        const isMobile = window.innerWidth < 768;
        setDpr(isMobile ? 1 : Math.min(2, window.devicePixelRatio));
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-[#020617]" />

            <Canvas
                camera={{ position: [0, 0, 6], fov: 70 }}
                dpr={dpr}
                gl={{
                    antialias: false,
                    powerPreference: 'high-performance'
                }}
            >
                <color attach="background" args={['#020617']} />
                <fog attach="fog" args={['#020617', 6, 25]} />

                {/* Ambient lighting */}
                <ambientLight intensity={0.3} />

                {/* Main colored lights */}
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.2}
                    penumbra={1}
                    intensity={1.5}
                    color="#8b5cf6"
                />
                <spotLight
                    position={[-10, -5, 8]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    color="#06d6a0"
                />
                <pointLight position={[0, -10, 0]} intensity={0.5} color="#f472b6" />

                {/* Scene elements */}
                <Starfield />
                <NebulaParticles />
                <TechGrid />
                <FloatingCore />
                <AccentOrb />
                <PinkOrb />
                <MouseLight />
                <CameraRig />
            </Canvas>

            {/* Overlay gradients for depth */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(6,214,160,0.03)_0%,transparent_40%)]" />
        </div>
    );
}
