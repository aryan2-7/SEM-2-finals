import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import type { QuizQuestion } from '../data/types';

const accent = '#ef5b6f';

const quiz: QuizQuestion[] = [
  {
    q: 'Why is H useful in magnetic materials, analogous to why D is useful in dielectrics?',
    options: ['H has no particular usefulness', "∮H·dl = I_f,enc depends only on free current, letting Ampere's law be applied without knowing the bound/magnetization current in advance", 'H is always equal to B', 'H only applies to permanent magnets'],
    correct: 1,
    explain: 'Just as D absorbs bound charge to leave Gauss\'s law dependent only on free charge, H = B/μ₀ − M absorbs magnetization current to leave Ampere\'s law dependent only on free current.',
  },
  {
    q: 'For a copper rod carrying free current I_f, wrapped by an Amperian loop of radius s, what does ∮H·dl equal?',
    options: ['Zero always', 'I_f,enc — the free current alone, regardless of any magnetization', 'The total current including bound contributions', 'μ₀I_f'],
    correct: 1,
    explain: "This is exactly the point of defining H — the loop integral of H picks out only the free (conduction) current enclosed, cleanly separate from magnetization effects.",
  },
  {
    q: 'In vacuum (no magnetization, M=0), how does H relate to B?',
    options: ['H = B', 'H = B/μ₀', 'H = μ₀B', 'They are unrelated'],
    correct: 1,
    explain: 'With M=0, the definition H = B/μ₀ − M reduces simply to H = B/μ₀ — in vacuum, H and B carry the same information, just different units.',
  },
];

export default function HField() {
  return (
    <TopicShell chapterLabel="CH. 05 — MAGNETOSTATIC FIELD IN MATTER" title="Ampere's Law in Materials — the H Field" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Inside magnetized materials, the total current includes both free (conduction) current and bound
          current from atomic magnetization. Defining H = B/μ₀ − M absorbs the magnetization contribution
          entirely, leaving an Ampere's law that references only free current — directly analogous to how D
          simplifies Gauss's law inside dielectrics.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec H \\equiv \\frac{\\vec B}{\\mu_0} - \\vec M', caption: 'magnetic field strength' },
            { math: '\\oint \\vec H\\cdot d\\vec l = I_{f,enc}', caption: "Ampere's law for H, integral form" },
          ]}
        />
      </Section>

      <Section label="Worked example" accent={accent}>
        <VizFrame height={160}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--signal)', textAlign: 'center', maxWidth: 380 }}>
            copper rod, free current I_f, radius a:<br />
            H(2πs) = I_f → H = I_f/(2πs), for both s&lt;a and s&gt;a<br />
            <span style={{ color: 'var(--text-dim)', fontSize: 11.5 }}>(copper is only weakly magnetic, so B ≈ μ₀H here)</span>
          </p>
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
