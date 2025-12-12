'use client';
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

// ============================================================
// CHAPITRE 1: INTRODUCTION AUX SCIENCES PHYSIQUES
// ============================================================
export function Chap1ScienceIntro() {
    const [step, setStep] = useState(0);
    const [experimentDone, setExperimentDone] = useState(false);
    const beakerRef = useRef();
    const bubblesRef = useRef([]);

    const steps = [
        { name: 'Observer', icon: '👁️', color: '#3B82F6', text: 'Je vois un phénomène curieux...' },
        { name: 'Hypothèse', icon: '💡', color: '#F59E0B', text: 'Je propose une explication...' },
        { name: 'Expérience', icon: '🔬', color: '#10B981', text: 'Je teste mon hypothèse...' },
        { name: 'Conclusion', icon: '✅', color: '#8B5CF6', text: 'Je valide ou rejette...' }
    ];

    useFrame(({ clock }) => {
        if (beakerRef.current && experimentDone) {
            beakerRef.current.rotation.z = Math.sin(clock.elapsedTime * 3) * 0.05;
        }
        bubblesRef.current.forEach((b, i) => {
            if (b && experimentDone) {
                b.position.y = ((clock.elapsedTime * 0.5 + i * 0.3) % 2) - 0.5;
                b.position.x = Math.sin(clock.elapsedTime + i) * 0.2;
            }
        });
    });

    const runExperiment = () => {
        setExperimentDone(true);
        setTimeout(() => setStep(3), 2000);
    };

    return (
        <group>
            <Html position={[4, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-blue-500/30 w-[320px]">
                    <h3 className="text-blue-400 font-bold text-lg mb-3">🔬 La Démarche Scientifique</h3>
                    <div className="flex gap-1 mb-4">
                        {steps.map((s, i) => (
                            <button key={i} onClick={() => setStep(i)}
                                className={`flex-1 p-2 rounded text-center text-xs ${step === i ? 'ring-2' : 'bg-gray-800'}`}
                                style={{ backgroundColor: step === i ? s.color + '30' : '', borderColor: s.color }}>
                                <div className="text-xl">{s.icon}</div>
                                <div>{s.name}</div>
                            </button>
                        ))}
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg mb-3">
                        <p className="text-sm" style={{ color: steps[step].color }}>{steps[step].text}</p>
                    </div>
                    {step === 2 && !experimentDone && (
                        <button onClick={runExperiment} className="w-full py-3 bg-green-600 rounded-lg font-bold">
                            🧪 Mélanger Vinaigre + Bicarbonate
                        </button>
                    )}
                    {experimentDone && (
                        <div className="p-3 bg-purple-900/30 rounded-lg text-center">
                            <div className="text-2xl mb-1">🎉</div>
                            <div className="font-bold text-purple-400">Réaction chimique observée !</div>
                            <div className="text-xs text-gray-400">Du gaz CO₂ se dégage</div>
                        </div>
                    )}
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.4} color="#3B82F6">DÉMARCHE SCIENTIFIQUE</Text>

            {/* Bécher avec réaction */}
            <group ref={beakerRef} position={[0, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.8, 0.7, 2, 32, 1, true]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.75, 0.65, 1, 32]} />
                    <meshStandardMaterial color={experimentDone ? "#FCD34D" : "#E5E7EB"} transparent opacity={0.7} />
                </mesh>
                {/* Bulles */}
                {experimentDone && Array.from({ length: 8 }).map((_, i) => (
                    <mesh key={i} ref={el => bubblesRef.current[i] = el} position={[0, 0, 0]}>
                        <sphereGeometry args={[0.08]} />
                        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.8} />
                    </mesh>
                ))}
            </group>

            <Text position={[0, -2, 0]} fontSize={0.2} color="#9CA3AF">
                {experimentDone ? "La science explique les phénomènes !" : "Clique pour expérimenter"}
            </Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 2: GRANDEURS PHYSIQUES ET MESURES
// ============================================================
export function Chap2Mesures() {
    const [tool, setTool] = useState('ruler');
    const [value, setValue] = useState(null);
    const objectRef = useRef();

    const tools = {
        ruler: { name: 'Règle', icon: '📏', unit: 'cm', color: '#F59E0B', range: [5, 30] },
        balance: { name: 'Balance', icon: '⚖️', unit: 'g', color: '#3B82F6', range: [50, 500] },
        cylinder: { name: 'Éprouvette', icon: '🧪', unit: 'mL', color: '#10B981', range: [10, 100] },
        chrono: { name: 'Chronomètre', icon: '⏱️', unit: 's', color: '#8B5CF6', range: [1, 60] }
    };

    useFrame(({ clock }) => {
        if (objectRef.current) {
            objectRef.current.rotation.y = clock.elapsedTime * 0.3;
        }
    });

    const measure = () => {
        const t = tools[tool];
        setValue((t.range[0] + Math.random() * (t.range[1] - t.range[0])).toFixed(1));
    };

    return (
        <group>
            <Html position={[4, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-cyan-500/30 w-[300px]">
                    <h3 className="text-cyan-400 font-bold text-lg mb-3">📏 Instruments de Mesure</h3>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                        {Object.entries(tools).map(([k, t]) => (
                            <button key={k} onClick={() => { setTool(k); setValue(null); }}
                                className={`p-2 rounded text-center ${tool === k ? 'ring-2 ring-cyan-400' : 'bg-gray-800'}`}>
                                <div className="text-2xl">{t.icon}</div>
                            </button>
                        ))}
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg mb-3 text-center">
                        <div className="text-2xl mb-1">{tools[tool].icon}</div>
                        <div className="font-bold" style={{ color: tools[tool].color }}>{tools[tool].name}</div>
                        <div className="text-xs text-gray-400">Mesure: {tools[tool].unit}</div>
                    </div>
                    <button onClick={measure} className="w-full py-3 rounded-lg font-bold text-black"
                        style={{ backgroundColor: tools[tool].color }}>
                        📐 Mesurer l'objet
                    </button>
                    {value && (
                        <div className="mt-3 p-3 bg-white/10 rounded-lg text-center">
                            <div className="text-3xl font-bold" style={{ color: tools[tool].color }}>
                                {value} {tools[tool].unit}
                            </div>
                        </div>
                    )}
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.4} color="#22D3EE">GRANDEURS ET MESURES</Text>

            {/* Objet à mesurer */}
            <group ref={objectRef} position={[0, 0, 0]}>
                <mesh>
                    <boxGeometry args={[1.2, 1.2, 1.2]} />
                    <meshStandardMaterial color="#6366F1" metalness={0.4} roughness={0.3} />
                </mesh>
                <Text position={[0, 1, 0]} fontSize={0.2} color="#A5B4FC">Objet Mystère</Text>
            </group>

            {/* Représentation de l'outil */}
            <group position={[-2, 0, 0]}>
                {tool === 'ruler' && <mesh rotation={[0, 0, 0.3]}><boxGeometry args={[2.5, 0.15, 0.1]} /><meshStandardMaterial color="#F59E0B" /></mesh>}
                {tool === 'balance' && <mesh><cylinderGeometry args={[0.6, 0.7, 0.2]} /><meshStandardMaterial color="#3B82F6" /></mesh>}
                {tool === 'cylinder' && <mesh><cylinderGeometry args={[0.3, 0.25, 1.5, 32, 1, true]} /><meshStandardMaterial color="#10B981" transparent opacity={0.5} side={THREE.DoubleSide} /></mesh>}
                {tool === 'chrono' && <mesh><cylinderGeometry args={[0.5, 0.5, 0.15]} /><meshStandardMaterial color="#8B5CF6" /></mesh>}
            </group>
        </group>
    );
}

// ============================================================
// CHAPITRE 3: MASSE VOLUMIQUE ET DENSITÉ
// ============================================================
export function Chap3Densite() {
    const [object, setObject] = useState('wood');
    const objectRef = useRef();

    const objects = {
        wood: { name: 'Bois', icon: '🪵', density: 0.6, color: '#92400E', floats: true },
        iron: { name: 'Fer', icon: '🔩', density: 7.8, color: '#6B7280', floats: false },
        oil: { name: 'Huile', icon: '🫗', density: 0.9, color: '#FBBF24', floats: true },
        stone: { name: 'Pierre', icon: '🪨', density: 2.5, color: '#78716C', floats: false },
        cork: { name: 'Liège', icon: '🍾', density: 0.2, color: '#F5D0A9', floats: true },
        gold: { name: 'Or', icon: '🥇', density: 19.3, color: '#FFD700', floats: false }
    };

    const obj = objects[object];
    const waterLevel = 0;
    const objectY = obj.floats ? waterLevel + 0.3 : waterLevel - 1;

    useFrame(({ clock }) => {
        if (objectRef.current) {
            objectRef.current.position.y = objectY + Math.sin(clock.elapsedTime * 2) * 0.1;
            objectRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.1;
        }
    });

    return (
        <group>
            <Html position={[4, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-blue-500/30 w-[300px]">
                    <h3 className="text-blue-400 font-bold text-lg mb-3">⛵ Flotte ou Coule ?</h3>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(objects).map(([k, o]) => (
                            <button key={k} onClick={() => setObject(k)}
                                className={`p-2 rounded text-center ${object === k ? 'ring-2 ring-blue-400' : 'bg-gray-800'}`}>
                                <div className="text-xl">{o.icon}</div>
                                <div className="text-xs">{o.name}</div>
                            </button>
                        ))}
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Densité:</span>
                            <span className="font-bold">{obj.density} g/cm³</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Par rapport à l'eau:</span>
                            <span className={obj.floats ? 'text-green-400' : 'text-red-400'}>
                                {obj.floats ? 'd < 1 → FLOTTE' : 'd > 1 → COULE'}
                            </span>
                        </div>
                    </div>
                    <div className={`mt-3 p-2 rounded text-center ${obj.floats ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
                        <span className="text-2xl">{obj.floats ? '🚢' : '⚓'}</span>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.4} color="#3B82F6">DENSITÉ ET FLOTTAISON</Text>

            {/* Aquarium */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[4, 3, 2]} />
                <meshStandardMaterial color="#1E3A5F" transparent opacity={0.2} side={THREE.DoubleSide} />
            </mesh>

            {/* Eau */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3.8, 2, 1.8]} />
                <meshStandardMaterial color="#3B82F6" transparent opacity={0.4} />
            </mesh>

            {/* Objet */}
            <group ref={objectRef} position={[0, objectY, 0]}>
                <mesh>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color={obj.color} metalness={obj.density > 5 ? 0.8 : 0.2} />
                </mesh>
            </group>

            <Text position={[-2, 0, 1.5]} fontSize={0.15} color="#9CA3AF">Niveau de l'eau</Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 4: POIDS ET MASSE
// ============================================================
export function Chap4PoidsMasse() {
    const [planet, setPlanet] = useState('earth');
    const [mass, setMass] = useState(60);
    const astronautRef = useRef();

    const planets = {
        earth: { name: 'Terre', icon: '🌍', g: 10, color: '#3B82F6' },
        moon: { name: 'Lune', icon: '🌙', g: 1.6, color: '#9CA3AF' },
        mars: { name: 'Mars', icon: '🔴', g: 3.7, color: '#EF4444' },
        jupiter: { name: 'Jupiter', icon: '🟠', g: 24.8, color: '#F59E0B' }
    };

    const p = planets[planet];
    const weight = mass * p.g;

    useFrame(({ clock }) => {
        if (astronautRef.current) {
            const floatAmount = planet === 'moon' ? 0.3 : planet === 'jupiter' ? 0.05 : 0.15;
            astronautRef.current.position.y = Math.sin(clock.elapsedTime * (planet === 'moon' ? 0.5 : 1)) * floatAmount;
        }
    });

    return (
        <group>
            <Html position={[4, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-purple-500/30 w-[300px]">
                    <h3 className="text-purple-400 font-bold text-lg mb-3">⚖️ Poids vs Masse</h3>
                    <div className="grid grid-cols-4 gap-1 mb-3">
                        {Object.entries(planets).map(([k, pl]) => (
                            <button key={k} onClick={() => setPlanet(k)}
                                className={`p-2 rounded text-center ${planet === k ? 'ring-2' : 'bg-gray-800'}`}
                                style={{ borderColor: pl.color }}>
                                <div className="text-xl">{pl.icon}</div>
                            </button>
                        ))}
                    </div>
                    <label className="block text-sm mb-1">Masse: {mass} kg</label>
                    <input type="range" min="10" max="100" value={mass} onChange={e => setMass(+e.target.value)}
                        className="w-full h-2 bg-gray-700 rounded-lg accent-purple-500 mb-3" />
                    <div className="bg-gray-900 p-3 rounded-lg space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Masse (constante):</span>
                            <span className="font-bold text-white">{mass} kg</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">g sur {p.name}:</span>
                            <span className="font-mono">{p.g} N/kg</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-700 pt-2">
                            <span className="text-gray-400">Poids (P = m×g):</span>
                            <span className="font-bold text-xl" style={{ color: p.color }}>{weight.toFixed(0)} N</span>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3, 0]} fontSize={0.4} color="#A855F7">POIDS ET MASSE</Text>

            {/* Planète */}
            <mesh position={[0, -2.5, 0]}>
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial color={p.color} />
            </mesh>

            {/* Astronaute */}
            <group ref={astronautRef} position={[0, 0.5, 0]}>
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.3]} />
                    <meshStandardMaterial color="#FEF3C7" />
                </mesh>
                <mesh position={[0, 0, 0]}>
                    <capsuleGeometry args={[0.25, 0.6]} />
                    <meshStandardMaterial color="#FFFFFF" />
                </mesh>
            </group>

            <Text position={[0, -0.8, 0]} fontSize={0.25} color={p.color}>{p.name}</Text>
        </group>
    );
}

// ============================================================
// CHAPITRE 5: INTRODUCTION À L'ÉLECTRICITÉ
// ============================================================
export function Chap5Electricite() {
    const [closed, setClosed] = useState(false);
    const [material, setMaterial] = useState('copper');
    const electronsRef = useRef([]);

    const materials = {
        copper: { name: 'Cuivre', conductor: true, color: '#B87333', icon: '🔌' },
        iron: { name: 'Fer', conductor: true, color: '#6B7280', icon: '🔩' },
        plastic: { name: 'Plastique', conductor: false, color: '#F472B6', icon: '🧴' },
        wood: { name: 'Bois', conductor: false, color: '#92400E', icon: '🪵' }
    };

    const mat = materials[material];
    const works = closed && mat.conductor;

    useFrame(({ clock }) => {
        if (works) {
            electronsRef.current.forEach((el, i) => {
                if (el) {
                    const t = ((clock.elapsedTime * 0.8 + i * 0.4) % 4);
                    if (t < 1) { el.position.x = -2 + t * 4; el.position.y = 1; }
                    else if (t < 2) { el.position.x = 2; el.position.y = 1 - (t - 1) * 2; }
                    else if (t < 3) { el.position.x = 2 - (t - 2) * 4; el.position.y = -1; }
                    else { el.position.x = -2; el.position.y = -1 + (t - 3) * 2; }
                }
            });
        }
    });

    return (
        <group>
            <Html position={[4, 1.5, 0]} center>
                <div className="bg-black/95 p-4 rounded-xl text-white border border-yellow-500/30 w-[300px]">
                    <h3 className="text-yellow-400 font-bold text-lg mb-3">⚡ Circuit Électrique</h3>
                    <button onClick={() => setClosed(!closed)}
                        className={`w-full py-3 rounded-lg font-bold mb-3 ${closed ? 'bg-green-600' : 'bg-red-600'}`}>
                        {closed ? '🔓 OUVRIR' : '🔒 FERMER'} le circuit
                    </button>
                    <div className="grid grid-cols-4 gap-1 mb-3">
                        {Object.entries(materials).map(([k, m]) => (
                            <button key={k} onClick={() => setMaterial(k)}
                                className={`p-2 rounded text-center ${material === k ? 'ring-2 ring-yellow-400' : 'bg-gray-800'}`}>
                                <div className="text-lg">{m.icon}</div>
                            </button>
                        ))}
                    </div>
                    <div className={`p-3 rounded-lg text-center ${mat.conductor ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
                        <div className="font-bold">{mat.name} = {mat.conductor ? 'CONDUCTEUR ✅' : 'ISOLANT ❌'}</div>
                    </div>
                    <div className={`mt-2 p-2 rounded text-center text-sm ${works ? 'bg-yellow-900/30 text-yellow-300' : 'bg-gray-800 text-gray-400'}`}>
                        {works ? '💡 La lampe brille !' : closed ? '🚫 Isolant - pas de courant' : '⚠️ Circuit ouvert'}
                    </div>
                </div>
            </Html>

            <Text position={[0, 2.5, 0]} fontSize={0.4} color="#FBBF24">CIRCUIT ÉLECTRIQUE</Text>

            {/* Circuit */}
            <group>
                {/* Fils */}
                {['#FBBF24', '#4B5563'].map((c, i) => (
                    <group key={i}>
                        <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.04, 0.04, 4]} />
                            <meshStandardMaterial color={works ? '#FBBF24' : '#4B5563'} emissive={works ? '#FBBF24' : '#000'} emissiveIntensity={0.3} />
                        </mesh>
                        <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.04, 0.04, 4]} />
                            <meshStandardMaterial color={works ? '#FBBF24' : '#4B5563'} />
                        </mesh>
                        <mesh position={[-2, 0, 0]}><cylinderGeometry args={[0.04, 0.04, 2]} /><meshStandardMaterial color={works ? '#FBBF24' : '#4B5563'} /></mesh>
                        <mesh position={[2, 0, 0]}><cylinderGeometry args={[0.04, 0.04, 2]} /><meshStandardMaterial color={works ? '#FBBF24' : '#4B5563'} /></mesh>
                    </group>
                ))}

                {/* Pile */}
                <group position={[-2.3, 0, 0]}>
                    <mesh><boxGeometry args={[0.5, 1.5, 0.4]} /><meshStandardMaterial color="#374151" /></mesh>
                    <Text position={[0, 0.9, 0]} fontSize={0.2} color="#EF4444">+</Text>
                    <Text position={[0, -0.9, 0]} fontSize={0.2} color="#3B82F6">-</Text>
                </group>

                {/* Lampe */}
                <group position={[2.3, 0, 0]}>
                    <mesh><sphereGeometry args={[0.4]} /><meshStandardMaterial color={works ? '#FCD34D' : '#4B5563'} emissive={works ? '#FCD34D' : '#000'} emissiveIntensity={works ? 1 : 0} /></mesh>
                    {works && <pointLight intensity={2} color="#FCD34D" distance={4} />}
                </group>

                {/* Matériau */}
                <mesh position={[0, 1, 0]}><boxGeometry args={[0.6, 0.3, 0.3]} /><meshStandardMaterial color={mat.color} metalness={mat.conductor ? 0.8 : 0.1} /></mesh>

                {/* Électrons */}
                {works && Array.from({ length: 6 }).map((_, i) => (
                    <mesh key={i} ref={el => electronsRef.current[i] = el} position={[-2, 1, 0.2]}>
                        <sphereGeometry args={[0.08]} />
                        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={1} />
                    </mesh>
                ))}
            </group>
        </group>
    );
}
