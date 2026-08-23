YEAH. Based on your **9-paper analysis**, I would _not_ study each unit evenly. There are specific subtopics that are disproportionately worth your time.

Here's the **“if I had to prepare this unit for the exam”** version.

---

# 🔥 Unit 1 — Coordinate Systems

### MUST KNOW

**1. Polar coordinates**

- $x=r\cos\theta,\ y=r\sin\theta$
    
- $r^2=x^2+y^2$
    
- Converting Cartesian ↔ polar
    

**2. Polar curve symmetry**  
Know the tests:

- $(\theta\to-\theta)$ → symmetry about x-axis
    
- $(\theta\to\pi-\theta)$ → symmetry about y-axis
    
- $(r\to-r)$ / $(\theta\to\theta+\pi)$ → symmetry about origin
    

**3. Polar curve sketching**  
Especially:

- Circle
    
- Cardioid
    
- Limaçon
    
- Lemniscate
    

Learn to sketch using:

- symmetry
    
- zeros of $r$
    
- maximum/minimum $r$
    
- a few easy $\theta$ values
    

**4. Area in polar coordinates**

$$  
A=\frac12\int_\alpha^\beta r^2,d\theta  
$$

🔥 **EXTREMELY IMPORTANT:** finding the correct bounds from intersections.

You should be able to do:

> area inside curve A but outside curve B

and

> area common to two curves.

**5. Cylindrical & spherical coordinates**

Cylindrical:

$$  
x=r\cos\theta,\quad y=r\sin\theta,\quad z=z  
$$

$$  
r^2=x^2+y^2  
$$

Spherical:

$$  
x=\rho\sin\phi\cos\theta  
$$

$$  
y=\rho\sin\phi\sin\theta  
$$

$$  
z=\rho\cos\phi  
$$

Know the Jacobians:

$$  
dV=r,dr,d\theta,dz  
$$

$$  
dV=\rho^2\sin\phi,d\rho,d\phi,d\theta  
$$

### 🎯 Exam priority

**Polar sketch + area > coordinate conversion > cylindrical/spherical.**

---

# 🔥 Unit 2 — Functions of Several Variables

This unit is basically your **foundation unit**.

### MUST KNOW

**1. Partial derivatives**

$$  
f_x,\ f_y,\ f_{xx},\ f_{yy},\ f_{xy}  
$$

Be very comfortable differentiating while treating the other variables as constants.

---

**2. Gradient**

$$  
\nabla f=  
\left\langle  
f_x,f_y,f_z  
\right\rangle  
$$

And evaluating it at a point.

---

**3. Directional derivative**

$$  
D_{\mathbf u}f=\nabla f\cdot\mathbf u  
$$

where

$$  
\mathbf u=\frac{\mathbf v}{|\mathbf v|}  
$$

🔥 Don't forget **unit vector normalization**.

---

**4. Maximum/minimum directional derivative**

Maximum rate:

$$  
|\nabla f|  
$$

Direction:

$$  
\frac{\nabla f}{|\nabla f|}  
$$

Minimum rate:

$$  
-|\nabla f|  
$$

Direction:

$$  
-\frac{\nabla f}{|\nabla f|}  
$$

This is a **very high-value C-question pattern**.

---

**5. Chain rule**

Know both forms, especially when

$$  
z=f(x,y),\qquad x=x(t),\ y=y(t)  
$$

then

# $$  
\frac{dz}{dt}

\frac{\partial z}{\partial x}\frac{dx}{dt}  
+  
\frac{\partial z}{\partial y}\frac{dy}{dt}  
$$

---

**6. Tangent plane**

For $z=f(x,y)$:

$$  
z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)  
$$

---

**7. Max/min/saddle points**

Know the complete procedure:

1. Find $f_x=f_y=0$
    
2. Find critical points
    
3. Calculate
    

$$  
D=f_{xx}f_{yy}-(f_{xy})^2  
$$

Then:

- $D>0,\ f_{xx}>0$: local minimum
    
- $D>0,\ f_{xx}<0$: local maximum
    
- $D<0$: saddle
    
- $D=0$: inconclusive
    

🔥 This is one of your recurring C-question patterns.

