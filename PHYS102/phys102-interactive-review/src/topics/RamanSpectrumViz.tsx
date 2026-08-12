export default function RamanSpectrumViz() {
  // Gaussian-ish peaks: Rayleigh tall & central, Stokes taller than anti-Stokes, symmetric offsets
  const peaks = [
    { x: 130, height: 60, width: 10, color: '#f2b544', label: 'Stokes' },
    { x: 240, height: 150, width: 8, color: '#5b8def', label: 'Rayleigh' },
    { x: 350, height: 30, width: 10, color: '#ef5b6f', label: 'anti-Stokes' },
  ];

  function gaussianPath(cx: number, h: number, w: number) {
    const pts = [];
    for (let dx = -40; dx <= 40; dx += 2) {
      const y = h * Math.exp(-(dx * dx) / (2 * w * w));
      pts.push([cx + dx, 220 - y]);
    }
    return 'M ' + pts.map(p => p.join(',')).join(' L ');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: '100%' }}>
      <svg viewBox="0 0 480 260" style={{ width: '100%', maxWidth: 480 }}>
        <line x1={40} y1={220} x2={440} y2={220} stroke="#262c3d" strokeWidth={1} />
        {peaks.map(p => (
          <g key={p.label}>
            <path d={gaussianPath(p.x, p.height, p.width)} fill="none" stroke={p.color} strokeWidth={2} />
            <text x={p.x} y={236} fontSize={11} fill={p.color} textAnchor="middle" fontFamily="var(--mono)">{p.label}</text>
          </g>
        ))}
        <text x={130} y={250} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">ν₀−ν₁</text>
        <text x={240} y={250} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">ν₀</text>
        <text x={350} y={250} fontSize={10} fill="#7b8299" textAnchor="middle" fontFamily="var(--mono)">ν₀+ν₁</text>
      </svg>
      <p style={{ fontSize: 12, color: 'var(--text-dim)', textAlign: 'center', maxWidth: 380 }}>
        Stokes and anti-Stokes lines sit symmetrically around the intense central Rayleigh line. Stokes is
        consistently stronger — at thermal equilibrium, more molecules start in the ground state E₀ than the
        excited state E₁.
      </p>
    </div>
  );
}
