'use client';

import Link from 'next/link';

export default function Home() {

    const modules = [
        {
            id: 'prog',
            title: 'Programmation',
            description: 'Apprenez Python et l\'algorithmique appliquée aux sciences. IDE interactif intégré.',
            href: '/programming',
            gradient: 'bg-gradient-to-r from-blue-600 to-cyan-500',
            shadow: 'shadow-blue-500/50'
        },
        {
            id: 'sim',
            title: 'Simulations Numériques',
            description: 'Visualisez les phénomènes physiques complexes grâce à nos laboratoires virtuels 3D.',
            href: '/simulations',
            gradient: 'bg-gradient-to-r from-violet-600 to-fuchsia-600',
            shadow: 'shadow-fuchsia-500/50'
        },
        {
            id: 'ing',
            title: 'Applications Ingénierie',
            description: 'Concevez des systèmes techniques, de la robotique aux énergies renouvelables.',
            href: '/engineering',
            gradient: 'bg-gradient-to-r from-orange-500 to-amber-500',
            shadow: 'shadow-orange-500/50'
        },
        {
            id: 'vid',
            title: 'Capsules Vidéos',
            description: 'Comprenez les concepts clés avec des explications visuelles claires et concises.',
            href: '/videos',
            gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500',
            shadow: 'shadow-emerald-500/50'
        }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center py-20 px-4 bg-[#050510] relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[150px]" />
            </div>

            {/* HEADER */}
            <section className="text-center mb-20 relative z-10 max-w-4xl mx-auto">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
                    SYMLAB
                </h1>

                <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-10 rounded-full" />

                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                    Une plateforme E-learning pour l'expérimentation <span className="text-blue-400 font-bold">mathématiques</span>, <span className="text-orange-400 font-bold">ingénierie</span> et la <span className="text-purple-400 font-bold">physique</span> pour la promotion des STEM au Sénégal.
                </p>
            </section>

            {/* VERTICAL COLOR STACK (NO ICONS) */}
            <section className="w-full max-w-3xl relative z-10 flex flex-col gap-8">
                {modules.map((module) => (
                    <Link
                        key={module.id}
                        href={module.href}
                        className={`
              group relative w-full p-1 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105
              ${module.gradient} hover:shadow-2xl ${module.shadow}
            `}
                    >
                        {/* Inner Content Block */}
                        <div className="relative h-full bg-[#0A0A16] rounded-xl p-8 flex flex-col justify-center transition-colors group-hover:bg-opacity-90">

                            {/* Color Bar Indicator */}
                            <div className={`hidden md:block w-2 h-full absolute left-0 top-0 bottom-0 ${module.gradient}`} />

                            <div className="text-center md:text-left pl-0 md:pl-6">
                                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {module.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-white transition-colors">
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
