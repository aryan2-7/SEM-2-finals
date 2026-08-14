import { useState } from 'react';

export default function ForcesOnCurrentsViz() {
  const [current, setCurrent] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 200" style={{ width: '100%', maxWidth: 320 }}>
        {/* B field into page */}
        {Array.from({ length: 5 }).map((_, r) => Array.from({ length: 7 }).map((_, c) => (
          <text key={`${r}-${c}`} x={40 + c * 35} y={40 + r * 35} fontSize={12} fill="#5b8def55" textAnchor="middle">×</text>
        )))}
        <text x={160} y={20} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">B into page</text>

        {/* wire */}
        <line x1={60} y1={110} x2={260} y2={110} stroke="#f2b544" strokeWidth={3 + current} markerEnd="url(#focArrow)" />
        <text x={160} y={130} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">I</text>

        {/* force arrow, F = IL x B, points up for I to the right and B into page */}
        <line x1={160} y1={110} x2={160} y2={110 - 20 - current * 15} stroke="#59c98e" strokeWidth={2.5} markerEnd="url(#focArrowG)" />
        <text x={168} y={110 - 30 - current * 15} fontSize={10} fill="#59c98e" fontFamily="var(--mono)">F = IL×B</text>

        <defs>
          <marker id="focArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" /></marker>
          <marker id="focArrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#59c98e" /></marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>current I</span>
        <input type="range" min={0.3} max={2.5} step={0.1} value={current} onChange={e => setCurrent(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)' }}>force magnitude scales with I — direction fixed by right-hand rule</p>
    </div>
  );
}
