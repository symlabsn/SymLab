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
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-blue-500/30">

      {/* 1. HEADER / MESSAGE (Haut Centre) */}
      <section className="pt-24 pb-10 px-4 text-center relative z-10">
        <div className="animate-in fade-in zoom-in duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-bold text-blue-200 tracking-widest uppercase">SymLab Sénégal</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400">
            L'Expérimentation STEM
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Mathématiques, Ingénierie et Physique. La plateforme d'excellence pour les futurs ingénieurs du Sénégal.
          </p>
        </div>
      </section>

      {/* 2. MODULES GRID (Juste en dessous, Haut de page) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* MATHÉMATIQUES */}
          <Link href="/maths" className="group relative h-64 rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <span className="text-6xl">📐</span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Modélisation</div>
              <h3 className="text-2xl font-bold text-white mb-1">Maths</h3>
              <p className="text-sm text-gray-400 line-clamp-2">Algèbre, Géométrie et Analyse dynamique.</p>
            </div>
          </Link>

          {/* PHYSIQUE */}
          <Link href="/physique" className="group relative h-64 rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/5 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <span className="text-6xl">⚡</span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Expérimentation</div>
              <h3 className="text-2xl font-bold text-white mb-1">Physique</h3>
              <p className="text-sm text-gray-400 line-clamp-2">Mécanique, Électricité et Ondes.</p>
            </div>
          </Link>

          {/* INGÉNIERIE */}
          <Link href="/projects" className="group relative h-64 rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/5 overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <span className="text-6xl">⚙️</span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">Technologie</div>
              <h3 className="text-2xl font-bold text-white mb-1">Ingénierie</h3>
              <p className="text-sm text-gray-400 line-clamp-2">Robotique, Systèmes et Conception.</p>
            </div>
          </Link>

          {/* LABORATOIRE */}
          <Link href="/simulations" className="group relative h-64 rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/5 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <span className="text-6xl">🧪</span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Recherche</div>
              <h3 className="text-2xl font-bold text-white mb-1">Labo STEM</h3>
              <p className="text-sm text-gray-400 line-clamp-2">Projets transversaux et simulations.</p>
            </div>
          </Link>

        </div>
      </section>

      {/* 3. STATS (Bas de page, discret) */}
      <section className="max-w-5xl mx-auto px-4 mb-20 border-t border-white/5 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-white mb-1">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
