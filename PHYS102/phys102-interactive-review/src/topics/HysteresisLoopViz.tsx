import { useMemo, useState } from 'react';

// Parametric hysteresis loop traced as t in [0, 1) goes around O->A->B->C->D->E->F->A
function loopPoint(t: number, Hmax = 1, Bmax = 1, Hc = 0.4) {
  // Use a smooth tanh-based loop shape traced by angle-like parameter
  const theta = t * 2 * Math.PI;
  // upper branch (saturating from -Hmax to +Hmax) then lower branch back
  const upper = t < 0.5;
  const s = upper ? t * 2 : (t - 0.5) * 2; // 0..1 within each branch
  const H = upper ? -Hmax + 2 * Hmax * s : Hmax - 2 * Hmax * s;
  // sigmoid-like B response offset by coercivity to create loop opening
  const raw = Math.tanh(2.2 * (H + (upper ? Hc * 0.5 : -Hc * 0.5)));
  const B = Bmax * raw * 0.9 + (upper ? -0.02 : 0.02);
  return { H, B: Math.max(-Bmax, Math.min(Bmax, B)), theta };
}

const labeledPoints = [
  { t: 0.001, label: 'O', desc: 'origin — unmagnetized' },
  { t: 0.25, label: 'A', desc: 'saturation (+M_max)' },
  { t: 0.5, label: 'B', desc: 'retentivity (H=0, B=Br)' },
  { t: 0.62, label: 'C', desc: 'coercivity (B=0, H=−Hc)' },
  { t: 0.75, label: 'D', desc: 'saturation (−M_max)' },
  { t: 0.87, label: 'E', desc: 'B = −Br at H=0' },
  { t: 0.97, label: 'F', desc: 'coercivity (B=0, H=+Hc)' },
];

export default function HysteresisLoopViz() {
  const [t, setT] = useState(0);
  const [material, setMaterial] = useState<'soft' | 'hard'>('hard');

  const Hc = material === 'hard' ? 0.55 : 0.15;
  const Br = material === 'hard' ? 0.6 : 0.35;

  const pathPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 200; i++) {
      pts.push(loopPoint(i / 200, 1, 1, Hc));
    }
    return pts;
  }, [Hc]);

  const toSvg = (H: number, B: number) => ({ x: 240 + H * 170, y: 180 - B * 130 });

  const current = loopPoint(t, 1, 1, Hc);
  const curSvg = toSvg(current.H, current.B);

  const pathD = pathPoints.map((p, i) => {
    const { x, y } = toSvg(p.H, p.B);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 480 300" style={{ width: '100%', maxWidth: 480 }}>
        {/* axes */}
        <line x1={240} y1={20} x2={240} y2={280} stroke="#262c3d" strokeWidth={1} />
        <line x1={70} y1={180} x2={410} y2={180} stroke="#262c3d" strokeWidth={1} />
        <text x={415} y={184} fontSize={11} fill="#7b8299">H</text>
        <text x={244} y={26} fontSize={11} fill="#7b8299">B</text>

        {/* loop */}
        <path d={pathD} fill="none" stroke="#f2b544" strokeWidth={2} opacity={0.85} />

        {/* labeled points */}
        {labeledPoints.map(lp => {
          const p = loopPoint(lp.t, 1, 1, Hc);
          const { x, y } = toSvg(p.H, p.B);
          return (
            <g key={lp.label}>
              <circle cx={x} cy={y} r={3.5} fill="#5b8def" />
              <text x={x + 8} y={y - 6} fontSize={11} fill="#c7cbd6" fontFamily="var(--mono)">{lp.label}</text>
            </g>
          );
        })}

        {/* moving marker */}
        <circle cx={curSvg.x} cy={curSvg.y} r={6} fill="#ef5b6f" stroke="#0b0e14" strokeWidth={1.5} />
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 460 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>cycle</span>
        <input type="range" min={0} max={0.999} step={0.001} value={t} onChange={e => setT(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['soft', 'hard'] as const).map(m => (
          <button key={m} onClick={() => setMaterial(m)}
            style={{
              background: material === m ? '#ef5b6f22' : 'transparent',
              border: `1px solid ${material === m ? '#ef5b6f' : 'var(--border)'}`,
              color: material === m ? '#ef5b6f' : 'var(--text-dim)',
              borderRadius: 6, padding: '5px 12px', fontSize: 12,
            }}>
            {m === 'soft' ? 'soft magnetic (thin loop)' : 'hard magnetic (wide loop)'}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 12, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 400 }}>
        H_c = {Hc.toFixed(2)} (coercivity), B_r = {Br.toFixed(2)} (retentivity) — {material === 'hard' ? 'hard materials retain magnetization strongly, used in permanent magnets' : 'soft materials demagnetize easily, used in transformer cores'}
      </p>
    </div>
  );
}
