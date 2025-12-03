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
            description: 'Conception de systèmes, robotique et projets.',
            href: '/engineering',
            accentColor: '#FF9F1C' // Orange
        },
        {
            id: 'vid',
            title: 'Vidéos',
            description: 'Capsules visuelles pour comprendre les STEM.',
            href: '/videos',
            accentColor: '#10B981' // Green
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">

            {/* HEADER */}
            <section className="center-xy mb-20 relative z-10 max-w-4xl mx-auto fade-in-up">
                <div className="text-xs font-mono text-[#00F5D4] tracking-[0.5em] mb-4 opacity-70">
          /// INITIALIZING_SYSTEM
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 glow-text">
                    SYMLAB
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Plateforme immersive pour les <span className="text-[#00F5D4] font-bold">STEM</span> au Sénégal.
                </p>
            </section>

            {/* CENTERED MODULE STACK */}
            <section className="w-full max-w-2xl flex flex-col gap-8 relative z-10">
                {modules.map((module, index) => (
                    <ModuleBlock
                        key={module.id}
                        {...module}
                        className={`fade-in-up delay-${(index + 1) * 100}`}
                    />
                ))}
            </section>

        </main>
    );
}
