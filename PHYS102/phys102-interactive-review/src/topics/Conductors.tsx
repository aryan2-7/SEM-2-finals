import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import ConductorsViz from './ConductorsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#5b8def';

const properties = [
  { title: 'E = 0 inside', desc: 'External fields induce surface charge that completely cancels the field in the interior.' },
  { title: 'ρ = 0 inside', desc: 'By Gauss\'s law, zero field means zero enclosed volume charge density everywhere inside.' },
  { title: 'Charge resides on the surface', desc: 'Mutual Coulomb repulsion pushes any excess charge to the outer boundary.' },
  { title: 'Conductors are equipotentials', desc: 'Since E=0 inside, no work is needed to move charge around inside or on the surface — V is constant throughout.' },
  { title: 'E is normal to the surface (outside)', desc: 'Any tangential component would drive surface charge to keep moving, violating electrostatic equilibrium.' },
];

const quiz: QuizQuestion[] = [
  {
    q: 'Why must E=0 everywhere inside a conductor in electrostatic equilibrium?',
    options: ['Conductors block all fields by definition', 'Free charges rearrange on the surface until their own field exactly cancels any field that would otherwise exist inside', 'It is an approximation, not exactly true', 'Only true for spherical conductors'],
    correct: 1,
    explain: 'If E were nonzero inside, free charges would keep accelerating — equilibrium (electrostatics) requires that charge redistribution continue until the interior field is exactly zero.',
  },
  {
    q: 'Why does excess charge on a conductor end up only on the surface?',
    options: ['Gravity pulls it there', 'Since E=0 inside (property 1) and ∇·E=ρ/ε₀, any interior charge density must be zero, forcing all net charge to the boundary', 'It is placed there manually', 'Only true for charged conductors, not neutral ones'],
    correct: 1,
    explain: 'This follows directly and necessarily from E=0 inside via Gauss\'s law — it is not a separate assumption but a consequence of the first property.',
  },
  {
    q: 'Why must E be exactly perpendicular to a conductor\'s surface (just outside)?',
    options: ['It doesn\'t have to be — E can point any direction', 'A tangential component of E would exert a force along the surface, driving further charge motion — inconsistent with static equilibrium', 'Only true for flat conductors', 'This property only applies inside the conductor'],
    correct: 1,
    explain: 'In equilibrium, no further charge motion can be occurring on the surface, which requires zero tangential field — leaving only the normal component.',
  },
];

export default function Conductors() {
  return (
    <TopicShell chapterLabel="CH. 02 — ELECTROSTATIC FIELD" title="Conductors" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A perfect conductor has an essentially unlimited supply of free charge carriers. In electrostatic
          equilibrium, this leads to five interlocking properties — each one a direct logical consequence of the
          others, all traceable back to the simple requirement that charges stop moving once equilibrium is reached.
        </Concept>
      </Section>

      <Section label="The five properties" accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {properties.map((p, i) => (
            <div key={i} style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-h)', marginBottom: 6 }}>{i + 1}. {p.title}</div>
              <p style={{ fontSize: 12, color: 'var(--text-dim)' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock formulas={[
          { math: 'V(a) - V(b) = -\\int_a^b \\vec E\\cdot d\\vec l = 0 \\implies V(a)=V(b)', caption: 'equipotential property, since E=0 inside' },
        ]} />
      </Section>

      <Section label="Interactive: field lines around a conductor" accent={accent}>
        <VizFrame height={280}><ConductorsViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
