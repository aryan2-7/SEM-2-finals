# PHYS102 Interactive Review

An interactive study app covering high-yield derivations from the PHYS102 course notes
(Electrostatics, Magnetostatics, EM Induction, EM Waves, Atoms & Molecules, Nuclear Physics).

## What's fully built

- **Ch.1** — Scalars/Vectors & Notation · Vector Addition & Scalar Multiplication · Dot & Cross Product ·
  Component Form & Calculator · Triple Products · Product Rules · The Del Operator (gradient / divergence / curl)
- **Ch.2** — Charge Properties · Coulomb's Law & Superposition · Field of a Point Charge & Path Independence ·
  Continuous Distributions · Standard E-Field Derivations · Field Lines & Flux · Gauss's Law · Electric Potential ·
  Work & Energy · Conductors
- **Ch.3** — Electric Dipole & Moment · Short Dipole Field · Dipole in an External Field · Polarizability Model ·
  Polarization & Bound Charge
- **Ch.4** — Lorentz Force · Magnetic Flux · Biot–Savart Law · Ampere's Law · Cyclotron & Cycloid Motion
- **Ch.5** — Magnetic Dipole Moment · Bound Current & Physical Interpretation · Hysteresis Loop · Hysteresis Loss
- **Ch.6** — Faraday's Law & Lenz's Law · Motional EMF · Self-Induction & RL Circuits · Mutual Induction
- **Ch.7** — Displacement Current · Macroscopic Maxwell Equations (D, H) · Poynting's Theorem ·
  EM Wave Equation & Speed of Light
- **Ch.8** — Atomic Spectra & Rydberg Formula · Types of Molecular Transitions (slide deck) ·
  Raman Effect (slide deck) · Superconductivity
- **Ch.9** — Mass Defect & Binding Energy · Q-Value · Threshold Energy · Radioactivity & Half-Life

Each topic has: a concept summary, KaTeX-rendered formulas, a step-by-step derivation you reveal one step
at a time, a hand-built interactive visualization, and a self-check quiz with instant feedback.

The full 9-chapter nav is present in the sidebar and home dashboard — non-built topics show a placeholder
rather than being silently missing. Progress (which featured topics you've visited) is saved to localStorage.

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
