'use client';

import { challenges } from '../challengeData';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ChallengeDayPage({ params }) {
    const { day } = params;
    const challenge = challenges.find(c => c.id === day);

    if (!challenge) {
        return notFound();
    }

    // Trouver précédent et suivant
    const currentIndex = challenges.findIndex(c => c.id === day);
    const prevChallenge = currentIndex > 0 ? challenges[currentIndex - 1] : null;
    const nextChallenge = currentIndex < challenges.length - 1 ? challenges[currentIndex + 1] : null;

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#00F5D4] selection:text-black">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/challenges" className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors">
                        <span>← Retour aux défis</span>
                    </Link>
                    <div className="font-bold text-lg">
                        <span className="text-[#00F5D4]">Jour {day.split('_')[1]}</span>
                    </div>
                    <div className="w-24"></div> {/* Spacer for centering */}
                </div>
            </nav>

            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        {challenge.title.replace(/Jour \d+ — /, '')}
                    </h1>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-[#00F5D4]">
                        <span>Challenge SymPy #{day.split('_')[1]}</span>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-8">

                    {/* Code Section */}
                    <div className="bg-[#0F1115] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
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
                                <code>{challenge.code}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Output Section */}
                    {challenge.output && (
                        <div className="bg-[#0F1115] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00F5D4] to-blue-600"></div>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Sortie Attendue</h3>
                            <div className="font-mono text-[#00F5D4] bg-[#00F5D4]/5 p-4 rounded-xl border border-[#00F5D4]/10">
                                {challenge.output}
                            </div>
                        </div>
                    )}

                    {/* Exercises Section */}
                    {challenge.exercises && challenge.exercises.length > 0 && (
                        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-2xl">💪</span>
                                À vous de jouer !
                            </h2>
                            <ul className="space-y-4">
                                {challenge.exercises.map((ex, i) => (
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

                </div>

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
