# Nuclear Physics

## Outline

1. Nuclear binding energy
2. Radioactivity and half-life
3. Nuclear reactions
4. Q-value and threshold energy in nuclear reaction
5. Nuclear fission and fusion
6. Problems

## Nuclear binding energy

We know the nucleus consists of protons and neutrons. If $Z$ and $N$ respectively denote the number of protons and neutrons, then the mass of the nucleus should be $Zm_p + Nm_n$, where $m_p$ is the mass of a proton and $m_n$ is the mass of a neutron. However, measurements showed that the real mass of the nucleus is less than the value given above. Let the measured mass of the nucleus be $M$; then the difference in mass is

$$\Delta m = (Zm_p + Nm_n) - M$$

where $\Delta m$ is called the mass defect. When $Z$ protons and $N$ neutrons combine to make a nucleus, some of the mass $(\Delta m)$ disappears because it is converted into an amount of energy

$$\Delta E = (\Delta m)c^2$$

according to the mass-energy equivalence relation. This energy is called the binding energy, B.E., of the nucleus. Thus the expression for B.E. becomes

$$B.E. = [(Zm_p + Nm_n) - M]c^2$$

To break up the stable nucleus into its constituents, the minimum energy required is the binding energy. The magnitude of B.E. determines its stability against disintegration. If B.E. > 0, the nucleus is stable, and if B.E. < 0, the nucleus is unstable and it will disintegrate by itself. The ratio of the binding energy to the total number of nucleons is called the binding energy per nucleon, and it also gives the stability of atoms.

## Radioactivity and half-life

The phenomenon of spontaneous emission of highly penetrating radiations from heavy elements is called natural radioactivity, and such elements are called radioactive elements. The units of radioactivity are Curie (Ci), Rutherford (Rd) and Becquerel (Bq). 1 Ci is equivalent to $3.7 \times 10^{10}$ disintegrations per second; 1 Rd is equivalent to $10^6$ disintegrations per second, and 1 Bq is equivalent to 1 event/sec.

For any radioactive sample, let $N$ be the number of atoms present at time $t$; then it is found that the rate of decrease of atoms is proportional to $N$, i.e.

$$\frac{dN}{dt} \propto N \quad \Longrightarrow \quad \frac{dN}{dt} = -\lambda N$$

Upon integrating, we get

$$\ln N = -\lambda t + \ln N_0 \quad \Longrightarrow \quad \ln \frac{N}{N_0} = -\lambda t \quad \Longrightarrow \quad N = N_0 e^{-\lambda t} \qquad (1)$$

Equation (1) shows that the number of atoms in a radioactive sample decreases exponentially with time. The graph of the number of atoms present against time is as shown in Figure 1.

Figure 1: Graph of the number of atoms present versus time.

### Half-life

The half-life period of a radioactive substance is defined as the time required for one half of the radioactive substance to disintegrate. It is used to compare one radioactive substance with another and is denoted by $T_{1/2}$. As we know, $N = N_0 e^{-\lambda t}$; at $t = T_{1/2}$, $N = N_0/2$. So,

$$N_0 e^{-\lambda T_{1/2}} = \frac{N_0}{2} \quad \Longrightarrow \quad T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$$

This relation gives the half-life of a given radioactive sample.

## Nuclear reactions

Nuclear reactions are transformations in atomic nuclei brought about by their interactions with elementary particles or with one another. The general scheme of a nuclear reaction is

$$A + B \to C \to P + Q$$

The projectile $B$ strikes the target nucleus $A$ and combines with it to form the compound nucleus $C$. The compound nucleus then splits into an outgoing particle $Q$ and a residual product nucleus $P$. The same projectile may form different product elements out of the same nucleus. The bombarding agents may be neutral or charged particles. Following are some main types of nuclear reactions.

1. **Elastic scattering:** In this case, the incident particle strikes the target nucleus and leaves it without loss of energy, but its direction may change, e.g.

    $$^{179}_{79}\mathrm{Au} + {}^{4}_{2}\mathrm{He} \to {}^{4}_{2}\mathrm{He} + {}^{179}_{79}\mathrm{Au}$$

2. **Inelastic scattering:** In this case, the incident particle loses some of its energy and excites the target nucleus. The excited nucleus later decays by radiating a $\gamma$-ray photon.

    $$^{7}_{3}\mathrm{Li} + {}^{1}_{1}\mathrm{H} \to (^{7}_{3}\mathrm{Li})^{*} + {}^{1}_{1}\mathrm{H}$$

    $$(^{7}_{3}\mathrm{Li})^{*} \to {}^{7}_{3}\mathrm{Li} + \gamma$$

