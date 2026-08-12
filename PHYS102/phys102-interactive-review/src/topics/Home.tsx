import { chapters, topics } from '../data/registry';

export default function Home({ onSelect, visited }: { onSelect: (id: string) => void; visited: Set<string> }) {
  const featured = topics.filter(t => t.featured);
  const doneCount = featured.filter(t => visited.has(t.id)).length;

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '48px 32px 96px' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: 'var(--amber)', marginBottom: 10 }}>
        PHYS102 — FINALS REVIEW
      </div>
      <h1 style={{ fontSize: 38, marginBottom: 12, lineHeight: 1.15 }}>
        Electricity, Magnetism, Waves &amp; Modern Physics
      </h1>
      <p style={{ color: 'var(--text-dim)', fontSize: 15, marginBottom: 36, maxWidth: 620 }}>
        The ten highest-yield derivations across the course, worked step-by-step with interactive visuals and
        self-check quizzes. Full chapter map below — the highlighted topics (marked with a dot) are built out;
        the rest are outlined for later.
      </p>

      <div style={{
        background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10,
        padding: '18px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', gap: 18,
      }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 24, color: 'var(--amber)', fontWeight: 600 }}>
          {doneCount}/{featured.length}
        </div>
        <div>
          <div style={{ fontSize: 13, color: 'var(--text-h)', fontWeight: 600 }}>Featured topics visited</div>
          <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>progress is saved locally in your browser</div>
        </div>
        <div style={{ flex: 1, height: 6, background: 'var(--panel-raised)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: `${(doneCount / featured.length) * 100}%`, height: '100%', background: 'var(--amber)', transition: 'width 0.3s' }} />
        </div>
      </div>

      <h3 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-dim)', marginBottom: 16 }}>
        Featured derivations
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 44 }}>
        {featured.map(t => {
          const ch = chapters.find(c => c.id === t.chapterId)!;
          const done = visited.has(t.id);
          return (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              style={{
                textAlign: 'left',
                background: 'var(--panel)',
                border: `1px solid ${done ? ch.color + '66' : 'var(--border)'}`,
                borderRadius: 10,
                padding: '16px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: ch.color }}>CH.{String(ch.number).padStart(2, '0')}</span>
                {done && <span style={{ fontSize: 10, color: 'var(--green)', fontFamily: 'var(--mono)' }}>✓ visited</span>}
              </div>
              <span style={{ fontSize: 14, color: 'var(--text-h)', fontWeight: 500, lineHeight: 1.35 }}>{t.title}</span>
            </button>
          );
        })}
      </div>

      <h3 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-dim)', marginBottom: 16 }}>
        Full course map
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {chapters.map(ch => (
          <div key={ch.id}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: ch.color }}>{String(ch.number).padStart(2, '0')}</span>
              <span style={{ fontSize: 14, color: 'var(--text-h)', fontWeight: 600 }}>{ch.title}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {topics.filter(t => t.chapterId === ch.id).map(t => (
                <button
                  key={t.id}
                  onClick={() => onSelect(t.id)}
                  style={{
                    fontSize: 11.5,
                    padding: '5px 10px',
                    borderRadius: 5,
                    background: t.featured ? `${ch.color}18` : 'var(--panel)',
                    border: `1px solid ${t.featured ? ch.color + '55' : 'var(--border)'}`,
                    color: t.featured ? 'var(--text-h)' : 'var(--text-dim)',
                  }}
                >
                  {t.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
