'use client';

import { useRef, useEffect, useState } from 'react';

export default function PendulumSim({ length = 150, gravity = 9.81 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const [angle, setAngle] = useState(Math.PI / 4);
  const [amplitude, setAmplitude] = useState(0.8);
  const [frequency, setFrequency] = useState(1.0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = 40;
    let t = 0;

    function draw() {
      t += 0.02 * frequency;
      // simple harmonic motion for demo purposes
      const theta = amplitude * Math.cos(t);
      const x = centerX + length * Math.sin(theta);
      const y = centerY + length * Math.cos(theta);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // rod
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 4;
      ctx.stroke();
      // bob
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fillStyle = '#7c3aed';
      ctx.fill();
      // pivot
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#f1f5f9';
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [length, amplitude, frequency]);

  return (
    <div className="p-4 bg-slate-800 rounded-lg">
      <h3 className="text-white font-semibold mb-2">Pendulum Simulator</h3>
      <canvas ref={canvasRef} width={600} height={400} className="w-full rounded mb-3" />

      <div className="space-y-2 text-gray-300">
        <div>
          <label className="text-sm">Amplitude: {amplitude.toFixed(2)}</label>
          <input type="range" min="0" max="1.5" step="0.01" value={amplitude} onChange={(e) => setAmplitude(parseFloat(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm">Frequency: {frequency.toFixed(2)}</label>
          <input type="range" min="0.1" max="3.0" step="0.05" value={frequency} onChange={(e) => setFrequency(parseFloat(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  );
}
