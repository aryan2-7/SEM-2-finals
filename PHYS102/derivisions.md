# Most common
- [ ] Circular disk electric field
- [ ] Electric dipole field
- [ ] Spherical shell potential/field
- [ ] Clausius-Mossotti
- [ ] Biot-Savart applications
- [ ] Solenoid magnetic field
- [ ] Magnetic vector potential
- [ ] Motional EMF
- [ ] Self inductance
- [ ] Mutual inductance / Neumann formula
- [ ] Magnetic energy
- [ ] Maxwell correction
- [ ] EM wave equation
- [ ] Poynting theorem
- [ ] Raman effect
- [ ] Nuclear Q-value
- [ ] Binding energy
- [ ] Radioactive decay




# Important Derivations Checklist

### Tier 1: Extremely High Importance (Repeated 4–6 Times)
- [ ] **Electric Field Above Flat Circular Disk:** Derive $E_z = \frac{\sigma}{2\epsilon_0} \left[ 1 - \frac{z}{\sqrt{z^2 + R^2}} \right]$ along the axis, and check limits for $R \to \infty$ and $z \gg R$.  
- [ ] **Short Solenoid inside Long Solenoid:** Calculate magnetic flux and derive mutual inductance $M$ for a short solenoid centered on the axis of a long solenoid.  
- [ ] **Electric Field of a Short Electric Dipole:** Prove $\vec{E}_{\text{dip}}(\vec{r}) = \frac{1}{4\pi\epsilon_0 r^3} \left[ 3(\vec{p} \cdot \hat{r})\hat{r} - \vec{p} \right]$ or $E(r,\theta) = \frac{p}{4\pi\epsilon_0 r^3}\sqrt{3\cos^2\theta + 1}$.  
- [ ] **Magnetic Field on Axis of a Solenoid:** Derive $B = \frac{\mu_0 n I}{2} (\cos\theta_1 - \cos\theta_2)$ and evaluate for an infinite solenoid ($B = \mu_0 n I$).  
- [ ] **Clausius–Mossotti Relation:** Derive $\frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N \alpha}{3\epsilon_0}$ connecting atomic polarizability $\alpha$ with dielectric constant $\epsilon_r$.  

---

### Tier 2: High Importance (Repeated 3 Times)
- [ ] **Poynting's Theorem & Poynting Vector:** Prove $\frac{\partial u}{\partial t} + \nabla \cdot \vec{S} = -\vec{J} \cdot \vec{E}$ and define $\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})$.  
- [ ] **Maxwell's Modification & EM Wave Equations:** Correct Ampère's law using displacement current and derive wave equations for $\vec{E}$ and $\vec{B}$ in vacuum.  
- [ ] **Magnetic Energy Density:** Show that energy density stored in a magnetic field is $U_B = \frac{B^2}{2\mu_0}$.  
- [ ] **Magnetic Vector Potential from Volume Current:** Derive $\vec{A}(\vec{r}) = \frac{\mu_0}{4\pi} \int \frac{\vec{J}(\vec{r}')}{\mathcal{r}} d\tau'$ for volume current density.  
- [ ] **Nuclear Reaction Q-Value:** Derive $Q = E_Y + E_y - E_x$ in terms of kinetic energies and masses, including the right-angle scattering case.  
- [ ] **Quantum Mechanical Raman Effect:** Derive expressions for Rayleigh, Stokes ($\nu_0 - \nu_m$), and Anti-Stokes ($\nu_0 + \nu_m$) lines.  
- [ ] **Potential & Field of Spherical Shell:** Derive electric potential $V(r)$ and field $E(r)$ inside and outside a uniformly charged spherical shell.  
- [ ] **Field inside Spherical Cavity in Dielectric:** Prove $\vec{E}_C = \frac{\vec{P}}{3\epsilon_0}$ at the center of a spherical cavity in a polarized material.  
- [ ] **Reciprocity Theorem & Neumann Formula:** State and prove reciprocity for mutual inductance ($M_{12} = M_{21}$) and derive Neumann's formula.  
- [ ] **Volume Bound Current Density:** Prove $\vec{J}_b = \nabla \times \vec{M}$ (and surface bound current density $\vec{K}_b = \vec{M} \times \hat{n}$).  
- [ ] **Torque and Energy of Magnetic Dipole:** Derive $\vec{\tau} = \vec{m} \times \vec{B}$ and $U = -\vec{m} \cdot \vec{B}$ in a uniform magnetic field.  
- [ ] **Vector Differential Identities:** Prove $\nabla \cdot (\nabla \times \vec{A}) = 0$ (divergence of curl) and $\nabla \times (\nabla \varphi) = 0$ (curl of gradient).  

---

### Tier 3: Moderate Importance (Repeated 2 Times)
- [ ] **Energy Stored in Charged Solid Sphere:** Calculate electrostatic energy stored over all space for a solid sphere of radius $R$ and total charge $q$.  
- [ ] **Motional EMF & Differential Faraday Law:** Prove flux rule $\mathcal{E} = -\frac{d\Phi}{dt}$ for moving loops and derive $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$.  
- [ ] **Magnetic Field inside Variable Current Wire:** Derive $B(r)$ inside and outside a wire with current density $J \propto r$.  
- [ ] **Langevin's Theory of Paramagnetism:** Prove paramagnetic susceptibility is inversely proportional to absolute temperature ($\chi \propto \frac{1}{T}$).  
- [ ] **Electric Field Above Midpoint of Two Charges:** Calculate $\vec{E}$ at distance $z$ above dipole charges $+q$ and $-q$ separated by distance $d$.  

---

### Tier 4: Medium–Low Importance (Single-Occurrence / Standalone Exam Questions)
- [ ] **Volume Bound Charge Density:** Prove $\rho_b = -\nabla \cdot \vec{P}$ and surface bound charge density $\sigma_b = \vec{P} \cdot \hat{n}$.  
- [ ] **Local Microscopic Field on Molecule:** Derive $\vec{E}_m = \vec{E} + \frac{\vec{P}}{3\epsilon_0}$ acting on a nonpolar molecule in a dielectric.  
- [ ] **Electrostatic Energy Density:** Derive potential energy of $n$ point charges and extend to continuous distribution ($u_E = \frac{1}{2}\epsilon_0 E^2$).  
- [ ] **Radioactive Decay Law & Half-Life:** Deduce $N(t) = N_0 e^{-\lambda t}$ and establish $T_{1/2} = \frac{\ln 2}{\lambda}$.  
- [ ] **Electric Field Above Line Segment:** Calculate $E$ at distance $z$ above one end of a segment of length $L$ with uniform charge density $\lambda$.  
- [ ] **Vector Potential for Uniform Field:** Verify that $\vec{A}(\vec{r}) = -\frac{1}{2}(\vec{r} \times \vec{B})$ satisfies $\nabla \cdot \vec{A} = 0$ and $\nabla \times \vec{A} = \vec{B}$.  
- [ ] **Magnetic Field at Center of Regular Polygons:** Derive $B$ at the center of an $n$-sided polygon and prove the limit $n \to \infty$ gives a circular loop.  
- [ ] **Diamagnetic Orbital Dipole Moment Shift:** Prove $\Delta m = -\frac{e^2 r^2}{4 m_e} B$ for an orbiting electron in an applied magnetic field.  
- [ ] **Charge Continuity Equation:** Show that volume current density obeys $\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0$.