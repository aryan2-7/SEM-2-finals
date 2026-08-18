# MATH 104 — Section A & B Question Bank (with Answers)

Every fill-in-the-blank (Section A) and MCQ-style fill-blank (Section B)
question I could recover from your 9 uploaded papers: 2017 (Aug/Sep), 2018
(Jan), 2018 (Aug), 2019 (Aug), 2022 (May/Jun), 2023 (Apr/May), 2024 (Jun/Jul),
2024 (Sep resit), 2025 (Mar).

**Important honesty note:** these papers were scanned/OCR'd and a lot of the
raw text is genuinely garbled — symbols dropped, numbers merged, fractions
turned into gibberish. Where I'm fully confident in a question's original
wording and answer, it's presented straight. Where the OCR left real
ambiguity (I had to infer a coefficient, a point, or an option), I've marked
it with **⚠ reconstructed** and explained my reasoning so you can verify
against your actual paper copy rather than trust a guess blindly. I skipped
a small number of fragments too mangled to responsibly reconstruct at all.

---

## How to use this

Section A/B rewards raw recall speed, not deep problem solving. The
**"Recurring facts"** section at the very end pulls out the handful of
facts/formulas that repeat across most papers — that's your highest-leverage
20 minutes of memorization. The year-by-year sections below are for once
you've got the core list down and want full-paper drilling.

---

## 2018 (January)

### Section A

**1.** The equivalent Cartesian equation of r(1 − cos θ) = 1 is ___
**Answer:** Start from r − r cos θ = 1, i.e. r = 1 + r cos θ = 1 + x. Square:
r² = (1+x)² → x² + y² = (1+x)² = 1 + 2x + x² → **y² = 1 + 2x**, a parabola
opening along the x-axis.

**2.** The gradient of f(x,y,z) = x² + y² + z² at point (1,2,3) is ___
**Answer:** ∇f = (2x, 2y, 2z) → at (1,2,3): **∇f = 2i + 4j + 6k**

**3.** The double integral ∬ r dr dθ over R gives the ___ of the closed and
bounded region R in polar form.
**Answer: area**

