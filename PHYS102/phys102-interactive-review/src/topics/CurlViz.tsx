import { useState } from 'react';

export default function CurlViz() {
  const [spinning, setSpinning] = useState(true);
  const [strength, setStrength] = useState(0.6);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 260" style={{ width: '100%', maxWidth: 400 }}>
        {/* background flow field (shear flow, faster at top) */}
        {Array.from({ length: 5 }).map((_, row) => {
          const y = 40 + row * 45;
          const speed = (5 - row) / 5;
          return (
            <line key={row} x1={40} y1={y} x2={40 + 60 * speed + 60} y2={y}
              stroke="#3a4256" strokeWidth={1.5} markerEnd="url(#cArrow)" opacity={0.7} />
          );
        })}
        <defs>
          <marker id="cArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#3a4256" />
          </marker>
        </defs>

        {/* paddle wheel at center */}
        <g style={{
          transformOrigin: '200px 130px',
          animation: spinning ? `spin ${2.5 / strength}s linear infinite` : undefined,
        }}>
          <circle cx={200} cy={130} r={4} fill="#ef5b6f" />
          {[0, 90, 180, 270].map(a => (
            <line key={a}
              x1={200} y1={130}
              x2={200 + 32 * Math.cos((a * Math.PI) / 180)}
              y2={130 + 32 * Math.sin((a * Math.PI) / 180)}
              stroke="#ef5b6f" strokeWidth={4} strokeLinecap="round"
            />
          ))}
        </g>

        <text x={200} y={240} fontSize={12.5} fill="#ef5b6f" textAnchor="middle" fontFamily="var(--mono)">
          ∇×F ≠ 0 — shear in the flow spins the paddle wheel
        </text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 340 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>shear strength</span>
        <input type="range" min={0.2} max={1.5} step={0.1} value={strength} onChange={e => setStrength(Number(e.target.value))} style={{ flex: 1, accentColor: '#ef5b6f' }} />
      </div>
      <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <input type="checkbox" checked={spinning} onChange={e => setSpinning(e.target.checked)} />
        animate
      </label>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
