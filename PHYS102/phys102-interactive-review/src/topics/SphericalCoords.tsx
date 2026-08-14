import { TopicShell, Section, Concept, FormulaBlock, VizFrame } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import SphericalCoordsViz from './SphericalCoordsViz';
import type { QuizQuestion } from '../data/types';

const accent = '#7b8299';

const quiz: QuizQuestion[] = [
  {
    q: 'In spherical coordinates, what does the polar angle θ measure?',
    options: ['Angle around the equator', 'Angle from the positive z-axis down to the point', 'Distance from the origin', 'Angle in the xy-plane'],
    correct: 1,
    explain: 'θ is measured from the z-axis (θ=0 points straight up the z-axis, θ=90° lies in the xy-plane, θ=180° points straight down) — this is the standard physics convention.',
  },
  {
    q: 'What does the volume element dτ = r²sinθ dr dθ dφ account for?',
    options: ['Nothing — volume elements are always just dx dy dz', 'The fact that a small angular step sweeps out a larger physical area farther from the origin, so the r² and sinθ factors are needed to get true volume', 'A correction only needed near the poles', 'It only applies to spheres, not general volumes'],
    correct: 1,
    explain: 'Unlike flat Cartesian coordinates, equal angular increments in spherical coordinates correspond to different actual distances depending on r and θ — the r²sinθ Jacobian factor corrects for this.',
  },
  {
    q: 'Why is spherical symmetry (like a point charge\'s field) so much easier to handle in spherical coordinates than Cartesian?',
    options: ['It isn\'t actually easier', 'The field and geometry depend only on r, letting many terms simplify or vanish entirely — Cartesian coordinates mix all three variables together unnecessarily', 'Spherical coordinates only work for spheres', 'Cartesian coordinates cannot represent spheres at all'],
    correct: 1,
    explain: 'When a problem has spherical symmetry, expressing everything in spherical coordinates lets quantities depend on r alone, dramatically simplifying integrals and derivatives compared to forcing Cartesian x,y,z.',
  },
];

export default function SphericalCoords() {
  return (
    <TopicShell chapterLabel="CH. 01 — VECTOR ANALYSIS" title="Spherical Coordinates" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          Spherical coordinates (r, θ, φ) describe a point by its distance from the origin and two angles —
          polar (from the z-axis) and azimuthal (around the z-axis). This system is the natural choice whenever
          a problem has spherical symmetry, like the field of a point charge or a uniformly charged sphere.
        </Concept>
      </Section>

      <Section label="Formulas" accent={accent}>
        <FormulaBlock
          formulas={[
            { math: 'x = r\\sin\\theta\\cos\\phi,\\quad y = r\\sin\\theta\\sin\\phi,\\quad z = r\\cos\\theta', caption: 'conversion to Cartesian' },
            { math: 'd\\vec l = dr\\,\\hat r + r\\,d\\theta\\,\\hat\\theta + r\\sin\\theta\\,d\\phi\\,\\hat\\phi', caption: 'line element' },
            { math: 'd\\tau = r^2\\sin\\theta\\, dr\\, d\\theta\\, d\\phi', caption: 'volume element' },
          ]}
        />
      </Section>

      <Section label="Interactive: sweep θ and φ" accent={accent}>
        <VizFrame height={300}><SphericalCoordsViz /></VizFrame>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
