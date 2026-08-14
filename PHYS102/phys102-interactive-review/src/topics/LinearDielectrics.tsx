import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import LinearDielectricsViz from './LinearDielectricsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#5b8def';

const quiz: QuizQuestion[] = [
  {
    q: 'In a linear dielectric, how is P related to E?',
    options: ['P is independent of E', 'P = ε₀χ_eE — directly proportional to the local field', 'P = E²', 'P only depends on ρ_f'],
    correct: 1,
    explain: 'Linear dielectrics are defined by exactly this proportionality — the induced polarization scales linearly with the applied field, with χ_e as the proportionality constant.',
  },
  {
    q: 'What is the relationship between the dielectric constant K and susceptibility χ_e?',
    options: ['K = χ_e', 'K = 1 + χ_e', 'K = χ_e − 1', 'They are unrelated'],
    correct: 1,
    explain: 'K = ε/ε₀ = 1 + χ_e — a K of 1 means no polarization response (vacuum), while larger K means stronger dielectric response.',
  },
  {
    q: 'For a charged metal sphere surrounded by a linear dielectric shell, how does E inside the dielectric compare to E in vacuum for the same charge?',
    options: ['Identical', 'Reduced by a factor of K, since the dielectric partially screens the field', 'Increased by a factor of K', 'E is always zero in a dielectric'],
    correct: 1,
    explain: 'E = D/ε = D/(Kε₀) — for the same D (which depends only on free charge), a larger K directly means a smaller E, reflecting the screening effect of the induced bound charge.',
  },
];

export default function LinearDielectrics() {
  return (
    <TopicShell chapterLabel="CH. 03 — ELECTROSTATIC FIELD IN MATTER" title="Linear Dielectrics" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Most common dielectric materials respond to an applied field in direct proportion — this "linear"
          behavior is captured by a single material constant, the electric susceptibility χ_e, which directly
          determines the permittivity ε and dielectric constant K.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\vec P = \\epsilon_0\\chi_e\\vec E', caption: 'linear polarization response' },
            { math: '\\vec D = \\epsilon_0(1+\\chi_e)\\vec E = \\epsilon\\vec E, \\qquad K = \\frac{\\epsilon}{\\epsilon_0} = 1+\\chi_e', caption: 'permittivity and dielectric constant' },
          ]}
        />
      </Section>

      <Section label="Interactive: metal sphere in a dielectric shell" accent={accent}>
        <VizFrame height={260}><LinearDielectricsViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
