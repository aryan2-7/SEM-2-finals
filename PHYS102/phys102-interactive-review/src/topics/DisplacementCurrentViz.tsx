import { useEffect, useRef, useState } from 'react';

export default function DisplacementCurrentViz() {
  const [t, setT] = useState(0.3);
  const [playing, setPlaying] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    function tick(now: number) {
      const dt = now - last;
      last = now;
      setT(prev => (prev + dt * 0.0003) % 1);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [playing]);

  const chargeFrac = t; // 0 to 1, charge accumulating
  const nFieldLines = Math.round(2 + chargeFrac * 8);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 220" style={{ width: '100%', maxWidth: 400 }}>
        {/* wires */}
        <line x1={20} y1={110} x2={150} y2={110} stroke="#f2b544" strokeWidth={2.5} markerEnd="url(#dcArrow)" />
        <line x1={250} y1={110} x2={380} y2={110} stroke="#3a4256" strokeWidth={2.5} />

        {/* plates */}
        <line x1={150} y1={50} x2={150} y2={170} stroke="#c7cbd6" strokeWidth={4} />
        <line x1={250} y1={50} x2={250} y2={170} stroke="#c7cbd6" strokeWidth={4} />

        {/* E field lines between plates, growing with charge */}
        {Array.from({ length: nFieldLines }).map((_, i) => {
          const y = 60 + (i / Math.max(1, nFieldLines - 1)) * 100;
          return <line key={i} x1={155} y1={y} x2={245} y2={y} stroke="#5b8def" strokeWidth={1.5} markerEnd="url(#eDcArrow)" opacity={0.8} />;
        })}

        {/* induced B rings around axis (dots/crosses pattern) */}
        {chargeFrac > 0.05 && [30, 55].map((rad, i) => (
          <ellipse key={i} cx={200} cy={110} rx={rad} ry={rad * 0.35} fill="none" stroke="#ef5b6f" strokeWidth={1.3} strokeDasharray="4 3" opacity={0.7} />
        ))}

        <defs>
          <marker id="dcArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" />
          </marker>
          <marker id="eDcArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#5b8def" />
          </marker>
        </defs>

        <text x={85} y={100} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">I (conduction)</text>
        <text x={200} y={40} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">E(t) growing</text>
        <text x={200} y={200} fontSize={10} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">B induced around axis (J_d = ε₀ ∂E/∂t)</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 340 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>charge q(t)</span>
        <input type="range" min={0} max={1} step={0.01} value={t} onChange={e => { setPlaying(false); setT(Number(e.target.value)); }} style={{ flex: 1, accentColor: '#5b8def' }} />
      </div>
      <button onClick={() => setPlaying(p => !p)}
        style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: '6px 16px', fontSize: 12, color: 'var(--text)' }}>
        {playing ? 'pause' : 'play'}
      </button>
    </div>
  );
}
