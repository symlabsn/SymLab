'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { simulationsCurriculum, simulationMetadata } from './curriculum';
import { useGamification, LevelBar, QuickStats } from '@/components/Gamification';
import { ArrowLeft, Search, Filter, Star, Clock, Play, Sparkles, FlaskConical, GraduationCap, Atom } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function SimulationsPage() {
    const [selectedLevel, setSelectedLevel] = useState('college');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedGrade, setSelectedGrade] = useState(null);

    useEffect(() => {
        setSelectedGrade(null);
    }, [selectedLevel]);

    const { userData, getCurrentLevel } = useGamification();
    const currentLevel = getCurrentLevel();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const levelParam = urlParams.get('level');
        if (levelParam && (levelParam === 'college' || levelParam === 'lycee')) {
            setSelectedLevel(levelParam);
        }

        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('ring-2', 'ring-[#06d6a0]', 'ring-offset-2', 'ring-offset-black');
                    setTimeout(() => {
                        element.classList.remove('ring-2', 'ring-[#06d6a0]', 'ring-offset-2', 'ring-offset-black');
                    }, 2000);
                }
            }, 300);
        }
    }, []);

    const currentCurriculum = simulationsCurriculum[selectedLevel];

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
        <main className="min-h-screen bg-[#020617] text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-white/[0.06]">
                {/* Animated background orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#8b5cf6] rounded-full opacity-10 filter blur-[120px] animate-pulse" />
                    <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#06d6a0] rounded-full opacity-10 filter blur-[100px] animate-pulse delay-500" />
                    <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-[#f472b6] rounded-full opacity-5 filter blur-[100px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                    <motion.div
                        className="text-center space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-premium">
                            <FlaskConical size={16} className="text-[#8b5cf6]" />
                            <span className="text-sm font-semibold text-white/80">Laboratoire Virtuel</span>
                        </div>

                        {/* Title */}
                        <h1 className="heading-lg">
                            <span className="text-white">Simulations </span>
                            <span className="gradient-text">3D Immersives</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
                            Explorez les sciences avec des simulations interactives
                            <span className="text-white font-medium"> alignées sur le curriculum sénégalais</span> 🇸🇳
                        </p>

                        {/* Stats badges */}
                        <div className="flex flex-wrap gap-3 justify-center items-center pt-4">
                            <div className="badge badge-secondary">
                                <GraduationCap size={14} />
                                <span>Collège → Lycée</span>
                            </div>
                            <div className="badge badge-secondary">
                                <Atom size={14} />
                                <span>Physique • Chimie • SVT</span>
                            </div>
                            <div className="badge badge-primary">
                                <Sparkles size={14} />
                                <span>{filteredSimulations.length}+ Simulations</span>
                            </div>
                        </div>

                        {/* User level (if gamification enabled) */}
                        {userData?.xp > 0 && (
                            <div className="inline-flex items-center gap-3 mt-6 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                                <Star size={18} className="text-yellow-400" />
                                <span className="font-bold" style={{ color: currentLevel?.color }}>
                                    Niveau {currentLevel?.level || 1}
                                </span>
                                <span className="text-slate-500">•</span>
                                <span className="text-yellow-400 font-medium">{userData?.xp || 0} XP</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Level Selection (College/Lycee) */}
            <div className="sticky top-[64px] z-40 bg-[#020617]/95 backdrop-blur-xl border-b border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {Object.entries(simulationsCurriculum).map(([key, data]) => (
                            <motion.button
                                key={key}
                                onClick={() => setSelectedLevel(key)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                                    flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold 
                                    transition-all duration-300 whitespace-nowrap
                                    ${selectedLevel === key
                                        ? 'bg-gradient-to-r from-[#06d6a0] to-[#8b5cf6] text-black shadow-[0_4px_20px_rgba(6,214,160,0.3)]'
                                        : 'glass-card hover:border-white/20 text-slate-300'
                                    }
                                `}
                            >
                                <span className="text-2xl">{data.icon}</span>
                                <div className="text-left">
                                    <div className="font-bold">{data.title}</div>
                                    <div className="text-xs opacity-75">{data.subtitle}</div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Grade Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <motion.button
                        onClick={() => setSelectedGrade(null)}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            px-4 py-2.5 rounded-xl text-sm font-bold transition-all
                            ${!selectedGrade
                                ? 'bg-white text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)]'
                                : 'bg-white/[0.05] text-slate-400 hover:bg-white/[0.1] border border-white/10'
                            }
                        `}
                    >
                        Tout voir
                    </motion.button>
                    {Object.entries(currentCurriculum.levels).map(([key, data]) => (
                        <motion.button
                            key={key}
                            onClick={() => setSelectedGrade(key)}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                px-4 py-2.5 rounded-xl text-sm font-bold transition-all
                                ${selectedGrade === key
                                    ? 'bg-gradient-to-r from-[#06d6a0] to-[#4ade80] text-black shadow-[0_4px_15px_rgba(6,214,160,0.3)]'
                                    : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] border border-white/10'
                                }
                            `}
                        >
                            {data.title}
                        </motion.button>
                    ))}
                </div>

                {/* Search and Subject Filter */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                    {/* Search */}
                    <div className="md:col-span-2 relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Rechercher une simulation..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input-premium pl-12"
                        />
                    </div>

                    {/* Subject Filter */}
                    <div className="relative">
                        <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <select
                            value={selectedSubject || ''}
                            onChange={(e) => setSelectedSubject(e.target.value || null)}
                            className="input-premium pl-12 appearance-none cursor-pointer"
                        >
                            <option value="">Toutes les matières</option>
                            {simulationMetadata.subjects.map(subj => (
                                <option key={subj.id} value={subj.id}>{subj.icon} {subj.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results count */}
                <motion.div
                    className="mb-8 p-4 rounded-2xl glass-card"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p className="text-slate-300 flex items-center gap-2">
                        <FlaskConical size={16} className="text-[#06d6a0]" />
                        <span className="font-bold text-[#06d6a0]">{filteredSimulations.length}</span>
                        <span>simulation(s) trouvée(s)</span>
                        {searchQuery && <span className="text-slate-500">pour &quot;{searchQuery}&quot;</span>}
                    </p>
                </motion.div>

                {/* Simulations Grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredSimulations.map((sim, index) => (
                        <motion.div key={`${sim.id}-${index}`} variants={itemVariants}>
                            <Link
                                id={sim.id}
                                href={`/simulations/${sim.id}`}
                                className="group block h-full"
                            >
                                <div className="relative h-full p-5 rounded-2xl glass-card hover:border-[#06d6a0]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,214,160,0.15)]">
                                    {/* Shimmer effect */}
                                    <div className="shimmer-sweep" />

                                    {/* Image or Icon */}
                                    <div className="mb-4 h-40 relative overflow-hidden rounded-xl border border-white/[0.06] group-hover:border-[#06d6a0]/20 transition-colors">
                                        {sim.image ? (
                                            <Image
                                                src={sim.image}
                                                alt={sim.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full bg-gradient-to-br from-white/[0.03] to-transparent">
                                                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                                    {sim.icon}
                                                </span>
                                            </div>
                                        )}

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#06d6a0] transition-colors line-clamp-2">
                                        {sim.title}
                                    </h3>

                                    {/* Level and Subject tags */}
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#8b5cf6]/15 text-[#a78bfa] font-semibold uppercase tracking-wider">
                                            {sim.level}
                                        </span>
                                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#06d6a0]/15 text-[#06d6a0] font-semibold uppercase tracking-wider">
                                            {sim.subject}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                                        {sim.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]">
                                        <span className="text-xs text-slate-600 flex items-center gap-1.5">
                                            <Clock size={12} />
                                            {sim.duration}
                                        </span>
                                        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#06d6a0] to-[#4ade80] text-black font-bold text-xs group-hover:scale-105 transition-transform shadow-[0_2px_10px_rgba(6,214,160,0.3)]">
                                            <Play size={12} />
                                            Lancer
                                        </span>
                                    </div>

                                    {/* Tags */}
                                    {sim.tags?.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {sim.tags.slice(0, 3).map((tag, i) => (
                                                <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-white/[0.03] text-slate-500 border border-white/[0.05]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredSimulations.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="text-6xl mb-4 opacity-50">🔍</div>
                        <h3 className="text-xl font-bold mb-2 text-slate-400">Aucune simulation trouvée</h3>
                        <p className="text-slate-600">Essayez de modifier vos filtres ou votre recherche</p>
                    </motion.div>
                )}
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    className="p-10 sm:p-14 rounded-3xl glass-premium text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06d6a0]/10 via-[#8b5cf6]/10 to-[#f472b6]/10 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 text-[#06d6a0] text-xs font-bold uppercase tracking-widest mb-4">
                            <Sparkles size={16} />
                            Continuer l&apos;aventure
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black mb-4">
                            <span className="text-white">Prêt à </span>
                            <span className="gradient-text">explorer</span>
                            <span className="text-white"> ?</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                            Chaque simulation offre une expérience d&apos;apprentissage immersive et interactive.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/code">
                                <motion.button
                                    className="btn-primary"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    💻 Notebook Python
                                </motion.button>
                            </Link>
                            <Link href="/programming">
                                <motion.button
                                    className="btn-secondary"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    📚 Cours de Programmation
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