---

**8. Lagrange multipliers**

$$  
\nabla f=\lambda\nabla g  
$$

plus

$$  
g(x,y)=c  
$$

Know the full solving procedure.

---

**9. Limits & continuity**

Especially **two-path testing**.

If two paths give different answers → limit doesn't exist.

### 🎯 Exam priority

**Directional derivatives > extrema/saddle > Lagrange > chain rule > limits > tangent planes.**

---

# 🔥 Unit 3 — Multiple Integrals

### MUST KNOW

**1. Double integrals**

$$  
\iint_R f(x,y),dA  
$$

Know how to identify the region and determine limits.

---

**2. Reversing order**

This is a big one.

Given:

$$  
\int_a^b\int_{g_1(x)}^{g_2(x)} f(x,y),dy,dx  
$$

you need to:

1. Understand the region
    
2. Sketch it
    
3. Find new limits
    
4. Rewrite as $(dx,dy)$
    

Don't try to do this algebraically without sketching.

---

**3. Polar double integrals**

$$  
x=r\cos\theta,\qquad y=r\sin\theta  
$$

and

$$  
dA=r,dr,d\theta  
$$

🔥 The extra $r$ is a classic mistake.

---

**4. Triple integrals**

Rectangular:

$$  
dV=dx,dy,dz  
$$

Cylindrical:

$$  
dV=r,dr,d\theta,dz  
$$

Spherical:

$$  
dV=\rho^2\sin\phi,d\rho,d\phi,d\theta  
$$

---

**5. Setting up regions**

This is arguably more important than raw integration.

You need to look at a solid and determine:

- bounds
    
- coordinate system
    
- Jacobian
    
- integration order
    

### 🎯 Exam priority

**Changing order > triple integrals > polar double integrals > area/volume > average value.**

---

# 🟢 Unit 5 — Applications of Integration

This is your **cheap unit** because much of it is just integration setup.

### MUST KNOW

**1. Area between curves**

$$  
A=\int_a^b(f(x)-g(x)),dx  
$$

Know when to switch to $dy$.

---

**2. Volume**

Especially:

### Disk/washer

$$  
V=\pi\int_a^b(R^2-r^2),dx  
$$

### Shell

$$  
V=2\pi\int_a^b(\text{radius})(\text{height}),dx  
$$

---

**3. Surface of revolution**

Know the standard formulas.

Around x-axis:

$$  
S=2\pi\int_a^b y\sqrt{1+\left(\frac{dy}{dx}\right)^2},dx  
$$

Around y-axis:

$$  
S=2\pi\int_a^b x\sqrt{1+\left(\frac{dy}{dx}\right)^2},dx  
$$

### 🎯 Exam priority

Don't spend ages here.

**Learn the formulas + practice recognizing which setup to use.**

Your Unit 1 + Unit 3 preparation already covers much of this.

---

# 🟢 Unit 4 — Beta & Gamma

This is the **memorize-the-core-and-farm-marks** unit.

### MUST KNOW COLD

### Gamma definition

$$  
\Gamma(n)=\int_0^\infty x^{n-1}e^{-x},dx  
$$

### Gamma recurrence

$$  
\Gamma(n+1)=n\Gamma(n)  
$$

Therefore:

$$  
\Gamma(n)=(n-1)!  
$$

for positive integers.

---

### Beta definition

$$  
B(m,n)=\int_0^1x^{m-1}(1-x)^{n-1},dx  
$$

---

### 🔥 Beta-Gamma relation

$$  
\boxed{  
B(m,n)=\frac{\Gamma(m)\Gamma(n)}  
{\Gamma(m+n)}  
}  
$$

You should be able to **prove this**, not merely quote it.

Your analysis specifically says this proof repeatedly appears.

---

### Other recurring proof

Know the recursive relationship involving:

$$  
B(m,n+1)  
$$

and

$$  
B(m+1,n)  
$$

### 🎯 Exam priority

**Beta-Gamma proof > Gamma recurrence > definitions > transformations.**

This is one of the best **marks-per-hour** units.

---

# 🔥🔥 Unit 6 — Vector Functions & Derivatives

This is where I'd get serious.

