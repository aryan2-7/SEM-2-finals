# ENGG 112 — Study Plan (Fri 18 – Mon 21 September)

**Exam:** Monday, 21 September
**Study time available:** ~5-6 hrs/day. Fri/Sat/Sun are content + practice days. Monday (exam day) is reserved for MCQ review only — no numericals, no new material, just fast Section A drilling before you walk in.

**Priority logic:** Your checklist showed Chapter 3 (magnetic circuits + transformers) and the three-phase section of Chapter 4 are near-total blanks (❌), along with RLC resonance and the power triangle. Those get rebuilt Fri/Sat. Your 🟡 items (Thevenin/Norton, delta-star, waveform RMS, supermesh) just need friction, not relearning — those get folded into practice blocks. Your ✅ items (basic mesh/nodal, superposition mechanics, resistance reduction) are skipped entirely except as they show up inside bigger problems.

**Papers referenced by year:** 2018-Jan, 2019-Aug, 2022-MayJune, 2024-JuneJuly, 2024-Sept, 2025-MarApr

---

## FRIDAY (Day 1) — Chapter 3 rebuild + Ch 1 gap-fill

### Block 1 (~2 hrs): Magnetic Circuits from scratch
Learn, don't just review — this is a genuine ❌:
- MMF = N×I, flux density B = Φ/A, reluctance S = l/(μ₀μᵣA), and the full V↔MMF, I↔Φ, R↔Reluctance analogy table
- Series magnetic circuit (no air gap) — work through the concept once with made-up numbers before touching past papers
- Series magnetic circuit WITH an air gap — this is the part flagged as tripping people up

**Practice immediately after learning:**
- 2019-Aug, Q5a: rectangular core, 15mm×20mm cross-section, mean length 18cm, 300 turns, 0.7A, μᵣ=940 → find magnetizing force, flux density, reluctance, flux
- 2024-June, Q3b: series magnetic circuit WITH air gap, find I for Φ = 0.75×10⁻⁴ Wb (H_cast-steel = 280 At/m given)
- 2024-June, Q5b (alt version, similar air-gap style)
- 2024-Sept, Q5a: find turns N₁ for flux φ = 1.2×10⁻⁴ Wb, compare magnetic vs electric circuit terminology first

### Block 2 (~1.5 hrs): Transformer theory from scratch
- EMF equation derivation — write it out from first principles at least twice by hand, don't just read it
- Turns ratio: N_p/N_s = E_p/E_s = I_s/I_p
- Ideal transformer characteristics (list form, memorize)

**Practice:**
- 2018-Jan, Q6b: iron-core transformer, Np=30, Ep=25V, F=60Hz, Ns=240 → find Es, max flux Φ_m
- 2018-Jan, Q5a: describe ideal transformer characteristics + derive RMS EMF expression (theory writeup)
- 2025-MarApr, Q5a: iron-core transformer (k=1) → find E_s, Φ_m, AND find frequency given max flux (this is the reverse-direction twist — do this one last in the block)
- 2024-Sept, Q1b/OR section: iron-core transformer, find primary current + input impedance from I_s, N_p, N_s given

### Block 3 (~1.5-2 hrs): Chapter 1 gap-fill — Max power transfer (❌) + rusty items
- Max power transfer: memorize R_L = R_th condition cold, then drill the calculation of both R_L and max power delivered
- Delta-Star / Star-Delta conversion formulas (🟡 → make these automatic)

**Practice:**
- 2019-Aug, Q3b (Fig 5): Thevenin equivalent + implicitly sets up max power condition
- 2022-MayJune, Section A Q5 (Fig 2): load resistance for max power, simple MCQ-style — do this first as a warm-up
- 2024-Sept, Q4a: find R for max power to R, and the max power value (current source circuit)
- 2019-Aug Q3a (Fig 3): total resistance of a delta/star mixed network — good delta-star drill
- 2022-MayJune Section B, Q1a (Fig 1): total resistance of a cube network — you flagged this ❌ specifically, do it here

