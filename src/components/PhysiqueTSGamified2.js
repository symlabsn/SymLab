'use client';
/**
 * Physique Terminale S - Simulations Gamifiées Partie 2
 * Électromagnétisme & Oscillations (Chapitres 5-8, 10-12)
 * Mode Défi avec gamification complète
 */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// Timer visuel
function ChallengeTimer({ timeLeft, maxTime }) {
    const percentage = (timeLeft / maxTime) * 100;
    const color = percentage > 50 ? '#4ade80' : percentage > 25 ? '#fbbf24' : '#ef4444';

    return (
        <div style={{
            width: '100%',
            height: '8px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '10px'
        }}>
            <div style={{
                width: `${percentage}%`,
                height: '100%',
                background: color,
                transition: 'width 1s linear, background 0.3s'
            }} />
        </div>
    );
}

// ============================================================
// P5. CHAMP MAGNÉTIQUE SOLÉNOÏDE - VERSION GAMIFIÉE
// Mission: Ingénieur IRM - Optimiser le champ magnétique
// ============================================================
export function ChampMagnetiqueAdvanced() {
    const [current, setCurrent] = useState(5);
    const [spires, setSpires] = useState(100);

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetB, setTargetB] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const mu0 = 4 * Math.PI * 1e-7;
    const L = 0.2;
    const n = spires / L;
    const B = mu0 * n * current * 1e4; // en mT

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { B: 3, tolerance: 0.5, hint: "Champ faible" },
            { B: 6, tolerance: 0.4, hint: "Champ modéré" },
            { B: 10, tolerance: 0.5, hint: "Champ intense" },
            { B: 8, tolerance: 0.2, hint: "Précision requise!" }
        ];
        setTargetB(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetB) return;

        if (Math.abs(B - targetB.B) <= targetB.tolerance) {
            const points = 100 + Math.floor(timeLeft / 10) * 10 + streak * 25;
            setScore(s => s + points);
            setStreak(s => s + 1);
            setShowConfetti(true);
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                setLevel(l => l + 1);
                generateChallenge();
                setTimeLeft(60);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#06B6D4">CHAMP MAGNÉTIQUE - SOLÉNOÏDE</Text>

            {/* Bobine */}
            {Array.from({ length: 10 }, (_, i) => (
                <mesh key={i} position={[-2 + i * 0.4, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <torusGeometry args={[1, 0.05, 8, 32]} />
                    <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={current / 20} />
                </mesh>
            ))}

            {/* Lignes de champ */}
            {current > 0 && Array.from({ length: 5 }, (_, i) => (
                <arrowHelper key={i}
                    args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-2.5, (i - 2) * 0.3, 0), 4.5, 0x3B82F6, 0.2, 0.15]} />
            ))}

            <Text position={[2.5, 1.5, 0]} fontSize={0.4} color="#EF4444">N</Text>
            <Text position={[-2.5, 1.5, 0]} fontSize={0.4} color="#3B82F6">S</Text>

            <DraggableHtmlPanel title="🧲 Champ Magnétique" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetB && (
                                <div style={{
                                    background: 'rgba(6,182,212,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(6,182,212,0.5)'
                                }}>
                                    <strong>🏥 Mission IRM:</strong><br />
                                    B = {targetB.B} mT (±{targetB.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetB.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>Courant I = {current} A</label>
                        <input type="range" min="0" max="10" value={current}
                            onChange={e => setCurrent(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Spires N = {spires}</label>
                        <input type="range" min="50" max="200" value={spires}
                            onChange={e => setSpires(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(6,182,212,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>B = μ₀nI</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#06b6d4' }}>
                            B = {B.toFixed(2)} mT
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #06b6d4, #0891b2)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider champ' : '🎮 Mode Défi IRM'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Champ optimal!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P6. FORCE DE LORENTZ - VERSION GAMIFIÉE
// Mission: Physicien des particules - Contrôler les trajectoires
// ============================================================
export function LorentzAdvanced() {
    const [B, setB] = useState(1);
    const [v, setV] = useState(5);
    const particleRef = useRef();
    const [angle, setAngle] = useState(0);

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetRadius, setTargetRadius] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const R = 2 * v / B;

    useFrame((state, delta) => {
        if (particleRef.current) {
            setAngle(a => (a + delta * v / 2) % (2 * Math.PI));
            particleRef.current.position.x = R * Math.cos(angle);
            particleRef.current.position.y = R * Math.sin(angle);
        }
    });

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { radius: 5, tolerance: 0.5, hint: "Rayon large" },
            { radius: 10, tolerance: 0.8, hint: "Trajectoire étendue" },
            { radius: 3, tolerance: 0.3, hint: "Rayon serré" },
            { radius: 8, tolerance: 0.4, hint: "Précision maximale" }
        ];
        setTargetRadius(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetRadius) return;

        if (Math.abs(R - targetRadius.radius) <= targetRadius.tolerance) {
            const points = 100 + Math.floor(timeLeft / 10) * 10 + streak * 25;
            setScore(s => s + points);
            setStreak(s => s + 1);
            setShowConfetti(true);
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                setLevel(l => l + 1);
                generateChallenge();
                setTimeLeft(60);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#8B5CF6">FORCE DE LORENTZ</Text>

            {/* Trajectoire circulaire */}
            <mesh rotation={[0, 0, 0]}>
                <ringGeometry args={[R - 0.03, R + 0.03, 64]} />
                <meshBasicMaterial color="#4ADE80" side={THREE.DoubleSide} />
            </mesh>

            {/* Particule */}
            <mesh ref={particleRef} position={[R, 0, 0]}>
                <sphereGeometry args={[0.15]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.8} />
            </mesh>

            <Text position={[0, -2.5, 0]} fontSize={0.2} color="white">
                F ⊥ v (ne travaille jamais) | R = mv/(qB)
            </Text>

            <DraggableHtmlPanel title="⚡ Force de Lorentz" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetRadius && (
                                <div style={{
                                    background: 'rgba(139,92,246,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(139,92,246,0.5)'
                                }}>
                                    <strong>⚛️ Mission Cyclotron:</strong><br />
                                    R = {targetRadius.radius} u (±{targetRadius.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetRadius.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>Champ B = {B} T</label>
                        <input type="range" min="0.5" max="2" step="0.1" value={B}
                            onChange={e => setB(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Vitesse v = {v} u.a.</label>
                        <input type="range" min="1" max="10" value={v}
                            onChange={e => setV(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(139,92,246,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Rayon de courbure</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6' }}>
                            R = {R.toFixed(2)} u
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider rayon' : '🎮 Mode Défi Cyclotron'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Trajectoire maîtrisée!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P10. OSCILLATIONS LC/RLC - VERSION GAMIFIÉE
// Mission: Ingénieur Radio - Accorder la fréquence
// ============================================================
export function OscillationsAdvanced() {
    const [mode, setMode] = useState('lc');
    const [time, setTime] = useState(0);
    const [L, setL] = useState(0.1);
    const [C, setC] = useState(100);
    const [R, setR] = useState(10);

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetFreq, setTargetFreq] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const omega0 = 1 / Math.sqrt(L * C * 1e-6);
    const T0 = 2 * Math.PI / omega0;
    const f0 = 1 / T0;
    const amortissement = R / (2 * L);

    const q0 = 1;
    const q = mode === 'lc'
        ? q0 * Math.cos(omega0 * time)
        : q0 * Math.exp(-amortissement * time) * Math.cos(omega0 * time);

    useFrame((state, delta) => {
        setTime(t => t + delta);
    });

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { freq: 50, tolerance: 5, hint: "Basse fréquence" },
            { freq: 100, tolerance: 8, hint: "Fréquence standard" },
            { freq: 150, tolerance: 10, hint: "Haute fréquence" },
            { freq: 80, tolerance: 4, hint: "Accord précis" }
        ];
        setTargetFreq(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetFreq) return;

        if (Math.abs(f0 - targetFreq.freq) <= targetFreq.tolerance) {
            const points = 100 + Math.floor(timeLeft / 10) * 10 + streak * 25;
            setScore(s => s + points);
            setStreak(s => s + 1);
            setShowConfetti(true);
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                setLevel(l => l + 1);
                generateChallenge();
                setTimeLeft(60);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color={mode === 'lc' ? '#22C55E' : '#F97316'}>
                OSCILLATIONS {mode.toUpperCase()}
            </Text>

            {/* Visualisation oscillation */}
            <mesh position={[0, q * 2, 0]}>
                <sphereGeometry args={[0.3]} />
                <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5 + Math.abs(q) * 0.5} />
            </mesh>

            {/* Courbe */}
            <Line
                points={Array.from({ length: 100 }, (_, i) => {
                    const t = i * 0.1;
                    const y = mode === 'lc'
                        ? q0 * Math.cos(omega0 * t)
                        : q0 * Math.exp(-amortissement * t) * Math.cos(omega0 * t);
                    return [-4 + i * 0.08, y * 1.5 - 2, 0];
                })}
                color={mode === 'lc' ? '#22c55e' : '#f97316'}
                lineWidth={2}
            />

            <Text position={[0, -3.5, 0]} fontSize={0.2} color="#FBBF24">
                Énergie totale = ½Cu² + ½Li² = constante (LC)
            </Text>

            <DraggableHtmlPanel title="📡 Oscillations" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetFreq && (
                                <div style={{
                                    background: 'rgba(34,197,94,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(34,197,94,0.5)'
                                }}>
                                    <strong>📻 Mission Radio:</strong><br />
                                    f₀ = {targetFreq.freq} Hz (±{targetFreq.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetFreq.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <button onClick={() => { setMode('lc'); setTime(0); }}
                            style={{
                                flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
                                background: mode === 'lc' ? '#22c55e' : '#1e293b',
                                color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>LC</button>
                        <button onClick={() => { setMode('rlc'); setTime(0); }}
                            style={{
                                flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
                                background: mode === 'rlc' ? '#f97316' : '#1e293b',
                                color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>RLC</button>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>L = {(L * 1000).toFixed(0)} mH</label>
                        <input type="range" min="0.01" max="0.5" step="0.01" value={L}
                            onChange={e => { setL(Number(e.target.value)); setTime(0); }} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>C = {C} μF</label>
                        <input type="range" min="10" max="500" step="10" value={C}
                            onChange={e => { setC(Number(e.target.value)); setTime(0); }} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(34,197,94,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Fréquence propre</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22c55e' }}>
                            f₀ = {f0.toFixed(1)} Hz
                        </div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>
                            T₀ = {(T0 * 1000).toFixed(1)} ms
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #22c55e, #16a34a)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider fréquence' : '🎮 Mode Défi Radio'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Station accordée!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P11. OSCILLATIONS MÉCANIQUES - VERSION GAMIFIÉE
// Mission: Horloger - Régler la période
// ============================================================
export function OscillationsMecaAdvanced() {
    const [type, setType] = useState('pendule');
    const [time, setTime] = useState(0);
    const [length, setLength] = useState(1);
    const [k, setK] = useState(10);
    const mass = 1;

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetPeriod, setTargetPeriod] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const g = 9.81;
    const T = type === 'pendule' ? 2 * Math.PI * Math.sqrt(length / g) : 2 * Math.PI * Math.sqrt(mass / k);
    const omega = 2 * Math.PI / T;
    const theta = 0.3 * Math.cos(omega * time);

    const penduleRef = useRef();

    useFrame((state, delta) => {
        setTime(t => t + delta);
        if (type === 'pendule' && penduleRef.current) {
            penduleRef.current.rotation.z = theta;
        }
    });

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { period: 2, tolerance: 0.2, hint: "Période standard (2s)" },
            { period: 1, tolerance: 0.15, hint: "Battement rapide" },
            { period: 1.5, tolerance: 0.1, hint: "Chronomètre précis" },
            { period: 2.5, tolerance: 0.1, hint: "Pendule lent" }
        ];
        setTargetPeriod(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        setType('pendule');
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetPeriod) return;

        if (Math.abs(T - targetPeriod.period) <= targetPeriod.tolerance) {
            const points = 100 + Math.floor(timeLeft / 10) * 10 + streak * 25;
            setScore(s => s + points);
            setStreak(s => s + 1);
            setShowConfetti(true);
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                setLevel(l => l + 1);
                generateChallenge();
                setTimeLeft(60);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#60A5FA">
                OSCILLATIONS {type === 'pendule' ? 'PENDULE' : 'RESSORT'}
            </Text>

            {type === 'pendule' && (
                <group ref={penduleRef} position={[0, 2, 0]}>
                    <Line points={[[0, 0, 0], [0, -length * 2, 0]]} color="white" lineWidth={2} />
                    <mesh position={[0, -length * 2, 0]}>
                        <sphereGeometry args={[0.3]} />
                        <meshStandardMaterial color="#EF4444" />
                    </mesh>
                </group>
            )}

            {type === 'ressort' && (
                <group position={[0, 1, 0]}>
                    {/* Support */}
                    <mesh position={[0, 2, 0]}>
                        <boxGeometry args={[2, 0.2, 0.5]} />
                        <meshStandardMaterial color="#475569" />
                    </mesh>
                    {/* Ressort */}
                    <Line
                        points={Array.from({ length: 20 }, (_, i) => [
                            Math.sin(i * Math.PI) * 0.3,
                            2 - (i / 20) * (1.5 + theta),
                            0
                        ])}
                        color="#f59e0b"
                        lineWidth={3}
                    />
                    {/* Masse */}
                    <mesh position={[0, 0.5 + theta, 0]}>
                        <boxGeometry args={[0.6, 0.6, 0.6]} />
                        <meshStandardMaterial color="#3b82f6" />
                    </mesh>
                </group>
            )}

            <Text position={[0, -3, 0]} fontSize={0.2} color="#FBBF24">
                {type === 'pendule' ? 'T = 2π√(l/g)' : 'T = 2π√(m/k)'}
            </Text>

            <DraggableHtmlPanel title="⏱️ Oscillations Méca" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetPeriod && (
                                <div style={{
                                    background: 'rgba(96,165,250,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(96,165,250,0.5)'
                                }}>
                                    <strong>🕰️ Mission Horlogerie:</strong><br />
                                    T = {targetPeriod.period} s (±{targetPeriod.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetPeriod.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <button onClick={() => setType('pendule')}
                            style={{
                                flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
                                background: type === 'pendule' ? '#3b82f6' : '#1e293b',
                                color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>Pendule</button>
                        <button onClick={() => setType('ressort')}
                            style={{
                                flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
                                background: type === 'ressort' ? '#22c55e' : '#1e293b',
                                color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>Ressort</button>
                    </div>

                    {type === 'pendule' ? (
                        <div style={{ marginBottom: '12px' }}>
                            <label>l = {length.toFixed(1)} m</label>
                            <input type="range" min="0.5" max="2" step="0.1" value={length}
                                onChange={e => setLength(Number(e.target.value))} style={{ width: '100%' }} />
                        </div>
                    ) : (
                        <div style={{ marginBottom: '12px' }}>
                            <label>k = {k} N/m</label>
                            <input type="range" min="5" max="50" value={k}
                                onChange={e => setK(Number(e.target.value))} style={{ width: '100%' }} />
                        </div>
                    )}

                    <div style={{
                        background: 'rgba(96,165,250,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Période</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#60a5fa' }}>
                            T = {T.toFixed(2)} s
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider période' : '🎮 Mode Défi Horlogerie'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Horloge réglée!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P12. INTERFÉRENCES YOUNG - VERSION GAMIFIÉE
// Mission: Opticien - Mesurer les longueurs d'onde
// ============================================================
export function InterferencesAdvanced() {
    const [lambda, setLambda] = useState(600);
    const [a, setA] = useState(0.5);
    const D = 2;

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetInterfrange, setTargetInterfrange] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const i = (lambda * 1e-6 * D) / (a * 1e-3) * 1000; // en mm

    const getColor = (wl) => {
        if (wl < 450) return '#8B5CF6';
        if (wl < 550) return '#22C55E';
        if (wl < 600) return '#FBBF24';
        return '#EF4444';
    };

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { interfrange: 2, tolerance: 0.3, hint: "Franges rapprochées" },
            { interfrange: 3, tolerance: 0.3, hint: "Franges normales" },
            { interfrange: 4, tolerance: 0.4, hint: "Franges espacées" },
            { interfrange: 2.5, tolerance: 0.15, hint: "Mesure de précision" }
        ];
        setTargetInterfrange(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetInterfrange) return;

        if (Math.abs(i - targetInterfrange.interfrange) <= targetInterfrange.tolerance) {
            const points = 100 + Math.floor(timeLeft / 10) * 10 + streak * 25;
            setScore(s => s + points);
            setStreak(s => s + 1);
            setShowConfetti(true);
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                setLevel(l => l + 1);
                generateChallenge();
                setTimeLeft(60);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color={getColor(lambda)}>FENTES DE YOUNG</Text>

            {/* Source */}
            <mesh position={[-4, 0, 0]}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color={getColor(lambda)} emissive={getColor(lambda)} emissiveIntensity={0.8} />
            </mesh>

            {/* Fentes */}
            <mesh position={[-2, 0, 0]}>
                <boxGeometry args={[0.1, 3, 0.5]} />
                <meshStandardMaterial color="#1F2937" />
            </mesh>

            {/* Écran avec franges */}
            <mesh position={[3, 0, 0]}>
                <boxGeometry args={[0.1, 4, 0.5]} />
                <meshStandardMaterial color="#374151" />
            </mesh>

            {/* Franges d'interférence */}
            {Array.from({ length: 11 }, (_, idx) => {
                const y = (idx - 5) * (i / 10);
                const intensity = Math.cos((idx - 5) * Math.PI) > 0 ? 1 : 0.2;
                return (
                    <mesh key={idx} position={[3.1, y, 0]}>
                        <boxGeometry args={[0.05, 0.15, 0.3]} />
                        <meshStandardMaterial
                            color={getColor(lambda)}
                            emissive={getColor(lambda)}
                            emissiveIntensity={intensity * 0.5}
                            transparent
                            opacity={intensity}
                        />
                    </mesh>
                );
            })}

            <Text position={[0, -2.5, 0]} fontSize={0.2} color="white">
                Constructif: δ = kλ | Destructif: δ = (k+½)λ
            </Text>

            <DraggableHtmlPanel title="🌈 Interférences" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetInterfrange && (
                                <div style={{
                                    background: 'rgba(251,191,36,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(251,191,36,0.5)'
                                }}>
                                    <strong>🔬 Mission Spectroscopie:</strong><br />
                                    i = {targetInterfrange.interfrange} mm (±{targetInterfrange.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetInterfrange.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>λ = {lambda} nm</label>
                        <input type="range" min="400" max="700" value={lambda}
                            onChange={e => setLambda(Number(e.target.value))} style={{ width: '100%' }} />
                        <div style={{
                            height: '10px', borderRadius: '5px',
                            background: 'linear-gradient(to right, #8b5cf6, #3b82f6, #22c55e, #eab308, #f97316, #ef4444)',
                            marginTop: '5px'
                        }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>a = {a} mm (écart fentes)</label>
                        <input type="range" min="0.2" max="1" step="0.1" value={a}
                            onChange={e => setA(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(251,191,36,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Interfrange i = λD/a</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fbbf24' }}>
                            i = {i.toFixed(2)} mm
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : `linear-gradient(135deg, ${getColor(lambda)}, ${getColor(lambda)}88)`,
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider interfrange' : '🎮 Mode Défi Spectro'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Mesure précise!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// Export des composants gamifiés
export { ChampMagnetiqueAdvanced as ChampMagnetiqueTS };
export { LorentzAdvanced as LorentzTS };
export { OscillationsAdvanced as OscillationsTS };
export { OscillationsMecaAdvanced as OscillationsMecaTS };
export { InterferencesAdvanced as InterferencesTS };
