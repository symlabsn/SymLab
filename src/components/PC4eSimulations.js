'use client';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float, Sphere, OrbitControls, Box, Cylinder, Torus } from '@react-three/drei';

// ============================================================
// CHAPITRE 9: SÉPARATION DES MÉLANGES (IMMERSIVE & CHALLENGE)
// ============================================================
export function MixtureSeparationPC4() {
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [mixture, setMixture] = useState('mud');
    const [method, setMethod] = useState(null);
    const [progress, setProgress] = useState(0);
    const [particles, setParticles] = useState(null);
    const [challengeTarget, setChallengeTarget] = useState(null);
    const [message, setMessage] = useState(null);

    // Initialisation des particules
    useEffect(() => {
        const pts = new Float32Array(600).map(() => (Math.random() - 0.5) * 1.5);
        setParticles(pts);
    }, []);

    const mixtures = {
        mud: { name: 'Eau boueuse', components: ['Eau', 'Terre'], color: '#78350F', separated: false },
        salt_water: { name: 'Eau salée', components: ['Eau', 'Sel'], color: '#93C5FD', separated: false },
        oil_water: { name: 'Eau + Huile', components: ['Eau', 'Huile'], color: '#FEF3C7', separated: false }
    };

    const methods = {
        decantation: { name: 'Décantation', icon: '⏳', effective: ['mud', 'oil_water'], desc: 'Laisser reposer (densité)' },
        filtration: { name: 'Filtration', icon: '☕', effective: ['mud'], desc: 'Passer à travers un filtre (taille)' },
        evaporation: { name: 'Vaporisation', icon: '🔥', effective: ['salt_water'], desc: 'Chauffer pour récupérer le solide' }
    };

    const mix = mixtures[challengeTarget || mixture];

    const startSeparation = (m) => {
        setMethod(m);
        setProgress(0);
        setMessage(null);
    };

    useFrame((state, delta) => {
        if (method && progress < 1) {
            setProgress(prev => Math.min(prev + delta * 0.3, 1));
        }
    });

    const isSuccess = method && methods[method].effective.includes(challengeTarget || mixture);

    const startChallenge = () => {
        const keys = Object.keys(mixtures);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        setChallengeTarget(randomKey);
        setMixture(randomKey);
        setMode('challenge');
        setMethod(null);
        setProgress(0);
        setMessage(null);
    };

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-orange-500/30 w-[350px] backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-orange-400 font-bold text-xl">⚗️ Séparation</h3>
                        <button onClick={() => setMode(mode === 'explore' ? 'challenge' : 'explore')}
                            className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-white hover:text-black transition-colors">
                            {mode === 'explore' ? 'Aller au Défi 🏆' : 'Retour Exploration'}
                        </button>
                    </div>

                    {mode === 'explore' ? (
                        <div className="mb-4">
                            <label className="text-xs text-gray-400 uppercase font-bold">1. Choisir le mélange</label>
                            <div className="grid grid-cols-3 gap-2 mt-1">
                                {Object.entries(mixtures).map(([k, m]) => (
                                    <button key={k} onClick={() => { setMixture(k); setMethod(null); setProgress(0); }}
                                        className={`p-2 rounded-lg text-xs font-bold transition-all ${mixture === k ? 'bg-orange-600 scale-105' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                        {m.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="mb-4 bg-gray-800 p-3 rounded-xl border border-orange-500 text-center">
                            {!challengeTarget ? (
                                <button onClick={startChallenge} className="w-full py-2 bg-orange-600 font-bold rounded hover:bg-orange-500">Lancer un Défi Aléatoire</button>
                            ) : (
                                <div>
                                    <div className="text-sm">Mélange Mystère :</div>
                                    <div className="font-bold text-lg text-orange-200">?</div>
                                    <div className="text-xs text-gray-400 mt-1">Indice visuel : Regarde la couleur !</div>
                                    {progress === 1 && isSuccess && <div className="mt-2 text-green-400 font-bold animate-bounce">Bravo ! C'était : {mixtures[challengeTarget].name}</div>}
                                    {progress === 1 && !isSuccess && <div className="mt-2 text-red-400">Raté ! Essaie une autre technique.</div>}
                                    {(progress === 1 && isSuccess) && <button onClick={startChallenge} className="mt-2 text-xs underline">Nouveau défi</button>}
                                </div>
                            )}
                        </div>
                    )}

                    {(mode === 'explore' || challengeTarget) && (
                        <div className="mb-4">
                            <label className="text-xs text-gray-400 uppercase font-bold">Technique de séparation</label>
                            <div className="grid grid-cols-1 gap-2 mt-1">
                                {Object.entries(methods).map(([k, m]) => (
                                    <button key={k} onClick={() => startSeparation(k)}
                                        className={`flex items-center gap-3 p-2 rounded-lg text-sm text-left transition-all ${method === k ? 'bg-orange-100 text-black border-l-4 border-orange-500' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                        <span className="text-xl">{m.icon}</span>
                                        <div>
                                            <div className="font-bold">{m.name}</div>
                                            <div className="text-[10px] opacity-70 leading-tight">{m.desc}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {method && (
                        <div className="relative pt-2">
                            <div className="flex justify-between text-xs font-bold mb-1">
                                <span>{methods[method].name}</span>
                                <span>{Math.round(progress * 100)}%</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${progress * 100}%` }}></div>
                            </div>
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
                            <meshStandardMaterial color={mix ? mix.color : '#FFF'} transparent opacity={0.8} />
                        </mesh>

                        {/* Particules / Sédiments */}
                        {(challengeTarget === 'mud' || mixture === 'mud') && particles && (
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
                        {(challengeTarget === 'oil_water' || mixture === 'oil_water') && isSuccess && method === 'decantation' && (
                            <mesh position={[0, 0.5, 0]}>
                                <cylinderGeometry args={[0.95, 0.95, 0.5, 32]} />
                                <meshStandardMaterial color="#FBBF24" transparent opacity={0.8} />
                            </mesh>
                        )}

                        {/* Sel résiduel chauffage */}
                        {(challengeTarget === 'salt_water' || mixture === 'salt_water') && isSuccess && method === 'evaporation' && progress > 0.8 && (
                            <mesh position={[0, -0.7, 0]}>
                                <cylinderGeometry args={[0.9, 0.9, 0.1, 32]} />
                                <meshStandardMaterial color="white" roughness={0.8} />
                            </mesh>
                        )}
                    </group>
                )}

                {/* Filtre */}
                {method === 'filtration' && (
                    <group position={[0, 1.5, 0]}>
                        <mesh rotation={[Math.PI, 0, 0]}>
                            <coneGeometry args={[1.2, 1.5, 32, 1, true]} />
                            <meshStandardMaterial color="white" transparent opacity={0.8} side={THREE.DoubleSide} />
                        </mesh>
                        {progress < 1 && (
                            <mesh position={[0, -1.5 - (progress * 2), 0]}>
                                <sphereGeometry args={[0.1]} />
                                <meshStandardMaterial color="#93C5FD" />
                            </mesh>
                        )}
                    </group>
                )}

                {/* Flamme */}
                {method === 'evaporation' && (
                    <group position={[0, -2, 0]}>
                        <pointLight color="orange" intensity={2} distance={3} />
                        {particles && (
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
// CHAPITRE 10: LES ATOMES (IMMERSIVE & MISSION)
// ============================================================
export function AtomBuilderSim() {
    const [protons, setProtons] = useState(1);
    const [neutrons, setNeutrons] = useState(0);
    const [electrons, setElectrons] = useState(1);
    const [showShells, setShowShells] = useState(true);
    const [mission, setMission] = useState(null);
    const [success, setSuccess] = useState(false);

    // Données simplifiées
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
    const isStable = Math.abs(neutrons - protons) <= 1 || (protons === 1 && neutrons === 0);

    const startMission = () => {
        // Random target (Example: Li-7 => p=3, n=4, e=3)
        const targets = [
            { p: 1, n: 0, e: 1, name: "Hydrogène-1" },
            { p: 2, n: 2, e: 2, name: "Hélium-4" },
            { p: 3, n: 4, e: 3, name: "Lithium-7" },
            { p: 6, n: 6, e: 6, name: "Carbone-12" }
        ];
        const t = targets[Math.floor(Math.random() * targets.length)];
        setMission(t);
        setSuccess(false);
        // Reset to basic H
        setProtons(1); setNeutrons(0); setElectrons(1);
    };

    useEffect(() => {
        if (mission) {
            if (protons === mission.p && neutrons === mission.n && electrons === mission.e) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        }
    }, [protons, neutrons, electrons, mission]);

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-pink-500/30 w-[350px] backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-pink-400 font-bold text-xl">⚛️ Constructeur</h3>
                        <button onClick={startMission} className="text-xs bg-pink-700 px-3 py-1 rounded hover:bg-pink-600 animate-pulse">
                            {mission ? 'Nouvelle Mission 🎯' : 'Lancer Mission 🎯'}
                        </button>
                    </div>

                    {mission && (
                        <div className={`mb-4 p-3 rounded-xl border ${success ? 'bg-green-900/50 border-green-500' : 'bg-gray-800 border-gray-600'}`}>
                            <div className="text-xs text-gray-400 uppercase">Objectif :</div>
                            <div className="font-bold text-lg">{mission.name} (Neutre)</div>
                            {success && <div className="text-green-400 font-bold mt-1">✅ MISSION ACCOMPLIE !</div>}
                        </div>
                    )}

                    {!mission && (
                        <div className="bg-gray-800 p-4 rounded-xl mb-4 flex items-center justify-between">
                            <div className="text-center">
                                <div className="text-xs text-gray-400">Z</div>
                                <div className="text-xl font-bold">{protons}</div>
                            </div>
                            <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl border-4 border-pink-500">
                                {element.symbol}
                            </div>
                            <div className="text-center">
                                <div className="text-xs text-gray-400">A</div>
                                <div className="text-xl font-bold">{massNumber}</div>
                            </div>
                        </div>
                    )}

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
                {/* Protons rouges (Improved positioning logic) */}
                {Array.from({ length: protons }).map((_, i) => (
                    <Sphere key={`p-${i}`} args={[0.3]} position={[Math.sin(i * 2) * 0.35, Math.cos(i * 3) * 0.35, Math.sin(i * 4) * 0.35]}>
                        <meshStandardMaterial color="#EF4444" roughness={0.3} />
                    </Sphere>
                ))}
                {/* Neutrons gris */}
                {Array.from({ length: neutrons }).map((_, i) => (
                    <Sphere key={`n-${i}`} args={[0.3]} position={[Math.cos(i * 2) * 0.35, Math.sin(i * 3) * 0.35, Math.cos(i * 5) * 0.35]}>
                        <meshStandardMaterial color="#9CA3AF" roughness={0.3} />
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
                    <Torus args={[2, 0.02, 32, 100]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#3B82F6" opacity={0.3} transparent /></Torus>
                    {electrons > 2 && <Torus args={[4, 0.02, 32, 100]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial color="#3B82F6" opacity={0.3} transparent /></Torus>}
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
                <button onClick={() => onChange(Math.max(min, value - 1))} className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600 border border-gray-600">-</button>
                <span className="w-4 text-center font-mono font-bold">{value}</span>
                <button onClick={() => onChange(Math.min(max, value + 1))} className="w-8 h-8 rounded bg-gray-700 hover:bg-gray-600 border border-gray-600">+</button>
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
            <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={2} />
            <pointLight distance={1} intensity={1} color="#3B82F6" />
        </mesh>
    );
}


// ============================================================
// CHAPITRE 11: LA MOLE (IMMERSIVE & CHALLENGE)
// ============================================================
export function MoleConceptPC4() {
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [element, setElement] = useState('C');
    const [moles, setMoles] = useState(1);
    const [targetMass, setTargetMass] = useState(null);

    // Données molaires
    const elements = {
        C: { name: 'Carbone', M: 12.0, color: '#1F2937' },
        S: { name: 'Soufre', M: 32.1, color: '#FCD34D' },
        Cu: { name: 'Cuivre', M: 63.5, color: '#B45309' },
        H2O: { name: 'Eau', M: 18.0, color: '#3B82F6' },
        Fe: { name: 'Fer', M: 55.8, color: '#9CA3AF' }
    };

    const el = elements[element];
    const mass = moles * el.M;
    const atoms = (moles * 6.02).toFixed(2);

    const startChallenge = () => {
        // Pick random element
        const keys = Object.keys(elements);
        const randEl = keys[Math.floor(Math.random() * keys.length)];
        setElement(randEl);

        // Pick random target mass (multiple of M to be reachable)
        const randMoles = (Math.floor(Math.random() * 40) + 1) / 10; // 0.1 to 4.0
        setTargetMass((randMoles * elements[randEl].M).toFixed(1));
        setMoles(0);
        setMode('challenge');
    };

    // Check success (mass is within small margin, but here we calculate exactly based on slider step)
    const isSuccess = targetMass && Math.abs(mass - parseFloat(targetMass)) < 0.1;

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-green-500/30 w-[350px] backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-green-400 font-bold text-xl">⚖️ La Mole</h3>
                        <button onClick={() => { setMode(mode === 'explore' ? 'challenge' : 'explore'); if (mode === 'explore') startChallenge(); }}
                            className="text-xs bg-green-700 px-2 py-1 rounded hover:bg-green-600 transition-colors">
                            {mode === 'explore' ? 'Mode Défi 🏆' : 'Mode Libre'}
                        </button>
                    </div>

                    {mode === 'challenge' && (
                        <div className={`mb-4 p-3 rounded-xl border-2 text-center transition-colors ${isSuccess ? 'border-green-500 bg-green-900/40' : 'border-gray-500 bg-gray-800'}`}>
                            <div className="text-xs text-gray-400 uppercase">Objectif : Peser exactement</div>
                            <div className="text-3xl font-bold font-mono">{targetMass} g</div>
                            <div className="text-sm">de {el.name}</div>
                            {isSuccess && <div className="mt-2 font-bold text-green-400 animate-pulse">Cible Atteinte ! Bravo ! 🎉</div>}
                            {isSuccess && <button onClick={startChallenge} className="mt-2 text-xs underline text-white">Nouveau Défi</button>}
                        </div>
                    )}

                    {mode === 'explore' && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {Object.entries(elements).map(([k, e]) => (
                                <button key={k} onClick={() => setElement(k)}
                                    className={`px-3 py-1 rounded-full text-sm font-bold border ${element === k ? 'bg-white text-black' : 'border-gray-600 text-gray-400'}`}>
                                    {e.name} ({k})
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="mb-6 bg-gray-800 p-4 rounded-xl text-center shadow-inner">
                        <div className="text-xs text-gray-400 uppercase">Quantité de matière (n)</div>
                        <div className="text-4xl font-bold my-2 text-green-300 font-mono">{moles} <span className="text-lg">mol</span></div>
                        <input type="range" min="0" max="5" step="0.1" value={moles} onChange={(e) => setMoles(Number(e.target.value))}
                            className="w-full accent-green-500 cursor-pointer" />
                    </div>

                    <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between text-gray-400">
                            <span>Masse Molaire ({el.symbol}) :</span>
                            <span>{el.M} g/mol</span>
                        </div>
                        <div className="flex justify-between bg-white/10 p-2 rounded items-center">
                            <span>Masse (m) :</span>
                            <span className={`font-bold text-lg ${isSuccess ? 'text-green-400' : 'text-white'}`}>{mass.toFixed(1)} g</span>
                        </div>
                        {mode === 'explore' && (
                            <div className="flex justify-between text-gray-400">
                                <span>Entités (N) :</span>
                                <span>{atoms} × 10²³</span>
                            </div>
                        )}
                    </div>
                </div>
            </Html>

            <Text position={[0, 3.5, 0]} fontSize={0.5} color="#4ADE80">n = m / M</Text>

            {/* Balance */}
            <group position={[0, -2, 0]}>
                <Box args={[4, 0.5, 3]} material-color="#333" />
                <Box args={[3, 0.2, 2.5]} position={[0, 0.4, 0]} material-color="#111" />

                {/* Affichage digital sur la balance */}
                <group position={[0, 0.51, 1.2]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh position={[0, 0, -0.01]}>
                        <planeGeometry args={[1.5, 0.6]} />
                        <meshBasicMaterial color="#000" />
                    </mesh>
                    <Text position={[0, 0, 0]} fontSize={0.4} color={isSuccess ? "#4ADE80" : "red"}>
                        {mass.toFixed(1)} g
                    </Text>
                </group>

                {/* Tas de matière */}
                <group position={[0, 0.5, 0]}>
                    {/* Le tas grossit avec le nombre de moles */}
                    {moles > 0 && (
                        <mesh scale={Math.pow(moles, 1 / 3) * (Math.max(1, el.M / 20))}>
                            {/* Forme irrégulière pour poudre/grain vs Cylindre pour liquide */}
                            {element === 'H2O' ? (
                                <cylinderGeometry args={[0.5, 0.5, 0.5, 32]} />
                            ) : (
                                <coneGeometry args={[0.6, 0.8, 32]} />
                            )}
                            <meshStandardMaterial color={el.color} roughness={0.9} transparent opacity={element === 'H2O' ? 0.6 : 1} />
                        </mesh>
                    )}

                    {/* Béchers si liquide */}
                    {element === 'H2O' && (
                        <mesh position={[0, 0.25 * Math.pow(moles, 1 / 3), 0]} scale={Math.pow(moles, 1 / 3)}>
                            <cylinderGeometry args={[0.6, 0.6, 0.6, 32, 1, true]} />
                            <meshPhysicalMaterial color="#A5F3FC" transmission={0.9} opacity={0.3} transparent side={THREE.DoubleSide} />
                        </mesh>
                    )}
                </group>
            </group>
        </group>
    );
}


// ============================================================
// CHAPITRE 4: CONSERVATION DE LA MASSE (IMMERSIVE)
// ============================================================
export function MassConservation() {
    const [step, setStep] = useState(0); // 0: Setup, 1: Reaction
    const [system, setSystem] = useState('open'); // open, closed
    const [gasParticles, setGasParticles] = useState(null);
    const [balanceValue, setBalanceValue] = useState(200);

    // Initialisation particules
    useEffect(() => {
        const pts = new Float32Array(150 * 3);
        for (let i = 0; i < 150 * 3; i++) pts[i] = (Math.random() - 0.5) * 1.0;
        setGasParticles(pts);
    }, []);

    const startReaction = () => {
        setStep(1);
        // Animation of mass loss if open
        let target = system === 'open' ? 190 : 200; // Lost 10g of gas
        const duration = 3000;
        const start = 200;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setBalanceValue(start - (start - target) * progress);

            if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
    };

    const reset = () => {
        setStep(0);
        setBalanceValue(200);
    };

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-red-500/30 w-[350px] backdrop-blur-md">
                    <h3 className="text-red-400 font-bold text-xl mb-4">⚖️ Conservation de la Masse</h3>

                    <div className="mb-4 bg-gray-800 p-3 rounded-xl">
                        <div className="text-xs text-gray-400 mb-2">CHOIX DU SYSTÈME</div>
                        <div className="flex gap-2">
                            <button onClick={() => !step && setSystem('open')} disabled={step === 1}
                                className={`flex-1 py-2 rounded font-bold ${system === 'open' ? 'bg-red-600' : 'bg-gray-700 opacity-50'}`}>
                                Ouvert 🔓
                            </button>
                            <button onClick={() => !step && setSystem('closed')} disabled={step === 1}
                                className={`flex-1 py-2 rounded font-bold ${system === 'closed' ? 'bg-green-600' : 'bg-gray-700 opacity-50'}`}>
                                Fermé 🔒
                            </button>
                        </div>
                    </div>

                    <div className="mb-4 p-3 border border-gray-600 rounded bg-black/50 text-center">
                        <div className="text-gray-400 text-xs uppercase">Masse Totale</div>
                        <div className={`text-3xl font-mono font-bold ${step === 1 && system === 'open' ? 'text-red-400 animate-pulse' : 'text-green-400'}`}>
                            {balanceValue.toFixed(1)} g
                        </div>
                    </div>

                    <button onClick={step === 0 ? startReaction : reset}
                        className={`w-full py-3 rounded-xl font-bold text-lg transition-transform hover:scale-105 ${step === 0 ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                        {step === 0 ? "Lancer la Réaction 💥" : "Réinitialiser 🔄"}
                    </button>

                    {step === 1 && (
                        <div className="mt-3 text-sm text-center">
                            {system === 'open'
                                ? "Le gaz s'échappe, la masse diminue !"
                                : "Le gaz reste piégé, la masse est conservée."}
                        </div>
                    )}
                </div>
            </Html>

            {/* Scene */}
            <group position={[0, -1, 0]}>
                {/* Balance */}
                <group position={[0, -1, 0]}>
                    <boxGeometry args={[3, 0.2, 2]} />
                    <meshStandardMaterial color="#333" />
                    {/* Screen */}
                    <mesh position={[0, 0.11, 0.8]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[1, 0.4]} />
                        <meshBasicMaterial color="black" />
                    </mesh>
                    <Text position={[0, 0.12, 0.8]} rotation={[-Math.PI / 2, 0, 0]} fontSize={0.2} color="red">
                        {balanceValue.toFixed(1)} g
                    </Text>
                </group>

                {/* Flask */}
                <group position={[0, 0.5, 0]}>
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[0.8, 1, 1.5, 32, 1, true]} />
                        <meshPhysicalMaterial color="white" transmission={0.9} opacity={0.3} transparent side={THREE.DoubleSide} />
                    </mesh>
                    {/* Liquid Reactants */}
                    <mesh position={[0, -1, 0]} scale={[1, step === 1 ? 0.8 : 1, 1]}>
                        <cylinderGeometry args={[0.9, 0.9, 0.5, 32]} />
                        <meshStandardMaterial color="#E91E63" transparent opacity={0.8} />
                    </mesh>

                    {/* Gas Particles */}
                    {step === 1 && gasParticles && (
                        <GasParticles particles={gasParticles} escape={system === 'open'} />
                    )}

                    {/* Stopper */}
                    {system === 'closed' && (
                        <mesh position={[0, 0.3, 0]}>
                            <cylinderGeometry args={[0.85, 0.8, 0.2]} />
                            <meshStandardMaterial color="#5D4037" />
                        </mesh>
                    )}
                </group>
            </group>
        </group>
    );
}

function GasParticles({ particles, escape }) {
    const ref = useRef();
    useFrame((state, delta) => {
        if (!ref.current) return;
        const positions = ref.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            // Move up
            positions[i + 1] += delta * (0.5 + Math.random());
            // Wiggle
            positions[i] += (Math.random() - 0.5) * 0.05;
            positions[i + 2] += (Math.random() - 0.5) * 0.05;

            // Reset if too high (loop for visual) or remove if escape
            if (escape) {
                if (positions[i + 1] > 5) positions[i + 1] = -0.5;
            } else {
                // Bounce in flask (approx)
                if (positions[i + 1] > 0.2) positions[i + 1] = -0.5;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={ref} position={[0, -0.5, 0]}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="#FFF" transparent opacity={0.6} />
        </points>
    );
}


// ============================================================
// CHAPITRE 1: DÉMARCHE SCIENTIFIQUE (IMMERSIVE)
// ============================================================
export function ScientificMethod() {

    const [scenario, setScenario] = useState('plant'); // plant, pendulum
    const [step, setStep] = useState(0);
    const [variable, setVariable] = useState(null); // water/light or length/mass
    const [result, setResult] = useState(null);

    const scenarios = {
        plant: {
            title: "🌱 Mystère de la Plante",
            obs: "Cette plante est toute fanée... Pourquoi ?",
            hypotheses: [
                { id: 'water', text: "Elle manque d'eau", correct: true },
                { id: 'music', text: "Elle n'aime pas ma musique", correct: false },
                { id: 'light', text: "Elle manque de lumière", correct: false } // Simplification check
            ],
            exp: "Testons ton hypothèse sur 3 jours...",
            conc: { true: "Bravo ! L'eau est vitale.", false: "Rien ne change... Essayons autre chose." }
        },
        pendulum: {
            title: "⏱️ Le Pendule Simple",
            obs: "Qu'est-ce qui change la vitesse de balancement ?",
            hypotheses: [
                { id: 'mass', text: "La masse de l'objet", correct: false },
                { id: 'length', text: "La longueur de la ficelle", correct: true },
                { id: 'force', text: "La force de poussée", correct: false }
            ],
            exp: "Lançons le pendule avec ce paramètre...",
            conc: { true: "Exact ! Plus c'est court, plus c'est rapide.", false: "La période reste la même." }
        }
    };

    const sc = scenarios[scenario];

    const runExperiment = (hId) => {
        setVariable(hId);
        setStep(2);
        // Simulation du temps d'expérience
        setTimeout(() => {
            const isCorrect = sc.hypotheses.find(h => h.id === hId).correct;
            setResult(isCorrect);
            setStep(3);
        }, 3000);
    };

    const reset = () => {
        setStep(0);
        setVariable(null);
        setResult(null);
    };

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-blue-500/30 w-[380px] backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-blue-400 font-bold text-xl">🔬 Démarche Scientifique</h3>
                        <button onClick={reset} className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">🔄 Reset</button>
                    </div>

                    {/* Choix Scénario */}
                    {step === 0 && (
                        <div className="space-y-3">
                            <p className="text-sm text-gray-300 mb-2">Choisis une énigme à résoudre :</p>
                            <button onClick={() => setScenario('plant')} className={`w-full p-3 rounded-xl border text-left transition-all ${scenario === 'plant' ? 'border-green-500 bg-green-900/30' : 'border-gray-700 hover:border-green-500'}`}>
                                🌿 La Plante Triste
                            </button>
                            <button onClick={() => setScenario('pendulum')} className={`w-full p-3 rounded-xl border text-left transition-all ${scenario === 'pendulum' ? 'border-purple-500 bg-purple-900/30' : 'border-gray-700 hover:border-purple-500'}`}>
                                ⏱️ Le Pendule Mystérieux
                            </button>
                            <button onClick={() => setStep(1)} className="w-full mt-2 py-3 bg-blue-600 font-bold rounded-xl hover:bg-blue-500 shadow-lg">
                                COMMENCER L'ENQUÊTE ➡️
                            </button>
                        </div>
                    )}

                    {/* Étapes */}
                    {step === 1 && (
                        <div className="animate-in slide-in-from-right">
                            <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-blue-500 mb-4">
                                <div className="text-xs font-bold text-gray-400 uppercase">1. Observation</div>
                                <p>{sc.obs}</p>
                            </div>
                            <div className="text-sm font-bold mb-2">2. Formule une hypothèse :</div>
                            <div className="space-y-2">
                                {sc.hypotheses.map(h => (
                                    <button key={h.id} onClick={() => runExperiment(h.id)}
                                        className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-left text-sm transition-colors border border-transparent hover:border-blue-400">
                                        🤔 {h.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="text-center py-8 animate-pulse">
                            <div className="text-4xl mb-2">⚙️</div>
                            <div className="text-xl font-bold text-blue-400">Expérience en cours...</div>
                            <p className="text-sm text-gray-400">{sc.exp}</p>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-in zoom-in">
                            <div className={`p-4 rounded-xl border-2 mb-4 ${result ? 'border-green-500 bg-green-900/20' : 'border-red-500 bg-red-900/20'}`}>
                                <div className="text-3xl mb-2">{result ? '🎉' : '❌'}</div>
                                <div className="font-bold text-lg mb-1">Conclusion</div>
                                <p>{sc.conc[result]}</p>
                            </div>
                            <button onClick={() => setStep(1)} className="w-full py-3 bg-gray-700 rounded-xl hover:bg-gray-600">
                                Tester une autre hypothèse
                            </button>
                        </div>
                    )}
                </div>
            </Html>

            {/* SCÈNE 3D DYNAMIQUE */}
            <group position={[0, -1, 0]}>
                {scenario === 'plant' && <PlantSim state={step === 0 ? 'dead' : (step === 2 ? 'growing' : (result ? 'alive' : 'dead_dry'))} />}
                {scenario === 'pendulum' && <PendulumSim moving={step === 2} length={variable === 'length' ? 1 : 2} mass={variable === 'mass' ? 2 : 1} />}
            </group>
        </group>
    );
}

function PlantSim({ state }) {
    // state: dead, growing, alive, dead_dry
    return (
        <group>
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.5, 0.3, 1]} />
                <meshStandardMaterial color="#8D6E63" />
            </mesh>
            <group position={[0, -0.5, 0]}>
                {/* Tige */}
                <mesh position={[0, 1, 0]} rotation={[0, 0, state.startsWith('dead') ? 0.2 : 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 2]} />
                    <meshStandardMaterial color={state === 'alive' ? "#4CAF50" : "#8D6E63"} />
                </mesh>
                {/* Feuilles */}
                <mesh position={[0, 1.8, 0]} scale={state === 'alive' ? 1 : 0.5} rotation={[0, 0, state.startsWith('dead') ? 0.5 : 0]}>
                    <dodecahedronGeometry args={[0.8]} />
                    <meshStandardMaterial color={state === 'alive' ? "#66BB6A" : (state === 'dead_dry' ? "#D7CCC8" : "#A1887F")} />
                </mesh>
                {/* Eau qui tombe (si growing) */}
                {state === 'growing' && (
                    <group position={[0, 3, 0]}>
                        <mesh position={[0, 0, 0]}>
                            <coneGeometry args={[0.5, 1, 32]} rotation={[Math.PI, 0, 0]} />
                            <meshStandardMaterial color="blue" transparent opacity={0.5} />
                        </mesh>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <mesh key={i} position={[(Math.random() - 0.5) * 0.5, -1 - Math.random(), (Math.random() - 0.5) * 0.5]}>
                                <sphereGeometry args={[0.05]} />
                                <meshStandardMaterial color="cyan" />
                            </mesh>
                        ))}
                    </group>
                )}
            </group>
        </group>
    );
}

function PendulumSim({ moving, length, mass }) {
    const groupRef = useRef();
    useFrame(({ clock }) => {
        if (moving && groupRef.current) {
            // Période T = 2*PI*sqrt(L/g)
            // Si L est petit (1), T est petit -> w est grand
            // Simplification visuelle : w = 1 / sqrt(L)
            const speed = 3 / Math.sqrt(length);
            const angle = Math.sin(clock.elapsedTime * speed) * 0.5;
            groupRef.current.rotation.z = angle;
        } else if (groupRef.current) {
            groupRef.current.rotation.z = 0;
        }
    });

    return (
        <group position={[0, 2, 0]}>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="gray" />
            </mesh>
            <group ref={groupRef}>
                <mesh position={[0, -length / 2, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, length]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <mesh position={[0, -length, 0]}>
                    <sphereGeometry args={[mass * 0.2]} />
                    <meshStandardMaterial color={mass > 1 ? "red" : "yellow"} />
                </mesh>
            </group>
        </group>
    );
}

// ============================================================
// DENSITÉ (IMMERSIVE)
// ============================================================
// ============================================================
// DENSITÉ (IMMERSIVE & CHALLENGE)
// ============================================================
export function DensityExplorer() {
    const [mode, setMode] = useState('sinkfloat'); // sinkfloat, tower, challenge
    const [selectedObject, setSelectedObject] = useState(null);
    const [objectsInWater, setObjectsInWater] = useState([]);
    const [mysteryObj, setMysteryObj] = useState(null);
    const [success, setSuccess] = useState(null);

    const items = [
        { id: 'wood', name: 'Bois', dens: 0.6, color: '#A1887F' },
        { id: 'brick', name: 'Brique', dens: 2.0, color: '#EF5350' },
        { id: 'ice', name: 'Glaçon', dens: 0.92, color: '#E0F7FA' },
        { id: 'gold', name: 'Or', dens: 19.3, color: '#FFD700' }
    ];

    const liquids = [
        { id: 'oil', name: 'Huile', dens: 0.9, color: '#FFF176', y: 1 },
        { id: 'water', name: 'Eau', dens: 1.0, color: '#4FC3F7', y: 0 },
        { id: 'honey', name: 'Miel', dens: 1.4, color: '#FFB74D', y: -1 }
    ];

    const dropObject = (obj) => {
        // Reset animation par suppression/rajout
        setObjectsInWater(prev => [...prev.filter(o => o.id !== obj.id), { ...obj, key: Math.random() }]);
    };

    const startChallenge = () => {
        const secret = items[Math.floor(Math.random() * items.length)];
        setMysteryObj({ ...secret, id: 'mystery', name: 'Mystère❓', color: '#607D8B' });
        setMode('challenge');
        setObjectsInWater([]);
        setSuccess(null);
    };

    const verifyGuess = (guessId) => {
        if (!mysteryObj) return;
        if (guessId === mysteryObj.originalId || items.find(i => i.id === guessId).dens === mysteryObj.dens) {
            setSuccess(true);
        } else {
            setSuccess(false);
        }
    };

    // Pre-process mystery object to keep original ID reference for checking
    useEffect(() => {
        if (mysteryObj && !mysteryObj.originalId) {
            // Find which item it corresponds to based on density if not set
            const original = items.find(i => i.dens === mysteryObj.dens);
            if (original) setMysteryObj(prev => ({ ...prev, originalId: original.id }));
        }
    }, [mysteryObj]);


    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-cyan-500/30 w-[350px] backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-cyan-400 font-bold text-xl">🌊 Laboratoire de Densité</h3>
                        {mode !== 'challenge' && <button onClick={startChallenge} className="text-xs bg-cyan-700 px-2 py-1 rounded hover:bg-white hover:text-black transition-colors">Mode Défi 🏆</button>}
                        {mode === 'challenge' && <button onClick={() => setMode('sinkfloat')} className="text-xs bg-gray-700 px-2 py-1 rounded">Retour</button>}
                    </div>

                    <div className="flex gap-2 mb-4 bg-gray-800 p-1 rounded-lg">
                        <button onClick={() => { setMode('sinkfloat'); setObjectsInWater([]); }}
                            className={`flex-1 py-1 rounded text-sm ${mode === 'sinkfloat' ? 'bg-cyan-600' : 'hover:bg-gray-700'}`}>
                            Libre
                        </button>
                        <button onClick={() => { setMode('tower'); setObjectsInWater([]); }}
                            className={`flex-1 py-1 rounded text-sm ${mode === 'tower' ? 'bg-orange-600' : 'hover:bg-gray-700'}`}>
                            Tour
                        </button>
                    </div>

                    {mode === 'challenge' && (
                        <div className="mb-4">
                            <div className="bg-gray-800 p-3 rounded-lg mb-3 border-l-4 border-cyan-500">
                                <p className="text-sm">Identifie le matériau de l'objet mystère !</p>
                                <button onClick={() => dropObject(mysteryObj)} className="mt-2 text-xs bg-white text-black px-3 py-1 rounded font-bold hover:bg-gray-200 w-full">
                                    Lâcher l'Objet Mystère 👇
                                </button>
                            </div>

                            <div className="text-xs text-gray-400 mb-2">C'est quoi selon toi ?</div>
                            <div className="grid grid-cols-2 gap-2">
                                {items.map(item => (
                                    <button key={item.id} onClick={() => verifyGuess(item.id)}
                                        className={`p-2 rounded border ${success === true && item.dens === mysteryObj.dens ? 'bg-green-600 border-green-400' : 'bg-gray-700 border-gray-600 hover:border-cyan-400'}`}>
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            {success === true && <div className="mt-3 text-center text-green-400 font-bold animate-bounce">Correct ! C'était bien du {items.find(i => i.dens === mysteryObj.dens).name}.</div>}
                            {success === false && <div className="mt-3 text-center text-red-400 font-bold animate-pulse">Incorrect ! Observe bien où il flotte.</div>}
                            {success === true && <button onClick={startChallenge} className="mt-2 w-full py-1 bg-green-800 rounded text-xs">Nouveau Défi</button>}
                        </div>
                    )}

                    {mode === 'sinkfloat' && (
                        <div className="grid grid-cols-2 gap-2">
                            {items.map(item => (
                                <button key={item.id} onClick={() => dropObject(item)}
                                    className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 border border-gray-600 hover:border-cyan-400 transition-all flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-sm font-bold">{item.name}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {mode === 'tower' && (
                        <div className="text-sm p-4 bg-gray-800 rounded-xl">
                            <p className="mb-2">Densité des liquides :</p>
                            <ul className="space-y-1">
                                {liquids.map(l => (
                                    <li key={l.id} className="flex justify-between" style={{ color: l.color }}>
                                        <span>{l.name}</span>
                                        <span className="font-mono">{l.dens}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </Html>

            {/* Aquarium */}
            <group position={[0, -1.5, 0]}>
                <mesh position={[0, 1.5, 0]}>
                    <boxGeometry args={[3.2, 3.2, 2.2]} />
                    <meshPhysicalMaterial color="#E0F7FA" transmission={0.9} opacity={0.3} transparent side={THREE.DoubleSide} thickness={0.5} roughness={0} />
                </mesh>

                {mode === 'sinkfloat' || mode === 'challenge' ? (
                    <group>
                        <mesh position={[0, 1, 0]}>
                            <boxGeometry args={[3, 2, 2]} />
                            <meshStandardMaterial color="#4FC3F7" transparent opacity={0.6} />
                        </mesh>
                        {/* Simulation des liquides multiples pour le mode challenge aussi si besoin, mais simplifions a l'eau unique pour sinkfloat/challenge simple */}
                    </group>
                ) : (
                    // Tour de liquides
                    <group>
                        {liquids.map((l, i) => (
                            <mesh key={l.id} position={[0, l.y, 0]}>
                                <boxGeometry args={[3, 1, 2]} />
                                <meshStandardMaterial color={l.color} transparent opacity={0.8} />
                            </mesh>
                        ))}
                    </group>
                )}

                {/* Objets Simulés */}
                {objectsInWater.map(obj => (
                    <FloatingObject key={obj.key} obj={obj} mode={mode === 'challenge' ? 'sinkfloat' : mode} liquids={liquids} />
                ))}
            </group>
        </group>
    );
}


function FloatingObject({ obj, mode, liquids }) {
    const ref = useRef();
    const [yPos, setYPos] = useState(3); // Start high

    // Physics simplified
    useFrame((state, delta) => {
        let targetY = -0.5; // Bottom by default

        if (mode === 'sinkfloat') {
            // Water density = 1
            if (obj.dens < 1) targetY = 1.8; // Float surface
            else targetY = 0.1; // Sink bottom
        } else {
            // Find layer based on density
            // Ascending order of Y: Honey (-1), Water (0), Oil (1)
            if (obj.dens > 1.4) targetY = -0.5; // Bottom of Honey
            else if (obj.dens > 1.0) targetY = -0.5; // In Honey (sink) / At interface Honey/Water approx
            else if (obj.dens > 0.9) targetY = 0.5; // In Water
            else targetY = 1.5; // In Oil / Float
        }

        // Smooth Lerp
        const newY = THREE.MathUtils.lerp(ref.current.position.y, targetY, delta * 2);
        ref.current.position.y = newY;
    });

    return (
        <mesh ref={ref} position={[0, 3, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={obj.color} />
        </mesh>
    );
}

// ============================================================
// OUTILS DE MESURE (IMMERSIVE)
// ============================================================
export function MeasurementTools() {
    const [tool, setTool] = useState('ruler');
    const [target, setTarget] = useState(5.0); // True value
    const [userDist, setUserDist] = useState(0); // User measurement slider
    const [score, setScore] = useState(null);

    const checkMeasurement = () => {
        const diff = Math.abs(userDist - target);
        // Tolérance 0.1
        setScore(diff < 0.2 ? 'perfect' : (diff < 0.5 ? 'good' : 'bad'));
    };

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-yellow-500/30 w-[350px] backdrop-blur-md">
                    <h3 className="text-yellow-400 font-bold text-xl mb-4">📏 Précision de Mesure</h3>

                    <div className="mb-4 text-sm text-gray-300">
                        Objectif : Mesure la longueur de la barre verte le plus précisément possible !
                    </div>

                    <div className="bg-gray-800 p-4 rounded-xl mb-4">
                        <label className="block text-xs uppercase text-gray-500 mb-2">Ta lecture (cm)</label>
                        <div className="flex items-center gap-3">
                            <input type="range" min="3" max="7" step="0.1" value={userDist} onChange={(e) => { setUserDist(parseFloat(e.target.value)); setScore(null); }}
                                className="w-full accent-yellow-500" />
                            <span className="font-mono text-xl font-bold">{userDist.toFixed(1)}</span>
                        </div>
                    </div>

                    <button onClick={checkMeasurement} className="w-full py-3 bg-yellow-600 font-bold rounded-xl hover:bg-yellow-500 shadow-lg text-black">
                        VÉRIFIER
                    </button>

                    {score && (
                        <div className={`mt-3 p-2 rounded text-center font-bold ${score === 'perfect' ? 'bg-green-500 text-black' : (score === 'good' ? 'bg-yellow-500 text-black' : 'bg-red-500 text-white')}`}>
                            {score === 'perfect' ? 'PARFAIT ! 🎯' : (score === 'good' ? 'Pas mal ! 👍' : 'Essaie encore... 🧐')}
                            <div className="text-xs font-normal mt-1">Vraie valeur : {target} cm</div>
                        </div>
                    )}

                    <button onClick={() => { setTarget((Math.random() * 3 + 3).toFixed(1)); setScore(null); }} className="mt-2 text-xs text-gray-400 hover:text-white underline w-full text-center">
                        Nouvel objet
                    </button>
                </div>
            </Html>

            <group position={[0, -1, 0]}>
                {/* Rule */}
                <mesh position={[0, 0, -0.1]}>
                    <boxGeometry args={[10, 1, 0.1]} />
                    <meshStandardMaterial color="#FFCA28" />
                </mesh>
                {/* Graduations Visuals (Simplified stripes) */}
                {Array.from({ length: 11 }).map((_, i) => (
                    <mesh key={i} position={[i - 5, 0.2, 0]}>
                        <boxGeometry args={[0.05, 0.5, 0.15]} />
                        <meshStandardMaterial color="black" />
                    </mesh>
                ))}

                {/* Object to measure */}
                <mesh position={[(target / 2) - 5, -0.2, 0.1]}>
                    <boxGeometry args={[target, 0.5, 0.1]} />
                    <meshStandardMaterial color="#66BB6A" />
                </mesh>

                {/* Cursor User */}
                <mesh position={[userDist - 5, 0.5, 0.2]}>
                    <coneGeometry args={[0.2, 0.5, 16]} rotation={[Math.PI, 0, 0]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            </group>
        </group>
    );
}

// ============================================================
// RÉFRACTION (IMMERSIVE)
// ============================================================
// ============================================================
// RÉFRACTION (IMMERSIVE & CHALLENGE)
// ============================================================
export function RefractionSimulator() {
    const [angle, setAngle] = useState(45); // Degrés
    const [material, setMaterial] = useState('water'); // water, glass, diamond
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [targetX, setTargetX] = useState(1.5); // Target position
    const [hit, setHit] = useState(false);

    const materials = {
        water: { n: 1.33, name: 'Eau', color: '#4FC3F7' },
        glass: { n: 1.5, name: 'Verre', color: '#EEEEEE' },
        diamond: { n: 2.42, name: 'Diamant', color: '#E1F5FE' }
    };

    const n1 = 1.0; // Air
    const n2 = materials[material].n;

    // Snell-Descartes: n1 * sin(i) = n2 * sin(r)
    // r = asin( n1/n2 * sin(i) )
    const rad = (deg) => deg * Math.PI / 180;
    const angleRad = rad(angle);
    const rRad = Math.asin((n1 / n2) * Math.sin(angleRad));
    const rDeg = rRad * 180 / Math.PI;

    // Calcul de l'impact
    // Source à (0, 0), interface à y=0 (dans le repère local du rayon réfracté, non c'est plus compliqué en 3D absolue)
    // Le rayon part de (0,0) (interface) avec angle rRad par rapport à la verticale (normale)
    // Profondeur du bac = 2 unités (de 0 à -2)
    // x = tan(r) * profondeur
    // profondeur = 2
    // x_hit = tan(rRad) * 2
    const hitX = Math.tan(rRad) * 2;

    const startChallenge = () => {
        setMode('challenge');
        setTargetX((Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1)); // Random X between [-2.5, -0.5] U [0.5, 2.5]
        setHit(false);
    };

    useEffect(() => {
        if (mode === 'challenge') {
            // Check hit with tolerance
            if (Math.abs(hitX - targetX) < 0.2) {
                setHit(true);
            } else {
                setHit(false);
            }
        }
    }, [hitX, targetX, mode]);


    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-red-500/30 w-[350px] backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-red-400 font-bold text-xl">🔦 La Réfraction</h3>
                        <button onClick={mode === 'explore' ? startChallenge : () => setMode('explore')}
                            className={`text-xs px-2 py-1 rounded transition-colors ${mode === 'explore' ? 'bg-red-700 hover:bg-white hover:text-red-700' : 'bg-gray-700'}`}>
                            {mode === 'explore' ? 'Mode Cible 🎯' : 'Retour'}
                        </button>
                    </div>

                    {mode === 'challenge' && (
                        <div className={`mb-4 p-3 border-l-4 rounded bg-gray-800 ${hit ? 'border-green-500' : 'border-red-500'}`}>
                            <div className="text-xs uppercase text-gray-400">Objectif</div>
                            <div className="text-sm">Touche la cible au fond !</div>
                            {hit && <div className="text-green-400 font-bold mt-1 animate-bounce">CIBLE TOUCHÉE ! BRAVO !</div>}
                            {hit && <button onClick={startChallenge} className="mt-2 text-xs underline">Nouvelle Cible</button>}
                        </div>
                    )}

                    <div className="bg-gray-800 p-4 rounded-xl mb-4">
                        <label className="text-xs text-gray-400 uppercase">Angle d'incidence (i)</label>
                        <div className="flex items-center gap-3">
                            <input type="range" min="-80" max="80" value={angle} onChange={(e) => setAngle(parseFloat(e.target.value))} className="w-full accent-red-500" />
                            <span className="font-mono text-xl">{Math.abs(angle)}°</span>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                        {Object.entries(materials).map(([k, m]) => (
                            <button key={k} onClick={() => setMaterial(k)}
                                className={`flex-1 py-2 text-xs font-bold rounded ${material === k ? 'bg-white text-black' : 'bg-gray-700 text-gray-300'}`}>
                                {m.name} ({m.n})
                            </button>
                        ))}
                    </div>

                    <div className="bg-gray-900 p-3 rounded text-center font-mono text-sm">
                        Angle de réfraction (r) : <span className="text-green-400 font-bold text-lg">{rDeg.toFixed(1)}°</span>
                    </div>
                </div>
            </Html>

            {/* Laser Source (Updated rotation logic for +/- angles) */}
            <group position={[0, 2, 0]} rotation={[0, 0, -angleRad - Math.PI / 2]}>
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1]} />
                    <meshStandardMaterial color="gray" />
                </mesh>
                {/* Rayon Incident */}
                <mesh position={[0, -2, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 4]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            </group>

            {/* Surface / Milieu 2 */}
            <mesh position={[0, -2, 0]}>
                <boxGeometry args={[6, 4, 2]} />
                <meshPhysicalMaterial color={materials[material].color} transmission={0.9} opacity={0.5} transparent roughness={0.1} />
            </mesh>

            {/* Normale */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 6]} />
                <meshBasicMaterial color="white" opacity={0.3} transparent />
            </mesh>

            {/* Rayon Réfracté */}
            <group position={[0, 0, 0]} rotation={[0, 0, -rRad + Math.PI]}>
                <mesh position={[0, 2, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 4.5]} /> {/* Lengthened to hit bottom */}
                    <meshBasicMaterial color="red" opacity={0.7} transparent />
                </mesh>
            </group>

            {/* Target in Challenge Mode */}
            {mode === 'challenge' && (
                <mesh position={[targetX, -4, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.1]} />
                    <meshStandardMaterial color={hit ? "#4CAF50" : "#F44336"} emissive={hit ? "#4CAF50" : "black"} />
                    <mesh position={[0, 0.1, 0]}>
                        <ringGeometry args={[0.1, 0.2, 32]} />
                        <meshBasicMaterial color="white" side={THREE.DoubleSide} rotation={[-Math.PI / 2, 0, 0]} />
                    </mesh>
                </mesh>
            )}

            <Text position={[-2, 0.5, 0]} fontSize={0.3} color="white">Air (n=1.0)</Text>
            <Text position={[-2, -1, 0]} fontSize={0.3} color="white">{materials[material].name}</Text>
        </group>
    );
}


// ============================================================
// CIRCUITS SÉRIE / PARALLÈLE (IMMERSIVE)
// ============================================================
export function CircuitSeriesParallel() {
    const [mode, setMode] = useState('series');
    const [bulbs, setBulbs] = useState([true, true]); // true = working, false = broken

    const toggleBulb = (index) => {
        const newBulbs = [...bulbs];
        newBulbs[index] = !newBulbs[index];
        setBulbs(newBulbs);
    };

    // Logic: 
    // Series: All must be working for ANY to light up.
    // Parallel: Each lights up if it is working (independent).
    const isLit = (index) => {
        if (!bulbs[index]) return false; // If broken, not lit
        if (mode === 'series') return bulbs.every(b => b); // All must work
        return true; // Parallel: Independent
    };

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-yellow-500/30 w-[350px] backdrop-blur-md">
                    <h3 className="text-yellow-400 font-bold text-xl mb-4">⚡ Série vs Parallèle</h3>

                    <div className="flex gap-2 mb-6">
                        <button onClick={() => { setMode('series'); setBulbs([true, true]); }} className={`flex-1 py-2 rounded font-bold ${mode === 'series' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Série</button>
                        <button onClick={() => { setMode('parallel'); setBulbs([true, true]); }} className={`flex-1 py-2 rounded font-bold ${mode === 'parallel' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Parallèle</button>
                    </div>

                    <p className="text-sm text-gray-300 mb-2">
                        Clique sur une ampoule pour la "dévisser" (ou la casser).
                    </p>
                    <div className="p-3 bg-gray-800 rounded-xl text-center text-sm">
                        {mode === 'series'
                            ? "En SÉRIE : Si une seule ampoule grille, le circuit est ouvert et TOUT s'éteint !"
                            : "En PARALLÈLE : Chaque ampoule a sa propre boucle. Si l'une grille, l'autre RESTE allumée !"}
                    </div>
                </div>
            </Html>

            {/* Battery */}
            <mesh position={[-3, 0, 0]}>
                <boxGeometry args={[1, 1.5, 1]} />
                <meshStandardMaterial color="#333" />
                <Text position={[0, 0, 0.6]} fontSize={0.5} color="white">⚡</Text>
            </mesh>

            {/* Circuit */}
            {mode === 'series' ? (
                <group>
                    {/* Wires */}
                    <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 6]} /><meshStandardMaterial color="orange" /></mesh>
                    <mesh position={[0, -1.5, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 6]} /><meshStandardMaterial color="orange" /></mesh>
                    <mesh position={[3, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 3]} /><meshStandardMaterial color="orange" /></mesh>

                    {/* Bulbs */}
                    <InteractiveBulb position={[-1, 1.5, 0]} lit={isLit(0)} working={bulbs[0]} onClick={() => toggleBulb(0)} />
                    <InteractiveBulb position={[1, 1.5, 0]} lit={isLit(1)} working={bulbs[1]} onClick={() => toggleBulb(1)} />
                </group>
            ) : (
                <group>
                    {/* Main Wires */}
                    <mesh position={[-1, 2, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 4]} /><meshStandardMaterial color="orange" /></mesh>
                    <mesh position={[-1, -2, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 4]} /><meshStandardMaterial color="orange" /></mesh>

                    {/* Branches */}
                    <group position={[1, 0, 0]}>
                        <mesh position={[0, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 4]} /><meshStandardMaterial color="orange" /></mesh>
                        <InteractiveBulb position={[0, 0, 0]} lit={isLit(0)} working={bulbs[0]} onClick={() => toggleBulb(0)} />
                    </group>
                    <group position={[3, 0, 0]}>
                        <mesh position={[0, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 4]} /><meshStandardMaterial color="orange" /></mesh>
                        <InteractiveBulb position={[0, 0, 0]} lit={isLit(1)} working={bulbs[1]} onClick={() => toggleBulb(1)} />
                    </group>
                </group>
            )}
        </group>
    );
}

function InteractiveBulb({ position, lit, working, onClick }) {
    const [hovered, setHover] = useState(false);
    return (
        <group position={position} onClick={onClick} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial
                    color={lit ? "#FFEB3B" : (working ? "#FFFFFF" : "#424242")}
                    emissive={lit ? "#FFEB3B" : "#000000"}
                    emissiveIntensity={lit ? 2 : 0}
                    transparent opacity={working ? 0.9 : 0.4}
                />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.5]} />
                <meshStandardMaterial color="#9E9E9E" />
            </mesh>
            {/* Socket */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.3]} />
                <meshStandardMaterial color="#BDBDBD" />
            </mesh>
            {hovered && <Text position={[0, 1.2, 0]} fontSize={0.2} color="white">{working ? "Dévisser" : "Revisser"}</Text>}
        </group>
    );
}

// ============================================================
// PROPAGATION LUMIÈRE (IMMERSIVE - ALIGNEMENT)
// ============================================================
export function LightPropagationPC4() {
    const [screens, setScreens] = useState([0, 0, 0.5]); // Y positions of holes
    const dragIndex = useRef(null);

    const onPointerDown = (i) => (e) => {
        e.stopPropagation();
        dragIndex.current = i;
    };

    // Simple drag simulation logic would require more complex events or useGesture
    // We will use simple Up/Down buttons for simplicity in this context
    const moveScreen = (i, dir) => {
        setScreens(prev => {
            const next = [...prev];
            next[i] = Math.max(-1, Math.min(1, next[i] + dir * 0.2));
            return next;
        });
    };

    // Check alignment (approx 0)
    const aligned = screens.every(y => Math.abs(y) < 0.1);

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-white/30 w-[350px] backdrop-blur-md">
                    <h3 className="text-white font-bold text-xl mb-4">🔦 Propagation Rectiligne</h3>
                    <p className="text-sm text-gray-400 mb-4">La lumière voyage en ligne droite. Aligne les trous pour que le laser atteigne la cible !</p>

                    <div className="flex justify-between gap-2">
                        {[0, 1, 2].map(i => (
                            <div key={i} className="flex flex-col items-center bg-gray-800 p-2 rounded">
                                <div className="text-xs mb-1">Écran {i + 1}</div>
                                <button onClick={() => moveScreen(i, 1)} className="p-1 bg-gray-700 hover:bg-gray-600 rounded">⬆️</button>
                                <div className="h-4 my-1 w-1 bg-white/20"></div>
                                <button onClick={() => moveScreen(i, -1)} className="p-1 bg-gray-700 hover:bg-gray-600 rounded">⬇️</button>
                            </div>
                        ))}
                    </div>

                    {aligned && (
                        <div className="mt-4 p-3 bg-green-600 text-center font-bold rounded-xl animate-bounce">
                            CIBLE ATTEINTE ! 🎯
                        </div>
                    )}
                </div>
            </Html>

            {/* Laser */}
            <mesh position={[-4, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <cylinderGeometry args={[0.2, 0.2, 1]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Beam Segment 1 (Always on) */}
            <mesh position={[-2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 3]} />
                <meshBasicMaterial color="red" />
            </mesh>

            {/* Beam Segment 2 (If Screen 1 Aligned) */}
            {Math.abs(screens[0]) < 0.1 && (
                <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 1]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            )}
            {/* Beam Segment 3 (If Screen 1&2 Aligned) */}
            {Math.abs(screens[0]) < 0.1 && Math.abs(screens[1]) < 0.1 && (
                <mesh position={[1.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 2]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            )}
            {/* Beam Segment 4 (If All Aligned - Hit Target) */}
            {aligned && (
                <mesh position={[3.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 2]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            )}

            {/* Screens */}
            {[0, 1, 2].map(i => (
                <group key={i} position={[-0.5 + i * 1.5, screens[i], 0]}>
                    {/* Board with hole */}
                    <mesh position={[0, 0.75, 0]}>
                        <boxGeometry args={[0.1, 1.4, 1.4]} />
                        <meshStandardMaterial color="#546E7A" />
                    </mesh>
                    <mesh position={[0, -0.75, 0]}>
                        <boxGeometry args={[0.1, 1.4, 1.4]} />
                        <meshStandardMaterial color="#546E7A" />
                    </mesh>
                </group>
            ))}

            {/* Target */}
            <mesh position={[4.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <circleGeometry args={[1, 32]} />
                <meshStandardMaterial color={aligned ? "#4CAF50" : "#263238"} emissive={aligned ? "#4CAF50" : "black"} />
                <mesh position={[0, 0, 0.1]}>
                    <ringGeometry args={[0.2, 0.3, 32]} />
                    <meshBasicMaterial color="white" />
                </mesh>
                <mesh position={[0, 0, 0.1]}>
                    <ringGeometry args={[0.5, 0.6, 32]} />
                    <meshBasicMaterial color="white" />
                </mesh>
            </mesh>
        </group>
    );
}



// ============================================================
// OMBRES ET PÉNOMBRE (IMMERSIVE)
// ============================================================
export function ShadowsSimulator() {
    const [sourceType, setSourceType] = useState('point'); // point, extended
    const [objZ, setObjZ] = useState(-2); // Position between source (-4) and screen (2)

    // Geometry Constants
    const sourceZ = -4;
    const screenZ = 2;
    const objRadius = 0.5;

    // Thales calculations
    const d1 = Math.abs(objZ - sourceZ); // Dist Source-Object
    const dTotal = Math.abs(screenZ - sourceZ); // Dist Source-Screen
    const d2 = Math.abs(screenZ - objZ); // Dist Object-Screen

    // Shadow sizes (Homothétie)
    // Scale factor k = dTotal / d1
    const k = dTotal / d1;

    // For Point Source: simple projection
    const shadowRadius = objRadius * k;

    // For Extended Source:
    // Umbra (Ombre propre/portée pure) shrinks if source > object
    // Penumbra (Pénombre) expands
    // Simplified model: 
    // Source Radius roughly 0.1 (Point) vs 0.8 (Extended)
    const sourceRadius = sourceType === 'point' ? 0.05 : 0.8;

    // Umbra Radius (approximation usually r_u = (r*D - R*d2)/d1 ... complex geometry)
    // Let's use simple visual approximation for the 'faked' shadow on screen
    // If source is bigger than object, umbra shrinks.
    // Geometrically: H = source radius, h = object radius
    // Umbra radius U = (h*D - H*d2) / d1  (where D is source-screen dist? No, typically simpler)
    // Visual logic: 
    // Outer Penumbra Radius = (h*D + H*d2) / d1 ... ?
    // Let's stick to visual tweaking:
    // Point source: Sharp shadow size = h * (d1+d2)/d1
    // Extended:
    // Umbra matches point source logic but subtracts influence of extended source angle
    // Penumbra is the blur area.

    const penumbraRadius = shadowRadius + (sourceType === 'extended' ? (d2 * 0.5) : 0); // Blur grows with distance from screen
    const umbraRadius = sourceType === 'extended' ? Math.max(0, shadowRadius - (d2 * 0.3)) : shadowRadius; // Umbra shrinks

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-gray-500/30 w-[350px] backdrop-blur-md">
                    <h3 className="text-gray-300 font-bold text-xl mb-4">🌑 Ombres & Pénombre</h3>

                    <div className="flex bg-gray-800 p-1 rounded-lg mb-6">
                        <button onClick={() => setSourceType('point')} className={`flex-1 py-2 rounded text-sm ${sourceType === 'point' ? 'bg-yellow-600 font-bold' : 'text-gray-400'}`}>Source Ponctuelle</button>
                        <button onClick={() => setSourceType('extended')} className={`flex-1 py-2 rounded text-sm ${sourceType === 'extended' ? 'bg-orange-600 font-bold' : 'text-gray-400'}`}>Source Étendue</button>
                    </div>

                    <div className="mb-4">
                        <label className="text-xs text-gray-400 uppercase">Position de l'objet</label>
                        <input type="range" min="-3" max="0" step="0.1" value={objZ} onChange={(e) => setObjZ(parseFloat(e.target.value))} className="w-full accent-white" />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>Près Source</span>
                            <span>Près Écran</span>
                        </div>
                    </div>

                    <div className="p-3 bg-gray-900 rounded text-sm text-gray-300">
                        {sourceType === 'point'
                            ? "Une source ponctuelle crée une ombre nette (ombre portée)."
                            : "Une source étendue crée une ombre centrale et une zone de pénombre floue."}
                    </div>
                </div>
            </Html>

            {/* Source */}
            <group position={[0, 0, sourceZ]}>
                {sourceType === 'point' ? (
                    <mesh>
                        <sphereGeometry args={[0.1]} />
                        <meshBasicMaterial color="#FFD700" />
                        <pointLight intensity={1.5} distance={10} />
                    </mesh>
                ) : (
                    <group>
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.8, 0.8, 0.1]} />
                            <meshBasicMaterial color="#FFA000" />
                        </mesh>
                        {/* Fake multiple lights for soft shadow if we were using real shadows, 
                            but here we use manual shadow shape calculation so simple light is ok for illumination */}
                        <pointLight intensity={1.5} distance={10} />
                    </group>
                )}
            </group>

            {/* Object */}
            <mesh position={[0, 0, objZ]}>
                <sphereGeometry args={[objRadius, 32, 32]} />
                <meshStandardMaterial color="#EF5350" />
            </mesh>

            {/* Screen */}
            <group position={[0, 0, screenZ]}>
                <mesh>
                    <planeGeometry args={[6, 6]} />
                    <meshStandardMaterial color="white" side={THREE.DoubleSide} />
                </mesh>

                {/* Simulated Shadow on Screen */}
                <group position={[0, 0, 0.01]}> {/* Slightly in front to avoid z-fight */}
                    {/* Penumbra (Grey blur) */}
                    {sourceType === 'extended' && (
                        <mesh>
                            <ringGeometry args={[umbraRadius, penumbraRadius, 32]} />
                            <meshBasicMaterial color="gray" opacity={0.5} transparent />
                        </mesh>
                    )}
                    {/* Umbra (Black) */}
                    <mesh>
                        <circleGeometry args={[umbraRadius, 32]} />
                        <meshBasicMaterial color="black" opacity={0.8} transparent />
                    </mesh>
                </group>
            </group>

            {/* Visual Ray Lines (Simplified) */}
            <group>
                <Line points={[[0, (sourceType === 'extended' ? 0.8 : 0), sourceZ], [0, objRadius, objZ], [0, penumbraRadius, screenZ]]} color="yellow" opacity={0.3} transparent />
                <Line points={[[0, (sourceType === 'extended' ? -0.8 : 0), sourceZ], [0, -objRadius, objZ], [0, -penumbraRadius, screenZ]]} color="yellow" opacity={0.3} transparent />
            </group>
        </group>
    );
}

// ============================================================
// SOURCES DE LUMIÈRE (IMMERSIVE)
// ============================================================
export function LightSources() {

    const [sunOn, setSunOn] = useState(true);
    const [lampOn, setLampOn] = useState(false);
    const [info, setInfo] = useState(null);

    const objects = [
        { id: 'sun', type: 'primary', name: 'Soleil', pos: [-3, 2, -2], color: '#FDB813', scale: 1 },
        { id: 'lamp', type: 'primary', name: 'Lampe', pos: [3, 0, 0], color: '#FFFFFF', scale: 0.5 },
        { id: 'moon', type: 'secondary', name: 'Lune', pos: [-2, 2, 2], color: '#CFD8DC', scale: 0.8 },
        { id: 'mirror', type: 'secondary', name: 'Miroir', pos: [0, -1, 1], color: '#B0BEC5', scale: 1 }
    ];

    const handleObjectClick = (obj) => {
        if (obj.id === 'sun') setSunOn(!sunOn);
        if (obj.id === 'lamp') setLampOn(!lampOn);
        setInfo(obj);
    };

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-yellow-500/30 w-[350px] backdrop-blur-md">
                    <h3 className="text-yellow-400 font-bold text-xl mb-4">☀️ Sources de Lumière</h3>

                    <p className="text-sm text-gray-300 mb-4">
                        Clique sur les objets pour explorer leurs propriétés.
                    </p>

                    <div className="flex gap-2 mb-4">
                        <div className="flex-1 bg-gray-800 p-2 rounded text-center">
                            <div className="text-yellow-400 font-bold text-lg">{sunOn ? "ON" : "OFF"}</div>
                            <div className="text-xs">Soleil</div>
                        </div>
                        <div className="flex-1 bg-gray-800 p-2 rounded text-center">
                            <div className="text-white font-bold text-lg">{lampOn ? "ON" : "OFF"}</div>
                            <div className="text-xs">Lampe</div>
                        </div>
                    </div>

                    {info && (
                        <div className="p-3 bg-gray-800 rounded-xl border-l-4 border-yellow-500 animate-in slide-in-from-bottom">
                            <div className="font-bold text-lg">{info.name}</div>
                            <div className="text-sm text-yellow-200 uppercase font-bold mb-1">
                                {info.type === 'primary' ? 'Source Primaire 🌟' : 'Source Secondaire 🌙'}
                            </div>
                            <p className="text-sm text-gray-400">
                                {info.type === 'primary'
                                    ? "Produit sa propre lumière."
                                    : "Ne produit pas de lumière, diffuse celle reçue."}
                            </p>
                        </div>
                    )}
                </div>
            </Html>

            {/* Ambient Light (low) */}
            <ambientLight intensity={0.1} />

            {/* Sun Light source */}
            {sunOn && <pointLight position={[-3, 2, -2]} intensity={2} color="#FDB813" distance={10} />}

            {/* Lamp Light source */}
            {lampOn && <pointLight position={[3, 0.5, 0]} intensity={1.5} color="#FFFFFF" distance={5} />}

            {/* Objects */}
            {objects.map(obj => {
                let isLit = false;
                if (obj.type === 'primary') {
                    if (obj.id === 'sun') isLit = sunOn;
                    if (obj.id === 'lamp') isLit = lampOn;
                } else {
                    // Secondary objects need a primary source ON
                    isLit = sunOn || lampOn; // Simplified logic
                }

                return (
                    <group key={obj.id} position={obj.pos} onClick={() => handleObjectClick(obj)}
                        onPointerOver={(e) => document.body.style.cursor = 'pointer'}
                        onPointerOut={(e) => document.body.style.cursor = 'auto'}>

                        {/* Sun Visual */}
                        {obj.id === 'sun' && (
                            <mesh scale={obj.scale}>
                                <sphereGeometry args={[1, 32, 32]} />
                                <meshStandardMaterial color={obj.color} emissive={obj.color} emissiveIntensity={sunOn ? 2 : 0.1} />
                            </mesh>
                        )}

                        {/* Moon Visual */}
                        {obj.id === 'moon' && (
                            <mesh scale={obj.scale}>
                                <sphereGeometry args={[1, 32, 32]} />
                                <meshStandardMaterial color={obj.color} roughness={0.8} />
                            </mesh>
                        )}

                        {/* Lamp Visual */}
                        {obj.id === 'lamp' && (
                            <group scale={obj.scale}>
                                <mesh position={[0, 0, 0]}>
                                    <cylinderGeometry args={[0.5, 0.8, 1]} />
                                    <meshStandardMaterial color="white" emissive="white" emissiveIntensity={lampOn ? 1 : 0} transparent opacity={0.8} />
                                </mesh>
                                <mesh position={[0, -0.6, 0]}>
                                    <cylinderGeometry args={[0.1, 0.5, 0.2]} />
                                    <meshStandardMaterial color="black" />
                                </mesh>
                            </group>
                        )}

                        {/* Mirror Visual */}
                        {obj.id === 'mirror' && (
                            <mesh scale={obj.scale} rotation={[-Math.PI / 4, 0, 0]}>
                                <boxGeometry args={[2, 2, 0.1]} />
                                <meshStandardMaterial color="#E0E0E0" metalness={1} roughness={0} />
                            </mesh>
                        )}
                    </group>
                );
            })}
        </group>
    );
}

// ============================================================
// INTRODUCTION ÉLECTRICITÉ (IMMERSIVE)
// ============================================================

// ============================================================
// INTRODUCTION ÉLECTRICITÉ (IMMERSIVE & SÉCURITÉ)
// ============================================================
export function IntroElectricity() {
    const [switchClosed, setSwitchClosed] = useState(false);
    const [shortCircuit, setShortCircuit] = useState(false);
    const [fuseBlown, setFuseBlown] = useState(false);

    // Electrons animation reference
    const electronsRef = useRef([]);

    useFrame((state) => {
        if (switchClosed && !fuseBlown) {
            const t = state.clock.getElapsedTime();
            if (electronsRef.current) {
                // S'il y a court-circuit, les électrons s'affolent (vitesse x5)
                const speed = shortCircuit ? 10 : 2;
                electronsRef.current.position.x = (t * speed % 2) * 2;
            }
        }
    });

    const toggleShortCircuit = () => {
        if (fuseBlown) return; // Trop tard
        if (!shortCircuit) {
            // Activer court-circuit
            setShortCircuit(true);
            setSwitchClosed(true); // Forcer le passage
            // Le fusible grille après 1.5 secondes
            setTimeout(() => {
                setFuseBlown(true);
                setSwitchClosed(false);
            }, 1500);
        } else {
            setShortCircuit(false);
        }
    };

    const replaceFuse = () => {
        setFuseBlown(false);
        setShortCircuit(false);
        setSwitchClosed(false);
    };

    return (
        <group>
            <Html position={[5, 2, 0]} center>
                <div className="bg-black/90 p-5 rounded-2xl text-white border border-blue-500/30 w-[350px] backdrop-blur-md">
                    <h3 className="text-blue-400 font-bold text-xl mb-4">🔌 Le Circuit & Sécurité</h3>

                    <div className="bg-gray-800 p-3 rounded-lg mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold">État du Circuit :</span>
                            <span className={`text-xs px-2 py-1 rounded font-bold ${fuseBlown ? 'bg-red-900 text-red-200' : (switchClosed ? 'bg-green-600' : 'bg-gray-600')}`}>
                                {fuseBlown ? "FUSIBLE GRILLÉ 💥" : (switchClosed ? "FERMÉ (ON)" : "OUVERT (OFF)")}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400">
                            {fuseBlown
                                ? "Le courant était trop fort ! Le fusible a fondu pour protéger le circuit."
                                : (shortCircuit ? "DANGER ! Court-circuit en cours !" : "Tout fonctionne normalement.")}
                        </p>
                    </div>

                    <button onClick={() => !fuseBlown && setSwitchClosed(!switchClosed)} disabled={fuseBlown || shortCircuit}
                        className={`w-full py-3 mb-2 rounded-xl font-bold text-lg transition-all 
                        ${fuseBlown ? 'bg-gray-700 opacity-50 cursor-not-allowed' : (switchClosed ? 'bg-green-600 hover:bg-green-500' : 'bg-blue-600 hover:bg-blue-500')}`}>
                        {switchClosed ? "Ouvrir Interrupteur" : "Fermer Interrupteur"}
                    </button>

                    <button onClick={toggleShortCircuit} disabled={fuseBlown}
                        className={`w-full py-3 mb-2 rounded-xl font-bold text-lg transition-all border-2 
                        ${shortCircuit ? 'bg-red-600 border-red-800 animate-pulse' : 'bg-transparent border-red-600 text-red-500 hover:bg-red-900/30'}`}>
                        {shortCircuit ? "⚠️ COURT-CIRCUIT !!!" : "🔥 Créer Court-Circuit"}
                    </button>

                    {fuseBlown && (
                        <button onClick={replaceFuse} className="w-full py-2 bg-yellow-600 rounded-lg text-white font-bold animate-bounce">
                            🛠️ Remplacer le Fusible
                        </button>
                    )}
                </div>
            </Html>

            <group position={[0, -1, 0]}>
                {/* Battery */}
                <group position={[-2, 0, 0]}>
                    <boxGeometry args={[1, 1.5, 1]} />
                    <meshStandardMaterial color={shortCircuit && !fuseBlown ? "#ff3333" : "#212121"} />
                    <Text position={[0, 0, 0.6]} fontSize={0.8} color="white">+</Text>
                    {/* Fire effect if short circuit */}
                    {shortCircuit && !fuseBlown && (
                        <mesh position={[0, 1, 0]}>
                            <sphereGeometry args={[0.5]} />
                            <meshBasicMaterial color="orange" transparent opacity={0.6} />
                        </mesh>
                    )}
                </group>

                {/* Fuse */}
                <group position={[0, 1.5, 0]}>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 1]} />
                        <meshStandardMaterial color="white" transparent opacity={0.5} />
                    </mesh>
                    {/* Visual filament inside */}
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.02, 0.02, fuseBlown ? 0.2 : 1]} /> {/* Broken if blown */}
                        <meshBasicMaterial color={fuseBlown ? "black" : "red"} />
                    </mesh>
                    <Text position={[0, 0.3, 0]} fontSize={0.2} color="white">Fusible</Text>
                </group>

                {/* Bulb */}
                <group position={[2, 0, 0]}>
                    <mesh position={[0, 0.8, 0]}>
                        <sphereGeometry args={[0.6]} />
                        <meshStandardMaterial
                            color={switchClosed && !shortCircuit ? "#FFEB3B" : "white"}
                            emissive={switchClosed && !shortCircuit ? "#FFEB3B" : "black"}
                            emissiveIntensity={switchClosed && !shortCircuit ? 2 : 0}
                            transparent opacity={0.6}
                        />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.3, 0.3, 0.8]} />
                        <meshStandardMaterial color="#B0BEC5" />
                    </mesh>
                </group>

                {/* Switch Visual */}
                <group position={[0, -1.5, 0]}>
                    <mesh position={[-0.5, 0, 0]}><boxGeometry args={[0.2, 0.2, 0.2]} /><meshStandardMaterial color="gray" /></mesh>
                    <mesh position={[0.5, 0, 0]}><boxGeometry args={[0.2, 0.2, 0.2]} /><meshStandardMaterial color="gray" /></mesh>
                    {/* The moving part */}
                    <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, switchClosed ? 0 : 0.5]}>
                        <boxGeometry args={[1.2, 0.1, 0.1]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                </group>

                {/* Wires */}
                {/* Battery + to Fuse */}
                <WirePath points={[[-2, 0.75, 0], [-2, 1.5, 0], [-0.5, 1.5, 0]]} color="red" />
                {/* Fuse to Bulb */}
                <WirePath points={[[0.5, 1.5, 0], [2, 1.5, 0], [2, 0.8, 0]]} color="red" />

                {/* Battery - to Switch */}
                <WirePath points={[[-2, -0.75, 0], [-2, -1.5, 0], [-0.5, -1.5, 0]]} color="black" />
                {/* Switch to Bulb */}
                <WirePath points={[[0.5, -1.5, 0], [2, -1.5, 0], [2, -0.4, 0]]} color="black" />

                {/* SHORT CIRCUIT WIRE (bypass bulb) */}
                {shortCircuit && (
                    <WirePath points={[[1, 1.5, 0], [1, -1.5, 0]]} color="#FF5722" /> // Direct connecting + line to - line
                )}

                {/* Electron Flow Visualization */}
                {switchClosed && !fuseBlown && (
                    <group>
                        {/* Top path */}
                        <ElectronStream start={[-2, 1.5, 0]} end={[0, 1.5, 0]} speed={shortCircuit ? 5 : 1} />
                        {!shortCircuit && <ElectronStream start={[0.1, 1.5, 0]} end={[2, 1.5, 0]} speed={1} />}

                        {/* Short circuit path */}
                        {shortCircuit && <ElectronStream start={[0, 1.5, 0]} end={[0, -1.5, 0]} speed={5} />}

                        {/* Bottom path */}
                        <ElectronStream start={[2, -1.5, 0]} end={[-2, -1.5, 0]} speed={shortCircuit ? 5 : 1} />
                    </group>
                )}
            </group>
        </group>
    );
}

function WirePath({ points, color }) {
    // Simple segmented wire
    const segments = [];
    for (let i = 0; i < points.length - 1; i++) {
        const p1 = new THREE.Vector3(...points[i]);
        const p2 = new THREE.Vector3(...points[i + 1]);
        const dist = p1.distanceTo(p2);
        const center = p1.clone().add(p2).multiplyScalar(0.5);
        const lookAtRot = new THREE.Euler().setFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize()));

        segments.push(
            <mesh key={i} position={center} rotation={lookAtRot}>
                <cylinderGeometry args={[0.05, 0.05, dist]} />
                <meshStandardMaterial color={color} />
            </mesh>
        );
    }
    return <group>{segments}</group>;
}

function ElectronStream({ start, end, speed = 1 }) {
    const count = 5;
    return (
        <group>
            {Array.from({ length: count }).map((_, i) => (
                <MovingElectron key={i} start={start} end={end} offset={i / count} speed={speed} />
            ))}
        </group>
    );
}

function MovingElectron({ start, end, offset, speed }) {
    const ref = useRef();
    const p1 = new THREE.Vector3(...start);
    const p2 = new THREE.Vector3(...end);

    useFrame((state) => {
        if (ref.current) {
            const t = (state.clock.elapsedTime * 0.5 * speed + offset) % 1;
            ref.current.position.lerpVectors(p1, p2, t);
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.08]} />
            <meshBasicMaterial color="#FFFF00" />
        </mesh>
    );
}

