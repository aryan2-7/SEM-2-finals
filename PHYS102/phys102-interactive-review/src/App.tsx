import { useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';
import Sidebar from './components/Sidebar';
import Placeholder from './components/Placeholder';
import { chapters, topics } from './data/registry';

import Home from './topics/Home';
import DipoleField from './topics/DipoleField';
import Polarization from './topics/Polarization';
import BoundCurrent from './topics/BoundCurrent';
import HysteresisLoop from './topics/HysteresisLoop';
import HysteresisLoss from './topics/HysteresisLoss';
import MacroscopicEquations from './topics/MacroscopicEquations';
import Poynting from './topics/Poynting';
import MolecularTransitions from './topics/MolecularTransitions';
import RamanEffect from './topics/RamanEffect';
import ThresholdEnergy from './topics/ThresholdEnergy';
import DelOperator from './topics/DelOperator';
import CoulombLaw from './topics/CoulombLaw';
import GaussLaw from './topics/GaussLaw';
import DipoleExternal from './topics/DipoleExternal';
import BiotSavart from './topics/BiotSavart';
import FaradayLenz from './topics/FaradayLenz';
import SelfInduction from './topics/SelfInduction';
import DisplacementCurrent from './topics/DisplacementCurrent';
import WaveEquation from './topics/WaveEquation';
import Radioactivity from './topics/Radioactivity';

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
};

// Nav entries that are really aliases of another featured topic's page
// (e.g. Lenz's law is taught on the same page as Faraday's law).
const aliasRedirect: Record<string, string> = {
  'lenz-law': 'faraday-law',
};

export default function App() {
  const [active, setActive] = useState<string>('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    setActive(aliasRedirect[id] ?? id);
  }

  const resolvedActive = aliasRedirect[active] ?? active;
  const topicMeta = topics.find(t => t.id === resolvedActive) ?? topics.find(t => t.id === active);
  const chapterMeta = topicMeta ? chapters.find(c => c.id === topicMeta.chapterId) : null;

  let content;
  if (active === 'home') {
    content = <Home onSelect={select} visited={visited} />;
  } else if (featuredComponents[resolvedActive]) {
    const Comp = featuredComponents[resolvedActive];
    content = <Comp />;
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
            style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', color: 'var(--text-dim)', fontSize: 12 }}
          >
            ☰
          </button>
          <button
            onClick={() => setActive('home')}
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
