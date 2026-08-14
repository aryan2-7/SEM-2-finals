import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import PolarizationViz from './PolarizationViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Define polarization P as dipole moment per unit volume of the material.',
    math: '\\vec P = \\frac{d\\vec p}{d\\tau} \\quad\\Longrightarrow\\quad d\\vec p = \\vec P\\,d\\tau',
  },
  {
    label: 'Each infinitesimal dipole dp contributes to the potential the way any dipole does. Integrate this over the whole polarized volume.',
    note: 'Doing this integral (by parts) splits naturally into a surface term and a volume term — this is where the bound charges come from.',
  },
  {
    label: 'The surface term, after integration by parts, has the form of a surface charge density.',
    math: '\\sigma_b = \\vec P \\cdot \\hat n',
    note: 'Uniform P produces only this surface bound charge — no charge appears in the bulk.',
  },
  {
    label: 'The remaining volume term has the form of a volume charge density.',
    math: '\\int_V \\rho_b \\, d\\tau = -\\oint_S (\\vec P\\cdot\\hat n)\\, da = -\\int_V (\\nabla\\cdot \\vec P)\\, d\\tau',
  },
  {
    label: 'Since this holds for any volume, the integrands must be equal pointwise.',
    math: '\\rho_b = -\\nabla \\cdot \\vec P',
    note: 'Bound volume charge appears only where the polarization is non-uniform, i.e. where dipoles fail to cancel locally.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'A slab has uniform polarization P pointing right. What is ρ_b inside the bulk?',
    options: ['Equal to P', 'Zero — only surface charge appears', 'Equal to −P', 'Depends on the material'],
    correct: 1,
    explain: 'Uniform P means ∇·P = 0 everywhere inside, so ρ_b = −∇·P = 0. The bound charge shows up only on the two end faces.',
  },
  {
    q: 'On the right-hand face of a slab polarized left-to-right, what is the sign of σ_b?',
    options: ['Positive', 'Negative', 'Zero', 'Alternating'],
    correct: 0,
    explain: 'σ_b = P·n̂. On the right face, n̂ points in the same direction as P, so P·n̂ > 0 — positive bound charge accumulates there.',
  },
  {
    q: 'If P increases smoothly from left to right across a slab (non-uniform), what happens?',
    options: ['Nothing changes from the uniform case', 'A nonzero ρ_b appears in the bulk in addition to σ_b', 'σ_b disappears entirely', 'P must be zero somewhere'],
    correct: 1,
    explain: 'A spatially varying P has ∇·P ≠ 0, so ρ_b = −∇·P is nonzero inside the material — adjacent dipoles no longer fully cancel.',
  },
];

export default function Polarization() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="Polarization & Bound Charge" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          When a dielectric sits in an external field, its molecules develop (or align) tiny dipole moments.
          Polarization P is the dipole-moment density that results. Even though the material stays neutral overall,
          the microscopic dipoles leave behind an effective macroscopic charge — the bound charge — wherever they
          fail to perfectly cancel: at the surface always, and in the bulk whenever P varies from point to point.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec P = \\frac{d\\vec p}{d\\tau}', caption: 'polarization: dipole moment per unit volume' },
            { math: '\\sigma_b = \\vec P \\cdot \\hat n', caption: 'bound surface charge density' },
            { math: '\\rho_b = -\\nabla \\cdot \\vec P', caption: 'bound volume charge density' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: slab polarization" accent={accent}>
        <VizFrame height={420}>
          <PolarizationViz />
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
