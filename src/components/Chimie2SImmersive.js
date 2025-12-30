'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import {
    PhaseSelector,
    GradeBadge,
    MissionObjective,
    XPBar,
    ChallengeTimer,
    SuccessOverlay,
    ConfettiExplosion
} from './GamificationUtils';

// =========================================================
// 🧪 LABORATOIRE VIRTUEL DE SÉPARATION - AVEC MODE DÉFI
// Chapitres C1-C5 Chimie 2nde S
// =========================================================


// === SCÉNARIOS DE BASE ===
const BASE_SCENARIOS = {
    filtration: {
        id: 'filtration',
        title: '🧫 Filtration',
        technique: 'Filtration',
        description: 'Sépare un solide d\'un liquide grâce à un filtre',
        basePoints: 100,
    },
    decantation: {
        id: 'decantation',
        title: '⚗️ Décantation',
        technique: 'Décantation',
        description: 'Sépare deux liquides non miscibles par leur densité',
        basePoints: 120,
    },
    distillation: {
        id: 'distillation',
        title: '🔥 Distillation',
        technique: 'Distillation',
        description: 'Sépare des liquides miscibles par leur point d\'ébullition',
        basePoints: 150,
    },
    chromatographie: {
        id: 'chromatographie',
        title: '🎨 Chromatographie',
        technique: 'Chromatographie',
        description: 'Sépare les composants d\'un mélange par migration',
        basePoints: 130,
    }
};

// === DÉFIS ALÉATOIRES (Mode Défi) ===
const CHALLENGES = [
    // Filtration
    {
        id: 'c1',
        technique: 'filtration',
        title: '🏖️ Eau de Mer + Sable',
        context: 'Tu reviens de la plage de Ngor avec une bouteille d\'eau pleine de sable.',
        question: 'Quelle technique utiliser ?',
        answer: 'filtration',
        hints: ['Le sable est un solide', 'L\'eau est un liquide', 'Un filtre peut retenir les solides'],
        points: 100,
        timeLimit: 30,
    },
    {
        id: 'c2',
        technique: 'filtration',
        title: '☕ Café + Marc',
        context: 'Tu as préparé du café mais il y a du marc dedans.',
        question: 'Comment récupérer le café clair ?',
        answer: 'filtration',
        hints: ['Le marc est solide', 'Le café liquide doit passer'],
        points: 100,
        timeLimit: 25,
    },
    // Décantation
    {
        id: 'c3',
        technique: 'decantation',
        title: '🍳 Huile de Friture',
        context: 'Après avoir frit du poisson, il y a de l\'huile et de l\'eau mélangées.',
        question: 'Comment récupérer l\'huile propre ?',
        answer: 'decantation',
        hints: ['L\'huile flotte sur l\'eau', 'Les deux liquides ne se mélangent pas'],
        points: 120,
        timeLimit: 30,
    },
    {
        id: 'c4',
        technique: 'decantation',
        title: '🥗 Vinaigrette',
        context: 'Ta vinaigrette s\'est séparée en deux couches.',
        question: 'Quel phénomène explique cela ?',
        answer: 'decantation',
        hints: ['L\'huile et le vinaigre ont des densités différentes'],
        points: 110,
        timeLimit: 25,
    },
    // Distillation
    {
        id: 'c5',
        technique: 'distillation',
        title: '🧂 Eau Salée → Eau Potable',
        context: 'Tu es sur un bateau en mer. Comment obtenir de l\'eau potable ?',
        question: 'Quelle technique permet de dessaler l\'eau ?',
        answer: 'distillation',
        hints: ['L\'eau bout à 100°C', 'Le sel reste quand l\'eau s\'évapore'],
        points: 150,
        timeLimit: 35,
    },
    {
        id: 'c6',
        technique: 'distillation',
        title: '🌿 Huile Essentielle',
        context: 'Tu veux extraire l\'huile essentielle de la menthe.',
        question: 'Quelle technique utiliser ?',
        answer: 'distillation',
        hints: ['La vapeur emporte les molécules volatiles', 'On refroidit ensuite la vapeur'],
        points: 160,
        timeLimit: 40,
    },
    // Chromatographie
    {
        id: 'c7',
        technique: 'chromatographie',
        title: '🎨 Feutre Noir',
        context: 'Le noir est-il vraiment une seule couleur ?',
        question: 'Comment découvrir les colorants cachés ?',
        answer: 'chromatographie',
        hints: ['Les colorants migrent à des vitesses différentes', 'On utilise du papier et un solvant'],
        points: 130,
        timeLimit: 30,
    },
    {
        id: 'c8',
        technique: 'chromatographie',
        title: '🍃 Pigments de Feuille',
        context: 'Une feuille verte contient-elle seulement de la chlorophylle ?',
        question: 'Comment séparer les pigments ?',
        answer: 'chromatographie',
        hints: ['Les pigments ont des affinités différentes', 'On peut voir du jaune et de l\'orange'],
        points: 140,
        timeLimit: 35,
    },
];

