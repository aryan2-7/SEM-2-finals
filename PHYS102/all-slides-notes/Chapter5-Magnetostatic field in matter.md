# The Magnetostatic Field in Matter

## Outline

1. Magnetic Dipole
   - Torques and Energy on a Magnetic Dipole placed in a Magnetic Field
2. Magnetization
   - Bound Current and Its Physical Interpretation
3. Ampere's Law in Magnetized Materials
4. Magnetic Susceptibility ($\chi_m$) and Permeability ($\mu$)
5. Dia-, Para- and Ferromagnetic Materials
   - Diamagnetic Materials
   - Paramagnetic Materials
   - Curie Law
   - Ferromagnetic Materials
   - Domain Theory of Ferromagnetism
   - Hysteresis Loop in Ferromagnetic Materials
   - Hysteresis Loss in Ferromagnetic Materials

## Magnetic Dipole

A magnetic dipole is a closed circulation of electric current, e.g., a single loop of wire with some constant current through it. The revolution of an electron in the clockwise direction is equivalent to a conventional current in the anticlockwise direction, and the electronic orbit behaves like a magnetic dipole.

The magnetic dipole moment of a current loop is defined as the product of the current and the area enclosed by the loop, i.e.,
$$\vec{m} = IA\hat{n}\tag{1}$$
where $I$ is the current, $A$ is the area of the loop, and $\hat{n}$ is the unit vector normal to the surface enclosed by the loop. The magnetic dipole moment is a vector quantity. The direction of $\vec{m}$ is perpendicular to the plane of the current loop, determined by the right hand rule, in which as the four fingers point along the direction of the current, the thumb gives the direction of the magnetic dipole moment. The SI unit of the magnetic dipole moment $\vec{m}$ is $\mathrm{A\cdot m^2}$.

### Torques and Energy on a Magnetic Dipole placed in a Magnetic Field

A magnetic dipole experiences a torque in a magnetic field, just as an electric dipole does in an electric field. Let us calculate the torque on a rectangular current loop $PQRS$ in a uniform field $\vec{B}$. Center the loop at the origin, and tilt it at an angle $\theta$ from the $z$-axis towards the $y$-axis, and let $\vec{B}$ point in the $z$-direction.

**Figure 1** — Rectangular current loop $PQRS$ tilted at an angle $\theta$ in a uniform magnetic field.

The force on side $PQ$ is
$$\vec{F}_{PQ} = BIa\sin(90^\circ + \theta)\,\hat{i} = BIa\cos\theta\,\hat{i}$$
The force on side $QR$ is
$$\vec{F}_{QR} = BIb\sin 90^\circ\,\hat{j} = BIb\,\hat{j}$$
The force on side $RS$ is
$$\vec{F}_{RS} = -BIa\sin(90^\circ - \theta)\,\hat{i} = -BIa\cos\theta\,\hat{i}$$
The force on side $SP$ is
$$\vec{F}_{SP} = -BIb\sin 90^\circ\,\hat{j} = -BIb\,\hat{j}$$

Here, the forces $\vec{F}_{PQ}$ and $\vec{F}_{RS}$ are equal in magnitude, opposite in direction, and lie on the same line of action. So they cancel each other and just tend to stretch the loop along the $+x$ and $-x$ directions. But the forces $\vec{F}_{QR}$ and $\vec{F}_{SP}$ are equal in magnitude, opposite in direction, and separated by a perpendicular distance $a\sin\theta$, as shown in **Figure 1**. So they constitute a couple. The moment of the couple, i.e., the torque, is given by
$$\tau = \text{magnitude of a force} \times \text{perpendicular distance}$$
$$= F_{QR}\,a\sin\theta$$
$$= BIba\sin\theta$$
$$\Rightarrow \tau = Bm\sin\theta\tag{3}$$
since $m = Iab$.

In vector form it is written as
$$\vec{\tau} = \vec{m}\times\vec{B}\tag{2}$$

