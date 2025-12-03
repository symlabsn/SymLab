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
                lessons: [
                    {
                        title: 'Variables et types de données',
                        duration: '40 min',
                        analogy: '📦 Une variable est comme une boîte étiquetée où vous rangez des choses',
                        content: `Comprendre les variables

Imaginez votre chambre avec des boîtes :
- Boîte "chaussures" → contient vos chaussures
- Boîte "livres" → contient vos livres
- Boîte "jouets" → contient vos jouets

En Python :
- Variable "masse" → contient 5.0
- Variable "vitesse" → contient 10.0
- Variable "nom" → contient "Einstein"

La magie de Python : Vous n'avez PAS besoin de dire "cette boîte contiendra des chaussures". Python devine automatiquement !

Types de données (types de boîtes) :

1. int (entier) → Boîte pour nombres entiers
   - Exemples : 1, 42, -17, 1000

2. float (décimal) → Boîte pour nombres à virgule
   - Exemples : 3.14, -0.5, 2.71828

3. str (string/chaîne) → Boîte pour du texte
   - Exemples : "Bonjour", "Python", "E=mc²"

4. bool (booléen) → Boîte pour Vrai/Faux
   - Exemples : True, False

Règles de nommage :
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
                        title: 'Opérateurs arithmétiques',
                        duration: '45 min',
                        analogy: '🧮 Les opérateurs sont les boutons de votre calculatrice',
                        content: `Python = Super Calculatrice

Votre calculatrice a des boutons :
- + pour additionner
- - pour soustraire
- × pour multiplier
- ÷ pour diviser

Python a les mêmes, et bien plus !

Les opérateurs de base :

1. Addition (+) → Comme vous l'imaginez
   - 5 + 3 = 8

2. Soustraction (-) → Pareil
   - 10 - 4 = 6

3. Multiplication (*) → Attention : * pas ×
   - 3 * 4 = 12

4. Division (/) → Toujours un résultat décimal
   - 10 / 3 = 3.333...

5. Division entière (//) → Juste la partie entière
   - 10 // 3 = 3 (ignore le reste)

6. Modulo (%) → Le reste de la division
   - 10 % 3 = 1 (car 10 = 3×3 + 1)

7. Puissance (**) → Élever à la puissance
   - 2**3 = 8 (2 au cube)

Ordre des opérations (PEMDAS) :
Comme en maths : Parenthèses → Exposants → Multiplication/Division → Addition/Soustraction`,
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
                        title: 'Structures de contrôle : if/elif/else',
                        duration: '50 min',
                        analogy: '🚦 Les conditions sont comme un feu tricolore : si vert → avancer',
                        content: `Apprendre à Python à décider

Analogie de la vie réelle :
- SI il pleut → prendre un parapluie
- SINON SI il fait froid → prendre un manteau
- SINON → sortir normalement

En Python, c'est pareil !

Opérateurs de comparaison :
- == (égal à) → Attention : 2 signes =
- != (différent de)
- > (plus grand que)
- < (plus petit que)
- >= (plus grand ou égal)
- <= (plus petit ou égal)

Opérateurs logiques :
- and (et) → Les deux doivent être vrais
- or (ou) → Au moins un doit être vrai
- not (non) → Inverse le résultat`,
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
    print("❌ Vitesse ou masse invalide !")`,
                        tip: '⚠️ L\'indentation (4 espaces) est OBLIGATOIRE en Python !'
                    },
                    {
                        title: 'Boucles for et while',
                        duration: '60 min',
                        analogy: '🔁 Une boucle, c\'est comme dire "fais ça 100 fois" au lieu de l\'écrire 100 fois',
                        content: `Le pouvoir de la répétition

Imaginez que vous devez :
- Compter de 1 à 100
- Calculer 1², 2², 3², ..., 100²

Sans boucle : Vous écrivez 100 lignes de code 😰
Avec boucle : 3 lignes suffisent ! 🎉

Deux types de boucles :

1. Boucle FOR → "Pour chaque élément, fais..."
   - Quand vous savez combien de fois répéter
   - Comme compter de 1 à 10

2. Boucle WHILE → "Tant que condition vraie, fais..."
   - Quand vous ne savez pas combien de fois
   - Comme "tant que l'eau n'est pas à 100°C, chauffe"

range() : Le compteur magique
- range(5) → 0, 1, 2, 3, 4 (5 nombres)
- range(1, 6) → 1, 2, 3, 4, 5
- range(0, 10, 2) → 0, 2, 4, 6, 8 (de 2 en 2)`,
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

print(f"\\n√2 ≈ {x:.6f} (valeur exacte: 1.414214)")`,
                        tip: '🔄 break = sortir de la boucle, continue = passer à l\'itération suivante'
                    },
                    {
                        title: 'Fonctions : Réutiliser votre code',
                        duration: '50 min',
                        analogy: '🎯 Une fonction est comme une recette : vous la définissez une fois, vous l\'utilisez partout',
                        content: `Créer vos propres outils

Imaginez que vous cuisinez souvent des crêpes. Au lieu de réécrire la recette à chaque fois, vous la notez une fois et vous la réutilisez !

En Python, c'est pareil avec les fonctions.

Anatomie d'une fonction :

def nom_fonction(parametre1, parametre2):
    # Code de la fonction
    resultat = parametre1 + parametre2
    return resultat

Avantages :
- Réutilisabilité : Écrivez une fois, utilisez partout
- Lisibilité : Code organisé et clair
- Maintenance : Modifier à un seul endroit
- Testabilité : Facile à vérifier`,
                        keyPoints: [
                            'def pour définir une fonction',
                            'return pour renvoyer un résultat',
                            'Paramètres = entrées de la fonction',
                            'Docstring pour documenter'
                        ],
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
print(f"Chute (t=2s): {chute_libre(2):.2f} m")

# Fonction retournant plusieurs valeurs
def statistiques(nombres):
    """Calcule moyenne, min et max."""
    moyenne = sum(nombres) / len(nombres)
    minimum = min(nombres)
    maximum = max(nombres)
    return moyenne, minimum, maximum

# Utilisation
donnees = [10, 20, 15, 25, 30]
moy, mini, maxi = statistiques(donnees)
print(f"\\nStatistiques de {donnees}:")
print(f"Moyenne: {moy}, Min: {mini}, Max: {maxi}")`,
                        lessons: [
                            {
                                title: 'Listes : Collections ordonnées',
                                duration: '50 min',
                                analogy: '📋 Une liste est comme un carnet où vous notez des mesures dans l\'ordre',
                                content: `Maîtriser les listes

Une liste est une collection ordonnée d'éléments. Imaginez un carnet de laboratoire où vous notez vos mesures dans l'ordre.

Caractéristiques :
- Ordonnée : Les éléments ont un ordre
- Modifiable : Vous pouvez ajouter/supprimer
- Indexée : Accès par position (0, 1, 2...)
- Hétérogène : Peut contenir différents types

Opérations essentielles :
- Accès : liste[0] (premier élément)
- Ajout : liste.append(element)
- Suppression : liste.remove(element)
- Slicing : liste[1:3] (éléments 1 et 2)`,
                                keyPoints: [
                                    'Créer : ma_liste = [1, 2, 3]',
                                    'Index commence à 0',
                                    'Index négatif : -1 = dernier élément',
                                    'List comprehension pour créer rapidement'
                                ],
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
print(f"Fahrenheit: {fahrenheit}")

# Opérations scientifiques
mesures = [1.2, 1.5, 1.3, 1.4, 1.6]
# Calculer l'écart à la moyenne
moy = sum(mesures) / len(mesures)
ecarts = [abs(m - moy) for m in mesures]
print(f"\\nÉcarts à la moyenne: {ecarts}")`,
                                tip: '⚡ Les list comprehensions sont plus rapides que les boucles for !'
                            },
                            {
                                title: 'Dictionnaires : Données structurées',
                                duration: '55 min',
                                analogy: '📖 Un dictionnaire est comme un annuaire : chercher par nom (clé) pour trouver le numéro (valeur)',
                                content: `Organiser vos données scientifiques

Un dictionnaire stocke des paires clé-valeur. Parfait pour les données scientifiques structurées !

Analogie : C'est comme un annuaire téléphonique :
- Clé = Nom de la personne
- Valeur = Numéro de téléphone

En science :
- Clé = Nom de la constante
- Valeur = Valeur numérique

Avantages :
- Accès rapide par clé
- Structure claire
- Données hétérogènes
- Facile à modifier`,
                                keyPoints: [
                                    'Créer : mon_dict = {"cle": valeur}',
                                    'Accès : mon_dict["cle"]',
                                    'Ajout : mon_dict["nouvelle_cle"] = valeur',
                                    'Vérifier : "cle" in mon_dict'
                                ],
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

print(f"Moyenne: {sum(experience['mesures'])/len(experience['mesures'])}")

# Parcourir un dictionnaire
print("\\nConstantes physiques:")
for nom, valeur in constantes.items():
    print(f"  {nom} = {valeur}")

# Dictionnaire de résultats
resultats = {}
for i in range(1, 6):
    resultats[f"experience_{i}"] = i**2

print(f"\\nRésultats: {resultats}")`,
                                tip: '🔑 Utilisez des clés descriptives : "temperature_eau" pas "t1" !'
                            },
                            {
                                title: 'Tuples et ensembles',
                                duration: '40 min',
                                analogy: '🔒 Tuple = liste verrouillée, Ensemble = collection d\'éléments uniques',
                                content: `Autres structures utiles

Tuples (immutables) :
- Comme une liste, mais non modifiable
- Utilisé pour des données fixes
- Plus rapide qu'une liste
- Exemple : coordonnées (x, y, z)

Ensembles (sets) :
- Collection d'éléments uniques
- Pas d'ordre
- Opérations mathématiques (union, intersection)
- Exemple : éléments chimiques détectés

Quand utiliser quoi ?
- Liste : Données modifiables, ordre important
- Tuple : Données fixes, coordonnées
- Ensemble : Éléments uniques, opérations ensemblistes
- Dictionnaire : Données structurées clé-valeur`,
                                keyPoints: [
                                    'Tuple : mon_tuple = (1, 2, 3)',
                                    'Ensemble : mon_set = {1, 2, 3}',
                                    'Tuples = immutables (non modifiables)',
                                    'Ensembles = éléments uniques'
                                ],
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
print(f"Union: {groupe_a | groupe_b}")
print(f"Différence: {groupe_a - groupe_b}")

# Tuple pour retourner plusieurs valeurs
def position_vitesse(t):
    """Retourne position et vitesse à l'instant t"""
    s = t**2
    v = 2*t
    return (s, v)  # Tuple

s, v = position_vitesse(5)
print(f"\\nÀ t=5s: position={s}m, vitesse={v}m/s")`,
                                tip: '💡 Utilisez des tuples pour des données qui ne doivent pas changer !'
                            }
                        ]
                    },
                ]
            },
            {
                id: 'data-files',
                title: '2. Structures de Données et Fichiers',
                icon: '📂',
                color: '#FF9F1C',
                description: 'Gérer les données, les fichiers et les erreurs',
                duration: '3 heures',
                lessons: [
                    {
                    title: 'Gestion des erreurs (Exceptions)',
                    duration: '45 min',
                    analogy: '🛡️ try/except est comme un filet de sécurité pour votre programme',
                    content: `Éviter que le programme ne plante

Les erreurs arrivent (division par zéro, fichier introuvable...).
Au lieu de planter, on les "attrape" et on les gère !

Structure :
try:
    # Code risqué
except TypeErreur:
    # Plan B en cas d'erreur
finally:
    # Code exécuté dans tous les cas

Analogie :
- Sans try/except : Vous marchez sur une peau de banane et vous finissez à l'hôpital (Crash)
- Avec try/except : Vous glissez, vous vous rattrapez, et vous continuez à marcher (Gestion)`,
                    keyPoints: [
                        'try : bloc de code à surveiller',
                        'except : bloc exécuté si erreur',
                        'Ne jamais laisser un except vide !',
                        'raise : pour lever une erreur volontairement'
                    ],
                    code: `def calculer_vitesse(distance, temps):
    """Calcule la vitesse en gérant les erreurs."""
    try:
        if temps < 0:
            raise ValueError("Le temps ne peut pas être négatif !")
            
        vitesse = distance / temps
        return vitesse
        
    except ZeroDivisionError:
        print("⚠️ Erreur : Division par zéro ! Le temps ne peut pas être nul.")
        return None
        
    except TypeError:
        print("⚠️ Erreur : Les valeurs doivent être des nombres.")
        return None
        
    except ValueError as e:
        print(f"⚠️ Erreur de valeur : {e}")
        return None

# Tests
print("Test 1 (Normal):", calculer_vitesse(100, 10))
print("Test 2 (Zéro):", calculer_vitesse(100, 0))
print("Test 3 (Texte):", calculer_vitesse(100, "dix"))
print("Test 4 (Négatif):", calculer_vitesse(100, -5))`,
                    tip: '🛡️ Mieux vaut prévenir que guérir : gérez les cas limites !'
                                    },
            {
            title: 'Fichiers et Modules',
            duration: '60 min',
            analogy: '📂 Les fichiers sont la mémoire à long terme, les modules sont des boîtes à outils',
            content: `Sauvegarder et organiser

1. Fichiers :
   - Lire des données (open 'r')
   - Écrire des résultats (open 'w')
   - Utiliser 'with' pour fermer automatiquement

2. Modules :
   - Diviser son code en plusieurs fichiers
   - import mon_module
   - Créer ses propres bibliothèques

Analogie :
- RAM = Mémoire à court terme (oubliée quand on éteint)
- Fichier = Disque dur (mémoire à long terme)
- Module = Livre de recettes rangé dans la bibliothèque`,
            keyPoints: [
                'with open(...) as f : la bonne façon d\'ouvrir',
                'read(), write(), readlines()',
                'import pour charger un module',
                'if __name__ == "__main__": pour tester'
            ],
            code: `# Écriture dans un fichier
donnees = [
    "Temps,Temperature\\n",
    "0,20.5\\n",
    "10,21.0\\n",
    "20,21.5\\n"
]

print("💾 Écriture des données...")
with open('experience.csv', 'w', encoding='utf-8') as f:
    f.writelines(donnees)

# Lecture du fichier
print("📖 Lecture des données...")
valeurs = []
with open('experience.csv', 'r', encoding='utf-8') as f:
    next(f)  # Sauter l'en-tête
    for ligne in f:
        t, temp = ligne.strip().split(',')
        valeurs.append((float(t), float(temp)))

print(f"Données lues : {valeurs}")

# Création d'un module (simulation)
# Imaginez que ce code est dans 'physique.py'
def energie_potentielle(m, h, g=9.81):
    return m * g * h

# Dans 'main.py'
# import physique
# E = physique.energie_potentielle(10, 5)
print(f"\\nÉnergie potentielle (simulée) : {energie_potentielle(10, 5)} J")`,
            tip: '📂 Utilisez toujours "with open" pour éviter les fichiers corrompus !'
                                    }

]
    },
{
    id: 'poo',
        title: '3. Programmation Orientée Objet',
            icon: '🏭',
                color: '#F72585',
                    description: 'Créez vos propres types de données',
                        duration: '2 heures',
                            lessons: [
                                {
                                title: 'Programmation Orientée Objet (POO)',
                                duration: '90 min',
                                analogy: '🏭 Une Classe est un moule, un Objet est la pièce créée avec ce moule',
                                content: `Organiser son code comme un pro

La POO permet de créer ses propres types de données.

Concepts clés :
- Classe : Le plan de construction (ex: Plan d'une voiture)
- Objet : L'instance concrète (ex: La voiture rouge dans votre garage)
- Attributs : Les caractéristiques (couleur, vitesse)
- Méthodes : Les actions (accélérer, freiner)

Analogie :
- Classe "Atome" : Définit qu'un atome a des protons et des électrons
- Objet "Hydrogène" : Un atome spécifique avec 1 proton
- Objet "Carbone" : Un atome spécifique avec 6 protons`,
                                keyPoints: [
                                    'class NomClasse: pour définir',
                                    '__init__ : le constructeur',
                                    'self : référence à l\'objet lui-même',
                                    'Encapsulation et héritage'
                                ],
                                code: `class Atome:
    """Classe représentant un atome."""
    
    def __init__(self, symbole, protons, neutrons):
        self.symbole = symbole    # Attribut
        self.protons = protons
        self.neutrons = neutrons
        self.electrons = protons  # Atome neutre
        
    def masse_atomique(self):
        """Méthode calculant la masse approximative."""
        return self.protons + self.neutrons
        
    def est_isotope(self, autre_atome):
        """Vérifie si deux atomes sont des isotopes."""
        return (self.protons == autre_atome.protons and 
                self.neutrons != autre_atome.neutrons)
    
    def __str__(self):
        return f"{self.symbole} (Z={self.protons}, A={self.masse_atomique()})"

# Création d'objets
hydrogene = Atome("H", 1, 0)
deuterium = Atome("H", 1, 1)
carbone = Atome("C", 6, 6)

print(f"Atome 1: {hydrogene}")
print(f"Atome 2: {deuterium}")
print(f"Atome 3: {carbone}")

# Utilisation des méthodes
print(f"Masse H: {hydrogene.masse_atomique()}")
print(f"H et D sont isotopes ? {hydrogene.est_isotope(deuterium)}")
print(f"H et C sont isotopes ? {hydrogene.est_isotope(carbone)}")`,
                                tip: '🏭 Utilisez la POO pour modéliser des objets physiques complexes !'
                                    },

        ]
    },
{
    id: 'numerical-python',
        title: '4. Python Numérique',
            icon: '🔢',
                color: '#4361EE',
                    description: 'NumPy, Matplotlib et Pandas pour la Data Science',
                        duration: '4 heures',
                            lessons: [
                                {
                                title: 'NumPy : Calcul numérique ultra-rapide',
                                duration: '75 min',
                                analogy: '⚡ NumPy est comme une calculatrice qui fait 1 million de calculs en 1 seconde',
                                content: `La puissance du calcul vectorisé

NumPy (Numerical Python) est LA bibliothèque pour le calcul numérique.

Pourquoi NumPy ?
- Vitesse : 100x plus rapide que les listes Python
- Arrays multidimensionnels
- Fonctions mathématiques optimisées
- Base de tout l'écosystème scientifique

Analogie : Si les listes Python sont une calculatrice de poche, NumPy est un supercalculateur !

Concepts clés :
- Array : Tableau de nombres (1D, 2D, 3D...)
- Vectorisation : Opérations sur tous les éléments à la fois
- Broadcasting : Opérations entre arrays de tailles différentes`,
                                keyPoints: [
                                    'import numpy as np (convention)',
                                    'np.array() pour créer un array',
                                    'Opérations vectorisées = RAPIDES',
                                    'Base de NumPy, SciPy, Pandas, etc.'
                                ],
                                code: `import numpy as np

# Créer des arrays
vecteur = np.array([1, 2, 3, 4, 5])
matrice = np.array([[1, 2], [3, 4]])

print(f"Vecteur: {vecteur}")
print(f"Matrice:\\n{matrice}")

# Opérations vectorisées (RAPIDES!)
x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)
print(f"\\nCalculé sin() sur 100 points instantanément!")

# Statistiques
donnees = np.random.normal(100, 15, 1000)
print(f"\\nStatistiques sur 1000 points:")
print(f"Moyenne: {np.mean(donnees):.2f}")
print(f"Écart-type: {np.std(donnees):.2f}")
print(f"Min: {np.min(donnees):.2f}")
print(f"Max: {np.max(donnees):.2f}")

# Algèbre linéaire
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
produit = A @ B  # Produit matriciel
print(f"\\nA × B =\\n{produit}")

# Comparaison vitesse
import time
# Liste Python
start = time.time()
liste = [i**2 for i in range(1000000)]
temps_liste = time.time() - start

# NumPy
start = time.time()
array = np.arange(1000000)**2
temps_numpy = time.time() - start

print(f"\\nVitesse (1M opérations):")
print(f"Liste Python: {temps_liste:.4f}s")
print(f"NumPy: {temps_numpy:.4f}s")
print(f"NumPy est {temps_liste/temps_numpy:.0f}x plus rapide!")`,
                                tip: '🚀 Utilisez TOUJOURS NumPy pour les calculs numériques intensifs !'
                            },
{
    {
    title: 'Matplotlib : Visualisation de données',
        duration: '70 min',
            analogy: '🎨 Matplotlib est votre atelier d\'artiste pour créer des graphiques scientifiques',
                content: `Créer des graphiques de qualité publication

Matplotlib permet de créer tous types de graphiques scientifiques.

Types de graphiques :
- Courbes (plot)
- Nuages de points (scatter)
- Histogrammes (hist)
- Barres (bar)
- Surfaces 3D
- Et bien plus !

Anatomie d'un graphique :
- Figure : La toile
- Axes : Le système de coordonnées
- Plot : Les données tracées
- Labels : Titres et légendes

Analogie : C'est comme peindre un tableau, mais avec des données !`,
                    keyPoints: [
                        'import matplotlib.pyplot as plt',
                        'plt.plot() pour tracer',
                        'plt.show() pour afficher',
                        'Personnalisation complète possible'
                    ],
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
ax2.hist(data, bins=30, alpha=0.7, color='green', edgecolor='black')
ax2.set_xlabel('Valeur')
ax2.set_ylabel('Fréquence')
ax2.set_title('Distribution normale')
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Graphique scientifique complet
fig, ax = plt.subplots(figsize=(10, 6))

# Données expérimentales avec barres d'erreur
x_exp = np.array([1, 2, 3, 4, 5])
y_exp = np.array([2.1, 3.9, 6.2, 7.8, 10.1])
y_err = np.array([0.2, 0.3, 0.2, 0.4, 0.3])

ax.errorbar(x_exp, y_exp, yerr=y_err, fmt='o', 
            label='Données expérimentales', capsize=5)

# Modèle théorique
x_theo = np.linspace(0, 6, 100)
y_theo = 2*x_theo
ax.plot(x_theo, y_theo, 'r-', label='Modèle: y=2x')

ax.set_xlabel('Variable indépendante', fontsize=12)
ax.set_ylabel('Variable dépendante', fontsize=12)
ax.set_title('Comparaison Expérience vs Théorie', fontsize=14)
ax.legend()
ax.grid(True, alpha=0.3)
plt.show()`,
                            tip: '📊 Utilisez plt.savefig("graph.png", dpi=300) pour sauvegarder en haute qualité !'
},
{
    {
    title: 'Pandas : Analyse de données tabulaires',
        duration: '75 min',
            analogy: '📊 Pandas est comme Excel, mais en 100x plus puissant',
                content: `Manipuler des données comme un pro

Pandas facilite la manipulation et l'analyse de données tabulaires.

Structures principales :
- Series : Colonne de données (1D)
- DataFrame : Tableau de données (2D)

Analogie : Un DataFrame est comme une feuille Excel, mais avec des super-pouvoirs !

Opérations courantes :
- Lecture/écriture de fichiers (CSV, Excel, etc.)
- Filtrage et sélection
- Groupement et agrégation
- Statistiques descriptives
- Fusion de données`,
                    keyPoints: [
                        'import pandas as pd',
                        'DataFrame = tableau de données',
                        'Lecture facile de CSV/Excel',
                        'Analyse statistique intégrée'
                    ],
                        code: `import pandas as pd
import numpy as np

# Créer un DataFrame (tableau de données)
experiences = pd.DataFrame({
    'temperature': [20, 25, 30, 35, 40],
    'pression': [101, 102, 103, 104, 105],
    'volume': [22.4, 23.1, 23.8, 24.5, 25.2]
})

print("=== DONNÉES ===")
print(experiences)

# Statistiques descriptives
print("\\n=== STATISTIQUES ===")
print(experiences.describe())

# Calculs sur colonnes
experiences['PV'] = experiences['pression'] * experiences['volume']
print("\\n=== AVEC PV ===")
print(experiences)

# Filtrage
haute_temp = experiences[experiences['temperature'] > 30]
print(f"\\n=== HAUTE TEMPÉRATURE ===")
print(haute_temp)

# Groupement et agrégation
# Créer plus de données
donnees = pd.DataFrame({
    'experience': ['A', 'A', 'B', 'B', 'C', 'C'],
    'mesure': [10.2, 10.5, 15.3, 15.1, 20.4, 20.6],
    'erreur': [0.1, 0.2, 0.15, 0.1, 0.2, 0.15]
})

moyennes = donnees.groupby('experience')['mesure'].mean()
print("\\n=== MOYENNES PAR EXPÉRIENCE ===")
print(moyennes)

# Lecture/écriture de fichiers
# experiences.to_csv('resultats.csv', index=False)
# df = pd.read_csv('resultats.csv')

# Analyse de séries temporelles
dates = pd.date_range('2024-01-01', periods=10, freq='D')
serie_temp = pd.Series(
    np.random.normal(20, 2, 10),
    index=dates,
    name='Temperature'
)

print("\\n=== SÉRIE TEMPORELLE ===")
print(serie_temp)
print(f"\\nMoyenne: {serie_temp.mean():.2f}°C")
print(f"Max: {serie_temp.max():.2f}°C")`,
                            isHighlight: true,
                                lessons: [

                                ]
},
{
    id: 'sympy',
        title: '5. Calcul Symbolique (SymPy)',
            icon: '∫',
                color: '#FFD166',
                    description: 'Mathématiques exactes avec Python',
                        duration: '5 heures',
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
},

        ]
    },
{
    id: 'scipy',
        title: '6. Calcul Scientifique Avancé',
            icon: '🧪',
                color: '#06D6A0',
                    description: 'Algorithmes scientifiques avec SciPy',
                        duration: '2 heures',
                            lessons: [
                                {
                                title: 'SciPy : Algorithmes scientifiques avancés',
                                duration: '80 min',
                                analogy: '🧪 SciPy est votre boîte à outils de laboratoire numérique',
                                content: `Algorithmes scientifiques prêts à l'emploi

SciPy étend NumPy avec des algorithmes scientifiques avancés.

Modules principaux :
- scipy.integrate : Intégration numérique
- scipy.optimize : Optimisation et recherche de racines
- scipy.stats : Statistiques et probabilités
- scipy.linalg : Algèbre linéaire avancée
- scipy.signal : Traitement du signal
- scipy.interpolate : Interpolation

Analogie : Si NumPy est votre calculatrice, SciPy est votre laboratoire complet !`,
                                keyPoints: [
                                    'from scipy import module',
                                    'Intégration numérique avec integrate',
                                    'Optimisation avec optimize',
                                    'Statistiques avec stats'
                                ],
                                code: `from scipy import integrate, optimize, stats
import numpy as np

print("=== 1. INTÉGRATION NUMÉRIQUE ===")
# Intégrer une fonction
def f(x):
    return np.exp(-x**2)

resultat, erreur = integrate.quad(f, 0, np.inf)
print(f"∫₀^∞ e^(-x²) dx = {resultat:.6f}")
print(f"Erreur estimée: {erreur:.2e}")

print("\\n=== 2. OPTIMISATION ===")
# Trouver le minimum d'une fonction
def energie(x):
    return x**4 - 3*x**2 + 2

minimum = optimize.minimize(energie, x0=0)
print(f"Minimum de E(x) = x⁴ - 3x² + 2")
print(f"Position: x = {minimum.x[0]:.4f}")
print(f"Valeur: E(x) = {minimum.fun:.4f}")

# Trouver les racines
racines = optimize.fsolve(energie, [0, 1, 2])
print(f"Racines: {racines}")

print("\\n=== 3. STATISTIQUES ===")
# Générer des données
echantillon = np.random.normal(100, 15, 50)

# Intervalle de confiance
moyenne, intervalle = stats.t.interval(
    0.95, len(echantillon)-1,
    loc=np.mean(echantillon),
    scale=stats.sem(echantillon)
)

print(f"Moyenne: {np.mean(echantillon):.2f}")
print(f"IC 95%: [{intervalle[0]:.2f}, {intervalle[1]:.2f}]")

# Test statistique
t_stat, p_value = stats.ttest_1samp(echantillon, 100)
print(f"Test t: t={t_stat:.3f}, p={p_value:.3f}")

print("\\n=== 4. AJUSTEMENT DE COURBE ===")
# Données expérimentales
x_data = np.array([0, 1, 2, 3, 4, 5])
y_data = np.array([1.1, 2.9, 5.2, 7.1, 8.9, 11.2])

# Modèle linéaire: y = ax + b
def modele(x, a, b):
    return a*x + b

params, covariance = optimize.curve_fit(modele, x_data, y_data)
a, b = params
print(f"Ajustement: y = {a:.2f}x + {b:.2f}")`,
                                tip: '🔬 SciPy est essentiel pour l\'analyse de données expérimentales !'
                            },
{

        ]
},
id: 'projects',
    title: '7. Projets Scientifiques Complets',
        icon: '🏆',
            color: '#4CC9F0',
                description: 'Mettez tout en pratique avec des projets réels',
                    duration: '10 heures',
                        lessons: [
                            {
                                title: 'Projet 1 : Trajectoire d\'un projectile',
                                duration: '2 heures',
                                analogy: '🎯 Simulez le tir d\'un canon avec prise en compte du vent',
                                content: `Simulation physique complète

Objectif : Modéliser la trajectoire d'un projectile.

Ce que nous allons utiliser :
- NumPy pour les calculs vectoriels
- Matplotlib pour l'animation
- Physique : Équations du mouvement
- Mathématiques : Résolution numérique

Étapes :
1. Définir les conditions initiales (vitesse, angle)
2. Appliquer les lois de Newton (gravité, frottement)
3. Calculer la position pas à pas (méthode d'Euler)
4. Visualiser la trajectoire`,
                                keyPoints: [
                                    'Modélisation physique',
                                    'Discrétisation du temps',
                                    'Boucle de simulation',
                                    'Visualisation graphique'
                                ],
                                code: `import numpy as np
import matplotlib.pyplot as plt

def simulation_tir(v0, angle_deg, dt=0.01):
    """Simule un tir de projectile."""
    # Conversion angle
    angle_rad = np.radians(angle_deg)
    
    # Conditions initiales
    x, y = 0, 0
    vx = v0 * np.cos(angle_rad)
    vy = v0 * np.sin(angle_rad)
    
    # Constantes
    g = 9.81
    
    # Listes pour stocker la trajectoire
    traj_x = [x]
    traj_y = [y]
    
    # Boucle temporelle
    while y >= 0:
        # Mise à jour position
        x += vx * dt
        y += vy * dt
        
        # Mise à jour vitesse (gravité)
        vy -= g * dt
        
        traj_x.append(x)
        traj_y.append(y)
        
    return traj_x, traj_y

# Lancer la simulation
v0 = 50  # m/s
angles = [30, 45, 60]

plt.figure(figsize=(10, 6))

for angle in angles:
    x, y = simulation_tir(v0, angle)
    plt.plot(x, y, label=f'{angle}°')

plt.title(f"Trajectoires de projectiles (v0={v0} m/s)")
plt.xlabel("Distance (m)")
plt.ylabel("Hauteur (m)")
plt.legend()
plt.grid(True, alpha=0.3)
plt.axis('equal')
plt.show()`,
                                tip: '🚀 Essayez d\'ajouter le frottement de l\'air (F = -kv) !'
                            },
                            {
                                title: 'Projet 2 : Analyse de données climatiques',
                                duration: '2.5 heures',
                                analogy: '🌍 Analysez le réchauffement climatique avec de vraies données',
                                content: `Data Science appliquée

Objectif : Analyser l'évolution des températures mondiales.

Ce que nous allons utiliser :
- Pandas pour charger et nettoyer les données
- Matplotlib/Seaborn pour la visualisation
- SciPy pour la régression linéaire (tendance)

Étapes :
1. Charger un dataset CSV
2. Nettoyer les données (valeurs manquantes)
3. Calculer les moyennes annuelles
4. Tracer la courbe et la tendance`,
                                keyPoints: [
                                    'Nettoyage de données (Data Cleaning)',
                                    'Analyse de séries temporelles',
                                    'Régression linéaire',
                                    'Visualisation impactante'
                                ],
                                code: `import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Création de données simulées (pour l'exemple)
np.random.seed(42)
annees = np.arange(1900, 2024)
n = len(annees)
# Tendance linéaire + bruit + cycle
temp_base = 14.0 + (annees - 1900) * 0.01  # +1°C en 100 ans
bruit = np.random.normal(0, 0.1, n)
temp = temp_base + bruit

df = pd.DataFrame({'Annee': annees, 'Temperature': temp})

# Analyse
print("=== Analyse Climatique ===")
print(f"Température moyenne 1900-1950 : {df[df.Annee < 1950].Temperature.mean():.2f}°C")
print(f"Température moyenne 2000-2023 : {df[df.Annee >= 2000].Temperature.mean():.2f}°C")

# Régression linéaire (Tendance)
z = np.polyfit(df.Annee, df.Temperature, 1)
p = np.poly1d(z)
print(f"\\nTendance : {z[0]*100:.2f}°C par siècle")

# Visualisation
plt.figure(figsize=(12, 6))
plt.scatter(df.Annee, df.Temperature, alpha=0.5, label='Données annuelles')
plt.plot(df.Annee, p(df.Annee), 'r--', linewidth=2, label=f'Tendance ({z[0]*10:.2f}°C/décennie)')

plt.title('Évolution simulée des températures globales')
plt.xlabel('Année')
plt.ylabel('Température (°C)')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`,
                                tip: '🌍 Les vrais datasets sont disponibles sur le site de la NASA ou Kaggle !'
                            },
                            {
                                title: 'Projet 3 : Visualisation 3D d\'une molécule',
                                duration: '2 heures',
                                analogy: '⚛️ Construisez et visualisez des structures atomiques en 3D',
                                content: `Chimie numérique et 3D

Objectif : Représenter une molécule (ex: Méthane CH4) en 3D.

Ce que nous allons utiliser :
- NumPy pour les coordonnées
- Matplotlib 3D pour le rendu
- Géométrie : Tétraèdre

Étapes :
1. Définir les coordonnées des atomes
2. Créer la figure 3D
3. Tracer les atomes (sphères)
4. Tracer les liaisons (lignes)`,
                                keyPoints: [
                                    'Coordonnées 3D (x, y, z)',
                                    'Projection 3D',
                                    'Géométrie moléculaire',
                                    'Visualisation interactive'
                                ],
                                code: `import matplotlib.pyplot as plt
import numpy as np

def plot_molecule():
    fig = plt.figure(figsize=(10, 8))
    ax = fig.add_subplot(111, projection='3d')
    
    # Coordonnées du Méthane (CH4) - Tétraèdre
    # Carbone au centre
    atoms = [
        {'elem': 'C', 'pos': [0, 0, 0], 'color': 'black', 'size': 200},
        {'elem': 'H', 'pos': [1, 1, 1], 'color': 'white', 'size': 100},
        {'elem': 'H', 'pos': [1, -1, -1], 'color': 'white', 'size': 100},
        {'elem': 'H', 'pos': [-1, 1, -1], 'color': 'white', 'size': 100},
        {'elem': 'H', 'pos': [-1, -1, 1], 'color': 'white', 'size': 100}
    ]
    
    # Tracer les liaisons (C vers chaque H)
    center = atoms[0]['pos']
    for atom in atoms[1:]:
        pos = atom['pos']
        ax.plot([center[0], pos[0]], 
                [center[1], pos[1]], 
                [center[2], pos[2]], 
                color='gray', linewidth=2)
    
    # Tracer les atomes
    for atom in atoms:
        x, y, z = atom['pos']
        ax.scatter(x, y, z, 
                  s=atom['size']*5, 
                  c=atom['color'], 
                  edgecolor='black',
                  label=atom['elem'])
        
        # Label
        ax.text(x, y, z+0.2, atom['elem'], fontsize=12)
        
    ax.set_title("Molécule de Méthane (CH4)")
    ax.set_xlabel('X')
    ax.set_ylabel('Y')
    ax.set_zlabel('Z')
    
    # Ajuster la vue
    ax.view_init(elev=20, azim=45)
    
    # Enlever le fond gris par défaut
    ax.xaxis.pane.fill = False
    ax.yaxis.pane.fill = False
    ax.zaxis.pane.fill = False
    
    plt.show()

plot_molecule()`,
                                tip: '⚛️ Pour des molécules complexes, utilisez des bibliothèques comme RDKit ou BioPython !'
                            }
                        ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export default pythonCurriculum;
