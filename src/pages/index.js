'use client';

import Link from 'next/link';

export default function Home() {

  const modules = [
    {
      id: 'symbolic',
      title: 'Calcul Symbolique',
      description: 'Manipulation d\'expressions mathématiques et résolution exacte.',
      href: '/maths',
      color: 'text-blue-400',
      hover: 'hover-neon-blue',
      status: 'Disponible',
      count: '12 Cours'
    },
    {
      id: 'simulation',
      title: 'Simulation Numérique',
      description: 'Modélisation de phénomènes physiques et expériences virtuelles.',
      href: '/simulations',
      color: 'text-purple-400',
      hover: 'hover-neon-purple',
      status: 'Interactif',
      count: '8 Labos'
    },
    {
      id: 'programming',
      title: 'Programmation',
      description: 'Algorithmique et développement pour les sciences.',
      href: '/programming',
      color: 'text-orange-400',
      hover: 'hover-neon-orange',
      status: 'IDE En ligne',
      count: 'Python 3.10'
    },
    {
      id: 'engineering',
      title: 'Ingénierie',
      description: 'Solutions techniques et systèmes complexes.',
      href: '/engineering',
      color: 'text-cyan-400',
      hover: 'hover-neon-cyan',
      status: 'Projets',
      count: '5 Systèmes'
    },
    {
      id: 'projects',
      title: 'Projets Concrets',
      description: 'Réalisations pratiques et défis STEM au Sénégal.',
      href: '/projects',
      color: 'text-green-400',
      hover: 'hover-neon-green',
      status: 'Challenge',
      count: 'Nouveau'
    }
  ];

  return (
    <main className="min-h-screen relative flex flex-col justify-center py-20 overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* HEADER */}
      <section className="relative z-10 px-4 text-center mb-20">
        <div className="animate-in fade-in zoom-in duration-1000">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">SymLab Dashboard V2.0</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white text-glow">
            SYMLAB
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Plateforme E-learning pour l'expérimentation <span className="text-blue-400 font-bold">Maths</span>, <span className="text-orange-400 font-bold">Ingénierie</span> et <span className="text-purple-400 font-bold">Physique</span>.
          </p>
        </div>
      </section>

      {/* DASHBOARD GRID */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.href}
              className={`dashboard-card p-8 group flex flex-col justify-between h-[320px] ${module.hover}`}
            >
              {/* Top Row: Status & Count */}
              <div className="flex justify-between items-start mb-6">
                <span className={`badge-status ${module.color} bg-opacity-10 border-opacity-20`}>
                  {module.status}
                </span>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {module.count}
                </span>
              </div>

              {/* Middle: Content */}
              <div>
                <h3 className={`text-3xl font-bold text-white mb-3 group-hover:${module.color} transition-colors duration-300`}>
                  {module.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Bottom: Action Button (No Arrow) */}
              <div className="mt-auto pt-8">
                <span className="btn-dashboard">
                  Ouvrir le Module
                </span>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}