Consider the magnetic dipole rotating from angular position $\theta_1$ to $\theta_2$ against the torque due to the magnetic field. The magnetic field exerts the torque to rotate the dipole anticlockwise with angular acceleration, i.e., the direction of the torque exerted by it points along the $+x$-axis. The magnitude of the torque exerted by the magnetic field is $\tau = mB\sin\theta$, pointing along the $+x$-direction. In order to rotate the dipole against this torque, we must exert the same amount of torque at every moment in the $-x$-direction. Now the amount of work done to rotate the dipole from angular position $\theta_1$ to $\theta_2$ against the magnetic field is
$$W = \int_{\theta_1}^{\theta_2}\tau_{\text{app}}\,d\theta = \int_{\theta_1}^{\theta_2} mB\sin\theta\,d\theta = -mB(\cos\theta_2 - \cos\theta_1)$$
This amount of work done results in a change in the potential energy of the dipole between the angular positions $\theta_1$ and $\theta_2$, i.e.,
$$\Delta U = U(\theta_2) - U(\theta_1) = -mB(\cos\theta_2 - \cos\theta_1)$$
Let the initial angular position be chosen at $\theta_1 = \dfrac{\pi}{2} = 90^\circ$ and the final position as $\theta_2 = \theta$; then we have
$$U(\theta) - U\left(\frac{\pi}{2}\right) = -mB\left(\cos\theta - \cos\frac{\pi}{2}\right) = -mB\cos\theta$$
Assuming that the potential at the reference position $\dfrac{\pi}{2}$ is zero, i.e., $U\left(\frac{\pi}{2}\right) = 0$, we get
$$U(\theta) = -mB\cos\theta = -\vec{m}\cdot\vec{B}\tag{4}$$

Equation (4) gives the potential energy stored on the magnetic dipole placed in a magnetic field at any angular position with respect to the angular position $\dfrac{\pi}{2}$, where the potential energy is assumed to be zero. The potential energy is minimum when $\vec{m}$ becomes parallel to $\vec{B}$, i.e., $U_{\min} = -mB$, and maximum when they are antiparallel, i.e., $U_{\max} = +mB$.

## Magnetization

All the substances consist of many tiny dipoles. In the absence of an external magnetic field, these dipoles orient randomly, and hence the total dipole moment is zero. If the substance is placed in a uniform magnetic field, the dipole moments align or tend to align along some directions, and the substance is said to be magnetized.

The magnetic dipole moment per unit volume of a magnetized material is called magnetization ($\vec{M}$). If $d\vec{m}$ is the magnetic dipole moment of an elemental volume $d\tau$ of the magnetized material, then the magnetization is defined as
$$\vec{M} = \frac{d\vec{m}}{d\tau} \Rightarrow d\vec{m} = \vec{M}\,d\tau$$
It is a vector quantity. Its direction is the same as the direction of the net magnetic dipole moment.

### Bound Current and Its Physical Interpretation

Consider a thin slab of thickness $t$ with uniform magnetization $M$, as shown in **Figure 2**. The magnetic dipoles are indicated by tiny current loops. It can be noted from **Figure 2** that all the internal currents cancel each other, but at the edge there is no adjacent loop to do the cancellation. The current left at the edge without cancellation is called the bound current. As a result, the whole slab is equivalent to a single ribbon of current $I$ flowing around the boundary, as shown in **Figure 3**.

**Figure 2** — Thin magnetized slab; the internal currents cancel, leaving a current at the edges.

**Figure 3** — The slab is equivalent to a single ribbon of bound current $I$ flowing around its boundary.

Let us take a tiny loop of area $da$ and thickness $t$, as shown in **Figure 4**. In terms of magnetization, the dipole moment is
$$dm = M\,d\tau = M\,t\,da\tag{5}$$
In terms of the circulatory current,
$$dm = I\,da\tag{6}$$

**Figure 4** — Tiny loop of area $da$ and thickness $t$.

$$\therefore\quad I = Mt\tag{7}$$

The surface current density is defined as the current per unit length perpendicular-to-flow (i.e., the length is taken perpendicular to the direction of flow of the current). The surface bound current density $K_b$ is
$$K_b = \frac{I}{t} = \frac{Mt}{t} = M\tag{8}$$
In vector form,
$$\vec{K}_b = \vec{M}\times\hat{n}\tag{9}$$
where $\hat{n}$ is the unit normal vector drawn outward to the surface. Equation (9) shows that the surface bound current over the top or the bottom of the slab is zero, since $\vec{M}$ and $\hat{n}$ are parallel or antiparallel to each other.

When the magnetization is non-uniform, the internal currents will no longer cancel each other. Consider a magnetized material whose magnetization varies from point to point, i.e., the magnetization is a function of the position coordinate of the tiny dipole.

**Figure 5** — Adjacent chunks with increasing magnetization along (a) the $z$-axis and (b) the $y$-axis.

