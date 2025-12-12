// ============================================================
// CONTENU ENRICHI NUMPY & MATPLOTLIB
// Pour renforcer l'apprentissage avec des exemples pratiques
// ============================================================

export const numpyMatplotlibContent = {
    // ============================================================
    // MODULE 4 : TYPES DE DONNÉES - NUMPY ENRICHI
    // ============================================================

    lists_numpy_enriched: {
        title: "Maîtriser NumPy : Tableaux et opérations",
        theorie: `
## NumPy : La base du calcul scientifique en Python

**NumPy** (Numerical Python) est LA bibliothèque fondamentale pour le calcul scientifique. Elle fournit :

### Pourquoi NumPy ?

| Caractéristique | Listes Python | NumPy Arrays |
|-----------------|---------------|--------------|
| Vitesse | Lente | **100x plus rapide** |
| Mémoire | Inefficace | Optimisée |
| Opérations | Boucles | **Vectorisées** |
| Types | Mixtes | Homogènes |

### Création de tableaux

\`\`\`python
import numpy as np

# À partir d'une liste
arr = np.array([1, 2, 3, 4, 5])

# Tableaux spéciaux
np.zeros(5)           # [0, 0, 0, 0, 0]
np.ones(5)            # [1, 1, 1, 1, 1]
np.arange(0, 10, 2)   # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)  # [0, 0.25, 0.5, 0.75, 1]
\`\`\`

### Opérations vectorisées

$$\\vec{a} + \\vec{b} = [a_1 + b_1, a_2 + b_2, ..., a_n + b_n]$$

NumPy applique les opérations élément par élément automatiquement !
        `,
        code: `import numpy as np

# ===============================================
# CRÉATION DE TABLEAUX
# ===============================================
print("=== Création de tableaux NumPy ===")

# Tableau 1D
arr1d = np.array([1, 2, 3, 4, 5])
print(f"Tableau 1D : {arr1d}")
print(f"Type : {arr1d.dtype}, Forme : {arr1d.shape}")

# Tableaux spéciaux
print(f"\\nzeros(5) : {np.zeros(5)}")
print(f"ones(5) : {np.ones(5)}")
print(f"arange(0, 10, 2) : {np.arange(0, 10, 2)}")
print(f"linspace(0, 1, 5) : {np.linspace(0, 1, 5)}")

# Tableau 2D (matrice)
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print(f"\\nTableau 2D :\\n{arr2d}")
print(f"Forme : {arr2d.shape}")

# ===============================================
# OPÉRATIONS VECTORISÉES
# ===============================================
print("\\n=== Opérations vectorisées ===")

a = np.array([1, 2, 3, 4, 5])
b = np.array([10, 20, 30, 40, 50])

print(f"a = {a}")
print(f"b = {b}")
print(f"a + b = {a + b}")
print(f"a * b = {a * b}")
print(f"a ** 2 = {a ** 2}")
print(f"np.sqrt(a) = {np.sqrt(a)}")

# ===============================================
# FONCTIONS STATISTIQUES
# ===============================================
print("\\n=== Statistiques ===")

data = np.array([23, 45, 67, 12, 89, 34, 56])
print(f"Données : {data}")
print(f"Moyenne : {np.mean(data):.2f}")
print(f"Médiane : {np.median(data):.2f}")
print(f"Écart-type : {np.std(data):.2f}")
print(f"Min/Max : {np.min(data)}/{np.max(data)}")
print(f"Somme : {np.sum(data)}")

# ===============================================
# INDEXATION ET SLICING
# ===============================================
print("\\n=== Indexation ===")

arr = np.arange(10)
print(f"arr = {arr}")
print(f"arr[3] = {arr[3]}")
print(f"arr[2:7] = {arr[2:7]}")
print(f"arr[::2] = {arr[::2]}")
print(f"arr[-3:] = {arr[-3:]}")

# Indexation booléenne
print(f"\\narr > 5 : {arr[arr > 5]}")
print(f"arr % 2 == 0 : {arr[arr % 2 == 0]}")`,
        exercice: `
**Exercices NumPy :**

1. Créez un tableau de 100 éléments de 0 à 99
2. Calculez le carré de chaque élément
3. Trouvez tous les éléments divisibles par 7
4. Calculez la moyenne des éléments > 50
5. Créez une matrice 5×5 remplie de 1 à 25
        `
    },

    // ============================================================
    // MODULE 6 : GRAPHIQUES MATPLOTLIB ENRICHI
    // ============================================================

    matplotlib_basics: {
        title: "Matplotlib : Visualisation de données",
        theorie: `
## Matplotlib : La référence pour les graphiques

**Matplotlib** permet de créer des visualisations de qualité publication.

### Structure de base

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Méthode simple
plt.plot(x, y)
plt.show()

# Méthode orientée objet (recommandée)
fig, ax = plt.subplots()
ax.plot(x, y)
plt.show()
\`\`\`

### Types de graphiques

| Fonction | Description |
|----------|-------------|
| plot() | Courbes |
| scatter() | Nuages de points |
| bar() | Histogrammes |
| hist() | Distribution |
| imshow() | Images/matrices |
| contour() | Courbes de niveau |

### Personnalisation

\`\`\`python
plt.plot(x, y, 'r--', linewidth=2, label='sin(x)')
plt.title('Mon graphique')
plt.xlabel('x'); plt.ylabel('y')
plt.legend()
plt.grid(True)
\`\`\`
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# GRAPHIQUE SIMPLE
# ===============================================

x = np.linspace(0, 2*np.pi, 100)
y_sin = np.sin(x)
y_cos = np.cos(x)

# Création de la figure
fig, ax = plt.subplots(figsize=(10, 6))

# Tracé des courbes
ax.plot(x, y_sin, 'b-', linewidth=2, label='sin(x)')
ax.plot(x, y_cos, 'r--', linewidth=2, label='cos(x)')

# Personnalisation
ax.set_title('Fonctions trigonométriques', fontsize=16, fontweight='bold')
ax.set_xlabel('x (radians)', fontsize=12)
ax.set_ylabel('y', fontsize=12)
ax.legend(loc='upper right', fontsize=11)
ax.grid(True, alpha=0.3)
ax.axhline(y=0, color='k', linewidth=0.5)

# Limites
ax.set_xlim([0, 2*np.pi])
ax.set_ylim([-1.5, 1.5])

plt.tight_layout()
plt.show()

print("Graphique créé avec succès !")`,
        exercice: `
**Exercice Matplotlib :**

1. Tracez \\( y = x^2 \\), \\( y = x^3 \\), \\( y = \\sqrt{x} \\) sur \\([0, 4]\\)
2. Utilisez des couleurs et styles différents
3. Ajoutez titre, labels, légende et grille
4. Marquez les points d'intersection
        `
    },

    multiple_plots: {
        title: "Sous-graphiques et layouts avancés",
        theorie: `
## Sous-graphiques avec Matplotlib

### Méthode subplots

\`\`\`python
fig, axes = plt.subplots(2, 3)  # Grille 2×3
axes[0, 0].plot(x, y)           # Accès par indices
\`\`\`

### Options de layout

\`\`\`python
fig, axes = plt.subplots(2, 2, figsize=(12, 8))
plt.tight_layout()  # Ajustement automatique
\`\`\`

### Avantages

- Comparaison facile de données
- Organisation claire
- Partage d'axes possible
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# GRILLE DE SOUS-GRAPHIQUES 2×2
# ===============================================

x = np.linspace(-3, 3, 200)

# Créer la grille
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
fig.suptitle('Galerie de fonctions mathématiques', fontsize=16, fontweight='bold')

# Graphique 1 : Polynômes
ax1 = axes[0, 0]
for n in range(1, 5):
    ax1.plot(x, x**n, label=f'x^{n}')
ax1.set_title('Puissances de x')
ax1.set_xlabel('x'); ax1.set_ylabel('y')
ax1.legend(); ax1.grid(True, alpha=0.3)
ax1.set_ylim([-10, 10])

# Graphique 2 : Fonctions trigonométriques
ax2 = axes[0, 1]
ax2.plot(x, np.sin(x), 'b-', label='sin(x)')
ax2.plot(x, np.cos(x), 'r-', label='cos(x)')
ax2.set_title('Trigonométrie')
ax2.legend(); ax2.grid(True, alpha=0.3)

# Graphique 3 : Histogramme
ax3 = axes[1, 0]
data = np.random.randn(1000)
ax3.hist(data, bins=30, color='steelblue', edgecolor='white', alpha=0.7)
ax3.set_title('Distribution normale (1000 échantillons)')
ax3.set_xlabel('Valeur'); ax3.set_ylabel('Fréquence')

# Graphique 4 : Scatter plot
ax4 = axes[1, 1]
n_points = 100
x_scatter = np.random.randn(n_points)
y_scatter = x_scatter + 0.5 * np.random.randn(n_points)
colors = np.sqrt(x_scatter**2 + y_scatter**2)
scatter = ax4.scatter(x_scatter, y_scatter, c=colors, cmap='viridis', s=50, alpha=0.7)
ax4.set_title('Nuage de points avec corrélation')
ax4.set_xlabel('x'); ax4.set_ylabel('y')
plt.colorbar(scatter, ax=ax4, label='Distance')

plt.tight_layout()
plt.show()

print("Grille de graphiques créée !")`,
        exercice: `
**Exercice :**

Créez une grille 3×2 avec :
1. sin(x), cos(x), tan(x)
2. Leurs dérivées respectives
        `
    },

    // ============================================================
    // MODULE 9 : TRIGONOMÉTRIE VISUALISÉE
    // ============================================================

    trig_visualization: {
        title: "Visualiser la trigonométrie avec NumPy/Matplotlib",
        theorie: `
## Trigonométrie interactive

### Le cercle trigonométrique

Un point sur le cercle unité :
$$P(\\theta) = (\\cos\\theta, \\sin\\theta)$$

### Fonctions oscillantes

$$y(t) = A \\sin(\\omega t + \\phi)$$

où :
- \\( A \\) = amplitude
- \\( \\omega \\) = pulsation (rad/s)
- \\( \\phi \\) = phase

### Avec NumPy

\`\`\`python
theta = np.linspace(0, 2*np.pi, 100)
x = np.cos(theta)
y = np.sin(theta)
\`\`\`
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# CERCLE TRIGONOMÉTRIQUE INTERACTIF
# ===============================================

fig, axes = plt.subplots(1, 2, figsize=(14, 6))

# --- Cercle trigonométrique ---
ax1 = axes[0]
theta = np.linspace(0, 2*np.pi, 100)
ax1.plot(np.cos(theta), np.sin(theta), 'b-', linewidth=2)

# Points remarquables
angles = [0, np.pi/6, np.pi/4, np.pi/3, np.pi/2, np.pi]
labels = ['0', 'pi/6', 'pi/4', 'pi/3', 'pi/2', 'pi']
colors_pts = plt.cm.rainbow(np.linspace(0, 1, len(angles)))

for angle, label, color in zip(angles, labels, colors_pts):
    x, y = np.cos(angle), np.sin(angle)
    ax1.plot(x, y, 'o', markersize=10, color=color)
    ax1.plot([0, x], [0, y], '--', color=color, alpha=0.5)

ax1.axhline(0, color='k', linewidth=0.5)
ax1.axvline(0, color='k', linewidth=0.5)
ax1.set_aspect('equal')
ax1.set_title('Cercle trigonométrique', fontsize=14)
ax1.set_xlim([-1.5, 1.5]); ax1.set_ylim([-1.5, 1.5])
ax1.grid(True, alpha=0.3)

# --- Fonctions sin et cos ---
ax2 = axes[1]
x = np.linspace(0, 4*np.pi, 200)

ax2.plot(x, np.sin(x), 'b-', linewidth=2, label='sin(x)')
ax2.plot(x, np.cos(x), 'r-', linewidth=2, label='cos(x)')
ax2.fill_between(x, np.sin(x), alpha=0.2, color='blue')

ax2.axhline(0, color='k', linewidth=0.5)
ax2.set_xlabel('x (radians)', fontsize=12)
ax2.set_ylabel('y', fontsize=12)
ax2.set_title('Fonctions sinusoïdales', fontsize=14)
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Visualisation trigonométrique créée !")`,
        exercice: `
**Exercice :**

1. Créez un cercle avec 12 points équidistants
2. Tracez sin(x), sin(2x), sin(3x) sur le même graphique
3. Animez un point qui tourne sur le cercle
        `
    },

    waves_interference: {
        title: "Ondes et interférences",
        theorie: `
## Superposition d'ondes

### Principe de superposition

$$y_{total} = y_1 + y_2 = A_1\\sin(kx - \\omega t) + A_2\\sin(kx - \\omega t + \\phi)$$

### Interférences

- **Constructives** : \\(\\phi = 0\\) → amplitude double
- **Destructives** : \\(\\phi = \\pi\\) → annulation

### Battements

Deux ondes de fréquences proches :
$$y = 2A\\cos\\left(\\frac{\\omega_1 - \\omega_2}{2}t\\right)\\sin\\left(\\frac{\\omega_1 + \\omega_2}{2}t\\right)$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# INTERFÉRENCES D'ONDES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

x = np.linspace(0, 4*np.pi, 500)

# --- Interférence constructive ---
ax1 = axes[0, 0]
y1 = np.sin(x)
y2 = np.sin(x)  # Même phase
y_sum = y1 + y2

ax1.plot(x, y1, 'b--', alpha=0.5, label='Onde 1')
ax1.plot(x, y2, 'r--', alpha=0.5, label='Onde 2')
ax1.plot(x, y_sum, 'g-', linewidth=2, label='Somme')
ax1.set_title('Interférence CONSTRUCTIVE', fontsize=12)
ax1.legend(); ax1.grid(True, alpha=0.3)

# --- Interférence destructive ---
ax2 = axes[0, 1]
y1 = np.sin(x)
y2 = np.sin(x + np.pi)  # Phase opposée
y_sum = y1 + y2

ax2.plot(x, y1, 'b--', alpha=0.5, label='Onde 1')
ax2.plot(x, y2, 'r--', alpha=0.5, label='Onde 2 (phi = pi)')
ax2.plot(x, y_sum, 'g-', linewidth=2, label='Somme = 0')
ax2.set_title('Interférence DESTRUCTIVE', fontsize=12)
ax2.legend(); ax2.grid(True, alpha=0.3)

# --- Battements ---
ax3 = axes[1, 0]
t = np.linspace(0, 10, 1000)
f1, f2 = 5, 5.5  # Fréquences proches
y1 = np.sin(2*np.pi*f1*t)
y2 = np.sin(2*np.pi*f2*t)
y_battement = y1 + y2

envelope = 2 * np.cos(np.pi*(f1-f2)*t)

ax3.plot(t, y_battement, 'b-', alpha=0.7, label='Superposition')
ax3.plot(t, envelope, 'r--', linewidth=2, label='Enveloppe')
ax3.plot(t, -envelope, 'r--', linewidth=2)
ax3.set_title('Battements (f1=5Hz, f2=5.5Hz)', fontsize=12)
ax3.set_xlabel('Temps (s)')
ax3.legend(); ax3.grid(True, alpha=0.3)

# --- Onde stationnaire ---
ax4 = axes[1, 1]
x_wave = np.linspace(0, 2*np.pi, 200)
temps = [0, 0.25, 0.5, 0.75, 1.0]
colors_wave = plt.cm.viridis(np.linspace(0, 1, len(temps)))

for t_val, color in zip(temps, colors_wave):
    y = 2 * np.sin(x_wave) * np.cos(2*np.pi*t_val)
    ax4.plot(x_wave, y, color=color, label=f't = {t_val}')

ax4.set_title('Onde stationnaire', fontsize=12)
ax4.set_xlabel('Position')
ax4.legend(loc='upper right')
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Visualisation des interférences créée !")`,
        exercice: `
**Exercice :**

1. Créez une animation de deux ondes qui interfèrent
2. Variez la phase de 0 à 2pi
3. Visualisez les battements pour f1=440Hz et f2=442Hz
        `
    },

    // ============================================================
    // MODULE 12 : ALGÈBRE LINÉAIRE NUMPY
    // ============================================================

    linalg_numpy: {
        title: "Algèbre linéaire avec NumPy",
        theorie: `
## numpy.linalg : Algèbre linéaire rapide

### Opérations matricielles

\`\`\`python
import numpy as np
from numpy.linalg import det, inv, eig, svd, solve

# Déterminant et inverse
np.linalg.det(A)
np.linalg.inv(A)

# Valeurs propres
eigenvalues, eigenvectors = np.linalg.eig(A)

# Résolution Ax = b
x = np.linalg.solve(A, b)

# SVD
U, S, Vt = np.linalg.svd(A)
\`\`\`

### Avantages NumPy vs SymPy

| NumPy | SymPy |
|-------|-------|
| Rapide | Exact |
| Numérique | Symbolique |
| Grands calculs | Formules |
        `,
        code: `import numpy as np
from numpy.linalg import det, inv, eig, solve, matrix_rank
import matplotlib.pyplot as plt

# ===============================================
# OPÉRATIONS MATRICIELLES
# ===============================================
print("=== Algèbre linéaire NumPy ===")

# Matrice 3×3
A = np.array([[4, 2, 1],
              [2, 5, 3],
              [1, 3, 6]])

print(f"Matrice A :\\n{A}")
print(f"\\nDéterminant : {det(A):.4f}")
print(f"Rang : {matrix_rank(A)}")

# Inverse
A_inv = inv(A)
print(f"\\nInverse A^-1 :\\n{np.round(A_inv, 4)}")

# Vérification
print(f"\\nA @ A^-1 = I ?\\n{np.round(A @ A_inv, 10)}")

# ===============================================
# VALEURS PROPRES
# ===============================================
print("\\n=== Valeurs propres ===")

eigenvalues, eigenvectors = eig(A)
print(f"Valeurs propres : {np.round(eigenvalues, 4)}")
print(f"\\nVecteurs propres :\\n{np.round(eigenvectors, 4)}")

# ===============================================
# RÉSOLUTION DE SYSTÈME
# ===============================================
print("\\n=== Résolution Ax = b ===")

b = np.array([1, 2, 3])
x = solve(A, b)
print(f"b = {b}")
print(f"Solution x = {np.round(x, 4)}")
print(f"Vérification A@x = {np.round(A @ x, 10)}")

# ===============================================
# VISUALISATION : TRANSFORMATION LINÉAIRE
# ===============================================

# Matrice de transformation 2D
T = np.array([[2, 0.5],
              [0.5, 1]])

# Cercle original
theta = np.linspace(0, 2*np.pi, 100)
circle = np.array([np.cos(theta), np.sin(theta)])

# Transformation
ellipse = T @ circle

# Tracé
fig, ax = plt.subplots(figsize=(8, 8))
ax.plot(circle[0], circle[1], 'b-', linewidth=2, label='Cercle original')
ax.plot(ellipse[0], ellipse[1], 'r-', linewidth=2, label='Après transformation')

ax.set_aspect('equal')
ax.set_xlim([-3, 3]); ax.set_ylim([-3, 3])
ax.legend()
ax.grid(True, alpha=0.3)
ax.set_title('Transformation linéaire (cercle vers ellipse)')

plt.show()

print("\\nGraphique de transformation créé !")`,
        exercice: `
**Exercice :**

1. Créez une matrice de rotation 45 degrés
2. Appliquez-la à un carré
3. Visualisez le résultat
4. Calculez ses valeurs propres (complexes !)
        `
    },

    matrix_visualization: {
        title: "Visualiser les matrices",
        theorie: `
## Représentation visuelle des matrices

### Heatmap (carte de chaleur)

\`\`\`python
plt.imshow(matrix, cmap='viridis')
plt.colorbar()
\`\`\`

### Interprétation

- Valeurs élevées = couleur chaude
- Valeurs basses = couleur froide
- Patterns visuels = structure

### Applications

- Corrélations
- Images numériques
- Matrices de confusion
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# VISUALISATION DE MATRICES
# ===============================================

fig, axes = plt.subplots(2, 3, figsize=(15, 10))

# --- Matrice identité ---
ax1 = axes[0, 0]
I = np.eye(10)
im1 = ax1.imshow(I, cmap='Blues')
ax1.set_title('Matrice identité I_10')
plt.colorbar(im1, ax=ax1)

# --- Matrice aléatoire ---
ax2 = axes[0, 1]
R = np.random.randn(10, 10)
im2 = ax2.imshow(R, cmap='RdBu_r')
ax2.set_title('Matrice aléatoire')
plt.colorbar(im2, ax=ax2)

# --- Matrice de corrélation ---
ax3 = axes[0, 2]
data = np.random.randn(100, 5)
data[:, 1] = data[:, 0] + 0.5 * np.random.randn(100)
data[:, 4] = -data[:, 2] + 0.3 * np.random.randn(100)
corr = np.corrcoef(data.T)
im3 = ax3.imshow(corr, cmap='coolwarm', vmin=-1, vmax=1)
ax3.set_title('Matrice de corrélation')
plt.colorbar(im3, ax=ax3)

# --- Matrice de Vandermonde ---
ax4 = axes[1, 0]
x_vand = np.linspace(0, 1, 8)
V = np.vander(x_vand, 8)
im4 = ax4.imshow(np.log10(np.abs(V) + 1e-10), cmap='plasma')
ax4.set_title('Matrice de Vandermonde (log)')
plt.colorbar(im4, ax=ax4)

# --- Matrice de Hilbert ---
ax5 = axes[1, 1]
n = 10
H = np.array([[1/(i+j+1) for j in range(n)] for i in range(n)])
im5 = ax5.imshow(np.log10(H), cmap='viridis')
ax5.set_title('Matrice de Hilbert (log)')
plt.colorbar(im5, ax=ax5)

# --- Motif de rotation ---
ax6 = axes[1, 2]
angles = np.linspace(0, 2*np.pi, 100)
rot_matrix = np.outer(np.cos(angles), np.cos(angles))
im6 = ax6.imshow(rot_matrix, cmap='twilight')
ax6.set_title('Motif de rotation')
plt.colorbar(im6, ax=ax6)

plt.tight_layout()
plt.show()

# Conditionnement
print("=== Conditionnement ===")
print(f"cond(I) = {np.linalg.cond(I):.2f}")
print(f"cond(H) = {np.linalg.cond(H):.2e} (tres mal conditionnee !)")

print("\\nVisualisations de matrices créées !")`,
        exercice: `
**Exercice :**

1. Créez une matrice 20×20 avec un motif en damier
2. Visualisez-la avec différentes palettes de couleurs
3. Calculez et visualisez son inverse
        `
    },

    // ============================================================
    // MODULE 13 : PROBABILITÉS ET STATISTIQUES
    // ============================================================

    stats_visualization: {
        title: "Visualiser les distributions statistiques",
        theorie: `
## Distributions avec NumPy et Matplotlib

### Générer des échantillons

\`\`\`python
# Normale
np.random.normal(mu, sigma, size)

# Uniforme
np.random.uniform(low, high, size)

# Autres
np.random.exponential(scale, size)
np.random.poisson(lam, size)
\`\`\`

### Histogrammes

\`\`\`python
plt.hist(data, bins=30, density=True)
\`\`\`

### Densité de probabilité

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# COMPARAISON DE DISTRIBUTIONS
# ===============================================

np.random.seed(42)
n_samples = 10000

fig, axes = plt.subplots(2, 3, figsize=(15, 10))

# --- Distribution Normale ---
ax1 = axes[0, 0]
data_normal = np.random.normal(0, 1, n_samples)
ax1.hist(data_normal, bins=50, density=True, alpha=0.7, color='steelblue', edgecolor='white')
x_norm = np.linspace(-4, 4, 100)
ax1.plot(x_norm, 1/np.sqrt(2*np.pi) * np.exp(-x_norm**2/2), 'r-', linewidth=2, label='Théorique')
ax1.set_title(f'Normale N(0,1)')
ax1.legend()

# --- Distribution Uniforme ---
ax2 = axes[0, 1]
data_uniform = np.random.uniform(0, 1, n_samples)
ax2.hist(data_uniform, bins=50, density=True, alpha=0.7, color='green', edgecolor='white')
ax2.axhline(1, color='r', linewidth=2, label='Théorique')
ax2.set_title('Uniforme [0,1]')
ax2.legend()

# --- Distribution Exponentielle ---
ax3 = axes[0, 2]
lam = 2
data_exp = np.random.exponential(1/lam, n_samples)
ax3.hist(data_exp, bins=50, density=True, alpha=0.7, color='orange', edgecolor='white')
x_exp = np.linspace(0, 4, 100)
ax3.plot(x_exp, lam * np.exp(-lam * x_exp), 'r-', linewidth=2, label='Théorique')
ax3.set_title(f'Exponentielle lambda={lam}')
ax3.legend()

# --- Distribution de Poisson ---
ax4 = axes[1, 0]
mu_poisson = 5
data_poisson = np.random.poisson(mu_poisson, n_samples)
values, counts = np.unique(data_poisson, return_counts=True)
ax4.bar(values, counts/n_samples, alpha=0.7, color='purple', edgecolor='white')
ax4.set_title(f'Poisson lambda={mu_poisson}')

# --- Distribution Binomiale ---
ax5 = axes[1, 1]
n_trials, p = 20, 0.3
data_binom = np.random.binomial(n_trials, p, n_samples)
values, counts = np.unique(data_binom, return_counts=True)
ax5.bar(values, counts/n_samples, alpha=0.7, color='brown', edgecolor='white')
ax5.set_title(f'Binomiale n={n_trials}, p={p}')

# --- Comparaison normale ---
ax6 = axes[1, 2]
for mu, sigma, color in [(0, 1, 'blue'), (0, 2, 'red'), (2, 1, 'green')]:
    data = np.random.normal(mu, sigma, n_samples)
    ax6.hist(data, bins=50, density=True, alpha=0.4, color=color, label=f'N({mu},{sigma})')
ax6.set_title('Comparaison de normales')
ax6.legend()

plt.tight_layout()
plt.show()

print("Visualisation des distributions créée !")`,
        exercice: `
**Exercice :**

1. Générez 10000 échantillons d'une distribution Beta(2, 5)
2. Tracez l'histogramme et la densité théorique
3. Calculez les moments et comparez avec la théorie
        `
    },

    monte_carlo: {
        title: "Simulation Monte Carlo",
        theorie: `
## Méthode de Monte Carlo

### Principe

Utiliser des nombres aléatoires pour estimer des quantités :

$$\\pi \\approx 4 \\times \\frac{\\text{points dans le cercle}}{\\text{total de points}}$$

### Applications

- Calcul d'intégrales
- Estimation de probabilités
- Simulations physiques
- Finance (pricing d'options)

### Convergence

L'erreur décroît en \\( O(1/\\sqrt{n}) \\)
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# ESTIMATION DE PI PAR MONTE CARLO
# ===============================================

np.random.seed(42)

fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# --- Visualisation de la méthode ---
ax1 = axes[0]
n_points = 5000

# Points aléatoires dans le carré [-1, 1] × [-1, 1]
x = np.random.uniform(-1, 1, n_points)
y = np.random.uniform(-1, 1, n_points)

# Distance à l'origine
distance = np.sqrt(x**2 + y**2)
inside = distance <= 1

# Estimation de pi
pi_estimate = 4 * np.sum(inside) / n_points

# Tracé
ax1.scatter(x[inside], y[inside], c='blue', s=1, alpha=0.5, label='Intérieur')
ax1.scatter(x[~inside], y[~inside], c='red', s=1, alpha=0.5, label='Extérieur')

# Cercle
theta = np.linspace(0, 2*np.pi, 100)
ax1.plot(np.cos(theta), np.sin(theta), 'g-', linewidth=2)

ax1.set_aspect('equal')
ax1.set_title(f'Monte Carlo pour pi, n={n_points}, pi = {pi_estimate:.4f}')
ax1.legend()

# --- Convergence ---
ax2 = axes[1]
n_values = np.arange(100, 10000, 100)
estimates = []

for n in n_values:
    x_sim = np.random.uniform(-1, 1, n)
    y_sim = np.random.uniform(-1, 1, n)
    inside_sim = np.sqrt(x_sim**2 + y_sim**2) <= 1
    estimates.append(4 * np.sum(inside_sim) / n)

ax2.plot(n_values, estimates, 'b-', alpha=0.7, label='Estimation')
ax2.axhline(np.pi, color='r', linestyle='--', linewidth=2, label=f'pi = {np.pi:.4f}')

ax2.set_xlabel('Nombre de points')
ax2.set_ylabel('Estimation de pi')
ax2.set_title('Convergence de Monte Carlo')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Calcul d'intégrale ---
ax3 = axes[2]

# Distribution des estimations
estimates_integral = []
for _ in range(1000):
    x_s = np.random.uniform(0, np.pi, 100)
    estimates_integral.append(np.pi * np.mean(np.sin(x_s)))

ax3.hist(estimates_integral, bins=30, density=True, alpha=0.7, color='green')
ax3.axvline(2, color='r', linewidth=2, linestyle='--', label='Valeur exacte = 2')
ax3.axvline(np.mean(estimates_integral), color='blue', linewidth=2, label=f'Moyenne = {np.mean(estimates_integral):.3f}')

ax3.set_xlabel('Estimation')
ax3.set_ylabel('Densité')
ax3.set_title('Integrale sin(x)dx de 0 à pi')
ax3.legend()

plt.tight_layout()
plt.show()

print(f"Estimation de pi : {pi_estimate:.6f}")
print(f"Valeur exacte : {np.pi:.6f}")
print(f"Erreur : {abs(pi_estimate - np.pi):.6f}")`,
        exercice: `
**Exercice :**

1. Estimez l'aire sous la courbe \\( e^{-x^2} \\) de -infini à +infini (= sqrt(pi))
2. Calculez la probabilité de tomber dans un cercle de rayon 0.5
3. Simulez 1000 parties de pile ou face et tracez l'évolution du gain
        `
    },

    // ============================================================
    // MODULE 14 : THÉORIE DES NOMBRES VISUALISÉE
    // ============================================================

    prime_visualization: {
        title: "Visualiser les nombres premiers",
        theorie: `
## Les nombres premiers avec NumPy

### Crible d'Ératosthène

\`\`\`python
def sieve(n):
    is_prime = np.ones(n+1, dtype=bool)
    is_prime[0:2] = False
    for i in range(2, int(np.sqrt(n)) + 1):
        if is_prime[i]:
            is_prime[i*i::i] = False
    return np.where(is_prime)[0]
\`\`\`

### Visualisations célèbres

- Spirale d'Ulam
- Distribution des écarts
- pi(x) vs x/ln(x)
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# NOMBRES PREMIERS
# ===============================================

def sieve_of_eratosthenes(n):
    """Crible d'Ératosthène vectorisé"""
    is_prime = np.ones(n + 1, dtype=bool)
    is_prime[0:2] = False
    for i in range(2, int(np.sqrt(n)) + 1):
        if is_prime[i]:
            is_prime[i*i::i] = False
    return np.where(is_prime)[0]

primes = sieve_of_eratosthenes(10000)
print(f"Nombre de premiers <= 10000 : {len(primes)}")
print(f"Les 20 premiers : {primes[:20]}")

fig, axes = plt.subplots(2, 2, figsize=(14, 12))

# --- Distribution des nombres premiers ---
ax1 = axes[0, 0]
ax1.plot(primes, np.arange(1, len(primes)+1), 'b-', linewidth=1)
x_approx = np.linspace(2, 10000, 1000)
ax1.plot(x_approx, x_approx / np.log(x_approx), 'r--', linewidth=2, label='x/ln(x)')
ax1.set_xlabel('n')
ax1.set_ylabel('pi(n) = nombre de premiers <= n')
ax1.set_title('Fonction de comptage des premiers')
ax1.legend()
ax1.grid(True, alpha=0.3)

# --- Écarts entre premiers consécutifs ---
ax2 = axes[0, 1]
gaps = np.diff(primes)
ax2.hist(gaps, bins=range(1, max(gaps)+2), density=True, alpha=0.7, 
         color='green', edgecolor='white', align='left')
ax2.set_xlabel('Écart entre premiers consécutifs')
ax2.set_ylabel('Fréquence')
ax2.set_title('Distribution des écarts')
ax2.set_xlim([0, 40])

# --- Premiers mod 10 ---
ax3 = axes[1, 0]
residus = primes[primes > 10] % 10
unique, counts = np.unique(residus, return_counts=True)
colors_bar = ['red' if r in [1, 3, 7, 9] else 'gray' for r in unique]
ax3.bar(unique, counts, color=colors_bar, edgecolor='white')
ax3.set_xlabel('Dernier chiffre')
ax3.set_ylabel('Nombre de premiers')
ax3.set_title('Distribution des derniers chiffres (mod 10)')
ax3.set_xticks(unique)

# --- Densité des premiers ---
ax4 = axes[1, 1]
x_range = np.arange(2, 10001)
prime_density = np.array([np.sum(primes <= x) / x for x in x_range])
theo_density = 1 / np.log(x_range)

ax4.plot(x_range, prime_density, 'b-', alpha=0.7, label='Densité réelle')
ax4.plot(x_range, theo_density, 'r--', linewidth=2, label='1/ln(x)')
ax4.set_xlabel('n')
ax4.set_ylabel('Densité')
ax4.set_title('Densité des nombres premiers')
ax4.legend()
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Visualisation des nombres premiers créée !")`,
        exercice: `
**Exercice :**

1. Trouvez tous les "jumeaux" (p, p+2) premiers jusqu'à 1000
2. Visualisez leur distribution
3. Comptez les premiers de Sophie Germain (p et 2p+1 premiers)
        `
    }
};
