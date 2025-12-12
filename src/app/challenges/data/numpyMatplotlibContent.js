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
    },

    // ============================================================
    // MODULE 7 : ALGÈBRE 2 - NOMBRES COMPLEXES VISUALISÉS
    // ============================================================

    complex_visualization: {
        title: "Visualiser les nombres complexes",
        theorie: `
## Le plan complexe avec NumPy et Matplotlib

### Représentation

Un nombre complexe \\( z = a + bi \\) est un point dans le plan :
- Axe réel (x) : partie réelle \\( a \\)
- Axe imaginaire (y) : partie imaginaire \\( b \\)

### Forme polaire

$$z = r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$$

où :
- \\( r = |z| = \\sqrt{a^2 + b^2} \\) (module)
- \\( \\theta = \\arg(z) \\) (argument)

### En Python

\`\`\`python
z = 3 + 4j
abs(z)      # Module = 5
np.angle(z) # Argument
z.real      # Partie réelle
z.imag      # Partie imaginaire
\`\`\`
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# VISUALISATION DES NOMBRES COMPLEXES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 12))

# --- Plan complexe avec des nombres ---
ax1 = axes[0, 0]
nombres = [3+4j, -2+3j, 1-2j, -3-1j, 2+0j, 0+2j]
couleurs = plt.cm.rainbow(np.linspace(0, 1, len(nombres)))

for z, c in zip(nombres, couleurs):
    ax1.arrow(0, 0, z.real, z.imag, head_width=0.15, head_length=0.1, 
              fc=c, ec=c, linewidth=2)
    ax1.annotate(f'{z}', xy=(z.real, z.imag), xytext=(z.real+0.2, z.imag+0.2),
                fontsize=10)

ax1.axhline(0, color='k', linewidth=0.5)
ax1.axvline(0, color='k', linewidth=0.5)
ax1.set_xlim([-5, 5]); ax1.set_ylim([-5, 5])
ax1.set_xlabel('Re(z)'); ax1.set_ylabel('Im(z)')
ax1.set_title('Nombres complexes dans le plan')
ax1.set_aspect('equal')
ax1.grid(True, alpha=0.3)

# --- Multiplication par i (rotation de 90°) ---
ax2 = axes[0, 1]
z = 2 + 1j
rotations = [z, z*1j, z*1j**2, z*1j**3]
labels = ['z', 'z×i', 'z×i²', 'z×i³']
colors_rot = ['blue', 'green', 'red', 'purple']

for zr, label, color in zip(rotations, labels, colors_rot):
    ax2.arrow(0, 0, zr.real, zr.imag, head_width=0.1, head_length=0.08, 
              fc=color, ec=color, linewidth=2, label=label)
    ax2.plot(zr.real, zr.imag, 'o', color=color, markersize=8)

theta_circ = np.linspace(0, 2*np.pi, 100)
r_circ = abs(z)
ax2.plot(r_circ*np.cos(theta_circ), r_circ*np.sin(theta_circ), 'k--', alpha=0.3)

ax2.set_xlim([-3, 3]); ax2.set_ylim([-3, 3])
ax2.set_xlabel('Re(z)'); ax2.set_ylabel('Im(z)')
ax2.set_title('Multiplication par i = rotation 90°')
ax2.legend()
ax2.set_aspect('equal')
ax2.grid(True, alpha=0.3)

# --- Fonction z^2 ---
ax3 = axes[1, 0]
theta = np.linspace(0, 2*np.pi, 100)
z_circle = np.exp(1j * theta)  # Cercle unité

z_squared = z_circle ** 2

ax3.plot(z_circle.real, z_circle.imag, 'b-', linewidth=2, label='|z| = 1')
ax3.plot(z_squared.real, z_squared.imag, 'r--', linewidth=2, label='z²')

ax3.set_xlim([-1.5, 1.5]); ax3.set_ylim([-1.5, 1.5])
ax3.set_xlabel('Re(z)'); ax3.set_ylabel('Im(z)')
ax3.set_title('Transformation z → z² (cercle → cercle parcourt 2×)')
ax3.legend()
ax3.set_aspect('equal')
ax3.grid(True, alpha=0.3)

# --- Racines n-ièmes de l'unité ---
ax4 = axes[1, 1]
for n in [3, 4, 5, 6]:
    racines = np.exp(2j * np.pi * np.arange(n) / n)
    color = plt.cm.Set1(n/7)
    ax4.scatter(racines.real, racines.imag, s=100, c=[color]*n, label=f'n={n}', zorder=5)
    # Connecter les racines
    racines_closed = np.append(racines, racines[0])
    ax4.plot(racines_closed.real, racines_closed.imag, '--', color=color, alpha=0.5)

ax4.plot(np.cos(theta), np.sin(theta), 'k-', alpha=0.3)
ax4.set_xlim([-1.5, 1.5]); ax4.set_ylim([-1.5, 1.5])
ax4.set_xlabel('Re(z)'); ax4.set_ylabel('Im(z)')
ax4.set_title('Racines n-ièmes de l\\'unité')
ax4.legend()
ax4.set_aspect('equal')
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Visualisation des nombres complexes créée !")`,
        exercice: `
**Exercice :**

1. Tracez les 8 racines 8-ièmes de l'unité
2. Montrez que leur somme = 0
3. Visualisez la transformation z → z³
        `
    },

    gaussian_curves: {
        title: "Famille de courbes Gaussiennes",
        theorie: `
## La distribution Gaussienne

### Formule

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

### Paramètres

- \\( \\mu \\) : moyenne (centre de la courbe)
- \\( \\sigma \\) : écart-type (largeur)

### Propriétés

- Aire totale = 1
- 68% des données dans \\([\\mu - \\sigma, \\mu + \\sigma]\\)
- 95% dans \\([\\mu - 2\\sigma, \\mu + 2\\sigma]\\)
- 99.7% dans \\([\\mu - 3\\sigma, \\mu + 3\\sigma]\\)
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# FAMILLE DE GAUSSIENNES
# ===============================================

def gaussian(x, mu, sigma):
    """Fonction Gaussienne"""
    return 1/(sigma * np.sqrt(2*np.pi)) * np.exp(-(x-mu)**2 / (2*sigma**2))

x = np.linspace(-10, 10, 500)

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# --- Effet de sigma ---
ax1 = axes[0, 0]
mu = 0
for sigma in [0.5, 1, 2, 3]:
    y = gaussian(x, mu, sigma)
    ax1.plot(x, y, linewidth=2, label=f'sigma = {sigma}')

ax1.set_xlabel('x')
ax1.set_ylabel('f(x)')
ax1.set_title('Effet de sigma (écart-type)')
ax1.legend()
ax1.grid(True, alpha=0.3)

# --- Effet de mu ---
ax2 = axes[0, 1]
sigma = 1
for mu in [-3, -1, 0, 1, 3]:
    y = gaussian(x, mu, sigma)
    ax2.plot(x, y, linewidth=2, label=f'mu = {mu}')

ax2.set_xlabel('x')
ax2.set_ylabel('f(x)')
ax2.set_title('Effet de mu (moyenne)')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Règle des 68-95-99.7 ---
ax3 = axes[1, 0]
mu, sigma = 0, 1
y = gaussian(x, mu, sigma)

ax3.plot(x, y, 'b-', linewidth=2)
ax3.fill_between(x, y, where=(x >= mu-sigma) & (x <= mu+sigma), 
                 alpha=0.4, color='green', label='68%')
ax3.fill_between(x, y, where=(x >= mu-2*sigma) & (x <= mu+2*sigma), 
                 alpha=0.2, color='yellow', label='95%')
ax3.fill_between(x, y, where=(x >= mu-3*sigma) & (x <= mu+3*sigma), 
                 alpha=0.1, color='red', label='99.7%')

ax3.set_xlabel('x')
ax3.set_ylabel('f(x)')
ax3.set_title('Règle 68-95-99.7')
ax3.legend()
ax3.grid(True, alpha=0.3)

# --- Somme de Gaussiennes ---
ax4 = axes[1, 1]
y1 = gaussian(x, -2, 1)
y2 = gaussian(x, 2, 1.5)
y_sum = y1 + y2

ax4.plot(x, y1, 'b--', linewidth=2, label='G1(mu=-2, sigma=1)')
ax4.plot(x, y2, 'r--', linewidth=2, label='G2(mu=2, sigma=1.5)')
ax4.plot(x, y_sum, 'g-', linewidth=3, label='Somme')
ax4.fill_between(x, y_sum, alpha=0.2, color='green')

ax4.set_xlabel('x')
ax4.set_ylabel('f(x)')
ax4.set_title('Somme de deux Gaussiennes')
ax4.legend()
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Famille de Gaussiennes visualisée !")`,
        exercice: `
**Exercice :**

1. Créez une animation où sigma varie de 0.5 à 3
2. Vérifiez numériquement que l'aire sous la courbe = 1
3. Tracez 100 Gaussiennes avec mu et sigma aléatoires
        `
    },

    // ============================================================
    // MODULE 8 : SECTIONS CONIQUES ANIMÉES
    // ============================================================

    conics_visualization: {
        title: "Sections coniques animées",
        theorie: `
## Les quatre coniques

### Équation générale

$$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$$

### Types selon le discriminant \\( B^2 - 4AC \\)

| Conique | Condition | Équation canonique |
|---------|-----------|-------------------|
| Cercle | \\( A = C, B = 0 \\) | \\( x^2 + y^2 = r^2 \\) |
| Ellipse | \\( B^2 - 4AC < 0 \\) | \\( \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\) |
| Parabole | \\( B^2 - 4AC = 0 \\) | \\( y = ax^2 \\) |
| Hyperbole | \\( B^2 - 4AC > 0 \\) | \\( \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\) |

### Propriété du foyer

Toutes les coniques ont une définition par foyer et directrice !
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# SECTIONS CONIQUES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 12))

theta = np.linspace(0, 2*np.pi, 500)

# --- Cercle ---
ax1 = axes[0, 0]
for r in [0.5, 1, 1.5, 2]:
    x = r * np.cos(theta)
    y = r * np.sin(theta)
    ax1.plot(x, y, linewidth=2, label=f'r = {r}')

ax1.plot(0, 0, 'ko', markersize=8)  # Centre
ax1.set_xlim([-3, 3]); ax1.set_ylim([-3, 3])
ax1.set_aspect('equal')
ax1.set_title('Cercle : x² + y² = r²')
ax1.legend()
ax1.grid(True, alpha=0.3)

# --- Ellipse ---
ax2 = axes[0, 1]
a_values = [2, 2, 2, 2]
b_values = [1, 1.5, 0.8, 0.5]
colors = ['blue', 'green', 'red', 'purple']

for a, b, color in zip(a_values, b_values, colors):
    x = a * np.cos(theta)
    y = b * np.sin(theta)
    ax2.plot(x, y, linewidth=2, color=color, label=f'a={a}, b={b}')
    # Foyers
    c = np.sqrt(abs(a**2 - b**2))
    ax2.plot([-c, c], [0, 0], 'ko', markersize=6)

ax2.set_xlim([-3, 3]); ax2.set_ylim([-2, 2])
ax2.set_aspect('equal')
ax2.set_title('Ellipse : x²/a² + y²/b² = 1')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Parabole ---
ax3 = axes[1, 0]
x_para = np.linspace(-3, 3, 200)
for a in [0.25, 0.5, 1, 2]:
    y_para = a * x_para**2
    ax3.plot(x_para, y_para, linewidth=2, label=f'a = {a}')

ax3.set_xlim([-3, 3]); ax3.set_ylim([-0.5, 5])
ax3.set_title('Parabole : y = ax²')
ax3.legend()
ax3.grid(True, alpha=0.3)

# --- Hyperbole ---
ax4 = axes[1, 1]
a, b = 1, 0.7

# Branche droite
t = np.linspace(-2, 2, 200)
x_hyp = a * np.cosh(t)
y_hyp = b * np.sinh(t)
ax4.plot(x_hyp, y_hyp, 'b-', linewidth=2, label='Branche droite')
ax4.plot(-x_hyp, y_hyp, 'r-', linewidth=2, label='Branche gauche')

# Asymptotes
x_asy = np.linspace(-3, 3, 100)
ax4.plot(x_asy, b/a * x_asy, 'k--', alpha=0.5, label='Asymptotes')
ax4.plot(x_asy, -b/a * x_asy, 'k--', alpha=0.5)

# Foyers
c = np.sqrt(a**2 + b**2)
ax4.plot([-c, c], [0, 0], 'go', markersize=8, label='Foyers')

ax4.set_xlim([-3, 3]); ax4.set_ylim([-2, 2])
ax4.set_aspect('equal')
ax4.set_title('Hyperbole : x²/a² - y²/b² = 1')
ax4.legend()
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Sections coniques visualisées !")`,
        exercice: `
**Exercice :**

1. Tracez une ellipse avec ses deux foyers F1 et F2
2. Vérifiez que pour tout point P sur l'ellipse, |PF1| + |PF2| = 2a
3. Créez une animation d'une ellipse dont l'excentricité varie
        `
    },

    // ============================================================
    // MODULE 10 : ART TRIGONOMÉTRIQUE
    // ============================================================

    trig_art: {
        title: "Art mathématique avec NumPy",
        theorie: `
## Courbes artistiques

### Courbes de Lissajous

$$x(t) = A\\sin(at + \\delta)$$
$$y(t) = B\\sin(bt)$$

### Spirales

- **Spirale d'Archimède** : \\( r = a\\theta \\)
- **Spirale logarithmique** : \\( r = ae^{b\\theta} \\)
- **Spirale de Fermat** : \\( r^2 = a^2\\theta \\)

### Rosaces

$$r = a\\cos(n\\theta)$$

n impair → n pétales, n pair → 2n pétales
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# ART MATHÉMATIQUE
# ===============================================

fig, axes = plt.subplots(2, 3, figsize=(18, 12))

# --- Courbes de Lissajous ---
ax1 = axes[0, 0]
t = np.linspace(0, 2*np.pi, 1000)
params = [(1, 2, 0), (3, 2, np.pi/2), (5, 4, 0), (3, 4, np.pi/4)]
colors = plt.cm.rainbow(np.linspace(0, 1, len(params)))

for (a, b, delta), color in zip(params, colors):
    x = np.sin(a * t + delta)
    y = np.sin(b * t)
    ax1.plot(x, y, color=color, linewidth=1.5, label=f'a={a}, b={b}')

ax1.set_aspect('equal')
ax1.set_title('Courbes de Lissajous')
ax1.legend(fontsize=8)
ax1.axis('off')

# --- Spirales ---
ax2 = axes[0, 1]
theta = np.linspace(0, 8*np.pi, 1000)

# Spirale d'Archimède
r_arch = 0.1 * theta
ax2.plot(r_arch * np.cos(theta), r_arch * np.sin(theta), 'b-', 
         linewidth=1.5, label='Archimède')

# Spirale logarithmique
r_log = 0.2 * np.exp(0.1 * theta)
ax2.plot(r_log * np.cos(theta), r_log * np.sin(theta), 'r-', 
         linewidth=1.5, label='Logarithmique')

ax2.set_xlim([-5, 5]); ax2.set_ylim([-5, 5])
ax2.set_aspect('equal')
ax2.set_title('Spirales')
ax2.legend()
ax2.axis('off')

# --- Rosaces ---
ax3 = axes[0, 2]
theta = np.linspace(0, 2*np.pi, 500)

for n in [3, 4, 5, 6]:
    r = np.cos(n * theta)
    x = r * np.cos(theta)
    y = r * np.sin(theta)
    ax3.plot(x, y, linewidth=1.5, label=f'n={n}')

ax3.set_aspect('equal')
ax3.set_title('Rosaces r = cos(nθ)')
ax3.legend()
ax3.axis('off')

# --- Épicycloïde ---
ax4 = axes[1, 0]
t = np.linspace(0, 10*np.pi, 2000)
R, r = 5, 1
x = (R + r) * np.cos(t) - r * np.cos((R + r) * t / r)
y = (R + r) * np.sin(t) - r * np.sin((R + r) * t / r)

ax4.plot(x, y, 'purple', linewidth=1)
ax4.set_aspect('equal')
ax4.set_title('Épicycloïde (R=5, r=1)')
ax4.axis('off')

# --- Hypocycloïde (Astroïde) ---
ax5 = axes[1, 1]
t = np.linspace(0, 2*np.pi, 1000)
R = 4
for r in [1, 2, 3]:
    x = (R - r) * np.cos(t) + r * np.cos((R - r) * t / r)
    y = (R - r) * np.sin(t) - r * np.sin((R - r) * t / r)
    ax5.plot(x, y, linewidth=2, label=f'R={R}, r={r}')

ax5.set_aspect('equal')
ax5.set_title('Hypocycloïdes')
ax5.legend()
ax5.axis('off')

# --- Papillon ---
ax6 = axes[1, 2]
t = np.linspace(0, 12*np.pi, 10000)
r = np.exp(np.sin(t)) - 2*np.cos(4*t) + np.sin((2*t - np.pi)/24)**5
x = r * np.cos(t)
y = r * np.sin(t)

ax6.plot(x, y, 'darkorange', linewidth=0.5)
ax6.fill(x, y, alpha=0.3, color='orange')
ax6.set_aspect('equal')
ax6.set_title('Courbe du papillon')
ax6.axis('off')

plt.tight_layout()
plt.show()

print("Art mathématique créé !")`,
        exercice: `
**Exercice :**

1. Créez votre propre courbe artistique
2. Animez une spirale qui se dessine progressivement
3. Combinez plusieurs courbes pour créer un mandala
        `
    },

    fractals: {
        title: "Fractales avec NumPy",
        theorie: `
## Introduction aux fractales

### Ensemble de Mandelbrot

Itération : \\( z_{n+1} = z_n^2 + c \\)

Point \\( c \\) appartient à Mandelbrot si \\( |z_n| \\) reste borné.

### Ensemble de Julia

Même itération mais \\( c \\) est fixe, on varie \\( z_0 \\).

### Triangle de Sierpiński

Fractal géométrique par subdivision récursive.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# FRACTALES
# ===============================================

fig, axes = plt.subplots(1, 3, figsize=(18, 6))

# --- Ensemble de Mandelbrot ---
ax1 = axes[0]

def mandelbrot(c, max_iter):
    z = 0
    for n in range(max_iter):
        if abs(z) > 2:
            return n
        z = z*z + c
    return max_iter

# Grille complexe
x = np.linspace(-2.5, 1, 800)
y = np.linspace(-1.25, 1.25, 500)
X, Y = np.meshgrid(x, y)
C = X + 1j * Y

max_iter = 50
mandel = np.zeros(C.shape)
for i in range(C.shape[0]):
    for j in range(C.shape[1]):
        mandel[i, j] = mandelbrot(C[i, j], max_iter)

ax1.imshow(mandel, extent=[-2.5, 1, -1.25, 1.25], cmap='hot', 
           origin='lower', aspect='equal')
ax1.set_title('Ensemble de Mandelbrot')
ax1.set_xlabel('Re(c)'); ax1.set_ylabel('Im(c)')

# --- Ensemble de Julia ---
ax2 = axes[1]

c_julia = -0.7 + 0.27j  # Paramètre fixe

x = np.linspace(-1.5, 1.5, 600)
y = np.linspace(-1.5, 1.5, 600)
X, Y = np.meshgrid(x, y)
Z0 = X + 1j * Y

julia = np.zeros(Z0.shape)
Z = Z0.copy()
for n in range(max_iter):
    mask = np.abs(Z) < 2
    julia[mask] = n
    Z[mask] = Z[mask]**2 + c_julia

ax2.imshow(julia, extent=[-1.5, 1.5, -1.5, 1.5], cmap='twilight_shifted',
           origin='lower', aspect='equal')
ax2.set_title(f'Ensemble de Julia (c = {c_julia})')
ax2.set_xlabel('Re(z)'); ax2.set_ylabel('Im(z)')

# --- Fougère de Barnsley ---
ax3 = axes[2]

def barnsley_fern(n_points):
    x, y = 0, 0
    points = []
    
    for _ in range(n_points):
        r = np.random.random()
        if r < 0.01:
            x_new = 0
            y_new = 0.16 * y
        elif r < 0.86:
            x_new = 0.85*x + 0.04*y
            y_new = -0.04*x + 0.85*y + 1.6
        elif r < 0.93:
            x_new = 0.2*x - 0.26*y
            y_new = 0.23*x + 0.22*y + 1.6
        else:
            x_new = -0.15*x + 0.28*y
            y_new = 0.26*x + 0.24*y + 0.44
        
        x, y = x_new, y_new
        points.append((x, y))
    
    return np.array(points)

fern = barnsley_fern(50000)
ax3.scatter(fern[:, 0], fern[:, 1], s=0.1, c='green', alpha=0.5)
ax3.set_title('Fougère de Barnsley')
ax3.set_aspect('equal')
ax3.axis('off')

plt.tight_layout()
plt.show()

print("Fractales créées !")`,
        exercice: `
**Exercice :**

1. Zoomez sur une partie intéressante de Mandelbrot
2. Explorez différentes valeurs de c pour Julia
3. Créez le triangle de Sierpiński avec récursion
        `
    },

    // ============================================================
    // MODULE 11 : CALCUL INFINITÉSIMAL VISUEL
    // ============================================================

    derivative_visualization: {
        title: "Visualiser les dérivées",
        theorie: `
## La dérivée visuellement

### Définition

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

### Interprétation géométrique

La dérivée = pente de la tangente au point.

### Dérivées communes

| f(x) | f'(x) |
|------|-------|
| \\( x^n \\) | \\( nx^{n-1} \\) |
| \\( e^x \\) | \\( e^x \\) |
| \\( \\sin(x) \\) | \\( \\cos(x) \\) |
| \\( \\ln(x) \\) | \\( 1/x \\) |
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# VISUALISATION DES DÉRIVÉES
# ===============================================

def numerical_derivative(f, x, h=1e-5):
    """Dérivée numérique par différences finies"""
    return (f(x + h) - f(x - h)) / (2 * h)

fig, axes = plt.subplots(2, 2, figsize=(14, 12))

# --- Tangente à une courbe ---
ax1 = axes[0, 0]
f = lambda x: x**2
f_prime = lambda x: 2*x

x = np.linspace(-3, 3, 200)
x0 = 1  # Point de tangence

ax1.plot(x, f(x), 'b-', linewidth=2, label='f(x) = x²')

# Tangente au point x0
slope = f_prime(x0)
tangent = f(x0) + slope * (x - x0)
ax1.plot(x, tangent, 'r--', linewidth=2, label=f'Tangente en x={x0}')
ax1.plot(x0, f(x0), 'go', markersize=10)

ax1.set_xlim([-3, 3]); ax1.set_ylim([-1, 9])
ax1.set_xlabel('x'); ax1.set_ylabel('y')
ax1.set_title('Tangente = visualisation de f\\'(x)')
ax1.legend()
ax1.grid(True, alpha=0.3)

# --- f(x) et f'(x) simultanément ---
ax2 = axes[0, 1]
f = lambda x: np.sin(x)
x = np.linspace(-2*np.pi, 2*np.pi, 200)

ax2.plot(x, f(x), 'b-', linewidth=2, label='sin(x)')
ax2.plot(x, np.cos(x), 'r-', linewidth=2, label='cos(x) = (sin x)\\'')

# Zones où f croît (f' > 0)
ax2.fill_between(x, -1.5, 1.5, where=np.cos(x) > 0, alpha=0.1, color='green')

ax2.axhline(0, color='k', linewidth=0.5)
ax2.set_xlabel('x'); ax2.set_ylabel('y')
ax2.set_title('f(x) et f\\'(x)')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Approximation de la dérivée ---
ax3 = axes[1, 0]
f = lambda x: x**3 - 2*x
f_prime_exact = lambda x: 3*x**2 - 2

x = np.linspace(-2, 2, 200)
ax3.plot(x, f_prime_exact(x), 'b-', linewidth=3, label='Dérivée exacte')

# Différentes valeurs de h
for h in [1, 0.5, 0.1, 0.01]:
    deriv_approx = (f(x + h) - f(x)) / h
    ax3.plot(x, deriv_approx, '--', linewidth=1, label=f'h = {h}', alpha=0.7)

ax3.set_xlabel('x'); ax3.set_ylabel('f\\'(x)')
ax3.set_title('Convergence de (f(x+h) - f(x))/h vers f\\'(x)')
ax3.legend()
ax3.grid(True, alpha=0.3)

# --- Points critiques ---
ax4 = axes[1, 1]
f = lambda x: x**4 - 4*x**2 + 1
f_prime = lambda x: 4*x**3 - 8*x

x = np.linspace(-2.5, 2.5, 200)
ax4.plot(x, f(x), 'b-', linewidth=2, label='f(x) = x⁴ - 4x² + 1')
ax4.plot(x, f_prime(x), 'r--', linewidth=2, label='f\\'(x)')

# Trouver les points critiques (f'(x) = 0)
critical_points = [-np.sqrt(2), 0, np.sqrt(2)]
for xc in critical_points:
    ax4.plot(xc, f(xc), 'go', markersize=12, zorder=5)
    ax4.axvline(xc, color='gray', linestyle=':', alpha=0.5)

ax4.axhline(0, color='k', linewidth=0.5)
ax4.set_xlabel('x'); ax4.set_ylabel('y')
ax4.set_title('Points critiques : f\\'(x) = 0')
ax4.legend()
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Visualisation des dérivées créée !")`,
        exercice: `
**Exercice :**

1. Trouvez les maxima/minima de f(x) = x³ - 3x visuellement
2. Tracez f, f', f'' sur le même graphique
3. Animez la tangente qui glisse le long de la courbe
        `
    },

    integral_visualization: {
        title: "Visualiser les intégrales",
        theorie: `
## L'intégrale visuellement

### Définition

$$\\int_a^b f(x) dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i) \\Delta x$$

### Interprétation géométrique

L'intégrale = aire sous la courbe (signée).

### Théorème fondamental

$$\\frac{d}{dx} \\int_a^x f(t) dt = f(x)$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# VISUALISATION DES INTÉGRALES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 12))

# --- Aire sous la courbe ---
ax1 = axes[0, 0]
f = lambda x: np.sin(x) + 1
x = np.linspace(0, 2*np.pi, 200)
a, b = np.pi/4, 5*np.pi/4

ax1.plot(x, f(x), 'b-', linewidth=2, label='f(x) = sin(x) + 1')
ax1.fill_between(x, 0, f(x), where=(x >= a) & (x <= b), 
                  alpha=0.3, color='green', label='Aire')
ax1.axhline(0, color='k', linewidth=0.5)
ax1.axvline(a, color='red', linestyle='--', alpha=0.5)
ax1.axvline(b, color='red', linestyle='--', alpha=0.5)

# Calcul numérique de l'aire
x_int = np.linspace(a, b, 1000)
aire = np.trapz(f(x_int), x_int)
ax1.text((a+b)/2, 0.5, f'Aire ≈ {aire:.3f}', fontsize=12, ha='center',
         bbox=dict(boxstyle='round', facecolor='wheat'))

ax1.set_xlabel('x'); ax1.set_ylabel('y')
ax1.set_title('Intégrale = Aire sous la courbe')
ax1.legend()
ax1.grid(True, alpha=0.3)

# --- Sommes de Riemann ---
ax2 = axes[0, 1]
f = lambda x: x**2
a, b = 0, 2
x = np.linspace(a, b, 200)

ax2.plot(x, f(x), 'b-', linewidth=2, label='f(x) = x²')

# Rectangles (n = 8)
n = 8
dx = (b - a) / n
x_rect = np.linspace(a, b - dx, n)

for xi in x_rect:
    rect = plt.Rectangle((xi, 0), dx, f(xi + dx/2), 
                          fill=True, facecolor='green', edgecolor='black', alpha=0.5)
    ax2.add_patch(rect)

# Aire exacte vs approximation
aire_exacte = 8/3
aire_riemann = np.sum(f(x_rect + dx/2) * dx)
ax2.text(1, 3, f'Exacte: {aire_exacte:.4f}\\nRiemann (n={n}): {aire_riemann:.4f}',
         fontsize=10, bbox=dict(boxstyle='round', facecolor='wheat'))

ax2.set_xlim([a, b]); ax2.set_ylim([0, 5])
ax2.set_xlabel('x'); ax2.set_ylabel('y')
ax2.set_title('Sommes de Riemann')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Convergence des sommes de Riemann ---
ax3 = axes[1, 0]
f = lambda x: np.sin(x)
a, b = 0, np.pi
aire_exacte = 2  # Intégrale de sin de 0 à pi

n_values = np.arange(2, 101)
aires = []

for n in n_values:
    dx = (b - a) / n
    x_mid = np.linspace(a + dx/2, b - dx/2, n)
    aires.append(np.sum(f(x_mid) * dx))

ax3.plot(n_values, aires, 'b-', linewidth=2, label='Somme de Riemann')
ax3.axhline(aire_exacte, color='r', linestyle='--', linewidth=2, label=f'Exact = {aire_exacte}')
ax3.fill_between(n_values, aires, aire_exacte, alpha=0.2, color='blue')

ax3.set_xlabel('Nombre de rectangles n')
ax3.set_ylabel('Approximation de l\\'intégrale')
ax3.set_title('Convergence des sommes de Riemann')
ax3.legend()
ax3.grid(True, alpha=0.3)

# --- Aire entre deux courbes ---
ax4 = axes[1, 1]
f1 = lambda x: x**2
f2 = lambda x: 2*x

x = np.linspace(0, 2.5, 200)

ax4.plot(x, f1(x), 'b-', linewidth=2, label='f(x) = x²')
ax4.plot(x, f2(x), 'r-', linewidth=2, label='g(x) = 2x')

# Intersection
x_int = np.linspace(0, 2, 100)
ax4.fill_between(x_int, f1(x_int), f2(x_int), alpha=0.3, color='purple', 
                  label='Aire entre courbes')

# Points d'intersection
ax4.plot([0, 2], [0, 4], 'go', markersize=10, zorder=5)

# Calcul de l'aire
aire_entre = np.trapz(f2(x_int) - f1(x_int), x_int)
ax4.text(1, 1, f'Aire = {aire_entre:.3f}', fontsize=12,
         bbox=dict(boxstyle='round', facecolor='wheat'))

ax4.set_xlim([0, 2.5]); ax4.set_ylim([0, 5])
ax4.set_xlabel('x'); ax4.set_ylabel('y')
ax4.set_title('Aire entre deux courbes')
ax4.legend()
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Visualisation des intégrales créée !")`,
        exercice: `
**Exercice :**

1. Calculez l'aire sous y = e^(-x²) de -3 à 3 (≈ √π)
2. Animez les rectangles de Riemann avec n croissant
3. Trouvez le volume de révolution de y = √x autour de l'axe x
        `
    },

    physics_applications: {
        title: "Applications physiques avec NumPy",
        theorie: `
## Physique computationnelle

### Mouvement

- Position : \\( x(t) \\)
- Vitesse : \\( v(t) = \\frac{dx}{dt} \\)
- Accélération : \\( a(t) = \\frac{dv}{dt} \\)

### Équation du mouvement

$$F = ma \\Rightarrow a = \\frac{F}{m}$$

### Méthode d'Euler

$$x_{n+1} = x_n + v_n \\cdot \\Delta t$$
$$v_{n+1} = v_n + a_n \\cdot \\Delta t$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# APPLICATIONS PHYSIQUES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 12))

# --- Chute libre ---
ax1 = axes[0, 0]
g = 9.81  # m/s²
t = np.linspace(0, 5, 100)
h0, v0 = 100, 0  # Hauteur initiale, vitesse initiale

h = h0 + v0*t - 0.5*g*t**2
v = v0 - g*t

ax1.plot(t, h, 'b-', linewidth=2, label='Position h(t)')
ax1.plot(t, v, 'r--', linewidth=2, label='Vitesse v(t)')
ax1.axhline(0, color='k', linewidth=0.5)

# Temps d'impact
t_impact = np.sqrt(2*h0/g)
ax1.axvline(t_impact, color='green', linestyle=':', label=f't_impact = {t_impact:.2f}s')

ax1.set_xlabel('Temps (s)')
ax1.set_ylabel('h (m) / v (m/s)')
ax1.set_title('Chute libre depuis 100m')
ax1.legend()
ax1.grid(True, alpha=0.3)

# --- Oscillateur harmonique ---
ax2 = axes[0, 1]
omega = 2*np.pi  # Pulsation
t = np.linspace(0, 4, 500)

x = np.cos(omega * t)
v = -omega * np.sin(omega * t)
a = -omega**2 * np.cos(omega * t)

ax2.plot(t, x, 'b-', linewidth=2, label='Position x(t)')
ax2.plot(t, v/omega, 'r--', linewidth=2, label='Vitesse v(t)/ω')
ax2.plot(t, a/omega**2, 'g:', linewidth=2, label='Accélération a(t)/ω²')

ax2.set_xlabel('Temps (s)')
ax2.set_ylabel('Amplitude')
ax2.set_title('Oscillateur harmonique')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Projectile avec friction ---
ax3 = axes[1, 0]

def simulate_projectile(v0, angle, k=0, dt=0.01):
    """Simule un projectile avec friction optionnelle"""
    vx = v0 * np.cos(np.radians(angle))
    vy = v0 * np.sin(np.radians(angle))
    x, y = 0, 0
    trajectory = [(x, y)]
    
    while y >= 0:
        v = np.sqrt(vx**2 + vy**2)
        ax = -k * v * vx
        ay = -9.81 - k * v * vy
        
        vx += ax * dt
        vy += ay * dt
        x += vx * dt
        y += vy * dt
        
        trajectory.append((x, y))
    
    return np.array(trajectory)

# Sans et avec friction
for k, style, label in [(0, '-', 'Sans friction'), (0.05, '--', 'Avec friction')]:
    for angle in [30, 45, 60]:
        traj = simulate_projectile(50, angle, k)
        ax3.plot(traj[:, 0], traj[:, 1], style, linewidth=1.5, 
                label=f'{label}, θ={angle}°' if k == 0 else None)

ax3.set_xlabel('Distance (m)')
ax3.set_ylabel('Hauteur (m)')
ax3.set_title('Trajectoire de projectile')
ax3.legend()
ax3.grid(True, alpha=0.3)
ax3.set_xlim([0, 300])

# --- Pendule simple (portrait de phase) ---
ax4 = axes[1, 1]

# Équation : θ'' + (g/L)sin(θ) = 0
g_over_L = 10

def pendulum_step(theta, omega, dt):
    omega_new = omega - g_over_L * np.sin(theta) * dt
    theta_new = theta + omega_new * dt
    return theta_new, omega_new

# Plusieurs conditions initiales
for theta0 in [0.5, 1.0, 1.5, 2.0, 2.5, 3.0]:
    theta, omega = theta0, 0
    thetas, omegas = [theta], [omega]
    
    for _ in range(5000):
        theta, omega = pendulum_step(theta, omega, 0.01)
        thetas.append(theta)
        omegas.append(omega)
    
    ax4.plot(thetas, omegas, linewidth=0.8)

ax4.set_xlabel('θ (rad)')
ax4.set_ylabel('ω (rad/s)')
ax4.set_title('Portrait de phase du pendule')
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Applications physiques simulées !")`,
        exercice: `
**Exercice :**

1. Simulez un système masse-ressort amorti
2. Tracez le portrait de phase de l'oscillateur Van der Pol
3. Simulez un double pendule (mouvement chaotique !)
        `
    },

    // ============================================================
    // MODULE 2 : ARITHMÉTIQUE ENRICHIE
    // ============================================================

    arithmetic_visualization: {
        title: "Visualiser les opérations arithmétiques",
        theorie: `
## Arithmétique visuelle avec Python

### Les opérations de base

En Python, les opérations arithmétiques fondamentales sont :

| Opérateur | Opération | Exemple |
|-----------|-----------|---------|
| + | Addition | 5 + 3 = 8 |
| - | Soustraction | 10 - 4 = 6 |
| * | Multiplication | 6 * 7 = 42 |
| / | Division | 15 / 4 = 3.75 |
| // | Division entière | 15 // 4 = 3 |
| % | Modulo (reste) | 15 % 4 = 3 |
| ** | Puissance | 2 ** 10 = 1024 |

### Visualisation

Les graphiques permettent de mieux comprendre les relations entre nombres !
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# VISUALISATION DES OPÉRATIONS ARITHMÉTIQUES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# --- Tables de multiplication ---
ax1 = axes[0, 0]
n = 10
table = np.outer(np.arange(1, n+1), np.arange(1, n+1))
im = ax1.imshow(table, cmap='YlOrRd')
ax1.set_title('Table de multiplication')
ax1.set_xlabel('Facteur 1')
ax1.set_ylabel('Facteur 2')
ax1.set_xticks(range(n))
ax1.set_yticks(range(n))
ax1.set_xticklabels(range(1, n+1))
ax1.set_yticklabels(range(1, n+1))
plt.colorbar(im, ax=ax1)

# Ajouter les valeurs
for i in range(n):
    for j in range(n):
        ax1.text(j, i, table[i, j], ha='center', va='center', 
                fontsize=8, color='black' if table[i, j] < 50 else 'white')

# --- Division et reste ---
ax2 = axes[0, 1]
dividendes = range(1, 25)
diviseur = 5
quotients = [d // diviseur for d in dividendes]
restes = [d % diviseur for d in dividendes]

ax2.bar(dividendes, quotients, alpha=0.7, label='Quotient (//)')
ax2.scatter(dividendes, restes, color='red', s=50, zorder=5, label='Reste (%)')
ax2.set_xlabel('Dividende')
ax2.set_ylabel('Valeur')
ax2.set_title(f'Division par {diviseur} : quotient et reste')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Croissance des opérations ---
ax3 = axes[1, 0]
x = np.linspace(1, 10, 100)
ax3.plot(x, x, 'b-', label='n (linéaire)', linewidth=2)
ax3.plot(x, x**2, 'r-', label='n² (quadratique)', linewidth=2)
ax3.plot(x, 2**x, 'g-', label='2^n (exponentiel)', linewidth=2)
ax3.plot(x, np.log2(x), 'm-', label='log2(n)', linewidth=2)

ax3.set_xlabel('n')
ax3.set_ylabel('Valeur')
ax3.set_title('Croissance des fonctions')
ax3.legend()
ax3.set_ylim([0, 50])
ax3.grid(True, alpha=0.3)

# --- Nombres pairs et impairs ---
ax4 = axes[1, 1]
nombres = np.arange(1, 21)
pairs = nombres % 2 == 0
couleurs = ['blue' if p else 'red' for p in pairs]

ax4.bar(nombres, nombres, color=couleurs, alpha=0.7)
ax4.axhline(y=0, color='black', linewidth=0.5)
ax4.set_xlabel('Nombre')
ax4.set_ylabel('Valeur')
ax4.set_title('Pairs (bleu) vs Impairs (rouge)')
ax4.grid(True, alpha=0.3, axis='y')

plt.tight_layout()
plt.show()

print("Visualisation arithmétique créée !")`,
        exercice: `
**Exercices :**

1. Créez une visualisation de la table de multiplication jusqu'à 12
2. Tracez un graphique montrant les diviseurs de 60
3. Visualisez les multiples de 3 et 5 de 1 à 100 (FizzBuzz visuel)
        `
    },

    powers_visualization: {
        title: "Puissances et exposants visuels",
        theorie: `
## Les puissances en Python

### Notation

En Python, on utilise ** pour les puissances :

$$a^n = \\underbrace{a \\times a \\times ... \\times a}_{n \\text{ fois}}$$

### Lois des exposants

- \\( a^m \\times a^n = a^{m+n} \\)
- \\( (a^m)^n = a^{m \\times n} \\)
- \\( a^0 = 1 \\)
- \\( a^{-n} = \\frac{1}{a^n} \\)

### Racines

$$\\sqrt[n]{a} = a^{1/n}$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# VISUALISATION DES PUISSANCES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# --- Croissance exponentielle ---
ax1 = axes[0, 0]
n = np.arange(0, 15)

for base in [2, 3, 5, 10]:
    ax1.plot(n, base**n, 'o-', label=f'{base}^n', linewidth=2, markersize=5)

ax1.set_xlabel('Exposant n')
ax1.set_ylabel('Valeur')
ax1.set_title('Croissance exponentielle')
ax1.legend()
ax1.set_yscale('log')
ax1.grid(True, alpha=0.3)

# --- Puissances de 2 ---
ax2 = axes[0, 1]
puissances_2 = [2**i for i in range(11)]
labels = [f'2^{i}' for i in range(11)]

bars = ax2.bar(range(11), puissances_2, color='steelblue', alpha=0.7)
ax2.set_xticks(range(11))
ax2.set_xticklabels(labels, rotation=45)
ax2.set_ylabel('Valeur')
ax2.set_title('Puissances de 2')
ax2.set_ylim([0, 1200])

# --- Racines ---
ax3 = axes[1, 0]
x = np.linspace(0, 100, 200)

ax3.plot(x, x**(1/2), 'b-', label='Racine carrée', linewidth=2)
ax3.plot(x, x**(1/3), 'r-', label='Racine cubique', linewidth=2)
ax3.plot(x, x**(1/4), 'g-', label='Racine 4ème', linewidth=2)

ax3.set_xlabel('x')
ax3.set_ylabel('y')
ax3.set_title('Fonctions racines')
ax3.legend()
ax3.grid(True, alpha=0.3)

# --- Comparaison polynomial vs exponentiel ---
ax4 = axes[1, 1]
x = np.linspace(1, 8, 100)

ax4.plot(x, x**2, label='n² (polynomial)', linewidth=2)
ax4.plot(x, x**3, label='n³ (polynomial)', linewidth=2)
ax4.plot(x, 2**x, label='2^n (exponentiel)', linewidth=2)

ax4.set_xlabel('n')
ax4.set_ylabel('Valeur')
ax4.set_title('Polynomial vs Exponentiel')
ax4.legend()
ax4.set_ylim([0, 300])
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Vérification des lois des exposants
print("=== Vérification des lois des exposants ===")
a, m, n = 3, 4, 2
print(f"a^m * a^n = {a**m * a**n}")
print(f"a^(m+n) = {a**(m+n)}")
print(f"Égaux ? {a**m * a**n == a**(m+n)}")`,
        exercice: `
**Exercices :**

1. Calculez \\( 2^{100} \\) (Python gère les grands entiers !)
2. Vérifiez que \\( 2^{10} = 1024 \\) (1 Ko en informatique)
3. Calculez \\( \\sqrt[4]{625} \\) en utilisant les exposants fractionnaires
4. Tracez les courbes \\( y = x^n \\) pour \\( n = 0.5, 1, 2, 3 \\)
        `
    },

    factorial_combinatorics: {
        title: "Factorielle et combinatoire",
        theorie: `
## Factorielle et dénombrement

### Factorielle

$$n! = n \\times (n-1) \\times ... \\times 2 \\times 1$$

Par convention : \\( 0! = 1 \\)

### Combinaisons

$$C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$

### Triangle de Pascal

$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt
from math import factorial, comb

# ===============================================
# FACTORIELLE ET COMBINATOIRE
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# --- Croissance de la factorielle ---
ax1 = axes[0, 0]
n_vals = range(1, 13)
factorielles = [factorial(n) for n in n_vals]

ax1.bar(n_vals, factorielles, color='purple', alpha=0.7)
ax1.set_xlabel('n')
ax1.set_ylabel('n!')
ax1.set_title('Croissance de la factorielle')
ax1.set_yscale('log')

# --- Triangle de Pascal ---
ax2 = axes[0, 1]
n_lignes = 10

for n in range(n_lignes):
    for k in range(n + 1):
        val = comb(n, k)
        x = k - n/2
        y = -n
        ax2.text(x, y, str(val), ha='center', va='center', fontsize=10,
                bbox=dict(boxstyle='circle', facecolor='lightblue', alpha=0.7))

ax2.set_xlim([-6, 6])
ax2.set_ylim([-n_lignes, 1])
ax2.set_title('Triangle de Pascal')
ax2.axis('off')

# --- Coefficients binomiaux ---
ax3 = axes[1, 0]
for n in [5, 10, 15, 20]:
    k_vals = range(n + 1)
    coeffs = [comb(n, k) for k in k_vals]
    ax3.plot(k_vals, coeffs, 'o-', label=f'n = {n}', markersize=4)

ax3.set_xlabel('k')
ax3.set_ylabel('C(n,k)')
ax3.set_title('Coefficients binomiaux')
ax3.legend()
ax3.grid(True, alpha=0.3)

# --- Approximation de Stirling ---
ax4 = axes[1, 1]
n_vals = np.arange(1, 20)
exact = np.array([factorial(n) for n in n_vals])
stirling = np.sqrt(2 * np.pi * n_vals) * (n_vals / np.e) ** n_vals

ax4.plot(n_vals, exact, 'b-', label='n! exact', linewidth=2)
ax4.plot(n_vals, stirling, 'r--', label='Stirling', linewidth=2)
ax4.set_xlabel('n')
ax4.set_ylabel('Valeur')
ax4.set_title('Approximation de Stirling')
ax4.legend()
ax4.set_yscale('log')
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("=== Factorielles ===")
for n in range(11):
    print(f"{n}! = {factorial(n)}")

print("\\n=== Combinaisons ===")
print(f"Mains de poker (5 parmi 52) : C(52,5) = {comb(52, 5):,}")`,
        exercice: `
**Exercices :**

1. Calculez \\( 20! \\) et comparez avec l'approximation de Stirling
2. Combien de façons de choisir 3 délégués parmi 30 élèves ?
3. Affichez les 15 premières lignes du triangle de Pascal
4. Calculez la probabilité de gagner au Loto (5 parmi 49)
        `
    },

    sequences_series: {
        title: "Suites et séries numériques",
        theorie: `
## Suites et séries

### Suite arithmétique

$$a_n = a_1 + (n-1) \\times r$$

### Suite géométrique

$$a_n = a_1 \\times q^{n-1}$$

### Sommes célèbres

- \\( 1 + 2 + ... + n = \\frac{n(n+1)}{2} \\)
- \\( 1^2 + 2^2 + ... + n^2 = \\frac{n(n+1)(2n+1)}{6} \\)

### Fibonacci

\\( F_n = F_{n-1} + F_{n-2} \\) avec \\( F_0 = 0, F_1 = 1 \\)
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# ===============================================
# SUITES ET SÉRIES NUMÉRIQUES
# ===============================================

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# --- Suite arithmétique ---
ax1 = axes[0, 0]
a1, r = 3, 5
n = np.arange(1, 16)
suite_arith = a1 + (n - 1) * r

ax1.plot(n, suite_arith, 'bo-', linewidth=2, markersize=8, label=f'a1={a1}, r={r}')
ax1.fill_between(n, suite_arith, alpha=0.2)
ax1.set_xlabel('n')
ax1.set_ylabel('an')
ax1.set_title('Suite arithmétique')
ax1.legend()
ax1.grid(True, alpha=0.3)

# --- Suite géométrique ---
ax2 = axes[0, 1]
a1, q = 2, 1.5
suite_geom = a1 * q**(n - 1)

ax2.plot(n, suite_geom, 'ro-', linewidth=2, markersize=8, label=f'a1={a1}, q={q}')
ax2.fill_between(n, suite_geom, alpha=0.2, color='red')
ax2.set_xlabel('n')
ax2.set_ylabel('an')
ax2.set_title('Suite géométrique')
ax2.legend()
ax2.grid(True, alpha=0.3)

# --- Fibonacci ---
ax3 = axes[1, 0]

def fibonacci(n_terms):
    fib = [0, 1]
    for i in range(2, n_terms):
        fib.append(fib[-1] + fib[-2])
    return fib

fib = fibonacci(20)
n_fib = range(len(fib))

ax3.bar(n_fib, fib, color='green', alpha=0.7)
ax3.set_xlabel('n')
ax3.set_ylabel('Fn')
ax3.set_title('Suite de Fibonacci')
ax3.grid(True, alpha=0.3, axis='y')

# --- Sommes partielles ---
ax4 = axes[1, 1]
n = np.arange(1, 21)

somme_entiers = n * (n + 1) / 2
somme_carres = n * (n + 1) * (2*n + 1) / 6
somme_harmonique = [sum(1/k for k in range(1, i+1)) for i in n]

ax4.plot(n, somme_entiers, 'b-', label='Somme k', linewidth=2)
ax4.plot(n, somme_carres, 'r-', label='Somme k²', linewidth=2)
ax4.plot(n, somme_harmonique, 'g-', label='Harmonique', linewidth=2)

ax4.set_xlabel('n')
ax4.set_ylabel('Somme')
ax4.set_title('Sommes partielles')
ax4.legend()
ax4.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Ratio doré
print("=== Ratio doré (Fibonacci) ===")
for i in range(5, 15):
    ratio = fib[i] / fib[i-1]
    print(f"F({i})/F({i-1}) = {ratio:.6f}")
print(f"Nombre d'or = {(1 + np.sqrt(5))/2:.6f}")`,
        exercice: `
**Exercices :**

1. Calculez la somme des 1000 premiers entiers avec la formule de Gauss
2. Vérifiez que \\( \\sum_{k=0}^{n} 2^k = 2^{n+1} - 1 \\)
3. Calculez les 50 premiers termes de Fibonacci
4. Tracez la spirale de Fibonacci
        `
    },

    sympy_plotting: {
        title: "Visualiser avec SymPy et Matplotlib",
        theorie: `## SymPy + Matplotlib\n\nSymPy et Matplotlib ensemble permettent de visualiser des expressions symboliques.`,
        code: `import numpy as np
import matplotlib.pyplot as plt
import sympy as sp
from sympy import lambdify

x = sp.Symbol('x')
fig, ax = plt.subplots(figsize=(10, 6))

poly = x**3 - 3*x**2 + 2*x
f = lambdify(x, poly, 'numpy')
x_vals = np.linspace(-1, 3, 200)
ax.plot(x_vals, f(x_vals), 'b-', lw=2, label='x³ - 3x² + 2x')
ax.axhline(0, color='k', lw=0.5)
ax.legend(); ax.grid(True, alpha=0.3)
ax.set_title('Polynôme avec SymPy')
plt.show()`,
        exercice: `**Exercices :** Tracez une fonction et sa dérivée.`
    },

    polynomials_visual: {
        title: "Polynômes et leurs racines",
        theorie: `## Racines de polynômes\n\nUn polynôme de degré n a n racines (complexes).`,
        code: `import numpy as np
import matplotlib.pyplot as plt

coeffs = [1, -6, 11, -6]
racines = np.roots(coeffs)
x = np.linspace(0, 4, 200)
y = np.polyval(coeffs, x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', lw=2)
plt.scatter(racines.real, np.zeros_like(racines), color='red', s=100, zorder=5)
plt.axhline(0, color='k', lw=0.5)
plt.title(f'Racines: {racines.real}')
plt.grid(True, alpha=0.3)
plt.show()`,
        exercice: `**Exercice :** Trouvez les racines de x⁴ - 5x² + 4.`
    },

    gcd_visual: {
        title: "PGCD et algorithme d'Euclide visualisé",
        theorie: `## Algorithme d'Euclide\n\ngcd(a, b) = gcd(b, a mod b)`,
        code: `import numpy as np
import matplotlib.pyplot as plt

n = 20
gcd_matrix = np.zeros((n, n))
for i in range(1, n+1):
    for j in range(1, n+1):
        gcd_matrix[i-1, j-1] = np.gcd(i, j)

plt.figure(figsize=(8, 8))
plt.imshow(gcd_matrix, cmap='viridis')
plt.colorbar(label='PGCD')
plt.title('Matrice des PGCD(i,j)')
plt.show()`,
        exercice: `**Exercice :** Visualisez l'algorithme d'Euclide étape par étape.`
    },

    exp_log_visual: {
        title: "Exponentielles et logarithmes",
        theorie: `## Fonctions réciproques\n\ny = eˣ ⟺ x = ln(y)`,
        code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 3, 200)
