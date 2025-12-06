'use client';
import { useRef, useMemo, useState } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars, Text, Line } from '@react-three/drei';
import { DNAHelix } from './DNAHelix';
import { LensOptics } from './LensOptics';
import { ElectrochemicalCell } from './ElectrochemicalCell';
import { MagneticField } from './MagneticField';
import { Diffraction } from './Diffraction';

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
    // Animation simple de l'angle
    const [angle, setAngle] = useState(0);
    useFrame((state) => {
        setAngle((state.clock.elapsedTime * 0.5) % (Math.PI * 2));
    });
    // const angle = Date.now() * 0.001 % (Math.PI * 2);

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
                <mesh position={[2 * Math.cos(angle), 2 * Math.sin(angle), 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="#FCD34D" />
                </mesh>

                {/* Lignes de projection */}
                {/* Sinus (Verticale) */}
                <mesh position={[2 * Math.cos(angle), Math.sin(angle), 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 2 * Math.sin(angle), 8]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                <Text position={[2.2, 1, 0]} fontSize={0.3} color="#EF4444">Sin</Text>

                {/* Cosinus (Horizontale) */}
                <mesh position={[Math.cos(angle), 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 2 * Math.cos(angle), 8]} />
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

function ElectronOrbitals({ electrons }) {
    const [time, setTime] = useState(0);
    useFrame((state) => setTime(state.clock.elapsedTime));

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

                        {/* Électron */}
                        <mesh
                            position={[
                                Math.cos(time * speed + offset) * orbitRadius,
                                0,
                                Math.sin(time * speed + offset) * orbitRadius
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

// Composant Interférences d'Ondes
function WaveInterference() {
    return (
        <group>
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">INTERFÉRENCES D'ONDES</Text>

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

// Composant Cellule (Amélioré avec étiquettes)
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
            {useMemo(() => Array.from({ length: 20 }).map((_, i) => {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                const radius = 1.6;
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
            }), [])}
            <Text position={[1.5, -1.5, 0]} fontSize={0.2} color="#EC4899">Ribosomes</Text>
        </group>
    );
}

// Composant Cellule Végétale (Amélioré : Photosynthèse animée)
function PlantCell() {
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
            {useMemo(() => Array.from({ length: 6 }).map((_, i) => (
                <mesh
                    key={`chloro-${i}`}
                    position={[
                        (Math.random() - 0.5) * 2,
                        (Math.random() - 0.5) * 3,
                        (Math.random() - 0.5) * 0.5
                    ]}
                >
                    <capsuleGeometry args={[0.2, 0.4, 4, 8]} />
                    <meshStandardMaterial color="#059669" />
                </mesh>
            )), [])}
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

// Composant États de la Matière (Amélioré : 3 états)
function StatesOfMatter() {
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
                {useMemo(() => Array.from({ length: 27 }).map((_, i) => (
                    <mesh key={i} position={[
                        (Math.random() - 0.5) * 1.5,
                        (Math.random() - 0.5) * 1 - 0.5, // Plus vers le bas
                        (Math.random() - 0.5) * 1.5
                    ]}>
                        <sphereGeometry args={[0.2]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                )), [])}
            </group>

            {/* GAZ */}
            <group position={[3, 0, 0]}>
                <Text position={[0, 2, 0]} fontSize={0.4} color="white">GAZ (Vapeur)</Text>
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#9CA3AF" wireframe transparent opacity={0.1} />
                </mesh>
                {/* Particules partout et espacées */}
                {useMemo(() => Array.from({ length: 15 }).map((_, i) => (
                    <mesh key={i} position={[
                        (Math.random() - 0.5) * 1.8,
                        (Math.random() - 0.5) * 1.8,
                        (Math.random() - 0.5) * 1.8
                    ]}>
                        <sphereGeometry args={[0.2]} />
                        <meshStandardMaterial color="#60A5FA" transparent opacity={0.8} />
                    </mesh>
                )), [])}
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

// Composant Vaisseau Sanguin (Circulation)
function BloodStream() {
    return (
        <group>
            {/* Vaisseau (Tube) */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[2, 2, 8, 32, 1, true]} />
                <meshStandardMaterial color="#EF4444" side={2} transparent opacity={0.3} />
            </mesh>

            {/* Globules Rouges */}
            {useMemo(() => Array.from({ length: 15 }).map((_, i) => (
                <mesh
                    key={`rbc-${i}`}
                    position={[
                        (Math.random() - 0.5) * 6,
                        (Math.random() - 0.5) * 2,
                        (Math.random() - 0.5) * 2
                    ]}
                    rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
                >
                    <torusGeometry args={[0.3, 0.15, 16, 32]} />
                    <meshStandardMaterial color="#DC2626" />
                </mesh>
            )), [])}
            <Text position={[-3, 1.5, 0]} fontSize={0.3} color="#DC2626">Globules Rouges (O2)</Text>

            {/* Globules Blancs */}
            {useMemo(() => Array.from({ length: 3 }).map((_, i) => (
                <mesh
                    key={`wbc-${i}`}
                    position={[
                        (Math.random() - 0.5) * 6,
                        (Math.random() - 0.5) * 1.5,
                        (Math.random() - 0.5) * 1.5
                    ]}
                >
                    <sphereGeometry args={[0.35, 32, 32]} />
                    <meshStandardMaterial color="#F3F4F6" roughness={0.8} />
                </mesh>
            )), [])}
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
            <Text position={[0, -3, 0]} fontSize={0.3} color="gray">"Est mangé par"</Text>
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
            <Text position={[0, 3, 0]} fontSize={0.5} color="white">CONSERVATION DE L'ÉNERGIE</Text>

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
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#3B82F6">CYCLE DE L'EAU</Text>

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
            case 'lens-optics':
                return <LensOptics />;
            case 'electrochemical':
                return <ElectrochemicalCell />;
            case 'magnetic-field':
                return <MagneticField />;
            case 'diffraction':
                return <Diffraction />;
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
