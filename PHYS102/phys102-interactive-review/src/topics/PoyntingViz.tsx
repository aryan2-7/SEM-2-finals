import { useState } from 'react';

export default function PoyntingViz() {
  const [outward, setOutward] = useState(true);

  const arrows = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const r1 = 70, r2 = 100;
    const x1 = 240 + r1 * Math.cos(angle);
    const y1 = 150 + r1 * Math.sin(angle);
    const x2 = 240 + r2 * Math.cos(angle);
    const y2 = 150 + r2 * Math.sin(angle);
    return outward ? { x1, y1, x2, y2 } : { x1: x2, y1: y2, x2: x1, y2: y1 };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 480 300" style={{ width: '100%', maxWidth: 480 }}>
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" />
          </marker>
        </defs>

        {/* bounding volume */}
        <circle cx={240} cy={150} r={70} fill="#5b8def11" stroke="#5b8def" strokeWidth={1.5} strokeDasharray="4 3" />
        <text x={240} y={150} fontSize={11} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">u_mech + u_em</text>
        <text x={240} y={165} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">volume V, surface S</text>

        {arrows.map((a, i) => (
          <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="#f2b544" strokeWidth={2} markerEnd="url(#arrowhead)"
            style={{ animation: `pulse${i % 2} 1.6s ease-in-out infinite` }} />
        ))}

        <text x={240} y={290} fontSize={11} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">
          S = (1/μ₀)(E × B) — energy flux through the boundary
        </text>
      </svg>

      <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <input type="checkbox" checked={outward} onChange={e => setOutward(e.target.checked)} />
        outward flux (energy leaving V, draining stored u_em)
      </label>

      <style>{`
        @keyframes pulse0 { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes pulse1 { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </div>
  );
}
