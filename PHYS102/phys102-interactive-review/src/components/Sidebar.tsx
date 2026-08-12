import { chapters, topics } from '../data/registry';

export default function Sidebar({
  activeTopic,
  onSelect,
  open,
}: {
  activeTopic: string;
  onSelect: (id: string) => void;
  open: boolean;
}) {
  return (
    <nav
      style={{
        width: open ? 280 : 0,
        overflow: 'hidden',
        borderRight: open ? '1px solid var(--border)' : 'none',
        background: 'var(--panel)',
        height: '100vh',
        position: 'sticky',
        top: 0,
        flexShrink: 0,
        transition: 'width 0.2s ease',
      }}
    >
      <div style={{ width: 280, padding: '24px 20px 40px', overflowY: 'auto', height: '100%' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--text-h)', fontWeight: 700 }}>
            PHYS102
          </div>
          <div style={{ fontSize: 11.5, color: 'var(--text-dim)', marginTop: 2, fontFamily: 'var(--mono)' }}>
            finals review
          </div>
        </div>

        {chapters.map(ch => {
          const chTopics = topics.filter(t => t.chapterId === ch.id);
          return (
            <div key={ch.id} style={{ marginBottom: 22 }}>
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8,
                paddingBottom: 6, borderBottom: '1px solid var(--border-soft)',
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: ch.color }}>
                  {String(ch.number).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 12.5, color: 'var(--text-dim)', fontWeight: 600, letterSpacing: 0.3 }}>
                  {ch.title}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {chTopics.map(t => {
                  const active = t.id === activeTopic;
                  return (
                    <button
                      key={t.id}
                      onClick={() => onSelect(t.id)}
                      style={{
                        textAlign: 'left',
                        background: active ? 'var(--panel-raised)' : 'transparent',
                        border: 'none',
                        borderRadius: 5,
                        padding: '6px 10px',
                        fontSize: 12.5,
                        color: active ? 'var(--text-h)' : t.featured ? 'var(--text)' : 'var(--text-dim)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 6,
                      }}
                    >
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {t.title}
                      </span>
                      {t.featured && (
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: ch.color, flexShrink: 0 }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
