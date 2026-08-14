import { useState } from 'react';

export default function FissionFusionViz() {
  const [mode, setMode] = useState<'fission' | 'fusion'>('fission');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 160" style={{ width: '100%', maxWidth: 320 }}>
        {mode === 'fission' ? (
          <>
            <circle cx={160} cy={80} r={40} fill="#f2b54422" stroke="#f2b544" strokeWidth={2} />
            <text x={160} y={84} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">U-235</text>
            <line x1={200} y1={80} x2={260} y2={80} stroke="#7b8299" strokeWidth={1.5} markerEnd="url(#ffArrow)" />
            <circle cx={80} cy={55} r={22} fill="#5b8def33" stroke="#5b8def" strokeWidth={2} />
            <text x={80} y={58} fontSize={9} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">Ba</text>
            <circle cx={80} cy={105} r={20} fill="#ef5b6f33" stroke="#ef5b6f" strokeWidth={2} />
            <text x={80} y={108} fontSize={9} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">Kr</text>
          </>
        ) : (
          <>
            <circle cx={100} cy={80} r={22} fill="#5b8def33" stroke="#5b8def" strokeWidth={2} />
            <text x={100} y={84} fontSize={9} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">H-2</text>
            <circle cx={160} cy={80} r={22} fill="#ef5b6f33" stroke="#ef5b6f" strokeWidth={2} />
            <text x={160} y={84} fontSize={9} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">H-2</text>
            <line x1={130} y1={80} x2={130} y2={80} stroke="none" />
            <line x1={100} y1={110} x2={160} y2={110} stroke="#7b8299" strokeWidth={1.3} markerEnd="url(#ffArrow)" />
            <circle cx={240} cy={80} r={30} fill="#f2b54422" stroke="#f2b544" strokeWidth={2} />
            <text x={240} y={84} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">He-4</text>
          </>
        )}
        <defs>
          <marker id="ffArrow" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#7b8299" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['fission', 'fusion'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            style={{
              background: mode === m ? '#59c98e22' : 'transparent',
              border: `1px solid ${mode === m ? 'var(--green)' : 'var(--border)'}`,
              color: mode === m ? 'var(--green)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}>
            {m}
          </button>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        {mode === 'fission' ? 'Q ≈ 200 MeV per event' : 'Q ≈ 24 MeV per event'}
      </div>
    </div>
  );
}
