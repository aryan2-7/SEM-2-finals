import { useState } from 'react';

export default function MagneticEnergyViz() {
  const [B, setB] = useState(0.6);
  const u = (B * B) / 2; // normalized u = B^2/2mu0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 260 160" style={{ width: '100%', maxWidth: 260 }}>
        <rect x={30} y={140 - u * 100} width={60} height={u * 100} fill="#ef5b6f" opacity={0.8} />
        <rect x={30} y={40} width={60} height={100} fill="none" stroke="#4a5268" strokeWidth={1} />
        <text x={60} y={155} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">u_m = B²/2μ₀</text>

        <text x={170} y={90} fontSize={11} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">B = {B.toFixed(1)} T (illustrative)</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 260 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>B field</span>
        <input type="range" min={0.05} max={1.2} step={0.05} value={B} onChange={e => setB(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 280 }}>
        energy density scales as B² — doubling the field quadruples the stored energy per unit volume
      </p>
    </div>
  );
}
