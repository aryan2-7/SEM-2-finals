import { useMemo, useState } from 'react';

type Config = 'point' | 'shell';

function potentialV(r: number, config: Config, Rshell: number) {
  if (config === 'point') return r < 3 ? 100 : 100 * (3 / r);
  // shell: constant inside, 1/r outside
  return r < Rshell ? 1 : Rshell / r;
}

export default function PotentialViz() {
  const [config, setConfig] = useState<Config>('shell');
  const Rshell = 50;

  const points = useMemo(() => {
    const pts = [];
    for (let r = 2; r <= 150; r += 2) pts.push({ r, v: potentialV(r, config, Rshell) });
    return pts;
  }, [config, Rshell]);

  const maxV = Math.max(...points.map(p => p.v));
  const plotX = (r: number) => 40 + (r / 150) * 220;
  const plotY = (v: number) => 190 - (v / maxV) * 150;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.r).toFixed(1)},${plotY(p.v).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 300 210" style={{ width: '100%', maxWidth: 300 }}>
        <line x1={40} y1={190} x2={270} y2={190} stroke="#262c3d" strokeWidth={1} />
        <line x1={40} y1={20} x2={40} y2={190} stroke="#262c3d" strokeWidth={1} />
        <text x={275} y={194} fontSize={10} fill="#7b8299">r</text>
        <text x={30} y={22} fontSize={10} fill="#7b8299">V</text>
        {config === 'shell' && (
          <>
            <line x1={plotX(Rshell)} y1={20} x2={plotX(Rshell)} y2={190} stroke="#3a4256" strokeDasharray="3 2" />
            <text x={plotX(Rshell)} y={200} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">R</text>
          </>
        )}
        <path d={pathD} fill="none" stroke="#59c98e" strokeWidth={2.5} />
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['point', 'shell'] as const).map(c => (
          <button key={c} onClick={() => setConfig(c)}
            style={{
              background: config === c ? '#59c98e22' : 'transparent',
              border: `1px solid ${config === c ? 'var(--green)' : 'var(--border)'}`,
              color: config === c ? 'var(--green)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5,
            }}>
            {c === 'point' ? 'point charge' : 'spherical shell'}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 280 }}>
        {config === 'shell' ? 'V is constant inside the shell (no field, so no work to move around) and falls as 1/r outside — unlike E, V does not jump to zero inside.' : 'V falls as 1/r everywhere, diverging only at the charge itself.'}
      </p>
    </div>
  );
}
