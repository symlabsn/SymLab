'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { engineeringProjects } from './projectData';

// SVG Icons
const CodeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const BookIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

// Feature Cards Data - like Python Lab
const features = [
    {
        icon: "🔬",
        title: "Sciences Appliquées",
        description: "Projets pratiques en physique et chimie",
        gradient: "from-[#00F5D4] to-[#00D9A8]"
    },
    {
        icon: "📐",
        title: "Mathématiques",
        description: "Algorithmes et calculs avancés",
        gradient: "from-[#7C3AED] to-[#6D28D9]"
    },
    {
        icon: "⚡",
        title: "Électronique",
        description: "Circuits et systèmes embarqués",
        gradient: "from-[#FF9F1C] to-[#F59E0B]"
    },
    {
        icon: "🧬",
        title: "Biologie & Chimie",
        description: "Modélisation et simulations bio",
        gradient: "from-[#EC4899] to-[#BE185D]"
    }
];

export default function EngineeringPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('Tous');
    const [activeLevel, setActiveLevel] = useState('Tous');
    const [copiedCode, setCopiedCode] = useState(null);

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

    const handleCopyCode = (code, stepIdx) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(stepIdx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    // Stats
    const totalProjects = engineeringProjects.length;
    const totalDomains = [...new Set(engineeringProjects.map(p => p.domain))].length;

    return (
        <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2DD4BF] rounded-full blur-[180px] opacity-10 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[150px] opacity-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9F1C] rounded-full blur-[200px] opacity-5 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#2DD4BF] to-[#7C3AED] flex items-center justify-center ring-2 ring-[#2DD4BF]/30 group-hover:ring-[#2DD4BF]/60 transition-all">
                            <span className="text-xl">🔬</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight">
                            SymLab <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]">Engineering</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href="/code" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm font-medium">
                            <CodeIcon />
                            <span className="hidden sm:inline">Notebook</span>
                        </Link>
                        <Link href="/programming" className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#2DD4BF] to-[#00D9A8] text-black font-bold text-sm hover:shadow-lg hover:shadow-[#2DD4BF]/20 transition-all">
                            <BookIcon />
                            <span className="hidden sm:inline">Python Lab</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section Premium */}
            <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Badge animé */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#2DD4BF]/10 via-[#7C3AED]/10 to-[#FF9F1C]/10 border border-[#2DD4BF]/30 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
                            </span>
                            <span className="text-xs sm:text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#7C3AED] to-[#FF9F1C]">
                                {totalProjects}+ PROJETS CONCRETS
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#FF9F1C]/20 text-[#FF9F1C] text-xs font-bold">
                                {totalDomains} Domaines
                            </span>
                        </div>
                    </div>

                    {/* Icon et titre */}
                    <div className="text-center mb-8 sm:mb-10">
                        <div className="relative inline-block mb-4 sm:mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] blur-3xl opacity-30" />
                            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#2DD4BF]/20 to-[#7C3AED]/20 ring-4 ring-white/10 shadow-2xl shadow-[#2DD4BF]/20 flex items-center justify-center">
                                <span className="text-5xl sm:text-6xl">🛠️</span>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
                            <span className="block text-white">L&apos;Ingénierie par</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#7C3AED] to-[#FF9F1C] animate-gradient-x">
                                la Pratique
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
                            Projets guidés avec <span className="text-[#2DD4BF] font-semibold">code Python</span>,
                            des <span className="text-[#7C3AED] font-semibold">explications mathématiques</span> et
                            des <span className="text-[#FF9F1C] font-semibold">applications concrètes</span>
                        </p>

                        {/* Stats Cards */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-2xl sm:text-3xl font-black text-[#2DD4BF]">{totalProjects}+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Projets</div>
                            </div>
                            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-2xl sm:text-3xl font-black text-[#7C3AED]">{totalDomains}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Domaines</div>
                            </div>
                            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <div className="text-2xl sm:text-3xl font-black text-[#FF9F1C]">∞</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Possibilités</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2">{feature.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Level Selector */}
            <section className="max-w-7xl mx-auto px-4 py-6 sm:py-8 relative z-10">
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="bg-white/5 p-1 rounded-full border border-white/10 flex backdrop-blur-sm overflow-x-auto max-w-full scrollbar-hide">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setActiveLevel(level)}
                                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeLevel === level
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
                <div className="flex gap-2 justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeCategory === cat
                                ? 'bg-[#2DD4BF] text-black shadow-lg shadow-[#2DD4BF]/20 scale-105'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-24 sm:pb-32 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative rounded-3xl border border-white/10 overflow-hidden hover:border-[#2DD4BF]/50 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2DD4BF]/10 flex flex-col bg-gradient-to-br from-[#0F1115] to-[#020617]"
                        >
                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-full transition-all duration-1000" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="p-6 sm:p-8 relative z-10 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4 sm:mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        {project.icon}
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="px-2 sm:px-3 py-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] text-[10px] sm:text-xs font-bold border border-[#2DD4BF]/20">
                                            {project.level}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-gray-500 font-mono">{project.duration}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[#2DD4BF] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3 flex-1">{project.description}</p>

                                <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono text-gray-500 border-t border-white/5 pt-3 sm:pt-4 mt-auto">
                                    <span className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        {project.domain}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {project.difficulty}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center text-4xl">
                            🔍
                        </div>
                        <h3 className="text-xl font-bold text-gray-400 mb-2">Aucun projet trouvé</h3>
                        <p className="text-gray-500">Essayez de modifier vos filtres</p>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="relative z-10 max-w-4xl mx-auto px-4 pb-24 sm:pb-32">
                <div className="relative rounded-3xl border border-[#2DD4BF]/30 bg-gradient-to-br from-[#0F1115] via-[#020617] to-[#0F1115] p-6 sm:p-8 md:p-12 text-center overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#2DD4BF] rounded-full blur-[100px] opacity-10" />
                    <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#7C3AED] rounded-full blur-[100px] opacity-10" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#7C3AED]/20 flex items-center justify-center text-4xl sm:text-5xl border border-white/10">
                            🚀
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                            Prêt à construire ?
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto">
                            Ouvrez le notebook Python et testez vos projets en direct
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                href="/code"
                                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#2DD4BF] to-[#00D9A8] hover:shadow-2xl hover:shadow-[#2DD4BF]/30 transition-all transform hover:scale-105"
                            >
                                <CodeIcon />
                                Ouvrir le Notebook
                            </Link>
                            <Link
                                href="/programming"
                                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                            >
                                <BookIcon />
                                Cours Python
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="min-h-screen p-3 sm:p-4 md:p-8">
                        <div className="max-w-5xl mx-auto bg-[#0F1115] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-50 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                            >
                                ✕
                            </button>

                            {/* Header du Projet */}
                            <div className="relative p-6 sm:p-8 md:p-12 border-b border-white/10 overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#2DD4BF] rounded-full blur-[150px] opacity-10 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <span className="text-4xl sm:text-5xl">{selectedProject.icon}</span>
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{selectedProject.title}</h2>
                                            <span className="text-[#2DD4BF] font-mono text-xs sm:text-sm">{selectedProject.domain} • {selectedProject.level}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
                                        <div className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
                                            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 flex items-center gap-2">
                                                🎯 Le Problème
                                            </h3>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                                                {selectedProject.problemStatement.context}
                                            </p>
                                            <div className="bg-black/30 rounded-lg p-3 text-[10px] sm:text-xs font-mono text-gray-400 border-l-2 border-[#2DD4BF]">
                                                Objectif : {selectedProject.problemStatement.objective}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4 sm:gap-6">
                                            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-4 sm:p-6 border border-white/10">
                                                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 flex items-center gap-2 text-purple-300">
                                                    💡 L&apos;Analogie
                                                </h3>
                                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                                                    &quot;{selectedProject.problemStatement.analogy}&quot;
                                                </p>
                                            </div>

                                            {/* Section Histoire */}
                                            {selectedProject.history && (
                                                <div className="bg-gradient-to-br from-amber-900/10 to-orange-900/10 rounded-2xl p-4 sm:p-6 border border-amber-500/20 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-4 opacity-10 text-3xl sm:text-4xl">📜</div>
                                                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 flex items-center gap-2 text-amber-400">
                                                        🏛️ Héritage
                                                    </h3>
                                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                                                        {selectedProject.history.context}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProject.history.people.map((person, i) => (
                                                            <span key={i} className="text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                                                                {person}
                                                            </span>
                                                        ))}
                                                        <span className="text-[8px] sm:text-[10px] uppercase tracking-wider font-bold text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/10">
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
                            <div className="p-6 sm:p-8 md:p-12 bg-black/20">
                                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#2DD4BF] text-black flex items-center justify-center text-xs sm:text-sm font-bold">Py</span>
                                    Implémentation pas à pas
                                </h3>

                                <div className="space-y-8 sm:space-y-12">
                                    {selectedProject.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-6 sm:pl-8 border-l border-white/10">
                                            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#2DD4BF] ring-4 ring-black" />

                                            <div className="mb-3 sm:mb-4">
                                                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h4>
                                                <div className="text-gray-400 text-xs sm:text-sm prose prose-invert prose-sm max-w-none">
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkMath]}
                                                        rehypePlugins={[rehypeKatex]}
                                                    >
                                                        {step.explanation}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>

                                            {/* Code Block Premium */}
                                            <div className="rounded-xl sm:rounded-2xl border border-[#2DD4BF]/30 overflow-hidden shadow-xl shadow-black/20">
                                                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-[#0F1115] to-[#1a1f2e] border-b border-white/10">
                                                    <div className="flex items-center gap-2 sm:gap-3">
                                                        <div className="flex gap-1.5">
                                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                                                        </div>
                                                        <span className="text-[10px] sm:text-xs font-mono text-[#2DD4BF]">
                                                            Python / SymPy
                                                        </span>
                                                    </div>
                                                    <button
                                                        className={`flex items-center gap-2 text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold transition-all ${copiedCode === idx
                                                            ? 'bg-emerald-500/20 text-emerald-400'
                                                            : 'bg-[#2DD4BF]/10 text-[#2DD4BF] hover:bg-[#2DD4BF]/20'
                                                            }`}
                                                        onClick={() => handleCopyCode(step.code, idx)}
                                                    >
                                                        {copiedCode === idx ? (
                                                            <>
                                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                Copié !
                                                            </>
                                                        ) : (
                                                            <>
                                                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                                </svg>
                                                                Copier
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <pre className="p-4 sm:p-5 bg-[#0d1117] overflow-x-auto">
                                                    <code className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">{step.code}</code>
                                                </pre>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to Action */}
                                <div className="mt-12 sm:mt-16 text-center">
                                    <Link
                                        href="/code"
                                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#2DD4BF] text-black font-bold hover:bg-[#2DD4BF]/90 transition-colors shadow-lg shadow-[#2DD4BF]/20 hover:scale-105 transform duration-200"
                                    >
                                        🚀 Tester ce code dans le Notebook
                                    </Link>
                                    <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-500">Copiez le code et collez-le dans le notebook pour voir le résultat en direct.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {/* CSS for gradient animation */}
            <style jsx global>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: left center;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: right center;
                    }
                }
                .animate-gradient-x {
                    animation: gradient-x 8s ease infinite;
                }
            `}</style>
        </main>
    );
}
