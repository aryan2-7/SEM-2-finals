import { useState } from 'react';

export default function LinearDielectricsViz() {
  const [chiE, setChiE] = useState(2.5);
  const eps0 = 1; // normalized
  const eps = eps0 * (1 + chiE);
  const K = 1 + chiE;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 180" style={{ width: '100%', maxWidth: 320 }}>
        <circle cx={100} cy={90} r={30} fill="#c7cbd633" stroke="#c7cbd6" strokeWidth={2} />
        <text x={100} y={94} fontSize={9} fill="#c7cbd6" textAnchor="middle" fontFamily="var(--mono)">metal, +Q</text>
        <circle cx={100} cy={90} r={70} fill="#5b8def11" stroke="#5b8def" strokeWidth={1.5} strokeDasharray="4 3" />
        <text x={100} y={168} fontSize={9} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">dielectric shell, K={K.toFixed(1)}</text>

        {/* comparative field strength bars */}
        <rect x={220} y={40} width={20} height={100} fill="none" stroke="#4a5268" />
        <rect x={220} y={140 - 100 / K} width={20} height={100 / K} fill="#f2b544" opacity={0.8} />
        <text x={230} y={155} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">E in dielectric</text>
        <text x={230} y={30} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">(relative to vacuum)</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>χ_e</span>
        <input type="range" min={0} max={8} step={0.1} value={chiE} onChange={e => setChiE(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{chiE.toFixed(1)}</span>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)', textAlign: 'center' }}>
        ε = ε₀(1+χ_e) = {eps.toFixed(1)}ε₀ &nbsp;·&nbsp; K = ε/ε₀ = {K.toFixed(1)}
      </div>
    </div>
  );
}
