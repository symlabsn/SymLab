// MODULE 5 : ALGEBRE 1 (Focus Sympy complet)
export const module5SympyContent = {
    solve_x: {
        title: "Résoudre une équation en x",
        theorie: `
## Résoudre des équations avec Sympy

\`\`\`python
from sympy import symbols, solve, Eq

x = symbols('x')
solve(x**2 - 4, x)     # [−2, 2]
solve(Eq(x + 1, 5), x) # [4]
\`\`\`

Sympy résout **exactement** : pas d'approximations !
        `,
        code: `import sympy as sp
from sympy import symbols, solve, Eq, sqrt, Rational

x = symbols('x')

print("=== Résolution avec Sympy ===")

# Linéaire
eq1 = 2*x + 5 - 11
print(f"2x + 5 = 11 → x = {solve(eq1, x)}")

# Quadratique (racines exactes)
eq2 = x**2 - 2
print(f"x² − 2 = 0 → x = {solve(eq2, x)}")

# Cubique
eq3 = x**3 - 6*x**2 + 11*x - 6
print(f"x³ − 6x² + 11x − 6 = 0 → x = {solve(eq3, x)}")

# Avec Eq (équations explicites)
eq4 = Eq(x**2 + x, 6)
print(f"x² + x = 6 → x = {solve(eq4, x)}")

# Système d'équations
y = symbols('y')
systeme = [x + y - 5, x - y - 1]
print(f"\\nx + y = 5, x − y = 1 → {solve(systeme, [x, y])}")`,
        exercice: `Résolvez $x^3 − 1 = 0$ et identifiez les racines complexes.`
    },

    solve_x_ex: {
        title: "Résoudre en x : Exercices",
        theorie: `
## Résolution symbolique

\`\`\`python
# Avec paramètres
solve(a*x + b, x)  # → [−b/a]

# Vérification
eq.subs(x, solution)  # → 0
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, solve, Eq, simplify

x, a, b, c = symbols('x a b c')

print("=== Formule quadratique symbolique ===")
eq = a*x**2 + b*x + c
solutions = solve(eq, x)
print("ax² + bx + c = 0 :")
for sol in solutions:
    print(f"  x = {sol}")

# Isoler une variable
print("\\n=== Isoler une variable ===")
E, m, c_light = symbols('E m c')
einstein = Eq(E, m * c_light**2)
print(f"E = mc² → m = {solve(einstein, m)}")

# Vérification automatique
print("\\n=== Vérification ===")
eq = x**2 - 5*x + 6
sols = solve(eq, x)
for s in sols:
    verif = eq.subs(x, s)
    print(f"x = {s} : P({s}) = {verif}")`,
        exercice: `Isolez $r$ dans $V = \\frac{4}{3}\\pi r^3$ avec Sympy.`
    },

    expanding: {
        title: "Développer des expressions",
        theorie: `
## expand() avec Sympy

\`\`\`python
from sympy import expand, symbols

expand((x + 1)**2)  # x² + 2x + 1
\`\`\`

Sympy vérifie les identités remarquables !
        `,
        code: `import sympy as sp
from sympy import symbols, expand, factor

x, a, b = symbols('x a b')

print("=== Identités remarquables ===")
print(f"(a + b)² = {expand((a + b)**2)}")
print(f"(a − b)² = {expand((a - b)**2)}")
print(f"(a + b)(a − b) = {expand((a + b)*(a - b))}")
print(f"(a + b)³ = {expand((a + b)**3)}")

print("\\n=== Binôme de Newton ===")
for n in range(6):
    print(f"(x + 1)^{n} = {expand((x + 1)**n)}")

print("\\n=== Vérification expand ↔ factor ===")
expr = x**2 - 1
print(f"x² − 1 factorisé = {factor(expr)}")
print(f"Redéveloppé = {expand(factor(expr))}")`,
        exercice: `Développez $(x + y + z)^2$ et vérifiez le nombre de termes.`
    },

    properties: {
        title: "Propriétés associative, commutative, distributive",
        theorie: `
## Vérification symbolique

Sympy peut prouver des propriétés algébriques :
\`\`\`python
simplify(a + b - (b + a))  # → 0 (commutativité)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, simplify, expand

a, b, c = symbols('a b c')

print("=== Commutativité ===")
print(f"a + b = b + a ? {simplify(a + b - (b + a)) == 0}")
print(f"a × b = b × a ? {simplify(a*b - b*a) == 0}")

print("\\n=== Associativité ===")
print(f"(a + b) + c = a + (b + c) ? {simplify((a+b)+c - (a+(b+c))) == 0}")
print(f"(a × b) × c = a × (b × c) ? {simplify((a*b)*c - a*(b*c)) == 0}")

print("\\n=== Distributivité ===")
gauche = a * (b + c)
droite = a*b + a*c
print(f"a(b + c) = ab + ac ? {simplify(gauche - droite) == 0}")
print(f"Développé : {expand(gauche)}")`,
        exercice: `Prouvez que $(a+b)(c+d) = ac + ad + bc + bd$.`
    },

    gcd: {
        title: "Plus Grand Commun Diviseur (PGCD)",
        theorie: `
## PGCD avec Sympy

\`\`\`python
from sympy import gcd, lcm, igcd

gcd(a, b)     # PGCD symbolique
lcm(a, b)     # PPCM symbolique
igcd(48, 18)  # PGCD numérique
\`\`\`
        `,
        code: `import sympy as sp
from sympy import gcd, lcm, igcd, ilcm, factorint

print("=== PGCD avec Sympy ===")
print(f"PGCD(48, 18) = {igcd(48, 18)}")
print(f"PPCM(12, 18) = {ilcm(12, 18)}")

# Factorisation pour comprendre
print("\\n=== Factorisation ===")
print(f"48 = {factorint(48)}")
print(f"18 = {factorint(18)}")
print("PGCD = produit des facteurs communs avec plus petit exposant")

# PGCD symbolique
a, b = sp.symbols('a b', integer=True, positive=True)
print(f"\\n=== Symbolique ===")
print(f"PGCD(2a, 4a) = {gcd(2*a, 4*a)}")
print(f"PGCD(a², a³) = {gcd(a**2, a**3)}")

# Identité de Bézout
print("\\n=== Bézout ===")
from sympy import igcdex
g, x, y = igcdex(48, 18)
print(f"48×{x} + 18×{y} = {g}")
print(f"Vérif : {48*x + 18*y}")`,
        exercice: `Calculez PGCD(1071, 462) et trouvez x, y tels que 1071x + 462y = PGCD.`
    },

    gcd_ex: {
        title: "PGCD : Exercices",
        theorie: `## Simplification de fractions

PGCD permet de simplifier :
$$\\frac{a}{b} = \\frac{a/\\gcd(a,b)}{b/\\gcd(a,b)}$$
        `,
        code: `import sympy as sp
from sympy import Rational, gcd, igcd

print("=== Simplification avec Sympy ===")

# Sympy simplifie automatiquement !
frac = sp.Rational(48, 64)
print(f"48/64 = {frac}")

# Manuel
num, den = 144, 360
g = igcd(num, den)
print(f"\\n{num}/{den} simplifié :")
print(f"  PGCD = {g}")
print(f"  = {num//g}/{den//g}")

# Fractions symboliques
a, b, c = sp.symbols('a b c', positive=True, integer=True)
print(f"\\n=== Symbolique ===")
print(f"(a·c)/(b·c) simplifié = {sp.simplify((a*c)/(b*c))}")`,
        exercice: `Simplifiez la fraction $\\frac{252}{168}$ en utilisant le PGCD.`
    },

    prime_factor: {
        title: "Décomposition en facteurs premiers",
        theorie: `
## Factorisation avec Sympy

\`\`\`python
from sympy import factorint, primefactors

factorint(360)    # {2: 3, 3: 2, 5: 1}
primefactors(360) # [2, 3, 5]
\`\`\`
        `,
        code: `import sympy as sp
from sympy import factorint, primefactors, isprime, nextprime

n = 360
print(f"=== Factorisation de {n} ===")
facteurs = factorint(n)
print(f"factorint({n}) = {facteurs}")

# Affichage
decomp = " × ".join([f"{p}^{e}" if e > 1 else str(p) 
                     for p, e in facteurs.items()])
print(f"{n} = {decomp}")

# Vérification
produit = 1
for p, e in facteurs.items():
    produit *= p ** e
print(f"Vérification : {produit}")

# Fonctions utiles
print(f"\\n=== Fonctions premiers ===")
print(f"isprime(97) = {isprime(97)}")
print(f"nextprime(100) = {nextprime(100)}")
print(f"primefactors(360) = {primefactors(360)}")`,
        exercice: `Décomposez 2520 et 3600 en facteurs premiers.`
    },

    inequalities_solve: {
        title: "Résoudre des inéquations",
        theorie: `
## Inéquations avec Sympy

\`\`\`python
from sympy import solve, symbols
from sympy.solvers.inequalities import solve_univariate_inequality

solve(x**2 - 4 > 0, x)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, solve, oo, Interval, Union

x = symbols('x', real=True)

print("=== Inéquations avec Sympy ===")

# Linéaire
ineq1 = 2*x + 1 < 5
sol1 = solve(ineq1, x)
print(f"2x + 1 < 5 → {sol1}")

# Quadratique
ineq2 = x**2 - 4 > 0
sol2 = solve(ineq2, x)
print(f"x² − 4 > 0 → {sol2}")

# Avec valeur absolue
ineq3 = sp.Abs(x - 2) < 3
sol3 = solve(ineq3, x)
print(f"|x − 2| < 3 → {sol3}")

# Système d'inéquations
print("\\n=== Système ===")
cond1 = x > -1
cond2 = x < 5
sol = solve([cond1, cond2], x)
print(f"−1 < x < 5 → {sol}")`,
        exercice: `Résolvez $x^2 - 5x + 6 < 0$ avec Sympy.`
    },

    poly_add: {
        title: "Ajouter des polynômes",
        theorie: `
## Polynômes avec Sympy

\`\`\`python
from sympy import Poly, symbols

p = Poly(x**2 + 2*x + 1, x)
p.coeffs()   # Coefficients
p.degree()   # Degré
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, Poly, expand

x = symbols('x')

p1 = x**2 + 2*x + 1
p2 = x**2 - 1

print("=== Addition de polynômes ===")
print(f"P₁(x) = {p1}")
print(f"P₂(x) = {p2}")
print(f"P₁ + P₂ = {expand(p1 + p2)}")
print(f"P₁ − P₂ = {expand(p1 - p2)}")

# Avec Poly
print("\\n=== Classe Poly ===")
P1 = Poly(p1, x)
P2 = Poly(p2, x)
print(f"Coefficients de P₁ : {P1.all_coeffs()}")
print(f"Degré de P₁ : {P1.degree()}")
print(f"P₁ + P₂ = {P1 + P2}")`,
        exercice: `Additionnez $3x^3 - 2x + 5$ et $x^3 + 4x^2 - 3$.`
    },

    poly_mult: {
        title: "Multiplier des polynômes",
        theorie: `
## Multiplication avec Sympy

\`\`\`python
expand(p1 * p2)  # Développe le produit
\`\`\`

Sympy distribue automatiquement !
        `,
        code: `import sympy as sp
from sympy import symbols, expand, Poly

x = symbols('x')

p1 = x + 2
p2 = x - 3

print("=== Multiplication ===")
print(f"({p1}) × ({p2}) = {expand(p1 * p2)}")

# Degré 2 × degré 2
q1 = x**2 + x + 1
q2 = x**2 - x + 1
print(f"\\n({q1}) × ({q2}) = {expand(q1 * q2)}")

# Triple produit
print(f"\\n(x+1)(x+2)(x+3) = {expand((x+1)*(x+2)*(x+3))}")

# Puissance
print(f"\\n(x + 1)⁵ = {expand((x + 1)**5)}")`,
        exercice: `Développez $(x + 1)(x + 2)(x + 3)(x + 4)$ avec Sympy.`
    },

    poly_div: {
        title: "Diviser des polynômes",
        theorie: `
## Division euclidienne

\`\`\`python
from sympy import div, quo, rem

q, r = div(p1, p2, x)  # Quotient et reste
quo(p1, p2, x)         # Quotient seul
rem(p1, p2, x)         # Reste seul
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, div, quo, rem, expand

x = symbols('x')

dividende = x**3 - 2*x**2 + x - 2
diviseur = x - 2

print("=== Division euclidienne ===")
print(f"Dividende : {dividende}")
print(f"Diviseur : {diviseur}")

quotient, reste = div(dividende, diviseur, x)
print(f"Quotient : {quotient}")
print(f"Reste : {reste}")

# Vérification : D = d×q + r
verif = expand(diviseur * quotient + reste)
print(f"\\nVérification : d×q + r = {verif}")
print(f"Égal au dividende ? {verif == dividende}")

# Division de x^4 - 1 par x - 1
print(f"\\n=== (x⁴ − 1) ÷ (x − 1) ===")
q, r = div(x**4 - 1, x - 1, x)
print(f"Quotient : {q}, Reste : {r}")`,
        exercice: `Divisez $x^4 + x^3 + x^2 + x + 1$ par $x + 1$.`
    },

    factoring: {
        title: "Factoriser des polynômes",
        theorie: `
## Factorisation avec Sympy

\`\`\`python
from sympy import factor

factor(x**2 - 4)  # (x-2)(x+2)
\`\`\`

Sympy trouve les facteurs irréductibles !
        `,
        code: `import sympy as sp
from sympy import symbols, factor, expand

x = symbols('x')

print("=== Factorisation ===")

expressions = [
    x**2 - 4,
    x**2 + 2*x + 1,
    x**3 - 1,
    x**4 - 16,
    x**3 - 6*x**2 + 11*x - 6,
]

for expr in expressions:
    fact = factor(expr)
    print(f"{expr} = {fact}")

# Vérification : factor ↔ expand
print("\\n=== Vérification ===")
f = factor(x**3 - 1)
print(f"factor(x³ − 1) = {f}")
print(f"expand({f}) = {expand(f)}")

# Sur plusieurs variables
y = symbols('y')
expr = x**2 - y**2
print(f"\\nx² − y² = {factor(expr)}")`,
        exercice: `Factorisez $x^6 - 1$ complètement.`
    },

    alg1_bug: {
        title: "Chasse aux bugs Algèbre 1 !",
        theorie: `
## Erreurs courantes

1. Oublier \`expand()\` ou \`factor()\`
2. Confusion = et ==
3. Symboles non définis
4. solve() retourne une liste !
        `,
        code: `import sympy as sp
from sympy import symbols, solve, expand, factor, simplify

x = symbols('x')

print("=== Bug 1 : solve retourne une liste ===")
sol = solve(x**2 - 4, x)
print(f"solve(x² − 4) = {sol}")
print(f"Type : {type(sol)}")
print(f"Première solution : {sol[0]}")

print("\\n=== Bug 2 : expand vs simplify ===")
expr = (x + 1)**2
print(f"Sans expand : {expr}")
print(f"Avec expand : {expand(expr)}")

print("\\n=== Bug 3 : factor ne fonctionne pas toujours ===")
expr = x**2 + 1
print(f"factor(x² + 1) sur ℝ = {factor(expr)}")
print(f"Sur ℂ : x² + 1 = (x + I)(x − I)")

print("\\n=== Bug 4 : Vérification ===")
eq = x**2 - 5*x + 6
sol = solve(eq, x)
print(f"Solutions : {sol}")
for s in sol:
    print(f"  P({s}) = {eq.subs(x, s)}")`,
        exercice: `Pourquoi \`factor(x^2 + x + 1)\` ne factorise pas sur ℝ ?`
    }
};
