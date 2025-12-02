'use client';

import Link from 'next/link';

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
                    <Link
                        key={module.id}
                        href={module.href}
                        className={`
              group relative block w-full p-8 rounded-xl border-2 bg-slate-900/80 backdrop-blur-md
              transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
              ${module.border} ${module.shadow}
            `}
                    >
                        {/* Glow Effect on Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white`} />

                        <div className="relative z-10">
                            <h3 className={`text-3xl font-bold mb-3 ${module.text} group-hover:text-white transition-colors`}>
                                {module.title}
                            </h3>
                            <p className="text-slate-400 text-lg group-hover:text-slate-200 transition-colors">
                                {module.description}
                            </p>
                        </div>
                        {/* CTA revealed on hover/focus */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 module-cta">
                            <span style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} className="px-4 py-2 rounded-full font-semibold text-black">
                                Explorer
                            </span>
                        </div>
                    </Link>
                ))}
            </section>

        </main>
    );
}
