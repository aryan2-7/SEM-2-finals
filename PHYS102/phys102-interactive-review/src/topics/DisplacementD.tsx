import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import DisplacementDViz from './DisplacementDViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Total charge density is the sum of free charge and bound charge from polarization.',
    math: '\\rho = \\rho_f + \\rho_b = \\rho_f - \\nabla\\cdot\\vec P',
  },
  {
    label: 'Substitute into Gauss\'s law.',
    math: '\\nabla\\cdot\\vec E = \\frac{\\rho_f - \\nabla\\cdot\\vec P}{\\epsilon_0} \\implies \\nabla\\cdot(\\epsilon_0\\vec E + \\vec P) = \\rho_f',
  },
  {
    label: 'Defining D ≡ ε₀E + P absorbs the bound charge entirely, leaving a law that depends only on free charge.',
    math: '\\nabla\\cdot\\vec D = \\rho_f \\qquad \\oint_S \\vec D\\cdot d\\vec a = Q_{f,enc}',
  },
  {
    label: 'Worked example: a line charge λ insulated by rubber out to radius a. Apply Gauss\'s law for D on a cylindrical surface of radius s.',
    math: 'D(2\\pi s L) = \\lambda L \\implies \\vec D = \\frac{\\lambda}{2\\pi s}\\hat s',
  },
  {
    label: 'Recover E from D by dividing by ε₀ (in vacuum/air outside the rubber, or accounting for the dielectric permittivity inside it).',
    math: '\\vec E = \\frac{\\vec D}{\\epsilon_0} = \\frac{\\lambda}{2\\pi\\epsilon_0 s}\\hat s',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What is the practical advantage of D over E when dielectrics are present?',
    options: ['D is always larger than E', 'D depends only on free charge, so Gauss\'s law for D can be applied without knowing the bound charge distribution in advance', 'D and E are always identical', 'D only exists inside conductors'],
    correct: 1,
    explain: 'By construction, ∇·D = ρ_f references only the charges you actually placed (free charge) — you never need to solve for the bound charge separately to apply Gauss\'s law for D.',
  },
  {
    q: 'For the insulated wire example, why is D unaffected by the presence of the rubber dielectric?',
    options: ['D always ignores dielectrics entirely by definition, and the symmetry argument (cylindrical Gaussian surface) only involves the free charge λ', 'The rubber has no effect on anything', 'D changes but happens to equal the same value by coincidence', 'The rubber must be perfectly conducting'],
    correct: 0,
    explain: 'Since ∮D·da = Q_f,enc depends only on the enclosed free charge λL, and that doesn\'t change whether or not rubber surrounds the wire, D comes out the same regardless of the dielectric.',
  },
  {
    q: 'In the insulated wire, is E the same inside and outside the rubber insulation?',
    options: ['Yes, always identical', 'No — E = D/ε depends on the local permittivity, so E differs between the dielectric (ε) and vacuum/air (ε₀) regions even though D does not', 'E is zero everywhere', 'Only D exists; E is not defined here'],
    correct: 1,
    explain: 'D stays the same across the boundary (only ρ_f matters), but E = D/ε picks up different values depending on local ε — smaller E inside a dielectric with ε>ε₀, since polarization partially screens the field.',
  },
];

export default function DisplacementD() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="Gauss's Law in Dielectrics & the Displacement Field" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          When dielectrics are present, tracking bound charge explicitly gets cumbersome. The electric
          displacement field D sidesteps this entirely — it's defined so that its divergence depends only on
          free charge, letting Gauss's law be applied without ever solving for the polarization first.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec D \\equiv \\epsilon_0\\vec E + \\vec P', caption: 'electric displacement' },
            { math: '\\nabla\\cdot\\vec D = \\rho_f, \\qquad \\oint_S \\vec D\\cdot d\\vec a = Q_{f,enc}', caption: "Gauss's law for D" },
          ]}
        />
      </Section>

      <Section label="Derivation and worked example" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: insulated wire" accent={accent}>
        <VizFrame height={280}><DisplacementDViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
