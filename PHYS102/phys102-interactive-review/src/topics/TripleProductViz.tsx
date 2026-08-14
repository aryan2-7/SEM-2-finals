import { useState } from 'react';

// pseudo-3D isometric projection for a parallelepiped
function project(x: number, y: number, z: number) {
  const px = x - z * 0.5;
  const py = y - z * 0.3 - x * 0.15;
  return [px, py];
}

export default function TripleProductViz() {
  const [skew, setSkew] = useState(0.5);

  const A = [80, 0, 0];
  const B = [0, 60, 0];
  const C = [skew * 40, skew * 20, 55];

  const origin = [40, 150];
  function toScreen(v: number[]) {
    const [px, py] = project(v[0], v[1], v[2]);
    return [origin[0] + px, origin[1] - py];
  }

  const O = origin;
  const Ap = toScreen(A);
  const Bp = toScreen(B);
  const Cp = toScreen(C);
  const ABp = toScreen([A[0] + B[0], A[1] + B[1], A[2] + B[2]]);
  const ACp = toScreen([A[0] + C[0], A[1] + C[1], A[2] + C[2]]);
  const BCp = toScreen([B[0] + C[0], B[1] + C[1], B[2] + C[2]]);
  const ABCp = toScreen([A[0] + B[0] + C[0], A[1] + B[1] + C[1], A[2] + B[2] + C[2]]);

  // scalar triple product A . (B x C)
  const cross = [
    B[1] * C[2] - B[2] * C[1],
    B[2] * C[0] - B[0] * C[2],
    B[0] * C[1] - B[1] * C[0],
  ];
  const volume = Math.abs(A[0] * cross[0] + A[1] * cross[1] + A[2] * cross[2]) / 3000;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 300 220" style={{ width: '100%', maxWidth: 300 }}>
        {/* parallelepiped edges */}
        <polygon points={`${O[0]},${O[1]} ${Ap[0]},${Ap[1]} ${ABp[0]},${ABp[1]} ${Bp[0]},${Bp[1]}`} fill="#5b8def18" stroke="#5b8def66" strokeWidth={1} />
        <polygon points={`${Cp[0]},${Cp[1]} ${ACp[0]},${ACp[1]} ${ABCp[0]},${ABCp[1]} ${BCp[0]},${BCp[1]}`} fill="#f2b54418" stroke="#f2b54466" strokeWidth={1} />
        {[[O, Ap], [O, Bp], [O, Cp], [Ap, ABp], [Ap, ACp], [Bp, ABp], [Bp, BCp], [Cp, ACp], [Cp, BCp], [ABp, ABCp], [ACp, ABCp], [BCp, ABCp]].map(([p1, p2], i) => (
          <line key={i} x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke="#4a5268" strokeWidth={1} />
        ))}
        <line x1={O[0]} y1={O[1]} x2={Ap[0]} y2={Ap[1]} stroke="#5b8def" strokeWidth={2.5} markerEnd="url(#tpArrow)" />
        <line x1={O[0]} y1={O[1]} x2={Bp[0]} y2={Bp[1]} stroke="#ef5b6f" strokeWidth={2.5} markerEnd="url(#tpArrowB)" />
        <line x1={O[0]} y1={O[1]} x2={Cp[0]} y2={Cp[1]} stroke="#f2b544" strokeWidth={2.5} markerEnd="url(#tpArrowC)" />
        <defs>
          <marker id="tpArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b8def" /></marker>
          <marker id="tpArrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef5b6f" /></marker>
          <marker id="tpArrowC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" /></marker>
        </defs>
        <text x={Ap[0] + 4} y={Ap[1]} fontSize={10} fill="#5b8def" fontFamily="var(--mono)">A</text>
        <text x={Bp[0] + 4} y={Bp[1]} fontSize={10} fill="#ef5b6f" fontFamily="var(--mono)">B</text>
        <text x={Cp[0] + 4} y={Cp[1]} fontSize={10} fill="#f2b544" fontFamily="var(--mono)">C</text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>skew of C</span>
        <input type="range" min={-1} max={1} step={0.05} value={skew} onChange={e => setSkew(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--amber)' }}>
        A·(B×C) → parallelepiped volume ≈ {volume.toFixed(2)} (arb. units)
      </div>
    </div>
  );
}
