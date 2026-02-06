'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { ConfettiExplosion, PhaseSelector, GradeBadge, ChallengeTimer, MissionObjective, XPBar, SuccessOverlay } from './GamificationUtils';

// Helper components for Atom visuals
function Nucleus({ Z, A }) {
    const neutrons = A - Z;
    // Generate positions for a spherical cluster
    const particles = useMemo(() => {
        const pts = [];
        const count = A;
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2; // y from 1 to -1
            const r = Math.sqrt(1 - y * y); // radius at y
            const theta = phi * i;
            const radius = 0.4 * Math.pow(Math.random() * 0.2 + 0.8, 1 / 3); // Slight variation

            pts.push({
                pos: [
                    Math.cos(theta) * r * radius,
                    y * radius,
                    Math.sin(theta) * r * radius
                ],
                type: i < Z ? 'proton' : 'neutron'
            });
        }
        return pts;
    }, [Z, A]);

    return (
        <group>
            {particles.map((p, i) => (
                <mesh key={i} position={p.pos}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial
                        color={p.type === 'proton' ? '#EF4444' : '#64748B'}
                        emissive={p.type === 'proton' ? '#7F1D1D' : '#1E293B'}
                        emissiveIntensity={0.5}
                        roughness={0.3}
                    />
                </mesh>
            ))}
            {/* Glow effect in the center */}
            <mesh>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#F87171" transparent opacity={0.15} />
            </mesh>
        </group>
    );
}

function Electron({ radius, angle: initialAngle, speed }) {
    const meshRef = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const angle = initialAngle + t * speed;
        if (meshRef.current) {
            meshRef.current.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={2} />
                <pointLight distance={1.5} intensity={1} color="#3B82F6" />
            </mesh>
        </group>
    );
}

function Bond({ start, end, count = 1 }) {
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const dir = end.clone().sub(start);
    const len = dir.length() * 0.75;
    const lookAt = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());

    return (
        <group position={mid.toArray()} quaternion={lookAt}>
            {Array.from({ length: Math.round(count) }).map((_, i) => {
                const offset = (i - (Math.round(count) - 1) / 2) * 0.15;
                return (
                    <group key={i} position={[offset, 0, 0]}>
                        <mesh>
                            <cylinderGeometry args={[0.04, 0.04, len, 8]} />
                            <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} transparent opacity={0.6} />
                        </mesh>
                        {/* Glow */}
                        <mesh scale={[1.5, 1, 1.5]}>
                            <cylinderGeometry args={[0.05, 0.05, len, 8]} />
                            <meshStandardMaterial color="#94A3B8" transparent opacity={0.2} />
                        </mesh>
                    </group>
                );
            })}
        </group>
    );
}

function LonePair({ position, rotation }) {
    const groupRef = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.1);
        }
    });

    return (
        <group ref={groupRef} position={position} rotation={rotation}>
            <mesh position={[-0.12, 0, 0]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial color="#FACC15" emissive="#FACC15" emissiveIntensity={1.5} />
            </mesh>
            <mesh position={[0.12, 0, 0]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial color="#FACC15" emissive="#FACC15" emissiveIntensity={1.5} />
            </mesh>
            {/* Connection line */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.015, 0.015, 0.24, 8]} />
                <meshStandardMaterial color="#FACC15" transparent opacity={0.4} />
            </mesh>
        </group>
    );
}

function Scale({ mass, subColor, count }) {
    const weightRef = useRef();
    useFrame((state) => {
        if (weightRef.current) {
            const targetY = -0.5 - (mass / 210) * 0.4;
            weightRef.current.position.y += (targetY - weightRef.current.position.y) * 0.1;
        }
    });

    return (
        <group>
            {/* Structure Balance */}
            <mesh position={[0, -2.2, 0]}>
                <cylinderGeometry args={[1.4, 1.6, 0.4, 32]} />
                <meshStandardMaterial color="#1F2937" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, -1.3, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 1.4, 16]} />
                <meshStandardMaterial color="#4B5563" metalness={1} roughness={0.05} />
            </mesh>

            {/* Plateau */}
            <group ref={weightRef}>
                <mesh>
                    <cylinderGeometry args={[1.6, 1.6, 0.15, 32]} />
                    <meshStandardMaterial color="#CBD5E1" metalness={0.8} roughness={0.1} />
                </mesh>

                {/* Substance */}
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.5 + (mass / 200) * 0.5, 32, 32]} />
                    <meshStandardMaterial color={subColor} emissive={subColor} emissiveIntensity={0.3} transparent opacity={0.9} />
                </mesh>

                {/* Particules Animées */}
                {Array(Math.min(Math.floor(count * 20), 40)).fill(0).map((_, i) => (
                    <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
                        <mesh position={[Math.cos(i * 1.5) * 1.0, 0.6 + Math.random() * 0.8, Math.sin(i * 1.5) * 1.0]}>
                            <sphereGeometry args={[0.07, 16, 16]} />
                            <meshStandardMaterial color={subColor} emissive={subColor} emissiveIntensity={0.5} />
                        </mesh>
                    </Float>
                ))}
            </group>

            {/* Affichage digital Premium */}
            <group position={[0, -1.1, 1.4]} rotation={[-0.5, 0, 0]}>
                <mesh>
                    <boxGeometry args={[1.4, 0.5, 0.1]} />
                    <meshStandardMaterial color="#020617" />
                </mesh>
                <mesh position={[0, 0.05, 0.04]}>
                    <boxGeometry args={[1.2, 0.35, 0.02]} />
                    <meshStandardMaterial color="#064e3b" />
                </mesh>
                <Text position={[0, 0.05, 0.06]} fontSize={0.22} color="#10b981" font="/fonts/Inter-Bold.woff" anchorX="center" anchorY="middle">
                    {mass.toFixed(1)} g
                </Text>
            </group>
        </group>
    );
}

