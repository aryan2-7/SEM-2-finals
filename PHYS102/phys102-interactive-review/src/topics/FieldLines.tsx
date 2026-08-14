import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import FieldLinesViz from './FieldLinesViz';
import type { QuizQuestion } from '../data/types';

const accent = '#5b8def';

const quiz: QuizQuestion[] = [
  {
    q: 'Where do electric field lines originate and terminate?',
    options: ['They originate on negative charges and end on positive', 'They originate on positive charges and terminate on negative charges (or infinity)', 'They form closed loops', 'They have no defined start or end'],
    correct: 1,
    explain: 'By convention (matching the direction of E, the force on a positive test charge), field lines emerge from positive charges and converge onto negative charges.',
  },
  {
    q: 'Can two electric field lines ever cross?',
    options: ['Yes, frequently', 'No — E has a single well-defined direction at every point, so lines can never intersect', 'Only at the location of a charge', 'Only in non-uniform fields'],
    correct: 1,
    explain: 'If two lines crossed, the field would have to point in two different directions at that same point, which is impossible for a well-defined vector field.',
  },
  {
    q: 'If a +2q charge and a −q charge are shown with field lines, what happens to the "extra" lines from +2q that don\'t end on −q?',
    options: ['They simply don\'t exist', 'They travel outward to infinity, since a net positive charge still has field lines terminating at infinity', 'They double back to +2q', 'The diagram is drawn incorrectly'],
    correct: 1,
    explain: 'With unequal charge magnitudes, the number of lines leaving the positive charge exceeds the number arriving at the negative one — the excess lines simply extend outward, reflecting the nonzero net charge.',
  },
];

export default function FieldLines() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Electric Field Lines & Flux" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Field lines are a visualization tool: their direction shows E at every point, and their density
          (how closely packed they are) shows field strength. A few simple rules govern how they behave, and
          those rules directly encode the underlying physics of Coulomb's law and charge conservation.
        </Concept>
      </Section>

      <Section label="Rules" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\text{originate on } +, \\text{ terminate on } - \\quad|\\quad \\text{count} \\propto |q| \\quad|\\quad \\text{never cross}', caption: 'field line rules' },
            { math: '\\Phi_E = \\int_S \\vec E \\cdot d\\vec a', caption: 'electric flux — the formal count of field lines through a surface' },
          ]}
        />
      </Section>

      <Section label="Interactive: dipole vs unequal charges" accent={accent}>
        <VizFrame height={300}><FieldLinesViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
