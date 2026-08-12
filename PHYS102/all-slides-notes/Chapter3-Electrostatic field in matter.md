# The Electrostatic Field in Matter

## Outline

- Electric Dipole
  - Electric Dipole Moment ($\vec{p}$)
  - Electric potential and field at a point due to a short dipole
  - Torque and Energy stored on a dipole placed in an electric field
    - Net Force on the dipole
    - Torque on the dipole
    - Potential energy stored in the dipole
- Dielectrics
- Induced Dipole Moment and Atomic Polarizability ($\alpha$)
- Polarization
  - Bound charges
  - Physical Interpretation of Bound Charges
    - For uniform polarization
    - For nonuniform polarization
- Gauss's Law in the Presence of Dielectrics
- Susceptibility, Permittivity, Dielectric Constant
- Electric field at the center of cavity sphere inside a polarized medium
- Clausius–Mossotti Equation

## Electric Dipole

A pair of equal and opposite point charges separated by a small distance is called an electric dipole. The distance between the two charges is called dipole length and its centre is called dipole centre.

**Figure 1:** An electric dipole

### Electric Dipole Moment ($\vec{p}$)

Electric dipole moment is defined as the product of magnitude of either charge and the vector distance separating the two charges.

Electric Dipole Moment: $\vec{p} = q\vec{d}$

The direction of electric dipole moment vector is from the negative charge toward the positive charge. It is a vector quantity. SI unit of Electric Dipole Moment is C·m.

### Electric potential and field at a point due to a short dipole

Consider a short dipole of dipole moment $\vec{p}$ and dipole length $d$ with dipole centre $O$ at the origin. The dipole consists of the charge $-q$ at the position $\left(0,0,-\tfrac{d}{2}\right)$ and another charge $+q$ at position $\left(0,0,+\tfrac{d}{2}\right)$ as shown in Figure 2. Let $P(x,y,z)$ be a point with position vector $\vec{r}$ at which the electric potential and field are to be determined.

**Figure 2:** A short dipole with a point $P(x,y,z)$

From Figure 2, the separation vectors of $P$ from $+q$ and $-q$ are respectively

$$
\vec{r}_{+} = x\hat{i} + y\hat{j} + \left(z - \frac{d}{2}\right)\hat{k}, \qquad
\vec{r}_{-} = x\hat{i} + y\hat{j} + \left(z + \frac{d}{2}\right)\hat{k}
$$

The magnitudes of them are

$$
r_{+}^{2} = x^{2} + y^{2} + \left(z - \frac{d}{2}\right)^{2}
$$

$$
r_{-}^{2} = x^{2} + y^{2} + \left(z + \frac{d}{2}\right)^{2}
$$

Since $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$ and $r = \sqrt{x^{2} + y^{2} + z^{2}}$,

$$
r_{+} = \sqrt{x^{2} + y^{2} + z^{2} - zd + \frac{d^{2}}{4}} = \sqrt{r^{2} - zd + \frac{d^{2}}{4}}
$$

$$
r_{-} = \sqrt{x^{2} + y^{2} + z^{2} + zd + \frac{d^{2}}{4}} = \sqrt{r^{2} + zd + \frac{d^{2}}{4}}
$$

For a short dipole, either $P$ is very far from the dipole or the charges are closed to each other, i.e. $r \gg d$. Then,

$$
\frac{1}{r_{+}} = \left(r^{2} - zd + \frac{d^{2}}{4}\right)^{-1/2} = \frac{1}{r}\left(1 - \frac{zd}{r^{2}} + \frac{d^{2}}{4r^{2}}\right)^{-1/2} \approx \frac{1}{r}\left(1 - \frac{zd}{r^{2}}\right)^{-1/2} \approx \frac{1}{r}\left(1 + \frac{zd}{2r^{2}}\right)
$$

Here, we have applied the binomial expansion and neglected the higher order terms. Similarly,

$$
\frac{1}{r_{-}} \approx \frac{1}{r}\left(1 - \frac{zd}{2r^{2}}\right)
$$

The electric potential at $P$ due to the short dipole is

$$
V(x,y,z) = \frac{q}{4\pi\epsilon_{0}}\left(\frac{1}{r_{+}} - \frac{1}{r_{-}}\right)
= \frac{q}{4\pi\epsilon_{0}}\left[\frac{1}{r}\left(1 + \frac{zd}{2r^{2}}\right) - \frac{1}{r}\left(1 - \frac{zd}{2r^{2}}\right)\right]
= \frac{1}{4\pi\epsilon_{0}}\frac{qzd}{r^{3}}
$$

Since $p = qd$, the electric potential at $P$ is

$$
V(x,y,z) = \frac{1}{4\pi\epsilon_{0}}\frac{pz}{r^{3}}
\tag{1}
$$