function Rocket({ isLaunching }) {
    const groupRef = useRef();
    const fireRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current) {
            if (isLaunching) {
                groupRef.current.position.y += 0.2;
                groupRef.current.rotation.y += 0.1;
                if (fireRef.current) {
                    fireRef.current.scale.setScalar(1 + Math.sin(t * 20) * 0.2);
                }
            } else {
                groupRef.current.position.y = 1;
                groupRef.current.rotation.y = t * 0.5;
            }
        }
    });

    return (
        <group ref={groupRef} position={[0, 1, 0]}>
            {/* Body */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.3, 0.4, 2, 16]} />
                <meshStandardMaterial color="#F8FAFC" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Nose */}
            <mesh position={[0, 2.5, 0]}>
                <coneGeometry args={[0.3, 1, 16]} />
                <meshStandardMaterial color="#EF4444" metalness={0.5} />
            </mesh>
            {/* Fins */}
            {[0, 1, 2, 3].map((i) => (
                <mesh key={i} position={[Math.cos(i * Math.PI / 2) * 0.4, 0.3, Math.sin(i * Math.PI / 2) * 0.4]} rotation={[0, -i * Math.PI / 2, 0]}>
                    <boxGeometry args={[0.1, 0.6, 0.6]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
            ))}
            {/* Fire */}
            {isLaunching && (
                <group ref={fireRef} position={[0, -0.5, 0]}>
                    <mesh>
                        <coneGeometry args={[0.3, 1.5, 16]} rotation={[Math.PI, 0, 0]} />
                        <meshStandardMaterial color="#F59E0B" emissive="#EF4444" emissiveIntensity={2} transparent opacity={0.8} />
                    </mesh>
                    <pointLight distance={3} intensity={5} color="#F59E0B" />
                </group>
            )}
        </group>
    );
}

function FloatingMolecules({ molecules, coefficients, side }) {
    return (
        <group position={[side === 'left' ? -3 : 3, 0, 0]}>
            {molecules.map((mol, i) => (
                <group key={i} position={[i * 2 * (side === 'left' ? -1 : 1), 0, 0]}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <mesh>
                            <sphereGeometry args={[0.4, 32, 32]} />
                            <meshStandardMaterial
                                color={side === 'left' ? '#3B82F6' : '#10B981'}
                                emissive={side === 'left' ? '#1E3A8A' : '#064E3B'}
                                emissiveIntensity={0.5}
                                metalness={0.4}
                                roughness={0.2}
                            />
                        </mesh>
                        <Text position={[0, 0, 0.5]} fontSize={0.3} color="white" font="/fonts/Inter-Bold.woff" anchorX="center" anchorY="middle">
                            {coefficients[i] > 1 ? `${coefficients[i]} ` : ''}{mol.f}
                        </Text>
                    </Float>
                    {i < molecules.length - 1 && (
                        <Text position={[1.1 * (side === 'left' ? -1 : 1), 0, 0]} fontSize={0.4} color="#475569" font="/fonts/Inter-Bold.woff">+</Text>
                    )}
                </group>
            ))}
        </group>
    );
}



