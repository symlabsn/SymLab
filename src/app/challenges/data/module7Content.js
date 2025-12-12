// MODULE 7 : ALGEBRE 2 (Focus Sympy)
export const module7Content = {
        sum_prod: {
                title: "Sommes et produits",
                theorie: `
## Sommes et produits avec Sympy

### Sympy : calcul symbolique exact
\`\`\`python
from sympy import Sum, Product, symbols

Sum(expr, (i, a, b))     # Σ
Product(expr, (i, a, b)) # Π
\`\`\`

### Formules prouvées par Sympy
- $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$
- $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$
        `,
                code: `import sympy as sp
from sympy import Sum, Product, symbols, factorial, simplify

n, i, k = symbols('n i k', integer=True, positive=True)

print("=== Sommes symboliques avec Sympy ===")

# Somme des n premiers entiers
somme = Sum(i, (i, 1, n))
print(f"Σ(i, 1, n) = {somme.doit()}")

# Somme des carrés
somme_carres = Sum(i**2, (i, 1, n))
resultat = somme_carres.doit()
print(f"Σ(i², 1, n) = {resultat}")
print(f"Factorisé : {sp.factor(resultat)}")

# Somme des cubes
somme_cubes = Sum(i**3, (i, 1, n))
print(f"Σ(i³, 1, n) = {sp.factor(somme_cubes.doit())}")

# Produit = factorielle
prod = Product(i, (i, 1, n))
print(f"\\nΠ(i, 1, n) = {prod.doit()}")

# Vérification identité
print(f"\\n=== Vérification ===")
print(f"[Σi]² = Σi³ ? {simplify((Sum(i, (i,1,n)).doit())**2 - Sum(i**3, (i,1,n)).doit()) == 0}")`,
                exercice: `Prouvez avec Sympy que $\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$`
        },

        discrete_diff: {
                title: "Différences (dérivée discrète)",
                theorie: `
## Différences finies avec Sympy

\`\`\`python
from sympy import difference_delta

difference_delta(f, n)  # Δf(n) = f(n+1) - f(n)
\`\`\`

### Propriété clé
Polynôme de degré $d$ → différence de degré $d-1$
        `,
                code: `import sympy as sp
from sympy import symbols, simplify, Function

n = symbols('n', integer=True)

# Différence manuelle
def delta(f, var):
    return simplify(f.subs(var, var + 1) - f)

print("=== Différences avec Sympy ===")

# Carrés parfaits
f = n**2
df = delta(f, n)
ddf = delta(df, n)
print(f"f(n) = {f}")
print(f"Δf(n) = {df}")
print(f"Δ²f(n) = {ddf}")  # Constant !

# Cubes
g = n**3
dg = delta(g, n)
ddg = delta(dg, n)
dddg = delta(ddg, n)
print(f"\\ng(n) = {g}")
print(f"Δg(n) = {sp.expand(dg)}")
print(f"Δ²g(n) = {sp.expand(ddg)}")
print(f"Δ³g(n) = {dddg}")  # Constant !

# Exponentielle
h = 2**n
print(f"\\nΔ(2^n) = {simplify(delta(h, n))}")`,
                exercice: `Montrez que $\\Delta^4(n^4)$ est constant avec Sympy.`
        },

        roots_poly: {
                title: "Racines de polynômes",
                theorie: `
## Trouver les racines avec Sympy

\`\`\`python
sp.solve(P, x)     # Liste des racines
sp.roots(P, x)     # Dict {racine: multiplicité}
sp.real_roots(P)   # Racines réelles seulement
\`\`\`

### Théorème fondamental
Polynôme de degré $n$ → exactement $n$ racines dans $\\mathbb{C}$
        `,
                code: `import sympy as sp
from sympy import symbols, solve, roots, real_roots, I, sqrt

x = symbols('x')

print("=== Racines avec Sympy ===")

# Degré 2
P1 = x**2 - 5*x + 6
print(f"P(x) = {P1}")
print(f"solve : {solve(P1, x)}")
print(f"roots : {roots(P1, x)}")

# Degré 3 avec racines exactes
P2 = x**3 - 6*x**2 + 11*x - 6
print(f"\\nP(x) = {P2}")
print(f"Racines : {solve(P2, x)}")

# Avec multiplicités
P3 = (x - 1)**2 * (x - 2)
print(f"\\nP(x) = {sp.expand(P3)}")
print(f"Multiplicités : {roots(P3, x)}")

# Racines complexes
P4 = x**4 + 1
print(f"\\nx⁴ + 1 = 0 :")
for r in solve(P4, x):
    print(f"  {r} = {sp.simplify(r)}")`,
                exercice: `Trouvez les racines exactes de $x^4 - 5x^2 + 4$ avec Sympy.`
        },

        roots_ex: {
                title: "Racines de polynômes : Exercice",
                theorie: `
## Relations de Viète avec Sympy

Sympy peut vérifier symboliquement :
- Somme des racines = $-b/a$
- Produit des racines = $c/a$ (degré 2)
        `,
                code: `import sympy as sp
from sympy import symbols, solve, expand, Poly

x = symbols('x')
a, b, c = symbols('a b c')

print("=== Viète symbolique ===")

# Équation générale
P = a*x**2 + b*x + c
racines = solve(P, x)
print(f"Racines de ax² + bx + c :")
for r in racines:
    print(f"  {r}")

# Vérification Viète
r1, r2 = racines
somme = sp.simplify(r1 + r2)
produit = sp.simplify(r1 * r2)
print(f"\\nSomme : {somme}")
print(f"Produit : {produit}")

# Exemple numérique
P_num = x**2 - 5*x + 6
r = solve(P_num, x)
print(f"\\nExemple : {P_num} = 0")
print(f"Racines : {r}")
print(f"Somme = {sum(r)} = -b/a = {5}")
print(f"Produit = {r[0]*r[1]} = c/a = {6}")`,
                exercice: `Vérifiez Viète pour $x^3 - 6x^2 + 11x - 6 = 0$ (3 relations).`
        },

        quadratic: {
                title: "L'équation du second degré",
                theorie: `
## Formule quadratique avec Sympy

Sympy résout symboliquement :
\`\`\`python
sp.solve(a*x**2 + b*x + c, x)
\`\`\`

Et donne la formule exacte avec le discriminant !
        `,
                code: `import sympy as sp
from sympy import symbols, solve, sqrt, I, simplify

x = symbols('x')
a, b, c = symbols('a b c')

print("=== Équation quadratique symbolique ===")

# Formule générale
eq = a*x**2 + b*x + c
solutions = solve(eq, x)
print("Solutions de ax² + bx + c = 0 :")
for s in solutions:
    print(f"  x = {s}")

# Cas concrets
print("\\n=== Exemples ===")
equations = [
    x**2 - 5*x + 6,      # Δ > 0
    x**2 - 2*x + 1,      # Δ = 0
    x**2 + 1,            # Δ < 0
    2*x**2 + 3*x - 2,    # Coefficients variés
]

for eq in equations:
    sol = solve(eq, x)
    print(f"{eq} = 0 → x = {sol}")

# Racines exactes irrationnelles
eq5 = x**2 - 2
print(f"\\nx² - 2 = 0 → x = {solve(eq5, x)}")`,
                exercice: `Résolvez $3x^2 - 2\\sqrt{3}x - 1 = 0$ avec Sympy.`
        },

        complex_add: {
                title: "Nombres complexes : Addition et soustraction",
                theorie: `
## Nombres complexes avec Sympy

\`\`\`python
from sympy import I, re, im, Abs, conjugate

z = 3 + 4*I  # Nombre complexe
re(z)        # Partie réelle
im(z)        # Partie imaginaire
\`\`\`

Sympy : calcul **exact** avec des complexes symboliques !
        `,
                code: `import sympy as sp
from sympy import I, re, im, symbols, simplify, expand

print("=== Complexes avec Sympy ===")

# Définition
z1 = 3 + 4*I
z2 = 1 - 2*I

print(f"z1 = {z1}")
print(f"z2 = {z2}")
print(f"re(z1) = {re(z1)}")
print(f"im(z1) = {im(z1)}")

# Opérations
print(f"\\nz1 + z2 = {z1 + z2}")
print(f"z1 - z2 = {z1 - z2}")

# Symbolique
a, b, c, d = symbols('a b c d', real=True)
w1 = a + b*I
w2 = c + d*I
print(f"\\n(a + bi) + (c + di) = {expand(w1 + w2)}")

# Vérification i² = -1
print(f"\\ni² = {I**2}")
print(f"i³ = {I**3}")
print(f"i⁴ = {I**4}")`,
                exercice: `Calculez $(3 + 2i) + (5 - 7i) - (2 + i)$ avec Sympy.`
        },

        complex_mult: {
                title: "Nombres complexes : Conjugué et multiplication",
                theorie: `
## Opérations avec Sympy

\`\`\`python
conjugate(z)  # Conjugué
Abs(z)        # Module
z * w         # Multiplication exacte
\`\`\`

Sympy simplifie automatiquement !
        `,
                code: `import sympy as sp
from sympy import I, conjugate, Abs, symbols, expand, simplify, sqrt

z = 3 + 4*I

print("=== Conjugué et module ===")
print(f"z = {z}")
print(f"z̄ = {conjugate(z)}")
print(f"|z| = {Abs(z)}")

# Propriété z * z̄ = |z|²
print(f"\\nz × z̄ = {expand(z * conjugate(z))}")
print(f"|z|² = {Abs(z)**2}")

# Multiplication symbolique
a, b, c, d = symbols('a b c d', real=True)
w1 = a + b*I
w2 = c + d*I
produit = expand(w1 * w2)
print(f"\\n(a+bi)(c+di) = {produit}")

# Exemple avec radicaux
z1 = sqrt(2) + sqrt(3)*I
z2 = sqrt(2) - sqrt(3)*I
print(f"\\n(√2 + √3i)(√2 - √3i) = {expand(z1 * z2)}")`,
                exercice: `Montrez que $|z_1 z_2| = |z_1| |z_2|$ avec Sympy.`
        },

        complex_div: {
                title: "Nombres complexes : Division",
                theorie: `
## Division avec Sympy

\`\`\`python
(z1 / z2).simplify()  # Division simplifiée
\`\`\`

Sympy rationalise automatiquement le dénominateur.
        `,
                code: `import sympy as sp
from sympy import I, simplify, expand, re, im, Rational

z1 = 3 + 4*I
z2 = 1 + 2*I

print("=== Division avec Sympy ===")
quotient = z1 / z2
print(f"({z1}) / ({z2}) = {simplify(quotient)}")
print(f"Partie réelle : {re(simplify(quotient))}")
print(f"Partie imaginaire : {im(simplify(quotient))}")

# Vérification
verif = simplify(quotient * z2)
print(f"\\nVérification : résultat × z2 = {verif}")

# Division symbolique
from sympy import symbols
a, b, c, d = symbols('a b c d', real=True)
w1 = a + b*I
w2 = c + d*I
div = simplify(w1 / w2)
print(f"\\n(a+bi)/(c+di) = {div}")

# Forme standard
print(f"Re = {re(div)}")
print(f"Im = {im(div)}")`,
                exercice: `Calculez $\\frac{5 + 3i}{2 - i}$ et simplifiez avec Sympy.`
        },

        complex_graph: {
                title: "Représenter les nombres complexes",
                theorie: `
## Plan complexe avec Sympy

\`\`\`python
from sympy import arg, Abs

arg(z)  # Argument (angle)
Abs(z)  # Module
\`\`\`

Forme polaire : $z = r e^{i\\theta}$
        `,
                code: `import sympy as sp
from sympy import I, Abs, arg, pi, cos, sin, exp, simplify
import matplotlib.pyplot as plt

# Points en notation Sympy
complexes = [3+4*I, -2+I, 1-3*I, exp(I*pi/4)]

print("=== Forme polaire avec Sympy ===")
for z in complexes:
    r = Abs(z)
    theta = arg(z)
    print(f"z = {z}")
    print(f"  |z| = {r}, arg(z) = {theta} = {float(theta):.4f} rad")
    print()

# Conversion polaire → cartésien
r, theta = sp.symbols('r theta', real=True, positive=True)
z_polaire = r * exp(I * theta)
print(f"r·e^(iθ) = {sp.expand(z_polaire, complex=True)}")

# Formule d'Euler
theta_val = pi/4
euler = exp(I * theta_val)
print(f"\\ne^(iπ/4) = {simplify(euler)} = {simplify(sp.re(euler))} + {simplify(sp.im(euler))}i")`,
                exercice: `Représentez $z = 2e^{i\\pi/3}$ en forme cartésienne avec Sympy.`
        },

        quad_complex: {
                title: "Équation du 2nd degré avec nombres complexes",
                theorie: `
## Racines complexes avec Sympy

Sympy trouve automatiquement les racines complexes !

\`\`\`python
solve(x**2 + 1, x)  # → [I, -I]
\`\`\`
        `,
                code: `import sympy as sp
from sympy import I, symbols, solve, sqrt, simplify

x = symbols('x')

print("=== Équations à racines complexes ===")

equations = [
    x**2 + 1,          # x = ±i
    x**2 + 2*x + 5,    # Δ < 0
    x**2 + 4*x + 13,   # Δ = -36
    x**4 + 1,          # Racines 8èmes de -1
]

for eq in equations:
    sol = solve(eq, x)
    print(f"\\n{eq} = 0 :")
    for s in sol:
        # Vérification
        verif = simplify(eq.subs(x, s))
        print(f"  x = {s} → P(x) = {verif}")

# Équation générale avec Δ < 0
a, b, c = symbols('a b c', real=True)
print("\\n=== Formule générale (Δ < 0) ===")
# x = (-b ± i√|Δ|) / 2a
delta = b**2 - 4*a*c
print(f"Si Δ = {delta} < 0, les racines sont complexes conjuguées")`,
                exercice: `Résolvez $x^2 + 4x + 13 = 0$ et vérifiez que les racines sont conjuguées.`
        },

        unit_circle: {
                title: "Le cercle trigonométrique",
                theorie: `
## Cercle unité avec Sympy

\`\`\`python
from sympy import exp, I, pi, cos, sin

exp(I*theta) == cos(theta) + I*sin(theta)
\`\`\`

### Formule d'Euler
$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$
        `,
                code: `import sympy as sp
from sympy import exp, I, pi, cos, sin, symbols, simplify, expand

theta = symbols('theta', real=True)

print("=== Formule d'Euler avec Sympy ===")

# Vérification
euler = exp(I * theta)
trigo = cos(theta) + I * sin(theta)
print(f"e^(iθ) = {expand(euler, complex=True)}")
print(f"cos(θ) + i·sin(θ) = {trigo}")

# Points remarquables
print("\\n=== Points remarquables ===")
angles = [0, pi/6, pi/4, pi/3, pi/2, pi]
for a in angles:
    z = exp(I * a)
    z_simple = simplify(z)
    print(f"e^(i·{a}) = {z_simple}")

# L'identité d'Euler
print(f"\\n=== Identité d'Euler ===")
euler_identity = exp(I * pi) + 1
print(f"e^(iπ) + 1 = {simplify(euler_identity)}")`,
                exercice: `Vérifiez que $e^{i\\pi/2} = i$ avec Sympy.`
        },

        nat_exp_log: {
                title: "Exponentielle et logarithme népérien",
                theorie: `
## exp et log avec Sympy

\`\`\`python
from sympy import exp, log, E, ln

exp(x)        # e^x
log(x)        # ln(x)
log(x, base)  # log_base(x)
\`\`\`

Sympy simplifie automatiquement !
        `,
                code: `import sympy as sp
from sympy import exp, log, ln, E, symbols, simplify, expand_log

x, a, b = symbols('x a b', positive=True)

print("=== exp et log avec Sympy ===")

# Propriétés fondamentales
print(f"exp(ln(x)) = {simplify(exp(ln(x)))}")
print(f"ln(exp(x)) = {simplify(ln(exp(x)))}")
print(f"E = {E} ≈ {float(E):.10f}")

# Règles des logarithmes
print("\\n=== Règles des logarithmes ===")
print(f"ln(a·b) = {expand_log(ln(a*b), force=True)}")
print(f"ln(a/b) = {expand_log(ln(a/b), force=True)}")
print(f"ln(a^n) = {expand_log(ln(a**3), force=True)}")

# Dérivées (aperçu calcul)
print("\\n=== Dérivées ===")
print(f"d/dx(e^x) = {sp.diff(exp(x), x)}")
print(f"d/dx(ln(x)) = {sp.diff(ln(x), x)}")

# Changement de base
print(f"\\nlog_2(8) = ln(8)/ln(2) = {simplify(log(8, 2))}")`,
                exercice: `Simplifiez $\\ln(e^2 \\cdot e^3)$ et $e^{\\ln 4 + \\ln 5}$ avec Sympy.`
        },

        gaussian_pt: {
                title: "Trouver un point sur une Gaussienne",
                theorie: `
## Gaussienne symbolique

\`\`\`python
from sympy import exp, sqrt, pi, symbols

f = 1/(sigma*sqrt(2*pi)) * exp(-(x-mu)**2 / (2*sigma**2))
\`\`\`

Sympy peut intégrer la Gaussienne symboliquement !
        `,
                code: `import sympy as sp
from sympy import exp, sqrt, pi, symbols, integrate, oo, simplify

x, mu, sigma = symbols('x mu sigma', real=True)
sigma = symbols('sigma', positive=True)

# Densité gaussienne symbolique
f = 1/(sigma*sqrt(2*pi)) * exp(-(x-mu)**2 / (2*sigma**2))
print(f"Densité : f(x) = {f}")

# Intégrale = 1
print("\\n=== Vérification : intégrale = 1 ===")
integrale = integrate(f, (x, -oo, oo))
print(f"∫f(x)dx = {simplify(integrale)}")

# Cas standard N(0,1)
f_std = 1/sqrt(2*pi) * exp(-x**2/2)
print(f"\\nN(0,1) : f(x) = {f_std}")

# Valeurs particulières
print(f"f(0) = {simplify(f_std.subs(x, 0))}")
print(f"f(0) ≈ {float(f_std.subs(x, 0)):.6f}")`,
                exercice: `Trouvez $x$ tel que $f(x) = 0.1$ pour $N(0,1)$ avec Sympy.`
        },

        gaussian_fam: {
                title: "Exercice : Une famille de Gaussiennes",
                theorie: `
## Famille paramétrique

Sympy permet d'étudier l'effet des paramètres symboliquement.
        `,
                code: `import sympy as sp
from sympy import exp, sqrt, pi, symbols, diff, simplify

x, mu, sigma = symbols('x mu sigma', real=True, positive=True)

f = 1/(sigma*sqrt(2*pi)) * exp(-(x-mu)**2 / (2*sigma**2))

print("=== Analyse symbolique ===")

# Dérivée par rapport à x (pour trouver le max)
df = diff(f, x)
print(f"df/dx = {simplify(df)}")

# Le maximum est en x = μ
print(f"\\nMaximum en x = μ : f(μ) = {simplify(f.subs(x, mu))}")

# Effet de σ sur la hauteur du pic
hauteur = 1/(sigma*sqrt(2*pi))
print(f"Hauteur du pic = {hauteur}")

# Points d'inflexion
ddf = diff(f, x, 2)
inflexions = sp.solve(ddf, x)
print(f"\\nPoints d'inflexion : x = μ ± σ")`,
                exercice: `Montrez que f(μ+σ) = f(μ-σ) avec Sympy.`
        },

        roots_unity: {
                title: "Racines n-ièmes de l'unité",
                theorie: `
## Racines de $z^n = 1$ avec Sympy

\`\`\`python
solve(x**n - 1, x)
\`\`\`

Sympy donne les racines exactes en forme exponentielle !
        `,
                code: `import sympy as sp
from sympy import symbols, solve, exp, I, pi, simplify, cos, sin, Abs

x = symbols('x')

print("=== Racines de l'unité avec Sympy ===")

for n in [3, 4, 5, 6]:
    print(f"\\n--- Racines {n}èmes ---")
    racines = solve(x**n - 1, x)
    for k, r in enumerate(racines):
        r_simp = simplify(r)
        module = Abs(r_simp)
        print(f"ω_{k} = {r_simp}, |ω| = {module}")

# Propriétés
print("\\n=== Propriétés ===")
racines_4 = solve(x**4 - 1, x)
print(f"Racines 4èmes : {racines_4}")
somme = sum(racines_4)
produit = sp.prod(racines_4)
print(f"Somme = {somme}")
print(f"Produit = {simplify(produit)}")`,
                exercice: `Montrez que la somme des racines n-ièmes de l'unité est 0.`
        },

        log_lin_space: {
                title: "Espaces logarithmique et linéaire",
                theorie: `
## Séquences avec Sympy

\`\`\`python
from sympy import SeqFormula, symbols

a = SeqFormula(2**n, (n, 0, 10))
list(a)  # [1, 2, 4, 8, ...]
\`\`\`
        `,
                code: `import sympy as sp
from sympy import symbols, log, exp, simplify

n, x = symbols('n x', positive=True)

print("=== Progressions avec Sympy ===")

# Arithmétique
a_arith = 2 + 3*n  # a_n = 2 + 3n
print(f"Arithmétique : a_n = {a_arith}")
print(f"Premiers termes : {[a_arith.subs(n, i) for i in range(6)]}")

# Géométrique
a_geo = 2**n
print(f"\\nGéométrique : a_n = {a_geo}")
print(f"Premiers termes : {[a_geo.subs(n, i) for i in range(6)]}")

# Échelle log
print("\\n=== Échelle logarithmique ===")
print(f"log(1) = {log(1)}")
print(f"log(10) = {simplify(log(10))}")
print(f"log(100) = {simplify(log(100))}")
print(f"log(1000) = {simplify(log(1000))} = {float(log(1000)):.4f}")`,
                exercice: `Créez une suite géométrique symbolique et calculez sa somme.`
        },

        log_props: {
                title: "Propriétés du logarithme",
                theorie: `
## Propriétés avec Sympy

\`\`\`python
expand_log(expr)  # Développe les logs
logcombine(expr)  # Combine les logs
\`\`\`
        `,
                code: `import sympy as sp
from sympy import log, symbols, expand_log, logcombine, simplify

a, b, n = symbols('a b n', positive=True)
x = symbols('x', positive=True)

print("=== Développement des logs ===")
print(f"log(a·b) = {expand_log(log(a*b), force=True)}")
print(f"log(a/b) = {expand_log(log(a/b), force=True)}")
print(f"log(a^n) = {expand_log(log(a**n), force=True)}")

print("\\n=== Combinaison des logs ===")
expr = log(a) + log(b)
print(f"log(a) + log(b) = {logcombine(expr, force=True)}")

expr2 = 2*log(a) - 3*log(b)
print(f"2·log(a) - 3·log(b) = {logcombine(expr2, force=True)}")

# Changement de base
print("\\n=== Changement de base ===")
print(f"log_2(x) = {log(x, 2)}")
print(f"log_2(8) = {log(8, 2)}")
print(f"log_3(27) = {log(27, 3)}")`,
                exercice: `Simplifiez $\\log_2(32) + \\log_2(4)$ avec Sympy.`
        },

        sequences: {
                title: "Suites arithmétiques et géométriques",
                theorie: `
## Suites avec Sympy

\`\`\`python
from sympy import Sum, symbols, summation

Sum(a_n, (n, 0, N)).doit()
\`\`\`
        `,
                code: `import sympy as sp
from sympy import symbols, Sum, summation, simplify, Rational

n, N = symbols('n N', integer=True, positive=True)
a0, r, q = symbols('a0 r q')

print("=== Suite arithmétique ===")
a_arith = a0 + n*r
S_arith = Sum(a_arith, (n, 0, N-1))
print(f"a_n = {a_arith}")
print(f"S_N = {S_arith.doit()}")
print(f"Factorisé : {sp.factor(S_arith.doit())}")

print("\\n=== Suite géométrique ===")
a_geo = a0 * q**n
S_geo = Sum(a_geo, (n, 0, N-1))
resultat = S_geo.doit()
print(f"a_n = {a_geo}")
print(f"S_N = {simplify(resultat)}")

# Exemple numérique
print("\\n=== Exemple : 1 + 2 + 4 + ... + 2^9 ===")
S = Sum(2**n, (n, 0, 9))
print(f"Somme = {S.doit()}")
print(f"Formule : (2^10 - 1)/(2-1) = {2**10 - 1}")`,
                exercice: `Prouvez que $\\sum_{k=0}^{n-1} r^k = \\frac{1-r^n}{1-r}$ avec Sympy.`
        },

        orders_mag: {
                title: "Ordres de grandeur et notation scientifique",
                theorie: `
## Grands nombres avec Sympy

Sympy gère les grands entiers **exactement** !

\`\`\`python
factorial(100)  # Calcul exact
10**100         # Pas d'overflow
\`\`\`
        `,
                code: `import sympy as sp
from sympy import factorial, log, floor, N, Integer

print("=== Grands nombres avec Sympy ===")

# Factorielle exacte
f100 = factorial(100)
print(f"100! a {len(str(f100))} chiffres")
print(f"100! = {str(f100)[:50]}...")

# Ordre de grandeur
ordre = floor(log(f100, 10))
print(f"100! ≈ 10^{ordre}")

# Notation scientifique
print(f"\\n100! ≈ {N(f100, 5):.4e}")

# Constantes physiques exactes
c = Integer(299792458)  # m/s
G = sp.Rational(667430, 10**16)  # N⋅m²/kg²
print(f"\\nVitesse lumière : {c} m/s")
print(f"log10(c) = {float(log(c, 10)):.2f}")`,
                exercice: `Calculez le nombre de chiffres de $1000!$ avec Sympy.`
        },

        min_max: {
                title: "Extrema de fonctions",
                theorie: `
## Extrema avec Sympy

\`\`\`python
solve(diff(f, x), x)      # Points critiques
diff(f, x, 2).subs(x, c)  # Test 2nde dérivée
\`\`\`
        `,
                code: `import sympy as sp
from sympy import symbols, diff, solve, simplify

x = symbols('x')
f = x**3 - 3*x + 1

print("=== Extrema avec Sympy ===")
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
    nature = "minimum local" if val_fpp > 0 else "maximum local"
    print(f"  x = {c} : f({c}) = {val_f}, f''({c}) = {val_fpp} → {nature}")`,
                exercice: `Trouvez les extrema de $f(x) = xe^{-x}$ avec Sympy.`
        },

        even_odd: {
                title: "Fonctions paires et impaires",
                theorie: `
## Parité avec Sympy

\`\`\`python
simplify(f.subs(x, -x) - f)   # = 0 si paire
simplify(f.subs(x, -x) + f)   # = 0 si impaire
\`\`\`
        `,
                code: `import sympy as sp
from sympy import symbols, simplify, cos, sin, exp

x = symbols('x')

def parite(f, var):
    f_neg = f.subs(var, -var)
    if simplify(f_neg - f) == 0:
        return "paire"
    elif simplify(f_neg + f) == 0:
        return "impaire"
    return "ni paire ni impaire"

print("=== Parité avec Sympy ===")

fonctions = [
    x**2,              # Paire
    x**3,              # Impaire
    cos(x),            # Paire
    sin(x),            # Impaire
    exp(x),            # Ni l'un ni l'autre
    x / (x**2 + 1),    # Impaire
    x**2 + x,          # Ni l'un ni l'autre
]

for f in fonctions:
    p = parite(f, x)
    print(f"{f} : {p}")`,
                exercice: `Déterminez la parité de $f(x) = \\ln\\left(\\frac{1+x}{1-x}\\right)$.`
        },

        alg2_bug: {
                title: "Chasse aux bugs Algèbre 2 !",
                theorie: `
## Erreurs courantes avec Sympy

1. Oublier \`from sympy import I\`
2. Confondre \`log\` (ln) et \`log(x, 10)\`
3. Ne pas simplifier les résultats
        `,
                code: `import sympy as sp
from sympy import I, sqrt, log, exp, simplify, symbols

x = symbols('x')

print("=== Bug 1 : Racine de négatif ===")
# Sympy gère automatiquement !
print(f"sqrt(-1) = {sqrt(-1)}")
print(f"sqrt(-4) = {sqrt(-4)}")

print("\\n=== Bug 2 : log vs log base 10 ===")
print(f"log(10) = {log(10)} (c'est ln !)")
print(f"log(10, 10) = {log(10, 10)} (log base 10)")

print("\\n=== Bug 3 : Simplification ===")
expr = (x**2 - 1) / (x - 1)
print(f"(x²-1)/(x-1) non simplifié : {expr}")
print(f"Simplifié : {simplify(expr)}")

print("\\n=== Bug 4 : e^(iπ) + 1 ===")
from sympy import pi
result = exp(I * pi) + 1
print(f"e^(iπ) + 1 = {simplify(result)}")`,
                exercice: `Pourquoi \`sqrt(-1)\` marche avec Sympy mais pas avec math ?`
        }
};
