import { useState } from 'react';

export default function BoundCurrentViz() {
  const [animate, setAnimate] = useState(true);
  const [nonUniform, setNonUniform] = useState(false);
  const cols = 6, rows = 4;
  const cellW = 60, cellH = 55;
  const originX = 60, originY = 40;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 480 280" style={{ width: '100%', maxWidth: 480 }}>
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const cx = originX + c * cellW;
            const cy = originY + r * cellH;
            const radius = nonUniform ? 12 + (c / cols) * 10 : 18;
            const isEdge = c === 0 || c === cols - 1 || r === 0 || r === rows - 1;
            return (
              <g key={`${r}-${c}`}>
                <circle
                  cx={cx} cy={cy} r={radius}
                  fill="none"
                  stroke={isEdge ? '#f2b544' : '#3a4256'}
                  strokeWidth={isEdge ? 2 : 1.3}
                  opacity={isEdge ? 0.95 : 0.5}
                  style={animate ? { animation: `spin${r % 2 === 0 ? 'CW' : 'CCW'} 6s linear infinite` } : undefined}
                />
                {/* arrowhead hint at top of loop showing circulation direction */}
                <circle cx={cx + radius} cy={cy} r={2} fill={isEdge ? '#f2b544' : '#5c6377'} />
              </g>
            );
          })
        )}
        <text x={240} y={20} fontSize={11} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">
          adjacent loops cancel internally — only the outer edge survives as K_b
        </text>
        <text x={240} y={264} fontSize={11} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">
          {nonUniform ? 'non-uniform M(x): interior cancellation is incomplete → J_b = ∇×M' : 'uniform M: net surface current only, K_b = M × n̂'}
        </text>
      </svg>

      <div style={{ display: 'flex', gap: 18 }}>
        <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
          <input type="checkbox" checked={animate} onChange={e => setAnimate(e.target.checked)} />
          animate circulation
        </label>
        <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
          <input type="checkbox" checked={nonUniform} onChange={e => setNonUniform(e.target.checked)} />
          non-uniform M (grows left→right)
        </label>
      </div>

      <style>{`
        @keyframes spinCW { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -100; } }
        @keyframes spinCCW { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 100; } }
      `}</style>
    </div>
  );
}
