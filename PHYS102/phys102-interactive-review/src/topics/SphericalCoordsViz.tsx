import { useState } from 'react';

export default function SphericalCoordsViz() {
  const [theta, setTheta] = useState(50);
  const [phi, setPhi] = useState(40);
  const r = 70;

  const thetaRad = (theta * Math.PI) / 180;
  const phiRad = (phi * Math.PI) / 180;

  const cx = 160, cy = 120;
  // simple isometric-ish projection
  function project(x: number, y: number, z: number) {
    return [cx + x - z * 0.4, cy - y * 0.85 - z * 0.25];
  }

  const px = r * Math.sin(thetaRad) * Math.cos(phiRad);
  const py = r * Math.sin(thetaRad) * Math.sin(phiRad);
  const pz = r * Math.cos(thetaRad);
  const [sx, sy] = project(px, py, pz);
  const [ox, oy] = project(0, 0, 0);
  const [zx, zy] = project(0, 0, r + 20);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 240" style={{ width: '100%', maxWidth: 320 }}>
        {/* sphere outline */}
        <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.9} fill="none" stroke="#3a4256" strokeWidth={1} strokeDasharray="3 2" />
        {/* z axis */}
        <line x1={ox} y1={oy} x2={zx} y2={zy} stroke="#4a5268" strokeWidth={1} />
        <text x={zx + 4} y={zy} fontSize={9} fill="#7b8299" fontFamily="var(--mono)">z</text>

        {/* radius vector */}
        <line x1={ox} y1={oy} x2={sx} y2={sy} stroke="#f2b544" strokeWidth={2.5} markerEnd="url(#scArrow)" />
        <text x={sx + 6} y={sy} fontSize={10} fill="#f2b544" fontFamily="var(--mono)">r</text>

        {/* theta arc, from z axis to r */}
        <path d={`M ${ox} ${oy - 30} A 30 30 0 0 1 ${ox + 30 * Math.sin(thetaRad)} ${oy - 30 * Math.cos(thetaRad)}`} fill="none" stroke="#5b8def" strokeWidth={1.3} />
        <text x={ox + 8} y={oy - 20} fontSize={9} fill="#5b8def" fontFamily="var(--mono)">θ</text>

        <circle cx={ox} cy={oy} r={3} fill="#c7cbd6" />
        <circle cx={sx} cy={sy} r={5} fill="#ef5b6f" />

        <text x={160} y={228} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">
          P(r={r}, θ={theta}°, φ={phi}°)
        </text>

        <defs>
          <marker id="scArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 280 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 50 }}>θ (polar)</span>
          <input type="range" min={0} max={180} value={theta} onChange={e => setTheta(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 50 }}>φ (azimuth)</span>
          <input type="range" min={0} max={360} value={phi} onChange={e => setPhi(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
        </div>
      </div>
    </div>
  );
}
