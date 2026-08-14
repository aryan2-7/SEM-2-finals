import { useState } from 'react';

type Theorem = 'gradient' | 'divergence' | 'stokes';

export default function FundamentalTheoremsViz() {
  const [t, setT] = useState<Theorem>('stokes');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 200" style={{ width: '100%', maxWidth: 320 }}>
        {t === 'gradient' && (
          <>
            <path d="M 40 160 Q 120 60 260 100" fill="none" stroke="#5b8def" strokeWidth={2.5} markerEnd="url(#ftArrow)" />
            <circle cx={40} cy={160} r={4} fill="#59c98e" />
            <text x={30} y={178} fontSize={10} fill="#59c98e" fontFamily="var(--mono)">a</text>
            <circle cx={260} cy={100} r={4} fill="#ef5b6f" />
            <text x={266} y={100} fontSize={10} fill="#ef5b6f" fontFamily="var(--mono)">b</text>
            <text x={160} y={190} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">line integral of ∇T depends only on endpoints</text>
          </>
        )}
        {t === 'divergence' && (
          <>
            <circle cx={160} cy={100} r={70} fill="#f2b54411" stroke="#f2b544" strokeWidth={2} strokeDasharray="4 3" />
            {Array.from({ length: 10 }).map((_, i) => {
              const a = (i / 10) * Math.PI * 2;
              return <line key={i} x1={160 + 70 * Math.cos(a)} y1={100 + 70 * Math.sin(a)} x2={160 + 85 * Math.cos(a)} y2={100 + 85 * Math.sin(a)} stroke="#5b8def" strokeWidth={1.5} markerEnd="url(#ftArrow)" />;
            })}
            <text x={160} y={190} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">flux out through surface = ∫(∇·F) inside volume</text>
          </>
        )}
        {t === 'stokes' && (
          <>
            <ellipse cx={160} cy={100} rx={90} ry={55} fill="#ef5b6f11" stroke="#ef5b6f" strokeWidth={2} />
            <path d="M 100 70 Q 160 40 220 70" fill="none" stroke="#5b8def" strokeWidth={2} markerEnd="url(#ftArrow)" />
            <line x1={160} y1={100} x2={160} y2={55} stroke="#59c98e" strokeWidth={2} markerEnd="url(#ftArrowG)" />
            <text x={166} y={50} fontSize={10} fill="#59c98e" fontFamily="var(--mono)">n̂</text>
            <text x={160} y={190} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">circulation around boundary = ∫(∇×F)·da over surface</text>
          </>
        )}
        <defs>
          <marker id="ftArrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#5b8def" /></marker>
          <marker id="ftArrowG" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#59c98e" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['gradient', 'divergence', 'stokes'] as Theorem[]).map(tt => (
          <button key={tt} onClick={() => setT(tt)}
            style={{
              background: t === tt ? '#f2b54422' : 'transparent',
              border: `1px solid ${t === tt ? 'var(--amber)' : 'var(--border)'}`,
              color: t === tt ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 12px', fontSize: 12, textTransform: 'capitalize',
            }}>
            {tt === 'gradient' ? 'gradient thm' : tt === 'divergence' ? "Gauss's div. thm" : "Stokes' thm"}
          </button>
        ))}
      </div>
    </div>
  );
}
