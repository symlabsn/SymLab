'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ModuleBlock from '@/components/ModuleBlock';
import ThreeBackground from '@/components/ThreeBackground';
import { Sparkles, Binary, Cpu, Atom, Rocket, GraduationCap, ChevronRight, Zap } from 'lucide-react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Maîtrisez Python et l\'algorithmique scientifique.',
            href: '/programming',
            accentColor: '#4FD1C5', // Softer Cyan (Teal)
            icon: <Binary size={40} />,
            tag: 'Populaire'
        },
        {
            id: 'sim',
            title: 'Simulations',
            description: 'Laboratoires virtuels 3D et physique interactive.',
            href: '/simulations',
            accentColor: '#A78BFA', // Softer Purple (Lavender)
            icon: <Atom size={40} />,
            tag: 'Immersif'
        },
        {
            id: 'ing',
            title: 'Ingénierie',
            description: 'L\'ingénierie par la pratique.',
            href: '/engineering',
            accentColor: '#FBBF24', // Softer Orange (Amber)
            icon: <Cpu size={40} />,
            tag: 'Nouveau'
        },
        {
            id: 'chal',
            title: 'Challenges',
            description: '100 jours pour maîtriser SymPy et le calcul symbolique.',
            href: '/challenges',
            accentColor: '#FB7185', // Softer Rose
            icon: <Rocket size={40} />,
            tag: 'Daily'
        },
        {
            id: 'cours',
            title: 'Cours',
            description: 'Ressources pédagogiques conformes au programme.',
            href: '/courses',
            accentColor: '#34D399', // Softer Green (Emerald)
            icon: <GraduationCap size={40} />,
            tag: 'Certifié'
        }
    ];

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-start py-12 sm:py-20 px-3 sm:px-4 relative overflow-hidden bg-[#050505] selection:bg-[#4FD1C5]/30">
            <ThreeBackground />
            <div className="noise-overlay" />

            {/* HERO SECTION - REFINED */}
            <section className="center-xy mb-24 sm:mb-44 relative z-10 max-w-5xl mx-auto fade-in-up text-center px-4 pt-10 sm:pt-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl mb-8 sm:mb-12 group hover:border-white/20 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(79,209,197,0.2)]">
                    <Zap size={16} className="text-[#4FD1C5] opacity-70 group-hover:text-[#4FD1C5] group-hover:opacity-100 transition-all" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-black text-white/40 group-hover:text-white/90 transition-colors">Plateforme STEM Immersive</span>
                </div>

                <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black tracking-tighter leading-[0.9] sm:leading-none mb-8 sm:mb-10 select-none relative z-20">
                    <span className="logo-glitch inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 block sm:inline">SYM</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#4FD1C5] via-white to-[#A78BFA] glow-text block sm:inline">LAB</span>
                    </span>
                </h1>

                <p className="text-lg sm:text-2xl md:text-4xl text-gray-400 sm:text-gray-500 font-light max-w-4xl mx-auto leading-relaxed sm:leading-tight px-2 sm:px-4 opacity-90 sm:opacity-80 hover:opacity-100 transition-opacity duration-1000 italic drop-shadow-lg">
                    L'écosystème numérique <span className="text-white font-black not-italic border-b border-[#4FD1C5]/30 hover:border-[#4FD1C5] transition-colors cursor-default">fluide</span> pour explorer les sciences.
                </p>

                {/* Scroll hint - Mobile optimized */}
                <div className="flex flex-col items-center gap-4 mt-16 sm:mt-20 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                    <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-white via-white/50 to-transparent animate-pulse" />
                </div>
            </section>

            {/* VERTICAL LIST - POLISHED */}
            <section className="w-full max-w-2xl flex flex-col gap-10 sm:gap-14 relative z-10 px-2 mb-48">
                {modules.map((module, index) => (
                    <div key={module.id} onClick={handleNavClick} className="group">
                        <ModuleBlock
                            {...module}
                            className="fade-in-up hover:scale-[1.01] transition-all duration-700"
                            style={{ animationDelay: `${index * 150}ms` }}
                        />
                    </div>
                ))}
            </section>

            {/* DASHBOARD STYLE FOOTER GRID */}
            <section className="w-full max-w-7xl mt-20 relative z-10 fade-in-up px-4 pb-40" style={{ animationDelay: '900ms' }}>
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-5xl font-black text-white/80 leading-none mb-6 tracking-tighter">
                        EXPLORATION <span className="text-[#4FD1C5]/70">RAPIDE</span>
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Prog & Math', icon: '🐍', href: '/challenges/masterclass', color: '#FB7185', tag: 'Python Sci' },
                        { title: 'Machine Learning', icon: '🤖', href: '/courses#ml-intro', color: '#A78BFA', tag: 'IA' },
                        { title: 'Visualisations', icon: '📊', href: '/courses#vis-data', color: '#F472B6', tag: 'Data' },
                        { title: 'Math Supérieur', icon: '♾️', href: '/courses#math-ml', color: '#4FD1C5', tag: 'Théorie' }
                    ].map((res, i) => (
                        <Link key={i} href={res.href} onClick={handleNavClick}
                            className="group p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/[0.03] hover:border-white/10 hover:bg-white/[0.01] transition-all duration-700 relative overflow-hidden">
                            <div className="w-16 h-16 rounded-[2rem] bg-white/[0.03] flex items-center justify-center text-4xl mb-10 group-hover:scale-110 group-hover:bg-white/[0.05] transition-all duration-700">
                                {res.icon}
                            </div>

                            <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-4 block opacity-30 group-hover:opacity-60 transition-opacity" style={{ color: res.color }}>{res.tag}</span>
                            <h3 className="text-xl font-bold text-white/70 mb-10 group-hover:text-white transition-colors tracking-tight">{res.title}</h3>

                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-40 transition-all duration-700 translate-x-[-10px] group-hover:translate-x-0">
                                DÉCOUVRIR <ChevronRight size={14} />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
