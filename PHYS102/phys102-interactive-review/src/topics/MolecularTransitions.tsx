import SlideDeck from '../components/SlideDeck';
import { Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import MolecularTransitionsViz from './MolecularTransitionsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#59c98e';

const quiz: QuizQuestion[] = [
  {
    q: 'Why do electronic transitions appear as near-vertical lines on the potential-energy diagram?',
    options: ['Because they happen slowly', 'The Franck-Condon principle: internuclear separation stays virtually constant during the rapid electronic jump', 'Because nuclei move faster than electrons', 'It is just an artistic convention'],
    correct: 1,
    explain: 'Electronic transitions happen much faster than nuclei can physically move, so on the diagram the transition looks vertical — no change in internuclear distance during the jump.',
  },
  {
    q: 'Rotational transitions fall in which spectral region?',
    options: ['UV', 'Infrared', 'Far-infrared / microwave', 'X-ray'],
    correct: 2,
    explain: 'Rotational energy level spacings are the smallest of the three types, corresponding to the lowest photon energies — far-infrared and microwave.',
  },
  {
    q: 'Which transition type involves changing electronic state entirely?',
    options: ['Rotational', 'Vibrational', 'Electronic', 'None of these'],
    correct: 2,
    explain: 'Electronic transitions move the molecule between different electronic energy curves altogether — the largest energy transitions, in the optical/UV range.',
  },
];

export default function MolecularTransitions() {
  const slides = [
    <div key="intro">
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        CH. 08 — ATOMS &amp; MOLECULES · SLIDE 1/4
      </div>
      <h2 style={{ fontSize: 26, marginBottom: 18 }}>Types of Molecular Transitions</h2>
      <Concept>
        A molecule's total energy is built from three nested layers: electronic (largest spacing), vibrational
        (medium), and rotational (smallest). Each layer of transition shows up in a different part of the
        electromagnetic spectrum.
      </Concept>
    </div>,
    <div key="types">
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 2/4 — THE THREE TYPES
      </div>
      <FormulaBlock formulas={[
        { math: '\\text{Electronic: optical/UV} \\quad|\\quad \\text{Vibrational: IR} \\quad|\\quad \\text{Rotational: far-IR/microwave}' },
      ]} />
      <p style={{ marginTop: 16, fontSize: 13.5, color: 'var(--text-dim)' }}>
        Electronic transitions occur between different electronic energy states — represented by near-vertical
        lines on the potential-energy curve (Franck-Condon principle) since the nuclei barely move during the
        rapid jump. Vibrational transitions happen between vibrational levels within the same electronic state.
        Rotational transitions occur between rotational levels within the same vibrational state.
      </p>
    </div>,
    <div key="diagram">
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 3/4 — INTERACTIVE DIAGRAM
      </div>
      <VizFrame height={400}>
        <MolecularTransitionsViz />
      </VizFrame>
    </div>,
    <div key="quiz">
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 4/4 — SELF-CHECK
      </div>
      <Quiz questions={quiz} accent={accent} />
    </div>,
  ];

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 32px 96px' }}>
      <SlideDeck slides={slides} />
    </div>
  );
}
