import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import BiotSavartViz from './BiotSavartViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const steps: DerivationStep[] = [
  {
    label: 'Start from the Biot-Savart law for a line current: each current element contributes a small field determined by the cross product with the separation vector.',
    math: '\\vec B(\\vec r) = \\frac{\\mu_0 I}{4\\pi}\\int \\frac{d\\vec l\\,\'\\times \\hat\\tau}{\\tau^2}',
  },
  {
    label: 'For a straight wire segment, integrate along the wire, expressing geometry in terms of the angle subtended at the field point (θ₁ to θ₂).',
    math: '\\vec B = \\frac{\\mu_0 I}{4\\pi r}(\\sin\\theta_2 - \\sin\\theta_1)\\hat\\phi',
  },
  {
    label: 'Take the symmetric case (θ₁ = −θ₀, θ₂ = θ₀) for a finite segment centered on the perpendicular from the field point.',
    math: '\\vec B = \\frac{\\mu_0 I}{2\\pi r}\\sin\\theta_0\\,\\hat\\phi',
  },
  {
    label: 'Take the infinite-wire limit: the segment stretches to θ₁ = −π/2, θ₂ = +π/2.',
    math: '\\vec B = \\frac{\\mu_0 I}{2\\pi r}\\hat\\phi \\qquad (\\text{infinite straight wire})',
  },
  {
    label: 'For a circular loop of radius R, integrate the Biot-Savart contributions around the ring; by symmetry only the axial component survives.',
    math: '\\vec B = \\frac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}\\hat k',
  },
  {
    label: 'At the center of the loop (z = 0), this simplifies dramatically.',
    math: '\\vec B = \\frac{\\mu_0 I}{2R}\\hat k',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'For an infinite straight wire, how does B scale with distance r from the wire?',
    options: ['B ∝ r', 'B ∝ 1/r', 'B ∝ 1/r²', 'B is independent of r'],
    correct: 1,
    explain: 'B = μ₀I/(2πr) — the field falls off as 1/r, one power slower than the 1/r² of a point charge\'s E field, because the wire is an infinite line source rather than a point.',
  },
  {
    q: 'What symmetry argument eliminates the radial (off-axis) component of B for a circular loop, on its axis?',
    options: ['There is no such symmetry — the field is purely radial', 'Every current element\'s radial contribution is canceled by the diametrically opposite element', 'The loop must be infinitely large', 'Only true at the loop\'s center'],
    correct: 1,
    explain: 'By the rotational symmetry of the loop about its axis, contributions from opposite sides cancel in the radial direction, leaving only the axial component of B nonzero on-axis.',
  },
  {
    q: 'At the center of a current loop of radius R, what is B?',
    options: ['μ₀I/(2πR)', 'μ₀I/(2R)', 'Zero', 'μ₀I R²'],
    correct: 1,
    explain: 'Setting z=0 in B = μ₀IR²/[2(R²+z²)^(3/2)] gives B = μ₀I/(2R) — the standard result for the field at the center of a current loop.',
  },
];

export default function BiotSavart() {
  return (
    <TopicShell chapterLabel="CH. 04 — MAGNETOSTATICS" title="Biot–Savart Law" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          The Biot-Savart law is the magnetic analogue of Coulomb's law for currents: each infinitesimal segment
          of current contributes a small magnetic field, and the total field is the integral (superposition) of
          all these contributions. It's the foundational tool for computing B from any current distribution.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec B(\\vec r) = \\frac{\\mu_0 I}{4\\pi}\\int \\frac{d\\vec l\\,\'\\times\\hat\\tau}{\\tau^2}', caption: 'Biot-Savart law, line current' },
            { math: '\\vec B_{wire} = \\frac{\\mu_0 I}{2\\pi r}\\hat\\phi', caption: 'infinite straight wire' },
            { math: '\\vec B_{loop} = \\frac{\\mu_0 I R^2}{2(R^2+z^2)^{3/2}}\\hat k', caption: 'circular loop, on axis' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: geometry for each case" accent={accent}>
        <VizFrame height={340}><BiotSavartViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
