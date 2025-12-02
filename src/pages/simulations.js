 'use client';

import PendulumSim from '@/components/PendulumSim';

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
                <PendulumSim />
                <div className="p-4 bg-slate-800 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Wave Propagation (bientôt)</h3>
                  <p className="text-gray-400">Prototype de visualisation d'ondes — en cours d'implémentation.</p>
                </div>
          </div>
        </div>
      </div>
    </main>
  );
}
