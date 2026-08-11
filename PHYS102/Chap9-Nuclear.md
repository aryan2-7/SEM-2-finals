# Chapter 9: Nuclear Physics

---

## 1. Nuclear Binding Energy

### 1.1 Mass Defect ($\Delta m$)
A nucleus consists of $Z$ protons and $N$ neutrons. The expected total mass of its constituent nucleons is $(Z m_p + N m_n)$, where $m_p$ is the proton mass and $m_n$ is the neutron mass. 

Experimental measurements show that the actual measured mass $M$ of a stable nucleus is always less than the total mass of its individual constituent nucleons. The difference in mass is defined as the **mass defect** ($\Delta m$):

$$\Delta m = (Z m_p + N m_n) - M$$

---

### 1.2 Binding Energy ($\text{B.E.}$)
When $Z$ protons and $N$ neutrons combine to assemble a nucleus, mass equivalent to $\Delta m$ is converted into energy according to Einstein's mass-energy equivalence relation $\Delta E = (\Delta m)c^2$. This energy released during assembly—or required to completely separate the nucleus into its individual constituent nucleons—is called the **Binding Energy** ($\text{B.E.}$):

$$\text{B.E.} = [(Z m_p + N m_n) - M]c^2$$

#### Stability Criteria:
* **$\text{B.E.} > 0$:** The nucleus is bound and stable against spontaneous disintegration.
* **$\text{B.E.} < 0$:** The nucleus is unstable and will spontaneously disintegrate.
* **Binding Energy per Nucleon ($\text{B.E.}/A$):** Calculated as the total binding energy divided by mass number $A = Z + N$. Higher $\text{B.E.}/A$ indicates greater nuclear stability.

---

## 2. Radioactivity and Half-Life

### 2.1 Natural Radioactivity & Units
**Natural Radioactivity** is the spontaneous emission of highly penetrating radiation ($\alpha, \beta, \gamma$) from unstable heavy atomic nuclei.

#### Common Units of Radioactivity:
* **Becquerel ($\text{Bq}$):** SI unit equal to $1 \text{ decay/sec}$ ($1 \text{ event/sec}$).
* **Rutherford ($\text{Rd}$):** $1 \text{ Rd} = 10^6 \text{ disintegrations/sec}$.
* **Curie ($\text{Ci}$):** $1 \text{ Ci} = 3.7 \times 10^{10} \text{ disintegrations/sec}$.

---

### 2.2 Radioactive Decay Law
The rate of disintegration ($-\frac{dN}{dt}$) of a radioactive sample at any time $t$ is directly proportional to the number of undecayed radioactive nuclei $N$ present at that moment:

$$\frac{dN}{dt} = -\lambda N$$

*(where $\lambda$ is the decay constant)*.

#### Derivation:
$$\frac{dN}{N} = -\lambda dt$$

Integrating both sides from initial condition $N = N_0$ at $t = 0$:

$$\ln\left(\frac{N}{N_0}\right) = -\lambda t$$
$$N(t) = N_0 e^{-\lambda t}$$

*The number of undecayed radioactive atoms decreases exponentially with time.*

---

### 2.3 Half-Life ($T_{1/2}$)
The **half-life** ($T_{1/2}$) is the time required for half of the initial number of radioactive nuclei in a sample to undergo decay.

Setting $N = \frac{N_0}{2}$ at $t = T_{1/2}$ in the decay law:

$$\frac{N_0}{2} = N_0 e^{-\lambda T_{1/2}} \implies e^{\lambda T_{1/2}} = 2$$
$$T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$$

---

## 3. Types of Nuclear Reactions

A nuclear reaction involves a projectile $B$ striking a target nucleus $A$ to temporarily form a compound nucleus $C$, which then disintegrates into product nucleus $P$ and outgoing particle $Q$:

$$A + B \rightarrow C \rightarrow P + Q$$

### Key Classification of Nuclear Reactions:
1. **Elastic Scattering:** The incident particle strikes the target nucleus and emerges with no loss of kinetic energy (only direction changes):
   $$_{79}\text{Au}^{179} + {_2}\text{He}^4 \rightarrow {_2}\text{He}^4 + {_{79}}\text{Au}^{179}$$
2. **Inelastic Scattering:** The incident particle transfers part of its kinetic energy to excite the target nucleus, which later returns to ground state by emitting a $\gamma$-ray photon:
   $$_3\text{Li}^7 + {_1}\text{H}^1 \rightarrow (_3\text{Li}^7)^* + {_1}\text{H}^1$$
   $$(_3\text{Li}^7)^* \rightarrow {_3}\text{Li}^7 + \gamma$$
3. **Radioactive Capture:** The incident particle is absorbed by the target nucleus to form an excited composite state, which subsequently de-excites via $\gamma$-ray emission:
   $$_6\text{C}^{12} + {_1}\text{H}^1 \rightarrow (_7\text{N}^{13})^* \rightarrow {_7}\text{N}^{13} + \gamma$$
4. **Disintegration / Direct Reaction:** The target nucleus absorbs the incident particle and ejects a completely different particle, altering the target's composition:
   $$_4\text{Be}^9 + {_2}\text{He}^4 \rightarrow {_6}\text{C}^{12} + {_0}\text{n}^1$$
