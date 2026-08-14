import SlideDeck from '../components/SlideDeck';
import { Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Derivation from '../components/Derivation';
import Quiz from '../components/Quiz';
import RamanLevelViz from './RamanLevelViz';
import RamanSetupViz from './RamanSetupViz';
import RamanSpectrumViz from './RamanSpectrumViz';
import type { DerivationStep, QuizQuestion } from '../data/types';

const accent = '#59c98e';

const stokesSteps: DerivationStep[] = [
  { label: 'Initial state E₀. Absorption to a short-lived virtual state E₁′ by the incident photon.', math: "E_1' - E_0 = h\\nu_0" },
  { label: 'De-excitation from the virtual state down to the real level E₁, emitting a scattered photon of frequency ν_s.', math: "E_1' - E_1 = h\\nu_s" },
  { label: 'Subtract the first equation from the second to eliminate the virtual-state energy.', math: 'E_0 - E_1 = h\\nu_s - h\\nu_0' },
  { label: 'Rearrange, using ν₁ = (E₁−E₀)/h as the molecule\'s characteristic vibrational frequency.', math: '\\nu_s = \\nu_0 - \\nu_1', note: 'Scattered photon has lower frequency than the incident one — energy was left behind in the molecule.' },
];

const antiStokesSteps: DerivationStep[] = [
  { label: 'Initial state is now the already-excited E₁. Absorption to virtual state E₂′.', math: "E_2' - E_1 = h\\nu_0" },
  { label: 'De-excitation all the way down to the ground level E₀, emitting a scattered photon of frequency ν_a.', math: "E_2' - E_0 = h\\nu_a" },
  { label: 'Subtract the first equation from the second.', math: 'E_1 - E_0 = h\\nu_a - h\\nu_0' },
  { label: 'Rearrange to find the anti-Stokes frequency.', math: '\\nu_a = \\nu_0 + \\nu_1', note: 'Scattered photon gains energy from the molecule\'s pre-existing vibrational excitation.' },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What is a "virtual state" in the Raman scattering picture?',
    options: ['A real, long-lived excited electronic state', 'A short-lived, non-stationary state the molecule passes through during scattering — not a true energy eigenstate', 'The same thing as the ground state', 'A state that never gets populated'],
    correct: 1,
    explain: 'The virtual state is not a stationary quantum state of the molecule; it exists only fleetingly during the scattering process, unlike a true absorption to a real excited state.',
  },
  {
    q: 'Why are Stokes lines more intense than anti-Stokes lines?',
    options: ['Stokes photons travel faster', 'At thermal equilibrium, the ground state E₀ is more populated than the excited state E₁, so more molecules start Stokes scattering than anti-Stokes', 'Anti-Stokes scattering is forbidden by selection rules', 'It is purely a detector artifact'],
    correct: 1,
    explain: 'Anti-Stokes scattering requires starting in the already-excited E₁, which by Boltzmann statistics is less populated than E₀ at ordinary temperatures — so fewer anti-Stokes events occur.',
  },
  {
    q: 'In the classic experimental setup, what is the role of the filter F?',
    options: ['Cools the sample', 'Isolates a single monochromatic line (λ=4358 Å) from the mercury lamp before it reaches the sample', 'Focuses the scattered light onto the spectrograph', 'Absorbs the Raman-scattered light'],
    correct: 1,
    explain: 'The Raman effect requires a well-defined incident frequency ν₀; the filter selects out one clean spectral line from the broader mercury arc emission.',
  },
];

export default function RamanEffect() {
  const slides = [
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        CH. 08 — ATOMS &amp; MOLECULES · SLIDE 1/6
      </div>
      <h2 style={{ fontSize: 26, marginBottom: 18 }}>The Raman Effect</h2>
      <Concept>
        The Raman effect is inelastic scattering of monochromatic light by molecules. Most scattered photons come
        back at the same frequency they arrived (Rayleigh scattering), but a small fraction exchange energy with
        molecular vibrations — shifting frequency up or down. That shift directly reveals the molecule's
        vibrational spectrum.
      </Concept>
    </div>,
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 2/6 — MECHANISM &amp; ENERGY DIAGRAM
      </div>
      <FormulaBlock formulas={[
        { math: '\\text{Rayleigh: } \\nu_s = \\nu_0 \\qquad \\text{Stokes: } \\nu_s = \\nu_0-\\nu_1 \\qquad \\text{Anti-Stokes: } \\nu_a = \\nu_0+\\nu_1' },
      ]} />
      <div style={{ marginTop: 18 }}>
        <VizFrame height={380}><RamanLevelViz /></VizFrame>
      </div>
    </div>,
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 3/6 — QUANTUM DERIVATION: STOKES LINE
      </div>
      <Derivation steps={stokesSteps} accent={accent} />
    </div>,
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 4/6 — QUANTUM DERIVATION: ANTI-STOKES LINE
      </div>
      <Derivation steps={antiStokesSteps} accent={accent} />
    </div>,
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 5/6 — EXPERIMENTAL SETUP &amp; SPECTRUM
      </div>
      <VizFrame height={280}><RamanSetupViz /></VizFrame>
      <div style={{ marginTop: 18 }}>
        <VizFrame height={300}><RamanSpectrumViz /></VizFrame>
      </div>
    </div>,
    <div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 1.5, color: accent, marginBottom: 10 }}>
        SLIDE 6/6 — SELF-CHECK
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
