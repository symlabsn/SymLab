'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// ============================================================
// COMPOSANTS GAMIFICATION PARTAGÉS
// ============================================================

/**
 * Overlay de succès affiché via un portail HTML
 * @param {boolean} show - Afficher l'overlay
 * @param {string} message - Message de félicitations
 * @param {number} points - Points gagnés
 * @param {function} onNext - Fonction callback pour continuer
 */
export function SuccessOverlay({ show, message, points, onNext }) {
    if (!show) return null;
    return (
        <Html center style={{ pointerEvents: 'none' }} zIndexRange={[1000, 0]}>
            <div className="flex flex-col items-center justify-center p-4" style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}>
                <div className="bg-black/90 backdrop-blur-md p-8 rounded-3xl border-4 border-yellow-500 text-center shadow-[0_0_50px_rgba(234,179,8,0.5)] transform transition-all animate-in zoom-in slide-in-from-bottom-10 fade-in duration-500 pointer-events-auto">
                    <div className="text-6xl mb-4 animate-bounce">🏆</div>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 mb-2">
                        EXCELLENT !
                    </div>
                    <div className="text-white text-xl mb-6 font-medium max-w-md mx-auto">{message}</div>

                    {points && (
                        <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-xl p-4 mb-6 border border-yellow-500/30">
                            <div className="text-yellow-400 font-mono text-xs uppercase tracking-wider mb-1">Récompense</div>
                            <div className="text-4xl font-bold text-white drop-shadow-md">+{points} XP</div>
                        </div>
                    )}

                    {onNext && (
                        <button onClick={onNext} className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-bold text-xl hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2">
                            Continuer l'aventure 🚀
                        </button>
                    )}
                </div>
            </div>
        </Html>
    );
}

/**
 * Timer visuel pour les défis
 * @param {number} timeLeft - Temps restant en secondes
 * @param {number} maxTime - Temps total initial (pour la barre de progression)
 */
export function ChallengeTimer({ timeLeft, maxTime }) {
    const progress = Math.max(0, Math.min(1, timeLeft / maxTime));
    const color = progress > 0.5 ? '#4ADE80' : progress > 0.25 ? '#FBBF24' : '#EF4444';

    return (
        <div className="flex items-center gap-2 bg-black/40 rounded-lg px-3 py-1">
            <div className="text-lg">⏱️</div>
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full transition-all duration-300 transform origin-left"
                    style={{ width: `${progress * 100}%`, backgroundColor: color }}
                />
            </div>
            <div className="font-mono text-sm w-8 text-right" style={{ color }}>{timeLeft}s</div>
        </div>
    );
}

/**
 * Explosion de confettis en 3D
 * @param {boolean} active - Déclenche l'animation
 */
export function ConfettiExplosion({ active }) {
    if (!active) return null;
    return (
        <group>
            {Array.from({ length: 80 }).map((_, i) => (
                <ConfettiParticle key={i} />
            ))}
            <pointLight position={[0, 5, 0]} intensity={2} color="#FFD700" distance={10} decay={2} />
        </group>
    );
}

function ConfettiParticle() {
    const ref = useRef();
    const [data] = useState(() => ({
        pos: [0, 0, 0],
        vel: [(Math.random() - 0.5) * 8, Math.random() * 8 + 5, (Math.random() - 0.5) * 8],
        rot: [Math.random(), Math.random(), Math.random()],
        color: ['#FCD34D', '#F472B6', '#60A5FA', '#34D399', '#A78BFA'][Math.floor(Math.random() * 5)],
        spin: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]
    }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.position.x += data.vel[0] * delta;
            ref.current.position.y += data.vel[1] * delta;
            ref.current.position.z += data.vel[2] * delta;
            ref.current.rotation.x += data.spin[0] * delta;
            ref.current.rotation.y += data.spin[1] * delta;
            data.vel[1] -= 9.8 * delta; // Gravity
        }
    });

    return (
        <mesh ref={ref} position={data.pos} rotation={data.rot}>
            <planeGeometry args={[0.15, 0.15]} />
            <meshBasicMaterial color={data.color} side={THREE.DoubleSide} />
        </mesh>
    );
}

