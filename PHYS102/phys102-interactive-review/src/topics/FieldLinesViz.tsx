import { useState } from 'react';

export default function FieldLinesViz() {
  const [config, setConfig] = useState<'dipole' | 'unequal'>('dipole');

  const posQ = config === 'dipole' ? 1 : 2;
  const negQ = -1;
  const posPos = { x: 120, y: 110 };
  const negPos = { x: 260, y: 110 };

  function field(x: number, y: number) {
    let ex = 0, ey = 0;
    for (const [c, q] of [[posPos, posQ], [negPos, negQ]] as const) {
      const dx = x - c.x, dy = y - c.y;
      const r2 = dx * dx + dy * dy + 4;
      const r = Math.sqrt(r2);
      const k = q / (r2 * r);
      ex += k * dx; ey += k * dy;
    }
    return { ex, ey };
  }

  const nLines = config === 'dipole' ? 14 : 20;
  const lines: string[] = [];
  for (let i = 0; i < nLines; i++) {
    const angle = (i / nLines) * Math.PI * 2;
    let x = posPos.x + 6 * Math.cos(angle);
    let y = posPos.y + 6 * Math.sin(angle);
    let d = `M${x.toFixed(1)},${y.toFixed(1)}`;
    for (let s = 0; s < 300; s++) {
      const { ex, ey } = field(x, y);
      const mag = Math.sqrt(ex * ex + ey * ey) || 1e-6;
      x += (ex / mag) * 3;
      y += (ey / mag) * 3;
      if (x < 10 || x > 370 || y < 10 || y > 210) break;
      d += ` L${x.toFixed(1)},${y.toFixed(1)}`;
      if (Math.hypot(x - negPos.x, y - negPos.y) < 8) break;
    }
    lines.push(d);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 380 220" style={{ width: '100%', maxWidth: 380 }}>
        {lines.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#f2b544" strokeWidth={1.3} opacity={0.65} />
        ))}
        <circle cx={posPos.x} cy={posPos.y} r={config === 'dipole' ? 9 : 12} fill="#5b8def" />
        <text x={posPos.x} y={posPos.y + 4} fontSize={11} fill="#0b0e14" textAnchor="middle" fontWeight="bold">
          {config === 'dipole' ? '+q' : '+2q'}
        </text>
        <circle cx={negPos.x} cy={negPos.y} r={9} fill="#ef5b6f" />
        <text x={negPos.x} y={negPos.y + 4} fontSize={11} fill="#0b0e14" textAnchor="middle" fontWeight="bold">−q</text>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['dipole', 'unequal'] as const).map(c => (
          <button key={c} onClick={() => setConfig(c)}
            style={{
              background: config === c ? '#f2b54422' : 'transparent',
              border: `1px solid ${config === c ? 'var(--amber)' : 'var(--border)'}`,
              color: config === c ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5,
            }}>
            {c === 'dipole' ? 'equal & opposite (+q, −q)' : 'unequal (+2q, −q)'}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)' }}>
        line density ∝ |charge| — notice more lines leave +2q than arrive at −q; the extra lines run off to infinity.
      </p>
    </div>
  );
}
