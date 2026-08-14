import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import FaradayLenzViz from './FaradayLenzViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#f2b544';

const steps: DerivationStep[] = [
  {
    label: 'For a rectangular loop of width h, with a length s still inside a uniform field B, moving at velocity v: charges inside the conductor feel a magnetic force per unit charge.',
    math: '\\vec f_{mag} = \\vec v \\times \\vec B',
  },
  {
    label: 'Only the leading segment ab (still inside the field) contributes to work — the other segments either feel zero force (outside the field) or a force perpendicular to their length.',
    math: '\\mathcal{E} = \\oint \\vec f_{mag}\\cdot d\\vec l = \\int_a^b \\vec f_{mag}\\cdot d\\vec l = vBh',
  },
  {
    label: 'The flux linked with the loop is Φ = Bsh. As the loop exits, s decreases with time.',
    math: '\\frac{d\\Phi}{dt} = Bh\\frac{ds}{dt} = -vBh',
  },
  {
    label: 'Comparing the induced EMF to the rate of flux change gives the flux rule — and this generalizes (via a ribbon-sweep argument) to any loop shape moving through any static field.',
    math: '\\mathcal{E} = -\\frac{d\\Phi}{dt}',
  },
  {
    label: 'Applying Stokes\' theorem to the general EMF integral converts the flux rule into its local, differential form.',
    math: '\\oint_C \\vec E\\cdot d\\vec l = -\\frac{d}{dt}\\int_S \\vec B\\cdot d\\vec a \\quad\\Longrightarrow\\quad \\nabla\\times\\vec E = -\\frac{\\partial \\vec B}{\\partial t}',
  },
];

const quiz: QuizQuestion[] = [
  {
    q: 'In the sliding-loop derivation, why do the sides ad and bc contribute zero net work?',
    options: ['They carry no current', 'The magnetic force there is perpendicular to the segment direction (f·dl = 0)', 'They are outside the field', 'They are infinitely short'],
    correct: 1,
    explain: 'On segments ad and bc, v×B points perpendicular to the wire\'s own length direction, so the dot product with dl vanishes — no work contribution from those sides.',
  },
  {
    q: 'Lenz\'s law states that the induced current...',
    options: ['Always flows clockwise', 'Flows in whatever direction opposes the change in flux that caused it', 'Has no particular direction', 'Only exists in superconductors'],
    correct: 1,
    explain: 'This is Lenz\'s law exactly — the induced current creates its own magnetic field that opposes the change (not the flux itself, the change), which is also a direct statement of energy conservation.',
  },
  {
    q: 'The negative sign in ℰ = −dΦ/dt physically represents...',
    options: ['A mathematical convention with no physical meaning', 'Lenz\'s law — the induced EMF opposes the flux change that produces it', 'That EMF is always negative', 'An error in the derivation'],
    correct: 1,
    explain: 'The minus sign is the mathematical encoding of Lenz\'s law: whichever way flux is changing, the induced EMF drives a current that opposes that specific change.',
  },
];

export default function FaradayLenz() {
  return (
    <TopicShell chapterLabel="CH. 06 — ELECTROMAGNETIC INDUCTION" title="Faraday's Law & Lenz's Law" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          A changing magnetic flux through a loop induces an EMF — this is Faraday's law. Lenz's law fixes the
          sign: the induced current always flows in the direction that opposes the change causing it, which is
          exactly what energy conservation demands. Together they explain everything from generators to eddy-current
          braking.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\mathcal{E} = -\\frac{d\\Phi}{dt}', caption: "Faraday's flux rule (Lenz's law is the minus sign)" },
            { math: '\\nabla \\times \\vec E = -\\frac{\\partial \\vec B}{\\partial t}', caption: 'differential form' },
          ]}
        />
      </Section>

      <Section label="Step-by-step derivation (moving rectangular loop)" accent={accent}>
        <Derivation steps={steps} accent={accent} />
      </Section>

      <Section label="Interactive: loop exiting a field region" accent={accent}>
        <VizFrame height={340}><FaradayLenzViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
