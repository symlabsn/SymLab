'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { collegeSimulationsData } from '../collegeData';
import { lyceeSimulationsData } from '../lyceeData';
import { getSimulationImage, simulationHotspots } from '../imageConfig';

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
                <span className="text-gray-300">Vitesse d'animation</span>
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
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-contain bg-gradient-to-br from-slate-900 to-black"
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

// Composant Barre d'outils flottante
const FloatingToolbar = ({
    onScreenshot,
    onReset,
    onHelp,
    isPlaying,
    setIsPlaying
}) => (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 p-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 z-10">
        <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${isPlaying ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}
            title={isPlaying ? "Pause" : "Play"}
        >
            {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button
            onClick={onReset}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
            title="Réinitialiser"
        >
            🔄
        </button>
        <button
            onClick={onScreenshot}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
            title="Capture d'écran"
        >
            📸
        </button>
        <button
            onClick={onHelp}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
            title="Aide"
        >
            ❓
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
    const [resolvedParams, setResolvedParams] = useState(null);
    const [activeTab, setActiveTab] = useState('analogy');
    const [currentExercise, setCurrentExercise] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

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

    // Ref pour le conteneur de simulation
    const simulationContainerRef = useRef(null);

    useEffect(() => {
        Promise.resolve(params).then(setResolvedParams);
    }, [params]);

    const handleChallengeComplete = useCallback((score, total) => {
        setQuizResults({ score, total });
        setShowResultsModal(true);
    }, []);

    const handleScreenshot = useCallback(() => {
        // Logique de capture d'écran (notification pour l'instant)
        alert('📸 Capture d\'écran enregistrée ! (Fonctionnalité à venir)');
    }, []);

    const handleReset = useCallback(() => {
        setSpeed(1);
        setAutoRotate(true);
        setZoom(1);
        setShowLabels(true);
        setShowGrid(true);
        setIsPlaying(true);
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

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">
            {/* Navbar améliorée - Mobile First */}
            <nav className="border-b border-white/10 backdrop-blur-xl bg-black/80 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
                    <Link
                        href={`/simulations?level=${lyceeSimulationsData[resolvedParams.id] ? 'lycee' : 'college'}#${resolvedParams.id}`}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 sm:gap-2 group"
                    >
                        <span className="text-xl sm:text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="hidden sm:inline">Retour aux simulations</span>
                        <span className="sm:hidden text-sm">Retour</span>
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="hidden sm:block"><SessionTimer startTime={sessionStartTime} /></div>
                        <AnimatedBadge color="cyan">
                            <span className="hidden sm:inline">Simulation 3D</span>
                            <span className="sm:hidden">3D</span>
                        </AnimatedBadge>
                    </div>
                </div>
            </nav>

            {/* Header avec titre animé - Mobile First */}
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
                <div className="mb-4 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-4">
                        <AnimatedBadge color="purple">{simulationLevel.name}</AnimatedBadge>
                        <AnimatedBadge color="green">{simulationLevel.description}</AnimatedBadge>
                    </div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500">
                        {simulation.title}
                    </h1>
                    <p className="text-sm sm:text-xl text-gray-300 line-clamp-2 sm:line-clamp-none">{simulation.description}</p>
                </div>

                {/* Tabs améliorés - Mobile First avec scroll horizontal */}
                <div className="flex gap-1.5 sm:gap-3 mb-4 sm:mb-8 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
                    {[
                        { id: 'analogy', label: 'Analogie', icon: '🌍', shortLabel: 'Analo.' },
                        { id: 'theory', label: 'Théorie', icon: '📚', shortLabel: 'Théo.' },
                        { id: 'challenges', label: 'Mode Défi', icon: '⚡', shortLabel: 'Défi' },
                        { id: 'gallery', label: 'Galerie', icon: '🖼️', shortLabel: 'Gal.' },
                        { id: 'simulation', label: 'Simulation', icon: '🎮', shortLabel: 'Simu' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-2.5 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-1 sm:gap-2 flex-shrink-0 ${activeTab === tab.id
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
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Conteneur de simulation avec barre d'outils */}
                                <div ref={simulationContainerRef} className="relative rounded-2xl overflow-hidden">
                                    <Simulation3D type={simulation.type} config={simulation.config} />
                                    <FloatingToolbar
                                        onScreenshot={handleScreenshot}
                                        onReset={handleReset}
                                        onHelp={() => setShowHelpModal(true)}
                                        isPlaying={isPlaying}
                                        setIsPlaying={setIsPlaying}
                                    />
                                    <div className="absolute top-4 right-4">
                                        <FullscreenButton containerRef={simulationContainerRef} />
                                    </div>
                                </div>

                                {/* Visualisation Interactive */}
                                <ImageSimulation
                                    simulationId={resolvedParams.id}
                                    title={simulation.title}
                                />

                                {/* Contrôles et infos en grille - Caché sur mobile */}
                                <div className="hidden sm:grid md:grid-cols-2 gap-4">
                                    <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#00F5D4]">🎮 Contrôles</h3>
                                        <div className="grid grid-cols-2 gap-2 sm:gap-4 text-sm">
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5">
                                                <span className="text-xl sm:text-2xl">🖱️</span>
                                                <div>
                                                    <p className="font-semibold text-xs sm:text-sm">Rotation</p>
                                                    <p className="text-gray-400 text-xs hidden sm:block">Clic + Glisser</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5">
                                                <span className="text-xl sm:text-2xl">🔍</span>
                                                <div>
                                                    <p className="font-semibold text-xs sm:text-sm">Zoom</p>
                                                    <p className="text-gray-400 text-xs hidden sm:block">Molette</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5">
                                                <span className="text-xl sm:text-2xl">👆</span>
                                                <div>
                                                    <p className="font-semibold text-xs sm:text-sm">Déplacer</p>
                                                    <p className="text-gray-400 text-xs hidden sm:block">Clic droit</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5">
                                                <span className="text-xl sm:text-2xl">🔄</span>
                                                <div>
                                                    <p className="font-semibold text-xs sm:text-sm">Auto-rotation</p>
                                                    <p className="text-gray-400 text-xs hidden sm:block">Activée</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contrôles avancés - Visible sur tous les écrans */}
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
                                </div>
                            </div>
                        )}

                        {activeTab === 'challenges' && (
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
                                <QuickChallenges simulation={simulation} onComplete={handleChallengeComplete} />
                            </div>
                        )}

                        {activeTab === 'gallery' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Image de cette simulation */}
                                <div className="rounded-2xl overflow-hidden">
                                    <ImageSimulation
                                        simulationId={resolvedParams.id}
                                        title={simulation.title}
                                    />
                                </div>

                                {/* Galerie d'exploration */}
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-4">🔬 Explorer d'autres concepts</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {[
                                            { id: 'cell-structure', title: 'Cellule', icon: '🔬' },
                                            { id: 'blood-circulation', title: 'Cœur', icon: '❤️' },
                                            { id: 'volcano-eruption', title: 'Volcan', icon: '🌋' },
                                            { id: 'water-cycle', title: 'Cycle Eau', icon: '💧' },
                                            { id: 'nervous-system', title: 'Neurone', icon: '🧠' },
                                            { id: 'atomic-structure', title: 'Atome', icon: '⚛️' },
                                            { id: 'photosynthesis', title: 'Photosynthèse', icon: '🌱' },
                                            { id: 'genetics-dna', title: 'ADN', icon: '🧬' },
                                            { id: 'digestive-system', title: 'Digestion', icon: '🍽️' },
                                            { id: 'respiration-human', title: 'Respiration', icon: '🫁' },
                                            { id: 'states-of-matter', title: 'États Matière', icon: '🧊' },
                                            { id: 'simple-circuits', title: 'Circuits', icon: '💡' },
                                            { id: 'food-chain', title: 'Chaîne Alim.', icon: '🦁' },
                                            { id: 'chemical-reactions', title: 'Réactions', icon: '⚗️' },
                                            { id: 'plate-tectonics', title: 'Tectonique', icon: '🌍' },
                                            { id: 'plant-growth', title: 'Plante', icon: '🌿' },
                                        ].filter(s => s.id !== resolvedParams.id).slice(0, 8).map((sim, i) => (
                                            <a
                                                key={i}
                                                href={`/simulations/${sim.id}`}
                                                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all text-center group"
                                            >
                                                <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{sim.icon}</span>
                                                <span className="text-xs text-white font-medium">{sim.title}</span>
                                            </a>
                                        ))}
                                    </div>
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
                                    <div className="whitespace-pre-line text-lg text-gray-200 leading-relaxed">
                                        {simulation.analogy.content}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'theory' && (
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 prose prose-invert max-w-none animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="whitespace-pre-line text-gray-300 leading-relaxed">
                                    {simulation.theory}
                                </div>
                            </div>
                        )}

                        {/* Section Exercices supprimée - remplacée par Mode Défi */}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <HelpModal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} />
            <ResultsModal
                isOpen={showResultsModal}
                onClose={() => setShowResultsModal(false)}
                score={quizResults.score}
                total={quizResults.total}
            />
        </main>
    );
}
