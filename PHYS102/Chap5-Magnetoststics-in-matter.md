# Chapter 5: Magnetostatic Field in Matter

---

## 1. Magnetic Dipole

### 1.1 Definition & Orbital Motion
A **magnetic dipole** is formed by a closed circulation of electric current (e.g., a single loop of wire carrying a constant current $I$).

* **Microscopic Origin:** The revolution of an electron in a clockwise direction is equivalent to a conventional current in the anticlockwise direction. Thus, an electronic orbit behaves like a tiny magnetic dipole.
* **Models:**
  * **Gilbert Model:** Analogy to electric dipole using fictitious magnetic poles ($N$ and $S$).
  * **Ampère Model:** Current loops as the fundamental source of magnetism.

---

### 1.2 Magnetic Dipole Moment
The **magnetic dipole moment** ($\vec{m}$) of a current loop is defined as the product of the current $I$ and the vector area $\vec{A}$ enclosed by the loop:

$$\vec{m} = I \vec{A} = I A \hat{n}$$

* **Direction:** Perpendicular to the plane of the current loop, given by the **right-hand rule** (curl fingers in the direction of current; thumb points along $\vec{m}$).
* **SI Unit:** $\text{A}\cdot\text{m}^2$ (or $\text{J/T}$).

---

### 1.3 Torques and Energy on a Magnetic Dipole in a Magnetic Field

#### Torque Derivation ($\vec{\tau}$)
Consider a rectangular current loop $PQRSP$ with side lengths $a$ (along $x/y$ plane) and $b$ (along $y/z$ plane) centered at the origin, placed in a uniform magnetic field $\vec{B} = B\hat{k}$. The loop is tilted at an angle $\theta$ from the $z$-axis towards the $y$-axis.

1. **Forces on individual sides:**
   * **Side PQ:** $\vec{F}_{PQ} = B I a \sin(90^\circ + \theta)\hat{i} = B I a \cos\theta \hat{i}$
   * **Side QR:** $\vec{F}_{QR} = B I b \sin(90^\circ)\hat{j} = B I b \hat{j}$
   * **Side RS:** $\vec{F}_{RS} = -B I a \sin(90^\circ - \theta)\hat{i} = -B I a \cos\theta \hat{i}$
   * **Side SP:** $\vec{F}_{SP} = -B I b \sin(90^\circ)\hat{j} = -B I b \hat{j}$

2. **Force Cancellation & Couple:**
   * $\vec{F}_{PQ}$ and $\vec{F}_{RS}$ are equal in magnitude, opposite in direction, and share the same line of action. They cancel each other, exerting a stretching effect along the $x$-axis.
   * $\vec{F}_{QR}$ and $\vec{F}_{SP}$ are equal in magnitude and opposite in direction, but separated by a perpendicular distance $a \sin\theta$. They form a force couple.

3. **Magnitude of Torque:**
   $$\tau = \text{Force} \times \text{Perpendicular Distance} = F_{QR} \cdot (a \sin\theta) = (B I b) \cdot (a \sin\theta) = B I (ab) \sin\theta$$

   Since area $A = ab$ and dipole moment magnitude $m = I A = I a b$:
   $$\tau = m B \sin\theta$$

4. **Vector Form:**
   $$\vec{\tau} = \vec{m} \times \vec{B}$$

---

#### Potential Energy ($U$)
To rotate the dipole from an initial angular position $\theta_1$ to $\theta_2$ against the magnetic torque $\tau_{\text{app}} = m B \sin\theta$:

$$W = \int_{\theta_1}^{\theta_2} \tau_{\text{app}} \, d\theta = \int_{\theta_1}^{\theta_2} m B \sin\theta \, d\theta = -m B (\cos\theta_2 - \cos\theta_1)$$

This work done is stored as a change in potential energy:

$$\Delta U = U(\theta_2) - U(\theta_1) = -m B (\cos\theta_2 - \cos\theta_1)$$

Taking the reference position as $\theta_1 = \frac{\pi}{2}$ ($90^\circ$) where $U\left(\frac{\pi}{2}\right) = 0$, and set $\theta_2 = \theta$:

$$U(\theta) = -m B \cos\theta = -\vec{m} \cdot \vec{B}$$

* **Minimum Energy (Stable Equilibrium):** $\theta = 0^\circ \implies U_{\text{min}} = -mB$ ($\vec{m} \parallel \vec{B}$)
* **Maximum Energy (Unstable Equilibrium):** $\theta = 180^\circ \implies U_{\text{max}} = +mB$ ($\vec{m} \text{ anti-parallel to } \vec{B}$)

