 'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function ModuleBlock({ href, title, description, accentGradient = 'linear-gradient(90deg, var(--accent), var(--accent-2))' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * 6; // rotateX
      const ry = (x - 0.5) * -10; // rotateY
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    };

    const handleLeave = () => {
      el.style.transform = '';
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
      // simulate click on the inner link
      const a = ref.current.querySelector('a');
      if (a) a.click();
    }
  };

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="group relative block w-full p-8 rounded-xl border-2 bg-slate-900/80 backdrop-blur-md transition-all duration-300 focus-ring"
      role="link"
      aria-label={`${title} - ${description}`}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: accentGradient, borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }} />
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-white transition-colors">{title}</h3>
        <p className="text-slate-400 text-lg group-hover:text-slate-200 transition-colors">{description}</p>
      </div>

      <Link href={href} className="absolute inset-0" aria-hidden>
        <span />
      </Link>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 module-cta">
        <span className="px-4 py-2 rounded-full font-semibold text-black" style={{ background: accentGradient }}>Explorer</span>
      </div>
    </div>
  );
}
