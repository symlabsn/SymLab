'use client';

export default function HeroSection({ title, subtitle, cta, ctaHref }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto animate-fadeIn animation-delay-200">
          {subtitle}
        </p>
        {cta && (
          <a
            href={ctaHref}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 animate-fadeIn animation-delay-400"
          >
            {cta}
          </a>
        )}
      </div>

      {/* Removed scroll indicator (user requested) */}
      
      {/* Subtle animated sparkles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-12 left-10 w-6 h-6 bg-white/10 rounded-full blur-lg animate-pulse" />
        <div className="absolute top-28 right-16 w-4 h-4 bg-white/10 rounded-full blur-sm animate-pulse animation-delay-200" />
      </div>
    </section>
  );
}
