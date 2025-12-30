import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Text, Sphere, Box, Cylinder, Line, Plane, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, GradeBadge, XPBar, PhaseSelector, MissionObjective } from './GamificationUtils';

// ==========================================
// ATOM COLORS & RADII
// ==========================================
const ATOM = {
    C: { color: '#262626', r: 0.4 },
    H: { color: '#F8FAFC', r: 0.25 },
    O: { color: '#EF4444', r: 0.38 },
    N: { color: '#3B82F6', r: 0.38 },
    Cl: { color: '#10B981', r: 0.45 },
};

// trigSuccess removal (using SuccessOverlay now)

// ==========================================
// C1: GÉNÉRALITÉS CHIMIE ORGANIQUE (Tétravalence du C)
// ==========================================
export function ChimieOrgaGeneralSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);

    // États Physiques
    const [showLabels, setShowLabels] = useState(false);
    const groupRef = useRef();

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Analyse Tétraédrique', objective: 'Activez les labels pour identifier le Carbone central.', type: 'labels' },
        { id: 2, title: 'Géométrie Moléculaire', objective: 'Observez la structure tridimensionnelle du méthane.', type: 'observe' },
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(30);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(30);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const completeObjective = () => {
        if (showSuccess) return;
        setScore(prev => prev + 250);
        setShowSuccess(true);
    };

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    // Méthane CH4 - Tétraèdre parfait
    const hPos = [
        [0.6, 0.6, 0.6], [-0.6, -0.6, 0.6], [-0.6, 0.6, -0.6], [0.6, -0.6, -0.6]
    ];

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00F5D4" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group ref={groupRef} scale={1.8}>
                    {/* Carbone central avec effet Glow */}
                    <mesh>
                        <sphereGeometry args={[ATOM.C.r, 32, 32]} />
                        <meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.1} />
                    </mesh>
                    {showLabels && (
                        <Text position={[0, 0.6, 0]} fontSize={0.2} color="#00F5D4" font="/fonts/Inter-Bold.woff" outlineWidth={0.02} outlineColor="#000">
                            C
                        </Text>
                    )}

                    {/* 4 Hydrogènes avec liaisons holographiques */}
                    {hPos.map((p, i) => (
                        <group key={i}>
                            <mesh position={p}>
                                <sphereGeometry args={[ATOM.H.r, 24, 24]} />
                                <meshStandardMaterial color={ATOM.H.color} emissive="#fff" emissiveIntensity={0.2} metalness={1} roughness={0} />
                            </mesh>
                            <Line points={[[0, 0, 0], p]} color="#00F5D4" lineWidth={3} transparent opacity={0.4} />
                            {showLabels && (
                                <Text position={[p[0] * 1.3, p[1] * 1.3, p[2] * 1.3]} fontSize={0.15} color="#FFF" font="/fonts/Inter-Regular.woff" outlineWidth={0.01} outlineColor="#000">
                                    H
                                </Text>
                            )}
                        </group>
                    ))}
                </group>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Laboratoire de Structure" className="w-[380px] border-cyan-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest leading-tight">Chimie Organique</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Visualisation 3D' : 'Mission Tétravalence 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🔬" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity">
                                <div className="text-3xl font-black text-cyan-500">CH₄</div>
                            </div>
                            <div className="text-[10px] text-gray-500 font-black uppercase mb-1 tracking-widest">Molécule Modèle</div>
                            <div className="text-xl font-black text-white uppercase tracking-tight">Le Méthane</div>
                            <div className="text-[10px] text-cyan-400 font-bold uppercase mt-1 tracking-wider">Hydrocarbure saturé simple</div>
                        </div>

                        <button
                            onClick={() => {
                                setShowLabels(!showLabels);
                                if (phase === 'mission' && mission?.type === 'labels') completeObjective();
                            }}
                            className={`w-full py-4 rounded-xl font-black text-xs transition-all transform active:scale-95 flex items-center justify-center gap-3 ${showLabels
                                ? 'bg-cyan-600 shadow-lg shadow-cyan-900/40 border-b-4 border-cyan-800'
                                : 'bg-gray-800 hover:bg-gray-700 border-b-4 border-gray-950'}`}
                        >
                            <span>{showLabels ? 'DÉSACTIVER LABELS' : 'ACTIVER LABELS ÉLECTRONIQUES'}</span>
                            {showLabels && <span className="animate-pulse w-2 h-2 rounded-full bg-white block" />}
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5 group hover:border-cyan-500/30 transition-colors">
                                <p className="text-[9px] text-gray-500 font-black uppercase mb-1 tracking-widest group-hover:text-cyan-400">Angles</p>
                                <p className="text-sm font-black text-white">109.5°</p>
                            </div>
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5 group hover:border-cyan-500/30 transition-colors">
                                <p className="text-[9px] text-gray-500 font-black uppercase mb-1 tracking-widest group-hover:text-cyan-400">Géométrie</p>
                                <p className="text-sm font-black text-white uppercase">Tétraèdre</p>
                            </div>
                        </div>

                        <XPBar current={score % 500} nextLevel={500} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Analyse Validée !"} points={250} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C2: ALCANES (Nomenclature + Combustion)
