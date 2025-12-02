'use client';

import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    icon: '🔬',
    title: 'Simulations Interactives',
    description: 'Explorez les lois de la physique avec des simulations visuelles et interactives. Manipulez les paramètres en temps réel.',
    href: '/sims',
    color: 'blue',
  },
  {
    icon: '🐍',
    title: 'Python Lab',
    description: 'Programmez en Python directement dans votre navigateur avec Pyodide. Pas d\'installation requise.',
    href: '/code',
    color: 'purple',
  },
  {
    icon: '📚',
    title: 'QCM Sénégal',
    description: 'Préparez-vous avec des questionnaires à choix multiples basés sur le curriculum sénégalais.',
    href: '/exams',
    color: 'pink',
  },
  {
    icon: '🧪',
    title: 'Travaux Pratiques',
    description: 'Accédez à des ressources pédagogiques, TP et guides pour approfondir vos connaissances STEM.',
    href: '/ressources',
    color: 'green',
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950">
      {/* Hero Section */}
      <HeroSection
        title="Bienvenue sur SymLab"
        subtitle="Découvrez la plateforme STEM la plus interactive du Sénégal. Explorez les mathématiques, la physique, l'ingénierie et la programmation à travers des simulations, du code en direct et des ressources pédagogiques."
        cta="Commencer l'exploration"
        ctaHref="#features"
      />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Nos Fonctionnalités
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            Utilisez les outils les plus puissants pour maîtriser les STEM et progresser à votre rythme.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">
            Prêt à transformer votre apprentissage ?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez des milliers d'étudiants qui explorent les STEM avec SymLab.
          </p>
          <Link
            href="/apropos"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            En Savoir Plus
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Utilisateurs', value: '5K+' },
            { label: 'Simulations', value: '50+' },
            { label: 'Ressources', value: '200+' },
            { label: 'Pays', value: '15+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
