# PHYS102 Interactive Review

An interactive study app covering high-yield derivations from the PHYS102 course notes
(Electrostatics, Magnetostatics, EM Induction, EM Waves, Atoms & Molecules, Nuclear Physics).

## What's fully built

- **Ch.1** — The Del Operator (gradient / divergence / curl)
- **Ch.2** — Coulomb's Law & Superposition · Gauss's Law
- **Ch.3** — Short Dipole Field · Dipole in an External Field · Polarization & Bound Charge
- **Ch.4** — Biot–Savart Law
- **Ch.5** — Bound Current & Physical Interpretation · Hysteresis Loop · Hysteresis Loss
- **Ch.6** — Faraday's Law & Lenz's Law · Self-Induction & RL Circuits
- **Ch.7** — Displacement Current · Macroscopic Maxwell Equations (D, H) · Poynting's Theorem ·
  EM Wave Equation & Speed of Light
- **Ch.8** — Types of Molecular Transitions (slide deck) · Raman Effect (slide deck)
- **Ch.9** — Threshold Energy · Radioactivity & Half-Life

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
