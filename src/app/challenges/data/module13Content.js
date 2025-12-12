// MODULE 13 : PROBABILITES ET HISTOGRAMMES (Focus Sympy)
export const module13Content = {
    histograms: {
        title: "Histogrammes et densités de probabilité",
        theorie: `
## Sympy.stats : Probabilités symboliques

\`\`\`python
from sympy.stats import Normal, P, E, variance

X = Normal('X', mu, sigma)
P(X > 0)      # Probabilité
E(X)          # Espérance
variance(X)   # Variance
\`\`\`

Sympy permet le calcul **exact** de probabilités !
        `,
        code: `from sympy.stats import Normal, Uniform, P, E, variance, density
from sympy import symbols, oo, integrate, sqrt, pi, exp

mu, sigma, x = symbols('mu sigma x', real=True, positive=True)

# Distribution normale symbolique
X = Normal('X', 0, 1)
print("=== Distribution normale N(0,1) ===")
print(f"E[X] = {E(X)}")
print(f"Var(X) = {variance(X)}")

# Densité
f = density(X)(x)
print(f"Densité f(x) = {f}")

# Probabilités exactes
print(f"\\nP(X > 0) = {P(X > 0)}")
print(f"P(-1 < X < 1) ≈ {float(P((X > -1) & (X < 1))):.4f}")

# Distribution uniforme
Y = Uniform('Y', 0, 1)
print(f"\\n=== Uniforme [0,1] ===")
print(f"E[Y] = {E(Y)}")
print(f"Var(Y) = {variance(Y)}")`,
        exercice: `Calculez $P(X > 2)$ pour $X \\sim N(0, 1)$ avec Sympy.`
    },

    prob_ex: {
        title: "Probabilités : Exercice avec fonctions",
        theorie: `
## Fonctions de densité

Sympy peut intégrer les densités :

$$P(a < X < b) = \\int_a^b f(x)dx$$
        `,
        code: `from sympy import symbols, integrate, exp, sqrt, pi, oo
from sympy.stats import Normal, density

x = symbols('x', real=True)

# Densité normale
mu, sigma = 0, 1
f = (1/(sigma*sqrt(2*pi))) * exp(-(x-mu)**2/(2*sigma**2))

print(f"Densité : f(x) = {f}")

# Vérification : intégrale = 1
total = integrate(f, (x, -oo, oo))
print(f"\\n∫f(x)dx = {total}")

# Espérance E[X] = ∫x f(x)dx
esperance = integrate(x * f, (x, -oo, oo))
print(f"E[X] = {esperance}")

# Variance E[X²] - E[X]²
moment2 = integrate(x**2 * f, (x, -oo, oo))
print(f"E[X²] = {moment2}")
print(f"Var(X) = {moment2 - esperance**2}")`,
        exercice: `Vérifiez que $E[X] = 1/\\lambda$ pour une exponentielle.`
    },

    coin_toss: {
        title: "Lancer de pièce virtuel",
        theorie: `
## Distribution de Bernoulli avec Sympy

\`\`\`python
from sympy.stats import Bernoulli, Binomial

X = Bernoulli('X', p)  # Une pièce
Y = Binomial('Y', n, p) # n lancers
\`\`\`
        `,
        code: `from sympy.stats import Bernoulli, Binomial, P, E, variance, density
from sympy import symbols, Rational, factorial

p = Rational(1, 2)  # Pièce équilibrée

# Un lancer
X = Bernoulli('X', p)
print(f"=== Un lancer de pièce ===")
print(f"P(X = 1) = {P(X == 1)}")
print(f"E[X] = {E(X)}")

# n lancers
n = symbols('n', positive=True, integer=True)
Y = Binomial('Y', 10, p)  # 10 lancers

print(f"\\n=== 10 lancers ===")
print(f"E[Y] = {E(Y)}")
print(f"Var(Y) = {variance(Y)}")

# Probabilité d'exactement k succès
for k in range(11):
    prob = P(Y == k)
    print(f"P(Y = {k}) = {float(prob):.4f}")`,
        exercice: `Calculez P(au moins 7 faces sur 10 lancers) avec pièce biaisée p=0.6.`
    },

    loaded_dice: {
        title: "Exercice : Dés pipés virtuels",
        theorie: `
## Distribution discrète

\`\`\`python
from sympy.stats import FiniteRV

X = FiniteRV('X', {1: p1, 2: p2, ...})
\`\`\`
        `,
        code: `from sympy.stats import FiniteRV, P, E, variance
from sympy import Rational

# Dé équilibré
de_eq = {i: Rational(1, 6) for i in range(1, 7)}
X = FiniteRV('X', de_eq)

print("=== Dé équilibré ===")
print(f"E[X] = {E(X)}")
print(f"Var(X) = {variance(X)}")

# Dé pipé (6 plus probable)
de_pipe = {1: Rational(1,10), 2: Rational(1,10), 3: Rational(1,10),
           4: Rational(1,10), 5: Rational(1,10), 6: Rational(1,2)}
Y = FiniteRV('Y', de_pipe)

print(f"\\n=== Dé pipé ===")
print(f"E[Y] = {E(Y)} = {float(E(Y)):.2f}")
print(f"P(Y = 6) = {P(Y == 6)}")`,
        exercice: `Créez un dé où les faces paires sont 2× plus probables que les impaires.`
    },

    distributions: {
        title: "Construire des distributions aléatoires",
        theorie: `
## Distributions avec Sympy.stats

| Distribution | Sympy |
|--------------|-------|
| Normale | Normal('X', μ, σ) |
| Exponentielle | Exponential('X', λ) |
| Poisson | Poisson('X', λ) |
| Uniforme | Uniform('X', a, b) |
        `,
        code: `from sympy.stats import (Normal, Exponential, Poisson, Uniform,
                           E, variance, P, density)
from sympy import symbols, oo

x, lam = symbols('x lambda', positive=True)

# Exponentielle
X = Exponential('X', 2)
print("=== Exponentielle(λ=2) ===")
print(f"E[X] = {E(X)}")
print(f"Var(X) = {variance(X)}")
print(f"P(X > 1) = {P(X > 1)}")

# Poisson
Y = Poisson('Y', 5)
print(f"\\n=== Poisson(λ=5) ===")
print(f"E[Y] = {E(Y)}")
print(f"P(Y = 3) = {P(Y == 3)}")

# Uniforme continue
Z = Uniform('Z', 0, 10)
print(f"\\n=== Uniforme[0,10] ===")
print(f"E[Z] = {E(Z)}")
print(f"P(3 < Z < 7) = {P((Z > 3) & (Z < 7))}")`,
        exercice: `Calculez $P(X \\leq 3)$ pour $X \\sim Poisson(4)$.`
    },

    normalize_gauss: {
        title: "Exercice : Normaliser vers une Gaussienne",
        theorie: `
## Transformation affine

Si $X \\sim N(\\mu, \\sigma^2)$, alors :
$$Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$$
        `,
        code: `from sympy.stats import Normal, E, variance
from sympy import symbols, sqrt, simplify

mu, sigma = symbols('mu sigma', real=True, positive=True)

# X ~ N(μ, σ²)
X = Normal('X', mu, sigma)
print(f"X ~ N(μ, σ)")
print(f"E[X] = {E(X)}")
print(f"Var(X) = {variance(X)}")

# Standardisation
Z = (X - mu) / sigma
print(f"\\nZ = (X - μ)/σ")
print(f"E[Z] = {simplify(E(Z))}")
print(f"Var(Z) = {simplify(variance(Z))}")

# Transformation inverse
Y = sigma * Z + mu
print(f"\\nY = σZ + μ")
print(f"E[Y] = {simplify(E(Y))}")`,
        exercice: `Si $X \\sim N(100, 15^2)$, trouvez $P(X > 130)$ via standardisation.`
    },

    clt: {
        title: "Le théorème central limite",
        theorie: `
## TCL avec Sympy

La moyenne de $n$ v.a. iid tend vers une normale :
$$\\bar{X}_n \\xrightarrow{\\mathcal{L}} N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$$
        `,
        code: `from sympy import symbols, sqrt, simplify, Rational
from sympy.stats import Uniform, E, variance, Normal, P
import numpy as np
import matplotlib.pyplot as plt

# Uniforme [0, 1]
X = Uniform('X', 0, 1)
print(f"X ~ Uniforme[0,1]")
print(f"E[X] = {E(X)}")
print(f"Var(X) = {variance(X)}")

# Somme de n uniformes → tend vers normale
n = symbols('n', positive=True, integer=True)
mu_sum = n * E(X)
var_sum = n * variance(X)
print(f"\\nSomme de n uniformes :")
print(f"E[S_n] = {mu_sum}")
print(f"Var(S_n) = {var_sum}")

# Simulation numérique
n_vals = [1, 2, 5, 30]
fig, axes = plt.subplots(1, 4, figsize=(14, 3))
for ax, n in zip(axes, n_vals):
    samples = np.mean(np.random.uniform(0, 1, (10000, n)), axis=1)
    ax.hist(samples, bins=30, density=True)
    ax.set_title(f'n = {n}')
plt.suptitle('TCL : moyenne de n uniformes')
plt.tight_layout()
plt.show()`,
        exercice: `Montrez que la moyenne de 100 dés équilibrés est ≈ N(3.5, 0.29).`
    },

    clt_ex: {
        title: "Théorème central limite : Exercice",
        theorie: `## Applications du TCL

- Intervalles de confiance
- Tests d'hypothèses
- Approximation normale
        `,
        code: `from sympy import symbols, sqrt, Rational
from sympy.stats import Normal, P

n = 100  # Taille échantillon
mu = Rational(7, 2)  # E[dé] = 3.5
sigma = sqrt(Rational(35, 12))  # Écart-type d'un dé

# Par TCL, la moyenne suit N(μ, σ²/n)
sigma_mean = sigma / sqrt(n)
X_bar = Normal('Xbar', mu, sigma_mean)

print(f"Moyenne de {n} dés :")
print(f"E[X̄] = {mu} = {float(mu):.2f}")
print(f"σ(X̄) = {float(sigma_mean):.4f}")

# P(X̄ > 3.7)
prob = P(X_bar > Rational(37, 10))
print(f"\\nP(X̄ > 3.7) ≈ {float(prob):.4f}")`,
        exercice: `Calculez P(3.4 < X̄ < 3.6) pour 100 dés.`
    },

    joint_prob: {
        title: "Distributions de probabilité conjointes",
        theorie: `
## Distributions jointes

Sympy peut manipuler plusieurs variables aléatoires.

$$P(X, Y) = P(X) \\cdot P(Y)$$ si indépendantes.
        `,
        code: `from sympy.stats import Normal, E, variance, covariance, P
from sympy import symbols

# Deux normales indépendantes
X = Normal('X', 0, 1)
Y = Normal('Y', 0, 1)

print("=== Deux N(0,1) indépendantes ===")
print(f"E[X + Y] = {E(X + Y)}")
print(f"Var(X + Y) = {variance(X + Y)}")
print(f"Cov(X, Y) = {covariance(X, Y)}")

# Somme de normales
Z = X + Y
print(f"\\nZ = X + Y")
print(f"E[Z] = {E(Z)}")
print(f"Var(Z) = {variance(Z)}")

# Produit
print(f"\\nE[X·Y] = {E(X * Y)}")  # = 0 si indépendantes
print(f"E[X²] = {E(X**2)}")`,
        exercice: `Si $X, Y \\sim N(0,1)$ indépendantes, calculez $E[X^2 + Y^2]$.`
    },

    prob_bug: {
        title: "Chasse aux bugs Probabilités !",
        theorie: `
## Erreurs courantes

1. Confondre densité et probabilité
2. Oublier que P(X = x) = 0 pour continues
3. Variance ≠ écart-type²
        `,
        code: `from sympy.stats import Normal, P, density, E, variance
from sympy import symbols, sqrt

X = Normal('X', 0, 1)
x = symbols('x')

print("=== Bug 1 : P(X = 0) pour continue ===")
# P(X = 0) = 0 pour une variable continue !
print(f"P(X = 0) n'a pas de sens, utiliser P(a < X < b)")

print("\\n=== Bug 2 : Densité vs Probabilité ===")
f = density(X)(x)
print(f"f(0) = {f.subs(x, 0)} (ce n'est PAS une probabilité)")
print(f"f(0) ≈ {float(f.subs(x, 0)):.4f}")

print("\\n=== Bug 3 : σ vs σ² ===")
print(f"Variance = {variance(X)}")
print(f"Écart-type = {sqrt(variance(X))}")
print("Ne pas confondre !")`,
        exercice: `Expliquez pourquoi $f(x) > 1$ est possible pour une densité.`
    }
};
