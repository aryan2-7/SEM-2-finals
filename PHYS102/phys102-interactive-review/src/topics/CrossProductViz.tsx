import { useState } from 'react';

export default function CrossProductViz() {
  const [angle, setAngle] = useState(60);
  const rad = (angle * Math.PI) / 180;
  const A = 90, B = 75;
  const cx = 90, cy = 130;

  const ax = cx + A, ay = cy;
  const bx = cx + B * Math.cos(rad), by = cy - B * Math.sin(rad);
  const px = ax + (bx - cx), py = ay + (by - cy);

  const area = A * B * Math.sin(rad);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 300 220" style={{ width: '100%', maxWidth: 320 }}>
        {/* parallelogram */}
        <polygon points={`${cx},${cy} ${ax},${ay} ${px},${py} ${bx},${by}`} fill="#f2b54422" stroke="#f2b54466" strokeWidth={1} />

        <line x1={cx} y1={cy} x2={ax} y2={ay} stroke="#5b8def" strokeWidth={2.5} markerEnd="url(#cpArrowA)" />
        <text x={ax + 6} y={ay + 4} fontSize={11} fill="#5b8def" fontFamily="var(--mono)">A</text>
        <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#ef5b6f" strokeWidth={2.5} markerEnd="url(#cpArrowB)" />
        <text x={bx + 6} y={by - 4} fontSize={11} fill="#ef5b6f" fontFamily="var(--mono)">B</text>

        {/* A x B out of page indicator (right-hand rule) */}
        <circle cx={cx} cy={cy} r={10} fill="none" stroke="#59c98e" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={2.5} fill="#59c98e" />
        <text x={cx - 40} y={cy - 16} fontSize={10} fill="#59c98e" fontFamily="var(--mono)">A×B out of page</text>

        <defs>
          <marker id="cpArrowA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b8def" /></marker>
          <marker id="cpArrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef5b6f" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 320 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>θ</span>
        <input type="range" min={5} max={175} value={angle} onChange={e => setAngle(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)', width: 36 }}>{angle}°</span>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        |A×B| = |A||B|sinθ ≈ {area.toFixed(1)} = parallelogram area
      </div>
    </div>
  );
}
