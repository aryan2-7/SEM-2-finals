import { TopicShell, Section, Concept, FormulaBlock } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import type { QuizQuestion } from '../data/types';

const accent = '#f2b544';

const eqs = [
  { name: "Gauss's Law", math: '\\nabla\\cdot\\vec E = \\frac{\\rho}{\\epsilon_0}', desc: 'electric field diverges from charge' },
  { name: "Gauss's Law for Magnetism", math: '\\nabla\\cdot\\vec B = 0', desc: 'no magnetic monopoles' },
  { name: "Faraday's Law", math: '\\nabla\\times\\vec E = -\\frac{\\partial \\vec B}{\\partial t}', desc: 'changing B induces circulating E' },
  { name: 'Ampere-Maxwell Law', math: '\\nabla\\times\\vec B = \\mu_0\\vec J + \\mu_0\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}', desc: 'current and changing E both induce circulating B' },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Which of the four Maxwell equations is the direct statement that magnetic monopoles do not exist?',
    options: ["Gauss's law", "Gauss's law for magnetism (∇·B=0)", "Faraday's law", 'The Ampere-Maxwell law'],
    correct: 1,
    explain: '∇·B=0 says magnetic field lines never diverge from a point source the way E does from charge — there is no magnetic equivalent of a point charge (monopole).',
  },
  {
    q: 'What is the key modification Maxwell made to Ampere\'s original law?',
    options: ['Removed the current term entirely', 'Added the displacement current term μ₀ε₀∂E/∂t, allowing a changing E field to also source B', 'Changed the sign of the equation', 'Replaced B with E everywhere'],
    correct: 1,
    explain: 'This addition is what makes the four equations fully self-consistent under all conditions (not just steady currents) and is what ultimately allows self-propagating EM waves to exist.',
  },
  {
    q: 'Together, these four equations in vacuum are sufficient to derive...',
    options: ['Only Coulomb\'s law', 'The existence of electromagnetic waves traveling at the speed of light', 'Only static fields', 'Nothing beyond what Coulomb\'s law already gives'],
    correct: 1,
    explain: 'Combining these four vacuum equations (as shown in the wave-equation derivation) directly produces wave equations for E and B, with propagation speed c = 1/√(μ₀ε₀) — one of the great unifications in physics.',
  },
];

export default function MaxwellVacuum() {
  return (
    <TopicShell chapterLabel="CH. 07 — EM WAVE PROPAGATION" title="Maxwell's Equations in Vacuum" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Four equations completely describe classical electromagnetism in vacuum. Individually, each has a
          clear physical meaning; together, they're a closed, self-consistent system that predicts the existence
          of electromagnetic waves traveling at exactly the speed of light.
        </Concept>
      </Section>

      <Section label="The four equations" accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
          {eqs.map(eq => (
            <div key={eq.name} style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10, padding: '16px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-h)', marginBottom: 10 }}>{eq.name}</div>
              <FormulaBlock formulas={[{ math: eq.math }]} />
              <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 8 }}>{eq.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
