# Chapter 6: Electromagnetic Induction

---

## 1. Motional EMF

### 1.1 Definition
Motional electromotive force ($\text{emf}$) is produced by the relative motion between a magnetic field and a conducting loop or rod[cite: 2].

---

### 1.2 Flux Rule for a Rectangular Loop Moving in a Uniform Magnetic Field
Consider a rectangular loop $abcd$ of width $ab = h$, with a length $s$ remaining inside a uniform magnetic field $\vec{B}$ (directed into the page)[cite: 2]. The loop moves to the right with velocity $\vec{v}$ through a total circuit resistance $R$[cite: 2].

1. **Lorentz Force per Unit Charge:**
   Charges inside the conductor experience a magnetic force $\vec{F} = q(\vec{v} \times \vec{B})$[cite: 2]. The magnetic force per unit charge is:
   $$\vec{f}_{\text{mag}} = \vec{v} \times \vec{B}$$[cite: 2]

2. **Force along loop segments:**
   * **Side $ab$:** $(f_{\text{mag}})_{ab} = vB$, directed along $a \to b$ (parallel to segment path $d\vec{l}$)[cite: 2].
   * **Sides $ad$ and $bc$:** $(f_{\text{mag}})_{ad} = (f_{\text{mag}})_{bc} = vB$, directed perpendicular to the segment lengths ($d\vec{l} \perp \vec{f}_{\text{mag}}$), contributing zero net work[cite: 2].
   * **Side $cd$:** Outside the field ($\vec{B} = 0$), so $f_{\text{mag}} = 0$[cite: 2].

3. **Work Done / Induced EMF ($\mathcal{E}$):**
   $$\mathcal{E} = \oint \vec{f}_{\text{mag}} \cdot d\vec{l} = \int_a^b \vec{f}_{\text{mag}} \cdot d\vec{l} = v B h$$[cite: 2]

4. **Relation to Magnetic Flux ($\Phi$):**
   The flux linked with the loop is $\Phi = B A = B s h$[cite: 2]. As the loop exits the field, $s$ decreases:
   $$\frac{d\Phi}{dt} = B h \frac{ds}{dt} = -v B h$$[cite: 2]

   Comparing this with the induced $\text{emf}$ yields the **Flux Rule**:
   $$\mathcal{E} = -\frac{d\Phi}{dt}$$[cite: 2]

---

### 1.3 Flux Rule for an Arbitrary Loop Moving in a Non-Uniform Field
Consider an arbitrarily shaped loop moving with velocity $\vec{v}$ in a static non-uniform magnetic field $\vec{B}$[cite: 2].

1. **Infinitesimal Area / Ribbon Sweep:**
   In time $dt$, an elemental loop segment $d\vec{l}$ moves by $\vec{v} dt$, sweeping out a ribbon surface element:
   $$d\vec{a} = \vec{v} dt \times d\vec{l} = (\vec{v} \times d\vec{l}) dt$$[cite: 2]

2. **Flux Change:**
   The flux change across the ribbon is:
   $$d\Phi = \oint_{\text{ribbon}} \vec{B} \cdot d\vec{a} = \oint \vec{B} \cdot (\vec{v} \times d\vec{l}) dt$$[cite: 2]
   $$\frac{d\Phi}{dt} = \oint (\vec{B} \times \vec{v}) \cdot d\vec{l} = -\oint (\vec{v} \times \vec{B}) \cdot d\vec{l}$$[cite: 2]

3. **Connecting to $\text{EMF}$:**
   Since $\vec{f}_{\text{mag}} = \vec{v} \times \vec{B}$:
   $$\frac{d\Phi}{dt} = -\oint \vec{f}_{\text{mag}} \cdot d\vec{l} = -\mathcal{E} \implies \mathcal{E} = -\frac{d\Phi}{dt}$$[cite: 2]

---

## 2. Faraday's Law of Electromagnetic Induction

### 2.1 Statement of Faraday's Laws
1. A change in magnetic flux linked with a closed circuit produces an induced $\text{emf}$ in the circuit[cite: 2].
2. The induced $\text{emf}$ persists only as long as the change in flux continues[cite: 2].
3. The magnitude of the induced $\text{emf}$ is directly proportional to the time rate of change of magnetic flux:
   $$\mathcal{E} = -\frac{d\Phi}{dt}$$[cite: 2]

---

### 2.2 Integral and Differential Forms
For a surface $S$ bounded by a closed contour $C$ in a time-varying magnetic field $\vec{B}$:

$$\Phi = \int_S \vec{B} \cdot d\vec{a}$$[cite: 2]
$$\mathcal{E} = \oint_C \vec{E} \cdot d\vec{l} = -\frac{d}{dt} \int_S \vec{B} \cdot d\vec{a}$$[cite: 2]