**End of Friday:** you should be able to do a magnetic circuit problem (with air gap), a transformer EMF/flux problem, and a max power transfer problem without hesitating.

---

## SATURDAY (Day 2) — Three-phase rebuild + RLC resonance + power triangle

### Block 1 (~2 hrs): Three-phase systems from scratch
This is your biggest ❌ block and the anchor question of Section B almost every year, so give it the most room:
- Star connection: V_L = √3 × V_ph, I_L = I_ph — draw the phasor diagram yourself, don't just memorize
- Delta connection: V_L = V_ph, I_L = √3 × I_ph
- Finding phase angles θ₂, θ₃ given phase sequence ABC — this is just "each phase is 120° behind/ahead," practice it directly
- The two power formulas and when each applies: P = √3×V_L×I_L×cosφ (line quantities) vs P = 3×V_ph×I_ph×cosφ (phase quantities) — write both down side by side with a one-line rule for which to use

**Practice, roughly in this order (easiest → hardest):**
- 2019-Aug, Q5b: balanced star load (8+j6)Ω/phase, 400V supply → line current, p.f., power (clean starter problem)
- 2018-Jan, Q5b: balanced star load (8+j6)Ω/phase, 400V supply — near-identical structure, good repetition
- 2024-June, Q6b: balanced star-delta connected system — find phase angles, phase currents, line currents, average power per phase
- 2025-MarApr, Q6b: Δ-Y system, find total average/reactive/apparent power + p.f. of load (more complex load geometry)
- 2019-Aug, Q6b: Y-connected generator, find phase angles, line voltages, line currents, verify I_N = 0 for balanced load — do this one last, it's the fullest version

### Block 2 (~1.5 hrs): RLC resonance — rebuild from ❌
- f₀ = 1/(2π√(LC)) — derive it once from Z=0 condition, don't just memorize
- Q = (1/R)√(L/C), or ωL/R at resonance
- BW = f₀/Q
- Half-power frequencies f₁, f₂ = f₀ ∓ BW/2

**Forward direction practice** (given R,L,C → find f₀,Q,BW):
- 2018-Jan, Q4a: R=1000Ω, L=100mH, C=10pF → resonant freq, Q, bandwidth, half-power angular frequency
- 2025-MarApr, Section A Q4: R=5Ω, X_L at resonance=300Ω, find bandwidth (quick MCQ-style, good warm-up)

**Backward direction practice** (given BW/Q → find R,L,C) — this is the 2024/2025 twist you're weakest on, do these carefully:
- 2024-June, Q3b: ω_s=10⁵ rad/s, BW=0.15ω_s, draws 16W from 120V at resonance → find R, then BW in Hz, then L and C
- 2024-July, Q6a: resonant freq=5kHz, given circuit → calculate Q and bandwidth

### Block 3 (~1.5 hrs): Power triangle (❌) + remaining 🟡 cleanup
- P (active), Q (reactive), S (apparent) — formulas and the S²=P²+Q² triangle
- Power factor = cosφ = P/S, lagging vs leading

**Practice:**
- 2019-Aug, Section A Q8 / 2022-MayJune Q9 / 2024-Sept Q13-ish: "apparent power 10kVA, active power 8kW, find reactive power" — this exact question appears almost every year, make sure it's automatic
- 2024-June, Q6b (Fig 6): current, power factor, average power delivered to an RLC circuit
- 2025-MarApr Q4a: impedance (4-j10)Ω parallel with (6+j8)Ω, 230V/50Hz → branch currents, total current, total impedance, p.f., P, Q, S + phasor diagram (this combines power triangle with AC circuit analysis — good integration problem)

Also squeeze in, if time allows: supermesh (🟡) — 2024-Sept Q2b (mesh with a current source shared between loops), and current/voltage divider with impedances (🟡) — 2024-Sept Q3a (Fig 5).

**End of Saturday:** three-phase, resonance (both directions), and power triangle should all be at least 🟡-level, ideally better.

---

## SUNDAY (Day 3) — Full timed mock + targeted fixes + numerical cleanup

