import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import FissionFusionViz from './FissionFusionViz';
import type { QuizQuestion } from '../data/types';

const accent = '#59c98e';

const quiz: QuizQuestion[] = [
  {
    q: 'Why does splitting a heavy nucleus (fission) release energy?',
    options: ['It doesn\'t release energy', 'Heavy nuclei sit below the peak of the binding-energy-per-nucleon curve; splitting them produces daughter nuclei closer to that peak, releasing the difference', 'Fission always requires energy input', 'Only true for uranium specifically'],
    correct: 1,
    explain: 'Very heavy nuclei (like U-235) have lower B.E./A than medium-mass nuclei. Splitting into two medium-mass fragments moves the system toward the more stable, higher-B.E./A region of the curve, releasing the difference as kinetic energy.',
  },
  {
    q: 'Why does combining light nuclei (fusion) also release energy?',
    options: ['It never releases energy', 'Light nuclei (like hydrogen) sit below the peak of the B.E./A curve too; fusing them into a heavier nucleus moves toward the peak, releasing energy', 'Fusion only works for heavy elements', 'The mechanism is unrelated to binding energy'],
    correct: 1,
    explain: 'Just as with fission but from the opposite end, very light nuclei have relatively low B.E./A. Fusing them into something heavier (closer to the iron peak) also releases the binding-energy difference.',
  },
  {
    q: 'How does the typical energy release per event compare between fission and fusion?',
    options: ['Fusion releases far more energy per event', 'Fission releases considerably more energy per event (~200 MeV vs ~24 MeV for D-D fusion), though fusion releases more energy per unit mass of fuel', 'They release identical energy', 'Neither releases any measurable energy'],
    correct: 1,
    explain: 'A single U-235 fission event releases roughly 200 MeV, compared to about 24 MeV for D-D fusion — though because fusion fuel is much lighter per reaction, fusion actually releases more energy per kilogram of fuel.',
  },
];

export default function FissionFusion() {
  return (
    <TopicShell chapterLabel="CH. 09 — NUCLEAR PHYSICS" title="Nuclear Fission & Fusion" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Both fission (splitting heavy nuclei) and fusion (combining light nuclei) release enormous amounts of
          energy, for the same underlying reason: both processes move the resulting nuclei toward the peak of
          the binding-energy-per-nucleon curve near iron, releasing the binding-energy difference as kinetic
          energy.
        </Concept>
      </Section>

      <Section label="Example reactions" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '_{92}\\text{U}^{235} + {_0\\text{n}}^1 \\to (_{92}\\text{U}^{236})^* \\to {_{56}\\text{Ba}}^{141} + {_{36}\\text{Kr}}^{92} + 3{_0\\text{n}}^1 + Q', caption: 'fission, Q ≈ 200 MeV' },
            { math: '_1\\text{H}^2 + {_1\\text{H}}^2 \\to {_2\\text{He}}^4 + Q', caption: 'fusion (deuterium-deuterium), Q ≈ 24 MeV — the process powering stars' },
          ]}
        />
      </Section>

      <Section label="Interactive: fission vs fusion" accent={accent}>
        <VizFrame height={220}><FissionFusionViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
