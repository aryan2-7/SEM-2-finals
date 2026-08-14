import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import SuperconductivityViz from './SuperconductivityViz';
import type { QuizQuestion } from '../data/types';

const accent = '#59c98e';

const quiz: QuizQuestion[] = [
  {
    q: 'What is the Meissner effect?',
    options: ['Superconductors attract magnetic field lines', 'Below Tc, a superconductor completely expels internal magnetic flux — it becomes a perfect diamagnet', 'Superconductors have infinite magnetic permeability', 'Only applies to Type II superconductors'],
    correct: 1,
    explain: 'The Meissner effect is flux expulsion: cooling a material below Tc in an external field forces B=0 inside the bulk, corresponding to χ_m = −1 (perfect diamagnetism).',
  },
  {
    q: 'What happens if the applied field exceeds H_c(T)?',
    options: ['Nothing changes', 'Superconductivity is destroyed and the material returns to its normal resistive state', 'The material becomes even more superconducting', 'H_c(T) has no physical significance'],
    correct: 1,
    explain: 'H_c(T) is precisely the threshold beyond which the superconducting state can no longer be sustained — exceeding it drives a transition back to normal conductivity.',
  },
  {
    q: 'What distinguishes a Type II superconductor from Type I?',
    options: ['Type II has no critical field at all', 'Type II has two critical fields (Hc1, Hc2) and passes through an intermediate mixed/vortex state, while Type I transitions abruptly at a single Hc', 'Type I only exists in theory', 'There is no meaningful difference'],
    correct: 1,
    explain: 'Type I superconductors switch abruptly from superconducting to normal at Hc. Type II superconductors instead pass through a mixed state (Hc1 < H < Hc2) where magnetic flux partially penetrates as vortices before fully normal behavior sets in above Hc2.',
  },
];

export default function Superconductivity() {
  return (
    <TopicShell chapterLabel="CH. 08 — ATOMS & MOLECULES" title="Superconductivity" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Below a critical temperature, certain materials lose all electrical resistance and expel magnetic flux
          from their interior entirely — the Meissner effect. This superconducting state is fragile though: push
          the temperature or the applied field too high, and the material reverts to ordinary conduction.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\chi_m = -1', caption: 'perfect diamagnetism below Tc' },
            { math: 'H_c(T) = H_c(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^2\\right]', caption: 'critical field vs temperature' },
          ]}
        />
      </Section>

      <Section label="Interactive: Meissner effect & critical field" accent={accent}>
        <VizFrame height={340}><SuperconductivityViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
