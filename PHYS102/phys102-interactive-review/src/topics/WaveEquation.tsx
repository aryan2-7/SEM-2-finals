import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import WaveViz from './WaveViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'In vacuum (ρ=0, J=0), Maxwell\'s equations reduce to their source-free forms.',
    math: '\\nabla\\cdot\\vec E = 0,\\quad \\nabla\\cdot\\vec B=0,\\quad \\nabla\\times\\vec E=-\\frac{\\partial\\vec B}{\\partial t},\\quad \\nabla\\times\\vec B = \\mu_0\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}',
  },
  {
    label: 'Take the curl of Faraday\'s law.',
    math: '\\nabla\\times(\\nabla\\times\\vec E) = -\\frac{\\partial}{\\partial t}(\\nabla\\times\\vec B)',
  },
  {
    label: 'Apply the identity ∇×(∇×E) = ∇(∇·E) − ∇²E, using ∇·E=0, and substitute the Ampere-Maxwell law on the right.',
    math: '-\\nabla^2\\vec E = -\\frac{\\partial}{\\partial t}\\left(\\mu_0\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}\\right) \\quad\\Longrightarrow\\quad \\nabla^2\\vec E = \\mu_0\\epsilon_0\\frac{\\partial^2\\vec E}{\\partial t^2}',
  },
  {
    label: 'An identical argument starting from the curl of the Ampere-Maxwell law gives the matching equation for B.',
    math: '\\nabla^2\\vec B = \\mu_0\\epsilon_0\\frac{\\partial^2\\vec B}{\\partial t^2}',
  },
  {
    label: 'Compare both equations to the standard 3D wave equation ∇²f = (1/v²)∂²f/∂t² to read off the propagation speed.',
    math: 'c = \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}}',
  },
  {
    label: 'Plug in the measured constants ε₀ ≈ 8.854×10⁻¹² F/m and μ₀ = 4π×10⁻⁷ H/m.',
    math: 'c = \\frac{1}{\\sqrt{(4\\pi\\times10^{-7})(8.854\\times10^{-12})}} \\approx 3.00\\times10^8\\text{ m/s}',
    note: 'This exactly matches the independently measured speed of light — direct evidence that light itself is an electromagnetic wave.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What vector identity is essential in deriving the wave equation from Faraday\'s law?',
    options: ['The triple product identity', '∇×(∇×E) = ∇(∇·E) − ∇²E', 'The divergence theorem', 'a·(b×c) = b·(c×a)'],
    correct: 1,
    explain: 'This identity converts the curl-of-curl into a Laplacian term (using ∇·E=0 in vacuum) plus a divergence term that vanishes — exactly what\'s needed to isolate ∇²E.',
  },
  {
    q: 'Why does c = 1/√(μ₀ε₀) matter historically?',
    options: ['It was an arbitrary definition', 'The value calculated purely from electric and magnetic constants matched the independently measured speed of light, revealing light is an EM wave', 'It has no physical significance', 'It only applies inside conductors'],
    correct: 1,
    explain: 'Maxwell derived this purely from electromagnetism (no optics involved) and found it matched the known speed of light — one of the great unifications in physics history.',
  },
  {
    q: 'In a propagating EM wave, how are E and B oriented relative to each other and to the direction of propagation?',
    options: ['All three point in the same direction', 'E and B are both perpendicular to the propagation direction and to each other', 'E is parallel to propagation, B is perpendicular', 'There is no fixed relationship'],
    correct: 1,
    explain: 'EM waves are transverse: E, B, and the propagation direction form a mutually perpendicular triad, oscillating in phase as the wave travels.',
  },
];

export default function WaveEquation() {
  return (
    <TopicShell chapterLabel="CH. 07 — EM WAVE PROPAGATION" title="EM Wave Equation & the Speed of Light" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          In empty space, Maxwell's equations combine to produce wave equations for E and B — each field obeys
          the same equation that governs waves on a string or sound in air. The propagation speed that falls out
          of the algebra, 1/√(μ₀ε₀), turns out to equal the speed of light exactly.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\nabla^2\\vec E = \\mu_0\\epsilon_0\\frac{\\partial^2\\vec E}{\\partial t^2}, \\qquad \\nabla^2\\vec B = \\mu_0\\epsilon_0\\frac{\\partial^2\\vec B}{\\partial t^2}', caption: 'wave equations in vacuum' },
            { math: 'c = \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}} \\approx 3.00\\times10^8 \\text{ m/s}', caption: 'speed of propagation' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: propagating wave" accent={accent}>
        <VizFrame height={320}><WaveViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
