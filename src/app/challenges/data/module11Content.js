// MODULE 11 : CALCUL INFINITESIMAL (Focus Sympy)
export const module11Content = {
    proofs_intuition: {
        title: "Preuves mathématiques vs Intuition",
        theorie: `
## Sympy : Votre assistant de démonstration

Sympy permet de vérifier rigoureusement des résultats mathématiques.

### Fonctions clés
- \`simplify()\` : Simplifie une expression
- \`expand()\` : Développe
- \`factor()\` : Factorise
- \`Eq()\` : Crée une équation

### Pourquoi Sympy ?
- Calcul **exact** (pas d'erreurs d'arrondi)
- Manipulation **symbolique**
- Génération de **LaTeX**
        `,
        code: `import sympy as sp
from sympy import symbols, simplify, expand, Eq, sqrt, Rational

x, a, b = symbols('x a b')

print("=== Sympy : Vérification rigoureuse ===")

# Identité remarquable
expr1 = (a + b)**2
expr2 = a**2 + 2*a*b + b**2
print(f"(a+b)² = {expand(expr1)}")
print(f"Égal à a²+2ab+b² ? {simplify(expr1 - expr2) == 0}")

# Calcul exact vs approximatif
print(f"\\n=== Calcul exact ===")
print(f"√2 exact : {sqrt(2)}")
print(f"√2 approx : {float(sqrt(2))}")
print(f"(√2)² = {simplify(sqrt(2)**2)}")

# Fractions exactes
print(f"\\n1/3 + 1/6 = {Rational(1,3) + Rational(1,6)}")

# Générer du LaTeX
print(f"\\nLaTeX : {sp.latex(expr1)}")`,
        exercice: `Vérifiez avec Sympy que $(a-b)(a+b) = a^2 - b^2$`
    },

    limits: {
        title: "Calculer des limites",
        theorie: `
## Limites avec Sympy

\`\`\`python
from sympy import limit, oo

limit(f, x, a)      # lim x→a f(x)
limit(f, x, oo)     # lim x→∞ f(x)
limit(f, x, a, '+') # limite à droite
limit(f, x, a, '-') # limite à gauche
\`\`\`

### Formes indéterminées
Sympy gère automatiquement :
- $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$
- $0 \\cdot \\infty$, $\\infty - \\infty$
- $1^\\infty$, $0^0$, $\\infty^0$
        `,
        code: `import sympy as sp
from sympy import limit, oo, sin, cos, exp, log, symbols

x = symbols('x')

print("=== Limites avec Sympy ===")

# Limite en un point
print(f"lim(sin(x)/x, x→0) = {limit(sin(x)/x, x, 0)}")

# Limite à l'infini
print(f"lim(1/x, x→∞) = {limit(1/x, x, oo)}")
print(f"lim(e^x, x→-∞) = {limit(exp(x), x, -oo)}")

# Formes indéterminées
print(f"\\n=== Formes indéterminées ===")
print(f"lim((1+1/x)^x, x→∞) = {limit((1+1/x)**x, x, oo)}")
print(f"lim((e^x - 1)/x, x→0) = {limit((exp(x)-1)/x, x, 0)}")
print(f"lim(x*ln(x), x→0⁺) = {limit(x*log(x), x, 0, '+')}")

# Limites latérales
print(f"\\n=== Limites latérales ===")
f = 1/x
print(f"lim(1/x, x→0⁺) = {limit(f, x, 0, '+')}")
print(f"lim(1/x, x→0⁻) = {limit(f, x, 0, '-')}")`,
        exercice: `Calculez $\\lim_{x \\to 0} \\frac{\\tan(x)}{x}$ avec Sympy.`
    },

    limits_ex: {
        title: "Limites : Exercice",
        theorie: `## Limites célèbres

| Limite | Résultat |
|--------|----------|
| $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ | 1 |
| $\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x$ | $e$ |
| $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ | 1 |
        `,
        code: `import sympy as sp
from sympy import limit, oo, sin, cos, tan, exp, log, symbols, E

x, n = symbols('x n')

# Vérification des limites célèbres
limites = [
    (sin(x)/x, x, 0, "sin(x)/x → 0"),
    ((1 + 1/x)**x, x, oo, "(1+1/x)^x → ∞"),
    ((exp(x) - 1)/x, x, 0, "(e^x-1)/x → 0"),
    (log(x)/x, x, oo, "ln(x)/x → ∞"),
    (x**x, x, 0, "x^x → 0⁺ (par la droite)"),
]

print("=== Vérification des limites célèbres ===")
for expr, var, point, desc in limites:
    try:
        result = limit(expr, var, point, '+') if point == 0 else limit(expr, var, point)
        print(f"lim({desc}) = {result}")
    except:
        print(f"lim({desc}) = limite spéciale")

# Définition de e
print(f"\\n=== Définition de e ===")
print(f"e = lim(1 + 1/n)^n = {limit((1 + 1/n)**n, n, oo)}")
print(f"Valeur numérique : {float(E)}")`,
        exercice: `Vérifiez que $\\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = 2x$`
    },

    piecewise: {
        title: "Fonctions par morceaux",
        theorie: `
## Fonctions par morceaux avec Sympy

\`\`\`python
from sympy import Piecewise

f = Piecewise(
    (expr1, condition1),
    (expr2, condition2),
    (expr3, True)  # sinon
)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import Piecewise, symbols, Abs, sign, floor, ceiling
from sympy.plotting import plot

x = symbols('x')

# Valeur absolue
abs_x = Piecewise((-x, x < 0), (x, True))
print(f"|x| par morceaux : {abs_x}")
print(f"|−3| = {abs_x.subs(x, -3)}")

# Fonction signe
signe = Piecewise((-1, x < 0), (0, sp.Eq(x, 0)), (1, True))
print(f"\\nsigne(x) : {signe}")

# Fonction échelon (Heaviside)
H = Piecewise((0, x < 0), (1, True))
print(f"\\nHeaviside : {H}")

# Intégrale d'une fonction par morceaux
f = Piecewise((x**2, x < 1), (2*x - 1, True))
integral = sp.integrate(f, (x, 0, 2))
print(f"\\n∫₀² f(x) dx = {integral}")

# Tracé
p = plot(f, (x, -2, 3), show=False, title='Fonction par morceaux')
p.show()`,
        exercice: `Créez la fonction $f(x) = \\begin{cases} x^2 & x < 0 \\\\ \\sqrt{x} & x \\geq 0 \\end{cases}$`
    },

    deriv_poly: {
        title: "Dérivées de polynômes",
        theorie: `
## Dérivation avec Sympy

\`\`\`python
from sympy import diff

diff(f, x)       # Dérivée première
diff(f, x, 2)    # Dérivée seconde
diff(f, x, n)    # Dérivée n-ième
\`\`\`

### Règles (vérifiées par Sympy)
- $(x^n)' = nx^{n-1}$
- $(cf)' = cf'$
- $(f+g)' = f' + g'$
        `,
        code: `import sympy as sp
from sympy import diff, symbols, Derivative, latex

x, n = symbols('x n')

print("=== Dérivées de polynômes ===")

# Dérivées basiques
polys = [x**2, x**3, x**4 - 3*x**2 + 2*x - 5]
for p in polys:
    print(f"d/dx({p}) = {diff(p, x)}")

# Dérivée n-ième
print(f"\\n=== Dérivée n-ième ===")
f = x**5
for i in range(6):
    print(f"f^({i})(x) = {diff(f, x, i)}")

# Formule générale
print(f"\\n=== Formule générale ===")
print(f"d/dx(x^n) = {diff(x**n, x)}")

# Dérivée non évaluée (pour affichage)
print(f"\\n=== Notation Leibniz ===")
deriv = Derivative(x**3 + 2*x, x)
print(f"{deriv} = {deriv.doit()}")

# LaTeX
print(f"\\nLaTeX : {latex(deriv)} = {latex(deriv.doit())}")`,
        exercice: `Trouvez la dérivée 10ème de $x^{12}$ avec Sympy.`
    },

    deriv_poly_ex: {
        title: "Dérivées de polynômes : Exercice",
        theorie: `## Règles de dérivation

Sympy applique automatiquement :
- Règle du produit : $(fg)' = f'g + fg'$
- Règle du quotient : $(f/g)' = \\frac{f'g - fg'}{g^2}$
- Règle de la chaîne : $(f \\circ g)' = (f' \\circ g) \\cdot g'$
        `,
        code: `import sympy as sp
from sympy import diff, symbols, simplify, expand

x = symbols('x')

print("=== Règle du produit ===")
f, g = x**2, x**3
produit = f * g
print(f"(x² · x³)' = {diff(produit, x)}")
print(f"Via règle : f'g + fg' = {diff(f,x)*g + f*diff(g,x)}")

print("\\n=== Règle du quotient ===")
quotient = f / g
print(f"(x²/x³)' = {simplify(diff(quotient, x))}")

print("\\n=== Règle de la chaîne ===")
h = (x**2 + 1)**5
print(f"d/dx[(x²+1)⁵] = {diff(h, x)}")
print(f"Factorisé : {sp.factor(diff(h, x))}")

print("\\n=== Dérivées multiples ===")
f = x**4 - 4*x**3 + 6*x**2 - 4*x + 1
print(f"f(x) = {f}")
for i in range(5):
    print(f"f^({i})(x) = {diff(f, x, i)}")`,
        exercice: `Calculez $(x^2 \\cdot e^x)'$ avec Sympy et vérifiez la règle du produit.`
    },

    deriv_trig: {
        title: "Dérivées de fonctions trigonométriques",
        theorie: `
## Dérivées trigo avec Sympy

| Fonction | Dérivée |
|----------|---------|
| $\\sin(x)$ | $\\cos(x)$ |
| $\\cos(x)$ | $-\\sin(x)$ |
| $\\tan(x)$ | $\\sec^2(x) = 1 + \\tan^2(x)$ |
        `,
        code: `import sympy as sp
from sympy import diff, sin, cos, tan, sec, csc, cot, symbols, simplify

x = symbols('x')

print("=== Dérivées trigonométriques ===")

trigo = [sin(x), cos(x), tan(x), sec(x), csc(x), cot(x)]
for f in trigo:
    print(f"d/dx[{f}] = {simplify(diff(f, x))}")

print("\\n=== Compositions ===")
print(f"d/dx[sin(x²)] = {diff(sin(x**2), x)}")
print(f"d/dx[cos(3x)] = {diff(cos(3*x), x)}")
print(f"d/dx[tan(x)²] = {simplify(diff(tan(x)**2, x))}")

print("\\n=== Vérification identité ===")
# (sin² + cos²)' = 0
identite = sin(x)**2 + cos(x)**2
print(f"d/dx[sin²x + cos²x] = {diff(identite, x)}")`,
        exercice: `Calculez la dérivée de $\\sin(x)\\cos(x)$ et simplifiez.`
    },

    deriv_trig_ex: {
        title: "Dérivées trigo : Exercice",
        theorie: `## Fonctions hyperboliques

Sympy connaît aussi :
- sinh(x), cosh(x), tanh(x)
- arcsin(x), arccos(x), arctan(x)
        `,
        code: `import sympy as sp
from sympy import diff, sinh, cosh, tanh, asin, acos, atan, symbols, simplify

x = symbols('x')

print("=== Fonctions hyperboliques ===")
hyper = [sinh(x), cosh(x), tanh(x)]
for f in hyper:
    print(f"d/dx[{f}] = {diff(f, x)}")

print("\\n=== Fonctions inverses ===")
inverses = [asin(x), acos(x), atan(x)]
for f in inverses:
    print(f"d/dx[{f}] = {simplify(diff(f, x))}")

print("\\n=== Identité hyperbolique ===")
# cosh² - sinh² = 1
identite = cosh(x)**2 - sinh(x)**2
print(f"cosh²x - sinh²x = {simplify(identite)}")
print(f"d/dx[cosh²x - sinh²x] = {diff(identite, x)}")`,
        exercice: `Vérifiez que $(\\arctan x)' = \\frac{1}{1+x^2}$`
    },

    tangent_line: {
        title: "Tracer une tangente à une courbe",
        theorie: `
## Équation de la tangente

En un point $(a, f(a))$ :
$$y = f(a) + f'(a)(x - a)$$

Avec Sympy, on calcule symboliquement $f'(a)$.
        `,
        code: `import sympy as sp
from sympy import diff, symbols, plot, lambdify
import numpy as np
import matplotlib.pyplot as plt

x, a = symbols('x a')

# Fonction
f = x**3 - 2*x + 1

# Dérivée
fp = diff(f, x)
print(f"f(x) = {f}")
print(f"f'(x) = {fp}")

# Tangente au point a=1
a_val = 1
f_a = f.subs(x, a_val)
fp_a = fp.subs(x, a_val)
tangente = f_a + fp_a * (x - a_val)

print(f"\\nAu point x = {a_val}:")
print(f"f({a_val}) = {f_a}")
print(f"f'({a_val}) = {fp_a}")
print(f"Tangente : y = {sp.expand(tangente)}")

# Tracé
f_num = lambdify(x, f, 'numpy')
t_num = lambdify(x, tangente, 'numpy')

x_vals = np.linspace(-2, 3, 200)
plt.figure(figsize=(10, 6))
plt.plot(x_vals, f_num(x_vals), 'b-', linewidth=2, label='f(x)')
plt.plot(x_vals, t_num(x_vals), 'r--', linewidth=2, label='Tangente')
plt.plot(a_val, float(f_a), 'go', markersize=10)
plt.legend(); plt.grid(); plt.ylim(-5, 10)
plt.title(f'Tangente à f(x) = {f} en x = {a_val}')
plt.show()`,
        exercice: `Trouvez l'équation de la tangente à $y = \\sin(x)$ en $x = \\pi/4$.`
    },

    tangent_ex: {
        title: "Tangentes : Exercice",
        theorie: `## Normale à une courbe

La normale est perpendiculaire à la tangente :
$$y = f(a) - \\frac{1}{f'(a)}(x - a)$$
        `,
        code: `import sympy as sp
from sympy import diff, symbols, Rational

x = symbols('x')

# Trouver où la tangente est horizontale
f = x**3 - 3*x**2 + 2
fp = diff(f, x)

print(f"f(x) = {f}")
print(f"f'(x) = {fp}")

# Tangente horizontale : f'(x) = 0
points = sp.solve(fp, x)
print(f"\\nTangente horizontale en x = {points}")

for p in points:
    print(f"  Point ({p}, {f.subs(x, p)})")

# Équation de la normale
a = 0
f_a = f.subs(x, a)
fp_a = fp.subs(x, a)
if fp_a != 0:
    normale = f_a - (1/fp_a) * (x - a)
    print(f"\\nNormale en x = {a} : y = {normale}")`,
        exercice: `Trouvez les points où $f(x) = x^4 - 4x^3$ a une tangente horizontale.`
    },

    crit_points: {
        title: "Trouver les points critiques",
        theorie: `
## Points critiques avec Sympy

1. Calculer $f'(x)$
2. Résoudre $f'(x) = 0$
3. Tester avec $f''(x)$ :
   - $f''(c) > 0$ → minimum local
   - $f''(c) < 0$ → maximum local
   - $f''(c) = 0$ → test inconclusif
        `,
        code: `import sympy as sp
from sympy import diff, solve, symbols

x = symbols('x')

f = x**4 - 4*x**3 + 4*x**2
print(f"f(x) = {f}")

# Dérivées
fp = diff(f, x)
fpp = diff(f, x, 2)
print(f"f'(x) = {fp}")
print(f"f''(x) = {fpp}")

# Points critiques
critiques = solve(fp, x)
print(f"\\nPoints critiques : {critiques}")

# Classification
print("\\nClassification :")
for c in critiques:
    val_fpp = fpp.subs(x, c)
    val_f = f.subs(x, c)
    if val_fpp > 0:
        nature = "minimum local"
    elif val_fpp < 0:
        nature = "maximum local"
    else:
        nature = "point d'inflexion possible"
    print(f"  x = {c} : f({c}) = {val_f}, f''({c}) = {val_fpp} → {nature}")`,
        exercice: `Trouvez et classifiez les points critiques de $f(x) = xe^{-x}$.`
    },

    crit_ex: {
        title: "Points critiques : Exercice",
        theorie: `## Points d'inflexion

Un point d'inflexion est où la concavité change.
Condition : $f''(x) = 0$ et $f''$ change de signe.
        `,
        code: `import sympy as sp
from sympy import diff, solve, symbols, exp

x = symbols('x')

f = x**3 - 3*x**2 + 2
fp = diff(f, x)
fpp = diff(f, x, 2)

print(f"f(x) = {f}")
print(f"f''(x) = {fpp}")

# Points d'inflexion
inflexions = solve(fpp, x)
print(f"\\nPoints d'inflexion possibles : {inflexions}")

for xi in inflexions:
    # Vérifier le changement de signe
    gauche = fpp.subs(x, xi - sp.Rational(1,10))
    droite = fpp.subs(x, xi + sp.Rational(1,10))
    if gauche * droite < 0:
        print(f"  x = {xi} : inflexion confirmée (changement de signe)")
        print(f"    f({xi}) = {f.subs(x, xi)}")`,
        exercice: `Trouvez les points d'inflexion de $f(x) = x^4 - 6x^2$.`
    },

    partial_deriv: {
        title: "Dérivées partielles",
        theorie: `
## Dérivées partielles avec Sympy

Pour $f(x, y)$ :
\`\`\`python
diff(f, x)    # ∂f/∂x
diff(f, y)    # ∂f/∂y
diff(f, x, y) # ∂²f/∂x∂y
\`\`\`
        `,
        code: `import sympy as sp
from sympy import diff, symbols, exp, sin, cos

x, y, z = symbols('x y z')

f = x**2*y + y**3 + sp.exp(x*y)
print(f"f(x,y) = {f}")

# Dérivées partielles premières
fx = diff(f, x)
fy = diff(f, y)
print(f"\\n∂f/∂x = {fx}")
print(f"∂f/∂y = {fy}")

# Dérivées partielles secondes
fxx = diff(f, x, 2)
fyy = diff(f, y, 2)
fxy = diff(f, x, y)
fyx = diff(f, y, x)

print(f"\\n∂²f/∂x² = {fxx}")
print(f"∂²f/∂y² = {fyy}")
print(f"∂²f/∂x∂y = {fxy}")
print(f"∂²f/∂y∂x = {fyx}")

# Schwarz : fxy = fyx
print(f"\\nThéorème de Schwarz : fxy = fyx ? {sp.simplify(fxy - fyx) == 0}")

# Gradient et Laplacien
gradient = [fx, fy]
laplacien = fxx + fyy
print(f"\\nGradient : {gradient}")
print(f"Laplacien : {laplacien}")`,
        exercice: `Calculez les dérivées partielles de $f(x,y,z) = xyz + x^2y + yz^2$.`
    },

    integrals: {
        title: "Intégrales définies et indéfinies",
        theorie: `
## Intégration avec Sympy

\`\`\`python
from sympy import integrate

integrate(f, x)        # Indéfinie
integrate(f, (x, a, b)) # Définie
\`\`\`

### Sympy trouve les primitives symboliques !
        `,
        code: `import sympy as sp
from sympy import integrate, symbols, sin, cos, exp, log, sqrt, oo

x = symbols('x')

print("=== Intégrales indéfinies ===")
fonctions = [x**2, sin(x), exp(x), 1/x, 1/(1+x**2)]
for f in fonctions:
    print(f"∫{f} dx = {integrate(f, x)}")

print("\\n=== Intégrales définies ===")
print(f"∫₀¹ x² dx = {integrate(x**2, (x, 0, 1))}")
print(f"∫₀^π sin(x) dx = {integrate(sin(x), (x, 0, sp.pi))}")

print("\\n=== Intégrales impropres ===")
print(f"∫₀^∞ e^(-x) dx = {integrate(exp(-x), (x, 0, oo))}")
print(f"∫_{-∞}^{∞} e^(-x²) dx = {integrate(exp(-x**2), (x, -oo, oo))}")

print("\\n=== Avec constante ===")
from sympy import Function, Symbol
C = Symbol('C')
print(f"∫x² dx = {integrate(x**2, x)} + C")`,
        exercice: `Calculez $\\int_0^1 \\frac{1}{\\sqrt{1-x^2}} dx$ avec Sympy.`
    },

    fund_theorem: {
        title: "Exercice : Théorème fondamental de l'analyse",
        theorie: `
## Théorème fondamental

Si $F'(x) = f(x)$, alors :
$$\\int_a^b f(x)dx = F(b) - F(a)$$

Sympy permet de vérifier cette relation.
        `,
        code: `import sympy as sp
from sympy import integrate, diff, symbols

x, t, a, b = symbols('x t a b')

# Fonction
f = x**3

# Primitive
F = integrate(f, x)
print(f"f(x) = {f}")
print(f"F(x) = ∫f dx = {F}")

# Vérification F' = f
print(f"F'(x) = {diff(F, x)}")
print(f"F' = f ? {diff(F, x) == f}")

# Intégrale définie
a_val, b_val = 0, 2
integrale_def = integrate(f, (x, a_val, b_val))
difference = F.subs(x, b_val) - F.subs(x, a_val)

print(f"\\n∫₀² x³ dx = {integrale_def}")
print(f"F(2) - F(0) = {difference}")
print(f"Égaux ? {integrale_def == difference}")`,
        exercice: `Vérifiez le théorème pour $f(x) = \\cos(x)$ sur $[0, \\pi/2]$.`
    },

    area_curves: {
        title: "Aire entre deux courbes",
        theorie: `
## Aire entre deux courbes

$$A = \\int_a^b |f(x) - g(x)| dx$$

Avec Sympy :
1. Trouver les intersections
2. Intégrer la différence
        `,
        code: `import sympy as sp
from sympy import integrate, solve, symbols, Abs

x = symbols('x')

f = x**2
g = 2*x

print(f"f(x) = {f}")
print(f"g(x) = {g}")

# Points d'intersection
intersections = solve(f - g, x)
print(f"\\nIntersections : x = {intersections}")

a, b = intersections[0], intersections[1]

# Aire (g au-dessus de f entre 0 et 2)
aire = integrate(g - f, (x, a, b))
print(f"\\nAire = ∫[{a},{b}] (g-f) dx = {aire}")

# Vérification graphique
import numpy as np
import matplotlib.pyplot as plt

x_vals = np.linspace(-0.5, 2.5, 200)
f_vals = x_vals**2
g_vals = 2*x_vals

plt.figure(figsize=(8, 6))
plt.plot(x_vals, f_vals, 'b-', label='f(x) = x²')
plt.plot(x_vals, g_vals, 'r-', label='g(x) = 2x')
plt.fill_between(x_vals, f_vals, g_vals, 
                  where=(x_vals >= 0) & (x_vals <= 2),
                  alpha=0.3, color='green')
plt.legend(); plt.grid()
plt.title(f'Aire = {float(aire):.3f}')
plt.show()`,
        exercice: `Calculez l'aire entre $y = x$ et $y = x^3$ sur $[0, 1]$.`
    },

    area_ex: {
        title: "Aire entre courbes : Exercice",
        theorie: `## Volume de révolution

$$V = \\pi \\int_a^b f(x)^2 dx$$
        `,
        code: `import sympy as sp
from sympy import integrate, pi, symbols, sqrt

x = symbols('x')

# Volume d'une sphère de rayon R
R = symbols('R', positive=True)
f = sqrt(R**2 - x**2)  # Demi-cercle

volume = pi * integrate(f**2, (x, -R, R))
print(f"Volume de révolution du demi-cercle :")
print(f"V = π ∫ f² dx = {volume}")
print(f"Simplifié : {sp.simplify(volume)}")
print(f"= (4/3)πR³ ? {sp.simplify(volume - sp.Rational(4,3)*pi*R**3) == 0}")`,
        exercice: `Calculez le volume du cône de révolution de $f(x) = x$ sur $[0, h]$.`
    },

    calc_bug: {
        title: "Chasse aux bugs Calcul !",
        theorie: `
## Erreurs courantes

1. Oublier les constantes d'intégration
2. Bornes d'intégration inversées
3. Discontinuités dans l'intervalle
4. Oublier \`simplify()\`
        `,
        code: `import sympy as sp
from sympy import integrate, diff, symbols, simplify, sin, cos

x = symbols('x')

print("=== Bug 1 : Résultat non simplifié ===")
f = sin(x)**2
integrale = integrate(f, x)
print(f"∫sin²x dx = {integrale}")
print(f"Simplifié : {simplify(integrale)}")

print("\\n=== Bug 2 : Vérification dérivée ===")
# Toujours vérifier : (∫f)' = f
F = integrate(sin(x), x)
print(f"∫sin(x) dx = {F}")
print(f"d/dx[{F}] = {diff(F, x)}")

print("\\n=== Bug 3 : Attention aux discontinuités ===")
# ∫1/x de -1 à 1 n'existe pas !
try:
    result = integrate(1/x, (x, -1, 1))
    print(f"∫₋₁¹ 1/x dx = {result}")
except:
    print("Erreur : intégrale impropre divergente")`,
        exercice: `Pourquoi $\\int_0^1 \\frac{1}{\\sqrt{x}} dx$ converge mais $\\int_0^1 \\frac{1}{x} dx$ diverge ?`
    }
};
