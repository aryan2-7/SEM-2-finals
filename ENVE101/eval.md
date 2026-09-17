# ENVE 101 — Kathmandu University End Semester Exam (Aug/Sep 2026)
## Full Worked Solutions with Assumed Step-wise Marking

---

# SECTION "B" — [5 Q. × 5 = 25]

---

## Q1. Runoff definition + annual evapotranspiration [5 marks]

**Definition — Runoff** *(1 mark)*
Runoff is the portion of precipitation that flows over the land surface (and through shallow subsurface paths) into streams, rivers, or other water bodies, without infiltrating into the ground. It is the residual of precipitation after losses due to infiltration, evaporation, and transpiration.

**Given:**
- Basin area, A = 9,500 km² = 9,500 × 10⁶ m²
- Average annual precipitation, P = 1250 mm = 1.25 m/yr
- Runoff **entering** from adjacent catchment, Rin = 133 (taken as m³/s — see note below)
- Runoff **leaving** the basin, Rout = 730 (taken as m³/s)
- No infiltration loss; ΔS (change in storage) = 0 over the year

*Note on units:* As printed, the paper states "mm/s" for the inflow/outflow rates. Taking this literally makes the runoff terms physically absurd (4–5 orders of magnitude larger than precipitation over a 9,500 km² basin), so the standard, physically sensible reading — and the one Davis & Cornwell-style problems use — is **m³/s**. Solved below on that basis; method is unaffected if you're told to use the literal figure.

**Step 1 — General water balance equation** *(1 mark)*

$$P + R_{in} = R_{out} + E + \Delta S$$

Since ΔS = 0 (steady state over the year) and no infiltration:

$$E = P + R_{in} - R_{out}$$

**Step 2 — Convert Rin and Rout (m³/s) to equivalent depth over basin (m/yr)** *(2 marks)*

$$\text{Volume}_{in} = 133 \, \text{m}^3/\text{s} \times (365 \times 24 \times 3600)\,\text{s/yr} = 4.194 \times 10^9 \, \text{m}^3/\text{yr}$$

$$\text{Volume}_{out} = 730 \, \text{m}^3/\text{s} \times (365 \times 24 \times 3600)\,\text{s/yr} = 2.302 \times 10^{10} \, \text{m}^3/\text{yr}$$

Convert to depth (divide by basin area, A = 9,500 × 10⁶ m²):

$$R_{in} \text{ (depth)} = \frac{4.194 \times 10^9}{9,500 \times 10^6} = 0.4415 \text{ m/yr} = 441.5 \text{ mm/yr}$$

$$R_{out} \text{ (depth)} = \frac{2.302 \times 10^{10}}{9,500 \times 10^6} = 2.423 \text{ m/yr} = 2423.3 \text{ mm/yr}$$

**Step 3 — Solve for E** *(1 mark)*

$$E = 1250 + 441.5 - 2423.3 = -731.8 \text{ mm/yr}$$

**Result:** *(with working shown; final numeric answer — 1 mark for correct substitution & final answer even if sign is negative given the input data)*

$$\boxed{E \approx -731.8 \text{ mm/yr (i.e., -0.732 m/yr)}}$$

**Interpretation note to write in the answer:** A negative evapotranspiration is not physical — it indicates that, with the outflow rate given being far larger than the combined precipitation + inflow, the basin cannot be in a zero-storage-change steady state unless there is an additional water source (e.g., groundwater contribution) not accounted for in the problem. State this explicitly for full marks — examiners award marks for correct method + recognizing the physical inconsistency, not just a numeric answer.

*(If the examiner intends the flow rates as mm/s literally, plug those directly as depth-rates and convert by ×86400×365 to mm/yr — the method structure is identical, only the depth-conversion step changes.)*

---

## Q2. Solid waste management process flow + types by regulatory definition [3+2 = 5 marks]

### Part (a) — SWM Process Flow [3 marks]

Solid Waste Management (SWM) is the discipline of controlling generation, storage, collection, transfer/transport, processing, and disposal of solid waste according to principles of health, economics, engineering, conservation, and aesthetics. *(0.5 mark — definition)*

**Process flow (5 stages)** *(0.5 mark each = 2.5 marks)*:

