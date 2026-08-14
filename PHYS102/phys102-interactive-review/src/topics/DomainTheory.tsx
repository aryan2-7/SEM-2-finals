import { TopicShell, Section, Concept, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import DomainTheoryViz from './DomainTheoryViz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'According to Weiss domain theory, what is a ferromagnetic material made of at the microscopic level, even with zero external field?',
    options: ['A single uniform magnetization throughout', 'Many small regions (domains), each spontaneously magnetized but pointing in different directions, averaging to near-zero net magnetization', 'No internal structure at all', 'Only individual atoms with no larger organization'],
    correct: 1,
    explain: "Weiss's key insight was that ferromagnets are already fully magnetized locally, within small domains — the material only appears unmagnetized overall because different domains point in different directions and cancel out.",
  },
  {
    q: 'What are the two mechanisms by which domains respond to an increasing applied field?',
    options: ['Domains disappear entirely', 'Domain wall motion (favorably oriented domains grow at the expense of others) followed by domain rotation (remaining domains rotate to align)', 'Only rotation, never growth', 'Domains split into smaller pieces only'],
    correct: 1,
    explain: 'At weaker fields, domain walls move so favorably-aligned domains grow larger; at stronger fields, the (now larger) domains rotate their internal magnetization to align more closely with H.',
  },
  {
    q: 'How does domain theory explain the existence of the hysteresis loop?',
    options: ['It doesn\'t relate to hysteresis at all', 'Domain wall motion is not perfectly reversible — walls get pinned by defects and don\'t retrace their exact path when the field is reduced, producing the lag that defines hysteresis', 'Hysteresis has nothing to do with domains', 'All domains move identically and reversibly'],
    correct: 1,
    explain: 'Microscopic pinning of domain walls at material defects means the domain configuration doesn\'t retrace itself exactly as the field cycles — this irreversibility is the microscopic origin of the macroscopic hysteresis loop.',
  },
];

export default function DomainTheory() {
  return (
    <TopicShell chapterLabel="CH. 05 — MAGNETOSTATIC FIELD IN MATTER" title="Domain Theory (Weiss)" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Even an "unmagnetized" piece of iron is actually made of many small regions — domains — each already
          fully magnetized internally, just pointing in different directions so their effects cancel out overall.
          Applying an external field grows favorably-oriented domains and rotates the rest into alignment, which
          is the microscopic mechanism behind everything observed in the hysteresis loop.
        </Concept>
      </Section>

      <Section label="Interactive: domain response to increasing H" accent={accent}>
        <VizFrame height={280}><DomainTheoryViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
