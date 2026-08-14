import { useState } from 'react';
import { TopicShell, Section, Concept, FormulaBlock } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const rules = [
  { math: '\\nabla(fg) = f\\nabla g + g\\nabla f', label: 'gradient of a product' },
  { math: '\\nabla(\\vec A\\cdot\\vec B) = \\vec A\\times(\\nabla\\times\\vec B) + \\vec B\\times(\\nabla\\times\\vec A) + (\\vec A\\cdot\\nabla)\\vec B + (\\vec B\\cdot\\nabla)\\vec A', label: 'gradient of a dot product' },
  { math: '\\nabla\\cdot(f\\vec A) = f(\\nabla\\cdot\\vec A) + \\vec A\\cdot(\\nabla f)', label: 'divergence of a scalar times a vector' },
  { math: '\\nabla\\cdot(\\vec A\\times\\vec B) = \\vec B\\cdot(\\nabla\\times\\vec A) - \\vec A\\cdot(\\nabla\\times\\vec B)', label: 'divergence of a cross product' },
  { math: '\\nabla\\times(f\\vec A) = f(\\nabla\\times\\vec A) - \\vec A\\times(\\nabla f)', label: 'curl of a scalar times a vector' },
  { math: '\\nabla\\times(\\vec A\\times\\vec B) = (\\vec B\\cdot\\nabla)\\vec A - (\\vec A\\cdot\\nabla)\\vec B + \\vec A(\\nabla\\cdot\\vec B) - \\vec B(\\nabla\\cdot\\vec A)', label: 'curl of a cross product' },
];

const quiz: QuizQuestion[] = [
  {
    q: 'The product rule ∇(fg) = f∇g + g∇f is structurally most similar to which single-variable calculus rule?',
    options: ['The chain rule', 'The ordinary product rule d(fg)/dx = f(dg/dx) + g(df/dx)', 'The quotient rule', 'Integration by parts'],
    correct: 1,
    explain: 'This is precisely the multivariable analogue of the familiar single-variable product rule — each derivative operator distributes across the product the same way.',
  },
  {
    q: 'Which identity would you reach for to simplify ∇·(f A) where f is scalar and A is a vector field?',
    options: ['∇×(fA) = f(∇×A) − A×(∇f)', '∇·(fA) = f(∇·A) + A·(∇f)', '∇(fg) = f∇g + g∇f', 'The BAC-CAB rule'],
    correct: 1,
    explain: 'This is exactly the divergence-of-a-scalar-times-a-vector identity — a very common simplification tool, e.g. when pulling permittivity out of a divergence.',
  },
];

export default function ProductRules() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Product Rules for ∇" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Just as ordinary calculus has a product rule for derivatives, vector calculus has six product rules
          for the del operator acting on products of scalar and vector fields. These are used constantly to
          simplify expressions in electromagnetism — click a card to flip it and check yourself.
        </Concept>
      </Section>

      <Section label="Reference cards (click to reveal)" accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
          {rules.map((r, i) => (
            <button
              key={i}
              onClick={() => setFlipped(f => (f === i ? null : i))}
              style={{
                textAlign: 'left', background: 'var(--panel)', border: '1px solid var(--border)',
                borderRadius: 10, padding: '16px 18px', cursor: 'pointer', minHeight: 90,
              }}
            >
              <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 10, fontFamily: 'var(--mono)' }}>
                {r.label}
              </div>
              {flipped === i ? (
                <FormulaBlock formulas={[{ math: r.math }]} />
              ) : (
                <div style={{ fontSize: 12, color: 'var(--text-dim)', fontStyle: 'italic' }}>click to reveal</div>
              )}
            </button>
          ))}
        </div>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
