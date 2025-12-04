'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import { Suspense } from 'react';

// Composant de chargement
function LoadingScreen() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="text-center">
                <div className="text-6xl mb-4 animate-spin">⚛️</div>
                <p className="text-xl text-gray-400">Chargement de la simulation...</p>
            </div>
        </div>
    );
}

// Composant Atome 3D (exemple pour "Structure de l'Atome")
function Atom({ protons = 6, neutrons = 6, electrons = 6 }) {
    return (
        <group>
            {/* Noyau */}
            <group>
                {/* Protons (rouge) */}
                {Array.from({ length: protons }).map((_, i) => {
                    const angle = (i / protons) * Math.PI * 2;
                    const radius = 0.3;
                    return (
                        <mesh
                            key={`proton-${i}`}
                            position={[
                                Math.cos(angle) * radius,
                                Math.sin(angle) * radius * 0.5,
                                Math.sin(angle) * radius
                            ]}
                        >
                            <sphereGeometry args={[0.15, 32, 32]} />
                            <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
                        </mesh>
                    );
                })}

                {/* Neutrons (gris) */}
                {Array.from({ length: neutrons }).map((_, i) => {
                    const angle = (i / neutrons) * Math.PI * 2 + Math.PI / neutrons;
                    const radius = 0.3;
                    return (
                        <mesh
                            key={`neutron-${i}`}
                            position={[
                                Math.cos(angle) * radius,
                                Math.sin(angle) * radius * 0.5,
                                Math.sin(angle) * radius
                            ]}
                        >
                            <sphereGeometry args={[0.15, 32, 32]} />
                            <meshStandardMaterial color="#6B7280" />
                        </mesh>
                    );
                })}
            </group>

            {/* Orbitales électroniques */}
            {Array.from({ length: electrons }).map((_, i) => {
                const orbitRadius = 1.5 + Math.floor(i / 2) * 0.8;
                const speed = 0.5 + Math.floor(i / 2) * 0.2;
                const offset = (i % 2) * Math.PI;

                return (
                    <group key={`electron-orbit-${i}`} rotation={[Math.PI / 4, 0, i * 0.5]}>
                        {/* Orbite */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[orbitRadius, 0.01, 16, 100]} />
                            <meshBasicMaterial color="#00F5D4" opacity={0.3} transparent />
                        </mesh>

                        {/* Électron */}
                        <mesh
                            position={[
                                Math.cos(Date.now() * 0.001 * speed + offset) * orbitRadius,
                                0,
                                Math.sin(Date.now() * 0.001 * speed + offset) * orbitRadius
                            ]}
                        >
                            <sphereGeometry args={[0.1, 32, 32]} />
                            <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
                        </mesh>
                    </group>
                );
            })}
        </group>
    );
}

