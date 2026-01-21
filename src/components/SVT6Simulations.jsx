'use client';
import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, Billboard, useTexture } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import * as THREE from 'three';

// ============================================================================
// 1. ENVIRONMENT EXPLORER (CHAP 1)
// ============================================================================
export function EnvironmentExplorer() {
    const [selection, setSelection] = useState(null);

    const items = [
        { id: 'rock', name: 'Rocher', type: 'Non-Vivant (Minéral)', pos: [-2, -1, 0], color: '#78909C' },
        { id: 'water', name: 'Eau', type: 'Non-Vivant (Minéral)', pos: [0, -1.2, 2], color: '#4FC3F7', shape: 'plane' },
        { id: 'tree', name: 'Arbre', type: 'Vivant', pos: [2, 0, -1], color: '#4CAF50' },
        { id: 'rabbit', name: 'Lapin', type: 'Vivant', pos: [-1, -0.5, 1], color: '#D7CCC8' },
        { id: 'sun', name: 'Soleil', type: 'Non-Vivant', pos: [0, 3, -3], color: '#FFEB3B' }
    ];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌍 Explorateur d'Environnement">
                    <div className="text-center">
                        <p className="text-sm text-gray-300 mb-2">Cliquez sur les éléments pour les identifier.</p>
                        {selection ? (
                            <div className={`p-2 rounded font-bold ${selection.type === 'Vivant' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'}`}>
                                {selection.name} : {selection.type}
                            </div>
                        ) : (
                            <span className="text-xs text-gray-500 italic">En attente de sélection...</span>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1} />

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#5D4037" />
            </mesh>

            {/* Items */}
            {items.map((item, i) => (
                <group key={i} position={item.pos} onClick={() => setSelection(item)}>
                    {item.id === 'tree' && (
                        <group>
                            <mesh position={[0, -0.5, 0]}>
                                <cylinderGeometry args={[0.2, 0.3, 2]} />
                                <meshStandardMaterial color="#795548" />
                            </mesh>
                            <mesh position={[0, 1, 0]}>
                                <sphereGeometry args={[1]} />
                                <meshStandardMaterial color={item.color} />
                            </mesh>
                        </group>
                    )}
                    {item.id === 'rock' && (
                        <mesh scale={[1, 0.6, 0.8]}>
                            <dodecahedronGeometry args={[0.8]} />
                            <meshStandardMaterial color={item.color} roughness={0.9} />
                        </mesh>
                    )}
                    {item.id === 'rabbit' && (
                        <Float speed={5} rotationIntensity={0} floatIntensity={0.5} floatingRange={[0, 0.1]}>
                            <mesh>
                                <sphereGeometry args={[0.3]} />
                                <meshStandardMaterial color={item.color} />
                            </mesh>
                            <mesh position={[0, 0.4, -0.1]} rotation={[0.2, 0, 0]}>
                                <capsuleGeometry args={[0.08, 0.4]} />
                                <meshStandardMaterial color={item.color} />
                            </mesh>
                        </Float>
                    )}
                    {item.id === 'water' && (
                        <mesh rotation={[-Math.PI / 2, 0, 0]}>
                            <circleGeometry args={[1.5, 32]} />
                            <meshStandardMaterial color={item.color} transparent opacity={0.6} />
                        </mesh>
                    )}
                    {item.id === 'sun' && (
                        <mesh>
                            <sphereGeometry args={[1]} />
                            <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={2} />
                        </mesh>
                    )}

                    {selection?.id === item.id && (
                        <mesh position={[0, item.id === 'sun' ? -1.5 : 1.5, 0]}>
                            <sparkles count={5} scale={2} size={2} speed={0.4} opacity={1} color="#FFF" />
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 2. VERTEBRATE CLASSIFICATION (CHAP 2)
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
// 3. FOOD CHAIN (CHAP 3)
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
                    <p className="text-sm text-gray-300 mb-2">La pyramide écologique montre comment l'énergie circule.</p>
                </DraggableHtmlPanel>
            </Html>
            {levels.map((lvl, index) => (
                <group key={index} position={[0, lvl.height - 3, 0]}>
                    <mesh>
                        <cylinderGeometry args={[2 - index * 0.5, 2.5 - index * 0.5, 1.8, 4]} />
                        <meshStandardMaterial color={lvl.color} transparent opacity={0.8} />
                    </mesh>
                    <Billboard position={[0, 0, 2.5]} follow={true}>
                        <Text fontSize={0.4} color="white" outlineWidth={0.02} outlineColor="black">
                            {lvl.icon} {lvl.name}
                        </Text>
                    </Billboard>
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 4. PHOTOSYNTHESIS (CHAP 4)
// ============================================================================
export function Photosynthesis() {
    const stomataPos = useMemo(() => [...Array(5)].map(() => [Math.random() * 3 - 1.5, 0.06, Math.random() * 4 - 2]), []);
    return (
        <group>
            <Html transform={false}><DraggableHtmlPanel title="☀️ La Photosynthèse"><div className="text-sm text-gray-300">Les plantes convertissent la lumière en énergie chimique.</div></DraggableHtmlPanel></Html>
            <mesh position={[5, 5, -5]}><sphereGeometry args={[2]} /><meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={2} /></mesh>
            <pointLight position={[5, 5, -5]} intensity={2} />
            <group rotation={[0.5, -0.5, 0]}>
                <mesh scale={[4, 0.1, 6]}><boxGeometry /><meshStandardMaterial color="#4CAF50" /></mesh>
                {stomataPos.map((pos, i) => <mesh key={i} position={pos} rotation={[-Math.PI / 2, 0, 0]}><torusGeometry args={[0.2, 0.05]} /><meshStandardMaterial color="#1B5E20" /></mesh>)}
            </group>
            <MovingParticles color="#FFFF00" count={20} start={[5, 5, -5]} end={[0, 0, 0]} speed={0.1} />
        </group>
    );
}

// ============================================================================
// 5. AGRICULTURE LAB (CHAP 5)
// ============================================================================
export function AgricultureLab() {
    const [fertilizer, setFertilizer] = useState(0);
    const [water, setWater] = useState(50);

    // Growth logic: Needs balanced water (40-60) and high fertilizer increases max height
    const growth = useMemo(() => {
        const waterFactor = 1 - Math.abs(water - 50) / 50; // 1 at 50, 0 at 0/100
        const fertFactor = 1 + (fertilizer / 100);
        return Math.max(0.1, waterFactor * fertFactor * 3);
    }, [water, fertilizer]);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🚜 Laboratoire d'Agriculture">
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-blue-400">Eau ({water}%)</label>
                            <input type="range" min="0" max="100" value={water} onChange={(e) => setWater(parseFloat(e.target.value))} className="w-full accent-blue-500" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-yellow-400">Engrais ({fertilizer}%)</label>
                            <input type="range" min="0" max="100" value={fertilizer} onChange={(e) => setFertilizer(parseFloat(e.target.value))} className="w-full accent-yellow-500" />
                        </div>
                        <div className="text-xs text-gray-400 italic">Trouvez l'équilibre parfait !</div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} intensity={1} />

            {/* Plot */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[6, 6]} />
                <meshStandardMaterial color="#5D4037" />
            </mesh>

            {/* Plants */}
            {Array.from({ length: 5 }).map((_, i) => (
                <group key={i} position={[i - 2, -1, 0]}>
                    <mesh position={[0, growth / 2, 0]} scale={[1, growth, 1]}>
                        <cylinderGeometry args={[0.05, 0.05, 1]} />
                        <meshStandardMaterial color="#66BB6A" />
                    </mesh>
                    <mesh position={[0, growth, 0]} scale={[growth / 2, growth / 2, growth / 2]}>
                        <dodecahedronGeometry args={[0.4]} />
                        <meshStandardMaterial color={growth > 1.5 ? "#43A047" : "#AED581"} />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

// ============================================================================
// 6. ANIMAL LOCOMOTION (CHAP 6)
// ============================================================================
export function AnimalLocomotion() {
    const [mode, setMode] = useState(0); // 0: Run, 1: Fly, 2: Swim
    const modes = [
        { name: "Course (Terre)", envColor: "#8D6E63" },
        { name: "Vol (Air)", envColor: "#BBDEFB" },
        { name: "Nage (Eau)", envColor: "#0277BD" }
    ];

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🏃 Modes de Déplacement">
                    <div className="flex gap-2">
                        {modes.map((m, i) => (
                            <button key={i} onClick={() => setMode(i)} className={`flex-1 p-1 text-xs rounded ${mode === i ? 'bg-white text-black' : 'bg-white/10'}`}>
                                {m.name}
                            </button>
                        ))}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <color attach="background" args={[modes[mode].envColor]} />

            <group position={[0, 0, 0]}>
                {mode === 0 && <RunningHorse />}
                {mode === 1 && <FlyingBird />}
                {mode === 2 && <SwimmingFish />}
            </group>
        </group>
    )
}

function RunningHorse() {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.position.y = Math.sin(clock.elapsedTime * 10) * 0.2;
        ref.current.rotation.z = Math.sin(clock.elapsedTime * 10) * 0.1;
    });
    return <group ref={ref}><mesh position={[0, 0, 0]}><boxGeometry args={[1, 0.5, 0.5]} /><meshStandardMaterial color="brown" /></mesh><mesh position={[0.6, 0.5, 0]}><boxGeometry args={[0.4, 0.4, 0.4]} /><meshStandardMaterial color="brown" /></mesh></group>;
}
function FlyingBird() {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.5;
        const wingFlap = Math.sin(clock.elapsedTime * 15);
        ref.current.children[1].rotation.z = wingFlap;
        ref.current.children[2].rotation.z = -wingFlap;
    });
    return (
        <group ref={ref}>
            <mesh><coneGeometry args={[0.2, 1]} rotation={[0, 0, -Math.PI / 2]} /><meshStandardMaterial color="white" /></mesh>
            <mesh position={[0, 0, 0.2]}><boxGeometry args={[0.5, 0.05, 1]} /><meshStandardMaterial color="white" /></mesh>
            <mesh position={[0, 0, -0.2]}><boxGeometry args={[0.5, 0.05, 1]} /><meshStandardMaterial color="white" /></mesh>
        </group>
    );
}
function SwimmingFish() {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.y = Math.sin(clock.elapsedTime * 5) * 0.3;
        ref.current.position.x = Math.sin(clock.elapsedTime) * 2;
    });
    return <mesh ref={ref}><capsuleGeometry args={[0.3, 1, 4, 8]} rotation={[0, 0, Math.PI / 2]} /><meshStandardMaterial color="orange" /></mesh>;
}

// ============================================================================
// 7. CELL DISCOVERY (CHAP 7)
// ============================================================================
export function CellDiscovery() {
    const [cellType, setCellType] = useState('animal');
    const organelles = { nucleus: "Noyau: Cerveau", cytoplasm: "Cytoplasme: Liquide", membrane: "Membrane: Protection" };
    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 La Cellule">
                    <button onClick={() => setCellType(cellType === 'animal' ? 'plant' : 'animal')} className="w-full bg-white/20 p-2 rounded mb-2">
                        Basculer vers Cellule {cellType === 'animal' ? 'Végétale' : 'Animale'}
                    </button>
                </DraggableHtmlPanel>
            </Html>
            <mesh>
                {cellType === 'animal' ? <sphereGeometry args={[2]} /> : <boxGeometry args={[3, 3, 3]} />}
                <meshStandardMaterial color={cellType === 'animal' ? '#F48FB1' : '#81C784'} transparent opacity={0.4} />
            </mesh>
            <mesh position={[0, 0, 0]}><sphereGeometry args={[0.6]} /><meshStandardMaterial color="purple" /></mesh>
        </group>
    );
}

// ============================================================================
// 8. PLANT REPRODUCTION (CHAP 8)
// ============================================================================
export function PlantGrowth() {
    const [stage, setStage] = useState(0);
    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🌱 Reproduction Végétale">
                    <input type="range" min="0" max="3" step="1" value={stage} onChange={(e) => setStage(parseInt(e.target.value))} className="w-full" />
                    <div className="text-center mt-2">{["Graine", "Germination", "Croissance", "Fleur & Fruits"][stage]}</div>
                </DraggableHtmlPanel>
            </Html>
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[10, 10]} /><meshStandardMaterial color="#5D4037" /></mesh>
            {stage >= 0 && <mesh position={[0, -1.9, 0]}><sphereGeometry args={[0.2]} /><meshStandardMaterial color="brown" /></mesh>}
            {stage >= 1 && <mesh position={[0, -1.5, 0]}><cylinderGeometry args={[0.05, 0.05, 0.8]} /><meshStandardMaterial color="green" /></mesh>}
            {stage >= 2 && <mesh position={[0, -0.5, 0]}><cylinderGeometry args={[0.1, 0.1, 3]} /><meshStandardMaterial color="green" /></mesh>}
            {stage >= 3 && <mesh position={[0, 1.2, 0]}><dodecahedronGeometry args={[0.5]} /><meshStandardMaterial color="red" /></mesh>}
        </group>
    );
}

// ============================================================================
// 9. MALARIA CYCLE (CHAP 9)
// ============================================================================
export function MalariaCycle() {
    const [protectedByNet, setProtected] = useState(false);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🦟 Cycle du Paludisme">
                    <button onClick={() => setProtected(!protectedByNet)} className={`w-full p-2 rounded font-bold ${protectedByNet ? 'bg-green-500' : 'bg-red-500'}`}>
                        {protectedByNet ? "Moustiquaire ACTIVE" : "PAS de Protection"}
                    </button>
                </DraggableHtmlPanel>
            </Html>

            {/* Bed */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2, 4]} />
                <meshStandardMaterial color="#90CAF9" />
            </mesh>
            <mesh position={[0, -0.8, -1.8]} rotation={[-Math.PI / 4, 0, 0]}><cylinderGeometry args={[0.3, 0.3, 1.5, 32, 1, false, 0, Math.PI]} /><meshStandardMaterial color="white" /></mesh>

            {/* Net */}
            {protectedByNet && (
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[2.2, 3, 4.2]} />
                    <meshStandardMaterial color="#E0F2F1" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
            )}

            {/* Mosquito */}
            <Mosquito target={protectedByNet ? new THREE.Vector3(2, 2, 2) : new THREE.Vector3(0, 0, 0)} />
        </group>
    );
}

function Mosquito({ target }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        const t = clock.elapsedTime;
        // Hover around target
        ref.current.position.lerp(new THREE.Vector3(
            target.x + Math.sin(t * 3) * 0.5,
            target.y + Math.cos(t * 2) * 0.5 + 1,
            target.z + Math.sin(t * 4) * 0.5
        ), 0.05);
        ref.current.rotation.y += 0.1;
    });

    return (
        <group ref={ref}>
            <mesh rotation={[Math.PI / 2, 0, 0]}><coneGeometry args={[0.1, 0.5]} /><meshStandardMaterial color="black" /></mesh>
            <mesh position={[0, 0.2, 0]} rotation={[0, 0, 0.5]}><planeGeometry args={[0.4, 0.2]} /><meshStandardMaterial color="white" transparent opacity={0.5} side={THREE.DoubleSide} /></mesh>
        </group>
    );
}