1. **Source** — Activities where materials are identified as no longer valuable and are discarded or gathered for disposal (households, commercial units, industries).
2. **Collection** — Gathering of solid waste and hauling it to the point where the collection vehicle is emptied.
3. **Transfer and Transport** — Transfer of waste from smaller collection vehicles to larger transport vehicles, and long-distance haulage to the disposal site.
4. **Processing and Recovery** — Techniques/equipment to improve efficiency of other elements and recover usable materials, energy, or conversion products (e.g., composting, recycling, incineration for energy).
5. **Disposal** — Final placement of waste, e.g., landfilling, incineration residue disposal, or other end-of-line processing.

### Part (b) — Types of Solid Waste by Regulatory Definition [2 marks]

By regulation, solid waste is classified into: *(1 mark for correct classification)*

- **Hazardous Waste** — Waste or combination of wastes posing a substantial present or potential hazard to human health/living organisms because they are lethal, non-degradable, bio-accumulative, or cause detrimental cumulative effects. Sources include explosive waste (mining, refineries), corrosive waste (tanning, heavy metal industries), toxic waste (chemical industries, pesticides), and carcinogenic waste. *(0.5 mark)*
- **Non-Hazardous Waste** — Waste that does not meet the above hazard criteria; typically general municipal, commercial, or industrial waste that can be managed through standard collection/disposal without special precautions. *(0.5 mark)*

---

## Q3. Geological, hydrological, climatic factors — Rasuwa-Botekoshi flash flood, 26 Aug 2026 [5 marks]

*(This is a current-events / applied-reasoning question. Marking is typically: 1–2 marks per factor category, up to 5 total, awarded for scientifically sound reasoning even without exact real-world verification — examiners want engineering logic, not news recall.)*

**Geological factors** *(2 marks)*:
- The Rasuwa-Bhotekoshi corridor lies in the young, tectonically active Himalaya with steep, fractured, and weathered terrain (phyllites, schists), making slopes highly susceptible to landslides and debris flow.
- Glacial moraine deposits and loose glacial till from retreating glaciers in the high Himalaya provide large volumes of unconsolidated sediment that can mobilize rapidly as debris flow when triggered by intense rainfall or a glacial lake outburst (GLOF).
- Steep river gradients in narrow gorges concentrate flow energy, allowing debris-laden flash floods to travel fast with high erosive/destructive power.

**Hydrological factors** *(2 marks)*:
- Presence of glacial lakes upstream (e.g., in the Bhotekoshi/Rasuwa catchments fed by Himalayan glaciers) creates GLOF risk — a sudden breach releases a large volume of water and debris almost instantaneously.
- Steep, small catchments have very short times of concentration, so intense rainfall translates into rapid peak discharge with little warning time (flash flood behavior).
- Blockage and sudden breach of temporary landslide dams (landslide-dammed lakes) along the river can cause a sudden surge downstream.

**Climatic factors** *(1 mark)*:
- Intensified monsoon rainfall events (short-duration, high-intensity cloudburst-type rainfall) associated with climate change increase the likelihood of both direct flash flooding and triggering of landslides/GLOFs.
- Rising temperatures accelerate glacial melt, increasing the volume and instability of glacial lakes.

*(Full marks require linking cause → mechanism → flood outcome, not just listing terms.)*

---

## Q4. Mass balance — steady-state formaldehyde (HCHO) concentration in a hall [5 marks]

**Given:**
- Volume of hall, V = 750 m³
- Number of smokers = 40
- Cigarettes/person/hr = 3
- HCHO released per cigarette = 1.2 mg
- First-order decay rate constant, k = 0.35 hr⁻¹ (HCHO → CO₂)
- Fresh air inflow = outflow, Q = 1500 m³/hr
- Incoming (fresh) air has C_in = 0
- Completely mixed system

**Step 1 — Draw mass balance / define generation rate** *(1 mark)*

Total generation rate of HCHO:
$$W = 40 \text{ persons} \times 3 \frac{\text{cig}}{\text{hr}} \times 1.2 \frac{\text{mg}}{\text{cig}} = 144 \text{ mg/hr}$$

**Step 2 — Write the general mass balance equation** *(1 mark)*

$$\text{Accumulation} = \text{Input} - \text{Output} - \text{Reaction (decay)}$$

$$V\frac{dC}{dt} = W + QC_{in} - QC_{out} - kVC_{out}$$

**Step 3 — Apply steady state condition** *(1 mark)*

At steady state, dC/dt = 0, and C_in = 0:

$$0 = W - QC - kVC$$

$$W = C(Q + kV)$$

**Step 4 — Substitute values and solve** *(1.5 marks)*

$$kV = 0.35 \times 750 = 262.5 \text{ m}^3/\text{hr}$$