x_pos = np.linspace(0.01, 5, 200)

plt.figure(figsize=(10, 8))
plt.plot(x, np.exp(x), 'b-', lw=2, label='eˣ')
plt.plot(x_pos, np.log(x_pos), 'r-', lw=2, label='ln(x)')
plt.plot(x, x, 'k--', alpha=0.5, label='y = x')
plt.xlim([-2, 5]); plt.ylim([-2, 5])
plt.legend(); plt.grid(True, alpha=0.3)
plt.gca().set_aspect('equal')
plt.title('Fonctions réciproques')
plt.show()`,
        exercice: `**Exercice :** Tracez log₂(x), ln(x), log₁₀(x).`
    },

    extrema_visual: {
        title: "Extrema de fonctions",
        theorie: `## Points critiques\n\nUn extremum local où f'(x) = 0.`,
        code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 4, 200)
f = lambda x: x**4 - 4*x**3 + 4*x**2
f_prime = lambda x: 4*x**3 - 12*x**2 + 8*x

plt.figure(figsize=(10, 6))
plt.plot(x, f(x), 'b-', lw=2, label='f(x)')
plt.plot(x, f_prime(x), 'r--', lw=2, label="f'(x)")
for xc in [0, 1, 2]:
    plt.plot(xc, f(xc), 'go', ms=10)
