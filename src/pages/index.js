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
      title: 'Simulations',
      subtitle: 'Laboratoire Virtuel',
      description: 'Expérimentez la physique et la chimie en 3D temps réel.',
      href: '/simulations',
      gradient: 'bg-gradient-to-br from-blue-600 to-cyan-400',
      shadow: 'shadow-blue-500/20'
    },
    {
      id: 'prog',
      title: 'Programmation',
      subtitle: 'Python Lab',
      description: 'IDE complet pour apprendre le code sans installation.',
      href: '/programming',
      gradient: 'bg-gradient-to-br from-violet-600 to-purple-400',
      shadow: 'shadow-purple-500/20'
    },
    {
      id: 'vid',
      title: 'Vidéos',
      subtitle: 'Capsules Éducatives',
      description: 'Comprenez les concepts complexes en 5 minutes.',
      href: '/videos',
      gradient: 'bg-gradient-to-br from-orange-500 to-amber-400',
      shadow: 'shadow-orange-500/20'
    },
    {
      id: 'proj',
      title: 'Projets',
      subtitle: 'Travaux Pratiques',
      description: 'Appliquez vos connaissances sur des cas réels.',
      href: '/projects',
      gradient: 'bg-gradient-to-br from-emerald-500 to-green-400',
      shadow: 'shadow-green-500/20'
    },
    {
      id: 'quiz',
      title: 'Quiz & QCM',
      subtitle: 'Auto-évaluation',
      description: 'Testez-vous et suivez votre progression.',
      href: '/challenges',
      gradient: 'bg-gradient-to-br from-pink-500 to-rose-400',
      shadow: 'shadow-pink-500/20'
    },
    {
      id: 'res',
      title: 'Ressources',
      subtitle: 'Bibliothèque',
      description: 'Accédez à tous les cours et fiches de révision.',
      href: '/ressources',
      gradient: 'bg-gradient-to-br from-indigo-500 to-blue-400',
      shadow: 'shadow-indigo-500/20'
    }
  ];

  return (
    <main className="min-h-screen pb-20 bg-[#030014]">

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bento-card text-center py-24 px-8 border-highlight bg-gradient-to-b from-[rgba(15,12,41,0.8)] to-[rgba(15,12,41,0.4)] relative overflow-hidden group">

          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent-primary/10 to-transparent opacity-50 pointer-events-none" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse shadow-[0_0_10px_var(--accent-secondary)]"></span>
            <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Plateforme STEM 2.0</span>
          </div>

          {/* Title */}
          <h1 className="relative text-5xl md:text-8xl font-bold tracking-tight mb-8 animate-in delay-100 leading-tight">
            <span className="text-white drop-shadow-lg">Apprenez les Sciences</span>
            <br />
            <span className="text-gradient-primary drop-shadow-lg">Autrement.</span>
          </h1>

          {/* Subtitle */}
          <p className="relative text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-in delay-200">
            La plateforme interactive la plus avancée du Sénégal. Simulations 3D, Python Lab, et IA intégrée.
          </p>

          {/* CTA Buttons */}
          <div className="relative flex flex-wrap justify-center gap-4 animate-in delay-300">
            <Link href="/programming" className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Commencer Gratuitement
            </Link>
            <Link href="/apropos" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bento-card p-6 flex flex-col items-center justify-center bg-white/5 border-subtle hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECTANGULAR COLORFUL MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Modules</h2>
          <div className="h-1 w-20 bg-accent-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className={`
                group relative overflow-hidden rounded-2xl p-1 
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${module.shadow}
              `}
            >
              {/* Card Content */}
              <div className={`
                relative h-full rounded-xl p-8 flex flex-col justify-between
                ${module.gradient}
              `}>
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">
                    {module.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {module.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                {/* Bottom Line Decoration */}
                <div className="relative z-10 mt-8 h-1 w-12 bg-white/40 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bento-card p-12 text-center bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-highlight">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à exceller ?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Rejoignez la communauté SymLab et accédez à tous les outils pour réussir vos études scientifiques.</p>
          <Link href="/programming" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-accent-primary rounded-xl hover:bg-accent-primary/80 transition-colors shadow-lg shadow-accent-primary/25">
            Créer un compte gratuit
          </Link>
        </div>
      </section>

    </main>
  );
}
