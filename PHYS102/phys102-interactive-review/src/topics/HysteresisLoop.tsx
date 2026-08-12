import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import HysteresisLoopViz from './HysteresisLoopViz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'Starting from an unmagnetized sample (point O) and increasing H, the material follows the curve to point A. What does A represent?',
    options: ['Zero magnetization', 'Saturation — all domains aligned, M = M_max', 'The coercive field', 'A random point'],
    correct: 1,
    explain: 'Point A is magnetic saturation: essentially all magnetic domains have rotated into alignment with the field, so further increases in H barely raise B.',
  },
  {
    q: 'At point B on the loop (H = 0, coming down from saturation), what does B_r (retentivity) tell you?',
    options: ['The material has lost all magnetization', 'The material retains some magnetization even with no applied field', 'The field direction has reversed', 'This point does not exist for real materials'],
    correct: 1,
    explain: 'Retentivity is exactly this: residual magnetization left behind after the external field is removed. It is why hard ferromagnets make good permanent magnets.',
  },
  {
    q: 'A "hard" magnetic material (used for permanent magnets) has a hysteresis loop that is...',
    options: ['Very thin and narrow', 'Wide, with large coercivity and retentivity', 'A perfect circle', 'Absent entirely'],
    correct: 1,
    explain: 'Hard materials resist demagnetization, which shows up as a wide loop (large H_c) — that width is exactly what makes them retain a strong, stable magnetic field.',
  },
];

export default function HysteresisLoop() {
  return (
    <TopicShell chapterLabel="CH. 05 — MAGNETOSTATIC FIELD IN MATTER" title="Hysteresis Loop in Ferromagnetic Materials" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Ferromagnets don't respond to H reversibly. As you cycle the applied field up and down, B lags behind H —
          the material "remembers" its magnetic history. Plotting B against H traces a closed loop rather than
          a single curve, and the shape of that loop (how wide, how tall) tells you what kind of magnet you're
          dealing with.
        </Concept>
      </Section>

      <Section label="The cycle: O → A → B → C → D → E → F" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\text{O}\\!\\to\\!\\text{A: virgin curve, unmagnetized to saturation } (+M_{max})' },
            { math: '\\text{A}\\!\\to\\!\\text{B: } H \\to 0,\\ B \\to B_r \\text{ (retentivity — residual magnetization)}' },
            { math: '\\text{B}\\!\\to\\!\\text{C: reverse } H \\text{ to } -H_c \\text{ (coercivity) drives } B \\to 0' },
            { math: '\\text{C}\\!\\to\\!\\text{D}\\!\\to\\!\\text{E}\\!\\to\\!\\text{F: mirror sequence back to saturation } (-M_{max}) \\text{ and around to } +H_c' },
          ]}
        />
      </Section>

      <Section label="Interactive: trace the loop" accent={accent}>
        <VizFrame height={460}>
          <HysteresisLoopViz />
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
