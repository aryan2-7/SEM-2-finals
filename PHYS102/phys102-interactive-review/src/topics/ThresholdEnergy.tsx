import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import ThresholdEnergyCalc from './ThresholdEnergyCalc';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#59c98e';

const steps: DerivationStep[] = [
  {
    label: 'For an endoergic reaction (Q < 0), the projectile needs a minimum kinetic energy — the threshold energy E_th — for the reaction to occur at all, since some kinetic energy must convert into rest mass.',
    note: 'At exactly threshold, the compound nucleus and products move together with the minimum possible kinetic energy consistent with momentum conservation — none "wasted" on relative motion.',
  },
  {
    label: 'Let M_c = M_X + m_x be the mass of the compound (fused) system at threshold. Momentum conservation requires the projectile\'s momentum to equal the compound system\'s momentum.',
    math: 'm_x v_x = M_c V_c',
  },
  {
    label: 'The energy deficit (−Q, since Q<0) must equal the kinetic energy "lost" to the fact that only part of the incoming momentum ends up as usable kinetic energy after the masses merge.',
    math: '-Q = \\frac{1}{2}m_x v_x^2 - \\frac{1}{2}M_c V_c^2 = \\frac{1}{2}m_x v_x^2\\left(1 - \\frac{m_x}{M_c}\\right)',
    note: 'The second term uses V_c = (m_x/M_c)v_x from the momentum relation above.',
  },
  {
    label: 'Recognize (1/2)m_x v_x² as E_th, and simplify the mass ratio using M_c = M_X + m_x.',
    math: '-Q = E_{th}\\left(1 - \\frac{m_x}{M_X+m_x}\\right) = E_{th}\\left(\\frac{M_X}{M_X+m_x}\\right)',
  },
  {
    label: 'Solve for the threshold energy.',
    math: 'E_{th} = (-Q)\\left(1 + \\frac{m_x}{M_X}\\right)',
  },
  {
    label: 'Special case: for photon-induced reactions (photodisintegration), the projectile is massless, m_x = 0.',
    math: 'E_{th} = -Q \\quad (m_x = 0)',
    note: 'A photon carries no rest mass, so none of its energy is "wasted" giving the compound system recoil momentum — the entire deficit −Q must come from the photon energy directly.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why is E_th always larger than |Q| for a massive projectile (m_x > 0)?',
    options: ['It isn\'t — they\'re always equal', 'Some of the projectile\'s kinetic energy must go into recoil momentum of the compound system, so more than |Q| is needed', 'Q is measured incorrectly', 'Only true for negative masses'],
    correct: 1,
    explain: 'Because momentum must be conserved, part of the incoming kinetic energy is unavoidably tied up in giving the compound nucleus recoil motion — that\'s the extra factor (1 + mₓ/Mₓ).',
  },
  {
    q: 'For a photon-induced (γ, n) reaction, what is E_th?',
    options: ['E_th = 0 always', 'E_th = −Q exactly, with no mass-ratio correction', 'E_th = Q', 'Cannot be determined'],
    correct: 1,
    explain: 'With m_x = 0, the factor (1 + m_x/M_X) reduces to 1, so E_th = −Q — a massless photon carries no recoil penalty.',
  },
  {
    q: 'If the target mass M_X is very large compared to the projectile m_x, what happens to E_th?',
    options: ['E_th grows without bound', 'E_th approaches −Q (the mass-ratio correction becomes negligible)', 'E_th becomes negative', 'E_th equals zero'],
    correct: 1,
    explain: 'As M_X → ∞, m_x/M_X → 0, so E_th = (−Q)(1 + m_x/M_X) → −Q — a very heavy target barely recoils, so almost none of the kinetic energy is "wasted."',
  },
];

export default function ThresholdEnergy() {
  return (
    <TopicShell chapterLabel="CH. 09 — NUCLEAR PHYSICS" title="Threshold Energy" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          An endoergic reaction (Q &lt; 0) absorbs energy rather than releasing it — some of the incoming kinetic
          energy must convert into rest mass. But the projectile needs more kinetic energy than just |Q|, because
          momentum conservation forces some of that energy into recoil motion of the compound system rather than
          into the reaction itself.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'E_{th} = (-Q)\\left(1 + \\frac{m_x}{M_X}\\right)', caption: 'threshold energy, general case' },
            { math: 'E_{th} = -Q \\quad \\text{(photon case, } m_x = 0\\text{)}', caption: 'special case: photodisintegration' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive calculator" accent={accent}>
        <VizFrame height={340}>
          <ThresholdEnergyCalc />
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
