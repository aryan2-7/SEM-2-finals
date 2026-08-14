import { useState } from 'react';

export default function DivergenceViz() {
  const [mode, setMode] = useState<'source' | 'sink' | 'zero'>('source');

  const arrows = Array.from({ length: 16 }).map((_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    const r1 = mode === 'source' ? 20 : mode === 'sink' ? 70 : 45;
    const r2 = mode === 'source' ? 70 : mode === 'sink' ? 20 : 45;
    return {
      x1: 200 + r1 * Math.cos(angle), y1: 130 + r1 * Math.sin(angle),
      x2: 200 + r2 * Math.cos(angle), y2: 130 + r2 * Math.sin(angle),
    };
  });

  const divText = mode === 'source' ? '∇·F > 0 (source)' : mode === 'sink' ? '∇·F < 0 (sink)' : '∇·F = 0 (solenoidal)';
  const color = mode === 'source' ? '#f2b544' : mode === 'sink' ? '#ef5b6f' : '#5b8def';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 260" style={{ width: '100%', maxWidth: 400 }}>
        <circle cx={200} cy={130} r={4} fill={color} />
        {mode !== 'zero' && arrows.map((a, i) => (
          <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke={color} strokeWidth={2} markerEnd="url(#dArrow)" opacity={0.85} />
        ))}
        {mode === 'zero' && (
          // circulating loop instead, to show pure rotation with zero net flux
          <circle cx={200} cy={130} r={45} fill="none" stroke={color} strokeWidth={2} strokeDasharray="8 4" opacity={0.85} />
        )}
        <defs>
          <marker id="dArrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill={color} />
          </marker>
        </defs>
        <text x={200} y={250} fontSize={13} fill={color} textAnchor="middle" fontFamily="var(--mono)">{divText}</text>
      </svg>
      <div style={{ display: 'flex', gap: 8 }}>
        {(['source', 'sink', 'zero'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            style={{
              background: mode === m ? '#f2b54422' : 'transparent',
              border: `1px solid ${mode === m ? 'var(--amber)' : 'var(--border)'}`,
              color: mode === m ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}>
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
