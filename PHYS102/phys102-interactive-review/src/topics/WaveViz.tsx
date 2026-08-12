import { useEffect, useRef, useState } from 'react';

export default function WaveViz() {
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    function tick(now: number) {
      const dt = now - last;
      last = now;
      setPhase(p => p + dt * 0.003 * speed);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [playing, speed]);

  const nPoints = 60;
  const W = 420, midY = 120;
  const amplitude = 45;

  const ePoints: [number, number][] = [];
  const bPoints: [number, number][] = []; // rendered as a "depth" offset to fake 3D perpendicularity
  for (let i = 0; i <= nPoints; i++) {
    const x = (i / nPoints) * W;
    const k = (i / nPoints) * 4 * Math.PI;
    const eVal = amplitude * Math.sin(k - phase);
    const bVal = amplitude * 0.6 * Math.sin(k - phase);
    ePoints.push([x, midY - eVal]);
    bPoints.push([x, midY + bVal * 0.4]); // squashed to suggest the perpendicular (z) axis in pseudo-3D
  }

  const ePath = ePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const bPath = bPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 420 240" style={{ width: '100%', maxWidth: 420 }}>
        {/* propagation axis */}
        <line x1={0} y1={midY} x2={420} y2={midY} stroke="#3a4256" strokeWidth={1} strokeDasharray="4 3" />
        <text x={410} y={midY - 8} fontSize={10} fill="#7b8299" textAnchor="end" fontFamily="var(--mono)">→ propagation (z)</text>

        {/* B field wave (drawn first, "behind") */}
        <path d={bPath} fill="none" stroke="#ef5b6f" strokeWidth={2} opacity={0.75} />
        {/* connecting verticals for B, sparse */}
        {bPoints.filter((_, i) => i % 6 === 0).map(([x, y], i) => (
          <line key={'b' + i} x1={x} y1={midY} x2={x} y2={y} stroke="#ef5b6f" strokeWidth={1} opacity={0.4} />
        ))}

        {/* E field wave */}
        <path d={ePath} fill="none" stroke="#5b8def" strokeWidth={2.5} />
        {ePoints.filter((_, i) => i % 6 === 0).map(([x, y], i) => (
          <line key={'e' + i} x1={x} y1={midY} x2={x} y2={y} stroke="#5b8def" strokeWidth={1} opacity={0.5} />
        ))}

        <text x={20} y={30} fontSize={11} fill="#5b8def" fontFamily="var(--mono)">E (blue)</text>
        <text x={20} y={210} fontSize={11} fill="#ef5b6f" fontFamily="var(--mono)">B (red, perpendicular)</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 340 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>speed</span>
        <input type="range" min={0.2} max={3} step={0.1} value={speed} onChange={e => setSpeed(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
      </div>
      <button onClick={() => setPlaying(p => !p)}
        style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: '6px 16px', fontSize: 12, color: 'var(--text)' }}>
        {playing ? 'pause' : 'play'}
      </button>
    </div>
  );
}
