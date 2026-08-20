# MATH 104 — Exam Structure Analysis & Study Plan

## 1. The format never changes. Memorize this shape.

Every single sitting, 2017 through 2025, follows the exact same skeleton:

| Paper | Sections | Marks | Time |
|---|---|---|---|
| Paper 1 | A (10 fill-blank) + B (10 MCQ-style fill-blank) | 10 + 10 = 20 | 30 min |
| Paper 2 | C (4 questions × 7 marks, 2 have OR alternatives) + D (9 questions × 3 marks, 2–3 have OR alternatives) | 28 + 27 = 55 | 2h30 |
| **Total** | | **75** | **3h** |

Two things follow directly from this, and both are strategic, not just descriptive:

- **Section C is 4 questions carrying 28 of 75 marks.** Getting good at exactly
  the handful of C-question *types* below is worth more than broad shallow
  coverage. If you can nail 4 question-types cold, you've secured over a third
  of the exam.
- **Every C and roughly a third of D questions come with an OR.** That means for
  those slots you only need to be strong in *one* of two topics, not both. I've
  flagged where the OR pairs land below — decide now which side of each pair
  you're betting on, and go deep there instead of splitting effort evenly.

---

## 2. Section C — where the marks actually are

This is the highest-leverage part of the exam. Ranked by how many of the 9
papers featured this question type in Section C (7 marks each):

