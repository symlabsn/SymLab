'use client';
/**
 * Physique Terminale S - Simulations Avancées
 * Partie 2: Électromagnétisme (Chapitres 5-9)
 * Mode Défi avec gamification complète
 */
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Line, Text } from '@react-three/drei';
import * as THREE from 'three';
import { SuccessOverlay, ConfettiExplosion } from './PC4eSimulations';

// ============================================================
// COMPOSANTS UTILITAIRES RÉUTILISABLES
// ============================================================

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

// Particules magnétiques animées
function MagneticFieldLines({ intensity = 1, polarity = 'N' }) {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    const lines = useMemo(() => {
        const result = [];
        const count = 8;
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const points = [];
            for (let j = 0; j <= 20; j++) {
                const t = j / 20;
                const r = 0.5 + t * 2 * intensity;
                const x = Math.cos(angle + t * 0.5) * r;
                const y = Math.sin(angle + t * 0.5) * r;
                const z = (polarity === 'N' ? 1 : -1) * t * 0.5;
                points.push(new THREE.Vector3(x, y, z));
            }
            result.push(points);
        }
        return result;
    }, [intensity, polarity]);

    return (
        <group ref={groupRef}>
            {lines.map((points, i) => (
                <Line
                    key={i}
                    points={points}
                    color={polarity === 'N' ? '#ef4444' : '#3b82f6'}
                    lineWidth={2}
                    opacity={0.7}
                    transparent
                />
            ))}
        </group>
    );
}

