'use client';

import Link from 'next/link';

export default function Home() {

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Maîtrisez Python et l\'algorithmique scientifique dans un environnement de développement intégré.',
            href: '/programming',
            glow: 'glow-blue'
        },
        {
            id: 'sim',
            title: 'Simulations Numériques',
            description: 'Explorez des laboratoires virtuels 3D pour visualiser et comprendre les phénomènes physiques.',
            href: '/simulations',
            glow: 'glow-purple'
        },
        {
            id: 'ing',
            title: 'Applications Ingénierie',
            description: 'Concevez des systèmes complexes, de la robotique aux énergies renouvelables.',
            href: '/engineering',
            glow: 'glow-orange'
        },
        {
            id: 'vid',
            title: 'Capsules Vidéos',
            description: 'Accédez à une bibliothèque de contenus visuels pour approfondir vos connaissances STEM.',
            href: '/videos',
            glow: 'glow-green'
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center py-32 px-4 relative">

            {/* HEADER */}
            <section className="text-center mb-32 max-w-4xl mx-auto fade-up">
                <h1 className="text-7xl md:text-9xl title-display mb-8">
                    SYMLAB
                </h1>
                <p className="text-xl md:text-2xl text-secondary font-light max-w-2xl mx-auto">
                    Une plateforme E-learning pour l'expérimentation mathématiques, ingénierie et physique pour la promotion des STEM au Sénégal.
                </p>
            </section>

            {/* MODULES LIST (DEEP GLASS) */}
            <section className="w-full max-w-3xl flex flex-col gap-8">
                {modules.map((module, index) => (
                    <Link
                        key={module.id}
                        href={module.href}
                        className={`glass-card p-10 group block fade-up delay-${(index + 1) * 100}`}
                    >
                        {/* Ambient Glow */}
                        <div className={`glow-effect ${module.glow}`} />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                                    {module.title}
                                </h3>
                                <p className="text-secondary text-lg group-hover:text-gray-300 transition-colors">
                                    {module.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>

        </main>
    );
}
