# ENVE 101 — End Semester Exam Breakdown
Based on 6 past papers: May/Jun 2022, Apr/May 2023, Jun/Jul 2024, Sep 2024, Sep 2024 (I/II), Mar 2025

---

## 1. Exam Structure

| Section | Format | Marks | Time |
|---|---|---|---|
| A | 20 MCQs, mostly 1-line numericals or definitions | 20 | 30 min |
| B | 5–8 long/medium questions (numericals + "explain/describe/derive") | 25–48 | remainder of 2.5 hrs |
| C | "Differentiate between ANY TWO/THREE" + "Short notes on ANY TWO" | 0–15 (not every year) | — |

Total: 75 marks. Section A is a separate 30-min sitting; Section B/C is the 2hr 30min paper.

---

## 2. Topics That Appear in EVERY Paper (highest priority)

### Numericals — practice until automatic

| Topic | Where it shows up | Formula / approach |
|---|---|---|
| **Mass balance — CSTR steady state** | 4/6 papers (smokers-in-bar formaldehyde/CO, always same structure) | Accumulation = In − Out − Reaction. Steady state: `0 = QC_in − QC_out − kVC`. Solve for C. |
| **Population projection** | Every long paper (same population table reused across years) | Arithmetic: `Pn = P0 + n·(avg growth)`. Geometric: `Pn = P0·(1+r)^n`, r from `(Pn/P0)^(1/n) − 1` |
| **Water balance / evapotranspiration** | Almost every paper | `P + R_in = R_out + E + ΔS` (per unit area/time as needed) |
| **Sediment/solids mass loading** | Every Section A + often Section B | `Mass flow rate = Q × C` (watch unit conversions: L/s → m³/day, mg/L → kg/m³) |
| **Solid waste: MC%, dry mass, density** | Every paper (identical table format, different numbers) | `MC% = (wet − dry)/wet × 100`; weighted density = Σ(%mass × density) |
| **Landfill area/volume** | Every paper | `Volume = (pop × per-capita rate × 365) / compacted density`; `Area = Volume / depth` |
| **Sound level (dB) combination** | Every paper, always MCQ | `L_total = 10·log₁₀(Σ 10^(Li/10))` |
| **HRT (Hydraulic Retention Time)** | Frequent | `HRT = Volume / Flow rate` |
| **ESP (electrostatic precipitator)** | Frequent, both MCQ and long numerical | Deutsch-Anderson: `η = 1 − e^(−ωA/Q)` |

### Conceptual — will very likely be asked as "explain/differentiate/short note"

