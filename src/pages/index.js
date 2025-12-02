'use client';

import Link from 'next/link';

export default function Home() {

  const modules = [
    {
      id: 'symbolic',
      title: 'Calcul Symbolique',
      description: 'Manipulation d\'expressions mathématiques et résolution exacte.',
      href: '/maths',
      gradient: 'from-blue-600 to-indigo-600',
      icon: '∫dx'
    },
    {
      id: 'simulation',
      title: 'Simulation Numérique',
      description: 'Modélisation de phénomènes physiques et expériences virtuelles.',
      href: '/simulations',
      gradient: 'from-violet-600 to-purple-600',
      icon: '⚡'
    },
    {
      id: 'programming',
      title: 'Programmation',
      description: 'Algorithmique et développement pour les sciences.',
      href: '/programming',
      gradient: 'from-amber-500 to-orange-600',
      icon: '💻'
    },
    {
      id: 'engineering',
      title: 'Applications Ingénierie',
      description: 'Solutions techniques et systèmes complexes.',
      href: '/engineering',
      gradient: 'from-cyan-500 to-teal-600',
      icon: '⚙️'
    },
    {
      id: 'projects',
      title: 'Projets Concrets',
      description: 'Réalisations pratiques et défis STEM au Sénégal.',
      href: '/projects',
      gradient: 'from-emerald-500 to-green-600',
      icon: '🚀'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-blue-500/30 flex flex-col justify-center">

      {/* HERO SECTION : MISSION */}
      <section className="pt-20 pb-12 px-4 text-center relative z-10">
        <div className="animate-in fade-in zoom-in duration-1000">

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
            SYMLAB
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Une plateforme E-learning pour l'expérimentation <span className="text-blue-400 font-medium">mathématiques</span>, <span className="text-orange-400 font-medium">ingénierie</span> et <span className="text-purple-400 font-medium">physique</span> pour la promotion des STEM au Sénégal.
          </p>
        </div>
      </section>

      {/* MODULES GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-20">
        {/* Grid Layout: 3 top, 2 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

          {/* Row 1: 3 items (Calcul, Simu, Prog) */}
          {modules.slice(0, 3).map((module) => (
            <Link
              key={module.id}
              href={module.href}
              className="lg:col-span-2 group relative h-64 rounded-3xl bg-[#151B2B] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Border Glow */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500`} />

              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={`text-4xl p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    {module.icon}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {module.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* Row 2: 2 items centered (Ingénierie, Projets) */}
          <div className="hidden lg:block lg:col-span-1"></div> {/* Spacer */}

          {modules.slice(3, 5).map((module) => (
            <Link
              key={module.id}
              href={module.href}
              className="lg:col-span-2 group relative h-64 rounded-3xl bg-[#151B2B] border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500`} />

              <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={`text-4xl p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    {module.icon}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {module.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          <div className="hidden lg:block lg:col-span-1"></div> {/* Spacer */}

        </div>
      </section>

    </main>
  );
}
