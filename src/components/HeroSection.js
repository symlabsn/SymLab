'use client';

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bento-card text-center py-20 px-8 border-highlight bg-gradient-to-b from-[rgba(15,12,41,0.8)] to-[rgba(15,12,41,0.4)]">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in">
          <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Plateforme STEM 2.0</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-in delay-100">
          <span className="text-white">Apprenez les Sciences</span>
          <br />
          <span className="text-gradient-primary">Autrement.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in delay-200">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-in delay-300">
          <a href="/programming" className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-105 transition-transform">
            Commencer Gratuitement
          </a>
          <a href="/apropos" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
            En savoir plus
          </a>
        </div>

      </div>
    </section>
  );
}
