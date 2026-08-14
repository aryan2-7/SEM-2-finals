import { useRef, useEffect, useState } from 'react';

export default function GradientViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [probe, setProbe] = useState({ x: 260, y: 150 });

  function T(x: number, y: number) {
    // synthetic temperature field with one hot spot
    const dx = x - 340, dy = y - 100;
    return 200 - 0.15 * (dx * dx + dy * dy) * 0.01;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // heightmap via color bands
    const img = ctx.createImageData(W, H);
    let min = Infinity, max = -Infinity;
    for (let x = 0; x < W; x += 4) for (let y = 0; y < H; y += 4) {
      const v = T(x, y);
      if (v < min) min = v;
      if (v > max) max = v;
    }
    for (let x = 0; x < W; x++) for (let y = 0; y < H; y++) {
      const v = (T(x, y) - min) / (max - min);
      const idx = (y * W + x) * 4;
      img.data[idx] = 20 + v * 220;
      img.data[idx + 1] = 30 + v * 90;
      img.data[idx + 2] = 60 + (1 - v) * 120;
      img.data[idx + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);

    // gradient arrow field
    const step = 40;
    ctx.strokeStyle = '#f2b544';
    ctx.fillStyle = '#f2b544';
    for (let x = step / 2; x < W; x += step) {
      for (let y = step / 2; y < H; y += step) {
        const h = 4;
        const dTdx = (T(x + h, y) - T(x - h, y)) / (2 * h);
        const dTdy = (T(x, y + h) - T(x, y - h)) / (2 * h);
        const mag = Math.sqrt(dTdx * dTdx + dTdy * dTdy) || 1e-6;
        const len = Math.min(14, mag * 3);
        const ax = x + (dTdx / mag) * len;
        const ay = y + (dTdy / mag) * len;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(ax, ay);
        ctx.lineWidth = 1.3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ax, ay, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // probe marker
    ctx.beginPath();
    ctx.arc(probe.x, probe.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#ef5b6f';
    ctx.fill();
    ctx.strokeStyle = '#0b0e14';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, [probe]);

  const h = 4;
  const dTdx = (T(probe.x + h, probe.y) - T(probe.x - h, probe.y)) / (2 * h);
  const dTdy = (T(probe.x, probe.y + h) - T(probe.x, probe.y - h)) / (2 * h);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: '100%' }}>
      <canvas
        ref={canvasRef} width={480} height={220}
        style={{ borderRadius: 8, maxWidth: '100%', cursor: 'crosshair' }}
        onClick={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          setProbe({ x: (e.clientX - rect.left) * (480 / rect.width), y: (e.clientY - rect.top) * (220 / rect.height) });
        }}
      />
      <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>click anywhere to move the probe (red dot)</p>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        ∇T ≈ ({dTdx.toFixed(2)}, {dTdy.toFixed(2)}) — points toward increasing temperature
      </div>
    </div>
  );
}
