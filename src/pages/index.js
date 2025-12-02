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
      title: 'Simulations Interactives',
      description: 'Laboratoire virtuel pour expérimenter la physique et la chimie en temps réel.',
      href: '/simulations',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'prog',
      title: 'Programmation Python',
      description: 'Environnement de développement complet pour apprendre à coder.',
      href: '/programming',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 'vid',
      title: 'Capsules Vidéo',
      description: 'Cours animés et explications visuelles pour comprendre rapidement.',
      href: '/videos',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'proj',
      title: 'Projets & TP',
      description: 'Travaux pratiques guidés pour appliquer vos connaissances.',
      href: '/projects',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      id: 'quiz',
      title: 'Quiz & QCM',
      description: 'Évaluez votre progression avec des tests interactifs.',
      href: '/challenges',
      gradient: 'from-pink-500 to-rose-500'
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
            La plateforme interactive la plus avancée du Sénégal. Simulations 3D, Python Lab, et IA intégrée pour une expérience d'apprentissage sans limites.
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

      {/* HORIZONTAL FLUID MODULES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Modules d'Apprentissage</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className="group relative block w-full"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10">

                {/* Hover Gradient Background (Fluid Effect) */}
                <div className={`absolute inset-0 bg-gradient-to-r ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Left Accent Bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${module.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {module.title}
                    </h3>
                    <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                      {module.description}
                    </p>
                  </div>

                  {/* Right Side Indicator (Subtle Glow instead of arrow) */}
                  <div className={`
                    hidden md:block w-3 h-3 rounded-full 
                    bg-gradient-to-r ${module.gradient}
                    shadow-[0_0_10px_currentColor]
                    opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500
                  `} />

                </div>
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
