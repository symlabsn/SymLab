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
            description: 'Découvrez Python, le langage préféré des scientifiques',
            lessons: [
                {
                    title: 'Histoire et philosophie de Python',
                    analogy: '🏛️ Imaginez Python comme un langage humain : simple, clair et universel',
                    content: `**L'histoire fascinante de Python**

Python a été créé en 1991 par Guido van Rossum, un programmeur néerlandais. Le nom ne vient pas du serpent, mais de la série comique britannique "Monty Python's Flying Circus" !

**Pourquoi Python est-il spécial ?**

Imaginez que vous devez expliquer une recette de cuisine :
- En C++ : Vous devez décrire chaque ustensile, chaque geste en détail
- En Python : Vous dites simplement "mélanger les ingrédients"

**Le Zen de Python (sa philosophie) :**
- "Beau vaut mieux que laid" → Le code doit être élégant
- "Simple vaut mieux que complexe" → Pas de complications inutiles
- "La lisibilité compte" → Tout le monde doit comprendre

**Analogie :** Python est comme le français comparé au latin. Le latin est précis mais complexe, le français est plus accessible tout en restant puissant.`,
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
                    analogy: '🔬 Python est comme un couteau suisse pour scientifiques',
                    content: `**Python : L'outil parfait pour la science**

Imaginez que vous êtes un scientifique avec différents outils :
- Une calculatrice (pour les calculs)
- Un grapheur (pour les courbes)
- Un cahier de laboratoire (pour noter)
- Un microscope (pour analyser)

Python combine TOUT cela en un seul outil !

**Pourquoi les scientifiques adorent Python :**

1. **Syntaxe mathématique naturelle**
   - En maths : E = mc²
   - En Python : E = m * c**2
   → Presque identique !

2. **Bibliothèques scientifiques puissantes**
   - NumPy : Calculs sur des millions de nombres en 1 seconde
   - SymPy : Résout des équations comme vous le feriez à la main
   - Matplotlib : Crée des graphiques de qualité publication

3. **Prototypage rapide**
   - Testez une idée en 5 minutes au lieu de 5 heures
   - Modifiez facilement votre code

**Analogie :** Si Excel est une calculatrice, Python est un ordinateur quantique. Vous pouvez faire tout ce qu'Excel fait, mais aussi infiniment plus !

**Domaines d'application :**
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
                },
                {
                    title: 'Installation et premier contact',
                    analogy: '🏗️ Installer Python, c\'est comme préparer votre laboratoire',
                    content: `**Préparer votre environnement Python**

**Analogie :** Avant de cuisiner, vous préparez votre cuisine :
- Les ustensiles (Python)
- Les ingrédients (bibliothèques)
- Le plan de travail (éditeur de code)

**Option 1 : Anaconda (RECOMMANDÉ pour scientifiques)**
- Tout-en-un : Python + bibliothèques scientifiques
- Comme acheter une cuisine équipée vs. tout installer soi-même

**Option 2 : Python.org**
- Installation minimale
- Vous ajoutez les bibliothèques après

**Votre premier programme :**

Tradition en programmation : dire "Hello World!"
En science : calculons quelque chose !`,
                    keyPoints: [
                        'Anaconda = solution complète pour scientifiques',
                        'Jupyter Notebook = cahier de laboratoire numérique',
                        'Gratuit et fonctionne sur Windows/Mac/Linux',
                        'Installation en 10 minutes'
                    ],
                    code: `# Votre TOUT PREMIER programme Python !
print("Hello, Science!")

# Vérifier que tout fonctionne
import sys
print(f"Python version : {sys.version}")

# Tester les bibliothèques scientifiques
try:
    import numpy
    import matplotlib
    import sympy
    print("✅ Toutes les bibliothèques sont installées !")
    print("🎉 Vous êtes prêt à faire de la science !")
except ImportError:
    print("⚠️ Installez Anaconda pour avoir toutes les bibliothèques")`,
                    tip: '📝 Jupyter Notebook est comme Word, mais pour le code scientifique !'
                },
                {
                    title: 'Votre première visualisation scientifique',
                    analogy: '🎨 Créer un graphique, c\'est comme peindre avec des données',
                    content: `**Créons notre première courbe !**

**Analogie :** Vous allez :
1. Choisir vos couleurs (les données)
2. Préparer votre toile (la figure)
3. Dessiner (tracer la courbe)
4. Ajouter un cadre (titre, légendes)

**Ce que nous allons faire :**
Visualiser la fonction f(x) = x² (une parabole)

**Pourquoi c'est important :**
- Voir = Comprendre
- Un graphique vaut mille nombres
- Les scientifiques communiquent avec des graphiques

**Étapes détaillées :**`,
                    keyPoints: [
                        'Matplotlib = outil de dessin scientifique',
                        'NumPy = créateur de nombres',
                        'Visualiser aide à comprendre',
                        'Votre premier graphique en 10 lignes !'
                    ],
                    code: `# Importer les outils (comme sortir vos pinceaux)
import numpy as np
import matplotlib.pyplot as plt

# Étape 1 : Créer les valeurs de x
# np.linspace = "crée 100 nombres entre -10 et 10"
x = np.linspace(-10, 10, 100)

# Étape 2 : Calculer y = x²
y = x**2

# Étape 3 : Créer la figure (la toile)
plt.figure(figsize=(10, 6))  # Taille en pouces

# Étape 4 : Dessiner la courbe
plt.plot(x, y, color='blue', linewidth=2, label='f(x) = x²')

# Étape 5 : Ajouter les décorations
plt.grid(True, alpha=0.3)  # Grille légère
plt.xlabel('x', fontsize=12)
plt.ylabel('f(x)', fontsize=12)
plt.title('Ma Première Parabole !', fontsize=14, fontweight='bold')
plt.legend()  # Afficher la légende

# Étape 6 : Montrer le résultat
plt.show()

print("🎉 Félicitations ! Vous venez de créer votre premier graphique scientifique !")`,
                    tip: '🌟 Changez x**2 par x**3 ou np.sin(x) pour voir d\'autres courbes !'
                }
            ]
        },
        {
            id: 'basics',
            title: '2. Fondamentaux de Python',
            icon: '📚',
            color: '#7C3AED',
            description: 'Les briques de base pour construire vos programmes',
            lessons: [
                {
                    title: 'Variables : Les boîtes de rangement',
                    analogy: '📦 Une variable est comme une boîte étiquetée où vous rangez des choses',
                    content: `**Comprendre les variables**

**Analogie parfaite :**
Imaginez votre chambre avec des boîtes :
- Boîte "chaussures" → contient vos chaussures
- Boîte "livres" → contient vos livres
- Boîte "jouets" → contient vos jouets

En Python :
- Variable "masse" → contient 5.0
- Variable "vitesse" → contient 10.0
- Variable "nom" → contient "Einstein"

**La magie de Python :**
Vous n'avez PAS besoin de dire "cette boîte contiendra des chaussures".
Python devine automatiquement !

**Types de données (types de boîtes) :**

1. **int** (entier) → Boîte pour nombres entiers
   - Exemples : 1, 42, -17, 1000

2. **float** (décimal) → Boîte pour nombres à virgule
   - Exemples : 3.14, -0.5, 2.71828

3. **str** (string/chaîne) → Boîte pour du texte
   - Exemples : "Bonjour", "Python", "E=mc²"

4. **bool** (booléen) → Boîte pour Vrai/Faux
   - Exemples : True, False

**Règles de nommage :**
- Utilisez des noms clairs : "masse" pas "m"
- Pas d'espaces : "vitesse_lumiere" pas "vitesse lumiere"
- Pas de caractères spéciaux : "energie" pas "énergie"`,
                    keyPoints: [
                        'Variable = boîte étiquetée pour stocker des données',
                        'Python devine automatiquement le type',
                        'Noms clairs = code compréhensible',
                        'Utilisez snake_case : ma_variable'
                    ],
                    code: `# Créer des variables (ranger dans des boîtes)
masse = 5.0  # kg (nombre décimal)
vitesse = 10  # m/s (nombre entier)
nom_particule = "électron"  # texte
est_charge = True  # vrai ou faux

# Afficher le contenu des boîtes
print(f"Masse : {masse} kg")
print(f"Vitesse : {vitesse} m/s")
print(f"Particule : {nom_particule}")
print(f"Chargée ? {est_charge}")

# Vérifier le type (quel genre de boîte ?)
print(f"Type de masse : {type(masse)}")  # <class 'float'>
print(f"Type de nom : {type(nom_particule)}")  # <class 'str'>

# Calcul scientifique
energie_cinetique = 0.5 * masse * vitesse**2
print(f"\\nÉnergie cinétique : {energie_cinetique} J")

# Les variables peuvent changer !
vitesse = 20  # Nouvelle valeur
print(f"Nouvelle vitesse : {vitesse} m/s")`,
                    tip: '💡 Utilisez des noms descriptifs : "temperature_eau" au lieu de "t" !'
                },
                {
                    title: 'Opérateurs : La calculatrice de Python',
                    analogy: '🧮 Les opérateurs sont les boutons de votre calculatrice',
                    content: `**Python = Super Calculatrice**

**Analogie :** Votre calculatrice a des boutons :
- + pour additionner
- - pour soustraire
- × pour multiplier
- ÷ pour diviser

Python a les mêmes, et bien plus !

**Les opérateurs de base :**

1. **Addition (+)** → Comme vous l'imaginez
   - 5 + 3 = 8

2. **Soustraction (-)** → Pareil
   - 10 - 4 = 6

3. **Multiplication (*)** → Attention : * pas ×
   - 3 * 4 = 12

4. **Division (/)** → Toujours un résultat décimal
   - 10 / 3 = 3.333...

5. **Division entière (//)** → Juste la partie entière
   - 10 // 3 = 3 (ignore le reste)

6. **Modulo (%)** → Le reste de la division
   - 10 % 3 = 1 (car 10 = 3×3 + 1)

7. **Puissance (**)** → Élever à la puissance
   - 2**3 = 8 (2 au cube)

**Ordre des opérations (PEMDAS) :**
Comme en maths : Parenthèses → Exposants → Multiplication/Division → Addition/Soustraction

**Application scientifique :**
Résoudre l'équation du second degré ax² + bx + c = 0`,
                    keyPoints: [
                        '** pour les puissances (pas ^)',
                        '/ donne toujours un décimal',
                        '// pour division entière, % pour le reste',
                        'Utilisez des parenthèses pour clarifier'
                    ],
                    code: `# Opérations de base
a = 10
b = 3

print("=== Opérations de base ===")
print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} × {b} = {a * b}")
print(f"{a} ÷ {b} = {a / b}")  # 3.333...
print(f"{a} ÷ {b} (entier) = {a // b}")  # 3
print(f"{a} modulo {b} = {a % b}")  # 1
print(f"{a} puissance {b} = {a ** b}")  # 1000

# Application : Formule quadratique
# Résoudre x² - 5x + 6 = 0
print("\\n=== Équation du second degré ===")
a, b, c = 1, -5, 6

# Discriminant : Δ = b² - 4ac
discriminant = b**2 - 4*a*c
print(f"Discriminant : {discriminant}")

# Solutions : x = (-b ± √Δ) / 2a
import math
x1 = (-b + math.sqrt(discriminant)) / (2*a)
x2 = (-b - math.sqrt(discriminant)) / (2*a)

print(f"Solutions : x₁ = {x1}, x₂ = {x2}")
print(f"Vérification : x₁ × x₂ = {x1 * x2} (devrait être {c/a})")`,
                    tip: '🎯 Pour les racines carrées : import math puis math.sqrt(nombre)'
                },
                {
                    title: 'Conditions : Prendre des décisions',
                    analogy: '🚦 Les conditions sont comme un feu tricolore : si vert → avancer',
                    content: `**Apprendre à Python à décider**

**Analogie de la vie réelle :**
- SI il pleut → prendre un parapluie
- SINON SI il fait froid → prendre un manteau
- SINON → sortir normalement

En Python, c'est pareil !

**Structure if/elif/else :**

\`\`\`
if condition:
    # Faire ceci si condition est vraie
elif autre_condition:
    # Faire cela si autre_condition est vraie
else:
    # Faire ça si aucune condition n'est vraie
\`\`\`

**Opérateurs de comparaison :**
- == (égal à) → Attention : 2 signes =
- != (différent de)
- > (plus grand que)
- < (plus petit que)
- >= (plus grand ou égal)
- <= (plus petit ou égal)

**Opérateurs logiques :**
- and (et) → Les deux doivent être vrais
- or (ou) → Au moins un doit être vrai
- not (non) → Inverse le résultat

**Application scientifique :**
Classifier des températures, vérifier des conditions physiques`,
                    keyPoints: [
                        'if = "si", elif = "sinon si", else = "sinon"',
                        'Indentation (espaces) = OBLIGATOIRE en Python',
                        '== pour comparer, = pour assigner',
                        'and/or pour combiner des conditions'
                    ],
                    code: `# Exemple 1 : Classifier une température
temperature = 25

if temperature > 30:
    print("🔥 Il fait chaud !")
    etat = "Chaud"
elif temperature > 20:
    print("😊 Température agréable")
    etat = "Agréable"
elif temperature > 10:
    print("🧥 Un peu frais")
    etat = "Frais"
else:
    print("❄️ Il fait froid !")
    etat = "Froid"

# Exemple 2 : Vérifier une condition physique
# L'eau est liquide entre 0°C et 100°C (à pression normale)
temp_eau = 50

if 0 < temp_eau < 100:
    print("💧 L'eau est liquide")
elif temp_eau >= 100:
    print("💨 L'eau est gazeuse (vapeur)")
else:
    print("🧊 L'eau est solide (glace)")

# Exemple 3 : Conditions multiples
vitesse = 15
masse = 10

if vitesse > 0 and masse > 0:
    energie = 0.5 * masse * vitesse**2
    print(f"✅ Énergie cinétique : {energie} J")
else:
    print("❌ Vitesse ou masse invalide !")

# Exemple 4 : Nombre pair ou impair ?
nombre = 42
if nombre % 2 == 0:
    print(f"{nombre} est pair")
else:
    print(f"{nombre} est impair")`,
                    tip: '⚠️ L\'indentation (4 espaces) est OBLIGATOIRE en Python !'
                },
                {
                    title: 'Boucles : Répéter sans se fatiguer',
                    analogy: '🔁 Une boucle, c\'est comme dire "fais ça 100 fois" au lieu de l\'écrire 100 fois',
                    content: `**Le pouvoir de la répétition**

**Analogie :**
Imaginez que vous devez :
- Compter de 1 à 100
- Calculer 1², 2², 3², ..., 100²

Sans boucle : Vous écrivez 100 lignes de code 😰
Avec boucle : 3 lignes suffisent ! 🎉

**Deux types de boucles :**

**1. Boucle FOR** → "Pour chaque élément, fais..."
- Quand vous savez combien de fois répéter
- Comme compter de 1 à 10

**2. Boucle WHILE** → "Tant que condition vraie, fais..."
- Quand vous ne savez pas combien de fois
- Comme "tant que l'eau n'est pas à 100°C, chauffe"

**range() : Le compteur magique**
- range(5) → 0, 1, 2, 3, 4 (5 nombres)
- range(1, 6) → 1, 2, 3, 4, 5
- range(0, 10, 2) → 0, 2, 4, 6, 8 (de 2 en 2)

**Applications scientifiques :**
- Calculer une suite (Fibonacci, etc.)
- Méthodes itératives (Newton, etc.)
- Traiter des données expérimentales`,
                    keyPoints: [
                        'for = nombre de répétitions connu',
                        'while = répéter jusqu\'à condition',
                        'range(n) commence à 0, pas à 1 !',
                        'Indentation obligatoire dans les boucles'
                    ],
                    code: `# Exemple 1 : Boucle FOR simple
print("=== Compter de 1 à 5 ===")
for i in range(1, 6):
    print(f"Nombre : {i}")

# Exemple 2 : Calculer des carrés
print("\\n=== Carrés de 1 à 10 ===")
for n in range(1, 11):
    carre = n**2
    print(f"{n}² = {carre}")

# Exemple 3 : Suite de Fibonacci
print("\\n=== Suite de Fibonacci ===")
n_termes = 10
fib = [0, 1]  # Les deux premiers termes

for i in range(2, n_termes):
    # Chaque terme = somme des deux précédents
    prochain = fib[i-1] + fib[i-2]
    fib.append(prochain)

print(f"Les {n_termes} premiers termes : {fib}")

# Exemple 4 : Boucle WHILE - Méthode de Newton
# Calculer √2 avec la méthode de Newton
print("\\n=== Approximation de √2 ===")
x = 2.0  # Valeur initiale
precision = 0.0001
iteration = 0

while True:
    x_nouveau = (x + 2/x) / 2
    erreur = abs(x_nouveau - x)
    
    iteration += 1
    print(f"Itération {iteration}: x = {x_nouveau:.6f}, erreur = {erreur:.6f}")
    
    if erreur < precision:
        break  # Sortir de la boucle
    
    x = x_nouveau

print(f"\\n√2 ≈ {x:.6f} (valeur exacte: 1.414214)")

# Exemple 5 : Somme des n premiers entiers
n = 100
somme = 0
for i in range(1, n+1):
    somme += i  # somme = somme + i

print(f"\\nSomme de 1 à {n} = {somme}")
print(f"Formule : n(n+1)/2 = {n*(n+1)//2} ✓")`,
                    tip: '🔄 break = sortir de la boucle, continue = passer à l\'itération suivante'
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen py-20 px-4 bg-black">
            {/* Enhanced Header */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="text-center mb-12">
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#00F5D4]/20 to-[#7C3AED]/20 border border-[#00F5D4]/30 mb-6 backdrop-blur-sm">
                        <span className="text-[#00F5D4] text-sm font-bold tracking-widest">PYTHON POUR LES SCIENCES</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-white to-[#7C3AED] mb-6">
                        Maîtrisez Python
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Un cours complet, <span className="text-[#00F5D4] font-bold">pour débutants</span>,
                        avec des <span className="text-[#7C3AED] font-bold">analogies</span> et
                        des <span className="text-[#FF9F1C] font-bold">exemples scientifiques</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🎓</span>
                            <span>Pour débutants</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🔬</span>
                            <span>Focus scientifique</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">💡</span>
                            <span>Avec analogies</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⚡</span>
                            <span>Exemples pratiques</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum with improved visuals */}
            <section className="max-w-7xl mx-auto space-y-6">
                {curriculum.map((chapter, chapterIdx) => (
                    <div
                        key={chapter.id}
                        className="sci-card p-6 transition-all duration-300"
                        style={{
                            '--accent-color': chapter.color,
                            animationDelay: `${chapterIdx * 100}ms`
                        }}
                    >
                        {/* Chapter Header - Enhanced */}
                        <div
                            className="flex items-center gap-4 cursor-pointer group"
                            onClick={() => setSelectedChapter(selectedChapter === chapter.id ? null : chapter.id)}
                        >
                            <div className="text-5xl transform group-hover:scale-110 transition-transform">
                                {chapter.icon}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {chapter.title}
                                </h2>
                                <p className="text-gray-400 text-sm md:text-base">{chapter.description}</p>
                            </div>
                            <div className="text-3xl text-gray-500 group-hover:text-white transition-colors">
                                {selectedChapter === chapter.id ? '▼' : '▶'}
                            </div>
                        </div>

                        {/* Lessons - Enhanced Display */}
                        {selectedChapter === chapter.id && (
                            <div className="mt-8 space-y-4">
                                {chapter.lessons.map((lesson, idx) => (
                                    <div
                                        key={idx}
                                        className="border-l-4 pl-6 py-4 rounded-r-lg transition-all duration-300 hover:bg-white/5 cursor-pointer"
                                        style={{
                                            borderColor: selectedLesson === `${chapter.id}-${idx}` ? chapter.color : `${chapter.color}40`
                                        }}
                                        onClick={() => setSelectedLesson(selectedLesson === `${chapter.id}-${idx}` ? null : `${chapter.id}-${idx}`)}
                                    >
                                        {/* Lesson Header */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                    {lesson.title}
                                                </h3>
                                                {lesson.analogy && (
                                                    <p className="text-gray-400 italic text-sm md:text-base mb-2">
                                                        {lesson.analogy}
                                                    </p>
                                                )}
                                            </div>
                                            <span className="text-gray-500 text-xl">
                                                {selectedLesson === `${chapter.id}-${idx}` ? '−' : '+'}
                                            </span>
                                        </div>

                                        {/* Lesson Content - Expanded */}
                                        {selectedLesson === `${chapter.id}-${idx}` && (
                                            <div className="mt-6 space-y-6">
                                                {/* Main Content */}
                                                <div className="prose prose-invert max-w-none">
                                                    <div className="text-gray-300 leading-relaxed whitespace-pre-line text-base md:text-lg">
                                                        {lesson.content}
                                                    </div>
                                                </div>

                                                {/* Key Points */}
                                                {lesson.keyPoints && (
                                                    <div className="bg-gradient-to-r from-white/5 to-transparent rounded-lg p-6 border-l-4" style={{ borderColor: chapter.color }}>
                                                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                            <span>📌</span>
                                                            Points clés à retenir
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {lesson.keyPoints.map((point, i) => (
                                                                <li key={i} className="text-gray-300 flex items-start gap-3">
                                                                    <span className="text-[#00F5D4] mt-1">✓</span>
                                                                    <span>{point}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Code Block - Enhanced */}
                                                <div className="bg-black/80 rounded-xl border border-white/10 overflow-hidden">
                                                    <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-white/10">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xs font-mono text-gray-400">Python</span>
                                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                            <span className="text-xs text-gray-500">Prêt à exécuter</span>
                                                        </div>
                                                        <button
                                                            className="text-xs px-3 py-1 rounded bg-[#00F5D4]/20 text-[#00F5D4] hover:bg-[#00F5D4]/30 transition-colors"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                navigator.clipboard.writeText(lesson.code);
                                                            }}
                                                        >
                                                            📋 Copier
                                                        </button>
                                                    </div>
                                                    <pre className="p-6 overflow-x-auto">
                                                        <code className="text-sm md:text-base text-gray-300 font-mono leading-relaxed">
                                                            {lesson.code}
                                                        </code>
                                                    </pre>
                                                </div>

                                                {/* Tip */}
                                                {lesson.tip && (
                                                    <div className="bg-gradient-to-r from-[#FF9F1C]/10 to-transparent rounded-lg p-4 border-l-4 border-[#FF9F1C]">
                                                        <p className="text-gray-300 text-sm md:text-base">
                                                            {lesson.tip}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* CTA - Enhanced */}
            <section className="max-w-4xl mx-auto mt-20">
                <div className="sci-card p-8 md:p-12 text-center" style={{ '--accent-color': '#00F5D4' }}>
                    <div className="text-5xl mb-4">🚀</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Prêt à coder ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Ouvrez l'éditeur Python interactif et testez tout ce que vous venez d'apprendre !
                    </p>
                    <Link
                        href="/code"
                        className="inline-block px-10 py-4 rounded-xl font-bold text-lg text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        style={{ background: 'linear-gradient(135deg, #00F5D4, #7C3AED)' }}
                    >
                        Ouvrir l'Éditeur Python →
                    </Link>
                </div>
            </section>
        </main>
    );
}
