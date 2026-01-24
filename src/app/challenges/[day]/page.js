'use client';

import { useState, useEffect, use } from 'react';
import { challenges } from '../challengeData';
import { challengesEnriched, progressionSystem, badges } from '../challengeDataEnriched';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MathDisplay from '@/components/MathDisplay';

export default function ChallengeDayPage({ params }) {
    const { day } = use(params);

    const challenge = challenges.find(c => c.id === day);

    const enrichedData = challengesEnriched.find(c => c.id === day);

    // État local pour la progression (en production, utiliser localStorage ou DB)
    const [completedDays, setCompletedDays] = useState([]);
    const [showTheory, setShowTheory] = useState(false);

    useEffect(() => {
        // Charger la progression depuis localStorage
        const saved = localStorage.getItem('symlab_progress');
        if (saved) {
            setCompletedDays(JSON.parse(saved));
        }
    }, []);

    const markAsCompleted = () => {
        if (!completedDays.includes(day)) {
            const newCompleted = [...completedDays, day];
            setCompletedDays(newCompleted);
            localStorage.setItem('symlab_progress', JSON.stringify(newCompleted));
        }
    };

    // Si ni challenge ni enrichedData n'existent, alors c'est une 404
    if (!challenge && !enrichedData) {
        return (
            <div className="min-h-screen bg-black text-white p-20">
                <h1 className="text-red-500 text-4xl mb-4">Erreur de chargement</h1>
                <p>Le jour &quot;{day}&quot; est introuvable.</p>
                <Link href="/challenges" className="text-[#00F5D4] mt-8 block">← Retour à la liste</Link>
            </div>
        );
    }

    // Si challenge est manquant mais enrichedData existe, on crée un objet dummy pour éviter le crash
    const displayChallenge = challenge || {
        id: day,
        title: enrichedData?.title ? `Jour ${day.split('_')[1]} — ${enrichedData.title}` : `Jour ${day.split('_')[1]}`,
        code: "# Code non disponible pour le moment",
        output: "Non disponible",
        exercises: []
    };

    // Vérifier si le jour est débloqué
    const isUnlocked = enrichedData ?
        progressionSystem.isUnlocked(enrichedData.dayNumber, completedDays) :
        true;

    const currentIndex = challenges.findIndex(c => c.id === day);
    // Gestion des liens précédent/suivant si challenges est incomplet
    const prevChallenge = currentIndex > 0 ? challenges[currentIndex - 1] : null;
    const nextChallenge = currentIndex !== -1 && currentIndex < challenges.length - 1 ? challenges[currentIndex + 1] : null;

    const totalXP = progressionSystem.getTotalXP(completedDays);
    const levelInfo = progressionSystem.getLevel(totalXP);
    const isCompleted = completedDays.includes(day);

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#00F5D4] selection:text-black">
            {/* Navbar avec progression */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/challenges" className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors">
                        <span>← Retour aux défis</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="text-xs font-mono text-gray-500">
                            Niveau {levelInfo.level} • {levelInfo.title}
                        </div>
                        <div className="text-xs font-bold text-[#00F5D4]">
                            {totalXP} XP
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-20 max-w-5xl mx-auto px-4">
                {/* Header avec badge et statut */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-[#00F5D4]">
                            <span>Jour {day.split('_')[1]}</span>
                            {enrichedData && <span>• {enrichedData.difficulty}</span>}
                        </div>
                        {isCompleted && (
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-bold">
                                ✓ Complété
                            </div>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                        {displayChallenge.title.replace(/Jour \d+ — /, '')}
                    </h1>

                    {enrichedData && (
                        <div className="flex flex-wrap gap-3 mb-6">
                            <div className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm">
                                📊 {enrichedData.masteryLevel}
                            </div>
                            <div className="px-3 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm">
                                ⭐ +{enrichedData.xpReward} XP
                            </div>
                            {enrichedData.badge && (
                                <div className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">
                                    {enrichedData.badge}
                                </div>
                            )}
                        </div>
                    )}

                    {!isUnlocked && (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-6">
                            <div className="flex items-center gap-3 text-red-400">
                                <span className="text-3xl">🔒</span>
                                <div>
                                    <div className="font-bold text-lg">Jour Verrouillé</div>
                                    <div className="text-sm text-red-300">
                                        Complétez le Jour {enrichedData.requiredDay} pour débloquer ce défi.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Analogie Africaine */}
                {enrichedData && enrichedData.africanAnalogy && (
                    <div className="mb-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                            <span className="text-4xl flex-shrink-0">🌍</span>
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-orange-300">Analogie Africaine</h3>
                                <p className="text-gray-300 leading-relaxed italic">
                                    {enrichedData.africanAnalogy}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Théorie Mathématique (si enrichie) */}
                {enrichedData && enrichedData.theory && (
                    <div className="mb-8">
                        <button
                            onClick={() => setShowTheory(!showTheory)}
                            className="w-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all text-left"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">📚</span>
                                    <div>
                                        <h2 className="text-2xl font-bold">{enrichedData.theory.title}</h2>
                                        <p className="text-gray-400 text-sm mt-1">Cliquez pour {showTheory ? 'masquer' : 'révéler'} la théorie</p>
                                    </div>
                                </div>
                                <span className="text-2xl">{showTheory ? '▼' : '▶'}</span>
                            </div>
                        </button>

                        {showTheory && (
                            <div className="mt-4 bg-[#0F1115] border border-white/10 rounded-2xl p-8 space-y-6 animate-fade-in">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-[#00F5D4]">Concept</h3>
                                    <p className="text-gray-300 leading-relaxed">{enrichedData.theory.content}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-[#00F5D4]">Fondements Mathématiques</h3>
                                    <div className="bg-black/30 p-4 rounded-xl border border-white/5 font-mono text-sm text-gray-300 whitespace-pre-wrap">
                                        {enrichedData.theory.mathematicalFoundation}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-[#00F5D4]">Histoire & Scientifiques</h3>
                                    <div className="space-y-4">
                                        {enrichedData.theory.scientists.map((scientist, idx) => (
                                            <div key={idx} className="bg-black/20 p-4 rounded-xl border border-white/5">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-2xl">👨‍🔬</span>
                                                    <div className="flex-1">
                                                        <div className="font-bold text-lg">{scientist.name}</div>
                                                        <div className="text-sm text-gray-500 mb-2">{scientist.year}</div>
                                                        <div className="text-gray-300 text-sm mb-2">{scientist.contribution}</div>
                                                        {scientist.context && (
                                                            <div className="text-xs text-gray-400 italic border-l-2 border-[#00F5D4]/30 pl-3 mt-2">
                                                                {scientist.context}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {enrichedData.practicalApplication && (
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-[#00F5D4]">Applications Pratiques</h3>
                                        <p className="text-gray-300 leading-relaxed">{enrichedData.practicalApplication}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Code Section */}
                {isUnlocked && (
                    <>
                        <div className="bg-[#0F1115] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 mb-8">
                            <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <span className="text-xs font-mono text-gray-500">solution.py</span>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed text-gray-300">
                                    <code>{displayChallenge.code}</code>
                                </pre>
                            </div>
                        </div>

                        {/* Output Section */}
                        {displayChallenge.output && (
                            <div className="bg-[#0F1115] border border-white/10 rounded-2xl p-6 relative overflow-hidden mb-8">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00F5D4] to-blue-600"></div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Sortie Attendue</h3>
                                <div className="font-mono text-[#00F5D4] bg-[#00F5D4]/5 p-4 rounded-xl border border-[#00F5D4]/10">
                                    <MathDisplay>{displayChallenge.output}</MathDisplay>
                                </div>
                            </div>
                        )}

                        {/* Exercises Section */}
                        {displayChallenge.exercises && displayChallenge.exercises.length > 0 && (
                            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 mb-8">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="text-2xl">💪</span>
                                    À vous de jouer !
                                </h2>
                                <ul className="space-y-4">
                                    {displayChallenge.exercises.map((ex, i) => (
                                        <li key={i} className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] flex items-center justify-center text-xs font-bold mt-0.5">
                                                {i + 1}
                                            </span>
                                            <span className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: ex }}></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Bouton de complétion */}
                        {!isCompleted && (
                            <div className="text-center mb-8">
                                <button
                                    onClick={markAsCompleted}
                                    className="px-8 py-4 bg-gradient-to-r from-[#00F5D4] to-blue-600 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-[#00F5D4]/20"
                                >
                                    ✓ Marquer comme Complété (+{enrichedData?.xpReward || 10} XP)
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Navigation Footer */}
                <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
                    {prevChallenge ? (
                        <Link
                            href={`/challenges/${prevChallenge.id}`}
                            className="group flex items-center gap-4 text-left hover:bg-white/5 p-4 rounded-2xl transition-all border border-transparent hover:border-white/10"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00F5D4] group-hover:text-black transition-colors">
                                ←
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-mono mb-1">Jour Précédent</div>
                                <div className="font-bold text-sm text-gray-300 group-hover:text-white">
                                    {prevChallenge.title.replace(/Jour \d+ — /, '')}
                                </div>
                            </div>
                        </Link>
                    ) : <div></div>}

                    {nextChallenge ? (
                        <Link
                            href={`/challenges/${nextChallenge.id}`}
                            className="group flex items-center gap-4 text-right hover:bg-white/5 p-4 rounded-2xl transition-all border border-transparent hover:border-white/10"
                        >
                            <div>
                                <div className="text-xs text-gray-500 font-mono mb-1">Jour Suivant</div>
                                <div className="font-bold text-sm text-gray-300 group-hover:text-white">
                                    {nextChallenge.title.replace(/Jour \d+ — /, '')}
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00F5D4] group-hover:text-black transition-colors">
                                →
                            </div>
                        </Link>
                    ) : <div></div>}
                </div>
            </div>
        </main>
    );
}
