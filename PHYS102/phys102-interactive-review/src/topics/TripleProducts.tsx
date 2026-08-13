import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import TripleProductViz from './TripleProductViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'What does the scalar triple product A·(B×C) represent geometrically?',
    options: ['The area of a triangle', 'The (signed) volume of the parallelepiped spanned by A, B, and C', 'Always zero', 'A unit vector'],
    correct: 1,
    explain: 'A·(B×C) gives the volume of the parallelepiped with edges A, B, C — positive if the three vectors form a right-handed set, negative if left-handed.',
  },
  {
    q: 'The BAC-CAB rule expands which kind of expression?',
    options: ['A dot product', 'A vector triple product, A×(B×C)', 'A scalar triple product', 'A simple sum of vectors'],
    correct: 1,
    explain: 'BAC-CAB is the mnemonic for A×(B×C) = B(A·C) − C(A·B) — converting a nested cross product into a combination of simpler dot products.',
  },
  {
    q: 'If A, B, C all lie in the same plane, what is A·(B×C)?',
    options: ['Maximum possible value', 'Zero — the parallelepiped collapses to zero volume', 'Always negative', 'Undefined'],
    correct: 1,
    explain: 'Coplanar vectors span a flat (zero-thickness) parallelepiped, so the enclosed volume — and hence the scalar triple product — is exactly zero.',
  },
];

export default function TripleProducts() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Triple Products" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Combining three vectors with dot and cross products in sequence produces two distinct useful results:
          the scalar triple product, which measures a signed volume, and the vector triple product, which
          reduces (via the BAC-CAB identity) to a combination of simpler dot products.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec A \\times (\\vec B \\times \\vec C) = \\vec B(\\vec A \\cdot \\vec C) - \\vec C(\\vec A \\cdot \\vec B)', caption: 'BAC-CAB rule (vector triple product)' },
            { math: '\\vec A \\cdot (\\vec B \\times \\vec C) = \\text{volume of parallelepiped spanned by } A, B, C', caption: 'scalar triple product' },
          ]}
        />
      </Section>

      <Section label="Interactive: parallelepiped volume" accent={accent}>
        <VizFrame height={280}><TripleProductViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