**4.** ⚠ reconstructed — badly garbled ("for all real values of x and y,
lim(x,y)→(0,0) ... "). Likely a limit/continuity blank; can't safely
reconstruct the function. Skip and check your paper directly.

**6.** The polar equation for the circle through the origin with radius 2 and
center at (3, 0) — this is Cartesian center, so read as center on positive
x-axis at distance 3 from pole with radius 2 (circle passes through origin
only if radius = distance to center, i.e. this is really center-at-(a,0)
form): general circle through the pole centered on the x-axis is **r = 2a cos θ**.
With the center's x-distance = a: since it passes through the origin, radius
= a. Matching "radius 2" as the value of a: **r = 4 cos θ** (radius of the
circle is a = 2, giving amplitude 2a = 4). ⚠ the "center at (3,0)" and
"radius 2" don't both fit a through-the-origin circle exactly — a circle
r = 2a cos θ passing through the origin has center (a, 0) and radius a, so if
center is at (3,0) it wouldn't pass through the origin with radius 2. Most
likely the intended question is **r = 6 cos θ** (center (3,0), radius 3,
through the origin) and "radius 2" is an OCR artifact. Verify against your
paper.

**7.** ∭ dz dx dy = ___ — this is just testing that you know triple integral
notation/order; answer is the **volume of the region of integration** (no
numeric answer without given bounds).

**8.** The value of Γ(n+1) = ___, where Γ(n) denotes the gamma function of n.
**Answer: Γ(n+1) = n·Γ(n)**

**9.** The Fourier coefficient aₙ of a function f(x) of period 2π is defined
by the formula ___
**Answer:** aₙ = (1/π) ∫_{−π}^{π} f(x) cos(nx) dx

**10.** The gradient field of f(x,y,z) = xyz is ___
**Answer:** ∇f = **yz i + xz j + xy k**

### Section B

**11.** The primitive period of tan(nx) is ___
**Options:** 2π/n ; π/n ; π ; 2π
**Answer: π/n** (tan has period π, so tan(nx) has period π/n)

**12.** The curve r = 5 + 5cos θ is symmetric about ___
**Options:** x-axis ; y-axis ; origin ; line y=x
**Answer: x-axis** (replacing θ→−θ leaves r unchanged: cos(−θ)=cos θ)

**13.** B(½, ½) = ___, where B(m,n) denotes the beta function of m,n
**Options:** 1 ; π ; π/2 ; 1/2
**Answer: π** — B(½,½) = Γ(½)Γ(½)/Γ(1) = (√π)(√π)/1 = π

**14.** A vector field F(x,y) is conservative if and only if F = ___, where f
is the scalar potential function.
**Options:** ∇f ; ∇×F ; ∇·f
**Answer: ∇f**

**15.** The directrix of the parabola r = 25/(10 + 10cos θ) is x = ___
**Answer:** Standard form r = ed/(1+e cos θ); here dividing num/denom by 10:
r = 2.5/(1+cos θ), so e=1 (confirming parabola) and ed=2.5 → d = 2.5. Directrix
is **x = 2.5**

**16.** The curvature of a circle with radius r is ___
**Options:** r ; 1/r ; 2r ; 1/(2r)
**Answer: 1/r**

**17.** If f(x,y,z) = xy + z with x = cos t, y = sin t, z = t, then df/dt at
t = 0 is ___
**Answer:** df/dt = y·(dx/dt) + x·(dy/dt) + dz/dt = y(−sin t) + x(cos t) + 1.
At t=0: x=1, y=0 → 0·0 + 1·1 + 1 = **2**

**18.** The plane containing unit tangent vector and binormal vector is
called ___
**Options:** principal plane ; rectifying plane ; osculating plane ; normal plane
**Answer: rectifying plane**

**19.** The polar equation r² = cos 2θ is the ___
**Options:** circle ; cardioid ; lemniscate ; four-leaved rose
**Answer: lemniscate**

**20.** If f(x) is an odd function, then ∫_{−a}^{a} f(x) dx = ___
**Answer: 0**

---

## 2018 (August)

### Section A

**1.** The gradient of the field f(x,y,z) = xyz² at point (1,0,1) is ___
**Answer:** ∇f = (yz², xz², 2xyz) → at (1,0,1): **∇f = 0i + 1j + 0k = j**

**2.** The equivalent Cartesian equation of r − r cos θ = sin θ is ___
**Answer:** r = sin θ + r cos θ. Multiply by r: r² = r sin θ + r² cos θ →
x² + y² = y + x² → **y² = y + x² − x²** wait, redo: r² = r sinθ + r·(r cosθ)
is wrong since r cosθ already has one r; careful: r(1−cosθ) = sinθ →
r − r cosθ = sinθ → r − x = y → r = x + y → square: x²+y² = (x+y)² =
x²+2xy+y² → **0 = 2xy → xy = 0**, i.e. the coordinate axes.

**3.** Range of the function f(x,y,z) = x² + y² + z², if z = x − y — this is
asking for the range of f restricted to the surface z = x−y (i.e. f becomes a
function of x,y only): f = x² + y² + (x−y)² = x²+y²+x²−2xy+y² =
2x²+2y²−2xy. This is a positive semi-definite quadratic form (check: for
quadratic ax²+bxy+cy², here a=2,c=2,b=−2, discriminant b²−4ac = 4−16 = −12 <0
and a>0 → positive definite), so f ≥ 0 for all (x,y), and f=0 only at x=y=0.
**Range: [0, ∞)**

**5.** The double integral ∬ r dr dθ over the region R gives the ___ of the
closed and bounded region R in polar form.
**Answer: area**

**6.** The equation of directrix for parabola r = 25/(10+10cos θ) — same
structure as 2018 Jan #15 above → **x = 2.5**

**7.** ∭ dz dx dy = ___ → **volume of the region**

**8.** If n is a positive integer, then Γ(n+1) = ___
**Answer: n! (n factorial)** — for positive integer n, Γ(n+1) = n!

**9.** The limit lim_{(x,y)→(0,0)} [something garbled, "log" appears] — ⚠
too corrupted to safely reconstruct; check your paper.

**10.** The divergence of the field F(x,y) = (xy)i + (y²)j — **Answer:**
div F = ∂(xy)/∂x + ∂(y²)/∂y = y + 2y = **3y**

### Section B

**11.** The primitive period of sin 5x is ___
**Options:** 2π ; π ; 2π/5 ; π/5
**Answer: 2π/5**

**12.** The curve r = 5 + 5cos θ is symmetric about ___
**Answer: x-axis** (same reasoning as 2018 Jan #12)

**13.** B(m,2) = ___, where B(m,n) has its usual meaning — ⚠ garbled options,
can't safely give numeric answer without knowing which specific m. Formula
to know: **B(m,2) = 1/(m(m+1))** (from B(m,n) = (n−1)!(m−1)!/(m+n−1)! for
integer n, or via the reduction formula).

**14.** A vector field F(x,y) is conservative if and only if F = ∇f, there
exists a scalar potential function f(x,y). **Answer: ∇f**

**15.** The conic section r = ed/(1 − e cos θ) represents a hyperbola if e is
greater than ___
**Answer: 1**

**16.** The curvature of a circle of radius a is ___
**Options:** 1/(2a) ; a ; 1/a ; 2a
**Answer: 1/a**

**17.** If f(x,y,z) = x² + y² + z² with x = 5 cos t, y = 5 sin t, z = 5t, then
df/dt at t = 2 is ___ ⚠ the OCR shows options [0; 100; 200; 300] and a "5t"
substitution — **Answer:** f = 25cos²t+25sin²t+25t² = 25+25t², df/dt = 50t.
At t=2: 100. **Answer: 100**

**18.** The plane containing unit tangent vector and binormal vector is
called a(n) ___
**Answer: rectifying plane**

**19.** The polar equation r = 3 + 4cos θ is the ___
**Options:** limaçon ; cardioid ; lemniscate ; four-leaved rose
**Answer: limaçon** (since |a|≠|b| here, a=3,b=4 → limaçon with an inner
loop since |b|>|a|)

**20.** If f(x) is odd function, then ∫_{−a}^{a} f(x) dx = ___
**Answer: 0**

---

## 2019 (August)

### Section A

**1.** The eccentricity e of the ellipse x²/9 + y²/4 = 1 is ___ ⚠ the exact
numbers in "6 ise= 4'" are garbled — using the visible 9 and 4 pattern for a
standard ellipse x²/a²+y²/b²=1 with a²=9, b²=4: c²=a²−b²=5, **e = c/a =
√5/3**. Confirm the actual a²,b² from your paper before trusting the number.

**2.** Spherical coordinate equation of the cone z² = x² + y² is ___
**Answer:** In spherical coords x=ρsinφcosθ, y=ρsinφsinθ, z=ρcosφ. The cone
z²=x²+y² becomes ρ²cos²φ = ρ²sin²φ → tan²φ = 1 → **φ = π/4** (or 3π/4 for
the lower nappe)

**3.** At the point where κ ≠ 0, the principal unit normal vector for a
smooth curve in the plane is defined as N = ___
**Answer: N = (dT/ds)/|dT/ds|**, equivalently N = T'(t)/|T'(t)|

**4.** lim_{(x,y)→(0,0)} (x² − xy)/(√x − √y) — ⚠ badly garbled denominator,
can't reliably solve without the real expression. Skip.

**5.** The function f(x,y) = x² + y² increases most rapidly at (1,1) in the
direction ___
**Answer:** direction of ∇f = (2x,2y) at (1,1) = (2,2), unit vector
**(1/√2, 1/√2)** i.e. **(i+j)/√2**

**6.** The equivalent polar integral of ∫₀¹∫₀^{√(1−x²)} dy dx is ___
**Answer:** this region is the quarter disk x²+y²≤1, x,y≥0 →
**∫₀^{π/2} ∫₀¹ r dr dθ**

**7.** The value of B(1,2) = ___, where the symbol B(m,n) has its usual
meaning.
**Answer:** B(1,2) = Γ(1)Γ(2)/Γ(3) = (1)(1)/2 = **1/2**

**8.** The speed of the particle at t = π/2, whose motion is given by
r(t) = (2cos t)i + (3sin t)j + 4t k
**Answer:** v(t) = (−2sin t, 3cos t, 4), |v| = √(4sin²t + 9cos²t + 16). At
t=π/2: sin=1,cos=0 → √(4+0+16) = **√20 = 2√5**

**9.** ___ theorem is the generalization of Green's theorem in tangential
form to three dimensions.
**Answer: Stokes' theorem**

**10.** The Fourier coefficient aₙ of a function f(x) of period 2π is defined
by the formula ___
**Answer:** aₙ = (1/π)∫_{−π}^{π} f(x) cos(nx) dx

### Section B

**11.** The point (−2, π/6) labels the same point as ___
**Answer:** Adding π to θ and negating r gives the same point: (−2,π/6) is
the same as **(2, π/6 + π) = (2, 7π/6)**

**12.** r = 6 cos θ represents a circle with its centre at ___
**Answer: (3, 0)** (in polar; general r=2a cosθ has center (a,0), a=3)

**13.** Tangent plane of the surface f(x,y,z) = x² + y² + z = 0 at (0,0,0) is
**Answer:** ∇f = (2x,2y,1), at (0,0,0) = (0,0,1). Tangent plane:
0(x−0)+0(y−0)+1(z−0)=0 → **z = 0**

**14.** If x³ + z² + ye^x + z cos y = 0, then ∂z/∂x at (0,0,0) is ___
**Answer:** Implicit differentiation: 3x² + 2z(∂z/∂x) + ye^x + (−z sin y)(∂z/∂x)
· ... treat via F(x,y,z)=x³+z²+ye^x+z cos y=0, ∂z/∂x = −Fx/Fz.
Fx = 3x² + ye^x, Fz = 2z + cos y. At (0,0,0): Fx = 0+0=0, Fz=0+1=1.
∂z/∂x = −0/1 = **0**

**15.** ⚠ garbled beyond safe recovery (something about "e" and a ratio)

**16.** ∭ xyz dx dy dz over the unit cube [0,1]³ = ___
**Answer:** ∫₀¹x dx · ∫₀¹y dy · ∫₀¹z dz = (1/2)(1/2)(1/2) = **1/8**

**17.** The plane containing unit tangent vector and binormal vector is
called ___
**Answer: rectifying plane**

**18.** The divergence of the vector field F(x,y) = −y i + 2x j is ___
**Answer:** div F = ∂(−y)/∂x + ∂(2x)/∂y = 0 + 0 = **0**

**19.** The primitive period of the function f(x) = sin(x/n) is ___
**Answer: 2nπ**

**20.** If a function f(x) is odd then ∫_{−a}^{a} f(x) dx = ___
**Answer: 0**

---

## 2022 (May/June)

### Section A

**1.** ⚠ garbled — appears to reference revolving r=a about the x-axis
(surface of revolution volume). Formula to know: volume of revolution about
the x-axis, V = ∫ π y² dx (Cartesian) — can't give a specific numeric answer
without the exact original wording.

**3.** The level curve of the function f(x,y) = 16 − x² − y² at (2√3, 1) —
**Answer:** f(2√3,1) = 16 − 12 − 1 = 3, so the level curve is **x² + y² = 13**

**4.** If w=f(x,y) is differentiable and x,y are differentiable functions of
t, then w is differentiable function of t and by chain rule, dw/dt = ___
**Answer: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt)**

**6.** The value of Γ(1) = ___, where the symbol Γ(n) has its usual meaning.
**Answer: 1**

**7.** The curvature of the straight line is κ = ___
**Answer: 0**

**8.** The divergence of the vector field F = 2xi + (x+2y)j + z²k — ⚠ the
third term is uncertain from OCR; assuming F = 2x i + (x+2y) j + z² k:
**Answer:** div F = 2 + 2 + 2z = **4 + 2z**

**9.** The generalization of Green's theorem in three dimensions in its
normal form is known as a(n) ___ theorem.
**Answer: Divergence (Gauss's) theorem**

**10.** For an odd function f(x), ∫_{−a}^{a} f(x) dx = ___
**Answer: 0**

### Section B

**11.** The eccentricity e of the conic section r = ed/(1 − e cos θ)-type
with one focus at origin is ___ — ⚠ too garbled to pin a specific numeric
value; this question is testing that you can read e directly off the
standard polar conic form r = ed/(1 ± e cos θ).

**12.** The curve r = 1 + cos θ is symmetric about ___
**Options:** x-axis ; y-axis ; pole ; pole and x-axis
**Answer: x-axis**

**13.** In spherical coordinates (ρ,φ,θ), the equation φ = φ₀ represents ___
**Options:** origin ; cone with vertex at origin ; sphere centered at origin ;
cylinder about z-axis ; straight line through origin
**Answer: cone with vertex at origin**

**14.** If w = x² + y − z + sin t and x + y = t, find (∂w/∂x)_{y,z} — ⚠ the
options are garbled; conceptually: holding y,z fixed and treating t as
depending on x via x+y=t (so dt/dx=1 when y fixed):
∂w/∂x = 2x + cos(t)·(dt/dx) = **2x + cos(x+y)**

**15.** Beta function B(m,n) = ___
**Options include:** ∫₀¹ x^(m−1)(1−x)^(n−1) dx ; 2∫₀^{π/2} sin^(2m−1)t cos^(2n−1)t dt
**Answer:** both are valid standard forms — the expected pick is likely
**2∫₀^{π/2} sin^(2m−1)θ cos^(2n−1)θ dθ** (the trig form) given the option
structure, but the Cartesian integral ∫₀¹x^(m−1)(1−x)^(n−1)dx is equally
correct and is the primary definition.

**16.** The double integral ∫₀^{π/2}∫₀¹ r dr dθ gives the area enclosed by
the unit circle x²+y²=1 in the first quadrant.
**Answer:** ∫₀^{π/2}∫₀¹ r dr dθ = (π/2)·(1/2) = **π/4** ✓ matches quarter-circle area

**17.** If u(t) is a differentiable vector function of t of constant length,
then ___
**Answer: u is orthogonal to du/dt** (equivalently u·(du/dt) = 0)

**18.** The relation ___ is not true.
**Answer:** among the given options (dB/dt = τ(dr/ds)×N-type identities),
without full option text this can't be pinned exactly — this question is
testing the Frenet-Serret formulas; know that **dT/ds = κN, dN/ds =
−κT+τB, dB/ds = −τN** so any option that misattributes these is the "false" one.

**19.** If the field F is conservative on D, then for some scalar function f,
F = ___
**Answer: ∇f**

**20.** The primitive period of the function f(x) = sin(mx) is ___
**Answer: 2π/m**

---

## 2023 (April/May)

### Section A

**1.** In spherical coordinates, z² = x² + y² is written as φ = ___
**Answer: π/4** (same reasoning as 2019 A2 — cone at 45°; could also be 3π/4
for the lower nappe, mention both)

**3.** Direction in which f(x,y,z) = x + y + z increases most rapidly at
(0,0,0) is ___
**Answer:** ∇f = (1,1,1) everywhere (constant gradient) → direction
**(i+j+k)/√3**

**4.** Find fₓ if f(x,y) = x + [garbled, likely "x + y³" or similar] — ⚠ too
corrupted for a safe specific answer.

**5.** The equivalent polar form of the integral ∫∫ (x²+y²) dy dx — ⚠ bounds
garbled, but the general conversion principle: (x²+y²) → r², dy dx → r dr dθ,
so the integrand becomes **r³ dr dθ**.

**6.** Speed of a particle whose motion is r(t) = 3cos(t) i + 4 sin(t) j + t k
**Answer:** v(t) = (−3sin t, 4cos t, 1), speed = √(9sin²t + 16cos²t + 1) =
√(9 + 7cos²t + 1)... let's simplify properly: 9sin²t+16cos²t = 9(sin²t+cos²t)+7cos²t
= 9+7cos²t, so speed = **√(10 + 7cos²t)**

**7.** The plane containing unit tangent vector T and binormal vector B is
called the ___ plane.
**Answer: rectifying**

**8.** Curl of a vector field F = z²i + y²j + xzk is ___
**Answer:** curl F = (∂/∂y(xz) − ∂/∂z(y²), ∂/∂z(z²) − ∂/∂x(xz), ∂/∂x(y²) − ∂/∂y(z²))
= (0−0, 2z−z, 0−0) = **(0, z, 0) = zj**

**10.** If f(x) is an odd function, then ∫_{−π}^{π} f(x) cos x dx = ___
**Answer: 0** (odd × even = odd, and the integral of an odd function over a
symmetric interval is 0)

### Section B

**11.** Which polar coordinate labels the same point as (2, π/6)?
**Answer:** among typical distractors like (2, 7π/6), (−2, π/6), (−2, 7π/6):
the equivalent point with negative r is **(−2, π/6 + π) = (−2, 7π/6)**

**12.** The equation of directrix of the conic r = ed/(1 + e cos θ) is ___ —
⚠ specific e,d garbled; general rule: directrix is the vertical line
**x = d** (for the + cos θ form) at distance d = (value)/e from the pole.

**14.** Hessian of the function f(x,y) = x² + y² at (1,1) is ___
**Answer:** fₓₓ=2, f_yy=2, fₓy=0. Hessian determinant = fₓₓf_yy − (fₓy)² =
2·2 − 0 = **4**

**15.** If z=f(x,y) is differentiable and x,y are functions of t, then z is
differentiable and dz/dt = ___
**Answer: dz/dt = (∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)**

**16.** The integral value of F(x,y,z) = xyz over the cube bounded by
coordinate planes and x=1,y=1,z=1 is ___
**Answer:** ∫₀¹∫₀¹∫₀¹ xyz dx dy dz = (1/2)(1/2)(1/2) = **1/8**

**17.** Radius of curvature of the curve r(t) = 2cos t i + 2 sin t j is ___
**Answer:** this traces a circle of radius 2, so curvature κ = 1/2, and
**radius of curvature = 1/κ = 2**

**18.** For any function f(x,y,z) whose partial derivatives are continuous,
∇ × ∇f = ___
**Answer: 0** (curl of a gradient is always zero)

**19.** If a field F = xi + yj + zk is conservative, then ∇f = ___, where f
is the potential function of the vector field F.
**Answer: ∇f = xi + yj + zk** (i.e. f itself is ½(x²+y²+z²) — the blank asks
you to restate F = ∇f)

**20.** If f(x) and g(x) each have period p, then the period of h(x) =
af(x)+bg(x) (a,b constants) is ___
**Answer: p**

---

## 2024 (June/July, regular)

### Section A

**1.** The equation r = 2 + 3 cos θ represents a polar curve known as ___
**Answer: limaçon** (with an inner loop, since |b|=3 > |a|=2)

**2.** The Cartesian form of the equation r = 1/(2cos θ − 3 sin θ) is ___
**Answer:** r(2cos θ − 3 sin θ) = 1 → 2r cos θ − 3r sin θ = 1 →
**2x − 3y = 1**

**3.** The Hessian of the function f(x,y) = x³ + y² at (1,2) is ___
**Answer:** fₓₓ=6x, f_yy=2, fₓy=0. At (1,2): fₓₓ=6, f_yy=2, fₓy=0.
Hessian = 6·2 − 0 = **12**

**4.** If f(x,y,z) = x + 2y − 3z, then ∇f = ___
**Answer: i + 2j − 3k**

**5.** For the transformation x = u cos v, y = u sin v, Jacobian J(u,v) = ___
**Answer:** J = ∂(x,y)/∂(u,v) = det[[cos v, −u sin v],[sin v, u cos v]] =
u cos²v + u sin²v = **u**

**6.** Let f(x,y) be continuous on region R defined by a≤x≤b, g₁(x)≤y≤g₂(x).
Then ∬_R f(x,y) dA = ___
**Answer:** ∫ₐᵇ ∫_{g₁(x)}^{g₂(x)} f(x,y) dy dx

**7.** The value of Γ(5), where the symbol Γ has its usual meaning.
**Answer:** Γ(5) = 4! = **24**

**8.** If r(t) is a differentiable vector function of t of constant length,
then r · (dr/dt) = ___
**Answer: 0**

**9.** ___ theorem generalizes Green's theorem in tangential form to three
dimensions.
**Answer: Stokes' theorem**

**10.** The divergence of a vector field F = 2x² i + 3y² j + 4 k is ___
**Answer:** div F = 4x + 6y

### Section B

**11.** The polar coordinate of the rectangular coordinate point (0,1) is ___
**Answer:** r=1, θ=π/2 → **(1, π/2)**

**12.** The equation r = 2cos θ represents a circle whose center is located
at ___
**Options:** x-axis ; y-axis ; origin ; (2,2)
**Answer: x-axis** (specifically at (1,0), which lies on the x-axis)

**13.** lim_{(x,y)→(2,2)} (x+y−4)/(√(x+y)−2) — **Answer:** substitute
s=x+y→4: (s−4)/(√s−2) = (√s−2)(√s+2)/(√s−2) = √s+2 → at s=4: 2+2 = **4**

**14.** The derivative of z=f(x,y) in the direction where it rises most
rapidly is ___
**Answer: ∇f**

**15.** If z=f(x,y) is differentiable and x,y are functions of t, then
dz/dt = ___
**Answer: (∂z/∂x)(dx/dt) + (∂z/∂y)(dy/dt)**

**16.** The double integral ∫₀²∫_{x²}^{2x} dy dx computes the area of a
closed and bounded region R in the xy-plane enclosed by the curves y=x² and
y=2x.
**Answer:** this is a statement/setup question confirming the bounds; the
area itself = ∫₀²(2x−x²)dx = [x² − x³/3]₀² = 4 − 8/3 = **4/3**

**17.** The relationship between Beta and Gamma functions is expressed as
B(x,y) = ___
**Answer: Γ(x)Γ(y)/Γ(x+y)**

**18.** The plane bounded by unit tangent vector and principal unit normal
vector is called ___
**Options:** normal plane ; rectifying plane ; osculating plane ; principal plane
**Answer: osculating plane**

**19.** For any function f(x,y,z) whose partial derivatives are continuous,
∇ × ∇f = ___
**Answer: 0**

**20.** If the function f(x) is ___, then ∫_{−a}^{a} f(x) dx = 0.
**Options:** even ; odd ; increasing ; decreasing
**Answer: odd**

---

## 2024 (September resit)

### Section A

**1.** If the points (r,θ) and (−r,θ) both lie on the graph of a polar curve
r=f(θ), then the curve is symmetric about ___
**Answer: the origin (pole)**

**2.** If u(t) is a differentiable vector function of t of constant length,
then the scalar product u · (du/dt) = ___
**Answer: 0**

**3.** If w=f(x,y) is differentiable and x,y are differentiable functions of
t, then w is a differentiable function of t and by chain rule dw/dt = ___
**Answer: (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt)**

**4.** A twice differentiable function f(x,y) has a saddle point at a
critical point (a,b) when the value of discriminant D = fₓₓf_yy − (fₓy)² at
(a,b) is ___
**Answer: negative (D < 0)**

**5.** The value of the double integral ∫₀²∫₀²(4−y) dy dx = ___
**Answer:** inner: ∫₀²(4−y)dy = [4y−y²/2]₀² = 8−2 = 6. Outer: ∫₀² 6 dx = **12**

**6.** The Jacobian of the transformation x=r cos θ, y=r sin θ is ___
**Answer: r**

**7.** If F is a conservative field and f is its potential function, then the
value of the integral ∫_C F·dr = ___
**Answer: f(end point) − f(start point)** (path independence — the integral
depends only on the endpoints)

**8.** The smallest period T > 0 of a periodic function is called ___
**Answer: the fundamental (primitive) period**

**9.** The curvature of a straight line is κ = ___
**Answer: 0**

**10.** The equivalent Cartesian coordinates (x,y,z) of the cylindrical
coordinates (r,θ,z) are ___
**Answer: x = r cos θ, y = r sin θ, z = z**

### Section B

**11.** The point P(2, π) in polar coordinate system is equivalent to ___
**Answer:** among distractors like (−2, 2π), (2, −π), etc — the standard
equivalent with negative r: **(−2, 0)** [since adding π to θ and negating r:
(2,π) = (−2, π+π) = (−2, 2π) = (−2,0)]. ⚠ verify exact options on your paper.

**12.** The polar equation r = 6 sin θ represents a circle with center at ___
**Options:** (3,0) ; (−3,0) ; (0,3) ; (0,−3)
**Answer: (0,3)** (general r = 2b sin θ has center (0,b), here b=3)

**13.** The function f(x,y) decreases most rapidly at the point (in the
direction of −∇f) — this is a definitional/conceptual MCQ; **Answer: −∇f**

**14.** The value of fₓ at (4,−5) for a function f(x,y) = 3xy² − y − 1 is ___
**Answer:** fₓ = 3y². At (4,−5): 3(25) = **75** — ⚠ this doesn't match the
visible option "[13; −7; ... −13]" in the OCR, meaning either the function or
point I've reconstructed differs from the actual paper. The OCR is too
damaged here to be confident; recompute directly from your paper's exact
f(x,y) and point.

**15.** The unit tangent vector T and the principal normal vector N of a
space curve r(t) are ___
**Options:** parallel ; orthogonal ; dependent ; non-coplanar
**Answer: orthogonal**

**16.** The divergence of the vector field F(x,y) = (x²−y)i + (xy−y)j is ___
**Answer:** div F = ∂(x²−y)/∂x + ∂(xy−y)/∂y = 2x + (x−1) = **3x − 1**

**17.** Γ(p)Γ(q)/Γ(p+q+2)-type ratio identity — ⚠ too garbled for a specific
value; this is testing the Beta-Gamma relationship generally.

**18.** The value of B(5,3) = ___, where B(·,·) denotes the beta function.
**Answer:** B(5,3) = Γ(5)Γ(3)/Γ(8) = (24)(2)/5040 = 48/5040 = **1/105**

**19.** The linearization of the function f(x,y,z) = xy + yz + xz at the
point (1,0,0) is L(x,y,z) = ___
**Answer:** f(1,0,0) = 0. ∇f = (y+z, x+z, y+x), at (1,0,0) = (0,1,1).
L = f(1,0,0) + ∇f·(x−1,y−0,z−0) = 0 + 0(x−1)+1(y)+1(z) = **y + z**

**20.** For an odd function f(x), the value of ∫_{−π}^{π} f(x) cos(nx) dx = ___
**Answer: 0**

---

## 2025 (March)

### Section A

**1.** The Cartesian form of the polar equation r² sin 2θ = 2 is ___
**Answer:** r² sin 2θ = r²(2 sinθ cosθ) = 2(r sinθ)(r cosθ) = 2xy. So
2xy = 2 → **xy = 1**

**2.** The level curve of f(x,y) = y − x² at (1,1) is ___
**Answer:** f(1,1) = 1−1 = 0, so the level curve is **y − x² = 0**, i.e.
**y = x²**

**3.** If u(x,y) = eˣ sin y, then ∂²u/∂x∂y = ___
**Answer:** ∂u/∂y = eˣ cos y, then ∂/∂x of that = **eˣ cos y**

**4.** The area of a closed and bounded region R in polar coordinates is
given by the double integral ___
**Answer:** ∬_R r dr dθ (equivalently ∫∫ ½ r² dθ when integrated over r first)

**5.** The value of Γ(1) = ___
**Answer: 1**

**6.** The radius of curvature of the curve r(t) = (cos t)i + (sin t)j is ___
**Answer:** this traces the unit circle, κ=1, so radius of curvature = **1**

**7.** The length of the indicated portion of the curve r(t) = (2cos t)i +
(2 sin t)j + t k, 0 < t < π, is ___ ⚠ the exact z-component coefficient is
garbled in OCR ("160i"); assuming z=t k as the simplest consistent read:
**Answer:** speed = √((−2sin t)²+(2cos t)²+1²) = √(4+1) = √5 (constant).
Length = √5 · π = **π√5**. If the coefficient is different in your actual
paper, redo with speed = √(4+c²) · π for r=(2cost,2sint,ct).

**8.** Stokes' theorem is a generalization of Green's theorem in ___ form to
three dimensions.
**Answer: tangential**

**9.** The gradient field of the function f(x,y,z) = xyz is ___
**Answer: ∇f = yz i + xz j + xy k**

**10.** A function f(x) is said to be periodic if it is defined for all x,
and there is some positive number T such that ___ for all x.
**Answer: f(x + T) = f(x)**

### Section B

**11.** The curve r² = 4 sin 2θ is symmetric about ___
**Options:** x-axis ; y-axis ; origin ; all
**Answer: origin** (r²=4sin2θ: replacing r→−r leaves LHS unchanged since r²
is squared, so symmetric about the pole/origin; test θ→π−θ: sin(2π−2θ)=−sin2θ,
fails x-axis and y-axis individually unless combined with the pole test —
standard answer for this curve is **the pole (origin)**)

**12.** The center of the circle r = 2 sin θ is at ___
**Options:** (0,0) ; (1,0) ; (0,1) ; (1,1)
**Answer: (0,1)** (general r=2b sinθ has center (0,b), here b=1)

**13.** Tangent plane of the surface f(x,y,z)=x²+y²+z at (0,0,0) is ___
**Answer:** ∇f=(2x,2y,1), at origin=(0,0,1). Plane: z=0 → **z = 0**

**14.** If w = xz + 2y³, x = sin t, y = cos t, then dw/dt at t = π/2 equals
___ ⚠ z isn't defined as a function of t in the visible OCR — likely w is
meant purely as a function of x,y with the "z" being an OCR misread of
another variable, or z is also given in terms of t but lost in scanning.
Can't safely reconstruct a specific numeric answer; recheck your paper's
exact wording. Options shown were **[0; −6; 2; 6]**.

**15.** The Jacobian of the transformation x = r cos θ, y = r sin θ is ___
**Answer: r**

**16.** For the TNB frame with B = T × N, the torsion function of a smooth
curve is τ = ___
**Answer: τ = −(dB/ds) · N** (equivalently dB/ds = −τN, one of the
Frenet–Serret formulas)

**17.** If the acceleration vector is written as a = a_T T + a_N N, then a_N
(the normal component) is ___
**Answer: a_N = κ|v|² = κv²** (equivalently a_N = |v×a|/|v|)

**18.** If a vector field F is conservative then F = ___ for some scalar
function f.
**Answer: ∇f**

**19.** The formula for the flux of a vector field F(x,y) = P(x,y)i + Q(x,y)j
across a simple closed curve C is ___
**Answer: ∮_C P dy − Q dx** (equivalently ∮_C F · n ds)

**20.** The fundamental period of the function y = tan 2x is ___
**Answer: π/2**

---

## Recurring facts worth memorizing cold

These showed up, verbatim or near-verbatim, across most of the 9 papers.
Getting these instantly right is close to free marks:

| Fact | Answer |
|---|---|
| ∫ odd function over symmetric interval [−a,a] | **0** |
| Plane containing T and N (unit tangent + principal normal) | **osculating plane** |
| Plane containing T and B (unit tangent + binormal) | **rectifying plane** |
| Plane containing N and B (normal + binormal) | **normal plane** |
| Curvature of a straight line | **κ = 0** |
| Curvature of a circle of radius r | **κ = 1/r** |
| F conservative ⟺ F = | **∇f** |
| curl(∇f) for any scalar f | **0** |
| Jacobian of x=r cos θ, y=r sin θ | **r** |
| ∬ r dr dθ over R gives | **area of R (polar)** |
| Beta-Gamma relation | **B(m,n) = Γ(m)Γ(n)/Γ(m+n)** |
| Γ(n+1) for positive integer n | **n!** |
| Stokes' theorem generalizes Green's theorem (tangential form) to 3D | — |
| Divergence (Gauss's) theorem generalizes Green's theorem (normal form) to 3D | — |
| Constant-length vector function u(t): u·(du/dt) = | **0** (u ⟂ du/dt) |
| r = 2a cos θ / r = 2a sin θ circle centers | **(a,0) / (0,a)** respectively |
| Chain rule for w=f(x,y), x=x(t), y=y(t) | **dw/dt = wₓ·x'(t) + w_y·y'(t)** |

---

## A note on reliability

I flagged every answer I wasn't fully confident in with **⚠ reconstructed**.
Where the scan was too degraded to responsibly guess (garbled fractions,
missing coefficients, cut-off option lists), I said so rather than inventing
a plausible-looking number — a wrong "confident" answer sitting in your
notes is worse than a gap you know to double-check. If you have cleaner
scans or the physical papers, it'd be worth re-checking anything flagged
above before you commit it to memory.
