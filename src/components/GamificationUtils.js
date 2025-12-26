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
