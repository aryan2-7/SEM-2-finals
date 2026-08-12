import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import AmpereLawViz from './AmpereLawViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const steps: DerivationStep[] = [
  {
    label: 'Ampere\'s law in integral form relates the circulation of B around a closed loop to the current enclosed.',
    math: '\\oint \\vec B\\cdot d\\vec l = \\mu_0 I_{enc}',
  },
  {
    label: 'For a long straight wire, choose a circular Amperian loop of radius s centered on the wire — by symmetry, B is constant in magnitude and tangent to the loop everywhere.',
    math: 'B(2\\pi s) = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi s}',
  },
  {
    label: 'For a long solenoid (n turns per length), use a rectangular Amperian loop straddling the winding — only the side inside the solenoid contributes.',
    math: 'Bl = \\mu_0 I_{enc} = \\mu_0(nlI) \\implies B = \\mu_0 nI',
    note: 'Outside an ideal long solenoid, B = 0.',
  },
  {
    label: 'For a cylindrical wire of radius a with current uniformly on its outer surface: inside (r<a), the Amperian loop encloses zero current.',
    math: 'r<a:\\ Q_{enc}=0 \\implies B=0 \\qquad\\qquad r>a:\\ B=\\frac{\\mu_0 I}{2\\pi r}',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why is a circular Amperian loop the natural choice for an infinite straight wire?',
    options: ['It is arbitrary — any shape works equally well', 'The symmetry of the wire makes B constant in magnitude and always tangent to a circle centered on the wire, letting it be pulled out of the integral', 'Circular loops always give zero', 'Because the wire itself is circular'],
    correct: 1,
    explain: 'Just as with Gauss\'s law, the power of Ampere\'s law comes from choosing a loop that matches the symmetry of the source, so B·dl simplifies to B times the loop\'s circumference.',
  },
  {
    q: 'For a long solenoid, what is B just outside the winding (ideal case)?',
    options: ['Equal to the inside value', 'Zero', 'μ₀nI/2', 'Infinite'],
    correct: 1,
    explain: 'An ideal long solenoid confines essentially all its field inside; outside, contributions from opposite sides of the winding cancel, giving B ≈ 0.',
  },
  {
    q: 'For a cylindrical wire carrying current only on its outer surface, what is B at r < a (inside the cylinder)?',
    options: ['μ₀I/(2πr)', 'Zero, since no current is enclosed', 'Constant and nonzero', 'Depends on r linearly'],
    correct: 1,
    explain: 'All the current sits on the surface at r=a; any Amperian loop drawn at r<a encloses zero current, so B=0 inside — very different from a uniformly-distributed volume current.',
  },
];

export default function AmpereLaw() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Ampere's Law" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Ampere's law is the magnetic analogue of Gauss's law: instead of enclosing charge with a surface, you
          enclose current with a loop. For sufficiently symmetric current distributions — straight wires,
          solenoids, cylinders — the right choice of Amperian loop turns Biot-Savart's messy integral into
          simple algebra.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\oint \\vec B\\cdot d\\vec l = \\mu_0 I_{enc}', caption: "Ampere's law, integral form" },
            { math: '\\nabla \\times \\vec B = \\mu_0 \\vec J', caption: 'differential form' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation (three cases)" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: pick a geometry, sweep the loop" accent={accent}>
        <VizFrame height={340}><AmpereLawViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