From Figure 2, $z = r\cos\theta$

$$
V(r,\theta) = \frac{1}{4\pi\epsilon_{0}}\frac{p\cos\theta}{r^{2}}
\tag{2}
$$

Since $p\cos\theta = \vec{p}\cdot\hat{r}$, then

$$
V(\vec{r}) = \frac{1}{4\pi\epsilon_{0}}\frac{\vec{p}\cdot\hat{r}}{r^{2}} = \frac{1}{4\pi\epsilon_{0}}\frac{\vec{p}\cdot\vec{r}}{r^{3}}
\tag{3}
$$

The electric field at $P$ can be calculated by taking the negative gradient ($\because \vec{E} = -\nabla V$) of any expression of potential defined by Equations (1), (2) or (3).

**Method-I (Cartesian Coordinate):** Using Equation (1)

$$
\vec{E} = -\nabla V
= -\frac{p}{4\pi\epsilon_{0}}\nabla\left(\frac{z}{r^{3}}\right)
= -\frac{p}{4\pi\epsilon_{0}}\left[\frac{1}{r^{3}}\nabla z + z\nabla\left(\frac{1}{r^{3}}\right)\right]
$$

Using $\nabla r^{n} = n\,r^{n-1}\hat{r}$ and $\nabla z = \frac{\partial z}{\partial x}\hat{i} + \frac{\partial z}{\partial y}\hat{j} + \frac{\partial z}{\partial z}\hat{k} = \hat{k}$,

$$
\vec{E} = -\frac{p}{4\pi\epsilon_{0}}\left[\frac{1}{r^{3}}\hat{k} - \frac{3z}{r^{4}}\hat{r}\right]
$$

Therefore,

$$
\vec{E} = \frac{p}{4\pi\epsilon_{0}r^{3}}\left(\frac{3z}{r}\hat{r} - \hat{k}\right) = \frac{p}{4\pi\epsilon_{0}r^{3}}\left(3\cos\theta\,\hat{r} - \hat{k}\right)
\tag{4}
$$

The magnitude is

$$
E = \sqrt{\vec{E}\cdot\vec{E}} = \frac{p}{4\pi\epsilon_{0}r^{3}}\sqrt{(3\cos\theta\,\hat{r} - \hat{k})\cdot(3\cos\theta\,\hat{r} - \hat{k})}
= \frac{p}{4\pi\epsilon_{0}r^{3}}\sqrt{9\cos^{2}\theta - 6\cos\theta(\hat{r}\cdot\hat{k}) + 1}
$$

Since $\hat{r}\cdot\hat{k} = \cos\theta$, we can have

$$
E = \frac{p}{4\pi\epsilon_{0}r^{3}}\sqrt{3\cos^{2}\theta + 1}
\tag{5}
$$

**Method-II (Spherical Polar coordinate):** Using Equation (2)

The operator $\nabla$ in spherical polar coordinate can be defined as

$$
\nabla = \hat{r}\frac{\partial}{\partial r} + \hat{\theta}\frac{1}{r}\frac{\partial}{\partial\theta} + \hat{\phi}\frac{1}{r\sin\theta}\frac{\partial}{\partial\phi}
\tag{6}
$$

So,

$$
\begin{aligned}
\vec{E}(r,\theta) &= -\nabla V = -\left[\hat{r}\frac{\partial V}{\partial r} + \hat{\theta}\frac{1}{r}\frac{\partial V}{\partial\theta} + \hat{\phi}\frac{1}{r\sin\theta}\frac{\partial V}{\partial\phi}\right] \\[4pt]
&= -\left[\hat{r}\frac{\partial}{\partial r}\left(\frac{1}{4\pi\epsilon_{0}}\frac{p\cos\theta}{r^{2}}\right) + \hat{\theta}\frac{1}{r}\frac{\partial}{\partial\theta}\left(\frac{1}{4\pi\epsilon_{0}}\frac{p\cos\theta}{r^{2}}\right)\right] \\[4pt]
&= -\left[\frac{p\cos\theta}{4\pi\epsilon_{0}}\frac{\partial}{\partial r}\left(r^{-2}\right)\hat{r} + \frac{p}{4\pi\epsilon_{0}r^{3}}\frac{\partial}{\partial\theta}\left(\cos\theta\right)\hat{\theta}\right] \\[4pt]
&= -\left[\frac{p\cos\theta}{4\pi\epsilon_{0}}\left(-\frac{2}{r^{3}}\right)\hat{r} + \frac{p}{4\pi\epsilon_{0}r^{3}}\left(-\sin\theta\right)\hat{\theta}\right] \\[4pt]
&= \frac{p}{4\pi\epsilon_{0}r^{3}}\left(2\cos\theta\right)\hat{r} + \frac{p}{4\pi\epsilon_{0}r^{3}}\left(\sin\theta\right)\hat{\theta}
\end{aligned}
$$

