// ============================================================
// CONTENU PEDAGOGIQUE - MODULES 4, 5 ET 6
// ============================================================

export const modules456Content = {
    // ============================================================
    // MODULE 4 : TYPES DE DONNEES PYTHON
    // ============================================================

    nums_strings: {
        title: "Nombres et chaines de caracteres",
        theorie: `
## Types de donnees fondamentaux en Python

Python possede plusieurs types de donnees de base :

### Types numeriques :

| Type | Description | Exemple |
|------|-------------|---------|
| int | Entier | 42, -17, 0 |
| float | Decimal | 3.14, -0.5, 1e-6 |
| complex | Complexe | 2 + 3j, 1j |

### Chaines de caracteres (str) :

- Guillemets : "Bonjour" ou 'Python'
- Multi-lignes : """Texte..."""

### Conversion de types :

- int("42") -> 42
- float("3.14") -> 3.14
- str(42) -> "42"
        `,
        code: `# Types de donnees en Python

# === TYPES NUMERIQUES ===
print("=== Types numeriques ===")

# Entiers (int) - precision illimitee !
entier = 42
grand_nombre = 10 ** 100  # Un googol
print(f"Entier : {entier}, type : {type(entier)}")

# Decimaux (float)
decimal = 3.14159
scientifique = 6.022e23  # Nombre d'Avogadro
print(f"Decimal : {decimal}, type : {type(decimal)}")

# Complexes
z = 3 + 4j
print(f"Complexe z = {z}")
print(f"Partie reelle : {z.real}")
print(f"Partie imaginaire : {z.imag}")
print(f"Module : {abs(z)}")

# === CHAINES ===
print("\\n=== Chaines de caracteres ===")
nom = "Euler"
print(f"Nom : {nom}, longueur : {len(nom)}")
print(f"Majuscules : {nom.upper()}")
print(f"A l'envers : {nom[::-1]}")`,
        exercice: `
**Exercice :**

1. Calculez le module du nombre complexe z = 5 + 12i
2. Inversez la chaine "mathematiques"
3. Convertissez "100" en entier et ajoutez 23
        `
    },

    lists_numpy: {
        title: "Listes et tableaux NumPy",
        theorie: `
## Listes Python vs Tableaux NumPy

### Listes Python :
- Collection ordonnee et modifiable
- Peut contenir des types differents

### Tableaux NumPy :
- Collection de meme type (homogene)
- Operations vectorisees (rapides)
- Ideal pour le calcul scientifique

### Differences :
| Operation | Liste | NumPy |
|-----------|-------|-------|
| * | Repetition | Element par element |
| + | Concatenation | Element par element |
        `,
        code: `import numpy as np

# === LISTES PYTHON ===
print("=== Listes Python ===")
liste = [1, 2, 3, 4, 5]
print(f"Liste : {liste}")
print(f"Liste * 2 = {liste * 2}")  # Repetition

# === TABLEAUX NUMPY ===
print("\\n=== Tableaux NumPy ===")
arr = np.array([1, 2, 3, 4, 5])
print(f"Tableau : {arr}")
print(f"arr * 2 = {arr * 2}")  # Element par element
print(f"arr ** 2 = {arr ** 2}")
print(f"np.sqrt(arr) = {np.sqrt(arr)}")
print(f"np.sum(arr) = {np.sum(arr)}")

# Tableaux speciaux
print("\\n=== Tableaux speciaux ===")
print(f"np.zeros(5) = {np.zeros(5)}")
print(f"np.ones(5) = {np.ones(5)}")
print(f"np.linspace(0, 1, 5) = {np.linspace(0, 1, 5)}")`,
        exercice: `
**Exercice :**

1. Creez un tableau NumPy de 0 a 100 par pas de 5
2. Calculez le carre de chaque element
3. Trouvez la somme et la moyenne
        `
    },

    // ============================================================
    // MODULE 5 : ALGEBRE 1
    // ============================================================

    solve_x: {
        title: "Resoudre une equation en x",
        theorie: `
## Resoudre des equations avec Sympy

Sympy permet de resoudre des equations de facon exacte.

### Fonction solve() :

from sympy import symbols, solve
x = symbols('x')
solve(x**2 - 4, x)  # [-2, 2]

### Types d'equations :
- Lineaires : ax + b = 0
- Quadratiques : ax^2 + bx + c = 0
- Polynomiales : Degre quelconque
- Transcendantes : sin, cos, exp, log
        `,
        code: `import sympy as sp

x = sp.Symbol('x')

print("=== Resolution d'equations ===")

# Equation lineaire
print("\\n--- Equation lineaire ---")
eq1 = 2*x + 5 - 11
sol1 = sp.solve(eq1, x)
print(f"2x + 5 = 11, x = {sol1}")

# Equation quadratique
print("\\n--- Equation quadratique ---")
eq2 = x**2 - 5*x + 6
sol2 = sp.solve(eq2, x)
print(f"x^2 - 5x + 6 = 0, x = {sol2}")

# Equation cubique
print("\\n--- Equation cubique ---")
eq3 = x**3 - 6*x**2 + 11*x - 6
sol3 = sp.solve(eq3, x)
print(f"x^3 - 6x^2 + 11x - 6 = 0, x = {sol3}")

# Systeme d'equations
print("\\n--- Systeme ---")
y = sp.Symbol('y')
solutions = sp.solve([x + y - 5, x - y - 1], [x, y])
print(f"x + y = 5 et x - y = 1 : {solutions}")`,
        exercice: `
**Exercice :**

1. Resolvez 3x - 7 = 2x + 5
2. Trouvez les racines de x^2 + 2x - 8 = 0
3. Resolvez le systeme : 2x + 3y = 12, x - y = 1
        `
    },

    solve_x_ex: {
        title: "Resoudre en x : Exercices",
        theorie: `
## Techniques de resolution

### Verifier une solution :
equation.subs(x, solution)  # Doit donner 0

### Resoudre pour une autre variable :
# v = u + at, resoudre pour t
solve(v - u - a*t, t)  # t = (v-u)/a

### Avec parametres :
Les solutions peuvent contenir des symboles.
        `,
        code: `import sympy as sp

x, a, b, c = sp.symbols('x a b c')

print("=== Exercices de resolution ===")

# Formule quadratique generale
print("\\n--- Formule quadratique ---")
eq = a*x**2 + b*x + c
solutions = sp.solve(eq, x)
print(f"ax^2 + bx + c = 0")
for sol in solutions:
    print(f"  x = {sol}")

# Isoler une variable
print("\\n--- Isoler m dans E = mc^2 ---")
E, m, c_light = sp.symbols('E m c')
equation = sp.Eq(E, m * c_light**2)
sol_m = sp.solve(equation, m)
print(f"m = {sol_m[0]}")

# Verification
print("\\n--- Verification ---")
eq_test = x**2 - 4*x - 5
sols = sp.solve(eq_test, x)
print(f"Solutions de x^2 - 4x - 5 = 0 : {sols}")
for s in sols:
    print(f"  Verification x={s} : {eq_test.subs(x, s)}")`,
        exercice: `
**Exercice :**

1. Isolez r dans V = 4/3 * pi * r^3
2. Resolvez |2x + 1| = 7
3. Verifiez vos solutions !
        `
    },

    expanding: {
        title: "Developper des expressions",
        theorie: `
## Developper avec Sympy

Developper = distribuer les produits et eliminer les parentheses.

### Fonction expand() :
from sympy import expand
expand((x + 1)**2)  # x**2 + 2*x + 1

### Identites remarquables :
- (a+b)^2 = a^2 + 2ab + b^2
- (a-b)^2 = a^2 - 2ab + b^2
- (a+b)(a-b) = a^2 - b^2
        `,
        code: `import sympy as sp

x, a, b = sp.symbols('x a b')

print("=== Developpements ===")

# Identites remarquables
print("\\n--- Identites remarquables ---")
print(f"(a + b)^2 = {sp.expand((a + b)**2)}")
print(f"(a - b)^2 = {sp.expand((a - b)**2)}")
print(f"(a + b)(a - b) = {sp.expand((a + b)*(a - b))}")
print(f"(a + b)^3 = {sp.expand((a + b)**3)}")

# Polynome
print("\\n--- Polynome ---")
p = (x + 1)*(x - 2)*(x + 3)
print(f"(x+1)(x-2)(x+3) = {sp.expand(p)}")

# Binome de Newton
print("\\n--- Puissances ---")
for n in range(6):
    print(f"(x+1)^{n} = {sp.expand((x+1)**n)}")`,
        exercice: `
**Exercice :**

1. Developpez (2x - 3)^2
2. Developpez (x + 2)(x^2 - 2x + 4)
3. Verifiez les coefficients de (x + y)^4
        `
    },

    matrices_numpy: {
        title: "Creer et manipuler des matrices avec NumPy",
        theorie: `
## Matrices avec NumPy

### Creation :
import numpy as np
M = np.array([[1, 2], [3, 4]])
np.eye(3)     # Identite 3x3
np.zeros((3, 3))  # Matrice nulle

### Acces :
M[i, j]   # Element (i, j)
M[i, :]   # Ligne i
M[:, j]   # Colonne j

### Operations :
A + B         # Addition
A @ B         # Multiplication
A.T           # Transposee
np.linalg.det(A)  # Determinant
np.linalg.inv(A)  # Inverse
        `,
        code: `import numpy as np

print("=== Matrices NumPy ===")

# Creation
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(f"Matrice A :\\n{A}")

# Matrices speciales
print(f"\\nIdentite 3x3 :\\n{np.eye(3)}")

# Acces
print(f"\\nA[1, 2] = {A[1, 2]}")
print(f"Ligne 0 : {A[0, :]}")
print(f"Colonne 1 : {A[:, 1]}")

# Operations
M = np.array([[4, 7], [2, 6]])
print(f"\\nM = \\n{M}")
print(f"Determinant : {np.linalg.det(M):.2f}")
M_inv = np.linalg.inv(M)
print(f"Inverse :\\n{M_inv}")
print(f"M @ M^(-1) :\\n{np.round(M @ M_inv, 10)}")`,
        exercice: `
**Exercice :**

1. Creez la matrice [[1,2],[3,4]]
2. Calculez son determinant
3. Trouvez son inverse
4. Verifiez M * M^(-1) = I
        `
    },

    mult_table: {
        title: "Exercice : Table de multiplication",
        theorie: `
## Table de multiplication

Une table de multiplication = matrice ou element (i,j) = i * j.

### Avec boucles :
for i in range(1, 11):
    for j in range(1, 11):
        table[i][j] = i * j

### Avec NumPy :
np.outer(range(1,11), range(1,11))
        `,
        code: `import numpy as np

print("=== Table de multiplication ===")

# Methode NumPy
table = np.outer(range(1, 11), range(1, 11))
print(table)

# Affichage formate
print("\\n--- Table formatee ---")
print("   |", end="")
for j in range(1, 11):
    print(f"{j:4}", end="")
print()
print("-" * 45)
for i in range(10):
    print(f"{i+1:2} |", end="")
    for j in range(10):
        print(f"{table[i,j]:4}", end="")
    print()

# Stats
print(f"\\nPlus petit : {table.min()}")
print(f"Plus grand : {table.max()}")
print(f"Somme : {table.sum()}")`,
        exercice: `
**Exercice :**

1. Creez une table 12x12
2. Trouvez les carres parfaits
3. Combien de fois 24 apparait ?
        `
    },

    // ============================================================
    // MODULE 6 : GRAPHIQUES
    // ============================================================

    coords: {
        title: "Tracer des points dans un repere",
        theorie: `
## Introduction a Matplotlib

import matplotlib.pyplot as plt
import numpy as np

### Tracer des points :
x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]
plt.plot(x, y, 'o')  # 'o' = points
plt.show()

### Marqueurs :
'o' = Cercles
's' = Carres
'^' = Triangles
'-' = Ligne
'--' = Tirets

### Personnalisation :
plt.title("Titre")
plt.xlabel("Axe X")
plt.ylabel("Axe Y")
plt.grid(True)
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

# Donnees
x = np.array([1, 2, 3, 4, 5])
y = x ** 2

# Figure
plt.figure(figsize=(8, 6))

# Points
plt.plot(x, y, 'o', markersize=10, color='blue', label='y = x^2')

# Personnalisation
plt.title('Tracer des points', fontsize=14)
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True, alpha=0.3)
plt.legend()

plt.savefig('points.png', dpi=150)
plt.show()
print("Graphique sauvegarde !")`,
        exercice: `
**Exercice :**

1. Tracez (0,0), (1,1), (2,4), (3,9), (4,16)
2. Utilisez des carres rouges
3. Ajoutez titre et labels
4. Activez la grille
        `
    },

    coords_ex: {
        title: "Tracer des coordonnees : Exercice",
        theorie: `
## Exercice pratique

### Objectifs :
1. Creer des donnees avec NumPy
2. Tracer plusieurs courbes
3. Personnaliser l'apparence
4. Ajouter une legende

### Fonctions utiles :
np.linspace(0, 10, 100)
np.random.randn(100)

### Couleurs :
'red', 'blue', 'green', 'orange', 'purple'
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

# Donnees
x = np.linspace(0, 2*np.pi, 100)
y_sin = np.sin(x)
y_cos = np.cos(x)

# Figure
plt.figure(figsize=(10, 5))

plt.plot(x, y_sin, 'b-', linewidth=2, label='sin(x)')
plt.plot(x, y_cos, 'r--', linewidth=2, label='cos(x)')

plt.title('Fonctions trigonometriques')
plt.xlabel('x (radians)')
plt.ylabel('y')
plt.legend()
plt.grid(True, alpha=0.3)
plt.axhline(y=0, color='k', linewidth=0.5)

plt.savefig('trigo.png', dpi=150)
plt.show()`,
        exercice: `
**Exercice :**

1. Generez 50 points aleatoires
2. Colorez selon la distance a l'origine
3. Ajoutez un cercle de rayon 1
        `
    },

    lines_1: {
        title: "Tracer des droites Partie 1 : Notation debut/fin",
        theorie: `
## Tracer des droites

### Deux points :
A = (x1, y1)
B = (x2, y2)
plt.plot([x1, x2], [y1, y2])

### Segments multiples (triangle) :
x = [0, 1, 0.5, 0]
y = [0, 0, 0.87, 0]
plt.plot(x, y)

### Lignes de reference :
plt.axhline(y=0)  # Horizontal
plt.axvline(x=0)  # Vertical
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots(figsize=(8, 8))

# Segment AB
A = (1, 2)
B = (4, 5)
ax.plot([A[0], B[0]], [A[1], B[1]], 'b-', linewidth=2)
ax.plot(*A, 'ro', markersize=10, label='A(1,2)')
ax.plot(*B, 'go', markersize=10, label='B(4,5)')

# Triangle
triangle_x = [0, 2, 1, 0]
triangle_y = [0, 0, np.sqrt(3), 0]
ax.plot(triangle_x, triangle_y, 'm-', linewidth=2)
ax.fill(triangle_x, triangle_y, alpha=0.3)

ax.set_title('Segments et triangle')
ax.legend()
ax.grid(True)
ax.set_aspect('equal')
ax.set_xlim(-1, 6)
ax.set_ylim(-1, 6)

plt.savefig('segments.png', dpi=150)
plt.show()`,
        exercice: `
**Exercice :**

1. Tracez un carre (0,0)-(1,0)-(1,1)-(0,1)
2. Tracez les diagonales
3. Colorez l'interieur
        `
    },

    lines_2: {
        title: "Tracer des droites Partie 2 : Forme y = mx + p",
        theorie: `
## Equation d'une droite

y = mx + p

- m : pente
- p : ordonnee a l'origine

### Pente :
m > 0 : croissante
m < 0 : decroissante
m = 0 : horizontale

### Entre deux points :
m = (y2 - y1) / (x2 - x1)

### Tracer :
x = np.linspace(-5, 5, 100)
y = m * x + p
plt.plot(x, y)
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-3, 3, 100)

plt.figure(figsize=(10, 6))

# Differentes pentes
pentes = [-2, -1, 0, 1, 2]
for m in pentes:
    y = m * x
    plt.plot(x, y, linewidth=2, label=f'm = {m}')

plt.axhline(y=0, color='k', linewidth=1)
plt.axvline(x=0, color='k', linewidth=1)
plt.title('Droites avec differentes pentes')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True, alpha=0.3)
plt.xlim(-3, 3)
plt.ylim(-4, 4)

plt.savefig('droites.png', dpi=150)
plt.show()

# Calcul de pente
A = (1, 2)
B = (4, 8)
m = (B[1] - A[1]) / (B[0] - A[0])
print(f"Pente entre A{A} et B{B} : m = {m}")`,
        exercice: `
**Exercice :**

1. Tracez y = -2x + 3
2. Trouvez l'equation passant par (1,1) et (3,5)
3. Ou coupe-t-elle l'axe x ?
        `
    },

    sympy_plot: {
        title: "Tracer avec Sympy",
        theorie: `
## Tracer avec Sympy

from sympy import symbols, plot
x = symbols('x')
plot(x**2)  # Parabole

### Plusieurs courbes :
plot(sin(x), cos(x), (x, -pi, pi))

### Options :
plot(x**2, 
     xlim=(-5, 5),
     title='Parabole',
     line_color='red')

### Courbes parametriques :
from sympy import plot_parametric
plot_parametric(cos(t), sin(t))
        `,
        code: `import sympy as sp
import matplotlib.pyplot as plt
import numpy as np

x = sp.Symbol('x')

# Fonction Sympy
f = x**3 - 3*x + 1

# Convertir en fonction numerique
f_num = sp.lambdify(x, f, 'numpy')

# Valeurs
x_vals = np.linspace(-2, 2, 200)
y_vals = f_num(x_vals)

# Tracer
plt.figure(figsize=(8, 6))
plt.plot(x_vals, y_vals, 'b-', linewidth=2)
plt.axhline(y=0, color='k', linewidth=0.5)
plt.axvline(x=0, color='k', linewidth=0.5)
plt.title(f'f(x) = {f}')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True, alpha=0.3)

# Racines
racines = sp.solve(f, x)
for r in racines:
    r_num = float(r.evalf())
    plt.plot(r_num, 0, 'ro', markersize=10)

plt.savefig('sympy_plot.png', dpi=150)
plt.show()
print(f"Racines : {racines}")`,
        exercice: `
**Exercice :**

1. Tracez x^3 - x sur [-2, 2]
2. Trouvez les racines
3. Tracez la derivee sur le meme graphique
        `
    }
};
