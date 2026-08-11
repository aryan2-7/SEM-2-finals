# PHYS102 Complete Formula Sheet
*All key equations from Chapters 1–9, formatted for one-stop revision.*

---

## Chapter 1: Vector Analysis

### 1. Vector Basics & Products
* **Magnitude**: $A = \sqrt{A_x^2 + A_y^2 + A_z^2}$
* **Position / Displacement / Separation Vectors**:
  $$\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}, \qquad \vec{dl} = dx\hat{i} + dy\hat{j} + dz\hat{k}, \qquad \vec{\boldsymbol{\tau}} = \vec{r} - \vec{r}' = (x-x')\hat{i} + (y-y')\hat{j} + (z-z')\hat{k}$$
* **Resultant of Two Vectors** ($\theta$ between $\vec{P}$ and $\vec{Q}$):
  $$R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}, \qquad \tan\beta = \frac{Q\sin\theta}{P + Q\cos\theta}$$
* **Dot Product**: $\vec{A} \cdot \vec{B} = AB\cos\theta = A_xB_x + A_yB_y + A_zB_z$
  * Parallel: $\vec{A}\cdot\vec{B} = AB$; Perpendicular: $\vec{A}\cdot\vec{B} = 0$; Self: $\vec{E}\cdot\vec{E} = E^2$
* **Cross Product**: $\vec{A} \times \vec{B} = AB\sin\theta\,\hat{n}$
  $$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$$
  * Properties: $\vec{A}\times\vec{B} = -\vec{B}\times\vec{A}$; magnitude = parallelogram area

### 2. Triple Products
* **Scalar Triple**: $\vec{A} \cdot (\vec{B} \times \vec{C}) = \begin{vmatrix} A_x & A_y & A_z \\ B_x & B_y & B_z \\ C_x & C_y & C_z \end{vmatrix}$ (volume of parallelepiped)
* **Vector Triple (BAC-CAB)**: $\vec{A} \times (\vec{B} \times \vec{C}) = \vec{B}(\vec{A} \cdot \vec{C}) - \vec{C}(\vec{A} \cdot \vec{B})$

### 3. Vector Calculus
* **Del Operator**: $\nabla = \hat{i}\frac{\partial}{\partial x} + \hat{j}\frac{\partial}{\partial y} + \hat{k}\frac{\partial}{\partial z}$
* **Gradient**: $\nabla T = \frac{\partial T}{\partial x}\hat{i} + \frac{\partial T}{\partial y}\hat{j} + \frac{\partial T}{\partial z}\hat{k}$
* **Divergence**: $\nabla \cdot \vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}$
* **Curl**: $\nabla \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ v_x & v_y & v_z \end{vmatrix}$
* **Laplacian**: $\nabla^2 T = \frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} + \frac{\partial^2 T}{\partial z^2}$
* **Vector Laplacian**: $\nabla^2 \vec{v} = (\nabla^2 v_x)\hat{i} + (\nabla^2 v_y)\hat{j} + (\nabla^2 v_z)\hat{k}$
* **Second-Derivative Combinations**: $\nabla\cdot(\nabla T)$, $\nabla\times(\nabla T) = 0$, $\nabla(\nabla\cdot\vec{v})$, $\nabla\cdot(\nabla\times\vec{v}) = 0$, $\nabla\times(\nabla\times\vec{v})$
* **Null Identities**: $\nabla \times (\nabla T) = 0, \qquad \nabla \cdot (\nabla \times \vec{v}) = 0$

### 3b. Product Rules
* **Gradient**: $\nabla(fg) = f\nabla g + g\nabla f$
* **Divergence**: $\nabla\cdot(f\vec{A}) = f(\nabla\cdot\vec{A}) + \vec{A}\cdot(\nabla f)$, $\quad\nabla\cdot(\vec{A}\times\vec{B}) = \vec{B}\cdot(\nabla\times\vec{A}) - \vec{A}\cdot(\nabla\times\vec{B})$
* **Curl**: $\nabla\times(f\vec{A}) = f(\nabla\times\vec{A}) - \vec{A}\times(\nabla f)$

