'use client';

import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <HeroSection
        title="Projets Concrets"
        subtitle="Mettez en pratique vos connaissances avec des projets guidés et des templates réutilisables."
        cta="Voir les projets"
        ctaHref="/projects"
      />

      <section className="max-w-6xl mx-auto py-12 px-4 text-gray-300">
        <h2 className="text-3xl font-bold mb-4 text-white">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded p-4">Projet: Simulation d'un robot suiveur</div>
          <div className="bg-slate-800 rounded p-4">Projet: Visualisation 3D d'ondes</div>
        </div>
      </section>
    </main>
  );
}
'use client';

export default function Projects() {
  const projects = [
    { title: 'Station météo Arduino', desc: 'Construire un capteur météo et analyser les données', href: '#' },
    { title: 'Imprimante 3D low-cost', desc: 'Mini-projet mécanique + électronique', href: '#' },
    { title: 'Analyse de données COVID', desc: 'Projet data pour apprendre Pandas & visualisation', href: '#' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Projets Concrets</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Projets pratiques pour appliquer vos connaissances dans des réalisations tangibles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a key={idx} href={p.href} className="group block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-green-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
