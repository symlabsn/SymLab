'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ModuleBlock from '@/components/ModuleBlock';
import ThreeBackground from '@/components/ThreeBackground';
import {
    Rocket, Binary, Atom, Cpu, Microscope, GraduationCap,
    ChevronRight, PlayCircle, Code, Sparkles, Zap, Shield, Globe
} from 'lucide-react';

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Maîtrisez Python, le langage roi de la data science et de l\'IA.',
            href: '/programming',
            accentColor: '#00F5D4',
            icon: <Binary className="w-10 h-10" />,
            tag: 'Populaire'
        },
        {
            id: 'sim',
            title: 'Simulations',
            description: 'Expérimentez sans limites dans nos laboratoires virtuels 3D.',
            href: '/simulations',
            accentColor: '#7C3AED',
            icon: <Atom className="w-10 h-10" />,
            tag: 'Immersif'
        },
        {
            id: 'ing',
            title: 'Ingénierie',
            description: 'Concevez le monde de demain avec des projets concrets.',
            href: '/engineering',
            accentColor: '#FF9F1C',
            icon: <Cpu className="w-10 h-10" />,
            tag: 'Expert'
        },
        {
            id: 'chal',
            title: 'Challenges',
            description: 'Affûtez vos compétences avec des défis quotidiens stimulants.',
            href: '/challenges',
            accentColor: '#F43F5E',
            icon: <Rocket className="w-10 h-10" />,
            tag: 'Quotidien'
        },
        {
            id: 'cours',
            title: 'Bibliothèque',
            description: 'Accédez à des milliers de ressources pédagogiques certifiées.',
            href: '/courses',
            accentColor: '#10B981',
            icon: <GraduationCap className="w-10 h-10" />,
            tag: 'Complet'
        }
    ];

    return (
        <main className="min-h-screen relative bg-black text-white selection:bg-[#00F5D4]/30 font-sans">
            <div className="noise-overlay" />
            <ThreeBackground />

            {/* HERO SECTION - MAGNIFIED */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-10">
                {/* Floating Tech Accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[#00F5D4]/10 rounded-full blur-[100px] animate-float" />
                    <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
                </div>

                <div className="relative z-20 max-w-6xl mx-auto text-center space-y-12">
                    <div className="fade-in-up space-y-6">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl mb-4 group hover:border-[#00F5D4]/50 transition-colors cursor-default">
                            <Sparkles className="w-4 h-4 text-[#00F5D4] animate-pulse" />
                            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">
                                Next-Gen STEM Education
                            </span>
                        </div>

                        <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-black tracking-tighter leading-[0.85] perspective-1000">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SYMLAB</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#7C3AED] to-[#F43F5E] animate-gradient text-shimmer">SYSTEM</span>
                        </h1>

                        <p className="text-xl sm:text-3xl text-gray-400 font-light max-w-4xl mx-auto leading-tight italic">
                            Redéfinir l'excellence <span className="text-white font-semibold not-italic">scientifique</span> par l'immersion technologique.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 fade-in-up" style={{ animationDelay: '400ms' }}>
                        <Link href="/programming" className="group relative px-10 py-5 rounded-2xl bg-white text-black font-black text-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                            <div className="absolute inset-x-0 -bottom-1 h-1 bg-gray-200 rounded-b-2xl group-hover:h-2 transition-all" />
                            Lancer l'Expérience
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/challenges" className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center gap-3 group">
                            <Rocket className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                            Voir les Défis
                        </Link>
                    </div>
                </div>

                {/* Decorative Tech Bottom */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
            </section>

            {/* BENTO GRID MODULES */}
            <section className="relative z-30 py-40 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-5xl sm:text-7xl font-black leading-none">
                            Architecture <br />
                            <span className="text-[#00F5D4]">Modulaire</span>
                        </h2>
                        <div className="h-1 w-32 bg-gradient-to-r from-[#00F5D4] to-transparent" />
                        <p className="text-xl text-gray-500 font-medium">Une suite d'outils interconnectés pour une maîtrise totale des disciplines STEM.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <span className="block text-3xl font-black text-[#00F5D4]">20+</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500">Modules</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <span className="block text-3xl font-black text-[#7C3AED]">500+</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500">Simulations</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] sm:auto-rows-[400px]">
                    {/* Big Feature: Programming */}
                    <div className="md:col-span-8 md:row-span-1">
                        <ModuleBlock {...modules[0]} className="h-full holo-border" />
                    </div>
                    {/* Secondary: Simulations */}
                    <div className="md:col-span-4 md:row-span-2">
                        <ModuleBlock {...modules[1]} className="h-full" />
                    </div>
                    {/* Third: Engineering */}
                    <div className="md:col-span-4 md:row-span-1">
                        <ModuleBlock {...modules[2]} className="h-full" />
                    </div>
                    {/* Fourth: Library */}
                    <div className="md:col-span-4 md:row-span-2">
                        <ModuleBlock {...modules[4]} className="h-full" />
                    </div>
                    {/* Fifth: Challenges */}
                    <div className="md:col-span-8 md:row-span-1">
                        <ModuleBlock {...modules[3]} className="h-full" />
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY TICKER / FEATURES */}
            <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden">
                <div className="flex whitespace-nowrap animate-slide-in-right opacity-30 select-none">
                    {Array(10).fill(0).map((_, i) => (
                        <div key={i} className="flex items-center gap-12 text-4xl font-black px-6">
                            <span>SYMPY</span>
                            <div className="w-2 h-2 rounded-full bg-white" />
                            <span>PYTHON</span>
                            <div className="w-2 h-2 rounded-full bg-white" />
                            <span>WEBGL</span>
                            <div className="w-2 h-2 rounded-full bg-white" />
                            <span>3D LABS</span>
                            <div className="w-2 h-2 rounded-full bg-white" />
                            <span>STEM SENEGAL</span>
                            <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                    ))}
                </div>
            </section>

            {/* TRUST & QUALITY BANNERS */}
            <section className="py-40 px-4 relative z-10 overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <h2 className="text-5xl sm:text-6xl font-black">
                            L'IA au service de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">l'Éducation</span>
                        </h2>
                        <div className="grid gap-8">
                            {[
                                { icon: <Shield />, title: 'Sécurisé & Privé', desc: 'Vos données et votre progression sont protégées avec les plus hauts standards.' },
                                { icon: <Zap />, title: 'Performance Maximale', desc: 'Moteur d\'exécution Python ultra-rapide directement dans votre navigateur.' },
                                { icon: <Globe />, title: 'Partout au Sénégal', desc: 'Optimisé pour fonctionner même avec une connexion limitée.' }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                        <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Visual representation / Mockup placeholder */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4] to-[#7C3AED] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative aspect-square rounded-[4rem] bg-[#0A0C10] border border-white/10 p-12 overflow-hidden shadow-2xl">
                            <div className="scanner-line" style={{ '--accent-color': '#00F5D4' }} />
                            <div className="h-full w-full flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-20 h-2 bg-[#00F5D4] rounded-full" />
                                    <div className="w-full h-4 bg-white/10 rounded-full" />
                                    <div className="w-4/5 h-4 bg-white/10 rounded-full" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="aspect-square rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center">
                                        <Atom className="text-[#7C3AED]" />
                                    </div>
                                    <div className="aspect-square rounded-2xl bg-[#00F5D4]/20 border border-[#00F5D4]/40 flex items-center justify-center">
                                        <Code className="text-[#00F5D4]" />
                                    </div>
                                    <div className="aspect-square rounded-2xl bg-[#F43F5E]/20 border border-[#F43F5E]/40 flex items-center justify-center">
                                        <Rocket className="text-[#F43F5E]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="py-60 px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <h2 className="text-6xl sm:text-9xl font-black tracking-tighter uppercase leading-none">
                        Rejoignez la <br />
                        <span className="text-[#00F5D4]">Révolution</span>
                    </h2>
                    <p className="text-2xl text-gray-500 max-w-2xl mx-auto italic">
                        Il est temps de passer au niveau supérieur de l'apprentissage scientifique.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
                        <Link href="/programming" className="px-12 py-6 rounded-full bg-[#00F5D4] text-black font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-[0_0_60px_rgba(0,245,212,0.4)]">
                            Accéder au Jupyter Lab
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