$$Q + kV = 1500 + 262.5 = 1762.5 \text{ m}^3/\text{hr}$$

$$C = \frac{W}{Q + kV} = \frac{144}{1762.5}$$

$$\boxed{C \approx 0.0817 \text{ mg/m}^3}$$

**Step 5 — State result clearly** *(0.5 mark)*

The steady-state concentration of formaldehyde in the hall is **≈ 0.0817 mg/m³**, which is very low compared to typical indoor air quality thresholds for formaldehyde (~0.1 mg/m³ WHO guideline), indicating the ventilation and decay are sufficient to keep concentration low under these assumptions.

---

## Q5. Draw the schematic diagram of sewer networks and briefly explain its components [5 marks]

*(Note: the original Q5 also had a recycle/purge/bypass mass-transfer sub-question crossed out on the paper — solving the remaining legible "OR" option: sewer network schematic.)*

**Schematic diagram** *(2 marks — for a correctly labeled diagram)*

```
House Connections
      |
      v
  House Sewer (small diameter, from individual building)
      |
      v
  Lateral Sewer (collects from several house sewers on one street)
      |
      v
  Branch/Sub-main Sewer (collects from several laterals)
      |
      v
  Main Sewer (collects from several branches — largest collector before treatment/outfall)
      |
      v
  Interceptor Sewer (optional — intercepts flow from mains to prevent overflow to natural water body; carries to treatment plant)
      |
      v
  Outfall Sewer (carries treated/final flow to point of disposal — river/sea)
      |
      v
  Point of Disposal / WWTP
```

**Component explanations** *(0.5 mark each, 6 listed = 3 marks, capped at 3)*

1. **House Sewer** — Pipe connecting an individual building's plumbing to the lateral sewer; smallest diameter in the system.
2. **Lateral Sewer** — Receives sewage from house sewers along a single street; no other sewer discharges into it directly except house connections.
3. **Branch/Sub-main Sewer** — Receives flow from two or more lateral sewers; serves a larger area.
4. **Main Sewer** — Receives flow from one or more branch sewers; conveys wastewater from a large drainage area toward treatment or disposal.
5. **Interceptor Sewer** — Large sewer that runs roughly parallel to a water body and intercepts flow from main sewers, carrying it to a treatment plant instead of allowing direct discharge — critical in combined sewer systems to reduce overflow pollution.
6. **Outfall Sewer** — The final sewer, extending from the last manhole/treatment point to the point of ultimate disposal (river, lake, sea).

**Manholes**, provided at regular intervals and at changes in direction/gradient, allow inspection, cleaning, and maintenance access — worth mentioning for completeness *(can substitute for one of the 6 above)*.

---

# SECTION "C" — [3 Q. × 6 = 18]

---

## Q6. Air Quality Standard definition + ESP upgrade problem [1+5 = 6 marks]

**Definition — Air Quality Standard** *(1 mark)*
An Air Quality Standard (AQS) is the acceptable threshold level of a pollutant's concentration in ambient air, defined in terms of its potential impact on human health and the environment, and enforced by a regulatory body (e.g., NAAQS-Nepal). It specifies an indicator (pollutant), averaging time, concentration level, and the form/test method.

**Given:**
- Existing ESP: Area A₁ = 4,800 m², Flow Q = 180 m³/s, Efficiency η₁ = 95%
- Target efficiencies: η₂ = 97%, η₃ = 99%
- Available additional land: 0.08 ha = 800 m²

**Step 1 — Find the effective drift velocity (ω) from existing performance** *(1.5 marks)*

Deutsch-Anderson equation:
$$\eta = 1 - e^{-\omega A/Q}$$

Rearranging:
$$\omega = \frac{-Q \ln(1-\eta_1)}{A_1} = \frac{-180 \times \ln(1-0.95)}{4800} = \frac{-180 \times (-2.9957)}{4800}$$

$$\boxed{\omega \approx 0.1123 \text{ m/s}}$$

**Step 2 — Find required area for 97% and 99% efficiency** *(2 marks)*

$$A = \frac{-Q}{\omega}\ln(1-\eta)$$

For η = 97%:
$$A_{97} = \frac{-180}{0.1123}\ln(1-0.97) = \frac{-180}{0.1123}\times(-3.5066) \approx 5,618.5 \text{ m}^2$$

For η = 99%:
$$A_{99} = \frac{-180}{0.1123}\ln(1-0.99) = \frac{-180}{0.1123}\times(-4.6052) \approx 7,378.8 \text{ m}^2$$

