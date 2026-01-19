'use client';
import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';

// ============================================================================
// 1. CELL DISCOVERY (STRUCTURE DE LA CELLULE)
// ============================================================================
export function CellDiscovery() {
    const [cellType, setCellType] = useState('animal'); // 'animal' or 'plant'
    const [activeOrganelle, setActiveOrganelle] = useState(null);

    // FIXED: Use useMemo to ensure random positions are stable during hydration
    const mitoData = useMemo(() => [...Array(3)].map(() => ({
        pos: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(0.8),
        rot: [Math.random(), Math.random(), 0]
    })), []);

    const chloroData = useMemo(() => [...Array(4)].map(() => ({
        pos: new THREE.Vector3(Math.random() - 0.5, -0.8 + Math.random() * 0.5, Math.random() - 0.5).normalize().multiplyScalar(0.9)
    })), []);

    const organelles = {
        nucleus: { name: "Noyau", desc: "Le 'cerveau' de la cellule. Contient l'ADN.", color: "#8B5CF6" },
        mitochondria: { name: "Mitochondrie", desc: "Produit l'énergie (ATP) pour la cellule.", color: "#F59E0B" },
        cytoplasm: { name: "Cytoplasme", desc: "Gelée où baignent les organites.", color: "#A7F3D0" },
        membrane: { name: "Membrane", desc: "Protège la cellule et contrôle les échanges.", color: "#EC4899" },
        chloroplast: { name: "Chloroplaste (Plante)", desc: "Fait la photosynthèse (vert).", color: "#10B981" },
        vacuole: { name: "Vacuole (Plante)", desc: "Stocke l'eau et maintient la rigidité.", color: "#3B82F6" },
        wall: { name: "Paroi (Plante)", desc: "Coque rigide autour de la plante.", color: "#059669" }
    };

    return (
        <group>
            {/* UI Panel */}
            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Microscope Virtuel - Cellule 6ème">
                    <div className="space-y-4">
                        <div className="flex gap-2 bg-white/10 p-1 rounded-lg">
                            <button
                                onClick={() => setCellType('animal')}
                                className={`flex-1 py-1 rounded-md text-sm font-bold transition-all ${cellType === 'animal' ? 'bg-[#2DD4BF] text-black' : 'text-gray-400 hover:text-white'}`}
                            >
                                🦁 Animale
                            </button>
                            <button
                                onClick={() => setCellType('plant')}
                                className={`flex-1 py-1 rounded-md text-sm font-bold transition-all ${cellType === 'plant' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                🌻 Végétale
                            </button>
                        </div>

                        <div className="p-3 bg-black/40 rounded-lg border border-white/10">
                            <h4 className="text-[#2DD4BF] font-bold text-sm mb-1">
                                {activeOrganelle ? organelles[activeOrganelle]?.name : "Survolez un élément"}
                            </h4>
                            <p className="text-xs text-gray-300">
                                {activeOrganelle ? organelles[activeOrganelle]?.desc : "Explorez la cellule en 3D pour découvrir ses composants."}
                            </p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Light setup for the scene */}
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color={cellType === 'plant' ? '#10B981' : '#2DD4BF'} />

            {/* Cell Model */}
            <group scale={[2, 2, 2]}>
                {/* Membrane / Wall */}
                <mesh
                    onPointerOver={() => setActiveOrganelle(cellType === 'plant' ? 'wall' : 'membrane')}
                    onPointerOut={() => setActiveOrganelle(null)}
                >
                    {cellType === 'animal' ? (
                        <sphereGeometry args={[1.5, 32, 32]} />
                    ) : (
                        <boxGeometry args={[2.2, 3, 2.2]} /> // Cube shape for plant
                    )}
                    <meshPhysicalMaterial
                        color={cellType === 'animal' ? "#EC4899" : "#059669"}
                        transparent
                        opacity={0.3}
                        roughness={0.2}
                        metalness={0.1}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Cytoplasm (Inner glow) */}
                <mesh scale={0.95}>
                    {cellType === 'animal' ? (
                        <sphereGeometry args={[1.45, 32, 32]} />
                    ) : (
                        <boxGeometry args={[2.1, 2.9, 2.1]} />
                    )}
                    <meshBasicMaterial color={cellType === 'animal' ? "#FBCFE8" : "#A7F3D0"} transparent opacity={0.1} depthWrite={false} />
                </mesh>

                {/* Nucleus (Shared) */}
                <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                    <mesh position={[0, 0, 0]} onPointerOver={(e) => { e.stopPropagation(); setActiveOrganelle('nucleus'); }} onPointerOut={() => setActiveOrganelle(null)}>
                        <sphereGeometry args={[0.4, 32, 32]} />
                        <meshStandardMaterial color="#8B5CF6" roughness={0.3} />
                    </mesh>
                    <Text position={[0, 0.5, 0]} fontSize={0.2} color="white">Noyau</Text>
                </Float>

                {/* Mitochondria (Shared) - Multiple instances */}
                {mitoData.map((data, i) => (
                    <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <mesh position={data.pos} rotation={data.rot} onPointerOver={(e) => { e.stopPropagation(); setActiveOrganelle('mitochondria'); }}>
                            <capsuleGeometry args={[0.08, 0.3, 4, 8]} />
                            <meshStandardMaterial color="#F59E0B" />
                        </mesh>
                    </Float>
                ))}

                {/* Plant Specifics */}
                {cellType === 'plant' && (
                    <>
                        {/* Vacuole (Big blue blob) */}
                        <mesh position={[0, 0.8, 0]} onPointerOver={(e) => { e.stopPropagation(); setActiveOrganelle('vacuole'); }}>
                            <sphereGeometry args={[0.6, 32, 32]} />
                            <meshPhysicalMaterial color="#3B82F6" transmission={0.5} thickness={1} roughness={0} />
                        </mesh>
                        <Text position={[0, 0.8, 0]} fontSize={0.2} color="white">Vacuole</Text>

                        {/* Chloroplasts (Green beans) */}
                        {chloroData.map((data, i) => (
                            <Float key={`chloro-${i}`} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                                <mesh position={data.pos} onPointerOver={(e) => { e.stopPropagation(); setActiveOrganelle('chloroplast'); }}>
                                    <capsuleGeometry args={[0.1, 0.25, 4, 8]} />
                                    <meshStandardMaterial color="#10B981" />
                                </mesh>
                            </Float>
                        ))}
                    </>
                )}
            </group>
        </group>
    );
}

// ============================================================================
// 2. PLANT GROWTH (CROISSANCE DES PLANTES)
// ============================================================================
export function PlantGrowth() {
    const [day, setDay] = useState(1);
    const maxDays = 10;

    // Calculate growth factor (0 to 1)
    const growth = day / maxDays;

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌱 Germination & Croissance">
                    <div className="space-y-4">
                        <div>
                            <label className="flex justify-between text-sm font-bold text-[#2DD4BF] mb-2">
                                <span>Jour : {day}</span>
                                <span>{growth < 0.3 ? "Germination" : growth < 0.7 ? "Croissance" : "Floraison"}</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max={maxDays}
                                step="0.1"
                                value={day}
                                onChange={(e) => setDay(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#2DD4BF]"
                            />
                        </div>
                        <div className="text-xs text-gray-400">
                            Observez le développement des racines et de la tige.
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Soil / Ground */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#5D4037" roughness={1} />
            </mesh>
            <gridHelper args={[10, 10, '#3E2723', '#3E2723']} position={[0, -0.99, 0]} />

            {/* Seed (fades out or stays at base) */}
            <mesh position={[0, -0.8, 0]} scale={Math.max(0.2, 1 - growth * 0.5)}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="#A1887F" />
            </mesh>

            {/* Roots (Grow down) */}
            <group position={[0, -1, 0]}>
                {growth > 0.1 && (
                    <mesh position={[0, -growth * 1, 0]} scale={[1, growth * 2, 1]}>
                        <cylinderGeometry args={[0.02, 0.05, 1, 8]} />
                        <meshStandardMaterial color="#D7CCC8" />
                    </mesh>
                )}
                {/* Branching roots */}
                {growth > 0.3 && [...Array(3)].map((_, i) => (
                    <mesh key={i} position={[0, -growth * 0.8, 0]} rotation={[0, 0, (i - 1) * 0.5]} scale={[0.5, growth, 0.5]}>
                        <cylinderGeometry args={[0.01, 0.03, 0.8, 8]} />
                        <meshStandardMaterial color="#D7CCC8" />
                    </mesh>
                ))}
            </group>

            {/* Stem (Grows up) */}
            {growth > 0.2 && (
                <group position={[0, -1, 0]}>
                    {/* Main Stem */}
                    <mesh position={[0, (growth - 0.2) * 2, 0]} scale={[1, (growth - 0.2) * 4, 1]}>
                        <cylinderGeometry args={[0.05, 0.08, 1, 8]} />
                        <meshStandardMaterial color="#66BB6A" />
                    </mesh>

                    {/* Leaves */}
                    {growth > 0.4 && (
                        <group position={[0, (growth - 0.2) * 3, 0]}>
                            <mesh rotation={[0.5, 0, 0]} position={[0.3, 0, 0]}>
                                <sphereGeometry args={[0.2 * growth, 0.02, 0.1 * growth]} />
                                <meshStandardMaterial color="#4CAF50" side={THREE.DoubleSide} />
                            </mesh>
                            <mesh rotation={[-0.5, 0, 0]} position={[-0.3, 0, 0]}>
                                <sphereGeometry args={[0.2 * growth, 0.02, 0.1 * growth]} />
                                <meshStandardMaterial color="#4CAF50" side={THREE.DoubleSide} />
                            </mesh>
                        </group>
                    )}

                    {/* Flower (at end) */}
                    {growth > 0.8 && (
                        <group position={[0, (growth - 0.2) * 4, 0]} scale={Math.min(1, (growth - 0.8) * 5)}>
                            <mesh>
                                <sphereGeometry args={[0.15, 16, 16]} />
                                <meshStandardMaterial color="#FFEB3B" />
                            </mesh>
                            {[...Array(5)].map((_, i) => (
                                <mesh key={i} rotation={[0, 0, i * (Math.PI * 2 / 5)]} position={[Math.cos(i * (Math.PI * 2 / 5)) * 0.25, Math.sin(i * (Math.PI * 2 / 5)) * 0.25, 0]}>
                                    <sphereGeometry args={[0.15, 16, 16]} />
                                    <meshStandardMaterial color="#E91E63" />
                                </mesh>
                            ))}
                        </group>
                    )}
                </group>
            )}

            <Text position={[2, 2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                Photosynthèse
            </Text>
        </group>
    );
}

// ============================================================================
// 3. FOOD CHAIN (CHAÎNE ALIMENTAIRE)
// ============================================================================
export function FoodChain() {
    const levels = [
        { name: "Producteurs", icon: "🌱", color: "#4CAF50", height: 0 },
        { name: "Conso. 1 (Herbivores)", icon: "🐰", color: "#FFC107", height: 2 },
        { name: "Conso. 2 (Carnivores)", icon: "🦊", color: "#FF9800", height: 4 },
        { name: "Superprédateurs", icon: "🦅", color: "#F44336", height: 6 }
    ];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🦁 Chaîne Alimentaire">
                    <p className="text-sm text-gray-300 mb-2">
                        La pyramide écologique montre comment l'énergie circule.
                    </p>
                    <div className="text-xs text-gray-400">
                        Chaque niveau dépend du précédent pour son énergie.
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {levels.map((lvl, index) => (
                <group key={index} position={[0, lvl.height - 3, 0]}>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[2 - index * 0.5, 2.5 - index * 0.5, 1.8, 4]} />
                        <meshStandardMaterial color={lvl.color} transparent opacity={0.8} />
                    </mesh>

                    <Billboard position={[0, 0, 2.5]} follow={true}>
                        <Text fontSize={0.4} color="white" outlineWidth={0.02} outlineColor="black">
                            {lvl.icon} {lvl.name}
                        </Text>
                    </Billboard>

                    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
                        <mesh position={[2, 0, 0]}>
                            <sphereGeometry args={[0.1]} />
                            <meshBasicMaterial color="#FFFF00" />
                        </mesh>
                    </Float>
                </group>
            ))}

            {/* Sun */}
            <group position={[5, 5, -5]}>
                <mesh>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" emissiveIntensity={2} />
                </mesh>
                <pointLight intensity={2} distance={20} />
                <Text position={[0, -2, 0]} fontSize={0.5} color="#FFFF00">Énergie Solaire</Text>
            </group>
        </group>
    );
}

// ============================================================================
// 4. VERTEBRATE CLASSIFICATION (CLASSIFICATION 3D)
// ============================================================================
export function VertebrateClassification() {
    const [selected, setSelected] = useState(null);

    const classes = [
        { id: 'mammal', name: 'Mammifères', icon: '🦁', color: '#F44336', pos: [-2, 2, 0], desc: "Poils, allaitent leurs petits." },
        { id: 'bird', name: 'Oiseaux', icon: '🦅', color: '#2196F3', pos: [2, 2, 0], desc: "Plumes, pondent des œufs." },
        { id: 'reptile', name: 'Reptiles', icon: '🐢', color: '#4CAF50', pos: [0, 0, 0], desc: "Écailles, sang froid." },
        { id: 'amphibian', name: 'Amphibiens', icon: '🐸', color: '#8BC34A', pos: [-2, -2, 0], desc: "Peau nue humide, métamorphose." },
        { id: 'fish', name: 'Poissons', icon: '🐠', color: '#00BCD4', pos: [2, -2, 0], desc: "Écailles, respirent sous l'eau." }
    ];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🐢 Classification des Vertébrés">
                    <div className="text-center">
                        <h4 className="text-lg font-bold text-[#2DD4BF] mb-2">{selected ? selected.name : "Cliquez sur une classe"}</h4>
                        <p className="text-sm text-gray-300">
                            {selected ? selected.desc : "Découvrez les 5 grandes classes de vertébrés."}
                        </p>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {classes.map((cls) => (
                <group key={cls.id} position={cls.pos} onClick={() => setSelected(cls)}>
                    <mesh>
                        <boxGeometry args={[1.5, 1.5, 0.2]} />
                        <meshStandardMaterial color={cls.color} />
                    </mesh>
                    <Html position={[0, 0, 0.11]} transform center pointerEvents="none">
                        <div className="text-4xl">{cls.icon}</div>
                    </Html>
                    {selected?.id === cls.id && (
                        <mesh position={[0, 0, -0.2]}>
                            <boxGeometry args={[1.7, 1.7, 0.1]} />
                            <meshBasicMaterial color="white" />
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 5. PHOTOSYNTHESIS (LA PHOTOSYNTHÈSE)
// ============================================================================
export function Photosynthesis() {
    // FIXED: Use useMemo for stable random positions
    const stomataPos = useMemo(() => [...Array(5)].map(() => [
        Math.random() * 3 - 1.5, 0.06, Math.random() * 4 - 2
    ]), []);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="☀️ La Photosynthèse">
                    <div className="text-sm text-gray-300">
                        <p>Les plantes mangent du soleil !</p>
                        <ul className="list-disc pl-4 mt-2 space-y-1">
                            <li><span className="text-yellow-400">Soleil</span> : Énergie</li>
                            <li><span className="text-blue-400">Eau (H₂O)</span> : Racines</li>
                            <li><span className="text-gray-400">CO₂</span> : Air</li>
                            <li><span className="text-green-400">Sucre</span> : Nourriture</li>
                            <li><span className="text-white">Oxygène</span> : Déchet (pour nous !)</li>
                        </ul>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Sun */}
            <mesh position={[5, 5, -5]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={2} />
            </mesh>
            <pointLight position={[5, 5, -5]} intensity={2} />

            {/* Leaf (Simple Green Shape) */}
            <group rotation={[0.5, -0.5, 0]}>
                <mesh scale={[4, 0.1, 6]}>
                    <boxGeometry />
                    <meshStandardMaterial color="#4CAF50" roughness={0.8} />
                </mesh>
                <gridHelper args={[10, 10, '#2E7D32', '#2E7D32']} position={[0, 0.06, 0]} />

                {/* Stomata (Pores) using stable positions */}
                {stomataPos.map((pos, i) => (
                    <mesh key={i} position={pos} rotation={[-Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.2, 0.05, 16, 32]} />
                        <meshStandardMaterial color="#1B5E20" />
                    </mesh>
                ))}
            </group>

            {/* Animations - Particles */}
            {/* Sunlight (Yellow) */}
            <MovingParticles color="#FFFF00" count={20} start={[5, 5, -5]} end={[0, 0, 0]} speed={0.1} />

            {/* CO2 (Gray) - Entering */}
            <MovingParticles color="#9E9E9E" count={15} start={[3, 2, 3]} end={[0, 0, 0]} speed={0.05} />

            {/* Water (Blue) - Coming from bottom */}
            <MovingParticles color="#2196F3" count={15} start={[0, -5, 0]} end={[0, 0, 0]} speed={0.08} />

            {/* Oxygen (White) - Leaving */}
            <MovingParticles color="#FFFFFF" count={15} start={[0, 0, 0]} end={[-3, 4, 2]} speed={0.06} />

        </group>
    );
}

function MovingParticles({ color, count, start, end, speed }) {
    const refs = useRef([]);
    // Setup refs array
    useEffect(() => {
        refs.current = refs.current.slice(0, count);
    }, [count]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        refs.current.forEach((ref, i) => {
            if (ref) {
                const phase = (time * speed + i * (1 / count)) % 1;
                ref.position.lerpVectors(new THREE.Vector3(...start), new THREE.Vector3(...end), phase);
                const scale = Math.sin(phase * Math.PI); // Fade in/out
                ref.scale.setScalar(scale);
            }
        });
    });

    return (
        <group>
            {[...Array(count)].map((_, i) => (
                <mesh key={i} ref={el => refs.current[i] = el}>
                    <sphereGeometry args={[0.08]} />
                    <meshBasicMaterial color={color} />
                </mesh>
            ))}
        </group>
    )
}
