'use client';

import Link from 'next/link';

export default function ModuleBlock({ href, title, description, accentColor, className = '' }) {
  return (
    <div
      className={`sci-card group relative block w-full max-w-xl mx-auto p-4 sm:p-6 md:p-8 transition-all duration-300 active:scale-[0.98] ${className}`}
      style={{
        '--accent-color': accentColor,
        '--glow-color': `${accentColor}40`
      }}
    >
      {/* Holographic Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Tech Header Line */}
        <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 mb-4 sm:mb-6" style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />

        <h3
          className="text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-4 text-white uppercase tracking-wider sm:tracking-widest"
          style={{ textShadow: `0 0 15px ${accentColor}` }}
        >
          {title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-sm mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none">
          {description}
        </p>

        {/* Action Footer */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider transition-all duration-300 group-hover:gap-4" style={{ color: accentColor }}>
          <span className="hidden sm:inline">Explorer le module</span>
          <span className="sm:hidden">Explorer</span>
          <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <Link href={href} className="absolute inset-0 z-20" aria-label={`Ouvrir ${title}`}>
        <span />
      </Link>
    </div>
  );
}
