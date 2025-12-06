'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { collegeSimulationsData } from '../collegeData';
import { lyceeSimulationsData } from '../lyceeData';

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
    // Ajouter d'autres niveaux ici plus tard
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

export default function SimulationDetailPage({ params }) {
    const resolvedParams = use(params);
    const [activeTab, setActiveTab] = useState('simulation');
    const [currentExercise, setCurrentExercise] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const simulation = allSimulationsData[resolvedParams.id] || defaultSimulation;
    const simulationLevel = getSimulationLevel(resolvedParams.id);

    const handleAnswerSelect = (index) => {
        setSelectedAnswer(index);
        setShowExplanation(true);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">
            {/* Navbar */}
            <nav className="border-b border-white/10 backdrop-blur-xl bg-black/50 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/simulations" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                        <span className="text-2xl">←</span>
                        <span>Retour aux simulations</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-[#00F5D4] font-bold">Simulation 3D</span>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500">
                        {simulation.title}
                    </h1>
                    <p className="text-xl text-gray-300">{simulation.description}</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    {['simulation', 'analogy', 'theory', 'exercises'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black shadow-lg scale-105'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {tab === 'simulation' && '🎮 Simulation'}
                            {tab === 'analogy' && '🌍 Analogie'}
                            {tab === 'theory' && '📚 Théorie'}
                            {tab === 'exercises' && '✏️ Exercices'}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {activeTab === 'simulation' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <Simulation3D type={simulation.type} config={simulation.config} />

                                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                                    <h3 className="text-xl font-bold mb-4 text-[#00F5D4]">🎮 Contrôles</h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🖱️</span>
                                            <div>
                                                <p className="font-semibold">Clic gauche + Glisser</p>
                                                <p className="text-gray-400">Rotation</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🔍</span>
                                            <div>
                                                <p className="font-semibold">Molette</p>
                                                <p className="text-gray-400">Zoom</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🖱️</span>
                                            <div>
                                                <p className="font-semibold">Clic droit + Glisser</p>
                                                <p className="text-gray-400">Déplacement</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">🔄</span>
                                            <div>
                                                <p className="font-semibold">Rotation automatique</p>
                                                <p className="text-gray-400">Activée par défaut</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'analogy' && simulation.analogy && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00F5D4]/10 to-purple-500/10 border border-[#00F5D4]/30">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-4xl">🇸🇳</span>
                                        <h2 className="text-2xl font-bold text-[#00F5D4]">{simulation.analogy.title}</h2>
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

                        {activeTab === 'exercises' && simulation.exercises && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Question {currentExercise + 1}/{simulation.exercises.length}</h3>
                                        <div className="text-sm text-gray-400">
                                            {currentExercise + 1} sur {simulation.exercises.length}
                                        </div>
                                    </div>

                                    <p className="text-xl mb-6">{simulation.exercises[currentExercise].question}</p>

                                    <div className="space-y-3 mb-6">
                                        {simulation.exercises[currentExercise].options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleAnswerSelect(index)}
                                                disabled={showExplanation}
                                                className={`w-full p-4 rounded-xl text-left transition-all ${showExplanation
                                                    ? index === simulation.exercises[currentExercise].correct
                                                        ? 'bg-green-500/20 border-2 border-green-500'
                                                        : index === selectedAnswer
                                                            ? 'bg-red-500/20 border-2 border-red-500'
                                                            : 'bg-white/5 border border-white/10'
                                                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00F5D4]/50'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">
                                                        {String.fromCharCode(65 + index)}
                                                    </span>
                                                    <span>{option}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {showExplanation && (
                                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-6 animate-in fade-in slide-in-from-top-2">
                                            <p className="text-sm text-blue-300">
                                                💡 {simulation.exercises[currentExercise].explanation}
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex gap-4">
                                        {currentExercise > 0 && (
                                            <button
                                                onClick={() => {
                                                    setCurrentExercise(currentExercise - 1);
                                                    setSelectedAnswer(null);
                                                    setShowExplanation(false);
                                                }}
                                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                            >
                                                ← Précédent
                                            </button>
                                        )}
                                        {currentExercise < simulation.exercises.length - 1 && (
                                            <button
                                                onClick={() => {
                                                    setCurrentExercise(currentExercise + 1);
                                                    setSelectedAnswer(null);
                                                    setShowExplanation(false);
                                                }}
                                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black font-bold hover:scale-105 transition-transform ml-auto"
                                            >
                                                Suivant →
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Informations */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                            <h3 className="text-xl font-bold mb-4 text-[#00F5D4]">ℹ️ Informations</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-gray-400">Niveau</p>
                                    <p className="font-semibold">{simulationLevel.name}</p>
                                    {simulationLevel.description && (
                                        <p className="text-xs text-gray-500">{simulationLevel.description}</p>
                                    )}
                                </div>
                                <div>
                                    <p className="text-gray-400">Type</p>
                                    <p className="font-semibold capitalize">{simulation.type}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Durée estimée</p>
                                    <p className="font-semibold">30-45 minutes</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Difficulté</p>
                                    <p className="font-semibold text-green-400">
                                        {simulationLevel.name.includes('Collège') ? 'Facile / Moyen' : 'Moyen / Difficile'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                            <h3 className="text-xl font-bold mb-4 text-[#00F5D4]">⚡ Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-cyan-500 text-black font-bold hover:scale-105 transition-transform">
                                    📥 Télécharger le PDF
                                </button>
                                <button className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    ⭐ Ajouter aux favoris
                                </button>
                                <button className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                    📤 Partager
                                </button>
                            </div>
                        </div>

                        {/* Simulations liées */}
                        {simulation.relatedSimulations && (
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                                <h3 className="text-xl font-bold mb-4 text-[#00F5D4]">🔗 Simulations liées</h3>
                                <div className="space-y-2 text-sm">
                                    {simulation.relatedSimulations.map(simId => (
                                        <Link
                                            key={simId}
                                            href={`/simulations/${simId}`}
                                            className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all capitalize"
                                        >
                                            {simId.replace(/-/g, ' ')}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
