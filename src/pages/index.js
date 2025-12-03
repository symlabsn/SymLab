'use client';

import Link from 'next/link';
import ModuleBlock from '@/components/ModuleBlock';

export default function Home() {

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Maîtrisez Python et l\'algorithmique scientifique dans un environnement de développement intégré.',
            href: '/programming',
            accentStart: '#00F5D4',
            accentEnd: '#7C3AED',
            accentColor: '#00F5D4'
        },
        {
            id: 'sim',
            title: 'Simulations Numériques',
            description: 'Explorez des laboratoires virtuels 3D pour visualiser et comprendre les phénomènes physiques.',
            href: '/simulations',
            accentStart: '#8B5CF6',
            accentEnd: '#06B6D4',
            accentColor: '#7C3AED'
        },
        {
            id: 'ing',
            title: 'Applications Ingénierie',
            description: 'Concevez des systèmes complexes, de la robotique aux énergies renouvelables.',
            href: '/engineering',
            accentStart: '#FB923C',
            accentEnd: '#FF7A59',
            accentColor: '#FB923C'
        },
        {
            id: 'vid',
            title: 'Capsules Vidéos',
            description: 'Accédez à une bibliothèque de contenus visuels pour approfondir vos connaissances STEM.',
            href: '/videos',
            accentStart: '#34D399',
            accentEnd: '#06B6D4',
            accentColor: '#10B981'
        }
    ];

    return (
        // FORCE DARK BACKGROUND HERE
        <main className="min-h-screen flex flex-col items-center py-20 px-4 bg-slate-950 relative overflow-hidden center-page">

            {/* Background Gradient Mesh (Direct Tailwind) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px]" />
            </div>

            {/* HEADER */}
            <section className="text-center mb-20 relative z-10 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 drop-shadow-xl">
                    SYMLAB
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                    Une plateforme E-learning pour l'expérimentation <span className="text-cyan-400 font-bold">mathématiques</span>, <span className="text-orange-400 font-bold">ingénierie</span> et la <span className="text-purple-400 font-bold">physique</span> pour la promotion des STEM au Sénégal.
                </p>
            </section>

            {/* VERTICAL BLOCKS (CAGES) */}
            <section className="w-full max-w-3xl relative z-10 flex flex-col gap-6">
                            {modules.map((module) => (
                                <ModuleBlock
                                    key={module.id}
                                    href={module.href}
                                    title={module.title}
                                    description={module.description}
                                    accentGradient={`linear-gradient(90deg, ${module.accentStart}, ${module.accentEnd})`}
                                    accentColor={module.accentColor}
                                    className="module-special"
                                />
                            ))}
            </section>

        </main>
    );
}
