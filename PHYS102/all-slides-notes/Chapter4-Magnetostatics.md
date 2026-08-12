# Magnetostatics

## Outline

1. Introduction
2. The magnetic force
   - Cyclotron motion (the first modern particle accelerator)
   - Cycloid motion
3. Magnetic flux
4. Line, surface and volume current density
5. Continuity equation
6. Force on a current-carrying conductor
7. The magnetic field of a steady current (Biot–Savart law)
   - Applications of the Biot–Savart law
8. The divergence of $\vec{B}$, i.e. $\nabla\cdot\vec{B}$
9. Ampère's law and the curl of a magnetic field
   - Applications of Ampère's law
10. Magnetic vector potential
    - Magnetic flux in terms of the vector potential
11. Problems

## Introduction

Stationary charges (charges at rest) produce a constant electric field — *Electrostatics*. Current at a point is defined as the flow of charge per unit time, given by

$$I=\frac{dq}{dt}$$

A steady current (one that remains constant with respect to time) produces a constant magnetic field — *Magnetostatics*.

## The Magnetic Force

The magnetic force on a charge $Q$ moving with velocity $\vec{v}$ in a magnetic field $\vec{B}$ is

$$\vec{F}_m = Q(\vec{v}\times\vec{B}) \tag{1}$$

The direction of the force $\vec{F}_m$ is that of the vector $\vec{v}\times\vec{B}$, i.e. perpendicular to the plane containing $\vec{v}$ and $\vec{B}$. Thus the force $\vec{F}_m$ is always a side-way force.

**Special cases:**

1. The magnetic force acting on a charged particle is maximum when $\vec{v}\perp\vec{B}$, i.e. $\theta=90^\circ$. The maximum force is $F_m=QvB$.
2. The magnetic force is minimum (i.e. $F_m=0$) when
   - (a) $Q=0$ — the particle is uncharged,
   - (b) $\vec{v}=0$ — the particle is at rest,
   - (c) $\theta=0^\circ$ or $180^\circ$ — $\vec{v}$ is parallel or anti-parallel to $\vec{B}$.

If $Q=1\ \mathrm{C}$, $v=1\ \mathrm{m/s}$ and $\sin\theta=1$, then $\vec{F}_m=\vec{B}$. The force experienced by a unit test charge projected with unit velocity is called the *strength of the magnetic field*, or *magnetic induction*. It is a vector quantity denoted by $\vec{B}$.

The S.I. unit of $\vec{B}$ is

$$\frac{\mathrm{N}}{\mathrm{C(m/s)}} = \mathrm{N}\cdot\mathrm{A}^{-1}\cdot\mathrm{m}^{-1}$$

This is given a special name: $\mathrm{Wb}\cdot\mathrm{m}^{-2}$ or *Tesla* (T). The C.G.S. unit is *gauss* (G), with $1\ \mathrm{G}=10^{-4}\ \mathrm{T}$.

The magnetic field is defined as the space around a magnet or a current-carrying conductor. More precisely, the space around a magnet or a current-carrying conductor in which the needle of a compass gets influenced is called a magnetic field.

If a charged particle moves through a region in which both an electric and a magnetic field are present, then the resultant force is given by

$$\vec{F}=\vec{F}_e+\vec{F}_m=Q\vec{E}+Q(\vec{v}\times\vec{B})=Q\left(\vec{E}+\vec{v}\times\vec{B}\right) \tag{2}$$

This force $\vec{F}$ is known as the *Lorentz force*, and the relation is the *Lorentz relation*.

**Magnetic force does no work:**

$$W_m=\int dW_m=\int \vec{F}_m\cdot d\vec{l}=Q\int\left(\vec{v}\times\vec{B}\right)\cdot\vec{v}\,dt=0$$

since $\vec{v}\cdot(\vec{v}\times\vec{B})=0$.

### Cyclotron Motion (The First Modern Particle Accelerator)

Let a charge $Q$ of mass $m$ and velocity $\vec{v}$ move in a field $\vec{B}$, and let $\theta$ be the angle between $\vec{v}$ and $\vec{B}$. We resolve $\vec{v}$ into

$$v_1=v\cos\theta \quad\text{(parallel to }\vec{B}\text{)},\qquad v_2=v\sin\theta \quad\text{(perpendicular to }\vec{B}\text{)}$$

Due to the component $v\sin\theta$, the charge $Q$ moves in a circular path, and due to the component $v\cos\theta$ it travels along the field direction. So the resultant motion is a *helix* along $\vec{B}$.

For circular motion with radius $r$ and velocity $v_2$, the magnetic force provides the centripetal force:

$$Qv_2 B=\frac{mv_2^2}{r}\ \Longrightarrow\ r=\frac{mv_2}{QB} \tag{3}$$

Therefore the momentum of the charged particle is $p=mv=QBr$. Equation (3) shows that the radius of the circular path is proportional to the velocity of the charged particle. This equation is also known as the *cyclotron formula*, because it describes the motion of a particle in a cyclotron.

When $\vec{v}$ and $\vec{B}$ are perpendicular to each other ($\theta=90^\circ$),

$$\omega=\frac{v}{r}=\frac{QB}{m}=2\pi f\ \Longrightarrow\ f=\frac{QB}{2\pi m}$$

This relation shows that the frequency of revolution is independent of the velocity of the charged particle.

### Cycloid Motion

Suppose $\vec{E}$ points in the Z-direction and $\vec{B}$ in the X-direction as shown in the figure. A particle at rest is released from the origin. Initially the magnetic force is zero and the electric field accelerates the charge in the Z-direction. As it picks up speed, a magnetic force develops which pulls the charge around to the right. The faster it goes, the stronger $\vec{F}_m$ becomes. As a result, it curves the particle back around toward the axis. At this point the charge is moving against the electric force, so it begins to slow down; the magnetic force then decreases and the electric force takes over, bringing the charge to rest at point 'a' in Figure 1. The process is repeated, and the entire path looks as shown — a *cycloid*.

**Figure 1:** Cycloid

## Magnetic Flux

The elemental magnetic flux $d\Phi_m$ across an elemental surface area $d\vec{a}$ is defined as

$$d\Phi_m=\vec{B}\cdot d\vec{a}$$

Therefore, the total magnetic flux $\Phi_m$ across a surface $S$ is given by

$$\Phi_m=\int_S \vec{B}\cdot d\vec{a}$$

If $\vec{B}$ is uniform and normal to the surface $S$, then

$$\Phi_m=\int_S B\,da=BS$$

Thus magnetic flux is defined as the number of lines of force passing perpendicularly through the surface.

