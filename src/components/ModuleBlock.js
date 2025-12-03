'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function ModuleBlock({ href, title, description, accentGradient = 'linear-gradient(90deg, var(--accent), var(--accent-2))', accentColor = '#7C3AED', className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * 4; // Reduced rotation for stability
      const ry = (x - 0.5) * -4;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    };

    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', handleLeave);
    el.addEventListener('blur', handleLeave);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
      el.removeEventListener('blur', handleLeave);
    };
  }, []);

  // keyboard activation
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const a = ref.current.querySelector('a');
      if (a) a.click();
    }
  };

  function hexToRgba(hex, alpha = 1) {
    const h = hex.replace('#', '');
    const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={`group relative block w-full max-w-2xl mx-auto p-10 rounded-2xl border-2 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 ${className}`}
      role="link"
      aria-label={`${title} - ${description}`}
      style={{
        borderColor: hexToRgba(accentColor, 0.5), // Visible Border
        boxShadow: `0 0 30px ${hexToRgba(accentColor, 0.15)}, inset 0 0 20px ${hexToRgba(accentColor, 0.05)}`, // Deep Glow
        ['--accent-color']: accentColor,
        ['--accent-gradient']: accentGradient
      }}
    >
      {/* Top Gradient Line */}
      <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: accentGradient, borderRadius: 99, opacity: 0.8 }} />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h3
          className="text-4xl font-black mb-4 tracking-tight text-white group-hover:scale-105 transition-transform duration-300"
          style={{ textShadow: `0 0 20px ${hexToRgba(accentColor, 0.4)}` }}
        >
          {title}
        </h3>
        <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      <Link href={href} className="absolute inset-0" aria-hidden>
        <span />
      </Link>
    </div>
  );
}
