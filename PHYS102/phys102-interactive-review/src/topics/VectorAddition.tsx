import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import VectorAdditionViz from './VectorAdditionViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'In the head-to-tail (triangle) method, where do you place the tail of the second vector?',
    options: ['At the origin', 'At the head (tip) of the first vector', 'It doesn\'t matter where', 'At the midpoint of the first vector'],
    correct: 1,
    explain: 'Head-to-tail addition places the second vector\'s tail exactly at the first vector\'s head; the resultant then runs from the very first tail to the very last head.',
  },
  {
    q: 'What does multiplying a vector by a negative scalar do?',
    options: ['Nothing changes', 'Scales the magnitude and reverses the direction', 'Only reverses direction, magnitude unchanged', 'Only scales magnitude, direction unchanged'],
    correct: 1,
    explain: 'A negative scalar both scales the length by |scalar| and flips the direction 180° — e.g. −2A is twice as long as A but points the opposite way.',
  },
  {
    q: 'The parallelogram law and the triangle (head-to-tail) law for vector addition...',
    options: ['Give different results', 'Are equivalent — both produce the same resultant vector', 'Only work for perpendicular vectors', 'Only apply in 3D'],
    correct: 1,
    explain: 'These are just two geometric ways of visualizing the same addition — the parallelogram\'s diagonal is exactly the triangle method\'s resultant.',
  },
];

export default function VectorAddition() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Vector Addition & Scalar Multiplication" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Vectors add geometrically: place them head-to-tail (or equivalently, along the diagonal of a
          parallelogram) and the resultant runs from the first tail to the last head. Multiplying a vector by a
          scalar stretches or shrinks it, flipping direction if the scalar is negative.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec R = \\vec A + \\vec B', caption: 'vector sum (triangle / parallelogram law)' },
            { math: 'c\\vec A: \\text{ magnitude } |c|A,\\ \\text{direction reversed if } c<0', caption: 'scalar multiplication' },
          ]}
        />
      </Section>

      <Section label="Interactive: drag the angles, scale A" accent={accent}>
        <VizFrame height={300}><VectorAdditionViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