---

## 2. Magnetization ($\vec{M}$)

### 2.1 Definition
All substances consist of atomic dipoles. Without an external magnetic field, these dipoles are randomly oriented ($\sum \vec{m} = 0$). When placed in an external magnetic field, dipoles align along specific directions, and the substance becomes magnetized.

**Magnetization ($\vec{M}$)** is defined as the net magnetic dipole moment per unit volume:

$$\vec{M} = \frac{d\vec{m}}{d\tau} \implies d\vec{m} = \vec{M} d\tau$$

* **Type:** Vector quantity.
* **Direction:** Along the direction of the net magnetic dipole moment.
* **SI Unit:** $\text{A/m}$.

---

### 2.2 Bound Current and Physical Interpretation

#### Surface Bound Current Density ($\vec{K}_b$)
Consider a thin slab of thickness $t$ with uniform magnetization $\vec{M}$. The material can be visualized as tiny adjacent current loops $I$.
* Internal currents between adjacent loops cancel out due to opposite directions.
* Uncanceled currents remain only at the outer boundary/edges, forming a continuous surface current around the slab edge.

For a tiny loop element of area $da$ and thickness $t$ (volume $d\tau = t \, da$):
* Dipole moment in terms of magnetization: $dm = M d\tau = M t \, da$
* Dipole moment in terms of current loop: $dm = I \, da$

Equating the two expressions:
$$I \, da = M t \, da \implies I = M t$$

The **surface bound current density** ($K_b$) is defined as current per unit length perpendicular to flow:
$$K_b = \frac{I}{t} = \frac{M t}{t} = M$$

In vector notation:
$$\vec{K}_b = \vec{M} \times \hat{n}$$

*(where $\hat{n}$ is the outward unit normal to the surface).*
* *Note:* If $\vec{M}$ is perpendicular to the surface ($\vec{M} \parallel \hat{n}$), $\vec{K}_b = 0$. Surface bound current exists along surfaces parallel to $\vec{M}$.

---

#### Volume Bound Current Density ($\vec{J}_b$)
When magnetization is **non-uniform**, internal currents fail to cancel completely, generating a volume current inside the material.

1. **Derivation of $x$-component ($(J_b)_x$):**
   * Consider two adjacent microscopic volume elements along the $y$-axis with magnetization in the $z$-direction: $M_z(y)$ and $M_z(y + dy)$.
     $$I_{+x} = [M_z(y + dy) - M_z(y)] dz = \left( M_z(y) + \frac{\partial M_z}{\partial y} dy - M_z(y) \right) dz = \frac{\partial M_z}{\partial y} dy \, dz$$
   * Consider two adjacent volume elements along the $z$-axis with magnetization in the $y$-direction: $M_y(z)$ and $M_y(z + dz)$.
     $$I_{-x} = [M_y(z + dz) - M_y(z)] dy = \left( M_y(z) + \frac{\partial M_y}{\partial z} dz - M_y(z) \right) dy = \frac{\partial M_y}{\partial z} dy \, dz$$
   * Net current along the $+x$ direction through area $dy \, dz$:
     $$I_x = I_{+x} - I_{-x} = \left( \frac{\partial M_z}{\partial y} - \frac{\partial M_y}{\partial z} \right) dy \, dz$$
   * Volume bound current density along $x$:
     $$(J_b)_x = \frac{I_x}{dy \, dz} = \frac{\partial M_z}{\partial y} - \frac{\partial M_y}{\partial z}$$

2. **Full Vector Form:**
   Similarly deriving for $y$ and $z$ components:
   $$(J_b)_y = \frac{\partial M_x}{\partial z} - \frac{\partial M_z}{\partial x}$$
   $$(J_b)_z = \frac{\partial M_y}{\partial x} - \frac{\partial M_x}{\partial y}$$

   Combining components gives the curl of magnetization:
   $$\vec{J}_b = (J_b)_x \hat{i} + (J_b)_y \hat{j} + (J_b)_z \hat{k} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ M_x & M_y & M_z \end{vmatrix}$$

   $$\vec{J}_b = \nabla \times \vec{M}$$

3. **Conservation of Charge:**
   Taking the divergence of volume bound current:
   $$\nabla \cdot \vec{J}_b = \nabla \cdot (\nabla \times \vec{M}) = 0$$
   This obeys the continuity equation for stationary charge distribution.

