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

  return (
    <main className="min-h-screen pb-20">

      {/* Hero Section Immersive */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="relative z-10 animate-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Innovation Éducative Sénégal</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
            Plateforme E-learning pour <br />
            <span className="gradient-text">l'Expérimentation STEM</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Mathématiques, Ingénierie et Physique pour la promotion des sciences au Sénégal.
            Un environnement virtuel pour manipuler, construire et comprendre.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/simulations" className="btn-glow">
              Accéder au Laboratoire
            </Link>
            <Link href="/apropos" className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium backdrop-blur-sm">
              Notre Mission
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

      {/* PILIERS STEM (Blocks) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Pôles d'Expérimentation</h2>
            <p className="text-gray-400">Explorez les sciences par la pratique</p>
          </div>
          <div className="hidden md:block h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. MATHÉMATIQUES */}
          <Link href="/maths" className="immersive-card p-8 group border-t-4 border-blue-500/50">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-maths" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                  📐
                </div>
                <span className="badge-level">Modélisation</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Mathématiques</h3>
              <p className="text-gray-400 mb-6">Visualisez les concepts abstraits. Géométrie dynamique, analyse de fonctions et statistiques appliquées.</p>
              <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors">
                <span>Expérimenter</span>
                <div className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </Link>

          {/* 2. PHYSIQUE */}
          <Link href="/physique" className="immersive-card p-8 group border-t-4 border-purple-500/50">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-pc" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                  ⚡
                </div>
                <span className="badge-level">Lois de la Nature</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Physique</h3>
              <p className="text-gray-400 mb-6">Simulez les forces de l'univers. Mécanique, optique, électricité et thermodynamique en temps réel.</p>
              <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-purple-400 group-hover:text-white transition-colors">
                <span>Simuler</span>
                <div className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </Link>

          {/* 3. INGÉNIERIE */}
          <Link href="/projects" className="immersive-card p-8 group border-t-4 border-orange-500/50">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-tech" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                  ⚙️
                </div>
                <span className="badge-level">Conception</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Ingénierie</h3>
              <p className="text-gray-400 mb-6">Construisez le futur. Robotique, systèmes embarqués, électronique et design technique.</p>
              <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-orange-400 group-hover:text-white transition-colors">
                <span>Construire</span>
                <div className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </Link>

          {/* 4. LABORATOIRE VIRTUEL */}
          <Link href="/simulations" className="immersive-card p-8 group border-t-4 border-emerald-500/50">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-svt" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                  🧪
                </div>
                <span className="badge-level">Recherche</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Laboratoire STEM</h3>
              <p className="text-gray-400 mb-6">Un espace ouvert pour combiner Maths, Physique et Code dans des projets complexes.</p>
              <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-emerald-400 group-hover:text-white transition-colors">
                <span>Innover</span>
                <div className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="immersive-card p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">L'Avenir des Sciences au Sénégal</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              SymLab accompagne les élèves et étudiants dans leur parcours d'excellence.
            </p>
            <Link href="/challenges" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all backdrop-blur-md">
              Rejoindre la communauté
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
