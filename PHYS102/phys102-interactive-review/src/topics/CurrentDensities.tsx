import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import CurrentDensitiesViz from './CurrentDensitiesViz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'What does the surface current density K represent?',
    options: ['Current per unit volume', 'Current per unit width, flowing across a surface', 'Total current in a wire', 'Charge density on a surface'],
    correct: 1,
    explain: 'K = dI/dl⊥ measures current crossing a line of unit width on a surface — the natural description for currents confined to a thin conducting sheet.',
  },
  {
    q: 'The continuity equation ∇·J + ∂ρ/∂t = 0 expresses...',
    options: ['Conservation of energy', 'Local conservation of electric charge', 'Newton\'s third law', 'Conservation of momentum'],
    correct: 1,
    explain: 'This equation says any net outflow of current from a region (∇·J) must be exactly balanced by a decreasing charge density there (−∂ρ/∂t) — charge cannot appear or vanish locally.',
  },
  {
    q: 'For steady currents (magnetostatics), what does the continuity equation reduce to?',
    options: ['∇·J = ρ/ε₀', '∇·J = 0', '∇×J = 0', 'J = constant everywhere'],
    correct: 1,
    explain: 'When ∂ρ/∂t = 0 (steady-state), the continuity equation simplifies to ∇·J=0 — this is exactly the condition that makes the original (uncorrected) Ampere\'s law self-consistent.',
  },
];

export default function CurrentDensities() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Current Densities & the Continuity Equation" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Just as charge can be distributed along a line, over a surface, or through a volume, current comes in
          three matching flavors: line current I, surface current K, and volume current J. Underlying all of
          them is the continuity equation — the precise local statement that charge is conserved.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'I = \\lambda v, \\qquad \\vec K = \\sigma\\vec v, \\qquad \\vec J = \\rho\\vec v', caption: 'line, surface, and volume current density' },
            { math: '\\nabla\\cdot\\vec J + \\frac{\\partial\\rho}{\\partial t} = 0', caption: 'continuity equation' },
          ]}
        />
      </Section>

      <Section label="Interactive: three types of current" accent={accent}>
        <VizFrame height={260}><CurrentDensitiesViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