Applying **Stokes' Theorem** to the line integral of electric field $\vec{E}$:
$$\int_S (\nabla \times \vec{E}) \cdot d\vec{a} = -\int_S \frac{\partial \vec{B}}{\partial t} \cdot d\vec{a}$$[cite: 2]

Comparing integrands yields the **Differential Form of Faraday's Law**:
$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$[cite: 2]

Substituting $\vec{B} = \nabla \times \vec{A}$ (where $\vec{A}$ is the magnetic vector potential):
$$\nabla \times \vec{E} = -\frac{\partial}{\partial t}(\nabla \times \vec{A}) = \nabla \times \left( -\frac{\partial \vec{A}}{\partial t} \right)$$[cite: 2]

$$\vec{E} = -\frac{\partial \vec{A}}{\partial t}$$[cite: 2]

---

## 3. Lenz's Law

### 3.1 Statement & Energy Conservation
**Lenz's Law:** The direction of an induced current is always such that it opposes the change in magnetic flux that produces it[cite: 2].

* **Energy Conservation:** Mechanical work performed to overcome electromagnetic opposition is directly converted into electrical energy (induced $\text{emf}$)[cite: 2].

---

### 3.2 Field Analogies & Vector Potential Relation
From Faraday's Law ($\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$) and Ampere's Law ($\nabla \times \vec{B} = \mu_0 \vec{J}$), assuming $\nabla \cdot \vec{E} = 0$ and $\nabla \cdot \vec{B} = 0$:

1. By analogy to the **Biot-Savart Law** for magnetic fields:
   $$\vec{B} = \frac{\mu_0}{4\pi} \int \frac{\vec{J} \times \hat{r}}{r^2} d\tau$$[cite: 2]
   
   The induced electric field is expressed as:
   $$\vec{E} = -\frac{1}{4\pi} \int \frac{\left( \frac{\partial \vec{B}}{\partial t} \right) \times \hat{r}}{r^2} d\tau = -\frac{d}{dt} \left\{ \frac{1}{4\pi} \int \frac{\vec{B} \times \hat{r}}{r^2} d\tau \right\}$$[cite: 2]

2. Since $\vec{A} = \frac{1}{4\pi} \int \frac{\vec{B} \times \hat{r}}{r^2} d\tau$:
   $$\vec{E} = -\frac{\partial \vec{A}}{\partial t}$$[cite: 2]

   *Verification:* $\nabla \times \vec{E} = -\nabla \times \frac{\partial \vec{A}}{\partial t} = -\frac{\partial}{\partial t}(\nabla \times \vec{A}) = -\frac{\partial \vec{B}}{\partial t}$[cite: 2].

---

## 4. Self-Induction

### 4.1 Concept & Coefficient of Self-Inductance ($L$)
When a changing current flows through a coil, the magnetic flux linked with the coil changes, inducing a back-$\text{emf}$ that opposes the variation in current[cite: 2].

* **Flux Relation:**
  $$\Phi \propto I \implies \Phi = L I$$[cite: 2]
  *(where $L$ is the self-inductance of the coil).*[cite: 2]

* **Induced EMF:**
  $$\mathcal{E} = -\frac{d\Phi}{dt} = -L \frac{dI}{dt}$$[cite: 2]

* **Definition of $L$:** The ratio of back-$\text{emf}$ to the rate of change of current:
  $$L = \frac{-\mathcal{E}}{dI/dt}$$[cite: 2]
* **SI Unit:** Henry ($\text{H}$)[cite: 2].

---

### 4.2 Growth of Current in an $RL$ Circuit
A battery of constant $\text{emf}$ $\mathcal{E}_0$ is connected in series with an inductor $L$ and resistor $R$[cite: 2].

1. **Differential Equation:**
   $$\mathcal{E}_0 - L \frac{dI}{dt} = I R$$[cite: 2]
   $$\frac{dI}{\frac{\mathcal{E}_0}{R} - I} = \frac{R}{L} dt$$[cite: 2]

2. **Integration:**
   $$\int -\frac{d\left(\frac{\mathcal{E}_0}{R} - I\right)}{\frac{\mathcal{E}_0}{R} - I} = \int \frac{R}{L} dt$$[cite: 2]
   $$\ln\left( \frac{\mathcal{E}_0}{R} - I \right) = -\frac{R}{L} t + C_0$$[cite: 2]

3. **Applying Boundary Condition ($I = 0$ at $t = 0$):**
   $$C_0 = \ln\left(\frac{\mathcal{E}_0}{R}\right)$$[cite: 2]
   $$\ln\left( \frac{\frac{\mathcal{E}_0}{R} - I}{\frac{\mathcal{E}_0}{R}} \right) = -\frac{R}{L} t$$[cite: 2]

