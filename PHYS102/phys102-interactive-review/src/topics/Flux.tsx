import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import FluxViz from './FluxViz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'When a flat surface is tilted at angle θ to a uniform B field, how does the flux through it change?',
    options: ['Flux is unaffected by tilt', 'Flux scales as cosθ, maximal when the surface is perpendicular to B (θ=0°) and zero when parallel (θ=90°)', 'Flux scales as sinθ', 'Flux is always zero unless θ=0°'],
    correct: 1,
    explain: 'Φₘ = ∫B·da, and the dot product introduces a cosθ factor between B and the surface normal — flux is maximum when the surface directly faces the field and zero when the surface is edge-on to it.',
  },
  {
    q: 'What are the SI units of magnetic flux?',
    options: ['Tesla', 'Weber (T·m²)', 'Ampere', 'Henry'],
    correct: 1,
    explain: 'Since Φₘ = ∫B·da combines a field (Tesla) with an area (m²), the resulting unit is the Weber — also expressible as T·m².',
  },
  {
    q: 'If a surface is oriented exactly parallel to B (edge-on), what is the flux through it?',
    options: ['Maximum', 'Zero — no field lines pass through the surface', 'Negative infinity', 'Depends on the surface area'],
    correct: 1,
    explain: 'With the surface parallel to B, its normal is perpendicular to B, so B·n̂ = 0 everywhere on the surface — zero field lines actually cross it.',
  },
];

export default function Flux() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Magnetic Flux" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Magnetic flux measures how many field lines pass through a given surface — and that count depends on
          the surface's orientation relative to the field, not just its area. This concept underlies everything
          in electromagnetic induction, where changing flux is what drives an induced EMF.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock formulas={[{ math: '\\Phi_m = \\int_S \\vec B\\cdot d\\vec a', caption: 'magnetic flux through surface S' }]} />
      </Section>

      <Section label="Interactive: tilt the surface" accent={accent}>
        <VizFrame height={280}><FluxViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
