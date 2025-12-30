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
            accentColor: '#00F5D4',
            icon: <Binary size={40} />,
            tag: 'Populaire'
        },
        {
            id: 'sim',
            title: 'Simulations',
            description: 'Laboratoires virtuels 3D et physique interactive.',
            href: '/simulations',
            accentColor: '#7C3AED',
            icon: <Atom size={40} />,
            tag: 'Immersif'
        },
        {
            id: 'ing',
            title: 'Ingénierie',
            description: 'L\'ingénierie par la pratique.',
            href: '/engineering',
            accentColor: '#FF9F1C',
            icon: <Cpu size={40} />,
            tag: 'Nouveau'
        },
        {
            id: 'chal',
            title: 'Challenges',
            description: '100 jours pour maîtriser SymPy et le calcul symbolique.',
            href: '/challenges',
            accentColor: '#F43F5E',
            icon: <Rocket size={40} />,
            tag: 'Daily'
        },
        {
            id: 'cours',
            title: 'Cours',
            description: 'Ressources pédagogiques conformes au programme.',
            href: '/courses',
            accentColor: '#10B981',
            icon: <GraduationCap size={40} />,
            tag: 'Certifié'
        }
    ];

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-start py-12 sm:py-20 px-3 sm:px-4 relative overflow-hidden bg-black selection:bg-[#00F5D4]/30">
            <ThreeBackground />
            <div className="noise-overlay" />

            {/* HERO SECTION - REFINED */}
            <section className="center-xy mb-24 sm:mb-40 relative z-10 max-w-5xl mx-auto fade-in-up text-center px-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5D4]/20 bg-[#00F5D4]/10 backdrop-blur-3xl mb-12 group hover:border-[#00F5D4]/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,245,212,0.1)]">
                    <Zap size={16} className="text-[#00F5D4] animate-pulse" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-black text-white/50 group-hover:text-white transition-colors">Système Éducatif de Pointe</span>
                </div>

                <h1 className="text-8xl sm:text-9xl md:text-[14rem] font-black tracking-tighter leading-none mb-10">
                    <span className="logo-glitch inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SYM</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00F5D4] via-white to-[#7C3AED] glow-text">LAB</span>
                    </span>
                </h1>

                <p className="text-2xl sm:text-4xl text-gray-400 font-light max-w-4xl mx-auto leading-tight px-4 opacity-80 hover:opacity-100 transition-opacity duration-1000 italic drop-shadow-lg">
                    L'écosystème numérique <span className="text-white font-black not-italic border-b-2 border-[#00F5D4]">immersif</span> révolutionnant l'apprentissage scientifique.
                </p>

                {/* Scroll hint with tech aesthetic */}
                <div className="flex flex-col items-center gap-4 mt-16 opacity-30 animate-float">
                    <span className="text-[10px] uppercase tracking-widest font-bold">Explorer l'Univers</span>
                    <div className="w-0.5 h-16 bg-gradient-to-b from-[#00F5D4] to-transparent" />
                </div>
            </section>

            {/* VERTICAL LIST - POLISHED */}
            <section className="w-full max-w-2xl flex flex-col gap-8 sm:gap-12 relative z-10 px-2 mb-40">
                {modules.map((module, index) => (
                    <div key={module.id} onClick={handleNavClick} className="group">
                        <ModuleBlock
                            {...module}
                            className="fade-in-up hover:scale-[1.02] transition-all duration-500"
                            style={{ animationDelay: `${index * 150}ms` }}
                        />
                    </div>
                ))}
            </section>

            {/* DASHBOARD STYLE FOOTER GRID */}
            <section className="w-full max-w-7xl mt-20 relative z-10 fade-in-up px-4 pb-32" style={{ animationDelay: '900ms' }}>
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                    <div className="text-left">
                        <h2 className="text-3xl sm:text-5xl font-black text-white leading-none mb-4">
                            ACCÈS <span className="text-[#00F5D4]">DIRECTS</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[#00F5D4] to-transparent" />
                    </div>
                    <p className="text-gray-500 font-medium max-w-sm text-center md:text-right">Ressources spécialisées pour une immersion ciblée dans les disciplines clés.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Prog & Math', icon: '🐍', href: '/challenges/masterclass', color: '#F43F5E', tag: 'Python Sci' },
                        { title: 'Machine Learning', icon: '🤖', href: '/courses#ml-intro', color: '#7C3AED', tag: 'IA / Deep Learning' },
                        { title: 'Visualisations', icon: '📊', href: '/courses#vis-data', color: '#F472B6', tag: 'Data Science' },
                        { title: 'Math Supérieur', icon: '♾️', href: '/courses#math-ml', color: '#00F5D4', tag: 'Théorie & Algèbre' }
                    ].map((res, i) => (
                        <Link key={i} href={res.href} onClick={handleNavClick}
                            className="group p-8 rounded-[2.5rem] bg-[#0F1115] border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                <Sparkles size={40} className="rotate-12" />
                            </div>

                            <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-2xl">
                                {res.icon}
                            </div>

                            <span className="text-[10px] uppercase tracking-widest font-black mb-3 block opacity-50 group-hover:opacity-100" style={{ color: res.color }}>{res.tag}</span>
                            <h3 className="text-xl font-bold text-white mb-8 group-hover:text-white transition-colors">{res.title}</h3>

                            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                Explorer <ChevronRight size={14} />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