// ==========================================
export function AlcanesSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [n, setN] = useState(1);
    const names = ['', 'Méthane', 'Éthane', 'Propane', 'Butane', 'Pentane', 'Hexane', 'Heptane', 'Octane'];

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Synthèse Butane', objective: 'Ajustez la chaîne pour former du Butane (n=4).', targetN: 4 },
        { id: 2, title: 'Hydrocarbure Liquide', objective: 'Modélisez un alcane liquide à température ambiante (n ≥ 5).', type: 'liquid' },
        { id: 3, title: 'Combustion Complète', objective: 'Préparez l\'Octane pour une simulation moteur.', targetN: 8 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const handleNChange = (val) => {
        setN(val);
        if (phase === 'mission' && mission) {
            if (mission.type === 'liquid' && val >= 5) {
                completeObjective();
            } else if (val === mission.targetN) {
                completeObjective();
            }
        }
    };

    const completeObjective = () => {
        if (showSuccess) return;
        setScore(prev => prev + 350);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(45);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const structure = useMemo(() => {
        const list = [];
        const bondLen = 0.9;
        const angle = 35 * Math.PI / 180;
        const dx = bondLen * Math.cos(angle);
        const dy = bondLen * Math.sin(angle);
        const hRad = 0.7;

        for (let i = 0; i < n; i++) {
            const cx = i * dx - ((n - 1) * dx) / 2;
            const cy = (i % 2 === 0) ? -dy / 2 : dy / 2;
            const cPos = new THREE.Vector3(cx, cy, 0);
            list.push({ type: 'C', pos: cPos, id: i });

            const up = (i % 2 === 0) ? 1 : -1;

            const h1 = new THREE.Vector3(cx, cy + up * hRad * 0.7, hRad * 0.8);
            const h2 = new THREE.Vector3(cx, cy + up * hRad * 0.7, -hRad * 0.8);
            list.push({ type: 'H', pos: h1, parent: cPos });
            list.push({ type: 'H', pos: h2, parent: cPos });

            if (i === 0) {
                const hTerm = new THREE.Vector3(cx - hRad, cy - up * 0.3, 0);
                list.push({ type: 'H', pos: hTerm, parent: cPos });
            }
            if (i === n - 1) {
                const hTerm = new THREE.Vector3(cx + hRad, cy - up * 0.3, 0);
                list.push({ type: 'H', pos: hTerm, parent: cPos });
            }
        }
        return { atoms: list, carbonCount: n };
    }, [n]);

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <pointLight position={[-5, 5, 5]} intensity={0.5} color="#F97316" />

            <group scale={1.8}>
                {structure.atoms.map((a, k) => (
                    <group key={k}>
                        <mesh position={a.pos}>
                            <sphereGeometry args={[a.type === 'C' ? ATOM.C.r : ATOM.H.r, 24, 24]} />
                            <meshStandardMaterial
                                color={a.type === 'C' ? ATOM.C.color : ATOM.H.color}
                                metalness={0.7}
                                roughness={0.2}
                                emissive={a.type === 'H' ? "#FFF" : "#000"}
                                emissiveIntensity={a.type === 'H' ? 0.1 : 0}
                            />
                        </mesh>
                        {a.parent && <Line points={[a.parent, a.pos]} color="#F97316" lineWidth={1} transparent opacity={0.3} />}
                    </group>
                ))}

                {Array.from({ length: n - 1 }).map((_, i) => {
                    const carbons = structure.atoms.filter(a => a.type === 'C');
                    return <Line key={'cc' + i} points={[carbons[i].pos, carbons[i + 1].pos]} color="#F97316" lineWidth={4} />;
                })}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⛽ Raffinerie d'Alcanes" className="w-[400px] border-orange-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-orange-400 font-black uppercase tracking-widest leading-tight">Hydrocarbures Saturés</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Modélisation' : 'Challenge Raffinerie 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🔋" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                            <div className="flex justify-between items-center relative z-10">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-orange-400 font-black uppercase tracking-widest leading-none mb-1">Nom Nomenclature</span>
                                    <span className="text-2xl font-black text-white">{names[n].toUpperCase()}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none block mb-1">Formule</span>
                                    <span className="text-xl font-mono font-black text-orange-400">C{n > 1 ? <sub>{n}</sub> : ''}H<sub>{2 * n + 2}</sub></span>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0">
                                <span className="text-8xl font-black text-orange-500">{n}</span>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className="flex justify-between text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">
                                <span>Longueur de chaîne</span>
                                <span className="text-orange-400">{n} Carbones</span>
                            </div>
                            <input
                                type="range" min="1" max="8" value={n}
                                onChange={e => handleNChange(Number(e.target.value))}
                                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500 hover:accent-orange-400 transition-all shadow-inner"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5 group hover:border-orange-500/30 transition-colors">
                                <p className="text-[9px] text-gray-500 font-black uppercase mb-1 tracking-widest group-hover:text-orange-400">État Physique</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-black text-white uppercase">{n < 5 ? 'Gazeux' : 'Liquide'}</span>
                                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: n < 5 ? '#60A5FA' : '#F59E0B' }}></span>
                                </div>
                            </div>
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5 group hover:border-orange-500/30 transition-colors">
                                <p className="text-[9px] text-gray-500 font-black uppercase mb-1 tracking-widest group-hover:text-orange-400">Masse Molaire</p>
                                <p className="text-sm font-black text-white">{14 * n + 2} g/mol</p>
                            </div>
                        </div>

                        <div className="p-4 bg-orange-950/20 rounded-2xl border border-orange-500/10 relative overflow-hidden group/burn">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-lg">🔥</span>
                                <p className="text-[10px] font-black text-orange-300 uppercase tracking-widest">Équation de Combustion</p>
                            </div>
                            <div className="font-mono text-[11px] text-white overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
                                <span className="text-orange-400 font-black">C<sub>{n}</sub>H<sub>{2 * n + 2}</sub></span>
                                <span className="mx-2 text-gray-600">+</span>
                                <span className="text-blue-400 font-black">{(3 * n + 1) / 2}O<sub>2</sub></span>
                                <span className="mx-2 text-red-500 animate-pulse">→</span>
                                <span className="text-emerald-400 font-black">{n}CO<sub>2</sub></span>
                                <span className="mx-2 text-gray-600">+</span>
                                <span className="text-cyan-400 font-black">{n + 1}H<sub>2</sub>O</span>
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Raffinage Réussi !"} points={350} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C3: ALCÈNES (Double liaison)
// ==========================================
export function AlcenesSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    // États Physiques
    const groupRef = useRef();
    const [showDoubleBond, setShowDoubleBond] = useState(true);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Analyse d\'Insaturation', objective: 'Localisez et identifiez la double liaison C=C en l\'activant.', type: 'bond', points: 350 },
        { id: 2, title: 'Géométrie Plane', objective: 'Vérifiez l\'alignement des atomes dans le plan sp².', type: 'geometry', points: 400 },
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

    const completeObjective = () => {
        if (showSuccess) return;
        setScore(prev => prev + (mission?.points || 350));
        setShowSuccess(true);
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

    useFrame((state, delta) => {
        if (groupRef.current) groupRef.current.rotation.y += delta * 0.4;
    });

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <pointLight position={[-5, -5, 5]} intensity={1} color={ATOM.C.color} />

            <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.5}>
                <group ref={groupRef} scale={1.6}>
                    {/* Éthène C2H4 - Atomes de Carbone */}
                    <mesh position={[-0.6, 0, 0]}>
                        <sphereGeometry args={[0.35, 32, 32]} />
                        <meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} />
                    </mesh>
                    <mesh position={[0.6, 0, 0]}>
                        <sphereGeometry args={[0.35, 32, 32]} />
                        <meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} />
                    </mesh>

                    {/* Double liaison Holographique de Haute Énergie */}
                    {showDoubleBond && (
                        <group>
                            <mesh position={[0, 0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.045, 0.045, 1.2, 16]} />
                                <meshStandardMaterial
                                    color="#10B981"
                                    emissive="#10B981"
                                    emissiveIntensity={4}
                                    transparent
                                    opacity={0.7}
                                />
                            </mesh>
                            <mesh position={[0, -0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.045, 0.045, 1.2, 16]} />
                                <meshStandardMaterial
                                    color="#10B981"
                                    emissive="#10B981"
                                    emissiveIntensity={4}
                                    transparent
                                    opacity={0.7}
                                />
                            </mesh>
                        </group>
                    )}

                    {/* Atomes d'Hydrogène avec effet de lueur */}
                    <group>
                        {[
                            [-1.15, 0.55, 0], [-1.15, -0.55, 0],
                            [1.15, 0.55, 0], [1.15, -0.55, 0]
                        ].map((pos, i) => (
                            <group key={i} position={pos}>
                                <mesh>
                                    <sphereGeometry args={[0.22, 24, 24]} />
                                    <meshStandardMaterial color={ATOM.H.color} emissive={ATOM.H.color} emissiveIntensity={0.3} />
                                </mesh>
                                {/* Liaison C-H */}
                                <Line
                                    points={[[0, 0, 0], [i < 2 ? 0.55 : -0.55, i % 2 === 0 ? -0.55 : 0.55, 0]]}
                                    color="#10B981"
                                    lineWidth={1.5}
                                    transparent
                                    opacity={0.4}
                                />
                            </group>
                        ))}
                    </group>
                </group>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Expert des Alcènes" className="w-[400px] border-emerald-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest leading-tight">Hydrocarbures Insaturés</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Modélisation Structurelle' : 'Mission Analyse 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🔬" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-950 p-5 rounded-2xl border border-white/5 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                <div className="text-6xl font-black text-emerald-500 text-right">C₂H₄</div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">Éthène</div>
                                <div className="text-[11px] text-emerald-500 font-black uppercase tracking-[0.2em]">Squelette sp² Plan</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => {
                                    setShowDoubleBond(!showDoubleBond);
                                    if (phase === 'mission' && mission?.type === 'bond') completeObjective();
                                }}
                                className={`p-4 rounded-2xl font-black text-[10px] transition-all flex flex-col items-center gap-3 border-b-4 active:border-b-0 active:translate-y-1 transform ${showDoubleBond
                                    ? 'bg-emerald-600 border-emerald-800 text-white shadow-lg shadow-emerald-900/40'
                                    : 'bg-gray-800 border-black/40 text-gray-400 hover:bg-gray-700'}`}>
                                <span className={`text-2xl ${showDoubleBond ? 'animate-bounce' : ''}`}>⚡</span>
                                <span>LIAISON PI (π)</span>
                            </button>
                            <div
                                onClick={() => {
                                    if (phase === 'mission' && mission?.type === 'geometry') completeObjective();
                                }}
                                className="p-4 bg-gray-950 rounded-2xl border border-white/5 flex flex-col items-center justify-center transition-all hover:border-emerald-500/40 cursor-pointer group/geo shadow-lg">
                                <p className="text-[9px] text-gray-500 font-black uppercase mb-1 tracking-widest group-hover/geo:text-emerald-400 transition-colors">Angle de Liaison</p>
                                <p className="text-2xl font-black text-white italic group-hover/geo:scale-110 transition-transform">120°</p>
                            </div>
                        </div>

                        <div className="p-4 bg-black/40 rounded-2xl border border-white/5 space-y-3">
                            <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="p-1 bg-yellow-500/20 rounded">🧪</span> RÉACTIONS D'ADDITION
                            </p>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    { name: 'Hydrogénation', formula: 'H₂ / Ni', desc: 'Vers les Alcanes' },
                                    { name: 'Dihalogénation', formula: 'Br₂ (aq)', desc: 'Test au Brome' },
                                    { name: 'Hydratation', formula: 'H₂O / H⁺', desc: 'Vers les Alcools' }
                                ].map((react, i) => (
                                    <div key={i} className="flex justify-between items-center bg-gray-950/50 p-2.5 rounded-xl border border-white/5 hover:bg-emerald-500/10 transition-colors cursor-default group/item">
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-black text-white group-hover/item:text-emerald-400 transition-colors">{react.name}</span>
                                            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">{react.desc}</span>
                                        </div>
                                        <div className="px-2 py-1 bg-black rounded-lg border border-white/10 font-mono text-[10px] text-emerald-400 font-black">
                                            {react.formula}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Analyse Réussie !"} points={mission?.points || 350} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C4: BENZÈNE (Cycle aromatique)
// ==========================================
export function BenzeneSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    // États Physiques
    const groupRef = useRef();
    const [showAromaticCircle, setShowAromaticCircle] = useState(true);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Cercle de Mésomérie', objective: 'Activez la délocalisation électronique pour stabiliser le cycle.', type: 'arom', points: 400 },
        { id: 2, title: 'Symétrie Hexagonale', objective: 'Analysez les angles de liaison parfaits de 120°.', type: 'sym', points: 450 },
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

    const completeObjective = () => {
        if (showSuccess) return;
        setScore(prev => prev + (mission?.points || 400));
        setShowSuccess(true);
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

    useFrame((state, delta) => {
        if (groupRef.current) groupRef.current.rotation.y += delta * 0.25;
    });

    const angle = (i) => (i * Math.PI * 2) / 6;
    const r = 1.25;

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <pointLight position={[-10, 5, 5]} intensity={1} color="#EC4899" />

            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
                <group ref={groupRef} scale={1.2}>
                    {/* 6 Carbones en hexagone parfait */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <group key={i}>
                            <mesh position={[r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0]}>
                                <sphereGeometry args={[0.32, 32, 32]} />
                                <meshStandardMaterial color={ATOM.C.color} metalness={1} roughness={0.05} />
                            </mesh>
                            {/* Liaison C-C aromatique */}
                            <Line points={[
                                [r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0],
                                [r * Math.cos(angle(i + 1)), r * Math.sin(angle(i + 1)), 0]
                            ]} color="#EC4899" lineWidth={4} transparent opacity={0.5} />

                            {/* Atomes d'Hydrogène périphériques */}
                            <mesh position={[2 * Math.cos(angle(i)), 2 * Math.sin(angle(i)), 0]}>
                                <sphereGeometry args={[0.18, 24, 24]} />
                                <meshStandardMaterial color={ATOM.H.color} emissive={ATOM.H.color} emissiveIntensity={0.3} />
                            </mesh>
                            {/* Liaison C-H */}
                            <Line points={[
                                [r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0],
                                [1.9 * Math.cos(angle(i)), 1.9 * Math.sin(angle(i)), 0]
                            ]} color="#EC4899" lineWidth={1.5} transparent opacity={0.3} />
                        </group>
                    ))}

                    {/* Cercle de délocalisation (Effet Quantique) */}
                    {showAromaticCircle && (
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[0.7, 0.06, 16, 100]} />
                            <MeshDistortMaterial
                                color="#EC4899"
                                emissive="#EC4899"
                                emissiveIntensity={5}
                                distort={0.4}
                                speed={3}
                                transparent
                                opacity={0.8}
                            />
                        </mesh>
                    )}
                </group>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="💎 Chambre de l'Aromatisme" className="w-[400px] border-pink-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-pink-400 font-black uppercase tracking-widest leading-tight">Cycles Cabonés Spéciaux</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Modèle Benzénique' : 'Défi de Hückel 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="💎" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-950 p-5 rounded-2xl border border-white/5 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                <div className="text-7xl font-black text-pink-500 text-right">C₆H₆</div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">Benzène</div>
                                <div className="text-[11px] text-pink-500 font-black uppercase tracking-[0.2em]">Noyau Aromatique Stable</div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setShowAromaticCircle(!showAromaticCircle);
                                if (phase === 'mission' && mission?.type === 'arom') completeObjective();
                            }}
                            className={`w-full py-4 rounded-2xl font-black text-xs transition-all transform active:scale-95 flex items-center justify-center gap-4 border-b-4 active:border-b-0 active:translate-y-1 ${showAromaticCircle
                                ? 'bg-pink-600 border-pink-800 text-white shadow-lg shadow-pink-900/40'
                                : 'bg-gray-800 border-black/40 text-gray-400 hover:bg-gray-700'}`}
                        >
                            <span className="text-xl">{showAromaticCircle ? '🌀' : '⚡'}</span>
                            <span>{showAromaticCircle ? 'SYSTÈME STABILISÉ' : 'DÉLOCALISER ÉLECTRONS π'}</span>
                            {showAromaticCircle && <span className="animate-ping w-2 h-2 rounded-full bg-white opacity-75" />}
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 bg-gray-950 rounded-2xl border border-white/5 group hover:border-pink-500/30 transition-all shadow-lg text-center">
                                <p className="text-[10px] text-gray-500 font-black uppercase mb-1 tracking-widest group-hover:text-pink-400 transition-colors">Électrons π</p>
                                <p className="text-xl font-black text-white italic">6 Mobiles</p>
                            </div>
                            <div
                                onClick={() => {
                                    if (phase === 'mission' && mission?.type === 'sym') completeObjective();
                                }}
                                className="p-4 bg-gray-950 rounded-2xl border border-white/5 group hover:border-pink-500/30 transition-all shadow-lg text-center cursor-pointer">
                                <p className="text-[10px] text-gray-500 font-black uppercase mb-1 tracking-widest group-hover:text-pink-400 transition-colors">Longueur Moy.</p>
                                <p className="text-xl font-black text-white uppercase tracking-tighter">1.40 Å</p>
                            </div>
                        </div>

                        <div className="p-5 bg-black/40 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden">
                            <p className="text-[10px] font-black text-pink-300 uppercase tracking-widest flex items-center gap-2">
                                <span className="p-1 bg-pink-500/20 rounded">⚛️</span> POSTULAT DE KÉKULÉ
                            </p>
                            <p className="text-[11px] text-gray-400 leading-relaxed italic pr-8">
                                "Les électrons ne sont pas fixes. Ils forment un nuage de probabilité parfaitement symétrique, rendant la molécule incroyablement résistante."
                            </p>
                            <div className="absolute bottom-4 right-4 text-2xl opacity-20">📜</div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Aromatisme Confirmé !"} points={mission?.points || 400} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C5: COMPOSÉS OXYGÉNÉS (Alcools, Aldéhydes, Cétones)
