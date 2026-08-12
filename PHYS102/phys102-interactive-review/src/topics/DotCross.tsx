import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import DotProductViz from './DotProductViz';
import CrossProductViz from './CrossProductViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'What does A·B represent geometrically?',
    options: ['The area of the parallelogram formed by A and B', '|A| times the projection of B onto A (or vice versa)', 'A vector perpendicular to both A and B', 'Always zero unless A=B'],
    correct: 1,
    explain: 'The dot product measures how much one vector points along the other — it\'s the magnitude of one vector times the projection of the other onto it.',
  },
  {
    q: 'If A·B = 0 for two nonzero vectors, what does that tell you?',
    options: ['A and B are parallel', 'A and B are perpendicular (θ=90°)', 'A and B are equal', 'One of them must be the zero vector'],
    correct: 1,
    explain: 'cos(90°) = 0, so a zero dot product between nonzero vectors means they are exactly perpendicular.',
  },
  {
    q: 'The magnitude |A×B| equals...',
    options: ['The dot product A·B', 'The area of the parallelogram spanned by A and B', 'Always zero', 'The sum |A|+|B|'],
    correct: 1,
    explain: '|A×B| = |A||B|sinθ is precisely the area of the parallelogram with sides A and B — this is the standard geometric interpretation.',
  },
];

export default function DotCross() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Dot Product & Cross Product" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          The dot product combines two vectors into a scalar that measures alignment — maximal when parallel,
          zero when perpendicular. The cross product combines them into a new vector, perpendicular to both,
          whose magnitude equals the area of the parallelogram they span and whose direction follows the
          right-hand rule.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec A \\cdot \\vec B = |A||B|\\cos\\theta = A_xB_x + A_yB_y + A_zB_z', caption: 'dot product' },
            { math: '\\vec A \\times \\vec B = |A||B|\\sin\\theta\\,\\hat n = \\begin{vmatrix}\\hat i & \\hat j & \\hat k \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z\\end{vmatrix}', caption: 'cross product' },
          ]}
        />
      </Section>

      <Section label="Interactive: dot product & projection" accent={accent}>
        <VizFrame height={320}><DotProductViz /></VizFrame>
      </Section>

      <Section label="Interactive: cross product & parallelogram area" accent={accent}>
        <VizFrame height={320}><CrossProductViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