plt.axhline(0, color='k', lw=0.5)
plt.legend(); plt.grid(True, alpha=0.3)
plt.title('Extrema')
plt.show()`,
        exercice: `**Exercice :** Trouvez les extrema de x³ - 6x² + 9x + 1.`
    },

    fourier_intro: {
        title: "Introduction à Fourier",
        theorie: `## Séries de Fourier\n\nToute fonction périodique se décompose en somme de sinus et cosinus.`,
        code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-np.pi, np.pi, 500)
square = np.sign(np.sin(x))

plt.figure(figsize=(10, 6))
plt.plot(x, square, 'k-', lw=2, label='Signal carré')
for n_terms in [1, 5, 15]:
    approx = np.zeros_like(x)
    for k in range(1, n_terms+1, 2):
        approx += (4/(k*np.pi)) * np.sin(k*x)
    plt.plot(x, approx, '--', alpha=0.7, label=f'{n_terms} termes')
plt.legend(); plt.grid(True, alpha=0.3)
plt.title('Série de Fourier')
plt.show()`,
        exercice: `**Exercice :** Approximez une onde triangulaire.`
    },

    data_fitting: {
        title: "Ajustement de données (fitting)",
        theorie: `## Régression\n\nMinimiser la somme des erreurs au carré.`,
        code: `import numpy as np
import matplotlib.pyplot as plt

np.random.seed(42)
x = np.linspace(0, 10, 20)
y = 2.5*x + 3 + np.random.randn(20)*2
coeffs = np.polyfit(x, y, 1)

plt.figure(figsize=(10, 6))
plt.scatter(x, y, color='blue', s=50)
plt.plot(x, np.polyval(coeffs, x), 'r-', lw=2, label=f'y = {coeffs[0]:.2f}x + {coeffs[1]:.2f}')
plt.legend(); plt.grid(True, alpha=0.3)
plt.title('Régression linéaire')
plt.show()`,
        exercice: `**Exercice :** Ajustez un polynôme de degré 3 à des données.`
    },

    signal_processing: {
        title: "Traitement du signal",
        theorie: `## Analyse spectrale\n\nLa FFT décompose un signal en ses fréquences.`,
        code: `import numpy as np
import matplotlib.pyplot as plt

t = np.linspace(0, 1, 1000)
signal = np.sin(2*np.pi*5*t) + 0.5*np.sin(2*np.pi*12*t)
fft = np.abs(np.fft.fft(signal))[:500]
freqs = np.fft.fftfreq(1000, 0.001)[:500]

fig, axes = plt.subplots(1, 2, figsize=(14, 5))
axes[0].plot(t[:200], signal[:200])
axes[0].set_title('Signal temporel')
axes[1].stem(freqs[:50], fft[:50], basefmt=' ')
axes[1].set_title('Spectre')
plt.tight_layout()
plt.show()`,
        exercice: `**Exercice :** Analysez un signal avec 3 fréquences.`
    }
};
