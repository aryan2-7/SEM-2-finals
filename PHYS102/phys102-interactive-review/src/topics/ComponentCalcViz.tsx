import { useState } from 'react';

export default function ComponentCalcViz() {
  const [a, setA] = useState({ x: 2, y: 3, z: 1 });
  const [b, setB] = useState({ x: -1, y: 2, z: 4 });

  const dot = a.x * b.x + a.y * b.y + a.z * b.z;
  const cross = {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };

  function VecInput({ label, val, set, color }: { label: string; val: typeof a; set: (v: typeof a) => void; color: string }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color, width: 16 }}>{label}</span>
        {(['x', 'y', 'z'] as const).map(axis => (
          <input
            key={axis}
            type="number"
            value={val[axis]}
            onChange={e => set({ ...val, [axis]: Number(e.target.value) || 0 })}
            style={{
              width: 50, background: 'var(--panel-raised)', border: '1px solid var(--border)',
              borderRadius: 4, padding: '4px 6px', color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: 12,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%', maxWidth: 380 }}>
      <VecInput label="A =" val={a} set={setA} color="#5b8def" />
      <VecInput label="B =" val={b} set={setB} color="#ef5b6f" />

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10,
        padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--mono)', fontSize: 13,
      }}>
        <div style={{ color: 'var(--green)' }}>A·B = {dot}</div>
        <div style={{ color: 'var(--amber)' }}>A×B = ({cross.x}, {cross.y}, {cross.z})</div>
      </div>
    </div>
  );
}
