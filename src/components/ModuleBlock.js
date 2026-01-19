'use client';

import Link from 'next/link';

export default function ModuleBlock({ href, title, description, accentColor, icon, tag, className = '' }) {
  return (
    <div
      className={`sci-card group relative block w-full max-w-lg mx-auto p-5 sm:p-8 transition-all duration-700 hover:shadow-[0_0_60px_var(--glow-color)] border border-white/5 hover:border-white/20 overflow-hidden ${className}`}
      style={{
        '--accent-color': accentColor,
        '--glow-color': `${accentColor}15`
      }}
    >
      {/* Background Layer Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="shimmer-sweep opacity-30" />
      <div
        className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000"
        style={{
          backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Dynamic Tag */}
        {tag && (
          <div className="absolute top-0 right-0 overflow-hidden rounded-bl-2xl">
            <div className="px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md border-l border-b border-white/10 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
              {tag}
            </div>
          </div>
        )}

        {/* High-Quality Icon Container */}
        <div
          className="mb-6 p-4 rounded-xl bg-black/40 backdrop-blur-2xl border border-white/10 transition-all duration-700 group-hover:scale-105 group-hover:bg-white/[0.02] shadow-[0_0_20px_rgba(0,0,0,0.3)] relative"
          style={{ color: accentColor }}
        >
          {/* Pulsing Aura - Softer */}
          <div className="absolute inset-0 bg-current opacity-5 group-hover:opacity-15 blur-xl animate-pulse transition-opacity" />
          <div className="relative filter drop-shadow-[0_0_4px_currentColor]">
            {icon}
          </div>
        </div>

        <h3
          className="text-2xl sm:text-3xl font-black mb-3 text-white uppercase tracking-tighter transition-all duration-700 group-hover:tracking-normal group-hover:scale-105"
          style={{ textShadow: `0 10px 40px ${accentColor}20` }}
        >
          {title}
        </h3>

        <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed max-w-sm mb-8 opacity-70 group-hover:opacity-100 transition-all duration-500">
          {description}
        </p>

        {/* Interactive Button */}
        <div
          className="relative px-8 py-3 rounded-xl overflow-hidden border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-3 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:gap-5 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10">Entrer dans le labo</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <Link href={href} className="absolute inset-0 z-20" aria-label={`Ouvrir ${title}`}>
        <span />
      </Link>
    </div>
  );
}
