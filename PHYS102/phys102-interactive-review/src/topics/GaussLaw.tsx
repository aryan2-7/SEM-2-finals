import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import GaussLawViz from './GaussLawViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Start from the integral form: net flux through any closed surface equals the enclosed charge over ε₀.',
    math: '\\oint_S \\vec E \\cdot d\\vec a = \\frac{Q_{enc}}{\\epsilon_0}',
  },
  {
    label: 'Write the enclosed charge as a volume integral of the charge density.',
    math: 'Q_{enc} = \\int_V \\rho \\, d\\tau',
  },
  {
    label: 'Apply the divergence theorem to convert the surface integral on the left into a volume integral.',
    math: '\\int_V (\\nabla\\cdot\\vec E)\\, d\\tau = \\frac{1}{\\epsilon_0}\\int_V \\rho\\, d\\tau',
  },
  {
    label: 'Since this holds for any volume V, the integrands must be equal pointwise.',
    math: '\\nabla \\cdot \\vec E = \\frac{\\rho}{\\epsilon_0}',
    note: 'This differential form is completely equivalent to the integral form, but local rather than global.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'For a uniformly charged spherical shell, what is E just inside the shell (r < R)?',
    options: ['Same as outside', 'Zero, since no charge is enclosed', 'Maximum at the center', 'Infinite'],
    correct: 1,
    explain: 'A Gaussian surface at r < R encloses zero charge (all charge sits on the shell surface at r = R), so by Gauss\'s law E = 0 there.',
  },
  {
    q: 'For a uniformly charged solid sphere, how does E behave for r < R?',
    options: ['E = 0 everywhere inside', 'E grows linearly with r', 'E falls off as 1/r²', 'E is constant inside'],
    correct: 1,
    explain: 'Only the charge enclosed within radius r contributes, and that enclosed charge grows as r³ while the surface area grows as r², giving E ∝ r inside a uniformly charged solid sphere.',
  },
  {
    q: 'Why is Gauss\'s law especially useful for the ρ = kr charge distribution rather than direct integration of Coulomb\'s law?',
    options: ['It isn\'t — direct integration is easier', 'Because the problem has spherical symmetry, letting you choose a Gaussian surface where E is constant and can be pulled out of the flux integral', 'Gauss\'s law only works for non-uniform charge', 'ρ = kr has no valid Gaussian surface'],
    correct: 1,
    explain: 'Whenever the charge distribution has enough symmetry (spherical, cylindrical, planar) to guarantee E is constant in magnitude over a chosen surface, Gauss\'s law turns a hard integral into simple algebra.',
  },
];

export default function GaussLaw() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Gauss's Law" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Gauss's law relates the electric flux through any closed surface to the charge enclosed inside it. For
          symmetric charge distributions, choosing the right "Gaussian surface" turns what would be a difficult
          direct integral into simple algebra — this is the real power of the law as a computational tool.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\oint_S \\vec E \\cdot d\\vec a = \\frac{Q_{enc}}{\\epsilon_0}', caption: 'integral form' },
            { math: '\\nabla \\cdot \\vec E = \\frac{\\rho}{\\epsilon_0}', caption: 'differential form' },
          ]}
        />
      </Section>

      <Section label="From integral to differential form" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: pick a distribution, sweep the Gaussian surface" accent={accent}>
        <VizFrame height={340}><GaussLawViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
