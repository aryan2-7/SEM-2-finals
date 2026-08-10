# Chapter 3: Electrostatic Field in Matter - Complete Study Notes

## 1. Electric Dipole & Dipole Moment
* **Electric Dipole Definition**: A pair of equal and opposite point charges ($+q$ and $-q$) separated by a small distance $d$. The midpoint between the charges is the dipole center.
* **Electric Dipole Moment ($\vec{p}$)**:
  $$\vec{p} = q\vec{d}$$
  * **Direction**: Points from the negative charge ($-q$) toward the positive charge ($+q$).
  * **Type & Units**: Vector quantity measured in coulomb-meters ($\text{C}\cdot\text{m}$).

---

## 2. Electric Potential and Field Due to a Short Dipole ($r \gg d$)
Consider a dipole along the z-axis centered at the origin, with $+q$ at $(0, 0, +\frac{d}{2})$ and $-q$ at $(0, 0, -\frac{d}{2})$.

### Separation Distance Approximations
* Distance to field point $P(x,y,z)$: $r = \sqrt{x^2 + y^2 + z^2}$.
* Separation distances from charges:
  $$z_+ = \sqrt{r^2 - zd + \frac{d^2}{4}}, \quad z_- = \sqrt{r^2 + zd + \frac{d^2}{4}}$$
* Applying binomial expansion for $r \gg d$:
  $$\frac{1}{z_+} \approx \frac{1}{r}\left(1 + \frac{zd}{2r^2}\right), \quad \frac{1}{z_-} \approx \frac{1}{r}\left(1 - \frac{zd}{2r^2}\right)$$

### Electric Potential ($V$) Derivation
* Net Potential:
  $$V(x,y,z) = \frac{q}{4\pi\epsilon_0} \left( \frac{1}{z_+} - \frac{1}{z_-} \right) = \frac{1}{4\pi\epsilon_0} \frac{qzd}{r^3} = \frac{1}{4\pi\epsilon_0} \frac{pz}{r^3}$$
* Coordinate Representations ($z = r\cos\theta$):
  * **Spherical Form**: $V(r, \theta) = \frac{1}{4\pi\epsilon_0} \frac{p\cos\theta}{r^2}$
  * **Coordinate-Free Vector Form**: $V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \frac{\vec{p} \cdot \hat{r}}{r^2} = \frac{1}{4\pi\epsilon_0} \frac{\vec{p} \cdot \vec{r}}{r^3}$

### Electric Field ($\vec{E} = -\nabla V$) Derivation
* **Cartesian/Component Method**:
  $$\vec{E} = -\frac{p}{4\pi\epsilon_0} \left[ z\nabla\left(\frac{1}{r^3}\right) + \frac{1}{r^3}\nabla z \right] = \frac{p}{4\pi\epsilon_0 r^3} \left( \frac{3z}{r}\hat{r} - \hat{k} \right) = \frac{p}{4\pi\epsilon_0 r^3} (3\cos\theta\,\hat{r} - \hat{k})$$
* **Spherical Polar Method**:
  $$\vec{E}(r,\theta) = -\left( \frac{\partial V}{\partial r}\hat{r} + \frac{1}{r}\frac{\partial V}{\partial\theta}\hat{\theta} + \frac{1}{r\sin\theta}\frac{\partial V}{\partial\phi}\hat{\phi} \right) = \frac{1}{4\pi\epsilon_0} \frac{p}{r^3} \left[ 2\cos\theta\,\hat{r} + \sin\theta\,\hat{\theta} \right]$$
* **Magnitude**:
  $$E = \frac{p}{4\pi\epsilon_0 r^3} \sqrt{3\cos^2\theta + 1}$$
* **Coordinate-Free Form Proof**:
  $$\vec{E}(\vec{r}) = -\nabla \left( \frac{1}{4\pi\epsilon_0} \frac{\vec{p} \cdot \vec{r}}{r^3} \right) = \frac{1}{4\pi\epsilon_0 r^3} \left[ 3(\vec{p} \cdot \hat{r})\hat{r} - \vec{p} \right]$$

### Special Angular Cases
* **Axial Point ($\theta = 0^\circ$)**: $V = \frac{1}{4\pi\epsilon_0} \frac{p}{r^2}$, $\quad \vec{E} = \frac{1}{4\pi\epsilon_0} \frac{2p}{r^3} \hat{r}$.
* **Equatorial Point ($\theta = 90^\circ$)**: $V = 0$, $\quad E = \frac{1}{4\pi\epsilon_0} \frac{p}{r^3}$.

---

## 3. Dipole in an External Electric Field
When a dipole $\vec{p}$ is placed in a uniform external field $\vec{E}$ at an angle $\theta$:

* **Net Force**:
  $$\vec{F}_{\text{net}} = \vec{F}_+ + \vec{F}_- = q\vec{E} + (-q\vec{E}) = 0$$
  *(Net translational force in a uniform field is zero)*.
