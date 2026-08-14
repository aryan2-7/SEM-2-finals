import { TopicShell, Section, Concept, FormulaBlock } from '../components/TopicShell';
import Quiz from '../components/Quiz';
import type { QuizQuestion } from '../data/types';

const accent = '#59c98e';

const types = [
  { name: 'Elastic Scattering', desc: 'Incident particle bounces off with no kinetic energy loss — only direction changes.', math: '_{79}\\text{Au}^{179} + {_2\\text{He}}^4 \\to {_2\\text{He}}^4 + {_{79}\\text{Au}}^{179}' },
  { name: 'Inelastic Scattering', desc: 'Incident particle transfers some energy, exciting the target, which later de-excites via γ-emission.', math: '_3\\text{Li}^7 + {_1\\text{H}}^1 \\to (_3\\text{Li}^7)^* + {_1\\text{H}}^1 \\to {_3\\text{Li}}^7 + \\gamma' },
  { name: 'Radioactive Capture', desc: 'Incident particle is fully absorbed, forming an excited composite that de-excites via γ-emission.', math: '_6\\text{C}^{12} + {_1\\text{H}}^1 \\to (_7\\text{N}^{13})^* \\to {_7\\text{N}}^{13} + \\gamma' },
  { name: 'Disintegration', desc: 'Target absorbs the incident particle and ejects a different particle, transmuting the nucleus.', math: '_4\\text{Be}^9 + {_2\\text{He}}^4 \\to {_6\\text{C}}^{12} + {_0\\text{n}}^1' },
  { name: 'Photodisintegration', desc: 'A high-energy γ-ray breaks apart a target nucleus, ejecting a particle.', math: '_1\\text{H}^2 + \\gamma \\to {_1\\text{H}}^1 + {_0\\text{n}}^1' },
];

const quiz: QuizQuestion[] = [
  {
    q: 'What distinguishes elastic from inelastic scattering?',
    options: ['There is no difference', 'Elastic scattering conserves the incident particle\'s kinetic energy exactly; inelastic scattering transfers some of it to excite the target', 'Inelastic scattering never involves photons', 'Elastic scattering always involves photons'],
    correct: 1,
    explain: 'In elastic scattering, only direction changes — the total kinetic energy is preserved. Inelastic scattering leaves the target in an excited state, meaning kinetic energy was converted into internal excitation.',
  },
  {
    q: 'In radioactive capture, what happens to the incident particle?',
    options: ['It bounces away unchanged', 'It is fully absorbed by the target, forming a single excited composite nucleus', 'It ejects a different particle immediately', 'It always splits the target apart'],
    correct: 1,
    explain: 'Radioactive capture is characterized by full absorption — the projectile disappears into the compound nucleus, which subsequently relaxes by emitting a γ-ray photon.',
  },
  {
    q: 'What triggers a photodisintegration reaction?',
    options: ['A neutron collision', 'A high-energy γ-ray photon striking and breaking apart the target nucleus', 'Only occurs spontaneously with no external trigger', 'Requires an electron beam'],
    correct: 1,
    explain: "Photodisintegration is specifically initiated by an incoming high-energy photon (γ-ray) rather than a massive particle — this is exactly the case where the threshold-energy formula reduces to E_th = −Q.",
  },
];

export default function ReactionTypes() {
  return (
    <TopicShell chapterLabel="CH. 09 — NUCLEAR PHYSICS" title="Types of Nuclear Reactions" accent={accent}>
      <Section label="Concept" accent={accent}>
        <Concept>
          When a projectile strikes a target nucleus, several distinct things can happen — the particle can
          simply bounce off, transfer energy without changing composition, be fully absorbed, or trigger a
          complete transmutation. Classifying these outcomes is the first step in analyzing any nuclear reaction.
        </Concept>
      </Section>

      <Section label="General form" accent={accent}>
        <FormulaBlock formulas={[{ math: 'A + B \\to C \\to P + Q', caption: 'projectile B strikes target A, forming compound C, which decays into products P and Q' }]} />
      </Section>

      <Section label="The five reaction types" accent={accent}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {types.map(t => (
            <div key={t.name} style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-h)', marginBottom: 4 }}>{t.name}</div>
              <p style={{ fontSize: 12, color: 'var(--text-dim)', marginBottom: 10 }}>{t.desc}</p>
              <FormulaBlock formulas={[{ math: t.math }]} />
            </div>
          ))}
        </div>
      </Section>

      <Section label="Self-check" accent={accent}>
        <Quiz questions={quiz} accent={accent} />
      </Section>
    </TopicShell>
  );
}
