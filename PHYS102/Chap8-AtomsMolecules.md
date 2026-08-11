# Chapter 8: Physics of Atoms and Molecules

---

## 1. Atomic Spectra

### 1.1 Emission and Absorption Spectra
* **Emission Spectra:** Produced when large amounts of energy excite electrons in an atom. When these electrons lose excitation energy, they emit discrete electromagnetic radiation while returning to lower energy states.
* **Absorption Spectra:** Occurs when electromagnetic radiation passes through a substance, causing electronic excitation and a corresponding decrease in radiation intensity at specific wavelengths.

---

### 1.2 Rydberg Formula
The wavelengths ($\lambda$) of photons emitted or absorbed during electronic transitions in hydrogen-like atoms are given by:

$$\frac{1}{\lambda} = R Z^2 \left( \frac{1}{n_l^2} - \frac{1}{n_u^2} \right)$$

* $Z$: Atomic number.
* $R$: Rydberg constant ($\approx 1.097 \times 10^7 \text{ m}^{-1}$).
* $n_l$: Lower principal quantum number ($n_l = 1, 2, 3, \dots$).
* $n_u$: Upper principal quantum number ($n_u > n_l$).

---

### 1.3 Hydrogen Spectral Series
* **Lyman Series ($n_l = 1$):** Transitions fall in the **ultraviolet (UV)** region.
* **Balmer Series ($n_l = 2$):** Lines fall in the **visible** region ($400\text{ nm} < \lambda < 700\text{ nm}$).
  * Lines designated as $H_\alpha, H_\beta, H_\gamma, \dots$
  * $H_\alpha$ is a primary spectral line used in astronomy to detect elemental hydrogen.
  * Balmer lines are observable in the solar spectrum.
* **Paschen, Brackett, Pfund, Humphreys Series ($n_l \ge 3$):** Transitions fall in the **infrared (IR)** region.

---

## 2. Molecular Bonds and Molecular Spectra

### 2.1 Types of Molecular Transitions
Molecular energy states are composed of electronic, vibrational, and rotational energy levels.

```text
             Potential Energy vs. Internuclear Distance

  Energy ^
         |       /--------\  Excited Electronic State
         |      /  _.-=-._ \
         |     /  /       \ \  <-- Vibrational Levels
         |    |  |         | |
         |   +---------------+
         |   | Electronic    | (UV / Optical Region)
         |   | Transitions   |
         |   +---------------+
         |
         |       /--------\  Ground Electronic State
         |      /  _.-=-._ \
         |     /  /       \ \  <-- Vibrational Levels (IR Region)
         |    |  |  =-=-=  | | <-- Rotational Levels (Microwave)
         +---------------------> Internuclear Separation
```

* **Electronic Transitions:**
  * Occur between different electronic energy states.
  * Rapid transitions represented by vertical or near-vertical lines on potential energy curves because internuclear separation remains virtually constant during transition (Franck-Condon principle).
  * Spectrum falls in the **optical or ultraviolet (UV)** region.

* **Vibrational Transitions:**
  * Occur between different vibrational levels within the *same* electronic state.
  * Spectrum falls in the **infrared (IR)** region.

* **Rotational Transitions:**
  * Occur primarily between rotational levels within the *same* vibrational state.
  * Spectrum falls in the **far-infrared / microwave** region.

---

## 3. Raman Effect

### 3.1 Definition & Basic Mechanism
The **Raman Effect** is the inelastic scattering of monochromatic light by molecules, resulting in scattered radiation containing modified frequencies alongside the original incident frequency.

1. An incident photon of energy $h\nu_0$ interacts with a molecule in an initial rovibronic state.
2. The molecule is excited to a short-lived **virtual energy state**.
3. The molecule returns to a final rovibronic state, emitting a scattered photon:
   * **Rayleigh Line (Unmodified):** Elastic scattering; no change in energy ($\nu_s = \nu_0$).
   * **Stokes Lines:** Inelastic scattering where final state is more energetic than initial state; scattered photon has **lower frequency** ($\nu_s < \nu_0$).
   * **Anti-Stokes Lines:** Inelastic scattering where initial state is excited and final state is less energetic; scattered photon has **higher frequency** ($\nu_a > \nu_0$).

---

### 3.2 Experimental Setup
The classic Raman scattering experimental apparatus includes:

* **Raman Tube ($AB$):** Glass container holding pure, dust-free, bubble-free liquid sample (e.g., benzene or toluene).
* **Horn ($H$):** One end drawn into a curved horn and blackened externally to absorb unscattered light and prevent internal reflection.
* **Window ($W$):** Optically flat glass plate through which scattered light exits.
* **Light Source ($S$) & Filter ($F$):** Mercury arc lamp passed through filter to isolate monochromatic line ($\lambda = 4358\text{ Å}$).
* **Water Jacket ($J$):** Surrounds tube to circulate cooling water and protect liquid from thermal decomposition.
* **Reflector ($R$):** Semi-cylindrical aluminum reflector to concentrate light onto tube.
* **Spectrograph:** High light-gathering and resolving power spectrograph to capture and photograph spectral lines.

---

### 3.3 Quantum Theory of Raman Effect

