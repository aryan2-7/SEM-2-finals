import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import LorentzForceViz from './LorentzForceViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const steps: DerivationStep[] = [
  {
    label: 'The full Lorentz force combines the electric and magnetic contributions on a moving charge.',
    math: '\\vec F = \\vec F_e + \\vec F_{mag} = Q[\\vec E + (\\vec v\\times\\vec B)]',
  },
  {
    label: 'To check whether the magnetic part does work, compute F_mag · v.',
    math: 'W_{mag} = \\int \\vec F_{mag}\\cdot d\\vec l = \\int Q(\\vec v\\times\\vec B)\\cdot \\vec v\\, dt',
  },
  {
    label: 'The vector v×B is, by definition of the cross product, always perpendicular to v. So the dot product with v vanishes identically.',
    math: '(\\vec v\\times\\vec B)\\cdot\\vec v = 0 \\quad\\text{for all } \\vec v, \\vec B',
  },
  {
    label: 'Therefore the magnetic force can never do work on a moving charge, regardless of the path or field configuration.',
    math: 'W_{mag} = 0',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why can the magnetic force never do work on a charged particle?',
    options: ['Because B is usually weak', 'F_mag = Q(v×B) is always perpendicular to v by the definition of the cross product, so F_mag·v = 0 identically', 'Only true for uniform B fields', 'It actually can do work in some cases'],
    correct: 1,
    explain: 'This is a purely geometric fact about the cross product — v×B is perpendicular to v no matter what B is, so the magnetic force can only change the direction of motion, never the speed.',
  },
  {
    q: 'If a charge moves through a region with only a magnetic field (no E), what happens to its kinetic energy?',
    options: ['It increases', 'It decreases', 'It stays exactly constant — only direction changes, not speed', 'It depends on B\'s strength'],
    correct: 2,
    explain: 'Since the magnetic force does zero work, kinetic energy (and thus speed) is conserved — the particle can curve, spiral, or loop, but never speed up or slow down from B alone.',
  },
  {
    q: 'What is the direction of the magnetic force at every instant, relative to velocity?',
    options: ['Parallel to v', 'Always perpendicular to v', 'Always perpendicular to B', 'Random'],
    correct: 1,
    explain: 'F_mag = Qv×B is perpendicular to v by construction — this is exactly why it can only redirect motion (centripetal-style), never speed it up.',
  },
];

export default function LorentzForce() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Lorentz Force" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          The full electromagnetic force on a charge combines an electric push (along E) and a magnetic
          sideways deflection (along v×B). A key structural fact falls straight out of the cross product: the
          magnetic force is always perpendicular to velocity, so it can never speed up or slow down a particle —
          only bend its path.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec F = Q[\\vec E + (\\vec v\\times\\vec B)]', caption: 'Lorentz force' },
            { math: 'W_{mag} = \\int Q(\\vec v\\times\\vec B)\\cdot\\vec v\\,dt = 0', caption: 'magnetic force does zero work' },
          ]}
        />
      </Section>

      <Section label="Why the magnetic force does no work" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: F always ⊥ v" accent={accent}>
        <VizFrame height={280}><LorentzForceViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
