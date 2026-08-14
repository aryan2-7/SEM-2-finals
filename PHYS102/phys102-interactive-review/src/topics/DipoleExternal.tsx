import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import DipoleExternalViz from './DipoleExternalViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Place a dipole (charges ±q separated by d) in a uniform external field E, at angle θ to the field. The net force is zero — equal and opposite forces on +q and −q cancel.',
    math: '\\vec F_{net} = q\\vec E + (-q\\vec E) = 0',
  },
  {
    label: 'The torque does not cancel, since the two forces act at different points. Compute it about the dipole center.',
    math: '\\vec\\tau = \\left(\\frac{\\vec d}{2}\\times q\\vec E\\right) + \\left(-\\frac{\\vec d}{2}\\times -q\\vec E\\right) = q\\vec d \\times \\vec E = \\vec p \\times \\vec E',
  },
  {
    label: 'Work is required to rotate the dipole against this torque, from θ₁ to θ₂.',
    math: 'W = \\int_{\\theta_1}^{\\theta_2} pE\\sin\\theta\\, d\\theta = -pE(\\cos\\theta_2 - \\cos\\theta_1)',
  },
  {
    label: 'Choosing the reference point of zero potential energy at θ₁ = 90° gives the standard potential energy formula.',
    math: 'U(\\theta) = -pE\\cos\\theta = -\\vec p \\cdot \\vec E',
  },
  {
    label: 'Extremes: minimum energy at θ=0° (p aligned with E — stable), maximum at θ=180° (p anti-aligned — unstable).',
    math: 'U_{min} = -pE \\ (\\theta=0°) \\qquad U_{max} = +pE \\ (\\theta=180°)',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why is the net force on a dipole zero in a uniform external field?',
    options: ['Because the charges are equal in magnitude but the forces still don\'t cancel', 'The forces on +q and −q are equal in magnitude, opposite in direction — they cancel exactly in a uniform field', 'Because dipoles have zero net charge, so E cannot act on them at all', 'Only true for very small dipoles'],
    correct: 1,
    explain: 'F = qE and F = −qE act on the two charges; in a uniform field these are equal and opposite regardless of orientation, so the net translational force is always zero — but the torque is not.',
  },
  {
    q: 'At what angle θ is a dipole in stable equilibrium?',
    options: ['θ = 90°', 'θ = 0° (p aligned with E)', 'θ = 180° (p anti-aligned with E)', 'There is no stable angle'],
    correct: 1,
    explain: 'U(θ) = −pE cos θ is minimized at θ=0°, meaning the dipole naturally wants to align with the field — the lowest-energy, stable configuration.',
  },
  {
    q: 'What physically happens to a dipole released at θ = 180° in a uniform field?',
    options: ['It stays put forever, in perfect balance', 'It is in unstable equilibrium — the slightest perturbation causes it to flip toward θ=0°', 'It experiences no torque and never moves', 'It accelerates translationally'],
    correct: 1,
    explain: 'At θ=180° torque is technically zero (sin 180°=0) but the equilibrium is unstable — any small deviation grows, and the dipole swings around toward the stable θ=0° alignment.',
  },
];

export default function DipoleExternal() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="Dipole in an External Electric Field" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A dipole placed in a uniform external field feels zero net force — but it does feel a torque that
          twists it to align with the field, and it carries a potential energy that depends on its orientation.
          This is the mechanism behind how polar molecules respond to applied fields.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec\\tau = \\vec p \\times \\vec E', caption: 'torque on a dipole' },
            { math: 'U(\\theta) = -\\vec p \\cdot \\vec E = -pE\\cos\\theta', caption: 'potential energy' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: rotate the dipole" accent={accent}>
        <VizFrame height={340}><DipoleExternalViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