```text
                         Virtual States
                    ─────────────────────

                         ↑       ↑       ↑
                         │       │       │
                        hν₀     hν₀     hν₀
                         │       │       │
                         ●       ●       ●
                        / \     / \     / \
                       /   \   /   \   /   \
                      /     \ /     \ /     \
                     ↓       ↓       ↓
          ───────────●───────●───────●────────  E₁
                    Level 1 (E₁)
                         
          ───────────●────────────────────────  E₀
                    Level 0 (E₀)

                    ↑       ↑       ↑
                  Stokes  Rayleigh Anti-Stokes
                  h(ν₀−ν₁)  hν₀    h(ν₀+ν₁)
```

Let $\nu_0$ be incident photon frequency, $E_0$ be ground vibrational level, and $E_1$ be first excited vibrational level.

#### 1. Stokes Line Formation:
* Initial state = $E_0$.
* Absorption to virtual state $E_1'$:
  $$E_1' - E_0 = h\nu_0 \tag{1}$$
* De-excitation to level $E_1$ emitting photon of frequency $\nu_s$:
  $$E_1' - E_1 = h\nu_s \tag{2}$$
* Subtracting Eq. (1) from Eq. (2):
  $$E_0 - E_1 = h\nu_s - h\nu_0 \implies h\nu_s = h\nu_0 - (E_1 - E_0)$$
  $$\nu_s = \nu_0 - \nu_1$$
  *(where $\nu_1 = \frac{E_1 - E_0}{h}$ is characteristic IR vibrational frequency)*.

#### 2. Anti-Stokes Line Formation:
* Initial state = $E_1$.
* Absorption to virtual state $E_2'$:
  $$E_2' - E_1 = h\nu_0 \tag{3}$$
* De-excitation to ground level $E_0$ emitting photon of frequency $\nu_a$:
  $$E_2' - E_0 = h\nu_a \tag{4}$$
* Subtracting Eq. (3) from Eq. (4):
  $$E_1 - E_0 = h\nu_a - h\nu_0 \implies h\nu_a = h\nu_0 + (E_1 - E_0)$$
  $$\nu_a = \nu_0 + \nu_1$$

---

### 3.4 Key Characteristics of Raman Spectra
* **Intensity:** Stokes lines are consistently more intense than Anti-Stokes lines because at thermal equilibrium, population of ground state ($E_0$) exceeds populated excited state ($E_1$).
* **Symmetry:** Modified lines appear symmetrically displaced around the parent Rayleigh line.
* **Vibrational Link:** Frequency displacement $\Delta\nu = |\nu_0 - \nu_{\text{scattered}}| = \nu_1$ corresponds directly to the infrared absorption frequency of the material.

---

## 4. Superconductivity

### 4.1 Discovery and Definition
Discovered by Kamerlingh Onnes; electrical resistance of metals (mercury, lead, tin) drops strictly to zero below a critical temperature $T_c$.

---

### 4.2 The Meissner Effect
When a material is cooled below $T_c$ inside an external magnetic field, internal magnetic flux lines are completely expelled from the bulk.

```text
Normal Conducting State (T > Tc)        Superconducting State (T < Tc)
|  |  |  |                             \  \      /  /
|  |  |  |                              \  \    /  /
+------------+                          +------------+
|  Material  |                          | B = 0      |
+------------+                          +------------+
|  |  |  |                              /  /    \
|  |  |  |                             /  /      \

Flux penetrates bulk                      Flux expelled from bulk
```

* Implies that superconductors act as **perfect diamagnets**:
  $$\vec{B} = \mu_0(1 + \chi_m)\vec{H} = 0$$
  $$\chi_m = -1$$

---

### 4.3 Critical Field ($H_c$) and Temperature ($T_c$)
Superconductivity is destroyed if an applied external magnetic field exceeds a critical value $H_c(T)$.

* **Temperature Dependence Formula:**
  $$H_c(T) = H_c(0) \left[ 1 - \left(\frac{T}{T_c}\right)^2 \right]$$

  * $H_c(0)$: Maximum critical field at $T = 0\text{ K}$.
  * $H_c(T_c) = 0$: Field vanishes at critical temperature $T_c$.

```text
            Type I vs. Type II Superconductors

Critical Field (B)                       Critical Field (B)
 ^                                        ^

Bc |-----\  Normal                       Bc2|------\   Normal State
   |       \                                |       \   
   | Super  \                               | Mixed  \ (Vortices)
   | State   \                           Bc1|---------\ State

+--------------> Temp                    +--------------> Temp
Tc                                       Tc
[Type I]                                 [Type II]
```

* **Type I Superconductors:** Direct abrupt phase transition from superconducting state to normal state at field $B_c$.
* **Type II Superconductors:** Exhibits two critical fields ($B_{c1}$ and $B_{c2}$); transitions from pure superconducting state ($B < B_{c1}$) to mixed/vortex state ($B_{c1} < B < B_{c2}$) before turning completely normal ($B > B_{c2}$).
* **Silsbee Effect:** High electric currents flowing through a superconductor generate self-magnetic fields; if this self-field exceeds $H_c(T)$, superconductivity breaks down.
