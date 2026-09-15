# Day 2 Cheat Sheet — Air Pollution, Water Treatment, LCA/EIA, Green Engineering, Ch.1

---

## 1. ESP (ELECTROSTATIC PRECIPITATOR) — Deutsch-Anderson Equation

### Core Formula
```
η = 1 − e^(−ωA/Q)
```
Solve for A:
```
A = −(Q/ω) × ln(1 − η)
```
- η = fractional collection efficiency (decimal, e.g. 0.98 for 98%)
- A = total collector plate area (m²)
- Q = volumetric flow rate of gas (m³/s)
- ω = effective drift velocity (m/s)

### Two Question Shapes You'll See

**Type 1 — Solve for A given η:**
1. Convert η to decimal if given as %
2. Plug into `A = −(Q/ω) × ln(1 − η)`
3. Watch sign: `ln(1 − η)` is negative, and there's a negative sign out front → A comes out positive

**Type 2 — Given A, find η at that area (or after halving/doubling A):**
1. Rearrange to `η = 1 − e^(−ωA/Q)`
2. Plug in the new A directly
3. **Common trick:** "if you reduce area by half, what's the new efficiency?" — just halve A and recompute η. Efficiency does NOT scale linearly (it's exponential), so don't just halve the % — recalculate from the formula.

**Practice:** Do one of each type from past papers (Apr/May 2023 Q10 and May/Jun 2022 Q15 are both ESP numericals).

---

## 2. CYCLONE SEPARATORS

- **Mechanism:** Inlet gas stream velocity is converted into a confined **vortex**; **centrifugal force** drives suspended particles to the wall of the cyclone body, where they fall out.
- No moving parts.
- Best for **larger particles** (coarse), less effective on fine PM compared to ESP.
- **Recurring MCQ:** "the force that drives particles to the wall is ___" → **centrifugal** (not gravitational, electrostatic, or magnetic)

### Cyclone vs ESP — Differentiate Table (memorize this shape for "differentiate between" questions)

| | Cyclone Separator | Electrostatic Precipitator |
|---|---|---|
| Mechanism | Centrifugal force (vortex) | Electrostatic charge + attraction to charged plates |
| Particle size | Larger/coarse particles | Fine particles (smoke, fine dust) |
| Moving parts | None | None, but has charged electrodes |
| Typical use | Pre-cleaning, industrial dust | Power plants, cement/steel industries |
| Efficiency basis | Geometry/velocity dependent | Deutsch-Anderson equation (area, flow, drift velocity) |

---

## 3. SOUND LEVEL (dB) COMBINATION

### Formula
```
L_total = 10 × log₁₀( Σ 10^(Li/10) )
```

**Steps:**
1. Convert each dB value to its linear intensity ratio: `10^(Li/10)`
2. Sum all the linear ratios
3. Take `10 × log₁₀` of the sum

**Example (68, 79, 75 dB):**
```
10^6.8 + 10^7.9 + 10^7.5 = 6.31M + 79.4M + 31.6M ≈ 117.3M
L_total = 10 × log₁₀(117.3×10⁶) ≈ 80.7 dB
```
This is a guaranteed MCQ or short numerical every year — practice 2-3 combinations until the log steps are fast on a calculator.

---

## 4. CRITERIA AIR POLLUTANTS, AQI, AQS

### The Six Criteria Pollutants (memorize the list cold)
```
CO — Lead (Pb) — NOx — Ground-level Ozone (O3) — Particulate Matter (PM) — SOx
```

| Pollutant | Key source | Key fact |
|---|---|---|
| CO | Combustion (vehicles, stoves) | Binds hemoglobin → carboxyhemoglobin, reduces O2 delivery |
| Pb | Ore/metal processing, leaded fuel, battery mfg | Highly toxic, found near smelters |
| PM (PM10/PM2.5) | Dust, soot, smoke | PM10 ≤10µm; PM2.5 ≤2.5µm (includes ultrafine <0.1µm) |
| NOx | Combustion at high temp, vehicles, lightning | Forms smog, acid rain, affects tropospheric ozone |
| O3 (ground-level) | Secondary pollutant (NOx + VOCs + sunlight) | "Bad" at ground level, "good" in stratosphere (UV protection) |
| SOx | Burning sulfur-containing fuel (coal, oil) | Causes acid rain, respiratory illness |

### Definitions
- **AQI (Air Quality Index):** a measure of how clean/polluted the air is — shows changes in pollution amount
- **AQS (Air Quality Standard):** the **acceptable threshold level** of air pollution, defined in terms of health/environmental impact — components are indicator, averaging time, level, form

### Nepal-Specific Standards (recall only, quick hits)
- **Nepal Vehicle Emission Standard 2056** → based on Euro-1
- **Nepal Vehicle Emission Standard 2069** → equivalent to Euro-3
- **NAAQS Nepal** → first established 2003, revised 2069 (2012 AD)
- **Brick Kiln Chimney/Emission Standard 2074** → sets stack height + emission limits for brick industries

### Atmospheric Conditions & Pollution Episodes
- **Inversion** (temperature increases with height, traps pollutants near ground) → causes serious pollution episodes
- **Super-adiabatic lapse rate** → promotes dispersion (good)
- Winter pollution in Kathmandu is worse due to **inversion layers** trapping pollutants at low mixing height

---

## 5. WATER / WASTEWATER TREATMENT TRAIN

### Sequence & What Each Removes

| Unit Process | Removes | Principle |
|---|---|---|
| Screening | Large debris/solids | Physical barrier |
| Coagulation | Colloidal/suspended particles | Chemical (destabilize charge) |
| Sedimentation | Settleable solids | Gravity settling |
| Filtration | Fine turbidity, remaining colloidal matter | Physical straining through media |
| Disinfection (Chlorination) | Harmful microorganisms/pathogens | Chemical oxidation/kill |
| Aeration | Dissolved gases, some VOCs, adds O2 | Gas-liquid transfer |

**Recurring MCQ:** "___ is used to kill harmful microorganisms before distribution" → **Chlorination/Disinfection**

### Sewer Hierarchy (size order — recurring MCQ)
```
House connection < Laterals < Mains < Outfall (increasing size)
```
So decreasing order: **Outfall > Mains > Laterals > House**

### Sewer Types
- **Sanitary sewer** — domestic/industrial wastewater only
- **Storm sewer** — stormwater/runoff only
- **Combined sewer** — both together

### BOD Mass Balance at a Mixing Point (diagram-based problem)
Two streams combine (e.g., lake inflow + another discharge):
```
Q1·C1 + Q2·C2 = Q_combined · C_combined
```
Solve for whichever term is missing. **Watch:** make sure Q_combined = Q1 + Q2 if it's simple mixing with no loss.

### HRT (Hydraulic Retention Time)
```
HRT = Volume / Flow rate
```
Indicates: **average time water/wastewater spends in a treatment unit**

### Settling Tank Design
```
Overflow rate = Q / A     (A = surface area of tank)
Detention time = V / Q
```
Given overflow rate and detention time, back-calculate tank dimensions (assume L:W ratio if given).

---

## 6. LCA (LIFE CYCLE ASSESSMENT) + FUNCTIONAL UNIT + EIA/IEE/BES

### LCA — 4 Stages (memorize with one-liners)
1. **Goal & Scope Definition** — defines how big a part of the product life cycle is assessed and to what end
2. **Inventory Analysis** — describes material & energy flows, raw materials consumed, emissions to environment
3. **Impact Assessment** — evaluates indicator results of impact categories; normalization & weighting
4. **Interpretation** — critical review, data sensitivity, result presentation

**"Cradle to grave"** = full life cycle: raw material extraction → manufacture → use → transport → waste management

### Functional Unit (FU)
**Definition:** A quantified description of the performance of the product system, used as a reference/comparison point.

**Worked example pattern (plates/markers style):**
```
Total demand = (uses per day) × (days per period)... → total servings/uses needed
Units required = Total demand / (uses per unit before replacement)
```
E.g., Melamine plates: 24,000 servings/yr ÷ 1,500 servings/unit = 16 units needed.

**Practice:** Redo the marker FU problem (writing 20 hrs/week for 2.5 months, marker lasts 10 hrs continuous) — find number of markers needed.

### Nepal's Three Levels of Environmental Study (EPR-based)

| Level | Example Thresholds (memorize 2-3 each) |
|---|---|
| **BES** (Brief Environmental Study) | Hospitals 16-25 beds; Hotels 25-50 beds; Bridges up to 250m; municipal/urban roads |
| **IEE** (Initial Environmental Examination) | Hospitals 25-100 beds; Hotels 51-100 beds; Bridges >250m; new roads up to 25km; Hydropower up to 50MW |
| **EIA** (Environmental Impact Assessment) | Hospitals/hotels >100 beds; National park/forest projects >5ha; Hydropower >50MW |

### EIA — Functions (for "explain the role of EIA" questions)
- Identifies potential environmental consequences
- Examines significance of environmental implications
- Assesses whether impacts can be mitigated
- Recommends preventive/corrective measures
- Informs decision-makers
- Advises whether the project should proceed

### IEE vs EIA — Differentiate (common Section C question)

| | IEE | EIA |
|---|---|---|
| Scope | Smaller/medium projects | Larger, high-impact projects |
| Detail level | Initial/preliminary examination | Full, comprehensive assessment |
| Threshold | Mid-range (e.g. hospital 25-100 beds) | High-range (e.g. hospital >100 beds) |
| Purpose | Screen for potential impact | Detailed impact study + mitigation plan |

---

## 7. GREEN ENGINEERING — 12 PRINCIPLES

Pick your best 4 and have a 2-sentence explanation + example ready for each (so any "explain any 2" question is covered):

1. **Inherent rather than circumstantial** — design out hazards rather than add protective measures after
2. **Prevention instead of treatment** — prevent waste/pollution generation rather than treating it after creation
3. **Design for separation** — design products so materials can be easily separated/purified for reuse
4. **Maximize efficiency** — use mass, energy, space, and time efficiently
5. **Output-pulled versus input-pushed** — design driven by output needs, minimizing excess energy/material input
6. **Conserve complexity** — don't add unnecessary complexity when simpler design achieves the goal
7. **Durability rather than immortality** — design for appropriate lifespan, not indestructibility (avoids over-engineering waste)
8. **Meet need, minimize excess** — avoid over-design/unnecessary capacity
9. **Minimize material diversity** — use fewer distinct materials to ease recycling
10. **Integrate material and energy flows** — connect flows across systems (e.g., waste heat reuse)
11. **Design for commercial afterlife** — design products with a planned reuse/resale life after primary use
12. **Renewable rather than depleting** — prefer renewable resources over finite ones

**Suggested 4 to master:** #2 (Prevention instead of treatment), #4 (Maximize efficiency), #9 (Minimize material diversity), #12 (Renewable rather than depleting) — these have the easiest, most intuitive real-world examples (e.g., solar vs coal for #12).

---

## 8. CHAPTER 1 TOPICS (quick recall)

- **Engineering Project:** a planned undertaking with defined scope, resources, and objective to solve a problem/create value — give an example from your own domain (e.g., a bridge design, a software system)
- **Major consideration in engineering decisions:** balancing technical feasibility, economics, safety, and environmental/social impact
- **Traditional vs Context-Sensitive Design:**
  - Traditional: standardized, one-size-fits-all design approach
  - Context-sensitive: design adapted to the specific environmental, social, and community context of the project site
- **IRR (Internal Rate of Return):** the discount rate at which NPV of a project = 0; used to evaluate project financial viability
- **NEC (Nepal Engineering Council):** regulates engineering profession in Nepal — objectives include licensing, maintaining standards, protecting public interest
- **Incrementalism / Redefining problem / Redefining system boundary / Re-engineering system:**
  - **Incrementalism = lowest degree of freedom** (recurring MCQ answer) — small, constrained changes within existing system
  - Re-engineering the system = highest degree of freedom — complete redesign

---

## Day 2 Self-Check
Before moving to Day 3 drilling, you should be able to, **without notes**:
- [ ] Solve an ESP problem both ways (find A given η; find η given a changed A)
- [ ] Recite the 6 criteria pollutants and one fact about each
- [ ] Combine 3 dB values correctly
- [ ] List the water treatment train in order and what each step removes
- [ ] State sewer size order (outfall > mains > laterals > house)
- [ ] List the 4 LCA stages with a one-liner for each
- [ ] Solve a Functional Unit "units needed" problem
- [ ] Give 2-3 example thresholds for BES, IEE, and EIA each
- [ ] Explain any 2 Green Engineering principles with an example, fluently
