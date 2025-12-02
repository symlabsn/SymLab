'use client';

export default function FeatureCard({ icon, title, description, href, color = 'blue' }) {
  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-400/60',
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/60',
    green: 'from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/60',
    pink: 'from-pink-500/20 to-pink-600/10 border-pink-500/30 hover:border-pink-400/60',
  };

  return (
    <a href={href} className="group block">
      <div className={`relative bg-gradient-to-br ${colorClasses[color]} border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-${color}-500/20 h-full`}>
        {/* Background Glow */}
        <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          <div className="mt-4 inline-block text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
            Découvrir →
          </div>
        </div>
      </div>
    </a>
  );
}
