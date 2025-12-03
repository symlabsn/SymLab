'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function ModuleBlock({ href, title, description, accentGradient, accentColor, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * 5;
      const ry = (x - 0.5) * -5;
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

  return (
    <div
      ref={ref}
      className={`group relative block w-full max-w-xl mx-auto p-10 rounded-3xl bg-black transition-all duration-300 ${className}`}
      style={{
        border: `3px solid ${accentColor}`, // THICK VISIBLE BORDER
        boxShadow: `0 0 40px ${accentColor}40`, // STRONG GLOW
      }}
    >
      {/* Top Accent Line */}
      <div style={{ position: 'absolute', top: 0, left: '30%', right: '30%', height: 4, background: accentColor, borderRadius: 99 }} />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h3
          className="text-4xl font-black mb-4 text-white uppercase tracking-wider"
          style={{ textShadow: `0 0 15px ${accentColor}` }}
        >
          {title}
        </h3>
        <p className="text-gray-300 text-lg font-medium leading-relaxed">
          {description}
        </p>
      </div>

      <Link href={href} className="absolute inset-0 z-20" aria-label={`Ouvrir ${title}`}>
        <span />
      </Link>
    </div>
  );
}
