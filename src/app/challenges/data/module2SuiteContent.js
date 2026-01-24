// ============================================================
// CONTENU PEDAGOGIQUE - MODULE 2 (SUITE) : ARITHMETIQUE
// Chapitres 7 a 15
// ============================================================

export const module2SuiteContent = {

    order_ops: {
        title: "Ordre des operations",
        theorie: `
## Ordre des operations en mathematiques

Python respecte l'ordre standard des operations mathematiques, souvent memorise par l'acronyme **PEMDAS** :

1. **P**arentheses : ()
2. **E**xposants : **
3. **M**ultiplication et **D**ivision : *, /, //, % (de gauche a droite)
4. **A**ddition et **S**oustraction : +, - (de gauche a droite)

### Exemples :

| Expression | Resultat | Explication |
|------------|----------|-------------|
| 2 + 3 * 4 | 14 | 3*4 d'abord, puis +2 |
| (2 + 3) * 4 | 20 | Parentheses d'abord |
| 2 ** 3 ** 2 | 512 | De droite a gauche ! 2^9 |
| 10 / 2 * 5 | 25.0 | De gauche a droite |

### Attention aux puissances :
Les puissances s'evaluent de **droite a gauche** !
2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512
        `,
        code: `# Ordre des operations en Python

print("=== Ordre des operations (PEMDAS) ===")

# Sans parentheses
print(f"2 + 3 * 4 = {2 + 3 * 4}")      # 14, pas 20

# Avec parentheses
print(f"(2 + 3) * 4 = {(2 + 3) * 4}")  # 20

# Division et multiplication (gauche a droite)
print(f"10 / 2 * 5 = {10 / 2 * 5}")    # 25.0
print(f"10 * 2 / 5 = {10 * 2 / 5}")    # 4.0

# Exposants (droite a gauche !)
print(f"\\n=== Exposants ===")
print(f"2 ** 3 ** 2 = {2 ** 3 ** 2}")  # 512 = 2^9
print(f"(2 ** 3) ** 2 = {(2 ** 3) ** 2}")  # 64 = 8^2

# Expressions complexes
print(f"\\n=== Expressions complexes ===")
expr1 = 3 + 4 * 2 / (1 - 5) ** 2
print(f"3 + 4 * 2 / (1 - 5) ** 2 = {expr1}")

# Decomposition etape par etape
print("\\nDecomposition :")
print("1. (1 - 5) = -4")
print("2. (-4) ** 2 = 16")
print("3. 4 * 2 = 8")
print("4. 8 / 16 = 0.5")
print("5. 3 + 0.5 = 3.5")

# Formule quadratique
a, b, c = 1, -5, 6
discriminant = b**2 - 4*a*c
x1 = (-b + discriminant**0.5) / (2*a)
x2 = (-b - discriminant**0.5) / (2*a)
print(f"\\n=== Formule quadratique ===")
print(f"ax^2 + bx + c = 0 avec a={a}, b={b}, c={c}")
print(f"Discriminant = {discriminant}")
print(f"x1 = {x1}, x2 = {x2}")`,
        exercice: `
### 📝 Exercice

1. Calculez **8 / 2 × (2 + 2)** sans Python, puis vérifiez
2. Quelle différence entre \`2 ** 2 ** 3\` et \`(2 ** 2) ** 3\` ?
3. Évaluez : **5 + 3 × 2 − 8 / 4 + 1**
4. Écrivez le volume d'une sphère : \`V = 4/3 * pi * r**3\`
        `
    },

    inequalities: {
        title: "Tester des inegalites et type Booleen",
        theorie: `
## Les operateurs de comparaison

Python permet de comparer des valeurs avec ces operateurs :

| Operateur | Signification | Exemple |
|-----------|---------------|---------|
| == | Egal a | 5 == 5 -> True |
| != | Different de | 5 != 3 -> True |
| < | Inferieur a | 3 < 5 -> True |
| > | Superieur a | 5 > 3 -> True |
| <= | Inferieur ou egal | 5 <= 5 -> True |
| >= | Superieur ou egal | 5 >= 3 -> True |

## Le type booleen (bool)

Le resultat d'une comparaison est un **booleen** : True ou False.

### Valeurs "falsy" (evaluent a False) :
- False, None
- 0, 0.0, 0j
- "", [], (), {}

### Valeurs "truthy" (evaluent a True) :
- Tout le reste !
        `,
        code: `# Comparaisons et booleens en Python

print("=== Operateurs de comparaison ===")

# Egalite
print(f"5 == 5 : {5 == 5}")
print(f"5 == 6 : {5 == 6}")

# Difference
print(f"5 != 3 : {5 != 3}")

# Inegalites
print(f"3 < 5 : {3 < 5}")
print(f"5 > 3 : {5 > 3}")
print(f"5 <= 5 : {5 <= 5}")
print(f"5 >= 6 : {5 >= 6}")

# Type booleen
print(f"\\n=== Type bool ===")
resultat = 10 > 5
print(f"10 > 5 = {resultat}")
print(f"Type : {type(resultat)}")

# Comparaisons chainees
print(f"\\n=== Comparaisons chainees ===")
x = 5
print(f"x = {x}")
print(f"1 < x < 10 : {1 < x < 10}")  # Python permet !
print(f"0 <= x <= 5 : {0 <= x <= 5}")

# Valeurs truthy et falsy
print(f"\\n=== Truthy et Falsy ===")
print(f"bool(0) = {bool(0)}")
print(f"bool(1) = {bool(1)}")
print(f"bool('') = {bool('')}")
print(f"bool('texte') = {bool('texte')}")
print(f"bool([]) = {bool([])}")
print(f"bool([1,2]) = {bool([1,2])}")

# Comparaison de flottants (attention !)
print(f"\\n=== Attention aux flottants ===")
print(f"0.1 + 0.2 == 0.3 : {0.1 + 0.2 == 0.3}")  # False !
print(f"0.1 + 0.2 = {0.1 + 0.2}")

# Solution : utiliser une tolerance
import math
print(f"math.isclose(0.1 + 0.2, 0.3) : {math.isclose(0.1 + 0.2, 0.3)}")`,
        exercice: `
### 📝 Exercice

1. Vérifiez si 17 est entre 10 et 20 (inclus) → \`10 <= 17 <= 20\`
2. Testez si **(√2)² = 2** → Attention aux flottants !
3. Quelle valeur booléenne pour \`-1\` ? Pour \`0.0\` ?
4. Comparez \`"abc" < "abd"\` - que se passe-t-il ?
        `
    },

    if_logic: {
        title: "Instructions if et operateurs logiques",
        theorie: `
## La structure conditionnelle if

### Syntaxe de base :

if condition:
    # Code execute si condition est vraie
elif autre_condition:
    # Code execute si cette condition est vraie
else:
    # Code execute sinon

### Operateurs logiques :

| Operateur | Signification |
|-----------|---------------|
| and | ET logique |
| or | OU logique |
| not | NON (negation) |

### Tables de verite :

**AND** : True seulement si les deux sont True
**OR** : True si au moins un est True
**NOT** : Inverse la valeur
        `,
        code: `# Instructions conditionnelles et logique

print("=== Structure if/elif/else ===")

age = 25

if age < 18:
    print("Mineur")
elif age < 65:
    print("Adulte")
else:
    print("Senior")

# Operateurs logiques
print(f"\\n=== Operateurs logiques ===")

# AND
print("AND :")
print(f"True and True = {True and True}")
print(f"True and False = {True and False}")
print(f"False and False = {False and False}")

# OR
print("\\nOR :")
print(f"True or False = {True or False}")
print(f"False or False = {False or False}")

# NOT
print("\\nNOT :")
print(f"not True = {not True}")
print(f"not False = {not False}")

# Exemple pratique
print(f"\\n=== Exemple pratique ===")
x = 15

if x > 0 and x < 100:
    print(f"{x} est entre 0 et 100")

if x % 3 == 0 or x % 5 == 0:
    print(f"{x} est divisible par 3 ou par 5")

# Expression ternaire (if en une ligne)
print(f"\\n=== Expression ternaire ===")
n = 7
parite = "pair" if n % 2 == 0 else "impair"
print(f"{n} est {parite}")

# Evaluation court-circuit
print(f"\\n=== Court-circuit ===")
# Python arrete d'evaluer des qu'il connait le resultat
liste = []
# Ceci ne cause pas d'erreur car le premier test echoue
if len(liste) > 0 and liste[0] == 1:
    print("Premier element est 1")
else:
    print("Liste vide ou premier element different de 1")`,
        exercice: `
### 📝 Exercice

1. Écrivez un \`if\` qui teste si un nombre est **positif**, **négatif** ou **nul**
2. Vérifiez si une année est bissextile :
   - Divisible par 4 **ET** (non divisible par 100 **OU** divisible par 400)
3. Déterminez si un triangle est valide (somme de 2 côtés > 3e côté)
        `
    },

    abs_val: {
        title: "Valeur absolue",
        theorie: `
## La valeur absolue

La **valeur absolue** d'un nombre est sa distance a zero sur la droite des nombres.

### Definition :
|x| = x si x >= 0
|x| = -x si x < 0

### En Python :

abs(x)  # Fonction integree

### Proprietes :
- |x| >= 0 pour tout x
- |x| = 0 ssi x = 0
- |x * y| = |x| * |y|
- |x + y| <= |x| + |y| (inegalite triangulaire)

### Applications :
- Distance entre deux points : |a - b|
- Erreur : |valeur_exacte - approximation|
        `,
        code: `# Valeur absolue en Python

print("=== Valeur absolue ===")

# Fonction abs()
print(f"abs(5) = {abs(5)}")
print(f"abs(-5) = {abs(-5)}")
print(f"abs(0) = {abs(0)}")
print(f"abs(-3.14) = {abs(-3.14)}")

# Nombres complexes
z = 3 + 4j
print(f"\\nNombre complexe z = {z}")
print(f"|z| = {abs(z)}")  # Module = sqrt(3^2 + 4^2) = 5

# Distance entre deux points
print(f"\\n=== Distance ===")
a, b = 7, 12
distance = abs(a - b)
print(f"Distance entre {a} et {b} = {distance}")

# Erreur relative
print(f"\\n=== Erreur ===")
import math
pi_approx = 22/7
erreur = abs(math.pi - pi_approx)
erreur_relative = erreur / math.pi * 100
print(f"Pi exact : {math.pi}")
print(f"Pi approx (22/7) : {pi_approx}")
print(f"Erreur absolue : {erreur:.6f}")
print(f"Erreur relative : {erreur_relative:.4f}%")

# Implementation manuelle
print(f"\\n=== Implementation manuelle ===")
def ma_valeur_absolue(x):
    if x >= 0:
        return x
    else:
        return -x

for x in [-5, 0, 7, -3.14]:
    print(f"ma_valeur_absolue({x}) = {ma_valeur_absolue(x)}")

# Verification de l'inegalite triangulaire
print(f"\\n=== Inegalite triangulaire ===")
x, y = -3, 5
print(f"x = {x}, y = {y}")
print(f"|x + y| = {abs(x + y)}")
print(f"|x| + |y| = {abs(x) + abs(y)}")
print(f"|x + y| <= |x| + |y| : {abs(x + y) <= abs(x) + abs(y)}")`,
        exercice: `
### 📝 Exercice

1. Calculez **|3 − 10|** et **|−7 + 2|**
2. Trouvez le module de **z = 5 − 12i** → \`abs(5 - 12j)\`
3. Calculez l'erreur relative entre √2 et 1.414
4. Vérifiez l'inégalité triangulaire pour x = −4, y = 7
        `
    },

    modulus: {
        title: "Reste de la division (modulo)",
        theorie: `
## L'operateur modulo (%)

L'operateur **modulo** donne le **reste** de la division entiere.

### Syntaxe :
a % b  # Reste de a divise par b

### Exemples :
17 % 5 = 2  (car 17 = 5 * 3 + 2)
10 % 3 = 1  (car 10 = 3 * 3 + 1)
8 % 4 = 0   (division exacte)

### Applications frequentes :
- Tester si un nombre est pair : n % 2 == 0
- Tester la divisibilite : n % d == 0
- Cyclage : i % longueur (revient au debut)
- Horloges : heure % 12

### Fonction divmod() :
divmod(17, 5)  # Retourne (3, 2) = (quotient, reste)
        `,
        code: `# L'operateur modulo en Python

print("=== Operateur modulo % ===")

# Exemples de base
print(f"17 % 5 = {17 % 5}")   # 2
print(f"10 % 3 = {10 % 3}")   # 1
print(f"8 % 4 = {8 % 4}")     # 0

# Relation avec la division
print(f"\\n=== Division euclidienne ===")
a, b = 17, 5
quotient = a // b
reste = a % b
print(f"{a} = {b} * {quotient} + {reste}")
print(f"Verification : {b * quotient + reste}")

# Fonction divmod
print(f"\\ndivmod(17, 5) = {divmod(17, 5)}")

# Test de parite
print(f"\\n=== Test de parite ===")
for n in range(1, 11):
    parite = "pair" if n % 2 == 0 else "impair"
    print(f"{n} est {parite}")

# Divisibilite
print(f"\\n=== Divisibilite ===")
n = 120
diviseurs = [d for d in range(1, n+1) if n % d == 0]
print(f"Diviseurs de {n} : {diviseurs}")

# Cyclage (revenir au debut)
print(f"\\n=== Cyclage ===")
jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
for i in range(10):
    jour_index = i % 7
    print(f"Jour {i+1} : {jours[jour_index]}")

# Conversion en heures/minutes/secondes
print(f"\\n=== Conversion temps ===")
total_secondes = 7384
heures = total_secondes // 3600
minutes = (total_secondes % 3600) // 60
secondes = total_secondes % 60
print(f"{total_secondes} secondes = {heures}h {minutes}min {secondes}s")

# Nombres modulo (horloge)
print(f"\\n=== Horloge 12h ===")
heure_24 = 15
heure_12 = heure_24 % 12
if heure_12 == 0:
    heure_12 = 12
periode = "PM" if heure_24 >= 12 else "AM"
print(f"{heure_24}h00 en format 12h = {heure_12}:00 {periode}")`,
        exercice: `
### 📝 Exercice

1. Vérifiez si **2024** est bissextile → \`2024 % 4 == 0\`
2. Trouvez tous les multiples de 7 entre 1 et 100
3. Convertissez **10000 secondes** en heures:minutes:secondes
4. Créez une fonction qui trouve le dernier chiffre → \`n % 10\`
        `
    },

    interactive_1: {
        title: "Fonctions mathematiques interactives, Partie 1",
        theorie: `
## Creer des fonctions en Python

Les **fonctions** permettent de reutiliser du code et d'organiser vos programmes.

### Syntaxe de base :

def nom_fonction(parametres):
    '''Docstring : description'''
    # Corps de la fonction
    return resultat

### Exemple :

def carre(x):
    '''Retourne le carre de x'''
    return x ** 2

resultat = carre(5)  # 25

### Fonctions avec valeurs par defaut :

def saluer(nom, langue="fr"):
    if langue == "fr":
        return f"Bonjour {nom}"
    else:
        return f"Hello {nom}"
        `,
        code: `# Fonctions mathematiques en Python

print("=== Fonctions de base ===")

# Fonction simple
def carre(x):
    '''Retourne le carre de x'''
    return x ** 2

def cube(x):
    '''Retourne le cube de x'''
    return x ** 3

print(f"carre(5) = {carre(5)}")
print(f"cube(3) = {cube(3)}")

# Fonction avec plusieurs parametres
def puissance(base, exposant):
    '''Calcule base^exposant'''
    return base ** exposant

print(f"puissance(2, 10) = {puissance(2, 10)}")

# Valeurs par defaut
def racine_n(x, n=2):
    '''Racine n-ieme de x (par defaut racine carree)'''
    return x ** (1/n)

print(f"\\n=== Racines ===")
print(f"racine_n(16) = {racine_n(16)}")      # Racine carree
print(f"racine_n(27, 3) = {racine_n(27, 3)}")  # Racine cubique

# Fonction factorielle
def factorielle(n):
    '''Calcule n! = n * (n-1) * ... * 1'''
    if n <= 1:
        return 1
    else:
        resultat = 1
        for i in range(2, n + 1):
            resultat *= i
        return resultat

print(f"\\n=== Factorielle ===")
for n in range(8):
    print(f"{n}! = {factorielle(n)}")

# Fonction pour la formule quadratique
import math

def resoudre_quadratique(a, b, c):
    '''
    Resout ax^2 + bx + c = 0
    Retourne les solutions reelles ou None
    '''
    discriminant = b**2 - 4*a*c
    
    if discriminant < 0:
        return None  # Pas de solution reelle
    elif discriminant == 0:
        return (-b / (2*a),)  # Solution double
    else:
        x1 = (-b + math.sqrt(discriminant)) / (2*a)
        x2 = (-b - math.sqrt(discriminant)) / (2*a)
        return (x1, x2)

print(f"\\n=== Equation quadratique ===")
solutions = resoudre_quadratique(1, -5, 6)
print(f"x^2 - 5x + 6 = 0 : x = {solutions}")`,
        exercice: `
**Exercice :**

1. Creez une fonction aire_cercle(rayon) qui retourne pi * r^2
2. Creez une fonction hypotenuse(a, b) utilisant Pythagore
3. Creez une fonction fibonacci(n) qui retourne le n-ieme terme
        `
    },

    interactive_2: {
        title: "Fonctions mathematiques interactives, Partie 2",
        theorie: `
## Fonctions avancees

### Retourner plusieurs valeurs :

def min_max(liste):
    return min(liste), max(liste)

petit, grand = min_max([3, 1, 4, 1, 5])

### Fonctions lambda (anonymes) :

carre = lambda x: x ** 2
carre(5)  # 25

### Fonctions comme arguments :

def appliquer(f, x):
    return f(x)

appliquer(lambda x: x**2, 5)  # 25

### Documentation :

def ma_fonction(x):
    '''
    Description courte.
    
    Parametres :
        x : type - description
        
    Retourne :
        type - description
    '''
    return resultat
        `,
        code: `# Fonctions avancees

import math

print("=== Retours multiples ===")

def statistiques(nombres):
    '''Calcule plusieurs statistiques'''
    n = len(nombres)
    somme = sum(nombres)
    moyenne = somme / n
    variance = sum((x - moyenne)**2 for x in nombres) / n
    ecart_type = math.sqrt(variance)
    return moyenne, variance, ecart_type

donnees = [2, 4, 4, 4, 5, 5, 7, 9]
moy, var, std = statistiques(donnees)
print(f"Donnees : {donnees}")
print(f"Moyenne : {moy}")
print(f"Variance : {var}")
print(f"Ecart-type : {std:.2f}")

# Fonctions lambda
print(f"\\n=== Fonctions lambda ===")

carre = lambda x: x ** 2
addition = lambda a, b: a + b

print(f"carre(7) = {carre(7)}")
print(f"addition(3, 5) = {addition(3, 5)}")

# Utilisation avec map
nombres = [1, 2, 3, 4, 5]
carres = list(map(lambda x: x**2, nombres))
print(f"Carres de {nombres} : {carres}")

# Fonctions comme parametres
print(f"\\n=== Fonctions en parametres ===")

def appliquer_operation(f, liste):
    '''Applique une fonction a chaque element'''
    return [f(x) for x in liste]

print(f"Carres : {appliquer_operation(lambda x: x**2, [1,2,3,4])}")
print(f"Cubes : {appliquer_operation(lambda x: x**3, [1,2,3,4])}")
print(f"Racines : {appliquer_operation(lambda x: x**0.5, [1,4,9,16])}")

# Composition de fonctions
print(f"\\n=== Composition ===")

def compose(f, g):
    '''Retourne f(g(x))'''
    return lambda x: f(g(x))

doubler = lambda x: x * 2
incrementer = lambda x: x + 1

# (doubler o incrementer)(x) = doubler(incrementer(x)) = 2*(x+1)
composition = compose(doubler, incrementer)
print(f"(2 * (x+1)) pour x=5 : {composition(5)}")  # 2*(5+1) = 12

# Table de fonctions
print(f"\\n=== Table ===")
fonctions = {
    'sin': math.sin,
    'cos': math.cos,
    'exp': math.exp,
    'log': math.log
}

x = 1.0
for nom, f in fonctions.items():
    print(f"{nom}({x}) = {f(x):.4f}")`,
        exercice: `
**Exercice :**

1. Creez une fonction qui retourne le quotient ET le reste
2. Utilisez map et lambda pour doubler tous les elements d'une liste
3. Creez une fonction compose qui compose 3 fonctions
        `
    },

    interactive_3: {
        title: "Fonctions mathematiques interactives, Partie 3",
        theorie: `
## Recursivite

Une fonction **recursive** s'appelle elle-meme.

### Structure :
1. Cas de base : condition d'arret
2. Cas recursif : appel avec un probleme reduit

### Exemple - Factorielle :

def fact(n):
    if n <= 1:  # Cas de base
        return 1
    else:       # Cas recursif
        return n * fact(n - 1)

### Pile d'appels :
fact(4)
  4 * fact(3)
      3 * fact(2)
          2 * fact(1)
              1          # Cas de base
          2 * 1 = 2
      3 * 2 = 6
  4 * 6 = 24

### Attention :
- Toujours avoir un cas de base !
- Limite de recursion en Python (~1000)
        `,
        code: `# Fonctions recursives

import sys
print(f"Limite de recursion : {sys.getrecursionlimit()}")

print("\\n=== Factorielle recursive ===")

def factorielle_rec(n):
    '''Calcule n! recursivement'''
    if n <= 1:
        return 1
    else:
        return n * factorielle_rec(n - 1)

for i in range(8):
    print(f"{i}! = {factorielle_rec(i)}")

# Fibonacci recursif
print(f"\\n=== Fibonacci recursif ===")

def fib_rec(n):
    '''n-ieme nombre de Fibonacci'''
    if n <= 1:
        return n
    else:
        return fib_rec(n - 1) + fib_rec(n - 2)

# Attention : tres lent pour grands n !
for i in range(12):
    print(f"F({i}) = {fib_rec(i)}")

# Version iterative (plus efficace)
def fib_iter(n):
    '''Fibonacci iteratif'''
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

print(f"\\nF(30) iteratif = {fib_iter(30)}")

# Puissance recursive
print(f"\\n=== Puissance recursive ===")

def puissance_rec(base, exp):
    '''Calcule base^exp recursivement'''
    if exp == 0:
        return 1
    elif exp < 0:
        return 1 / puissance_rec(base, -exp)
    else:
        return base * puissance_rec(base, exp - 1)

print(f"2^10 = {puissance_rec(2, 10)}")
print(f"2^(-3) = {puissance_rec(2, -3)}")

# Somme recursive
print(f"\\n=== Somme recursive ===")

def somme_liste(liste):
    '''Somme des elements d'une liste'''
    if len(liste) == 0:
        return 0
    else:
        return liste[0] + somme_liste(liste[1:])

print(f"Somme de [1,2,3,4,5] = {somme_liste([1,2,3,4,5])}")

# PGCD recursif (Euclide)
print(f"\\n=== PGCD d'Euclide ===")

def pgcd(a, b):
    '''PGCD par l'algorithme d'Euclide'''
    if b == 0:
        return a
    else:
        return pgcd(b, a % b)

print(f"PGCD(48, 18) = {pgcd(48, 18)}")
print(f"PGCD(252, 105) = {pgcd(252, 105)}")`,
        exercice: `
**Exercice :**

1. Creez une fonction recursive pour calculer la somme 1+2+...+n
2. Creez une fonction recursive pour inverser une chaine
3. Implementez la recherche binaire recursive
        `
    },

    bug_hunt: {
        title: "Chasse aux bugs Arithmetique !",
        theorie: `
## Erreurs courantes en arithmetique Python

### 1. Division entiere vs flottante

# Python 2 : 5/2 = 2
# Python 3 : 5/2 = 2.5
# Pour division entiere : 5 // 2 = 2

### 2. Ordre des operations

# FAUX : moyenne = a + b / 2 (divise seulement b)
# CORRECT : moyenne = (a + b) / 2

### 3. Comparaison de flottants

# FAUX : 0.1 + 0.2 == 0.3 (False !)
# CORRECT : math.isclose(0.1 + 0.2, 0.3)

### 4. Modulo avec negatifs

# -7 % 3 = 2 (Python)
# Resultat toujours du signe du diviseur

### 5. Puissances

# 2 ** 3 ** 2 = 512 (pas 64 !)
# Les puissances s'evaluent de droite a gauche
        `,
        code: `# Chasse aux bugs arithmetiques !

import math

print("=== Bug 1 : Division ===")
# FAUX
a, b = 5, 2
mauvais = a / 2 + b / 2  # Correct ici mais attention
print(f"(a + b) / 2 = {(a + b) / 2}")
print(f"a/2 + b/2 = {a/2 + b/2}")  # Pareil ici

# Le vrai bug
print(f"\\nMoyenne de 5 et 3 :")
print(f"FAUX : 5 + 3 / 2 = {5 + 3 / 2}")  # 6.5
print(f"CORRECT : (5 + 3) / 2 = {(5 + 3) / 2}")  # 4.0

print("\\n=== Bug 2 : Flottants ===")
print(f"0.1 + 0.2 = {0.1 + 0.2}")
print(f"0.1 + 0.2 == 0.3 ? {0.1 + 0.2 == 0.3}")  # False !
print(f"isclose ? {math.isclose(0.1 + 0.2, 0.3)}")  # True

print("\\n=== Bug 3 : Modulo negatif ===")
print(f"7 % 3 = {7 % 3}")
print(f"-7 % 3 = {-7 % 3}")  # 2, pas -1 !
print(f"7 % -3 = {7 % -3}")  # -2

print("\\n=== Bug 4 : Puissances ===")
print(f"2 ** 3 ** 2 = {2 ** 3 ** 2}")  # 512
print(f"(2 ** 3) ** 2 = {(2 ** 3) ** 2}")  # 64

print("\\n=== Bug 5 : Integer overflow (pas en Python !) ===")
grand = 10 ** 100
print(f"10^100 en Python : {grand}")
print(f"Type : {type(grand)}")  # Toujours int !

print("\\n=== Exercice de debug ===")
# Trouvez les erreurs dans ce code :

def moyenne_geometrique_BUGGY(a, b):
    # Bug : ordre des operations
    return a * b ** 0.5  # FAUX !

def moyenne_geometrique_CORRECT(a, b):
    return (a * b) ** 0.5

print(f"Moyenne geo BUGGY de 4 et 9 : {moyenne_geometrique_BUGGY(4, 9)}")
print(f"Moyenne geo CORRECT de 4 et 9 : {moyenne_geometrique_CORRECT(4, 9)}")

# Quiz
print("\\n=== Quiz ===")
questions = [
    ("10 / 3", 10 / 3),
    ("10 // 3", 10 // 3),
    ("-10 // 3", -10 // 3),  # Attention !
    ("10 % 3", 10 % 3),
    ("-10 % 3", -10 % 3),
]

for expr, result in questions:
    print(f"{expr} = {result}")`,
        exercice: `
**Exercice : Trouvez et corrigez les bugs !**

1. Ce code calcule mal la moyenne :
   moyenne = x + y + z / 3

2. Ce code teste l'egalite incorrectement :
   if x / 3 == 1/3:
       print("Tiers")

3. Ce code calcule mal 2^(2^2) :
   resultat = 2 ** 2 ** 2  # Voulait 16, obtient 16... ou pas ?

4. Pourquoi -17 % 5 ne donne pas -2 ?
        `
    },

    arithmetic_visualization: {
        title: "Visualiser les opérations arithmétiques",
        theorie: `
## L'arithmétique visuelle

Parfois, une image vaut mieux que 1000 nombres.
Nous pouvons utiliser Matplotlib pour visualiser des concepts simples d'arithmétique.

### La droite numérique
L'addition $a + b$ peut être vue comme un déplacement de $b$ unités à partir de $a$.

### Multiplication comme aire
Le produit $a \\times b$ est l'aire d'un rectangle de côtés $a$ et $b$.
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

# Visualiser l'addition 3 + 5 = 8
fig, ax = plt.subplots(figsize=(10, 2))
ax.set_xlim(0, 10)
ax.set_ylim(0, 2)

# Flèche pour 3
ax.arrow(0, 1, 3, 0, head_width=0.1, head_length=0.2, fc='blue', ec='blue')
ax.text(1.5, 1.2, '3', color='blue', fontsize=12)

# Flèche pour 5 (partant de 3)
ax.arrow(3, 1, 5, 0, head_width=0.1, head_length=0.2, fc='red', ec='red')
ax.text(5.5, 1.2, '+ 5', color='red', fontsize=12)

# Résultat
ax.axvline(8, color='green', linestyle='--')
ax.text(8.1, 0.5, '= 8', color='green', fontsize=14, fontweight='bold')

ax.set_title("Addition sur la droite numérique")
plt.yticks([])
plt.show()

# Visualiser la multiplication 4 x 6
fig, ax = plt.subplots(figsize=(6, 4))
rectangle = plt.Rectangle((0, 0), 6, 4, fc='orange', alpha=0.5, ec='black')
ax.add_patch(rectangle)
ax.set_xlim(-1, 8)
ax.set_ylim(-1, 6)
ax.set_aspect('equal')
ax.text(3, -0.5, '6', ha='center')
ax.text(-0.5, 2, '4', va='center')
ax.text(3, 2, 'Area = 24', ha='center', va='center', fontsize=20)
ax.set_title("Multiplication = Aire")
plt.show()`,
        exercice: `Visualisez la soustraction 10 - 4 sur la droite numérique.`
    },

    powers_visualization: {
        title: "Puissances et exposants visuels",
        theorie: `
## Croissance exponentielle

Les puissances représentent une croissance multiplicative.

### Carrés et Cubes
- $x^2$ : Aire d'un carré
- $x^3$ : Volume d'un cube

### Croissance
La fonction exponentielle $y = a^x$ croît (pour $a > 1$) plus vite que n'importe quel polynôme.
        `,
        code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 5, 100)
y1 = x
y2 = x**2
y3 = 2**x

plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='x (Linéaire)', linestyle='--')
plt.plot(x, y2, label='x^2 (Quadratique)')
plt.plot(x, y3, label='2^x (Exponentiel)', linewidth=3)