## THE BIG ONE: TNB FRAME

You want the entire pipeline to become automatic.

Given:

$$  
\mathbf r(t)  
$$

### 1. Velocity

$$  
\mathbf r'(t)  
$$

### 2. Speed

$$  
|\mathbf r'(t)|  
$$

### 3. Unit tangent

$$  
\boxed{  
\mathbf T=  
\frac{\mathbf r'}{|\mathbf r'|}  
}  
$$

### 4. Principal normal

$$  
\boxed{  
\mathbf N=  
\frac{\mathbf T'}{|\mathbf T'|}  
}  
$$

### 5. Binormal

$$  
\boxed{  
\mathbf B=\mathbf T\times\mathbf N  
}  
$$

### 6. Curvature

$$  
\boxed{  
\kappa=  
\frac{|\mathbf r'\times\mathbf r''|}  
{|\mathbf r'|^3}  
}  
$$

### 7. Torsion

Know the formula:

$$  
\boxed{  
\tau=  
\frac{(\mathbf r'\times\mathbf r'')\cdot\mathbf r'''}  
{|\mathbf r'\times\mathbf r''|^2}  
}  
$$

---

## 🔥 HELIX

Your analysis is basically screaming:

> **LEARN THE HELIX.**

Typical:

$$  
\mathbf r(t)=  
\langle  
a\sin t,,  
a\cos t,,  
bt  
\rangle  
$$

Know how to derive:

$$  
T,\ N,\ B,\ \kappa,\ \tau  
$$

for the general $(a,b)$ case.

Then a question giving $(a=3,b=4)$ becomes substitution instead of an entire derivation.

### Also know

- arc length
    
- velocity
    
- acceleration
    
- speed
    
- curvature
    
- torsion
    
- TNB plane terminology
    

And remember from your analysis:

> The plane containing **T and B** is the **rectifying plane**.

### 🎯 Exam priority

**TNB + helix >>> curvature/torsion >>> arc length >>> motion.**

---

# 🔥🔥🔥 Unit 7 — Vector Integral Calculus

This is the monster unit.

You want to know these **six things extremely well**:

---

## 1. Line integrals

For

$$  
\mathbf F=\langle P,Q,R\rangle  
$$

along

$$  
\mathbf r(t)  
$$

know:

# $$  
\int_C\mathbf F\cdot d\mathbf r

\int_a^b  
\mathbf F(\mathbf r(t))\cdot\mathbf r'(t),dt  
$$

Also understand **work done**.

---

# 2. Conservative vector fields

🔥 Very high priority.

A field is conservative if:

$$  
\boxed{\mathbf F=\nabla f}  
$$

For

$$  
\mathbf F=\langle P,Q,R\rangle  
$$

check:

$$  
\nabla\times\mathbf F=0  
$$

under the appropriate domain conditions.

Then find the **potential function** $f$.

You should be able to:

1. Integrate $P$ with respect to $x$
    
2. Introduce an unknown function
    
3. Differentiate it
    
4. Compare with $(Q/R)$
    
5. Determine missing terms
    

---

# 3. Green's theorem

🔥🔥 VERY IMPORTANT according to your papers.

Know:

# $$  
\boxed{  
\oint_C P,dx+Q,dy

## \iint_R  
\left(  
\frac{\partial Q}{\partial x}

\frac{\partial P}{\partial y}  
\right)dA  
}  
$$

Know how to **verify it**.

And absolutely practice the recurring example:

$$  
\mathbf F=(x-y)\mathbf i+x\mathbf j  
$$

over the unit circle.

---

# 4. Divergence theorem

Know:

# $$  
\boxed{  
\iint_S\mathbf F\cdot\mathbf n,dS

\iiint_V  
\nabla\cdot\mathbf F,dV  
}  
$$

and

# $$  
\nabla\cdot\mathbf F

\frac{\partial P}{\partial x}  
+  
\frac{\partial Q}{\partial y}  
+  
\frac{\partial R}{\partial z}  
$$

🔥 Your analysis says the recurring field

$$  
\mathbf F=x\mathbf i+y\mathbf j+z\mathbf k  
$$

appears multiple times.

Know this example.

---

# 5. Stokes' theorem

Know:

# $$  
\boxed{  
\oint_C\mathbf F\cdot d\mathbf r

\iint_S  
(\nabla\times\mathbf F)\cdot\mathbf n,dS  
}  
$$

And understand the relationship:

**Green's theorem → 2D**

**Stokes → 3D surface**

**Divergence theorem → closed surface/volume**

This distinction is also explicitly useful for Section A/B.

---

# 6. Curl

$$  
\nabla\times\mathbf F  
$$

Be able to calculate it quickly and accurately.

### 🎯 Unit 7 priority

I'd rank:

**Green's theorem ≈ Conservative fields > Line integrals > Divergence theorem > Stokes > Curl calculations**

But you need all of them because they're interconnected.

---

# 🟢 Unit 8 — Fourier Series

This is your **free-marks DLC** 💀.

Your analysis says it appeared in **8/9 papers** and is always the last D question.

### MUST KNOW

General Fourier series:

$$  
f(x)=  
\frac{a_0}{2}  
+  
\sum_{n=1}^{\infty}  
\left[  
a_n\cos nx+b_n\sin nx  
\right]  
$$

with

$$  
a_0=\frac1\pi\int_{-\pi}^{\pi}f(x),dx  
$$

$$  
a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx,dx  
$$

$$  
b_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx,dx  
$$

---

## 🔥 EVEN/ODD SHORTCUTS

If $f(x)$ is **even**:

$$  
b_n=0  
$$

and

$$  
a_n=\frac2\pi\int_0^\pi f(x)\cos nx,dx  
$$

If $f(x)$ is **odd**:

$$  
a_0=0,\qquad a_n=0  
$$

and

$$  
b_n=\frac2\pi\int_0^\pi f(x)\sin nx,dx  
$$

These shortcuts are HUGE.

---

## Half-range series

Know:

- half-range sine series
    
- half-range cosine series
    

And how to determine the coefficients.

### 🎯 Exam priority

**Coefficient formulas > even/odd shortcuts > half-range > piecewise/square-wave problems.**

---

# 🧠 If I compress the entire syllabus into your "MUST MASTER" list

If you're short on time, this is what I'd literally put on your wall:

|PriorityTopicUnit|||
|---|---|---|
|🔥🔥🔥|Polar sketch + area|U1|
|🔥🔥🔥|TNB + helix|U6|
|🔥🔥🔥|Green's theorem|U7|
|🔥🔥🔥|Conservative field + potential|U7|
|🔥🔥🔥|Fourier series|U8|
|🔥🔥|Directional derivatives|U2|
|🔥🔥|Max/min/saddle|U2|
|🔥🔥|Triple integrals|U3|
|🔥🔥|Line integrals|U7|
|🔥🔥|Divergence theorem|U7|
|🔥🔥|Coordinate conversions|U1|
|🔥🔥|Reversing integration order|U3|
|🔥|Lagrange multipliers|U2|
|🔥|Beta-Gamma proof|U4|
|🔥|Limits/continuity|U2|
|🔥|Stokes theorem|U7|
|🔥|Arc length|U6|
|🟢|Surface/volume applications|U5|

---

# And there's a VERY important distinction

Don't treat these as eight independent chapters.

The actual dependency structure is more like:

**Unit 2**  
↓  
gradients / partial derivatives  
↓  
**Unit 7** ← **Unit 6**  
↑ ↑  
**Unit 3** ← **Unit 1**

while:

**Unit 4** = independent  
**Unit 8** = independent  
**Unit 5** = mostly application of 1 + 3

So your original order is actually pretty damn good.

If I were studying this exam from scratch, my **deep mastery targets** would be:

> **U1:** Polar area  
> **U2:** Gradient → directional derivative → extrema  
> **U3:** Region setup → double/triple integrals  
> **U4:** Beta-Gamma proofs  
> **U5:** Area/volume formulas  
> **U6:** TNB/helix  
> **U7:** Conservative + Green + line + divergence + Stokes  
> **U8:** Fourier coefficient machinery

And then I'd spend **disproportionately more practice time on U6/U7**, because your own paper analysis shows that's where the biggest historical chunk of marks lives.