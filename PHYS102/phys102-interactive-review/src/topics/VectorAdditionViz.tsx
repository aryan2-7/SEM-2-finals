import { useState } from 'react';

export default function VectorAdditionViz() {
  const [angleA, setAngleA] = useState(20);
  const [angleB, setAngleB] = useState(70);
  const [scalar, setScalar] = useState(1);
  const magA = 80, magB = 65;

  const radA = (angleA * Math.PI) / 180;
  const radB = (angleB * Math.PI) / 180;
  const cx = 130, cy = 150;

  const ax = magA * scalar * Math.cos(radA), ay = -magA * scalar * Math.sin(radA);
  const bx = magB * Math.cos(radB), by = -magB * Math.sin(radB);
  const rx = ax + bx, ry = ay + by;
  const resultMag = Math.sqrt(rx * rx + ry * ry);
  const resultAngle = (Math.atan2(-ry, rx) * 180) / Math.PI;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 220" style={{ width: '100%', maxWidth: 320 }}>
        {/* A */}
        <line x1={cx} y1={cy} x2={cx + ax} y2={cy + ay} stroke="#5b8def" strokeWidth={2.5} markerEnd="url(#vaArrow)" />
        <text x={cx + ax + 6} y={cy + ay} fontSize={10} fill="#5b8def" fontFamily="var(--mono)">{scalar !== 1 ? `${scalar}A` : 'A'}</text>
        {/* B, drawn head-to-tail from tip of A */}
        <line x1={cx + ax} y1={cy + ay} x2={cx + ax + bx} y2={cy + ay + by} stroke="#ef5b6f" strokeWidth={2.5} markerEnd="url(#vaArrowB)" />
        <text x={cx + ax + bx + 6} y={cy + ay + by} fontSize={10} fill="#ef5b6f" fontFamily="var(--mono)">B</text>
        {/* resultant */}
        <line x1={cx} y1={cy} x2={cx + rx} y2={cy + ry} stroke="#f2b544" strokeWidth={3} markerEnd="url(#vaArrowR)" strokeDasharray="0" />
        <text x={cx + rx + 6} y={cy + ry - 6} fontSize={11} fill="#f2b544" fontFamily="var(--mono)">R</text>

        <defs>
          <marker id="vaArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b8def" /></marker>
          <marker id="vaArrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef5b6f" /></marker>
          <marker id="vaArrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 320 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 70 }}>angle A</span>
          <input type="range" min={0} max={180} value={angleA} onChange={e => setAngleA(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 70 }}>angle B</span>
          <input type="range" min={0} max={180} value={angleB} onChange={e => setAngleB(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 70 }}>scalar × A</span>
          <input type="range" min={-2} max={2} step={0.1} value={scalar} onChange={e => setScalar(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, width: 28 }}>{scalar.toFixed(1)}</span>
        </div>
      </div>

      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        |R| ≈ {resultMag.toFixed(1)} at {resultAngle.toFixed(0)}°
      </div>
    </div>
  );
}
