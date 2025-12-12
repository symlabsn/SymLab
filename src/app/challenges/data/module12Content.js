// MODULE 12 : ALGEBRE LINEAIRE (Focus Sympy)
export const module12Content = {
    vectors: {
        title: "Vecteurs lignes et colonnes",
        theorie: `
## Vecteurs avec Sympy

\`\`\`python
from sympy import Matrix

# Vecteur colonne
v = Matrix([1, 2, 3])

# Vecteur ligne
u = Matrix([[1, 2, 3]])
\`\`\`

### Avantages de Sympy
- Calcul **exact** (fractions, radicaux)
- Manipulation **symbolique**
- Compatible avec les autres outils Sympy
        `,
        code: `import sympy as sp
from sympy import Matrix, symbols, sqrt, Rational

# Vecteur colonne
v = Matrix([1, 2, 3])
print(f"Vecteur colonne v =\\n{v}")
print(f"Dimensions : {v.shape}")

# Vecteur ligne
u = Matrix([[1, 2, 3]])
print(f"\\nVecteur ligne u = {u}")

# Vecteur symbolique
x, y, z = symbols('x y z')
w = Matrix([x, y, z])
print(f"\\nVecteur symbolique w =\\n{w}")

# Valeurs exactes
v_exact = Matrix([Rational(1,2), sqrt(2), sp.pi])
print(f"\\nVecteur exact =\\n{v_exact}")

# Norme (longueur)
v = Matrix([3, 4])
norme = v.norm()
print(f"\\n||[3, 4]|| = {norme}")`,
        exercice: `Créez un vecteur symbolique et calculez sa norme.`
    },

    vector_ops: {
        title: "Addition et multiplication scalaire",
        theorie: `
## Opérations vectorielles

- Addition : $\\vec{u} + \\vec{v}$
- Scalaire : $c \\cdot \\vec{v}$
- Linéaire : $a\\vec{u} + b\\vec{v}$

Sympy : opérateurs naturels +, -, *
        `,
        code: `from sympy import Matrix, symbols, simplify

u = Matrix([1, 2, 3])
v = Matrix([4, 5, 6])

print("=== Opérations vectorielles ===")
print(f"u + v = {(u + v).T}")
print(f"u - v = {(u - v).T}")
print(f"3*u = {(3 * u).T}")
print(f"2u + 3v = {(2*u + 3*v).T}")

# Symbolique
a, b = symbols('a b')
x = Matrix([a, b])
y = Matrix([b, a])

print(f"\\n=== Symbolique ===")
print(f"x + y = {(x + y).T}")
print(f"x - y = {(x - y).T}")

# Vérification des propriétés
print(f"\\nu + v = v + u ? {u + v == v + u}")`,
        exercice: `Vérifiez que $2(\\vec{u} + \\vec{v}) = 2\\vec{u} + 2\\vec{v}$ symboliquement.`
    },

    dot_product: {
        title: "Le produit scalaire",
        theorie: `
## Produit scalaire avec Sympy

$$\\vec{u} \\cdot \\vec{v} = \\sum_{i} u_i v_i = ||u|| \\cdot ||v|| \\cos\\theta$$

\`\`\`python
u.dot(v)  # Produit scalaire
\`\`\`
        `,
        code: `from sympy import Matrix, symbols, sqrt, acos, pi, simplify

u = Matrix([1, 2, 3])
v = Matrix([4, 5, 6])

# Produit scalaire
dot = u.dot(v)
print(f"u · v = {dot}")

# Angle entre vecteurs
norm_u = u.norm()
norm_v = v.norm()
cos_theta = dot / (norm_u * norm_v)
theta = acos(cos_theta)
print(f"\\ncos(θ) = {simplify(cos_theta)}")
print(f"θ ≈ {float(theta):.4f} rad")

# Orthogonalité
a = Matrix([1, 0, 0])
b = Matrix([0, 1, 0])
print(f"\\na · b = {a.dot(b)} → orthogonaux")

# Symbolique
x, y = symbols('x y')
u_sym = Matrix([x, y])
v_sym = Matrix([1, 0])
print(f"\\n[x, y] · [1, 0] = {u_sym.dot(v_sym)}")`,
        exercice: `Trouvez $x$ tel que $[x, 1, 2] \\perp [1, 2, 3]$.`
    },

    correlation: {
        title: "Application : Coefficient de corrélation",
        theorie: `
## Corrélation comme produit scalaire

Le coefficient de corrélation :
$$r = \\frac{\\vec{x}_{centré} \\cdot \\vec{y}_{centré}}{||\\vec{x}_{centré}|| \\cdot ||\\vec{y}_{centré}||}$$

C'est le cosinus de l'angle entre vecteurs centrés !
        `,
        code: `from sympy import Matrix, sqrt, Rational, nsimplify

# Données
x = Matrix([1, 2, 3, 4, 5])
y = Matrix([2, 4, 5, 4, 5])

# Centrage
x_mean = sum(x) / len(x)
y_mean = sum(y) / len(y)
x_c = x - Matrix([x_mean]*5)
y_c = y - Matrix([y_mean]*5)

print(f"x centré = {x_c.T}")
print(f"y centré = {y_c.T}")

# Corrélation
r = x_c.dot(y_c) / (x_c.norm() * y_c.norm())
print(f"\\nCorrélation r = {nsimplify(r, rational=False)}")
print(f"r ≈ {float(r):.4f}")

# Interprétation
if float(r) > 0.7:
    print("Forte corrélation positive")`,
        exercice: `Calculez la corrélation entre [1,2,3] et [3,2,1].`
    },

    outer_product: {
        title: "Le produit extérieur",
        theorie: `
## Produit extérieur (tensoriel)

$$\\vec{u} \\otimes \\vec{v} = \\vec{u} \\cdot \\vec{v}^T$$

Résultat : matrice de rang 1
        `,
        code: `from sympy import Matrix, symbols

u = Matrix([1, 2, 3])
v = Matrix([4, 5])

# Produit extérieur
outer = u * v.T
print(f"u ⊗ v =\\n{outer}")
print(f"Dimensions : {outer.shape}")

# Symbolique
a, b, c = symbols('a b c')
x = Matrix([a, b])
y = Matrix([1, c])

outer_sym = x * y.T
print(f"\\nSymbolique :\\n{outer_sym}")

# Rang
print(f"\\nRang = {outer.rank()}")  # Toujours 1`,
        exercice: `Montrez que le rang du produit extérieur est toujours 1.`
    },

    matrix_mult: {
        title: "Multiplication matricielle",
        theorie: `
## Multiplication avec Sympy

\`\`\`python
A * B   # Multiplication matricielle
A @ B   # Aussi valide
\`\`\`

Dimensions : $(m \\times n) \\cdot (n \\times p) = (m \\times p)$
        `,
        code: `from sympy import Matrix, symbols, eye

A = Matrix([[1, 2], [3, 4]])
B = Matrix([[5, 6], [7, 8]])

print(f"A =\\n{A}")
print(f"B =\\n{B}")

# Multiplication
C = A * B
print(f"\\nA × B =\\n{C}")

# Non-commutativité
print(f"\\nB × A =\\n{B * A}")
print(f"A×B = B×A ? {A*B == B*A}")

# Identité
I = eye(2)
print(f"\\nA × I = A ? {A * I == A}")

# Symbolique
a, b, c, d = symbols('a b c d')
M = Matrix([[a, b], [c, d]])
print(f"\\nM² =\\n{M * M}")`,
        exercice: `Calculez $A^2$ pour $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$.`
    },

    transposing: {
        title: "Transposition de vecteurs et matrices",
        theorie: `
## Transposition

$$(A^T)_{ij} = A_{ji}$$

Sympy : \`A.T\` ou \`A.transpose()\`

### Propriétés
- $(A^T)^T = A$
- $(AB)^T = B^T A^T$
        `,
        code: `from sympy import Matrix, symbols

A = Matrix([[1, 2, 3], [4, 5, 6]])
print(f"A =\\n{A}")
print(f"A^T =\\n{A.T}")

# Propriétés
print(f"\\n(A^T)^T = A ? {A.T.T == A}")

# Produit
B = Matrix([[1, 2], [3, 4], [5, 6]])
print(f"\\n(AB)^T = B^T A^T ? {(A*B).T == B.T * A.T}")

# Matrice symétrique
S = Matrix([[1, 2, 3], [2, 4, 5], [3, 5, 6]])
print(f"\\nS symétrique ? {S == S.T}")`,
        exercice: `Créez une matrice symétrique 3×3 et vérifiez $S = S^T$.`
    },

    special_matrices: {
        title: "Matrices spéciales",
        theorie: `
## Matrices avec Sympy

\`\`\`python
from sympy import eye, zeros, ones, diag

eye(n)      # Identité
zeros(m, n) # Matrice nulle
ones(m, n)  # Matrice de uns
diag(a, b, c) # Diagonale
\`\`\`
        `,
        code: `from sympy import Matrix, eye, zeros, ones, diag, symbols

print("=== Matrices spéciales ===")
print(f"Identité 3×3 :\\n{eye(3)}")
print(f"\\nNulle 2×3 :\\n{zeros(2, 3)}")
print(f"\\nUns 2×2 :\\n{ones(2, 2)}")
print(f"\\nDiagonale :\\n{diag(1, 2, 3)}")

# Matrice de rotation
from sympy import cos, sin, pi
theta = symbols('theta')
R = Matrix([[cos(theta), -sin(theta)],
            [sin(theta), cos(theta)]])
print(f"\\nRotation :\\n{R}")

# Vérification R^T R = I
print(f"\\nR^T R = {(R.T * R).simplify()}")`,
        exercice: `Créez la matrice de rotation de 45° et appliquez-la à $[1, 0]$.`
    },

    matrix_inv: {
        title: "Inverse d'une matrice",
        theorie: `
## Inverse avec Sympy

$$A^{-1} A = A A^{-1} = I$$

\`\`\`python
A.inv()   # Inverse exacte
A**(-1)   # Aussi valide
\`\`\`

Condition : $\\det(A) \\neq 0$
        `,
        code: `from sympy import Matrix, symbols, simplify

A = Matrix([[4, 7], [2, 6]])
print(f"A =\\n{A}")

# Déterminant
det = A.det()
print(f"det(A) = {det}")

# Inverse
A_inv = A.inv()
print(f"\\nA^(-1) =\\n{A_inv}")

# Vérification
print(f"\\nA × A^(-1) =\\n{A * A_inv}")

# Inverse symbolique
a, b, c, d = symbols('a b c d')
M = Matrix([[a, b], [c, d]])
print(f"\\nInverse symbolique (ad ≠ bc) :")
print(f"{M.inv()}")`,
        exercice: `Trouvez l'inverse de $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$.`
    },

    pseudo_inv: {
        title: "Pseudo-inverse : Exercice",
        theorie: `
## Pseudo-inverse de Moore-Penrose

Pour matrices non carrées ou singulières :
$$A^+ = (A^T A)^{-1} A^T$$

Sympy : \`A.pinv()\`
        `,
        code: `from sympy import Matrix

# Matrice non carrée
A = Matrix([[1, 2], [3, 4], [5, 6]])
print(f"A (3×2) =\\n{A}")

# Pseudo-inverse
A_pinv = A.pinv()
print(f"\\nA^+ (2×3) =\\n{A_pinv}")

# Vérification : A^+ A ≈ I
print(f"\\nA^+ × A =\\n{(A_pinv * A).simplify()}")

# Application : moindres carrés
# Ax = b → x = A^+ b
b = Matrix([1, 2, 3])
x = A_pinv * b
print(f"\\nSolution moindres carrés de Ax = b :")
print(f"x = {x}")`,
        exercice: `Calculez la pseudo-inverse de $[1, 2, 3]^T$.`
    },

    systems_eq: {
        title: "Résoudre un système d'équations",
        theorie: `
## Systèmes linéaires avec Sympy

\`\`\`python
A.solve(b)         # Résout Ax = b
linsolve([eq1, eq2], x, y)  # Système symbolique
\`\`\`
        `,
        code: `from sympy import Matrix, symbols, linsolve, Eq

# Méthode matricielle
A = Matrix([[2, 1], [1, 3]])
b = Matrix([5, 5])

x = A.solve(b)
print(f"Système :\\n{A} × x = {b}")
print(f"Solution : x = {x}")

# Vérification
print(f"Vérif : A×x = {A * x}")

# Méthode symbolique
x, y = symbols('x y')
eq1 = Eq(2*x + y, 5)
eq2 = Eq(x + 3*y, 5)

sol = linsolve([eq1, eq2], x, y)
print(f"\\nSolution symbolique : {sol}")

# Système 3×3
A3 = Matrix([[1, 1, 1], [0, 2, 5], [2, 5, -1]])
b3 = Matrix([6, -4, 27])
print(f"\\nSystème 3×3 : x = {A3.solve(b3)}")`,
        exercice: `Résolvez $\\begin{cases} x + y + z = 6 \\\\ x - y + z = 2 \\\\ 2x + y - z = 1 \\end{cases}$`
    },

    visual_mult: {
        title: "Visualiser la multiplication matrice-vecteur",
        theorie: `
## Transformation linéaire

$A\\vec{v}$ transforme le vecteur $\\vec{v}$.

- Rotation, réflexion, étirement
- Les colonnes de $A$ = images des vecteurs de base
        `,
        code: `from sympy import Matrix, cos, sin, pi, sqrt
import matplotlib.pyplot as plt
import numpy as np

# Matrice de rotation 45°
theta = pi/4
R = Matrix([[cos(theta), -sin(theta)],
            [sin(theta), cos(theta)]])
print(f"Matrice de rotation 45° :\\n{R.evalf(3)}")

# Appliquer à des vecteurs
vecteurs = [Matrix([1, 0]), Matrix([0, 1]), Matrix([1, 1])]

fig, ax = plt.subplots(figsize=(8, 8))
for v in vecteurs:
    v_rot = R * v
    # Original
    ax.arrow(0, 0, float(v[0]), float(v[1]), head_width=0.1, color='blue', alpha=0.5)
    # Transformé
    ax.arrow(0, 0, float(v_rot[0]), float(v_rot[1]), head_width=0.1, color='red')

ax.set_xlim(-2, 2); ax.set_ylim(-2, 2)
ax.set_aspect('equal'); ax.grid()
ax.legend(['Original', 'Après rotation'])
plt.title('Rotation de 45°')
plt.show()`,
        exercice: `Visualisez l'effet d'une matrice d'étirement $\\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$.`
    },

    eigen: {
        title: "Valeurs propres et vecteurs propres",
        theorie: `
## Diagonalisation avec Sympy

$$A\\vec{v} = \\lambda\\vec{v}$$

\`\`\`python
A.eigenvals()   # Valeurs propres
A.eigenvects()  # Vecteurs propres
\`\`\`
        `,
        code: `from sympy import Matrix, symbols, simplify

A = Matrix([[4, 1], [2, 3]])
print(f"A =\\n{A}")

# Valeurs propres
eigenvals = A.eigenvals()
print(f"\\nValeurs propres : {eigenvals}")

# Vecteurs propres
eigenvects = A.eigenvects()
print(f"\\nVecteurs propres :")
for val, mult, vecs in eigenvects:
    print(f"  λ = {val}, multiplicité = {mult}")
    for v in vecs:
        print(f"    v = {v.T}")

# Vérification : Av = λv
for val, mult, vecs in eigenvects:
    for v in vecs:
        Av = A * v
        lv = val * v
        print(f"\\nA×v = {Av.T}, λ×v = {lv.T}")`,
        exercice: `Trouvez les valeurs/vecteurs propres de $\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.`
    },

    eigen_decomp: {
        title: "Diagonalisation : Exercice",
        theorie: `
## Décomposition spectrale

$$A = PDP^{-1}$$

où $D$ est diagonale (valeurs propres) et $P$ contient les vecteurs propres.
        `,
        code: `from sympy import Matrix, simplify

A = Matrix([[4, 1], [2, 3]])
print(f"A =\\n{A}")

# Diagonalisation
P, D = A.diagonalize()
print(f"\\nP (vecteurs propres) =\\n{P}")
print(f"\\nD (valeurs propres) =\\n{D}")

# Vérification : A = P D P^(-1)
A_rebuilt = P * D * P.inv()
print(f"\\nP × D × P^(-1) =\\n{simplify(A_rebuilt)}")
print(f"\\nÉgal à A ? {simplify(A_rebuilt - A) == Matrix([[0,0],[0,0]])}")

# Puissance de matrice facile !
print(f"\\nA^10 via diagonalisation :")
A10 = P * (D**10) * P.inv()
print(A10)`,
        exercice: `Diagonalisez $\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$ et calculez $A^5$.`
    },

    svd: {
        title: "Décomposition en valeurs singulières (SVD)",
        theorie: `
## SVD avec Sympy

$$A = U \\Sigma V^T$$

- $U$ : vecteurs singuliers gauches
- $\\Sigma$ : valeurs singulières
- $V$ : vecteurs singuliers droits

\`\`\`python
A.singular_value_decomposition()
\`\`\`
        `,
        code: `from sympy import Matrix, sqrt, simplify

A = Matrix([[1, 2], [3, 4], [5, 6]])
print(f"A (3×2) =\\n{A}")

# SVD
U, S, V = A.singular_value_decomposition()
print(f"\\nU (3×2) =\\n{U}")
print(f"\\nΣ (diag) =\\n{S}")
print(f"\\nV (2×2) =\\n{V}")

# Vérification
A_rebuilt = U * S * V.T
print(f"\\nU × Σ × V^T =\\n{simplify(A_rebuilt)}")

# Valeurs singulières
print(f"\\nValeurs singulières : diag(Σ) = {[S[i,i] for i in range(min(S.shape))]}")`,
        exercice: `Calculez la SVD de $\\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\\\ 0 & 0 \\end{pmatrix}$.`
    },

    svd_einstein: {
        title: "SVD d'Einstein : Exercice",
        theorie: `
## Application de la SVD

- Compression d'images
- Réduction de dimension
- Résolution de moindres carrés
        `,
        code: `from sympy import Matrix, sqrt
import numpy as np
import matplotlib.pyplot as plt

# Image simple (matrice)
A = np.array([[1, 2, 3, 4],
              [2, 3, 4, 5],
              [3, 4, 5, 6],
              [4, 5, 6, 7]])

# SVD numérique
U, s, Vt = np.linalg.svd(A)

print("Valeurs singulières :", s)

# Reconstruction avec rang réduit
fig, axes = plt.subplots(1, 4, figsize=(15, 3))
for k in range(1, 5):
    A_k = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]
    axes[k-1].imshow(A_k, cmap='gray')
    axes[k-1].set_title(f'Rang {k}')

plt.suptitle('Approximation de rang faible via SVD')
plt.show()`,
        exercice: `Montrez que le rang de $A$ est égal au nombre de valeurs singulières non nulles.`
    },

    lin_alg_bug: {
        title: "Chasse aux bugs Algèbre linéaire !",
        theorie: `
## Erreurs courantes

1. Dimensions incompatibles
2. Matrice singulière (det = 0)
3. Confusion lignes/colonnes
4. Oublier que $AB \\neq BA$
        `,
        code: `from sympy import Matrix

print("=== Bug 1 : Dimensions ===")
A = Matrix([[1, 2], [3, 4]])
B = Matrix([[1, 2, 3], [4, 5, 6]])
print(f"A : {A.shape}, B : {B.shape}")
print(f"A × B possible ? Oui ({A.shape[1]} = {B.shape[0]})")
# C = Matrix([[1], [2], [3]])
# A * C  # Erreur !

print("\\n=== Bug 2 : Singulière ===")
S = Matrix([[1, 2], [2, 4]])
print(f"det(S) = {S.det()}")
try:
    S.inv()
except:
    print("Erreur : matrice singulière !")

print("\\n=== Bug 3 : Non-commutativité ===")
A = Matrix([[1, 2], [0, 1]])
B = Matrix([[1, 0], [1, 1]])
print(f"AB =\\n{A*B}")
print(f"BA =\\n{B*A}")
print(f"AB = BA ? {A*B == B*A}")`,
        exercice: `Pourquoi $A^{-1}$ n'existe pas si $\\det(A) = 0$ ?`
    }
};
