'use client';

import Link from 'next/link';

export default function Home() {

  const modules = [
    {
      id: 'symbolic',
      title: 'Calcul Symbolique',
      description: 'Manipulation d\'expressions mathématiques et résolution exacte.',
      href: '/maths',
      gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700'
    },
    {
      id: 'simulation',
      title: 'Simulation Numérique',
      description: 'Modélisation de phénomènes physiques et expériences virtuelles.',
      href: '/simulations',
      gradient: 'bg-gradient-to-br from-violet-600 to-purple-700'
    },
    {
      id: 'programming',
      title: 'Programmation',
      description: 'Algorithmique et développement pour les sciences.',
      href: '/programming',
      gradient: 'bg-gradient-to-br from-amber-500 to-orange-700'
    },
    {
      id: 'engineering',
      title: 'Applications Ingénierie',
      description: 'Solutions techniques et systèmes complexes.',
      href: '/engineering',
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-700'
    },
    {
      id: 'projects',
      title: 'Projets Concrets',
      description: 'Réalisations pratiques et défis STEM au Sénégal.',
      href: '/projects',
      gradient: 'bg-gradient-to-br from-emerald-500 to-green-700'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-blue-500/30 flex flex-col justify-center py-20">

      {/* HEADER */}
      <section className="px-4 text-center mb-16">
        <div className="animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100">
            SYMLAB
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Une plateforme E-learning pour l'expérimentation <span className="text-white font-medium">mathématiques</span>, <span className="text-white font-medium">ingénierie</span> et <span className="text-white font-medium">physique</span> pour la promotion des STEM au Sénégal.
          </p>
        </div>
      </section>

      {/* MODULES GRID (No Icons, No Arrows) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.href}
              className={`
                group relative overflow-hidden rounded-2xl p-8 h-64 flex flex-col justify-center
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10
                ${module.gradient}
              `}
            >
              {/* Glass Overlay Effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {module.title}
                </h3>
                <p className="text-white/80 text-lg font-medium leading-relaxed">
                  {module.description}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}
