import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import DecayViz from './DecayViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#59c98e';

const steps: DerivationStep[] = [
  {
    label: 'The rate of disintegration is directly proportional to the number of undecayed nuclei present.',
    math: '\\frac{dN}{dt} = -\\lambda N',
  },
  {
    label: 'Separate variables.',
    math: '\\frac{dN}{N} = -\\lambda\\, dt',
  },
  {
    label: 'Integrate both sides from the initial condition N=N₀ at t=0.',
    math: '\\ln\\left(\\frac{N}{N_0}\\right) = -\\lambda t',
  },
  {
    label: 'Exponentiate to get the decay law.',
    math: 'N(t) = N_0 e^{-\\lambda t}',
  },
  {
    label: 'Half-life T½ is defined as the time for N to fall to N₀/2. Substitute and solve for T½.',
    math: '\\frac{N_0}{2} = N_0 e^{-\\lambda T_{1/2}} \\implies T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'If a sample has a large decay constant λ, what does that imply about its half-life?',
    options: ['A short half-life — it decays quickly', 'A long half-life — it decays slowly', 'No relationship between λ and T½', 'T½ is always the same regardless of λ'],
    correct: 0,
    explain: 'T½ = ln2/λ is inversely proportional to λ — a larger decay constant means faster decay and thus a shorter half-life.',
  },
  {
    q: 'After exactly 3 half-lives, what fraction of the original sample remains?',
    options: ['1/3', '1/6', '1/8', '1/9'],
    correct: 2,
    explain: 'Each half-life halves the remaining amount: (1/2)³ = 1/8 remains after three half-lives.',
  },
  {
    q: 'Why is radioactive decay described by an exponential rather than a linear decrease?',
    options: ['It is an arbitrary mathematical choice', 'The decay rate dN/dt is proportional to the current amount N, not a fixed constant rate — this proportionality is what produces exponential behavior', 'Exponential decay is just easier to compute', 'It only applies to very large samples'],
    correct: 1,
    explain: 'Because dN/dt = −λN depends on the current population N (not a fixed rate), solving that differential equation necessarily produces an exponential function, not a straight line.',
  },
];

export default function Radioactivity() {
  return (
    <TopicShell chapterLabel="CH. 09 — NUCLEAR PHYSICS" title="Radioactivity & Half-Life" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Unstable nuclei decay spontaneously and randomly, but in bulk this randomness produces a very
          predictable pattern: the population shrinks exponentially over time. Half-life packages that decay rate
          into a single, intuitive number — the time for half the sample to disappear.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'N(t) = N_0 e^{-\\lambda t}', caption: 'radioactive decay law' },
            { math: 'T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}', caption: 'half-life' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: decay curve" accent={accent}>
        <VizFrame height={320}><DecayViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
