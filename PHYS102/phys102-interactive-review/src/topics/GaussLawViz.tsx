import { useMemo, useState } from 'react';

type DistType = 'shell' | 'solid' | 'nonuniform';

function fieldE(radius: number, dist: DistType, R: number) {
  // normalized units, q or equivalent = 1
  if (dist === 'shell') {
    return radius < R ? 0 : 1 / (radius * radius) * (R * R);
  }
  if (dist === 'solid') {
    return radius < R ? radius / R : (R * R) / (radius * radius);
  }
  // nonuniform rho = kr
  return radius < R ? (radius * radius) / (R * R) : (R * R) / (radius * radius);
}

export default function GaussLawViz() {
  const [dist, setDist] = useState<DistType>('shell');
  const [r, setR] = useState(60);
  const R = 60; // charge boundary radius

  const curvePoints = useMemo(() => {
    const pts = [];
    for (let rad = 2; rad <= 140; rad += 2) {
      pts.push({ rad, e: fieldE(rad, dist, R) });
    }
    return pts;
  }, [dist, R]);

  const maxE = Math.max(...curvePoints.map(p => p.e));
  const plotX = (rad: number) => 40 + (rad / 140) * 200;
  const plotY = (e: number) => 190 - (e / maxE) * 150;

  const pathD = curvePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.rad).toFixed(1)},${plotY(p.e).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        {/* left: charge distribution + gaussian surface */}
        <svg viewBox="0 0 180 200" style={{ width: 180, height: 200 }}>
          <circle cx={90} cy={100} r={R} fill={dist === 'shell' ? 'none' : '#5b8def22'} stroke="#5b8def" strokeWidth={dist === 'shell' ? 3 : 1.5} />
          <circle cx={90} cy={100} r={r} fill="none" stroke="#f2b544" strokeWidth={1.5} strokeDasharray="4 3" />
          <circle cx={90} cy={100} r={2} fill="#c7cbd6" />
          <text x={90} y={195} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">Gaussian surface, r={r}</text>
        </svg>

        {/* right: E(r) plot */}
        <svg viewBox="0 0 260 210" style={{ width: 260, height: 210 }}>
          <line x1={40} y1={190} x2={250} y2={190} stroke="#262c3d" strokeWidth={1} />
          <line x1={40} y1={20} x2={40} y2={190} stroke="#262c3d" strokeWidth={1} />
          <text x={255} y={194} fontSize={10} fill="#7b8299">r</text>
          <text x={30} y={22} fontSize={10} fill="#7b8299">E</text>
          <line x1={plotX(R)} y1={20} x2={plotX(R)} y2={190} stroke="#3a4256" strokeDasharray="3 2" />
          <text x={plotX(R)} y={200} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">R</text>
          <path d={pathD} fill="none" stroke="#59c98e" strokeWidth={2} />
          <circle cx={plotX(r)} cy={plotY(fieldE(r, dist, R))} r={4} fill="#f2b544" />
        </svg>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['shell', 'solid', 'nonuniform'] as DistType[]).map(d => (
          <button key={d} onClick={() => setDist(d)}
            style={{
              background: dist === d ? '#5b8def22' : 'transparent',
              border: `1px solid ${dist === d ? 'var(--field)' : 'var(--border)'}`,
              color: dist === d ? 'var(--field)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 12px', fontSize: 12,
            }}>
            {d === 'shell' ? 'spherical shell' : d === 'solid' ? 'solid sphere (ρ const)' : 'non-uniform ρ=kr'}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 380 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>radius r</span>
        <input type="range" min={5} max={140} value={r} onChange={e => setR(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)' }}>{r < R ? 'inside' : 'outside'}</span>
      </div>
    </div>
  );
}
