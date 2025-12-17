/**
 * Physique 2nde Simulations - Part 1: Électricité (Chapitres 1-7)
 * High-quality 3D simulations for Seconde curriculum
 */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text, Float, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';

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
// P1. ÉLECTRISATION - Phénomènes d'électrisation par frottement
// ============================================================
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
        plastique: { name: 'Plastique (PVC)', tendency: -5, color: '#4ADE80' }, // PVC is very negative
        ebonite: { name: 'Ébonite', tendency: -6, color: '#1F2937' }
    };

    useFrame((state) => {
        // Frottement Logic
        if (isRubbing & scenario === 'frottement') {
            const t1 = materials[material1].tendency;
            const t2 = materials[material2].tendency;
            const delta = t1 - t2; // Si t1 > t2, mat1 perd e- (devient +), mat2 gagne e- (devient -)
            // PVC (-5) vs Laine (2) => -5 - 2 = -7. PVC devient très négatif.

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
            // Transfert de charge
            const total = chargeRod + chargeObject;
            const share = total / 2;
            // Transfert progressif
            setChargeRod(prev => prev + (share - prev) * 0.1);
            setChargeObject(prev => prev + (share - prev) * 0.1);
        }

        // Influence Logic (Electroscope visual effect only, no permanent transfer)
        // Handled in render
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
            <SuccessOverlay show={showSuccess} message="Défi Réussi ! Tu maîtrises l'électrisation." points={50} onNext={generateChallenge} />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel title="⚡ Labo d'Électrostatique" showCloseButton={false} defaultPosition="bottom-center" className="w-[350px] border-blue-400/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-blue-600' : 'bg-gray-700'}`}>Exploration</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}>Défis 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-yellow-400">{score} XP</div>}
                    </div>

                    {mode === 'challenge' && challenge && (
                        <div className="mb-4 bg-purple-900/50 p-3 rounded-lg border border-purple-500/30 text-center">
                            <div className="text-sm font-bold">{challenge.desc}</div>
                            <div className="text-xs text-gray-400 mt-1">Choisis les bons matériaux et frotte !</div>
                        </div>
                    )}

                    {/* Scénarios */}
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                        {['frottement', 'contact', 'influence'].map(s => (
                            <button key={s} onClick={() => { setScenario(s); reset(); }}
                                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${scenario === s ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                            </button>
                        ))}
                    </div>

                    {scenario === 'frottement' && (
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Objet A (Mobile)</label>
                                    <select value={material1} onChange={e => setMaterial1(e.target.value)} className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600">
                                        {Object.keys(materials).map(k => <option key={k} value={k}>{materials[k].name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Objet B (Frotteur)</label>
                                    <select value={material2} onChange={e => setMaterial2(e.target.value)} className="w-full bg-gray-800 rounded p-1 text-sm border border-gray-600">
                                        {Object.keys(materials).map(k => <option key={k} value={k}>{materials[k].name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <button
                                onMouseDown={() => setIsRubbing(true)}
                                onMouseUp={() => setIsRubbing(false)}
                                onMouseLeave={() => setIsRubbing(false)}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${isRubbing ? 'bg-red-500 scale-95 shadow-inner' : 'bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 shadow-lg'}`}
                            >
                                {isRubbing ? '⚡ Frottement en cours...' : '👉 Maintenir pour Frotter'}
                            </button>
                        </div>
                    )}

                    {(scenario === 'contact' || scenario === 'influence') && (
                        <div className="space-y-3">
                            <div className="bg-black/20 p-2 rounded text-center">
                                <label className="text-xs text-gray-400 block mb-1">Charge de la règle (pré-requise)</label>
                                <input type="range" min="-100" max="100" value={chargeRod} onChange={e => setChargeRod(Number(e.target.value))} className="w-full accent-blue-500" />
                                <div className="flex justify-between text-xs font-mono">
                                    <span className="text-blue-400">-100</span>
                                    <span>{chargeRod}</span>
                                    <span className="text-red-400">+100</span>
                                </div>
                            </div>

                            <div className="bg-black/20 p-2 rounded text-center">
                                <label className="text-xs text-gray-400 block mb-1">Distance Objet (Interaction)</label>
                                <input type="range" min="0.5" max="4" step="0.1" value={distance} onChange={e => setDistance(Number(e.target.value))} className="w-full accent-green-500" />
                            </div>

                            <div className="text-xs text-gray-400 italic text-center">
                                {scenario === 'contact' ? "Approche pour toucher et transférer la charge." : "Approche pour voir la polarisation (sans toucher)."}
                            </div>
                        </div>
                    )}

                    {/* Visualisation Charge */}
                    <div className="mt-4 flex items-center gap-2 bg-black/40 p-2 rounded border border-white/10">
                        <div className="text-xs font-bold text-gray-300 w-20">ÉTAT RÈGLE :</div>
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden relative">
                            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20"></div>
                            {chargeRod !== 0 && (
                                <div
                                    className={`h-full absolute top-0 ${chargeRod > 0 ? 'bg-red-500 left-1/2' : 'bg-blue-500 right-1/2'}`}
                                    style={{ width: `${Math.abs(chargeRod) / 2}%` }}
                                ></div>
                            )}
                        </div>
                        <div className="text-xs font-mono w-8 text-right">{chargeRod > 0 ? '+' : ''}{Math.round(chargeRod)}</div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* SCÈNE 3D */}
            <group>
                {/* Règle / Baton */}
                <group ref={rodRef} position={[-1, 2, 0]} rotation={[0, 0, -Math.PI / 6]}>
                    <Box args={[4, 0.3, 0.3]}>
                        <meshStandardMaterial color={materials[material1]?.color || 'white'} />
                    </Box>
                    {/* Charges visuals */}
                    {Math.abs(chargeRod) > 10 && (
                        <group>
                            {Array.from({ length: Math.floor(Math.abs(chargeRod) / 10) }).map((_, i) => (
                                <Text key={i} position={[-1.5 + i * 0.3, 0.3, 0]} fontSize={0.2} color={chargeRod > 0 ? '#EF4444' : '#3B82F6'}>
                                    {chargeRod > 0 ? '+' : '-'}
                                </Text>
                            ))}
                            {/* Glow */}
                            <pointLight color={chargeRod > 0 ? '#EF4444' : '#3B82F6'} intensity={Math.abs(chargeRod) / 50} distance={2} />
                        </group>
                    )}
                </group>

                {/* Second Objet (Chiffon ou Electroscope) */}
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
                        {/* Électroscope simplifié (Sphère métallique sur tige) */}
                        <Sphere args={[0.5]} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#9CA3AF" metalness={0.9} roughness={0.1} />
                        </Sphere>
                        <Cylinder args={[0.1, 0.1, 2]} position={[0, -1.2, 0]}>
                            <meshStandardMaterial color="#6B7280" />
                        </Cylinder>
                        {/* Feuilles */}
                        <group position={[0, -2.2, 0]}>
                            <Box args={[0.05, 1, 0.4]} position={[-0.2, -0.4, 0]} rotation={[0, 0, Math.min(1.5, Math.abs(chargeObject) / 50 + (scenario === 'influence' && distance < 2 ? Math.abs(chargeRod) / (distance * 20) : 0))]}>
                                <meshStandardMaterial color="gold" />
                            </Box>
                            <Box args={[0.05, 1, 0.4]} position={[0.2, -0.4, 0]} rotation={[0, 0, -Math.min(1.5, Math.abs(chargeObject) / 50 + (scenario === 'influence' && distance < 2 ? Math.abs(chargeRod) / (distance * 20) : 0))]}>
                                <meshStandardMaterial color="gold" />
                            </Box>
                        </group>

                        {/* Visualisation Charges sur l'objet */}
                        {Math.abs(chargeObject) > 5 && (
                            <Text position={[0, 0.7, 0]} fontSize={0.3} color={chargeObject > 0 ? '#EF4444' : '#3B82F6'}>
                                {chargeObject > 0 ? '+++' : '---'}
                            </Text>
                        )}
                        {/* Influence Visualisation */}
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
                <DraggableHtmlPanel title="🔌 Circuit Avancé" showCloseButton={false} defaultPosition="bottom-center" className="w-[350px] border-yellow-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-yellow-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-orange-600' : 'bg-gray-700'}`}>Mission 🎯</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-orange-400 font-mono">Cible: {targetCurrent} mA</div>}
                    </div>

                    <div className="space-y-4">
                        <div className="bg-gray-800 p-3 rounded-lg">
                            <label className="text-xs text-gray-400 block mb-1">Générateur (V)</label>
                            <input type="range" min="1" max="12" step="0.5" value={voltage} onChange={e => setVoltage(Number(e.target.value))} className="w-full accent-yellow-500" />
                            <div className="text-right text-xs font-bold text-yellow-400">{voltage} V</div>
                        </div>

                        {components.includes('R') && (
                            <div className="bg-gray-800 p-3 rounded-lg">
                                <label className="text-xs text-gray-400 block mb-1">Résistance (Ω)</label>
                                <input type="range" min="10" max="500" step="10" value={resistance} onChange={e => setResistance(Number(e.target.value))} className="w-full accent-orange-500" />
                                <div className="text-right text-xs font-bold text-orange-400">{resistance} Ω</div>
                            </div>
                        )}

                        <div className="flex gap-2">
                            <button onClick={() => setCircuitClosed(!circuitClosed)} className={`flex-1 py-2 rounded font-bold transition-all ${circuitClosed ? 'bg-green-600' : 'bg-red-600'}`}>
                                {circuitClosed ? 'OUVERT (ON)' : 'FERMÉ (OFF)'}
                            </button>
                        </div>

                        {mode === 'challenge' && (
                            <button onClick={checkChallenge} className="w-full py-2 bg-orange-600 hover:bg-orange-500 rounded font-bold animate-pulse">
                                Vérifier l'Intensité
                            </button>
                        )}

                        <div className="bg-black/40 p-2 rounded font-mono text-sm border-l-4 border-blue-500">
                            <div>Intensité (I): <span className="text-blue-400">{current.toFixed(1)} mA</span></div>
                            <div>Loi d'Ohm: U = R.I</div>
                        </div>
                    </div>
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
    const [guessR, setGuessR] = useState(100);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Physics
    const activeR = mode === 'challenge' && mysteryR ? mysteryR : resistance;
    const current = activeR > 0 ? voltage / activeR : 0; // Amps
    const currentmA = current * 1000;

    const addDataPoint = () => {
        if (voltage > 0) {
            // Add some noise in challenge mode for realism? No, keep it simple for 2nd S.
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
    };

    const checkAnswer = () => {
        if (!mysteryR) return;
        // 5% tolerance
        if (Math.abs(guessR - mysteryR) / mysteryR < 0.1) {
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
                        // Normalize: I max ~120mA (12V/100Ohm), U max 12V
                        // Map I (0..200) -> x (-1.5 .. 1.5)
                        // Map U (0..12) -> y (-1 .. 1.5)
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
                <DraggableHtmlPanel title="📈 Loi d'Ohm - Analyse" showCloseButton={false} defaultPosition="bottom-center" className="w-[350px] border-purple-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setMode('explore')} className={`text-xs px-2 py-1 rounded ${mode === 'explore' ? 'bg-purple-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${mode === 'challenge' ? 'bg-pink-600' : 'bg-gray-700'}`}>Défis 🏆</button>
                        </div>
                        {mode === 'challenge' && <div className="font-bold text-pink-400">{score} XP</div>}
                    </div>

                    {mode === 'challenge' && (
                        <div className="bg-pink-900/40 p-2 rounded mb-4 border border-pink-500/30 text-sm">
                            <span className="font-bold">Mission:</span> Détermine la valeur de la résistance mystère.
                            Fais varier U, note I, et déduis R !
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="bg-gray-800 p-3 rounded-lg">
                            <label className="text-xs text-gray-400 block mb-1">Source de Tension (U)</label>
                            <input type="range" min="0" max="12" step="0.1" value={voltage} onChange={e => setVoltage(Number(e.target.value))} className="w-full accent-purple-500" />
                            <div className="text-right text-xs font-bold text-purple-400">{voltage.toFixed(1)} V</div>
                        </div>

                        {mode === 'explore' && (
                            <div className="bg-gray-800 p-3 rounded-lg">
                                <label className="text-xs text-gray-400 block mb-1">Résistance (R)</label>
                                <input type="range" min="50" max="500" step="10" value={resistance} onChange={e => setResistance(Number(e.target.value))} className="w-full accent-orange-500" />
                                <div className="text-right text-xs font-bold text-orange-400">{resistance} Ω</div>
                            </div>
                        )}

                        <div className="flex gap-2">
                            <button onClick={addDataPoint} className="flex-1 py-2 bg-blue-600 hover:bg-blue-500 rounded font-bold text-xs">
                                + Mesure (U, I)
                            </button>
                            <button onClick={clearData} className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 rounded font-bold text-xs">
                                Effacer
                            </button>
                            <button onClick={() => setShowGraph(!showGraph)} className={`flex-1 py-2 rounded font-bold text-xs ${showGraph ? 'bg-green-600' : 'bg-gray-700'}`}>
                                Graphique
                            </button>
                        </div>

                        {mode === 'challenge' && (
                            <div className="border-t border-gray-600 pt-3">
                                <label className="text-xs text-pink-300 block mb-1">Ta réponse R (Ω) :</label>
                                <div className="flex gap-2">
                                    <input type="number" value={guessR} onChange={e => setGuessR(Number(e.target.value))} className="w-20 bg-gray-900 border border-pink-500 rounded px-2" />
                                    <button onClick={checkAnswer} className="flex-1 bg-pink-600 hover:bg-pink-500 rounded font-bold text-xs">Valider</button>
                                </div>
                            </div>
                        )}

                        <div className="bg-black/40 p-2 rounded font-mono text-xs border-l-4 border-yellow-500">
                            <div>Points: {dataPoints.length}</div>
                            {dataPoints.length > 1 && (
                                <div className="text-gray-400 mt-1">
                                    Pente estimée (U/I) ≈ {(dataPoints[dataPoints.length - 1].U / (dataPoints[dataPoints.length - 1].I / 1000)).toFixed(0)} Ω
                                </div>
                            )}
                        </div>
                    </div>
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
    const [showHeat, setShowHeat] = useState(true);

    const iTot = fem / (rInterne + rExterne);
    const uBornes = fem - rInterne * iTot;
    const pUtile = uBornes * iTot;
    const pPerdue = rInterne * iTot * iTot;
    const rendement = (pUtile / (pUtile + pPerdue)) * 100;

    // Heat Color Interpolation
    // Max heating when short circuit (R -> 0). Power ~ E^2/r.
    // If E=12, r=1 => P = 144 Watts (huge). 
    // Let's visual scale: 0 W -> Normal, 50 W -> Red Hot.
    const heatLevel = Math.min(pPerdue / 20, 1); // 0 to 1
    const batteryColor = new THREE.Color('#333333').lerp(new THREE.Color('#FF4500'), heatLevel);

    // Particles for energy flow?
    const particles = useRef([]);
    useFrame((state) => {
        // Animate particles flow speed prop to current
        if (particles.current) {
            // ... simple visual update could go here
        }
    });

    return (
        <group>
            {/* Battery representation */}
            <group position={[-2, 0, 0]}>
                <Box args={[1.5, 2, 1]}>
                    {/* Dynamic material color for heat */}
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
                    <Text position={[0, 0.5, 0.05]} fontSize={0.2} color="#4caf50">E = {fem}V</Text>
                    <Box args={[0.6, 0.2, 0.05]} position={[0, 0, 0.05]} material-color="#ff9800" />
                    <Text position={[0, 0, 0.1]} fontSize={0.15} color="white">r = {rInterne}Ω</Text>
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
                color={heatLevel > 0.8 ? "#FF4500" : "#ffc107"} // Wires glow too if high current
                lineWidth={3 + iTot * 5} // Thicker line for more current
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
                <Line
                    points={[[0, fem / 6, 0], [3, (fem - rInterne * (3 * 2)) / 6, 0]]} // Scaling I (0-6A -> 0-3), U (0-12V -> 0-2)
                    color="gray"
                    dashed
                    lineWidth={1}
                />

                {/* Current Operating Point */}
                <Sphere args={[0.1]} position={[iTot / 2, uBornes / 6, 0]}>
                    <meshStandardMaterial color="cyan" emissive="cyan" />
                </Sphere>
                <Line points={[[iTot / 2, 0, 0], [iTot / 2, uBornes / 6, 0]]} color="gray" dashed />
                <Line points={[[0, uBornes / 6, 0], [iTot / 2, uBornes / 6, 0]]} color="gray" dashed />
            </group>


            <Html transform={false}>
                <DraggableHtmlPanel title="🔋 Générateur Réel" showCloseButton={false} defaultPosition="bottom-center" className="w-[350px] border-green-500/30 text-white">
                    <div className="space-y-4">
                        <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-green-500">
                            <div className="font-bold text-sm mb-2">Caractéristiques du Générateur</div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="text-[10px] text-gray-400">Force Électromotrice E (V)</label>
                                    <input type="number" value={fem} onChange={(e) => setFem(Number(e.target.value))} className="w-full bg-gray-900 border border-gray-600 rounded px-1 text-sm" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400">Résistance Interne r (Ω)</label>
                                    <input type="number" value={rInterne} onChange={(e) => setRInterne(Number(e.target.value))} className="w-full bg-gray-900 border border-gray-600 rounded px-1 text-sm" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-brown-500">
                            <label className="text-xs text-gray-400 block mb-1">Charge Externe R (Ω)</label>
                            <input type="range" min="0" max="100" step="1" value={rExterne} onChange={e => setRExterne(Number(e.target.value))} className="w-full accent-orange-500" />
                            <div className="flex justify-between text-xs">
                                <span>Court-Circuit (0Ω)</span>
                                <span className="font-bold text-orange-400">{rExterne} Ω</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-blue-900/30 p-2 rounded">
                                <div className="text-gray-400">Puissance Utile</div>
                                <div className="text-lg font-bold text-blue-300">{(pUtile).toFixed(2)} W</div>
                            </div>
                            <div className="bg-red-900/30 p-2 rounded">
                                <div className="text-gray-400">Pertes (Joule)</div>
                                <div className="text-lg font-bold text-red-300">{(pPerdue).toFixed(2)} W</div>
                            </div>
                        </div>

                        {rendement < 50 && (
                            <div className="text-xs text-red-400 animate-pulse text-center font-bold">
                                Attention : Rendement faible ({rendement.toFixed(0)}%) ! Le générateur chauffe.
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P7. AMPLIFICATEUR OPÉRATIONNEL (AOP) - IDÉAL ET RÉEL
// ============================================================
export function AOPSimulation() {
    const [mode, setMode] = useState('inverter'); // inverter, non-inverter, comparator, follower
    const [ve, setVe] = useState(1); // Input voltage
    const [r1, setR1] = useState(1000); // 1k
    const [r2, setR2] = useState(2000); // 2k for Gain 2
    const [vsat, setVsat] = useState(15);
    const [showSchema, setShowSchema] = useState(true);

    // Gamification
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetGain, setTargetGain] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    // Calculation
    let vs = 0;
    let gain = 0;

    if (mode === 'inverter') {
        gain = -r2 / r1;
        vs = gain * ve;
    } else if (mode === 'non-inverter') {
        gain = 1 + (r2 / r1);
        vs = gain * ve;
    } else if (mode === 'follower') {
        gain = 1;
        vs = ve;
    } else if (mode === 'comparator') {
        // Simple comparator with Vref = 0 for now
        vs = ve > 0 ? vsat : -vsat;
        gain = null;
    }

    // Saturation check
    const isSaturated = Math.abs(vs) > vsat;
    if (isSaturated) vs = Math.sign(vs) * vsat;

    const startChallenge = () => {
        setChallengeMode(true);
        const targets = [-2, -5, -10, 2, 5, 11];
        setTargetGain(targets[Math.floor(Math.random() * targets.length)]);
        setScore(0);
        setShowSuccess(false);
        // Reset R so user has to find it
        setR1(1000);
        setR2(1000);
    };

    const checkChallenge = () => {
        if (!targetGain || !gain) return;
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

            {/* Circuit Visualization based on Mode */}
            <group position={[0, 1.5, 0]}>
                {mode === 'inverter' && (
                    <Text position={[0, 0, 0]} fontSize={0.3} color="#4fc3f7">Montage Inverseur</Text>
                )}
                {mode === 'non-inverter' && (
                    <Text position={[0, 0, 0]} fontSize={0.3} color="#4fc3f7">Montage Non-Inverseur</Text>
                )}
                {mode === 'follower' && (
                    <Text position={[0, 0, 0]} fontSize={0.3} color="#4fc3f7">Suiveur de Tension</Text>
                )}
                {mode === 'comparator' && (
                    <Text position={[0, 0, 0]} fontSize={0.3} color="#4fc3f7">Comparateur</Text>
                )}
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
                <Text position={[-1.7, (ve / 10) + 0.2, 0.2]} fontSize={0.15} color="#ffeb3b">Ve</Text>

                {/* Output Signal Trace (Blue) */}
                <Line
                    points={[[-1.8, vs / 10, 0.2], [1.8, vs / 10, 0.2]]} // DC simplified
                    color="#2196f3"
                    lineWidth={3}
                />
                <Text position={[1.7, (vs / 10) + 0.2, 0.2]} fontSize={0.15} color="#2196f3">Vs</Text>

                {isSaturated && (
                    <Text position={[0, -1.2, 0.2]} fontSize={0.2} color="red">SATURATION !</Text>
                )}
            </group>

            {/* Schematic Wires (Dynamic) */}
            <group position={[-3, 0, 0]}>
                {/* Input */}
                <Text position={[-1, 0.5, 0]} fontSize={0.2} color="white">Ve = {ve}V</Text>

                {/* Resistors */}
                {mode !== 'follower' && mode !== 'comparator' && (
                    <>
                        <Box args={[1, 0.3, 0.3]} position={[0, 1, 0]} material-color="#795548" />
                        <Text position={[0, 1.3, 0]} fontSize={0.15} color="#fff">R2 = {r2}Ω</Text>

                        <Box args={[1, 0.3, 0.3]} position={[0, -1, 0]} material-color="#795548" />
                        <Text position={[0, -0.7, 0]} fontSize={0.15} color="#fff">R1 = {r1}Ω</Text>
                    </>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="📟 Contrôle AOP" showCloseButton={false} defaultPosition="bottom-center" className="w-[350px] border-cyan-500/30 text-white">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <button onClick={() => setChallengeMode(false)} className={`text-xs px-2 py-1 rounded ${!challengeMode ? 'bg-cyan-600' : 'bg-gray-700'}`}>Labo</button>
                            <button onClick={startChallenge} className={`text-xs px-2 py-1 rounded ${challengeMode ? 'bg-pink-600' : 'bg-gray-700'}`}>Défi Gain 🏆</button>
                        </div>
                        {challengeMode && <div className="font-bold text-pink-400">Objectif: Gain {targetGain}</div>}
                    </div>

                    <div className="space-y-4">
                        {!challengeMode && (
                            <div className="grid grid-cols-2 gap-2">
                                <button onClick={() => setMode('inverter')} className={`text-[10px] p-1 rounded ${mode === 'inverter' ? 'bg-blue-600' : 'bg-gray-700'}`}>Inverseur</button>
                                <button onClick={() => setMode('non-inverter')} className={`text-[10px] p-1 rounded ${mode === 'non-inverter' ? 'bg-blue-600' : 'bg-gray-700'}`}>Non-Inv.</button>
                                <button onClick={() => setMode('follower')} className={`text-[10px] p-1 rounded ${mode === 'follower' ? 'bg-blue-600' : 'bg-gray-700'}`}>Suiveur</button>
                                <button onClick={() => setMode('comparator')} className={`text-[10px] p-1 rounded ${mode === 'comparator' ? 'bg-blue-600' : 'bg-gray-700'}`}>Comparateur</button>
                            </div>
                        )}

                        <div className="bg-gray-800 p-3 rounded border-l-4 border-yellow-500">
                            <label className="text-xs text-gray-400 block mb-1">Tension d'entrée Ve (V)</label>
                            <input type="range" min="-10" max="10" step="0.5" value={ve} onChange={e => setVe(Number(e.target.value))} className="w-full accent-yellow-400" />
                            <div className="text-right text-xs text-yellow-400 font-mono">{ve} V</div>
                        </div>

                        {(mode === 'inverter' || mode === 'non-inverter') && (
                            <div className="bg-gray-800 p-3 rounded">
                                <label className="text-xs text-gray-400 block mb-1">Résistance R1 (Ω)</label>
                                <input type="range" min="100" max="5000" step="100" value={r1} onChange={e => setR1(Number(e.target.value))} className="w-full accent-gray-400" />
                                <div className="text-right text-xs text-gray-400 font-mono">{r1} Ω</div>

                                <label className="text-xs text-gray-400 block mt-2 mb-1">Résistance R2 (Ω)</label>
                                <input type="range" min="100" max="10000" step="100" value={r2} onChange={e => setR2(Number(e.target.value))} className="w-full accent-gray-400" />
                                <div className="text-right text-xs text-gray-400 font-mono">{r2} Ω</div>
                            </div>
                        )}

                        <div className="bg-blue-900/30 p-2 rounded border border-blue-500/30">
                            <div className="flex justify-between text-sm">
                                <span>Gain Calc:</span>
                                <span className="font-bold">{gain ? gain.toFixed(2) : 'N/A'}</span>
                            </div>
                            <div className="flex justify-between text-sm mt-1">
                                <span>Sortie Vs:</span>
                                <span className={`font-bold ${isSaturated ? 'text-red-400' : 'text-blue-300'}`}>{vs.toFixed(2)} V</span>
                            </div>
                        </div>

                        {challengeMode && (
                            <button onClick={checkChallenge} className="w-full py-2 bg-pink-600 hover:bg-pink-500 rounded font-bold text-sm">
                                Vérifier Gain
                            </button>
                        )}
                    </div>
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
