# Chapter 7: Electromagnetic Wave Propagation

---

## 1. Displacement Current and Maxwell's Equations

### 1.1 Inconsistency of Ampere's Law in Non-Steady Conditions
The basic classical differential field equations were initially given as:

$$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0} \quad \text{(Gauss's Law)} \tag{1a}$$

$$\nabla \cdot \vec{B} = 0 \quad \text{(Gauss's Law for Magnetism)} \tag{1b}$$

$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \quad \text{(Faraday's Law)} \tag{1c}$$

$$\nabla \times \vec{B} = \mu_0 \vec{J} \quad \text{(Ampere's Law)} \tag{1d}$$

To test consistency, take the divergence of both sides of Ampere's Law (Eq. 1d):

$$\nabla \cdot (\nabla \times \vec{B}) = \mu_0 (\nabla \cdot \vec{J})$$

Since the divergence of any vector curl is identically zero ($\nabla \cdot (\nabla \times \vec{B}) = 0$), this requires:

$$\nabla \cdot \vec{J} = 0$$

While $\nabla \cdot \vec{J} = 0$ holds true for steady currents in magnetostatics, the **continuity equation** for time-varying charge distributions states:

$$\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0 \implies \nabla \cdot \vec{J} = -\frac{\partial \rho}{\partial t}$$

Thus, Ampere's uncorrected law fails whenever charge density varies with time ($\frac{\partial \rho}{\partial t} \neq 0$).

---

### 1.2 Derivation of Displacement Current Density ($\vec{J}'$ or $\vec{J}_d$)
Maxwell resolved this contradiction by modifying total current density from $\vec{J}$ to $(\vec{J} + \vec{J}')$, where $\vec{J}'$ is an added current term:

$$\nabla \times \vec{B} = \mu_0 (\vec{J} + \vec{J}')$$

Taking the divergence of both sides:

$$\nabla \cdot (\nabla \times \vec{B}) = 0 = \mu_0 (\nabla \cdot \vec{J} + \nabla \cdot \vec{J}')$$
$$\nabla \cdot \vec{J}' = -\nabla \cdot \vec{J}$$

Substitute the charge continuity relation $-\nabla \cdot \vec{J} = \frac{\partial \rho}{\partial t}$ and Gauss's law $\rho = \epsilon_0 (\nabla \cdot \vec{E})$:

$$\nabla \cdot \vec{J}' = \frac{\partial \rho}{\partial t} = \frac{\partial}{\partial t}(\epsilon_0 \nabla \cdot \vec{E}) = \nabla \cdot \left( \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right)$$

Comparing terms yields the **Displacement Current Density**:

$$\vec{J}' = \vec{J}_d = \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$

#### Modified Ampere-Maxwell Law:
$$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$

Taking the divergence of the corrected equation verifies that $\nabla \cdot (\nabla \times \vec{B}) = \mu_0 \left[ \nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} \right] = 0$, satisfying charge conservation under all conditions.

---

### 1.3 Complete Set of Maxwell's Equations in Vacuum
In vacuum / free space (in terms of microscopic fields $\vec{E}$ and $\vec{B}$):

1. **Gauss's Law:**
   $$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$$

2. **Gauss's Law for Magnetism:**
   $$\nabla \cdot \vec{B} = 0$$

3. **Faraday's Law of Induction:**
   $$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$

4. **Ampere-Maxwell Law:**
   $$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$

---

### 1.4 Solved Example: Parallel Plate Capacitor Charging
**Problem:** Thin wires connect to the centers of circular parallel capacitor plates of radius $a$ separated by gap $w \ll a$. A steady charging current $I$ flows into the capacitor. At $t=0$, $q=0$.
1. Find electric field $\vec{E}(t)$ between the plates.
2. Find displacement current through a concentric circle of radius $s$ ($s < a$).
3. Find the induced magnetic field $\vec{B}(s)$ at distance $s$ from the central axis.

**Solution:**

1. **Electric Field between Plates:**
   Since $I$ is constant, total charge accumulated at time $t$ is $q = I t$.
   Uniform surface charge density: $\sigma = \frac{q}{\pi a^2} = \frac{I t}{\pi a^2}$.
   Since $w \ll a$, the electric field between plates is:
   $$E = \frac{\sigma}{\epsilon_0} = \frac{I t}{\epsilon_0 \pi a^2}$$

2. **Displacement Current Density & Enclosed Displacement Current:**
   $$J_d = \epsilon_0 \frac{\partial E}{\partial t} = \epsilon_0 \frac{\partial}{\partial t}\left( \frac{I t}{\epsilon_0 \pi a^2} \right) = \frac{I}{\pi a^2}$$

   The displacement current $I_d$ passing through an Amperian circular loop of radius $s < a$ is:
   $$I_{\text{enc}} = J_d \cdot (\pi s^2) = \left( \frac{I}{\pi a^2} \right) (\pi s^2) = I \frac{s^2}{a^2}$$

3. **Induced Magnetic Field:**
   Applying the Ampere-Maxwell integral law around loop of radius $s$ (where free current $I_f = 0$ between plates):
   $$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$$
   $$B (2\pi s) = \mu_0 \left( I \frac{s^2}{a^2} \right)$$
   $$B = \frac{\mu_0 I s}{2\pi a^2}$$

---

## 2. Maxwell's Equations in Material Medium

### 2.1 Current and Charge Densities in Matter
In a dielectric/magnetic medium, electric polarization $\vec{P}$ and magnetization $\vec{M}$ induce microscopic bound sources:

* **Volume Bound Charge Density:**
  $$\rho_b = -\nabla \cdot \vec{P}$$
* **Volume Bound Current Density:**
  $$\vec{J}_b = \nabla \times \vec{M}$$

When polarization varies over time ($\frac{\partial \vec{P}}{\partial t}$), it produces a movement of bound charges called the **Polarization Current Density ($\vec{J}_p$)**.

#### Derivation of Polarization Current ($\vec{J}_p$):
The conservation of bound charge satisfies the continuity equation:

$$\nabla \cdot \vec{J}_p = -\frac{\partial \rho_b}{\partial t} = -\frac{\partial}{\partial t}(-\nabla \cdot \vec{P}) = \nabla \cdot \left( \frac{\partial \vec{P}}{\partial t} \right)$$

Therefore:

$$\vec{J}_p = \frac{\partial \vec{P}}{\partial t}$$

---

### 2.2 Total Sources in Matter
* **Total Volume Charge Density:**
  $$\rho = \rho_f + \rho_b = \rho_f - \nabla \cdot \vec{P}$$

* **Total Volume Current Density:**
  $$\vec{J} = \vec{J}_f + \vec{J}_b + \vec{J}_p = \vec{J}_f + (\nabla \times \vec{M}) + \frac{\partial \vec{P}}{\partial t}$$

---

### 2.3 Derivation of Macroscopic Equations ($\vec{D}$ and $\vec{H}$)

1. **Gauss's Law in Matter:**
   $$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0} \implies \epsilon_0 \nabla \cdot \vec{E} = \rho_f - \nabla \cdot \vec{P}$$
   $$\nabla \cdot (\epsilon_0 \vec{E} + \vec{P}) = \rho_f$$

   Defining **Electric Displacement Vector** $\vec{D} = \epsilon_0 \vec{E} + \vec{P}$:
   $$\nabla \cdot \vec{D} = \rho_f$$

2. **Ampere-Maxwell Law in Matter:**
   $$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$
   $$\frac{1}{\mu_0}(\nabla \times \vec{B}) = \vec{J}_f + \nabla \times \vec{M} + \frac{\partial \vec{P}}{\partial t} + \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$
   $$\nabla \times \left( \frac{\vec{B}}{\mu_0} - \vec{M} \right) = \vec{J}_f + \frac{\partial}{\partial t} (\epsilon_0 \vec{E} + \vec{P})$$

   Defining **Magnetic Field Strength** $\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}$:
   $$\nabla \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t}$$

---

### 2.4 Complete Maxwell's Equations in Matter
1. $$\nabla \cdot \vec{D} = \rho_f$$
2. $$\nabla \cdot \vec{B} = 0$$
3. $$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$
4. $$\nabla \times \vec{H} = \vec{J}_f + \frac{\partial \vec{D}}{\partial t}$$

---

## 3. Energy in Electromagnetic Field & Poynting's Theorem

### 3.1 Electromagnetic Energy Densities
* **Electric Energy Stored in Volume $V$:**
  $$W_e = \frac{1}{2}\epsilon_0 \int_V E^2 d\tau$$

* **Magnetic Energy Stored in Volume $V$:**
  $$W_m = \frac{1}{2\mu_0} \int_V B^2 d\tau$$

* **Total Energy Density ($u_{\text{em}}$):**
  $$u_{\text{em}} = \frac{1}{2} \left( \epsilon_0 E^2 + \frac{1}{\mu_0} B^2 \right)$$

---

### 3.2 Derivation of Poynting's Theorem
Consider the rate of work done by electromagnetic forces on a distribution of charges in volume $V$:

$$\frac{dW}{dt} = \int_V \vec{F} \cdot \vec{v} \, dq = \int_V \rho (\vec{E} + \vec{v} \times \vec{B}) \cdot \vec{v} \, d\tau = \int_V \vec{E} \cdot (\rho \vec{v}) \, d\tau$$

Since conduction current density $\vec{J} = \rho \vec{v}$:

$$\frac{dW}{dt} = \int_V (\vec{E} \cdot \vec{J}) d\tau \tag{Eq. A}$$

From the Ampere-Maxwell Law ($\vec{J} = \frac{1}{\mu_0} \nabla \times \vec{B} - \epsilon_0 \frac{\partial \vec{E}}{\partial t}$):

$$\vec{E} \cdot \vec{J} = \frac{1}{\mu_0} \vec{E} \cdot (\nabla \times \vec{B}) - \epsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t}$$

Using the identity $\vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \frac{1}{2} \frac{\partial E^2}{\partial t}$ and vector product identity $\nabla \cdot (\vec{E} \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{E}) - \vec{E} \cdot (\nabla \times \vec{B})$:

$$\vec{E} \cdot (\nabla \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{E}) - \nabla \cdot (\vec{E} \times \vec{B})$$

Substitute Faraday's Law ($\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$):

$$\vec{E} \cdot \vec{J} = \frac{1}{\mu_0} \left[ -\vec{B} \cdot \frac{\partial \vec{B}}{\partial t} - \nabla \cdot (\vec{E} \times \vec{B}) \right] - \frac{\epsilon_0}{2} \frac{\partial E^2}{\partial t}$$
$$\vec{E} \cdot \vec{J} = -\frac{1}{2} \frac{\partial}{\partial t} \left( \epsilon_0 E^2 + \frac{1}{\mu_0} B^2 \right) - \frac{1}{\mu_0} \nabla \cdot (\vec{E} \times \vec{B})$$

Integrating over volume $V$ and applying Divergence Theorem to the second term:

$$\frac{dW}{dt} = -\frac{d}{dt} \int_V \frac{1}{2}\left( \epsilon_0 E^2 + \frac{1}{\mu_0} B^2 \right) d\tau - \frac{1}{\mu_0} \oint_S (\vec{E} \times \vec{B}) \cdot d\vec{a}$$

---

### 3.3 Poynting Vector ($\vec{S}$) and Physical Interpretation
Define the **Poynting Vector** $\vec{S}$ as the energy flux (energy transported per unit area per unit time):

$$\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})$$

#### Integral Form of Poynting's Theorem:
$$\frac{dW}{dt} = -\frac{d W_{\text{em}}}{dt} - \oint_S \vec{S} \cdot d\vec{a}$$

* **Statement:** The rate of work done on charges inside volume $V$ equals the rate of decrease of stored electromagnetic field energy minus the energy flux flowing outward through boundary surface $S$.

#### Differential Form of Poynting's Theorem:
Expressing work done in terms of mechanical energy density $u_{\text{mech}}$ ($\frac{dW}{dt} = \frac{\partial}{\partial t}\int_V u_{\text{mech}} d\tau$):

$$\frac{\partial}{\partial t} (u_{\text{mech}} + u_{\text{em}}) = -\nabla \cdot \vec{S}$$

*(This represents the continuity equation for total energy conservation).*

---

## 4. Electromagnetic Wave Equations in Vacuum

### 4.1 Derivation of Wave Equations for $\vec{E}$ and $\vec{B}$
In free space / vacuum, charge density $\rho = 0$ and current density $\vec{J} = 0$. Maxwell's equations simplify to:

1. $\nabla \cdot \vec{E} = 0$
2. $\nabla \cdot \vec{B} = 0$
3. $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$
4. $\nabla \times \vec{B} = \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$

#### Electric Field Wave Equation:
Take the curl of Eq. (3):

$$\nabla \times (\nabla \times \vec{E}) = -\nabla \times \left( \frac{\partial \vec{B}}{\partial t} \right) = -\frac{\partial}{\partial t}(\nabla \times \vec{B})$$

Apply vector identity $\nabla \times (\nabla \times \vec{E}) = \nabla(\nabla \cdot \vec{E}) - \nabla^2 \vec{E}$ and substitute $\nabla \cdot \vec{E} = 0$ and Eq. (4):

$$-\nabla^2 \vec{E} = -\frac{\partial}{\partial t}\left( \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t} \right)$$
$$\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$

#### Magnetic Field Wave Equation:
Take the curl of Eq. (4):

$$\nabla \times (\nabla \times \vec{B}) = \mu_0 \epsilon_0 \nabla \times \left( \frac{\partial \vec{E}}{\partial t} \right) = \mu_0 \epsilon_0 \frac{\partial}{\partial t}(\nabla \times \vec{E})$$

Apply vector identity $\nabla \times (\nabla \times \vec{B}) = \nabla(\nabla \cdot \vec{B}) - \nabla^2 \vec{B}$ and substitute $\nabla \cdot \vec{B} = 0$ and Eq. (3):

$$-\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial}{\partial t}\left( -\frac{\partial \vec{B}}{\partial t} \right)$$
$$\nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}$$

---

### 4.2 Velocity of Electromagnetic Waves
Comparing these field equations with the 3D classical wave equation:

$$\nabla^2 f = \frac{1}{v^2} \frac{\partial^2 f}{\partial t^2}$$

The propagation speed of electromagnetic waves in vacuum $c$ is:

$$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$$

Substituting fundamental constants $\epsilon_0 \approx 8.854 \times 10^{-12} \text{ F/m}$ and $\mu_0 = 4\pi \times 10^{-7} \text{ H/m}$:

$$c = \frac{1}{\sqrt{(4\pi \times 10^{-7})(8.854 \times 10^{-12})}} \approx 3.00 \times 10^8 \text{ m/s}$$

This numerical value equals the speed of light, demonstrating that light is an electromagnetic wave.