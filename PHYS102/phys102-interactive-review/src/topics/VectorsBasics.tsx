import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import VectorBasicsViz from './VectorBasicsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'What distinguishes a vector from a scalar?',
    options: ['Vectors are always bigger', 'A vector has both magnitude and direction; a scalar has only magnitude', 'Scalars can be negative, vectors cannot', 'There is no real difference'],
    correct: 1,
    explain: 'This is the defining distinction: temperature or mass (scalars) are fully specified by a single number, while velocity or force (vectors) also need a direction.',
  },
  {
    q: 'What is −A relative to A?',
    options: ['A vector with the same direction but different magnitude', 'A vector with the same magnitude but exactly reversed direction', 'Always the zero vector', 'A scalar'],
    correct: 1,
    explain: 'Negating a vector flips its direction 180° while preserving its length — same magnitude, opposite sense.',
  },
  {
    q: 'Which of these is a scalar quantity?',
    options: ['Force', 'Velocity', 'Mass', 'Electric field'],
    correct: 2,
    explain: 'Mass has only a magnitude (e.g. 5 kg) with no associated direction, making it a scalar — unlike force, velocity, or field, which all need a direction to be fully specified.',
  },
];

export default function VectorsBasics() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Scalars, Vectors & Notation" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A scalar is fully described by a single number (with units) — mass, temperature, charge. A vector
          needs both a magnitude and a direction — displacement, force, electric field. Vectors are usually
          written with an arrow or boldface, and their negative simply reverses the direction while keeping the
          magnitude unchanged.
        </Concept>
      </Section>

      <Section label="Notation" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec A, \\quad |\\vec A| = A \\quad (\\text{magnitude, always} \\geq 0)', caption: 'vector and its magnitude' },
            { math: '-\\vec A: \\text{ same magnitude, opposite direction}', caption: 'negation' },
          ]}
        />
      </Section>

      <Section label="Interactive: negating a vector" accent={accent}>
        <VizFrame height={260}><VectorBasicsViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
