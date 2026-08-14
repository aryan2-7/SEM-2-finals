import { useState } from 'react';

type Dist = 'line' | 'surface' | 'volume';

export default function ContinuousDistViz() {
  const [dist, setDist] = useState<Dist>('line');
  const [density, setDensity] = useState(0.6);

  const nElements = Math.round(4 + density * 14);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 360 200" style={{ width: '100%', maxWidth: 360 }}>
        {dist === 'line' && (
          <>
            <line x1={40} y1={100} x2={320} y2={100} stroke="#4a5268" strokeWidth={1} />
            {Array.from({ length: nElements }).map((_, i) => {
              const x = 40 + (i / (nElements - 1)) * 280;
              return <circle key={i} cx={x} cy={100} r={3.5} fill="#5b8def" opacity={0.85} />;
            })}
            <text x={180} y={130} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">λ = dq/dl′ (C/m)</text>
          </>
        )}
        {dist === 'surface' && (
          <>
            <rect x={80} y={50} width={200} height={100} fill="#5b8def11" stroke="#5b8def" strokeWidth={1} />
            {Array.from({ length: nElements }).map((_, i) => {
              const cols = Math.ceil(Math.sqrt(nElements));
              const r = Math.floor(i / cols), c = i % cols;
              const x = 95 + c * (170 / cols);
              const y = 65 + r * (70 / Math.ceil(nElements / cols));
              return <circle key={i} cx={x} cy={y} r={3} fill="#5b8def" opacity={0.8} />;
            })}
            <text x={180} y={170} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">σ = dq/da′ (C/m²)</text>
          </>
        )}
        {dist === 'volume' && (
          <>
            <circle cx={180} cy={100} r={70} fill="#5b8def11" stroke="#5b8def" strokeWidth={1} />
            {Array.from({ length: nElements }).map((_, i) => {
              const a = (i * 137.5 * Math.PI) / 180; // golden-angle spiral fill
              const r = 65 * Math.sqrt(i / nElements);
              return <circle key={i} cx={180 + r * Math.cos(a)} cy={100 + r * Math.sin(a)} r={2.5} fill="#5b8def" opacity={0.8} />;
            })}
            <text x={180} y={185} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">ρ = dq/dτ′ (C/m³)</text>
          </>
        )}
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['line', 'surface', 'volume'] as Dist[]).map(d => (
          <button key={d} onClick={() => setDist(d)}
            style={{
              background: dist === d ? '#5b8def22' : 'transparent',
              border: `1px solid ${dist === d ? 'var(--field)' : 'var(--border)'}`,
              color: dist === d ? 'var(--field)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}>
            {d}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 300 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>density</span>
        <input type="range" min={0.1} max={1} step={0.05} value={density} onChange={e => setDensity(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
      </div>
    </div>
  );
}
