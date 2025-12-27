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
    C: { color: '#333', r: 0.4 },
    H: { color: '#FFF', r: 0.25 },
    O: { color: '#F00', r: 0.38 },
    N: { color: '#00F', r: 0.38 },
    Cl: { color: '#0F0', r: 0.45 },
};

// trigSuccess removal (using SuccessOverlay now)

// ==========================================
// C1: GÉNÉRALITÉS CHIMIE ORGANIQUE (Tétravalence du C)
// ==========================================
export function ChimieOrgaGeneralSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);

    // États Physiques
    const [showLabels, setShowLabels] = useState(true);
    const groupRef = useRef();

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Analyse Tétraédrique', objective: 'Affichez les labels pour identifier le Cα.', showLabels: true },
        { id: 2, title: 'Géométrie Moléculaire', objective: 'Observez la molécule sous 3 angles différents.', requiredRotation: true },
        { id: 3, title: 'Calcul de Valence', objective: 'Vérifiez les 4 liaisons du carbone central.', checkValence: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(30);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && !showSuccess) {
            setPhase('explore');
            setMission(null);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess]);

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setTimeLeft(30);
        } else {
            setPhase('explore');
            setMission(null);
            setScore(prev => prev + 500);
        }
    };

    const completeObjective = () => {
        setScore(prev => prev + 200);
        setShowSuccess(true);
    };

    useFrame((state) => {
        if (groupRef.current) groupRef.current.rotation.y += 0.005;
        if (phase === 'mission' && mission?.id === 1 && showLabels) {
            // Auto-complete if they enable labels
        }
    });

    // Méthane CH4 - Tétraèdre parfait
    const hPos = [
        [0.6, 0.6, 0.6], [-0.6, -0.6, 0.6], [-0.6, 0.6, -0.6], [0.6, -0.6, -0.6]
    ];

    return (
        <group>
            <OrbitControls />

            {/* Scène 3D Améliorée */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group ref={groupRef} scale={2}>
                    {/* Carbone central avec effet Glow */}
                    <mesh>
                        <sphereGeometry args={[ATOM.C.r, 32, 32]} />
                        <meshStandardMaterial color={ATOM.C.color} metalness={0.8} roughness={0.2} />
                    </mesh>
                    {showLabels && <Text position={[0, 0.6, 0]} fontSize={0.2} color="#00F5D4" font="/fonts/Geist-Black.ttf">C</Text>}

                    {/* 4 Hydrogènes avec liaisons holographiques */}
                    {hPos.map((p, i) => (
                        <group key={i}>
                            <mesh position={p}>
                                <sphereGeometry args={[ATOM.H.r, 24, 24]} />
                                <meshStandardMaterial color={ATOM.H.color} emissive="#fff" emissiveIntensity={0.2} />
                            </mesh>
                            <Line points={[[0, 0, 0], p]} color="#00F5D4" lineWidth={2} transparent opacity={0.6} />
                            {showLabels && <Text position={[p[0] * 1.3, p[1] * 1.3, p[2] * 1.3]} fontSize={0.15} color="#94a3b8">H</Text>}
                        </group>
                    ))}
                </group>
            </Float>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Tétravalence du Carbone" className="w-[380px] border-cyan-500/30">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <GradeBadge score={score} />
                                <ChallengeTimer timeLeft={timeLeft} maxTime={30} />
                            </div>
                            <MissionObjective objective={mission.objective} />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                            <p className="text-[11px] text-cyan-300 uppercase font-black mb-1">Structure de Base</p>
                            <p className="text-sm text-white">Méthane <span className="font-bold text-[#00F5D4] font-mono text-lg">CH₄</span></p>
                            <p className="text-[10px] text-gray-400 mt-1">Le carbone forme 4 liaisons covalentes parfaites.</p>
                        </div>

                        <button
                            onClick={() => {
                                setShowLabels(!showLabels);
                                if (phase === 'mission' && mission?.id === 1) completeObjective();
                            }}
                            className={`w-full py-3 rounded-xl font-black text-[10px] transition-all flex items-center justify-center gap-2 ${showLabels ? 'bg-cyan-600 shadow-lg shadow-cyan-600/20' : 'bg-gray-800 hover:bg-gray-700'}`}>
                            <span>{showLabels ? 'DÉSACTIVER LABELS' : 'ACTIVER LABELS HOLOGRAPHIQUES'}</span>
                            {showLabels && <span className="animate-pulse">●</span>}
                        </button>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 bg-black/40 rounded-lg border border-white/5">
                                <p className="text-[9px] text-gray-500 uppercase">Angles</p>
                                <p className="text-sm font-bold text-white">109.5°</p>
                            </div>
                            <div className="p-2 bg-black/40 rounded-lg border border-white/5">
                                <p className="text-[9px] text-gray-500 uppercase">Géométrie</p>
                                <p className="text-sm font-bold text-white">Tétraèdre</p>
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={mission?.title || "Objectif atteint !"}
                points={200}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C2: ALCANES (Nomenclature + Combustion)
// ==========================================
export function AlcanesSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [n, setN] = useState(3);
    const names = ['', 'Méthane', 'Éthane', 'Propane', 'Butane', 'Pentane', 'Hexane', 'Heptane', 'Octane'];

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Synthèse Butane', objective: 'Ajustez la chaîne pour former du Butane (n=4).', targetN: 4 },
        { id: 2, title: 'Chaîne Longue', objective: 'Modélisez l\'Octane (n=8).', targetN: 8 },
        { id: 3, title: 'Combustion Éthane', objective: 'Sélectionnez l\'Éthane (n=2).', targetN: 2 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess]);

    const handleNChange = (val) => {
        setN(val);
        if (phase === 'mission' && val === mission?.targetN) {
            setScore(prev => prev + 300);
            setShowSuccess(true);
        }
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
            <OrbitControls />
            <group scale={1.5}>
                {structure.atoms.map((a, k) => (
                    <group key={k}>
                        <mesh position={a.pos}>
                            <sphereGeometry args={[a.type === 'C' ? ATOM.C.r : ATOM.H.r, 24, 24]} />
                            <meshStandardMaterial
                                color={a.type === 'C' ? ATOM.C.color : ATOM.H.color}
                                metalness={0.6}
                                roughness={0.3}
                            />
                        </mesh>
                        {a.parent && <Line points={[a.parent, a.pos]} color="#00F5D4" lineWidth={1} transparent opacity={0.4} />}
                    </group>
                ))}

                {Array.from({ length: n - 1 }).map((_, i) => {
                    const carbons = structure.atoms.filter(a => a.type === 'C');
                    return <Line key={'cc' + i} points={[carbons[i].pos, carbons[i + 1].pos]} color="#00F5D4" lineWidth={4} />;
                })}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⛽ Raffinerie d'Alcanes" className="w-[400px] border-orange-500/30">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    {phase === 'mission' && mission && (
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <GradeBadge score={score} />
                                <ChallengeTimer timeLeft={timeLeft} maxTime={45} />
                            </div>
                            <MissionObjective objective={mission.objective} />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <label className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Carbones: {n}</label>
                            <span className="text-2xl font-black text-white">{names[n]}</span>
                        </div>

                        <div className="relative h-10 flex items-center">
                            <input
                                type="range" min="1" max="8" value={n}
                                onChange={e => handleNChange(Number(e.target.value))}
                                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                                <p className="text-[9px] text-gray-500 uppercase">Formulaire Brut</p>
                                <p className="text-lg font-mono font-bold text-orange-400">C<sub>{n}</sub>H<sub>{2 * n + 2}</sub></p>
                            </div>
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                                <p className="text-[9px] text-gray-500 uppercase">État (25°C)</p>
                                <p className="text-sm font-bold text-white">{n < 5 ? 'Gaz' : 'Liquide'}</p>
                            </div>
                        </div>

                        <div className="p-3 bg-orange-500/5 rounded-xl border border-orange-500/20">
                            <p className="text-[10px] font-bold text-orange-300 mb-2 uppercase tracking-tighter">Équation de Combustion</p>
                            <div className="font-mono text-[11px] text-white overflow-x-auto whitespace-nowrap">
                                C<sub>{n}</sub>H<sub>{2 * n + 2}</sub> + {(3 * n + 1) / 2}O<sub>2</sub> → {n}CO<sub>2</sub> + {n + 1}H<sub>2</sub>O
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Alcène ${names[n]} identifié !`}
                points={300}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C3: ALCÈNES (Double liaison)
// ==========================================
export function AlcenesSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const groupRef = useRef();
    const [showDoubleBond, setShowDoubleBond] = useState(true);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Analyse d\'Insaturation', objective: 'Localisez la double liaison C=C.', checkBond: true },
        { id: 2, title: 'Réactivité π', objective: 'Observez la densité électronique entre les C.', checkDensity: true },
        { id: 3, title: 'Géométrie Plane', objective: 'Vérifiez l\'alignement des atomes.', checkGeometry: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess]);

    const completeObjective = () => {
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

    useFrame((state) => {
        if (groupRef.current) groupRef.current.rotation.y += 0.005;
    });

    return (
        <group>
            <OrbitControls />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
                <group ref={groupRef} scale={1.5}>
                    {/* Éthène C2H4 */}
                    <mesh position={[-0.6, 0, 0]}>
                        <sphereGeometry args={[0.35, 32, 32]} />
                        <meshStandardMaterial color="#333" metalness={0.8} />
                    </mesh>
                    <mesh position={[0.6, 0, 0]}>
                        <sphereGeometry args={[0.35, 32, 32]} />
                        <meshStandardMaterial color="#333" metalness={0.8} />
                    </mesh>

                    {/* Double liaison Holographique */}
                    {showDoubleBond && (
                        <>
                            <mesh position={[0, 0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.04, 0.04, 1, 16]} />
                                <meshStandardMaterial color="#00FF00" emissive="#00FF00" emissiveIntensity={2} transparent opacity={0.6} />
                            </mesh>
                            <mesh position={[0, -0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <cylinderGeometry args={[0.04, 0.04, 1, 16]} />
                                <meshStandardMaterial color="#00FF00" emissive="#00FF00" emissiveIntensity={2} transparent opacity={0.6} />
                            </mesh>
                        </>
                    )}

                    {/* Hydrogènes */}
                    <group>
                        <mesh position={[-1.1, 0.5, 0]}>
                            <sphereGeometry args={[0.2, 16, 16]} />
                            <meshStandardMaterial color="#FFF" />
                        </mesh>
                        <mesh position={[-1.1, -0.5, 0]}>
                            <sphereGeometry args={[0.2, 16, 16]} />
                            <meshStandardMaterial color="#FFF" />
                        </mesh>
                        <mesh position={[1.1, 0.5, 0]}>
                            <sphereGeometry args={[0.2, 16, 16]} />
                            <meshStandardMaterial color="#FFF" />
                        </mesh>
                        <mesh position={[1.1, -0.5, 0]}>
                            <sphereGeometry args={[0.2, 16, 16]} />
                            <meshStandardMaterial color="#FFF" />
                        </mesh>

                        <Line points={[[-0.6, 0, 0], [-1.1, 0.5, 0]]} color="#00FF00" lineWidth={1} transparent opacity={0.3} />
                        <Line points={[[-0.6, 0, 0], [-1.1, -0.5, 0]]} color="#00FF00" lineWidth={1} transparent opacity={0.3} />
                        <Line points={[[0.6, 0, 0], [1.1, 0.5, 0]]} color="#00FF00" lineWidth={1} transparent opacity={0.3} />
                        <Line points={[[0.6, 0, 0], [1.1, -0.5, 0]]} color="#00FF00" lineWidth={1} transparent opacity={0.3} />
                    </group>
                </group>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧬 Laboratoire Alcènes" className="w-[380px] border-green-500/30">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    {phase === 'mission' && mission && (
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <GradeBadge score={score} />
                                <ChallengeTimer timeLeft={timeLeft} maxTime={45} />
                            </div>
                            <MissionObjective objective={mission.objective} />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                            <p className="text-[11px] text-green-300 uppercase font-black mb-1">Structure de Base</p>
                            <p className="text-xl font-black text-white">Éthène <span className="text-green-400 font-mono">C₂H₄</span></p>
                            <p className="text-[10px] text-gray-400 mt-1">L'insaturation C=C est le centre de réactivité.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => {
                                    setShowDoubleBond(!showDoubleBond);
                                    if (phase === 'mission' && mission?.id === 1) completeObjective();
                                }}
                                className={`p-3 rounded-xl font-bold text-[10px] transition-all flex flex-col items-center gap-2 ${showDoubleBond ? 'bg-green-600/20 border-green-500' : 'bg-gray-800 border-transparent'} border text-white`}>
                                <span className="text-lg">⚡</span>
                                <span>DOUBLE LIAISON</span>
                            </button>
                            <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-center">
                                <p className="text-[9px] text-gray-500 uppercase">Hybridation</p>
                                <p className="text-sm font-bold text-white">sp² (Plan)</p>
                            </div>
                        </div>

                        <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                            <p className="text-[10px] font-bold text-yellow-400 mb-2 uppercase">Réactions Clés</p>
                            <ul className="text-[11px] text-gray-300 space-y-1">
                                <li className="flex items-center gap-2"><span className="text-green-500">•</span> Hydrogénation (+H₂)</li>
                                <li className="flex items-center gap-2"><span className="text-green-500">•</span> Halogénation (+Br₂)</li>
                                <li className="flex items-center gap-2"><span className="text-green-500">•</span> Hydratation (+H₂O)</li>
                            </ul>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Liaison π analysée !`}
                points={350}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C4: BENZÈNE (Cycle aromatique)
// ==========================================
export function BenzeneSim() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    // États Physiques
    const groupRef = useRef();
    const [showAromaticCircle, setShowAromaticCircle] = useState(true);

    // Missions Config
    const missions = useMemo(() => [
        { id: 1, title: 'Cercle de Mésomérie', objective: 'Activez la délocalisation électronique.', checkArom: true },
        { id: 2, title: 'Symétrie Hexagonale', objective: 'Analysez les angles de liaison (120°).', checkSym: true },
        { id: 3, title: 'Calcul de Formule', objective: 'Vérifiez les 6 C et 6 H du cycle.', checkForm: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess]);

    const completeObjective = () => {
        setScore(prev => prev + 400);
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

    useFrame((state) => {
        if (groupRef.current) groupRef.current.rotation.y += 0.003;
    });

    const angle = (i) => (i * Math.PI * 2) / 6;
    const r = 1.2;

    return (
        <group>
            <OrbitControls />
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                <group ref={groupRef}>
                    {/* 6 Carbones en hexagone */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <group key={i}>
                            <mesh position={[r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0]}>
                                <sphereGeometry args={[0.3, 32, 32]} />
                                <meshStandardMaterial color="#333" metalness={0.9} />
                            </mesh>
                            {/* Liaison vers le suivant */}
                            <Line points={[
                                [r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0],
                                [r * Math.cos(angle(i + 1)), r * Math.sin(angle(i + 1)), 0]
                            ]} color="#ec4899" lineWidth={2} transparent opacity={0.6} />

                            {/* H vers l'extérieur */}
                            <mesh position={[1.8 * Math.cos(angle(i)), 1.8 * Math.sin(angle(i)), 0]}>
                                <sphereGeometry args={[0.15, 16, 16]} />
                                <meshStandardMaterial color="#FFF" />
                            </mesh>
                            <Line points={[
                                [r * Math.cos(angle(i)), r * Math.sin(angle(i)), 0],
                                [1.7 * Math.cos(angle(i)), 1.7 * Math.sin(angle(i)), 0]
                            ]} color="#ec4899" lineWidth={1} transparent opacity={0.3} />
                        </group>
                    ))}

                    {/* Cercle central (délocalisation) avec effet Glitch/Glow */}
                    {showAromaticCircle && (
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[0.6, 0.04, 16, 100]} />
                            <MeshDistortMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={3} distort={0.2} speed={5} />
                        </mesh>
                    )}
                </group>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="💎 Chambre du Benzène" className="w-[380px] border-pink-500/30">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    {phase === 'mission' && mission && (
                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <GradeBadge score={score} />
                                <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            </div>
                            <MissionObjective objective={mission.objective} />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20 text-center">
                            <p className="text-[10px] text-pink-300 font-black uppercase tracking-widest mb-1">Aromatisme</p>
                            <p className="text-2xl font-black text-white">Benzène <span className="text-pink-400 font-mono">C₆H₆</span></p>
                        </div>

                        <button
                            onClick={() => {
                                setShowAromaticCircle(!showAromaticCircle);
                                if (phase === 'mission' && mission?.id === 1) completeObjective();
                            }}
                            className={`w-full py-4 rounded-xl font-black text-[11px] transition-all flex items-center justify-center gap-2 ${showAromaticCircle ? 'bg-pink-600 shadow-lg shadow-pink-600/20' : 'bg-gray-800'}`}>
                            <span>{showAromaticCircle ? 'MASQUER DÉLOCALISATION' : 'ACTIVER CHAMP π'}</span>
                            {showAromaticCircle && <span className="animate-pulse">●</span>}
                        </button>

                        <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                            <p className="text-[10px] font-bold text-yellow-400 mb-2 uppercase">Propriétés Électroniques</p>
                            <div className="space-y-1 text-[11px] text-gray-300">
                                <p>• 6 Électrons π délocalisés</p>
                                <p>• Longueur de liaison unique : 1.40 Å</p>
                                <p>• Énergie de résonance élevée</p>
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Stabilité aromatique confirmée !`}
                points={400}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C5: COMPOSÉS OXYGÉNÉS (Alcools, Aldéhydes, Cétones)
// ==========================================
export function ComposesOxygenesSim() {
    const [type, setType] = useState('alcool');
    const groupRef = useRef();
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    const missions = useMemo(() => [
        { id: 1, title: 'Identification Alcool', objective: 'Affichez la molécule d\'Alcool (Groupe -OH).', target: 'alcool' },
        { id: 2, title: 'Fonction Carbonyle', objective: 'Trouvez la Cétone (C=O interne).', target: 'cetone' },
        { id: 3, title: 'Groupement Aldéhyde', objective: 'Localisez l\'Aldéhyde en bout de chaîne.', target: 'aldehyde' }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.floor(Math.random() * missions.length)]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    const handleSelect = (t) => {
        setType(t);
        if (phase === 'mission' && mission && t === mission.target) {
            setScore(s => s + 300);
            setShowSuccess(true);
        }
    };

    useFrame(() => { if (groupRef.current) groupRef.current.rotation.y += 0.005; });

    return (
        <group>
            <OrbitControls />
            <group ref={groupRef} scale={1.3}>
                {type === 'alcool' && (
                    <>
                        {/* Éthanol: CH3-CH2-OH */}
                        <Sphere args={[0.3]} position={[-1, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[0, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[1, 0, 0]}><meshStandardMaterial color="#F00" /></Sphere>
                        <Sphere args={[0.2]} position={[1.6, 0.4, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                        <Line points={[[-1, 0, 0], [0, 0, 0]]} color="#888" lineWidth={2} />
                        <Line points={[[0, 0, 0], [1, 0, 0]]} color="#888" lineWidth={2} />
                        <Line points={[[1, 0, 0], [1.6, 0.4, 0]]} color="#888" lineWidth={2} />
                        <Text position={[1, -0.6, 0]} fontSize={0.3} color="#F00">-OH</Text>
                    </>
                )}
                {type === 'aldehyde' && (
                    <>
                        <Sphere args={[0.3]} position={[-0.6, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[0.6, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.25]} position={[0.6, 0.8, 0]}><meshStandardMaterial color="#F00" /></Sphere>
                        <Line points={[[0.6, 0.3, 0], [0.6, 0.55, 0]]} color="#F00" lineWidth={3} />
                        <Line points={[[0.5, 0.35, 0], [0.5, 0.5, 0]]} color="#F00" lineWidth={3} />
                        <Sphere args={[0.15]} position={[1.2, -0.3, 0]}><meshStandardMaterial color="#FFF" /></Sphere>
                        <Text position={[0.6, -0.6, 0]} fontSize={0.3} color="#F00">-CHO</Text>
                    </>
                )}
                {type === 'cetone' && (
                    <>
                        <Sphere args={[0.3]} position={[-1, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[0, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.3]} position={[1, 0, 0]}><meshStandardMaterial color="#333" /></Sphere>
                        <Sphere args={[0.25]} position={[0, 0.8, 0]}><meshStandardMaterial color="#F00" /></Sphere>
                        <Line points={[[0, 0.3, 0], [0, 0.55, 0]]} color="#F00" lineWidth={3} />
                        <Line points={[[-0.1, 0.35, 0], [-0.1, 0.5, 0]]} color="#F00" lineWidth={3} />
                        <Text position={[0, -0.6, 0]} fontSize={0.3} color="#F00">C=O</Text>
                    </>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Composés Oxygénés" className="w-[380px] border-red-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>
                        <XPBar current={score} nextLevel={1000} />
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent my-4" />
                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />
                        {phase === 'mission' && mission && <MissionObjective objective={mission.objective} icon="🧪" />}

                        <div className="flex gap-1 mb-4 mt-4">
                            <button onClick={() => handleSelect('alcool')} className={`flex-1 py-2 rounded-lg text-xs uppercase font-bold transition-all ${type === 'alcool' ? 'bg-red-600 shadow-lg shadow-red-600/20' : 'bg-gray-700'}`}>Alcool</button>
                            <button onClick={() => handleSelect('aldehyde')} className={`flex-1 py-2 rounded-lg text-xs uppercase font-bold transition-all ${type === 'aldehyde' ? 'bg-orange-600 shadow-lg shadow-orange-600/20' : 'bg-gray-700'}`}>Aldéhyde</button>
                            <button onClick={() => handleSelect('cetone')} className={`flex-1 py-2 rounded-lg text-xs uppercase font-bold transition-all ${type === 'cetone' ? 'bg-purple-600 shadow-lg shadow-purple-600/20' : 'bg-gray-700'}`}>Cétone</button>
                        </div>
                        <div className="text-xs bg-black/30 p-3 rounded-xl border border-white/5">
                            {type === 'alcool' && <><p className="font-bold text-red-400 uppercase mb-1">Groupe hydroxyle -OH</p><p className="text-gray-300">Oxydation → Aldéhyde ou Cétone. Soluble dans l'eau.</p></>}
                            {type === 'aldehyde' && <><p className="font-bold text-orange-400 uppercase mb-1">Groupe -CHO (Extrémité)</p><p className="text-gray-300">Test Fehling: Précipité rouge brique.</p></>}
                            {type === 'cetone' && <><p className="font-bold text-purple-400 uppercase mb-1">Groupe C=O (Interne)</p><p className="text-gray-300">Test DNPH: Précipité jaune-orangé.</p></>}
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
            <SuccessOverlay show={showSuccess} message="Famille Identifiée !" points={300} onNext={() => { setShowSuccess(false); setMission(null); setPhase('explore'); }} />
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
    const [metal, setMetal] = useState('Zn');
    const [solution, setSolution] = useState('CuSO4');
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    const E0 = { 'Ag': 0.80, 'Cu': 0.34, 'Fe': -0.44, 'Zn': -0.76, 'Mg': -2.37 };
    const ionE0 = { 'AgNO3': 0.80, 'CuSO4': 0.34, 'FeSO4': -0.44, 'ZnSO4': -0.76 };

    const metalE = E0[metal];
    const solE = ionE0[solution];
    const reaction = solE > metalE;

    const missions = useMemo(() => [
        { id: 1, title: 'Réaction Spontanée', objective: 'Créez une pile avec ΔE > 1.0V.', minDelta: 1.0 },
        { id: 2, title: 'Protection de Fer', objective: 'Trouvez un métal qui protège le Fer (Fe) de la corrosion.', target: 'Fe', protect: true },
        { id: 3, title: 'Métal Noble', objective: 'Sélectionnez l\'Argent (Ag) et une solution qui NE RÉAGIT PAS.', metal: 'Ag', noReact: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.floor(Math.random() * missions.length)]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    const checkMission = () => {
        if (!mission) return;
        let success = false;
        const delta = solE - metalE;

        if (mission.id === 1 && reaction && delta > mission.minDelta) success = true;

        // Pour la protection cathodique, on simule que 'metal' est l'anode sacrificielle si E(metal) < E(Fe)
        if (mission.id === 2 && E0[metal] < E0['Fe']) success = true;

        if (mission.id === 3 && metal === 'Ag' && !reaction) success = true;

        if (success) {
            setScore(s => s + 350);
            setShowSuccess(true);
        }
    };

    return (
        <group>
            <OrbitControls />

            <group>
                {/* Bécher Simulation */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[1.5, 1.5, 3, 32, 1, true]} />
                    <meshStandardMaterial color="#AAA" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[1.4, 1.4, 1.8, 32]} />
                    <meshStandardMaterial color={solution.includes('Cu') ? '#00AACC' : solution.includes('Fe') ? '#99DD99' : '#EEEEFF'} transparent opacity={0.6} />
                </mesh>
                <Box args={[0.4, 2.5, 0.1]} position={[0, 0.5, 0]}>
                    <meshStandardMaterial color={metal === 'Cu' ? '#B87333' : metal === 'Zn' ? '#AFAFAF' : metal === 'Mg' ? '#DDDDDD' : '#555'} />
                </Box>
                {reaction && (
                    <group>
                        <Box args={[0.42, 1.2, 0.12]} position={[0, -0.3, 0.02]}><meshStandardMaterial color="#222" /></Box>
                        {/* Particules réaction */}
                        <group position={[0, -0.5, 0.2]}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Sphere key={i} args={[0.05]} position={[(Math.random() - 0.5) * 0.5, Math.random(), 0]}>
                                    <meshBasicMaterial color="#FFFF00" />
                                </Sphere>
                            ))}
                        </group>
                    </group>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Règle du Gamma" className="w-[380px] border-blue-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>
                        <XPBar current={score} nextLevel={1000} />
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />
                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />
                        {phase === 'mission' && mission && <MissionObjective objective={mission.objective} icon="⚗️" />}

                        <div className="mb-3 mt-4">
                            <label className="text-xs font-bold text-gray-400">Lame métallique:</label>
                            <select value={metal} onChange={e => setMetal(e.target.value)} className="w-full bg-gray-700 rounded p-1 text-sm text-white mt-1">
                                <option value="Cu">Cuivre (E°=+0.34V)</option>
                                <option value="Zn">Zinc (E°=-0.76V)</option>
                                <option value="Fe">Fer (E°=-0.44V)</option>
                                <option value="Mg">Magnésium (E°=-2.37V)</option>
                                <option value="Ag">Argent (E°=+0.80V)</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="text-xs font-bold text-gray-400">Solution:</label>
                            <select value={solution} onChange={e => setSolution(e.target.value)} className="w-full bg-gray-700 rounded p-1 text-sm text-white mt-1">
                                <option value="CuSO4">Sulfate de Cuivre (Cu²⁺)</option>
                                <option value="ZnSO4">Sulfate de Zinc (Zn²⁺)</option>
                                <option value="FeSO4">Sulfate de Fer (Fe²⁺)</option>
                                <option value="AgNO3">Nitrate d'Argent (Ag⁺)</option>
                            </select>
                        </div>
                        <div className={`p-3 rounded-xl text-xs border ${reaction ? 'bg-green-900/40 border-green-500/50' : 'bg-red-900/40 border-red-500/50'} transition-all`}>
                            <p className="font-bold flex items-center gap-2">
                                {reaction ? '✅ RÉACTION SPONTANÉE' : '❌ PAS DE RÉACTION'}
                            </p>
                            <p className="mt-2 text-lg font-mono font-bold text-white">ΔE° = {(solE - metalE).toFixed(2)} V</p>
                            {reaction && <p className="italic mt-1 text-green-300">Oxydant le plus fort réagit avec Réducteur le plus fort.</p>}
                        </div>
                        {phase === 'mission' && <button onClick={checkMission} className="w-full mt-4 py-3 bg-orange-600 rounded-xl font-bold hover:bg-orange-500 transition-all text-xs uppercase">VÉRIFIER RÉACTION</button>}
                    </div>
                </DraggableHtmlPanel>
            </Html>
            <SuccessOverlay show={showSuccess} message="Chimiste Expert !" points={350} onNext={() => { setShowSuccess(false); setMission(null); setPhase('explore'); }} />
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
    const [current, setCurrent] = useState(2);
    const [time, setTime] = useState(600);
    const [metalType, setMetalType] = useState('Cu'); // Cu, Au, Ag
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    const constants = {
        'Cu': { M: 63.5, n: 2, color: '#B87333', name: 'Cuivre' },
        'Au': { M: 197.0, n: 3, color: '#FFD700', name: 'Or' },
        'Ag': { M: 107.9, n: 1, color: '#C0C0C0', name: 'Argent' }
    };

    const F = 96500;
    const { M, n, color, name } = constants[metalType];
    const mass = (current * time * M) / (n * F);

    const radius = Math.min(0.12 + (mass / 10) * 0.1, 0.25);

    const missions = useMemo(() => [
        { id: 1, title: 'Production de Cuivre', objective: 'Déposez > 0.5g de Cuivre.', metal: 'Cu', minMass: 0.5 },
        { id: 2, title: 'Plaquage Or', objective: 'Déposez entre 0.2g et 0.3g d\'Or.', metal: 'Au', minMass: 0.2, maxMass: 0.3 },
        { id: 3, title: 'Argent Rapide', objective: 'Utilisez I > 4A pour déposer de l\'Argent.', metal: 'Ag', minI: 4 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.floor(Math.random() * missions.length)]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    const checkMission = () => {
        if (!mission) return;
        let success = false;

        if (mission.id === 1 && metalType === 'Cu' && mass > mission.minMass) success = true;
        if (mission.id === 2 && metalType === 'Au' && mass >= mission.minMass && mass <= mission.maxMass) success = true;
        if (mission.id === 3 && metalType === 'Ag' && current > mission.minI) success = true;

        if (success) {
            setScore(s => s + 400);
            setShowSuccess(true);
        }
    };

    return (
        <group>
            <OrbitControls />

            {/* Cuve */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 3, 32, 1, true]} />
                <meshStandardMaterial color="#AAA" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[1.4, 1.4, 1.8, 32]} />
                <meshStandardMaterial color={phase === 'mission' ? '#FFD70044' : '#00AACC44'} transparent opacity={0.6} />
            </mesh>

            {/* Électrodes */}
            <Cylinder args={[0.08, 0.08, 2.5]} position={[-0.6, 0.3, 0]}><meshStandardMaterial color="#333" /></Cylinder>
            <Text position={[-0.6, 1.8, 0]} fontSize={0.2} color="red">Anode (+)</Text>
            {/* Bulles Anode simulées */}
            {Array.from({ length: 8 }).map((_, i) => (
                <Sphere key={i} args={[0.03]} position={[-0.6 + (Math.random() - 0.5) * 0.1, -0.5 + Math.random() * 1.5, (Math.random() - 0.5) * 0.1]}>
                    <meshStandardMaterial color="#FFF" opacity={0.5} transparent />
                </Sphere>
            ))}

            {/* Cathode (Objet à plaquer) */}
            <group position={[0.6, 0, 0]}>
                {/* Support */}
                <Cylinder args={[0.02, 0.02, 2.5]} position={[0, 0.3, 0]}><meshStandardMaterial color="#333" /></Cylinder>
                <Text position={[0, 1.8, 0]} fontSize={0.2} color="blue">Cathode (-)</Text>

                {/* Objet Plaquage (Bague ou Cylindre) */}
                {phase === 'mission' ? (
                    <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.3, 0.08 + (mass / 5) * 0.05, 16, 32]} />
                        <meshStandardMaterial color={mass > 0 ? color : '#555'} metalness={0.8} roughness={0.2} />
                    </mesh>
                ) : (
                    <mesh position={[0, -0.5, 0]}>
                        <cylinderGeometry args={[radius, radius, 1.5, 32]} />
                        <meshStandardMaterial color={mass > 0 ? color : '#333'} metalness={0.6} roughness={0.3} />
                    </mesh>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title={phase === 'mission' ? "👑 L'Orfèvre Royal" : "⚡ Électrolyse"} className="w-[380px] border-yellow-500/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>
                        <XPBar current={score} nextLevel={1000} />
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent my-4" />
                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />
                        {phase === 'mission' && mission && <MissionObjective objective={mission.objective} icon="👑" />}

                        <div className="mb-3 mt-4">
                            <label className="text-xs font-bold text-gray-300">Intensité I: <span className="font-bold text-yellow-400 text-lg ml-2">{current.toFixed(1)} A</span></label>
                            <input type="range" min="0.1" max="5" step="0.1" value={current} onChange={e => setCurrent(Number(e.target.value))} className="w-full accent-yellow-500" />
                        </div>
                        <div className="mb-4">
                            <label className="text-xs font-bold text-gray-300">Durée t: <span className="font-bold text-blue-400 text-lg ml-2">{(time / 60).toFixed(0)} min</span></label>
                            <input type="range" min="60" max="3600" step="60" value={time} onChange={e => setTime(Number(e.target.value))} className="w-full accent-blue-500" />
                        </div>

                        <div className="mb-4">
                            <div className="flex gap-2 justify-center">
                                {Object.entries(constants).map(([k, v]) => (
                                    <button key={k} onClick={() => setMetalType(k)} className={`flex-1 py-2 rounded text-xs font-bold uppercase transition-all ${metalType === k ? 'bg-white text-black shadow-lg scale-105' : 'bg-gray-700 hover:bg-gray-600'}`}>
                                        {v.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-black/40 p-3 rounded-xl text-xs relative overflow-hidden border border-white/10">
                            <p className="font-bold text-gray-400 uppercase">Masse déposée (Faraday):</p>
                            <p className="text-2xl font-black text-[#00F5D4] mt-1 tracking-wider">{mass.toFixed(3)} g</p>
                            <p className="text-[9px] text-gray-500 font-mono mt-1">m = (I × t × M) / (n × F)</p>
                        </div>
                        {phase === 'mission' && <button onClick={checkMission} className="w-full mt-4 py-3 bg-orange-600 rounded-xl font-bold hover:bg-orange-500 transition-all text-xs uppercase">VÉRIFIER DÉPÔT</button>}
                    </div>
                </DraggableHtmlPanel>
            </Html>
            <SuccessOverlay show={showSuccess} message="Plaquage Réussi !" points={400} onNext={() => { setShowSuccess(false); setMission(null); setPhase('explore'); }} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ==========================================
// C11: VOIE SÈCHE (Aluminothermie)
// ==========================================
export function VoieSecheSimulation() {
    const [isReacting, setIsReacting] = useState(false);
    const flameRef = useRef();
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    const missions = useMemo(() => [
        { id: 1, title: 'Déclenchement', objective: 'Amorcez la réaction d\'aluminothermie.', action: 'start' }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[Math.floor(Math.random() * missions.length)]);
            setTimeLeft(45);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    const handleReaction = () => {
        setIsReacting(true);
        setTimeout(() => setIsReacting(false), 5000);
        if (phase === 'mission' && mission?.action === 'start') {
            setScore(s => s + 500);
            setShowSuccess(true);
        }
    };

    useFrame((state) => {
        if (flameRef.current && isReacting) {
            flameRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.3;
        }
    });

    return (
        <group>
            <OrbitControls />

            {/* Creuset */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[1, 0.8, 1.5, 32]} />
                <meshStandardMaterial color="#666" />
            </mesh>

            {/* Mélange réactif */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.7, 0.7, 0.4, 32]} />
                <meshStandardMaterial color={isReacting ? "#FF4400" : "#AA6633"} emissive={isReacting ? "#FF2200" : "#000"} emissiveIntensity={isReacting ? 0.5 : 0} />
            </mesh>

            {/* Flamme */}
            {isReacting && (
                <group ref={flameRef} position={[0, 0.5, 0]}>
                    <mesh>
                        <coneGeometry args={[0.3, 1.5, 16]} />
                        <meshStandardMaterial color="#FF6600" emissive="#FF4400" transparent opacity={0.8} />
                    </mesh>
                    <pointLight color="#FF6600" intensity={2} distance={5} />
                </group>
            )}

            <Text position={[0, -2.5, 0]} fontSize={0.3} color="#FF6600">
                {isReacting ? "Fe₂O₃ + 2Al → 2Fe + Al₂O₃" : "Aluminothermie"}
            </Text>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔥 Voie Sèche" className="w-[380px] border-orange-600/30">
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>
                        <XPBar current={score} nextLevel={1000} />
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-4" />
                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />
                        {phase === 'mission' && mission && <MissionObjective objective={mission.objective} icon="🔥" />}

                        <div className="mt-4 p-4 text-center">
                            <p className="text-sm mb-4 text-gray-300">Réduction par l'aluminium à haute température.</p>
                            <button
                                onClick={handleReaction}
                                className={`w-full py-4 rounded-xl font-bold uppercase transition-all shadow-lg ${isReacting ? 'bg-orange-800 text-orange-200 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 shadow-orange-500/30 text-white'}`}
                                disabled={isReacting}
                            >
                                {isReacting ? '🔥 Réaction en cours...' : 'Déclencher la réaction'}
                            </button>
                        </div>

                        <div className="mt-4 text-xs bg-black/40 p-3 rounded-xl border border-white/10">
                            <p className="font-bold text-orange-400 uppercase mb-2">Aluminothermie:</p>
                            <p className="font-mono text-gray-300">Fe₂O₃ + 2Al → 2Fe + Al₂O₃</p>
                            <p className="mt-2 text-gray-500 flex items-center gap-1 justify-center"><span className="text-lg">🌡️</span> T° ≈ 2500°C</p>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
            <SuccessOverlay show={showSuccess} message="Fusion Réussie !" points={500} onNext={() => { setShowSuccess(false); setMission(null); setPhase('explore'); }} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// Keep old exports for compatibility
export { ChimieOrgaGeneralSim as ChimieOrganiqueSim };
export { RedoxGammaSim as RedoxElectrolyseSim };
