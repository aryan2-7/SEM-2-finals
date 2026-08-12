import { useEffect, useState, type ReactNode } from 'react';

export default function SlideDeck({ slides }: { slides: ReactNode[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') setI(x => Math.min(slides.length - 1, x + 1));
      if (e.key === 'ArrowLeft') setI(x => Math.max(0, x - 1));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slides.length]);

  return (
    <div style={{
      background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 12,
      padding: '32px 36px', minHeight: 380, display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ flex: 1 }}>{slides[i]}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24, borderTop: '1px solid var(--border-soft)', paddingTop: 16 }}>
        <button
          onClick={() => setI(x => Math.max(0, x - 1))}
          disabled={i === 0}
          style={{ background: 'var(--panel-raised)', border: '1px solid var(--border)', borderRadius: 6, padding: '7px 14px', fontSize: 13, color: 'var(--text)', opacity: i === 0 ? 0.4 : 1 }}
        >
          ← prev
        </button>
        <div style={{ display: 'flex', gap: 5, flex: 1, justifyContent: 'center' }}>
          {slides.map((_, si) => (
            <span key={si} style={{
              width: 6, height: 6, borderRadius: '50%',
              background: si === i ? 'var(--amber)' : 'var(--border)',
            }} />
          ))}
        </div>
        <button
          onClick={() => setI(x => Math.min(slides.length - 1, x + 1))}
          disabled={i === slides.length - 1}
          style={{ background: 'var(--panel-raised)', border: '1px solid var(--border)', borderRadius: 6, padding: '7px 14px', fontSize: 13, color: 'var(--text)', opacity: i === slides.length - 1 ? 0.4 : 1 }}
        >
          next →
        </button>
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-dim)', textAlign: 'center', marginTop: 10, fontFamily: 'var(--mono)' }}>
        slide {i + 1} / {slides.length} — use ← → arrow keys
      </div>
    </div>
  );
}
