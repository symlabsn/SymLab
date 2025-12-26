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
import { SuccessOverlay, ConfettiExplosion, ChallengeTimer, GradeBadge, XPBar, PhaseSelector, MissionObjective } from './GamificationUtils';
import DraggableHtmlPanel from './DraggableHtmlPanel';

// ============================================================
// COMPOSANTS UTILITAIRES RÉUTILISABLES
// ============================================================

// (ChallengeTimer supprimé car importé de GamificationUtils)

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
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques (Solénoïde)
    const [current, setCurrent] = useState(5);
    const [turns, setTurns] = useState(100);
    const [length, setLength] = useState(0.2);

    const MU_0 = 4 * Math.PI * 1e-7;
    const n = turns / length;
    const B = MU_0 * n * current;
    const B_mT = B * 1000;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'IRM Standard', objective: 'Générez un champ B = 1.50 mT pour un diagnostic standard.', targetB: 1.5, tolerance: 0.1 },
        { id: 2, title: 'IRM Haute Résolution', objective: 'Atteignez B = 3.00 mT pour une imagerie neurologique.', targetB: 3.0, tolerance: 0.15 },
        { id: 3, title: 'IRM Recherche CERN', objective: 'Configurez le solénoïde pour B = 7.00 mT.', targetB: 7.0, tolerance: 0.2 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(B_mT - mission.targetB) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [B_mT, phase, mission, showSuccess]);

    const handleSuccess = () => {
        setScore(s => s + 200 + Math.floor(timeLeft * 5));
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={2}>
                {/* Solénoïde 3D */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.5, 0.5, length * 5, 32, 1, true]} />
                    <meshStandardMaterial color="#fbbf24" wireframe />
                </mesh>

                {/* Noyau ferromagnétique (optionnel visuel) */}
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.45, 0.45, (length * 5) + 0.2, 32]} />
                    <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Lignes de champ */}
                <MagneticFieldLines intensity={B_mT / 2} polarity="N" />
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🧲 Ingénierie Magnétique"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-emerald-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🏥" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Courant I: {current.toFixed(1)} A</label>
                                    <input type="range" min="0.1" max="25" step="0.1" value={current} onChange={(e) => setCurrent(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-emerald-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Spires N: {turns}</label>
                                    <input type="range" min="10" max="1000" step="10" value={turns} onChange={(e) => setTurns(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Longueur L: {(length * 100).toFixed(0)} cm</label>
                                    <input type="range" min="0.05" max="0.5" step="0.01" value={length} onChange={(e) => setLength(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-orange-500 rounded-full" />
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-emerald-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-emerald-500 font-mono tracking-tighter uppercase opacity-70 italic shadow-sm shadow-emerald-900/40 transform -skew-x-12 mb-1">MAGNETIC_FLUX_LIVE</div>
                                    <div className="text-[10px] font-mono"><span className="text-emerald-400">CHAMP B:</span> {B_mT.toFixed(2)} mT</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">DENSITÉ n:</span> {n.toFixed(0)} tr/m</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    B = μ₀ · (N/L) · I
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Champ B stabilisé ! Mission "${mission?.title}" terminée.`}
                points={200 + Math.floor(timeLeft * 5)}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P6. FORCE DE LORENTZ - VERSION AVANCÉE
// Mission: Pilote de Cyclotron - Guider les particules
// ============================================================
function LorentzAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [velocity, setVelocity] = useState(2e6);
    const [magneticField, setMagneticField] = useState(0.5);
    const [particleCharge, setParticleCharge] = useState(1);
    const [particlePos, setParticlePos] = useState({ x: 0, y: 0, angle: 0 });

    const ELECTRON_MASS = 9.109e-31;
    const ELECTRON_CHARGE = 1.602e-19;
    const mass = ELECTRON_MASS;
    const charge = particleCharge * ELECTRON_CHARGE;
    const radius = (mass * velocity) / (Math.abs(charge) * magneticField);
    const radiusCm = radius * 100;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Calibrage Faisceau', objective: 'Ajustez le rayon à R = 5.00 cm (±1) pour le calibrage.', targetR: 5, tolerance: 1 },
        { id: 2, title: 'Scanner Médical', objective: 'Ciblez une tumeur avec un rayon R = 12.00 cm (±1.5).', targetR: 12, tolerance: 1.5 },
        { id: 3, title: 'Collisionneur CERN', objective: 'Atteignez un rayon critique R = 25.00 cm (±2).', targetR: 25, tolerance: 2 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(radiusCm - mission.targetR) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [radiusCm, phase, mission, showSuccess]);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        const speedFactor = velocity / 1e6;
        setParticlePos({
            x: Math.cos(t * speedFactor) * Math.min(radiusCm / 5, 4),
            y: Math.sin(t * speedFactor) * Math.min(radiusCm / 5, 4),
            angle: t * speedFactor
        });
    });

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
            {/* Scène 3D */}
            <group rotation={[Math.PI / 2, 0, 0]}>
                {/* Chambre du cyclotron */}
                <mesh>
                    <torusGeometry args={[4.5, 0.1, 16, 100]} />
                    <meshStandardMaterial color="#334155" metalness={0.8} />
                </mesh>

                {/* Trajectoire */}
                <mesh>
                    <ringGeometry args={[Math.min(radiusCm / 5, 4) - 0.02, Math.min(radiusCm / 5, 4) + 0.02, 64]} />
                    <meshBasicMaterial color="#22d3ee" opacity={0.4} transparent side={THREE.DoubleSide} />
                </mesh>

                {/* Particule */}
                <mesh position={[particlePos.x, particlePos.y, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial
                        color={particleCharge > 0 ? '#ef4444' : '#3b82f6'}
                        emissive={particleCharge > 0 ? '#ef4444' : '#3b82f6'}
                        emissiveIntensity={1}
                    />
                    <pointLight color={particleCharge > 0 ? '#ef4444' : '#3b82f6'} intensity={1} distance={2} />
                </mesh>

                {/* Champ B Visuel */}
                {[...Array(12)].map((_, i) => (
                    <group key={i} position={[Math.cos(i) * 3, Math.sin(i) * 3, 0]}>
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <cylinderGeometry args={[0.01, 0.01, 1, 8]} />
                            <meshBasicMaterial color="#a855f7" opacity={0.3} transparent />
                        </mesh>
                    </group>
                ))}
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="⚡ Pilotage de Cyclotron"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-cyan-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🔬" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Vitesse v: {(velocity / 1e6).toFixed(1)} Mm/s</label>
                                    <input type="range" min="0.5" max="10" step="0.1" value={velocity / 1e6} onChange={(e) => setVelocity(parseFloat(e.target.value) * 1e6)} className="w-full h-1 bg-gray-700 accent-cyan-400 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Champ B: {magneticField.toFixed(2)} T</label>
                                    <input type="range" min="0.1" max="2" step="0.05" value={magneticField} onChange={(e) => setMagneticField(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-purple-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Charge: {particleCharge > 0 ? 'Proton' : 'Electron'}</label>
                                    <div className="flex gap-2">
                                        <button onClick={() => setParticleCharge(1)} className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${particleCharge > 0 ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400'}`}>+</button>
                                        <button onClick={() => setParticleCharge(-1)} className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${particleCharge < 0 ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>-</button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-cyan-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-cyan-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">PARTICLE_TRACKER_V2</div>
                                    <div className="text-[10px] font-mono"><span className="text-cyan-400">RAYON R:</span> {radiusCm.toFixed(2)} cm</div>
                                    <div className="text-[10px] font-mono"><span className="text-purple-400">FORCE F:</span> {(Math.abs(charge * velocity * magneticField) * 1e15).toFixed(2)} fN</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    R = (m · v) / (|q| · B)
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Trajectoire verrouillée ! Mission "${mission?.title}" réussie.`}
                points={250}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P7. LOI DE LAPLACE - VERSION AVANCÉE
// Mission: Ingénieur Audio - Concevoir un haut-parleur
// ============================================================
function LaplaceAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [current, setCurrent] = useState(2);
    const [wireLength, setWireLength] = useState(0.1);
    const [magneticField, setMagneticField] = useState(0.5);
    const [angle, setAngle] = useState(90);
    const [wirePosition, setWirePosition] = useState(0);

    const force = magneticField * current * wireLength * Math.sin(angle * Math.PI / 180);
    const forceMN = force * 1000;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Haut-parleur Smartphone', objective: 'Générez une force F = 50.0 mN (±5) pour un petit HP.', targetF: 50, tolerance: 5 },
        { id: 2, title: 'Enceinte Bluetooth', objective: 'Atteignez F = 150.0 mN (±15) pour une qualité Hi-Fi.', targetF: 150, tolerance: 15 },
        { id: 3, title: 'Woofer de Concert', objective: 'Configurez la bobine pour F = 500.0 mN (±50).', targetF: 500, tolerance: 50 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(forceMN - mission.targetF) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [forceMN, phase, mission, showSuccess]);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        setWirePosition(Math.sin(t * 20) * (forceMN / 500));
    });

    const handleSuccess = () => {
        setScore(s => s + 300);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={1.5}>
                {/* Aimants permanents */}
                <mesh position={[-1.2, 0, 0]}>
                    <boxGeometry args={[0.3, 2, 1]} />
                    <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.2} />
                </mesh>
                <mesh position={[1.2, 0, 0]}>
                    <boxGeometry args={[0.3, 2, 1]} />
                    <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} />
                </mesh>

                {/* Fil conducteur */}
                <mesh position={[0, wirePosition * 0.1, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, wireLength * 8, 16]} rotation={[0, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#fbbf24" metalness={0.8} />
                </mesh>

                {/* Vecteur Force */}
                <group position={[0, (wirePosition * 0.1) + 0.2, 0]}>
                    <mesh>
                        <cylinderGeometry args={[0.02, 0.02, Math.min(forceMN / 100, 1.5), 8]} />
                        <meshBasicMaterial color="#10b981" />
                    </mesh>
                    <mesh position={[0, Math.min(forceMN / 100, 1.5) / 2 + 0.05, 0]}>
                        <coneGeometry args={[0.08, 0.15, 8]} />
                        <meshBasicMaterial color="#10b981" />
                    </mesh>
                </group>
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🔊 Ingénierie Audio - Laplace"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-amber-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="🔊" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Courant I: {current.toFixed(1)} A</label>
                                    <input type="range" min="0.1" max="10" step="0.1" value={current} onChange={(e) => setCurrent(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-amber-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Longueur L: {(wireLength * 100).toFixed(0)} cm</label>
                                    <input type="range" min="0.01" max="0.3" step="0.01" value={wireLength} onChange={(e) => setWireLength(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Champ B: {magneticField.toFixed(2)} T</label>
                                    <input type="range" min="0.1" max="1.5" step="0.05" value={magneticField} onChange={(e) => setMagneticField(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-red-500 rounded-full" />
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-amber-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-amber-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">AUDIO_DRIVER_STATS</div>
                                    <div className="text-[10px] font-mono"><span className="text-amber-400">FORCE F:</span> {forceMN.toFixed(1)} mN</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">OFFSET:</span> {(wirePosition * 10).toFixed(2)} mm</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    F = B · I · L · sin(θ)
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Force optimisée ! Mission "${mission?.title}" terminée.`}
                points={300}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P8. INDUCTION RL - VERSION AVANCÉE  
// Mission: Ingénieur Électricien - Protéger les circuits
// ============================================================
function InductionRLAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [resistance, setResistance] = useState(100);
    const [inductance, setInductance] = useState(0.5);
    const [voltage, setVoltage] = useState(12);
    const [time, setTime] = useState(0);
    const [isCharging, setIsCharging] = useState(false);

    const tau = inductance / resistance;
    const tauMs = tau * 1000;
    const I_max = voltage / resistance;
    const currentI = isCharging ? I_max * (1 - Math.exp(-time / tau)) : I_max * Math.exp(-time / tau);

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Protection LED', objective: 'Ajustez τ = 1.00 ms (±0.2) pour protéger une diode.', targetTau: 1.0, tolerance: 0.2 },
        { id: 2, title: 'Filtre Audio', objective: 'Stabilisez τ = 5.00 ms (±0.5) pour un signal clair.', targetTau: 5.0, tolerance: 0.5 },
        { id: 3, title: 'Disjoncteur Industriel', objective: 'Configurez le dipôle pour τ = 15.00 ms (±1.5).', targetTau: 15.0, tolerance: 1.5 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(tauMs - mission.targetTau) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [tauMs, phase, mission, showSuccess]);

    useFrame((state, delta) => {
        if (isCharging || time > 0) {
            setTime(t => Math.max(0, t + delta));
        }
    });

    const handleSuccess = () => {
        setScore(s => s + 350);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={2}>
                {/* Bobine */}
                <mesh position={[-0.8, 0, 0]}>
                    <torusGeometry args={[0.3, 0.08, 16, 32]} />
                    <meshStandardMaterial color="#8b5cf6" metalness={0.6} emissive="#8b5cf6" emissiveIntensity={currentI / I_max} />
                </mesh>

                {/* Résistance */}
                <mesh position={[0.8, 0, 0]}>
                    <boxGeometry args={[0.6, 0.2, 0.2]} />
                    <meshStandardMaterial color="#78716c" />
                </mesh>

                {/* Flux de courant */}
                <mesh position={[0, -0.5, 0]}>
                    <boxGeometry args={[2, 0.05, 0.1]} />
                    <meshStandardMaterial color="#1e293b" />
                </mesh>
                <mesh position={[-1 + (currentI / I_max) * 2, -0.5, 0.1]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1} />
                </mesh>
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🔋 Dipôle RL - Induction"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-violet-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="⚡" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Inductance L: {inductance.toFixed(2)} H</label>
                                    <input type="range" min="0.01" max="2" step="0.01" value={inductance} onChange={(e) => setInductance(parseFloat(e.target.value))} className="w-full h-1 bg-gray-700 accent-violet-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Résistance R: {resistance} Ω</label>
                                    <input type="range" min="10" max="1000" step="10" value={resistance} onChange={(e) => setResistance(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-emerald-500 rounded-full" />
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => { setIsCharging(true); setTime(0); }} className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${isCharging ? 'bg-emerald-500' : 'bg-gray-800'}`}>CHARGER</button>
                                    <button onClick={() => { setIsCharging(false); setTime(0); }} className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${!isCharging ? 'bg-red-500' : 'bg-gray-800'}`}>DÉCHARGER</button>
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-violet-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-violet-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">CIRCUIT_MONITOR_RL</div>
                                    <div className="text-[10px] font-mono"><span className="text-violet-400">CONSTANTE τ:</span> {tauMs.toFixed(2)} ms</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">COURANT I:</span> {(currentI * 1000).toFixed(1)} mA</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    τ = L / R
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Circuit sécurisé ! Mission "${mission?.title}" réussie.`}
                points={350}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// ============================================================
// P9. DIPÔLE RC - VERSION AVANCÉE
// Mission: Ingénieur Flash - Concevoir un flash photo
// ============================================================
function DipoleRCAdvanced() {
    // États Globaux
    const [phase, setPhase] = useState('explore');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);

    // États Physiques
    const [resistance, setResistance] = useState(1000);
    const [capacitance, setCapacitance] = useState(100);
    const [voltage, setVoltage] = useState(300);
    const [chargePercent, setChargePercent] = useState(0);
    const [isCharging, setIsCharging] = useState(false);
    const [showFlash, setShowFlash] = useState(false);

    const C_farads = capacitance * 1e-6;
    const tau = resistance * C_farads;
    const tauMs = tau * 1000;
    const energy = 0.5 * C_farads * voltage * voltage;

    // Missions
    const missions = useMemo(() => [
        { id: 1, title: 'Flash Compact', objective: 'Réglez τ = 50.0 ms (±5) pour un flash rapide.', targetTau: 50.0, tolerance: 5 },
        { id: 2, title: 'Éclairage Studio', objective: 'Ajustez τ = 150.0 ms (±15) pour un portrait doux.', targetTau: 150.0, tolerance: 15 },
        { id: 3, title: 'Flash Master', objective: 'Configurez τ = 450.0 ms (±30) pour une puissance maximale.', targetTau: 450.0, tolerance: 30 }
    ], []);

    useEffect(() => {
        if (phase === 'mission' && !mission) {
            const m = missions[Math.min(level - 1, missions.length - 1)];
            setMission(m);
            setTimeLeft(45);
        }
    }, [phase, level, mission, missions]);

    useEffect(() => {
        if (phase === 'mission' && timeLeft > 0 && !showSuccess) {
            const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, phase, showSuccess]);

    useEffect(() => {
        if (phase === 'mission' && mission && !showSuccess) {
            if (Math.abs(tauMs - mission.targetTau) <= mission.tolerance) {
                handleSuccess();
            }
        }
    }, [tauMs, phase, mission, showSuccess]);

    useEffect(() => {
        if (isCharging && chargePercent < 99.9) {
            const step = (100 - chargePercent) * 0.1;
            const interval = setInterval(() => {
                setChargePercent(p => Math.min(100, p + step));
            }, tauMs / 10);
            return () => clearInterval(interval);
        }
    }, [isCharging, chargePercent, tauMs]);

    const triggerFlash = () => {
        if (chargePercent > 80) {
            setShowFlash(true);
            setChargePercent(0);
            setIsCharging(false);
            setTimeout(() => setShowFlash(false), 150);
        }
    };

    const handleSuccess = () => {
        setScore(s => s + 400);
        setShowSuccess(true);
        triggerFlash();
    };

    const nextMission = () => {
        setShowSuccess(false);
        setLevel(l => Math.min(l + 1, 3));
        setMission(null);
    };

    return (
        <group>
            {/* Scène 3D */}
            <group scale={2}>
                {/* Flash Effect */}
                {showFlash && (
                    <mesh>
                        <sphereGeometry args={[8, 32, 32]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} side={THREE.BackSide} />
                    </mesh>
                )}

                {/* Condensateur */}
                <group position={[-0.5, 0, 0]}>
                    <mesh position={[-0.1, 0, 0]}>
                        <boxGeometry args={[0.04, 0.8, 0.5]} />
                        <meshStandardMaterial color="#3b82f6" />
                    </mesh>
                    <mesh position={[0.1, 0, 0]}>
                        <boxGeometry args={[0.04, 0.8, 0.5]} />
                        <meshStandardMaterial color="#3b82f6" />
                    </mesh>
                    {/* Charge Visuelle */}
                    <mesh position={[0, -0.4 + (chargePercent / 100 * 0.4), 0]}>
                        <boxGeometry args={[0.16, chargePercent / 100 * 0.8, 0.48]} />
                        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={chargePercent / 150} />
                    </mesh>
                </group>

                {/* Résistance */}
                <mesh position={[0.6, 0, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} rotation={[0, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#78716c" />
                </mesh>
            </group>

            {/* UI Holographique */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="📸 Dipôle RC - Flash Photo"
                    showCloseButton={false}
                    defaultPosition="bottom-center"
                    className="w-[420px] border-yellow-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={2000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.objective} icon="📸" />
                        )}

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Capacité C: {capacitance} µF</label>
                                    <input type="range" min="10" max="1000" step="10" value={capacitance} onChange={(e) => setCapacitance(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-yellow-500 rounded-full" />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-400 block mb-1 uppercase tracking-wider font-bold">Résistance R: {resistance / 1000} kΩ</label>
                                    <input type="range" min="100" max="5000" step="100" value={resistance} onChange={(e) => setResistance(parseInt(e.target.value))} className="w-full h-1 bg-gray-700 accent-blue-500 rounded-full" />
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => setIsCharging(true)} className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${isCharging ? 'bg-emerald-500' : 'bg-gray-800'}`}>CHARGER</button>
                                    <button onClick={triggerFlash} className={`flex-1 py-1 rounded text-[10px] font-bold transition-all ${chargePercent > 80 ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-400 cursor-not-allowed'}`}>FLASH!</button>
                                </div>
                            </div>

                            <div className="bg-black/60 rounded-xl p-3 border border-yellow-500/20 flex flex-col justify-between shadow-inner">
                                <div className="space-y-1">
                                    <div className="text-[9px] text-yellow-500 font-mono tracking-tighter uppercase opacity-70 italic transform -skew-x-12 mb-1">FLASH_ENERGY_CAP</div>
                                    <div className="text-[10px] font-mono"><span className="text-yellow-400">CONSTANTE τ:</span> {tauMs.toFixed(1)} ms</div>
                                    <div className="text-[10px] font-mono"><span className="text-blue-400">ÉNERGIE W:</span> {(energy * 1000).toFixed(1)} mJ</div>
                                    <div className="text-[10px] font-mono"><span className="text-white">CHARGE:</span> {chargePercent.toFixed(1)}%</div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-white/5 text-[9px] text-gray-500 leading-tight italic">
                                    τ = R · C | W = ½ · C · U²
                                </div>
                            </div>
                        </div>
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={`Flash calibré ! Mission "${mission?.title}" réussie.`}
                points={400}
                onNext={nextMission}
            />
            <ConfettiExplosion active={showSuccess} />
        </group>
    );
}

// Export Partie 2
export { ChampMagnetiqueAdvanced as ChampMagnetiqueTS };
export { LorentzAdvanced as LorentzTS };
export { LaplaceAdvanced as LaplaceTS };
export { InductionRLAdvanced as InductionRLTS };
export { DipoleRCAdvanced as DipoleRCTS };
