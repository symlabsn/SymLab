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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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

      {/* IMMERSIVE MODULES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Explorer les Modules</h2>
            <p className="text-gray-400">Choisissez votre voie d'apprentissage</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. SIMULATIONS INTERACTIVES (Large - Blue/Cyan) */}
          <Link href="/simulations" className="group relative col-span-1 md:col-span-7 min-h-[320px] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            {/* Animated Glow */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] group-hover:bg-cyan-400/40 transition-colors duration-500" />

            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-bold uppercase tracking-wider">
                  Laboratoire Virtuel
                </span>
                <svg className="w-12 h-12 text-cyan-500 opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">Simulations Interactives</h3>
                <p className="text-gray-300 text-lg max-w-md mb-6 group-hover:text-white transition-colors">
                  Manipulez les atomes, les forces et les ondes dans un environnement 3D temps réel.
                </p>
                <div className="flex items-center gap-3 text-cyan-400 font-bold group-hover:translate-x-2 transition-transform">
                  <span>Lancer l'expérience</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </Link>

          {/* 2. PROGRAMMATION (Large - Purple/Violet) */}
          <Link href="/programming" className="group relative col-span-1 md:col-span-5 min-h-[320px] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-900 via-slate-900 to-black opacity-90" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-600/30 rounded-full blur-[100px] group-hover:bg-purple-500/40 transition-colors duration-500" />

            <div className="relative h-full p-8 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-bold uppercase tracking-wider">
                  Python Lab
                </span>
                <svg className="w-12 h-12 text-purple-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">Programmation</h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                  IDE Python complet intégré. Codez, compilez et visualisez sans installation.
                </p>
                <div className="flex items-center gap-3 text-purple-400 font-bold group-hover:translate-x-2 transition-transform">
                  <span>Coder maintenant</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </Link>

          {/* 3. CAPSULES VIDÉO (Medium - Red/Orange) */}
          <Link href="/videos" className="group relative col-span-1 md:col-span-4 min-h-[250px] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 to-slate-900" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />

            <div className="relative h-full p-6 flex flex-col justify-between z-10">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Capsules Vidéo</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-200">Apprenez en 5 minutes avec nos cours animés.</p>
              </div>
            </div>
          </Link>

          {/* 4. PROJETS ET TP (Medium - Green/Emerald) */}
          <Link href="/projects" className="group relative col-span-1 md:col-span-4 min-h-[250px] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-slate-900" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />

            <div className="relative h-full p-6 flex flex-col justify-between z-10">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Projets & TP</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-200">Appliquez vos connaissances sur des cas concrets.</p>
              </div>
            </div>
          </Link>

          {/* 5. QUIZ ET QCM (Medium - Pink/Rose) */}
          <Link href="/challenges" className="group relative col-span-1 md:col-span-4 min-h-[250px] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/80 to-slate-900" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent" />

            <div className="relative h-full p-6 flex flex-col justify-between z-10">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Quiz & QCM</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-200">Testez-vous et suivez votre progression en temps réel.</p>
              </div>
            </div>
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
