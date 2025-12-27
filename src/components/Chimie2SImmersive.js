'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import DraggableHtmlPanel from './DraggableHtmlPanel';
import { ConfettiExplosion as Confetti } from './GamificationUtils';

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
    // États généraux
    const [mode, setMode] = useState('libre'); // 'libre' ou 'defi'
    const [scenario, setScenario] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    // Mode Défi
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [challengeAnswer, setChallengeAnswer] = useState(null);
    const [showHint, setShowHint] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState([]);
    const [streak, setStreak] = useState(0);

    // Timer pour le mode défi
    useEffect(() => {
        let timer;
        if (mode === 'defi' && currentChallenge && timeLeft > 0 && !challengeAnswer) {
            timer = setInterval(() => {
                setTimeLeft(t => {
                    if (t <= 1) {
                        // Temps écoulé - mauvaise réponse
                        handleChallengeAnswer('timeout');
                        return 0;
                    }
                    return t - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [mode, currentChallenge, timeLeft, challengeAnswer]);

    // Animation
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
        if (scenario && !completed.includes(scenario.id)) {
            setCompleted(prev => [...prev, scenario.id]);
            const points = scenario.basePoints || 100;
            setScore(prev => prev + points);
            setShowSuccess(true);
        }
    };

    // === MODE DÉFI ===
    const startChallengeMode = () => {
        setMode('defi');
        nextChallenge();
    };

    const nextChallenge = () => {
        const available = CHALLENGES.filter(c => !challengeCompleted.includes(c.id));
        if (available.length === 0) {
            // Tous les défis terminés
            setCurrentChallenge(null);
            return;
        }
        const challenge = available[Math.floor(Math.random() * available.length)];
        setCurrentChallenge(challenge);
        setChallengeAnswer(null);
        setShowHint(0);
        setTimeLeft(challenge.timeLimit);

        // Sélectionner la technique correspondante
        setScenario(BASE_SCENARIOS[challenge.technique]);
        resetExperiment();
    };

    const handleChallengeAnswer = (answer) => {
        setChallengeAnswer(answer);

        if (answer === currentChallenge.technique) {
            // Bonne réponse !
            const bonusTime = Math.floor(timeLeft / 2);
            const bonusStreak = streak * 20;
            const totalPoints = currentChallenge.points + bonusTime + bonusStreak;

            setScore(prev => prev + totalPoints);
            setStreak(prev => prev + 1);
            setChallengeCompleted(prev => [...prev, currentChallenge.id]);

            // Animation de succès
            setTimeout(() => {
                setShowSuccess(true);
            }, 500);
        } else {
            // Mauvaise réponse
            setStreak(0);
        }
    };

    const useHint = () => {
        if (showHint < (currentChallenge?.hints?.length || 0)) {
            setShowHint(prev => prev + 1);
            setScore(prev => Math.max(0, prev - 10)); // Coût de l'indice
        }
    };

    // === MODE LIBRE ===
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
        setScenario(s);
        resetExperiment();
        setShowSuccess(false);
    };

    const backToMenu = () => {
        setMode('libre');
        setCurrentChallenge(null);
        setScenario(null);
        setChallengeAnswer(null);
    };

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
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, 3, 2]} intensity={0.4} color="#93C5FD" />

            <Confetti active={showSuccess} />

            {/* Paillasse */}
            <mesh position={[0, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[6, 4]} />
                <meshStandardMaterial color="#1E293B" />
            </mesh>

            {/* Fond */}
            <mesh position={[0, 1, -2]}>
                <planeGeometry args={[6, 4]} />
                <meshStandardMaterial color="#0F172A" />
            </mesh>

            {/* Titre */}
            <Text position={[0, 2.5, -1.5]} fontSize={0.22} color="#60A5FA" anchorX="center">
                🔬 LABORATOIRE DE SÉPARATION
            </Text>

            {/* Mode indicator */}
            {mode === 'defi' && (
                <Text position={[0, 2.2, -1.5]} fontSize={0.12} color="#F59E0B" anchorX="center">
                    🎯 MODE DÉFI - Streak: {streak} 🔥
                </Text>
            )}

            {/* Rendu du montage */}
            {scenario?.id === 'filtration' && renderFiltration()}
            {scenario?.id === 'decantation' && renderDecantation()}
            {scenario?.id === 'distillation' && renderDistillation()}
            {scenario?.id === 'chromatographie' && renderChromatographie()}

            {/* Message initial */}
            {!scenario && (
                <Float speed={2} floatIntensity={0.5}>
                    <Text position={[0, 0.5, 0]} fontSize={0.16} color="white" anchorX="center">
                        👈 Choisis un mode pour commencer !
                    </Text>
                </Float>
            )}

            {/* Panneau de contrôle */}
            <Html transform={false}>
                <DraggableHtmlPanel
                    title="🧪 Laboratoire Virtuel"
                    className="w-[380px]"
                    defaultPosition="bottom-right"
                >
                    <div className="space-y-3 text-white">
                        {/* Score et Stats */}
                        <div className="flex justify-between items-center bg-gradient-to-r from-yellow-900/40 to-orange-900/40 p-3 rounded-xl border border-yellow-500/30">
                            <div>
                                <div className="text-xs text-yellow-400">Score</div>
                                <div className="text-2xl font-black text-yellow-400">⭐ {score}</div>
                            </div>
                            {mode === 'defi' && (
                                <div className="text-right">
                                    <div className="text-xs text-orange-400">Streak</div>
                                    <div className="text-xl font-bold text-orange-400">🔥 {streak}</div>
                                </div>
                            )}
                            <div className="flex gap-1">
                                {Object.values(BASE_SCENARIOS).map(s => (
                                    <div
                                        key={s.id}
                                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${completed.includes(s.id) ? 'bg-green-500' : 'bg-gray-700'
                                            }`}
                                    >
                                        {completed.includes(s.id) ? '✓' : '○'}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mode Selection */}
                        {!scenario && !currentChallenge && (
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setMode('libre')}
                                    className={`p-4 rounded-xl text-center transition-all ${mode === 'libre' ? 'bg-blue-600 border-2 border-blue-400' : 'bg-gray-800 hover:bg-gray-700'
                                        }`}
                                >
                                    <div className="text-2xl mb-1">🔬</div>
                                    <div className="font-bold">Mode Libre</div>
                                    <div className="text-xs text-gray-400">Explore à ton rythme</div>
                                </button>
                                <button
                                    onClick={startChallengeMode}
                                    className={`p-4 rounded-xl text-center transition-all ${mode === 'defi' ? 'bg-orange-600 border-2 border-orange-400' : 'bg-gray-800 hover:bg-gray-700'
                                        }`}
                                >
                                    <div className="text-2xl mb-1">🎯</div>
                                    <div className="font-bold">Mode Défi</div>
                                    <div className="text-xs text-gray-400">Défis chronométrés</div>
                                </button>
                            </div>
                        )}

                        {/* MODE DÉFI - Challenge actuel */}
                        {mode === 'defi' && currentChallenge && (
                            <div className="space-y-3">
                                {/* Timer */}
                                <div className="flex items-center justify-between bg-gray-900/50 p-2 rounded-lg">
                                    <span className="text-gray-400">⏱️ Temps</span>
                                    <span className={`text-xl font-bold ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                                        {timeLeft}s
                                    </span>
                                </div>

                                {/* Contexte du défi */}
                                <div className="bg-orange-900/30 border border-orange-500/40 p-3 rounded-xl">
                                    <div className="font-bold text-orange-400 mb-1">{currentChallenge.title}</div>
                                    <p className="text-sm text-gray-300 italic mb-2">{currentChallenge.context}</p>
                                    <p className="text-white font-medium">❓ {currentChallenge.question}</p>
                                </div>

                                {/* Indices */}
                                {showHint > 0 && (
                                    <div className="bg-blue-900/30 border border-blue-500/30 p-2 rounded-lg">
                                        <div className="text-xs text-blue-400 mb-1">💡 Indices :</div>
                                        {currentChallenge.hints.slice(0, showHint).map((hint, i) => (
                                            <div key={i} className="text-sm text-gray-300">• {hint}</div>
                                        ))}
                                    </div>
                                )}

                                {/* Choix de réponse */}
                                {!challengeAnswer && (
                                    <>
                                        <div className="text-xs text-gray-400">Choisis la bonne technique :</div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {Object.values(BASE_SCENARIOS).map(s => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => handleChallengeAnswer(s.id)}
                                                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-all"
                                                >
                                                    {s.title}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            onClick={useHint}
                                            disabled={showHint >= currentChallenge.hints.length}
                                            className="w-full py-2 bg-blue-900/50 hover:bg-blue-800/50 rounded-lg text-sm disabled:opacity-50"
                                        >
                                            💡 Indice (-10 pts) ({showHint}/{currentChallenge.hints.length})
                                        </button>
                                    </>
                                )}

                                {/* Résultat */}
                                {challengeAnswer && (
                                    <div className={`p-3 rounded-xl text-center ${challengeAnswer === currentChallenge.technique
                                        ? 'bg-green-900/50 border border-green-500'
                                        : 'bg-red-900/50 border border-red-500'
                                        }`}>
                                        {challengeAnswer === currentChallenge.technique ? (
                                            <>
                                                <div className="text-2xl mb-1">🎉</div>
                                                <div className="font-bold text-green-400">Correct !</div>
                                                <div className="text-sm text-gray-300">+{currentChallenge.points} pts</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-2xl mb-1">❌</div>
                                                <div className="font-bold text-red-400">
                                                    {challengeAnswer === 'timeout' ? 'Temps écoulé !' : 'Incorrect'}
                                                </div>
                                                <div className="text-sm text-gray-300">
                                                    La bonne réponse était : {BASE_SCENARIOS[currentChallenge.technique].title}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                {/* Boutons */}
                                <div className="grid grid-cols-2 gap-2">
                                    {challengeAnswer && (
                                        <button
                                            onClick={nextChallenge}
                                            className="py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl font-bold"
                                        >
                                            Suivant →
                                        </button>
                                    )}
                                    <button
                                        onClick={backToMenu}
                                        className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold"
                                    >
                                        ← Menu
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* MODE LIBRE */}
                        {mode === 'libre' && (
                            <>
                                {/* Contexte */}
                                {scenario && (
                                    <div className="bg-blue-900/30 border border-blue-500/30 p-3 rounded-xl">
                                        <div className="font-bold text-blue-400 mb-1">{scenario.title}</div>
                                        <p className="text-sm text-gray-300">{scenario.description}</p>
                                    </div>
                                )}

                                {/* Protocole */}
                                {scenario && (
                                    <div className="space-y-1">
                                        <div className="text-xs text-gray-400 uppercase">📋 Protocole :</div>
                                        {getSteps(scenario.id).map((step, i) => (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-2 p-2 rounded-lg transition-all text-sm ${i < currentStep ? 'bg-green-900/40 border border-green-500/40' :
                                                    i === currentStep && isRunning ? 'bg-blue-900/50 border border-blue-400' :
                                                        'bg-gray-800/40'
                                                    }`}
                                            >
                                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${i < currentStep ? 'bg-green-500' :
                                                    i === currentStep && isRunning ? 'bg-blue-500' :
                                                        'bg-gray-700'
                                                    }`}>
                                                    {i < currentStep ? '✓' : i + 1}
                                                </span>
                                                <span className="flex-1">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Progression */}
                                {isRunning && (
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Progression</span>
                                            <span>{Math.round(progress * 100)}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all"
                                                style={{ width: `${progress * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Sélection technique */}
                                <div>
                                    <div className="text-xs text-gray-400 mb-2">🔬 Techniques :</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {Object.values(BASE_SCENARIOS).map(s => (
                                            <button
                                                key={s.id}
                                                onClick={() => selectScenario(s)}
                                                disabled={isRunning}
                                                className={`p-2 rounded-xl text-left text-sm transition-all ${scenario?.id === s.id
                                                    ? 'bg-blue-600 border-2 border-blue-400'
                                                    : completed.includes(s.id)
                                                        ? 'bg-green-900/40 border border-green-500/40'
                                                        : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                                                    } disabled:opacity-50`}
                                            >
                                                <div className="font-bold">{s.title}</div>
                                                <div className="text-xs text-gray-400">+{s.basePoints} pts</div>
                                                {completed.includes(s.id) && <span className="text-green-400 text-xs">✓</span>}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                {scenario && (
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={startExperiment}
                                            disabled={isRunning || completed.includes(scenario.id)}
                                            className="py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl font-bold disabled:opacity-50"
                                        >
                                            {isRunning ? '⏳ En cours...' : completed.includes(scenario.id) ? '✅ Fait' : '▶️ Lancer'}
                                        </button>
                                        <button
                                            onClick={resetExperiment}
                                            className="py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-bold"
                                        >
                                            🔄 Reset
                                        </button>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Stats finales */}
                        {challengeCompleted.length >= CHALLENGES.length && (
                            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/50 p-4 rounded-xl text-center">
                                <div className="text-3xl mb-2">🏆</div>
                                <div className="font-bold text-purple-400">Tous les défis terminés !</div>
                                <div className="text-sm text-gray-300">Score final : {score} pts</div>
                            </div>
                        )}
                    </div>
                </DraggableHtmlPanel>
            </Html>

            {/* Overlay de succès */}
            {showSuccess && (
                <Html fullscreen>
                    <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 p-8 rounded-3xl border-2 border-green-400 text-center max-w-md shadow-2xl">
                            <div className="text-6xl mb-4">🎉</div>
                            <h2 className="text-3xl font-black text-green-400 mb-2">BRAVO !</h2>
                            <p className="text-xl text-white mb-2">{scenario?.title || currentChallenge?.title}</p>
                            <p className="text-gray-300 mb-4">
                                {mode === 'defi' ? 'Défi réussi !' : 'Séparation réussie !'}
                            </p>
                            <div className="bg-black/30 rounded-xl p-4 mb-6">
                                <div className="text-yellow-400 text-2xl font-black">
                                    +{scenario?.basePoints || currentChallenge?.points} points ⭐
                                </div>
                                {streak > 1 && (
                                    <div className="text-orange-400 text-sm mt-1">
                                        Bonus streak x{streak} 🔥
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    setShowSuccess(false);
                                    if (mode === 'defi') {
                                        nextChallenge();
                                    } else {
                                        setScenario(null);
                                    }
                                }}
                                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
                            >
                                Continuer 🚀
                            </button>
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}
