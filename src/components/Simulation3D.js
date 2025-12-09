'use client';
import { useRef, useMemo, useState, useEffect } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars, Text, Line } from '@react-three/drei';
import { DNAHelix } from './DNAHelix';
import { LensOptics } from './LensOptics';
import { ElectrochemicalCell } from './ElectrochemicalCell';
import { MagneticField } from './MagneticField';
import { Diffraction } from './Diffraction';
import { Titration } from './Titration';

// ... (existing helper components)

// Composant Poids vs Masse (Terre vs Lune)
function WeightMass() {
    return (
        <group>
            {/* Terre */}
            <group position={[-3, 0, 0]}>
                <mesh position={[0, -2.5, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" emissive="#1D4ED8" emissiveIntensity={0.2} />
                </mesh>
                <Text position={[0, -4, 0]} fontSize={0.5} color="white">Terre (g = 9.8)</Text>

                {/* Objet sur Terre */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                {/* Vecteur Poids (Gros) */}
                <mesh position={[0, -1.2, 0]} rotation={[Math.PI, 0, 0]}>
                    <coneGeometry args={[0.2, 1.5, 16]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[1.2, 0, 0]} fontSize={0.4} color="#EF4444">P = 98 N</Text>
            </group>

            {/* Lune */}
            <group position={[3, 0, 0]}>
                <mesh position={[0, -2.5, 0]}>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshStandardMaterial color="#9CA3AF" emissive="#4B5563" emissiveIntensity={0.2} />
                </mesh>
                <Text position={[0, -4, 0]} fontSize={0.5} color="white">Lune (g = 1.6)</Text>

                {/* Objet sur Lune (Même taille ! Masse identique) */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                {/* Vecteur Poids (Petit) */}
                <mesh position={[0, -0.8, 0]} rotation={[Math.PI, 0, 0]}>
                    <coneGeometry args={[0.2, 0.5, 16]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[1.2, 0, 0]} fontSize={0.4} color="#EF4444">P = 16 N</Text>
            </group>

            <Text position={[0, 3, 0]} fontSize={0.6} color="white">Masse = 10 kg (Constante)</Text>
        </group>
    );
}

// Composant Théorème de Thalès
function ThalesTheorem() {
    return (
        <group>
            {/* Sommet A */}
            <mesh position={[0, 4, 0]}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <Text position={[0, 4.3, 0]} fontSize={0.4} color="white">A</Text>

            {/* Triangle ABC (Grand) */}
            <group>
                {/* Côté AB */}
                <mesh position={[-1.5, 2, 0]} rotation={[0, 0, 0.58]}>
                    <cylinderGeometry args={[0.05, 0.05, 5, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                {/* Côté AC */}
                <mesh position={[1.5, 2, 0]} rotation={[0, 0, -0.58]}>
                    <cylinderGeometry args={[0.05, 0.05, 5, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                {/* Base BC */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 4.6, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -0.4, 0]} fontSize={0.4} color="#3B82F6">BC</Text>
            </group>

            {/* Ligne Parallèle MN (Thalès) */}
            <group position={[0, 2, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 2.3, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0, 0.3, 0]} fontSize={0.4} color="#EF4444">MN</Text>
            </group>

            {/* Points */}
            <mesh position={[-2.3, 0, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#3B82F6" /></mesh>
            <Text position={[-2.6, 0, 0]} fontSize={0.4} color="white">B</Text>

            <mesh position={[2.3, 0, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#3B82F6" /></mesh>
            <Text position={[2.6, 0, 0]} fontSize={0.4} color="white">C</Text>

            <mesh position={[-1.15, 2, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#EF4444" /></mesh>
            <Text position={[-1.5, 2, 0]} fontSize={0.4} color="white">M</Text>

            <mesh position={[1.15, 2, 0]}><sphereGeometry args={[0.15]} /><meshStandardMaterial color="#EF4444" /></mesh>
            <Text position={[1.5, 2, 0]} fontSize={0.4} color="white">N</Text>

            <Text position={[0, -2, 0]} fontSize={0.5} color="white">AM/AB = AN/AC = MN/BC</Text>
        </group>
    );
}

// Composant Cercle Trigonométrique
function TrigUnitCircle() {
    const movingPointRef = useRef();
    const sinLineRef = useRef();
    const cosLineRef = useRef();
    const sinTextRef = useRef();
    const cosTextRef = useRef();

    useFrame((state) => {
        const time = state.clock.elapsedTime * 0.5;
        const angle = time % (Math.PI * 2);

        if (movingPointRef.current) {
            movingPointRef.current.position.set(2 * Math.cos(angle), 2 * Math.sin(angle), 0);
        }

        // Update lines and text positions/scales
        if (sinLineRef.current) {
            const h = 2 * Math.sin(angle);
            sinLineRef.current.position.set(2 * Math.cos(angle), h / 2, 0);
            sinLineRef.current.scale.set(1, Math.abs(h), 1); // Scale cylinder height
        }
        if (cosLineRef.current) {
            const w = 2 * Math.cos(angle);
            cosLineRef.current.position.set(w / 2, 0, 0);
            cosLineRef.current.scale.set(1, Math.abs(w), 1);
        }
    });

    return (
        <group>
            {/* Cercle Unité */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.05, 16, 100]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Axes */}
            <mesh rotation={[0, 0, Math.PI / 2]}> {/* Axe Y */}
                <cylinderGeometry args={[0.03, 0.03, 5, 8]} />
                <meshStandardMaterial color="gray" />
            </mesh>
            <mesh rotation={[0, 0, 0]}> {/* Axe X */}
                <cylinderGeometry args={[0.03, 0.03, 5, 8]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="gray" />
            </mesh>

            {/* Point mobile */}
            <group rotation={[0, 0, 0]}>
                <mesh ref={movingPointRef} position={[2, 0, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>

                {/* Lignes de projection - Initial rendering */}
                {/* Sinus (Verticale) */}
                <mesh ref={sinLineRef} position={[2, 0, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[2.2, 1, 0]} fontSize={0.3} color="#EF4444">Sin</Text>

                {/* Cosinus (Horizontale) */}
                <mesh ref={cosLineRef} position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[1, -0.3, 0]} fontSize={0.3} color="#3B82F6">Cos</Text>
            </group>

            <Text position={[0, 3, 0]} fontSize={0.5} color="white">Cercle de Rayon 1</Text>
        </group>
    );
}

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
            <ElectronOrbitals electrons={electrons} />
        </group>
    );
}


function SingleElectron({ speed, offset, orbitRadius }) {
    const meshRef = useRef();
    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (meshRef.current) {
            meshRef.current.position.x = Math.cos(time * speed + offset) * orbitRadius;
            meshRef.current.position.z = Math.sin(time * speed + offset) * orbitRadius;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
        </mesh>
    );
}

function ElectronOrbitals({ electrons }) {
    return (
        <group>
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

                        {/* Électron via Composant Dédié (Ref) */}
                        <SingleElectron speed={speed} offset={offset} orbitRadius={orbitRadius} />
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

// Composant Interférences d'Ondes
function WaveInterference() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">INTERFÉRENCES D&apos;ONDES</Text>

            {/* Source 1 */}
            <mesh position={[-1.5, 0, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
            </mesh>
            <Text position={[-1.5, -0.5, 0]} fontSize={0.3} color="#00F5D4">Source 1</Text>

            {/* Source 2 */}
            <mesh position={[1.5, 0, 0]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={1} />
            </mesh>
            <Text position={[1.5, -0.5, 0]} fontSize={0.3} color="#7C3AED">Source 2</Text>

            {/* Ondes concentriques Source 1 */}
            {Array.from({ length: 4 }).map((_, i) => (
                <mesh key={`wave1-${i}`} position={[-1.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.5 + i * 0.5, 0.02, 16, 32]} />
                    <meshStandardMaterial color="#00F5D4" transparent opacity={0.6 - i * 0.1} />
                </mesh>
            ))}

            {/* Ondes concentriques Source 2 */}
            {Array.from({ length: 4 }).map((_, i) => (
                <mesh key={`wave2-${i}`} position={[1.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.5 + i * 0.5, 0.02, 16, 32]} />
                    <meshStandardMaterial color="#7C3AED" transparent opacity={0.6 - i * 0.1} />
                </mesh>
            ))}

            {/* Zone d'interférence constructive */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.8} />
            </mesh>
            <Text position={[0, -1, 0]} fontSize={0.3} color="#FCD34D">Interférence Constructive</Text>
        </group>
    );
}

// Composant Circuit Électrique
function ElectricCircuit() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">CIRCUIT ÉLECTRIQUE</Text>

            {/* Batterie/Pile */}
            <mesh position={[-2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
                <meshStandardMaterial color="#374151" />
            </mesh>
            <mesh position={[-2, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.1, 0.1, 0.2, 32]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>
            <Text position={[-2, -0.8, 0]} fontSize={0.3} color="white">Pile (+/-)</Text>

            {/* Fils conducteurs */}
            <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>
            <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 16]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>

            {/* Lampe */}
            <mesh position={[2, 0, 0]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={1.5} />
            </mesh>
            <Text position={[2, -0.8, 0]} fontSize={0.3} color="#FCD34D">Lampe</Text>

            {/* Interrupteur */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[0.3, 0.2, 0.2]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            <Text position={[0, 2, 0]} fontSize={0.3} color="#10B981">Interrupteur</Text>

            {/* Électrons en mouvement */}
            {Array.from({ length: 5 }).map((_, i) => (
                <mesh key={i} position={[-1.5 + i * 0.8, 1, 0]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1} />
                </mesh>
            ))}
            <Text position={[0, -2, 0]} fontSize={0.3} color="white">Courant électrique →</Text>
        </group>
    );
}

const generateRibosomePositions = (count) => {
    return Array.from({ length: count }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = 1.6;
        return {
            key: `ribosome-${i}`,
            position: [
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            ]
        };
    });
};

// Composant Cellule (Amélioré avec étiquettes)
function Cell() {
    const [ribosomes, setRibosomes] = useState([]);

    useEffect(() => {
        setRibosomes(generateRibosomePositions(20));
    }, []);
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
            <Text position={[0, 2.2, 0]} fontSize={0.3} color="#10B981">Membrane Cellulaire</Text>

            {/* Noyau */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.3} />
            </mesh>
            <Text position={[0, 0, 1]} fontSize={0.3} color="white">Noyau (ADN)</Text>

            {/* Mitochondries */}
            {Array.from({ length: 5 }).map((_, i) => {
                const angle = (i / 5) * Math.PI * 2;
                const radius = 1.2;
                return (
                    <group key={`mito-${i}`} position={[
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius * 0.5,
                        Math.sin(angle) * radius
                    ]}>
                        <mesh scale={[0.3, 0.15, 0.15]}>
                            <sphereGeometry args={[1, 16, 16]} />
                            <meshStandardMaterial color="#F59E0B" />
                        </mesh>
                        {i === 0 && <Text position={[0, 0.2, 0]} fontSize={0.2} color="#F59E0B">Mitochondrie (Énergie)</Text>}
                    </group>
                );
            })}

            {/* Ribosomes (petites sphères) */}
            {/* Ribosomes (petites sphères) */}
            {ribosomes.map((data) => (
                <mesh
                    key={data.key}
                    position={data.position}
                >
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="#EC4899" />
                </mesh>
            ))}
            <Text position={[1.5, -1.5, 0]} fontSize={0.2} color="#EC4899">Ribosomes</Text>
        </group>
    );
}

const generateChloroplastPositions = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: `chloro-${i}`,
        position: [
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 0.5
        ]
    }));
};

// Composant Cellule Végétale (Amélioré : Photosynthèse animée)
function PlantCell() {
    const [chloroplasts, setChloroplasts] = useState([]);

    useEffect(() => {
        setChloroplasts(generateChloroplastPositions(6));
    }, []);
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#10B981">LA PHOTOSYNTHÈSE</Text>

            {/* Paroi cellulaire (Verte et rigide) */}
            <mesh>
                <boxGeometry args={[3, 4, 1]} />
                <meshStandardMaterial color="#10B981" transparent opacity={0.3} wireframe />
            </mesh>
            <mesh>
                <boxGeometry args={[2.8, 3.8, 0.8]} />
                <meshStandardMaterial color="#10B981" transparent opacity={0.1} />
            </mesh>

            {/* Chloroplastes */}
            {/* Chloroplastes */}
            {chloroplasts.map((data) => (
                <mesh
                    key={data.key}
                    position={data.position}
                >
                    <capsuleGeometry args={[0.2, 0.4, 4, 8]} />
                    <meshStandardMaterial color="#059669" />
                </mesh>
            ))}
            <Text position={[0, 0, 0.6]} fontSize={0.3} color="#059669">Chloroplastes</Text>

            {/* Soleil */}
            <mesh position={[2.5, 2.5, 1]}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={2} />
            </mesh>
            <Text position={[2.5, 3.3, 1]} fontSize={0.3} color="#FCD34D">Lumière</Text>

            {/* Intrants (CO2 + H2O) */}
            <Text position={[-2.5, 1, 0]} fontSize={0.4} color="white">CO2 + H2O →</Text>

            {/* Extrants (O2 + Sucre) */}
            <Text position={[2.5, -1, 0]} fontSize={0.4} color="white">→ Sucre + O2</Text>

            {/* Rayons lumineux */}
            <mesh position={[1.5, 1.5, 0.5]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                <meshStandardMaterial color="#FCD34D" transparent opacity={0.6} />
            </mesh>
        </group>
    );
}

const generateLiquidParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: i,
        position: [
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1 - 0.5,
            (Math.random() - 0.5) * 1.5
        ]
    }));
};

const generateGasParticles = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: i,
        position: [
            (Math.random() - 0.5) * 1.8,
            (Math.random() - 0.5) * 1.8,
            (Math.random() - 0.5) * 1.8
        ]
    }));
};

// Composant États de la Matière (Amélioré : 3 états)
function StatesOfMatter() {
    const [liquidParticles, setLiquidParticles] = useState([]);
    const [gasParticles, setGasParticles] = useState([]);

    useEffect(() => {
        setLiquidParticles(generateLiquidParticles(27));
        setGasParticles(generateGasParticles(15));
    }, []);
    return (
        <group>
            {/* SOLIDE */}
            <group position={[-3, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.4} color="white">SOLIDE (Glace)</Text>
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#9CA3AF" wireframe transparent opacity={0.1} />
                </mesh>
                {/* Particules serrées et vibrantes */}
                {useMemo(() => Array.from({ length: 27 }).map((_, i) => (
                    <mesh key={i} position={[
                        (i % 3) * 0.5 - 0.5,
                        Math.floor((i / 3) % 3) * 0.5 - 0.5,
                        Math.floor(i / 9) * 0.5 - 0.5
                    ]}>
                        <sphereGeometry args={[0.2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                )), [])}
            </group>

            {/* LIQUIDE */}
            <group position={[0, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.4} color="white">LIQUIDE (Eau)</Text>
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#9CA3AF" wireframe transparent opacity={0.1} />
                </mesh>
                {/* Particules en bas, désordonnées */}
                {liquidParticles.map((data) => (
                    <mesh key={data.key} position={data.position}>
                        <sphereGeometry args={[0.2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                ))}
            </group>

            {/* GAZ */}
            <group position={[3, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.4} color="white">GAZ (Vapeur)</Text>
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#9CA3AF" wireframe transparent opacity={0.1} />
                </mesh>
                {/* Particules partout et espacées */}
                {gasParticles.map((data) => (
                    <mesh key={data.key} position={data.position}>
                        <sphereGeometry args={[0.2]} />
                        <meshStandardMaterial color="#60A5FA" transparent opacity={0.8} />
                    </mesh>
                ))}
            </group>
        </group>
    );
}


// Composant Neurone (Système Nerveux)
function Neuron() {
    return (
        <group>
            {/* Corps cellulaire (Soma) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#F59E0B" emissiveIntensity={0.5} />
            </mesh>
            <Text position={[0, 1.5, 0]} fontSize={0.3} color="#FCD34D">Corps Cellulaire</Text>

            {/* Noyau */}
            <mesh position={[0, 0, 0.8]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#7C3AED" />
            </mesh>

            {/* Axone (Longue tige) */}
            <mesh position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.2, 0.4, 4, 16]} />
                <meshStandardMaterial color="#FCD34D" />
            </mesh>
            <Text position={[2, 0.5, 0]} fontSize={0.3} color="#FCD34D">Axone</Text>

            {/* Dendrites (Ramifications) */}
            {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                return (
                    <group key={i} rotation={[0, 0, angle]}>
                        <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <coneGeometry args={[0.1, 1.5, 8]} />
                            <meshStandardMaterial color="#FCD34D" />
                        </mesh>
                    </group>
                );
            })}
            <Text position={[-2.5, 0, 0]} fontSize={0.3} color="#FCD34D">Dendrites</Text>

            {/* Influx nerveux (Particule qui voyage) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

const generateRBC = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: `rbc-${i}`,
        position: [
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0]
    }));
};

const generateWBC = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        key: `wbc-${i}`,
        position: [
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
        ]
    }));
};

// Composant Vaisseau Sanguin (Circulation)
function BloodStream() {
    const [rbc, setRbc] = useState([]);
    const [wbc, setWbc] = useState([]);

    useEffect(() => {
        setRbc(generateRBC(15));
        setWbc(generateWBC(3));
    }, []);
    return (
        <group>
            {/* Vaisseau (Tube) */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[2, 2, 8, 32, 1, true]} />
                <meshStandardMaterial color="#EF4444" side={2} transparent opacity={0.3} />
            </mesh>

            {/* Globules Rouges */}
            {rbc.map((data) => (
                <mesh
                    key={data.key}
                    position={data.position}
                    rotation={data.rotation}
                >
                    <torusGeometry args={[0.3, 0.15, 16, 32]} />
                    <meshStandardMaterial color="#DC2626" />
                </mesh>
            ))}
            <Text position={[-3, 1.5, 0]} fontSize={0.3} color="#DC2626">Globules Rouges (O2)</Text>

            {/* Globules Blancs */}
            {wbc.map((data) => (
                <mesh
                    key={data.key}
                    position={data.position}
                >
                    <sphereGeometry args={[0.35, 32, 32]} />
                    <meshStandardMaterial color="#F3F4F6" roughness={0.8} />
                </mesh>
            ))}
            <Text position={[3, -1.5, 0]} fontSize={0.3} color="white">Globules Blancs (Défense)</Text>
        </group>
    );
}

// Composant Croissance Végétale
function PlantGrowth() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="#10B981">Croissance des Végétaux</Text>

            {/* Sol */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>

            {/* Plante (tige qui grandit - animée par scale) */}
            <group position={[0, -2, 0]}>
                <mesh position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 3, 8]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                {/* Feuilles */}
                <mesh position={[0.5, 2, 0]} rotation={[0, 0, -Math.PI / 4]}>
                    <sphereGeometry args={[0.3, 32, 16]} scale={[1, 0.2, 0.5]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[-0.5, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <sphereGeometry args={[0.3, 32, 16]} scale={[1, 0.2, 0.5]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
            </group>

            <Text position={[2, -1, 0]} fontSize={0.3} color="white">Besoin: Eau, Lumière, Sels minéraux</Text>
        </group>
    );
}

// Composant Chaîne Alimentaire
function FoodChain() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">Chaîne Alimentaire</Text>

            {/* Producteur (Herbe) */}
            <group position={[-3, -1, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="#10B981">Producteur (Herbe)</Text>
            </group>

            {/* Consommateur 1 (Vache/Lapin - Cube Blanc) */}
            <group position={[0, -1, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Consommateur I (Herbivore)</Text>
            </group>

            {/* Consommateur 2 (Lion - Cube Rouge) */}
            <group position={[3, -1, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1.2, 1.2, 1.2]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="#EF4444">Consommateur II (Carnivore)</Text>
            </group>

            {/* Flèches */}
            <Text position={[-1.5, 0, 0]} fontSize={0.5} color="white">→</Text>
            <Text position={[1.5, 0, 0]} fontSize={0.5} color="white">→</Text>
            <Text position={[0, -3, 0]} fontSize={0.3} color="gray">&quot;Est mangé par&quot;</Text>
        </group>
    );
}

// Composant Classification des Vertébrés
function VertebrateClassification() {
    const groups = [
        { name: "Mammifères", color: "#FCD34D", pos: [-4, 0, 0] },
        { name: "Oiseaux", color: "#60A5FA", pos: [-2, 0, 0] },
        { name: "Reptiles", color: "#10B981", pos: [0, 0, 0] },
        { name: "Amphibiens", color: "#8B5CF6", pos: [2, 0, 0] },
        { name: "Poissons", color: "#EF4444", pos: [4, 0, 0] }
    ];

    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">Classification des Vertébrés</Text>
            {groups.map((g, i) => (
                <group key={i} position={g.pos}>
                    <mesh>
                        <sphereGeometry args={[0.6]} />
                        <meshStandardMaterial color={g.color} />
                    </mesh>
                    <Text position={[0, -1, 0]} fontSize={0.3} color="white">{g.name}</Text>
                </group>
            ))}
        </group>
    );
}







// Composant Système Immunitaire (Amélioré)
function ImmuneSystem() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">DÉFENSE IMMUNITAIRE</Text>

            {/* Virus (ennemi) */}
            <mesh position={[0, 0, 0]}>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#DC2626" emissive="#DC2626" emissiveIntensity={0.3} />
            </mesh>
            <Text position={[0, -0.8, 0]} fontSize={0.3} color="#DC2626">Virus (Ennemi)</Text>

            {/* Spikes du virus */}
            {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                return (
                    <mesh
                        key={i}
                        position={[Math.cos(angle) * 0.5, Math.sin(angle) * 0.5, 0]}
                        rotation={[0, 0, angle]}
                    >
                        <coneGeometry args={[0.05, 0.3, 8]} />
                        <meshStandardMaterial color="#991B1B" />
                    </mesh>
                );
            })}

            {/* Globules blancs (défenseurs) */}
            {Array.from({ length: 5 }).map((_, i) => (
                <mesh
                    key={`wb-${i}`}
                    position={[
                        Math.cos((i / 5) * Math.PI * 2) * 2,
                        Math.sin((i / 5) * Math.PI * 2) * 2,
                        0
                    ]}
                >
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color="#F3F4F6" />
                </mesh>
            ))}
            <Text position={[2.5, 0, 0]} fontSize={0.3} color="white">Globules Blancs</Text>

            {/* Anticorps (Y shape) */}
            {Array.from({ length: 3 }).map((_, i) => (
                <group
                    key={`ab-${i}`}
                    position={[
                        Math.cos((i / 3) * Math.PI * 2 + 1) * 1.5,
                        Math.sin((i / 3) * Math.PI * 2 + 1) * 1.5,
                        0
                    ]}
                >
                    <mesh>
                        <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
                        <meshStandardMaterial color="#FCD34D" />
                    </mesh>
                </group>
            ))}
            <Text position={[-2, -2, 0]} fontSize={0.3} color="#FCD34D">Anticorps (Y)</Text>
        </group>
    );
}

// Composant Conservation de l'Énergie (Amélioré)
function EnergyConservation() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">CONSERVATION DE L&apos;ÉNERGIE</Text>

            {/* Point d'attache */}
            <mesh position={[0, 2, 0]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#6B7280" />
            </mesh>

            {/* Fil du pendule */}
            <mesh position={[-1, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
                <meshStandardMaterial color="#374151" />
            </mesh>

            {/* Masse du pendule */}
            <mesh position={[-1.5, 0, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>
            <Text position={[-1.5, -0.5, 0]} fontSize={0.3} color="#3B82F6">Masse</Text>

            {/* Énergie potentielle (haut) */}
            <mesh position={[-1.5, 0.5, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={1} transparent opacity={0.7} />
            </mesh>
            <Text position={[-2.5, 1, 0]} fontSize={0.3} color="#FCD34D">Ep (Potentielle)</Text>

            {/* Position basse (énergie cinétique) */}
            <mesh position={[0, -1, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={1} transparent opacity={0.7} />
            </mesh>
            <Text position={[0.5, -1.5, 0]} fontSize={0.3} color="#EF4444">Ec (Cinétique)</Text>

            {/* Trajectoire */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <torusGeometry args={[1.5, 0.02, 16, 100, Math.PI]} />
                <meshStandardMaterial color="#00F5D4" transparent opacity={0.3} />
            </mesh>

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="white">Ep + Ec = Constante</Text>
        </group>
    );
}

// Composant Cycle de l'Eau (Amélioré)
function WaterCycle() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#3B82F6">CYCLE DE L&apos;EAU</Text>

            {/* Océan */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 3]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
            </mesh>
            <Text position={[-2, -1.5, 0]} fontSize={0.3} color="#3B82F6">Océan</Text>

            {/* Soleil */}
            <mesh position={[3, 2, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={2} />
            </mesh>
            <Text position={[3, 2.8, 0]} fontSize={0.3} color="#FCD34D">Soleil</Text>

            {/* Évaporation (flèches montantes) */}
            <mesh position={[0, -0.5, 0]}>
                <coneGeometry args={[0.1, 0.5, 8]} />
                <meshStandardMaterial color="#60A5FA" transparent opacity={0.7} />
            </mesh>
            <Text position={[0.5, -0.5, 0]} fontSize={0.25} color="white">Évaporation</Text>

            {/* Nuages */}
            <group position={[0, 1.5, 0]}>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.4, 16, 16]} />
                    <meshStandardMaterial color="#E5E7EB" />
                </mesh>
                <mesh position={[0.5, 0.1, 0]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#E5E7EB" />
                </mesh>
                <mesh position={[-0.4, 0.05, 0]}>
                    <sphereGeometry args={[0.35, 16, 16]} />
                    <meshStandardMaterial color="#E5E7EB" />
                </mesh>
            </group>
            <Text position={[0, 2.2, 0]} fontSize={0.3} color="white">Nuages (Condensation)</Text>

            {/* Pluie */}
            {Array.from({ length: 5 }).map((_, i) => (
                <mesh key={i} position={[-1 + i * 0.5, 0.5, 0]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
            ))}
            <Text position={[-1.5, 0.8, 0]} fontSize={0.25} color="#3B82F6">Précipitations</Text>

            {/* Montagne */}
            <mesh position={[-2, -1, 0]}>
                <coneGeometry args={[0.8, 1.5, 4]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <Text position={[-2, 0.2, 0]} fontSize={0.25} color="white">Montagne</Text>
        </group>
    );
}

// Composant Système Digestif (Amélioré)
function DigestiveSystem() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">SYSTÈME DIGESTIF</Text>

            {/* Bouche */}
            <mesh position={[0, 2, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#EC4899" />
            </mesh>
            <Text position={[0.5, 2, 0]} fontSize={0.3} color="#EC4899">Bouche</Text>

            {/* Œsophage */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 1.5, 16]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>

            {/* Estomac */}
            <mesh position={[0, 0, 0]} scale={[1.2, 1, 0.8]}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>
            <Text position={[1, 0, 0]} fontSize={0.3} color="#EF4444">Estomac</Text>

            {/* Intestin grêle */}
            <group position={[0, -1, 0]}>
                <mesh position={[0.3, 0, 0]}>
                    <torusGeometry args={[0.4, 0.1, 16, 32]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[-0.3, -0.3, 0]}>
                    <torusGeometry args={[0.3, 0.1, 16, 32]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
            </group>
            <Text position={[1, -1, 0]} fontSize={0.3} color="#10B981">Intestin Grêle</Text>

            {/* Gros intestin */}
            <mesh position={[0, -2, 0]}>
                <torusGeometry args={[0.5, 0.15, 16, 32]} />
                <meshStandardMaterial color="#8B5CF6" />
            </mesh>
            <Text position={[1, -2, 0]} fontSize={0.3} color="#8B5CF6">Gros Intestin</Text>
        </group>
    );
}

// Composant Réaction Chimique (Amélioré)
function ChemicalReaction() {
    return (
        <group>
            <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">RÉACTION CHIMIQUE</Text>

            {/* Molécules réactifs (gauche) */}
            <group position={[-2, 0, 0]}>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <mesh position={[0.6, 0, 0]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
            </group>
            <Text position={[-2, -0.8, 0]} fontSize={0.3} color="white">Réactifs (A + B)</Text>

            {/* Flèche de réaction */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color="#FCD34D" />
            </mesh>
            <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <coneGeometry args={[0.15, 0.4, 16]} />
                <meshStandardMaterial color="#FCD34D" />
            </mesh>
            <Text position={[0, 0.5, 0]} fontSize={0.4} color="#FCD34D">→</Text>

            {/* Molécules produits (droite) */}
            <group position={[2, 0, 0]}>
                <mesh position={[0, 0.3, 0]}>
                    <sphereGeometry args={[0.25, 32, 32]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[0, -0.3, 0]}>
                    <sphereGeometry args={[0.25, 32, 32]} />
                    <meshStandardMaterial color="#8B5CF6" />
                </mesh>
            </group>
            <Text position={[2, -0.8, 0]} fontSize={0.3} color="white">Produits (C + D)</Text>

            <Text position={[0, -1.5, 0]} fontSize={0.3} color="gray">Conservation de la matière</Text>
        </group>
    );
}

// Composant Forces et Mouvement (Amélioré)
function ForcePhysics() {
    return (
        <group>
            <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">FORCES ET MOUVEMENT</Text>

            {/* Objet (cube) */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>
            <Text position={[0, -0.8, 0]} fontSize={0.3} color="white">Objet (m)</Text>

            {/* Vecteurs de force */}
            {/* Force appliquée (vers la droite) */}
            <group position={[1, 0, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 1.5, 16]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <mesh position={[0.75, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.15, 0.4, 16]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
            </group>
            <Text position={[2, 0.5, 0]} fontSize={0.3} color="#EF4444">Force F</Text>

            {/* Force de gravité (vers le bas) */}
            <group position={[0, -1, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <mesh position={[0, -0.5, 0]} rotation={[Math.PI, 0, 0]}>
                    <coneGeometry args={[0.15, 0.4, 16]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
            </group>
            <Text position={[0.5, -1.5, 0]} fontSize={0.3} color="#10B981">Poids P</Text>

            {/* Sol */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 6]} />
                <meshStandardMaterial color="#9CA3AF" transparent opacity={0.3} />
            </mesh>
            <Text position={[-2, -1.8, 0]} fontSize={0.25} color="gray">Sol</Text>

            <Text position={[0, -2.8, 0]} fontSize={0.3} color="white">F = m × a</Text>
        </group>
    );
}

// Composant Plaques Tectoniques (Amélioré)
function TectonicPlates() {
    return (
        <group>
            <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">TECTONIQUE DES PLAQUES</Text>

            {/* Plaque 1 */}
            <mesh position={[-1.5, 0, 0]}>
                <boxGeometry args={[3, 0.5, 3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <Text position={[-1.5, 0.5, 0]} fontSize={0.3} color="white">Plaque 1</Text>

            {/* Plaque 2 */}
            <mesh position={[1.5, 0.2, 0]}>
                <boxGeometry args={[3, 0.5, 3]} />
                <meshStandardMaterial color="#A0522D" />
            </mesh>
            <Text position={[1.5, 0.7, 0]} fontSize={0.3} color="white">Plaque 2</Text>

            {/* Magma (sous les plaques) */}
            <mesh position={[0, -1, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.5} />
            </mesh>
            <Text position={[0, -2, 0]} fontSize={0.3} color="#FF4500">Magma (Chaud)</Text>

            {/* Volcan */}
            <mesh position={[0, 0.5, 0]}>
                <coneGeometry args={[0.5, 1.5, 32]} />
                <meshStandardMaterial color="#654321" />
            </mesh>
            <Text position={[0, 1.5, 0]} fontSize={0.3} color="white">Volcan</Text>

            {/* Flèches de mouvement */}
            <Text position={[-2.5, 0, 0]} fontSize={0.4} color="white">←</Text>
            <Text position={[2.5, 0, 0]} fontSize={0.4} color="white">→</Text>
        </group>
    );
}












// Composant Séparation des Mélanges (Décantation et Filtration)
function MixtureSeparation() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">SÉPARATION DES MÉLANGES</Text>

            {/* Décantation */}
            <group position={[-3, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.3} color="#3B82F6">1. Décantation</Text>
                {/* Becher */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.8, 0.8, 2, 32]} />
                    <meshStandardMaterial color="white" transparent opacity={0.3} side={2} />
                </mesh>
                {/* Eau */}
                <mesh position={[0, 0.2, 0]}>
                    <cylinderGeometry args={[0.75, 0.75, 1, 32]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.6} />
                </mesh>
                {/* Boue/Sable au fond */}
                <mesh position={[0, -0.8, 0]}>
                    <cylinderGeometry args={[0.75, 0.75, 0.4, 32]} />
                    <meshStandardMaterial color="#8B4513" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.25} color="gray">Sable (Lourd)</Text>
            </group>

            {/* Filtration */}
            <group position={[3, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.3} color="#10B981">2. Filtration</Text>

                {/* Entonnoir */}
                <mesh position={[0, 1, 0]}>
                    <coneGeometry args={[0.8, 1, 32, 1, true]} />
                    <meshStandardMaterial color="#9CA3AF" transparent opacity={0.5} side={2} />
                </mesh>
                <mesh position={[0, 0.2, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
                    <meshStandardMaterial color="#9CA3AF" transparent opacity={0.5} />
                </mesh>

                {/* Filtre Papier */}
                <mesh position={[0, 1, 0]}>
                    <coneGeometry args={[0.7, 0.8, 32, 1, true]} />
                    <meshStandardMaterial color="white" side={2} />
                </mesh>

                {/* Becher de récupération */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
                    <meshStandardMaterial color="white" transparent opacity={0.3} />
                </mesh>

                {/* Eau filtrée */}
                <mesh position={[0, -1.5, 0]}>
                    <cylinderGeometry args={[0.55, 0.55, 0.5, 32]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.8} />
                </mesh>

                {/* Gouttes */}
                <mesh position={[0, -0.4, 0]}>
                    <sphereGeometry args={[0.08]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>

                <Text position={[0, -2, 0]} fontSize={0.25} color="#3B82F6">Eau Limpide</Text>
            </group>
        </group>
    );
}

// Composant Masse et Volume
function MassVolume() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">MASSE vs VOLUME</Text>

            {/* Balance à fléau */}
            <group position={[0, -1, 0]}>
                {/* Socle */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.2, 0.5, 2, 16]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Fléau */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, -0.1]}>
                    <boxGeometry args={[6, 0.2, 0.2]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>

                {/* Plateau Gauche (Lourd, Petit) */}
                <group position={[-2.8, 0.3, 0]} rotation={[0, 0, -0.1]}>
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[1, 1, 0.1, 32]} />
                        <meshStandardMaterial color="#E5E7EB" />
                    </mesh>
                    {/* Objet Lourd (Cube Fer) */}
                    <mesh position={[0, 0.3, 0]}>
                        <boxGeometry args={[0.8, 0.8, 0.8]} />
                        <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <Text position={[0, 1, 0]} fontSize={0.3} color="white">Plomb (1kg)</Text>
                    <Text position={[0, 1.3, 0]} fontSize={0.25} color="gray">Petit Volume</Text>
                </group>

                {/* Plateau Droit (Léger, Gros) */}
                <group position={[2.8, -0.3, 0]} rotation={[0, 0, -0.1]}>
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[1, 1, 0.1, 32]} />
                        <meshStandardMaterial color="#E5E7EB" />
                    </mesh>
                    {/* Objet Léger (Ballon) */}
                    <mesh position={[0, 0.8, 0]}>
                        <sphereGeometry args={[1.2, 32, 32]} />
                        <meshStandardMaterial color="#FCD34D" />
                    </mesh>
                    <Text position={[0, 2.3, 0]} fontSize={0.3} color="white">Plumes (0.1kg)</Text>
                    <Text position={[0, 2.6, 0]} fontSize={0.25} color="gray">Grand Volume</Text>
                </group>
            </group>

            <Text position={[0, -3, 0]} fontSize={0.3} color="#F59E0B">La balance penche vers la Masse la plus grande !</Text>
        </group>
    );
}

// Composant Purification Eau
function WaterPurification() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#60A5FA">PURIFICATION DE L&apos;EAU</Text>

            {/* Colonne de filtration */}
            <group position={[0, 0, 0]}>
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1, 1, 5, 32]} />
                    <meshStandardMaterial color="white" transparent opacity={0.2} side={2} />
                </mesh>

                {/* Couche Charbon (Noir) */}
                <mesh position={[0, -1.5, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[1.5, -1.5, 0]} fontSize={0.3} color="white">Charbon Actif</Text>

                {/* Couche Sable Fin (Jaune pale) */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#FDE047" />
                </mesh>
                <Text position={[1.5, -0.5, 0]} fontSize={0.3} color="white">Sable Fin</Text>

                {/* Couche Gravier (Gris) */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                <Text position={[1.5, 0.5, 0]} fontSize={0.3} color="white">Gravier</Text>

                {/* Eau Sale en haut */}
                <mesh position={[0, 1.8, 0]}>
                    <cylinderGeometry args={[0.95, 0.95, 1, 32]} />
                    <meshStandardMaterial color="#78350F" transparent opacity={0.8} />
                </mesh>
                <Text position={[0, 2.5, 0]} fontSize={0.3} color="#78350F">Eau Boueuse</Text>

                {/* Goutte Eau Propre en bas */}
                <mesh position={[0, -3, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <Text position={[0, -3.5, 0]} fontSize={0.3} color="#60A5FA">Eau Propre</Text>
            </group>
        </group>
    );
}

// Composant Formes Géométriques
function GeometricShapes() {
    const groupRef = useRef();
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={groupRef}>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">SOLIDES GÉOMÉTRIQUES</Text>

            {/* Cube */}
            <group position={[-3, 0, 0]}>
                <mesh>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial color="#EF4444" wireframe={true} />
                </mesh>
                <mesh>
                    <boxGeometry args={[1.4, 1.4, 1.4]} />
                    <meshStandardMaterial color="#EF4444" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Cube</Text>
            </group>

            {/* Sphère */}
            <group position={[-1, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.9, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" wireframe={true} />
                </mesh>
                <mesh>
                    <sphereGeometry args={[0.85, 32, 32]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Sphère</Text>
            </group>

            {/* Cylindre */}
            <group position={[1, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.7, 0.7, 1.5, 32]} />
                    <meshStandardMaterial color="#10B981" wireframe={true} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.65, 0.65, 1.5, 32]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Cylindre</Text>
            </group>

            {/* Cône */}
            <group position={[3, 0, 0]}>
                <mesh>
                    <coneGeometry args={[0.8, 1.5, 32]} />
                    <meshStandardMaterial color="#F59E0B" wireframe={true} />
                </mesh>
                <mesh>
                    <coneGeometry args={[0.75, 1.4, 32]} />
                    <meshStandardMaterial color="#F59E0B" transparent opacity={0.3} />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Cône</Text>
            </group>
        </group>
    );
}

// Composant Mesure Angles
function AngleMeasurement() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">TYPES D&apos;ANGLES</Text>

            {/* Angle Aigu */}
            <group position={[-3, 0, 0]}>
                <mesh position={[0, 0, 0]} rotation={[0, 0, 0.5]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} position={[0, 1, 0]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <mesh position={[0, 0, 0]} rotation={[0, 0, -0.5]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} position={[0, 1, 0]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                {/* Arc */}
                <mesh position={[0, 0.5, 0]}>
                    <torusGeometry args={[0.5, 0.02, 16, 32, 1]} rotation={[0, 0, -0.5]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Aigu (&lt;90°)</Text>
            </group>

            {/* Angle Droit */}
            <group position={[0, 0, 0]}>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Carré angle droit */}
                <mesh position={[0.3, 0.3, 0]}>
                    <boxGeometry args={[0.5, 0.02, 0.02]} position={[0, 0.25, 0]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[0.5, 0.25, 0]}>
                    <boxGeometry args={[0.02, 0.5, 0.02]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Droit (90°)</Text>
            </group>

            {/* Angle Obtus */}
            <group position={[3, 0, 0]}>
                <mesh position={[0, 0, 0]} rotation={[0, 0, 1]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} position={[0, 1, 0]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <mesh position={[2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.3} color="white">Obtus (&gt;90°)</Text>
            </group>
        </group>
    );
}

// Composant Respiration Humaine
function HumanRespiration() {
    const lungsRef = useRef();
    useFrame((state) => {
        if (lungsRef.current) {
            // Animation respiration (scale up/down)
            const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            lungsRef.current.scale.set(s, s, s);
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#FCA5A5">RESPIRATION</Text>

            {/* Trachée */}
            <mesh position={[0, 2, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
                <meshStandardMaterial color="#FCA5A5" />
            </mesh>

            <group ref={lungsRef} position={[0, 0.5, 0]}>
                {/* Poumon Gauche */}
                <mesh position={[-0.8, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} scale={[1, 1.5, 1]} />
                    <meshStandardMaterial color="#FECACA" />
                </mesh>
                {/* Poumon Droit */}
                <mesh position={[0.8, 0, 0]}>
                    <sphereGeometry args={[0.8, 32, 32]} scale={[1, 1.5, 1]} />
                    <meshStandardMaterial color="#FECACA" />
                </mesh>
            </group>

            {/* Diaphragme */}
            <mesh position={[0, -1.2, 0]} scale={[2, 0.5, 1]}>
                <sphereGeometry args={[1, 32, 32, 0, Math.PI]} rotation={[-Math.PI, 0, 0]} />
                <meshStandardMaterial color="#BE123C" side={2} />
            </mesh>

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="white">Diaphragme (Muscle)</Text>
            <Text position={[-2, 0, 0]} fontSize={0.2} color="#FCA5A5">Inspiration : Volume Augmente</Text>
            <Text position={[2, 0, 0]} fontSize={0.2} color="#FCA5A5">Expiration : Volume Diminue</Text>
        </group>
    );
}

// Composant Mouvements Terre
function EarthMovement() {
    const earthRef = useRef();
    const groupRef = useRef();

    useFrame((state) => {
        if (earthRef.current) {
            // Rotation sur elle-même
            earthRef.current.rotation.y += 0.02;
        }
        if (groupRef.current) {
            // Révolution autour du soleil
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ROTATION ET RÉVOLUTION</Text>

            {/* Soleil */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={2} />
            </mesh>
            <Text position={[0, 1.8, 0]} fontSize={0.3} color="#F59E0B">Soleil</Text>

            {/* axe de révolution */}
            <group ref={groupRef}>
                {/* Terre */}
                <group position={[4, 0, 0]}>
                    <mesh ref={earthRef} rotation={[0, 0, 23.5 * Math.PI / 180]}> {/* Axe incliné */}
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color="#3B82F6" roughness={0.5} />
                        {/* Patch vert pour continent */}
                        <mesh position={[0.4, 0, 0]}>
                            <sphereGeometry args={[0.1]} />
                            <meshStandardMaterial color="#10B981" />
                        </mesh>
                    </mesh>
                    {/* Axe de rotation visuel */}
                    <mesh rotation={[0, 0, 23.5 * Math.PI / 180]}>
                        <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <Text position={[0, 0.8, 0]} fontSize={0.2} color="white">Terre</Text>
                </group>
            </group>

            {/* Orbite */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[4, 0.02, 16, 100]} />
                <meshBasicMaterial color="#3B82F6" opacity={0.2} transparent />
            </mesh>
        </group>
    );
}


// Composant Densité et Flottabilité
function DensityBuoyancy() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DENSITÉ ET FLOTTABILITÉ</Text>

            {/* Bassin d'eau */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[6, 2, 4]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.5} />
            </mesh>
            <Text position={[0, -2.2, 0]} fontSize={0.3} color="#3B82F6">Eau (Densité = 1)</Text>

            {/* Objet qui coule (Pierre) */}
            <group position={[-1.5, -1.8, 0]}>
                <mesh>
                    <dodecahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                <Text position={[0, 0.8, 0]} fontSize={0.25} color="white">Pierre (d &gt; 1)</Text>
                <Text position={[0, 1.1, 0]} fontSize={0.25} color="#EF4444">Coule</Text>
            </group>

            {/* Objet qui flotte (Bois) */}
            <group position={[1.5, -0.2, 0]}>
                <mesh>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color="#D97706" />
                </mesh>
                <Text position={[0, 0.8, 0]} fontSize={0.25} color="white">Bois (d &lt; 1)</Text>
                <Text position={[0, 1.1, 0]} fontSize={0.25} color="#10B981">Flotte</Text>
            </group>

            {/* Flèches Poussée Archimède */}
            <mesh position={[1.5, -0.8, 0]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            <mesh position={[1.5, -0.6, 0]} rotation={[0, 0, 0]}>
                <coneGeometry args={[0.1, 0.2, 8]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            <Text position={[2.5, -0.8, 0]} fontSize={0.2} color="#10B981">Poussée d&apos;Archimède</Text>

        </group>
    );
}

// Composant Réflexion Lumière
function LightReflection() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">RÉFLEXION DE LA LUMIÈRE</Text>

            {/* Miroir */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 2]} />
                <meshStandardMaterial color="#94A3B8" metalness={0.9} roughness={0.1} />
            </mesh>
            <Text position={[0, -1.2, 2]} fontSize={0.3} color="gray">Miroir Plan</Text>

            {/* Rayon Incident */}
            <mesh position={[-2, 1, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
                <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
            </mesh>
            <Text position={[-2.5, 2, 0]} fontSize={0.25} color="#FFFF00">Rayon Incident</Text>

            {/* Rayon Réfléchi */}
            <mesh position={[2, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
                <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
            </mesh>
            <Text position={[2.5, 2, 0]} fontSize={0.25} color="#FFFF00">Rayon Réfléchi</Text>

            {/* Normale */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
                <meshStandardMaterial color="white" transparent opacity={0.5} />
            </mesh>
            <Text position={[0.2, 1, 0]} fontSize={0.2} color="white">Normale</Text>

            {/* Angles */}
            <Text position={[-0.5, -0.5, 0]} fontSize={0.2} color="white">i = 45°</Text>
            <Text position={[0.5, -0.5, 0]} fontSize={0.2} color="white">r = 45°</Text>
        </group>
    );
}

// Composant Groupes Sanguins
function BloodGroups() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#EF4444">GROUPES SANGUINS (ABO)</Text>

            {/* Groupe A */}
            <group position={[-3, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Antigène A (Triangles) */}
                <mesh position={[0.5, 0.3, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <mesh position={[-0.5, -0.3, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe A</Text>
            </group>

            {/* Groupe B */}
            <group position={[-1, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Antigène B (Sphères) */}
                <mesh position={[0.5, 0.3, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <mesh position={[-0.5, -0.3, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe B</Text>
            </group>

            {/* Groupe AB */}
            <group position={[1, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Antigène A et B */}
                <mesh position={[0.5, 0.3, 0]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#60A5FA" />
                </mesh>
                <mesh position={[-0.5, -0.3, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe AB</Text>
            </group>

            {/* Groupe O */}
            <group position={[3, 1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Pas d'antigène */}
                <Text position={[0, -1, 0]} fontSize={0.3} color="white">Groupe O</Text>
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.25} color="white">Donneur Universel : O | Receveur Universel : AB</Text>
        </group>
    );
}

// Composant Reproduction Humaine
function HumanReproduction() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#F472B6">FÉCONDATION</Text>

            {/* Ovule */}
            <group position={[0, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color="#FBCFE8" transparent opacity={0.8} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="#BE185D" />
                </mesh>
                <Text position={[0, 1.8, 0]} fontSize={0.3} color="#F472B6">Ovule (Maman)</Text>
            </group>

            {/* Spermatozoïdes */}
            <group position={[-2.5, 0.5, 0]} rotation={[0, 0, -0.5]}>
                <mesh>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.05, 1]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>
            <group position={[-2.8, -0.5, 0]} rotation={[0, 0, 0.2]}>
                <mesh>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.05, 1]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>
            <Text position={[-3.5, 0, 0]} fontSize={0.3} color="white">Spermatozoïdes (Papa)</Text>

            <mesh position={[-1.7, 0.2, 0]} rotation={[0, 0, -0.5]}>
                <cylinderGeometry args={[0.05, 0.05, 1]} />
                <meshStandardMaterial color="#F472B6" />
            </mesh>
            <Text position={[0, -2, 0]} fontSize={0.3} color="#F472B6">Rencontre = Zygote (Bébé)</Text>
        </group>
    );
}

// Composant Propagation Lumière
function LightPropagation() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#FFFF00">PROPAGATION RECTILIGNE</Text>

            {/* Source Lumineuse (Ampoule) */}
            <group position={[-3, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" />
                </mesh>
                <pointLight intensity={1} distance={5} />
            </group>

            {/* Obstacle (Balle) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.8]} />
                <meshStandardMaterial color="#1F2937" />
            </mesh>

            {/* Écran */}
            <mesh position={[3, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[4, 4]} />
                <meshStandardMaterial color="white" side={2} />
            </mesh>

            {/* Ombre sur l'écran (Disque noir) */}
            <mesh position={[2.95, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <circleGeometry args={[1.2, 32]} />
                <meshBasicMaterial color="black" opacity={0.8} transparent />
            </mesh>

            {/* Cône d'ombre */}
            <mesh position={[1.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <coneGeometry args={[0.8, 3, 32, 1, true]} />
                <meshBasicMaterial color="black" transparent opacity={0.1} />
            </mesh>

            <Text position={[3, -2.5, 0]} fontSize={0.3} color="white">Zone d&apos;Ombre</Text>
            <Text position={[-1, -2.5, 0]} fontSize={0.25} color="#FFFF00">La lumière ne contourne pas l&apos;obstacle !</Text>
        </group>
    );
}

// Composant Atome vs Molécule
function AtomMoleculeIntro() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ATOMES vs MOLÉCULES</Text>

            {/* Atomes isolés */}
            <group position={[-2.5, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.3} color="#FCA5A5">Atomes (Briques)</Text>
                {/* Oxygène */}
                <mesh position={[-0.8, 0, 0]}>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[-0.8, -0.8, 0]} fontSize={0.3} color="white">O</Text>

                {/* Hydrogène */}
                <mesh position={[0.8, 0.5, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <Text position={[0.8, -0.2, 0]} fontSize={0.3} color="white">H</Text>

                {/* Carbone */}
                <mesh position={[0.8, -0.8, 0]}>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[0.8, -1.6, 0]} fontSize={0.3} color="white">C</Text>
            </group>

            {/* Molécule (Construction) */}
            <group position={[2.5, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.3} color="#60A5FA">Molécule (Maison)</Text>
                {/* H2O */}
                <group>
                    <mesh>
                        <sphereGeometry args={[0.5]} />
                        <meshStandardMaterial color="#EF4444" />
                    </mesh>
                    <mesh position={[-0.5, 0.5, 0]}>
                        <sphereGeometry args={[0.3]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <mesh position={[0.5, 0.5, 0]}>
                        <sphereGeometry args={[0.3]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <Text position={[0, -1, 0]} fontSize={0.3} color="#60A5FA">H₂O (Eau)</Text>
                </group>
            </group>

            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.1, 4, 0.1]} />
                <meshStandardMaterial color="white" opacity={0.5} transparent />
            </mesh>
        </group>
    );
}

// Composant Visualiseur Fractions
function FractionVisualizer() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">FRACTIONS</Text>

            {/* 1/2 */}
            <group position={[-2.5, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">1/2</Text>
                {/* Camembert complet */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Demi Camembert */}
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[1, 1, 0.1, 32, 1, false, 0, Math.PI]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="gray">La moitié</Text>
            </group>

            {/* 1/4 */}
            <group position={[0, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">1/4</Text>
                {/* Camembert complet */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* Quart Camembert */}
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[1, 1, 0.1, 32, 1, false, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="gray">Le quart</Text>
            </group>

            {/* 3/4 */}
            <group position={[2.5, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="white">3/4</Text>
                {/* Camembert complet */}
                <mesh>
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    <meshStandardMaterial color="#4B5563" />
                </mesh>
                {/* 3 Quarts Camembert */}
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[1, 1, 0.1, 32, 1, false, 0, 3 * Math.PI / 2]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="gray">Trois quarts</Text>
            </group>
        </group>
    );
}

// Composant Théorème Pythagore
function PythagorasTheorem() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">THÉORÈME DE PYTHAGORE</Text>
            <Text position={[0, 2.8, 0]} fontSize={0.3} color="#FCD34D">a² + b² = c²</Text>

            {/* Triangle Rectangle */}
            <group position={[0, -0.5, 0]}>

                {/* Coté a (3) */}
                <mesh position={[0, 1.5, 0]}>
                    <boxGeometry args={[0.1, 3, 0.1]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[-0.5, 1.5, 0]} fontSize={0.3} color="#EF4444">a (3)</Text>

                {/* Coté b (4) */}
                <mesh position={[2, 0, 0]}>
                    <boxGeometry args={[4, 0.1, 0.1]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[2, -0.5, 0]} fontSize={0.3} color="#3B82F6">b (4)</Text>

                {/* Hypoténuse c (5) */}
                <mesh position={[2, 1.5, 0]} rotation={[0, 0, -0.6435]}> {/* atan(3/4) */}
                    <boxGeometry args={[0.1, 5, 0.1]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[2.5, 2.5, 0]} fontSize={0.3} color="#10B981">c (5)</Text>

                {/* Carrés Visuels */}
                <mesh position={[-1.5, 1.5, 0]}>
                    <boxGeometry args={[3, 3, 0.05]} />
                    <meshStandardMaterial color="#EF4444" transparent opacity={0.2} />
                </mesh>
                <Text position={[-1.5, 1.5, 0.1]} fontSize={0.3} color="white">9</Text>

                <mesh position={[2, -2, 0]}>
                    <boxGeometry args={[4, 4, 0.05]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.2} />
                </mesh>
                <Text position={[2, -2, 0.1]} fontSize={0.3} color="white">16</Text>

                <mesh position={[3.5, 3.5, 0]} rotation={[0, 0, -0.6435]}>
                    <boxGeometry args={[5, 0.05, 5]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.2} />
                </mesh>
                <Text position={[3.5, 3.5, 0.5]} fontSize={0.3} color="white">25</Text>
            </group>

            <Text position={[0, -4, 0]} fontSize={0.3} color="white">9 + 16 = 25 !</Text>
        </group>
    );
}

// Composant Échelle pH
function PHScale() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ÉCHELLE DE pH</Text>

            {/* Barre de dégradé */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[10, 1, 0.1]} />
                <meshStandardMaterial vertexColors={true} /> {/* Simplification : Material couleur unique pour l'instant si vertexColors complexe */}
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Segments colorés manuels car vertexColors complexe en JSX pur */}
            <mesh position={[-4.5, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.1]} />
                <meshStandardMaterial color="#EF4444" /> {/* Rouge Acide */}
            </mesh>
            <Text position={[-4.5, 1, 0]} fontSize={0.3} color="#EF4444">0</Text>

            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.1]} />
                <meshStandardMaterial color="#10B981" /> {/* Vert Neutre */}
            </mesh>
            <Text position={[0, 1, 0]} fontSize={0.3} color="#10B981">7</Text>

            <mesh position={[4.5, 0, 0]}>
                <boxGeometry args={[1, 1.2, 0.1]} />
                <meshStandardMaterial color="#3B82F6" /> {/* Bleu Basique */}
            </mesh>
            <Text position={[4.5, 1, 0]} fontSize={0.3} color="#3B82F6">14</Text>

            {/* Flèche curseur */}
            <mesh position={[-2, -1, 0]}>
                <coneGeometry args={[0.2, 0.5, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <Text position={[-2, -1.8, 0]} fontSize={0.3} color="#F59E0B">Citron (pH 2)</Text>

            <mesh position={[0, -1, 0]}>
                <coneGeometry args={[0.2, 0.5, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <Text position={[0, -1.8, 0]} fontSize={0.3} color="#10B981">Eau (pH 7)</Text>

            <mesh position={[3, -1, 0]}>
                <coneGeometry args={[0.2, 0.5, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <Text position={[3, -1.8, 0]} fontSize={0.3} color="#3B82F6">Savon (pH 10)</Text>

            <Text position={[-3, 2, 0]} fontSize={0.4} color="#EF4444">ACIDE</Text>
            <Text position={[3, 2, 0]} fontSize={0.4} color="#3B82F6">BASIQUE</Text>
        </group>
    );
}

// Composant Propriétés Triangles
function TrianglesProperties() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DROITES DU TRIANGLE</Text>

            {/* Triangle */}
            <line>
                <bufferGeometry />
                {/* Sommets : A(0, 2), B(-2, -1), C(2, -1) */}
                {/* Rendu simplifié par des tubes */}
            </line>

            <group position={[0, 0, 0]}>
                {/* Côtés */}
                <mesh position={[-1, 0.5, 0]} rotation={[0, 0, 0.98]}>
                    <cylinderGeometry args={[0.05, 0.05, 3.6, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[1, 0.5, 0]} rotation={[0, 0, -0.98]}>
                    <cylinderGeometry args={[0.05, 0.05, 3.6, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
                    <meshStandardMaterial color="white" />
                </mesh>

                {/* Hauteur (Rouge) */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.03, 0.03, 3, 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[0.2, 0.5, 0]} fontSize={0.2} color="#EF4444">Hauteur</Text>

                {/* Médiane (Vert) */}
                <mesh position={[1, 0.5, 0]} rotation={[0, 0, -0.5]}>
                    <cylinderGeometry args={[0.03, 0.03, 3.5, 8]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                <Text position={[1.2, 0.8, 0]} fontSize={0.2} color="#10B981">Médiane</Text>

                <Text position={[0, -2, 0]} fontSize={0.25} color="gray">Somme des Angles = 180°</Text>
            </group>
        </group>
    );
}

// Composant Équations Linéaires
function LinearEquations() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">ÉQUATION = BALANCE</Text>
            <Text position={[0, 2.5, 0]} fontSize={0.4} color="#FCD34D">2x + 1 = 5</Text>

            {/* Balance */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.2, 0.5, 2, 16]} />
                <meshStandardMaterial color="#4B5563" />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[6, 0.2, 0.5]} />
                <meshStandardMaterial color="#9CA3AF" />
            </mesh>

            {/* Plateau Gauche : 2x + 1 */}
            <group position={[-2.5, 0.5, 0]}>
                {/* 2 Sacs X */}
                <mesh position={[-0.5, 0, 0]}>
                    <boxGeometry args={[0.8, 1, 0.8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[-0.5, 0, 0.5]} fontSize={0.5} color="white">x</Text>

                <mesh position={[0.5, 0, 0]}>
                    <boxGeometry args={[0.8, 1, 0.8]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0.5, 0, 0.5]} fontSize={0.5} color="white">x</Text>

                {/* 1 Poids */}
                <mesh position={[0, 1, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="white">1</Text>
            </group>

            {/* Plateau Droit : 5 */}
            <group position={[2.5, 0.5, 0]}>
                {/* 5 Poids */}
                <mesh position={[-0.6, 0, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[0.6, 0, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[-0.3, 0.6, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <mesh position={[0.3, 0.6, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#F59E0B" />
                </mesh>
                <Text position={[0, 1.5, 0]} fontSize={0.3} color="white">5</Text>
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="#10B981">Si on enlève 1 de chaque côté...</Text>
            <Text position={[0, -3, 0]} fontSize={0.3} color="#10B981">2x = 4 donc x = 2 !</Text>
        </group>
    );
}

// Composant Solutions et Solubilité
function SolutionsSolubility() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">DISSOLUTION</Text>

            {/* Becher */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 3, 32]} />
                <meshStandardMaterial color="white" transparent opacity={0.2} side={2} />
            </mesh>

            {/* Solvant (Eau) */}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[1.4, 1.4, 2.5, 32]} />
                <meshStandardMaterial color="#93C5FD" transparent opacity={0.6} />
            </mesh>
            <Text position={[2, 0, 0]} fontSize={0.3} color="#93C5FD">Solvant (Eau)</Text>

            {/* Soluté (Sucre - Particules dispersées) */}
            <group>
                {[...Array(20)].map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2]}>
                        <boxGeometry args={[0.1, 0.1, 0.1]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                ))}
            </group>
            <Text position={[-2, 1, 0]} fontSize={0.3} color="white">Soluté (Sucre)</Text>

            {/* Dépôt saturé au fond */}
            <group position={[0, -1.4, 0]}>
                {[...Array(10)].map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5), 0, (Math.random() - 0.5)]}>
                        <boxGeometry args={[0.1, 0.1, 0.1]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                ))}
            </group>
            <Text position={[0, -2, 0]} fontSize={0.25} color="white">Saturation (Dépôt)</Text>
        </group>
    );
}


// Composant Microbes et Bactéries
function MicrobesBacteria() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#10B981">MONDE MICROBIEN</Text>

            {/* Bactérie (Bacille) */}
            <group position={[-2.5, 0, 0]}>
                <mesh>
                    <capsuleGeometry args={[0.5, 1.5, 4, 16]} />
                    <meshStandardMaterial color="#10B981" roughness={0.4} />
                </mesh>
                {/* Cils/Flagelles (Lignes) */}
                <group>
                    <mesh position={[0, -1, 0]} rotation={[0, 0, 0.2]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
                        <meshStandardMaterial color="#065F46" />
                    </mesh>
                    <mesh position={[0, 1, 0]} rotation={[0, 0, -0.2]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
                        <meshStandardMaterial color="#065F46" />
                    </mesh>
                </group>
                <Text position={[0, -1.8, 0]} fontSize={0.3} color="white">Bactérie (Bacille)</Text>
                <Text position={[0, -2.2, 0]} fontSize={0.2} color="gray">Vivant (1 Cellule)</Text>
            </group>

            {/* Virus */}
            <group position={[0, 0, 0]}>
                <mesh>
                    <icosahedronGeometry args={[0.7, 0]} />
                    <meshStandardMaterial color="#EF4444" flatShading={true} />
                </mesh>
                {/* Picots */}
                {[...Array(8)].map((_, i) => (
                    <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]} position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.05, 0.05, 1.8]} />
                        <meshStandardMaterial color="#7F1D1D" />
                    </mesh>
                ))}
                <Text position={[0, -1.8, 0]} fontSize={0.3} color="white">Virus</Text>
                <Text position={[0, -2.2, 0]} fontSize={0.2} color="gray">Parasite (Non vivant)</Text>
            </group>

            {/* Champignon (Levure) */}
            <group position={[2.5, 0, 0]}>
                <mesh position={[0, -0.2, 0]}>
                    <sphereGeometry args={[0.6]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <mesh position={[0.4, 0.3, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>
                <Text position={[0, -1.8, 0]} fontSize={0.3} color="white">Levure</Text>
                <Text position={[0, -2.2, 0]} fontSize={0.2} color="gray">Champignon</Text>
            </group>
        </group>
    );
}

// Composant Chromosomes
function ChromosomesDivision() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#F472B6">CHROMOSOMES ET ADN</Text>

            {/* Chromosome X */}
            <group position={[-2, 0, 0]} rotation={[0, 0, 0.2]}>
                {/* Bras 1 */}
                <mesh position={[0, 0.5, 0]}>
                    <capsuleGeometry args={[0.3, 2, 4, 16]} />
                    <meshStandardMaterial color="#EC4899" />
                </mesh>
                {/* Bras 2 */}
                <mesh position={[0, -0.5, 0]}>
                    <capsuleGeometry args={[0.3, 2, 4, 16]} />
                    <meshStandardMaterial color="#EC4899" />
                </mesh>
                {/* Centromère */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="#DB2777" />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3} color="white">Chromosome Simple</Text>
            </group>

            {/* Chromosome Dupliqué (X shape) */}
            <group position={[2, 0, 0]}>
                <group rotation={[0, 0, 0.3]}>
                    <mesh position={[0, 1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                    <mesh position={[0, -1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                </group>
                <group rotation={[0, 0, -0.3]}>
                    <mesh position={[0, 1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                    <mesh position={[0, -1, 0]}>
                        <capsuleGeometry args={[0.3, 2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                </group>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="#2563EB" />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3} color="white">Chromosome Dupliqué</Text>
            </group>

            <Text position={[0, 2.5, 0]} fontSize={0.3} color="#F472B6">Contient l&apos;Information Génétique (ADN)</Text>
        </group>
    );
}

// Composant Structure Atome (Bohr)
function AtomicStructure() {
    const electronRef = useRef();
    useFrame(({ clock }) => {
        if (electronRef.current) {
            electronRef.current.rotation.y = clock.getElapsedTime() * 2;
            electronRef.current.rotation.z = clock.getElapsedTime() * 0.5;
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#60A5FA">STRUCTURE DE L&apos;ATOME</Text>

            {/* Noyau */}
            <group position={[0, 0, 0]}>
                {/* Protons (Rouge) */}
                <mesh position={[0.2, 0.2, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <mesh position={[-0.2, -0.1, 0.1]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>

                {/* Neutrons (Gris/Blanc) */}
                <mesh position={[-0.1, 0.2, -0.1]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                <mesh position={[0.1, -0.2, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                <Text position={[0, -0.8, 0]} fontSize={0.25} color="white">Noyau (Protons + Neutrons)</Text>
            </group>

            {/* Électrons (Orbites) */}
            <group ref={electronRef}>
                {/* Orbite 1 */}
                <group rotation={[Math.PI / 3, 0, 0]}>
                    <mesh>
                        <torusGeometry args={[2, 0.02, 16, 100]} />
                        <meshBasicMaterial color="#60A5FA" opacity={0.3} transparent />
                    </mesh>
                    <mesh position={[2, 0, 0]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" />
                    </mesh>
                </group>

                {/* Orbite 2 */}
                <group rotation={[-Math.PI / 3, 0, 0]}>
                    <mesh>
                        <torusGeometry args={[2, 0.02, 16, 100]} />
                        <meshBasicMaterial color="#60A5FA" opacity={0.3} transparent />
                    </mesh>
                    <mesh position={[-2, 0, 0]}>
                        <sphereGeometry args={[0.15]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" />
                    </mesh>
                </group>
            </group>
            <Text position={[0, 2.5, 0]} fontSize={0.25} color="#3B82F6">Électrons (-)</Text>
            <Text position={[0, -2.5, 0]} fontSize={0.3} color="white">La majorité de l&apos;atome est du VIDE !</Text>
        </group>
    );
}

// Composant Formation Ions
function IonsFormation() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#F59E0B">FORMATION DES IONS (Na + Cl)</Text>

            {/* Atome Sodium Na */}
            <group position={[-2, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="#9CA3AF">Sodium (Na)</Text>
                <mesh>
                    <sphereGeometry args={[0.8]} />
                    <meshStandardMaterial color="#9CA3AF" />
                </mesh>
                {/* Électron périphérique */}
                <mesh position={[1, 0.5, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.25} color="gray">Perd 1 électron</Text>
            </group>

            {/* Flèche transfert */}
            <group position={[0, 0.5, 0]}>
                <mesh rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.2, 1, 32]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>

            {/* Atome Chlore Cl */}
            <group position={[2, 0, 0]}>
                <Text position={[0, 1.5, 0]} fontSize={0.4} color="#10B981">Chlore (Cl)</Text>
                <mesh>
                    <sphereGeometry args={[0.9]} />
                    <meshStandardMaterial color="#10B981" />
                </mesh>
                {/* Électron gagné */}
                <mesh position={[-1, 0.5, 0]} visible={true}> {/* Simulé comme arrivant */}
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.25} color="gray">Gagne 1 électron</Text>
            </group>

            {/* Résultat Ions */}
            <group position={[0, -3, 0]}>
                <Text position={[-2, 0, 0]} fontSize={0.4} color="#F59E0B">Na⁺ (Cation)</Text>
                <Text position={[2, 0, 0]} fontSize={0.4} color="#059669">Cl⁻ (Anion)</Text>
                <Text position={[0, -0.6, 0]} fontSize={0.3} color="white">Ils s&apos;attirent = Sel (NaCl)</Text>
            </group>
        </group>
    );
}

// Composant Propagation Son
function SoundPropagation() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#818CF8">PROPAGATION DU SON</Text>

            {/* Haut Parleur */}
            <group position={[-3, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh>
                    <coneGeometry args={[0.8, 1, 32, 1, true]} />
                    <meshStandardMaterial color="#1F2937" side={2} />
                </mesh>
                <mesh position={[0, -0.5, 0]}>
                    <boxGeometry args={[1, 0.5, 1]} />
                    <meshStandardMaterial color="#111827" />
                </mesh>
            </group>
            <Text position={[-3, -1.5, 0]} fontSize={0.3} color="white">Source</Text>

            {/* Particules d'air compression/dilatation */}
            <group position={[0, 0, 0]}>
                {[...Array(5)].map((_, i) => (
                    <group key={i} position={[(i - 2) * 1.2, 0, 0]}>
                        {/* Zone Compression */}
                        <mesh position={[-0.2, 0, 0]}>
                            <sphereGeometry args={[0.08]} />
                            <meshStandardMaterial color="#818CF8" />
                        </mesh>
                        <mesh position={[0, 0.2, 0]}>
                            <sphereGeometry args={[0.08]} />
                            <meshStandardMaterial color="#818CF8" />
                        </mesh>
                        <mesh position={[0, -0.2, 0]}>
                            <sphereGeometry args={[0.08]} />
                            <meshStandardMaterial color="#818CF8" />
                        </mesh>

                        {/* Zone Dilatation (Vide relatif) */}
                    </group>
                ))}
            </group>

            <mesh position={[-1.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <cylinderGeometry args={[0.02, 0.02, 4]} />
                <meshStandardMaterial color="white" transparent opacity={0.2} />
            </mesh>

            <Text position={[3, 0, 0]} fontSize={0.3} color="white">Oreille</Text>
            <Text position={[0, -2.5, 0]} fontSize={0.3} color="#818CF8">Vibration des Molécules (Onde Mécanique)</Text>
            <Text position={[0, -3, 0]} fontSize={0.2} color="gray">Pas de son dans le vide !</Text>
        </group>
    );
}


// Composant Les Combustions
function CombustionReaction() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#EF4444">TRIANGLE DU FEU</Text>

            {/* Foyer Central */}
            <group position={[0, -1, 0]}>
                {/* Bois (Combustible) */}
                <mesh position={[0, 0, 0]} rotation={[0.2, 0.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                    <meshStandardMaterial color="#78350F" />
                </mesh>
                <mesh position={[0.2, 0, 0]} rotation={[-0.2, -0.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1.5]} />
                    <meshStandardMaterial color="#78350F" />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.3} color="#78350F">1. Combustible (Bois)</Text>

                {/* Flamme */}
                <mesh position={[0, 0.8, 0]}>
                    <coneGeometry args={[0.4, 1.2, 8]} />
                    <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" transparent opacity={0.8} />
                </mesh>
                <pointLight position={[0, 1, 0]} intensity={2} color="#F59E0B" distance={5} />
                <Text position={[0, 2, 0]} fontSize={0.3} color="#F59E0B">3. Chaleur</Text>
            </group>

            {/* Air (Comburant) */}
            <group position={[0, 0, 0]}>
                <mesh position={[-2, 1, 0]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                </mesh>
                <mesh position={[2, 1, 0]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
                </mesh>
                {[...Array(5)].map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5) * 3, (Math.random()) * 2, (Math.random() - 0.5) * 3]}>
                        <sphereGeometry args={[0.05]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                ))}
                <Text position={[2, 2, 0]} fontSize={0.3} color="#3B82F6">2. Comburant (O₂)</Text>
            </group>

            <Text position={[0, -3, 0]} fontSize={0.25} color="white">Si on enlève un élément, le feu s&apos;éteint !</Text>
        </group>
    );
}

// Composant Théorème de Thalès
function ThalesTheorem() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">THÉORÈME DE THALÈS</Text>

            {/* Sommet A */}
            <group position={[0, 2, 0]}>
                <Text position={[0, 0.2, 0]} fontSize={0.3} color="white">A</Text>
            </group>

            {/* Triangle */}
            {/* Lignes AB et AC */}
            <mesh position={[-1, 0.5, 0]} rotation={[0, 0, -0.5]}>
                <cylinderGeometry args={[0.03, 0.03, 3.5]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[1, 0.5, 0]} rotation={[0, 0, 0.5]}>
                <cylinderGeometry args={[0.03, 0.03, 3.5]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Ligne MN (Milieu - Petite base) */}
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 1.6, 8]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>
            <Text position={[-0.9, 0.5, 0]} fontSize={0.3} color="white">M</Text>
            <Text position={[0.9, 0.5, 0]} fontSize={0.3} color="white">N</Text>

            {/* Ligne BC (Base) */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 3.2, 8]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            <Text position={[-1.7, -1, 0]} fontSize={0.3} color="white">B</Text>
            <Text position={[1.7, -1, 0]} fontSize={0.3} color="white">C</Text>

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="#3B82F6">AM/AB = AN/AC = MN/BC</Text>
            <Text position={[0, -3, 0]} fontSize={0.25} color="gray">(MN) // (BC)</Text>
        </group>
    );
}

// Composant Cercle Trigo
function TrigCircle() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">CERCLE TRIGONOMÉTRIQUE</Text>

            {/* Cercle */}
            <mesh rotation={[0, 0, 0]}>
                <torusGeometry args={[2, 0.05, 16, 100]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Axes */}
            <mesh>
                <cylinderGeometry args={[0.02, 0.02, 5]} />
                <meshStandardMaterial color="gray" />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.02, 0.02, 5]} />
                <meshStandardMaterial color="gray" />
            </mesh>

            {/* Rayon et Angle (45°) */}
            <mesh rotation={[0, 0, Math.PI / 4]} position={[0.7, 0.7, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 2]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>
            <mesh position={[1.414, 1.414, 0]}>
                <sphereGeometry args={[0.1]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>

            {/* Projections */}
            {/* Cosinus (Horizontal - Rouge) */}
            <mesh position={[0.707, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.06, 0.06, 1.414]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>
            <Text position={[0.7, -0.3, 0]} fontSize={0.25} color="#EF4444">Cos</Text>

            {/* Sinus (Vertical - Vert) */}
            <mesh position={[1.414, 0.707, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 1.414]} />
                <meshStandardMaterial color="#10B981" />
            </mesh>
            <Text position={[1.6, 0.7, 0]} fontSize={0.25} color="#10B981">Sin</Text>

        </group>
    );
}

// Composant Cycle de l'Eau
function WaterCycleSim() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#3B82F6">CYCLE DE L&apos;EAU</Text>

            {/* Mer */}
            <mesh position={[2, -1.5, 0]}>
                <boxGeometry args={[3, 1, 3]} />
                <meshStandardMaterial color="#2563EB" transparent opacity={0.8} />
            </mesh>
            <Text position={[2, -2.2, 1.6]} fontSize={0.3} color="white">Océan</Text>

            {/* Terre/Montagne */}
            <mesh position={[-2, -1, 0]}>
                <coneGeometry args={[2, 2, 4]} />
                <meshStandardMaterial color="#059669" />
            </mesh>
            {/* Neige */}
            <mesh position={[-2, -0.2, 0]}>
                <coneGeometry args={[0.8, 0.6, 4]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Soleil */}
            <mesh position={[3, 2, 0]}>
                <sphereGeometry args={[0.5]} />
                <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" />
            </mesh>

            {/* Nuages */}
            <group position={[-1, 2, 0]}>
                <mesh>
                    <sphereGeometry args={[0.5]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[0.5, 0.2, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[-0.4, 0.1, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>

            {/* Flèches (Simplifiées par texte pour l'instant) */}
            <Text position={[3, 0.5, 0]} fontSize={0.25} color="#FBBF24">Évaporation ⬆</Text>
            <Text position={[-1, 1, 0]} fontSize={0.25} color="#3B82F6">Pluie ⬇</Text>
            <Text position={[-0.5, -1.5, 0]} fontSize={0.25} color="#60A5FA">Ruissellement ➡</Text>
        </group>
    );
}

// Composant Levier (Machines Simples)
function SimpleMachinesLever() {
    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white">LE LEVIER</Text>

            {/* Pivot (Fulcrum) */}
            <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
                <coneGeometry args={[0.5, 1, 3]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Barre (Planche) */}
            <mesh position={[0, -0.5, 0]} rotation={[0, 0, -0.2]}>
                <boxGeometry args={[6, 0.2, 0.5]} />
                <meshStandardMaterial color="#D97706" />
            </mesh>

            {/* Charge Lourde (A gauche, près du pivot) */}
            <group position={[-1.5, -0.2, 0]} rotation={[0, 0, -0.2]}>
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[0, 1.2, 0]} fontSize={0.3} color="white">50 kg</Text>
            </group>

            {/* Force Légère (A droite, loin du pivot) */}
            <group position={[2.5, -1, 0]} rotation={[0, 0, -0.2]}>
                <mesh position={[0, 0.4, 0]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, 0.8, 0]} fontSize={0.3} color="white">10 kg</Text>
            </group>

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="white">Plus le bras est long, plus c&apos;est facile !</Text>
        </group>
    );
}

// Composant Volcan
function VolcanoEruption() {
    const particleRef = useRef();
    useFrame(({ clock }) => {
        if (particleRef.current) {
            particleRef.current.position.y = -0.5 + (Math.sin(clock.getElapsedTime() * 2) + 1) * 1.5;
            particleRef.current.material.opacity = 1 - (particleRef.current.position.y / 3);
        }
    });

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#EF4444">ÉRUPTION VOLCANIQUE</Text>

            {/* Montagne Volcan */}
            <mesh position={[0, -1.5, 0]}>
                <coneGeometry args={[3, 3, 32, 1, true]} />
                <meshStandardMaterial color="#4B5563" />
            </mesh>

            {/* Chambre Magmatique */}
            <mesh position={[0, -3, 0]}>
                <sphereGeometry args={[1]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
            </mesh>

            {/* Cheminée */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.2, 0.5, 3]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" />
            </mesh>

            {/* Projection (Lave/Cendres) - Animation simple */}
            <mesh position={[0, 0, 0]} ref={particleRef}>
                <sphereGeometry args={[0.3]} />
                <meshStandardMaterial color="#EF4444" transparent />
            </mesh>
            <group position={[0, 1, 0]}>
                {[...Array(10)].map((_, i) => (
                    <mesh key={i} position={[(Math.random() - 0.5), Math.random(), (Math.random() - 0.5)]}>
                        <sphereGeometry args={[0.1]} />
                        <meshStandardMaterial color="gray" />
                    </mesh>
                ))}
            </group>
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
            case 'neuron':
                return <Neuron />;
            case 'blood':
                return <BloodStream />;
            case 'plant-cell':
                return <PlantCell />;
            case 'states-of-matter':
                return <StatesOfMatter />;
            case 'tectonics':
                return <TectonicPlates />;
            case 'chemical':
                return <ChemicalReaction />;
            case 'force':
                return <ForcePhysics />;
            case 'immune':
                return <ImmuneSystem />;
            case 'human-body':
                return <BloodStream />;
            case 'energy':
                return <EnergyConservation />;
            case 'weight-mass':
                return <WeightMass />;
            case 'thales':
                return <ThalesTheorem />;
            case 'trigonometry':
                return <TrigUnitCircle />;
            case 'plant-growth':
                return <PlantGrowth />;
            case 'food-chain':
                return <FoodChain />;
            case 'vertebrate-classification':
                return <VertebrateClassification />;
            case 'mixture-separation':
                return <MixtureSeparation />;
            case 'volume-mass':
                return <MassVolume />;
            case 'water-purification':
                return <WaterPurification />;
            case 'geometric-shapes':
                return <GeometricShapes />;
            case 'angles-measurement':
                return <AngleMeasurement />;
            case 'respiration-human':
                return <HumanRespiration />;
            case 'earth-movement':
                return <EarthMovement />;
            case 'density-buoyancy':
                return <DensityBuoyancy />;
            case 'light-reflection':
                return <LightReflection />;
            case 'blood-groups':
                return <BloodGroups />;
            case 'human-reproduction':
                return <HumanReproduction />;
            case 'light-propagation':
                return <LightPropagation />;
            case 'atom-molecule-intro':
                return <AtomMoleculeIntro />;
            case 'fraction-visualizer':
                return <FractionVisualizer />;
            case 'pythagoras-theorem':
                return <PythagorasTheorem />;
            case 'ph-scale':
                return <PHScale />;
            case 'triangles-properties':
                return <TrianglesProperties />;
            case 'linear-equations':
                return <LinearEquations />;
            case 'solutions-solubility':
                return <SolutionsSolubility />;
            case 'lens-optics':
                return <LensOptics />;
            case 'combustion':
                return <CombustionReaction />;
            case 'thales':
                return <ThalesTheorem />;
            case 'trigonometry':
                return <TrigCircle />;
            case 'water-cycle':
                return <WaterCycleSim />;
            case 'lever':
                return <SimpleMachinesLever />;
            case 'volcano':
                return <VolcanoEruption />;
            case 'microbes-bacteria':
                return <MicrobesBacteria />;
            case 'chromosomes-division':
                return <ChromosomesDivision />;
            case 'atomic-structure':
                return <AtomicStructure />;
            case 'ions-formation':
                return <IonsFormation />;
            case 'sound-propagation':
                return <SoundPropagation />;
            case 'electrochemical':
                return <ElectrochemicalCell />;
            case 'magnetic-field':
                return <MagneticField />;
            case 'diffraction':
                return <Diffraction />;
            case 'titration':
                return <Titration />;
            default:
                return <Atom {...config} />;
        }
    };

    return (
        <div className="w-full h-[calc(100vh-140px)] rounded-2xl overflow-hidden bg-gradient-to-br from-black to-slate-900 border border-white/20 relative">
            <Canvas>
                <Suspense fallback={null}>
                    {/* Caméra - Centrée et reculée pour voir toute la cellule */}
                    <PerspectiveCamera makeDefault position={[5, 4, 5]} />

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
