# ENVE101 Day1

## 1. MASS BALANCE

### General Mass Balance Equation (MBE)
```
Accumulation = Input − Output ± Generation/Reaction
```

### The 4 Special Cases (derive these from the general MBE — write them out cold)

| Case | Condition | Equation |
|---|---|---|
| Steady state, conservative | dC/dt = 0, no reaction | **Input = Output** |
| Unsteady state, conservative | dC/dt ≠ 0, no reaction | **Accumulation = Input − Output** |
| Steady state, non-conservative | dC/dt = 0, reaction occurs | **Input = Output + Reaction** (0 = In − Out − kVC) |
| Unsteady state, non-conservative | dC/dt ≠ 0, reaction occurs | **Accumulation = Input − Output − Reaction** |

- **Conservative** = substance doesn't degrade/react (e.g. salt, sediment)
- **Non-conservative** = substance degrades/reacts (e.g. formaldehyde → CO₂, BOD)

### CSTR (Continuously Stirred Tank Reactor) Setup
Assumptions: completely mixed → **C(tank) = C(effluent)**. Q_in = Q_out (usually).

**Steady-state, first-order reaction:**
```
0 = Q·C_in − Q·C − k·V·C
```
Solve for C:
```
C = (Q·C_in) / (Q + k·V)
```

### Worked Example Shape (smokers-in-bar / wood-stove type)
**Problem pattern:** N sources emit mass M each per hour → total emission rate. Pollutant reacts/decays with rate constant k. Fresh air flow Q in/out. Room volume V. Find steady-state concentration.

**Steps:**
1. Emission rate = (number of sources) × (rate per source) × (mass per unit) → convert to mass/time
2. Mass balance: `0 = (emission rate) + Q·C_in − Q·C_out − k·V·C`
   - If C_in = 0 (fresh air has no pollutant): `0 = emission rate − Q·C − k·V·C`
3. Solve: `C = emission rate / (Q + k·V)`
4. **Watch units** — convert everything to consistent time units (hr vs day) and consistent volume units (m³) before plugging in.
5. If asked to compare to a threshold (e.g. 0.1 ppm) — convert your C (usually mg/m³) to ppm using ideal gas relation at given T, P if required.

**Do 2-3 of these from past papers until the setup is automatic — don't just read, write out each step by hand.**

---

## 2. POPULATION PROJECTION

### Arithmetic Increase Method
Assumes constant increase per period.
```
Average increase = (P_last − P_first) / (number of intervals)
P_n = P_0 + n × (average increase)
```

### Geometric Increase Method
Assumes constant % growth rate.
```
r = (P_n / P_0)^(1/n) − 1        [find growth rate from historical data]
P_future = P_present × (1 + r)^n  [project forward]
```

**Practice routine:** Take the population table (given decade-by-decade), compute average arithmetic increase, project forward. Then compute geometric growth rate, project forward with that. Compare the two answers — they should differ (geometric > arithmetic for growing populations, typically).

**Common follow-up:** Once you have the future population, multiply by per-capita demand (lpcd) to get total water demand — often bundled into the same question.

---

## 3. WATER BALANCE / EVAPOTRANSPIRATION

### Core Equation
```
P + R_in = R_out + E + ΔS
```
- P = Precipitation
- R_in = Runoff into system
- R_out = Runoff out of system
- E = Evaporation/Evapotranspiration
- ΔS = Net change in storage (often 0 if "no seepage" / steady long-term assumed)

**Solve for whatever is unknown** — usually E:
```
E = P + R_in − R_out − ΔS
```

### Unit Watch-outs
- P is often given in mm/year or mm/month over an area — convert to volume: `Volume = depth × area`
- Flow rates (R_in, R_out) often given in m³/s — convert to consistent time period (multiply by seconds in a month/year) to match P's volume
- Express final E in **meters over the same time period** as asked (e.g., m/month or m/year)

### Practice Routine
Do 3 reps varying:
1. One where ΔS = 0 given explicitly ("no seepage")
2. One where ΔS is given as a nonzero volume
3. One where you must express P, R_in, R_out, and ΔS all in the same units (e.g., m³/month) before solving