// ============================================================================
// 10. ASCARIS PREVENTION (CHAP 10)
// ============================================================================
export function AscarisPrevention() {
    const [cleanHands, setCleanHands] = useState(false);
    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="🧼 Prévention Ascaridiase">
                    <button onClick={() => setCleanHands(true)} className="w-full bg-blue-500 p-2 rounded mb-2">🚿 Se Laver les Mains</button>
                    <button onClick={() => setCleanHands(false)} className="w-full bg-orange-800 p-2 rounded">💩 Salir les Mains</button>
                    <div className="mt-2 text-center text-sm">{cleanHands ? "Mains PROPRES : Risque NUL" : "Mains SALES : Risque ÉLEVÉ !"}</div>
                </DraggableHtmlPanel>
            </Html>

            {/* Hands */}
            <group position={[-1.5, 0, 0]}>
                <mesh rotation={[0, 0, -0.5]}>
                    <boxGeometry args={[1, 1.5, 0.5]} />
                    <meshStandardMaterial color={cleanHands ? "#FFCCBC" : "#5D4037"} />
                </mesh>
            </group>

            {/* Apple */}
            <mesh position={[1.5, 0, 0]}>
                <sphereGeometry args={[0.8]} />
                <meshStandardMaterial color={cleanHands ? "#C62828" : "#5D4037"} />
            </mesh>

            {/* Particles if dirty */}
            {!cleanHands && <MovingParticles count={10} color="#3E2723" start={[-1.5, 0, 0]} end={[1.5, 0, 0]} speed={0.05} />}
        </group>
    );
}

