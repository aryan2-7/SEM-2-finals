# Chapter 4: Magnetostatics - Complete Study Notes

## 1. Fundamentals of Magnetostatics & Lorentz Force
* **Electrostatics vs. Magnetostatics**:
  * Stationary charges produce a constant electric field ($\vec{E}$) $\implies$ **Electrostatics**.
  * Steady currents ($I = \frac{dq}{dt} = \text{constant}$) produce a constant magnetic field ($\vec{B}$) $\implies$ **Magnetostatics**.
* **Magnetic Force on a Moving Charge**:
  $$\vec{F}_{\text{mag}} = Q(\vec{v} \times \vec{B})$$
  * **Direction**: Always sideways (perpendicular to both velocity $\vec{v}$ and magnetic field $\vec{B}$).
  * **Maximum Force**: $F_{\text{max}} = QvB$ when $\vec{v} \perp \vec{B}$ ($\theta = 90^\circ$).
  * **Zero Force**: $F_{\text{mag}} = 0$ if $Q = 0$, $\vec{v} = 0$, or $\vec{v} \parallel \vec{B}$ ($\theta = 0^\circ \text{ or } 180^\circ$).
* **Magnetic Field ($\vec{B}$) Units & Definition**:
  * **SI Unit**: Tesla ($\text{T}$) or $\text{N}\cdot\text{A}^{-1}\cdot\text{m}^{-1}$ or $\text{Wb}\cdot\text{m}^{-2}$.
  * **CGS Unit**: $1\text{ Gauss (G)} = 10^{-4}\text{ T}$.
* **Lorentz Force**:
  $$\vec{F} = \vec{F}_e + \vec{F}_{\text{mag}} = Q[\vec{E} + (\vec{v} \times \vec{B})]$$
* **Work Done by Magnetic Force**:
  $$W_{\text{mag}} = \int \vec{F}_{\text{mag}} \cdot d\vec{l} = \int Q(\vec{v} \times \vec{B}) \cdot \vec{v}\,dt = 0$$
  *(Magnetic force does no work because $\vec{F}_{\text{mag}} \perp \vec{v}$ at all times)*.

---

## 2. Charge Motion in Electric & Magnetic Fields

### Cyclotron Motion (Helical Path)
When a charge $Q$ of mass $m$ moves at an angle $\theta$ to a uniform magnetic field $\vec{B}$:
* **Velocity Components**:
  * Parallel: $v_\parallel = v\cos\theta$ (causes linear drift along $\vec{B}$).
  * Perpendicular: $v_\perp = v\sin\theta$ (causes circular motion perpendicular to $\vec{B}$).
* **Radius of Circular Path**:
  $$Q v_\perp B = \frac{m v_\perp^2}{r} \implies r = \frac{m v_\perp}{QB} = \frac{mv\sin\theta}{QB}$$
* **Momentum**: $p = mv_\perp = QBr$.
* **Cyclotron Frequency**:
  $$f = \frac{\omega}{2\pi} = \frac{v_\perp}{2\pi r} = \frac{QB}{2\pi m}$$
  *(Frequency is independent of speed and radius)*.

### Cycloid Motion
When $\vec{E} = E\hat{k}$ and $\vec{B} = B\hat{i}$, a charge released from rest at the origin traces out a **cycloid** in the YZ-plane:
1. Electric field accelerates charge upward along the Z-axis.
2. Velocity triggers a magnetic force bending the path to the right (Y-axis).
3. The charge loops around, loses speed against the electric field, momentarily rests at the Y-axis, and repeats the cycle.

---

## 3. Magnetic Flux ($\Phi_m$)
* **Definition**: Total number of magnetic field lines passing perpendicularly through a surface $S$:
  $$\Phi_m = \int_S \vec{B} \cdot d\vec{a}$$
* For uniform $\vec{B}$ normal to surface $S$: $\Phi_m = BS$.

---

## 4. Current Densities & Continuity Equation