5. **Photodisintegration:** High-energy electromagnetic radiation ($\gamma$-rays) strikes a target nucleus, breaking it apart and ejecting nuclear particles (e.g., neutrons):
   $$_1\text{H}^2 + \gamma \rightarrow {_1}\text{H}^1 + {_0}\text{n}^1$$

---

## 4. Q-Value and Threshold Energy

### 4.1 Q-Value Derivation
Consider a general nuclear reaction represented by $X(x,y)Y$ or:

$$x + X \rightarrow Y + y$$

Where $x$ is the projectile, $X$ is target at rest ($E_X = 0$), $Y$ is recoil product nucleus, and $y$ is emitted particle.



```text
                         Target X (at rest)
                                ●
                               / \
                              /   \  φ
                             /     \
                            /       \
Projectile x  ────────────►         ●  Product Y

                              θ ↘
                                 ●
                              Particle y
```

Applying conservation of total relativistic energy:

$$E_x + m_x c^2 + M_X c^2 = E_Y + M_Y c^2 + E_y + m_y c^2$$
$$E_Y + E_y - E_x = (M_X + m_x - M_Y - m_y)c^2$$

The **Q-value** of the reaction is defined as the net kinetic energy gained or lost:

$$Q = E_Y + E_y - E_x = (M_X + m_x - M_Y - m_y)c^2$$

#### Energy Classification:
* **Exothermic / Exoergic ($Q > 0$):** Mass is converted into kinetic energy; reaction occurs spontaneously.
* **Endothermic / Endoergic ($Q < 0$):** Kinetic energy is converted into mass; energy must be supplied by the projectile.

---

### 4.2 Q-Equation in Terms of Measured Quantities
By applying conservation of linear momentum along and perpendicular to the projectile path:

1. $M_Y V_Y \sin\phi = m_y v_y \sin\theta$
2. $m_x v_x = M_Y V_Y \cos\phi + m_y v_y \cos\theta \implies M_Y V_Y \cos\phi = m_x v_x - m_y v_y \cos\theta$

Squaring and adding both momentum components eliminates recoil angle $\phi$:

$$(M_Y V_Y)^2 = (m_y v_y)^2 + (m_x v_x)^2 - 2 m_x m_y v_x v_y \cos\theta$$

Expressed in terms of kinetic energies $E = \frac{1}{2} m v^2$, the recoil energy $E_Y$ becomes:

$$E_Y = \frac{m_x}{M_Y} E_x + \frac{m_y}{M_Y} E_y - \frac{2}{M_Y} \sqrt{E_x E_y m_x m_y} \cos\theta$$

Substituting $E_Y$ back into $Q = E_Y + E_y - E_x$ yields the standard **Q-equation**:

$$Q = E_y \left(1 + \frac{m_y}{M_Y}\right) - E_x \left(1 - \frac{m_x}{M_Y}\right) - \frac{2}{M_Y} \sqrt{E_x E_y m_x m_y} \cos\theta$$

*For emission perpendicular to projectile path ($\theta = 90^\circ$)*:

$$Q = E_y \left(1 + \frac{m_y}{M_Y}\right) - E_x \left(1 - \frac{m_x}{M_Y}\right)$$

---

### 4.3 Threshold Energy ($E_{\text{th}}$)
For an endoergic reaction ($Q < 0$), the reaction cannot occur unless the incident projectile carries a minimum kinetic energy called the **threshold energy** ($E_{\text{th}}$) to satisfy both energy and momentum conservation.

Let $M_c = M_X + m_x$ be the compound nucleus mass. By momentum conservation ($m_x v_x = M_c V_c$):

$$-Q = \frac{1}{2} m_x v_x^2 - \frac{1}{2} M_c V_c^2 = \frac{1}{2} m_x v_x^2 \left( 1 - \frac{m_x}{M_c} \right)$$
$$-Q = E_{\text{th}} \left( \frac{M_X}{M_X + m_x} \right)$$

Solve for threshold energy $E_{\text{th}}$:

$$E_{\text{th}} = (-Q) \left( 1 + \frac{m_x}{M_X} \right)$$

*(Note: For photon-induced reactions where $m_x = 0$, $E_{\text{th}} = -Q$)*.

---

## 5. Nuclear Fission and Fusion

### 5.1 Nuclear Fission
**Nuclear Fission** is the splitting of a heavy, unstable nucleus into two smaller daughter nuclei of comparable mass, accompanied by neutron release and significant energy output.

#### Example Reaction:
$$_{92}\text{U}^{235} + {_0}\text{n}^1 \rightarrow ({_{92}}\text{U}^{236})^* \rightarrow {_{56}}\text{Ba}^{141} + {_{36}}\text{Kr}^{92} + 3 {_0}\text{n}^1 + Q$$

* **Energy Released ($Q$):** $\approx 200 \text{ MeV}$ per fission event.

---

### 5.2 Nuclear Fusion
**Nuclear Fusion** is the combining of two light nuclei to form a heavier, more stable nucleus with a high energy release.

