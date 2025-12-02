'use client';

import { useRef, useEffect, useState } from 'react';

// Simple RC charge/discharge visualization (approximate) using JS time loop
export default function CircuitSim() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const [R, setR] = useState(10); // kΩ
  const [C, setC] = useState(1); // µF
  const [charging, setCharging] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let t = 0;
    let volt = 0;
    const V0 = 5;

    function draw() {
      // update approximate RC response
      const tau = (R * 1e3) * (C * 1e-6); // seconds
      const dt = 0.03; // simulation step
      if (charging) volt += (V0 - volt) * (dt / (tau + 1e-6));
      else volt -= volt * (dt / (tau + 1e-6));

      t += dt;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#0b1220';
      ctx.fillRect(0, 0, w, h);

      // draw voltage graph buffer (simple trailing)
      const points = 300;
      ctx.beginPath();
      for (let i = 0; i < points; i++) {
        const x = (i / points) * w;
        const val = Math.max(0, Math.min(1, volt / V0)) * h * 0.8;
        const y = h - val - 20;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2;
      ctx.stroke();

      // draw labels
      ctx.fillStyle = '#cbd5e1';
      ctx.fillText(`V = ${volt.toFixed(2)} V`, 10, 16);
      ctx.fillText(`R = ${R} kΩ • C = ${C} µF • mode: ${charging ? 'charge' : 'décharge'}`, 10, 32);

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [R, C, charging]);

  return (
    <div className="p-4 bg-slate-800 rounded-lg">
      <h3 className="text-white font-semibold mb-2">Circuit RC (charge/décharge)</h3>
      <canvas ref={canvasRef} width={600} height={200} className="w-full rounded mb-3" />
      <div className="text-gray-300 text-sm space-y-2">
        <div>
          <label>Résistance (kΩ): {R}</label>
          <input type="range" min="1" max="100" step="1" value={R} onChange={(e) => setR(parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label>Capacité (µF): {C}</label>
          <input type="range" min="0.1" max="10" step="0.1" value={C} onChange={(e) => setC(parseFloat(e.target.value))} className="w-full" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setCharging(true)} className="px-3 py-1 bg-indigo-600 rounded">Charge</button>
          <button onClick={() => setCharging(false)} className="px-3 py-1 bg-rose-600 rounded">Décharge</button>
        </div>
      </div>
    </div>
  );
}
