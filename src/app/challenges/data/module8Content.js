// MODULE 8 : SECTIONS CONIQUES
export const module8Content = {
    parabolas: {
        title: "Tracer des paraboles",
        theorie: `
## La parabole

Équation canonique : $y = ax^2 + bx + c$

### Caractéristiques
- **Sommet** : $x_s = -\\frac{b}{2a}$
- **Foyer** : distance $\\frac{1}{4a}$ du sommet
- $a > 0$ : ouverte vers le haut
- $a < 0$ : ouverte vers le bas

### Forme vertex
$$y = a(x - h)^2 + k$$
où $(h, k)$ est le sommet.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 200)

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Différentes valeurs de a
for a in [0.5, 1, 2]:
    axes[0].plot(x, a*x**2, label=f'a = {a}')
axes[0].legend(); axes[0].grid()
axes[0].set_title('Effet de a sur y = ax²')

# Forme ax² + bx + c
a, b, c = 1, -4, 3
y = a*x**2 + b*x + c
xs = -b / (2*a)
ys = a*xs**2 + b*xs + c

axes[1].plot(x, y, 'b-', linewidth=2)
axes[1].plot(xs, ys, 'ro', markersize=10, label=f'Sommet ({xs}, {ys})')
axes[1].axhline(0, color='k'); axes[1].axvline(0, color='k')
axes[1].legend(); axes[1].grid()
axes[1].set_title(f'y = {a}x² + {b}x + {c}')

plt.tight_layout()
plt.show()`,
        exercice: `Tracez $y = -(x-2)^2 + 4$ et identifiez le sommet.`
    },

    contours: {
        title: "Créer des contours à partir de maillages",
        theorie: `
## Contours et maillages

Un **maillage** (meshgrid) crée une grille 2D pour évaluer des fonctions à deux variables.

\`\`\`python
X, Y = np.meshgrid(x, y)
Z = f(X, Y)
plt.contour(X, Y, Z)
\`\`\`

### Types de tracés
- \`contour\` : lignes de niveau
- \`contourf\` : remplissage coloré
- \`imshow\` : image de la surface
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# Créer le maillage
x = np.linspace(-3, 3, 100)
y = np.linspace(-3, 3, 100)
X, Y = np.meshgrid(x, y)

# Fonction à deux variables
Z = X**2 + Y**2  # Cercles concentriques

fig, axes = plt.subplots(1, 3, figsize=(15, 4))

# Contour simple
axes[0].contour(X, Y, Z, levels=10)
axes[0].set_title('contour')

# Contour rempli
axes[1].contourf(X, Y, Z, levels=20, cmap='viridis')
axes[1].set_title('contourf')

# Image
axes[2].imshow(Z, extent=[-3, 3, -3, 3], origin='lower', cmap='hot')
axes[2].set_title('imshow')

for ax in axes:
    ax.set_aspect('equal')

plt.tight_layout()
plt.show()`,
        exercice: `Créez un contour de $z = \\sin(x) \\cdot \\cos(y)$`
    },

    circles: {
        title: "Tracer des cercles",
        theorie: `
## Le cercle

Équation : $(x - h)^2 + (y - k)^2 = r^2$
- Centre : $(h, k)$
- Rayon : $r$

### Forme paramétrique
$$x = h + r\\cos\\theta$$
$$y = k + r\\sin\\theta$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0, 2*np.pi, 100)

fig, ax = plt.subplots(figsize=(8, 8))

# Plusieurs cercles
cercles = [(0, 0, 1), (0, 0, 2), (1, 1, 1.5)]
for h, k, r in cercles:
    x = h + r * np.cos(theta)
    y = k + r * np.sin(theta)
    ax.plot(x, y, label=f'Centre ({h},{k}), r={r}')

# Méthode avec contour
X, Y = np.meshgrid(np.linspace(-4, 4, 200), np.linspace(-4, 4, 200))
ax.contour(X, Y, X**2 + Y**2, levels=[9], colors='red', linestyles='--')

ax.set_aspect('equal')
ax.legend(); ax.grid()
ax.axhline(0, color='k'); ax.axvline(0, color='k')
ax.set_title('Cercles')
plt.show()`,
        exercice: `Tracez le cercle de centre $(2, -1)$ et de rayon 3.`
    },

    ellipses: {
        title: "Tracer des ellipses",
        theorie: `
## L'ellipse

Équation : $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$
- Centre : $(h, k)$
- Demi-axes : $a$ (horizontal), $b$ (vertical)
- Excentricité : $e = \\sqrt{1 - \\frac{b^2}{a^2}}$ si $a > b$

### Forme paramétrique
$$x = h + a\\cos\\theta$$
$$y = k + b\\sin\\theta$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0, 2*np.pi, 100)

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Ellipse paramétrique
h, k = 0, 0
a, b = 3, 2
x = h + a * np.cos(theta)
y = k + b * np.sin(theta)

axes[0].plot(x, y, 'b-', linewidth=2)
axes[0].plot(h, k, 'ro', label='Centre')

# Foyers
c = np.sqrt(a**2 - b**2)
axes[0].plot([h-c, h+c], [k, k], 'g*', markersize=12, label='Foyers')

axes[0].set_aspect('equal'); axes[0].grid(); axes[0].legend()
axes[0].set_title(f'Ellipse a={a}, b={b}')

# Famille d'ellipses
for a, b in [(2, 1), (3, 2), (4, 1)]:
    x = a * np.cos(theta)
    y = b * np.sin(theta)
    axes[1].plot(x, y, label=f'a={a}, b={b}')

axes[1].set_aspect('equal'); axes[1].grid(); axes[1].legend()
axes[1].set_title('Famille d\\'ellipses')

plt.tight_layout()
plt.show()`,
        exercice: `Tracez l'ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ et placez ses foyers.`
    },

    hyperbolas: {
        title: "Tracer des hyperboles",
        theorie: `
## L'hyperbole

Équation : $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$

### Caractéristiques
- Sommets : $(\\pm a, 0)$
- Foyers : $(\\pm c, 0)$ où $c = \\sqrt{a^2 + b^2}$
- Asymptotes : $y = \\pm \\frac{b}{a}x$

### Forme paramétrique
$$x = a\\cosh(t), \\quad y = b\\sinh(t)$$
ou avec $\\sec$ et $\\tan$.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(10, 8))

a, b = 2, 1

# Méthode implicite avec contour
x = np.linspace(-5, 5, 400)
y = np.linspace(-4, 4, 400)
X, Y = np.meshgrid(x, y)
Z = X**2/a**2 - Y**2/b**2

ax.contour(X, Y, Z, levels=[1], colors='blue', linewidths=2)

# Asymptotes
x_asymp = np.linspace(-5, 5, 100)
ax.plot(x_asymp, (b/a)*x_asymp, 'r--', label='Asymptotes')
ax.plot(x_asymp, -(b/a)*x_asymp, 'r--')

# Sommets et foyers
c = np.sqrt(a**2 + b**2)
ax.plot([-a, a], [0, 0], 'go', markersize=10, label='Sommets')
ax.plot([-c, c], [0, 0], 'm*', markersize=12, label='Foyers')

ax.set_xlim(-5, 5); ax.set_ylim(-4, 4)
ax.set_aspect('equal'); ax.grid(); ax.legend()
ax.axhline(0, color='k'); ax.axvline(0, color='k')
ax.set_title(f'Hyperbole x²/{a}² - y²/{b}² = 1')
plt.show()`,
        exercice: `Tracez $\\frac{y^2}{4} - \\frac{x^2}{9} = 1$ (hyperbole verticale).`
    },

    conic_bug: {
        title: "Chasse aux bugs Coniques !",
        theorie: `
## Erreurs courantes

1. Oublier \`set_aspect('equal')\` → cercles déformés
2. Division par zéro aux asymptotes
3. Confusion entre $a$ et $b$ pour ellipses/hyperboles
4. Mauvaise orientation du meshgrid
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# Bug 1 : Cercle déformé
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

theta = np.linspace(0, 2*np.pi, 100)
x, y = np.cos(theta), np.sin(theta)

axes[0].plot(x, y)
axes[0].set_title('Bug : pas de aspect equal')

axes[1].plot(x, y)
axes[1].set_aspect('equal')
axes[1].set_title('Correct : aspect equal')

plt.tight_layout()
plt.show()

# Bug 2 : Division par zéro pour hyperbole
# y = b * sqrt(x²/a² - 1) → problème si |x| < a
print("Pour tracer une hyperbole, utilisez contour ou paramétrique !")`,
        exercice: `Corrigez ce code qui trace un cercle aplati.`
    }
};