4. **Current Equation:**
   $$I(t) = \frac{\mathcal{E}_0}{R} \left( 1 - e^{-\frac{R}{L} t} \right)$$[cite: 2]

---

### 4.3 Self-Inductance per Unit Length of a Long Solenoid
For a long solenoid of radius $R$ with $n$ turns per unit length carrying current $I$:

1. **Magnetic Field:** $B = \mu_0 n I$[cite: 2]
2. **Total Flux in Length $l$ (Total turns $N = n l$):**
   $$\Phi = (B) \cdot (N) \cdot (\text{Area}) = (\mu_0 n I) (n l) (\pi R^2) = (\mu_0 \pi n^2 R^2 l) I$$[cite: 2]
3. **Self-Inductance ($L$):**
   $$L = \mu_0 \pi n^2 R^2 l$$[cite: 2]
4. **Inductance per Unit Length ($L/l$):**
   $$\frac{L}{l} = \mu_0 \pi n^2 R^2$$[cite: 2]

---

## 5. Mutual Induction

### 5.1 Concept & Coefficient of Mutual Inductance ($M$)
When two coils $C_1$ and $C_2$ are placed near each other, a changing current $I_1$ in $C_1$ causes a change in magnetic flux $\Phi_2$ through $C_2$, inducing an $\text{emf}$ in $C_2$[cite: 2].

$$\Phi_2 \propto I_1 \implies \Phi_2 = M_{21} I_1$$[cite: 2]
$$\mathcal{E}_2 = -\frac{d\Phi_2}{dt} = -M_{21} \frac{dI_1}{dt}$$[cite: 2]

---

### 5.2 Neumann Formula & Reciprocity Theorem
Consider two loops 1 and 2 separated by vector $\vec{r}$ carrying currents $I_1$ and $I_2$ respectively[cite: 2].

1. **Vector Potential due to Loop 1:**
   $$\vec{A}_1 = \frac{\mu_0 I_1}{4\pi} \oint_{\text{Loop 1}} \frac{d\vec{l}_1}{r}$$[cite: 2]

2. **Flux through Loop 2:**
   $$\Phi_2 = \int_{S_2} \vec{B}_1 \cdot d\vec{a}_2 = \oint_{\text{Loop 2}} \vec{A}_1 \cdot d\vec{l}_2 = \left( \frac{\mu_0}{4\pi} \oint_{\text{Loop 2}} \oint_{\text{Loop 1}} \frac{d\vec{l}_1 \cdot d\vec{l}_2}{r} \right) I_1$$[cite: 2]

3. **Neumann Formula for Mutual Inductance:**
   $$M_{21} = \frac{\mu_0}{4\pi} \oint_{\text{Loop 2}} \oint_{\text{Loop 1}} \frac{d\vec{l}_1 \cdot d\vec{l}_2}{r}$$[cite: 2]

4. **Reciprocity Theorem:**
   Since $d\vec{l}_1 \cdot d\vec{l}_2 = d\vec{l}_2 \cdot d\vec{l}_1$:
   $$M_{12} = M_{21} = M$$[cite: 2]
   
   **Statement:** The magnetic flux through Loop 2 when current $I$ flows in Loop 1 is identical to the flux through Loop 1 when the same current $I$ flows in Loop 2, regardless of shapes, sizes, or positions[cite: 2].

---

## 6. Energy Stored in a Magnetic Field

### 6.1 Derivation from Circuit Theory
Work done against induced back-$\text{emf}$ ($\mathcal{E} = -L \frac{dI}{dt}$) to increase current from $0$ to $I$:

1. **Power delivered:**
   $$P = -\mathcal{E} I = L I \frac{dI}{dt}$$[cite: 2]

2. **Total Work / Energy Stored ($W$):**
   $$W = \int_0^t P dt = \int_0^I L I dI = \frac{1}{2} L I^2$$[cite: 2]

---

### 6.2 Field Form Derivation
Using $\Phi = L I = \oint_C \vec{A} \cdot d\vec{l}$:

1. **Work in terms of Vector Potential ($\vec{A}$) and Current Density ($\vec{J}$):**
   $$W = \frac{1}{2} I \oint_C \vec{A} \cdot d\vec{l} = \frac{1}{2} \int_{\text{volume}} (\vec{A} \cdot \vec{J}) d\tau$$[cite: 2]

2. **Substituting Ampere's Law ($\vec{J} = \frac{1}{\mu_0} \nabla \times \vec{B}$):**
   $$W = \frac{1}{2\mu_0} \int_{\text{volume}} \vec{A} \cdot (\nabla \times \vec{B}) d\tau$$[cite: 2]

