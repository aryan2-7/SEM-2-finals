import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import PotentialViz from './PotentialViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Because ∇×E=0, the electric field can always be written as the gradient of a scalar function — the potential V.',
    math: '\\vec E = -\\nabla V',
  },
  {
    label: 'Substitute this into Gauss\'s law in differential form.',
    math: '\\nabla\\cdot\\vec E = \\frac{\\rho}{\\epsilon_0} \\implies \\nabla\\cdot(-\\nabla V) = \\frac{\\rho}{\\epsilon_0}',
  },
  {
    label: 'This gives Poisson\'s equation, valid everywhere charge density is present.',
    math: '\\nabla^2 V = -\\frac{\\rho}{\\epsilon_0}',
  },
  {
    label: 'In charge-free regions (ρ=0), this reduces to Laplace\'s equation — the workhorse of boundary-value problems in electrostatics.',
    math: '\\nabla^2 V = 0',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why can E always be written as −∇V in electrostatics?',
    options: ['It is just a convenient assumption', 'Because ∇×E=0 always holds for electrostatic fields, and any curl-free field can be expressed as a gradient', 'Only true for point charges', 'V is defined independently of E'],
    correct: 1,
    explain: 'This follows from a general vector calculus result: any field with zero curl everywhere can be written as the gradient of some scalar function — here, that scalar is the potential V.',
  },
  {
    q: 'Inside a uniformly charged spherical shell, E=0. What does that imply about V there?',
    options: ['V must also be zero', 'V is constant (nonzero in general) throughout the interior, since E=−∇V=0 means no variation', 'V is undefined inside', 'V varies linearly with r'],
    correct: 1,
    explain: 'A zero field means zero gradient, so V doesn\'t change with position inside — it just holds constant at whatever value it has on the shell\'s surface.',
  },
  {
    q: 'Laplace\'s equation ∇²V=0 applies specifically to...',
    options: ['Regions containing charge', 'Charge-free regions (ρ=0)', 'Only conductors', 'Only regions with uniform E'],
    correct: 1,
    explain: 'Laplace\'s equation is the special case of Poisson\'s equation when there\'s no local charge density — it governs V in the empty space surrounding charge distributions.',
  },
];

export default function Potential() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Electric Potential" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Because the electrostatic field is curl-free, it can always be derived from a single scalar function —
          the potential V. This scalar is often far easier to work with than the vector field itself, and its
          governing equation (Poisson's, or Laplace's in charge-free regions) is central to solving boundary
          value problems.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec E = -\\nabla V', caption: 'field from potential' },
            { math: '\\nabla^2 V = -\\frac{\\rho}{\\epsilon_0}', caption: "Poisson's equation" },
            { math: '\\nabla^2 V = 0 \\quad (\\rho=0)', caption: "Laplace's equation" },
          ]}
        />
      </Section>

      <Section label="From E to Poisson/Laplace" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: V(r) for a point charge vs shell" accent={accent}>
        <VizFrame height={300}><PotentialViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
