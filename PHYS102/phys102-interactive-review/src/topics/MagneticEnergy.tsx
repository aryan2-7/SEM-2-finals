import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import MagneticEnergyViz from './MagneticEnergyViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'Circuit derivation: work done against back-EMF to bring current from 0 to I.',
    math: 'P = -\\mathcal{E}I = LI\\frac{dI}{dt} \\implies W = \\int_0^I LI\\,dI = \\frac12 LI^2',
  },
  {
    label: 'Field derivation: express W using vector potential and current density, then substitute Ampere\'s law (J = ∇×B/μ₀).',
    math: 'W = \\frac12 I\\oint_C \\vec A\\cdot d\\vec l = \\frac{1}{2\\mu_0}\\int_{vol}\\vec A\\cdot(\\nabla\\times\\vec B)\\,d\\tau',
  },
  {
    label: 'Apply the vector identity A·(∇×B) = B² − ∇·(A×B), then the divergence theorem — the surface term vanishes at infinity.',
    math: 'W = \\frac{1}{2\\mu_0}\\int_{\\text{all space}} B^2\\, d\\tau',
  },
  {
    label: 'This identifies the magnetic energy density, exactly parallel to the electric case.',
    math: 'u_m = \\frac{B^2}{2\\mu_0}',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'The circuit-based formula W = ½LI² and the field-based formula W = ∫(B²/2μ₀)dτ are related how?',
    options: ['They are unrelated and give different answers', 'They are two equivalent ways to compute the exact same total energy — one via the circuit, one via the field', 'Only the circuit formula is correct', 'Only the field formula is correct'],
    correct: 1,
    explain: "Both derivations start from the same physical process (building up current from zero) and must agree — this is confirmed explicitly in the chapter's step-by-step derivation.",
  },
  {
    q: 'How does magnetic energy density scale with field strength B?',
    options: ['Linearly', 'As B² — quadratically', 'As 1/B', 'Energy density is independent of B'],
    correct: 1,
    explain: 'u_m = B²/2μ₀ — doubling B quadruples the local energy density, exactly analogous to how electric energy density scales as E².',
  },
  {
    q: 'Where does the surface term vanish in the field-derivation of magnetic energy?',
    options: ['It never vanishes', 'At infinity, since A and B both fall off fast enough that the surface integral over a boundary pushed to infinity goes to zero', 'Only inside conductors', 'It vanishes at the origin'],
    correct: 1,
    explain: "Integrating over all space and pushing the bounding surface to infinity, both A and B decay fast enough that ∮(A×B)·da → 0 there, leaving only the volume integral of B²/μ₀.",
  },
];

export default function MagneticEnergy() {
  return (
    <TopicShell chapterLabel="CH. 06 — ELECTROMAGNETIC INDUCTION" title="Energy Stored in a Magnetic Field" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Building up current in an inductor requires doing work against the self-induced back-EMF. That energy
          can be tracked two equivalent ways — through the circuit (½LI²) or through the field itself
          (integrating an energy density over all space) — and both approaches must, and do, agree.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'W = \\frac12 LI^2', caption: 'circuit-derivation energy' },
            { math: 'u_m = \\frac{B^2}{2\\mu_0}', caption: 'magnetic energy density' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: energy density scales with B²" accent={accent}>
        <VizFrame height={260}><MagneticEnergyViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
