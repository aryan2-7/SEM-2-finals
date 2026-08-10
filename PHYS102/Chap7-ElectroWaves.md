# Chapter 7: Electromagnetic Wave Propagation

---

## 1. Displacement Current and Maxwell's Equations

### 1.1 Inconsistency of Ampere's Law in Non-Steady Conditions
The basic classical differential field equations were initially given as[cite: 3]:

$$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0} \quad \text{(Gauss's Law)} \tag{1a}$$

$$\nabla \cdot \vec{B} = 0 \quad \text{(Gauss's Law for Magnetism)} \tag{1b}$$

$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \quad \text{(Faraday's Law)} \tag{1c}$$

$$\nabla \times \vec{B} = \mu_0 \vec{J} \quad \text{(Ampere's Law)} \tag{1d}$$

To test consistency, take the divergence of both sides of Ampere's Law (Eq. 1d)[cite: 3]:

$$\nabla \cdot (\nabla \times \vec{B}) = \mu_0 (\nabla \cdot \vec{J})$$[cite: 3]

Since the divergence of any vector curl is identically zero ($\nabla \cdot (\nabla \times \vec{B}) = 0$), this requires[cite: 3]:

$$\nabla \cdot \vec{J} = 0$$[cite: 3]

While $\nabla \cdot \vec{J} = 0$ holds true for steady currents in magnetostatics, the **continuity equation** for time-varying charge distributions states[cite: 3]:

$$\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0 \implies \nabla \cdot \vec{J} = -\frac{\partial \rho}{\partial t}$$[cite: 3]

Thus, Ampere's uncorrected law fails whenever charge density varies with time ($\frac{\partial \rho}{\partial t} \neq 0$)[cite: 3].

---

### 1.2 Derivation of Displacement Current Density ($\vec{J}'$ or $\vec{J}_d$)
Maxwell resolved this contradiction by modifying total current density from $\vec{J}$ to $(\vec{J} + \vec{J}')$, where $\vec{J}'$ is an added current term[cite: 3]:

$$\nabla \times \vec{B} = \mu_0 (\vec{J} + \vec{J}')$$[cite: 3]

Taking the divergence of both sides[cite: 3]:

$$\nabla \cdot (\nabla \times \vec{B}) = 0 = \mu_0 (\nabla \cdot \vec{J} + \nabla \cdot \vec{J}')$$[cite: 3]
$$\nabla \cdot \vec{J}' = -\nabla \cdot \vec{J}$$[cite: 3]

Substitute the charge continuity relation $-\nabla \cdot \vec{J} = \frac{\partial \rho}{\partial t}$ and Gauss's law $\rho = \epsilon_0 (\nabla \cdot \vec{E})$[cite: 3]:

$$\nabla \cdot \vec{J}' = \frac{\partial \rho}{\partial t} = \frac{\partial}{\partial t}(\epsilon_0 \nabla \cdot \vec{E}) = \nabla \cdot \left( \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right)$$[cite: 3]

Comparing terms yields the **Displacement Current Density**[cite: 3]:

$$\vec{J}' = \vec{J}_d = \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$[cite: 3]

#### Modified Ampere-Maxwell Law:
$$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$[cite: 3]

Taking the divergence of the corrected equation verifies that $\nabla \cdot (\nabla \times \vec{B}) = \mu_0 \left[ \nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} \right] = 0$, satisfying charge conservation under all conditions[cite: 3].

---

### 1.3 Complete Set of Maxwell's Equations in Vacuum
In vacuum / free space (in terms of microscopic fields $\vec{E}$ and $\vec{B}$)[cite: 3]:

1. **Gauss's Law:**
   $$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$$[cite: 3]

2. **Gauss's Law for Magnetism:**
   $$\nabla \cdot \vec{B} = 0$$[cite: 3]

3. **Faraday's Law of Induction:**
   $$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$[cite: 3]

4. **Ampere-Maxwell Law:**
   $$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$[cite: 3]

---

### 1.4 Solved Example: Parallel Plate Capacitor Charging
**Problem:** Thin wires connect to the centers of circular parallel capacitor plates of radius $a$ separated by gap $w \ll a$[cite: 3]. A steady charging current $I$ flows into the capacitor[cite: 3]. At $t=0$, $q=0$[cite: 3].
1. Find electric field $\vec{E}(t)$ between the plates[cite: 3].
2. Find displacement current through a concentric circle of radius $s$ ($s < a$)[cite: 3].
3. Find the induced magnetic field $\vec{B}(s)$ at distance $s$ from the central axis[cite: 3].

**Solution:**

1. **Electric Field between Plates:**
   Since $I$ is constant, total charge accumulated at time $t$ is $q = I t$[cite: 3].
   Uniform surface charge density: $\sigma = \frac{q}{\pi a^2} = \frac{I t}{\pi a^2}$[cite: 3].
   Since $w \ll a$, the electric field between plates is[cite: 3]:
   $$E = \frac{\sigma}{\epsilon_0} = \frac{I t}{\epsilon_0 \pi a^2}$$[cite: 3]

2. **Displacement Current Density & Enclosed Displacement Current:**
   $$J_d = \epsilon_0 \frac{\partial E}{\partial t} = \epsilon_0 \frac{\partial}{\partial t}\left( \frac{I t}{\epsilon_0 \pi a^2} \right) = \frac{I}{\pi a^2}$$[cite: 3]

   The displacement current $I_d$ passing through an Amperian circular loop of radius $s < a$ is[cite: 3]:
   $$I_{\text{enc}} = J_d \cdot (\pi s^2) = \left( \frac{I}{\pi a^2} \right) (\pi s^2) = I \frac{s^2}{a^2}$$[cite: 3]

3. **Induced Magnetic Field:**
   Applying the Ampere-Maxwell integral law around loop of radius $s$ (where free current $I_f = 0$ between plates)[cite: 3]:
   $$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$$[cite: 3]
   $$B (2\pi s) = \mu_0 \left( I \frac{s^2}{a^2} \right)$$[cite: 3]
   $$B = \frac{\mu_0 I s}{2\pi a^2}$$[cite: 3]

---

## 2. Maxwell's Equations in Material Medium

### 2.1 Current and Charge Densities in Matter
In a dielectric/magnetic medium, electric polarization $\vec{P}$ and magnetization $\vec{M}$ induce microscopic bound sources[cite: 3]:

* **Volume Bound Charge Density:**
  $$\rho_b = -\nabla \cdot \vec{P}$$[cite: 3]
* **Volume Bound Current Density:**
  $$\vec{J}_b = \nabla \times \vec{M}$$[cite: 3]

When polarization varies over time ($\frac{\partial \vec{P}}{\partial t}$), it produces a movement of bound charges called the **Polarization Current Density ($\vec{J}_p$)**[cite: 3].

#### Derivation of Polarization Current ($\vec{J}_p$):
The conservation of bound charge satisfies the continuity equation[cite: 3]:

$$\nabla \cdot \vec{J}_p = -\frac{\partial \rho_b}{\partial t} = -\frac{\partial}{\partial t}(-\nabla \cdot \vec{P}) = \nabla \cdot \left( \frac{\partial \vec{P}}{\partial t} \right)$$[cite: 3]

Therefore[cite: 3]:

$$\vec{J}_p = \frac{\partial \vec{P}}{\partial t}$$[cite: 3]

---

### 2.2 Total Sources in Matter
* **Total Volume Charge Density:**
  $$\rho = \rho_f + \rho_b = \rho_f - \nabla \cdot \vec{P}$$[cite: 3]

* **Total Volume Current Density:**
  $$\vec{J} = \vec{J}_f + \vec{J}_b + \vec{J}_p = \vec{J}_f + (\nabla \times \vec{M}) + \frac{\partial \vec{P}}{\partial t}$$[cite: 3]

---

### 2.3 Derivation of Macroscopic Equations ($\vec{D}$ and $\vec{H}$)

1. **Gauss's Law in Matter:**
   $$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0} \implies \epsilon_0 \nabla \cdot \vec{E} = \rho_f - \nabla \cdot \vec{P}$$[cite: 3]
   $$\nabla \cdot (\epsilon_0 \vec{E} + \vec{P}) = \rho_f$$[cite: 3]

   Defining **Electric Displacement Vector** $\vec{D} = \epsilon_0 \vec{E} + \vec{P}$[cite: 3]:
   $$\nabla \cdot \vec{D} = \rho_f$$[cite: 3]

2. **Ampere-Maxwell Law in Matter:**
   $$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$[cite: 3]
   $$\frac{1}{\mu_0}(\nabla \times \vec{B}) = \vec{J}_f + \nabla \times \vec{M} + \frac{\partial \vec{P}}{\partial t} + \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$[cite: 3]
   $$\nabla \times \left( \frac{\vec{B}}{\mu_0} - \vec{M} \right) = \vec{J}_f + \frac{\partial}{\partial t} (\epsilon_0 \vec{E} + \vec{P})$$[cite: 3]

   Defining **Magnetic Field Strength** $\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}$[cite: 3]:
   $$\nabla \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t}$$[cite: 3]

---

### 2.4 Complete Maxwell's Equations in Matter
1. $$\nabla \cdot \vec{D} = \rho_f$$[cite: 3]
2. $$\nabla \cdot \vec{B} = 0$$[cite: 3]
3. $$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$[cite: 3]
4. $$\nabla \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t}$$[cite: 3]

---

## 3. Energy in Electromagnetic Field & Poynting's Theorem

### 3.1 Electromagnetic Energy Densities
* **Electric Energy Stored in Volume $V$:**
  $$W_e = \frac{1}{2}\epsilon_0 \int_V E^2 d\tau$$[cite: 3]

* **Magnetic Energy Stored in Volume $V$:**
  $$W_m = \frac{1}{2\mu_0} \int_V B^2 d\tau$$[cite: 3]

* **Total Energy Density ($u_{\text{em}}$):**
  $$u_{\text{em}} = \frac{1}{2} \left( \epsilon_0 E^2 + \frac{1}{\mu_0} B^2 \right)$$[cite: 3]

---

### 3.2 Derivation of Poynting's Theorem
Consider the rate of work done by electromagnetic forces on a distribution of charges in volume $V$[cite: 3]:

$$\frac{dW}{dt} = \int_V \vec{F} \cdot \vec{v} \, dq = \int_V \rho (\vec{E} + \vec{v} \times \vec{B}) \cdot \vec{v} \, d\tau = \int_V \vec{E} \cdot (\rho \vec{v}) \, d\tau$$[cite: 3]

Since conduction current density $\vec{J} = \rho \vec{v}$[cite: 3]:

$$\frac{dW}{dt} = \int_V (\vec{E} \cdot \vec{J}) d\tau \tag{Eq. A}$$[cite: 3]

From the Ampere-Maxwell Law ($\vec{J} = \frac{1}{\mu_0} \nabla \times \vec{B} - \epsilon_0 \frac{\partial \vec{E}}{\partial t}$)[cite: 3]:

$$\vec{E} \cdot \vec{J} = \frac{1}{\mu_0} \vec{E} \cdot (\nabla \times \vec{B}) - \epsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$$[cite: 3]

Using the identity $\vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \frac{1}{2} \frac{\partial E^2}{\partial t}$ and vector product identity $\nabla \cdot (\vec{E} \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{E}) - \vec{E} \cdot (\nabla \times \vec{B})$[cite: 3]:

$$\vec{E} \cdot (\nabla \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{E}) - \nabla \cdot (\vec{E} \times \vec{B})$$[cite: 3]

Substitute Faraday's Law ($\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$)[cite: 3]:

$$\vec{E} \cdot \vec{J} = \frac{1}{\mu_0} \left[ -\vec{B} \cdot \frac{\partial \vec{B}}{\partial t} - \nabla \cdot (\vec{E} \times \vec{B}) \right] - \frac{\epsilon_0}{2} \frac{\partial E^2}{\partial t}$$[cite: 3]
$$\vec{E} \cdot \vec{J} = -\frac{1}{2} \frac{\partial}{\partial t} \left( \epsilon_0 E^2 + \frac{1}{\mu_0} B^2 \right) - \frac{1}{\mu_0} \nabla \cdot (\vec{E} \times \vec{B})$$[cite: 3]

Integrating over volume $V$ and applying Divergence Theorem to the second term[cite: 3]:

$$\frac{dW}{dt} = -\frac{d}{dt} \int_V \frac{1}{2}\left( \epsilon_0 E^2 + \frac{1}{\mu_0} B^2 \right) d\tau - \frac{1}{\mu_0} \oint_S (\vec{E} \times \vec{B}) \cdot d\vec{a}$$[cite: 3]

---

### 3.3 Poynting Vector ($\vec{S}$) and Physical Interpretation
Define the **Poynting Vector** $\vec{S}$ as the energy flux (energy transported per unit area per unit time)[cite: 3]:

$$\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})$$[cite: 3]

#### Integral Form of Poynting's Theorem:
$$\frac{dW}{dt} = -\frac{d W_{\text{em}}}{dt} - \oint_S \vec{S} \cdot d\vec{a}$$[cite: 3]

* **Statement:** The rate of work done on charges inside volume $V$ equals the rate of decrease of stored electromagnetic field energy minus the energy flux flowing outward through boundary surface $S$[cite: 3].

#### Differential Form of Poynting's Theorem:
Expressing work done in terms of mechanical energy density $u_{\text{mech}}$ ($\frac{dW}{dt} = \frac{\partial}{\partial t}\int_V u_{\text{mech}} d\tau$)[cite: 3]:

$$\frac{\partial}{\partial t} (u_{\text{mech}} + u_{\text{em}}) = -\nabla \cdot \vec{S}$$[cite: 3]

*(This represents the continuity equation for total energy conservation).*[cite: 3]

---

## 4. Electromagnetic Wave Equations in Vacuum

### 4.1 Derivation of Wave Equations for $\vec{E}$ and $\vec{B}$
In free space / vacuum, charge density $\rho = 0$ and current density $\vec{J} = 0$[cite: 3]. Maxwell's equations simplify to[cite: 3]:

1. $\nabla \cdot \vec{E} = 0$[cite: 3]
2. $\nabla \cdot \vec{B} = 0$[cite: 3]
3. $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$[cite: 3]
4. $\nabla \times \vec{B} = \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$[cite: 3]

#### Electric Field Wave Equation:
Take the curl of Eq. (3)[cite: 3]:

$$\nabla \times (\nabla \times \vec{E}) = -\nabla \times \left( \frac{\partial \vec{B}}{\partial t} \right) = -\frac{\partial}{\partial t}(\nabla \times \vec{B})$$[cite: 3]

Apply vector identity $\nabla \times (\nabla \times \vec{E}) = \nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E}$ and substitute $\nabla \cdot \vec{E} = 0$ and Eq. (4)[cite: 3]:

$$-\nabla^2 \vec{E} = -\frac{\partial}{\partial t}\left( \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right)$$[cite: 3]
$$\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$[cite: 3]

#### Magnetic Field Wave Equation:
Take the curl of Eq. (4)[cite: 3]:

$$\nabla \times (\nabla \times \vec{B}) = \mu_0 \epsilon_0 \nabla \times \left( \frac{\partial \vec{E}}{\partial t} \right) = \mu_0 \epsilon_0 \frac{\partial}{\partial t}(\nabla \times \vec{E})$$[cite: 3]

Apply vector identity $\nabla \times (\nabla \times \vec{B}) = \nabla(\nabla \cdot \vec{B}) - \nabla^2 \vec{B}$ and substitute $\nabla \cdot \vec{B} = 0$ and Eq. (3)[cite: 3]:

$$-\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial}{\partial t}\left( -\frac{\partial \vec{B}}{\partial t} \right)$$[cite: 3]
$$\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}$$[cite: 3]

---

### 4.2 Velocity of Electromagnetic Waves
Comparing these field equations with the 3D classical wave equation[cite: 3]:

$$\nabla^2 f = \frac{1}{v^2} \frac{\partial^2 f}{\partial t^2}$$[cite: 3]

The propagation speed of electromagnetic waves in vacuum $c$ is[cite: 3]:

$$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$$[cite: 3]

Substituting fundamental constants $\epsilon_0 \approx 8.854 \times 10^{-12} \text{ F/m}$ and $\mu_0 = 4\pi \times 10^{-7} \text{ H/m}$[cite: 3]:

$$c = \frac{1}{\sqrt{(4\pi \times 10^{-7})(8.854 \times 10^{-12})}} \approx 3.00 \times 10^8 \text{ m/s}$$[cite: 3]

This numerical value equals the speed of light, demonstrating that light is an electromagnetic wave[cite: 3].