---

## 3. Ampere's Law in Magnetized Materials

### 3.1 Derivation & Magnetic Field Strength ($\vec{H}$)
The total current density $\vec{J}$ in a magnetized material consists of free current density ($\vec{J}_f$, due to actual moving charge carriers) and bound current density ($\vec{J}_b$, due to magnetization):

$$\vec{J} = \vec{J}_f + \vec{J}_b$$

From Ampere's Law in differential form:
$$\nabla \times \vec{B} = \mu_0 \vec{J} = \mu_0 (\vec{J}_f + \vec{J}_b)$$

Substitute $\vec{J}_b = \nabla \times \vec{M}$:
$$\nabla \times \vec{B} = \mu_0 (\vec{J}_f + \nabla \times \vec{M})$$
$$\frac{1}{\mu_0} (\nabla \times \vec{B}) - \nabla \times \vec{M} = \vec{J}_f$$
$$\nabla \times \left( \frac{\vec{B}}{\mu_0} - \vec{M} \right) = \vec{J}_f$$

Define the **Magnetic Field Strength (or Auxiliary Field)** $\vec{H}$ as:
$$\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}$$

Thus, Ampere's Law in terms of $\vec{H}$ becomes:
$$\nabla \times \vec{H} = \vec{J}_f$$

---

### 3.2 Integral Form of Ampere's Law for $\vec{H}$
Taking the surface integral over a surface $S$ bounded by a closed contour $L$:

$$\int_S (\nabla \times \vec{H}) \cdot d\vec{a} = \int_S \vec{J}_f \cdot d\vec{a}$$

Applying Stokes' Theorem to the left hand side:

$$\oint_L \vec{H} \cdot d\vec{l} = I_{f,\text{enc}}$$

*(where $I_{f,\text{enc}}$ is the total free current enclosed by the Amperian loop).*

---

### 3.3 Example Problem: Long Copper Rod
**Problem:** A long copper rod of radius $R$ carries a uniformly distributed free current $I$. Find $\vec{H}$ both inside and outside the rod.

**Solution:**
Select a coaxial circular Amperian loop of radius $s$.

1. **Outside the rod ($s > R$):**
   * Enclosed free current: $I_{f,\text{enc}} = I$
   * Applying Ampere's Law:
     $$\oint \vec{H} \cdot d\vec{l} = H (2\pi s) = I \implies H_{\text{out}} = \frac{I}{2\pi s}$$
   * Vector form: $\vec{H}_{\text{out}} = \frac{I}{2\pi s} \hat{\phi}$

2. **Inside the rod ($s < R$):**
   * Free current density: $J_f = \frac{I}{\pi R^2}$
   * Enclosed free current: $I_{f,\text{enc}} = J_f (\pi s^2) = \frac{I \cdot \pi s^2}{\pi R^2} = \frac{I s^2}{R^2}$
   * Applying Ampere's Law:
     $$\oint \vec{H} \cdot d\vec{l} = H (2\pi s) = \frac{I s^2}{R^2} \implies H_{\text{in}} = \frac{I s}{2\pi R^2}$$
   * Vector form: $\vec{H}_{\text{in}} = \frac{I s}{2\pi R^2} \hat{\phi}$

---

## 4. Magnetic Susceptibility ($\chi_m$) and Permeability ($\mu$)

### 4.1 Linear Media & Magnetic Susceptibility
For most isotropic/linear media, magnetization $\vec{M}$ is proportional to the magnetizing field strength $\vec{H}$:

$$\vec{M} = \chi_m \vec{H}$$

where $\chi_m$ is a dimensionless constant called **magnetic susceptibility**.

* **Diamagnetic Materials:** $\chi_m < 0$ (small negative value). $\vec{B}$ field is slightly weakened.
* **Paramagnetic Materials:** $\chi_m > 0$ (small positive value). $\vec{B}$ field is slightly strengthened.
* **Ferromagnetic Materials:** $\chi_m \gg 0$ (large positive value). $\vec{M}$ is not strictly linear with $\vec{H}$, making $\chi_m$ non-constant and dependent on history.

---

### 4.2 Permeability Relations
Substitute $\vec{M} = \chi_m \vec{H}$ into $\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}$:

$$\vec{H} = \frac{\vec{B}}{\mu_0} - \chi_m \vec{H} \implies \frac{\vec{B}}{\mu_0} = (1 + \chi_m)\vec{H}$$
$$\vec{B} = \mu_0 (1 + \chi_m) \vec{H} = \mu \vec{H}$$