// ==========================================
export function ComposesOxygenesSim() {
    const groupRef = useRef();
    const [type, setType] = useState('alcool');
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    const missions = useMemo(() => [
        { id: 1, title: 'Identification Alcool', objective: 'Trouvez et affichez la molécule d\'Ethanol (Groupe hydroxyle -OH).', target: 'alcool', points: 300 },
        { id: 2, title: 'Fonction Carbonyle', objective: 'Localisez la Cétone (C=O interne à la chaîne).', target: 'cetone', points: 350 },
        { id: 3, title: 'Groupement Aldéhyde', objective: 'Identifiez l\'Aldéhyde (C=O en bout de chaîne).', target: 'aldehyde', points: 400 }
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

    const handleSelect = (t) => {
        setType(t);
        if (phase === 'mission' && mission && t === mission.target) {
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

    useFrame((state, delta) => {
        if (groupRef.current) groupRef.current.rotation.y += delta * 0.45;
    });

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <pointLight position={[-5, 5, -5]} intensity={1} color="#EF4444" />

            <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.5}>
                <group ref={groupRef} scale={1.6}>
                    {type === 'alcool' && (
                        <group>
                            {/* Éthanol: CH3-CH2-OH */}
                            <Sphere args={[0.32]} position={[-1.1, 0, 0]}><meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} /></Sphere>
                            <Sphere args={[0.32]} position={[0, 0, 0]}><meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} /></Sphere>
                            <Sphere args={[0.32]} position={[1.1, 0, 0]}><meshStandardMaterial color={ATOM.O.color} emissive={ATOM.O.color} emissiveIntensity={0.6} metalness={0.8} /></Sphere>
                            <Sphere args={[0.22]} position={[1.7, 0.45, 0]}><meshStandardMaterial color={ATOM.H.color} emissive={ATOM.H.color} emissiveIntensity={0.2} /></Sphere>

                            <Line points={[[-1.1, 0, 0], [0, 0, 0]]} color="#555" lineWidth={2} transparent opacity={0.6} />
                            <Line points={[[0, 0, 0], [1.1, 0, 0]]} color="#EF4444" lineWidth={3} transparent opacity={0.8} />
                            <Line points={[[1.1, 0, 0], [1.7, 0.45, 0]]} color="#EF4444" lineWidth={2} transparent opacity={0.8} />

                            <Text position={[1.1, -0.7, 0]} fontSize={0.18} color="#EF4444" font="/fonts/Inter-Bold.woff" anchorY="top">HYDROXYLE</Text>
                        </group>
                    )}
                    {type === 'aldehyde' && (
                        <group>
                            {/* Éthanal CH3-CHO */}
                            <Sphere args={[0.32]} position={[-0.7, 0, 0]}><meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} /></Sphere>
                            <Sphere args={[0.32]} position={[0.7, 0, 0]}><meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} /></Sphere>
                            <Sphere args={[0.28]} position={[0.7, 0.9, 0]}><meshStandardMaterial color={ATOM.O.color} emissive={ATOM.O.color} emissiveIntensity={0.8} metalness={0.8} /></Sphere>
                            <Sphere args={[0.18]} position={[1.4, -0.35, 0]}><meshStandardMaterial color={ATOM.H.color} emissive={ATOM.H.color} emissiveIntensity={0.2} /></Sphere>

                            <Line points={[[-0.7, 0, 0], [0.7, 0, 0]]} color="#555" lineWidth={2} transparent opacity={0.6} />
                            {/* Double liaison C=O */}
                            <Line points={[[0.58, 0.1, 0], [0.58, 0.8, 0]]} color="#F97316" lineWidth={3} transparent opacity={0.9} />
                            <Line points={[[0.82, 0.1, 0], [0.82, 0.8, 0]]} color="#F97316" lineWidth={3} transparent opacity={0.9} />
                            <Line points={[[0.7, 0, 0], [1.4, -0.35, 0]]} color="#555" lineWidth={1.5} transparent opacity={0.6} />

                            <Text position={[0.7, -0.8, 0]} fontSize={0.18} color="#F97316" font="/fonts/Inter-Bold.woff" anchorY="top">CARBONYLE (Bout)</Text>
                        </group>
                    )}
                    {type === 'cetone' && (
                        <group>
                            {/* Propanone CH3-CO-CH3 */}
                            <Sphere args={[0.32]} position={[-1.1, 0, 0]}><meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} /></Sphere>
                            <Sphere args={[0.32]} position={[0, 0, 0]}><meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} /></Sphere>
                            <Sphere args={[0.32]} position={[1.1, 0, 0]}><meshStandardMaterial color={ATOM.C.color} metalness={0.9} roughness={0.05} /></Sphere>
                            <Sphere args={[0.28]} position={[0, 0.9, 0]}><meshStandardMaterial color={ATOM.O.color} emissive={ATOM.O.color} emissiveIntensity={0.8} metalness={0.8} /></Sphere>

                            <Line points={[[-1.1, 0, 0], [0, 0, 0]]} color="#555" lineWidth={2} transparent opacity={0.6} />
                            <Line points={[[0, 0, 0], [1.1, 0, 0]]} color="#555" lineWidth={2} transparent opacity={0.6} />
                            {/* Double liaison C=O */}
                            <Line points={[[-0.12, 0.1, 0], [-0.12, 0.8, 0]]} color="#A855F7" lineWidth={3} transparent opacity={0.9} />
                            <Line points={[[0.12, 0.1, 0], [0.12, 0.8, 0]]} color="#A855F7" lineWidth={3} transparent opacity={0.9} />

                            <Text position={[0, -0.8, 0]} fontSize={0.18} color="#A855F7" font="/fonts/Inter-Bold.woff" anchorY="top">CARBONYLE (Interne)</Text>
                        </group>
                    )}
                </group>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Expert Composés Oxygénés" className="w-[420px] border-red-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-red-500 font-black uppercase tracking-widest leading-tight">Familles Fonctionnelles</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Modélisation Moléculaire' : 'Analyse de Fonctions 🎯'}</span>
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
                            {[
                                { id: 'alcool', label: 'Alcool', color: 'bg-red-600', border: 'border-red-800', shadow: 'shadow-red-900/40' },
                                { id: 'aldehyde', label: 'Aldéhyde', color: 'bg-orange-600', border: 'border-orange-800', shadow: 'shadow-orange-900/40' },
                                { id: 'cetone', label: 'Cétone', color: 'bg-purple-600', border: 'border-purple-800', shadow: 'shadow-purple-900/40' }
                            ].map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleSelect(cat.id)}
                                    className={`py-3 rounded-xl text-[10px] font-black uppercase transition-all transform active:scale-95 border-b-4 active:border-b-0 active:translate-y-1 ${type === cat.id
                                        ? `${cat.color} ${cat.border} ${cat.shadow} shadow-lg text-white`
                                        : 'bg-gray-800 border-black/40 hover:bg-gray-750 text-gray-500'}`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-950 p-5 rounded-2xl border border-white/5 relative overflow-hidden shadow-2xl">
                            {type === 'alcool' && (
                                <div className="animate-in slide-in-from-bottom duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 font-black tracking-tighter text-xs">OH</span>
                                        <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Groupe Hydroxyle</p>
                                    </div>
                                    <p className="text-xl font-bold text-white mb-2 italic">R — OH (Liaison Polarisée)</p>
                                    <p className="text-[11px] text-gray-400 leading-relaxed font-medium">Capable de former des liaisons hydrogène. Très soluble, point d'ébullition élevé et réactif vis-à-vis de l'oxydation.</p>
                                </div>
                            )}
                            {type === 'aldehyde' && (
                                <div className="animate-in slide-in-from-bottom duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-8 h-8 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500 font-black tracking-tighter text-xs">C=O</span>
                                        <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Groupe Carbonyle (Bout)</p>
                                    </div>
                                    <p className="text-xl font-bold text-white mb-2 italic">R — CHO</p>
                                    <p className="text-[11px] text-gray-400 leading-relaxed font-medium">Réducteur fort. Donne un test positif à la liqueur de Fehling (précipité rouge brique) et au réactif de Schiff.</p>
                                </div>
                            )}
                            {type === 'cetone' && (
                                <div className="animate-in slide-in-from-bottom duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-500 font-black tracking-tighter text-xs">C=O</span>
                                        <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Groupe Carbonyle (Interne)</p>
                                    </div>
                                    <p className="text-xl font-bold text-white mb-2 italic">R — CO — R'</p>
                                    <p className="text-[11px] text-gray-400 leading-relaxed font-medium">Stable vis-à-vis des oxydants ménagés. Test DNPH positif (précipité jaune-orangé) mais Fehling négatif.</p>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-white/10 transition-colors">
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest group-hover:text-white transition-colors">Molécule de démonstration</p>
                                <span className="px-2 py-0.5 bg-gray-900 rounded-full text-[9px] font-black text-emerald-400">PURE</span>
                            </div>
                            <div className="flex items-center justify-between text-sm font-mono">
                                <span className="text-gray-300">
                                    {type === 'alcool' ? 'Éthanol' : type === 'aldehyde' ? 'Éthanal' : 'Propanone'}
                                </span>
                                <span className="text-white font-black">
                                    {type === 'alcool' ? 'CH₃CH₂OH' : type === 'aldehyde' ? 'CH₃CHO' : 'CH₃COCH₃'}
                                </span>
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Famille de Composés Validée !" points={mission?.points || 300} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C6-C9: REDOX (Règle du Gamma)
// ==========================================
// ==========================================
// C6-C9: REDOX (Défi Corrosion)
// ==========================================
export function RedoxGammaSim() {
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    const [oxSelected, setOxSelected] = useState(null);
    const [redSelected, setRedSelected] = useState(null);

    const redoxCouples = [
        { id: 1, ox: 'Au³⁺', red: 'Au', e0: 1.50, color: '#FFD700' },
        { id: 2, ox: 'Ag⁺', red: 'Ag', e0: 0.80, color: '#C0C0C0' },
        { id: 3, ox: 'Cu²⁺', red: 'Cu', e0: 0.34, color: '#B87333' },
        { id: 4, ox: 'H⁺', red: 'H₂', e0: 0.00, color: '#FFFFFF' },
        { id: 5, ox: 'Fe²⁺', red: 'Fe', e0: -0.44, color: '#A19D94' },
        { id: 6, ox: 'Zn²⁺', red: 'Zn', e0: -0.76, color: '#71706E' },
        { id: 7, ox: 'Al³⁺', red: 'Al', e0: -1.66, color: '#E5E4E2' }
    ];

    const missions = useMemo(() => [
        { id: 1, title: 'Corrosion du Zinc', objective: 'Sélectionnez l\'Oxydant H⁺ et le Réducteur Zinc pour simuler l\'attaque acide.', targetOx: 'H⁺', targetRed: 'Zn' },
        { id: 2, title: 'Dorure par Déplacement', objective: 'Récupérez l\'Or (Au) en utilisant du Cuivre (Cu).', targetOx: 'Au³⁺', targetRed: 'Cu' },
        { id: 3, title: 'Argenture vive', objective: 'Réduisez les ions Argent (Ag⁺) avec du Zinc.', targetOx: 'Ag⁺', targetRed: 'Zn' }
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

    const checkMission = () => {
        if (!mission || !oxSelected || !redSelected) return;
        const ox = redoxCouples.find(c => c.id === oxSelected);
        const red = redoxCouples.find(c => c.id === redSelected);

        // Règle du Gamma : Réaction possible si E0(Ox) > E0(Red)
        if (ox.ox === mission.targetOx && red.red === mission.targetRed && ox.e0 > red.e0) {
            setScore(s => s + 450);
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        setOxSelected(null);
        setRedSelected(null);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            {/* Échelle des potentiels */}
            <group position={[-3, 0, 0]}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.2, 5, 0.1]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
                <Text position={[0, 2.8, 0]} fontSize={0.2} color="white">E° (V)</Text>
                {redoxCouples.map((c, i) => (
                    <group key={c.id} position={[0, (c.e0 * 1.5), 0]}>
                        <mesh position={[0.2, 0, 0]}>
                            <boxGeometry args={[2.5, 0.05, 0.05]} />
                            <meshStandardMaterial color={c.color} emissive={c.color} emissiveIntensity={0.2} />
                        </mesh>
                        <Text position={[1.5, 0.2, 0]} fontSize={0.15} color={c.color}>{c.ox} / {c.red}</Text>
                        <Text position={[-0.4, 0, 0]} fontSize={0.15} color="gray">{c.e0.toFixed(2)}</Text>
                    </group>
                ))}
            </group>

            {/* Visualisation Réaction */}
            <group position={[2, 0, 0]}>
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[1, 1, 3, 32]} />
                    <meshPhysicalMaterial color="#60A5FA" transmission={0.9} transparent opacity={0.2} roughness={0.1} />
                </mesh>

                {oxSelected && (
                    <Float speed={5} rotationIntensity={2}>
                        <Text position={[0, 1, 0]} fontSize={0.3} color={redoxCouples.find(c => c.id === oxSelected).color}>
                            {redoxCouples.find(c => c.id === oxSelected).ox}
                        </Text>
                    </Float>
                )}
                {redSelected && (
                    <mesh position={[0, -0.5, 0]}>
                        <boxGeometry args={[0.5, 1.5, 0.1]} />
                        <meshStandardMaterial color={redoxCouples.find(c => c.id === redSelected).color} metalness={1} roughness={0.2} />
                    </mesh>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Station d'Oxydoréduction" className="w-[420px] border-yellow-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-yellow-500 font-black uppercase tracking-widest leading-tight">Potentiels Standard</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Analyse Redox' : 'Défi Règle du Gamma 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="⚡" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center">Oxydants (Captent e⁻)</p>
                                <div className="grid grid-cols-1 gap-1">
                                    {redoxCouples.map(c => (
                                        <button
                                            key={c.id}
                                            onClick={() => setOxSelected(c.id)}
                                            className={`py-1.5 px-2 rounded-lg text-[10px] font-black transition-all border ${oxSelected === c.id
                                                ? 'bg-blue-600 border-white text-white shadow-lg shadow-blue-900/40'
                                                : 'bg-gray-800 border-white/5 text-gray-400 hover:bg-gray-700'}`}
                                        >
                                            {c.ox}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest text-center">Réducteurs (Cèdent e⁻)</p>
                                <div className="grid grid-cols-1 gap-1">
                                    {redoxCouples.slice().reverse().map(c => (
                                        <button
                                            key={c.id}
                                            onClick={() => setRedSelected(c.id)}
                                            className={`py-1.5 px-2 rounded-lg text-[10px] font-black transition-all border ${redSelected === c.id
                                                ? 'bg-red-600 border-white text-white shadow-lg shadow-red-900/40'
                                                : 'bg-gray-800 border-white/5 text-gray-400 hover:bg-gray-700'}`}
                                        >
                                            {c.red}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={checkMission}
                            disabled={!oxSelected || !redSelected}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-amber-600 font-black text-xs transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:grayscale uppercase tracking-widest"
                        >
                            Vériifer la Réaction 🧪
                        </button>

                        <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-[10px] font-black text-gray-500 uppercase">Équation Bilan</p>
                                {oxSelected && redSelected && (
                                    <span className={`text-[10px] font-black ${redoxCouples.find(c => c.id === oxSelected).e0 > redoxCouples.find(c => c.id === redSelected).e0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {redoxCouples.find(c => c.id === oxSelected).e0 > redoxCouples.find(c => c.id === redSelected).e0 ? 'SPONTANÉE ✅' : 'IMPOSSIBLE ❌'}
                                    </span>
                                )}
                            </div>
                            <p className="font-mono text-[11px] text-white overflow-x-auto whitespace-nowrap">
                                {oxSelected && redSelected ? (
                                    <>
                                        {redoxCouples.find(c => c.id === oxSelected).ox} + {redoxCouples.find(c => c.id === redSelected).red} → {redoxCouples.find(c => c.id === oxSelected).red} + {redoxCouples.find(c => c.id === redSelected).ox}
                                    </>
                                ) : 'Sélectionnez un couple...'}
                            </p>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Réaction Validée !"} points={450} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C10: ÉLECTROLYSE (Loi de Faraday)
// ==========================================
// ==========================================
// C10: ÉLECTROLYSE (Atelier d'Orfèvre)
// ==========================================
export function ElectrolyseSim() {
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    const [current, setCurrent] = useState(2); // Ampères
    const [time, setTime] = useState(10); // Minutes
    const [metal, setMetal] = useState('Cu');

    const metals = {
        Cu: { name: 'Cuivre', M: 63.5, n: 2, color: '#B87333' },
        Ag: { name: 'Argent', M: 107.9, n: 1, color: '#C0C0C0' },
        Au: { name: 'Or', M: 197.0, n: 3, color: '#FFD700' }
    };

    const missions = useMemo(() => [
        { id: 1, title: 'Électrodéposition de Cuivre', objective: 'Déposez exactement 0.40g de Cuivre (±0.02g).', targetMass: 0.40, metal: 'Cu' },
        { id: 2, title: 'Placage d\'Argent', objective: 'Déposez 1.35g d\'Argent pour ce bijou (±0.05g).', targetMass: 1.35, metal: 'Ag' },
        { id: 3, title: 'L\'Or des Rois', objective: 'Une dorure de luxe nécessite 0.82g d\'Or (±0.03g).', targetMass: 0.82, metal: 'Au' }
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

    const m = metals[metal];
    const F = 96500;
    const mass = (current * (time * 60) * m.M) / (m.n * F);

    const checkMission = () => {
        if (!mission) return;
        const diff = Math.abs(mass - mission.targetMass);
        if (diff < 0.05 && metal === mission.metal) {
            setScore(s => s + 500);
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

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            {/* Cuve à électrolyse */}
            <mesh position={[0, -1, 0]}>
                <boxGeometry args={[4, 2, 2]} />
                <meshPhysicalMaterial color="#3B82F6" transmission={0.9} transparent opacity={0.15} roughness={0.05} />
            </mesh>

            {/* Électrodes */}
            <group position={[-1, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.2, 3, 0.5]} />
                    <meshStandardMaterial color="#444" metalness={1} />
                </mesh>
                <Text position={[0, 1.8, 0]} fontSize={0.2} color="white">ANODE (+)</Text>
            </group>
            <group position={[1, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.2, 3, 0.5]} />
                    <meshStandardMaterial color={m.color} metalness={1} roughness={0.3} />
                </mesh>
                <Text position={[0, 1.8, 0]} fontSize={0.2} color="white">CATHODE (-)</Text>

                {/* Couche de métal déposée */}
                <mesh position={[0.11, 0, 0]}>
                    <boxGeometry args={[0.05, 3 * (mass / 2), 0.55]} />
                    <meshStandardMaterial color={m.color} emissive={m.color} emissiveIntensity={0.3} />
                </mesh>
                <Text position={[0, -1.8, 0]} fontSize={0.2} color={m.color} font="/fonts/Inter-Bold.woff">DEPOT: {mass.toFixed(3)}g</Text>
            </group>

            {/* Bulles Animation */}
            {Array.from({ length: 15 }).map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={0} floatIntensity={1} position={[
                    (Math.random() - 0.5) * 0.5 - 1,
                    -1.5 + Math.random() * 1.5,
                    (Math.random() - 0.5) * 0.5
                ]}>
                    <mesh opacity={0.5} transparent>
                        <sphereGeometry args={[0.03]} />
                        <meshStandardMaterial color="white" transparent opacity={0.4} />
                    </mesh>
                </Float>
            ))}

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Atelier de Galvanoplastie" className="w-[400px] border-blue-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest leading-tight">Lois de Faraday</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Simulation' : 'Défi Orfèvrerie 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="💎" />
                        </div>
                    )}

                    <div className="space-y-5">
                        <div className="grid grid-cols-3 gap-2">
                            {Object.keys(metals).map(k => (
                                <button
                                    key={k}
                                    onClick={() => setMetal(k)}
                                    className={`py-2 rounded-xl text-[10px] font-black transition-all border ${metal === k
                                        ? 'bg-blue-600 border-white shadow-lg'
                                        : 'bg-gray-800 border-white/5 text-gray-400'}`}
                                >
                                    {metals[k].name.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4 px-1">
                            <div>
                                <div className="flex justify-between text-[10px] text-gray-500 font-black uppercase mb-1">
                                    <span>Intensité du Courant</span>
                                    <span className="text-blue-400">{current.toFixed(1)} A</span>
                                </div>
                                <input type="range" min="0.1" max="10" step="0.1" value={current} onChange={e => setCurrent(Number(e.target.value))}
                                    className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                            </div>

                            <div>
                                <div className="flex justify-between text-[10px] text-gray-500 font-black uppercase mb-1">
                                    <span>Durée de l'opération</span>
                                    <span className="text-blue-400">{time} min</span>
                                </div>
                                <input type="range" min="1" max="60" value={time} onChange={e => setTime(Number(e.target.value))}
                                    className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                            </div>
                        </div>

                        <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                            <div className="flex justify-between items-center relative z-10">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">Masse déposée</span>
                                    <span className="text-3xl font-black text-white">{mass.toFixed(3)}<span className="text-sm font-normal text-gray-500 ml-1">g</span></span>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none block mb-1">Rendement</span>
                                    <span className="text-sm font-black text-emerald-400">100% IDÉAL</span>
                                </div>
                            </div>
                        </div>

                        {phase === 'mission' && (
                            <button onClick={checkMission}
                                className="w-full py-4 rounded-xl bg-blue-600 shadow-lg shadow-blue-900/40 font-black text-xs uppercase tracking-widest active:scale-95 transition-transform"
                            >
                                Finaliser le Placage ⚡
                            </button>
                        )}

                        <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/20">
                            <p className="text-[10px] font-black text-blue-300 mb-1 uppercase tracking-tighter">Formule de Faraday</p>
                            <div className="font-mono text-[10px] text-white">
                                m = (I × t × M) / (n × F)
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message={mission?.title || "Dépôt Parfait !"} points={500} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C11: VOIE SÈCHE (Aluminothermie)
// ==========================================
export function VoieSecheSimulation() {
    const [phase, setPhase] = useState('explore');
    const [isReacting, setIsReacting] = useState(false);
    const [temp, setTemp] = useState(25);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    const missions = useMemo(() => [
        { id: 1, title: 'Fusion de l\'Aluminium', objective: 'Atteignez la température de réaction critique (> 1200°C) pour libérer le fer liquide.', targetTemp: 1200 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const handleReaction = () => {
        setIsReacting(true);
        setTemp(25);
        let currentTemp = 25;
        const interval = setInterval(() => {
            currentTemp += 25;
            setTemp(currentTemp);
            if (currentTemp > 2500) {
                clearInterval(interval);
                setIsReacting(false);
                if (phase === 'mission' && currentTemp >= mission.targetTemp) {
                    setScore(s => s + 600);
                    setShowSuccess(true);
                }
            }
        }, 20);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setTemp(25);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(45);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 10, 5]} intensity={1.5} color={temp > 1000 ? '#F97316' : '#FFFFFF'} />

            {/* Creuset */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[1.2, 0.8, 2, 32]} />
                <meshStandardMaterial color="#333" roughness={1} metalness={0.1} />
            </mesh>

            {/* Mélange réactionnel */}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[1.15, 0.75, 1.5, 32]} />
                <meshStandardMaterial color={temp > 1000 ? '#FF4400' : '#888'} emissive={temp > 1000 ? '#FF2200' : '#000'} emissiveIntensity={temp / 2000} />
            </mesh>

            {/* Étincelles/Lumière de réaction */}
            {isReacting && temp > 1000 && (
                <Float speed={10} rotationIntensity={5} floatIntensity={2}>
                    <mesh position={[0, 1, 0]}>
                        <sphereGeometry args={[0.5]} />
                        <MeshDistortMaterial color="#FFDD00" emissive="#FF8800" emissiveIntensity={5} distort={0.6} speed={5} />
                    </mesh>
                </Float>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="🔥 Four à Voie Sèche" className="w-[380px] border-orange-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-orange-400 font-black uppercase tracking-widest leading-tight">Aluminothermie</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Réaction Thermite' : 'Mission Extraction 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="🔥" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="p-4 bg-gray-950 rounded-2xl border border-white/5 relative overflow-hidden text-center group">
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Température de Reaction</p>
                            <span className={`text-4xl font-black transition-colors duration-500 ${temp > 1200 ? 'text-red-500' : 'text-orange-400'}`}>
                                {temp}<span className="text-lg ml-1">°C</span>
                            </span>
                            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" style={{ opacity: temp / 2500 }} />
                        </div>

                        <button
                            onClick={handleReaction}
                            disabled={isReacting}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 ${isReacting
                                ? 'bg-orange-950 text-orange-500 grayscale cursor-not-allowed'
                                : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500'}`}
                        >
                            {isReacting ? 'Réaction en cours...' : 'Amorcer la Thermite ⚡'}
                        </button>

                        <div className="p-4 bg-black/40 rounded-2xl border border-white/5 space-y-3">
                            <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest flex items-center gap-2">
                                <span>🧪</span> ÉQUATION BILAN
                            </p>
                            <div className="font-mono text-[11px] text-white overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
                                <span className="text-gray-400">Fe₂O₃</span>
                                <span className="mx-1.5">+</span>
                                <span className="text-blue-400 font-black">2Al</span>
                                <span className="mx-2 text-red-500">→</span>
                                <span className="text-orange-400 font-black">2Fe</span>
                                <span className="mx-1.5">+</span>
                                <span className="text-gray-400">Al₂O₃</span>
                                <span className="ml-2 text-red-500 font-black">+ Q</span>
                            </div>
                            <p className="text-[9px] text-gray-500 leading-relaxed font-bold">
                                Note: La réaction est extrêmement exothermique, la chaleur libérée (Q) permet la fusion du fer.
                            </p>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Fer Liquide Extrait !" points={600} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// Keep old exports for compatibility
export { ChimieOrgaGeneralSim as ChimieOrganiqueSim };
export { RedoxGammaSim as RedoxElectrolyseSim };