### 4. Fundamental Theorems
* **Gradient Theorem**: $\int_a^b (\nabla f) \cdot \vec{dl} = f(b) - f(a)$, $\quad\oint (\nabla f)\cdot\vec{dl} = 0$
* **Gauss's (Divergence) Theorem**: $\int_V (\nabla \cdot \vec{v})\,d\tau = \oint_S \vec{v} \cdot d\vec{a}$
* **Stokes' Theorem**: $\int_S (\nabla \times \vec{v}) \cdot d\vec{a} = \oint_C \vec{v} \cdot \vec{dl}$
* **Helmholtz Theorem**: $\vec{F} = \nabla V + \nabla \times \vec{A}$

### 5. Integrals & Coordinates
* **Line / Surface / Volume**: $\int_L \vec{F}\cdot\vec{dl}, \quad \int_S \vec{F}\cdot d\vec{a}, \quad \int_V T\,d\tau$
* **Spherical Elements**: $dl_r = dr, \quad dl_\theta = r\,d\theta, \quad dl_\phi = r\sin\theta\,d\phi$
  $$d\tau = r^2\sin\theta\,dr\,d\theta\,d\phi, \qquad da = r^2\sin\theta\,d\theta\,d\phi$$
* **Key Identities**: $\nabla\left(\frac{1}{r}\right) = -\frac{\hat{r}}{r^2}, \qquad \nabla(r^n) = nr^{n-1}\hat{r}$

---

## Chapter 2: Electrostatic Field

* **Quantization**: $q = \pm ne, \qquad e = 1.6 \times 10^{-19}\text{ C}$
* **Coulomb's Law**: $\vec{F} = \frac{1}{4\pi\epsilon_0} \frac{qQ}{\boldsymbol{\tau}^2}\hat{\boldsymbol{\tau}}, \qquad \epsilon_0 = 8.85 \times 10^{-12}\text{ F/m}$
* **Superposition Principle**: $\vec{F} = \frac{Q}{4\pi\epsilon_0}\sum_{i=1}^n \frac{q_i}{\boldsymbol{\tau}_i^2}\hat{\boldsymbol{\tau}}_i$
* **Electric Field**: $\vec{E} = \frac{\vec{F}}{Q} = \frac{1}{4\pi\epsilon_0}\frac{q}{\boldsymbol{\tau}^2}\hat{\boldsymbol{\tau}}$
* **Conservative Field**: $\oint \vec{E}\cdot\vec{dl} = 0 \iff \nabla \times \vec{E} = 0$
* **Line Integral of $\vec{E}$** (point charge): $\int_a^b \vec{E}\cdot\vec{dl} = \frac{q}{4\pi\epsilon_0}\left[\frac{1}{r_a} - \frac{1}{r_b}\right]$

