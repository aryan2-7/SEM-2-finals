import { useState } from 'react';

export default function DisplacementDViz() {
  const [epsR, setEpsR] = useState(3);
  const a = 30, cx = 160, cy = 110;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 200" style={{ width: '100%', maxWidth: 320 }}>
        <line x1={cx} y1={20} x2={cx} y2={200} stroke="#f2b544" strokeWidth={3} />
        <text x={cx + 8} y={30} fontSize={10} fill="#f2b544" fontFamily="var(--mono)">λ (line charge)</text>
        <circle cx={cx} cy={cy} r={a} fill="#5b8def22" stroke="#5b8def" strokeWidth={1.5} strokeDasharray="4 3" />
        <text x={cx} y={cy + a + 16} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">rubber insulation, radius a</text>

        {/* D field lines, unaffected by dielectric (same everywhere) */}
        {[50, 80, 110].map(r => (
          <circle key={'D' + r} cx={cx} cy={cy} r={r} fill="none" stroke="#59c98e55" strokeWidth={1} />
        ))}
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>ε_r of insulation</span>
        <input type="range" min={1} max={8} step={0.5} value={epsR} onChange={e => setEpsR(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{epsR}</span>
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 280 }}>
        D = λ/(2πs) depends only on free charge λ — it doesn't change with ε_r. But E = D/(ε₀ε_r) inside the
        insulation shrinks as ε_r grows, since the dielectric's bound charge partially screens the field.
      </p>
    </div>
  );
}
