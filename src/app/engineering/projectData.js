export const engineeringProjects = [
    // ==================================================================================
    // 📐 MATHÉMATIQUES (10 projets)
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
φ(n) = (p−1)(q−1)
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
            objective: "Calculer la limite du rapport F_{n+1}/F_n quand n tend vers l'infini.",
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
                explanation: "Le rapport tend vers (1+√5)/2.",
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
                explanation: "À chaque étape, on multiplie le périmètre par 4/3.",
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
            objective: "Calculer les coefficients aₙ et bₙ pour un signal carré.",
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
display(s.truncate(3))`
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
            objective: "Calculer ℗(au moins une paire) = 1 - ℗(tous différents).",
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
display(A)`
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
            objective: "Trouver le maximum de f(x) en résolvant f'(x) = 0.",
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
display(S)`
            },
            {
                title: "2. Dérivée et Point Critique",
                explanation: "On cherche où dS/dx = 0.",
                code: `dS = diff(S, x)
print("Dérivée dS/dx :")
display(dS)
x_opt = solve(dS, x)[0]
print(f"Dimension optimale : x = {x_opt}m")
print(f"Surface maximale : {S.subs(x, x_opt)}m²")`
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
display(eq)`
            },
            {
                title: "2. Solution Générale",
                explanation: "y(t) = C·e^(-kt).",
                code: `solution = dsolve(eq, y)
print("Solution :")
display(solution)`
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
            objective: "Calculer avec z = a + bi et utiliser e^(iθ) = cos(θ) + i·sin(θ).",
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
            objective: "c² = a² + b² - 2ab·cos(γ).",
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
            objective: "P(A|B) = P(B|A)·P(A) / P(B).",
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
            objective: "Maximiser z = 3x + 5y sous contraintes.",
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
print("Flux magnétique :")
display(Phi)`
            },
            {
                title: "2. Force Électromotrice",
                explanation: "ε = -dΦ/dt.",
                code: `epsilon = -diff(Phi, t)
print("FEM induite :")
display(epsilon)`
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
pH = pKa + log₁₀(A_minus / AH, 10)
print("Formule du pH :")
display(pH)`
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
# Exemple : A + B <=> C + D
eq = K - (C * D) / (A * B)
print("Expression de K :")
display(eq)`
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
t, k, n = symbols('t k n')
A = Function('A')(t)
# Ordre 1 : dA/dt = -k*A
eq = Eq(A.diff(t), -k*A)
sol = dsolve(eq)
print("Solution pour ordre 1 :")
display(sol)`
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
print("Potentiel de la pile :")
display(E)`
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
print("Enthalpie de réaction :")
display(DH_reaction)`
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
    // 🧬 BIOLOGIE (10 projets)
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
sol = dsolve(eq)
print("Solution logistique :")
display(sol)`
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
v = Vmax * S / (Km + S)
print("Vitesse enzymatique :")
display(v)`
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
P = Pmax * I / (K + I)
print("Production en fonction de la lumière :")
display(P)`
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
                explanation: "Système différentiel couplé.",
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

    // ==================================================================================
    // ⚡ ÉLECTRONIQUE & INFORMATIQUE (10 projets)
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
                code: `from sympy import symbols, I
R, L, C, omega = symbols('R L C omega', real=True)
Z = R + I*L*omega + 1/(I*C*omega)
print("Impédance totale :")
display(Z)`
            },
            {
                title: "2. Fréquence de Résonance",
                explanation: "La résonance se produit quand Im(Z) = 0.",
                code: `from sympy import solve, sqrt
partie_im = L*omega - 1/(C*omega)
omega_res = solve(partie_im, omega)[0]
print(f"Pulsation de résonance : {omega_res}")
# Résultat : 1/sqrt(LC)`
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
print("Gradient de l'erreur :")
display(gradient)`
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

    // ==================================================================================
    // 🏗️ GÉNIE CIVIL (5 projets supplémentaires)
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
                code: `from sympy import symbols, Function, dsolve
x, E, I, M = symbols('x E I M')
y = Function('y')(x)
eq = E*I*y.diff(x, x) + M
display(eq)`
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
print("Section d'acier nécessaire :")
display(As)`
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
print("Perte de charge :")
display(ΔP)`
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
print("Poussée active :")
display(Pa)`
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
print("Fréquence propre :")
display(f)`
            }
        ]
    }
];
