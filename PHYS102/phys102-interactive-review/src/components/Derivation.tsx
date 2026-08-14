import { useState } from 'react';
import { BlockMath } from 'react-katex';
import type { DerivationStep } from '../data/types';

export default function Derivation({ steps, accent = 'var(--amber)' }: { steps: DerivationStep[]; accent?: string }) {
  const [shown, setShown] = useState(1);
  const done = shown >= steps.length;

  return (
    <div style={{
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '24px 28px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: accent, letterSpacing: 1 }}>
          DERIVATION
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-dim)' }}>
          {shown} / {steps.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {steps.slice(0, shown).map((step, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 14,
              animation: i === shown - 1 ? 'stepIn 0.35s ease' : undefined,
              paddingLeft: 14,
              borderLeft: `2px solid ${i === shown - 1 && !done ? accent : 'var(--border)'}`,
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ color: 'var(--text)', fontSize: 14.5, marginBottom: step.math ? 10 : 0 }}>
                {step.label}
              </p>
              {step.math && (
                <div style={{ overflowX: 'auto', padding: '2px 0' }}>
                  <BlockMath math={step.math} />
                </div>
              )}
              {step.note && (
                <p style={{ color: 'var(--text-dim)', fontSize: 12.5, marginTop: 8, fontStyle: 'italic' }}>
                  {step.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
        <button
          onClick={() => setShown(s => Math.min(steps.length, s + 1))}
          disabled={done}
          style={{
            background: done ? 'var(--panel-raised)' : accent,
            color: done ? 'var(--text-dim)' : '#0b0e14',
            border: 'none',
            borderRadius: 6,
            padding: '9px 18px',
            fontSize: 13.5,
            fontWeight: 600,
            opacity: done ? 0.5 : 1,
          }}
        >
          {done ? 'Complete' : 'Next step →'}
        </button>
        {shown > 1 && (
          <button
            onClick={() => setShown(1)}
            style={{
              background: 'transparent',
              color: 'var(--text-dim)',
              border: '1px solid var(--border)',
              borderRadius: 6,
              padding: '9px 16px',
              fontSize: 13.5,
            }}
          >
            Reset
          </button>
        )}
      </div>

      <style>{`
        @keyframes stepIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
