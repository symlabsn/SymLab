'use client';

import Link from 'next/link';

export default function Challenges() {
  const items = [
    { title: 'Challenge Algorithmique', desc: 'Résoudre des problèmes d\'algorithmique par niveau', href: '#' },
    { title: 'Challenge Physique', desc: 'Problèmes appliqués et mini-projets', href: '#' },
    { title: 'Hackathon Mensuel', desc: 'Concours autour d\'un thème STEM', href: '#' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">Challenges</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Participez à des défis pour mettre en pratique vos compétences et gagner des distinctions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <a key={idx} href={it.href} className="group block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-orange-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">{it.title}</h3>
              <p className="text-gray-400">{it.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