### Line, Surface, and Volume Currents
* **Line Current**: $I = \frac{dq}{dt} = \lambda v$
* **Surface Current Density ($\vec{K}$)**: Current per unit width perpendicular to flow:
  $$\vec{K} = \frac{d\vec{I}}{dl_\perp} = \sigma \vec{v} \quad [\text{Unit: A}\cdot\text{m}^{-1}]$$
* **Volume Current Density ($\vec{J}$)**: Current per unit area perpendicular to flow:
  $$\vec{J} = \frac{d\vec{I}}{da_\perp} = \rho \vec{v} \quad [\text{Unit: A}\cdot\text{m}^{-2}]$$

### Conversion Equivalences
$$I\,d\vec{l} \equiv \vec{K}\,da \equiv \vec{J}\,d\tau$$

### Continuity Equation
* **Mathematical Form**:
  $$\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0$$
* **Physical Significance**: Precise statement of local charge conservation.
* **For Steady Currents** ($\frac{\partial \rho}{\partial t} = 0$):
  $$\nabla \cdot \vec{J} = 0$$

---

## 5. Magnetic Force on Current Distributions
* **Line Current**: $\vec{F}_m = \int I (d\vec{l} \times \vec{B})$
* **Straight Wire of Length $l$**: $\vec{F} = I(\vec{l} \times \vec{B})$
* **Surface Current**: $\vec{F}_m = \int_S (\vec{K} \times \vec{B})\,da$
* **Volume Current**: $\vec{F}_m = \int_V (\vec{J} \times \vec{B})\,d\tau$

---

## 6. Biot-Savart Law & Standard Applications

### Biot-Savart Law Equations
$$\vec{B}(\vec{r}) = \frac{\mu_0 I}{4\pi} \int \frac{d\vec{l}' \times \hat{\boldsymbol{\tau}}}{\boldsymbol{\tau}^2} = \frac{\mu_0 I}{4\pi} \int \frac{d\vec{l}' \times \vec{\boldsymbol{\tau}}}{\boldsymbol{\tau}^3}$$
Where $\mu_0 = 4\pi \times 10^{-7}\text{ N}\cdot\text{A}^{-2}$ is the permeability of free space.
* **Generalized Form**:
  $$\vec{B} = \frac{\mu_0}{4\pi} \int_S \frac{\vec{K} \times \hat{\boldsymbol{\tau}}}{\boldsymbol{\tau}^2}\,da' = \frac{\mu_0}{4\pi} \int_V \frac{\vec{J} \times \hat{\boldsymbol{\tau}}}{\boldsymbol{\tau}^2}\,d\tau'$$

### Standard Derivations

#### 1. Straight Line Segment
Field at distance $r$ from a segment subtending angles $\theta_1$ and $\theta_2$:
$$\vec{B} = \frac{\mu_0 I}{4\pi r} (\sin\theta_2 - \sin\theta_1) \hat{\phi}$$
* **Symmetric Segment ($\theta_1 = -\theta_0, \theta_2 = \theta_0$)**: $\vec{B} = \frac{\mu_0 I}{2\pi r} \sin\theta_0 \hat{\phi}$
* **Infinitely Long Wire ($\theta_1 = -\frac{\pi}{2}, \theta_2 = +\frac{\pi}{2}$)**:
  $$\vec{B} = \frac{\mu_0 I}{2\pi r} \hat{\phi}$$

#### 2. Circular Current Loop
Field at distance $z$ on the axis of a circular loop of radius $R$:
$$\vec{B} = \frac{\mu_0 I R^2}{2(R^2 + z^2)^{3/2}} \hat{k}$$
* **For $N$ turns**: $\vec{B} = \frac{\mu_0 I R^2 N}{2(R^2 + z^2)^{3/2}} \hat{k}$
* **At Center ($z = 0$)**: $\vec{B} = \frac{\mu_0 I}{2R} \hat{k}$ (or $\frac{\mu_0 I N}{2R}\hat{k}$ for $N$ turns)

