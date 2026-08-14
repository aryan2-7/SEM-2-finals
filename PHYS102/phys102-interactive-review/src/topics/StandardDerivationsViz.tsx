import { useState } from 'react';

type Geo = 'twocharge' | 'line' | 'ring' | 'disk';

export default function StandardDerivationsViz() {
  const [geo, setGeo] = useState<Geo>('ring');
  const [z, setZ] = useState(60);

  const geoLabel: Record<Geo, string> = {
    twocharge: 'two equal charges q, separation d',
    line: 'finite line charge, length 2L',
    ring: 'circular ring, radius r',
    disk: 'flat disk, radius R',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 320 200" style={{ width: '100%', maxWidth: 320 }}>
        <line x1={160} y1={20} x2={160} y2={180} stroke="#3a4256" strokeDasharray="3 2" />
        <text x={168} y={26} fontSize={9} fill="#7b8299" fontFamily="var(--mono)">z-axis</text>

        {geo === 'twocharge' && (
          <>
            <circle cx={110} cy={140} r={6} fill="#5b8def" />
            <circle cx={210} cy={140} r={6} fill="#5b8def" />
          </>
        )}
        {geo === 'line' && <line x1={80} y1={140} x2={240} y2={140} stroke="#5b8def" strokeWidth={3} />}
        {geo === 'ring' && <ellipse cx={160} cy={140} rx={70} ry={16} fill="none" stroke="#5b8def" strokeWidth={2.5} />}
        {geo === 'disk' && <ellipse cx={160} cy={140} rx={70} ry={16} fill="#5b8def33" stroke="#5b8def" strokeWidth={2} />}

        {/* field point on axis at height z */}
        <circle cx={160} cy={140 - z} r={5} fill="#f2b544" />
        <line x1={160} y1={140} x2={160} y2={140 - z} stroke="#f2b54466" strokeDasharray="3 2" />
        <text x={168} y={140 - z / 2} fontSize={9} fill="#7b8299" fontFamily="var(--mono)">z</text>
      </svg>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
        {(['twocharge', 'line', 'ring', 'disk'] as Geo[]).map(g => (
          <button key={g} onClick={() => setGeo(g)}
            style={{
              background: geo === g ? '#5b8def22' : 'transparent',
              border: `1px solid ${geo === g ? 'var(--field)' : 'var(--border)'}`,
              color: geo === g ? 'var(--field)' : 'var(--text-dim)',
              borderRadius: 6, padding: '5px 10px', fontSize: 11.5,
            }}>
            {g === 'twocharge' ? 'two charges' : g}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)' }}>{geoLabel[geo]}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 280 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>z</span>
        <input type="range" min={5} max={130} value={z} onChange={e => setZ(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
        <span style={{ fontSize: 11, color: 'var(--amber)', fontFamily: 'var(--mono)' }}>{z > 90 ? 'z ≫ geometry (point-charge limit)' : 'near field'}</span>
      </div>
    </div>
  );
}