## Line, Surface and Volume Current Densities

**Line current.** Consider the charges flowing along a line. The line current density is simply the current along the line, i.e.

$$I=\frac{dq}{dt}=\frac{dq}{dl}\,\frac{dl}{dt}=\lambda v$$

where $dl_\parallel$ is along the line.

**Surface current (ribbon).** Consider charges flowing over a surface with velocity $\vec{v}$ (as shown in Figure 2). The surface current density is defined as the current per unit width perpendicular to the flow. If the current in the ribbon of Figure 2 is $dI$ within the elemental width $dl_\perp$, then the surface current density is

$$K=\frac{dI}{dl_\perp}$$

Now $dI/dt=dq/dt$ and $dl_\parallel/dt=v$, so

$$K=\frac{dI}{dl_\perp}\,\frac{dl_\parallel}{dt}=...=\sigma v$$

The surface current density can also be written as

$$\vec{K}=\sigma\vec{v}$$

**Volume current.** When the charge is flowing in a three-dimensional region, the volume current density is defined as the current per unit area perpendicular to the flow (Figure 3). Consider a tube of elemental cross-sectional area $da_\perp$ running parallel to the flow. If the current in this tube is $dI$, the volume current density is

$$J=\frac{dI}{da_\perp}$$

Since $I=\lambda v$, $\vec{K}=\sigma\vec{v}$, $\vec{J}=\rho\vec{v}$, the volume current density can also be written as

$$\vec{J}=\rho\vec{v}$$

> **Note:** $I=\lambda v$, $\vec{K}=\sigma\vec{v}$, $\vec{J}=\rho\vec{v}$.

**Figure 2:** Line/surface current   •   **Figure 3:** Volume current

## Continuity Equation

Suppose a tube of volume $V$ with an elemental cross-section $da_\perp$ running parallel to the flow, as shown in Figure 3. The small amount of current when charges pass through a small area is

$$dI=\vec{J}\cdot d\vec{a}=\vec{J}\cdot\hat{n}\,da_\perp$$

Here $\hat{n}$ is the unit vector normal to the cross-section. The total current may be obtained by integrating $dI$ over the total surface:

$$I=\int_S \vec{J}\cdot\hat{n}\,da$$

Also we know

$$I=\frac{dQ}{dt}=\frac{d}{dt}\int_V\rho\,d\tau=\int_V\frac{\partial\rho}{\partial t}d\tau$$

where we have taken the partial derivative with respect to time. From the law of conservation of charge, the rate at which charge leaves the volume is at the cost of the rate of decrease of charge inside the volume:

$$\oint_S \vec{J}\cdot\hat{n}\,da=-\frac{d}{dt}\int_V\rho\,d\tau$$

$$\int_V\nabla\cdot\vec{J}\,d\tau=-\int_V\frac{\partial\rho}{\partial t}d\tau$$

$$\int_V\left(\nabla\cdot\vec{J}+\frac{\partial\rho}{\partial t}\right)d\tau=0$$

$$\therefore\quad \nabla\cdot\vec{J}+\frac{\partial\rho}{\partial t}=0 \tag{4}$$

This equation gives the relation between the charge density and the current density. It is the precise mathematical statement of local charge conservation; it is called the *continuity equation*. If the charge density is independent of time, we get the steady current. In this case the continuity equation becomes

$$\nabla\cdot\vec{J}=0$$

## Force on a Current-Carrying Conductor

Suppose a current-carrying conductor of length $l$ and cross-sectional area $A$ is carrying a current $I$, as shown in Figure 4, with a magnetic field $\vec{B}$ perpendicular to the length of the wire. Let $\vec{v}_1$ be the velocity of positive charges $q_1$; then the force on them due to the magnetic field is $q_1(\vec{v}_1\times\vec{B})$. If there are $n_1$ numbers of positive charges per unit volume, then the total force on them due to the magnetic field is

$$\vec{F}_1=(n_1Al)\,q_1(\vec{v}_1\times\vec{B})$$

Similarly, for $n_2$ numbers of negative charges per unit volume with velocity $\vec{v}_2$, the force on them is

$$\vec{F}_2=(n_2Al)\,q_2(\vec{v}_2\times\vec{B})$$

Since $q_1$ and $q_2$ have opposite signs and $\vec{v}_1$ and $\vec{v}_2$ have opposite directions, $\vec{F}_2$ has the same direction as $\vec{F}_1$. Thus the total force on both the charges (i.e. on the conductor) is

$$\vec{F}=\vec{F}_1+\vec{F}_2=(n_1Al)q_1(\vec{v}_1\times\vec{B})+(n_2Al)q_2(\vec{v}_2\times\vec{B})$$

$$=(Al)(n_1q_1\vec{v}_1+n_2q_2\vec{v}_2)\times\vec{B}=Al(\vec{J}\times\vec{B})$$

$$\therefore\quad \vec{F}=I(\vec{l}\times\vec{B})$$

This is the required expression for the force.

**Figure 4**

### Magnetic Force on a System of Moving Point Charges

For a discrete system of charges,

$$\vec{F}_m=\sum_{i=1}^{n}q_i(\vec{v}_i\times\vec{B})$$

For a continuous system of charges,

$$\vec{F}_m=\int dq\,(\vec{v}\times\vec{B})$$

where $\vec{v}$ is the velocity of the elemental charge $dq$ in the magnetic field $\vec{B}$.

The magnetic force on a **line current** is

$$\vec{F}_m=\int\lambda\,dl\,(\vec{v}\times\vec{B})=\int\lambda\vec{v}\,d\vec{l}\times\vec{B}=\int I\,d\vec{l}\times\vec{B}$$

The magnetic force on a **surface current** is

$$\vec{F}_m=\int\sigma\,da\,(\vec{v}\times\vec{B})=\int(\sigma\vec{v}\times\vec{B})\,da=\int\vec{K}\times\vec{B}\,da$$

The magnetic force on a **volume current** is

$$\vec{F}_m=\int\rho\,d\tau\,(\vec{v}\times\vec{B})=\int(\rho\vec{v}\times\vec{B})\,d\tau=\int\vec{J}\times\vec{B}\,d\tau$$

## The Magnetic Field of a Steady Current (Biot–Savart Law)

**Figure 5**

The magnetic field of a steady line current at a point $P$ with position vector $\vec{r}$ is given by the Biot–Savart law:

$$\vec{B}(\vec{r})=\frac{\mu_0}{4\pi}\int\frac{I\,d\vec{l}'\times\hat{r}}{r^2}=\frac{\mu_0}{4\pi}\int\frac{I\,d\vec{l}'\times\vec{r}}{r^3} \tag{5}$$

