'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { ConfettiExplosion as Confetti } from './GamificationUtils';

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
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

    const Cf = (Ci * Vi) / Vf; // Concentration finale

    const challenges = [
        { q: "Ci=1 mol/L, Vi=25 mL, Vf=100 mL → Cf = ?", answer: 0.25, ci: 1, vi: 25, vf: 100 },
        { q: "Ci=2 mol/L, Vi=50 mL, Vf=250 mL → Cf = ?", answer: 0.4, ci: 2, vi: 50, vf: 250 },
        { q: "Cf=0.1 mol/L, Ci=1 mol/L, Vf=500 mL → Vi = ?", answer: 50, type: 'Vi', ci: 1, cf: 0.1, vf: 500 },
        { q: "On veut 0.5 mol/L à partir de 2 mol/L (Vf=200mL). Vi = ?", answer: 50, type: 'Vi', ci: 2, cf: 0.5, vf: 200 },
        { q: "Ci=0.5 mol/L, Vi=100 mL, Vf=500 mL → Cf = ?", answer: 0.1, ci: 0.5, vi: 100, vf: 500 },
    ];

    const liquidRef = useRef();
    useFrame((state) => {
        if (liquidRef.current) {
            liquidRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.02 - 0.2;
        }
    });

    const startChallenge = () => {
        setChallengeMode(true);
        nextChallenge();
    };

    const nextChallenge = () => {
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setCurrentChallenge(challenge);
        if (challenge.ci) setCi(challenge.ci);
        if (challenge.vi) setVi(challenge.vi);
        if (challenge.vf) setVf(challenge.vf);
        setUserAnswer('');
    };

    const checkAnswer = () => {
        if (!currentChallenge) return;
        const answer = parseFloat(userAnswer);
        if (Math.abs(answer - currentChallenge.answer) < 0.01) {
            setScore(prev => prev + 100 + streak * 15);
            setStreak(prev => prev + 1);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                nextChallenge();
            }, 1500);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.3} color="#60A5FA" anchorX="center">
                🧪 DILUTION : Ci × Vi = Cf × Vf
            </Text>

            {/* Fiole mère */}
            <group position={[-2, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.4, 0.5, 1.5, 32]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, -0.3, 0]} ref={liquidRef}>
                    <cylinderGeometry args={[0.38, 0.48, 0.8, 32]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.7} />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.15} color="white">Solution Mère</Text>
                <Text position={[0, -1.5, 0]} fontSize={0.12} color="#60A5FA">Ci = {Ci} mol/L</Text>
            </group>

            {/* Pipette */}
            <group position={[0, 1, 0]}>
                <mesh rotation={[0, 0, Math.PI / 6]}>
                    <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.4} />
                </mesh>
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.04, 0.04, 0.3, 8]} />
                    <meshStandardMaterial color="#3B82F6" transparent opacity={0.6} />
                </mesh>
                <Text position={[0.8, 0, 0]} fontSize={0.12} color="white">Vi = {Vi} mL</Text>
            </group>

            {/* Fiole jaugée */}
            <group position={[2, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.6, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, 0.7, 0]}>
                    <cylinderGeometry args={[0.1, 0.15, 0.6, 16]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} />
                </mesh>
                {/* Trait de jauge */}
                <mesh position={[0, 0.8, 0]}>
                    <torusGeometry args={[0.11, 0.01, 8, 32]} />
                    <meshStandardMaterial color="#EF4444" />
                </mesh>
                {/* Solution diluée */}
                <mesh position={[0, -0.1, 0]}>
                    <sphereGeometry args={[0.55, 32, 16, 0, Math.PI * 2, Math.PI * 0.3, Math.PI * 0.4]} />
                    <meshStandardMaterial color="#93C5FD" transparent opacity={0.6} />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.15} color="white">Solution Fille</Text>
                <Text position={[0, -1.5, 0]} fontSize={0.12} color="#22C55E">Cf = {Cf.toFixed(3)} mol/L</Text>
            </group>

            {/* Flèches */}
            <Text position={[-1, 0.5, 0]} fontSize={0.3} color="white">→</Text>
            <Text position={[1, 0.5, 0]} fontSize={0.3} color="white">→</Text>

            <Html transform={false}>
                <DraggableHtmlPanel title="🧪 Dilution (C₁V₁ = C₂V₂)" className="w-[360px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold">⭐ {score}</span>
                            <span className="text-orange-400 font-bold">🔥 Streak: {streak}</span>
                        </div>

                        {/* Mode Défi */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-blue-900/40 border border-blue-500/50 p-3 rounded-xl space-y-2">
                                <div className="text-xs text-blue-400">🎯 CALCUL</div>
                                <div className="font-bold text-sm">{currentChallenge.q}</div>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        placeholder="Ta réponse"
                                        className="flex-1 px-3 py-2 bg-gray-800 rounded-lg"
                                    />
                                    <button onClick={checkAnswer} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold">✓</button>
                                </div>
                            </div>
                        )}

                        {/* Mode Exploration */}
                        {!challengeMode && (
                            <>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Ci (mol/L)</span>
                                        <span className="font-bold">{Ci}</span>
                                    </div>
                                    <input type="range" min="0.1" max="5" step="0.1" value={Ci} onChange={(e) => setCi(Number(e.target.value))} className="w-full h-2 bg-gray-800 rounded accent-blue-500" />

                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Vi (mL)</span>
                                        <span className="font-bold">{Vi}</span>
                                    </div>
                                    <input type="range" min="5" max="100" step="5" value={Vi} onChange={(e) => setVi(Number(e.target.value))} className="w-full h-2 bg-gray-800 rounded accent-green-500" />

                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Vf (mL)</span>
                                        <span className="font-bold">{Vf}</span>
                                    </div>
                                    <input type="range" min="50" max="500" step="25" value={Vf} onChange={(e) => setVf(Number(e.target.value))} className="w-full h-2 bg-gray-800 rounded accent-purple-500" />
                                </div>

                                <div className="bg-gray-900/50 p-3 rounded-lg text-center">
                                    <div className="text-gray-400 text-sm">Concentration finale</div>
                                    <div className="text-2xl font-bold text-green-400">Cf = {Cf.toFixed(4)} mol/L</div>
                                    <div className="text-xs text-gray-500">Facteur de dilution : {(Vf / Vi).toFixed(1)}×</div>
                                </div>

                                <div className="bg-blue-900/30 border border-blue-500/30 p-2 rounded-lg text-center text-sm">
                                    <span className="text-blue-400 font-mono">Ci × Vi = Cf × Vf</span>
                                    <br />
                                    <span className="text-gray-300">{Ci} × {Vi} = {Cf.toFixed(3)} × {Vf} = {(Ci * Vi).toFixed(1)}</span>
                                </div>
                            </>
                        )}

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={startChallenge} className="py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-bold">
                                🎯 Mode Défi
                            </button>
                            <button onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }} className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold">
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
                            <div className="text-2xl font-bold text-green-400">Correct !</div>
                            <div className="text-yellow-400">+{100 + streak * 15} pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// =========================================================
