import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import ComponentCalcViz from './ComponentCalcViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'In component form, A·B equals...',
    options: ['AxBy + AyBx', 'AxBx + AyBy + AzBz', '(Ax+Bx, Ay+By, Az+Bz)', 'AxBx − AyBy'],
    correct: 1,
    explain: 'The dot product in Cartesian components is the sum of the products of corresponding components — a purely algebraic shortcut that matches |A||B|cosθ.',
  },
  {
    q: 'The determinant formula for A×B expands to give a...',
    options: ['Scalar', 'Vector, with each component from a 2×2 minor', 'Matrix', 'Always the zero vector'],
    correct: 1,
    explain: 'Expanding the 3×3 determinant along the top row (î, ĵ, k̂) produces the three Cartesian components of the cross product vector.',
  },
  {
    q: 'If A×B computed from components comes out as (0,0,0), what does that mean geometrically?',
    options: ['A and B are perpendicular', 'A and B are parallel (or one is the zero vector)', 'A and B have equal magnitude', 'An error occurred'],
    correct: 1,
    explain: 'Since |A×B| = |A||B|sinθ, a zero cross product means sinθ=0, i.e. θ=0° or 180° — the vectors are parallel or anti-parallel.',
  },
];

export default function ComponentForm() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Component Form: Dot & Cross Product" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Once vectors are broken into Cartesian components, both the dot and cross products become purely
          algebraic operations — no angles or geometric reasoning required. This makes component form the
          practical tool of choice for actual calculations.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec A \\cdot \\vec B = A_xB_x + A_yB_y + A_zB_z', caption: 'dot product from components' },
            { math: '\\vec A \\times \\vec B = \\begin{vmatrix}\\hat i & \\hat j & \\hat k \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z\\end{vmatrix}', caption: 'cross product as a determinant' },
          ]}
        />
      </Section>

      <Section label="Interactive: vector calculator" accent={accent}>
        <VizFrame height={260}><ComponentCalcViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
