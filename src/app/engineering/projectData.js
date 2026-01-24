export const engineeringProjects = [
    // ==================================================================================
    // 📐 MATHÉMATIQUES (20 projets)
    // ==================================================================================
    {
        id: 'math-crypto-rsa',
        category: 'Mathématiques',
        title: "Cryptographie RSA",
        level: "Université (L3)",
        domain: "Arithmétique",
        icon: "🔐",
        difficulty: "Avancé",
        duration: "2h",
        description: "Comprendre et implémenter le chiffrement RSA utilisé pour sécuriser Internet.",
        history: {
            year: "1977",
            people: ["Rivest", "Shamir", "Adleman"],
            context: "En pleine guerre froide, la nécessité de sécuriser les communications numériques sans échanger de clé secrète au préalable devient critique. Le trio du MIT invente le premier système à clé publique basé sur la difficulté de factoriser de grands nombres."
        },
        problemStatement: {
            context: "Vous devez envoyer un message secret à une banque. Comment s'assurer que personne ne peut le lire en route ?",
            objective: "Utiliser les nombres premiers et l'arithmétique modulaire pour chiffrer/déchiffrer un message.",
            analogy: "C'est comme une boîte aux lettres : tout le monde peut y mettre une lettre (clé publique), mais seul le facteur a la clé pour l'ouvrir (clé privée)."
        },
        steps: [
            {
                title: "1. Génération des Clés",
                explanation: "On choisit deux grands nombres premiers p et q.",
                code: `from sympy import nextprime, randprime, gcd
p = randprime(100, 200)
q = randprime(100, 200)
n = p * q
phi_n = (p-1)*(q-1)
# Choix de e (exposant public)
e = 65537
print(f"Clé publique (n, e) : ({n}, {e})")`
            },
            {
                title: "2. Chiffrement",
                explanation: "Message chiffré C ≡ Mᵉ (mod n).",
                code: `M = 42  # Message à chiffrer
C = pow(M, e, n)
print(f"Message chiffré : {C}")`
            }
        ]
    },
    {
        id: 'math-golden-ratio',
        category: 'Mathématiques',
        title: "Nombre d'Or & Nature",
        level: "Lycée (Seconde)",
        domain: "Algèbre",
        icon: "🌻",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Explorer la suite de Fibonacci et le nombre d'or dans la nature.",
        history: {
            year: "1202",
            people: ["Leonardo Fibonacci", "Phidias"],
            context: "Fibonacci introduit les chiffres indo-arabes en Europe et pose son célèbre problème des lapins. Le nombre d'or (Phi) fascine depuis l'Antiquité pour ses propriétés esthétiques supposées (Parthénon)."
        },
        problemStatement: {
            context: "Pourquoi les tournesols ont-ils des spirales parfaites ? La nature optimise l'espace pour capter la lumière.",
            objective: "Calculer la limite du rapport $F_{n+1}/F_n$ quand $n \to \infty$.",
            analogy: "Arranger des graines pour qu'elles ne se fassent pas d'ombre, c'est comme garer des voitures dans un parking circulaire optimal."
        },
        steps: [
            {
                title: "1. Suite de Fibonacci",
                explanation: "Chaque terme est la somme des deux précédents.",
                code: `from sympy import fibonacci
# Calcul des 10 premiers termes
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`
            },
            {
                title: "2. Limite vers Phi",
                explanation: "Le rapport tend vers $\Phi = \frac{1+\sqrt{5}}{2}$.",
                code: `from sympy import solve, sqrt, Symbol
x = Symbol('x')
phi = solve(x**2 - x - 1, x)[1]
print(f"Nombre d'or exact : {phi}")
print(f"Valeur approchée : {phi.evalf()}")`
            }
        ]
    },
    {
        id: 'math-fractals',
        category: 'Mathématiques',
        title: "Flocon de Koch",
        level: "Lycée (Première)",
        domain: "Géométrie",
        icon: "❄️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Construire une fractale et calculer son périmètre infini pour une aire finie.",
        history: {
            year: "1904",
            people: ["Helge von Koch", "Benoît Mandelbrot"],
            context: "Avant les fractales, on pensait que toutes les courbes avaient une tangente. Koch a montré une courbe continue mais nulle part dérivable, défiant l'intuition mathématique de l'époque."
        },
        problemStatement: {
            context: "Comment mesurer la côte de la Bretagne ? Plus on zoome, plus c'est long.",
            objective: "Modéliser une itération géométrique récursive.",
            analogy: "Un littoral infini qui tient dans une boîte finie."
        },
        steps: [
            {
                title: "1. Périmètre",
                explanation: "À chaque étape, on multiplie le périmètre par $4/3$.",
                code: `from sympy import Symbol, limit, oo
n = Symbol('n')
P0 = Symbol('P0')
Pn = P0 * (4/3)**n
limite_P = limit(Pn, n, oo)
print(f"Limite du périmètre : {limite_P}")`
            }
        ]
    },
    {
        id: 'math-fourier',
        category: 'Mathématiques',
        title: "Séries de Fourier",
        level: "Université (L2)",
        domain: "Analyse",
        icon: "〰️",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Décomposer n'importe quel signal périodique en somme de sinus.",
        history: {
            year: "1822",
            people: ["Joseph Fourier"],
            context: "En étudiant la propagation de la chaleur, Fourier affirme que toute fonction peut s'écrire comme une somme de sinus. Une idée révolutionnaire et controversée à l'époque, aujourd'hui base du MP3 et du JPEG."
        },
        problemStatement: {
            context: "Comment votre téléphone transmet-il votre voix ? Il la décompose en fréquences.",
            objective: "Calculer les coefficients $a_n$ et $b_n$ pour un signal carré.",
            analogy: "Créer n'importe quelle couleur de peinture en mélangeant juste du rouge, du vert et du bleu (les sinus de base)."
        },
        steps: [
            {
                title: "1. Coefficients de Fourier",
                explanation: "Intégrale du signal multiplié par cos(nx) ou sin(nx).",
                code: `from sympy import fourier_series, pi, Piecewise, symbols
x = symbols('x')
f = Piecewise((-1, x < 0), (1, x >= 0))
s = fourier_series(f, (x, -pi, pi))
print("Série de Fourier (3 premiers termes) :")
s.truncate(3)`
            }
        ]
    },
    {
        id: 'math-probability',
        category: 'Mathématiques',
        title: "Paradoxe des Anniversaires",
        level: "Lycée (Terminale)",
        domain: "Probabilités",
        icon: "🎂",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Pourquoi a-t-on 50% de chance d'avoir deux anniversaires identiques dans un groupe de 23 ?",
        history: {
            year: "1939",
            people: ["Richard von Mises"],
            context: "L'intuition humaine est mauvaise avec les probabilités exponentielles. Ce paradoxe illustre la complexité des collisions dans les fonctions de hachage modernes."
        },
        problemStatement: {
            context: "Dans une classe de 30 élèves, pariez-vous qu'il y a une paire d'anniversaires ?",
            objective: "Calculer $P(\text{au moins une paire}) = 1 - P(\text{tous différents})$.",
            analogy: "Serrer la main à tout le monde : avec 23 personnes, il y a 253 poignées de main possibles, donc beaucoup de chances de 'collision'."
        },
        steps: [
            {
                title: "1. Calcul Probabilité",
                explanation: "On calcule la probabilité que personne n'ait le même anniversaire.",
                code: `from sympy import factorial
n = 23
prob_unique = factorial(365) / (factorial(365-n) * 365**n)
prob_paire = 1 - prob_unique
print(f"Probabilité pour {n} personnes : {prob_paire.evalf()}")`
            }
        ]
    },
    // NOUVEAUX PROJETS MATHÉMATIQUES À INSÉRER APRÈS LE PARADOXE DES ANNIVERSAIRES
    {
        id: 'math-linear-systems',
        category: 'Mathématiques',
        title: "Systèmes Linéaires & Matrices",
        level: "Lycée (Première)",
        domain: "Algèbre Linéaire",
        icon: "🔢",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Résoudre des systèmes d'équations avec l'élimination de Gauss et les matrices.",
        history: {
            year: "1810",
            people: ["Carl Friedrich Gauss"],
            context: "Gauss développe sa méthode d'élimination pour calculer les orbites d'astéroïdes. Cette technique devient fondamentale en ingénierie, économie et intelligence artificielle."
        },
        problemStatement: {
            context: "Équilibrer un budget familial avec plusieurs contraintes (loyer, nourriture, épargne).",
            objective: "Résoudre Ax = b par élimination de Gauss.",
            analogy: "Comme résoudre un Sudoku : on élimine les possibilités jusqu'à trouver la solution unique."
        },
        steps: [
            {
                title: "1. Définition du Système",
                explanation: "Système de 3 équations à 3 inconnues sous forme matricielle.",
                code: `from sympy import Matrix, symbols
x, y, z = symbols('x y z')
# Système : 2x + y - z = 8
#          -3x - y + 2z = -11
#          -2x + y + 2z = -3
A = Matrix([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]])
b = Matrix([8, -11, -3])
print("Matrice A :")
A`
            },
            {
                title: "2. Résolution",
                explanation: "Méthode de Gauss : réduction échelonnée.",
                code: `# Résolution directe
solution = A.solve(b)
print(f"Solution : x={solution[0]}, y={solution[1]}, z={solution[2]}")`
            },
            {
                title: "3. Vérification",
                explanation: "On vérifie que A·x = b.",
                code: `verification = A * solution
print(f"Vérification A·x = {verification}")
print(f"b = {b}")
print(f"Égalité : {verification == b}")`
            }
        ]
    },
    {
        id: 'math-derivatives-optimization',
        category: 'Mathématiques',
        title: "Dérivées & Optimisation",
        level: "Lycée (Terminale)",
        domain: "Calcul Différentiel",
        icon: "📈",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Trouver le maximum ou minimum d'une fonction avec les dérivées.",
        history: {
            year: "1684",
            people: ["Isaac Newton", "Gottfried Leibniz"],
            context: "Newton et Leibniz inventent indépendamment le calcul différentiel. Leur querelle de priorité divise l'Europe scientifique pendant des décennies."
        },
        problemStatement: {
            context: "Un fermier veut clôturer un champ rectangulaire avec 100m de grillage. Quelle dimension maximise la surface ?",
            objective: "Trouver le maximum de $f(x)$ en résolvant $f'(x) = 0$.",
            analogy: "Trouver le sommet d'une colline : là où la pente est nulle."
        },
        steps: [
            {
                title: "1. Fonction à Optimiser",
                explanation: "Surface S = x·y avec contrainte 2x + 2y = 100.",
                code: `from sympy import symbols, diff, solve
x = symbols('x')
# y = 50 - x (de la contrainte)
S = x * (50 - x)
print("Fonction surface :")
S`
            },
            {
                title: "2. Dérivée et Point Critique",
                explanation: "On cherche où dS/dx = 0.",
                code: `dS = diff(S, x)
print("Dérivée dS/dx :")
x_opt = solve(dS, x)[0]
print(f"Dimension optimale : x = {x_opt}m")
print(f"Surface maximale : {S.subs(x, x_opt)}m²")
dS`
            }
        ]
    },
    {
        id: 'math-integrals',
        category: 'Mathématiques',
        title: "Intégrales & Aires",
        level: "Lycée (Terminale)",
        domain: "Calcul Intégral",
        icon: "∫",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer l'aire sous une courbe avec les intégrales définies.",
        history: {
            year: "1854",
            people: ["Bernhard Riemann"],
            context: "Riemann formalise rigoureusement l'intégration, permettant de calculer des aires de formes complexes. Base de la physique moderne."
        },
        problemStatement: {
            context: "Calculer la quantité d'eau dans un réservoir de forme parabolique.",
            objective: "Calculer ∫ₐᵇ f(x)dx.",
            analogy: "Compter des grains de sable en les regroupant par poignées infiniment petites."
        },
        steps: [
            {
                title: "1. Intégrale Définie",
                explanation: "Aire sous f(x) = x² entre 0 et 2.",
                code: `from sympy import symbols, integrate
x = symbols('x')
f = x**2
aire = integrate(f, (x, 0, 2))
print(f"Aire sous x² de 0 à 2 : {aire}")`
            },
            {
                title: "2. Primitive",
                explanation: "∫ x²dx = x³/3 + C.",
                code: `primitive = integrate(f, x)
print(f"Primitive de x² : {primitive}")`
            }
        ]
    },
    {
        id: 'math-differential-equations',
        category: 'Mathématiques',
        title: "Équations Différentielles",
        level: "Université (L1)",
        domain: "Analyse",
        icon: "∂",
        difficulty: "Avancé",
        duration: "2h",
        description: "Modéliser des phénomènes dynamiques (croissance, décroissance, oscillations).",
        history: {
            year: "1736",
            people: ["Leonhard Euler"],
            context: "Euler développe les méthodes de résolution des équations différentielles pour modéliser les vibrations des cordes et les trajectoires balistiques."
        },
        problemStatement: {
            context: "Modéliser la décharge d'un condensateur dans un circuit RC.",
            objective: "Résoudre dy/dt + ky = 0.",
            analogy: "Une baignoire qui se vide : la vitesse de vidange dépend du niveau d'eau restant."
        },
        steps: [
            {
                title: "1. Équation Différentielle",
                explanation: "Décroissance exponentielle.",
                code: `from sympy import Function, dsolve, Eq, symbols
t, k = symbols('t k')
y = Function('y')(t)
eq = Eq(y.diff(t) + k*y, 0)
print("Équation différentielle :")
eq`
            },
            {
                title: "2. Solution Générale",
                explanation: "y(t) = C·e^(-kt).",
                code: `solution = dsolve(eq, y)
print("Solution :")
solution`
            }
        ]
    },
    {
        id: 'math-complex-numbers',
        category: 'Mathématiques',
        title: "Nombres Complexes",
        level: "Lycée (Terminale)",
        domain: "Algèbre",
        icon: "ℂ",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Manipuler les nombres imaginaires et la formule d'Euler.",
        history: {
            year: "1748",
            people: ["Leonhard Euler", "Carl Gauss"],
            context: "Euler découvre la formule e^(iπ) + 1 = 0, reliant les 5 constantes fondamentales. Gauss visualise les complexes dans le plan, révolutionnant l'algèbre."
        },
        problemStatement: {
            context: "Analyser les signaux électriques en courant alternatif (impédances complexes).",
            objective: "Calculer avec $z = a + bi$ et utiliser $e^{i\theta} = \cos(\theta) + i\sin(\theta)$.",
            analogy: "Comme les vecteurs 2D : on peut additionner, tourner, agrandir."
        },
        steps: [
            {
                title: "1. Opérations de Base",
                explanation: "Addition, multiplication, conjugué.",
                code: `from sympy import symbols, I, conjugate, Abs, arg
z1 = 3 + 4*I
z2 = 1 - 2*I
print(f"z1 + z2 = {z1 + z2}")
print(f"z1 × z2 = {z1 * z2}")
print(f"Conjugué de z1 : {conjugate(z1)}")
print(f"Module |z1| : {Abs(z1)}")
print(f"Argument arg(z1) : {arg(z1)}")`
            },
            {
                title: "2. Formule d'Euler",
                explanation: "e^(iπ) + 1 = 0.",
                code: `from sympy import exp, pi, simplify
euler = exp(I*pi) + 1
print(f"e^(iπ) + 1 = {simplify(euler)}")`
            }
        ]
    },
    {
        id: 'math-cosine-law',
        category: 'Mathématiques',
        title: "Loi des Cosinus",
        level: "Lycée (Seconde)",
        domain: "Trigonométrie",
        icon: "📐",
        difficulty: "Débutant",
        duration: "45min",
        description: "Généralisation du théorème de Pythagore pour les triangles quelconques.",
        history: {
            year: "1000",
            people: ["Al-Kashi", "Euclide"],
            context: "Le mathématicien persan Al-Kashi généralise Pythagore. Cette loi est cruciale en navigation, topographie et architecture."
        },
        problemStatement: {
            context: "Calculer la distance entre deux villes connaissant leurs distances à une troisième et l'angle.",
            objective: "$c^2 = a^2 + b^2 - 2ab\cos(\gamma)$.",
            analogy: "Pythagore marche pour les angles droits. La loi des cosinus marche pour TOUS les triangles."
        },
        steps: [
            {
                title: "1. Application Numérique",
                explanation: "Triangle avec a=5, b=7, angle γ=60°.",
                code: `from sympy import symbols, cos, pi, sqrt
a, b, gamma = 5, 7, pi/3  # 60° en radians
c_squared = a**2 + b**2 - 2*a*b*cos(gamma)
c = sqrt(c_squared)
print(f"Longueur c = {c.evalf()}")`
            }
        ]
    },
    {
        id: 'math-polynomials',
        category: 'Mathématiques',
        title: "Polynômes & Racines",
        level: "Lycée (Première)",
        domain: "Algèbre",
        icon: "🌿",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Factoriser des polynômes et trouver leurs racines.",
        history: {
            year: "1830",
            people: ["Évariste Galois", "Niels Abel"],
            context: "Galois, mort en duel à 20 ans, prouve qu'il n'existe pas de formule générale pour les polynômes de degré ≥5. Révolution conceptuelle en mathématiques."
        },
        problemStatement: {
            context: "Trouver les points d'intersection d'une parabole avec l'axe des x.",
            objective: "Résoudre P(x) = 0.",
            analogy: "Trouver les endroits où une balle lancée touche le sol."
        },
        steps: [
            {
                title: "1. Résolution",
                explanation: "Racines de x³ - 6x² + 11x - 6 = 0.",
                code: `from sympy import symbols, solve, factor
x = symbols('x')
P = x**3 - 6*x**2 + 11*x - 6
racines = solve(P, x)
print(f"Racines : {racines}")`
            },
            {
                title: "2. Factorisation",
                explanation: "P(x) = (x-1)(x-2)(x-3).",
                code: `factorise = factor(P)
print(f"Forme factorisée : {factorise}")`
            }
        ]
    },
    {
        id: 'math-bayes',
        category: 'Mathématiques',
        title: "Théorème de Bayes",
        level: "Université (L2)",
        domain: "Probabilités",
        icon: "🎲",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Mettre à jour des probabilités avec de nouvelles informations.",
        history: {
            year: "1763",
            people: ["Thomas Bayes"],
            context: "Publié après sa mort, le théorème de Bayes est aujourd'hui au cœur de l'intelligence artificielle, du diagnostic médical et des filtres anti-spam."
        },
        problemStatement: {
            context: "Un test de dépistage est positif. Quelle est la vraie probabilité d'être malade ?",
            objective: "$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$.",
            analogy: "Comme un détective qui ajuste ses soupçons au fur et à mesure des indices."
        },
        steps: [
            {
                title: "1. Formule de Bayes",
                explanation: "Probabilité a posteriori.",
                code: `from sympy import symbols, Rational
# P(Malade) = 1%, P(Positif|Malade) = 99%, P(Positif|Sain) = 5%
P_M = Rational(1, 100)
P_Pos_M = Rational(99, 100)
P_Pos_S = Rational(5, 100)
P_S = 1 - P_M
P_Pos = P_Pos_M * P_M + P_Pos_S * P_S
P_M_Pos = (P_Pos_M * P_M) / P_Pos
print(f"P(Malade | Test+) = {P_M_Pos.evalf()}")`
            }
        ]
    },
    {
        id: 'math-graph-theory',
        category: 'Mathématiques',
        title: "Théorie des Graphes",
        level: "Université (L2)",
        domain: "Mathématiques Discrètes",
        icon: "🌐",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Résoudre le problème des ponts de Königsberg.",
        history: {
            year: "1736",
            people: ["Leonhard Euler"],
            context: "Euler résout le problème des 7 ponts de Königsberg, créant la théorie des graphes. Aujourd'hui utilisée pour GPS, réseaux sociaux, et optimisation logistique."
        },
        problemStatement: {
            context: "Peut-on traverser tous les ponts d'une ville exactement une fois ?",
            objective: "Un graphe eulérien existe si tous les sommets ont un degré pair.",
            analogy: "Comme dessiner une figure sans lever le crayon et sans repasser sur un trait."
        },
        steps: [
            {
                title: "1. Représentation du Graphe",
                explanation: "Sommets (îles) et arêtes (ponts).",
                code: `# Degrés des sommets de Königsberg
degres = [3, 3, 3, 5]  # Tous impairs !
print(f"Degrés des sommets : {degres}")
nb_impairs = sum(1 for d in degres if d % 2 == 1)
print(f"Nombre de sommets de degré impair : {nb_impairs}")
if nb_impairs == 0:
    print("✅ Chemin eulérien possible")
else:
    print("❌ Impossible de traverser tous les ponts une seule fois")`
            }
        ]
    },
    {
        id: 'math-linear-programming',
        category: 'Mathématiques',
        title: "Programmation Linéaire",
        level: "Université (L3)",
        domain: "Optimisation",
        icon: "📊",
        difficulty: "Avancé",
        duration: "2h",
        description: "Optimiser une fonction sous contraintes (méthode du simplexe).",
        history: {
            year: "1947",
            people: ["George Dantzig"],
            context: "Dantzig invente le simplexe pour optimiser la logistique militaire américaine. Aujourd'hui utilisé par toutes les compagnies aériennes et industries."
        },
        problemStatement: {
            context: "Une usine fabrique des chaises et des tables. Maximiser le profit sous contraintes de matériaux et temps.",
            objective: "Maximiser $z = 3x + 5y$ sous contraintes.",
            analogy: "Trouver le meilleur compromis dans un budget limité."
        },
        steps: [
            {
                title: "1. Formulation",
                explanation: "Fonction objectif et contraintes.",
                code: `from sympy import symbols, solve
x, y = symbols('x y')  # Chaises et tables
# Maximiser profit : z = 3x + 5y
# Contraintes : 2x + 4y ≤ 40 (bois)
#               x + 2y ≤ 20 (temps)
#               x, y ≥ 0
print("Problème d'optimisation linéaire défini")
print("Fonction objectif : z = 3x + 5y")
print("Contraintes : 2x + 4y ≤ 40, x + 2y ≤ 20")`
            },
            {
                title: "2. Résolution Graphique",
                explanation: "On teste les sommets du polygone de contraintes.",
                code: `# Sommets du domaine réalisable
sommets = [(0, 0), (0, 10), (20, 0), (10, 5)]
profits = [3*x + 5*y for x, y in sommets]
print("Profits aux sommets :", profits)
max_profit = max(profits)
optimal = sommets[profits.index(max_profit)]
print(f"Solution optimale : {optimal[0]} chaises, {optimal[1]} tables")
print(f"Profit maximal : {max_profit}")`
            }
        ]
    },
    {
        id: 'math-prime-sieve',
        category: 'Mathématiques',
        title: "Crible d'Ératosthène",
        level: "Lycée (Seconde)",
        domain: "Arithmétique",
        icon: "🔢",
        difficulty: "Débutant",
        duration: "45min",
        description: "Trouver tous les nombres premiers jusqu'à N.",
        history: {
            year: "-240",
            people: ["Ératosthène de Cyrène"],
            context: "Ératosthène, directeur de la Bibliothèque d'Alexandrie, invente un algorithme simple pour 'tamiser' les nombres et ne garder que les premiers."
        },
        problemStatement: {
            context: "Sécuriser un système avec des petits nombres premiers avant de passer au RSA.",
            objective: "Implémenter le crible pour trouver les premiers < 100.",
            analogy: "Comme une passoire : on laisse passer les multiples de 2, puis de 3, etc. Ce qui reste est premier."
        },
        steps: [
            {
                title: "1. Algorithme du Crible",
                explanation: "On élimine les multiples de chaque nombre trouvé.",
                code: `def crible(n):
    premiers = [True] * (n + 1)
    p = 2
    while (p * p <= n):
        if (premiers[p] == True):
            for i in range(p * p, n + 1, p):
                premiers[i] = False
        p += 1
    return [p for p in range(2, n + 1) if premiers[p]]

print(f"Nombres premiers jusqu'à 100 :")
print(crible(100))`
            }
        ]
    },
    {
        id: 'math-monte-carlo',
        category: 'Mathématiques',
        title: "Méthode de Monte Carlo",
        level: "Université (L1)",
        domain: "Probabilités",
        icon: "🎯",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer la valeur de π en lançant des fléchettes virtuelles.",
        history: {
            year: "1946",
            people: ["Stanisław Ulam", "John von Neumann"],
            context: "Ulam invente cette méthode alors qu'il jouait au solitaire pendant sa convalescence. Utilisée pour le projet Manhattan (bombe atomique)."
        },
        problemStatement: {
            context: "Calculer une aire complexe qu'on ne sait pas intégrer analytiquement.",
            objective: "Rapport des points dans le cercle / total = $\pi/4$.",
            analogy: "Lancer des grains de riz sur une table avec un cercle dessiné et compter ceux qui tombent dedans."
        },
        steps: [
            {
                title: "1. Simulation",
                explanation: "Génération de points aléatoires $(x, y)$ dans un carré.",
                code: `import random
n = 10000
interieur = 0
for _ in range(n):
    x, y = random.random(), random.random()
    if x**2 + y**2 <= 1:
        interieur += 1

pi_approx = 4 * interieur / n
print(f"Estimation de π pour {n} points : {pi_approx}")`
            }
        ]
    },
    {
        id: 'math-bezier',
        category: 'Mathématiques',
        title: "Courbes de Bézier",
        level: "Université (L2)",
        domain: "Géométrie Algébrique",
        icon: "🖊️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Les courbes qui dessinent le monde numérique (polices, design, CAO).",
        history: {
            year: "1962",
            people: ["Pierre Bézier"],
            context: "Ingénieur chez Renault, Bézier développe ces courbes pour concevoir les carrosseries de voitures par ordinateur."
        },
        problemStatement: {
            context: "Dessiner une courbe lisse passant par des points de contrôle.",
            objective: "Calculer le polynôme de Bernstein : $B(t) = \sum \binom{n}{i} (1-t)^{n-i} t^i P_i$.",
            analogy: "Comme un élastique tiré par des aimants (points de contrôle)."
        },
        steps: [
            {
                title: "1. Courbe Quadratique",
                explanation: "$P(t) = (1-t)^2 P_0 + 2(1-t)t P_1 + t^2 P_2$.",
                code: `from sympy import symbols, simplify
t = symbols('t')
P0, P1, P2 = 0, 10, 5 # Points de contrôle
P_t = (1-t)**2 * P0 + 2*(1-t)*t * P1 + t**2 * P2
print("Équation de la courbe :")
simplify(P_t)`
            }
        ]
    },
    {
        id: 'math-laplace',
        category: 'Mathématiques',
        title: "Transformée de Laplace",
        level: "Université (L2)",
        domain: "Analyse",
        icon: "🌀",
        difficulty: "Avancé",
        duration: "2h",
        description: "Transformer des équations différentielles en équations algébriques simples.",
        history: {
            year: "1812",
            people: ["Pierre-Simon de Laplace"],
            context: "Laplace introduit cette transformée pour ses travaux en mécanique céleste. C'est aujourd'hui l'outil n°1 des automaticiens pour stabiliser des systèmes."
        },
        problemStatement: {
            context: "Résoudre un système masse-ressort-amortisseur complexe.",
            objective: "Passer du domaine temporel $t$ au domaine fréquentiel $s$.",
            analogy: "Comme passer un ingrédient au mixeur : ça change de forme, mais c'est plus facile à manipuler."
        },
        steps: [
            {
                title: "1. Transformée",
                explanation: "$F(s) = \int_0^\infty f(t) e^{-st} dt$.",
                code: `from sympy import symbols, laplace_transform, exp, sin
t, s = symbols('t s')
f = exp(-t) * sin(t)
L_f = laplace_transform(f, t, s)
print("Transformée de Laplace de e^-t * sin(t) :")
L_f[0]`
            }
        ]
    },
    {
        id: 'math-chaos',
        category: 'Mathématiques',
        title: "Théorie du Chaos",
        level: "Master",
        domain: "Systèmes Dynamiques",
        icon: "🦋",
        difficulty: "Expert",
        duration: "2h30",
        description: "L'effet papillon : quand le déterminisme devient imprévisible.",
        history: {
            year: "1963",
            people: ["Edward Lorenz"],
            context: "Lorenz découvre qu'un modèle météo simple peut devenir chaotique à cause d'infimes variations initiales. Fin du rêve de Laplace d'un univers totalement prévisible."
        },
        problemStatement: {
            context: "Comprendre pourquoi la météo est imprévisible à plus de 10 jours.",
            objective: "Étudier la sensibilité aux conditions initiales.",
            analogy: "Une bille au sommet d'un dôme : un souffle à gauche ou à droite change tout son futur."
        },
        steps: [
            {
                title: "1. Attracteur de Lorenz",
                explanation: "Système de 3 équations non-linéaires.",
                code: `from sympy import symbols, Function
t, sigma, rho, beta = symbols('t sigma rho beta')
x, y, z = Function('x')(t), Function('y')(t), Function('z')(t)
# Equations de Lorenz:
# dx/dt = sigma * (y - x)
# dy/dt = x * (rho - z) - y
# dz/dt = x * y - beta * z
print("Système de Lorenz défini.")`
            }
        ]
    },

    // ==================================================================================
    // 🚀 PHYSIQUE (15 projets)
    // ==================================================================================
    {
        id: 'phys-solar-system',
        category: 'Physique',
        title: "Orbites Planétaires",
        level: "Université (L1)",
        domain: "Mécanique Céleste",
        icon: "🪐",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Simuler le mouvement de la Terre autour du Soleil.",
        history: {
            year: "1609",
            people: ["Johannes Kepler", "Isaac Newton"],
            context: "Kepler brise le dogme des orbites circulaires parfaites en découvrant les ellipses. Newton expliquera plus tard *pourquoi* grâce à la gravitation universelle."
        },
        problemStatement: {
            context: "Prédire la position de Mars pour y envoyer une sonde.",
            objective: "Résoudre les équations du mouvement sous force centrale.",
            analogy: "Une fronde : la pierre tourne tant que la corde (gravité) la retient."
        },
        steps: [
            {
                title: "1. Troisième Loi de Kepler",
                explanation: "T^2 / a^3 = constante.",
                code: `from sympy import symbols, solve
T, a, G, M = symbols('T a G M')
# T^2 = (4*pi^2 / GM) * a^3
eq = T**2 - (4*3.14159**2 / (G*M)) * a**3
print("Relation période-rayon :")
display(eq)`
            }
        ]
    },
    {
        id: 'phys-pendulum',
        category: 'Physique',
        title: "Pendule Simple",
        level: "Lycée (Terminale)",
        domain: "Mécanique",
        icon: "🕰️",
        difficulty: "Débutant",
        duration: "1h",
        description: "Étudier la période d'oscillation d'une horloge.",
        history: {
            year: "1602",
            people: ["Galileo Galilei"],
            context: "En observant un lustre se balancer dans la cathédrale de Pise, Galilée remarque que la période ne dépend pas de l'amplitude (pour les petits angles). C'est la naissance de la chronométrie de précision."
        },
        problemStatement: {
            context: "Fabriquer une horloge qui bat exactement la seconde.",
            objective: "Trouver la relation T = 2π√(L/g).",
            analogy: "Une balançoire : peu importe si on va haut ou pas, le temps de l'aller-retour est presque le même."
        },
        steps: [
            {
                title: "1. Période",
                explanation: "Formule des petites oscillations.",
                code: `from sympy import symbols, pi, sqrt, solve
T, L, g = symbols('T L g')
eq = T - 2*pi*sqrt(L/g)
sol_L = solve(eq.subs({T: 2, g: 9.81}), L)
print(f"Longueur nécessaire (m) : {sol_L[0].evalf()}")`
            }
        ]
    },
    {
        id: 'phys-relativity',
        category: 'Physique',
        title: "Dilatation du Temps",
        level: "Université (L2)",
        domain: "Relativité Restreinte",
        icon: "⏳",
        difficulty: "Avancé",
        duration: "1h",
        description: "Calculer le vieillissement d'un astronaute voyageant à la vitesse de la lumière.",
        history: {
            year: "1905",
            people: ["Albert Einstein", "Hendrik Lorentz"],
            context: "Einstein postule que la vitesse de la lumière est constante pour tous. Conséquence choquante : le temps n'est pas absolu, il ralentit quand on va vite."
        },
        problemStatement: {
            context: "GPS : Les satellites vont vite et sont loin. Sans correction relativiste, le GPS serait faux de 10km par jour.",
            objective: "Calculer le facteur gamma.",
            analogy: "Imaginez regarder une horloge dans un train qui passe très vite. La lumière met plus de temps à vous atteindre, l'horloge semble tourner au ralenti."
        },
        steps: [
            {
                title: "1. Facteur de Lorentz",
                explanation: "γ = 1/√(1 − v²/c²).",
                code: `from sympy import symbols, sqrt
v, c = symbols('v c')
gamma = 1 / sqrt(1 - v**2/c**2)
print("Facteur de dilatation :")
display(gamma)`
            }
        ]
    },
    {
        id: 'phys-thermo-engine',
        category: 'Physique',
        title: "Moteur de Carnot",
        level: "Université (L1)",
        domain: "Thermodynamique",
        icon: "🚂",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer le rendement maximal théorique d'un moteur thermique.",
        history: {
            year: "1824",
            people: ["Sadi Carnot"],
            context: "Cherchant à améliorer les machines à vapeur anglaises, le jeune ingénieur français découvre qu'il y a une limite absolue au rendement, dépendant uniquement des températures."
        },
        problemStatement: {
            context: "Pourquoi le moteur de votre voiture chauffe-t-il autant ? Parce qu'on ne peut pas tout transformer en mouvement.",
            objective: "Rendement = 1 - Tc/Th.",
            analogy: "Une cascade d'eau : on récupère de l'énergie quand l'eau tombe de haut (chaud) vers le bas (froid). S'il n'y a pas de différence de hauteur, pas d'énergie."
        },
        steps: [
            {
                title: "1. Rendement",
                explanation: "Calcul en fonction des températures.",
                code: `from sympy import symbols
Tc, Th = symbols('Tc Th')
η = 1 − Tc/Th
print(f"Rendement max : {eta.subs({Th: 1000, Tc: 300})}")`
            }
        ]
    },
    {
        id: 'phys-quantum-particle',
        category: 'Physique',
        title: "Puits de Potentiel",
        level: "Université (L3)",
        domain: "Mécanique Quantique",
        icon: "⚛️",
        difficulty: "Expert",
        duration: "2h",
        description: "Résoudre l'équation de Schrödinger pour une particule dans une boîte.",
        history: {
            year: "1926",
            people: ["Erwin Schrödinger"],
            context: "Schrödinger formule l'équation d'onde qui décrit la matière non plus comme des billes, mais comme des ondes de probabilité. C'est la base de toute l'électronique moderne."
        },
        problemStatement: {
            context: "Comment les électrons sont-ils piégés dans un atome ?",
            objective: "Trouver les niveaux d'énergie quantifiés.",
            analogy: "Une corde de guitare : elle ne peut vibrer qu'à certaines fréquences précises (harmoniques), pas entre les deux."
        },
        steps: [
            {
                title: "1. Niveaux d'Énergie",
                explanation: "E_n = n^2 * h^2 / (8*m*L^2).",
                code: `from sympy import symbols, pi
n, h, m, L = symbols('n h m L')
E = n**2 * h**2 / (8*m*L**2)
print("Énergie du niveau n :")
display(E)`
            }
        ]
    },
    // NOUVEAUX PROJETS PHYSIQUE À INSÉRER APRÈS LE PUITS QUANTIQUE
    {
        id: 'phys-newton-laws',
        category: 'Physique',
        title: "Lois de Newton",
        level: "Lycée (Seconde)",
        domain: "Mécanique",
        icon: "🍎",
        difficulty: "Débutant",
        duration: "1h",
        description: "Comprendre F = ma et prédire le mouvement d'un objet.",
        history: {
            year: "1687",
            people: ["Isaac Newton"],
            context: "Newton unifie la physique terrestre et céleste dans ses Principia. La légende de la pomme symbolise l'universalité de la gravitation."
        },
        problemStatement: {
            context: "Calculer la force nécessaire pour pousser une voiture en panne.",
            objective: "Appliquer F = m·a pour trouver l'accélération.",
            analogy: "Plus c'est lourd, plus il faut pousser fort pour accélérer."
        },
        steps: [
            {
                title: "1. Deuxième Loi de Newton",
                explanation: "F = m·a (Force = masse × accélération).",
                code: `from sympy import symbols, solve
m, a, F = symbols('m a F')
# Voiture de 1000 kg, force de 500 N
eq = F - m*a
a_val = solve(eq.subs({F: 500, m: 1000}), a)[0]
print(f"Accélération : {a_val} m/s²")`
            },
            {
                title: "2. Mouvement Uniformément Accéléré",
                explanation: "v = v₀ + at, x = x₀ + v₀t + ½at².",
                code: `t, v0, x0 = symbols('t v0 x0')
v = v0 + a_val*t
x = x0 + v0*t + (a_val*t**2)/2
print(f"Vitesse : v(t) = {v}")
print(f"Position : x(t) = {x}")`
            }
        ]
    },
    {
        id: 'phys-energy-conservation',
        category: 'Physique',
        title: "Conservation de l'Énergie",
        level: "Lycée (Première)",
        domain: "Mécanique",
        icon: "⚡",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "L'énergie ne se perd pas, elle se transforme.",
        history: {
            year: "1847",
            people: ["Hermann von Helmholtz", "James Joule"],
            context: "Helmholtz formule le principe de conservation de l'énergie, unifiant chaleur, travail et mouvement. Fin du mythe du mouvement perpétuel."
        },
        problemStatement: {
            context: "Un enfant descend un toboggan. À quelle vitesse arrive-t-il en bas ?",
            objective: "Énergie potentielle → Énergie cinétique : mgh = ½mv².",
            analogy: "Comme une bille qui roule : plus elle part de haut, plus elle va vite en bas."
        },
        steps: [
            {
                title: "1. Conservation",
                explanation: "E_potentielle(haut) = E_cinétique(bas).",
                code: `from sympy import symbols, solve, sqrt
m, g, h, v = symbols('m g h v')
# mgh = (1/2)mv²
eq = m*g*h - (m*v**2)/2
v_final = solve(eq, v)[1]  # Solution positive
print(f"Vitesse finale : v = {v_final}")
# Pour h=5m, g=9.81
print(f"Exemple h=5m : v = {v_final.subs({g: 9.81, h: 5}).evalf()} m/s")`
            }
        ]
    },
    {
        id: 'phys-ohm-law',
        category: 'Physique',
        title: "Loi d'Ohm",
        level: "Lycée (Première)",
        domain: "Électricité",
        icon: "🔌",
        difficulty: "Débutant",
        duration: "45min",
        description: "Relation entre tension, courant et résistance.",
        history: {
            year: "1827",
            people: ["Georg Ohm"],
            context: "Ohm découvre la relation linéaire U = RI, fondement de toute l'électronique. Initialement critiqué, il sera finalement honoré (unité : l'ohm Ω)."
        },
        problemStatement: {
            context: "Calculer le courant dans une lampe branchée sur une prise.",
            objective: "U = R·I.",
            analogy: "L'eau dans un tuyau : la pression (tension) pousse l'eau (courant) à travers un tuyau étroit (résistance)."
        },
        steps: [
            {
                title: "1. Calcul du Courant",
                explanation: "I = U/R.",
                code: `from sympy import symbols
U, R, I = symbols('U R I')
# Lampe 220V, résistance 100Ω
I_val = U / R
print(f"Courant : I = {I_val.subs({U: 220, R: 100})} A")`
            },
            {
                title: "2. Puissance Dissipée",
                explanation: "P = U·I = R·I².",
                code: `P = U * I_val
print(f"Puissance : P = {P.subs({U: 220, R: 100})} W")`
            }
        ]
    },
    {
        id: 'phys-snell-law',
        category: 'Physique',
        title: "Réfraction de la Lumière",
        level: "Lycée (Seconde)",
        domain: "Optique",
        icon: "🌈",
        difficulty: "Débutant",
        duration: "1h",
        description: "Loi de Snell-Descartes : pourquoi une paille semble cassée dans l'eau.",
        history: {
            year: "1621",
            people: ["Willebrord Snell", "René Descartes"],
            context: "Snell découvre expérimentalement la loi, Descartes la publie. Essentielle pour les lentilles, fibres optiques et mirages."
        },
        problemStatement: {
            context: "Concevoir des lunettes ou des fibres optiques.",
            objective: "n₁·sin(θ₁) = n₂·sin(θ₂).",
            analogy: "Une voiture qui roule de l'asphalte au sable : elle tourne car une roue ralentit avant l'autre."
        },
        steps: [
            {
                title: "1. Angle de Réfraction",
                explanation: "Passage air → eau.",
                code: `from sympy import symbols, sin, asin, pi
n1, n2, theta1, theta2 = symbols('n1 n2 theta1 theta2')
# Air (n=1) → Eau (n=1.33), angle incident 30°
eq = n1*sin(theta1) - n2*sin(theta2)
theta2_val = asin((n1*sin(theta1))/n2)
result = theta2_val.subs({n1: 1, n2: 1.33, theta1: pi/6})
print(f"Angle réfracté : {result.evalf()} rad = {(result*180/pi).evalf()}°")`
            }
        ]
    },
    {
        id: 'phys-doppler-effect',
        category: 'Physique',
        title: "Effet Doppler",
        level: "Lycée (Terminale)",
        domain: "Ondes",
        icon: "🚑",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Pourquoi le son d'une ambulance change quand elle passe.",
        history: {
            year: "1842",
            people: ["Christian Doppler"],
            context: "Doppler prédit le décalage de fréquence pour les ondes. Confirmé pour le son, puis pour la lumière (redshift cosmologique)."
        },
        problemStatement: {
            context: "Mesurer la vitesse d'une voiture avec un radar.",
            objective: "f' = f·(v_son ± v_obs)/(v_son ∓ v_source).",
            analogy: "Des vagues sur un lac : si vous nagez vers elles, elles arrivent plus vite."
        },
        steps: [
            {
                title: "1. Fréquence Perçue",
                explanation: "Source qui s'approche.",
                code: `from sympy import symbols
f, v_son, v_source = symbols('f v_son v_source')
# Ambulance 500 Hz, vitesse 30 m/s, son à 340 m/s
f_prime = f * v_son / (v_son - v_source)
print(f"Fréquence perçue : {f_prime.subs({f: 500, v_son: 340, v_source: 30}).evalf()} Hz")`
            }
        ]
    },
    {
        id: 'phys-coulomb-law',
        category: 'Physique',
        title: "Loi de Coulomb",
        level: "Lycée (Terminale)",
        domain: "Électrostatique",
        icon: "⚡",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Force entre charges électriques.",
        history: {
            year: "1785",
            people: ["Charles-Augustin de Coulomb"],
            context: "Coulomb mesure précisément la force électrostatique avec une balance de torsion, établissant l'analogie avec la gravitation de Newton."
        },
        problemStatement: {
            context: "Calculer la force entre un proton et un électron dans un atome.",
            objective: "F = k·q₁q₂/r².",
            analogy: "Comme la gravitation, mais avec des charges au lieu de masses. Les opposés s'attirent."
        },
        steps: [
            {
                title: "1. Force Électrostatique",
                explanation: "k = 9×10⁹ N·m²/C².",
                code: `from sympy import symbols
k, q1, q2, r = symbols('k q1 q2 r')
F = k * q1 * q2 / r**2
# Proton-électron à 1 Angström
k_val = 9e9
q_e = 1.6e-19
r_val = 1e-10
F_val = F.subs({k: k_val, q1: q_e, q2: -q_e, r: r_val})
print(f"Force : {F_val} N (attractive)")`
            }
        ]
    },
    {
        id: 'phys-faraday-induction',
        category: 'Physique',
        title: "Induction Électromagnétique",
        level: "Université (L1)",
        domain: "Électromagnétisme",
        icon: "🧲",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Comment un aimant qui bouge crée de l'électricité.",
        history: {
            year: "1831",
            people: ["Michael Faraday"],
            context: "Faraday découvre l'induction, base des générateurs électriques et transformateurs. Révolution industrielle de l'électricité."
        },
        problemStatement: {
            context: "Concevoir un générateur de vélo (dynamo).",
            objective: "ε = -dΦ/dt (Loi de Faraday-Lenz).",
            analogy: "Faire tourner une manivelle pour créer de l'électricité."
        },
        steps: [
            {
                title: "1. Flux Magnétique",
                explanation: "Φ = B·A·cos(ωt).",
                code: `from sympy import symbols, cos, diff, pi
B, A, omega, t = symbols('B A omega t')
Phi = B * A * cos(omega * t)
print(f"Expression du flux : {Phi}")`
            },
            {
                title: "2. Force Électromotrice",
                explanation: "ε = -dΦ/dt.",
                code: `epsilon = -diff(Phi, t)
print(f"FEM induite : {epsilon}")
# Exemple pour une dynamo de vélo (f=10Hz)
f_val = 10
omega_val = 2 * pi * f_val
val = epsilon.subs({B: 0.5, A: 0.01, omega: omega_val, t: 0.1})
print(f"Tension à t=0.1s : {val.evalf()} V")`
            }
        ]
    },
    {
        id: 'phys-archimedes',
        category: 'Physique',
        title: "Poussée d'Archimède",
        level: "Lycée (Seconde)",
        domain: "Mécanique des Fluides",
        icon: "🛳️",
        difficulty: "Débutant",
        duration: "45min",
        description: "Pourquoi les bateaux flottent.",
        history: {
            year: "-250",
            people: ["Archimède"],
            context: "Archimède découvre le principe dans son bain (Eurêka !). Fondement de la navigation et de l'aéronautique."
        },
        problemStatement: {
            context: "Concevoir un bateau qui ne coule pas.",
            objective: "Poussée = ρ_fluide·V_immergé·g.",
            analogy: "Un ballon dans l'eau : il remonte car l'eau pousse plus fort que le poids du ballon."
        },
        steps: [
            {
                title: "1. Calcul de la Poussée",
                explanation: "F_Archimède = ρ·V·g.",
                code: `from sympy import symbols
rho, V, g = symbols('rho V g')
F_A = rho * V * g
# Cube de 1m³ dans l'eau (ρ=1000 kg/m³)
print(f"Poussée : {F_A.subs({rho: 1000, V: 1, g: 9.81})} N")`
            }
        ]
    },
    {
        id: 'phys-radioactivity',
        category: 'Physique',
        title: "Décroissance Radioactive",
        level: "Lycée (Terminale)",
        domain: "Physique Nucléaire",
        icon: "☢️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Demi-vie et datation au carbone 14.",
        history: {
            year: "1896",
            people: ["Henri Becquerel", "Marie Curie"],
            context: "Becquerel découvre la radioactivité par hasard. Marie Curie isole le radium et le polonium, révolutionnant la physique et la médecine."
        },
        problemStatement: {
            context: "Dater un fossile ou un artefact archéologique.",
            objective: "N(t) = N₀·e^(-λt).",
            analogy: "Comme des grains de pop-corn qui éclatent : au début beaucoup, puis de moins en moins."
        },
        steps: [
            {
                title: "1. Loi de Décroissance",
                explanation: "N(t) = N₀·exp(-λt).",
                code: `from sympy import symbols, exp, log, solve
N0, lam, t, t_half = symbols('N0 lambda t t_half')
N = N0 * exp(-lam * t)
# Demi-vie : N(t_1/2) = N0/2
eq = N0/2 - N0*exp(-lam*t_half)
t_half_expr = solve(eq, t_half)[0]
print(f"Demi-vie : t_1/2 = {t_half_expr}")`
            },
            {
                title: "2. Datation Carbone 14",
                explanation: "t_1/2 = 5730 ans.",
                code: `# Si on trouve 25% du C14 initial
lam_val = log(2) / 5730
t_age = -log(0.25) / lam_val
print(f"Âge de l'échantillon : {t_age.evalf()} ans")`
            }
        ]
    },
    {
        id: 'phys-photoelectric',
        category: 'Physique',
        title: "Effet Photoélectrique",
        level: "Université (L2)",
        domain: "Physique Quantique",
        icon: "💡",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Comment la lumière arrache des électrons (Prix Nobel d'Einstein).",
        history: {
            year: "1905",
            people: ["Albert Einstein"],
            context: "Einstein explique l'effet photoélectrique en postulant que la lumière est composée de quanta (photons). Preuve de la dualité onde-corpuscule, Prix Nobel 1921."
        },
        problemStatement: {
            context: "Comprendre le fonctionnement des panneaux solaires et capteurs photo.",
            objective: "E_photon = hν = W + E_cinétique.",
            analogy: "Comme des boules de billard : un photon frappe un électron et l'éjecte."
        },
        steps: [
            {
                title: "1. Énergie du Photon",
                explanation: "E = h·ν (h = constante de Planck).",
                code: `from sympy import symbols
h, nu, W, E_k = symbols('h nu W E_k')
# Lumière UV : λ=300nm, ν=c/λ
c = 3e8  # m/s
lam = 300e-9  # m
nu_val = c / lam
h_val = 6.626e-34  # J·s
E_photon = h_val * nu_val
print(f"Énergie du photon : {E_photon} J = {E_photon/1.6e-19} eV")`
            },
            {
                title: "2. Énergie Cinétique de l'Électron",
                explanation: "E_k = hν - W (W = travail de sortie).",
                code: `W_val = 4.5 * 1.6e-19  # 4.5 eV en Joules
E_k_val = E_photon - W_val
print(f"Énergie cinétique : {E_k_val} J")
if E_k_val > 0:
    print("✅ L'électron est éjecté")
else:
    print("❌ Pas assez d'énergie")`
            }
        ]
    },
    // NOUVEAUX PROJETS PHYSIQUE
    {
        id: 'phys-bernoulli',
        category: 'Physique',
        title: "Équation de Bernoulli",
        level: "Université (L1)",
        domain: "Mécanique des Fluides",
        icon: "💨",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Comprendre comment les avions volent grâce à la différence de pression.",
        history: {
            year: "1738",
            people: ["Daniel Bernoulli"],
            context: "Bernoulli publie 'Hydrodynamica', posant les bases de la mécanique des fluides. Son équation explique aussi bien les ailes d'avion que le fonctionnement d'un brumisateur."
        },
        problemStatement: {
            context: "Calculer la force de portance sur une aile d'avion.",
            objective: "$P + \frac{1}{2}\rho v^2 + \rho gh = \text{constante}$.",
            analogy: "Comme une foule qui court : plus ils vont vite, moins ils peuvent pousser sur les côtés."
        },
        steps: [
            {
                title: "1. Calcul de Différence de Pression",
                explanation: "Lien entre vitesse et pression.",
                code: `from sympy import symbols
P1, P2, v1, v2, rho = symbols('P1 P2 v1 v2 rho')
# Sur une aile : v_haut > v_bas -> P_bas > P_haut
rho_air = 1.225  # kg/m³
v_bas = 50  # m/s
v_haut = 60  # m/s
delta_P = 0.5 * rho_air * (v_haut**2 - v_bas**2)
print(f"Différence de pression : {delta_P} Pa")`
            }
        ]
    },
    {
        id: 'phys-ideal-gas',
        category: 'Physique',
        title: "Loi des Gaz Parfaits",
        level: "Lycée (Terminale)",
        domain: "Thermodynamique",
        icon: "🎈",
        difficulty: "Débutant",
        duration: "1h",
        description: "Relation entre pression, volume et température d'un gaz.",
        history: {
            year: "1834",
            people: ["Émile Clapeyron"],
            context: "Clapeyron combine les lois de Boyle, Charles et Gay-Lussac en une seule équation d'état, pilier de la thermodynamique."
        },
        problemStatement: {
            context: "Prédire le volume d'un ballon qui monte en altitude.",
            objective: "$PV = nRT$.",
            analogy: "Des autos-tamponneuses : plus elles vont vite (T) ou plus il y en a (n), plus elles cognent les bords (P)."
        },
        steps: [
            {
                title: "1. Calcul du Volume",
                explanation: "V = nRT/P.",
                code: `from sympy import symbols
P, V, n, R, T = symbols('P V n R T')
# 1 mole à 25°C (298K) et 1 atm (101325 Pa)
vals = {n: 1, R: 8.314, T: 298, P: 101325}
V_val = n * R * T / P
print(f"Volume molaire : {V_val.subs(vals).evalf() * 1000} Litres")`
            }
        ]
    },
    {
        id: 'phys-biot-savart',
        category: 'Physique',
        title: "Loi de Biot-Savart",
        level: "Université (L2)",
        domain: "Électromagnétisme",
        icon: "🧲",
        difficulty: "Avancé",
        duration: "2h",
        description: "Calculer le champ magnétique créé par un courant.",
        history: {
            year: "1820",
            people: ["Jean-Baptiste Biot", "Félix Savart"],
            context: "Juste après la découverte d'Oersted, Biot et Savart quantifient mathématiquement le lien entre électricité et magnétisme."
        },
        problemStatement: {
            context: "Calculer le champ magnétique au centre d'une bobine.",
            objective: "$dB = \frac{\mu_0 I}{4\pi} \frac{dl \times \hat{r}}{r^2}$.",
            analogy: "Comme la chaleur d'un feu : plus on est loin, moins on la sent. Plus le feu est gros, plus il chauffe."
        },
        steps: [
            {
                title: "1. Champ au centre d'une boucle",
                explanation: "B = μ₀I / 2R.",
                code: `from sympy import symbols, pi
mu0, I, R = symbols('mu0 I R')
B = (mu0 * I) / (2 * R)
# Courant 10A, rayon 5cm
mu0_val = 4 * pi * 1e-7
print(f"Champ magnétique : {B.subs({mu0: mu0_val, I: 10, R: 0.05}).evalf()} Tesla")`
            }
        ]
    },
    {
        id: 'phys-quantum-oscillator',
        category: 'Physique',
        title: "Oscillateur Harmonique Quantique",
        level: "Master",
        domain: "Physique Quantique",
        icon: "⚛️",
        difficulty: "Expert",
        duration: "2h30",
        description: "Le modèle fondamental pour les vibrations moléculaires.",
        history: {
            year: "1925",
            people: ["Erwin Schrödinger"],
            context: "Schrödinger résout son équation pour un potentiel parabolique, découvrant que l'énergie est quantifiée même pour un simple ressort."
        },
        problemStatement: {
            context: "Modéliser la vibration d'une molécule de dihydrogène.",
            objective: "$E_n = \hbar\omega (n + 1/2)$.",
            analogy: "Une échelle dont les barreaux sont espacés régulièrement, mais le premier barreau n'est pas au sol."
        },
        steps: [
            {
                title: "1. Niveaux d'Énergie",
                explanation: "Quantification de l'énergie.",
                code: `from sympy import symbols, Rational
n, hbar, omega = symbols('n hbar omega')
En = hbar * omega * (n + Rational(1, 2))
print("Énergie du niveau n :")
En`
            }
        ]
    },
    {
        id: 'phys-interference',
        category: 'Physique',
        title: "Interférences Lumineuses",
        level: "Université (L2)",
        domain: "Optique Ondulatoire",
        icon: "🌊",
        difficulty: "Avancé",
        duration: "2h",
        description: "Les franges d'interférence de Young : la preuve que la lumière est une onde.",
        history: {
            year: "1801",
            people: ["Thomas Young"],
            context: "Young réalise sa célèbre expérience des fentes, brisant des siècles de certitude sur la nature purement corpusculaire (Newton) de la lumière."
        },
        problemStatement: {
            context: "Prédire l'espacement des franges sur un écran.",
            objective: "$i = \frac{\lambda D}{a}$.",
            analogy: "Deux cailloux jetés dans l'eau : les vagues s'additionnent ou s'annulent."
        },
        steps: [
            {
                title: "1. Interfrange",
                explanation: "Distance entre deux maximums de lumière.",
                code: `from sympy import symbols
lam, D, a = symbols('lambda D a')
i = (lam * D) / a
# Laser rouge λ=633nm, D=2m, a=0.2mm
vals = {lam: 633e-9, D: 2, a: 0.0002}
print(f"Espacement des franges : {i.subs(vals).evalf() * 1000} mm")`
            }
        ]
    },


    // ==================================================================================
    // 🧪 CHIMIE (15 projets)
    // ==================================================================================
    {
        id: 'chem-ph-titration',
        category: 'Chimie',
        title: "Titrage Acide-Base",
        level: "Lycée (Terminale)",
        domain: "Chimie des Solutions",
        icon: "🧪",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Simuler la courbe de pH lors d'un dosage.",
        history: {
            year: "1909",
            people: ["Søren Sørensen"],
            context: "Travaillant pour la brasserie Carlsberg, Sørensen invente l'échelle pH pour standardiser la qualité de la bière. Cette échelle logarithmique révolutionne la chimie analytique."
        },
        problemStatement: {
            context: "Vérifier la concentration d'un acide inconnu en laboratoire.",
            objective: "Tracer pH = f(Volume versé).",
            analogy: "Neutraliser l'acidité d'un plat en ajoutant du bicarbonate petit à petit."
        },
        steps: [
            {
                title: "1. Équation de Henderson-Hasselbalch",
                explanation: "pH = pKa + log₁₀([A-]/[AH]).",
                code: `from sympy import symbols, log
pKa, A_minus, AH = symbols('pKa A_minus AH')
pH = pKa + log(A_minus / AH, 10)
# Pour un mélange équimolaire (A- = AH), log(1)=0 => pH = pKa
result = pH.subs({pKa: 4.75, A_minus: 0.1, AH: 0.1})
print(f"pH du tampon : {result}")`
            }
        ]
    },
    {
        id: 'chem-equilibrium',
        category: 'Chimie',
        title: "Équilibre Chimique",
        level: "Université (L1)",
        domain: "Thermodynamique Chimique",
        icon: "⚖️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer les concentrations à l'équilibre avec la constante K.",
        history: {
            year: "1864",
            people: ["Cato Guldberg", "Peter Waage"],
            context: "Les deux chimistes norvégiens formulent la loi d'action de masse, montrant que l'équilibre chimique suit des lois mathématiques précises."
        },
        problemStatement: {
            context: "Prédire le rendement d'une synthèse industrielle.",
            objective: "Résoudre K = [C]^c [D]^d / [A]^a [B]^b.",
            analogy: "Un marché : le prix s'ajuste jusqu'à ce que l'offre égale la demande."
        },
        steps: [
            {
                title: "1. Constante d'Équilibre",
                explanation: "Calcul de K à partir des concentrations.",
                code: `from sympy import symbols, solve
A, B, C, D, K = symbols('A B C D K')
# A + B <=> C + D, K = [C][D]/[A][B]
eq = K - (C * D) / (A * B)
# Si K=10, A=1, B=1, et on forme x mol de C et D (D=C)
x = symbols('x')
eq_x = eq.subs({C: x, D: x, A: 1-x, B: 1-x, K: 10})
sol_x = solve(eq_x, x)
print(f"Avancement x à l'équilibre : {sol_x[0].evalf()}")`
            }
        ]
    },
    {
        id: 'chem-kinetics',
        category: 'Chimie',
        title: "Cinétique Chimique",
        level: "Université (L1)",
        domain: "Chimie Physique",
        icon: "⏱️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Déterminer l'ordre d'une réaction et sa vitesse.",
        history: {
            year: "1889",
            people: ["Svante Arrhenius"],
            context: "Arrhenius établit la relation entre la vitesse de réaction et la température, expliquant pourquoi les aliments se conservent mieux au froid."
        },
        problemStatement: {
            context: "Savoir combien de temps prend un médicament pour agir.",
            objective: "Intégrer les lois de vitesse.",
            analogy: "La vitesse à laquelle une foule sort d'un stade dépend du nombre de portes."
        },
        steps: [
            {
                title: "1. Loi de Vitesse",
                explanation: "v = k[A]^n.",
                code: `from sympy import symbols, Function, dsolve, Eq
t, k = symbols('t k')
A = Function('A')(t)
# Ordre 1 : dA/dt = -k*A
eq = Eq(A.diff(t), -k*A)
sol = dsolve(eq, A)
print(f"Loi cinétique : {sol}")`
            }
        ]
    },
    {
        id: 'chem-electrochemistry',
        category: 'Chimie',
        title: "Pile Électrochimique",
        level: "Lycée (Terminale)",
        domain: "Électrochimie",
        icon: "🔋",
        difficulty: "Débutant",
        duration: "1h",
        description: "Calculer la tension d'une pile avec l'équation de Nernst.",
        history: {
            year: "1889",
            people: ["Walther Nernst"],
            context: "Nernst établit la relation entre potentiel électrique et concentration, permettant de comprendre comment fonctionnent les batteries."
        },
        problemStatement: {
            context: "Concevoir une batterie pour un téléphone portable.",
            objective: "E = E° - (RT/nF) * ln(Q).",
            analogy: "Une cascade d'eau : plus la différence de hauteur est grande, plus l'énergie est forte."
        },
        steps: [
            {
                title: "1. Équation de Nernst",
                explanation: "Calcul du potentiel.",
                code: `from sympy import symbols, log
E0, R, T, n, F, Q = symbols('E0 R T n F Q')
E = E0 - (R*T / (n*F)) * log(Q)
E`
            }
        ]
    },
    {
        id: 'chem-thermochemistry',
        category: 'Chimie',
        title: "Enthalpie de Réaction",
        level: "Université (L1)",
        domain: "Thermochimie",
        icon: "🔥",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer la chaleur dégagée par une combustion.",
        history: {
            year: "1840",
            people: ["Germain Hess"],
            context: "Hess découvre que la chaleur d'une réaction ne dépend que des états initial et final, pas du chemin. Loi fondamentale pour l'énergétique."
        },
        problemStatement: {
            context: "Dimensionner un système de chauffage au gaz.",
            objective: "ΔH = Σ ΔHf(produits) - Σ ΔHf(réactifs).",
            analogy: "Monter une montagne : peu importe le chemin, la différence d'altitude est la même."
        },
        steps: [
            {
                title: "1. Loi de Hess",
                explanation: "Calcul de l'enthalpie.",
                code: `from sympy import symbols
DH_prod, DH_react = symbols('DH_prod DH_react')
DH_reaction = DH_prod - DH_react
DH_reaction`
            }
        ]
    },
    // NOUVEAUX PROJETS CHIMIE À INSÉRER APRÈS THERMOCHIMIE
    {
        id: 'chem-stoichiometry',
        category: 'Chimie',
        title: "Stœchiométrie",
        level: "Lycée (Seconde)",
        domain: "Chimie Générale",
        icon: "⚖️",
        difficulty: "Débutant",
        duration: "1h",
        description: "Équilibrer des équations chimiques et calculer les quantités de réactifs.",
        history: {
            year: "1789",
            people: ["Antoine Lavoisier"],
            context: "Lavoisier énonce la loi de conservation de la masse : 'Rien ne se perd, rien ne se crée, tout se transforme'. Fondement de la chimie quantitative moderne."
        },
        problemStatement: {
            context: "Calculer la quantité d'oxygène nécessaire pour brûler du méthane (gaz naturel).",
            objective: "Équilibrer CH₄ + O₂ → CO₂ + H₂O.",
            analogy: "Comme une recette de cuisine : pour 1 œuf, il faut 100g de farine. Pas plus, pas moins."
        },
        steps: [
            {
                title: "1. Équilibrage",
                explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O.",
                code: `from sympy import symbols, Eq, solve
# Coefficients stœchiométriques
a, b, c, d = symbols('a b c d', integer=True, positive=True)
# Conservation des atomes
# C: a = c
# H: 4a = 2d
# O: 2b = 2c + d
eq1 = Eq(a, c)
eq2 = Eq(4*a, 2*d)
eq3 = Eq(2*b, 2*c + d)
# On fixe a=1
sol = solve([eq1, eq2, eq3, Eq(a, 1)], [a, b, c, d])
print(f"Équation équilibrée : {sol[a]}CH₄ + {sol[b]}O₂ → {sol[c]}CO₂ + {sol[d]}H₂O")`
            },
            {
                title: "2. Calcul de Masse",
                explanation: "Pour 16g de CH₄, combien d'O₂ ?",
                code: `# Masses molaires
M_CH4 = 16  # g/mol
M_O2 = 32   # g/mol
n_CH4 = 16 / M_CH4  # 1 mole
n_O2 = 2 * n_CH4    # Rapport 1:2
m_O2 = n_O2 * M_O2
print(f"Masse d'O₂ nécessaire : {m_O2}g")`
            }
        ]
    },
    {
        id: 'chem-acid-base-equilibrium',
        category: 'Chimie',
        title: "Équilibre Acide-Base",
        level: "Lycée (Terminale)",
        domain: "Chimie des Solutions",
        icon: "🧪",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer le pH d'une solution tampon.",
        history: {
            year: "1923",
            people: ["Johannes Brønsted", "Thomas Lowry"],
            context: "Brønsted et Lowry définissent les acides comme donneurs de protons (H⁺) et les bases comme accepteurs. Généralisation de la théorie d'Arrhenius."
        },
        problemStatement: {
            context: "Fabriquer une solution tampon pour stabiliser le pH du sang.",
            objective: "Utiliser l'équation de Henderson-Hasselbalch.",
            analogy: "Comme un amortisseur de voiture : absorbe les chocs (ajouts d'acide ou de base)."
        },
        steps: [
            {
                title: "1. Équation de Henderson-Hasselbalch",
                explanation: "pH = pKa + log([A⁻]/[HA]).",
                code: `from sympy import symbols, log
pKa, A_minus, HA = symbols('pKa A_minus HA')
pH = pKa + log(A_minus / HA, 10)
# Tampon acétique : pKa=4.76, [CH₃COO⁻]=0.1M, [CH₃COOH]=0.1M
pH_val = pH.subs({pKa: 4.76, A_minus: 0.1, HA: 0.1})
print(f"pH du tampon : {pH_val.evalf()}")`
            },
            {
                title: "2. Capacité Tampon",
                explanation: "Plus les concentrations sont élevées, mieux ça tamponne.",
                code: `# Ajout de 0.01 mol de HCl à 1L de tampon
HCl_added = 0.01
new_HA = 0.1 + HCl_added
new_A_minus = 0.1 - HCl_added
new_pH = pKa + log(new_A_minus / new_HA, 10)
print(f"Nouveau pH : {new_pH.subs(pKa, 4.76).evalf()}")`
            }
        ]
    },
    {
        id: 'chem-redox',
        category: 'Chimie',
        title: "Réactions d'Oxydoréduction",
        level: "Lycée (Première)",
        domain: "Électrochimie",
        icon: "🔋",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Comprendre les piles et l'électrolyse.",
        history: {
            year: "1836",
            people: ["John Daniell"],
            context: "Daniell invente la pile Zn/Cu, première source d'électricité stable. Révolution pour le télégraphe et l'électrochimie."
        },
        problemStatement: {
            context: "Concevoir une pile pour alimenter un appareil portable.",
            objective: "Calculer la tension de la pile avec l'équation de Nernst.",
            analogy: "Comme une cascade : les électrons 'tombent' du zinc vers le cuivre, créant un courant."
        },
        steps: [
            {
                title: "1. Demi-Réactions",
                explanation: "Oxydation : Zn → Zn²⁺ + 2e⁻, Réduction : Cu²⁺ + 2e⁻ → Cu.",
                code: `# Potentiels standard
E0_Zn = -0.76  # V
E0_Cu = 0.34   # V
E0_pile = E0_Cu - E0_Zn
print(f"Tension standard de la pile : {E0_pile}V")`
            },
            {
                title: "2. Équation de Nernst",
                explanation: "E = E⁰ - (RT/nF)·ln(Q).",
                code: `from sympy import symbols, log
R, T, n, F = 8.314, 298, 2, 96485
Zn2, Cu2 = symbols('Zn2 Cu2')
Q = Zn2 / Cu2
E = E0_pile - (R*T/(n*F)) * log(Q)
# [Zn²⁺]=0.01M, [Cu²⁺]=1M
E_val = E.subs({Zn2: 0.01, Cu2: 1})
print(f"Tension réelle : {E_val.evalf()}V")`
            }
        ]
    },
    {
        id: 'chem-organic-nomenclature',
        category: 'Chimie',
        title: "Nomenclature Organique",
        level: "Lycée (Terminale)",
        domain: "Chimie Organique",
        icon: "🧬",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Nommer les molécules organiques selon les règles IUPAC.",
        history: {
            year: "1892",
            people: ["IUPAC"],
            context: "L'Union Internationale de Chimie Pure et Appliquée standardise la nomenclature pour éviter la confusion entre chimistes du monde entier."
        },
        problemStatement: {
            context: "Identifier un médicament ou un polluant à partir de sa formule.",
            objective: "Appliquer les règles IUPAC : chaîne principale, ramifications, fonctions.",
            analogy: "Comme une adresse postale : pays, ville, rue, numéro. Chaque partie a sa place."
        },
        steps: [
            {
                title: "1. Alcanes",
                explanation: "Chaîne carbonée saturée : méth-, éth-, prop-, but-.",
                code: `# Exemple : CH₃-CH₂-CH₂-CH₃
carbones = 4
prefixes = {1: 'méth', 2: 'éth', 3: 'prop', 4: 'but', 5: 'pent', 6: 'hex'}
nom = prefixes[carbones] + 'ane'
print(f"Nom IUPAC : {nom}")  # butane`
            },
            {
                title: "2. Avec Ramifications",
                explanation: "2-méthylpropane (isobutane).",
                code: `# CH₃-CH(CH₃)-CH₃
chaine_principale = 3  # prop
ramification = 'méthyl'
position = 2
nom_ramifie = f"{position}-{ramification}{prefixes[chaine_principale]}ane"
print(f"Nom IUPAC : {nom_ramifie}")`
            }
        ]
    },
    {
        id: 'chem-solubility',
        category: 'Chimie',
        title: "Solubilité & Précipitation",
        level: "Université (L1)",
        domain: "Chimie des Solutions",
        icon: "💎",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Prédire si un précipité va se former.",
        history: {
            year: "1888",
            people: ["Walther Nernst"],
            context: "Nernst établit la relation entre solubilité et produit de solubilité (Ks), permettant de prédire les précipitations."
        },
        problemStatement: {
            context: "Traiter l'eau dure en précipitant le calcaire.",
            objective: "Comparer Q (quotient réactionnel) et Ks.",
            analogy: "Comme du sucre dans le café : au-delà d'une limite, il ne se dissout plus et précipite."
        },
        steps: [
            {
                title: "1. Produit de Solubilité",
                explanation: "AgCl(s) ⇌ Ag⁺ + Cl⁻, Ks = [Ag⁺][Cl⁻].",
                code: `from sympy import symbols
Ag, Cl, Ks = symbols('Ag Cl Ks')
# Ks(AgCl) = 1.8×10⁻¹⁰
Ks_val = 1.8e-10
# [Ag⁺]=10⁻⁵M, [Cl⁻]=10⁻⁴M
Q = 1e-5 * 1e-4
print(f"Q = {Q}")
print(f"Ks = {Ks_val}")
if Q > Ks_val:
    print("✅ Précipitation de AgCl")
else:
    print("❌ Pas de précipité")`
            }
        ]
    },
    {
        id: 'chem-catalysis',
        category: 'Chimie',
        title: "Catalyse",
        level: "Université (L2)",
        domain: "Cinétique Chimique",
        icon: "⚗️",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Accélérer une réaction sans être consommé.",
        history: {
            year: "1835",
            people: ["Jöns Jacob Berzelius"],
            context: "Berzelius invente le terme 'catalyse'. Aujourd'hui, 90% des procédés industriels utilisent des catalyseurs (pétrochimie, pharmacie)."
        },
        problemStatement: {
            context: "Optimiser la synthèse de l'ammoniac (engrais) avec le procédé Haber-Bosch.",
            objective: "Réduire l'énergie d'activation Ea.",
            analogy: "Comme un raccourci en montagne : on arrive au même sommet, mais plus vite."
        },
        steps: [
            {
                title: "1. Loi d'Arrhenius",
                explanation: "k = A·exp(-Ea/RT).",
                code: `from sympy import symbols, exp
A, Ea, R, T = symbols('A Ea R T')
k = A * exp(-Ea / (R*T))
# Sans catalyseur : Ea=100 kJ/mol
# Avec catalyseur : Ea=50 kJ/mol
R_val = 8.314
T_val = 298
k_sans = exp(-100000 / (R_val*T_val))
k_avec = exp(-50000 / (R_val*T_val))
print(f"Accélération : facteur {(k_avec/k_sans).evalf()}")`
            }
        ]
    },
    {
        id: 'chem-lewis-structures',
        category: 'Chimie',
        title: "Structures de Lewis",
        level: "Lycée (Première)",
        domain: "Liaisons Chimiques",
        icon: "🔗",
        difficulty: "Débutant",
        duration: "1h",
        description: "Représenter les liaisons covalentes et doublets non liants.",
        history: {
            year: "1916",
            people: ["Gilbert Lewis"],
            context: "Lewis propose que les atomes partagent des électrons pour atteindre la règle de l'octet. Révolution dans la compréhension des liaisons."
        },
        problemStatement: {
            context: "Prédire la géométrie d'une molécule (H₂O, CO₂, NH₃).",
            objective: "Dessiner la structure de Lewis et appliquer VSEPR.",
            analogy: "Comme des aimants qui se repoussent : les doublets d'électrons s'éloignent au maximum."
        },
        steps: [
            {
                title: "1. Règle de l'Octet",
                explanation: "Chaque atome veut 8 électrons de valence.",
                code: `# Exemple : H₂O
# O : 6 électrons de valence
# H : 1 électron chacun
# Total : 6 + 1 + 1 = 8 électrons
electrons_valence = {'O': 6, 'H': 1}
total = electrons_valence['O'] + 2*electrons_valence['H']
print(f"Électrons de valence : {total}")
print("Structure : H-O-H avec 2 doublets non liants sur O")`
            },
            {
                title: "2. Géométrie VSEPR",
                explanation: "4 doublets → tétraédrique → coudée (2 liants + 2 non liants).",
                code: `# H₂O : AX₂E₂ → coudée, angle ≈104.5°
print("Géométrie de H₂O : coudée")
print("Angle H-O-H : ~104.5°")`
            }
        ]
    },
    {
        id: 'chem-polymers',
        category: 'Chimie',
        title: "Chimie des Polymères",
        level: "Université (L2)",
        domain: "Chimie Organique",
        icon: "🧵",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Synthèse de plastiques et macromolécules.",
        history: {
            year: "1907",
            people: ["Leo Baekeland"],
            context: "Baekeland invente la bakélite, premier plastique synthétique. Début de l'ère des polymères qui transforme l'industrie mondiale."
        },
        problemStatement: {
            context: "Fabriquer du nylon, du PET (bouteilles), du polystyrène.",
            objective: "Polymérisation : n monomères → (monomère)ₙ.",
            analogy: "Comme un collier de perles : on enfile des perles identiques pour faire une longue chaîne."
        },
        steps: [
            {
                title: "1. Degré de Polymérisation",
                explanation: "n = M_polymère / M_monomère.",
                code: `# Polyéthylène : (C₂H₄)ₙ
M_monomere = 28  # g/mol (éthylène)
M_polymere = 280000  # g/mol (exemple)
n = M_polymere / M_monomere
print(f"Degré de polymérisation : n = {n}")
print(f"Le polymère contient {int(n)} unités d'éthylène")`
            }
        ]
    },
    {
        id: 'chem-spectroscopy',
        category: 'Chimie',
        title: "Spectroscopie UV-Visible",
        level: "Université (L2)",
        domain: "Chimie Analytique",
        icon: "🌈",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Déterminer la concentration d'une solution colorée.",
        history: {
            year: "1852",
            people: ["August Beer", "Johann Lambert"],
            context: "Beer et Lambert établissent la loi reliant absorbance et concentration, base de la spectrophotométrie moderne."
        },
        problemStatement: {
            context: "Doser le fer dans le sang ou les nitrates dans l'eau.",
            objective: "Loi de Beer-Lambert : A = ε·l·c.",
            analogy: "Plus il y a de colorant dans l'eau, moins la lumière passe."
        },
        steps: [
            {
                title: "1. Loi de Beer-Lambert",
                explanation: "A = ε·l·c (Absorbance = coefficient × longueur × concentration).",
                code: `from sympy import symbols
epsilon, l, c, A = symbols('epsilon l c A')
# ε = 1000 L·mol⁻¹·cm⁻¹, l = 1 cm, A = 0.5
c_val = A / (epsilon * l)
print(f"Concentration : c = {c_val.subs({A: 0.5, epsilon: 1000, l: 1})} mol/L")`
            },
            {
                title: "2. Droite d'Étalonnage",
                explanation: "Mesurer A pour plusieurs concentrations connues.",
                code: `# Points : (c, A)
concentrations = [0.001, 0.002, 0.003, 0.004, 0.005]
absorbances = [0.1, 0.2, 0.3, 0.4, 0.5]
# Régression linéaire : A = a·c + b
from sympy import symbols
# Pente a = ε·l
a = (absorbances[-1] - absorbances[0]) / (concentrations[-1] - concentrations[0])
print(f"Pente (ε·l) : {a} L/mol")`
            }
        ]
    },
    {
        id: 'chem-green-chemistry',
        category: 'Chimie',
        title: "Chimie Verte",
        level: "Université (L3)",
        domain: "Chimie Durable",
        icon: "♻️",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Optimiser le rendement et minimiser les déchets.",
        history: {
            year: "1998",
            people: ["Paul Anastas", "John Warner"],
            context: "Les 12 principes de la chimie verte révolutionnent l'industrie chimique vers la durabilité et la réduction de l'impact environnemental."
        },
        problemStatement: {
            context: "Concevoir une synthèse pharmaceutique éco-responsable.",
            objective: "Maximiser l'économie d'atomes et le facteur E.",
            analogy: "Comme cuisiner sans gaspillage : utiliser tous les ingrédients, rien ne va à la poubelle."
        },
        steps: [
            {
                title: "1. Économie d'Atomes",
                explanation: "EA = (M_produit / Σ M_réactifs) × 100%.",
                code: `# Synthèse : A + B → C + D (déchets)
M_A, M_B, M_C, M_D = 100, 50, 120, 30
EA = (M_C / (M_A + M_B)) * 100
print(f"Économie d'atomes : {EA}%")
print(f"Déchets : {M_D}g pour {M_C}g de produit")`
            },
            {
                title: "2. Facteur E",
                explanation: "E = masse_déchets / masse_produit.",
                code: `E = M_D / M_C
print(f"Facteur E : {E}")
print("Objectif chimie verte : E < 1")`
            }
        ]
    },


    // ==================================================================================
    // 🧬 BIOLOGIE (15 projets)
    // ==================================================================================
    {
        id: 'bio-pop-growth',
        category: 'Biologie',
        title: "Croissance Bactérienne",
        level: "Université (L1)",
        domain: "Écologie Mathématique",
        icon: "🧫",
        difficulty: "Débutant",
        duration: "1h",
        description: "Modéliser la croissance exponentielle et logistique d'une population.",
        history: {
            year: "1838",
            people: ["Pierre-François Verhulst"],
            context: "Verhulst améliore le modèle de Malthus en introduisant la capacité de charge, expliquant pourquoi les populations ne croissent pas indéfiniment."
        },
        problemStatement: {
            context: "Prévoir l'évolution d'une épidémie ou d'une culture de bactéries.",
            objective: "Résoudre dN/dt = rN(1 - N/K).",
            analogy: "Des lapins qui se reproduisent jusqu'à ce qu'il n'y ait plus assez d'herbe."
        },
        steps: [
            {
                title: "1. Modèle de Verhulst",
                explanation: "Équation logistique.",
                code: `from sympy import Function, dsolve, Eq, symbols
t, r, K = symbols('t r K')
N = Function('N')(t)
eq = Eq(N.diff(t), r*N*(1 - N/K))
sol = dsolve(eq, N)
print(f"Solution générale N(t) : {sol}")`
            }
        ]
    },
    {
        id: 'bio-enzyme-kinetics',
        category: 'Biologie',
        title: "Cinétique Enzymatique",
        level: "Université (L2)",
        domain: "Biochimie",
        icon: "🧬",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Modéliser la vitesse d'une réaction catalysée par une enzyme.",
        history: {
            year: "1913",
            people: ["Leonor Michaelis", "Maud Menten"],
            context: "Le duo établit l'équation fondamentale de la catalyse enzymatique, base de toute la biochimie moderne et du développement de médicaments."
        },
        problemStatement: {
            context: "Optimiser la production d'insuline par des bactéries génétiquement modifiées.",
            objective: "v = Vmax * [S] / (Km + [S]).",
            analogy: "Un péage d'autoroute : au début, plus il y a de voitures, plus ça va vite. Mais à un moment, c'est saturé."
        },
        steps: [
            {
                title: "1. Équation de Michaelis-Menten",
                explanation: "Vitesse en fonction du substrat.",
                code: `from sympy import symbols
Vmax, S, Km = symbols('Vmax S Km')
v = (Vmax * S) / (Km + S)
# Exemple : Vmax=100, Km=2, [S]=4
v_val = v.subs({Vmax: 100, Km: 2, S: 4})
print(f"Vitesse v = {v_val.evalf()} (unités/s)")`
            }
        ]
    },
    {
        id: 'bio-genetics',
        category: 'Biologie',
        title: "Lois de Mendel",
        level: "Lycée (Seconde)",
        domain: "Génétique",
        icon: "🌱",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Prédire les proportions de descendants dans un croisement génétique.",
        history: {
            year: "1866",
            people: ["Gregor Mendel"],
            context: "Moine et botaniste, Mendel découvre les lois de l'hérédité en croisant des petits pois dans son jardin. Ses travaux, ignorés de son vivant, fondent la génétique moderne."
        },
        problemStatement: {
            context: "Prévoir la couleur des yeux d'un enfant à partir de ceux des parents.",
            objective: "Calculer les probabilités avec un tableau de Punnett.",
            analogy: "Tirer des boules dans un sac : si vous avez 3 rouges et 1 bleue, vous avez 75% de chances de tirer rouge."
        },
        steps: [
            {
                title: "1. Croisement Monohybride",
                explanation: "Aa x Aa => 1 AA : 2 Aa : 1 aa.",
                code: `from sympy import symbols, Rational
# Probabilités
P_AA = Rational(1, 4)
P_Aa = Rational(2, 4)
P_aa = Rational(1, 4)
print(f"℗(AA) = {P_AA}, ℗(Aa) = {P_Aa}, ℗(aa) = {P_aa}")`
            }
        ]
    },
    {
        id: 'bio-photosynthesis',
        category: 'Biologie',
        title: "Rendement Photosynthétique",
        level: "Université (L1)",
        domain: "Physiologie Végétale",
        icon: "🌿",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer l'efficacité de conversion de la lumière en biomasse.",
        history: {
            year: "1779",
            people: ["Jan Ingenhousz"],
            context: "Ingenhousz découvre que les plantes produisent de l'oxygène à la lumière, posant les bases de la compréhension de la photosynthèse."
        },
        problemStatement: {
            context: "Optimiser une serre agricole pour maximiser la production.",
            objective: "Modéliser la courbe de saturation lumineuse.",
            analogy: "Arroser des plantes : un peu d'eau c'est bien, trop d'eau ça noie."
        },
        steps: [
            {
                title: "1. Loi de Saturation",
                explanation: "P = Pmax * I / (K + I).",
                code: `from sympy import symbols
Pmax, I, K = symbols('Pmax I K')
P`
            }
        ]
    },
    {
        id: 'bio-epidemiology',
        category: 'Biologie',
        title: "Modèle SIR (Épidémies)",
        level: "Université (L2)",
        domain: "Épidémiologie",
        icon: "🦠",
        difficulty: "Avancé",
        duration: "2h",
        description: "Simuler la propagation d'une maladie infectieuse.",
        history: {
            year: "1927",
            people: ["Kermack", "McKendrick"],
            context: "En pleine pandémie de grippe espagnole, les deux chercheurs développent le modèle SIR pour comprendre et prédire la dynamique des épidémies."
        },
        problemStatement: {
            context: "Prédire le pic d'une épidémie de COVID-19 pour dimensionner les hôpitaux.",
            objective: "Résoudre le système dS/dt, dI/dt, dR/dt.",
            analogy: "Un feu de forêt : il se propage tant qu'il y a du bois (susceptibles), puis s'éteint quand tout est brûlé."
        },
        steps: [
            {
                title: "1. Équations SIR",
                explanation: `Système différentiel couplé :
$$\frac{dS}{dt} = -\beta S I$$
$$\frac{dI}{dt} = \beta S I - \gamma I$$
$$\frac{dR}{dt} = \gamma I$$
où $\beta$ est le taux de transmission et $\gamma$ le taux de guérison.`,
                code: `from sympy import symbols, Function
t, beta, gamma = symbols('t beta gamma')
S, I, R = Function('S')(t), Function('I')(t), Function('R')(t)
# dS/dt = -beta*S*I
# dI/dt = beta*S*I - gamma*I
# dR/dt = gamma*I
print("Système SIR défini.")`
            }
        ]
    },
    // NOUVEAUX PROJETS BIOLOGIE À INSÉRER APRÈS ÉPIDÉMIOLOGIE
    {
        id: 'bio-mitosis',
        category: 'Biologie',
        title: "Mitose & Cycle Cellulaire",
        level: "Lycée (Seconde)",
        domain: "Biologie Cellulaire",
        icon: "🔬",
        difficulty: "Débutant",
        duration: "1h",
        description: "Comprendre la division cellulaire et la croissance des tissus.",
        history: {
            year: "1882",
            people: ["Walther Flemming"],
            context: "Flemming observe et décrit pour la première fois la mitose au microscope, révélant comment une cellule se divise en deux cellules identiques."
        },
        problemStatement: {
            context: "Modéliser la croissance d'un tissu (peau, foie) ou d'une tumeur.",
            objective: "Calculer le nombre de cellules après n divisions : N = N₀·2ⁿ.",
            analogy: "Comme photocopier un document : 1 devient 2, 2 devient 4, 4 devient 8..."
        },
        steps: [
            {
                title: "1. Croissance Exponentielle",
                explanation: "Chaque cellule se divise en 2.",
                code: `from sympy import symbols
n = symbols('n')
N0 = 1  # Une cellule initiale
N = N0 * 2**n
# Après 10 divisions
print(f"Après 10 divisions : {N.subs(n, 10)} cellules")
# Après 20 divisions
print(f"Après 20 divisions : {N.subs(n, 20)} cellules")`
            },
            {
                title: "2. Temps de Doublement",
                explanation: "Si une division prend 24h, combien de temps pour 1 million de cellules ?",
                code: `from sympy import log, solve
N_final = 1e6
eq = N0 * 2**n - N_final
n_divisions = solve(eq, n)[0]
temps_h = n_divisions * 24
print(f"Nombre de divisions : {n_divisions.evalf()}")
print(f"Temps nécessaire : {temps_h.evalf()} heures = {(temps_h/24).evalf()} jours")`
            }
        ]
    },
    {
        id: 'bio-cellular-respiration',
        category: 'Biologie',
        title: "Respiration Cellulaire",
        level: "Lycée (Première)",
        domain: "Biochimie",
        icon: "⚡",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Production d'ATP : la monnaie énergétique de la cellule.",
        history: {
            year: "1937",
            people: ["Hans Krebs"],
            context: "Krebs découvre le cycle qui porte son nom, expliquant comment les cellules extraient l'énergie du glucose. Prix Nobel 1953."
        },
        problemStatement: {
            context: "Calculer l'énergie produite par la dégradation du glucose.",
            objective: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP.",
            analogy: "Comme brûler du bois : on casse les liaisons chimiques pour libérer de l'énergie."
        },
        steps: [
            {
                title: "1. Bilan Énergétique",
                explanation: "1 glucose → 38 ATP (théorique).",
                code: `# Énergie par ATP : ~30.5 kJ/mol
E_ATP = 30.5  # kJ/mol
n_ATP = 38
E_totale = n_ATP * E_ATP
print(f"Énergie produite : {E_totale} kJ/mol de glucose")
# Rendement
E_glucose = 2870  # kJ/mol (combustion complète)
rendement = (E_totale / E_glucose) * 100
print(f"Rendement de la respiration : {rendement:.1f}%")`
            }
        ]
    },
    {
        id: 'bio-dna-replication',
        category: 'Biologie',
        title: "Réplication de l'ADN",
        level: "Lycée (Terminale)",
        domain: "Génétique Moléculaire",
        icon: "🧬",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Comment l'ADN se copie avant la division cellulaire.",
        history: {
            year: "1958",
            people: ["Meselson", "Stahl"],
            context: "L'expérience de Meselson-Stahl prouve que la réplication de l'ADN est semi-conservative : chaque brin sert de matrice."
        },
        problemStatement: {
            context: "Comprendre les mutations et la transmission de l'information génétique.",
            objective: "Modéliser la réplication semi-conservative.",
            analogy: "Comme une fermeture éclair qui s'ouvre : chaque moitié sert de modèle pour recréer l'autre."
        },
        steps: [
            {
                title: "1. Complémentarité des Bases",
                explanation: "A-T et G-C (règles de Chargaff).",
                code: `# Séquence d'ADN
brin_matrice = "ATGCGATCG"
complement = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}
brin_complementaire = ''.join([complement[base] for base in brin_matrice])
print(f"Brin matrice :        {brin_matrice}")
print(f"Brin complémentaire : {brin_complementaire}")`
            },
            {
                title: "2. Vitesse de Réplication",
                explanation: "ADN polymérase : ~1000 nucléotides/seconde.",
                code: `vitesse = 1000  # nt/s
taille_genome_humain = 3e9  # paires de bases
temps_s = taille_genome_humain / vitesse
temps_h = temps_s / 3600
print(f"Temps théorique pour répliquer le génome humain : {temps_h:.0f} heures")
# En réalité : ~8h grâce aux multiples origines de réplication`
            }
        ]
    },
    {
        id: 'bio-protein-synthesis',
        category: 'Biologie',
        title: "Synthèse des Protéines",
        level: "Lycée (Terminale)",
        domain: "Biologie Moléculaire",
        icon: "🧬",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Du gène à la protéine : transcription et traduction.",
        history: {
            year: "1961",
            people: ["Nirenberg", "Matthaei"],
            context: "Déchiffrage du code génétique : chaque triplet de nucléotides (codon) code pour un acide aminé. Prix Nobel 1968."
        },
        problemStatement: {
            context: "Prédire la séquence d'une protéine à partir de l'ADN.",
            objective: "ADN → ARNm → Protéine (code génétique).",
            analogy: "Comme traduire un livre : ADN (texte original) → ARNm (photocopie) → Protéine (traduction)."
        },
        steps: [
            {
                title: "1. Transcription (ADN → ARNm)",
                explanation: "T devient U dans l'ARN.",
                code: `adn = "ATGCGATCG"
transcription = {'A': 'U', 'T': 'A', 'G': 'C', 'C': 'G'}
arnm = ''.join([transcription[base] for base in adn])
print(f"ADN :  {adn}")
print(f"ARNm : {arnm}")`
            },
            {
                title: "2. Traduction (ARNm → Protéine)",
                explanation: "Code génétique : 3 nucléotides = 1 acide aminé.",
                code: `# Code génétique simplifié
code_genetique = {
    'AUG': 'Met', 'UUU': 'Phe', 'UCU': 'Ser',
    'UAU': 'Tyr', 'UGU': 'Cys', 'UAA': 'STOP'
}
# Découper en codons
codons = [arnm[i:i+3] for i in range(0, len(arnm), 3)]
proteine = [code_genetique.get(codon, '?') for codon in codons]
print(f"Codons : {codons}")
print(f"Protéine : {'-'.join(proteine)}")`
            }
        ]
    },
    {
        id: 'bio-hardy-weinberg',
        category: 'Biologie',
        title: "Équilibre de Hardy-Weinberg",
        level: "Université (L1)",
        domain: "Génétique des Populations",
        icon: "🧬",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Prédire les fréquences alléliques dans une population.",
        history: {
            year: "1908",
            people: ["Hardy", "Weinberg"],
            context: "Ils montrent que les fréquences alléliques restent constantes en l'absence de sélection, mutation, migration ou dérive. Base de la génétique des populations."
        },
        problemStatement: {
            context: "Étudier l'évolution d'un caractère (groupe sanguin, maladie génétique).",
            objective: "p² + 2pq + q² = 1 (fréquences génotypiques).",
            analogy: "Comme mélanger des billes rouges et bleues : les proportions restent stables si on ne triche pas."
        },
        steps: [
            {
                title: "1. Fréquences Alléliques",
                explanation: "p + q = 1 (2 allèles A et a).",
                code: `from sympy import symbols, solve, Eq
p, q = symbols('p q')
# Si 16% de la population est aa (q²=0.16)
q_val = 0.16**0.5
p_val = 1 - q_val
print(f"Fréquence de a (q) : {q_val}")
print(f"Fréquence de A (p) : {p_val}")`
            },
            {
                title: "2. Fréquences Génotypiques",
                explanation: "AA : p², Aa : 2pq, aa : q².",
                code: `freq_AA = p_val**2
freq_Aa = 2*p_val*q_val
freq_aa = q_val**2
print(f"Fréquence AA : {freq_AA:.2%}")
print(f"Fréquence Aa : {freq_Aa:.2%}")
print(f"Fréquence aa : {freq_aa:.2%}")
print(f"Total : {freq_AA + freq_Aa + freq_aa}")`
            }
        ]
    },
    {
        id: 'bio-food-chains',
        category: 'Biologie',
        title: "Chaînes Alimentaires",
        level: "Lycée (Seconde)",
        domain: "Écologie",
        icon: "🌿",
        difficulty: "Débutant",
        duration: "1h",
        description: "Flux d'énergie dans un écosystème.",
        history: {
            year: "1942",
            people: ["Raymond Lindeman"],
            context: "Lindeman quantifie le transfert d'énergie entre niveaux trophiques : seulement ~10% de l'énergie passe d'un niveau à l'autre."
        },
        problemStatement: {
            context: "Comprendre pourquoi il y a peu de prédateurs au sommet.",
            objective: "Règle des 10% : chaque niveau ne reçoit que 10% de l'énergie du précédent.",
            analogy: "Comme une cascade d'eau : à chaque palier, on perd de l'énergie en chaleur."
        },
        steps: [
            {
                title: "1. Pyramide Énergétique",
                explanation: "Producteurs → Herbivores → Carnivores.",
                code: `# Énergie initiale (producteurs)
E0 = 10000  # kJ/m²/an
rendement = 0.1  # 10%
# Niveaux trophiques
herbivores = E0 * rendement
carnivores_1 = herbivores * rendement
carnivores_2 = carnivores_1 * rendement
print(f"Producteurs :      {E0} kJ")
print(f"Herbivores :       {herbivores} kJ")
print(f"Carnivores 1 :     {carnivores_1} kJ")
print(f"Super-prédateurs : {carnivores_2} kJ")`
            }
        ]
    },
    {
        id: 'bio-immune-system',
        category: 'Biologie',
        title: "Système Immunitaire",
        level: "Lycée (Terminale)",
        domain: "Immunologie",
        icon: "🛡️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Réponse antigène-anticorps et mémoire immunitaire.",
        history: {
            year: "1796",
            people: ["Edward Jenner"],
            context: "Jenner invente la vaccination en inoculant la vaccine (variole bovine) pour protéger contre la variole humaine. Début de l'immunologie."
        },
        problemStatement: {
            context: "Comprendre comment les vaccins fonctionnent.",
            objective: "Modéliser la production d'anticorps après infection/vaccination.",
            analogy: "Comme un système d'alarme qui apprend : après une première intrusion, il reconnaît l'intrus instantanément."
        },
        steps: [
            {
                title: "1. Réponse Primaire vs Secondaire",
                explanation: "2ème exposition → réponse plus rapide et plus forte.",
                code: `import matplotlib.pyplot as plt
import numpy as np
# Temps (jours)
t = np.linspace(0, 60, 100)
# Réponse primaire (jour 0-30)
primaire = 10 * np.exp(-((t-10)**2)/50) * (t < 30)
# Réponse secondaire (jour 30-60)
secondaire = 50 * np.exp(-((t-35)**2)/30) * (t >= 30)
anticorps = primaire + secondaire
# Affichage
print("Pic primaire : ~10 unités à J+10")
print("Pic secondaire : ~50 unités à J+35 (5x plus fort !)")`
            }
        ]
    },
    {
        id: 'bio-hormones',
        category: 'Biologie',
        title: "Régulation Hormonale",
        level: "Lycée (Première)",
        domain: "Physiologie",
        icon: "🩺",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Boucles de rétroaction (feedback) : glycémie, thyroïde.",
        history: {
            year: "1902",
            people: ["Bayliss", "Starling"],
            context: "Découverte de la sécrétine, première hormone identifiée. Révèle l'existence de messagers chimiques dans le sang."
        },
        problemStatement: {
            context: "Réguler la glycémie (diabète) ou la température corporelle.",
            objective: "Modéliser une boucle de rétroaction négative.",
            analogy: "Comme un thermostat : si trop chaud, on refroidit. Si trop froid, on chauffe."
        },
        steps: [
            {
                title: "1. Régulation de la Glycémie",
                explanation: "Insuline (baisse) vs Glucagon (hausse).",
                code: `# Glycémie normale : 1 g/L
glycemie_cible = 1.0
glycemie_actuelle = 1.5  # Hyperglycémie
# Sécrétion d'insuline proportionnelle à l'écart
K = 0.5  # Constante
insuline = K * (glycemie_actuelle - glycemie_cible)
print(f"Glycémie : {glycemie_actuelle} g/L")
print(f"Sécrétion d'insuline : {insuline} unités")
# Nouvelle glycémie après action
nouvelle_glycemie = glycemie_actuelle - insuline
print(f"Nouvelle glycémie : {nouvelle_glycemie} g/L")`
            }
        ]
    },
    {
        id: 'bio-neurotransmission',
        category: 'Biologie',
        title: "Neurotransmission",
        level: "Université (L1)",
        domain: "Neurobiologie",
        icon: "🧠",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Transmission du signal nerveux à la synapse.",
        history: {
            year: "1921",
            people: ["Otto Loewi"],
            context: "Loewi démontre l'existence de neurotransmetteurs chimiques (acétylcholine). Prix Nobel 1936."
        },
        problemStatement: {
            context: "Comprendre comment les antidépresseurs (ISRS) fonctionnent.",
            objective: "Modéliser la concentration de neurotransmetteur dans la fente synaptique.",
            analogy: "Comme un relais : le message électrique devient chimique pour traverser le fossé entre neurones."
        },
        steps: [
            {
                title: "1. Libération et Recapture",
                explanation: "Équilibre entre libération et recapture.",
                code: `from sympy import symbols, Function, dsolve, Eq
t, k_lib, k_recap = symbols('t k_lib k_recap')
C = Function('C')(t)
# dC/dt = libération - recapture
eq = Eq(C.diff(t), k_lib - k_recap*C)
sol = dsolve(eq)
sol`
            }
        ]
    },
    {
        id: 'bio-biodiversity-indices',
        category: 'Biologie',
        title: "Indices de Biodiversité",
        level: "Université (L2)",
        domain: "Écologie",
        icon: "🌍",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Mesurer la diversité d'un écosystème (Shannon, Simpson).",
        history: {
            year: "1948",
            people: ["Claude Shannon", "Edward Simpson"],
            context: "Shannon (théorie de l'information) et Simpson (écologie) développent des indices pour quantifier la diversité biologique."
        },
        problemStatement: {
            context: "Comparer la santé de deux forêts ou récifs coralliens.",
            objective: "Calculer H (Shannon) et D (Simpson).",
            analogy: "Comme mesurer la richesse d'une bibliothèque : nombre de livres ET équilibre entre genres."
        },
        steps: [
            {
                title: "1. Indice de Shannon",
                explanation: "H = -Σ pᵢ·ln(pᵢ).",
                code: `import numpy as np
# Nombre d'individus par espèce
especes = [50, 30, 15, 5]
total = sum(especes)
# Proportions
p = [n/total for n in especes]
# Indice de Shannon
H = -sum([pi * np.log(pi) for pi in p if pi > 0])
print(f"Indice de Shannon : H = {H:.2f}")
print("Plus H est élevé, plus la diversité est grande")`
            },
            {
                title: "2. Indice de Simpson",
                explanation: "D = 1 - Σ pᵢ².",
                code: `# Indice de Simpson
D = 1 - sum([pi**2 for pi in p])
print(f"Indice de Simpson : D = {D:.2f}")
print("D varie de 0 (une seule espèce) à ~1 (très diversifié)")`
            }
        ]
    },


    // ==================================================================================
    // ⚡ ÉLECTRONIQUE & INFORMATIQUE (15 projets)
    // ==================================================================================
    {
        id: 'elec-rlc-circuit',
        category: 'Élec & Info',
        title: "Circuit RLC Résonant",
        level: "Université (L2)",
        domain: "Électronique Analogique",
        icon: "📻",
        difficulty: "Avancé",
        duration: "2h",
        description: "Analyser la réponse d'un circuit RLC série pour concevoir un filtre passe-bande.",
        history: {
            year: "1887",
            people: ["Heinrich Hertz"],
            context: "Hertz utilise des circuits RLC pour générer et détecter les ondes radio, prouvant l'existence des ondes électromagnétiques prédites par Maxwell."
        },
        problemStatement: {
            context: "Capter une station radio spécifique (ex: 95.5 MHz) sans entendre les autres.",
            objective: "Calculer l'impédance complexe Z et trouver la fréquence de résonance.",
            analogy: "C'est comme une balançoire. Si vous poussez à la bonne fréquence (résonance), elle va très haut."
        },
        steps: [
            {
                title: "1. Impédance Complexe",
                explanation: "En régime alternatif, Z = R + jLω + 1/jCω.",
                code: `from sympy import symbols, I, simplify
R, L, C, omega = symbols('R L C omega', real=True)
Z = R + I*L*omega + 1/(I*C*omega)
print(f"Impédance complexe Z : {simplify(Z)}")`
            },
            {
                title: "2. Fréquence de Résonance",
                explanation: "La résonance se produit quand Im(Z) = 0.",
                code: `from sympy import solve
# Résonance : Partie imaginaire de Z nulle
# L*omega - 1/(C*omega) = 0
omega_res = solve(L*omega - 1/(C*omega), omega)
print(f"Pulsation de résonance : {omega_res[1]}")  # Solution positive
print(f"Fréquence f0 = 1/(2*pi*sqrt(LM))")`

            }
        ]
    },
    {
        id: 'elec-transistor',
        category: 'Élec & Info',
        title: "Amplificateur à Transistor",
        level: "Université (L2)",
        domain: "Électronique",
        icon: "🔊",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer le gain d'un amplificateur à transistor bipolaire.",
        history: {
            year: "1947",
            people: ["Bardeen", "Brattain", "Shockley"],
            context: "L'invention du transistor aux Bell Labs révolutionne l'électronique, remplaçant les tubes à vide encombrants et ouvrant l'ère de la miniaturisation."
        },
        problemStatement: {
            context: "Amplifier le signal d'un microphone pour le rendre audible.",
            objective: "Calculer Av = -gm * Rc.",
            analogy: "Un levier : une petite force à l'entrée produit une grande force à la sortie."
        },
        steps: [
            {
                title: "1. Gain en Tension",
                explanation: "Av = Vout / Vin.",
                code: `from sympy import symbols
gm, Rc = symbols('gm Rc')
Av = -gm * Rc
print(f"Gain de l'amplificateur : {Av}")`
            }
        ]
    },
    {
        id: 'info-algorithm-complexity',
        category: 'Élec & Info',
        title: "Complexité Algorithmique",
        level: "Université (L2)",
        domain: "Informatique Théorique",
        icon: "⏱️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Analyser la complexité temporelle d'un algorithme de tri.",
        history: {
            year: "1962",
            people: ["Donald Knuth"],
            context: "Knuth formalise l'analyse d'algorithmes, créant les notations O, Ω et Θ pour comparer l'efficacité des programmes."
        },
        problemStatement: {
            context: "Choisir entre tri rapide et tri à bulles pour trier 1 million de données.",
            objective: "Comparer O(n log n) vs O(n²).",
            analogy: "Ranger des livres : par ordre alphabétique c'est plus rapide que de chercher au hasard."
        },
        steps: [
            {
                title: "1. Notation Big-O",
                explanation: "Compter les opérations dominantes.",
                code: `from sympy import symbols, log
n = symbols('n')
# Tri rapide
T_quick = n * log(n, 2)
# Tri à bulles
T_bubble = n**2
print(f"QuickSort : O(n log n) = {T_quick}")
print(f"BubbleSort : O(n²) = {T_bubble}")`
            }
        ]
    },
    {
        id: 'info-neural-net',
        category: 'Élec & Info',
        title: "Réseau de Neurones",
        level: "Master",
        domain: "Intelligence Artificielle",
        icon: "🧠",
        difficulty: "Expert",
        duration: "3h",
        description: "Comprendre la rétropropagation du gradient dans un perceptron.",
        history: {
            year: "1986",
            people: ["Rumelhart", "Hinton", "Williams"],
            context: "La publication de l'algorithme de backpropagation relance l'intérêt pour les réseaux de neurones après l'hiver de l'IA."
        },
        problemStatement: {
            context: "Entraîner une IA à reconnaître des chiffres manuscrits.",
            objective: "Calculer ∂E/∂w pour ajuster les poids.",
            analogy: "Descendre une montagne dans le brouillard en tâtant la pente avec ses pieds."
        },
        steps: [
            {
                title: "1. Fonction de Coût",
                explanation: "Erreur quadratique moyenne.",
                code: `from sympy import symbols, diff
w, x, y, y_pred = symbols('w x y y_pred')
# y_pred = w*x (simplifié)
E = (y - y_pred)**2
gradient = diff(E, w)
gradient`
            }
        ]
    },
    {
        id: 'info-cryptography',
        category: 'Élec & Info',
        title: "Hachage Cryptographique",
        level: "Université (L3)",
        domain: "Sécurité Informatique",
        icon: "🔒",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Comprendre les fonctions de hachage (SHA, MD5).",
        history: {
            year: "1993",
            people: ["NSA"],
            context: "La NSA développe SHA-1 pour sécuriser les communications gouvernementales. Aujourd'hui, SHA-256 sécurise Bitcoin et HTTPS."
        },
        problemStatement: {
            context: "Vérifier l'intégrité d'un fichier téléchargé.",
            objective: "Calculer un hash irréversible.",
            analogy: "Un sceau de cire : on voit qu'il est intact, mais on ne peut pas recréer la lettre à partir du sceau."
        },
        steps: [
            {
                title: "1. Propriétés du Hash",
                explanation: "Déterministe, rapide, irréversible, résistant aux collisions.",
                code: `import hashlib
message = "SymLab est génial"
hash_obj = hashlib.sha256(message.encode())
print(f"SHA-256 : {hash_obj.hexdigest()}")`
            }
        ]
    },
    // NOUVEAUX PROJETS ÉLECTRONIQUE & INFORMATIQUE
    {
        id: 'elec-logic-gates',
        category: 'Élec & Info',
        title: "Portes Logiques",
        level: "Lycée (Terminale)",
        domain: "Électronique Numérique",
        icon: "🔌",
        difficulty: "Débutant",
        duration: "1h",
        description: "Construire des circuits logiques (AND, OR, NOT, XOR).",
        history: {
            year: "1854",
            people: ["George Boole"],
            context: "Boole invente l'algèbre qui porte son nom, base de toute l'informatique moderne. Les portes logiques matérialisent ses opérations abstraites."
        },
        problemStatement: {
            context: "Concevoir un additionneur binaire ou un décodeur.",
            objective: "Combiner des portes pour réaliser des fonctions logiques.",
            analogy: "Comme des interrupteurs : AND = série, OR = parallèle."
        },
        steps: [
            {
                title: "1. Tables de Vérité",
                explanation: "AND : 1 si A=1 ET B=1.",
                code: `# Table de vérité AND
A = [0, 0, 1, 1]
B = [0, 1, 0, 1]
AND = [a & b for a, b in zip(A, B)]
OR = [a | b for a, b in zip(A, B)]
XOR = [a ^ b for a, b in zip(A, B)]
print("A  B | AND OR XOR")
for i in range(4):
    print(f"{A[i]}  {B[i]} |  {AND[i]}   {OR[i]}   {XOR[i]}")`
            },
            {
                title: "2. Additionneur 1 bit",
                explanation: "Somme = A XOR B, Retenue = A AND B.",
                code: `a, b = 1, 1
somme = a ^ b
retenue = a & b
print(f"{a} + {b} = {somme} (retenue: {retenue})")`
            }
        ]
    },
    {
        id: 'elec-digital-filters',
        category: 'Élec & Info',
        title: "Filtres Numériques",
        level: "Université (L3)",
        domain: "Traitement du Signal",
        icon: "📊",
        difficulty: "Avancé",
        duration: "2h",
        description: "Filtrer un signal audio ou une image (passe-bas, passe-haut).",
        history: {
            year: "1965",
            people: ["James Cooley", "John Tukey"],
            context: "L'algorithme FFT révolutionne le traitement numérique du signal, permettant le filtrage en temps réel."
        },
        problemStatement: {
            context: "Supprimer le bruit d'un enregistrement audio.",
            objective: "Implémenter un filtre moyenneur (passe-bas).",
            analogy: "Comme lisser une courbe : on fait la moyenne des points voisins."
        },
        steps: [
            {
                title: "1. Filtre Moyenneur",
                explanation: "y[n] = (x[n-1] + x[n] + x[n+1]) / 3.",
                code: `import numpy as np
# Signal bruité
signal = [1, 5, 2, 8, 3, 7, 4]
# Filtre moyenneur (fenêtre de 3)
filtre = np.convolve(signal, [1/3, 1/3, 1/3], mode='same')
print(f"Signal original : {signal}")
print(f"Signal filtré :   {filtre}")`
            }
        ]
    },
    {
        id: 'elec-modulation',
        category: 'Élec & Info',
        title: "Modulation AM/FM",
        level: "Université (L2)",
        domain: "Télécommunications",
        icon: "📡",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Transmettre de l'information par ondes radio.",
        history: {
            year: "1933",
            people: ["Edwin Armstrong"],
            context: "Armstrong invente la modulation de fréquence (FM), offrant une meilleure qualité que l'AM inventée par Fessenden."
        },
        problemStatement: {
            context: "Émettre de la musique ou de la voix par radio.",
            objective: "Moduler une porteuse avec un signal.",
            analogy: "AM : varier la hauteur des vagues. FM : varier leur fréquence."
        },
        steps: [
            {
                title: "1. Modulation d'Amplitude",
                explanation: "s(t) = [1 + m·cos(ωₘt)]·cos(ωₚt).",
                code: `from sympy import symbols, cos, pi
t, m, omega_m, omega_p = symbols('t m omega_m omega_p')
# Signal modulant (message)
message = m * cos(omega_m * t)
# Porteuse
porteuse = cos(omega_p * t)
# Signal AM
s_AM = (1 + message) * porteuse
s_AM`
            }
        ]
    },
    {
        id: 'info-huffman',
        category: 'Élec & Info',
        title: "Compression de Huffman",
        level: "Université (L2)",
        domain: "Théorie de l'Information",
        icon: "🗜️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Compresser du texte sans perte (ZIP, JPEG).",
        history: {
            year: "1952",
            people: ["David Huffman"],
            context: "Étudiant au MIT, Huffman invente son algorithme de compression optimal pour un projet de cours. Aujourd'hui utilisé partout (ZIP, MP3, JPEG)."
        },
        problemStatement: {
            context: "Réduire la taille d'un fichier texte.",
            objective: "Coder les caractères fréquents avec moins de bits.",
            analogy: "Comme le morse : 'E' (fréquent) = '.', 'Q' (rare) = '--.-'"
        },
        steps: [
            {
                title: "1. Fréquences",
                explanation: "Compter les occurrences de chaque caractère.",
                code: `texte = "ABRACADABRA"
freq = {}
for char in texte:
    freq[char] = freq.get(char, 0) + 1
print("Fréquences :", freq)
# A:5, B:2, R:2, C:1, D:1`
            },
            {
                title: "2. Arbre de Huffman",
                explanation: "Construire l'arbre binaire optimal.",
                code: `# Codes (exemple simplifié)
codes = {'A': '0', 'B': '10', 'R': '110', 'C': '1110', 'D': '1111'}
# Taille originale : 11 caractères × 8 bits = 88 bits
# Taille compressée
taille_comp = sum([freq[c] * len(codes[c]) for c in freq])
print(f"Taille originale : 88 bits")
print(f"Taille compressée : {taille_comp} bits")
print(f"Gain : {100*(1-taille_comp/88):.1f}%")`
            }
        ]
    },
    {
        id: 'info-aes',
        category: 'Élec & Info',
        title: "Chiffrement AES",
        level: "Master",
        domain: "Cryptographie",
        icon: "🔐",
        difficulty: "Expert",
        duration: "2h",
        description: "Sécuriser des données avec AES (standard mondial).",
        history: {
            year: "2001",
            people: ["Rijmen", "Daemen"],
            context: "AES (Rijndael) remporte le concours du NIST pour remplacer DES. Utilisé par les gouvernements et HTTPS."
        },
        problemStatement: {
            context: "Chiffrer un disque dur ou une connexion WiFi.",
            objective: "Comprendre les opérations de substitution et permutation.",
            analogy: "Comme mélanger un Rubik's Cube : facile à faire, très dur à défaire sans la clé."
        },
        steps: [
            {
                title: "1. Principe",
                explanation: "Substitution-Permutation Network (SPN).",
                code: `# AES-128 : 10 rondes de transformations
# SubBytes, ShiftRows, MixColumns, AddRoundKey
print("AES-128 : 128 bits de clé, 10 rondes")
print("Opérations : SubBytes → ShiftRows → MixColumns → AddRoundKey")
print("Sécurité : 2^128 clés possibles (inviolable en pratique)")`
            }
        ]
    },
    {
        id: 'info-cnn',
        category: 'Élec & Info',
        title: "Réseaux Convolutifs (CNN)",
        level: "Master",
        domain: "Deep Learning",
        icon: "🖼️",
        difficulty: "Expert",
        duration: "2h30",
        description: "Reconnaître des images avec l'IA.",
        history: {
            year: "1998",
            people: ["Yann LeCun"],
            context: "LeCun invente LeNet pour lire les chèques bancaires. Les CNN dominent aujourd'hui la vision par ordinateur (reconnaissance faciale, voitures autonomes)."
        },
        problemStatement: {
            context: "Classifier des images (chiens vs chats, tumeurs...).",
            objective: "Comprendre les couches de convolution et pooling.",
            analogy: "Comme reconnaître un visage : on détecte d'abord les bords, puis les yeux, puis la forme globale."
        },
        steps: [
            {
                title: "1. Convolution 2D",
                explanation: "Filtre qui glisse sur l'image.",
                code: `import numpy as np
# Image 3x3
image = np.array([[1,2,3], [4,5,6], [7,8,9]])
# Filtre de détection de bords
filtre = np.array([[-1,0,1], [-1,0,1], [-1,0,1]])
# Convolution (simplifié)
resultat = np.sum(image * filtre)
print(f"Résultat de la convolution : {resultat}")`
            }
        ]
    },
    {
        id: 'info-fft',
        category: 'Élec & Info',
        title: "Transformée de Fourier Rapide",
        level: "Université (L3)",
        domain: "Traitement du Signal",
        icon: "〰️",
        difficulty: "Avancé",
        duration: "2h",
        description: "Analyser les fréquences d'un signal (audio, vibrations).",
        history: {
            year: "1965",
            people: ["Cooley", "Tukey"],
            context: "La FFT réduit la complexité de O(n²) à O(n log n), rendant possible le traitement temps réel. Révolution pour l'audio, radar, sismologie."
        },
        problemStatement: {
            context: "Identifier les notes de musique dans un enregistrement.",
            objective: "Passer du domaine temporel au domaine fréquentiel.",
            analogy: "Comme décomposer un accord de guitare en notes individuelles."
        },
        steps: [
            {
                title: "1. FFT d'un Signal",
                explanation: "Décomposition en fréquences.",
                code: `import numpy as np
# Signal : somme de 2 sinus (50 Hz et 120 Hz)
fs = 1000  # Fréquence d'échantillonnage
t = np.linspace(0, 1, fs)
signal = np.sin(2*np.pi*50*t) + 0.5*np.sin(2*np.pi*120*t)
# FFT
fft = np.fft.fft(signal)
freqs = np.fft.fftfreq(len(signal), 1/fs)
print("Pics détectés aux fréquences : 50 Hz et 120 Hz")`
            }
        ]
    },
    {
        id: 'elec-pid-control',
        category: 'Élec & Info',
        title: "Régulation PID",
        level: "Master",
        domain: "Automatique",
        icon: "🎛️",
        difficulty: "Expert",
        duration: "2h",
        description: "Stabiliser un drone, un thermostat, un robot.",
        history: {
            year: "1922",
            people: ["Nicolas Minorsky"],
            context: "Minorsky développe le contrôle PID pour stabiliser les navires. Aujourd'hui utilisé dans 95% des systèmes de contrôle industriels."
        },
        problemStatement: {
            context: "Maintenir un drone en vol stationnaire malgré le vent.",
            objective: "u(t) = Kₚ·e + Kᵢ·∫e + Kₐ·de/dt.",
            analogy: "Comme conduire une voiture : on corrige (P), on anticipe (D), on compense les erreurs passées (I)."
        },
        steps: [
            {
                title: "1. Contrôleur PID",
                explanation: "Proportionnel + Intégral + Dérivé.",
                code: `from sympy import symbols, integrate, diff, Function
t, Kp, Ki, Kd = symbols('t Kp Ki Kd')
e = Function('e')(t)  # Erreur
# Commande PID
u = Kp*e + Ki*integrate(e, t) + Kd*diff(e, t)
u`
            }
        ]
    },
    {
        id: 'info-image-processing',
        category: 'Élec & Info',
        title: "Traitement d'Images",
        level: "Université (L2)",
        domain: "Vision par Ordinateur",
        icon: "📷",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Filtrer, détecter des contours, segmenter.",
        history: {
            year: "1986",
            people: ["John Canny"],
            context: "Canny invente l'algorithme optimal de détection de contours, encore utilisé aujourd'hui dans la vision industrielle et médicale."
        },
        problemStatement: {
            context: "Détecter les bords d'une tumeur sur une IRM.",
            objective: "Appliquer des filtres de convolution (Sobel, Canny).",
            analogy: "Comme tracer les contours d'un dessin au crayon."
        },
        steps: [
            {
                title: "1. Filtre de Sobel",
                explanation: "Détection de gradients horizontaux et verticaux.",
                code: `import numpy as np
# Noyaux de Sobel
Gx = np.array([[-1,0,1], [-2,0,2], [-1,0,1]])
Gy = np.array([[-1,-2,-1], [0,0,0], [1,2,1]])
print("Sobel X (bords verticaux) :")
print(Gx)
print("Sobel Y (bords horizontaux) :")
print(Gy)`
            }
        ]
    },
    {
        id: 'info-blockchain',
        category: 'Élec & Info',
        title: "Blockchain & Proof of Work",
        level: "Master",
        domain: "Cryptographie Distribuée",
        icon: "⛓️",
        difficulty: "Expert",
        duration: "2h",
        description: "Comprendre Bitcoin et les cryptomonnaies.",
        history: {
            year: "2008",
            people: ["Satoshi Nakamoto"],
            context: "Publication du whitepaper Bitcoin : une monnaie décentralisée sans autorité centrale, basée sur la cryptographie et le consensus distribué."
        },
        problemStatement: {
            context: "Créer une monnaie numérique infalsifiable.",
            objective: "Miner un bloc : trouver un hash commençant par N zéros.",
            analogy: "Comme un sceau de cire inviolable : chaque bloc est lié au précédent par son hash."
        },
        steps: [
            {
                title: "1. Hachage d'un Bloc",
                explanation: "SHA-256 du contenu + nonce.",
                code: `import hashlib
bloc = "Transaction: Alice → Bob 1 BTC"
nonce = 0
# Trouver un hash commençant par '0000'
while True:
    data = bloc + str(nonce)
    hash_val = hashlib.sha256(data.encode()).hexdigest()
    if hash_val.startswith('0000'):
        print(f"Bloc miné ! Nonce = {nonce}")
        print(f"Hash : {hash_val}")
        break
    nonce += 1
    if nonce > 100000:  # Limite pour l'exemple
        break`
            }
        ]
    },


    // ==================================================================================
    // 🏗️ GÉNIE CIVIL (15 projets)
    // ==================================================================================
    {
        id: 'civil-beam-deflection',
        category: 'Génie Civil',
        title: "Flexion d'une Poutre",
        level: "Université (L1)",
        domain: "RDM",
        icon: "🌉",
        difficulty: "Intermédiaire",
        duration: "1h 30",
        description: "Calculer la déformation d'un pont sous charge.",
        history: {
            year: "1750",
            people: ["Leonhard Euler", "Daniel Bernoulli"],
            context: "La Tour Eiffel n'aurait pas pu être construite sans cette théorie. Euler et Bernoulli ont collaboré pour modéliser comment les matériaux élastiques se déforment sous la charge."
        },
        problemStatement: {
            context: "Dimensionner une poutre pour qu'elle ne plie pas trop sous le poids des voitures.",
            objective: "Résoudre EI·y″ = M(x).",
            analogy: "Une planche posée entre deux tréteaux qui plie quand on marche dessus."
        },
        steps: [
            {
                title: "1. Équation Différentielle",
                explanation: "Lien entre courbure et moment.",
                code: `from sympy import symbols, Function, dsolve, Eq
x, E, I, M = symbols('x E I M')
y = Function('y')(x)
# Équation d'Euler-Bernoulli : EI * y'' = M
eq = Eq(E * I * y.diff(x, x), M)
print(f"Équation diff : {eq}")
# SI M est constant (cas simple)
sol = dsolve(eq, y)
print(f"Déformée y(x) : {sol}")`
            }
        ]
    },
    {
        id: 'civil-concrete',
        category: 'Génie Civil',
        title: "Béton Armé",
        level: "Université (L2)",
        domain: "Matériaux",
        icon: "🧱",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer la quantité d'acier nécessaire dans une poutre en béton.",
        history: {
            year: "1849",
            people: ["Joseph Monier"],
            context: "Un jardinier français invente le béton armé pour faire des pots de fleurs solides ! Il réalise que le béton résiste à la compression et l'acier à la traction."
        },
        problemStatement: {
            context: "Le béton casse si on tire dessus. On met de l'acier là où ça tire.",
            objective: "Équilibrer les forces de compression (béton) et traction (acier).",
            analogy: "Comme un os (dur) renforcé par des tendons (souples)."
        },
        steps: [
            {
                title: "1. Section d'Acier",
                explanation: "As = M / (fyd * z).",
                code: `from sympy import symbols
M, fyd, z = symbols('M fyd z')
As = M / (fyd * z)
As`
            }
        ]
    },
    {
        id: 'civil-hydraulics',
        category: 'Génie Civil',
        title: "Réseau d'Eau Potable",
        level: "Université (L3)",
        domain: "Hydraulique",
        icon: "🚰",
        difficulty: "Avancé",
        duration: "2h",
        description: "Dimensionner les tuyaux pour alimenter un quartier.",
        history: {
            year: "1936",
            people: ["Hardy Cross"],
            context: "Avant les ordinateurs, Hardy Cross a inventé une méthode itérative manuelle pour calculer les débits dans les réseaux maillés complexes des villes américaines."
        },
        problemStatement: {
            context: "Assurer que l'eau arrive avec assez de pression au dernier étage des immeubles.",
            objective: "Minimiser les pertes de charge (frottements).",
            analogy: "Le trafic routier : plus la route est large, plus les voitures vont vite. Si ça bouchonne, la pression monte."
        },
        steps: [
            {
                title: "1. Pertes de Charge",
                explanation: "ΔP = f * (L/D) * (ρv²/2).",
                code: `from sympy import symbols
f, L, D, rho, v = symbols('f L D rho v')
ΔP = f * (L/D) * (rho*v**2/2)
ΔP`
            }
        ]
    },
    {
        id: 'civil-soil',
        category: 'Génie Civil',
        title: "Stabilité d'un Mur",
        level: "Université (L2)",
        domain: "Géotechnique",
        icon: "⛰️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Vérifier qu'un mur de soutènement ne va pas glisser.",
        history: {
            year: "1773",
            people: ["Charles-Augustin de Coulomb"],
            context: "Chargé de fortifier la Martinique, Coulomb développe la théorie de la poussée des terres pour construire des remparts qui ne s'effondrent pas."
        },
        problemStatement: {
            context: "Retenir la terre pour construire une route à flanc de colline.",
            objective: "Calculer la poussée active et passive.",
            analogy: "Retenir un tas de sable avec une planche : il faut que la planche soit assez lourde pour ne pas glisser."
        },
        steps: [
            {
                title: "1. Poussée de Coulomb",
                explanation: "Pa = 0.5 * γ * H² * Ka.",
                code: `from sympy import symbols, tan, pi
gamma, H, phi = symbols('gamma H phi')
Ka = (1 - tan(phi)) / (1 + tan(phi))
Pa = 0.5 * gamma * H**2 * Ka
Pa`
            }
        ]
    },
    {
        id: 'civil-bridge-resonance',
        category: 'Génie Civil',
        title: "Résonance de Pont",
        level: "Master",
        domain: "Dynamique",
        icon: "🌉",
        difficulty: "Expert",
        duration: "2h",
        description: "Analyser les fréquences propres pour éviter la catastrophe.",
        history: {
            year: "1940",
            people: ["Tacoma Narrows Engineers"],
            context: "L'effondrement spectaculaire du pont de Tacoma a changé à jamais l'ingénierie civile, imposant l'étude aérodynamique des ouvrages d'art."
        },
        problemStatement: {
            context: "Le vent peut faire entrer un pont en résonance destructrice.",
            objective: "Calculer les modes propres.",
            analogy: "Un chanteur d'opéra brisant un verre."
        },
        steps: [
            {
                title: "1. Fréquence Propre",
                explanation: "f = (1/2π) * sqrt(k/m).",
                code: `from sympy import symbols, sqrt, pi
k, m = symbols('k m')
f = (1/(2*pi)) * sqrt(k/m)
f`
            }
        ]
    },
    // NOUVEAUX PROJETS GÉNIE CIVIL
    {
        id: 'civil-load-calculation',
        category: 'Génie Civil',
        title: "Descente de Charges",
        level: "Université (L1)",
        domain: "Structure",
        icon: "🏢",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer les charges sur les poteaux d'un bâtiment.",
        history: {
            year: "1826",
            people: ["Claude-Louis Navier"],
            context: "Navier fonde la théorie moderne de la résistance des matériaux, permettant le calcul rigoureux des structures."
        },
        problemStatement: {
            context: "Dimensionner les fondations d'un immeuble.",
            objective: "Additionner charges permanentes + charges d'exploitation.",
            analogy: "Comme empiler des livres : chaque étage supporte le poids de tous ceux au-dessus."
        },
        steps: [
            {
                title: "1. Charges Permanentes",
                explanation: "Poids propre : dalle + murs + finitions.",
                code: `# Immeuble 5 étages, surface 100 m² par étage
surface = 100  # m²
# Charges par m² (kN/m²)
dalle = 5  # kN/m²
murs = 2
finitions = 1
charge_perm_etage = (dalle + murs + finitions) * surface
n_etages = 5
charge_totale_perm = charge_perm_etage * n_etages
print(f"Charge permanente totale : {charge_totale_perm} kN")`
            },
            {
                title: "2. Charges d'Exploitation",
                explanation: "Occupation : bureaux = 2.5 kN/m².",
                code: `charge_exploit = 2.5 * surface * n_etages
charge_totale = charge_totale_perm + charge_exploit
print(f"Charge totale (ELU) : {charge_totale} kN")
# Répartition sur 4 poteaux
charge_par_poteau = charge_totale / 4
print(f"Charge par poteau : {charge_par_poteau} kN")`
            }
        ]
    },
    {
        id: 'civil-foundations',
        category: 'Génie Civil',
        title: "Capacité Portante des Fondations",
        level: 'Université (L2)',
        domain: "Géotechnique",
        icon: "⚓",
        difficulty: "Avancé",
        duration: "2h",
        description: "Dimensionner une semelle pour qu'elle ne s'enfonce pas.",
        history: {
            year: "1943",
            people: ["Karl Terzaghi"],
            context: "Terzaghi, père de la mécanique des sols, établit la formule de capacité portante, révolutionnant la conception des fondations."
        },
        problemStatement: {
            context: "Éviter l'effondrement d'un bâtiment par tassement.",
            objective: "qₘₐₓ = c·Nc + γ·D·Nq + 0.5·γ·B·Nγ.",
            analogy: "Comme se tenir sur la neige : plus la surface est grande, moins on s'enfonce."
        },
        steps: [
            {
                title: "1. Formule de Terzaghi",
                explanation: "Capacité portante en fonction du sol.",
                code: `# Paramètres du sol
c = 20  # Cohésion (kPa)
gamma = 18  # Poids volumique (kN/m³)
phi = 30  # Angle de frottement (°)
D = 1.5  # Profondeur (m)
B = 2  # Largeur semelle (m)
# Facteurs de portance (tables)
Nc, Nq, Ngamma = 30.14, 18.40, 15.67
# Capacité portante
q_max = c*Nc + gamma*D*Nq + 0.5*gamma*B*Ngamma
print(f"Capacité portante : {q_max:.0f} kPa")`
            }
        ]
    },
    {
        id: 'civil-buckling',
        category: 'Génie Civil',
        title: "Flambement des Poteaux",
        level: "Université (L2)",
        domain: "Charpente Métallique",
        icon: "🏗️",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Éviter qu'un poteau ne flambe sous compression.",
        history: {
            year: "1757",
            people: ["Leonhard Euler"],
            context: "Euler découvre la charge critique de flambement, expliquant pourquoi les colonnes élancées s'effondrent soudainement."
        },
        problemStatement: {
            context: "Dimensionner les poteaux d'un hangar métallique.",
            objective: "Pₖᵣᵢₜ = π²·E·I / L².",
            analogy: "Comme une règle en plastique : facile à plier si elle est longue et fine."
        },
        steps: [
            {
                title: "1. Charge Critique d'Euler",
                explanation: "Dépend de la longueur et de l'inertie.",
                code: `from sympy import symbols, pi
E, I, L = symbols('E I L')
P_crit = (pi**2 * E * I) / L**2
# Acier : E=210 GPa, I=1000 cm⁴, L=5m
E_val = 210e9  # Pa
I_val = 1000e-8  # m⁴
L_val = 5  # m
P_val = P_crit.subs({E: E_val, I: I_val, L: L_val})
print(f"Charge critique : {P_val.evalf()/1000:.0f} kN")`
            }
        ]
    },
    {
        id: 'civil-pavement',
        category: 'Génie Civil',
        title: "Dimensionnement de Chaussées",
        level: "Université (L3)",
        domain: "Routes",
        icon: "🛣️",
        difficulty: "Avancé",
        duration: "2h",
        description: "Calculer l'épaisseur de bitume nécessaire.",
        history: {
            year: "1929",
            people: ["O.J. Porter"],
            context: "Porter développe l'indice CBR (California Bearing Ratio) pour caractériser la portance des sols routiers."
        },
        problemStatement: {
            context: "Concevoir une autoroute supportant des poids lourds.",
            objective: "Méthode des couches : répartir les contraintes.",
            analogy: "Comme un millefeuille : chaque couche répartit la charge."
        },
        steps: [
            {
                title: "1. Épaisseur Équivalente",
                explanation: "Méthode AASHTO.",
                code: `# Trafic : 10⁶ essieux équivalents
# CBR du sol : 5%
CBR = 5
# Formule empirique simplifiée
epaisseur_cm = 75 - CBR
print(f"Épaisseur de chaussée : {epaisseur_cm} cm")`
            }
        ]
    },
    {
        id: 'civil-dam',
        category: 'Génie Civil',
        title: "Stabilité d'un Barrage",
        level: "Master",
        domain: "Hydraulique",
        icon: "🌊",
        difficulty: "Expert",
        duration: "2h",
        description: "Vérifier qu'un barrage ne bascule pas.",
        history: {
            year: "1687",
            people: ["Isaac Newton"],
            context: "Les lois de Newton appliquées à l'hydrostatique permettent de calculer la poussée de l'eau sur les barrages."
        },
        problemStatement: {
            context: "Dimensionner un barrage-poids en béton.",
            objective: "Équilibre : Moment stabilisant > Moment renversant.",
            analogy: "Comme une porte : si on pousse trop fort d'un côté, elle bascule."
        },
        steps: [
            {
                title: "1. Poussée Hydrostatique",
                explanation: "F = 0.5·ρ·g·h²·L.",
                code: `rho = 1000  # kg/m³
g = 9.81
h = 20  # Hauteur d'eau (m)
L = 1  # Par mètre linéaire
F = 0.5 * rho * g * h**2 * L
print(f"Poussée de l'eau : {F/1000:.0f} kN/m")
# Point d'application : h/3 depuis le bas
bras_levier = h/3
moment_renversant = F * bras_levier
print(f"Moment renversant : {moment_renversant/1000:.0f} kN·m/m")`
            }
        ]
    },
    {
        id: 'civil-tunnel',
        category: 'Génie Civil',
        title: "Soutènement de Tunnel",
        level: "Master",
        domain: "Travaux Souterrains",
        icon: "🚇",
        difficulty: "Expert",
        duration: "2h",
        description: "Calculer la pression des terres sur un tunnel.",
        history: {
            year: "1856",
            people: ["Marc Brunel"],
            context: "Brunel invente le bouclier pour creuser le premier tunnel sous la Tamise, révolutionnant les travaux souterrains."
        },
        problemStatement: {
            context: "Concevoir le métro ou un tunnel routier.",
            objective: "Pression verticale σᵥ = γ·z.",
            analogy: "Comme plonger sous l'eau : plus on descend, plus la pression augmente."
        },
        steps: [
            {
                title: "1. Pression des Terres",
                explanation: "Poids de la colonne de sol au-dessus.",
                code: `gamma = 20  # kN/m³
z = 15  # Profondeur (m)
sigma_v = gamma * z
# Coefficient de poussée au repos K₀
K0 = 0.5
sigma_h = K0 * sigma_v
print(f"Pression verticale : {sigma_v} kPa")
print(f"Pression horizontale : {sigma_h} kPa")`
            }
        ]
    },
    {
        id: 'civil-drainage',
        category: 'Génie Civil',
        title: "Assainissement Pluvial",
        level: "Université (L2)",
        domain: "Hydraulique Urbaine",
        icon: "🌧️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Dimensionner les canalisations d'évacuation des eaux de pluie.",
        history: {
            year: "1850",
            people: ["Thomas Hawksley"],
            context: "Hawksley conçoit les premiers réseaux d'égouts modernes à Londres, révolutionnant l'hygiène urbaine."
        },
        problemStatement: {
            context: "Éviter les inondations dans une ville.",
            objective: "Méthode rationnelle : Q = C·I·A.",
            analogy: "Comme une gouttière : il faut qu'elle soit assez grosse pour évacuer toute la pluie."
        },
        steps: [
            {
                title: "1. Débit de Pointe",
                explanation: "Q (m³/s) = Coefficient × Intensité × Aire.",
                code: `C = 0.9  # Coefficient de ruissellement (béton)
I = 100  # Intensité pluie (mm/h)
A = 5  # Aire du bassin versant (ha)
Q = (C * I * A) / 360  # Formule rationnelle
print(f"Débit de pointe : {Q:.2f} m³/s")
# Diamètre de canalisation nécessaire
# Manning : Q = (1/n)·A·R^(2/3)·S^(1/2)
print("Diamètre recommandé : DN 800 mm")`
            }
        ]
    },
    {
        id: 'civil-surveying',
        category: 'Génie Civil',
        title: "Topographie & Nivellement",
        level: "Lycée (Terminale)",
        domain: "Géométrie",
        icon: "📏",
        difficulty: "Débutant",
        duration: "1h",
        description: "Mesurer les altitudes pour tracer une route.",
        history: {
            year: "1620",
            people: ["Willebrord Snell"],
            context: "Snell invente la triangulation pour mesurer la Terre, base de la topographie moderne et du GPS."
        },
        problemStatement: {
            context: "Tracer une route à pente constante.",
            objective: "Calculer les dénivelés.",
            analogy: "Comme monter un escalier : on mesure la hauteur de chaque marche."
        },
        steps: [
            {
                title: "1. Nivellement par Cheminement",
                explanation: "ΔH = Σ lectures arrière - Σ lectures avant.",
                code: `# Lectures au niveau (m)
lectures_arriere = [1.234, 1.567, 1.890]
lectures_avant = [0.987, 1.234, 1.456]
delta_H = sum(lectures_arriere) - sum(lectures_avant)
print(f"Dénivelé total : {delta_H:.3f} m")
# Altitude finale
altitude_depart = 100  # m
altitude_arrivee = altitude_depart + delta_H
print(f"Altitude d'arrivée : {altitude_arrivee:.3f} m")`
            }
        ]
    },
    {
        id: 'civil-seismic',
        category: 'Génie Civil',
        title: "Conception Parasismique",
        level: "Master",
        domain: "Dynamique des Structures",
        icon: "🌍",
        difficulty: "Expert",
        duration: "2h30",
        description: "Dimensionner un bâtiment résistant aux séismes.",
        history: {
            year: "1906",
            people: ["John Milne"],
            context: "Après le séisme de San Francisco, Milne développe les premiers sismographes et codes parasismiques."
        },
        problemStatement: {
            context: "Construire au Japon, en Californie ou en Turquie.",
            objective: "Calculer la force sismique : F = m·a.",
            analogy: "Comme un arbre dans le vent : il faut qu'il plie sans casser."
        },
        steps: [
            {
                title: "1. Spectre de Réponse",
                explanation: "Accélération en fonction de la période.",
                code: `# Paramètres sismiques
ag = 0.3  # Accélération du sol (g)
T = 0.5  # Période propre du bâtiment (s)
# Spectre élastique (simplifié)
if T < 0.6:
    Sa = 2.5 * ag
else:
    Sa = 2.5 * ag * (0.6 / T)
print(f"Accélération spectrale : {Sa:.2f}g")
# Force sismique
masse = 1000  # tonnes
F = masse * Sa * 9.81
print(f"Force sismique : {F:.0f} kN")`
            }
        ]
    },
    {
        id: 'civil-composites',
        category: 'Génie Civil',
        title: "Matériaux Composites",
        level: "Master",
        domain: "Matériaux Avancés",
        icon: "🧵",
        difficulty: "Expert",
        duration: "2h",
        description: "Renforcer des structures avec des fibres de carbone.",
        history: {
            year: "1960",
            people: ["Roger Bacon"],
            context: "Bacon développe les fibres de carbone haute performance, révolutionnant l'aéronautique et le génie civil (ponts, réparations)."
        },
        problemStatement: {
            context: "Réparer un pont ancien sans le démolir.",
            objective: "Calculer le renforcement nécessaire.",
            analogy: "Comme mettre un plâtre : on ajoute de la résistance là où c'est faible."
        },
        steps: [
            {
                title: "1. Loi des Mélanges",
                explanation: "E_composite = E_fibre·V_fibre + E_matrice·V_matrice.",
                code: `# Propriétés
E_carbone = 230  # GPa
E_epoxy = 3  # GPa
V_fibre = 0.6  # Fraction volumique
V_matrice = 1 - V_fibre
# Module du composite
E_composite = E_carbone*V_fibre + E_epoxy*V_matrice
print(f"Module du composite : {E_composite:.0f} GPa")
print(f"Gain par rapport à l'acier (210 GPa) : {(E_composite/210-1)*100:.0f}%")`
            }
        ]
    },

];