Let us take two adjacent chunks whose magnetizations are along the positive $z$-axis, as shown in **Figure 5(a)**. The magnetization increases with increase in $y$ (a greater arrow indicates greater magnetization). At the interface where they join, there is a net current in the $+x$-direction, given by
$$I_{+x} = [M_z(y+dy) - M_z(y)]\,dz = \left[\left(M_z(y) + \frac{\partial M_z(y)}{\partial y}\right)dy - M_z(y)\right]dz$$
$$\Rightarrow I_{+x} = \frac{\partial M_z}{\partial y}\,dy\,dz\tag{10}$$
Similarly, if we consider two adjacent chunks with magnetizations along the $y$-axis, as in **Figure 5(b)**, the magnetization increases with increase of $z$. At the interface, there is a net current along the negative $x$-axis, given by
$$I_{-x} = [M_y(z+dz) - M_y(z)]\,dy = \left[\left(M_y(z) + \frac{\partial M_y(z)}{\partial z}\right)dz - M_y(z)\right]dy$$
$$\Rightarrow I_{-x} = \frac{\partial M_y}{\partial z}\,dy\,dz\tag{11}$$
Therefore, the net current along the $x$-axis is
$$I_x = I_{+x} - I_{-x} = \frac{\partial M_z}{\partial y}\,dy\,dz - \frac{\partial M_y}{\partial z}\,dy\,dz = \left(\frac{\partial M_z}{\partial y} - \frac{\partial M_y}{\partial z}\right)dy\,dz\tag{12}$$
The volume bound current density is the current per unit area perpendicular-to-flow (i.e., the area is taken perpendicular to the flow of the current). So the $x$-component of the volume bound current density is
$$(J_b)_x = \frac{I_x}{dy\,dz} = \frac{\partial M_z}{\partial y} - \frac{\partial M_y}{\partial z}\tag{13}$$
Similarly, the $y$- and $z$-components of the volume bound current densities can be calculated by considering the chunks on the $xy$- and $zx$-planes as
$$(J_b)_y = \frac{\partial M_x}{\partial z} - \frac{\partial M_z}{\partial x}\tag{14}$$
and
$$(J_b)_z = \frac{\partial M_y}{\partial x} - \frac{\partial M_x}{\partial y}\tag{15}$$
Therefore, the volume bound current density is
$$\vec{J}_b = (J_b)_x\,\hat{i} + (J_b)_y\,\hat{j} + (J_b)_z\,\hat{k}$$
$$= \left(\frac{\partial M_z}{\partial y} - \frac{\partial M_y}{\partial z}\right)\hat{i} + \left(\frac{\partial M_x}{\partial z} - \frac{\partial M_z}{\partial x}\right)\hat{j} + \left(\frac{\partial M_y}{\partial x} - \frac{\partial M_x}{\partial y}\right)\hat{k}$$
$$= \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\ M_x & M_y & M_z \end{vmatrix}$$
$$\therefore\quad \vec{J}_b = \nabla\times\vec{M}\tag{16}$$

Also, the divergence of the curl of a vector function is always zero:
$$\nabla\cdot(\nabla\times\vec{M}) = 0 \Rightarrow \nabla\cdot\vec{J}_b = 0$$
This is the conservation law of charges, i.e., the effect of magnetization is to establish the bound current $\vec{J}_b = \nabla\times\vec{M}$ within the material and $\vec{K}_b = \vec{M}\times\hat{n}$ on the surface.

## Ampere's Law in Magnetized Materials

We know that the effect of the magnetization is to produce the bound current $\vec{J}_b = \nabla\times\vec{M}$ within the material and $\vec{K}_b = \vec{M}\times\hat{n}$ on the surface. The magnetic field due to the magnetization of the medium is just the field produced by those bound currents. The magnetic field within the material is the field due to the bound currents and the field due to everything else, which is called the free current.

The total current within the material is
$$\vec{J} = \vec{J}_f + \vec{J}_b\tag{1}$$
Now the differential form of Ampere's law reads
$$\nabla\times\vec{B} = \mu_0\vec{J}$$
$$\nabla\times\vec{B} = \mu_0(\vec{J}_f + \vec{J}_b) = \mu_0(\vec{J}_f + \nabla\times\vec{M})$$
$$\Rightarrow \nabla\times\left(\frac{\vec{B}}{\mu_0} - \vec{M}\right) = \vec{J}_f$$
$$\Rightarrow \nabla\times\vec{H} = \vec{J}_f\tag{2}$$
where
$$\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}\tag{3}$$
is called the magnetic field strength ($\vec{B}$ should actually be called the magnetic field induction).