- **General Mass Balance Equation** and its 4 reduced forms (steady/unsteady × conservative/non-conservative) — asked explicitly, word-for-word, in Jun/Jul 2024
- **IEE vs EIA vs BES** — the three levels of environmental study under Nepal's EPR, with example project thresholds (hospital beds, road km, hydropower MW)
- **Cyclone separator vs Electrostatic Precipitator** — differentiate
- **Functional Unit** — definition + worked example (appears almost every year, sometimes as MCQ, sometimes 3-mark definition)
- **Life Cycle Assessment (LCA)** — 4 stages (Goal & Scope → Inventory → Impact Assessment → Interpretation), "cradle to grave"
- **Green Engineering** — 12 principles, be able to explain any 2 with examples
- **Monod Equation** — full equation + two limiting cases (S >> Ks and S = Ks)
- **Sewer types/sizes** — House < Laterals < Mains < Outfall (decreasing size order tested as MCQ)
- **Solid waste sources & properties** — physical (density, MC), chemical (energy content, Dulong's formula), biological
- **Six criteria air pollutants** — CO, Pb, NOx, O₃, PM, SOx
- **Water treatment train** — Screening → Coagulation → Sedimentation → Filtration → Disinfection, and what each step removes

---

## 3. Chapter-by-Chapter Mapping

### Chapter 1 — Intro to Environmental Engineering
- Engineering project definition, examples from your domain
- Engineering decisions — major considerations
- Traditional vs context-sensitive design
- Units/dimensions, mass vs volume flow rate, approximations
- **Incrementalism vs Redefining the problem vs Redefining the system boundary vs Re-engineering the system** — "which has lowest degree of freedom" is a repeat MCQ (answer: Incrementalism)
- Internal Rate of Return (IRR) — appeared as MCQ + 4-mark explain question
- Nepal Engineering Council (NEC) — objectives, short note question

### Chapter 2 — Hydrology, Water & Wastewater
- Water cycle processes: precipitation, infiltration, evaporation, transpiration, percolation, runoff
- Catchment area definition (recurring MCQ)
- Water balance / mass balance for hydrological systems (P, Rin, Rout, ΔS, E) — **very high yield numerical**
- Population projection methods (arithmetic & geometric) — **guaranteed numerical**
- Water demand calculation from per-capita consumption
- Water treatment unit processes: screening, aeration, coagulation, sedimentation, filtration, disinfection (chlorination) — know what each removes and by what principle
- Settling tank design (overflow rate, detention time, dimensions)
- Sewer system: types (sanitary, storm, combined), components, schematic diagram, sewer hierarchy (house→lateral→main→outfall)
- BOD mass balance at a mixing point (two streams combining — appears as both MCQ and diagram-based question)
- Design discharge for combined sewer (peak factor, impermeability factor)

### Chapter 3 — Mass Transfer & Mass Balance
- Types of mass transfer: solid-liquid, liquid-gas, gas-liquid, solid-gas — with real examples (methane from anaerobic treatment = gas-liquid; fat/oil/grease removal = liquid-solid)
- Extensive vs Intensive properties (mass-dependent vs not)
- Conservative vs non-conservative substances
- General Mass Balance Equation and derivations for: steady state, unsteady state conservative, steady state non-conservative (no reaction), steady state non-conservative with reaction/generation — **write this out from memory, it's asked almost verbatim**
- CSTR concept — complete mixing, effluent conc. = tank conc.
- Feed, Bypass, Purge, Recycle streams — definitions and what each does
- Steady-state concentration problems (the "bar with smokers" / "kitchen with wood stoves" type) — **practice this exact problem shape**
- ppm/ppb conversions, mole fraction calculations

### Chapter 4 — Air Pollution
- Six criteria pollutants: CO, Pb, NOx, O₃, PM (PM10/PM2.5), SOx — sources, health effects
- Air Quality Index (AQI) and Air Quality Standards (AQS) — definitions, difference
- Nepal-specific: Vehicle Emission Standard 2069 (Euro-3 equivalent), NAAQS Nepal 2069, Brick Kiln chimney standard 2074, green sticker purpose
- Why air pollution peaks in winter in Nepal (inversion layer / mixing depth) — explain question, appears with SOx concentration numerical
- Cyclone separators — mechanism (centrifugal force), diagram
- Electrostatic Precipitators — mechanism, Deutsch-Anderson equation, **numerical: solve for area given efficiency, or efficiency given area/flow/drift velocity**
- Sound/noise pollution — dB combination formula (recurring MCQ), health implications
- Atmospheric conditions and pollution episodes: inversion vs adiabatic vs super/sub-adiabatic lapse rate

### Chapter 5/6 — Solid Waste Engineering
- Definitions: solid waste, SWM, ISWM (Integrated Solid Waste Management)
- SWM process flow: Source → Collection → Transfer & Transport → Processing/Recovery → Disposal
- Waste hierarchy — least preferred method is **Disposal** (recurring MCQ)
- Collection systems: door-to-door, alley, set-out, backyard/set-out-set-back
- Transfer stations — when NOT needed (short haul, small containers, small vehicles)
- Types of waste by source (municipal, industrial, agricultural), by regulation (hazardous/non-hazardous), medical waste (clinical/non-clinical), e-waste
- Hazardous waste properties: explosive, corrosive, toxic, carcinogenic
- Physical properties: density (Kathmandu typical 600-650 kg/m³), Moisture Content formula, weighted density calc from composition table — **guaranteed numerical, practice the table calc**
- Chemical properties: energy content, Modified Dulong's Formula (`337C + 1428(H − O/8) + 95S`)
- Truck capacity / landfill area problems (compaction density, depth, per-capita generation) — **guaranteed numerical**
- Incineration vs Sanitary Landfill — comparison table
- Landfill leachate definition
- Mulpani Cricket Stadium example (closed landfill reuse) — general knowledge point

### Chapter 6 — Environmental Management System
- EMS definition (USEPA), ISO 14001 main elements
- PDCA cycle (Plan-Do-Check-Act)
- LCA vs EIA distinction
- LCA stages: Goal & Scope, Inventory Analysis, Impact Assessment, Interpretation — **be ready to list & briefly explain all 4**
- "Cradle to grave" concept
- Functional Unit — definition + practice with the plates/markers style problem (units needed = total demand ÷ per-unit capacity)
- EIA definition and functions (identify impacts, assess significance, recommend mitigation, inform decision-makers)
- Nepal's 3 levels of environmental study (BES/IEE/EIA) with project-size thresholds — **memorize a few example thresholds** (hospital beds, road km, hydropower MW, forest area ha)
- Relevant laws: EPA 2076, EPR 2077, Solid Waste Management Act 2068, Water Resources Act 2049

### Chapter 7 — Climate Change & Green Engineering
- Carbon cycle — photosynthesis as main driver, ocean carbon sequestration (bicarbonate → calcium carbonate)
- Climate change signs: rising temperature, melting ice, rising sea level
- Greenhouse effect mechanism, major GHGs (CO₂, CH₄, O₃)
- Climate finance: definition, sources (public vs private), importance for Nepal specifically (high vulnerability, low emissions)
- **12 Principles of Green Engineering** — be able to name and explain any 2 with an example (this is asked nearly every year, either standalone or as an "OR" option)
  1. Inherent rather than circumstantial
  2. Prevention instead of treatment
  3. Design for separation
  4. Maximize efficiency
  5. Output-pulled vs input-pushed
  6. Conserve complexity
  7. Durability rather than immortality
  8. Meet need, minimize excess
  9. Minimize material diversity
  10. Integrate material and energy flows
  11. Design for commercial afterlife
  12. Renewable rather than depleting

---

## 4. Quick-Reference Formula Sheet

```
MASS BALANCE
Accumulation = Input − Output ± Reaction
Steady state:           Input = Output
Steady state, w/ rxn:   0 = In − Out − kVC   →  C = QC_in / (Q + kV)
Non-conservative, non-SS: Accumulation = Input − Output − KCV

WATER BALANCE
P + R_in = R_out + E + ΔS   (solve for whichever unknown)

POPULATION PROJECTION
Arithmetic:  Pn = P0 + n × (avg. decadal increase)
Geometric:   Pn = P0 × (1 + r)^n,  r = (Pn/P0)^(1/n) − 1

HRT
HRT = Volume / Flow rate

MASS LOADING RATE
Mass/time = Concentration × Flow rate   (convert units carefully)

SOLID WASTE MOISTURE CONTENT
MC% = (Wet weight − Dry weight)/Wet weight × 100

WEIGHTED DENSITY (composition table)
ρ_avg = Σ (fraction by mass_i × density_i)     [or use volume-weighted, check what's asked]

HEAT VALUE (Modified Dulong's Formula)
HV (kJ/kg) = 337C + 1428(H − O/8) + 95S

LANDFILL AREA
Volume needed = (Population × per-capita rate × 365) / compacted density
Area = Volume / depth

ESP (Deutsch-Anderson)
η = 1 − e^(−ωA/Q)        A = −(Q/ω) × ln(1 − η)

SOUND LEVEL COMBINATION
L_total = 10 log₁₀ ( Σ 10^(Li/10) )

MONOD EQUATION
μ = μm·S / (Ks + S)
  If S = Ks →  μ = μm/2
  If S >> Ks →  μ ≈ μm
```

---

## 5. Study Priority Ranking

1. **Mass balance derivations + CSTR numericals** — appears every single paper, both conceptual and numerical
2. **Population projection (arithmetic & geometric)** — same table style reused, easy marks if practiced
3. **Solid waste MC/density table + landfill area problems** — guaranteed, formulaic
4. **Water balance (evapotranspiration)** — guaranteed, formulaic
5. **ESP numerical + Deutsch-Anderson** — recurring in Section B
6. **LCA stages, Functional Unit, EIA/IEE/BES differentiation** — reliable Section B/C written answers
7. **Green Engineering principles** — reliable 5-mark "OR" question
8. **Sound level dB combination** — free MCQ marks every year
9. **Sewer systems, water treatment train, air pollutants** — MCQ-heavy, low effort to review

---

*Send the question papers you'll actually be tested on when ready — I can spot-check this against them or build practice problems for the numerical types.*
