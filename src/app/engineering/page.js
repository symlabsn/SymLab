'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { engineeringProjects } from './projectData';

export default function EngineeringPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('Tous');
    const [activeLevel, setActiveLevel] = useState('Tous');

    const categories = [
        'Tous',
        'Mathématiques',
        'Physique',
        'Chimie',
        'Biologie',
        'Génie Civil',
        'Élec & Info'
    ];

    const levels = ['Tous', 'Lycée', 'Université'];

    const levelOrder = {
        'Lycée (Seconde)': 1,
        'Lycée (Première)': 2,
        'Lycée (Terminale)': 3,
        'Université (L1)': 4,
        'Université (L2)': 5,
        'Université (L3)': 6,
        'Université (Master)': 7
    };

    const filteredProjects = engineeringProjects
        .filter(p => {
            const matchesCategory = activeCategory === 'Tous' || p.category === activeCategory;
            const matchesLevel = activeLevel === 'Tous' || p.level.startsWith(activeLevel);
            return matchesCategory && matchesLevel;
        })
        .sort((a, b) => {
            const orderA = levelOrder[a.level] || 99;
            const orderB = levelOrder[b.level] || 99;
            return orderA - orderB;
        });

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-[#2DD4BF] selection:text-black">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2DD4BF] to-blue-600 flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform">
                            S
                        </div>
                        <span className="font-bold text-xl tracking-tight">SymLab <span className="text-[#2DD4BF]">Engineering</span></span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium text-gray-400">
                        <Link href="/simulations" className="hover:text-white transition-colors">Simulations</Link>
                        <Link href="/code" className="hover:text-white transition-colors">Notebook</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-12 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#2DD4BF] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
                        <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider">60+ Projets Concrets</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                        L'Ingénierie par <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-blue-500 to-purple-600">la Pratique.</span>
                    </h1>
                </div>
            </div>

            {/* Level Selector */}
            <div className="flex justify-center mb-8 mt-8">
                <div className="bg-white/5 p-1 rounded-full border border-white/10 flex backdrop-blur-sm">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setActiveLevel(level)}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeLevel === level
                                ? 'bg-[#2DD4BF] text-black shadow-lg shadow-[#2DD4BF]/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 mb-12 overflow-x-auto">
                <div className="flex gap-2 justify-center min-w-max">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-[#2DD4BF] text-black shadow-lg shadow-[#2DD4BF]/20 scale-105'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-[#0F1115] rounded-3xl border border-white/10 overflow-hidden hover:border-[#2DD4BF]/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#2DD4BF]/10 flex flex-col"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="p-8 relative z-10 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        {project.icon}
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="px-3 py-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] text-xs font-bold border border-[#2DD4BF]/20">
                                            {project.level}
                                        </span>
                                        <span className="text-xs text-gray-500 font-mono">{project.duration}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#2DD4BF] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">{project.description}</p>

                                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 border-t border-white/5 pt-4 mt-auto">
                                    <span className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                        {project.domain}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        {project.difficulty}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal (Full Screen Overlay) */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="min-h-screen p-4 md:p-8">
                        <div className="max-w-5xl mx-auto bg-[#0F1115] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                            >
                                ✕
                            </button>

                            {/* Header du Projet */}
                            <div className="relative p-8 md:p-12 border-b border-white/10 overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-[#2DD4BF] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-5xl">{selectedProject.icon}</span>
                                        <div className="flex flex-col">
                                            <h2 className="text-3xl md:text-4xl font-black text-white">{selectedProject.title}</h2>
                                            <span className="text-[#2DD4BF] font-mono text-sm">{selectedProject.domain} • {selectedProject.level}</span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                                                🎯 Le Problème
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                {selectedProject.problemStatement.context}
                                            </p>
                                            <div className="bg-black/30 rounded-lg p-3 text-xs font-mono text-gray-400 border-l-2 border-[#2DD4BF]">
                                                Objectif : {selectedProject.problemStatement.objective}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-6">
                                            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
                                                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-purple-300">
                                                    💡 L'Analogie
                                                </h3>
                                                <p className="text-gray-300 text-sm leading-relaxed italic">
                                                    "{selectedProject.problemStatement.analogy}"
                                                </p>
                                            </div>

                                            {/* Section Histoire */}
                                            {selectedProject.history && (
                                                <div className="bg-gradient-to-br from-amber-900/10 to-orange-900/10 rounded-2xl p-6 border border-amber-500/20 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl">📜</div>
                                                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-400">
                                                        🏛️ Héritage
                                                    </h3>
                                                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                                        {selectedProject.history.context}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProject.history.people.map((person, i) => (
                                                            <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                                                                {person}
                                                            </span>
                                                        ))}
                                                        <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/10">
                                                            {selectedProject.history.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Étapes d'implémentation */}
                            <div className="p-8 md:p-12 bg-black/20">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#2DD4BF] text-black flex items-center justify-center text-sm font-bold">Py</span>
                                    Implémentation pas à pas
                                </h3>

                                <div className="space-y-12">
                                    {selectedProject.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-8 border-l border-white/10">
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#2DD4BF] ring-4 ring-black"></div>

                                            <div className="mb-4">
                                                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                                <div className="text-gray-400 text-sm prose prose-invert prose-sm max-w-none">
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkMath]}
                                                        rehypePlugins={[rehypeKatex]}
                                                    >
                                                        {step.explanation}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>

                                            <div className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden group">
                                                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                                    <span className="text-xs font-mono text-gray-500">Python / SymPy</span>
                                                    <div className="flex gap-1.5">
                                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                                    </div>
                                                </div>
                                                <div className="p-4 overflow-x-auto">
                                                    <pre className="font-mono text-sm text-gray-300 leading-relaxed">
                                                        <code>{step.code}</code>
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to Action */}
                                <div className="mt-16 text-center">
                                    <Link
                                        href="/code"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2DD4BF] text-black font-bold hover:bg-[#2DD4BF]/90 transition-colors shadow-lg shadow-[#2DD4BF]/20 hover:scale-105 transform duration-200"
                                    >
                                        🚀 Tester ce code dans le Notebook
                                    </Link>
                                    <p className="mt-4 text-xs text-gray-500">Copiez le code et collez-le dans le notebook pour voir le résultat en direct.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