Taking the surface integral of equation (2), we get
$$\int_S(\nabla\times\vec{H})\cdot d\vec{a} = \int_S\vec{J}_f\cdot d\vec{a}$$
Applying Stokes' theorem to the left hand side,
$$\oint_L\vec{H}\cdot d\vec{l} = I_{f,\text{enc}}\tag{4}$$
where $I_{f,\text{enc}} = \int_S\vec{J}_f\cdot d\vec{a}$ is the total free current enclosed by the Amperian loop drawn around the free current. Here the magnetic field strength $\vec{H}$ refers only to the free current $I_f$.

### Example: The Field $\vec{H}$ Inside and Outside a Current-Carrying Rod

**Figure 1** — Copper rod of radius $R$ carrying a uniformly distributed free current $I$.

**Question.** A long copper rod of radius $R$ carries a uniformly distributed (free) current $I$ (**Figure 1**). Find $\vec{H}$ inside and outside the rod.

**Solution.** To find $\vec{H}$ at a distance $s$ from the axis of the rod, consider a coaxial Amperian circle of radius $s$, as shown in **Figure 1**.

For the outside, $s > R$:

The total free current enclosed by the loop is $I_f = I$. According to Ampere's law in a material medium,
$$\oint\vec{H}\cdot d\vec{l} = I_{f,\text{enc}} \Rightarrow H(2\pi s) = I \Rightarrow \vec{H}_{\text{out}} = \frac{I}{2\pi s}\,\hat{l}$$

For the inside, $s < R$:

The total free current enclosed by the loop is
$$I_{f,\text{enc}} = \frac{I\pi s^2}{\pi R^2} = \frac{Is^2}{R^2}$$
Now the integral form of Ampere's law in a material medium gives
$$\oint\vec{H}\cdot d\vec{l} = I_{f,\text{enc}} \Rightarrow H(2\pi s) = \frac{Is^2}{R^2} \Rightarrow \vec{H}_{\text{in}} = \frac{Is}{2\pi R^2}\,\hat{l}$$

## Magnetic Susceptibility ($\chi_m$) and Permeability ($\mu$)

For most substances, the magnetization is directly proportional to the magnetizing field strength $\vec{H}$, provided $\vec{H}$ is not too large, i.e.,
$$\vec{M} \propto \vec{H} \Rightarrow \vec{M} = \chi_m\vec{H}\tag{5}$$
The materials which obey equation (5) are called linear materials, and the constant of proportionality $\chi_m$ is called the magnetic susceptibility.

- If $\chi_m$ is negative, the material is diamagnetic, and the magnetic induction is weakened by the presence of the material.
- If $\chi_m$ is small positive, the material is paramagnetic, and the magnetic induction is strengthened by the presence of the material.
- If $\chi_m$ is large positive, the material is ferromagnetic. However, in ferromagnetic materials $\vec{M}$ is not accurately proportional to $\vec{H}$, and so $\chi_m$ is not constant.

Also we have
$$\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M} = \frac{\vec{B}}{\mu_0} - \chi_m\vec{H}$$
$$\Rightarrow \vec{B} = \mu_0(1 + \chi_m)\vec{H}$$
$$\Rightarrow \vec{B} = \mu\vec{H}\tag{6}$$
where
$$\mu = \mu_0(1 + \chi_m)\tag{7}$$
is called the permeability of the medium. Equation (6) shows that, in a linear medium, the magnetic field induction $\vec{B}$ is also proportional to the magnetizing field. If $\vec{B}_0$ is the magnetic field induction in free space, then the ratio
$$\frac{B}{B_0} = \frac{\mu}{\mu_0} = 1 + \chi_m\tag{8}$$
is called the relative permeability of the medium ($\mu_r$). Obviously,
$$\mu_r = 1 + \chi_m\tag{9}$$

We may also classify magnetic materials in terms of the relative permeability $\mu_r$:

- $\mu_r < 1 \rightarrow$ Diamagnetic
- $\mu_r > 1 \rightarrow$ Paramagnetic
- $\mu_r \gg 1 \rightarrow$ Ferromagnetic

