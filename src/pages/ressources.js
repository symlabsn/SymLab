'use client';

export default function Ressources() {
  const resources = [
    {
      category: 'Mathématiques',
      icon: '📐',
      items: [
        { name: 'Algèbre Linéaire', type: 'Cours', duration: '4h' },
        { name: 'Calcul Différentiel', type: 'Tutoriel', duration: '3h' },
        { name: 'Probabilités', type: 'Exercices', duration: 'illimité' },
      ],
    },
    {
      category: 'Physique',
      icon: '⚛️',
      items: [
        { name: 'Mécanique Classique', type: 'Cours', duration: '5h' },
        { name: 'Électromagnétisme', type: 'Tutoriel', duration: '4h' },
        { name: 'Thermodynamique', type: 'Exercices', duration: 'illimité' },
      ],
    },
    {
      category: 'Programmation',
      icon: '💻',
      items: [
        { name: 'Python Avancé', type: 'Cours', duration: '6h' },
        { name: 'Structures de Données', type: 'Tutoriel', duration: '4h' },
        { name: 'Algorithmes', type: 'Exercices', duration: 'illimité' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
            🧪 Ressources Pédagogiques
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Accédez à des cours, tutoriels et exercices pour approfondir vos connaissances STEM.
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h2 className="text-3xl font-bold text-white">{category.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-slate-800 border border-slate-700 hover:border-green-400 rounded-lg p-4 transition-all hover:shadow-lg hover:shadow-green-500/20 cursor-pointer group">
                    <h3 className="font-bold text-white mb-2 group-hover:text-green-300 transition">{item.name}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-semibold">{item.type}</span>
                      <span className="text-gray-400">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
