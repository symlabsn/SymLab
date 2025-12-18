'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { simulationsCurriculum, simulationMetadata } from './curriculum';
import { useGamification, LevelBar, QuickStats } from '@/components/Gamification';

export default function SimulationsPage() {
    const [selectedLevel, setSelectedLevel] = useState('college');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedGrade, setSelectedGrade] = useState(null);

    // Reset grade filter when changing level
    useEffect(() => {
        setSelectedGrade(null);
    }, [selectedLevel]);

    // Système de gamification
    const { userData, getCurrentLevel } = useGamification();
    const currentLevel = getCurrentLevel();

    // Lire le niveau depuis l'URL et scroll vers la simulation ciblée
    useEffect(() => {
        // Lire le paramètre level de l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const levelParam = urlParams.get('level');
        if (levelParam && (levelParam === 'college' || levelParam === 'lycee')) {
            setSelectedLevel(levelParam);
        }

        // Scroll vers la simulation ciblée (hash dans l'URL)
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            // Petit délai pour laisser le DOM se charger
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Effet visuel pour indiquer la simulation
                    element.classList.add('ring-2', 'ring-[#00F5D4]', 'ring-offset-2', 'ring-offset-black');
                    setTimeout(() => {
                        element.classList.remove('ring-2', 'ring-[#00F5D4]', 'ring-offset-2', 'ring-offset-black');
                    }, 2000);
                }
            }, 300);
        }
    }, []);

    const currentCurriculum = simulationsCurriculum[selectedLevel];

    // Fonction pour obtenir toutes les simulations filtrées
    const getAllSimulations = () => {
        const allSims = [];

        Object.entries(currentCurriculum.levels).forEach(([levelKey, levelData]) => {
            Object.entries(levelData.subjects).forEach(([subjectKey, subjectData]) => {
                subjectData.simulations.forEach(sim => {
                    allSims.push({
                        ...sim,
                        level: levelData.title,
                        gradeKey: levelKey,
                        subject: subjectData.title,
                        subjectKey
                    });
                });
            });
        });

        return allSims.filter(sim => {
            const matchesSearch = sim.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sim.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDifficulty = !selectedDifficulty || sim.difficulty === selectedDifficulty;
            const matchesSubject = !selectedSubject || sim.subjectKey === selectedSubject;
            const matchesGrade = !selectedGrade || sim.gradeKey === selectedGrade;

            return matchesSearch && matchesDifficulty && matchesSubject && matchesGrade;
        });
    };

    const filteredSimulations = getAllSimulations();

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">
            {/* Hero Section avec animation de particules */}
            <div className="relative overflow-hidden border-b border-white/10">
                {/* Fond animé */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Navbar avec Gamification */}
                <nav className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-black/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                            <span>Accueil</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            {/* Niveau et XP */}
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                                <span className="text-lg">⭐</span>
                                <span className="font-bold text-sm" style={{ color: currentLevel?.color }}>
                                    Niv. {currentLevel?.level || 1}
                                </span>
                                <span className="text-xs text-gray-400">|</span>
                                <span className="text-xs text-yellow-400">{userData?.xp || 0} XP</span>
                            </div>
                            <span className="text-[#00F5D4] font-bold">Simulations 3D</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center space-y-6">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] via-purple-500 to-pink-500 animate-gradient px-2">
                            Simulations 3D Immersives
                        </h1>
                        <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
                            Explorez les sciences comme jamais auparavant avec des simulations interactives
                            alignées sur le curriculum sénégalais 🇸🇳
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center px-2">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                                <span className="text-2xl">🎓</span>
                                <span className="text-sm font-semibold">Collège → Lycée</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                                <span className="text-2xl">⚛️</span>
                                <span className="text-sm font-semibold">Physique • Chimie • SVT</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                                <span className="text-2xl">🚀</span>
                                <span className="text-sm font-semibold">{filteredSimulations.length}+ Simulations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sélection du niveau */}
            <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {Object.entries(simulationsCurriculum).map(([key, data]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedLevel(key)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${selectedLevel === key
                                    ? 'bg-gradient-to-r from-[#00F5D4] to-purple-500 text-black shadow-lg scale-105'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                <span className="text-2xl">{data.icon}</span>
                                <div className="text-left">
                                    <div className="font-bold">{data.title}</div>
                                    <div className="text-xs opacity-75">{data.subtitle}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filtres et Recherche */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filtre par Niveau Scolaire (Classe) */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <button
                        onClick={() => setSelectedGrade(null)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${!selectedGrade
                            ? 'bg-white text-black'
                            : 'bg-white/10 text-gray-400 hover:bg-white/20'
                            }`}
                    >
                        Tout voir
                    </button>
                    {Object.entries(currentCurriculum.levels).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedGrade(key)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedGrade === key
                                ? 'bg-[#00F5D4] text-black shadow-[0_0_15px_rgba(0,245,212,0.3)]'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}
                        >
                            {data.title}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                    {/* Recherche */}
                    <div className="md:col-span-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="🔍 Rechercher une simulation..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00F5D4] focus:outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Filtre Matière */}
                    <select
                        value={selectedSubject || ''}
                        onChange={(e) => setSelectedSubject(e.target.value || null)}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-pink-500 focus:outline-none transition-all"
                    >
                        <option value="">Toutes les matières</option>
                        {simulationMetadata.subjects.map(subj => (
                            <option key={subj.id} value={subj.id}>{subj.icon} {subj.label}</option>
                        ))}
                    </select>
                </div>

                {/* Statistiques */}
                <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/20">
                    <p className="text-gray-300">
                        <span className="font-bold text-[#00F5D4]">{filteredSimulations.length}</span> simulation(s) trouvée(s)
                        {searchQuery && ` pour "${searchQuery}"`}
                    </p>
                </div>

                {/* Grille de simulations */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSimulations.map((sim, index) => {
                        return (
                            <Link
                                id={sim.id}
                                key={`${sim.id}-${index}`}
                                href={`/simulations/${sim.id}`}
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl hover:scale-105 hover:border-[#00F5D4]/50 transition-all duration-300 cursor-pointer block"
                            >

                                {/* Image ou Icône */}
                                <div className="mb-4 h-48 relative overflow-hidden rounded-xl border border-white/10 group-hover:border-[#00F5D4]/30 transition-colors">
                                    {sim.image ? (
                                        <Image
                                            src={sim.image}
                                            alt={sim.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="text-6xl flex items-center justify-center h-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                            <div className="group-hover:scale-110 transition-transform duration-300">
                                                {sim.icon}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00F5D4] transition-colors">
                                    {sim.title}
                                </h3>

                                {/* Niveau et Matière */}
                                <div className="flex gap-2 mb-3">
                                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                                        {sim.level}
                                    </span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                                        {sim.subject}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {sim.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                        ⏱️ {sim.duration}
                                    </span>
                                    <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00F5D4] to-cyan-500 text-black font-bold text-sm group-hover:scale-110 transition-transform">
                                        Lancer 🚀
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {sim.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Message si aucune simulation */}
                {filteredSimulations.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-400">Aucune simulation trouvée</h3>
                        <p className="text-gray-500">Essayez de modifier vos filtres ou votre recherche</p>
                    </div>
                )}
            </div>

            {/* Call to Action */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="p-12 rounded-3xl bg-gradient-to-r from-[#00F5D4]/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-xl text-center">
                    <h2 className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-purple-500">
                        Prêt à explorer ?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Chaque simulation est conçue pour vous offrir une expérience d'apprentissage immersive et interactive.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/code" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F5D4] to-cyan-500 text-black font-bold hover:scale-105 transition-transform shadow-lg">
                            💻 Notebook Python
                        </Link>
                        <Link href="/programming" className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
                            📚 Cours de Programmation
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
