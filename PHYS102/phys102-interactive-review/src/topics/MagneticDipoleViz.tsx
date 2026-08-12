import { useState } from 'react';

export default function MagneticDipoleViz() {
  const [theta, setTheta] = useState(50);
  const rad = (theta * Math.PI) / 180;
  const U = -Math.cos(rad);
  const torque = Math.sin(rad);

  const cx = 130, cy = 120, rx = 55, ry = 20;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 220" style={{ width: '100%', maxWidth: 400 }}>
        {/* uniform B field lines */}
        {[50, 90, 130, 170].map(y => (
          <line key={y} x1={20} y1={y} x2={250} y2={y} stroke="#ef5b6f33" strokeWidth={1.5} markerEnd="url(#mdArrow)" />
        ))}
        <defs>
          <marker id="mdArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#ef5b6f66" />
          </marker>
        </defs>
        <text x={135} y={205} fontSize={10} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">uniform B field →</text>

        {/* current loop tilted by theta (viewed edge-on-ish via squash) */}
        <g transform={`translate(${cx},${cy}) rotate(${-theta})`}>
          <ellipse cx={0} cy={0} rx={rx} ry={ry} fill="#f2b54422" stroke="#f2b544" strokeWidth={2.5} />
          <circle cx={rx} cy={0} r={3} fill="#f2b544" />
          <line x1={0} y1={0} x2={0} y2={-70} stroke="#5b8def" strokeWidth={2.5} markerEnd="url(#mArrow)" />
          <text x={8} y={-70} fontSize={11} fill="#5b8def" fontFamily="var(--mono)">m</text>
        </g>
        <defs>
          <marker id="mArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#5b8def" />
          </marker>
        </defs>

        {/* U(theta) mini plot */}
        <line x1={280} y1={120} x2={390} y2={120} stroke="#262c3d" strokeWidth={1} />
        <line x1={280} y1={60} x2={280} y2={180} stroke="#262c3d" strokeWidth={1} />
        <path d={Array.from({ length: 73 }).map((_, i) => {
          const tt = (i / 72) * 360;
          const r = (tt * Math.PI) / 180;
          const u = -Math.cos(r);
          const x = 280 + (tt / 360) * 110;
          const y = 120 - u * 50;
          return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' ')} fill="none" stroke="#59c98e" strokeWidth={2} />
        <circle cx={280 + (theta / 360) * 110} cy={120 - U * 50} r={4} fill="#f2b544" />
        <text x={335} y={195} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">U(θ)</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 340 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>θ</span>
        <input type="range" min={0} max={360} value={theta} onChange={e => setTheta(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)', width: 40 }}>{theta}°</span>
      </div>
      <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--mono)', fontSize: 12.5 }}>
        <span style={{ color: 'var(--signal)' }}>|τ|/mB = {torque.toFixed(2)}</span>
        <span style={{ color: 'var(--green)' }}>U/mB = {U.toFixed(2)}</span>
      </div>
    </div>
  );
}
