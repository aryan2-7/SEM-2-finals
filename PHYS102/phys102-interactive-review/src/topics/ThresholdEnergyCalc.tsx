import { useState } from 'react';

export default function ThresholdEnergyCalc() {
  const [mx, setMx] = useState(4); // projectile mass, u
  const [MX, setMX] = useState(14); // target mass, u
  const [Q, setQ] = useState(-1.2); // MeV, negative = endoergic
  const isPhoton = mx === 0;

  const Eth = isPhoton ? -Q : -Q * (1 + mx / MX);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 440 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 130 }}>projectile mass mₓ (u)</span>
          <input type="range" min={0} max={20} step={0.5} value={mx} onChange={e => setMx(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 44, textAlign: 'right' }}>{mx}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 130 }}>target mass Mₓ (u)</span>
          <input type="range" min={1} max={250} step={1} value={MX} onChange={e => setMX(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 44, textAlign: 'right' }}>{MX}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--mono)', width: 130 }}>Q-value (MeV)</span>
          <input type="range" min={-8} max={-0.1} step={0.1} value={Q} onChange={e => setQ(Number(e.target.value))} style={{ flex: 1, accentColor: '#59c98e' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, width: 44, textAlign: 'right' }}>{Q.toFixed(1)}</span>
        </div>
      </div>

      <button
        onClick={() => setMx(0)}
        style={{
          background: isPhoton ? '#59c98e22' : 'transparent',
          border: `1px solid ${isPhoton ? '#59c98e' : 'var(--border)'}`,
          color: isPhoton ? '#59c98e' : 'var(--text-dim)',
          borderRadius: 6, padding: '7px 14px', fontSize: 12, alignSelf: 'flex-start',
        }}
      >
        set mₓ = 0 (photon case)
      </button>

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10,
        padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <span style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>
          {isPhoton ? 'E_th = −Q  (photon-induced reaction)' : 'E_th = (−Q)(1 + mₓ/Mₓ)'}
        </span>
        <span style={{ fontSize: 22, fontFamily: 'var(--mono)', color: '#59c98e', fontWeight: 600 }}>
          E_th ≈ {Eth.toFixed(3)} MeV
        </span>
      </div>
    </div>
  );
}
