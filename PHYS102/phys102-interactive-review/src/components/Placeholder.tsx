export default function Placeholder({ title, chapterLabel, accent }: { title: string; chapterLabel: string; accent: string }) {
  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '48px 32px' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        {chapterLabel}
      </div>
      <h1 style={{ fontSize: 34, marginBottom: 24 }}>{title}</h1>
      <div style={{
        border: '1px dashed var(--border)',
        borderRadius: 10,
        padding: '40px 28px',
        color: 'var(--text-dim)',
        fontSize: 14,
      }}>
        This topic isn't built out yet in this pass — the topics marked with a dot in the sidebar and home
        dashboard are fully interactive. Ask to have this one added next.
      </div>
    </div>
  );
}