* **Torque ($\vec{\tau}$)**:
  $$\vec{\tau} = \left(\frac{\vec{d}}{2} \times q\vec{E}\right) + \left(-\frac{\vec{d}}{2} \times -q\vec{E}\right) = q\vec{d} \times \vec{E} = \vec{p} \times \vec{E}$$
* **Potential Energy ($U$)**:
  * Work required to rotate dipole from $\theta_1$ to $\theta_2$:
    $$W = \int_{\theta_1}^{\theta_2} pE\sin\theta\,d\theta = -pE(\cos\theta_2 - \cos\theta_1)$$
  * Choosing reference zero potential energy at $\theta_1 = 90^\circ$ ($\frac{\pi}{2}$):
    $$U(\theta) = -pE\cos\theta = -\vec{p} \cdot \vec{E}$$
  * **Minimum Energy** (Stable Equilibrium at $\theta = 0^\circ$): $U_{\text{min}} = -pE$.
  * **Maximum Energy** (Unstable Equilibrium at $\theta = 180^\circ$): $U_{\text{max}} = +pE$.

---

## 4. Dielectrics & Atomic Polarizability ($\alpha$)
* **Dielectrics**: Nonconducting materials (insulators) without free charge carriers. Applied fields cause minor charge displacements without bulk flow.
* **Molecular Types**:
  * **Polar**: Non-coincident positive/negative charge centers; possess permanent dipole moments (e.g., $\text{H}_2\text{O}$, $\text{HCl}$).
  * **Nonpolar**: Coincident positive/negative charge centers; no permanent dipole moment (e.g., $\text{O}_2$, $\text{CO}_2$).

### Induced Dipole Moment & Polarizability
* An external field distorts electron clouds, inducing a dipole moment parallel to the field:
  $$\vec{p} = \alpha \vec{E}$$
  Where $\alpha$ is the **atomic polarizability**.
* **Units of $\alpha$**: $\text{F}\cdot\text{m}^2$ (Farad meter squared).

### Polarizability Model (Point Nucleus + Uniform Electron Sphere)
* Neutral atom: Nucleus $+q$ surrounded by electron cloud $-q$ of radius $a$.
* External field $\vec{E}$ shifts nucleus by distance $d$. At equilibrium, external field balances internal field $E_e$:
  $$E = E_e = \frac{1}{4\pi\epsilon_0} \frac{qd}{a^3} = \frac{1}{4\pi\epsilon_0} \frac{p}{a^3}$$
* Solved Induced Dipole & Polarizability:
  $$p = (4\pi\epsilon_0 a^3)E \implies \alpha = 4\pi\epsilon_0 a^3 = 3\epsilon_0 v$$
  *(Where $v = \frac{4}{3}\pi a^3$ is the atomic volume)*.

---

## 5. Polarization ($\vec{P}$) and Bound Charges

### Polarization ($\vec{P}$)
* **Definition**: Dipole moment per unit volume of polarized dielectric material:
  $$\vec{P} = \frac{d\vec{p}}{d\tau} \quad \implies \quad d\vec{p} = \vec{P} d\tau \quad [\text{Unit: C}\cdot\text{m}^{-2}]$$

### Physical Interpretation & Equations for Bound Charges
* **Bound Surface Charge ($\sigma_b$)**: Charge accumulation at the surfaces:
  $$\sigma_b = \vec{P} \cdot \hat{n}$$
  *(Uniform polarization produces surface bound charge only)*.
* **Bound Volume Charge ($\rho_b$)**: Accumulation inside the dielectric due to non-uniform polarization:
  $$\int_V \rho_b\, d\tau = -\oint_S (\vec{P} \cdot \hat{n})\, da = -\int_V (\nabla \cdot \vec{P})\, d\tau \implies \rho_b = -\nabla \cdot \vec{P}$$

---

## 6. Gauss's Law in the Presence of Dielectrics & Electric Displacement ($\vec{D}$)
* Total volume charge density is the sum of free charge and bound charge: $\rho = \rho_f + \rho_b$.
* Substituting into Gauss's Law:
  $$\nabla \cdot \vec{E} = \frac{\rho_f + \rho_b}{\epsilon_0} = \frac{\rho_f - \nabla \cdot \vec{P}}{\epsilon_0}$$
  $$\nabla \cdot (\epsilon_0 \vec{E} + \vec{P}) = \rho_f$$

### Electric Displacement Vector ($\vec{D}$)
$$\vec{D} \equiv \epsilon_0 \vec{E} + \vec{P}$$

* **Gauss's Law in Terms of Free Charge**:
  * **Differential Form**: $\nabla \cdot \vec{D} = \rho_f$
  * **Integral Form**: $\oint_S \vec{D} \cdot d\vec{a} = Q_{f_{\text{enc}}}$

