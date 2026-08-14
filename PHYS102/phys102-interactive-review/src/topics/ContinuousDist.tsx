import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import ContinuousDistViz from './ContinuousDistViz';
import type { QuizQuestion } from '../data/types';

const accent = '#5b8def';

const quiz: QuizQuestion[] = [
  {
    q: 'Which density describes charge spread over a 2D surface?',
    options: ['λ (linear)', 'σ (surface)', 'ρ (volume)', 'None of these'],
    correct: 1,
    explain: 'σ = dq/da′ has units of C/m² and describes charge per unit area — the natural choice for charged sheets, plates, or shells.',
  },
  {
    q: 'The field of a continuous distribution is computed by...',
    options: ['Guessing the symmetric answer', 'Replacing the discrete sum over point charges with an integral, using the appropriate density (λ, σ, or ρ)', 'Always using Gauss\'s law regardless of symmetry', 'Only Coulomb\'s law for a single point charge'],
    correct: 1,
    explain: 'Continuous distributions are just the point-charge superposition principle taken to its integral limit — each infinitesimal charge element dq contributes a Coulomb\'s-law-style field, summed via integration.',
  },
  {
    q: 'What are the SI units of ρ, the volume charge density?',
    options: ['C/m', 'C/m²', 'C/m³', 'C'],
    correct: 2,
    explain: 'ρ = dq/dτ′ is charge per unit volume, giving units of coulombs per cubic meter.',
  },
];

export default function ContinuousDist() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Continuous Charge Distributions" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Real charged objects rarely consist of discrete point charges — instead, charge is smeared
          continuously along a line, over a surface, or through a volume. Three density functions (λ, σ, ρ)
          describe these cases, and each field calculation becomes an integral rather than a discrete sum.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec E(\\vec r) = \\frac{1}{4\\pi\\epsilon_0}\\int\\frac{\\lambda(\\vec r\\,\')\\,dl\\,\'}{\\tau^2}\\hat\\tau', caption: 'line charge (λ)' },
            { math: '\\vec E(\\vec r) = \\frac{1}{4\\pi\\epsilon_0}\\int\\frac{\\sigma(\\vec r\\,\')\\,da\\,\'}{\\tau^2}\\hat\\tau', caption: 'surface charge (σ)' },
            { math: '\\vec E(\\vec r) = \\frac{1}{4\\pi\\epsilon_0}\\int\\frac{\\rho(\\vec r\\,\')\\,d\\tau\\,\'}{\\tau^2}\\hat\\tau', caption: 'volume charge (ρ)' },
          ]}
        />
      </Section>

      <Section label="Interactive: line, surface, volume distributions" accent={accent}>
        <VizFrame height={280}><ContinuousDistViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
