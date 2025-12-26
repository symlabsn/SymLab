'use client';
/**
 * Physique Terminale S - Simulations Gamifiées
 * Partie 1-2: Cinématique, Dynamique, Électromagnétisme (Chapitres 1-9)
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
// P1. CINÉMATIQUE DU POINT - VERSION GAMIFIÉE
// Mission: Ingénieur Aérospatial - Prédire les trajectoires
// ============================================================
export function CinematiqueAdvanced() {
    const [motionType, setMotionType] = useState('mru');
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    const [v0, setV0] = useState(2);
    const [a, setA] = useState(0.5);
    const R = 2;

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetPosition, setTargetPosition] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(45);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const particleRef = useRef();
    const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

    useFrame((state, delta) => {
        if (running && particleRef.current) {
            setTime(t => (t + delta) % 10);

            let x, y;
            if (motionType === 'mru') {
                x = (v0 * time) % 8 - 4;
                y = 0;
            } else if (motionType === 'mruv') {
                x = 0.5 * a * time * time % 8 - 4;
                y = 0;
            } else {
                const omega = 1;
                x = R * Math.cos(omega * time);
                y = R * Math.sin(omega * time);
            }

            particleRef.current.position.set(x, y, 0);
            setCurrentPos({ x, y });
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
            { x: 2, tolerance: 0.5, hint: "Position x = 2 m" },
            { x: -1.5, tolerance: 0.4, hint: "Position x = -1.5 m" },
            { x: 3, tolerance: 0.3, hint: "Position x = 3 m (précis!)" },
            { x: 0, tolerance: 0.2, hint: "Retour à l'origine" }
        ];
        setTargetPosition(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(45);
        setScore(0);
        setStreak(0);
        setLevel(1);
        setMotionType('mru');
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetPosition) return;

        if (Math.abs(currentPos.x - targetPosition.x) <= targetPosition.tolerance) {
            const points = 100 + Math.floor(timeLeft / 5) * 10 + streak * 25;
            setScore(s => s + points);
            setStreak(s => s + 1);
            setShowConfetti(true);
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                setShowConfetti(false);
                setLevel(l => l + 1);
                generateChallenge();
                setTimeLeft(45);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#3B82F6">CINÉMATIQUE DU POINT</Text>

            {/* Axes */}
            <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(-4, 0, 0), 8, 0xffffff]} />
            <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -3, 0), 6, 0xffffff]} />
            <Text position={[4.3, 0, 0]} fontSize={0.2} color="white">x</Text>
            <Text position={[0, 3.3, 0]} fontSize={0.2} color="white">y</Text>

            {/* Target indicator */}
            {challengeMode && targetPosition && (
                <mesh position={[targetPosition.x, 0, -0.1]}>
                    <ringGeometry args={[0.3, 0.4, 32]} />
                    <meshBasicMaterial color="#fbbf24" side={THREE.DoubleSide} />
                </mesh>
            )}

            {/* Particule */}
            <mesh ref={particleRef}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.5} />
            </mesh>

            {/* Cercle pour MCU */}
            {motionType === 'mcu' && (
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[R - 0.02, R + 0.02, 64]} />
                    <meshBasicMaterial color="#4ADE80" side={THREE.DoubleSide} />
                </mesh>
            )}

            <DraggableHtmlPanel title="📍 Cinématique" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={45} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetPosition && (
                                <div style={{
                                    background: 'rgba(59,130,246,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(59,130,246,0.5)'
                                }}>
                                    <strong>🚀 Mission Navigation:</strong><br />
                                    Atteindre x = {targetPosition.x} m (±{targetPosition.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetPosition.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        {['mru', 'mruv', 'mcu'].map(t => (
                            <button key={t} onClick={() => setMotionType(t)}
                                style={{
                                    flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
                                    background: motionType === t ? '#3b82f6' : '#1e293b',
                                    color: 'white', fontWeight: 'bold', cursor: 'pointer'
                                }}>
                                {t.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>v₀ = {v0} m/s</label>
                        <input type="range" min="0.5" max="5" step="0.5" value={v0}
                            onChange={e => setV0(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(34,197,94,0.2)',
                        padding: '10px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Position actuelle</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#22c55e' }}>
                            x = {currentPos.x.toFixed(2)} m
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider position' : '🎮 Mode Défi Navigation'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Position atteinte!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P2. DYNAMIQUE NEWTON - VERSION GAMIFIÉE
// Mission: Ingénieur Mécanique - Calculer les forces
// ============================================================
export function DynamiqueAdvanced() {
    const [force, setForce] = useState(10);
    const [mass, setMass] = useState(2);
    const [friction, setFriction] = useState(0);
    const boxRef = useRef();
    const [position, setPosition] = useState(0);
    const [velocity, setVelocity] = useState(0);

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetAccel, setTargetAccel] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const acceleration = (force - friction) / mass;

    useFrame((state, delta) => {
        if (boxRef.current) {
            const newVel = velocity + acceleration * delta;
            const newPos = position + newVel * delta;

            if (newPos > 3) {
                setPosition(-3);
                setVelocity(0);
            } else {
                setPosition(newPos);
                setVelocity(Math.max(0, newVel));
            }

            boxRef.current.position.x = position;
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
            { accel: 5, tolerance: 0.5, hint: "Accélération modérée" },
            { accel: 2, tolerance: 0.3, hint: "Accélération faible" },
            { accel: 10, tolerance: 0.5, hint: "Forte accélération!" },
            { accel: 0, tolerance: 0.2, hint: "Équilibre des forces" }
        ];
        setTargetAccel(targets[Math.min(level - 1, targets.length - 1)]);
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
        if (!targetAccel) return;

        if (Math.abs(acceleration - targetAccel.accel) <= targetAccel.tolerance) {
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
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#F59E0B">LOIS DE NEWTON</Text>

            {/* Sol */}
            <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 4]} />
                <meshStandardMaterial color="#374151" />
            </mesh>

            {/* Objet */}
            <group ref={boxRef}>
                <mesh position={[0, -0.5, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text position={[0, 0.3, 0.6]} fontSize={0.3} color="white">{mass} kg</Text>

                {force > 0 && (
                    <arrowHelper args={[new THREE.Vector3(1, 0, 0), new THREE.Vector3(0.6, -0.5, 0), force / 10, 0x22C55E, 0.2, 0.15]} />
                )}
                <arrowHelper args={[new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, -0.5, 0), 0.8, 0xEF4444, 0.15, 0.1]} />
                <arrowHelper args={[new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0), 0.8, 0x8B5CF6, 0.15, 0.1]} />
            </group>

            <DraggableHtmlPanel title="⚖️ Dynamique Newton" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetAccel && (
                                <div style={{
                                    background: 'rgba(245,158,11,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(245,158,11,0.5)'
                                }}>
                                    <strong>⚙️ Mission Mécanique:</strong><br />
                                    a = {targetAccel.accel} m/s² (±{targetAccel.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetAccel.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>Force F = {force} N</label>
                        <input type="range" min="0" max="30" value={force}
                            onChange={e => setForce(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Masse m = {mass} kg</label>
                        <input type="range" min="1" max="10" value={mass}
                            onChange={e => setMass(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Frottement f = {friction} N</label>
                        <input type="range" min="0" max="15" value={friction}
                            onChange={e => setFriction(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(245,158,11,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>ΣF = ma</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>
                            a = {acceleration.toFixed(2)} m/s²
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #f59e0b, #d97706)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider accélération' : '🎮 Mode Défi Mécanique'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Parfait! F=ma maîtrisé!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P3. PROJECTILE - VERSION GAMIFIÉE
// Mission: Artilleur - Toucher la cible
// ============================================================
export function ProjectileAdvanced() {
    const [angle, setAngle] = useState(45);
    const [v0, setV0] = useState(10);
    const [launched, setLaunched] = useState(false);
    const [time, setTime] = useState(0);
    const ballRef = useRef();

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetDistance, setTargetDistance] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);
    const [hitDistance, setHitDistance] = useState(0);

    const g = 9.81;
    const angleRad = (angle * Math.PI) / 180;
    const vx = v0 * Math.cos(angleRad);
    const vy = v0 * Math.sin(angleRad);
    const tMax = (2 * vy) / g;
    const range = vx * tMax;

    useFrame((state, delta) => {
        if (launched && ballRef.current) {
            const newTime = time + delta * 2;
            const x = vx * newTime - 4;
            const y = vy * newTime - 0.5 * g * newTime * newTime;

            if (y < 0) {
                setLaunched(false);
                setHitDistance(x + 4);
                setTime(0);
            } else {
                setTime(newTime);
                ballRef.current.position.set(x, y, 0);
            }
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
            { distance: 8, tolerance: 1, hint: "Cible proche" },
            { distance: 12, tolerance: 0.8, hint: "Cible moyenne" },
            { distance: 15, tolerance: 0.6, hint: "Tir précis requis" },
            { distance: 10, tolerance: 0.3, hint: "Tir de précision!" }
        ];
        setTargetDistance(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        generateChallenge();
    };

    const launch = () => {
        setLaunched(true);
        setTime(0);
        setHitDistance(0);
        if (ballRef.current) ballRef.current.position.set(-4, 0, 0);
    };

    useEffect(() => {
        if (challengeMode && hitDistance > 0 && targetDistance) {
            if (Math.abs(hitDistance - targetDistance.distance) <= targetDistance.tolerance) {
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
                    setHitDistance(0);
                }, 2000);
            } else {
                setStreak(0);
            }
        }
    }, [hitDistance]);

    return (
        <group>
            <Text position={[0, 4, 0]} fontSize={0.4} color="#F97316">MOUVEMENT PROJECTILE</Text>

            {/* Sol */}
            <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[12, 4]} />
                <meshStandardMaterial color="#15803D" />
            </mesh>

            {/* Cible */}
            {challengeMode && targetDistance && (
                <group position={[targetDistance.distance - 4, 0, 0]}>
                    <mesh position={[0, 0.5, 0]}>
                        <cylinderGeometry args={[0.3, 0.3, 1, 16]} />
                        <meshStandardMaterial color="#ef4444" />
                    </mesh>
                    <mesh position={[0, 1.2, 0]}>
                        <ringGeometry args={[0.2, 0.4, 32]} />
                        <meshBasicMaterial color="#fbbf24" side={THREE.DoubleSide} />
                    </mesh>
                </group>
            )}

            {/* Canon */}
            <group position={[-4, 0, 0]} rotation={[0, 0, angleRad]}>
                <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.2, 1]} />
                    <meshStandardMaterial color="#374151" />
                </mesh>
            </group>

            {/* Balle */}
            <mesh ref={ballRef} position={[-4, 0, 0]}>
                <sphereGeometry args={[0.15]} />
                <meshStandardMaterial color="#EF4444" />
            </mesh>

            {/* Trajectoire théorique */}
            {!launched && (
                <Line
                    points={Array.from({ length: 50 }, (_, i) => {
                        const t = (i / 49) * tMax;
                        return [-4 + vx * t, vy * t - 0.5 * g * t * t, 0];
                    })}
                    color="#FBBF24"
                    lineWidth={2}
                    dashed
                />
            )}

            <DraggableHtmlPanel title="🎯 Mouvement Projectile" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetDistance && (
                                <div style={{
                                    background: 'rgba(249,115,22,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(249,115,22,0.5)'
                                }}>
                                    <strong>🎯 Mission Artillerie:</strong><br />
                                    Toucher à {targetDistance.distance} m (±{targetDistance.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetDistance.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>Angle: {angle}°</label>
                        <input type="range" min="15" max="75" value={angle}
                            onChange={e => setAngle(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Vitesse: {v0} m/s</label>
                        <input type="range" min="5" max="20" value={v0}
                            onChange={e => setV0(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <button onClick={launch} disabled={launched}
                        style={{
                            width: '100%', padding: '12px', marginBottom: '10px',
                            background: launched ? '#475569' : 'linear-gradient(135deg, #f97316, #ea580c)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        🚀 LANCER
                    </button>

                    <div style={{
                        background: 'rgba(34,197,94,0.2)',
                        padding: '10px',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>Portée théorique</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#22c55e' }}>
                            {range.toFixed(2)} m
                        </div>
                        {hitDistance > 0 && (
                            <div style={{ fontSize: '12px', color: '#fbbf24' }}>
                                Impact: {hitDistance.toFixed(2)} m
                            </div>
                        )}
                    </div>

                    {!challengeMode && (
                        <button onClick={startChallenge}
                            style={{
                                width: '100%', padding: '12px', marginTop: '10px',
                                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                                border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                            }}>
                            🎮 Mode Défi Artillerie
                        </button>
                    )}
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Cible touchée!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P4. GRAVITATION - VERSION GAMIFIÉE
// Mission: Ingénieur Aérospatial - Calculer les orbites
// ============================================================
export function GravitationAdvanced() {
    const [orbitRadius, setOrbitRadius] = useState(3);
    const satelliteRef = useRef();

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetPeriod, setTargetPeriod] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const period = 2 * Math.PI * Math.sqrt(Math.pow(orbitRadius, 3) / 10);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (satelliteRef.current) {
            const omega = 2 * Math.PI / period;
            satelliteRef.current.position.x = orbitRadius * Math.cos(omega * t);
            satelliteRef.current.position.z = orbitRadius * Math.sin(omega * t);
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
            { period: 6, tolerance: 0.5, hint: "Orbite rapide" },
            { period: 10, tolerance: 0.5, hint: "Orbite standard" },
            { period: 15, tolerance: 0.4, hint: "Orbite haute" },
            { period: 8.5, tolerance: 0.3, hint: "Orbite précise" }
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

        if (Math.abs(period - targetPeriod.period) <= targetPeriod.tolerance) {
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
            <Text position={[0, 4, 0]} fontSize={0.4} color="#60A5FA">GRAVITATION UNIVERSELLE</Text>

            {/* Terre */}
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#3B82F6" />
            </mesh>

            {/* Orbite */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} />
                <meshBasicMaterial color="#4ADE80" side={THREE.DoubleSide} transparent opacity={0.5} />
            </mesh>

            {/* Satellite */}
            <mesh ref={satelliteRef}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#F59E0B" />
            </mesh>

            <Text position={[0, -3, 0]} fontSize={0.2} color="#FBBF24">
                T² ∝ r³ (Kepler) | v = √(GM/r)
            </Text>

            <DraggableHtmlPanel title="🌍 Gravitation" defaultPosition="top-right">
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
                                    <strong>🛰️ Mission Satellite:</strong><br />
                                    T = {targetPeriod.period} s (±{targetPeriod.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetPeriod.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>Rayon orbital: {orbitRadius.toFixed(1)} u</label>
                        <input type="range" min="1.5" max="4.5" step="0.1" value={orbitRadius}
                            onChange={e => setOrbitRadius(Number(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: 'rgba(96,165,250,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Période orbitale</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#60a5fa' }}>
                            T = {period.toFixed(2)} s
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider orbite' : '🎮 Mode Défi Spatial'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Orbite parfaite!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P9. DIPÔLE RC - VERSION GAMIFIÉE
// Mission: Ingénieur Électronique - Optimiser les temps de charge
// ============================================================
export function DipoleRCAdvanced() {
    const [time, setTime] = useState(0);
    const [charging, setCharging] = useState(true);
    const [R, setR] = useState(1000);
    const [C, setC] = useState(100);

    // Challenge mode
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetTau, setTargetTau] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    const E = 5;
    const tau = R * C * 1e-6;
    const uC = charging ? E * (1 - Math.exp(-time / tau)) : E * Math.exp(-time / tau);

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
            { tau: 0.1, tolerance: 0.02, hint: "Charge rapide" },
            { tau: 0.3, tolerance: 0.03, hint: "Charge moyenne" },
            { tau: 0.5, tolerance: 0.05, hint: "Charge lente" },
            { tau: 0.15, tolerance: 0.01, hint: "Temporisation précise" }
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

        if (Math.abs(tau - targetTau.tau) <= targetTau.tolerance) {
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
            <Text position={[0, 3.5, 0]} fontSize={0.4} color="#06B6D4">DIPÔLE RC</Text>

            {/* Condensateur */}
            <group position={[0, 0, 0]}>
                <mesh position={[-0.15, 0, 0]}>
                    <boxGeometry args={[0.1, 1.5, 0.5]} />
                    <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={uC / E * 0.5} />
                </mesh>
                <mesh position={[0.15, 0, 0]}>
                    <boxGeometry args={[0.1, 1.5, 0.5]} />
                    <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={uC / E * 0.5} />
                </mesh>
            </group>

            {/* Indicateur de charge */}
            <mesh position={[0, -1.2, 0]}>
                <boxGeometry args={[2, 0.2, 0.1]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
            <mesh position={[-1 + (uC / E) * 2, -1.2, 0.1]}>
                <boxGeometry args={[(uC / E) * 2, 0.15, 0.05]} />
                <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.5} />
            </mesh>

            <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FBBF24">
                uC(t) = E(1 - e^(-t/τ)) | τ = RC
            </Text>

            <DraggableHtmlPanel title="🔋 Dipôle RC" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '280px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetTau && (
                                <div style={{
                                    background: 'rgba(6,182,212,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(6,182,212,0.5)'
                                }}>
                                    <strong>⏱️ Mission Timing:</strong><br />
                                    τ = {targetTau.tau * 1000} ms (±{targetTau.tolerance * 1000})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetTau.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>R = {R} Ω</label>
                        <input type="range" min="100" max="5000" step="100" value={R}
                            onChange={e => { setR(Number(e.target.value)); setTime(0); }}
                            style={{ width: '100%' }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>C = {C} μF</label>
                        <input type="range" min="10" max="500" step="10" value={C}
                            onChange={e => { setC(Number(e.target.value)); setTime(0); }}
                            style={{ width: '100%' }} />
                    </div>

                    <button onClick={() => { setCharging(!charging); setTime(0); }}
                        style={{
                            width: '100%', padding: '10px', marginBottom: '10px',
                            background: charging ? '#ef4444' : '#22c55e',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {charging ? '🔋 Décharger' : '⚡ Charger'}
                    </button>

                    <div style={{
                        background: 'rgba(6,182,212,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Constante de temps</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#06b6d4' }}>
                            τ = {(tau * 1000).toFixed(1)} ms
                        </div>
                        <div style={{ fontSize: '14px', color: '#22c55e' }}>
                            uC = {uC.toFixed(2)} V ({((uC / E) * 100).toFixed(0)}%)
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #06b6d4, #0891b2)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider constante' : '🎮 Mode Défi Timing'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Timing parfait!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// Export des composants gamifiés
export { CinematiqueAdvanced as CinematiqueTS };
export { DynamiqueAdvanced as DynamiqueTS };
export { ProjectileAdvanced as ProjectileTS };
export { GravitationAdvanced as GravitationTS };
export { DipoleRCAdvanced as DipoleRCTS };
