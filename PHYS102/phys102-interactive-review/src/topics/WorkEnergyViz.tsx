import { useState } from 'react';

export default function WorkEnergyViz() {
  const [config, setConfig] = useState<'shell' | 'solid'>('shell');
  const q = 1, R = 1; // normalized units, 1/(4pi eps0) = 1

  const Wshell = (q * q) / (2 * R);
  const Wsolid = (3 / 5) * (q * q) / R;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 300 180" style={{ width: '100%', maxWidth: 300 }}>
        {config === 'shell' ? (
          <>
            <circle cx={150} cy={90} r={55} fill="none" stroke="#5b8def" strokeWidth={3} />
            <text x={150} y={155} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">all charge on surface</text>
          </>
        ) : (
          <>
            <circle cx={150} cy={90} r={55} fill="#f2b54422" stroke="#f2b544" strokeWidth={2} />
            <text x={150} y={155} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">charge filling the volume</text>
          </>
        )}
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['shell', 'solid'] as const).map(c => (
          <button key={c} onClick={() => setConfig(c)}
            style={{
              background: config === c ? '#f2b54422' : 'transparent',
              border: `1px solid ${config === c ? 'var(--amber)' : 'var(--border)'}`,
              color: config === c ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5,
            }}>
            {c === 'shell' ? 'uniformly charged shell' : 'uniformly charged solid sphere'}
          </button>
        ))}
      </div>

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 8,
        padding: '10px 18px', fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--green)', textAlign: 'center',
      }}>
        {config === 'shell'
          ? <>W = (1/4πε₀)(q²/2R) ≈ {Wshell.toFixed(2)} (normalized units)</>
          : <>W = (3/5)(1/4πε₀)(q²/R) ≈ {Wsolid.toFixed(2)} (normalized units)</>}
        <br />
        <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>solid sphere needs 6/5× more energy — its charge is packed closer together on average</span>
      </div>
    </div>
  );
}
