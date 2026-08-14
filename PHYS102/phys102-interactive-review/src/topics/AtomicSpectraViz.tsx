import { useState } from 'react';

type Series = 'lyman' | 'balmer' | 'paschen';

const seriesInfo: Record<Series, { nl: number; color: string; region: string }> = {
  lyman: { nl: 1, color: '#a970ff', region: 'ultraviolet' },
  balmer: { nl: 2, color: '#5b8def', region: 'visible' },
  paschen: { nl: 3, color: '#ef5b6f', region: 'infrared' },
};

const R = 1.097e7; // m^-1

function wavelengthNm(nl: number, nu: number) {
  const invLambda = R * (1 / (nl * nl) - 1 / (nu * nu));
  return (1 / invLambda) * 1e9;
}

export default function AtomicSpectraViz() {
  const [series, setSeries] = useState<Series>('balmer');
  const { nl, color, region } = seriesInfo[series];
  const levels = [1, 2, 3, 4, 5, 6];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: 400 }}>
        {levels.map((n, i) => {
          const y = 220 - i * 34;
          return (
            <g key={n}>
              <line x1={40} y1={y} x2={200} y2={y} stroke={n === nl ? color : '#4a5268'} strokeWidth={n === nl ? 2.5 : 1.3} />
              <text x={30} y={y + 4} fontSize={10} fill="#7b8299" textAnchor="end" fontFamily="var(--mono)">n={n}</text>
            </g>
          );
        })}
        {levels.filter(n => n > nl).map((nu, i) => {
          const yUpper = 220 - (nu - 1) * 34;
          const yLower = 220 - (nl - 1) * 34;
          const x = 90 + i * 18;
          return (
            <line key={nu} x1={x} y1={yLower} x2={x} y2={yUpper} stroke={color} strokeWidth={1.5} markerEnd="url(#specArrow)" opacity={0.8} />
          );
        })}
        <defs>
          <marker id="specArrow" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto">
            <path d="M0,5 L3,0 L6,5 Z" fill={color} />
          </marker>
        </defs>

        {/* spectrum bar */}
        <rect x={230} y={20} width={140} height={180} fill="#0e1219" stroke="#262c3d" />
        {levels.filter(n => n > nl).map((nu) => {
          const lambda = wavelengthNm(nl, nu);
          // map wavelength to a vertical position in the bar (rough, just for visual spread)
          const norm = Math.max(0, Math.min(1, (lambda - 90) / 1800));
          const y = 20 + norm * 180;
          return <line key={nu} x1={230} y1={y} x2={370} y2={y} stroke={color} strokeWidth={2} opacity={0.85} />;
        })}
        <text x={300} y={212} fontSize={10} fill={color} textAnchor="middle" fontFamily="var(--mono)">{region}</text>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['lyman', 'balmer', 'paschen'] as Series[]).map(s => (
          <button key={s} onClick={() => setSeries(s)}
            style={{
              background: series === s ? `${seriesInfo[s].color}22` : 'transparent',
              border: `1px solid ${series === s ? seriesInfo[s].color : 'var(--border)'}`,
              color: series === s ? seriesInfo[s].color : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}>
            {s} (n_l={seriesInfo[s].nl})
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)' }}>
        {series === 'balmer' ? 'the only series with lines in the visible range — Hα, Hβ, Hγ...' : `falls entirely in the ${region}`}
      </p>
    </div>
  );
}
