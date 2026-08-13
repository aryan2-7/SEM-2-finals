import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import WorkEnergyViz from './WorkEnergyViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#5b8def';

const steps: DerivationStep[] = [
  {
    label: 'Assembling a system of point charges requires work against the mutual Coulomb repulsion of each pair.',
    math: 'W = \\frac{1}{4\\pi\\epsilon_0}\\sum_{i=1}^n\\sum_{j>i}^n\\frac{q_iq_j}{r_{ij}} = \\frac12\\sum_{i=1}^n q_iV(\\vec r_i)',
  },
  {
    label: 'For continuous distributions, replace the sum with an integral over the charge density and local potential.',
    math: 'W = \\frac12\\int_V \\rho V\\, d\\tau',
  },
  {
    label: 'Substituting Poisson\'s equation and integrating by parts converts this into a purely field-based expression, valid over all space.',
    math: 'W = \\frac{\\epsilon_0}{2}\\int_{\\text{all space}} E^2\\, d\\tau = \\int_{\\text{all space}} u_e\\, d\\tau',
    note: 'u_e = ε₀E²/2 is the electrostatic energy density — energy is stored in the field itself, not just "at" the charges.',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why does assembling a uniformly charged solid sphere require more energy than assembling the same charge as a thin shell?',
    options: ['It doesn\'t — they require the same energy', 'In the solid sphere, charge elements end up closer together on average, requiring more work against their mutual repulsion', 'Shells are always higher energy', 'Energy has nothing to do with geometry'],
    correct: 1,
    explain: 'Packing charge throughout a volume (rather than just on the surface) means more of it sits at smaller separations, and Coulomb repulsion grows as separation shrinks — hence the extra 6/5 factor.',
  },
  {
    q: 'The field-based energy formula W = (ε₀/2)∫E²dτ tells you that energy is stored...',
    options: ['Only at the location of the charges', 'Throughout all of space, wherever the field E is nonzero', 'Only inside conductors', 'Nowhere — energy is purely conceptual'],
    correct: 1,
    explain: 'This is a genuinely important conceptual shift: rather than thinking of energy as "belonging to" the charges, this formula shows it can be thought of as distributed throughout the field itself.',
  },
  {
    q: 'What is the electrostatic energy density u_e?',
    options: ['ε₀E', 'ε₀E²/2', 'E²/ε₀', 'ρV'],
    correct: 1,
    explain: 'u_e = ε₀E²/2 is the energy stored per unit volume wherever the field has magnitude E — integrating this over all space gives the total assembly energy.',
  },
];

export default function WorkEnergy() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Work & Energy in Electrostatics" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Building up any charge distribution from scratch requires doing work against Coulomb repulsion. That
          energy can be tracked two equivalent ways: by summing pairwise interactions between charges, or by
          integrating an energy density over the resulting electric field — the second view reveals that energy
          genuinely lives in the field itself.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'W = \\frac12\\int_V \\rho V\\, d\\tau', caption: 'assembly energy, charge-density form' },
            { math: 'W = \\frac{\\epsilon_0}{2}\\int_{\\text{all space}} E^2\\, d\\tau', caption: 'assembly energy, field form' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: shell vs solid sphere" accent={accent}>
        <VizFrame height={280}><WorkEnergyViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