### C-Question 1 is almost always a polar curve problem — 7/9 papers
Symmetry test → sketch → area of a region (either "inside one curve, outside
another" or "shared between two curves"). This is close to a guaranteed
question. The specific curve changes (lemniscate, limaçon, cardioid, circle
pairs) but the *procedure* is identical every time:
1. Test symmetry (replace θ→−θ, r→−r, θ→π−θ)
2. Sketch using symmetry + a few plotted points
3. Set up the area integral ½∫r²dθ with correct bounds (this is where marks
   are lost — bounds depend on where the two curves intersect)
4. Evaluate

**Practice targets:** cardioid vs. circle intersections (2023, 2024 Sep, 2025 all
used variants of "inside r=1, outside r=1−cosθ" or similar), lemniscate area,
shared-region-between-two-circles (2024 Jun: r=2cosθ and r=2sinθ).

### TNB vectors (T, N, B, κ, τ) for a space curve — 4/9 in C, plus 6/9 more in D
The overwhelmingly favorite curve is the **helix** r(t) = (a sin t)i + (a cos
t)j + bt k, almost always with a=3, b=4 (2019, 2024 Sep, 2025 all used this
exact curve or a sign-flipped version). Know the full T→N→B→κ→τ pipeline for
this curve type so well you don't need to think about it. This single curve
family shows up so often it's worth memorizing the general-a,b result and just
substituting.

### Green's theorem verification — 5/9 papers
Almost always: state the theorem (normal or tangential form), then verify it
for a vector field over a circle (unit circle or radius-a circle). The field
**F = (x−y)i + xj** over the unit circle appears close to verbatim in four
different years (2018 Jan, 2018 Aug, 2019, 2023) — if you only memorize one
worked Green's theorem example cold, make it this one.

### Conservative vector field + potential function — 4/9 papers
Show ∇×F = 0 (or check ∂M/∂y = ∂N/∂x etc.), then integrate to find the
potential function. The field **F = (e^x cos y + yz)i + (xz − e^x sin y)j +
(xy+z)k** repeats 2018 Jan / 2018 Aug / 2019 almost unchanged — same
recognition value as the Green's theorem field above.

### Also appearing multiple times in C (2–3 papers each):
- **Directional derivative + steepest increase/decrease directions** — always
  the same 3-part structure: define, compute ∇f·û at a point, then state the
  two directions (∇f for max increase, −∇f for max decrease).
- **2nd derivative test / local extrema / saddle points** — the function
  **f = x³+y³+3x²−3y²−8** is reused verbatim in both 2022 and 2024 (twice, in
  Jun and Sep).
- **Divergence theorem verification**, almost always over a sphere, almost
  always with **F = xi + yj + zk** — three separate years use this exact field.
- **Exact differential form**: component test, verify a form is exact, then
  evaluate the corresponding line integral.
- **Beta-Gamma define + prove relation**: virtually always proving one of
  B(m,n) = Γ(m)Γ(n)/Γ(m+n) or the recursive identity B(m,n+1)/n = B(m+1,n)/m.
- **Double integral with reversed order of integration**, or a volume
  computation under a surface over an oddly-bounded region.

---

## 3. Section D — nine 3-mark rapid-fire questions

D questions are individually low-stakes (3 marks) but there are 9 of them, so
collectively they're 27 marks — same weight as all of Section C. The pattern
here is less about depth and more about **speed and formula recall**. Ranked
by frequency across the 9 papers:

| Topic | Appears in D | Notes |
|---|---|---|
| Fourier series (piecewise/square wave) | 8/9 | Essentially guaranteed — always the *last* question (Q13) |
| TNB / curvature-torsion (shorter version) | 6/9 | Same helix family as Section C |
| Triple integral evaluation | 5/9 | Often in cylindrical/spherical form |
| Directional derivative / chain rule | 5/9 | |
| Line integral / work done | 5/9 | |
| Coordinate conversion (Cartesian↔cyl↔sph) | 4/9 | **The point (0,1,0) is reused verbatim in three different years** — memorize its spherical/cylindrical form specifically |
| Limit & continuity at origin (two-path test) | 4/9 | Standard f(x,y)=xy²/(x²+y⁴)-type functions |
| Gamma/Beta short proofs | 4/9 | Γ(n+1)=nΓ(n) is the most common |
| Constrained optimization (Lagrange or max/min on a circle) | 4/9 | f=3x+4y on x²+y²=1 reused 2019/2023/2024 |
| Polar arc length | 3/9 | |
| Flux across a curve | 3/9 | F=2xi−3yj across x²+y²=1 reused twice, verbatim |
| Motion: velocity/speed/acceleration | 3/9 | |
| Average value over a cube/region | 2/9 | |
| Vector-valued IVP (given acceleration, solve for r(t)) | 2/9 | |

**Practical implication:** Fourier series at position 13 is close to a free 3
marks if you drill the Euler coefficient formulas and the odd/even shortcuts
(odd function → only bₙ terms; even function → only aₙ terms, a₀). Do this
early — it's cheap to make bulletproof and it's the most reliable single
question on the whole exam.

---

## 4. Section A + B — the 20-mark warm-up paper

These are pure recall: fill-in-the-blank and "choose the correct symbol from
four options." The exact same ~15–18 facts rotate through every year. The two
I'd call **100% reliable across all 9 papers with zero exceptions**:

1. **∫ f(x) dx over a symmetric interval = 0 when f is odd** (shows up in
   every single paper, sometimes as a blank, sometimes as MCQ)
2. **The plane containing the unit tangent and binormal vectors is the
   *rectifying* plane** — this exact MCQ (with the same three wrong-answer
   distractors: normal plane / osculating plane / principal plane) appears in
   at least 7 of the 9 papers

Other near-guaranteed recall items, roughly in order of how often they showed
up:
- Symmetry test for a polar curve (which axis/origin)
- Center of a circle from its polar equation r = a cos θ or r = a sin θ
- Beta-Gamma relation B(m,n) = Γ(m)Γ(n)/Γ(m+n)
- Divergence of a given vector field (mechanical computation)
- Gradient of f(x,y,z) at a point (mechanical computation)
- Primitive/fundamental period of a trig function like sin(nx) or tan(nx)
- Conservative field criterion: F is conservative ⟺ F = ∇f for some scalar f
- Stokes' theorem generalizes Green's theorem (tangential form) to 3D;
  Divergence theorem generalizes it in normal form — know which is which
- Curvature of a circle of radius r: κ = 1/r
- Jacobian of the polar transformation x=r cos θ, y=r sin θ → equals r

This section rewards a single focused pass building a formula/fact sheet, not
deep problem-solving. Ten minutes a day reciting these until automatic will
lock down 20 free marks.

---

## 5. Where to spend your hours — ranked by historical mark-weight

Mapping everything above onto your syllabus's 8 units, by rough total marks
observed across the 9 papers (Section C weighted ×7, D weighted ×3):

1. **Vector functions + Vector integral calculus (syllabus units 6–7 combined)
   — ~190 marks worth of historical presence.** This is not a typo: TNB
   vectors, Green's/Stokes'/divergence theorems, conservative fields, line
   integrals, flux, circulation, and motion problems together make up close to
   **half** the exam's historical marks. If you only have time to master one
   area deeply, this is it.
2. **Coordinate systems (unit 1) — ~90 marks.** Almost entirely driven by the
   polar sketch+area problem being nearly guaranteed at C1, plus coordinate
   conversions and polar arc length.
3. **Functions of several variables (unit 2) — ~85 marks.** Directional
   derivatives, extrema/saddle points, limits/continuity, Lagrange
   multipliers.
4. **Multiple integrals (unit 3) — ~59 marks.** Double/triple integral
   evaluation, order reversal, average value.
5. **Fourier series (unit 8) — ~31 marks total, but the highest *reliability*
   of any topic** — cheap to secure, drill it early.
6. **Beta and Gamma functions (unit 4) — ~26 marks**, but very narrow: 2–3
   specific proofs recur constantly, so this is fast to make bulletproof.
7. **Applications of integration / area & volume (unit 5)** overlaps heavily
   with units 1 and 3 above — same integral-setup skill, different framing.
   Don't treat it as separate study time; it's covered by mastering the polar
   area and double-integral-volume problems already listed.

---

## 6. A concrete way to use this

Given the OR-alternative structure in Section C, you get to choose your
battles for two of the four questions. Based on frequency, a reasonable bet:

- **Q1 (polar):** no OR here typically — just drill the sketch+area procedure
  until it's automatic across cardioid/limaçon/lemniscate variants.
- **Q2:** commonly directional derivative vs. no-OR — drill the 3-part
  structure (define → compute → state both directions).
- **Q3:** frequently TNB-vs-conservative-field OR pair — given TNB shows up
  more often *and* overlaps with Section D, I'd lean TNB as your primary, with
  conservative-field as backup since it's genuinely not much extra work (same
  gradient/partial-derivative machinery you already need for Q2).
- **Q4:** frequently Green's-vs-divergence-theorem OR pair — Green's theorem
  is the more frequent of the two historically (5 vs 3 appearances), and the
  same F=(x−y)i+xj-over-unit-circle setup keeps recurring, so that's the
  cheaper one to memorize cold.

That's a defensible core of 4 topics that, done well, secures a large chunk of
the 28 available Section C marks — then layer Section D's high-frequency items
(Fourier, TNB, triple integrals, coordinate conversion) and the Section A/B
fact sheet around it.