3. **Radioactive capture:** In this case, the incident particle is captured by the target nucleus. The new nucleus then decays with the emission of one or more $\gamma$-ray photons, e.g.

    $$^{12}_{6}\mathrm{C} + {}^{1}_{1}\mathrm{H} \to (^{13}_{7}\mathrm{N})^{*} \to {}^{13}_{7}\mathrm{N} + \gamma$$

4. **Disintegration:** The incident particle is absorbed by the target nucleus and the ejected particle is a different one. The composition of the product nucleus is different from the parent nucleus.

    $$^{9}_{4}\mathrm{Be} + {}^{4}_{2}\mathrm{He} \to {}^{12}_{6}\mathrm{C} + {}^{1}_{0}\mathrm{n}$$

5. **Photodisintegration:** When target materials are bombarded with radiations, the compound nucleus decays with the formation of neutrons.

    $$^{2}_{1}\mathrm{H} + \gamma \to {}^{1}_{1}\mathrm{H} + {}^{1}_{0}\mathrm{n}$$

## Q-value and threshold energy in nuclear reaction

The general scheme of a nuclear reaction is

$$x + X \to Y + y$$

where $x$ is the projectile, $X$ is the target nucleus, $Y$ is the product nucleus and $y$ is the product particle. The above equation can also be written as $X(x, y)Y$.

Suppose $m_x$, $M_X$, $M_Y$, $m_y$ denote the masses of $x$, $X$, $Y$ and $y$, and $E_x$, $E_Y$, $E_y$ be their respective energies; then, for the target at rest, from energy conservation,

$$E_x + m_x c^2 + M_X c^2 = E_Y + M_Y c^2 + E_y + m_y c^2$$

$$\Longrightarrow \quad E_Y + E_y - E_x = (M_X + m_x - M_Y - m_y)c^2$$

The left-hand side of this equation, i.e. the difference in energy, is called the Q-value of the reaction, given by

$$Q = E_Y + E_y - E_x = (M_X + m_x - M_Y - m_y)c^2$$

If $Q$ is positive, the reaction is called exothermic or exoergic, and if it is negative, the reaction is called endothermic or endoergic.

The term $E_Y$ represents the recoil (kinetic) energy of the product nucleus. It is very small and hard to measure.

Consider the product nucleus and the particle scattered at angles $\phi$ and $\theta$ as shown in Figure 2.

Figure 2: Collision of target and projectile nuclei.

Then from momentum conservation,

$$M_Y V_Y \sin\phi = m_y v_y \sin\theta \qquad (2)$$

$$m_x v_x = M_Y V_Y \cos\phi + m_y v_y \cos\theta \quad \Longrightarrow \quad M_Y V_Y \cos\phi = m_x v_x - m_y v_y \cos\theta \qquad (3)$$

Squaring and adding Equations (2) and (3),

$$(M_Y V_Y)^2 = (m_y v_y)^2 + (m_x v_x)^2 - 2m_x m_y v_x v_y \cos\theta \qquad (4)$$

Setting $E_x = \frac{1}{2} m_x v_x^2$, $E_y = \frac{1}{2} m_y v_y^2$, $E_Y = \frac{1}{2} M_Y V_Y^2$, we get

$$E_Y = \frac{m_x}{M_Y} E_x + \frac{m_y}{M_Y} E_y - \frac{2}{M_Y} \sqrt{m_x m_y E_x E_y} \cos\theta \qquad (5)$$

So, the Q-value is

$$Q = \frac{m_x}{M_Y} E_x + \frac{m_y}{M_Y} E_y - \frac{2}{M_Y} \sqrt{m_x m_y E_x E_y} \cos\theta + E_y - E_x$$

$$\Longrightarrow \quad Q = \left(1 + \frac{m_y}{M_Y}\right) E_y - \left(1 - \frac{m_x}{M_Y}\right) E_x - \frac{2}{M_Y} \sqrt{m_x m_y E_x E_y} \cos\theta \qquad (6)$$

For $\theta = 90^{\circ}$,

$$Q = \left(1 + \frac{m_y}{M_Y}\right) E_y - \left(1 - \frac{m_x}{M_Y}\right) E_x \qquad (7)$$

If the masses are not known accurately, the mass numbers may be used in the equations to obtain the value of $Q$.

