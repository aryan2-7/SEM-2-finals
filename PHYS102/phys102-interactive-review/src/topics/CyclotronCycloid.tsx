import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import CyclotronViz from './CyclotronViz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'A charge moves at angle θ to a uniform B field. What determines the radius of its circular motion?',
    options: ['The full speed v', 'Only the perpendicular velocity component v⊥ = v sinθ', 'Only the parallel component v∥', 'The charge sign only'],
    correct: 1,
    explain: 'r = mv⊥/(QB) — only the component of velocity perpendicular to B contributes to circular motion; the parallel component just causes a steady drift along B, producing a helix.',
  },
  {
    q: 'Why is cyclotron frequency f = QB/(2πm) independent of speed?',
    options: ['It isn\'t independent of speed', 'Because both the radius and the period scale with speed in exactly compensating ways, so the ratio (frequency) stays fixed', 'Because the charge is always the same', 'Only true at low speeds'],
    correct: 1,
    explain: 'A faster particle moves in a larger circle (r ∝ v) but covers that larger circle at proportionally higher speed too — the two effects cancel, leaving frequency dependent only on Q, B, and m.',
  },
  {
    q: 'In cycloid motion (E along k̂, B along î), what traces out the cycloid shape?',
    options: ['A charge released from rest, which the crossed E and B fields drive in a repeating looping-forward pattern', 'A charge moving in a perfect circle', 'A charge at rest', 'Only occurs for neutral particles'],
    correct: 0,
    explain: 'E accelerates the charge, the resulting velocity triggers a magnetic force that curves the path, and the charge periodically slows to momentary rest before repeating — tracing the classic cycloid curve.',
  },
];

export default function CyclotronCycloid() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Cyclotron & Cycloid Motion" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A charged particle moving at an angle to a uniform B field traces a helix: circular motion in the plane
          perpendicular to B, combined with steady drift along B. In crossed E and B fields, a charge starting
          from rest instead traces a cycloid — a repeating looping-forward path driven by the interplay of
          acceleration and magnetic deflection.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'r = \\frac{mv_\\perp}{QB} = \\frac{mv\\sin\\theta}{QB}', caption: 'radius of circular motion' },
            { math: 'f = \\frac{QB}{2\\pi m}', caption: 'cyclotron frequency — independent of speed and radius' },
          ]}
        />
      </Section>

      <Section label="Interactive: helical vs cycloidal path" accent={accent}>
        <VizFrame height={320}><CyclotronViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
