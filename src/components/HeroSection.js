'use client';
import ParticleBackground from '@/components/ParticleBackground';

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* particle background */}
      <ParticleBackground />

      <div className="bento-card py-16 px-6 border-highlight bg-gradient-to-b from-[rgba(15,12,41,0.8)] to-[rgba(15,12,41,0.4)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left: content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 animate-in">
              <span className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
              <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Plateforme STEM 2.0</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-in delay-100">
              <span style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))', WebkitBackgroundClip: 'text', color: 'transparent' }}>SymLab</span>
              <span className="block text-accent-2 text-sm mt-2 font-semibold">Laboratoire STEM — Futur & Créatif</span>
            </h1>

            <p className="text-lg text-secondary max-w-xl mb-8 leading-relaxed animate-in delay-200">
              Explorez, créez et simulez avec des outils immersifs — codez en direct, visualisez des phénomènes et construisez des projets réels.
            </p>

            <div className="flex flex-wrap gap-4 animate-in delay-300">
              <a href="/programming" className="px-6 py-3 rounded-lg bg-[rgba(255,255,255,0.95)] text-black font-semibold hover:scale-105 transition-transform">
                Commencer Gratuitement
              </a>
              <a href="/about" className="px-6 py-3 rounded-lg bg-transparent border border-[rgba(255,255,255,0.06)] text-white font-medium hover:bg-[rgba(255,255,255,0.03)] transition-colors">
                En savoir plus
              </a>
            </div>
          </div>

          {/* Right: decorative SVG illustration (purely decorative) */}
          <div className="hero-illustration hidden md:flex justify-center items-center">
            <svg className="rotate-slow" width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--accent-2)" />
                </linearGradient>
              </defs>
              <rect x="10" y="20" width="300" height="180" rx="18" fill="url(#g1)" opacity="0.06" />
              <g opacity="0.85" stroke="url(#g1)" strokeWidth="1.6" strokeLinecap="round">
                <path d="M40 60h240" />
                <path d="M40 100h240" />
                <path d="M40 140h240" />
              </g>
              <circle cx="80" cy="60" r="6" fill="var(--accent)" />
              <circle cx="240" cy="140" r="6" fill="var(--accent-2)" />
              <path d="M120 40c20 0 40 20 60 20s40-20 60-20" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