$$
\therefore \vec{E}(r,\theta) = \frac{p}{4\pi\epsilon_{0}r^{3}}\left[2\cos\theta\,\hat{r} + \sin\theta\,\hat{\theta}\right]
\tag{7}
$$

The magnitude of electric field:

$$
E = \frac{p}{4\pi\epsilon_{0}r^{3}}\sqrt{(2\cos\theta)^{2} + (\sin\theta)^{2}} = \frac{p}{4\pi\epsilon_{0}r^{3}}\sqrt{4\cos^{2}\theta + \sin^{2}\theta}
$$

$$
\therefore E = \frac{p}{4\pi\epsilon_{0}r^{3}}\sqrt{3\cos^{2}\theta + 1}
\tag{8}
$$

**Cases:**

- **Case I:** At a point on the axis of a dipole ($\theta = 0^{\circ}$), $V(\vec{r}) \sim \dfrac{p}{4\pi\epsilon_{0}r^{2}}$ and $E(\vec{r}) = \dfrac{2p}{4\pi\epsilon_{0}r^{3}}$.
- **Case II:** At a point on the perpendicular bisector of a dipole ($\theta = 90^{\circ}$), $V = 0$ and $E = \dfrac{p}{4\pi\epsilon_{0}r^{3}}$.

**Problem:** Show that the electric field of a (perfect) dipole can be written in the coordinate free form

$$
\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_{0}r^{3}}\left[3(\vec{p}\cdot\hat{r})\hat{r} - \vec{p}\right]
$$

**Solution:** Using equation (3)

$$
\vec{E}(\vec{r}) = -\nabla V(\vec{r}) = -\frac{1}{4\pi\epsilon_{0}}\nabla\left(\frac{\vec{p}\cdot\vec{r}}{r^{3}}\right)
= -\frac{1}{4\pi\epsilon_{0}}\left[(\vec{p}\cdot\vec{r})\nabla\left(\frac{1}{r^{3}}\right) + \left\{\nabla(\vec{p}\cdot\vec{r})\right\}\frac{1}{r^{3}}\right]
$$

Here, $\nabla(\vec{p}\cdot\vec{r}) = \nabla(xp_{x} + yp_{y} + zp_{z}) = p_{x}\hat{i} + p_{y}\hat{j} + p_{z}\hat{k} = \vec{p}$, and $\nabla\left(\frac{1}{r^{3}}\right) = -\frac{3\vec{r}}{r^{5}}$.

$$
\vec{E}(\vec{r}) = -\frac{1}{4\pi\epsilon_{0}}\left[(\vec{p}\cdot\vec{r})\left(-\frac{3\vec{r}}{r^{5}}\right) + \frac{1}{r^{3}}\vec{p}\right] = \frac{1}{4\pi\epsilon_{0}}\left[\frac{3(\vec{p}\cdot\vec{r})\vec{r}}{r^{5}} - \frac{\vec{p}}{r^{3}}\right]
$$

Therefore,

$$
\vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_{0}r^{3}}\left[3(\vec{p}\cdot\hat{r})\hat{r} - \vec{p}\right]
\tag{9}
$$

### Torque and Energy stored on a dipole placed in an electric field

Consider an electric dipole of dipole moment $\vec{p} = q\vec{d}$ with dipole length $d$ and dipole center $O$ in an external electric field $\vec{E}$ directed from left to right as shown in Figure 3. The dipole is capable to rotate about an axis through $O$ and perpendicular to the field lines. Let the dipole makes an angle $\theta$ with electric field at an instant of time $t$.

**Figure 3:** An electric dipole placed in an external electric field

#### Net Force on the dipole

Each of the charges is modeled as a particle in an electric field.

The Force acting on the charge $+q$ is $\vec{F}_{+} = q\vec{E}$.

The Force acting on the charge $-q$ is $\vec{F}_{-} = -q\vec{E}$.

Therefore the net force

$$
\vec{F}_{\text{net}} = \vec{F}_{+} + \vec{F}_{-} = q\vec{E} + (-q\vec{E})
$$

$$
\therefore \vec{F}_{\text{net}} = 0
$$

Hence, the net force on an electric dipole in a uniform external electric field is zero. But these two equal and opposite forces are separated by a perpendicular distance $d_{\perp} = d\sin\theta$ and constitute a couple which rotates the dipole in clockwise direction, tending it in the direction of field.

#### Torque on the dipole

$$
\begin{aligned}
\vec{\tau} &= \vec{r}_{+}\times\vec{F}_{+} + \vec{r}_{-}\times\vec{F}_{-} \\[4pt]
&= \left(\frac{\vec{d}}{2}\right)\times(q\vec{E}) + \left(-\frac{\vec{d}}{2}\right)\times(-q\vec{E}) \\[4pt]
&= q\vec{d}\times\vec{E}
\end{aligned}
$$

