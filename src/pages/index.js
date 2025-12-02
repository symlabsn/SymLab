'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [stats, setStats] = useState([
    { value: 0, target: 5000, label: 'Élèves connectés', suffix: '+' },
    { value: 0, target: 150, label: 'Simulations 3D', suffix: '+' },
    { value: 0, target: 450, label: 'Cours Vidéo', suffix: '+' },
    { value: 0, target: 100, label: 'Taux de Réussite', suffix: '%' }
  ]);

  useEffect(() => {
    const duration = 2500;
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

  const subjects = [
    {
      id: 'maths',
      title: 'Mathématiques',
      level: 'Collège & Lycée',
      topics: ['Algèbre', 'Géométrie', 'Analyse'],
      href: '/maths',
      gradient: 'bg-gradient-maths',
      border: 'border-blue-500/30',
      icon: '📐'
    },
    {
      id: 'pc',
      title: 'Physique-Chimie',
      level: 'Séries S1, S2, L2',
      topics: ['Mécanique', 'Électricité', 'Chimie Organique'],
      href: '/physique',
      gradient: 'bg-gradient-pc',
      border: 'border-purple-500/30',
      icon: '⚡'
    },
    {
      id: 'svt',
      title: 'SVT',
      level: 'Sciences de la Vie',
      topics: ['Biologie Cellulaire', 'Géologie', 'Immunologie'],
      href: '/svt',
      gradient: 'bg-gradient-svt',
      border: 'border-emerald-500/30',
      icon: '🧬'
    },
    {
      id: 'info',
      title: 'Informatique',
      level: 'Programmation',
      topics: ['Python', 'Algorithmique', 'Web'],
      href: '/programming',
      gradient: 'bg-gradient-tech',
      border: 'border-orange-500/30',
      icon: '💻'
    }
  ];

  return (
    <main className="min-h-screen pb-20">

      {/* Hero Section Immersive */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="relative z-10 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Programme Sénégalais Officiel</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
            L'Excellence STEM <br />
            <span className="gradient-text">au Sénégal</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            La première plateforme d'apprentissage immersive dédiée aux élèves du Sénégal.
            Simulations 3D, Laboratoires Virtuels et Cours conformes au programme.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/programming" className="btn-glow">
              Commencer l'Expérience
            </Link>
            <Link href="/apropos" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium backdrop-blur-sm">
              Découvrir le Programme
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar (Glass) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="immersive-card p-6 text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMME SÉNÉGAL (Blocks) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Vos Matières</h2>
            <p className="text-gray-400">Sélectionnez votre domaine d'excellence</p>
          </div>
          <div className="hidden md:block h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={subject.href}
              className={`immersive-card p-8 group border-t-4 ${subject.border}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${subject.gradient}`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                    {subject.icon}
                  </div>
                  <span className="badge-level">
                    {subject.level}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {subject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-4 mb-8">
                  {subject.topics.map((topic, i) => (
                    <span key={i} className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-lg border border-white/5">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                  <span>Accéder aux cours</span>
                  <div className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="immersive-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Prêt pour le Bac ?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Rejoignez des milliers d'élèves sénégalais qui révisent avec SymLab.
              Annales corrigées, exercices interactifs et suivi personnalisé.
            </p>
            <Link href="/challenges" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all backdrop-blur-md">
              S'entraîner maintenant
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
