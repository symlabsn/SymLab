'use client';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float, Sphere, OrbitControls, Box, Cylinder, Torus } from '@react-three/drei';

// ============================================================
// CHAPITRE 9: SÉPARATION DES MÉLANGES
// ============================================================
export function MixtureSeparationPC4() {
    const [mixture, setMixture] = useState('mud'); // mud, salt_water, oil_water
    const [method, setMethod] = useState(null); // decantation, filtration, evaporation
    const [progress, setProgress] = useState(0);
    const [particles, setParticles] = useState(null);

    // Initialisation des particules côté client pour éviter erreur hydratation
    useEffect(() => {
        // Générer les positions aléatoires une seule fois au montage
        const pts = new Float32Array(600).map(() => (Math.random() - 0.5) * 1.5);
        setParticles(pts);
    }, []);

    const mixtures = {
        mud: { name: 'Eau boueuse', components: ['Eau', 'Terre'], color: '#78350F', separated: false },
        salt_water: { name: 'Eau salée', components: ['Eau', 'Sel dissous'], color: '#93C5FD', separated: false },
        oil_water: { name: 'Eau + Huile', components: ['Eau', 'Huile'], color: '#FEF3C7', separated: false }
    };

    const methods = {
        decantation: { name: 'Décantation', icon: '⏳', effective: ['mud', 'oil_water'], desc: 'Laisser reposer pour séparer par densité.' },
        filtration: { name: 'Filtration', icon: '☕', effective: ['mud'], desc: 'Passer à travers un filtre.' },
        evaporation: { name: 'Vaporisation', icon: '🔥', effective: ['salt_water'], desc: 'Chauffer pour récupérer le solide dissous.' }
    };

    const mix = mixtures[mixture];

    const startSeparation = (m) => {
        setMethod(m);
        setProgress(0);
    };

    useFrame((state, delta) => {
        if (method && progress < 1) {
            setProgress(prev => Math.min(prev + delta * 0.2, 1));
        }
    });

    const isSuccess = method && methods[method].effective.includes(mixture);

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-orange-500/30 w-[350px]">
                    <h3 className="text-orange-400 font-bold text-xl mb-4">⚗️ Séparation de Mélanges</h3>

                    <div className="mb-4">
                        <label className="text-xs text-gray-400 uppercase font-bold">1. Choisir le mélange</label>
                        <div className="grid grid-cols-3 gap-2 mt-1">
                            {Object.entries(mixtures).map(([k, m]) => (
                                <button key={k} onClick={() => { setMixture(k); setMethod(null); setProgress(0); }}
                                    className={`p-2 rounded-lg text-xs font-bold ${mixture === k ? 'bg-orange-600' : 'bg-gray-800'}`}>
                                    {m.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-xs text-gray-400 uppercase font-bold">2. Choisir la technique</label>
                        <div className="grid grid-cols-1 gap-2 mt-1">
                            {Object.entries(methods).map(([k, m]) => (
                                <button key={k} onClick={() => startSeparation(k)}
                                    className={`flex items-center gap-3 p-3 rounded-lg text-sm text-left transition-colors ${method === k ? 'bg-white text-black' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                    <span className="text-2xl">{m.icon}</span>
                                    <div>
                                        <div className="font-bold">{m.name}</div>
                                        <div className="text-xs opacity-70">{m.desc}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {method && (
                        <div className={`p-4 rounded-xl border ${progress < 1 ? 'border-yellow-500/30 bg-yellow-900/10' : (isSuccess ? 'border-green-500/30 bg-green-900/20' : 'border-red-500/30 bg-red-900/20')}`}>
                            <div className="flex justify-between mb-2 text-sm font-bold">
                                <span>{methods[method].name}</span>
                                <span>{Math.round(progress * 100)}%</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${progress * 100}%` }}></div>
                            </div>
                            {progress === 1 && (
                                <div className={`mt-3 text-center font-bold ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                                    {isSuccess ? '✅ Séparation réussie !' : '❌ Technique inefficace ici.'}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Html>

            {/* Visualisation 3D */}
            <group position={[0, -1, 0]}>
                {/* Bécher */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1, 1, 2.5, 32, 1, true]} />
                    <meshPhysicalMaterial color="#A5F3FC" transmission={0.9} opacity={0.3} transparent side={THREE.DoubleSide} />
                </mesh>

                {/* Contenu Liquide */}
                {(!method || method === 'decantation' || method === 'evaporation') && (
                    <group position={[0, -0.5, 0]}>
                        <mesh scale={[0.95, isSuccess && method === 'evaporation' ? 1 - progress : 1, 0.95]}>
                            <cylinderGeometry args={[1, 1, 1.4, 32]} />
                            <meshStandardMaterial color={mix.color} transparent opacity={0.8} />
                        </mesh>

                        {/* Particules / Sédiments (Client Side Only) */}
                        {mixture === 'mud' && particles && (
                            <group position={[0, isSuccess && method === 'decantation' ? -0.6 : 0, 0]}>
                                <points>
                                    <bufferGeometry>
                                        <bufferAttribute attach="attributes-position" count={200} array={particles} itemSize={3} />
                                    </bufferGeometry>
                                    <pointsMaterial size={0.05} color="#5D4037" />
                                </points>
                            </group>
                        )}

                        {/* Huile séparation */}
                        {mixture === 'oil_water' && isSuccess && method === 'decantation' && (
                            <mesh position={[0, 0.5, 0]}>
                                <cylinderGeometry args={[0.95, 0.95, 0.5, 32]} />
                                <meshStandardMaterial color="#FBBF24" transparent opacity={0.8} />
                            </mesh>
                        )}

                        {/* Sel résiduel chauffage */}
                        {mixture === 'salt_water' && isSuccess && method === 'evaporation' && progress > 0.8 && (
                            <mesh position={[0, -0.7, 0]}>
                                <cylinderGeometry args={[0.9, 0.9, 0.1, 32]} />
                                <meshStandardMaterial color="white" roughness={0.8} />
                            </mesh>
                        )}
                    </group>
                )}

                {/* Filtre et Entonnoir pour Filtration */}
                {method === 'filtration' && (
                    <group position={[0, 1.5, 0]}>
                        <mesh rotation={[Math.PI, 0, 0]}>
                            <coneGeometry args={[1.2, 1.5, 32, 1, true]} />
                            <meshStandardMaterial color="white" transparent opacity={0.8} side={THREE.DoubleSide} />
                        </mesh>
                        {/* Gouttes */}
                        {progress < 1 && (
                            <mesh position={[0, -1.5 - (progress * 2), 0]}>
                                <sphereGeometry args={[0.1]} />
                                <meshStandardMaterial color="#93C5FD" />
                            </mesh>
                        )}
                    </group>
                )}

                {/* Flamme pour évaporation */}
                {method === 'evaporation' && (
                    <group position={[0, -2, 0]}>
                        <pointLight color="orange" intensity={2} distance={3} />
                        {particles && ( // Utiliser particles pour randomiser un peu la flamme
                            <mesh scale={[1, 1, 1]}>
                                <coneGeometry args={[0.5, 1, 32]} />
                                <meshStandardMaterial color="orange" emissive="red" emissiveIntensity={2} />
                            </mesh>
                        )}
                    </group>
                )}
            </group>
        </group>
    );
}

// ============================================================
// CHAPITRE 10: LES ATOMES (ENRICHI)
// ============================================================
export function AtomBuilderSim() {
    const [protons, setProtons] = useState(1);
    const [neutrons, setNeutrons] = useState(0);
    const [electrons, setElectrons] = useState(1);
    const [showShells, setShowShells] = useState(true);

    // Tableaux simplifiés
    const elements = {
        1: { name: 'Hydrogène', symbol: 'H' },
        2: { name: 'Hélium', symbol: 'He' },
        3: { name: 'Lithium', symbol: 'Li' },
        4: { name: 'Béryllium', symbol: 'Be' },
        5: { name: 'Bore', symbol: 'B' },
        6: { name: 'Carbone', symbol: 'C' }
    };

    const element = elements[protons] || { name: 'Inconnu', symbol: '?' };
    const massNumber = protons + neutrons;
    const charge = protons - electrons;

    // Stabilité simple : N ~ Z pour les petits atomes
    const isStable = Math.abs(neutrons - protons) <= 1 || (protons === 1 && neutrons === 0);

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-pink-500/30 w-[350px]">
                    <h3 className="text-pink-400 font-bold text-xl mb-4">⚛️ Constructeur d'Atomes</h3>

                    <div className="bg-gray-800 p-4 rounded-xl mb-4 flex items-center justify-between">
                        <div className="text-center">
                            <div className="text-xs text-gray-400">Numéro Atomique (Z)</div>
                            <div className="text-3xl font-bold">{protons}</div>
                        </div>
                        <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded-lg font-bold text-2xl border-4 border-pink-500">
                            {element.symbol}
                        </div>
                        <div className="text-center">
                            <div className="text-xs text-gray-400">Masse (A)</div>
                            <div className="text-3xl font-bold">{massNumber}</div>
                        </div>
                    </div>

                    <div className="text-center mb-4 font-bold text-lg">{element.name}</div>

                    <div className="space-y-3">
                        <ControlRow label="Protons (+)" color="text-red-400" value={protons} onChange={setProtons} min={1} max={6} />
                        <ControlRow label="Neutrons (0)" color="text-gray-400" value={neutrons} onChange={setNeutrons} min={0} max={8} />
                        <ControlRow label="Électrons (-)" color="text-blue-400" value={electrons} onChange={setElectrons} min={0} max={6} />
                    </div>

                    <div className="mt-4 p-3 bg-gray-900 rounded-lg flex justify-between items-center text-sm">
                        <span>Charge : <strong className={charge > 0 ? 'text-red-400' : (charge < 0 ? 'text-blue-400' : 'text-green-400')}>{charge > 0 ? '+' : ''}{charge}</strong></span>
                        <span>Stabilité : <strong className={isStable ? 'text-green-400' : 'text-yellow-400'}>{isStable ? 'Stable' : 'Instable'}</strong></span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                        <input type="checkbox" checked={showShells} onChange={() => setShowShells(!showShells)} />
                        <span className="text-sm">Voir couches (K, L)</span>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#EC4899">STRUCTURE DE L'ATOME</Text>

            {/* Noyau */}
            <group position={[0, 0, 0]}>
                {/* Protons rouges */}
                {Array.from({ length: protons }).map((_, i) => (
                    <Sphere key={`p-${i}`} args={[0.3]} position={[Math.sin(i) * 0.4, Math.cos(i) * 0.4, Math.sin(i * 2) * 0.4]}>
                        <meshStandardMaterial color="#EF4444" />
                    </Sphere>
                ))}
                {/* Neutrons gris */}
                {Array.from({ length: neutrons }).map((_, i) => (
                    <Sphere key={`n-${i}`} args={[0.3]} position={[Math.cos(i) * 0.4, Math.sin(i) * 0.4, Math.cos(i * 2) * 0.4]}>
                        <meshStandardMaterial color="#9CA3AF" />
                    </Sphere>
                ))}
            </group>

            {/* Électrons sur orbites */}
            <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                {Array.from({ length: electrons }).map((_, i) => {
                    const shell = i < 2 ? 1 : 2; // K=2 max, L=8 max
                    const radius = shell * 2;
                    const speed = 1.5 / shell;
                    return (
                        <Electron key={`e-${i}`} radius={radius} speed={speed} offset={i} />
                    );
                })}
            </group>

            {/* Orbites visuelles */}
            {showShells && (
                <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                    <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#3B82F6" opacity={0.3} transparent /></Torus>
                    {electrons > 2 && <Torus args={[4, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#3B82F6" opacity={0.3} transparent /></Torus>}
                </group>
            )}
        </group>
    );
}

function ControlRow({ label, color, value, onChange, min, max }) {
    return (
        <div className="flex items-center justify-between">
            <span className={`text-sm font-bold ${color}`}>{label}</span>
            <div className="flex items-center gap-3">
                <button onClick={() => onChange(Math.max(min, value - 1))} className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600">-</button>
                <span className="w-4 text-center">{value}</span>
                <button onClick={() => onChange(Math.min(max, value + 1))} className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600">+</button>
            </div>
        </div>
    );
}

function Electron({ radius, speed, offset }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            const t = clock.elapsedTime * speed + offset;
            ref.current.position.x = Math.cos(t) * radius;
            ref.current.position.z = Math.sin(t) * radius;
        }
    });
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" />
        </mesh>
    );
}


// ============================================================
// CHAPITRE 11: LA MOLE (ENRICHI)
// ============================================================
export function MoleConceptPC4() {
    const [element, setElement] = useState('C');
    const [moles, setMoles] = useState(1);

    // Données molaires
    const elements = {
        C: { name: 'Carbone', M: 12.0, color: '#1F2937' }, // Noir
        S: { name: 'Soufre', M: 32.1, color: '#FCD34D' }, // Jaune
        Cu: { name: 'Cuivre', M: 63.5, color: '#B45309' }, // Orange/Brun
        H2O: { name: 'Eau', M: 18.0, color: '#3B82F6' }, // Bleu
        Fe: { name: 'Fer', M: 55.8, color: '#9CA3AF' }  // Gris
    };

    const el = elements[element];
    const mass = moles * el.M;
    const atoms = (moles * 6.02).toFixed(2); // x 10^23

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-green-500/30 w-[350px]">
                    <h3 className="text-green-400 font-bold text-xl mb-4">⚖️ La Mole</h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(elements).map(([k, e]) => (
                            <button key={k} onClick={() => setElement(k)}
                                className={`px-3 py-1 rounded-full text-sm font-bold border ${element === k ? 'bg-white text-black' : 'border-gray-600 text-gray-400'}`}>
                                {e.name} ({k})
                            </button>
                        ))}
                    </div>

                    <div className="mb-6 bg-gray-800 p-4 rounded-xl text-center">
                        <div className="text-xs text-gray-400 uppercase">Quantité de matière</div>
                        <div className="text-4xl font-bold my-2 text-green-300">{moles} mol</div>
                        <input type="range" min="0.1" max="5" step="0.1" value={moles} onChange={(e) => setMoles(Number(e.target.value))}
                            className="w-full accent-green-500" />
                    </div>

                    <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                            <span>Masse Molaire (M) :</span>
                            <span>{el.M} g/mol</span>
                        </div>
                        <div className="flex justify-between bg-white/10 p-2 rounded">
                            <span>Masse (m = n × M) :</span>
                            <span className="font-bold text-lg">{mass.toFixed(1)} g</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Entités (N) :</span>
                            <span>{atoms} × 10²³</span>
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#4ADE80">n = m / M</Text>

            {/* Balance */}
            <group position={[0, -2, 0]}>
                <Box args={[4, 0.5, 3]} material-color="#333" />
                <Box args={[3, 0.2, 2.5]} position={[0, 0.4, 0]} material-color="#111" />

                {/* Affichage digital */}
                <Text position={[0, 0.51, 1]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.5} color="red">
                    {mass.toFixed(1)} g
                </Text>

                {/* Tas de matière */}
                <group position={[0, 0.5, 0]}>
                    {/* Le tas grossit avec le nombre de moles */}
                    <mesh scale={Math.pow(moles, 1 / 3) * (el.M / 20)}>
                        {/* Forme irrégulière pour poudre/grain */}
                        <coneGeometry args={[1, 1.5, 32]} />
                        <meshStandardMaterial color={el.color} roughness={0.9} />
                    </mesh>

                    {/* Béchers si liquide */}
                    {element === 'H2O' && (
                        <mesh position={[0, 0.5, 0]} scale={Math.pow(moles, 1 / 3)}>
                            <cylinderGeometry args={[1.1, 1.1, 1.6, 32, 1, true]} />
                            <meshPhysicalMaterial color="#A5F3FC" transmission={0.8} opacity={0.4} transparent side={THREE.DoubleSide} />
                        </mesh>
                    )}
                </group>
            </group>
        </group>
    );
}


// ============================================================
// CHAPITRE 1: DÉMARCHE SCIENTIFIQUE
// ============================================================
export function ScientificMethod() {
    const [step, setStep] = useState(0);
    const steps = [
        { title: "1. Observation", text: "La plante est fanée.", icon: "🥀" },
        { title: "2. Hypothèse", text: "Elle manque d'eau ?", icon: "🤔" },
        { title: "3. Expérience", text: "Arrosons la plante...", icon: "💧" },
        { title: "4. Conclusion", text: "L'eau est essentielle !", icon: "✅" }
    ];

    return (
        <group>
            <Html position={[0, 3, 0]} center>
                <div className="bg-black/90 p-6 rounded-2xl text-white border border-blue-500/30 w-[300px] text-center">
                    <div className="text-4xl mb-4">{steps[step].icon}</div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{steps[step].title}</h3>
                    <p className="mb-6">{steps[step].text}</p>

                    <div className="flex gap-2 justify-center">
                        <button
                            onClick={() => setStep(Math.max(0, step - 1))}
                            disabled={step === 0}
                            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => setStep(Math.min(3, step + 1))}
                            disabled={step === 3}
                            className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
                        >
                            →
                        </button>
                    </div>
                </div>
            </Html>

            {/* Visualisation simple */}
            <mesh position={[0, -1, 0]} scale={step === 3 ? 1.2 : 0.8}>
                <dodecahedronGeometry args={[1]} />
                <meshStandardMaterial color={step === 0 ? "brown" : (step === 3 ? "green" : "yellow")} />
            </mesh>
            {step >= 2 && (
                <group position={[0, 1.5, 0]}>
                    <mesh rotation={[Math.PI, 0, 0]}>
                        <coneGeometry args={[0.5, 1, 32]} />
                        <meshStandardMaterial color="blue" transparent opacity={0.5} />
                    </mesh>
                </group>
            )}
        </group>
    );
}

// ============================================================
// DENSITÉ
// ============================================================
export function DensityExplorer() {
    return (
        <group>
            <Html position={[0, 2, 0]} center>
                <div className="bg-black/80 p-4 rounded text-white">
                    Simulation Densité (En construction)
                </div>
            </Html>
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="blue" transparent opacity={0.5} />
            </mesh>
        </group>
    );
}

// ============================================================
// RÉFRACTION
// ============================================================
export function RefractionSimulator() {
    return (
        <group>
            <Html position={[0, 2, 0]} center>
                <div className="bg-black/80 p-4 rounded text-white">
                    Simulation Réfraction (En construction)
                </div>
            </Html>
            <mesh rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.1, 4, 0.1]} />
                <meshStandardMaterial color="red" emissive="red" />
            </mesh>
            <mesh position={[1, -1, 0]}>
                <boxGeometry args={[2, 2, 0.5]} />
                <meshStandardMaterial color="cyan" transparent opacity={0.3} />
            </mesh>
        </group>
    );
}

// ============================================================
// CIRCUITS SÉRIE / PARALLÈLE
// ============================================================
export function CircuitSeriesParallel() {
    const [mode, setMode] = useState('series');
    return (
        <group>
            <Html position={[0, 3, 0]} center>
                <div className="bg-black/90 p-4 rounded-xl text-white border border-yellow-500/30">
                    <div className="flex gap-2">
                        <button onClick={() => setMode('series')} className={`px-4 py-2 rounded ${mode === 'series' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Série</button>
                        <button onClick={() => setMode('parallel')} className={`px-4 py-2 rounded ${mode === 'parallel' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Parallèle</button>
                    </div>
                </div>
            </Html>

            {/* Battery */}
            <mesh position={[-2, 0, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]} />
                <meshStandardMaterial color="black" />
            </mesh>

            {/* Wires & Bulbs */}
            {mode === 'series' ? (
                <group>
                    <mesh position={[0, 1, 0]}><sphereGeometry args={[0.3]} /><meshStandardMaterial color="yellow" emissive="yellow" /></mesh>
                    <mesh position={[2, 1, 0]}><sphereGeometry args={[0.3]} /><meshStandardMaterial color="yellow" emissive="yellow" /></mesh>
                </group>
            ) : (
                <group>
                    <mesh position={[0, 1, 0]}><sphereGeometry args={[0.3]} /><meshStandardMaterial color="yellow" emissive="yellow" /></mesh>
                    <mesh position={[0, -1, 0]}><sphereGeometry args={[0.3]} /><meshStandardMaterial color="yellow" emissive="yellow" /></mesh>
                </group>
            )}
        </group>
    );
}

// ============================================================
// PROPAGATION LUMIÈRE
// ============================================================
export function LightPropagationPC4() {
    return (
        <group>
            <Html position={[0, 2, 0]} center>
                <div className="bg-black/80 p-4 rounded text-white">
                    Propagation Rectiligne
                </div>
            </Html>
            <pointLight position={[-3, 0, 0]} intensity={2} color="white" />
            <mesh position={[-3, 0, 0]}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color="white" emissive="white" />
            </mesh>

            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 0.1]} />
                <meshStandardMaterial color="gray" />
            </mesh>

            <mesh position={[3, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[4, 4]} />
                <meshStandardMaterial color="white" side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

// ============================================================
// OUTILS DE MESURE
// ============================================================
export function MeasurementTools() {
    return (
        <group>
            <Html position={[0, 2, 0]} center>
                <div className="bg-black/80 p-4 rounded text-white">
                    Outils de Mesure
                </div>
            </Html>
            <mesh position={[-1, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 2]} />
                <meshStandardMaterial color="glass" transparent opacity={0.5} />
            </mesh>
            <mesh position={[1, 0, 0]}>
                <boxGeometry args={[2, 0.1, 0.5]} />
                <meshStandardMaterial color="yellow" />
            </mesh>
        </group>
    );
}

// ============================================================
// SOURCES DE LUMIÈRE
// ============================================================
export function LightSources() {
    return (
        <group>
            <Html position={[0, 2, 0]} center>
                <div className="bg-black/80 p-4 rounded text-white">
                    Sources: Primaire vs Secondaire
                </div>
            </Html>
            <mesh position={[-2, 0, 0]}>
                <sphereGeometry args={[0.5]} />
                <meshStandardMaterial color="yellow" emissive="yellow" />
            </mesh>
            <mesh position={[2, 0, 0]}>
                <sphereGeometry args={[0.5]} />
                <meshStandardMaterial color="gray" />
            </mesh>
        </group>
    );
}

// ============================================================
// INTRODUCTION ÉLECTRICITÉ
// ============================================================
export function IntroElectricity() {
    return (
        <group>
            <Html position={[0, 2, 0]} center>
                <div className="bg-black/80 p-4 rounded text-white">
                    Introduction Électricité
                </div>
            </Html>
            <mesh position={[-2, 0, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]} />
                <meshStandardMaterial color="black" />
            </mesh>
            <mesh position={[2, 0, 0]}>
                <sphereGeometry args={[0.5]} />
                <meshStandardMaterial color="yellow" emissive="yellow" />
            </mesh>
        </group>
    );
}
