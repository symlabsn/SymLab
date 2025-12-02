'use client';

export default function APropos() {
  const values = [
    {
      title: '🎯 Notre Mission',
      description: 'Rendre l\'éducation STEM accessible à tous les étudiants, indépendamment de leur localisation ou ressources.',
    },
    {
      title: '🚀 Notre Vision',
      description: 'Créer une communauté d\'apprenants passionnés qui repoussent les frontières de l\'innovation.',
    },
    {
      title: '💡 Notre Valeur',
      description: 'Offrir des outils interactifs et engageants qui rendent l\'apprentissage amusant et efficace.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            À Propos de SymLab
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            SymLab est une plateforme STEM interactive conçue pour transformer l'apprentissage des mathématiques, 
            de la physique et de la programmation au Sénégal et en Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-400 transition-all">
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Fondateur & Initiateur</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">👨‍💼</div>
            <h3 className="text-2xl font-bold text-white mb-2">El Hadji Momar FAYE</h3>
            <p className="text-purple-400 font-semibold mb-4">Physicien & Data Scientist</p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionné par l'innovation pédagogique et l'accessibilité de l'éducation STEM en Afrique.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-purple-400 font-semibold">Email :</span> fayemomar33@gmail.com</p>
              <p><span className="text-purple-400 font-semibold">Téléphone :</span> +221 70 743 43 49</p>
              <p><span className="text-purple-400 font-semibold">Localisation :</span> Dakar, Sénégal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Nous Contacter</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Vous avez des questions ou des suggestions ? Nous aimerions vous entendre !
          </p>
          <a href="mailto:fayemomar33@gmail.com" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all">
            Envoyez-nous un Email
          </a>
        </div>
      </section>
    </main>
  );
}
