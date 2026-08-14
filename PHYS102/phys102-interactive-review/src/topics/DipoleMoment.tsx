import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import DipoleMomentViz from './DipoleMomentViz';
import type { QuizQuestion } from '../data/types';

const accent = '#5b8def';

const quiz: QuizQuestion[] = [
  {
    q: 'Which direction does the electric dipole moment p point?',
    options: ['From +q toward −q', 'From −q toward +q', 'Perpendicular to the line joining the charges', 'It has no fixed direction'],
    correct: 1,
    explain: 'By definition p = qd, where d is the displacement vector from the negative to the positive charge — so p points from − to +.',
  },
  {
    q: 'If you double the separation d while keeping q fixed, what happens to p?',
    options: ['p is unchanged', 'p doubles', 'p halves', 'p becomes zero'],
    correct: 1,
    explain: 'p = qd is directly proportional to separation — doubling d directly doubles the dipole moment magnitude.',
  },
  {
    q: 'What are the SI units of electric dipole moment?',
    options: ['C (coulombs)', 'C·m (coulomb-meters)', 'N/C', 'J'],
    correct: 1,
    explain: 'p = qd combines a charge (coulombs) with a displacement (meters), giving coulomb-meters as the natural unit.',
  },
];

export default function DipoleMoment() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="Electric Dipole & Dipole Moment" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          An electric dipole is simply a pair of equal and opposite charges separated by some small distance.
          The dipole moment p packages both the charge magnitude and the separation into a single vector,
          pointing from the negative charge toward the positive one — this is the fundamental quantity used
          throughout the study of polarized matter.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock formulas={[{ math: '\\vec p = q\\vec d', caption: 'dipole moment; direction from −q to +q' }]} />
      </Section>

      <Section label="Interactive: separation controls |p|" accent={accent}>
        <VizFrame height={240}><DipoleMomentViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
