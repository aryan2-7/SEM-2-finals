import { useState } from 'react';

const parts = [
  { id: 'S', label: 'Light Source (S)', desc: 'Mercury arc lamp', x: 30, y: 130, w: 40, h: 30 },
  { id: 'F', label: 'Filter (F)', desc: 'Isolates λ = 4358 Å line', x: 78, y: 130, w: 14, h: 30 },
  { id: 'R', label: 'Reflector (R)', desc: 'Semi-cylindrical aluminum reflector, concentrates light onto tube', x: 100, y: 100, w: 160, h: 12 },
  { id: 'J', label: 'Water Jacket (J)', desc: 'Circulates cooling water, protects sample from thermal decomposition', x: 100, y: 118, w: 200, h: 60 },
  { id: 'AB', label: 'Raman Tube (AB)', desc: 'Glass container of pure, dust-free liquid sample (benzene/toluene)', x: 115, y: 130, w: 170, h: 30 },
  { id: 'H', label: 'Horn (H)', desc: 'Blackened, curved end — absorbs unscattered light', x: 285, y: 132, w: 28, h: 26 },
  { id: 'W', label: 'Window (W)', desc: 'Optically flat glass, scattered light exits here', x: 108, y: 132, w: 8, h: 26 },
  { id: 'SP', label: 'Spectrograph', desc: 'High-resolution spectrograph captures the scattered spectrum', x: 340, y: 128, w: 60, h: 34 },
];

export default function RamanSetupViz() {
  const [hover, setHover] = useState<string | null>(null);
  const active = parts.find(p => p.id === hover);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: '100%' }}>
      <svg viewBox="0 0 420 220" style={{ width: '100%', maxWidth: 480 }}>
        {parts.map(p => (
          <rect
            key={p.id}
            x={p.x} y={p.y} width={p.w} height={p.h}
            fill={hover === p.id ? '#f2b54444' : '#171c2899'}
            stroke={hover === p.id ? '#f2b544' : '#3a4256'}
            strokeWidth={hover === p.id ? 2 : 1}
            rx={2}
            onMouseEnter={() => setHover(p.id)}
            onMouseLeave={() => setHover(null)}
            style={{ cursor: 'pointer' }}
          />
        ))}
        {parts.map(p => (
          <text key={p.id + 'lbl'} x={p.x + p.w / 2} y={p.y + p.h / 2 + 4} fontSize={9.5} fill="#c7cbd6"
            textAnchor="middle" fontFamily="var(--mono)" pointerEvents="none">
            {p.id}
          </text>
        ))}
        <line x1={340} y1={145} x2={310} y2={145} stroke="#f2b544" strokeWidth={1.5} markerEnd="url(#arr)" />
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#f2b544" />
          </marker>
        </defs>
      </svg>
      <div style={{
        minHeight: 40, textAlign: 'center', fontSize: 12.5, color: 'var(--text-dim)',
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 16px', maxWidth: 420,
      }}>
        {active ? (
          <><span style={{ color: 'var(--amber)', fontWeight: 600 }}>{active.label}</span> — {active.desc}</>
        ) : (
          'Hover a component to read its role'
        )}
      </div>
    </div>
  );
}
