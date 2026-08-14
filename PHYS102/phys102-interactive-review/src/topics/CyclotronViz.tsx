import { useEffect, useRef, useState } from 'react';

export default function CyclotronViz() {
  const [mode, setMode] = useState<'cyclotron' | 'cycloid'>('cyclotron');
  const [pitch, setPitch] = useState(0.4); // v_parallel fraction, cyclotron only
  const [t, setT] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let last = performance.now();
    function tick(now: number) {
      const dt = now - last;
      last = now;
      setT(p => p + dt * 0.0015);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // cyclotron: helical projection (side view, "depth" as vertical squash)
  const nTurns = 3;
  const helixPts: [number, number][] = [];
  if (mode === 'cyclotron') {
    for (let i = 0; i <= 200; i++) {
      const frac = i / 200;
      const theta = frac * nTurns * 2 * Math.PI - t * 3;
      const x = 30 + frac * 340;
      const y = 110 + 40 * Math.sin(theta) * (1 - pitch * 0.3);
      helixPts.push([x, y]);
    }
  }

  // cycloid: parametric x = R(theta - sin theta), y = R(1 - cos theta)
  const cycloidPts: [number, number][] = [];
  if (mode === 'cycloid') {
    const R = 16;
    for (let i = 0; i <= 300; i++) {
      const theta = (i / 300) * 4 * Math.PI;
      const x = 30 + R * (theta - Math.sin(theta));
      const y = 180 - R * (1 - Math.cos(theta));
      cycloidPts.push([x, y]);
    }
  }

  const pts = mode === 'cyclotron' ? helixPts : cycloidPts;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const headIdx = Math.min(pts.length - 1, Math.floor((mode === 'cyclotron' ? (t * 3 / (2 * Math.PI) * 60) % pts.length : (t * 60) % pts.length)));
  const head = pts[headIdx] ?? pts[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 220" style={{ width: '100%', maxWidth: 400 }}>
        {mode === 'cyclotron' && (
          <>
            <line x1={20} y1={110} x2={380} y2={110} stroke="#3a4256" strokeDasharray="3 2" />
            <text x={380} y={104} fontSize={9} fill="#7b8299" textAnchor="end" fontFamily="var(--mono)">B →</text>
          </>
        )}
        <path d={pathD} fill="none" stroke="#5b8def" strokeWidth={2} opacity={0.75} />
        {head && <circle cx={head[0]} cy={head[1]} r={5} fill="#ef5b6f" />}
        <text x={200} y={205} fontSize={10.5} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">
          {mode === 'cyclotron' ? 'helical path: circular ⊥B, drift ∥B' : 'cycloid: E along k̂, B along î'}
        </text>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['cyclotron', 'cycloid'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            style={{
              background: mode === m ? '#5b8def22' : 'transparent',
              border: `1px solid ${mode === m ? 'var(--field)' : 'var(--border)'}`,
              color: mode === m ? 'var(--field)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}>
            {m}
          </button>
        ))}
      </div>

      {mode === 'cyclotron' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 320 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>pitch angle (v∥ fraction)</span>
          <input type="range" min={0} max={1} step={0.05} value={pitch} onChange={e => setPitch(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
        </div>
      )}
    </div>
  );
}
