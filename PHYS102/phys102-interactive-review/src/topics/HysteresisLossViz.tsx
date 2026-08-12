import { useMemo, useState } from 'react';

export default function HysteresisLossViz() {
  const [width, setWidth] = useState(0.5); // controls Hc (loop width)
  const [height, setHeight] = useState(0.7); // controls Bmax (loop height)

  const points = useMemo(() => {
    const Hc = width, Bmax = height;
    const pts: { H: number; B: number }[] = [];
    for (let i = 0; i <= 200; i++) {
      const t = i / 200;
      const upper = t < 0.5;
      const s = upper ? t * 2 : (t - 0.5) * 2;
      const H = upper ? -1 + 2 * s : 1 - 2 * s;
      const raw = Math.tanh(2.2 * (H + (upper ? Hc * 0.5 : -Hc * 0.5)));
      const B = Bmax * raw * 0.9;
      pts.push({ H, B: Math.max(-Bmax, Math.min(Bmax, B)) });
    }
    return pts;
  }, [width, height]);

  // shoelace formula for enclosed area = energy per cycle per unit volume (arb. units)
  const area = useMemo(() => {
    let a = 0;
    for (let i = 0; i < points.length - 1; i++) {
      a += points[i].H * points[i + 1].B - points[i + 1].H * points[i].B;
    }
    return Math.abs(a / 2);
  }, [points]);

  const toSvg = (H: number, B: number) => ({ x: 240 + H * 170, y: 180 - B * 130 });
  const pathD = points.map((p, i) => {
    const { x, y } = toSvg(p.H, p.B);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 480 300" style={{ width: '100%', maxWidth: 480 }}>
        <line x1={240} y1={20} x2={240} y2={280} stroke="#262c3d" strokeWidth={1} />
        <line x1={70} y1={180} x2={410} y2={180} stroke="#262c3d" strokeWidth={1} />
        <text x={415} y={184} fontSize={11} fill="#7b8299">H</text>
        <text x={244} y={26} fontSize={11} fill="#7b8299">B</text>

        <path d={pathD} fill="#f2b54433" stroke="#f2b544" strokeWidth={2} />
        <text x={240} y={150} fontSize={12} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">
          shaded area = ∮ B dH
        </text>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 420 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 80 }}>loop width</span>
          <input type="range" min={0.1} max={0.9} step={0.02} value={width} onChange={e => setWidth(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 80 }}>loop height</span>
          <input type="range" min={0.2} max={1} step={0.02} value={height} onChange={e => setHeight(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        </div>
      </div>

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 8,
        padding: '10px 18px', fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--amber)',
      }}>
        energy per cycle per unit volume ≈ {area.toFixed(3)} (arb. units)
      </div>
    </div>
  );
}