The integration is taken along the current path, in the direction of flow; $d\vec{l}'$ is an elemental length along the wire, and $\vec{r}$ is the separation vector from the source to the point $P$, as shown in Figure 5. The constant $\mu_0$ is called the *permeability of free space*; its value is

$$\mu_0=4\pi\times10^{-7}\ \mathrm{N}\cdot\mathrm{A}^{-2}$$

For an elemental segment $d\vec{l}'$ of the wire, the elemental magnetic field at $P$ is

$$d\vec{B}=\frac{\mu_0}{4\pi}\frac{I\,d\vec{l}'\times\vec{r}}{r^3} \tag{6}$$

Since $I\,d\vec{l}\equiv\vec{K}\,da\equiv\vec{J}\,d\tau$ \tag{7}, the Biot–Savart law, Eq. (5), can be written in terms of surface and volume current densities as

$$\vec{B}=\frac{\mu_0}{4\pi}\int\frac{I\,d\vec{l}'\times\hat{r}}{r^2}=\frac{\mu_0}{4\pi}\int\frac{\vec{K}\times\hat{r}}{r^2}\,da'=\frac{\mu_0}{4\pi}\int\frac{\vec{J}\times\hat{r}}{r^2}\,d\tau' \tag{8}$$

### Applications of the Biot–Savart Law

**1. The magnetic field at a distance $r$ from a long straight wire carrying a steady current $I$.**

**Solution.** Suppose a straight conductor $AB$ carrying a current $I$ is placed along the X-axis, as shown in Figure 6, with the current flowing along the +ve X-direction. Let $dx'$ be an elemental length with coordinate $(x',0,0)$. The coordinates of the ends $A$ and $B$ are respectively $(x_1,0,0)$ and $(x_2,0,0)$. Let $P(0,r,0)$ be a point on the Y-axis at a distance $r$ from the origin.

The separation vector of $P$ from $dx'$ is

$$\vec{r}=-x'\hat{i}+r\hat{j},\qquad \lvert\vec{r}\rvert=\sqrt{x'^2+r^2}$$

and

