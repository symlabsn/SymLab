// Import du contenu du module 3
import { module3Content } from './module3Content';
// Import du contenu du module 1
import { module1Content } from './module1Content';
// Import du contenu des modules 4, 5, 6
import { modules456Content } from './modules456Content';
// Import du contenu du module 2 (suite)
import { module2SuiteContent } from './module2SuiteContent';
// Import du contenu modules 5 & 6 (suite)
import { modules56SuiteContent } from './modules56SuiteContent';
// Import du contenu du module 7
import { module7Content } from './module7Content';
import { module8Content } from './module8Content';
import { module9Content } from './module9Content';
import { module10Content } from './module10Content';
import { module11Content } from './module11Content';
import { module12Content } from './module12Content';
import { module13Content } from './module13Content';
import { module14Content } from './module14Content';
import { module5SympyContent } from './module5SympyContent';
import { module9SympyContent } from './module9SympyContent';
import { module6SympyContent } from './module6SympyContent';
import { module8SympyContent } from './module8SympyContent';
import { module10SympyContent } from './module10SympyContent';
import { numpyMatplotlibContent } from './numpyMatplotlibContent';

// ============================================================
// CONTENU PEDAGOGIQUE COMPLET - MODULES 1 A 3
// ============================================================

export const chapterContent = {
        // ============================================================
        // MODULE 1 : DEPLACÉ DANS module1Content.js
        // ============================================================

        // ============================================================
        // MODULE 2 : ARITHMETIQUE
        // ============================================================

        basic_ops: {
                title: "Addition, soustraction, multiplication, division",
                theorie: `
## Operations arithmetiques de base

Python peut etre utilise comme une calculatrice puissante. Voici les operateurs de base :

| Operateur | Nom | Exemple | Resultat |
|-----------|-----|---------|----------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Soustraction | \`10 - 4\` | \`6\` |
| \`*\` | Multiplication | \`6 * 7\` | \`42\` |
| \`/\` | Division | \`15 / 4\` | \`3.75\` |
| \`//\` | Division entiere | \`15 // 4\` | \`3\` |
| \`%\` | Modulo (reste) | \`15 % 4\` | \`3\` |
| \`**\` | Puissance | \`2 ** 10\` | \`1024\` |

### Types de nombres :
- **int** : Nombres entiers (ex: \`42\`, \`-17\`)
- **float** : Nombres decimaux (ex: \`3.14\`, \`-0.5\`)

### Division en Python 3 :
- \`/\` donne toujours un **float**
- \`//\` donne la partie entiere (floor division)
        `,
                code: `# Operations arithmetiques de base en Python

# Addition
print("5 + 3 =", 5 + 3)

# Soustraction
print("10 - 4 =", 10 - 4)

# Multiplication
print("6 x 7 =", 6 * 7)

# Division (resultat float)
print("15 / 4 =", 15 / 4)

# Division entiere (floor)
print("15 // 4 =", 15 // 4)

# Modulo (reste de la division)
print("15 % 4 =", 15 % 4)

# Puissance
print("2^10 =", 2 ** 10)

# Combinaison d'operations
resultat = (5 + 3) * 2 - 10 / 2
print("(5 + 3) * 2 - 10 / 2 =", resultat)`,
                exercice: `
### 📝 Exercice

Calculez les expressions suivantes en Python :

1. **125 ÷ 5 + 3 × 8** → Utilisez \`125 / 5 + 3 * 8\`
2. **2¹⁵ − 1** (un nombre de Mersenne) → Utilisez \`2 ** 15 - 1\`
3. **Le reste de 1234 ÷ 17** → Utilisez \`1234 % 17\`
4. **22/7** (approximation de π) → Comparez avec \`3.14159...\`
        `
        },

        variables: {
                title: "Utiliser des variables",
                theorie: `
## Les variables en Python

Une **variable** est un nom qui reference une valeur en memoire. C'est comme une etiquette sur une boite.

### Regles de nommage :

- Commence par une lettre ou \`_\`
- Peut contenir lettres, chiffres, \`_\`
- **Sensible a la casse** : \`x\` et \`X\` sont differents
- Pas de mots reserves (if, for, etc.)

### Conventions (PEP 8) :

- \`snake_case\` pour les variables : \`ma_variable\`
- \`MAJUSCULES\` pour les constantes : \`PI = 3.14159\`
- Noms descriptifs : \`vitesse_lumiere\` plutot que \`v\`

### Affectation :

\`\`\`python
x = 5          # x recoit 5
x = x + 1      # x devient 6
x += 1         # raccourci pour x = x + 1
\`\`\`
        `,
                code: `# Utilisation des variables en Python

# Declaration et affectation
masse = 10          # en kilogrammes
acceleration = 9.81  # g en m/s^2

# Calcul avec des variables
force = masse * acceleration
print(f"Force = {masse} kg x {acceleration} m/s^2")
print(f"Force = {force} Newtons")

# Affectation multiple
a, b, c = 1, 2, 3
print(f"a = {a}, b = {b}, c = {c}")

# Echange de valeurs (pythonique)
a, b = b, a
print(f"Apres echange : a = {a}, b = {b}")

# Constantes (convention MAJUSCULES)
PI = 3.14159265359
VITESSE_LUMIERE = 299_792_458  # m/s (underscores pour lisibilite)

rayon = 5
perimetre = 2 * PI * rayon
print(f"Perimetre d'un cercle de rayon {rayon} = {perimetre:.2f}")`,
                exercice: `
### 📝 Exercice

1. Créez des variables pour :
   - **Masse de la Terre** : 5.972 × 10²⁴ kg → \`masse_terre = 5.972e24\`
   - **Rayon de la Terre** : 6 371 km → \`rayon_terre = 6.371e6\`
   
2. Calculez :
   - **Surface** : 4πr² → \`4 * 3.14159 * rayon**2\`
   - **Volume** : (4/3)πr³
   - **Densité** : masse / volume
        `
        },

        printing: {
                title: "Afficher des equations dans Jupyter",
                theorie: `
## Affichage formate en Python

### 1. La fonction print()

\`\`\`python
print("Texte simple")
print("Valeur :", 42)
print("Ligne 1\\nLigne 2")  # \\n = saut de ligne
\`\`\`

### 2. Les f-strings (recommande - Python 3.6+)

\`\`\`python
x = 3.14159
print(f"Pi = {x}")           # Insertion
print(f"Pi = {x:.2f}")       # 2 decimales
print(f"Pi = {x:10.4f}")     # Largeur 10, 4 decimales
\`\`\`

### 3. Formatage mathematique dans Jupyter

Jupyter supporte **LaTeX** dans les cellules Markdown :

\`\`\`markdown
L'equation de la chaleur : $$ \\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u $$
\`\`\`

### 4. Affichage Sympy dans Jupyter

\`\`\`python
import sympy as sp
sp.init_printing()  # Active le rendu LaTeX
\`\`\`
        `,
                code: `# Differentes methodes d'affichage en Python

import sympy as sp

# 1. print() basique
print("=== Methode print() ===")
print("2 + 2 =", 2 + 2)

# 2. f-strings (formatage moderne)
print("\\n=== f-strings ===")
pi = 3.14159265359
e = 2.71828182846

print(f"Pi = {pi}")
print(f"Pi (2 decimales) = {pi:.2f}")
print(f"e = {e:.6f}")
print(f"Pi x e = {pi * e:.4f}")

# 3. Alignement et formatage
print("\\n=== Alignement ===")
for i in range(1, 6):
    carre = i ** 2
    cube = i ** 3
    print(f"{i:2d}^2 = {carre:3d}, {i}^3 = {cube:4d}")

# 4. Affichage Sympy
print("\\n=== Sympy ===")
x = sp.Symbol('x')
expr = x**2 + 2*x + 1
print(f"Expression : {expr}")
print(f"Factorisee : {sp.factor(expr)}")
print(f"Derivee : {sp.diff(expr, x)}")`,
                exercice: `
### 📝 Exercice

1. Affichez une table des carrés de 1 à 10 avec les f-strings
2. Affichez **π** avec 8 décimales : \`f"{math.pi:.8f}"\`
3. Créez un affichage aligné :

\`\`\`
n  | n²   | n³
---|------|-----
1  |    1 |    1
2  |    4 |    8
\`\`\`
        `
        },

        comments: {
                title: "Ecrire des commentaires",
                theorie: `
## Les commentaires en Python

Les commentaires sont ignores par Python. Ils servent a :
- Expliquer le code
- Desactiver temporairement du code
- Documenter les fonctions

### Commentaire sur une ligne :

\`\`\`python
# Ceci est un commentaire
x = 5  # Commentaire en fin de ligne
\`\`\`

### Commentaire multi-lignes :

\`\`\`python
"""
Ceci est un commentaire
sur plusieurs lignes.
Souvent utilise comme docstring.
"""
\`\`\`

### Bonnes pratiques :

1. **Expliquez le "pourquoi"**, pas le "quoi"
2. Gardez les commentaires a jour
3. Utilisez des docstrings pour les fonctions
4. Evitez les commentaires evidents
        `,
                code: `# ==================================================
# Exemple de code bien commente
# ==================================================

# Constantes physiques
GRAVITE_TERRE = 9.81      # m/s^2 - acceleration gravitationnelle
MASSE_ELECTRON = 9.109e-31  # kg - masse au repos de l'electron

def calculer_energie_cinetique(masse, vitesse):
    """
    Calcule l'energie cinetique d'un objet.
    
    Parametres :
        masse (float) : Masse de l'objet en kg
        vitesse (float) : Vitesse en m/s
        
    Retourne :
        float : Energie cinetique en Joules
        
    Formule : E_c = (1/2) * m * v^2
    """
    return 0.5 * masse * vitesse ** 2

# Exemple d'utilisation
masse_balle = 0.145  # kg (balle de baseball)
vitesse_balle = 40   # m/s (environ 144 km/h)

energie = calculer_energie_cinetique(masse_balle, vitesse_balle)
print(f"Energie cinetique : {energie:.2f} J")

# TODO: Ajouter la verification des unites
# FIXME: Gerer les vitesses negatives`,
                exercice: `
**Exercice :**

1. Ajoutez des commentaires au code suivant :
   \`\`\`python
   r = 6.371e6
   m = 5.972e24
   G = 6.674e-11
   g = G * m / r**2
   \`\`\`

2. Ecrivez une fonction avec une docstring complete
        `
        },

        exponents: {
                title: "Exposants (puissances)",
                theorie: `
## Les puissances en Python

### Operateur **

\`\`\`python
2 ** 3      # 8 (2 au cube)
10 ** 6     # 1 000 000
2 ** (-3)   # 0.125 (puissance negative)
\`\`\`

### Fonction pow()

\`\`\`python
pow(2, 10)      # 1024
pow(2, 10, 7)   # 2^10 mod 7 = 2 (modulaire)
\`\`\`

### Racines avec les puissances fractionnaires

\`\`\`python
16 ** 0.5     # 4.0 (racine carree)
27 ** (1/3)   # 3.0 (racine cubique)
\`\`\`

### Lois des exposants :

- \\( a^m \\cdot a^n = a^{m+n} \\)
- \\( \\frac{a^m}{a^n} = a^{m-n} \\)
- \\( (a^m)^n = a^{mn} \\)
- \\( a^0 = 1 \\)
- \\( a^{-n} = \\frac{1}{a^n} \\)
        `,
                code: `# Les puissances en Python

# Operateur **
print("=== Puissances avec ** ===")
print(f"2^3 = {2 ** 3}")
print(f"10^6 = {10 ** 6:,}")  # Avec separateur de milliers
print(f"2^(-3) = {2 ** (-3)}")

# Fonction pow()
print("\\n=== Fonction pow() ===")
print(f"pow(2, 10) = {pow(2, 10)}")
print(f"pow(2, 10, 7) = {pow(2, 10, 7)}")  # Modulo

# Racines
print("\\n=== Racines ===")
print(f"Racine carree de 16 = {16 ** 0.5}")
print(f"Racine cubique de 27 = {27 ** (1/3):.6f}")
print(f"Racine 5e de 32 = {32 ** (1/5)}")

# Verification des lois des exposants
print("\\n=== Lois des exposants ===")
a, m, n = 3, 4, 2

loi1 = a**m * a**n
verification1 = a**(m + n)
print(f"a^m * a^n = a^(m+n) : {loi1} = {verification1} ? {loi1 == verification1}")

loi2 = (a**m)**n
verification2 = a**(m * n)
print(f"(a^m)^n = a^(m*n) : {loi2} = {verification2} ? {loi2 == verification2}")`,
                exercice: `
### 📝 Exercice

1. Calculez **3¹⁰⁰** → \`3 ** 100\` (Python gère les grands entiers !)
2. Vérifiez que **2¹⁰ = 1024** (1 Ko en informatique)
3. Calculez **⁴√625** (racine 4ème) → \`625 ** (1/4)\`
4. Trouvez **7⁵⁰⁰ mod 13** → \`pow(7, 500, 13)\`
        `
        },

        loops_powers: {
                title: "Boucles for pour calculer des puissances",
                theorie: `
## La boucle for en Python

La boucle \`for\` permet de repeter des instructions un nombre defini de fois.

### Syntaxe de base :

\`\`\`python
for variable in sequence:
    # Instructions a repeter
    # (indentees !)
\`\`\`

### La fonction range() :

\`\`\`python
range(5)        # 0, 1, 2, 3, 4
range(2, 8)     # 2, 3, 4, 5, 6, 7
range(0, 10, 2) # 0, 2, 4, 6, 8
\`\`\`

### Calcul de puissance avec une boucle :

\`\`\`python
# Calculer 2^5 manuellement
resultat = 1
for i in range(5):
    resultat = resultat * 2
# resultat = 32
\`\`\`
        `,
                code: `# Boucles for pour calculer des puissances

# 1. Les puissances de 2
print("=== Puissances de 2 ===")
for i in range(11):
    puissance = 2 ** i
    print(f"2^{i:2d} = {puissance:5d}")

# 2. Calcul manuel de a^n avec une boucle
def puissance_manuelle(base, exposant):
    """Calcule base^exposant sans utiliser **"""
    resultat = 1
    for i in range(exposant):
        resultat *= base
    return resultat

print("\\n=== Calcul manuel de 3^5 ===")
print(f"Avec boucle : {puissance_manuelle(3, 5)}")
print(f"Verification : {3 ** 5}")

# 3. Table des puissances
print("\\n=== Table des puissances ===")
print("n  |  n^2  |  n^3  |  n^4")
print("-" * 30)
for n in range(1, 11):
    print(f"{n:2d} | {n**2:5d} | {n**3:5d} | {n**4:6d}")

# 4. Somme des puissances de 2
somme = 0
for i in range(10):
    somme += 2 ** i
print(f"\\nSomme 2^0 + 2^1 + ... + 2^9 = {somme}")
print(f"Formule 2^10 - 1 = {2**10 - 1}")`,
                exercice: `
### 📝 Exercice

1. Écrivez une boucle qui affiche les 20 premières puissances de 3
2. Calculez la somme **2⁰ + 2¹ + ... + 2¹⁵** pour n = 15
3. Vérifiez que cette somme égale **2¹⁶ − 1**
        `
        },

        // ============================================================
        // MODULE 3 : INTRODUCTION A SYMPY
        // ============================================================

        sympy_1: {
                title: "Introduction a Sympy, Partie 1",
                theorie: `
## Sympy : Calcul symbolique en Python

**Sympy** (Symbolic Python) est une bibliotheque qui permet de faire du calcul symbolique, c'est-a-dire de manipuler des expressions mathematiques de facon exacte.

### Calcul numerique vs symbolique :

| Numerique | Symbolique |
|-----------|------------|
| \`3.14159...\` | \\( \\pi \\) |
| \`1.41421...\` | \\( \\sqrt{2} \\) |
| Approximatif | Exact |

### Installation :

\`\`\`bash
pip install sympy
\`\`\`

### Import :

\`\`\`python
import sympy as sp
from sympy import symbols, sqrt, pi, sin, cos, exp
\`\`\`

### Definir des symboles :

\`\`\`python
x = sp.Symbol('x')
x, y, z = sp.symbols('x y z')
\`\`\`
        `,
                code: `import sympy as sp

# Definir des symboles
x = sp.Symbol('x')
y, z = sp.symbols('y z')

print("=== Calcul symbolique vs numerique ===")

# Numerique : approximation
import math
print(f"math.sqrt(2) = {math.sqrt(2)}")

# Symbolique : valeur exacte
print(f"sp.sqrt(2) = {sp.sqrt(2)}")

# Les deux sont equivalents numeriquement
print(f"Verification : {float(sp.sqrt(2))}")

# Creer des expressions
print("\\n=== Expressions symboliques ===")
expr = x**2 + 2*x + 1
print(f"Expression : {expr}")
print(f"Type : {type(expr)}")

# Operations sur les expressions
print("\\n=== Operations ===")
print(f"expr + 1 = {expr + 1}")
print(f"expr * 2 = {sp.expand(expr * 2)}")
print(f"expr^2 = {sp.expand(expr ** 2)}")

# Constantes symboliques
print("\\n=== Constantes symboliques ===")
print(f"pi = {sp.pi}")
print(f"E (Euler) = {sp.E}")
print(f"oo (infini) = {sp.oo}")
print(f"I (imaginaire) = {sp.I}")`,
                exercice: `
**Exercice :**

1. Definissez les symboles \\( a, b, c \\)
2. Creez l'expression \\( ax^2 + bx + c \\)
3. Utilisez \`sp.expand()\` sur \\( (x+1)(x-1) \\)
4. Comparez \\( \\pi \\) symbolique et numerique
        `
        },

        latex_intro: {
                title: "Introduction a LaTeX",
                theorie: `
## LaTeX : Le langage des mathematiques

**LaTeX** est un systeme de composition de documents qui permet d'ecrire de belles formules mathematiques.

### Dans Jupyter/Markdown :

- Formule en ligne : \`$E = mc^2$\` donne \\( E = mc^2 \\)  
- Formule centree : \`$$E = mc^2$$\`

### Principaux symboles :

| LaTeX | Resultat |
|-------|----------|
| \`\\frac{a}{b}\` | \\( \\frac{a}{b} \\) |
| \`\\sqrt{x}\` | \\( \\sqrt{x} \\) |
| \`x^{2}\` | \\( x^2 \\) |
| \`x_{n}\` | \\( x_n \\) |
| \`\\sum_{i=1}^{n}\` | \\( \\sum_{i=1}^{n} \\) |
| \`\\int_a^b\` | \\( \\int_a^b \\) |
| \`\\alpha, \\beta, \\gamma\` | \\( \\alpha, \\beta, \\gamma \\) |

### Sympy vers LaTeX :

\`\`\`python
sp.latex(expression)  # Convertit en LaTeX
\`\`\`
        `,
                code: `import sympy as sp
from sympy import symbols, sqrt, sin, cos, pi, exp, Integral, Sum

# Definir les symboles
x, y, n, i = sp.symbols('x y n i')

# 1. Conversion d'expressions en LaTeX
print("=== Sympy vers LaTeX ===")

# Expression simple
expr = x**2 + 2*x + 1
print(f"Expression : {expr}")
print(f"LaTeX : {sp.latex(expr)}")

# Fraction
frac = (x + 1) / (x - 1)
print(f"\\nFraction : {frac}")
print(f"LaTeX : {sp.latex(frac)}")

# Racine carree
racine = sqrt(x**2 + y**2)
print(f"\\nRacine : {racine}")
print(f"LaTeX : {sp.latex(racine)}")

# Integrale
integrale = Integral(x**2, (x, 0, 1))
print(f"\\nIntegrale : {integrale}")
print(f"LaTeX : {sp.latex(integrale)}")

# Somme
somme = Sum(i**2, (i, 1, n))
print(f"\\nSomme : {somme}")
print(f"LaTeX : {sp.latex(somme)}")

# Expression complexe
formule_euler = sp.Eq(exp(sp.I * x), cos(x) + sp.I * sin(x))
print(f"\\nFormule d'Euler : {formule_euler}")
print(f"LaTeX : {sp.latex(formule_euler)}")`,
                exercice: `
**Exercice :**

1. Creez la formule quadratique \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)
2. Convertissez-la en LaTeX avec Sympy
3. Creez une cellule Markdown et affichez-la
        `
        },

        sympy_2: {
                title: "Introduction a Sympy, Partie 2",
                theorie: `
## Operations avancees avec Sympy

### Simplification :

\`\`\`python
sp.simplify(expr)   # Simplification generale
sp.expand(expr)     # Developper
sp.factor(expr)     # Factoriser
sp.collect(expr, x) # Regrouper par puissances de x
\`\`\`

### Substitution :

\`\`\`python
expr.subs(x, 2)             # Remplacer x par 2
expr.subs([(x, 1), (y, 2)]) # Plusieurs substitutions
\`\`\`

### Calcul :

\`\`\`python
sp.diff(expr, x)        # Derivee par rapport a x
sp.integrate(expr, x)   # Integrale indefinie
sp.limit(expr, x, 0)    # Limite en 0
sp.solve(expr, x)       # Resoudre expr = 0
\`\`\`

### Evaluation numerique :

\`\`\`python
expr.evalf()      # Evaluation flottante
sp.N(expr, 50)    # 50 chiffres significatifs
\`\`\`
        `,
                code: `import sympy as sp

x, y = sp.symbols('x y')

# 1. Simplification
print("=== Simplification ===")
expr = (x**2 - 1) / (x - 1)
print(f"Expression : {expr}")
print(f"Simplifiee : {sp.simplify(expr)}")

# 2. Developper et Factoriser
print("\\n=== Developper et Factoriser ===")
expr2 = (x + 1)**3
print(f"Expression : {expr2}")
print(f"Developpee : {sp.expand(expr2)}")
print(f"Re-factorisee : {sp.factor(sp.expand(expr2))}")

# 3. Substitution
print("\\n=== Substitution ===")
expr3 = x**2 + y**2
print(f"Expression : {expr3}")
print(f"x=3, y=4 : {expr3.subs([(x, 3), (y, 4)])}")

# 4. Derivation
print("\\n=== Derivation ===")
f = x**3 + 2*x**2 - 5*x + 1
print(f"f(x) = {f}")
print(f"f'(x) = {sp.diff(f, x)}")
print(f"f''(x) = {sp.diff(f, x, 2)}")

# 5. Integration
print("\\n=== Integration ===")
print(f"Integrale de x^2 = {sp.integrate(x**2, x)}")
print(f"Integrale de 0 a 1 = {sp.integrate(x**2, (x, 0, 1))}")

# 6. Resolution d'equations
print("\\n=== Resolution ===")
equation = x**2 - 5*x + 6
print(f"Equation : {equation} = 0")
print(f"Solutions : {sp.solve(equation, x)}")

# 7. Evaluation numerique
print("\\n=== Evaluation numerique ===")
print(f"sqrt(2) exact : {sp.sqrt(2)}")
print(f"sqrt(2) decimal : {sp.sqrt(2).evalf()}")
print(f"pi a 50 decimales : {sp.pi.evalf(50)}")`,
                exercice: `
**Exercice :**

1. Simplifiez \\( \\frac{x^3 - x}{x^2 - 1} \\)
2. Derivez \\( \\sin(x) \\cdot e^x \\)
3. Integrez \\( \\frac{1}{x^2 + 1} \\)
4. Resolvez \\( x^3 - 6x^2 + 11x - 6 = 0 \\)
        `
        },

        f_strings: {
                title: "Affichage avec les f-strings",
                theorie: `
## Les f-strings en Python

Les **f-strings** (formatted string literals) sont la methode moderne et recommandee pour formater des chaines en Python (depuis 3.6).

### Syntaxe :

\`\`\`python
f"Texte {variable} texte"
f"Resultat : {expression}"
f"Decimales : {nombre:.2f}"
\`\`\`

### Codes de formatage :

| Code | Description | Exemple |
|------|-------------|---------|
| \`{x}\` | Simple insertion | \`f"{42}"\` → "42" |
| \`{x:.2f}\` | 2 decimales | \`f"{3.14159:.2f}"\` → "3.14" |
| \`{x:10d}\` | Largeur 10 | \`f"{42:10d}"\` → "        42" |
| \`{x:,}\` | Separateurs | \`f"{1000000:,}"\` → "1,000,000" |
| \`{x:.2e}\` | Scientifique | \`f"{1234:.2e}"\` → "1.23e+03" |
| \`{x:>10}\` | Aligne droite | |
| \`{x:<10}\` | Aligne gauche | |
| \`{x:^10}\` | Centre | |
        `,
                code: `import sympy as sp

# 1. f-strings basiques
x = 42
pi = 3.14159265359
nom = "Euler"

print("=== f-strings basiques ===")
print(f"La valeur de x est {x}")
print(f"Le nombre pi vaut approximativement {pi}")
print(f"Le mathematicien {nom} a decouvert la formule e^(i*pi) + 1 = 0")

# 2. Formatage des nombres
print("\\n=== Formatage des nombres ===")
print(f"Pi avec 2 decimales : {pi:.2f}")
print(f"Pi avec 8 decimales : {pi:.8f}")
print(f"Million avec separateurs : {1_000_000:,}")
print(f"Notation scientifique : {6.022e23:.3e}")

# 3. Alignement
print("\\n=== Alignement ===")
for i in range(1, 6):
    carre = i ** 2
    cube = i ** 3
    print(f"| {i:>2} | {carre:>4} | {cube:>6} |")

# 4. Expressions dans f-strings
print("\\n=== Expressions ===")
a, b = 3, 4
print(f"a + b = {a + b}")
print(f"a^2 + b^2 = {a**2 + b**2}")
print(f"Hypotenuse = {(a**2 + b**2)**0.5}")

# 5. Avec Sympy
print("\\n=== Avec Sympy ===")
x = sp.Symbol('x')
expr = x**2 + 2*x + 1
print(f"Expression : {expr}")
print(f"Factorisee : {sp.factor(expr)}")
print(f"Derivee : {sp.diff(expr, x)}")`,
                exercice: `
**Exercice :**

1. Creez une table des carres et cubes avec alignement parfait
2. Affichez \\( e \\) et \\( \\pi \\) avec 15 decimales
3. Formatez le nombre d'Avogadro en notation scientifique
        `
        },

        exponents_law: {
                title: "Exemple : Loi des exposants avec Sympy",
                theorie: `
## Verification des lois des exposants

Les lois des exposants sont des regles fondamentales :

1. **Produit** : \\( a^m \\cdot a^n = a^{m+n} \\)
2. **Quotient** : \\( \\frac{a^m}{a^n} = a^{m-n} \\)
3. **Puissance d'une puissance** : \\( (a^m)^n = a^{mn} \\)
4. **Produit eleve a une puissance** : \\( (ab)^n = a^n b^n \\)
5. **Quotient eleve a une puissance** : \\( \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\)
6. **Exposant zero** : \\( a^0 = 1 \\)
7. **Exposant negatif** : \\( a^{-n} = \\frac{1}{a^n} \\)

Sympy peut verifier ces lois symboliquement !
        `,
                code: `import sympy as sp

# Definir les symboles
a, b, m, n = sp.symbols('a b m n', positive=True, real=True)

print("=== Verification des lois des exposants avec Sympy ===")

# Loi 1 : a^m * a^n = a^(m+n)
loi1_gauche = a**m * a**n
loi1_droite = a**(m + n)
print(f"\\nLoi 1 : a^m * a^n = a^(m+n)")
print(f"Gauche simplifiee : {sp.powsimp(loi1_gauche)}")
print(f"Egalite : {sp.simplify(loi1_gauche - loi1_droite) == 0}")

# Loi 2 : a^m / a^n = a^(m-n)
loi2_gauche = a**m / a**n
loi2_droite = a**(m - n)
print(f"\\nLoi 2 : a^m / a^n = a^(m-n)")
print(f"Gauche simplifiee : {sp.powsimp(loi2_gauche)}")
print(f"Egalite : {sp.simplify(loi2_gauche - loi2_droite) == 0}")

# Loi 3 : (a^m)^n = a^(m*n)
loi3_gauche = (a**m)**n
loi3_droite = a**(m * n)
print(f"\\nLoi 3 : (a^m)^n = a^(m*n)")
print(f"Gauche simplifiee : {sp.powsimp(loi3_gauche)}")
print(f"Egalite : {sp.simplify(loi3_gauche - loi3_droite) == 0}")

# Loi 4 : (a*b)^n = a^n * b^n
loi4_gauche = (a * b)**n
loi4_droite = a**n * b**n
print(f"\\nLoi 4 : (a*b)^n = a^n * b^n")
print(f"Gauche developpee : {sp.expand_power_base(loi4_gauche)}")
print(f"Egalite : {sp.simplify(loi4_gauche - loi4_droite) == 0}")

# Application numerique avec Sympy
print("\\n=== Application numerique ===")
x = sp.Symbol('x')
expr = x**3 * x**5
print(f"x^3 * x^5 = {sp.powsimp(expr)}")

# Verification par substitution
print(f"Pour x=2 : 2^3 * 2^5 = {(2**3) * (2**5)}")
print(f"         = 2^8 = {2**8}")`,
                exercice: `
**Exercice :**

1. Verifiez symboliquement que \\( a^{-n} = \\frac{1}{a^n} \\)
2. Simplifiez \\( \\frac{x^5 \\cdot x^3}{x^4} \\) avec Sympy
3. Prouvez que \\( (a/b)^n = a^n / b^n \\)
        `
        },

        sympy_latex_bug: {
                title: "Chasse aux bugs Sympy/LaTeX !",
                theorie: `
## Erreurs courantes avec Sympy

### 1. Symboles non definis

\`\`\`python
# ERREUR :
print(x + 1)  # NameError si x n'est pas defini

# CORRECT :
x = sp.Symbol('x')
print(x + 1)
\`\`\`

### 2. Division entiere vs reelle

\`\`\`python
# ATTENTION :
sp.Rational(1/3)  # Peut donner une approximation !

# CORRECT :
sp.Rational(1, 3)  # Fraction exacte
\`\`\`

### 3. Oublier init_printing()

\`\`\`python
sp.init_printing()  # Pour le beau rendu LaTeX dans Jupyter
\`\`\`

### 4. Confusion entre simpify et simplify

\`\`\`python
sp.simplify(expr)  # Correct
sp.simpify(expr)   # ERREUR : orthographe !
\`\`\`
        `,
                code: `import sympy as sp

print("=== Chasse aux bugs Sympy ===")

# Bug 1 : Division entiere Python avant Sympy
print("\\n--- Bug 1 : Division ---")
# Mauvais :
mauvais = sp.Rational(1/3)
print(f"sp.Rational(1/3) = {mauvais}")  # Approximation !

# Correct :
correct = sp.Rational(1, 3)
print(f"sp.Rational(1, 3) = {correct}")  # Exact !

# Bug 2 : Oublier expand() ou simplify()
print("\\n--- Bug 2 : Simplification ---")
x = sp.Symbol('x')
expr = (x + 1)**2 - x**2 - 2*x - 1
print(f"Expression : {expr}")
print(f"Non simplifiee : {expr}")
print(f"Simplifiee : {sp.simplify(expr)}")

# Bug 3 : Confusion entre = et ==
print("\\n--- Bug 3 : Equations ---")
# Ceci n'est PAS une equation, c'est une affectation :
# y = x + 1  # Affecte x+1 a y

# Pour creer une equation :
eq = sp.Eq(x**2, 4)
print(f"Equation : {eq}")
print(f"Solutions : {sp.solve(eq, x)}")

# Bug 4 : Types Python vs Sympy
print("\\n--- Bug 4 : Types ---")
import math
print(f"math.sqrt(8) = {math.sqrt(8)}")  # Float
print(f"sp.sqrt(8) = {sp.sqrt(8)}")      # Exact : 2*sqrt(2)
print(f"Simplifie : {sp.simplify(sp.sqrt(8))}")

# Bug 5 : Assomptions
print("\\n--- Bug 5 : Assomptions ---")
x_gen = sp.Symbol('x')  # x general
x_pos = sp.Symbol('x', positive=True)  # x > 0

print(f"sqrt(x^2) general = {sp.sqrt(x_gen**2)}")
print(f"sqrt(x^2) positif = {sp.sqrt(x_pos**2)}")`,
                exercice: `
**Exercice :**

Trouvez et corrigez les bugs dans ce code :

\`\`\`python
import sympy as sp

# 1
resultat = sp.Rational(2/5) + sp.Rational(1/5)


# 2
expr = x**2 - 4
solutions = sp.solve(expr)

# 3
integrale = sp.integrate(1/x, x)
\`\`\`
        `
        },

        latex_beauty: {
                title: "LaTeX pour de belles equations",
                theorie: `
## Creer de belles equations avec Sympy et LaTeX

### Activer le rendu :

\`\`\`python
from sympy import init_printing
init_printing()
\`\`\`

### Affichage dans Jupyter :

\`\`\`python
from IPython.display import display, Math, Latex

display(Math(r'\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}'))
\`\`\`

### Fonctions utiles :

\`\`\`python
sp.pprint(expr)     # Pretty print en console
sp.latex(expr)      # Generer le code LaTeX
\`\`\`

### Personnalisation :

\`\`\`python
sp.latex(expr, mode='equation')
sp.latex(expr, fold_short_frac=True)
\`\`\`
        `,
                code: `import sympy as sp
from sympy import symbols, sqrt, pi, sin, cos, exp, Integral, Sum, oo

# Initialiser le rendu
sp.init_printing()

# Definir les symboles
x, y, n, k = sp.symbols('x y n k')
a, b, c = sp.symbols('a b c')

print("=== Belles equations avec Sympy ===")

# 1. Formule quadratique
print("\\n--- Formule quadratique ---")
discriminant = b**2 - 4*a*c
solution = (-b + sqrt(discriminant)) / (2*a)
print(f"x = {solution}")
print(f"LaTeX : {sp.latex(solution)}")

# 2. Identite d'Euler
print("\\n--- Identite d'Euler ---")
euler = sp.Eq(exp(sp.I * pi) + 1, 0)
print(f"Identite : {euler}")
print(f"LaTeX : {sp.latex(euler)}")

# 3. Integration
print("\\n--- Integrale de Gauss ---")
gauss = Integral(exp(-x**2), (x, -oo, oo))
print(f"Integrale : {gauss}")
print(f"Resultat : {gauss.doit()}")
print(f"LaTeX : {sp.latex(gauss)} = {sp.latex(gauss.doit())}")

# 4. Somme de Riemann
print("\\n--- Somme des carres ---")
somme_carres = Sum(k**2, (k, 1, n))
resultat = somme_carres.doit()
print(f"Somme : {somme_carres}")
print(f"Formule : {resultat}")
print(f"Simplifiee : {sp.simplify(resultat)}")

# 5. Formule de Taylor de sin(x)
print("\\n--- Serie de Taylor ---")
taylor_sin = sp.series(sin(x), x, 0, 7)
print(f"sin(x) = {taylor_sin}")

# 6. Matrice et determinant
print("\\n--- Matrice ---")
M = sp.Matrix([[a, b], [c, a]])
print(f"Matrice :\\n{M}")
print(f"Determinant : {M.det()}")
print(f"LaTeX matrice : {sp.latex(M)}")`,
                exercice: `
**Exercice :**

1. Creez et affichez en LaTeX la formule de l'aire d'un cercle
2. Generez le developpement de Taylor de \\( e^x \\) jusqu'a l'ordre 5
3. Affichez la matrice identite 3x3 en LaTeX
        `
        }
};




