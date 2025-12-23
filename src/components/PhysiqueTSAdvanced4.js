'use client';
/**
 * Physique Terminale S - Simulations Avancées
 * Partie 4: Phénomènes Corpusculaires (Chapitres 13-15)
 * Mode Défi avec gamification complète
 */
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
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
// P13. EFFET PHOTOÉLECTRIQUE - VERSION AVANCÉE
// Mission: Ingénieur Cellule Solaire - Optimiser la production
// ============================================================
function PhotoelectriqueAdvanced() {
    const [wavelength, setWavelength] = useState(400);
    const [intensity, setIntensity] = useState(50);
    const [metalType, setMetalType] = useState('cesium');
    const [time, setTime] = useState(0);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetEnergy, setTargetEnergy] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    // Constantes
    const h = 6.626e-34;
    const c = 3e8;
    const eV = 1.602e-19;

    // Travaux d'extraction (en eV)
    const metals = {
        cesium: { name: 'Césium', W: 1.9, color: '#ffd700' },
        sodium: { name: 'Sodium', W: 2.3, color: '#c0c0c0' },
        zinc: { name: 'Zinc', W: 4.3, color: '#808080' },
        cuivre: { name: 'Cuivre', W: 4.7, color: '#b87333' }
    };

    const W = metals[metalType].W;
    const wavelengthM = wavelength * 1e-9;
    const photonEnergy = (h * c / wavelengthM) / eV; // en eV
    const kineticEnergy = Math.max(0, photonEnergy - W);
    const isPhotoelectric = photonEnergy > W;

    // Longueur d'onde seuil
    const lambdaSeuil = (h * c) / (W * eV) * 1e9; // en nm

    // Animation des photons et électrons
    const photonsRef = useRef([]);
    const electronsRef = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => setTime(t => t + 0.05), 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { energy: 0.5, tolerance: 0.1, hint: "Énergie cinétique faible" },
            { energy: 1.0, tolerance: 0.15, hint: "Énergie modérée" },
            { energy: 2.0, tolerance: 0.2, hint: "Électrons rapides" },
            { energy: 3.0, tolerance: 0.3, hint: "Haute énergie cinétique" }
        ];
        setTargetEnergy(targets[Math.min(level - 1, targets.length - 1)]);
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
        if (!targetEnergy) return;

        if (isPhotoelectric && Math.abs(kineticEnergy - targetEnergy.energy) <= targetEnergy.tolerance) {
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

    // Couleur selon longueur d'onde
    const getColor = (wl) => {
        if (wl < 450) return '#8b5cf6';
        if (wl < 495) return '#3b82f6';
        if (wl < 570) return '#22c55e';
        if (wl < 590) return '#eab308';
        if (wl < 620) return '#f97316';
        return '#ef4444';
    };

    return (
        <group>
            {/* Surface métallique */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <boxGeometry args={[3, 2, 0.3]} />
                <meshStandardMaterial color={metals[metalType].color} metalness={0.8} roughness={0.2} />
            </mesh>
            <Text position={[0, -1.5, 0]} fontSize={0.15} color="#ffffff">
                {metals[metalType].name} (W = {W} eV)
            </Text>

            {/* Source lumineuse */}
            <mesh position={[-2, 2, 0]}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial
                    color={getColor(wavelength)}
                    emissive={getColor(wavelength)}
                    emissiveIntensity={1}
                />
            </mesh>

            {/* Photons arrivants */}
            {Array.from({ length: Math.floor(intensity / 10) }).map((_, i) => {
                const phase = (time * 2 + i * 0.3) % 3;
                const x = -2 + phase * 0.8;
                const y = 2 - phase * 1.2;
                return phase < 2.5 ? (
                    <mesh key={`photon-${i}`} position={[x, y, (i % 3) * 0.3 - 0.3]}>
                        <sphereGeometry args={[0.08, 8, 8]} />
                        <meshStandardMaterial
                            color={getColor(wavelength)}
                            emissive={getColor(wavelength)}
                            emissiveIntensity={1}
                        />
                    </mesh>
                ) : null;
            })}

            {/* Électrons éjectés */}
            {isPhotoelectric && Array.from({ length: Math.floor(intensity / 20) }).map((_, i) => {
                const phase = (time * 3 + i * 0.5) % 2;
                const x = (i % 3 - 1) * 0.5;
                const y = -0.8 + phase * kineticEnergy * 0.8;
                return (
                    <mesh key={`electron-${i}`} position={[x, y, (i % 2) * 0.4 - 0.2]}>
                        <sphereGeometry args={[0.06, 8, 8]} />
                        <meshStandardMaterial
                            color="#22d3ee"
                            emissive="#22d3ee"
                            emissiveIntensity={0.8}
                        />
                    </mesh>
                );
            })}

            {/* Indicateur d'effet */}
            <Text position={[2, 0, 0]} fontSize={0.2} color={isPhotoelectric ? "#22c55e" : "#ef4444"}>
                {isPhotoelectric ? "✓ Effet photo-\n  électrique" : "✗ Pas d'effet\n  (λ > λ₀)"}
            </Text>

            {/* Panneau de contrôle */}
            <DraggableHtmlPanel title="☀️ Effet Photoélectrique" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '300px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetEnergy && (
                                <div style={{
                                    background: 'rgba(234,179,8,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(234,179,8,0.5)'
                                }}>
                                    <strong>🔋 Mission Cellule Solaire:</strong><br />
                                    Ec = {targetEnergy.energy} eV (±{targetEnergy.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetEnergy.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                        <label>Métal:</label>
                        <select
                            value={metalType}
                            onChange={(e) => setMetalType(e.target.value)}
                            style={{
                                width: '100%', padding: '8px', borderRadius: '6px',
                                background: '#1e293b', color: 'white', border: '1px solid #475569'
                            }}
                        >
                            {Object.entries(metals).map(([key, val]) => (
                                <option key={key} value={key}>{val.name} (W = {val.W} eV)</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>λ: {wavelength} nm</label>
                        <input type="range" min="200" max="700" value={wavelength}
                            onChange={(e) => setWavelength(parseInt(e.target.value))}
                            style={{ width: '100%', accentColor: getColor(wavelength) }} />
                        <div style={{
                            height: '10px', borderRadius: '5px',
                            background: 'linear-gradient(to right, #8b5cf6, #3b82f6, #22c55e, #eab308, #f97316, #ef4444)',
                            marginTop: '5px'
                        }} />
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label>Intensité: {intensity}%</label>
                        <input type="range" min="10" max="100" value={intensity}
                            onChange={(e) => setIntensity(parseInt(e.target.value))} style={{ width: '100%' }} />
                    </div>

                    <div style={{
                        background: isPhotoelectric ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center',
                        border: `1px solid ${isPhotoelectric ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)'}`
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Énergie photon: {photonEnergy.toFixed(2)} eV</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: isPhotoelectric ? '#22c55e' : '#ef4444' }}>
                            Ec = {kineticEnergy.toFixed(2)} eV
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>
                            λ₀ = {lambdaSeuil.toFixed(0)} nm | Ec = hν - W
                        </div>
                    </div>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #eab308, #ca8a04)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider énergie' : '🎮 Mode Défi Solaire'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Énergie optimale!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P14. NIVEAUX D'ÉNERGIE - VERSION AVANCÉE
// Mission: Spectroscopiste - Identifier les raies spectrales
// ============================================================
function NiveauxEnergieAdvanced() {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [selectedTransition, setSelectedTransition] = useState(null);
    const [showPhoton, setShowPhoton] = useState(false);
    const [photonPhase, setPhotonPhase] = useState(0);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetWavelength, setTargetWavelength] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    // Constantes
    const h = 6.626e-34;
    const c = 3e8;
    const eV = 1.602e-19;

    // Niveaux d'énergie de l'hydrogène (en eV)
    const energyLevels = [
        { n: 1, E: -13.6, y: -2 },
        { n: 2, E: -3.4, y: -0.5 },
        { n: 3, E: -1.51, y: 0.5 },
        { n: 4, E: -0.85, y: 1.2 },
        { n: 5, E: -0.54, y: 1.7 },
        { n: 6, E: -0.38, y: 2.0 }
    ];

    // Transitions possibles (série visible - Balmer)
    const transitions = [
        { from: 3, to: 2, name: "Hα (rouge)" },
        { from: 4, to: 2, name: "Hβ (cyan)" },
        { from: 5, to: 2, name: "Hγ (bleu)" },
        { from: 6, to: 2, name: "Hδ (violet)" }
    ];

    // Calcul de la longueur d'onde pour une transition
    const getTransitionWavelength = (from, to) => {
        const E1 = energyLevels.find(l => l.n === from).E;
        const E2 = energyLevels.find(l => l.n === to).E;
        const deltaE = Math.abs(E1 - E2) * eV;
        const wavelength = (h * c / deltaE) * 1e9;
        return wavelength;
    };

    const getColorFromWavelength = (wl) => {
        if (wl > 620) return '#ef4444'; // Rouge
        if (wl > 590) return '#f97316'; // Orange
        if (wl > 570) return '#eab308'; // Jaune
        if (wl > 495) return '#22c55e'; // Vert
        if (wl > 450) return '#22d3ee'; // Cyan
        return '#8b5cf6'; // Violet
    };

    useEffect(() => {
        if (showPhoton) {
            const interval = setInterval(() => {
                setPhotonPhase(p => {
                    if (p >= 1) {
                        setShowPhoton(false);
                        return 0;
                    }
                    return p + 0.05;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [showPhoton]);

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { wavelength: 656, tolerance: 10, hint: "Raie Hα - Rouge vif" },
            { wavelength: 486, tolerance: 8, hint: "Raie Hβ - Cyan" },
            { wavelength: 434, tolerance: 8, hint: "Raie Hγ - Bleu" },
            { wavelength: 410, tolerance: 5, hint: "Raie Hδ - Violet" }
        ];
        setTargetWavelength(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        generateChallenge();
    };

    const executeTransition = (trans) => {
        setSelectedTransition(trans);
        setCurrentLevel(trans.from);
        setShowPhoton(true);
        setPhotonPhase(0);

        setTimeout(() => {
            setCurrentLevel(trans.to);
        }, 500);
    };

    const checkAnswer = () => {
        if (!targetWavelength || !selectedTransition) return;

        const actualWl = getTransitionWavelength(selectedTransition.from, selectedTransition.to);
        if (Math.abs(actualWl - targetWavelength.wavelength) <= targetWavelength.tolerance) {
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
                setSelectedTransition(null);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            {/* Diagramme des niveaux */}
            {energyLevels.map((lvl, i) => (
                <group key={lvl.n} position={[0, lvl.y, 0]}>
                    {/* Ligne du niveau */}
                    <Line
                        points={[[-2, 0, 0], [2, 0, 0]]}
                        color={currentLevel === lvl.n ? '#22d3ee' : '#64748b'}
                        lineWidth={currentLevel === lvl.n ? 3 : 1}
                    />
                    {/* Label */}
                    <Text position={[-2.5, 0, 0]} fontSize={0.15} color="#ffffff">
                        n={lvl.n}
                    </Text>
                    <Text position={[2.5, 0, 0]} fontSize={0.12} color="#94a3b8">
                        E={lvl.E} eV
                    </Text>
                </group>
            ))}

            {/* Électron */}
            <mesh position={[0, energyLevels.find(l => l.n === currentLevel)?.y || 0, 0.2]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} />
            </mesh>

            {/* Photon émis */}
            {showPhoton && selectedTransition && (() => {
                const wl = getTransitionWavelength(selectedTransition.from, selectedTransition.to);
                const color = getColorFromWavelength(wl);
                const fromY = energyLevels.find(l => l.n === selectedTransition.from).y;
                const toY = energyLevels.find(l => l.n === selectedTransition.to).y;
                const x = 0.5 + photonPhase * 2;
                const y = fromY + (toY - fromY) * photonPhase;
                return (
                    <mesh position={[x, y, 0]}>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
                    </mesh>
                );
            })()}

            {/* Spectre */}
            <group position={[0, -3, 0]}>
                <Text position={[0, 0.3, 0]} fontSize={0.15} color="white">Spectre de l'Hydrogène</Text>
                <mesh>
                    <boxGeometry args={[4, 0.3, 0.1]} />
                    <meshStandardMaterial color="#0f172a" />
                </mesh>
                {transitions.map((trans, i) => {
                    const wl = getTransitionWavelength(trans.from, trans.to);
                    const color = getColorFromWavelength(wl);
                    const x = ((wl - 400) / 300) * 3.5 - 1.75;
                    return (
                        <mesh key={i} position={[x, 0, 0.1]}>
                            <boxGeometry args={[0.05, 0.25, 0.02]} />
                            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
                        </mesh>
                    );
                })}
            </group>

            {/* Panneau de contrôle */}
            <DraggableHtmlPanel title="⚛️ Niveaux d'Énergie" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '300px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetWavelength && (
                                <div style={{
                                    background: 'rgba(139,92,246,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(139,92,246,0.5)'
                                }}>
                                    <strong>🔬 Mission Spectroscopie:</strong><br />
                                    λ = {targetWavelength.wavelength} nm (±{targetWavelength.tolerance})<br />
                                    <small style={{ color: '#94a3b8' }}>{targetWavelength.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ fontSize: '12px', color: '#94a3b8' }}>Transitions (Série de Balmer):</label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
                            {transitions.map((trans, i) => {
                                const wl = getTransitionWavelength(trans.from, trans.to);
                                const color = getColorFromWavelength(wl);
                                return (
                                    <button
                                        key={i}
                                        onClick={() => executeTransition(trans)}
                                        style={{
                                            padding: '8px',
                                            background: selectedTransition === trans ? color : '#1e293b',
                                            border: `2px solid ${color}`,
                                            borderRadius: '6px',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '11px'
                                        }}
                                    >
                                        n={trans.from}→{trans.to}<br />
                                        <span style={{ fontSize: '10px', color: '#94a3b8' }}>{Math.round(wl)} nm</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {selectedTransition && (
                        <div style={{
                            background: 'rgba(34,211,238,0.2)',
                            padding: '10px',
                            borderRadius: '8px',
                            marginBottom: '15px',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Transition sélectionnée</div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#22d3ee' }}>
                                {selectedTransition.name}
                            </div>
                            <div style={{ fontSize: '14px', color: getColorFromWavelength(getTransitionWavelength(selectedTransition.from, selectedTransition.to)) }}>
                                λ = {getTransitionWavelength(selectedTransition.from, selectedTransition.to).toFixed(1)} nm
                            </div>
                        </div>
                    )}

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Identifier la raie' : '🎮 Mode Défi Spectroscopie'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Raie identifiée!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// ============================================================
// P15. RÉACTIONS NUCLÉAIRES - VERSION AVANCÉE
// Mission: Ingénieur Nucléaire - Contrôler la réaction
// ============================================================
function NucleaireAdvanced() {
    const [reactionType, setReactionType] = useState('fission');
    const [controlRods, setControlRods] = useState(50);
    const [neutronCount, setNeutronCount] = useState(1);
    const [time, setTime] = useState(0);
    const [isReacting, setIsReacting] = useState(false);
    const [chainReaction, setChainReaction] = useState([]);
    const [challengeMode, setChallengeMode] = useState(false);
    const [targetPower, setTargetPower] = useState(null);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [level, setLevel] = useState(1);

    // Simulation de la réaction
    const k = (100 - controlRods) / 50; // Facteur de multiplication
    const power = Math.min(100, neutronCount * k * 10);
    const isCritical = k > 1 && controlRods < 60;
    const isStable = k >= 0.8 && k <= 1.2;

    useEffect(() => {
        if (isReacting) {
            const interval = setInterval(() => {
                setTime(t => t + 0.1);
                setNeutronCount(n => {
                    const newN = n * k;
                    return Math.min(100, Math.max(0.1, newN));
                });

                // Ajouter des particules à la réaction en chaîne
                if (Math.random() < k * 0.3) {
                    setChainReaction(prev => [
                        ...prev.slice(-20),
                        {
                            id: Date.now(),
                            x: (Math.random() - 0.5) * 2,
                            y: (Math.random() - 0.5) * 2,
                            z: (Math.random() - 0.5) * 2
                        }
                    ]);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isReacting, k]);

    useEffect(() => {
        if (challengeMode && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [challengeMode, timeLeft]);

    const generateChallenge = useCallback(() => {
        const targets = [
            { power: 50, tolerance: 10, hint: "Puissance modérée" },
            { power: 70, tolerance: 8, hint: "Haute puissance" },
            { power: 30, tolerance: 8, hint: "Puissance réduite" },
            { power: 80, tolerance: 5, hint: "Puissance maximale stable" }
        ];
        setTargetPower(targets[Math.min(level - 1, targets.length - 1)]);
    }, [level]);

    const startChallenge = () => {
        setChallengeMode(true);
        setTimeLeft(60);
        setScore(0);
        setStreak(0);
        setLevel(1);
        setIsReacting(true);
        setNeutronCount(1);
        generateChallenge();
    };

    const checkAnswer = () => {
        if (!targetPower) return;

        if (Math.abs(power - targetPower.power) <= targetPower.tolerance && isStable) {
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
                setNeutronCount(1);
            }, 2000);
        } else {
            setStreak(0);
        }
    };

    return (
        <group>
            {/* Cœur du réacteur */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 2, 32]} />
                <meshStandardMaterial
                    color={isCritical ? "#ef4444" : isStable ? "#22c55e" : "#3b82f6"}
                    emissive={isCritical ? "#ef4444" : "#22d3ee"}
                    emissiveIntensity={power / 100 * 0.5}
                    transparent
                    opacity={0.7}
                />
            </mesh>

            {/* Barres de contrôle */}
            {[-0.8, 0, 0.8].map((x, i) => (
                <mesh key={i} position={[x, 1 + (controlRods / 100) * 1.5, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
                    <meshStandardMaterial color="#64748b" metalness={0.8} />
                </mesh>
            ))}

            {/* Particules de la réaction */}
            {chainReaction.map((particle, i) => (
                <mesh key={particle.id} position={[particle.x, particle.y, particle.z]}>
                    <sphereGeometry args={[0.08, 8, 8]} />
                    <meshStandardMaterial
                        color={i % 2 === 0 ? "#22d3ee" : "#fbbf24"}
                        emissive={i % 2 === 0 ? "#22d3ee" : "#fbbf24"}
                        emissiveIntensity={0.8}
                    />
                </mesh>
            ))}

            {/* Légende des particules */}
            <Text position={[-2.5, 1, 0]} fontSize={0.12} color="#22d3ee">● Neutrons</Text>
            <Text position={[-2.5, 0.7, 0]} fontSize={0.12} color="#fbbf24">● Fragments</Text>

            {/* Indicateur de criticité */}
            <group position={[2.5, 0, 0]}>
                <Text position={[0, 0.5, 0]} fontSize={0.15} color="white">État:</Text>
                <Text
                    position={[0, 0, 0]}
                    fontSize={0.18}
                    color={isCritical ? "#ef4444" : isStable ? "#22c55e" : "#3b82f6"}
                >
                    {isCritical ? "⚠️ CRITIQUE" : isStable ? "✓ STABLE" : "📉 Sous-critique"}
                </Text>
            </group>

            {/* Équation de fission */}
            <Text position={[0, -2, 0]} fontSize={0.12} color="#94a3b8">
                ²³⁵U + n → ¹⁴⁴Ba + ⁸⁹Kr + 3n + Énergie
            </Text>

            {/* Panneau de contrôle */}
            <DraggableHtmlPanel title="☢️ Réacteur Nucléaire" defaultPosition="top-right">
                <div className="no-drag" style={{ padding: '15px', color: 'white', width: '300px' }}>
                    {challengeMode && (
                        <>
                            <ChallengeTimer timeLeft={timeLeft} maxTime={60} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                <span>🎯 Score: {score}</span>
                                <span>🔥 Streak: {streak}</span>
                            </div>
                            {targetPower && (
                                <div style={{
                                    background: 'rgba(234,179,8,0.2)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '15px',
                                    border: '1px solid rgba(234,179,8,0.5)'
                                }}>
                                    <strong>⚡ Mission Contrôle:</strong><br />
                                    P = {targetPower.power}% (±{targetPower.tolerance}%)<br />
                                    <small style={{ color: '#94a3b8' }}>{targetPower.hint}</small>
                                </div>
                            )}
                        </>
                    )}

                    <div style={{ marginBottom: '15px' }}>
                        <label>🎛️ Barres de Contrôle: {controlRods}%</label>
                        <input type="range" min="0" max="100" value={controlRods}
                            onChange={(e) => setControlRods(parseInt(e.target.value))}
                            style={{ width: '100%' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b' }}>
                            <span>Retirées (k↑)</span>
                            <span>Insérées (k↓)</span>
                        </div>
                    </div>

                    <div style={{
                        background: isCritical ? 'rgba(239,68,68,0.3)' : isStable ? 'rgba(34,197,94,0.2)' : 'rgba(59,130,246,0.2)',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '15px',
                        textAlign: 'center',
                        border: `1px solid ${isCritical ? 'rgba(239,68,68,0.5)' : isStable ? 'rgba(34,197,94,0.5)' : 'rgba(59,130,246,0.5)'}`
                    }}>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>Puissance</div>
                        <div style={{ fontSize: '28px', fontWeight: 'bold', color: isCritical ? '#ef4444' : '#22c55e' }}>
                            {power.toFixed(0)}%
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>
                            k = {k.toFixed(2)} | {isCritical ? "⚠️ DANGER" : isStable ? "✓ Contrôlé" : "Sous-critique"}
                        </div>
                    </div>

                    <button
                        onClick={() => { setIsReacting(!isReacting); if (!isReacting) setNeutronCount(1); }}
                        style={{
                            width: '100%', padding: '10px',
                            background: isReacting ? '#ef4444' : '#10b981',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold',
                            cursor: 'pointer', marginBottom: '10px'
                        }}
                    >
                        {isReacting ? '⏹ Arrêter réaction' : '▶ Démarrer réaction'}
                    </button>

                    <button onClick={challengeMode ? checkAnswer : startChallenge}
                        style={{
                            width: '100%', padding: '12px',
                            background: challengeMode ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #f97316, #ea580c)',
                            border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer'
                        }}>
                        {challengeMode ? '✓ Valider puissance' : '🎮 Mode Défi Ingénieur'}
                    </button>
                </div>
            </DraggableHtmlPanel>

            {showSuccess && <SuccessOverlay message="Réacteur contrôlé!" />}
            {showConfetti && <ConfettiExplosion />}
        </group>
    );
}

// Export Partie 4
export { PhotoelectriqueAdvanced as PhotoelectriqueTS };
export { NiveauxEnergieAdvanced as NiveauxEnergieTS };
export { NucleaireAdvanced as NucleaireTS };
