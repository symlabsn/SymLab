export const module3Content = {
    f_strings: {
        title: "Affichage avec les f-strings",
        theorie: `
## Maîtriser les f-strings

Introduites dans Python 3.6, les **f-strings** (formatted string literals) sont la méthode la plus lisible et rapide pour formater du texte.

### Syntaxe générale
\`f"Texte {variable} suite"\`

### Formatage avancé
On peut spécifier le format après un deux-points \`:\`

- **Nombres flottants** : \`:.2f\` (2 décimales)
- **Largeur fixe** : \`:10\` (10 caractères)
- **Alignement** :
  - \`<\`: Gauche
  - \`>\`: Droite
  - \`^\`: Centré
- **Remplissage** : \`:*>10\` (aligné à droite, complété par des *)

### Exemples
\`\`\`python
pi = 3.14159
f"Pi = {pi:.2f}"      # "Pi = 3.14"
f"Pi = {pi:10.2f}"    # "Pi =       3.14"
f"{'Titre':^20}"      # "       Titre        "
\`\`\`
        `,
        code: `import math

nom = "Pythagore"
annee = -570
pi = math.pi

print("=== Formatage de base ===")
print(f"Nom : {nom}")
print(f"Année : {annee} (négatif = av. JC)")

print("\\n=== Nombres flottants ===")
print(f"Pi (défaut) : {pi}")
print(f"Pi (2 décimales) : {pi:.2f}")
print(f"Pi (scientifique) : {pi:.2e}")

print("\\n=== Alignement et Remplissage ===")
# Tableau propre
print(f"{'Nom':<10} | {'Note':>5}")
print("-" * 18)
print(f"{'Alice':<10} | {18.5:>5}")
print(f"{'Bob':<10} | {14.0:>5}")
print(f"{'Charlie':<10} | {9.5:>5}")

print("\\n=== Expressions dans les f-strings ===")
a, b = 5, 10
print(f"{a} + {b} = {a + b}")
print(f"{a} * {b} = {a * b}")
print(f"Est-ce que {a} > {b} ? {a > b}")`,
        exercice: `Créez un tableau affichant les racines carrées des nombres de 1 à 10, aligné proprement avec 3 décimales.`
    },

    exponents_law: {
        title: "Exemple : Loi des exposants avec Sympy",
        theorie: `
## Vérifier les lois des exposants

SymPy est excellent pour vérifier des identités mathématiques.

### Lois à vérifier
1. $x^a \\cdot x^b = x^{a+b}$
2. $(x^a)^b = x^{a \\cdot b}$
3. $(xy)^a = x^a y^a$

### Fonction powsimp()
SymPy ne simplifie pas toujours automatiquement les puissances. Il faut parfois utiliser \`powsimp()\` ou spécifier des hypothèses sur les symboles (réels, positifs, etc.).

\`\`\`python
x = symbols('x', real=True, positive=True)
\`\`\`
        `,
        code: `import sympy as sp
from sympy import symbols, simplify, powsimp, expand_power_exp

# Définition des symboles avec hypothèses
# Important pour que SymPy puisse simplifier certaines expressions de puissance
x, y = symbols('x y', real=True, positive=True)
a, b = symbols('a b', real=True)

print("=== Loi 1 : Produit de puissances ===")
expr1 = x**a * x**b
res1 = simplify(expr1)
print(f"x^a * x^b = {res1}")
print(f"Attendu : x^(a+b)")
print(f"Vérification : {res1 == x**(a+b)}")

print("\\n=== Loi 2 : Puissance de puissance ===")
expr2 = (x**a)**b
# Parfois SymPy a besoin d'aide pour simplifier (x^a)^b en x^(ab)
res2 = powsimp(expr2)
print(f"(x^a)^b = {res2}")
# Note : sans hypothèses sur x, (x^2)^(1/2) = sqrt(x^2) = |x| != x

print("\\n=== Loi 3 : Puissance d'un produit ===")
expr3 = (x*y)**a
res3 = expand_power_exp(expr3)
# expand_power_base distribue l'exposant
res3_dist = sp.expand_power_base(expr3) 
print(f"(xy)^a = {expr3}")
print(f"Distribué : {res3_dist}")
print(f"Vérification : {simplify(res3_dist / (x**a * y**a)) == 1}")`,
        exercice: `Vérifiez la loi $\\frac{x^a}{x^b} = x^{a-b}$ avec SymPy.`
    },

    sympy_latex_bug: {
        title: "Chasse aux bugs Sympy/LaTeX !",
        theorie: `
## Erreurs courantes avec LaTeX et SymPy

1. **Oubli de raw strings** : En Python, \`"\\alpha"\` peut être interprété comme une séquence d'échappement. Utilisez toujours \`r"\\alpha"\`.
2. **Symboles grecs** : SymPy reconnaît \`symbols('alpha')\` et l'affiche $\\alpha$. Mais attention à l'orthographe.
3. **Confusion Fonctions/Symboles** : \`f(x)\` doit être défini comme \`Function('f')(x)\` ou expression.

### Débogage
Si LaTeX ne s'affiche pas correctement, vérifiez le code LaTeX généré avec \`print(sp.latex(expr))\`.
        `,
        code: `import sympy as sp

# Bug 1 : Chaînes brutes (raw strings)
print("=== Chaînes brutes (r-strings) ===")
# Mauvais :
print("Ligne\nnouvelle") # Interprète \n
# Bon :
print(r"Ligne\nnouvelle") # N'interprète pas \n, affiche le \

# Bug 2 : Symboles grecs
print("\\n=== Symboles grecs ===")
alpha, beta = sp.symbols('alpha beta')
expr = alpha + beta
print(f"Expression : {expr}")
print(f"LaTeX : {sp.latex(expr)}")

# Bug 3 : Fonction vs Symbole
print("\\n=== Fonction non définie ===")
f = sp.Function('f')
x = sp.Symbol('x')
deriv = sp.Derivative(f(x), x)
print(f"Dérivée : {deriv}")
print(f"LaTeX : {sp.latex(deriv)}")

# Bug 4 : Fractions mal formées
print("\\n=== Fractions ===")
# Attention : 1/2 en Python donne 0.5 (float)
expr_float = 1/2 * x 
expr_rational = sp.Rational(1, 2) * x
print(f"Float : {expr_float} -> LaTeX: {sp.latex(expr_float)}")
print(f"Rationnel : {expr_rational} -> LaTeX: {sp.latex(expr_rational)}")`,
        exercice: `Définissez une fonction $g(x, y) = \sqrt{x^2 + y^2}$ et affichez sa formule LaTeX correctement.`
    },

    latex_beauty: {
        title: "LaTeX pour de belles équations",
        theorie: `
## LaTeX Avancé

Pour faire des rapports scientifiques professionnels, LaTeX est incontournable.

### Quelques commandes utiles
- **Intégrales** : \`\\int_{a}^{b} f(x) dx\`
- **Limites** : \`\\lim_{x \\to \\infty}\`
- **Matrices** : \`\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\`
- **Systèmes** : \`\\begin{cases} x+y=1 \\\\ x-y=0 \\end{cases}\`

### SymPy vers LaTeX
SymPy génère généralement un bon LaTeX, mais pour des structures complexes (systèmes, matrices), on peut avoir besoin d'ajuster ou d'utiliser des objets spécifiques.
        `,
        code: `import sympy as sp
x = sp.Symbol('x')

print("=== Belles équations LaTeX ===")

# Intégrale définie
expr = sp.Integral(sp.sin(x)**2, (x, 0, sp.pi))
print(f"Intégrale : {sp.latex(expr)}")

# Limite
lim = sp.Limit(sp.sin(x)/x, x, 0)
print(f"Limite : {sp.latex(lim)} = {sp.latex(lim.doit())}")

# Matrice
M = sp.Matrix([[1, 2], [3, 4]])
print(f"Matrice : {sp.latex(M)}")

# Équation de Schrödinger (exemple manuel)
schrodinger = r"i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi"
print(f"Schrödinger : {schrodinger}")

# Série infinie
n = sp.Symbol('n')
serie = sp.Sum(1/n**2, (n, 1, sp.oo))
print(f"Série de Bâle : {sp.latex(serie)} = {sp.latex(serie.doit())}")`,
        exercice: `Générez le code LaTeX pour la matrice identité $I_3$.`
    },

    sympy_plotting: {
        title: "Visualiser avec SymPy et Matplotlib",
        theorie: `
## Tracer avec SymPy

Bien que Matplotlib soit plus puissant pour les données numériques, SymPy possède un module \`plot\` pratique pour visualiser rapidement des fonctions symboliques.

### Fonction plot()
\`\`\`python
from sympy.plotting import plot
plot(expr, (x, min, max))
\`\`\`

### Tracer plusieurs courbes
\`\`\`python
plot(f, g, (x, -5, 5))
\`\`\`

Note : Dans un environnement local, cela ouvre une fenêtre. Dans Jupyter, cela s'affiche inline.
        `,
        code: `import sympy as sp
import matplotlib.pyplot as plt
import numpy as np

# SymPy utilise matplotlib en arrière-plan
# Ici nous allons convertir une fonction SymPy en fonction numérique
# pour la tracer avec Matplotlib (plus flexible)

x = sp.Symbol('x')
f = sp.sin(x) * sp.exp(-x/10)
g = sp.cos(x)

print(f"Fonction f(x) : {f}")

# Conversion en fonction Python rapide (numpy)
f_np = sp.lambdify(x, f, 'numpy')
g_np = sp.lambdify(x, g, 'numpy')

# Création des données
t = np.linspace(0, 20, 400)
y_f = f_np(t)
y_g = g_np(t)

# Tracé avec Matplotlib
plt.figure(figsize=(10, 6))
plt.plot(t, y_f, label=f'${sp.latex(f)}$', linewidth=2)
plt.plot(t, y_g, label=f'${sp.latex(g)}$', linestyle='--', alpha=0.7)
plt.title("Tracé de fonctions SymPy")
plt.xlabel("x")
plt.ylabel("y")
plt.legend(fontsize=12)
plt.grid(True, alpha=0.3)
plt.axhline(0, color='black', linewidth=0.5)

plt.savefig('sympy_plot_demo.png')
plt.show()

print("Graphique généré !")`,
        exercice: `Tracez la fonction $f(x) = x^3 - 3x + 1$ sur $[-2, 2]$ et visualisez ses racines.`
    }
};
