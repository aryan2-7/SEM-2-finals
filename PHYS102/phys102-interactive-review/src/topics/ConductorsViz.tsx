import { useState } from 'react';

export default function ConductorsViz() {
  const [showField, setShowField] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 220" style={{ width: '100%', maxWidth: 320 }}>
        {/* external field lines bending around conductor */}
        {showField && Array.from({ length: 7 }).map((_, i) => {
          const y = 30 + i * 25;
          const bend = 40;
          return (
            <path key={i} d={`M 10 ${y} L 100 ${y} Q 160 ${y} 160 ${y < 110 ? y - bend * 0.3 : y + bend * 0.3} Q 160 ${y} 220 ${y} L 310 ${y}`}
              fill="none" stroke="#5b8def66" strokeWidth={1.3} markerEnd="url(#condArrow)" />
          );
        })}
        <defs>
          <marker id="condArrow" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#5b8def66" />
          </marker>
        </defs>

        {/* conductor */}
        <circle cx={160} cy={110} r={55} fill="#171c28" stroke="#f2b544" strokeWidth={2} />
        <text x={160} y={114} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">E = 0 inside</text>

        {/* surface charge markers */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          // charge concentrates more on the side facing the field (left) and thins on the right, illustrating induced charge
          const density = 0.5 + 0.5 * Math.cos(a);
          return <circle key={i} cx={160 + 55 * Math.cos(a)} cy={110 + 55 * Math.sin(a)} r={2 + density * 2.5} fill="#ef5b6f" opacity={0.85} />;
        })}
      </svg>

      <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <input type="checkbox" checked={showField} onChange={e => setShowField(e.target.checked)} />
        show external field lines bending around conductor
      </label>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 300 }}>
        induced surface charge (red dots, density shown by size) rearranges until it cancels the field inside completely
      </p>
    </div>
  );
}