**Step 3 — Compare with available land** *(1 mark)*

Maximum area achievable with available land:
$$A_{max} = A_1 + 800 = 4,800 + 800 = 5,600 \text{ m}^2$$

- Required for 97%: 5,618.5 m² → **exceeds available 5,600 m² by only ~18.5 m² (~0.3% shortfall)**
- Required for 99%: 7,378.8 m² → **far exceeds available area (shortfall of ~1,779 m²)**

**Step 4 — Determine achievable efficiency with max available area & recommend** *(0.5 mark)*

Efficiency achievable with A_max = 5,600 m²:
$$\eta_{max} = 1 - e^{-\omega A_{max}/Q} = 1 - e^{-(0.1123)(5600)/180} \approx 96.97\% \approx 97\%$$

**Recommendation:** The 97% target is practically (almost exactly) achievable with the available 0.08 ha of land — the shortfall is marginal (~0.3%) and can likely be closed with minor design optimization (e.g., improved plate spacing or slightly higher operating voltage to increase ω). The 99% target is **not achievable** with the available land, since it would require roughly 2.2× more additional area than what is available. **Recommend upgrading to target 97% efficiency.**

---

## Q7. Solid waste — total moisture content, dry mass, and overall (bulk) density [6 marks]

**Given (Sisdole LFS sample), basis = 100 kg total wet waste:**

| Component | % by mass | MC (%) | Density (kg/m³) |
|---|---|---|---|
| Food waste | 15 | 70 | 350 |
| Paper | 45 | 6 | 85 |
| Cardboard | 10 | 5 | 120 |
| Plastics | 10 | 2 | 200 |
| Garden trimmings | 10 | 60 | 190 |
| Wood | 5 | 20 | 240 |
| Tins, Cans | 5 | 3 | 190 |

**Step 1 — Compute wet mass, moisture mass, dry mass per component** *(2 marks)*

| Component | Wet mass (kg) | Moisture (kg) = Wet × MC | Dry mass (kg) = Wet − Moisture |
|---|---|---|---|
| Food waste | 15 | 15×0.70 = 10.50 | 4.50 |
| Paper | 45 | 45×0.06 = 2.70 | 42.30 |
| Cardboard | 10 | 10×0.05 = 0.50 | 9.50 |
| Plastics | 10 | 10×0.02 = 0.20 | 9.80 |
| Garden trimmings | 10 | 10×0.60 = 6.00 | 4.00 |
| Wood | 5 | 5×0.20 = 1.00 | 4.00 |
| Tins, Cans | 5 | 5×0.03 = 0.15 | 4.85 |
| **Total** | **100** | **21.05** | **78.95** |

**Step 2 — Overall Moisture Content** *(1 mark)*

$$MC(\%) = \frac{\text{Total moisture}}{\text{Total wet mass}} \times 100 = \frac{21.05}{100} \times 100$$

$$\boxed{MC \approx 21.05\%}$$

**Step 3 — Total dry mass** *(0.5 mark)*

$$\boxed{\text{Dry mass} = 78.95 \text{ kg (per 100 kg wet basis)}}$$

**Step 4 — Overall (bulk) density** *(2.5 marks)*

Bulk density requires the **volume-weighted approach**: find the volume each component occupies, sum volumes, then divide total wet mass by total volume.

$$V_i = \frac{\text{Wet mass}_i}{\text{Density}_i}$$

| Component | Wet mass (kg) | Density (kg/m³) | Volume (m³) = mass/density |
|---|---|---|---|
| Food waste | 15 | 350 | 0.04286 |
| Paper | 45 | 85 | 0.52941 |
| Cardboard | 10 | 120 | 0.08333 |
| Plastics | 10 | 200 | 0.05000 |
| Garden trimmings | 10 | 190 | 0.05263 |
| Wood | 5 | 240 | 0.02083 |
| Tins, Cans | 5 | 190 | 0.02632 |
| **Total** | **100** | — | **0.80538** |

$$\rho_{overall} = \frac{\text{Total wet mass}}{\text{Total volume}} = \frac{100}{0.80538}$$

$$\boxed{\rho_{overall} \approx 124.2 \text{ kg/m}^3}$$

*(If instead a simple mass-weighted average of densities is expected by your instructor — i.e., Σ(fraction × density) — that gives 350×0.15+85×0.45+120×0.10+200×0.10+190×0.10+240×0.05+190×0.05 = 154.25 kg/m³. State which method you used; the volume-based method above is the technically correct one for "bulk/overall density" and is the one typically expected at this level — but check which convention your instructor used in lecture, since past papers sometimes reward the simpler weighted-average method.)*

