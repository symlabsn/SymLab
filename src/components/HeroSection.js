'use client';

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-transparent">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed max-w-2xl mx-auto animate-fadeIn animation-delay-150">
          {subtitle}
        </p>
        <div className="mx-auto mt-6 w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
      </div>
    </section>
  );
}