$$
\therefore \vec{\tau} = \vec{p}\times\vec{E}
\tag{10}
$$

Therefore, the torque, $\vec{\tau}$, on an electric dipole with dipole moment $\vec{p}$ in an uniform electric field $\vec{E}$ is $\vec{\tau} = \vec{p}\times\vec{E}$.

#### Potential energy stored in the dipole

Consider the dipole is to rotate from angular position $\theta_{1}$ to $\theta_{2}$ against the torque due to electric field. The electric field exerts the torque to rotate the dipole clockwise, i.e. the direction of torque by it pointing into the plane of figure. The magnitude of the torque exerted by electric field is $\tau = pE\sin\theta$ pointing into the plane of figure. In order to rotate the dipole against this torque, we should exert same amount the torque at every moment in the direction out to the plane of figure.

Now, the amount of work done to rotate the dipole from angular position $\theta_{1}$ to $\theta_{2}$ against electric field is

$$
W = \int_{\theta_{1}}^{\theta_{2}} \tau_{\text{app}}\, d\theta = \int_{\theta_{1}}^{\theta_{2}} pE\sin\theta\, d\theta = -pE(\cos\theta_{2} - \cos\theta_{1})
$$

This amount of work done results the change in potential energy of the dipole between the angular position $\theta_{1}$ and $\theta_{2}$, i.e.

$$
\Delta U = U(\theta_{2}) - U(\theta_{1}) = -pE(\cos\theta_{2} - \cos\theta_{1})
$$

Let the initial angular position is chosen at $\theta_{1} = \frac{\pi}{2} = 90^{\circ}$ and the final position as $\theta_{2} = \theta$, then we can have

$$
U(\theta) - U\left(\frac{\pi}{2}\right) = -pE\left(\cos\theta - \cos\frac{\pi}{2}\right) = -pE\cos\theta
$$

Assuming the potential at the reference position $\frac{\pi}{2}$ is zero, i.e. $U\left(\frac{\pi}{2}\right) = 0$, we get

$$
U(\theta) = -pE\cos\theta = -\vec{p}\cdot\vec{E}
\tag{11}
$$

Equation (11) gives the potential energy stored on the electric dipole placed in an electric field at any angular position with respect to the angular position $\frac{\pi}{2}$ where the potential energy is assumed to be zero.

The potential energy is minimum when $\vec{p}$ becomes parallel to $\vec{E}$, i.e. $U_{\min} = -pE$, and maximum when they are anti-parallel, i.e. $U_{\max} = +pE$.

## Dielectrics

A dielectric is an insulator (nonconducting material) such as air, oil, rubber, glass, plastic, or waxed paper etc. In dielectrics, all charges are tightly bound to specific atoms or molecules, and all they can move a bit within the atom of molecules. So there no free electrons to carry currents on the dielectric. An applied field causes a displacement of charges but there is no flow of charges in dielectrics.

The molecules of a dielectric may be classified as polar or nonpolar.

- In polar molecules, the "centers of gravity" of the positive and negative charge distributions do not coincide at a point. A polar molecule has a permanent dipole moment, even in the absence of a polarizing field. Examples: H$_2$O, HCl, NH$_3$ etc.
- In nonpolar molecules, the "centers of gravity" of the positive and negative charge distributions coincide at a point. A nonpolar molecule does not have a permanent dipole moment. Examples: H$_2$, N$_2$, O$_2$, CO$_2$, He, Ne, Ar etc.

## Induced Dipole Moment and Atomic Polarizability ($\alpha$)

In non-polar molecules and in every isolated atom, the centers of the positive and negative charges coincide (Figure 1a) and thus no dipole moment is set up. However, if we place an atom or a non-polar molecule in an external electric field, the field distorts the electron orbits and separates the centers of positive and negative charge (Figure 1b). Because the electrons are negatively charged, they tend to be shifted in a direction opposite the field. This shift sets up a dipole moment $\vec{p}$ that points in the direction of the field. This dipole moment is said to be induced by the field, and the atom or molecule is then said to be polarized by the field.

**Figure 1:** (a) Neutral atom, (b) An atom polarized by an external field

If the electric field is so large the electrons are separated from the atom and the atom become ionized. But for small electric field, the atom just becomes a dipole, this induced dipole moment is approximately proportional to the applied electric field:

$$
\vec{p} = \alpha\vec{E}
\tag{1}
$$

The constant of proportionality $\alpha$ is called atomic polarizability. Its value depends on the detailed structure of the atom. Atomic Polarizability is defined as the electric dipole moment induced in the atom by an electric field of unit strength.

