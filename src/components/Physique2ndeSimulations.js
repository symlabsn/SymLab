/**
 * Physique 2nde Simulations - Part 1: Électricité (Chapitres 1-7)
 * High-quality 3D simulations for Seconde curriculum
 */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text, Float, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { PhaseSelector, GradeBadge, MissionObjective, XPBar, SuccessOverlay, ConfettiExplosion } from './GamificationUtils';

// Helper for electron visualization
function ElectronsStream({ path, count = 20, speed = 1, active = false }) {
    const electrons = useMemo(() => Array.from({ length: count }, () => Math.random()), [count]);
    const refs = useRef([]);

    useFrame((state) => {
        if (!active) return;
        const time = state.clock.elapsedTime * speed;
        refs.current.forEach((el, i) => {
            if (!el) return;
            // Simple linear interpolation along path for now, or circular
            // Assuming path is just a loop or line. 
            // We'll implement specific movements in components.
        });
    });

    return null; // Implemented inside components for specific paths
}

// ============================================================
// P1. ÉLECTRISATION - Phénomènes d'électrisation (ENRICHI)
// ============================================================
export function ElectrisationSimulation() {
    const [scenario, setScenario] = useState('frottement'); // frottement, contact, influence
    const [material1, setMaterial1] = useState('plastique'); // plastique (PVC), verre
    const [material2, setMaterial2] = useState('laine'); // laine, soie

    // État physique
    const [chargeRod, setChargeRod] = useState(0); // -100 to 100
    const [chargeObject, setChargeObject] = useState(0); // Electroscope or other object
    const [isRubbing, setIsRubbing] = useState(false);
    const [distance, setDistance] = useState(2); // Distance rod-object

    // Gamification
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);

    const rodRef = useRef();

    // Propriétés matériaux (Triboélectrique relative)
    const materials = {
        verre: { name: 'Verre', tendency: 5, color: '#A5F3FC' },
        laine: { name: 'Laine', tendency: 2, color: '#FEF3C7' },
        soie: { name: 'Soie', tendency: -1, color: '#FBCFE8' },
        plastique: { name: 'Plastique (PVC)', tendency: -5, color: '#4ADE80' },
        ebonite: { name: 'Ébonite', tendency: -6, color: '#1F2937' }
    };

    useFrame((state) => {
        // Frottement Logic
        if (isRubbing && scenario === 'frottement') {
            const t1 = materials[material1].tendency;
            const t2 = materials[material2].tendency;
            const delta = t1 - t2;

            // On charge progressivement
            if (Math.abs(chargeRod) < 100) {
                setChargeRod(prev => {
                    const sign = delta > 0 ? 1 : -1;
                    return THREE.MathUtils.clamp(prev + sign * 1, -100, 100);
                });
            }

            // Animation vibration
            if (rodRef.current) {
                rodRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 30) * 0.1;
                rodRef.current.position.y = 2 + Math.cos(state.clock.elapsedTime * 20) * 0.05;
            }
        } else if (rodRef.current) {
            // Retour position repos
            rodRef.current.rotation.z *= 0.9;
            rodRef.current.position.y += (2 - rodRef.current.position.y) * 0.1;
        }

        // Contact Logic
        if (scenario === 'contact' && distance < 0.8) {
            const total = chargeRod + chargeObject;
            const share = total / 2;
            setChargeRod(prev => prev + (share - prev) * 0.1);
            setChargeObject(prev => prev + (share - prev) * 0.1);
        }
    });

    const reset = () => {
        setChargeRod(0);
        setChargeObject(0);
        setDistance(2);
        setIsRubbing(false);
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        generateChallenge();
    };

    const generateChallenge = () => {
        const types = ['negatif', 'positif'];
        const targetType = types[Math.floor(Math.random() * types.length)];
        setChallenge({
            type: targetType,
            desc: `Charge la règle ${targetType === 'positif' ? 'positivement (+)' : 'négativement (-)'} !`,
            target: targetType === 'positif' ? 50 : -50
        });
        reset();
        setShowSuccess(false);
    };

    useEffect(() => {
        if (mode === 'challenge' && challenge) {
            if (challenge.type === 'positif' && chargeRod > challenge.target) {
                success();
            } else if (challenge.type === 'negatif' && chargeRod < challenge.target) {
                success();
            }
        }
    }, [chargeRod, mode, challenge]);

    const success = () => {
        if (!showSuccess) {
            setShowSuccess(true);
            setScore(s => s + 50);
        }
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message="Défi Réussi !" points={50} onNext={generateChallenge} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Labo Électrostatique" showCloseButton={false} defaultPosition="bottom-center" className="w-[360px] border-blue-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">Module Physique</div>
                            <div className="text-xl font-black text-white leading-none">ÉLECTRISATION</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Expérimentez avec les charges électriques !" icon="🧪" />
                            </div>

                            {/* Scénarios */}
                            <div className="flex gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar">
                                {['frottement', 'contact', 'influence'].map(s => (
                                    <button key={s} onClick={() => { setScenario(s); reset(); }}
                                        className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${scenario === s ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
                                        {s.charAt(0).toUpperCase() + s.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {scenario === 'frottement' && (
                                <div className="space-y-3 p-3 bg-gray-900/50 rounded-xl border border-white/5">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="text-xs text-blue-300 font-bold block mb-1">Objet Mobile</label>
                                            <select value={material1} onChange={e => setMaterial1(e.target.value)}
                                                className="w-full bg-gray-800 rounded p-2 text-sm border border-gray-600 focus:border-blue-500 outline-none">
                                                {Object.keys(materials).map(k => <option key={k} value={k}>{materials[k].name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs text-blue-300 font-bold block mb-1">Frotteur</label>
                                            <select value={material2} onChange={e => setMaterial2(e.target.value)}
                                                className="w-full bg-gray-800 rounded p-2 text-sm border border-gray-600 focus:border-blue-500 outline-none">
                                                {Object.keys(materials).map(k => <option key={k} value={k}>{materials[k].name}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        onMouseDown={() => setIsRubbing(true)}
                                        onMouseUp={() => setIsRubbing(false)}
                                        onMouseLeave={() => setIsRubbing(false)}
                                        className={`w-full py-4 rounded-xl font-black text-lg transition-all transform active:scale-95 relative overflow-hidden group
                                            ${isRubbing ? 'bg-gradient-to-r from-red-600 to-orange-600 shadow-inner' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] shadow-lg'}`}
                                    >
                                        <span className="relative z-10 flex justify-center items-center gap-2">
                                            {isRubbing ? '⚡ FROTTEMENT...' : '✋ MAINTENIR POUR FROTTER'}
                                        </span>
                                    </button>
                                </div>
                            )}

                            {(scenario === 'contact' || scenario === 'influence') && (
                                <div className="space-y-3 p-3 bg-gray-900/50 rounded-xl border border-white/5">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400">Charge initiale</span>
                                            <span className="font-mono text-blue-300">{chargeRod}</span>
                                        </div>
                                        <input type="range" min="-100" max="100" value={chargeRod} onChange={e => setChargeRod(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400">Distance d&apos;interaction</span>
                                            <span className="font-mono text-green-300">{distance.toFixed(1)} m</span>
                                        </div>
                                        <input type="range" min="0.5" max="4" step="0.1" value={distance} onChange={e => setDistance(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500" />
                                    </div>

                                    <div className="text-xs text-center p-2 bg-blue-900/20 rounded text-blue-200">
                                        {scenario === 'contact' ? "Approche pour toucher et transférer la charge." : "Approche pour voir la polarisation (sans toucher)."}
                                    </div>
                                </div>
                            )}

                            {/* JAUGE DE CHARGE */}
                            <div className="mt-4 p-3 bg-black/40 rounded-lg border border-white/10">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-xs font-bold text-gray-300">ÉTAT DE CHARGE</div>
                                    <div className={`text-xs font-bold ${chargeRod !== 0 ? (chargeRod > 0 ? 'text-red-400' : 'text-blue-400') : 'text-gray-500'}`}>
                                        {chargeRod > 0 ? 'POSITIF (+)' : chargeRod < 0 ? 'NÉGATIF (-)' : 'NEUTRE'}
                                    </div>
                                </div>
                                <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/30 z-10"></div>
                                    <div className={`absolute top-0 bottom-0 transition-all duration-300 ${chargeRod > 0 ? 'bg-red-500 left-1/2' : 'bg-blue-500 right-1/2'}`}
                                        style={{ width: `${Math.abs(chargeRod) / 2}%` }} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-purple-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-purple-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Défi Électrique
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {challenge ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm font-medium bg-black/20 p-4 rounded-lg border-l-2 border-purple-500">
                                        {challenge.desc}
                                        <div className="text-xs text-gray-400 mt-2 italic">Choisis les bons matériaux et frotte jusqu&apos;à atteindre la cible !</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2 bg-gray-800 rounded text-center">
                                            <div className="text-xs text-gray-500">Actuel</div>
                                            <div className={`font-bold ${chargeRod > 0 ? 'text-red-400' : 'text-blue-400'}`}>{Math.round(chargeRod)}</div>
                                        </div>
                                        <div className="p-2 bg-gray-800 rounded text-center">
                                            <div className="text-xs text-gray-500">Cible</div>
                                            <div className="font-bold text-white">{challenge.target}</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold shadow-lg shadow-purple-900/20 transition-all transform hover:scale-105">
                                        Lancer le Défi
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>

            {/* SCÈNE 3D -inchangée sauf refs- */}
            <group>
                <group ref={rodRef} position={[-1, 2, 0]} rotation={[0, 0, -Math.PI / 6]}>
                    <Box args={[4, 0.3, 0.3]}>
                        <meshStandardMaterial color={materials[material1]?.color || 'white'} />
                    </Box>
                    {Math.abs(chargeRod) > 10 && (
                        <group>
                            {Array.from({ length: Math.floor(Math.abs(chargeRod) / 10) }).map((_, i) => (
                                <Text key={i} position={[-1.5 + i * 0.3, 0.3, 0]} fontSize={0.2} color={chargeRod > 0 ? '#EF4444' : '#3B82F6'}>
                                    {chargeRod > 0 ? '+' : '-'}
                                </Text>
                            ))}
                            <pointLight color={chargeRod > 0 ? '#EF4444' : '#3B82F6'} intensity={Math.abs(chargeRod) / 50} distance={2} />
                        </group>
                    )}
                </group>

                {scenario === 'frottement' && (
                    <group position={[1, 1.5, 0]}>
                        <Box args={[2, 2, 0.5]}>
                            <meshStandardMaterial color={materials[material2]?.color || 'gray'} roughness={1} />
                        </Box>
                        {isRubbing && <Text position={[0, 1.2, 0]} fontSize={0.3} color="yellow">FROTTEMENT !</Text>}
                    </group>
                )}

                {(scenario === 'contact' || scenario === 'influence') && (
                    <group position={[distance - 1, 2, 0]}> {/* Position relative */}
                        <Sphere args={[0.5]} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#9CA3AF" metalness={0.9} roughness={0.1} />
                        </Sphere>
                        <Cylinder args={[0.1, 0.1, 2]} position={[0, -1.2, 0]}>
                            <meshStandardMaterial color="#6B7280" />
                        </Cylinder>
                        <group position={[0, -2.2, 0]}>
                            <Box args={[0.05, 1, 0.4]} position={[-0.2, -0.4, 0]} rotation={[0, 0, Math.min(1.5, Math.abs(chargeObject) / 50 + (scenario === 'influence' && distance < 2 ? Math.abs(chargeRod) / (distance * 20) : 0))]}>
                                <meshStandardMaterial color="gold" />
                            </Box>
                            <Box args={[0.05, 1, 0.4]} position={[0.2, -0.4, 0]} rotation={[0, 0, -Math.min(1.5, Math.abs(chargeObject) / 50 + (scenario === 'influence' && distance < 2 ? Math.abs(chargeRod) / (distance * 20) : 0))]}>
                                <meshStandardMaterial color="gold" />
                            </Box>
                        </group>
                        {Math.abs(chargeObject) > 5 && (
                            <Text position={[0, 0.7, 0]} fontSize={0.3} color={chargeObject > 0 ? '#EF4444' : '#3B82F6'}>
                                {chargeObject > 0 ? '+++' : '---'}
                            </Text>
                        )}
                        {scenario === 'influence' && distance < 2 && Math.abs(chargeRod) > 20 && (
                            <group>
                                <Text position={[-0.6, 0.3, 0]} fontSize={0.2} color={chargeRod > 0 ? '#3B82F6' : '#EF4444'}>
                                    {chargeRod > 0 ? '-' : '+'}
                                </Text>
                                <Text position={[0.6, 0.3, 0]} fontSize={0.2} color={chargeRod > 0 ? '#EF4444' : '#3B82F6'}>
                                    {chargeRod > 0 ? '+' : '-'}
                                </Text>
                            </group>
                        )}
                    </group>
                )}
            </group>
        </group>
    );
}

// ============================================================
// P2-P4. CIRCUIT ÉLECTRIQUE - Tension et Intensité
// ============================================================
// ============================================================
// P2-P4. CIRCUIT ÉLECTRIQUE - Tension et Intensité (ENRICHI)
// ============================================================
export function CircuitElectriqueSeconde() {
    const [voltage, setVoltage] = useState(6);
    const [resistance, setResistance] = useState(100);
    const [circuitClosed, setCircuitClosed] = useState(true);
    const [components, setComponents] = useState(['R', 'L']); // R: Resistance, L: Lampe

    // Gamification
    const [mode, setMode] = useState('explore');
    const [targetCurrent, setTargetCurrent] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Physics Calc
    const R_lamp = 50; // Ohms (approximatif)
    const R_total = (components.includes('R') ? resistance : 0) + (components.includes('L') ? R_lamp : 0);
    const current = circuitClosed && R_total > 0 ? (voltage / R_total) * 1000 : 0; // mA

    const electronRefs = useRef([]);

    useFrame((state) => {
        if (circuitClosed && electronRefs.current.length > 0) {
            const speed = current / 500;
            electronRefs.current.forEach((electron) => {
                if (electron) {
                    electron.position.x += speed * 0.1;
                    if (electron.position.x > 3) electron.position.x = -3;
                }
            });
        }
    });

    const startChallenge = () => {
        setMode('challenge');
        setTargetCurrent(Math.floor(Math.random() * 50 + 10)); // 10-60mA
        setScore(0);
        setShowSuccess(false);
    };

    const checkChallenge = () => {
        if (!targetCurrent) return;
        if (Math.abs(current - targetCurrent) < 2) { // Tolerance 2mA
            setShowSuccess(true);
            setScore(s => s + 50);
        }
    };

    // Electrons visualization
    const electrons = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            x: -3 + (i * 0.3),
            y: 0,
            z: 0
        }));
    }, []);

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Bravo ! I = ${current.toFixed(1)} mA`} points={50} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Components 3D */}
            <group position={[-3, 0, 0]}>
                <Cylinder args={[0.3, 0.3, 1, 16]} rotation={[0, 0, Math.PI / 2]}>
                    <meshStandardMaterial color="#333" />
                </Cylinder>
                <Text position={[0, 0.8, 0]} fontSize={0.25} color="white">{voltage}V</Text>
            </group>

            {/* Circuit Loop Visualization */}
            <group>
                <Line points={[[-2.5, 0, 0], [2.5, 0, 0]]} color={circuitClosed ? "#FFFF00" : "#555"} lineWidth={3} position={[0, 1, 0]} />
                <Line points={[[-2.5, 0, 0], [2.5, 0, 0]]} color={circuitClosed ? "#FFFF00" : "#555"} lineWidth={3} position={[0, -1, 0]} />
                <Line points={[[-2.5, 1, 0], [-2.5, -1, 0]]} color={circuitClosed ? "#FFFF00" : "#555"} lineWidth={3} />
                <Line points={[[2.5, 1, 0], [2.5, -1, 0]]} color={circuitClosed ? "#FFFF00" : "#555"} lineWidth={3} />
            </group>

            {/* Composants insérés */}
            {components.includes('R') && (
                <group position={[0, 1, 0]}>
                    <Box args={[1, 0.4, 0.4]} material-color="#8D6E63" />
                    <Text position={[0, 0.5, 0]} fontSize={0.2} color="white">{resistance} Ω</Text>
                </group>
            )}

            {components.includes('L') && (
                <group position={[0, -1, 0]}>
                    <Sphere args={[0.4]} material-color={circuitClosed ? "#FFFF00" : "#444"}
                        material-emissive={circuitClosed ? "#FFFF00" : "black"}
                        material-emissiveIntensity={current / 50} />
                    <Text position={[0, -0.6, 0]} fontSize={0.2} color="white">Lampe</Text>
                </group>
            )}

            {/* Electrons Flow */}
            {circuitClosed && electrons.map((e, i) => (
                <Sphere
                    key={i}
                    ref={el => electronRefs.current[i] = el}
                    args={[0.08]}
                    position={[e.x, 1, 0]}
                >
                    <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" />
                </Sphere>
            ))}

            {/* Interrupteur */}
            <group position={[2.5, 0, 0]} onClick={() => setCircuitClosed(!circuitClosed)} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <Box args={[0.5, 0.5, 0.5]} material-color={circuitClosed ? "green" : "red"} />
                <Text position={[0.5, 0, 0]} fontSize={0.2}>I/O</Text>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔌 Circuits Électriques" showCloseButton={false} defaultPosition="bottom-center" className="w-[380px] border-yellow-500/30 text-white">
                    {/* MODE SELECTOR */}
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-yellow-500 font-bold uppercase tracking-wider mb-1">Module Physique</div>
                            <div className="text-xl font-black text-white leading-none">CIRCUITS</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <div className="mb-4">
                                <MissionObjective objective="Maîtrisez la tension et l&apos;intensité !" icon="💡" />
                            </div>

                            <div className="space-y-4 p-3 bg-gray-900/50 rounded-xl border border-white/5">
                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <label className="text-xs text-yellow-400 font-bold block mb-1">Générateur (Tension)</label>
                                    <div className="flex items-center gap-3">
                                        <input type="range" min="1" max="12" step="0.5" value={voltage} onChange={e => setVoltage(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                                        <div className="w-16 text-right font-mono text-yellow-400 font-bold">{voltage} V</div>
                                    </div>
                                </div>

                                {components.includes('R') && (
                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-orange-400 font-bold block mb-1">Résistance</label>
                                        <div className="flex items-center gap-3">
                                            <input type="range" min="10" max="500" step="10" value={resistance} onChange={e => setResistance(Number(e.target.value))}
                                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                                            <div className="w-16 text-right font-mono text-orange-400 font-bold">{resistance} Ω</div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-2">
                                    <button onClick={() => setCircuitClosed(!circuitClosed)}
                                        className={`flex-1 py-3 rounded-lg font-black text-sm transition-all transform active:scale-95 shadow-lg ${circuitClosed ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-900/30' : 'bg-red-600 hover:bg-red-500 text-white shadow-red-900/30'}`}>
                                        {circuitClosed ? 'CIRCUIT FERMÉ (ON)' : 'CIRCUIT OUVERT (OFF)'}
                                    </button>
                                </div>

                                <div className="bg-black/40 p-3 rounded-lg font-mono text-sm border-l-4 border-blue-500 flex justify-between items-center">
                                    <div className="text-gray-400">Intensité (I)</div>
                                    <div className="text-2xl font-bold text-blue-400">{current.toFixed(1)} <span className="text-sm">mA</span></div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-orange-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-orange-300 font-bold flex items-center gap-2">
                                    <span>🧠</span> Mission Ingénieur
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetCurrent ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-black/30 p-4 rounded-lg border border-orange-500/30 text-center">
                                        <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">CIBLE À ATTEINDRE</div>
                                        <div className="text-4xl font-black text-orange-500 mb-1">{targetCurrent} mA</div>
                                        <div className="text-xs text-gray-500">Ajuste la tension et la résistance pour obtenir cette intensité !</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-gray-800 p-2 rounded-lg">
                                            <label className="text-xs text-yellow-400 block mb-1">Générateur</label>
                                            <input type="range" min="1" max="12" step="0.5" value={voltage} onChange={e => setVoltage(Number(e.target.value))} className="w-full accent-yellow-500" />
                                        </div>

                                        <div className="bg-gray-800 p-2 rounded-lg">
                                            <label className="text-xs text-orange-400 block mb-1">Résistance</label>
                                            <input type="range" min="10" max="500" step="10" value={resistance} onChange={e => setResistance(Number(e.target.value))} className="w-full accent-orange-500" />
                                        </div>

                                        <div className="flex justify-between items-center bg-black/40 p-2 rounded">
                                            <span className="text-gray-400 text-xs">Actuel :</span>
                                            <span className={`font-mono font-bold ${Math.abs(current - targetCurrent) < 2 ? 'text-green-500' : 'text-white'}`}>{current.toFixed(1)} mA</span>
                                        </div>

                                        <button onClick={checkChallenge}
                                            className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-lg font-bold text-white shadow-lg shadow-orange-900/20 transform transition-all hover:scale-[1.02]">
                                            Vérifier le Circuit
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-900/20 transition-all transform hover:scale-105">
                                        Recevoir ma Mission
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P5. LOI D'OHM - Caractéristique Tension-Intensité
// ============================================================
// ============================================================
// P5. LOI D'OHM - Caractéristique Tension-Intensité (ENRICHI)
// ============================================================
export function LoiOhmSeconde() {
    const [voltage, setVoltage] = useState(0);
    const [resistance, setResistance] = useState(100);
    const [dataPoints, setDataPoints] = useState([]);
    const [showGraph, setShowGraph] = useState(true);

    // Gamification
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [mysteryR, setMysteryR] = useState(null);
    const [guessR, setGuessR] = useState('');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Physics
    const activeR = mode === 'challenge' && mysteryR ? mysteryR : resistance;
    const current = activeR > 0 ? voltage / activeR : 0; // Amps
    const currentmA = current * 1000;

    const addDataPoint = () => {
        if (voltage > 0) {
            setDataPoints(prev => [...prev, { U: voltage, I: currentmA }]);
        }
    };

    const clearData = () => {
        setDataPoints([]);
    };

    const startChallenge = () => {
        const secret = Math.floor(Math.random() * 40 + 10) * 10; // 100 to 500
        setMysteryR(secret);
        setMode('challenge');
        setVoltage(0);
        setDataPoints([]);
        setShowSuccess(false);
        setGuessR('');
    };

    const checkAnswer = () => {
        if (!mysteryR) return;
        // 5% tolerance
        if (Math.abs(Number(guessR) - mysteryR) / mysteryR < 0.1) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Bravo ! R était bien ${mysteryR} Ω`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Resistor visualization */}
            <group position={[0, 0, 0]}>
                <Box args={[2, 0.5, 0.5]}>
                    <meshStandardMaterial color={mode === 'challenge' ? "#333" : "#795548"} />
                </Box>
                {/* Resistance color bands - Hidden in challenge */}
                {mode === 'explore' && [0, 1, 2, 3].map((i) => (
                    <Box key={i} args={[0.12, 0.55, 0.55]} position={[-0.7 + i * 0.35, 0, 0]}>
                        <meshStandardMaterial color={['#9c27b0', '#000', '#795548', '#ffc107'][i]} />
                    </Box>
                ))}
                {mode === 'challenge' && (
                    <Text position={[0, 0, 0.3]} fontSize={0.2} color="white">?</Text>
                )}
            </group>

            {/* Circuit wiring */}
            <group>
                <Line points={[[-3, 0, 0], [-1, 0, 0]]} color="#f44336" lineWidth={4} />
                <Line points={[[1, 0, 0], [3, 0, 0]]} color="#2196f3" lineWidth={4} />
            </group>

            {/* Measurements Arrows */}
            <group position={[0, 1, 0]}>
                <Line points={[[-1, 0, 0], [1, 0, 0]]} color="#ff9800" lineWidth={2} />
                <Text position={[0, 0.3, 0]} fontSize={0.25} color="#ff9800">
                    U = {voltage.toFixed(1)} V
                </Text>
            </group>

            <group position={[0, -1, 0]}>
                <Text position={[0, 0, 0]} fontSize={0.25} color="#4fc3f7">
                    I = {currentmA.toFixed(1)} mA
                </Text>
                <mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <coneGeometry args={[0.1, 0.2, 32]} />
                    <meshBasicMaterial color="#4fc3f7" />
                </mesh>
            </group>

            {/* Live 3D Graph */}
            {showGraph && (
                <group position={[0, 2.5, -3]} scale={1.5}>
                    <Text position={[0, 1.8, 0]} fontSize={0.2} color="white">Caractéristique U = f(I)</Text>
                    {/* Axes */}
                    <Line points={[[-1.5, -1, 0], [1.5, -1, 0]]} color="#fff" lineWidth={2} />
                    <Line points={[[-1.5, -1, 0], [-1.5, 1.5, 0]]} color="#fff" lineWidth={2} />
                    <Text position={[1.6, -1.1, 0]} fontSize={0.15} color="#fff">I (mA)</Text>
                    <Text position={[-1.6, 1.5, 0]} fontSize={0.15} color="#fff">U (V)</Text>

                    {/* Plot Points */}
                    {dataPoints.map((point, i) => {
                        const x = -1.5 + (point.I / 200) * 3;
                        const y = -1 + (point.U / 12) * 2.5;
                        return (
                            <Sphere key={i} args={[0.05]} position={[Math.min(x, 1.5), Math.min(y, 1.5), 0]}>
                                <meshStandardMaterial color="#4caf50" emissive="#4caf50" />
                            </Sphere>
                        );
                    })}

                    {/* Current Live Point */}
                    <Sphere args={[0.07]} position={[-1.5 + (currentmA / 200) * 3, -1 + (voltage / 12) * 2.5, 0]}>
                        <meshStandardMaterial color="yellow" emissive="yellow" />
                    </Sphere>
                </group>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="📈 Loi d'Ohm" showCloseButton={false} defaultPosition="bottom-center" className="w-[380px] border-purple-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-1">Module Physique</div>
                            <div className="text-xl font-black text-white leading-none">LOI D&apos;OHM</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Tracez la caractéristique U=f(I) !" icon="📈" />

                            <div className="space-y-4 p-3 bg-gray-900/50 rounded-xl border border-white/5">
                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <label className="text-xs text-purple-400 font-bold block mb-1">Source de Tension (U)</label>
                                    <div className="flex items-center gap-3">
                                        <input type="range" min="0" max="12" step="0.1" value={voltage} onChange={e => setVoltage(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                                        <div className="w-16 text-right font-mono text-purple-400 font-bold">{voltage.toFixed(1)} V</div>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <label className="text-xs text-orange-400 font-bold block mb-1">Résistance (R)</label>
                                    <div className="flex items-center gap-3">
                                        <input type="range" min="50" max="500" step="10" value={resistance} onChange={e => setResistance(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                                        <div className="w-16 text-right font-mono text-orange-400 font-bold">{resistance} Ω</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <button onClick={addDataPoint} className="py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-xs shadow-lg shadow-blue-900/40">
                                        + Mesure (U, I)
                                    </button>
                                    <button onClick={clearData} className="py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold text-xs">
                                        Effacer Points
                                    </button>
                                </div>
                                <button onClick={() => setShowGraph(!showGraph)} className={`w-full py-2 rounded-lg font-bold text-xs transition-all ${showGraph ? 'bg-green-600/20 text-green-400 border border-green-500/50' : 'bg-gray-800 text-gray-400'}`}>
                                    {showGraph ? 'Graphe Visible' : 'Afficher Graphe'}
                                </button>

                                <div className="bg-black/40 p-2 rounded-lg font-mono text-xs border-l-4 border-yellow-500">
                                    <div className="flex justify-between">
                                        <span>Points mesurés : {dataPoints.length}</span>
                                        {dataPoints.length > 1 && (
                                            <span className="text-yellow-400">
                                                R ≈ {(dataPoints[dataPoints.length - 1].U / (dataPoints[dataPoints.length - 1].I / 1000)).toFixed(0)} Ω
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-pink-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-pink-300 font-bold flex items-center gap-2">
                                    <span>🕵️</span> Résistance Mystère
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {mysteryR ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm bg-black/30 p-3 rounded-lg border-l-2 border-pink-500 text-gray-300">
                                        Une résistance inconnue est connectée. Fais varier la tension, observe l&apos;intensité, et déduis sa valeur (R = U/I) !
                                    </div>

                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-purple-400 font-bold block mb-1">Voltage (U)</label>
                                        <input type="range" min="0" max="12" step="0.5" value={voltage} onChange={e => setVoltage(Number(e.target.value))}
                                            className="w-full accent-purple-500" />
                                        <div className="flex justify-between text-xs mt-2 font-mono">
                                            <span className="text-purple-400">U = {voltage.toFixed(1)} V</span>
                                            <span className="text-blue-400">I = {currentmA.toFixed(1)} mA</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs text-pink-300 font-bold block">Ta réponse (en Ω) :</label>
                                        <div className="flex gap-2">
                                            <input type="number" value={guessR} onChange={e => setGuessR(e.target.value)}
                                                className="w-full bg-gray-900 border border-pink-500 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-pink-500" placeholder="ex: 200" />
                                            <button onClick={checkAnswer} className="px-4 bg-pink-600 hover:bg-pink-500 rounded-lg font-bold text-white shadow-lg shadow-pink-900/30">
                                                Valider
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-bold shadow-lg shadow-pink-900/20 transition-all transform hover:scale-105">
                                        Commencer l&apos;Enquête
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P6. DIPÔLES ACTIFS - Générateur avec f.é.m et résistance interne
// ============================================================
// ============================================================
// P6. DIPÔLES ACTIFS - Générateur avec f.é.m et résistance interne (ENRICHI)
// ============================================================
export function GenerateurSeconde() {
    const [fem, setFem] = useState(9); // Force électromotrice
    const [rInterne, setRInterne] = useState(2); // Résistance interne
    const [rExterne, setRExterne] = useState(50); // Résistance externe

    // Gamification
    const [mode, setMode] = useState('explore');
    const [mysteryParams, setMysteryParams] = useState(null); // {E, r}
    const [guessE, setGuessE] = useState('');
    const [guessr, setGuessr] = useState('');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Physics
    const activeE = mode === 'challenge' && mysteryParams ? mysteryParams.E : fem;
    const active_r = mode === 'challenge' && mysteryParams ? mysteryParams.r : rInterne;

    const iTot = activeE / (active_r + rExterne);
    const uBornes = activeE - active_r * iTot;
    const pUtile = uBornes * iTot;
    const pPerdue = active_r * iTot * iTot;
    const rendement = pUtile > 0 ? (pUtile / (pUtile + pPerdue)) * 100 : 0;

    // Heat Color Interpolation
    const heatLevel = Math.min(pPerdue / 20, 1); // 0 to 1
    const batteryColor = new THREE.Color('#333333').lerp(new THREE.Color('#FF4500'), heatLevel);

    const startChallenge = () => {
        setMode('challenge');
        setMysteryParams({
            E: Math.floor(Math.random() * 8 + 4), // 4 to 12 V
            r: Math.floor(Math.random() * 5 + 1) // 1 to 6 Ohm
        });
        setRExterne(50);
        setGuessE('');
        setGuessr('');
        setShowSuccess(false);
    };

    const checkAnswer = () => {
        if (!mysteryParams) return;
        const correctE = Math.abs(Number(guessE) - mysteryParams.E) < 0.5;
        const correctr = Math.abs(Number(guessr) - mysteryParams.r) < 0.5;

        if (correctE && correctr) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Expert Batterie ! E=${mysteryParams?.E}V, r=${mysteryParams?.r}Ω`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Battery representation */}
            <group position={[-2, 0, 0]}>
                <Box args={[1.5, 2, 1]}>
                    <meshStandardMaterial color={batteryColor} emissive={heatLevel > 0.5 ? "#FF0000" : "black"} emissiveIntensity={heatLevel} />
                </Box>
                {/* Positive terminal */}
                <Cylinder args={[0.15, 0.15, 0.3, 16]} position={[0, 1.15, 0]}>
                    <meshStandardMaterial color="#f44336" />
                </Cylinder>

                {/* Internal visuals (schematic overlay) */}
                <group position={[0, 0, 0.51]}>
                    <Box args={[1.2, 1.8, 0.01]}>
                        <meshBasicMaterial color="black" opacity={0.5} transparent />
                    </Box>
                    <Text position={[0, 0.5, 0.05]} fontSize={0.2} color="#4caf50">
                        {mode === 'challenge' ? 'E = ?' : `E = ${fem}V`}
                    </Text>
                    <Box args={[0.6, 0.2, 0.05]} position={[0, 0, 0.05]} material-color="#ff9800" />
                    <Text position={[0, 0, 0.1]} fontSize={0.15} color="white">
                        {mode === 'challenge' ? 'r = ?' : `r = ${rInterne}Ω`}
                    </Text>
                </group>

                {heatLevel > 0.3 && (
                    <Text position={[0, 1.5, 0]} fontSize={0.25} color="red">
                        CHAUFFE ! {Math.round(pPerdue)}W
                    </Text>
                )}
            </group>

            {/* External circuit Wires */}
            <Line
                points={[[-1.2, 1, 0], [2, 1, 0], [2, -1, 0], [-1.2, -1, 0]]}
                color={heatLevel > 0.8 ? "#FF4500" : "#ffc107"}
                lineWidth={3 + iTot * 5}
            />

            {/* External Load */}
            <group position={[2, 0, 0]}>
                <Box args={[0.8, 1.5, 0.8]}>
                    <meshStandardMaterial color="#795548" />
                </Box>
                <Text position={[0, 0, 0.5]} fontSize={0.2} color="#fff">
                    R = {rExterne}Ω
                </Text>
                {/* Load Heating/Active Effect */}
                <pointLight position={[0, 0, 1]} intensity={pUtile} color="yellow" distance={2} />
            </group>

            {/* Voltage at terminals Meter */}
            <group position={[0, 1.5, 0]}>
                <Cylinder args={[0.4, 0.4, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#1976d2" />
                </Cylinder>
                <Text position={[0, 0, 0.1]} fontSize={0.15} color="white">VOLTMÈTRE</Text>
                <Text position={[0, -0.5, 0]} fontSize={0.3} color="#2196f3">
                    U = {uBornes.toFixed(2)} V
                </Text>
            </group>

            {/* Current Meter */}
            <group position={[0, -1.5, 0]}>
                <Cylinder args={[0.4, 0.4, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#388e3c" />
                </Cylinder>
                <Text position={[0, 0, 0.1]} fontSize={0.15} color="white">AMPÈREMÈTRE</Text>
                <Text position={[0, 0.5, 0]} fontSize={0.3} color="#4caf50">
                    I = {(iTot).toFixed(2)} A
                </Text>
            </group>

            {/* Operation Point Graph on the side (in 3D space) */}
            <group position={[4, 0, -2]} scale={0.8}>
                <Text position={[0, 2.5, 0]} fontSize={0.3} color="white">U = E - r.I</Text>
                {/* Axes */}
                <Line points={[[0, 0, 0], [3, 0, 0]]} color="white" lineWidth={2} />
                <Line points={[[0, 0, 0], [0, 2.5, 0]]} color="white" lineWidth={2} />
                <Text position={[3.2, 0, 0]} fontSize={0.2} color="white">I</Text>
                <Text position={[0, 2.7, 0]} fontSize={0.2} color="white">U</Text>

                {/* The theoretical line */}
                {mode === 'explore' && (
                    <Line
                        points={[[0, fem / 6, 0], [3, (fem - rInterne * (3 * 2)) / 6, 0]]}
                        color="gray"
                        dashed
                        lineWidth={1}
                    />
                )}

                {/* Current Operating Point */}
                <Sphere args={[0.1]} position={[iTot / 2, uBornes / 6, 0]}>
                    <meshStandardMaterial color="cyan" emissive="cyan" />
                </Sphere>
                <Line points={[[iTot / 2, 0, 0], [iTot / 2, uBornes / 6, 0]]} color="gray" dashed />
                <Line points={[[0, uBornes / 6, 0], [iTot / 2, uBornes / 6, 0]]} color="gray" dashed />
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔋 Générateur Réel" showCloseButton={false} defaultPosition="bottom-center" className="w-[380px] border-green-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-green-400 font-bold uppercase tracking-wider mb-1">Module Physique</div>
                            <div className="text-xl font-black text-white leading-none">GÉNÉRATEUR</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Visualisez l'effet de la résistance interne !" icon="🔋" />
                            <div className="space-y-4 p-3 bg-gray-900/50 rounded-xl border border-white/5">
                                <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-green-500">
                                    <div className="font-bold text-sm mb-2 text-gray-300">Caractéristiques (Source)</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="text-[10px] text-gray-400 font-bold">Force Électromotrice E (V)</label>
                                            <input type="number" value={fem} onChange={(e) => setFem(Number(e.target.value))}
                                                className="w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-sm focus:border-green-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-gray-400 font-bold">Résistance Interne r (Ω)</label>
                                            <input type="number" value={rInterne} onChange={(e) => setRInterne(Number(e.target.value))}
                                                className="w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-sm focus:border-green-500 outline-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-orange-500">
                                    <label className="text-xs text-orange-400 block mb-1 font-bold">Charge Externe R (Ω)</label>
                                    <div className="flex items-center gap-3">
                                        <input type="range" min="0" max="100" step="1" value={rExterne} onChange={e => setRExterne(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                                        <div className="w-16 text-right font-mono text-orange-400 font-bold">{rExterne} Ω</div>
                                    </div>
                                    <div className="mt-1 text-xs text-center text-gray-500">0Ω = Court-Circuit</div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div className="bg-blue-900/30 p-2 rounded text-center">
                                        <div className="text-blue-200 mb-1">Puissance Utile</div>
                                        <div className="text-lg font-bold text-blue-300">{(pUtile).toFixed(2)} W</div>
                                    </div>
                                    <div className="bg-red-900/30 p-2 rounded text-center">
                                        <div className="text-red-200 mb-1">Pertes (Joule)</div>
                                        <div className="text-lg font-bold text-red-300">{(pPerdue).toFixed(2)} W</div>
                                    </div>
                                </div>

                                {rendement > 0 && (
                                    <div className="text-center text-xs">
                                        <span className="text-gray-400">Rendement :</span>
                                        <span className={`font-bold ml-1 ${rendement < 50 ? 'text-red-400' : 'text-green-400'}`}>{rendement.toFixed(1)}%</span>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-green-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-green-300 font-bold flex items-center gap-2">
                                    <span>⚙️</span> Diagnostic Expert
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {mysteryParams ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="text-sm bg-black/30 p-3 rounded-lg border-l-2 border-green-500 text-gray-300">
                                        Ce générateur est défectueux (valeurs inconnues). <br />
                                        Fais varier la charge R, relève U et I. <br />
                                        Rappel : U = E - r.I  (donc E = U à vide)
                                    </div>

                                    <div className="bg-gray-800 p-3 rounded-lg">
                                        <label className="text-xs text-orange-400 font-bold block mb-1">Charge Externe R</label>
                                        <input type="range" min="0" max="100" step="1" value={rExterne} onChange={e => setRExterne(Number(e.target.value))}
                                            className="w-full accent-orange-500" />
                                        <div className="flex justify-between text-xs mt-2 font-mono">
                                            <span className="text-blue-400">U = {uBornes.toFixed(2)} V</span>
                                            <span className="text-green-400">I = {iTot.toFixed(2)} A</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="text-xs text-green-300 font-bold block">E (Volts) ?</label>
                                            <input type="number" value={guessE} onChange={e => setGuessE(e.target.value)}
                                                className="w-full bg-gray-900 border border-green-500 rounded px-2 py-1 text-white" />
                                        </div>
                                        <div>
                                            <label className="text-xs text-green-300 font-bold block">r (Ohms) ?</label>
                                            <input type="number" value={guessr} onChange={e => setGuessr(e.target.value)}
                                                className="w-full bg-gray-900 border border-green-500 rounded px-2 py-1 text-white" />
                                        </div>
                                    </div>
                                    <button onClick={checkAnswer} className="w-full py-2 bg-green-600 hover:bg-green-500 rounded-lg font-bold text-white shadow-lg shadow-green-900/30">
                                        Valider le Diagnostic
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold shadow-lg shadow-green-900/20 transition-all transform hover:scale-105">
                                        Diagnostiquer
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P7. AMPLIFICATEUR OPÉRATIONNEL (AOP) - IDÉAL ET RÉEL
// ============================================================
// ============================================================
// P7. AMPLIFICATEUR OPÉRATIONNEL (AOP) - IDÉAL ET RÉEL (ENRICHI)
// ============================================================
export function AOPSimulation() {
    const [aopMode, setAopMode] = useState('inverter');
    const [ve, setVe] = useState(1); // Input voltage
    const [r1, setR1] = useState(1000); // 1k
    const [r2, setR2] = useState(2000); // 2k for Gain 2
    const [vsat, setVsat] = useState(15);

    // Gamification
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [targetGain, setTargetGain] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Calculation
    let vs = 0;
    let gain = 0;

    // Logic based on aopMode
    if (aopMode === 'inverter') {
        gain = -r2 / r1;
        vs = gain * ve;
    } else if (aopMode === 'non-inverter') {
        gain = 1 + (r2 / r1);
        vs = gain * ve;
    } else if (aopMode === 'follower') {
        gain = 1;
        vs = ve;
    } else if (aopMode === 'comparator') {
        vs = ve > 0 ? vsat : -vsat;
        gain = null;
    }

    // Saturation check
    const isSaturated = Math.abs(vs) > vsat;
    if (isSaturated) vs = Math.sign(vs) * vsat;

    const startChallenge = () => {
        setMode('challenge');
        setAopMode('inverter');
        const targets = [-2, -5, -10, 2, 5, 11];
        setTargetGain(targets[Math.floor(Math.random() * targets.length)]);
        setScore(0);
        setShowSuccess(false);
        setR1(1000);
        setR2(1000);
    };

    const checkChallenge = () => {
        if (!targetGain || gain === null) return;
        if (Math.abs(gain - targetGain) < 0.1) {
            setShowSuccess(true);
            setScore(s => s + 100);
        }
    };

    return (
        <group>
            <SuccessOverlay show={showSuccess} message={`Excellent ! Gain de ${targetGain} obtenu.`} points={100} onNext={startChallenge} />
            <ConfettiExplosion active={showSuccess} />

            {/* Chip Representation (DIP8) */}
            <group position={[0, 0, 0]}>
                <Box args={[1.5, 0.4, 1]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#1f2937" />
                </Box>
                <Text position={[0, 0.21, 0]} fontSize={0.15} color="white" rotation={[-Math.PI / 2, 0, 0]}>LM741</Text>

                {/* Legs */}
                {[-0.6, -0.2, 0.2, 0.6].map(x => (
                    <group key={x}>
                        <Box args={[0.1, 0.4, 0.1]} position={[x, 0, 0.6]} material-color="#9ca3af" />
                        <Box args={[0.1, 0.4, 0.1]} position={[x, 0, -0.6]} material-color="#9ca3af" />
                    </group>
                ))}
            </group>

            {/* Circuit Visualization based on aopMode */}
            <group position={[0, 1.5, 0]}>
                <Text position={[0, 0, 0]} fontSize={0.3} color="#4fc3f7">
                    {aopMode === 'inverter' && "Montage Inverseur"}
                    {aopMode === 'non-inverter' && "Montage Non-Inverseur"}
                    {aopMode === 'follower' && "Suiveur de Tension"}
                    {aopMode === 'comparator' && "Comparateur"}
                </Text>
            </group>

            {/* Oscilloscope View (Simplified) */}
            <group position={[3.5, 0, 0]} scale={0.7}>
                <Box args={[4, 3, 0.2]} material-color="#111" />
                <Text position={[-1.5, 1.2, 0.2]} fontSize={0.2} color="#aaa">OSCILLOSCOPE</Text>

                {/* Screen Grid */}
                <Line points={[[-1.8, 0, 0.2], [1.8, 0, 0.2]]} color="#333" />
                <Line points={[[0, -1.3, 0.2], [0, 1.3, 0.2]]} color="#333" />

                {/* Input Signal Trace (Yellow) */}
                <Line
                    points={[[-1.8, ve / 10, 0.2], [1.8, ve / 10, 0.2]]} // DC simplified
                    color="#ffeb3b"
                    lineWidth={2}
                />
                <Text position={[-1.7, Math.min(1.2, (ve / 10) + 0.2), 0.2]} fontSize={0.15} color="#ffeb3b">Ve</Text>

                {/* Output Signal Trace (Blue) */}
                <Line
                    points={[[-1.8, vs / 10, 0.2], [1.8, vs / 10, 0.2]]} // DC simplified
                    color="#2196f3"
                    lineWidth={3}
                />
                <Text position={[1.7, Math.min(1.2, (vs / 10) + 0.2), 0.2]} fontSize={0.15} color="#2196f3">Vs</Text>

                {isSaturated && (
                    <Text position={[0, -1.2, 0.2]} fontSize={0.2} color="red">SATURATION !</Text>
                )}
            </group>

            {/* Schematic Wires (Dynamic) */}
            <group position={[-3, 0, 0]}>
                {/* Input */}
                <Text position={[-1, 0.5, 0]} fontSize={0.2} color="white">Ve = {ve}V</Text>

                {/* Resistors */}
                {aopMode !== 'follower' && aopMode !== 'comparator' && (
                    <>
                        <Box args={[1, 0.3, 0.3]} position={[0, 1, 0]} material-color="#795548" />
                        <Text position={[0, 1.3, 0]} fontSize={0.15} color="white">R2 = {r2}Ω</Text>

                        <Box args={[1, 0.3, 0.3]} position={[0, -1, 0]} material-color="#795548" />
                        <Text position={[0, -0.7, 0]} fontSize={0.15} color="white">R1 = {r1}Ω</Text>
                    </>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🎛️ Amplificateur Opérationnel" showCloseButton={false} defaultPosition="bottom-center" className="w-[400px] border-blue-500/30 text-white">
                    <div className="mb-4">
                        <PhaseSelector currentPhase={mode} onSelect={setMode} />
                    </div>

                    <div className="flex justify-between items-end mb-4 pb-2 border-b border-white/10">
                        <div>
                            <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Module Électronique</div>
                            <div className="text-xl font-black text-white leading-none">A.O.P.</div>
                        </div>
                        <GradeBadge score={score} />
                    </div>

                    {mode === 'explore' ? (
                        <>
                            <MissionObjective objective="Explorez les différents montages de l'AOP !" icon="🎛️" />

                            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
                                {['inverter', 'non-inverter', 'follower', 'comparator'].map(m => (
                                    <button key={m} onClick={() => setAopMode(m)}
                                        className={`px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all border ${aopMode === m ? 'bg-blue-600 text-white border-blue-400 shadow-lg' : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700'}`}>
                                        {m === 'inverter' ? "Inverseur" : m === 'non-inverter' ? "Non-Inverseur" : m === 'follower' ? "Suiveur" : "Comparateur"}
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4 p-3 bg-gray-900/50 rounded-xl border border-white/5">
                                <div className="bg-gray-800 p-3 rounded-lg">
                                    <label className="text-xs text-yellow-400 font-bold block mb-1">Tension d&apos;Entrée Ve</label>
                                    <div className="flex items-center gap-3">
                                        <input type="range" min="-5" max="5" step="0.1" value={ve} onChange={e => setVe(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                                        <div className="w-16 text-right font-mono text-yellow-400 font-bold">{ve} V</div>
                                    </div>
                                </div>

                                {(aopMode === 'inverter' || aopMode === 'non-inverter') && (
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-gray-800 p-2 rounded-lg">
                                            <label className="text-[10px] text-gray-400 block mb-1">R1 (Entrée)</label>
                                            <input type="number" value={r1} onChange={e => setR1(Number(e.target.value))}
                                                className="w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-xs outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="bg-gray-800 p-2 rounded-lg">
                                            <label className="text-[10px] text-gray-400 block mb-1">R2 (Contre-réaction)</label>
                                            <input type="number" value={r2} onChange={e => setR2(Number(e.target.value))}
                                                className="w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-xs outline-none focus:border-blue-500" />
                                        </div>
                                    </div>
                                )}

                                <div className="bg-black/40 p-3 rounded-lg font-mono text-sm border-l-4 border-blue-500">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-gray-400">Gain (G)</span>
                                        <span className="font-bold text-white">{gain !== null ? gain.toFixed(2) : 'N/A'}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Sortie (Vs)</span>
                                        <span className={`font-bold ${isSaturated ? 'text-red-500 animate-pulse' : 'text-blue-400'}`}>
                                            {vs.toFixed(2)} V
                                            {isSaturated && <span className="ml-2 text-[10px] uppercase bg-red-900/50 px-1 rounded">Sat</span>}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-blue-500/30">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-blue-300 font-bold flex items-center gap-2">
                                    <span>🎯</span> Maître du Gain
                                </h3>
                                <XPBar current={score} nextLevel={100} />
                            </div>

                            {targetGain ? (
                                <div className="space-y-4 animate-in slide-in-from-right duration-300">
                                    <div className="bg-black/30 p-4 rounded-lg border border-blue-500/30 text-center">
                                        <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">OBJECTIF</div>
                                        <div className="text-4xl font-black text-blue-500 mb-1">G = {targetGain}</div>
                                        <div className="text-xs text-gray-500">Ajuste R1 et R2 pour obtenir ce gain !</div>
                                    </div>

                                    <div className="flex gap-2 justify-center mb-2">
                                        <button onClick={() => setAopMode('inverter')} className={`px-3 py-1 text-xs rounded-full ${aopMode === 'inverter' ? 'bg-blue-600' : 'bg-gray-700'}`}>Inverseur</button>
                                        <button onClick={() => setAopMode('non-inverter')} className={`px-3 py-1 text-xs rounded-full ${aopMode === 'non-inverter' ? 'bg-blue-600' : 'bg-gray-700'}`}>Non-Inverseur</button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-gray-800 p-2 rounded-lg">
                                            <label className="text-[10px] text-gray-400 block mb-1">R1</label>
                                            <input type="range" min="100" max="10000" step="100" value={r1} onChange={e => setR1(Number(e.target.value))} className="w-full accent-blue-500" />
                                            <div className="text-right text-[10px] font-mono">{r1} Ω</div>
                                        </div>
                                        <div className="bg-gray-800 p-2 rounded-lg">
                                            <label className="text-[10px] text-gray-400 block mb-1">R2</label>
                                            <input type="range" min="100" max="10000" step="100" value={r2} onChange={e => setR2(Number(e.target.value))} className="w-full accent-blue-500" />
                                            <div className="text-right text-[10px] font-mono">{r2} Ω</div>
                                        </div>
                                    </div>

                                    <div className="bg-black/40 p-2 rounded text-center">
                                        <div className="text-xs text-gray-400">Gain Actuel</div>
                                        <div className={`text-xl font-bold ${Math.abs(gain - targetGain) < 0.1 ? 'text-green-500' : 'text-white'}`}>
                                            {gain ? gain.toFixed(2) : '??'}
                                        </div>
                                    </div>

                                    <button onClick={checkChallenge} className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-white shadow-lg shadow-blue-900/30">
                                        Vérifier
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <button onClick={startChallenge} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-900/20 transition-all transform hover:scale-105">
                                        Démarrer le Défi
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

export default {
    ElectrisationSimulation,
    CircuitElectriqueSeconde,
    LoiOhmSeconde,
    GenerateurSeconde,
    AOPSimulation
};
