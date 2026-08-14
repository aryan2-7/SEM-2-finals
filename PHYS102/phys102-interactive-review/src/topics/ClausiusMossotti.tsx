import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import ClausiusMossottiViz from './ClausiusMossottiViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Consider a small spherical cavity cut inside a uniformly polarized medium. The bound surface charge induced on the cavity wall is σ_b = −P·n̂ = −P cosθ.',
  },
  {
    label: 'Integrating the field contribution from this cavity surface charge at the cavity center gives the "cavity field."',
    math: 'E_C = \\frac{P}{4\\pi\\epsilon_0}\\int_0^\\pi\\cos^2\\theta\\sin\\theta\\,d\\theta\\int_0^{2\\pi}d\\phi = \\frac{P}{3\\epsilon_0}',
  },
  {
    label: 'The actual "molecular field" felt by an individual molecule inside the medium is the macroscopic field E plus this local cavity correction.',
    math: '\\vec E_m = \\vec E + \\vec E_C = \\vec E + \\frac{\\vec P}{3\\epsilon_0}',
  },
  {
    label: 'Express this in terms of molecular polarizability α_m (p_m = α_mE_m) and the number density N of molecules, using P = Np_m and P = χ_eε₀E.',
    math: '\\vec P = N\\alpha_m\\vec E_m = N\\alpha_m\\left(\\frac{\\vec P}{\\chi_e\\epsilon_0} + \\frac{\\vec P}{3\\epsilon_0}\\right)',
  },
  {
    label: 'Divide out P and solve for α_m, then substitute χ_e = K−1 to reach the Clausius-Mossotti relation.',
    math: '\\alpha_m = \\frac{3\\epsilon_0}{N}\\left(\\frac{K-1}{K+2}\\right)',
    note: 'This bridges the macroscopic, measurable dielectric constant K with the microscopic, per-molecule polarizability α_m.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why does an individual molecule inside a dielectric feel a different field than the macroscopic average E?',
    options: ['It doesn\'t — they are identical', 'The molecule sits inside a tiny local "cavity" surrounded by other polarized molecules, whose own induced surface charge adds a local correction field E_C', 'Only true in conductors', 'E_C is always zero'],
    correct: 1,
    explain: 'The macroscopic E is a spatial average; a specific molecule actually experiences the field including nearby polarized neighbors, which the cavity-field calculation captures as an extra term E_C = P/3ε₀.',
  },
  {
    q: 'What does the Clausius-Mossotti equation let you calculate?',
    options: ['The speed of light', 'A microscopic property (molecular polarizability α_m) from a macroscopic, measurable property (dielectric constant K), or vice versa', 'The mass of a molecule', 'The conductivity of a material'],
    correct: 1,
    explain: 'This is precisely the bridge the equation provides — connecting what you can measure in bulk (K) to a fundamental per-molecule quantity (α_m), given the number density N.',
  },
  {
    q: 'As K→∞ (extremely polarizable medium), what does (K−1)/(K+2) approach?',
    options: ['0', '1', 'Infinity', 'Undefined'],
    correct: 1,
    explain: 'As K grows large, (K−1)/(K+2) → K/K = 1 — the ratio saturates rather than diverging, reflecting a physical upper bound on this particular combination.',
  },
];

export default function ClausiusMossotti() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="The Clausius–Mossotti Equation" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          The macroscopic field E you'd measure with a large probe isn't quite what an individual molecule
          "feels" inside a dielectric — nearby polarized neighbors add a local correction. Working this out
          carefully produces the Clausius-Mossotti equation, linking the measurable dielectric constant to the
          underlying molecular polarizability.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec E_C = \\frac{\\vec P}{3\\epsilon_0}', caption: 'cavity field' },
            { math: '\\alpha_m = \\frac{3\\epsilon_0}{N}\\left(\\frac{K-1}{K+2}\\right)', caption: 'Clausius–Mossotti equation' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: cavity bound charge" accent={accent}>
        <VizFrame height={260}><ClausiusMossottiViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