$$
\alpha = \frac{p}{E}
\tag{2}
$$

The unit of $\alpha$ is

$$
\frac{\text{C}\cdot\text{m}}{\text{V}\cdot\text{m}^{-1}} = \text{C}\cdot\text{m}^{2}\cdot\text{V}^{-1} = (\text{C}\cdot\text{V}^{-1})\cdot\text{m}^{2} = \text{F}\cdot\text{m}^{2} \quad (\text{Farad meter squared})
$$

### Example: Primitive model for an atom

A primitive model for an atom consists of a point nucleus $(+q)$ surrounded by a uniformly charged spherical cloud $(-q)$ of radius $a$ [Figure 2]. Calculate the atomic polarizability of such an atom.

**Figure 2:** Neutral atom

**Solution:** When an atom is placed in an external electric field $\vec{E}$ directed from left to right, the nucleus will be shifted slightly to the right and the electron cloud to the left, as shown in Figure 3. If $E_{e}$ be the field at a distance $d$ from the center of electron cloud (sphere) when equilibrium occurs.

**Figure 3:** Induced dipole

So, at equilibrium,

$$
E = E_{e} = \frac{\rho d}{3\epsilon_{0}} = \frac{qd}{\frac{4}{3}\pi a^{3}\cdot 3\epsilon_{0}} = \frac{1}{4\pi\epsilon_{0}}\frac{qd}{a^{3}} = \frac{1}{4\pi\epsilon_{0}}\frac{p}{a^{3}}
$$

$$
\therefore p = 4\pi\epsilon_{0}\,a^{3}E
\tag{3}
$$

Therefore, the atomic polarizability is

$$
\alpha = 4\pi\epsilon_{0}a^{3} = 3\epsilon_{0}\frac{4}{3}\pi a^{3} = 3\epsilon_{0}v \qquad [\because p = \alpha E]
$$

$$
\therefore \alpha = 3\epsilon_{0}v
\tag{4}
$$

where $v$ is the volume of the atom.

## Polarization

When a piece of dielectric material is placed in an electric field, a lot of little dipoles pointing along the direction of the field and the material is said to be polarized. The dipole moment per unit volume of the polarized material is called polarization and denoted by $\vec{P}$. For an elemental volume $d\tau$ of the material with net dipole moment $d\vec{p}$, the polarization is

$$
\vec{P} = \frac{d\vec{p}}{d\tau}
\tag{5}
$$

or

$$
d\vec{p} = \vec{P}\,d\tau
\tag{6}
$$

The SI unit of polarization is coulomb per meter squared, C·m$^{-2}$.

### Bound charges

Suppose we have a long string of dipoles, as shown in Figure 4. Along the line, the head of one effectively cancels the tail of its neighbor, but at the ends, there are two charges left over: plus at the right end and minus at the left. The net charge at the ends is called bound charge to remind ourselves that it cannot be removed; in a dielectric, every electron is attached to a specific atom or molecule.

**Figure 4:** A string of dipoles

### Physical Interpretation of Bound Charges

#### For uniform polarization

To calculate the bound charge, consider a "tube" of dielectric parallel to uniform polarization $\vec{P}$ (Figure 5). The dipole moment of tiny chunk shown in Figure 5 is

$$
p = P(Ad)
\tag{7}
$$

where $A$ is the cross-sectional area of the tube and $d$ is the length of the chunk. In terms of the charge $q$ at the end, this same dipole moment can be written as

$$
p = qd
\tag{8}
$$

From equations (7) and (8), we get

$$
q = PA
\tag{9}
$$

Therefore, the bound charge that piles up at the right end of the tube is $q = PA$.

**Figure 5:** A tube of dielectric in uniform polarization

For the ends sliced off perpendicularly, the surface charge density is

$$
\sigma_{b} = \frac{q}{A} = P
\tag{10}
$$

i.e. surface charge density of bound charge = uniform polarization.

**Figure 6:** An oblique cut

For an oblique cut (Figure 6), the charge is still the same, but $A = A_{\text{end}}\cos\theta$.

So, the surface charge density is

$$
\sigma_{b} = \frac{q}{A_{\text{end}}} = \frac{q}{A\cdot\cos\theta} = P\cos\theta = \vec{P}\cdot\hat{n}
$$

The effect of the polarization, then, is to paint a bound charge $\sigma_{b} = \vec{P}\cdot\hat{n}$ over the surface of the material. Thus uniform polarization produces the surface charge density at the end. There is no volume bound charge for uniform polarization.

#### For nonuniform polarization

If the polarization is nonuniform, we get accumulations of bound charge within the material as well as on the surface. Figure 7 suggests that a diverging $\vec{P}$ results in a pile up of negative charge. Indeed, the net bound charge in a given volume is equal and opposite to the amount that has been pushed out through the surface.