For vacuum there is no medium to be magnetized, so $\chi_m = 0$ and $\mu = \mu_0$. Hence, the magnetic induction in vacuum is
$$\vec{B}_0 = \mu_0\vec{H}$$
i.e., $\mu = \mu_0$. So $\mu_0$ is called the permeability of free space.

Also
$$\vec{J}_b = \nabla\times\vec{M} = \nabla\times(\chi_m\vec{H}) = \chi_m(\nabla\times\vec{H})$$
$$\Rightarrow \vec{J}_b = \chi_m\vec{J}_f\tag{10}$$
Therefore, the volume bound current density in a linear medium is proportional to the volume free current density. Unless free current actually flows through the material, all bound current will be at the surface.

## Dia-, Para- and Ferromagnetic Materials

### Diamagnetic Materials

Those substances which, when placed in a magnetizing field, are magnetized feebly in the direction opposite to the applied field are called diamagnetic substances. The diamagnetic property arises due to the orbital motion of the electron. When the magnetic field is applied, the orbital dipole moment changes in such a way that the atoms of the material acquire a net dipole moment in the direction opposite to the applied field, and hence the material is said to be magnetized. The substances whose outermost orbit has an even number of electrons purely exhibit the diamagnetic behavior. Since the electrons have spins opposite to each other, the net magnetic moment of each atom in the absence of a magnetic field is zero. If these materials are brought close to the pole of a powerful electromagnet, they are repelled away from the magnet.

Diamagnetic materials have a small negative susceptibility which is practically independent of temperature. The relative permeability is less than unity.

For example: Copper, Silver, Bismuth, Antimony, gold, water, alcohol, quartz, H$_2$, CO$_2$, N$_2$, etc.

### Paramagnetic Materials

Those substances which, when placed in a magnetizing field, are magnetized feebly in the direction of the magnetizing field are called paramagnetic substances. This property arises due to the spin motion of the electrons. The substances whose outermost orbit has an odd number of electrons can exhibit the paramagnetic nature. If these substances are brought close to the pole of a powerful electromagnet, they get attracted towards the magnet.

Paramagnetic materials have a small positive susceptibility which depends on temperature, and the relative permeability is slightly greater than unity.

For example: Platinum, aluminum, chromium, manganese, copper sulfate, liquid oxygen, solutions of salts of iron and nickel.

### Curie Law

The temperature dependence of many paramagnetic materials is governed by the experimentally found Curie law, which states that the susceptibility $\chi_m$ is inversely proportional to the absolute temperature $T$, i.e.,
$$\chi_m \propto \frac{1}{T} \Rightarrow \chi_m = \frac{C}{T}$$
where $C$ is called the Curie constant (in kelvin).

### Ferromagnetic Materials

Those substances which, when placed in a magnetizing field, are strongly magnetized in the direction of the magnetizing field are called ferromagnetic substances. This property is found in substances which are generally like paramagnetic materials. If these substances are brought close to the pole of a powerful electromagnet, they are strongly attracted towards the magnet.

Ferromagnetic materials have a large positive susceptibility, and the relative permeability is much greater than unity (a few thousands).

For example: Iron, Nickel, Cobalt, gadolinium, and their alloys.

### Domain Theory of Ferromagnetism

A magnetic domain is a region within a magnetic material which has uniform magnetization. In 1907 Weiss proposed a domain theory to explain ferromagnetism. According to this theory, a single crystal of a ferromagnetic solid consists of a large number of small regions, and each region is spontaneously magnetized to the saturation extent, called a domain, as shown in **Figure 2**. The magnetization directions of different domains of the specimen are random, so that the resulting magnetization of the material is zero in the absence of an external magnetic field.

**Figure 2** — Domains of spontaneous magnetization in a ferromagnetic crystal.

When the magnetic field strength is applied, the domains align or tend to align along the direction of the field, and hence the material is said to be magnetized. During this process the magnetization increases in two ways: either (i) the shifting of the domain walls of those domains whose magnetization is already along the direction of the field, or (ii) the rotation of the entire domain, when the field is sufficiently large, as shown in **Figure 3**.

**Figure 3** — Alignment of domains under the applied field.

### Hysteresis Loop in Ferromagnetic Materials

**Figure 4** — Hysteresis loop of a ferromagnetic material.

When a magnetic material is subjected to a gradually increasing magnetizing field, the intensity of magnetization $M$ increases with the increase in the strength of the magnetizing field $H$ along the path $OA$. This curve is known as the virgin or initial magnetization curve.