// C7 & C8. ACIDES ET BASES - TITRAGE AVANCÉ
// =========================================================
export function TitrageAdvanced() {
    const [volumeAdded, setVolumeAdded] = useState(0);
    const [challengeMode, setChallengeMode] = useState(false);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [foundEquivalence, setFoundEquivalence] = useState(false);

    // Titrage HCl par NaOH
    const Ca = 0.1; // Concentration acide (mol/L)
    const Va = 20;  // Volume acide (mL)
    const Cb = 0.1; // Concentration base (mol/L)
    const Veq = (Ca * Va) / Cb; // Volume équivalence = 20 mL

    // Calcul pH simplifié
    const getPH = (v) => {
        if (v < Veq * 0.9) return 1 + (v / Veq) * 5;
        if (v < Veq * 1.1) return 7 + (v - Veq) * 2;
        return Math.min(13, 9 + (v - Veq) / 5);
    };

    const pH = getPH(volumeAdded);

    // Couleur indicateur (BBT)
    const getIndicatorColor = (pH) => {
        if (pH < 6) return '#FACC15'; // Jaune
        if (pH < 7.6) return '#22C55E'; // Vert
        return '#3B82F6'; // Bleu
    };

    const addDrop = () => {
        setVolumeAdded(v => Math.min(40, v + 0.5));
    };

    const checkEquivalence = () => {
        if (Math.abs(volumeAdded - Veq) < 1) {
            setScore(prev => prev + 200);
            setFoundEquivalence(true);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        }
    };

    const reset = () => {
        setVolumeAdded(0);
        setFoundEquivalence(false);
    };

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.3} color="#60A5FA" anchorX="center">
                ⚗️ TITRAGE ACIDE-BASE
            </Text>

            {/* Burette */}
            <group position={[-1.5, 1.5, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.12, 0.12, 2.5, 16]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* NaOH dans la burette */}
                <mesh position={[0, 0.5 - volumeAdded * 0.03, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 2 - volumeAdded * 0.05, 16]} />
                    <meshStandardMaterial color="#93C5FD" transparent opacity={0.6} />
                </mesh>
                <Text position={[0.5, 0, 0]} fontSize={0.12} color="white">NaOH</Text>
                <Text position={[0.5, -0.3, 0]} fontSize={0.1} color="#60A5FA">{(40 - volumeAdded).toFixed(1)} mL</Text>
                {/* Robinet */}
                <mesh position={[0, -1.4, 0]}>
                    <cylinderGeometry args={[0.06, 0.06, 0.15, 8]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
            </group>

            {/* Erlenmeyer */}
            <group position={[1, -0.5, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.2, 0.6, 1, 32]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                {/* Solution */}
                <mesh position={[0, -0.2, 0]}>
                    <cylinderGeometry args={[0.5, 0.55, 0.5, 32]} />
                    <meshStandardMaterial color={getIndicatorColor(pH)} transparent opacity={0.7} />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.12} color="white">HCl + BBT</Text>
            </group>

            {/* Goutte animée */}
            {volumeAdded > 0 && volumeAdded < 40 && (
                <Float speed={5} floatIntensity={0.2}>
                    <mesh position={[-1.5, -0.5, 0]}>
                        <sphereGeometry args={[0.04, 8, 8]} />
                        <meshStandardMaterial color="#93C5FD" />
                    </mesh>
                </Float>
            )}

            {/* pH-mètre */}
            <group position={[2.5, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.8, 1.2, 0.2]} />
                    <meshStandardMaterial color="#1F2937" />
                </mesh>
                <Text position={[0, 0.2, 0.15]} fontSize={0.25} color="#22C55E">
                    {pH.toFixed(1)}
                </Text>
                <Text position={[0, -0.2, 0.15]} fontSize={0.1} color="#9CA3AF">pH</Text>
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="⚗️ Titrage Acide-Base" className="w-[350px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold">⭐ {score}</span>
                            {foundEquivalence && <span className="text-green-400">✓ Équivalence trouvée !</span>}
                        </div>

                        {/* Données */}
                        <div className="bg-gray-900/50 p-3 rounded-lg space-y-1 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">V(NaOH) ajouté</span>
                                <span className="font-bold text-blue-400">{volumeAdded.toFixed(1)} mL</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">pH</span>
                                <span className="font-bold" style={{ color: getIndicatorColor(pH) }}>{pH.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Couleur BBT</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: getIndicatorColor(pH) }} />
                                    <span>{pH < 6 ? 'Jaune (Acide)' : pH < 7.6 ? 'Vert (Neutre)' : 'Bleu (Basique)'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Légende */}
                        <div className="text-xs text-gray-400">
                            <div>🎯 Objectif : Trouve le volume à l'équivalence (pH ≈ 7)</div>
                            <div>💡 À l'équivalence : n(acide) = n(base)</div>
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-3 gap-2">
                            <button onClick={addDrop} className="py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold">
                                💧 +0.5 mL
                            </button>
                            <button onClick={() => setVolumeAdded(v => Math.min(40, v + 2))} className="py-3 bg-blue-800 hover:bg-blue-700 rounded-xl font-bold">
                                💧💧 +2 mL
                            </button>
                            <button onClick={reset} className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold">
                                🔄
                            </button>
                        </div>

                        <button onClick={checkEquivalence} disabled={foundEquivalence} className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl font-bold disabled:opacity-50">
                            🎯 Vérifier l'équivalence
                        </button>

                        {/* Info équivalence */}
                        <div className="bg-purple-900/30 border border-purple-500/30 p-2 rounded-lg text-center text-xs">
                            <div className="text-purple-400">V(équivalence) théorique :</div>
                            <div className="font-mono">V_eq = (Ca × Va) / Cb = ({Ca} × {Va}) / {Cb} = {Veq} mL</div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 to-emerald-800 p-6 rounded-2xl border-2 border-green-400 text-center">
                            <div className="text-5xl mb-2">🎉</div>
                            <div className="text-2xl font-bold text-green-400">Équivalence !</div>
                            <div className="text-white">V_eq = {volumeAdded.toFixed(1)} mL</div>
                            <div className="text-yellow-400">+200 pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}