$$d\vec{l}'\times\vec{r}=(dx'\hat{i})\times(-x'\hat{i}+r\hat{j})=r\,dx'\hat{k}$$

Now, the magnetic field at $P$ due to the current on $dx'$ is

$$d\vec{B}=\frac{\mu_0}{4\pi}\frac{I\,d\vec{l}'\times\vec{r}}{r^3}=\frac{\mu_0 I}{4\pi}\frac{r\,dx'}{(r^2+x'^2)^{3/2}}\,\hat{k}$$

From Figure 6, $x'=r\tan\theta$ and $dx'=r\sec^2\theta\,d\theta$, and hence

$$d\vec{B}=\frac{\mu_0 I}{4\pi}\frac{r^2\sec^2\theta\,d\theta}{r^3\sec^3\theta}\,\hat{k}=\frac{\mu_0 I}{4\pi r}\cos\theta\,d\theta\,\hat{k} \tag{9}$$

**Figure 6**

The net magnetic field at $P$ can be calculated by integrating Eq. (9) from the limit $\theta_1$ to $\theta_2$, as shown in Figure 6, i.e.

$$\vec{B}=\frac{\mu_0 I}{4\pi r}\int_{\theta_1}^{\theta_2}\cos\theta\,d\theta\,\hat{k}=\frac{\mu_0 I}{4\pi r}(\sin\theta_2-\sin\theta_1)\,\hat{k} \tag{10}$$

This shows that the magnetic field points along the direction of the Z-axis. Similarly, if $P$ lies at a distance $r$ on the Z-axis, then the magnetic field points along the $-Y$ direction. In general, the magnetic field circulates around the current-carrying conductor according to the right-hand thumb rule. Considering $\hat{\phi}$ as the unit vector tangential to the field line, Eq. (10) can be conveniently written as

$$\vec{B}=\frac{\mu_0 I}{4\pi r}(\sin\theta_2-\sin\theta_1)\,\hat{\phi} \tag{11}$$

If the straight conductor is symmetric about the YZ-plane, then $\theta_1=-\theta_0$ and $\theta_2=\theta_0$, and Eq. (11) reduces to

$$\vec{B}=\frac{\mu_0 I}{4\pi r}\left[\sin\theta_0-\sin(-\theta_0)\right]\hat{k}=\frac{\mu_0 I}{4\pi r}2\sin\theta_0\,\hat{k}=\frac{\mu_0 I}{2\pi r}\sin\theta_0\,\hat{\phi}$$

If the straight conductor is infinitely long on both sides with its center at the origin, then $\theta_2=+\pi/2$ and $\theta_1=-\pi/2$, and Eq. (11) gives

$$\vec{B}=\frac{\mu_0 I}{4\pi r}\left(\sin\frac{\pi}{2}-\sin\left(-\frac{\pi}{2}\right)\right)\hat{k}=\frac{\mu_0 I}{2\pi r}\,\hat{\phi}$$

**2. The magnetic field at a distance $z$ above the centre of a circular loop of radius $R$ carrying a steady current $I$.**

**Solution.** Consider a circular loop of radius $R$ carrying a steady current $I$ in the XY-plane with its center at the origin $O$, as shown in Figure 7. $P(0,0,z)$ is a point on the Z-axis at a distance $z$ from the origin. Take an elemental vector length $d\vec{l}'$ on the ring with coordinates $(x',y',0)$ such that

$$x'=R\cos\phi,\qquad y'=R\sin\phi$$

The elemental vector length $d\vec{l}'$ can be written as

$$d\vec{l}'=dx'\hat{i}+dy'\hat{j}=(-R\sin\phi\,d\phi\,\hat{i}+R\cos\phi\,d\phi\,\hat{j})=(-\sin\phi\,\hat{i}+\cos\phi\,\hat{j})R\,d\phi$$

The separation vector of $P$ from $d\vec{l}'$ is

$$\vec{r}=-x'\hat{i}-y'\hat{j}+z\hat{k}=-R\cos\phi\,\hat{i}-R\sin\phi\,\hat{j}+z\hat{k}$$

and

$$|\vec{r}|=\sqrt{R^2+z^2}$$

**Figure 7**

Again,

$$d\vec{l}'\times\vec{r}=\left[(-\sin\phi\,\hat{i}+\cos\phi\,\hat{j})R\,d\phi\right]\times(-R\cos\phi\,\hat{i}-R\sin\phi\,\hat{j}+z\hat{k})$$

$$=R\,d\phi(R\sin^2\phi\,\hat{k}+z\sin\phi\,\hat{j}+R\cos^2\phi\,\hat{k}+z\cos\phi\,\hat{i})=R(z\cos\phi\,d\phi\,\hat{i}+z\sin\phi\,d\phi\,\hat{j}+R\,d\phi\,\hat{k})$$

The magnetic field at $P$ due to the current on the elemental length $d\vec{l}'$ is

$$d\vec{B}=\frac{\mu_0}{4\pi}\frac{I\,d\vec{l}'\times\vec{r}}{r^3}=\frac{\mu_0IR}{4\pi(R^2+z^2)^{3/2}}\left(z\cos\phi\,d\phi\,\hat{i}+z\sin\phi\,d\phi\,\hat{j}+R\,d\phi\,\hat{k}\right)$$

The magnetic field at $P$ due to the current through the whole loop is

$$\vec{B}=\frac{\mu_0IR}{4\pi(R^2+z^2)^{3/2}}\left[z\!\int_0^{2\pi}\!\cos\phi\,d\phi\,\hat{i}+\,z\!\int_0^{2\pi}\!\sin\phi\,d\phi\,\hat{j}+\,R\!\int_0^{2\pi}\!d\phi\,\hat{k}\right]$$

$$=\frac{\mu_0IR}{4\pi(R^2+z^2)^{3/2}}\left[0+0+R\,2\pi\,\hat{k}\right]=\frac{\mu_0IR^2 2\pi}{4\pi(R^2+z^2)^{3/2}}\,\hat{k}$$

Hence,

$$\vec{B}=\frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}\,\hat{k} \tag{12}$$

If there are $N$ circular current loops of the same radius, the magnetic field at $P$ is

$$\vec{B}=\frac{\mu_0 I R^2 N}{2(R^2+z^2)^{3/2}}\,\hat{k} \tag{13}$$

At the centre of the circular loop, $z=0$ and

$$\vec{B}=\begin{cases}
\displaystyle\frac{\mu_0 I}{2R}\,\hat{k}, & \text{for a single loop}\\[6pt]
\displaystyle\frac{\mu_0 IN}{2R}\,\hat{k}, & \text{for } N \text{ turns}
\end{cases} \tag{14}$$

## The Divergence of $\vec{B}$, i.e. $\nabla\cdot\vec{B}$

From the Biot–Savart law, the magnetic field at a point $P(x,y,z)$ in terms of the volume current density is given by

$$\vec{B}=\frac{\mu_0}{4\pi}\int_V \frac{\vec{J}\times\vec{r}}{r^3}\,d\tau' \tag{1}$$

Here the integration is taken over the source coordinates $(x',y',z')$. $\vec{J}$ is purely a function of the source coordinates, and the separation vector $\vec{r}$ is a function of both $(x,y,z)$ and $(x',y',z')$. After integration, $\vec{B}$ comes out to be purely a function of the field coordinates $(x,y,z)$.

Now taking the divergence of $\vec{B}$ with respect to $(x,y,z)$, we get

$$\nabla\cdot\vec{B}=\nabla\cdot\left(\frac{\mu_0}{4\pi}\int_V\frac{\vec{J}\times\vec{r}}{r^3}\,d\tau'\right)=\frac{\mu_0}{4\pi}\int_V\nabla\cdot\left(\frac{\vec{J}\times\vec{r}}{r^3}\right)d\tau' \tag{2}$$

Using the product rule $\nabla\cdot(\vec{A}\times\vec{B})=\vec{B}\cdot(\nabla\times\vec{A})-\vec{A}\cdot(\nabla\times\vec{B})$, we can have

$$\nabla\cdot\left(\frac{\vec{J}\times\vec{r}}{r^3}\right)=\frac{\vec{r}}{r^3}\cdot\left(\nabla\times\vec{J}\right)-\vec{J}\cdot\left(\nabla\times\frac{\vec{r}}{r^3}\right)$$

Since $\vec{J}$ depends only on the source coordinate and the curl on it is taken over the field coordinate, $\nabla\times\vec{J}=0$. Thus

$$\nabla\cdot\left(\frac{\vec{J}\times\vec{r}}{r^3}\right)=-\vec{J}\cdot\left(\nabla\times\frac{\vec{r}}{r^3}\right)$$

Using $\nabla\left(\frac{1}{r}\right)=-\frac{\vec{r}}{r^3}$, we have

$$\nabla\cdot\left(\frac{\vec{J}\times\vec{r}}{r^3}\right)=\vec{J}\cdot\left(\nabla\times\nabla\left(\frac{1}{r}\right)\right)$$

As the curl of a gradient is always zero,

$$\nabla\times\nabla\left(\frac{1}{r}\right)=0$$

∴

$$\nabla\cdot\left(\frac{\vec{J}\times\vec{r}}{r^3}\right)=0$$

Hence Eq. (2) reduces to

$$\nabla\cdot\vec{B}=0 \tag{3}$$

This shows that the magnetic field is always divergence-less, i.e. *solenoidal*. There is no point source which can produce the magnetic field, i.e. the *magnetic monopole does not exist*.

Taking the volume integral in Eq. (3), we get

$$\int_V\nabla\cdot\vec{B}\,d\tau=0$$

Applying the Gauss divergence theorem, we can have

$$\oint_S \vec{B}\cdot d\vec{a}=0 \tag{4}$$

Therefore, the surface integral of a magnetic field over a closed surface, i.e. the total flux through the closed surface, is always zero.

## Ampère's Law and the Curl of a Magnetic Field

Ampère's law states that "the line integral of the magnetic field $\vec{B}$ around any closed path is equal to $\mu_0$ times the net current enclosed by the path", i.e. if $I_{\text{enc}}$ is the current enclosed by the path and $d\vec{l}$ is an elemental length of the closed path, then according to this law we can have

$$\oint\vec{B}\cdot d\vec{l}=\mu_0 I_{\text{enc}} \tag{5}$$

If the path of integration encloses no current — i.e. if the current-carrying conductor is outside the path of integration — then the line integral of the magnetic field $\vec{B}$ is zero for this integration. That means $\oint\vec{B}\cdot d\vec{l}=0$ does not necessarily mean $\vec{B}=0$, only that no current is linked by the path.

In a region of distributed current flow, the total current flowing across the surface bounded by the path is $I_{\text{enc}}=\int_S\vec{J}\cdot d\vec{a}$, where $\vec{J}$ is the current density and $\hat{n}$ is the unit normal to the surface.

From Ampère's law,

$$\oint\vec{B}\cdot d\vec{l}=\mu_0\int_S\vec{J}\cdot d\vec{a}$$

Using Stokes' theorem, $\oint\vec{B}\cdot d\vec{l}=\int_S(\nabla\times\vec{B})\cdot d\vec{a}$, so

$$\int_S(\nabla\times\vec{B})\cdot d\vec{a}=\mu_0\int_S\vec{J}\cdot d\vec{a}$$

$$\therefore\quad \nabla\times\vec{B}=\mu_0\vec{J} \tag{6}$$

This is the differential form of Ampère's law.

### Applications of Ampère's Law

In order to apply Ampère's law (in integral form), the path of integration — the *Amperian loop* — must be so chosen that:

1. The magnetic field is tangential to the path, so that $\oint\vec{B}\cdot d\vec{l}=\oint B\,dl$.
2. The magnitude of the magnetic field is the same at all points on the path, so that $\oint B\,dl=B\oint dl$.

Therefore, for an appropriately chosen Amperian loop, we can have

$$\oint\vec{B}\cdot d\vec{l}=B\oint dl=B\times(\text{total length of Amperian loop})=\mu_0 I_{\text{enc}}$$

**Example I: The magnetic field at a distance $s$ from a long straight wire carrying a steady current $I$.**

Consider a straight wire carrying a current $I$. To find the magnetic field at $P$, let's construct a circular Amperian loop of radius $s$ passing through $P$ with the wire as the axis, as shown in Figure 1. The current enclosed by the loop is $I_{\text{enc}}=I$.

**Figure 1**

From Ampère's law,

$$\oint\vec{B}\cdot d\vec{l}=\mu_0 I_{\text{enc}}$$

$$\oint B\,dl=\mu_0 I$$

$$B(2\pi s)=\mu_0 I$$

$$\therefore\quad B=\frac{\mu_0 I}{2\pi s}$$

This is the required relation for the magnetic field due to a straight current-carrying conductor at a distance $s$ from it, and it is directed tangentially along the loop.

**Example II: The magnetic field of a very long solenoid** consisting of closely wound turns per unit length on a cylinder of radius $R$ carrying a steady current $I$.

**Figure 2**

A solenoid is a long wire wound in a closely packed helix and carrying a current $I$. We assume that the solenoid is very long compared with its diameter, such that the internal field near its center is almost uniform and parallel to the axis, and the field outside is very small. For a practical solenoid, the field outside is taken as zero, i.e. $B_{\text{out}}=0$, which is not a very bad assumption.

In order to calculate $\vec{B}$ inside the solenoid, let's construct a rectangular Amperian loop $abcd$ of length $l$, as shown in Figure 2. The number of turns enclosed by the Amperian loop is $N=nl$, and the total current enclosed is

$$I_{\text{enc}}=NI=nlI$$

Now from Ampère's law,

$$\oint\vec{B}\cdot d\vec{l}=\mu_0 I_{\text{enc}}$$

$$\Rightarrow\quad \int_a^b\vec{B}\cdot d\vec{l}+\int_b^c\vec{B}\cdot d\vec{l}+\int_c^d\vec{B}\cdot d\vec{l}+\int_d^a\vec{B}\cdot d\vec{l}=\mu_0 Inl \tag{7}$$

where $d\vec{l}$ is the element of the path of integration. The sections $bc$ and $da$ are perpendicular to the magnetic field inside the solenoid, and there is no magnetic field outside. Therefore,

$$\int_b^c\vec{B}\cdot d\vec{l}=\int_c^d\vec{B}\cdot d\vec{l}=\int_d^a\vec{B}\cdot d\vec{l}=0 \qquad(\vec{B}\perp d\vec{l}\ \text{or}\ B_{\text{out}}=0)$$

and

$$\int_a^b\vec{B}\cdot d\vec{l}=\int_a^b B\,dl=Bl \qquad(\vec{B}\parallel d\vec{l}\ \text{and constant inside})$$

Therefore Eq. (7) becomes

$$Bl=\mu_0 Inl\ \Rightarrow\ B=\mu_0 nI$$

$$B=\mu_0 nI \tag{8}$$

This is the required expression for the magnetic field due to a solenoid.

## The Magnetic Vector Potential

We know that the divergence of the magnetic field is zero, i.e. $\nabla\cdot\vec{B}=0$, and the divergence of the curl of a vector is always zero, i.e. $\nabla\cdot(\nabla\times\vec{A})=0$. So $\vec{B}$ may be represented as the curl of some vector field $\vec{A}$:

$$\vec{B}=\nabla\times\vec{A}=\mathrm{curl}\ \vec{A} \tag{9}$$

The vector field $\vec{A}$ is called the *vector potential*, defined as the vector field whose curl is equal to the magnetic field $\vec{B}$. Also, the curl of a gradient is always zero, which means the vector $\vec{A}$ is not uniquely defined by Eq. (9). Suppose $\vec{A}'$ is a vector field given by

$$\vec{A}'=\vec{A}+\nabla\psi$$

where $\psi$ is a scalar function. Then

$$\nabla\times\vec{A}'=\nabla\times[\vec{A}+\nabla\psi]=\nabla\times\vec{A}+\nabla\times\nabla\psi=\nabla\times\vec{A}$$

Thus, for a given vector function $\vec{B}$, a lot of vectors $\vec{A}'$ will satisfy Eq. (9). For simplicity, the vector function $\vec{A}$ is chosen such that

$$\nabla\cdot\vec{A}=0 \tag{10}$$

Now, from the differential form of Ampère's law,

$$\nabla\times\vec{B}=\mu_0\vec{J}$$

or,

$$\nabla\times(\nabla\times\vec{A})=\mu_0\vec{J}$$

or, using $\nabla\times(\nabla\times\vec{A})=\nabla(\nabla\cdot\vec{A})-\nabla^2\vec{A}$,

$$\nabla(\nabla\cdot\vec{A})-\nabla^2\vec{A}=\mu_0\vec{J}$$

$$\Rightarrow\quad -\nabla^2\vec{A}=\mu_0\vec{J}$$

$$\therefore\quad \nabla^2\vec{A}=-\mu_0\vec{J} \tag{11}$$

In component form,

$$\nabla^2 A_x=-\mu_0 J_x \tag{12a}$$

$$\nabla^2 A_y=-\mu_0 J_y \tag{12b}$$

$$\nabla^2 A_z=-\mu_0 J_z \tag{12c}$$

Each equation of Eq. (12) is equivalent to Poisson's equation $\nabla^2V=-\rho/\epsilon_0$, with solution $V=\frac{1}{4\pi\epsilon_0}\int_V\frac{\rho}{r}d\tau$. Using the same token, the solutions of Eq. (12) can be written as

$$A_x=\frac{\mu_0}{4\pi}\int_V\frac{J_x}{r}d\tau \tag{13a}$$

$$A_y=\frac{\mu_0}{4\pi}\int_V\frac{J_y}{r}d\tau \tag{13b}$$

$$A_z=\frac{\mu_0}{4\pi}\int_V\frac{J_z}{r}d\tau \tag{13c}$$

and

$$\vec{A}=A_x\hat{i}+A_y\hat{j}+A_z\hat{k}=\frac{\mu_0}{4\pi}\int_V\frac{J_x\hat{i}+J_y\hat{j}+J_z\hat{k}}{r}d\tau$$

$$\Rightarrow\quad \vec{A}=\frac{\mu_0}{4\pi}\int_V\frac{\vec{J}}{r}d\tau \tag{14}$$

Equation (14) is the solution of Eq. (11), and this is the expression for the vector potential.

**Alternatively.** From the Biot–Savart law,

$$\vec{B}=\frac{\mu_0}{4\pi}\int_V\frac{\vec{J}\times\vec{r}}{r^3}d\tau=-\frac{\mu_0}{4\pi}\int_V\vec{J}\times\nabla\left(\frac{1}{r}\right)d\tau \qquad\left(\text{using }\nabla\left(\frac{1}{r}\right)=-\frac{\vec{r}}{r^3}\right)$$

Applying the vector identity

$$\nabla\times\left(\frac{\vec{J}}{r}\right)=\frac{1}{r}(\nabla\times\vec{J})-\vec{J}\times\nabla\left(\frac{1}{r}\right)$$

with $\nabla\times\vec{J}=0$, we have

$$\vec{J}\times\nabla\left(\frac{1}{r}\right)=-\nabla\times\left(\frac{\vec{J}}{r}\right)$$

so

$$\vec{B}=\frac{\mu_0}{4\pi}\nabla\times\int_V\frac{\vec{J}}{r}d\tau$$

$$\Rightarrow\quad \vec{B}=\nabla\times\left(\frac{\mu_0}{4\pi}\int_V\frac{\vec{J}}{r}d\tau\right)$$

Comparing this equation with $\vec{B}=\nabla\times\vec{A}$, we get

$$\vec{A}=\frac{\mu_0}{4\pi}\int_V\frac{\vec{J}}{r}d\tau$$

Since $I\,d\vec{l}=\vec{K}\,da=\vec{J}\,d\tau$, the expressions of the vector potential in terms of the surface current density $\vec{K}$ and the line current $I$ are respectively

$$\vec{A}=\frac{\mu_0}{4\pi}\int_S\frac{\vec{K}}{r}da \tag{15}$$

and

$$\vec{A}=\frac{\mu_0}{4\pi}\int_L\frac{I\,d\vec{l}}{r} \tag{16}$$

### Magnetic Flux in Terms of the Vector Potential

The magnetic flux $\Phi_m$ passing through an area $S$ may be given as

$$\Phi_m=\int_S\vec{B}\cdot d\vec{a}=\int_S(\nabla\times\vec{A})\cdot d\vec{a}$$

Using Stokes' theorem, we have

$$\Phi_m=\int_S\vec{B}\cdot d\vec{a}=\oint_L\vec{A}\cdot d\vec{l} \tag{17}$$

That means the line integral of the magnetic vector potential around a closed path which encloses the magnetic field lines is equal to the magnetic flux $\Phi_m$.

## Problems

**1. (a)** Find the magnetic field at the centre of a square loop of side $R$ which carries a steady current $I$.

*Hint:* Here, for a side, $\theta_1=-\pi/4$ and $\theta_2=+\pi/4$ from the figure above. Use the formula

$$\vec{B}_1=\frac{\mu_0 I}{4\pi r}\left(\sin\theta_2-\sin\theta_1\right)\hat{k}$$

to find the field $\vec{B}_1$ due to a side, assuming the loop in the XY-plane with centre at the origin. Use $r=R$. The total magnetic field is

$$\vec{B}=4\vec{B}_1$$

**1. (b)** Find the field at the centre of a regular $n$-sided polygon carrying a steady current $I$.

Let $R$ be the distance from the centre to any side. The angle subtended by a side at the centre is $2\pi/n$, and hence $\theta_1=-\pi/n$ and $\theta_2=+\pi/n$. So the field due to a side is

$$\vec{B}_1=\frac{\mu_0 I}{4\pi R}\,2\sin\frac{\pi}{n}\,\hat{k}$$

and for $n$ sides,

$$\vec{B}=n\vec{B}_1=\frac{\mu_0 I}{2\pi R}\,n\sin\frac{\pi}{n}\,\hat{k}$$

**1. (c)** Check that your formula reduces to the field at the centre of a circular loop in the limit $n\to\infty$.

As $n\to\infty$, $\pi/n\to 0$ and

$$\lim_{n\to\infty}\frac{n\sin(\pi/n)}{\pi/n}=...=1$$

so that

$$\vec{B}=\frac{\mu_0 I}{2R}$$

as for a circular loop.

**2.** Find the magnetic field on the axis of a tightly wound solenoid (helical coil) consisting of $n$ turns per unit length wrapped around a cylindrical tube of radius $a$ and carrying a current $I$ (Figure 3). Express your answer in terms of $\theta_1$ and $\theta_2$. Consider the turns to be essentially circular. What is the field on the axis of an infinite solenoid (infinite in both directions)?

*Hint:* Let's take an elemental length $dz$ on the solenoid at a distance $z$ from the point $P$. The radius of the loops at this position subtends an angle $\theta$ at $P$.

**Figure 3**

The number of turns within $dz$ is $dN=n\,dz$. Using the result for the magnetic field due to $N$ circular loops, $\vec{B}=\frac{\mu_0 N I R^2}{2(R^2+z^2)^{3/2}}\hat{k}$, we have the magnetic field at $P$ due to the turns on the elemental length $dz$:

$$d\vec{B}=\frac{\mu_0(dN)Ia^2}{2(a^2+z^2)^{3/2}}\hat{k}=\frac{\mu_0(ndz)Ia^2}{2(a^2+z^2)^{3/2}}\hat{k}=\frac{\mu_0 nIa^2}{2}\frac{dz}{(a^2+z^2)^{3/2}}\hat{k}$$

From the figure, $z=a\cot\theta$ and $dz=-a\csc^2\theta\,d\theta$. Now the above equation reduces to

$$d\vec{B}=\frac{\mu_0 nI}{2}\frac{a^2(-a\csc^2\theta\,d\theta)}{a^3\csc^3\theta}\hat{k}=-\frac{\mu_0 nI}{2}\sin\theta\,d\theta\,\hat{k}$$

Therefore, the magnetic field at $P$ due to the current on the whole solenoid is

$$\vec{B}=-\frac{\mu_0 nI}{2}\int_{\theta_1}^{\theta_2}\sin\theta\,d\theta\,\hat{k}=\frac{\mu_0 nI}{2}\left(\cos\theta_2-\cos\theta_1\right)\hat{k}$$

For a long solenoid, $\theta_1=\pi$ and $\theta_2=0$, and

$$\vec{B}=\frac{\mu_0 nI}{2}(\cos 0-\cos\pi)\hat{k}=\mu_0 nI\,\hat{k}$$

Hence, the magnetic field inside a long solenoid is constant and directed along the axis of the solenoid. Its magnitude is

$$B=\mu_0 nI$$

**3.** A steady current $I$ flows down along a cylindrical wire of radius $a$ (Figure 4). Find the magnetic field, both inside and outside the wire, if:
- (a) the current is uniformly distributed over the outside surface of the wire;
- (b) the current is distributed in such a way that $J$ is proportional to $s$, the distance from the axis.

*Hint:* Consider $P$ to be a point at a distance $r$ from the axis of the cylindrical wire. To find the magnetic field at $P$, let's construct the coaxial Amperian circle of radius $r$ passing through $P$ (Figure 4).

**Figure 4**

Now Ampère's law reads,

$$\oint\vec{B}\cdot d\vec{l}=B(2\pi r)=\mu_0 I_{\text{enc}}$$

$$\Rightarrow\quad B=\frac{\mu_0 I_{\text{enc}}}{2\pi r} \tag{18}$$

**(a)** For uniformly distributed surface current:

$$I_{\text{enc}}=\begin{cases}I, & \text{if } P \text{ lies outside the cylinder}\\ 0, & \text{if } P \text{ lies inside the cylinder}\end{cases}$$

Therefore, the magnetic field outside and inside is

$$B=\begin{cases}
\displaystyle\frac{\mu_0 I}{2\pi r}, & \text{if } P \text{ lies outside the cylinder, i.e. } r>a\\[4pt]
0, & \text{if } P \text{ lies inside the cylinder, i.e. } r<a
\end{cases}$$

**(b)** For the case in which the current is distributed inside the cylinder such that $J$ is proportional to the distance from the axis, i.e. $J=kr'$ with some constant $k$, the total current can be calculated by taking a coaxial circular ring of radius $r'$ with elemental thickness $dr'$ (Figure 5). The elemental area is $da=2\pi r'\,dr'$, and

$$I=\int\vec{J}\cdot d\vec{a}=\int_0^{a}kr'(2\pi r'\,dr')=2\pi k\int_0^{a}r'^2\,dr'=\frac{2\pi ka^3}{3}$$

$$\Rightarrow\quad k=\frac{3I}{2\pi a^3} \tag{19}$$

If $P$ lies outside the cylinder, the Amperian loop encloses the total current, i.e. $I_{\text{enc}}=I$; if $P$ lies inside the cylinder,

$$I_{\text{enc}}=\int_0^{r}kr'(2\pi r'\,dr')=2\pi k\int_0^{r}r'^2\,dr'=\frac{2\pi k r^3}{3}=\frac{I r^3}{a^3}$$

So,

$$B=\begin{cases}
\displaystyle\frac{\mu_0 I}{2\pi r}, & \text{if } P \text{ lies outside the cylinder, i.e. } r>a\\[4pt]
\displaystyle\frac{\mu_0 I r^2}{2\pi a^3}, & \text{if } P \text{ lies inside the cylinder, i.e. } r<a
\end{cases}$$

**Figure 5**

**4.** Find the magnetic vector potential of an infinite solenoid with $n$ turns per unit length, radius $R$, and current $I$.

*Hint:* The magnetic vector potential $\vec{A}$ encircles the magnetic field in the same way as the magnetic field encircles the current. The magnetic field inside a long solenoid is $B=\mu_0 nI$ and parallel to the axis; the field outside is zero. In order to find the vector potential inside and outside the solenoid, let's construct a coaxial Amperian circle of radius $r$ passing through $P$, a point of our concern, as shown in Figure 6.

**Figure 6**

The total flux enclosed by the Amperian loop is

$$\Phi_{\text{enc}}=\oint\vec{A}\cdot d\vec{l}=A(2\pi r)\ \Rightarrow\ A=\frac{\Phi_{\text{enc}}}{2\pi r}$$

If $P$ is **outside**, the flux enclosed is

$$\Phi_{\text{enc}}=\int_S\vec{B}\cdot d\vec{a}=(\mu_0 nI)\pi R^2$$

If $P$ lies **inside** the solenoid,

$$\Phi_{\text{enc}}=(\mu_0 nI)\pi r^2$$

so,

$$A=\begin{cases}
\displaystyle\frac{\mu_0 n I R^2}{2r}, & \text{if } P \text{ lies outside the solenoid, i.e. } r>R\\[6pt]
\displaystyle\frac{\mu_0 n I r}{2}, & \text{if } P \text{ lies inside the solenoid, i.e. } r<R
\end{cases}$$

**5.** Find the magnetic vector potential of a finite segment of a straight wire carrying a current $I$.

*Hint:* Consider a segment $AB$ of a straight wire carrying a current $I$ on the Y-axis, with end $A$ at position $(0,y_1,0)$ and end $B$ at position $(0,y_2,0)$, as shown in Figure 7. $P$ is a point on the Z-axis with coordinate $(0,0,z)$. To find the magnetic vector potential at $P$, let's take an elemental length $dy'$ on the wire with coordinate $(0,y',0)$.

**Figure 7**

So that $d\vec{l}'=dy'\hat{j}$. The separation vector of $P$ from $dy'$ is

$$\vec{r}=-y'\hat{j}+z\hat{k}$$

and its magnitude is

$$|\vec{r}|=\sqrt{y'^2+z^2}$$

The magnetic vector potential at $P$ due to the current on $dy'$ is

$$d\vec{A}=\frac{\mu_0 I\,d\vec{l}'}{4\pi r}=\frac{\mu_0 I\,dy'}{4\pi\sqrt{y'^2+z^2}}\,\hat{j} \tag{20}$$

From Figure 7, we have $y'=z\tan\theta$ and $dy'=z\sec^2\theta\,d\theta$. Now, Eq. (20) becomes

$$d\vec{A}=\frac{\mu_0 I z\sec^2\theta\,d\theta}{4\pi z\sec\theta}\,\hat{j}=\frac{\mu_0 I}{4\pi}\sec\theta\,d\theta\,\hat{j}$$

The net vector potential due to the current through the whole segment is

$$\vec{A}=\frac{\mu_0 I}{4\pi}\int_{\theta_1}^{\theta_2}\sec\theta\,d\theta\,\hat{j}=\frac{\mu_0 I}{4\pi}\ln\frac{\sec\theta_2+\tan\theta_2}{\sec\theta_1+\tan\theta_1}\,\hat{j}$$

But $\sec\theta_1=\frac{\sqrt{y_1^2+z^2}}{z}$, $\tan\theta_1=\frac{y_1}{z}$, $\sec\theta_2=\frac{\sqrt{y_2^2+z^2}}{z}$, $\tan\theta_2=\frac{y_2}{z}$. The vector potential in terms of Cartesian coordinates is

$$\vec{A}=\frac{\mu_0 I}{4\pi}\ln\frac{\sqrt{y_2^2+z^2}+y_2}{\sqrt{y_1^2+z^2}+y_1}\,\hat{j}=A_y(z)\hat{j}$$

with

$$A_y(z)=\frac{\mu_0 I}{4\pi}\ln\frac{\sqrt{y_2^2+z^2}+y_2}{\sqrt{y_1^2+z^2}+y_1}$$

Now,

$$\nabla\cdot\vec{A}=\frac{\partial A_x}{\partial x}+\frac{\partial A_y}{\partial y}+\frac{\partial A_z}{\partial z}=0+\frac{\partial A_y(z)}{\partial y}+0=0$$

and

$$\vec{B}=\nabla\times\vec{A}=\begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\\frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\0&A_y(z)&0\end{vmatrix}=-\frac{\partial A_y(z)}{\partial z}\,\hat{i}$$

$$=-\frac{\partial}{\partial z}\left(\frac{\mu_0 I}{4\pi}\ln\frac{\sqrt{y_2^2+z^2}+y_2}{\sqrt{y_1^2+z^2}+y_1}\right)\hat{i}$$

$$=-\frac{\mu_0 I}{4\pi}\frac{\partial}{\partial z}\left(\ln(\sqrt{y_2^2+z^2}+y_2)-\ln(\sqrt{y_1^2+z^2}+y_1)\right)\hat{i}$$

$$=-\frac{\mu_0 I}{4\pi}\left(\frac{z}{\sqrt{y_2^2+z^2}}\cdot\frac{1}{\sqrt{y_2^2+z^2}+y_2}-\frac{z}{\sqrt{y_1^2+z^2}}\cdot\frac{1}{\sqrt{y_1^2+z^2}+y_1}\right)\hat{i}$$

$$=-\frac{\mu_0 I}{4\pi}\left(\frac{\sec\theta_2}{z\sec\theta_2+z\tan\theta_2}-\frac{\sec\theta_1}{z\sec\theta_1+z\tan\theta_1}\right)\hat{i}$$

$$=-\frac{\mu_0 I}{4\pi z}\left(\frac{1}{1+\sin\theta_2}-\frac{1}{1+\sin\theta_1}\right)\hat{i}$$

$$=-\frac{\mu_0 I}{4\pi z}\left[(1-\sin\theta_2)-(1-\sin\theta_1)\right]\hat{i}$$

$$\therefore\quad \vec{B}=\frac{\mu_0 I}{4\pi z}\left(\sin\theta_2-\sin\theta_1\right)\hat{i}$$

**6.** If $\vec{B}$ is uniform, show that $\vec{A}(\vec{r})=-\frac{1}{2}(\vec{r}\times\vec{B})$ works. That is, check that $\nabla\cdot\vec{A}=0$ and $\nabla\times\vec{A}=\vec{B}$.

*Hint:* Consider a closed loop $C$ with origin $O$, as shown in Figure 8, in a constant magnetic field $\vec{B}$. Let's take an elemental vector length $\overrightarrow{PQ}=d\vec{l}$ on the loop with position vector $\overrightarrow{OP}=\vec{r}$. The area of the triangle $OPQ$ is equal to

$$d\vec{a}=\frac{1}{2}(\overrightarrow{OP}\times\overrightarrow{PQ})=\frac{1}{2}(\vec{r}\times d\vec{l})$$

**Figure 8**

The magnetic flux crossing the triangle $OPQ$ is

$$d\Phi=\vec{B}\cdot d\vec{a}=\vec{B}\cdot\left[\frac{1}{2}(\vec{r}\times d\vec{l})\right]=\frac{1}{2}(\vec{B}\times\vec{r})\cdot d\vec{l}$$

The magnetic flux crossing the whole loop is

$$\Phi=\frac{1}{2}\oint_C(\vec{B}\times\vec{r})\cdot d\vec{l}$$

In terms of the vector potential, the flux through the whole loop is

$$\Phi=\oint_C\vec{A}\cdot d\vec{l}$$

So that

$$\vec{A}=\frac{1}{2}(\vec{B}\times\vec{r})=-\frac{1}{2}(\vec{r}\times\vec{B}) \tag{21}$$

Now,

$$\nabla\cdot\vec{A}=-\frac{1}{2}\nabla\cdot(\vec{r}\times\vec{B})=-\frac{1}{2}\left[\vec{B}\cdot(\nabla\times\vec{r})-\vec{r}\cdot(\nabla\times\vec{B})\right]$$

Since $\nabla\times\vec{r}=0$ and $\nabla\times\vec{B}=0$ for constant $\vec{B}$, $\therefore \nabla\cdot\vec{A}=0$.

Also,

$$\vec{r}\times\vec{B}=\begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\x&y&z\\B_x&B_y&B_z\end{vmatrix}=(yB_z-zB_y)\hat{i}+(zB_x-xB_z)\hat{j}+(xB_y-yB_x)\hat{k}$$

$$\therefore\quad \nabla\times\vec{A}=-\frac{1}{2}\nabla\times(\vec{r}\times\vec{B})$$

$$=-\frac{1}{2}\begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\\frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\yB_z-zB_y&zB_x-xB_z&xB_y-yB_x\end{vmatrix}$$

$$=-\frac{1}{2}\left[(-B_x-B_x)\hat{i}+(-B_y-B_y)\hat{j}+(-B_z-B_z)\hat{k}\right]=\frac{1}{2}\left(2B_x\hat{i}+2B_y\hat{j}+2B_z\hat{k}\right)$$

$$\therefore\quad \nabla\times\vec{A}=\vec{B}$$

So $\vec{A}=-\frac{1}{2}(\vec{r}\times\vec{B})$ meets all the criteria imposed during its definition.