// Curriculum Python Scientifique Complet
// Focus majeur sur SymPy pour le calcul symbolique

export const pythonCurriculum = [
    {
        id: 'intro',
        title: '1. Introduction à Python',
        icon: '🐍',
        color: '#00F5D4',
        description: 'Découvrez Python, le langage préféré des scientifiques',
        duration: '2 heures',
        lessons: [
            {
                title: 'Histoire et philosophie de Python',
                duration: '20 min',
                analogy: '🏛️ Python est comme un langage humain : simple, clair et universel',
                content: `L'histoire fascinante de Python

Python a été créé en 1991 par Guido van Rossum, un programmeur néerlandais. Le nom ne vient pas du serpent, mais de la série comique britannique "Monty Python's Flying Circus" !

Pourquoi Python est-il spécial ?

Imaginez que vous devez expliquer une recette de cuisine :
- En C++ : Vous devez décrire chaque ustensile, chaque geste en détail
- En Python : Vous dites simplement "mélanger les ingrédients"

Le Zen de Python (sa philosophie) :
- "Beau vaut mieux que laid" → Le code doit être élégant
- "Simple vaut mieux que complexe" → Pas de complications inutiles
- "La lisibilité compte" → Tout le monde doit comprendre

Analogie : Python est comme le français comparé au latin. Le latin est précis mais complexe, le français est plus accessible tout en restant puissant.`,
                keyPoints: [
                    'Créé en 1991 par Guido van Rossum',
                    'Nommé d\'après Monty Python (pas le serpent !)',
                    'Philosophie : simplicité et lisibilité',
                    'Devenu le langage #1 en science et IA'
                ],
                code: `# Afficher le Zen de Python
import this

# Résultat : 19 principes de design de Python
# "Beautiful is better than ugly"
# "Simple is better than complex"
# etc.`,
                tip: '💡 Tapez "import this" dans Python pour voir toute la philosophie !'
            },
            {
                title: 'Pourquoi Python pour les sciences ?',
                duration: '25 min',
                analogy: '🔬 Python est comme un couteau suisse pour scientifiques',
                content: `Python : L'outil parfait pour la science

Imaginez que vous êtes un scientifique avec différents outils :
- Une calculatrice (pour les calculs)
- Un grapheur (pour les courbes)
- Un cahier de laboratoire (pour noter)
- Un microscope (pour analyser)

Python combine TOUT cela en un seul outil !

Pourquoi les scientifiques adorent Python :

1. Syntaxe mathématique naturelle
   - En maths : E = mc²
   - En Python : E = m * c**2
   → Presque identique !

2. Bibliothèques scientifiques puissantes
   - NumPy : Calculs sur des millions de nombres en 1 seconde
   - SymPy : Résout des équations comme vous le feriez à la main
   - Matplotlib : Crée des graphiques de qualité publication

3. Prototypage rapide
   - Testez une idée en 5 minutes au lieu de 5 heures
   - Modifiez facilement votre code

Analogie : Si Excel est une calculatrice, Python est un ordinateur quantique. Vous pouvez faire tout ce qu'Excel fait, mais aussi infiniment plus !

Domaines d'application :
- 🌌 Astrophysique (NASA utilise Python)
- 🧬 Biologie (analyse ADN)
- ⚛️ Physique quantique
- 🤖 Intelligence artificielle
- 📊 Analyse de données`,
                keyPoints: [
                    'Syntaxe proche des mathématiques',
                    'Bibliothèques scientifiques ultra-puissantes',
                    'Utilisé par la NASA, le CERN, Google',
                    'Gratuit et open-source'
                ],
                code: `# Exemple : Résoudre une équation en UNE ligne
from sympy import solve, symbols

x = symbols('x')
# Résoudre x² - 4 = 0
solution = solve(x**2 - 4, x)
print(solution)  # [-2, 2]

# En maths, cela prendrait plusieurs étapes !
# Avec Python : instantané et exact !`,
                tip: '🎯 Python peut résoudre en 1 seconde ce qui prendrait 10 minutes à la main !'
            }
        ]
    },

    {
        id: 'sympy-complete',
        title: '5. SymPy - Maîtrise Complète du Calcul Symbolique',
        icon: '∑',
        color: '#00F5D4',
        description: 'Le module le plus puissant pour les mathématiques symboliques',
        duration: '12 heures',
        isHighlight: true,
        lessons: [
            {
                title: 'Introduction au calcul symbolique',
                duration: '45 min',
                analogy: '🎯 SymPy fait des maths EXACTES, pas approximatives',
                content: `Comprendre le calcul symbolique

Différence fondamentale :
- NumPy (numérique) : 1/3 = 0.333333... (approximation)
- SymPy (symbolique) : 1/3 = 1/3 (exact !)

Analogie : C'est comme la différence entre :
- Mesurer avec une règle (numérique, approximatif)
- Utiliser la géométrie pure (symbolique, exact)

Pourquoi c'est révolutionnaire ?

En mathématiques, vous manipulez des symboles :
- x, y, z sont des variables
- π est exactement π, pas 3.14159...
- √2 reste √2, pas 1.41421...

SymPy vous permet de faire EXACTEMENT ce que vous faites sur papier, mais automatiquement !

Applications :
- Résoudre des équations algébriques
- Calculer des dérivées et intégrales
- Simplifier des expressions complexes
- Résoudre des équations différentielles
- Faire de l'algèbre linéaire symbolique`,
                keyPoints: [
                    'Calcul exact vs approximatif',
                    'Manipulation de symboles mathématiques',
                    'Comme faire des maths sur papier',
                    'Indispensable pour la physique théorique'
                ],
                code: `from sympy import *

# Créer des symboles
x, y, z = symbols('x y z')
alpha, beta = symbols('alpha beta', real=True)

# Expressions symboliques
expr = x**2 + 2*x + 1
print(f"Expression : {expr}")

# Simplification
simplifie = simplify((x**2 - 1)/(x - 1))
print(f"Simplifié : {simplifie}")  # x + 1

# Développement
developpe = expand((x + y)**3)
print(f"(x+y)³ = {developpe}")

# Factorisation
factorise = factor(x**2 - 4)
print(f"Factorisé : {factorise}")  # (x-2)(x+2)

# Comparaison NumPy vs SymPy
import numpy as np
print(f"NumPy : 1/3 = {np.array(1/3)}")  # 0.333...
print(f"SymPy : 1/3 = {Rational(1, 3)}")  # 1/3 (exact)`,
                tip: '⚡ SymPy garde TOUJOURS la précision exacte, crucial en physique !'
            },

            {
                title: 'Algèbre : Simplification et manipulation',
                duration: '60 min',
                analogy: '🧮 SymPy est votre assistant mathématique personnel',
                content: `Maîtriser l'algèbre symbolique

SymPy peut faire TOUTES les manipulations algébriques que vous faites à la main :

1. Simplification
   - Réduire des expressions complexes
   - Trouver la forme la plus simple

2. Développement
   - (a + b)² = a² + 2ab + b²
   - (a + b)³ = a³ + 3a²b + 3ab² + b³

3. Factorisation
   - x² - 4 = (x-2)(x+2)
   - x² + 5x + 6 = (x+2)(x+3)

4. Substitution
   - Remplacer x par une valeur ou une autre expression

Analogie : Imaginez un professeur de maths qui fait tous vos calculs instantanément, sans erreur, et qui vous montre chaque étape !`,
                keyPoints: [
                    'simplify() pour simplifier',
                    'expand() pour développer',
                    'factor() pour factoriser',
                    'subs() pour substituer'
                ],
                code: `from sympy import *

x, y, a, b = symbols('x y a b')

print("=== SIMPLIFICATION ===")
# Expression complexe
expr1 = (x**2 - 1)/(x - 1)
print(f"Avant : {expr1}")
print(f"Après : {simplify(expr1)}")  # x + 1

# Trigonométrie
expr2 = sin(x)**2 + cos(x)**2
print(f"sin²(x) + cos²(x) = {simplify(expr2)}")  # 1

print("\\n=== DÉVELOPPEMENT ===")
# Binôme de Newton
print(f"(x+y)² = {expand((x+y)**2)}")
print(f"(x+y)³ = {expand((x+y)**3)}")
print(f"(x+y)⁴ = {expand((x+y)**4)}")

# Produit remarquable
print(f"(x+2)(x+3) = {expand((x+2)*(x+3))}")

print("\\n=== FACTORISATION ===")
# Différence de carrés
print(f"x² - 4 = {factor(x**2 - 4)}")

# Trinôme
print(f"x² + 5x + 6 = {factor(x**2 + 5*x + 6)}")

# Polynôme complexe
poly = x**3 - 6*x**2 + 11*x - 6
print(f"{poly} = {factor(poly)}")

print("\\n=== SUBSTITUTION ===")
expr = x**2 + 2*x + 1
# Remplacer x par 5
resultat = expr.subs(x, 5)
print(f"Pour x=5 : {resultat}")

# Remplacer x par une autre expression
resultat2 = expr.subs(x, y + 1)
print(f"Pour x=y+1 : {resultat2}")`,
                tip: '🎨 Utilisez together() pour mettre au même dénominateur !'
            },

            {
                title: 'Résolution d\'équations algébriques',
                duration: '75 min',
                analogy: '🔍 SymPy trouve TOUTES les solutions, même complexes',
                content: `Résoudre des équations avec SymPy

SymPy peut résoudre :
- Équations linéaires : 2x + 3 = 7
- Équations polynomiales : x² - 5x + 6 = 0
- Équations transcendantes : e^x = 2
- Systèmes d'équations
- Équations avec paramètres

Analogie : C'est comme avoir un super-calculateur qui teste toutes les possibilités instantanément et vous donne TOUTES les solutions !

Types de solutions :
- Solutions réelles
- Solutions complexes
- Solutions paramétriques
- Solutions multiples`,
                keyPoints: [
                    'solve() résout presque tout',
                    'Eq() pour créer des équations',
                    'solveset() pour ensembles de solutions',
                    'Trouve solutions réelles ET complexes'
                ],
                code: `from sympy import *

x, y, a, b, c = symbols('x y a b c')

print("=== ÉQUATIONS SIMPLES ===")
# Équation linéaire
eq1 = Eq(2*x + 3, 7)
sol1 = solve(eq1, x)
print(f"2x + 3 = 7 → x = {sol1}")

# Équation du second degré
eq2 = Eq(x**2 - 5*x + 6, 0)
sol2 = solve(eq2, x)
print(f"x² - 5x + 6 = 0 → x = {sol2}")

print("\\n=== ÉQUATIONS AVEC PARAMÈTRES ===")
# Formule quadratique générale
eq_quad = a*x**2 + b*x + c
solutions = solve(eq_quad, x)
print(f"ax² + bx + c = 0 :")
for i, sol in enumerate(solutions, 1):
    print(f"  x{i} = {sol}")

print("\\n=== SYSTÈMES D'ÉQUATIONS ===")
# Système linéaire 2x2
eq1 = Eq(x + y, 5)
eq2 = Eq(x - y, 1)
systeme = solve([eq1, eq2], [x, y])
print(f"x + y = 5")
print(f"x - y = 1")
print(f"Solution : {systeme}")

# Système non-linéaire
eq1 = Eq(x**2 + y**2, 25)
eq2 = Eq(x + y, 7)
systeme2 = solve([eq1, eq2], [x, y])
print(f"\\nx² + y² = 25")
print(f"x + y = 7")
print(f"Solutions : {systeme2}")

print("\\n=== ÉQUATIONS COMPLEXES ===")
# Racines de l'unité
eq_complex = x**3 - 1
sol_complex = solve(eq_complex, x)
print(f"x³ = 1 → x = {sol_complex}")

# Équation trigonométrique
eq_trig = sin(x) - Rational(1, 2)
sol_trig = solve(eq_trig, x)
print(f"sin(x) = 1/2 → x = {sol_trig}")

print("\\n=== INÉQUATIONS ===")
# Résoudre x² - 4 > 0
ineq = x**2 - 4 > 0
sol_ineq = solve(ineq, x)
print(f"x² - 4 > 0 → {sol_ineq}")`,
                tip: '🔬 Pour les équations physiques, utilisez des symboles avec unités !'
            },

            {
                title: 'Calcul différentiel : Dérivées',
                duration: '60 min',
                analogy: '📈 La dérivée mesure la vitesse de changement',
                content: `Maîtriser les dérivées avec SymPy

La dérivée, c'est :
- La pente d'une courbe en un point
- La vitesse instantanée
- Le taux de variation

Analogie : Si vous conduisez une voiture :
- Position = fonction f(t)
- Vitesse = dérivée f'(t)
- Accélération = dérivée seconde f''(t)

SymPy calcule les dérivées EXACTEMENT, avec toutes les règles :
- Règle de la puissance : d/dx(x^n) = nx^(n-1)
- Règle du produit : d/dx(uv) = u'v + uv'
- Règle de la chaîne : d/dx(f(g(x))) = f'(g(x))·g'(x)
- Règle du quotient : d/dx(u/v) = (u'v - uv')/v²

Applications en physique :
- Cinématique : position → vitesse → accélération
- Électricité : charge → courant
- Thermodynamique : énergie → puissance`,
                keyPoints: [
                    'diff(f, x) pour dériver',
                    'diff(f, x, n) pour dérivée n-ième',
                    'Dérivées partielles avec plusieurs variables',
                    'Applications physiques directes'
                ],
                code: `from sympy import *

x, t, a, b = symbols('x t a b')

print("=== DÉRIVÉES SIMPLES ===")
# Polynômes
f1 = x**3 + 2*x**2 - 5*x + 1
df1 = diff(f1, x)
print(f"f(x) = {f1}")
print(f"f'(x) = {df1}")

# Dérivées d'ordre supérieur
d2f1 = diff(f1, x, 2)
d3f1 = diff(f1, x, 3)
print(f"f''(x) = {d2f1}")
print(f"f'''(x) = {d3f1}")

print("\\n=== FONCTIONS TRIGONOMÉTRIQUES ===")
f2 = sin(x)
print(f"d/dx[sin(x)] = {diff(f2, x)}")

f3 = cos(x)
print(f"d/dx[cos(x)] = {diff(f3, x)}")

f4 = tan(x)
print(f"d/dx[tan(x)] = {diff(f4, x)}")

print("\\n=== FONCTIONS EXPONENTIELLES ===")
f5 = exp(x)
print(f"d/dx[e^x] = {diff(f5, x)}")

f6 = exp(x**2)
print(f"d/dx[e^(x²)] = {diff(f6, x)}")

f7 = log(x)
print(f"d/dx[ln(x)] = {diff(f7, x)}")

print("\\n=== RÈGLE DE LA CHAÎNE ===")
# Composition de fonctions
f8 = sin(x**2)
print(f"d/dx[sin(x²)] = {diff(f8, x)}")

f9 = (x**2 + 1)**5
print(f"d/dx[(x²+1)⁵] = {diff(f9, x)}")

print("\\n=== RÈGLE DU PRODUIT ===")
f10 = x * sin(x)
print(f"d/dx[x·sin(x)] = {diff(f10, x)}")

print("\\n=== RÈGLE DU QUOTIENT ===")
f11 = sin(x) / x
print(f"d/dx[sin(x)/x] = {diff(f11, x)}")

print("\\n=== APPLICATION : CINÉMATIQUE ===")
# Position en fonction du temps
s = t**3 - 6*t**2 + 9*t
v = diff(s, t)  # Vitesse
a = diff(v, t)  # Accélération

print(f"Position : s(t) = {s}")
print(f"Vitesse : v(t) = {v}")
print(f"Accélération : a(t) = {a}")

# À t=2s
t_val = 2
print(f"\\nÀ t={t_val}s :")
print(f"  s = {s.subs(t, t_val)} m")
print(f"  v = {v.subs(t, t_val)} m/s")
print(f"  a = {a.subs(t, t_val)} m/s²")

print("\\n=== DÉRIVÉES PARTIELLES ===")
# Fonction de plusieurs variables
f12 = x**2 * y + x * y**2
print(f"f(x,y) = {f12}")
print(f"∂f/∂x = {diff(f12, x)}")
print(f"∂f/∂y = {diff(f12, y)}")`,
                tip: '⚡ Utilisez lambdify() pour convertir en fonction Python rapide !'
            },

            {
                title: 'Calcul intégral : Primitives et intégrales',
                duration: '75 min',
                analogy: '📊 L\'intégrale calcule l\'aire sous une courbe',
                content: `Maîtriser l'intégration avec SymPy

L'intégrale, c'est :
- L'aire sous une courbe
- L'inverse de la dérivée
- L'accumulation d'une quantité

Analogie : Si la dérivée est la vitesse, l'intégrale est la distance parcourue !

Types d'intégrales :
1. Intégrale indéfinie (primitive) : ∫ f(x) dx
2. Intégrale définie : ∫[a,b] f(x) dx
3. Intégrales multiples : ∫∫ f(x,y) dx dy
4. Intégrales impropres : ∫[0,∞] f(x) dx

SymPy peut intégrer :
- Polynômes
- Fonctions trigonométriques
- Exponentielles et logarithmes
- Fonctions rationnelles
- Et bien plus !

Applications physiques :
- Travail d'une force : W = ∫ F dx
- Charge électrique : Q = ∫ I dt
- Centre de masse
- Moment d'inertie`,
                keyPoints: [
                    'integrate(f, x) pour primitive',
                    'integrate(f, (x, a, b)) pour définie',
                    'SymPy trouve des primitives exactes',
                    'Applications directes en physique'
                ],
                code: `from sympy import *

x, t, a, b = symbols('x t a b')

print("=== INTÉGRALES INDÉFINIES (PRIMITIVES) ===")
# Polynômes
f1 = x**2
F1 = integrate(f1, x)
print(f"∫ x² dx = {F1} + C")

f2 = 3*x**2 + 2*x + 1
F2 = integrate(f2, x)
print(f"∫ (3x² + 2x + 1) dx = {F2} + C")

print("\\n=== FONCTIONS TRIGONOMÉTRIQUES ===")
print(f"∫ sin(x) dx = {integrate(sin(x), x)} + C")
print(f"∫ cos(x) dx = {integrate(cos(x), x)} + C")
print(f"∫ sec²(x) dx = {integrate(1/cos(x)**2, x)} + C")

print("\\n=== FONCTIONS EXPONENTIELLES ===")
print(f"∫ e^x dx = {integrate(exp(x), x)} + C")
print(f"∫ e^(2x) dx = {integrate(exp(2*x), x)} + C")
print(f"∫ 1/x dx = {integrate(1/x, x)} + C")

print("\\n=== INTÉGRALES DÉFINIES ===")
# Aire sous x² de 0 à 1
I1 = integrate(x**2, (x, 0, 1))
print(f"∫₀¹ x² dx = {I1}")  # 1/3 (exact!)

# Aire sous sin(x) de 0 à π
I2 = integrate(sin(x), (x, 0, pi))
print(f"∫₀^π sin(x) dx = {I2}")  # 2

print("\\n=== INTÉGRALES REMARQUABLES ===")
# Gaussienne
I3 = integrate(exp(-x**2), (x, -oo, oo))
print(f"∫₋∞^∞ e^(-x²) dx = {I3}")  # √π

# Fonction de Dirichlet
I4 = integrate(sin(x)/x, (x, 0, oo))
print(f"∫₀^∞ sin(x)/x dx = {I4}")  # π/2

print("\\n=== INTÉGRALES PAR PARTIES ===")
# ∫ x·e^x dx
f3 = x * exp(x)
F3 = integrate(f3, x)
print(f"∫ x·e^x dx = {F3} + C")

# ∫ x·sin(x) dx
f4 = x * sin(x)
F4 = integrate(f4, x)
print(f"∫ x·sin(x) dx = {F4} + C")

print("\\n=== INTÉGRALES DOUBLES ===")
y = symbols('y')
# ∫∫ x·y dx dy sur [0,1]×[0,1]
f5 = x * y
I5 = integrate(f5, (x, 0, 1), (y, 0, 1))
print(f"∫₀¹ ∫₀¹ xy dx dy = {I5}")

print("\\n=== APPLICATION : TRAVAIL D'UNE FORCE ===")
# Force variable F(x) = 2x + 3
F = 2*x + 3
# Travail de x=0 à x=10
W = integrate(F, (x, 0, 10))
print(f"Force : F(x) = {F} N")
print(f"Travail (0→10m) : W = {W} J")

print("\\n=== APPLICATION : CENTRE DE MASSE ===")
# Barre de densité ρ(x) = x
rho = x
# Masse totale
M = integrate(rho, (x, 0, 1))
# Position du centre de masse
x_cm = integrate(x * rho, (x, 0, 1)) / M
print(f"Densité : ρ(x) = {rho}")
print(f"Masse totale : M = {M}")
print(f"Centre de masse : x_cm = {x_cm}")`,
                tip: '🎯 Pour vérifier : dérivez le résultat, vous devez retrouver la fonction !'
            },

            {
                title: 'Équations différentielles ordinaires (EDO)',
                duration: '90 min',
                analogy: '🌊 Les EDO décrivent comment les choses changent dans le temps',
                content: `Résoudre des équations différentielles avec SymPy

Une équation différentielle relie une fonction à ses dérivées.

Analogie : C'est comme une recette qui dit "la vitesse de croissance dépend de la taille actuelle"

Types d'EDO :
1. Premier ordre : dy/dx = f(x, y)
2. Second ordre : d²y/dx² = f(x, y, dy/dx)
3. Ordre supérieur
4. Systèmes d'EDO

Applications cruciales :
- Physique : mouvement, oscillations, circuits
- Chimie : cinétique des réactions
- Biologie : croissance des populations
- Ingénierie : systèmes dynamiques

EDO classiques :
- Croissance exponentielle : dy/dt = ky
- Oscillateur harmonique : d²y/dt² + ω²y = 0
- Chute libre avec frottement : m(dv/dt) = -mg - kv
- Circuit RC : RC(dV/dt) + V = E`,
                keyPoints: [
                    'dsolve() résout les EDO',
                    'Function() pour déclarer une fonction inconnue',
                    'ics={} pour conditions initiales',
                    'Crucial pour la physique et l\'ingénierie'
                ],
                code: `from sympy import *

t = symbols('t')
y = Function('y')
v = Function('v')

print("=== EDO DU PREMIER ORDRE ===")
# Croissance exponentielle : dy/dt = y
eq1 = Eq(y(t).diff(t), y(t))
sol1 = dsolve(eq1, y(t))
print(f"dy/dt = y")
print(f"Solution : {sol1}")

# Avec condition initiale y(0) = 1
sol1_ci = dsolve(eq1, y(t), ics={y(0): 1})
print(f"Avec y(0)=1 : {sol1_ci}")

print("\\n=== OSCILLATEUR HARMONIQUE ===")
# d²y/dt² + ω²y = 0
omega = symbols('omega', positive=True)
eq2 = Eq(y(t).diff(t, 2) + omega**2*y(t), 0)
sol2 = dsolve(eq2, y(t))
print(f"d²y/dt² + ω²y = 0")
print(f"Solution : {sol2}")

# Avec conditions initiales
sol2_ci = dsolve(eq2, y(t), ics={y(0): 1, y(t).diff(t).subs(t, 0): 0})
print(f"Avec y(0)=1, y'(0)=0 : {sol2_ci}")

print("\\n=== CHUTE LIBRE AVEC FROTTEMENT ===")
# m(dv/dt) = -mg - kv
m, g, k = symbols('m g k', positive=True)
eq3 = Eq(m*v(t).diff(t), -m*g - k*v(t))
sol3 = dsolve(eq3, v(t))
print(f"m(dv/dt) = -mg - kv")
print(f"Solution : {sol3}")

print("\\n=== CIRCUIT RC ===")
# RC(dV/dt) + V = E
R, C, E = symbols('R C E', positive=True)
V = Function('V')
eq4 = Eq(R*C*V(t).diff(t) + V(t), E)
sol4 = dsolve(eq4, V(t))
print(f"RC(dV/dt) + V = E")
print(f"Solution : {sol4}")

print("\\n=== ÉQUATION DE BERNOULLI ===")
# dy/dt + y = y²
eq5 = Eq(y(t).diff(t) + y(t), y(t)**2)
sol5 = dsolve(eq5, y(t))
print(f"dy/dt + y = y²")
print(f"Solution : {sol5}")

print("\\n=== SYSTÈME D'EDO ===")
# Prédateur-Proie (Lotka-Volterra)
x = Function('x')
y = Function('y')
a, b, c, d = symbols('a b c d', positive=True)

eq_x = Eq(x(t).diff(t), a*x(t) - b*x(t)*y(t))
eq_y = Eq(y(t).diff(t), -c*y(t) + d*x(t)*y(t))

print(f"dx/dt = ax - bxy  (proies)")
print(f"dy/dt = -cy + dxy  (prédateurs)")
print("(Système non-linéaire, solution numérique recommandée)")

print("\\n=== EDO D'ORDRE SUPÉRIEUR ===")
# d³y/dt³ + d²y/dt² - 2y = 0
eq6 = Eq(y(t).diff(t, 3) + y(t).diff(t, 2) - 2*y(t), 0)
sol6 = dsolve(eq6, y(t))
print(f"d³y/dt³ + d²y/dt² - 2y = 0")
print(f"Solution : {sol6}")`,
                tip: '🔬 Pour les EDO complexes, utilisez aussi scipy.integrate.odeint !'
            },

            {
                title: 'Algèbre linéaire symbolique',
                duration: '75 min',
                analogy: '🎯 Les matrices sont des transformations géométriques',
                content: `Maîtriser l'algèbre linéaire avec SymPy

Les matrices et vecteurs sont partout en science :
- Transformations géométriques
- Systèmes d'équations linéaires
- Mécanique quantique
- Graphes et réseaux
- Analyse de données

Analogie : Une matrice est comme une machine qui transforme des vecteurs. Par exemple, une rotation, une mise à l'échelle, etc.

Opérations matricielles :
- Addition, multiplication
- Déterminant
- Inverse
- Valeurs propres et vecteurs propres
- Diagonalisation
- Décomposition (LU, QR, SVD)

Applications :
- Résolution de systèmes linéaires
- Analyse de stabilité
- Transformations 3D (graphisme)
- Mécanique quantique (opérateurs)`,
                keyPoints: [
                    'Matrix() pour créer des matrices',
                    'det() pour déterminant',
                    'inv() pour inverse',
                    'eigenvals() et eigenvects() pour valeurs/vecteurs propres'
                ],
                code: `from sympy import *

print("=== CRÉATION DE MATRICES ===")
# Matrice 2x2
M = Matrix([[1, 2], [3, 4]])
print(f"M = \\n{M}")

# Matrice symbolique
a, b, c, d = symbols('a b c d')
M_sym = Matrix([[a, b], [c, d]])
print(f"\\nM_sym = \\n{M_sym}")

# Matrice identité
I = eye(3)
print(f"\\nIdentité 3x3 = \\n{I}")

# Matrice nulle
Z = zeros(2, 3)
print(f"\\nMatrice nulle 2x3 = \\n{Z}")

print("\\n=== OPÉRATIONS MATRICIELLES ===")
A = Matrix([[1, 2], [3, 4]])
B = Matrix([[5, 6], [7, 8]])

# Addition
print(f"A + B = \\n{A + B}")

# Multiplication
print(f"\\nA × B = \\n{A * B}")

# Transposée
print(f"\\nA^T = \\n{A.T}")

# Puissance
print(f"\\nA² = \\n{A**2}")

print("\\n=== DÉTERMINANT ===")
M = Matrix([[1, 2], [3, 4]])
print(f"M = \\n{M}")
print(f"det(M) = {M.det()}")

# Déterminant symbolique
M_sym = Matrix([[a, b], [c, d]])
print(f"\\nM_sym = \\n{M_sym}")
print(f"det(M_sym) = {M_sym.det()}")

print("\\n=== INVERSE ===")
M = Matrix([[1, 2], [3, 4]])
M_inv = M.inv()
print(f"M = \\n{M}")
print(f"M⁻¹ = \\n{M_inv}")

# Vérification : M × M⁻¹ = I
print(f"\\nM × M⁻¹ = \\n{M * M_inv}")

print("\\n=== VALEURS PROPRES ===")
M = Matrix([[3, 1], [1, 3]])
eigenvals = M.eigenvals()
print(f"M = \\n{M}")
print(f"Valeurs propres : {eigenvals}")

# Vecteurs propres
eigenvects = M.eigenvects()
print(f"\\nVecteurs propres :")
for eigenval, mult, eigenvect in eigenvects:
    print(f"  λ = {eigenval}, vecteur = {eigenvect[0]}")

print("\\n=== DIAGONALISATION ===")
P, D = M.diagonalize()
print(f"M = PDP⁻¹")
print(f"P = \\n{P}")
print(f"D = \\n{D}")

# Vérification
print(f"\\nVérification : PDP⁻¹ = \\n{P * D * P.inv()}")

print("\\n=== SYSTÈMES LINÉAIRES ===")
# Résoudre Ax = b
A = Matrix([[2, 3], [4, 1]])
b = Matrix([5, 6])
x = A.inv() * b
print(f"Système : Ax = b")
print(f"A = \\n{A}")
print(f"b = {b.T}")
print(f"Solution : x = {x.T}")

# Vérification
print(f"Vérification : Ax = {(A*x).T}")

print("\\n=== APPLICATION : ROTATION 2D ===")
theta = symbols('theta', real=True)
# Matrice de rotation
R = Matrix([
    [cos(theta), -sin(theta)],
    [sin(theta), cos(theta)]
])
print(f"Matrice de rotation :")
print(R)

# Rotation d'un vecteur
v = Matrix([1, 0])
v_rot = R * v
print(f"\\nVecteur original : {v.T}")
print(f"Après rotation : {v_rot.T}")

# Pour θ = π/4
v_rot_45 = v_rot.subs(theta, pi/4)
print(f"Pour θ=45° : {v_rot_45.T}")`,
                tip: '🎨 Utilisez .evalf() pour obtenir des valeurs numériques !'
            },

            {
                title: 'Limites et continuité',
                duration: '45 min',
                analogy: '🎯 La limite décrit le comportement à l\'approche d\'un point',
                content: `Calculer des limites avec SymPy

La limite répond à la question : "Que se passe-t-il quand x s'approche de a ?"

Types de limites :
- Limites finies : lim(x→a) f(x) = L
- Limites infinies : lim(x→∞) f(x)
- Limites à gauche/droite
- Formes indéterminées : 0/0, ∞/∞, etc.

Analogie : C'est comme demander "où va cette voiture si elle continue dans cette direction ?"

SymPy peut calculer :
- Limites de fonctions rationnelles
- Limites trigonométriques
- Limites exponentielles
- Formes indéterminées (règle de L'Hôpital automatique)`,
                keyPoints: [
                    'limit(f, x, a) pour calculer une limite',
                    'oo pour l\'infini',
                    'dir=\'+\' ou dir=\'-\' pour limites latérales',
                    'SymPy applique L\'Hôpital automatiquement'
                ],
                code: `from sympy import *

x = symbols('x')

print("=== LIMITES SIMPLES ===")
# Limite d'un polynôme
f1 = x**2 + 2*x + 1
lim1 = limit(f1, x, 2)
print(f"lim(x→2) [{f1}] = {lim1}")

# Limite d'une fraction
f2 = (x**2 - 1)/(x - 1)
lim2 = limit(f2, x, 1)
print(f"lim(x→1) [{f2}] = {lim2}")  # 2 (forme 0/0)

print("\\n=== LIMITES À L'INFINI ===")
# Limite à +∞
f3 = (2*x + 1)/(x + 3)
lim3 = limit(f3, x, oo)
print(f"lim(x→∞) [{f3}] = {lim3}")

# Limite à -∞
lim3_minus = limit(f3, x, -oo)
print(f"lim(x→-∞) [{f3}] = {lim3_minus}")

print("\\n=== LIMITES TRIGONOMÉTRIQUES ===")
# Limite classique
f4 = sin(x)/x
lim4 = limit(f4, x, 0)
print(f"lim(x→0) [sin(x)/x] = {lim4}")  # 1

# Autre limite trigonométrique
f5 = (1 - cos(x))/x**2
lim5 = limit(f5, x, 0)
print(f"lim(x→0) [(1-cos(x))/x²] = {lim5}")  # 1/2

print("\\n=== LIMITES EXPONENTIELLES ===")
# e défini par une limite
f6 = (1 + 1/x)**x
lim6 = limit(f6, x, oo)
print(f"lim(x→∞) [(1+1/x)^x] = {lim6}")  # e

# Croissance exponentielle vs polynomiale
f7 = exp(x)/x**10
lim7 = limit(f7, x, oo)
print(f"lim(x→∞) [e^x/x^10] = {lim7}")  # ∞

print("\\n=== LIMITES LATÉRALES ===")
# Fonction avec discontinuité
f8 = 1/x
lim_droite = limit(f8, x, 0, dir='+')
lim_gauche = limit(f8, x, 0, dir='-')
print(f"lim(x→0⁺) [1/x] = {lim_droite}")
print(f"lim(x→0⁻) [1/x] = {lim_gauche}")

print("\\n=== FORMES INDÉTERMINÉES ===")
# 0/0
f9 = (exp(x) - 1)/x
lim9 = limit(f9, x, 0)
print(f"lim(x→0) [(e^x-1)/x] = {lim9}")  # 1

# ∞/∞
f10 = (3*x**2 + 2*x)/(x**2 - 1)
lim10 = limit(f10, x, oo)
print(f"lim(x→∞) [(3x²+2x)/(x²-1)] = {lim10}")  # 3

# 0×∞
f11 = x * exp(-x)
lim11 = limit(f11, x, oo)
print(f"lim(x→∞) [x·e^(-x)] = {lim11}")  # 0

print("\\n=== DÉVELOPPEMENTS LIMITÉS ===")
# Série de Taylor autour de 0
f12 = sin(x)
serie = series(f12, x, 0, 6)
print(f"sin(x) ≈ {serie}")

f13 = exp(x)
serie2 = series(f13, x, 0, 5)
print(f"e^x ≈ {serie2}")`,
                tip: '📐 Les limites sont essentielles pour comprendre la continuité !'
            },

            {
                title: 'Séries et développements',
                duration: '60 min',
                analogy: '🎯 Une série est une somme infinie de termes',
                content: `Maîtriser les séries avec SymPy

Une série permet d'approximer des fonctions complexes par des polynômes.

Types de séries :
- Série de Taylor : autour d'un point
- Série de Maclaurin : autour de 0
- Série de Laurent : avec puissances négatives
- Série de Fourier : fonctions périodiques

Analogie : C'est comme approximer une courbe compliquée par une somme de courbes simples (polynômes).

Applications :
- Approximations numériques
- Résolution d'équations
- Analyse de fonctions
- Physique quantique (perturbations)`,
                keyPoints: [
                    'series(f, x, x0, n) pour développement',
                    'Ordre n = nombre de termes',
                    'removeO() pour enlever le terme O(x^n)',
                    'Crucial pour approximations'
                ],
                code: `from sympy import *

x = symbols('x')

print("=== SÉRIES DE MACLAURIN (x0=0) ===")
# sin(x)
s1 = series(sin(x), x, 0, 10)
print(f"sin(x) = {s1}")

# cos(x)
s2 = series(cos(x), x, 0, 10)
print(f"cos(x) = {s2}")

# e^x
s3 = series(exp(x), x, 0, 6)
print(f"e^x = {s3}")

# ln(1+x)
s4 = series(log(1+x), x, 0, 6)
print(f"ln(1+x) = {s4}")

print("\\n=== SÉRIE DE TAYLOR (x0≠0) ===")
# sin(x) autour de π/2
s5 = series(sin(x), x, pi/2, 5)
print(f"sin(x) autour de π/2 = {s5}")

print("\\n=== APPROXIMATIONS NUMÉRIQUES ===")
# Approximer sin(0.1)
x_val = 0.1

# Valeur exacte
exact = sin(x_val)

# Approximations d'ordres croissants
for n in [2, 4, 6, 8]:
    approx = series(sin(x), x, 0, n).removeO().subs(x, x_val)
    erreur = abs(exact - approx)
    print(f"Ordre {n}: {approx:.10f}, erreur: {erreur:.2e}")

print(f"Valeur exacte: {exact:.10f}")

print("\\n=== SOMMES DE SÉRIES ===")
n = symbols('n', integer=True)

# Série géométrique : Σ(1/2)^n
s6 = Sum(Rational(1,2)**n, (n, 0, oo))
print(f"Σ(n=0→∞) (1/2)^n = {s6.doit()}")  # 2

# Série harmonique alternée
s7 = Sum((-1)**(n+1)/n, (n, 1, oo))
print(f"Σ(n=1→∞) (-1)^(n+1)/n = {s7.doit()}")  # ln(2)

print("\\n=== APPLICATION : APPROXIMATION DE π ===")
# Formule de Leibniz : π/4 = 1 - 1/3 + 1/5 - 1/7 + ...
s8 = Sum((-1)**n/(2*n+1), (n, 0, oo))
pi_approx = 4 * s8.doit()
print(f"π (formule de Leibniz) = {pi_approx}")

# Approximation numérique avec 1000 termes
pi_num = 4 * sum((-1)**k/(2*k+1) for k in range(1000))
print(f"π (1000 termes) ≈ {pi_num:.10f}")
print(f"π (exact) = {float(pi):.10f}")

print("\\n=== SÉRIE DE FOURIER ===")
# Fonction carrée
from sympy.abc import t
T = symbols('T', positive=True)

# Coefficients de Fourier (exemple simplifié)
print("Série de Fourier d'une fonction carrée:")
print("f(t) = 4/π [sin(ωt) + sin(3ωt)/3 + sin(5ωt)/5 + ...]")`,
                tip: '🔬 Les séries sont essentielles pour la physique quantique !'
            }
        ]
    }
];

export default pythonCurriculum;
