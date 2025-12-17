'use client';
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Line, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================================
// GAMIFICATION COMPONENTS
// =========================================================
function ConfettiExplosion({ trigger }) {
    const particlesRef = useRef([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (trigger) {
            const newParticles = Array(50).fill(0).map((_, i) => ({
                id: i,
                x: 0,
                y: 0,
                vx: (Math.random() - 0.5) * 0.3,
                vy: Math.random() * 0.2 + 0.1,
                color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6A1'][Math.floor(Math.random() * 5)],
                size: 0.05 + Math.random() * 0.05
            }));
            setParticles(newParticles);
            setTimeout(() => setParticles([]), 2000);
        }
    }, [trigger]);

    useFrame((state, delta) => {
        particlesRef.current.forEach((mesh, i) => {
            if (mesh && particles[i]) {
                mesh.position.x += particles[i].vx;
                mesh.position.y += particles[i].vy;
                particles[i].vy -= 0.01; // Gravity
                mesh.rotation.z += 0.1;
            }
        });
    });

    return (
        <group position={[0, 0, 2]}>
            {particles.map((p, i) => (
                <mesh key={p.id} ref={el => particlesRef.current[i] = el} position={[p.x, p.y, 0]}>
                    <boxGeometry args={[p.size, p.size, p.size]} />
                    <meshBasicMaterial color={p.color} />
                </mesh>
            ))}
        </group>
    );
}

function SuccessOverlay({ show, message, onClose }) {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-in fade-in">
            <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-8 rounded-2xl border-2 border-green-400 shadow-2xl max-w-md text-center animate-in zoom-in">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-green-400 mb-2">BRAVO !</h2>
                <p className="text-white mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition-all"
                >
                    Continuer →
                </button>
            </div>
        </div>
    );
}

