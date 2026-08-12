import { useRef, useState } from 'react';

interface Charge { id: number; x: number; y: number; q: number }

export default function CoulombViz() {
  const [charges, setCharges] = useState<Charge[]>([
    { id: 1, x: 150, y: 130, q: 1 },
    { id: 2, x: 330, y: 130, q: -1 },
  ]);
  const dragId = useRef<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  function toLocal(e: React.PointerEvent) {
    const rect = svgRef.current!.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 480,
      y: ((e.clientY - rect.top) / rect.height) * 260,
    };
  }

  function forceOn(c: Charge) {
    let fx = 0, fy = 0;
    for (const other of charges) {
      if (other.id === c.id) continue;
      const dx = c.x - other.x, dy = c.y - other.y;
      const r2 = dx * dx + dy * dy + 1;
      const r = Math.sqrt(r2);
      const k = (c.q * other.q) / r2 * 4000;
      fx += (k * dx) / r;
      fy += (k * dy) / r;
    }
    return { fx, fy, mag: Math.sqrt(fx * fx + fy * fy) };
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: '100%' }}>
      <svg
        ref={svgRef} viewBox="0 0 480 260" style={{ width: '100%', maxWidth: 480, touchAction: 'none' }}
        onPointerMove={e => {
          if (dragId.current == null) return;
          const { x, y } = toLocal(e);
          setCharges(cs => cs.map(c => c.id === dragId.current ? { ...c, x: Math.max(20, Math.min(460, x)), y: Math.max(20, Math.min(240, y)) } : c));
        }}
        onPointerUp={() => (dragId.current = null)}
        onPointerLeave={() => (dragId.current = null)}
      >
        {charges.map(c => {
          const { fx, fy, mag } = forceOn(c);
          const scale = Math.min(60, mag) / (mag || 1);
          return (
            <line key={'f' + c.id}
              x1={c.x} y1={c.y} x2={c.x + fx * scale} y2={c.y + fy * scale}
              stroke="#f2b544" strokeWidth={2} markerEnd="url(#fArrow)" />
          );
        })}
        <defs>
          <marker id="fArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" />
          </marker>
        </defs>
        {charges.map(c => (
          <g key={c.id}
            onPointerDown={() => (dragId.current = c.id)}
            style={{ cursor: 'grab' }}
          >
            <circle cx={c.x} cy={c.y} r={14} fill={c.q > 0 ? '#5b8def' : '#ef5b6f'} />
            <text x={c.x} y={c.y + 4} fontSize={12} fill="#0b0e14" textAnchor="middle" fontWeight="bold">
              {c.q > 0 ? '+q' : '−q'}
            </text>
          </g>
        ))}
      </svg>
      <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>drag either charge — the amber arrows are the live Coulomb force on each</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={() => setCharges(cs => cs.map(c => c.id === 2 ? { ...c, q: -c.q } : c))}
          style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: '6px 14px', fontSize: 12, color: 'var(--text)' }}>
          flip sign of right charge
        </button>
      </div>
    </div>
  );
}
