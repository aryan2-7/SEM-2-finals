import { useEffect, useRef, useState } from 'react';

export default function FaradayLenzViz() {
  const [x, setX] = useState(40);
  const [playing, setPlaying] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    function tick(now: number) {
      const dt = now - last;
      last = now;
      setX(prev => {
        const next = prev + dt * 0.03;
        return next > 320 ? 40 : next;
      });
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [playing]);

  const fieldRegionEnd = 220;
  const loopWidth = 70;
  const insideFraction = Math.max(0, Math.min(1, (fieldRegionEnd - x) / loopWidth));
  const exiting = x > fieldRegionEnd - loopWidth && x < fieldRegionEnd;
  const dPhiDt = exiting ? -1 : 0; // flux decreasing while exiting
  const inducedCW = dPhiDt < 0; // Lenz: induced current opposes decrease -> tries to maintain flux -> clockwise (into page) here

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
      <svg viewBox="0 0 400 200" style={{ width: '100%', maxWidth: 400 }}>
        {/* field region (into page dots) */}
        <rect x={20} y={30} width={200} height={130} fill="#5b8def11" stroke="#5b8def" strokeWidth={1} strokeDasharray="4 3" />
        {Array.from({ length: 5 }).map((_, r) => Array.from({ length: 6 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={40 + c * 32} cy={50 + r * 26} r={2} fill="#5b8def" opacity={0.5} />
        )))}
        <text x={120} y={22} fontSize={10} fill="#5b8def" textAnchor="middle" fontFamily="var(--mono)">B into page</text>

        {/* loop */}
        <rect x={x} y={60} width={loopWidth} height={70} fill="none" stroke="#f2b544" strokeWidth={2.5} />
        {exiting && (
          <circle cx={x + loopWidth / 2} cy={95} r={10} fill="none" stroke={inducedCW ? '#ef5b6f' : '#59c98e'} strokeWidth={2}>
            <animateTransform attributeName="transform" type="rotate" from={`0 ${x + loopWidth / 2} 95`} to={`360 ${x + loopWidth / 2} 95`} dur="1.5s" repeatCount="indefinite" />
          </circle>
        )}
        {exiting && (
          <text x={x + loopWidth / 2} y={99} fontSize={9} fill={inducedCW ? '#ef5b6f' : '#59c98e'} textAnchor="middle" fontFamily="var(--mono)">I</text>
        )}

        <text x={200} y={185} fontSize={11} fill="var(--text-dim)" textAnchor="middle" fontFamily="var(--mono)">
          {exiting ? `flux decreasing — induced current opposes the decrease (Lenz)` : x < fieldRegionEnd - loopWidth ? 'fully inside — no flux change, no induced EMF' : 'fully outside — no flux, no induced EMF'}
        </text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 340 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>loop position</span>
        <input type="range" min={40} max={320} value={x} onChange={e => { setPlaying(false); setX(Number(e.target.value)); }} style={{ flex: 1, accentColor: '#f2b544' }} />
      </div>
      <button onClick={() => setPlaying(p => !p)}
        style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6, padding: '6px 16px', fontSize: 12, color: 'var(--text)' }}>
        {playing ? 'pause' : 'play'}
      </button>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)' }}>
        flux linkage ≈ {insideFraction.toFixed(2)} · dΦ/dt {dPhiDt < 0 ? '< 0' : '= 0'}
      </div>
    </div>
  );
}
