import { useState } from 'react';

export default function QValueViz() {
  const [theta, setTheta] = useState(60); // emission angle
  const phi = 180 - theta * 0.6; // rough illustrative recoil angle relationship

  const rad = (theta * Math.PI) / 180;
  const phiRad = (phi * Math.PI) / 180;
  const cx = 90, cy = 130;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 380 220" style={{ width: '100%', maxWidth: 380 }}>
        {/* target at rest */}
        <circle cx={cx} cy={cy} r={6} fill="#5b8def" />
        <text x={cx} y={cy - 14} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">X (at rest)</text>

        {/* projectile incoming */}
        <line x1={10} y1={cy} x2={cx - 8} y2={cy} stroke="#f2b544" strokeWidth={2.5} markerEnd="url(#qArrow)" />
        <text x={30} y={cy - 8} fontSize={10} fill="#f2b544" fontFamily="var(--mono)">x</text>

        {/* emitted particle y at angle theta */}
        <line x1={cx} y1={cy} x2={cx + 140 * Math.cos(rad)} y2={cy + 140 * Math.sin(rad)} stroke="#ef5b6f" strokeWidth={2.5} markerEnd="url(#qArrowR)" />
        <text x={cx + 150 * Math.cos(rad)} y={cy + 150 * Math.sin(rad)} fontSize={10} fill="#ef5b6f" fontFamily="var(--mono)">y (θ)</text>

        {/* recoil Y at angle phi (opposite side) */}
        <line x1={cx} y1={cy} x2={cx + 110 * Math.cos(-phiRad)} y2={cy + 110 * Math.sin(-phiRad)} stroke="#59c98e" strokeWidth={2.5} markerEnd="url(#qArrowG)" />
        <text x={cx + 120 * Math.cos(-phiRad)} y={cy + 120 * Math.sin(-phiRad) - 6} fontSize={10} fill="#59c98e" fontFamily="var(--mono)">Y (φ)</text>

        <defs>
          <marker id="qArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" /></marker>
          <marker id="qArrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef5b6f" /></marker>
          <marker id="qArrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#59c98e" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 320 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>emission angle θ</span>
        <input type="range" min={10} max={150} value={theta} onChange={e => setTheta(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)', width: 36 }}>{theta}°</span>
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 320 }}>
        momentum conservation along and perpendicular to the beam axis links θ and the recoil angle φ — this
        geometric relationship is what lets Q be extracted from purely measured energies and angles.
      </p>
    </div>
  );
}