**Figure 7:** A diverging polarization piles up negative charge

$$
\int_{V}\rho_{b}\,d\tau = -\oint_{S}\sigma_{b}\,da = -\oint_{S}(\vec{P}\cdot\hat{n})\,da = -\int_{V}(\nabla\cdot\vec{P})\,d\tau
$$

Since this is true for any volume, we have

$$
\rho_{b} = -\nabla\cdot\vec{P}
\tag{11}
$$

## Gauss's Law in the Presence of Dielectrics

We know that, the effect of polarization is to produce accumulations of bound charge, $\rho_{b} = -\nabla\cdot\vec{P}$ within the dielectric and $\sigma_{b} = \vec{P}\cdot\hat{n}$ on the surface. Within the dielectric, the total volume charge density can be written as

$$
\rho = \rho_{b} + \rho_{f}
$$

where $\rho_{b}$ is the bound volume charge density and $\rho_{f}$ is the free volume charge density.

We know the differential form of Gauss's law:

$$
\nabla\cdot\vec{E} = \frac{\rho}{\epsilon_{0}}
$$

$$
\Rightarrow \nabla\cdot\vec{E} = \frac{\rho_{b} + \rho_{f}}{\epsilon_{0}}
$$

where $\vec{E}$ is the total field.

$$
\Rightarrow \epsilon_{0}\nabla\cdot\vec{E} = \rho_{b} + \rho_{f}
$$

$$
\Rightarrow \nabla\cdot(\epsilon_{0}\vec{E}) = -\nabla\cdot\vec{P} + \rho_{f}
$$

$$
\Rightarrow \nabla\cdot(\epsilon_{0}\vec{E} + \vec{P}) = \rho_{f}
$$

$$
\therefore \nabla\cdot\vec{D} = \rho_{f}
$$

Where $\vec{D} = \epsilon_{0}\vec{E} + \vec{P}$ is the electric displacement. In integral form,

$$
\int_{V}(\nabla\cdot\vec{D})\,d\tau = \int_{V}\rho_{f}\,d\tau
$$

$$
\oint \vec{D}\cdot d\vec{a} = Q_{f,\text{enc}}
$$

where $Q_{f,\text{enc}}$ denotes the total free charge enclosed in the volume. This is a particularly useful way to express Gauss's law, in the context of dielectrics, because it refers only to free charges.

### Example 1: Long straight wire with rubber insulation

A long straight wire, carrying line charge $\lambda$, surrounded by rubber insulation out to a radius $a$ (Figure 8). Find the electric displacement.

**Figure 8:** A long straight wire surrounded by rubber insulation

**Solution:** We have Gauss's law in the presence of dielectric in integral form:

$$
\oint \vec{D}\cdot d\vec{a} = Q_{f,\text{enc}}
\tag{12}
$$

where $Q_{f,\text{enc}}$ denotes the total free charge enclosed in the volume. Drawing a cylindrical Gaussian surface, of radius $s$ of length $L$, and applying Eq. (12), we find:

$$
\oint D\,da = Q_{f,\text{enc}}
$$

$$
D(2\pi sL) = \lambda L
$$

$$
\Rightarrow \vec{D} = \frac{\lambda}{2\pi s}\,\hat{s}
$$

Where $\lambda L = $ charge enclosed by closed Gaussian surface.

We know that $\vec{D} = \epsilon_{0}\vec{E} + \vec{P}$. Here $\vec{P} = 0$ (there is no dielectric material). Then

$$
\vec{D} = \epsilon_{0}\vec{E}
$$

$$
\vec{E} = \frac{\vec{D}}{\epsilon_{0}} = \frac{\lambda}{2\pi\epsilon_{0}s}\,\hat{s}
$$

## Susceptibility, Permittivity, Dielectric Constant

When the dielectric material is placed in the electric field, the dielectric material gets polarized. The polarization results from the lining up of the atomic or molecular dipole along the direction of electric field. In many dielectric substance, the polarization is proportional to the electric field, provided $\vec{E}$ is not too strong:

$$
\text{i.e. } \vec{P} \propto \vec{E}
$$

$$
\vec{P} = \epsilon_{0}\chi_{e}\vec{E}
\tag{13}
$$

The constant of proportionality, $\chi_{e}$ is called the electric susceptibility of the medium (a factor of $\epsilon_{0}$ has been extracted to make $\chi_{e}$ dimensionless). The materials that obey Eq. (13) are called linear dielectrics.

In linear media we have

$$
\vec{D} = \epsilon_{0}\vec{E} + \vec{P} = \epsilon_{0}\vec{E} + \epsilon_{0}\chi_{e}\vec{E} = \epsilon_{0}(1 + \chi_{e})\vec{E}
\tag{14}
$$

