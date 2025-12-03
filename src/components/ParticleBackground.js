'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground({ colorA = '#00F5D4', colorB = '#7C3AED', density = 0.00006 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = prefersReduced ? 28 : Math.max(40, Math.floor(width * height * density));

    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReduced ? 0.2 : 0.7),
        vy: (Math.random() - 0.5) * (prefersReduced ? 0.2 : 0.7),
        r: 1 + Math.random() * 2,
      });
    }

    function onResize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    let raf = null;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // subtle gradient
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, colorA + '22');
      g.addColorStop(1, colorB + '22');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // draw particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const t = (Math.sin((p.x + p.y + performance.now() * 0.001) * 0.002) + 1) / 2;
        const a = lerp(0.6, 0.95, t);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${a * 0.06})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // connections (sparse)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const alpha = 1 - dist / 110;
            ctx.strokeStyle = `rgba(124,58,237,${alpha * 0.06})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, [colorA, colorB, density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden
    />
  );
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}
