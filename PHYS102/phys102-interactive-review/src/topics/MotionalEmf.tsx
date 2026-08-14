import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import MotionalEmfViz from './MotionalEmfViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'Charges inside the moving conductor feel a magnetic force per unit charge, purely from their motion through the field.',
    math: '\\vec f_{mag} = \\vec v \\times \\vec B',
  },
  {
    label: 'For a rectangular loop abcd of width h, with side ab (length h) leading and still inside the field: on ab, f is parallel to the wire.',
    math: '(f_{mag})_{ab} = vB, \\ \\text{parallel to } d\\vec l',
  },
  {
    label: 'On the sides ad and bc, f is perpendicular to the wire direction, contributing zero to the line integral. On cd (outside the field), f = 0 entirely.',
    math: '(f_{mag})_{ad} \\perp d\\vec l, \\qquad (f_{mag})_{cd} = 0',
  },
  {
    label: 'The full EMF integral around the loop therefore reduces to just the ab contribution.',
    math: '\\mathcal{E} = \\oint \\vec f_{mag}\\cdot d\\vec l = \\int_a^b \\vec f_{mag}\\cdot d\\vec l = vBh',
  },
  {
    label: 'This matches exactly what the flux rule predicts: Φ=Bsh with s shrinking at rate v gives dΦ/dt = −vBh, so ℰ = −dΦ/dt = vBh.',
    math: '\\mathcal{E} = -\\frac{d\\Phi}{dt} = vBh',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'In the sliding rectangular loop, which side actually generates the EMF?',
    options: ['All four sides equally', 'Only the leading edge (ab) still inside the field, since it alone has both a nonzero force and a component along the wire', 'Only the trailing edge', 'None of the sides'],
    correct: 1,
    explain: 'ad and bc feel force perpendicular to their length (no work), and cd is outside the field entirely (f=0) — only ab contributes to the EMF integral.',
  },
  {
    q: 'What produces the "motional" EMF physically?',
    options: ['A time-varying B field', 'The v×B force on charge carriers as the conductor physically moves through a static field', 'Chemical reactions in the wire', 'Radiation pressure'],
    correct: 1,
    explain: 'Unlike Faraday induction from a changing field, motional EMF comes purely from the Lorentz force on charges carried along with a moving conductor through a static B.',
  },
  {
    q: 'Does the flux rule ℰ=−dΦ/dt give the same answer as the direct force calculation?',
    options: ['No, they disagree', 'Yes — both give ℰ=vBh, confirming the flux rule and the direct Lorentz-force approach are equivalent', 'Only for very slow motion', 'Only if B is non-uniform'],
    correct: 1,
    explain: 'This consistency check is exactly what the chapter derivation demonstrates: the general flux rule and the specific microscopic force calculation agree perfectly.',
  },
];

export default function MotionalEmf() {
  return (
    <TopicShell chapterLabel="CH. 06 — ELECTROMAGNETIC INDUCTION" title="Motional EMF" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          When a conducting loop physically moves through a static magnetic field, the moving charge carriers
          feel a Lorentz force that drives current around the loop — even though the field itself isn't
          changing. Working out exactly which segments of the loop contribute reveals the flux rule from first
          principles.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\mathcal{E} = \\oint (\\vec v\\times\\vec B)\\cdot d\\vec l = vBh', caption: 'motional EMF for a loop exiting a uniform field' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: loop sliding through a field" accent={accent}>
        <VizFrame height={280}><MotionalEmfViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
