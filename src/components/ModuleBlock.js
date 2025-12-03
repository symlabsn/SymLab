'use client';

import Link from 'next/link';

export default function ModuleBlock({ href, title, description, accentColor, className = '' }) {
  return (
    <div
      className={`sci-card group relative block w-full max-w-xl mx-auto p-8 transition-all duration-300 ${className}`}
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
        <div className="w-12 h-1 mb-6" style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />

        <h3
          className="text-3xl font-black mb-4 text-white uppercase tracking-widest"
          style={{ textShadow: `0 0 15px ${accentColor}` }}
        >
          {title}
        </h3>

        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <Link href={href} className="absolute inset-0 z-20" aria-label={`Ouvrir ${title}`}>
        <span />
      </Link>
    </div>
  );
}