---

## 4. SOLID WASTE NUMERICALS

### Moisture Content (MC%)
```
MC% = (Wet weight − Dry weight) / Wet weight × 100
```
Given wet weight and MC%, solve for dry weight:
```
Dry weight = Wet weight × (1 − MC%/100)
```

### Composition Table Calculation (the recurring table problem)
Given a table like:

| Component | % by mass | MC% | Density (kg/m³) |
|---|---|---|---|
| Food waste | 15 | 70 | 290 |
| Paper | 45 | 6 | 85 |
| ... | ... | ... | ... |

**Steps to compute overall MC%, dry mass, and overall density:**

1. **Overall MC%** = Σ (% by mass_i × MC%_i) / 100
   → weighted average of MC% using % by mass as weights

2. **Dry mass fraction** for each component = (% by mass_i) × (1 − MC%_i/100)
   → Sum these to get **total dry mass %** of the whole sample

3. **Overall density** (volume-weighted, NOT simple average):
   ```
   Overall density = 100 / Σ(% by mass_i / density_i)
   ```
   This is the harmonic-mean-style formula — because equal *mass* fractions occupy *different volumes* depending on density. Don't just average the density column directly.

4. **Energy content** (if asked): weighted average of energy content column using % by mass as weights, same pattern as MC%.

**Practice:** Do this full table calc (MC%, dry mass, density, energy content) for 2 different past-paper tables until you can identify which formula applies to which column without pausing.

### Modified Dulong's Formula (Heat Value)
```
HV (kJ/kg) = 337·C + 1428·(H − O/8) + 95·S
```
Where C, H, O, S = % carbon, hydrogen, oxygen, sulfur by mass (from elemental/chemical composition).

**Example use:** Given a chemical formula (e.g., ethanol CH₃CH₂OH), first find % composition by mass of C, H, O from molecular weight, then plug into the formula.

### Landfill Area Problems
```
Total annual waste mass = Population × per-capita generation rate × 365
Volume required = Total annual waste mass / compacted density
Area required = Volume required / depth
```
- **Watch which density to use**: source density (uncompacted, e.g. 120 kg/m³ in bins) vs compacted landfill density (e.g. 650-1000 kg/m³) — these are usually different values in the same problem; use the right one at the right step.
- Unit conversions: if area asked in **ha** → 1 ha = 10,000 m²; if in **anna** → 1 anna = 31.79 m² (given in some papers)

### Truck Capacity Problems (compaction variant)
```
Volume of waste at source density = Total waste mass / source density
Compare to truck capacity (m³) → determine trips needed or which truck suffices
```
If truck must fit everything in fixed trips: solve for the **required compaction density**:
```
Required density = (Total waste mass) / (Truck volume × number of trips)
```

**Do 2 landfill-area problems + 1 Modified Dulong's calc from past papers before moving on.**

---

## Quick Recall: SWM Process Flow & Waste Hierarchy (30 min, no calc)

**SWM Process Flow:**
```
Source → Collection → Transfer & Transport → Processing/Recovery → Disposal
```

**Waste Management Hierarchy (most → least preferred):**
```
Reduction > Reuse > Recycling > Recovery > Disposal
```
→ **Disposal is the LEAST preferred** (recurring MCQ answer)

**Collection Systems (know the 4):**
- Door-to-door: collector goes to each house
- Alley: residents bring waste to a common point in the alley
- Set-out: extra crew sets containers out; owner returns them
- Backyard/set-out-set-back: crew does everything, homeowner not involved at all

---

## Day 1 Self-Check
Before moving to Day 2, you should be able to, **without notes**:
- [ ] Write the general MBE and all 4 special-case reductions
- [ ] Set up and solve a CSTR steady-state concentration problem from scratch
- [ ] Compute a population projection both ways (arithmetic + geometric) from a raw data table
- [ ] Solve for the missing term in a water balance given P, R_in, R_out (and ΔS = 0 or given)
- [ ] Compute overall MC%, dry mass, and density from a solid waste composition table
- [ ] Set up a landfill area problem correctly (right density at the right step)