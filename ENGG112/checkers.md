# ENGG 112 — Self-Assessment Checklist

**New exam date:** Sunday, 21 September
**Today:** Thursday, 17 September (light refresher day — don't try to do the whole checklist today)

**How to use this:** Go through every item below and mark it honestly:
- ✅ = solid, could do it cold on the exam
- 🟡 = rusty, remember the idea but would fumble the execution
- ❌ = blank / need to relearn from scratch

Items marked **⭐** are the high-yield topics from the past-paper analysis (appeared in nearly every year). Weight your re-study time toward those first.

Once you've gone through this, send me back the results and I'll build the actual day-by-day study plan for Fri–Sun.

---

## Chapter 1: Basic Circuit Theory

### Resistance networks
- [ ] Series and parallel resistance combination rules
- [ ] Reducing multi-branch/ladder networks step by step ⭐
- [ ] Delta (Δ) to Star (Y) conversion formulas
- [ ] Star (Y) to Delta (Δ) conversion formulas
- [ ] Solving cube/bridge-type resistor networks (symmetry tricks) ⭐
- [ ] Color coding → resistance value + tolerance (MCQ staple)

### Source transformation
- [ ] Converting a voltage source + series resistor → current source + parallel resistor
- [ ] Converting a current source + parallel resistor → voltage source + series resistor
- [ ] Knowing when source transformation simplifies a circuit vs. when it doesn't help

### Mesh analysis ⭐
- [ ] Assigning mesh currents and writing KVL equations for a simple 2-mesh circuit
- [ ] Handling a circuit with 3+ meshes
- [ ] Setting up mesh equations when a current source is shared between two meshes (supermesh)
- [ ] Solving the resulting simultaneous equations (by hand — substitution or matrix)
- [ ] Extracting current through a specific resistor and voltage across it from mesh currents

### Nodal analysis ⭐
- [ ] Assigning node voltages and writing KCL equations for a simple circuit
- [ ] Handling a circuit with a voltage source between two non-reference nodes (supernode)
- [ ] Solving multi-node systems
- [ ] Extracting a specific branch current from node voltages

### Superposition theorem ⭐
- [ ] Correctly "killing" a voltage source (short it) and a current source (open it) one at a time
- [ ] Solving for the desired current/voltage separately for each source
- [ ] Summing the individual contributions correctly (with sign/direction care)

### Thevenin's theorem ⭐
- [ ] Finding open-circuit voltage (V_th) at the terminals of interest
- [ ] Finding Thevenin resistance (R_th) by suppressing all independent sources
- [ ] Finding R_th when there's a source inside (using V_th/I_sc method instead)
- [ ] Redrawing the equivalent circuit correctly

### Norton's theorem
- [ ] Finding short-circuit current (I_N) at the terminals of interest
- [ ] Finding Norton resistance (same as R_th)
- [ ] Converting between Thevenin and Norton equivalents

### Maximum power transfer
- [ ] Stating the condition (R_L = R_th) from memory
- [ ] Calculating R_L for maximum power in a numerical
- [ ] Calculating the actual maximum power delivered

---

## Chapter 2: AC Circuit Fundamentals

### Waveform values ⭐
- [ ] Definition and calculation of average value over one cycle
- [ ] Definition and calculation of RMS value over one cycle
- [ ] Doing this for a square/pulse waveform
- [ ] Doing this for a triangular/sawtooth waveform
- [ ] Doing this for a half-wave rectified sine
- [ ] Doing this for an irregular/piecewise waveform (the "weird" past-paper style)
- [ ] Form factor and peak factor definitions and calculation

### Phasors and impedance
- [ ] Converting between rectangular and polar form for impedance
- [ ] Adding/subtracting two sinusoids and finding phase relationship (leads/lags by how much) ⭐
- [ ] Reactance of an inductor (X_L = ωL) and how it scales with frequency
- [ ] Reactance of a capacitor (X_C = 1/ωC) and how it scales with frequency
- [ ] Combining R, X_L, X_C into a complex impedance Z = R + jX

### Series RLC resonance ⭐
- [ ] Resonant frequency formula (f₀) from memory
- [ ] Quality factor (Q) formula and what it represents
- [ ] Bandwidth (BW) formula and relation to Q and f₀
- [ ] Half-power frequency formulas (f₁, f₂)
- [ ] Power factor and phase behavior AT resonance
- [ ] **Forward direction:** given R, L, C → find f₀, Q, BW
- [ ] **Backward direction:** given BW and Q (or f₀ and BW) → find R, L, C ⭐ (2024/2025 style — flagged as a gap area)

### Parallel RLC / practical resonance
- [ ] Setting up nodal analysis with a parallel RLC branch
- [ ] Resonance condition for parallel circuits (differs from series!)
- [ ] Deriving the resonant frequency expression for a practical (non-ideal) parallel RLC circuit

### Power in AC circuits
- [ ] Active (real) power formula and units
- [ ] Reactive power formula and units
- [ ] Apparent power formula and units
- [ ] Power triangle relationship (S² = P² + Q²) and solving for the missing one
- [ ] Power factor definition, lagging vs. leading

### AC circuit analysis
- [ ] Mesh analysis with complex impedances (AC mesh) ⭐
- [ ] Nodal analysis with complex impedances (AC nodal) ⭐
- [ ] Current divider rule with impedances
- [ ] Voltage divider rule with impedances

---

## Chapter 3: Magnetic Circuits and Transformers

### Magnetic circuit basics
- [ ] MMF (magnetomotive force) definition and formula (N×I)
- [ ] Flux density (B) and its relation to flux (Φ) and area
- [ ] Reluctance formula and its analogy to electrical resistance
- [ ] Solving a series magnetic circuit (single material, no air gap)
- [ ] Solving a series magnetic circuit WITH an air gap (these "trip people up" — flagged) ⭐
- [ ] Electric circuit ↔ magnetic circuit analogy table (V↔MMF, I↔Φ, R↔Reluctance)

### Transformer theory
- [ ] EMF equation derivation from first principles ⭐
- [ ] Turns ratio formula (N_p/N_s = E_p/E_s = I_s/I_p)
- [ ] Calculating induced voltage E_s given primary data
- [ ] Calculating maximum flux (Φ_m) given voltage/frequency/turns
- [ ] Characteristics of an ideal transformer (list them)
- [ ] Input impedance of a transformer as seen from primary side

---

## Chapter 4: Electrical Machines and Instruments

### DC generator ⭐
- [ ] Basic construction (field, armature, commutator, brushes) — can you draw/label it?
- [ ] Working principle explanation, start to finish, in your own words
- [ ] Function of the commutator specifically (common MCQ trap)

### Induction motor
- [ ] Concept of slip
- [ ] Why rotor speed is always below synchronous speed
- [ ] Basic power factor behavior of induction motors

### Three-phase systems ⭐
- [ ] Line vs. phase voltage relationship in STAR connection (V_L = √3 × V_ph)
- [ ] Line vs. phase current relationship in STAR connection (I_L = I_ph)
- [ ] Line vs. phase voltage relationship in DELTA connection (V_L = V_ph)
- [ ] Line vs. phase current relationship in DELTA connection (I_L = √3 × I_ph)
- [ ] Finding phase angles (θ₂, θ₃) of a balanced 3-phase source given phase sequence
- [ ] Three-phase power formula: P = √3 × V_L × I_L × cosφ (know exactly when to use this one)
- [ ] Three-phase power formula: P = 3 × V_ph × I_ph × cosφ (and when to use THIS one instead — classic MCQ trap)
- [ ] Solving a balanced star-connected load problem end to end (line current, p.f., power)
- [ ] Solving a balanced star-delta connected system (mixed source/load configuration)
- [ ] Verifying neutral current I_N = 0 for a balanced load

### Measuring instruments
- [ ] What a kWh meter measures and why
- [ ] Purpose of a wattmeter
- [ ] Sensitivity vs. precision vs. resolution definitions (MCQ distinctions)

---

## After you finish

Send me back a rough summary — doesn't need to be item-by-item, just something like "Mesh/nodal I'm solid on, 3-phase is mostly ✅ but the phase-angle-finding part is 🟡, magnetic circuits with air gaps is basically ❌" — and I'll turn that into your Friday/Saturday/Sunday study plan.
