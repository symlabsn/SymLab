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

  return (
    <main className="min-h-screen pb-20">

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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bento-card p-6 flex flex-col items-center justify-center bg-white/5 border-subtle">
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

      {/* Bento Grid Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-1 h-8 bg-accent-secondary rounded-full"></span>
          Modules Principaux
        </h2>

        <div className="bento-grid">

          {/* Simulations - Large Card */}
          <Link href="/simulations" className="col-span-12 md:col-span-8 row-span-2 bento-card group relative overflow-hidden min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="badge mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Populaire</div>
                <h3 className="text-3xl font-bold text-white mb-2">Simulations Interactives</h3>
                <p className="text-gray-400 max-w-md">Explorez la physique et la chimie avec des laboratoires virtuels en temps réel. Manipulez, observez, comprenez.</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-blue-400 font-medium group-hover:translate-x-2 transition-transform">
                Explorer le labo <span className="text-xl">→</span>
              </div>
            </div>
            {/* Abstract Shape Decoration */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />
          </Link>

          {/* Python Lab - Tall Card */}
          <Link href="/programming" className="col-span-12 md:col-span-4 row-span-2 bento-card group bg-gradient-to-b from-white/5 to-transparent">
            <div className="relative z-10 h-full flex flex-col">
              <div className="badge mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Python</div>
              <h3 className="text-2xl font-bold text-white mb-2">Python Lab</h3>
              <p className="text-gray-400 text-sm mb-6">Codez directement dans votre navigateur. IDE complet avec support IA.</p>

              {/* Code Snippet Decoration */}
              <div className="mt-auto bg-black/40 rounded-lg p-4 font-mono text-xs text-green-400 border border-white/5 overflow-hidden">
                <div className="opacity-50"># Votre premier programme</div>
                <div>def main():</div>
                <div className="pl-4">print("Hello SymLab!")</div>
              </div>
            </div>
          </Link>

          {/* QCM - Standard Card */}
          <Link href="/challenges" className="col-span-12 md:col-span-4 bento-card group hover:border-pink-500/30">
            <div className="badge mb-3 bg-pink-500/20 text-pink-300 border-pink-500/30">Entraînement</div>
            <h3 className="text-xl font-bold text-white mb-2">QCM & Quiz</h3>
            <p className="text-gray-400 text-sm">Testez vos connaissances avec des milliers de questions.</p>
          </Link>

          {/* Videos - Standard Card */}
          <Link href="/videos" className="col-span-12 md:col-span-4 bento-card group hover:border-cyan-500/30">
            <div className="badge mb-3 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Multimédia</div>
            <h3 className="text-xl font-bold text-white mb-2">Capsules Vidéo</h3>
            <p className="text-gray-400 text-sm">Des explications claires et concises en vidéo.</p>
          </Link>

          {/* Projects - Standard Card */}
          <Link href="/projects" className="col-span-12 md:col-span-4 bento-card group hover:border-green-500/30">
            <div className="badge mb-3 bg-green-500/20 text-green-300 border-green-500/30">Pratique</div>
            <h3 className="text-xl font-bold text-white mb-2">Projets & TP</h3>
            <p className="text-gray-400 text-sm">Apprenez par la pratique avec des projets guidés.</p>
          </Link>

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
