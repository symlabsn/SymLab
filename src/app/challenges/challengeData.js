export const challenges = [
    {
        "id": "day_001",
        "title": "Jour 001 — Installation & Premier Notebook",
        "code": "import sympy as sp\nsp.__version__",
        "output": "version (ex: 1.12)",
        "exercises": [
            "Installer SymPy avec pip install sympy",
            "Vérifier la version installée",
            "Créer votre premier notebook Jupyter"
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
        "title": "Jour 004 — Résolution d'Équations Simples",
        "code": "from sympy import symbols, Eq, solve\nx = symbols('x')\nsolve(Eq(x**2-5*x+6,0), x)",
        "output": "[2, 3]",
        "exercises": [
            "Résoudre x² - 4 = 0",
            "Résoudre 2x² + 3x - 2 = 0",
            "Vérifier les solutions avec les relations de Viète"
        ]
    },
    {
        "id": "day_005",
        "title": "Jour 005 — Affichage Mathématique",
        "code": "from sympy import symbols, integrate, sin, pi, latex\nx = symbols('x')\nexpr = integrate(sin(x)/x, (x,0,pi))\nprint(latex(expr))",
        "output": "\\frac{\\pi}{2}",
        "exercises": [
            "Afficher une fraction en LaTeX",
            "Afficher une intégrale complexe",
            "Utiliser pprint() pour un affichage ASCII"
        ]
    },
    {
        "id": "day_006",
        "title": "Jour 006 — Polynômes",
        "code": "from sympy import symbols, Poly\nx = symbols('x')\np = Poly(x**4-5*x**2+4, x)\np.all_roots()",
        "output": "[-2, -1, 1, 2]",
        "exercises": [
            "Trouver les racines de x³ - 6x² + 11x - 6",
            "Décomposer en facteurs premiers",
            "Calculer le PGCD de deux polynômes"
        ]
    },
    {
        "id": "day_007",
        "title": "Jour 007 — Simplification Rationnelle",
        "code": "from sympy import symbols, apart\nx = symbols('x')\napart((x**2+1)/(x*(x-1)))",
        "output": "-1/x + 2/(x-1) + 1",
        "exercises": [
            "Décomposer 1/(x²-1)",
            "Décomposer (x+1)/(x²+x)",
            "Intégrer une fraction rationnelle après décomposition"
        ]
    },
    {
        "id": "day_008",
        "title": "Jour 008 — Numérique vs Symbolique",
        "code": "import sympy as sp\n# Exact\nsp.sqrt(2)\n# Numérique avec 50 décimales\nsp.N(sp.pi, 50)",
        "output": "π avec 50 décimales",
        "exercises": [
            "Comparer √2 symbolique et numérique",
            "Calculer e avec 100 décimales",
            "Montrer l'erreur de 0.1 + 0.2 en Python standard"
        ]
    },
    {
        "id": "day_009",
        "title": "Jour 009 — Dérivation Symbolique",
        "code": "from sympy import symbols, diff, exp, sin\nx = symbols('x')\ndiff(exp(x)*sin(x), x)",
        "output": "eˣ·sin(x) + eˣ·cos(x)",
        "exercises": [
            "Dériver x³·ln(x)",
            "Dériver sin(x²)",
            "Calculer la dérivée n-ième de eˣ"
        ]
    },
    {
        "id": "day_010",
        "title": "Jour 010 — Intégration Symbolique",
        "code": "from sympy import symbols, integrate, exp, oo\nx = symbols('x')\nintegrate(exp(-x**2), (x, -oo, oo))",
        "output": "√π",
        "exercises": [
            "Intégrer x·eˣ par parties",
            "Calculer ∫₀^π sin²(x) dx",
            "Intégrer 1/(1+x²) et retrouver arctan"
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
        "title": "Jour 020 — Architecte Géomètre",
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
        "title": "Jour 033 — Systèmes Linéaires",
        "code": "from sympy import symbols, Matrix, solve\nx, y, z = symbols('x y z')\n# Système 3x3\nA = Matrix([[2, 1, -1], [1, -1, 2], [3, 2, 1]])\nb = Matrix([8, -2, 14])\n# Solution\nA.LUsolve(b)",
        "output": "Matrix([[1], [2], [3]])",
        "exercises": [
            "Résoudre un système 2x2 à la main",
            "Système avec paramètre symbolique",
            "Interpréter géométriquement (intersection de plans)"
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
        "title": "Jour 036 — Probabilités Symboliques",
        "code": "from sympy.stats import Die, E, variance\nX = Die('X', 6)  # Dé à 6 faces\n# Espérance\nprint(f'E[X] = {E(X)}')\n# Variance\nprint(f'Var(X) = {variance(X)}')",
        "output": "E[X] = 7/2, Var(X) = 35/12",
        "exercises": [
            "Calculer P(X > 4) pour un dé",
            "Espérance d'une variable binomiale",
            "Loi de la somme de deux dés"
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
        "title": "Jour 041 — Séries de Fourier",
        "code": "from sympy import fourier_series, pi, symbols, plot\nx = symbols('x')\n# Série de Fourier d'un signal carré\ns = fourier_series(x, (x, -pi, pi))\n# Afficher les 3 premiers termes\ns.truncate(3)",
        "output": "2*sin(x) - sin(2*x) + 2*sin(3*x)/3",
        "exercises": [
            "Calculer la série de Fourier d'une dent de scie",
            "Visualiser la convergence (phénomène de Gibbs)",
            "Calculer l'énergie du signal"
        ]
    },
    {
        "id": "day_042",
        "title": "Jour 042 — Transformée de Laplace",
        "code": "from sympy import laplace_transform, inverse_laplace_transform, symbols, exp, sin\nt, s, a = symbols('t s a')\n# Transformée de sin(at)\nL = laplace_transform(sin(a*t), t, s)\nprint(f'L{{sin(at)}} = {L[0]}')",
        "output": "L{sin(at)} = a/(a**2 + s**2)",
        "exercises": [
            "Résoudre y'' + y = 0 avec Laplace",
            "Trouver la transformée inverse de 1/(s+1)^2",
            "Fonction de transfert d'un circuit RC"
        ]
    },
    {
        "id": "day_043",
        "title": "Jour 043 — Équations Différentielles Partielles",
        "code": "from sympy import Function, pde_separate, Eq, symbols\nx, t, c = symbols('x t c')\nu = Function('u')(x, t)\n# Équation des ondes 1D\neq = Eq(u.diff(t, 2), c**2 * u.diff(x, 2))\n# Séparation des variables u(x,t) = X(x)T(t)\npde_separate(eq, u, [Function('X')(x), Function('T')(t)])",
        "output": "[X''(x)/X(x), T''(t)/(c**2*T(t))]",
        "exercises": [
            "Résoudre l'équation de la chaleur 1D",
            "Vérifier si f(x-ct) est solution de l'équation d'onde",
            "Équation de Laplace en coordonnées polaires"
        ]
    },
    {
        "id": "day_044",
        "title": "Jour 044 — Calcul Vectoriel",
        "code": "from sympy.vector import CoordSys3D, Del\nC = CoordSys3D('C')\ndelop = Del()\n# Champ scalaire f = x^2 + y^2\nf = C.x**2 + C.y**2\n# Gradient\ndelop(f)",
        "output": "2*C.x*C.i + 2*C.y*C.j",
        "exercises": [
            "Calculer la divergence d'un champ radial",
            "Calculer le rotationnel d'un tourbillon",
            "Vérifier div(rot F) = 0"
        ]
    },
    {
        "id": "day_045",
        "title": "Jour 045 — Physique Q : Schrödinger",
        "code": "from sympy import symbols, Function, Eq, dsolve, hbar, m\nx, E = symbols('x E')\npsi = Function('psi')(x)\n# Équation de Schrödinger 1D particule libre (V=0)\neq = Eq(-hbar**2 / (2*m) * psi.diff(x, 2), E * psi)\ndsolve(eq, psi)",
        "output": "C1*exp(-i*x*sqrt(2mE)/hbar) + ...",
        "exercises": [
            "Particule dans une boîte 1D",
            "Normaliser une fonction d'onde",
            "Calculer la probabilité de présence"
        ]
    },
    {
        "id": "day_046",
        "title": "Jour 046 — Physique Q : Heisenberg",
        "code": "from sympy.physics.quantum import Commutator, Operator\nfrom sympy import I, hbar\nX = Operator('X')\nP = Operator('P')\n# Commutateur canonique\nCommutator(X, P).doit()",
        "output": "I*hbar",
        "exercises": [
            "Calculer l'incertitude minimale pour un électron",
            "Lien avec la transformée de Fourier",
            "Incertitude énergie-temps pour une particule instable"
        ]
    },
    {
        "id": "day_047",
        "title": "Jour 047 — Physique Q : Puits",
        "code": "from sympy import sin, pi, sqrt, integrate, symbols\nn, x, L = symbols('n x L', positive=True, integer=True)\n# Fonction d'onde normalisée\npsi = sqrt(2/L) * sin(n*pi*x/L)\n# Vérifier la normalisation\nintegrate(psi**2, (x, 0, L))",
        "output": "1",
        "exercises": [
            "Calculer la différence d'énergie E2 - E1",
            "Probabilité de trouver la particule au centre",
            "Puits de potentiel fini (effet tunnel)"
        ]
    },
    {
        "id": "day_048",
        "title": "Jour 048 — Physique Q : Spin",
        "code": "from sympy.physics.matrices import msigma\n# Matrices de Pauli\nsigma_x = msigma(1)\nsigma_y = msigma(2)\n# Commutateur [Sx, Sy]\ncomm = sigma_x * sigma_y - sigma_y * sigma_x\nprint(comm)",
        "output": "2*I*sigma_z",
        "exercises": [
            "Vérifier σx² = I",
            "Calculer les valeurs propres de σz",
            "Représentation sur la sphère de Bloch"
        ]
    },
    {
        "id": "day_049",
        "title": "Jour 049 — Physique Q : Oscillateur",
        "code": "from sympy.physics.qho_1d import psi_n, E_n\nfrom sympy import symbols, m, omega, hbar\nx = symbols('x')\n# Énergie du niveau n=0 (fondamental)\nE0 = E_n(0, omega)\n# Fonction d'onde n=0\npsi0 = psi_n(0, x, m, omega)",
        "output": "E0 = hbar*omega/2",
        "exercises": [
            "Vérifier l'orthogonalité des états",
            "Calculer <x> et <p> dans l'état fondamental",
            "Principe de correspondance (n grand)"
        ]
    },
    {
        "id": "day_050",
        "title": "Jour 050 — Téléportation Quantique",
        "code": "from sympy.physics.quantum.qubit import Qubit\nfrom sympy.physics.quantum.gate import H, CNOT\n# Création d'un état de Bell (intriqué)\n# |00> -> H -> (|00>+|10>)/sqrt(2) -> CNOT -> (|00>+|11>)/sqrt(2)\nq = Qubit('00')\ncircuit = CNOT(0, 1) * H(0)\nstate = circuit * q",
        "output": "sqrt(2)*|00>/2 + sqrt(2)*|11>/2",
        "exercises": [
            "Démontrer la violation des inégalités de Bell",
            "Protocole de téléportation quantique",
            "Cryptographie quantique (E91)"
        ]
    },
    {
        "id": "day_051",
        "title": "Jour 051 — Relativité : Temps",
        "code": "from sympy import symbols, sqrt, simplify\nv, c, t = symbols('v c t', positive=True)\n# Facteur de Lorentz\ngamma = 1 / sqrt(1 - v**2/c**2)\n# Temps propre vs Temps mesuré\nt_mesure = gamma * t\nprint(f'Facteur gamma pour v=0.9c : {gamma.subs(v, 0.9*c)}')",
        "output": "2.294",
        "exercises": [
            "Calculer le temps vécu par un astronaute (Paradoxe des jumeaux)",
            "Contraction d'un vaisseau spatial",
            "Addition des vitesses relativistes"
        ]
    },
    {
        "id": "day_052",
        "title": "Jour 052 — Relativité : E=mc²",
        "code": "from sympy import symbols, sqrt, solve, Eq\nE, m, p, c = symbols('E m p c', positive=True)\n# Relation complète E^2 = p^2c^2 + m^2c^4\n# Trouver la masse si on connait E et p (physique des particules)\neq = Eq(E**2, (p*c)**2 + (m*c**2)**2)\nsolve(eq, m)",
        "output": "[sqrt(E**2 - c**2*p**2)/c**2]",
        "exercises": [
            "Calculer l'énergie libérée par 1g de matière",
            "Défaut de masse dans une réaction nucléaire",
            "Énergie cinétique relativiste (E - mc²)"
        ]
    },
    {
        "id": "day_053",
        "title": "Jour 053 — Formes Différentielles",
        "code": "from sympy import symbols, diff, Function\nfrom sympy.diffgeom import Manifold, Patch, CoordSystem\nM = Manifold('M', 2)\npatch = Patch('P', M)\nx, y = symbols('x y', real=True)\nrect = CoordSystem('rect', patch, [x, y])\n# 1-forme omega = x*dx + y*dy\n# Dérivée extérieure d(omega) = dx∧dy",
        "output": "d(omega) = dx∧dy",
        "exercises": [
            "Calculer d(f dx) pour f=x²y",
            "Vérifier que d(d(f)) = 0",
            "Intégrale de ligne d'une 1-forme"
        ]
    },
    {
        "id": "day_054",
        "title": "Jour 054 — Géodésiques",
        "code": "from sympy import symbols, Function, dsolve, Derivative\n# Équation simplifiée d'une géodésique\nt = symbols('t')\nx = Function('x')(t)\n# x'' + Gamma * (x')^2 = 0\nGamma = symbols('Gamma')\neq = x.diff(t, 2) + Gamma * x.diff(t)**2\ndsolve(eq, x)",
        "output": "C1 + log(C2*t + 1)/Gamma",
        "exercises": [
            "Calculer la déviation de la lumière par le Soleil",
            "Expliquer l'avance du périhélie de Mercure",
            "Trajectoire d'un photon autour d'un trou noir"
        ]
    },
    {
        "id": "day_055",
        "title": "Jour 055 — Lois de Kepler",
        "code": "from sympy import symbols, pi, solve, Eq\nT, a, G, M = symbols('T a G M')\n# 3ème loi de Kepler : T^2 / a^3 = 4*pi^2 / (GM)\neq = Eq(T**2 / a**3, 4*pi**2 / (G*M))\n# Calculer la période T\nsolve(eq, T)",
        "output": "[-2*pi*a**(3/2)/sqrt(G*M), 2*pi*a**(3/2)/sqrt(G*M)]",
        "exercises": [
            "Calculer la période de Mars",
            "Vitesse de la Terre à l'aphélie vs périhélie",
            "Masse du Soleil à partir de l'orbite terrestre"
        ]
    },
    {
        "id": "day_056",
        "title": "Jour 056 — Étoiles : HR",
        "code": "from sympy import symbols, solve, Eq\nL, R, T, sigma = symbols('L R T sigma')\n# Loi de Stefan-Boltzmann\neq = Eq(L, 4*pi*R**2 * sigma * T**4)\n# Trouver le rayon R connaissant L et T\nsolve(eq, R)",
        "output": "[-sqrt(L)/(2*sqrt(pi)*sqrt(sigma)*T**2), ...]",
        "exercises": [
            "Calculer le rayon de Bételgeuse",
            "Estimer la durée de vie du Soleil",
            "Classer une étoile donnée (G2V)"
        ]
    },
    {
        "id": "day_057",
        "title": "Jour 057 — Cosmologie : Hubble",
        "code": "from sympy import symbols, units\nv, H0, d = symbols('v H0 d')\n# Loi de Hubble\n# H0 approx 70 km/s/Mpc\nval_H0 = 70 # km/s/Mpc\ndist = 100 # Mpc\nvitesse = val_H0 * dist\nprint(f'Vitesse de récession : {vitesse} km/s')",
        "output": "Vitesse de récession : 7000 km/s",
        "exercises": [
            "Calculer l'âge approximatif de l'univers",
            "Distance d'une galaxie avec z=0.1",
            "Horizon cosmologique"
        ]
    },
    {
        "id": "day_058",
        "title": "Jour 058 — Cosmologie : Big Bang",
        "code": "from sympy import symbols, Function, dsolve, Eq\na = Function('a')\nt, k, rho = symbols('t k rho')\n# Équation simplifiée (univers plat k=0, dominé matière)\n# (a'/a)^2 ~ 1/a^3  => a' ~ a^(-1/2)\neq = Eq(a(t).diff(t), t**(-1/2)) # Simplification conceptuelle\n# La vraie solution est a(t) ~ t^(2/3)",
        "output": "Modèle d'univers en expansion",
        "exercises": [
            "Évolution dans un univers dominé par le rayonnement",
            "Rôle de la constante cosmologique Λ",
            "Destin de l'univers selon Ω"
        ]
    },
    {
        "id": "day_059",
        "title": "Jour 059 — Problème de Kepler",
        "code": "from sympy import symbols, solve, sqrt, Eq\nG, M, m, r, v, E = symbols('G M m r v E')\n# Énergie totale\nE_eq = Eq(E, m*v**2/2 - G*M*m/r)\n# Vitesse de libération (E=0)\nv_lib = solve(E_eq.subs(E, 0), v)[1]\nprint(f'v_libération = {v_lib}')",
        "output": "sqrt(2*G*M/r)",
        "exercises": [
            "Calculer la période orbitale T(a)",
            "Relation énergie-excentricité",
            "Vitesse à l'aphélie vs périhélie"
        ]
    },
    {
        "id": "day_060",
        "title": "Jour 060 — Trous Noirs : Hawking",
        "code": "from sympy import symbols, pi, hbar, c, G, k\nM = symbols('M')\n# Température de Hawking\nT = hbar * c**3 / (8 * pi * G * M * k)\nprint(f'Température inversement proportionnelle à la masse')",
        "output": "T ~ 1/M",
        "exercises": [
            "Calculer la température d'un trou noir solaire",
            "Durée de vie d'un micro trou noir",
            "Lien avec l'entropie"
        ]
    },
    {
        "id": "day_061",
        "title": "Jour 061 — Régression Linéaire",
        "code": "from sympy import symbols, Sum, diff, solve\na, b, i, n = symbols('a b i n')\nx, y = symbols('x y', cls=Function)\n# Minimiser la somme des carrés des erreurs\nS = Sum((a*x(i) + b - y(i))**2, (i, 1, n))\n# Dérivées partielles nulles\neq1 = diff(S, a)\neq2 = diff(S, b)\nprint('Système à résoudre pour a et b')",
        "output": "Système d'équations normales",
        "exercises": [
            "Calculer la pente et l'ordonnée à l'origine pour 3 points",
            "Prouver que la droite passe par le point moyen (x̄, ȳ)",
            "Régression multivariée (concept)"
        ]
    },
    {
        "id": "day_062",
        "title": "Jour 062 — Classification : Logistique",
        "code": "from sympy import exp, plot, symbols\nz = symbols('z')\n# Fonction Sigmoïde (activation)\nsigmoid = 1 / (1 + exp(-z))\n# Dérivée de la sigmoïde (utile pour le gradient)\nd_sigmoid = sigmoid.diff(z).simplify()\nprint(f'Dérivée : {d_sigmoid}')",
        "output": "exp(-z)/(1 + exp(-z))**2",
        "exercises": [
            "Montrer que σ'(z) = σ(z)(1-σ(z))",
            "Tracer la fonction de coût pour y=1",
            "Calculer la probabilité pour z=0"
        ]
    },
    {
        "id": "day_063",
        "title": "Jour 063 — Réseaux de Neurones",
        "code": "from sympy import symbols, diff, Function\nx, w, b, y = symbols('x w b y')\n# Perceptron simple avec perte quadratique\na = x * w + b # Activation linéaire pour simplifier\nLoss = (a - y)**2\n# Gradient pour la mise à jour du poids w\ngrad_w = diff(Loss, w)\nprint(f'Gradient dw : {grad_w}')",
        "output": "2*x*(b + w*x - y)",
        "exercises": [
            "Calculer le gradient pour une activation Sigmoïde",
            "Architecture d'un réseau pour XOR",
            "Rôle du biais b"
        ]
    },
    {
        "id": "day_064",
        "title": "Jour 064 — Clustering : K-Means",
        "code": "from sympy import symbols, sqrt\nx1, y1, cx, cy = symbols('x1 y1 cx cy')\n# Distance au carré entre un point et un centroïde\ndist_sq = (x1 - cx)**2 + (y1 - cy)**2\n# Le centroïde optimal minimise cette distance (moyenne)\n# C'est un problème d'optimisation géométrique",
        "output": "Minimisation de la variance",
        "exercises": [
            "Calculer le nouveau centroïde de 3 points",
            "Pourquoi K-Means converge-t-il toujours ?",
            "Choisir le bon K (méthode du coude)"
        ]
    },
    {
        "id": "day_065",
        "title": "Jour 065 — PCA : Réduction Dim.",
        "code": "from sympy import Matrix, eye\n# Matrice de covariance exemple (2D)\nC = Matrix([[4, 2], [2, 3]])\n# Diagonalisation pour trouver les axes principaux\nP, D = C.diagonalize()\nprint(f'Valeurs propres (Variance) : {D}')",
        "output": "Matrix([[2, 0], [0, 5]])",
        "exercises": [
            "Calculer les vecteurs propres d'une matrice 2x2",
            "Pourcentage de variance expliquée",
            "Lien avec la SVD (Singular Value Decomposition)"
        ]
    },
    {
        "id": "day_066",
        "title": "Jour 066 — Bayes Naïf",
        "code": "from sympy import symbols\nP_Spam = 0.4\nP_Ham = 0.6\n# Mot 'Gratuit' : P(Gratuit|Spam)=0.8, P(Gratuit|Ham)=0.1\nP_G_S = 0.8\nP_G_H = 0.1\n# Proba que ce soit un Spam sachant 'Gratuit'\nP_S_G = (P_G_S * P_Spam) / (P_G_S * P_Spam + P_G_H * P_Ham)\nprint(f'P(Spam|Gratuit) = {P_S_G:.2f}')",
        "output": "P(Spam|Gratuit) = 0.84",
        "exercises": [
            "Calculer la probabilité avec deux mots",
            "Pourquoi l'hypothèse naïve est-elle fausse mais utile ?",
            "Gérer les mots inconnus"
        ]
    },
    {
        "id": "day_067",
        "title": "Jour 067 — Arbres de Décision",
        "code": "from sympy import log\n# Calcul de l'entropie d'un ensemble binaire (5 oui, 5 non)\np_oui = 0.5\np_non = 0.5\nEntropie = -(p_oui * log(p_oui, 2) + p_non * log(p_non, 2))\nprint(f'Entropie maximale (désordre) : {Entropie}')",
        "output": "Entropie maximale : 1.0",
        "exercises": [
            "Calculer l'entropie de (9 oui, 1 non)",
            "Calculer le gain d'information d'une division",
            "Différence entre Gini et Entropie"
        ]
    },
    {
        "id": "day_068",
        "title": "Jour 068 — Séries Temporelles",
        "code": "from sympy import symbols, Function\nt = symbols('t', integer=True)\nX = Function('X')\nphi = 0.8\n# Processus AR(1) : X_t = 0.8 * X_{t-1}\n# C'est une récurrence linéaire\n# SymPy peut résoudre les récurrences (rsolve)",
        "output": "X(t) = C * 0.8^t",
        "exercises": [
            "Calculer l'autocorrélation d'un AR(1)",
            "Différence entre marche aléatoire et bruit blanc",
            "Lissage exponentiel"
        ]
    },
    {
        "id": "day_069",
        "title": "Jour 069 — Optimisation : Gradient",
        "code": "from sympy import symbols, diff\nx = symbols('x')\n# Fonction convexe f(x) = x^2 - 4x + 5\nf = x**2 - 4*x + 5\n# Gradient (dérivée)\ngrad = diff(f, x)\n# Point critique (grad = 0)\nsolution = solve(grad, x)\nprint(f'Minimum en x = {solution[0]}')",
        "output": "Minimum en x = 2",
        "exercises": [
            "Effectuer 3 pas de descente manuellement",
            "Impact d'un taux d'apprentissage trop grand",
            "Problème des minimums locaux"
        ]
    },
    {
        "id": "day_070",
        "title": "Jour 070 — Théorie de l'Information",
        "code": "from sympy import log, Sum, symbols\np = symbols('p', positive=True)\n# Entropie d'une pièce biaisée (Bernoulli)\nH = -(p * log(p, 2) + (1-p) * log(1-p, 2))\n# Maximum pour p=0.5 (pièce équilibrée)\nprint('Entropie max pour p=0.5')",
        "output": "1 bit",
        "exercises": [
            "Calculer l'entropie d'un dé à 6 faces",
            "Lien entre compression ZIP et entropie",
            "Pourquoi le langage est-il redondant ?"
        ]
    },
    {
        "id": "day_071",
        "title": "Jour 071 — Arithmétique Modulaire",
        "code": "from sympy import mod_inverse, isprime\n# Inverse modulaire de 3 modulo 11\na = 3\nn = 11\ninv = mod_inverse(a, n)\nprint(f'{a} * {inv} ≡ 1 (mod {n})')\nprint(f'Vérification: {(a * inv) % n}')",
        "output": "3 * 4 ≡ 1 (mod 11), Vérification: 1",
        "exercises": [
            "Calculer 7^100 mod 13",
            "Résoudre 3x ≡ 5 (mod 11)",
            "Vérifier le théorème de Fermat pour p=7"
        ]
    },
    {
        "id": "day_072",
        "title": "Jour 072 — Cryptographie RSA",
        "code": "from sympy import nextprime, mod_inverse, gcd\n# Génération de clés RSA (petits nombres)\np, q = 61, 53\nn = p * q\nphi = (p-1) * (q-1)\ne = 17  # Exposant public\nd = mod_inverse(e, phi)  # Exposant privé\nprint(f'Clé publique: (e={e}, n={n})')\nprint(f'Clé privée: (d={d}, n={n})')",
        "output": "Clé publique: (e=17, n=3233), Clé privée: (d=2753, n=3233)",
        "exercises": [
            "Chiffrer le message m=123",
            "Déchiffrer c=855",
            "Pourquoi RSA est-il sûr ?"
        ]
    },
    {
        "id": "day_073",
        "title": "Jour 073 — Diffie-Hellman",
        "code": "from sympy import isprime, primitive_root\n# Paramètres publics\np = 23  # Nombre premier\ng = 5   # Générateur\n# Secrets\na = 6  # Secret d'Alice\nb = 15 # Secret de Bob\n# Échange public\nA = pow(g, a, p)\nB = pow(g, b, p)\n# Clé partagée\nK_alice = pow(B, a, p)\nK_bob = pow(A, b, p)\nprint(f'Clé partagée: {K_alice} = {K_bob}')",
        "output": "Clé partagée: 2 = 2",
        "exercises": [
            "Vérifier que g=5 est un générateur mod 23",
            "Calculer la clé pour a=10, b=20",
            "Pourquoi le log discret est-il difficile ?"
        ]
    },
    {
        "id": "day_074",
        "title": "Jour 074 — Courbes Elliptiques",
        "code": "from sympy import symbols, solve, Eq\nx, y = symbols('x y')\n# Courbe elliptique y^2 = x^3 + 7 (Bitcoin)\na, b = 0, 7\n# Points sur la courbe\neq = Eq(y**2, x**3 + a*x + b)\n# Trouver y pour x=2\nsolutions = solve(eq.subs(x, 2), y)\nprint(f'Points pour x=2: {solutions}')",
        "output": "Points pour x=2: [-sqrt(15), sqrt(15)]",
        "exercises": [
            "Vérifier qu'un point est sur la courbe",
            "Additionner deux points géométriquement",
            "Comparer ECC et RSA (taille de clé)"
        ]
    },
    {
        "id": "day_075",
        "title": "Jour 075 — Hachage Cryptographique",
        "code": "from sympy import symbols, factorial, binomial\n# Paradoxe des anniversaires (collisions)\nn = symbols('n', positive=True, integer=True)\n# Probabilité de collision avec n personnes\n# P(collision) ≈ 1 - exp(-n²/2m) pour m=365\n# Pour hachage, m = 2^256 (SHA-256)\nprint('Avec SHA-256 (2^256 sorties):')\nprint('Besoin de 2^128 hachages pour 50% de collision')",
        "output": "Besoin de 2^128 hachages pour 50% de collision",
        "exercises": [
            "Calculer P(collision) pour n=23, m=365",
            "Pourquoi MD5 est-il cassé ?",
            "Applications des arbres de Merkle"
        ]
    },
    {
        "id": "day_076",
        "title": "Jour 076 — Théorème Chinois",
        "code": "from sympy.ntheory.modular import crt\n# Système : x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7)\nmoduli = [3, 5, 7]\nremainders = [2, 3, 2]\n# Solution\nx = crt(moduli, remainders)\nprint(f'Solution: x ≡ {x[0]} (mod {x[1]})')",
        "output": "Solution: x ≡ 23 (mod 105)",
        "exercises": [
            "Vérifier la solution manuellement",
            "Résoudre avec 4 congruences",
            "Application à RSA (optimisation)"
        ]
    },
    {
        "id": "day_077",
        "title": "Jour 077 — Test de Primalité",
        "code": "from sympy import isprime, randprime, nextprime\n# Tester la primalité\nn = 561  # Nombre de Carmichael\nprint(f'{n} est premier ? {isprime(n)}')\n# Générer un grand nombre premier\np = randprime(10**10, 10**10 + 1000)\nprint(f'Premier aléatoire: {p}')",
        "output": "561 est premier ? False, Premier aléatoire: ...",
        "exercises": [
            "Implémenter le test de Fermat",
            "Trouver un nombre de Carmichael",
            "Comparer temps : division vs Miller-Rabin"
        ]
    },
    {
        "id": "day_078",
        "title": "Jour 078 — Factorisation",
        "code": "from sympy import factorint, nextprime\n# Factorisation\nn = 1234567890\nfactors = factorint(n)\nprint(f'Factorisation de {n}:')\nprint(factors)\n# Temps pour grands nombres\np = nextprime(10**15)\nq = nextprime(10**15 + 100)\nrsa_n = p * q\nprint(f'RSA-512 bits serait: {rsa_n}')",
        "output": "Factorisation de 1234567890: {2: 1, 3: 2, 5: 1, ...}",
        "exercises": [
            "Factoriser 8051 avec rho de Pollard",
            "Estimer le temps pour factoriser RSA-2048",
            "Impact de l'ordinateur quantique"
        ]
    },
    {
        "id": "day_079",
        "title": "Jour 079 — Générateurs Pseudo-Aléatoires",
        "code": "from sympy import nextprime, mod_inverse\n# Générateur Blum Blum Shub (simplifié)\np = nextprime(1000)\nq = nextprime(2000)\nM = p * q\nX0 = 7  # Graine\n# Générer 5 nombres\nX = X0\nfor i in range(5):\n    X = (X**2) % M\n    print(f'X{i+1} = {X}')",
        "output": "X1 = ..., X2 = ..., ...",
        "exercises": [
            "Implémenter un LCG",
            "Tester la période d'un PRNG",
            "Pourquoi /dev/random est-il sûr ?"
        ]
    },
    {
        "id": "day_080",
        "title": "Jour 080 — Coffre-Fort Cryptographique",
        "code": "from sympy import symbols, interpolate\nx = symbols('x')\n# Secret S = 1234, seuil k=3\nS = 1234\n# Polynôme P(x) = 1234 + 166x + 94x^2 (aléatoire)\nP = S + 166*x + 94*x**2\n# Distribuer 5 parts\nshares = [(i, P.subs(x, i)) for i in range(1, 6)]\nprint(f'Parts: {shares[:3]}')\n# Reconstituer avec 3 parts\npoints = shares[:3]\nP_reconstructed = interpolate(points, x)\nprint(f'Secret reconstitué: {P_reconstructed.subs(x, 0)}')",
        "output": "Secret reconstitué: 1234",
        "exercises": [
            "Vérifier qu'avec 2 parts on ne peut rien",
            "Implémenter (3,5)-threshold",
            "Application aux portefeuilles crypto"
        ]
    },
    {
        "id": "day_081",
        "title": "Jour undefined — Théorie du Chaos",
        "code": "from sympy import symbols, Function, dsolve\nt = symbols('t')\nx, y, z = symbols('x y z', cls=Function)\nsigma, rho, beta = 10, 28, 8/3\n# Le système ne se résout pas analytiquement !",
        "output": "Système non-intégrable symboliquement",
        "exercises": [
            "Tracer l'attracteur numériquement",
            "Calculer les points fixes",
            "Analyser la stabilité (Jacobienne)"
        ]
    },
    {
        "id": "day_082",
        "title": "Jour undefined — Fractales",
        "code": "from sympy import I, Abs\nz = 0\nc = 0.2 + 0.5*I\n# Première itération\nz = z**2 + c",
        "output": "Suite complexe bornée ou divergente",
        "exercises": [
            "Générer le triangle de Sierpinski",
            "Calculer la dimension fractale",
            "Coder l'ensemble de Julia"
        ]
    },
    {
        "id": "day_083",
        "title": "Jour undefined — Mécnique des Fluides",
        "code": "from sympy.vector import CoordSys3D, Del\nC = CoordSys3D('C')\ndelop = Del()\n# Champ de vitesse v\nv = C.x*C.i + C.y*C.j\n# Divergence (incompressibilité ?)\ndelop.dot(v)",
        "output": "2 (Fluide compressible car div != 0)",
        "exercises": [
            "Vérifier l'incompressibilité",
            "Écoulement de Poiseuille",
            "Tourbillon potentiel"
        ]
    },
    {
        "id": "day_084",
        "title": "Jour undefined — Épidémiologie (SIR)",
        "code": "from sympy import symbols, Function, dsolve, Eq\nt, beta, gamma = symbols('t beta gamma')\nS, I, R = symbols('S I R', cls=Function)\n# Équation simplifiée pour I au début (S ~ 1)\neq = Eq(I(t).diff(t), (beta - gamma)*I(t))",
        "output": "Croissance exponentielle si β > γ",
        "exercises": [
            "Calculer le pic épidémique",
            "Intégrer la vaccination",
            "Modèle SEIR (Exposed)"
        ]
    },
    {
        "id": "day_085",
        "title": "Jour undefined — Neurosciences",
        "code": "from sympy import exp, symbols\nV = symbols('V')\n# Fonction d'ouverture canal potassium (n)\nalpha_n = 0.01 * (V + 55) / (1 - exp(-(V + 55) / 10))",
        "output": "Fonction de taux de transition",
        "exercises": [
            "Modèle \"Integrate and Fire\"",
            "Simuler un train d'impulsions",
            "Réseau de 2 neurones"
        ]
    },
    {
        "id": "day_086",
        "title": "Jour undefined — Mouvement Brownien",
        "code": "from sympy.stats import Normal, E, variance\nt = symbols('t', positive=True)\n# W(t) ~ N(0, t)\nW = Normal('W', 0, t)\nprint(f'Variance: {variance(W)}')",
        "output": "Variance: t",
        "exercises": [
            "Simuler une marche aléatoire 1D",
            "Calculer la traversée moyenne",
            "Lien avec équation de la chaleur"
        ]
    },
    {
        "id": "day_087",
        "title": "Jour undefined — Calcul d'Itô",
        "code": "from sympy import symbols, Function, diff\nS, t, mu, sigma = symbols('S t mu sigma')\nf = Function('f')(S, t)\n# Terme de correction d'Itô (1/2 * sigma^2 * S^2 * f'')\ncorrection = 1/2 * sigma**2 * S**2 * f.diff(S, 2)",
        "output": "Correction de convexité",
        "exercises": [
            "Appliquer le lemme à f(x) = x²",
            "Différence Stratonovich vs Itô",
            "Résoudre dX = X dW"
        ]
    },
    {
        "id": "day_088",
        "title": "Jour undefined — Finance : Black-Scholes",
        "code": "from sympy import erf, log, exp, sqrt, symbols\nS, K, T, r, sigma = symbols('S K T r sigma')\n# d1 de Black-Scholes\nd1 = (log(S/K) + (r + sigma**2/2)*T) / (sigma*sqrt(T))",
        "output": "Formule analytique du prix",
        "exercises": [
            "Calculer le prix d'un Call",
            "Calculer les \"Greques\" (Delta, Gamma)",
            "Simuler un portefeuille de couverture"
        ]
    },
    {
        "id": "day_089",
        "title": "Jour undefined — Introduction aux Tenseurs",
        "code": "from sympy import Array, tensorproduct\nfrom sympy.abc import x, y, z\n# Tenseur de rang 2 (Matrice)\nA = Array([[x, y], [z, x**2]])\n# Produit tensoriel\ntensorproduct(A, A)",
        "output": "Tenseur de rang 4",
        "exercises": [
            "Calculer la trace comme contraction",
            "Manipuler des indices",
            "Tenseur métrique Euclidien"
        ]
    },
    {
        "id": "day_090",
        "title": "Jour undefined — Symboles de Christoffel",
        "code": "from sympy.diffgeom import Manifold, Patch, CoordSystem\nfrom sympy import symbols\n# Difficile en pur SymPy basique, nécessite diffgeom\n# Γ décrit comment les bases changent",
        "output": "Correction de courbure",
        "exercises": [
            "Calculer Γ pour les coordonnées polaires",
            "Calculer Γ pour une sphère",
            "Lien avec la force centrifuge"
        ]
    },
    {
        "id": "day_091",
        "title": "Jour undefined — Courbure de Riemann",
        "code": "from sympy import sin, symbols\n# Pour une sphère de rayon R\n# K = 1/R^2 (Courbure sectionnelle constante)",
        "output": "R_1212 non nul sur la sphère",
        "exercises": [
            "Courbure d'un cylindre (nulle !)",
            "Courbure d'une selle de cheval (négative)",
            "Géodésiques déviées"
        ]
    },
    {
        "id": "day_092",
        "title": "Jour undefined — Métrique de Schwarzschild",
        "code": "from sympy import symbols, diag, sin\n# Métrique g_mu_nu\ng = diag(-(1-2*M/r), 1/(1-2*M/r), r**2, r**2*sin(theta)**2)",
        "output": "Tenseur métrique 4x4",
        "exercises": [
            "Trouver l'horizon des événements",
            "Calculer le décalage spectral gravitationnel",
            "Orbites instables"
        ]
    },
    {
        "id": "day_093",
        "title": "Jour undefined — Génération de Code (C/Fortran)",
        "code": "from sympy.utilities.codegen import codegen\nfrom sympy import symbols, sin\nx, y = symbols('x y')\nexpr = (x + y)**10 * sin(x)\n# Générer du C\nprint(codegen(('f', expr), 'C')[0][1])",
        "output": "double f(double x, double y) { ... }",
        "exercises": [
            "Générer une fonction pour résoudre Ax=b",
            "Optimiser avec CSE",
            "Wrapper avec f2py"
        ]
    },
    {
        "id": "day_094",
        "title": "Jour undefined — Optimisation (Lagrange)",
        "code": "from sympy import symbols, grad, solve\nx, y, l = symbols('x y l')\nf = 4*x*y\ng = x**2/9 + y**2/16 - 1\n# Gradients et système",
        "output": "Points critiques sur l'ellipse",
        "exercises": [
            "Maximiser le volume d'une boîte",
            "Entropie maximale sous contrainte de moyenne",
            "Support Vector Machines (Dual)"
        ]
    },
    {
        "id": "day_095",
        "title": "Jour undefined — Théorie du Contrôle",
        "code": "from sympy import symbols, inverse_laplace_transform\ns, t, Kp, Ki = symbols('s t Kp Ki')\n# Fonction de transfert boucle fermée\nH = 1 / (s**2 + Kp*s + Ki)\n# Réponse impulsionnelle",
        "output": "Amorti ou oscillant selon Kp",
        "exercises": [
            "Régler un PID",
            "Stabilité (Routh-Hurwitz)",
            "Pendule inversé"
        ]
    },
    {
        "id": "day_096",
        "title": "Jour undefined — Mécanique Analytique (Lagrangien)",
        "code": "from sympy import symbols, diff, Function\nt = symbols('t')\nq = Function('q')(t)\nL = 1/2 * m * q.diff(t)**2 - 1/2 * k * q**2 # Oscillateur harmonique\n# Euler-Lagrange",
        "output": "m*q'' + k*q = 0",
        "exercises": [
            "Pendule double (Chaos)",
            "Brachistochrone",
            "Champs classiques (Densité Lagrangienne)"
        ]
    },
    {
        "id": "day_097",
        "title": "Jour undefined — Mécanique Hamiltonienne",
        "code": "from sympy import symbols, diff\np, q = symbols('p q')\nH = p**2/(2*m) + 1/2*k*q**2\n# Équations du mouvement",
        "output": "Flux dans l'espace des phases",
        "exercises": [
            "Théorème de Liouville",
            "Passage au quantique (H -> iħ∂/∂t)",
            "Systèmes intégrables"
        ]
    },
    {
        "id": "day_098",
        "title": "Jour undefined — Théorie des Perturbations",
        "code": "from sympy import symbols, series, Function, Eq\neps = symbols('eps')\n# x^2 + x + eps = 0\n# Racine proche de 0 ?",
        "output": "Développement asymptotique",
        "exercises": [
            "Anharmonicité du pendule",
            "Effet Zeeman (Quantique)",
            "Précession de Mercure"
        ]
    },
    {
        "id": "day_099",
        "title": "Jour undefined — Simulation Solaire",
        "code": "from sympy import symbols\n# Projet libre : Construire un solver complet\n# Entrée : Masse étoile, Composition\n# Sortie : Rayon, Luminosité, Durée de vie",
        "output": "Le Soleil simulé",
        "exercises": [
            "Coder le système d'équations",
            "Résoudre numériquement (scipy/sympy)",
            "Tracer le diagramme HR"
        ]
    },
    {
        "id": "day_100",
        "title": "Jour undefined — PROJET FINAL : Le Grand Œuvre",
        "code": "# LE GRAND ŒUVRE\n# 1. Choisir un domaine (Physique, Bio, Finance...)\n# 2. Modéliser (Équations)\n# 3. Résoudre (SymPy)\n# 4. Simuler (NumPy/C)\n# 5. Visualiser (Plot)\n# Votre chef-d'œuvre commence ici.",
        "output": "La connaissance absolue",
        "exercises": [
            "Valider le modèle",
            "Optimiser la performance",
            "Publier les résultats (Notebook)"
        ]
    }
];