// Fonction pour obtenir le contenu d'un chapitre
export const getChapterContent = (chapterId) => {
        // Priorité aux nouveaux contenus enrichis NumPy/Matplotlib
        if (numpyMatplotlibContent[chapterId]) return numpyMatplotlibContent[chapterId];
        // Contenus Sympy
        if (module5SympyContent[chapterId]) return module5SympyContent[chapterId];
        if (module6SympyContent[chapterId]) return module6SympyContent[chapterId];
        if (module8SympyContent[chapterId]) return module8SympyContent[chapterId];
        if (module9SympyContent[chapterId]) return module9SympyContent[chapterId];
        if (module10SympyContent[chapterId]) return module10SympyContent[chapterId];
        if (module3Content[chapterId]) return module3Content[chapterId];
        if (module1Content[chapterId]) return module1Content[chapterId];
        // Contenus existants
        if (chapterContent[chapterId]) return chapterContent[chapterId];
        if (modules456Content[chapterId]) return modules456Content[chapterId];
        if (module2SuiteContent[chapterId]) return module2SuiteContent[chapterId];
        if (modules56SuiteContent[chapterId]) return modules56SuiteContent[chapterId];
        if (module7Content[chapterId]) return module7Content[chapterId];
        if (module8Content[chapterId]) return module8Content[chapterId];
        if (module9Content[chapterId]) return module9Content[chapterId];
        if (module10Content[chapterId]) return module10Content[chapterId];
        if (module11Content[chapterId]) return module11Content[chapterId];
        if (module12Content[chapterId]) return module12Content[chapterId];
        if (module13Content[chapterId]) return module13Content[chapterId];
        if (module14Content[chapterId]) return module14Content[chapterId];
        return null;
};
