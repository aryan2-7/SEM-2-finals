# Electromagnetic Wave Propagation

## Outline

- Displacement current and Maxwell's equations
- Maxwell's equations in a material medium
- Energy in the electromagnetic field (Poynting theorem / Poynting's vector)
- Electromagnetic wave equations in vacuum

## Displacement Current; Maxwell's Equations

The basic laws of electricity and magnetism can be summarized in differential form as follows:

$$ \nabla\cdot\vec{E}=\frac{\rho}{\epsilon_0}\tag{1a} $$
$$ \nabla\cdot\vec{B}=0\tag{1b} $$
$$ \nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\tag{1c} $$
$$ \nabla\times\vec{B}=\mu_0\vec{J}\tag{1d} $$



Here (1a) is Gauss's law, (1b) has no name, (1c) is Faraday's law, and (1d) is Ampere's law.

Let us take the divergence of equation (1c), i.e.

$$
\nabla\cdot(\nabla\times\vec{E})=\nabla\cdot\left(-\frac{\partial\vec{B}}{\partial t}\right)=-\frac{\partial}{\partial t}(\nabla\cdot\vec{B})
$$

Here the left hand side is zero because the divergence of a curl is always zero, and the right hand side is zero by virtue of equation (1b).

Similarly, let us take the divergence of equation (1d), i.e.

$$
\nabla\cdot(\nabla\times\vec{B})=\nabla\cdot(\mu_0\vec{J})=\mu_0(\nabla\cdot\vec{J})
$$

Here the left side is zero as it is the divergence of a curl, but the right side in general is not equal to zero. So, for steady current the divergence of $\vec{J}$ is zero, but when we go beyond magnetostatics Ampere's law cannot be right. Therefore, for time dependent fields equation (1d) is not correct and should be modified.

Maxwell suggested that the definition of the total current density is incomplete and advised to add something to $\vec{J}$. Let it be called $\vec{J}^\prime$, then equation (1d) becomes

$$
\nabla\times\vec{B}=\mu_0(\vec{J}+\vec{J}^\prime)
$$

If we take the divergence of this equation, we get

$$
\nabla\cdot(\nabla\times\vec{B})=0=\mu_0(\nabla\cdot\vec{J}+\nabla\cdot\vec{J}^\prime)
$$

$$
\Rightarrow\quad \nabla\cdot\vec{J}^\prime=-\nabla\cdot\vec{J}=\frac{\partial\rho}{\partial t}=\frac{\partial}{\partial t}(\epsilon_0\nabla\cdot\vec{E})=\nabla\cdot\left(\epsilon_0\frac{\partial\vec{E}}{\partial t}\right)
$$

$$
\therefore\quad \vec{J}^\prime=\epsilon_0\frac{\partial\vec{E}}{\partial t}\tag{2}
$$

Thus, the modified form of Ampere's law is

$$
\nabla\times\vec{B}=\mu_0\left(\vec{J}+\epsilon_0\frac{\partial\vec{E}}{\partial t}\right)\tag{3}
$$

or

$$
\nabla\times\vec{B}=\mu_0\vec{J}+\mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}\tag{4}
$$

The added term $\vec{J}^\prime=\epsilon_0\frac{\partial\vec{E}}{\partial t}$ is called the displacement current or the displacement current density.

To check the modified equation, let us take the divergence of equation (4), i.e.

$$
\nabla\cdot(\nabla\times\vec{B})=\mu_0\nabla\cdot\vec{J}+\mu_0\epsilon_0\frac{\partial}{\partial t}(\nabla\cdot\vec{E})
$$

$$
\Rightarrow\quad \nabla\cdot(\nabla\times\vec{B})=\mu_0\nabla\cdot\vec{J}+\mu_0\frac{\partial}{\partial t}(\epsilon_0\nabla\cdot\vec{E})
$$

$$
\Rightarrow\quad \nabla\cdot(\nabla\times\vec{B})=\mu_0\left(\nabla\cdot\vec{J}+\frac{\partial\rho}{\partial t}\right)
$$

