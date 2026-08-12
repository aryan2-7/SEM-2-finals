import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import DisplacementCurrentViz from './DisplacementCurrentViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'Test the original (uncorrected) Ampere\'s law by taking the divergence of both sides.',
    math: '\\nabla\\cdot(\\nabla\\times\\vec B) = \\mu_0(\\nabla\\cdot\\vec J)',
  },
  {
    label: 'The divergence of any curl is identically zero, so this forces ∇·J = 0 — but the continuity equation says otherwise whenever charge density changes with time.',
    math: '0 = \\mu_0(\\nabla\\cdot\\vec J) \\quad\\text{vs.}\\quad \\nabla\\cdot\\vec J = -\\frac{\\partial\\rho}{\\partial t}',
    note: 'A contradiction: Ampere\'s law as originally stated only works for steady currents.',
  },
  {
    label: 'Maxwell\'s fix: add an extra current term J\' to Ampere\'s law and require consistency.',
    math: '\\nabla\\times\\vec B = \\mu_0(\\vec J + \\vec J\\,\') \\quad\\Longrightarrow\\quad \\nabla\\cdot\\vec J\\,\' = -\\nabla\\cdot\\vec J = \\frac{\\partial\\rho}{\\partial t}',
  },
  {
    label: 'Substitute Gauss\'s law (ρ = ε₀∇·E) into the right side.',
    math: '\\nabla\\cdot\\vec J\\,\' = \\frac{\\partial}{\\partial t}(\\epsilon_0\\nabla\\cdot\\vec E) = \\nabla\\cdot\\left(\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}\\right)',
  },
  {
    label: 'Comparing both sides identifies the displacement current density.',
    math: '\\vec J_d = \\epsilon_0\\frac{\\partial\\vec E}{\\partial t} \\quad\\Longrightarrow\\quad \\nabla\\times\\vec B = \\mu_0\\vec J + \\mu_0\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}',
    note: 'This term has no moving charge at all — it\'s a changing electric field acting exactly like a current source for B.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why does the original (uncorrected) Ampere\'s law fail for a charging capacitor?',
    options: ['The capacitor has no current at all', 'Between the plates there is no conduction current, yet a changing E field still needs to source a B field consistently', 'Capacitors do not obey Maxwell\'s equations', 'It only fails at very high frequencies'],
    correct: 1,
    explain: 'Between the plates, no charge physically crosses the gap (J=0), but the original Ampere\'s law would then predict inconsistent results depending on which surface you choose for the Amperian loop — the displacement current fixes this.',
  },
  {
    q: 'What produces the displacement current density J_d = ε₀∂E/∂t?',
    options: ['Moving charges, just like ordinary current', 'A time-varying electric field, with no charge motion required', 'A static magnetic field', 'Only exists inside conductors'],
    correct: 1,
    explain: 'Unlike conduction current, J_d requires no charge transport at all — it is purely the rate of change of the electric field, yet it sources B exactly as real current would.',
  },
  {
    q: 'Between the plates of a charging capacitor, what does the induced B field look like?',
    options: ['Zero everywhere', 'Circulating rings around the central axis, just as if a real wire carried current there', 'Radially outward from the axis', 'Only present outside the plates'],
    correct: 1,
    explain: 'The displacement current acts as an effective source term in Ampere\'s law, producing the same azimuthal B pattern you\'d get from an actual wire carrying the equivalent current.',
  },
];

export default function DisplacementCurrent() {
  return (
    <TopicShell chapterLabel="CH. 07 — EM WAVE PROPAGATION" title="Displacement Current" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Ampere's original law breaks down whenever charge density changes with time — the classic example is
          the gap between charging capacitor plates, where no real current flows but a magnetic field is still
          observed. Maxwell resolved this by recognizing that a changing electric field itself acts as a current
          source.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec J_d = \\epsilon_0\\frac{\\partial\\vec E}{\\partial t}', caption: 'displacement current density' },
            { math: '\\nabla\\times\\vec B = \\mu_0\\vec J + \\mu_0\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}', caption: 'corrected (Ampere-Maxwell) law' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: charging capacitor" accent={accent}>
        <VizFrame height={320}><DisplacementCurrentViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
