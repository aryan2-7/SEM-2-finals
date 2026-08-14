import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import VectorPotentialViz from './VectorPotentialViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const steps: DerivationStep[] = [
  {
    label: 'Since ∇·B=0 always, B can be written as the curl of some vector potential A.',
    math: '\\vec B = \\nabla\\times\\vec A',
  },
  {
    label: 'A is not unique — adding the gradient of any scalar leaves B unchanged. Fix this freedom by choosing the Coulomb gauge.',
    math: '\\nabla\\cdot\\vec A = 0',
  },
  {
    label: 'Substituting B=∇×A into Ampere\'s law and using the Coulomb gauge produces a vector Poisson equation for A.',
    math: '\\nabla(\\nabla\\cdot\\vec A) - \\nabla^2\\vec A = \\mu_0\\vec J \\implies \\nabla^2\\vec A = -\\mu_0\\vec J',
  },
  {
    label: 'This has the same mathematical form as the scalar potential\'s Poisson equation, so the solution is directly analogous.',
    math: '\\vec A(\\vec r) = \\frac{\\mu_0}{4\\pi}\\int_V \\frac{\\vec J(\\vec r\\,\')}{\\tau}\\,d\\tau\\,\'',
  },
  {
    label: 'Flux can also be computed directly from A via Stokes\' theorem, without ever calculating B.',
    math: '\\Phi_m = \\int_S \\vec B\\cdot d\\vec a = \\oint_L \\vec A\\cdot d\\vec l',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why is the vector potential A not uniquely determined by B=∇×A alone?',
    options: ['It is uniquely determined', 'Adding ∇f for any scalar f leaves B unchanged, since ∇×(∇f)=0 always — this is called gauge freedom', 'A is never used in practice', 'Only true for solenoids'],
    correct: 1,
    explain: 'Because the curl of any gradient is zero, infinitely many choices of A give the same physical B — fixing a gauge (like Coulomb gauge, ∇·A=0) picks one specific, convenient A.',
  },
  {
    q: 'Outside an ideal infinite solenoid, B=0. What is A there?',
    options: ['Also zero', 'Nonzero — A falls off as 1/r outside, even though B is zero there', 'Undefined', 'Equal to the inside value'],
    correct: 1,
    explain: 'This is one of the more surprising and pedagogically important results: A is nonzero in a region with zero B, because A depends on the flux enclosed, not the local field — a hint of deeper physics (Aharonov-Bohm effect) beyond this course.',
  },
  {
    q: 'What does the flux formula Φ = ∮A·dl let you compute?',
    options: ['Only the field inside a solenoid', 'Magnetic flux through any surface, directly from A along its boundary, without computing B first', 'Only works for circular loops', 'It computes electric flux'],
    correct: 1,
    explain: "Via Stokes' theorem, integrating A around the boundary of a surface gives the flux through that surface — a genuinely useful shortcut in problems where A is easier to find than B.",
  },
];

export default function VectorPotential() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Magnetic Vector Potential A" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Because B is always divergence-free, it can be written as the curl of a vector potential A — the
          magnetic analogue of the scalar potential V. Choosing a gauge fixes A uniquely, and it obeys its own
          Poisson-like equation with the same solution structure as the scalar potential.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec B = \\nabla\\times\\vec A, \\qquad \\nabla\\cdot\\vec A = 0 \\ \\text{(Coulomb gauge)}', caption: 'definition and gauge choice' },
            { math: '\\nabla^2\\vec A = -\\mu_0\\vec J', caption: 'vector Poisson equation' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: A(r) for a solenoid" accent={accent}>
        <VizFrame height={300}><VectorPotentialViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
