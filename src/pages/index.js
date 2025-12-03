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
            border: 'border-cyan-500',
            shadow: 'shadow-cyan-500/20',
            text: 'text-cyan-400'
        },
        {
            id: 'sim',
            title: 'Simulations Numériques',
            description: 'Explorez des laboratoires virtuels 3D pour visualiser et comprendre les phénomènes physiques.',
            href: '/simulations',
            border: 'border-purple-500',
            shadow: 'shadow-purple-500/20',
            text: 'text-purple-400'
        },
        {
            id: 'ing',
            title: 'Applications Ingénierie',
            description: 'Concevez des systèmes complexes, de la robotique aux énergies renouvelables.',
            href: '/engineering',
            border: 'border-orange-500',
            shadow: 'shadow-orange-500/20',
            text: 'text-orange-400'
        },
        {
            id: 'vid',
            title: 'Capsules Vidéos',
            description: 'Accédez à une bibliothèque de contenus visuels pour approfondir vos connaissances STEM.',
            href: '/videos',
            border: 'border-emerald-500',
            shadow: 'shadow-emerald-500/20',
            text: 'text-emerald-400'
        }
    ];

    return (
        // FORCE DARK BACKGROUND HERE
        <main className="min-h-screen flex flex-col items-center py-20 px-4 bg-slate-950 relative overflow-hidden">

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
                            accentGradient={`linear-gradient(90deg, ${module.text === 'text-cyan-400' ? 'var(--accent)' : 'var(--accent)'}, var(--accent-2))`}
                        />
                    ))}
            </section>

        </main>
    );
}
