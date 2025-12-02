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

  // Animated counter
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
      title: 'Simulations Interactives',
      description: 'Explorez les lois de la physique avec des simulations visuelles et interactives en temps réel.',
      href: '/simulations',
      color: 'blue'
    },
    {
      title: 'Python Lab',
      description: 'Programmez en Python directement dans votre navigateur. Aucune installation requise.',
      href: '/programming',
      color: 'purple'
    },
    {
      title: 'QCM Sénégal',
      description: 'Préparez-vous avec des questionnaires basés sur le curriculum sénégalais.',
      href: '/challenges',
      color: 'pink'
    },
    {
      title: 'Travaux Pratiques',
      description: 'Accédez à des ressources pédagogiques et guides pour approfondir vos connaissances.',
      href: '/projects',
      color: 'green'
    },
    {
      title: 'Capsules Vidéo',
      description: 'Apprenez avec des vidéos éducatives courtes et percutantes.',
      href: '/videos',
      color: 'cyan'
    },
    {
      title: 'Ressources',
      description: 'Bibliothèque complète de cours et documents pédagogiques.',
      href: '/ressources',
      color: 'purple'
    },
    {
      title: 'Code Editor',
      description: 'Éditeur de code en ligne avec support multi-langages.',
      href: '/code',
      color: 'blue'
    },
    {
      title: 'Examens',
      description: 'Préparez vos examens avec des sujets types et corrections.',
      href: '/exams',
      color: 'pink'
    }
  ];

  const colorClasses = {
    blue: 'border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/5',
    purple: 'border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/5',
    pink: 'border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-500/5',
    green: 'border-green-500/30 hover:border-green-500/60 hover:bg-green-500/5',
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/5'
  };

  return (
    <main className="relative min-h-screen pt-20">
      {/* Hero Section - Simple */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
            SymLab
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Plateforme STEM interactive pour l'apprentissage des sciences et technologies
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center gradient-text">
            Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className={`
                  glass rounded-xl p-6
                  border-2 ${colorClasses[module.color]}
                  transition-all duration-300
                  hover:scale-105
                `}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {module.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-black mb-4 gradient-text">
              Commencez Maintenant
            </h3>
            <p className="text-gray-300 mb-8">
              Rejoignez SymLab et transformez votre apprentissage des sciences
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/programming"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-bold text-white hover:scale-105 transition-transform"
              >
                Commencer
              </Link>
              <Link
                href="/apropos"
                className="px-8 py-4 glass rounded-xl font-bold hover:scale-105 transition-transform"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
