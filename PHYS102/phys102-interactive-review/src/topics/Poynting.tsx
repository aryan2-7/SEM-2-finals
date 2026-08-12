import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import PoyntingViz from './PoyntingViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'Start from the rate of work done by the EM field on charges in volume V — the Lorentz force integrated over the moving charge distribution.',
    math: '\\frac{dW}{dt} = \\int_V \\vec F\\cdot\\vec v\\,dq = \\int_V (\\vec E\\cdot\\vec J)\\, d\\tau',
    note: 'The magnetic part of the Lorentz force drops out because v×B is perpendicular to v.',
  },
  {
    label: 'Solve the Ampere-Maxwell law for J and substitute it into E·J.',
    math: '\\vec J = \\frac{1}{\\mu_0}\\nabla\\times\\vec B - \\epsilon_0\\frac{\\partial\\vec E}{\\partial t} \\quad\\Longrightarrow\\quad \\vec E\\cdot\\vec J = \\frac{1}{\\mu_0}\\vec E\\cdot(\\nabla\\times\\vec B) - \\epsilon_0\\vec E\\cdot\\frac{\\partial\\vec E}{\\partial t}',
  },
  {
    label: 'Use the vector identity ∇·(E×B) = B·(∇×E) − E·(∇×B) to rewrite E·(∇×B).',
    math: '\\vec E\\cdot(\\nabla\\times\\vec B) = \\vec B\\cdot(\\nabla\\times\\vec E) - \\nabla\\cdot(\\vec E\\times\\vec B)',
  },
  {
    label: 'Substitute Faraday\'s law (∇×E = −∂B/∂t) into the B·(∇×E) term.',
    math: '\\vec E\\cdot\\vec J = \\frac{1}{\\mu_0}\\left[-\\vec B\\cdot\\frac{\\partial\\vec B}{\\partial t} - \\nabla\\cdot(\\vec E\\times\\vec B)\\right] - \\frac{\\epsilon_0}{2}\\frac{\\partial E^2}{\\partial t}',
  },
  {
    label: 'Recognize both time-derivative terms as the derivative of the standard field energy density.',
    math: '\\vec E \\cdot \\vec J = -\\frac{1}{2}\\frac{\\partial}{\\partial t}\\left(\\epsilon_0 E^2 + \\frac{1}{\\mu_0}B^2\\right) - \\frac{1}{\\mu_0}\\nabla\\cdot(\\vec E\\times\\vec B)',
  },
  {
    label: 'Integrate over volume V and apply the divergence theorem to the flux term.',
    math: '\\frac{dW}{dt} = -\\frac{d}{dt}\\int_V \\frac{1}{2}\\left(\\epsilon_0 E^2 + \\frac{1}{\\mu_0}B^2\\right)d\\tau \\;-\\; \\frac{1}{\\mu_0}\\oint_S (\\vec E\\times\\vec B)\\cdot d\\vec a',
  },
  {
    label: 'Define the Poynting vector S as the energy flux, giving the integral form of the theorem.',
    math: '\\vec S \\equiv \\frac{1}{\\mu_0}(\\vec E\\times\\vec B) \\quad\\Longrightarrow\\quad \\frac{dW}{dt} = -\\frac{dW_{em}}{dt} - \\oint_S \\vec S\\cdot d\\vec a',
  },
  {
    label: 'Writing dW/dt as the rate of change of mechanical energy density gives the local, differential-form statement of energy conservation.',
    math: '\\frac{\\partial}{\\partial t}(u_{mech} + u_{em}) = -\\nabla\\cdot\\vec S',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What does the Poynting vector S physically represent?',
    options: ['The electric field alone', 'Energy flux — energy transported per unit area per unit time', 'The magnetic force on a charge', 'A type of current density'],
    correct: 1,
    explain: 'S = (1/μ₀)(E×B) points in the direction energy flows and has units of power per unit area — exactly analogous to a heat flux vector.',
  },
  {
    q: 'In the differential form ∂(u_mech + u_em)/∂t = −∇·S, what does a negative divergence of S mean at a point?',
    options: ['Energy is flowing away from that point (net outflow)', 'Energy is converging into that point faster than it leaves — total energy density there is increasing', 'S is zero', 'Nothing physical'],
    correct: 1,
    explain: 'A negative ∇·S means more flux is flowing in than out locally, so −∇·S > 0, and the stored energy density (mechanical + field) at that point grows with time.',
  },
  {
    q: 'Which vector identity is the pivotal algebraic step that lets Faraday\'s law enter the derivation?',
    options: ['The triple product identity', '∇·(E×B) = B·(∇×E) − E·(∇×B)', 'The gradient theorem', 'a×(b×c) = b(a·c) − c(a·b)'],
    correct: 1,
    explain: 'This identity converts the awkward E·(∇×B) term into a form containing B·(∇×E), which is exactly where Faraday\'s law (∇×E = −∂B/∂t) can be substituted in.',
  },
];

export default function Poynting() {
  return (
    <TopicShell chapterLabel="CH. 07 — EM WAVE PROPAGATION" title="Poynting's Theorem — Derivation" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Poynting's theorem is energy conservation written for the electromagnetic field: the power delivered to
          charges inside a region equals the rate the stored field energy drops, minus whatever energy leaks out
          through the boundary. That "leaking out" term defines the Poynting vector — the direction and rate of
          electromagnetic energy flow.
        </Concept>
      </Section>

      <Section label="Result" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec S = \\frac{1}{\\mu_0}(\\vec E \\times \\vec B)', caption: 'Poynting vector — energy flux' },
            { math: '\\frac{dW}{dt} = -\\frac{dW_{em}}{dt} - \\oint_S \\vec S \\cdot d\\vec a', caption: 'integral form' },
            { math: '\\frac{\\partial}{\\partial t}(u_{mech} + u_{em}) = -\\nabla\\cdot\\vec S', caption: 'differential (local continuity) form' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: energy flux through a bounded volume" accent={accent}>
        <VizFrame height={420}>
          <PoyntingViz />
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