// =========================================================
// 1. DILUTION INTERACTIVE (Nouveau - Avec Challenge)
// =========================================================
export function DilutionSimulation() {
    // Solution Mère
    const [Ci, setCi] = useState(2.0); // Concentration initiale (mol/L)
    const [Vi, setVi] = useState(50);  // Volume à prélever (mL)

    // Fiole jaugée (Volume final)
    const [Vf, setVf] = useState(200); // Volume final (mL)

    // Calcul Cf = Ci * Vi / Vf
    const Cf = (Ci * Vi) / Vf;

    // Challenge Mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetCf, setTargetCf] = useState(0.25);
    const [showSuccess, setShowSuccess] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const tolerance = 0.02;
    const isCorrect = Math.abs(Cf - targetCf) < tolerance;

    const checkAnswer = () => {
        if (isCorrect) {
            setConfetti(true);
            setTimeout(() => setShowSuccess(true), 500);
        }
    };

    const startChallenge = () => {
        const targets = [0.1, 0.25, 0.5, 0.75, 1.0];
        setTargetCf(targets[Math.floor(Math.random() * targets.length)]);
        setChallengeMode(true);
        setShowSuccess(false);
    };

    // Animation état
    const [step, setStep] = useState(0); // 0: idle, 1: prélever, 2: verser, 3: compléter

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} />

            <ConfettiExplosion trigger={confetti} />

            {/* Solution Mère (à gauche) */}
            <group position={[-3, -1, 0]}>
                {/* Erlenmeyer */}
                <mesh>
                    <cylinderGeometry args={[0.8, 1.2, 2.5, 32]} />
                    <meshPhysicalMaterial color="#3B82F6" transmission={0.6} transparent opacity={0.5 + Ci * 0.2} />
                </mesh>
                <Text position={[0, -2, 0]} fontSize={0.3} color="white">Solution Mère</Text>
                <Text position={[0, -2.4, 0]} fontSize={0.2} color="#3B82F6">Ci = {Ci.toFixed(1)} mol/L</Text>
            </group>

            {/* Pipette (au milieu) */}
            <group position={[0, 1, 0]}>
                <mesh rotation={[0, 0, -0.2]}>
                    <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
                    <meshStandardMaterial color="#AAA" transparent opacity={0.6} />
                </mesh>
                {/* Liquide dans pipette */}
                <mesh position={[0, -0.8, 0]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.7} />
                </mesh>
                <Text position={[0.6, 0, 0]} fontSize={0.2} color="yellow">Vi = {Vi} mL</Text>
            </group>

            {/* Fiole Jaugée (à droite) */}
            <group position={[3, -1.5, 0]}>
                {/* Corps de la fiole */}
                <mesh position={[0, 0.5, 0]}>
                    <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, Math.PI * 0.3, Math.PI * 0.7]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Col */}
                <mesh position={[0, 1.8, 0]}>
                    <cylinderGeometry args={[0.3, 0.4, 1.5, 32]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Liquide dilué */}
                <mesh position={[0, 0.3, 0]}>
                    <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.65]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.1 + Cf * 0.3} />
                </mesh>
                {/* Trait de jauge */}
                <mesh position={[0, 1.5, 0]}>
                    <torusGeometry args={[0.35, 0.02, 8, 32]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.3} color="white">Fiole Jaugée</Text>
                <Text position={[0, -1.6, 0]} fontSize={0.2} color="#60A5FA">Vf = {Vf} mL</Text>
            </group>

            {/* Flèches de processus */}
            <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1.5, 0, 0), 1.5, 0xFFFFFF, 0.2, 0.15]} />
            <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 0), 1.5, 0xFFFFFF, 0.2, 0.15]} />

            <Html transform={false}>
                <DraggableHtmlPanel title="💧 Dilution (Ci·Vi = Cf·Vf)" className="w-[340px]" defaultPosition="bottom-center">
                    <div className="space-y-4 text-white">
                        {challengeMode && (
                            <div className="bg-yellow-900/50 border border-yellow-500 p-3 rounded-lg text-center">
                                <div className="text-xs text-yellow-400">🎯 DÉFI : Obtenir une concentration de</div>
                                <div className="text-2xl font-bold text-yellow-400">{targetCf.toFixed(2)} mol/L</div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <label className="text-xs text-blue-400">Ci (Solution mère)</label>
                                <input
                                    type="range" min="0.5" max="3.0" step="0.1"
                                    value={Ci} onChange={(e) => setCi(Number(e.target.value))}
                                    className="w-full h-1 bg-blue-900 rounded accent-blue-500"
                                />
                                <div className="text-right text-blue-400">{Ci.toFixed(1)} mol/L</div>
                            </div>
                            <div>
                                <label className="text-xs text-indigo-400">Vi (À prélever)</label>
                                <input
                                    type="range" min="10" max="100" step="5"
                                    value={Vi} onChange={(e) => setVi(Number(e.target.value))}
                                    className="w-full h-1 bg-indigo-900 rounded accent-indigo-500"
                                />
                                <div className="text-right text-indigo-400">{Vi} mL</div>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs text-cyan-400">Vf (Volume final)</label>
                            <div className="flex gap-2 mt-1">
                                {[100, 200, 250, 500].map(v => (
                                    <button
                                        key={v}
                                        onClick={() => setVf(v)}
                                        className={`flex-1 py-1 rounded text-xs ${Vf === v ? 'bg-cyan-600' : 'bg-gray-700'}`}
                                    >
                                        {v} mL
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-900 p-3 rounded-xl border border-gray-700 text-center">
                            <div className="text-xs text-gray-400 mb-1">Concentration finale</div>
                            <div className={`text-3xl font-bold font-mono ${challengeMode && isCorrect ? 'text-green-400' : 'text-white'}`}>
                                Cf = {Cf.toFixed(3)} mol/L
                            </div>
                            <div className="text-[10px] bg-black/30 p-1 rounded mt-2 font-mono">
                                Cf = (Ci × Vi) / Vf = ({Ci} × {Vi}) / {Vf}
                            </div>
                        </div>

                        {challengeMode ? (
                            <button
                                onClick={checkAnswer}
                                className={`w-full py-3 rounded-xl font-bold transition-all ${isCorrect ? 'bg-green-600 hover:bg-green-500' : 'bg-gray-700'}`}
                            >
                                {isCorrect ? '✓ Valider la réponse' : 'Ajuste les paramètres...'}
                            </button>
                        ) : (
                            <button
                                onClick={startChallenge}
                                className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-500"
                            >
                                🎯 Mode Challenge
                            </button>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <SuccessOverlay
                        show={showSuccess}
                        message={`Tu as correctement préparé une solution à ${targetCf} mol/L par dilution !`}
                        onClose={() => { setShowSuccess(false); setChallengeMode(false); setConfetti(false); }}
                    />
                </Html>
            )}
        </group>
    );
}

// =========================================================
// 2. TITRAGE ACIDE-BASE (Nouveau - Avec pH dynamique)
// =========================================================
export function TitrageAcideBase() {
    const [volumeBase, setVolumeBase] = useState(0); // mL de NaOH ajouté
    const [concentrationAcide] = useState(0.1); // mol/L de HCl
    const [volumeAcide] = useState(20); // mL
    const [concentrationBase] = useState(0.1); // mol/L de NaOH

    // Calcul du pH (simplifié)
    // Équivalence quand nAcide = nBase => Veq = (Ca * Va) / Cb
    const Veq = (concentrationAcide * volumeAcide) / concentrationBase;

    // Avant équivalence: excès d'acide
    // pH = -log[H3O+] avec [H3O+] ~ excès moles acide / volume total
    const moleAcide = concentrationAcide * volumeAcide / 1000;
    const moleBase = concentrationBase * volumeBase / 1000;
    const volumeTotal = (volumeAcide + volumeBase) / 1000; // L

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

    // Couleur indicateur BBT
    let indicatorColor = '#22C55E'; // Vert neutre
    if (pH < 6) indicatorColor = '#FACC15'; // Jaune acide
    else if (pH > 8) indicatorColor = '#3B82F6'; // Bleu basique

    const [isDropping, setIsDropping] = useState(false);
    const dropRef = useRef();

    const addDrop = () => {
        if (volumeBase < 40) {
            setIsDropping(true);
            setTimeout(() => {
                setVolumeBase(v => Math.min(40, v + 0.5));
                setIsDropping(false);
            }, 300);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} />

            {/* Burette */}
            <group position={[0, 3, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.2, 0.2, 4, 16]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.4} />
                </mesh>
                {/* NaOH dans burette */}
                <mesh position={[0, (40 - volumeBase) / 20 - 1, 0]}>
                    <cylinderGeometry args={[0.18, 0.18, (40 - volumeBase) / 10, 16]} />
                    <meshStandardMaterial color="#E0E7FF" transparent opacity={0.5} />
                </mesh>
                {/* Robinet */}
                <mesh position={[0.3, -1.8, 0]}>
                    <boxGeometry args={[0.3, 0.1, 0.1]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
                <Text position={[0, 2.5, 0]} fontSize={0.25} color="white">NaOH ({concentrationBase} M)</Text>
            </group>

            {/* Goutte tombante */}
            {isDropping && (
                <mesh ref={dropRef} position={[0, 0.5, 0]}>
                    <sphereGeometry args={[0.1]} />
                    <meshStandardMaterial color="#E0E7FF" />
                </mesh>
            )}

            {/* Erlenmeyer */}
            <group position={[0, -2, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.6, 1.2, 2.5, 32]} />
                    <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Solution avec indicateur */}
                <mesh position={[0, -0.3, 0]}>
                    <cylinderGeometry args={[0.55, 1.1, 1.8, 32]} />
                    <meshStandardMaterial color={indicatorColor} transparent opacity={0.7} />
                </mesh>
                <Text position={[0, -1.8, 0]} fontSize={0.2} color="white">HCl + BBT</Text>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Titrage Acide-Base" className="w-[320px]" defaultPosition="bottom-right">
                    <div className="space-y-4 text-white">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={addDrop}
                                disabled={volumeBase >= 40}
                                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all disabled:opacity-50"
                            >
                                💧 Ajouter goutte
                            </button>
                            <button
                                onClick={() => setVolumeBase(0)}
                                className="py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-xl"
                            >
                                🔄
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-gray-800 p-2 rounded text-center">
                                <div className="text-xs text-gray-400">V(NaOH) ajouté</div>
                                <div className="font-bold">{volumeBase.toFixed(1)} mL</div>
                            </div>
                            <div className="bg-gray-800 p-2 rounded text-center">
                                <div className="text-xs text-gray-400">V(équivalence)</div>
                                <div className="font-bold text-yellow-400">{Veq.toFixed(1)} mL</div>
                            </div>
                        </div>

                        {/* pH Meter */}
                        <div className="bg-gradient-to-r from-red-600 via-green-500 to-blue-600 p-1 rounded-xl">
                            <div className="bg-black p-3 rounded-lg">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-red-400">Acide</span>
                                    <span className="text-green-400">Neutre</span>
                                    <span className="text-blue-400">Basique</span>
                                </div>
                                <div className="relative h-4 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-cyan-400 to-blue-600 rounded">
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 w-2 h-6 bg-white rounded shadow-lg"
                                        style={{ left: `${(pH / 14) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <span className="text-3xl font-bold">pH = {pH.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Indicateur explication */}
                        <div className="text-xs bg-gray-900 p-2 rounded flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: indicatorColor }} />
                            <span>
                                BBT : {pH < 6 ? 'Jaune (Acide)' : pH > 8 ? 'Bleu (Basique)' : 'Vert (Neutre)'}
                            </span>
                        </div>

                        {Math.abs(volumeBase - Veq) < 0.5 && (
                            <div className="bg-green-900/50 border border-green-500 p-2 rounded text-center animate-pulse">
                                🎯 Point d'équivalence atteint !
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 3. DISSOLUTION (Animation particules)
// =========================================================
export function DissolutionSimulation() {
    const [soluteType, setSoluteType] = useState('NaCl');
    const [isDissolving, setIsDissolving] = useState(false);
    const [progress, setProgress] = useState(0);

    const solutes = {
        NaCl: { name: 'Chlorure de Sodium', formula: 'NaCl → Na⁺ + Cl⁻', color: '#FFFFFF', ionColors: ['#9333EA', '#22C55E'] },
        CuSO4: { name: 'Sulfate de Cuivre', formula: 'CuSO₄ → Cu²⁺ + SO₄²⁻', color: '#3B82F6', ionColors: ['#3B82F6', '#F97316'] },
        KMnO4: { name: 'Permanganate de K', formula: 'KMnO₄ → K⁺ + MnO₄⁻', color: '#A855F7', ionColors: ['#A855F7', '#EC4899'] },
    };

    const current = solutes[soluteType];

    // Particules d'ions
    const [ions, setIons] = useState([]);

    const startDissolution = () => {
        setIsDissolving(true);
        setProgress(0);
        setIons([]);

        // Générer les ions qui se dispersent
        const newIons = [];
        for (let i = 0; i < 20; i++) {
            newIons.push({
                id: i,
                type: i % 2,
                startX: (Math.random() - 0.5) * 0.5,
                startY: 2,
                targetX: (Math.random() - 0.5) * 2,
                targetY: -1 + Math.random() * 2,
                targetZ: (Math.random() - 0.5) * 2,
                delay: Math.random() * 1000
            });
        }
        setIons(newIons);
    };

    useFrame((state, delta) => {
        if (isDissolving && progress < 1) {
            setProgress(p => Math.min(1, p + delta * 0.3));
        }
    });

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} />

            {/* Bécher */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 4, 32, 1, true]} />
                <meshPhysicalMaterial color="white" transmission={0.9} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>

            {/* Eau */}
            <mesh position={[0, -0.5, 0]}>
                <cylinderGeometry args={[1.45, 1.45, 3, 32]} />
                <meshStandardMaterial color={isDissolving ? current.color : '#60A5FA'} transparent opacity={0.1 + progress * 0.4} />
            </mesh>

            {/* Soluté (cristaux qui disparaissent) */}
            {!isDissolving && (
                <group position={[0, 2.5, 0]}>
                    <mesh>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial color={current.color} />
                    </mesh>
                    <Text position={[0, 0.6, 0]} fontSize={0.2} color="white">{soluteType}</Text>
                </group>
            )}

            {/* Ions se dispersant */}
            {isDissolving && ions.map((ion, i) => {
                const t = Math.min(1, progress * 2 - ion.delay / 2000);
                if (t < 0) return null;
                const x = ion.startX + (ion.targetX - ion.startX) * t;
                const y = ion.startY + (ion.targetY - ion.startY) * t;
                const z = ion.targetZ * t;
                return (
                    <mesh key={ion.id} position={[x, y, z]}>
                        <sphereGeometry args={[0.08]} />
                        <meshStandardMaterial color={current.ionColors[ion.type]} emissive={current.ionColors[ion.type]} emissiveIntensity={0.3} />
                    </mesh>
                );
            })}

            <Html transform={false}>
                <DraggableHtmlPanel title="💠 Dissolution (Soluté → Ions)" className="w-[300px]" defaultPosition="bottom-left">
                    <div className="space-y-4 text-white">
                        <div className="flex gap-2">
                            {Object.keys(solutes).map(key => (
                                <button
                                    key={key}
                                    onClick={() => { setSoluteType(key); setIsDissolving(false); setProgress(0); }}
                                    className={`flex-1 py-2 rounded text-xs ${soluteType === key ? 'bg-blue-600' : 'bg-gray-700'}`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-900 p-3 rounded text-center">
                            <div className="text-sm text-gray-400">{current.name}</div>
                            <div className="text-lg font-mono mt-1">{current.formula}</div>
                        </div>

                        <button
                            onClick={startDissolution}
                            disabled={isDissolving}
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:from-blue-500 hover:to-purple-500 disabled:opacity-50"
                        >
                            {isDissolving ? 'Dissolution en cours...' : '🔬 Dissoudre le soluté'}
                        </button>

                        {progress > 0.8 && (
                            <div className="bg-green-900/50 border border-green-500 p-2 rounded text-xs text-center">
                                ✓ Solution homogène ! Les ions sont dispersés uniformément.
                            </div>
                        )}

                        <div className="text-xs text-gray-400">
                            <strong>Dissolution :</strong> Le soluté se sépare en ions qui se dispersent dans le solvant.
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 4. ÉQUILIBRAGE ÉQUATION-BILAN (Interactif)
// =========================================================
export function EquationBalancer() {
    const [coefficients, setCoefficients] = useState([1, 1, 1, 1]);
    const [currentEquation, setCurrentEquation] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const equations = [
        {
            reactants: [{ formula: 'H₂', atoms: { H: 2 } }, { formula: 'O₂', atoms: { O: 2 } }],
            products: [{ formula: 'H₂O', atoms: { H: 2, O: 1 } }],
            solution: [2, 1, 2] // 2H2 + O2 -> 2H2O
        },
        {
            reactants: [{ formula: 'N₂', atoms: { N: 2 } }, { formula: 'H₂', atoms: { H: 2 } }],
            products: [{ formula: 'NH₃', atoms: { N: 1, H: 3 } }],
            solution: [1, 3, 2] // N2 + 3H2 -> 2NH3
        },
        {
            reactants: [{ formula: 'CH₄', atoms: { C: 1, H: 4 } }, { formula: 'O₂', atoms: { O: 2 } }],
            products: [{ formula: 'CO₂', atoms: { C: 1, O: 2 } }, { formula: 'H₂O', atoms: { H: 2, O: 1 } }],
            solution: [1, 2, 1, 2] // CH4 + 2O2 -> CO2 + 2H2O
        }
    ];

    const eq = equations[currentEquation];

    // Calculer les totaux d'atomes
    const calcAtoms = (side, coeffs) => {
        const totals = {};
        side.forEach((mol, i) => {
            const coef = coeffs[i] || 1;
            Object.entries(mol.atoms).forEach(([atom, count]) => {
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
        newCoeffs[index] = Math.max(1, Math.min(6, (newCoeffs[index] || 1) + delta));
        setCoefficients(newCoeffs);
    };

    const checkAnswer = () => {
        if (isBalanced) {
            setConfetti(true);
            setTimeout(() => setShowSuccess(true), 500);
        }
    };

    const nextEquation = () => {
        setCurrentEquation((currentEquation + 1) % equations.length);
        setCoefficients([1, 1, 1, 1]);
        setShowSuccess(false);
        setConfetti(false);
    };

    return (
        <group>
            <ambientLight intensity={0.7} />

            <ConfettiExplosion trigger={confetti} />

            <Text position={[0, 3, 0]} fontSize={0.5} color="white">ÉQUILIBRER L'ÉQUATION</Text>

            {/* Affichage équation visuelle */}
            <group position={[0, 0, 0]}>
                {/* Réactifs */}
                {eq.reactants.map((mol, i) => (
                    <group key={`r${i}`} position={[-3 + i * 2, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[1.5, 1, 0.5]} />
                            <meshStandardMaterial color="#3B82F6" />
                        </mesh>
                        <Text position={[0, 0, 0.3]} fontSize={0.3} color="white">
                            {coefficients[i] > 1 ? coefficients[i] : ''}{mol.formula}
                        </Text>
                        {i < eq.reactants.length - 1 && (
                            <Text position={[1.2, 0, 0]} fontSize={0.4} color="white">+</Text>
                        )}
                    </group>
                ))}

                {/* Flèche */}
                <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-0.5, 0, 0), 1, 0xFFFFFF, 0.2, 0.15]} />

                {/* Produits */}
                {eq.products.map((mol, i) => (
                    <group key={`p${i}`} position={[2 + i * 2, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[1.5, 1, 0.5]} />
                            <meshStandardMaterial color="#22C55E" />
                        </mesh>
                        <Text position={[0, 0, 0.3]} fontSize={0.3} color="white">
                            {coefficients[eq.reactants.length + i] > 1 ? coefficients[eq.reactants.length + i] : ''}{mol.formula}
                        </Text>
                        {i < eq.products.length - 1 && (
                            <Text position={[1.2, 0, 0]} fontSize={0.4} color="white">+</Text>
                        )}
                    </group>
                ))}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Équilibrage (Conservation)" className="w-[360px]" defaultPosition="bottom-center">
                    <div className="space-y-4 text-white">
                        {/* Compteur d'atomes */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-900/50 p-2 rounded border border-blue-700">
                                <div className="text-xs text-blue-400 mb-1">Réactifs</div>
                                {Object.entries(leftAtoms).map(([atom, count]) => (
                                    <span key={atom} className="mr-2">{atom}: <strong>{count}</strong></span>
                                ))}
                            </div>
                            <div className="bg-green-900/50 p-2 rounded border border-green-700">
                                <div className="text-xs text-green-400 mb-1">Produits</div>
                                {Object.entries(rightAtoms).map(([atom, count]) => (
                                    <span key={atom} className="mr-2">{atom}: <strong>{count}</strong></span>
                                ))}
                            </div>
                        </div>

                        {/* Contrôles coefficients */}
                        <div className="grid grid-cols-4 gap-2">
                            {[...eq.reactants, ...eq.products].map((mol, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-xs text-gray-400 mb-1">{mol.formula}</div>
                                    <div className="flex items-center justify-center gap-1">
                                        <button onClick={() => updateCoef(i, -1)} className="w-6 h-6 bg-gray-700 rounded text-xs">-</button>
                                        <span className="w-6 font-bold">{coefficients[i] || 1}</span>
                                        <button onClick={() => updateCoef(i, 1)} className="w-6 h-6 bg-gray-700 rounded text-xs">+</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={checkAnswer}
                                className={`flex-1 py-3 rounded-xl font-bold ${isBalanced ? 'bg-green-600 hover:bg-green-500' : 'bg-gray-700'}`}
                            >
                                {isBalanced ? '✓ Équilibrée !' : 'Vérifier'}
                            </button>
                            <button
                                onClick={nextEquation}
                                className="py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-xl"
                            >
                                Suivant →
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <SuccessOverlay
                        show={showSuccess}
                        message="Excellent ! Tu as correctement équilibré l'équation-bilan. La masse est conservée !"
                        onClose={nextEquation}
                    />
                </Html>
            )}
        </group>
    );
}

// =========================================================
// 5. STRUCTURE DE LEWIS (Visualisation molécules)
// =========================================================
export function LewisStructure() {
    const [molecule, setMolecule] = useState('H2O');

    const molecules = {
        H2O: {
            name: 'Eau',
            atoms: [
                { el: 'O', pos: [0, 0, 0], color: '#EF4444', size: 0.5, electrons: 6 },
                { el: 'H', pos: [-0.8, -0.6, 0], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0.8, -0.6, 0], color: '#FFFFFF', size: 0.3, electrons: 1 },
            ],
            bonds: [[0, 1], [0, 2]], // Simple liaisons
            doubletsNonLiants: [{ atom: 0, count: 2 }], // O a 2 doublets non liants
            angle: '104.5°'
        },
        CO2: {
            name: 'Dioxyde de carbone',
            atoms: [
                { el: 'C', pos: [0, 0, 0], color: '#333333', size: 0.5, electrons: 4 },
                { el: 'O', pos: [-1.5, 0, 0], color: '#EF4444', size: 0.45, electrons: 6 },
                { el: 'O', pos: [1.5, 0, 0], color: '#EF4444', size: 0.45, electrons: 6 },
            ],
            bonds: [[0, 1, 2], [0, 2, 2]], // Doubles liaisons (le 3e élément = multiplicité)
            doubletsNonLiants: [{ atom: 1, count: 2 }, { atom: 2, count: 2 }],
            angle: '180°'
        },
        NH3: {
            name: 'Ammoniac',
            atoms: [
                { el: 'N', pos: [0, 0.3, 0], color: '#3B82F6', size: 0.5, electrons: 5 },
                { el: 'H', pos: [-0.7, -0.5, 0.4], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0.7, -0.5, 0.4], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0, -0.5, -0.8], color: '#FFFFFF', size: 0.3, electrons: 1 },
            ],
            bonds: [[0, 1], [0, 2], [0, 3]],
            doubletsNonLiants: [{ atom: 0, count: 1 }],
            angle: '107°'
        },
        CH4: {
            name: 'Méthane',
            atoms: [
                { el: 'C', pos: [0, 0, 0], color: '#333333', size: 0.5, electrons: 4 },
                { el: 'H', pos: [0.8, 0.8, 0.8], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [-0.8, -0.8, 0.8], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [0.8, -0.8, -0.8], color: '#FFFFFF', size: 0.3, electrons: 1 },
                { el: 'H', pos: [-0.8, 0.8, -0.8], color: '#FFFFFF', size: 0.3, electrons: 1 },
            ],
            bonds: [[0, 1], [0, 2], [0, 3], [0, 4]],
            doubletsNonLiants: [],
            angle: '109.5°'
        }
    };

    const mol = molecules[molecule];
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} />

            <Text position={[0, 3.5, 0]} fontSize={0.4} color="white">STRUCTURE DE LEWIS</Text>
            <Text position={[0, 3, 0]} fontSize={0.3} color="#FCD34D">{mol.name} ({molecule})</Text>

            <group ref={groupRef} scale={[1.5, 1.5, 1.5]}>
                {/* Atomes */}
                {mol.atoms.map((atom, i) => (
                    <group key={i} position={atom.pos}>
                        <mesh>
                            <sphereGeometry args={[atom.size, 32, 32]} />
                            <meshStandardMaterial color={atom.color} />
                        </mesh>
                        <Text position={[0, 0, atom.size + 0.1]} fontSize={0.2} color="white">{atom.el}</Text>
                    </group>
                ))}

                {/* Liaisons */}
                {mol.bonds.map((bond, i) => {
                    const a1 = mol.atoms[bond[0]];
                    const a2 = mol.atoms[bond[1]];
                    const multiplicity = bond[2] || 1;
                    const start = new THREE.Vector3(...a1.pos);
                    const end = new THREE.Vector3(...a2.pos);
                    const mid = start.clone().add(end).multiplyScalar(0.5);
                    const dir = end.clone().sub(start);
                    const len = dir.length();

                    return (
                        <group key={i}>
                            {[...Array(multiplicity)].map((_, j) => {
                                const offset = (j - (multiplicity - 1) / 2) * 0.1;
                                return (
                                    <mesh
                                        key={j}
                                        position={[mid.x, mid.y + offset, mid.z]}
                                        rotation={[0, 0, Math.atan2(dir.y, dir.x) - Math.PI / 2]}
                                    >
                                        <cylinderGeometry args={[0.05, 0.05, len * 0.6, 8]} />
                                        <meshStandardMaterial color="#888" />
                                    </mesh>
                                );
                            })}
                        </group>
                    );
                })}

                {/* Doublets non liants */}
                {mol.doubletsNonLiants.map((dnl, i) => {
                    const atom = mol.atoms[dnl.atom];
                    return [...Array(dnl.count)].map((_, j) => {
                        const angle = (j / dnl.count) * Math.PI * 2 + Math.PI / 4;
                        const offset = [Math.cos(angle) * 0.7, Math.sin(angle) * 0.7 + 0.3, 0];
                        return (
                            <group key={`${i}-${j}`} position={[atom.pos[0] + offset[0], atom.pos[1] + offset[1], atom.pos[2]]}>
                                <mesh position={[-0.08, 0, 0]}>
                                    <sphereGeometry args={[0.06]} />
                                    <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
                                </mesh>
                                <mesh position={[0.08, 0, 0]}>
                                    <sphereGeometry args={[0.06]} />
                                    <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
                                </mesh>
                            </group>
                        );
                    });
                })}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Formule de Lewis" className="w-[280px]" defaultPosition="bottom-right">
                    <div className="space-y-4 text-white">
                        <div className="grid grid-cols-4 gap-1">
                            {Object.keys(molecules).map(key => (
                                <button
                                    key={key}
                                    onClick={() => setMolecule(key)}
                                    className={`py-2 rounded text-xs ${molecule === key ? 'bg-blue-600' : 'bg-gray-700'}`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-900 p-3 rounded space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Angle de liaison</span>
                                <span className="font-bold">{mol.angle}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Liaisons</span>
                                <span className="font-bold">{mol.bonds.length}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Doublets non-liants</span>
                                <span className="font-bold text-yellow-400">
                                    {mol.doubletsNonLiants.reduce((acc, d) => acc + d.count, 0)}
                                </span>
                            </div>
                        </div>

                        <div className="text-xs text-gray-400">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-3 h-3 rounded-full bg-gray-500" />
                                <span>Liaison covalente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span>Doublet non-liant</span>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// =========================================================
// 6. TESTS D'IONS AMÉLIORÉ (Gamifié)
// =========================================================
export function ChemicalTestsGamified() {
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [selectedReactif, setSelectedReactif] = useState(null);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const solutions = [
        { id: 'A', label: 'Solution A', ions: ['Cu2+'], color: '#BFDBFE' },
        { id: 'B', label: 'Solution B', ions: ['Fe3+'], color: '#FEF3C7' },
        { id: 'C', label: 'Solution C', ions: ['Cl-'], color: '#F3F4F6' },
        { id: 'D', label: 'Solution D', ions: ['Fe2+'], color: '#D1FAE5' },
    ];

    const reactifs = [
        { id: 'NaOH', name: 'Soude (NaOH)', tests: { 'Cu2+': { precipitate: 'BLEU', color: '#3B82F6' }, 'Fe2+': { precipitate: 'VERT', color: '#22C55E' }, 'Fe3+': { precipitate: 'ROUILLE', color: '#92400E' } } },
        { id: 'AgNO3', name: 'Nitrate d\'Argent', tests: { 'Cl-': { precipitate: 'BLANC (noircit)', color: '#FFFFFF' } } },
        { id: 'BaCl2', name: 'Chlorure de Baryum', tests: { 'SO42-': { precipitate: 'BLANC', color: '#FFFFFF' } } },
    ];

    const runTest = () => {
        if (!selectedSolution || !selectedReactif) return;

        const solution = solutions.find(s => s.id === selectedSolution);
        const reactif = reactifs.find(r => r.id === selectedReactif);

        let found = null;
        for (const ion of solution.ions) {
            if (reactif.tests[ion]) {
                found = { ion, ...reactif.tests[ion] };
                break;
            }
        }

        setResult(found || { precipitate: 'AUCUN', color: null });
    };

    const identifyIon = (ion) => {
        const solution = solutions.find(s => s.id === selectedSolution);
        if (solution && solution.ions.includes(ion)) {
            setScore(s => s + 1);
            setConfetti(true);
            setTimeout(() => setShowSuccess(true), 500);
        } else {
            setResult({ precipitate: 'ERREUR ! Mauvaise identification.', color: '#EF4444' });
        }
    };

    const reset = () => {
        setSelectedSolution(null);
        setSelectedReactif(null);
        setResult(null);
        setShowSuccess(false);
        setConfetti(false);
    };

    return (
        <group>
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} />

            <ConfettiExplosion trigger={confetti} />

            <Text position={[0, 3.5, 0]} fontSize={0.4} color="white">🧪 IDENTIFICATION DES IONS</Text>

            {/* Tubes à essai */}
            <group position={[-3, 0, 0]}>
                {solutions.map((sol, i) => (
                    <group key={sol.id} position={[i * 1.5, 0, 0]}>
                        <mesh onClick={() => setSelectedSolution(sol.id)}>
                            <cylinderGeometry args={[0.3, 0.3, 2, 16]} />
                            <meshPhysicalMaterial
                                color={sol.color}
                                transmission={0.7}
                                transparent
                                opacity={selectedSolution === sol.id ? 0.9 : 0.5}
                            />
                        </mesh>
                        <Text position={[0, -1.5, 0]} fontSize={0.2} color="white">{sol.label}</Text>
                        {selectedSolution === sol.id && (
                            <mesh position={[0, 1.3, 0]}>
                                <ringGeometry args={[0.35, 0.4, 16]} />
                                <meshBasicMaterial color="#FACC15" side={THREE.DoubleSide} />
                            </mesh>
                        )}
                    </group>
                ))}
            </group>

            {/* Zone résultat */}
            {result && (
                <group position={[3, 0, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.5, 0.5, 2.5, 16]} />
                        <meshPhysicalMaterial color="white" transmission={0.8} transparent opacity={0.4} />
                    </mesh>
                    {result.color && (
                        <mesh position={[0, -0.5, 0]}>
                            <dodecahedronGeometry args={[0.4]} />
                            <meshStandardMaterial color={result.color} />
                        </mesh>
                    )}
                    <Text position={[0, -2, 0]} fontSize={0.25} color={result.color || 'gray'}>
                        {result.precipitate}
                    </Text>
                </group>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Tests Chimiques" className="w-[340px]" defaultPosition="bottom-center">
                    <div className="space-y-4 text-white">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Score</span>
                            <span className="text-2xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-1">1. Sélectionne une solution (clic sur tube)</div>
                            <div className="bg-gray-800 p-2 rounded text-center">
                                {selectedSolution ? `Solution ${selectedSolution} sélectionnée` : 'Aucune solution'}
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-gray-400 mb-1">2. Choisis un réactif</div>
                            <div className="grid grid-cols-3 gap-1">
                                {reactifs.map(r => (
                                    <button
                                        key={r.id}
                                        onClick={() => setSelectedReactif(r.id)}
                                        className={`py-2 rounded text-xs ${selectedReactif === r.id ? 'bg-blue-600' : 'bg-gray-700'}`}
                                    >
                                        {r.id}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={runTest}
                            disabled={!selectedSolution || !selectedReactif}
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold disabled:opacity-50"
                        >
                            🧫 Effectuer le test
                        </button>

                        {result && result.color && (
                            <div className="space-y-2">
                                <div className="text-xs text-gray-400">3. Quel ion est présent ?</div>
                                <div className="grid grid-cols-4 gap-1">
                                    {['Cu2+', 'Fe2+', 'Fe3+', 'Cl-'].map(ion => (
                                        <button
                                            key={ion}
                                            onClick={() => identifyIon(ion)}
                                            className="py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                                        >
                                            {ion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button onClick={reset} className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm">
                            🔄 Nouveau test
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <SuccessOverlay
                        show={showSuccess}
                        message="Excellent ! Tu as correctement identifié l'ion grâce au test caractéristique !"
                        onClose={reset}
                    />
                </Html>
            )}
        </group>
    );
}
