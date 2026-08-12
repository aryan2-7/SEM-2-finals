import { useMemo, useState } from 'react';

export default function RLCircuitViz() {
  const [R, setR] = useState(4); // ohms
  const [L, setL] = useState(2); // henries
  const E0 = 10; // volts, fixed

  const tau = L / R;
  const Imax = E0 / R;

  const points = useMemo(() => {
    const pts = [];
    const tMax = tau * 5;
    for (let i = 0; i <= 100; i++) {
      const t = (i / 100) * tMax;
      const I = Imax * (1 - Math.exp((-R / L) * t));
      pts.push({ t, I });
    }
    return pts;
  }, [R, L, Imax]);

  const tMax = tau * 5;
  const plotX = (t: number) => 50 + (t / tMax) * 300;
  const plotY = (I: number) => 190 - (I / Imax) * 150;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.t).toFixed(1)},${plotY(p.I).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 220" style={{ width: '100%', maxWidth: 400 }}>
        <line x1={50} y1={190} x2={370} y2={190} stroke="#262c3d" strokeWidth={1} />
        <line x1={50} y1={20} x2={50} y2={190} stroke="#262c3d" strokeWidth={1} />
        <text x={375} y={194} fontSize={10} fill="#7b8299">t</text>
        <text x={38} y={22} fontSize={10} fill="#7b8299">I</text>

        {/* asymptote at Imax */}
        <line x1={50} y1={plotY(Imax)} x2={370} y2={plotY(Imax)} stroke="#3a4256" strokeDasharray="3 2" />
        <text x={375} y={plotY(Imax) + 4} fontSize={9} fill="#7b8299" fontFamily="var(--mono)">ε₀/R</text>

        {/* tau marker */}
        <line x1={plotX(tau)} y1={20} x2={plotX(tau)} y2={190} stroke="#ef5b6f44" strokeDasharray="3 2" />
        <text x={plotX(tau)} y={205} fontSize={9} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">τ=L/R</text>

        <path d={pathD} fill="none" stroke="#5b8def" strokeWidth={2.5} />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 340 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 50 }}>R (Ω)</span>
          <input type="range" min={1} max={10} step={0.5} value={R} onChange={e => setR(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 30 }}>{R}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 50 }}>L (H)</span>
          <input type="range" min={0.5} max={6} step={0.5} value={L} onChange={e => setL(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 30 }}>{L}</span>
        </div>
      </div>

      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        τ = L/R = {tau.toFixed(2)} s &nbsp;·&nbsp; I_max = ε₀/R = {Imax.toFixed(2)} A
      </div>
    </div>
  );
}
