import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import MutualInductionViz from './MutualInductionViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'A changing current I₁ in loop 1 produces a vector potential everywhere in space, via the Biot-Savart-like integral for A.',
    math: '\\vec A_1 = \\frac{\\mu_0 I_1}{4\\pi}\\oint_{Loop 1} \\frac{d\\vec l_1}{r}',
  },
  {
    label: 'The flux this produces through loop 2 is found via Stokes\' theorem, converting the surface integral of B into a line integral of A around loop 2.',
    math: '\\Phi_2 = \\int_{S_2}\\vec B_1\\cdot d\\vec a_2 = \\oint_{Loop 2}\\vec A_1\\cdot d\\vec l_2 = \\left(\\frac{\\mu_0}{4\\pi}\\oint_{Loop 2}\\oint_{Loop 1}\\frac{d\\vec l_1\\cdot d\\vec l_2}{r}\\right)I_1',
  },
  {
    label: 'Since Φ₂ ∝ I₁, define the mutual inductance as the proportionality constant — the Neumann formula.',
    math: 'M_{21} = \\frac{\\mu_0}{4\\pi}\\oint_{Loop 2}\\oint_{Loop 1}\\frac{d\\vec l_1\\cdot d\\vec l_2}{r}',
  },
  {
    label: 'Because dl₁·dl₂ = dl₂·dl₁, swapping the roles of loop 1 and loop 2 in the double integral gives exactly the same expression.',
    math: 'M_{12} = M_{21} = M \\quad\\text{(Reciprocity Theorem)}',
    note: 'The flux through loop 2 from current I in loop 1 equals the flux through loop 1 from the same current I in loop 2 — regardless of the loops\' shapes, sizes, or relative position.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What does the reciprocity theorem (M₁₂ = M₂₁) say physically?',
    options: ['The two loops must be identical in shape', 'Flux coupling is symmetric: it doesn\'t matter which loop you drive current through, the same mutual inductance applies either way', 'M is always zero unless the loops touch', 'Only true for circular loops'],
    correct: 1,
    explain: 'Even for two completely different-shaped, differently-sized, and arbitrarily positioned loops, the mutual inductance calculated either direction comes out identical — a genuinely surprising and useful result.',
  },
  {
    q: 'Why does the Neumann formula depend only on the geometry of the two loops (shape, size, separation)?',
    options: ['It also depends on the material of the wire', 'M is purely a geometric factor — no reference to μ (other than μ₀) or current appears in the double line integral', 'It depends on the current magnitude', 'It requires knowing the loop resistance'],
    correct: 1,
    explain: 'M = (μ₀/4π)∮∮(dl₁·dl₂)/r involves only the spatial paths of the two loops — this is why M is described as a purely geometric property of the two-loop configuration.',
  },
  {
    q: 'What happens to M as the two loops are moved farther apart?',
    options: ['M increases', 'M decreases — less of loop 1\'s flux threads through loop 2 as separation grows', 'M is unaffected by distance', 'M becomes negative'],
    correct: 1,
    explain: 'Greater separation means less flux linkage between the loops, directly reducing M — the geometric coupling weakens with distance.',
  },
];

export default function MutualInduction() {
  return (
    <TopicShell chapterLabel="CH. 06 — ELECTROMAGNETIC INDUCTION" title="Mutual Induction" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          When two coils sit near each other, a changing current in one induces an EMF in the other — the basis
          of transformers. The mutual inductance M quantifying this coupling turns out to be perfectly symmetric:
          it doesn't matter which coil you drive current through, the coupling strength is identical either way.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'M_{21} = \\frac{\\mu_0}{4\\pi}\\oint_{Loop 2}\\oint_{Loop 1}\\frac{d\\vec l_1\\cdot d\\vec l_2}{r}', caption: 'Neumann formula' },
            { math: 'M_{12} = M_{21} = M', caption: 'reciprocity theorem' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: two coupled loops" accent={accent}>
        <VizFrame height={300}><MutualInductionViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
