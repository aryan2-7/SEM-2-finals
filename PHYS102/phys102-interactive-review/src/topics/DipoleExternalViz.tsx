import { useState } from 'react';

export default function DipoleExternalViz() {
  const [theta, setTheta] = useState(45); // degrees

  const rad = (theta * Math.PI) / 180;
  const U = -Math.cos(rad); // normalized U/pE
  const torqueMag = Math.sin(rad); // normalized |τ|/pE

  const cx = 130, cy = 130, len = 55;
  const px = cx + len * Math.cos(rad - Math.PI / 2);
  const py = cy + len * Math.sin(rad - Math.PI / 2);
  const nx = cx - len * Math.cos(rad - Math.PI / 2);
  const ny = cy - len * Math.sin(rad - Math.PI / 2);

  const uCurvePoints = Array.from({ length: 73 }).map((_, i) => {
    const t = (i / 72) * 360;
    const r = (t * Math.PI) / 180;
    return { t, u: -Math.cos(r) };
  });
  const plotX = (t: number) => 230 + (t / 360) * 200;
  const plotY = (u: number) => 130 - u * 60;
  const pathD = uCurvePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.t).toFixed(1)},${plotY(p.u).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 460 260" style={{ width: '100%', maxWidth: 460 }}>
        {/* uniform field arrows in background */}
        {[60, 100, 140, 180, 220].map(y => (
          <line key={y} x1={20} y1={y} x2={230} y2={y} stroke="#5b8def33" strokeWidth={1.5} markerEnd="url(#eArrow)" />
        ))}
        <defs>
          <marker id="eArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#5b8def66" />
          </marker>
        </defs>
        <text x={125} y={245} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">uniform E field →</text>

        {/* dipole */}
        <line x1={nx} y1={ny} x2={px} y2={py} stroke="#f2b544" strokeWidth={3} />
        <circle cx={px} cy={py} r={7} fill="#5b8def" />
        <circle cx={nx} cy={ny} r={7} fill="#ef5b6f" />
        <text x={px + 12} y={py} fontSize={11} fill="#5b8def" fontFamily="var(--mono)">+q</text>
        <text x={nx - 22} y={ny} fontSize={11} fill="#ef5b6f" fontFamily="var(--mono)">−q</text>

        {/* U(theta) plot */}
        <line x1={230} y1={130} x2={440} y2={130} stroke="#262c3d" strokeWidth={1} />
        <line x1={230} y1={70} x2={230} y2={190} stroke="#262c3d" strokeWidth={1} />
        <path d={pathD} fill="none" stroke="#59c98e" strokeWidth={2} />
        <circle cx={plotX(theta)} cy={plotY(U)} r={4} fill="#f2b544" />
        <text x={335} y={205} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">θ (0° → 360°)</text>
        <text x={225} y={65} fontSize={10} fill="#7b8299" textAnchor="end" fontFamily="var(--mono)">U/pE</text>
        <text x={240} y={78} fontSize={9} fill="#59c98e" fontFamily="var(--mono)">stable (0°)</text>
        <text x={330} y={188} fontSize={9} fill="#ef5b6f" fontFamily="var(--mono)">unstable (180°)</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 380 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>θ</span>
        <input type="range" min={0} max={360} value={theta} onChange={e => setTheta(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)', width: 40 }}>{theta}°</span>
      </div>

      <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--mono)', fontSize: 12.5 }}>
        <span style={{ color: 'var(--signal)' }}>|τ|/pE = {torqueMag.toFixed(2)}</span>
        <span style={{ color: 'var(--green)' }}>U/pE = {U.toFixed(2)}</span>
      </div>
    </div>
  );
}
