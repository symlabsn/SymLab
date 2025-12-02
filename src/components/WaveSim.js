'use client';

import { useRef, useEffect, useState } from 'react';

export default function WaveSim() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const [speed, setSpeed] = useState(1.0);
  const [wavelength, setWavelength] = useState(80);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let t = 0;

    function draw() {
      t += 0.02 * speed;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const theta = (x / wavelength) * Math.PI * 2;
        const y = h / 2 + Math.sin(theta - t) * 40;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 2;
      ctx.stroke();

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, wavelength]);

  return (
    <div className="p-4 bg-slate-800 rounded-lg">
      <h3 className="text-white font-semibold mb-2">Wave Propagation</h3>
      <canvas ref={canvasRef} width={600} height={200} className="w-full rounded mb-3" />
      <div className="text-gray-300 text-sm space-y-2">
        <div>
          <label>Vitesse: {speed.toFixed(2)}</label>
          <input type="range" min="0.1" max="3.0" step="0.05" value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} className="w-full" />
        </div>
        <div>
          <label>Longueur d'onde: {wavelength}px</label>
          <input type="range" min="30" max="200" step="1" value={wavelength} onChange={(e) => setWavelength(parseInt(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  );
}
