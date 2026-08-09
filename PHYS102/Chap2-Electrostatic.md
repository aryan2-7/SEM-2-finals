# Chapter 2: Electrostatic Field - Complete Study Notes

## 1. Fundamental Properties of Electric Charge ($q$)
* **Definition**: Charge is a fundamental property of elementary particles comprising matter. It is a scalar quantity measured in coulombs ($\text{C}$).
* **Kinds of Charge**: Positive and Negative. Like charges repel; unlike charges attract.
* **Core Properties**:
  * **Quantized**: $q = \pm ne$, where $n \in \mathbb{Z}^+$ and $e = 1.6 \times 10^{-19}\text{ C}$ (elementary charge).
  * **Conserved**: Net charge of an isolated system remains constant.
  * **Additive**: Total charge is the algebraic sum of individual charges.
  * **Invariant**: Charge is independent of the body's speed.

---

## 2. Coulomb's Law & Principle of Superposition
* **Coulomb's Law**: The force exerted on a test charge $Q$ by a stationary point charge $q$ separated by vector $\vec{\boldsymbol{\tau}}$ is:
  $$\vec{F} = \frac{1}{4\pi\epsilon_0} \frac{qQ}{\boldsymbol{\tau}^2} \hat{\boldsymbol{\tau}}$$
  Where $\epsilon_0 = 8.85 \times 10^{-12}\text{ C}^2\cdot\text{N}^{-1}\cdot\text{m}^{-2}$ is the permittivity of free space.
* **Superposition Principle**: For $n$ source charges $q_1, q_2, \dots, q_n$, the net force on $Q$ is the vector sum of individual forces:
  $$\vec{F} = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n = \frac{Q}{4\pi\epsilon_0} \sum_{i=1}^n \frac{q_i}{\boldsymbol{\tau}_i^2} \hat{\boldsymbol{\tau}}_i$$

---

## 3. The Electric Field ($\vec{E}$)
* **Definition**: Force per unit positive test charge $Q$:
  $$\vec{E} = \frac{\vec{F}}{Q} \quad \implies \quad \vec{F} = Q\vec{E} \quad [\text{Unit: N}\cdot\text{C}^{-1}\text{ or V}\cdot\text{m}^{-1}]$$
* **Point Charge Field**:
  $$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0} \frac{q}{\boldsymbol{\tau}^2} \hat{\boldsymbol{\tau}}$$
* **Line Integral & Conservative Nature**:
  * The line integral of $\vec{E}$ from point $a$ to $b$ due to a point charge is:
    $$\int_a^b \vec{E} \cdot \vec{dl} = \frac{q}{4\pi\epsilon_0} \left[ \frac{1}{r_a} - \frac{1}{r_b} \right]$$
  * Path-independent; for any closed loop:
    $$\oint \vec{E} \cdot \vec{dl} = 0$$
* **Curl of Electrostatic Field**:
  * Using Stokes' Theorem:
    $$\oint \vec{E} \cdot \vec{dl} = 0 \implies \nabla \times \vec{E} = 0$$
  * Confirming that electrostatic fields are strictly irrotational.

---

