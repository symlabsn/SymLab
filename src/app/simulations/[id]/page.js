'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { collegeSimulationsData } from '../collegeData';
import { lyceeSimulationsData } from '../lyceeData';
import { getSimulationImage, simulationHotspots } from '../imageConfig';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import EnhancedQuiz from '@/components/EnhancedQuiz';
import {
    MobileBottomNavbar,
    MobileControlsSheet,
    MobileInfoPanel,
    MobileFloatingActions,
    MobileToast
} from '@/components/MobileSimulationUI';

// Import dynamique pour éviter les erreurs SSR avec Three.js
const Simulation3D = dynamic(() => import('@/components/Simulation3D'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] flex items-center justify-center bg-gradient-to-br from-black to-slate-900 rounded-2xl border border-white/20">
            <div className="text-center">
                <div className="text-6xl mb-4 animate-spin">⚛️</div>
                <p className="text-xl text-gray-400">Chargement de la simulation 3D...</p>
            </div>
        </div>
    )
});

// Fusionner toutes les sources de données
const allSimulationsData = {
    ...collegeSimulationsData,
    ...lyceeSimulationsData,
};

// Fonction pour déterminer le niveau d'une simulation
const getSimulationLevel = (simulationId) => {
    if (collegeSimulationsData[simulationId]) {
        return {
            name: 'Collège (BFEM)',
            description: '6ème - 3ème'
        };
    }
    if (lyceeSimulationsData[simulationId]) {
        return {
            name: 'Lycée (BAC)',
            description: 'Seconde - Terminale'
        };
    }
    return {
        name: 'Non défini',
        description: ''
    };
};

// Données par défaut si l'ID n'est pas trouvé
const defaultSimulation = {
    title: 'Simulation non trouvée',
    description: 'Désolé, cette simulation n\'est pas encore disponible.',
    type: 'atom',
    config: {},
    theory: 'Contenu non disponible.',
    analogy: {
        title: 'Pas d\'analogie disponible',
        content: '...'
    },
    exercises: []
};

// Points d'exploration pour le mode guidé (exemples génériques)
const explorationPoints = [
    { id: 1, title: "Introduction", description: "Découvrez les bases de cette simulation", icon: "🎯" },
    { id: 2, title: "Interaction", description: "Apprenez à manipuler les éléments", icon: "👆" },
    { id: 3, title: "Concepts clés", description: "Comprenez la théorie derrière", icon: "💡" },
    { id: 4, title: "Application", description: "Voyez l'application dans la vie réelle", icon: "🌍" },
];