### Solved Example: Insulated Wire
* Line charge $\lambda$ insulated by rubber out to radius $a$:
  $$D(2\pi s L) = \lambda L \implies \vec{D} = \frac{\lambda}{2\pi s} \hat{s}$$
  $$\vec{E} = \frac{\vec{D}}{\epsilon_0} = \frac{\lambda}{2\pi\epsilon_0 s} \hat{s}$$

---

## 7. Linear Dielectrics: Susceptibility, Permittivity, and Dielectric Constant
In linear dielectrics, polarization is proportional to the electric field:
$$\vec{P} = \epsilon_0 \chi_e \vec{E}$$
Where $\chi_e$ is the dimensionless **electric susceptibility**.

### Field Relationships
* **Electric Displacement**:
  $$\vec{D} = \epsilon_0 \vec{E} + \epsilon_0 \chi_e \vec{E} = \epsilon_0(1 + \chi_e)\vec{E} = \epsilon \vec{E}$$
* **Permittivity of the Medium ($\epsilon$)**:
  $$\epsilon = \epsilon_0(1 + \chi_e)$$
* **Relative Permittivity / Dielectric Constant ($K$ or $\epsilon_r$)**:
  $$K = \epsilon_r = \frac{\epsilon}{\epsilon_0} = 1 + \chi_e$$
* **Bound Charge Relation to Free Charge**:
  $$\rho_b = -\nabla \cdot \vec{P} = -\nabla \cdot \left( \epsilon_0 \chi_e \frac{\vec{D}}{\epsilon_0(1 + \chi_e)} \right) = -\left( \frac{\chi_e}{1 + \chi_e} \right)\rho_f$$

### Solved Example: Metal Sphere in Dielectric Shell
* Metal sphere of radius $a$ carrying charge $Q$, surrounded by linear dielectric of permittivity $\epsilon$ out to radius $b$:
  1. $\vec{D} = \frac{Q}{4\pi r^2}\hat{r}$ for all $r > a$.
  2. Electric fields:
     $$\vec{E} = \begin{cases} \frac{Q}{4\pi\epsilon_0 r^2}\hat{r}, & r > b \\ \frac{Q}{4\pi\epsilon r^2}\hat{r}, & a < r < b \\ 0, & r < a \end{cases}$$
  3. Potential at center relative to infinity:
     $$V = -\int_\infty^b E\,dr - \int_b^a E\,dr - \int_a^0 0\,dr = \frac{Q}{4\pi}\left( \frac{1}{\epsilon_0 b} + \frac{1}{\epsilon a} - \frac{1}{\epsilon b} \right)$$

---

## 8. Microscopic Fields & The Clausius-Mossotti Equation

### Electric Field at Center of a Spherical Cavity
For a spherical cavity of radius $r$ cut inside a medium uniformly polarized along $\vec{P}$:
* Surface bound charge induced on cavity walls: $\sigma_b = -\vec{P} \cdot \hat{n} = -P\cos\theta$.
* Elemental field contribution at center:
  $$dE_C = \frac{P}{4\pi\epsilon_0}\cos^2\theta\sin\theta\,d\theta\,d\phi$$
* Integrating over cavity surface:
  $$E_C = \frac{P}{4\pi\epsilon_0} \int_0^\pi \cos^2\theta\sin\theta\,d\theta \int_0^{2\pi} d\phi = \frac{P}{3\epsilon_0}$$
* **Cavity Field Vector**:
  $$\vec{E}_C = \frac{\vec{P}}{3\epsilon_0}$$

### Clausius-Mossotti Equation Derivation
* **Molecular Field ($\vec{E}_m$)**: Net field experienced by an individual molecule at cavity center:
  $$\vec{E}_m = \vec{E} + \vec{E}_C = \vec{E} + \frac{\vec{P}}{3\epsilon_0}$$
* Expressing in terms of molecular polarizability $\alpha_m$ ($\vec{p}_m = \alpha_m \vec{E}_m$):
  $$\vec{P} = N\vec{p}_m = N\alpha_m \vec{E}_m = N\alpha_m \left( \frac{\vec{P}}{\chi_e \epsilon_0} + \frac{\vec{P}}{3\epsilon_0} \right)$$
* Dividing out $\vec{P}$ and solving for $\alpha_m$:
  $$1 = N\alpha_m \left( \frac{\chi_e + 3}{3\epsilon_0 \chi_e} \right) \implies \alpha_m = \frac{3\epsilon_0}{N} \left( \frac{\chi_e}{\chi_e + 3} \right)$$
* Substituting $\chi_e = K - 1$ gives the **Clausius-Mossotti Relation**:
  $$\alpha_m = \frac{3\epsilon_0}{N} \left( \frac{K - 1}{K + 2} \right)$$
  *(Bridges the macroscopic dielectric constant $K$ with microscopic molecular polarizability $\alpha_m$)*.