### Morning block (~2.5-3 hrs): Full timed mock
Pick ONE full paper you haven't already picked apart problem-by-problem and do it cold, timed, closed-book style (match the real exam's Section A + B split). **Recommended: 2022-MayJune** — it's a shorter modern-format paper (10 + 40 marks) and you haven't used it for isolated drilling yet, so it's your cleanest "cold" test.

Time yourself against the actual F.M. allocation (30 min for Section A, 2hrs30 for Section B — compress proportionally if needed).

### Midday block (~1.5 hrs): Targeted fixes
Based on what went wrong in the mock, redo ONLY those specific problem types. Don't re-review everything — be surgical about which gaps the mock actually revealed.

### Afternoon/evening block (~1.5-2 hrs): Second pass on remaining weak numericals
Since you now have Monday for MCQs, use this block for one more round of whichever numerical topic still feels shakiest — likely a second three-phase problem or a second resonance (backward-direction) problem, since those were your deepest ❌ zones. Also worth doing once more, timed:
- Rewrite the DC generator construction/working-principle answer once from memory
- Rewrite the transformer EMF derivation once from memory
- 2018-Jan Q7 or 2019-Aug Q5b (RMS/average of a waveform), timed under 5 min

End the day once you've done this — don't push into late night. You still have Monday.

---

## MONDAY (Exam Day) — MCQ-only, no numericals, no new material

This day is exclusively Section A prep. Keep it light and fast-paced — you want to walk in sharp, not fried.

### Recommended structure (~2-3 hrs total, spread with breaks, finishing well before exam time):
- Go through **every Section A from all 7 papers** back to back, treating it as one long MCQ set (2018-Jan, 2019-Aug, 2022-MayJune, 2024-June, 2024-Sept, 2025-MarApr — each has its own 20Q Section A)
- Don't re-derive anything — if you know it, mark it and move on; if you hesitate, flag it and come back at the end
- After the full pass, spend remaining time only on the flagged/wrong ones

### High-frequency MCQ concepts to have cold before walking in:
- Color coding → resistance + tolerance
- Delta-star equivalence numbers (the specific pattern, e.g. 20Ω legs → known equivalents)
- Maximum power transfer condition (R_L = R_th)
- Form factor / peak factor definitions
- Three-phase power formula distinction: P = √3×V_L×I_L×cosφ vs P = 3×V_ph×I_ph×cosφ
- Reactance vs frequency scaling (X_L increases, X_C decreases with f)
- Commutator function
- Sensitivity vs precision vs resolution
- Resonance behavior: capacitive vs inductive dominance above/below f₀
- Star vs delta: which quantity (V or I) is equal between line and phase

### No new material rule
If something comes up during MCQ review that you genuinely don't know at all (not just rusty), don't chase it down a rabbit hole this morning — guess-and-flag it mentally and move on. At this point protecting your calm and your solid knowledge matters more than one extra MCQ.

---

## Quick reference — problem index by topic (for whenever you want extra reps)

| Topic | Papers with strong practice problems |
|---|---|
| Magnetic circuits (w/ air gap) | 2019-Aug Q5a, 2024-June Q3b/Q5b, 2024-Sept Q5a |
| Transformer EMF/flux | 2018-Jan Q6b, 2025-MarApr Q5a, 2024-Sept Q1b(OR) |
| Max power transfer | 2019-Aug Q3b, 2022-MayJune Q5, 2024-Sept Q4a |
| Delta-Star conversion | 2019-Aug Q3a, 2022-MayJune Q1a (cube) |
| 3-phase star/delta | 2018-Jan Q5b, 2019-Aug Q5b/Q6b, 2024-June Q6b, 2025-MarApr Q6b |
| RLC resonance (forward) | 2018-Jan Q4a, 2025-MarApr Section A Q4 |
| RLC resonance (backward) | 2024-June Q3b, 2024-July Q6a |
| Power triangle | 2019-Aug/2022/2024-Sept "10kVA/8kW" MCQ, 2024-June Q6b, 2025-MarApr Q4a |
| Supermesh | 2024-Sept Q2b |
| Divider rules (impedance) | 2024-Sept Q3a |
