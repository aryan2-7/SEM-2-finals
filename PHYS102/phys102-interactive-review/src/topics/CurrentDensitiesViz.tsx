import { useState } from 'react';

type Mode = 'line' | 'surface' | 'volume';

export default function CurrentDensitiesViz() {
  const [mode, setMode] = useState<Mode>('volume');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 180" style={{ width: '100%', maxWidth: 320 }}>
        {mode === 'line' && (
          <>
            <line x1={60} y1={90} x2={260} y2={90} stroke="#f2b544" strokeWidth={3} markerEnd="url(#cdArrow)" />
            <text x={160} y={70} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">I = λv</text>
          </>
        )}
        {mode === 'surface' && (
          <>
            <rect x={70} y={50} width={180} height={80} fill="#f2b54411" stroke="#f2b544" strokeWidth={1.5} />
            {[65, 90, 115].map(y => (
              <line key={y} x1={80} y1={y} x2={240} y2={y} stroke="#f2b544" strokeWidth={2} markerEnd="url(#cdArrow)" />
            ))}
            <text x={160} y={148} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">K = σv (A/m)</text>
          </>
        )}
        {mode === 'volume' && (
          <>
            <circle cx={160} cy={90} r={55} fill="#f2b54411" stroke="#f2b544" strokeWidth={1.5} />
            {Array.from({ length: 5 }).map((_, i) => {
              const y = 60 + i * 15;
              return <line key={i} x1={115} y1={y} x2={205} y2={y} stroke="#f2b544" strokeWidth={1.5} markerEnd="url(#cdArrow)" opacity={0.75} />;
            })}
            <text x={160} y={162} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">J = ρv (A/m²)</text>
          </>
        )}
        <defs>
          <marker id="cdArrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#f2b544" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['line', 'surface', 'volume'] as Mode[]).map(m => (
          <button key={m} onClick={() => setMode(m)}
            style={{
              background: mode === m ? '#f2b54422' : 'transparent',
              border: `1px solid ${mode === m ? 'var(--amber)' : 'var(--border)'}`,
              color: mode === m ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}>
            {m} current
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 300 }}>
        continuity: ∇·J + ∂ρ/∂t = 0 — charge flowing out of any region exactly equals the rate the enclosed charge decreases
      </p>
    </div>
  );
}
