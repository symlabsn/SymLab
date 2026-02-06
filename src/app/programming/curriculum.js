// Curriculum Python Scientifique Complet
// Focus majeur sur SymPy pour le calcul symbolique

export const pythonCurriculum = [
    {
        id: 'intro',
        title: '1. Introduction à Python',
        icon: '🐍',
        color: '#2DD4BF',
        description: 'Découvrez Python, le langage préféré des scientifiques',
        duration: '2 heures',
        lessons: [
            {
                title: 'Qu\'est-ce que Python ?',
                duration: '15 min',
                analogy: '💡 Python est comme le wolof : simple, direct et compris par tous !',
                content: `Python est un **langage de programmation** créé en 1991 par Guido van Rossum. C'est le langage le plus populaire au monde pour la science, l'intelligence artificielle et l'analyse de données.

**Pourquoi Python pour les sciences ?**
- **Syntaxe claire** : Le code se lit presque comme de l'anglais
- **Bibliothèques puissantes** : NumPy, SymPy, Matplotlib, Pandas...
- **Communauté immense** : Des millions de scientifiques l'utilisent
- **Gratuit et open-source** : Accessible à tous

**Analogie culturelle** 🌍
Imaginez que vous voulez communiquer avec quelqu'un :
- Le **wolof** est simple et direct → C'est comme Python
- Le **latin** est complexe et rigide → C'est comme le C++
- Le **français** est élégant mais strict → C'est comme Java`,
                keyPoints: [
                    'Python est le langage #1 pour la science et l\'IA',
                    'Sa syntaxe est simple et lisible',
                    'Il possède des bibliothèques scientifiques exceptionnelles',
                    'Il est gratuit et fonctionne partout (Windows, Mac, Linux)'
                ],
                code: `# Votre premier programme Python !
print("Bienvenue dans SymLab !")
print("Python + Sciences = 🚀")

# Calcul simple
resultat = 2 + 2
print(f"2 + 2 = {resultat}")`,
                tip: '💡 Astuce : En Python, on utilise # pour les commentaires. Tout ce qui suit # sur une ligne est ignoré par l\'ordinateur.'
            },
            {
                title: 'Utiliser Python avec Jupyter (Anaconda)',
                duration: '20 min',
                analogy: '📓 Un cahier de laboratoire numérique et interactif',
                content: `**Jupyter Notebook** est l'outil indispensable du scientifique. Il permet de mélanger :
1. Du **code** exécutable
2. Du **texte** explicatif (comme ce cours)
3. Des **graphiques** et formules mathématiques

**Anaconda** 🐍
C'est une "valise" qui contient Python + Jupyter + toutes les bibliothèques scientifiques (NumPy, Pandas...). C'est ce que nous recommandons d'installer !

**Cellules** 🧱
Un notebook est composé de "cellules". On écrit le code dedans, et on l'exécute pour voir le résultat immédiatement en dessous.`,
                keyPoints: [
                    'Anaconda installe tout l\'environnement scientifique d\'un coup',
                    'Jupyter permet de tester son code petit à petit',
                    'Les résultats s\'affichent directement sous le code',
                    'On peut ajouter des notes et des images'
                ],
                code: `# Dans une cellule Jupyter :
import numpy as np

# On crée un tableau
x = np.array([1, 2, 3, 4, 5])

# On l'affiche
print(f"Mon tableau : {x}")
print(f"Moyenne : {x.mean()}")`,
                tip: '💡 Raccourci vital : Appuyez sur **Shift + Entrée** pour exécuter une cellule et passer à la suivante !'
            },
            {
                title: 'Utiliser Python via Google Colab',
                duration: '15 min',
                analogy: '☁️ Le Google Docs de la programmation',
                content: `**Google Colab** est un Jupyter Notebook hébergé dans le cloud par Google.

**Avantages majeurs :**
- **Rien à installer** : Tout fonctionne dans le navigateur
- **Gratuit** : Accès gratuit à des ordinateurs puissants (GPU)
- **Collaboratif** : Partagez vos codes comme un Google Doc
- **Pré-configuré** : Toutes les bibliothèques sont déjà là !

C'est la solution idéale si vous avez un ordinateur lent ou une tablette.`,
                keyPoints: [
                    'Aucune installation nécessaire, juste un compte Google',
                    'Parfait pour les débutants et le travail collaboratif',
                    'Vos notebooks sont sauvegardés dans Google Drive',
                    'Idéal pour utiliser SymLab depuis n\'importe où'
                ],
                code: `# Vérification de l'environnement
import sys
import os

print(f"Version Python : {sys.version.split()[0]}")
print("Environnement prêt à coder ! 🚀")`,
                tip: '💡 Astuce : Colab est parfait pour suivre ce cours sans rien installer sur votre machine.'
            },
            {
                title: 'Scripts Python et IDEs (VS Code)',
                duration: '25 min',
                analogy: '🎬 Le script d\'un film vs l\'improvisation',
                content: `Si Jupyter est comme un brouillon interactif, un **script Python** (fichier \`.py\`) est le produit fini.

**Quand utiliser un script ?**
- Pour créer des applications complètes
- Pour automatiser des tâches répétitives
- Pour des projets complexes avec plusieurs fichiers

**VS Code** 💻
C'est l'éditeur de code le plus populaire. Il offre :
- Coloration syntaxique (code coloré)
- Auto-complétion (il devine ce que vous tapez)
- Détection d'erreurs`,
                keyPoints: [
                    'Les fichiers Python ont l\'extension .py',
                    'On les exécute dans le terminal avec la commande "python fichier.py"',
                    'VS Code est l\'outil pro par excellence',
                    'Séparez votre code en fonctions pour mieux l\'organiser'
                ],
                code: `# mon_script.py

def saluer():
    print("Ceci est un script Python exécuté depuis le terminal !")

if __name__ == "__main__":
    saluer()`,
                tip: '💡 Astuce : Commencez par exploiter Jupyter pour apprendre, puis passez à VS Code pour construire des projets.'
            },
            {
                title: 'Obtenir de l\'aide en Python',
                duration: '15 min',
                analogy: '🆘 Le manuel d\'utilisation intégré et la communauté mondiale',
                content: `Un bon programmeur n'est pas celui qui connaît tout par cœur, c'est celui qui sait **trouver l'information** !

**1. La fonction help()** 📖
Python a son propre manuel intégré. Tapez \`help(fonction)\` pour savoir comment elle marche.

**2. La documentation officielle** 🌐
docs.python.org est la bible de Python.

**3. Stack Overflow** 💬
Le forum où tous les développeurs du monde s'entraident. Si vous avez une erreur, quelqu'un l'a sûrement déjà eue !`,
                keyPoints: [
                    'Utilisez help() ou ? (dans Jupyter) pour l\'aide rapide',
                    'Savoir lire la documentation est une compétence clé',
                    'Copiez-collez vos messages d\'erreur dans Google',
                    'La communauté Python est très accueillante'
                ],
                code: `# Obtenir de l'aide sur la fonction print
help(print)

# Dans Jupyter uniquement :
# print?`,
                tip: '💡 Astuce : En anglais, les ressources sont 100x plus nombreuses. Essayez de chercher vos erreurs en anglais !'
            }
        ]
    },
    {
        id: 'basics',
        title: '2. Les Bases du Langage',
        icon: '🧱',
        color: '#FF6B6B',
        description: 'Maîtrisez les fondations : variables, calculs et logique',
        duration: '2h 30min',
        lessons: [
            {
                title: 'Variables et Types de Données',
                duration: '30 min',
                analogy: '📦 Une variable est comme un conteneur avec une étiquette',
                content: `Une **variable** est un espace mémoire qui stocke une valeur. C'est comme une boîte avec une étiquette.

**Les types de données de base :**

**1. Nombres entiers (int)** 🔢
Les nombres sans virgule : -5, 0, 42, 1000000

**2. Nombres décimaux (float)** 🎯
Les nombres avec virgule : 3.14, -0.5, 2.71828

**3. Texte (str - string)** 📝
Du texte entre guillemets : "Bonjour", 'Dakar', "Python"

**4. Booléens (bool)** ✅❌
Vrai ou Faux : True, False

**Analogie du marché Sandaga** 🏪
- **int** : Le nombre de mangues (3 mangues, pas 3.5 !)
- **float** : Le prix en FCFA (2500.50 FCFA)
- **str** : Le nom du vendeur ("Modou")
- **bool** : Le magasin est ouvert ? (True ou False)`,
                keyPoints: [
                    'Une variable stocke une valeur en mémoire',
                    'Python détecte automatiquement le type (pas besoin de le déclarer)',
                    'On peut changer la valeur d\'une variable à tout moment',
                    'Les noms de variables doivent être descriptifs'
                ],
                code: `# Variables numériques
age = 17
temperature = 28.5
pi = 3.14159

# Variables textuelles
nom = "Fatou"
ville = "Dakar"
message = "Bienvenue à SymLab !"

# Variables booléennes
est_etudiant = True
a_termine = False

# Affichage
print(f"{nom} a {age} ans")
print(f"Température à {ville} : {temperature}°C")
print(f"Est étudiant ? {est_etudiant}")

# Python détecte automatiquement les types
print(type(age))         # <class 'int'>
print(type(temperature)) # <class 'float'>
print(type(nom))         # <class 'str'>`,
                tip: '💡 Astuce : Utilisez des noms de variables clairs en français ou en anglais. Évitez "x", "y", "z" sauf pour les maths !'
            },
            {
                title: 'Opérations Mathématiques',
                duration: '25 min',
                analogy: '🧮 Python est votre calculatrice scientifique surpuissante',
                content: `Python peut faire tous les calculs mathématiques imaginables !

**Opérations de base :**
- **Addition** : \`+\`
- **Soustraction** : \`-\`
- **Multiplication** : \`*\`
- **Division** : \`/\`
- **Division entière** : \`//\` (sans virgule)
- **Reste (modulo)** : \`%\`
- **Puissance** : \`**\`

**Ordre des opérations** (PEMDAS)
Python respecte l'ordre mathématique :
1. **P**arenthèses
2. **E**xposants (puissances)
3. **M**ultiplication et **D**ivision
4. **A**ddition et **S**oustraction`,
                keyPoints: [
                    'Python respecte l\'ordre mathématique des opérations',
                    'Utilisez des parenthèses pour clarifier',
                    'La division / donne toujours un float',
                    'La puissance s\'écrit ** (pas ^)'
                ],
                code: `# Opérations de base
addition = 10 + 5        # 15
soustraction = 10 - 5    # 5
multiplication = 10 * 5  # 50
division = 10 / 5        # 2.0 (toujours un float)

# Opérations avancées
division_entiere = 10 // 3  # 3 (sans virgule)
reste = 10 % 3              # 1 (le reste)
puissance = 2 ** 8          # 256 (2 à la puissance 8)

# Ordre des opérations
resultat1 = 2 + 3 * 4      # 14 (multiplication d'abord)
resultat2 = (2 + 3) * 4    # 20 (parenthèses d'abord)

# Exemple scientifique : Énergie cinétique
masse = 50      # kg
vitesse = 10    # m/s
energie = 0.5 * masse * vitesse**2
print(f"Énergie cinétique : {energie} Joules")

# Exemple : Convertir Celsius en Fahrenheit
celsius = 30
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")`,
                tip: '💡 Astuce : Pour les calculs scientifiques complexes, on utilisera bientôt SymPy qui peut faire du calcul symbolique exact !'
            },
            {
                title: 'Entrées et Sorties',
                duration: '20 min',
                analogy: '🗣️ Communiquer avec l\'utilisateur : écouter et répondre',
                content: `Un programme interactif doit pouvoir **recevoir** des informations (input) et **afficher** des résultats (output).

**La fonction print()** 📢
Affiche du texte à l'écran

**La fonction input()** 🎤
Demande à l'utilisateur de taper quelque chose

**Les f-strings** 🎨
Le moyen moderne et élégant de formater du texte en Python (depuis Python 3.6)

**Analogie du téléphone** 📱
- **input()** : Vous écoutez ce que dit votre ami
- **print()** : Vous répondez à votre ami
- **f-string** : Vous personnalisez votre message`,
                keyPoints: [
                    'print() affiche du texte à l\'écran',
                    'input() récupère ce que l\'utilisateur tape',
                    'input() retourne toujours du texte (str)',
                    'Les f-strings permettent d\'insérer des variables dans du texte'
                ],
                code: `# Affichage simple
print("Bonjour !")
print("Bienvenue à SymLab")

# Affichage avec variables (f-string)
nom = "Aminata"
age = 16
print(f"Je m'appelle {nom} et j'ai {age} ans")

# Demander une information
prenom = input("Quel est votre prénom ? ")
print(f"Enchanté, {prenom} !")

# Programme interactif complet
print("=== Calculateur d'âge ===")
annee_naissance = input("En quelle année êtes-vous né(e) ? ")
annee_naissance = int(annee_naissance)  # Convertir en nombre

annee_actuelle = 2024
age = annee_actuelle - annee_naissance

print(f"Vous avez environ {age} ans !")

# Formatage avancé
pi = 3.14159265359
print(f"Pi avec 2 décimales : {pi:.2f}")  # 3.14
print(f"Pi avec 4 décimales : {pi:.4f}")  # 3.1416`,
                tip: '💡 Astuce : input() retourne toujours du texte. Utilisez int() ou float() pour convertir en nombre !'
            },
            {
                title: 'Conditions (if/elif/else)',
                duration: '30 min',
                analogy: '🚦 Les conditions sont comme les feux de circulation : elles dirigent le flux',
                content: `Les **conditions** permettent à votre programme de prendre des décisions.

**Structure de base :**
\`\`\`python
if condition:
    # Code si vrai
elif autre_condition:
    # Code si autre condition vraie
else:
    # Code sinon
\`\`\`

**Opérateurs de comparaison :**
- \`==\` : égal à
- \`!=\` : différent de
- \`>\` : plus grand que
- \`<\` : plus petit que
- \`>=\` : plus grand ou égal
- \`<=\` : plus petit ou égal

**Opérateurs logiques :**
- \`and\` : ET (les deux conditions doivent être vraies)
- \`or\` : OU (au moins une condition doit être vraie)
- \`not\` : NON (inverse la condition)

**Analogie du portail** 🚪
Imaginez l'entrée d'une école :
- **if** : "Si tu as ta carte d'étudiant, entre"
- **elif** : "Sinon, si tu es un visiteur autorisé, entre"
- **else** : "Sinon, tu ne peux pas entrer"`,
                keyPoints: [
                    'if teste une condition',
                    'elif teste une autre condition (optionnel)',
                    'else s\'exécute si aucune condition n\'est vraie (optionnel)',
                    'L\'indentation (décalage) est OBLIGATOIRE en Python'
                ],
                code: `# Condition simple
age = 18
if age >= 18:
    print("Vous êtes majeur")
else:
    print("Vous êtes mineur")

# Conditions multiples
note = 15
if note >= 16:
    print("Excellent ! 🌟")
elif note >= 14:
    print("Très bien ! 👍")
elif note >= 12:
    print("Bien 😊")
elif note >= 10:
    print("Passable 📚")
else:
    print("Insuffisant 😔")

# Opérateurs logiques
temperature = 25
humidite = 70

if temperature > 30 and humidite > 80:
    print("Il fait très chaud et humide")
elif temperature > 30 or humidite > 80:
    print("Il fait soit chaud, soit humide")
else:
    print("Le temps est agréable")

# Exemple scientifique : États de l'eau
temp_celsius = float(input("Température de l'eau (°C) : "))

if temp_celsius <= 0:
    print("L'eau est à l'état SOLIDE (glace) ❄️")
elif temp_celsius < 100:
    print("L'eau est à l'état LIQUIDE 💧")
else:
    print("L'eau est à l'état GAZEUX (vapeur) ☁️")`,
                tip: '💡 Astuce : L\'indentation (4 espaces) est OBLIGATOIRE en Python. C\'est ce qui définit les blocs de code !'
            }
        ]
    },
    {
        id: 'data-structures',
        title: '3. Structures de Données et Fichiers',
        icon: '📦',
        color: '#FF6B6B',
        description: 'Listes, dictionnaires, tuples et manipulation de fichiers',
        duration: '3 heures',
        lessons: [
            {
                title: 'Les Listes',
                duration: '35 min',
                analogy: '📝 Une liste est comme une liste de courses : ordonnée et modifiable',
                content: `Une **liste** est une collection ordonnée d'éléments. C'est la structure de données la plus utilisée en Python !

**Caractéristiques :**
- **Ordonnée** : Les éléments ont une position (index)
- **Modifiable** : On peut ajouter, supprimer, changer des éléments
- **Peut contenir n'importe quoi** : nombres, texte, même d'autres listes !

**Indexation** 🔢
En Python, on compte à partir de 0 :
- Premier élément : index 0
- Deuxième élément : index 1
- Dernier élément : index -1

**Analogie du car rapide** 🚌
Une liste est comme un car rapide Dakar-Touba :
- Chaque passager a un numéro de siège (index)
- On peut monter/descendre en route (ajouter/supprimer)
- L'ordre des sièges ne change pas`,
                keyPoints: [
                    'Les listes se créent avec des crochets []',
                    'L\'indexation commence à 0',
                    'On peut modifier une liste après sa création',
                    'Les indices négatifs comptent depuis la fin'
                ],
                code: `# Créer une liste
fruits = ["mangue", "banane", "orange", "papaye"]
nombres = [1, 2, 3, 4, 5]
mixte = [42, "texte", 3.14, True]

# Accéder aux éléments
print(fruits[0])   # "mangue" (premier)
print(fruits[1])   # "banane" (deuxième)
print(fruits[-1])  # "papaye" (dernier)
print(fruits[-2])  # "orange" (avant-dernier)

# Modifier un élément
fruits[0] = "ananas"
print(fruits)  # ["ananas", "banane", "orange", "papaye"]

# Ajouter des éléments
fruits.append("fraise")      # Ajoute à la fin
fruits.insert(1, "kiwi")     # Insère à la position 1

# Supprimer des éléments
fruits.remove("banane")      # Supprime "banane"
dernier = fruits.pop()       # Retire et retourne le dernier
del fruits[0]                # Supprime l'élément à l'index 0

# Opérations utiles
print(len(fruits))           # Nombre d'éléments
print("mangue" in fruits)    # Vérifier si présent
print(fruits.count("kiwi"))  # Compter les occurrences

# Slicing (tranches)
nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(nombres[2:5])    # [2, 3, 4] (de l'index 2 à 4)
print(nombres[:3])     # [0, 1, 2] (du début à 2)
print(nombres[7:])     # [7, 8, 9] (de 7 à la fin)
print(nombres[::2])    # [0, 2, 4, 6, 8] (tous les 2)`,
                tip: '💡 Astuce : Les listes sont très puissantes ! On les utilisera énormément avec NumPy et Pandas.'
            },
            {
                title: 'Les Boucles (for et while)',
                duration: '40 min',
                analogy: '🔁 Les boucles répètent des actions, comme réciter le Coran',
                content: `Les **boucles** permettent de répéter des actions automatiquement.

**Boucle FOR** 🔄
Parcourt une séquence (liste, texte, range...)

**Boucle WHILE** ⏳
Répète tant qu'une condition est vraie

**La fonction range()** 📊
Génère une séquence de nombres :
- \`range(5)\` → 0, 1, 2, 3, 4
- \`range(2, 8)\` → 2, 3, 4, 5, 6, 7
- \`range(0, 10, 2)\` → 0, 2, 4, 6, 8

**Analogie de la prière** 🕌
- **for** : Réciter les 99 noms d'Allah (nombre fixe)
- **while** : Prier jusqu'à l'appel du muezzin (condition)`,
                keyPoints: [
                    'for parcourt une séquence élément par élément',
                    'while répète tant qu\'une condition est vraie',
                    'range() génère des séquences de nombres',
                    'break arrête la boucle, continue passe à l\'itération suivante'
                ],
                code: `# Boucle FOR avec une liste
fruits = ["mangue", "banane", "orange"]
for fruit in fruits:
    print(f"J'aime les {fruit}s")

# Boucle FOR avec range()
for i in range(5):
    print(f"Itération {i}")

# Boucle FOR avec indices
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# Méthode moderne : enumerate()
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Boucle WHILE
compteur = 0
while compteur < 5:
    print(f"Compteur : {compteur}")
    compteur += 1

# Exemple scientifique : Suite de Fibonacci
a, b = 0, 1
fibonacci = []
while len(fibonacci) < 10:
    fibonacci.append(a)
    a, b = b, a + b
print(f"Suite de Fibonacci : {fibonacci}")

# break et continue
for i in range(10):
    if i == 3:
        continue  # Saute 3
    if i == 7:
        break     # Arrête à 7
    print(i)

# Boucles imbriquées : Table de multiplication
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i} × {j} = {i*j}", end="  ")
    print()  # Nouvelle ligne`,
                tip: '💡 Astuce : Utilisez for pour un nombre d\'itérations connu, while quand vous ne savez pas combien de fois répéter.'
            },
            {
                title: 'Les Dictionnaires',
                duration: '35 min',
                analogy: '📖 Un dictionnaire est comme un vrai dictionnaire : mot → définition',
                content: `Un **dictionnaire** stocke des paires **clé : valeur**. C'est comme un vrai dictionnaire où chaque mot (clé) a sa définition (valeur).

**Caractéristiques :**
- **Non ordonné** (avant Python 3.7) / **Ordonné** (depuis Python 3.7)
- **Clés uniques** : Pas de doublons
- **Accès rapide** : Trouver une valeur est ultra-rapide
- **Modifiable** : On peut ajouter/supprimer des paires

**Analogie du répertoire téléphonique** 📱
- **Clé** : Le nom de la personne
- **Valeur** : Son numéro de téléphone
- Vous cherchez par nom, pas par numéro !`,
                keyPoints: [
                    'Les dictionnaires utilisent des accolades {}',
                    'Format : {clé: valeur, clé2: valeur2}',
                    'Les clés doivent être uniques et immuables',
                    'Accès ultra-rapide aux valeurs par clé'
                ],
                code: `# Créer un dictionnaire
etudiant = {
    "nom": "Diallo",
    "prenom": "Aminata",
    "age": 17,
    "ville": "Dakar",
    "notes": [15, 16, 14, 18]
}

# Accéder aux valeurs
print(etudiant["nom"])        # "Diallo"
print(etudiant["age"])        # 17
print(etudiant.get("email"))  # None (clé inexistante)

# Modifier/Ajouter
etudiant["age"] = 18
etudiant["email"] = "aminata@symlab.sn"

# Supprimer
del etudiant["ville"]
note_retiree = etudiant.pop("notes")

# Méthodes utiles
print(etudiant.keys())    # Toutes les clés
print(etudiant.values())  # Toutes les valeurs
print(etudiant.items())   # Paires (clé, valeur)

# Parcourir un dictionnaire
for cle, valeur in etudiant.items():
    print(f"{cle}: {valeur}")

# Exemple scientifique : Constantes physiques
constantes = {
    "c": 299792458,      # Vitesse de la lumière (m/s)
    "g": 9.81,           # Gravité terrestre (m/s²)
    "h": 6.626e-34,      # Constante de Planck (J·s)
    "NA": 6.022e23       # Nombre d'Avogadro (mol⁻¹)
}

print(f"Vitesse de la lumière : {constantes['c']} m/s")

# Dictionnaire de dictionnaires
classe = {
    "Fatou": {"math": 16, "physique": 15},
    "Moussa": {"math": 14, "physique": 17},
    "Aïcha": {"math": 18, "physique": 16}
}

print(f"Note de Fatou en math : {classe['Fatou']['math']}")`,
                tip: '💡 Astuce : Les dictionnaires sont parfaits pour structurer des données complexes. On les utilise énormément en science des données !'
            },
            {
                title: 'Tuples et Ensembles',
                duration: '25 min',
                analogy: '🔒 Tuple = liste verrouillée | Ensemble = sac sans doublons',
                content: `**TUPLES** 📌
Un tuple est comme une liste, mais **immuable** (non modifiable).

**Pourquoi utiliser des tuples ?**
- **Protection** : Les données ne peuvent pas être modifiées
- **Performance** : Plus rapides que les listes
- **Clés de dictionnaire** : On peut les utiliser comme clés

**ENSEMBLES (sets)** 🎲
Un ensemble est une collection **sans doublons** et **non ordonnée**.

**Opérations mathématiques :**
- **Union** : \`A | B\` (tous les éléments)
- **Intersection** : \`A & B\` (éléments communs)
- **Différence** : \`A - B\` (dans A mais pas dans B)`,
                keyPoints: [
                    'Tuples : parenthèses (), immuables',
                    'Ensembles : accolades {}, sans doublons',
                    'Les tuples sont plus rapides que les listes',
                    'Les ensembles sont parfaits pour éliminer les doublons'
                ],
                code: `# === TUPLES ===
# Création
coordonnees = (14.7167, -17.4677)  # Dakar (latitude, longitude)
rgb = (255, 128, 0)
singleton = (42,)  # Virgule obligatoire pour 1 élément

# Accès (comme les listes)
print(coordonnees[0])  # 14.7167

# ERREUR : Les tuples sont immuables !
# coordonnees[0] = 15  # ❌ TypeError

# Unpacking (déballage)
lat, lon = coordonnees
print(f"Latitude : {lat}, Longitude : {lon}")

# Retourner plusieurs valeurs
def min_max(liste):
    return min(liste), max(liste)

minimum, maximum = min_max([3, 7, 2, 9, 1])
print(f"Min : {minimum}, Max : {maximum}")

# === ENSEMBLES ===
# Création
fruits = {"mangue", "banane", "orange", "mangue"}  # Le doublon est ignoré
print(fruits)  # {"mangue", "banane", "orange"}

# Ajouter/Supprimer
fruits.add("papaye")
fruits.remove("banane")

# Opérations mathématiques
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print(A | B)  # Union : {1, 2, 3, 4, 5, 6, 7, 8}
print(A & B)  # Intersection : {4, 5}
print(A - B)  # Différence : {1, 2, 3}

# Éliminer les doublons d'une liste
nombres = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
uniques = list(set(nombres))
print(uniques)  # [1, 2, 3, 4]

# Exemple scientifique : Éléments chimiques
periode_2 = {"Li", "Be", "B", "C", "N", "O", "F", "Ne"}
non_metaux = {"H", "C", "N", "O", "F", "Cl", "Br", "I"}
non_metaux_periode_2 = periode_2 & non_metaux
print(f"Non-métaux de période 2 : {non_metaux_periode_2}")`,
                tip: '💡 Astuce : Utilisez des tuples pour des données qui ne doivent jamais changer (coordonnées, dates, etc.)'
            },
            {
                title: 'Lire et Écrire des Fichiers',
                duration: '30 min',
                analogy: '📄 Les fichiers sont la mémoire permanente de vos programmes',
                content: `Jusqu'ici, toutes nos données disparaissent quand le programme s'arrête. Les **fichiers** permettent de **sauvegarder** et **charger** des données.

**Modes d'ouverture :**
- \`'r'\` : **Read** (lire) - le fichier doit exister
- \`'w'\` : **Write** (écrire) - écrase le fichier s'il existe
- \`'a'\` : **Append** (ajouter) - ajoute à la fin
- \`'r+'\` : Lire et écrire

**La syntaxe with** 🔐
Ouvre et ferme automatiquement le fichier (recommandé !)

**Analogie du cahier** 📓
- **Lire** : Consulter votre cahier de cours
- **Écrire** : Prendre des notes (efface l'ancien)
- **Ajouter** : Continuer sur une nouvelle page`,
                keyPoints: [
                    'Utilisez toujours "with" pour ouvrir des fichiers',
                    'Mode "r" pour lire, "w" pour écrire, "a" pour ajouter',
                    'Les fichiers se ferment automatiquement avec "with"',
                    'Attention : "w" écrase tout le contenu !'
                ],
                code: `# === ÉCRIRE dans un fichier ===
# Créer et écrire
with open("notes.txt", "w", encoding="utf-8") as fichier:
    fichier.write("Cours de Python\\n")
    fichier.write("SymLab - Sciences pour tous\\n")
    fichier.write("Dakar, Sénégal\\n")

# Ajouter du contenu
with open("notes.txt", "a", encoding="utf-8") as fichier:
    fichier.write("Nouvelle ligne ajoutée\\n")

# === LIRE un fichier ===
# Lire tout le contenu
with open("notes.txt", "r", encoding="utf-8") as fichier:
    contenu = fichier.read()
    print(contenu)

# Lire ligne par ligne
with open("notes.txt", "r", encoding="utf-8") as fichier:
    for ligne in fichier:
        print(ligne.strip())  # strip() enlève \\n

# Lire toutes les lignes dans une liste
with open("notes.txt", "r", encoding="utf-8") as fichier:
    lignes = fichier.readlines()
    print(lignes)

# === EXEMPLE SCIENTIFIQUE : Sauvegarder des mesures ===
# Écrire des données expérimentales
temperatures = [25.3, 26.1, 25.8, 27.2, 26.5]

with open("mesures.txt", "w") as f:
    f.write("Température (°C)\\n")
    f.write("================\\n")
    for temp in temperatures:
        f.write(f"{temp}\\n")

# Lire et calculer la moyenne
with open("mesures.txt", "r") as f:
    lignes = f.readlines()[2:]  # Ignorer les 2 premières lignes
    temperatures = [float(ligne.strip()) for ligne in lignes]
    moyenne = sum(temperatures) / len(temperatures)
    print(f"Température moyenne : {moyenne:.2f}°C")

# === FICHIERS CSV (données scientifiques) ===
import csv

# Écrire un CSV
donnees = [
    ["Nom", "Age", "Note"],
    ["Fatou", 17, 16],
    ["Moussa", 18, 15],
    ["Aïcha", 17, 18]
]

with open("etudiants.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(donnees)

# Lire un CSV
with open("etudiants.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    for ligne in reader:
        print(ligne)`,
                tip: '💡 Astuce : Utilisez toujours encoding="utf-8" pour supporter les accents et caractères spéciaux !'
            }
        ]
    },
    {
        id: 'functions-modules',
        title: '4. Fonctions et Programmation Orientée Objet',
        icon: '🔧',
        color: '#4ECDC4',
        description: 'Organiser et réutiliser votre code efficacement',
        duration: '2 heures',
        lessons: [
            {
                title: 'Les Fonctions',
                duration: '30 min',
                analogy: '🏭 Une fonction est comme une machine : Entrée → Traitement → Sortie',
                content: `Une **fonction** est un bloc de code réutilisable qui effectue une tâche spécifique.

**Structure :**
\`\`\`python
def nom_fonction(parametres):
    # Instructions
    return resultat
\`\`\`

**Pourquoi utiliser des fonctions ?**
- **Réutilisation** : Écrire une fois, utiliser partout
- **Organisation** : Découper un gros problème en petits morceaux
- **Maintenance** : Facile à corriger et à améliorer

**Analogie de la Boulangerie** 🥖
Imaginez une machine à pain :
- **Entrée (paramètres)** : Farine, eau, sel, levure
- **Traitement** : Pétrir, lever, cuire
- **Sortie (return)** : Pain chaud

Vous n'avez pas besoin de savoir *comment* la machine fonctionne à l'intérieur pour l'utiliser !`,
                keyPoints: [
                    'def définit une fonction',
                    'return renvoie le résultat et arrête la fonction',
                    'Les paramètres sont les ingrédients de la fonction',
                    'Une fonction sans return renvoie None'
                ],
                code: `# Définition d'une fonction simple
def saluer(nom):
    return f"Bonjour {nom} !"

# Utilisation
message = saluer("Fatou")
print(message)

# Fonction avec plusieurs paramètres
def calculer_vitesse(distance, temps):
    if temps == 0:
        return 0
    return distance / temps

v = calculer_vitesse(100, 9.58)  # Usain Bolt
print(f"Vitesse : {v:.2f} m/s")

# Valeurs par défaut
def energie_potentielle(masse, hauteur, g=9.81):
    return masse * g * hauteur

ep_terre = energie_potentielle(10, 5)        # g = 9.81 (défaut)
ep_lune = energie_potentielle(10, 5, g=1.6)  # g = 1.6 (spécifié)

print(f"EP Terre : {ep_terre} J")
print(f"EP Lune : {ep_lune} J")

# Fonction qui retourne plusieurs valeurs
def convertir_temps(secondes):
    minutes = secondes // 60
    reste = secondes % 60
    return minutes, reste

m, s = convertir_temps(125)
print(f"125s = {m} min {s} s")`,
                tip: '💡 Astuce : Donnez à vos fonctions des noms d\'action (calculer_..., afficher_..., obtenir_...) pour qu\'on comprenne ce qu\'elles font.'
            },
            {
                title: 'Portée des Variables (Scope)',
                duration: '20 min',
                analogy: '🏠 Maison vs Rue : Ce qui est privé reste privé',
                content: `La **portée** (scope) définit où une variable est visible.

**Variable Locale** 🏠
Définie *dans* une fonction. Elle n'existe que dans cette fonction.
*Analogie : La télé de votre salon (vos voisins ne peuvent pas la voir).*

**Variable Globale** 🌍
Définie *hors* de toute fonction. Elle est visible partout.
*Analogie : Le soleil (tout le monde peut le voir).*

**Règle LEGB**
Python cherche les variables dans cet ordre :
1. **L**ocal (dans la fonction)
2. **E**nclosing (fonction englobante)
3. **G**lobal (module principal)
4. **B**uilt-in (fonctions Python intégrées)`,
                keyPoints: [
                    'Une variable locale n\'est pas visible hors de sa fonction',
                    'Une variable globale est visible partout',
                    'Évitez de modifier des variables globales dans des fonctions (mauvaise pratique)',
                    'Utilisez global seulement si nécessaire'
                ],
                code: `# Variable globale
gravite = 9.81

def chute_libre(temps):
    # Variable locale
    vitesse = gravite * temps
    return vitesse

print(chute_libre(2))
# print(vitesse)  # ❌ Erreur ! 'vitesse' n'existe pas ici

# Masquage (Shadowing)
x = 10  # Globale

def ma_fonction():
    x = 5  # Nouvelle variable locale x
    print(f"Dans la fonction : {x}")

ma_fonction()      # Affiche 5
print(f"Dehors : {x}") # Affiche 10 (l'originale n'a pas changé)

# Modifier une globale (avec prudence !)
compteur = 0

def incrementer():
    global compteur
    compteur += 1

incrementer()
print(compteur)  # 1`,
                tip: '💡 Astuce : Préférez passer des arguments aux fonctions plutôt que d\'utiliser des variables globales. C\'est plus sûr et plus clair !'
            },
            {
                title: 'Classes et Objets (POO)',
                duration: '45 min',
                analogy: '🏗️ Classe = Plan d\'architecte | Objet = La maison construite',
                content: `La **Programmation Orientée Objet (POO)** permet de modéliser le monde réel.

**Classe (Class)** 📄
C'est le modèle, le plan, le moule. Elle définit les caractéristiques.

**Objet (Object)** 🏠
C'est une instance concrète de la classe.

**Attributs** 🏷️
Les données de l'objet (variables).
*Exemple : couleur, taille, poids.*

**Méthodes** ⚙️
Les actions de l'objet (fonctions).
*Exemple : rouler(), freiner(), allumer().*

**Le constructeur __init__** 🔨
La méthode spéciale qui construit l'objet.

**Analogie de la Brique** 🧱
- **Classe** : Le moule à briques (il y en a un seul)
- **Objet** : Une brique réelle (il peut y en avoir des milliers)
- **Attributs** : Poids, couleur, matériau
- **Méthodes** : Se casser, s'empiler`,
                keyPoints: [
                    'class définit une nouvelle classe',
                    'self représente l\'objet lui-même (obligatoire premier paramètre)',
                    '__init__ initialise les attributs',
                    'La POO permet de regrouper données et comportements'
                ],
                code: `class Atome:
    """Classe représentant un atome chimique"""
    
    def __init__(self, symbole, numero_atomique, masse):
        self.symbole = symbole        # Attribut
        self.numero = numero_atomique # Attribut
        self.masse = masse            # Attribut
        
    def afficher_infos(self):
        """Méthode pour afficher les détails"""
        print(f"Atome : {self.symbole} (Z={self.numero})")
        print(f"Masse : {self.masse} u")
        
    def calculer_neutrons(self):
        """Estime le nombre de neutrons (Masse - Z)"""
        return round(self.masse - self.numero)

# Création d'objets (Instances)
hydrogene = Atome("H", 1, 1.008)
carbone = Atome("C", 6, 12.011)
oxygene = Atome("O", 8, 15.999)

# Utilisation des objets
hydrogene.afficher_infos()
print(f"Neutrons Carbone : {carbone.calculer_neutrons()}")

# Interaction entre objets
class Molecule:
    def __init__(self, formule, atomes):
        self.formule = formule
        self.atomes = atomes  # Liste d'objets Atome
        
    def masse_molaire(self):
        total = 0
        for atome in self.atomes:
            total += atome.masse
        return total

eau = Molecule("H2O", [hydrogene, hydrogene, oxygene])
print(f"Masse molaire H2O : {eau.masse_molaire():.3f} g/mol")`,
                tip: '💡 Astuce : self est comme dire "moi-même". self.couleur veut dire "ma couleur à moi".'
            },
            {
                title: 'Héritage',
                duration: '25 min',
                analogy: '👨‍👦 L\'enfant hérite des traits de ses parents',
                content: `L'**héritage** permet de créer une nouvelle classe à partir d'une classe existante.

**Classe Mère (Parent)** 👵
La classe de base.

**Classe Fille (Enfant)** 👧
La nouvelle classe qui hérite des attributs et méthodes de la mère. Elle peut :
- Utiliser les méthodes telles quelles
- Les modifier (**surcharge**)
- En ajouter de nouvelles

**Analogie Biologique** 🧬
Un chat est un félin.
- **Félin (Mère)** : A des griffes, chasse, mange de la viande.
- **Chat (Fille)** : A tout ça + miaule, ronronne.`,
                keyPoints: [
                    'class Enfant(Parent): définit l\'héritage',
                    'super() permet d\'appeler les méthodes du parent',
                    'Permet d\'éviter la répétition de code',
                    'Favorise une hiérarchie logique'
                ],
                code: `class Particule:
    def __init__(self, nom, masse, charge):
        self.nom = nom
        self.masse = masse
        self.charge = charge
        
    def info(self):
        return f"{self.nom} : {self.charge}C, {self.masse}kg"

# Héritage
class Electron(Particule):
    def __init__(self):
        # Appel au constructeur parent
        super().__init__("Électron", 9.11e-31, -1.6e-19)
        self.spin = 0.5  # Nouvel attribut spécifique

class Proton(Particule):
    def __init__(self):
        super().__init__("Proton", 1.67e-27, +1.6e-19)
        self.quarks = "uud"

# Utilisation
e = Electron()
p = Proton()

print(e.info())  # Utilise la méthode héritée
print(f"Spin électron : {e.spin}")
print(f"Quarks proton : {p.quarks}")

# Polymorphisme (Même méthode, comportement différent)
particules = [e, p]
for part in particules:
    print(part.info())`,
                tip: '💡 Astuce : L\'héritage est puissant pour créer des familles d\'objets (ex: Forme -> Cercle, Carré, Triangle).'
            }
        ]
    },
    {
        id: 'numerical-python',
        title: '5. NumPy : Calcul Scientifique',
        icon: '🔢',
        color: '#95E1D3',
        description: 'Calcul numérique haute performance avec NumPy',
        duration: '4 heures',
        lessons: [
            {
                title: 'Introduction à NumPy',
                duration: '30 min',
                analogy: '⚡ NumPy est le turbo de Python pour les calculs',
                content: `**NumPy** (Numerical Python) est la bibliothèque fondamentale pour le calcul scientifique.

**Le ndarray (Tableau N-dimensionnel)** 📊
C'est la star de NumPy. Contrairement aux listes Python, un array NumPy :
- Contient des éléments de **même type** (homogène)
- Est stocké de manière contiguë en mémoire
- Est **beaucoup plus rapide** (jusqu'à 50x !)
- Consomme moins de mémoire

**Analogie du Transport** 🚚
- **Liste Python** : Un bus où chaque passager est dans sa propre voiture attachée au bus (lent, lourd).
- **Array NumPy** : Un train où tout le monde est assis rangée par rangée (rapide, compact).`,
                keyPoints: [
                    'NumPy est essentiel pour la science des données',
                    'Les arrays sont plus rapides et efficaces que les listes',
                    'Tous les éléments d\'un array doivent avoir le même type',
                    'On l\'importe généralement avec : import numpy as np'
                ],
                code: `import numpy as np

# Créer un array à partir d'une liste
liste = [1, 2, 3, 4, 5]
arr = np.array(liste)

print(f"Type : {type(arr)}")
print(f"Contenu : {arr}")

# Création rapide
zeros = np.zeros(5)          # [0. 0. 0. 0. 0.]
ones = np.ones((2, 3))       # Matrice 2x3 de 1
range_arr = np.arange(0, 10, 2)  # [0 2 4 6 8]
linspace = np.linspace(0, 1, 5)  # 5 points entre 0 et 1

print(f"Linspace : {linspace}")

# Dimensions et forme
matrice = np.array([[1, 2, 3], [4, 5, 6]])
print(f"Forme (shape) : {matrice.shape}")  # (2, 3)
print(f"Dimension (ndim) : {matrice.ndim}") # 2
print(f"Taille (size) : {matrice.size}")    # 6
print(f"Type données (dtype) : {matrice.dtype}") # int32 ou int64`,
                tip: '💡 Astuce : np.linspace est génial pour créer des axes de temps ou de coordonnées pour les graphiques !'
            },
            {
                title: 'Opérations Vectorisées',
                duration: '40 min',
                analogy: '🚀 Travailler en gros au lieu de faire du détail',
                content: `La **vectorisation** permet d'appliquer une opération à tout un tableau d'un seul coup, sans boucle !

**Avantages :**
- Code plus court et lisible
- Exécution ultra-rapide (C optimisé)

**Broadcasting** 📡
NumPy adapte intelligemment les dimensions pour permettre les opérations entre tableaux de tailles différentes.

**Analogie de l'Arrosage** 🚿
- **Boucle for** : Arroser chaque plante une par une avec un arrosoir.
- **Vectorisation** : Ouvrir le système d'arrosage automatique qui arrose tout le champ en même temps.`,
                keyPoints: [
                    'Évitez les boucles for avec NumPy (trop lent)',
                    'Les opérations se font élément par élément',
                    'Le broadcasting gère les dimensions automatiquement',
                    'Les fonctions mathématiques (sin, cos, exp) s\'appliquent à tout le tableau'
                ],
                code: `import numpy as np

# Sans NumPy (Lent)
liste = [1, 2, 3, 4, 5]
carres = []
for x in liste:
    carres.append(x ** 2)

# Avec NumPy (Rapide & Élégant)
arr = np.array([1, 2, 3, 4, 5])
carres_np = arr ** 2
print(f"Carrés : {carres_np}")

# Opérations mathématiques
angles = np.array([0, np.pi/2, np.pi])
sinus = np.sin(angles)
print(f"Sinus : {sinus}")

# Opérations entre tableaux
a = np.array([10, 20, 30])
b = np.array([1, 2, 3])
c = a + b      # [11 22 33]
d = a * b      # [10 40 90]

# Broadcasting (Magie !)
# Ajouter un scalaire à un vecteur
e = a + 5      # [15 25 35]
print(f"Broadcasting : {e}")

# Exemple scientifique : Chute libre
t = np.linspace(0, 10, 100)  # 100 points de 0 à 10s
g = 9.81
y = 0.5 * g * t**2  # Calcul de 100 positions d'un coup !`,
                tip: '💡 Astuce : Pensez "tableau" ! Si vous écrivez une boucle for sur un array NumPy, il y a probablement une meilleure façon de faire.'
            },
            {
                title: 'Indexation et Slicing Avancé',
                duration: '35 min',
                analogy: '🔪 Découper vos données avec la précision d\'un chirurgien',
                content: `NumPy offre des outils puissants pour extraire et modifier des parties de vos données.

**Slicing (Tranches)** 🍰
Comme les listes, mais en plusieurs dimensions : \`arr[début:fin:pas]\`

**Indexation Booléenne** 🎭
Sélectionner des éléments selon une condition (Masque).
*Exemple : "Donne-moi toutes les températures > 30°C"*

**Indexation Fantaisie (Fancy Indexing)** ✨
Utiliser des listes d'indices pour sélectionner des éléments dans le désordre.`,
                keyPoints: [
                    'Le slicing sur NumPy crée une VUE (pas de copie)',
                    'Modifier une vue modifie l\'original !',
                    'Utilisez .copy() si vous voulez une copie indépendante',
                    'Les masques booléens sont très puissants pour filtrer'
                ],
                code: `import numpy as np

matrice = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])

# Slicing 2D
# [lignes, colonnes]
coin = matrice[0:2, 0:2]
print(f"Coin haut-gauche :\\n{coin}")

colonne_2 = matrice[:, 1]  # Toutes les lignes, colonne index 1
print(f"2ème colonne : {colonne_2}")

# Indexation Booléenne (Filtrage)
data = np.array([25, 32, 18, 40, 28, 15])
chaud = data > 30
print(f"Masque : {chaud}") # [False True False True False False]

jours_chauds = data[data > 30]
print(f"Jours chauds : {jours_chauds}")

# Remplacer des valeurs
data[data < 20] = 0  # Met à 0 tout ce qui est < 20
print(f"Données filtrées : {data}")

# Attention aux vues !
sous_partie = matrice[0, :]
sous_partie[0] = 999
# matrice[0, 0] est maintenant 999 !`,
                tip: '💡 Astuce : L\'indexation booléenne est la méthode standard pour nettoyer des données (enlever les valeurs aberrantes, les NaN, etc.).'
            },
            {
                title: 'Algèbre Linéaire et Statistiques',
                duration: '45 min',
                analogy: '📊 Les maths du Big Data',
                content: `NumPy contient tout le nécessaire pour l'algèbre linéaire et les statistiques.

**Statistiques de base** 📈
Moyenne, médiane, écart-type, min, max...

**Algèbre Linéaire (numpy.linalg)** 📐
Produit matriciel, déterminant, valeurs propres, résolution de systèmes.

**Analogie du GPS** 🛰️
Le GPS résout des systèmes d'équations linéaires complexes à chaque seconde pour vous localiser. C'est de l'algèbre linéaire !`,
                keyPoints: [
                    'np.mean, np.median, np.std pour les stats',
                    'L\'axe (axis) définit la direction du calcul (0=colonnes, 1=lignes)',
                    'L\'opérateur @ sert au produit matriciel',
                    'np.linalg contient les fonctions avancées'
                ],
                code: `import numpy as np

data = np.random.normal(10, 2, 1000) # 1000 points, moyenne 10, écart-type 2

# Statistiques
print(f"Moyenne : {np.mean(data):.2f}")
print(f"Médiane : {np.median(data):.2f}")
print(f"Écart-type : {np.std(data):.2f}")
print(f"Min/Max : {np.min(data):.2f} / {np.max(data):.2f}")

# Matrices
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Produit matriciel (Ligne x Colonne)
C = A @ B  # ou np.dot(A, B)
print(f"Produit A @ B :\\n{C}")

# Résolution de système linéaire
# 2x + y = 8
# 3x + 4y = 18
coeffs = np.array([[2, 1], [3, 4]])
resultats = np.array([8, 18])

solutions = np.linalg.solve(coeffs, resultats)
print(f"Solutions (x, y) : {solutions}")

# Vérification
print(f"Vérif : {coeffs @ solutions}") # Doit donner [8, 18]`,
                tip: '💡 Astuce : axis=0 réduit les colonnes (donne 1 résultat par colonne), axis=1 réduit les lignes.'
            },
            {
                title: 'Manipulation de Formes et Aléatoire',
                duration: '40 min',
                analogy: '🎲 La pâte à modeler et le lancer de dés',
                content: `NumPy permet de changer la forme des données sans changer le contenu, et de générer du hasard contrôlé.

**Reshape (Remodelage)** 🧱
Change la forme d'un tableau (ex: transformer une liste de 12 nombres en matrice 3x4).
*Condition* : Le nombre total d'éléments doit rester le même.

**Random (Aléatoire)** 🎲
Le module \`np.random\` est essentiel pour les simulations (Monte Carlo, statique).

**Analogie de la Pâte à Modeler** 🏺
Vous avez 1kg d'argile. Vous pouvez en faire une boule, un cube, ou 10 petites billes. La forme change, mais c'est toujours 1kg d'argile.`,
                keyPoints: [
                    'arr.reshape(n, m) change les dimensions',
                    'arr.flatten() aplatit tout en 1D',
                    'np.random.normal() génère une distribution gaussienne (courbe en cloche)',
                    'np.random.seed() permet de rendre le hasard reproductible'
                ],
                code: `import numpy as np

# === MANIPULATION DE FORMES ===
arr = np.arange(12) # [0, 1, ..., 11]
print(f"Original (1D) : {arr}")

# Transformer en 3 lignes, 4 colonnes
matrice = arr.reshape(3, 4)
print(f"Matrice 3x4 :\\n{matrice}")

# Aplatir (retour à 1D)
plat = matrice.flatten()

# Transposée (échange lignes/colonnes)
print(f"Transposée :\\n{matrice.T}")

# === ALÉATOIRE (RANDOM) ===
np.random.seed(42)  # Pour avoir toujours les mêmes nombres

# 5 nombres entre 0 et 1
uniforme = np.random.rand(5)
print(f"Uniforme : {uniforme}")

# Loi Normale (Moyenne=0, Ecart-type=1)
gaussienne = np.random.randn(5)
print(f"Gaussienne : {gaussienne}")

# Entiers aléatoires (entre 1 et 100)
entiers = np.random.randint(1, 100, size=5)
print(f"Entiers : {entiers}")

# Choix aléatoire dans une liste
couleurs = ["Rouge", "Vert", "Bleu"]
choix = np.random.choice(couleurs, size=3, p=[0.1, 0.1, 0.8]) # 80% de chance Bleu
print(f"Couleurs tirées : {choix}")`,
                tip: '💡 Astuce : Utilisez toujours np.random.seed(42) au début de vos projets pour que vos collègues obtiennent les mêmes résultats aléatoires que vous !'
            },
            {
                title: 'Broadcasting et Algèbre Linéaire',
                duration: '45 min',
                analogy: '📢 La diffusion radio et le calcul matriciel',
                content: `Le **Broadcasting** est la magie de NumPy qui permet de faire des calculs entre des tableaux de tailles différentes.
L'**Algèbre Linéaire** (\`np.linalg\`) est le moteur des réseaux de neurones et de la physique 3D.

**Broadcasting** 📡
Si vous additionnez un scalaire (nombre) à une matrice, NumPy "diffuse" (copie virtuellement) ce nombre partout.
Si vous additionnez une ligne (1x3) à une matrice (3x3), il la diffuse sur chaque ligne.

**Produit Matriciel (@)** ✖️
Attention ! \`*\` multiplie élément par élément. Pour le vrai produit matriciel (Ligne x Colonne), utilisez \`@\` ou \`np.dot()\`.`,
                keyPoints: [
                    'Broadcasting : Les dimensions doivent être compatibles (égales ou l\'une vaut 1)',
                    'A @ B : Produit matriciel (dot product)',
                    'np.linalg.inv() : Inverse une matrice',
                    'np.linalg.eig() : Valeurs et vecteurs propres (Eigenvalues)'
                ],
                code: `import numpy as np

# === BROADCASTING ===
M = np.ones((3, 3))
vecteur = np.array([1, 2, 3])

# On ajoute [1, 2, 3] à CHAQUE ligne de M
resultat = M + vecteur
print(f"Broadcasting :\\n{resultat}")
# Résultat:
# [[2, 3, 4],
#  [2, 3, 4],
#  [2, 3, 4]]

# === ALGÈBRE LINÉAIRE ===
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Multiplication élément par élément
print(f"A * B :\\n{A * B}")

# Multiplication Matricielle (Dot Product)
print(f"A @ B :\\n{A @ B}")
# 1*5 + 2*7 = 19 ...

# Inverse de matrice
inv_A = np.linalg.inv(A)
print(f"A^(-1) :\\n{inv_A}")
print(f"A @ A^(-1) (Identité) :\\n{np.round(A @ inv_A)}")`,
                tip: '💡 Astuce : Le symbole @ pour la multiplication matricielle est une nouveauté de Python 3.5+. Avant, on utilisait np.dot(A, B).'
            }
        ]
    },
    {
        id: 'sympy',
        title: '6. SymPy : Mathématiques Symboliques',
        icon: '∫',
        color: '#FFD93D',
        description: 'Mathématiques exactes avec Python',
        duration: '6 heures',
        isHighlight: true,
        lessons: [
            {
                title: 'Introduction et Symboles',
                duration: '20 min',
                analogy: '🔣 L\'algèbre au lieu de l\'arithmétique',
                content: `**SymPy** manipule des symboles, pas des nombres approchés.
Pour commencer, il faut déclarer les variables mathématiques que l'on veut utiliser.`,
                keyPoints: [
                    'symbols("x y") crée des variables symboliques',
                    'init_printing() active le rendu LaTeX',
                    'Contrairement à float, sqrt(8) reste √8'
                ],
                code: `import sympy as sp
sp.init_printing()

x, y = sp.symbols('x y')
f = x + 2*y
print(f + x) # 2*x + 2*y`,
                tip: '💡 Déclarez toujours vos symboles au début.'
            },
            {
                title: 'Arithmétique Exacte',
                duration: '25 min',
                analogy: '🍰 Couper le gâteau sans perdre de miettes',
                content: `Les ordinateurs font des erreurs d'arrondi (0.1 + 0.2 != 0.3).
SymPy utilise des entiers et des rationnels de taille illimitée pour une précision parfaite.`,
                keyPoints: [
                    'Rational(1, 3) est exactement 1/3',
                    'pi et E sont les constantes exactes',
                    'evalf() convertit en nombre décimal'
                ],
                code: `val = sp.Rational(1, 3) + sp.Rational(1, 5)
print(val) # 8/15
print(sp.pi.evalf(50)) # 50 décimales de Pi`,
                tip: '💡 Ne divisez jamais avec / si vous voulez garder la fraction exacte, utilisez Rational.'
            },
            {
                title: 'Substitution',
                duration: '20 min',
                analogy: '🎭 Changer de masque',
                content: `Remplacer un symbole par une valeur ou une autre expression.
Fondamental pour évaluer des fonctions ou changer de variables.`,
                keyPoints: [
                    'expr.subs(x, valeur) remplace x',
                    'On peut remplacer par des nombres ou d\'autres symboles',
                    'On peut faire des substitutions multiples [(x, 1), (y, 2)]'
                ],
                code: `expr = x**2 + y
print(expr.subs(x, 3)) # y + 9
print(expr.subs([(x, 1), (y, 2)])) # 3`,
                tip: '💡 subs ne modifie pas l\'original, il renvoie une copie.'
            },
            {
                title: 'Simplification',
                duration: '30 min',
                analogy: '🧹 Le grand ménage',
                content: `SymPy peut réduire des expressions compliquées à leur forme la plus simple.
Une des fonctions les plus puissantes mais parfois imprévisible.`,
                keyPoints: [
                    'simplify() essaie tout pour réduire l\'expression',
                    'Utilise les identités trigonométriques et algébriques',
                    'Pas toujours la forme souhaitée'
                ],
                code: `expr = sp.sin(x)**2 + sp.cos(x)**2
print(sp.simplify(expr)) # 1
expr2 = (x**3 + x**2 - x - 1)/(x**2 + 2*x + 1)
print(sp.simplify(expr2)) # x - 1`,
                tip: '💡 Si simplify est trop lent, essayez des outils plus spécifiques comme factor ou cancel.'
            },
            {
                title: 'Développement (Expand)',
                duration: '25 min',
                analogy: '💥 L\'explosion contrôlée',
                content: `Transformer des produits de facteurs en somme de termes.
Utile pour voir tous les composants d'un polynôme.`,
                keyPoints: [
                    'expand() distribue les multiplications',
                    'expand_trig() développe les formules trigo',
                    'Gère les puissances (x+y)**10'
                ],
                code: `expr = (x + 1)**3
print(sp.expand(expr)) 
# x**3 + 3*x**2 + 3*x + 1`,
                tip: '💡 Utile avant de chercher des coefficients.'
            },
            {
                title: 'Factorisation',
                duration: '25 min',
                analogy: '📦 Mettre en boîtes',
                content: `L'inverse du développement : regrouper les termes en produits.
Essentiel pour trouver les racines d'un polynôme.`,
                keyPoints: [
                    'factor() trouve les facteurs irréductibles',
                    'Fonctionne sur les polynômes multivariés',
                    'Aide à la simplification visuelle'
                ],
                code: `expr = x**3 - x**2 + x - 1
print(sp.factor(expr)) # (x - 1)*(x**2 + 1)`,
                tip: '💡 La forme factorisée est souvent la plus lisible.'
            },
            {
                title: 'Résolution d\'Équations (Solveset)',
                duration: '35 min',
                analogy: '🔍 Trouver l\'inconnue X',
                content: `Trouver les valeurs qui satisfont une égalité.
\`solveset\` est la nouvelle méthode robuste qui remplace \`solve\`.
Si vous écrivez \`solveset(eq, x)\`, SymPy résout \`eq = 0\`.`,
                keyPoints: [
                    'solveset(eq, x) suppose eq = 0',
                    'Renvoie un ensemble (Set) de solutions',
                    'Gère les solutions infinies ou complexes'
                ],
                code: `eq = x**2 - 4
print(sp.solveset(eq, x)) # {-2, 2}
eq2 = sp.exp(x)
print(sp.solveset(eq2, x)) # EmptySet (pas de solution)`,
                tip: '💡 Pour des égalités comme a = b, écrivez a - b.'
            },
            {
                title: 'Systèmes d\'Équations',
                duration: '35 min',
                analogy: '🔗 Démêler les nœuds',
                content: `Résoudre plusieurs équations avec plusieurs inconnues simultanément.
\`linsolve\` pour le linéaire, \`nonlinsolve\` pour le reste.`,
                keyPoints: [
                    'linsolve([eq1, eq2], (x, y))',
                    'Forme tuple pour les valeurs retournées',
                    'Très utilisé en géométrie et physique'
                ],
                code: `systeme = [x + y - 5, x - y - 1]
print(sp.linsolve(systeme, (x, y))) # {(3, 2)}`,
                tip: '💡 Vérifiez toujours si une solution existe.'
            },
            {
                title: 'Trigonométrie',
                duration: '25 min',
                analogy: '🔺 Les triangles et les cycles',
                content: `Manipuler les fonctions sin, cos, tan.
SymPy connaît toutes les identités trigonométriques.`,
                keyPoints: [
                    'simplify() gère bien la trigo',
                    'trigsimp() est spécialisé pour simplifier la trigo',
                    'expand_trig() développe les formules comme sin(2x)'
                ],
                code: `expr = sp.sin(x)**2 + sp.cos(x)**2
print(sp.simplify(expr)) # 1
print(sp.expand_trig(sp.sin(2*x))) # 2*sin(x)*cos(x)`,
                tip: '💡 Les fonctions trigo sont dans sympy, pas besoin de math ou numpy pour le symbolique.'
            },
            {
                title: 'Les Limites',
                duration: '30 min',
                analogy: '🚧 S\'approcher du bord',
                content: `Calculer la valeur vers laquelle tend une fonction.
Indispensable pour l'analyse et la continuité.`,
                keyPoints: [
                    'limit(f, x, valeur)',
                    'Gère l\'infini (oo) et les formes indéterminées',
                    'dir="+" ou "-" pour les limites latérales'
                ],
                code: `f = sp.sin(x)/x
print(sp.limit(f, x, 0)) # 1
g = 1/x
print(sp.limit(g, x, 0, dir='+')) # oo`,
                tip: '💡 SymPy utilise "oo" (deux o minuscules) pour l\'infini.'
            },
            {
                title: 'Dérivées',
                duration: '35 min',
                analogy: '📉 La pente de la montagne',
                content: `Le taux de variation instantané.
SymPy peut dériver n'importe queue fonction composée.`,
                keyPoints: [
                    'diff(f, x) dérive f par rapport à x',
                    'diff(f, x, n) dérive n fois',
                    'On peut dériver par rapport à plusieurs variables'
                ],
                code: `f = x**3
print(sp.diff(f, x)) # 3*x**2
g = sp.exp(x**2)
print(sp.diff(g, x)) # 2*x*exp(x**2)`,
                tip: '💡 Vérifiez vos calculs de dérivées à la main avec SymPy !'
            },
            {
                title: 'Intégrales',
                duration: '45 min',
                analogy: '🧱 L\'aire sous la courbe',
                content: `L'opération inverse de la dérivée.
Calcul de primitives et d'aires exactes.`,
                keyPoints: [
                    'integrate(f, x) : Primitive',
                    'integrate(f, (x, a, b)) : Intégrale définie',
                    'Peut gérer des bornes infinies'
                ],
                code: `print(sp.integrate(sp.cos(x), x)) # sin(x)
print(sp.integrate(sp.exp(-x), (x, 0, sp.oo))) # 1`,
                tip: '💡 SymPy est très fort, mais certaines intégrales n\'ont pas de solution analytique.'
            },
            {
                title: 'Séries de Taylor',
                duration: '25 min',
                analogy: '🧬 L\'ADN de la fonction locale',
                content: `Approcher n'importe quelle fonction par un polynôme.
Fondamental en physique pour les approximations aux petits angles.`,
                keyPoints: [
                    'series(f, x, x0, n) donne le développment limité',
                    'O(x**n) représente l\'erreur d\'approximation',
                    'removeO() enlève le grand O pour tracer'
                ],
                code: `f = sp.sin(x)
print(f.series(x, 0, 6))
# x - x**3/6 + x**5/120 + O(x**6)`,
                tip: '💡 Les physiciens adorent s\'arrêter au premier ordre !'
            },
            {
                title: 'Matrices et Algèbre Linéaire',
                duration: '40 min',
                analogy: '📊 Tableaux de nombres puissants',
                content: `SymPy gère les matrices symboliques, valeurs propres, déterminants.
Contrairement à NumPy, les résultats sont exacts.`,
                keyPoints: [
                    'Matrix([[1, 2], [3, 4]])',
                    'M.det(), M.inv()',
                    'M.eigenvals(), M.eigenvects()'
                ],
                code: `M = sp.Matrix([[1, 2], [2, 1]])
print(M.eigenvals()) # {-1: 1, 3: 1} (Valeur: Multiplicité)
print(M.inv()) # Inverse exacte`,
                tip: '💡 SymPy peut diagonnaliser des matrices avec des variables inconnues.'
            },
            {
                title: 'Équations Différentielles (ODEs)',
                duration: '45 min',
                analogy: '🔮 Prédire le futur',
                content: `Résoudre les équations qui lient une fonction et ses dérivées.
Applications : Mouvement, Circuits électriques, Chimie.`,
                keyPoints: [
                    'dsolve(eq, f(x)) résout l\'équation',
                    'Function("y")(x) définit la fonction inconnue',
                    'ics={f(0): 1} définit les conditions initiales'
                ],
                code: `y = sp.Function('y')(x)
eq = y.diff(x) - y
print(sp.dsolve(eq, y)) # y(x) = C1*exp(x)`,
                tip: '💡 dsolve renvoie une équation Eq(y(x), résultat), pas juste le résultat.'
            },
            {
                title: 'Transformées de Laplace',
                duration: '35 min',
                analogy: '🌐 Changer de monde pour simplifier',
                content: `Passer du domaine temporel (t) au domaine fréquentiel (s).
Transforme les équations différentielles en équations algébriques simples.`,
                keyPoints: [
                    'laplace_transform(f, t, s)',
                    'inverse_laplace_transform(F, s, t)',
                    'Indispensable en automatique et théorie du signal'
                ],
                code: `t, s = sp.symbols('t s')
f = sp.exp(-t)
L = sp.laplace_transform(f, t, s)
print(L[0]) # 1/(s + 1)`,
                tip: '💡 SymPy gère aussi Fourier et Z-transform.'
            },
            {
                title: 'Calcul Vectoriel',
                duration: '35 min',
                analogy: '🧭 Naviguer dans l\'espace',
                content: `Gradient, Divergence, Rotationnel.
Les opérateurs différentiels vectoriels essentiels pour l'électromagnétisme.`,
                keyPoints: [
                    'CoordSys3D définit un repère',
                    'Del permet de calculer gradient, div, rot',
                    'Indépendant du système de coordonnées'
                ],
                code: `from sympy.vector import CoordSys3D, Del
N = CoordSys3D('N')
f = N.x**2 * N.y
delop = Del()
print(delop.gradient(f)) # 2*N.x*N.y*N.i + N.x**2*N.j`,
                tip: '💡 geometry module permet aussi de manipuler des objets géométriques.'
            },
            {
                title: 'Mécanique Lagrangienne',
                duration: '50 min',
                analogy: '🎢 Le chemin de moindre action',
                content: `SymPy a un module physique complet.
On peut établir les équations du mouvement juste en définissant l'énergie cinétique et potentielle.`,
                keyPoints: [
                    'mechanics module',
                    'Lagrangian(T, V)',
                    'LagrangesMethod génère les équations',
                    'Plus simple que Newton pour les systèmes complexes'
                ],
                code: `from sympy.physics.mechanics import dynamicsymbols, LagrangesMethod, Lagrangian, Particle, Point, ReferenceFrame
m, g, l = sp.symbols('m g l')
t = dynamicsymbols._t
theta = dynamicsymbols('theta')
omega = theta.diff(t)
# (Exemple conceptuel simplifié)`,
                tip: '💡 Très puissant pour la robotique.'
            },
            {
                title: 'Génération de Code',
                duration: '25 min',
                analogy: '🗣️ Traducteur universel',
                content: `Transformer une expression SymPy lente en fonction NumPy, C ou Fortran ultra-rapide.
Le pont entre le symbolique (théorie) et le numérique (simulation).`,
                keyPoints: [
                    'lambdify((x), expr, "numpy") crée une fonction Python rapide',
                    'codegen génère du code C',
                    'latex(expr) génère le code pour vos rapports'
                ],
                code: `expr = sp.sin(x)**2
f_fast = sp.lambdify(x, expr, "numpy")
print(f_fast(np.array([0, 1, 2]))) # Marche avec des tableaux !`,
                tip: '💡 Utilisez lambdify avant de tracer des graphiques avec Matplotlib.'
            },
            {
                title: 'Conclusion et Projets',
                duration: '15 min',
                analogy: '🎓 La remise de diplôme',
                content: `Vous maîtrisez maintenant le calcul symbolique.
Prochains défis : Résoudre des problèmes de physique complexes et optimiser vos calculs.`,
                keyPoints: [
                    'SymPy pour la dérivation théorique',
                    'NumPy pour le calcul numérique intensif',
                    'Matplotlib pour la visualisation'
                ],
                code: `# SymLab Power Trio
# 1. SymPy : Trouvez la formule E = mc²
# 2. NumPy : Calculez E pour m = 1kg
# 3. Matplotlib : Tracez E en fonction de m`,
                tip: '💡 Le combo SymPy + NumPy est imbattable.'
            }
        ]
    },

    {
        id: 'scipy',
        title: '7. SciPy : Calcul Scientifique Avancé',
        icon: '🧪',
        color: '#6BCB77',
        description: 'Algorithmes scientifiques avec SciPy',
        duration: '3 heures',
        lessons: [
            {
                title: 'Introduction à SciPy',
                duration: '30 min',
                analogy: '🧰 La boîte à outils de l\'ingénieur',
                content: `**SciPy** est construit sur NumPy et ajoute des algorithmes scientifiques avancés.

**Modules principaux :**
- \`scipy.optimize\` : Minimisation et ajustement de courbes
- \`scipy.integrate\` : Intégration numérique et EDO
- \`scipy.interpolate\` : Interpolation
- \`scipy.signal\` : Traitement du signal
- \`scipy.stats\` : Statistiques avancées

**Analogie du Garage** 🔧
- **NumPy** : Les matériaux de base (acier, vis, boulons).
- **SciPy** : Les outils spécialisés (perceuse, soudeuse, scanner).`,
                keyPoints: [
                    'SciPy complète NumPy avec des algorithmes de haut niveau',
                    'Chaque sous-module doit souvent être importé séparément',
                    'C\'est la bibliothèque standard pour l\'ingénierie et la recherche',
                    'Très performant car basé sur du code Fortran/C'
                ],
                code: `import numpy as np
from scipy import constants

# Constantes physiques précises
print(f"Vitesse lumière (c) : {constants.c} m/s")
print(f"Constante Planck (h) : {constants.h} J.s")
print(f"Masse électron (m_e) : {constants.m_e} kg")
print(f"Nombre Avogadro (N_A) : {constants.N_A}")

# Conversion d'unités
miles = 10
km = miles * constants.mile / constants.kilo
print(f"{miles} miles = {km:.2f} km")`,
                tip: '💡 Astuce : Ne réinventez pas la roue ! Si vous cherchez un algorithme scientifique (FFT, optimisation...), il est probablement déjà dans SciPy.'
            },
            {
                title: 'Optimisation et Curve Fitting',
                duration: '50 min',
                analogy: '🎯 Trouver le point parfait',
                content: `L'**optimisation** consiste à trouver le minimum ou le maximum d'une fonction.
Le **curve fitting** (ajustement de courbe) consiste à trouver la fonction qui colle le mieux à vos données expérimentales.

**minimize()** 📉
Trouve le minimum d'une fonction.

**curve_fit()** 〰️
Ajuste les paramètres d'un modèle pour correspondre aux données.

**Analogie de la Balle** ⚽
- **Optimisation** : La balle roule jusqu'au point le plus bas de la vallée.
- **Curve Fitting** : Trouver la trajectoire idéale qui passe par tous les points mesurés.`,
                keyPoints: [
                    'minimize() utilise des algorithmes comme BFGS ou Nelder-Mead',
                    'curve_fit() utilise la méthode des moindres carrés',
                    'Essentiel pour analyser des données expérimentales',
                    'Nécessite de définir une fonction modèle'
                ],
                code: `import numpy as np
from scipy.optimize import minimize, curve_fit

# === OPTIMISATION ===
# Fonction : f(x) = (x-3)² + 5
def f(x):
    return (x - 3)**2 + 5

# Trouver le minimum (on part de x=0)
resultat = minimize(f, x0=0)
print(f"Minimum trouvé à x = {resultat.x[0]:.2f}") # Devrait être 3.00
print(f"Valeur minimale = {resultat.fun:.2f}")     # Devrait être 5.00

# === CURVE FITTING ===
# Modèle théorique (ex: décroissance exponentielle)
def modele(t, a, b, c):
    return a * np.exp(-b * t) + c

# Données expérimentales (avec du bruit)
t_data = np.linspace(0, 4, 20)
y_data = 2.5 * np.exp(-1.3 * t_data) + 0.5 + 0.05 * np.random.normal(size=len(t_data))

# Ajustement
params, covariance = curve_fit(modele, t_data, y_data)
a_fit, b_fit, c_fit = params

print(f"Paramètres trouvés : a={a_fit:.2f}, b={b_fit:.2f}, c={c_fit:.2f}")
# Devrait être proche de 2.5, 1.3, 0.5`,
                tip: '💡 Astuce : Pour curve_fit, donner une estimation initiale (p0) aide beaucoup l\'algorithme à converger vers la bonne solution.'
            },
            {
                title: 'Intégration Numérique et EDO',
                duration: '45 min',
                analogy: '🔢 Calculer l\'aire brique par brique',
                content: `Quand SymPy ne peut pas trouver de solution exacte (ce qui arrive souvent dans la vraie vie), SciPy calcule une solution **numérique** approchée.

**quad()** ∫
Calcule une intégrale définie numériquement.

**odeint()** ou **solve_ivp()** 🌊
Résout des équations différentielles numériquement.

**Analogie du Remplissage** 💧
- **SymPy** : Calcule le volume exact d'une forme parfaite.
- **SciPy** : Remplit la forme avec de l'eau et mesure le volume (marche pour n'importe quelle forme !).`,
                keyPoints: [
                    'quad est très précis pour les intégrales 1D',
                    'odeint est le standard pour simuler des systèmes dynamiques',
                    'Nécessite de définir le système sous forme de dérivées premières',
                    'Permet de simuler des systèmes complexes (météo, planètes, épidémies)'
                ],
                code: `import numpy as np
from scipy.integrate import quad, odeint

# === INTÉGRATION NUMÉRIQUE ===
# Intégrale de exp(-x²) de 0 à infini (Gaussienne)
def gaussienne(x):
    return np.exp(-x**2)

aire, erreur = quad(gaussienne, 0, np.inf)
print(f"Aire gaussienne : {aire:.5f}") # sqrt(pi)/2 = 0.88623...

# === RÉSOLUTION EDO (Pendule) ===
# Système : theta'' = - (g/L) * sin(theta)
# On transforme en 2 équations d'ordre 1 :
# y1 = theta
# y2 = theta' (vitesse angulaire)
# y1' = y2
# y2' = -(g/L) * sin(y1)

def pendule(y, t, g, L):
    theta, omega = y
    dydt = [omega, -(g/L) * np.sin(theta)]
    return dydt

# Paramètres
g = 9.81
L = 1.0
y0 = [np.pi/4, 0]  # Angle initial 45°, vitesse 0
t = np.linspace(0, 10, 101)

solution = odeint(pendule, y0, t, args=(g, L))
theta = solution[:, 0]

print(f"Angle final : {theta[-1]:.2f} rad")`,
                tip: '💡 Astuce : odeint retourne un tableau NumPy. La première colonne est la première variable, la deuxième colonne la deuxième variable, etc.'
            },
            {
                title: 'Traitement, Interpolation et FFT',
                duration: '50 min',
                analogy: '🌈 Décomposer la lumière et relier les points',
                content: `SciPy excelle aussi pour analyser des signaux et boucher les trous dans les données.

**Interpolation** ✍️
Imaginez que vous avez des mesures tous les 10 mètres, mais vous voulez connaître la valeur à 5 mètres. L'interpolation permet de "deviner" intelligemment les valeurs manquantes.

**Fourier (FFT)** 🎵
Permet de décomposer n'importe quel signal complexe en une somme de notes pures (fréquences). C'est comme voir les ingrédients d'un smoothie !

**Analogie du Prisme** 💎
- **Signal temporel** : La lumière blanche (mélange).
- **FFT** : Le prisme qui sépare les couleurs (spectre).`,
                keyPoints: [
                    'interp1d crée une fonction qui relie vos points de données',
                    'fft transforme le temps en fréquences',
                    'Utile pour filtrer du bruit ou analyser des vibrations',
                    'scipy.signal contient aussi des filtres pre-faits (Butterworth...)'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.interpolate import interp1d
from scipy.fft import fft, fftfreq

# === INTERPOLATION ===
x = np.linspace(0, 10, 11)  # 11 points (0, 1, 2... 10)
y = np.sin(x)

# Création de la fonction d'interpolation
f_linear = interp1d(x, y, kind='linear')
f_cubic = interp1d(x, y, kind='cubic')

x_new = np.linspace(0, 10, 100) # Plus de points pour lisser
plt.figure()
plt.scatter(x, y, label='Données brutes')
plt.plot(x_new, f_cubic(x_new), label='Cubic (Lissé)')
plt.legend()
plt.show()

# === FOURIER (FFT) ===
# Créer un signal bruité
t = np.linspace(0, 1, 500)
freq = 5 # 5 Hz
signal = np.sin(2 * np.pi * freq * t) + 0.5 * np.random.normal(size=len(t))

# Calcul FFT
spectre = fft(signal)
frequences = fftfreq(len(t), t[1]-t[0])

# Afficher seulement la partie positive
mask = frequences > 0
plt.figure()
plt.plot(frequences[mask], np.abs(spectre)[mask])
plt.title("Spectre de fréquences (Pic attendu à 5 Hz)")
plt.xlabel("Fréquence (Hz)")
plt.show()`,
                tip: '💡 Astuce : L\'interpolation cubique (kind="cubic") donne des courbes beaucoup plus douces et naturelles que l\'interpolation linéaire.'
            },
            {
                title: 'Traitement d\'Images Scientifique',
                duration: '45 min',
                analogy: '🔬 Le microscope numérique',
                content: `Une image n'est rien d'autre qu'une matrice de nombres (pixels).
SciPy (\`scipy.ndimage\`) fournit des outils puissants pour traiter ces "matrices-images", comme les filtres, la morphologie ou les mesures d'objets.

**Filtres** 🌫️
Flouter, accentuer les bords (Sobel), supprimer le bruit (Médian).

**Mesures** 📏
Compter des objets, mesurer leur aire, trouver leur centre de gravité.`,
                keyPoints: [
                    'gaussian_filter() lisse l\'image (flou)',
                    'sobel() détecte les contours',
                    'label() compte les objets distincts (clusters de pixels)',
                    'center_of_mass() trouve le centre des objets'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt
from scipy import ndimage

# Création d'une image synthétique avec du bruit
n = 100
image = np.zeros((n, n))
# On crée deux carrés
image[20:40, 20:40] = 1
image[60:80, 60:80] = 1
# On ajoute du bruit
image += 0.5 * np.random.random((n, n))

# 1. Filtrage (Lissage Gaussien pour réduire le bruit)
image_lisse = ndimage.gaussian_filter(image, sigma=2)

# 2. Seuillage (masque binaire)
masque = image_lisse > 0.8

# 3. Étiquetage et Mesure (Compter les objets)
labels, nb_objets = ndimage.label(masque)
centres = ndimage.center_of_mass(masque, labels, range(1, nb_objets+1))

print(f"Nombre d'objets détectés : {nb_objets}")
print(f"Centres de gravité : {centres}")

# Affichage
plt.figure(figsize=(10, 4))
plt.subplot(131); plt.imshow(image); plt.title("Image Bruitée")
plt.subplot(132); plt.imshow(image_lisse); plt.title("Lissée (Gaussien)")
plt.subplot(133); plt.imshow(labels, cmap='jet'); plt.title("Objets Identifiés")
plt.show()`,
                tip: '💡 Astuce : En astronomie ou en biologie cellulaire, ces techniques permettent de compter automatiquement des étoiles ou des cellules sur une photo !'
            }
        ]
    },
    {
        id: 'matplotlib',
        title: '8. Matplotlib : Visualisation de Données',
        icon: '📈',
        color: '#F97316',
        description: 'Créez des graphiques professionnels',
        duration: '2h 30min',
        lessons: [
            {
                title: 'Introduction aux Graphiques',
                duration: '40 min',
                analogy: '🎨 De la feuille de papier millimétré à l\'écran',
                content: `** Matplotlib ** est la bibliothèque standard pour tracer des courbes en Python.
Elle ressemble beaucoup à MATLAB.

** Fonctions de base :**
                                - \`plt.plot(x, y)\` : Trace une ligne
- \`plt.scatter(x, y)\` : Trace des points
- \`plt.bar(x, y)\` : Diagramme en bâtons
- \`plt.hist(data)\` : Histogramme

**Analogie du Peintre** 🖌️
1. **Figure** : La toile vierge
2. **Axes** : Le cadre et les axes gradués
3. **Plot** : Le coup de pinceau`,
                keyPoints: [
                    'Toujours importer avec import matplotlib.pyplot as plt',
                    'plt.show() est nécessaire pour afficher le graphique',
                    'Ajoutez toujours titre, labels et légende',
                    'plt.savefig() permet d\'enregistrer en PNG/PDF'
                ],
                code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='Sinus', color='blue', linewidth=2)
plt.plot(x, np.cos(x), label='Cosinus', color='red', linestyle='--')

plt.title("Fonctions Trigonométriques")
plt.xlabel("Temps (s)")
plt.ylabel("Amplitude")
plt.legend()
plt.grid(True)
plt.show()`,
                tip: '💡 Astuce : Utilisez plt.style.use(\'seaborn\') ou \'ggplot\' pour avoir de beaux graphiques instantanément !'
            },
            {
                title: 'Subplots et 3D',
                duration: '50 min',
                analogy: '🖼️ Une exposition avec plusieurs tableaux',
                content: `Parfois, on veut afficher plusieurs graphiques côte à côte.

**Subplots** 🪟
Divise la fenêtre en une grille de graphiques.
\`plt.subplot(lignes, colonnes, index)\`

**3D** 🧊
Matplotlib peut aussi tracer en 3D !
\`ax = plt.axes(projection='3d')\``,
                keyPoints: [
                    'subplot permet de comparer plusieurs données',
                    'Les graphiques 3D nécessitent une projection spéciale',
                    'On peut animer les graphiques avec FuncAnimation',
                    'Scatter 3D est génial pour visualiser des clusters'
                ],
                code: `import matplotlib.pyplot as plt
import numpy as np

# Subplots
plt.figure()

plt.subplot(2, 1, 1) # 2 lignes, 1 colonne, graphique 1
plt.plot(np.random.random(10))
plt.title("Bruit Aléatoire")

plt.subplot(2, 1, 2) # Graphique 2
plt.plot(np.arange(10)**2)
plt.title("Fonction Carré")

plt.tight_layout() # Évite les chevauchements
plt.show()

# 3D
ax = plt.axes(projection='3d')
z = np.linspace(0, 15, 1000)
x = np.sin(z)
y = np.cos(z)
ax.plot3D(x, y, z, 'gray')
plt.show()`,
                tip: '💡 Astuce : Pour des graphiques interactifs (zoom, survol), regardez aussi la bibliothèque Plotly.'
            },
            {
                title: 'Graphiques Statistiques et Annotations',
                duration: '45 min',
                analogy: '📊 Le journalisme de données : raconter une histoire',
                content: `Un bon graphique vaut 1000 mots, mais seulement s'il est clair et riche !

**Histogrammes & Boxplots** 📈
Essentiels pour comprendre la distribution d'une variable (moyenne, étalement, valeurs extrêmes).

**Annotations** 🏷️
Ajouter du texte, des flèches et des marqueurs pour guider l'œil du lecteur vers l'information importante.

**Analogie de la Météo** ☀️
Dire "il fait 25°C" est une info. Montrer une courbe avec une flèche "Pic de chaleur à 14h" raconte une histoire.`,
                keyPoints: [
                    'plt.hist() pour la distribution de fréquences',
                    'plt.boxplot() pour voir la médiane et les outliers',
                    'plt.annotate() pour ajouter du texte avec des flèches',
                    'Un graphique sans titre ni unités ne vaut rien !'
                ],
                code: `import matplotlib.pyplot as plt
import numpy as np

# Données : Notes d'une classe (distribution normale)
notes = np.random.normal(12, 3, 1000) # Moyenne 12, Ecart 3

plt.figure(figsize=(12, 5))

# === HISTOGRAMME ===
plt.subplot(1, 2, 1)
plt.hist(notes, bins=20, color='skyblue', edgecolor='black')
plt.title("Distribution des Notes")
plt.xlabel("Note / 20")
plt.ylabel("Nombre d'élèves")

# Ajouter une ligne verticale pour la moyenne
plt.axvline(np.mean(notes), color='red', linestyle='--', label='Moyenne')
plt.legend()

# === BOXPLOT (Boîte à moustaches) ===
plt.subplot(1, 2, 2)
plt.boxplot(notes, vert=False, patch_artist=True)
plt.title("Résumé Statistique")
plt.xlabel("Note / 20")

# Annotation
plt.annotate('Élève brillant !', 
             xy=(19, 1), 
             xytext=(15, 1.3),
             arrowprops=dict(facecolor='black', shrink=0.05))

plt.tight_layout()
plt.show()`,
                tip: '💡 Astuce : Le Boxplot est l\'outil ultime pour détecter les "outliers" (valeurs aberrantes) d\'un seul coup d\'œil.'
            },
            {
                title: 'Heatmaps et Styles Avancés',
                duration: '50 min',
                analogy: '🎨 Devenir un artiste de la donnée',
                content: `Parfois, vous avez des données en 2D (température sur une carte, matrice de corrélation, image).
La fonction **imshow()** (Image Show) est votre meilleure amie.

**Styles (rcparams)** 💅
Matplotlib est entièrement personnalisable. Ne gardez pas le style par défaut des années 90 ! Utilisez des feuilles de style.

**Heatmaps** 🔥
Une carte de chaleur représente des valeurs par des couleurs. Le choix de la palette (cmap) est crucial (viridis, magma, seismic...).`,
                keyPoints: [
                    'plt.imshow() pour les matrices 2D',
                    'plt.colorbar() est obligatoire pour comprendre l\'échelle des couleurs',
                    'plt.style.use() change le look instantanément',
                    'cmap="RdBu" (Rouge-Bleu) est idéal pour les écarts positifs/négatifs'
                ],
                code: `import matplotlib.pyplot as plt
import numpy as np

# Changeons le style global
plt.style.use('dark_background') # Essayez 'seaborn-v0_8' ou 'ggplot'

# Créons une grille 2D (ex: altitude d'une montagne)
x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2)) # Fonction "Chapeau mexicain"

plt.figure(figsize=(8, 6))

# Affichage Heatmap
im = plt.imshow(Z, cmap='magma', extent=[-5, 5, -5, 5], origin='lower')

# Barre de couleur
cbar = plt.colorbar(im)
cbar.set_label('Altitude (m)')

# Décoration
plt.title("Carte Topographique (Heatmap)")
plt.xlabel("Position X")
plt.ylabel("Position Y")

# Sauvegarde haute qualité pour publication
# plt.savefig('mon_chef_doeuvre.png', dpi=300, bbox_inches='tight')

plt.show()

# Reset style pour la suite
plt.style.use('default')`,
                tip: '💡 Astuce : N\'utilisez JAMAIS la colormap "jet" (arc-en-ciel) pour des données scientifiques, elle fausse la perception visuelle. Préférez "viridis" (par défaut) ou "magma".'
            }
        ]
    },
    {
        id: 'projects',
        title: '9. Projets Scientifiques Complets',
        icon: '🚀',
        color: '#10B981',
        description: 'Appliquez vos connaissances sur des cas réels',
        duration: '5 heures',
        lessons: [
            {
                title: 'Projet 1 : Mouvement de Projectile',
                duration: '2h',
                analogy: '⚽ La physique du coup franc parfait',
                content: `** Objectif ** : Modéliser la trajectoire d'un projectile (ballon, fusée) avec frottements de l'air.

** Outils utilisés ** :
- ** NumPy ** : Calculs vectoriels
        - ** SciPy ** : Résolution de l'équation différentielle
            - ** Matplotlib ** : Visualisation de la trajectoire

                ** Physique ** 📐
Forces en jeu:
    1. ** Poids ** : $P = m \\cdot g$(vers le bas)
    2. ** Frottement ** : $F = -k \\cdot v ^ 2$(opposé à la vitesse)

        ** Équations ** :
$x'' = - (k / m) \\cdot v \\cdot x'$
$y'' = -g - (k / m) \\cdot v \\cdot y'$`,
                keyPoints: [
                    'Définir les conditions initiales (vitesse, angle)',
                    'Transformer les équations du second ordre en système du premier ordre',
                    'Comparer la trajectoire avec et sans frottements',
                    'Calculer la portée maximale'
                ],
                code: `import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt

# Paramètres
g = 9.81
m = 0.45   # Masse ballon (kg)
k = 0.005  # Coefficient frottement
v0 = 30    # Vitesse initiale (m/s)
angle = 45 # Angle (degrés)

# Conditions initiales
theta = np.radians(angle)
vx0 = v0 * np.cos(theta)
vy0 = v0 * np.sin(theta)
y0 = [0, 0, vx0, vy0] # x, y, vx, vy

# Système d'équations
def projectile(state, t, g, m, k):
    x, y, vx, vy = state
    v = np.sqrt(vx**2 + vy**2)
    
    dxdt = vx
    dydt = vy
    dvxdt = -(k/m) * v * vx
    dvydt = -g - (k/m) * v * vy
    
    return [dxdt, dydt, dvxdt, dvydt]

# Simulation
t = np.linspace(0, 5, 100)
sol = odeint(projectile, y0, t, args=(g, m, k))

x = sol[:, 0]
y = sol[:, 1]

# Filtrer pour garder y >= 0 (sol)
mask = y >= 0
x_sol = x[mask]
y_sol = y[mask]

print(f"Portée : {x_sol[-1]:.2f} m")
print(f"Hauteur max : {np.max(y_sol):.2f} m")

# Note : Pour afficher le graphique, il faudrait plt.plot(x_sol, y_sol)`,
                tip: '💡 Astuce : Essayez de changer l\'angle pour trouver l\'angle optimal qui donne la portée maximale (ce n\'est pas 45° avec frottements !).'
            },
            {
                title: 'Projet 2 : Analyse de Données Climatiques',
                duration: '2h',
                analogy: '🌍 Le pouls de la planète',
                content: `**Objectif** : Analyser l'évolution des températures mondiales pour visualiser le réchauffement climatique.

**Outils utilisés** :
- **Pandas** : Manipulation des données (DataFrames)
- **Matplotlib** : Graphiques
- **SciPy** : Régression linéaire (tendance)

**Données** 📊
Nous simulerons des données réalistes, mais dans un vrai projet, vous utiliseriez des fichiers CSV de la NASA ou de la NOAA.`,
                keyPoints: [
                    'Pandas est l\'outil roi pour les données tabulaires (Excel-like)',
                    'Calculer des moyennes mobiles pour lisser les courbes',
                    'Utiliser la régression linéaire pour quantifier la hausse',
                    'Visualiser les anomalies de température'
                ],
                code: `import numpy as np
import pandas as pd
from scipy import stats

# 1. Création de données simulées (1880-2024)
annees = np.arange(1880, 2025)
n = len(annees)

# Tendance + Bruit + Cycle solaire
tendance = 0.01 * (annees - 1880) + 0.00005 * (annees - 1880)**2
bruit = np.random.normal(0, 0.1, n)
cycle = 0.05 * np.sin(2 * np.pi * annees / 11)

temp_anomalie = tendance + bruit + cycle

# Création DataFrame Pandas
df = pd.DataFrame({'Annee': annees, 'Anomalie': temp_anomalie})

# 2. Analyse
# Moyenne mobile sur 5 ans
df['Moyenne_5ans'] = df['Anomalie'].rolling(window=5).mean()

# Régression linéaire (sur les 30 dernières années)
recent = df[df['Annee'] >= 1994]
pente, intercept, r_value, p_value, std_err = stats.linregress(recent['Annee'], recent['Anomalie'])

print(f"Hausse température (30 derniers ans) : {pente*10:.2f}°C par décennie")
print(f"Année la plus chaude : {df.loc[df['Anomalie'].idxmax()]['Annee']}")

# 3. Affichage (conceptuel)
# plt.plot(df['Annee'], df['Anomalie'], label='Annuel')
# plt.plot(df['Annee'], df['Moyenne_5ans'], label='Lissé')`,
                tip: '💡 Astuce : La moyenne mobile (rolling mean) est essentielle pour voir la tendance de fond cachée derrière la variabilité annuelle.'
            },
            {
                title: 'Projet 3 : Modélisation Épidémique (SIR)',
                duration: '2h',
                analogy: '🦠 La mathématique de la contagion',
                content: `**Objectif** : Simuler la propagation d'un virus dans une population.

**Modèle SIR** :
La population est divisée en 3 compartiments :
- **S**usceptible (Sains)
- **I**nfected (Infectés)
- **R**ecovered (Guéris/Immunisés)

**Équations** :
$dS/dt = - \\beta \\cdot S \\cdot I / N$
$dI/dt = \\beta \\cdot S \\cdot I / N - \\gamma \\cdot I$
$dR/dt = \\gamma \\cdot I$

Où $\\beta$ est le taux de transmission et $\\gamma$ le taux de guérison.`,
                keyPoints: [
                    'Le modèle SIR est la base de l\'épidémiologie',
                    'Le R0 (taux de reproduction) = beta / gamma',
                    'Si R0 > 1, l\'épidémie se propage',
                    'L\'immunité collective arrête l\'épidémie quand S est bas'
                ],
                code: `import numpy as np
from scipy.integrate import odeint

# Paramètres
N = 1000000      # Population totale (1 million)
I0 = 1           # 1 patient zéro
R0_init = 0      # 0 immunisés au début
S0 = N - I0 - R0_init

beta = 0.3  # Taux de transmission (contacts infectieux)
gamma = 1./10 # Taux de guérison (10 jours de maladie)

print(f"R0 du virus : {beta/gamma:.2f}")

# Système SIR
def deriv(y, t, N, beta, gamma):
    S, I, R = y
    dSdt = -beta * S * I / N
    dIdt = beta * S * I / N - gamma * I
    dRdt = gamma * I
    return dSdt, dIdt, dRdt

# Simulation sur 160 jours
t = np.linspace(0, 160, 160)
y0 = S0, I0, R0_init

ret = odeint(deriv, y0, t, args=(N, beta, gamma))
S, I, R = ret.T

# Résultats
pic_infectes = max(I)
jour_pic = t[np.argmax(I)]
total_infectes = R[-1]

print(f"Pic de l'épidémie : {int(pic_infectes)} personnes le jour {int(jour_pic)}")
print(f"Total personnes touchées : {int(total_infectes)} ({total_infectes/N*100:.1f}%)")`,
                tip: '💡 Astuce : Essayez de réduire beta (mesures barrières, confinement) pour voir comment cela "aplatit la courbe" !'
            },
            {
                title: 'Projet 4 : Simulation du Système Solaire',
                duration: '2h30',
                analogy: '🪐 La danse des planètes autour du Soleil',
                content: `**Objectif** : Simuler les orbites des planètes en utilisant les lois de Kepler et Newton.

**Physique** 🌌
La force gravitationnelle entre deux corps est :
$F = G \\frac{m_1 m_2}{r^2}$

Nous utiliserons l'intégration numérique pour prédire la position des planètes à chaque instant.`,
                keyPoints: [
                    'Utilisation de la loi de la gravitation universelle',
                    'Intégration numérique avec la méthode de Verlet (plus stable que Euler)',
                    'Visualisation 2D ou 3D des orbites',
                    'Vérification de la 3ème loi de Kepler ($T^2 \\propto a^3$)'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt

# Constantes (unités astronomiques simplifiées)
G = 4 * np.pi**2  # Si distance en UA et temps en années
M_soleil = 1.0

def force_gravite(r):
    x, y = r
    dist = np.sqrt(x**2 + y**2)
    F_mag = G * M_soleil / dist**2
    return -F_mag * (x/dist), -F_mag * (y/dist)

# Simulation Terre (départ à 1 UA, vitesse v = 2*pi UA/an)
r = np.array([1.0, 0.0]) # Position (x, y)
v = np.array([0.0, 2*np.pi]) # Vitesse
dt = 0.001
steps = 1000

positions = []
for _ in range(steps):
    positions.append(r.copy())
    acc = np.array(force_gravite(r))
    v += acc * dt
    r += v * dt

# Affichage
positions = np.array(positions)
plt.plot(positions[:,0], positions[:,1])
plt.plot(0, 0, 'yo', markersize=10, label='Soleil') # Soleil au centre
plt.axis('equal')
plt.title("Orbite Terrestre")
plt.show()`,
                tip: '💡 Astuce : La méthode d\'Euler simple perd de l\'énergie à long terme.Pour les orbites, la méthode "Velocity Verlet" est bien meilleure !'
            },
            {
                title: 'Projet 5 : Circuit RLC et Résonance',
                duration: '2h',
                analogy: '⚡ Le balancier électrique',
                content: `**Objectif** : Analyser la réponse d'un circuit RLC série et visualiser le phénomène de résonance.

L'équation différentielle du circuit :
$L \\frac{d^2q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C}q = E(t)$

C'est l'équivalent électrique d'un système masse-ressort amorti !`,
                keyPoints: [
                    'Résolution d\'équation différentielle du 2nd ordre',
                    'Étude des régimes : pseudo-périodique, critique, apériodique',
                    'Calcul de la fréquence de résonance $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$',
                    'Tracé de la bande passante'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# Paramètres
R = 10    # Ohms
L = 0.1   # Henry
C = 1e-4  # Farad
E0 = 10   # Volts (amplitude générateur)
omega = 1.0 # Pulsation forcée

def circuit_RLC(y, t, R, L, C, E0, omega):
    q, i = y # charge, intensité
    didt = (E0 * np.sin(omega*t) - R*i - q/C) / L
    dqdt = i
    return [dqdt, didt]

t = np.linspace(0, 0.5, 500)
y0 = [0, 0] # q(0)=0, i(0)=0

sol = odeint(circuit_RLC, y0, t, args=(R, L, C, E0, 314)) # 50Hz -> w=314
i_sol = sol[:, 1]

plt.plot(t, i_sol)
plt.title("Courant dans le circuit RLC")
plt.xlabel("Temps (s)")
plt.ylabel("Intensité (A)")
plt.grid()
plt.show()`,
                tip: '💡 Astuce : Changez la valeur de R pour voir comment l\'amortissement affecte les oscillations !'
            },
            {
                title: 'Projet 6 : Optimisation de Portefeuille (Finance)',
                duration: '3h',
                analogy: '💰 Ne pas mettre tous ses œufs dans le même panier',
                content: `**Objectif** : Trouver la meilleure répartition d'investissement entre plusieurs actions pour maximiser le rendement et minimiser le risque.

Nous utiliserons la **Frontière Efficiente de Markowitz**.`,
                keyPoints: [
                    'Récupération de données financières réelles (Yahoo Finance)',
                    'Calcul de la matrice de covariance (Risque)',
                    'Simulation Monte Carlo pour tester des milliers de portefeuilles',
                    'Ratio de Sharpe pour évaluer la performance'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt

# Rendements simulés de 3 actifs (A, B, C)
np.random.seed(42)
returns = np.random.randn(3, 1000) * 0.01 + 0.0005 # Rendements journaliers

simulations = 1000
resultats = np.zeros((3, simulations)) # Rendement, Volatilité, Ratio Sharpe

for i in range(simulations):
    weights = np.random.random(3)
    weights /= np.sum(weights) # Somme = 100%
    
    port_ret = np.sum(weights * np.mean(returns, axis=1)) * 252 # Annuel
    port_vol = np.sqrt(np.dot(weights.T, np.dot(np.cov(returns), weights))) * np.sqrt(252)
    
    resultats[0,i] = port_ret
    resultats[1,i] = port_vol
    resultats[2,i] = port_ret / port_vol # Ratio Sharpe (sans taux sans risque)

plt.scatter(resultats[1,:], resultats[0,:], c=resultats[2,:], cmap='viridis')
plt.colorbar(label='Ratio de Sharpe')
plt.xlabel('Volatilité (Risque)')
plt.ylabel('Rendement Espéré')
plt.title('Frontière Efficiente')
plt.show()`,
                tip: '💡 Astuce : Le portefeuille avec le meilleur Ratio de Sharpe est souvent considéré comme le meilleur compromis risque/rendement.'
            },
            {
                title: 'Projet 7 : Détection de Contours (Traitement d\'Image) ',
                duration: '2h',
                analogy: '👁️ Comment un robot "voit" les formes',
                content: `**Objectif** : Coder un filtre de détection de contours (comme Sobel) à partir de zéro avec NumPy, sans utiliser OpenCV directement pour l'algo.

Une image est juste une matrice de nombres (pixels). Les variations brutales de nombres indiquent un bord.`,
                keyPoints: [
                    'Image = Matrice NumPy',
                    'Convolution 2D',
                    'Filtres de Sobel (Gradient X et Y)',
                    'Calcul de la magnitude du gradient'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import convolve2d

# Création d'une image simple (Carré blanc sur fond noir)
image = np.zeros((100, 100))
image[30:70, 30:70] = 1.0

# Filtres de Sobel
Gx = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])
Gy = np.array([[-1, -2, -1], [0, 0, 0], [1, 2, 1]])

# Convolution
contour_x = convolve2d(image, Gx, mode='same')
contour_y = convolve2d(image, Gy, mode='same')

# Magnitude du gradient (Contours finaux)
contours = np.sqrt(contour_x**2 + contour_y**2)

plt.imshow(contours, cmap='gray')
plt.title("Détection de contours")
plt.show()`,
                tip: '💡 Astuce : La convolution est l\'opération de base des réseaux de neurones convolutionnels(CNN) utilisés en IA pour la vision.'
            },
            {
                title: 'Projet 8 : Calcul de Pi par Monte Carlo',
                duration: '1h30',
                analogy: '🎯 Lancer des fléchettes pour faire des maths',
                content: `**Objectif** : Estimer la valeur de $\\pi$ en utilisant le hasard.

Imaginez un carré de côté 2 (Aire = 4). Dedans, un cercle de rayon 1 (Aire = $\\pi$).
Si on lance des points au hasard :
$\\frac{\\text{Points dans le cercle}}{\\text{Points total}} \\approx \\frac{\\text{Aire Cercle}}{\\text{Aire Carré}} = \\frac{\\pi}{4}$`,
                keyPoints: [
                    'Génération de nombres aléatoires uniformes',
                    'Géométrie simple (distance à l\'origine)',
                    'Loi des grands nombres (la précision augmente avec n)',
                    'Visualisation des impacts'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt

n = 10000
x = np.random.uniform(-1, 1, n)
y = np.random.uniform(-1, 1, n)

distances = np.sqrt(x**2 + y**2)
dans_cercle = distances <= 1

pi_estime = 4 * np.sum(dans_cercle) / n

print(f"Pi estimé : {pi_estime}")
print(f"Erreur : {abs(np.pi - pi_estime):.5f}")

# Visualisation (les 1000 premiers points)
plt.figure(figsize=(6,6))
plt.scatter(x[dans_cercle][:1000], y[dans_cercle][:1000], c='blue', s=1)
plt.scatter(x[~dans_cercle][:1000], y[~dans_cercle][:1000], c='red', s=1)
plt.show()`,
                tip: '💡 Astuce : C\'est une méthode lente pour calculer Pi, mais la méthode Monte Carlo est géniale pour calculer des intégrales complexes en physique !'
            },
            {
                title: 'Projet 9 : Modèle Proie-Prédateur (Lotka-Volterra)',
                duration: '2h',
                analogy: '🐇🦊 Lapins vs Renards : l\'équilibre de la nature',
                content: `**Objectif** : Simuler l'évolution des populations de proies et de prédateurs.

**Équations** :
$dx/dt = \\alpha x - \\beta xy$ (Proies : naissent, mangées)
$dy/dt = \\delta xy - \\gamma y$ (Prédateurs : mangent, meurent)`,
                keyPoints: [
                    'Système d\'équations différentielles couplées',
                    'Oscillations périodiques',
                    'Points d\'équilibre',
                    'Portrait de phase'
                ],
                code: `import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt

def lotka_volterra(y, t, alpha, beta, delta, gamma):
    prey, predator = y
    dprey = alpha * prey - beta * prey * predator
    dpred = delta * prey * predator - gamma * predator
    return [dprey, dpred]

params = (1.1, 0.4, 0.1, 0.4)
y0 = [10, 5] # 10 lapins, 5 renards
t = np.linspace(0, 50, 1000)

res = odeint(lotka_volterra, y0, t, args=params)

plt.plot(t, res[:,0], label='Proies 🐇')
plt.plot(t, res[:,1], label='Prédateurs 🦊')
plt.legend()
plt.title("Dynamique des populations")
plt.show()`,
                tip: '💡 Astuce : Tracez Prédateurs en fonction de Proies (plt.plot(res[:,0], res[:,1])) pour voir les cycles limites elliptiques !'
            },
            {
                title: 'Projet 10 : Chiffrement RSA (Cryptographie)',
                duration: '2h30',
                analogy: '🔐 La clé publique et la clé privée',
                content: `**Objectif** : Implémenter une version simplifiée de l'algorithme RSA qui sécurise Internet.

Repose sur l'arithmétique modulaire et la difficulté de factoriser de grands nombres premiers.`,
                keyPoints: [
                    'Nombres premiers',
                    'PGCD et Algorithme d\'Euclide étendu',
                    'Exponentiation modulaire $c = m^e \\pmod n$',
                    'Théorème d\'Euler'
                ],
                code: `def pgcd(a, b):
    while b:
        a, b = b, a % b
    return a

# 1. Génération de clés (simplifié, utiliser de grands nombres en vrai)
p = 61
q = 53
n = p * q # 3233 (Modulus)
phi = (p-1) * (q-1) # 3120

e = 17 # Exposant public (doit être premier avec phi)
# Calcul de d (Exposant privé) tel que (d*e) % phi == 1
d = pow(e, -1, phi) # En Python 3.8+, pow gère l'inverse modulaire

print(f"Clé Publique (e, n): ({e}, {n})")
print(f"Clé Privée (d, n): ({d}, {n})")

# 2. Chiffrement
message = 123 # Message numérique
chiffre = pow(message, e, n)
print(f"Message chiffré : {chiffre}")

# 3. Déchiffrement
dechiffre = pow(chiffre, d, n)
print(f"Message déchiffré : {dechiffre}")`,
                tip: '💡 Astuce : La sécurité de RSA repose sur le fait qu\'il est très facile de multiplier PxQ, mais très difficile de retrouver P et Q à partir de N si N est géant.'
            },
            {
                title: 'Projet 11 : Séries de Fourier (Traitement du Signal)',
                duration: '2h',
                analogy: '🎶 Décomposer un accord en notes individuelles',
                content: `**Objectif** : Reconstruire n'importe quel signal périodique (comme un signal carré) en additionnant des sinusoïdes.

Tout signal périodique est une somme de sinus et cosinus !`,
                keyPoints: [
                    'Décomposition harmonique',
                    'Calcul des coefficients de Fourier',
                    'Phénomène de Gibbs',
                    'Synthèse de signal'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt

# Fonction carrée (période 2*pi)
t = np.linspace(0, 4*np.pi, 1000)
carre = np.sign(np.sin(t))

# Reconstruction Fourier (Somme des harmoniques impaires)
reconstruction = np.zeros_like(t)
k_max = 10 # Nombre d'harmoniques

for k in range(1, k_max*2, 2): # 1, 3, 5, ...
    bn = 4 / (k * np.pi) # Coefficient pour onde carrée
    reconstruction += bn * np.sin(k * t)

plt.plot(t, carre, 'k--', alpha=0.5, label='Signal Carré')
plt.plot(t, reconstruction, 'r', label=f'Fourier (k={k_max})')
plt.title("Synthèse de Fourier")
plt.legend()
plt.show()`,
                tip: '💡 Astuce : Plus vous ajoutez d\'harmoniques, plus le signal ressemble au carré parfait.Observez les petites oscillations aux coins(Phénomène de Gibbs).'
            },
            {
                title: 'Projet 12 : Équation de la Chaleur 1D',
                duration: '3h',
                analogy: '🔥 Comment la chaleur se propage dans une barre de fer',
                content: `**Objectif** : Résoudre l'équation aux dérivées partielles (EDP) de la chaleur par la méthode des différences finies.

$\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$`,
                keyPoints: [
                    'Discrétisation spatiale et temporelle',
                    'Schéma explicite (Attention à la stabilité !)',
                    'Conditions aux limites',
                    'Visualisation dynamique (Heatmap)'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt

# Paramètres
L = 1.0 # Longueur barre
Nx = 50 # Points espace
dx = L / (Nx - 1)
alpha = 0.01 # Diffusivité thermique
dt = 0.0001 # Pas de temps
Nt = 1000 # Pas de temps total

# Stabilité (Critère CFL)
print(f"CFL: {alpha * dt / dx**2:.4f} (Doit être < 0.5)")

u = np.zeros(Nx)
# Condition initiale : Barre chaude au milieu
u[20:30] = 100.0 

# Boucle temporelle
for n in range(Nt):
    u_new = u.copy()
    for i in range(1, Nx-1):
        u_new[i] = u[i] + alpha * dt / dx**2 * (u[i+1] - 2*u[i] + u[i-1])
    u = u_new

plt.plot(np.linspace(0, L, Nx), u)
plt.title(f"Température après {Nt} itérations")
plt.xlabel("Position")
plt.ylabel("Température")
plt.show()`,
                tip: '💡 Astuce : Si votre simulation "explose" avec des valeurs infinies, réduisez le pas de temps `dt`. C\'est un problème de stabilité numérique.'
            },
            {
                title: 'Projet 13 : L\'Ensemble de Mandelbrot(Fractales)',
                duration: '2h',
                analogy: '🌸 L\'infini mathématique dans une image',
                content: `**Objectif** : Générer et visualiser la plus célèbre des fractales.

Pour chaque point $c$ du plan complexe, on itère $z_{n+1} = z_n^2 + c$ (avec $z_0=0$).
Si la suite reste bornée, le point est dans l'ensemble.`,
                keyPoints: [
                    'Nombres complexes',
                    'Suites divergentes',
                    'Calcul vectoriel (Broadcasting) avec NumPy',
                    'Affichage d\'image haute résolution'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt

def mandelbrot(h, w, max_iter=20):
    y, x = np.ogrid[-1.4:1.4:h*1j, -2:0.8:w*1j]
    c = x + y*1j
    z = c
    divtime = max_iter + np.zeros(z.shape, dtype=int)

    for i in range(max_iter):
        z = z**2 + c
        diverge = z*np.conj(z) > 4
        div_now = diverge & (divtime == max_iter)
        divtime[div_now] = i
        z[diverge] = 2

    return divtime

plt.figure(figsize=(10,10))
plt.imshow(mandelbrot(500, 500), cmap='magma')
plt.axis('off')
plt.show()`,
                tip: '💡 Astuce : NumPy est des centaines de fois plus rapide qu\'une boucle for pixel par pixel pour ce genre de calcul!'
            },
            {
                title: 'Projet 14 : Effet Magnus (La Physique du Ballon Brossé)',
                duration: '2h30',
                analogy: '🍌 Le "Banana Shot" de Roberto Carlos',
                content: `**Objectif** : Simuler la trajectoire d'un ballon en rotation (spin).

La force de Magnus dévie le ballon perpendiculairement à sa vitesse et son axe de rotation.
$F_M = S (\\omega \\times v)$`,
                keyPoints: [
                    'Produit vectoriel en 3D',
                    'Forces aérodynamiques avancées',
                    'Simulation 3D',
                    'Impact du spin sur la trajectoire'
                ],
                code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

# Paramètres
m = 0.43 # kg
r = 0.11 # m
A = np.pi * r**2
rho = 1.2
Cd = 0.3 # Traînée
Cl = 0.3 # Portance (Magnus)

# État initial : x, y, z, vx, vy, vz
y0 = [0, 0, 0, 30, 0, 0] # Tir puissant vers X
omega = np.array([0, 0, 50]) # Rotation autour de Z (Top spin)

def tir_brosse(state, t):
    x, y, z, vx, vy, vz = state
    v = np.array([vx, vy, vz])
    v_norm = np.linalg.norm(v)
    
    # Forces
    F_drag = -0.5 * rho * A * Cd * v_norm * v
    F_magnus = 0.5 * rho * A * Cl * np.cross(omega, v) # Produit vectoriel
    F_grav = np.array([0, -9.81 * m, 0])
    
    a = (F_drag + F_magnus + F_grav) / m
    
    return [vx, vy, vz, a[0], a[1], a[2]]

t = np.linspace(0, 3, 100)
sol = odeint(tir_brosse, y0, t)

# Vue de dessus (X vs Z) pour voir la déviation latérale !
plt.plot(sol[:,0], sol[:,2])
plt.title("Vue de dessus (Déviation latérale due au spin)")
plt.xlabel("Distance (X)")
plt.ylabel("Déviation (Z)")
plt.grid()
plt.show()`,
                tip: '💡 Astuce : C\'est cet effet qui fait "tourner" les balles de tennis(lift) ou les ballons de foot(coups francs brossés).'
            },
            {
                title: 'Projet 15 : Classification des Iris (Intro Machine Learning)',
                duration: '2h',
                analogy: '🌸 Apprendre à l\'ordinateur à reconnaître des fleurs',
                content: `**Objectif** : Créer un modèle simple capable de reconnaître l'espèce d'une fleur Iris à partir de la taille de ses pétales.

Nous utiliserons l'algorithme **K-Nearest Neighbors (KNN)**, intuitif et puissant.`,
                keyPoints: [
                    'Dataset célèbre "Iris"',
                    'Visualisation des données (Scatter plot)',
                    'Algorithme KNN (Voisins les plus proches)',
                    'Matrice de confusion'
                ],
                code: `import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split

# 1. Charger les données
iris = datasets.load_iris()
X = iris.data[:, :2]  # On garde que 2 caractéristiques pour visualiser (Longueur/Largeur Sépale)
y = iris.target

# 2. Entraîner le modèle
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X, y)

# 3. Prédiction d'une nouvelle fleur
nouvelle_fleur = [[5.0, 3.5]]
prediction = knn.predict(nouvelle_fleur)
nom_espece = iris.target_names[prediction[0]]

print(f"La nouvelle fleur est probablement un : {nom_espece}")

# 4. Visualisation
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis', edgecolor='k')
plt.scatter(nouvelle_fleur[0][0], nouvelle_fleur[0][1], c='red', s=100, marker='x', label='Nouvelle fleur')
plt.xlabel('Longueur Sépale')
plt.ylabel('Largeur Sépale')
plt.legend()
plt.title("Classification des Iris")
plt.show()`,
                tip: '💡 Astuce : Scikit-Learn (sklearn) est la bibliothèque standard pour le Machine Learning classique en Python.'
            }
        ]
    },
];

export default pythonCurriculum;
