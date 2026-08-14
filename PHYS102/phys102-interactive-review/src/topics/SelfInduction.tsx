import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import RLCircuitViz from './RLCircuitViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'A battery of EMF ε₀ drives current through a series resistor R and inductor L. Kirchhoff\'s voltage law gives the governing differential equation.',
    math: '\\mathcal{E}_0 - L\\frac{dI}{dt} = IR',
  },
  {
    label: 'Separate variables to isolate I and t.',
    math: '\\frac{dI}{\\frac{\\mathcal{E}_0}{R} - I} = \\frac{R}{L}dt',
  },
  {
    label: 'Integrate both sides.',
    math: '\\ln\\left(\\frac{\\mathcal{E}_0}{R} - I\\right) = -\\frac{R}{L}t + C_0',
  },
  {
    label: 'Apply the initial condition I=0 at t=0 to fix the constant of integration.',
    math: 'C_0 = \\ln\\left(\\frac{\\mathcal{E}_0}{R}\\right) \\quad\\Longrightarrow\\quad \\ln\\left(\\frac{\\frac{\\mathcal{E}_0}{R}-I}{\\frac{\\mathcal{E}_0}{R}}\\right) = -\\frac{R}{L}t',
  },
  {
    label: 'Exponentiate and solve for I(t).',
    math: 'I(t) = \\frac{\\mathcal{E}_0}{R}\\left(1 - e^{-\\frac{R}{L}t}\\right)',
    note: 'The time constant τ = L/R sets the growth rate — after one τ, current has reached about 63% of its final value ε₀/R.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What is the physical role of the −L(dI/dt) term in the RL circuit equation?',
    options: ['It represents resistive heating', 'It is the back-EMF that opposes the change in current, exactly as Lenz\'s law demands', 'It has no physical significance', 'It only matters at t=0'],
    correct: 1,
    explain: 'The inductor generates a back-EMF proportional to dI/dt that opposes the current\'s own change — this is self-induction, and it is why current cannot jump instantaneously in an inductive circuit.',
  },
  {
    q: 'At t = τ = L/R, what fraction of the final current I_max has been reached?',
    options: ['50%', 'About 63% (1 − 1/e)', '100%', '37%'],
    correct: 1,
    explain: 'I(τ) = I_max(1 − e⁻¹) ≈ 0.632 I_max — this is the standard "one time constant" milestone for exponential growth curves.',
  },
  {
    q: 'If you double R while keeping L fixed, what happens to the time constant τ?',
    options: ['τ doubles', 'τ is halved', 'τ stays the same', 'τ quadruples'],
    correct: 1,
    explain: 'τ = L/R, so doubling R directly halves τ — a larger resistance means faster (not slower) approach to steady-state current, even though the final current I_max = ε₀/R is smaller.',
  },
];

export default function SelfInduction() {
  return (
    <TopicShell chapterLabel="CH. 06 — ELECTROMAGNETIC INDUCTION" title="Self-Induction & the RL Circuit" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          When current in a coil changes, the coil's own magnetic flux changes too, inducing a back-EMF that
          resists the change — this is self-induction, quantified by the inductance L. In a simple RL circuit,
          this produces the characteristic exponential rise in current when a battery is first connected.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\mathcal{E} = -L\\frac{dI}{dt}', caption: 'self-induced back-EMF' },
            { math: 'I(t) = \\frac{\\mathcal{E}_0}{R}\\left(1-e^{-\\frac{R}{L}t}\\right)', caption: 'current growth in an RL circuit' },
            { math: '\\tau = \\frac{L}{R}', caption: 'time constant' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: sweep R and L" accent={accent}>
        <VizFrame height={320}><RLCircuitViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
