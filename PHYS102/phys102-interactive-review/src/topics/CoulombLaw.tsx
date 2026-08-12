import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import CoulombViz from './CoulombViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Coulomb\'s law gives the force on a test charge Q due to a single source charge q separated by the vector τ.',
    math: '\\vec F = \\frac{1}{4\\pi\\epsilon_0}\\frac{qQ}{\\tau^2}\\hat\\tau',
  },
  {
    label: 'For n source charges, each exerts its own independent force on Q — electric forces obey the superposition principle.',
    math: '\\vec F = \\vec F_1 + \\vec F_2 + \\cdots + \\vec F_n',
  },
  {
    label: 'Writing this as a sum gives the net force from an arbitrary collection of point charges.',
    math: '\\vec F = \\frac{Q}{4\\pi\\epsilon_0}\\sum_{i=1}^n \\frac{q_i}{\\tau_i^2}\\hat\\tau_i',
    note: 'This is the foundation for every continuous-charge-distribution field calculation in the chapter — replace the sum with an integral.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Two charges of the same sign are brought closer together. What happens to the force between them?',
    options: ['Decreases', 'Increases (force ∝ 1/r²)', 'Stays the same', 'Becomes attractive'],
    correct: 1,
    explain: 'Coulomb force scales as 1/τ², so halving the distance quadruples the force magnitude — same-sign charges still repel, just harder.',
  },
  {
    q: 'The superposition principle for electric forces means...',
    options: ['Only the nearest charge matters', 'Each source charge contributes independently; the net force is the vector sum of all individual forces', 'Forces from multiple charges always cancel', 'Charges must be equal for superposition to apply'],
    correct: 1,
    explain: 'Superposition holds regardless of charge magnitudes or positions — every pairwise Coulomb force adds vectorially, which is what makes continuous charge distributions tractable via integration.',
  },
  {
    q: 'If you flip the sign of one charge in a pair, what happens to the force direction?',
    options: ['Nothing changes', 'It reverses — repulsion becomes attraction or vice versa', 'The force disappears', 'Only the magnitude changes'],
    correct: 1,
    explain: 'F ∝ qQ, so flipping the sign of one charge flips the sign of the whole force — attraction and repulsion swap.',
  },
];

export default function CoulombLaw() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Coulomb's Law & Superposition" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Coulomb's law describes the force between two point charges: proportional to the product of their
          charges, inversely proportional to the square of their separation, and directed along the line joining
          them. When more than two charges are present, the superposition principle says you can just add up each
          pairwise force independently — no interaction terms, no complications.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec F = \\frac{1}{4\\pi\\epsilon_0}\\frac{qQ}{\\tau^2}\\hat\\tau', caption: "Coulomb's law" },
            { math: '\\vec F = \\frac{Q}{4\\pi\\epsilon_0}\\sum_{i=1}^n \\frac{q_i}{\\tau_i^2}\\hat\\tau_i', caption: 'superposition over n source charges' },
          ]}
        />
      </Section>

      <Section label="From two charges to n charges" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: drag the charges" accent={accent}>
        <VizFrame height={340}><CoulombViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
