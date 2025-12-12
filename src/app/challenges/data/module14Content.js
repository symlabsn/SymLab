// MODULE 14 : THEORIE DES NOMBRES (Focus Sympy)
export const module14Content = {
    perfect_nums: {
        title: "Compter les nombres parfaits",
        theorie: `
## Nombres parfaits avec Sympy

Un nombre parfait = somme de ses diviseurs propres.

**6 = 1 + 2 + 3** ✓

\`\`\`python
from sympy import divisors

d = divisors(n)  # Tous les diviseurs
\`\`\`
        `,
        code: `from sympy import divisors, isprime

def est_parfait(n):
    """Vérifie si n est un nombre parfait"""
    divs = divisors(n)
    return sum(divs[:-1]) == n  # Somme des diviseurs propres

print("=== Nombres parfaits < 10000 ===")
parfaits = [n for n in range(2, 10001) if est_parfait(n)]
print(f"Nombres parfaits : {parfaits}")

# Détails
for p in parfaits:
    divs = divisors(p)[:-1]
    print(f"{p} = {' + '.join(map(str, divs))} = {sum(divs)}")

# Formule d'Euclide : 2^(p-1) * (2^p - 1) si 2^p - 1 est premier
print("\\n=== Formule d'Euclide ===")
for p in range(2, 20):
    mersenne = 2**p - 1
    if isprime(mersenne):
        parfait = 2**(p-1) * mersenne
        print(f"p={p}: 2^{p}-1 = {mersenne} (premier) → {parfait}")`,
        exercice: `Trouvez le 5ème nombre parfait avec la formule d'Euclide.`
    },

    pythag_triplets: {
        title: "Triplets pythagoriciens d'Euclide",
        theorie: `
## Formule d'Euclide

Pour $m > n > 0$, $(m, n)$ premiers entre eux :
- $a = m^2 - n^2$
- $b = 2mn$
- $c = m^2 + n^2$

satisfont $a^2 + b^2 = c^2$
        `,
        code: `from sympy import gcd, sqrt, simplify

def triplets_euclide(max_c):
    """Génère les triplets pythagoriciens primitifs"""
    triplets = []
    m = 2
    while True:
        c_min = m**2 + 1
        if c_min > max_c:
            break
        for n in range(1, m):
            if gcd(m, n) == 1 and (m - n) % 2 == 1:
                a = m**2 - n**2
                b = 2 * m * n
                c = m**2 + n**2
                if c <= max_c:
                    triplets.append(tuple(sorted([a, b, c])))
        m += 1
    return sorted(set(triplets))

print("=== Triplets pythagoriciens primitifs (c ≤ 100) ===")
for a, b, c in triplets_euclide(100):
    print(f"({a}, {b}, {c}) : {a}² + {b}² = {a**2} + {b**2} = {c**2} = {c}²")

# Vérification symbolique
from sympy import symbols
m, n = symbols('m n', positive=True)
a = m**2 - n**2
b = 2*m*n
c = m**2 + n**2
print(f"\\nVérification : a² + b² = {simplify(a**2 + b**2)}")
print(f"c² = {simplify(c**2)}")`,
        exercice: `Générez tous les triplets avec $c \\leq 50$.`
    },

    fermat: {
        title: "Le théorème de Fermat",
        theorie: `
## Petit théorème de Fermat

Si $p$ est premier et $\\gcd(a, p) = 1$ :
$$a^{p-1} \\equiv 1 \\pmod{p}$$

Sympy : \`pow(a, p-1, p) == 1\`
        `,
        code: `from sympy import isprime, mod_inverse, factorint

# Petit théorème de Fermat
def test_fermat(a, p):
    if not isprime(p):
        return "p n'est pas premier"
    if a % p == 0:
        return "a divisible par p"
    result = pow(a, p-1, p)
    return f"{a}^{p-1} ≡ {result} (mod {p})"

print("=== Petit théorème de Fermat ===")
for p in [5, 7, 11, 13]:
    print(test_fermat(2, p))

# Inverse modulaire
print("\\n=== Inverse modulaire ===")
print(f"3^(-1) mod 7 = {mod_inverse(3, 7)}")
print(f"Vérif : 3 × 5 mod 7 = {3 * 5 % 7}")

# Dernier théorème de Fermat : x^n + y^n = z^n (n > 2)
print("\\n=== Dernier théorème (pas de solution pour n > 2) ===")
print("x^n + y^n ≠ z^n pour n > 2 et x,y,z entiers positifs")
print("(Prouvé par Andrew Wiles en 1995)")`,
        exercice: `Utilisez Fermat pour calculer $7^{100} \\mod 13$.`
    },

    sequences_plot: {
        title: "Tracer des suites numériques",
        theorie: `
## Suites avec Sympy

\`\`\`python
from sympy import sequence, SeqFormula

a = SeqFormula(n**2, (n, 0, 10))
list(a)  # [0, 1, 4, 9, ...]
\`\`\`
        `,
        code: `from sympy import symbols, SeqFormula, sqrt, Rational
import matplotlib.pyplot as plt

n = symbols('n', integer=True, positive=True)

# Suite arithmétique
a = SeqFormula(3 + 2*n, (n, 0, 10))
print(f"Arithmétique : {list(a)}")

# Suite géométrique
g = SeqFormula(2**n, (n, 0, 10))
print(f"Géométrique : {list(g)}")

# Fibonacci (formule de Binet)
phi = (1 + sqrt(5)) / 2
psi = (1 - sqrt(5)) / 2
fib = SeqFormula((phi**n - psi**n) / sqrt(5), (n, 0, 15))
print(f"\\nFibonacci (Binet) :")
print([int(round(float(x))) for x in list(fib)])

# Tracé
import numpy as np
ns = np.arange(0, 15)
vals = [int(round(float((phi**i - psi**i) / sqrt(5).evalf()))) for i in ns]
plt.stem(ns, vals)
plt.title('Suite de Fibonacci')
plt.xlabel('n'); plt.ylabel('F_n')
plt.show()`,
        exercice: `Tracez la suite $a_n = \\frac{n!}{n^n}$ et étudiez sa convergence.`
    },

    convergent: {
        title: "Exercice : Suites convergentes/divergentes",
        theorie: `
## Limites de suites avec Sympy

\`\`\`python
from sympy import limit, oo

limit(a_n, n, oo)
\`\`\`
        `,
        code: `from sympy import symbols, limit, oo, sqrt, log, factorial, E

n = symbols('n', positive=True)

suites = [
    (1/n, "1/n"),
    ((n+1)/n, "(n+1)/n"),
    (sqrt(n+1) - sqrt(n), "√(n+1) - √n"),
    ((1 + 1/n)**n, "(1 + 1/n)^n"),
    (n/factorial(n), "n/n!"),
    (log(n)/n, "ln(n)/n"),
]

print("=== Limites de suites ===")
for expr, nom in suites:
    lim = limit(expr, n, oo)
    print(f"lim({nom}) = {lim}")

# Suite récurrente
print("\\n=== Suite récurrente ===")
# x_{n+1} = (x_n + 2/x_n) / 2 (méthode de Héron)
print("x_{n+1} = (x_n + 2/x_n)/2 converge vers √2")`,
        exercice: `Montrez que $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^{n} = e$.`
    },

    heron: {
        title: "Méthode de Héron pour les racines carrées",
        theorie: `
## Algorithme de Héron

Pour calculer $\\sqrt{a}$ :
$$x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{a}{x_n}\\right)$$

Convergence **quadratique** vers $\\sqrt{a}$.
        `,
        code: `from sympy import sqrt, Rational, nsimplify

def heron(a, x0, n_iter):
    """Calcule √a par la méthode de Héron"""
    x = Rational(x0)
    print(f"Calcul de √{a} :")
    for i in range(n_iter):
        x = (x + Rational(a)/x) / 2
        erreur = abs(float(x) - float(sqrt(a)))
        print(f"  x_{i+1} = {x} ≈ {float(x):.10f}, erreur = {erreur:.2e}")
    return x

# Exemple : √2
resultat = heron(2, 1, 6)
print(f"\\n√2 exact = {float(sqrt(2)):.15f}")
print(f"Héron    = {float(resultat):.15f}")

# Convergence quadratique
print("\\n=== Convergence quadratique ===")
print("L'erreur est mise au carré à chaque étape !")`,
        exercice: `Utilisez Héron pour calculer $\\sqrt{5}$ avec 10 décimales.`
    },

    heron_mosquito: {
        title: "Exercice : Le vaisseau moustique de Héron",
        theorie: `
## Généralisation : racine n-ième

Pour $\\sqrt[n]{a}$ :
$$x_{k+1} = \\frac{1}{n}\\left[(n-1)x_k + \\frac{a}{x_k^{n-1}}\\right]$$
        `,
        code: `from sympy import Rational, root, nsimplify

def racine_n(a, n, x0, n_iter):
    """Calcule a^(1/n) par généralisation de Héron"""
    x = Rational(x0)
    print(f"Calcul de {a}^(1/{n}) :")
    for i in range(n_iter):
        x = ((n-1)*x + Rational(a)/(x**(n-1))) / n
        print(f"  x_{i+1} ≈ {float(x):.10f}")
    return x

# Racine cubique de 2
print("=== Racine cubique de 2 ===")
resultat = racine_n(2, 3, 1, 8)
print(f"\\n2^(1/3) exact = {float(2**(1/3)):.15f}")

# Racine 5ème de 32
print("\\n=== Racine 5ème de 32 ===")
resultat = racine_n(32, 5, 2, 5)
print(f"32^(1/5) = {float(32**(1/5)):.10f}")`,
        exercice: `Calculez $\\sqrt[4]{16}$ et vérifiez la convergence.`
    },

    smooth_nums: {
        title: "Nombres friables (smooth numbers)",
        theorie: `
## Nombres B-friables

Un nombre est B-friable si tous ses facteurs premiers ≤ B.

Sympy : \`factorint(n)\` donne la factorisation.

Applications : crible, cryptographie.
        `,
        code: `from sympy import factorint, primerange

def est_friable(n, B):
    """Vérifie si n est B-friable"""
    facteurs = factorint(n)
    if not facteurs:
        return True
    return max(facteurs.keys()) <= B

# Nombres 5-friables jusqu'à 100
print("=== Nombres 5-friables ≤ 100 ===")
print("(Tous les facteurs premiers ≤ 5)")
friables = [n for n in range(2, 101) if est_friable(n, 5)]
print(friables[:20], "...")
print(f"Total : {len(friables)}")

# Décomposition
print("\\n=== Exemples de décomposition ===")
for n in [12, 18, 30, 60]:
    print(f"{n} = {factorint(n)}")`,
        exercice: `Comptez les nombres 7-friables ≤ 1000.`
    },

    smooth_ex: {
        title: "Nombres friables : Exercice",
        theorie: `
## Analyse de la friabilité

La fonction $\\Psi(x, y)$ compte les nombres y-friables ≤ x.
        `,
        code: `from sympy import factorint
import matplotlib.pyplot as plt

def psi(x, y):
    """Compte les nombres y-friables ≤ x"""
    return sum(1 for n in range(2, x+1) 
               if all(p <= y for p in factorint(n).keys()))

# Tableau
print("=== Ψ(x, y) : nombres y-friables ≤ x ===")
print("y\\x   100   500   1000")
for y in [2, 5, 10, 20]:
    row = f"{y:3}"
    for x in [100, 500, 1000]:
        row += f"  {psi(x, y):5}"
    print(row)

# Graphique
x_vals = range(2, 201)
y_vals = [psi(x, 10) / x for x in x_vals]  # Proportion
plt.plot(list(x_vals), y_vals)
plt.xlabel('x'); plt.ylabel('Ψ(x, 10) / x')
plt.title('Proportion de 10-friables')
plt.grid()
plt.show()`,
        exercice: `Tracez $\\Psi(1000, y) / 1000$ en fonction de $y$.`
    },

    num_theory_bug: {
        title: "Chasse aux bugs Théorie des nombres !",
        theorie: `
## Erreurs courantes

1. Confusion premier/premier entre eux
2. Oublier le cas n = 1
3. Débordement avec grands nombres
        `,
        code: `from sympy import isprime, gcd, factorint, nextprime

print("=== Bug 1 : Confusion premier / copremiers ===")
print(f"15 est premier ? {isprime(15)}")
print(f"gcd(15, 28) = {gcd(15, 28)} → copremiers")

print("\\n=== Bug 2 : Cas n = 1 ===")
print(f"1 est premier ? {isprime(1)}")  # Non !
print(f"factorint(1) = {factorint(1)}")

print("\\n=== Bug 3 : Grands nombres ===")
# Sympy gère les grands entiers !
n = 10**100 + 267
print(f"isprime(10^100 + 267) = {isprime(n)}")
print(f"Prochain premier après 10^10 : {nextprime(10**10)}")`,
        exercice: `Expliquez pourquoi 1 n'est pas considéré comme premier.`
    }
};
