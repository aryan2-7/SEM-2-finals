import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const gaussSteps: DerivationStep[] = [
  {
    label: 'Start from Gauss\'s law in terms of the total (free + bound) charge density.',
    math: '\\nabla \\cdot \\vec E = \\frac{\\rho}{\\epsilon_0}, \\qquad \\rho = \\rho_f + \\rho_b = \\rho_f - \\nabla\\cdot\\vec P',
  },
  {
    label: 'Substitute and multiply through by ε₀.',
    math: '\\epsilon_0 \\nabla\\cdot\\vec E = \\rho_f - \\nabla\\cdot\\vec P',
  },
  {
    label: 'Bring the polarization term to the left — it combines naturally with E.',
    math: '\\nabla \\cdot (\\epsilon_0 \\vec E + \\vec P) = \\rho_f',
  },
  {
    label: 'Define the electric displacement D ≡ ε₀E + P. The free charge alone now sources D.',
    math: '\\vec D \\equiv \\epsilon_0\\vec E + \\vec P \\quad\\Longrightarrow\\quad \\nabla\\cdot\\vec D = \\rho_f',
  },
];

const ampereSteps: DerivationStep[] = [
  {
    label: 'Start from the full Ampere–Maxwell law with the total current, including bound and polarization currents.',
    math: '\\nabla\\times\\vec B = \\mu_0\\vec J + \\mu_0\\epsilon_0\\frac{\\partial\\vec E}{\\partial t}, \\qquad \\vec J = \\vec J_f + \\nabla\\times\\vec M + \\frac{\\partial \\vec P}{\\partial t}',
  },
  {
    label: 'Divide through by μ₀ and substitute the total current.',
    math: '\\frac{1}{\\mu_0}(\\nabla\\times\\vec B) = \\vec J_f + \\nabla\\times\\vec M + \\frac{\\partial\\vec P}{\\partial t} + \\epsilon_0\\frac{\\partial\\vec E}{\\partial t}',
  },
  {
    label: 'Move the magnetization curl to the left, grouping it with B/μ₀.',
    math: '\\nabla\\times\\left(\\frac{\\vec B}{\\mu_0} - \\vec M\\right) = \\vec J_f + \\frac{\\partial}{\\partial t}(\\epsilon_0\\vec E + \\vec P)',
  },
  {
    label: 'Recognize ε₀E + P as D from the Gauss derivation, and define H ≡ B/μ₀ − M.',
    math: '\\vec H \\equiv \\frac{\\vec B}{\\mu_0} - \\vec M \\quad\\Longrightarrow\\quad \\nabla\\times\\vec H = \\vec J_f + \\frac{\\partial\\vec D}{\\partial t}',
    note: 'Only free current and the displacement current of D appear — bound and polarization currents are absorbed into the definition of H.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why is D defined as ε₀E + P rather than just used as E?',
    options: ['It has no physical meaning, just convenience', 'It lets Gauss\'s law be written using only free charge, ignoring bound charge details', 'D and E are always equal', 'D replaces the need for ε₀'],
    correct: 1,
    explain: 'By absorbing the bound-charge term −∇·P into D, ∇·D = ρ_f depends only on free charge — which is usually what you control or measure directly.',
  },
  {
    q: 'What current sources ∇×H = J_f + ∂D/∂t?',
    options: ['Only the polarization current', 'Only the magnetization current', 'Only the free current and the displacement current of D', 'The bound surface current alone'],
    correct: 2,
    explain: 'By defining H = B/μ₀ − M, both the bound current ∇×M and the polarization current ∂P/∂t get absorbed, leaving only J_f and ∂D/∂t on the right.',
  },
  {
    q: 'What is the essential parallel between the Gauss and Ampere-Maxwell derivations in matter?',
    options: ['Both use the same equation twice', 'Both extract a "free-source-only" field by defining a new auxiliary field that absorbs the material response', 'There is no meaningful parallel', 'Both ignore time dependence'],
    correct: 1,
    explain: 'D absorbs P so Gauss\'s law needs only ρ_f; H absorbs M (and the ∂P/∂t term) so Ampere\'s law needs only J_f — the same organizing idea applied to each equation.',
  },
];

export default function MacroscopicEquations() {
  return (
    <TopicShell chapterLabel="CH. 07 — EM WAVE PROPAGATION" title="Derivation of the Macroscopic Equations (D and H)" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Inside real materials, Maxwell's equations in terms of E and B alone require tracking every bound and
          polarization current explicitly. Defining two auxiliary fields — the electric displacement D and the
          magnetic field strength H — folds all of that material response into the field definitions themselves,
          leaving equations that reference only the free charges and currents you actually control.
        </Concept>
      </Section>

      <Section label="Result: Maxwell's equations in matter" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\nabla \\cdot \\vec D = \\rho_f' },
            { math: '\\nabla \\cdot \\vec B = 0' },
            { math: '\\nabla \\times \\vec E = -\\frac{\\partial \\vec B}{\\partial t}' },
            { math: '\\nabla \\times \\vec H = \\vec J_f + \\frac{\\partial \\vec D}{\\partial t}' },
          ]}
        />
      </Section>

      <Section label="Derivation — Gauss's law: ∇·D = ρ_f" accent={accent}>
        <Derivation steps={gaussSteps} accent={accent} />
      </Section>

      <Section label="Derivation — Ampere-Maxwell law: ∇×H = J_f + ∂D/∂t" accent={accent}>
        <Derivation steps={ampereSteps} accent={accent} />
      </Section>

      <Section label="Structure at a glance" accent={accent}>
        <VizFrame height={200}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--field)', marginBottom: 6 }}>D = ε₀E + P</div>
              <div style={{ color: 'var(--text-dim)', fontSize: 11 }}>absorbs bound charge ρ_b</div>
            </div>
            <div style={{ color: 'var(--text-dim)' }}>↔</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--signal)', marginBottom: 6 }}>H = B/μ₀ − M</div>
              <div style={{ color: 'var(--text-dim)', fontSize: 11 }}>absorbs bound + pol. current</div>
            </div>
          </div>
        </VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