---

## Q8. Hydrological cycle + combined sewer design discharge and pipe sizing [1+5 = 6 marks]

**Brief description — hydrological cycle** *(1 mark)*
The hydrological (water) cycle describes the continuous circulation of water through the Earth's atmosphere, land, and oceans via the processes of evaporation (from water bodies), transpiration (from vegetation), condensation (cloud formation), precipitation (rain/snow), infiltration (into soil), percolation (to groundwater), and runoff (overland flow to streams/rivers), eventually returning water to oceans and beginning the cycle again.

**Given:**
- Area, A = 8,50,000 m² = 85 ha
- Population density = 950 persons/ha
- Water supply rate = 160 L/person/day
- Wastewater = 80% of water supplied
- Peak factor = 2.5
- Time of entry = 6 min, Time of flow through sewer = 20 min *(used for time of concentration — not required for this particular sub-calculation since peak factor is given directly; relevant if a rainfall-intensity/runoff coefficient method were required instead)*
- Sewer flows as circular pipe at velocity v = 1.8 m/s
- Find: design discharge, required cross-sectional area, and pipe diameter

**Step 1 — Population of the township** *(1 mark)*

$$\text{Population} = \text{Area (ha)} \times \text{density} = 85 \times 950 = 80,750 \text{ persons}$$

**Step 2 — Average wastewater generation rate** *(1 mark)*

$$\text{Wastewater rate} = 160 \times 0.80 = 128 \text{ L/person/day}$$

$$\text{Avg. wastewater flow} = 80,750 \times 128 = 10,336,000 \text{ L/day} = 10,336 \text{ m}^3/\text{day}$$

Convert to m³/s:

$$Q_{avg} = \frac{10,336,000}{1000 \times 86,400} = 0.1196 \text{ m}^3/\text{s}$$

**Step 3 — Apply peak factor to get design (peak) discharge** *(1 mark)*

$$Q_{design} = Q_{avg} \times \text{Peak factor} = 0.1196 \times 2.5$$

$$\boxed{Q_{design} \approx 0.2991 \text{ m}^3/\text{s}}$$

**Step 4 — Required cross-sectional area of sewer** *(1 mark)*

$$A_{cs} = \frac{Q_{design}}{v} = \frac{0.2991}{1.8}$$

$$\boxed{A_{cs} \approx 0.1662 \text{ m}^2}$$

**Step 5 — Corresponding diameter (circular pipe)** *(1 mark)*

$$A_{cs} = \frac{\pi}{4}d^2 \implies d = \sqrt{\frac{4 A_{cs}}{\pi}} = \sqrt{\frac{4 \times 0.1662}{\pi}}$$

$$\boxed{d \approx 0.460 \text{ m} \approx 460 \text{ mm}}$$

**Summary:** Design discharge ≈ 0.299 m³/s; required cross-sectional area ≈ 0.166 m²; required sewer diameter ≈ 460 mm (round up to next standard commercial pipe size, e.g., 500 mm, in practice).

---

# SECTION "D"

---

## Q9. Differentiate between (attempt as required — typically ANY TWO) [3×2 = 6 marks]

### (a) Combined Sewer vs Separate Sewer *(3 marks — ~0.5 mark per point, up to 6 points)*

| Basis | Combined Sewer | Separate Sewer |
|---|---|---|
| Definition | Single pipe carries both sanitary sewage and stormwater together | Separate pipes for sanitary sewage and stormwater |
| Cost | Lower initial cost (one pipe network) | Higher initial cost (two networks) |
| Treatment plant load | Highly variable; large surge during storms; risk of overflow bypassing treatment | Consistent, manageable flow to WWTP |
| Pipe size | Must be large enough for peak storm flow | Sanitary sewer can be smaller/economical |
| Pollution risk | Combined Sewer Overflow (CSO) during storms can discharge untreated sewage to water bodies | Stormwater can be discharged directly (relatively cleaner) without affecting sewage treatment |
| Suitability | Older cities, areas with space constraints | Modern planned cities, environmentally preferred |

### (b) Incineration vs Landfill *(3 marks)*

