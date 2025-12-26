'use client';
/**
 * Physique Terminale S - Simulations Avancées
 * Partie 1: Cinématique - Dynamique (Chapitres 1-4)
 * Mode Défi avec gamification complète
 */
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Box, Cylinder, Line, Text, Float, Cone, Ring } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, ParticleTrail } from './GamificationUtils';

// ============================================================
// COMPOSANTS UTILITAIRES RÉUTILISABLES
// ============================================================

// ============================================================
// P1. CINÉMATIQUE DU POINT - VERSION AVANCÉE
// Mission: Course Spatiale - Atteindre des cibles avec le bon mouvement
// ============================================================
export function CinematiquePointAdvanced() {
    // États du jeu
    const [mode, setMode] = useState('explore'); // explore, challenge
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);
    const [streak, setStreak] = useState(0);

    // États physiques
    const [motionType, setMotionType] = useState('mru');
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [v0, setV0] = useState(2);
    const [acceleration, setAcceleration] = useState(0.5);
    const [omega, setOmega] = useState(1);
    const [radius, setRadius] = useState(2);

    // Cible pour le défi
    const [targetPos, setTargetPos] = useState({ x: 3, y: 0 });
    const [targetReached, setTargetReached] = useState(false);

    const particleRef = useRef();
    const trailPoints = useRef([]);

    // Calculs cinématiques
    const getPosition = useCallback((t) => {
        if (motionType === 'mru') {
            return { x: v0 * t - 4, y: 0 };
        } else if (motionType === 'mruv') {
            return { x: 0.5 * acceleration * t * t + v0 * t - 4, y: 0 };
        } else {
            return {
                x: radius * Math.cos(omega * t),
                y: radius * Math.sin(omega * t)
            };
        }
    }, [motionType, v0, acceleration, omega, radius]);

    const getVelocity = useCallback((t) => {
        if (motionType === 'mru') {
            return { vx: v0, vy: 0, magnitude: v0 };
        } else if (motionType === 'mruv') {
            const vx = acceleration * t + v0;
            return { vx, vy: 0, magnitude: Math.abs(vx) };
        } else {
            const vx = -radius * omega * Math.sin(omega * t);
            const vy = radius * omega * Math.cos(omega * t);
            return { vx, vy, magnitude: Math.sqrt(vx * vx + vy * vy) };
        }
    }, [motionType, v0, acceleration, omega, radius]);

    // Animation
    useFrame((state, delta) => {
        if (running && particleRef.current) {
            const newTime = time + delta;
            setTime(newTime);

            const pos = getPosition(newTime);
            particleRef.current.position.set(pos.x, pos.y, 0);

            // Traînée
            if (trailPoints.current.length < 100) {
                trailPoints.current.push(new THREE.Vector3(pos.x, pos.y, 0));
            }

            // Vérifier si cible atteinte (mode défi)
            if (mode === 'challenge' && challenge) {
                const dist = Math.sqrt(
                    Math.pow(pos.x - targetPos.x, 2) +
                    Math.pow(pos.y - targetPos.y, 2)
                );
                if (dist < 0.5 && !targetReached) {
                    setTargetReached(true);
                    handleSuccess();
                }
            }

            // Reset si hors limites
            if (Math.abs(pos.x) > 6 || Math.abs(pos.y) > 4) {
                resetSimulation();
            }
        }
    });

    // Timer du défi
    useEffect(() => {
        if (mode === 'challenge' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && mode === 'challenge') {
            setStreak(0);
            generateChallenge();
        }
    }, [timeLeft, mode, showSuccess]);

    const resetSimulation = () => {
        setTime(0);
        setRunning(false);
        trailPoints.current = [];
        setTargetReached(false);
        if (particleRef.current) {
            const initialPos = getPosition(0);
            particleRef.current.position.set(initialPos.x, initialPos.y, 0);
        }
    };

    const generateChallenge = () => {
        const challenges = [
            { type: 'mru', desc: 'Atteins la cible en MRU !', targetX: 2 + Math.random() * 2, targetY: 0, hint: 'Ajuste ta vitesse v₀' },
            { type: 'mruv', desc: 'Accélère pour toucher la cible !', targetX: 3, targetY: 0, hint: 'Règle v₀ et a' },
            { type: 'mcu', desc: 'Orbite autour de la cible !', targetX: 0, targetY: 2, hint: 'Ajuste le rayon R' },
        ];
        const ch = challenges[Math.floor(Math.random() * challenges.length)];
        setChallenge(ch);
        setMotionType(ch.type);
        setTargetPos({ x: ch.targetX, y: ch.targetY });
        setTimeLeft(30);
        setShowSuccess(false);
        setTargetReached(false);
        resetSimulation();
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        setStreak(0);
        generateChallenge();
    };

    const handleSuccess = () => {
        const bonus = streak >= 2 ? 25 : 0;
        const points = 50 + bonus + Math.floor(timeLeft * 2);
        setScore(s => s + points);
        setStreak(s => s + 1);
        setShowSuccess(true);
        setRunning(false);
    };

    const velocity = getVelocity(time);

    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`🚀 Cible atteinte ! Combo x${streak}`}
                points={50 + (streak >= 2 ? 25 : 0) + Math.floor(timeLeft * 2)}
                onNext={generateChallenge}
            />
            <ConfettiExplosion active={showSuccess} />
            <ParticleTrail active={running && motionType === 'mcu'} color="#3B82F6" />

            {/* Titre dynamique */}
            <Text position={[0, 4, 0]} fontSize={0.5} color="#60A5FA" font="/fonts/bold.woff">
                🌌 CINÉMATIQUE DU POINT
            </Text>

            {/* Axes avec graduations */}
            <group>
                <Line points={[[-5, 0, 0], [5, 0, 0]]} color="#4B5563" lineWidth={2} />
                <Line points={[[0, -3, 0], [0, 3, 0]]} color="#4B5563" lineWidth={2} />
                {[-4, -2, 2, 4].map(x => (
                    <group key={x}>
                        <Line points={[[x, -0.1, 0], [x, 0.1, 0]]} color="#6B7280" lineWidth={1} />
                        <Text position={[x, -0.3, 0]} fontSize={0.15} color="#9CA3AF">{x}</Text>
                    </group>
                ))}
            </group>

            {/* Cible (mode défi) */}
            {mode === 'challenge' && (
                <group position={[targetPos.x, targetPos.y, 0]}>
                    <Ring args={[0.3, 0.5, 32]} rotation={[0, 0, 0]}>
                        <meshStandardMaterial color={targetReached ? "#4ADE80" : "#EF4444"} emissive={targetReached ? "#4ADE80" : "#EF4444"} emissiveIntensity={0.5} />
                    </Ring>
                    <Ring args={[0.1, 0.2, 32]}>
                        <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={0.8} />
                    </Ring>
                    <Float speed={2} floatIntensity={0.3}>
                        <Text position={[0, 0.8, 0]} fontSize={0.2} color="#FBBF24">🎯 CIBLE</Text>
                    </Float>
                </group>
            )}

            {/* Trajectoire MCU */}
            {motionType === 'mcu' && (
                <Ring args={[radius - 0.02, radius + 0.02, 64]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial color="#4ADE80" transparent opacity={0.3} side={THREE.DoubleSide} />
                </Ring>
            )}

            {/* Traînée */}
            {trailPoints.current.length > 1 && (
                <Line
                    points={trailPoints.current}
                    color={motionType === 'mru' ? '#3B82F6' : motionType === 'mruv' ? '#F59E0B' : '#8B5CF6'}
                    lineWidth={2}
                    transparent
                    opacity={0.6}
                />
            )}

            {/* Particule mobile */}
            <group ref={particleRef} position={[-4, 0, 0]}>
                <Sphere args={[0.25]}>
                    <meshStandardMaterial
                        color={running ? "#EF4444" : "#9CA3AF"}
                        emissive={running ? "#EF4444" : "#333"}
                        emissiveIntensity={running ? 0.8 : 0.2}
                    />
                </Sphere>
                {/* Vecteur vitesse */}
                {running && (
                    <group>
                        <Line
                            points={[[0, 0, 0], [velocity.vx * 0.3, velocity.vy * 0.3, 0]]}
                            color="#4ADE80"
                            lineWidth={3}
                        />
                        <Text position={[velocity.vx * 0.4, velocity.vy * 0.4, 0]} fontSize={0.15} color="#4ADE80">
                            v⃗
                        </Text>
                    </group>
                )}
            </group>

            {/* Formules dynamiques */}
            <group position={[-4, -2.5, 0]}>
                <Text position={[0, 0, 0]} fontSize={0.18} color="#9CA3AF" anchorX="left">
                    {motionType === 'mru' && `MRU: x(t) = v₀·t = ${(v0 * time).toFixed(2)} m`}
                    {motionType === 'mruv' && `MRUV: x(t) = ½at² + v₀t = ${(0.5 * acceleration * time * time + v0 * time).toFixed(2)} m`}
                    {motionType === 'mcu' && `MCU: θ(t) = ωt = ${(omega * time).toFixed(2)} rad`}
                </Text>
            </group>

            {/* Panel de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🚀 Mission Cinématique"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[380px] border-blue-500/30"
                >
                    <div className="text-white">
                        {/* Header avec mode et score */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setMode('explore'); resetSimulation(); }}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${mode === 'explore' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                                >
                                    🔬 Exploration
                                </button>
                                <button
                                    onClick={startChallenge}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                                >
                                    🎯 Défis
                                </button>
                            </div>
                            {mode === 'challenge' && (
                                <div className="flex items-center gap-3">
                                    <ChallengeTimer timeLeft={timeLeft} maxTime={30} />
                                    <div className="font-bold text-yellow-400">{score} XP</div>
                                </div>
                            )}
                        </div>

                        {/* Objectif du défi */}
                        {mode === 'challenge' && challenge && (
                            <div className="mb-4 bg-purple-900/50 p-3 rounded-lg border border-purple-500/30">
                                <div className="font-bold text-purple-300">{challenge.desc}</div>
                                <div className="text-xs text-gray-400 mt-1">💡 {challenge.hint}</div>
                                {streak >= 2 && (
                                    <div className="text-xs text-yellow-400 mt-1">🔥 Combo x{streak} - Bonus +25 XP !</div>
                                )}
                            </div>
                        )}

                        {/* Sélection du mouvement */}
                        <div className="flex gap-2 mb-4">
                            {[
                                { id: 'mru', label: 'MRU', color: 'blue', icon: '→' },
                                { id: 'mruv', label: 'MRUV', color: 'orange', icon: '↗' },
                                { id: 'mcu', label: 'MCU', color: 'purple', icon: '↻' }
                            ].map(m => (
                                <button
                                    key={m.id}
                                    onClick={() => { setMotionType(m.id); resetSimulation(); }}
                                    disabled={mode === 'challenge'}
                                    className={`flex-1 py-2 rounded-lg font-bold text-sm transition ${motionType === m.id
                                        ? `bg-${m.color}-600 text-white`
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        } ${mode === 'challenge' ? 'opacity-50' : ''}`}
                                >
                                    {m.icon} {m.label}
                                </button>
                            ))}
                        </div>

                        {/* Paramètres */}
                        <div className="space-y-3 mb-4">
                            <div className="bg-gray-800/50 p-3 rounded-lg">
                                <label className="text-xs text-gray-400 flex justify-between">
                                    <span>Vitesse initiale v₀</span>
                                    <span className="text-blue-400 font-mono">{v0.toFixed(1)} m/s</span>
                                </label>
                                <input
                                    type="range" min="0.5" max="5" step="0.1" value={v0}
                                    onChange={e => setV0(Number(e.target.value))}
                                    className="w-full accent-blue-500 mt-1"
                                />
                            </div>

                            {motionType === 'mruv' && (
                                <div className="bg-gray-800/50 p-3 rounded-lg">
                                    <label className="text-xs text-gray-400 flex justify-between">
                                        <span>Accélération a</span>
                                        <span className="text-orange-400 font-mono">{acceleration.toFixed(2)} m/s²</span>
                                    </label>
                                    <input
                                        type="range" min="-2" max="2" step="0.1" value={acceleration}
                                        onChange={e => setAcceleration(Number(e.target.value))}
                                        className="w-full accent-orange-500 mt-1"
                                    />
                                </div>
                            )}

                            {motionType === 'mcu' && (
                                <>
                                    <div className="bg-gray-800/50 p-3 rounded-lg">
                                        <label className="text-xs text-gray-400 flex justify-between">
                                            <span>Rayon R</span>
                                            <span className="text-purple-400 font-mono">{radius.toFixed(1)} m</span>
                                        </label>
                                        <input
                                            type="range" min="1" max="3" step="0.1" value={radius}
                                            onChange={e => setRadius(Number(e.target.value))}
                                            className="w-full accent-purple-500 mt-1"
                                        />
                                    </div>
                                    <div className="bg-gray-800/50 p-3 rounded-lg">
                                        <label className="text-xs text-gray-400 flex justify-between">
                                            <span>Vitesse angulaire ω</span>
                                            <span className="text-green-400 font-mono">{omega.toFixed(1)} rad/s</span>
                                        </label>
                                        <input
                                            type="range" min="0.5" max="3" step="0.1" value={omega}
                                            onChange={e => setOmega(Number(e.target.value))}
                                            className="w-full accent-green-500 mt-1"
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Boutons de contrôle */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setRunning(!running)}
                                className={`flex-1 py-3 rounded-lg font-bold text-lg transition ${running
                                    ? 'bg-red-600 hover:bg-red-500'
                                    : 'bg-green-600 hover:bg-green-500'
                                    }`}
                            >
                                {running ? '⏸ PAUSE' : '▶ LANCER'}
                            </button>
                            <button
                                onClick={resetSimulation}
                                className="px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold"
                            >
                                🔄
                            </button>
                        </div>

                        {/* Données en temps réel */}
                        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="bg-black/40 p-2 rounded">
                                <div className="text-gray-400">t</div>
                                <div className="font-mono text-blue-400">{time.toFixed(2)} s</div>
                            </div>
                            <div className="bg-black/40 p-2 rounded">
                                <div className="text-gray-400">|v|</div>
                                <div className="font-mono text-green-400">{velocity.magnitude.toFixed(2)} m/s</div>
                            </div>
                            <div className="bg-black/40 p-2 rounded">
                                <div className="text-gray-400">Position</div>
                                <div className="font-mono text-purple-400">
                                    ({getPosition(time).x.toFixed(1)}, {getPosition(time).y.toFixed(1)})
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P2. DYNAMIQUE DE NEWTON - VERSION AVANCÉE
// Mission: Ingénieur Spatial - Calculer les forces pour déplacer des cargaisons
// ============================================================
export function DynamiqueNewtonAdvanced() {
    // États du jeu
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);
    const [attempts, setAttempts] = useState(3);

    // États physiques
    const [force, setForce] = useState(10);
    const [mass, setMass] = useState(5);
    const [friction, setFriction] = useState(2);
    const [angle, setAngle] = useState(0); // Angle du plan incliné
    const [position, setPosition] = useState(-3);
    const [velocity, setVelocity] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);

    const boxRef = useRef();
    const g = 9.81;

    // Calculs dynamiques
    const weight = mass * g;
    const weightParallel = weight * Math.sin(angle * Math.PI / 180);
    const weightNormal = weight * Math.cos(angle * Math.PI / 180);
    const normalForce = weightNormal;
    const frictionForce = friction * normalForce / weight; // Simplifié
    const netForce = force - weightParallel - frictionForce;
    const acceleration = netForce / mass;

    useFrame((state, delta) => {
        if (isSimulating && boxRef.current) {
            const newVel = velocity + acceleration * delta;
            const newPos = position + newVel * delta;

            // Limites
            if (newPos > 4) {
                if (mode === 'challenge' && challenge) {
                    handleSuccess();
                }
                setPosition(4);
                setVelocity(0);
                setIsSimulating(false);
            } else if (newPos < -4) {
                setPosition(-4);
                setVelocity(0);
                setIsSimulating(false);
            } else {
                setPosition(newPos);
                setVelocity(Math.max(-5, Math.min(5, newVel)));
            }

            boxRef.current.position.x = position;
        }
    });

    // Timer
    useEffect(() => {
        if (mode === 'challenge' && timeLeft > 0 && !showSuccess && isSimulating) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, mode, showSuccess, isSimulating]);

    const resetSimulation = () => {
        setPosition(-3);
        setVelocity(0);
        setIsSimulating(false);
    };

    const generateChallenge = () => {
        const challenges = [
            {
                type: 'force',
                desc: 'Calcule la force nécessaire pour déplacer la cargaison !',
                targetMass: 3 + Math.floor(Math.random() * 5),
                targetFriction: 1 + Math.random() * 2,
                targetAngle: 0,
                hint: 'Utilise F = ma et n\'oublie pas les frottements !'
            },
            {
                type: 'incline',
                desc: 'Monte la cargaison sur le plan incliné !',
                targetMass: 4,
                targetFriction: 1,
                targetAngle: 15 + Math.floor(Math.random() * 15),
                hint: 'Composante du poids: P·sin(α)'
            },
            {
                type: 'equilibrium',
                desc: 'Trouve la force pour maintenir l\'équilibre !',
                targetMass: 5,
                targetFriction: 0,
                targetAngle: 30,
                hint: 'À l\'équilibre: ΣF = 0'
            }
        ];
        const ch = challenges[Math.floor(Math.random() * challenges.length)];
        setChallenge(ch);
        setMass(ch.targetMass);
        setFriction(ch.targetFriction);
        setAngle(ch.targetAngle);
        setTimeLeft(45);
        setAttempts(3);
        setShowSuccess(false);
        resetSimulation();
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        generateChallenge();
    };

    const handleSuccess = () => {
        const points = 75 + Math.floor(timeLeft * 2) + (attempts === 3 ? 50 : 0);
        setScore(s => s + points);
        setShowSuccess(true);
        setIsSimulating(false);
        setLevel(l => l + 1);
    };

    const trySimulation = () => {
        if (mode === 'challenge' && attempts > 0) {
            setAttempts(a => a - 1);
        }
        resetSimulation();
        setIsSimulating(true);
    };

    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`⚖️ Lois de Newton maîtrisées ! Niveau ${level}`}
                points={75 + Math.floor(timeLeft * 2)}
                onNext={generateChallenge}
            />
            <ConfettiExplosion active={showSuccess} />

            {/* Titre */}
            <Text position={[0, 4, 0]} fontSize={0.5} color="#F59E0B" font="/fonts/bold.woff">
                ⚖️ DYNAMIQUE DE NEWTON
            </Text>

            {/* Plan incliné */}
            <group rotation={[0, 0, -angle * Math.PI / 180]}>
                {/* Sol/Plan */}
                <Box args={[10, 0.3, 3]} position={[0, -1.5, 0]}>
                    <meshStandardMaterial color="#374151" />
                </Box>

                {/* Zone cible */}
                <Box args={[1, 0.35, 3.1]} position={[4, -1.5, 0]}>
                    <meshStandardMaterial
                        color="#4ADE80"
                        emissive="#4ADE80"
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.7}
                    />
                </Box>
                <Text position={[4, -0.8, 0]} fontSize={0.25} color="#4ADE80">ARRIVÉE</Text>

                {/* Objet mobile */}
                <group ref={boxRef} position={[position, -0.5, 0]}>
                    <Box args={[1, 1, 1]}>
                        <meshStandardMaterial color="#3B82F6" />
                    </Box>
                    <Text position={[0, 0, 0.6]} fontSize={0.25} color="white">{mass} kg</Text>

                    {/* Vecteurs de force */}
                    {/* Force appliquée */}
                    {force > 0 && (
                        <group>
                            <Line
                                points={[[0.6, 0, 0], [0.6 + force / 15, 0, 0]]}
                                color="#22C55E"
                                lineWidth={4}
                            />
                            <Cone
                                args={[0.1, 0.2, 8]}
                                position={[0.8 + force / 15, 0, 0]}
                                rotation={[0, 0, -Math.PI / 2]}
                            >
                                <meshStandardMaterial color="#22C55E" />
                            </Cone>
                            <Text position={[0.6 + force / 30, 0.4, 0]} fontSize={0.15} color="#22C55E">
                                F = {force.toFixed(0)} N
                            </Text>
                        </group>
                    )}

                    {/* Poids */}
                    <group rotation={[0, 0, angle * Math.PI / 180]}>
                        <Line points={[[0, -0.5, 0], [0, -0.5 - weight / 30, 0]]} color="#EF4444" lineWidth={3} />
                        <Text position={[0.3, -0.5 - weight / 60, 0]} fontSize={0.12} color="#EF4444">
                            P = {weight.toFixed(1)} N
                        </Text>
                    </group>

                    {/* Réaction normale */}
                    <Line points={[[0, 0.5, 0], [0, 0.5 + normalForce / 30, 0]]} color="#8B5CF6" lineWidth={3} />

                    {/* Frottement */}
                    {frictionForce > 0.5 && isSimulating && (
                        <Line points={[[-0.5, 0, 0], [-0.5 - frictionForce / 10, 0, 0]]} color="#F97316" lineWidth={2} />
                    )}
                </group>
            </group>

            {/* Indicateur d'angle */}
            {angle > 0 && (
                <group position={[-4.5, -2, 0]}>
                    <Line points={[[0, 0, 0], [1, 0, 0]]} color="#6B7280" lineWidth={1} />
                    <Line
                        points={[[0, 0, 0], [Math.cos(-angle * Math.PI / 180), Math.sin(-angle * Math.PI / 180), 0]]}
                        color="#FBBF24"
                        lineWidth={2}
                    />
                    <Text position={[0.7, 0.3, 0]} fontSize={0.2} color="#FBBF24">α = {angle}°</Text>
                </group>
            )}

            {/* Panel de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="⚖️ Laboratoire Newton"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[400px] border-orange-500/30"
                >
                    <div className="text-white">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setMode('explore'); resetSimulation(); }}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold ${mode === 'explore' ? 'bg-orange-600' : 'bg-gray-700'}`}
                                >
                                    🔬 Exploration
                                </button>
                                <button
                                    onClick={startChallenge}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold ${mode === 'challenge' ? 'bg-red-600' : 'bg-gray-700'}`}
                                >
                                    🎯 Mission
                                </button>
                            </div>
                            {mode === 'challenge' && (
                                <div className="flex items-center gap-2">
                                    <ChallengeTimer timeLeft={timeLeft} maxTime={45} />
                                    <div className="text-yellow-400 font-bold">{score} XP</div>
                                </div>
                            )}
                        </div>

                        {/* Mission */}
                        {mode === 'challenge' && challenge && (
                            <div className="mb-4 bg-red-900/40 p-3 rounded-lg border border-red-500/30">
                                <div className="font-bold text-red-300">{challenge.desc}</div>
                                <div className="text-xs text-gray-400 mt-1">💡 {challenge.hint}</div>
                                <div className="flex justify-between mt-2 text-xs">
                                    <span>Essais: {'❤️'.repeat(attempts)}{'🖤'.repeat(3 - attempts)}</span>
                                    <span className="text-yellow-400">Niveau {level}</span>
                                </div>
                            </div>
                        )}

                        {/* Contrôles */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-gray-800/50 p-3 rounded-lg">
                                <label className="text-xs text-gray-400 flex justify-between">
                                    <span>Force F</span>
                                    <span className="text-green-400 font-mono">{force.toFixed(0)} N</span>
                                </label>
                                <input
                                    type="range" min="0" max="100" value={force}
                                    onChange={e => setForce(Number(e.target.value))}
                                    className="w-full accent-green-500 mt-1"
                                />
                            </div>

                            {mode === 'explore' && (
                                <>
                                    <div className="bg-gray-800/50 p-3 rounded-lg">
                                        <label className="text-xs text-gray-400 flex justify-between">
                                            <span>Masse m</span>
                                            <span className="text-blue-400 font-mono">{mass} kg</span>
                                        </label>
                                        <input
                                            type="range" min="1" max="20" value={mass}
                                            onChange={e => setMass(Number(e.target.value))}
                                            className="w-full accent-blue-500 mt-1"
                                        />
                                    </div>
                                    <div className="bg-gray-800/50 p-3 rounded-lg">
                                        <label className="text-xs text-gray-400 flex justify-between">
                                            <span>Frottement</span>
                                            <span className="text-orange-400 font-mono">{friction.toFixed(1)}</span>
                                        </label>
                                        <input
                                            type="range" min="0" max="5" step="0.5" value={friction}
                                            onChange={e => setFriction(Number(e.target.value))}
                                            className="w-full accent-orange-500 mt-1"
                                        />
                                    </div>
                                    <div className="bg-gray-800/50 p-3 rounded-lg">
                                        <label className="text-xs text-gray-400 flex justify-between">
                                            <span>Inclinaison</span>
                                            <span className="text-purple-400 font-mono">{angle}°</span>
                                        </label>
                                        <input
                                            type="range" min="0" max="45" value={angle}
                                            onChange={e => setAngle(Number(e.target.value))}
                                            className="w-full accent-purple-500 mt-1"
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Boutons */}
                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={trySimulation}
                                disabled={isSimulating || (mode === 'challenge' && attempts === 0)}
                                className={`flex-1 py-3 rounded-lg font-bold text-lg transition ${isSimulating
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-green-600 hover:bg-green-500'
                                    }`}
                            >
                                {isSimulating ? '⏳ En cours...' : '🚀 APPLIQUER F'}
                            </button>
                            <button
                                onClick={resetSimulation}
                                className="px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold"
                            >
                                🔄
                            </button>
                        </div>

                        {/* Données physiques */}
                        <div className="bg-black/40 p-3 rounded-lg border-l-4 border-yellow-500">
                            <div className="text-sm font-bold text-yellow-400 mb-2">📊 Bilan des forces</div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>Poids P = <span className="text-red-400">{weight.toFixed(1)} N</span></div>
                                <div>Normale N = <span className="text-purple-400">{normalForce.toFixed(1)} N</span></div>
                                <div>Frottement f = <span className="text-orange-400">{frictionForce.toFixed(1)} N</span></div>
                                <div>Force nette = <span className="text-green-400">{netForce.toFixed(1)} N</span></div>
                            </div>
                            <div className="mt-2 text-center text-sm">
                                <span className="text-gray-400">a = ΣF/m = </span>
                                <span className={`font-bold ${acceleration >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {acceleration.toFixed(2)} m/s²
                                </span>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P3. MOUVEMENT PROJECTILE - VERSION AVANCÉE
// Mission: Artilleur Spatial - Atteindre des cibles sur différentes planètes
// ============================================================
export function ProjectileMotionAdvanced() {
    // États du jeu
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [streak, setStreak] = useState(0);

    // États physiques
    const [angle, setAngle] = useState(45);
    const [v0, setV0] = useState(15);
    const [planet, setPlanet] = useState('terre');
    const [launched, setLaunched] = useState(false);
    const [time, setTime] = useState(0);
    const [showTrajectory, setShowTrajectory] = useState(true);

    // Cible
    const [targetX, setTargetX] = useState(5);
    const [targetHit, setTargetHit] = useState(false);

    const ballRef = useRef();
    const trailPoints = useRef([]);

    // Planètes avec leurs gravités
    const planets = {
        terre: { name: 'Terre', g: 9.81, color: '#3B82F6', emoji: '🌍' },
        lune: { name: 'Lune', g: 1.62, color: '#9CA3AF', emoji: '🌙' },
        mars: { name: 'Mars', g: 3.71, color: '#EF4444', emoji: '🔴' },
        jupiter: { name: 'Jupiter', g: 24.79, color: '#F59E0B', emoji: '🟠' }
    };

    const currentPlanet = planets[planet];
    const g = currentPlanet.g;
    const angleRad = (angle * Math.PI) / 180;
    const vx = v0 * Math.cos(angleRad);
    const vy = v0 * Math.sin(angleRad);
    const tMax = (2 * vy) / g;
    const range = vx * tMax;
    const maxHeight = (vy * vy) / (2 * g);

    useFrame((state, delta) => {
        if (launched && ballRef.current) {
            const newTime = time + delta;
            const x = vx * newTime - 4;
            const y = vy * newTime - 0.5 * g * newTime * newTime;

            setTime(newTime);

            if (y >= 0) {
                ballRef.current.position.set(x, y, 0);
                trailPoints.current.push(new THREE.Vector3(x, y, 0));

                // Vérifier collision avec cible
                if (mode === 'challenge' && !targetHit) {
                    const dist = Math.sqrt(Math.pow(x - targetX, 2) + Math.pow(y - 0.5, 2));
                    if (dist < 0.6) {
                        setTargetHit(true);
                        handleSuccess();
                    }
                }
            } else {
                // Atterrissage
                setLaunched(false);
                if (mode === 'challenge' && !targetHit) {
                    setStreak(0);
                }
            }
        }
    });

    // Timer
    useEffect(() => {
        if (mode === 'challenge' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, mode, showSuccess]);

    const launch = () => {
        setLaunched(true);
        setTime(0);
        setTargetHit(false);
        trailPoints.current = [];
        if (ballRef.current) ballRef.current.position.set(-4, 0, 0);
    };

    const reset = () => {
        setLaunched(false);
        setTime(0);
        setTargetHit(false);
        trailPoints.current = [];
        if (ballRef.current) ballRef.current.position.set(-4, 0, 0);
    };

    const generateChallenge = () => {
        const randomPlanet = ['terre', 'lune', 'mars'][Math.floor(Math.random() * 3)];
        const randomTarget = 3 + Math.random() * 4;

        setChallenge({
            planet: randomPlanet,
            targetX: randomTarget,
            desc: `Atteins la cible à ${randomTarget.toFixed(1)}m sur ${planets[randomPlanet].name} !`,
            hint: `g = ${planets[randomPlanet].g} m/s². Calcule l'angle et la vitesse !`
        });
        setPlanet(randomPlanet);
        setTargetX(randomTarget);
        setTimeLeft(60);
        setShowSuccess(false);
        reset();
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        setStreak(0);
        generateChallenge();
    };

    const handleSuccess = () => {
        const bonus = streak >= 2 ? 30 : 0;
        const accuracy = Math.max(0, 50 - Math.abs(range - targetX) * 5);
        const points = 60 + bonus + Math.floor(accuracy) + Math.floor(timeLeft);
        setScore(s => s + points);
        setStreak(s => s + 1);
        setShowSuccess(true);
        setLaunched(false);
        setLevel(l => l + 1);
    };

    // Trajectoire théorique
    const trajectoryPoints = useMemo(() => {
        const points = [];
        for (let t = 0; t <= tMax; t += tMax / 50) {
            const x = vx * t - 4;
            const y = vy * t - 0.5 * g * t * t;
            if (y >= 0) points.push([x, y, 0]);
        }
        return points;
    }, [vx, vy, g, tMax]);

    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`🎯 Tir parfait ! ${currentPlanet.emoji} Combo x${streak}`}
                points={60 + (streak >= 2 ? 30 : 0) + Math.floor(timeLeft)}
                onNext={generateChallenge}
            />
            <ConfettiExplosion active={showSuccess} />

            {/* Fond planétaire */}
            <mesh position={[0, 5, -5]}>
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial color={currentPlanet.color} emissive={currentPlanet.color} emissiveIntensity={0.2} />
            </mesh>

            {/* Titre */}
            <Text position={[0, 4.5, 0]} fontSize={0.5} color="#F97316">
                🚀 MOUVEMENT PROJECTILE {currentPlanet.emoji}
            </Text>

            {/* Sol */}
            <Box args={[12, 0.2, 4]} position={[0, -0.1, 0]}>
                <meshStandardMaterial color={planet === 'mars' ? '#8B4513' : '#15803D'} />
            </Box>

            {/* Canon */}
            <group position={[-4, 0, 0]} rotation={[0, 0, angleRad]}>
                <Cylinder args={[0.15, 0.25, 1.5, 16]} rotation={[0, 0, Math.PI / 2]} position={[0.5, 0, 0]}>
                    <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
                </Cylinder>
                <Box args={[0.5, 0.5, 0.5]} position={[-0.2, 0, 0]}>
                    <meshStandardMaterial color="#1F2937" />
                </Box>
            </group>

            {/* Cible (mode défi) */}
            {mode === 'challenge' && (
                <group position={[targetX, 0.5, 0]}>
                    <Cylinder args={[0.5, 0.5, 1, 16]}>
                        <meshStandardMaterial
                            color={targetHit ? "#4ADE80" : "#EF4444"}
                            emissive={targetHit ? "#4ADE80" : "#EF4444"}
                            emissiveIntensity={0.5}
                        />
                    </Cylinder>
                    <Ring args={[0.3, 0.5, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.51, 0]}>
                        <meshStandardMaterial color="white" />
                    </Ring>
                    <Ring args={[0.1, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.52, 0]}>
                        <meshStandardMaterial color="#EF4444" />
                    </Ring>
                    <Float speed={2} floatIntensity={0.2}>
                        <Text position={[0, 1.5, 0]} fontSize={0.25} color="#FBBF24">
                            🎯 {targetX.toFixed(1)}m
                        </Text>
                    </Float>
                </group>
            )}

            {/* Trajectoire théorique */}
            {showTrajectory && !launched && trajectoryPoints.length > 1 && (
                <Line
                    points={trajectoryPoints}
                    color="#FBBF24"
                    lineWidth={2}
                    dashed
                    dashScale={10}
                />
            )}

            {/* Traînée réelle */}
            {trailPoints.current.length > 1 && (
                <Line
                    points={trailPoints.current}
                    color="#EF4444"
                    lineWidth={3}
                />
            )}

            {/* Projectile */}
            <Sphere ref={ballRef} args={[0.2]} position={[-4, 0, 0]}>
                <meshStandardMaterial
                    color="#EF4444"
                    emissive={launched ? "#EF4444" : "#333"}
                    emissiveIntensity={launched ? 0.5 : 0}
                />
            </Sphere>

            {/* Indicateurs de position */}
            {launched && (
                <group position={[ballRef.current?.position.x || 0, 3, 0]}>
                    <Text fontSize={0.2} color="#FBBF24">
                        h = {(ballRef.current?.position.y || 0).toFixed(1)}m
                    </Text>
                </group>
            )}

            {/* Équations */}
            <group position={[3.5, 3, 0]}>
                <Text position={[0, 0.4, 0]} fontSize={0.18} color="#9CA3AF" anchorX="left">
                    x(t) = v₀·cos(α)·t
                </Text>
                <Text position={[0, 0, 0]} fontSize={0.18} color="#9CA3AF" anchorX="left">
                    y(t) = v₀·sin(α)·t - ½gt²
                </Text>
            </group>

            {/* Panel de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🎯 Artillerie Spatiale"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[400px] border-orange-500/30"
                >
                    <div className="text-white">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setMode('explore'); reset(); }}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold ${mode === 'explore' ? 'bg-orange-600' : 'bg-gray-700'}`}
                                >
                                    🔬 Exploration
                                </button>
                                <button
                                    onClick={startChallenge}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold ${mode === 'challenge' ? 'bg-red-600' : 'bg-gray-700'}`}
                                >
                                    🎯 Défis
                                </button>
                            </div>
                            {mode === 'challenge' && (
                                <div className="flex items-center gap-2">
                                    <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                                    <div className="text-yellow-400 font-bold">{score} XP</div>
                                </div>
                            )}
                        </div>

                        {/* Mission */}
                        {mode === 'challenge' && challenge && (
                            <div className="mb-4 bg-red-900/40 p-3 rounded-lg border border-red-500/30">
                                <div className="font-bold text-red-300">{challenge.desc}</div>
                                <div className="text-xs text-gray-400 mt-1">💡 {challenge.hint}</div>
                                {streak >= 2 && (
                                    <div className="text-xs text-yellow-400 mt-1">🔥 Combo x{streak} - Bonus +30 XP !</div>
                                )}
                            </div>
                        )}

                        {/* Sélection planète */}
                        {mode === 'explore' && (
                            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                                {Object.entries(planets).map(([key, p]) => (
                                    <button
                                        key={key}
                                        onClick={() => { setPlanet(key); reset(); }}
                                        className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition ${planet === key ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-700'
                                            }`}
                                    >
                                        {p.emoji} {p.name}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Contrôles */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-gray-800/50 p-3 rounded-lg">
                                <label className="text-xs text-gray-400 flex justify-between">
                                    <span>Angle α</span>
                                    <span className="text-blue-400 font-mono">{angle}°</span>
                                </label>
                                <input
                                    type="range" min="10" max="80" value={angle}
                                    onChange={e => { setAngle(Number(e.target.value)); reset(); }}
                                    disabled={launched}
                                    className="w-full accent-blue-500 mt-1"
                                />
                            </div>
                            <div className="bg-gray-800/50 p-3 rounded-lg">
                                <label className="text-xs text-gray-400 flex justify-between">
                                    <span>Vitesse v₀</span>
                                    <span className="text-green-400 font-mono">{v0} m/s</span>
                                </label>
                                <input
                                    type="range" min="5" max="30" value={v0}
                                    onChange={e => { setV0(Number(e.target.value)); reset(); }}
                                    disabled={launched}
                                    className="w-full accent-green-500 mt-1"
                                />
                            </div>
                        </div>

                        {/* Boutons */}
                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={launch}
                                disabled={launched}
                                className={`flex-1 py-3 rounded-lg font-bold text-lg transition ${launched
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400'
                                    }`}
                            >
                                🚀 LANCER !
                            </button>
                            <button
                                onClick={reset}
                                className="px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold"
                            >
                                🔄
                            </button>
                            <button
                                onClick={() => setShowTrajectory(!showTrajectory)}
                                className={`px-4 py-3 rounded-lg font-bold ${showTrajectory ? 'bg-yellow-600' : 'bg-gray-700'}`}
                            >
                                📐
                            </button>
                        </div>

                        {/* Données de vol */}
                        <div className="bg-black/40 p-3 rounded-lg border-l-4 border-orange-500">
                            <div className="text-sm font-bold text-orange-400 mb-2">📊 Paramètres de tir</div>
                            <div className="grid grid-cols-3 gap-2 text-xs text-center">
                                <div className="bg-gray-800 p-2 rounded">
                                    <div className="text-gray-400">Portée</div>
                                    <div className="font-mono text-blue-400">{range.toFixed(1)} m</div>
                                </div>
                                <div className="bg-gray-800 p-2 rounded">
                                    <div className="text-gray-400">Hmax</div>
                                    <div className="font-mono text-green-400">{maxHeight.toFixed(1)} m</div>
                                </div>
                                <div className="bg-gray-800 p-2 rounded">
                                    <div className="text-gray-400">Temps</div>
                                    <div className="font-mono text-purple-400">{tMax.toFixed(2)} s</div>
                                </div>
                            </div>
                            <div className="mt-2 text-center text-xs text-gray-400">
                                g = {g} m/s² ({currentPlanet.name})
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// ============================================================
// P4. GRAVITATION UNIVERSELLE - VERSION AVANCÉE
// Mission: Commandant Orbital - Placer des satellites en orbite
// ============================================================
export function GravitationAdvanced() {
    // États du jeu
    const [mode, setMode] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [challenge, setChallenge] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États physiques
    const [orbitRadius, setOrbitRadius] = useState(2.5);
    const [targetOrbit, setTargetOrbit] = useState(null);
    const [showKepler, setShowKepler] = useState(false);
    const [satelliteCount, setSatelliteCount] = useState(1);
    const [orbitType, setOrbitType] = useState('circular'); // circular, elliptical

    const satelliteRefs = useRef([]);
    const moonRef = useRef();

    // Constantes
    const G = 6.67e-11;
    const M_terre = 5.97e24;
    const R_terre = 6371; // km

    // Calculs orbitaux (simplifiés pour l'animation)
    const orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(orbitRadius, 3) / 10);
    const orbitalVelocity = Math.sqrt(10 / orbitRadius);
    const altitude = (orbitRadius - 1) * R_terre; // En km (1 = rayon Terre)

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        // Animation satellites
        satelliteRefs.current.forEach((sat, index) => {
            if (sat) {
                const omega = 2 * Math.PI / orbitalPeriod;
                const phase = (index * 2 * Math.PI) / satelliteCount;
                sat.position.x = orbitRadius * Math.cos(omega * t + phase);
                sat.position.z = orbitRadius * Math.sin(omega * t + phase);
            }
        });

        // Lune
        if (moonRef.current) {
            moonRef.current.position.x = 5 * Math.cos(t * 0.15);
            moonRef.current.position.z = 5 * Math.sin(t * 0.15);
        }
    });

    // Timer
    useEffect(() => {
        if (mode === 'challenge' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, mode, showSuccess]);

    // Vérifier si l'orbite cible est atteinte
    useEffect(() => {
        if (mode === 'challenge' && targetOrbit) {
            const tolerance = 0.15;
            if (Math.abs(orbitRadius - targetOrbit.radius) < tolerance) {
                handleSuccess();
            }
        }
    }, [orbitRadius, mode, targetOrbit]);

    const generateChallenge = () => {
        const orbitTypes = [
            { name: 'LEO (Basse)', radius: 1.5, desc: 'Orbite basse (LEO) - Station Spatiale', period: '~90 min' },
            { name: 'MEO', radius: 2.5, desc: 'Orbite moyenne (MEO) - GPS', period: '~12h' },
            { name: 'GEO (Géostationnaire)', radius: 3.5, desc: 'Orbite géostationnaire - Satellites TV', period: '24h' },
            { name: 'Haute', radius: 4.2, desc: 'Orbite haute - Communications', period: '~48h' }
        ];

        const target = orbitTypes[Math.floor(Math.random() * orbitTypes.length)];
        setChallenge({
            ...target,
            hint: `Place le satellite à r ≈ ${target.radius.toFixed(1)} pour une période de ${target.period}`
        });
        setTargetOrbit(target);
        setOrbitRadius(1.3);
        setTimeLeft(45);
        setShowSuccess(false);
    };

    const startChallenge = () => {
        setMode('challenge');
        setScore(0);
        generateChallenge();
    };

    const handleSuccess = () => {
        const accuracy = Math.max(0, 50 - Math.abs(orbitRadius - targetOrbit.radius) * 100);
        const points = 80 + Math.floor(accuracy) + Math.floor(timeLeft * 2);
        setScore(s => s + points);
        setShowSuccess(true);
        setLevel(l => l + 1);
    };

    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`🛰️ Orbite ${challenge?.name} établie !`}
                points={80 + Math.floor(timeLeft * 2)}
                onNext={generateChallenge}
            />
            <ConfettiExplosion active={showSuccess} />

            {/* Titre */}
            <Text position={[0, 4.5, 0]} fontSize={0.5} color="#60A5FA">
                🌍 GRAVITATION UNIVERSELLE
            </Text>

            {/* Étoiles de fond */}
            {useMemo(() => (
                <group>
                    {Array.from({ length: 100 }).map((_, i) => (
                        <Sphere key={i} args={[0.02]} position={[
                            (Math.random() - 0.5) * 20,
                            (Math.random() - 0.5) * 15,
                            -5 - Math.random() * 5
                        ]}>
                            <meshBasicMaterial color="white" />
                        </Sphere>
                    ))}
                </group>
            ), [])}

            {/* Terre */}
            <group>
                <Sphere args={[1, 32, 32]}>
                    <meshStandardMaterial color="#3B82F6" />
                </Sphere>
                {/* Atmosphère */}
                <Sphere args={[1.05, 32, 32]}>
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.2} />
                </Sphere>
                {/* Continents simplifiés */}
                <Text position={[0, 0, 1.01]} fontSize={0.3} color="#15803D">🌍</Text>
            </group>

            {/* Orbite cible (mode défi) */}
            {mode === 'challenge' && targetOrbit && (
                <Ring
                    args={[targetOrbit.radius - 0.05, targetOrbit.radius + 0.05, 64]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial
                        color={Math.abs(orbitRadius - targetOrbit.radius) < 0.15 ? "#4ADE80" : "#FBBF24"}
                        transparent
                        opacity={0.5}
                        side={THREE.DoubleSide}
                    />
                </Ring>
            )}

            {/* Orbite actuelle */}
            <Ring args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#4ADE80" transparent opacity={0.3} side={THREE.DoubleSide} />
            </Ring>

            {/* Satellites */}
            {Array.from({ length: satelliteCount }).map((_, i) => (
                <group key={i} ref={el => satelliteRefs.current[i] = el}>
                    <Box args={[0.15, 0.15, 0.15]}>
                        <meshStandardMaterial color="#F59E0B" />
                    </Box>
                    {/* Panneaux solaires */}
                    <Box args={[0.4, 0.02, 0.1]} position={[0.25, 0, 0]}>
                        <meshStandardMaterial color="#1E40AF" />
                    </Box>
                    <Box args={[0.4, 0.02, 0.1]} position={[-0.25, 0, 0]}>
                        <meshStandardMaterial color="#1E40AF" />
                    </Box>
                    {/* Vecteur vitesse */}
                    {showKepler && (
                        <Line
                            points={[[0, 0, 0], [0, 0, 0.5 * orbitalVelocity]]}
                            color="#4ADE80"
                            lineWidth={2}
                        />
                    )}
                </group>
            ))}

            {/* Lune */}
            <group ref={moonRef} position={[5, 0, 0]}>
                <Sphere args={[0.35]}>
                    <meshStandardMaterial color="#9CA3AF" />
                </Sphere>
                <Text position={[0, 0.5, 0]} fontSize={0.15} color="#9CA3AF">Lune</Text>
            </group>

            {/* Vecteur gravité */}
            {showKepler && satelliteRefs.current[0] && (
                <Line
                    points={[
                        [satelliteRefs.current[0]?.position.x || orbitRadius, 0, satelliteRefs.current[0]?.position.z || 0],
                        [0, 0, 0]
                    ]}
                    color="#EF4444"
                    lineWidth={2}
                    dashed
                />
            )}

            {/* Formules */}
            <group position={[-4, 3, 0]}>
                <Text position={[0, 0.4, 0]} fontSize={0.18} color="#9CA3AF" anchorX="left">
                    F = G·Mm/r²
                </Text>
                <Text position={[0, 0, 0]} fontSize={0.18} color="#9CA3AF" anchorX="left">
                    v = √(GM/r)
                </Text>
                <Text position={[0, -0.4, 0]} fontSize={0.18} color="#9CA3AF" anchorX="left">
                    T²/r³ = constante
                </Text>
            </group>

            {/* Panel de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🛰️ Centre de Contrôle Orbital"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[400px] border-blue-500/30"
                >
                    <div className="text-white">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setMode('explore')}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold ${mode === 'explore' ? 'bg-blue-600' : 'bg-gray-700'}`}
                                >
                                    🔬 Exploration
                                </button>
                                <button
                                    onClick={startChallenge}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold ${mode === 'challenge' ? 'bg-purple-600' : 'bg-gray-700'}`}
                                >
                                    🛰️ Missions
                                </button>
                            </div>
                            {mode === 'challenge' && (
                                <div className="flex items-center gap-2">
                                    <ChallengeTimer timeLeft={timeLeft} maxTime={45} />
                                    <div className="text-yellow-400 font-bold">{score} XP</div>
                                </div>
                            )}
                        </div>

                        {/* Mission */}
                        {mode === 'challenge' && challenge && (
                            <div className="mb-4 bg-purple-900/40 p-3 rounded-lg border border-purple-500/30">
                                <div className="font-bold text-purple-300">{challenge.desc}</div>
                                <div className="text-xs text-gray-400 mt-1">💡 {challenge.hint}</div>
                                <div className="text-xs text-blue-400 mt-1">🎯 Cible: r = {challenge.radius.toFixed(1)} u</div>
                            </div>
                        )}

                        {/* Contrôle du rayon orbital */}
                        <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
                            <label className="text-sm text-gray-400 flex justify-between mb-2">
                                <span>Rayon orbital</span>
                                <span className="text-blue-400 font-mono">{orbitRadius.toFixed(2)} u</span>
                            </label>
                            <input
                                type="range" min="1.2" max="4.5" step="0.05" value={orbitRadius}
                                onChange={e => setOrbitRadius(Number(e.target.value))}
                                className="w-full accent-blue-500"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>LEO</span>
                                <span>MEO</span>
                                <span>GEO</span>
                                <span>Haute</span>
                            </div>
                        </div>

                        {/* Options exploration */}
                        {mode === 'explore' && (
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-gray-800/50 p-3 rounded-lg">
                                    <label className="text-xs text-gray-400 flex justify-between">
                                        <span>Satellites</span>
                                        <span className="text-orange-400">{satelliteCount}</span>
                                    </label>
                                    <input
                                        type="range" min="1" max="6" value={satelliteCount}
                                        onChange={e => setSatelliteCount(Number(e.target.value))}
                                        className="w-full accent-orange-500 mt-1"
                                    />
                                </div>
                                <button
                                    onClick={() => setShowKepler(!showKepler)}
                                    className={`p-3 rounded-lg font-bold text-sm ${showKepler ? 'bg-purple-600' : 'bg-gray-700'}`}
                                >
                                    📐 {showKepler ? 'Masquer' : 'Afficher'} Kepler
                                </button>
                            </div>
                        )}

                        {/* Données orbitales */}
                        <div className="bg-black/40 p-3 rounded-lg border-l-4 border-blue-500">
                            <div className="text-sm font-bold text-blue-400 mb-2">📊 Paramètres orbitaux</div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-gray-800 p-2 rounded">
                                    <div className="text-gray-400">Période T</div>
                                    <div className="font-mono text-green-400">{orbitalPeriod.toFixed(2)} s</div>
                                </div>
                                <div className="bg-gray-800 p-2 rounded">
                                    <div className="text-gray-400">Vitesse v</div>
                                    <div className="font-mono text-orange-400">{orbitalVelocity.toFixed(2)} u/s</div>
                                </div>
                                <div className="bg-gray-800 p-2 rounded col-span-2">
                                    <div className="text-gray-400">Altitude estimée</div>
                                    <div className="font-mono text-purple-400">{altitude.toFixed(0)} km</div>
                                </div>
                            </div>
                            <div className="mt-2 text-center text-xs text-gray-400">
                                T² ∝ r³ (3ème loi de Kepler)
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>
        </group>
    );
}

// Export des composants
export { CinematiquePointAdvanced as CinematiqueTS };
export { DynamiqueNewtonAdvanced as DynamiqueTS };
export { ProjectileMotionAdvanced as ProjectileTS };
export { GravitationAdvanced as GravitationTS };
