import { useState } from 'react';

export default function BiotSavartViz() {
  const [config, setConfig] = useState<'segment' | 'infinite' | 'loop'>('infinite');
  const [r, setR] = useState(70);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 420 240" style={{ width: '100%', maxWidth: 420 }}>
        {config !== 'loop' ? (
          <>
            {/* wire along x-axis */}
            <line x1={20} y1={120} x2={400} y2={120} stroke="#f2b544" strokeWidth={3} markerEnd="url(#wArrow)" />
            <text x={400} y={112} fontSize={10} fill="#f2b544" textAnchor="end" fontFamily="var(--mono)">I</text>
            {config === 'segment' && (
              <>
                <circle cx={90} cy={120} r={3} fill="#f2b544" />
                <circle cx={330} cy={120} r={3} fill="#f2b544" />
                <text x={90} y={135} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">θ₁ end</text>
                <text x={330} y={135} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">θ₂ end</text>
              </>
            )}
            {/* field point */}
            <circle cx={210} cy={120 - r} r={5} fill="#5b8def" />
            <line x1={210} y1={120} x2={210} y2={120 - r} stroke="#3a4256" strokeDasharray="3 2" />
            <text x={216} y={120 - r / 2} fontSize={10} fill="#7b8299" fontFamily="var(--mono)">r</text>
            {/* B field out of page marker */}
            <circle cx={210} cy={120 - r} r={12} fill="none" stroke="#5b8def" strokeWidth={1.5} strokeDasharray="2 2" />
            <text x={210} y={120 - r - 18} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">B (out of page)</text>
          </>
        ) : (
          <>
            {/* circular loop viewed edge-on-ish with axis field point */}
            <ellipse cx={150} cy={140} rx={80} ry={26} fill="none" stroke="#f2b544" strokeWidth={3} />
            <text x={150} y={172} fontSize={10} fill="#f2b544" textAnchor="middle" fontFamily="var(--mono)">loop radius R, current I</text>
            <line x1={150} y1={140} x2={150} y2={140 - r} stroke="#3a4256" strokeDasharray="3 2" />
            <circle cx={150} cy={140 - r} r={5} fill="#5b8def" />
            <text x={158} y={140 - r / 2} fontSize={10} fill="#7b8299" fontFamily="var(--mono)">z</text>
            <line x1={150} y1={140 - r} x2={150} y2={140 - r - 30} stroke="#5b8def" strokeWidth={2} markerEnd="url(#bArrow)" />
            <text x={158} y={140 - r - 20} fontSize={10} fill="#5b8def" fontFamily="var(--mono)">B ‖ axis</text>
          </>
        )}
        <defs>
          <marker id="wArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f2b544" />
          </marker>
          <marker id="bArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#5b8def" />
          </marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['segment', 'infinite', 'loop'] as const).map(c => (
          <button key={c} onClick={() => setConfig(c)}
            style={{
              background: config === c ? '#f2b54422' : 'transparent',
              border: `1px solid ${config === c ? 'var(--amber)' : 'var(--border)'}`,
              color: config === c ? 'var(--amber)' : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 12px', fontSize: 12,
            }}>
            {c === 'segment' ? 'finite segment' : c === 'infinite' ? 'infinite wire' : 'circular loop (axis)'}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 340 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>distance {config === 'loop' ? 'z' : 'r'}</span>
        <input type="range" min={20} max={95} value={r} onChange={e => setR(Number(e.target.value))} style={{ flex: 1, accentColor: '#5b8def' }} />
      </div>
    </div>
  );
}
