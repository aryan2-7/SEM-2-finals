import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import HysteresisLossViz from './HysteresisLossViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const steps: DerivationStep[] = [
  {
    label: 'The work done per unit volume to change B by dB against the field H is dW = H dB (the magnetic analogue of dW = V dq for a capacitor).',
    math: 'dW = H\\,dB',
  },
  {
    label: 'Over one full cycle of magnetization (H up to saturation, back down, reversed, and back), integrate this work around the closed B–H loop.',
    math: 'W = \\oint H\\, dB',
  },
  {
    label: 'Because the up-branch and down-branch of B(H) are different curves (the material lags — hysteresis), this closed-loop integral does not vanish, unlike for a reversible (single-valued) process.',
    note: 'If B(H) traced the same path forward and back, the integral would be zero — the very fact that it doesn\'t close is what makes it a real energy loss.',
  },
  {
    label: 'Equivalently written with the sign convention of area swept, this equals the geometric area enclosed by the B–H loop.',
    math: 'W = \\oint B\\, dH = \\text{Area of the } B\\text{–}H\\text{ loop}',
  },
  {
    label: 'This W is dissipated as heat once per cycle, per unit volume of material — it does not return to the electrical circuit.',
    note: 'A wider/taller loop (harder material) means more energy lost to heat every cycle — this is why transformer cores use soft magnetic materials with thin loops.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why does the hysteresis loop enclose a nonzero area at all?',
    options: ['Because B and H are always proportional', 'Because the up-going and down-going B(H) curves are different — the material lags behind the field', 'Due to a calculation error', 'It only happens at high frequency'],
    correct: 1,
    explain: 'A reversible, single-valued B(H) relationship would retrace itself exactly and enclose zero area. Hysteresis loss exists precisely because magnetization lags behind the driving field.',
  },
  {
    q: 'If you double both the width and height of a hysteresis loop, what happens to the energy lost per cycle?',
    options: ['Stays the same', 'Doubles', 'Roughly quadruples (area scales with both dimensions)', 'Goes to zero'],
    correct: 2,
    explain: 'The loss equals the enclosed area. Scaling both width and height by 2 roughly scales the enclosed area by 2×2 = 4.',
  },
  {
    q: 'Why do transformer cores use soft magnetic materials rather than hard ones?',
    options: ['Soft materials are cheaper only', 'Soft materials have thin loops, minimizing hysteresis loss on every AC cycle', 'Hard materials cannot conduct magnetic flux', 'It makes no practical difference'],
    correct: 1,
    explain: 'Transformers cycle through the B–H loop many times per second. A thin (soft) loop keeps ∮H dB small, minimizing wasted heat — exactly the opposite of what you want in a permanent magnet.',
  },
];

export default function HysteresisLoss() {
  return (
    <TopicShell chapterLabel="CH. 05 — MAGNETOSTATIC FIELD IN MATTER" title="Hysteresis Loss and Its Mathematical Formula" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Every time a ferromagnet is taken around a full magnetization cycle, some energy is permanently lost as
          heat — it doesn't come back out electrically. That lost energy has a strikingly clean geometric meaning:
          it's exactly the area enclosed by the B–H hysteresis loop.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'W = \\oint B\\, dH = \\text{area enclosed by the } B\\text{–}H \\text{ loop}', caption: 'hysteresis loss per unit volume per cycle' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: shade the loss" accent={accent}>
        <VizFrame height={460}>
          <HysteresisLossViz />
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
