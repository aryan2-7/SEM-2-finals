import { useState } from 'react';

export default function BindingEnergyViz() {
  const [Z, setZ] = useState(1);
  const [N, setN] = useState(2);
  const [M, setM] = useState(3.01605); // atomic mass, u

  const mp = 1.007825, mn = 1.008665;
  const A = Z + N;
  const deltaM = Z * mp + N * mn - M;
  const BE = deltaM * 931.5; // MeV
  const BEperA = BE / A;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%', maxWidth: 440 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 60 }}>Z (protons)</span>
          <input type="range" min={1} max={30} value={Z} onChange={e => setZ(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 30 }}>{Z}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 60 }}>N (neutrons)</span>
          <input type="range" min={1} max={40} value={N} onChange={e => setN(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 30 }}>{N}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 60 }}>M (u)</span>
          <input type="range" min={A * 0.97} max={A * 1.01} step={0.0001} value={M} onChange={e => setM(Number(e.target.value))} style={{ flex: 1, accentColor: '#f2b544' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 60 }}>{M.toFixed(4)}</span>
        </div>
      </div>

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10,
        padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>A = Z+N = {A}</span>
        <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>Δm = (Zmp+Nmn)−M = {deltaM.toFixed(5)} u</span>
        <span style={{ fontSize: 18, fontFamily: 'var(--mono)', color: '#59c98e', fontWeight: 600 }}>
          B.E. ≈ {BE.toFixed(2)} MeV
        </span>
        <span style={{ fontSize: 16, fontFamily: 'var(--mono)', color: '#f2b544' }}>
          B.E./A ≈ {BEperA.toFixed(2)} MeV/nucleon
        </span>
      </div>
    </div>
  );
}
