import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import BindingEnergyViz from './BindingEnergyViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#59c98e';

const steps: DerivationStep[] = [
  {
    label: 'A nucleus of Z protons and N neutrons would, if separated into free particles, have total mass equal to the simple sum of constituent masses.',
    math: 'm_{expected} = Zm_p + Nm_n',
  },
  {
    label: 'The measured mass M of the actual bound nucleus is always slightly less than this expected sum. The difference is the mass defect.',
    math: '\\Delta m = (Zm_p + Nm_n) - M',
  },
  {
    label: 'By mass-energy equivalence, this "missing" mass corresponds to energy that was released when the nucleus assembled — equivalently, the energy required to pull it back apart.',
    math: '\\text{B.E.} = \\Delta m \\, c^2 = [(Zm_p+Nm_n)-M]c^2',
  },
  {
    label: 'Dividing by the mass number A = Z+N gives binding energy per nucleon, the standard measure of nuclear stability.',
    math: '\\frac{\\text{B.E.}}{A}',
    note: 'Nuclei near iron (A≈56) have the highest B.E./A, which is exactly why both fission of heavy nuclei and fusion of light nuclei release energy — both move toward the most stable middle.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why is the measured mass of a nucleus always less than the sum of its free constituent nucleons?',
    options: ['Measurement error', 'Binding energy is released when the nucleons combine, and that released energy corresponds to a mass deficit via E=mc²', 'Nuclei gain mass over time', 'It isn\'t actually less — this is a common misconception'],
    correct: 1,
    explain: 'Assembling a nucleus releases binding energy; by mass-energy equivalence, that released energy is "paid for" by a corresponding decrease in the total rest mass compared to the free particles.',
  },
  {
    q: 'What does a higher B.E./A generally indicate about a nucleus?',
    options: ['It is less stable', 'It is more tightly bound and more stable', 'It has more protons than neutrons', 'Nothing meaningful'],
    correct: 1,
    explain: 'B.E./A is the standard stability metric — nuclei with higher binding energy per nucleon require more energy to break apart per particle, making them more stable.',
  },
  {
    q: 'Why do both nuclear fission (heavy nuclei splitting) and fusion (light nuclei combining) release energy?',
    options: ['They don\'t both release energy — only one does', 'Both processes move the resulting nuclei toward the peak of the B.E./A curve (around iron), which releases the difference in binding energy', 'Energy release is unrelated to binding energy', 'Only fusion releases energy'],
    correct: 1,
    explain: 'The B.E./A curve peaks near iron (A≈56). Heavy nuclei splitting (fission) and light nuclei combining (fusion) both produce nuclei closer to this peak, releasing the binding-energy difference as kinetic energy.',
  },
];

export default function BindingEnergy() {
  return (
    <TopicShell chapterLabel="CH. 09 — NUCLEAR PHYSICS" title="Mass Defect & Binding Energy" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A nucleus weighs slightly less than the sum of its individual protons and neutrons. That "missing"
          mass was converted into the energy that binds the nucleus together — and measuring it tells you
          exactly how stable that nucleus is.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\Delta m = (Zm_p + Nm_n) - M', caption: 'mass defect' },
            { math: '\\text{B.E.} = \\Delta m\\, c^2', caption: 'binding energy' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive calculator" accent={accent}>
        <VizFrame height={320}><BindingEnergyViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