// Composant Badge animé
const AnimatedBadge = ({ children, color = "cyan", pulse = false }) => (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
        ${color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : ''}
        ${color === 'purple' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : ''}
        ${color === 'green' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : ''}
        ${color === 'orange' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : ''}
        ${color === 'pink' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' : ''}
        ${pulse ? 'animate-pulse' : ''}
        transition-all duration-300 hover:scale-105`}>
        {children}
    </span>
);

// Composant Timer
const SessionTimer = ({ startTime }) => {
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsed(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [startTime]);

    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    return (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-lg">⏱️</span>
            <span className="font-mono text-sm">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
        </div>
    );
};

// Composant Panneau de Contrôles Avancés
const AdvancedControls = ({
    autoRotate,
    setAutoRotate,
    speed,
    setSpeed,
    showLabels,
    setShowLabels,
    showGrid,
    setShowGrid,
    zoom,
    setZoom
}) => (
    <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 space-y-4">
        <h4 className="text-sm font-bold text-[#00F5D4] flex items-center gap-2">
            <span>⚙️</span> Contrôles Avancés
        </h4>

        {/* Toggle Rotation Auto */}
        <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Rotation Auto</span>
            <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`w-12 h-6 rounded-full transition-all duration-300 ${autoRotate ? 'bg-[#00F5D4]' : 'bg-gray-600'}`}
            >
                <div className={`w-5 h-5 rounded-full bg-white shadow-lg transform transition-transform duration-300 ${autoRotate ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
        </div>

        {/* Slider Vitesse */}
        <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">Vitesse d&apos;animation</span>
                <span className="text-[#00F5D4] font-mono">{speed}x</span>
            </div>
            <input
                type="range"
                min="0.25"
                max="3"
                step="0.25"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F5D4]"
            />
        </div>

        {/* Toggle Labels */}
        <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Afficher les labels</span>
            <button
                onClick={() => setShowLabels(!showLabels)}
                className={`w-12 h-6 rounded-full transition-all duration-300 ${showLabels ? 'bg-purple-500' : 'bg-gray-600'}`}
            >
                <div className={`w-5 h-5 rounded-full bg-white shadow-lg transform transition-transform duration-300 ${showLabels ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
        </div>

        {/* Toggle Grille */}
        <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Afficher la grille</span>
            <button
                onClick={() => setShowGrid(!showGrid)}
                className={`w-12 h-6 rounded-full transition-all duration-300 ${showGrid ? 'bg-pink-500' : 'bg-gray-600'}`}
            >
                <div className={`w-5 h-5 rounded-full bg-white shadow-lg transform transition-transform duration-300 ${showGrid ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
        </div>

        {/* Boutons de zoom rapide */}
        <div>
            <span className="text-sm text-gray-300 block mb-2">Zoom rapide</span>
            <div className="flex gap-2">
                {[0.5, 1, 1.5, 2].map((z) => (
                    <button
                        key={z}
                        onClick={() => setZoom(z)}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${zoom === z
                            ? 'bg-[#00F5D4] text-black'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                    >
                        {z}x
                    </button>
                ))}
            </div>
        </div>
    </div>
);

// Composant Mode Exploration Guidée
const GuidedExploration = ({
    currentStep,
    setCurrentStep,
    totalSteps,
    isActive,
    setIsActive
}) => {
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className={`p-4 rounded-xl border transition-all duration-500 ${isActive
            ? 'bg-gradient-to-br from-[#00F5D4]/20 to-purple-500/20 border-[#00F5D4]/50'
            : 'bg-white/5 border-white/20'}`}>
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[#00F5D4] flex items-center gap-2">
                    <span>🧭</span> Exploration Guidée
                </h4>
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${isActive
                        ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                        : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'}`}
                >
                    {isActive ? 'Arrêter' : 'Démarrer'}
                </button>
            </div>

            {isActive && (
                <>
                    {/* Barre de progression */}
                    <div className="relative h-2 bg-gray-700 rounded-full mb-4 overflow-hidden">
                        <div
                            className="absolute h-full bg-gradient-to-r from-[#00F5D4] to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Étape actuelle */}
                    <div className="p-3 rounded-lg bg-black/30 mb-3">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{explorationPoints[currentStep]?.icon}</span>
                            <div>
                                <p className="font-bold text-white text-sm">
                                    Étape {currentStep + 1}: {explorationPoints[currentStep]?.title}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {explorationPoints[currentStep]?.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                            disabled={currentStep === 0}
                            className="flex-1 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-bold transition-all"
                        >
                            ← Précédent
                        </button>
                        <button
                            onClick={() => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1))}
                            disabled={currentStep === totalSteps - 1}
                            className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black font-bold text-sm hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Suivant →
                        </button>
                    </div>

                    {/* Points de navigation */}
                    <div className="flex justify-center gap-2 mt-3">
                        {explorationPoints.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentStep(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentStep
                                    ? 'bg-[#00F5D4] scale-125'
                                    : idx < currentStep
                                        ? 'bg-purple-500'
                                        : 'bg-gray-600'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// Composant Simulation Interactive basée sur Image
const ImageSimulation = ({ simulationId, title }) => {
    const [activeHotspot, setActiveHotspot] = useState(null);
    const [isAnimating, setIsAnimating] = useState(true);
    const containerRef = useRef(null);

    const imageSrc = getSimulationImage(simulationId);
    const hotspots = simulationHotspots[simulationId] || [];

    // Si pas d'image pour cette simulation, retourner null
    if (!imageSrc) return null;

    return (
        <div className="rounded-2xl overflow-hidden border border-white/20 bg-black">
            {/* Image Container */}
            <div ref={containerRef} className="relative" style={{ height: '450px' }}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain bg-gradient-to-br from-slate-900 to-black"
                    unoptimized
                />

                {/* Hotspots interactifs */}
                {hotspots.map((hotspot, index) => (
                    <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    >
                        <button
                            onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
                            className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                                ${activeHotspot === index
                                    ? 'scale-150 ring-4 ring-white/30'
                                    : 'hover:scale-125'
                                }
                                ${isAnimating ? 'animate-pulse' : ''}
                            `}
                            style={{
                                backgroundColor: hotspot.color,
                                boxShadow: `0 0 15px ${hotspot.color}80`
                            }}
                        >
                            <span className="text-white font-bold text-xs drop-shadow-lg">
                                {index + 1}
                            </span>
                        </button>

                        {/* Tooltip au clic */}
                        {activeHotspot === index && (
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 w-52 p-4 rounded-xl backdrop-blur-xl z-30 animate-in fade-in zoom-in-95 duration-200"
                                style={{
                                    top: hotspot.y > 60 ? 'auto' : '100%',
                                    bottom: hotspot.y > 60 ? '100%' : 'auto',
                                    marginTop: hotspot.y > 60 ? 0 : '10px',
                                    marginBottom: hotspot.y > 60 ? '10px' : 0,
                                    backgroundColor: 'rgba(0,0,0,0.9)',
                                    border: `2px solid ${hotspot.color}`
                                }}
                            >
                                <h4 className="font-bold text-lg mb-1" style={{ color: hotspot.color }}>
                                    {hotspot.label}
                                </h4>
                                <p className="text-sm text-gray-200">{hotspot.info}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Barre d'info en bas */}
            {hotspots.length > 0 && (
                <div className="p-4 bg-gradient-to-r from-slate-900 to-black border-t border-white/10">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">
                            Cliquez sur les <span className="text-cyan-400 font-bold">points</span> pour explorer
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsAnimating(!isAnimating)}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${isAnimating ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-gray-400'}`}
                            >
                                {isAnimating ? '● Animation' : '○ Statique'}
                            </button>
                            <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                {hotspots.length} zones
                            </span>
                        </div>
                    </div>

                    {/* Légende des hotspots */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {hotspots.map((h, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                                className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs transition-all
                                    ${activeHotspot === i ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}
                                `}
                            >
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: h.color }}
                                />
                                <span className="text-white">{h.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// Composant Challenges Rapides
const QuickChallenges = ({ simulation, onComplete }) => {
    const [currentChallenge, setCurrentChallenge] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const challenges = simulation.exercises || [];
    const challenge = challenges[currentChallenge];

    if (challenges.length === 0) {
        return (
            <div className="p-4 rounded-xl bg-white/5 border border-white/20 text-center">
                <span className="text-4xl mb-2 block">📝</span>
                <p className="text-gray-400 text-sm">Aucun défi disponible pour cette simulation</p>
            </div>
        );
    }

    const handleAnswer = (index) => {
        if (answered) return;
        setSelectedOption(index);
        setAnswered(true);
        if (index === challenge.correct) {
            setScore(score + 1);
        }
    };

    const nextChallenge = () => {
        if (currentChallenge < challenges.length - 1) {
            setCurrentChallenge(currentChallenge + 1);
            setAnswered(false);
            setSelectedOption(null);
        } else {
            onComplete?.(score, challenges.length);
        }
    };

    return (
        <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-orange-400 flex items-center gap-2">
                    <span>⚡</span> Défi Rapide
                </h4>
                <div className="flex items-center gap-2">
                    <AnimatedBadge color="orange">
                        {currentChallenge + 1}/{challenges.length}
                    </AnimatedBadge>
                    <AnimatedBadge color="green" pulse={score > 0}>
                        🏆 {score}
                    </AnimatedBadge>
                </div>
            </div>

            {/* Question */}
            <p className="text-white font-medium mb-3 text-sm">{challenge.question}</p>

            {/* Options */}
            <div className="space-y-2 mb-3">
                {challenge.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={answered}
                        className={`w-full p-3 rounded-lg text-left text-sm transition-all ${answered
                            ? index === challenge.correct
                                ? 'bg-green-500/30 border border-green-500'
                                : index === selectedOption
                                    ? 'bg-red-500/30 border border-red-500'
                                    : 'bg-white/5 border border-white/10 opacity-50'
                            : 'bg-white/10 border border-white/10 hover:bg-white/20 hover:border-orange-500/50'}`}
                    >
                        <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${answered && index === challenge.correct
                                ? 'bg-green-500 text-white'
                                : answered && index === selectedOption
                                    ? 'bg-red-500 text-white'
                                    : 'bg-white/10'}`}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span>{option}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Explication */}
            {answered && (
                <div className={`p-3 rounded-lg mb-3 text-sm ${selectedOption === challenge.correct
                    ? 'bg-green-500/20 border border-green-500/30'
                    : 'bg-blue-500/20 border border-blue-500/30'}`}>
                    <p className="text-gray-200">
                        💡 {challenge.explanation}
                    </p>
                </div>
            )}

            {/* Bouton suivant */}
            {answered && (
                <button
                    onClick={nextChallenge}
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm hover:scale-105 transition-transform"
                >
                    {currentChallenge < challenges.length - 1 ? 'Question suivante →' : 'Voir les résultats 🏆'}
                </button>
            )}
        </div>
    );
};

// Composant Notes personnelles
const PersonalNotes = ({ simulationId }) => {
    const [notes, setNotes] = useState('');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        // Charger les notes sauvegardées
        const savedNotes = localStorage.getItem(`notes_${simulationId}`);
        if (savedNotes) setNotes(savedNotes);
    }, [simulationId]);

    const saveNotes = () => {
        localStorage.setItem(`notes_${simulationId}`, notes);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="p-4 rounded-xl bg-white/5 border border-white/20">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                    <span>📝</span> Mes notes
                </h4>
                <button
                    onClick={saveNotes}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${saved
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'}`}
                >
                    {saved ? '✓ Sauvegardé' : 'Sauvegarder'}
                </button>
            </div>
            <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Prenez des notes sur cette simulation..."
                className="w-full h-24 p-3 rounded-lg bg-black/30 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 resize-none"
            />
        </div>
    );
};

// Composant Mode Plein Écran
const FullscreenButton = ({ containerRef }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <button
            onClick={toggleFullscreen}
            className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
            title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
        >
            <span className="text-xl group-hover:scale-110 inline-block transition-transform">
                {isFullscreen ? '🗗' : '⛶'}
            </span>
        </button>
    );
};

// Composant Panneau Draggable (Déplaçable)
const DraggableControlPanel = ({
    children,
    title = "🎛️ Contrôles",
    initialPosition = { x: 20, y: 20 },
    isVisible,
    setIsVisible
}) => {
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isMinimized, setIsMinimized] = useState(false);
    const panelRef = useRef(null);

    const handleMouseDown = (e) => {
        if (e.target.closest('.no-drag')) return;
        setIsDragging(true);
        const rect = panelRef.current.getBoundingClientRect();
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;

        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        // Limiter aux bords de l'écran
        const maxX = window.innerWidth - (panelRef.current?.offsetWidth || 300);
        const maxY = window.innerHeight - (panelRef.current?.offsetHeight || 200);

        setPosition({
            x: Math.max(0, Math.min(newX, maxX)),
            y: Math.max(0, Math.min(newY, maxY))
        });
    }, [isDragging, dragOffset]);

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Touch support
    const handleTouchStart = (e) => {
        if (e.target.closest('.no-drag')) return;
        const touch = e.touches[0];
        setIsDragging(true);
        const rect = panelRef.current.getBoundingClientRect();
        setDragOffset({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        });
    };

    const handleTouchMove = useCallback((e) => {
        if (!isDragging) return;
        const touch = e.touches[0];

        const newX = touch.clientX - dragOffset.x;
        const newY = touch.clientY - dragOffset.y;

        const maxX = window.innerWidth - (panelRef.current?.offsetWidth || 300);
        const maxY = window.innerHeight - (panelRef.current?.offsetHeight || 200);

        setPosition({
            x: Math.max(0, Math.min(newX, maxX)),
            y: Math.max(0, Math.min(newY, maxY))
        });
    }, [isDragging, dragOffset]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleTouchMove]);

    if (!isVisible) return null;

    return (
        <div
            ref={panelRef}
            className={`fixed z-50 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-200 ${isDragging ? 'cursor-grabbing scale-[1.02]' : ''}`}
            style={{
                left: position.x,
                top: position.y,
                width: isMinimized ? '200px' : '320px',
                maxHeight: isMinimized ? '50px' : '80vh'
            }}
        >
            {/* Header - Zone de drag */}
            <div
                className="flex items-center justify-between p-3 bg-gradient-to-r from-[#00F5D4]/20 to-purple-500/20 border-b border-white/10 cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="flex items-center gap-2">
                    <span className="text-lg">{title.split(' ')[0]}</span>
                    <span className="font-bold text-sm text-[#00F5D4]">{title.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="flex items-center gap-1">
                    {/* Bouton Minimiser */}
                    <button
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="no-drag w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all text-sm"
                        title={isMinimized ? "Agrandir" : "Réduire"}
                    >
                        {isMinimized ? '🔼' : '🔽'}
                    </button>
                    {/* Bouton Fermer */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="no-drag w-7 h-7 rounded-lg bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition-all text-red-400 text-sm"
                        title="Fermer"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Content */}
            {!isMinimized && (
                <div className="p-4 overflow-y-auto max-h-[calc(80vh-50px)] no-drag">
                    {children}
                </div>
            )}

            {/* Indicateur de drag */}
            {isMinimized && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/30" />
            )}
        </div>
    );
};

// Composant Barre d'outils flottante - Simplifiée (Aide uniquement)
const FloatingToolbar = ({ onHelp }) => (
    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-black/90 backdrop-blur-xl border border-white/20 z-10">
        <button
            onClick={onHelp}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center active:scale-95 transition-all"
            title="Aide"
        >
            <span className="text-sm sm:text-base">❓</span>
        </button>
    </div>
);

// Modal d'aide
const HelpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-gradient-to-br from-slate-900 to-black p-6 rounded-2xl border border-white/20 max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#00F5D4]">🎮 Guide des contrôles</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>

                <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🖱️</span>
                            <div>
                                <p className="font-semibold text-white">Clic gauche + Glisser</p>
                                <p className="text-sm text-gray-400">Faire tourner la simulation</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🔍</span>
                            <div>
                                <p className="font-semibold text-white">Molette de la souris</p>
                                <p className="text-sm text-gray-400">Zoomer / Dézoomer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">👆</span>
                            <div>
                                <p className="font-semibold text-white">Clic droit + Glisser</p>
                                <p className="text-sm text-gray-400">Déplacer la vue</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">📱</span>
                            <div>
                                <p className="font-semibold text-white">Tactile</p>
                                <p className="text-sm text-gray-400">Pincer pour zoomer, glisser pour tourner</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black font-bold hover:scale-105 transition-transform"
                >
                    Compris ! 👍
                </button>
            </div>
        </div>
    );
};

// Modal de résultats du quiz
const ResultsModal = ({ isOpen, onClose, score, total }) => {
    if (!isOpen) return null;

    const percentage = Math.round((score / total) * 100);
    const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : percentage >= 40 ? '👍' : '💪';
    const message = percentage >= 80
        ? 'Excellent ! Tu maîtrises ce sujet !'
        : percentage >= 60
            ? 'Bien joué ! Continue comme ça !'
            : percentage >= 40
                ? 'Pas mal ! Tu peux faire encore mieux !'
                : 'Continue à pratiquer, tu vas y arriver !';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-white/20 max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
                <span className="text-6xl mb-4 block animate-bounce">{emoji}</span>
                <h3 className="text-2xl font-bold text-white mb-2">Résultats</h3>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500 mb-4">
                    {score}/{total}
                </div>
                <p className="text-gray-300 mb-6">{message}</p>

                {/* Barre de progression */}
                <div className="w-full h-4 bg-gray-700 rounded-full mb-6 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-1000 ${percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : percentage >= 40 ? 'bg-orange-500' : 'bg-red-500'}`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>

                <button
                    onClick={onClose}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black font-bold hover:scale-105 transition-transform"
                >
                    Continuer 🚀
                </button>
            </div>
        </div>
    );
};

export default function SimulationDetailPage({ params }) {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [resolvedParams, setResolvedParams] = useState(null);
    const [activeTab, setActiveTab] = useState(tabParam || 'simulation');
    const [currentExercise, setCurrentExercise] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    // État pour le retour au cours
    const [returnInfo, setReturnInfo] = useState(null);

    // États pour les nouvelles fonctionnalités
    const [sessionStartTime] = useState(Date.now());
    const [autoRotate, setAutoRotate] = useState(true);
    const [speed, setSpeed] = useState(1);
    const [showLabels, setShowLabels] = useState(true);
    const [showGrid, setShowGrid] = useState(true);
    const [zoom, setZoom] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);

    // Mode exploration guidée
    const [explorationStep, setExplorationStep] = useState(0);
    const [isExplorationActive, setIsExplorationActive] = useState(false);

    // Modals
    const [showHelpModal, setShowHelpModal] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
    const [quizResults, setQuizResults] = useState({ score: 0, total: 0 });

    // Panneau de contrôle draggable
    const [showControlPanel, setShowControlPanel] = useState(false);

    // États pour l'interface mobile
    const [mobileTab, setMobileTab] = useState('simulation');
    const [showMobileControls, setShowMobileControls] = useState(false);
    const [showMobileInfo, setShowMobileInfo] = useState(false);
    const [toastMessage, setToastMessage] = useState({ text: '', type: 'info', visible: false });
    const [isMobile, setIsMobile] = useState(false);

    // Ref pour le conteneur de simulation
    const simulationContainerRef = useRef(null);

    useEffect(() => {
        Promise.resolve(params).then(setResolvedParams);
        // Lire les paramètres URL pour le retour
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const returnTo = urlParams.get('returnTo');
            const chapter = urlParams.get('chapter');
            if (returnTo === 'courses' && chapter) {
                setReturnInfo({ returnTo, chapter });
            }
        }
    }, [params]);

    // Détecter le mode mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Gérer les tabs mobiles
    useEffect(() => {
        if (mobileTab === 'controls') {
            setShowMobileControls(true);
        } else if (mobileTab === 'info') {
            setShowMobileInfo(true);
        }
    }, [mobileTab]);

    const handleChallengeComplete = useCallback((score, total) => {
        setQuizResults({ score, total });
        setShowResultsModal(true);
    }, []);

    const handleScreenshot = useCallback(() => {
        setToastMessage({ text: '📸 Capture d\'écran enregistrée !', type: 'success', visible: true });
    }, []);

    const handleShare = useCallback(async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'SymLab - Simulation 3D',
                    text: 'Découvrez cette simulation 3D interactive !',
                    url: window.location.href,
                });
                setToastMessage({ text: 'Partagé avec succès !', type: 'success', visible: true });
            } catch (err) {
                // L'utilisateur a annulé le partage
            }
        } else {
            // Copier le lien
            navigator.clipboard.writeText(window.location.href);
            setToastMessage({ text: 'Lien copié dans le presse-papiers !', type: 'info', visible: true });
        }
    }, []);

    const handleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            simulationContainerRef.current?.requestFullscreen?.() ||
                simulationContainerRef.current?.webkitRequestFullscreen?.();
        } else {
            document.exitFullscreen?.() || document.webkitExitFullscreen?.();
        }
    }, []);

    const handleReset = useCallback(() => {
        setSpeed(1);
        setAutoRotate(true);
        setZoom(1);
        setShowLabels(true);
        setShowGrid(true);
        setIsPlaying(true);
        setToastMessage({ text: '🔄 Paramètres réinitialisés !', type: 'info', visible: true });
    }, []);

    if (!resolvedParams) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin text-6xl mb-4">⚛️</div>
                    <p className="text-gray-400">Chargement...</p>
                </div>
            </div>
        );
    }

    const simulation = allSimulationsData[resolvedParams.id] || defaultSimulation;
    const simulationLevel = getSimulationLevel(resolvedParams.id);

    const handleAnswerSelect = (index) => {
        setSelectedAnswer(index);
        setShowExplanation(true);
    };

    // Styles conditionnels pour cacher le footer global sur les simulations
    const HideFooterStyle = () => (
        <style dangerouslySetInnerHTML={{ __html: `
            footer { display: none !important; }
            ${isMobile ? 'nav:not(#simulation-desktop-nav):not(#simulation-mini-nav) { display: none !important; }' : ''}
            ${isMobile ? '.main-content { padding-bottom: 0 !important; }' : ''}
        `}} />
    );

    return (
        <main className={`min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white ${isMobile ? 'pb-0' : ''}`}>
            <HideFooterStyle />
            {/* Navbar améliorée - Cachée sur mobile (remplacée par bottom navbar) */}
            <nav id="simulation-desktop-nav" className={`border-b border-white/10 backdrop-blur-xl bg-black/80 sticky top-0 z-50 ${isMobile ? 'hidden' : ''}`}>
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
                    {/* Bouton retour conditionnel */}
                    {returnInfo ? (
                        <Link
                            href={`/courses?activeChapter=${returnInfo.chapter}`}
                            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 sm:gap-2 group bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30"
                        >
                            <span className="text-xl sm:text-2xl group-hover:-translate-x-1 transition-transform">📚</span>
                            <span className="hidden sm:inline font-bold">Retour au cours</span>
                            <span className="sm:hidden text-sm font-bold">Cours</span>
                        </Link>
                    ) : (
                        <Link
                            href={`/simulations?level=${lyceeSimulationsData[resolvedParams.id] ? 'lycee' : 'college'}#${resolvedParams.id}`}
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 sm:gap-2 group"
                        >
                            <span className="text-xl sm:text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                            <span className="hidden sm:inline">Retour aux simulations</span>
                            <span className="sm:hidden text-sm">Retour</span>
                        </Link>
                    )}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="hidden sm:block"><SessionTimer startTime={sessionStartTime} /></div>
                        <AnimatedBadge color="cyan">
                            <span className="hidden sm:inline">Simulation 3D</span>
                            <span className="sm:hidden">3D</span>
                        </AnimatedBadge>
                    </div>
                </div>
            </nav>

            {/* Header avec titre animé */}
            <div className={`max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 ${isMobile ? 'pt-14 pb-2' : 'py-4 sm:py-8'}`}>
                <div className={`${isMobile ? 'mb-2' : 'mb-4 sm:mb-8'}`}>
                    <div className={`flex flex-wrap items-center gap-2 ${isMobile ? 'mb-1' : 'mb-2 sm:mb-4'}`}>
                        <AnimatedBadge color="purple">{simulationLevel.name}</AnimatedBadge>
                        <AnimatedBadge color="green">{simulationLevel.description}</AnimatedBadge>
                    </div>
                    <h1 className={`font-black bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500 ${isMobile ? 'text-lg mb-1' : 'text-2xl sm:text-4xl md:text-5xl mb-2 sm:mb-4'}`}>
                        {simulation.title}
                    </h1>
                    {!isMobile && <p className="text-sm sm:text-xl text-gray-300 line-clamp-2 sm:line-clamp-none">{simulation.description}</p>}
                </div>

                {/* Tabs améliorés - Visibles sur toutes les tailles */}
                <div className={`flex gap-1.5 sm:gap-3 mb-4 sm:mb-8 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide`}>
                    {[
                        { id: 'simulation', label: 'Simulation 3D', icon: '🎮', shortLabel: '🎮 Simu' },
                        { id: 'analogy', label: 'Analogie', icon: '🌍', shortLabel: '🌍 Analogie' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-1 sm:gap-2 flex-shrink-0 ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black shadow-lg'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            <span className="text-sm sm:text-base">{tab.icon}</span>
                            <span className="hidden sm:inline">{tab.label}</span>
                            <span className="sm:hidden">{tab.shortLabel}</span>
                        </button>
                    ))}
                </div>

                {/* Content - Full width */}
                <div className="space-y-4 sm:space-y-6">
                    {/* Main Content */}
                    <div>
                        {activeTab === 'simulation' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Simulation en pleine largeur sur mobile */}
                                <div className="space-y-4">
                                    {/* Conteneur de simulation - Plein écran mobile */}
                                    <div ref={simulationContainerRef} className={`relative overflow-hidden shadow-2xl bg-black/50 ${isMobile ? 'h-[55vh] w-full rounded-xl border border-white/10' : 'rounded-xl sm:rounded-2xl border border-white/20 h-[60vh] lg:h-[70vh]'}`}>
                                        <Simulation3D type={simulation.type} config={simulation.config} />
                                        {/* Barre d'outils - cachée sur mobile car remplacée par bottom navbar */}
                                        {!isMobile && (
                                            <FloatingToolbar
                                                onHelp={() => setShowHelpModal(true)}
                                            />
                                        )}
                                        {/* Bouton plein écran - caché sur mobile */}
                                        {!isMobile && (
                                            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
                                                <FullscreenButton containerRef={simulationContainerRef} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Panneau de contrôle repliable - masqué sur mobile */}
                                    <details className={`lg:hidden group ${isMobile ? 'hidden' : ''}`}>
                                        <summary className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 cursor-pointer list-none active:scale-[0.98] transition-all">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">🎛️</span>
                                                <span className="font-bold text-sm text-[#00F5D4]">Contrôles</span>
                                            </div>
                                            <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="mt-2 p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
                                            <AdvancedControls
                                                autoRotate={autoRotate}
                                                setAutoRotate={setAutoRotate}
                                                speed={speed}
                                                setSpeed={setSpeed}
                                                showLabels={showLabels}
                                                setShowLabels={setShowLabels}
                                                showGrid={showGrid}
                                                setShowGrid={setShowGrid}
                                                zoom={zoom}
                                                setZoom={setZoom}
                                            />
                                            {/* Guide tactile mobile */}
                                            <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                                                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">👆 Glisser = Rotation</span>
                                                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">🤏 Pincer = Zoom</span>
                                            </div>
                                        </div>
                                    </details>



                                    {/* Visualisation Interactive (Image backup) - Hidden on mobile */}
                                    <div className="hidden sm:block">
                                        <ImageSimulation
                                            simulationId={resolvedParams.id}
                                            title={simulation.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Desktop-only secondary tabs */}
                        {!isMobile && activeTab === 'challenges' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Header Mode Défi */}
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-3xl animate-pulse">
                                                ⚡
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-black text-white">MODE DÉFI</h2>
                                                <p className="text-orange-300">Testez vos connaissances !</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="p-3 rounded-xl bg-black/30 text-center">
                                            <p className="text-2xl font-bold text-green-400">🎯</p>
                                            <p className="text-xs text-gray-400">Précision</p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-black/30 text-center">
                                            <p className="text-2xl font-bold text-yellow-400">⭐</p>
                                            <p className="text-xs text-gray-400">XP Bonus</p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-black/30 text-center">
                                            <p className="text-2xl font-bold text-purple-400">🔥</p>
                                            <p className="text-xs text-gray-400">Streak</p>
                                        </div>
                                    </div>
                                </div>

                                <EnhancedQuiz simulation={simulation} onComplete={handleChallengeComplete} />
                            </div>
                        )}

                        {!isMobile && activeTab === 'gallery' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Image de cette simulation */}
                                <div className="rounded-2xl overflow-hidden">
                                    <ImageSimulation
                                        simulationId={resolvedParams.id}
                                        title={simulation.title}
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === 'analogy' && simulation.analogy && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00F5D4]/10 to-purple-500/10 border border-[#00F5D4]/30">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-5xl animate-bounce">🇸🇳</span>
                                        <div>
                                            <h2 className="text-2xl font-bold text-[#00F5D4]">{simulation.analogy.title}</h2>
                                            <p className="text-sm text-gray-400">Analogie avec le contexte sénégalais</p>
                                        </div>
                                    </div>
                                    <div className="prose prose-invert prose-lg max-w-none prose-p:text-gray-200 prose-p:leading-relaxed prose-strong:text-[#00F5D4] prose-blockquote:border-[#00F5D4]/40 prose-blockquote:bg-[#00F5D4]/5 prose-blockquote:rounded-lg prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-[#00F5D4]/90 prose-blockquote:not-italic">
                                        <ReactMarkdown
                                            remarkPlugins={[remarkMath, remarkGfm]}
                                            rehypePlugins={[rehypeKatex, rehypeRaw]}
                                        >
                                            {simulation.analogy.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'theory' && (
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 prose prose-invert max-w-none animate-in fade-in slide-in-from-bottom-4 duration-500
                                prose-headings:font-black prose-headings:tracking-tight
                                prose-h3:text-transparent prose-h3:bg-clip-text prose-h3:bg-gradient-to-r prose-h3:from-purple-300 prose-h3:to-pink-300 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-6 prose-h3:pb-2 prose-h3:border-b prose-h3:border-white/10
                                prose-p:text-gray-300 prose-p:leading-relaxed
                                prose-strong:text-white prose-strong:font-bold
                                prose-li:text-gray-300 prose-li:marker:text-purple-400
                                prose-blockquote:border-purple-500/50 prose-blockquote:bg-purple-500/5 prose-blockquote:rounded-xl prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-purple-200/90 prose-blockquote:not-italic prose-blockquote:font-semibold
                                prose-table:border-collapse prose-table:w-full
                                prose-th:bg-purple-500/15 prose-th:text-purple-200 prose-th:font-bold prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-white/10 prose-th:text-left
                                prose-td:text-gray-300 prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-white/10
                            ">
                                <ReactMarkdown
                                    remarkPlugins={[remarkMath, remarkGfm]}
                                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                                >
                                    {simulation.theory || ""}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ========== COURS (Sous la simulation - Mobile & Desktop) ========== */}
            {simulation.theory && (
                <div className={`pb-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black z-10 relative ${isMobile ? 'pt-4 px-4' : 'pt-8 px-6 lg:px-8 max-w-7xl mx-auto'}`}>
                    
                    {/* Header cours - Design premium */}
                    <div className="relative mb-6 sm:mb-8">
                        <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl shadow-lg shadow-indigo-500/30 flex-shrink-0">
                                📚
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl font-black text-white">Cours complet</h2>
                                <p className="text-xs sm:text-sm text-indigo-300/80">Concepts théoriques à retenir • Chapitre 1</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Analogie Sénégalaise - Carte premium avec markdown */}
                    {simulation.analogy && (
                        <div className="mb-6 sm:mb-8 rounded-2xl overflow-hidden border border-[#00F5D4]/20 shadow-xl shadow-[#00F5D4]/5">
                            {/* Header analogie */}
                            <div className="px-4 sm:px-5 py-3 bg-gradient-to-r from-[#00F5D4]/20 to-emerald-500/10 border-b border-[#00F5D4]/15 flex items-center gap-3">
                                <span className="text-2xl">🇸🇳</span>
                                <div>
                                    <h3 className="font-bold text-[#00F5D4] text-sm sm:text-base">{simulation.analogy.title || 'Analogie Sénégalaise'}</h3>
                                    <p className="text-[10px] sm:text-xs text-emerald-300/60">Comprendre avec le contexte local</p>
                                </div>
                            </div>
                            {/* Contenu analogie - rendu en markdown */}
                            <div className="p-4 sm:p-5 bg-black/30 prose prose-invert prose-sm max-w-none prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-[#00F5D4] prose-blockquote:border-[#00F5D4]/40 prose-blockquote:bg-[#00F5D4]/5 prose-blockquote:rounded-lg prose-blockquote:py-1 prose-blockquote:px-3 prose-blockquote:text-emerald-200/90 prose-blockquote:not-italic">
                                <ReactMarkdown
                                    remarkPlugins={[remarkMath, remarkGfm]}
                                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                                >
                                    {simulation.analogy.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}

                    {/* Théorie - Section avec styles premium */}
                    <div className="rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                        {/* Header théorie */}
                        <div className="px-4 sm:px-5 py-3 bg-gradient-to-r from-purple-500/15 to-blue-500/10 border-b border-white/10 flex items-center gap-3">
                            <span className="text-xl">📖</span>
                            <h3 className="font-bold text-purple-300 text-sm sm:text-base">Contenu du cours</h3>
                        </div>
                        {/* Contenu théorie */}
                        <div className="p-4 sm:p-6 bg-black/20">
                            <div className="prose prose-invert prose-sm sm:prose-base max-w-none
                                prose-headings:font-black prose-headings:tracking-tight
                                prose-h3:text-transparent prose-h3:bg-clip-text prose-h3:bg-gradient-to-r prose-h3:from-purple-300 prose-h3:to-pink-300 prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-4 prose-h3:pb-2 prose-h3:border-b prose-h3:border-white/10
                                prose-p:text-gray-300 prose-p:leading-relaxed
                                prose-strong:text-white prose-strong:font-bold
                                prose-li:text-gray-300 prose-li:marker:text-purple-400
                                prose-a:text-[#00F5D4] prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-purple-500/50 prose-blockquote:bg-purple-500/5 prose-blockquote:rounded-xl prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-purple-200/90 prose-blockquote:not-italic prose-blockquote:font-semibold
                                prose-hr:border-white/10 prose-hr:my-6
                                prose-table:border-collapse prose-table:w-full
                                prose-th:bg-purple-500/15 prose-th:text-purple-200 prose-th:font-bold prose-th:text-xs prose-th:px-3 prose-th:py-2 prose-th:border prose-th:border-white/10 prose-th:text-left
                                prose-td:text-gray-300 prose-td:text-xs sm:prose-td:text-sm prose-td:px-3 prose-td:py-2 prose-td:border prose-td:border-white/10
                                prose-tr:even:bg-white/[0.02]
                                prose-code:text-[#00F5D4] prose-code:bg-[#00F5D4]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-xs
                            ">
                                <ReactMarkdown
                                    remarkPlugins={[remarkMath, remarkGfm]}
                                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                                >
                                    {simulation.theory || ""}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modals */}
            <HelpModal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} />
            <ResultsModal
                isOpen={showResultsModal}
                onClose={() => setShowResultsModal(false)}
                score={quizResults.score}
                total={quizResults.total}
            />

            {/* ========== INTERFACE MOBILE PREMIUM ========== */}
            {isMobile && (
                <>
                    {/* Mini barre de navigation mobile en haut - fixe */}
                    <div id="simulation-mini-nav" className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-xl border-b border-white/10">
                        <div className="flex items-center justify-between px-3 h-12">
                            {/* Retour */}
                            {returnInfo ? (
                                <Link
                                    href={`/courses?activeChapter=${returnInfo.chapter}`}
                                    className="flex items-center gap-1.5 text-emerald-400 active:scale-95 transition-transform"
                                >
                                    <span className="text-lg">←</span>
                                    <span className="text-xs font-bold">Cours</span>
                                </Link>
                            ) : (
                                <Link
                                    href={`/simulations?level=college#${resolvedParams.id}`}
                                    className="flex items-center gap-1.5 text-gray-400 active:scale-95 transition-transform"
                                >
                                    <span className="text-lg">←</span>
                                    <span className="text-xs font-bold">Retour</span>
                                </Link>
                            )}
                            
                            {/* Titre compact */}
                            <h1 className="text-sm font-bold text-white truncate max-w-[45%] text-center">
                                {simulation.title}
                            </h1>

                            {/* Navigation rapide vers autres sims */}
                            <button
                                onClick={() => setShowMobileInfo(true)}
                                className="flex items-center gap-1 text-cyan-400 active:scale-95 transition-transform"
                            >
                                <span className="text-xs font-bold">Sims</span>
                                <span className="text-lg">☰</span>
                            </button>
                        </div>
                    </div>

                    {/* Panneau d'informations + navigation entre simulations */}
                    <MobileInfoPanel
                        isOpen={showMobileInfo}
                        onClose={() => {
                            setShowMobileInfo(false);
                            setMobileTab('simulation');
                        }}
                        simulation={simulation}
                        simulationLevel={simulationLevel}
                    />

                    {/* Toast de notification */}
                    <MobileToast
                        message={toastMessage.text}
                        type={toastMessage.type}
                        isVisible={toastMessage.visible}
                        onClose={() => setToastMessage(prev => ({ ...prev, visible: false }))}
                    />
                </>
            )}
        </main >
    );
}