// ============================================================================
// 11. CHOLERA FILTER (CHAP 11)
// ============================================================================
export function CholeraFilter() {
    const [treated, setTreated] = useState(false);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="💧 Traitement du Choléra">
                    <button onClick={() => setTreated(!treated)} className={`w-full p-2 rounded ${treated ? 'bg-blue-600' : 'bg-yellow-600'}`}>
                        {treated ? "Eau POTABLE" : "Eau CONTAMINÉE"}
                    </button>
                    <p className="text-xs mt-2 text-gray-300">Utilisez de l'eau de javel ou faites bouillir.</p>
                </DraggableHtmlPanel>
            </Html>

            {/* Glass */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.8, 0.6, 2, 32, 1, true]} />
                <meshPhysicalMaterial transmission={0.9} thickness={0.1} color="white" />
            </mesh>

            {/* Liquid */}
            <mesh position={[0, -1.2, 0]}>
                <cylinderGeometry args={[0.75, 0.55, 1.5]} />
                <meshStandardMaterial color={treated ? "#4FC3F7" : "#558B2F"} transparent opacity={0.8} />
            </mesh>

            {/* Bacteria (Only if untreated) */}
            {!treated && Array.from({ length: 8 }).map((_, i) => (
                <Float key={i} speed={3} rotationIntensity={2} floatIntensity={1}>
                    <mesh position={[Math.random() - 0.5, -1.2 + Math.random(), Math.random() - 0.5]}>
                        <capsuleGeometry args={[0.05, 0.2]} />
                        <meshStandardMaterial color="#33691E" />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

// ============================================================================
// 12. LANDSCAPE BUILDER (CHAP 12)
// ============================================================================
export function LandscapeBuilder() {
    const [showVeg, setShowVeg] = useState(true);
    const [showHuman, setShowHuman] = useState(true);
    const [showWater, setShowWater] = useState(true);

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="⛰️ Les Composantes du Paysage">
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2"><input type="checkbox" checked={showVeg} onChange={(e) => setShowVeg(e.target.checked)} /> Végétation</label>
                        <label className="flex items-center gap-2"><input type="checkbox" checked={showWater} onChange={(e) => setShowWater(e.target.checked)} /> Hydrographie (Eau)</label>
                        <label className="flex items-center gap-2"><input type="checkbox" checked={showHuman} onChange={(e) => setShowHuman(e.target.checked)} /> Activités Humaines</label>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Relief (Base) */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[10, 10, 32, 32]} />
                <meshStandardMaterial color="#8D6E63" wireframe={false} roughness={1} />
            </mesh>

            {/* Water */}
            {showWater && <mesh rotation={[-Math.PI / 2, 0, 0]} position={[2, -1.9, 2]}>
                <circleGeometry args={[2.5]} />
                <meshStandardMaterial color="#29B6F6" />
            </mesh>}

            {/* Vegetation */}
            {showVeg && <group>
                <mesh position={[-2, -1, -2]}><coneGeometry args={[0.5, 2]} /><meshStandardMaterial color="#2E7D32" /></mesh>
                <mesh position={[-3, -1, 0]}><coneGeometry args={[0.6, 2.5]} /><meshStandardMaterial color="#2E7D32" /></mesh>
                <mesh position={[0, -1, -3]}><coneGeometry args={[0.4, 1.5]} /><meshStandardMaterial color="#2E7D32" /></mesh>
            </group>}

            {/* Human */}
            {showHuman && <group>
                {/* House */}
                <mesh position={[1, -1.5, -1]}><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="white" /></mesh>
                <mesh position={[1, -1, -1]} rotation={[0, Math.PI / 4, 0]}><coneGeometry args={[0.8, 0.8, 4]} /><meshStandardMaterial color="brown" /></mesh>
                {/* Bridge */}
                {showWater && <mesh position={[2, -1.8, 2]} rotation={[0, 0, 0]}><boxGeometry args={[3, 0.2, 0.5]} /><meshStandardMaterial color="gray" /></mesh>}
            </group>}
        </group>
    );
}

// UTIL
function MovingParticles({ color, count, start, end, speed }) {
    const refs = useRef([]);
    useEffect(() => { refs.current = refs.current.slice(0, count); }, [count]);
    useFrame((state) => {
        const time = state.clock.elapsedTime;
        refs.current.forEach((ref, i) => {
            if (ref) {
                const phase = (time * speed + i * (1 / count)) % 1;
                ref.position.lerpVectors(new THREE.Vector3(...start), new THREE.Vector3(...end), phase);
                const scale = Math.sin(phase * Math.PI);
                ref.scale.setScalar(scale);
            }
        });
    });
    return (
        <group>{[...Array(count)].map((_, i) => <mesh key={i} ref={el => refs.current[i] = el}><sphereGeometry args={[0.08]} /><meshBasicMaterial color={color} /></mesh>)}</group>
    )
}
