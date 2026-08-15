import { useEffect, lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import Sidebar from './components/Sidebar';
import Placeholder from './components/Placeholder';
import { chapters, topics } from './data/registry';

// Home is the landing page, so it loads eagerly. Every other topic is code-split
// with React.lazy so the initial bundle only ships the ~65 chapter pages on demand.
import Home from './topics/Home';
const DipoleField = lazy(() => import('./topics/DipoleField'));
const Polarization = lazy(() => import('./topics/Polarization'));
const BoundCurrent = lazy(() => import('./topics/BoundCurrent'));
const HysteresisLoop = lazy(() => import('./topics/HysteresisLoop'));
const HysteresisLoss = lazy(() => import('./topics/HysteresisLoss'));
const MacroscopicEquations = lazy(() => import('./topics/MacroscopicEquations'));
const Poynting = lazy(() => import('./topics/Poynting'));
const MolecularTransitions = lazy(() => import('./topics/MolecularTransitions'));
const RamanEffect = lazy(() => import('./topics/RamanEffect'));
const ThresholdEnergy = lazy(() => import('./topics/ThresholdEnergy'));
const DelOperator = lazy(() => import('./topics/DelOperator'));
const CoulombLaw = lazy(() => import('./topics/CoulombLaw'));
const GaussLaw = lazy(() => import('./topics/GaussLaw'));
const DipoleExternal = lazy(() => import('./topics/DipoleExternal'));
const BiotSavart = lazy(() => import('./topics/BiotSavart'));
const FaradayLenz = lazy(() => import('./topics/FaradayLenz'));
const SelfInduction = lazy(() => import('./topics/SelfInduction'));
const DisplacementCurrent = lazy(() => import('./topics/DisplacementCurrent'));
const WaveEquation = lazy(() => import('./topics/WaveEquation'));
const Radioactivity = lazy(() => import('./topics/Radioactivity'));
const DotCross = lazy(() => import('./topics/DotCross'));
const AmpereLaw = lazy(() => import('./topics/AmpereLaw'));
const CyclotronCycloid = lazy(() => import('./topics/CyclotronCycloid'));
const MagneticDipole = lazy(() => import('./topics/MagneticDipole'));
const MotionalEmf = lazy(() => import('./topics/MotionalEmf'));
const MutualInduction = lazy(() => import('./topics/MutualInduction'));
const AtomicSpectra = lazy(() => import('./topics/AtomicSpectra'));
const Superconductivity = lazy(() => import('./topics/Superconductivity'));
const BindingEnergy = lazy(() => import('./topics/BindingEnergy'));
const QValue = lazy(() => import('./topics/QValue'));
const VectorsBasics = lazy(() => import('./topics/VectorsBasics'));
const VectorAddition = lazy(() => import('./topics/VectorAddition'));
const ComponentForm = lazy(() => import('./topics/ComponentForm'));
const TripleProducts = lazy(() => import('./topics/TripleProducts'));
const ProductRules = lazy(() => import('./topics/ProductRules'));
const ChargeProperties = lazy(() => import('./topics/ChargeProperties'));
const EFieldPoint = lazy(() => import('./topics/EFieldPoint'));
const ContinuousDist = lazy(() => import('./topics/ContinuousDist'));
const StandardDerivations = lazy(() => import('./topics/StandardDerivations'));
const FieldLines = lazy(() => import('./topics/FieldLines'));
const Potential = lazy(() => import('./topics/Potential'));
const WorkEnergy = lazy(() => import('./topics/WorkEnergy'));
const Conductors = lazy(() => import('./topics/Conductors'));
const DipoleMoment = lazy(() => import('./topics/DipoleMoment'));
const Polarizability = lazy(() => import('./topics/Polarizability'));
const LorentzForce = lazy(() => import('./topics/LorentzForce'));
const Flux = lazy(() => import('./topics/Flux'));
const FundamentalTheorems = lazy(() => import('./topics/FundamentalTheorems'));
const SphericalCoords = lazy(() => import('./topics/SphericalCoords'));
const Helmholtz = lazy(() => import('./topics/Helmholtz'));
const DisplacementD = lazy(() => import('./topics/DisplacementD'));
const LinearDielectrics = lazy(() => import('./topics/LinearDielectrics'));
const ClausiusMossotti = lazy(() => import('./topics/ClausiusMossotti'));
const CurrentDensities = lazy(() => import('./topics/CurrentDensities'));
const ForcesCurrents = lazy(() => import('./topics/ForcesCurrents'));
const VectorPotential = lazy(() => import('./topics/VectorPotential'));
const HField = lazy(() => import('./topics/HField'));
const Susceptibility = lazy(() => import('./topics/Susceptibility'));
const DomainTheory = lazy(() => import('./topics/DomainTheory'));
const MagneticEnergy = lazy(() => import('./topics/MagneticEnergy'));
const MaxwellVacuum = lazy(() => import('./topics/MaxwellVacuum'));
const ReactionTypes = lazy(() => import('./topics/ReactionTypes'));
const FissionFusion = lazy(() => import('./topics/FissionFusion'));

const STORAGE_KEY = 'phys102-visited';

const featuredComponents: Record<string, React.ComponentType> = {
  'dipole-field': DipoleField,
  'polarization': Polarization,
  'bound-current': BoundCurrent,
  'hysteresis-loop': HysteresisLoop,
  'hysteresis-loss': HysteresisLoss,
  'macroscopic-eqs': MacroscopicEquations,
  'poynting': Poynting,
  'molecular-transitions': MolecularTransitions,
  'raman-effect': RamanEffect,
  'threshold-energy': ThresholdEnergy,
  'del-operator': DelOperator,
  'coulomb-law': CoulombLaw,
  'gauss-law': GaussLaw,
  'dipole-external': DipoleExternal,
  'biot-savart': BiotSavart,
  'faraday-law': FaradayLenz,
  'self-induction': SelfInduction,
  'displacement-current': DisplacementCurrent,
  'wave-equation': WaveEquation,
  'radioactivity': Radioactivity,
  'dot-cross': DotCross,
  'ampere-law': AmpereLaw,
  'cyclotron-cycloid': CyclotronCycloid,
  'magnetic-dipole': MagneticDipole,
  'motional-emf': MotionalEmf,
  'mutual-induction': MutualInduction,
  'atomic-spectra': AtomicSpectra,
  'superconductivity': Superconductivity,
  'binding-energy': BindingEnergy,
  'q-value': QValue,
  'vectors-basics': VectorsBasics,
  'vector-addition': VectorAddition,
  'component-form': ComponentForm,
  'triple-products': TripleProducts,
  'product-rules': ProductRules,
  'charge-properties': ChargeProperties,
  'e-field-point': EFieldPoint,
  'continuous-dist': ContinuousDist,
  'standard-derivations': StandardDerivations,
  'field-lines': FieldLines,
  'potential': Potential,
  'work-energy': WorkEnergy,
  'conductors': Conductors,
  'dipole-moment': DipoleMoment,
  'polarizability': Polarizability,
  'lorentz-force': LorentzForce,
  'flux': Flux,
  'fundamental-theorems': FundamentalTheorems,
  'spherical-coords': SphericalCoords,
  'helmholtz': Helmholtz,
  'displacement-d': DisplacementD,
  'linear-dielectrics': LinearDielectrics,
  'clausius-mossotti': ClausiusMossotti,
  'current-densities': CurrentDensities,
  'forces-currents': ForcesCurrents,
  'vector-potential': VectorPotential,
  'h-field': HField,
  'susceptibility': Susceptibility,
  'domain-theory': DomainTheory,
  'magnetic-energy': MagneticEnergy,
  'maxwell-vacuum': MaxwellVacuum,
  'reaction-types': ReactionTypes,
  'fission-fusion': FissionFusion,
};

// Nav entries that are really aliases of another featured topic's page
// (e.g. Lenz's law is taught on the same page as Faraday's law).
const aliasRedirect: Record<string, string> = {
  'lenz-law': 'faraday-law',
};

const MOBILE_BREAKPOINT = 860;

function AppShell() {
  const navigate = useNavigate();
  const { topicId } = useParams<{ topicId: string }>();
  const active = topicId ?? 'home';
  const [sidebarOpen, setSidebarOpen] = useState(
    () => typeof window === 'undefined' || window.innerWidth > MOBILE_BREAKPOINT,
  );
  const [visited, setVisited] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    const key = aliasRedirect[active] ?? active;
    if (key !== 'home' && !visited.has(key)) {
      const next = new Set(visited);
      next.add(key);
      setVisited(next);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function select(id: string) {
    const resolved = aliasRedirect[id] ?? id;
    navigate(resolved === 'home' ? '/' : `/${resolved}`);
    if (typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT) {
      setSidebarOpen(false);
    }
  }

  const resolvedActive = aliasRedirect[active] ?? active;
  const topicMeta = topics.find(t => t.id === resolvedActive) ?? topics.find(t => t.id === active);
  const chapterMeta = topicMeta ? chapters.find(c => c.id === topicMeta.chapterId) : null;

  let content;
  if (active === 'home') {
    content = <Home onSelect={select} visited={visited} />;
  } else if (featuredComponents[resolvedActive]) {
    const Comp = featuredComponents[resolvedActive];
    content = (
      <Suspense fallback={<div style={{ padding: 48, color: 'var(--text-dim)', fontFamily: 'var(--mono)', fontSize: 13 }}>loading…</div>}>
        <Comp />
      </Suspense>
    );
  } else if (topicMeta) {
    content = (
      <Placeholder
        title={topicMeta.title}
        chapterLabel={`CH. ${String(chapterMeta!.number).padStart(2, '0')} — ${chapterMeta!.title.toUpperCase()}`}
        accent={chapterMeta!.color}
      />
    );
  } else {
    content = <Home onSelect={select} visited={visited} />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar activeTopic={active} onSelect={select} open={sidebarOpen} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          position: 'sticky', top: 0, zIndex: 10, background: 'rgba(11,14,20,0.85)',
          backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border)',
          padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <button
            onClick={() => setSidebarOpen(o => !o)}
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-pressed={sidebarOpen}
            style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', color: 'var(--text-dim)', fontSize: 12 }}
          >
            ☰
          </button>
          <button
            onClick={() => navigate('/')}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', fontSize: 12.5, fontFamily: 'var(--mono)' }}
          >
            ← dashboard
          </button>
        </div>
        {content}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route path="/:topicId" element={<AppShell />} />
      </Routes>
    </HashRouter>
  );
}
