'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ModuleBlock from '@/components/ModuleBlock';
import ThreeBackground from '@/components/ThreeBackground';
import { Sparkles, Binary, Cpu, Atom, Rocket, GraduationCap, ChevronRight } from 'lucide-react';

export default function Home() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Maîtrisez Python et l\'algorithmique scientifique.',
            href: '/programming',
            accentColor: '#00F5D4', // Cyan
            icon: <Binary />
        },
        {
            id: 'sim',
            title: 'Simulations',
            description: 'Laboratoires virtuels 3D et physique interactive.',
            href: '/simulations',
            accentColor: '#7C3AED', // Purple
            icon: <Atom />
        },
        {
            id: 'ing',
            title: 'Ingénierie',
            description: 'L\'ingénierie par la pratique.',
            href: '/engineering',
            accentColor: '#FF9F1C', // Orange
            icon: <Cpu />
        },
        {
            id: 'chal',
            title: 'Challenges',
            description: '100 jours pour maîtriser SymPy et le calcul symbolique.',
            href: '/challenges',
            accentColor: '#F43F5E', // Rose
            icon: <Rocket />
        },
        {
            id: 'cours',
            title: 'Cours',
            description: 'Ressources pédagogiques conformes au programme.',
            href: '/courses',
            accentColor: '#10B981', // Green
            icon: <GraduationCap />
        }
    ];

    // Helper to scroll to top on navigation
    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-start py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative overflow-hidden bg-black selection:bg-[#00F5D4]/30">
            {/* Immersive Background */}
            <ThreeBackground />

            {/* HEADER - Visual improvement */}
            <section className="center-xy mb-12 sm:mb-16 md:mb-24 relative z-10 max-w-4xl mx-auto fade-in-up text-center px-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 animate-pulse-glow" style={{ color: '#00F5D4' }}>
                    <Sparkles size={14} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">L'Innovation STEM au Sénégal</span>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 mb-4 sm:mb-6"
                    style={{
                        textShadow: '0 0 40px rgba(0, 245, 212, 0.2), 0 0 80px rgba(124, 58, 237, 0.1)',
                    }}
                >
                    SYMLAB
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed px-4 italic">
                    La plateforme <span className="text-white font-medium not-italic">immersive</span> pour les sciences et l'ingénierie.
                </p>

                {/* Decorative line */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mx-auto mt-8 opacity-50" />
            </section>

            {/* CENTERED MODULE STACK - Restore original structure with better styling */}
            <section className="w-full max-w-2xl flex flex-col gap-6 sm:gap-8 md:gap-10 relative z-10 px-2 mb-24">
                {modules.map((module, index) => (
                    <div key={module.id} onClick={handleNavClick} className="group cursor-pointer">
                        <ModuleBlock
                            {...module}
                            className="fade-in-up card-lift"
                            style={{ animationDelay: `${index * 150}ms` }}
                        />
                    </div>
                ))}
            </section>

            {/* RESSOURCES RAPIDES - Enhanced Footer Section */}
            <section className="w-full max-w-6xl mt-12 sm:mt-16 md:mt-20 relative z-10 fade-in-up px-2 pb-20" style={{ animationDelay: '800ms' }}>
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Ressources Thématiques
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mt-3">Accès instantané aux modules spécialisés</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* Items styled like mini premium cards */}
                    {[
                        { title: 'Prog & Math', icon: '🐍', href: '/challenges/masterclass', color: '#F43F5E', desc: 'Python & SymPy Masterclass' },
                        { title: 'Machine Learning', icon: '🤖', href: '/courses#ml-intro', color: '#7C3AED', desc: 'Intelligence Artificielle' },
                        { title: 'Visualisations', icon: '📊', href: '/courses#vis-data', color: '#F472B6', desc: 'Analyse & Graphiques' },
                        { title: 'Math Supérieur', icon: '♾️', href: '/courses#math-ml', color: '#00F5D4', desc: 'Mathématiques de l\'IA' }
                    ].map((res, i) => (
                        <Link key={i} href={res.href} onClick={handleNavClick}
                            className="group p-6 rounded-3xl bg-[#0F1115] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                            {/* Hover background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                {res.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors">{res.title}</h3>
                            <p className="text-xs text-gray-500 mb-6">{res.desc}</p>

                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0" style={{ color: res.color }}>
                                Découvrir <ChevronRight size={12} />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Final Footer Spacer */}
            <div className="h-20" />
        </main>
    );
}
