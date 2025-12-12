// MODULE 5 & 6 - SUITE
export const modules56SuiteContent = {
    // MODULE 5: ALGEBRE 1 (suite)
    properties: {
        title: "Proprietes associative, commutative, distributive",
        theorie: `
## Proprietes fondamentales des operations

### Commutativite
$a + b = b + a$ et $a \\times b = b \\times a$

### Associativite
$(a + b) + c = a + (b + c)$

### Distributivite
$a \\times (b + c) = a \\times b + a \\times c$
        `,
        code: `import sympy as sp
a, b, c = sp.symbols('a b c')

print("=== Commutativite ===")
print(f"a + b = {a + b}")
print(f"b + a = {b + a}")
print(f"Egal ? {sp.simplify((a+b) - (b+a)) == 0}")

print("\\n=== Distributivite ===")
expr = a * (b + c)
print(f"a*(b+c) = {sp.expand(expr)}")`,
        exercice: `Verifiez avec Sympy que $(a+b)^2 = a^2 + 2ab + b^2$`
    },

    lists_more: {
        title: "Travailler avec les listes Python",
        theorie: `
## Listes Python

### Creation
\`\`\`python
liste = [1, 2, 3, 4, 5]
\`\`\`

### Methodes utiles
- append(), insert(), remove(), pop()
- sort(), reverse(), index(), count()
        `,
        code: `# Listes Python
liste = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"Liste : {liste}")
print(f"Longueur : {len(liste)}")

liste.sort()
print(f"Triee : {liste}")

liste.append(10)
print(f"Avec 10 : {liste}")`,
        exercice: `Creez une liste des 10 premiers carres parfaits.`
    },

    slicing: {
        title: "Le slicing en Python",
        theorie: `
## Slicing : extraire des sous-sequences

\`liste[debut:fin:pas]\`

- debut : index de depart (inclus)
- fin : index de fin (exclu)
- pas : increment
        `,
        code: `texte = "Python"
print(f"texte[0:3] = {texte[0:3]}")   # Pyt
print(f"texte[::2] = {texte[::2]}")    # Pto
print(f"texte[::-1] = {texte[::-1]}")  # nohtyP

nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(f"Pairs : {nombres[::2]}")
print(f"3 derniers : {nombres[-3:]}")`,
        exercice: `Extrayez les elements d'index pair d'une liste.`
    },

    gcd: {
        title: "Plus Grand Commun Diviseur (PGCD)",
        theorie: `
## PGCD avec Python

Le PGCD de deux nombres est le plus grand entier qui les divise tous les deux.

### Algorithme d'Euclide
$\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$
        `,
        code: `import math
import sympy as sp

print(f"PGCD(48, 18) = {math.gcd(48, 18)}")
print(f"PGCD(252, 105) = {math.gcd(252, 105)}")

# Avec Sympy
print(f"sp.gcd(48, 18) = {sp.gcd(48, 18)}")

# PPCM
print(f"PPCM(12, 18) = {math.lcm(12, 18)}")`,
        exercice: `Calculez le PGCD de 1071 et 462.`
    },

    gcd_ex: {
        title: "PGCD : Exercices",
        theorie: `## Applications du PGCD

- Simplification de fractions
- Problemes de pavage
- Cryptographie (RSA)
        `,
        code: `import math

def simplifier_fraction(num, den):
    g = math.gcd(num, den)
    return num // g, den // g

num, den = 48, 64
n, d = simplifier_fraction(num, den)
print(f"{num}/{den} = {n}/{d}")`,
        exercice: `Simplifiez la fraction 144/360.`
    },

    dictionaries: {
        title: "Introduction aux dictionnaires Python",
        theorie: `
## Dictionnaires

Collection de paires cle-valeur.

\`\`\`python
d = {"nom": "Euler", "annee": 1707}
d["nom"]  # "Euler"
\`\`\`
        `,
        code: `# Dictionnaire
math_const = {
    "pi": 3.14159,
    "e": 2.71828,
    "phi": 1.61803
}

print(f"pi = {math_const['pi']}")
print(f"Cles : {list(math_const.keys())}")

for nom, val in math_const.items():
    print(f"{nom} = {val}")`,
        exercice: `Creez un dictionnaire des 5 premiers nombres premiers.`
    },

    prime_factor: {
        title: "Decomposition en facteurs premiers",
        theorie: `
## Factorisation

Tout entier > 1 s'ecrit comme produit de nombres premiers.

$60 = 2^2 \\times 3 \\times 5$
        `,
        code: `import sympy as sp

n = 360
facteurs = sp.factorint(n)
print(f"Factorisation de {n} :")
print(facteurs)

# Verification
produit = 1
for p, exp in facteurs.items():
    produit *= p ** exp
    print(f"{p}^{exp} = {p**exp}")
print(f"Produit = {produit}")`,
        exercice: `Decomposez 2520 en facteurs premiers.`
    },

    inequalities_solve: {
        title: "Resoudre des inequations",
        theorie: `
## Inequations avec Sympy

\`\`\`python
sp.solve(x**2 - 4 > 0, x)
\`\`\`
        `,
        code: `import sympy as sp
x = sp.Symbol('x')

# x^2 - 4 > 0
sol = sp.solve(x**2 - 4 > 0, x)
print(f"x^2 - 4 > 0 : {sol}")

# 2x + 1 < 5
sol2 = sp.solve(2*x + 1 < 5, x)
print(f"2x + 1 < 5 : {sol2}")`,
        exercice: `Resolvez $x^2 - 5x + 6 < 0$`
    },

    poly_add: {
        title: "Ajouter des polynomes",
        theorie: `## Addition de polynomes

$(x^2 + 2x + 1) + (x^2 - 1) = 2x^2 + 2x$
        `,
        code: `import sympy as sp
x = sp.Symbol('x')

p1 = x**2 + 2*x + 1
p2 = x**2 - 1
somme = p1 + p2
print(f"({p1}) + ({p2}) = {sp.expand(somme)}")`,
        exercice: `Additionnez $3x^2 - 2x + 5$ et $x^2 + 4x - 3$`
    },

    poly_mult: {
        title: "Multiplier des polynomes",
        theorie: `## Multiplication de polynomes

$(x + 1)(x - 1) = x^2 - 1$
        `,
        code: `import sympy as sp
x = sp.Symbol('x')

p1 = x + 2
p2 = x - 3
produit = sp.expand(p1 * p2)
print(f"({p1})({p2}) = {produit}")`,
        exercice: `Developpez $(x + 1)(x + 2)(x + 3)$`
    },

    poly_div: {
        title: "Diviser des polynomes",
        theorie: `## Division de polynomes

\`\`\`python
sp.div(dividende, diviseur, x)
\`\`\`
        `,
        code: `import sympy as sp
x = sp.Symbol('x')

dividende = x**3 - 2*x**2 + x - 2
diviseur = x - 2

quotient, reste = sp.div(dividende, diviseur, x)
print(f"Quotient : {quotient}")
print(f"Reste : {reste}")`,
        exercice: `Divisez $x^4 - 1$ par $x - 1$`
    },

    factoring: {
        title: "Factoriser des polynomes",
        theorie: `## Factorisation avec Sympy

\`\`\`python
sp.factor(x**2 - 4)  # (x-2)(x+2)
\`\`\`
        `,
        code: `import sympy as sp
x = sp.Symbol('x')

expressions = [x**2 - 4, x**2 + 2*x + 1, x**3 - 1]
for expr in expressions:
    print(f"{expr} = {sp.factor(expr)}")`,
        exercice: `Factorisez $x^4 - 16$`
    },

    alg1_bug: {
        title: "Chasse aux bugs Algebre 1 !",
        theorie: `## Erreurs courantes

1. Oublier expand() ou factor()
2. Confusion entre = et ==
3. Symboles non definis
        `,
        code: `import sympy as sp
x = sp.Symbol('x')

# Bug : simplify vs expand
expr = (x + 1)**2
print(f"Sans expand : {expr}")
print(f"Avec expand : {sp.expand(expr)}")`,
        exercice: `Corrigez : \`sp.solve(x^2 - 4)\``
    },

    // MODULE 6: GRAPHIQUES (suite)
    rational: {
        title: "Tracer des fonctions rationnelles",
        theorie: `## Fonctions rationnelles

$f(x) = \\frac{P(x)}{Q(x)}$

Attention aux asymptotes !
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 1000)
y = 1 / (x**2 - 1)
y[np.abs(y) > 10] = np.nan

plt.plot(x, y)
plt.axhline(0, color='k')
plt.axvline(-1, color='r', linestyle='--')
plt.axvline(1, color='r', linestyle='--')
plt.title('f(x) = 1/(x^2-1)')
plt.ylim(-5, 5)
plt.grid()
plt.show()`,
        exercice: `Tracez $f(x) = \\frac{x}{x^2 + 1}$`
    },

    sympy_plot_ex: {
        title: "Tracer avec Sympy : Exercices",
        theorie: `## Exercices de tracage`,
        code: `import sympy as sp
x = sp.Symbol('x')
sp.plot(sp.sin(x), sp.cos(x), (x, -2*sp.pi, 2*sp.pi))`,
        exercice: `Tracez $\\sin(x)$, $\\cos(x)$ et $\\tan(x)$ sur $[-\\pi, \\pi]$`
    },

    accountability: {
        title: "Auto-discipline en apprentissage en ligne",
        theorie: `## Conseils

1. Fixez des objectifs quotidiens
2. Pratiquez regulierement
3. Testez votre code
4. Prenez des notes
        `,
        code: `# Tracez votre progression !
import matplotlib.pyplot as plt

jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven']
heures = [2, 1.5, 3, 2.5, 1]

plt.bar(jours, heures, color='purple')
plt.ylabel('Heures')
plt.title('Temps de pratique')
plt.show()`,
        exercice: `Creez votre propre graphique de progression.`
    },

    matrix_images: {
        title: "Creer des images a partir de matrices",
        theorie: `## Images = Matrices

Une image en niveaux de gris est une matrice 2D.
\`\`\`python
plt.imshow(matrice, cmap='gray')
\`\`\`
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# Damier
n = 8
damier = np.zeros((n, n))
damier[1::2, ::2] = 1
damier[::2, 1::2] = 1

plt.imshow(damier, cmap='gray')
plt.title('Damier')
plt.show()`,
        exercice: `Creez une image de degrade horizontal.`
    },

    matrix_img_ex: {
        title: "Images matricielles : Exercice",
        theorie: `## Manipuler des images`,
        code: `import numpy as np
import matplotlib.pyplot as plt

img = np.random.rand(100, 100)
plt.imshow(img, cmap='viridis')
plt.colorbar()
plt.show()`,
        exercice: `Creez une image avec un cercle au centre.`
    },

    polygons: {
        title: "Dessiner des polygones",
        theorie: `## Polygones avec Matplotlib

\`\`\`python
from matplotlib.patches import Polygon
\`\`\`
        `,
        code: `import matplotlib.pyplot as plt
from matplotlib.patches import Polygon
import numpy as np

fig, ax = plt.subplots()

# Triangle
triangle = Polygon([(0, 0), (1, 0), (0.5, 0.87)], 
                   facecolor='blue', alpha=0.5)
ax.add_patch(triangle)

ax.set_xlim(-0.5, 1.5)
ax.set_ylim(-0.5, 1.5)
ax.set_aspect('equal')
plt.show()`,
        exercice: `Dessinez un hexagone regulier.`
    },

    export_img: {
        title: "Exporter des graphiques en images",
        theorie: `## Sauvegarder des figures

\`\`\`python
plt.savefig('figure.png', dpi=150)
\`\`\`
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
plt.plot(x, np.sin(x))
plt.title('Sinus')

plt.savefig('sinus.png', dpi=150, bbox_inches='tight')
print("Image sauvegardee !")`,
        exercice: `Creez et exportez un graphique en PDF.`
    },

    graph_bug: {
        title: "Chasse aux bugs Graphiques !",
        theorie: `## Erreurs courantes

1. Oublier plt.show()
2. plt.plot sans donnees
3. Mauvais ordre des arguments
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

# Bug : x et y de tailles differentes
x = np.linspace(0, 10, 100)
y = np.sin(x)  # Meme taille !

plt.plot(x, y)
plt.show()`,
        exercice: `Corrigez : \`plt.plot(y, x)\` au lieu de \`plt.plot(x, y)\``
    }
};