// ============================================================
// P5. CHAMP MAGNÉTIQUE - VERSION AVANCÉE
// Mission: Ingénieur IRM - Créer le bon champ magnétique
// ============================================================
function ChampMagnetiqueAdvanced() {
    const [current, setCurrent] = useState(5);
    const [turns, setTurns] = useState(100);
    const [length, setLength] = useState(0.1);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetB, setTargetB] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [level, setLevel] = useState(1);

    const MU_0 = 4 * Math.PI * 1e-7;
    const n = turns / length;
    const B = MU_0 * n * current;
    const B_mT = B * 1000;

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { B: 0.5, tolerance: 0.1, hint: "IRM bas de gamme" },
            { B: 1.5, tolerance: 0.15, hint: "IRM standard hôpital" },
            { B: 3.0, tolerance: 0.2, hint: "IRM haute résolution" },
            { B: 7.0, tolerance: 0.5, hint: "IRM recherche" }
        ];
        const target = targets[Math.min(level - 1, targets.length - 1)];
        setTargetB(target);
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
        setAttempts(a => a + 1);

        if (Math.abs(B_mT - targetB.B) <= targetB.tolerance) {
            const timeBonus = Math.floor(timeLeft / 10) * 10;
            const streakBonus = streak * 25;
            const points = 100 + timeBonus + streakBonus;

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
            {/* Solénoïde 3D */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.8, 0.8, length * 10, 32, 1, true]} />
                <meshStandardMaterial color="#b45309" wireframe opacity={0.8} transparent />
            </mesh>

            {/* Lignes de champ */}
            <MagneticFieldLines intensity={B_mT / 2} polarity="N" />

            {/* Flèches de courant */}
            {[...Array(8)].map((_, i) => (
                <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 0.8, Math.sin(i * Math.PI / 4) * 0.8, 0]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.5} />
                </mesh>
            ))}

            {/* Panneau de contrôle */}
            <Html position={[-4, 2, 0]} transform={false} style={{ pointerEvents: 'auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))',
                    padding: '20px',
                    borderRadius: '16px',
                    color: 'white',
                    width: '320px',
                    border: '1px solid rgba(148,163,184,0.2)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🧲 Champ Magnétique - Solénoïde
                    </h3>

                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                                <span>📊 Niveau: {level}</span>
                            </div>
                            {targetB && (
                                <div style={{
                                    background: 'rgba(59,130,246,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(59,130,246,0.5)'
                                }}>
                                    <strong>🏥 Mission IRM:</strong><br />
                                    Créer B = {targetB.B} mT (±{targetB.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetB.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '15px' }}>
                        <label>Courant I: {current.toFixed(1)} A</label>
                        <input
                            type="range"
                            min="0.1"
                            max="20"
                            step="0.1"
                            value={current}
                            onChange={(e) => setCurrent(parseFloat(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Nombre de spires N: {turns}</label>
                        <input
                            type="range"
                            min="10"
                            max="500"
                            step="10"
                            value={turns}
                            onChange={(e) => setTurns(parseInt(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Longueur L: {(length * 100).toFixed(0)} cm</label>
                        <input
                            type="range"
                            min="0.05"
                            max="0.5"
                            step="0.01"
                            value={length}
                            onChange={(e) => setLength(parseFloat(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{
                        background: 'rgba(16,185,129,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Champ magnétique B</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>
                            {B_mT.toFixed(2)} mT
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>
                            B = μ₀ × n × I = μ₀ × (N/L) × I
                        </div>
                    </div>

                    {!challengeMode ? (
                        <button
                            onClick={startChallenge}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                                border: 'none',
                                borderRadius: '8px',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            🎮 Mode Défi IRM
                        </button>
                    ) : (
                        <button
                            onClick={checkAnswer}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                border: 'none',
                                borderRadius: '8px',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            ✓ Valider le champ
                        </button>
                    )}
                </div>
            </Html>

            {showSuccess && <SuccessOverlay message={`+${100 + Math.floor(timeLeft / 10) * 10 + streak * 25} pts!`} />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P6. FORCE DE LORENTZ - VERSION AVANCÉE
// Mission: Pilote de Cyclotron - Guider les particules
// ============================================================
function LorentzAdvanced() {
    const [velocity, setVelocity] = useState(1e6);
    const [magneticField, setMagneticField] = useState(0.5);
    const [particleCharge, setParticleCharge] = useState(1);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetRadius, setTargetRadius] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);
    const [particlePos, setParticlePos] = useState({ x: 0, y: 0, angle: 0 });
    const [isAnimating, setIsAnimating] = useState(false);

    const ELECTRON_MASS = 9.109e-31;
    const ELECTRON_CHARGE = 1.602e-19;

    const mass = ELECTRON_MASS;
    const charge = particleCharge * ELECTRON_CHARGE;
    const radius = (mass * velocity) / (Math.abs(charge) * magneticField);
    const radiusCm = radius * 100;

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    useEffect(() => {
        if (isAnimating) {
            const interval = setInterval(() => {
                setParticlePos(prev => ({
                    ...prev,
                    angle: prev.angle + 0.1,
                    x: Math.cos(prev.angle) * Math.min(radiusCm / 10, 3),
                    y: Math.sin(prev.angle) * Math.min(radiusCm / 10, 3)
                }));
            }, 50);
            return () => clearInterval(interval);
        }
    }, [isAnimating, radiusCm]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { radius: 5, tolerance: 1, hint: "Petit cyclotron de laboratoire" },
            { radius: 10, tolerance: 1.5, hint: "Cyclotron médical" },
            { radius: 20, tolerance: 2, hint: "Synchrotron compact" },
            { radius: 50, tolerance: 5, hint: "Grand accélérateur" }
        ];
        const target = targets[Math.min(level - 1, targets.length - 1)];
        setTargetRadius(target);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        setIsAnimating(true);
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetRadius) return;

        if (Math.abs(radiusCm - targetRadius.radius) <= targetRadius.tolerance) {
            const timeBonus = Math.floor(timeLeft / 10) * 10;
            const streakBonus = streak * 25;
            const points = 100 + timeBonus + streakBonus;

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
            {/* Chambre du cyclotron */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.1, 16, 100]} />
                <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Trajectoire de la particule */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[Math.min(radiusCm / 10, 3) - 0.02, Math.min(radiusCm / 10, 3) + 0.02, 64]} />
                <meshBasicMaterial color="#22d3ee" opacity={0.6} transparent side={THREE.DoubleSide} />
            </mesh>

            {/* Particule animée */}
            <mesh position={[particlePos.x, 0, particlePos.y]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial
                    color={particleCharge > 0 ? '#ef4444' : '#3b82f6'}
                    emissive={particleCharge > 0 ? '#ef4444' : '#3b82f6'}
                    emissiveIntensity={0.8}
                />
            </mesh>

            {/* Flèches du champ B */}
            {[...Array(9)].map((_, i) => {
                const x = (i % 3 - 1) * 1.5;
                const z = (Math.floor(i / 3) - 1) * 1.5;
                return (
                    <group key={i} position={[x, 0, z]}>
                        <mesh>
                            <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
                            <meshStandardMaterial color="#a855f7" />
                        </mesh>
                        <mesh position={[0, 0.3, 0]}>
                            <coneGeometry args={[0.06, 0.1, 8]} />
                            <meshStandardMaterial color="#a855f7" />
                        </mesh>
                    </group>
                );
            })}

            {/* Panneau de contrôle */}
            <Html position={[-4, 2, 0]} transform={false} style={{ pointerEvents: 'auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))',
                    padding: '20px',
                    borderRadius: '16px',
                    color: 'white',
                    width: '320px',
                    border: '1px solid rgba(148,163,184,0.2)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>
                        ⚡ Force de Lorentz - Cyclotron
                    </h3>

                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                                <span>📊 Niveau: {level}</span>
                            </div>
                            {targetRadius && (
                                <div style={{
                                    background: 'rgba(168,85,247,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(168,85,247,0.5)'
                                }}>
                                    <strong>🔬 Mission Cyclotron:</strong><br />
                                    Rayon = {targetRadius.radius} cm (±{targetRadius.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetRadius.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '15px' }}>
                        <label>Vitesse v: {(velocity / 1e6).toFixed(1)} × 10⁶ m/s</label>
                        <input
                            type="range"
                            min="0.1"
                            max="10"
                            step="0.1"
                            value={velocity / 1e6}
                            onChange={(e) => setVelocity(parseFloat(e.target.value) * 1e6)}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Champ B: {magneticField.toFixed(2)} T</label>
                        <input
                            type="range"
                            min="0.01"
                            max="2"
                            step="0.01"
                            value={magneticField}
                            onChange={(e) => setMagneticField(parseFloat(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label>Charge: {particleCharge > 0 ? 'Proton (+)' : 'Électron (-)'}</label>
                        <input
                            type="range"
                            min="-1"
                            max="1"
                            step="2"
                            value={particleCharge}
                            onChange={(e) => setParticleCharge(parseInt(e.target.value))}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div style={{
                        background: 'rgba(34,211,238,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Rayon de courbure R</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22d3ee' }}>
                            {radiusCm.toFixed(2)} cm
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>
                            R = mv / (|q|B)
                        </div>
                    </div>

                    {!challengeMode ? (
                        <button
                            onClick={startChallenge}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                                border: 'none',
                                borderRadius: '8px',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            🎮 Mode Défi Cyclotron
                        </button>
                    ) : (
                        <button
                            onClick={checkAnswer}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                border: 'none',
                                borderRadius: '8px',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            ✓ Valider la trajectoire
                        </button>
                    )}
                </div>
            </Html>

            {showSuccess && <SuccessOverlay message={`+${100 + Math.floor(timeLeft / 10) * 10 + streak * 25} pts!`} />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P7. LOI DE LAPLACE - VERSION AVANCÉE
// Mission: Ingénieur Audio - Concevoir un haut-parleur
// ============================================================
function LaplaceAdvanced() {
    const [current, setCurrent] = useState(2);
    const [wireLength, setWireLength] = useState(0.1);
    const [magneticField, setMagneticField] = useState(0.5);
    const [angle, setAngle] = useState(90);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetForce, setTargetForce] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);
    const [wirePosition, setWirePosition] = useState(0);

    const force = magneticField * current * wireLength * Math.sin(angle * Math.PI / 180);
    const forceMN = force * 1000;

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWirePosition(p => Math.sin(Date.now() / 500) * force * 50);
        }, 50);
        return () => clearInterval(interval);
    }, [force]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { force: 50, tolerance: 10, hint: "Écouteurs in-ear" },
            { force: 100, tolerance: 15, hint: "Haut-parleur de smartphone" },
            { force: 200, tolerance: 20, hint: "Enceinte portable" },
            { force: 500, tolerance: 50, hint: "Caisson de basse" }
        ];
        setTargetForce(targets[Math.min(level - 1, targets.length - 1)]);
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
        if (!targetForce) return;

        if (Math.abs(forceMN - targetForce.force) <= targetForce.tolerance) {
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
            {/* Aimants permanents */}
            <mesh position={[-1.5, 0, 0]}>
                <boxGeometry args={[0.3, 2, 1]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>
            <mesh position={[1.5, 0, 0]}>
                <boxGeometry args={[0.3, 2, 1]} />
                <meshStandardMaterial color="#3b82f6" />
            </mesh>

            {/* Fil conducteur mobile */}
            <mesh position={[0, wirePosition * 0.01, 0]}>
                <cylinderGeometry args={[0.05, 0.05, wireLength * 10, 16]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.8} />
            </mesh>

            {/* Flèche de force */}
            <group position={[0, wirePosition * 0.01 + 0.5, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.03, 0.03, Math.min(forceMN / 100, 1), 8]} />
                    <meshStandardMaterial color="#10b981" />
                </mesh>
                <mesh position={[0, Math.min(forceMN / 100, 1) / 2 + 0.05, 0]}>
                    <coneGeometry args={[0.08, 0.15, 8]} />
                    <meshStandardMaterial color="#10b981" />
                </mesh>
            </group>

            {/* Panneau */}
            <Html position={[-4, 2, 0]} transform={false} style={{ pointerEvents: 'auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))',
                    padding: '20px',
                    borderRadius: '16px',
                    color: 'white',
                    width: '320px',
                    border: '1px solid rgba(148,163,184,0.2)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>
                        🔌 Loi de Laplace - Haut-Parleur
                    </h3>

                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetForce && (
                                <div style={{
                                    background: 'rgba(16,185,129,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(16,185,129,0.5)'
                                }}>
                                    <strong>🔊 Mission Audio:</strong><br />
                                    Force = {targetForce.force} mN (±{targetForce.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetForce.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>Courant I: {current.toFixed(1)} A</label>
                        <input type="range" min="0.1" max="10" step="0.1" value={current}
                            onChange={(e) => setCurrent(parseFloat(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Longueur L: {(wireLength * 100).toFixed(0)} cm</label>
                        <input type="range" min="0.01" max="0.5" step="0.01" value={wireLength}
                            onChange={(e) => setWireLength(parseFloat(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Champ B: {magneticField.toFixed(2)} T</label>
                        <input type="range" min="0.1" max="2" step="0.01" value={magneticField}
                            onChange={(e) => setMagneticField(parseFloat(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(251,191,36,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Force de Laplace F</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fbbf24' }}>
                            {forceMN.toFixed(1)} mN
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>F = B × I × L × sin(θ)</div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider' : '🎮 Mode Défi Audio'}
                    </button>
                </div>
            </Html>

            {showSuccess && <SuccessOverlay message={`Bravo!`} />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P8. INDUCTION RL - VERSION AVANCÉE  
// Mission: Ingénieur Électricien - Protéger les circuits
// ============================================================
function InductionRLAdvanced() {
    const [resistance, setResistance] = useState(100);
    const [inductance, setInductance] = useState(0.5);
    const [voltage, setVoltage] = useState(12);
    const [time, setTime] = useState(0);
    const [isCharging, setIsCharging] = useState(false);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetTau, setTargetTau] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const tau = inductance / resistance;
    const tauMs = tau * 1000;
    const I_max = voltage / resistance;
    const currentI = isCharging ? I_max * (1 - Math.exp(-time / tau)) : I_max * Math.exp(-time / tau);

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    useEffect(() => {
        if (isCharging || time > 0) {
            const interval = setInterval(() => {
                setTime(t => t + tau / 50);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isCharging, tau]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { tau: 1, tolerance: 0.2, hint: "Protection LED" },
            { tau: 5, tolerance: 0.5, hint: "Alimentation audio" },
            { tau: 10, tolerance: 1, hint: "Filtre industriel" },
            { tau: 20, tolerance: 2, hint: "Transformateur HT" }
        ];
        setTargetTau(targets[Math.min(level - 1, targets.length - 1)]);
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
        if (!targetTau) return;

        if (Math.abs(tauMs - targetTau.tau) <= targetTau.tolerance) {
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
            {/* Bobine */}
            <mesh position={[-1, 0, 0]}>
                <torusGeometry args={[0.5, 0.1, 16, 32]} />
                <meshStandardMaterial color="#8b5cf6" metalness={0.6} />
            </mesh>

            {/* Résistance */}
            <mesh position={[1, 0, 0]}>
                <boxGeometry args={[0.8, 0.3, 0.3]} />
                <meshStandardMaterial color="#78716c" />
            </mesh>

            {/* Indicateur de courant */}
            <mesh position={[0, -1.5, 0]}>
                <boxGeometry args={[3, 0.1, 0.5]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
            <mesh position={[-1.5 + (currentI / I_max) * 3, -1.5, 0.3]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} />
            </mesh>

            {/* Panneau */}
            <Html position={[-4, 2, 0]} transform={false} style={{ pointerEvents: 'auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))',
                    padding: '20px', borderRadius: '16px', color: 'white', width: '320px',
                    border: '1px solid rgba(148,163,184,0.2)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>🔋 Dipôle RL - Induction</h3>

                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetTau && (
                                <div style={{
                                    background: 'rgba(139,92,246,0.2)', padding: '10px', borderRadius: '8px',
                                    marginBottom: '15px', border: '1px solid rgba(139,92,246,0.5)'
                                }}>
                                    <strong>⚡ Mission Protection:</strong><br />
                                    τ = {targetTau.tau} ms (±{targetTau.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetTau.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>R: {resistance} Ω</label>
                        <input type="range" min="10" max="1000" value={resistance}
                            onChange={(e) => setResistance(parseInt(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>L: {inductance.toFixed(2)} H</label>
                        <input type="range" min="0.01" max="2" step="0.01" value={inductance}
                            onChange={(e) => setInductance(parseFloat(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(139,92,246,0.2)', padding: '12px', borderRadius: '8px',
                        marginBottom: '15px', textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Constante de temps τ</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6' }}>
                            {tauMs.toFixed(2)} ms
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>τ = L / R</div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                        <button onClick={() => { setIsCharging(true); setTime(0); }}
                            style={{ flex: 1, padding: '8px', background: '#10b981', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>
                            ⚡ Charger
                        </button>
                        <button onClick={() => { setIsCharging(false); setTime(0); }}
                            style={{ flex: 1, padding: '8px', background: '#ef4444', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>
                            📉 Décharger
                        </button>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider τ' : '🎮 Mode Défi'}
                    </button>
                </div>
            </Html>

            {showSuccess && <SuccessOverlay message="Parfait!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P9. DIPÔLE RC - VERSION AVANCÉE
// Mission: Ingénieur Flash - Concevoir un flash photo
// ============================================================
function DipoleRCAdvanced() {
    const [resistance, setResistance] = useState(1000);
    const [capacitance, setCapacitance] = useState(100);
    const [voltage, setVoltage] = useState(300);
    const [chargePercent, setChargePercent] = useState(0);
    const [isCharging, setIsCharging] = useState(false);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetTau, setTargetTau] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showFlash, setShowFlash] = useState(false);
    const [level, setLevel] = useState(1);

    const C_farads = capacitance * 1e-6;
    const tau = resistance * C_farads;
    const tauMs = tau * 1000;
    const energy = 0.5 * C_farads * voltage * voltage;

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    useEffect(() => {
        if (isCharging && chargePercent < 99) {
            const interval = setInterval(() => {
                setChargePercent(p => Math.min(99, p + (100 - p) * 0.1));
            }, tauMs / 5);
            return () => clearInterval(interval);
        }
    }, [isCharging, chargePercent, tauMs]);

    const triggerFlash = () => {
        if (chargePercent > 80) {
            setShowFlash(true);
            setChargePercent(0);
            setIsCharging(false);
            setTimeout(() => setShowFlash(false), 200);
        }
    };

    const generateChallenge = useCallback(() => {
        const targets = [
            { tau: 50, tolerance: 10, hint: "Flash compact" },
            { tau: 100, tolerance: 15, hint: "Flash studio" },
            { tau: 200, tolerance: 25, hint: "Flash stroboscopique" },
            { tau: 500, tolerance: 50, hint: "Flash haute puissance" }
        ];
        setTargetTau(targets[Math.min(level - 1, targets.length - 1)]);
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
        if (!targetTau) return;

        if (Math.abs(tauMs - targetTau.tau) <= targetTau.tolerance) {
            const points = 100 + Math.floor(timeLeft / 10) * 10 + streak * 25;
            setScore(s => s + points);
            setStreak(s => s + 1);
            setShowConfetti(true);
            setShowSuccess(true);
            triggerFlash();

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
            {/* Flash effect */}
            {showFlash && (
                <mesh>
                    <sphereGeometry args={[10, 32, 32]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.8} side={THREE.BackSide} />
                </mesh>
            )}

            {/* Condensateur */}
            <group position={[0, 0, 0]}>
                <mesh position={[-0.15, 0, 0]}>
                    <boxGeometry args={[0.05, 1.5, 1]} />
                    <meshStandardMaterial color="#3b82f6" />
                </mesh>
                <mesh position={[0.15, 0, 0]}>
                    <boxGeometry args={[0.05, 1.5, 1]} />
                    <meshStandardMaterial color="#3b82f6" />
                </mesh>
                {/* Indication de charge */}
                <mesh position={[0, -0.75 + chargePercent / 100 * 1.5 / 2, 0]}>
                    <boxGeometry args={[0.25, chargePercent / 100 * 1.5, 0.9]} />
                    <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={chargePercent / 200} transparent opacity={0.7} />
                </mesh>
            </group>

            {/* Résistance */}
            <mesh position={[1.5, 0, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#78716c" />
            </mesh>

            {/* Panneau */}
            <Html position={[-4, 2, 0]} transform={false} style={{ pointerEvents: 'auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))',
                    padding: '20px', borderRadius: '16px', color: 'white', width: '320px',
                    border: '1px solid rgba(148,163,184,0.2)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>📸 Dipôle RC - Flash Photo</h3>

                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetTau && (
                                <div style={{
                                    background: 'rgba(251,191,36,0.2)', padding: '10px', borderRadius: '8px',
                                    marginBottom: '15px', border: '1px solid rgba(251,191,36,0.5)'
                                }}>
                                    <strong>📸 Mission Flash:</strong><br />
                                    τ = {targetTau.tau} ms (±{targetTau.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetTau.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>R: {resistance} Ω</label>
                        <input type="range" min="100" max="10000" step="100" value={resistance}
                            onChange={(e) => setResistance(parseInt(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>C: {capacitance} µF</label>
                        <input type="range" min="1" max="1000" value={capacitance}
                            onChange={(e) => setCapacitance(parseInt(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(251,191,36,0.2)', padding: '12px', borderRadius: '8px',
                        marginBottom: '15px', textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Constante de temps τ</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fbbf24' }}>
                            {tauMs.toFixed(1)} ms
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>τ = R × C</div>
                        <div style={{ marginTop: '8px', fontSize: '14px' }}>
                            Charge: {chargePercent.toFixed(0)}% | Énergie: {(energy * 1000).toFixed(1)} mJ
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                        <button onClick={() => setIsCharging(true)}
                            style={{ flex: 1, padding: '8px', background: '#10b981', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>
                            ⚡ Charger
                        </button>
                        <button onClick={triggerFlash}
                            style={{ flex: 1, padding: '8px', background: chargePercent > 80 ? '#fbbf24' : '#64748b', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>
                            📸 Flash!
                        </button>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider τ' : '🎮 Mode Défi Flash'}
                    </button>
                </div>
            </Html>

            {showSuccess && <SuccessOverlay message="Flash réussi!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// Export Partie 2
export { ChampMagnetiqueAdvanced as ChampMagnetiqueTS };
export { LorentzAdvanced as LorentzTS };
export { LaplaceAdvanced as LaplaceTS };
export { InductionRLAdvanced as InductionRLTS };
export { DipoleRCAdvanced as DipoleRCTS };