At $H = H_0$ the intensity of magnetization assumes a steady value $M_{\max}$. The magnetic material cannot be magnetized more strongly than this, and at this stage the material is said to have reached the magnetic saturation limit.

Now if the magnetizing field $H$ is gradually decreased, the intensity of magnetization $M$ will not decrease along the same path $OA$ but will decrease along the path $AB$, such that when $H$ becomes zero, $M$ will not become zero but has the definite value $M = OB$. The value of the intensity of magnetization of the magnetic material even when the magnetizing field is reduced to zero is called its retentivity or remanence or residual magnetism.

Now if the direction of the magnetizing field is reversed, the intensity of magnetization follows the path $BC$ until it becomes zero at $C$. Thus, to reduce the residual magnetism to zero, a magnetizing field equal to the value $OC$ has to be applied in the reverse direction. The value of the reverse magnetizing field required to reduce the residual magnetism to zero is called the coercive force or coercivity.

When the magnetizing field is further increased in the reverse direction, the intensity of magnetization increases along the path $CD$ and acquires the magnetic saturation limit at point $D$. If the magnetizing field $H$ is now reduced to zero, the intensity of magnetization $M$ follows the path $DE$. Finally, if $H$ is increased in the original direction, $M$ follows the path $EFA$, and a closed curve $ABCDEFA$ is obtained, as shown in **Figure 4**. This closed curve is known as the hysteresis loop. On repeating the process, the same closed curve is obtained again and again, but never the portion $OA$. It is seen that $M$ always lags behind $H$. This lagging of $M$ behind $H$ is called hysteresis.

The shape of this loop varies from one material to another. Some ferrites have an almost rectangular hysteresis loop. These ferrites are used in digital computers as magnetic information storage devices. The area of a hysteresis loop gives the energy loss (hysteresis loss) per unit volume during one cycle of the periodic magnetization of the ferromagnetic materials. This energy loss is in the form of heat. It is therefore desirable that the materials used in electronic generators, motors, and transformers should have tall but narrow hysteresis loops so that the hysteresis losses are minimal.

Permanent magnets (hard magnetic materials) are devices which retain their magnetic field indefinitely; i.e., their coercivity and the area of the hysteresis loop are large.

### Hysteresis Loss in Ferromagnetic Materials

The amount of energy lost (in the form of heat) per unit volume of a ferromagnetic substance when the substance undergoes one cycle of magnetization is known as the hysteresis loss.

Consider a unit volume of a ferromagnetic substance. Let $\vec{m}_i$ be the magnetic moment of the $i$th atomic dipole which makes an angle $\theta_i$ with the field $H$. Only the component of $\vec{m}_i$ along the direction of the field contributes to the magnetization. If $N$ is the number of atomic dipoles in the given unit volume of the substance, then the magnetization is
$$M = \sum_{i=1}^{N} m_i\cos\theta_i\tag{11}$$
Differentiating both sides,
$$dM = -\sum_{i=1}^{N} m_i\sin\theta_i\,d\theta_i\tag{12}$$

Each dipole experiences a torque, and the work done by the torques on all dipoles in one complete cycle of magnetization is the hysteresis loss. Therefore,
$$\text{hysteresis loss} = \oint\left(\sum_{i=1}^{N}\tau_i\,d\theta_i\right) = \oint\left(\sum_{i=1}^{N} m_i B\sin\theta_i\,d\theta_i\right) = B\oint\left(\sum_{i=1}^{N} m_i\sin\theta_i\,d\theta_i\right)$$
Using equation (12), $\sum_{i=1}^{N} m_i\sin\theta_i d\theta_i = -dM$, so that
$$\text{hysteresis loss} = -B\oint dM = -\oint B\,dM$$

We know that
$$H = \frac{B}{\mu_0} - M \Rightarrow dH = \frac{1}{\mu_0}\,dB - dM \Rightarrow dM = \frac{1}{\mu_0}\,dB - dH$$
Therefore,
$$\text{hysteresis loss} = -\oint B\,dM = -\oint B\left(\frac{1}{\mu_0}\,dB - dH\right) = -\frac{1}{\mu_0}\oint B\,dB + \oint B\,dH$$
Since $\oint B\,dB = 0$ (because $B\,dB = \frac{1}{2}d(B^2)$ integrates to zero over the closed loop, so the area enclosed is zero),
$$\text{hysteresis loss} = \oint B\,dH = \text{area enclosed by the } B\text{-}H \text{ loop}$$