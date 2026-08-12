import { useState } from 'react';

export default function SuperconductivityViz() {
  const [belowTc, setBelowTc] = useState(true);
  const [type, setType] = useState<'I' | 'II'>('I');
  const [T, setT] = useState(2);
  const Tc = 3.7, Hc0 = 1;

  const Hc = Hc0 * (1 - (T / Tc) ** 2);

  const tPoints = Array.from({ length: 40 }).map((_, i) => {
    const t = (i / 39) * Tc;
    return { t, h: Hc0 * (1 - (t / Tc) ** 2) };
  });
  const plotX = (t: number) => 40 + (t / Tc) * 180;
  const plotY = (h: number) => 150 - h * 110;
  const pathD = tPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.t).toFixed(1)},${plotY(p.h).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
        <svg viewBox="0 0 160 140" style={{ width: 160, height: 140 }}>
          <rect x={40} y={50} width={80} height={50} fill={belowTc ? '#0e1219' : '#5b8def11'} stroke="#5b8def" strokeWidth={1.5} rx={4} />
          {!belowTc && Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={20 + i * 20} y1={20} x2={20 + i * 20} y2={120} stroke="#5b8def77" strokeWidth={1.3} />
          ))}
          {belowTc && Array.from({ length: 6 }).map((_, i) => (
            <path key={i} d={`M ${20 + i * 20} 20 L ${20 + i * 20} 45 Q ${20 + i * 20 + (i < 3 ? -18 : 18)} 75 ${20 + i * 20} 105 L ${20 + i * 20} 120`}
              fill="none" stroke="#5b8def77" strokeWidth={1.3} />
          ))}
          <text x={80} y={135} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">{belowTc ? 'T < Tc: flux expelled' : 'T > Tc: flux penetrates'}</text>
        </svg>

        <svg viewBox="0 0 240 170" style={{ width: 240, height: 170 }}>
          <line x1={40} y1={150} x2={220} y2={150} stroke="#262c3d" strokeWidth={1} />
          <line x1={40} y1={30} x2={40} y2={150} stroke="#262c3d" strokeWidth={1} />
          <text x={225} y={154} fontSize={9} fill="#7b8299">T</text>
          <text x={30} y={32} fontSize={9} fill="#7b8299">H_c</text>
          <path d={pathD} fill="none" stroke="#59c98e" strokeWidth={2} />
          <circle cx={plotX(T)} cy={plotY(Math.max(0, Hc))} r={4} fill="#f2b544" />
          {type === 'II' && <line x1={40} y1={plotY(0.4)} x2={220} y2={plotY(0.4)} stroke="#ef5b6f" strokeDasharray="3 2" strokeWidth={1} />}
          {type === 'II' && <text x={225} y={plotY(0.4) + 3} fontSize={8} fill="#ef5b6f" textAnchor="start">Hc1</text>}
        </svg>
      </div>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
          <input type="checkbox" checked={belowTc} onChange={e => setBelowTc(e.target.checked)} />
          below T_c (superconducting)
        </label>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['I', 'II'] as const).map(t => (
            <button key={t} onClick={() => setType(t)}
              style={{
                background: type === t ? '#59c98e22' : 'transparent',
                border: `1px solid ${type === t ? 'var(--green)' : 'var(--border)'}`,
                color: type === t ? 'var(--green)' : 'var(--text-dim)',
                borderRadius: 6, padding: '5px 12px', fontSize: 12,
              }}>
              Type {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 300 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>T (K)</span>
        <input type="range" min={0} max={Tc} step={0.1} value={T} onChange={e => setT(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{T.toFixed(1)}</span>
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        H_c(T) = H_c(0)[1−(T/Tc)²] ≈ {Math.max(0, Hc).toFixed(2)}
      </div>
    </div>
  );
}
