import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import PolarizabilityViz from './PolarizabilityViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Model an atom as a point nucleus (+q) surrounded by a uniform spherical electron cloud (−q) of radius a. Applying an external field E shifts the nucleus by a small distance d.',
    note: 'This is a simplified but physically motivated toy model for how atoms polarize.',
  },
  {
    label: 'At equilibrium, the external field is exactly balanced by the internal field the (now off-center) electron cloud exerts back on the nucleus — the field inside a uniform sphere of charge at distance d from center.',
    math: 'E = E_e = \\frac{1}{4\\pi\\epsilon_0}\\frac{qd}{a^3}',
  },
  {
    label: 'Recognize that qd is exactly the induced dipole moment p, and solve for p in terms of E.',
    math: 'p = qd = (4\\pi\\epsilon_0 a^3)E',
  },
  {
    label: 'Since p = αE by definition, read off the atomic polarizability.',
    math: '\\alpha = 4\\pi\\epsilon_0 a^3 = 3\\epsilon_0 v',
    note: 'v = (4/3)πa³ is just the atomic volume — so α is directly proportional to how big the atom is.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'In this model, what physically determines the equilibrium displacement of the nucleus?',
    options: ['Random thermal motion', 'The point where the external field is exactly canceled by the internal restoring field from the electron cloud', 'The nucleus always displaces to the edge of the cloud', 'There is no equilibrium — it displaces indefinitely'],
    correct: 1,
    explain: 'The nucleus settles wherever the internal field (from the now-offset electron cloud) exactly balances the applied external field — a stable equilibrium.',
  },
  {
    q: 'According to α = 4πε₀a³, what happens to polarizability as atomic radius increases?',
    options: ['α decreases', 'α increases (as the cube of the radius)', 'α is independent of radius', 'α becomes negative'],
    correct: 1,
    explain: 'Larger atoms have looser, more easily displaced electron clouds, and the model captures this directly — α scales as a³, growing quickly with atomic size.',
  },
  {
    q: 'Why is α = 3ε₀v a useful way to write the polarizability?',
    options: ['It has no particular usefulness', 'It shows α is directly proportional to the atomic volume v, a simple and physically intuitive relationship', 'It only applies to hydrogen', 'v is not a volume in this formula'],
    correct: 1,
    explain: 'Rewriting a³ in terms of v = (4/3)πa³ makes the volume-dependence explicit — bigger atoms (bigger v) polarize more easily, in direct proportion.',
  },
];

export default function Polarizability() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="Polarizability Model" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Even nonpolar atoms develop an induced dipole moment when placed in an external field — the electron
          cloud shifts relative to the nucleus. A simple classical model (point nucleus inside a uniform charged
          sphere of electrons) captures this effect and predicts how strongly an atom polarizes.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec p = \\alpha \\vec E', caption: 'induced dipole moment' },
            { math: '\\alpha = 4\\pi\\epsilon_0 a^3 = 3\\epsilon_0 v', caption: 'atomic polarizability, from the simple model' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: nucleus shifting under a field" accent={accent}>
        <VizFrame height={300}><PolarizabilityViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
