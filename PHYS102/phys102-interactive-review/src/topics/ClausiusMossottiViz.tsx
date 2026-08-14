import { useState } from 'react';

export default function ClausiusMossottiViz() {
  const [K, setK] = useState(3);
  const chiE = K - 1;
  const alphaRatio = (K - 1) / (K + 2); // proportional to alpha_m * N / (3 eps0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 180" style={{ width: '100%', maxWidth: 320 }}>
        {/* bulk dielectric with a spherical cavity cut out */}
        <rect x={20} y={20} width={280} height={140} fill="#5b8def11" stroke="#5b8def" strokeWidth={1} />
        <circle cx={160} cy={90} r={40} fill="#0b0e14" stroke="#f2b544" strokeWidth={2} />
        <text x={160} y={94} fontSize={9} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">cavity</text>

        {/* bound surface charge on cavity wall, sigma_b = -P cos theta pattern */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const sigma = -Math.cos(a); // -P cos theta pattern
          return <circle key={i} cx={160 + 40 * Math.cos(a)} cy={90 + 40 * Math.sin(a)} r={1.5 + Math.abs(sigma) * 3} fill={sigma > 0 ? '#5b8def' : '#ef5b6f'} opacity={0.85} />;
        })}

        <text x={160} y={166} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">σ_b = −P·n̂ induced on cavity wall</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>dielectric constant K</span>
        <input type="range" min={1.1} max={10} step={0.1} value={K} onChange={e => setK(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{K.toFixed(1)}</span>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--amber)', textAlign: 'center' }}>
        χ_e = {chiE.toFixed(1)} &nbsp;·&nbsp; (K−1)/(K+2) ≈ {alphaRatio.toFixed(3)} ∝ Nα_m/3ε₀
      </div>
    </div>
  );
}