3. **Applying Vector Identity $\vec{A} \cdot (\nabla \times \vec{B}) = B^2 - \nabla \cdot (\vec{A} \times \vec{B})$:**
   $$W = \frac{1}{2\mu_0} \left[ \int_{\text{volume}} B^2 d\tau - \int_{\text{volume}} \nabla \cdot (\vec{A} \times \vec{B}) d\tau \right]$$[cite: 2]

4. **Applying Divergence Theorem to the surface integral:**
   $$W = \frac{1}{2\mu_0} \left[ \int_{\text{volume}} B^2 d\tau - \oint_{\text{surface}} (\vec{A} \times \vec{B}) \cdot d\vec{a} \right]$$[cite: 2]

   Integrating over all space, the surface boundary goes to infinity where $\vec{A}$ and $\vec{B} \to 0$, causing the surface integral to vanish:
   $$W = \frac{1}{2\mu_0} \int_{\text{all space}} B^2 d\tau$$[cite: 2]

5. **Magnetic Energy Density ($u_m$):**
   $$u_m = \frac{B^2}{2\mu_0}$$[cite: 2]

---

## 7. Solved Problems

### Problem 1: Mutual Inductance of Concentric Solenoids
A short solenoid (length $l$, radius $a$, $n_1$ turns/unit length) lies along the axis of a long solenoid (radius $b$, $n_2$ turns/unit length)[cite: 2]. Current $I$ flows through the short solenoid[cite: 2]. Find the flux through the long solenoid and the mutual inductance $M$[cite: 2].

* **Solution using Reciprocity Theorem:**
  1. Pass current $I$ through the **long solenoid** instead[cite: 2].
  2. Field inside long solenoid: $B = \mu_0 n_2 I$[cite: 2].
  3. Flux linked with the inner short solenoid (total turns $N_1 = n_1 l$, area $\pi a^2$):
     $$\Phi_{\text{short}} = (\mu_0 n_2 I) (n_1 l) (\pi a^2) = (\mu_0 \pi a^2 n_1 n_2 l) I$$[cite: 2]
  4. By reciprocity theorem, $\Phi_{\text{long}} = \Phi_{\text{short}}$:
     $$\Phi_{\text{long}} = (\mu_0 \pi a^2 n_1 n_2 l) I$$[cite: 2]
  5. Mutual Inductance ($M = \Phi/I$):
     $$M = \mu_0 \pi a^2 n_1 n_2 l$$[cite: 2]

---

### Problem 2: Energy & Self-Inductance of a Coaxial Cable
A long coaxial cable carries current $I$ along the inner conductor surface (radius $a$) and back along the outer cylinder (radius $b$)[cite: 2]. Find the energy stored and self-inductance in length $l$[cite: 2].

* **Solution:**
  1. **Magnetic Field via Ampere's Law:**
     * $r < a$: $B = 0$[cite: 2]
     * $a < r < b$: $B = \frac{\mu_0 I}{2\pi r}$[cite: 2]
     * $r > b$: $B = 0$[cite: 2]

  2. **Energy Stored ($W_m$):**
     Elemental volume $d\tau = 2\pi r dr \, l$[cite: 2]:
     $$W_m = \frac{1}{2\mu_0} \int_a^b \left( \frac{\mu_0 I}{2\pi r} \right)^2 (2\pi r l \, dr) = \frac{\mu_0 I^2 l}{4\pi} \int_a^b \frac{1}{r} dr = \frac{\mu_0 l I^2}{4\pi} \ln\left(\frac{b}{a}\right)$$[cite: 2]

  3. **Self-Inductance ($L$):**
     Comparing $W_m = \frac{1}{2} L I^2$:
     $$L = \frac{\mu_0 l}{2\pi} \ln\left(\frac{b}{a}\right)$$[cite: 2]

---

### Problem 3: Energy & Self-Inductance of a Solenoid Section
Find the energy stored in length $l$ of a long solenoid (radius $R$, $n$ turns/unit length, current $I$) and deduce $L$[cite: 2].

* **Solution:**
  1. Internal uniform field $B = \mu_0 n I$; external field $B = 0$[cite: 2].
  2. Solenoid section volume $V = \pi R^2 l$[cite: 2].
  3. Energy stored:
     $$W_m = \frac{1}{2\mu_0} B^2 V = \frac{1}{2\mu_0} (\mu_0 n I)^2 (\pi R^2 l) = \frac{1}{2} \pi \mu_0 n^2 R^2 l I^2$$[cite: 2]
  4. Comparing with $W_m = \frac{1}{2} L I^2$:
     $$L = \pi \mu_0 n^2 R^2 l$$[cite: 2]