'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { challenges } from './challengeData';
import { challengesEnriched, progressionSystem } from './challengeDataEnriched';

export default function ChallengesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [completedDays, setCompletedDays] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Charger la progression depuis localStorage
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('symlab_progress');
            if (saved) {
                setCompletedDays(JSON.parse(saved));
            }
        }
    }, []);

    const totalXP = progressionSystem.getTotalXP(completedDays);
    const levelInfo = progressionSystem.getLevel(totalXP);

    const filteredChallenges = challenges
        .filter(challenge => {
            // Ne montrer que les challenges qui ont des données enrichies
            const hasEnrichedData = challengesEnriched.some(c => c && c.id === challenge.id);
            return hasEnrichedData && challenge.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#00F5D4] selection:text-black">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F5D4] to-blue-600 flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform">
                            S
                        </div>
                        <span className="font-bold text-xl tracking-tight">SymLab <span className="text-[#00F5D4]">Challenges</span></span>
                    </Link>
                    <div className="flex gap-6 items-center">
                        <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <div className="text-xs font-mono text-gray-400">
                                Niveau {levelInfo.level} • {levelInfo.title}
                            </div>
                            <div className="text-xs font-bold text-[#00F5D4]">
                                {totalXP} XP
                            </div>
                            <div className="text-xs text-gray-500">
                                {completedDays.length}/100
                            </div>
                        </div>
                        <div className="flex gap-4 text-sm font-medium text-gray-400">
                            <Link href="/engineering" className="hover:text-white transition-colors">Ingénierie</Link>
                            <Link href="/code" className="hover:text-white transition-colors">Notebook</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-12 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00F5D4] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse"></span>
                        <span className="text-xs font-mono text-[#00F5D4] uppercase tracking-wider">100 Jours de Code</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                        Maîtrisez SymPy en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-blue-500 to-purple-600">100 Jours.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Un parcours intensif pour devenir expert en calcul symbolique. Du lycée à la recherche avancée, relevez un défi chaque jour.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00F5D4] to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <input
                            type="text"
                            placeholder="Rechercher un défi (ex: Intégrales, Matrices...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="relative w-full bg-[#0F1115] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                            🔍
                        </div>
                    </div>
                </div>
            </div>

            {/* Modules Explanation Section */}
            <div className="max-w-7xl mx-auto px-4 mb-20">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-lg">📚</span>
                    Modules & Outils
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#0F1115] border border-white/10 rounded-2xl p-6 hover:border-[#00F5D4]/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-2xl mb-4 text-orange-500">
                            🐍
                        </div>
                        <h3 className="text-xl font-bold mb-2">SymPy Core</h3>
                        <p className="text-gray-400 text-sm">
                            Le cœur du calcul symbolique. Manipulation d'expressions, résolution d'équations, calcul infinitésimal (dérivées, intégrales, limites).
                        </p>
                    </div>
                    <div className="bg-[#0F1115] border border-white/10 rounded-2xl p-6 hover:border-[#00F5D4]/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl mb-4 text-blue-500">
                            🔢
                        </div>
                        <h3 className="text-xl font-bold mb-2">NumPy & Matplotlib</h3>
                        <p className="text-gray-400 text-sm">
                            Pour le calcul numérique haute performance et la visualisation graphique des résultats symboliques.
                        </p>
                    </div>
                    <div className="bg-[#0F1115] border border-white/10 rounded-2xl p-6 hover:border-[#00F5D4]/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl mb-4 text-purple-500">
                            🧠
                        </div>
                        <h3 className="text-xl font-bold mb-2">Jupyter & IPython</h3>
                        <p className="text-gray-400 text-sm">
                            L'environnement interactif idéal pour expérimenter, documenter et partager vos découvertes mathématiques.
                        </p>
                    </div>
                </div>
            </div>

            {/* Challenges Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">Les Défis ({filteredChallenges.length})</h2>
                    <div className="text-sm text-gray-500 font-mono">
                        Progression : {challengesEnriched.length}/100 jours enrichis
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredChallenges.map((challenge, index) => {
                        const enriched = challengesEnriched.find(c => c && c.id === challenge.id);
                        const dayNumber = parseInt(challenge.id.split('_')[1]);
                        const isUnlocked = enriched ? progressionSystem.isUnlocked(dayNumber, completedDays) : true;
                        const isCompleted = completedDays.includes(challenge.id);

                        return (
                            <Link
                                href={`/challenges/${challenge.id}`}
                                key={challenge.id}
                                className={`group relative bg-[#0F1115] rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col h-full ${isUnlocked
                                    ? 'border-white/10 hover:border-[#00F5D4]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00F5D4]/10'
                                    : 'border-white/5 opacity-60 cursor-not-allowed'
                                    }`}
                            >
                                {!isUnlocked && (
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl mb-2">🔒</div>
                                            <div className="text-xs text-gray-400">Verrouillé</div>
                                        </div>
                                    </div>
                                )}

                                {isCompleted && (
                                    <div className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                        ✓
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5D4]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="p-5 relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="font-mono text-xs text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-1 rounded-md border border-[#00F5D4]/20">
                                            Jour {challenge.id.split('_')[1]}
                                        </span>
                                        {enriched && (
                                            <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                                                {enriched.difficulty}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="font-bold text-lg mb-3 group-hover:text-[#00F5D4] transition-colors line-clamp-2">
                                        {challenge.title.replace(/Jour \d+ — /, '')}
                                    </h3>

                                    {enriched && (
                                        <div className="mb-3 flex flex-wrap gap-1">
                                            <span className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-300">
                                                {enriched.masteryLevel}
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-300">
                                                +{enriched.xpReward} XP
                                            </span>
                                        </div>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <code>sympy</code>
                                        </span>
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            {isUnlocked ? 'Voir le défi →' : 'Verrouillé'}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