| Basis | Incineration | Landfill |
|---|---|---|
| Initial cost | High initial cost; desirable site may be expensive | Low initial cost, low operational cost |
| Land requirement | Does not need large land area | Needs large land area |
| Location | Fixed location | May change location over time |
| Waste type handled | Only combustible waste; non-combustibles need separate disposal | Complete and final disposal for all types of refuse |
| By-products | Produces ash residue, flue gas (needs air pollution control) | Produces leachate and landfill gas (needs management) |
| Resource recovery | Can recover energy (waste-to-energy) | Can recover gas (landfill gas) but generally lower recovery potential |

### (c) IEE vs EIA *(3 marks)*

| Basis | IEE (Initial Environmental Examination) | EIA (Environmental Impact Assessment) |
|---|---|---|
| Scope/Scale | For medium-scale projects (e.g., hospitals 25–100 beds, roads 10–25 km, hydropower up to 50 MW) | For large-scale projects (e.g., hospitals >100 beds, hydropower >50 MW, forest/national park acquisition >5 ha) |
| Detail level | Less detailed, preliminary study | Comprehensive, detailed study |
| Governing schedule | Schedule 1 of EPR (lower threshold projects) | Schedule 1 of EPR (higher threshold projects) |
| Approval authority | Concerned line ministry/department | Ministry of Forests and Environment (MoFE), Nepal |
| Time & cost | Relatively quicker and cheaper | More time-consuming and costly |

*(Attempt only 2 of the 3 above per exam instruction — all three provided here for completeness/coverage.)*

---

## Q10. Write short notes (ANY TWO) [2×3 = 6 marks]

### (a) Criteria Pollutants *(3 marks)*

The six "criteria" air pollutants are those regulated because science-based human health and environmental criteria have been developed for them, forming the basis of ambient air quality standards *(1 mark — definition)*:

1. **Carbon Monoxide (CO)** — colorless, odorless toxic gas from incomplete combustion; binds hemoglobin, reducing oxygen transport.
2. **Lead (Pb)** — from ore/metal processing, leaded fuel; highly toxic, affects nervous system.
3. **Nitrogen Oxides (NOx)** — from combustion at high temperature; contributes to smog, acid rain, ozone formation.
4. **Ground-level Ozone (O₃)** — secondary pollutant formed from NOx + VOCs in sunlight; harms respiratory system and vegetation.
5. **Particulate Matter (PM10, PM2.5)** — solid/liquid particles suspended in air; penetrate lungs, cause respiratory/cardiovascular illness.
6. **Sulfur Oxides (SOx)** — from combustion of sulfur-containing fuels (coal, oil); causes acid rain, respiratory illness.

*(1 mark for correctly listing all six; 1 mark for brief relevant detail on at least 3–4 of them)*

### (b) Greenhouse Effect *(3 marks)*

**Definition** *(1 mark):* The greenhouse effect is the natural (and human-enhanced) process by which greenhouse gases (GHGs) in the Earth's atmosphere trap outgoing infrared radiation from the Earth's surface, re-radiating some of it back to the surface, thereby warming the planet — analogous to how a glass greenhouse traps heat.

**Mechanism** *(1 mark):* Solar (shortwave) radiation passes through the atmosphere and warms the Earth's surface. The surface re-emits this energy as longwave (infrared) radiation. GHGs such as CO₂, CH₄, and O₃ absorb this outgoing infrared radiation and re-emit part of it back toward the surface, increasing the surface temperature above what it would be without these gases.

**Human enhancement & consequence** *(1 mark):* Human activities — fossil fuel combustion, deforestation, industrial emissions — have significantly increased atmospheric concentrations of GHGs, intensifying the natural greenhouse effect and driving global warming and climate change (rising temperatures, melting ice caps, sea level rise).

*(Note: "Green [something]" appears crossed out as the third option on the original paper and is omitted here — attempt only 2 of the 3 available options as instructed.)*

---

# Summary Table — Total Marks Check

| Section | Questions | Marks |
|---|---|---|
| B | Q1–Q5 | 5×5 = 25 |
| C | Q6–Q8 | 3×6 = 18 |
| D | Q9–Q10 (any 2 each) | 6+6 = 12 |
| **Total (B+C+D as attempted)** | | **55** |

This matches the paper's F.M. of 55 for Section B onward (Section A, the 20-mark MCQ section, is a separate 30-minute sitting not shown in these images).

---

*A note on Q1: double-check with your instructor/notes whether the "mm/s" for the runoff terms was intended literally or as a typo for m³/s — this changes the final numeric answer substantially, though the solution method (water balance: E = P + Rin − Rout) stays identical either way.*
