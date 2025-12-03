'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProgrammingPage() {
    const [selectedChapter, setSelectedChapter] = useState(null);

    const curriculum = [
        {
            id: 'intro',
            title: '1. Introduction à Python',
            icon: '🐍',
            color: '#00F5D4',
            topics: [
                'Histoire et philosophie de Python',
                'Pourquoi Python pour les sciences ?',
                'Installation et environnement de développement',
                'Premier programme : Hello Science!'
            ]
        },
        {
            id: 'basics',
            title: '2. Fondamentaux',
            icon: '📚',
            color: '#7C3AED',
            topics: [
                'Variables et types de données',
                'Opérateurs arithmétiques et logiques',
                'Structures de contrôle (if, for, while)',
                'Fonctions et portée des variables'
            ]
        },
        {
            id: 'data-structures',
            title: '3. Structures de Données',
            icon: '🗂️',
            color: '#FF9F1C',
            topics: [
                'Listes et tuples',
                'Dictionnaires et ensembles',
                'Compréhensions de listes',
                'Manipulation de chaînes'
            ]
        },
        {
            id: 'scientific',
            title: '4. Python Scientifique',
            icon: '🔬',
            color: '#10B981',
            topics: [
                'NumPy : Calcul numérique',
                'Matplotlib : Visualisation de données',
                'SciPy : Calculs scientifiques avancés',
                'Pandas : Analyse de données'
            ]
        },
        {
            id: 'sympy',
            title: '5. SymPy - Calcul Symbolique',
            icon: '∑',
            color: '#00F5D4',
            topics: [
                'Introduction au calcul symbolique',
                'Algèbre : Simplification et résolution',
                'Calcul différentiel et intégral',
                'Équations différentielles',
                'Algèbre linéaire symbolique',
                'Applications en physique et ingénierie'
            ]
        },
        {
            id: 'advanced',
            title: '6. Concepts Avancés',
            icon: '🚀',
            color: '#7C3AED',
            topics: [
                'Programmation orientée objet',
                'Gestion des fichiers et données',
                'Modules et packages',
                'Bonnes pratiques et debugging'
            ]
        },
        {
            id: 'projects',
            title: '7. Projets Scientifiques',
            icon: '🎯',
            color: '#FF9F1C',
            topics: [
                'Simulation de mouvement projectile',
                'Analyse de données expérimentales',
                'Modélisation mathématique',
                'Visualisation scientifique avancée'
            ]
        }
    ];

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Header */}
            <section className="max-w-6xl mx-auto mb-16 text-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 mb-6">
                    <span className="text-[#00F5D4] text-sm font-bold tracking-widest">PYTHON POUR LES SCIENCES</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    Maîtrisez Python
                </h1>

                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    De l'histoire du langage à la maîtrise complète de <span className="text-[#00F5D4] font-bold">SymPy</span>,
                    apprenez Python avec une approche scientifique et pratique.
                </p>
            </section>

            {/* Curriculum Grid */}
            <section className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {curriculum.map((chapter) => (
                        <div
                            key={chapter.id}
                            className="sci-card group p-6 cursor-pointer transition-all duration-300 hover:scale-105"
                            style={{
                                '--accent-color': chapter.color,
                                '--glow-color': `${chapter.color}40`
                            }}
                            onClick={() => setSelectedChapter(chapter.id === selectedChapter ? null : chapter.id)}
                        >
                            {/* Chapter Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-4xl">{chapter.icon}</div>
                                <h3 className="text-xl font-bold text-white flex-1">{chapter.title}</h3>
                            </div>

                            {/* Topics List */}
                            <div className={`overflow-hidden transition-all duration-300 ${selectedChapter === chapter.id ? 'max-h-96' : 'max-h-0'}`}>
                                <ul className="space-y-2 mt-4 pt-4 border-t border-white/10">
                                    {chapter.topics.map((topic, idx) => (
                                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-[#00F5D4] mt-1">▸</span>
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Expand Indicator */}
                            {selectedChapter !== chapter.id && (
                                <div className="mt-4 text-center text-xs text-gray-500 font-mono">
                                    Cliquer pour voir les sujets ▼
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto mt-20 text-center">
                <div className="sci-card p-8" style={{ '--accent-color': '#00F5D4' }}>
                    <h2 className="text-2xl font-bold text-white mb-4">Prêt à commencer ?</h2>
                    <p className="text-gray-400 mb-6">
                        Lancez votre premier notebook Python et commencez votre voyage dans la programmation scientifique.
                    </p>
                    <Link
                        href="/code"
                        className="inline-block px-8 py-3 rounded-lg font-bold text-black transition-all duration-300 hover:scale-105"
                        style={{ background: 'linear-gradient(90deg, #00F5D4, #7C3AED)' }}
                    >
                        Ouvrir l'Éditeur Python
                    </Link>
                </div>
            </section>
        </main>
    );
}
