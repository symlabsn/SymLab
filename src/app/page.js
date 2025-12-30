'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ModuleBlock from '@/components/ModuleBlock';
import ThreeBackground from '@/components/ThreeBackground';
import { Rocket, Binary, Atom, Cpu, Microscope, GraduationCap, ChevronRight, PlayCircle, Code } from 'lucide-react';

export default function Home() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Maîtrisez Python et l\'algorithmique scientifique avec des outils interactifs.',
            href: '/programming',
            accentColor: '#00F5D4', // Cyan
            icon: <Binary className="w-8 h-8" />
        },
        {
            id: 'sim',
            title: 'Simulations',
            description: 'Laboratoires virtuels 3D haute fidélité pour explorer les lois de la physique.',
            href: '/simulations',
            accentColor: '#7C3AED', // Purple
            icon: <Atom className="w-8 h-8" />
        },
        {
            id: 'ing',
            title: 'Ingénierie',
            description: 'Projets pratiques d\'ingénierie civile, électrique et mécanique.',
            href: '/engineering',
            accentColor: '#FF9F1C', // Orange
            icon: <Cpu className="w-8 h-8" />
        },
        {
            id: 'chal',
            title: 'Challenges',
            description: 'Relevez des défis de calcul symbolique et progressez quotidiennement.',
            href: '/challenges',
            accentColor: '#F43F5E', // Rose
            icon: <Rocket className="w-8 h-8" />
        },
        {
            id: 'cours',
            title: 'Cours',
            description: 'Ressources académiques complètes conformes au programme national.',
            href: '/courses',
            accentColor: '#10B981', // Green
            icon: <GraduationCap className="w-8 h-8" />
        }
    ];

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen relative overflow-hidden bg-black text-white selection:bg-[#00F5D4]/30">
            {/* 3D Immersive Background */}
            <ThreeBackground />

            {/* HERO SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 relative z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/10 blur-[120px] rounded-full -z-10 animate-pulse-glow" style={{ color: '#7C3AED' }} />

                <div className="max-w-5xl mx-auto text-center space-y-8 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 text-xs sm:text-sm font-medium tracking-tight">
                        <span className="flex h-2 w-2 rounded-full bg-[#00F5D4] animate-pulse" />
                        <span className="text-gray-300">L'Excellence STEM au Sénégal</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">SYM</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00F5D4] to-[#7C3AED]">LAB</span>
                    </h1>

                    <p className="text-lg sm:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                        L'écosystème numérique <span className="text-white font-medium">immersif</span> conçu pour former les futurs ingénieurs et scientifiques du continent.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Link href="/programming" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00F5D4] text-black font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all group">
                            <PlayCircle className="w-5 h-5" />
                            Commencer l'Aventure
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/challenges" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-lg font-semibold hover:bg-white/10 transition-all">
                            Voir les Challenges
                        </Link>
                    </div>
                </div>

                {/* Scoll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent" />
                </div>
            </section>

            {/* KEY FEATURES BANNERS */}
            <section className="py-24 px-4 relative z-10 bg-black/40 backdrop-blur-3xl border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4 fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="w-12 h-12 rounded-2xl bg-[#00F5D4]/10 flex items-center justify-center text-[#00F5D4]">
                            <Binary size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Calcul Symbolique</h3>
                        <p className="text-gray-400 leading-relaxed">Intégration native de SymPy pour manipuler des équations complexes comme un pro.</p>
                    </div>
                    <div className="space-y-4 fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED]">
                            <Atom size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Laboratoires 3D</h3>
                        <p className="text-gray-400 leading-relaxed">Simulations interactives WebGL pour visualiser les phénomènes physiques invisibles.</p>
                    </div>
                    <div className="space-y-4 fade-in-up" style={{ animationDelay: '600ms' }}>
                        <div className="w-12 h-12 rounded-2xl bg-[#FF9F1C]/10 flex items-center justify-center text-[#FF9F1C]">
                            <Microscope size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Cursus Complet</h3>
                        <p className="text-gray-400 leading-relaxed">Du lycée aux classes préparatoires, des contenus structurés et rigoureux.</p>
                    </div>
                </div>
            </section>

            {/* MODULES GRID - Re-designed */}
            <section className="py-32 px-4 relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
                        Explorez l'Univers SymLab
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">Sélectionnez un portail pour débuter votre apprentissage.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Big Modules */}
                    <div className="grid gap-8">
                        {modules.slice(0, 2).map((module, index) => (
                            <ModuleBlock key={module.id} {...module} className="fade-in-up h-full" style={{ animationDelay: `${index * 200}ms` }} />
                        ))}
                    </div>

                    {/* Secondary Modules in narrower grid */}
                    <div className="grid gap-8">
                        <div className="grid sm:grid-cols-2 gap-8 h-full">
                            {modules.slice(2, 4).map((module, index) => (
                                <ModuleBlock key={module.id} {...module} className="fade-in-up" style={{ animationDelay: `${(index + 2) * 200}ms` }} />
                            ))}
                        </div>
                        <ModuleBlock {...modules[4]} className="fade-in-up" style={{ animationDelay: '1000ms' }} />
                    </div>
                </div>
            </section>

            {/* QUICK RESOURCES SECTION */}
            <section className="py-32 px-4 relative z-10 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                Accès Thématiques
                            </h2>
                            <p className="text-gray-400">Entrées directes par domaines de compétences.</p>
                        </div>
                        <Link href="/courses" className="text-[#00F5D4] flex items-center gap-2 font-bold hover:gap-4 transition-all">
                            Voir tout le catalogue <ChevronRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: 'Python Sci', icon: <Binary />, color: 'rose', href: '/challenges/masterclass' },
                            { title: 'IA & ML', icon: <Cpu />, color: 'indigo', href: '/courses#ml-intro' },
                            { title: 'Data Viz', icon: <Atom />, color: 'pink', href: '/courses#vis-data' },
                            { title: 'Math Sup', icon: <Code />, color: 'teal', href: '/courses#math-ml' }
                        ].map((item, i) => (
                            <Link
                                key={i} href={item.href} onClick={handleNavClick}
                                className={`group p-8 rounded-3xl bg-[#0F1115] border border-white/5 hover:border-${item.color}-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-${item.color}-500/10`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-xs text-gray-500">Explorer les outils spécialisés du domaine.</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-40 px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#121418] to-black border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <h2 className="text-4xl sm:text-6xl font-black mb-8 relative z-10">
                        Prêt à coder le <br /> <span className="text-[#00F5D4]">futur</span> ?
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto relative z-10 text-lg">
                        Rejoignez la nouvelle génération de scientifiques africains. Apprenez, expérimentez et relevez des défis réels.
                    </p>
                    <Link href="/programming" className="inline-flex px-12 py-5 rounded-full bg-white text-black font-black text-xl hover:scale-110 active:scale-95 transition-all relative z-10">
                        Ouvrir le Notebook
                    </Link>
                </div>
            </section>

            {/* Footer spacer */}
            <div className="h-20"></div>
        </main>
    );
}
