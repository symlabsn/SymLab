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
      level: 'Débutant',
      progress: 0,
      href: '/simulations',
      icon: '🔬',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'prog',
      title: 'Programmation Python',
      level: 'Intermédiaire',
      progress: 0,
      href: '/programming',
      icon: '🐍',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 'vid',
      title: 'Capsules Vidéo',
      level: 'Tous niveaux',
      progress: 0,
      href: '/videos',
      icon: '▶️',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'proj',
      title: 'Projets & TP',
      level: 'Avancé',
      progress: 0,
      href: '/projects',
      icon: '🚀',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'quiz',
      title: 'Quiz & QCM',
      level: 'Entraînement',
      progress: 0,
      href: '/challenges',
      icon: '📝',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'res',
      title: 'Ressources',
      level: 'Documentation',
      progress: 0,
      href: '/ressources',
      icon: '📚',
      color: 'bg-gray-100 text-gray-600'
    }
  ];

  return (
    <main className="min-h-screen pb-20 bg-[#F2F5F7]">

      {/* Header Section */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-black text-[#2B3648] mb-2">
              Bonjour, Apprenant 👋
            </h1>
            <p className="text-[#777777] text-lg">
              Prêt à continuer votre apprentissage scientifique ?
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-white px-6 py-3 rounded-xl border border-[#E0E0E0] shadow-sm flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="font-bold text-[#2B3648]">0 Jours</div>
                <div className="text-xs text-[#777777] uppercase font-bold">Série</div>
              </div>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl border border-[#E0E0E0] shadow-sm flex items-center gap-3">
              <span className="text-2xl">💎</span>
              <div>
                <div className="font-bold text-[#2B3648]">0 XP</div>
                <div className="text-xs text-[#777777] uppercase font-bold">Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.href}
              className="course-card p-6 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`icon-circle ${module.color}`}>
                  {module.icon}
                </div>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wide">
                  {module.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#2B3648] mb-2">
                {module.title}
              </h3>

              <div className="mt-auto pt-6">
                <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 uppercase">
                  <span>Progression</span>
                  <span>0%</span>
                </div>
                <div className="progress-bar mb-6">
                  <div className="progress-fill w-0"></div>
                </div>

                <span className="btn-action">
                  Commencer
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl border border-[#E0E0E0] p-8">
          <h2 className="text-2xl font-bold text-[#2B3648] mb-8">Statistiques de la plateforme</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-black text-[#1CB0F6] mb-1">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
