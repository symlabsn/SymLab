// MODULE 10 : ART DE LA TRIGONOMETRIE
export const module10Content = {
    astroid: {
        title: "Courbe radiale Astroïde",
        theorie: `
## L'Astroïde

L'astroïde est une hypocycloïde à 4 pointes.

### Équations paramétriques
$$x = a\\cos^3(t)$$
$$y = a\\sin^3(t)$$

### Équation implicite
$$x^{2/3} + y^{2/3} = a^{2/3}$$

C'est la courbe enveloppe d'un segment de longueur $a$ dont les extrémités glissent sur les axes.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 2*np.pi, 500)
a = 2

x = a * np.cos(t)**3
y = a * np.sin(t)**3

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Astroïde simple
axes[0].plot(x, y, 'b-', linewidth=2)
axes[0].set_aspect('equal'); axes[0].grid()
axes[0].set_title('Astroïde')

# Famille d'astroïdes
for a in [0.5, 1, 1.5, 2]:
    x = a * np.cos(t)**3
    y = a * np.sin(t)**3
    axes[1].plot(x, y, linewidth=2, label=f'a = {a}')
axes[1].set_aspect('equal'); axes[1].grid(); axes[1].legend()
axes[1].set_title('Famille d\\'astroïdes')

plt.tight_layout()
plt.show()`,
        exercice: `Tracez l'astroïde et ajoutez quelques segments tangents glissant sur les axes.`
    },

    rose: {
        title: "Courbes en rose",
        theorie: `
## Courbes rhodonées (roses)

### Équation polaire
$$r = a\\cos(n\\theta) \\text{ ou } r = a\\sin(n\\theta)$$

### Nombre de pétales
- $n$ impair → $n$ pétales
- $n$ pair → $2n$ pétales

### Conversion en cartésien
$$x = r\\cos\\theta = a\\cos(n\\theta)\\cos\\theta$$
$$y = r\\sin\\theta = a\\cos(n\\theta)\\sin\\theta$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0, 2*np.pi, 1000)

fig, axes = plt.subplots(2, 3, figsize=(12, 8))
axes = axes.flatten()

petales = [2, 3, 4, 5, 6, 7]

for ax, n in zip(axes, petales):
    r = np.cos(n * theta)
    x = r * np.cos(theta)
    y = r * np.sin(theta)
    ax.plot(x, y, linewidth=2)
    ax.set_aspect('equal')
    ax.set_title(f'n = {n} → {n if n % 2 == 1 else 2*n} pétales')
    ax.grid(alpha=0.3)

plt.suptitle('Courbes en rose : r = cos(nθ)', fontsize=14)
plt.tight_layout()
plt.show()`,
        exercice: `Tracez $r = \\sin(5\\theta)$ et $r = \\cos(8\\theta)$ et comptez les pétales.`
    },

    squircle: {
        title: "Le Squircle",
        theorie: `
## Le Squircle

Un **squircle** est un intermédiaire entre un carré et un cercle.

### Équation
$$|x|^n + |y|^n = r^n$$

- $n = 2$ → cercle
- $n → ∞$ → carré
- $n = 4$ → squircle typique

Aussi appelé **superellipse** de Lamé.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0, 2*np.pi, 1000)

fig, ax = plt.subplots(figsize=(8, 8))

for n in [2, 2.5, 3, 4, 6, 10]:
    # Forme paramétrique du squircle
    x = np.sign(np.cos(theta)) * np.abs(np.cos(theta))**(2/n)
    y = np.sign(np.sin(theta)) * np.abs(np.sin(theta))**(2/n)
    ax.plot(x, y, linewidth=2, label=f'n = {n}')

ax.set_aspect('equal')
ax.legend()
ax.grid(alpha=0.3)
ax.set_title('Squircles : |x|ⁿ + |y|ⁿ = 1')
plt.show()`,
        exercice: `Créez une animation qui passe progressivement du cercle au carré.`
    },

    log_spiral: {
        title: "Spirale logarithmique",
        theorie: `
## Spirale logarithmique

### Équation polaire
$$r = ae^{b\\theta}$$

### Propriétés remarquables
- Autosimilaire (même forme à toute échelle)
- La tangente fait un angle constant avec le rayon
- Présente dans la nature (coquillages, galaxies)

Aussi appelée **spira mirabilis**.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0, 6*np.pi, 1000)

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Spirale simple
a, b = 0.1, 0.2
r = a * np.exp(b * theta)
x = r * np.cos(theta)
y = r * np.sin(theta)

axes[0].plot(x, y, 'b-', linewidth=2)
axes[0].set_aspect('equal'); axes[0].grid()
axes[0].set_title(f'Spirale log : r = {a}·e^({b}θ)')

# Différentes valeurs de b
for b in [0.1, 0.15, 0.2, 0.3]:
    r = 0.1 * np.exp(b * theta)
    x = r * np.cos(theta)
    y = r * np.sin(theta)
    axes[1].plot(x, y, linewidth=2, label=f'b = {b}')

axes[1].set_aspect('equal'); axes[1].grid(); axes[1].legend()
axes[1].set_title('Effet du paramètre b')

plt.tight_layout()
plt.show()`,
        exercice: `Tracez une spirale qui ressemble à un nautilus (b ≈ 0.17).`
    },

    logistic: {
        title: "Application logistique",
        theorie: `
## L'application logistique

$$x_{n+1} = rx_n(1 - x_n)$$

### Comportement selon $r$
- $r < 1$ : extinction
- $1 < r < 3$ : point fixe
- $3 < r < 3.57$ : cycles
- $r > 3.57$ : chaos

Le **diagramme de bifurcation** montre cette transition vers le chaos.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

def logistic(r, x0, n):
    """Itère l'application logistique n fois"""
    x = np.zeros(n)
    x[0] = x0
    for i in range(1, n):
        x[i] = r * x[i-1] * (1 - x[i-1])
    return x

# Différents régimes
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

params = [(2.5, 'Point fixe'), (3.2, 'Cycle-2'), 
          (3.5, 'Cycle-4'), (3.9, 'Chaos')]

for ax, (r, titre) in zip(axes.flat, params):
    x = logistic(r, 0.1, 50)
    ax.plot(x, 'o-', markersize=4)
    ax.set_title(f'r = {r} : {titre}')
    ax.set_xlabel('n'); ax.set_ylabel('x_n')
    ax.grid()

plt.tight_layout()
plt.show()

# Diagramme de bifurcation
r_values = np.linspace(2.5, 4, 1000)
iterations = 1000
last = 100

x = 0.1 * np.ones(len(r_values))
plt.figure(figsize=(12, 6))
for i in range(iterations):
    x = r_values * x * (1 - x)
    if i >= (iterations - last):
        plt.plot(r_values, x, ',k', alpha=0.25)

plt.xlabel('r'); plt.ylabel('x')
plt.title('Diagramme de bifurcation')
plt.show()`,
        exercice: `Trouvez numériquement la valeur de $r$ où apparaît le premier dédoublement.`
    }
};