### 1. Field of Continuous Distributions
* **Line**: $\vec{E} = \frac{1}{4\pi\epsilon_0}\int\frac{\lambda\,dl'}{\boldsymbol{\tau}^2}\hat{\boldsymbol{\tau}}$
* **Surface**: $\vec{E} = \frac{1}{4\pi\epsilon_0}\int\frac{\sigma\,da'}{\boldsymbol{\tau}^2}\hat{\boldsymbol{\tau}}$
* **Volume**: $\vec{E} = \frac{1}{4\pi\epsilon_0}\int\frac{\rho\,d\tau'}{\boldsymbol{\tau}^2}\hat{\boldsymbol{\tau}}$

### 2. Standard Results (on axis)
* **Two equal charges** (sep. $d$): $E = \frac{1}{4\pi\epsilon_0}\frac{2qz}{(d^2/4 + z^2)^{3/2}}$
* **Finite line** ($2L$): $E = \frac{1}{4\pi\epsilon_0}\frac{2\lambda L}{z\sqrt{z^2+L^2}}$
* **Infinite wire**: $E = \frac{2\lambda}{4\pi\epsilon_0 z} = \frac{\lambda}{2\pi\epsilon_0 z}$
* **Circular ring**: $E = \frac{1}{4\pi\epsilon_0}\frac{qz}{(R^2+z^2)^{3/2}}$
* **Charged disk**: $E = \frac{\sigma}{2\epsilon_0}\left[1 - \frac{z}{\sqrt{R^2+z^2}}\right]$
* **Infinite sheet**: $E = \frac{\sigma}{2\epsilon_0}$
* **Far-field limit** ($z \gg $ size): $E \approx \frac{1}{4\pi\epsilon_0}\frac{q}{z^2}$

### 3. Flux & Gauss's Law
* **Electric Flux**: $\Phi_E = \int_S \vec{E}\cdot d\vec{a}$
* **Integral**: $\oint_S \vec{E}\cdot d\vec{a} = \frac{Q_{\text{enc}}}{\epsilon_0}$
* **Differential**: $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$

### 4. Gauss's Law Applications
| Configuration | Outside ($r>R$) | Inside ($r<R$) |
|---|---|---|
| Spherical Shell ($\sigma$) | $E = \frac{\sigma R^2}{\epsilon_0 r^2}$ | $E = 0$ |
| Solid Sphere ($\rho$) | $E = \frac{\rho R^3}{3\epsilon_0 r^2}$ | $E = \frac{\rho r}{3\epsilon_0}$ |
| Non-uniform ($\rho = kr$) | $E = \frac{kR^4}{4\epsilon_0 r^2}$ | $E = \frac{kr^2}{4\epsilon_0}$ |

### 5. Electric Potential
* **Field–Potential**: $\vec{E} = -\nabla V, \qquad V(b)-V(a) = -\int_a^b\vec{E}\cdot\vec{dl}$
* **Poisson**: $\nabla^2 V = -\frac{\rho}{\epsilon_0}$, **Laplace**: $\nabla^2 V = 0$
* **Point charge**: $V = \frac{1}{4\pi\epsilon_0}\frac{q}{r}$
* **Discrete system**: $V(\vec{r}) = \frac{1}{4\pi\epsilon_0}\sum_{i=1}^n\frac{q_i}{\boldsymbol{\tau}_i}$
* **Continuous**: $V(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int\frac{dq}{\boldsymbol{\tau}}$
* **Spherical shell**: $V_{\text{out}} = \frac{q}{4\pi\epsilon_0 z}, \qquad V_{\text{in}} = \frac{q}{4\pi\epsilon_0 R}$ (constant)

### 6. Work & Energy
* **Work**: $W = Q[V(b)-V(a)] = QV(\vec{r})$ (from infinity)
* **Point assembly**: $W = \frac{1}{2}\sum_{i} q_i V(\vec{r}_i)$
* **Continuous**: $W = \frac{1}{2}\int \rho V\,d\tau = \frac{\epsilon_0}{2}\int_{\text{space}} E^2\,d\tau$
* **Energy density**: $u_e = \frac{\epsilon_0}{2}E^2$
* **Shell**: $W = \frac{1}{4\pi\epsilon_0}\frac{q^2}{2R}$, **Solid sphere**: $W = \frac{3}{5}\cdot\frac{1}{4\pi\epsilon_0}\frac{q^2}{R}$

---

## Chapter 3: Electrostatic Field in Matter

### 1. Dipole
* **Dipole moment**: $\vec{p} = q\vec{d}$ (– to +)
* **Potential** ($r \gg d$, dipole along $z$): $V = \frac{1}{4\pi\epsilon_0}\frac{qzd}{r^3} = \frac{1}{4\pi\epsilon_0}\frac{pz}{r^3} = \frac{1}{4\pi\epsilon_0}\frac{p\cos\theta}{r^2} = \frac{1}{4\pi\epsilon_0}\frac{\vec{p}\cdot\hat{r}}{r^2}$
* **Field (spherical)**: $\vec{E} = \frac{p}{4\pi\epsilon_0 r^3}\left[2\cos\theta\,\hat{r} + \sin\theta\,\hat{\theta}\right]$
* **Field (vector form)**: $\vec{E} = \frac{1}{4\pi\epsilon_0 r^3}\left[3(\vec{p}\cdot\hat{r})\hat{r} - \vec{p}\right]$
* **Magnitude**: $E = \frac{p}{4\pi\epsilon_0 r^3}\sqrt{3\cos^2\theta + 1}$
* **Axial** ($\theta=0$): $E = \frac{2p}{4\pi\epsilon_0 r^3}, \qquad$ **Equatorial** ($\theta=90°$): $E = \frac{p}{4\pi\epsilon_0 r^3}$

### 2. Dipole in External Field
* **Net force**: $\vec{F}_{\text{net}} = 0$ (uniform field)
* **Torque**: $\vec{\tau} = \vec{p} \times \vec{E}$
* **Work to rotate** (from $\theta_1$ to $\theta_2$): $W = \int_{\theta_1}^{\theta_2} pE\sin\theta\,d\theta = -pE(\cos\theta_2 - \cos\theta_1)$
* **Potential Energy**: $U = -\vec{p}\cdot\vec{E} = -pE\cos\theta$ (zero ref. at $\theta = 90°$)
  * Stable ($\theta=0$): $U_{\text{min}} = -pE$; Unstable ($\theta=180°$): $U_{\text{max}} = +pE$

### 3. Polarizability
* **Induced dipole**: $\vec{p} = \alpha\vec{E}$
* **Atomic polarizability**: $\alpha = 4\pi\epsilon_0 a^3 = 3\epsilon_0 v$ $\quad$ (units: $\text{F·m}^2$)

### 4. Polarization & Bound Charges
* **Polarization**: $\vec{P} = \frac{d\vec{p}}{d\tau}$ $\quad$ (units: $\text{C/m}^2$)
* **Bound surface charge**: $\sigma_b = \vec{P}\cdot\hat{n}$
* **Bound volume charge**: $\rho_b = -\nabla\cdot\vec{P}$

### 5. Electric Displacement ($\vec{D}$)
* $\vec{D} = \epsilon_0\vec{E} + \vec{P}$
* **Gauss's Law in matter**: $\nabla\cdot\vec{D} = \rho_f, \qquad \oint_S\vec{D}\cdot d\vec{a} = Q_{f,\text{enc}}$
* **Wire example**: $\vec{D} = \frac{\lambda}{2\pi s}\hat{s}, \qquad \vec{E} = \frac{\lambda}{2\pi\epsilon_0 s}\hat{s}$

### 6. Linear Dielectrics
* $\vec{P} = \epsilon_0\chi_e\vec{E}$
* $\vec{D} = \epsilon\vec{E}, \qquad \epsilon = \epsilon_0(1+\chi_e)$
* **Dielectric constant**: $K = \epsilon_r = \frac{\epsilon}{\epsilon_0} = 1 + \chi_e$
* **Bound vs free**: $\rho_b = -\frac{\chi_e}{1+\chi_e}\rho_f$
* **Metal sphere in dielectric**: $\vec{D} = \frac{Q}{4\pi r^2}\hat{r}$ (all $r>a$); $\vec{E}$ in free space / dielectric as given in notes
  $$V = \frac{Q}{4\pi}\left(\frac{1}{\epsilon_0 b} + \frac{1}{\epsilon a} - \frac{1}{\epsilon b}\right)$$

### 7. Clausius–Mossotti
* **Cavity field**: $\vec{E}_C = \frac{\vec{P}}{3\epsilon_0}$
* **Molecular field**: $\vec{E}_m = \vec{E} + \frac{\vec{P}}{3\epsilon_0}$
* **Clausius–Mossotti**: $\alpha_m = \frac{3\epsilon_0}{N}\left(\frac{K-1}{K+2}\right)$

---

## Chapter 4: Magnetostatics

### 1. Forces on Charges
* **Lorentz Force**: $\vec{F} = Q[\vec{E} + (\vec{v}\times\vec{B})]$
* **Magnetic force**: $\vec{F}_{\text{mag}} = Q(\vec{v}\times\vec{B}), \qquad F_{\text{max}} = QvB$
* **Work by $\vec{B}$**: $W_{\text{mag}} = 0$

### 2. Charge Motion
* **Cyclotron radius**: $r = \frac{mv\sin\theta}{QB}$, momentum $p = QBr$
* **Cyclotron frequency**: $f = \frac{\omega}{2\pi} = \frac{QB}{2\pi m}$ (independent of $v, r$)

### 3. Flux & Currents
* **Magnetic flux**: $\Phi_m = \int_S \vec{B}\cdot d\vec{a}$
* **Currents**: $I = \lambda v, \quad \vec{K} = \sigma\vec{v}, \quad \vec{J} = \rho\vec{v}$
* **Transformation**: $I\,d\vec{l} \equiv \vec{K}\,da \equiv \vec{J}\,d\tau$
* **Continuity**: $\nabla\cdot\vec{J} + \frac{\partial\rho}{\partial t} = 0$; steady: $\nabla\cdot\vec{J} = 0$

### 4. Forces on Currents
* **Line**: $\vec{F}_m = \int I(d\vec{l}\times\vec{B})$, straight wire: $\vec{F} = I(\vec{l}\times\vec{B})$
* **Surface**: $\vec{F}_m = \int_S(\vec{K}\times\vec{B})\,da$, **Volume**: $\vec{F}_m = \int_V(\vec{J}\times\vec{B})\,d\tau$

### 5. Biot–Savart Law
$$\vec{B}(\vec{r}) = \frac{\mu_0 I}{4\pi}\int\frac{d\vec{l}'\times\hat{\boldsymbol{\tau}}}{\boldsymbol{\tau}^2}, \qquad \mu_0 = 4\pi\times10^{-7}\text{ H/m}$$
* **Surface / Volume currents**: $\vec{B} = \frac{\mu_0}{4\pi}\int\frac{\vec{K}\times\hat{\boldsymbol{\tau}}}{\boldsymbol{\tau}^2}da' = \frac{\mu_0}{4\pi}\int\frac{\vec{J}\times\hat{\boldsymbol{\tau}}}{\boldsymbol{\tau}^2}d\tau'$
* **Straight segment**: $\vec{B} = \frac{\mu_0 I}{4\pi r}(\sin\theta_2 - \sin\theta_1)\hat{\phi}$
* **Infinite wire**: $\vec{B} = \frac{\mu_0 I}{2\pi r}\hat{\phi}$
* **Circular loop (axis $z$)**: $\vec{B} = \frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}\hat{k}$, center: $\vec{B} = \frac{\mu_0 I}{2R}\hat{k}$
* **$N$-turns**: multiply by $N$

### 6. Divergence, Curl & Ampere's Law
* **No monopoles**: $\nabla\cdot\vec{B} = 0, \qquad \oint_S\vec{B}\cdot d\vec{a} = 0$
* **Ampere (integral)**: $\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{\text{enc}}$
* **Ampere (differential)**: $\nabla\times\vec{B} = \mu_0\vec{J}$
* **Solenoid**: $B = \mu_0 nI$ (inside, external $\approx 0$)
* **Cylindrical wire** ($J = kr'$): $k = \frac{3I}{2\pi a^3}$; inside $B = \frac{\mu_0 I r^2}{2\pi a^3}$; outside $B = \frac{\mu_0 I}{2\pi r}$
* **Cylinder (uniform surface current)**: inside $B = 0$; outside $B = \frac{\mu_0 I}{2\pi r}$
* **Polygon loop**: $B = \frac{\mu_0 I}{2R}\left(\frac{n}{\pi}\sin\frac{\pi}{n}\right)$
* **Finite solenoid**: $B = \frac{\mu_0 nI}{2}(\cos\theta_2 - \cos\theta_1)$

### 7. Vector Potential
* $\vec{B} = \nabla\times\vec{A}$, Coulomb gauge $\nabla\cdot\vec{A} = 0$
* **Poisson's eq.**: $\nabla^2\vec{A} = -\mu_0\vec{J}$
* **Integral solutions**:
  * Volume: $\vec{A} = \frac{\mu_0}{4\pi}\int\frac{\vec{J}(\vec{r}')}{\boldsymbol{\tau}}d\tau'$, $\quad$ Surface: $\vec{A} = \frac{\mu_0}{4\pi}\int\frac{\vec{K}(\vec{r}')}{\boldsymbol{\tau}}da'$, $\quad$ Line: $\vec{A} = \frac{\mu_0 I}{4\pi}\int\frac{d\vec{l}'}{\boldsymbol{\tau}}$
* **Flux**: $\Phi_m = \oint_L\vec{A}\cdot d\vec{l}$
* **Solenoid**: $A_{\text{in}} = \frac{\mu_0 nIr}{2}, \quad A_{\text{out}} = \frac{\mu_0 nIR^2}{2r}$
* **Uniform field**: $\vec{A} = -\frac{1}{2}(\vec{r}\times\vec{B})$

---

## Chapter 5: Magnetostatic Field in Matter

### 1. Magnetic Dipole
* **Dipole moment**: $\vec{m} = I\vec{A} = IA\hat{n}$ (right-hand rule; units $\text{A·m}^2$)
* **Torque**: $\vec{\tau} = \vec{m}\times\vec{B}, \qquad \tau = mB\sin\theta$
* **Potential Energy**: $U = -\vec{m}\cdot\vec{B} = -mB\cos\theta$
  * Stable ($\theta=0$): $U_{\text{min}} = -mB$; Unstable ($\theta=180°$): $U_{\text{max}} = +mB$

### 2. Magnetization & Bound Currents
* **Magnetization**: $\vec{M} = \frac{d\vec{m}}{d\tau}$ (units: $\text{A/m}$)
* **Surface bound current**: $\vec{K}_b = \vec{M}\times\hat{n}, \qquad K_b = M$
* **Volume bound current**: $\vec{J}_b = \nabla\times\vec{M}$
* **Conservation**: $\nabla\cdot\vec{J}_b = 0$

### 3. Ampere's Law in Matter ($\vec{H}$)
* **Field strength**: $\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}$
* **Differential**: $\nabla\times\vec{H} = \vec{J}_f$
* **Integral**: $\oint_L\vec{H}\cdot d\vec{l} = I_{f,\text{enc}}$
* **Copper rod**: $H_{\text{out}} = \frac{I}{2\pi s}, \qquad H_{\text{in}} = \frac{Is}{2\pi R^2}$

### 4. Susceptibility & Permeability
* $\vec{M} = \chi_m\vec{H}$
* $\vec{B} = \mu\vec{H}, \qquad \mu = \mu_0(1+\chi_m)$
* **Relative permeability**: $\mu_r = \frac{\mu}{\mu_0} = 1+\chi_m = \frac{B}{B_0}$
* **Bound current in linear media**: $\vec{J}_b = \chi_m\vec{J}_f$
* **Curie's Law**: $\chi_m = \frac{C}{T}$
* **Perfect diamagnet**: $\chi_m = -1$

### 5. Hysteresis
* Magnetization along field: $M = \sum_{i}m_i\cos\theta_i$
* **Hysteresis loss per cycle per volume**:
  $$\text{Hysteresis Loss} = \oint B\,dH = \text{area of the } B\text{–}H \text{ loop}$$

---

## Chapter 6: Electromagnetic Induction

### 1. Faraday's Law
* **Motional emf** (rect loop): $\mathcal{E} = vBh$
* **Flux rule**: $\mathcal{E} = -\frac{d\Phi}{dt}$
* **Integral form**: $\oint_C\vec{E}\cdot d\vec{l} = -\frac{d}{dt}\int_S\vec{B}\cdot d\vec{a}$
* **Differential form**: $\nabla\times\vec{E} = -\frac{\partial\vec{B}}{\partial t}$
* **Vector potential**: $\vec{E} = -\frac{\partial\vec{A}}{\partial t}$

### 2. Inductance
* **Self**: $\Phi = LI, \qquad \mathcal{E} = -L\frac{dI}{dt}, \qquad L = \frac{-\mathcal{E}}{dI/dt}$ (units: Henry, H)
* **Solenoid ($n$, radius $R$, length $l$)**: $L = \mu_0\pi n^2 R^2 l, \qquad \frac{L}{l} = \mu_0\pi n^2R^2$
* **Mutual**: $\Phi_2 = M_{21}I_1, \qquad \mathcal{E}_2 = -M_{21}\frac{dI_1}{dt}$
* **Neumann formula**: $M_{21} = \frac{\mu_0}{4\pi}\oint_2\oint_1\frac{d\vec{l}_1\cdot d\vec{l}_2}{r}$
* **Reciprocity**: $M_{12} = M_{21} = M$
* **Concentric solenoids**: $M = \mu_0\pi a^2 n_1 n_2 l$
* **Coaxial cable**: $L = \frac{\mu_0 l}{2\pi}\ln\left(\frac{b}{a}\right)$

### 3. Energy & Transients
* **RL circuit current growth**: $I(t) = \frac{\mathcal{E}_0}{R}\left(1 - e^{-Rt/L}\right)$
* **Stored energy**: $W = \frac{1}{2}LI^2$
* **Field form**: $W = \frac{1}{2\mu_0}\int B^2\,d\tau$
* **Coaxial cable**: $W = \frac{\mu_0 l I^2}{4\pi}\ln\left(\frac{b}{a}\right)$
* **Solenoid section**: $W = \frac{1}{2}\pi\mu_0 n^2R^2lI^2$
* **Magnetic energy density**: $u_m = \frac{B^2}{2\mu_0}$

---

## Chapter 7: Electromagnetic Wave Propagation

### 1. Maxwell's Equations (Vacuum)
$$\nabla\cdot\vec{E} = \frac{\rho}{\epsilon_0}, \qquad \nabla\cdot\vec{B} = 0, \qquad \nabla\times\vec{E} = -\frac{\partial\vec{B}}{\partial t}, \qquad \nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}$$

### 2. Displacement Current
* **Continuity**: $\nabla\cdot\vec{J} = -\frac{\partial\rho}{\partial t}$
* **Displacement current density**: $\vec{J}_d = \epsilon_0\frac{\partial\vec{E}}{\partial t}$
* **Ampere–Maxwell**: $\nabla\times\vec{B} = \mu_0\vec{J} + \mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}$
* **Charging capacitor**: $E = \frac{It}{\epsilon_0\pi a^2}, \quad J_d = \frac{I}{\pi a^2}, \quad I_{\text{enc}} = \frac{I s^2}{a^2}, \quad B = \frac{\mu_0 I s}{2\pi a^2}$

### 3. Maxwell's Equations in Matter
* **Bound sources**: $\rho_b = -\nabla\cdot\vec{P}, \qquad \vec{J}_b = \nabla\times\vec{M}, \qquad \vec{J}_p = \frac{\partial\vec{P}}{\partial t}$
* **Total sources**: $\rho = \rho_f - \nabla\cdot\vec{P}, \qquad \vec{J} = \vec{J}_f + \nabla\times\vec{M} + \frac{\partial\vec{P}}{\partial t}$
* **Macroscopic equations**: $\vec{D} = \epsilon_0\vec{E} + \vec{P}, \qquad \vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}$
  $$\nabla\cdot\vec{D} = \rho_f, \qquad \nabla\cdot\vec{B} = 0, \qquad \nabla\times\vec{E} = -\frac{\partial\vec{B}}{\partial t}, \qquad \nabla\times\vec{H} = \vec{J}_f + \frac{\partial\vec{D}}{\partial t}$$

### 4. Poynting's Theorem
* **Total EM energy density**: $u_{\text{em}} = \frac{1}{2}\left(\epsilon_0E^2 + \frac{B^2}{\mu_0}\right)$
* **Poynting vector**: $\vec{S} = \frac{1}{\mu_0}(\vec{E}\times\vec{B})$ (energy flux, $\text{W/m}^2$)
* **Integral form**: $\frac{dW}{dt} = -\frac{dW_{\text{em}}}{dt} - \oint_S\vec{S}\cdot d\vec{a}$
* **Differential form**: $\frac{\partial}{\partial t}(u_{\text{mech}} + u_{\text{em}}) = -\nabla\cdot\vec{S}$

### 5. EM Waves
* **Wave equations**: $\nabla^2\vec{E} = \mu_0\epsilon_0\frac{\partial^2\vec{E}}{\partial t^2}, \qquad \nabla^2\vec{B} = \mu_0\epsilon_0\frac{\partial^2\vec{B}}{\partial t^2}$
* **Speed**: $c = \frac{1}{\sqrt{\mu_0\epsilon_0}} \approx 3.00\times10^8\text{ m/s}$

---

## Chapter 8: Physics of Atoms and Molecules

### 1. Atomic Spectra
* **Rydberg formula**: $\frac{1}{\lambda} = RZ^2\left(\frac{1}{n_l^2} - \frac{1}{n_u^2}\right), \qquad R \approx 1.097\times10^7\text{ m}^{-1}$
* **Series**: Lyman ($n_l=1$, UV), Balmer ($n_l=2$, visible), Paschen/Brackett/Pfund ($n_l \ge 3$, IR)

### 2. Raman Effect
* **Virtual-state energies**: Stokes: $E_1' - E_0 = h\nu_0$, $E_1' - E_1 = h\nu_s$; Anti-Stokes: $E_2' - E_1 = h\nu_0$, $E_2' - E_0 = h\nu_a$
* **Stokes line**: $\nu_s = \nu_0 - \nu_1$ (where $\nu_1 = \frac{E_1-E_0}{h}$)
* **Anti-Stokes line**: $\nu_a = \nu_0 + \nu_1$
* **Rayleigh line**: $\nu_s = \nu_0$ (elastic)
* **Frequency displacement**: $\Delta\nu = |\nu_0 - \nu_{\text{scattered}}| = \nu_1 =$ IR vibrational frequency
* Stokes lines more intense than Anti-Stokes (Boltzmann population of ground state)

### 3. Superconductivity
* **Perfect diamagnet**: $\vec{B} = \mu_0(1+\chi_m)\vec{H} = 0 \implies \chi_m = -1$
* **Critical field**: $H_c(T) = H_c(0)\left[1 - \left(\frac{T}{T_c}\right)^2\right]$

---

## Chapter 9: Nuclear Physics

### 1. Binding Energy
* **Mass defect**: $\Delta m = (Zm_p + Nm_n) - M$
* **Binding energy**: $\text{B.E.} = [(Zm_p + Nm_n) - M]c^2$
* **Mass–energy conversion**: $1\text{ u} = 931.5\text{ MeV}/c^2$ $\quad (1\text{ u} = 1.66\times10^{-27}\text{ kg})$
* **Stability**: $\text{B.E.} > 0$ stable; higher $\text{B.E.}/A$ = greater stability

### 2. Radioactivity
* **Decay law**: $\frac{dN}{dt} = -\lambda N \implies N(t) = N_0e^{-\lambda t}$
* **Half-life**: $T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$
* **Units**: $1\text{ Bq} = 1\text{ s}^{-1}, \quad 1\text{ Rd} = 10^6\text{ Bq}, \quad 1\text{ Ci} = 3.7\times10^{10}\text{ Bq}$

### 3. Nuclear Reactions & Q-Value
* **Q-value**: $Q = E_Y + E_y - E_x = (M_X + m_x - M_Y - m_y)c^2$
* **Momentum conservation**: $M_YV_Y\sin\phi = m_yv_y\sin\theta, \qquad m_xv_x = M_YV_Y\cos\phi + m_yv_y\cos\theta$
* **Q-equation**:
  $$Q = E_y\left(1 + \frac{m_y}{M_Y}\right) - E_x\left(1 - \frac{m_x}{M_Y}\right) - \frac{2}{M_Y}\sqrt{E_xE_y m_xm_y}\cos\theta$$
* **Perpendicular emission** ($\theta = 90°$): $Q = E_y\left(1 + \frac{m_y}{M_Y}\right) - E_x\left(1 - \frac{m_x}{M_Y}\right)$
* **Recoil energy**: $E_Y = \frac{m_x}{M_Y}E_x + \frac{m_y}{M_Y}E_y - \frac{2}{M_Y}\sqrt{E_xE_y m_xm_y}\cos\theta$
* **Classification**: $Q>0$ exoergic (spontaneous); $Q<0$ endoergic

### 4. Threshold Energy
* **Definition**: minimum projectile energy for endoergic reactions ($Q<0$)
* **Compound nucleus mass**: $M_c = M_X + m_x$; momentum conservation $m_xv_x = M_cV_c$:
  $$-Q = E_{\text{th}}\left(\frac{M_X}{M_X + m_x}\right), \qquad E_{\text{th}} = -Q\left(1 + \frac{m_x}{M_X}\right)$$
* **Photon-induced** ($m_x = 0$): $E_{\text{th}} = -Q$

### 5. Fission & Fusion
* **Fission**: ${}_{92}\text{U}^{235} + {}_{0}\text{n}^{1} \rightarrow {}_{56}\text{Ba}^{141} + {}_{36}\text{Kr}^{92} + 3{}_{0}\text{n}^1 + Q$, $\quad Q \approx 200\text{ MeV}$
* **Fusion**: ${}_1\text{H}^2 + {}_1\text{H}^2 \rightarrow {}_2\text{He}^4 + Q$, $\quad Q \approx 24\text{ MeV}$