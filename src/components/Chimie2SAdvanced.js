'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// =========================================================
// COMPOSANTS DE GAMIFICATION PARTAGÉS
// =========================================================

function Confetti({ active }) {
    const groupRef = useRef();
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        if (active) {
            const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6A1', '#DDA0DD'];
            const newParticles = [];
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: (Math.random() - 0.5) * 0.5,
                    y: 2 + Math.random(),
                    z: (Math.random() - 0.5) * 0.5,
                    vx: (Math.random() - 0.5) * 0.1,
                    vy: Math.random() * 0.15 + 0.05,
                    vz: (Math.random() - 0.5) * 0.1,
                    color: colors[i % colors.length],
                    size: 0.02 + Math.random() * 0.02
                });
            }
            setParticles(newParticles);
            const timer = setTimeout(() => setParticles([]), 3000);
            return () => clearTimeout(timer);
        }
    }, [active]);

    useFrame(() => {
        if (groupRef.current && particles.length > 0) {
            groupRef.current.children.forEach((mesh, i) => {
                if (particles[i]) {
                    mesh.position.x += particles[i].vx;
                    mesh.position.y += particles[i].vy;
                    mesh.position.z += particles[i].vz;
                    particles[i].vy -= 0.005;
                    mesh.rotation.x += 0.1;
                }
            });
        }
    });

    if (particles.length === 0) return null;

    return (
        <group ref={groupRef}>
            {particles.map((p) => (
                <mesh key={p.id} position={[p.x, p.y, p.z]}>
                    <boxGeometry args={[p.size, p.size, p.size * 0.3]} />
                    <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={0.3} />
                </mesh>
            ))}
        </group>
    );
}

