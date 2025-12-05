'use client';

import Link from 'next/link';
import ModuleBlock from '@/components/ModuleBlock';

export default function Home() {

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

    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">

            {/* HEADER */}
            <section className="center-xy mb-16 relative z-10 max-w-4xl mx-auto fade-in-up">
                <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-white to-[#7C3AED] mb-6"
                    style={{
                        textShadow: '0 0 40px rgba(0, 245, 212, 0.3), 0 0 80px rgba(124, 58, 237, 0.2)',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                    }}
                >
                    SYMLAB
                </h1>

                <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Plateforme immersive pour les <span className="text-[#00F5D4] font-bold">STEM</span> au Sénégal.
                </p>
            </section>

            {/* CENTERED MODULE STACK */}
            <section className="w-full max-w-2xl flex flex-col gap-8 relative z-10">
                {modules.map((module, index) => (
                    <ModuleBlock
                        key={module.id}
                        {...module}
                        className="fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    />
                ))}
            </section>

        </main>
    );
}
