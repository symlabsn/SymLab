'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProgrammingPage() {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);

    const curriculum = [
        {
            id: 'intro',
            title: '1. Introduction à Python',
            icon: '🐍',
            color: '#00F5D4',
            lessons: [
                {
                    title: 'Histoire et philosophie de Python',
                    content: `Python a été créé par Guido van Rossum en 1991. Le nom vient de la série "Monty Python's Flying Circus". 
          
**Philosophie (Zen of Python):**
- Beautiful is better than ugly
- Explicit is better than implicit
- Simple is better than complex
- Readability counts

Python est devenu le langage #1 pour la science grâce à sa simplicité et sa puissante écosystème scientifique.`,
                    code: `import this  # Affiche le Zen of Python`
                },
                {
                    title: 'Pourquoi Python pour les sciences ?',
                    content: `**Avantages pour les scientifiques:**
- 📊 Syntaxe claire et lisible (proche des mathématiques)
- 🔬 Bibliothèques scientifiques puissantes (NumPy, SciPy, SymPy)
- 📈 Visualisation de données (Matplotlib, Plotly)
- 🚀 Prototypage rapide d'algorithmes
- 🌍 Communauté scientifique active

**Domaines d'application:**
- Physique computationnelle
- Analyse de données expérimentales
- Modélisation mathématique
- Intelligence artificielle
- Bioinformatique`,
                    code: `# Exemple: Résoudre une équation en une ligne
from sympy import solve, symbols
x = symbols('x')
solve(x**2 - 4, x)  # [-2, 2]`
                },
                {
                    title: 'Installation et environnement',
                    content: `**Installation recommandée:**
1. Anaconda (distribution scientifique complète)
2. Jupyter Notebook (environnement interactif)

**Vérification de l'installation:**`,
                    code: `# Vérifier la version de Python
import sys
print(f"Python {sys.version}")

# Vérifier les bibliothèques scientifiques
import numpy as np
import matplotlib.pyplot as plt
import sympy as sp

print("✓ Environnement scientifique prêt!")`
                },
                {
                    title: 'Premier programme scientifique',
                    content: `Créons notre premier programme qui calcule et visualise une fonction mathématique.`,
                    code: `import numpy as np
import matplotlib.pyplot as plt

# Définir la fonction f(x) = x²
x = np.linspace(-10, 10, 100)
y = x**2

# Visualiser
plt.figure(figsize=(8, 6))
plt.plot(x, y, 'b-', linewidth=2)
plt.grid(True, alpha=0.3)
plt.xlabel('x')
plt.ylabel('f(x) = x²')
plt.title('Ma première visualisation scientifique')
plt.show()

print("🎉 Bienvenue dans Python scientifique!")`
                }
            ]
        },
        {
            id: 'basics',
            title: '2. Fondamentaux',
            icon: '📚',
            color: '#7C3AED',
            lessons: [
                {
                    title: 'Variables et types de données',
                    content: `En Python, les variables sont dynamiquement typées. Pas besoin de déclarer le type!

**Types de base:**
- int (entiers)
- float (décimaux)
- str (chaînes)
- bool (booléens)`,
                    code: `# Variables scientifiques
masse = 5.0  # kg
vitesse = 10.0  # m/s
energie_cinetique = 0.5 * masse * vitesse**2

print(f"Énergie cinétique: {energie_cinetique} J")

# Constantes physiques
c = 3e8  # vitesse de la lumière (m/s)
h = 6.626e-34  # constante de Planck (J.s)
G = 6.674e-11  # constante gravitationnelle`
                },
                {
                    title: 'Opérateurs arithmétiques',
                    content: `Python supporte tous les opérateurs mathématiques standards et plus encore.`,
                    code: `# Opérateurs de base
a, b = 10, 3

print(f"Addition: {a + b}")
print(f"Soustraction: {a - b}")
print(f"Multiplication: {a * b}")
print(f"Division: {a / b}")
print(f"Division entière: {a // b}")
print(f"Modulo: {a % b}")
print(f"Puissance: {a ** b}")

# Application: Formule quadratique
import math
a, b, c = 1, -5, 6
discriminant = b**2 - 4*a*c
x1 = (-b + math.sqrt(discriminant)) / (2*a)
x2 = (-b - math.sqrt(discriminant)) / (2*a)
print(f"Racines: x1={x1}, x2={x2}")`
                },
                {
                    title: 'Structures de contrôle',
                    content: `Les structures if/else, for et while permettent de contrôler le flux d'exécution.`,
                    code: `# Condition: Classifier un nombre
nombre = 42

if nombre > 0:
    print("Positif")
elif nombre < 0:
    print("Négatif")
else:
    print("Zéro")

# Boucle for: Suite de Fibonacci
n = 10
fib = [0, 1]
for i in range(2, n):
    fib.append(fib[i-1] + fib[i-2])
print(f"Fibonacci({n}): {fib}")

# Boucle while: Méthode de Newton
x = 2.0  # Approximation initiale de √2
for _ in range(5):
    x = (x + 2/x) / 2
print(f"√2 ≈ {x}")`
                },
                {
                    title: 'Fonctions',
                    content: `Les fonctions permettent de réutiliser du code et de structurer vos programmes.`,
                    code: `# Fonction simple
def aire_cercle(rayon):
    """Calcule l'aire d'un cercle."""
    import math
    return math.pi * rayon**2

# Fonction avec plusieurs paramètres
def energie_cinetique(masse, vitesse):
    """Calcule l'énergie cinétique: E = ½mv²"""
    return 0.5 * masse * vitesse**2

# Fonction avec valeur par défaut
def chute_libre(t, g=9.81):
    """Position lors d'une chute libre: y = ½gt²"""
    return 0.5 * g * t**2

# Utilisation
print(f"Aire (r=5): {aire_cercle(5):.2f}")
print(f"Ec (m=10, v=5): {energie_cinetique(10, 5)} J")
print(f"Chute (t=2s): {chute_libre(2):.2f} m")`
                }
            ]
        },
        {
            id: 'data-structures',
            title: '3. Structures de Données',
            icon: '🗂️',
            color: '#FF9F1C',
            lessons: [
                {
                    title: 'Listes',
                    content: `Les listes sont des collections ordonnées et modifiables.`,
                    code: `# Créer une liste de mesures
temperatures = [20.5, 21.0, 19.8, 22.3, 20.9]

# Accès aux éléments
print(f"Première mesure: {temperatures[0]}°C")
print(f"Dernière mesure: {temperatures[-1]}°C")

# Opérations sur les listes
temperatures.append(23.1)  # Ajouter
moyenne = sum(temperatures) / len(temperatures)
print(f"Température moyenne: {moyenne:.2f}°C")

# Slicing (tranches)
premieres_trois = temperatures[:3]
print(f"3 premières: {premieres_trois}")

# List comprehension (puissant!)
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(9/5)*c + 32 for c in celsius]
print(f"Fahrenheit: {fahrenheit}")`
                },
                {
                    title: 'Dictionnaires',
                    content: `Les dictionnaires stockent des paires clé-valeur. Parfait pour les données scientifiques!`,
                    code: `# Constantes physiques
constantes = {
    'c': 299792458,      # m/s
    'h': 6.62607015e-34, # J⋅s
    'G': 6.67430e-11,    # m³⋅kg⁻¹⋅s⁻²
    'e': 1.602176634e-19 # C
}

print(f"Vitesse de la lumière: {constantes['c']} m/s")

# Données expérimentales
experience = {
    'date': '2024-01-15',
    'temperature': 25.3,
    'pression': 101325,
    'humidite': 65,
    'mesures': [1.2, 1.5, 1.3, 1.4]
}

print(f"Moyenne: {sum(experience['mesures'])/len(experience['mesures'])}")`
                },
                {
                    title: 'Tuples et ensembles',
                    content: `Tuples (immutables) et ensembles (uniques) complètent l'arsenal des structures de données.`,
                    code: `# Tuple: Coordonnées (x, y, z)
position = (10.5, 20.3, 5.0)
x, y, z = position  # Unpacking
print(f"Position: x={x}, y={y}, z={z}")

# Ensemble: Éléments uniques
elements_detectes = {'H', 'He', 'O', 'N', 'H', 'O'}
print(f"Éléments uniques: {elements_detectes}")

# Opérations d'ensembles
groupe_a = {'H', 'He', 'Li'}
groupe_b = {'He', 'Ne', 'Ar'}
print(f"Intersection: {groupe_a & groupe_b}")
print(f"Union: {groupe_a | groupe_b}")`
                }
            ]
        },
        {
            id: 'scientific',
            title: '4. Python Scientifique',
            icon: '🔬',
            color: '#10B981',
            lessons: [
                {
                    title: 'NumPy - Calcul numérique',
                    content: `NumPy est LA bibliothèque pour le calcul numérique en Python. Arrays multidimensionnels ultra-rapides!`,
                    code: `import numpy as np

# Créer des arrays
vecteur = np.array([1, 2, 3, 4, 5])
matrice = np.array([[1, 2], [3, 4]])

# Opérations vectorisées (RAPIDES!)
x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)

# Statistiques
donnees = np.random.normal(100, 15, 1000)
print(f"Moyenne: {np.mean(donnees):.2f}")
print(f"Écart-type: {np.std(donnees):.2f}")

# Algèbre linéaire
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
produit = A @ B  # Produit matriciel
print(f"A × B =\\n{produit}")`
                },
                {
                    title: 'Matplotlib - Visualisation',
                    content: `Matplotlib permet de créer des graphiques scientifiques de qualité publication.`,
                    code: `import numpy as np
import matplotlib.pyplot as plt

# Données
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Graphique multiple
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))

# Subplot 1: Fonctions trigonométriques
ax1.plot(x, y1, 'b-', label='sin(x)', linewidth=2)
ax1.plot(x, y2, 'r--', label='cos(x)', linewidth=2)
ax1.grid(True, alpha=0.3)
ax1.legend()
ax1.set_xlabel('x')
ax1.set_ylabel('y')
ax1.set_title('Fonctions trigonométriques')

# Subplot 2: Histogramme
data = np.random.normal(0, 1, 1000)
ax2.hist(data, bins=30, alpha=0.7, color='green')
ax2.set_xlabel('Valeur')
ax2.set_ylabel('Fréquence')
ax2.set_title('Distribution normale')

plt.tight_layout()
plt.show()`
                },
                {
                    title: 'SciPy - Calculs avancés',
                    content: `SciPy étend NumPy avec des algorithmes scientifiques avancés.`,
                    code: `from scipy import integrate, optimize, stats
import numpy as np

# 1. Intégration numérique
def f(x):
    return np.exp(-x**2)

resultat, erreur = integrate.quad(f, 0, np.inf)
print(f"∫₀^∞ e^(-x²) dx = {resultat:.6f}")

# 2. Optimisation
def energie(x):
    return x**4 - 3*x**2 + 2

minimum = optimize.minimize(energie, x0=0)
print(f"Minimum à x = {minimum.x[0]:.4f}")

# 3. Statistiques
echantillon = np.random.normal(100, 15, 50)
moyenne, intervalle = stats.t.interval(
    0.95, len(echantillon)-1,
    loc=np.mean(echantillon),
    scale=stats.sem(echantillon)
)
print(f"IC 95%: [{intervalle[0]:.2f}, {intervalle[1]:.2f}]")`
                },
                {
                    title: 'Pandas - Analyse de données',
                    content: `Pandas facilite la manipulation et l'analyse de données tabulaires.`,
                    code: `import pandas as pd
import numpy as np

# Créer un DataFrame (tableau de données)
experiences = pd.DataFrame({
    'temperature': [20, 25, 30, 35, 40],
    'pression': [101, 102, 103, 104, 105],
    'volume': [22.4, 23.1, 23.8, 24.5, 25.2]
})

print(experiences)

# Statistiques descriptives
print("\\nStatistiques:")
print(experiences.describe())

# Calculs sur colonnes
experiences['PV'] = experiences['pression'] * experiences['volume']

# Filtrage
haute_temp = experiences[experiences['temperature'] > 30]
print(f"\\nHaute température:\\n{haute_temp}")

# Lecture de fichiers CSV
# df = pd.read_csv('donnees.csv')
# df.to_excel('resultats.xlsx')`
                }
            ]
        },
        {
            id: 'sympy',
            title: '5. SymPy - Calcul Symbolique',
            icon: '∑',
            color: '#00F5D4',
            lessons: [
                {
                    title: 'Introduction au calcul symbolique',
                    content: `SymPy permet de faire des mathématiques EXACTES, pas seulement numériques!

**Différence clé:**
- NumPy: 1/3 = 0.333333...
- SymPy: 1/3 = 1/3 (exact!)`,
                    code: `from sympy import *

# Créer des symboles
x, y, z = symbols('x y z')
alpha, beta = symbols('alpha beta', real=True)

# Expressions symboliques
expr = x**2 + 2*x + 1
print(f"Expression: {expr}")

# Simplification
simplifie = simplify((x**2 - 1)/(x - 1))
print(f"Simplifié: {simplifie}")  # x + 1

# Développement
developpe = expand((x + y)**3)
print(f"(x+y)³ = {developpe}")

# Factorisation
factorise = factor(x**2 - 4)
print(f"Factorisé: {factorise}")  # (x-2)(x+2)`
                },
                {
                    title: 'Algèbre et résolution d\'équations',
                    content: `SymPy peut résoudre des équations algébriques symboliquement.`,
                    code: `from sympy import *

x, y = symbols('x y')

# Équation simple
eq1 = Eq(x**2 - 4, 0)
solutions = solve(eq1, x)
print(f"x² - 4 = 0 → x = {solutions}")

# Système d'équations
eq1 = Eq(x + y, 5)
eq2 = Eq(x - y, 1)
systeme = solve([eq1, eq2], [x, y])
print(f"Système: {systeme}")

# Équation paramétrique
a, b, c = symbols('a b c')
eq_quadratique = a*x**2 + b*x + c
solutions = solve(eq_quadratique, x)
print(f"ax² + bx + c = 0:")
for sol in solutions:
    print(f"  x = {sol}")

# Inéquations
ineq = x**2 - 4 > 0
print(f"x² - 4 > 0 → {solve(ineq, x)}")`
                },
                {
                    title: 'Calcul différentiel',
                    content: `Dérivées symboliques exactes - le rêve de tout étudiant en sciences!`,
                    code: `from sympy import *

x, t = symbols('x t')

# Dérivée simple
f = x**3 + 2*x**2 - 5*x + 1
df = diff(f, x)
print(f"f(x) = {f}")
print(f"f'(x) = {df}")

# Dérivées d'ordre supérieur
d2f = diff(f, x, 2)  # Dérivée seconde
print(f"f''(x) = {d2f}")

# Règle de la chaîne
g = sin(x**2)
dg = diff(g, x)
print(f"d/dx[sin(x²)] = {dg}")

# Applications physiques
# Position → Vitesse → Accélération
s = t**3 - 6*t**2 + 9*t
v = diff(s, t)  # Vitesse
a = diff(v, t)  # Accélération
print(f"\\nCinématique:")
print(f"Position: s(t) = {s}")
print(f"Vitesse: v(t) = {v}")
print(f"Accélération: a(t) = {a}")`
                },
                {
                    title: 'Calcul intégral',
                    content: `Intégrales définies et indéfinies, exactes et symboliques.`,
                    code: `from sympy import *

x, t, a, b = symbols('x t a b')

# Intégrale indéfinie (primitive)
f = x**2
F = integrate(f, x)
print(f"∫ x² dx = {F}")

# Intégrale définie
resultat = integrate(x**2, (x, 0, 1))
print(f"∫₀¹ x² dx = {resultat}")  # 1/3 (exact!)

# Intégrales complexes
expr = exp(-x**2)
I = integrate(expr, (x, -oo, oo))
print(f"∫₋∞^∞ e^(-x²) dx = {I}")  # √π

# Application: Travail d'une force
F = 2*x + 3  # Force variable
W = integrate(F, (x, 0, 10))
print(f"\\nTravail: W = {W} J")

# Intégrale double
expr = x*y
I = integrate(expr, (x, 0, 1), (y, 0, 1))
print(f"∫∫ xy dxdy = {I}")`
                },
                {
                    title: 'Équations différentielles',
                    content: `Résolution symbolique d'équations différentielles - crucial pour la physique!`,
                    code: `from sympy import *

t = symbols('t')
y = Function('y')

# Équation différentielle du 1er ordre
# dy/dt = y
eq1 = Eq(y(t).diff(t), y(t))
sol1 = dsolve(eq1, y(t))
print(f"dy/dt = y")
print(f"Solution: {sol1}")

# Équation du 2nd ordre: Oscillateur harmonique
# d²y/dt² + ω²y = 0
omega = symbols('omega', positive=True)
eq2 = Eq(y(t).diff(t, 2) + omega**2*y(t), 0)
sol2 = dsolve(eq2, y(t))
print(f"\\nOscillateur harmonique:")
print(f"d²y/dt² + ω²y = 0")
print(f"Solution: {sol2}")

# Chute libre avec résistance de l'air
# m(dv/dt) = -mg - kv
m, g, k = symbols('m g k', positive=True)
v = Function('v')
eq3 = Eq(m*v(t).diff(t), -m*g - k*v(t))
sol3 = dsolve(eq3, v(t))
print(f"\\nChute avec frottement:")
print(f"Solution: {sol3}")`
                },
                {
                    title: 'Algèbre linéaire symbolique',
                    content: `Matrices, vecteurs et systèmes linéaires en symbolique.`,
                    code: `from sympy import *

# Créer des matrices symboliques
a, b, c, d = symbols('a b c d')
M = Matrix([[a, b], [c, d]])
print(f"Matrice M:")
print(M)

# Déterminant
det_M = M.det()
print(f"\\ndet(M) = {det_M}")

# Inverse
M_inv = M.inv()
print(f"\\nM⁻¹ =")
print(M_inv)

# Valeurs propres
eigenvals = M.eigenvals()
print(f"\\nValeurs propres: {eigenvals}")

# Application: Système linéaire
# 2x + 3y = 5
# 4x + y = 6
A = Matrix([[2, 3], [4, 1]])
b = Matrix([5, 6])
solution = A.inv() * b
print(f"\\nSolution du système:")
print(f"x = {solution[0]}")
print(f"y = {solution[1]}")`
                },
                {
                    title: 'Applications physique et ingénierie',
                    content: `Exemples concrets d'utilisation de SymPy en sciences.`,
                    code: `from sympy import *
from sympy.physics import units as u

# 1. Loi d'Ohm symbolique
V, I, R = symbols('V I R', positive=True)
loi_ohm = Eq(V, I*R)
print("Loi d'Ohm: V = IR")
I_solution = solve(loi_ohm, I)[0]
print(f"I = {I_solution}")

# 2. Énergie cinétique relativiste
m, v, c = symbols('m v c', positive=True)
gamma = 1/sqrt(1 - v**2/c**2)
E = m*c**2*gamma
E_series = series(E, v, 0, 3)
print(f"\\nÉnergie relativiste (série):")
print(f"E ≈ {E_series}")

# 3. Loi de refraction (Snell-Descartes)
n1, n2, theta1, theta2 = symbols('n1 n2 theta1 theta2', real=True)
snell = Eq(n1*sin(theta1), n2*sin(theta2))
theta2_sol = solve(snell, theta2)[0]
print(f"\\nLoi de Snell:")
print(f"θ₂ = {theta2_sol}")

# 4. Circuit RC
t, tau = symbols('t tau', positive=True)
V0 = symbols('V0')
V_t = V0 * exp(-t/tau)
print(f"\\nCircuit RC:")
print(f"V(t) = {V_t}")
print(f"dV/dt = {diff(V_t, t)}")`
                }
            ]
        },
        {
            id: 'advanced',
            title: '6. Concepts Avancés',
            icon: '🚀',
            color: '#7C3AED',
            lessons: [
                {
                    title: 'Programmation orientée objet',
                    content: `Les classes permettent de créer vos propres types de données scientifiques.`,
                    code: `class Particule:
    """Représente une particule physique."""
    
    def __init__(self, masse, charge, position):
        self.masse = masse      # kg
        self.charge = charge    # C
        self.position = position  # m
        self.vitesse = [0, 0, 0]  # m/s
    
    def energie_cinetique(self):
        """Calcule l'énergie cinétique."""
        v2 = sum(v**2 for v in self.vitesse)
        return 0.5 * self.masse * v2
    
    def __str__(self):
        return f"Particule(m={self.masse}kg, q={self.charge}C)"

# Utilisation
electron = Particule(
    masse=9.109e-31,
    charge=-1.602e-19,
    position=[0, 0, 0]
)
electron.vitesse = [1e6, 0, 0]
print(electron)
print(f"Ec = {electron.energie_cinetique():.2e} J")`
                },
                {
                    title: 'Gestion des fichiers',
                    content: `Lire et écrire des données expérimentales.`,
                    code: `import numpy as np
import pandas as pd

# 1. Fichiers texte simples
donnees = [1.2, 1.5, 1.3, 1.4, 1.6]

# Écriture
with open('mesures.txt', 'w') as f:
    for valeur in donnees:
        f.write(f"{valeur}\\n")

# Lecture
with open('mesures.txt', 'r') as f:
    mesures = [float(line.strip()) for line in f]
print(f"Mesures lues: {mesures}")

# 2. NumPy (binaire, rapide)
data = np.array([[1, 2, 3], [4, 5, 6]])
np.save('data.npy', data)
loaded = np.load('data.npy')

# 3. CSV avec Pandas
df = pd.DataFrame({
    'temps': [0, 1, 2, 3],
    'position': [0, 4.9, 19.6, 44.1]
})
df.to_csv('experience.csv', index=False)
df_lu = pd.read_csv('experience.csv')
print(df_lu)`
                },
                {
                    title: 'Modules et packages',
                    content: `Organiser votre code en modules réutilisables.`,
                    code: `# Fichier: physique.py
"""Module de constantes et fonctions physiques."""

# Constantes
C = 299792458  # m/s
H = 6.62607015e-34  # J⋅s
K_B = 1.380649e-23  # J/K

def energie_photon(frequence):
    """Calcule l'énergie d'un photon: E = hν"""
    return H * frequence

def longueur_onde(frequence):
    """Calcule la longueur d'onde: λ = c/ν"""
    return C / frequence

# Utilisation dans un autre fichier:
# import physique
# E = physique.energie_photon(5e14)
# print(f"Énergie: {E:.2e} J")

# Ou:
# from physique import energie_photon, C
# print(f"c = {C} m/s")`
                },
                {
                    title: 'Debugging et bonnes pratiques',
                    content: `Écrire du code scientifique robuste et maintenable.`,
                    code: `import numpy as np

def calculer_vitesse(position, temps):
    """
    Calcule la vitesse à partir de positions et temps.
    
    Parameters:
    -----------
    position : array-like
        Positions en mètres
    temps : array-like
        Temps en secondes
    
    Returns:
    --------
    vitesse : ndarray
        Vitesses en m/s
    
    Raises:
    -------
    ValueError
        Si les tableaux n'ont pas la même taille
    """
    position = np.array(position)
    temps = np.array(temps)
    
    if len(position) != len(temps):
        raise ValueError("Position et temps doivent avoir la même taille")
    
    if len(position) < 2:
        raise ValueError("Au moins 2 points nécessaires")
    
    # Calcul de la vitesse (différences finies)
    vitesse = np.diff(position) / np.diff(temps)
    
    return vitesse

# Tests
try:
    pos = [0, 5, 10, 15]
    t = [0, 1, 2, 3]
    v = calculer_vitesse(pos, t)
    print(f"Vitesses: {v} m/s")
except ValueError as e:
    print(f"Erreur: {e}")`
                }
            ]
        },
        {
            id: 'projects',
            title: '7. Projets Scientifiques',
            icon: '🎯',
            color: '#FF9F1C',
            lessons: [
                {
                    title: 'Simulation de mouvement projectile',
                    content: `Projet complet: Simuler et visualiser un projectile avec résistance de l'air.`,
                    code: `import numpy as np
import matplotlib.pyplot as plt

def simuler_projectile(v0, angle, m=1.0, k=0.1, dt=0.01):
    """
    Simule un projectile avec résistance de l'air.
    
    Équations:
    - F_x = -k*v_x
    - F_y = -mg - k*v_y
    """
    g = 9.81
    angle_rad = np.radians(angle)
    
    # Conditions initiales
    vx = v0 * np.cos(angle_rad)
    vy = v0 * np.sin(angle_rad)
    x, y = 0, 0
    
    # Listes pour stocker la trajectoire
    X, Y = [x], [y]
    
    # Simulation
    while y >= 0:
        # Forces
        ax = -(k/m) * vx
        ay = -g - (k/m) * vy
        
        # Mise à jour (Euler)
        vx += ax * dt
        vy += ay * dt
        x += vx * dt
        y += vy * dt
        
        X.append(x)
        Y.append(y)
    
    return np.array(X), np.array(Y)

# Simulation
X, Y = simuler_projectile(v0=50, angle=45)

# Visualisation
plt.figure(figsize=(10, 6))
plt.plot(X, Y, 'b-', linewidth=2, label='Avec résistance')
plt.xlabel('Distance (m)')
plt.ylabel('Hauteur (m)')
plt.title('Trajectoire d\\'un projectile')
plt.grid(True, alpha=0.3)
plt.legend()
plt.show()

print(f"Portée: {X[-1]:.2f} m")
print(f"Hauteur max: {Y.max():.2f} m")`
                },
                {
                    title: 'Analyse de données expérimentales',
                    content: `Analyser des mesures réelles avec incertitudes et régression.`,
                    code: `import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# Données expérimentales (Loi d'Ohm)
V = np.array([0, 1, 2, 3, 4, 5])  # Volts
I = np.array([0.02, 1.1, 1.95, 3.05, 3.9, 5.1])  # mA
I_err = np.array([0.1, 0.1, 0.1, 0.1, 0.1, 0.1])  # Incertitude

# Régression linéaire
slope, intercept, r_value, p_value, std_err = stats.linregress(V, I)

print(f"Résistance: R = {1000/slope:.2f} Ω")
print(f"R² = {r_value**2:.4f}")
print(f"Erreur standard: {std_err:.4f}")

# Visualisation
plt.figure(figsize=(10, 6))
plt.errorbar(V, I, yerr=I_err, fmt='o', label='Mesures', 
             capsize=5, markersize=8)
plt.plot(V, slope*V + intercept, 'r-', 
         label=f'Régression: I = {slope:.2f}V + {intercept:.2f}')
plt.xlabel('Tension (V)')
plt.ylabel('Courant (mA)')
plt.title('Vérification de la loi d\\'Ohm')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`
                },
                {
                    title: 'Modélisation mathématique',
                    content: `Modéliser un système dynamique: Prédateur-Proie (Lotka-Volterra).`,
                    code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

def lotka_volterra(y, t, alpha, beta, delta, gamma):
    """
    Modèle Lotka-Volterra (prédateur-proie).
    
    dy1/dt = alpha*y1 - beta*y1*y2    (proies)
    dy2/dt = delta*y1*y2 - gamma*y2   (prédateurs)
    """
    y1, y2 = y
    dy1dt = alpha*y1 - beta*y1*y2
    dy2dt = delta*y1*y2 - gamma*y2
    return [dy1dt, dy2dt]

# Paramètres
alpha = 1.0   # Taux de naissance proies
beta = 0.1    # Taux de prédation
delta = 0.075 # Efficacité prédation
gamma = 1.5   # Taux de mort prédateurs

# Conditions initiales
y0 = [10, 5]  # [proies, prédateurs]

# Temps
t = np.linspace(0, 15, 1000)

# Résolution
solution = odeint(lotka_volterra, y0, t, 
                  args=(alpha, beta, delta, gamma))

# Visualisation
plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)
plt.plot(t, solution[:, 0], 'b-', label='Proies', linewidth=2)
plt.plot(t, solution[:, 1], 'r-', label='Prédateurs', linewidth=2)
plt.xlabel('Temps')
plt.ylabel('Population')
plt.legend()
plt.grid(True, alpha=0.3)
plt.title('Évolution temporelle')

plt.subplot(1, 2, 2)
plt.plot(solution[:, 0], solution[:, 1], 'g-', linewidth=2)
plt.xlabel('Proies')
plt.ylabel('Prédateurs')
plt.grid(True, alpha=0.3)
plt.title('Portrait de phase')

plt.tight_layout()
plt.show()`
                },
                {
                    title: 'Visualisation scientifique avancée',
                    content: `Créer des visualisations 3D et animations pour vos résultats.`,
                    code: `import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# 1. Surface 3D: Fonction de deux variables
x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))

fig = plt.figure(figsize=(14, 6))

# Surface
ax1 = fig.add_subplot(121, projection='3d')
surf = ax1.plot_surface(X, Y, Z, cmap='viridis', alpha=0.8)
ax1.set_xlabel('X')
ax1.set_ylabel('Y')
ax1.set_zlabel('Z')
ax1.set_title('Surface: z = sin(√(x²+y²))')
fig.colorbar(surf, ax=ax1, shrink=0.5)

# Contour
ax2 = fig.add_subplot(122)
contour = ax2.contourf(X, Y, Z, levels=20, cmap='viridis')
ax2.contour(X, Y, Z, levels=20, colors='white', 
            linewidths=0.5, alpha=0.4)
ax2.set_xlabel('X')
ax2.set_ylabel('Y')
ax2.set_title('Lignes de niveau')
fig.colorbar(contour, ax=ax2)

plt.tight_layout()
plt.show()

# 2. Champ vectoriel
x = np.linspace(-2, 2, 20)
y = np.linspace(-2, 2, 20)
X, Y = np.meshgrid(x, y)
U = -Y  # Composante x
V = X   # Composante y

plt.figure(figsize=(8, 8))
plt.quiver(X, Y, U, V, alpha=0.8)
plt.xlabel('x')
plt.ylabel('y')
plt.title('Champ vectoriel: Rotation')
plt.grid(True, alpha=0.3)
plt.axis('equal')
plt.show()`
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Header */}
            <section className="max-w-6xl mx-auto mb-16 text-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 mb-6">
                    <span className="text-[#00F5D4] text-sm font-bold tracking-widest">PYTHON POUR LES SCIENCES</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    Maîtrisez Python
                </h1>

                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    De l'histoire du langage à la maîtrise complète de <span className="text-[#00F5D4] font-bold">SymPy</span>,
                    apprenez Python avec une approche scientifique et pratique.
                </p>
            </section>

            {/* Curriculum */}
            <section className="max-w-6xl mx-auto space-y-8">
                {curriculum.map((chapter) => (
                    <div key={chapter.id} className="sci-card p-6" style={{ '--accent-color': chapter.color }}>
                        {/* Chapter Header */}
                        <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                        >
                            <div className="text-4xl">{chapter.icon}</div>
                            <h2 className="text-2xl font-bold text-white flex-1">{chapter.title}</h2>
                            <div className="text-gray-500 text-2xl">
                                {selectedChapter === chapter.id ? '▼' : '▶'}
                            </div>
                        </div>

                        {/* Lessons */}
                        {selectedChapter === chapter.id && (
                            <div className="mt-6 space-y-4">
                                {chapter.lessons.map((lesson, idx) => (
                                    <div
                                        key={idx}
                                        className="border-l-2 pl-6 py-4 cursor-pointer hover:border-white/50 transition-colors"
                                        style={{ borderColor: chapter.color + '40' }}
                                        onClick={() => setSelectedLesson(selectedLesson === `${chapter.id}-${idx}` ? null : `${chapter.id}-${idx}`)}
                                    >
                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                            <span style={{ color: chapter.color }}>▸</span>
                                            {lesson.title}
                                        </h3>

                                        {selectedLesson === `${chapter.id}-${idx}` && (
                                            <div className="mt-4 space-y-4">
                                                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                                    {lesson.content}
                                                </div>
                                                <div className="bg-black/50 rounded-lg p-4 border border-white/10">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-xs text-gray-500 font-mono">Python</span>
                                                        <button className="text-xs text-[#00F5D4] hover:text-white transition-colors">
                                                            Copier
                                                        </button>
                                                    </div>
                                                    <pre className="text-sm text-gray-300 overflow-x-auto">
                                                        <code>{lesson.code}</code>
                                                    </pre>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto mt-20 text-center">
                <div className="sci-card p-8" style={{ '--accent-color': '#00F5D4' }}>
                    <h2 className="text-2xl font-bold text-white mb-4">Prêt à coder ?</h2>
                    <p className="text-gray-400 mb-6">
                        Ouvrez l'éditeur Python et commencez à expérimenter avec le code !
                    </p>
                    <Link
                        href="/code"
                        className="inline-block px-8 py-3 rounded-lg font-bold text-black transition-all duration-300 hover:scale-105"
                        style={{ background: 'linear-gradient(90deg, #00F5D4, #7C3AED)' }}
                    >
                        Ouvrir l'Éditeur Python →
                    </Link>
                </div>
            </section>
        </main>
    );
}