Where:
* **Magnetic Permeability of Material ($\mu$):**
  $$\mu = \mu_0 (1 + \chi_m)$$
* **Relative Permeability ($\mu_r$):**
  $$\mu_r = \frac{\mu}{\mu_0} = 1 + \chi_m = \frac{B}{B_0}$$

#### Material Classification Summary by Permeability:
* **Diamagnetic:** $\mu_r < 1$ ($\chi_m < 0$)
* **Paramagnetic:** $\mu_r > 1$ ($\chi_m > 0$)
* **Ferromagnetic:** $\mu_r \gg 1$ ($\chi_m \gg 0$)
* **Vacuum:** $\chi_m = 0 \implies \mu = \mu_0 \implies \vec{B}_0 = \mu_0 \vec{H}$

---

### 4.3 Bound Currents in Linear Media
In a linear medium:
$$\vec{J}_b = \nabla \times \vec{M} = \nabla \times (\chi_m \vec{H}) = \chi_m (\nabla \times \vec{H}) = \chi_m \vec{J}_f$$

$$\vec{J}_b = \chi_m \vec{J}_f$$

* **Consequence:** Volume bound currents exist inside a linear medium **only** where free current density $\vec{J}_f$ flows. If there is no free current inside the bulk material ($\vec{J}_f = 0$), then $\vec{J}_b = 0$, and all bound current resides strictly on the surface ($\vec{K}_b$).

---

## 5. Dia-, Para-, and Ferro-Magnetic Materials

