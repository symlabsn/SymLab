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

// Composant Neurone (Système Nerveux)
function Neuron() {
    return (
        <group>
            {/* Corps cellulaire (Soma) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#F59E0B" emissiveIntensity={0.5} />
            </mesh>

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

            {/* Influx nerveux (Particule qui voyage) */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={2} />
                {/* Animation simple via position dans le rendu final si possible, ici statique pour l'instant */}
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
            {Array.from({ length: 15 }).map((_, i) => (
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
            ))}

            {/* Globules Blancs */}
            {Array.from({ length: 3 }).map((_, i) => (
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
            ))}
        </group>
    );
}

// Composant Cellule Végétale (Photosynthèse)
function PlantCell() {
    return (
        <group>
            {/* Paroi cellulaire (Verte et rigide) */}
            <mesh>
                <boxGeometry args={[3, 4, 1]} />
                <meshStandardMaterial color="#10B981" transparent opacity={0.3} wireframe />
            </mesh>
            <mesh>
                <boxGeometry args={[2.8, 3.8, 0.8]} />
                <meshStandardMaterial color="#10B981" transparent opacity={0.1} />
            </mesh>

            {/* Chloroplastes (Usines vertes) */}
            {Array.from({ length: 6 }).map((_, i) => (
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
            ))}

            {/* Soleil (Source d'énergie) */}
            <mesh position={[2, 3, 2]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={2} />
            </mesh>
        </group>
    );
}

// Composant États de la Matière (Particules)
function StatesOfMatter() {
    return (
        <group>
            {/* Boîte contenant */}
            <mesh>
                <boxGeometry args={[4, 4, 4]} />
                <meshStandardMaterial color="#9CA3AF" wireframe transparent opacity={0.2} />
            </mesh>

            {/* Particules */}
            {Array.from({ length: 50 }).map((_, i) => (
                <mesh
                    key={`particle-${i}`}
                    position={[
                        (Math.random() - 0.5) * 3,
                        (Math.random() - 0.5) * 3,
                        (Math.random() - 0.5) * 3
                    ]}
                >
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
            ))}
        </group>
    );
}

// Composant Plaques Tectoniques
function TectonicPlates() {
    return (
        <group>
            {/* Plaque 1 */}
            <mesh position={[-1.5, 0, 0]}>
                <boxGeometry args={[3, 0.5, 3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>

            {/* Plaque 2 */}
            <mesh position={[1.5, 0.2, 0]}>
                <boxGeometry args={[3, 0.5, 3]} />
                <meshStandardMaterial color="#A0522D" />
            </mesh>

            {/* Magma (sous les plaques) */}
            <mesh position={[0, -1, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.5} />
            </mesh>

            {/* Volcan */}
            <mesh position={[0, 0.5, 0]}>
                <coneGeometry args={[0.5, 1.5, 32]} />
                <meshStandardMaterial color="#654321" />
            </mesh>
        </group>
    );
}

// Composant Réaction Chimique
function ChemicalReaction() {
    return (
        <group>
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

            {/* Flèche de réaction */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color="#FCD34D" />
            </mesh>
            <mesh position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <coneGeometry args={[0.15, 0.4, 16]} />
                <meshStandardMaterial color="#FCD34D" />
            </mesh>

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
        </group>
    );
}

// Composant Forces et Mouvement
function ForcePhysics() {
    return (
        <group>
            {/* Objet (cube) */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>

            {/* Vecteurs de force */}
            {/* Force vers la droite */}
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

            {/* Sol */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 6]} />
                <meshStandardMaterial color="#9CA3AF" transparent opacity={0.3} />
            </mesh>
        </group>
    );
}

// Composant Système Immunitaire
function ImmuneSystem() {
    return (
        <group>
            {/* Virus (ennemi) */}
            <mesh position={[0, 0, 0]}>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#DC2626" />
            </mesh>
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
        </group>
    );
}

// Composant Conservation de l'Énergie
function EnergyConservation() {
    return (
        <group>
            {/* Pendule */}
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

            {/* Énergie potentielle (haut) */}
            <mesh position={[-1.5, 0.5, 0]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={1} transparent opacity={0.7} />
            </mesh>

            {/* Trajectoire */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <torusGeometry args={[1.5, 0.02, 16, 100, Math.PI]} />
                <meshStandardMaterial color="#00F5D4" transparent opacity={0.3} />
            </mesh>
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
