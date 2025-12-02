'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ModuleCard from '@/components/ModuleCard';
import ParticleBackground from '@/components/ParticleBackground';
import { useState, useEffect } from 'react';

export default function Home() {
  const [stats, setStats] = useState([
    { value: 0, target: 1200, label: 'Étudiants Actifs', suffix: '+' },
    { value: 0, target: 50, label: 'Simulations', suffix: '+' },
    { value: 0, target: 100, label: 'Exercices', suffix: '+' },
    { value: 0, target: 24, label: 'Support 24/7', suffix: 'h' }
  ]);

  // Animated counter for stats
  useEffect(() => {
    const duration = 2000; // 2 seconds
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
      icon: '🔬',
      title: 'Simulations Interactives',
      description: 'Explorez les lois de la physique avec des simulations visuelles et interactives en temps réel. Manipulez les paramètres et observez les résultats instantanément.',
      href: '/simulations',
      gradient: 'blue',
      stats: [
        { value: '30+', label: 'Simulations' },
        { value: '5★', label: 'Note' }
      ]
    },
    {
      icon: '🐍',
      title: 'Python Lab',
      description: 'Programmez en Python directement dans votre navigateur avec Pyodide. Aucune installation requise, commencez à coder immédiatement avec l\'IA.',
      href: '/programming',
      gradient: 'purple',
      stats: [
        { value: '100%', label: 'Gratuit' },
        { value: 'IA', label: 'Assisté' }
      ]
    },
    {
      icon: '📚',
      title: 'QCM Sénégal',
      description: 'Préparez-vous efficacement avec des questionnaires à choix multiples basés sur le curriculum sénégalais. Suivez votre progression en temps réel.',
      href: '/challenges',
      gradient: 'pink',
      stats: [
        { value: '500+', label: 'Questions' },
        { value: '🇸🇳', label: 'Sénégal' }
      ]
    },
    {
      icon: '🧪',
      title: 'Travaux Pratiques',
      description: 'Accédez à des ressources pédagogiques, TP et guides pour approfondir vos connaissances STEM avec des projets concrets et innovants.',
      href: '/projects',
      gradient: 'green',
      stats: [
        { value: '40+', label: 'Projets' },
        { value: 'Pro', label: 'Niveau' }
      ]
    },
  ];

  const additionalFeatures = [
    {
      icon: '🎥',
      title: 'Capsules Vidéo',
      description: 'Apprenez avec des vidéos éducatives courtes et percutantes',
      href: '/videos',
      gradient: 'cyan'
    },
    {
      icon: '📖',
      title: 'Ressources',
      description: 'Bibliothèque complète de cours et documents',
      href: '/ressources',
      gradient: 'purple'
    },
    {
      icon: '💻',
      title: 'Code Editor',
      description: 'Éditeur de code en ligne avec support multi-langages',
      href: '/code',
      gradient: 'blue'
    },
    {
      icon: '📝',
      title: 'Examens',
      description: 'Préparez vos examens avec des sujets types',
      href: '/exams',
      gradient: 'pink'
    }
  ];

  return (
    <main className="relative min-h-screen">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <HeroSection
        title="Bienvenue sur SymLab"
        subtitle="La plateforme STEM la plus innovante du Sénégal. Explorez les mathématiques, la physique, l'ingénierie et la programmation à travers des simulations interactives, du code en direct et des ressources pédagogiques de pointe."
        cta="Commencer Maintenant"
        ctaHref="#modules"
      />

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-6 text-center hover-lift animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  {Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Modules Section */}
      <section id="modules" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Nos Modules</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos modules interactifs conçus pour révolutionner votre apprentissage des sciences et technologies
            </p>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {modules.map((module, index) => (
              <div
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ModuleCard {...module} />
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-20">
            <h3 className="text-3xl font-black text-center mb-10 gradient-text">
              Plus de Fonctionnalités
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <a
                  key={index}
                  href={feature.href}
                  className="group glass rounded-xl p-6 hover-lift animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:animate-float">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center">
            <h3 className="text-4xl font-black mb-6 gradient-text">
              Rejoignez la Révolution STEM
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Des milliers d'étudiants sénégalais utilisent déjà SymLab pour exceller dans leurs études scientifiques
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/apropos"
                className="glass rounded-xl px-8 py-4 font-bold hover-lift inline-flex items-center gap-2"
              >
                <span>En savoir plus</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/programming"
                className="relative overflow-hidden rounded-xl px-8 py-4 font-bold hover-lift inline-flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient" />
                <span className="relative z-10 text-white">Essayer Gratuitement</span>
                <svg className="relative z-10 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-4 gradient-text">
            Prêt à commencer votre voyage STEM ?
          </h3>
          <p className="text-gray-400 mb-8">
            Rejoignez SymLab aujourd'hui et transformez votre façon d'apprendre les sciences
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Gratuit à vie
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sans publicité
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Open Source
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
