'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import {
    PhaseSelector,
    GradeBadge,
    MissionObjective,
    XPBar,
    ChallengeTimer,
    SuccessOverlay,
    ConfettiExplosion
} from './GamificationUtils';

// =========================================================
// PREMIUM GLASSWARE COMPONENTS
// =========================================================

function Liquid({ color, level, width = 0.5, height = 1.8, shape = 'cylinder' }) {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.01;
        }
    });

    if (shape === 'flask') {
        return (
            <group position={[0, -0.6 + (level * 0.8), 0]}>
                <mesh scale={[level, level, level]}>
                    <sphereGeometry args={[width, 32, 16, 0, Math.PI * 2, Math.PI * 0.3, Math.PI * 0.7]} />
                    <meshStandardMaterial color={color} transparent opacity={0.8} emissive={color} emissiveIntensity={0.2} />
                </mesh>
            </group>
        );
    }

    return (
        <mesh ref={meshRef} position={[0, -height / 2 + (level * height / 2), 0]}>
            <cylinderGeometry args={[width * 0.95, width * 0.98, height * level, 32]} />
            <meshStandardMaterial color={color} transparent opacity={0.8} emissive={color} emissiveIntensity={0.2} />
        </mesh>
    );
}

function Beaker({ position, label, Ci, color, liquidLevel = 0.6 }) {
    return (
        <group position={position}>
            {/* Glass Body */}
            <mesh>
                <cylinderGeometry args={[0.5, 0.5, 1.8, 32, 1, true]} />
                <meshPhysicalMaterial
                    color="#fff"
                    transmission={0.95}
                    thickness={0.2}
                    roughness={0}
                    transparent
                    opacity={0.3}
                    side={THREE.DoubleSide}
                />
            </mesh>
            {/* Base */}
            <mesh position={[0, -0.9, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
                <meshPhysicalMaterial color="#fff" transmission={0.9} transparent opacity={0.4} />
            </mesh>
            {/* Liquid */}
            <Liquid color={color} level={liquidLevel} width={0.5} height={1.7} />

            <Text position={[0, -1.3, 0]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">{label}</Text>
            {Ci !== undefined && (
                <Text position={[0, -1.6, 0]} fontSize={0.12} color="#60A5FA" anchorX="center">Ci : {Ci} mol/L</Text>
            )}
        </group>
    );
}

function VolumetricFlask({ position, label, Cf, color, liquidLevel = 0.4 }) {
    return (
        <group position={position}>
            {/* Flask Bottom */}
            <mesh>
                <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.75]} />
                <meshPhysicalMaterial color="#fff" transmission={0.95} thickness={0.2} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            {/* Neck */}
            <mesh position={[0, 0.8, 0]}>
                <cylinderGeometry args={[0.12, 0.18, 1.0, 24, 1, true]} />
                <meshPhysicalMaterial color="#fff" transmission={0.95} thickness={0.1} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            {/* Graduation Mark */}
            <mesh position={[0, 1.0, 0]}>
                <torusGeometry args={[0.13, 0.005, 8, 32]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={2} />
            </mesh>
            {/* Liquid */}
            <group position={[0, -0.1, 0]}>
                <mesh>
                    <sphereGeometry args={[0.67, 32, 16, 0, Math.PI * 2, Math.PI * (1 - liquidLevel), Math.PI * liquidLevel]} />
                    <meshStandardMaterial color={color} transparent opacity={0.7} emissive={color} emissiveIntensity={0.1} />
                </mesh>
                {liquidLevel > 0.7 && (
                    <mesh position={[0, 0.6, 0]}>
                        <cylinderGeometry args={[0.11, 0.11, (liquidLevel - 0.7) * 2, 24]} />
                        <meshStandardMaterial color={color} transparent opacity={0.7} />
                    </mesh>
                )}
            </group>

            <Text position={[0, -1.3, 0]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">{label}</Text>
            {Cf !== undefined && (
                <Text position={[0, -1.6, 0]} fontSize={0.12} color="#22C55E" anchorX="center">Cf : {Cf.toFixed(3)} mol/L</Text>
            )}
        </group>
    );
}

function Burette({ volumeBase }) {
    return (
        <group position={[0, 2.5, 0]}>
            {/* Tube */}
            <mesh>
                <cylinderGeometry args={[0.08, 0.08, 4.0, 16, 1, true]} />
                <meshPhysicalMaterial color="#fff" transmission={0.95} thickness={0.05} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            {/* Liquid inside */}
            <mesh position={[0, (40 - volumeBase) / 20 - 1.0, 0]}>
                <cylinderGeometry args={[0.07, 0.07, (40 - volumeBase) / 10, 16]} />
                <meshStandardMaterial color="#E0E7FF" transparent opacity={0.6} />
            </mesh>
            {/* Stopcock (Robinet) */}
            <group position={[0, -2.1, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.05, 0.05, 0.3, 12]} rotation={[0, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#475569" />
                </mesh>
                <mesh position={[0, -0.2, 0]}>
                    <coneGeometry args={[0.03, 0.1, 8]} rotation={[Math.PI, 0, 0]} />
                    <meshStandardMaterial color="#475569" />
                </mesh>
            </group>

            {/* Graduations */}
            {Array.from({ length: 9 }).map((_, i) => (
                <mesh key={i} position={[0.08, 1.8 - i * 0.45, 0]}>
                    <boxGeometry args={[0.04, 0.005, 0.01]} />
                    <meshBasicMaterial color="#fff" />
                </mesh>
            ))}

            <Text position={[0.4, 1.5, 0]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.woff" anchorX="left">BURETTE (NaOH)</Text>
        </group>
    );
}

function Erlenmeyer({ position, color, label }) {
    return (
        <group position={position}>
            {/* Glass Body */}
            <mesh>
                <cylinderGeometry args={[0.3, 1.0, 2.0, 32, 1, true]} />
                <meshPhysicalMaterial color="#fff" transmission={0.95} thickness={0.15} transparent opacity={0.2} side={THREE.DoubleSide} />
            </mesh>
            {/* Liquid */}
            <mesh position={[0, -0.4, 0]}>
                <cylinderGeometry args={[0.28, 0.85, 1.1, 32]} />
                <meshStandardMaterial color={color} transparent opacity={0.8} emissive={color} emissiveIntensity={0.2} />
            </mesh>
            {/* Magnetic Stir bar (Barreau aimanté) */}
            <MagneticBar position={[0, -0.9, 0]} />

            <Text position={[0, -1.6, 0]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">{label}</Text>
        </group>
    );
}

function MagneticBar({ position }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 10;
    });
    return (
        <mesh ref={ref} position={position}>
            <capsuleGeometry args={[0.03, 0.25, 4, 8]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#fff" />
        </mesh>
    );
}
function MagneticStirrer({ position }) {
    return (
        <group position={position}>
            {/* Base */}
            <mesh>
                <boxGeometry args={[2.5, 0.4, 2.5]} />
                <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.5} />
            </mesh>
            {/* Plate */}
            <mesh position={[0, 0.25, 0]}>
                <boxGeometry args={[2.2, 0.1, 2.2]} />
                <meshStandardMaterial color="#F8FAFC" />
            </mesh>
            {/* Knobs */}
            <mesh position={[-0.6, 0.1, 1.3]}>
                <cylinderGeometry args={[0.1, 0.1, 0.1, 12]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#1E293B" />
            </mesh>
            <mesh position={[0.6, 0.1, 1.3]}>
                <cylinderGeometry args={[0.1, 0.1, 0.1, 12]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#1E293B" />
            </mesh>
        </group>
    );
}

function TestTube({ position, color, label, subLabel, onClick, isSelected }) {
    return (
        <group position={position} onClick={onClick}>
            {/* Glass Body */}
            <mesh>
                <cylinderGeometry args={[0.25, 0.25, 1.8, 32, 1, true]} />
                <meshPhysicalMaterial
                    color="#fff"
                    transmission={0.95}
                    thickness={0.1}
                    transparent
                    opacity={isSelected ? 0.5 : 0.3}
                    side={THREE.DoubleSide}
                />
            </mesh>
            {/* Selection Ring */}
            {isSelected && (
                <group position={[0, 1.1, 0]}>
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.3, 0.02, 16, 32]} />
                        <meshBasicMaterial color="#3B82F6" />
                    </mesh>
                </group>
            )}
            {/* Rounded Bottom */}
            <mesh position={[0, -0.9, 0]}>
                <sphereGeometry args={[0.25, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
                <meshPhysicalMaterial color="#fff" transmission={0.95} thickness={0.1} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            {/* Liquid */}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.23, 0.23, 1.0, 24]} />
                <meshStandardMaterial
                    color={color === 'transparent' ? '#E2E8F0' : color}
                    transparent
                    opacity={color === 'transparent' ? 0.2 : 0.8}
                    emissive={color === 'transparent' ? '#000' : color}
                    emissiveIntensity={0.2}
                />
            </mesh>
            {/* Liquid Bottom (Matching rounded glass) */}
            <mesh position={[0, -0.7, 0]}>
                <sphereGeometry args={[0.23, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
                <meshStandardMaterial
                    color={color === 'transparent' ? '#E2E8F0' : color}
                    transparent
                    opacity={color === 'transparent' ? 0.2 : 0.8}
                    emissive={color === 'transparent' ? '#000' : color}
                    emissiveIntensity={0.2}
                />
            </mesh>

            <Text position={[0, -1.3, 0.3]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">{label}</Text>
            {subLabel && (
                <Text position={[0, -1.5, 0.3]} fontSize={0.08} color="#94A3B8" maxWidth={1.0} textAlign="center" anchorX="center">
                    {subLabel}
                </Text>
            )}
        </group>
    );
}

function Precipitate({ color, visible }) {
    if (!visible || !color) return null;

    const particles = Array.from({ length: 15 }).map((_, i) => ({
        pos: [
            (Math.random() - 0.5) * 0.35,
            (Math.random() - 0.5) * 0.6 - 0.2,
            (Math.random() - 0.5) * 0.35
        ],
        scale: Math.random() * 0.1 + 0.05
    }));

    return (
        <group>
            {particles.map((p, i) => (
                <mesh key={i} position={p.pos}>
                    <sphereGeometry args={[p.scale, 8, 8]} />
                    <meshStandardMaterial
                        color={color}
                        transparent
                        opacity={0.6}
                        emissive={color}
                        emissiveIntensity={0.5}
                    />
                </mesh>
            ))}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.18, 0.18, 0.6, 16]} />
                <meshStandardMaterial color={color} transparent opacity={0.3} />
            </mesh>
        </group>
    );
}

// =========================================================
// CHIMIE 2NDE S - SIMULATIONS AVANCÉES C6-C10
// Solutions Aqueuses, Acides, Bases, pH, Tests d'Ions
// =========================================================


// =========================================================
// C6. SOLUTIONS & CONCENTRATION - DILUTION AVANCÉE
// =========================================================
export function DilutionAdvanced() {
    const [Ci, setCi] = useState(2.0); // Concentration initiale mol/L
    const [Vi, setVi] = useState(50);  // Volume prélevé mL
    const [Vf, setVf] = useState(200); // Volume final mL
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    const Cf = (Ci * Vi) / Vf; // Concentration finale

    const missions = useMemo(() => [
        { id: 1, title: 'Dilution au Quart', objective: 'Préparez une solution de 0.25 mol/L à partir de 1 mol/L (Vf=100mL).', targetCf: 0.25, ci: 1, vf: 100, points: 300 },
        { id: 2, title: 'Précision Labo', objective: 'Ajustez Vi pour obtenir Cf = 0.4 mol/L (Ci=2, Vf=250).', targetCf: 0.4, ci: 2, vf: 250, points: 350 },
        { id: 3, title: 'Facteur 10', objective: 'Réalisez une dilution au dixième : 0.1 mol/L à partir de 1 mol/L (Vf=500mL).', targetCf: 0.1, ci: 1, vf: 500, points: 400 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const handleAction = () => {
        if (phase === 'mission' && mission && Math.abs(Cf - mission.targetCf) < 0.01) {
            setScore(s => s + (mission.points || 300));
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const liquidRef = useRef();
    useFrame((state) => {
        if (liquidRef.current) {
            liquidRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.02 - 0.2;
        }
    });

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            <Text position={[0, 3.8, 0]} fontSize={0.25} color="#60A5FA" font="/fonts/Inter-Bold.woff" anchorX="center">
                🧪 CI × VI = CF × VF
            </Text>

            {/* Fiole mère */}
            <Beaker
                position={[-2.2, 0, 0]}
                label="SOLUTION MÈRE"
                Ci={Ci}
                color="#3B82F6"
                liquidLevel={0.7}
            />

            {/* Pipette */}
            <group position={[0, 1.2, 0]}>
                <mesh rotation={[0, 0, Math.PI / 10]}>
                    <cylinderGeometry args={[0.03, 0.04, 2.2, 12]} />
                    <meshPhysicalMaterial color="#E8F4F8" transmission={0.95} transparent opacity={0.3} />
                </mesh>
                <mesh position={[0.12, -0.8, 0]} rotation={[0, 0, Math.PI / 10]}>
                    <cylinderGeometry args={[0.02, 0.03, 0.6, 12]} />
                    <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5} />
                </mesh>
                <Text position={[0.8, 0, 0]} fontSize={0.12} color="white" font="/fonts/Inter-Bold.woff" anchorX="left">Vi : {Vi} mL</Text>
            </group>

            {/* Fiole jaugée */}
            <VolumetricFlask
                position={[2.2, 0, 0]}
                label="SOLUTION FILLE"
                Cf={Cf}
                color="#93C5FD"
                liquidLevel={Vi / Vf + 0.3}
            />

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Expert en Dilution" className="w-[400px] border-blue-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest leading-tight">Verrerie de Précision</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Modélisation' : 'Mission Préparation 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🌡️" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 space-y-4">
                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                                    <span>Concentration Mère (Ci)</span>
                                    <span className="text-blue-400 font-mono">{Ci} mol/L</span>
                                </div>
                                <input type="range" min="0.1" max="5" step="0.1" value={Ci} onChange={(e) => setCi(Number(e.target.value))} className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-blue-500" />
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                                    <span>Volume Pipeté (Vi)</span>
                                    <span className="text-green-400 font-mono">{Vi} mL</span>
                                </div>
                                <input type="range" min="5" max="100" step="1" value={Vi} onChange={(e) => setVi(Number(e.target.value))} className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-green-500" />
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                                    <span>Fiole Jaugée (Vf)</span>
                                    <span className="text-purple-400 font-mono">{Vf} mL</span>
                                </div>
                                <div className="flex gap-2">
                                    {[50, 100, 200, 250, 500].map(v => (
                                        <button key={v} onClick={() => setVf(v)} className={`flex-1 py-1 rounded-lg text-[10px] font-bold border ${Vf === v ? 'bg-purple-600 border-white text-white' : 'bg-gray-900 border-white/5 text-gray-500 hover:bg-gray-800'}`}>
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 p-5 rounded-2xl border border-white/10 text-center group">
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Concentration Finale de la Fiole</p>
                            <div className="text-4xl font-black font-mono text-white tracking-tighter">
                                {Cf.toFixed(4)} <span className="text-xs text-blue-500">mol/L</span>
                            </div>
                            <div className="flex justify-center items-center gap-2 mt-2 text-[10px] font-bold text-gray-600 tracking-widest uppercase">
                                <span>Facteur</span>
                                <span className="px-2 py-0.5 bg-gray-900 rounded-full text-blue-400">{(Vf / Vi).toFixed(1)}x</span>
                            </div>
                        </div>

                        <button
                            onClick={handleAction}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 ${phase === 'mission' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'bg-gray-800 text-gray-500'}`}
                        >
                            {phase === 'mission' ? 'Valider la Préparation ➡️' : 'Mode Exploration Libre'}
                        </button>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Dilution Parfaite !" points={mission?.points || 300} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================================
// C7 & C8. ACIDES ET BASES - TITRAGE AVANCÉ
// =========================================================
export function TitrageAdvanced() {
    const [volumeBase, setVolumeBase] = useState(0);
    const [concentrationBase] = useState(0.1);
    const [concentrationAcide, setConcentrationAcide] = useState(0.1);
    const [volumeAcide] = useState(20);
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isDropping, setIsDropping] = useState(false);

    const Veq = (concentrationAcide * volumeAcide) / concentrationBase;

    const missions = useMemo(() => [
        { id: 1, title: 'Neutralisation Simple', objective: 'Neutralisez 20mL d\'acide à 0.1M avec de la soude à 0.1M (Veq = 20mL).', targetVeq: 20, ca: 0.1, points: 300 },
        { id: 2, title: 'Acide Concentré', objective: 'Trouvez le point d\'équivalence pour un acide à 0.15M (Veq = 30mL).', targetVeq: 30, ca: 0.15, points: 400 },
        { id: 3, title: 'Solution Inconnue', objective: 'Neutralisez avec précision la solution mystère (Veq = 25mL).', targetVeq: 25, ca: 0.125, points: 500 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
            setConcentrationAcide(missions[0].ca);
            setVolumeBase(0);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const handleEquivalence = () => {
        if (phase === 'mission' && mission && Math.abs(volumeBase - mission.targetVeq) < 0.5) {
            setScore(s => s + mission.points);
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setConcentrationAcide(missions[nextIdx].ca);
            setVolumeBase(0);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const addDrop = () => {
        if (volumeBase < 40) {
            setIsDropping(true);
            setTimeout(() => {
                setVolumeBase(v => Math.min(40, v + 0.5));
                setIsDropping(false);
            }, 200);
        }
    };

    // Calcul pH simplifié
    const moleAcide = (concentrationAcide * volumeAcide) / 1000;
    const moleBase = (concentrationBase * volumeBase) / 1000;
    const volumeTotal = (volumeAcide + volumeBase) / 1000;

    let pH;
    if (volumeBase < Veq) {
        const excessH = (moleAcide - moleBase) / volumeTotal;
        pH = excessH > 0 ? -Math.log10(excessH) : 7;
    } else if (volumeBase > Veq) {
        const excessOH = (moleBase - moleAcide) / volumeTotal;
        const pOH = excessOH > 0 ? -Math.log10(excessOH) : 7;
        pH = 14 - pOH;
    } else {
        pH = 7;
    }
    pH = Math.max(0, Math.min(14, pH));

    let indicatorColor = '#22C55E';
    if (pH < 6.0) indicatorColor = '#FACC15';
    else if (pH > 8.0) indicatorColor = '#3B82F6';

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            {/* Burette */}
            <Burette volumeBase={volumeBase} />

            {/* Goutte */}
            {isDropping && (
                <Float speed={5} rotationIntensity={0} floatIntensity={0.5}>
                    <mesh position={[0, 0.5, 0]}>
                        <sphereGeometry args={[0.04]} />
                        <meshStandardMaterial color="#E0E7FF" emissive="#E0E7FF" emissiveIntensity={0.5} />
                    </mesh>
                </Float>
            )}

            {/* Agitateur Magnétique & Erlenmeyer */}
            <group position={[0, -2.4, 0]}>
                <MagneticStirrer position={[0, -0.4, 0]} />
                <Erlenmeyer
                    position={[0, 0.6, 0]}
                    color={indicatorColor}
                    label="ERLENMEYER (HCl + BBT)"
                />
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Expert en Titrage" className="w-[380px] border-emerald-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest leading-tight">Analyse Quantitative</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Titrage Acide-Base' : 'Mission Neutralisation 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🔍" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={addDrop}
                                disabled={volumeBase >= 40}
                                className="py-4 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black text-xs shadow-lg shadow-emerald-900/20 transform active:scale-95 transition-all text-white"
                            >
                                💧 VERSER GOUTTE (+0.5mL)
                            </button>
                            <button
                                onClick={() => setVolumeBase(0)}
                                className="py-4 bg-gray-800 hover:bg-gray-700 rounded-2xl border border-white/5 transition-colors font-black text-xs text-white"
                            >
                                🔄 RÉINITIALISER
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Base (mL)</div>
                                <div className="text-xl font-black font-mono text-emerald-400">{volumeBase.toFixed(1)}</div>
                            </div>
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Ca (M)</div>
                                <div className="text-xl font-black font-mono text-blue-400">{concentrationAcide.toFixed(2)}</div>
                            </div>
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Veq (mL)</div>
                                <div className="text-xl font-black font-mono text-white">{Veq.toFixed(1)}</div>
                            </div>
                        </div>

                        {/* Digital pH Meter */}
                        <div className="bg-black/80 p-4 rounded-2xl border border-white/10 shadow-inner">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest">pH DIGITRE</span>
                                <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${pH < 6.5 ? 'bg-yellow-500/20 text-yellow-500' : pH > 7.5 ? 'bg-blue-500/20 text-blue-500' : 'bg-green-500/20 text-green-500'}`}>
                                    {pH < 6.5 ? 'Acide' : pH > 7.5 ? 'Basique' : 'Neutre'}
                                </span>
                            </div>
                            <div className="text-5xl font-black font-mono text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                {pH.toFixed(2)}
                            </div>
                        </div>

                        <button
                            onClick={handleEquivalence}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 ${phase === 'mission' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'bg-gray-800 text-gray-500'}`}
                        >
                            {phase === 'mission' ? 'Valider l\'Équivalence 🎯' : 'Mode Exploration Libre'}
                        </button>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Titrage Réussi !" points={mission?.points || 300} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================================
// C9. pH ET INDICATEURS - AVANCÉ
// =========================================================
export function PHIndicateursAdvanced() {
    const [pH, setPH] = useState(7);
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    const solutions = [
        { name: 'Acide gastrique', pH: 1.5, color: '#EF4444' },
        { name: 'Citron', pH: 2.4, color: '#FACC15' },
        { name: 'Vinaigre', pH: 3, color: '#F97316' },
        { name: 'Café', pH: 5, color: '#92400E' },
        { name: 'Eau pure', pH: 7, color: '#60A5FA' },
        { name: 'Sang', pH: 7.4, color: '#DC2626' },
        { name: 'Eau de mer', pH: 8.2, color: '#0EA5E9' },
        { name: 'Savon', pH: 10, color: '#F9A8D4' },
        { name: 'Eau de Javel', pH: 12, color: '#A3E635' },
        { name: 'Soude', pH: 14, color: '#8B5CF6' },
    ];

    const indicators = {
        BBT: { name: 'Bleu de Bromothymol', zones: [{ max: 6, color: '#FACC15' }, { max: 7.6, color: '#22C55E' }, { max: 14, color: '#3B82F6' }] },
        Phenol: { name: 'Phénolphtaléine', zones: [{ max: 8.2, color: 'transparent' }, { max: 14, color: '#EC4899' }] },
        Helianthine: { name: 'Hélianthine', zones: [{ max: 3.1, color: '#EF4444' }, { max: 4.4, color: '#F97316' }, { max: 14, color: '#FACC15' }] },
    };

    const missions = useMemo(() => [
        { id: 1, title: 'Acidité Gastrique', objective: 'Ajustez le pH à 1.5 pour simuler l\'acide gastrique.', targetPH: 1.5 },
        { id: 2, title: 'Neutralité Parfaite', objective: 'Atteignez un pH de 7.0 (Eau pure).', targetPH: 7.0 },
        { id: 3, title: 'Basique Intense', objective: 'Préparez une solution de Soude (pH 14).', targetPH: 14.0 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const getIndicatorColor = (indicator, pH) => {
        for (const zone of indicators[indicator].zones) {
            if (pH <= zone.max) return zone.color;
        }
        return '#888';
    };

    const handlePHChange = (newPH) => {
        setPH(newPH);
        if (phase === 'mission' && mission && Math.abs(newPH - mission.targetPH) < 0.2) {
            setScore(s => s + 350);
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const nature = pH < 7 ? 'ACIDE' : pH === 7 ? 'NEUTRE' : 'BASIQUE';
    const natureColor = pH < 7 ? '#EF4444' : pH === 7 ? '#22C55E' : '#3B82F6';

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />

            <ConfettiExplosion active={showSuccess} />

            {/* Échelle pH visuelle Premium */}
            <group position={[0, 2.0, 0]}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(p => {
                    const hue = (14 - p) / 14 * 240;
                    const isActive = Math.abs(pH - p) < 0.5;
                    return (
                        <group key={p} position={[(p - 7) * 0.45, 0, 0]}>
                            <mesh scale={[1, isActive ? 1.4 : 1.0, 1]}>
                                <boxGeometry args={[0.4, 0.6, 0.15]} />
                                <meshStandardMaterial
                                    color={`hsl(${hue}, 80%, 50%)`}
                                    emissive={`hsl(${hue}, 80%, 50%)`}
                                    emissiveIntensity={isActive ? 1.5 : 0.2}
                                    metalness={0.4}
                                    roughness={0.2}
                                />
                            </mesh>
                            <Text position={[0, isActive ? -0.8 : -0.5, 0.1]} fontSize={0.15} color="white" font="/fonts/Inter-Bold.woff">{p}</Text>
                        </group>
                    );
                })}

                {/* Curseur Premium */}
                <Float speed={5} rotationIntensity={0} floatIntensity={0.5}>
                    <mesh position={[(pH - 7) * 0.45, 1.0, 0]} rotation={[Math.PI, 0, 0]}>
                        <coneGeometry args={[0.08, 0.2, 16]} />
                        <meshStandardMaterial color="white" emissive="#fff" emissiveIntensity={1} />
                    </mesh>
                </Float>
            </group>

            {/* Tubes indicateurs Premium */}
            <group position={[0, -0.8, 0]}>
                {Object.entries(indicators).map(([key, ind], i) => (
                    <TestTube
                        key={key}
                        position={[(i - 1) * 2, 0, 0]}
                        color={getIndicatorColor(key, pH)}
                        label={key}
                        subLabel={ind.name}
                    />
                ))}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="📊 Expert en pH" className="w-[400px] border-purple-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-purple-400 font-black uppercase tracking-widest leading-tight">Échelle de Sorensen</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Exploration pH' : 'Défi Colorimétrique 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="📊" />
                        </div>
                    )}

                    <div className="space-y-5">
                        <div className="bg-gray-950 p-5 rounded-3xl border border-white/5 relative overflow-hidden text-center group">
                            <div className="relative z-10">
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Potentiel Hydrogène (pH)</p>
                                <span className="text-6xl font-black transition-colors duration-500" style={{ color: natureColor }}>
                                    {pH.toFixed(1)}
                                </span>
                                <div className="text-sm font-black mt-2 tracking-[0.2em]" style={{ color: natureColor }}>{nature}</div>
                            </div>
                            <div className="absolute inset-0 opacity-10 animate-pulse transition-colors" style={{ backgroundColor: natureColor }} />
                        </div>

                        <div className="space-y-4 px-1">
                            <input
                                type="range"
                                min="0"
                                max="14"
                                step="0.1"
                                value={pH}
                                onChange={(e) => handlePHChange(Number(e.target.value))}
                                className="w-full h-2.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-purple-500 ring-4 ring-purple-500/10"
                            />

                            <div className="grid grid-cols-5 gap-1">
                                {solutions.map((s, idx) => (
                                    <button
                                        key={s.name}
                                        onClick={() => handlePHChange(s.pH)}
                                        className="py-2 bg-gray-900 hover:bg-white hover:text-black border border-white/5 rounded-lg text-[8px] font-black transition-all transform active:scale-95 uppercase leading-tight"
                                    >
                                        {s.name.split(' ')[0]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-black/40 rounded-2xl border border-white/5 space-y-3">
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                <span>🧪</span> CONCENTRATION [H₃O⁺]
                            </p>
                            <div className="font-mono text-xs text-white bg-black/60 p-3 rounded-xl border border-white/10 text-center">
                                <span className="text-gray-500">10^{(-pH).toFixed(1)} = </span>
                                <span className="text-blue-400 font-black">{Math.pow(10, -pH).toExponential(2)}</span>
                                <span className="text-gray-500 ml-1 text-[10px]">mol/L</span>
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "pH Validé !"} points={350} onNext={nextMission} />
        </group>
    );
}

// =========================================================
// C10. TESTS D'IONS - AVANCÉ GAMIFIÉ
// =========================================================
export function TestsIonsAdvanced() {
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [selectedReactif, setSelectedReactif] = useState(null);
    const [result, setResult] = useState(null);

    // Gamification
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [testsResults, setTestsResults] = useState([]);

    const solutions = [
        { id: 'A', ions: ['Cu2+'], color: '#93C5FD', name: 'Sulfate de Cuivre (II)' },
        { id: 'B', ions: ['Fe3+'], color: '#FCD34D', name: 'Chlorure de Fer (III)' },
        { id: 'C', ions: ['Cl-'], color: '#F3F4F6', name: 'Eau Salée (Ions Cl⁻)' },
        { id: 'D', ions: ['Fe2+'], color: '#6EE7B7', name: 'Sulfate de Fer (II)' },
        { id: 'E', ions: ['SO42-'], color: '#C7D2FE', name: 'Sulfate de Sodium' },
    ];

    const reactifs = {
        NaOH: {
            name: 'Soude (NaOH)',
            icon: '🍶',
            tests: {
                'Cu2+': { precipitate: 'BLEU GEL', color: '#3B82F6', formula: 'Cu(OH)₂' },
                'Fe2+': { precipitate: 'VERT FONCÉ', color: '#166534', formula: 'Fe(OH)₂' },
                'Fe3+': { precipitate: 'ROUILLE', color: '#92400E', formula: 'Fe(OH)₃' },
            }
        },
        AgNO3: {
            name: 'Nitrate d\'Argent',
            icon: '🧪',
            tests: {
                'Cl-': { precipitate: 'BLANC (Puri)', color: '#F5F5F5', formula: 'AgCl' },
            }
        },
        BaCl2: {
            name: 'Chlorure de Baryum',
            icon: '⚗️',
            tests: {
                'SO42-': { precipitate: 'BLANC CRAYEUX', color: '#FFFFFF', formula: 'BaSO₄' },
            }
        },
    };

    const missions = useMemo(() => [
        { id: 1, title: 'Identification du Cuivre', objective: 'Identifiez l\'ion Cu²⁺ dans la solution A.', targetIon: 'Cu2+', points: 400 },
        { id: 2, title: 'Le Fer Oxydé', objective: 'Détectez les ions Fe³⁺ (couleur rouille).', targetIon: 'Fe3+', points: 450 },
        { id: 3, title: 'Mystère Chloré', objective: 'Trouvez l\'ion Halogénure Cl⁻ avec le nitrate d\'argent.', targetIon: 'Cl-', points: 500 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const runTest = () => {
        if (!selectedSolution || !selectedReactif) return;

        const solution = solutions.find(s => s.id === selectedSolution);
        const reactif = reactifs[selectedReactif];

        let found = null;
        for (const ion of solution.ions) {
            if (reactif.tests[ion]) {
                found = { ion, ...reactif.tests[ion] };
                break;
            }
        }

        const res = found || { precipitate: 'AUCUN', color: null };
        setResult(res);
        setTestsResults(prev => [...prev.slice(-4), { reactif: selectedReactif, result: res }]);
    };

    const identifyIon = (ion) => {
        if (phase === 'mission' && mission) {
            if (ion === mission.targetIon) {
                setScore(s => s + mission.points);
                setShowSuccess(true);
            }
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(60);
            reset();
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const reset = () => {
        setSelectedSolution(null);
        setSelectedReactif(null);
        setResult(null);
        setTestsResults([]);
    };

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />

            <ConfettiExplosion active={showSuccess} />

            {/* Tubes à essai Premium */}
            <group position={[-2.8, -0.5, 0]}>
                {solutions.map((sol, i) => {
                    const isSelected = selectedSolution === sol.id;
                    const testResult = result && isSelected ? result : null;

                    return (
                        <group key={sol.id}>
                            <TestTube
                                position={[i * 1.4, 0, 0]}
                                color={sol.color}
                                label={sol.id}
                                subLabel={phase === 'mission' ? 'Contenu Inconnu' : sol.name}
                                onClick={() => setSelectedSolution(sol.id)}
                                isSelected={isSelected}
                            />
                            {isSelected && testResult && (
                                <group position={[i * 1.4, 0, 0.1]}>
                                    <Precipitate
                                        color={testResult.color}
                                        visible={testResult.precipitate !== 'AUCUN'}
                                    />
                                </group>
                            )}
                        </group>
                    );
                })}
            </group>

            {/* Réactifs (Gouttes montrant le réactif utilisé) */}
            {selectedReactif && (
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <group position={[selectedSolution ? solutions.findIndex(s => s.id === selectedSolution) * 1.4 - 2.8 : 0, 1.5, 0.5]}>
                        <mesh>
                            <sphereGeometry args={[0.1, 16, 16]} />
                            <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
                        </mesh>
                        <Text position={[0, -0.2, 0]} fontSize={0.1} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">
                            {reactifs[selectedReactif].name}
                        </Text>
                    </group>
                </Float>
            )}

            {/* Zone de Mélange (Zoomé) */}
            {result && (
                <group position={[4, 0, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.5, 0.5, 2.5, 32, 1, true]} />
                        <meshPhysicalMaterial color="#fff" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
                    </mesh>
                    {/* Précipité visuel */}
                    <mesh position={[0, -0.5, 0]}>
                        <dodecahedronGeometry args={[0.35]} />
                        <meshStandardMaterial
                            color={result.color || '#fff'}
                            transparent
                            opacity={result.color ? 0.9 : 0.1}
                            emissive={result.color || '#000'}
                            emissiveIntensity={0.5}
                        />
                    </mesh>
                    <Text position={[0, -1.8, 0]} fontSize={0.18} color={result.color || '#888'}>
                        {result.precipitate}
                    </Text>
                    {result.formula && (
                        <Text position={[0, -2.1, 0]} fontSize={0.12} color="gray">
                            ({result.formula})
                        </Text>
                    )}
                </group>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Expert en Ions" className="w-[420px] border-blue-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest leading-tight">Analyses Qualitatives</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Recherche d\'Ions' : 'Défi Identification 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🧪" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                            {Object.entries(reactifs).map(([key, r]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedReactif(key)}
                                    className={`py-3 rounded-xl text-[10px] font-black uppercase transition-all flex flex-col items-center gap-1 border-b-4 active:border-b-0 active:translate-y-1 ${selectedReactif === key
                                        ? 'bg-blue-600 border-blue-800 text-white shadow-lg'
                                        : 'bg-gray-800 border-black/40 text-gray-400 hover:bg-gray-700'}`}
                                >
                                    <span className="text-xl">{r.icon}</span>
                                    {r.name.split(' ')[0]}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={runTest}
                            disabled={!selectedSolution || !selectedReactif}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 ${!selectedSolution || !selectedReactif
                                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-900/40 hover:from-blue-500 hover:to-indigo-500'}`}
                        >
                            🔍 Initier le Test Chimique
                        </button>

                        <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 space-y-3">
                            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/10 pb-1">Journal de Bord</h4>
                            {testsResults.length === 0 ? (
                                <p className="text-[10px] text-gray-700 italic text-center py-2">En attente d&apos;analyses...</p>
                            ) : (
                                <div className="space-y-1.5">
                                    {testsResults.map((t, i) => (
                                        <div key={i} className="flex justify-between items-center bg-black/40 p-2 rounded-lg border border-white/5 animate-in slide-in-from-left duration-300">
                                            <span className="text-[10px] font-bold text-blue-400">{t.reactif}</span>
                                            <span className="text-[10px] font-black" style={{ color: t.result.color || '#666' }}>
                                                {t.result.precipitate}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {phase === 'mission' && (
                            <div className="grid grid-cols-5 gap-1.5">
                                {['Cu2+', 'Fe2+', 'Fe3+', 'Cl-', 'SO42-'].map(ion => (
                                    <button
                                        key={ion}
                                        onClick={() => identifyIon(ion)}
                                        className="py-2.5 bg-gray-900 hover:bg-white hover:text-black border border-white/10 rounded-lg text-[9px] font-black transition-all transform active:scale-95"
                                    >
                                        {ion}
                                    </button>
                                ))}
                            </div>
                        )}

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Ion Identifié !"} points={mission?.points || 400} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}
