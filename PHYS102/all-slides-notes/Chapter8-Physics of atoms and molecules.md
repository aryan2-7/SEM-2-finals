# Physics of Atoms and Molecules

## Outline

1. Atomic spectra: Visible spectra
2. Molecular bonds and Molecular spectra
3. Raman Effect
   - Experimental setup of Raman effect
   - Quantum theory of Raman effect
   - Characteristics of Raman spectra
4. Superconductivity
   - The Meissner Effect
   - The critical field and temperature

## Atomic Spectra: Visible Spectra

Spectra can be obtained from interactions between electromagnetic radiation of certain wavelengths and electrons in orbitals of an atom. These interactions produce emission spectra if large amounts of energy excite electrons in the atoms. When they lose their excitation energy, some of these atoms emit discrete radiation while returning to a less energetic state. Absorption of spectra occurs if the interaction causes a decrease in the intensity of the radiation due to electronic excitation. The wavelength of emitted/absorbed photons is given by the Rydberg formula

$$\frac{1}{\lambda}=RZ^2\left(\frac{1}{n_l^2}-\frac{1}{n_u^2}\right)$$

where $n_u$ is the upper energy level, $n_l$ is the lower energy level, and $R$ is the Rydberg constant ($1.097\times 10^7\ \mathrm{m}^{-1}$). For $n_l = 1$, the spectral series is called the Lyman series and falls in the ultraviolet region.

**Figure 1:** The spectral series of hydrogen in logarithmic scale

For $n_l = 2$, the series is called the Balmer series. Balmer lines are historically referred to as "H-alpha", "H-beta", "H-gamma" and so on, where H is the element hydrogen. Four of the Balmer lines are in the "visible" part of the spectrum, with wavelengths longer than 400 nm and shorter than 700 nm. Parts of the Balmer series can be seen in the solar spectrum. H-alpha is an important line used in astronomy to detect the presence of hydrogen. For higher values of $n_l$ the spectral series lies in the infrared region and is not visible in nature.

## Molecular Bonds and Molecular Spectra

**Figure 2:** Molecular spectra

The most commonly observed molecular spectra involve electronic, vibrational, or rotational transitions. For a diatomic molecule, the electronic states can be represented by plots of potential energy as a function of internuclear distance as shown in Figure 2. Electronic transitions are vertical or almost vertical lines on such a plot since the electronic transition occurs so rapidly that the internuclear distance can't change much in the process. Vibrational transitions occur between different vibrational levels of the same electronic state. Rotational transitions occur mostly between rotational levels of the same vibrational state, although there are many examples of combination vibration-rotation transitions for light molecules. The vibrational spectra fall in the far infra-red region and rotational spectra in the microwave region.

## Raman Effect

While studying the scattering of light, Raman found that when a beam of monochromatic light was passed through organic liquids such as benzene, toluene etc., the scattered light contained other frequencies in addition to that of the incident light. This is known as the Raman effect.

For the spontaneous Raman effect, which is a form of inelastic light scattering, a photon excites the molecule in either the ground rovibronic state (lowest rotational and vibrational energy level of the ground electronic state) or an excited rovibronic state. This results in the molecule being in a so-called virtual energy state for a short period of time before an inelastically scattered photon results. The resulting inelastically scattered photon which is "emitted"/"scattered" can be of either lower (Stokes) or higher (anti-Stokes) energy than the incoming photon.

In Raman scattering the resulting rovibronic state of the molecule is a different rotational or vibrational state than the one in which the molecule was originally, before interacting with the incoming photon. The difference in energy between the original rovibronic state and this resulting rovibronic state leads to a shift in the emitted photon's frequency away from the excitation wavelength, the so-called Rayleigh line.

If the final vibrational state of the molecule is more energetic than the initial state, the inelastically scattered photon will be shifted to a lower frequency for the total energy of the system to remain balanced. This shift in frequency is designated as a Stokes shift. If the final vibrational state is less energetic than the initial state, then the inelastically scattered photon will be shifted to a higher frequency, and this is designated as an anti-Stokes shift.

Raman scattering is an example of inelastic scattering because the energy and momentum transfer between the photons and the molecules during the interaction results in a difference in energy between the incident and scattered photons. In particular, the difference is equal to the difference in energy between the initial and final (rovibronic) states.

### Experimental Setup of Raman Effect

**Figure 3:** Schematic diagram for experimental setup of Raman effect

It consists of a tube AB containing the pure experimental liquid free from dust and air bubbles. The tube is closed at one end by an optically plane glass plate W and the other end is drawn into a horn H and blackened on the outside. Light from a mercury source S is passed through a filter F which allows only monochromatic radiation of $\lambda = 4358\ \mathrm{\AA}$ to pass through it. The tube is surrounded by a water jacket J through which water is circulated to prevent overheating of the liquid. A semi-cylindrical aluminum reflector R is used to increase the intensity of illumination. The scattered light coming out of W is condensed on the slit of a spectrograph. The spectrograph must have a large light gathering power and the prism must have a large resolving power. A short focus camera is used to photograph the spectrum. On developing the photographic plate, it exhibits a number of Stokes lines, a few anti-Stokes lines and a strong unmodified line (Rayleigh lines).

