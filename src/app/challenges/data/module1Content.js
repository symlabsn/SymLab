
export const module1Content = {
    what_is_python: {
        title: "Qu'est-ce que Python ?",
        theorie: `
## Python : Un langage puissant et accessible

**Python** est un langage de programmation interprété, de haut niveau et polyvalent. Créé par **Guido van Rossum** et publié en 1991, il est aujourd'hui l'un des langages les plus populaires au monde (TIOBE Index #1).

### Pourquoi Python ?

1.  **Simplicité** : Sa syntaxe est claire, lisible et proche de l'anglais. C'est l'idéal pour débuter.
2.  **Polyvalence** : Utilisé en développement web, analyse de données, intelligence artificielle, automatisation, scientifique, etc.
3.  **Communauté** : Une immense communauté mondiale qui offre de l'aide, des tutoriels et des bibliothèques gratuites.
4.  **Open Source** : Gratuit et libre d'utilisation pour tous les projets.

### Python vs Autres langages (C++, Java)

| Caractéristique | Python | C++ / Java |
| :--- | :--- | :--- |
| **Syntaxe** | Concise, indentation obligatoire | Verbeuse, accolades {} |
| **Typage** | Dynamique (pas besoin de déclarer le type) | Statique (types stricts) |
| **Vitesse** | Plus lent (interprété) | Très rapide (compilé) |
| **Productivité** | Très haute (code écrit vite) | Moyenne (plus de code à écrire) |

### Domaines d'application

*   **Science des données & IA** (avec *NumPy, Pandas, TensorFlow*) : Le leader incontesté.
*   **Développement Web** (avec *Django, Flask*).
*   **Scripting & Automatisation**.
*   **Éducation** et Recherche.
        `,
        code: `# Exemple simple de la puissance de Python

# 1. Lisibilité : Pas de points-virgules, pas d'accolades excessives
def saluer(nom):
    return f"Bonjour, {nom} !"

print(saluer("le Monde"))

# 2. Puissance : Listes et boucles concises (List Comprehension)
nombres = [1, 2, 3, 4, 5]
carres = [x**2 for x in nombres]

print(f"Nombres : {nombres}")
print(f"Carrés  : {carres}")

# 3. Typage dynamique
variable = 42
print(f"J'ai {variable} ans.")
variable = "Quarante-deux"
print(f"C'est écrit : {variable}.")`,
        exercice: `
**Exercice de réflexion :**

1.  Pourquoi dit-on que Python est un langage "interprété" ?
2.  Citez 3 domaines où Python est très utilisé.
3.  Exécutez le code d'exemple ci-dessus pour voir la syntaxe en action.
        `
    },

    jupyter: {
        title: "Utiliser Python avec Jupyter (Anaconda)",
        theorie: `
## Qu'est-ce que Jupyter Notebook ?

**Jupyter Notebook** est un environnement de développement interactif qui permet d'écrire et d'exécuter du code Python dans des "cellules". C'est l'outil idéal pour :

- Expérimenter avec du code
- Visualiser des résultats immédiatement
- Documenter votre travail avec du texte et des formules mathématiques
- Partager vos analyses

## Installation avec Anaconda

**Anaconda** est une distribution Python qui inclut Jupyter et plus de 250 packages scientifiques pré-installés (NumPy, Sympy, Matplotlib, etc.).

### Étapes d'installation :

1. Rendez-vous sur [anaconda.com/download](https://anaconda.com/download)
2. Téléchargez la version pour votre système (Windows, Mac, Linux)
3. Exécutez l'installateur et suivez les instructions
4. Une fois installé, lancez "Anaconda Navigator"
5. Cliquez sur "Launch" sous Jupyter Notebook

### Lancer Jupyter depuis le terminal :

\`\`\`bash
jupyter notebook
\`\`\`

Cela ouvrira automatiquement votre navigateur web avec l'interface Jupyter.
        `,
        code: `# Votre première cellule Jupyter !
# Exécutez cette cellule avec Shift + Entrée

print("Bienvenue dans Jupyter Notebook !")
print("Python version :", 3.10)

# Les résultats s'affichent directement sous la cellule
resultat = 2 + 2
print(f"2 + 2 = {resultat}")

# La dernière expression est automatiquement affichée
42 * 3`,
        exercice: `
**Exercice pratique :**

1. Créez une nouvelle cellule (bouton "+" ou touche "b")
2. Tapez \`print("Mon premier programme")\`
3. Exécutez avec **Shift + Entrée**
4. Observez le résultat !
        `
    },

    colab: {
        title: "Utiliser Python via Google Colab",
        theorie: `
## Google Colab : Python dans le cloud

**Google Colaboratory** (Colab) est un service gratuit de Google qui permet d'exécuter du code Python directement dans votre navigateur, sans aucune installation !

### Avantages de Colab :

- **Aucune installation** : Tout fonctionne dans le navigateur
- **Gratuit** : Accès à des GPU/TPU pour le calcul intensif
- **Collaboratif** : Partagez vos notebooks comme des Google Docs
- **Pré-configuré** : NumPy, Sympy, Matplotlib déjà installés

### Comment commencer :

1. Allez sur [colab.research.google.com](https://colab.research.google.com)
2. Connectez-vous avec votre compte Google
3. Cliquez sur "Nouveau Notebook"
4. Commencez à coder !

### Interface :

- **Cellules de code** : Pour écrire et exécuter du Python
- **Cellules de texte** : Pour documenter avec Markdown/LaTeX
- **Menu Runtime** : Pour exécuter toutes les cellules ou redémarrer
        `,
        code: `# Test de Google Colab
# Exécutez avec Ctrl + Entrée ou le bouton Play

import sys
print(f"Version Python : {sys.version}")

# Vérification des packages scientifiques
import numpy as np
import sympy as sp

print("NumPy version :", np.__version__)
print("Sympy version :", sp.__version__)

# Test rapide
x = sp.Symbol('x')
expression = x**2 + 2*x + 1
print(f"Expression : {expression}")
print(f"Factorisée : {sp.factor(expression)}")`,
        exercice: `
**Exercice pratique :**

1. Ouvrez Google Colab
2. Créez un nouveau notebook
3. Dans la première cellule, tapez :
   \`\`\`python
   import sympy as sp
   sp.init_printing()
   \`\`\`
4. Exécutez et observez le rendu des formules !
        `
    },

    help: {
        title: "Obtenir de l'aide en Python",
        theorie: `
## Trouver de l'aide en Python

Python dispose de plusieurs mécanismes intégrés pour obtenir de l'aide sur les fonctions et les modules.

### 1. La fonction help()

\`\`\`python
help(print)  # Documentation de la fonction print
help(str)    # Documentation du type string
\`\`\`

### 2. Le point d'interrogation (Jupyter/Colab)

\`\`\`python
print?       # Affiche la documentation
print??      # Affiche aussi le code source
\`\`\`

### 3. La fonction dir()

\`\`\`python
dir(str)     # Liste toutes les méthodes d'un objet
\`\`\`

### 4. Documentation en ligne

- **Documentation officielle** : [docs.python.org](https://docs.python.org)
- **NumPy** : [numpy.org/doc](https://numpy.org/doc)
- **Sympy** : [docs.sympy.org](https://docs.sympy.org)
- **Stack Overflow** : Pour les questions spécifiques
        `,
        code: `# Différentes façons d'obtenir de l'aide en Python

# 1. Fonction help() - Documentation complète
print("=== Documentation de abs() ===")
help(abs)

# 2. Fonction dir() - Liste des attributs/méthodes
print("\\n=== Méthodes du type 'list' ===")
methodes = [m for m in dir(list) if not m.startswith('_')]
print(methodes[:10], "...")  # 10 premières

# 3. Attribut __doc__ - Docstring
print("\\n=== Docstring de sum() ===")
print(sum.__doc__)

# 4. Type d'un objet
valeur = 3.14159
print(f"\\nLe type de {valeur} est : {type(valeur)}")`,
        exercice: `
**Exercice pratique :**

1. Utilisez \`help()\` pour découvrir la fonction \`round()\`
2. Combien d'arguments accepte-t-elle ?
3. Utilisez \`dir()\` sur un nombre flottant (\`3.14\`)
4. Trouvez une méthode intéressante et testez-la !
        `
    }
};
