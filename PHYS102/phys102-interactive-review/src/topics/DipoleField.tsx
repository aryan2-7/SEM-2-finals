import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import DipoleFieldViz from './DipoleFieldViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Set up: a dipole along the z-axis, charges +q at (0,0,d/2) and −q at (0,0,−d/2). The field point P is at distance r, r ≫ d.',
    math: 'z_+ = \\sqrt{r^2 - zd + \\tfrac{d^2}{4}}, \\quad z_- = \\sqrt{r^2 + zd + \\tfrac{d^2}{4}}',
  },
  {
    label: 'Binomial-expand 1/z₊ and 1/z₋ to first order in d/r, since r ≫ d.',
    math: '\\frac{1}{z_+} \\approx \\frac{1}{r}\\Big(1+\\frac{zd}{2r^2}\\Big), \\qquad \\frac{1}{z_-} \\approx \\frac{1}{r}\\Big(1-\\frac{zd}{2r^2}\\Big)',
  },
  {
    label: 'Superpose the two point-charge potentials and subtract.',
    math: 'V = \\frac{q}{4\\pi\\epsilon_0}\\left(\\frac{1}{z_+}-\\frac{1}{z_-}\\right) = \\frac{1}{4\\pi\\epsilon_0}\\frac{qzd}{r^3} = \\frac{1}{4\\pi\\epsilon_0}\\frac{pz}{r^3}',
    note: 'p = qd is the dipole moment.',
  },
  {
    label: 'Write z = r cos θ to get the spherical form of the potential.',
    math: 'V(r,\\theta) = \\frac{1}{4\\pi\\epsilon_0}\\frac{p\\cos\\theta}{r^2}',
  },
  {
    label: 'The coordinate-free vector form follows directly.',
    math: 'V(\\vec r) = \\frac{1}{4\\pi\\epsilon_0}\\frac{\\vec p\\cdot\\hat r}{r^2}',
  },
  {
    label: 'Take E = −∇V in spherical coordinates (only r and θ derivatives are nonzero by symmetry).',
    math: '\\vec E(r,\\theta) = -\\left(\\frac{\\partial V}{\\partial r}\\hat r + \\frac1r\\frac{\\partial V}{\\partial\\theta}\\hat\\theta\\right) = \\frac{1}{4\\pi\\epsilon_0}\\frac{p}{r^3}\\left[2\\cos\\theta\\,\\hat r + \\sin\\theta\\,\\hat\\theta\\right]',
  },
  {
    label: 'The coordinate-free form of E follows from the general dipole identity.',
    math: '\\vec E(\\vec r) = \\frac{1}{4\\pi\\epsilon_0 r^3}\\left[3(\\vec p\\cdot\\hat r)\\hat r - \\vec p\\right]',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'On the axial line (θ = 0°), how does E compare to the equatorial value at the same r?',
    options: ['Equal in magnitude', 'Axial E is twice the equatorial E', 'Axial E is half the equatorial E', 'Axial E is zero'],
    correct: 1,
    explain: 'Axial: E = 2p/4πε₀r³ (θ=0 gives 2cosθ=2). Equatorial: E = p/4πε₀r³ (θ=90° gives only sinθ term). Ratio is 2:1.',
  },
  {
    q: 'Why is the binomial expansion of 1/z₊ and 1/z₋ valid in this derivation?',
    options: ['Because q is small', 'Because r ≫ d, so d/r is a small parameter', 'Because θ = 90°', 'It is only an approximation with no justification'],
    correct: 1,
    explain: 'The short-dipole approximation assumes the field point is far compared to the charge separation, making d/r ≪ 1 the small expansion parameter.',
  },
  {
    q: 'What is V at the equatorial plane (θ = 90°)?',
    options: ['Maximum', 'Zero', 'Equal to the axial value', 'Negative infinity'],
    correct: 1,
    explain: 'cos(90°) = 0, so V = (1/4πε₀)(p·0)/r² = 0 — every point on the equatorial plane is equidistant from +q and −q.',
  },
];

export default function DipoleField() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="Potential & Field of a Short Dipole (r ≫ d)" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A physical dipole is two equal, opposite point charges ±q separated by a small distance d. When the
          observation point is far away (r ≫ d) compared to the charge separation, the pair behaves like an
          idealized point dipole with moment p = qd. This is the workhorse approximation for molecular dipoles,
          antenna far-fields, and multipole expansions in electrostatics.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'V(r,\\theta) = \\frac{1}{4\\pi\\epsilon_0}\\frac{p\\cos\\theta}{r^2}', caption: 'potential of a short dipole' },
            { math: '\\vec E(r,\\theta) = \\frac{p}{4\\pi\\epsilon_0 r^3}\\left[2\\cos\\theta\\,\\hat r + \\sin\\theta\\,\\hat\\theta\\right]', caption: 'field of a short dipole' },
            { math: 'V_{axial} = \\frac{1}{4\\pi\\epsilon_0}\\frac{p}{r^2},\\quad E_{axial} = \\frac{1}{4\\pi\\epsilon_0}\\frac{2p}{r^3} \\qquad\\qquad V_{eq} = 0,\\quad E_{eq} = \\frac{1}{4\\pi\\epsilon_0}\\frac{p}{r^3}', caption: 'axial (θ=0°) vs equatorial (θ=90°) special cases' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: field & equipotentials" accent={accent}>
        <VizFrame height={460}>
          <DipoleFieldViz />
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