---

## 7. Divergence & Curl of Magnetic Field

### Divergence of $\vec{B}$ (No Magnetic Monopoles)
* **Differential Form**:
  $$\nabla \cdot \vec{B} = 0$$
* **Integral Form**:
  $$\oint_S \vec{B} \cdot d\vec{a} = 0$$
* **Physical Meaning**: Magnetic fields are strictly solenoidal (divergenceless); individual magnetic charges (monopoles) do not exist.

### Ampere's Law & Curl of $\vec{B}$
* **Integral Form**:
  $$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$$
* **Differential Form**:
  $$\nabla \times \vec{B} = \mu_0 \vec{J}$$

---

## 8. Applications of Ampere's Law

### Long Straight Wire
$$\oint \vec{B} \cdot d\vec{l} = B(2\pi s) = \mu_0 I \implies B = \frac{\mu_0 I}{2\pi s}$$

### Long Solenoid ($n$ turns/length)
Constructing a rectangular Amperian loop $abcda$ of length $l$:
$$\oint \vec{B} \cdot d\vec{l} = Bl = \mu_0 I_{\text{enc}} = \mu_0 (nlI) \implies B = \mu_0 n I$$
*(Field outside an ideal long solenoid is zero; internal field is uniform and axial)*.

### Long Cylindrical Wire of Radius $a$ Carrying Current $I$

#### Case A: Current Uniformly Distributed on Outer Surface
* **Outside ($r > a$)**: $B = \frac{\mu_0 I}{2\pi r}$
* **Inside ($r < a$)**: $Q_{\text{enc}} = 0 \implies B = 0$

