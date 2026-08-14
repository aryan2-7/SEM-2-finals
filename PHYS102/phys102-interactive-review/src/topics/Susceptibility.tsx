import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import SusceptibilityViz from './SusceptibilityViz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'What sign does the magnetic susceptibility χ_m have for diamagnetic materials?',
    options: ['Positive', 'Negative — induced moments oppose the applied field', 'Exactly zero', 'It varies wildly'],
    correct: 1,
    explain: 'Diamagnetism arises from induced currents (via Lenz\'s-law-like opposition) that always create a moment opposing the applied field, giving χ_m < 0.',
  },
  {
    q: 'What distinguishes ferromagnetic materials from paramagnetic ones?',
    options: ['Nothing — they behave identically', 'Ferromagnets have neighboring atomic moments that interact and align cooperatively, producing much larger susceptibilities than the weak, independent alignment in paramagnets', 'Paramagnets are always stronger', 'Only ferromagnets exist in nature'],
    correct: 1,
    explain: 'Paramagnetic atoms align weakly and independently with an external field; ferromagnetic materials have strong quantum-mechanical exchange interactions between neighboring atoms that cause them to align cooperatively, producing susceptibilities orders of magnitude larger.',
  },
  {
    q: "Curie's law χ ∝ 1/T describes which material type, and what happens as T increases?",
    options: ['Diamagnetic materials; χ increases with T', 'Paramagnetic materials; χ decreases as temperature rises, since thermal agitation disrupts the alignment', 'Ferromagnetic materials only', 'χ is independent of temperature for all materials'],
    correct: 1,
    explain: "Higher temperature means more thermal randomization fighting against the field's tendency to align atomic moments, so paramagnetic susceptibility falls off as 1/T.",
  },
];

export default function Susceptibility() {
  return (
    <TopicShell chapterLabel="CH. 05 — MAGNETOSTATIC FIELD IN MATTER" title="Susceptibility & Material Types" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Not all materials respond to magnetic fields the same way. Diamagnets are weakly repelled, paramagnets
          weakly attracted, and ferromagnets strongly attracted — the difference comes down to how atomic
          magnetic moments interact (or fail to interact) with each other and with the applied field.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec M = \\chi_m\\vec H, \\qquad \\mu = \\mu_0(1+\\chi_m)', caption: 'linear magnetic materials' },
            { math: '\\chi_m \\propto \\frac{1}{T} \\quad \\text{(Curie\'s law, paramagnets)}', caption: 'temperature dependence' },
          ]}
        />
      </Section>

      <Section label="Interactive: material explorer" accent={accent}>
        <VizFrame height={340}><SusceptibilityViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