So, $\vec{D}$ is also proportional to $\vec{E}$:

$$
\vec{D} = \epsilon\vec{E}
\tag{15}
$$

$$
\text{where } \epsilon = \epsilon_{0}(1 + \chi_{e})
\tag{16}
$$

This new constant $\epsilon$ is called the permittivity of the material.

In vacuum, where there is no matter to polarize, the susceptibility is zero, and the permittivity is $\epsilon_{0}$. That's why $\epsilon_{0}$ is called the permittivity of free space. The dimensionless quantity

$$
\epsilon_{r} \equiv (1 + \chi_{e}) = \frac{\epsilon}{\epsilon_{0}}
$$

is called the relative permittivity, or dielectric constant ($K$), of the material.

Also,

$$
\rho_{b} = -\nabla\cdot\vec{P} = -\nabla\cdot(\epsilon_{0}\chi_{e}\vec{E}) = -\nabla\cdot\left(\epsilon_{0}\chi_{e}\frac{\vec{D}}{\epsilon_{0}(1+\chi_{e})}\right) = -\frac{\chi_{e}}{1+\chi_{e}}\rho_{f}
$$

$$
\therefore \rho_{b} = -\frac{\chi_{e}}{1 + \chi_{e}}\rho_{f}
$$

Hence, in homogeneous linear dielectric, the bound volume charge density $\rho_{b}$ is proportional to free volume charge density $\rho_{f}$. If there is no free charge inside the material then volume bound charge would be zero. If there are positive free charges then the bound charge accumulated inside the region would be negative and vice versa.

### Example 2: Metal sphere surrounded by a linear dielectric

A metal sphere of radius $a$, carries a charge $Q$ [Figure 9]. It is surrounded, out to radius $b$, by linear dielectric material of permittivity $\epsilon$. Find the potential at the center (relative to infinity).

**Figure 9:** A metal sphere surrounded by a dielectric

**Solution:** Drawing a spherical Gaussian surface of radius $r$ $(r > a)$, and applying Eq.: $\oint\vec{D}\cdot d\vec{a} = Q_{f,\text{enc}}$, we get

$$
D(4\pi r^{2}) = Q
$$

$$
\therefore \vec{D} = \frac{Q}{4\pi r^{2}}\,\hat{r} \quad \text{for all points } r > a
$$

Since, $\vec{D} = \epsilon\vec{E}$, $\Rightarrow \vec{E} = \dfrac{\vec{D}}{\epsilon}$

$$
\vec{E} =
\begin{cases}
\dfrac{1}{\epsilon_{0}}\dfrac{Q}{4\pi r^{2}}\,\hat{r}, & \text{for } r > b \\[8pt]
\dfrac{1}{\epsilon}\dfrac{Q}{4\pi r^{2}}\,\hat{r}, & \text{for } a < r < b \\[8pt]
0, & \text{for } r < a
\end{cases}
\tag{17}
$$

The potential at the centre relative to infinity is

$$
V = -\int_{\infty}^{0}\vec{E}\cdot d\vec{l} = -\left[\int_{\infty}^{b}E\,dr + \int_{b}^{a}E\,dr + \int_{a}^{0}E\,dr\right]
= -\left[\int_{\infty}^{b}\frac{1}{\epsilon_{0}}\frac{Q}{4\pi r^{2}}\,dr + \int_{b}^{a}\frac{1}{\epsilon}\frac{Q}{4\pi r^{2}}\,dr + \int_{a}^{0}(0)\,dr\right]
$$

$$
\therefore V = \frac{Q}{4\pi}\left[\frac{1}{\epsilon_{0}b} + \frac{1}{\epsilon}\left(\frac{1}{a} - \frac{1}{b}\right)\right]
$$

## Electric field at the center of cavity sphere inside a polarized medium

**Question:** Derive an expression for the electric field at the centre of a spherical cavity inside a polarized dielectric due to the charges on the wall of the cavity.

**Solution:** When a spherical cavity of radius $r$ is made inside a uniformly polarized dielectric medium with polarization $\vec{P}$ directed from left to right as shown in Figure 1, then negative bound charges induce on the right hemisphere and positive bound charges on the left hemisphere.

**Figure 1:** A spherical cavity inside a uniformly polarized dielectric

**Figure 2:** The magnified view of the cavity sphere with induced bound charges

Let us take an elemental area $da$ on the surface of cavity sphere such that the unit normal vector $\hat{n}$ makes an angle $\theta$ with $\vec{P}$. The charge on an elemental area $da$ is

$$
dq = -\sigma_{b}\,da = -(\vec{P}\cdot\hat{n})\,da = -P\cos\theta\left(r^{2}\sin\theta\,d\theta\,d\phi\right)
$$

