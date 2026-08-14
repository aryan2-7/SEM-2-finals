import { useState } from 'react';

export default function VectorBasicsViz() {
  const [negate, setNegate] = useState(false);
  const cx = 150, cy = 110;
  const vx = 90, vy = -50;
  const ex = negate ? cx - vx : cx + vx;
  const ey = negate ? cy - vy : cy + vy;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 300 }}>
        <line x1={20} y1={cy} x2={280} y2={cy} stroke="#262c3d" strokeWidth={1} />
        <line x1={cx} y1={20} x2={cx} y2={190} stroke="#262c3d" strokeWidth={1} />
        <line x1={cx} y1={cy} x2={ex} y2={ey} stroke={negate ? '#ef5b6f' : '#5b8def'} strokeWidth={3} markerEnd="url(#vbArrow)" />
        <text x={ex + (negate ? -20 : 10)} y={ey - 8} fontSize={12} fill={negate ? '#ef5b6f' : '#5b8def'} fontFamily="var(--mono)">
          {negate ? '−A' : 'A'}
        </text>
        <defs>
          <marker id="vbArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={negate ? '#ef5b6f' : '#5b8def'} />
          </marker>
        </defs>
      </svg>
      <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <input type="checkbox" checked={negate} onChange={e => setNegate(e.target.checked)} />
        show −A (same magnitude, reversed direction)
      </label>
    </div>
  );
}