### 5.1 Diamagnetic Materials
* **Origin:** Arises from orbital motion of electrons.
* **Mechanism:** An external magnetic field alters the electron orbital speed (Lenz's law at atomic level), inducing an orbital dipole moment opposed to the applied field.
* **Electronic Structure:** Occurs in substances whose atoms/molecules have completely filled shells (even number of electrons) so net intrinsic magnetic moment is zero in the absence of a field.
* **Properties:**
  * Feebly repelled by powerful electromagnets (moves from stronger to weaker field region).
  * Small, negative susceptibility ($\chi_m < 0$).
  * Relative permeability $\mu_r < 1$.
  * Susceptibility is **independent of temperature**.
* **Examples:** Copper ($\text{Cu}$), Silver ($\text{Ag}$), Bismuth ($\text{Bi}$), Gold ($\text{Au}$), Water ($\text{H}_2\text{O}$), Quartz, $\text{H}_2$, $\text{N}_2$, $\text{CO}_2$.

---

### 5.2 Paramagnetic Materials
* **Origin:** Arises from intrinsic spin magnetic moments of unpaired electrons.
* **Mechanism:** Permanent atomic magnetic dipoles exist individually, but thermal agitation randomly orientates them, giving zero net magnetization without a field. An applied field aligns these dipoles along its direction.
* **Electronic Structure:** Occurs in atoms/molecules with incomplete shells (odd number of electrons or unpaired spins).
* **Properties:**
  * Feebly attracted towards magnets (moves from weaker to stronger field region).
  * Small, positive susceptibility ($\chi_m > 0$).
  * Relative permeability $\mu_r > 1$.
  * Magnetization decreases as temperature increases due to thermal randomization.
* **Curie's Law:** Susceptibility is inversely proportional to absolute temperature $T$:
  $$\chi_m = \frac{C}{T}$$
  *(where $C$ is the Curie constant measured in Kelvin).*
* **Examples:** Platinum ($\text{Pt}$), Aluminum ($\text{Al}$), Chromium ($\text{Cr}$), Manganese ($\text{Mn}$), Liquid Oxygen ($\text{O}_2$), Copper Sulfate ($\text{CuSO}_4$).

---

### 5.3 Ferromagnetic Materials
* **Origin:** Strong quantum mechanical exchange coupling between electron spins in adjacent atoms.
* **Properties:**
  * Strongly attracted by magnetic fields.
  * Very large, positive susceptibility ($\chi_m \gg 1$, order of $10^2$ to $10^5$).
  * Relative permeability $\mu_r \gg 1$.
* **Examples:** Iron ($\text{Fe}$), Nickel ($\text{Ni}$), Cobalt ($\text{Co}$), Gadolinium ($\text{Gd}$), and various alloys (e.g., Alnico).

---

### 5.4 Domain Theory of Ferromagnetism (Weiss, 1907)
1. **Domains:** A ferromagnetic material is divided into small, spontaneously magnetized regions called **magnetic domains** (size $\sim 10^{-4}$ to $10^{-2}\text{ cm}$). Within each domain, atomic magnetic moments are fully aligned due to exchange interaction.
2. **Unmagnetized State ($H = 0$):** Directions of magnetization of different domains are randomly oriented, causing net magnetization to be zero.
3. **Magnetization Mechanism under External Field ($\vec{H}$):**
   * **Weak/Moderate Fields:** Domain growth by **boundary displacement/wall motion**—domains oriented favorably relative to the applied field expand at the expense of unfavorable domains.
   * **Strong Fields:** **Domain rotation**—the direction of magnetization of entire domains rotates into alignment with the applied field until saturation is reached.

---

### 5.5 Hysteresis Loop in Ferromagnetic Materials
**Hysteresis** refers to the phenomenon where the intensity of magnetization $\vec{M}$ (or magnetic induction $\vec{B}$) lags behind the magnetizing field $\vec{H}$ during cyclic magnetization.

1. **Initial Magnetization Curve ($OA$):** As $H$ increases from zero, $M$ increases along $OA$ up to **Magnetic Saturation** ($M_{\text{max}}$ at point $A$), where all domains are fully aligned. 
2. **Remanence / Retentivity (Point $B$):** When $H$ is reduced back to zero, $M$ does not return along $AO$, but follows path $AB$. The residual magnetization remaining when $H = 0$ ($M = OB$) is called **Retentivity**, **Remanence**, or **Residual Magnetism**. 
3. **Coercivity / Coercive Force (Point $C$):** When $H$ is applied in the reverse direction, $M$ decreases along path $BC$ and becomes zero at $H = -OC$. The magnitude of reverse magnetic field needed to reduce residual magnetization to zero is called **Coercivity** ($H_c = OC$). 
4. **Complete Cycle ($ABCDEFA$):** Reversing field further leads to negative saturation ($D$), decreasing reverse field to zero gives negative retentivity ($E$), and increasing field in the original direction closes the loop along $EFA$.
#### Material Applications Based on Hysteresis Loop: 
* **Soft Magnetic Materials (e.g., Iron/Transformer Cores):** Small area, narrow loop, low retentivity, low coercivity $\implies$ minimal energy loss per cycle. 
* **Hard Magnetic Materials (e.g., Permanent Magnets):** Broad loop, high retentivity, high coercivity $\implies$ resists demagnetization. * 
* **Ferrites with Rectangular Loops:** Used in memory and magnetic storage devices.


*--- 
### 5.6 Hysteresis Loss 
**Hysteresis Loss** is the energy dissipated in the form of heat per unit volume of a ferromagnetic material when it undergoes one complete cycle of magnetization. 
#### Mathematical Derivation: 
Consider a unit volume of ferromagnetic material containing $N$ atomic dipoles per unit volume, each with magnetic moment $m_i$ at angle $\theta_i$ relative to $\vec{H}$. 
1. Magnetization along field direction: $$M = \sum_{i=1}^{N} m_i \cos\theta_i$$2. Differentiating both sides: $$dM = -\sum_{i=1}^{N} m_i \sin\theta_i \, d\theta_i$$ 3. Torque on $i$-th dipole in field $B$ is $\tau_i = m_i B \sin\theta_i$. Total work done on all dipoles per cycle: $$\text{Hysteresis Loss} = \oint \left( \sum_{i=1}^{N} \tau_i \, d\theta_i \right) = \oint \left( \sum_{i=1}^{N} m_i B \sin\theta_i \, d\theta_i \right) = -\oint B \left( -\sum_{i=1}^{N} m_i \sin\theta_i \, d\theta_i \right)$$ $$\text{Hysteresis Loss} = -\oint B \, dM$$ 4. Substituting $H = \frac{B}{\mu_0} - M \implies dM = \frac{1}{\mu_0} dB - dH$: $$\text{Hysteresis Loss} = -\oint B \left( \frac{1}{\mu_0} dB - dH \right) = -\frac{1}{\mu_0} \oint B \, dB + \oint B \, dH$$ Since $B$ is a single-valued function along a closed path, $\oint B \, dB = 0$. 5. **Final Result:** $$\text{Hysteresis Loss} = \oint B \, dH = \text{Area of the } B\text{--}H \text{ Hysteresis Loop}$$ **Physical Significance:** The area enclosed by the $B\text{--}H$ loop represents the energy lost per unit volume per cycle as heat during cyclic magnetization.