// =========================================================
// C2. STRUCTURE ATOMIQUE - AMÉLIORÉE
// =========================================================
export function AtomicStructureAdvanced() {
    const [element, setElement] = useState('C');
    const [showElectrons, setShowElectrons] = useState(true);
    const [showLabels, setShowLabels] = useState(true);
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const elements = {
        H: { name: 'Hydrogène', Z: 1, A: 1, electrons: [1], color: '#FFFFFF', nucleusColor: '#EF4444' },
        He: { name: 'Hélium', Z: 2, A: 4, electrons: [2], color: '#D1FAE5', nucleusColor: '#FBBF24' },
        Li: { name: 'Lithium', Z: 3, A: 7, electrons: [2, 1], color: '#FDE68A', nucleusColor: '#8B5CF6' },
        C: { name: 'Carbone', Z: 6, A: 12, electrons: [2, 4], color: '#374151', nucleusColor: '#3B82F6' },
        N: { name: 'Azote', Z: 7, A: 14, electrons: [2, 5], color: '#60A5FA', nucleusColor: '#10B981' },
        O: { name: 'Oxygène', Z: 8, A: 16, electrons: [2, 6], color: '#EF4444', nucleusColor: '#F59E0B' },
        Na: { name: 'Sodium', Z: 11, A: 23, electrons: [2, 8, 1], color: '#A78BFA', nucleusColor: '#EC4899' },
        Cl: { name: 'Chlore', Z: 17, A: 35, electrons: [2, 8, 7], color: '#22C55E', nucleusColor: '#06B6D4' },
        Ca: { name: 'Calcium', Z: 20, A: 40, electrons: [2, 8, 8, 2], color: '#F5F5F4', nucleusColor: '#84CC16' },
    };

    const challenges = [
        { question: "Combien de protons dans le Carbone ?", answer: 6, element: 'C' },
        { question: "Combien de neutrons dans l'Oxygène-16 ?", answer: 8, element: 'O' },
        { question: "Combien d'électrons de valence pour le Chlore ?", answer: 7, element: 'Cl' },
        { question: "Combien de couches électroniques pour le Sodium ?", answer: 3, element: 'Na' },
        { question: "Le numéro atomique de l'Azote est ?", answer: 7, element: 'N' },
    ];

    const el = elements[element];
    const neutrons = el.A - el.Z;
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    const startChallenge = () => {
        setChallengeMode(true);
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setCurrentChallenge(challenge);
        setElement(challenge.element);
    };

    const checkAnswer = (answer) => {
        if (currentChallenge && answer === currentChallenge.answer) {
            setScore(prev => prev + 50);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                startChallenge();
            }, 2000);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.35} color="#60A5FA" anchorX="center">
                🔬 STRUCTURE DE L'ATOME
            </Text>
            <Text position={[0, 3, 0]} fontSize={0.25} color="white" anchorX="center">
                {el.name} ({element}) - Z={el.Z}, A={el.A}
            </Text>

            <group ref={groupRef}>
                {/* Noyau */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={el.nucleusColor} emissive={el.nucleusColor} emissiveIntensity={0.3} />
                </mesh>

                {/* Protons et Neutrons dans le noyau */}
                {Array(Math.min(el.Z, 8)).fill(0).map((_, i) => {
                    const angle = (i / Math.min(el.Z, 8)) * Math.PI * 2;
                    const r = 0.2;
                    return (
                        <mesh key={`p${i}`} position={[Math.cos(angle) * r, Math.sin(angle) * r * 0.5, Math.sin(angle) * r]}>
                            <sphereGeometry args={[0.1, 16, 16]} />
                            <meshStandardMaterial color="#EF4444" />
                        </mesh>
                    );
                })}

                {showLabels && (
                    <Text position={[0, 0, 0.6]} fontSize={0.15} color="white">
                        {el.Z}p+ {neutrons}n
                    </Text>
                )}

                {/* Couches électroniques */}
                {showElectrons && el.electrons.map((count, layerIndex) => {
                    const radius = 1 + layerIndex * 0.8;
                    return (
                        <group key={layerIndex}>
                            {/* Orbite */}
                            <mesh rotation={[Math.PI / 2, 0, 0]}>
                                <torusGeometry args={[radius, 0.02, 8, 64]} />
                                <meshBasicMaterial color="#4B5563" transparent opacity={0.5} />
                            </mesh>

                            {/* Électrons */}
                            {Array(count).fill(0).map((_, eIndex) => {
                                const angle = (eIndex / count) * Math.PI * 2;
                                return (
                                    <group key={eIndex}>
                                        <mesh position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
                                            <sphereGeometry args={[0.08, 16, 16]} />
                                            <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5} />
                                        </mesh>
                                    </group>
                                );
                            })}

                            {showLabels && (
                                <Text position={[radius + 0.3, 0.3, 0]} fontSize={0.12} color="#9CA3AF">
                                    {['K', 'L', 'M', 'N'][layerIndex]} ({count}e⁻)
                                </Text>
                            )}
                        </group>
                    );
                })}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚛️ Structure Atomique" className="w-[340px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-gray-400">Score</span>
                            <span className="text-xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        {/* Mode Défi */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-purple-900/40 border border-purple-500/50 p-3 rounded-xl">
                                <div className="text-xs text-purple-400 mb-1">🎯 DÉFI</div>
                                <div className="font-bold mb-2">{currentChallenge.question}</div>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                        <button
                                            key={n}
                                            onClick={() => checkAnswer(n)}
                                            className="py-2 bg-gray-700 hover:bg-gray-600 rounded font-bold"
                                        >
                                            {n}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Sélection élément */}
                        {!challengeMode && (
                            <div>
                                <div className="text-xs text-gray-400 mb-2">Élément :</div>
                                <div className="grid grid-cols-5 gap-1">
                                    {Object.keys(elements).map(key => (
                                        <button
                                            key={key}
                                            onClick={() => setElement(key)}
                                            className={`py-2 rounded text-xs font-bold transition-all ${element === key
                                                ? 'bg-blue-600 border border-blue-400'
                                                : 'bg-gray-800 hover:bg-gray-700'
                                                }`}
                                        >
                                            {key}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Infos */}
                        {!challengeMode && (
                            <div className="bg-gray-900/50 p-3 rounded-lg space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Protons (Z)</span>
                                    <span className="font-bold text-red-400">{el.Z}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Neutrons (N)</span>
                                    <span className="font-bold text-gray-300">{neutrons}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Électrons</span>
                                    <span className="font-bold text-blue-400">{el.Z}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Configuration</span>
                                    <span className="font-bold">{el.electrons.join(', ')}</span>
                                </div>
                            </div>
                        )}

                        {/* Options */}
                        <div className="flex gap-2">
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={showElectrons}
                                    onChange={e => setShowElectrons(e.target.checked)}
                                    className="rounded"
                                />
                                Électrons
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={showLabels}
                                    onChange={e => setShowLabels(e.target.checked)}
                                    className="rounded"
                                />
                                Labels
                            </label>
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={startChallenge}
                                className="py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold"
                            >
                                🎯 Mode Défi
                            </button>
                            <button
                                onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }}
                                className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold"
                            >
                                📚 Explorer
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Success Overlay */}
            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">🎉</div>
                            <div className="text-2xl font-bold text-green-400">Correct !</div>
                            <div className="text-yellow-400 text-lg">+50 pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// =========================================================
// C4. LA MOLE - AMÉLIORÉE AVEC DÉFI
// =========================================================
export function MoleScaleAdvanced() {
    const [substance, setSubstance] = useState('H2O');
    const [mass, setMass] = useState(18);
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

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
    const N = n * 6.02e23; // nombre d'entités

    const challenges = [
        { question: "Quelle masse pour 2 mol d'eau (M=18) ?", answer: 36, unit: 'g' },
        { question: "Combien de mol dans 58,5g de NaCl (M=58,5) ?", answer: 1, unit: 'mol' },
        { question: "Quelle masse pour 0,5 mol de CO₂ (M=44) ?", answer: 22, unit: 'g' },
        { question: "Combien de mol dans 36g de carbone (M=12) ?", answer: 3, unit: 'mol' },
        { question: "Quelle masse pour 3 mol de glucose (M=180) ?", answer: 540, unit: 'g' },
    ];

    const balanceRef = useRef();
    const weightRef = useRef();

    useFrame((state, delta) => {
        if (weightRef.current) {
            // Animation de la balance
            const targetY = -0.5 - (mass / 100) * 0.3;
            weightRef.current.position.y += (targetY - weightRef.current.position.y) * 0.1;
        }
    });

    const startChallenge = () => {
        setChallengeMode(true);
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setCurrentChallenge(challenge);
        setUserAnswer('');
    };

    const checkAnswer = () => {
        if (!currentChallenge) return;
        const answer = parseFloat(userAnswer);
        if (Math.abs(answer - currentChallenge.answer) < 0.1) {
            setScore(prev => prev + 100);
            setShowConfetti(true);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                startChallenge();
            }, 2000);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showConfetti} />

            <Text position={[0, 3.5, 0]} fontSize={0.35} color="#60A5FA" anchorX="center">
                ⚖️ LA MOLE - QUANTITÉ DE MATIÈRE
            </Text>

            {/* Balance */}
            <group ref={balanceRef} position={[0, 0, 0]}>
                {/* Pied de la balance */}
                <mesh position={[0, -2, 0]}>
                    <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
                    <meshStandardMaterial color="#374151" metalness={0.8} />
                </mesh>
                <mesh position={[0, -1.5, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
                    <meshStandardMaterial color="#4B5563" metalness={0.7} />
                </mesh>

                {/* Plateau de la balance */}
                <group ref={weightRef} position={[0, -0.5, 0]}>
                    <mesh>
                        <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
                        <meshStandardMaterial color="#6B7280" metalness={0.6} />
                    </mesh>

                    {/* Substance sur le plateau */}
                    <mesh position={[0, 0.3, 0]}>
                        <sphereGeometry args={[0.3 + (mass / 100) * 0.4, 32, 32]} />
                        <meshStandardMaterial color={sub.color} />
                    </mesh>

                    {/* Particules représentatives */}
                    {Array(Math.min(Math.floor(n * 3), 15)).fill(0).map((_, i) => {
                        const angle = (i / 15) * Math.PI * 2;
                        const r = 0.5 + Math.random() * 0.3;
                        return (
                            <mesh key={i} position={[Math.cos(angle) * r, 0.2 + Math.random() * 0.3, Math.sin(angle) * r]}>
                                <sphereGeometry args={[0.08, 16, 16]} />
                                <meshStandardMaterial color={sub.color} />
                            </mesh>
                        );
                    })}
                </group>

                {/* Écran de la balance */}
                <mesh position={[0, 0.8, 0.5]}>
                    <boxGeometry args={[1.5, 0.6, 0.1]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[0, 0.85, 0.56]} fontSize={0.2} color="#22C55E">
                    {mass.toFixed(1)} g
                </Text>
                <Text position={[0, 0.65, 0.56]} fontSize={0.1} color="#9CA3AF">
                    {n.toFixed(3)} mol
                </Text>
            </group>

            {/* Formule visuelle */}
            <Float speed={2} floatIntensity={0.3}>
                <Text position={[-2.5, 2, 0]} fontSize={0.25} color="white">
                    n = m / M
                </Text>
                <Text position={[-2.5, 1.6, 0]} fontSize={0.15} color="#9CA3AF">
                    {n.toFixed(2)} = {mass} / {sub.M}
                </Text>
            </Float>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ La Mole (n = m/M)" className="w-[350px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-gray-400">Score</span>
                            <span className="text-xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        {/* Mode Défi */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-orange-900/40 border border-orange-500/50 p-3 rounded-xl space-y-2">
                                <div className="text-xs text-orange-400">🎯 CALCUL À FAIRE</div>
                                <div className="font-bold text-sm">{currentChallenge.question}</div>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        placeholder="Ta réponse"
                                        className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-white"
                                    />
                                    <span className="py-2 px-3 bg-gray-700 rounded-lg">{currentChallenge.unit}</span>
                                </div>
                                <button
                                    onClick={checkAnswer}
                                    className="w-full py-2 bg-orange-600 hover:bg-orange-500 rounded-lg font-bold"
                                >
                                    Vérifier
                                </button>
                            </div>
                        )}

                        {/* Mode Exploration */}
                        {!challengeMode && (
                            <>
                                {/* Substance */}
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Substance :</div>
                                    <div className="grid grid-cols-4 gap-1">
                                        {Object.keys(substances).map(key => (
                                            <button
                                                key={key}
                                                onClick={() => { setSubstance(key); setMass(substances[key].M); }}
                                                className={`py-1 rounded text-xs ${substance === key ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                            >
                                                {substances[key].formula}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Masse */}
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Masse (g) :</div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="200"
                                        value={mass}
                                        onChange={(e) => setMass(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-800 rounded accent-blue-500"
                                    />
                                    <div className="text-center text-lg font-bold">{mass} g</div>
                                </div>

                                {/* Résultats */}
                                <div className="bg-gray-900/50 p-3 rounded-lg space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Masse molaire (M)</span>
                                        <span className="font-bold">{sub.M} g/mol</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Quantité (n)</span>
                                        <span className="font-bold text-blue-400">{n.toFixed(3)} mol</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Nombre d'entités</span>
                                        <span className="font-bold text-green-400">{N.toExponential(2)}</span>
                                    </div>
                                </div>

                                {/* Formule */}
                                <div className="bg-blue-900/30 border border-blue-500/30 p-2 rounded-lg text-center">
                                    <span className="text-blue-400 font-mono">n = m / M = {mass} / {sub.M} = </span>
                                    <span className="text-white font-bold">{n.toFixed(3)} mol</span>
                                </div>
                            </>
                        )}

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={startChallenge}
                                className="py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl font-bold"
                            >
                                🎯 Mode Défi
                            </button>
                            <button
                                onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }}
                                className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold"
                            >
                                📚 Explorer
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Success Overlay */}
            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">🎉</div>
                            <div className="text-2xl font-bold text-green-400">Excellent !</div>
                            <div className="text-yellow-400 text-lg">+100 pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// =========================================================
// C3. STRUCTURE DE LEWIS - AMÉLIORÉE AVEC DÉFI
// =========================================================
export function LewisStructureAdvanced() {
    const [molecule, setMolecule] = useState('H2O');
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const molecules = {
        H2: { name: 'Dihydrogène', atoms: [{ el: 'H', pos: [-0.5, 0, 0], color: '#FFFFFF' }, { el: 'H', pos: [0.5, 0, 0], color: '#FFFFFF' }], bonds: 1, nonBonding: 0 },
        H2O: { name: 'Eau', atoms: [{ el: 'O', pos: [0, 0, 0], color: '#EF4444' }, { el: 'H', pos: [-0.8, -0.6, 0], color: '#FFFFFF' }, { el: 'H', pos: [0.8, -0.6, 0], color: '#FFFFFF' }], bonds: 2, nonBonding: 2, angle: '104.5°' },
        CO2: { name: 'Dioxyde de carbone', atoms: [{ el: 'C', pos: [0, 0, 0], color: '#374151' }, { el: 'O', pos: [-1.2, 0, 0], color: '#EF4444' }, { el: 'O', pos: [1.2, 0, 0], color: '#EF4444' }], bonds: 4, nonBonding: 4, angle: '180°', doubleBonds: true },
        NH3: { name: 'Ammoniac', atoms: [{ el: 'N', pos: [0, 0.3, 0], color: '#3B82F6' }, { el: 'H', pos: [-0.7, -0.4, 0.4], color: '#FFFFFF' }, { el: 'H', pos: [0.7, -0.4, 0.4], color: '#FFFFFF' }, { el: 'H', pos: [0, -0.4, -0.8], color: '#FFFFFF' }], bonds: 3, nonBonding: 1, angle: '107°' },
        CH4: { name: 'Méthane', atoms: [{ el: 'C', pos: [0, 0, 0], color: '#374151' }, { el: 'H', pos: [0.6, 0.6, 0.6], color: '#FFFFFF' }, { el: 'H', pos: [-0.6, -0.6, 0.6], color: '#FFFFFF' }, { el: 'H', pos: [0.6, -0.6, -0.6], color: '#FFFFFF' }, { el: 'H', pos: [-0.6, 0.6, -0.6], color: '#FFFFFF' }], bonds: 4, nonBonding: 0, angle: '109.5°' },
        O2: { name: 'Dioxygène', atoms: [{ el: 'O', pos: [-0.6, 0, 0], color: '#EF4444' }, { el: 'O', pos: [0.6, 0, 0], color: '#EF4444' }], bonds: 2, nonBonding: 4, doubleBonds: true },
        N2: { name: 'Diazote', atoms: [{ el: 'N', pos: [-0.5, 0, 0], color: '#3B82F6' }, { el: 'N', pos: [0.5, 0, 0], color: '#3B82F6' }], bonds: 3, nonBonding: 2, tripleBonds: true },
        HCl: { name: 'Chlorure d\'hydrogène', atoms: [{ el: 'H', pos: [-0.6, 0, 0], color: '#FFFFFF' }, { el: 'Cl', pos: [0.6, 0, 0], color: '#22C55E' }], bonds: 1, nonBonding: 3 },
    };

    const challenges = [
        { question: "Combien de doublets liants dans H₂O ?", answer: 2, molecule: 'H2O' },
        { question: "Combien de doublets NON liants dans NH₃ ?", answer: 1, molecule: 'NH3' },
        { question: "Quel angle de liaison dans CH₄ ?", answer: '109.5°', molecule: 'CH4', isText: true },
        { question: "Combien de liaisons dans N₂ ?", answer: 3, molecule: 'N2' },
        { question: "Combien de doublets non liants sur l'oxygène de H₂O ?", answer: 2, molecule: 'H2O' },
    ];

    const mol = molecules[molecule];
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3;
        }
    });

    const startChallenge = () => {
        setChallengeMode(true);
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setCurrentChallenge(challenge);
        setMolecule(challenge.molecule);
    };

    const checkAnswer = (answer) => {
        if (currentChallenge) {
            const isCorrect = currentChallenge.isText
                ? answer === currentChallenge.answer
                : Number(answer) === currentChallenge.answer;
            if (isCorrect) {
                setScore(prev => prev + 75);
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                    startChallenge();
                }, 2000);
            }
        }
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.35} color="#60A5FA" anchorX="center">
                🔬 STRUCTURE DE LEWIS
            </Text>
            <Text position={[0, 3, 0]} fontSize={0.25} color="white" anchorX="center">
                {mol.name}
            </Text>

            <group ref={groupRef} scale={[1.8, 1.8, 1.8]}>
                {/* Atomes */}
                {mol.atoms.map((atom, i) => (
                    <group key={i} position={atom.pos}>
                        <mesh>
                            <sphereGeometry args={[atom.el === 'H' ? 0.25 : 0.4, 32, 32]} />
                            <meshStandardMaterial color={atom.color} />
                        </mesh>
                        <Text position={[0, 0, 0.5]} fontSize={0.2} color="white" anchorX="center">
                            {atom.el}
                        </Text>
                    </group>
                ))}

                {/* Liaisons (simplifiées) */}
                {mol.atoms.length > 1 && mol.atoms.slice(1).map((atom, i) => {
                    const start = new THREE.Vector3(...mol.atoms[0].pos);
                    const end = new THREE.Vector3(...atom.pos);
                    const mid = start.clone().add(end).multiplyScalar(0.5);
                    const dir = end.clone().sub(start);
                    const len = dir.length() * 0.6;

                    return (
                        <mesh key={`bond${i}`} position={mid.toArray()} quaternion={new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())}>
                            <cylinderGeometry args={[0.05, 0.05, len, 8]} />
                            <meshStandardMaterial color="#888" />
                        </mesh>
                    );
                })}

                {/* Doublets non liants (sur l'atome central) */}
                {mol.nonBonding > 0 && mol.atoms[0] && (
                    <>
                        {Array(Math.min(mol.nonBonding, 2)).fill(0).map((_, i) => {
                            const angle = (i / 2) * Math.PI + Math.PI / 2;
                            return (
                                <group key={`nl${i}`} position={[mol.atoms[0].pos[0] + Math.cos(angle) * 0.6, mol.atoms[0].pos[1] + 0.5, mol.atoms[0].pos[2] + Math.sin(angle) * 0.3]}>
                                    <mesh position={[-0.08, 0, 0]}>
                                        <sphereGeometry args={[0.06, 16, 16]} />
                                        <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.5} />
                                    </mesh>
                                    <mesh position={[0.08, 0, 0]}>
                                        <sphereGeometry args={[0.06, 16, 16]} />
                                        <meshStandardMaterial color="#FCD34D" emissive="#FCD34D" emissiveIntensity={0.5} />
                                    </mesh>
                                </group>
                            );
                        })}
                    </>
                )}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Formule de Lewis" className="w-[340px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-gray-400">Score</span>
                            <span className="text-xl font-bold text-yellow-400">⭐ {score}</span>
                        </div>

                        {/* Mode Défi */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-green-900/40 border border-green-500/50 p-3 rounded-xl space-y-2">
                                <div className="text-xs text-green-400">🎯 QUESTION</div>
                                <div className="font-bold">{currentChallenge.question}</div>
                                <div className="grid grid-cols-4 gap-2">
                                    {currentChallenge.isText
                                        ? ['104.5°', '109.5°', '120°', '180°'].map(a => (
                                            <button key={a} onClick={() => checkAnswer(a)} className="py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">{a}</button>
                                        ))
                                        : [0, 1, 2, 3, 4].map(n => (
                                            <button key={n} onClick={() => checkAnswer(n)} className="py-2 bg-gray-700 hover:bg-gray-600 rounded font-bold">{n}</button>
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {/* Sélection molécule */}
                        {!challengeMode && (
                            <div>
                                <div className="text-xs text-gray-400 mb-1">Molécule :</div>
                                <div className="grid grid-cols-4 gap-1">
                                    {Object.keys(molecules).map(key => (
                                        <button
                                            key={key}
                                            onClick={() => setMolecule(key)}
                                            className={`py-2 rounded text-xs ${molecule === key ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                        >
                                            {key}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Infos */}
                        <div className="bg-gray-900/50 p-3 rounded-lg space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Doublets liants</span>
                                <span className="font-bold">{mol.bonds}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Doublets non liants</span>
                                <span className="font-bold text-yellow-400">{mol.nonBonding}</span>
                            </div>
                            {mol.angle && (
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Angle</span>
                                    <span className="font-bold text-blue-400">{mol.angle}</span>
                                </div>
                            )}
                        </div>

                        {/* Légende */}
                        <div className="text-xs space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-500" />
                                <span className="text-gray-400">Liaison covalente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span className="text-gray-400">Doublet non liant</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={startChallenge}
                                className="py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl font-bold"
                            >
                                🎯 Mode Défi
                            </button>
                            <button
                                onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }}
                                className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold"
                            >
                                📚 Explorer
                            </button>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">🎉</div>
                            <div className="text-2xl font-bold text-green-400">Bien joué !</div>
                            <div className="text-yellow-400 text-lg">+75 pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// =========================================================
// C5. ÉQUATION-BILAN - AMÉLIORÉE
// =========================================================
export function EquationBalancerAdvanced() {
    const [coefficients, setCoefficients] = useState([1, 1, 1, 1]);
    const [currentEq, setCurrentEq] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameStarted, setGameStarted] = useState(false);

    const equations = [
        { reactants: [{ f: 'H₂', a: { H: 2 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'H₂O', a: { H: 2, O: 1 } }], solution: [2, 1, 2] },
        { reactants: [{ f: 'N₂', a: { N: 2 } }, { f: 'H₂', a: { H: 2 } }], products: [{ f: 'NH₃', a: { N: 1, H: 3 } }], solution: [1, 3, 2] },
        { reactants: [{ f: 'CH₄', a: { C: 1, H: 4 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'CO₂', a: { C: 1, O: 2 } }, { f: 'H₂O', a: { H: 2, O: 1 } }], solution: [1, 2, 1, 2] },
        { reactants: [{ f: 'Fe', a: { Fe: 1 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'Fe₂O₃', a: { Fe: 2, O: 3 } }], solution: [4, 3, 2] },
        { reactants: [{ f: 'C', a: { C: 1 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'CO₂', a: { C: 1, O: 2 } }], solution: [1, 1, 1] },
        { reactants: [{ f: 'Na', a: { Na: 1 } }, { f: 'Cl₂', a: { Cl: 2 } }], products: [{ f: 'NaCl', a: { Na: 1, Cl: 1 } }], solution: [2, 1, 2] },
        { reactants: [{ f: 'Al', a: { Al: 1 } }, { f: 'O₂', a: { O: 2 } }], products: [{ f: 'Al₂O₃', a: { Al: 2, O: 3 } }], solution: [4, 3, 2] },
    ];

    const eq = equations[currentEq];

    useEffect(() => {
        if (gameStarted && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [gameStarted, timeLeft]);

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
            const bonus = streak * 10;
            setScore(prev => prev + 100 + bonus);
            setStreak(prev => prev + 1);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                nextEquation();
            }, 1500);
        } else {
            setStreak(0);
        }
    };

    const nextEquation = () => {
        setCurrentEq((currentEq + 1) % equations.length);
        setCoefficients([1, 1, 1, 1]);
    };

    const startGame = () => {
        setGameStarted(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setCurrentEq(0);
        setCoefficients([1, 1, 1, 1]);
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.35} color="#60A5FA" anchorX="center">
                ⚖️ ÉQUILIBRAGE DES ÉQUATIONS
            </Text>

            {/* Affichage équation */}
            <group position={[0, 1, 0]}>
                {/* Réactifs */}
                {eq.reactants.map((mol, i) => (
                    <group key={`r${i}`} position={[-2 + i * 1.8, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[1.4, 0.8, 0.3]} />
                            <meshStandardMaterial color="#3B82F6" />
                        </mesh>
                        <Text position={[0, 0, 0.2]} fontSize={0.25} color="white">
                            {coefficients[i] > 1 ? coefficients[i] : ''}{mol.f}
                        </Text>
                        {i < eq.reactants.length - 1 && (
                            <Text position={[1, 0, 0]} fontSize={0.3} color="white">+</Text>
                        )}
                    </group>
                ))}

                {/* Flèche */}
                <Text position={[0.5, 0, 0]} fontSize={0.4} color="white">→</Text>

                {/* Produits */}
                {eq.products.map((mol, i) => (
                    <group key={`p${i}`} position={[2 + i * 1.8, 0, 0]}>
                        <mesh>
                            <boxGeometry args={[1.4, 0.8, 0.3]} />
                            <meshStandardMaterial color="#22C55E" />
                        </mesh>
                        <Text position={[0, 0, 0.2]} fontSize={0.25} color="white">
                            {coefficients[eq.reactants.length + i] > 1 ? coefficients[eq.reactants.length + i] : ''}{mol.f}
                        </Text>
                        {i < eq.products.length - 1 && (
                            <Text position={[1, 0, 0]} fontSize={0.3} color="white">+</Text>
                        )}
                    </group>
                ))}
            </group>

            {/* Indicateur équilibré */}
            {isBalanced && (
                <Float speed={3} floatIntensity={0.5}>
                    <Text position={[0, -0.5, 0]} fontSize={0.3} color="#22C55E">
                        ✓ ÉQUILIBRÉE !
                    </Text>
                </Float>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="⚖️ Lavoisier (Conservation)" className="w-[380px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Stats */}
                        <div className="flex justify-between items-center">
                            <div className="bg-yellow-900/30 px-3 py-2 rounded-lg border border-yellow-500/30">
                                <span className="text-yellow-400 font-bold">⭐ {score}</span>
                            </div>
                            <div className="bg-orange-900/30 px-3 py-2 rounded-lg border border-orange-500/30">
                                <span className="text-orange-400 font-bold">🔥 {streak}</span>
                            </div>
                            {gameStarted && (
                                <div className={`px-3 py-2 rounded-lg ${timeLeft <= 10 ? 'bg-red-900/50 animate-pulse' : 'bg-gray-800'}`}>
                                    <span className={timeLeft <= 10 ? 'text-red-400' : 'text-white'}>⏱️ {timeLeft}s</span>
                                </div>
                            )}
                        </div>

                        {/* Compteur d'atomes */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-900/40 p-2 rounded-lg border border-blue-600/40">
                                <div className="text-xs text-blue-400 mb-1">Réactifs</div>
                                <div className="flex gap-2 text-sm">
                                    {Object.entries(leftAtoms).map(([a, c]) => (
                                        <span key={a} className={rightAtoms[a] === c ? 'text-green-400' : 'text-red-400'}>
                                            {a}:{c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-green-900/40 p-2 rounded-lg border border-green-600/40">
                                <div className="text-xs text-green-400 mb-1">Produits</div>
                                <div className="flex gap-2 text-sm">
                                    {Object.entries(rightAtoms).map(([a, c]) => (
                                        <span key={a} className={leftAtoms[a] === c ? 'text-green-400' : 'text-red-400'}>
                                            {a}:{c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contrôles coefficients */}
                        <div className="grid grid-cols-4 gap-2">
                            {[...eq.reactants, ...eq.products].map((mol, i) => (
                                <div key={i} className="text-center bg-gray-800/50 p-2 rounded-lg">
                                    <div className="text-xs text-gray-400 mb-1">{mol.f}</div>
                                    <div className="flex items-center justify-center gap-1">
                                        <button onClick={() => updateCoef(i, -1)} className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded text-sm">-</button>
                                        <span className="w-6 font-bold text-lg">{coefficients[i] || 1}</span>
                                        <button onClick={() => updateCoef(i, 1)} className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded text-sm">+</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={validate}
                                className={`py-3 rounded-xl font-bold transition-all ${isBalanced
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                            >
                                {isBalanced ? '✓ Valider' : 'Vérifier'}
                            </button>
                            <button
                                onClick={nextEquation}
                                className="py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold"
                            >
                                Suivant →
                            </button>
                        </div>

                        {!gameStarted && (
                            <button
                                onClick={startGame}
                                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold"
                            >
                                🎮 Mode Défi (60s)
                            </button>
                        )}

                        {/* Aide */}
                        <div className="text-xs text-gray-500 text-center">
                            💡 Même nombre d'atomes à gauche et à droite !
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">⚖️</div>
                            <div className="text-2xl font-bold text-green-400">Équilibrée !</div>
                            <div className="text-yellow-400">+{100 + streak * 10} pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}
