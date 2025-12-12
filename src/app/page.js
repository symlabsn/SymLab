'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ModuleBlock from '@/components/ModuleBlock';

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
            accentColor: '#00F5D4' // Cyan
        },
        {
            id: 'sim',
            title: 'Simulations',
            description: 'Laboratoires virtuels 3D et physique interactive.',
            href: '/simulations',
            accentColor: '#7C3AED' // Purple
        },
        {
            id: 'ing',
            title: 'Ingénierie',
            description: 'L\'ingénierie par la pratique.',
            href: '/engineering',
            accentColor: '#FF9F1C' // Orange
        },
        {
            id: 'chal',
            title: 'Challenges',
            description: '100 jours pour maîtriser SymPy et le calcul symbolique.',
            href: '/challenges',
            accentColor: '#F43F5E' // Rose
        },
        {
            id: 'cours',
            title: 'Cours',
            description: 'Ressources pédagogiques conformes au programme.',
            href: '/courses',
            accentColor: '#10B981' // Green
        }
    ];

    // Helper to scroll to top on navigation
    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-start py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative overflow-hidden">

            {/* HEADER - Responsive */}
            <section className="center-xy mb-8 sm:mb-12 md:mb-16 relative z-10 max-w-4xl mx-auto fade-in-up text-center px-2">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-white to-[#7C3AED] mb-4 sm:mb-6"
                    style={{
                        textShadow: '0 0 40px rgba(0, 245, 212, 0.3), 0 0 80px rgba(124, 58, 237, 0.2)',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                    }}
                >
                    SYMLAB
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed px-4">
                    Plateforme immersive pour les <span className="text-[#00F5D4] font-bold">STEM</span> au Sénégal.
                </p>
            </section>

            {/* CENTERED MODULE STACK - Responsive */}
            <section className="w-full max-w-2xl flex flex-col gap-4 sm:gap-6 md:gap-8 relative z-10 px-2">
                {modules.map((module, index) => (
                    <div key={module.id} onClick={handleNavClick}>
                        <ModuleBlock
                            {...module}
                            className="fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        />
                    </div>
                ))}
            </section>

            {/* RESSOURCES RAPIDES - Responsive */}
            <section className="w-full max-w-6xl mt-12 sm:mt-16 md:mt-20 relative z-10 fade-in-up px-2" style={{ animationDelay: '600ms' }}>
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Ressources Thématiques
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">Accès direct aux modules spécialisés</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {/* Programmation et Math */}
                    <Link href="/challenges" onClick={handleNavClick}
                        className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0F1115] border border-white/10 hover:border-[#F43F5E]/50 transition-all active:scale-95 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F43F5E]/20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-rose-500/20 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                            🐍
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-rose-400 leading-tight">Programmation & Math</h3>
                        <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Python, NumPy, Matplotlib et SymPy.</p>
                    </Link>

                    {/* Machine Learning */}
                    <Link href="/courses#ml-intro" onClick={handleNavClick}
                        className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0F1115] border border-white/10 hover:border-[#7C3AED]/50 transition-all active:scale-95 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7C3AED]/20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                            🤖
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-indigo-400 leading-tight">Machine Learning</h3>
                        <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Algorithmes et réseaux de neurones.</p>
                    </Link>

                    {/* Visualisations */}
                    <Link href="/courses#vis-data" onClick={handleNavClick}
                        className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0F1115] border border-white/10 hover:border-[#F472B6]/50 transition-all active:scale-95 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F472B6]/20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-pink-500/20 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                            📊
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-pink-400 leading-tight">Visualisations</h3>
                        <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Storytelling et graphiques interactifs.</p>
                    </Link>

                    {/* Cours de Math */}
                    <Link href="/courses#mathematiques" onClick={handleNavClick}
                        className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0F1115] border border-white/10 hover:border-[#00F5D4]/50 transition-all active:scale-95 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00F5D4]/20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-teal-500/20 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                            ♾️
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-teal-400 leading-tight">Cours de Math</h3>
                        <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Du Collège au Supérieur.</p>
                    </Link>
                </div>
            </section>

            {/* Footer spacer for mobile */}
            <div className="h-8 sm:h-12 md:h-16"></div>

        </main>
    );
}