plt.title("Croissance : Linéaire vs Quadratique vs Exponentielle")
plt.legend()
plt.grid(True)
plt.ylim(0, 25)
plt.show()`,
        exercice: `Comparez $x^3$ et $3^x$ sur un graphique.`
    },

    factorial_combinatorics: {
        title: "Factorielle et combinatoire",
        theorie: `
## Factorielle et Combinatoire

### Factorielle
$n! = n \\times (n-1) \\times ... \\times 1$
Utilisé pour compter les permutations (ordres possibles).

### Combinaisons (ordre n'importe pas)
$$C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$
Exemple : Choisir 3 amis parmi 10.

### En Python
\`math.factorial(n)\`
\`math.comb(n, k)\`
        `,
        code: `import math

n = 5
fact = math.factorial(n)
print(f"{n}! = {fact} (nombre de façons d'ordonner {n} objets)")

# Loto : Choisir 6 numéros parmi 49
possibilites = math.comb(49, 6)
print(f"Combinaisons au Loto (6 parmi 49) : {possibilites:,}")

# Triangle de Pascal (premières lignes)
print("\\n=== Triangle de Pascal ===")
for i in range(6):
    ligne = [math.comb(i, k) for k in range(i+1)]
    print(f"Ligne {i} : {ligne}")`,
        exercice: `Combien de mains de 5 cartes peut-on former avec un jeu de 52 cartes ?`
    },

    sequences_series: {
        title: "Suites et séries numériques",
        theorie: `
## Suites Numériques

### Suite Arithmétique
$u_{n+1} = u_n + r$
Terme général : $u_n = u_0 + n \\cdot r$

### Suite Géométrique
$v_{n+1} = v_n \\times q$
Terme général : $v_n = v_0 \\times q^n$

### Série (Somme)
Une série est la somme des termes d'une suite.
        `,
        code: `import numpy as np
import matplotlib.pyplot as plt

n_termes = 20
n = np.arange(n_termes)

# Arithmétique : u_0 = 1, r = 2
u = 1 + n * 2

# Géométrique : v_0 = 1, q = 1.5
v = 1 * (1.15 ** n)

plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)
plt.plot(n, u, 'o-', label='Arithmétique (r=2)')
plt.plot(n, v, 's-', label='Géométrique (q=1.15)')
plt.title('Suites')
plt.legend()
plt.grid()

# Somme cumulée (Série)
plt.subplot(1, 2, 2)
plt.plot(n, np.cumsum(u), 'o--', label='Somme Arithmétique')
plt.plot(n, np.cumsum(v), 's--', label='Somme Géométrique')
plt.title('Séries (Sommes cumulées)')
plt.legend()
plt.grid()

plt.show()`,
        exercice: `Calculez la somme des 10 premiers termes de la suite géométrique $u_0=1, q=2$.`
    }
};
