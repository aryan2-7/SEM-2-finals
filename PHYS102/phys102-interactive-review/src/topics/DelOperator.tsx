import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import GradientViz from './GradientViz';
import DivergenceViz from './DivergenceViz';
import CurlViz from './CurlViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'The gradient ∇T of a scalar temperature field points in the direction of...',
    options: ['Steepest decrease in T', 'Steepest increase in T', 'Constant T (along an isotherm)', 'It has no particular direction'],
    correct: 1,
    explain: '∇T always points toward increasing values of the scalar field, with magnitude equal to the rate of increase in that direction.',
  },
  {
    q: 'A vector field with ∇·F > 0 at a point behaves like...',
    options: ['A whirlpool', 'A source — field lines spread outward from that point', 'A sink — field lines converge inward', 'A field with no flux at all'],
    correct: 1,
    explain: 'Positive divergence means net outward flux from an infinitesimal volume around that point — the classic picture is a faucet or source.',
  },
  {
    q: 'If a tiny paddle wheel placed in a flow spins, what does that indicate about the field?',
    options: ['The field has zero divergence', 'The field has nonzero curl at that point', 'The field is uniform', 'The field is conservative'],
    correct: 1,
    explain: 'Curl measures local rotation. A flow with shear (different speeds at different depths, as in the animation) exerts unequal torque on the paddle wheel, causing it to spin — a direct physical picture of ∇×F ≠ 0.',
  },
];

export default function DelOperator() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="The Del Operator: Gradient, Divergence, Curl" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          The del operator ∇ acts on scalar and vector fields in three distinct ways. Applied to a scalar field it
          produces a vector (the gradient) pointing toward fastest increase. Applied to a vector field via a dot
          product it produces a scalar (the divergence) measuring net outward flux per unit volume. Applied via a
          cross product it produces a vector (the curl) measuring local rotation.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\nabla T = \\frac{\\partial T}{\\partial x}\\hat i + \\frac{\\partial T}{\\partial y}\\hat j + \\frac{\\partial T}{\\partial z}\\hat k', caption: 'gradient of scalar field T' },
            { math: '\\nabla \\cdot \\vec v = \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z}', caption: 'divergence of vector field v' },
            { math: '\\nabla \\times \\vec v = \\begin{vmatrix}\\hat i & \\hat j & \\hat k \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ v_x & v_y & v_z\\end{vmatrix}', caption: 'curl of vector field v' },
          ]}
        />
      </Section>

      <Section label="Gradient — terrain-climbing arrows" accent={accent}>
        <VizFrame height={340}><GradientViz /></VizFrame>
      </Section>

      <Section label="Divergence — source, sink, or solenoidal" accent={accent}>
        <VizFrame height={340}><DivergenceViz /></VizFrame>
      </Section>

      <Section label="Curl — paddle-wheel test" accent={accent}>
        <VizFrame height={340}><CurlViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
