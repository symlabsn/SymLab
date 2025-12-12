// MODULE 6 : GRAPHIQUES (Focus Sympy)
export const module6SympyContent = {
    coords: {
        title: "Tracer des points dans un repère",
        theorie: `
## Tracer avec Sympy

\`\`\`python
from sympy import plot, symbols
from sympy.plotting import plot

x = symbols('x')
plot(x**2)  # Trace y = x²
\`\`\`

Sympy peut tracer directement des expressions symboliques !
        `,
        code: `import sympy as sp
from sympy import symbols, sin, cos, pi, sqrt
from sympy.plotting import plot

x = symbols('x')

print("=== Tracé avec Sympy ===")

# Fonction simple
f = x**2
print(f"f(x) = {f}")

# Évaluation en des points
points_x = [-2, -1, 0, 1, 2]
print("\\nTable de valeurs :")
for px in points_x:
    print(f"  f({px}) = {f.subs(x, px)}")

# Avec Sympy plot (console)
# p = plot(f, (x, -3, 3), show=False)
# p.show()

# Conversion pour matplotlib
from sympy import lambdify
import numpy as np

f_num = lambdify(x, f, 'numpy')
x_vals = np.linspace(-3, 3, 100)
y_vals = f_num(x_vals)

print(f"\\nPour matplotlib : f_num = lambdify(x, {f}, 'numpy')")`,
        exercice: `Tracez $f(x) = x^3 - 3x$ et identifiez les racines visuellement.`
    },

    coords_ex: {
        title: "Tracer des coordonnées : Exercice",
        theorie: `
## Plusieurs courbes

\`\`\`python
plot(sin(x), cos(x), (x, -pi, pi))
\`\`\`

Sympy gère plusieurs fonctions automatiquement.
        `,
        code: `import sympy as sp
from sympy import symbols, sin, cos, pi, tan, lambdify

x = symbols('x')

print("=== Fonctions trigonométriques ===")

# Définition symbolique
f1 = sin(x)
f2 = cos(x)
f3 = tan(x)

print(f"f₁(x) = {f1}")
print(f"f₂(x) = {f2}")
print(f"f₃(x) = {f3}")

# Valeurs exactes
print("\\n=== Valeurs exactes ===")
angles = [0, pi/6, pi/4, pi/3, pi/2]
for a in angles:
    print(f"  sin({a}) = {sin(a)}")
    print(f"  cos({a}) = {cos(a)}")
    print()

# Pour tracer avec matplotlib
print("=== Pour matplotlib ===")
print("f1_num = lambdify(x, sin(x), 'numpy')")
print("x_vals = np.linspace(-pi, pi, 100)")
print("plt.plot(x_vals, f1_num(x_vals))")`,
        exercice: `Tracez $\\sin(x)$, $\\sin(2x)$, $\\sin(3x)$ sur $[0, 2\\pi]$.`
    },

    lines_1: {
        title: "Tracer des droites Partie 1 : Notation début/fin",
        theorie: `
## Droites avec Sympy

\`\`\`python
from sympy.geometry import Point, Line

l = Line(Point(0, 0), Point(1, 1))
l.slope      # Pente
l.equation() # Équation
\`\`\`
        `,
        code: `import sympy as sp
from sympy.geometry import Point, Line, Segment
from sympy import symbols, Rational

print("=== Géométrie avec Sympy ===")

# Deux points
A = Point(0, 0)
B = Point(3, 4)
print(f"A = {A}")
print(f"B = {B}")

# Droite passant par A et B
droite = Line(A, B)
print(f"\\nDroite AB :")
print(f"  Pente = {droite.slope}")
print(f"  Équation : {droite.equation()}")

# Segment
seg = Segment(A, B)
print(f"\\nSegment AB :")
print(f"  Longueur = {seg.length}")
print(f"  Milieu = {seg.midpoint}")

# Triangle
C = Point(3, 0)
triangle = [A, B, C]
print(f"\\nTriangle A, B, C :")
for i, (P1, P2) in enumerate([(A,B), (B,C), (C,A)]):
    print(f"  Côté {i+1} : longueur = {Segment(P1, P2).length}")`,
        exercice: `Créez le triangle (0,0), (4,0), (2,3) et calculez son périmètre.`
    },

    lines_2: {
        title: "Tracer des droites Partie 2 : Forme y = mx + p",
        theorie: `
## Équation de droite avec Sympy

\`\`\`python
from sympy.geometry import Line
from sympy import symbols

# y = mx + p → coefficients
l = Line(Point(0, p), slope=m)
\`\`\`
        `,
        code: `import sympy as sp
from sympy.geometry import Point, Line
from sympy import symbols, solve, Eq

x, y, m, p = symbols('x y m p', real=True)

print("=== Équation y = mx + p ===")

# Droite de pente m passant par (0, p)
droite = Line(Point(0, 2), slope=sp.Rational(3, 2))
print(f"Droite de pente 3/2, ordonnée à l'origine 2 :")
print(f"  Équation : {droite.equation()}")

# Trouver m et p passant par deux points
print("\\n=== Trouver l'équation ===")
A = Point(1, 2)
B = Point(4, 8)
droite_AB = Line(A, B)
m_val = droite_AB.slope
print(f"Points : A{A}, B{B}")
print(f"Pente m = {m_val}")

# y - y1 = m(x - x1)
eq = y - 2 - m_val * (x - 1)
print(f"Équation : {sp.expand(eq)} = 0")

# Intersection de deux droites
print("\\n=== Intersection ===")
l1 = Line(Point(0, 0), slope=1)
l2 = Line(Point(0, 2), slope=-1)
inter = l1.intersection(l2)
print(f"Droite 1 : y = x")
print(f"Droite 2 : y = -x + 2")
print(f"Intersection : {inter}")`,
        exercice: `Trouvez l'intersection de $y = 2x + 1$ et $y = -x + 7$.`
    },

    rational: {
        title: "Tracer des fonctions rationnelles",
        theorie: `
## Fonctions rationnelles avec Sympy

\`\`\`python
f = 1 / (x**2 - 1)
asymptotes = solve(denom, x)
\`\`\`

Sympy trouve les asymptotes automatiquement.
        `,
        code: `import sympy as sp
from sympy import symbols, limit, oo, apart, simplify, denom, numer

x = symbols('x')

print("=== Fonction rationnelle ===")

f = 1 / (x**2 - 1)
print(f"f(x) = {f}")

# Asymptotes verticales : dénominateur = 0
denominateur = x**2 - 1
asymp_vert = sp.solve(denominateur, x)
print(f"\\nAsymptotes verticales : x = {asymp_vert}")

# Asymptote horizontale : limite à l'infini
asymp_horiz = limit(f, x, oo)
print(f"Asymptote horizontale : y = {asymp_horiz}")

# Décomposition en éléments simples
print(f"\\n=== Fractions partielles ===")
decomp = apart(f, x)
print(f"1/(x²-1) = {decomp}")

# Exemple plus complexe
g = (x**2 + 1) / (x**2 - 4)
print(f"\\n=== g(x) = {g} ===")
print(f"Numérateur : {numer(g)}")
print(f"Dénominateur : {denom(g)}")
print(f"Limite x→∞ : {limit(g, x, oo)}")
print(f"Fractions partielles : {apart(g, x)}")`,
        exercice: `Trouvez toutes les asymptotes de $f(x) = \\frac{x^2}{x^2 - 4}$.`
    },

    sympy_plot: {
        title: "Tracer avec Sympy",
        theorie: `
## plot() de Sympy

\`\`\`python
from sympy.plotting import plot, plot_parametric, plot3d

plot(expr, (x, a, b))
plot_parametric((x(t), y(t)), (t, a, b))
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, sin, cos, exp, pi, lambdify
from sympy.plotting import plot

x, t = symbols('x t')

print("=== Tracé symbolique avec Sympy ===")

# Fonction à tracer
f = sin(x) * exp(-x/5)
print(f"f(x) = {f}")

# Dérivée
fp = sp.diff(f, x)
print(f"f'(x) = {fp}")

# Points critiques
critiques = sp.solve(fp, x)
print(f"\\nPoints critiques : {critiques[:3]}...")

# Pour tracer
print("\\n=== Code de tracé ===")
print("p = plot(f, (x, 0, 10), show=False)")
print("p.extend(plot(fp, (x, 0, 10), show=False))")
print("p.show()")

# Courbe paramétrique
print("\\n=== Courbe paramétrique ===")
x_t = cos(t)
y_t = sin(t)
print(f"x(t) = {x_t}")
print(f"y(t) = {y_t}")
print("→ Cercle unité")`,
        exercice: `Tracez $f(x) = \\frac{\\sin(x)}{x}$ et sa dérivée sur $[-10, 10]$.`
    },

    sympy_plot_ex: {
        title: "Tracer avec Sympy : Exercices",
        theorie: `
## Options de tracé

\`\`\`python
plot(f, (x, a, b),
     title='Titre',
     xlabel='x',
     ylabel='y',
     line_color='red')
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, sin, cos, tan, pi, sqrt

x = symbols('x')

print("=== Exercices de tracé ===")

# Fonctions à tracer
fonctions = {
    'Parabole': x**2,
    'Cubique': x**3 - 3*x,
    'Sinus': sin(x),
    'Exponentielle': sp.exp(-x**2),
}

for nom, f in fonctions.items():
    print(f"\\n{nom} : f(x) = {f}")
    print(f"  Dérivée : f'(x) = {sp.diff(f, x)}")
    if nom != 'Exponentielle':
        racines = sp.solve(f, x)
        print(f"  Racines : {racines[:3] if len(racines) > 3 else racines}")

# Courbes de Lissajous
print("\\n=== Courbes de Lissajous ===")
t = symbols('t')
for a, b in [(1, 2), (2, 3), (3, 4)]:
    print(f"a={a}, b={b} : x = cos({a}t), y = sin({b}t)")`,
        exercice: `Tracez $y = \\tan(x)$ sur $(-\\pi/2, \\pi/2)$ avec les asymptotes.`
    },

    polygons: {
        title: "Dessiner des polygones",
        theorie: `
## Polygones avec Sympy.geometry

\`\`\`python
from sympy.geometry import Polygon, Triangle, RegularPolygon

tri = Triangle(Point(0,0), Point(1,0), Point(0,1))
tri.area
tri.perimeter
\`\`\`
        `,
        code: `import sympy as sp
from sympy.geometry import Point, Polygon, Triangle, RegularPolygon
from sympy import sqrt, pi, cos, sin

print("=== Polygones avec Sympy ===")

# Triangle
A, B, C = Point(0, 0), Point(4, 0), Point(2, 3)
tri = Triangle(A, B, C)
print(f"Triangle ABC :")
print(f"  Aire = {tri.area}")
print(f"  Périmètre = {tri.perimeter}")
print(f"  Centre de gravité = {tri.centroid}")

# Polygone régulier
print("\\n=== Hexagone régulier ===")
hexa = RegularPolygon(Point(0, 0), 1, 6)
print(f"Centre : {hexa.center}")
print(f"Rayon : {hexa.radius}")
print(f"Aire = {hexa.area}")
print(f"Périmètre = {hexa.perimeter}")

# Sommets
print("Sommets :")
for i, v in enumerate(hexa.vertices):
    print(f"  V{i} = ({sp.simplify(v.x)}, {sp.simplify(v.y)})")`,
        exercice: `Calculez l'aire d'un octogone régulier de rayon 2.`
    },

    graph_bug: {
        title: "Chasse aux bugs Graphiques !",
        theorie: `
## Erreurs courantes

1. Oublier \`lambdify\` pour numpy
2. Division par zéro aux asymptotes
3. Domaine de définition
        `,
        code: `import sympy as sp
from sympy import symbols, sin, sqrt, lambdify, Abs

x = symbols('x')

print("=== Bug 1 : lambdify ===")
f = sin(x)**2
print(f"f(x) = {f}")
print("f.subs(x, 1.5) = float, pas array !")
print("Utiliser : f_num = lambdify(x, f, 'numpy')")

print("\\n=== Bug 2 : Domaine ===")
g = sqrt(x)
print(f"g(x) = {g}")
print("g(-1) → Erreur ! Utiliser x >= 0")

h = 1/x
print(f"\\nh(x) = {h}")
print("h(0) → Division par zéro !")

print("\\n=== Bug 3 : Valeurs complexes ===")
from sympy import sqrt as sp_sqrt
print(f"sqrt(-1) avec Sympy = {sp_sqrt(-1)}")
print("Avec numpy : erreur ou nan")

print("\\n=== Solution : vérifier le domaine ===")
f = sqrt(4 - x**2)
domaine = sp.solve([4 - x**2 >= 0], x)
print(f"f(x) = {f}")
print(f"Domaine : {domaine}")`,
        exercice: `Pourquoi $\\sqrt{x^2}$ n'est pas toujours égal à $x$ ?`
    }
};
