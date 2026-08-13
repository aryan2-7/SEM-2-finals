import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import StandardDerivationsViz from './StandardDerivationsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#5b8def';

const quiz: QuizQuestion[] = [
  {
    q: 'For a circular ring of charge, at what point on the axis is E maximum?',
    options: ['At the center of the ring (z=0)', 'At some nonzero z, not at the center and not at infinity', 'Only at z→∞', 'E is constant along the axis'],
    correct: 1,
    explain: 'E=0 exactly at the center by symmetry, and E→0 as z→∞ too (point-charge falloff) — so the maximum occurs at an intermediate z, found by setting dE/dz=0.',
  },
  {
    q: 'For a flat charged disk of radius R, what happens to E as R→∞ (infinite sheet limit)?',
    options: ['E→0', 'E approaches the constant value σ/2ε₀, independent of distance from the sheet', 'E→∞', 'E depends only on the disk radius, not σ'],
    correct: 1,
    explain: 'An infinite uniformly charged sheet produces a field that does not fall off with distance at all — E = σ/2ε₀ everywhere, a genuinely different limit from the point-charge falloff.',
  },
  {
    q: 'In every one of these standard derivations (two charges, line, ring, disk), what happens in the limit z ≫ (characteristic size)?',
    options: ['E always goes to zero', 'The field reduces to that of a single point charge equal to the total enclosed charge', 'The formulas diverge', 'They all reduce to the same constant'],
    correct: 1,
    explain: 'Far enough away, any finite charge distribution looks like a point charge — every one of these derivations confirms this by algebraically reducing to E ≈ (1/4πε₀)(q_total/z²) in the far-field limit.',
  },
];

export default function StandardDerivations() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Standard E-Field Derivations" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Four classic geometries — two point charges, a finite line, a ring, and a disk — cover most of the
          building-block field calculations you'll see. Each one reduces to a point-charge field far away, and
          each has its own interesting near-field behavior worth knowing by heart.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'E_{2q} = \\frac{1}{4\\pi\\epsilon_0}\\frac{2qz}{(d^2/4+z^2)^{3/2}}', caption: 'two equal charges, on the perpendicular bisector' },
            { math: 'E_{line} = \\frac{1}{4\\pi\\epsilon_0}\\frac{2\\lambda L}{z\\sqrt{z^2+L^2}}', caption: 'finite line charge of length 2L' },
            { math: 'E_{ring} = \\frac{1}{4\\pi\\epsilon_0}\\frac{qz}{(r^2+z^2)^{3/2}}', caption: 'ring of radius r' },
            { math: 'E_{disk} = \\frac{\\sigma}{2\\epsilon_0}\\left[1-\\frac{z}{\\sqrt{R^2+z^2}}\\right]', caption: 'disk of radius R' },
          ]}
        />
      </Section>

      <Section label="Interactive: pick a geometry, sweep z" accent={accent}>
        <VizFrame height={300}><StandardDerivationsViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
