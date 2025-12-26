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
import {
    SuccessOverlay,
    ConfettiExplosion,
    ChallengeTimer,
    ParticleTrail,
    GradeBadge,
    XPBar,
    PhaseSelector,
    MissionObjective
} from './GamificationUtils';

// ============================================================
// COMPOSANTS UTILITAIRES RÉUTILISABLES
// ============================================================

// ============================================================
// P1. CINÉMATIQUE DU POINT - VERSION AVANCÉE
// Mission: Course Spatiale - Atteindre des cibles avec le bon mouvement
// ============================================================
export function CinematiquePointAdvanced() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('explore'); // explore, train, mission
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);
    const [streak, setStreak] = useState(0);

    // États Physiques de l'Engin
    const [motionType, setMotionType] = useState('mru');
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [v0, setV0] = useState(2);
    const [acceleration, setAcceleration] = useState(0.5);
    const [omega, setOmega] = useState(1);
    const [radius, setRadius] = useState(2);

    // Environnement & Cibles
    const [targetPos, setTargetPos] = useState({ x: 3, y: 0 });
    const [targetReached, setTargetReached] = useState(false);
    const [obstacles, setObstacles] = useState([]);

    const particleRef = useRef();
    const trailPoints = useRef([]);

    // Configuration des Missions
    const missions = useMemo(() => [
        {
            id: 1,
            type: 'mru',
            title: 'Docking Orbital',
            desc: 'Stabilisez le vecteur vitesse pour approcher la station.',
            objective: 'Atteignez la zone bleue à une vitesse constante de 3.0 m/s.',
            targetX: 3.5,
            targetY: 0,
            reqV: 3.0,
            tolerance: 0.1
        },
        {
            id: 2,
            type: 'mruv',
            title: 'Freinage d\'Urgence',
            desc: 'Un débris approche ! Stoppez-vous exactement dans la zone de sécurité.',
            objective: 'La vitesse finale v(t) doit être nulle sur la cible.',
            targetX: 3.0,
            targetY: 0,
            reqV: 0,
            tolerance: 0.2
        },
        {
            id: 3,
            type: 'mcu',
            title: 'Mise en Orbite',
            desc: 'Maintenez un rayon de courbure constant pour scanner la planète.',
            objective: 'Synchronisez votre rotation θ(t) avec la balise.',
            targetX: 0,
            targetY: 2.5,
            reqR: 2.5,
            tolerance: 0.1
        }
    ], []);

    // Logique Cinématique
    const getPosition = useCallback((t) => {
        if (motionType === 'mru') return { x: v0 * t - 4, y: 0 };
        if (motionType === 'mruv') return { x: 0.5 * acceleration * t * t + v0 * t - 4, y: 0 };
        return { x: radius * Math.cos(omega * t), y: radius * Math.sin(omega * t) };
    }, [motionType, v0, acceleration, omega, radius]);

    const getVelocity = useCallback((t) => {
        if (motionType === 'mru') return { vx: v0, vy: 0, magnitude: v0 };
        if (motionType === 'mruv') {
            const vx = acceleration * t + v0;
            return { vx, vy: 0, magnitude: Math.abs(vx) };
        }
        const vx = -radius * omega * Math.sin(omega * t);
        const vy = radius * omega * Math.cos(omega * t);
        return { vx, vy, magnitude: Math.sqrt(vx * vx + vy * vy) };
    }, [motionType, v0, acceleration, omega, radius]);

    // Système de Jeu
    useEffect(() => {
        if (phase === 'mission' && !mission) {
            startMission(level);
        }
    }, [phase, level, mission]); // Added mission to dependencies to prevent infinite loop if mission is null

    const startMission = (lvl) => {
        const m = missions[Math.min(lvl - 1, missions.length - 1)];
        setMission(m);
        setMotionType(m.type);
        setTargetPos({ x: m.targetX, y: m.targetY });
        if (m.type === 'mcu') setRadius(m.reqR || 2);
        setTimeLeft(45);
        resetSimulation();
    };

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

    useFrame((state, delta) => {
        if (running && particleRef.current) {
            const newTime = time + delta;
            setTime(newTime);
            const pos = getPosition(newTime);
            particleRef.current.position.set(pos.x, pos.y, 0);

            if (trailPoints.current.length < 200) {
                trailPoints.current.push(new THREE.Vector3(pos.x, pos.y, 0));
            }

            // Vérification Mission
            if (phase === 'mission' && mission && !targetReached) {
                const dist = Math.sqrt(Math.pow(pos.x - targetPos.x, 2) + Math.pow(pos.y - targetPos.y, 2));
                if (dist < 0.4) {
                    const vel = getVelocity(newTime);
                    let success = true;
                    if (mission.reqV !== undefined && Math.abs(vel.magnitude - mission.reqV) > mission.tolerance) success = false;
                    // Add other mission specific checks here (e.g., for MCU radius, etc.)

                    if (success) {
                        setTargetReached(true);
                        handleMissionSuccess();
                    }
                }
            }

            if (Math.abs(pos.x) > 7 || Math.abs(pos.y) > 5) resetSimulation();
        }
    });

    // Timer du défi
    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && phase === 'mission') {
            // Mission failed due to timeout
            setStreak(0); // Reset streak on failure
            // Optionally, show a failure message or restart mission
            startMission(level); // Restart current mission
        }
    }, [timeLeft, phase, showSuccess, level]); // Added level to dependencies

    const handleMissionSuccess = () => {
        const points = 100 + Math.floor(timeLeft * 5);
        setScore(s => s + points);
        setShowSuccess(true);
        setRunning(false);
    };

    const nextLevel = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, missions.length)); // Cap level at max missions
        setPhase('mission');
        setMission(null); // Force reload
    };

    const velocity = getVelocity(time);

    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`Félicitations Major ! Mission "${mission?.title}" réussie.`}
                points={100 + Math.floor(timeLeft * 5)}
                onNext={nextLevel}
            />
            <ConfettiExplosion active={showSuccess} />
            <ParticleTrail active={running && motionType === 'mcu'} color="#3B82F6" />

            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🚀 Système de Navigation Cinématique"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[400px] border-blue-500/30"
                >
                    <div className="text-white">
                        {/* Barre d'entête premium */}
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🚀" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase">Direction du Vecteur</label>
                                    <div className="flex gap-2">
                                        <button onClick={() => setMotionType('mru')} className={`flex-1 py-1 rounded border ${motionType === 'mru' ? 'bg-blue-600 border-blue-400' : 'bg-gray-800 border-gray-600'} text-[10px]`}>LINÉAIRE</button>
                                        <button onClick={() => setMotionType('mcu')} className={`flex-1 py-1 rounded border ${motionType === 'mcu' ? 'bg-purple-600 border-purple-400' : 'bg-gray-800 border-gray-600'} text-[10px]`}>CIRCULAIRE</button>
                                    </div>
                                </div>
                                {motionType !== 'mcu' && (
                                    <>
                                        <div>
                                            <label className="text-[10px] text-gray-400 block">Vitesse Initiale v₀: {v0.toFixed(1)} m/s</label>
                                            <input type="range" min="0" max="5" step="0.1" value={v0} onChange={(e) => setV0(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <label className="text-[10px] text-gray-400">Mode MRUV</label>
                                            <button onClick={() => setMotionType(motionType === 'mruv' ? 'mru' : 'mruv')} className={`w-10 h-5 rounded-full transition-colors ${motionType === 'mruv' ? 'bg-orange-500' : 'bg-gray-700'}`}>
                                                <div className={`w-3 h-3 bg-white rounded-full transition-transform mx-1 ${motionType === 'mruv' ? 'translate-x-5' : 'translate-x-0'}`} />
                                            </button>
                                        </div>
                                        {motionType === 'mruv' && (
                                            <div>
                                                <label className="text-[10px] text-gray-400 block">Accélération a: {acceleration.toFixed(2)} m/s²</label>
                                                <input type="range" min="-1" max="1" step="0.05" value={acceleration} onChange={(e) => setAcceleration(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-orange-500" />
                                            </div>
                                        )}
                                    </>
                                )}
                                {motionType === 'mcu' && (
                                    <>
                                        <div>
                                            <label className="text-[10px] text-gray-400 block">Vitesse Angulaire ω: {omega.toFixed(1)} rad/s</label>
                                            <input type="range" min="0.1" max="3" step="0.1" value={omega} onChange={(e) => setOmega(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-purple-500" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-gray-400 block">Rayon R: {radius.toFixed(1)} m</label>
                                            <input type="range" min="1" max="3" step="0.1" value={radius} onChange={(e) => setRadius(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-purple-500" />
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <div className="text-[9px] text-gray-500 font-mono">TELEMETRY_STREAM</div>
                                    <div className="text-xs font-mono">
                                        <span className="text-emerald-400">POS:</span> {getPosition(time).x.toFixed(2)}, {getPosition(time).y.toFixed(2)}
                                    </div>
                                    <div className="text-xs font-mono">
                                        <span className="text-blue-400">VEL:</span> {velocity.magnitude.toFixed(2)} m/s
                                    </div>
                                    <div className="text-xs font-mono">
                                        <span className="text-yellow-400">TIME:</span> {time.toFixed(2)}s
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <button
                                        onClick={() => setRunning(!running)}
                                        className={`w-full py-2 rounded-lg font-bold text-xs transition-all ${running ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'}`}
                                    >
                                        {running ? '⚠️ ARRÊTER' : '🚀 INITIALISER FEU'}
                                    </button>
                                    <button
                                        onClick={resetSimulation}
                                        className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs transition-all"
                                    >
                                        🔄 RESET
                                    </button>
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
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);
    const [planet, setPlanet] = useState('earth');

    // États Physiques
    const [force, setForce] = useState(10);
    const [mass, setMass] = useState(5);
    const [friction, setFriction] = useState(2);
    const [angle, setAngle] = useState(0);
    const [position, setPosition] = useState(-3);
    const [velocity, setVelocity] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);

    const boxRef = useRef();

    // Données Planétaires
    const planets = {
        earth: { g: 9.81, color: '#374151', label: 'Terre 🌍', bg: '#111827' },
        mars: { g: 3.71, color: '#92400e', label: 'Mars 🔴', bg: '#450a0a' },
        moon: { g: 1.62, color: '#4b5563', label: 'Lune 🌕', bg: '#0f172a' }
    };

    const g = planets[planet].g;

    // Config des Missions
    const missions = useMemo(() => [
        {
            id: 1,
            title: 'Livraison au Camp',
            objective: 'Atteignez la zone cible avec une charge de 10kg sur Terre.',
            reqMass: 10, reqPlanet: 'earth', reqAngle: 0
        },
        {
            id: 2,
            title: 'Rampe Martienne',
            objective: 'Poussez le rover (5kg) sur un plan incliné de 20° sur Mars.',
            reqMass: 5, reqPlanet: 'mars', reqAngle: 20
        },
        {
            id: 3,
            title: 'Équilibre Solaire',
            objective: 'Maintenez la station en équilibre statique sur la Lune (Force = Frottement).',
            reqMass: 8, reqPlanet: 'moon', reqAngle: 0
        }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setMass(m.reqMass);
            setPlanet(m.reqPlanet);
            setAngle(m.reqAngle);
            setTimeLeft(45);
            resetSimulation();
        }
    }, [phase, level, mission]);

    // Calculs Dynamiques (Somme des forces)
    const weight = mass * g;
    const weightParallel = weight * Math.sin(angle * Math.PI / 180);
    const weightNormal = weight * Math.cos(angle * Math.PI / 180);
    const frictionForce = (friction / 10) * weightNormal;
    const netForce = force - weightParallel - (velocity > 0 ? frictionForce : -frictionForce);
    const acceleration = netForce / mass;

    useFrame((state, delta) => {
        if (isSimulating && boxRef.current) {
            const newVel = velocity + acceleration * delta;
            const newPos = position + newVel * delta;

            if (newPos > 4) {
                if (phase === 'mission') handleSuccess();
                setPosition(4);
                setVelocity(0);
                setIsSimulating(false);
            } else if (newPos < -4) {
                setPosition(-4);
                setVelocity(0);
                setIsSimulating(false);
            } else {
                setPosition(newPos);
                setVelocity(newVel);
            }
            boxRef.current.position.x = position;
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 150 + Math.floor(timeLeft * 2));
        setShowSuccess(true);
        setIsSimulating(false);
    };

    const resetSimulation = () => {
        setPosition(-3);
        setVelocity(0);
        setIsSimulating(false);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`Masse transportée avec succès ! Niveau ${level} validé.`}
                points={150 + Math.floor(timeLeft * 2)}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel
                    title="⚖️ Lab Dynamique - Ingénieur Cargo"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-orange-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="flex gap-2 my-4">
                            {Object.entries(planets).map(([id, p]) => (
                                <button
                                    key={id}
                                    onClick={() => setPlanet(id)}
                                    className={`flex-1 py-1 rounded text-[10px] font-bold transition ${planet === id ? 'bg-white/20 border-white' : 'bg-gray-800 border-transparent'} border`}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🚛" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block">Force Appliquée: {force.toFixed(1)} N</label>
                                    <input type="range" min="0" max="100" step="1" value={force} onChange={(e) => setForce(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-green-500" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block">Masse Cargo: {mass.toFixed(1)} kg</label>
                                    <input type="range" min="1" max="50" step="1" value={mass} onChange={(e) => setMass(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block">Coefficient Frottement: {friction.toFixed(1)}</label>
                                    <input type="range" min="0" max="5" step="0.1" value={friction} onChange={(e) => setFriction(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-orange-500" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block">Inclinaison α: {angle}°</label>
                                    <input type="range" min="0" max="45" value={angle} onChange={(e) => setAngle(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-yellow-400" />
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-gray-500 font-mono">DYNAMICS_DATA</div>
                                    <div className="text-[11px] font-mono"><span className="text-red-400">POIDS:</span> {weight.toFixed(1)} N</div>
                                    <div className="text-[11px] font-mono"><span className="text-orange-400">FROT:</span> {frictionForce.toFixed(1)} N</div>
                                    <div className="text-[11px] font-mono"><span className="text-emerald-400">ACCEL:</span> {acceleration.toFixed(2)} m/s²</div>
                                    <div className="text-[11px] font-mono"><span className="text-blue-400">VITESSE:</span> {velocity.toFixed(2)} m/s</div>
                                </div>

                                <div className="space-y-2 mt-4">
                                    <button
                                        onClick={() => setIsSimulating(!isSimulating)}
                                        className={`w-full py-2 rounded-lg font-bold text-xs transition-all ${isSimulating ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'}`}
                                    >
                                        {isSimulating ? '⏸ PAUSE' : '▶ SIMULER'}
                                    </button>
                                    <button onClick={resetSimulation} className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs transition-all">🔄 RESET</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <group rotation={[0, 0, -angle * Math.PI / 180]}>
                <Box args={[12, 0.5, 4]} position={[0, -2, 0]}>
                    <meshStandardMaterial color={planets[planet].color} />
                </Box>

                <Box args={[1.5, 0.6, 4.1]} position={[4, -2, 0]}>
                    <meshStandardMaterial color="#4ADE80" emissive="#4ADE80" emissiveIntensity={0.5} transparent opacity={0.6} />
                </Box>

                <group ref={boxRef} position={[position, -0.75, 0]}>
                    <Box args={[1, 1, 1]}>
                        <meshStandardMaterial color="#3B82F6" roughness={0.3} metalness={0.2} />
                    </Box>
                    <Text position={[0, 1.2, 0]} fontSize={0.2} color="white">{mass} kg</Text>

                    {/* Vectors */}
                    <Line points={[[0, 0, 0], [force / 20, 0, 0]]} color="#22c55e" lineWidth={5} />
                    <Line points={[[0, 0, 0], [0, -weight / 20, 0]]} color="#ef4444" lineWidth={3} />
                </group>
            </group>
        </group>
    );
}

// ============================================================
// P3. MOUVEMENT PROJECTILE - VERSION AVANCÉE
// Mission: Artilleur Spatial - Atteindre des cibles sur différentes planètes
// ============================================================
export function ProjectileMotionAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    // États Physiques
    const [angle, setAngle] = useState(45);
    const [v0, setV0] = useState(15);
    const [planet, setPlanet] = useState('earth');
    const [launched, setLaunched] = useState(false);
    const [time, setTime] = useState(0);

    // Cibles & Télémétrie
    const [targetPos, setTargetPos] = useState({ x: 5, y: 0 });
    const [targetHit, setTargetHit] = useState(false);
    const [maxHeightObserved, setMaxHeightObserved] = useState(0);

    const ballRef = useRef();
    const trailPoints = useRef([]);

    const planets = {
        earth: { name: 'Terre', g: 9.81, color: '#3B82F6', emoji: '🌍', ground: '#15803D' },
        moon: { name: 'Lune', g: 1.62, color: '#9CA3AF', emoji: '🌙', ground: '#4b5563' },
        mars: { name: 'Mars', g: 3.71, color: '#EF4444', emoji: '🔴', ground: '#8B4513' }
    };

    const g = planets[planet].g;
    const angleRad = (angle * Math.PI) / 180;
    const vx = v0 * Math.cos(angleRad);
    const vy = v0 * Math.sin(angleRad);

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Cible Terrestre', planet: 'earth', targetX: 6, objective: 'Touchez la base d\'entraînement à 6m sur Terre.' },
        { id: 2, title: 'Base Lunaire', planet: 'moon', targetX: 10, objective: 'Lancez un module de ravitaillement à 10m sur la Lune.' },
        { id: 3, title: 'Avant-poste Martien', planet: 'mars', targetX: 8, objective: 'Atteignez le dôme martien situé à 8m.' }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setPlanet(m.planet);
            setTargetPos({ x: m.targetX, y: 0 });
            resetSimulation();
        }
    }, [phase, level, mission]);

    useFrame((state, delta) => {
        if (launched && ballRef.current) {
            const newTime = time + delta;
            setTime(newTime);

            const x = vx * newTime - 4;
            const y = vy * newTime - 0.5 * g * newTime * newTime;

            if (y > maxHeightObserved) setMaxHeightObserved(y);

            if (y >= 0) {
                ballRef.current.position.set(x, y, 0);
                if (trailPoints.current.length < 300) {
                    trailPoints.current.push(new THREE.Vector3(x, y, 0));
                }

                if (phase === 'mission' && !targetHit) {
                    const dist = Math.sqrt(Math.pow(x - targetPos.x, 2) + Math.pow(y - 0.2, 2));
                    if (dist < 0.6) {
                        setTargetHit(true);
                        handleSuccess();
                    }
                }
            } else {
                setLaunched(false);
            }
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 200 + Math.floor(timeLeft * 3));
        setShowSuccess(true);
        setLaunched(false);
    };

    const resetSimulation = () => {
        setLaunched(false);
        setTime(0);
        setTargetHit(false);
        setMaxHeightObserved(0);
        trailPoints.current = [];
        if (ballRef.current) ballRef.current.position.set(-4, 0, 0);
    };

    const launch = () => {
        resetSimulation();
        setLaunched(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };


    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`Trait de géniebalistique ! Mission "${mission?.title}" accomplie.`}
                points={200 + Math.floor(timeLeft * 3)}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🎯 Système de Guidage Balistique"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-orange-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={60} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="flex gap-2 my-4">
                            {Object.entries(planets).map(([id, p]) => (
                                <button
                                    key={id}
                                    onClick={() => { setPlanet(id); resetSimulation(); }}
                                    className={`flex-1 py-1 rounded text-[10px] font-bold transition ${planet === id ? 'bg-white/20 border-white text-white' : 'bg-gray-800 border-transparent text-gray-400'} border`}
                                >
                                    {p.emoji} {p.name}
                                </button>
                            ))}
                        </div>

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🎯" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1">Angle du Canon α: {angle}°</label>
                                    <div className="relative h-1 bg-gray-700 rounded-full">
                                        <div className="absolute h-full bg-orange-500 rounded-full" style={{ width: `${(angle / 90) * 100}%` }} />
                                        <input type="range" min="0" max="90" step="1" value={angle} onChange={(e) => setAngle(parseFloat(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1">Vitesse de Bouche v₀: {v0.toFixed(1)} m/s</label>
                                    <div className="relative h-1 bg-gray-700 rounded-full">
                                        <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: `${(v0 / 30) * 100}%` }} />
                                        <input type="range" min="1" max="30" step="0.5" value={v0} onChange={(e) => setV0(parseFloat(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-gray-500 font-mono">BALLISTICS_TELEMETRY</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">vx:</span> {vx.toFixed(1)} m/s</div>
                                    <div className="text-[10px] font-mono"><span className="text-red-400">vy:</span> {vy.toFixed(1)} m/s</div>
                                    <div className="text-[10px] font-mono"><span className="text-yellow-400">H_MAX:</span> {maxHeightObserved.toFixed(2)} m</div>
                                </div>

                                <div className="space-y-2 mt-4">
                                    <button
                                        onClick={launch}
                                        className="w-full py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-bold text-xs shadow-lg shadow-orange-900/40 hover:scale-105 transition-transform"
                                    >
                                        🚀 FEU !
                                    </button>
                                    <button onClick={resetSimulation} className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs transition-all tracking-widest uppercase">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Scène 3D */}
            <group>
                <Box args={[15, 0.4, 6]} position={[0, -0.2, 0]}>
                    <meshStandardMaterial color={planets[planet].ground} />
                </Box>

                <Cylinder args={[0.2, 0.3, 1.2]} position={[-4, 0.4, 0]} rotation={[0, 0, angleRad]}>
                    <meshStandardMaterial color="#374151" metalness={0.8} />
                </Cylinder>

                <group position={[targetPos.x, 0.2, 0]}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[0.5, 0.7, 32]} />
                        <meshStandardMaterial color={targetHit ? "#4ade80" : "#ef4444"} emissive={targetHit ? "#4ade80" : "#ef4444"} />
                    </mesh>
                </group>

                {trailPoints.current.length > 1 && (
                    <Line points={trailPoints.current} color="#FBBF24" lineWidth={2} alphaTest={0.5} transparent opacity={0.6} />
                )}

                <Sphere ref={ballRef} args={[0.2]} position={[-4, 0, 0]}>
                    <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={launched ? 0.8 : 0} />
                </Sphere>
            </group>
        </group>
    );
}

// ============================================================
// P4. GRAVITATION UNIVERSELLE - VERSION AVANCÉE
// Mission: Commandant Orbital - Placer des satellites en orbite
// ============================================================
export function GravitationAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [orbitRadius, setOrbitRadius] = useState(2.5);
    const [satelliteCount, setSatelliteCount] = useState(1);
    const [showVectors, setShowVectors] = useState(false);

    const satelliteRefs = useRef([]);
    const moonRef = useRef();

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Basse Orbite (LEO)', objective: 'Stabilisez 1 satellite à r = 1.5u (Altitude ISS).', targetR: 1.5, reqSats: 1 },
        { id: 2, title: 'Réseau GPS (MEO)', objective: 'Placez 3 satellites à r = 2.8u pour le réseau GPS.', targetR: 2.8, reqSats: 3 },
        { id: 3, title: 'Ceinture TV (GEO)', objective: 'Atteignez l\'orbite géostationnaire à r = 4.2u avec 6 satellites.', targetR: 4.2, reqSats: 6 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setSatelliteCount(m.reqSats);
            setTimeLeft(45);
        }
    }, [phase, level, mission]);

    // Constantes (simplifiées pour l'animation)
    const G = 6.67e-11; // Constante gravitationnelle
    const M_terre = 5.97e24; // Masse de la Terre en kg
    const R_terre = 6371; // Rayon de la Terre en km

    // Calculs Orbitaux
    const orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(orbitRadius, 3) / 10);
    const orbitalVelocity = Math.sqrt(10 / orbitRadius);
    const keplerConstant = Math.pow(orbitalPeriod, 2) / Math.pow(orbitRadius, 3);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        satelliteRefs.current.forEach((sat, index) => {
            if (sat) {
                const omega = 2 * Math.PI / orbitalPeriod;
                const phase_offset = (index * 2 * Math.PI) / satelliteCount;
                sat.position.x = orbitRadius * Math.cos(omega * t + phase_offset);
                sat.position.z = orbitRadius * Math.sin(omega * t + phase_offset);
                sat.rotation.y = omega * t + phase_offset;
            }
        });
        if (moonRef.current) {
            moonRef.current.position.x = 6 * Math.cos(t * 0.1);
            moonRef.current.position.z = 6 * Math.sin(t * 0.1);
        }
    });

    // Timer
    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    // Vérifier si l'orbite cible est atteinte
    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            const tolerance = 0.15;
            if (Math.abs(orbitRadius - mission.targetR) < tolerance) {
                handleSuccess();
            }
        }
    }, [orbitRadius, phase, mission]);

    const handleSuccess = () => {
        setScore(s => s + 250);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            <SuccessOverlay
                show={showSuccess}
                message={`Verrouillage orbital confirmé ! Mission "${mission?.title}" réussie.`}
                points={250}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />

            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🛰️ Centre de Commande Orbital"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-blue-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🛰️" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1">Rayon Orbital r: {orbitRadius.toFixed(2)} u</label>
                                    <input type="range" min="1.2" max="5.5" step="0.05" value={orbitRadius} onChange={(e) => setOrbitRadius(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1">Nombre de Satellites: {satelliteCount}</label>
                                    <input type="range" min="1" max="12" step="1" value={satelliteCount} onChange={(e) => setSatelliteCount(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-orange-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="text-[10px] text-gray-400">Vecteurs Physiques</label>
                                    <button onClick={() => setShowVectors(!showVectors)} className={`px-2 py-1 rounded text-[10px] ${showVectors ? 'bg-purple-600' : 'bg-gray-800'}`}>
                                        {showVectors ? 'ON' : 'OFF'}
                                    </button>
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-white/5 flex flex-col justify-between">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-gray-500 font-mono">ORBITAL_STREAM</div>
                                    <div className="text-[10px] font-mono"><span className="text-emerald-400">PÉRIODE T:</span> {orbitalPeriod.toFixed(2)} s</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">VITESSE v:</span> {orbitalVelocity.toFixed(2)} u/s</div>
                                    <div className="text-[10px] font-mono"><span className="text-purple-400">K (T²/r³):</span> {keplerConstant.toFixed(3)}</div>
                                </div>

                                <div className="mt-4 text-[9px] text-gray-500 leading-tight italic">
                                    "La période augmente avec le cube de la distance."
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <Sphere args={[1.1, 32, 32]}>
                <meshStandardMaterial color="#3B82F6" emissive="#1E3A8A" emissiveIntensity={0.2} />
                <Text position={[0, 1.3, 0]} fontSize={0.2} color="white">Terre</Text>
            </Sphere>

            {Array.from({ length: satelliteCount }).map((_, i) => (
                <group key={i} ref={el => satelliteRefs.current[i] = el}>
                    <Box args={[0.2, 0.1, 0.2]}>
                        <meshStandardMaterial color="#FBBF24" metalness={0.8} />
                    </Box>
                    <Box args={[0.6, 0.05, 0.2]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#1E40AF" transparent opacity={0.8} />
                    </Box>
                    {showVectors && (
                        <>
                            <Line points={[[0, 0, 0], [0, 0, 1]]} color="#4ade80" lineWidth={2} />
                            <Line points={[[0, 0, 0], [-1, 0, 0]]} color="#ef4444" lineWidth={2} />
                        </>
                    )}
                </group>
            ))}

            <group ref={moonRef}>
                <Sphere args={[0.3]}>
                    <meshStandardMaterial color="#9CA3AF" />
                </Sphere>
            </group>

            {phase === 'mission' && mission && (
                <Ring args={[mission.targetR - 0.05, mission.targetR + 0.05, 64]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial color="#4ADE80" transparent opacity={0.2} side={THREE.DoubleSide} />
                </Ring>
            )}
            <Ring args={[orbitRadius - 0.02, orbitRadius + 0.02, 64]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} side={THREE.DoubleSide} />
            </Ring>
        </group>
    );
}

// Export des composants
export { CinematiquePointAdvanced as CinematiqueTS };
export { DynamiqueNewtonAdvanced as DynamiqueTS };
export { ProjectileMotionAdvanced as ProjectileTS };
export { GravitationAdvanced as GravitationTS };
