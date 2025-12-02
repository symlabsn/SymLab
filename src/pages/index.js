'use client';

import Link from 'next/link';

export default function Home() {

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            href: '/programming',
            gradient: 'from-blue-600 to-cyan-500',
            glow: 'shadow-blue-500/20'
        },
        {
            id: 'sim',
            title: 'Simulations Numériques',
            href: '/simulations',
            gradient: 'from-violet-600 to-purple-500',
            glow: 'shadow-purple-500/20'
        },
        {
            id: 'ing',
            title: 'Applications Ingénierie',
            href: '/engineering',
            gradient: 'from-orange-500 to-amber-500',
            glow: 'shadow-orange-500/20'
        },
        {
            id: 'vid',
            title: 'Capsules Vidéos',
            href: '/videos',
            gradient: 'from-emerald-500 to-teal-500',
            glow: 'shadow-emerald-500/20'
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[#050510] relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

            {/* HEADER */}
            <section className="text-center mb-16 relative z-10 max-w-4xl mx-auto">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 drop-shadow-2xl">
                    SYMLAB
                </h1>

                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />

                <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
                    Une plateforme E-learning pour l'expérimentation <span className="text-blue-400 font-medium">mathématiques</span>, <span className="text-orange-400 font-medium">ingénierie</span> et la <span className="text-purple-400 font-medium">physique</span> pour la promotion des STEM au Sénégal.
                </p>
            </section>

            {/* MODULES GRID (2x2) */}
            <section className="w-full max-w-5xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {modules.map((module) => (
                        <Link
                            key={module.id}
                            href={module.href}
                            className={`
                group relative h-48 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/30
                flex items-center justify-center
                ${module.glow} hover:shadow-2xl
              `}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Title */}
                            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform duration-300 text-center px-4">
                                {module.title}
                            </h3>

                            {/* Subtle Corner Accent */}
                            <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${module.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                        </Link>
                    ))}
                </div>
            </section>

        </main>
    );
}
