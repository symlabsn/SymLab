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
      tag: 'Laboratoire 3D',
      description: 'Expérimentez la physique et la chimie dans un environnement virtuel sécurisé.',
      href: '/simulations',
      icon: '🔬'
    },
    {
      id: 'prog',
      title: 'Programmation',
      tag: 'Python & IA',
      description: 'Apprenez à coder avec notre assistant intelligent qui vous guide pas à pas.',
      href: '/programming',
      icon: '💻'
    },
    {
      id: 'vid',
      title: 'Vidéos',
      tag: 'Cours Animés',
      description: 'Des explications claires et concises pour maîtriser chaque concept.',
      href: '/videos',
      icon: '▶️'
    },
    {
      id: 'proj',
      title: 'Projets',
      tag: 'Travaux Pratiques',
      description: 'Mettez la théorie en pratique avec des projets concrets et guidés.',
      href: '/projects',
      icon: '🚀'
    },
    {
      id: 'quiz',
      title: 'Quiz & QCM',
      tag: 'Évaluation',
      description: 'Testez vos connaissances et suivez votre progression en temps réel.',
      href: '/challenges',
      icon: '📝'
    }
  ];

  return (
    <main className="min-h-screen pb-20 bg-[#F9FAFB]">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="animate-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            L'excellence scientifique, <br />
            <span className="text-[#15C39A]">simplifiée.</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            SymLab vous offre tous les outils pour réussir vos études scientifiques. Simulations, code, et cours interactifs en un seul endroit.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/programming" className="btn-primary shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all">
              Commencer gratuitement
            </Link>
            <Link href="/apropos" className="px-6 py-3 rounded-full bg-white text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLEAN VERTICAL MODULES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Vos Modules</h2>
          <p className="text-gray-500 mt-2">Tout ce dont vous avez besoin pour progresser</p>
        </div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              className="clean-card block p-6 group hover:border-[#15C39A]"
            >
              <div className="flex items-center gap-6">

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#E3F9F2] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#15C39A] transition-colors">
                      {module.title}
                    </h3>
                    <span className="badge-clean">
                      {module.tag}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#15C39A] group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
