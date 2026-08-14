import { useState } from 'react';

export default function PointChargeFieldViz() {
  const [path, setPath] = useState<'direct' | 'curved'>('direct');
  const cx = 190, cy = 130;

  // both paths connect the same start/end points, but visually differ
  const start = { x: 60, y: 90 };
  const end = { x: 300, y: 170 };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 360 220" style={{ width: '100%', maxWidth: 360 }}>
        {/* radial field lines from charge */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return <line key={i} x1={cx} y1={cy} x2={cx + 130 * Math.cos(a)} y2={cy + 130 * Math.sin(a)} stroke="#5b8def22" strokeWidth={1} />;
        })}
        <circle cx={cx} cy={cy} r={7} fill="#5b8def" />
        <text x={cx} y={cy - 14} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">q</text>

        {/* path */}
        {path === 'direct' ? (
          <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#f2b544" strokeWidth={2.5} markerEnd="url(#pcArrow)" />
        ) : (
          <path d={`M ${start.x} ${start.y} Q 190 40 ${end.x} ${end.y}`} fill="none" stroke="#f2b544" strokeWidth={2.5} markerEnd="url(#pcArrow)" />
        )}
        <circle cx={start.x} cy={start.y} r={4} fill="#59c98e" />
        <text x={start.x - 10} y={start.y - 10} fontSize={10} fill="#59c98e" fontFamily="var(--mono)">a</text>
        <circle cx={end.x} cy={end.y} r={4} fill="#ef5b6f" />
        <text x={end.x + 8} y={end.y + 4} fontSize={10} fill="#ef5b6f" fontFamily="var(--mono)">b</text>

        <defs>
          <marker id="pcArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['direct', 'curved'] as const).map(p => (
          <button key={p} onClick={() => setPath(p)}
            style={{
              background: path === p ? '#f2b54422' : 'transparent',
              border: `1px solid ${path === p ? 'var(--amber)' : 'var(--border)'}`,
              color: path === p ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5,
            }}>
            {p === 'direct' ? 'straight path' : 'curved path'}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 12, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 300 }}>
        ∫ₐᵇ E·dl is identical for both paths — it depends only on the endpoints a and b, not the route taken.
      </p>
    </div>
  );
}
