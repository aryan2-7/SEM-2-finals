import { useMemo, useState } from 'react';

type Case = 'wire' | 'solenoid' | 'cylinder';

const SOLENOID_RADIUS = 50; // wire/solenoid radius reference

function fieldB(radius: number, c: Case, a = SOLENOID_RADIUS) {
  if (c === 'wire') return radius < 3 ? 0 : 1 / radius;
  if (c === 'solenoid') return radius < a ? 1 : 0;
  // cylinder, uniform surface current: 0 inside, 1/r outside
  return radius < a ? 0 : a / radius;
}

export default function AmpereLawViz() {
  const [c, setC] = useState<Case>('wire');
  const [r, setR] = useState(60);
  const a = SOLENOID_RADIUS;

  const points = useMemo(() => {
    const pts = [];
    for (let rad = 2; rad <= 140; rad += 2) pts.push({ rad, b: fieldB(rad, c, a) });
    return pts;
  }, [c, a]);

  const maxB = Math.max(...points.map(p => p.b), 0.01);
  const plotX = (rad: number) => 40 + (rad / 140) * 200;
  const plotY = (b: number) => 190 - (b / maxB) * 150;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.rad).toFixed(1)},${plotY(p.b).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        <svg viewBox="0 0 180 200" style={{ width: 180, height: 200 }}>
          {c === 'wire' && <circle cx={90} cy={100} r={3} fill="#f2b544" />}
          {c !== 'wire' && <circle cx={90} cy={100} r={a} fill="#f2b54422" stroke="#f2b544" strokeWidth={2} />}
          <circle cx={90} cy={100} r={r} fill="none" stroke="#5b8def" strokeWidth={1.5} strokeDasharray="4 3" />
          <text x={90} y={195} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">Amperian loop, r={r}</text>
        </svg>
        <svg viewBox="0 0 260 210" style={{ width: 260, height: 210 }}>
          <line x1={40} y1={190} x2={250} y2={190} stroke="#262c3d" strokeWidth={1} />
          <line x1={40} y1={20} x2={40} y2={190} stroke="#262c3d" strokeWidth={1} />
          <text x={255} y={194} fontSize={10} fill="#7b8299">r</text>
          <text x={30} y={22} fontSize={10} fill="#7b8299">B</text>
          <line x1={plotX(a)} y1={20} x2={plotX(a)} y2={190} stroke="#3a4256" strokeDasharray="3 2" />
          <text x={plotX(a)} y={200} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">a</text>
          <path d={pathD} fill="none" stroke="#59c98e" strokeWidth={2} />
          <circle cx={plotX(r)} cy={plotY(fieldB(r, c, a))} r={4} fill="#5b8def" />
        </svg>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['wire', 'solenoid', 'cylinder'] as Case[]).map(cc => (
          <button key={cc} onClick={() => setC(cc)}
            style={{
              background: c === cc ? '#f2b54422' : 'transparent',
              border: `1px solid ${c === cc ? 'var(--amber)' : 'var(--border)'}`,
              color: c === cc ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 12px', fontSize: 12,
            }}>
            {cc === 'wire' ? 'straight wire' : cc === 'solenoid' ? 'long solenoid' : 'cylindrical wire (surface I)'}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 380 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>loop radius r</span>
        <input type="range" min={5} max={140} value={r} onChange={e => setR(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
      </div>
    </div>
  );
}
