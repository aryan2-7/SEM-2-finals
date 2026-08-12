import type { ChapterMeta, TopicMeta } from './types';

export const chapters: ChapterMeta[] = [
  { id: 'ch1', number: 1, title: 'Vector Analysis', color: '#7b8299' },
  { id: 'ch2', number: 2, title: 'Electrostatic Field', color: '#5b8def' },
  { id: 'ch3', number: 3, title: 'Electrostatic Field in Matter', color: '#5b8def' },
  { id: 'ch4', number: 4, title: 'Magnetostatics', color: '#ef5b6f' },
  { id: 'ch5', number: 5, title: 'Magnetostatic Field in Matter', color: '#ef5b6f' },
  { id: 'ch6', number: 6, title: 'Electromagnetic Induction', color: '#f2b544' },
  { id: 'ch7', number: 7, title: 'EM Wave Propagation', color: '#f2b544' },
  { id: 'ch8', number: 8, title: 'Atoms & Molecules', color: '#59c98e' },
  { id: 'ch9', number: 9, title: 'Nuclear Physics', color: '#59c98e' },
];

// Every topic in the curriculum gets a nav entry. `featured` topics are fully built;
// the rest render a clean "not yet built" placeholder rather than being silently absent.
export const topics: TopicMeta[] = [
  // Ch1
  { id: 'vectors-basics', chapterId: 'ch1', title: 'Scalars, Vectors & Notation', featured: false },
  { id: 'vector-addition', chapterId: 'ch1', title: 'Addition & Scalar Multiplication', featured: false },
  { id: 'dot-cross', chapterId: 'ch1', title: 'Dot & Cross Product', featured: false },
  { id: 'component-form', chapterId: 'ch1', title: 'Component Form & Calculator', featured: false },
  { id: 'triple-products', chapterId: 'ch1', title: 'Triple Products', featured: false },
  { id: 'del-operator', chapterId: 'ch1', title: 'Gradient, Divergence, Curl', featured: true },
  { id: 'product-rules', chapterId: 'ch1', title: 'Product Rules', featured: false },
  { id: 'fundamental-theorems', chapterId: 'ch1', title: 'Integral Theorems', featured: false },
  { id: 'spherical-coords', chapterId: 'ch1', title: 'Spherical Coordinates', featured: false },
  { id: 'helmholtz', chapterId: 'ch1', title: 'Null Identities & Helmholtz', featured: false },

  // Ch2
  { id: 'charge-properties', chapterId: 'ch2', title: 'Charge Properties', featured: false },
  { id: 'coulomb-law', chapterId: 'ch2', title: "Coulomb's Law & Superposition", featured: true },
  { id: 'e-field-point', chapterId: 'ch2', title: 'Field of a Point Charge', featured: false },
  { id: 'continuous-dist', chapterId: 'ch2', title: 'Continuous Distributions', featured: false },
  { id: 'standard-derivations', chapterId: 'ch2', title: 'Standard E-field Derivations', featured: false },
  { id: 'field-lines', chapterId: 'ch2', title: 'Field Lines', featured: false },
  { id: 'gauss-law', chapterId: 'ch2', title: "Gauss's Law", featured: true },
  { id: 'potential', chapterId: 'ch2', title: 'Electric Potential', featured: false },
  { id: 'work-energy', chapterId: 'ch2', title: 'Work & Energy', featured: false },
  { id: 'conductors', chapterId: 'ch2', title: 'Conductors', featured: false },

  // Ch3
  { id: 'dipole-moment', chapterId: 'ch3', title: 'Electric Dipole & Moment', featured: false },
  { id: 'dipole-field', chapterId: 'ch3', title: 'Potential & Field of a Short Dipole', featured: true },
  { id: 'dipole-external', chapterId: 'ch3', title: 'Dipole in an External Field', featured: true },
  { id: 'polarizability', chapterId: 'ch3', title: 'Polarizability Model', featured: false },
  { id: 'polarization', chapterId: 'ch3', title: 'Polarization & Bound Charge', featured: true },
  { id: 'displacement-d', chapterId: 'ch3', title: "Gauss's Law in Dielectrics", featured: false },
  { id: 'linear-dielectrics', chapterId: 'ch3', title: 'Linear Dielectrics', featured: false },
  { id: 'clausius-mossotti', chapterId: 'ch3', title: 'Clausius–Mossotti Equation', featured: false },

  // Ch4
  { id: 'lorentz-force', chapterId: 'ch4', title: 'Lorentz Force', featured: false },
  { id: 'cyclotron-cycloid', chapterId: 'ch4', title: 'Cyclotron & Cycloid Motion', featured: false },
  { id: 'flux', chapterId: 'ch4', title: 'Magnetic Flux', featured: false },
  { id: 'current-densities', chapterId: 'ch4', title: 'Current Densities & Continuity', featured: false },
  { id: 'forces-currents', chapterId: 'ch4', title: 'Forces on Currents', featured: false },
  { id: 'biot-savart', chapterId: 'ch4', title: 'Biot–Savart Law', featured: true },
  { id: 'ampere-law', chapterId: 'ch4', title: "Ampere's Law", featured: false },
  { id: 'vector-potential', chapterId: 'ch4', title: 'Vector Potential A', featured: false },

  // Ch5
  { id: 'magnetic-dipole', chapterId: 'ch5', title: 'Magnetic Dipole Moment', featured: false },
  { id: 'bound-current', chapterId: 'ch5', title: 'Bound Current — Physical Interpretation', featured: true },
  { id: 'h-field', chapterId: 'ch5', title: "Ampere's Law in Materials (H)", featured: false },
  { id: 'susceptibility', chapterId: 'ch5', title: 'Susceptibility & Material Types', featured: false },
  { id: 'domain-theory', chapterId: 'ch5', title: 'Domain Theory', featured: false },
  { id: 'hysteresis-loop', chapterId: 'ch5', title: 'Hysteresis Loop', featured: true },
  { id: 'hysteresis-loss', chapterId: 'ch5', title: 'Hysteresis Loss', featured: true },

  // Ch6
  { id: 'motional-emf', chapterId: 'ch6', title: 'Motional EMF', featured: false },
  { id: 'faraday-law', chapterId: 'ch6', title: "Faraday's Law & Lenz's Law", featured: true },
  { id: 'lenz-law', chapterId: 'ch6', title: "Lenz's Law", featured: false },
  { id: 'self-induction', chapterId: 'ch6', title: 'Self-Induction & RL Circuits', featured: true },
  { id: 'mutual-induction', chapterId: 'ch6', title: 'Mutual Induction', featured: false },
  { id: 'magnetic-energy', chapterId: 'ch6', title: 'Energy in Magnetic Field', featured: false },

  // Ch7
  { id: 'displacement-current', chapterId: 'ch7', title: 'Displacement Current', featured: true },
  { id: 'maxwell-vacuum', chapterId: 'ch7', title: "Maxwell's Equations (Vacuum)", featured: false },
  { id: 'macroscopic-eqs', chapterId: 'ch7', title: 'Macroscopic Equations (D, H)', featured: true },
  { id: 'poynting', chapterId: 'ch7', title: "Poynting's Theorem", featured: true },
  { id: 'wave-equation', chapterId: 'ch7', title: 'EM Wave Equation & Speed c', featured: true },

  // Ch8
  { id: 'atomic-spectra', chapterId: 'ch8', title: 'Atomic Spectra & Rydberg', featured: false },
  { id: 'molecular-transitions', chapterId: 'ch8', title: 'Types of Molecular Transitions', featured: true },
  { id: 'raman-effect', chapterId: 'ch8', title: 'Raman Effect', featured: true },
  { id: 'superconductivity', chapterId: 'ch8', title: 'Superconductivity', featured: false },

  // Ch9
  { id: 'binding-energy', chapterId: 'ch9', title: 'Mass Defect & Binding Energy', featured: false },
  { id: 'radioactivity', chapterId: 'ch9', title: 'Radioactivity & Half-Life', featured: true },
  { id: 'reaction-types', chapterId: 'ch9', title: 'Types of Nuclear Reactions', featured: false },
  { id: 'q-value', chapterId: 'ch9', title: 'Q-Value', featured: false },
  { id: 'threshold-energy', chapterId: 'ch9', title: 'Threshold Energy', featured: true },
  { id: 'fission-fusion', chapterId: 'ch9', title: 'Fission & Fusion', featured: false },
];

export const featuredOrder = topics.filter(t => t.featured).map(t => t.id);
