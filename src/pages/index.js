'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [stats, setStats] = useState([
    { value: 0, target: 1200, label: 'Étudiants', suffix: '+' },
    { value: 0, target: 50, label: 'Simulations', suffix: '+' },
    { value: 0, target: 100, label: 'Exercices', suffix: '+' },
    { value: 0, target: 24, label: 'Support', suffix: 'h' }
  ]);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setStats(prevStats =>
        prevStats.map(stat => {
          if (stat.value < stat.target) {
            const increment = stat.target / steps;
            return {
              ...stat,
              value: Math.min(stat.value + increment, stat.target)
            };
          }
          return stat;
        })
      );
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      id: 'sim',
      title: 'SIMULATIONS',
      subtitle: 'Laboratoire Virtuel 3D',
      description: 'Plongez au cœur de la matière. Manipulez des atomes, observez des réactions chimiques explosives et visualisez les forces physiques invisibles dans un environnement 3D sécurisé et interactif.',
      href: '/simulations',
      color: 'cyan',
      borderColor: 'border-cyan-500',
      shadowColor: 'shadow-cyan-500/50',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'prog',
      title: 'PROGRAMMATION',
      subtitle: 'Python Lab & IA',
      description: 'Votre IDE personnel dans le navigateur. Apprenez Python avec notre assistant IA qui corrige votre code en temps réel et vous propose des défis adaptés à votre niveau.',
      href: '/programming',
      color: 'purple',
      borderColor: 'border-purple-500',
      shadowColor: 'shadow-purple-500/50',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'vid',
      title: 'VIDÉOS',
      subtitle: 'Capsules & Tutoriels',
      description: 'Une bibliothèque complète de cours animés. Des explications visuelles claires pour comprendre les concepts les plus complexes en moins de 5 minutes.',
      href: '/videos',
      color: 'orange',
      borderColor: 'border-orange-500',
      shadowColor: 'shadow-orange-500/50',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'proj',
      title: 'PROJETS',
      subtitle: 'Travaux Pratiques',
      description: 'Passez de la théorie à la pratique. Réalisez des projets concrets, du calcul de trajectoire de fusée à la simulation de circuits électriques.',
      href: '/projects',
      color: 'emerald',
      borderColor: 'border-emerald-500',
      shadowColor: 'shadow-emerald-500/50',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      id: 'quiz',
      title: 'QUIZ & QCM',
      subtitle: 'Entraînement Intensif',
      description: 'Préparez vos examens avec des milliers de questions. Suivez votre progression, gagnez des badges et identifiez vos points forts et vos lacunes.',
      href: '/challenges',
      color: 'rose',
      borderColor: 'border-rose-500',
      shadowColor: 'shadow-rose-500/50',
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <main className="min-h-screen pb-20 bg-[#050511] text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold tracking-widest uppercase text-sm">
              Plateforme Éducative Nouvelle Génération
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            <span className="block text-white mb-2">SYMLAB</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              LEARNING
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            L'excellence scientifique à portée de main. Une expérience immersive pour maîtriser les sciences et la technologie.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/programming" className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:scale-105">
              Commencer l'Aventure
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-2xl transform skew-y-2 group-hover:skew-y-0 transition-all duration-300" />
              <div className="relative p-6 text-center border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERTICAL NEON STACKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-12 w-2 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
          <h2 className="text-5xl font-black text-white uppercase tracking-tight">Nos Modules</h2>
        </div>

        <div className="space-y-12">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className="block group perspective-1000"
            >
              <div className={`
                relative overflow-hidden rounded-3xl border-2 ${module.borderColor} 
                bg-[#0a0a16] transition-all duration-500 
                hover:transform hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)]
                hover:${module.shadowColor}
              `}>

                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content Layout */}
                <div className="relative z-10 flex flex-col md:flex-row">

                  {/* Left Side: Title & Visual */}
                  <div className={`
                    w-full md:w-2/5 p-10 flex flex-col justify-center relative overflow-hidden
                    bg-gradient-to-br ${module.gradient}
                  `}>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                    <div className="relative z-10">
                      <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                        {module.title}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-black/30 rounded-lg text-white/90 font-mono text-sm border border-white/20">
                        {module.subtitle}
                      </div>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  </div>

                  {/* Right Side: Detailed Description */}
                  <div className="w-full md:w-3/5 p-10 flex flex-col justify-center bg-black/40 backdrop-blur-md">
                    <p className="text-lg text-gray-300 leading-relaxed font-light">
                      {module.description}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <span className={`text-sm font-bold uppercase tracking-widest text-${module.color}-400 group-hover:text-white transition-colors`}>
                        Explorer le module
                      </span>
                      <div className={`h-0.5 w-12 bg-${module.color}-500 group-hover:w-24 transition-all duration-300`} />
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
