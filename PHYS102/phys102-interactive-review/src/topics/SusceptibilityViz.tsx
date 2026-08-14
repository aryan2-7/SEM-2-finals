import { useMemo, useState } from 'react';

type Material = 'dia' | 'para' | 'ferro';

const materials: Record<Material, { chi: string; desc: string; examples: string; color: string }> = {
  dia: { chi: 'χ_m < 0, small (~−10⁻⁵)', desc: 'Weakly repelled by external fields; induced moments oppose the applied field.', examples: 'copper, bismuth, water', color: '#5b8def' },
  para: { chi: 'χ_m > 0, small (~10⁻³ to 10⁻⁵)', desc: 'Weakly attracted; individual atomic moments align (partially) with the field but don\'t interact strongly with each other.', examples: 'aluminum, platinum, oxygen', color: '#f2b544' },
  ferro: { chi: 'χ_m ≫ 0, very large (10²–10⁵)', desc: 'Strongly attracted; neighboring atomic moments interact and align cooperatively into domains.', examples: 'iron, nickel, cobalt', color: '#ef5b6f' },
};

export default function SusceptibilityViz() {
  const [mat, setMat] = useState<Material>('ferro');
  const [Tc] = useState(1000); // Curie temperature reference, K

  const curvePoints = useMemo(() => {
    const pts = [];
    for (let T = 50; T <= 1400; T += 20) {
      const chi = T < Tc ? 5 / (1 - T / Tc) : 5 / (T / Tc - 1 + 0.05); // Curie-Weiss-ish shape, illustrative
      pts.push({ T, chi: Math.min(30, Math.max(0.1, chi)) });
    }
    return pts;
  }, [Tc]);

  const plotX = (T: number) => 40 + (T / 1400) * 220;
  const plotY = (chi: number) => 170 - (chi / 30) * 140;
  const pathD = curvePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${plotX(p.T).toFixed(1)},${plotY(p.chi).toFixed(1)}`).join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {(['dia', 'para', 'ferro'] as Material[]).map(m => (
          <button key={m} onClick={() => setMat(m)}
            style={{
              background: mat === m ? `${materials[m].color}22` : 'transparent',
              border: `1px solid ${mat === m ? materials[m].color : 'var(--border)'}`,
              color: mat === m ? materials[m].color : 'var(--text-dim)',
              borderRadius: 6, padding: '6px 14px', fontSize: 12.5,
            }}>
            {m === 'dia' ? 'diamagnetic' : m === 'para' ? 'paramagnetic' : 'ferromagnetic'}
          </button>
        ))}
      </div>

      <div style={{
        background: 'var(--panel)', border: `1px solid ${materials[mat].color}55`, borderRadius: 10,
        padding: '14px 18px', maxWidth: 360, textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: materials[mat].color, marginBottom: 6 }}>{materials[mat].chi}</div>
        <p style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 6 }}>{materials[mat].desc}</p>
        <p style={{ fontSize: 11, color: 'var(--text-dim)', fontStyle: 'italic' }}>e.g. {materials[mat].examples}</p>
      </div>

      {mat === 'para' && (
        <svg viewBox="0 0 300 190" style={{ width: '100%', maxWidth: 300 }}>
          <line x1={40} y1={170} x2={260} y2={170} stroke="#262c3d" strokeWidth={1} />
          <line x1={40} y1={20} x2={40} y2={170} stroke="#262c3d" strokeWidth={1} />
          <text x={265} y={174} fontSize={10} fill="#7b8299">T</text>
          <text x={30} y={22} fontSize={10} fill="#7b8299">χ</text>
          <path d={pathD} fill="none" stroke="#f2b544" strokeWidth={2} />
          <text x={150} y={186} fontSize={9} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">Curie's law: χ ∝ 1/T</text>
        </svg>
      )}
    </div>
  );
}