### Quantum Theory of Raman Effect

**Figure 4:** Transition in Raman effect

Raman effect is due to the interaction between a photon and a molecule of the scatterer. Suppose a photon of frequency $\nu_0$ is incident on a molecule and there is a collision between the two. $E_0$ and $E_1$ are the energies of the ground state and the first excited state of vibrational states.

During the formation of the Stokes line, the molecule is initially in the ground state $E_0$ of the vibrational energy level. As a photon of energy $h\nu_0$ strikes it, the molecule jumps to the virtual energy state $E_1'$ (say). After the collision, the photon scatters with new energy $h\nu_s$ but the molecule falls to the first vibrational state with energy $E_1$. Therefore during absorption

$$E_1' - E_0 = h\nu_0 \tag{1}$$

and during emission

$$E_1' - E_1 = h\nu_s \tag{2}$$

Subtracting equation (1) from (2), we get

$$-E_1 + E_0 = h\nu_s - h\nu_0 \implies h\nu_s = h\nu_0 - (E_1 - E_0) = h\nu_0 - h\nu_1$$

where $\nu_1 = \dfrac{E_1 - E_0}{h}$ is the frequency of emission in the infrared during the transition between the first two vibrational states. This is a characteristic of the molecule. Therefore

$$\nu_s = \nu_0 - \nu_1 \tag{3}$$

Hence the frequency of a Stokes line $\nu_s$ is less than the frequency of the incident photon by an amount $\nu_1$, which is the frequency of emission during the transition between two successive energy levels in vibrational states.

Similarly, during the formation of the anti-Stokes line, the molecule is initially in the first excited state $E_1$ of the vibrational energy level. As a photon of energy $h\nu_0$ strikes it, the molecule jumps to the virtual energy state $E_2'$ (say). After the collision, the photon scatters with new energy $h\nu_a$ but the molecule falls to the ground vibrational state with energy $E_0$. Therefore during absorption

$$E_2' - E_1 = h\nu_0 \tag{4}$$

and during emission

$$E_2' - E_0 = h\nu_a \tag{5}$$

Subtracting equation (4) from (5), we get

$$E_1 - E_0 = h\nu_a - h\nu_0 \implies h\nu_a = h\nu_0 + (E_1 - E_0) = h\nu_0 + h\nu_1$$

$$\implies \nu_a = \nu_0 + \nu_1 \tag{6}$$

Hence the frequency of an anti-Stokes line $\nu_a$ is more than the frequency of the incident photon by an amount $\nu_1$.

When there is no change in the energy of the molecule, $E_2 = E_1$, then $\nu_a = \nu_s$. This represents the unmodified lines. Stokes and anti-Stokes processes may occur in between any two vibrational states.

### Characteristics of Raman Spectra

1. The Stokes lines are always more intense than the anti-Stokes lines.
2. The Raman lines are symmetrically displaced about the parent lines.
3. The frequency difference between the modified and parent line represents the frequency of the corresponding infrared absorption line.

## Superconductivity

Superconductivity is one of the most fascinating chapters of modern physics. Kamerlingh Onnes discovered that the electrical resistance of various metals, e.g. mercury, lead, tin and many others, disappeared when the temperature was lowered below some critical value $T_c$. The actual value of $T_c$ varied with the metal, but they were all of the order of a few kelvin, or at most of the order of tenths of a Kelvin. Subsequently perfect diamagnetism in superconductors was discovered. This property not only implies that magnetic fields are excluded from superconductors, but also that the field originally present in the metal is expelled from it when lowering the temperature from its critical value.

### The Meissner Effect

**Figure 5:** Magnetic field in normal and superconducting states

When a specimen is placed in a magnetic field and is then cooled through the transition temperature for superconductivity, the magnetic flux originally present is ejected from the specimen as shown in Figure 5. This is called the Meissner effect. The Meissner effect shows that a bulk superconductor behaves as a perfectly diamagnetic material, i.e. the magnetic induction $\vec{B} = 0$. Therefore inside the superconductor

$$\vec{B} = \mu_0(1 + \chi_m)\vec{H} = 0 \implies \chi_m = -1$$

The susceptibility of a superconducting specimen is $-1$.

### The Critical Field and Temperature

The superconductivity can be destroyed by the application of a magnetic field. If a strong enough magnetic field, called the critical field, is applied to a superconducting specimen, it becomes normal and recovers its normal resistivity even at a temperature less than the critical temperature $T_c$. The critical field depends on the temperature. For a given substance, the critical field decreases as the temperature rises from $T = 0\ \mathrm{K}$.

**Figure 6:** Variation of critical field and temperature

It has been found that the variation of critical field with temperature is given by

$$H_c(T) = H_c(0)\left(1 - \left(\frac{T}{T_c}\right)^2\right)$$

Thus the field has its maximum value $H_c(0)$ at $T = 0\ \mathrm{K}$ and vanishes at $T = T_c$. The critical fields need not be external. A current flowing in a superconducting ring creates its own magnetic field and if the current is large enough so that its own field reaches the critical value, then the superconductivity is also destroyed.