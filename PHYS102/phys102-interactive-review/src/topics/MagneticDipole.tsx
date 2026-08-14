import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import MagneticDipoleViz from './MagneticDipoleViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const steps: DerivationStep[] = [
  {
    label: 'A current loop of area A carrying current I has a magnetic dipole moment m = IA, directed by the right-hand rule (curl fingers along current flow, thumb points along m).',
    math: '\\vec m = I\\vec A',
  },
  {
    label: 'Placed in a uniform external field B at angle θ, the loop feels a torque that tends to align m with B — completely analogous to the electric dipole case.',
    math: '\\vec\\tau = \\vec m \\times \\vec B',
  },
  {
    label: 'The associated potential energy follows the same pattern as the electric dipole, with p→m and E→B.',
    math: 'U(\\theta) = -\\vec m \\cdot \\vec B = -mB\\cos\\theta',
  },
  {
    label: 'Stable equilibrium (minimum energy) occurs when m is aligned with B; unstable equilibrium (maximum energy) when anti-aligned.',
    math: 'U_{min} = -mB\\ (\\theta=0°) \\qquad U_{max} = +mB\\ (\\theta=180°)',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'For a current loop, which direction does the magnetic moment m point?',
    options: ['Always along the current direction itself', 'Perpendicular to the loop plane, set by the right-hand rule applied to the current direction', 'Toward the nearest magnetic pole', 'It has no defined direction'],
    correct: 1,
    explain: 'Curling the right-hand fingers along the direction of current flow, the thumb points along m — this convention fixes m perpendicular to the loop plane.',
  },
  {
    q: 'How does the torque/energy relationship for a magnetic dipole compare to an electric dipole?',
    options: ['They are completely unrelated', 'Mathematically identical in form: τ = m×B and U = −m·B mirror τ = p×E and U = −p·E', 'Magnetic dipoles feel no torque', 'Only true for very small loops'],
    correct: 1,
    explain: 'The magnetic dipole in a field behaves exactly like the electric dipole case, just with m replacing p and B replacing E — the same physics, different field type.',
  },
  {
    q: 'A compass needle (a magnetic dipole) in Earth\'s field settles pointing along the field. Why?',
    options: ['Random chance', 'It settles at the minimum-energy orientation, θ=0°, where m is aligned with B', 'Compasses always point at θ=90°', 'The needle experiences no torque at all'],
    correct: 1,
    explain: 'The needle experiences a restoring torque toward θ=0° (aligned with the local field) — exactly the stable equilibrium predicted by U(θ) = −mB cosθ.',
  },
];

export default function MagneticDipole() {
  return (
    <TopicShell chapterLabel="CH. 05 — MAGNETOSTATIC FIELD IN MATTER" title="Magnetic Dipole Moment" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A current loop behaves as a magnetic dipole, with moment m = IA set by the current and loop area. In a
          uniform external field, this dipole feels a torque that twists it toward alignment — the same physics
          that makes a compass needle point along a magnetic field line.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec m = I\\vec A', caption: 'magnetic dipole moment of a current loop' },
            { math: '\\vec\\tau = \\vec m \\times \\vec B, \\qquad U(\\theta) = -\\vec m \\cdot \\vec B', caption: 'torque and potential energy in a field' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: rotate the loop" accent={accent}>
        <VizFrame height={320}><MagneticDipoleViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
