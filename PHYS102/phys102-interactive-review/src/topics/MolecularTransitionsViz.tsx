import { useState } from 'react';

type Mode = 'electronic' | 'vibrational' | 'rotational';

export default function MolecularTransitionsViz() {
  const [mode, setMode] = useState<Mode>('electronic');

  const info: Record<Mode, { region: string; desc: string; color: string }> = {
    electronic: { region: 'optical / UV', color: '#5b8def', desc: 'jump between electronic states — near-vertical (Franck-Condon), internuclear separation ~constant during the transition' },
    vibrational: { region: 'infrared (IR)', color: '#f2b544', desc: 'jump between vibrational levels within the same electronic state' },
    rotational: { region: 'far-IR / microwave', color: '#ef5b6f', desc: 'jump between rotational levels within the same vibrational state' },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 480 300" style={{ width: '100%', maxWidth: 480 }}>
        {/* ground electronic curve */}
        <path d="M 90 260 Q 240 220 390 260" fill="none" stroke="#3a4256" strokeWidth={2} />
        {/* excited electronic curve, shifted up and right */}
        <path d="M 130 90 Q 280 50 420 90" fill="none" stroke="#3a4256" strokeWidth={2} />

        {/* vibrational sublevels within ground curve */}
        {[250, 236, 222].map((y, i) => (
          <path key={i} d={`M ${110 + i * 6} ${y + 10} Q 240 ${y - 20} ${370 - i * 6} ${y + 10}`} fill="none" stroke="#4a5268" strokeWidth={1} opacity={0.6} />
        ))}
        {/* vibrational sublevels within excited curve */}
        {[110, 124, 138].map((y, i) => (
          <path key={i} d={`M ${150 + i * 4} ${y - 6} Q 280 ${y - 30} ${400 - i * 4} ${y - 6}`} fill="none" stroke="#4a5268" strokeWidth={1} opacity={0.6} />
        ))}
        {/* rotational fine sublevels (tiny ticks) near ground vibrational level */}
        {mode === 'rotational' && [0, 1, 2, 3].map(i => (
          <line key={i} x1={225} y1={244 - i * 4} x2={255} y2={244 - i * 4} stroke="#ef5b6f" strokeWidth={1} opacity={0.8} />
        ))}

        {/* transition arrow */}
        {mode === 'electronic' && (
          <line x1={240} y1={238} x2={280} y2={70} stroke={info.electronic.color} strokeWidth={2.5} markerEnd="url(#arrow)" />
        )}
        {mode === 'vibrational' && (
          <line x1={220} y1={250} x2={220} y2={222} stroke={info.vibrational.color} strokeWidth={2.5} markerEnd="url(#arrow)" />
        )}
        {mode === 'rotational' && (
          <line x1={225} y1={244} x2={255} y2={236} stroke={info.rotational.color} strokeWidth={2.5} markerEnd="url(#arrow)" />
        )}

        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={info[mode].color} />
          </marker>
        </defs>

        <text x={20} y={80} fontSize={11} fill="#7b8299" fontFamily="var(--mono)">Excited electronic state</text>
        <text x={20} y={275} fontSize={11} fill="#7b8299" fontFamily="var(--mono)">Ground electronic state</text>
        <text x={240} y={294} fontSize={10.5} fill="#5c6377" fontFamily="var(--mono)" textAnchor="middle">internuclear separation →</text>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['electronic', 'vibrational', 'rotational'] as Mode[]).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              background: mode === m ? `${info[m].color}22` : 'transparent',
              border: `1px solid ${mode === m ? info[m].color : 'var(--border)'}`,
              color: mode === m ? info[m].color : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}
          >
            {m}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 12.5, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 420 }}>
        <span style={{ color: info[mode].color, fontFamily: 'var(--mono)' }}>{info[mode].region}</span> — {info[mode].desc}
      </p>
    </div>
  );
}
