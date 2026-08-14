import { useState } from 'react';

export default function DomainTheoryViz() {
  const [H, setH] = useState(0.3);

  const cols = 5, rows = 4;
  const cellW = 50, cellH = 40;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 300 }}>
        <rect x={20} y={20} width={250} height={160} fill="none" stroke="#3a4256" strokeWidth={1} />
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const cx = 20 + cellW / 2 + c * cellW;
            const cy = 20 + cellH / 2 + r * cellH;
            // domain "wins" over toward alignment based on H strength and a per-cell threshold
            const threshold = ((r * cols + c) % 7) / 7;
            const aligned = H > threshold;
            const angle = aligned ? 0 : (((r + c) % 4) * 90);
            const rad = (angle * Math.PI) / 180;
            const len = 16;
            return (
              <g key={`${r}-${c}`}>
                <rect x={cx - cellW / 2 + 2} y={cy - cellH / 2 + 2} width={cellW - 4} height={cellH - 4}
                  fill={aligned ? '#ef5b6f18' : '#5b826818'} stroke="#3a4256" strokeWidth={0.5} />
                <line x1={cx - len * Math.cos(rad)} y1={cy - len * Math.sin(rad)} x2={cx + len * Math.cos(rad)} y2={cy + len * Math.sin(rad)}
                  stroke={aligned ? '#ef5b6f' : '#7b8299'} strokeWidth={2} markerEnd="url(#dtArrow)" />
              </g>
            );
          })
        )}
        <defs>
          <marker id="dtArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0,0 L4,2 L0,4 Z" fill="currentColor" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>applied H</span>
        <input type="range" min={0} max={1} step={0.02} value={H} onChange={e => setH(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 280 }}>
        as H increases, favorably-oriented domains grow (via wall motion) and consume their neighbors, then the
        remaining domains rotate to align — the microscopic origin of the hysteresis loop.
      </p>
    </div>
  );
}
