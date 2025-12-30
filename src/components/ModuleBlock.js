'use client';

import Link from 'next/link';

export default function ModuleBlock({ href, title, description, accentColor, icon, tag, className = '' }) {
  return (
    <div
      className={`sci-card group relative block w-full max-w-xl mx-auto p-6 sm:p-10 transition-all duration-500 hover:shadow-[0_0_50px_var(--glow-color)] ${className}`}
      style={{
        '--accent-color': accentColor,
        '--glow-color': `${accentColor}20`
      }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(${accentColor} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Tag - if exists */}
        {tag && (
          <span className="absolute top-0 right-0 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-bl-xl border-l border-b border-white/10 bg-white/5 text-white/50 group-hover:text-white group-hover:border-white/20 transition-all">
            {tag}
          </span>
        )}

        {/* Dynamic Icon Container */}
        <div
          className="mb-8 p-5 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/10 group-hover:rotate-[10deg] shadow-2xl relative"
          style={{ color: accentColor }}
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
          <div className="relative">
            {icon}
          </div>
        </div>

        <h3
          className="text-2xl sm:text-4xl font-black mb-4 text-white uppercase tracking-tighter"
          style={{ textShadow: `0 0 30px ${accentColor}40` }}
        >
          {title}
        </h3>

        <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed max-w-sm mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>

        {/* Action Button Style Footer */}
        <div
          className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:gap-5"
          style={{ '--hover-color': accentColor }}
        >
          <span>Explorer</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