## 4. Continuous Charge Distributions
* **Field Equations**:
  * **Line Charge** Density $\lambda = \frac{dq}{dl'}$ ($\text{C}\cdot\text{m}^{-1}$):
    $$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\lambda(\vec{r}')\,dl'}{\boldsymbol{\tau}^2} \hat{\boldsymbol{\tau}}$$
  * **Surface Charge** Density $\sigma = \frac{dq}{da'}$ ($\text{C}\cdot\text{m}^{-2}$):
    $$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\sigma(\vec{r}')\,da'}{\boldsymbol{\tau}^2} \hat{\boldsymbol{\tau}}$$
  * **Volume Charge** Density $\rho = \frac{dq}{d\tau'}$ ($\text{C}\cdot\text{m}^{-3}$):
    $$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\vec{r}')\,d\tau'}{\boldsymbol{\tau}^2} \hat{\boldsymbol{\tau}}$$

---

## 5. Standard Electric Field Derivations & Solved Examples

### Two Equal Point Charges
* Distance $z$ above the midpoint of two equal charges $q$ separated by $d$:
  $$\vec{E} = \frac{1}{4\pi\epsilon_0} \frac{2qz}{\left( \frac{d^2}{4} + z^2 \right)^{3/2}} \hat{k}$$
  * Limit $z \gg d$: $\vec{E} \approx \frac{1}{4\pi\epsilon_0} \frac{2q}{z^2} \hat{k}$ (behaves as a single point charge of magnitude $2q$).

### Finite Straight Line Charge
* Distance $z$ above the midpoint of a line segment of length $2L$ with uniform charge $\lambda$:
  $$\vec{E} = \frac{1}{4\pi\epsilon_0} \frac{2\lambda L}{z\sqrt{z^2 + L^2}} \hat{k}$$
  * Limit $L \to \infty$ (Infinite Wire): $\vec{E} = \frac{1}{4\pi\epsilon_0} \frac{2\lambda}{z} \hat{k}$
  * Limit $z \gg L$: $\vec{E} \approx \frac{1}{4\pi\epsilon_0} \frac{q}{z^2} \hat{k}$ where $q = 2\lambda L$.

### Circular Ring of Charge
* Distance $z$ above the center of a circular loop of radius $r$ carrying uniform charge $\lambda$:
  $$\vec{E} = \frac{1}{4\pi\epsilon_0} \frac{qz}{(r^2 + z^2)^{3/2}} \hat{k} \quad (q = 2\pi r \lambda)$$
  * Limit $z \gg r$: $\vec{E} \approx \frac{1}{4\pi\epsilon_0} \frac{q}{z^2} \hat{k}$.

### Flat Circular Disk
* Distance $z$ above the center of a disk of radius $R$ carrying uniform surface charge $\sigma$:
  $$\vec{E} = \frac{\sigma}{2\epsilon_0} \left[ 1 - \frac{z}{\sqrt{R^2 + z^2}} \right] \hat{k}$$
  * Limit $R \to \infty$ (Infinite Sheet): $\vec{E} = \frac{\sigma}{2\epsilon_0} \hat{k}$
  * Limit $z \gg R$: $\vec{E} \approx \frac{1}{4\pi\epsilon_0} \frac{q}{z^2} \hat{k}$ where $q = \sigma(4\pi R^2)$.

---

## 6. Electric Field Lines & Electric Flux
* **Field Line Rules**:
  1. Originate on positive charges and terminate on negative charges.
  2. Number of lines is proportional to charge magnitude.
  3. Tangent at any point gives the direction of $\vec{E}$.
  4. Field lines never intersect.
* **Electric Flux ($\Phi_E$)**: Total measure of field lines passing through surface $S$:
  $$\Phi_E = \int_S \vec{E} \cdot d\vec{a} \quad [\text{Unit: N}\cdot\text{m}^2\cdot\text{C}^{-1}]$$

---

## 7. Gauss's Law
* **Integral Form**: Net flux through any enclosed Gaussian surface equals $\frac{1}{\epsilon_0}$ times enclosed charge:
  $$\oint_S \vec{E} \cdot d\vec{a} = \frac{Q_{\text{enc}}}{\epsilon_0}$$
* **Differential Form**: Applying Divergence Theorem:
  $$\int_V (\nabla \cdot \vec{E})\,d\tau = \frac{1}{\epsilon_0} \int_V \rho\,d\tau \implies \nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$$

### Applications of Gauss's Law

#### 1. Uniformly Charged Spherical Shell (Radius $R$, Charge Density $\sigma$)
* **Outside** ($r > R$): $E = \frac{1}{4\pi\epsilon_0} \frac{q}{r^2} = \frac{\sigma R^2}{\epsilon_0 r^2}$
* **On Surface** ($r = R$): $E = \frac{\sigma}{\epsilon_0} = \frac{1}{4\pi\epsilon_0} \frac{q}{R^2}$
* **Inside** ($r < R$): $Q_{\text{enc}} = 0 \implies E = 0$

#### 2. Uniformly Charged Solid Sphere (Radius $R$, Volume Density $\rho$)
* **Outside** ($r > R$): $E = \frac{1}{4\pi\epsilon_0} \frac{Q}{r^2} = \frac{\rho R^3}{3\epsilon_0 r^2}$
* **Inside** ($r < R$): $E = \frac{\rho r}{3\epsilon_0} = \frac{1}{4\pi\epsilon_0} \frac{Q r}{R^3}$ (Varies linearly with $r$; $E = 0$ at center $r=0$)

#### 3. Sphere with Non-Uniform Charge Density ($\rho = kr$)
* **Outside** ($r > R$): $E = \frac{k R^4}{4\epsilon_0 r^2}$
* **Inside** ($r < R$): $E = \frac{k r^2}{4\epsilon_0}$

---

## 8. Electric Potential ($V$) & Fundamental Equations
* **Relation to Field**: Because $\nabla \times \vec{E} = 0$, $\vec{E}$ can be represented as the gradient of a scalar potential:
  $$\vec{E} = -\nabla V$$
* **Potential Difference**:
  $$V(b) - V(a) = -\int_a^b \vec{E} \cdot \vec{dl}$$
* **Poisson's and Laplace's Equations**:
  * Substituting $\vec{E} = -\nabla V$ into $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$:
    $$\nabla^2 V = -\frac{\rho}{\epsilon_0} \quad \text{(Poisson's Equation)}$$
  * In charge-free regions ($\rho = 0$):
    $$\nabla^2 V = 0 \quad \text{(Laplace's Equation)}$$

### Potential Representations
* **Point Charge**: $V(r) = \frac{1}{4\pi\epsilon_0} \frac{q}{r}$
* **Discrete System**: $V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \sum_{i=1}^n \frac{q_i}{\boldsymbol{\tau}_i}$
* **Continuous Charge**: $V(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int \frac{dq}{\boldsymbol{\tau}}$

### Potential of a Uniformly Charged Spherical Shell (Radius $R$, Surface Density $\sigma$)
* **Outside** ($z > R$): $V_{\text{out}} = \frac{\sigma R^2}{\epsilon_0 z} = \frac{q}{4\pi\epsilon_0 z}$
* **Inside** ($z < R$): $V_{\text{in}} = \frac{\sigma R}{\epsilon_0} = \frac{q}{4\pi\epsilon_0 R}$ (Constant potential inside)

---

## 9. Work & Energy in Electrostatics

### Work Done Moving Charges
* Work required to move test charge $Q$ from $a$ to $b$:
  $$W = Q[V(b) - V(a)]$$
* Bringing $Q$ from infinity to point $\vec{r}$:
  $$W = Q V(\vec{r})$$

### Energy of Point Charge Assembly
* Total work required to assemble $n$ point charges:
  $$W = \frac{1}{4\pi\epsilon_0} \sum_{i=1}^n \sum_{j > i}^n \frac{q_i q_j}{r_{ij}} = \frac{1}{2} \sum_{i=1}^n q_i V(\vec{r}_i)$$

### Energy of Continuous Charge Distributions
* Volume distribution form:
  $$W = \frac{1}{2} \int_V \rho V \,d\tau$$
* Field form (integrated over all space):
  $$W = \frac{\epsilon_0}{2} \int_{\text{all space}} E^2 \,d\tau = \int_{\text{all space}} u_e \,d\tau$$
  Where $u_e = \frac{\epsilon_0}{2} E^2$ is the **electrostatic energy density** ($\text{J}\cdot\text{m}^{-3}$).

### System Energy Examples
* **Uniformly Charged Shell**:
  $$W = \frac{1}{4\pi\epsilon_0} \frac{q^2}{2R}$$
* **Uniformly Charged Solid Sphere**:
  $$W = \frac{3}{5} \left( \frac{1}{4\pi\epsilon_0} \frac{q^2}{R} \right) = \frac{6}{5} \left( \frac{1}{4\pi\epsilon_0} \frac{q^2}{2R} \right)$$

---

## 10. Conductors and Insulators

### Material Classifications
* **Conductors**: Materials containing abundant free charge carriers (electrons) that move freely under external electric fields.
* **Insulators (Dielectrics)**: Materials with charges tightly bound to constituent molecules; experience slight spatial shifts under external fields without escaping.
* **Perfect Conductor**: Material containing an infinite supply of unrestricted free charges.

### Key Electrostatic Properties of Conductors
1. **$\vec{E} = 0$ Inside a Conductor**: External fields induce surface charge separation that completely cancels the internal field.
2. **$\rho = 0$ Inside a Conductor**: By Gauss's Law ($\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$), zero field implies zero volume charge density inside.
3. **Net Charge Resides on the Surface**: Mutual Coulomb repulsion forces excess charge to the outer boundary.
4. **Conductors are Equipotentials**: $V(a) - V(b) = -\int_a^b \vec{E} \cdot \vec{dl} = 0 \implies V(a) = V(b)$ everywhere inside and on the surface.
5. **$\vec{E}$ is Normal to the Surface Just Outside**: Any parallel component would force charge movement across the surface, violating static equilibrium.