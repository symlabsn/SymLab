// MODULE 7 : ALGEBRE 2
export const module7Content = {
    sum_prod: {
        title: "Sommes et produits",
        theorie: `
## Notations Sigma et Pi

### Somme (Σ)
$$\\sum_{i=1}^{n} a_i = a_1 + a_2 + ... + a_n$$

### Produit (Π)  
$$\\prod_{i=1}^{n} a_i = a_1 \\times a_2 \\times ... \\times a_n$$

### Formules utiles
- $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$
- $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$
        `,
        code: `import sympy as sp
from sympy import Sum, Product, symbols, factorial

n, i = symbols('n i', integer=True, positive=True)

# Somme des n premiers entiers
somme = Sum(i, (i, 1, n))
print(f"Somme 1+2+...+n = {somme.doit()}")

# Somme des carrés
somme_carres = Sum(i**2, (i, 1, n))
print(f"Somme des carrés = {somme_carres.doit()}")

# Produit (factorielle)
prod = Product(i, (i, 1, n))
print(f"Produit 1*2*...*n = {prod.doit()}")

# Calcul numérique
print(f"\\nSomme 1 à 100 = {sum(range(1, 101))}")
print(f"Formule : 100*101/2 = {100*101//2}")`,
        exercice: `Calculez $\\sum_{k=1}^{50} k^3$ avec Python et vérifiez avec la formule $\\left(\\frac{n(n+1)}{2}\\right)^2$`
    },

    discrete_diff: {
        title: "Différences (dérivée discrète)",
        theorie: `
## Différences finies

La **différence** d'une suite est l'analogue discret de la dérivée :

$$\\Delta a_n = a_{n+1} - a_n$$

### Propriétés
- Polynôme de degré $d$ → différence de degré $d-1$
- Suite arithmétique : $\\Delta a_n$ = constante
- Suite géométrique : $\\Delta a_n = a_n(r-1)$
        `,
        code: `import numpy as np

# Suite : carrés parfaits
n = np.arange(10)
a = n**2
print(f"Suite a_n = n² : {a}")

# Première différence
diff1 = np.diff(a)
print(f"Δa_n : {diff1}")

# Deuxième différence
diff2 = np.diff(diff1)
print(f"Δ²a_n : {diff2}")  # Constant !

# Suite géométrique
r = 2
geo = r ** n
print(f"\\nSuite géométrique 2^n : {geo}")
print(f"Δ(2^n) : {np.diff(geo)}")`,
        exercice: `Montrez que la 3ème différence de $n^3$ est constante.`
    },

    roots_poly: {
        title: "Racines de polynômes",
        theorie: `
## Trouver les racines

Une **racine** d'un polynôme $P(x)$ est une valeur $r$ telle que $P(r) = 0$.

### Théorème fondamental de l'algèbre
Un polynôme de degré $n$ a exactement $n$ racines (comptées avec multiplicité, dans $\\mathbb{C}$).

### Avec Sympy
\`\`\`python
sp.solve(P, x)  # Racines
sp.roots(P, x)  # Avec multiplicités
\`\`\`
        `,
        code: `import sympy as sp
import numpy as np

x = sp.Symbol('x')

# Polynôme de degré 3
P = x**3 - 6*x**2 + 11*x - 6
print(f"P(x) = {P}")

# Racines avec solve
racines = sp.solve(P, x)
print(f"Racines : {racines}")

# Racines avec multiplicités
P2 = (x - 1)**2 * (x - 2)
print(f"\\nP2(x) = {sp.expand(P2)}")
print(f"Racines avec multiplicité : {sp.roots(P2, x)}")

# Vérification
for r in racines:
    print(f"P({r}) = {P.subs(x, r)}")`,
        exercice: `Trouvez les racines de $x^4 - 5x^2 + 4$`
    },

    roots_ex: {
        title: "Racines de polynômes : Exercice",
        theorie: `## Relations de Viète

Pour $ax^2 + bx + c = 0$ avec racines $r_1, r_2$ :
- $r_1 + r_2 = -\\frac{b}{a}$
- $r_1 \\cdot r_2 = \\frac{c}{a}$
        `,
        code: `import sympy as sp

x = sp.Symbol('x')
a, b, c = 1, -5, 6

# Équation x² - 5x + 6 = 0
P = a*x**2 + b*x + c
racines = sp.solve(P, x)
r1, r2 = racines

print(f"Racines : {r1}, {r2}")
print(f"Somme : {r1 + r2} = -b/a = {-b/a}")
print(f"Produit : {r1 * r2} = c/a = {c/a}")`,
        exercice: `Vérifiez Viète pour $x^3 - 6x^2 + 11x - 6 = 0$`
    },

    quadratic: {
        title: "L'équation du second degré",
        theorie: `
## Formule quadratique

Pour $ax^2 + bx + c = 0$ :

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

### Discriminant $\\Delta = b^2 - 4ac$
- $\\Delta > 0$ : 2 racines réelles distinctes
- $\\Delta = 0$ : 1 racine double
- $\\Delta < 0$ : 2 racines complexes conjuguées
        `,
        code: `import sympy as sp
import cmath

def resoudre_quadratique(a, b, c):
    delta = b**2 - 4*a*c
    print(f"Δ = {delta}")
    
    if delta > 0:
        x1 = (-b + delta**0.5) / (2*a)
        x2 = (-b - delta**0.5) / (2*a)
        return x1, x2
    elif delta == 0:
        return -b / (2*a),
    else:
        x1 = (-b + cmath.sqrt(delta)) / (2*a)
        x2 = (-b - cmath.sqrt(delta)) / (2*a)
        return x1, x2

print("x² - 5x + 6 = 0 :", resoudre_quadratique(1, -5, 6))
print("x² - 2x + 1 = 0 :", resoudre_quadratique(1, -2, 1))
print("x² + 1 = 0 :", resoudre_quadratique(1, 0, 1))`,
        exercice: `Résolvez $2x^2 + 3x - 2 = 0$`
    },

    complex_add: {
        title: "Nombres complexes : Addition et soustraction",
        theorie: `
## Nombres complexes

Un nombre complexe : $z = a + bi$ où $i^2 = -1$
- $a$ = partie réelle
- $b$ = partie imaginaire

### Addition
$(a + bi) + (c + di) = (a+c) + (b+d)i$
        `,
        code: `# Nombres complexes en Python
z1 = 3 + 4j
z2 = 1 - 2j

print(f"z1 = {z1}")
print(f"z2 = {z2}")
print(f"z1 + z2 = {z1 + z2}")
print(f"z1 - z2 = {z1 - z2}")

print(f"\\nPartie réelle de z1 : {z1.real}")
print(f"Partie imaginaire de z1 : {z1.imag}")`,
        exercice: `Calculez $(3 + 2i) + (5 - 7i) - (2 + i)$`
    },

    complex_mult: {
        title: "Nombres complexes : Conjugué et multiplication",
        theorie: `
## Conjugué et multiplication

### Conjugué
$\\bar{z} = a - bi$ si $z = a + bi$

### Multiplication
$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$

### Module
$|z| = \\sqrt{a^2 + b^2}$
        `,
        code: `import cmath

z = 3 + 4j

print(f"z = {z}")
print(f"Conjugué = {z.conjugate()}")
print(f"|z| = {abs(z)}")

z1, z2 = 2 + 3j, 1 - 2j
print(f"\\nz1 * z2 = {z1 * z2}")
print(f"z * z̄ = {z * z.conjugate()}")  # = |z|²`,
        exercice: `Calculez $(2 + 3i)(4 - i)$ et vérifiez $z \\cdot \\bar{z} = |z|^2$`
    },

    complex_div: {
        title: "Nombres complexes : Division",
        theorie: `
## Division de complexes

$$\\frac{z_1}{z_2} = \\frac{z_1 \\cdot \\bar{z_2}}{|z_2|^2}$$

On multiplie numérateur et dénominateur par le conjugué.
        `,
        code: `z1 = 3 + 4j
z2 = 1 + 2j

# Division directe
resultat = z1 / z2
print(f"({z1}) / ({z2}) = {resultat}")

# Vérification manuelle
conj_z2 = z2.conjugate()
num = z1 * conj_z2
den = abs(z2)**2
print(f"Manuel : {num} / {den} = {num/den}")`,
        exercice: `Calculez $\\frac{5 + 3i}{2 - i}$`
    },

    complex_graph: {
        title: "Représenter les nombres complexes",
        theorie: `
## Plan complexe

Un nombre complexe $z = a + bi$ est représenté par le point $(a, b)$.

- Axe horizontal : partie réelle
- Axe vertical : partie imaginaire
- $|z|$ : distance à l'origine
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

complexes = [3+4j, -2+1j, 1-3j, -1-2j, 2+0j, 0+2j]

fig, ax = plt.subplots(figsize=(8, 8))
for z in complexes:
    ax.plot(z.real, z.imag, 'o', markersize=10)
    ax.annotate(f'{z}', (z.real+0.1, z.imag+0.1))
    ax.arrow(0, 0, z.real, z.imag, head_width=0.15, alpha=0.3)

ax.axhline(0, color='k'); ax.axvline(0, color='k')
ax.set_xlabel('Re'); ax.set_ylabel('Im')
ax.set_aspect('equal'); ax.grid(True)
plt.title('Plan complexe')
plt.show()`,
        exercice: `Représentez les racines de $z^4 = 1$`
    },

    quad_complex: {
        title: "Équation du 2nd degré avec nombres complexes",
        theorie: `
## Racines complexes

Quand $\\Delta < 0$, les solutions sont complexes conjuguées :

$$x = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$$
        `,
        code: `import sympy as sp

x = sp.Symbol('x')

# x² + 1 = 0
eq1 = x**2 + 1
print(f"x² + 1 = 0 : {sp.solve(eq1, x)}")

# x² + 2x + 5 = 0 (Δ = -16)
eq2 = x**2 + 2*x + 5
sol = sp.solve(eq2, x)
print(f"x² + 2x + 5 = 0 : {sol}")

# Vérification
for s in sol:
    print(f"P({s}) = {eq2.subs(x, s)}")`,
        exercice: `Résolvez $x^2 + 4x + 13 = 0$`
    },

    unit_circle: {
        title: "Le cercle trigonométrique",
        theorie: `
## Cercle unité

Le cercle unité : $|z| = 1$

Tout point s'écrit : $z = \\cos\\theta + i\\sin\\theta = e^{i\\theta}$

### Formule d'Euler
$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

theta = np.linspace(0, 2*np.pi, 100)
x, y = np.cos(theta), np.sin(theta)

plt.figure(figsize=(8, 8))
plt.plot(x, y, 'b-')

# Points remarquables
angles = [0, np.pi/6, np.pi/4, np.pi/3, np.pi/2, np.pi]
for a in angles:
    plt.plot(np.cos(a), np.sin(a), 'ro', markersize=8)

plt.axhline(0, color='k'); plt.axvline(0, color='k')
plt.axis('equal'); plt.grid(True)
plt.title('Cercle trigonométrique')
plt.show()`,
        exercice: `Placez les racines 6èmes de l'unité sur le cercle.`
    },

    nat_exp_log: {
        title: "Exponentielle et logarithme népérien",
        theorie: `
## Fonctions exp et ln

### Exponentielle
$e^x$ : fonction réciproque de $\\ln$

### Logarithme népérien
$\\ln(x)$ : fonction réciproque de $e^x$

### Propriétés
- $e^{\\ln x} = x$
- $\\ln(e^x) = x$
- $\\ln(ab) = \\ln a + \\ln b$
        `,
        code: `import numpy as np
import sympy as sp

x = sp.Symbol('x')

# Propriétés
print(f"exp(ln(5)) = {sp.exp(sp.ln(5)).simplify()}")
print(f"ln(e^3) = {sp.ln(sp.exp(3)).simplify()}")
print(f"ln(a*b) = {sp.expand_log(sp.ln(sp.Symbol('a')*sp.Symbol('b')), force=True)}")

# Dérivées
print(f"\\nd/dx(e^x) = {sp.diff(sp.exp(x), x)}")
print(f"d/dx(ln(x)) = {sp.diff(sp.ln(x), x)}")`,
        exercice: `Simplifiez $\\ln(e^2 \\cdot e^3)$ et $e^{\\ln 4 + \\ln 5}$`
    },

    gaussian_pt: {
        title: "Trouver un point sur une Gaussienne",
        theorie: `
## Distribution gaussienne

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

- $\\mu$ : moyenne
- $\\sigma$ : écart-type
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

def gaussienne(x, mu, sigma):
    return np.exp(-(x-mu)**2/(2*sigma**2)) / (sigma*np.sqrt(2*np.pi))

x = np.linspace(-5, 5, 200)
plt.plot(x, gaussienne(x, 0, 1), label='σ=1')
plt.plot(x, gaussienne(x, 0, 2), label='σ=2')
plt.legend(); plt.grid(); plt.title('Gaussiennes')
plt.show()

# Point particulier
print(f"f(0) pour μ=0, σ=1 : {gaussienne(0, 0, 1):.4f}")`,
        exercice: `Trouvez $x$ tel que $f(x) = 0.1$ pour $\\mu=0, \\sigma=1$`
    },

    gaussian_fam: {
        title: "Exercice : Une famille de Gaussiennes",
        theorie: `## Effet des paramètres

- $\\mu$ décale la courbe
- $\\sigma$ élargit/rétrécit
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-10, 10, 200)

for mu in [-3, 0, 3]:
    for sigma in [0.5, 1, 2]:
        y = np.exp(-(x-mu)**2/(2*sigma**2)) / (sigma*np.sqrt(2*np.pi))
        plt.plot(x, y, label=f'μ={mu}, σ={sigma}')

plt.legend(); plt.grid()
plt.title('Famille de Gaussiennes')
plt.show()`,
        exercice: `Créez une animation de Gaussienne avec μ qui varie.`
    },

    roots_unity: {
        title: "Racines n-ièmes de l'unité",
        theorie: `
## Racines de $z^n = 1$

Les $n$ racines sont :
$$\\omega_k = e^{2i\\pi k/n} = \\cos\\frac{2\\pi k}{n} + i\\sin\\frac{2\\pi k}{n}$$

pour $k = 0, 1, ..., n-1$
        `,
        code: `import numpy as np
import sympy as sp

n = 6  # Racines 6èmes
racines = [np.exp(2j*np.pi*k/n) for k in range(n)]
print(f"Racines {n}èmes de l'unité :")
for k, r in enumerate(racines):
    print(f"  ω_{k} = {r.real:.3f} + {r.imag:.3f}i")

# Avec Sympy
x = sp.Symbol('x')
print(f"\\nSympy : {sp.solve(x**n - 1, x)}")`,
        exercice: `Représentez graphiquement les racines 8èmes de l'unité.`
    },

    log_lin_space: {
        title: "Espaces logarithmique et linéaire",
        theorie: `
## Échelles

### Linéaire
\`np.linspace(a, b, n)\` : n points équidistants

### Logarithmique
\`np.logspace(a, b, n)\` : n points en progression géométrique
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

# Linéaire
lin = np.linspace(1, 100, 10)
print(f"Linéaire : {lin}")

# Logarithmique
log = np.logspace(0, 2, 10)  # 10^0 à 10^2
print(f"Log : {log}")

# Graphique
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
ax1.plot(lin, 'o-'); ax1.set_title('Linéaire')
ax2.semilogy(log, 'o-'); ax2.set_title('Logarithmique')
plt.show()`,
        exercice: `Tracez $y = x^2$ en échelle log-log.`
    },

    log_props: {
        title: "Propriétés du logarithme",
        theorie: `
## Propriétés

- $\\log(ab) = \\log a + \\log b$
- $\\log(a/b) = \\log a - \\log b$
- $\\log(a^n) = n \\log a$
- $\\log_b a = \\frac{\\ln a}{\\ln b}$
        `,
        code: `import sympy as sp
import math

a, b, n = sp.symbols('a b n', positive=True)

print("=== Propriétés du log ===")
print(f"log(a*b) = {sp.expand_log(sp.log(a*b), force=True)}")
print(f"log(a/b) = {sp.expand_log(sp.log(a/b), force=True)}")
print(f"log(a^n) = {sp.expand_log(sp.log(a**n), force=True)}")

# Changement de base
print(f"\\nlog_2(8) = ln(8)/ln(2) = {math.log(8)/math.log(2)}")`,
        exercice: `Simplifiez $\\log_2(32) + \\log_2(4)$`
    },

    sequences: {
        title: "Suites arithmétiques et géométriques",
        theorie: `
## Suites

### Arithmétique : $a_n = a_0 + n \\cdot r$
Somme : $S_n = \\frac{n(a_0 + a_n)}{2}$

### Géométrique : $a_n = a_0 \\cdot r^n$
Somme : $S_n = a_0 \\frac{1-r^n}{1-r}$
        `,
        code: `import numpy as np

# Suite arithmétique
a0, r = 2, 3
arith = [a0 + n*r for n in range(10)]
print(f"Arithmétique : {arith}")
print(f"Somme : {sum(arith)}")

# Suite géométrique
a0, q = 1, 2
geo = [a0 * q**n for n in range(10)]
print(f"\\nGéométrique : {geo}")
print(f"Somme : {sum(geo)}")`,
        exercice: `Calculez la somme des 20 premiers termes de 1, 3, 5, 7, ...`
    },

    orders_mag: {
        title: "Ordres de grandeur et notation scientifique",
        theorie: `
## Notation scientifique

$a \\times 10^n$ où $1 \\leq |a| < 10$

### Exemples
- Vitesse lumière : $3 \\times 10^8$ m/s
- Masse électron : $9.1 \\times 10^{-31}$ kg
        `,
        code: `# Notation scientifique
c = 3e8  # 3 × 10^8
m_e = 9.1e-31

print(f"Vitesse lumière : {c:.2e} m/s")
print(f"Masse électron : {m_e:.2e} kg")

# Comparaison d'ordres
import math
print(f"\\nlog10(c) = {math.log10(c):.1f}")
print(f"log10(m_e) = {math.log10(m_e):.1f}")`,
        exercice: `Exprimez le nombre d'Avogadro en notation scientifique.`
    },

    min_max: {
        title: "Extrema de fonctions",
        theorie: `
## Trouver les extrema

1. Calculer $f'(x) = 0$
2. Points critiques
3. Tester $f''(x)$ : + min, - max
        `,
        code: `import sympy as sp

x = sp.Symbol('x')
f = x**3 - 3*x + 1

# Dérivée et points critiques
fp = sp.diff(f, x)
critiques = sp.solve(fp, x)
print(f"f(x) = {f}")
print(f"f'(x) = {fp}")
print(f"Points critiques : {critiques}")

# Test avec f''
fpp = sp.diff(fp, x)
for c in critiques:
    val = fpp.subs(x, c)
    nature = "minimum" if val > 0 else "maximum"
    print(f"x = {c} : f''({c}) = {val} → {nature}")`,
        exercice: `Trouvez les extrema de $f(x) = x^4 - 2x^2$`
    },

    even_odd: {
        title: "Fonctions paires et impaires",
        theorie: `
## Parité

### Paire : $f(-x) = f(x)$
Symétrique par rapport à l'axe y. Ex: $\\cos(x), x^2$

### Impaire : $f(-x) = -f(x)$
Symétrique par rapport à l'origine. Ex: $\\sin(x), x^3$
        `,
        code: `import sympy as sp

x = sp.Symbol('x')

def parite(f):
    if sp.simplify(f.subs(x, -x) - f) == 0:
        return "paire"
    elif sp.simplify(f.subs(x, -x) + f) == 0:
        return "impaire"
    return "ni paire ni impaire"

fonctions = [x**2, x**3, sp.cos(x), sp.sin(x), x**2 + x]
for f in fonctions:
    print(f"{f} : {parite(f)}")`,
        exercice: `Déterminez la parité de $f(x) = \\frac{x}{x^2+1}$`
    },

    alg2_bug: {
        title: "Chasse aux bugs Algèbre 2 !",
        theorie: `
## Erreurs courantes

1. Oublier $i = \\sqrt{-1}$
2. Division par zéro dans les fractions
3. Logarithme de nombres négatifs
        `,
        code: `import cmath
import math

# Bug 1 : sqrt de négatif
print("sqrt(-1) avec cmath :", cmath.sqrt(-1))  # OK

# Bug 2 : log de négatif
print("log(-1) complexe :", cmath.log(-1))  # = iπ

# Bug 3 : précision flottante
print("e^(iπ) + 1 :", cmath.exp(1j * cmath.pi) + 1)  # ≈ 0`,
        exercice: `Pourquoi \`math.sqrt(-1)\` donne une erreur ?`
    }
};
