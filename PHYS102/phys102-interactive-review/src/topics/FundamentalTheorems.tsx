import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import FundamentalTheoremsViz from './FundamentalTheoremsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'The gradient theorem says the line integral of ∇T along a path depends only on...',
    options: ['The path length', 'The values of T at the two endpoints', 'The shape of the path', 'The direction of travel only'],
    correct: 1,
    explain: 'Just like ordinary calculus\'s fundamental theorem, ∫∇T·dl = T(b) − T(a) — the total change depends only on start and end values, not the route.',
  },
  {
    q: 'Gauss\'s divergence theorem converts a surface integral into...',
    options: ['A line integral', 'A volume integral of the divergence', 'A single number with no integral', 'Another surface integral'],
    correct: 1,
    explain: '∮ₛF·da = ∫ᵥ(∇·F)dτ — the total flux leaving a closed surface equals the sum of all the divergence (sources/sinks) inside the enclosed volume.',
  },
  {
    q: 'Stokes\' theorem relates the circulation around a closed loop to...',
    options: ['The volume enclosed', 'The surface integral of the curl over any surface bounded by that loop', 'The gradient at the loop\'s center', 'Nothing — they are unrelated'],
    correct: 1,
    explain: '∮F·dl = ∫ₛ(∇×F)·da — this is exactly the identity used to convert Faraday\'s and Ampere\'s laws between integral and differential forms throughout the course.',
  },
];

export default function FundamentalTheorems() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="The Fundamental Theorems of Vector Calculus" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Three integral theorems tie together the derivative operators (gradient, divergence, curl) with their
          corresponding integral relationships. They're the mathematical backbone behind converting every
          integral form of Maxwell's equations into its differential form, and back again.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\int_a^b (\\nabla T)\\cdot d\\vec l = T(b) - T(a)', caption: 'gradient theorem' },
            { math: '\\oint_S \\vec F\\cdot d\\vec a = \\int_V (\\nabla\\cdot\\vec F)\\, d\\tau', caption: "Gauss's divergence theorem" },
            { math: '\\oint_C \\vec F\\cdot d\\vec l = \\int_S (\\nabla\\times\\vec F)\\cdot d\\vec a', caption: "Stokes' theorem" },
          ]}
        />
      </Section>

      <Section label="Interactive: three theorems, one idea" accent={accent}>
        <VizFrame height={280}><FundamentalTheoremsViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