#### Case B: Current Density Proportional to Axis Distance ($J = kr'$)
* **Finding Constant $k$**:
  $$I = \int_0^a (kr')(2\pi r'\,dr') = 2\pi k \frac{a^3}{3} \implies k = \frac{3I}{2\pi a^3}$$
* **Outside ($r > a$)**: $B = \frac{\mu_0 I}{2\pi r}$
* **Inside ($r < a$)**:
  $$I_{\text{enc}} = \int_0^r (kr')(2\pi r'\,dr') = \frac{I r^3}{a^3} \implies B = \frac{\mu_0 I r^2}{2\pi a^3}$$

---

## 9. Magnetic Vector Potential ($\vec{A}$)

### Definition & Gauge Choice
Since $\nabla \cdot \vec{B} = 0$, $\vec{B}$ can be expressed as the curl of a vector potential:
$$\vec{B} = \nabla \times \vec{A}$$
To specify $\vec{A}$ uniquely, we set the Coulomb gauge:
$$\nabla \cdot \vec{A} = 0$$

### Vector Poisson Equation & Solutions
Substituting $\vec{B} = \nabla \times \vec{A}$ into $\nabla \times \vec{B} = \mu_0 \vec{J}$:
$$\nabla(\nabla \cdot \vec{A}) - \nabla^2 \vec{A} = \mu_0 \vec{J} \implies \nabla^2 \vec{A} = -\mu_0 \vec{J}$$
* **Volume Current**: $\vec{A}(\vec{r}) = \frac{\mu_0}{4\pi} \int_V \frac{\vec{J}(\vec{r}')}{\boldsymbol{\tau}}\,d\tau'$
* **Surface Current**: $\vec{A}(\vec{r}) = \frac{\mu_0}{4\pi} \int_S \frac{\vec{K}(\vec{r}')}{\boldsymbol{\tau}}\,da'$
* **Line Current**: $\vec{A}(\vec{r}) = \frac{\mu_0 I}{4\pi} \int_L \frac{d\vec{l}'}{\boldsymbol{\tau}}$

### Magnetic Flux in Terms of $\vec{A}$
Using Stokes' Theorem:
$$\Phi_m = \int_S \vec{B} \cdot d\vec{a} = \int_S (\nabla \times \vec{A}) \cdot d\vec{a} = \oint_L \vec{A} \cdot d\vec{l}$$

---

## 10. Key Problem Derivations & Proofs

### Regular $n$-sided Polygon Loop
* **Angle Subtended by One Side**: $2\theta_0 = \frac{2\pi}{n} \implies \theta_0 = \frac{\pi}{n}$
* **Field Due to $n$ Sides at Center**:
  $$\vec{B} = n \left[ \frac{\mu_0 I}{4\pi R} \left(2\sin\frac{\pi}{n}\right) \right] \hat{k} = \frac{\mu_0 I}{2R} \left( \frac{n}{\pi} \sin\frac{\pi}{n} \right) \hat{k}$$
* **Limit $n \to \infty$ (Circle)**:
  $$\lim_{n \to \infty} \left( \frac{\sin(\pi/n)}{\pi/n} \right) = 1 \implies \vec{B} = \frac{\mu_0 I}{2R} \hat{k}$$

### Finite Solenoid on Axis
* Elemental current loop $dN = n\,dz$. Subtended angles from point $P$ range from $\theta_1$ to $\theta_2$:
  $$d\vec{B} = \frac{\mu_0 (n\,dz) I a^2}{2(a^2 + z^2)^{3/2}} \hat{k} = -\frac{\mu_0 n I}{2}\sin\theta\,d\theta \hat{k}$$
  $$\vec{B} = -\frac{\mu_0 n I}{2} \int_{\theta_1}^{\theta_2} \sin\theta\,d\theta \hat{k} = \frac{\mu_0 n I}{2}(\cos\theta_2 - \cos\theta_1)\hat{k}$$
* **Infinite Solenoid Limit ($\theta_1 = \pi, \theta_2 = 0$)**: $\vec{B} = \mu_0 n I \hat{k}$

### Vector Potential of an Infinite Solenoid
Using $\oint \vec{A} \cdot d\vec{l} = \Phi_{\text{enc}} \implies A(2\pi r) = \Phi_{\text{enc}}$:
* **Inside ($r < R$)**: $\Phi_{\text{enc}} = (\mu_0 n I)(\pi r^2) \implies \vec{A} = \frac{\mu_0 n I r}{2} \hat{\phi}$
* **Outside ($r > R$)**: $\Phi_{\text{enc}} = (\mu_0 n I)(\pi R^2) \implies \vec{A} = \frac{\mu_0 n I R^2}{2r} \hat{\phi}$

### Vector Potential of a Finite Straight Wire
Segment along Y-axis from $y_1$ to $y_2$, field point $P(0, 0, z)$:
$$\vec{A} = \frac{\mu_0 I}{4\pi} \int_{y_1}^{y_2} \frac{dy'}{\sqrt{y'^2 + z^2}} \hat{j} = \frac{\mu_0 I}{4\pi} \ln\left[ \frac{\sqrt{y_2^2 + z^2} + y_2}{\sqrt{y_1^2 + z^2} + y_1} \right] \hat{j}$$
Taking curl ($\vec{B} = \nabla \times \vec{A} = -\frac{\partial A_y}{\partial z}\hat{i}$) recovers:
$$\vec{B} = \frac{\mu_0 I}{4\pi z} (\sin\theta_2 - \sin\theta_1)\hat{i}$$

### Vector Potential in Uniform Magnetic Field ($\vec{B}$)
Show that $\vec{A} = -\frac{1}{2}(\vec{r} \times \vec{B})$ satisfies gauge and field conditions:
1. **Divergence**:
   $$\nabla \cdot \vec{A} = -\frac{1}{2} \left[ \vec{B} \cdot (\nabla \times \vec{r}) - \vec{r} \cdot (\nabla \times \vec{B}) \right] = 0$$
2. **Curl**:
   $$\nabla \times \vec{A} = -\frac{1}{2} \nabla \times (\vec{r} \times \vec{B}) = -\frac{1}{2} (-2\vec{B}) = \vec{B}$$