// =========================================================
// C9. pH ET INDICATEURS - AVANCÉ
// =========================================================
export function PHIndicateursAdvanced() {
    const [pH, setPH] = useState(7);
    const [challengeMode, setChallengeMode] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [score, setScore] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);

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

    const getIndicatorColor = (indicator, pH) => {
        for (const zone of indicators[indicator].zones) {
            if (pH <= zone.max) return zone.color;
        }
        return '#888';
    };

    const challenges = [
        { q: "Le citron a un pH de 2.4. Il est :", options: ['Acide', 'Neutre', 'Basique'], answer: 0 },
        { q: "Le sang a un pH de 7.4. Il est :", options: ['Acide', 'Neutre', 'Légèrement basique'], answer: 2 },
        { q: "Quel indicateur devient rose en milieu basique ?", options: ['BBT', 'Phénolphtaléine', 'Hélianthine'], answer: 1 },
        { q: "Le BBT est bleu quand le pH est :", options: ['< 6', 'Entre 6 et 7.6', '> 7.6'], answer: 2 },
        { q: "Une solution de pH = 3 contient plus de :", options: ['H₃O⁺', 'OH⁻', 'Les deux égaux'], answer: 0 },
    ];

    const startChallenge = () => {
        setChallengeMode(true);
        nextChallenge();
    };

    const nextChallenge = () => {
        setCurrentChallenge(challenges[Math.floor(Math.random() * challenges.length)]);
    };

    const checkAnswer = (answer) => {
        if (currentChallenge && answer === currentChallenge.answer) {
            setScore(prev => prev + 75);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                nextChallenge();
            }, 1500);
        }
    };

    const nature = pH < 7 ? 'ACIDE' : pH === 7 ? 'NEUTRE' : 'BASIQUE';
    const natureColor = pH < 7 ? '#EF4444' : pH === 7 ? '#22C55E' : '#3B82F6';

    return (
        <group>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.3} color="#60A5FA" anchorX="center">
                📊 ÉCHELLE DE pH
            </Text>

            {/* Échelle pH visuelle */}
            <group position={[0, 1.5, 0]}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(p => {
                    const hue = (14 - p) / 14 * 240; // Rouge (0) → Bleu (14)
                    return (
                        <mesh key={p} position={[(p - 7) * 0.35, 0, 0]}>
                            <boxGeometry args={[0.3, 0.6, 0.1]} />
                            <meshStandardMaterial color={`hsl(${hue}, 70%, 50%)`} />
                        </mesh>
                    );
                })}
                {/* Labels */}
                <Text position={[-2.45, -0.5, 0]} fontSize={0.1} color="#EF4444">ACIDE</Text>
                <Text position={[0, -0.5, 0]} fontSize={0.1} color="#22C55E">NEUTRE</Text>
                <Text position={[2.45, -0.5, 0]} fontSize={0.1} color="#3B82F6">BASIQUE</Text>

                {/* Curseur */}
                <mesh position={[(pH - 7) * 0.35, 0.5, 0]}>
                    <coneGeometry args={[0.1, 0.2, 4]} rotation={[Math.PI, 0, 0]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>

            {/* Tubes indicateurs */}
            <group position={[0, -0.5, 0]}>
                {Object.entries(indicators).map(([key, ind], i) => (
                    <group key={key} position={[(i - 1) * 1.5, 0, 0]}>
                        <mesh>
                            <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
                            <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} />
                        </mesh>
                        <mesh position={[0, -0.2, 0]}>
                            <cylinderGeometry args={[0.18, 0.18, 0.5, 16]} />
                            <meshStandardMaterial color={getIndicatorColor(key, pH)} transparent opacity={0.8} />
                        </mesh>
                        <Text position={[0, -0.8, 0]} fontSize={0.1} color="white">{key}</Text>
                    </group>
                ))}
            </group>

            <Html transform={false}>
                <DraggableHtmlPanel title="📊 pH et Indicateurs" className="w-[360px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold">⭐ {score}</span>
                        </div>

                        {/* Mode Défi */}
                        {challengeMode && currentChallenge && (
                            <div className="bg-purple-900/40 border border-purple-500/50 p-3 rounded-xl space-y-2">
                                <div className="text-xs text-purple-400">🎯 QUESTION</div>
                                <div className="font-bold">{currentChallenge.q}</div>
                                <div className="grid grid-cols-3 gap-2">
                                    {currentChallenge.options.map((opt, i) => (
                                        <button key={i} onClick={() => checkAnswer(i)} className="py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">{opt}</button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Mode Exploration */}
                        {!challengeMode && (
                            <>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">pH</span>
                                        <span className="font-bold text-xl" style={{ color: natureColor }}>{pH}</span>
                                    </div>
                                    <input type="range" min="0" max="14" step="0.1" value={pH} onChange={(e) => setPH(Number(e.target.value))} className="w-full h-2 bg-gray-800 rounded" />
                                    <div className="text-center font-bold mt-1" style={{ color: natureColor }}>{nature}</div>
                                </div>

                                {/* Solutions courantes */}
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">Solutions courantes :</div>
                                    <div className="grid grid-cols-5 gap-1">
                                        {solutions.slice(0, 5).map(s => (
                                            <button key={s.name} onClick={() => setPH(s.pH)} className="p-1 bg-gray-800 hover:bg-gray-700 rounded text-xs" style={{ borderLeft: `3px solid ${s.color}` }}>
                                                {s.name.split(' ')[0]}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-5 gap-1 mt-1">
                                        {solutions.slice(5).map(s => (
                                            <button key={s.name} onClick={() => setPH(s.pH)} className="p-1 bg-gray-800 hover:bg-gray-700 rounded text-xs" style={{ borderLeft: `3px solid ${s.color}` }}>
                                                {s.name.split(' ')[0]}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Couleurs indicateurs */}
                                <div className="bg-gray-900/50 p-2 rounded-lg">
                                    <div className="text-xs text-gray-400 mb-1">Indicateurs à pH = {pH} :</div>
                                    <div className="flex justify-around">
                                        {Object.entries(indicators).map(([key, ind]) => (
                                            <div key={key} className="text-center">
                                                <div className="w-8 h-8 rounded-full mx-auto mb-1" style={{ backgroundColor: getIndicatorColor(key, pH), border: getIndicatorColor(key, pH) === 'transparent' ? '2px dashed #666' : 'none' }} />
                                                <div className="text-xs">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Formule */}
                                <div className="bg-blue-900/30 border border-blue-500/30 p-2 rounded-lg text-center text-xs">
                                    <span className="text-blue-400 font-mono">pH = -log[H₃O⁺]</span>
                                    <br />
                                    <span className="text-gray-300">[H₃O⁺] = 10⁻{pH.toFixed(1)} = {Math.pow(10, -pH).toExponential(2)} mol/L</span>
                                </div>
                            </>
                        )}

                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={startChallenge} className="py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold">
                                🎯 Mode Défi
                            </button>
                            <button onClick={() => { setChallengeMode(false); setCurrentChallenge(null); }} className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold">
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
                            <div className="text-2xl font-bold text-green-400">Correct !</div>
                            <div className="text-yellow-400">+75 pts</div>
                        </div>
                    </div>
                </Html>
            )}
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
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challengeMode, setChallengeMode] = useState(false);
    const [mysterySolution, setMysterySolution] = useState(null);
    const [testsResults, setTestsResults] = useState([]);

    const solutions = [
        { id: 'A', ions: ['Cu2+'], color: '#BFDBFE', name: 'Sulfate de cuivre' },
        { id: 'B', ions: ['Fe3+'], color: '#FEF3C7', name: 'Chlorure de fer III' },
        { id: 'C', ions: ['Cl-'], color: '#F3F4F6', name: 'Eau salée' },
        { id: 'D', ions: ['Fe2+'], color: '#D1FAE5', name: 'Sulfate de fer II' },
        { id: 'E', ions: ['SO42-'], color: '#E0E7FF', name: 'Sulfate de sodium' },
    ];

    const reactifs = {
        NaOH: {
            name: 'Soude (NaOH)',
            tests: {
                'Cu2+': { precipitate: 'BLEU', color: '#3B82F6' },
                'Fe2+': { precipitate: 'VERT', color: '#22C55E' },
                'Fe3+': { precipitate: 'ROUILLE', color: '#92400E' },
            }
        },
        AgNO3: {
            name: 'Nitrate d\'Argent',
            tests: {
                'Cl-': { precipitate: 'BLANC (noircit)', color: '#F5F5F5' },
            }
        },
        BaCl2: {
            name: 'Chlorure de Baryum',
            tests: {
                'SO42-': { precipitate: 'BLANC', color: '#FFFFFF' },
            }
        },
    };

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

        if (challengeMode && mysterySolution) {
            setTestsResults(prev => [...prev, { reactif: selectedReactif, result: res }]);
        }
    };

    const identifyIon = (ion) => {
        if (challengeMode && mysterySolution) {
            if (mysterySolution.ions.includes(ion)) {
                setScore(s => s + 150 + streak * 25);
                setStreak(s => s + 1);
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                    startMysteryMode();
                }, 2000);
            } else {
                setStreak(0);
            }
        }
    };

    const startMysteryMode = () => {
        setChallengeMode(true);
        const mystery = solutions[Math.floor(Math.random() * solutions.length)];
        setMysterySolution(mystery);
        setSelectedSolution(mystery.id);
        setTestsResults([]);
        setResult(null);
        setSelectedReactif(null);
    };

    const reset = () => {
        setSelectedSolution(null);
        setSelectedReactif(null);
        setResult(null);
        setTestsResults([]);
    };

    return (
        <group>
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} intensity={1} />

            <Confetti active={showSuccess} />

            <Text position={[0, 3.5, 0]} fontSize={0.3} color="#60A5FA" anchorX="center">
                🔬 IDENTIFICATION DES IONS
            </Text>

            {/* Tubes à essai */}
            <group position={[-2.5, 0, 0]}>
                {solutions.map((sol, i) => (
                    <group key={sol.id} position={[i * 1.2, 0, 0]}>
                        <mesh onClick={() => !challengeMode && setSelectedSolution(sol.id)}>
                            <cylinderGeometry args={[0.25, 0.25, 1.8, 16]} />
                            <meshPhysicalMaterial
                                color={challengeMode && mysterySolution?.id === sol.id ? '#888' : sol.color}
                                transmission={0.7}
                                transparent
                                opacity={selectedSolution === sol.id ? 0.9 : 0.5}
                            />
                        </mesh>
                        <Text position={[0, -1.3, 0]} fontSize={0.15} color="white">
                            {challengeMode && mysterySolution?.id === sol.id ? '?' : sol.id}
                        </Text>
                        {selectedSolution === sol.id && (
                            <mesh position={[0, 1.1, 0]}>
                                <ringGeometry args={[0.28, 0.32, 16]} />
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
                        <cylinderGeometry args={[0.4, 0.4, 2, 16]} />
                        <meshPhysicalMaterial color="white" transmission={0.8} transparent opacity={0.4} />
                    </mesh>
                    {result.color && (
                        <mesh position={[0, -0.4, 0]}>
                            <dodecahedronGeometry args={[0.3]} />
                            <meshStandardMaterial color={result.color} />
                        </mesh>
                    )}
                    <Text position={[0, -1.5, 0]} fontSize={0.15} color={result.color || '#888'}>
                        {result.precipitate}
                    </Text>
                </group>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel title="🔬 Tests d'Ions (Jeu)" className="w-[360px]" defaultPosition="bottom-right">
                    <div className="space-y-3 text-white">
                        {/* Score */}
                        <div className="flex justify-between items-center bg-yellow-900/30 p-2 rounded-lg border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold">⭐ {score}</span>
                            <span className="text-orange-400 font-bold">🔥 Streak: {streak}</span>
                        </div>

                        {/* Mode Mystère */}
                        {challengeMode && mysterySolution && (
                            <div className="bg-purple-900/40 border border-purple-500/50 p-3 rounded-xl">
                                <div className="text-xs text-purple-400">🔍 SOLUTION MYSTÈRE</div>
                                <div className="font-bold">Identifie l'ion présent !</div>
                                <div className="text-sm text-gray-400">Effectue des tests pour découvrir l'ion</div>
                            </div>
                        )}

                        {/* Choix réactif */}
                        <div>
                            <div className="text-xs text-gray-400 mb-1">Réactif :</div>
                            <div className="grid grid-cols-3 gap-1">
                                {Object.entries(reactifs).map(([key, r]) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedReactif(key)}
                                        className={`py-2 rounded text-xs ${selectedReactif === key ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                                    >
                                        {key}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button onClick={runTest} disabled={!selectedSolution || !selectedReactif} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold disabled:opacity-50">
                            🧫 Effectuer le test
                        </button>

                        {/* Résultats des tests (mode mystère) */}
                        {challengeMode && testsResults.length > 0 && (
                            <div className="bg-gray-900/50 p-2 rounded-lg">
                                <div className="text-xs text-gray-400 mb-1">Tests effectués :</div>
                                {testsResults.map((t, i) => (
                                    <div key={i} className="flex justify-between text-sm">
                                        <span>{t.reactif}</span>
                                        <span style={{ color: t.result.color || '#888' }}>{t.result.precipitate}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Identification */}
                        {(result?.color || challengeMode) && (
                            <div>
                                <div className="text-xs text-gray-400 mb-1">Quel ion est présent ?</div>
                                <div className="grid grid-cols-5 gap-1">
                                    {['Cu2+', 'Fe2+', 'Fe3+', 'Cl-', 'SO42-'].map(ion => (
                                        <button key={ion} onClick={() => identifyIon(ion)} className="py-2 bg-gray-700 hover:bg-gray-600 rounded text-xs">
                                            {ion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={startMysteryMode} className="py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold">
                                🔍 Mode Mystère
                            </button>
                            <button onClick={() => { setChallengeMode(false); reset(); setMysterySolution(null); }} className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold">
                                📚 Explorer
                            </button>
                        </div>

                        {/* Tableau récap */}
                        <div className="text-xs text-gray-500 space-y-1">
                            <div className="flex gap-3">
                                <span className="w-4 h-4 rounded-full bg-blue-500 inline-block" /> Cu²⁺ + Soude = Bleu
                            </div>
                            <div className="flex gap-3">
                                <span className="w-4 h-4 rounded-full bg-green-500 inline-block" /> Fe²⁺ + Soude = Vert
                            </div>
                            <div className="flex gap-3">
                                <span className="w-4 h-4 rounded-full bg-amber-700 inline-block" /> Fe³⁺ + Soude = Rouille
                            </div>
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
                            <div className="text-white">Ion identifié : {mysterySolution?.ions[0]}</div>
                            <div className="text-yellow-400">+{150 + streak * 25} pts</div>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}
