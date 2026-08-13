import { useState } from 'react';

export default function DipoleMomentViz() {
  const [d, setD] = useState(70);
  const cx = 160, cy = 110;
  const p = d * 1; // q=1 normalized

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 180" style={{ width: '100%', maxWidth: 320 }}>
        <line x1={cx - d / 2} y1={cy} x2={cx + d / 2} y2={cy} stroke="#4a5268" strokeWidth={1} strokeDasharray="3 2" />
        <circle cx={cx - d / 2} cy={cy} r={9} fill="#ef5b6f" />
        <text x={cx - d / 2} y={cy + 4} fontSize={11} fill="#0b0e14" textAnchor="middle" fontWeight="bold">−q</text>
        <circle cx={cx + d / 2} cy={cy} r={9} fill="#5b8def" />
        <text x={cx + d / 2} y={cy + 4} fontSize={11} fill="#0b0e14" textAnchor="middle" fontWeight="bold">+q</text>

        <line x1={cx - d / 2} y1={cy - 30} x2={cx + d / 2} y2={cy - 30} stroke="#f2b544" strokeWidth={2.5} markerEnd="url(#dmArrow)" />
        <text x={cx} y={cy - 38} fontSize={11} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">p</text>
        <defs>
          <marker id="dmArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" />
          </marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>separation d</span>
        <input type="range" min={20} max={140} value={d} onChange={e => setD(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>p = qd → |p| ∝ {p.toFixed(0)} (arb. units)</div>
    </div>
  );
}
