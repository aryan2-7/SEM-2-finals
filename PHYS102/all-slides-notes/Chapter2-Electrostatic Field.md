# The Electrostatic Field

## Outline

1. Electric Charge ($q$)
2. Coulomb's Law
3. The Electric Field ($\vec{E}$)
   - Electric Field of a Point Charge
   - The Line Integral of Electric Field
   - The Curl of Electric Field
   - Electric Field due to a Continuous Charge Distribution
     - Line Charge Density
     - Surface Charge Density
     - Volume Charge Density
   - Some Solved Problems
4. Electric Field Lines
5. Electric Flux ($\Phi$)
6. Gauss's Law
   - Applications of Gauss's Law
7. The Electric Field Is the Negative Gradient of a Scalar Potential
8. Poisson's Equation and Laplace's Equation
9. Expression of Electric Potential
10. Electric Potential due to a Spherical Charge
11. Work and Energy in Electrostatics
    - The Work Done to Move a Charge
12. Electric Potential Energy
    - The Energy of a Point Charge Distribution
    - The Energy of Continuous Charge Distribution
13. Solved Problems
14. Conductors and Insulators
    - Perfect Conductors

## Electric Charge ($q$)

Charge is a fundamental and characteristic property of the elementary particles which make up matter. It is a scalar quantity.

The SI unit of charge is the coulomb (C).

**Kinds of Charges:**

1. Positive Charge
2. Negative Charge

**Properties of Electric Charge:**

1. Like charges repel each other and unlike charges attract each other.
2. Electric charge is quantized. [Charge on a charged body, $q = \pm ne$, where $n$ is a positive integer.]
3. Electric charge is conserved. [The net charge of any isolated system cannot change.]
4. The electric charge is additive in nature.
5. The charge on a body is not affected by the speed of the body.

**Elementary Charge**

The magnitude of charge on a proton or an electron is called the elementary charge, denoted by $e$, and the value of $e$ is $1.6 \times 10^{-19}\,\mathrm{C}$.

## Coulomb's Law

The force on a test charge $Q$ due to a single point charge $q$, which is at rest a distance $r$ away, is given by Coulomb's law:

$$\vec{F} = \frac{1}{4\pi\epsilon_0}\frac{qQ}{r^2}\hat{r}\tag{1}$$

The constant $\epsilon_0$ is called the permittivity of free space, given by $\epsilon_0 = 8.85 \times 10^{-12}\,\mathrm{C^2\cdot N^{-1}\cdot m^{-2}}$. The magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.

## The Electric Field ($\vec{E}$)

If we have several point charges $q_1, q_2, \ldots, q_n$ with position vectors $\vec{r}_1', \vec{r}_2', \ldots, \vec{r}_n'$ from the origin $O$, then the total force on the test charge $Q$ due to all the source charges is given by

$$\vec{F} = \vec{F}_1 + \vec{F}_2 + \ldots + \vec{F}_n$$

according to the Principle of Superposition.

The interaction between any two charges is completely unaffected by the presence of others:

$$\vec{F} = \frac{1}{4\pi\epsilon_0}\left(\frac{q_1Q}{r_1^2}\hat{r}_1 + \frac{q_2Q}{r_2^2}\hat{r}_2 + \cdots\right) = \frac{Q}{4\pi\epsilon_0}\left(\frac{q_1}{r_1^2}\hat{r}_1 + \frac{q_2}{r_2^2}\hat{r}_2 + \cdots\right)$$

$$\therefore \vec{F} = Q\vec{E}$$

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\sum_{i=1}^{n}\frac{q_i}{r_i^2}\hat{r}_i\tag{2}$$

is the electric field of the source charges at a field point $P$.

The electric field $\vec{E}$ at a point in space is defined as the electric force $\vec{F}$ acting on a point positive test charge $Q$ placed at that point divided by the magnitude of the test charge:

$$\vec{E} = \frac{\vec{F}}{Q}\tag{3}$$

The electric field is a vector quantity that varies from point to point and is determined by the configuration of source charges. The SI unit of electric field is newton per coulomb ($\mathrm{N\cdot C^{-1}}$).

**Principle of Superposition:** The total field is a vector sum of their individual fields:

$$\vec{E} = \vec{E}_1 + \vec{E}_2 + \cdots$$

### Electric Field of a Point Charge

The electric field produced at a field point $P$ by an isolated point charge $q$ at the source point $S$ (at the origin) is given by

$$\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\hat{r} = \frac{1}{4\pi\epsilon_0}\frac{q}{r^3}\vec{r}$$

The field $\vec{E}$ is produced by $q$ but acts on the charge $q_0$ at point $P$.

### The Line Integral of Electric Field

The electric field at point $P$ with position vector $\vec{r}$ due to a point charge $q$ located at the origin is

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\hat{r}$$

The line integral of the electric field $\vec{E}$ along a curved path from $a \to b$ is shown in Figure 1.

**Figure 1**

In spherical coordinates $d\vec{l} = dr\,\hat{r} + r\,d\theta\,\hat{\theta} + r\sin\theta\,d\phi\,\hat{\phi}$, so

$$\int_a^b \vec{E}\cdot d\vec{l} = \int_a^b \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\hat{r}\cdot\left(dr\,\hat{r} + r\,d\theta\,\hat{\theta} + r\sin\theta\,d\phi\,\hat{\phi}\right) = \frac{q}{4\pi\epsilon_0}\int_a^b\frac{1}{r^2}\,dr$$

$$= \frac{q}{4\pi\epsilon_0}\left[-\frac{1}{r}\right]_{r_a}^{r_b} = \frac{q}{4\pi\epsilon_0}\left(\frac{1}{r_a} - \frac{1}{r_b}\right)$$

where $r_a$ is the distance from the origin to the point $a$ and $r_b$ is the distance from the origin to the point $b$.

The line integral of the electric field around a closed path is zero:

$$\oint \vec{E}\cdot d\vec{l} = 0$$

The amount of work done by the electric field $\vec{E}$ when a unit positive charge moves from point $a$ to point $b$ is given by the line integral of the electric field, i.e.

$$W_E = \int_a^b \vec{E}\cdot d\vec{l} = \frac{q}{4\pi\epsilon_0}\left(\frac{1}{r_a} - \frac{1}{r_b}\right)$$

The work done by the electric field $\vec{E}$ when a unit positive charge moves from some point $a$ to some other point $b$ depends only on these points and not on the path followed. Therefore the electric field due to stationary charges is a conservative field.

### The Electric Field Is the Negative Gradient of a Scalar Potential

The potential difference between two points $a$ and $b$:

$$V(b) - V(a) = -\int_a^b \vec{E}\cdot d\vec{l}$$

The fundamental theorem for gradients states that:

$$\int_a^b (\nabla V)\cdot d\vec{l} = V(b) - V(a)\tag{1}$$

So

$$-\int_a^b \vec{E}\cdot d\vec{l} = \int_a^b (\nabla V)\cdot d\vec{l}\tag{2}$$

Since this is true for any points $a$ and $b$, the integrands must be equal:

$$\vec{E} = -\nabla V$$

### The Curl of Electric Field

The line integral of the electric field around a closed path is zero, i.e.

$$\oint_c \vec{E}\cdot d\vec{l} = 0$$

or, using Stokes' theorem,

$$\int_S (\nabla\times\vec{E})\cdot d\vec{a} = 0$$

$$\therefore \nabla\times\vec{E} = 0$$

The electric field is a very special kind of vector function whose curl is always zero.

The electric field at a point with position vector $\vec{r}$ due to a point charge $q$ located at the origin is

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\frac{q}{r^3}\vec{r}$$

So,

$$\nabla\times\vec{E} = \nabla\times\left(\frac{1}{4\pi\epsilon_0}\frac{q}{r^3}\vec{r}\right) = \frac{q}{4\pi\epsilon_0}\left[\frac{1}{r^3}\left(\nabla\times\vec{r}\right) + \nabla\left(\frac{1}{r^3}\right)\times\vec{r}\right]$$