Here the left hand term is zero as it is the divergence of the curl of $\vec{B}$. And as we know from the continuity equation $\nabla\cdot\vec{J}+\frac{\partial\rho}{\partial t}=0$, so the right hand term is in general equal to zero. Thus, equation (4) is the correct form of Ampere's law.

Maxwell's equations — Faraday's law and Ampere's law after Maxwell's correction — show the connection between electricity and magnetism. So, there is a complete set of four equations, called the Maxwell's equations or the electromagnetic field equations.

In the absence of dielectrics or magnetic materials, Maxwell's equations are

$$
\nabla\cdot\vec{E}=\frac{\rho}{\epsilon_0}\tag{5a}\qquad\text{(Gauss's law)}
$$

$$
\nabla\cdot\vec{B}=0\tag{5b}
$$

$$
\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\tag{5c}\qquad\text{(Faraday's law)}
$$

$$
\nabla\times\vec{B}=\mu_0\vec{J}+\mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}\tag{5d}\qquad\text{(Ampere's law with Maxwell's correction)}
$$

### Example

Imagine thin wires that connect to the centers of the parallel plates of a capacitor as shown in **Figure 1**. A constant current $I$ is maintained to flow. The radius of the capacitor is $a$, and the separation of the plates is $w\ll a$. Assume that the current flows out over the plates in such a way that the surface charge is uniform at any given time, and is zero at $t=0$.

**Figure 1**

(a) Find the electric field between the plates, as a function of $t$.
(b) Find the displacement current through a circle of radius $S$ in the plane midway between the plates.
(c) Find the magnetic field at a distance $s$ from the axis.

Hint: Since the current $I$ is kept constant, the charge over the surface at any time $t$ is $q=It$. The surface charge density is $\sigma=\frac{q}{\pi a^2}$.

As $w\ll a$, the electric field between the plates is

$$
E=\frac{\sigma}{\epsilon_0}=\frac{It}{\epsilon_0\pi a^2}
$$

Since the electric field is time varying, it produces the displacement current as

$$
J_d=\epsilon_0\frac{\partial E}{\partial t}=\frac{I}{\pi a^2}
$$

This displacement current appears to flow in the region between the plates and parallel to the axis of the plates. To find the magnetic field due to this current, let's construct a coaxial Amperian circle of radius $s$ such that $s<a$. The current enclosed by the circle is

$$
I_{enc}=J_d\,\pi s^2=I\frac{s^2}{a^2}
$$

Using Ampere's law,

$$
B(2\pi s)=\mu_0 I_{enc}\quad\Rightarrow\quad B=\frac{\mu_0 I s}{2\pi a^2}
$$

## Maxwell's Equations in a Material Medium

In electric fields in matter the electric polarization $\vec{P}$ results in an accumulation of bound charge density given by

$$
\rho_b=-\nabla\cdot\vec{P}
$$

Likewise, in magnetic fields in matter, the magnetic polarization (or magnetization) $\vec{M}$ results in a bound current density $\vec{J}_b$ given by

$$
\vec{J}_b=\nabla\times\vec{M}
$$

When the polarization $\vec{P}$ varies with time, then the volume bound charge density $\rho_b=-\nabla\cdot\vec{P}$ also varies with time. The current resulting from this is called the polarization current $\vec{J}_p$, and it satisfies the continuity equation as

$$
\nabla\cdot\vec{J}_p=-\frac{\partial\rho_b}{\partial t}
$$

$$
\Rightarrow\quad \nabla\cdot\vec{J}_p=-\frac{\partial}{\partial t}(-\nabla\cdot\vec{P})
$$

$$
\Rightarrow\quad \nabla\cdot\vec{J}_p=\nabla\cdot\left(\frac{\partial\vec{P}}{\partial t}\right)
$$

Therefore, the polarization current density can be written in terms of the polarization $\vec{P}$ as

$$
\vec{J}_p=\frac{\partial\vec{P}}{\partial t}
$$

For a material medium, the total charge density can be written as

$$
\rho=\rho_f+\rho_b
$$

where $\rho_f$ is the charge density due to free charges.

$$
\therefore\quad \rho=\rho_f-\nabla\cdot\vec{P}\tag{6}
$$

And the total current density is

$$
\vec{J}=\vec{J}_f+\vec{J}_b+\vec{J}_p
$$

$$
\Rightarrow\quad \vec{J}=\vec{J}_f+(\nabla\times\vec{M})+\frac{\partial\vec{P}}{\partial t}\tag{7}
$$

Now, from Gauss's law in electrostatics,

$$
\nabla\cdot\vec{E}=\frac{\rho}{\epsilon_0}
$$

$$
\Rightarrow\quad \epsilon_0\nabla\cdot\vec{E}=\rho=\rho_f-\nabla\cdot\vec{P}\tag{using (6)}
$$

$$
\Rightarrow\quad \nabla\cdot(\epsilon_0\vec{E})+\nabla\cdot\vec{P}=\rho_f
$$

$$
\Rightarrow\quad \nabla\cdot[\epsilon_0\vec{E}+\vec{P}]=\rho_f
$$

$$
\Rightarrow\quad \nabla\cdot\vec{D}=\rho_f
$$

where $\vec{D}=\epsilon_0\vec{E}+\vec{P}$.

Similarly, Ampere's law is

$$
\nabla\times\vec{B}=\mu_0\vec{J}+\mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}
$$

$$
\Rightarrow\quad \frac{1}{\mu_0}(\nabla\times\vec{B})=\vec{J}+\epsilon_0\frac{\partial\vec{E}}{\partial t}
$$

$$
\Rightarrow\quad \frac{1}{\mu_0}(\nabla\times\vec{B})=\vec{J}_f+\vec{J}_b+\vec{J}_p+\frac{\partial(\epsilon_0\vec{E})}{\partial t}
$$

$$
\Rightarrow\quad \frac{1}{\mu_0}(\nabla\times\vec{B})=\vec{J}_f+\nabla\times\vec{M}+\frac{\partial\vec{P}}{\partial t}+\frac{\partial}{\partial t}(\epsilon_0\vec{E})
$$

$$
\Rightarrow\quad \nabla\times\frac{\vec{B}}{\mu_0}-\nabla\times\vec{M}=\vec{J}_f+\frac{\partial}{\partial t}[\vec{P}+\epsilon_0\vec{E}]
$$

$$
\Rightarrow\quad \nabla\times\left(\frac{\vec{B}}{\mu_0}-\vec{M}\right)=\vec{J}_f+\frac{\partial\vec{D}}{\partial t}
$$

$$
\therefore\quad \nabla\times\vec{H}=\vec{J}_f+\frac{\partial\vec{D}}{\partial t}\qquad\because\ \vec{D}=\epsilon_0\vec{E}+\vec{P}
$$

where $\vec{H}=\frac{\vec{B}}{\mu_0}-\vec{M}$.

Hence, Maxwell's equations in a material medium become

$$
\nabla\cdot\vec{D}=\rho_f\tag{8a}
$$

$$
\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\tag{8b}
$$

$$
\nabla\cdot\vec{B}=0\tag{8c}
$$

$$
\nabla\times\vec{H}=\vec{J}_f+\frac{\partial\vec{D}}{\partial t}\tag{8d}
$$

## Energy in the Electromagnetic Field (Poynting Theorem / Poynting Vector)

The energy stored in the electric field $\vec{E}$ is given by

$$
W_e=\frac{1}{2}\epsilon_0\int_V E^2\,d\tau
$$

And the energy stored in the magnetic field $\vec{B}$ is given by

$$
W_m=\frac{1}{2\mu_0}\int_V B^2\,d\tau
$$

So, the total energy stored in the electromagnetic field is

$$
W_{em}=W_e+W_m=\frac{1}{2}\int_V\left(\epsilon_0 E^2+\frac{B^2}{\mu_0}\right)d\tau\tag{9}
$$

The energy stored per unit volume in the electromagnetic field is

$$
u_{em}=\frac{1}{2}\left(\epsilon_0 E^2+\frac{B^2}{\mu_0}\right)\tag{10}
$$

Suppose a system of point charges $q_1,q_2,\ldots,q_n$ are moving with velocities $\vec{v}_1,\vec{v}_2,\ldots,\vec{v}_n$ respectively, in the combined electric field $\vec{E}$ and magnetic field $\vec{B}$. The Lorentz force experienced by the $i$th charge is

$$
\vec{F}_i=q_i(\vec{E}+\vec{v}_i\times\vec{B})
$$

Within elemental time $dt$ the $i$th charge covers an elemental displacement $d\vec{l}_i=\vec{v}_i\,dt$. The amount of work done by the force $\vec{F}_i$ on $q_i$ within time $dt$ is $dW_i=\vec{F}_i\cdot d\vec{l}_i$

$$
\Rightarrow\quad dW_i=q_i(\vec{E}+\vec{v}_i\times\vec{B})\cdot\vec{v}_i\,dt
$$

$$
\Rightarrow\quad \frac{dW_i}{dt}=q_i\big[\vec{E}\cdot\vec{v}_i+(\vec{v}_i\times\vec{B})\cdot\vec{v}_i\big]
$$

Since

$$
\vec{v}_i\cdot(\vec{v}_i\times\vec{B})=0
$$

(the scalar triple product vanishes as it is the determinant

$$
\begin{vmatrix}
v_x & v_y & v_z\\
v_x & v_y & v_z\\
B_x & B_y & B_z
\end{vmatrix}=0
$$

with two identical rows), we get

$$
\therefore\quad \frac{dW_i}{dt}=q_i(\vec{E}\cdot\vec{v}_i)
$$

This gives the power delivered by the electromagnetic field on the point charge $q_i$. The total power delivered to all the point charges is given by

$$
\frac{dW}{dt}=\sum_{i=1}^{n}\frac{dW_i}{dt}=\sum_{i=1}^{n}q_i(\vec{E}\cdot\vec{v}_i)
$$

For the continuous charge distribution,

$$
\frac{dW}{dt}=\int(\vec{E}\cdot\vec{v})\,dq
$$

Here $\vec{v}$ is the velocity of the elemental charge $dq$ of the system of continuous charge. For the region charge distribution with volume charge density $\rho$, we can have $dq=\rho\,d\tau$, and the net power delivered is

$$
\frac{dW}{dt}=\int_V\rho\,d\tau\,(\vec{E}\cdot\vec{v})=\int_V\vec{E}\cdot(\rho\vec{v})\,d\tau
$$

The integration is taken in the region of volume $V$. Since $\vec{J}=\rho\vec{v}$, we have

$$
\frac{dW}{dt}=\int_V(\vec{E}\cdot\vec{J})\,d\tau\tag{11}
$$

From Maxwell's modification of Ampere's law (i.e. Maxwell's fourth law),

$$
\nabla\times\vec{B}=\mu_0\vec{J}+\mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}
$$

$$
\Rightarrow\quad \vec{E}\cdot(\nabla\times\vec{B})=\mu_0\,\vec{E}\cdot\vec{J}+\mu_0\epsilon_0\,\vec{E}\cdot\frac{\partial\vec{E}}{\partial t}
$$

$$
\Rightarrow\quad \vec{E}\cdot\vec{J}=\frac{1}{\mu_0}\vec{E}\cdot(\nabla\times\vec{B})-\frac{\epsilon_0}{2}\frac{\partial E^2}{\partial t}\tag{12}
$$

Here we have used

$$
\vec{E}\cdot\frac{\partial\vec{E}}{\partial t}=\frac{1}{2}\left(\vec{E}\cdot\frac{\partial\vec{E}}{\partial t}+\frac{\partial\vec{E}}{\partial t}\cdot\vec{E}\right)
=\frac{1}{2}\frac{\partial}{\partial t}(\vec{E}\cdot\vec{E})=\frac{1}{2}\frac{\partial E^2}{\partial t}
$$

We know the vector identity

$$
\nabla\cdot(\vec{E}\times\vec{B})=\vec{B}\cdot(\nabla\times\vec{E})-\vec{E}\cdot(\nabla\times\vec{B})
$$

$$
\Rightarrow\quad \vec{E}\cdot(\nabla\times\vec{B})=\vec{B}\cdot(\nabla\times\vec{E})-\nabla\cdot(\vec{E}\times\vec{B})
$$

So, equation (12) becomes

$$
\vec{E}\cdot\vec{J}=\frac{1}{\mu_0}\vec{B}\cdot(\nabla\times\vec{E})-\frac{1}{\mu_0}\nabla\cdot(\vec{E}\times\vec{B})-\frac{\epsilon_0}{2}\frac{\partial E^2}{\partial t}\tag{13}
$$

Also, from Faraday's law

$$
\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\tag{14}
$$

$$
\Rightarrow\quad \vec{B}\cdot(\nabla\times\vec{E})=-\vec{B}\cdot\frac{\partial\vec{B}}{\partial t}=-\frac{1}{2}\frac{\partial B^2}{\partial t}\tag{15}
$$

So, equation (13) becomes

$$
\vec{E}\cdot\vec{J}=-\frac{1}{2\mu_0}\frac{\partial B^2}{\partial t}-\frac{\epsilon_0}{2}\frac{\partial E^2}{\partial t}-\frac{1}{\mu_0}\nabla\cdot(\vec{E}\times\vec{B})
$$

$$
\quad=-\frac{1}{2}\frac{\partial}{\partial t}\left(\epsilon_0 E^2+\frac{B^2}{\mu_0}\right)-\frac{1}{\mu_0}\nabla\cdot(\vec{E}\times\vec{B})
$$

and equation (11) reduces to

$$
\frac{dW}{dt}=-\frac{1}{2}\int_V\frac{\partial}{\partial t}\left(\epsilon_0 E^2+\frac{B^2}{\mu_0}\right)d\tau-\frac{1}{\mu_0}\int_V\nabla\cdot(\vec{E}\times\vec{B})\,d\tau
$$

$$
\therefore\quad \frac{dW}{dt}=-\frac{1}{2}\frac{d}{dt}\int_V\left(\epsilon_0 E^2+\frac{B^2}{\mu_0}\right)d\tau-\frac{1}{\mu_0}\oint_S(\vec{E}\times\vec{B})\cdot d\vec{a}\tag{16}
$$

where $S$ is a surface which encloses the volume $V$. This is called Poynting's theorem. It is also called the work–energy theorem of electrodynamics. The first integral on the right is the rate of change of the total energy stored in the fields. The second term represents the rate at which energy is carried out of $V$ across its boundary surface by the electromagnetic fields.

The Poynting's theorem states that "the work done on the charges by the electromagnetic field is equal to the decrease in energy stored in the fields less the energy which is flowed out through the surface".

The energy per unit time, per unit area, transported by the electromagnetic fields is called the Poynting's vector, denoted by $\vec{S}$:

$$
\therefore\quad \vec{S}=\frac{1}{\mu_0}(\vec{E}\times\vec{B})
$$

In equation (16), $\vec{S}\cdot d\vec{a}$ is the energy per unit time crossing the infinitesimal surface $d\vec{a}$, i.e. the energy flux. So equation (16) may be written as

$$
\oint_S\vec{S}\cdot d\vec{a}=-\frac{dW_{em}}{dt}-\frac{dW}{dt}
$$

The work $W$ done on the charges will increase their mechanical energy (kinetic, potential or whatever). If $u_{mech}$ denotes the mechanical energy density, such that

$$
\frac{dW}{dt}=\frac{d}{dt}\int_V u_{mech}\,d\tau
$$

Therefore,

$$
\frac{d}{dt}\int_V(u_{mech}+u_{em})\,d\tau=-\oint_S\vec{S}\cdot d\vec{a}=-\int_V\nabla\cdot\vec{S}\,d\tau
$$

$$
\Rightarrow\quad \int_V\frac{\partial}{\partial t}(u_{mech}+u_{em})\,d\tau=-\int_V\nabla\cdot\vec{S}\,d\tau
$$

$$
\Rightarrow\quad \frac{\partial}{\partial t}(u_{mech}+u_{em})=-\nabla\cdot\vec{S}
$$

This is the differential version of the Poynting theorem. Writing the total energy density $u=u_{mech}+u_{em}$, it takes the compact form

$$
-\frac{d}{dt}\int_V u\,d\tau=\oint_S\vec{S}\cdot d\vec{a}
$$

This is analogous to the continuity equation $\frac{\partial\rho}{\partial t}=-\nabla\cdot\vec{J}$, which infers that the energy transported is due to the expense of the total (mechanical plus electromagnetic) energy of the system of moving charges in the electromagnetic field.

## Electromagnetic Wave Equations in Vacuum

For free space where there is no free charge and current, i.e. $\rho=0$ and $\vec{J}=0$, the Maxwell's equations read

$$
\nabla\cdot\vec{E}=0\tag{17a}
$$

$$
\nabla\cdot\vec{B}=0\tag{17b}
$$

$$
\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\tag{17c}
$$

$$
\nabla\times\vec{B}=\mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}\tag{17d}
$$

Taking the curl of equation (17c), we get

$$
\nabla\times(\nabla\times\vec{E})=-\nabla\times\frac{\partial\vec{B}}{\partial t}
$$

$$
\Rightarrow\quad \nabla(\nabla\cdot\vec{E})-\nabla^2\vec{E}=-\frac{\partial(\nabla\times\vec{B})}{\partial t}
$$

$$
\Rightarrow\quad \nabla^2\vec{E}=\mu_0\epsilon_0\frac{\partial^2\vec{E}}{\partial t^2}\tag{18}
$$

In component form, equation (18) can be written as

$$
\nabla^2 E_x=\mu_0\epsilon_0\frac{\partial^2 E_x}{\partial t^2}
$$

$$
\nabla^2 E_y=\mu_0\epsilon_0\frac{\partial^2 E_y}{\partial t^2}\tag{19}
$$

$$
\nabla^2 E_z=\mu_0\epsilon_0\frac{\partial^2 E_z}{\partial t^2}
$$

Again taking the curl of equation (17d) yields

$$
\nabla\times(\nabla\times\vec{B})=\mu_0\epsilon_0\,\nabla\times\frac{\partial\vec{E}}{\partial t}
$$

$$
\Rightarrow\quad \nabla(\nabla\cdot\vec{B})-\nabla^2\vec{B}=\mu_0\epsilon_0\frac{\partial(\nabla\times\vec{E})}{\partial t}
$$

$$
\Rightarrow\quad \nabla^2\vec{B}=\mu_0\epsilon_0\frac{\partial^2\vec{B}}{\partial t^2}\tag{20}
$$

In component form,

$$
\nabla^2 B_x=\mu_0\epsilon_0\frac{\partial^2 B_x}{\partial t^2}
$$

$$
\nabla^2 B_y=\mu_0\epsilon_0\frac{\partial^2 B_y}{\partial t^2}\tag{21}
$$

$$
\nabla^2 B_z=\mu_0\epsilon_0\frac{\partial^2 B_z}{\partial t^2}
$$

Thus, in vacuum the electric and magnetic fields each obey the wave equation,

$$
\nabla^2\vec{E}=\mu_0\epsilon_0\frac{\partial^2\vec{E}}{\partial t^2},\qquad
\nabla^2\vec{B}=\mu_0\epsilon_0\frac{\partial^2\vec{B}}{\partial t^2}
$$

Equations (19) and (21) satisfy the wave equation

$$
\nabla^2 f=\frac{1}{c^2}\frac{\partial^2 f}{\partial t^2}\tag{22}
$$

where $c$ is the velocity of the wave. Thus, equations (18) and (20) are equations of electromagnetic waves, as shown in **Figure 2**, with speed

$$
c=\frac{1}{\sqrt{\mu_0\epsilon_0}}\approx 3\times10^8\ \mathrm{m\,s^{-1}}
$$

This is equal to the experimentally determined velocity of electromagnetic waves.

**Figure 2** – An electromagnetic wave