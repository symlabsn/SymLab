'use client';

export default function Sims() {
  const simulations = [
    {
      name: 'Pendulum Simulator',
      description: 'Explorez la dynamique d\'un pendule simple avec différentes conditions initiales.',
      category: 'Physique',
      link: '#',
    },
    {
      name: 'Wave Propagation',
      description: 'Visualisez la propagation des ondes dans différents milieux.',
      category: 'Physique',
      link: '#',
    },
    {
      name: 'Projectile Motion',
      description: 'Étudiez le mouvement d\'un projectile sous l\'action de la gravité.',
      category: 'Cinématique',
      link: '#',
    },
    {
      name: 'Planetary Orbits',
      description: 'Simulez le mouvement des planètes autour du soleil.',
      category: 'Astronomie',
      link: '#',
    },
    {
      name: 'Circuit Simulator',
      description: 'Construisez et testez des circuits électriques virtuellement.',
      category: 'Électronique',
      link: '#',
    },
    {
      name: 'Thermal Diffusion',
      description: 'Observez la diffusion de la chaleur en temps réel.',
      category: 'Thermodynamique',
      link: '#',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            🔬 Simulations Interactives
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explorez les concepts de physique, mathématiques et ingénierie à travers des simulations interactives en temps réel.
          </p>
        </div>

        {/* Simulations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simulations.map((sim, idx) => (
            <a
              key={idx}
              href={sim.link}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-400 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold mb-3">
                  {sim.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition">
                  {sim.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {sim.description}
                </p>
                <div className="inline-flex items-center text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Lancer <span className="ml-2">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-2">Plus de simulations à venir</h3>
          <p className="text-gray-400">
            De nouvelles simulations interactives seront bientôt disponibles. Restez connectés !
          </p>
        </div>
      </div>
    </main>
  );
}
