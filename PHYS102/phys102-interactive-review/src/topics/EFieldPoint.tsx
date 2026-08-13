import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import PointChargeFieldViz from './PointChargeFieldViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'The electric field of a point charge follows directly from Coulomb\'s law divided by the test charge Q.',
    math: '\\vec E(\\vec r) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{\\tau^2}\\hat\\tau',
  },
  {
    label: 'The line integral of E along any path from a to b evaluates to a function only of the endpoint distances.',
    math: '\\int_a^b \\vec E\\cdot d\\vec l = \\frac{q}{4\\pi\\epsilon_0}\\left[\\frac{1}{r_a} - \\frac{1}{r_b}\\right]',
  },
  {
    label: 'Since this result depends only on r_a and r_b (not the path shape), the line integral around any closed loop must vanish.',
    math: '\\oint \\vec E\\cdot d\\vec l = 0',
  },
  {
    label: 'Applying Stokes\' theorem to this zero-circulation result gives the differential statement that electrostatic fields are curl-free.',
    math: '\\nabla \\times \\vec E = 0',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why is the line integral of E path-independent for a point charge field?',
    options: ['It isn\'t actually path-independent', 'The result depends only on 1/r_a − 1/r_b, which only involves the endpoint distances, not the specific route taken', 'Only true for straight-line paths', 'Path independence only holds in a vacuum'],
    correct: 1,
    explain: 'The explicit integral evaluates to a function of only the start and end radii — any two paths sharing those same endpoints give the identical result.',
  },
  {
    q: 'What does ∮E·dl = 0 for any closed loop directly imply?',
    options: ['E must be zero everywhere', 'The electrostatic field is conservative — it can be written as the gradient of a scalar potential', 'Only true for uniform fields', 'The charge must be at the loop\'s center'],
    correct: 1,
    explain: 'A field with zero circulation around every closed loop is, by definition, conservative — this is exactly the property that lets you define an electric potential V.',
  },
  {
    q: 'What is the differential-form equivalent of ∮E·dl=0?',
    options: ['∇·E = 0', '∇×E = 0', '∇²E = 0', '∇E = constant'],
    correct: 1,
    explain: 'Stokes\' theorem converts the vanishing closed-loop line integral into the local statement that the curl of E is zero everywhere in electrostatics.',
  },
];

export default function EFieldPoint() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Field of a Point Charge & Path Independence" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A point charge's electric field falls off as 1/r², pointing radially. A striking consequence follows
          when you compute the work needed to move a test charge through this field: it depends only on the
          starting and ending points, never on the path in between. This path-independence is the defining
          feature of a conservative field.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec E(\\vec r) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{\\tau^2}\\hat\\tau', caption: 'field of a point charge' },
            { math: '\\oint \\vec E\\cdot d\\vec l = 0 \\quad\\Longleftrightarrow\\quad \\nabla\\times\\vec E = 0', caption: 'conservative field condition' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: two paths, same result" accent={accent}>
        <VizFrame height={280}><PointChargeFieldViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
