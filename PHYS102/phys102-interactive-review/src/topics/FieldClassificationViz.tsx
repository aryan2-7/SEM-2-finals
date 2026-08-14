import { useState } from 'react';

type FieldType = 'irrotational' | 'solenoidal' | 'general';

export default function FieldClassificationViz() {
  const [type, setType] = useState<FieldType>('irrotational');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 200" style={{ width: '100%', maxWidth: 320 }}>
        {type === 'irrotational' && (
          <>
            {/* radial field lines from a point, no curl */}
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              return <line key={i} x1={160} y1={100} x2={160 + 80 * Math.cos(a)} y2={100 + 80 * Math.sin(a)} stroke="#5b8def77" strokeWidth={1.3} markerEnd="url(#fcArrow)" />;
            })}
            <circle cx={160} cy={100} r={4} fill="#5b8def" />
            <text x={160} y={185} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">∇×F = 0 — can be written as −∇V</text>
          </>
        )}
        {type === 'solenoidal' && (
          <>
            {/* circulating loops, no divergence */}
            {[30, 55, 80].map(r => (
              <circle key={r} cx={160} cy={100} r={r} fill="none" stroke="#ef5b6f77" strokeWidth={1.5} markerEnd="url(#fcArrow)" strokeDasharray="0" />
            ))}
            <text x={160} y={185} fontSize={10} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">∇·F = 0 — can be written as ∇×A</text>
          </>
        )}
        {type === 'general' && (
          <>
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i / 8) * Math.PI * 2;
              return <line key={'r' + i} x1={110} y1={100} x2={110 + 40 * Math.cos(a)} y2={100 + 40 * Math.sin(a)} stroke="#5b8def66" strokeWidth={1.2} markerEnd="url(#fcArrow)" />;
            })}
            {[30, 50].map(r => (
              <circle key={r} cx={220} cy={100} r={r} fill="none" stroke="#ef5b6f66" strokeWidth={1.3} markerEnd="url(#fcArrow)" />
            ))}
            <text x={160} y={185} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">general F = −∇V + ∇×A (Helmholtz decomposition)</text>
          </>
        )}
        <defs>
          <marker id="fcArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0,0 L4,2 L0,4 Z" fill="#7b8299" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['irrotational', 'solenoidal', 'general'] as FieldType[]).map(t => (
          <button key={t} onClick={() => setType(t)}
            style={{
              background: type === t ? '#f2b54422' : 'transparent',
              border: `1px solid ${type === t ? 'var(--amber)' : 'var(--border)'}`,
              color: type === t ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 12px', fontSize: 12, textTransform: 'capitalize',
            }}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
