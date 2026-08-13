import { useState } from 'react';

export default function PolarizabilityViz() {
  const [E, setE] = useState(0.5);
  const cx = 160, cy = 110, a = 55;
  const nucleusX = cx + E * a * 0.5;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 220" style={{ width: '100%', maxWidth: 320 }}>
        {/* external field arrows */}
        {[60, 110, 160].map(y => (
          <line key={y} x1={20} y1={y} x2={70} y2={y} stroke="#5b8def66" strokeWidth={1.5} markerEnd="url(#polArrow)" />
        ))}
        <defs>
          <marker id="polArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#5b8def66" />
          </marker>
        </defs>

        {/* electron cloud, fixed */}
        <circle cx={cx} cy={cy} r={a} fill="#ef5b6f22" stroke="#ef5b6f" strokeWidth={1.5} />
        <text x={cx} y={cy + a + 18} fontSize={10} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">electron cloud (−q)</text>

        {/* nucleus, displaced */}
        <circle cx={nucleusX} cy={cy} r={7} fill="#5b8def" />
        <text x={nucleusX} y={cy - 16} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">nucleus (+q)</text>

        {/* induced dipole moment arrow */}
        {E > 0.05 && (
          <line x1={cx} y1={cy + 75} x2={nucleusX} y2={cy + 75} stroke="#f2b544" strokeWidth={2} markerEnd="url(#polArrow2)" />
        )}
        <defs>
          <marker id="polArrow2" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="#f2b544" />
          </marker>
        </defs>
        {E > 0.05 && <text x={(cx + nucleusX) / 2} y={cy + 92} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">p</text>}
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>E field</span>
        <input type="range" min={0} max={1} step={0.05} value={E} onChange={e => setE(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 280 }}>
        the nucleus shifts until the internal restoring field exactly balances the external field — equilibrium defines α
      </p>
    </div>
  );
}
