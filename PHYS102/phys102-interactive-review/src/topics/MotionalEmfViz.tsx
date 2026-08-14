import { useEffect, useRef, useState } from 'react';

export default function MotionalEmfViz() {
  const [x, setX] = useState(60);
  const [playing, setPlaying] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    function tick(now: number) {
      const dt = now - last;
      last = now;
      setX(p => (p + dt * 0.025 > 300 ? 60 : p + dt * 0.025));
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [playing]);

  const fieldEnd = 220;
  const loopW = 80, loopH = 70;
  const abInField = x < fieldEnd; // leading edge ab still generating EMF while inside

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 380 190" style={{ width: '100%', maxWidth: 380 }}>
        <rect x={10} y={30} width={210} height={120} fill="#5b8def11" stroke="#5b8def" strokeWidth={1} strokeDasharray="4 3" />
        {Array.from({ length: 4 }).map((_, r) => Array.from({ length: 5 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={30 + c * 42} cy={50 + r * 32} r={2} fill="#5b8def" opacity={0.5} />
        )))}

        <rect x={x} y={45} width={loopW} height={loopH} fill="none" stroke="#f2b544" strokeWidth={2.5} />
        {/* labels for sides */}
        <text x={x + loopW / 2} y={40} fontSize={9} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">a——b</text>
        <text x={x - 14} y={82} fontSize={9} fill="#f2b544" fontFamily="var(--mono)">d</text>
        <text x={x + loopW + 6} y={82} fontSize={9} fill="#f2b544" fontFamily="var(--mono)">c</text>

        {/* force arrow on leading edge ab if inside field */}
        {abInField && x + loopW > 10 && x < fieldEnd && (
          <line x1={x + loopW} y1={45} x2={x + loopW} y2={30} stroke="#59c98e" strokeWidth={2} markerEnd="url(#meArrow)" />
        )}
        <defs>
          <marker id="meArrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="#59c98e" />
          </marker>
        </defs>

        <text x={190} y={175} fontSize={10} fill="var(--text-dim)" textAnchor="middle" fontFamily="var(--mono)">
          {x + loopW < fieldEnd ? 'fully inside — ε = 0, no flux change' : x < fieldEnd ? 'exiting — leading side feels f=v×B, ε = vBh' : 'fully outside — ε = 0'}
        </text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 300 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>position</span>
        <input type="range" min={60} max={300} value={x} onChange={e => { setPlaying(false); setX(Number(e.target.value)); }} style={{ flex: 1, accentColor: '#f2b544' }} />
      </div>
      <button onClick={() => setPlaying(p => !p)}
        style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: '6px 16px', fontSize: 12, color: 'var(--text)' }}>
        {playing ? 'pause' : 'play'}
      </button>
    </div>
  );
}
