import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import AtomicSpectraViz from './AtomicSpectraViz';
import type { QuizQuestion } from '../data/types';

const accent = '#59c98e';

const quiz: QuizQuestion[] = [
  {
    q: 'Which hydrogen series falls in the visible range and gave the first observed spectral lines?',
    options: ['Lyman', 'Balmer', 'Paschen', 'All of them equally'],
    correct: 1,
    explain: 'Balmer series transitions (n_l=2) fall between roughly 400-700 nm, the visible range — this is why they were the first hydrogen lines historically identified, including in the solar spectrum.',
  },
  {
    q: 'In the Rydberg formula, what does n_l represent?',
    options: ['The upper (final) energy level', 'The lower energy level the electron falls to (or starts from, in absorption)', 'The atomic number', 'A universal constant'],
    correct: 1,
    explain: 'n_l is the lower principal quantum number defining which series you\'re in — Lyman has n_l=1, Balmer n_l=2, Paschen n_l=3, and so on.',
  },
  {
    q: 'Why does the Lyman series fall in the ultraviolet while Paschen falls in the infrared?',
    options: ['It\'s arbitrary labeling with no physical basis', 'Transitions ending on n_l=1 (Lyman) involve much larger energy gaps than those ending on n_l=3 (Paschen), and larger energy means shorter (more UV) wavelength', 'Lyman only occurs in heavier atoms', 'The two series are actually identical'],
    correct: 1,
    explain: 'Energy level spacing shrinks as n increases, so transitions to the ground state (n_l=1) release far more energy (shorter λ, UV) than transitions to n_l=3 (less energy, longer λ, IR).',
  },
];

export default function AtomicSpectra() {
  return (
    <TopicShell chapterLabel="CH. 08 — ATOMS & MOLECULES" title="Atomic Spectra & the Rydberg Formula" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          When an electron in a hydrogen-like atom jumps between energy levels, it emits or absorbs a photon of a
          very specific wavelength. The Rydberg formula predicts that wavelength exactly, and grouping
          transitions by their final (or initial) level sorts them into named series — each landing in a
          different part of the electromagnetic spectrum.
        </Concept>
      </Section>

      <Section label="Formula" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: '\\frac{1}{\\lambda} = RZ^2\\left(\\frac{1}{n_l^2} - \\frac{1}{n_u^2}\\right)', caption: 'Rydberg formula, R ≈ 1.097×10⁷ m⁻¹' },
          ]}
        />
      </Section>

      <Section label="Interactive: n-level diagram & spectral series" accent={accent}>
        <VizFrame height={380}><AtomicSpectraViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
