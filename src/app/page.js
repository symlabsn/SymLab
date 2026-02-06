'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import ModuleBlock from '@/components/ModuleBlock';
const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), { ssr: false });
import { Sparkles, Binary, Cpu, Atom, Rocket, GraduationCap, ChevronRight, Zap, ArrowRight, Play, Star } from 'lucide-react';

// Premium Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15
        }
    }
};

const heroVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 60,
            duration: 0.8
        }
    }
};

const floatVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoaded(true);
    }, []);

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Maîtrisez Python et l\'algorithmique scientifique avec des exercices interactifs.',
            href: '/programming',
            accentColor: '#06d6a0',
            gradientFrom: '#06d6a0',
            gradientTo: '#4ade80',
            icon: <Binary size={28} strokeWidth={1.5} />,
            tag: 'Populaire',
            stats: '50+ Leçons',
            coverImage: '/images/modules/programming.png'
        },
        {
            id: 'sim',
            title: 'Simulations 3D',
            description: 'Laboratoires virtuels immersifs avec physique et chimie interactive.',
            href: '/simulations',
            accentColor: '#8b5cf6',
            gradientFrom: '#8b5cf6',
            gradientTo: '#a78bfa',
            icon: <Atom size={28} strokeWidth={1.5} />,
            tag: 'Immersif',
            stats: '100+ Simulations',
            coverImage: '/images/modules/simulations.png'
        },
        {
            id: 'ing',
            title: 'Ingénierie',
            description: 'Projets pratiques d\'ingénierie et conception technique.',
            href: '/engineering',
            accentColor: '#f59e0b',
            gradientFrom: '#f59e0b',
            gradientTo: '#fbbf24',
            icon: <Cpu size={28} strokeWidth={1.5} />,
            tag: 'Nouveau',
            stats: 'Projets Réels',
            coverImage: '/images/modules/engineering.png'
        },
        {
            id: 'chal',
            title: 'Challenges',
            description: '100 jours de défis quotidiens pour maîtriser le calcul symbolique.',
            href: '/challenges',
            accentColor: '#f472b6',
            gradientFrom: '#f472b6',
            gradientTo: '#fb7185',
            icon: <Rocket size={28} strokeWidth={1.5} />,
            tag: 'Daily',
            stats: '100 Jours',
            coverImage: '/images/modules/challenges.png'
        },
        {
            id: 'cours',
            title: 'Cours',
            description: 'Ressources pédagogiques complètes du collège au lycée.',
            href: '/courses',
            accentColor: '#38bdf8',
            gradientFrom: '#38bdf8',
            gradientTo: '#22d3ee',
            icon: <GraduationCap size={28} strokeWidth={1.5} />,
            tag: 'Complet',
            stats: 'Tous Niveaux',
            coverImage: '/images/modules/courses.png'
        }
    ];

    const quickLinks = [
        { title: 'Python pour la Science', iconImage: '/images/icons/python.png', href: '/challenges/masterclass', color: '#06d6a0', tag: 'Python' },
        { title: 'Machine Learning', iconImage: '/images/icons/ml.png', href: '/courses#ml-intro', color: '#8b5cf6', tag: 'IA' },
        { title: 'Data Visualization', iconImage: '/images/icons/data.png', href: '/courses#vis-data', color: '#f472b6', tag: 'Data' },
        { title: 'Mathématiques', iconImage: '/images/icons/math.png', href: '/courses#math-ml', color: '#fbbf24', tag: 'Math' }
    ];

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            className="min-h-screen flex flex-col items-center py-8 sm:py-16 px-4 sm:px-6 relative overflow-hidden bg-[#020617]"
        >
            {/* 3D Background */}
            <ThreeBackground />

            {/* Noise texture overlay */}
            <div className="noise-overlay" />

            {/* Decorative gradient orbs */}
            <div className="orb orb-teal w-[500px] h-[500px] -top-40 left-1/4 opacity-20" />
            <div className="orb orb-purple w-[600px] h-[600px] top-1/3 -right-40 opacity-15" />
            <div className="orb orb-pink w-[400px] h-[400px] bottom-40 left-10 opacity-10" />

            {/* ===== HERO SECTION ===== */}
            <motion.section
                variants={containerVariants}
                className="relative z-10 max-w-5xl mx-auto text-center px-4 pt-16 sm:pt-24 mb-20 sm:mb-32"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-premium mb-8 sm:mb-12 group cursor-default"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06d6a0] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06d6a0]"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white/80 tracking-wide">
                        Plateforme STEM Interactive
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    variants={heroVariants}
                    className="heading-xl mb-4 sm:mb-6 md:mb-8 select-none"
                >
                    <span className="text-white font-black">SYM</span>
                    <span className="gradient-text font-black">LAB</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="body-lg max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 text-slate-300/90 px-4"
                >
                    L&apos;écosystème numérique <span className="text-white font-semibold border-b-2 border-[#06d6a0]/50 hover:border-[#06d6a0] transition-colors cursor-default">complet</span> pour explorer, apprendre et maîtriser les sciences.
                </motion.p>

                {/* CTA Buttons - Mobile optimized */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 px-4"
                >
                    <Link href="/simulations" onClick={handleNavClick} className="w-full sm:w-auto">
                        <motion.button
                            className="btn-primary btn-glow group w-full sm:w-auto justify-center"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Play size={18} className="group-hover:scale-110 transition-transform" />
                            Explorer les Simulations
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                    <Link href="/courses" onClick={handleNavClick} className="w-full sm:w-auto">
                        <motion.button
                            className="btn-secondary w-full sm:w-auto justify-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <GraduationCap size={18} />
                            Voir les Cours
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Scroll indicator - hidden on mobile */}
                <motion.div
                    variants={floatVariants}
                    animate="animate"
                    className="hidden sm:flex flex-col items-center gap-2 opacity-50"
                >
                    <span className="text-xs text-white/50 uppercase tracking-widest">Découvrir</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
                </motion.div>
            </motion.section>

            {/* ===== MODULES SECTION ===== */}
            <motion.section
                variants={containerVariants}
                className="w-full max-w-6xl relative z-10 px-4 sm:px-6 mb-16 sm:mb-24 md:mb-40"
            >
                <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 text-[#8b5cf6] text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                        <Zap size={16} />
                        Modules d&apos;Apprentissage
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                        Explorez nos <span className="gradient-text">Modules</span>
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                        Choisissez votre parcours d&apos;apprentissage et développez vos compétences scientifiques
                    </p>
                    <div className="gradient-line w-16 sm:w-20 md:w-32 mx-auto mt-4 sm:mt-6" />
                </motion.div>

                {/* Mobile: Horizontal Scroll Carousel */}
                <div className="md:hidden -mx-4 px-4">
                    <motion.div
                        variants={containerVariants}
                        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {modules.map((module) => (
                            <motion.div
                                key={module.id}
                                variants={itemVariants}
                                className="flex-shrink-0 snap-center first:pl-0 last:pr-4"
                                onClick={handleNavClick}
                            >
                                <ModuleBlock {...module} variant="compact" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll indicator dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {modules.map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-white/20"
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop: Grid Layout - 2 large cards on top, 3 below */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                        {modules.slice(0, 2).map((module) => (
                            <motion.div
                                key={module.id}
                                variants={itemVariants}
                                onClick={handleNavClick}
                            >
                                <ModuleBlock {...module} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {modules.slice(2).map((module) => (
                            <motion.div
                                key={module.id}
                                variants={itemVariants}
                                onClick={handleNavClick}
                            >
                                <ModuleBlock {...module} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ===== QUICK ACCESS SECTION ===== */}
            <motion.section
                variants={containerVariants}
                className="w-full max-w-7xl mt-4 sm:mt-8 relative z-10 px-4 pb-24 sm:pb-32 md:pb-48"
            >
                <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 text-[#06d6a0] text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                        <Sparkles size={16} />
                        Accès Rapide
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2">
                        Ressources <span className="gradient-text-static">Populaires</span>
                    </h2>
                    <div className="gradient-line w-16 sm:w-20 md:w-32 mx-auto mt-3 sm:mt-4" />
                </motion.div>

                {/* Mobile: Horizontal scroll */}
                <div className="sm:hidden -mx-4">
                    <motion.div
                        variants={containerVariants}
                        className="flex gap-3 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {quickLinks.map((link, i) => (
                            <Link key={i} href={link.href} onClick={handleNavClick} className="flex-shrink-0 snap-center">
                                <motion.div
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative w-36 p-4 rounded-2xl overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${link.color}15 0%, rgba(15,23,42,0.9) 100%)`,
                                        border: `1px solid ${link.color}20`
                                    }}
                                >
                                    {/* Icon Image */}
                                    <div
                                        className="w-12 h-12 rounded-xl mb-3 overflow-hidden"
                                        style={{ boxShadow: `0 0 20px ${link.color}30` }}
                                    >
                                        <Image
                                            src={link.iconImage}
                                            alt={link.title}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Tag */}
                                    <span
                                        className="inline-block px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider mb-2"
                                        style={{
                                            color: link.color,
                                            background: `${link.color}20`
                                        }}
                                    >
                                        {link.tag}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-sm font-bold text-white/90 line-clamp-2 leading-tight">
                                        {link.title}
                                    </h3>

                                    {/* Corner glow */}
                                    <div
                                        className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-xl opacity-30"
                                        style={{ background: link.color }}
                                    />
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>

                {/* Desktop/Tablet: Grid layout */}
                <motion.div
                    variants={containerVariants}
                    className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {quickLinks.map((link, i) => (
                        <Link key={i} href={link.href} onClick={handleNavClick} className="contents">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group glass-card p-5 md:p-6 lg:p-8 cursor-pointer relative overflow-hidden"
                            >
                                {/* Shimmer effect - desktop only */}
                                <div className="shimmer-sweep opacity-30 hidden lg:block" />

                                {/* Icon Image */}
                                <div
                                    className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl mb-4 md:mb-6 overflow-hidden transition-all duration-500 md:group-hover:scale-110 md:group-hover:rotate-3 relative"
                                    style={{ boxShadow: `0 0 40px ${link.color}30` }}
                                >
                                    <Image
                                        src={link.iconImage}
                                        alt={link.title}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Glow overlay on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                        style={{ background: link.color }}
                                    />
                                </div>

                                {/* Tag */}
                                <span
                                    className="inline-block px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3 transition-all duration-300"
                                    style={{
                                        color: link.color,
                                        background: `${link.color}15`,
                                        border: `1px solid ${link.color}25`
                                    }}
                                >
                                    {link.tag}
                                </span>

                                {/* Title */}
                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white/90 mb-4 md:mb-6 group-hover:text-white transition-colors">
                                    {link.title}
                                </h3>

                                {/* Arrow indicator - desktop only */}
                                <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-80 transition-all duration-500 transform translate-x-[-8px] group-hover:translate-x-0">
                                    <span style={{ color: link.color }}>Découvrir</span>
                                    <ChevronRight size={14} style={{ color: link.color }} />
                                </div>

                                {/* Hover glow effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${link.color}15, transparent 60%)`
                                    }}
                                />
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </motion.section>

            {/* ===== STATS SECTION ===== */}
            <motion.section
                variants={containerVariants}
                className="w-full max-w-5xl relative z-10 px-4 pb-24"
            >
                <motion.div
                    variants={itemVariants}
                    className="glass-premium rounded-3xl p-8 sm:p-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
                >
                    {[
                        { value: '100+', label: 'Simulations 3D', color: '#8b5cf6' },
                        { value: '500+', label: 'Exercices', color: '#06d6a0' },
                        { value: '7', label: 'Niveaux Scolaires', color: '#f472b6' },
                        { value: '∞', label: 'Possibilités', color: '#fbbf24' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="text-center"
                        >
                            <div
                                className="text-3xl sm:text-5xl font-black mb-2"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-slate-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </motion.main>
    );
}
