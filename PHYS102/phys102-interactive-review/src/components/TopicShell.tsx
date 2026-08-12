import type { ReactNode } from 'react';
import { BlockMath } from 'react-katex';

export function TopicShell({
  chapterLabel,
  title,
  accent,
  children,
}: {
  chapterLabel: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '48px 32px 96px' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        {chapterLabel}
      </div>
      <h1 style={{ fontSize: 34, marginBottom: 36, lineHeight: 1.15 }}>{title}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>{children}</div>
    </div>
  );
}

export function Section({ label, accent, children }: { label: string; accent: string; children: ReactNode }) {
  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0,
        }} />
        <h3 style={{ fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase', color: 'var(--text-dim)', fontFamily: 'var(--sans)', fontWeight: 600 }}>
          {label}
        </h3>
      </div>
      {children}
    </section>
  );
}

export function Concept({ children }: { children: ReactNode }) {
  return <p style={{ fontSize: 15.5, color: 'var(--text)', lineHeight: 1.75 }}>{children}</p>;
}

export function FormulaBlock({ formulas }: { formulas: { math: string; caption?: string }[] }) {
  return (
    <div style={{
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    }}>
      {formulas.map((f, i) => (
        <div key={i}>
          <div style={{ overflowX: 'auto' }}>
            <BlockMath math={f.math} />
          </div>
          {f.caption && <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4, textAlign: 'center' }}>{f.caption}</p>}
        </div>
      ))}
    </div>
  );
}

export function VizFrame({ children, height = 380 }: { children: ReactNode; height?: number }) {
  return (
    <div style={{
      background: 'var(--panel-raised)',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: 20,
      minHeight: height,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {children}
    </div>
  );
}