$$= \frac{q}{4\pi\epsilon_0}\left[0 + (-3r^{-3-2})\vec{r}\times\vec{r}\right] = 0$$

Here we have used $\nabla r^n = n r^{n-1}\hat{r} = n r^{n-2}\vec{r}$. The curl of the electric field $\vec{E}$ is zero.

### Electric Field due to a Continuous Charge Distribution

If the source charges are continuously distributed in space, then the charge can be divided into an infinitely large number of elemental charges $dq$, and the net electric field is given by

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int\frac{dq}{r^2}\hat{r}$$

where $\vec{r}$ is the separation vector of the field point $P$ from the elemental charge $dq$ in the charge distribution.

#### Line Charge Density

If the charges are continuously distributed along a line, $L$, then the elemental charge $dq$ can be written as

$$dq = \lambda\,dl'$$

where $dl'$ is the elemental length on the line and $\lambda$ is the charge per unit length, also called the line charge density. The corresponding electric field is

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int\frac{\lambda(r')\,dl'}{r^2}\hat{r}$$

#### Surface Charge Density

If the charges are continuously distributed over a surface, $S$, then the elemental charge $dq$ can be written as

$$dq = \sigma\,da'$$

where $da'$ is the elemental area on the surface and $\sigma$ is the charge per unit area, also called the surface charge density. The corresponding electric field is

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int\frac{\sigma(r')\,da'}{r^2}\hat{r}$$

#### Volume Charge Density

If the charges are continuously distributed in a volume, $V$, then the elemental charge $dq$ can be written as

$$dq = \rho\,d\tau'$$

where $d\tau'$ is the elemental volume in space and $\rho$ is the charge per unit volume, also called the volume charge density. The corresponding electric field is

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\int\frac{\rho(r')\,d\tau'}{r^2}\hat{r}$$

### Some Solved Problems

**Problem 1.** Find the electric field (magnitude and direction) a distance $z$ above the midpoint between two equal charges, $q$, a distance $d$ apart (Figure Ep-1). Check that your result is consistent with what you'd expect when $z \gg d$.

**Solution:** Let the point $P$ be a point at the distance $z$ above the midpoint $O$ between two equal charges $q$ a distance $d$ apart.

**Figure Ep-1**

From the figure,

$$\vec{r}_A = (0-0)\hat{i} + \left(\frac{d}{2}\right)\hat{j} + (z-0)\hat{k} = \frac{d}{2}\hat{j} + z\hat{k} \quad\Rightarrow\quad r_A = \left(\frac{d^2}{4} + z^2\right)^{\frac{1}{2}}$$

and

$$\vec{r}_B = (0-0)\hat{i} + \left(-\frac{d}{2}\right)\hat{j} + (z-0)\hat{k} = -\frac{d}{2}\hat{j} + z\hat{k} \quad\Rightarrow\quad r_B = \left(\frac{d^2}{4} + z^2\right)^{\frac{1}{2}}$$

The electric field at $P$ due to the charge at $A$ is

$$\vec{E}_A = \frac{1}{4\pi\epsilon_0}\frac{q}{r_A^3}\vec{r}_A = \frac{1}{4\pi\epsilon_0}\frac{q}{\left(\frac{d^2}{4} + z^2\right)^{\frac{3}{2}}}\left(\frac{d}{2}\hat{j} + z\hat{k}\right)\tag{5}$$

The electric field at $P$ due to the charge at $B$ is

$$\vec{E}_B = \frac{1}{4\pi\epsilon_0}\frac{q}{r_B^3}\vec{r}_B = \frac{1}{4\pi\epsilon_0}\frac{q}{\left(\frac{d^2}{4} + z^2\right)^{\frac{3}{2}}}\left(-\frac{d}{2}\hat{j} + z\hat{k}\right)\tag{6}$$

Therefore, the total electric field at $P$ is

$$\vec{E} = \vec{E}_A + \vec{E}_B = \frac{1}{4\pi\epsilon_0}\frac{q}{\left(\frac{d^2}{4} + z^2\right)^{\frac{3}{2}}}\left[\left(\frac{d}{2}\hat{j} + z\hat{k}\right) + \left(-\frac{d}{2}\hat{j} + z\hat{k}\right)\right]$$

$$\therefore \vec{E} = \frac{1}{4\pi\epsilon_0}\frac{q}{\left(\frac{d^2}{4} + z^2\right)^{\frac{3}{2}}}\,2z\,\hat{k}$$

When $z \gg d$, the electric field reduces to

$$\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{2qz}{(z^2)^{\frac{3}{2}}}\hat{k} = \frac{1}{4\pi\epsilon_0}\frac{2q}{z^2}\hat{k}$$

which is the same as that due to a point charge of magnitude $2q$.

**Problem 2.** Find the electric field a distance $z$ above the midpoint of a straight line segment of length $2L$, which carries a uniform charge $\lambda$.

**Solution:** Consider a straight line segment $AB$ of length $2L$ along the $y$-axis, which carries a uniform charge $\lambda$. The origin $O$ of the coordinate system is at the centre of the straight line segment, so that the portion of the straight line segment $AB$ along the $+y$-axis is $+L$ and along the $-y$-axis is $-L$ [Figure 2].

Let the point $P$ be at a distance $z$ above the midpoint of the straight line segment $AB$.

**Figure 2**

From the figure,

$$\vec{r} = (0-0)\hat{i} + (0-y')\hat{j} + (z-0)\hat{k} = -y'\hat{j} + z\hat{k} \quad\Rightarrow\quad r = \left(y'^2 + z^2\right)^{\frac{1}{2}}$$

The charge on an element of length $dy'$ at $C$ along the line is $dq = \lambda\,dy'$. The electric field at $P$ due to the charge $dq\,(=\lambda\,dy')$ is given by

$$d\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{dq}{r^3}\vec{r}$$

$$\therefore d\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{\lambda\,dy'}{(y'^2 + z^2)^{\frac{3}{2}}}\left(-y'\hat{j} + z\hat{k}\right)\tag{7}$$

Hence the total electric field at $P$ due to the whole line segment $AB$ extending from $-L$ to $+L$ is

$$\vec{E} = \int_{-L}^{+L}d\vec{E} = \frac{1}{4\pi\epsilon_0}\lambda\int_{-L}^{L}\frac{\left(-y'\hat{j} + z\hat{k}\right)dy'}{(y'^2 + z^2)^{\frac{3}{2}}}$$

$$= \frac{1}{4\pi\epsilon_0}\lambda\left[\int_{-L}^{L}\frac{-y'\,dy'}{(y'^2 + z^2)^{\frac{3}{2}}}\hat{j} + \int_{-L}^{L}\frac{z\,dy'}{(y'^2 + z^2)^{\frac{3}{2}}}\hat{k}\right]$$

$$= \frac{1}{4\pi\epsilon_0}\lambda\left[0 + 2\int_0^{L}\frac{z\,dy'}{(y'^2 + z^2)^{\frac{3}{2}}}\hat{k}\right]\tag{8}$$

Because, $\int_{-\alpha}^{\alpha}f(x)\,dx = 2\int_0^{\alpha}f(x)\,dx$ for an even function $f(x)$, and $= 0$ for an odd function $f(x)$.

Letting $y' = z\tan\theta \Rightarrow dy' = z\sec^2\theta\,d\theta$; when $y' = 0$, then $\theta = 0$; when $y' = L$, then $\theta = \tan^{-1}(L/z) = \theta_0$ (say).

Now,

$$\vec{E} = \frac{1}{4\pi\epsilon_0}\lambda\cdot 2\int_0^{\theta_0}\frac{z\sec^2\theta\,d\theta}{z^3\sec^3\theta}\,\hat{k} = \frac{1}{4\pi\epsilon_0}\frac{2\lambda}{z}\int_0^{\theta_0}\cos\theta\,d\theta\,\hat{k}$$

$$= \frac{1}{4\pi\epsilon_0}\frac{2\lambda}{z}\left[\sin\theta_0\right]\hat{k} = \frac{1}{4\pi\epsilon_0}\frac{2\lambda}{z}\left(\frac{L}{\sqrt{z^2 + L^2}}\right)\hat{k}$$

$$\therefore \vec{E} = \frac{1}{4\pi\epsilon_0}\frac{\lambda(2L)}{z\sqrt{z^2 + L^2}}\hat{k}\tag{9}$$

For points far from the line ($z \gg L$):

$$\vec{E} \sim \frac{1}{4\pi\epsilon_0}\frac{\lambda(2L)}{z^2}\hat{k} = \frac{1}{4\pi\epsilon_0}\frac{q}{z^2}\hat{k}\tag{10}$$

For far away, the line "looks" like a point charge $q = \lambda(2L)$.

As $L \to \infty$:

$$\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{\lambda(2L)}{z\sqrt{z^2 + L^2}}\hat{k} = \frac{1}{4\pi\epsilon_0}\frac{2\lambda}{z\sqrt{\frac{z^2}{L^2} + 1}}\hat{k}$$

$$\therefore \vec{E} = \frac{1}{4\pi\epsilon_0}\frac{2\lambda}{z}\hat{k}\tag{11}$$

Therefore, the field of an infinite straight wire is

$$\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{2\lambda}{z}\hat{k}$$

where $z$ is the distance from the wire.

**Problem 3.** Find the electric field a distance $z$ above one end of a straight line segment of length $L$, which carries a uniform charge $\lambda$.

**Solution:** The line segment is placed on the $y$-axis with one end at the origin $O$ and the other end at $B$.

Up to Equation (7) the result is the same, and then the total electric field in this case — the total electric field at $P$ due to the whole line segment $OB$ extending from $0$ to $+L$ — is

$$\vec{E} = \int_0^{+L}d\vec{E} = \frac{1}{4\pi\epsilon_0}\lambda\left[\int_0^{L}\frac{-y'\,dy'}{(y'^2 + z^2)^{\frac{3}{2}}}\hat{j} + \int_0^{L}\frac{z\,dy'}{(y'^2 + z^2)^{\frac{3}{2}}}\hat{k}\right]\tag{12}$$

Letting $y' = z\tan\theta \Rightarrow dy' = z\sec^2\theta\,d\theta$; when $y' = 0$, then $\theta = 0$; when $y' = L$, then $\theta = \tan^{-1}(L/z) = \theta_0$ (say). Now,

$$\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{\lambda}{z}\left[-\int_0^{\theta_0}\sin\theta\,d\theta\,\hat{j} + \int_0^{\theta_0}\cos\theta\,d\theta\,\hat{k}\right]$$

$$= \frac{1}{4\pi\epsilon_0}\frac{\lambda}{z}\left[(\cos\theta_0 - 1)\hat{j} + \sin\theta_0\,\hat{k}\right]\tag{13}$$

The magnitude of the electric field is

$$E = \frac{\lambda}{4\pi\epsilon_0 z}\sqrt{(\cos\theta_0 - 1)^2 + \sin^2\theta_0} = \frac{\lambda}{4\pi\epsilon_0 z}\sqrt{2 - 2\cos\theta_0} = \frac{\lambda}{4\pi\epsilon_0 z}\sqrt{2 - 2\frac{z}{\sqrt{L^2 + z^2}}}\tag{14}$$

For $z \gg L$:

$$E = \frac{\lambda}{4\pi\epsilon_0 z}\sqrt{2 - 2\left(1 + \frac{L^2}{z^2}\right)^{-\frac{1}{2}}} \approx \frac{\lambda}{4\pi\epsilon_0 z}\sqrt{2 - 2\left(1 - \frac{L^2}{2z^2}\right)} = \frac{\lambda}{4\pi\epsilon_0}\frac{L}{z^2}$$

The result converges as for the point charge of magnitude $\lambda L$.

**Problem 4.** Find the electric field a distance $z$ above the centre of a circular loop of radius $r$, which carries a uniform line charge $\lambda$.

**Solution:** Consider a circular loop of radius $r$, which carries a uniform line charge $\lambda$. The origin $O$ of the coordinate system is at the centre of the circular loop and the circular loop is in the $x$–$y$ plane [Figure 3]. Let the point $P$ be at a distance $z$ above the centre $O$ of the circular loop.

**Figure 3**

Let's take an elemental length $dl'$ on the ring with coordinate $(x', y', 0)$, which subtends an elemental angle $d\phi$ at the centre, so that $dl' = r\,d\phi$. We can have $x' = r\cos\phi$ and $y' = r\sin\phi$, taking $\vec{r}$ as the position vector of the elemental length $dl'$. Since the coordinate of the field point $P$ is $(0, 0, z)$, the separation distance between $P$ and $dl'$ is

$$\vec{r} = -x'\hat{i} - y'\hat{j} + z\hat{k} = -r\cos\phi\,\hat{i} - r\sin\phi\,\hat{j} + z\hat{k}$$

and

$$r = \left(r^2 + z^2\right)^{\frac{1}{2}}$$

The electric field at $P$ due to the charge on $dl'$ is

$$d\vec{E} = \frac{\lambda\,dl'}{4\pi\epsilon_0 r^3}\vec{r} = \frac{\lambda\,r\,d\phi}{4\pi\epsilon_0}\frac{-r\cos\phi\,\hat{i} - r\sin\phi\,\hat{j} + z\hat{k}}{(r^2 + z^2)^{\frac{3}{2}}}$$

Therefore, the net electric field at $P$ due to the charge on the whole loop is

$$\vec{E} = \frac{\lambda r}{4\pi\epsilon_0(r^2 + z^2)^{\frac{3}{2}}}\left[-r\left(\int_0^{2\pi}\cos\phi\,d\phi\right)\hat{i} - r\left(\int_0^{2\pi}\sin\phi\,d\phi\right)\hat{j} + z\left(\int_0^{2\pi}d\phi\right)\hat{k}\right]$$

$$= \frac{\lambda r}{4\pi\epsilon_0(r^2 + z^2)^{\frac{3}{2}}}\left[-0\times\hat{i} - 0\times\hat{j} + z\,2\pi\,\hat{k}\right]$$

$$= \frac{2\pi r\lambda z}{4\pi\epsilon_0(r^2 + z^2)^{\frac{3}{2}}}\hat{k}$$

Hence, the electric field at point $P$ due to the charge on the ring is

$$\vec{E} = \frac{2\pi r\lambda z}{4\pi\epsilon_0(r^2 + z^2)^{\frac{3}{2}}}\hat{k}$$

directed along the $z$-axis. Here $q = 2\pi r\lambda$ is the total charge on the ring, so the electric field at $P$ can also be written as

$$\vec{E} = \frac{qz}{4\pi\epsilon_0(r^2 + z^2)^{\frac{3}{2}}}\hat{k}$$

For $z \gg r$, the above expression reduces to

$$\vec{E} = \frac{q}{4\pi\epsilon_0 z^2}\hat{k}$$

as for a point charge $q$.

**Problem 5.** Find the electric field a distance $z$ above the centre of a flat circular disk of radius $R$, which carries a uniform surface charge $\sigma$. What does your formula give in the limit $R \to \infty$? Also, check the case $z \gg R$.

**Solution:** Consider a flat circular disk of radius $R$, which carries a uniform surface charge $\sigma$. The origin $O$ of the coordinate system is at the centre of the flat circular disk and the flat circular disk is in the $x$–$y$ plane [Figure 4]. The disk can be considered as the combination of an infinite number of infinitesimally thin rings.

**Figure 4**

Consider a ring of radius $r$ and thickness $dr$ of this disk. The charge on this ring is

$$dq = \sigma\,(2\pi r\,dr)\tag{15}$$

Let the point $P$ be at a distance $z$ above the centre $O$ of the flat circular disk.

The electric field at $P$ due to the charge $dq\,(=\sigma\,2\pi r\,dr)$ on the ring is given by

$$d\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{dq\,z}{(r^2 + z^2)^{\frac{3}{2}}}\hat{k}$$

Using Equation (15):

$$d\vec{E} = \frac{1}{4\pi\epsilon_0}\frac{(\sigma\,2\pi r\,dr)\,z}{(r^2 + z^2)^{\frac{3}{2}}}\hat{k}$$

$$\therefore d\vec{E} = \frac{\sigma z}{2\epsilon_0}\frac{r\,dr}{(r^2 + z^2)^{\frac{3}{2}}}\hat{k}\tag{16}$$

Hence the electric field at $P$ due to the charge on the whole flat circular disk is given by

$$\vec{E}_{\text{disk}} = \int d\vec{E} = \frac{\sigma z}{2\epsilon_0}\int_0^{R}\frac{r\,dr}{(r^2 + z^2)^{\frac{3}{2}}}\hat{k}\tag{17}$$

Put $r^2 + z^2 = t^2 \Rightarrow r\,dr = t\,dt$. When $r = 0$, then $t = z$; when $r = R$, then $t = \sqrt{R^2 + z^2}$.

$$\therefore \vec{E} = \frac{\sigma z}{2\epsilon_0}\int_z^{\sqrt{R^2 + z^2}}\frac{t\,dt}{t^3}\hat{k} = \frac{\sigma z}{2\epsilon_0}\int_z^{\sqrt{R^2 + z^2}}\frac{1}{t^2}\,dt\,\hat{k}$$

$$= \frac{\sigma z}{2\epsilon_0}\left[-\frac{1}{t}\right]_z^{\sqrt{R^2 + z^2}}\hat{k} = \frac{\sigma z}{2\epsilon_0}\left(\frac{1}{z} - \frac{1}{\sqrt{R^2 + z^2}}\right)\hat{k}$$

$$\therefore \vec{E} = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{z}{\sqrt{R^2 + z^2}}\right)\hat{k}$$

As $R \to \infty$:

$$\vec{E} = \frac{\sigma}{2\epsilon_0}\left[1 - 0\right]\hat{k} = \frac{\sigma}{2\epsilon_0}\hat{k}$$

Therefore, the electric field due to the infinite sheet of charge is

$$\vec{E} = \frac{\sigma}{2\epsilon_0}\hat{k}$$

For points far from the disk ($z \gg R$):

$$\vec{E} = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{z}{\sqrt{R^2 + z^2}}\right)\hat{k} = \frac{\sigma}{2\epsilon_0}\left(1 - \left(1 + \frac{R^2}{z^2}\right)^{-\frac{1}{2}}\right)\hat{k}$$

Using the binomial expansion,

$$\vec{E} \sim \frac{\sigma}{2\epsilon_0}\left(1 - \left(1 - \frac{1}{2}\frac{R^2}{z^2} + \cdots\right)\right)\hat{k} = \frac{\sigma}{2\epsilon_0}\frac{1}{2}\frac{R^2}{z^2}\hat{k} = \frac{1}{4\pi\epsilon_0}\frac{\sigma(4\pi R^2)}{z^2}\hat{k}$$

$$\therefore \vec{E} \sim \frac{1}{4\pi\epsilon_0}\frac{q}{z^2}\hat{k}$$

where $q = \sigma(4\pi R^2)$ is the total charge on the disk. For far away, the disk "looks" like a point charge $q = \sigma(4\pi R^2)$.

## Electric Field Lines

Electric field lines describe an electric field in any region of space.

- The electric field vector $\vec{E}$ is tangent to the electric field line at each point.
- The number of lines per unit area through a surface perpendicular to the lines is proportional to the magnitude of $\vec{E}$ in that region.

**Figure 1:** Electric field lines penetrating two surfaces. The magnitude of the field is greater on surface A than on surface B.

Representative electric field lines for the field due to a single positive point charge are shown in Figure 2:

**Figure 2**

The rules for drawing electric field lines are as follows:

1. The lines must begin on a positive charge and terminate on a negative charge.
2. The number of lines drawn leaving a positive charge or approaching a negative charge is proportional to the magnitude of the charge.
3. No two field lines can cross.

The electric field lines for two point charges of equal magnitude but opposite signs (an electric dipole) are shown in Figure 3.

**Figure 3:** Equal but opposite charges

The electric field lines for two equal positive point charges are shown in Figure 4.

**Figure 4:** Equal charges

## Electric Flux ($\Phi$)

Electric flux is proportional to the number of electric field lines that penetrate a surface.

The electric flux through a surface $S$ is

$$\Phi_E \equiv \int_S \vec{E}\cdot d\vec{a}$$

The SI unit of electric flux ($\Phi_E$) is $\mathrm{N\cdot m^2\cdot C^{-1}}$.

The electric flux through any closed surface is a measure of the total charge inside.

**Figure 5:** Field lines representing an electric field penetrating an area that is at an angle $\theta$ to the field.

## Gauss's Law

[Formulated by Carl Friedrich Gauss (1777–1855), one of the greatest mathematicians.]

The total electric flux through any closed surface is equal to $1/\epsilon_0$ times the total charge enclosed by the surface:

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}Q_{\text{enc}}$$

Consider an arbitrarily shaped closed surface $S$, which encloses a point charge $Q_{\text{enc}}$ at the origin $O$ [Figure 6]. The electric field at point $\vec{r}$ due to a point charge $Q_{\text{enc}}$ located at the origin is

$$\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0}\frac{Q_{\text{enc}}}{r^2}\hat{r}$$

The total electric flux through the closed surface $S$ is

**Figure 6**

$$\oint_S \vec{E}\cdot d\vec{a} = \oint_S \frac{1}{4\pi\epsilon_0}\frac{Q_{\text{enc}}}{r^2}\hat{r}\cdot\left(da_r\,\hat{r} + da_\theta\,\hat{\theta} + da_\phi\,\hat{\phi}\right) = \frac{1}{4\pi\epsilon_0}\oint_S\frac{Q_{\text{enc}}}{r^2}\,da_r$$

$$= \frac{Q_{\text{enc}}}{4\pi\epsilon_0}\int_0^{\pi}\int_0^{2\pi}\frac{1}{r^2}\left(r^2\sin\theta\,d\theta\,d\phi\right) = \frac{Q_{\text{enc}}}{4\pi\epsilon_0}\left(\int_0^{\pi}\sin\theta\,d\theta\right)\left(\int_0^{2\pi}d\phi\right)$$

$$= \frac{Q_{\text{enc}}}{4\pi\epsilon_0}(2)(2\pi) = \frac{Q_{\text{enc}}}{\epsilon_0}$$

$$\therefore \oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}Q_{\text{enc}}\tag{1}$$

If several point charges $q_1, q_2, \ldots, q_n$ are enclosed by the surface $S$, then the total charge enclosed by the surface $S$ is $Q_{\text{enc}} = \sum_{i=1}^{n}q_i$. Gauss's law reads

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}\sum_{i=1}^{n}q_i\tag{2}$$

If there is a continuous distribution of charge with a charge density $\rho$, then the total charge enclosed by the surface $S$ is $Q_{\text{enc}} = \int_V \rho\,d\tau$. Gauss's law reads

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}\int_V \rho\,d\tau\tag{3}$$

By applying the divergence theorem in Eq. (3), we get

$$\int_V \left(\nabla\cdot\vec{E}\right)d\tau = \int_V \left(\frac{\rho}{\epsilon_0}\right)d\tau$$

Since this holds for any volume, the integrands must be equal:

$$\nabla\cdot\vec{E} = \frac{\rho}{\epsilon_0}\tag{4}$$

This is the differential form of Gauss's law.

### Applications of Gauss's Law

**Application 1.** Use Gauss's law to find the electric field outside, on and inside a spherical shell of radius $R$, which carries a uniform surface charge density $\sigma$.

**Solution:** Consider a spherical shell of radius $R$ and centre $O$, which carries a uniform surface charge density $\sigma$.

**(i) Electric Field Outside a Sphere**

Let the point $P$ be at a distance $r$ from the centre of the sphere so that $r > R$. With $O$ as centre and $OP = r$ as radius, a spherical Gaussian surface $S$ is drawn as shown in Figure 7(a).

**Figure 7:** (a)

The charged spherical shell lies completely inside the Gaussian surface, so the net charge enclosed by the Gaussian surface $S$ is equal to the total charge on the spherical shell ($Q_{\text{enc}} = q = \sigma \times 4\pi R^2$). For every point of the Gaussian surface $S$, the magnitude of the electric field $E$ is the same and the electric field $\vec{E}$ is directed radially outward, as is $d\vec{a}$. Therefore the total electric flux through the Gaussian surface $S$ is given by

$$\oint_S \vec{E}\cdot d\vec{a} = \oint_S E\,da = E\oint_S da = E\left(4\pi r^2\right)$$

From Gauss's law,

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}Q_{\text{enc}} \quad\Rightarrow\quad E\left(4\pi r^2\right) = \frac{1}{\epsilon_0}\left(\sigma \times 4\pi R^2\right)$$

$$\therefore E = \frac{\sigma}{\epsilon_0}\frac{R^2}{r^2}$$

In terms of total charge,

$$E = \frac{\left(\frac{q}{4\pi R^2}\right)R^2}{\epsilon_0 r^2} = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}$$

Therefore, the field at a point outside the shell is equivalent to a point charge $q$ located at the centre.

Electric field on the surface of a spherical shell ($r = R$):

$$E = \frac{\sigma}{\epsilon_0}$$

or

$$E = \frac{\left(\frac{q}{4\pi R^2}\right)}{\epsilon_0} = \frac{1}{4\pi\epsilon_0}\frac{q}{R^2}$$

**(ii) Electric Field Inside a Spherical Shell**

Let the point $P$ be at a distance $r$ from the centre of the sphere so that $r < R$. With $O$ as centre and $OP = r$ as radius, a spherical Gaussian surface $S$ is drawn as shown in Figure 8(b).

**Figure 8:** (b)

The total charge enclosed by the Gaussian surface $S$ is

$$Q_{\text{enc}} = 0\tag{5}$$

From Gauss's law,

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}Q_{\text{enc}}$$

Therefore the electric field inside a spherical shell is zero:

$$E = 0$$

**Figure 9:** A plot of $E$ versus $r$ for a spherical shell. The electric field inside the spherical shell ($r < R$) is zero. The electric field outside the sphere ($r > R$) is the same as that of a point charge $q$ located at $r = 0$.

**Application 2.** Use Gauss's law to find the electric field outside, inside and on the surface of a uniformly charged solid sphere of radius $R$, which carries a uniform volume charge density $\rho$.

**Solution:** Consider a uniformly charged solid sphere of radius $R$ and centre $O$, which carries a uniform charge density $\rho$.

**(i) Electric Field Outside a Sphere**

Let the point $P$ be at a distance $r$ from the centre of the sphere so that $r > R$. With $O$ as centre and $OP = r$ as radius, a spherical Gaussian surface $S$ is drawn as shown in Figure 10(a).

**Figure 10:** (a)

For every point of the Gaussian surface $S$, the magnitude of the electric field $E$ is the same and the electric field $\vec{E}$ is directed radially outward, as is $d\vec{a}$. The total electric flux through the Gaussian surface $S$ is given by

$$\oint_S \vec{E}\cdot d\vec{a} = \oint_S E\,da = E\oint_S da = E\left(4\pi r^2\right)$$

From Gauss's law,

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}Q_{\text{enc}}$$

$$\Rightarrow E\left(4\pi r^2\right) = \frac{1}{\epsilon_0}\left(\rho \times \frac{4}{3}\pi R^3\right)$$

$$E = \frac{\rho}{3\epsilon_0}\frac{R^3}{r^2}$$

In terms of total charge,

$$E = \frac{\left(\frac{Q}{\frac{4}{3}\pi R^3}\right)R^3}{3\epsilon_0 r^2} = \frac{1}{4\pi\epsilon_0}\frac{Q}{r^2}$$

**(ii) Electric Field Inside a Sphere**

Let the point $P$ be at a distance $r$ from the centre of the sphere so that $r < R$. With $O$ as centre and $OP = r$ as radius, a spherical Gaussian surface $S$ is drawn as shown in Figure 11(b).

**Figure 11:** (b)

The total charge enclosed by the Gaussian surface $S$ is

$$Q_{\text{enc}} = \rho \times \frac{4}{3}\pi r^3$$

For every point of surface $S$, the magnitude of the electric field $E$ is the same and the electric field $\vec{E}$ is directed radially outward, as is $d\vec{a}$. Therefore, the total electric flux through the Gaussian surface $S$ is given by

$$\oint_S \vec{E}\cdot d\vec{a} = \oint_S E\,da = E\oint_S da = E\left(4\pi r^2\right)$$

From Gauss's law,

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}Q_{\text{enc}}$$

$$\Rightarrow E\left(4\pi r^2\right) = \frac{1}{\epsilon_0}\left(\rho \times \frac{4}{3}\pi r^3\right)$$

$$\therefore E = \frac{\rho r}{3\epsilon_0}$$

In terms of total charge,

$$E = \frac{\left(\frac{Q}{\frac{4}{3}\pi R^3}\right)r}{3\epsilon_0} = \frac{1}{4\pi\epsilon_0}\frac{Qr}{R^3}$$

Thus the electric field inside a uniformly charged sphere is directly proportional to the distance of the field point from the centre of the sphere. At the centre of the sphere ($r = 0$), the electric field is $E = 0$.

**(iii) Electric Field on the Surface of the Sphere ($r = R$)**

From Gauss's law,

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}Q_{\text{enc}}$$

$$E\left(4\pi R^2\right) = \frac{1}{\epsilon_0}\left(\rho \times \frac{4}{3}\pi R^3\right)$$

$$E = \frac{\rho R}{3\epsilon_0}$$

In terms of total charge,

$$E = \frac{\left(\frac{Q}{\frac{4}{3}\pi R^3}\right)R}{3\epsilon_0} = \frac{1}{4\pi\epsilon_0}\frac{Q}{R^2}$$

**Figure 12:** A plot of $E$ versus $r$ for a uniformly charged sphere. The electric field inside the sphere ($r < R$) varies linearly with $r$. The field outside the sphere ($r > R$) is the same as that of a point charge $Q$ located at $r = 0$.

**Application 3.** Find the electric field outside and inside a sphere, which carries a charge density proportional to the distance from the origin, $\rho = kr$, for some constant $k$.

**Solution:** Consider a sphere of radius $R$ and centre $O$, which carries a charge density proportional to the distance from the origin, $\rho = kr$, for some constant $k$.

**(i) Electric Field Outside a Sphere**

Let the point $P$ be at a distance $r$ from the centre of the sphere so that $r > R$. With $O$ as centre and $OP = r$ as radius, a spherical Gaussian surface $S$ is drawn as shown in Figure 13(a).

**Figure 13:** (a)

By symmetry, the magnitude of the electric field is constant everywhere on the spherical Gaussian surface and is normal to the surface at each point. The total electric flux through the Gaussian surface $S$ is given by

$$\oint_S \vec{E}\cdot d\vec{a} = \oint_S E\,da = E\oint_S da = E\left(4\pi r^2\right)$$

From Gauss's law,

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}\int_V \rho\,d\tau'$$

$$\Rightarrow E\left(4\pi r^2\right) = \frac{1}{\epsilon_0}\int_V (kr')\,r'^2\sin\theta\,dr'\,d\theta\,d\phi = \frac{k}{\epsilon_0}\left(\int_0^{R}r'^3\,dr'\right)\left(\int_0^{\pi}\sin\theta\,d\theta\right)\left(\int_0^{2\pi}d\phi\right)$$

$$= \frac{k}{\epsilon_0}\left(\frac{R^4}{4}\right)(2)(2\pi)$$

$$\therefore E = \frac{k}{4\epsilon_0}\frac{R^4}{r^2}$$

**(ii) Electric Field Inside a Sphere**

Let the point $P$ be at a distance $r$ from the centre of the sphere so that $r < R$. With $O$ as centre and $OP = r$ as radius, a spherical Gaussian surface $S$ is drawn as shown in Figure 14(b).

**Figure 14:** (b)

By symmetry, the magnitude of the electric field is constant everywhere on the spherical Gaussian surface and is normal to the surface at each point. Therefore the total electric flux through the Gaussian surface $S$ is given by

$$\oint_S \vec{E}\cdot d\vec{a} = \oint_S E\,da = E\oint_S da = E\left(4\pi r^2\right)$$

From Gauss's law,

$$\oint_S \vec{E}\cdot d\vec{a} = \frac{1}{\epsilon_0}\int_V \rho\,d\tau'$$

$$E\left(4\pi r^2\right) = \frac{1}{\epsilon_0}\int_V (kr')\,r'^2\sin\theta\,dr'\,d\theta\,d\phi = \frac{k}{\epsilon_0}\left(\int_0^{r}r'^3\,dr'\right)\left(\int_0^{\pi}\sin\theta\,d\theta\right)\left(\int_0^{2\pi}d\phi\right)$$

$$= \frac{k}{\epsilon_0}\left(\frac{r^4}{4}\right)(2)(2\pi)$$

$$\therefore E = \frac{k r^2}{4\epsilon_0}$$

## Poisson's Equation and Laplace's Equation

Gauss's law in differential form:

$$\nabla\cdot\vec{E} = \frac{1}{\epsilon_0}\rho$$

The electric field can be written as the gradient of a scalar potential, i.e. $\vec{E} = -\nabla V$.

$$\therefore \nabla\cdot\vec{E} = \frac{1}{\epsilon_0}\rho \quad\Rightarrow\quad \nabla\cdot(-\nabla V) = \frac{1}{\epsilon_0}\rho$$

$$\therefore \nabla^2 V = -\frac{\rho}{\epsilon_0}$$

This is known as **Poisson's equation**.

In regions where there is no charge, so that $\rho = 0$, Poisson's equation reduces to **Laplace's equation**:

$$\nabla^2 V = 0$$

**Example 1.** Find the expression for the electric field in a region where the potential is $V = -kxy$.

**Hint:**

$$\vec{E} = -\nabla V = -\left(\hat{i}\frac{\partial V}{\partial x} + \hat{j}\frac{\partial V}{\partial y} + \hat{k}\frac{\partial V}{\partial z}\right) = -\left(\hat{i}\frac{\partial(-kxy)}{\partial x} + \hat{j}\frac{\partial(-kxy)}{\partial y} + \hat{k}\frac{\partial(-kxy)}{\partial z}\right)$$

$$= -\left(-ky\,\hat{i} - kx\,\hat{j}\right) = ky\,\hat{i} + kx\,\hat{j}$$

## Expression of Electric Potential

Consider a point charge $q$ at the origin $O$. The electric field at a point $P$ with position vector $\vec{r}$ is

$$\vec{E} = \frac{q}{4\pi\epsilon_0}\frac{\hat{r}}{r^2}$$

Using $\nabla\left(\frac{1}{r}\right) = -\frac{\hat{r}}{r^2}$, we can have

$$\vec{E} = -\frac{q}{4\pi\epsilon_0}\nabla\left(\frac{1}{r}\right)$$

Comparing this result with $\vec{E} = -\nabla V$, we have

$$V = \frac{q}{4\pi\epsilon_0 r}$$

This is the required expression for the electric potential at any point due to a point charge at the origin. For a system of point charges, the potential reads

$$V(P) = \frac{1}{4\pi\epsilon_0}\sum_{i=1}^{n}\frac{q_i}{r_i}$$

For a continuous charge distribution,

$$V(P) = \frac{1}{4\pi\epsilon_0}\int\frac{dq}{r}$$

Here, $r$ is the separation distance from the elemental source charge to the field point $P$, and $dq = \lambda\,dl'$ for a line charge; $dq = \sigma\,da'$ for a surface charge; $dq = \rho\,d\tau'$ for a volume charge.

## Electric Potential due to a Spherical Charge

**Problem:** Find the potential of a uniformly charged spherical shell of radius $R$ carrying a surface charge density $\sigma$.

**Figure 1**

**Solution:** Consider an elemental area $da' = R^2\sin\theta'\,d\theta'\,d\phi'$ on the surface of the spherical shell. The elemental charge on the area $da'$ is $dq = \sigma\,da' = \sigma R^2\sin\theta'\,d\theta'\,d\phi'$.

Let's take a point $P$ at a distance $z$ from the centre of the spherical shell. $r$ is the separation distance of $P$ from $da'$, as shown in Figure 1.

From the figure and using the cosine law, we can have

$$r^2 = R^2 + z^2 - 2Rz\cos\theta' \quad\Rightarrow\quad 2r\,dr = 2Rz\sin\theta'\,d\theta' \quad\Rightarrow\quad \sin\theta'\,d\theta' = \frac{r\,dr}{Rz}$$

The potential at $P$ due to the elemental charge $dq$ is

$$dV = \frac{dq}{4\pi\epsilon_0 r} = \frac{\sigma R^2\sin\theta'\,d\theta'\,d\phi'}{4\pi\epsilon_0 r} = \frac{\sigma R^2}{4\pi\epsilon_0 r}\frac{r\,dr}{Rz}\,d\phi' = \frac{\sigma R}{4\pi\epsilon_0 z}\,dr\,d\phi'\tag{3}$$

**Case (I): Potential Outside the Spherical Shell**

If $P$ lies outside the spherical shell, the potential at $P$ can be obtained by integrating Equation (3) from the limit $z - R$ to $z + R$ for $r$ and $0$ to $2\pi$ for $\phi'$, i.e.

$$V_{\text{out}} = \frac{\sigma R}{4\pi\epsilon_0 z}\int_{z-R}^{z+R}dr\int_0^{2\pi}d\phi' = \frac{\sigma R}{4\pi\epsilon_0 z}\left[(z+R) - (z-R)\right](2\pi) = \frac{\sigma R}{4\pi\epsilon_0 z}(2R)(2\pi)$$

Therefore, the potential due to the spherical charge outside of it is

$$V_{\text{out}} = \frac{\sigma R^2}{\epsilon_0 z}$$

In terms of total charge, $q = \sigma(4\pi R^2)$:

$$V_{\text{out}} = \frac{\sigma(4\pi R^2)}{4\pi\epsilon_0 z} = \frac{q}{4\pi\epsilon_0 z}$$

**Case (II): Potential Inside the Spherical Shell**

If $P$ lies inside the spherical shell, the potential at $P$ can be obtained by integrating Equation (3) from the limit $R - z$ to $R + z$ for $r$ and $0$ to $2\pi$ for $\phi'$, i.e.

$$V_{\text{in}} = \frac{\sigma R}{4\pi\epsilon_0 z}\int_{R-z}^{R+z}dr\int_0^{2\pi}d\phi' = \frac{\sigma R}{4\pi\epsilon_0 z}\left[(R+z) - (R-z)\right](2\pi) = \frac{\sigma R}{4\pi\epsilon_0 z}(2z)(2\pi)$$

Therefore, the potential due to the spherical charge inside of it is

$$V_{\text{in}} = \frac{\sigma R}{\epsilon_0}$$

In terms of total charge, $q = \sigma(4\pi R^2)$:

$$V_{\text{in}} = \frac{\sigma(4\pi R^2)}{4\pi\epsilon_0 R} = \frac{q}{4\pi\epsilon_0 R}$$

## Work and Energy in Electrostatics

### The Work Done to Move a Charge

Suppose we have a stationary configuration of source charges, and we want to move a test charge $Q$ from a point $a$ to point $b$ [Figure 2].

At any point along the path, the electric force on $Q$ is $\vec{F} = Q\vec{E}$. The force we exert, in opposition to this electrical force, is $-Q\vec{E}$.

The work done to move a test charge $Q$ from point $a$ to point $b$ is

$$W = \int_a^b \vec{F}\cdot d\vec{l} = \int_a^b \left(-Q\vec{E}\right)\cdot d\vec{l} = Q\int_a^b\left(-\vec{E}\cdot d\vec{l}\right) = Q\left[V(b) - V(a)\right]$$

**Figure 2**

$$\therefore V(b) - V(a) = V(\vec{r}_b) - V(\vec{r}_a) = \frac{W}{Q}$$

The potential difference between points $a$ and $b$ is equal to the work per unit charge required to carry a charged particle from $a$ to $b$. The work done to bring the charge $Q$ from infinity to the point $\vec{r}$ is

$$W = Q\left[V(\vec{r}) - V(\infty)\right]$$

$$\therefore W = QV(\vec{r})$$

The potential energy per unit charge at a point in an electric field is called the electric potential at that point.

## Electric Potential Energy

### The Energy of a Point Charge Distribution

Consider a number of point charges $q_1, q_2, \ldots, q_n$ to be assembled by bringing them, one by one, from infinity and placing them at position vectors $\vec{r}_1, \vec{r}_2, \ldots, \vec{r}_n$, respectively.

**Figure 3**

1. The work done to bring the charge $q_1$ from infinity to its location $\vec{r}_1$ is $W_1 = 0$. It is because there is no field to fight against.

2. The potential at position vector $\vec{r}_2$ due to the charge $q_1$ is

$$V_1(\vec{r}_2) = \frac{q_1}{4\pi\epsilon_0 r_{12}}$$

The work done to bring the second charge $q_2$ from infinity to its location $\vec{r}_2$ is

$$W_2 = q_2\left[V_1(\vec{r}_2)\right] = q_2\left(\frac{1}{4\pi\epsilon_0}\frac{q_1}{r_{12}}\right) = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_2}{r_{12}}$$

3. The potential at the position vector $\vec{r}_3$ due to the charges $q_1$ and $q_2$ is

$$V_{1,2}(\vec{r}_3) = \frac{q_1}{4\pi\epsilon_0 r_{13}} + \frac{q_2}{4\pi\epsilon_0 r_{23}}$$

The work done to bring the third charge $q_3$ from infinity to its location $\vec{r}_3$ is

$$W_3 = q_3\left[V_{1,2}(\vec{r}_3)\right] = q_3\left(\frac{1}{4\pi\epsilon_0}\frac{q_1}{r_{13}} + \frac{1}{4\pi\epsilon_0}\frac{q_2}{r_{23}}\right) = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_3}{r_{13}} + \frac{1}{4\pi\epsilon_0}\frac{q_2 q_3}{r_{23}}$$

4. Similarly, the extra work to bring the fourth charge $q_4$ will be

$$W_4 = \frac{1}{4\pi\epsilon_0}\frac{q_1 q_4}{r_{14}} + \frac{1}{4\pi\epsilon_0}\frac{q_2 q_4}{r_{24}} + \frac{1}{4\pi\epsilon_0}\frac{q_3 q_4}{r_{34}}$$

The total work necessary to assemble the first four charges is

$$W = W_1 + W_2 + W_3 + W_4 = \frac{1}{4\pi\epsilon_0}\left(\frac{q_1 q_2}{r_{12}} + \frac{q_1 q_3}{r_{13}} + \frac{q_1 q_4}{r_{14}} + \frac{q_2 q_3}{r_{23}} + \frac{q_2 q_4}{r_{24}} + \frac{q_3 q_4}{r_{34}}\right)$$

$$\therefore W = \frac{1}{4\pi\epsilon_0}\sum_{i=1}^{4}\sum_{\substack{j=1\\j>i}}^{4}\frac{q_i q_j}{r_{ij}}$$

For a system of $n$-point charges, we have

$$W = \frac{1}{4\pi\epsilon_0}\sum_{i=1}^{n}\sum_{\substack{j=1\\j>i}}^{n}\frac{q_i q_j}{r_{ij}}\tag{4}$$

The stipulation $j > i$ suggests counting each pair of charges only once during calculation. If we intentionally count the pair twice, the work done becomes double. So, in order to manipulate the result, it should be multiplied by $\frac{1}{2}$:

$$W = \frac{1}{2}\frac{1}{4\pi\epsilon_0}\sum_{i=1}^{n}\sum_{\substack{j=1\\j\neq i}}^{n}\frac{q_i q_j}{r_{ij}} = \frac{1}{2}\sum_{i=1}^{n}q_i\left(\frac{1}{4\pi\epsilon_0}\sum_{\substack{j=1\\j\neq i}}^{n}\frac{q_j}{r_{ij}}\right)$$

$$\therefore W = \frac{1}{2}\sum_{i=1}^{n}q_i V(\vec{r}_i)$$

where

$$V(\vec{r}_i) = \frac{1}{4\pi\epsilon_0}\sum_{\substack{j=1\\j\neq i}}^{n}\frac{q_j}{r_{ij}}$$

is the potential at point $\vec{r}_i$ (the position of $q_i$) due to all other charges.

### The Energy of Continuous Charge Distribution

The total work necessary to assemble the $n$-point charges is given by

$$W = \frac{1}{2}\sum_{i=1}^{n}q_i V(\vec{r}_i)\tag{5}$$

where $V(\vec{r}_i)$ is the potential at point $\vec{r}_i$ (the position of $q_i$) due to all other charges. For a volume charge density $\rho$, Eq. (5) becomes

$$W = \frac{1}{2}\int_V \rho V\,d\tau = \frac{1}{2}\int_V \left(\epsilon_0\nabla\cdot\vec{E}\right)V\,d\tau = \frac{\epsilon_0}{2}\int_V V\left(\nabla\cdot\vec{E}\right)d\tau$$

using Gauss's law $\nabla\cdot\vec{E} = \rho/\epsilon_0$, and noting that $\nabla\cdot(V\vec{E}) = V(\nabla\cdot\vec{E}) + (\nabla V)\cdot\vec{E}$:

$$W = \frac{\epsilon_0}{2}\int_V \left[\nabla\cdot(V\vec{E}) - (\nabla V)\cdot\vec{E}\right]d\tau$$

using $\vec{E} = -\nabla V$ and Gauss's divergence theorem:

$$W = \frac{\epsilon_0}{2}\int_V \vec{E}\cdot\vec{E}\,d\tau + \frac{\epsilon_0}{2}\oint_S (V\vec{E})\cdot d\vec{a} = \frac{\epsilon_0}{2}\int_V E^2\,d\tau + \frac{\epsilon_0}{2}\oint_S (V\vec{E})\cdot d\vec{a}$$

For a point charge $q$ at the origin, the electric field and potential at a distance $r$ are $E = \frac{q}{4\pi\epsilon_0 r^2}$ and $V = \frac{q}{4\pi\epsilon_0 r}$, respectively. Since $da = r^2\sin\theta\,d\theta\,d\phi$, the surface integral

$$\int_S V\vec{E}\cdot d\vec{a} = \int_S VE\,da = \int_0^{\pi}\int_0^{2\pi}\left(\frac{q}{4\pi\epsilon_0}\right)^2\frac{1}{r^3}\,r^2\sin\theta\,d\theta\,d\phi = \left(\frac{q}{4\pi\epsilon_0}\right)^2\frac{4\pi}{r} \to 0$$

as $r \to \infty$. But the volume integral part is

$$\int_V E^2\,d\tau = \left(\frac{q}{4\pi\epsilon_0}\right)^2\int_0^{\infty}\frac{1}{r^2}\,dr\int_0^{\pi}\sin\theta\,d\theta\int_0^{2\pi}d\phi \neq 0$$

This also holds for a system of charges. Therefore, when the integration is taken over all space, the surface integral goes to zero and only the volume integral contributes to the total work done:

$$W = \frac{\epsilon_0}{2}\int_{\text{all space}}E^2\,d\tau = \int_{\text{all space}}u_e\,d\tau$$

where

$$u_e = \frac{\epsilon_0}{2}E^2$$

is the energy density.

### Solved Problems

**Problem 1.** (a) Three charges are situated at the corners of a square (side $a$), as shown in Figure 4. How much work does it take to bring in another charge, $+q$, from far away and place it in the fourth corner?

(b) How much work does it take to assemble the whole configuration of four charges?

**Figure 4**

**Hint (a):**

$$W_4 = qV = (+q)\frac{1}{4\pi\epsilon_0}\left(\frac{-q}{a} + \frac{-q}{a} + \frac{q}{\sqrt{2}\,a}\right) = \frac{1}{4\pi\epsilon_0}\frac{q^2}{a}\left(-2 + \frac{1}{\sqrt{2}}\right)$$

**Hint (b):**

The work to assemble the whole configuration of four charges is twice the work of Hint (a), since the configuration of the first three charges requires the same work as bringing in the fourth:

$$W = 2 \times \frac{1}{4\pi\epsilon_0}\frac{q^2}{a}\left(-2 + \frac{1}{\sqrt{2}}\right) = \frac{1}{4\pi\epsilon_0}\frac{q^2}{a}\left(-4 + \sqrt{2}\right)$$

Because $V = \frac{1}{4\pi\epsilon_0}\left(\frac{q_1}{r_{14}} + \frac{q_2}{r_{24}} + \frac{q_3}{r_{34}}\right)$ and $W = U = \frac{1}{4\pi\epsilon_0}\left(\frac{q_1 q_2}{r_{12}} + \frac{q_1 q_3}{r_{13}} + \frac{q_1 q_4}{r_{14}} + \frac{q_2 q_3}{r_{23}} + \frac{q_2 q_4}{r_{24}} + \frac{q_3 q_4}{r_{34}}\right)$.

**Problem 2.** Find the energy of a uniformly charged spherical shell of total charge $q$ and radius $R$.

**Solution:** For a uniformly charged spherical shell, the electric field inside is $E = 0$ and outside is $E = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}$.

Therefore,

$$W_{\text{tot}} = \frac{\epsilon_0}{2}\int_{\text{all space}}E^2\,d\tau = \frac{\epsilon_0}{2}\int_{\text{outside}}\left(\frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\right)^2\left(r^2\sin\theta\,dr\,d\theta\,d\phi\right)$$

$$= \frac{\epsilon_0}{2}\frac{q^2}{(4\pi\epsilon_0)^2}\int_R^{\infty}\frac{1}{r^2}\,dr\int_0^{\pi}\sin\theta\,d\theta\int_0^{2\pi}d\phi = \frac{\epsilon_0}{2}\frac{q^2}{(4\pi\epsilon_0)^2}\left(\frac{1}{R}\right)(2)(2\pi)$$

$$\therefore W_{\text{tot}} = \frac{1}{4\pi\epsilon_0}\frac{q^2}{2R}$$

**Problem 3.** Find the energy stored in a uniformly charged solid sphere of radius $R$ and charge $q$.

**Solution:** For a uniformly charged solid sphere of radius $R$, the electric field inside is $E_{\text{in}} = \frac{1}{4\pi\epsilon_0}\frac{qr}{R^3}$ and outside is $E_{\text{out}} = \frac{1}{4\pi\epsilon_0}\frac{q}{r^2}$.

Therefore,

$$W_{\text{tot}} = \frac{\epsilon_0}{2}\int_{\text{all space}}E^2\,d\tau = \frac{\epsilon_0}{2}\int_0^{\infty}E^2 r^2\,dr\int_0^{\pi}\sin\theta\,d\theta\int_0^{2\pi}d\phi = \frac{\epsilon_0}{2}(4\pi)\int_0^{\infty}E^2 r^2\,dr$$

$$= 2\pi\epsilon_0\left[\int_0^{R}\left(\frac{1}{4\pi\epsilon_0}\frac{qr}{R^3}\right)^2r^2\,dr + \int_R^{\infty}\left(\frac{1}{4\pi\epsilon_0}\frac{q}{r^2}\right)^2r^2\,dr\right]$$

$$= 2\pi\epsilon_0\left(\frac{1}{4\pi\epsilon_0}\right)^2\left[\frac{q^2}{R^6}\int_0^{R}r^4\,dr + q^2\int_R^{\infty}\frac{1}{r^2}\,dr\right] = \frac{1}{8\pi\epsilon_0}\left[\frac{q^2}{R^6}\frac{R^5}{5} + \frac{q^2}{R}\right]$$

$$= \frac{1}{8\pi\epsilon_0}\frac{q^2}{R}\left[\frac{1}{5} + 1\right] = \frac{1}{8\pi\epsilon_0}\frac{q^2}{R}\frac{6}{5}$$

$$\therefore W_{\text{tot}} = \frac{3}{5}\frac{1}{4\pi\epsilon_0}\frac{q^2}{R}$$

## Conductors and Insulators

Conductors are substances, like the metals, which contain large numbers of essentially free charge carriers. These charge carriers (electrons in most cases) are free to wander throughout the conducting material; they respond to almost infinitesimal electric fields, and they continue to move as long as they experience a field. These free carriers carry the electric current when a steady electric field is maintained in the conductor by an external source of energy.

Insulators (dielectrics) are substances in which all charged particles are bound rather strongly to constituent molecules. The charged particles may shift their positions slightly in response to an electric field, but they do not leave the vicinity of their molecules.

### Perfect Conductors

A perfect conductor is a material containing an unlimited supply of completely free charges. In real life there are no perfect conductors, but many substances come amazingly close.

1. **$\vec{E} = 0$ inside a conductor.** When a conductor is placed into an external electric field $\vec{E}_0$, this electric field will drive free positive charges to the right, and negative charges to the left. When they come to the edge of the material, the charges pile up: $+ve$ on the right side, $-ve$ on the left. Now, these induced charges produce a field of their own, $\vec{E}_i$, which is in the opposite direction to $\vec{E}_0$ [Figure 5]. It means the field of the induced charges tends to cancel off the original field. Charges will continue to flow until this cancellation is complete, and the resultant field inside the conductor is precisely zero.

**Figure 5**

2. **$\rho = 0$ inside a conductor.** From Gauss's law: $\nabla\cdot\vec{E} = \frac{\rho}{\epsilon_0}$. Hence, $\vec{E} = 0$ inside a conductor $\Rightarrow \rho = 0$ inside a conductor. So, the potential $V$ inside the conductor satisfies Laplace's equation ($\nabla^2 V = 0$).

3. **Any net charge resides on the surface.** The net electric charge of a conductor resides entirely on its surface. The mutual repulsion of like charges from Coulomb's law demands that the charges be as far apart as possible, hence on the surface of the conductor.

4. **A conductor is an equipotential.** For any two points $a$ and $b$ within (or at the surface of) a given conductor,

$$V(a) - V(b) = -\int_a^b \vec{E}\cdot d\vec{l} = 0$$

$$\Rightarrow V(a) = V(b)$$

5. **$\vec{E}$ is perpendicular to the surface, just outside a conductor.**
