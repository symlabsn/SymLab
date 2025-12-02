'use client';

export default function FeatureCard({ title, description, href }) {
  return (
    <a href={href} className="block">
      <div className="relative glass-card group overflow-hidden">
        {/* left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-2 rounded-l-md" style={{ background: 'linear-gradient(180deg, var(--accent), var(--accent-2))' }} />

        {/* ambient glow */}
        <div className="glow-effect" style={{ background: 'linear-gradient(180deg, var(--glow-cyan), var(--glow-purple))' }} />

        <div className="relative z-10 pl-6 sm:pl-8 p-6">
          <h3 className="text-2xl font-extrabold text-white mb-2">{title}</h3>
          <p className="text-secondary text-base leading-relaxed mb-4">{description}</p>
          <div className="text-accent font-medium">En savoir plus →</div>
        </div>
      </div>
    </a>
  );
}
