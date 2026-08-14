import { useState } from 'react';

export default function FluxViz() {
  const [tilt, setTilt] = useState(0);
  const rad = (tilt * Math.PI) / 180;
  const flux = Math.cos(rad);

  const cx = 160, cy = 110, w = 70, h = 90;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 220" style={{ width: '100%', maxWidth: 320 }}>
        {/* B field lines, always horizontal */}
        {[40, 70, 100, 130, 160].map(y => (
          <line key={y} x1={20} y1={y} x2={300} y2={y} stroke="#5b8def44" strokeWidth={1.3} markerEnd="url(#fluxArrow)" />
        ))}
        <defs>
          <marker id="fluxArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#5b8def66" />
          </marker>
        </defs>

        {/* tilted surface, represented as a squashed ellipse to fake perspective */}
        <ellipse cx={cx} cy={cy} rx={w * Math.max(0.08, Math.abs(Math.cos(rad)))} ry={h / 2} fill="#f2b54433" stroke="#f2b544" strokeWidth={2.5} />

        {/* normal vector */}
        <line x1={cx} y1={cy} x2={cx + 60 * Math.sin(rad)} y2={cy - 60 * Math.cos(rad)} stroke="#59c98e" strokeWidth={2.5} markerEnd="url(#fluxArrowN)" />
        <text x={cx + 68 * Math.sin(rad)} y={cy - 68 * Math.cos(rad)} fontSize={10} fill="#59c98e" textAnchor="middle" fontFamily="var(--mono)">n̂</text>
        <defs>
          <marker id="fluxArrowN" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#59c98e" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>tilt angle</span>
        <input type="range" min={0} max={90} value={tilt} onChange={e => setTilt(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)', width: 36 }}>{tilt}°</span>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--green)' }}>
        Φₘ = B·S·cosθ → relative flux ≈ {flux.toFixed(2)}
      </div>
    </div>
  );
}
