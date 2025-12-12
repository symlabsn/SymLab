// MODULE 9 : TRIGONOMETRIE (Focus Sympy)
export const module9SympyContent = {
    random_nums: {
        title: "Introduction aux nombres aléatoires",
        theorie: `
## Nombres aléatoires avec Sympy

Sympy peut générer des expressions symboliques aléatoires :
\`\`\`python
from sympy import randprime, Rational
from random import random
\`\`\`

Pour les calculs exacts, préférez Sympy.Rational !
        `,
        code: `import sympy as sp
from sympy import Rational, randprime, isprime, pi
import random

print("=== Fractions exactes avec Sympy ===")

# Rational au lieu de float
r = Rational(1, 3)
print(f"1/3 exact = {r}")
print(f"1/3 + 1/6 = {r + Rational(1, 6)}")
print(f"1/3 × 3 = {r * 3}")

# Nombres premiers aléatoires
print("\\n=== Premiers aléatoires ===")
for _ in range(5):
    p = randprime(100, 1000)
    print(f"Premier aléatoire : {p}")

# Sympy avec pi exact
print(f"\\n=== π exact ===")
print(f"π = {pi}")
print(f"π/4 = {pi/4}")
print(f"sin(π) = {sp.sin(pi)}")`,
        exercice: `Générez 10 premiers entre 1000 et 2000 avec Sympy.`
    },

    random_ex: {
        title: "Nombres aléatoires : Exercice",
        theorie: `## Simulations avec calcul exact

Sympy permet de garder les calculs exacts même dans les simulations.
        `,
        code: `import sympy as sp
from sympy import Rational, sqrt, simplify

print("=== Simulation avec fractions exactes ===")

# Dé équilibré
proba_face = Rational(1, 6)
print(f"P(face) = {proba_face}")
print(f"P(pair) = {3 * proba_face} = {simplify(3 * proba_face)}")

# Somme de 2 dés
print("\\n=== Somme de 2 dés ===")
for s in range(2, 13):
    # Nombre de façons d'obtenir s
    n = sum(1 for i in range(1, 7) for j in range(1, 7) if i + j == s)
    p = Rational(n, 36)
    print(f"P(S = {s:2}) = {n}/36 = {p}")

# Espérance exacte
E = sum(s * Rational(sum(1 for i in range(1, 7) for j in range(1, 7) if i + j == s), 36) 
        for s in range(2, 13))
print(f"\\nE[S] = {E}")`,
        exercice: `Calculez E[X²] pour un dé équilibré avec des fractions exactes.`
    },

    phase_angles: {
        title: "Exercice : Tracer des phases aléatoires",
        theorie: `
## Phases avec Sympy

\`\`\`python
from sympy import sin, cos, pi, symbols

t = symbols('t')
y = sin(t + phi)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import sin, cos, pi, symbols, expand, trigsimp

t, phi, omega = symbols('t phi omega', real=True)

print("=== Ondes symboliques ===")

# Onde générale
y = sp.sin(omega * t + phi)
print(f"y(t) = {y}")

# Développer selon la formule d'addition
y_dev = sp.expand(y, trig=True)
print(f"Développé : {y_dev}")

# Formule d'addition
print("\\n=== Formule d'addition ===")
a, b = symbols('a b', real=True)
print(f"sin(a + b) = {sp.expand(sp.sin(a + b), trig=True)}")
print(f"cos(a + b) = {sp.expand(sp.cos(a + b), trig=True)}")

# Somme d'ondes
y1 = sp.sin(t)
y2 = sp.sin(t + pi/2)  # = cos(t)
print(f"\\nsin(t) + sin(t + π/2) = {trigsimp(y1 + y2)}")`,
        exercice: `Montrez que $\\sin(t) + \\cos(t) = \\sqrt{2}\\sin(t + \\pi/4)$.`
    },

    rad_deg: {
        title: "Conversion radians et degrés",
        theorie: `
## Angles avec Sympy

\`\`\`python
from sympy import pi, rad, deg, Rational

# π/4 radians
angle = pi / 4

# Conversion
rad(45)   # 45° → π/4
deg(pi/4) # π/4 → 45°
\`\`\`
        `,
        code: `import sympy as sp
from sympy import pi, Rational, sin, cos, tan, simplify

print("=== Angles exacts avec Sympy ===")

# Angles en radians (π)
angles = [0, pi/6, pi/4, pi/3, pi/2, pi]
noms = ['0', 'π/6', 'π/4', 'π/3', 'π/2', 'π']

print("Angle (rad) | sin | cos | tan")
print("-" * 40)
for angle, nom in zip(angles, noms):
    s = sin(angle)
    c = cos(angle)
    t = tan(angle) if angle != pi/2 else sp.oo
    print(f"{nom:10} | {s} | {c} | {t}")

# Conversion
print("\\n=== Conversion ===")
print(f"π rad = {float(pi):.6f} rad = 180°")
print(f"1 rad = {180/float(pi):.4f}°")

# Angle en degrés → fraction de π
def to_pi(deg):
    return Rational(deg, 180) * pi

print(f"\\n30° = {to_pi(30)}")
print(f"45° = {to_pi(45)}")
print(f"60° = {to_pi(60)}")`,
        exercice: `Exprimez 75° et 150° en radians exacts (fractions de π).`
    },

    rad_deg_ex: {
        title: "Conversion d'angles : Exercice",
        theorie: `
## Valeurs exactes

Sympy connaît les valeurs exactes des fonctions trigo :
\`\`\`python
sin(pi/6)  # → 1/2
cos(pi/4)  # → √2/2
\`\`\`
        `,
        code: `import sympy as sp
from sympy import sin, cos, tan, pi, sqrt, Rational, simplify

print("=== Valeurs exactes ===")

angles = [pi/6, pi/4, pi/3]
noms = ['π/6 (30°)', 'π/4 (45°)', 'π/3 (60°)']

for angle, nom in zip(angles, noms):
    print(f"\\n{nom} :")
    print(f"  sin = {sin(angle)}")
    print(f"  cos = {cos(angle)}")
    print(f"  tan = {tan(angle)}")

# Vérification des identités
print("\\n=== Vérification des identités ===")
x = pi/6
print(f"sin²(π/6) + cos²(π/6) = {simplify(sin(x)**2 + cos(x)**2)}")
print(f"tan(π/6) = sin/cos = {simplify(sin(x)/cos(x))}")

# Valeurs exactes composées
print(f"\\nsin(15°) = sin(π/12) = {sin(pi/12)}")
print(f"Simplifié : {simplify(sin(pi/12))}") `,
        exercice: `Calculez les valeurs exactes de sin(75°) et cos(15°).`
    },

    pythagoras: {
        title: "Le théorème de Pythagore",
        theorie: `
## Identité fondamentale

$$\\sin^2\\theta + \\cos^2\\theta = 1$$

Sympy vérifie automatiquement !
        `,
        code: `import sympy as sp
from sympy import sin, cos, tan, symbols, simplify, trigsimp, sqrt

theta = symbols('theta', real=True)

print("=== Identité pythagoricienne ===")
identite = sin(theta)**2 + cos(theta)**2
print(f"sin²θ + cos²θ = {trigsimp(identite)}")

# Autres identités
print("\\n=== Identités dérivées ===")
print(f"1 + tan²θ = {trigsimp(1 + tan(theta)**2)}")
print(f"1 + cot²θ = {trigsimp(1 + sp.cot(theta)**2)}")

# Application : trouver cos sachant sin
print("\\n=== Application ===")
sin_val = sp.Rational(3, 5)
# cos² = 1 - sin² = 1 - 9/25 = 16/25
cos_sq = 1 - sin_val**2
cos_val = sqrt(cos_sq)
print(f"Si sin(θ) = 3/5")
print(f"Alors cos²(θ) = 1 - 9/25 = {cos_sq}")
print(f"Donc cos(θ) = ±{cos_val}")`,
        exercice: `Si $\\tan\\theta = 2$, trouvez $\\sin\\theta$ et $\\cos\\theta$ (premier quadrant).`
    },

    res_trig: {
        title: "Résolution graphique pour sin, cos, tan",
        theorie: `
## Résolution d'équations trigo avec Sympy

\`\`\`python
from sympy import solve, sin, cos

solve(sin(x) - Rational(1, 2), x)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import sin, cos, tan, symbols, solve, pi, Rational, solveset, S

x = symbols('x', real=True)

print("=== Résolution avec Sympy ===")

# sin(x) = 1/2
print("sin(x) = 1/2 :")
sol = solveset(sin(x) - Rational(1, 2), x, domain=S.Reals)
print(f"Solutions : {sol}")

# cos(x) = 0
print("\\ncos(x) = 0 :")
sol = solveset(cos(x), x, domain=S.Reals)
print(f"Solutions : {sol}")

# tan(x) = 1
print("\\ntan(x) = 1 :")
sol = solveset(tan(x) - 1, x, domain=S.Reals)
print(f"Solutions : {sol}")

# Solutions dans [0, 2π]
from sympy import Interval
print("\\n=== Solutions dans [0, 2π] ===")
sol = solveset(sin(x) - Rational(1, 2), x, Interval(0, 2*pi))
print(f"sin(x) = 1/2 dans [0, 2π] : {sol}")`,
        exercice: `Trouvez toutes les solutions de $\\cos(x) = -\\frac{1}{2}$ dans $[0, 2\\pi]$.`
    },

    res_ex: {
        title: "Résolution graphique : Exercice",
        theorie: `
## Équations trigo complexes

\`\`\`python
solve(sin(2*x) - cos(x), x)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import sin, cos, symbols, solve, pi, simplify, trigsimp

x = symbols('x', real=True)

print("=== Équations trigo avec Sympy ===")

# sin(2x) = 0
eq1 = sin(2*x)
sol1 = solve(eq1, x)
print(f"sin(2x) = 0 → x = {sol1}")

# cos(x) = sin(x)
eq2 = cos(x) - sin(x)
sol2 = solve(eq2, x)
print(f"\\ncos(x) = sin(x) → x = {sol2}")

# sin²(x) - cos²(x) = 0
eq3 = sin(x)**2 - cos(x)**2
sol3 = solve(eq3, x)
print(f"\\nsin²x = cos²x → x = {sol3}")

# Équation plus complexe
eq4 = 2*sin(x)**2 + sin(x) - 1
sol4 = solve(eq4, x)
print(f"\\n2sin²x + sinx - 1 = 0 → x = {sol4}")`,
        exercice: `Résolvez $\\sin^2(x) - \\sin(x) = 0$ dans $[0, 2\\pi]$.`
    },

    euler: {
        title: "La formule d'Euler",
        theorie: `
## Euler avec Sympy

\`\`\`python
from sympy import exp, I, pi, cos, sin

exp(I*theta) == cos(theta) + I*sin(theta)
\`\`\`

Sympy connaît cette identité !
        `,
        code: `import sympy as sp
from sympy import exp, I, pi, cos, sin, symbols, expand, simplify, re, im

theta = symbols('theta', real=True)

print("=== Formule d'Euler ===")
euler = exp(I * theta)
print(f"e^(iθ) = {expand(euler, complex=True)}")

# Vérification
print(f"\\nPour θ = π/4 :")
val = pi/4
print(f"e^(iπ/4) = {simplify(exp(I * val))}")
print(f"cos(π/4) + i·sin(π/4) = {cos(val)} + {sin(val)}i")

# L'identité d'Euler
print(f"\\n=== Identité d'Euler ===")
print(f"e^(iπ) + 1 = {simplify(exp(I * pi) + 1)}")

# Extraction parties réelle/imaginaire
z = exp(I * theta)
print(f"\\nRe(e^(iθ)) = {re(z)}")
print(f"Im(e^(iθ)) = {im(z)}")`,
        exercice: `Montrez que $e^{i\\pi/2} = i$ avec Sympy.`
    },

    euler_ex: {
        title: "Formule d'Euler : Exercice",
        theorie: `
## Formule de Moivre

$(e^{i\\theta})^n = e^{in\\theta}$

ou

$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$
        `,
        code: `import sympy as sp
from sympy import exp, I, pi, cos, sin, symbols, expand, simplify

theta, n = symbols('theta n', real=True)

print("=== Formule de Moivre ===")

# Cas n = 2
expr = (exp(I * theta))**2
print(f"(e^(iθ))² = {simplify(expr)}")
print(f"= e^(2iθ) = cos(2θ) + i·sin(2θ)")

# Développer (cos + i·sin)²
z = cos(theta) + I * sin(theta)
z2 = expand(z**2)
print(f"\\n(cos θ + i sin θ)² = {z2}")
print(f"Simplifié : {simplify(z2)}")

# Formule de cos(2θ) et sin(2θ)
print(f"\\n=== Formules de duplication ===")
print(f"cos(2θ) = Re[(cos θ + i sin θ)²] = {sp.re(expand(z**2))}")
print(f"sin(2θ) = Im[(cos θ + i sin θ)²] = {sp.im(expand(z**2))}")

# Puissance n
print(f"\\n=== Cas général ===")
print(f"(e^(iθ))^n = e^(inθ)")`,
        exercice: `Utilisez Moivre pour trouver $\\cos(3\\theta)$ en fonction de $\\cos\\theta$.`
    },

    euler_explode: {
        title: "Exercice : Euler aléatoire explosif",
        theorie: `
## Spirales avec Sympy

$z(t) = e^{(a + ib)t}$

Sympy peut décomposer en parties réelle et imaginaire.
        `,
        code: `import sympy as sp
from sympy import exp, I, symbols, re, im, simplify, sin, cos

t, a, b = symbols('t a b', real=True)

print("=== Spirale complexe ===")
z = exp((a + I*b) * t)
print(f"z(t) = e^((a + ib)t) = {z}")

# Décomposition
z_exp = exp(a*t) * exp(I*b*t)
print(f"= e^(at) · e^(ibt)")
print(f"= e^(at) · (cos(bt) + i·sin(bt))")

# Parties réelle et imaginaire
x = simplify(re(z))
y = simplify(im(z))
print(f"\\nPartie réelle : x(t) = {x}")
print(f"Partie imag. : y(t) = {y}")

# Module
module = simplify(sp.Abs(z))
print(f"\\n|z(t)| = {module}")

print("\\n=== Comportement ===")
print("a > 0 : spirale divergente")
print("a < 0 : spirale convergente")
print("a = 0 : cercle")`,
        exercice: `Pour $z(t) = e^{(-0.1 + i)t}$, calculez $|z(10)|$.`
    },

    snakes: {
        title: "Exercice : Serpents avec cos et sin",
        theorie: `
## Courbes de Lissajous

$$x(t) = \\cos(at), \\quad y(t) = \\sin(bt)$$

Sympy peut simplifier les équations !
        `,
        code: `import sympy as sp
from sympy import cos, sin, symbols, simplify, pi

t = symbols('t', real=True)

print("=== Courbes de Lissajous ===")

# Coefficients (a, b)
params = [(1, 1), (1, 2), (2, 3), (3, 4)]

for a, b in params:
    x = cos(a * t)
    y = sin(b * t)
    print(f"\\na={a}, b={b} :")
    print(f"  x(t) = {x}")
    print(f"  y(t) = {y}")
    # Période
    periode = 2 * pi / sp.gcd(a, b)
    print(f"  Période = {periode}")

# Éliminer t pour equation cartésienne (cas simple)
print("\\n=== Cercle (a=b=1) ===")
# x = cos(t), y = sin(t) → x² + y² = 1
print("x² + y² = cos²t + sin²t = 1")`,
        exercice: `Montrez que pour $a=1, b=2$, la courbe est une parabole.`
    },

    trig_bug: {
        title: "Chasse aux bugs Trigonométrie !",
        theorie: `
## Erreurs courantes

1. Sympy utilise les **radians** par défaut
2. tan(π/2) → zoo (∞ complexe)
3. arcsin/arccos limités à [-1, 1]
        `,
        code: `import sympy as sp
from sympy import sin, cos, tan, pi, asin, acos, zoo, oo, Rational

print("=== Bug 1 : Radians vs degrés ===")
print(f"sin(90) ≠ 1 ! sin(90 rad) = {sin(90)}")
print(f"sin(π/2) = {sin(pi/2)} ✓")

print("\\n=== Bug 2 : tan(π/2) ===")
print(f"tan(π/2) = {tan(pi/2)}")
print("zoo = complexe infini")

print("\\n=== Bug 3 : Domaine de arcsin ===")
# asin(2) n'a pas de sens sur ℝ
print(f"asin(1/2) = {asin(Rational(1, 2))}")
print(f"asin(1) = {asin(1)}")
# asin(2) donnera un résultat complexe

print("\\n=== Bug 4 : Simplification trigo ===")
from sympy import trigsimp
x = sp.Symbol('x')
expr = sin(x)**2 + cos(x)**2
print(f"sin²x + cos²x sans trigsimp : {expr}")
print(f"Avec trigsimp : {trigsimp(expr)}")`,
        exercice: `Pourquoi $\\arcsin(\\sin(2\\pi)) \\neq 2\\pi$ ?`
    }
};
