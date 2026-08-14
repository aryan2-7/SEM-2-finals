import { useState } from 'react';

export default function PolarizationViz() {
  const [P, setP] = useState(0.6); // normalized polarization magnitude, 0 to 1
  const [nonUniform, setNonUniform] = useState(false);

  const nDipoles = 6;
  const rows = 4;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, width: '100%' }}>
      <svg viewBox="0 0 520 300" style={{ width: '100%', maxWidth: 520 }}>
        {/* slab outline */}
        <rect x={100} y={40} width={320} height={220} fill="#0e1219" stroke="#262c3d" strokeWidth={1.5} rx={4} />

        {/* dipole grid, arrow length grows with column index if nonUniform, else uniform */}
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: nDipoles }).map((_, c) => {
            const localP = nonUniform ? P * ((c + 1) / nDipoles) : P;
            const x = 130 + c * 44;
            const y = 70 + r * 46;
            const len = 14 + localP * 20;
            return (
              <g key={`${r}-${c}`}>
                <line x1={x - len / 2} y1={y} x2={x + len / 2} y2={y} stroke="#f2b544" strokeWidth={2} />
                <circle cx={x + len / 2} cy={y} r={2.5} fill="#5b8def" />
                <circle cx={x - len / 2} cy={y} r={2.5} fill="#ef5b6f" />
              </g>
            );
          })
        )}

        {/* bound surface charge indicators on right (+) and left (-) faces */}
        <text x={100} y={30} fontSize={11} fill="#7b8299" fontFamily="var(--mono)">σ_b = −P·n̂</text>
        <text x={420} y={30} fontSize={11} fill="#7b8299" fontFamily="var(--mono)" textAnchor="end">σ_b = +P·n̂</text>
        {Array.from({ length: rows }).map((_, r) => {
          const y = 70 + r * 46;
          const leftMag = nonUniform ? P * (1 / nDipoles) : P;
          const rightMag = nonUniform ? P : P;
          return (
            <g key={r}>
              <circle cx={92} cy={y} r={3 + leftMag * 5} fill="#ef5b6f" opacity={0.85} />
              <circle cx={428} cy={y} r={3 + rightMag * 5} fill="#5b8def" opacity={0.85} />
            </g>
          );
        })}

        {/* interior bound charge if nonuniform */}
        {nonUniform && (
          <text x={260} y={280} fontSize={11} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">
            ρ_b = −∇·P ≠ 0 in bulk (P increases left→right)
          </text>
        )}
        {!nonUniform && (
          <text x={260} y={280} fontSize={11} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">
            uniform P → ρ_b = 0 in bulk, only surface charge
          </text>
        )}
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 460 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>|P|</span>
        <input type="range" min={0} max={1} step={0.05} value={P} onChange={e => setP(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)' }}>{P.toFixed(2)}</span>
      </div>
      <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <input type="checkbox" checked={nonUniform} onChange={e => setNonUniform(e.target.checked)} />
        non-uniform P (reveals bound volume charge ρ_b)
      </label>
    </div>
  );
}
