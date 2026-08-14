import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import type { QuizQuestion } from '../data/types';

const accent = '#5b8def';

const properties = [
  { title: 'Quantized', desc: 'Charge only comes in integer multiples of the elementary charge e — never a fraction of it.', math: 'q = \\pm ne, \\quad n \\in \\mathbb{Z}^+' },
  { title: 'Conserved', desc: 'The net charge of an isolated system never changes, no matter what interactions occur inside it.', math: '\\sum q_i = \\text{constant}' },
  { title: 'Additive', desc: 'Total charge of a system is just the algebraic (signed) sum of all individual charges.', math: 'Q_{total} = \\sum_i q_i' },
  { title: 'Invariant', desc: 'A charge\'s value does not depend on how fast the charged object is moving — unlike mass in relativity.', math: 'q(v) = q(0)' },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What does it mean for charge to be "quantized"?',
    options: ['Charge can take any value at all', 'Charge only exists in integer multiples of a fundamental unit e', 'Charge changes with temperature', 'Only electrons carry charge'],
    correct: 1,
    explain: 'Every observed free charge is an integer multiple ±ne of the elementary charge e ≈ 1.6×10⁻¹⁹ C — there\'s no such thing as half an elementary charge floating freely.',
  },
  {
    q: 'Charge conservation means...',
    options: ['Charge can be created but not destroyed', 'The net charge of an isolated system stays constant over time', 'Charge decreases over time', 'Only true for neutral systems'],
    correct: 1,
    explain: 'This is one of the most fundamental conservation laws in physics — in any isolated system, total charge in equals total charge out, always.',
  },
  {
    q: 'Why is charge invariance significant (as opposed to, say, mass in relativity)?',
    options: ['It isn\'t significant', 'A charge\'s value stays fixed regardless of its speed, unlike relativistic mass which increases with velocity', 'Charge only matters at rest', 'Charge is invariant only for protons'],
    correct: 1,
    explain: 'This is a genuinely special property — measured charge doesn\'t pick up any relativistic correction factor the way energy and momentum do.',
  },
];

export default function ChargeProperties() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Fundamental Properties of Electric Charge" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Electric charge is a fundamental property of matter with four defining characteristics that hold in
          every observed physical situation: it comes in discrete units, it's conserved, it adds algebraically,
          and it doesn't depend on motion.
        </Concept>
      </Section>

      <Section label="The four properties" accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {properties.map(p => (
            <div key={p.title} style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10, padding: '16px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-h)', marginBottom: 6 }}>{p.title}</div>
              <p style={{ fontSize: 12.5, color: 'var(--text-dim)', marginBottom: 10 }}>{p.desc}</p>
              <FormulaBlock formulas={[{ math: p.math }]} />
            </div>
          ))}
        </div>
      </Section>

      <Section label="Interactive: elementary charge" accent={accent}>
        <VizFrame height={140}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--field)', textAlign: 'center' }}>
            e = 1.6 × 10⁻¹⁹ C — every free charge you'll ever measure is an integer multiple of this
          </p>
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