export function SeparationLab() {
    // États Globaux & Gamification
    const [phase, setPhase] = useState('mission');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [mission, setMission] = useState(null);
    const [timeLeft, setTimeLeft] = useState(45);
    const [streak, setStreak] = useState(0);

    // États Physiques & Expérience
    const [scenario, setScenario] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedScenarios, setCompletedScenarios] = useState([]);
    const [challengeCompleted, setChallengeCompleted] = useState([]);

    // Timer pour le mode mission
    useEffect(() => {
        let timer;
        if (phase === 'mission' && mission && timeLeft > 0 && !showSuccess) {
            timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [phase, mission, timeLeft, showSuccess]);

    // Animation de progression
    useFrame((state, delta) => {
        if (isRunning && progress < 1) {
            const newProgress = Math.min(1, progress + delta * 0.15);
            setProgress(newProgress);

            const stepIndex = Math.floor(newProgress * 4);
            if (stepIndex !== currentStep && stepIndex < 4) {
                setCurrentStep(stepIndex);
            }

            if (newProgress >= 1) {
                setIsRunning(false);
                handleComplete();
            }
        }
    });

    const handleComplete = () => {
        if (scenario) {
            if (phase === 'explore') {
                if (!completedScenarios.includes(scenario.id)) {
                    setCompletedScenarios(prev => [...prev, scenario.id]);
                    setScore(prev => prev + (scenario.basePoints || 100));
                }
                setShowSuccess(true);
            } else if (phase === 'mission' && mission) {
                // Validation de la mission
                handleMissionSuccess();
            }
        }
    };

    const handleMissionSuccess = () => {
        const bonusTime = Math.floor(timeLeft / 2);
        const bonusStreak = streak * 20;
        const totalPoints = (mission.points || 100) + bonusTime + bonusStreak;

        setScore(prev => prev + totalPoints);
        setStreak(prev => prev + 1);
        setChallengeCompleted(prev => [...prev, mission.id]);
        setShowSuccess(true);
    };

    const nextMission = () => {
        setShowSuccess(false);
        const available = CHALLENGES.filter(c => !challengeCompleted.includes(c.id));

        if (available.length === 0) {
            setPhase('explore');
            setMission(null);
            setScenario(null);
            return;
        }

        const next = available[Math.floor(Math.random() * available.length)];
        setMission(next);
        setScenario(BASE_SCENARIOS[next.technique]);
        setTimeLeft(next.timeLimit || 45);
        resetExperiment();
    };

    const handleAnswer = (techniqueId) => {
        if (phase !== 'mission' || !mission) return;

        if (techniqueId === mission.technique) {
            // Bonne technique choisie, maintenant l'élève doit lancer l'expérience
            // On peut soit valider directement, soit forcer le "Lancer"
            // Ici on va forcer le "Lancer" pour voir l'animation 3D
            setScenario(BASE_SCENARIOS[techniqueId]);
            startExperiment();
        } else {
            setStreak(0);
            // On pourrait ajouter un feedback visuel d'erreur ici
        }
    };

    const startExperiment = () => {
        if (!scenario) return;
        setIsRunning(true);
        setProgress(0);
        setCurrentStep(0);
    };

    const resetExperiment = () => {
        setIsRunning(false);
        setProgress(0);
        setCurrentStep(0);
    };

    const selectScenario = (s) => {
        if (phase === 'mission') return;
        setScenario(s);
        resetExperiment();
    };

    // Initialisation Mission
    useEffect(() => {
        if (phase === 'mission' && !mission) {
            nextMission();
        }
    }, [phase]);

    // Étapes pour chaque technique
    const getSteps = (technique) => {
        const steps = {
            filtration: [
                "1. Prépare le filtre dans l'entonnoir",
                "2. Verse le mélange doucement",
                "3. Le solide reste dans le filtre",
                "4. Le liquide est récupéré"
            ],
            decantation: [
                "1. Verse dans l'ampoule à décanter",
                "2. Attends la séparation des phases",
                "3. Le plus dense va en bas",
                "4. Ouvre le robinet pour récupérer"
            ],
            distillation: [
                "1. Chauffe le mélange",
                "2. La vapeur monte dans le condenseur",
                "3. La vapeur se refroidit et condense",
                "4. Le liquide pur est collecté"
            ],
            chromatographie: [
                "1. Dépose l'échantillon sur le papier",
                "2. Trempe dans l'éluant",
                "3. Les composants migrent",
                "4. Observe la séparation"
            ]
        };
        return steps[technique] || [];
    };

    // === RENDU FILTRATION ===
    const renderFiltration = () => (
        <group position={[0, 0, 0]}>
            {/* Support */}
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 2, 8]} />
                <meshStandardMaterial color="#555" metalness={0.7} />
            </mesh>
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[1.2, 0.08, 0.2]} />
                <meshStandardMaterial color="#555" metalness={0.7} />
            </mesh>

            {/* Entonnoir */}
            <mesh position={[0.4, 1.2, 0]}>
                <coneGeometry args={[0.35, 0.5, 32, 1, true]} />
                <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.5} side={THREE.DoubleSide} />
            </mesh>

            {/* Papier filtre */}
            <mesh position={[0.4, 1.15, 0]}>
                <coneGeometry args={[0.3, 0.4, 32, 1, true]} />
                <meshStandardMaterial color="white" side={THREE.DoubleSide} />
            </mesh>

            {/* Erlenmeyer */}
            <mesh position={[0.4, 0.35, 0]}>
                <cylinderGeometry args={[0.12, 0.4, 0.6, 32]} />
                <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>

            {/* Liquide filtré */}
            {progress > 0.25 && (
                <mesh position={[0.4, 0.15 + progress * 0.15, 0]}>
                    <cylinderGeometry args={[0.35 * progress, 0.38, progress * 0.35, 32]} />
                    <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
                </mesh>
            )}

            {/* Bécher source */}
            <group position={[-0.6, 0.9, 0]} rotation={isRunning ? [0, 0, -0.6] : [0, 0, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.25, 0.3, 0.5, 32]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.4} side={THREE.DoubleSide} />
                </mesh>
                {progress < 0.8 && (
                    <mesh position={[0, -0.1, 0]}>
                        <cylinderGeometry args={[0.22, 0.27, 0.3 - progress * 0.3, 32]} />
                        <meshStandardMaterial color="#C4A27C" transparent opacity={0.8} />
                    </mesh>
                )}
            </group>

            {/* Résidu */}
            {progress > 0.3 && (
                <mesh position={[0.4, 1.0, 0]}>
                    <coneGeometry args={[0.12 + progress * 0.08, 0.08, 32]} />
                    <meshStandardMaterial color="#8B7355" />
                </mesh>
            )}

            {/* Gouttes */}
            {isRunning && progress > 0.2 && progress < 0.9 && (
                <mesh position={[0.4, 0.9 - (progress * 2 % 0.5), 0]}>
                    <sphereGeometry args={[0.03, 8, 8]} />
                    <meshStandardMaterial color="#87CEEB" transparent opacity={0.8} />
                </mesh>
            )}

            <Text position={[0, -0.5, 0]} fontSize={0.15} color="#60A5FA" anchorX="center">
                🧫 FILTRATION
            </Text>
        </group>
    );

    // === RENDU DÉCANTATION ===
    const renderDecantation = () => (
        <group position={[0, 0, 0]}>
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.4, 0.5, 0.12, 32]} />
                <meshStandardMaterial color="#444" />
            </mesh>
            <mesh position={[0, 0.8, -0.12]}>
                <cylinderGeometry args={[0.03, 0.03, 2, 8]} />
                <meshStandardMaterial color="#444" metalness={0.7} />
            </mesh>

            <group position={[0, 0.6, 0]}>
                <mesh>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>

                {/* Huile */}
                <mesh position={[0, 0.1, 0]}>
                    <sphereGeometry args={[0.37, 32, 16, 0, Math.PI * 2, 0, Math.PI * (0.45 - progress * 0.15)]} />
                    <meshStandardMaterial color="#FCD34D" transparent opacity={0.75} />
                </mesh>

                {/* Eau */}
                <mesh position={[0, -0.1, 0]}>
                    <sphereGeometry args={[0.37, 32, 16, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * (0.5 - progress * 0.35)]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.7} />
                </mesh>

                <mesh position={[0, -0.55, 0]}>
                    <cylinderGeometry args={[0.04, 0.04, 0.35, 16]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.4} />
                </mesh>

                <mesh position={[0, -0.7, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[0.08, -0.7, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.12, 8]} />
                    <meshStandardMaterial color={isRunning ? '#22C55E' : '#EF4444'} />
                </mesh>
            </group>

            <mesh position={[0, -0.55, 0]}>
                <cylinderGeometry args={[0.2, 0.25, 0.35, 32]} />
                <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>

            {progress > 0.3 && (
                <mesh position={[0, -0.65 + progress * 0.08, 0]}>
                    <cylinderGeometry args={[0.18, 0.22, progress * 0.2, 32]} />
                    <meshStandardMaterial color="#60A5FA" transparent opacity={0.7} />
                </mesh>
            )}

            <Text position={[0, -1, 0]} fontSize={0.15} color="#F59E0B" anchorX="center">
                ⚗️ DÉCANTATION
            </Text>
        </group>
    );

    // === RENDU DISTILLATION ===
    const renderDistillation = () => (
        <group position={[0, 0, 0]}>
            <mesh position={[-0.4, -0.3, 0]}>
                <cylinderGeometry args={[0.3, 0.35, 0.15, 32]} />
                <meshStandardMaterial color="#1F2937" />
            </mesh>

            {isRunning && (
                <group position={[-0.4, -0.15, 0]}>
                    <mesh>
                        <coneGeometry args={[0.08, 0.25, 16]} />
                        <meshStandardMaterial color="#FF6B00" emissive="#FF6B00" emissiveIntensity={0.8} transparent opacity={0.9} />
                    </mesh>
                    <mesh position={[0, 0.15, 0]}>
                        <coneGeometry args={[0.04, 0.12, 8]} />
                        <meshStandardMaterial color="#FFFF00" emissive="#FFFF00" emissiveIntensity={0.8} transparent opacity={0.7} />
                    </mesh>
                </group>
            )}

            <group position={[-0.4, 0.2, 0]}>
                <mesh>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                <mesh position={[0, -0.05, 0]}>
                    <sphereGeometry args={[0.27, 32, 16, 0, Math.PI * 2, Math.PI * 0.4, Math.PI * 0.6]} />
                    <meshStandardMaterial color="#93C5FD" transparent opacity={0.6} />
                </mesh>
                <mesh position={[0.08, 0.35, 0]} rotation={[0, 0, -0.3]}>
                    <cylinderGeometry args={[0.05, 0.06, 0.25, 16]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} />
                </mesh>

                {isRunning && progress > 0.2 && (
                    <>
                        <mesh position={[-0.05, -0.1 + (progress * 3 % 0.3), 0.05]}>
                            <sphereGeometry args={[0.02, 8, 8]} />
                            <meshStandardMaterial color="white" transparent opacity={0.4} />
                        </mesh>
                        <mesh position={[0.08, -0.15 + (progress * 2 % 0.25), -0.03]}>
                            <sphereGeometry args={[0.015, 8, 8]} />
                            <meshStandardMaterial color="white" transparent opacity={0.3} />
                        </mesh>
                    </>
                )}
            </group>

            <group position={[0.25, 0.6, 0]} rotation={[0, 0, -0.35]}>
                <mesh>
                    <cylinderGeometry args={[0.08, 0.08, 0.9, 16]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.03, 0.03, 1, 16]} />
                    <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.2} />
                </mesh>
                {isRunning && progress > 0.3 && (
                    <mesh position={[0, -0.2 + progress * 0.3, 0]}>
                        <cylinderGeometry args={[0.025, 0.025, progress * 0.5, 8]} />
                        <meshStandardMaterial color="#ADD8E6" transparent opacity={0.5} />
                    </mesh>
                )}
            </group>

            <mesh position={[0.7, -0.15, 0]}>
                <cylinderGeometry args={[0.08, 0.2, 0.35, 32]} />
                <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>

            {progress > 0.4 && (
                <mesh position={[0.7, -0.25 + progress * 0.08, 0]}>
                    <cylinderGeometry args={[0.15 * progress, 0.18, progress * 0.2, 32]} />
                    <meshStandardMaterial color="#E0F2FE" transparent opacity={0.6} />
                </mesh>
            )}

            <Text position={[0.15, -0.7, 0]} fontSize={0.15} color="#3B82F6" anchorX="center">
                🔥 DISTILLATION
            </Text>
        </group>
    );

    // === RENDU CHROMATOGRAPHIE ===
    const renderChromatographie = () => (
        <group position={[0, 0, 0]}>
            <mesh position={[0, 0.2, 0]}>
                <boxGeometry args={[0.9, 0.7, 0.4]} />
                <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.25} side={THREE.DoubleSide} />
            </mesh>

            <mesh position={[0, 0.58, 0]}>
                <boxGeometry args={[0.95, 0.05, 0.45]} />
                <meshPhysicalMaterial color="#E8F4F8" transparent opacity={0.3} />
            </mesh>

            <mesh position={[0, -0.1, 0]}>
                <boxGeometry args={[0.85, 0.12, 0.35]} />
                <meshStandardMaterial color="#C7D2FE" transparent opacity={0.5} />
            </mesh>

            <mesh position={[0, 0.25, 0]}>
                <planeGeometry args={[0.4, 0.75]} />
                <meshStandardMaterial color="#FAFAFA" side={THREE.DoubleSide} />
            </mesh>

            {progress < 0.25 && (
                <mesh position={[0, -0.1, 0.01]}>
                    <circleGeometry args={[0.05, 32]} />
                    <meshStandardMaterial color="#22C55E" />
                </mesh>
            )}

            {progress > 0.2 && (
                <>
                    <mesh position={[-0.05, -0.1 + progress * 0.45, 0.01]}>
                        <circleGeometry args={[0.04, 32]} />
                        <meshStandardMaterial color="#3B82F6" />
                    </mesh>
                    <mesh position={[0.05, -0.1 + progress * 0.3, 0.01]}>
                        <circleGeometry args={[0.035, 32]} />
                        <meshStandardMaterial color="#FACC15" />
                    </mesh>
                </>
            )}

            {progress > 0.15 && (
                <mesh position={[0, -0.15 + progress * 0.55, 0.005]}>
                    <planeGeometry args={[0.38, 0.01]} />
                    <meshStandardMaterial color="#93C5FD" />
                </mesh>
            )}

            {progress > 0.85 && (
                <>
                    <Text position={[-0.22, -0.1 + progress * 0.45, 0]} fontSize={0.04} color="#3B82F6">
                        Bleu
                    </Text>
                    <Text position={[0.22, -0.1 + progress * 0.3, 0]} fontSize={0.04} color="#CA8A04">
                        Jaune
                    </Text>
                </>
            )}

            <Text position={[0, -0.5, 0]} fontSize={0.15} color="#22C55E" anchorX="center">
                🎨 CHROMATOGRAPHIE
            </Text>
        </group>
    );

    return (
        <group>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-3, 3, 2]} intensity={0.5} color="#93C5FD" />

            {/* Paillasse */}
            <mesh position={[0, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 4]} />
                <meshStandardMaterial color="#1E293B" metalness={0.4} roughness={0.6} />
            </mesh>

            {/* Fond Immersif */}
            <mesh position={[0, 1.5, -3]}>
                <planeGeometry args={[10, 6]} />
                <meshStandardMaterial color="#0F172A" emissive="#111827" emissiveIntensity={0.5} />
            </mesh>

            {/* Rendu du montage */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                <group scale={1.2}>
                    {scenario?.id === 'filtration' && renderFiltration()}
                    {scenario?.id === 'decantation' && renderDecantation()}
                    {scenario?.id === 'distillation' && renderDistillation()}
                    {scenario?.id === 'chromatographie' && renderChromatographie()}
                </group>
            </Float>

            <ConfettiExplosion active={showSuccess} />

            {/* Message initial si aucun scénario */}
            {!scenario && (
                <Float speed={2} floatIntensity={0.5}>
                    <Text position={[0, 0.5, 0]} fontSize={0.16} color="#60A5FA" font="Inter" anchorX="center">
                        {phase === 'mission' ? "Choisissez la technique adaptée au défi !" : "Sélectionnez une technique pour explorer"}
                    </Text>
                </Float>
            )}

            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🧪 Expert en Séparation"
                    className="w-[400px] border-blue-500/30"
                >
                    <div className="text-white">
                        <div className="flex justify-between items-center mb-4">
                            <GradeBadge score={score} />
                            {phase === 'mission' && <ChallengeTimer timeLeft={timeLeft} maxTime={45} />}
                        </div>

                        <XPBar current={score} nextLevel={level * 1000} />

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />

                        <PhaseSelector currentPhase={phase} onSelect={setPhase} />

                        {phase === 'mission' && mission && (
                            <MissionObjective objective={mission.question} icon="🎯" />
                        )}

                        {/* Contexte du défi en mode mission */}
                        {phase === 'mission' && mission && !isRunning && progress === 0 && (
                            <div className="bg-blue-900/30 border border-blue-500/20 p-3 rounded-xl mb-4 animate-in fade-in slide-in-from-top-2 duration-500">
                                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                    Briefing de Mission
                                </div>
                                <p className="text-sm text-gray-200 italic">"{mission.context}"</p>
                            </div>
                        )}

                        {/* Protocole en mode explore */}
                        {phase === 'explore' && scenario && !isRunning && (
                            <div className="space-y-2 mb-4">
                                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">📋 Protocole</div>
                                {getSteps(scenario.id).map((step, i) => (
                                    <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg text-xs border border-white/5">
                                        <span className="w-4 h-4 rounded-full bg-blue-600/50 flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                                        {step}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Barre de Progression pendant l'expérience */}
                        {isRunning && (
                            <div className="bg-black/40 p-4 rounded-xl border border-blue-500/20 mb-4">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <div className="text-[10px] text-blue-400 font-mono italic">DATA_LINK_ACTIVE</div>
                                        <div className="text-xs font-bold">{getSteps(scenario?.id)[currentStep]}</div>
                                    </div>
                                    <div className="text-xl font-black text-blue-400">{Math.round(progress * 100)}%</div>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                        style={{ width: `${progress * 100}%` }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Grille de sélection des techniques */}
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            {Object.values(BASE_SCENARIOS).map(s => (
                                <button
                                    key={s.id}
                                    onClick={() => phase === 'mission' ? handleAnswer(s.id) : selectScenario(s)}
                                    disabled={isRunning}
                                    className={`p-3 rounded-xl text-left transition-all duration-300 border ${scenario?.id === s.id
                                            ? 'bg-blue-600/20 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-base">{s.title.split(' ')[0]}</span>
                                        {completedScenarios.includes(s.id) && <span className="text-emerald-400 text-[10px] font-bold">✓</span>}
                                    </div>
                                    <div className="font-bold text-xs">{s.title.split(' ')[1]}</div>
                                    <div className="text-[9px] text-gray-500 mt-1 uppercase font-bold tracking-tighter">+{s.basePoints} XP</div>
                                </button>
                            ))}
                        </div>

                        {/* Actions Principales */}
                        {scenario && !isRunning && progress === 0 && (
                            <button
                                onClick={startExperiment}
                                className="w-full mt-4 py-4 rounded-xl font-black text-sm uppercase tracking-widest bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                            >
                                <span className="text-xl">▶</span>
                                LANCER L'ANALYSE
                            </button>
                        )}

                        {progress === 1 && (
                            <button
                                onClick={resetExperiment}
                                className="w-full mt-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest bg-gray-800 hover:bg-gray-700 transition-all border border-white/10"
                            >
                                🔄 REFAIRE L'EXPÉRIENCE
                            </button>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            <SuccessOverlay
                show={showSuccess}
                message={phase === 'mission' ? `Mission réussie ! ${scenario?.title} effectuée.` : `Technique ${scenario?.title} maîtrisée !`}
                points={phase === 'mission' ? (mission?.points || 150) : (scenario?.basePoints || 100)}
                onNext={phase === 'mission' ? nextMission : () => { setShowSuccess(false); setScenario(null); }}
            />
        </group>
    );
}
