import { useState } from 'react';

type Line = 'stokes' | 'rayleigh' | 'antistokes';

export default function RamanLevelViz() {
  const [line, setLine] = useState<Line>('stokes');

  const nu1 = 0.35; // vibrational frequency spacing, arbitrary units
  const formula: Record<Line, string> = {
    stokes: 'ν_s = ν₀ − ν₁',
    rayleigh: 'ν_s = ν₀',
    antistokes: 'ν_a = ν₀ + ν₁',
  };
  const color: Record<Line, string> = { stokes: '#f2b544', rayleigh: '#5b8def', antistokes: '#ef5b6f' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 480 280" style={{ width: '100%', maxWidth: 480 }}>
        {/* virtual state band */}
        <rect x={100} y={40} width={280} height={10} fill="#5c637722" stroke="#5c6377" strokeDasharray="3 2" />
        <text x={240} y={34} fontSize={10.5} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">virtual state</text>

        {/* E1 level */}
        <line x1={100} y1={160} x2={380} y2={160} stroke="#4a5268" strokeWidth={2} />
        <text x={90} y={164} fontSize={11} fill="#7b8299" textAnchor="end" fontFamily="var(--mono)">E₁</text>

        {/* E0 level */}
        <line x1={100} y1={220} x2={380} y2={220} stroke="#4a5268" strokeWidth={2} />
        <text x={90} y={224} fontSize={11} fill="#7b8299" textAnchor="end" fontFamily="var(--mono)">E₀</text>

        {/* incident photon (always from E0 up, except anti-stokes starts at E1) */}
        {line !== 'antistokes' ? (
          <>
            <line x1={180} y1={220} x2={180} y2={45} stroke="#5b8def" strokeWidth={2} markerEnd="url(#arrowUp)" />
            <text x={186} y={130} fontSize={11} fill="#5b8def" fontFamily="var(--mono)">hν₀</text>
          </>
        ) : (
          <>
            <line x1={180} y1={160} x2={180} y2={45} stroke="#5b8def" strokeWidth={2} markerEnd="url(#arrowUp)" />
            <text x={186} y={110} fontSize={11} fill="#5b8def" fontFamily="var(--mono)">hν₀</text>
          </>
        )}

        {/* scattered photon */}
        {line === 'stokes' && (
          <>
            <line x1={300} y1={45} x2={300} y2={160} stroke={color.stokes} strokeWidth={2} markerEnd="url(#arrowDown)" />
            <text x={306} y={110} fontSize={11} fill={color.stokes} fontFamily="var(--mono)">hν_s</text>
          </>
        )}
        {line === 'rayleigh' && (
          <>
            <line x1={300} y1={45} x2={300} y2={220} stroke={color.rayleigh} strokeWidth={2} markerEnd="url(#arrowDown)" />
            <text x={306} y={140} fontSize={11} fill={color.rayleigh} fontFamily="var(--mono)">hν_s</text>
          </>
        )}
        {line === 'antistokes' && (
          <>
            <line x1={300} y1={45} x2={300} y2={220} stroke={color.antistokes} strokeWidth={2} markerEnd="url(#arrowDown)" />
            <text x={306} y={140} fontSize={11} fill={color.antistokes} fontFamily="var(--mono)">hν_a</text>
          </>
        )}

        <defs>
          <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto">
            <path d="M0,6 L4,0 L8,6 Z" fill="#5b8def" />
          </marker>
          <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
            <path d="M0,0 L8,0 L4,6 Z" fill={color[line]} />
          </marker>
        </defs>
      </svg>

      <div style={{ display: 'flex', gap: 8 }}>
        {(['stokes', 'rayleigh', 'antistokes'] as Line[]).map(l => (
          <button key={l} onClick={() => setLine(l)}
            style={{
              background: line === l ? `${color[l]}22` : 'transparent',
              border: `1px solid ${line === l ? color[l] : 'var(--border)'}`,
              color: line === l ? color[l] : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5, textTransform: 'capitalize',
            }}>
            {l === 'antistokes' ? 'anti-Stokes' : l}
          </button>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: color[line] }}>{formula[line]}</p>
      <p style={{ fontSize: 11.5, color: 'var(--text-dim)', maxWidth: 380, textAlign: 'center' }}>
        ν₁ = (E₁ − E₀)/h is the characteristic vibrational frequency of the molecule, here ν₁ ≈ {nu1.toFixed(2)} (arb. units).
      </p>
    </div>
  );
}
