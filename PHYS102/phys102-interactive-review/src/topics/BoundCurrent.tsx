import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import BoundCurrentViz from './BoundCurrentViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const steps: DerivationStep[] = [
  {
    label: 'Model a magnetized material as a dense array of microscopic current loops (atomic magnetic dipoles), each with moment m aligned with the magnetization M.',
    note: 'Picture a checkerboard of tiny current loops, all circulating the same way.',
  },
  {
    label: 'At any interior boundary between two adjacent loops, the currents on the shared edge flow in opposite directions and exactly cancel.',
    note: 'This is the physical heart of the result: bulk magnetization current is a bookkeeping artifact of incomplete cancellation, not real charge motion.',
  },
  {
    label: 'Only at the outer boundary of the sample is there no neighboring loop to cancel against — a net current survives, flowing along the surface.',
    math: '\\vec K_b = \\vec M \\times \\hat n',
    note: 'This is entirely analogous to σ_b = P·n̂ in the electric case.',
  },
  {
    label: 'Now let M vary with position. Consider two adjacent loops in the x-direction with slightly different magnetization M_y(x) and M_y(x+dx).',
    note: 'Set up a small square Amperian loop straddling the boundary between them, in the same way ∇×M is built up component by component.',
  },
  {
    label: 'The net enclosed bound current per unit length along z from the y-magnetization mismatch is the derivative of M_y with respect to x.',
    math: '\\left(\\frac{\\partial M_y}{\\partial x} - \\frac{\\partial M_x}{\\partial y}\\right) = (\\nabla \\times \\vec M)_z',
  },
  {
    label: 'Repeating for all component pairs (x–y, y–z, z–x) and assembling the full vector result gives the bound volume current density.',
    math: '\\vec J_b = \\nabla \\times \\vec M',
    note: 'Nonzero only where M varies in space — exactly parallel to ρ_b = −∇·P for non-uniform polarization.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why do bulk atomic current loops not contribute a net volume current when M is uniform?',
    options: ['The loops are too small to matter', 'Adjacent loops carry opposing currents on their shared edge, which cancel', 'Uniform M means no current flows at all', 'Only surface atoms carry current'],
    correct: 1,
    explain: 'Each interior boundary is shared by two loops circulating the same way, so their currents on that shared edge are equal and opposite — a genuine cancellation, not an absence of current.',
  },
  {
    q: 'What is K_b for a uniformly magnetized cylinder with M along its axis?',
    options: ['Zero everywhere', 'M × n̂, flowing azimuthally on the curved surface', 'Radially inward', 'Equal to J_b'],
    correct: 1,
    explain: 'K_b = M × n̂ is tangent to the surface; for axial M and a radial surface normal on the curved side, this gives a purely azimuthal surface current — like a solenoid.',
  },
  {
    q: 'J_b = ∇×M is nonzero exactly when...',
    options: ['M is large', 'M is uniform', 'M varies with position (curls or has spatial gradients)', 'The material is a conductor'],
    correct: 2,
    explain: 'Just as ρ_b requires ∇·P ≠ 0, bound volume current requires a spatially varying magnetization so that neighboring atomic loops no longer perfectly cancel.',
  },
];

export default function BoundCurrent() {
  return (
    <TopicShell chapterLabel="CH. 05 — MAGNETOSTATIC FIELD IN MATTER" title="Bound Current & Physical Interpretation" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Magnetized matter can be pictured as a dense packing of atomic current loops. Individually, none of these
          microscopic circulations is anything you could measure with an ammeter — but where they fail to cancel,
          they add up to a real, measurable macroscopic current. This happens in two places: always at the outer
          surface, and in the bulk wherever the magnetization itself varies from point to point.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec K_b = \\vec M \\times \\hat n', caption: 'bound surface current density' },
            { math: '\\vec J_b = \\nabla \\times \\vec M', caption: 'bound volume current density' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: microscopic loop cancellation" accent={accent}>
        <VizFrame height={420}>
          <BoundCurrentViz />
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
