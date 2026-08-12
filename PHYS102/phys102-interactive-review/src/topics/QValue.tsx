import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import QValueViz from './QValueViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#59c98e';

const steps: DerivationStep[] = [
  {
    label: 'Consider a general reaction x + X → Y + y, with target X at rest. Apply conservation of total relativistic energy.',
    math: 'E_x + m_xc^2 + M_Xc^2 = E_Y + M_Yc^2 + E_y + m_yc^2',
  },
  {
    label: 'Rearrange to isolate the net kinetic energy change — this defines the Q-value.',
    math: 'Q = E_Y + E_y - E_x = (M_X+m_x-M_Y-m_y)c^2',
    note: 'Q>0 (exoergic): mass converts to kinetic energy, reaction proceeds spontaneously. Q<0 (endoergic): kinetic energy must be supplied to create the extra mass.',
  },
  {
    label: 'To connect Q to measurable quantities, apply momentum conservation along and perpendicular to the beam direction, which lets you eliminate the (often unmeasured) recoil angle φ.',
    math: 'M_YV_Y\\sin\\phi = m_yv_y\\sin\\theta, \\qquad m_xv_x = M_YV_Y\\cos\\phi + m_yv_y\\cos\\theta',
  },
  {
    label: 'Square and add both momentum equations to eliminate φ entirely, then express everything in terms of kinetic energies.',
    math: 'E_Y = \\frac{m_x}{M_Y}E_x + \\frac{m_y}{M_Y}E_y - \\frac{2}{M_Y}\\sqrt{E_xE_ym_xm_y}\\cos\\theta',
  },
  {
    label: 'Substitute back into Q = E_Y + E_y − E_x to get the standard Q-equation in terms of only the measured energies, masses, and emission angle θ.',
    math: 'Q = E_y\\left(1+\\frac{m_y}{M_Y}\\right) - E_x\\left(1-\\frac{m_x}{M_Y}\\right) - \\frac{2}{M_Y}\\sqrt{E_xE_ym_xm_y}\\cos\\theta',
    note: 'This is exactly what makes Q experimentally measurable: you only need the beam energy, the detected particle\'s energy and angle — never the recoil nucleus directly.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What is the physical meaning of Q > 0 (exoergic reaction)?',
    options: ['Energy must be supplied for the reaction to occur', 'Mass converts into kinetic energy; the reaction releases energy spontaneously', 'The reaction cannot occur', 'Q has no physical meaning'],
    correct: 1,
    explain: 'A positive Q-value means the products carry more kinetic energy than the reactants started with — that extra energy came from a decrease in total rest mass.',
  },
  {
    q: 'Why is eliminating the recoil angle φ from the momentum equations experimentally important?',
    options: ['It isn\'t important', 'The recoil nucleus Y is often too slow or short-lived to detect directly, so Q must be computable from only the easily-measured projectile and emitted-particle quantities', 'φ is always zero anyway', 'Only Q depends on φ, not the physics'],
    correct: 1,
    explain: 'In practice, only the incident beam and the lighter emitted particle y are typically measured — squaring and adding the momentum equations removes φ so Q can be extracted without ever detecting Y.',
  },
  {
    q: 'For emission perpendicular to the beam (θ=90°), what simplification occurs in the Q-equation?',
    options: ['The equation becomes undefined', 'The cosθ term vanishes entirely, since cos(90°)=0', 'Q becomes automatically zero', 'No simplification occurs'],
    correct: 1,
    explain: 'cos(90°)=0 eliminates the cross term entirely, leaving Q = E_y(1+m_y/M_Y) − E_x(1−m_x/M_Y) — a cleaner, commonly-used special case.',
  },
];

export default function QValue() {
  return (
    <TopicShell chapterLabel="CH. 09 — NUCLEAR PHYSICS" title="Q-Value of a Nuclear Reaction" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          The Q-value tells you whether a nuclear reaction releases energy (exoergic) or requires energy input
          (endoergic). While Q is defined in terms of masses, it can also be extracted purely from measured
          kinetic energies and angles — which is how it's actually determined in the lab.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'Q = (M_X+m_x-M_Y-m_y)c^2', caption: 'Q-value from masses' },
            { math: 'Q = E_y\\left(1+\\frac{m_y}{M_Y}\\right) - E_x\\left(1-\\frac{m_x}{M_Y}\\right) - \\frac{2}{M_Y}\\sqrt{E_xE_ym_xm_y}\\cos\\theta', caption: 'Q-equation from measured energies and angle' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: reaction geometry" accent={accent}>
        <VizFrame height={300}><QValueViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
