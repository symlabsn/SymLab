'use client';
/**
 * Physique Terminale S - Simulations Avancées
 * Partie 3: Oscillations - Optique (Chapitres 10-12)
 * Mode Défi avec gamification complète
 */
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer } from './GamificationUtils';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// Timer visuel
// (ChallengeTimer supprimé car importé de GamificationUtils)

// ============================================================
// P10. OSCILLATIONS LC/RLC - VERSION AVANCÉE
// Mission: Ingénieur Radio - Syntoniser la bonne fréquence
// ============================================================
function OscillationsLCAdvanced() {
    const [inductance, setInductance] = useState(0.1);
    const [capacitance, setCapacitance] = useState(100);
    const [resistance, setResistance] = useState(10);
    const [time, setTime] = useState(0);
    const [isOscillating, setIsOscillating] = useState(false);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetFreq, setTargetFreq] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const C_farads = capacitance * 1e-6;
    const omega0 = 1 / Math.sqrt(inductance * C_farads);
    const frequency = omega0 / (2 * Math.PI);
    const period = 1 / frequency;
    const periodMs = period * 1000;

    // Amortissement
    const gamma = resistance / (2 * inductance);
    const isUnderdamped = gamma < omega0;

    // Position de l'énergie (oscillation)
    const energyPos = isOscillating
        ? Math.cos(omega0 * time) * Math.exp(-gamma * time)
        : 0;

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    useEffect(() => {
        if (isOscillating) {
            const interval = setInterval(() => {
                setTime(t => t + 0.01);
            }, 10);
            return () => clearInterval(interval);
        }
    }, [isOscillating]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { freq: 100, tolerance: 10, hint: "Basse fréquence audio" },
            { freq: 1000, tolerance: 50, hint: "Fréquence vocale" },
            { freq: 10000, tolerance: 500, hint: "Station AM radio" },
            { freq: 100000, tolerance: 5000, hint: "Station FM radio" }
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

        if (Math.abs(frequency - targetFreq.freq) <= targetFreq.tolerance) {
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
            {/* Condensateur */}
            <group position={[-1.5, 0, 0]}>
                <mesh position={[-0.1, 0, 0]}>
                    <boxGeometry args={[0.05, 1.2, 0.8]} />
                    <meshStandardMaterial color="#3b82f6" />
                </mesh>
                <mesh position={[0.1, 0, 0]}>
                    <boxGeometry args={[0.05, 1.2, 0.8]} />
                    <meshStandardMaterial color="#3b82f6" />
                </mesh>
                {/* Énergie électrique */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.15, 1 * Math.max(0, energyPos), 0.7]} />
                    <meshStandardMaterial
                        color="#22d3ee"
                        emissive="#22d3ee"
                        emissiveIntensity={Math.abs(energyPos)}
                        transparent
                        opacity={0.7}
                    />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.2} color="#3b82f6">C</Text>
            </group>

            {/* Bobine */}
            <group position={[1.5, 0, 0]}>
                <mesh>
                    <torusGeometry args={[0.5, 0.12, 16, 32]} />
                    <meshStandardMaterial color="#8b5cf6" metalness={0.6} />
                </mesh>
                {/* Énergie magnétique */}
                <mesh>
                    <torusGeometry args={[0.5, 0.08, 16, 32]} />
                    <meshStandardMaterial
                        color="#a855f7"
                        emissive="#a855f7"
                        emissiveIntensity={Math.abs(1 - Math.abs(energyPos))}
                        transparent
                        opacity={0.7}
                    />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.2} color="#8b5cf6">L</Text>
            </group>

            {/* Résistance */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[0.6, 0.25, 0.25]} />
                <meshStandardMaterial color="#78716c" />
            </mesh>
            <Text position={[0, 1.9, 0]} fontSize={0.15} color="#78716c">R</Text>

            {/* Connexions */}
            <Line
                points={[[-1.5, 0.6, 0], [-1.5, 1.5, 0], [-0.3, 1.5, 0]]}
                color="#fbbf24"
                lineWidth={3}
            />
            <Line
                points={[[0.3, 1.5, 0], [1.5, 1.5, 0], [1.5, 0.6, 0]]}
                color="#fbbf24"
                lineWidth={3}
            />
            <Line
                points={[[-1.5, -0.6, 0], [-1.5, -1, 0], [1.5, -1, 0], [1.5, -0.6, 0]]}
                color="#fbbf24"
                lineWidth={3}
            />

            {/* Panneau de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel title="📡 Oscillations LC/RLC" defaultPosition="top-right">
                    <div className="no-drag" style={{ padding: '15px', color: 'white', width: '300px' }}>
                        {challengeMode && (
                            <>
                                <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                    <span>🎯 Score: {score}</span>
                                    <span>🔥 Streak: {streak}</span>
                                </div>
                                {targetFreq && (
                                    <div style={{
                                        background: 'rgba(139,92,246,0.2)',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        marginBottom: '15px',
                                        border: '1px solid rgba(139,92,246,0.5)'
                                    }}>
                                        <strong>📻 Mission Syntonisation:</strong><br />
                                        f₀ = {targetFreq.freq} Hz (±{targetFreq.tolerance})<br />
                                        <small style={{ color: '#94a3b8' }}>{targetFreq.hint}</small>
                                    </div>
                                )}
                            </>
                        )}

                        <div style={{ marginBottom: '12px' }}>
                            <label>L: {inductance.toFixed(3)} H</label>
                            <input type="range" min="0.001" max="1" step="0.001" value={inductance}
                                onChange={(e) => setInductance(parseFloat(e.target.value))} style={{ width: '100%' }} />
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <label>C: {capacitance} µF</label>
                            <input type="range" min="1" max="1000" value={capacitance}
                                onChange={(e) => setCapacitance(parseInt(e.target.value))} style={{ width: '100%' }} />
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <label>R: {resistance} Ω</label>
                            <input type="range" min="0" max="100" value={resistance}
                                onChange={(e) => setResistance(parseInt(e.target.value))} style={{ width: '100%' }} />
                        </div>

                        <div style={{
                            background: 'rgba(139,92,246,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '15px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Fréquence propre f₀</div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7' }}>
                                {frequency.toFixed(1)} Hz
                            </div>
                            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '5px' }}>
                                T₀ = {periodMs.toFixed(2)} ms
                            </div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>
                                f₀ = 1/(2π√LC) | {isUnderdamped ? "📈 Pseudo-périodique" : "📉 Apériodique"}
                            </div>
                        </div>

                        <button
                            onClick={() => { setIsOscillating(!isOscillating); setTime(0); }}
                            style={{
                                width: '100%',
                                padding: '10px',
                                background: isOscillating ? '#ef4444' : '#10b981',
                                border: 'none',
                                borderRadius: '8px',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginBottom: '10px'
                            }}
                        >
                            {isOscillating ? '⏹ Arrêter' : '▶ Démarrer oscillation'}
                        </button>

                        <button onClick={challengeMode ? checkAnswer : startChallenge}
                            style={{
                                width: '100%', padding: '12px',
                                background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                                border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>
                            {challengeMode ? '✓ Valider fréquence' : '🎮 Mode Défi Radio'}
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && <SuccessOverlay message="Fréquence trouvée!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P11. OSCILLATIONS MÉCANIQUES - VERSION AVANCÉE
// Mission: Horloger Précision - Régler une horloge
// ============================================================
function OscillationsMecaAdvanced() {
    const [pendulumLength, setPendulumLength] = useState(1);
    const [springK, setSpringK] = useState(100);
    const [mass, setMass] = useState(1);
    const [mode, setMode] = useState('pendulum'); // 'pendulum' or 'spring'
    const [time, setTime] = useState(0);
    const [isOscillating, setIsOscillating] = useState(false);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetPeriod, setTargetPeriod] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const g = 9.81;

    // Périodes
    const pendulumPeriod = 2 * Math.PI * Math.sqrt(pendulumLength / g);
    const springPeriod = 2 * Math.PI * Math.sqrt(mass / springK);
    const currentPeriod = mode === 'pendulum' ? pendulumPeriod : springPeriod;

    // Animation
    const omega = 2 * Math.PI / currentPeriod;
    const angle = isOscillating ? Math.sin(omega * time) * 0.5 : 0;
    const springDisplacement = isOscillating ? Math.sin(omega * time) * 0.5 : 0;

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    useEffect(() => {
        if (isOscillating) {
            const interval = setInterval(() => {
                setTime(t => t + 0.02);
            }, 20);
            return () => clearInterval(interval);
        }
    }, [isOscillating]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { period: 1, tolerance: 0.05, hint: "Horloge à pendule (1s exactement)" },
            { period: 2, tolerance: 0.1, hint: "Métronome lent" },
            { period: 0.5, tolerance: 0.03, hint: "Oscillateur rapide" },
            { period: 1.5, tolerance: 0.08, hint: "Chronomètre scientifique" }
        ];
        setTargetPeriod(targets[Math.min(level - 1, targets.length - 1)]);
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
        if (!targetPeriod) return;

        if (Math.abs(currentPeriod - targetPeriod.period) <= targetPeriod.tolerance) {
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
            {mode === 'pendulum' ? (
                // Pendule
                <group rotation={[0, 0, angle]}>
                    {/* Fil */}
                    <Line
                        points={[[0, 2, 0], [0, 2 - pendulumLength * 2, 0]]}
                        color="#fbbf24"
                        lineWidth={2}
                    />
                    {/* Masse */}
                    <mesh position={[0, 2 - pendulumLength * 2, 0]}>
                        <sphereGeometry args={[0.3, 32, 32]} />
                        <meshStandardMaterial color="#ef4444" metalness={0.6} />
                    </mesh>
                    {/* Point de fixation */}
                    <mesh position={[0, 2, 0]}>
                        <sphereGeometry args={[0.1, 16, 16]} />
                        <meshStandardMaterial color="#64748b" />
                    </mesh>
                </group>
            ) : (
                // Ressort
                <group>
                    {/* Support */}
                    <mesh position={[0, 2, 0]}>
                        <boxGeometry args={[1, 0.2, 0.5]} />
                        <meshStandardMaterial color="#64748b" />
                    </mesh>
                    {/* Ressort (simplifié) */}
                    <mesh position={[0, 1 + springDisplacement, 0]}>
                        <cylinderGeometry args={[0.1, 0.1, 1.5 - springDisplacement, 16]} />
                        <meshStandardMaterial color="#10b981" wireframe />
                    </mesh>
                    {/* Masse */}
                    <mesh position={[0, 0.2 + springDisplacement, 0]}>
                        <boxGeometry args={[0.5, 0.4, 0.5]} />
                        <meshStandardMaterial color="#3b82f6" />
                    </mesh>
                </group>
            )}

            {/* Panneau de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel title="⏱️ Oscillations Mécaniques" defaultPosition="top-right">
                    <div className="no-drag" style={{ padding: '15px', color: 'white', width: '300px' }}>
                        {challengeMode && (
                            <>
                                <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                    <span>🎯 Score: {score}</span>
                                    <span>🔥 Streak: {streak}</span>
                                </div>
                                {targetPeriod && (
                                    <div style={{
                                        background: 'rgba(16,185,129,0.2)',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        marginBottom: '15px',
                                        border: '1px solid rgba(16,185,129,0.5)'
                                    }}>
                                        <strong>🕰️ Mission Horlogerie:</strong><br />
                                        T = {targetPeriod.period} s (±{targetPeriod.tolerance})<br />
                                        <small style={{ color: '#94a3b8' }}>{targetPeriod.hint}</small>
                                    </div>
                                )}
                            </>
                        )}

                        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                            <button
                                onClick={() => setMode('pendulum')}
                                style={{
                                    flex: 1, padding: '8px',
                                    background: mode === 'pendulum' ? '#ef4444' : '#1e293b',
                                    border: '1px solid #ef4444',
                                    borderRadius: '6px', color: 'white', cursor: 'pointer'
                                }}>
                                🔴 Pendule
                            </button>
                            <button
                                onClick={() => setMode('spring')}
                                style={{
                                    flex: 1, padding: '8px',
                                    background: mode === 'spring' ? '#10b981' : '#1e293b',
                                    border: '1px solid #10b981',
                                    borderRadius: '6px', color: 'white', cursor: 'pointer'
                                }}>
                                🟢 Ressort
                            </button>
                        </div>

                        {mode === 'pendulum' ? (
                            <div style={{ marginBottom: '12px' }}>
                                <label>Longueur L: {pendulumLength.toFixed(2)} m</label>
                                <input type="range" min="0.1" max="3" step="0.01" value={pendulumLength}
                                    onChange={(e) => setPendulumLength(parseFloat(e.target.value))} style={{ width: '100%' }} />
                            </div>
                        ) : (
                            <>
                                <div style={{ marginBottom: '12px' }}>
                                    <label>Raideur k: {springK} N/m</label>
                                    <input type="range" min="10" max="500" value={springK}
                                        onChange={(e) => setSpringK(parseInt(e.target.value))} style={{ width: '100%' }} />
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <label>Masse m: {mass.toFixed(1)} kg</label>
                                    <input type="range" min="0.1" max="10" step="0.1" value={mass}
                                        onChange={(e) => setMass(parseFloat(e.target.value))} style={{ width: '100%' }} />
                                </div>
                            </>
                        )}

                        <div style={{
                            background: 'rgba(16,185,129,0.2)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '15px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Période T₀</div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>
                                {currentPeriod.toFixed(3)} s
                            </div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>
                                {mode === 'pendulum' ? 'T = 2π√(L/g)' : 'T = 2π√(m/k)'}
                            </div>
                        </div>

                        <button
                            onClick={() => { setIsOscillating(!isOscillating); setTime(0); }}
                            style={{
                                width: '100%', padding: '10px',
                                background: isOscillating ? '#ef4444' : '#10b981',
                                border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px'
                            }}>
                            {isOscillating ? '⏹ Arrêter' : '▶ Lancer oscillation'}
                        </button>

                        <button onClick={challengeMode ? checkAnswer : startChallenge}
                            style={{
                                width: '100%', padding: '12px',
                                background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                                border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>
                            {challengeMode ? '✓ Valider période' : '🎮 Mode Défi Horloger'}
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && <SuccessOverlay message="Horloge réglée!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P12. INTERFÉRENCES LUMINEUSES - VERSION AVANCÉE
// Mission: Physicien Optique - Mesurer la longueur d'onde
// ============================================================
function InterferencesAdvanced() {
    const [slitSeparation, setSlitSeparation] = useState(0.5);
    const [screenDistance, setScreenDistance] = useState(2);
    const [wavelength, setWavelength] = useState(550);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetInterfringe, setTargetInterfringe] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    // Calculs
    const wavelengthM = wavelength * 1e-9;
    const slitSeparationM = slitSeparation * 1e-3;
    const interfringe = (wavelengthM * screenDistance) / slitSeparationM;
    const interfringeMm = interfringe * 1000;

    // Couleur selon longueur d'onde
    const getColor = (wl) => {
        if (wl < 450) return '#8b5cf6'; // Violet
        if (wl < 495) return '#3b82f6'; // Bleu
        if (wl < 570) return '#22c55e'; // Vert
        if (wl < 590) return '#eab308'; // Jaune
        if (wl < 620) return '#f97316'; // Orange
        return '#ef4444'; // Rouge
    };

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { interfringe: 2, tolerance: 0.3, hint: "Laser He-Ne standard" },
            { interfringe: 5, tolerance: 0.5, hint: "Franges espacées" },
            { interfringe: 1, tolerance: 0.2, hint: "Franges fines" },
            { interfringe: 10, tolerance: 1, hint: "Grande interfrange" }
        ];
        setTargetInterfringe(targets[Math.min(level - 1, targets.length - 1)]);
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
        if (!targetInterfringe) return;

        if (Math.abs(interfringeMm - targetInterfringe.interfringe) <= targetInterfringe.tolerance) {
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

    // Générer les franges
    const fringes = useMemo(() => {
        const result = [];
        const numFringes = 11;
        for (let i = -5; i <= 5; i++) {
            result.push({
                position: i * interfringeMm * 0.3,
                intensity: i === 0 ? 1 : 0.8
            });
        }
        return result;
    }, [interfringeMm]);

    return (
        <group>
            {/* Source lumineuse */}
            <mesh position={[-3, 0, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial
                    color={getColor(wavelength)}
                    emissive={getColor(wavelength)}
                    emissiveIntensity={1}
                />
            </mesh>
            <Text position={[-3, 0.5, 0]} fontSize={0.15} color="white">Source λ</Text>

            {/* Double fente */}
            <group position={[-1, 0, 0]}>
                <mesh position={[0, 0.3, 0]}>
                    <boxGeometry args={[0.1, 0.4, 0.5]} />
                    <meshStandardMaterial color="#1e293b" />
                </mesh>
                <mesh position={[0, -0.3, 0]}>
                    <boxGeometry args={[0.1, 0.4, 0.5]} />
                    <meshStandardMaterial color="#1e293b" />
                </mesh>
                {/* Fentes */}
                <mesh position={[0, slitSeparation * 0.5 * 0.5, 0]}>
                    <boxGeometry args={[0.12, 0.02, 0.3]} />
                    <meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[0, -slitSeparation * 0.5 * 0.5, 0]}>
                    <boxGeometry args={[0.12, 0.02, 0.3]} />
                    <meshStandardMaterial color={getColor(wavelength)} emissive={getColor(wavelength)} emissiveIntensity={0.5} />
                </mesh>
                <Text position={[0, -1, 0]} fontSize={0.15} color="white">Fentes (a)</Text>
            </group>

            {/* Écran avec franges */}
            <group position={[2, 0, 0]}>
                <mesh>
                    <boxGeometry args={[0.1, 3, 1]} />
                    <meshStandardMaterial color="#0f172a" />
                </mesh>
                {/* Franges d'interférence */}
                {fringes.map((fringe, i) => (
                    <mesh key={i} position={[0.06, fringe.position, 0]}>
                        <boxGeometry args={[0.02, interfringeMm * 0.15, 0.9]} />
                        <meshStandardMaterial
                            color={getColor(wavelength)}
                            emissive={getColor(wavelength)}
                            emissiveIntensity={fringe.intensity}
                            transparent
                            opacity={fringe.intensity}
                        />
                    </mesh>
                ))}
                <Text position={[0, -1.8, 0]} fontSize={0.15} color="white">Écran (D)</Text>
            </group>

            {/* Panneau de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel title="🌈 Interférences - Fentes de Young" defaultPosition="top-right">
                    <div className="no-drag" style={{ padding: '15px', color: 'white', width: '300px' }}>
                        {challengeMode && (
                            <>
                                <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                    <span>🎯 Score: {score}</span>
                                    <span>🔥 Streak: {streak}</span>
                                </div>
                                {targetInterfringe && (
                                    <div style={{
                                        background: 'rgba(34,197,94,0.2)',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        marginBottom: '15px',
                                        border: '1px solid rgba(34,197,94,0.5)'
                                    }}>
                                        <strong>🔬 Mission Optique:</strong><br />
                                        i = {targetInterfringe.interfringe} mm (±{targetInterfringe.tolerance})<br />
                                        <small style={{ color: '#94a3b8' }}>{targetInterfringe.hint}</small>
                                    </div>
                                )}
                            </>
                        )}

                        <div style={{ marginBottom: '12px' }}>
                            <label>Longueur d'onde λ: {wavelength} nm</label>
                            <input type="range" min="400" max="700" value={wavelength}
                                onChange={(e) => setWavelength(parseInt(e.target.value))}
                                style={{ width: '100%', accentColor: getColor(wavelength) }} />
                            <div style={{
                                height: '10px',
                                borderRadius: '5px',
                                background: 'linear-gradient(to right, #8b5cf6, #3b82f6, #22c55e, #eab308, #f97316, #ef4444)',
                                marginTop: '5px'
                            }} />
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <label>Écart fentes a: {slitSeparation.toFixed(2)} mm</label>
                            <input type="range" min="0.1" max="2" step="0.01" value={slitSeparation}
                                onChange={(e) => setSlitSeparation(parseFloat(e.target.value))} style={{ width: '100%' }} />
                        </div>

                        <div style={{ marginBottom: '12px' }}>
                            <label>Distance écran D: {screenDistance.toFixed(1)} m</label>
                            <input type="range" min="0.5" max="5" step="0.1" value={screenDistance}
                                onChange={(e) => setScreenDistance(parseFloat(e.target.value))} style={{ width: '100%' }} />
                        </div>

                        <div style={{
                            background: `rgba(${wavelength < 550 ? '59,130,246' : '239,68,68'},0.2)`,
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '15px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Interfrange i</div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: getColor(wavelength) }}>
                                {interfringeMm.toFixed(2)} mm
                            </div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>
                                i = λD/a
                            </div>
                        </div>

                        <button onClick={challengeMode ? checkAnswer : startChallenge}
                            style={{
                                width: '100%', padding: '12px',
                                background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                                border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>
                            {challengeMode ? '✓ Valider interfrange' : '🎮 Mode Défi Optique'}
                        </button>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {showSuccess && <SuccessOverlay message="Mesure précise!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// Export Partie 3
export { OscillationsLCAdvanced as OscillationsLCTS };
export { OscillationsMecaAdvanced as OscillationsMecaTS };
export { InterferencesAdvanced as InterferencesTS };
