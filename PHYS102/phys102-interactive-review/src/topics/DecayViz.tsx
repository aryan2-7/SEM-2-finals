import { useMemo, useState } from 'react';

export default function DecayViz() {
  const [lambda, setLambda] = useState(0.15);
  const N0 = 100;
  const tMax = 30;

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 150; i++) {
      const t = (i / 150) * tMax;
      pts.push({ t, N: N0 * Math.exp(-lambda * t) });
    }
    return pts;
  }, [lambda]);

  const halfLife = Math.log(2) / lambda;

  const plotX = (t: number) => 50 + (t / tMax) * 300;
  const plotY = (N: number) => 190 - (N / N0) * 150;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.t).toFixed(1)},${plotY(p.N).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 220" style={{ width: '100%', maxWidth: 400 }}>
        <line x1={50} y1={190} x2={370} y2={190} stroke="#262c3d" strokeWidth={1} />
        <line x1={50} y1={20} x2={50} y2={190} stroke="#262c3d" strokeWidth={1} />
        <text x={375} y={194} fontSize={10} fill="#7b8299">t</text>
        <text x={38} y={22} fontSize={10} fill="#7b8299">N</text>

        {/* half markers */}
        <line x1={50} y1={plotY(N0 / 2)} x2={370} y2={plotY(N0 / 2)} stroke="#3a4256" strokeDasharray="3 2" />
        <text x={375} y={plotY(N0 / 2) + 4} fontSize={9} fill="#7b8299" fontFamily="var(--mono)">N₀/2</text>
        {halfLife < tMax && (
          <>
            <line x1={plotX(halfLife)} y1={20} x2={plotX(halfLife)} y2={190} stroke="#59c98e44" strokeDasharray="3 2" />
            <text x={plotX(halfLife)} y={205} fontSize={9} fill="#59c98e" textAnchor="middle" fontFamily="var(--mono)">T½</text>
          </>
        )}

        <path d={pathD} fill="none" stroke="#59c98e" strokeWidth={2.5} />
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 340 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>decay constant λ</span>
        <input type="range" min={0.02} max={0.6} step={0.01} value={lambda} onChange={e => setLambda(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
      </div>

      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        λ = {lambda.toFixed(2)} &nbsp;·&nbsp; T½ = ln2/λ ≈ {halfLife.toFixed(2)}
      </div>
    </div>
  );
}
