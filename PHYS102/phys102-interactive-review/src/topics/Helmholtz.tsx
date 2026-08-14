import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import FieldClassificationViz from './FieldClassificationViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'Which null identity guarantees that ∇·B = 0 is always consistent with writing B = ∇×A?',
    options: ['∇×(∇f) = 0', '∇·(∇×A) = 0 for any vector field A', 'The gradient theorem', 'The BAC-CAB rule'],
    correct: 1,
    explain: 'The divergence of any curl is identically zero — this is exactly why defining B as the curl of a vector potential A automatically satisfies ∇·B=0 for free.',
  },
  {
    q: 'A field with ∇×F = 0 everywhere is called...',
    options: ['Solenoidal', 'Irrotational (or conservative) — it can be written as −∇V', 'Divergence-free', 'Undefined'],
    correct: 1,
    explain: 'Irrotational fields have zero curl and can always be expressed as the gradient of some scalar potential — exactly the property used for E = −∇V in electrostatics.',
  },
  {
    q: 'What does the Helmholtz theorem say about a general vector field?',
    options: ['Every vector field is purely irrotational', 'Every vector field is purely solenoidal', 'Any sufficiently well-behaved vector field can be decomposed into an irrotational part plus a solenoidal part', 'Vector fields cannot be decomposed'],
    correct: 2,
    explain: 'Helmholtz\'s theorem states that F = −∇V + ∇×A for suitable scalar V and vector A — this decomposition is precisely why E fields (irrotational in statics) and B fields (always solenoidal) can be treated with separate potential formulations.',
  },
];

export default function Helmholtz() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Null Identities, Field Classification & the Helmholtz Theorem" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Two vector calculus identities are always true, no matter the field: the curl of a gradient is zero,
          and the divergence of a curl is zero. These aren't coincidences — they're exactly why scalar and
          vector potentials work at all, and the Helmholtz theorem shows every reasonable vector field can be
          built from these two building blocks.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\nabla\\times(\\nabla f) = 0 \\quad \\text{(always)}', caption: 'null identity #1' },
            { math: '\\nabla\\cdot(\\nabla\\times\\vec A) = 0 \\quad \\text{(always)}', caption: 'null identity #2' },
            { math: '\\vec F = -\\nabla V + \\nabla\\times\\vec A', caption: 'Helmholtz decomposition' },
          ]}
        />
      </Section>

      <Section label="Interactive: irrotational vs solenoidal fields" accent={accent}>
        <VizFrame height={260}><FieldClassificationViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