/**
 * Traînée de particules pour les objets en mouvement
 * @param {boolean} active - Active l'émission
 * @param {string} color - Couleur des particules
 * @param {number} count - Nombre de particules
 */
export function ParticleTrail({ active, color = '#FFD700', count = 30 }) {
    const particles = useRef([]);

    useFrame((state) => {
        if (!active) return;
        particles.current.forEach((p, i) => {
            if (p) {
                p.position.y += Math.sin(state.clock.elapsedTime * 2 + i) * 0.02;
                p.rotation.z += 0.05;
            }
        });
    });

    if (!active) return null;

    return (
        <group>
            {Array.from({ length: count }).map((_, i) => (
                <Sphere
                    key={i}
                    ref={el => particles.current[i] = el}
                    args={[0.05]}
                    position={[
                        (Math.random() - 0.5) * 6,
                        (Math.random() - 0.5) * 4,
                        (Math.random() - 0.5) * 2
                    ]}
                >
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.7} />
                </Sphere>
            ))}
        </group>
    );
}
/**
 * Badge de Grade dynamique
 */
export function GradeBadge({ score }) {
    const getGrade = (s) => {
        if (s >= 2000) return { name: 'Maître des Sciences 🧠', color: '#f59e0b', bg: 'rgba(245,158,11,0.2)' };
        if (s >= 1000) return { name: 'Expert Scientifique 👨‍🔬', color: '#8b5cf6', bg: 'rgba(139,92,246,0.2)' };
        if (s >= 500) return { name: 'Ingénieur Senior 🛠️', color: '#22d3ee', bg: 'rgba(34,211,238,0.2)' };
        return { name: 'Apprenti Chercheur 🔭', color: '#4ade80', bg: 'rgba(74,222,128,0.2)' };
    };

    const grade = getGrade(score);

    return (
        <div style={{
            background: grade.bg,
            border: `1px solid ${grade.color}`,
            color: grade.color,
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
        }}>
            {grade.name}
        </div>
    );
}

/**
 * Barre d'XP fluide
 */
export function XPBar({ current, nextLevel }) {
    const progress = Math.min(100, (current / nextLevel) * 100);
    return (
        <div className="w-full mt-2">
            <div className="flex justify-between text-[10px] text-gray-400 mb-1 px-1">
                <span>XP PROGRESSION</span>
                <span>{current} / {nextLevel}</span>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}

/**
 * Sélecteur de phase (Exploration / Entraînement / Mission)
 */
export function PhaseSelector({ currentPhase, onSelect }) {
    const phases = [
        { id: 'explore', label: '🔭 Explorer', color: '#94a3b8' },
        { id: 'train', label: '🎓 S\'entraîner', color: '#6366f1' },
        { id: 'mission', label: '⚡ MISSION', color: '#f59e0b', bold: true }
    ];

    return (
        <div className="flex p-1 bg-black/40 rounded-xl mb-4">
            {phases.map(p => (
                <button
                    key={p.id}
                    onClick={() => onSelect(p.id)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all ${currentPhase === p.id
                        ? 'bg-white/10 text-white shadow-lg'
                        : 'text-gray-500 hover:text-gray-300'
                        }`}
                    style={{ color: currentPhase === p.id ? (p.bold ? p.color : 'white') : '' }}
                >
                    {p.label}
                </button>
            ))}
        </div>
    );
}

/**
 * Objectif de mission holographique
 */
export function MissionObjective({ objective, icon = "🎯" }) {
    return (
        <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
            <div className="relative p-3 border-l-4 border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent">
                <div className="flex items-start gap-2">
                    <span className="text-xl animate-pulse">{icon}</span>
                    <div>
                        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Objectif en cours</div>
                        <div className="text-white text-sm font-medium leading-tight">{objective}</div>
                    </div>
                </div>
            </div>
            {/* Holographic scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-[1px] bg-blue-400 animate-[scan_3s_linear_infinite]" />
            </div>
        </div>
    );
}