// Composant Molécule d'eau (exemple pour "Géométrie Moléculaire")
function WaterMolecule() {
    return (
        <group>
            {/* Atome d'oxygène (rouge) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Atomes d'hydrogène (blanc) */}
            <mesh position={[0.8, 0.6, 0]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color="#F3F4F6" />
            </mesh>
            <mesh position={[0.8, -0.6, 0]}>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color="#F3F4F6" />
            </mesh>

            {/* Liaisons */}
            <mesh position={[0.4, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
                <cylinderGeometry args={[0.05, 0.05, 0.9, 16]} />
                <meshStandardMaterial color="#9CA3AF" />
            </mesh>
            <mesh position={[0.4, -0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
                <cylinderGeometry args={[0.05, 0.05, 0.9, 16]} />
                <meshStandardMaterial color="#9CA3AF" />
            </mesh>
        </group>
    );
}

// Composant Cellule (exemple pour "Structure de la Cellule")
function Cell() {
    return (
        <group>
            {/* Membrane cellulaire */}
            <mesh>
                <sphereGeometry args={[2, 64, 64]} />
                <meshStandardMaterial
                    color="#10B981"
                    transparent
                    opacity={0.3}
                    wireframe={false}
                />
            </mesh>

            {/* Noyau */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.3} />
            </mesh>

            {/* Mitochondries */}
            {Array.from({ length: 5 }).map((_, i) => {
                const angle = (i / 5) * Math.PI * 2;
                const radius = 1.2;
                return (
                    <mesh
                        key={`mito-${i}`}
                        position={[
                            Math.cos(angle) * radius,
                            Math.sin(angle) * radius * 0.5,
                            Math.sin(angle) * radius
                        ]}
                        scale={[0.3, 0.15, 0.15]}
                    >
                        <sphereGeometry args={[1, 16, 16]} />
                        <meshStandardMaterial color="#F59E0B" />
                    </mesh>
                );
            })}

            {/* Ribosomes (petites sphères) */}
            {Array.from({ length: 20 }).map((_, i) => {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                const radius = 1.5;
                return (
                    <mesh
                        key={`ribosome-${i}`}
                        position={[
                            radius * Math.sin(phi) * Math.cos(theta),
                            radius * Math.sin(phi) * Math.sin(theta),
                            radius * Math.cos(phi)
                        ]}
                    >
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshStandardMaterial color="#EC4899" />
                    </mesh>
                );
            })}
        </group>
    );
}

// Composant ADN Helix
function DNAHelix() {
    const helixPoints = [];
    const segments = 100;

    for (let i = 0; i < segments; i++) {
        const t = (i / segments) * Math.PI * 4;
        const radius = 0.5;

        // Brin 1
        helixPoints.push({
            position: [
                Math.cos(t) * radius,
                (i / segments) * 4 - 2,
                Math.sin(t) * radius
            ],
            color: '#00F5D4'
        });

        // Brin 2
        helixPoints.push({
            position: [
                Math.cos(t + Math.PI) * radius,
                (i / segments) * 4 - 2,
                Math.sin(t + Math.PI) * radius
            ],
            color: '#7C3AED'
        });
    }

    return (
        <group>
            {helixPoints.map((point, i) => (
                <mesh key={i} position={point.position}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color={point.color} emissive={point.color} emissiveIntensity={0.5} />
                </mesh>
            ))}

            {/* Liaisons entre les brins */}
            {Array.from({ length: 20 }).map((_, i) => {
                const t = (i / 20) * Math.PI * 4;
                const radius = 0.5;
                return (
                    <mesh
                        key={`bond-${i}`}
                        position={[0, (i / 20) * 4 - 2, 0]}
                        rotation={[0, t, Math.PI / 2]}
                    >
                        <cylinderGeometry args={[0.03, 0.03, radius * 2, 8]} />
                        <meshStandardMaterial color="#F59E0B" />
                    </mesh>
                );
            })}
        </group>
    );
}

// Composant Circuit Électrique
function ElectricCircuit() {
    return (
        <group>
            {/* Batterie */}
            <mesh position={[-2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
                <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-2, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.1, 0.1, 0.2, 32]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Fils */}
            <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>
            <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>
            <mesh position={[2, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>
            <mesh position={[-2, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>

            {/* Ampoule */}
            <group position={[2, 0, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={2} transparent opacity={0.8} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
            </group>

            {/* Électrons animés */}
            {Array.from({ length: 10 }).map((_, i) => {
                const t = (Date.now() * 0.001 + i * 0.5) % 4;
                let pos = [0, 0, 0];
                if (t < 1) pos = [-2 + t * 4, 1, 0]; // Haut
                else if (t < 2) pos = [2, 1 - (t - 1) * 2, 0]; // Droite
                else if (t < 3) pos = [2 - (t - 2) * 4, -1, 0]; // Bas
                else pos = [-2, -1 + (t - 3) * 2, 0]; // Gauche

                return (
                    <mesh key={i} position={pos}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" />
                    </mesh>
                );
            })}
        </group>
    );
}

// Composant Cycle de l'Eau
function WaterCycle() {
    return (
        <group>
            {/* Océan */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#2563EB" transparent opacity={0.8} />
            </mesh>

            {/* Soleil */}
            <mesh position={[3, 3, -2]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={2} />
            </mesh>

            {/* Nuages */}
            <group position={[-2, 2, 0]}>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshStandardMaterial color="white" transparent opacity={0.8} />
                </mesh>
                <mesh position={[0.8, 0.2, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="white" transparent opacity={0.8} />
                </mesh>
                <mesh position={[-0.8, 0.2, 0]}>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="white" transparent opacity={0.8} />
                </mesh>
            </group>

            {/* Pluie (particules) */}
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh key={i} position={[-2 + (Math.random() - 0.5), 1 - Math.random() * 2, (Math.random() - 0.5)]}>
                    <capsuleGeometry args={[0.02, 0.2, 4, 8]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
            ))}

            {/* Flèches d'évaporation */}
            {Array.from({ length: 3 }).map((_, i) => (
                <mesh key={`evap-${i}`} position={[1 + i, -1 + i * 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
                    <meshStandardMaterial color="white" transparent opacity={0.5} />
                </mesh>
            ))}
        </group>
    );
}

// Composant Système Digestif (Schématique)
function DigestiveSystem() {
    return (
        <group>
            {/* Œsophage */}
            <mesh position={[0, 2, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 2, 32]} />
                <meshStandardMaterial color="#FCA5A5" />
            </mesh>

            {/* Estomac */}
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, -0.2]}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Intestins */}
            <group position={[0, -1.5, 0]}>
                <mesh>
                    <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
                    <meshStandardMaterial color="#FDBA74" />
                </mesh>
            </group>
        </group>
    );
}

// Composant Ondes (Interférences)
function WaveInterference() {
    return (
        <group>
            {/* Surface de l'eau */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[8, 8, 64, 64]} />
                <meshStandardMaterial color="#3B82F6" wireframe />
            </mesh>

            {/* Sources d'ondes */}
            <mesh position={[-1, 0, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[1, 0, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    );
}

// Composant principal de simulation 3D
export default function Simulation3D({ type = 'atom', config = {} }) {
    const renderSimulation = () => {
        switch (type) {
            case 'atom':
                return <Atom {...config} />;
            case 'water':
                return <WaterMolecule />;
            case 'cell':
                return <Cell />;
            case 'dna':
                return <DNAHelix />;
            case 'circuit':
                return <ElectricCircuit />;
            case 'water-cycle':
                return <WaterCycle />;
            case 'digestive':
                return <DigestiveSystem />;
            case 'wave':
                return <WaveInterference />;
            default:
                return <Atom {...config} />;
        }
    };

    return (
        <div className="w-full h-full min-h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-black to-slate-900 border border-white/20">
            <Canvas>
                <Suspense fallback={null}>
                    {/* Caméra */}
                    <PerspectiveCamera makeDefault position={[5, 3, 5]} />

                    {/* Contrôles */}
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                    />

                    {/* Lumières */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00F5D4" />
                    <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />

                    {/* Environnement */}
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    {/* Simulation */}
                    {renderSimulation()}

                    {/* Grille de référence */}
                    <gridHelper args={[10, 10, '#00F5D4', '#1F2937']} position={[0, -3, 0]} />
                </Suspense>
            </Canvas>
        </div>
    );
}