#### Example Reaction (Deuterium-Deuterium Fusion):
$$_1\text{H}^2 + {_1}\text{H}^2 \rightarrow {_2}\text{He}^4 + Q$$

* **Energy Released ($Q$):** $\approx 24 \text{ MeV}$ per fusion event.
* **Solar Energy:** Fusion processes serve as the primary source of energy generation in stars like the Sun.

---

## 6. Solved Numerical Problems

### Problem 1: Binding Energy per Nucleon of Tritium
Calculate the binding energy per nucleon ($\text{MeV/nucleon}$) for Tritium ($_{1}\text{H}^3$).
* Given: $m_p = 1.007825 \text{ u}$, $m_n = 1.008665 \text{ u}$, $m_t = 3.01605 \text{ u}$, $1 \text{ u} = 931.5 \text{ MeV}$ ($1.66 \times 10^{-27} \text{ kg}$).

* **Solution:**
  1. $Z = 1$, $N = 2$, $A = 3$.
  2. Mass Defect $\Delta m = (1 \cdot m_p + 2 \cdot m_n) - m_t = (1.007825 + 2 \times 1.008665) - 3.01605 = 3.025155 - 3.01605 = 0.009105 \text{ u}$.
  3. Total Binding Energy $\text{B.E.} = 0.009105 \times 931.5 \text{ MeV} \approx 8.481 \text{ MeV}$.
  4. Binding Energy per Nucleon:
     $$\frac{\text{B.E.}}{A} = \frac{8.481}{3} \approx 2.8 \text{ MeV/nucleon}$$

---

### Problem 2: Energy Released in Uranium-235 Fission
Calculate the energy $Q$ (in $\text{MeV}$) released in the fission reaction:
$$\text{n} + {_{92}}\text{U}^{235} \rightarrow {_{56}}\text{Ba}^{141} + {_{36}}\text{Kr}^{92} + 3\text{n}$$
* Given: $m(\text{n}) = 1.008665 \text{ u}$, $m(\text{U}) = 235.043915 \text{ u}$, $m(\text{Ba}) = 140.9139 \text{ u}$, $m(\text{Kr}) = 91.8973 \text{ u}$.

* **Solution:**
  1. Initial Mass $M_i = m(\text{n}) + m(\text{U}) = 1.008665 + 235.043915 = 236.05258 \text{ u}$.
  2. Final Mass $M_f = m(\text{Ba}) + m(\text{Kr}) + 3 m(\text{n}) = 140.9139 + 91.8973 + 3(1.008665) = 235.837195 \text{ u}$.
  3. Mass Difference $\Delta m = M_i - M_f = 236.05258 - 235.837195 = 0.215385 \text{ u}$.
  4. Energy Released:
     $$Q = 0.215385 \text{ u} \times 931.5 \text{ MeV/u} \approx 200 \text{ MeV}$$

---

### Problem 3: Radioactive Decay Time
How long does it take for $60\%$ of a sample of radon to decay if its half-life is $3.8 \text{ days}$?

* **Solution:**
  1. If $60\%$ decays, remaining fraction $N/N_0 = 1 - 0.60 = 0.40$.
  2. Decay constant $\lambda = \frac{\ln 2}{T_{1/2}} = \frac{0.693}{3.8} \approx 0.1824 \text{ day}^{-1}$.
  3. From decay law $\ln(N/N_0) = -\lambda t \implies \ln(0.40) = -0.1824 t$:
     $$-0.9163 = -0.1824 t \implies t = \frac{0.9163}{0.1824} \approx 5.02 \text{ days}$$

---

### Problem 4: Remaining Fraction of Radon Sample
The half-life of radon is $3.8 \text{ days}$. After how many days will only $1/20$ of the sample remain undecayed?

* **Solution:**
  1. Target ratio $N/N_0 = 1/20 = 0.05$.
  2. Decay constant $\lambda = \frac{\ln 2}{3.8} \approx 0.1824 \text{ day}^{-1}$.
  3. From decay law $\ln(N/N_0) = -\lambda t \implies \ln(0.05) = -0.1824 t$:
     $$-2.9957 = -0.1824 t \implies t = \frac{2.9957}{0.1824} \approx 16.43 \text{ days}$$

---

### Problem 5: Critical Magnetic Field of Superconducting Tin
Superconducting tin has critical temperature $T_c = 3.7 \text{ K}$ at zero magnetic field and critical field $H_c(0) = 0.0306 \text{ T}$ at $0 \text{ K}$. Find the critical field at $2 \text{ K}$.

* **Solution:**
  1. Temperature dependence formula: $H_c(T) = H_c(0) \left[ 1 - \left(\frac{T}{T_c}\right)^2 \right]$.
  2. Substitute $T = 2 \text{ K}$, $T_c = 3.7 \text{ K}$, $H_c(0) = 0.0306 \text{ T}$:
     $$H_c(2\text{K}) = 0.0306 \left[ 1 - \left(\frac{2}{3.7}\right)^2 \right] = 0.0306 \left[ 1 - 0.2922 \right] = 0.0306 \times 0.7078 \approx 0.0217 \text{ T}$$
