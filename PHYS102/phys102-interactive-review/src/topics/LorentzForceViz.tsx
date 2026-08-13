import { useEffect, useRef, useState } from 'react';

export default function LorentzForceViz() {
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

  const cx = 160, cy = 110, r = 65;
  const x = cx + r * Math.cos(t);
  const y = cy + r * Math.sin(t);
  const vx = -Math.sin(t), vy = Math.cos(t); // tangent (velocity direction)
  const fx = -Math.cos(t), fy = -Math.sin(t); // centripetal (force direction, toward center)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 220" style={{ width: '100%', maxWidth: 320 }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#3a4256" strokeDasharray="3 2" />
        <circle cx={x} cy={y} r={6} fill="#f2b544" />

        <line x1={x} y1={y} x2={x + vx * 35} y2={y + vy * 35} stroke="#5b8def" strokeWidth={2} markerEnd="url(#lfArrowV)" />
        <text x={x + vx * 42} y={y + vy * 42} fontSize={10} fill="#5b8def" fontFamily="var(--mono)">v</text>

        <line x1={x} y1={y} x2={x + fx * 30} y2={y + fy * 30} stroke="#ef5b6f" strokeWidth={2} markerEnd="url(#lfArrowF)" />
        <text x={x + fx * 40} y={y + fy * 40} fontSize={10} fill="#ef5b6f" fontFamily="var(--mono)">F</text>

        <defs>
          <marker id="lfArrowV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b8def" /></marker>
          <marker id="lfArrowF" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef5b6f" /></marker>
        </defs>

        <text x={cx} y={cy + 4} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">B ⊙ out of page</text>
        <text x={160} y={205} fontSize={10.5} fill="var(--text-dim)" textAnchor="middle" fontFamily="var(--mono)">
          F ⊥ v always — magnetic force does zero work
        </text>
      </svg>
    </div>
  );
}
