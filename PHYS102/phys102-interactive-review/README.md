# PHYS102 Interactive Review

A complete interactive study app covering the full PHYS102 course: Vector Analysis, Electrostatics,
Magnetostatics, Fields in Matter, EM Induction, EM Waves, Atoms & Molecules, and Nuclear Physics.

## Status: all topics built

Every topic in the curriculum is now fully interactive — concept summary, KaTeX-rendered formulas, a
step-by-step derivation reveal (where applicable), a hand-built interactive visualization, and a self-check
quiz with instant feedback.

- **Ch.1 — Vector Analysis**: scalars/vectors & notation, addition & scalar multiplication, dot & cross
  product, component form & calculator, triple products, product rules, the del operator (gradient/
  divergence/curl), fundamental (integral) theorems, spherical coordinates, null identities & Helmholtz theorem
- **Ch.2 — Electrostatic Field**: charge properties, Coulomb's law & superposition, field of a point charge &
  path independence, continuous distributions, standard E-field derivations, field lines & flux, Gauss's law,
  electric potential, work & energy, conductors
- **Ch.3 — Electrostatic Field in Matter**: dipole & dipole moment, short-dipole field, dipole in an external
  field, polarizability model, polarization & bound charge, Gauss's law in dielectrics (D field), linear
  dielectrics, Clausius–Mossotti equation
- **Ch.4 — Magnetostatics**: Lorentz force, cyclotron & cycloid motion, magnetic flux, current densities &
  continuity, forces on currents, Biot–Savart law, Ampere's law, vector potential A
- **Ch.5 — Magnetostatic Field in Matter**: magnetic dipole moment, bound current & physical interpretation,
  Ampere's law in materials (H field), susceptibility & material types, domain theory, hysteresis loop,
  hysteresis loss
- **Ch.6 — Electromagnetic Induction**: motional EMF, Faraday's law & Lenz's law, self-induction & RL
  circuits, mutual induction, energy in the magnetic field
- **Ch.7 — EM Wave Propagation**: displacement current, Maxwell's equations (vacuum), macroscopic Maxwell
  equations (D, H), Poynting's theorem, EM wave equation & speed of light
- **Ch.8 — Atoms & Molecules**: atomic spectra & Rydberg formula, types of molecular transitions (slide deck),
  Raman effect (slide deck), superconductivity
- **Ch.9 — Nuclear Physics**: mass defect & binding energy, radioactivity & half-life, types of nuclear
  reactions, Q-value, threshold energy, fission & fusion

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. For a production build:

```bash
npm run build
npm run preview
```

## Deployment

This app deploys to GitHub Pages via `.github/workflows/deploy.yml` on pushes to the `Phys-Web` branch.
Note `vite.config.ts` sets `base: '/SEM-2-finals/'` to match the GitHub Pages subpath — update that if the
repo name changes.

## Stack

React + TypeScript + Vite, react-katex for math, hand-rolled SVG/Canvas for all visualizations.

## Extending

- Add a new topic: create a `src/topics/<Name>.tsx` using the `TopicShell`/`Section`/`Derivation`/`Quiz`
  building blocks in `src/components/`, then register it in `src/data/registry.ts` (set `featured: true`)
  and wire it into `featuredComponents` in `src/App.tsx`.
- To make one nav entry point at another topic's page (like Lenz's Law living on the Faraday's Law page),
  add an entry to `aliasRedirect` in `src/App.tsx` instead of building a duplicate page.
- The bundle is a single ~800KB chunk; consider code-splitting with dynamic `import()` per chapter if load
  time becomes a concern.
