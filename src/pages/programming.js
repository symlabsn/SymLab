'use client';

import { useState, useEffect } from 'react';

export default function Programming() {
  const examples = [
    { title: 'Introduction Python', subtitle: 'Variables, boucles, fonctions', href: '/code' },
    { title: 'Data Science', subtitle: 'Numpy, Pandas basics', href: '#' },
    { title: 'Algorithmique', subtitle: 'Structures de données et algorithmes', href: '#' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Programmation</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Cours interactifs, exercices et environnements pour apprendre le codage et la pensée computationnelle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((ex, idx) => (
            <a key={idx} href={ex.href} className="group block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-400 transition">
              <h3 className="text-xl font-bold text-white mb-2">{ex.title}</h3>
              <p className="text-gray-400">{ex.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
