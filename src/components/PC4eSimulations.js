'use client';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float, Sphere, OrbitControls, Box, Cylinder, Torus } from '@react-three/drei';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// ============================================================
// CHAPITRE 9: SÉPARATION DES MÉLANGES (IMMERSIVE & CHALLENGE)
// ============================================================
export function MixtureSeparationPC4() {
    const [phase, setPhase] = useState('explore');
    const [mixture, setMixture] = useState('mud');
    const [method, setMethod] = useState(null);
    const [progress, setProgress] = useState(0);
    const [particles, setParticles] = useState(null);
    const [targetReached, setTargetReached] = useState(false);

    // Gamification & Features
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [microscope, setMicroscope] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45);
    const [mission, setMission] = useState(null);

    // Initialisation des particules
    useEffect(() => {
        const pts = new Float32Array(600).map(() => (Math.random() - 0.5) * 1.5);
        setParticles(pts);
    }, []);

    const mixtures = {
        mud: { name: 'Eau boueuse', components: ['Eau', 'Terre'], color: '#78350F', difficulty: 1 },
        salt_water: { name: 'Eau salée', components: ['Eau', 'Sel'], color: '#93C5FD', difficulty: 2 },
        oil_water: { name: 'Eau + Huile', components: ['Eau', 'Huile'], color: '#FEF3C7', difficulty: 1 }
    };

    const methods = {
        decantation: { name: 'Décantation', icon: '⏳', effective: ['mud', 'oil_water'], desc: 'Laisser reposer (densité)' },
        filtration: { name: 'Filtration', icon: '☕', effective: ['mud'], desc: 'Passer à travers un filtre (taille)' },
        evaporation: { name: 'Vaporisation', icon: '🔥', effective: ['salt_water'], desc: 'Chauffer pour récupérer le solide' }
    };

    const startSeparation = (m) => {
        setMethod(m);
        setProgress(0);
        setShowSuccess(false);
    };

    const isSuccess = method && methods[method].effective.includes(mission?.target || mixture);

    useFrame((state, delta) => {
        if (method && progress < 1) {
            setProgress(prev => {
                const newP = Math.min(prev + delta * 0.3, 1);
                if (newP === 1 && prev < 1) {
                    if (isSuccess) {
                        setTargetReached(true);
                        handleMissionSuccess();
                    }
                }
                return newP;
            });
        }
    });

    const handleMissionSuccess = () => {
        const points = 50 + (phase === 'mission' ? Math.floor(timeLeft * 2) : 0);
        setScore(s => s + points);
        setShowSuccess(true);
    };

    const startMission = () => {
        const keys = Object.keys(mixtures);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        setMission({
            target: randomKey,
            objective: `Isolez les composants de : ${mixtures[randomKey].name}`
        });
        setMixture(randomKey);
        setPhase('mission');
        setMethod(null);
        setProgress(0);
        setShowSuccess(false);
        setTimeLeft(45);
        setTargetReached(false);
    };

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    return (
        <>
            <SuccessOverlay show={showSuccess} message={`Mission Accomplie ! Tu as séparé : ${mixtures[mission?.target || mixture].name}`} points={50 + (phase === 'mission' ? Math.floor(timeLeft * 2) : 0)} onNext={phase === 'mission' ? startMission : () => setShowSuccess(false)} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Laboratoire de Séparation" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-orange-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startMission(); }} />

                    {phase === 'mission' && mission && (
                        <MissionObjective objective={mission.objective} icon="⚗️" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            {phase === 'explore' && (
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase">Solution à traiter</label>
                                    <div className="grid grid-cols-1 gap-1">
                                        {Object.entries(mixtures).map(([k, m]) => (
                                            <button key={k} onClick={() => { setMixture(k); setMethod(null); setProgress(0); }}
                                                className={`py-1 px-2 rounded-lg text-xs font-bold transition-all border ${mixture === k ? 'bg-orange-600 border-orange-400' : 'bg-gray-800 border-gray-700'}`}>
                                                {m.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="text-[10px] text-gray-400 block mb-1 uppercase">Technique de Séparation</label>
                                <div className="grid grid-cols-1 gap-1">
                                    {Object.entries(methods).map(([k, m]) => (
                                        <button key={k} onClick={() => startSeparation(k)}
                                            className={`flex items-center gap-2 p-1 px-2 rounded-lg border transition-all ${method === k ? 'bg-orange-100 text-black border-orange-500' : 'bg-gray-800 border-gray-700'}`}>
                                            <span className="text-lg">{m.icon}</span>
                                            <div className="text-left">
                                                <div className="font-bold text-[10px]">{m.name}</div>
                                                <div className="text-[8px] opacity-70 leading-tight">{m.desc}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                            <div className="space-y-2 text-center">
                                <div className="text-[9px] text-gray-500 font-mono">LAB_ANALYSIS</div>
                                <button onClick={() => setMicroscope(!microscope)} className={`w-full py-1 text-[10px] border px-2 rounded transition-colors ${microscope ? 'bg-blue-600 border-blue-400 text-white' : 'bg-gray-800 border-gray-600 text-gray-400'}`}>
                                    {microscope ? 'Microscope: ON 🔬' : 'Microscope: OFF 🔬'}
                                </button>

                                {method && (
                                    <div className="mt-2">
                                        <div className="flex justify-between text-[9px] font-mono mb-1">
                                            <span>PROGRESS</span>
                                            <span>{Math.round(progress * 100)}%</span>
                                        </div>
                                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 transition-all" style={{ width: `${progress * 100}%` }} />
                                        </div>
                                    </div>
                                )}

                                {progress === 1 && !isSuccess && (
                                    <div className="text-red-400 text-[9px] font-bold animate-pulse mt-1">Échec: Technique Inadaptée</div>
                                )}
                            </div>

                            <button onClick={() => { setMethod(null); setProgress(0); }} className="w-full py-1 bg-white/5 hover:bg-white/10 rounded text-[10px] transition-all mt-2">
                                RE-INITIALISER
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Microscope Overlay - Must be outside Portal */}
            {microscope && (
                <Html position={[2, 0, 0]} center>
                    <div className="bg-black rounded-full border-4 border-gray-500 w-48 h-48 overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
                        {/* Simulation de vue microscopique */}
                        {(challengeTarget || mixture) === 'mud' && (
                            <div className="w-full h-full bg-[#5D4037]/20 flex flex-wrap content-center justify-center p-4 gap-1">
                                {Array.from({ length: 20 }).map((_, i) => <div key={i} className="w-2 h-2 bg-[#5D4037] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}></div>)}
                            </div>
                        )}
                        {(challengeTarget || mixture) === 'salt_water' && (
                            <div className="w-full h-full bg-[#93C5FD]/20 flex flex-wrap content-center justify-center p-4">
                                <div className="text-xs text-center text-white font-bold opacity-50">Ions Na+ Cl- dissous (invisibles à l'oeil)</div>
                            </div>
                        )}
                        {(challengeTarget || mixture) === 'oil_water' && (
                            <div className="w-full h-full bg-[#FEF3C7]/20 flex items-center justify-center">
                                <div className="w-16 h-16 bg-yellow-400/50 rounded-full blur-md animate-pulse"></div>
                                <div className="w-8 h-8 bg-yellow-400/50 rounded-full blur-sm absolute top-10 left-10"></div>
                            </div>
                        )}
                        <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-gray-400 font-mono">x100 Zoom</div>
                    </div>
                    <div className="w-1 h-12 bg-gray-500 mx-auto"></div>
                </Html>
            )}

            <ConfettiExplosion active={showSuccess} />

            <group>
                <group position={[0, -1, 0]}>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[1, 1, 2.5, 32, 1, true]} />
                        <meshPhysicalMaterial color="#A5F3FC" transmission={0.9} opacity={0.3} transparent side={THREE.DoubleSide} />
                    </mesh>

                    {(!method || method === 'decantation' || method === 'evaporation') && (
                        <group position={[0, -0.5, 0]}>
                            <mesh scale={[0.95, isSuccess && method === 'evaporation' ? 1 - progress : 1, 0.95]}>
                                <cylinderGeometry args={[1, 1, 1.4, 32]} />
                                <meshStandardMaterial color={mix ? mix.color : '#FFF'} transparent opacity={0.8} />
                            </mesh>

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

                            {(challengeTarget === 'oil_water' || mixture === 'oil_water') && isSuccess && method === 'decantation' && (
                                <mesh position={[0, 0.5, 0]}>
                                    <cylinderGeometry args={[0.95, 0.95, 0.5, 32]} />
                                    <meshStandardMaterial color="#FBBF24" transparent opacity={0.8} />
                                </mesh>
                            )}

                            {(challengeTarget === 'salt_water' || mixture === 'salt_water') && isSuccess && method === 'evaporation' && progress > 0.8 && (
                                <mesh position={[0, -0.7, 0]}>
                                    <cylinderGeometry args={[0.9, 0.9, 0.1, 32]} />
                                    <meshStandardMaterial color="white" roughness={0.8} />
                                </mesh>
                            )}
                        </group>
                    )}

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
        </>
    );
}

// ============================================================
// CHAPITRE 10: LES ATOMES (IMMERSIVE & MISSION)
// ============================================================
export function AtomBuilderSim() {
    const [phase, setPhase] = useState('explore');
    const [protons, setProtons] = useState(1);
    const [neutrons, setNeutrons] = useState(0);
    const [electrons, setElectrons] = useState(1);
    const [mission, setMission] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    // Gamification
    const [score, setScore] = useState(0);
    const [collection, setCollection] = useState([]);
    const [timeLeft, setTimeLeft] = useState(60);

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
        const targets = [
            { id: 1, p: 1, n: 0, e: 1, name: "Hydrogène-1", points: 50 },
            { id: 2, p: 2, n: 2, e: 2, name: "Hélium-4", points: 100 },
            { id: 3, p: 6, n: 6, e: 6, name: "Carbone-12", points: 200 }
        ];
        const t = targets[Math.floor(Math.random() * targets.length)];
        setMission(t);
        setPhase('mission');
        setProtons(1); setNeutrons(0); setElectrons(1);
        setShowSuccess(false);
        setTimeLeft(60);
    };

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (protons === mission.p && neutrons === mission.n && electrons === mission.e) {
                const bonus = Math.floor(timeLeft / 2);
                setScore(s => s + mission.points + bonus);
                setShowSuccess(true);
                if (!collection.includes(element.symbol)) {
                    setCollection(prev => [...prev, element.symbol]);
                }
            }
        }
    }, [protons, neutrons, electrons, mission, phase]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    return (
        <>
            <SuccessOverlay
                show={showSuccess}
                message={`Fantastique ! Atome de ${mission?.name} stabilisé.`}
                points={mission?.points + Math.floor(timeLeft / 2)}
                onNext={startMission}
            />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="⚛️ Architecte de l'Atome" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-pink-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={60} />}
                    </div>

                    <XPBar current={score} nextLevel={2000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startMission(); }} />

                    {phase === 'mission' && mission && (
                        <MissionObjective objective={`Construis cet isotope : ${mission.name}`} icon="⚛️" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-2 rounded-xl border border-white/5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-center bg-gray-900 rounded-lg p-2 min-w-[50px]">
                                        <div className="text-[10px] text-gray-500">Z</div>
                                        <div className="font-bold text-pink-400">{protons}</div>
                                    </div>
                                    <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded font-black text-xl shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                        {element.symbol}
                                    </div>
                                    <div className="text-center bg-gray-900 rounded-lg p-2 min-w-[50px]">
                                        <div className="text-[10px] text-gray-500">A</div>
                                        <div className="font-bold text-pink-400">{massNumber}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="space-y-1">
                                    <label className="flex justify-between text-[10px] text-red-400 font-bold">
                                        <span>PROTONS (+)</span>
                                        <span>{protons}</span>
                                    </label>
                                    <input type="range" min="1" max="6" value={protons} onChange={e => setProtons(Number(e.target.value))} className="w-full h-1 bg-gray-700 accent-red-500 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <div className="space-y-1">
                                    <label className="flex justify-between text-[10px] text-gray-400 font-bold">
                                        <span>NEUTRONS (0)</span>
                                        <span>{neutrons}</span>
                                    </label>
                                    <input type="range" min="0" max="8" value={neutrons} onChange={e => setNeutrons(Number(e.target.value))} className="w-full h-1 bg-gray-700 accent-gray-500 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <div className="space-y-1">
                                    <label className="flex justify-between text-[10px] text-blue-400 font-bold">
                                        <span>ÉLECTRONS (-)</span>
                                        <span>{electrons}</span>
                                    </label>
                                    <input type="range" min="0" max="6" value={electrons} onChange={e => setElectrons(Number(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500 rounded-lg appearance-none cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-pink-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-gray-500 font-mono tracking-widest text-center uppercase">Telemetry</div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px]">
                                        <span>CHARGE</span>
                                        <span className={charge === 0 ? 'text-green-400' : 'text-red-400'}>{charge === 0 ? 'NEUTRE' : `${charge > 0 ? '+' : ''}${charge}`}</span>
                                    </div>
                                    <div className="flex justify-between text-[10px]">
                                        <span>STABILITÉ</span>
                                        <span className={isStable ? 'text-green-400' : 'text-red-500 animate-pulse'}>{isStable ? 'STABLE' : 'INSTABLE'}</span>
                                    </div>
                                </div>

                                <div className="border-t border-white/5 pt-2">
                                    <div className="text-[9px] text-gray-500 mb-1">COLLECTION</div>
                                    <div className="flex flex-wrap gap-1">
                                        {['H', 'He', 'Li', 'Be', 'B', 'C'].map(s => (
                                            <div key={s} className={`w-6 h-6 flex items-center justify-center rounded text-[9px] font-bold ${collection.includes(s) ? 'bg-pink-600 text-white' : 'bg-gray-800 text-gray-600'}`}>
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ConfettiExplosion active={success} />

            <group>
                <Text position={[0, 4, 0]} fontSize={0.5} color="#EC4899">STRUCTURE DE L'ATOME</Text>

                {/* Noyau */}
                <group position={[0, 0, 0]}>
                    <group>
                        {/* Visualisation : si instable, le noyau tremble */}
                        {/* Protons rouges */}
                        {Array.from({ length: protons }).map((_, i) => (
                            <Sphere key={`p-${i}`} args={[0.3]} position={[
                                Math.sin(i * 2 + (isStable ? 0 : Date.now() * 0.01)) * 0.35,
                                Math.cos(i * 3) * 0.35,
                                Math.sin(i * 4) * 0.35
                            ]}>
                                <meshStandardMaterial color="#EF4444" roughness={0.3} />
                            </Sphere>
                        ))}
                        {/* Neutrons gris */}
                        {Array.from({ length: neutrons }).map((_, i) => (
                            <Sphere key={`n-${i}`} args={[0.3]} position={[
                                Math.cos(i * 2) * 0.35,
                                Math.sin(i * 3 + (isStable ? 0 : Date.now() * 0.01)) * 0.35,
                                Math.cos(i * 5) * 0.35
                            ]}>
                                <meshStandardMaterial color="#9CA3AF" roughness={0.3} />
                            </Sphere>
                        ))}
                    </group>

                    {!isStable && (
                        <pointLight color="red" intensity={2} distance={2} animate={{ intensity: [1, 3] }} />
                    )}
                </group>

                {/* Électrons sur orbites */}
                <group rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                    {Array.from({ length: electrons }).map((_, i) => {
                        const shell = i < 2 ? 1 : 2;
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
        </>
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
// GAMIFICATION HELPERS (ADDED)
// ============================================================

// Local gamification helpers removed to use GamificationUtils.js central ones

export function MoleConceptPC4() {
    const [phase, setPhase] = useState('explore');
    const [element, setElement] = useState('C');
    const [moles, setMoles] = useState(1);
    const [targetMass, setTargetMass] = useState(null);
    const [showAnalogy, setShowAnalogy] = useState(false);

    // Gamification
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45);

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
        const keys = Object.keys(elements);
        const randEl = keys[Math.floor(Math.random() * keys.length)];
        setElement(randEl);
        const randMoles = (Math.floor(Math.random() * 40) + 1) / 10;
        setTargetMass((randMoles * elements[randEl].M).toFixed(1));
        setMoles(0);
        setPhase('mission');
        setShowSuccess(false);
        setTimeLeft(45);
    };

    const checkChallenge = () => {
        if (targetMass && Math.abs(mass - parseFloat(targetMass)) < 0.1) {
            if (!showSuccess) {
                const points = 50 + Math.floor(timeLeft / 2);
                setScore(s => s + points);
                setShowSuccess(true);
            }
        }
    };

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    return (
        <>
            <SuccessOverlay show={showSuccess} message={`Pesée parfaite ! ${mass.toFixed(1)}g de ${el.name}`} points={50 + Math.floor(timeLeft / 2)} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Laboratoire de la Mole" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-green-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                    </div>

                    <XPBar current={score} nextLevel={1500} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startChallenge(); }} />

                    {phase === 'mission' && targetMass && (
                        <MissionObjective objective={`Pèse exactement ${targetMass}g de ${el.name}`} icon="⚖️" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            {phase === 'explore' && (
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider">Échantillon</label>
                                    <div className="grid grid-cols-2 gap-1">
                                        {Object.entries(elements).map(([k, e]) => (
                                            <button key={k} onClick={() => setElement(k)}
                                                className={`p-1 text-[10px] font-bold rounded border transition-all ${element === k ? 'bg-green-600 border-green-400' : 'bg-gray-800 border-gray-700'}`}>
                                                {k}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider">Quantité (n)</label>
                                <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                                    <div className="text-2xl font-bold text-green-400 font-mono mb-2">{moles} <span className="text-xs text-gray-500">mol</span></div>
                                    <input type="range" min="0" max="5" step="0.1" value={moles} onChange={(e) => setMoles(Number(e.target.value))}
                                        className="w-full h-1 bg-gray-700 accent-green-500 rounded-lg appearance-none cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-green-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Balance Digitale</div>

                                <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 text-center">
                                    <div className="text-2xl font-black text-white font-mono">{mass.toFixed(1)}<span className="text-xs ml-1 text-gray-500">g</span></div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-[9px]">
                                        <span className="text-gray-500">MASSE MOLAIRE</span>
                                        <span className="font-bold text-gray-300">{el.M} g/mol</span>
                                    </div>
                                    <div className="flex justify-between text-[9px]">
                                        <span className="text-gray-500">PARTICULES</span>
                                        <span className="font-bold text-gray-300">{atoms}e23</span>
                                    </div>
                                </div>
                            </div>

                            <button onClick={phase === 'mission' ? checkChallenge : () => setShowAnalogy(!showAnalogy)}
                                className={`w-full py-2 rounded font-bold text-[10px] transition-all ${phase === 'mission' ? 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-500/20' : 'bg-gray-800 hover:bg-white hover:text-black'}`}>
                                {phase === 'mission' ? 'VALIDER LA PESÉE' : (showAnalogy ? 'CACHER ANALOGIE' : 'VOIR ANALOGIE 🧠')}
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ConfettiExplosion active={showSuccess} />

            <group>
                {showAnalogy && mode === 'explore' && (
                    <group position={[3, 1, 0]}>
                        <Text fontSize={0.3} color="white" maxWidth={3} textAlign="center" anchorX="left">
                            {`1 mole d'eau ($H_2O$)\n= 18 mL d'eau\n= 602 000 milliards de milliards de molécules !\n\nC'est autant de molécules qu'il y a de grains de sable\n dans tout le Sahara... x 1000 !`}
                        </Text>
                        <Box args={[3.2, 2, 0.1]} position={[1.5, -0.2, -0.1]}>
                            <meshBasicMaterial color="black" transparent opacity={0.6} />
                        </Box>
                    </group>
                )}

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
                        <Text position={[0, 0, 0]} fontSize={0.4} color={showSuccess ? "#4ADE80" : "red"}>
                            {mass.toFixed(1)} g
                        </Text>
                    </group>

                    {/* Tas de matière */}
                    <group position={[0, 0.5, 0]}>
                        {moles > 0 && (
                            <mesh scale={Math.pow(moles, 1 / 3) * (Math.max(1, el.M / 20))}>
                                {element === 'H2O' ? (
                                    <cylinderGeometry args={[0.5, 0.5, 0.5, 32]} />
                                ) : (
                                    <coneGeometry args={[0.6, 0.8, 32]} />
                                )}
                                <meshStandardMaterial color={el.color} roughness={0.9} transparent opacity={element === 'H2O' ? 0.6 : 1} />
                            </mesh>
                        )}
                        {element === 'H2O' && (
                            <mesh position={[0, 0.25 * Math.pow(moles, 1 / 3), 0]} scale={Math.pow(moles, 1 / 3)}>
                                <cylinderGeometry args={[0.6, 0.6, 0.6, 32, 1, true]} />
                                <meshPhysicalMaterial color="#A5F3FC" transmission={0.9} opacity={0.3} transparent side={THREE.DoubleSide} />
                            </mesh>
                        )}
                    </group>
                </group>
            </group>
        </>
    );
}


// ============================================================
// CHAPITRE 4: CONSERVATION DE LA MASSE (IMMERSIVE)
// ============================================================
export function MassConservation() {
    const [phase, setPhase] = useState('explore');
    const [step, setStep] = useState(0); // 0: Setup, 1: Reaction
    const [system, setSystem] = useState('open'); // open, closed
    const [gasParticles, setGasParticles] = useState(null);
    const [balanceValue, setBalanceValue] = useState(200);

    // Gamification
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const [experimentDone, setExperimentDone] = useState(false);

    useEffect(() => {
        const pts = new Float32Array(150 * 3);
        for (let i = 0; i < 150 * 3; i++) pts[i] = (Math.random() - 0.5) * 1.0;
        setGasParticles(pts);
    }, []);

    const startReaction = () => {
        if (!prediction) return;
        setExperimentDone(false);
        setStep(1);
        let target = system === 'open' ? 190 : 200;
        const duration = 3000;
        const start = 200;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newVal = start - (start - target) * progress;
            setBalanceValue(newVal);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setExperimentDone(true);
                const correct = (system === 'open' && prediction === 'less') || (system === 'closed' && prediction === 'same');
                if (correct) {
                    setShowSuccess(true);
                    setScore(s => s + 50);
                }
            }
        };
        animate();
    };

    const reset = () => {
        setStep(0);
        setBalanceValue(200);
        setPrediction(null);
        setExperimentDone(false);
        setShowSuccess(false);
    };

    return (
        <>
            <SuccessOverlay show={showSuccess} message={system === 'closed' ? "Masse conservée ! Bravo !" : "Masse perdue (gaz) ! Bien vu !"} points={50} onNext={reset} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Conservation de la Masse" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-red-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400">
                            STEP: {step === 0 ? 'PREDICTION' : 'ANALYSIS'}
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent my-4" />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-3 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest">Type de Système</label>
                                <div className="grid grid-cols-1 gap-2">
                                    <button onClick={() => !step && setSystem('open')} disabled={step === 1}
                                        className={`flex-1 py-1.5 rounded text-[10px] font-bold transition-all ${system === 'open' ? 'bg-red-600 border-red-400 border' : 'bg-gray-800 border-gray-700 border opacity-50'}`}>
                                        SYSTÈME OUVERT 🔓
                                    </button>
                                    <button onClick={() => !step && setSystem('closed')} disabled={step === 1}
                                        className={`flex-1 py-1.5 rounded text-[10px] font-bold transition-all ${system === 'closed' ? 'bg-green-600 border-green-400 border' : 'bg-gray-800 border-gray-700 border opacity-50'}`}>
                                        SYSTÈME CLOS 🔒
                                    </button>
                                </div>
                            </div>

                            {step === 0 && (
                                <div className="bg-gray-800/50 p-3 rounded-xl border border-white/5">
                                    <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest">Prédiction</label>
                                    <div className="grid grid-cols-1 gap-1">
                                        <button onClick={() => setPrediction('less')} className={`p-1.5 rounded text-[10px] border transition-all ${prediction === 'less' ? 'bg-orange-600 border-orange-400' : 'bg-gray-900 border-gray-700'}`}>
                                            LA MASSE VA BAISSER
                                        </button>
                                        <button onClick={() => setPrediction('same')} className={`p-1.5 rounded text-[10px] border transition-all ${prediction === 'same' ? 'bg-orange-600 border-orange-400' : 'bg-gray-900 border-gray-700'}`}>
                                            LA MASSE SERA stable
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-red-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Balance Digitale</div>

                                <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 text-center">
                                    <div className={`text-2xl font-black font-mono transition-colors ${step === 1 && system === 'open' ? 'text-red-400 animate-pulse' : 'text-green-400'}`}>
                                        {balanceValue.toFixed(1)}<span className="text-[10px] ml-1 opacity-50">g</span>
                                    </div>
                                </div>

                                <div className="text-[9px] text-gray-400 leading-tight">
                                    {step === 0 ? "Configurez et faites une prédiction." : (experimentDone ? (system === 'open' ? "Le gaz s'est échappé !" : "Le gaz est resté piégé.") : "Réaction en cours...")}
                                </div>
                            </div>

                            <button onClick={step === 0 ? startReaction : reset} disabled={step === 0 && !prediction}
                                className={`w-full py-2 rounded font-black text-[10px] tracking-widest shadow-lg transition-transform hover:scale-105 active:scale-95 ${step === 0 ? (prediction ? 'bg-white text-black' : 'bg-gray-800 text-gray-600 cursor-not-allowed') : 'bg-gray-200 text-black'}`}>
                                {step === 0 ? "LANCER RÉACTION" : "REINIT."}
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ConfettiExplosion active={showSuccess} />

            <group>
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
        </>
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
    const [phase, setPhase] = useState('explore');
    const [scenario, setScenario] = useState('plant');
    const [step, setStep] = useState(0);
    const [variable, setVariable] = useState(null);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const scenarios = {
        plant: {
            title: "🌱 Mystère de la Plante",
            obs: "Cette plante est toute fanée... Pourquoi ?",
            hypotheses: [
                { id: 'water', text: "Elle manque d'eau", correct: true },
                { id: 'music', text: "Elle n'aime pas ma musique", correct: false },
                { id: 'light', text: "Elle manque de lumière", correct: false }
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
        },
        mission: {
            title: "🕵️ Mission : La Lampe",
            obs: "La lampe de bureau ne s'allume plus ! À toi de trouver pourquoi.",
            hypotheses: [
                { id: 'bulb', text: "L'ampoule est grillée", correct: true },
                { id: 'plug', text: "La prise est débranchée", correct: false },
                { id: 'switch', text: "L'interrupteur est cassé", correct: false }
            ],
            exp: "Remplaçons l'élément pour vérifier...",
            conc: { true: "Gagné ! C'était bien l'ampoule.", false: "Même avec cet élément neuf, ça ne s'allume pas." }
        }
    };

    const sc = phase === 'mission' ? scenarios.mission : scenarios[scenario];

    const runExperiment = (hId) => {
        setVariable(hId);
        setStep(2);
        setTimeout(() => {
            const isCorrect = sc.hypotheses.find(h => h.id === hId).correct;
            setResult(isCorrect);
            setStep(3);
            if (isCorrect) {
                setScore(s => s + 50);
                setShowSuccess(true);
            }
        }, 3000);
    };

    const reset = () => {
        setStep(0);
        setVariable(null);
        setResult(null);
        setShowSuccess(false);
    };

    const handlePhaseChange = (p) => {
        setPhase(p);
        if (p === 'mission') setScenario('mission');
        else if (scenario === 'mission') setScenario('plant');
        reset();
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={sc.conc[true]} points={50} onNext={() => { if (phase === 'mission') handlePhaseChange('explore'); else reset(); }} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Démarche Scientifique" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-blue-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400 capitalize">
                            Phase: {phase} | Étape {step + 1}
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={handlePhaseChange} />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            {step === 0 && (
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-400 block uppercase tracking-widest">Enquête en cours</label>
                                    {phase === 'explore' ? (
                                        <>
                                            <button onClick={() => setScenario('plant')} className={`w-full p-2 rounded text-[10px] font-bold border transition-all ${scenario === 'plant' ? 'bg-green-600 border-green-400' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                                LA PLANTE 🌱
                                            </button>
                                            <button onClick={() => setScenario('pendulum')} className={`w-full p-2 rounded text-[10px] font-bold border transition-all ${scenario === 'pendulum' ? 'bg-purple-600 border-purple-400' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                                LE PENDULE ⏱️
                                            </button>
                                        </>
                                    ) : (
                                        <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl text-center">
                                            <span className="text-2xl">🕵️</span>
                                            <div className="text-[10px] font-bold mt-2 text-blue-300">MISSION SPÉCIALE</div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {step === 1 && (
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-400 block uppercase tracking-widest">Tes Hypothèses</label>
                                    {sc.hypotheses.map(h => (
                                        <button key={h.id} onClick={() => runExperiment(h.id)}
                                            className="w-full p-2 text-left text-[9px] bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 hover:border-blue-400 transition-all">
                                            🤔 {h.text}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-blue-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Carnet de Labo</div>

                                <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5">
                                    <div className="text-[10px] leading-relaxed text-blue-100 italic">
                                        {step === 0 ? sc.obs : (step === 1 ? "Choisis une hypothèse à tester par l'expérience." : (step === 2 ? sc.exp : "Interprète les résultats obtenus."))}
                                    </div>
                                </div>

                                {step === 3 && (
                                    <div className={`p-2 rounded text-[10px] font-bold text-center ${result ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'}`}>
                                        {result ? 'VALIDÉE ✅' : 'REJETÉE ❌'}
                                    </div>
                                )}
                            </div>

                            <button onClick={step === 0 ? () => setStep(1) : (step === 3 ? reset : null)}
                                disabled={step === 1 || step === 2}
                                className={`w-full py-2 rounded font-black text-[10px] tracking-widest transition-transform hover:scale-105 active:scale-95 ${step === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : (step === 3 ? 'bg-white text-black' : 'bg-gray-800 text-gray-500')}`}>
                                {step === 0 ? 'SUIVANT' : (step === 3 ? 'RECOMMENCER' : 'EXPÉRIENCE...')}
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group position={[0, -1, 0]}>
                {scenario === 'plant' && <PlantSim state={step === 0 ? 'dead' : (step === 2 ? 'growing' : (result ? 'alive' : 'dead_dry'))} />}
                {scenario === 'pendulum' && <PendulumSim moving={step === 2} length={variable === 'length' ? 1 : 2} mass={variable === 'mass' ? 2 : 1} />}
                {scenario === 'mission' && (
                    <group>
                        <mesh position={[0, 1, 0]}>
                            <cylinderGeometry args={[0.5, 0.5, 1]} />
                            <meshStandardMaterial color={step === 3 && result ? "#FFEB3B" : "#333"} emissive={step === 3 && result ? "#FFEB3B" : "black"} emissiveIntensity={1} />
                        </mesh>
                        <mesh position={[0, 0, 0]}>
                            <boxGeometry args={[1, 0.2, 1]} />
                            <meshStandardMaterial color="gray" />
                        </mesh>
                        {step === 2 && <Text position={[0, 2, 0]} fontSize={0.2} color="white">🔧 En cours de réparation...</Text>}
                    </group>
                )}
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
    const [phase, setPhase] = useState('explore'); // explore, challenge
    const [subMode, setSubMode] = useState('sinkfloat'); // sinkfloat, tower
    const [objectsInWater, setObjectsInWater] = useState([]);
    const [mysteryObj, setMysteryObj] = useState(null);
    const [success, setSuccess] = useState(null);

    // Gamification
    const [score, setScore] = useState(0);
    const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

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
        setObjectsInWater(prev => [...prev.filter(o => o.id !== obj.id), { ...obj, key: Math.random() }]);
    };

    const startChallenge = () => {
        const secret = items[Math.floor(Math.random() * items.length)];
        setMysteryObj({ ...secret, originalId: secret.id, id: 'mystery', name: 'Mystère❓', color: '#607D8B' });
        setPhase('mission');
        setObjectsInWater([]);
        setSuccess(null);
        setShowSuccessOverlay(false);
    };

    const verifyGuess = (guessId) => {
        if (!mysteryObj) return;
        if (guessId === mysteryObj.originalId) {
            setSuccess(true);
            const points = 50;
            setScore(s => s + points);
            setShowSuccessOverlay(true);
        } else {
            setSuccess(false);
        }
    };

    return (
        <>
            <SuccessOverlay show={showSuccessOverlay} message={`Excellent ! C'était bien du ${mysteryObj?.originalId ? items.find(i => i.id === mysteryObj.originalId).name : '...'} !`} points={50} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccessOverlay} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🌊 Labo de Densité" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-cyan-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400 uppercase">
                            {phase === 'mission' ? 'MISSION EN COURS' : 'MODE LIBRE'}
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startChallenge(); }} />

                    {phase === 'mission' && mysteryObj && (
                        <MissionObjective objective="Analyse le comportement de l'objet mystère et identifie son matériau." icon="🔍" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-2 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest text-center">Environnement</label>
                                <div className="grid grid-cols-1 gap-1">
                                    <button onClick={() => { setSubMode('sinkfloat'); setObjectsInWater([]); }}
                                        className={`py-1.5 rounded text-[10px] font-bold border transition-all ${subMode === 'sinkfloat' ? 'bg-cyan-600 border-cyan-400' : 'bg-gray-900 border-gray-700 opacity-50'}`}>
                                        AQUARIUM D'EAU 💧
                                    </button>
                                    <button onClick={() => { setSubMode('tower'); setObjectsInWater([]); }}
                                        className={`py-1.5 rounded text-[10px] font-bold border transition-all ${subMode === 'tower' ? 'bg-orange-600 border-orange-400' : 'bg-gray-900 border-gray-700 opacity-50'}`}>
                                        TOUR DE LIQUIDES 🥪
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] text-gray-500 block mb-1 uppercase tracking-widest text-center">Objets</label>
                                <div className="grid grid-cols-2 gap-1">
                                    {phase === 'mission' ? (
                                        <button onClick={() => dropObject(mysteryObj)} className="col-span-2 py-3 bg-white text-black rounded-lg font-black text-[12px] shadow-lg shadow-white/10 hover:scale-105 active:scale-95 transition-all">
                                            LÂCHER L'OBJET MYSTÈRE 👇
                                        </button>
                                    ) : (
                                        items.map(item => (
                                            <button key={item.id} onClick={() => dropObject(item)}
                                                className="p-1 px-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 text-[9px] font-bold text-left flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                                {item.name}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-cyan-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Analyse Materiaux</div>

                                {phase === 'mission' ? (
                                    <div className="grid grid-cols-2 gap-1">
                                        {items.map(item => (
                                            <button key={item.id} onClick={() => verifyGuess(item.id)}
                                                className={`p-1.5 rounded text-[9px] font-bold border transition-all ${success === false ? 'animate-shake' : ''} bg-gray-900 border-gray-700 hover:border-cyan-400`}>
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 text-[9px] text-gray-400 leading-tight">
                                        {subMode === 'sinkfloat' ? "Dans l'eau (d=1), les objets plus denses coulent, les moins denses flottent." : "Découvre comment les objets se stabilisent entre différentes couches de liquides."}
                                    </div>
                                )}

                                {success === false && <div className="text-[9px] text-red-400 font-bold text-center animate-pulse">ESSAYE ENCORE !</div>}
                            </div>

                            <button onClick={() => setObjectsInWater([])} className="w-full py-2 rounded bg-gray-800 text-[10px] font-bold hover:bg-white hover:text-black transition-all">
                                VIDER L'AQUARIUM
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <ConfettiExplosion active={showSuccessOverlay} />

            <group>

                {/* Aquarium */}
                <group position={[0, -1.5, 0]}>
                    <mesh position={[0, 1.5, 0]}>
                        <boxGeometry args={[3.2, 3.2, 2.2]} />
                        <meshPhysicalMaterial color="#E0F7FA" transmission={0.9} opacity={0.3} transparent side={THREE.DoubleSide} thickness={0.5} roughness={0} />
                    </mesh>

                    {subMode === 'sinkfloat' || phase === 'mission' ? (
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
                        <FloatingObject key={obj.key} obj={obj} mode={phase === 'mission' ? 'sinkfloat' : subMode} liquids={liquids} />
                    ))}
                </group>
            </group>
        </>
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
    const [phase, setPhase] = useState('explore');
    const [toolType, setToolType] = useState('ruler'); // ruler, balance
    const [target, setTarget] = useState(5.0);
    const [userValue, setUserValue] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const checkMeasurement = () => {
        const diff = Math.abs(userValue - target);
        const tolerance = toolType === 'ruler' ? 0.2 : 0.5;
        const result = diff < (tolerance / 2) ? 'perfect' : (diff < tolerance ? 'good' : 'bad');
        setFeedback(result);

        if (result === 'perfect' || result === 'good') {
            const pts = result === 'perfect' ? 50 : 20;
            if (!showSuccess) {
                setScore(s => s + pts);
                setShowSuccess(true);
            }
        }
    };

    const startNext = () => {
        if (phase === 'mission') {
            const nextTool = Math.random() > 0.5 ? 'ruler' : 'balance';
            setToolType(nextTool);
            setTarget(nextTool === 'ruler' ? (Math.random() * 4 + 3).toFixed(1) : (Math.random() * 150 + 50).toFixed(0));
        } else {
            setTarget(toolType === 'ruler' ? (Math.random() * 4 + 3).toFixed(1) : (Math.random() * 150 + 50).toFixed(0));
        }
        setUserValue(toolType === 'ruler' ? 3 : 0);
        setFeedback(null);
        setShowSuccess(false);
    };

    const handlePhaseChange = (p) => {
        setPhase(p);
        startNext();
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={feedback === 'perfect' ? "Précision Chirurgicale ! 🎯" : "Mesure validée ! 👍"} points={feedback === 'perfect' ? 50 : 20} onNext={startNext} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="📏 Atelier de Métrologie" showCloseButton={false} defaultPosition="bottom-center" className="w-[450px] border-yellow-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400 font-mono tracking-tighter">
                            LAB_STATION_PC4_02
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={2000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={handlePhaseChange} />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-2 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest text-center">Choix de l'Outil</label>
                                <div className="grid grid-cols-2 gap-1">
                                    <button onClick={() => { setToolType('ruler'); startNext(); }} disabled={phase === 'mission'}
                                        className={`py-1.5 rounded text-[10px] font-bold border transition-all ${toolType === 'ruler' ? 'bg-yellow-600 border-yellow-400' : 'bg-gray-900 border-gray-700 opacity-50'}`}>
                                        RÈGLE 📏
                                    </button>
                                    <button onClick={() => { setToolType('balance'); startNext(); }} disabled={phase === 'mission'}
                                        className={`py-1.5 rounded text-[10px] font-bold border transition-all ${toolType === 'balance' ? 'bg-yellow-600 border-yellow-400' : 'bg-gray-900 border-gray-700 opacity-50'}`}>
                                        BALANCE ⚖️
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest text-center">Valeur Mesurée</label>
                                <div className="text-3xl font-black text-yellow-400 font-mono text-center mb-2">
                                    {toolType === 'ruler' ? parseFloat(userValue).toFixed(1) : userValue}
                                    <span className="text-xs ml-1 text-gray-500">{toolType === 'ruler' ? 'cm' : 'g'}</span>
                                </div>
                                <input type="range"
                                    min={toolType === 'ruler' ? 3 : 0}
                                    max={toolType === 'ruler' ? 7 : 200}
                                    step={toolType === 'ruler' ? 0.1 : 1}
                                    value={userValue}
                                    onChange={(e) => { setUserValue(parseFloat(e.target.value)); setFeedback(null); setShowSuccess(false); }}
                                    className="w-full h-1 bg-gray-700 accent-yellow-500 rounded-lg appearance-none cursor-pointer" />
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-yellow-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-400 tracking-widest uppercase">Objectif</div>

                                {phase === 'mission' ? (
                                    <div className="p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg text-center animate-pulse">
                                        <div className="text-[10px] text-yellow-200 font-bold">CIBLE À ATTEINDRE</div>
                                        <div className="text-2xl font-black text-white">{target} {toolType === 'ruler' ? 'cm' : 'g'}</div>
                                    </div>
                                ) : (
                                    <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 text-[9px] text-gray-400 leading-tight italic">
                                        Entraîne-toi à utiliser les différents instruments de mesure avec précision.
                                    </div>
                                )}

                                {feedback === 'bad' && (
                                    <div className="p-2 bg-red-900/40 text-red-400 text-[9px] font-bold text-center animate-shake rounded">
                                        INCORRECT ({toolType === 'ruler' ? '±0.2cm' : '±0.5g'})
                                    </div>
                                )}
                            </div>

                            <button onClick={checkMeasurement} disabled={showSuccess}
                                className={`w-full py-3 rounded-xl font-black text-[10px] tracking-widest transition-all ${showSuccess ? 'bg-gray-800 text-gray-500' : 'bg-yellow-600 text-black shadow-lg shadow-yellow-500/30'}`}>
                                VALIDER LA MESURE
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group position={[0, -1, 0]}>
                {toolType === 'ruler' ? (
                    <group>
                        <mesh position={[0, 0, -0.1]}>
                            <boxGeometry args={[10, 1, 0.1]} />
                            <meshStandardMaterial color="#FFCA28" />
                        </mesh>
                        {Array.from({ length: 11 }).map((_, i) => (
                            <mesh key={i} position={[i - 5, 0.2, 0]}>
                                <boxGeometry args={[0.05, 0.5, 0.15]} />
                                <meshStandardMaterial color="black" />
                            </mesh>
                        ))}
                        <mesh position={[(target / 2) - 5, -0.2, 0.1]}>
                            <boxGeometry args={[target, 0.5, 0.1]} />
                            <meshStandardMaterial color="#66BB6A" />
                        </mesh>
                        <mesh position={[userValue - 5, 0.5, 0.2]}>
                            <coneGeometry args={[0.2, 0.5, 16]} rotation={[Math.PI, 0, 0]} />
                            <meshStandardMaterial color="red" />
                        </mesh>
                    </group>
                ) : (
                    <group scale={[1.5, 1.5, 1.5]}>
                        <Box args={[2, 0.2, 1.5]} material-color="#333" />
                        <Box args={[1.8, 0.1, 1.3]} position={[0, 0.1, 0]} material-color="#111" />
                        <mesh position={[0, 0.2 + (userValue / 200), 0]} scale={[1, 1, 1]}>
                            <sphereGeometry args={[0.4 + (target / 300)]} />
                            <meshStandardMaterial color="#64B5F6" />
                        </mesh>
                        <Text position={[0, -0.5, 0.8]} fontSize={0.2} color="red">{userValue} g</Text>
                    </group>
                )}
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
    const [phase, setPhase] = useState('explore');
    const [angle, setAngle] = useState(45);
    const [material, setMaterial] = useState('water');
    const [targetX, setTargetX] = useState(1.5);
    const [hit, setHit] = useState(false);

    // Gamification
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const materials = {
        water: { n: 1.33, name: 'Eau', color: '#4FC3F7' },
        glass: { n: 1.5, name: 'Verre', color: '#EEEEEE' },
        diamond: { n: 2.42, name: 'Diamant', color: '#E1F5FE' }
    };

    const n1 = 1.0; // Air
    const n2 = materials[material].n;

    const rad = (deg) => deg * Math.PI / 180;
    const angleRad = rad(angle);
    const rRad = Math.asin((n1 / n2) * Math.sin(angleRad));
    const rDeg = rRad * 180 / Math.PI;

    const hitX = Math.tan(rRad) * 2;

    const startChallenge = () => {
        setPhase('mission');
        setTargetX((Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1));
        setHit(false);
        setShowSuccess(false);
    };

    useEffect(() => {
        if (phase === 'mission') {
            if (Math.abs(hitX - targetX) < 0.2) {
                if (!hit) {
                    setHit(true);
                    setScore(s => s + 50);
                    setShowSuccess(true);
                }
            } else {
                setHit(false);
            }
        }
    }, [hitX, targetX, phase, hit]);

    return (
        <>
            <SuccessOverlay show={showSuccess} message="Cible touchée ! Magnifique précision !" points={50} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🔦 Optique de Réfraction" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-red-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400">
                            OPTIQUE LAB
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startChallenge(); }} />

                    {phase === 'mission' && !hit && (
                        <MissionObjective objective="Ajuste l'angle d'incidence pour toucher la cible au fond de la cuve." icon="🎯" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-900/50 p-2 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-400 block mb-2 uppercase tracking-widest text-center">Milieu de Réfraction</label>
                                <div className="grid grid-cols-1 gap-1">
                                    {Object.entries(materials).map(([k, m]) => (
                                        <button key={k} onClick={() => setMaterial(k)}
                                            className={`py-1.5 rounded text-[10px] font-bold border transition-all ${material === k ? 'bg-red-600 border-red-400' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                            {m.name.toUpperCase()} (n={m.n})
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest text-center">Angle d'Incidence (i)</label>
                                <div className="text-2xl font-black text-red-400 font-mono text-center mb-2">{Math.abs(angle)}°</div>
                                <input type="range" min="-80" max="80" step="1" value={angle} onChange={(e) => setAngle(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-gray-700 accent-red-500 rounded-lg appearance-none cursor-pointer" />
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-red-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Données Physiques</div>

                                <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 space-y-2">
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500">INDICE n1</span>
                                        <span className="text-white font-bold">1.00 (Air)</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500">INDICE n2</span>
                                        <span className="text-white font-bold">{n2.toFixed(2)}</span>
                                    </div>
                                    <div className="h-[1px] bg-white/5" />
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-red-400 font-bold">ANGLE R</span>
                                        <span className="text-lg font-black text-white font-mono">{rDeg.toFixed(1)}°</span>
                                    </div>
                                </div>

                                <div className="text-[9px] text-gray-400 italic text-center p-1">
                                    Loi de Snell-Descartes:<br />
                                    n₁ × sin(i) = n₂ × sin(r)
                                </div>
                            </div>

                            <button onClick={() => setAngle(0)} className="w-full py-2 rounded bg-gray-800 text-[10px] font-bold hover:bg-white hover:text-black transition-all">
                                RÉALIGNER OPTIQUE
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group>

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
                {phase === 'mission' && (
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
        </>
    );
}


// ============================================================
// CIRCUITS SÉRIE / PARALLÈLE (IMMERSIVE)
// ============================================================
export function CircuitSeriesParallel() {
    const [phase, setPhase] = useState('explore');
    const [mode, setMode] = useState('series');
    const [bulbs, setBulbs] = useState([true, true]);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [missionTarget, setMissionTarget] = useState(null);

    const toggleBulb = (index) => {
        const newBulbs = [...bulbs];
        newBulbs[index] = !newBulbs[index];
        setBulbs(newBulbs);
    };

    const isLit = (index) => {
        if (!bulbs[index]) return false;
        if (mode === 'series') return bulbs.every(b => b);
        return true;
    };

    const startMission = () => {
        setPhase('mission');
        const randMode = Math.random() > 0.5 ? 'series' : 'parallel';
        setMode(randMode);
        setBulbs([Math.random() > 0.5, Math.random() > 0.5]);
        setMissionTarget(Math.random() > 0.5 ? 'all_on' : 'all_off');
        setShowSuccess(false);
    };

    useEffect(() => {
        if (phase === 'mission') {
            const allLit = bulbs.every((_, i) => isLit(i));
            const allOff = bulbs.every((_, i) => !isLit(i));

            if (missionTarget === 'all_on' && allLit) {
                setScore(s => s + 50);
                setShowSuccess(true);
            } else if (missionTarget === 'all_off' && allOff) {
                setScore(s => s + 50);
                setShowSuccess(true);
            }
        }
    }, [bulbs, mode, phase, missionTarget]);

    return (
        <group>
            <SuccessOverlay show={showSuccess} message="Circuit configuré avec succès ! Tu es un expert en électricité." points={50} onNext={startMission} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Circuits Électriques" showCloseButton={false} defaultPosition="bottom-center" className="w-[420px] border-yellow-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400">
                            LAB D'ÉLECTROTECHNIQUE
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={2000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startMission(); }} />

                    {phase === 'mission' && missionTarget && (
                        <MissionObjective
                            objective={missionTarget === 'all_on' ? "Trouve la configuration pour allumer TOUTES les lampes." : "Configure le circuit pour éteindre TOUTES les lampes."}
                            icon="💡"
                        />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/10 p-2 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest text-center">Type de Circuit</label>
                                <div className="grid grid-cols-1 gap-1">
                                    <button onClick={() => setMode('series')}
                                        className={`py-2 rounded text-[10px] font-bold border transition-all ${mode === 'series' ? 'bg-yellow-600 border-yellow-400 text-black' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                        SÉRIE 🔗
                                    </button>
                                    <button onClick={() => setMode('parallel')}
                                        className={`py-2 rounded text-[10px] font-bold border transition-all ${mode === 'parallel' ? 'bg-yellow-600 border-yellow-400 text-black' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                        PARALLÈLE 🪜
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-yellow-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">État du Réseau</div>
                                <div className="space-y-2">
                                    {[0, 1].map(i => (
                                        <div key={i} className="flex items-center justify-between bg-gray-900/50 p-2 rounded border border-white/5">
                                            <span className="text-[9px] text-gray-400">LAMPE {i + 1}</span>
                                            <div className="flex gap-2 items-center">
                                                <div className={`w-2 h-2 rounded-full ${bulbs[i] ? 'bg-green-500' : 'bg-red-500'}`} />
                                                <div className={`w-3 h-3 rounded-full ${isLit(i) ? 'bg-yellow-400 shadow-[0_0_10px_#facc15]' : 'bg-gray-800'}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button onClick={() => setBulbs([true, true])} className="w-full py-2 bg-gray-800 text-[9px] font-bold hover:bg-white hover:text-black transition-all rounded-lg uppercase">
                                RÉTABLIR TOUT
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group>
                <mesh position={[-3, 0, 0]}>
                    <boxGeometry args={[1, 1.5, 1]} />
                    <meshStandardMaterial color="#333" />
                    <Text position={[0, 0, 0.6]} fontSize={0.5} color="white">⚡</Text>
                </mesh>

                {mode === 'series' ? (
                    <group>
                        <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 6]} /><meshStandardMaterial color="orange" /></mesh>
                        <mesh position={[0, -1.5, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 6]} /><meshStandardMaterial color="orange" /></mesh>
                        <mesh position={[3, 0, 0]}><cylinderGeometry args={[0.05, 0.05, 3]} /><meshStandardMaterial color="orange" /></mesh>
                        <InteractiveBulb position={[-1, 1.5, 0]} lit={isLit(0)} working={bulbs[0]} onClick={() => toggleBulb(0)} />
                        <InteractiveBulb position={[1, 1.5, 0]} lit={isLit(1)} working={bulbs[1]} onClick={() => toggleBulb(1)} />
                    </group>
                ) : (
                    <group>
                        <mesh position={[-1, 2, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 4]} /><meshStandardMaterial color="orange" /></mesh>
                        <mesh position={[-1, -2, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.05, 0.05, 4]} /><meshStandardMaterial color="orange" /></mesh>
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
    const [phase, setPhase] = useState('explore');
    const [screens, setScreens] = useState([0, 0, 0.5]);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const moveScreen = (i, dir) => {
        setScreens(prev => {
            const next = [...prev];
            next[i] = Math.max(-1, Math.min(1, next[i] + dir * 0.1));
            return next;
        });
    };

    const aligned = screens.every(y => Math.abs(y) < 0.1);

    useEffect(() => {
        if (aligned && !showSuccess && phase === 'mission') {
            setScore(s => s + 50);
            setShowSuccess(true);
        }
    }, [aligned, showSuccess, phase]);

    const startMission = () => {
        setPhase('mission');
        setScreens([
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
        ]);
        setShowSuccess(false);
    };

    return (
        <>
            <SuccessOverlay show={showSuccess} message="Faisceau aligné ! La lumière voyage bien en ligne droite." points={50} onNext={startMission} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🔦 Propagation Rectiligne" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-white/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400">
                            OPTIQUE GÉOMÉTRIQUE
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startMission(); }} />

                    {phase === 'mission' && !aligned && (
                        <MissionObjective objective="Aligne tous les écrans pour que le laser traverse les ouvertures." icon="🔦" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-3 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-3 uppercase tracking-widest text-center">Contrôle des Écrans</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {[0, 1, 2].map(i => (
                                        <div key={i} className="flex flex-col items-center gap-1">
                                            <button onClick={() => moveScreen(i, 1)} className="w-full py-1 bg-gray-700 hover:bg-gray-600 rounded text-[10px]">▲</button>
                                            <div className="text-[9px] font-bold text-gray-400">E{i + 1}</div>
                                            <button onClick={() => moveScreen(i, -1)} className="w-full py-1 bg-gray-700 hover:bg-gray-600 rounded text-[10px]">▼</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-white/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Statut Optique</div>

                                <div className="space-y-1.5">
                                    {[0, 1, 2].map(i => (
                                        <div key={i} className="flex items-center justify-between bg-gray-900/50 p-1.5 rounded border border-white/5">
                                            <span className="text-[9px] text-gray-500 uppercase">Écran {i + 1}</span>
                                            <div className={`w-2 h-2 rounded-full ${Math.abs(screens[i]) < 0.1 ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]' : 'bg-red-500'}`} />
                                        </div>
                                    ))}
                                </div>

                                <div className="text-[9px] text-center text-gray-500 leading-tight">
                                    {aligned ? "ALIGNEMENT PARFAIT ✅" : "DÉCALAGE DÉTECTÉ ❌"}
                                </div>
                            </div>

                            <button onClick={startMission} className="w-full py-2 rounded bg-gray-800 text-[10px] font-bold hover:bg-white hover:text-black transition-all">
                                RÉINITIALISER
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group>

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
        </>
    );
}



// ============================================================
// OMBRES ET PÉNOMBRE (IMMERSIVE)
// ============================================================
export function ShadowsSimulator() {
    const [phase, setPhase] = useState('explore');
    const [sourceType, setSourceType] = useState('point');
    const [objZ, setObjZ] = useState(-2);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [targetRadius, setTargetRadius] = useState(1.5);

    // Geometry Constants
    const sourceZ = -4;
    const screenZ = 2;
    const objRadius = 0.5;

    // Thales calculations
    const d1 = Math.abs(objZ - sourceZ);
    const dTotal = Math.abs(screenZ - sourceZ);
    const d2 = Math.abs(screenZ - objZ);

    const k = dTotal / d1;
    const shadowRadius = objRadius * k;

    const sourceRadius = sourceType === 'point' ? 0.05 : 0.8;
    const penumbraRadius = shadowRadius + (sourceType === 'extended' ? (d2 * 0.5) : 0);
    const umbraRadius = sourceType === 'extended' ? Math.max(0, shadowRadius - (d2 * 0.3)) : shadowRadius;

    const startMission = () => {
        setPhase('mission');
        setTargetRadius(parseFloat((Math.random() * 2 + 1).toFixed(1)));
        setShowSuccess(false);
    };

    useEffect(() => {
        if (phase === 'mission') {
            const currentSize = sourceType === 'point' ? shadowRadius : umbraRadius;
            if (Math.abs(currentSize - targetRadius) < 0.1) {
                if (!showSuccess) {
                    setScore(s => s + 50);
                    setShowSuccess(true);
                }
            }
        }
    }, [objZ, sourceType, phase, targetRadius]);

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Taille cible atteinte ! L'ombre mesure exactement ${targetRadius} unités.`} points={50} onNext={startMission} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🌑 Ombres et Pénombre" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-gray-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400">
                            STATION D'OPTIQUE GEOM.
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startMission(); }} />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            {phase === 'mission' && (
                                <MissionObjective objective={`Ajuste la position pour que l'ombre portée (zone d'ombre) mesure ${targetRadius} unités.`} icon="🎯" />
                            )}

                            <div className="bg-gray-800/10 p-2 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-400 block mb-2 uppercase tracking-widest text-center">Type de Source</label>
                                <div className="grid grid-cols-1 gap-1">
                                    <button onClick={() => setSourceType('point')}
                                        className={`py-1.5 rounded text-[10px] font-bold border transition-all ${sourceType === 'point' ? 'bg-yellow-600 border-yellow-400 text-black' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                        PONCTUELLE ⚪
                                    </button>
                                    <button onClick={() => setSourceType('extended')}
                                        className={`py-1.5 rounded text-[10px] font-bold border transition-all ${sourceType === 'extended' ? 'bg-orange-600 border-orange-400 text-black' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                        ÉTENDUE ☀️
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                                <label className="text-[10px] text-gray-500 block mb-2 uppercase tracking-widest text-center">Distance Objet-Source</label>
                                <input type="range" min="-3" max="0" step="0.1" value={objZ} onChange={(e) => setObjZ(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-gray-700 accent-white rounded-lg appearance-none cursor-pointer" />
                                <div className="flex justify-between text-[8px] text-gray-500 mt-1 uppercase tracking-tighter">
                                    <span>Près Source</span>
                                    <span>Près Écran</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-gray-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Mesures Écran</div>
                                <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 space-y-2 text-center">
                                    <div className="text-[9px] text-gray-500 uppercase">Ombre Portée (R)</div>
                                    <div className="text-2xl font-black text-white font-mono">{umbraRadius.toFixed(2)}</div>
                                    {sourceType === 'extended' && (
                                        <div className="mt-2">
                                            <div className="text-[8px] text-gray-600 uppercase">Pénombre (R)</div>
                                            <div className="text-sm font-bold text-gray-400">{penumbraRadius.toFixed(2)}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button onClick={() => { setObjZ(-2); setSourceType('point'); setPhase('explore'); }} className="w-full py-2 bg-gray-800 text-[10px] font-bold hover:bg-white hover:text-black transition-all rounded-lg uppercase">
                                Réinitialiser
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group position={[0, 0, (screenZ + sourceZ) / 2]}>
                <mesh>
                    <cylinderGeometry args={[0.01, umbraRadius, screenZ - sourceZ]} />
                    <meshBasicMaterial color="yellow" transparent opacity={0.05} />
                </mesh>
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
    const [score, setScore] = useState(0);
    const [discovered, setDiscovered] = useState(new Set());

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

        if (!discovered.has(obj.id)) {
            const newDiscovered = new Set(discovered);
            newDiscovered.add(obj.id);
            setDiscovered(newDiscovered);
            setScore(s => s + 25);
        }
    };

    return (
        <group>
            <Html transform={false}>
                <DraggableHtmlPanel title="☀️ Sources de Lumière" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-yellow-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400">
                            TYPES DE SOURCES
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={100} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent my-4" />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-3 rounded-xl border border-white/5 space-y-3">
                                <label className="text-[10px] text-gray-500 block uppercase tracking-widest text-center">État des Sources</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className={`p-2 rounded border transition-all text-center ${sunOn ? 'bg-yellow-600/20 border-yellow-500' : 'bg-gray-900/50 border-white/5 opacity-50'}`}>
                                        <div className="text-[10px] font-bold text-yellow-400">SOLEIL</div>
                                        <div className="text-[8px] text-gray-500 uppercase">{sunOn ? 'Actif' : 'Éteint'}</div>
                                    </div>
                                    <div className={`p-2 rounded border transition-all text-center ${lampOn ? 'bg-white/10 border-white' : 'bg-gray-900/50 border-white/5 opacity-50'}`}>
                                        <div className="text-[10px] font-bold text-white">LAMPE</div>
                                        <div className="text-[8px] text-gray-500 uppercase">{lampOn ? 'Actif' : 'Éteint'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 text-[10px] text-gray-400 leading-tight">
                                <span className="text-yellow-500 font-bold italic">Info :</span> Cliquez sur les objets en 3D pour découvrir s'ils sont des sources primaires ou secondaires.
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-yellow-500/20 flex flex-col justify-between min-h-[160px]">
                            {info ? (
                                <div className="space-y-3 animate-in fade-in zoom-in duration-300">
                                    <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Élément Découvert</div>
                                    <div className="bg-gray-900/80 p-3 rounded-lg border border-yellow-500/30">
                                        <div className="text-[12px] font-black text-white mb-1 uppercase tracking-wider">{info.name}</div>
                                        <div className={`text-[9px] font-bold px-2 py-0.5 rounded inline-block mb-2 ${info.type === 'primary' ? 'bg-yellow-600/20 text-yellow-500' : 'bg-blue-600/20 text-blue-400'}`}>
                                            {info.type === 'primary' ? 'SOURCE PRIMAIRE 🌟' : 'SOURCE SECONDAIRE 🌙'}
                                        </div>
                                        <p className="text-[9px] text-gray-400 leading-tight">
                                            {info.type === 'primary'
                                                ? "Cet objet produit sa propre lumière !"
                                                : "Cet objet ne produit pas de lumière, il ne fait que diffuser la lumière qu'il reçoit."}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-2 opacity-40">
                                    <div className="text-2xl">🔍</div>
                                    <div className="text-[9px] text-gray-500 uppercase tracking-widest">En attente de découverte</div>
                                </div>
                            )}

                            <div className="mt-4 flex justify-between items-center text-[9px] text-gray-500 border-t border-white/5 pt-2">
                                <span>OBJETS : {discovered.size} / 4</span>
                                <div className="flex gap-1">
                                    {[0, 1, 2, 3].map(i => (
                                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < discovered.size ? 'bg-yellow-500' : 'bg-gray-800'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
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
    const [phase, setPhase] = useState('explore');
    const [switchClosed, setSwitchClosed] = useState(false);
    const [shortCircuit, setShortCircuit] = useState(false);
    const [fuseBlown, setFuseBlown] = useState(false);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [missionFault, setMissionFault] = useState(null); // 'fuse', 'short'
    const [repaired, setRepaired] = useState(false);

    // Electrons animation reference
    const electronsRef = useRef([]);

    useFrame((state) => {
        if (switchClosed && !fuseBlown && !shortCircuit) {
            // Normal flow
        }
    });

    const startMission = () => {
        setPhase('mission');
        const faults = ['fuse', 'short'];
        const fault = faults[Math.floor(Math.random() * faults.length)];
        setMissionFault(fault);

        if (fault === 'fuse') {
            setFuseBlown(true);
            setShortCircuit(false);
        } else {
            setShortCircuit(true);
            setFuseBlown(false);
        }

        setSwitchClosed(false);
        setRepaired(false);
        setShowSuccess(false);
    };

    const toggleShortCircuit = () => {
        if (fuseBlown) return;
        if (!shortCircuit) {
            setShortCircuit(true);
            setSwitchClosed(true);
            setTimeout(() => {
                setFuseBlown(true);
                setSwitchClosed(false);
            }, 1500);
        } else {
            setShortCircuit(false);
        }
    };

    const handleRepair = (type) => {
        if (phase === 'mission') {
            if (type === missionFault) {
                if (type === 'fuse') setFuseBlown(false);
                if (type === 'short') setShortCircuit(false);
                setRepaired(true);
                setScore(s => s + 50);
                setShowSuccess(true);
            }
        } else {
            if (type === 'fuse') replaceFuse();
        }
    };

    const replaceFuse = () => {
        setFuseBlown(false);
        setShortCircuit(false);
        setSwitchClosed(false);
        setScore(s => s + 10);
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message="Circuit réparé ! Tu as identifié et corrigé la panne." points={50} onNext={startMission} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🔌 Circuit et Sécurité" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-blue-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        <div className="bg-gray-900 rounded-lg px-3 py-1 border border-white/10 text-[10px] text-gray-400">
                            DÉPANNAGE ÉLECTRIQUE
                        </div>
                    </div>

                    <XPBar current={score} nextLevel={1000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startMission(); else { setFuseBlown(false); setShortCircuit(false); } }} />

                    {phase === 'mission' && !repaired && (
                        <MissionObjective objective="Le circuit ne fonctionne plus. Trouve la panne et répare-la !" icon="🛠️" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-3 rounded-xl border border-white/5 space-y-3">
                                <label className="text-[10px] text-gray-400 block uppercase tracking-widest text-center">Contrôle</label>
                                <button onClick={() => !fuseBlown && setSwitchClosed(!switchClosed)} disabled={fuseBlown || shortCircuit}
                                    className={`w-full py-4 rounded-xl font-black text-[12px] transition-all shadow-lg ${fuseBlown ? 'bg-gray-800 text-gray-600' : (switchClosed ? 'bg-green-600 text-white shadow-green-500/20' : 'bg-blue-600 text-white shadow-blue-500/20')}`}>
                                    {switchClosed ? "COUPER LE COURANT" : "METTRE SOUS TENSION"}
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {phase === 'explore' ? (
                                    <button onClick={toggleShortCircuit} disabled={fuseBlown || shortCircuit}
                                        className="w-full py-2 bg-red-900/40 hover:bg-red-900/60 border border-red-500/30 rounded text-[9px] font-bold text-red-200 uppercase">
                                        Simuler Court-Circuit ⚠️
                                    </button>
                                ) : (
                                    <div className="grid grid-cols-2 gap-2">
                                        <button onClick={() => handleRepair('fuse')} className="p-2 bg-gray-800 hover:bg-gray-700 border border-white/10 rounded text-[8px] font-bold">🛠️ CHANGER FUSIBLE</button>
                                        <button onClick={() => handleRepair('short')} className="p-2 bg-gray-800 hover:bg-gray-700 border border-white/10 rounded text-[8px] font-bold">✂️ ISOLER CÂBLES</button>
                                    </div>
                                )}

                                {fuseBlown && phase === 'explore' && (
                                    <button onClick={replaceFuse}
                                        className="w-full py-2 bg-green-600 hover:bg-green-500 border border-green-400/50 rounded text-[9px] font-bold text-white uppercase animate-pulse">
                                        Remplacer Fusible 🛠️
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-blue-500/20 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="text-[10px] text-center font-mono text-gray-500 tracking-widest uppercase">Indicateurs</div>

                                <div className="bg-gray-900/80 p-3 rounded-lg border border-white/5 space-y-2">
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500 uppercase">COURANT</span>
                                        <span className={`font-bold ${switchClosed && !fuseBlown && !shortCircuit ? 'text-green-400' : 'text-red-400'}`}>
                                            {switchClosed && !fuseBlown && !shortCircuit ? 'FLUX OK' : 'STOP'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500 uppercase">SÉCURITÉ</span>
                                        <span className={`font-bold ${fuseBlown ? 'text-red-400' : 'text-blue-400'}`}>
                                            {fuseBlown ? 'DÉFAUT' : 'OK'}
                                        </span>
                                    </div>
                                    <div className="h-[1px] bg-white/5" />
                                    <p className="text-[9px] text-gray-500 leading-tight italic">
                                        {fuseBlown
                                            ? "Fusible grillé ! L'installation est protégée."
                                            : (shortCircuit ? "DANGER ! Court-circuit détecté !" : "Tout est normal. Observe le trajet de l'électricité.")}
                                    </p>
                                </div>
                            </div>

                            <button onClick={() => { setSwitchClosed(false); setShortCircuit(false); setFuseBlown(false); setPhase('explore'); }} className="w-full py-2 rounded bg-gray-800 text-[10px] font-bold hover:bg-white hover:text-black transition-all">
                                RESET
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group position={[0, -1, 0]}>
                {/* Battery */}
                <group position={[-2, 0, 0]}>
                    <Box args={[1, 1.5, 1]} material-color={shortCircuit && !fuseBlown ? "#ff3333" : "#212121"} />
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
                <group position={[0, 1.5, 0]} onClick={() => handleRepair('fuse')}
                    onPointerOver={() => document.body.style.cursor = 'pointer'}
                    onPointerOut={() => document.body.style.cursor = 'auto'}>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 1]} />
                        <meshStandardMaterial color="white" transparent opacity={0.5} />
                    </mesh>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.02, 0.02, fuseBlown ? 0.2 : 1]} />
                        <meshBasicMaterial color={fuseBlown ? "black" : "red"} />
                    </mesh>
                    <Text position={[0, 0.3, 0]} fontSize={0.2} color="white">FUSIBLE</Text>
                </group>

                {/* Bulb */}
                <group position={[2, 0, 0]}>
                    <mesh position={[0, 0.8, 0]}>
                        <sphereGeometry args={[0.6]} />
                        <meshStandardMaterial
                            color={switchClosed && !shortCircuit && !fuseBlown ? "#FFEB3B" : "white"}
                            emissive={switchClosed && !shortCircuit && !fuseBlown ? "#FFEB3B" : "black"}
                            emissiveIntensity={switchClosed && !shortCircuit && !fuseBlown ? 2 : 0}
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
                    <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, switchClosed ? 0 : 0.5]}>
                        <boxGeometry args={[1.2, 0.1, 0.1]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                </group>

                {/* Wires */}
                <WirePath points={[[-2, 0.75, 0], [-2, 1.5, 0], [-0.5, 1.5, 0]]} color="red" />
                <WirePath points={[[0.5, 1.5, 0], [2, 1.5, 0], [2, 0.8, 0]]} color="red" />
                <WirePath points={[[-2, -0.75, 0], [-2, -1.5, 0], [-0.5, -1.5, 0]]} color="black" />
                <WirePath points={[[0.5, -1.5, 0], [2, -1.5, 0], [2, -0.4, 0]]} color="black" />

                {/* SHORT CIRCUIT WIRE */}
                {shortCircuit && (
                    <group onClick={() => handleRepair('short')}>
                        <WirePath points={[[1, 1.5, 0], [1, -1.5, 0]]} color="#FF5722" />
                        <Text position={[1.2, 0, 0]} fontSize={0.2} color="orange">PANNE ⚠️</Text>
                    </group>
                )}

                {/* Electron Flow Visualization */}
                {switchClosed && !fuseBlown && !shortCircuit && (
                    <group>
                        <ElectronStream start={[-2, 1.5, 0]} end={[0, 1.5, 0]} speed={1} />
                        <ElectronStream start={[0.1, 1.5, 0]} end={[2, 1.5, 0]} speed={1} />
                        <ElectronStream start={[2, -1.5, 0]} end={[-2, -1.5, 0]} speed={1} />
                    </group>
                )}
            </group>
        </group >
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


// ============================================================
// CHAPITRE 4: POIDS ET MASSE (ENRICHI & CHALLENGE)
// ============================================================
export function WeightMassPC4() {
    const [phase, setPhase] = useState('explore');
    const [planet, setPlanet] = useState('earth');
    const [mass, setMass] = useState(10);
    const [targetWeight, setTargetWeight] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45);

    const planets = {
        earth: { name: 'Terre', g: 9.8, color: '#3B82F6', emissive: '#1D4ED8' },
        moon: { name: 'Lune', g: 1.6, color: '#9CA3AF', emissive: '#4B5563' },
        mars: { name: 'Mars', g: 3.7, color: '#EF4444', emissive: '#991B1B' },
        jupiter: { name: 'Jupiter', g: 24.8, color: '#F59E0B', emissive: '#B45309' }
    };

    const currentPlanet = planets[planet];
    const weight = (mass * currentPlanet.g).toFixed(1);

    const startMission = () => {
        const keys = Object.keys(planets);
        const randPlanet = keys[Math.floor(Math.random() * keys.length)];
        setPlanet(randPlanet);
        const randMass = Math.floor(Math.random() * 40 + 10);
        setTargetWeight((randMass * planets[randPlanet].g).toFixed(1));
        setMass(0);
        setPhase('mission');
        setShowSuccess(false);
        setTimeLeft(45);
    };

    const checkMission = () => {
        if (targetWeight && Math.abs(parseFloat(weight) - parseFloat(targetWeight)) < 0.5) {
            if (!showSuccess) {
                const points = 50 + Math.floor(timeLeft / 2);
                setScore(s => s + points);
                setShowSuccess(true);
            }
        }
    };

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Cargaison équilibrée ! ${weight} N sur ${currentPlanet.name}`} points={50 + Math.floor(timeLeft / 2)} onNext={startMission} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="🚀 Mission : Poids Spatial" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-blue-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <GradeBadge score={score} />
                        {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                    </div>

                    <XPBar current={score} nextLevel={2000} />

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />

                    <PhaseSelector currentPhase={phase} onSelect={(p) => { setPhase(p); if (p === 'mission') startMission(); }} />

                    {phase === 'mission' && targetWeight && (
                        <MissionObjective objective={`Ajustez la masse pour atteindre un poids de ${targetWeight} N sur ${currentPlanet.name}`} icon="⚖️" />
                    )}

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider">Destination</label>
                                <div className="grid grid-cols-2 gap-1">
                                    {Object.entries(planets).map(([k, p]) => (
                                        <button key={k} onClick={() => setPlanet(k)} disabled={phase === 'mission'}
                                            className={`p-1 text-[9px] font-bold rounded border transition-all ${planet === k ? 'bg-blue-600 border-blue-400' : 'bg-gray-800 border-gray-700 opacity-50'}`}>
                                            {p.name.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider">Cargaison (Masse)</label>
                                <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5">
                                    <div className="text-2xl font-bold text-blue-400 font-mono mb-2">{mass} <span className="text-xs text-gray-500">kg</span></div>
                                    <input type="range" min="0" max="100" step="1" value={mass} onChange={(e) => setMass(Number(e.target.value))}
                                        className="w-full h-1 bg-gray-700 accent-blue-500 rounded-lg appearance-none cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 rounded-xl p-3 border border-blue-500/20 flex flex-col justify-between">
                            <div className="space-y-3 text-center">
                                <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Indicateur de Poids</div>
                                <div className="bg-gray-900/80 p-3 rounded-lg border border-blue-500/30">
                                    <div className="text-2xl font-black text-white font-mono">{weight}<span className="text-xs ml-1 text-gray-500">N</span></div>
                                    <div className="text-[8px] text-blue-400 mt-1 uppercase">Force Gravitationnelle</div>
                                </div>
                                <div className="text-[10px] text-gray-500">g = {currentPlanet.g} N/kg</div>
                            </div>

                            <button onClick={phase === 'mission' ? checkMission : null}
                                className={`w-full py-2 rounded font-black text-[10px] tracking-widest transition-all ${phase === 'mission' ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20' : 'bg-gray-800 text-gray-500 cursor-default'}`}>
                                {phase === 'mission' ? 'VÉRIFIER LE POIDS' : 'EXPLORATION LIBRE'}
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group position={[0, -2, 0]}>
                {/* Planet Surface */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={currentPlanet.color} roughness={0.8} />
                </mesh>
                <gridHelper args={[10, 10, currentPlanet.color, '#1F2937']} />

                {/* Astronaut / Cargo Object */}
                <Float speed={2} rotationIntensity={0.2} floatIntensity={currentPlanet.g < 5 ? 0.5 : 0.1}>
                    <mesh position={[0, 1, 0]} scale={[1 + mass / 100, 1 + mass / 100, 1 + mass / 100]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#FCD34D" metalness={0.5} roughness={0.2} />
                    </mesh>

                    {/* Weight Vector */}
                    <arrowHelper
                        args={[
                            new THREE.Vector3(0, -1, 0),
                            new THREE.Vector3(0, 0.5, 0),
                            1 + parseFloat(weight) / 100,
                            0xEF4444,
                            0.3,
                            0.2
                        ]}
                    />
                </Float>

                {/* Background Planet */}
                <group position={[5, 5, -10]}>
                    <mesh>
                        <sphereGeometry args={[2, 32, 32]} />
                        <meshStandardMaterial color={currentPlanet.color} emissive={currentPlanet.emissive} emissiveIntensity={0.5} />
                    </mesh>
                    <pointLight intensity={2} color={currentPlanet.color} />
                </group>
            </group>
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