// =========================================================
// C2. STRUCTURE ATOMIQUE - AMÉLIORÉE
// =========================================================
// =========================================================
// C2. STRUCTURE ATOMIQUE - AMÉLIORÉE (30 PREMIERS ÉLÉMENTS)
// =========================================================
export function AtomicStructureAdvanced() {
    const [elementSymbol, setElementSymbol] = useState('C');
    const [showElectrons, setShowElectrons] = useState(true);
    const [showLabels, setShowLabels] = useState(true);
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [searchTerm, setSearchTerm] = useState('');

    // Données complètes pour les 30 premiers éléments
    const elementsData = useMemo(() => [
        { symbol: 'H', name: 'Hydrogène', Z: 1, A: 1, family: 'Non-métaux', config: [1], color: '#FFFFFF' },
        { symbol: 'He', name: 'Hélium', Z: 2, A: 4, family: 'Gaz Nobles', config: [2], color: '#D1FAE5' },
        { symbol: 'Li', name: 'Lithium', Z: 3, A: 7, family: 'Alcalins', config: [2, 1], color: '#FDE68A' },
        { symbol: 'Be', name: 'Béryllium', Z: 4, A: 9, family: 'Alcalino-terreux', config: [2, 2], color: '#A3E635' },
        { symbol: 'B', name: 'Bore', Z: 5, A: 11, family: 'Métalloïdes', config: [2, 3], color: '#FCD34D' },
        { symbol: 'C', name: 'Carbone', Z: 6, A: 12, family: 'Non-métaux', config: [2, 4], color: '#374151' },
        { symbol: 'N', name: 'Azote', Z: 7, A: 14, family: 'Non-métaux', config: [2, 5], color: '#60A5FA' },
        { symbol: 'O', name: 'Oxygène', Z: 8, A: 16, family: 'Non-métaux', config: [2, 6], color: '#EF4444' },
        { symbol: 'F', name: 'Fluor', Z: 9, A: 19, family: 'Halogènes', config: [2, 7], color: '#22C55E' },
        { symbol: 'Ne', name: 'Néon', Z: 10, A: 20, family: 'Gaz Nobles', config: [2, 8], color: '#D1FAE5' },
        { symbol: 'Na', name: 'Sodium', Z: 11, A: 23, family: 'Alcalins', config: [2, 8, 1], color: '#A78BFA' },
        { symbol: 'Mg', name: 'Magnésium', Z: 12, A: 24, family: 'Alcalino-terreux', config: [2, 8, 2], color: '#F5F5F4' },
        { symbol: 'Al', name: 'Aluminium', Z: 13, A: 27, family: 'Métaux pauvres', config: [2, 8, 3], color: '#D1D5DB' },
        { symbol: 'Si', name: 'Silicium', Z: 14, A: 28, family: 'Métalloïdes', config: [2, 8, 4], color: '#FCD34D' },
        { symbol: 'P', name: 'Phosphore', Z: 15, A: 31, family: 'Non-métaux', config: [2, 8, 5], color: '#F97316' },
        { symbol: 'S', name: 'Soufre', Z: 16, A: 32, family: 'Non-métaux', config: [2, 8, 6], color: '#FACC15' },
        { symbol: 'Cl', name: 'Chlore', Z: 17, A: 35, family: 'Halogènes', config: [2, 8, 7], color: '#22C55E' },
        { symbol: 'Ar', name: 'Argon', Z: 18, A: 40, family: 'Gaz Nobles', config: [2, 8, 8], color: '#D1FAE5' },
        { symbol: 'K', name: 'Potassium', Z: 19, A: 39, family: 'Alcalins', config: [2, 8, 8, 1], color: '#A78BFA' },
        { symbol: 'Ca', name: 'Calcium', Z: 20, A: 40, family: 'Alcalino-terreux', config: [2, 8, 8, 2], color: '#F5F5F4' },
        { symbol: 'Sc', name: 'Scandium', Z: 21, A: 45, family: 'Métaux de transition', config: [2, 8, 9, 2], color: '#9CA3AF' },
        { symbol: 'Ti', name: 'Titane', Z: 22, A: 48, family: 'Métaux de transition', config: [2, 8, 10, 2], color: '#9CA3AF' },
        { symbol: 'V', name: 'Vanadium', Z: 23, A: 51, family: 'Métaux de transition', config: [2, 8, 11, 2], color: '#9CA3AF' },
        { symbol: 'Cr', name: 'Chrome', Z: 24, A: 52, family: 'Métaux de transition', config: [2, 8, 13, 1], color: '#9CA3AF' },
        { symbol: 'Mn', name: 'Manganèse', Z: 25, A: 55, family: 'Métaux de transition', config: [2, 8, 13, 2], color: '#9CA3AF' },
        { symbol: 'Fe', name: 'Fer', Z: 26, A: 56, family: 'Métaux de transition', config: [2, 8, 14, 2], color: '#9CA3AF' },
        { symbol: 'Co', name: 'Cobalt', Z: 27, A: 59, family: 'Métaux de transition', config: [2, 8, 15, 2], color: '#9CA3AF' },
        { symbol: 'Ni', name: 'Nickel', Z: 28, A: 59, family: 'Métaux de transition', config: [2, 8, 16, 2], color: '#9CA3AF' },
        { symbol: 'Cu', name: 'Cuivre', Z: 29, A: 64, family: 'Métaux de transition', config: [2, 8, 18, 1], color: '#F59E0B' },
        { symbol: 'Zn', name: 'Zinc', Z: 30, A: 65, family: 'Métaux de transition', config: [2, 8, 18, 2], color: '#9CA3AF' }
    ], []);

    const el = elementsData.find(e => e.symbol === elementSymbol) || elementsData[0];
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    const missions = useMemo(() => [
        { id: 1, title: 'Identité Atomique', objective: 'Trouvez le numéro atomique (Z) du Carbone.', type: 'Z', target: 6, element: 'C', points: 200 },
        { id: 2, title: 'Cœur de l\'Atome', objective: 'Combien de neutrons possède le Sodium (A=23) ?', type: 'Neutrons', target: 12, element: 'Na', points: 300 },
        { id: 3, title: 'Électrons de Valence', objective: 'Combien d\'électrons sur la couche externe de l\'Oxygène ?', type: 'Valence', target: 6, element: 'O', points: 400 },
        { id: 4, title: 'Famille Noble', objective: 'Identifiez la famille de l\'Argon.', type: 'Family', target: 'Gaz Nobles', element: 'Ar', points: 500 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
            setElementSymbol(missions[0].element);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const checkAnswer = (userAns) => {
        if (!mission) return;
        const isCorrect = userAns === mission.target;
        if (isCorrect) {
            setScore(prev => prev + mission.points);
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setElementSymbol(missions[nextIdx].element);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const options = useMemo(() => {
        if (!mission) return [];
        if (mission.type === 'Family') {
            return ['Alcalins', 'Gaz Nobles', 'Halogènes', 'Métaux de transition'];
        }
        const correct = mission.target;
        const opts = new Set([correct]);
        while (opts.size < 4) {
            const val = Math.max(1, correct + Math.floor(Math.random() * 7) - 3);
            opts.add(val);
        }
        return Array.from(opts).sort((a, b) => (typeof a === 'number' ? a - b : a.localeCompare(b)));
    }, [mission]);

    const filteredElements = elementsData.filter(e =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.Z.toString().includes(searchTerm)
    );

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            <group position={[0, 0.5, 0]}>
                <group ref={groupRef}>
                    <Nucleus Z={el.Z} A={el.A} />

                    {/* Shells */}
                    {showElectrons && el.config.map((count, i) => {
                        const radius = 1.5 + i * 1.0;
                        return (
                            <group key={i}>
                                <mesh rotation={[Math.PI / 2, 0, 0]}>
                                    <torusGeometry args={[radius, 0.01, 16, 100]} />
                                    <meshBasicMaterial color="white" transparent opacity={0.05} />
                                </mesh>
                                {Array(count).fill(0).map((_, eIdx) => {
                                    const angle = (eIdx / count) * Math.PI * 2;
                                    return (
                                        <Electron key={eIdx} radius={radius} angle={angle} speed={1 / (i + 1)} />
                                    );
                                })}
                                {showLabels && (
                                    <Text position={[radius, 0.3, 0]} fontSize={0.15} color="#94A3B8" font="/fonts/Inter-Bold.woff" anchorX="left">
                                        {['K', 'L', 'M', 'N'][i]} : {count}e⁻
                                    </Text>
                                )}
                            </group>
                        );
                    })}
                </group>

                <Float speed={2} floatIntensity={0.5}>
                    <Text position={[0, 4, 0]} fontSize={0.5} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">
                        {el.symbol}
                    </Text>
                    <Text position={[0, 3.4, 0]} fontSize={0.25} color={el.color} font="/fonts/Inter-Bold.woff" anchorX="center">
                        {el.name}
                    </Text>
                </Float>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚛️ Atom Visualizer" className="w-[420px] border-blue-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest leading-tight">Physique Atomique</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Modèle de Bohr' : 'Mission Nucléaire 🎯'}</span>
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
                        {phase === 'mission' && mission ? (
                            <div className="grid grid-cols-2 gap-2">
                                {options.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => checkAnswer(opt)}
                                        className="py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-sm shadow-xl transform active:scale-95 transition-all text-white border-b-4 border-blue-800"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Rechercher (Nom, Symbole, Z)..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    />
                                </div>
                                <div className="grid grid-cols-6 gap-2 max-h-[150px] overflow-y-auto p-1 custom-scrollbar">
                                    {filteredElements.map(e => (
                                        <button
                                            key={e.symbol}
                                            onClick={() => setElementSymbol(e.symbol)}
                                            className={`p-2 rounded-lg text-[10px] font-black transition-all transform active:scale-90 ${elementSymbol === e.symbol ? 'bg-blue-600 shadow-lg shadow-blue-900/40 text-white ring-2 ring-blue-400' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                                        >
                                            {e.symbol}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-gray-950 p-3 rounded-2xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Numéro Z</div>
                                <div className="text-xl font-black font-mono text-red-500">{el.Z}</div>
                            </div>
                            <div className="bg-gray-950 p-3 rounded-2xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Masse A</div>
                                <div className="text-xl font-black font-mono text-yellow-500">{el.A}</div>
                            </div>
                            <div className="bg-gray-950 p-3 rounded-2xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Neutrons</div>
                                <div className="text-xl font-black font-mono text-white">{el.A - el.Z}</div>
                            </div>
                        </div>

                        <div className="bg-black/40 p-3 rounded-2xl border border-white/5 flex justify-between items-center px-4">
                            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Configuration</span>
                            <span className="font-mono text-xs font-black text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                {el.config.join('-')}
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => setShowElectrons(!showElectrons)} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${showElectrons ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'bg-gray-800 text-gray-500 border border-white/5'}`}>
                                Electrons: {showElectrons ? 'ON' : 'OFF'}
                            </button>
                            <button onClick={() => setShowLabels(!showLabels)} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${showLabels ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'bg-gray-800 text-gray-500 border border-white/5'}`}>
                                Couches: {showLabels ? 'ON' : 'OFF'}
                            </button>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Succès Atomique !" points={mission?.points || 200} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================================
// C4. LA MOLE - AMÉLIORÉE AVEC DÉFI
// =========================================================
export function MoleScaleAdvanced() {
    const [substance, setSubstance] = useState('H2O');
    const [mass, setMass] = useState(18);
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [userAnswer, setUserAnswer] = useState('');

    const substances = {
        H2O: { name: 'Eau', M: 18, formula: 'H₂O', color: '#60A5FA' },
        NaCl: { name: 'Sel', M: 58.5, formula: 'NaCl', color: '#F5F5F4' },
        CO2: { name: 'CO₂', M: 44, formula: 'CO₂', color: '#6B7280' },
        C6H12O6: { name: 'Glucose', M: 180, formula: 'C₆H₁₂O₆', color: '#FCD34D' },
        C: { name: 'Carbone', M: 12, formula: 'C', color: '#374151' },
        Fe: { name: 'Fer', M: 56, formula: 'Fe', color: '#78716C' },
        O2: { name: 'Dioxygène', M: 32, formula: 'O₂', color: '#EF4444' },
    };

    const sub = substances[substance];
    const n = mass / sub.M; // quantité de matière (mol)
    const N = n * 6.022e23; // nombre d'entités

    const missions = useMemo(() => [
        { id: 1, title: 'Calcul de Masse', objective: 'Réglage : Trouvez la masse correspondant à 2.0 mol d\'eau (M=18).', targetN: 2.0, targetM: 36, element: 'H2O', points: 300 },
        { id: 2, title: 'Quantité de Sel', objective: 'Trouvez la masse pour exactement 1.0 mol de NaCl (M=58.5).', targetN: 1.0, targetM: 58.5, element: 'NaCl', points: 400 },
        { id: 3, title: 'Gaz Carbonique', objective: 'Ajustez la balance pour obtenir 0.5 mol de CO₂ (M=44).', targetN: 0.5, targetM: 22, element: 'CO2', points: 500 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
            setSubstance(missions[0].element);
            setMass(10);
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
        if (phase === 'mission' && mission && Math.abs(mass - mission.targetM) < 1) {
            setScore(s => s + mission.points);
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setSubstance(missions[nextIdx].element);
            setMass(10);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const weightRef = useRef();
    useFrame((state, delta) => {
        if (weightRef.current) {
            const targetY = -0.5 - (mass / 200) * 0.4;
            weightRef.current.position.y += (targetY - weightRef.current.position.y) * 0.1;
        }
    });

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            <group position={[0, -0.5, 0]}>
                <Scale mass={mass} subColor={sub.color} count={n} />
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Expert de la Mole" className="w-[380px] border-amber-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-amber-400 font-black uppercase tracking-widest leading-tight">Analyse de Quantité</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Balance de Précision' : 'Calcul de Mole 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && mission && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={mission.objective} icon="⚖️" />
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 space-y-4">
                            <div className="grid grid-cols-4 gap-1">
                                {Object.keys(substances).map(key => (
                                    <button
                                        key={key}
                                        onClick={() => setSubstance(key)}
                                        disabled={phase === 'mission'}
                                        className={`py-2 rounded-lg text-[10px] font-black tracking-tighter transition-all ${substance === key ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-500 hover:bg-gray-700'}`}
                                    >
                                        {substances[key].formula}
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-1 pt-2">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                                    <span>Ajuster la Masse</span>
                                    <span className="text-amber-400 font-mono">{mass} g</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="200"
                                    step="0.5"
                                    value={mass}
                                    onChange={(e) => setMass(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-800 rounded-full appearance-none cursor-pointer accent-amber-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Masse Molaire</div>
                                <div className="text-xl font-black font-mono text-blue-400">{sub.M}</div>
                                <div className="text-[8px] text-gray-600">g/mol</div>
                            </div>
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Quantité n</div>
                                <div className="text-xl font-black font-mono text-emerald-400">{n.toFixed(3)}</div>
                                <div className="text-[8px] text-gray-600">mol</div>
                            </div>
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Entités N</div>
                                <div className="text-[10px] font-black font-mono text-purple-400 mt-2">{N.toExponential(1)}</div>
                            </div>
                        </div>

                        <div className="p-4 bg-black/60 rounded-2xl border border-white/10 text-center animate-pulse-slow">
                            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Relation n = m / M</span>
                            <div className="text-lg font-black font-mono text-white mt-1">
                                {n.toFixed(3)} = {mass} / {sub.M}
                            </div>
                        </div>

                        <button
                            onClick={handleAction}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 ${phase === 'mission' ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-amber-900/20' : 'bg-gray-800 text-gray-500'}`}
                        >
                            {phase === 'mission' ? 'Vérifier la Pesée ⚖️' : 'Mode Exploration Libre'}
                        </button>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Pesée Parfaite !" points={mission?.points || 300} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================================
// C3. STRUCTURE DE LEWIS - AMÉLIORÉE AVEC DÉFI
// =========================================================
export function LewisStructureAdvanced() {
    const [molecule, setMolecule] = useState('H2O');
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    const molecules = {
        H2: { name: 'Dihydrogène', formula: 'H₂', atoms: [{ el: 'H', pos: [-0.5, 0, 0], color: '#FFFFFF' }, { el: 'H', pos: [0.5, 0, 0], color: '#FFFFFF' }], bonds: 1, nonBonding: 0, geometry: 'Linéaire' },
        H2O: { name: 'Eau', formula: 'H₂O', atoms: [{ el: 'O', pos: [0, 0, 0], color: '#EF4444' }, { el: 'H', pos: [-0.8, -0.6, 0], color: '#FFFFFF' }, { el: 'H', pos: [0.8, -0.6, 0], color: '#FFFFFF' }], bonds: 2, nonBonding: 2, angle: '104.5°', geometry: 'Coudée' },
        CO2: { name: 'Dioxyde de carbone', formula: 'CO₂', atoms: [{ el: 'C', pos: [0, 0, 0], color: '#374151' }, { el: 'O', pos: [-1.2, 0, 0], color: '#EF4444' }, { el: 'O', pos: [1.2, 0, 0], color: '#EF4444' }], bonds: 4, nonBonding: 4, angle: '180°', geometry: 'Linéaire' },
        NH3: { name: 'Ammoniac', formula: 'NH₃', atoms: [{ el: 'N', pos: [0, 0.3, 0], color: '#3B82F6' }, { el: 'H', pos: [-0.7, -0.4, 0.4], color: '#FFFFFF' }, { el: 'H', pos: [0.7, -0.4, 0.4], color: '#FFFFFF' }, { el: 'H', pos: [0, -0.4, -0.8], color: '#FFFFFF' }], bonds: 3, nonBonding: 1, angle: '107°', geometry: 'Pyramidale' },
        CH4: { name: 'Méthane', formula: 'CH₄', atoms: [{ el: 'C', pos: [0, 0, 0], color: '#374151' }, { el: 'H', pos: [0.6, 0.6, 0.6], color: '#FFFFFF' }, { el: 'H', pos: [-0.6, -0.6, 0.6], color: '#FFFFFF' }, { el: 'H', pos: [0.6, -0.6, -0.6], color: '#FFFFFF' }, { el: 'H', pos: [-0.6, 0.6, -0.6], color: '#FFFFFF' }], bonds: 4, nonBonding: 0, angle: '109.5°', geometry: 'Tétraédrique' },
        O2: { name: 'Dioxygène', formula: 'O₂', atoms: [{ el: 'O', pos: [-0.6, 0, 0], color: '#EF4444' }, { el: 'O', pos: [0.6, 0, 0], color: '#EF4444' }], bonds: 2, nonBonding: 4, geometry: 'Linéaire' },
        N2: { name: 'Diazote', formula: 'N₂', atoms: [{ el: 'N', pos: [-0.5, 0, 0], color: '#3B82F6' }, { el: 'N', pos: [0.5, 0, 0], color: '#3B82F6' }], bonds: 3, nonBonding: 2, geometry: 'Linéaire' },
        HCl: { name: 'Chlorure d\'hydrogène', formula: 'HCl', atoms: [{ el: 'H', pos: [-0.6, 0, 0], color: '#FFFFFF' }, { el: 'Cl', pos: [0.6, 0, 0], color: '#22C55E' }], bonds: 1, nonBonding: 3, geometry: 'Linéaire' },
    };

    const mol = molecules[molecule];

    const missions = useMemo(() => [
        { id: 1, title: 'Doublets Liants', objective: 'Réponse : Combien de doublets liants dans la molécule d\'eau ?', target: 2, element: 'H2O', points: 250 },
        { id: 2, title: 'Non Liants Mystère', objective: 'Combien de doublets non liants possède l\'atome d\'azote de NH₃ ?', target: 1, element: 'NH3', points: 300 },
        { id: 3, title: 'Angle Tétraédrique', objective: 'Quel est l\'angle de liaison dans le méthane (CH₄) ?', target: '109.5°', element: 'CH4', points: 400, isText: true }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            setMission(missions[0]);
            setTimeLeft(60);
            setMolecule(missions[0].element);
        }
    }, [phase, mission, missions]);

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess && mission) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess, mission]);

    const checkAnswer = (userAns) => {
        if (!mission) return;
        const isCorrect = userAns === mission.target;
        if (isCorrect) {
            setScore(prev => prev + mission.points);
            setShowSuccess(true);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = missions.findIndex(m => m.id === mission.id) + 1;
        if (nextIdx < missions.length) {
            setMission(missions[nextIdx]);
            setMolecule(missions[nextIdx].element);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setMission(null);
        }
    };

    const options = useMemo(() => {
        if (!mission) return [];
        if (mission.isText) return ['90°', '104.5°', '109.5°', '180°'];
        return [1, 2, 3, 4];
    }, [mission]);

    const groupRef = useRef();
    useFrame((state, delta) => {
        if (groupRef.current) groupRef.current.rotation.y += delta * 0.3;
    });

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            <group position={[0, 0, 0]}>
                <group ref={groupRef} scale={[1.5, 1.5, 1.5]}>
                    {/* Atoms */}
                    {mol.atoms.map((atom, i) => (
                        <group key={i} position={atom.pos}>
                            <mesh>
                                <sphereGeometry args={[atom.el === 'H' ? 0.25 : 0.45, 32, 32]} />
                                <meshStandardMaterial color={atom.color} emissive={atom.color} emissiveIntensity={0.2} metalness={0.2} roughness={0.1} />
                            </mesh>
                            <Text position={[0, 0, 0.55]} fontSize={0.25} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">
                                {atom.el}
                            </Text>
                        </group>
                    ))}

                    {/* Bonds with Glow */}
                    {mol.atoms.length > 1 && mol.atoms.slice(1).map((atom, i) => {
                        const start = new THREE.Vector3(...mol.atoms[0].pos);
                        const end = new THREE.Vector3(...atom.pos);
                        return <Bond key={i} start={start} end={end} count={mol.bonds / (mol.atoms.length - 1)} />;
                    })}

                    {/* Non-Bonding Pairs with Animation */}
                    {mol.nonBonding > 0 && mol.atoms[0] && (
                        Array(Math.min(mol.nonBonding, 2)).fill(0).map((_, i) => (
                            <LonePair key={i} position={[0, 0.7, i === 0 ? 0.4 : -0.4]} rotation={[i === 0 ? 0.5 : -0.5, 0, 0]} />
                        ))
                    )}
                </group>

                <Float speed={2} floatIntensity={0.5}>
                    <Text position={[0, 3.5, 0]} fontSize={0.5} color="white" font="/fonts/Inter-Bold.woff" anchorX="center">
                        {mol.formula}
                    </Text>
                    <Text position={[0, 3, 0]} fontSize={0.25} color="#60A5FA" font="/fonts/Inter-Bold.woff" anchorX="center">
                        {mol.name}
                    </Text>
                </Float>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Expert en Lewis" className="w-[400px] border-blue-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest leading-tight">Géométrie Moléculaire</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Modèle VSEPR' : 'Défi de Valence 🎯'}</span>
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
                        {phase === 'mission' ? (
                            <div className="grid grid-cols-2 gap-2">
                                {options.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => checkAnswer(opt)}
                                        className="py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-sm shadow-xl transform active:scale-95 transition-all text-white border-b-4 border-blue-800"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-gray-950 p-4 rounded-2xl border border-white/5 space-y-3">
                                <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Sélectionner une Molécule</div>
                                <div className="grid grid-cols-4 gap-1">
                                    {Object.keys(molecules).map(key => (
                                        <button
                                            key={key}
                                            onClick={() => setMolecule(key)}
                                            className={`py-2 rounded-lg text-[10px] font-black transition-all ${molecule === key ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-500 hover:bg-gray-700'}`}
                                        >
                                            {molecules[key].formula}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Liaisons</div>
                                <div className="text-xl font-black font-mono text-blue-400">{mol.bonds}</div>
                            </div>
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Doublets NL</div>
                                <div className="text-xl font-black font-mono text-yellow-400">{mol.nonBonding}</div>
                            </div>
                            <div className="bg-gray-900/50 p-3 rounded-xl border border-white/5 text-center">
                                <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Angle</div>
                                <div className="text-sm font-black text-white mt-1">{mol.angle || '180°'}</div>
                            </div>
                        </div>

                        <div className="bg-black/60 p-4 rounded-2xl border border-white/10 text-center">
                            <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-none">VSEPR Geometry info</span>
                            <div className="text-xl font-black text-white mt-1 uppercase tracking-tight">
                                {mol.geometry}
                            </div>
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Le 구조가 Correcte !" points={mission?.points || 300} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// =========================================================
// C5. ÉQUATION-BILAN - AMÉLIORÉE
// =========================================================
export function EquationBalancerAdvanced() {
    const [coefficients, setCoefficients] = useState([1, 1, 1, 1]);
    const [currentEq, setCurrentEq] = useState(0);
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    const equations = useMemo(() => [
        { id: 1, title: 'Synthèse de l\'Eau', objective: 'Équilibrez la réaction de formation de l\'eau à partir du dihydrogène et du dioxygène.', reactants: [{ f: 'H₂', a: { H: 2 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'H₂O', a: { H: 2, O: 1 } }], points: 200 },
        { id: 2, title: 'Synthèse de l\'Ammoniac', objective: 'Équilibrez la synthèse industrielle de l\'ammoniac (Procédé Haber).', reactants: [{ f: 'N₂', a: { N: 2 } }, { f: 'H₂', a: { H: 2 } }], products: [{ f: 'NH₃', a: { N: 1, H: 3 } }], points: 250 },
        { id: 3, title: 'Combustion du Méthane', objective: 'Équilibrez la combustion complète du méthane dans le dioxygène.', reactants: [{ f: 'CH₄', a: { C: 1, H: 4 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'CO₂', a: { C: 1, O: 2 } }, { f: 'H₂O', a: { H: 2, O: 1 } }], points: 300 },
        { id: 4, title: 'Oxydation du Fer', objective: 'Équilibrez la formation de la rouille (oxyde de fer III).', reactants: [{ f: 'Fe', a: { Fe: 1 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'Fe₂O₃', a: { Fe: 2, O: 3 } }], points: 350 },
        { id: 5, title: 'Formation du Chlorure de Sodium', objective: 'Équilibrez la réaction entre le sodium et le dichlore.', reactants: [{ f: 'Na', a: { Na: 1 } }, { f: 'Cl₂', a: { Cl: 2 } }], products: [{ f: 'NaCl', a: { Na: 1, Cl: 1 } }], points: 200 }
    ], []);

    const eq = equations[currentEq];

    useEffect(() => {
        let timer;
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, timeLeft, showSuccess]);

    const calcAtoms = (side, coeffs) => {
        const totals = {};
        side.forEach((mol, i) => {
            const coef = coeffs[i] || 1;
            Object.entries(mol.a).forEach(([atom, count]) => {
                totals[atom] = (totals[atom] || 0) + count * coef;
            });
        });
        return totals;
    };

    const leftAtoms = calcAtoms(eq.reactants, coefficients.slice(0, eq.reactants.length));
    const rightAtoms = calcAtoms(eq.products, coefficients.slice(eq.reactants.length));
    const isBalanced = JSON.stringify(leftAtoms) === JSON.stringify(rightAtoms);

    const updateCoef = (index, delta) => {
        const newCoeffs = [...coefficients];
        newCoeffs[index] = Math.max(1, Math.min(8, (newCoeffs[index] || 1) + delta));
        setCoefficients(newCoeffs);
    };

    const validate = () => {
        if (isBalanced) {
            const bonus = streak * 50;
            setScore(prev => prev + eq.points + bonus);
            setStreak(prev => prev + 1);
            setShowSuccess(true);
        } else {
            setStreak(0);
        }
    };

    const nextMission = () => {
        setShowSuccess(false);
        const nextIdx = (currentEq + 1);
        if (nextIdx < equations.length) {
            setCurrentEq(nextIdx);
            setCoefficients([1, 1, 1, 1]);
            setTimeLeft(60);
        } else {
            setPhase('explore');
            setCurrentEq(0);
            setCoefficients([1, 1, 1, 1]);
        }
    };

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 10, 5]} intensity={1.5} />

            <group position={[0, -1, 0]}>
                {/* Launch Pad */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[2.5, 3, 0.4, 32]} />
                    <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
                </mesh>

                <Rocket isLaunching={showSuccess} />

                {/* Visual Representation of Molecules */}
                <group position={[0, 1.5, 0]}>
                    <FloatingMolecules molecules={eq.reactants} coefficients={coefficients.slice(0, eq.reactants.length)} side="left" />
                    <Text position={[0, 1.5, 0]} fontSize={0.6} color="white" font="/fonts/Inter-Bold.woff">→</Text>
                    <FloatingMolecules molecules={eq.products} coefficients={coefficients.slice(eq.reactants.length)} side="right" />
                </group>

                {isBalanced && !showSuccess && (
                    <Float speed={4} floatIntensity={0.5}>
                        <Text position={[0, 4.5, 0]} fontSize={0.4} color="#10b981" font="/fonts/Inter-Bold.woff">
                            ✓ ÉQUATION ÉQUILIBRÉE - PRÊT AU LANCEMENT !
                        </Text>
                    </Float>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Expert de Lavoisier" className="w-[420px] border-emerald-500/30 text-white" defaultPosition="bottom-right">
                    <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest leading-tight">Conservation de la Masse</span>
                            <span className="text-lg font-black">{phase === 'explore' ? 'Atelier d\'Équilibrage' : 'Défi de Lavoisier 🎯'}</span>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {phase === 'mission' && eq && (
                        <div className="mb-4 space-y-2">
                            <ChallengeTimer timeLeft={timeLeft} />
                            <MissionObjective objective={eq.objective} icon="⚖️" />
                        </div>
                    )}

                    <div className="space-y-4">
                        {/* Atom Counters */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-500/30">
                                <span className="text-[9px] text-blue-400 font-black uppercase tracking-widest block mb-2">Réactifs (Gauche)</span>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(leftAtoms).map(([atom, count]) => (
                                        <div key={atom} className="flex items-center gap-1">
                                            <span className="w-5 h-5 rounded flex items-center justify-center bg-gray-800 text-[10px] font-black">{atom}</span>
                                            <span className={`text-sm font-black ${rightAtoms[atom] === count ? 'text-emerald-400' : 'text-red-400'}`}>{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-500/30">
                                <span className="text-[9px] text-emerald-400 font-black uppercase tracking-widest block mb-2">Produits (Droite)</span>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(rightAtoms).map(([atom, count]) => (
                                        <div key={atom} className="flex items-center gap-1">
                                            <span className="w-5 h-5 rounded flex items-center justify-center bg-gray-800 text-[10px] font-black">{atom}</span>
                                            <span className={`text-sm font-black ${leftAtoms[atom] === count ? 'text-emerald-400' : 'text-red-400'}`}>{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Coefficient Controls */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest block text-center">Reactants</span>
                                <div className="grid gap-2">
                                    {eq.reactants.map((mol, i) => (
                                        <div key={i} className="flex items-center justify-between bg-gray-900/50 p-2 rounded-lg border border-white/5">
                                            <span className="text-xs font-black text-blue-400">{mol.f}</span>
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => updateCoef(i, -1)} className="w-6 h-6 bg-gray-800 hover:bg-gray-700 rounded text-xs font-black">-</button>
                                                <span className="w-4 text-center font-mono text-sm">{coefficients[i]}</span>
                                                <button onClick={() => updateCoef(i, 1)} className="w-6 h-6 bg-gray-800 hover:bg-gray-700 rounded text-xs font-black">+</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest block text-center">Products</span>
                                <div className="grid gap-2">
                                    {eq.products.map((mol, i) => (
                                        <div key={i} className="flex items-center justify-between bg-gray-900/50 p-2 rounded-lg border border-white/5">
                                            <span className="text-xs font-black text-emerald-400">{mol.f}</span>
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => updateCoef(eq.reactants.length + i, -1)} className="w-6 h-6 bg-gray-800 hover:bg-gray-700 rounded text-xs font-black">-</button>
                                                <span className="w-4 text-center font-mono text-sm">{coefficients[eq.reactants.length + i]}</span>
                                                <button onClick={() => updateCoef(eq.reactants.length + i, 1)} className="w-6 h-6 bg-gray-800 hover:bg-gray-700 rounded text-xs font-black">+</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={validate}
                                className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${isBalanced ? 'bg-emerald-600 shadow-emerald-900/40 shadow-lg scale-105' : 'bg-gray-800 text-gray-400 shadow-xl border-b-4 border-gray-950 active:border-b-0'}`}
                            >
                                {isBalanced ? '✓ Valider l\'Équilibre' : 'Vérifier la Balance'}
                            </button>
                            {streak > 0 && (
                                <div className="bg-orange-600/20 border border-orange-500/30 px-3 py-1 rounded-xl flex items-center gap-2">
                                    <span className="text-orange-500 animate-pulse text-xs">🔥</span>
                                    <span className="text-sm font-black text-orange-400">x{streak}</span>
                                </div>
                            )}
                        </div>

                        <XPBar current={score % 1000} nextLevel={1000} />
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay show={showSuccess} message="Équation Parfaite !" points={eq.points + (streak * 50)} onNext={nextMission} />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}
