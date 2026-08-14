import { useMemo, useState } from 'react';

export default function VectorPotentialViz() {
  const [r, setR] = useState(50);
  const R = 55;

  function A(radius: number) {
    return radius < R ? radius / R : R / radius;
  }

  const points = useMemo(() => {
    const pts = [];
    for (let rad = 2; rad <= 140; rad += 2) pts.push({ rad, a: A(rad) });
    return pts;
  }, []);

  const plotX = (rad: number) => 40 + (rad / 140) * 200;
  const plotY = (a: number) => 170 - a * 130;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.rad).toFixed(1)},${plotY(p.a).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        <svg viewBox="0 0 160 180" style={{ width: 160, height: 180 }}>
          <circle cx={80} cy={90} r={R} fill="#f2b54422" stroke="#f2b544" strokeWidth={2} />
          <circle cx={80} cy={90} r={r} fill="none" stroke="#5b8def" strokeWidth={1.5} strokeDasharray="4 3" />
          <text x={80} y={175} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">solenoid radius R, field point r</text>
        </svg>
        <svg viewBox="0 0 260 190" style={{ width: 260, height: 190 }}>
          <line x1={40} y1={170} x2={250} y2={170} stroke="#262c3d" strokeWidth={1} />
          <line x1={40} y1={20} x2={40} y2={170} stroke="#262c3d" strokeWidth={1} />
          <text x={255} y={174} fontSize={10} fill="#7b8299">r</text>
          <text x={30} y={22} fontSize={10} fill="#7b8299">A</text>
          <line x1={plotX(R)} y1={20} x2={plotX(R)} y2={170} stroke="#3a4256" strokeDasharray="3 2" />
          <text x={plotX(R)} y={182} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">R</text>
          <path d={pathD} fill="none" stroke="#59c98e" strokeWidth={2} />
          <circle cx={plotX(r)} cy={plotY(A(r))} r={4} fill="#5b8def" />
        </svg>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 300 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>r</span>
        <input type="range" min={5} max={140} value={r} onChange={e => setR(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)' }}>A grows linearly inside, falls as 1/r outside — even though B=0 outside the solenoid</p>
    </div>
  );
}
