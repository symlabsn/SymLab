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

            {/* RESSOURCES RAPIDES */}
            <section className="w-full max-w-4xl mt-20 relative z-10 fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Ressources Thématiques
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">Accès direct aux modules spécialisés</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Machine Learning */}
                    <Link href="/courses?course=ml-intro"
                        className="group p-6 rounded-2xl bg-[#0F1115] border border-white/10 hover:border-[#7C3AED]/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7C3AED]/20">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                            🤖
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400">Machine Learning</h3>
                        <p className="text-sm text-gray-400">Introduction aux algorithmes et réseaux de neurones.</p>
                    </Link>

                    {/* Visualisations */}
                    <Link href="/courses?course=vis-data"
                        className="group p-6 rounded-2xl bg-[#0F1115] border border-white/10 hover:border-[#F472B6]/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F472B6]/20">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                            📊
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400">Visualisations</h3>
                        <p className="text-sm text-gray-400">Storytelling avec la Data et graphiques interactifs.</p>
                    </Link>

                    {/* Cours de Math */}
                    <Link href="/courses?subject=Mathématiques"
                        className="group p-6 rounded-2xl bg-[#0F1115] border border-white/10 hover:border-[#00F5D4]/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00F5D4]/20">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                            ♾️
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400">Cours de Math</h3>
                        <p className="text-sm text-gray-400">Programmes complets du Collège au Supérieur.</p>
                    </Link>
                </div>
            </section>

        </main>
    );
}
