import { useState } from 'react';

export default function MutualInductionViz() {
  const [n1, setN1] = useState(4);
  const [n2, setN2] = useState(6);
  const [sep, setSep] = useState(50);

  // toy coupling model, purely illustrative, symmetric by construction
  const k = Math.max(0.05, 1 - sep / 140);
  const M = 0.6 * n1 * n2 * k * 0.01;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 380 180" style={{ width: '100%', maxWidth: 380 }}>
        <ellipse cx={130} cy={90} rx={50} ry={60} fill="none" stroke="#5b8def" strokeWidth={2.5} />
        <text x={130} y={20} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">Loop 1 (I₁, N₁={n1})</text>

        <ellipse cx={130 + sep + 60} cy={90} rx={40} ry={50} fill="none" stroke="#ef5b6f" strokeWidth={2.5} />
        <text x={130 + sep + 60} y={20} fontSize={10} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">Loop 2 (N₂={n2})</text>

        {/* flux arrows crossing gap, showing coupling */}
        {Array.from({ length: 3 }).map((_, i) => (
          <line key={i} x1={130 + 50} y1={60 + i * 30} x2={130 + sep + 60 - 40} y2={60 + i * 30}
            stroke="#f2b544" strokeWidth={1.3} strokeDasharray="3 2" opacity={0.5 + k * 0.4} />
        ))}
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 340 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 90 }}>N₁ (turns)</span>
          <input type="range" min={1} max={10} value={n1} onChange={e => setN1(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 90 }}>N₂ (turns)</span>
          <input type="range" min={1} max={10} value={n2} onChange={e => setN2(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 90 }}>separation</span>
          <input type="range" min={10} max={130} value={sep} onChange={e => setSep(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        </div>
      </div>

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 8,
        padding: '10px 18px', fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--amber)', textAlign: 'center',
      }}>
        M₁₂ = M₂₁ = M ≈ {M.toFixed(3)} H (illustrative units)<br />
        <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>flux through loop 2 from I₁ in loop 1 equals flux through loop 1 from the same I in loop 2</span>
      </div>
    </div>
  );
}