The electric field at the centre of the cavity due to the charge on $dq$ is

$$
d\vec{E}_{C} = \frac{1}{4\pi\epsilon_{0}}\frac{dq}{r^{3}}\,\vec{r}
$$

where $\vec{r}$ is the vector from the surface to the centre of the sphere

$$
d\vec{E}_{C} = \frac{1}{4\pi\epsilon_{0}}\frac{-P\cos\theta\,r^{2}\sin\theta\,d\theta\,d\phi}{r^{3}}\,\vec{r}
$$

$$
\therefore d\vec{E}_{C} = \frac{P}{4\pi\epsilon_{0}}\left(\cos\theta\sin\theta\,d\theta\,d\phi\right)\hat{n}
$$

The component of $d\vec{E}_{C}$ along the direction of $\vec{P}$ is

$$
dE_{C}\cos\theta = \frac{P}{4\pi\epsilon_{0}}\cos^{2}\theta\sin\theta\,d\theta\,d\phi
$$

Due to symmetry of the cavity, the components of $d\vec{E}_{C}$ along the direction perpendicular to $\vec{P}$ is zero.

Therefore, the electric field at the centre $C$ of the spherical cavity due to the entire surface charge on the cavity surface is

$$
E_{C} = \frac{P}{4\pi\epsilon_{0}}\int\cos^{2}\theta\sin\theta\,d\theta\,d\phi
= \frac{P}{4\pi\epsilon_{0}}\left(\int_{0}^{\pi}\cos^{2}\theta\sin\theta\,d\theta\right)\left(\int_{0}^{2\pi}d\phi\right)
= -\frac{P}{4\pi\epsilon_{0}}\left(\int_{0}^{\pi}\cos^{2}\theta\,d(\cos\theta)\right)\{2\pi\}
= -\frac{P}{4\pi\epsilon_{0}}\left(\frac{\cos^{3}\theta}{3}\right)_{0}^{\pi}\{2\pi\}
= \frac{\vec{P}}{3\epsilon_{0}}
$$

$$
\therefore \vec{E}_{C} = \frac{P}{3\epsilon_{0}}\hat{n} \quad \text{pointing along } \vec{P}
$$

## Clausius–Mossotti Equation

Clausius and Mossotti established a relation between the dielectric constant and the molecular polarizability of a dielectric. This relation is known as Clausius-Mossotti Equation.

Clausius and Mossotti assumed that each molecule of a uniformly polarized dielectric medium lies at the centre of the cavity sphere. Therefore, the net electric field experienced by the molecule (also called molecular field) is the sum of electric field due to the bound charge on the cavity surface and resultant of all other fields except due to the bound charges on the cavity surface.

$$
\vec{E}_{m} = \vec{E} + \vec{E}_{C}
\tag{1}
$$

The dipole moment of a molecule per unit molecular field is called its polarizability, $\alpha_{m}$.

$$
\vec{p}_{m} = \alpha_{m}\vec{E}_{m} = \alpha_{m}\left(\vec{E} + \vec{E}_{C}\right) = \alpha_{m}\left(\frac{\vec{P}}{\epsilon_{0}\chi_{e}} + \frac{\vec{P}}{3\epsilon_{0}}\right) \qquad \left[\because \vec{P} = \chi_{e}\epsilon_{0}\vec{E}\right]
\tag{2}
$$

If there are $N$ molecules per unit volume, then the polarization $\vec{P} = N\vec{p}_{m}$,

$$
\text{or, } \vec{P} = N\alpha_{m}\left(\frac{\vec{P}}{\epsilon_{0}\chi_{e}} + \frac{\vec{P}}{3\epsilon_{0}}\right)
$$

$$
\text{or, } 1 = N\alpha_{m}\left(\frac{1}{\epsilon_{0}\chi_{e}} + \frac{1}{3\epsilon_{0}}\right) = N\alpha_{m}\frac{3 + \chi_{e}}{3\epsilon_{0}\chi_{e}}
$$

$$
\text{or, } \alpha_{m} = \frac{3\epsilon_{0}\chi_{e}}{N(3 + \chi_{e})} = \frac{3\epsilon_{0}}{N}\frac{K - 1}{K + 2} \qquad [\because K = 1 + \chi_{e}]
$$

$$
\therefore \alpha_{m} = \frac{3\epsilon_{0}}{N}\frac{K - 1}{K + 2}
$$

This is known as Clausius-Mossotti Equation.

The Clausius-Mossotti relation connects the dielectric constant $K$ to the polarizability $\alpha_{m}$ of the atoms or molecules constituting the dielectric. The dielectric constant is a bulk (macroscopic) property and polarizability is a microscopic property of matter; hence the relation bridges the gap between a directly-observable macroscopic property with a microscopic molecular property.