import { useState } from 'react';

export default function DotProductViz() {
  const [angle, setAngle] = useState(50);
  const rad = (angle * Math.PI) / 180;
  const A = 90, B = 70;
  const cx = 60, cy = 150;

  const ax = cx + A, ay = cy;
  const bx = cx + B * Math.cos(rad), by = cy - B * Math.sin(rad);
  const projLen = B * Math.cos(rad);
  const dot = A * B * Math.cos(rad);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 320 }}>
        {/* projection of B onto A */}
        <line x1={cx} y1={cy} x2={cx + projLen} y2={cy} stroke="#59c98e" strokeWidth={4} opacity={0.6} />
        <line x1={bx} y1={by} x2={cx + projLen} y2={cy} stroke="#59c98e" strokeWidth={1} strokeDasharray="3 2" />

        {/* vector A */}
        <line x1={cx} y1={cy} x2={ax} y2={ay} stroke="#5b8def" strokeWidth={2.5} markerEnd="url(#dpArrow)" />
        <text x={ax + 6} y={ay + 4} fontSize={11} fill="#5b8def" fontFamily="var(--mono)">A</text>

        {/* vector B */}
        <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#ef5b6f" strokeWidth={2.5} markerEnd="url(#dpArrowR)" />
        <text x={bx + 6} y={by - 4} fontSize={11} fill="#ef5b6f" fontFamily="var(--mono)">B</text>

        {/* angle arc */}
        <path d={`M ${cx + 20} ${cy} A 20 20 0 0 0 ${cx + 20 * Math.cos(rad)} ${cy - 20 * Math.sin(rad)}`} fill="none" stroke="#7b8299" strokeWidth={1} />

        <defs>
          <marker id="dpArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b8def" /></marker>
          <marker id="dpArrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef5b6f" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 320 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>θ</span>
        <input type="range" min={0} max={180} value={angle} onChange={e => setAngle(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)', width: 36 }}>{angle}°</span>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--green)' }}>
        A·B = |A||B|cosθ ≈ {dot.toFixed(1)} &nbsp;·&nbsp; projection of B on A ≈ {projLen.toFixed(1)}
      </div>
    </div>
  );
}
