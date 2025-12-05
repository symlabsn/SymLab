export const challenges = [
    {
        "id": "day_001",
        "title": "Jour 001 — Installation & premier notebook",
        "code": "import sympy as sp\nsp.__version__",
        "output": "version (ex: 1.12)",
        "exercises": [
            "Installation : Installer SymPy avec pip install sympy",
            "Vérification : Vérifier la version installée",
            "Premier notebook : Créer votre premier notebook Jupyter"
        ]
    },
    {
        "id": "day_002",
        "title": "Jour 002 — Symbols & Types",
        "code": "from sympy import symbols\nx, y = symbols('x y')\nexpr = x + 2*y\nexpr",
        "output": "x + 2*y",
        "exercises": [
            "Créer des symboles avec différentes propriétés (positif, entier, réel)",
            "Construire une expression polynomiale",
            "Substituer des valeurs dans une expression"
        ]
    },
    {
        "id": "day_003",
        "title": "Jour 003 — Manipulations de Base",
        "code": "from sympy import symbols, expand, factor\nx = symbols('x')\nexpand((x+1)**3)",
        "output": "x³ + 3x² + 3x + 1",
        "exercises": [
            "Développer (x+2)⁴",
            "Factoriser x² - 4",
            "Simplifier (x²-1)/(x-1)"
        ]
    },
    {
        "id": "day_004",
        "title": "Jour 004 — Résolution d'équations",
        "code": "from sympy import symbols, Eq, solve\nx = symbols('x')\neq = Eq(x**2 - 5*x + 6, 0)\nsolve(eq, x)",
        "output": "[2, 3]",
        "exercises": [
            "Résoudre l'équation x³ - 1 = 0",
            "Trouver les racines de x² + 2x + 1 = 0",
            "Résoudre le système : x + y = 5, x - y = 1"
        ]
    },
    {
        "id": "day_005",
        "title": "Jour 005 — Affichage mathématique",
        "code": "from sympy import symbols, Integral, latex, init_printing\ninit_printing()\nx = symbols('x')\nexpr = Integral(1/x, x)\nexpr",
        "output": "∫ 1/x dx",
        "exercises": [
            "Afficher une intégrale définie de 0 à l'infini",
            "Générer le code LaTeX pour une fraction complexe",
            "Utiliser pprint pour un affichage ASCII art"
        ]
    },
    {
        "id": "day_006",
        "title": "Jour 006 — Polynômes",
        "code": "from sympy import symbols, Poly, roots\nx = symbols('x')\nP = x**3 - 6*x**2 + 11*x - 6\nroots(P)",
        "output": "{1: 1, 2: 1, 3: 1}",
        "exercises": [
            "Trouver les racines de x⁴ - 1",
            "Construire un polynôme à partir de ses racines [1, -1, 2]",
            "Obtenir les coefficients d'un polynôme"
        ]
    },
    {
        "id": "day_007",
        "title": "Jour 007 — Simplification rationnelle",
        "code": "from sympy import symbols, simplify, apart, together\nx = symbols('x')\nexpr = (x**2 + 2*x + 1) / (x + 1)\nsimplify(expr)",
        "output": "x + 1",
        "exercises": [
            "Simplifier (x² - 9) / (x - 3)",
            "Décomposer en éléments simples 1 / (x² - 1)",
            "Mettre au même dénominateur 1/x + 1/y"
        ]
    },
    {
        "id": "day_008",
        "title": "Jour 008 — Numérique vs Symbolique",
        "code": "from sympy import pi, N\n# 50 décimales de Pi\nN(pi, 50)",
        "output": "3.1415926535897932384626433832795028841971693993751",
        "exercises": [
            "Calculer racine de 2 avec 100 décimales",
            "Comparer 1/3 symbolique et 1/3 numérique",
            "Évaluer exp(1) avec 20 chiffres significatifs"
        ]
    },
    {
        "id": "day_009",
        "title": "Jour 009 — Dérivation symbolique",
        "code": "from sympy import symbols, diff, sin, exp\nx = symbols('x')\nf = exp(x) * sin(x)\ndiff(f, x)",
        "output": "exp(x)*sin(x) + exp(x)*cos(x)",
        "exercises": [
            "Calculer la dérivée de x² * log(x)",
            "Trouver la dérivée seconde de cos(x)",
            "Dériver une fonction composée sin(x²)"
        ]
    },
    {
        "id": "day_010",
        "title": "Jour 010 — Intégration symbolique",
        "code": "from sympy import symbols, integrate, sin, oo\nx = symbols('x')\nintegrate(sin(x), (x, 0, pi))",
        "output": "2",
        "exercises": [
            "Calculer la primitive de x * exp(x)",
            "Calculer l'intégrale définie de 1/(1+x²) de 0 à 1",
            "Calculer une intégrale impropre (jusqu'à l'infini)"
        ]
    },
    {
        "id": "day_011",
        "title": "Jour 011 — Limites",
        "code": "from sympy import symbols, limit, sin, oo\nx = symbols('x')\nlimit(sin(x)/x, x, 0)",
        "output": "1",
        "exercises": [
            "Calculer la limite de (1+1/x)^x en l'infini",
            "Trouver la limite de (x²-1)/(x-1) en 1",
            "Étudier la limite de tan(x) en pi/2"
        ]
    },
    {
        "id": "day_012",
        "title": "Jour 012 — Séries de Taylor",
        "code": "from sympy import symbols, sin, series\nx = symbols('x')\nseries(sin(x), x, 0, 6)",
        "output": "x - x³/6 + x⁵/120 + O(x⁶)",
        "exercises": [
            "Développer e^x à l'ordre 5",
            "Trouver la série de cos(x)",
            "Approximer ln(1+x) autour de 0"
        ]
    },
    {
        "id": "day_013",
        "title": "Jour 013 — Matrices",
        "code": "from sympy import Matrix, eye\nA = Matrix([[1, 2], [3, 4]])\nA.det()",
        "output": "-2",
        "exercises": [
            "Calculer l'inverse d'une matrice 2x2",
            "Multiplier deux matrices 3x3",
            "Calculer la trace d'une matrice"
        ]
    },
    {
        "id": "day_014",
        "title": "Jour 014 — Valeurs Propres",
        "code": "from sympy import Matrix\nA = Matrix([[1, 2], [2, 1]])\nA.eigenvals()",
        "output": "{-1: 1, 3: 1} (valeur: multiplicité)",
        "exercises": [
            "Trouver les vecteurs propres de la matrice",
            "Diagonaliser une matrice 2x2",
            "Vérifier le théorème de Cayley-Hamilton"
        ]
    },
    {
        "id": "day_015",
        "title": "Jour 015 — Systèmes Linéaires",
        "code": "from sympy import symbols, linsolve\nx, y, z = symbols('x y z')\nlinsolve([x + y + z - 1, x + y + 2*z - 3], (x, y, z))",
        "output": "{(1 - y - z, y, 2)}",
        "exercises": [
            "Résoudre un système 3x3 unique",
            "Résoudre un système paramétrique",
            "Trouver l'intersection de deux plans"
        ]
    },
    {
        "id": "day_016",
        "title": "Jour 016 — Équations Différentielles",
        "code": "from sympy import Function, dsolve, Eq, Derivative, symbols\ny = Function('y')\nx = symbols('x')\ndsolve(Eq(y(x).diff(x, x) - y(x), 0), y(x))",
        "output": "y(x) = C1*exp(-x) + C2*exp(x)",
        "exercises": [
            "Résoudre y' + y = 0",
            "Résoudre l'oscillateur harmonique y'' + y = 0",
            "Résoudre avec conditions initiales"
        ]
    },
    {
        "id": "day_017",
        "title": "Jour 017 — Transformée de Laplace",
        "code": "from sympy import laplace_transform, symbols, exp\nt, s = symbols('t s')\nlaplace_transform(t * exp(-t), t, s)",
        "output": "(1/(s + 1)**2, 0, True)",
        "exercises": [
            "Calculer la transformée de sin(t)",
            "Calculer la transformée inverse de 1/s",
            "Résoudre une EDO avec Laplace"
        ]
    },
    {
        "id": "day_018",
        "title": "Jour 018 — Transformée de Fourier",
        "code": "from sympy import fourier_transform, exp, symbols, pi\nx, k = symbols('x k')\nfourier_transform(exp(-x**2), x, k)",
        "output": "sqrt(pi)*exp(-pi**2*k**2)",
        "exercises": [
            "Calculer la transformée d'une porte (rect)",
            "Calculer la transformée de cos(x)",
            "Vérifier la linéarité"
        ]
    },
    {
        "id": "day_019",
        "title": "Jour 019 — Géométrie : Points & Lignes",
        "code": "from sympy import Point, Line\np1, p2 = Point(0, 0), Point(1, 1)\nl = Line(p1, p2)\nl.equation()",
        "output": "-x + y",
        "exercises": [
            "Calculer la distance entre deux points",
            "Trouver l'intersection de deux droites",
            "Projeter un point sur une droite"
        ]
    },
    {
        "id": "day_020",
        "title": "Jour 020 — Géométrie : Polygones",
        "code": "from sympy import Polygon, Point\nt = Polygon(Point(0,0), Point(1,0), Point(0,1))\nt.area",
        "output": "1/2",
        "exercises": [
            "Calculer l'aire d'un hexagone régulier",
            "Vérifier si un point est dans un polygone",
            "Trouver les intersections cercle-droite"
        ]
    },
    {
        "id": "day_021",
        "title": "Jour 021 — Combinatoire",
        "code": "from sympy import factorial, binomial\nn, k = 5, 2\nbinomial(n, k)",
        "output": "10",
        "exercises": [
            "Calculer 10!",
            "Combien de mains de 5 cartes dans un jeu de 52 ?",
            "Développer (x+y)⁴ avec les coefficients binomiaux"
        ]
    },
    {
        "id": "day_022",
        "title": "Jour 022 — Probabilités Discrètes",
        "code": "from sympy.stats import Die, P, E\nX = Die('X', 6)\nP(X > 4)",
        "output": "1/3",
        "exercises": [
            "Probabilité d'obtenir un double six avec deux dés",
            "Calculer l'espérance d'un dé à 6 faces",
            "Appliquer le théorème de Bayes (test médical)"
        ]
    },
    {
        "id": "day_023",
        "title": "Jour 023 — Statistiques Descriptives",
        "code": "from sympy.stats import Normal, density, E, variance\nX = Normal('X', 0, 1)\nE(X), variance(X)",
        "output": "(0, 1)",
        "exercises": [
            "Calculer la moyenne de [1, 2, 3, 4, 5]",
            "Trouver l'écart-type d'une distribution",
            "Calculer P(X < 1) pour X ~ N(0,1)"
        ]
    },
    {
        "id": "day_024",
        "title": "Jour 024 — Logique Booléenne",
        "code": "from sympy.logic import And, Or, Not, simplify_logic\nfrom sympy import symbols\nx, y = symbols('x y')\nsimplify_logic(Or(And(x, y), And(x, Not(y))))",
        "output": "x",
        "exercises": [
            "Simplifier (A∧B)∨(A∧¬B)",
            "Construire la table de vérité de XOR",
            "Appliquer les lois de De Morgan"
        ]
    },
    {
        "id": "day_025",
        "title": "Jour 025 — Théorie des Nombres",
        "code": "from sympy import isprime, factorint, gcd\nisprime(17), factorint(60)",
        "output": "(True, {2: 2, 3: 1, 5: 1})",
        "exercises": [
            "Trouver tous les nombres premiers < 100",
            "Décomposer 1024 en facteurs premiers",
            "Calculer PGCD(48, 18)"
        ]
    },
    {
        "id": "day_026",
        "title": "Jour 026 — Congruences",
        "code": "from sympy import Mod, mod_inverse\nMod(17, 5), mod_inverse(3, 7)",
        "output": "(2, 5)",
        "exercises": [
            "Calculer 2^100 mod 7",
            "Trouver l'inverse de 5 modulo 11",
            "Résoudre 3x ≡ 1 (mod 7)"
        ]
    },
    {
        "id": "day_027",
        "title": "Jour 027 — Cryptographie RSA",
        "code": "from sympy import randprime, mod_inverse, Mod\np, q = 61, 53\nn = p * q\nphi = (p-1) * (q-1)\ne = 17\nd = mod_inverse(e, phi)\nprint(f'Public: (e={e}, n={n}), Private: d={d}')",
        "output": "Public: (e=17, n=3233), Private: d=...",
        "exercises": [
            "Générer une paire de clés RSA avec p=11, q=13",
            "Chiffrer le message m=42",
            "Déchiffrer le message chiffré"
        ]
    },
    {
        "id": "day_028",
        "title": "Jour 028 — Théorie des Graphes",
        "code": "# SymPy n'a pas de module graphe natif, utiliser NetworkX\n# Exemple conceptuel\nfrom sympy import Matrix\n# Matrice d'adjacence\nA = Matrix([[0,1,1],[1,0,1],[1,1,0]])\nA.eigenvals()",
        "output": "{-1: 1, 2: 1}",
        "exercises": [
            "Dessiner un graphe K₅ (complet à 5 sommets)",
            "Vérifier si un graphe est connexe",
            "Trouver le plus court chemin (Dijkstra)"
        ]
    },
    {
        "id": "day_029",
        "title": "Jour 029 — Optimisation Linéaire",
        "code": "# SymPy peut résoudre symboliquement\nfrom sympy import symbols, solve\nx, y = symbols('x y', positive=True, real=True)\n# Exemple : max 3x + 2y sous x + y <= 4\n# Résolution manuelle ou avec solveurs externes",
        "output": "Solution optimale au sommet du polyèdre",
        "exercises": [
            "Résoudre un problème de production",
            "Problème du sac à dos (version continue)",
            "Trouver le dual d'un problème"
        ]
    },
    {
        "id": "day_030",
        "title": "Jour 030 — Physique : Cinématique",
        "code": "from sympy import symbols, Function, Eq, dsolve\nt = symbols('t', positive=True)\nx = Function('x')\n# Mouvement avec accélération constante\neq = Eq(x(t).diff(t, t), -9.81)\ndsolve(eq, x(t))",
        "output": "x(t) = C₁ + C₂*t - 4.905*t²",
        "exercises": [
            "Calculer la vitesse finale après 5s de chute libre",
            "Trouver la hauteur maximale d'un projectile",
            "Résoudre x'' = -g avec conditions initiales"
        ]
    },
    {
        "id": "day_031",
        "title": "Jour 031 — Physique : Dynamique",
        "code": "from sympy import symbols, Eq, solve\nm, a, F_poussee, F_frottement = symbols('m a F_p F_f')\n# 2ème loi de Newton : F_p - F_f = ma\neq = Eq(F_poussee - F_frottement, m * a)\nsolve(eq, a)",
        "output": "[(-F_f + F_p)/m]",
        "exercises": [
            "Calculer l'accélération d'un bloc sur un plan incliné",
            "Déterminer la force nécessaire pour déplacer une masse",
            "Système de poulies (machine d'Atwood)"
        ]
    },
    {
        "id": "day_032",
        "title": "Jour 032 — Physique : Énergie",
        "code": "from sympy import symbols, solve, Eq\nm, v, g, h = symbols('m v g h')\n# Conservation : Ec_initiale + Ep_initiale = Ec_finale + Ep_finale\n# Chute libre : mgh = 1/2 mv^2\neq = Eq(m*g*h, 1/2 * m * v**2)\nsolve(eq, v)",
        "output": "[-1.414*sqrt(g*h), 1.414*sqrt(g*h)]",
        "exercises": [
            "Vitesse d'un pendule au point bas",
            "Ressort comprimé (énergie élastique)",
            "Travail d'une force variable"
        ]
    },
    {
        "id": "day_033",
        "title": "Jour 033 — Chimie : Équations",
        "code": "from sympy.chem import Balance\n# Combustion du méthane : CH4 + O2 -> CO2 + H2O\nreac = Balance([('C', 1), ('H', 4)], [('O', 2)], [('C', 1), ('O', 2)], [('H', 2), ('O', 1)])\n# Note: SymPy a un module chem, mais on peut aussi utiliser linsolve\n# Ici on simule le résultat pour l'exemple simple\nprint('CH4 + 2O2 -> CO2 + 2H2O')",
        "output": "CH4 + 2O2 -> CO2 + 2H2O",
        "exercises": [
            "Équilibrer la photosynthèse",
            "Réaction acide-base",
            "Calculer la masse molaire"
        ]
    },
    {
        "id": "day_034",
        "title": "Jour 034 — Chimie : Cinétique",
        "code": "from sympy import Function, dsolve, Eq, symbols\nC = Function('C')\nt, k = symbols('t k')\n# Réaction d'ordre 1 : dC/dt = -kC\neq = Eq(C(t).diff(t), -k * C(t))\ndsolve(eq, C(t))",
        "output": "C(t) = C1 * exp(-k*t)",
        "exercises": [
            "Cinétique d'ordre 2",
            "Calculer la demi-vie",
            "Influence de la température (Arrhenius)"
        ]
    },
    {
        "id": "day_035",
        "title": "Jour 035 — Biologie : Populations",
        "code": "from sympy import Function, dsolve, Eq, symbols\nN = Function('N')\nt, r, K = symbols('t r K')\n# Modèle logistique\neq = Eq(N(t).diff(t), r * N(t) * (1 - N(t)/K))\n# Solution générale (complexe, SymPy peut la trouver)",
        "output": "N(t) = K / (1 + C1*exp(-rt))",
        "exercises": [
            "Résoudre le modèle exponentiel",
            "Trouver la population à l'équilibre",
            "Modèle Proie-Prédateur (Lotka-Volterra)"
        ]
    },
    {
        "id": "day_036",
        "title": "Jour 036 — Biologie : Génétique",
        "code": "from sympy import Symbol, expand\n# Croisement hybride Aa x Aa\nA, a = Symbol('A'), Symbol('a')\nparent1 = A + a\nparent2 = A + a\n# Distribution des génotypes\nexpand(parent1 * parent2)",
        "output": "A**2 + 2*A*a + a**2",
        "exercises": [
            "Interpréter A^2 + 2Aa + a^2",
            "Croisement dihybride (AABB x aabb)",
            "Calculer la probabilité d'un trait récessif"
        ]
    },
    {
        "id": "day_037",
        "title": "Jour 037 — Économie : Finance",
        "code": "from sympy import symbols, solve, Eq\nP, r, t, A = symbols('P r t A')\n# Formule intérêt composé continu : A = P * exp(rt)\n# Combien de temps pour doubler son capital ? (A = 2P)\neq = Eq(2*P, P * 2.718** (r*t))\nsolve(eq, t)",
        "output": "[0.693/r] (Règle de 72)",
        "exercises": [
            "Calculer les mensualités d'un prêt",
            "Comparer deux investissements",
            "Calculer la valeur future d'une épargne"
        ]
    },
    {
        "id": "day_038",
        "title": "Jour 038 — Économie : Marchés",
        "code": "from sympy import symbols, Eq, solve\nP = symbols('P')\nQd = 100 - 2*P  # Demande\nQs = 20 + 3*P   # Offre\n# Équilibre\neq = Eq(Qd, Qs)\nprix_eq = solve(eq, P)[0]\nquantite_eq = Qd.subs(P, prix_eq)\nprint(f'Prix: {prix_eq}, Quantité: {quantite_eq}')",
        "output": "Prix: 16, Quantité: 68",
        "exercises": [
            "Calculer l'impact d'une taxe",
            "Trouver le nouvel équilibre après un choc",
            "Calculer l'élasticité"
        ]
    },
    {
        "id": "day_039",
        "title": "Jour 039 — Ingénierie : RDM",
        "code": "from sympy import symbols, integrate\nx, L, F, E, I = symbols('x L F E I')\n# Moment fléchissant pour une poutre encastrée avec force au bout\nM = -F * (L - x)\n# Équation de la déformée : EI y'' = M\n# On intègre deux fois pour avoir y(x)\ny_prime_prime = M / (E*I)\n# ... intégration symbolique ...",
        "output": "Flèche max = F*L^3 / (3*E*I)",
        "exercises": [
            "Calculer la flèche d'une poutre sur deux appuis",
            "Diagramme des moments",
            "Dimensionner une poutre en acier"
        ]
    },
    {
        "id": "day_040",
        "title": "Jour 040 — Ingénierie : Circuits",
        "code": "from sympy import symbols, solve, I\nR, L, C, omega = symbols('R L C omega', real=True)\n# Impédance RLC série\nZ = R + I*omega*L + 1/(I*omega*C)\n# Fréquence de résonance (partie imaginaire nulle)\nsolve(Z.as_real_imag()[1], omega)",
        "output": "[1/sqrt(L*C), -1/sqrt(L*C)]",
        "exercises": [
            "Calculer le courant dans un pont de Wheatstone",
            "Filtre passe-bas RC",
            "Puissance active et réactive"
        ]
    },
    {
        "id": "day_041",
        "title": "Jour 041 — Intégrales multiples",
        "code": "from sympy import symbols, integrate\nx,y = symbols('x y')\nintegrate(integrate(x*y,(x,0,1)),(y,0,1))",
        "output": "\\(\\frac{1}{4}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_042",
        "title": "Jour 042 — Changement de variables",
        "code": "# Jacobian example (symbolic)\n# montrer calcul du Jacobien",
        "output": "\\(\\text{Jacobian matrix}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_043",
        "title": "Jour 043 — Calcul vectoriel",
        "code": "# grad/div/curl via sympy.vector\n# exemple",
        "output": "\\(\\nabla f,\\ \\nabla\\cdot\\vec{F},\\ \\nabla\\times\\vec{F}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_044",
        "title": "Jour 044 — Champs scalaires & vectoriels",
        "code": "# Exemple: champ scalaire et gradient",
        "output": "\\(\\text{Gradient symbolique}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_045",
        "title": "Jour 045 — Analyse d'erreurs",
        "code": "# Symbolic vs numeric errors; Taylor remainder\n# exemple",
        "output": "\\(\\text{Expression d'erreur / majorant}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_046",
        "title": "Jour 046 — Séries de Laurent",
        "code": "from sympy import symbols, series\nx = symbols('x')\nseries(1/(1-x), x, 1, 3)",
        "output": "\\(\\text{Laurent autour de } x=1\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_047",
        "title": "Jour 047 — Résidus & intégrales complexes",
        "code": "# Résidu example using sympy.residue\n# compute residue",
        "output": "\\(\\text{Résidu (valeur numérique/simple)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_049",
        "title": "Jour 049 — Trigono avancée",
        "code": "from sympy import symbols, trigsimp\nx = symbols('x')\ntrigsimp(sin(x)*cos(x))",
        "output": "\\(\\frac{\\sin(2x)}{2}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_050",
        "title": "Jour 050 — Revue mi-parcours",
        "code": "# Récapitulatif et QCM\n# corriger exercices",
        "output": "\\(\\text{Revue / tests intermédiaires}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_052",
        "title": "Jour 052 — Régression symbolique",
        "code": "# Résoudre les équations normales symboliquement\n# exemple",
        "output": "\\(\\text{Solution } \\theta = (A^T A)^{-1}A^T b\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_053",
        "title": "Jour 053 — Gradients ML",
        "code": "# symbolic gradient of MSE\nfrom sympy import symbols, diff\n# example",
        "output": "\\(\\nabla J(\\theta) \\text{ symbolic}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_054",
        "title": "Jour 054 — Systèmes non-linéaires",
        "code": "# Jacobian & Newton method example",
        "output": "\\(\\text{Jacobian matrix and Newton step}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_055",
        "title": "Jour 055 — Linéarisation",
        "code": "# Linearize f(x) around x0 using Jacobian\n# example",
        "output": "\\(\\text{Linear approximation: } f(x_0)+J(x_0)(x-x_0)\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_056",
        "title": "Jour 056 — Analyse de stabilité",
        "code": "# eigenvalues of Jacobian to classify fixed point",
        "output": "\\(\\text{Eigenvalues (stability)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_057",
        "title": "Jour 057 — Modèle SIR",
        "code": "# Define SIR ODEs symbolically\n# example",
        "output": "\\(\\dot S = -\\beta S I,\\ \\dot I = \\beta S I - \\gamma I\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_058",
        "title": "Jour 058 — Cinétique chimique",
        "code": "# Rate laws symbolic example",
        "output": "\\(\\text{Rate expressions symbolic}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_059",
        "title": "Jour 059 — Équations de conservation",
        "code": "# PDE conservation form example",
        "output": "\\(\\partial_t u + \\nabla\\cdot F(u)=0\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_060",
        "title": "Jour 060 — Circuits RLC",
        "code": "from sympy import symbols\ns,R,L,C = symbols('s R L C')\nH = 1/(L*C*s**2 + R*C*s + 1)\nH",
        "output": "\\(H(s)=\\frac{1}{LCs^{2}+RCs+1}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_061",
        "title": "Jour 061 — Pôles & zéros",
        "code": "# Solve denominator == 0 to get poles",
        "output": "\\(\\text{Poles = roots of } LCs^2+RCs+1\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_062",
        "title": "Jour 062 — Transformée Z",
        "code": "# Intro to Z-transform (symbolic)",
        "output": "\\(\\text{Z-transform (symbolic)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_063",
        "title": "Jour 063 — Laplace appliquée",
        "code": "# Circuit analysis via Laplace (example)",
        "output": "\\(H(s) \\text{ examples}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_064",
        "title": "Jour 064 — Énergie masse-ressort",
        "code": "# Define T (kinetic) and V (potential) symbolically",
        "output": "\\(T+V \\text{ symbolic}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_065",
        "title": "Jour 065 — Masse-ressort amorti",
        "code": "# Characteristic equation and discriminant",
        "output": "\\(\\text{Roots depend on damping (over/crit/under)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_067",
        "title": "Jour 067 — Analyse modale",
        "code": "# Build K and M matrices symbolically",
        "output": "\\(\\text{Generalized eigenproblem } Kx=\\lambda M x\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_068",
        "title": "Jour 068 — Thermodynamique symbolique",
        "code": "# PV=nRT manipulations",
        "output": "\\(PV=nRT\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_069",
        "title": "Jour 069 — Équilibre chimique",
        "code": "# K equilibrium expressions symbolic",
        "output": "\\(K = \\frac{[products]}{[reactants]}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_070",
        "title": "Jour 070 — Optique simplifiée",
        "code": "# Wave equation symbolic form",
        "output": "\\(\\text{Wave PDE (symbolic)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_071",
        "title": "Jour 071 — Cinématique 2R",
        "code": "from sympy import symbols, Matrix, cos, sin\nth1,th2,l1,l2 = symbols('th1 th2 l1 l2')\nx = l1*cos(th1)+l2*cos(th1+th2)\ny = l1*sin(th1)+l2*sin(th1+th2)\nMatrix([x,y])",
        "output": "\\(\\begin{pmatrix}x\\\\y\\end{pmatrix}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_072",
        "title": "Jour 072 — Contrôle PID",
        "code": "# PID law symbolic\n# example: U = Kp*e + Ki*∫e + Kd*de/dt",
        "output": "\\(\\text{PID control law}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_073",
        "title": "Jour 073 — Optimisation contrainte",
        "code": "# KKT conditions symbolic example",
        "output": "\\(\\text{KKT system}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_074",
        "title": "Jour 074 — Hybrid symbolic-numeric",
        "code": "from sympy import symbols, lambdify\nx= symbols('x')\nf = lambdify(x, sin(x), 'numpy')",
        "output": "\\(\\text{Callable numpy function}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_075",
        "title": "Jour 075 — Réduction de modèle",
        "code": "# model order reduction ideas (symbolic)",
        "output": "\\(\\text{Reduced model form}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_076",
        "title": "Jour 076 — EDO non-linéaires pratiques",
        "code": "# Nonlinear ODE example and methods",
        "output": "\\(\\text{Qualitative solution / bifurcation}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_077",
        "title": "Jour 077 — Bifurcations",
        "code": "# illustrate saddle-node / pitchfork symbolically",
        "output": "\\(\\text{Bifurcation conditions}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_078",
        "title": "Jour 078 — Analyse fréquentielle",
        "code": "# Bode symbolic approx from transfer function",
        "output": "\\(\\text{Magnitude/phase symbolic}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_079",
        "title": "Jour 079 — lambdify: codegen",
        "code": "from sympy import symbols, lambdify\nx= symbols('x')\nf = lambdify(x, sin(x), 'numpy')",
        "output": "\\(\\text{Python callable function}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_080",
        "title": "Jour 080 — Validation vs simulation",
        "code": "# compare symbolic solution to numeric integration (concept)",
        "output": "\\(\\text{Comparison plots}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_081",
        "title": "Jour 081 — Reproductibilité notebooks",
        "code": "# best practices: seed, environment, outputs",
        "output": "\\(\\text{Reproducibility checklist}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_082",
        "title": "Jour 082 — Notebook -&gt; script",
        "code": "# nbconvert --to script usage and example",
        "output": "\\(\\text{Exported .py script}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_083",
        "title": "Jour 083 — Tests unitaires",
        "code": "# pytest example for a symbolic function",
        "output": "\\(\\text{Unit tests for symbolic code}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_084",
        "title": "Jour 084 — Performance & simplification",
        "code": "# simplify before lambdify for speed",
        "output": "\\(\\text{Timing improvements}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_085",
        "title": "Jour 085 — Visualisation",
        "code": "# plotting symbolic curves with sympy.plot",
        "output": "\\(\\text{Plot object / image}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_086",
        "title": "Jour 086 — Projet RLC complet",
        "code": "# RLC full symbolic walkthrough",
        "output": "\\(\\text{Transfer function, poles, step response}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_087",
        "title": "Jour 087 — Projet robot 2R",
        "code": "# dynamics & IK symbolic",
        "output": "\\(\\text{Dynamics and IK expressions}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_088",
        "title": "Jour 088 — Projet SIR avancé",
        "code": "# SIR with parameter estimation symbolic setup",
        "output": "\\(\\text{Symbolic ODE + params}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_089",
        "title": "Jour 089 — Projet optimisation",
        "code": "# objective + constraints symbolic setup",
        "output": "\\(\\text{KKT system}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_090",
        "title": "Jour 090 — CI pour notebooks",
        "code": "# example GitHub Actions to run notebooks",
        "output": "\\(\\text{YAML workflow}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_091",
        "title": "Jour 091 — Slides from notebooks",
        "code": "# nbconvert --to slides usage",
        "output": "\\(\\text{HTML slides}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_092",
        "title": "Jour 092 — README techniques",
        "code": "# structure and metadata for notebooks",
        "output": "\\(\\text{README template}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_093",
        "title": "Jour 093 — Préparation démos",
        "code": "# packaging and reproducible demo run",
        "output": "\\(\\text{Runbook}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_094",
        "title": "Jour 094 — Peer review notebooks",
        "code": "# checklist items for reviewers",
        "output": "\\(\\text{Peer review checklist}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_095",
        "title": "Jour 095 — Packaging final",
        "code": "# zip, metadata, license",
        "output": "\\(\\text{Packaging manifest}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_096",
        "title": "Jour 096 — Projet final démarrage",
        "code": "# kickoff checklist for final project",
        "output": "\\(\\text{Kickoff tasks}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_097",
        "title": "Jour 097 — Projet final dev",
        "code": "# dev milestones and symbolic tests",
        "output": "\\(\\text{Dev tasks}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_098",
        "title": "Jour 098 — Projet final tests",
        "code": "# tests, CI, benchmarks",
        "output": "\\(\\text{Test plan}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_099",
        "title": "Jour 099 — Répétition générale",
        "code": "# rehearsal checklist for presentations",
        "output": "\\(\\text{Timing & checklist}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_100",
        "title": "Jour 100 — Clôture & certificats",
        "code": "# final wrap-up, certificates",
        "output": "\\(\\text{Certificate template}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    }
];