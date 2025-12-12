// MODULE 8 : SECTIONS CONIQUES (Focus Sympy)
export const module8SympyContent = {
    parabolas: {
        title: "Tracer des paraboles",
        theorie: `
## Paraboles avec Sympy

\`\`\`python
from sympy import symbols, solve, diff

y = a*x**2 + b*x + c
sommet_x = -b / (2*a)
\`\`\`

Sympy calcule le sommet symboliquement !
        `,
        code: `import sympy as sp
from sympy import symbols, solve, diff, simplify, Rational

x, a, b, c = symbols('x a b c', real=True)

print("=== Parabole avec Sympy ===")

# Forme générale
y = a*x**2 + b*x + c
print(f"y = {y}")

# Sommet : dy/dx = 0
dy = diff(y, x)
sommet_x = solve(dy, x)[0]
sommet_y = y.subs(x, sommet_x)

print(f"\\ndy/dx = {dy}")
print(f"Sommet x = {sommet_x}")
print(f"Sommet y = {simplify(sommet_y)}")

# Forme canonique
print("\\n=== Forme canonique ===")
h = -b / (2*a)
k = simplify(y.subs(x, h))
print(f"y = a(x - h)² + k")
print(f"h = {h}")
print(f"k = {k}")

# Exemple numérique
print("\\n=== Exemple : y = x² - 4x + 3 ===")
y_ex = x**2 - 4*x + 3
racines = solve(y_ex, x)
sommet = -Rational(-4, 2)
print(f"Racines : {racines}")
print(f"Sommet : ({sommet}, {y_ex.subs(x, sommet)})")`,
        exercice: `Trouvez le sommet et les racines de $y = 2x^2 - 8x + 6$.`
    },

    contours: {
        title: "Créer des contours à partir de maillages",
        theorie: `
## Courbes implicites avec Sympy

\`\`\`python
from sympy import plot_implicit, Eq

plot_implicit(Eq(x**2 + y**2, 1))  # Cercle
\`\`\`

Sympy peut tracer directement des équations implicites !
        `,
        code: `import sympy as sp
from sympy import symbols, Eq, simplify

x, y = symbols('x y', real=True)

print("=== Courbes implicites ===")

# Cercle
cercle = x**2 + y**2 - 1
print(f"Cercle : {cercle} = 0")

# Ellipse
a, b = 3, 2
ellipse = x**2/a**2 + y**2/b**2 - 1
print(f"Ellipse : {ellipse} = 0")

# Hyperbole
hyperbole = x**2/4 - y**2/9 - 1
print(f"Hyperbole : {hyperbole} = 0")

# Gradient (pour normales)
print("\\n=== Gradient (direction normale) ===")
F = x**2 + y**2 - 1
grad_x = sp.diff(F, x)
grad_y = sp.diff(F, y)
print(f"F = {F}")
print(f"∇F = ({grad_x}, {grad_y})")

# Au point (1, 0)
print(f"\\nNormale en (1, 0) : ({grad_x.subs(x, 1).subs(y, 0)}, {grad_y.subs(x, 1).subs(y, 0)})")`,
        exercice: `Tracez l'ensemble des points où $x^2 - y^2 = 1$ avec Sympy.`
    },

    circles: {
        title: "Tracer des cercles",
        theorie: `
## Cercles avec Sympy

Équation : $(x - h)^2 + (y - k)^2 = r^2$

Sympy peut :
- Développer/factoriser
- Trouver centre et rayon
        `,
        code: `import sympy as sp
from sympy import symbols, expand, sqrt, solve, simplify, Eq

x, y, h, k, r = symbols('x y h k r', real=True)

print("=== Cercle avec Sympy ===")

# Forme centrée
cercle_centre = (x - h)**2 + (y - k)**2 - r**2
print(f"Forme centrée : {cercle_centre} = 0")

# Développer
cercle_dev = expand(cercle_centre)
print(f"Développée : {cercle_dev} = 0")

# Inverse : trouver centre et rayon
print("\\n=== Compléter le carré ===")
# x² + y² - 6x + 4y + 4 = 0
eq = x**2 + y**2 - 6*x + 4*y + 4
print(f"Équation : {eq} = 0")

# Coefficients
coef_x = -6
coef_y = 4
const = 4

# Centre
cx = -coef_x / 2
cy = -coef_y / 2
r_sq = cx**2 + cy**2 - const
print(f"\\nCentre : ({cx}, {cy})")
print(f"r² = {r_sq}, r = {sqrt(r_sq)}")

# Vérification
verif = (x - cx)**2 + (y - cy)**2 - r_sq
print(f"Vérif : {expand(verif)} = 0 ✓")`,
        exercice: `Trouvez centre et rayon de $x^2 + y^2 + 2x - 8y + 8 = 0$.`
    },

    ellipses: {
        title: "Tracer des ellipses",
        theorie: `
## Ellipses avec Sympy

$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$

Sympy calcule :
- Foyers : $c = \\sqrt{a^2 - b^2}$
- Excentricité : $e = c/a$
        `,
        code: `import sympy as sp
from sympy import symbols, sqrt, Rational, simplify, pi

a, b, x, y, t = symbols('a b x y t', real=True, positive=True)

print("=== Ellipse avec Sympy ===")

# Équation implicite
ellipse = x**2/a**2 + y**2/b**2 - 1
print(f"Équation : {ellipse} = 0")

# Foyers (si a > b)
c = sqrt(a**2 - b**2)
print(f"\\nDistance focale : c = {c}")
print(f"Foyers : (±{c}, 0)")

# Excentricité
e = c / a
print(f"Excentricité : e = c/a = {e}")

# Exemple numérique
print("\\n=== Exemple : a=5, b=3 ===")
vals = {a: 5, b: 3}
c_num = c.subs(vals)
e_num = e.subs(vals)
print(f"c = √(25 - 9) = {c_num}")
print(f"e = {c_num}/5 = {e_num}")

# Aire
aire = pi * a * b
print(f"\\nAire = π·a·b = {aire}")
print(f"Pour a=5, b=3 : Aire = {aire.subs(vals)} = {float(aire.subs(vals)):.2f}")

# Périmètre (approximation)
print("\\nPérimètre ≈ π(a + b)(1 + 3h/(10 + √(4 - 3h))) où h = ((a-b)/(a+b))²")`,
        exercice: `Trouvez l'excentricité de l'ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$.`
    },

    hyperbolas: {
        title: "Tracer des hyperboles",
        theorie: `
## Hyperboles avec Sympy

$$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$$

Asymptotes : $y = \\pm\\frac{b}{a}x$
        `,
        code: `import sympy as sp
from sympy import symbols, sqrt, solve, simplify, oo, limit

a, b, x, y = symbols('a b x y', real=True, positive=True)

print("=== Hyperbole avec Sympy ===")

# Équation
hyp = x**2/a**2 - y**2/b**2 - 1
print(f"Équation : {hyp} = 0")

# Sommets
print(f"\\nSommets : (±{a}, 0)")

# Foyers
c = sqrt(a**2 + b**2)
print(f"Distance focale : c = √(a² + b²) = {c}")
print(f"Foyers : (±{c}, 0)")

# Excentricité
e = c / a
print(f"Excentricité : e = {e}")
print("Note : e > 1 pour une hyperbole")

# Asymptotes
print(f"\\nAsymptotes : y = ±(b/a)x")

# Comportement asymptotique
print("\\n=== Vérification asymptote ===")
# Résoudre pour y
y_expr = solve(hyp, y)[0]  # branche positive
print(f"y = {y_expr}")
# Limite y/x quand x → ∞
ratio = limit(y_expr / x, x, oo)
print(f"lim(y/x, x→∞) = {ratio}")

# Exemple
print("\\n=== Exemple : a=2, b=3 ===")
vals = {a: 2, b: 3}
print(f"Foyers : (±√13, 0) = (±{float(c.subs(vals)):.3f}, 0)")
print(f"Asymptotes : y = ±(3/2)x")`,
        exercice: `Trouvez les asymptotes de $\\frac{y^2}{4} - \\frac{x^2}{9} = 1$.`
    },

    conic_bug: {
        title: "Chasse aux bugs Coniques !",
        theorie: `
## Erreurs courantes

1. Confondre $a$ et $b$ (grand/petit axe)
2. Oublier $c^2 = a^2 \\pm b^2$ (+ hyperbole, − ellipse)
3. Direction des foyers
        `,
        code: `import sympy as sp
from sympy import symbols, sqrt, solve, simplify

x, y = symbols('x y', real=True)

print("=== Bug 1 : a > b pour l'ellipse ===")
print("Standard : a = demi-grand axe")
print("Si b > a, l'ellipse est verticale !")

print("\\n=== Bug 2 : Formule des foyers ===")
a, b = 5, 3
print(f"Ellipse a={a}, b={b} :")
print(f"  c² = a² - b² = {a**2 - b**2}")
print(f"  c = {sqrt(a**2 - b**2)}")

print(f"\\nHyperbole a={a}, b={b} :")
print(f"  c² = a² + b² = {a**2 + b**2}")
print(f"  c = {sqrt(a**2 + b**2)}")

print("\\n=== Bug 3 : Classification ===")
# Ax² + By² + ... = 0
A, B = symbols('A B', real=True)
print("Si A = B : cercle")
print("Si A × B > 0 et A ≠ B : ellipse")
print("Si A × B < 0 : hyperbole")
print("Si A = 0 ou B = 0 : parabole")`,
        exercice: `Classifiez $4x^2 - 9y^2 - 16x + 18y - 29 = 0$.`
    }
};
