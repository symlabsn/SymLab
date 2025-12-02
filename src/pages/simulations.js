'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function Simulations() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <HeroSection
        title="Simulations"
        subtitle="Catalogue de simulations interactives et notebooks pour explorer la physique et les mathématiques."
        cta="Ouvrir les simulations"
        ctaHref="/simulations"
      />

      <section className="max-w-6xl mx-auto py-12 px-4 text-gray-300">
        <h2 className="text-3xl font-bold mb-4 text-white">Simulations disponibles</h2>
        <p className="mb-6">Explorez des modules de mécanique, électricité, ondes et bien plus.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-800 rounded-lg">
            <h3 className="font-semibold">Mécanique - Pendule</h3>
            <p className="text-sm text-gray-400">Contrôlez l'amplitude et la friction.</p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg">
            <h3 className="font-semibold">Ondes - Interférence</h3>
            <p className="text-sm text-gray-400">Visualisez l'interférence de deux sources.</p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg">
            <h3 className="font-semibold">Électricité - Circuit RC</h3>
            <p className="text-sm text-gray-400">Simulez la charge et la décharge d'un condensateur.</p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/notebook" className="inline-block px-6 py-3 bg-indigo-600 rounded text-white font-semibold">Ouvrir Notebook (Pyodide)</Link>
        </div>
      </section>
    </main>
  );
}
'use client';

export default function Simulations() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Simulations Numériques & Notebook</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Accédez à des simulations interactives et à un environnement de notebook (Pyodide/JupyterLite) pour le calcul numérique et symbolique.</p>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Notebook en ligne</h2>
            <p className="text-gray-400 mb-4">Lancer un notebook léger pour exécuter des cellules Python (Pyodide) et utiliser des modules de calcul symbolique (SymPy).</p>
            <a href="/notebook" className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Ouvrir le Notebook</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a className="block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-400 transition" href="#">
              <h3 className="text-lg font-bold text-white mb-2">Pendulum Simulator</h3>
              <p className="text-gray-400">Simulez un pendule simple et changez les paramètres.</p>
            </a>
            <a className="block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-400 transition" href="#">
              <h3 className="text-lg font-bold text-white mb-2">Wave Propagation</h3>
              <p className="text-gray-400">Visualisez la propagation d'ondes.</p>
            </a>
            <a className="block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-400 transition" href="#">
              <h3 className="text-lg font-bold text-white mb-2">Circuit Simulator</h3>
              <p className="text-gray-400">Construisez des circuits et observez les réponses.</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
