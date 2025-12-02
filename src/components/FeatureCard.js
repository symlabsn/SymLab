'use client';

export default function FeatureCard({ icon, title, description, href, color = 'blue' }) {
  return (
    <a href={href} className="block">
      <div className="relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-lg p-6 transition-all duration-200 hover:shadow-md hover-lift h-full">
        <div className="relative z-10">
          <div className="text-3xl mb-3">{icon}</div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-muted text-sm leading-relaxed">{description}</p>
          <div className="mt-4 inline-block text-accent font-medium transition-transform opacity-90">
            Découvrir →
          </div>
        </div>
      </div>
    </a>
  );
}
