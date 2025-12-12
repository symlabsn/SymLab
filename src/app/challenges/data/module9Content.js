// MODULE 9 : TRIGONOMETRIE
export const module9Content = {
    random_nums: {
        title: "Introduction aux nombres aléatoires",
        theorie: `
## Nombres aléatoires en Python

### Module random
\`\`\`python
import random
random.random()      # [0, 1)
random.randint(a, b) # entier [a, b]
\`\`\`

### NumPy
\`\`\`python
import numpy as np
np.random.rand(n)    # n valeurs [0, 1)
np.random.randn(n)   # n valeurs gaussiennes
\`\`\`
        `,
        code: `import random
import numpy as np

# random standard
print("=== Module random ===")
print(f"random() : {random.random():.4f}")
print(f"randint(1, 6) : {random.randint(1, 6)}")
print(f"choice(['a','b','c']) : {random.choice(['a','b','c'])}")

# NumPy
print("\\n=== NumPy ===")
print(f"rand(5) : {np.random.rand(5)}")
print(f"randn(5) : {np.random.randn(5)}")
print(f"randint(1, 100, 5) : {np.random.randint(1, 100, 5)}")

# Reproductibilité avec seed
np.random.seed(42)
print(f"\\nAvec seed 42 : {np.random.rand(3)}")`,
        exercice: `Générez 1000 nombres et calculez leur moyenne (devrait être ≈ 0.5).`
    },

    random_ex: {
        title: "Nombres aléatoires : Exercice",
        theorie: `## Applications
- Simulations Monte Carlo
- Jeux
- Échantillonnage
- Tests statistiques
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# Simulation de lancers de dé
n = 10000
des = np.random.randint(1, 7, n)

plt.hist(des, bins=6, edgecolor='black', align='left')
plt.xticks([1, 2, 3, 4, 5, 6])
plt.xlabel('Face'); plt.ylabel('Fréquence')
plt.title(f'{n} lancers de dé')
plt.show()

# Vérification
for i in range(1, 7):
    freq = np.sum(des == i) / n
    print(f"Face {i} : {freq:.3f} (théorique: 0.167)")`,
        exercice: `Simulez 10000 lancers de 2 dés et tracez l'histogramme des sommes.`
    },

    phase_angles: {
        title: "Exercice : Tracer des phases aléatoires",
        theorie: `## Ondes avec phase aléatoire

$y = A\\sin(\\omega t + \\phi)$

où $\\phi$ est une phase aléatoire dans $[0, 2\\pi]$.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 4*np.pi, 200)

plt.figure(figsize=(10, 6))
for i in range(5):
    phi = np.random.uniform(0, 2*np.pi)
    y = np.sin(t + phi)
    plt.plot(t, y, label=f'φ = {phi:.2f}')

plt.xlabel('t'); plt.ylabel('y')
plt.title('Sinusoïdes avec phases aléatoires')
plt.legend(); plt.grid()
plt.show()`,
        exercice: `Tracez 10 ondes cosinus avec amplitudes aléatoires entre 0.5 et 2.`
    },

    rad_deg: {
        title: "Conversion radians et degrés",
        theorie: `
## Radians vs Degrés

$$\\pi \\text{ rad} = 180°$$

### Conversions
- Degrés → Radians : $\\theta_{rad} = \\theta_{deg} \\times \\frac{\\pi}{180}$
- Radians → Degrés : $\\theta_{deg} = \\theta_{rad} \\times \\frac{180}{\\pi}$

### En Python
\`\`\`python
np.radians(90)   # 1.5708
np.degrees(np.pi) # 180
\`\`\`
        `,
        code: `import numpy as np

# Conversions
angles_deg = [0, 30, 45, 60, 90, 180, 360]
print("Degrés → Radians")
for deg in angles_deg:
    rad = np.radians(deg)
    print(f"{deg}° = {rad:.4f} rad = {rad/np.pi:.4f}π")

# Radians → Degrés
print("\\nRadians → Degrés")
angles_rad = [0, np.pi/6, np.pi/4, np.pi/3, np.pi/2, np.pi]
for rad in angles_rad:
    deg = np.degrees(rad)
    print(f"{rad:.4f} rad = {deg:.1f}°")`,
        exercice: `Convertissez 75° en radians et 2.5 rad en degrés.`
    },

    rad_deg_ex: {
        title: "Conversion d'angles : Exercice",
        theorie: `## Angles remarquables

| Degrés | Radians |
|--------|---------|
| 30° | $\\pi/6$ |
| 45° | $\\pi/4$ |
| 60° | $\\pi/3$ |
| 90° | $\\pi/2$ |
        `,
        code: `import numpy as np
import sympy as sp

# Table des valeurs trigonométriques
print("Angle | sin | cos | tan")
print("-" * 35)
for deg in [0, 30, 45, 60, 90]:
    rad = np.radians(deg)
    s = np.sin(rad)
    c = np.cos(rad)
    t = np.tan(rad) if deg != 90 else float('inf')
    print(f"{deg:3}°  | {s:.3f} | {c:.3f} | {t:.3f}")`,
        exercice: `Créez une fonction qui prend un angle en degrés et retourne sin, cos, tan.`
    },

    pythagoras: {
        title: "Le théorème de Pythagore",
        theorie: `
## Théorème de Pythagore

Dans un triangle rectangle :
$$a^2 + b^2 = c^2$$

où $c$ est l'hypoténuse.

### Lien avec la trigo
$$\\sin^2\\theta + \\cos^2\\theta = 1$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# Triangle rectangle
a, b = 3, 4
c = np.sqrt(a**2 + b**2)
print(f"Côtés : a={a}, b={b}")
print(f"Hypoténuse : c = √({a}² + {b}²) = {c}")

# Vérification identité trigo
theta = np.linspace(0, 2*np.pi, 100)
identite = np.sin(theta)**2 + np.cos(theta)**2
print(f"\\nsin²θ + cos²θ = {identite[0]:.10f} (partout)")

# Visualisation
fig, ax = plt.subplots(figsize=(6, 6))
ax.plot([0, a, a, 0], [0, 0, b, 0], 'b-', linewidth=2)
ax.fill([0, a, a, 0], [0, 0, b, 0], alpha=0.3)
ax.text(a/2, -0.3, f'a = {a}', ha='center')
ax.text(a+0.2, b/2, f'b = {b}', va='center')
ax.text(a/2-0.5, b/2+0.3, f'c = {c}')
ax.set_aspect('equal'); ax.grid()
plt.title('Triangle rectangle 3-4-5')
plt.show()`,
        exercice: `Vérifiez que (5, 12, 13) est un triplet pythagoricien.`
    },

    res_trig: {
        title: "Résolution graphique pour sin, cos, tan",
        theorie: `
## Résoudre graphiquement

Pour résoudre $\\sin(x) = k$ :
1. Tracer $y = \\sin(x)$
2. Tracer $y = k$
3. Les intersections sont les solutions
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2*np.pi, 2*np.pi, 500)

fig, axes = plt.subplots(1, 3, figsize=(15, 4))

# sin(x) = 0.5
k = 0.5
axes[0].plot(x, np.sin(x), 'b-', label='sin(x)')
axes[0].axhline(k, color='r', linestyle='--', label=f'y = {k}')
axes[0].set_title(f'sin(x) = {k}')
axes[0].legend(); axes[0].grid()

# cos(x) = 0
axes[1].plot(x, np.cos(x), 'g-', label='cos(x)')
axes[1].axhline(0, color='r', linestyle='--', label='y = 0')
axes[1].set_title('cos(x) = 0')
axes[1].legend(); axes[1].grid()

# tan(x) = 1
y_tan = np.tan(x)
y_tan[np.abs(y_tan) > 10] = np.nan
axes[2].plot(x, y_tan, 'm-', label='tan(x)')
axes[2].axhline(1, color='r', linestyle='--', label='y = 1')
axes[2].set_ylim(-5, 5)
axes[2].set_title('tan(x) = 1')
axes[2].legend(); axes[2].grid()

plt.tight_layout()
plt.show()`,
        exercice: `Trouvez graphiquement toutes les solutions de $\\cos(x) = -0.5$ dans $[0, 2\\pi]$.`
    },

    res_ex: {
        title: "Résolution graphique : Exercice",
        theorie: `## Méthode analytique

- $\\sin(x) = k \\Rightarrow x = \\arcsin(k) + 2n\\pi$ ou $x = \\pi - \\arcsin(k) + 2n\\pi$
- $\\cos(x) = k \\Rightarrow x = \\pm\\arccos(k) + 2n\\pi$
        `,
        code: `import numpy as np

# Résoudre sin(x) = 0.5
k = 0.5
x1 = np.arcsin(k)
x2 = np.pi - x1

print(f"sin(x) = {k}")
print(f"Solution principale : x = {np.degrees(x1):.1f}°")
print(f"Autre solution dans [0, 2π] : x = {np.degrees(x2):.1f}°")

# Vérification
print(f"\\nVérification :")
print(f"sin({np.degrees(x1):.1f}°) = {np.sin(x1):.4f}")
print(f"sin({np.degrees(x2):.1f}°) = {np.sin(x2):.4f}")`,
        exercice: `Trouvez toutes les solutions de $\\tan(x) = \\sqrt{3}$ dans $[-\\pi, \\pi]$.`
    },

    euler: {
        title: "La formule d'Euler",
        theorie: `
## Formule d'Euler

$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$

### Cas particulier : $\\theta = \\pi$
$$e^{i\\pi} + 1 = 0$$

C'est "la plus belle équation des mathématiques".
        `,
        code: `import numpy as np
import cmath
import matplotlib.pyplot as plt

# Vérification de la formule
theta = np.pi / 4
euler = cmath.exp(1j * theta)
trigo = complex(np.cos(theta), np.sin(theta))

print(f"θ = π/4")
print(f"e^(iθ) = {euler}")
print(f"cos(θ) + i·sin(θ) = {trigo}")
print(f"Égaux ? {np.isclose(euler, trigo)}")

# L'identité d'Euler
print(f"\\ne^(iπ) + 1 = {cmath.exp(1j * np.pi) + 1}")

# Visualisation sur le cercle unité
theta = np.linspace(0, 2*np.pi, 100)
z = np.exp(1j * theta)

plt.figure(figsize=(8, 8))
plt.plot(z.real, z.imag, 'b-')
for t in [0, np.pi/4, np.pi/2, np.pi]:
    pt = np.exp(1j * t)
    plt.plot(pt.real, pt.imag, 'ro', markersize=10)
plt.axis('equal'); plt.grid()
plt.title('$e^{i\\\\theta}$ sur le cercle unité')
plt.show()`,
        exercice: `Vérifiez que $e^{i\\pi/2} = i$.`
    },

    euler_ex: {
        title: "Formule d'Euler : Exercice",
        theorie: `## Applications

- Forme exponentielle : $z = re^{i\\theta}$
- Multiplication : $z_1 z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$
- Formule de Moivre : $(e^{i\\theta})^n = e^{in\\theta}$
        `,
        code: `import cmath
import numpy as np

# Conversion polaire
z = 3 + 4j
r = abs(z)
theta = cmath.phase(z)

print(f"z = {z}")
print(f"Forme polaire : {r:.2f} · e^(i·{theta:.4f})")
print(f"Vérification : {r * np.exp(1j * theta)}")

# Formule de Moivre
print(f"\\nFormule de Moivre : (e^(iπ/6))^6 = e^(iπ)")
result = (np.exp(1j * np.pi/6))**6
print(f"Résultat : {result:.4f} ≈ {np.exp(1j * np.pi):.4f}")`,
        exercice: `Calculez $(1 + i)^8$ en utilisant la forme exponentielle.`
    },

    euler_explode: {
        title: "Exercice : Euler aléatoire explosif",
        theorie: `## Spirales complexes

$z(t) = e^{(a + ib)t}$ crée des spirales :
- $a > 0$ : spirale divergente
- $a < 0$ : spirale convergente
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 10, 1000)

fig, axes = plt.subplots(1, 3, figsize=(15, 5))

params = [(0.1, 1, 'Divergente'), (-0.1, 1, 'Convergente'), (0, 1, 'Cercle')]

for ax, (a, b, titre) in zip(axes, params):
    z = np.exp((a + 1j*b) * t)
    ax.plot(z.real, z.imag)
    ax.set_title(titre)
    ax.set_aspect('equal')
    ax.grid()

plt.tight_layout()
plt.show()`,
        exercice: `Créez une spirale avec $a$ et $b$ aléatoires.`
    },

    snakes: {
        title: "Exercice : Serpents avec cos et sin",
        theorie: `## Courbes de Lissajous

$$x(t) = A\\cos(at + \\delta)$$
$$y(t) = B\\sin(bt)$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 2*np.pi, 1000)

fig, axes = plt.subplots(2, 3, figsize=(12, 8))

params = [(1, 2), (2, 3), (3, 4), (3, 5), (5, 6), (9, 8)]

for ax, (a, b) in zip(axes.flat, params):
    x = np.cos(a * t)
    y = np.sin(b * t)
    ax.plot(x, y)
    ax.set_title(f'a={a}, b={b}')
    ax.set_aspect('equal')

plt.tight_layout()
plt.suptitle('Courbes de Lissajous', y=1.02)
plt.show()`,
        exercice: `Créez une animation de Lissajous avec $a/b$ qui varie.`
    },

    trig_bug: {
        title: "Chasse aux bugs Trigonométrie !",
        theorie: `
## Erreurs courantes

1. Confondre degrés et radians
2. Oublier que tan n'est pas définie en π/2
3. arcsin/arccos limités à [-1, 1]
        `,
        code: `import numpy as np

# Bug 1 : Degrés vs Radians
print("=== Bug degrés/radians ===")
print(f"np.sin(90) = {np.sin(90):.4f}")  # FAUX !
print(f"np.sin(np.radians(90)) = {np.sin(np.radians(90)):.4f}")  # OK

# Bug 2 : tan en π/2
print("\\n=== Bug tan(π/2) ===")
print(f"tan(π/2) ≈ {np.tan(np.pi/2)}")  # Très grand, pas infini

# Bug 3 : arcsin hors domaine
print("\\n=== Bug arcsin hors [-1, 1] ===")
try:
    np.arcsin(1.5)
except:
    print("arcsin(1.5) → Erreur ! (|x| doit être ≤ 1)")`,
        exercice: `Corrigez : \`angle = np.arcsin(sin(45))\``
    }
};