In an endoergic reaction, the energy $Q$ is needed to excite the compound nucleus sufficiently so that it will break up. This energy must be supplied in the form of kinetic energy of the incoming particle. The amount of energy needed for an endoergic reaction is called the threshold energy.

Let $M_c$ and $V_c$ denote the mass and velocity of the compound nucleus; then, from conservation of momentum, $m_x v_x = M_c V_c$ or $V_c = m_x v_x / M_c$. The part of the kinetic energy of the incident particle needed for the excitation of the compound nucleus is

$$-Q = \frac{1}{2} m_x v_x^2 - \frac{1}{2} M_c V_c^2 = \frac{1}{2} m_x v_x^2 \left(1 - \frac{m_x}{M_c}\right)$$

But $M_c = M_X + m_x$; therefore,

$$-Q = \frac{1}{2} m_x v_x^2 \frac{M_X}{M_X + m_x}$$

The threshold energy is then

$$E_{th} = \frac{1}{2} m_x v_x^2 = (-Q) \left(1 + \frac{m_x}{M_X}\right)$$

This is the expression for the threshold energy, and for the reaction induced by $\gamma$-rays, $m_x = 0$, $E_{th} = -Q$.

## Nuclear fission and fusion

The process of breaking up the nucleus of a heavy atom into two more or less equal fragments with the release of a large amount of energy is known as nuclear fission. When uranium $^{235}_{92}\mathrm{U}$ is bombarded with slow neutrons, the uranium nucleus breaks up into two nuclei, $^{141}_{56}\mathrm{Ba}$ and $^{92}_{36}\mathrm{Kr}$, together with three neutrons and a large amount of energy, as shown by the reaction below:

$$^{235}_{92}\mathrm{U} + {}^{1}_{0}\mathrm{n} \to (^{235}_{92}\mathrm{U})^{*} \to {}^{141}_{56}\mathrm{Ba} + {}^{92}_{36}\mathrm{Kr} + 3n + Q$$

Here $Q$ is the energy produced in the reaction. The value of $Q$ is about 200 MeV for this reaction.

The process by which a heavy nucleus is formed by the combination of two or more light nuclei with the release of a large amount of energy is called nuclear fusion. For example, a helium nucleus is formed by the fusion of two deuterium nuclei as given by the reaction

$$^{2}_{1}\mathrm{H} + {}^{2}_{1}\mathrm{H} \to {}^{4}_{2}\mathrm{He} + Q$$

Here $Q$ is the amount of energy liberated in the process, and for this reaction the value of $Q$ is about 24 MeV. Fusion is the main source of the Sun's energy.

## Problems

1. Calculate the binding energy per nucleon (MeV/nucleon) for tritium, ($^{3}_{1}\mathrm{H}$), a radioactive isotope of hydrogen.

    Assume: $m_p = 1.007825\ \mathrm{u}$, $m_n = 1.008665\ \mathrm{u}$, $m_t = 3.01605\ \mathrm{u}$, $1\ \mathrm{u} = 1.66 \times 10^{-27}\ \mathrm{kg}$.

    [Ans: $E_B/A = 2.8\ \mathrm{MeV/nucleon}$]

2. How much energy (in MeV) is released when a $^{235}_{92}\mathrm{U}$ fissions to $^{141}_{56}\mathrm{Ba}$ and $^{92}_{36}\mathrm{Kr}$ in the reaction

    $$^{235}_{92}\mathrm{U} + {}^{1}_{0}\mathrm{n} \to {}^{141}_{56}\mathrm{Ba} + {}^{92}_{36}\mathrm{Kr} + 3n ?$$

    Given: $m(n) = 1.008665\ \mathrm{u}$, $m(U) = 235.043915\ \mathrm{u}$, $m(Ba) = 140.9139\ \mathrm{u}$, $m(Kr) = 91.8973\ \mathrm{u}$, $1\ \mathrm{u} = 1.66 \times 10^{-27}\ \mathrm{kg}$.

    [Ans: $Q = 200\ \mathrm{MeV}$]

3. How long does it take for 60% of a sample of radon to decay? The half-life of radon is 3.8 days. [Ans: $t = 5.02\ \mathrm{days}$]

4. The half-life of radon is 3.8 days. After how many days will only 1/20 of a radon sample be left over? [Ans: $t = 16.43\ \mathrm{days}$]

5. A superconducting tin has a critical temperature of 3.7 K in zero magnetic field and a critical field of 0.0306 T at 0 K. Find the critical field at 2 K. [Ans: $H_C(2\ \mathrm{K}) = 0.0217\ \mathrm{T}$]