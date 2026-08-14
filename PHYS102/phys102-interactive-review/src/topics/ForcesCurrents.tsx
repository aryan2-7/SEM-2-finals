import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import ForcesOnCurrentsViz from './ForcesOnCurrentsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'A straight wire carries current I to the right in a field B pointing into the page. Which direction is the force?',
    options: ['To the right, along the current', 'Upward, by the right-hand rule for I×B', 'Into the page', 'There is no force'],
    correct: 1,
    explain: 'F = IL×B: pointing fingers along I (right) and curling toward B (into page) via the right-hand rule gives F pointing upward.',
  },
  {
    q: 'How does force on a current-carrying wire scale with the current magnitude?',
    options: ['Independent of I', 'Directly proportional to I', 'Proportional to I²', 'Inversely proportional to I'],
    correct: 1,
    explain: 'F = IL×B is linear in I — doubling the current doubles the force, for fixed length and field.',
  },
  {
    q: 'For a volume current distribution, what is the general force formula?',
    options: ['F = ∫(J×B)dτ, integrating over the volume', 'F = ∫Jdτ only', 'F = J·B', 'Volume currents feel no net force'],
    correct: 0,
    explain: 'This generalizes the simple IL×B formula for a straight wire to any current distribution — integrate the local force density J×B over the whole volume.',
  },
];

export default function ForcesCurrents() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Forces on Current-Carrying Conductors" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A current is just a stream of moving charges, so a current-carrying wire in a magnetic field feels a
          net force — the sum of the tiny Lorentz forces on every individual charge carrier. For a straight wire
          this collapses to a simple, memorable formula.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec F = I(\\vec l \\times \\vec B)', caption: 'force on a straight current-carrying wire' },
            { math: '\\vec F_m = \\int_V (\\vec J\\times\\vec B)\\,d\\tau', caption: 'general volume current' },
          ]}
        />
      </Section>

      <Section label="Interactive: wire in a field" accent={accent}>
        <VizFrame height={260}><ForcesOnCurrentsViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
