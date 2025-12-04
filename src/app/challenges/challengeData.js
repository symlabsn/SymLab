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
        "code": "from sympy import symbols, limit, sin\nx = symbols('x')\nlimit(sin(x)/x, x, 0)",
        "output": "\\(1\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_012",
        "title": "Jour 012 — Paramètres & constantes",
        "code": "import sympy as sp\na = sp.symbols('a', positive=True)\nsp.solve(sp.Eq(a*sp.symbols('x'),1), sp.symbols('x'))",
        "output": "\\(\\frac{1}{a}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_013",
        "title": "Jour 013 — Séries de Taylor",
        "code": "from sympy import symbols, series, sin\nx = symbols('x')\nseries(sin(x), x, 0, 6)",
        "output": "\\(x - \\frac{x^{3}}{6} + \\frac{x^{5}}{120} + O(x^{6})\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_014",
        "title": "Jour 014 — Mini-projet 1",
        "code": "# Mini-projet: résumé des jours 1-13\n# livrable : notebook",
        "output": "\\(\\text{Mini-projet (document + notebook)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_015",
        "title": "Jour 015 — Factorisation avancée",
        "code": "from sympy import symbols, factor\nx = symbols('x')\nfactor(x**4-5*x**2+4)",
        "output": "\\((x - 2)(x - 1)(x + 1)(x + 2)\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_016",
        "title": "Jour 016 — PGCD & division euclidienne",
        "code": "from sympy import symbols, gcd\nx = symbols('x')\ngcd(x**3-1, x**2-1)",
        "output": "\\(x - 1\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_017",
        "title": "Jour 017 — Trigonométrie symbolique",
        "code": "from sympy import symbols, simplify, sin, cos\nx = symbols('x')\nsimplify(sin(x)**2 + cos(x)**2)",
        "output": "\\(1\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_018",
        "title": "Jour 018 — Polynômes supérieurs",
        "code": "from sympy import symbols, nroots\nx = symbols('x')\nnroots(x**5 - x + 1)",
        "output": "\\(\\text{(5 racines numériques)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_019",
        "title": "Jour 019 — Partial fractions",
        "code": "from sympy import symbols, apart\nx = symbols('x')\napart((x+2)/(x*(x-1)))",
        "output": "\\(\\frac{2}{x}+\\frac{1}{x-1}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_020",
        "title": "Jour 020 — Systèmes linéaires",
        "code": "from sympy import symbols, Eq, solve\nx,y = symbols('x y')\nsolve([Eq(2*x+3*y,6), Eq(x-y,1)], [x,y])",
        "output": "\\(\\{x:\\tfrac{9}{5},\\,y:\\tfrac{4}{5}\\}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_021",
        "title": "Jour 021 — Matrices symboliques",
        "code": "from sympy import Matrix\nA = Matrix([[1,2],[3,4]])\nA",
        "output": "\\(\\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_022",
        "title": "Jour 022 — Déterminant & trace",
        "code": "from sympy import Matrix\nA=Matrix([[1,2],[3,4]])\nA.det(), A.trace()",
        "output": "\\((-2,\\ 5)\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_023",
        "title": "Jour 023 — Inverse & systèmes matriciels",
        "code": "from sympy import Matrix\nA=Matrix([[1,2],[3,4]])\nA.inv()",
        "output": "\\(A^{-1} = \\begin{pmatrix}-2 & 1\\\\\\tfrac{3}{2} & -\\tfrac{1}{2}\\end{pmatrix}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_024",
        "title": "Jour 024 — Valeurs propres",
        "code": "from sympy import Matrix\nA=Matrix([[2,1],[1,2]])\nA.eigenvals()",
        "output": "\\(\\{1:1,\\,3:1\\}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_025",
        "title": "Jour 025 — Diagonalisation",
        "code": "from sympy import Matrix\nA=Matrix([[2,1],[1,2]])\nA.diagonalize()",
        "output": "\\((P,D) \\text{ with } D=\\operatorname{diag}(1,3)\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_026",
        "title": "Jour 026 — Dérivées partielles",
        "code": "from sympy import symbols, diff\nx,y = symbols('x y')\ndiff(x**2 + x*y + y**2, x)",
        "output": "\\(2x + y\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_027",
        "title": "Jour 027 — Hessian & convexité",
        "code": "from sympy import symbols, hessian\nx,y = symbols('x y')\nf = x**2 + x*y + y**2\nhessian(f,(x,y))",
        "output": "\\(\\begin{pmatrix}2 & 1\\\\1 & 2\\end{pmatrix}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_028",
        "title": "Jour 028 — Optimisation simple",
        "code": "from sympy import symbols, diff, solve\nx = symbols('x')\nf = x**2 - 4*x + 3\n# Trouver le minimum\ncritical_points = solve(diff(f, x), x)\nprint(f\"Point critique: {critical_points}\")\nprint(f\"Valeur minimale: {f.subs(x, critical_points[0])}\")",
        "output": "\\(\\text{Point critique: [2], Valeur minimale: -1}\\)",
        "exercises": [
            "Exercice 1 — Trouver le minimum de f(x) = x³ - 6x² + 9x + 1.",
            "Exercice 2 — Optimiser une fonction à deux variables f(x,y) = x² + y² - 2x - 4y.",
            "Exercice 3 — Application : maximiser le volume d'une boîte avec contrainte de surface."
        ]
    },
    {
        "id": "day_029",
        "title": "Jour 029 — Lagrangiens",
        "code": "from sympy import symbols\nx,y,lam = symbols('x y lam')\nL = x**2+y**2+lam*(x+y-1)\n[diff(L,v) for v in (x,y,lam)]",
        "output": "\\([2x+\\lambda,\\,2y+\\lambda,\\,x+y-1]\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_030",
        "title": "Jour 030 — Mini-projet 2",
        "code": "# Mini-projet: optimisation d'un exemple physique\n# livrable : notebook",
        "output": "\\(\\text{Mini-projet (rapport + notebook)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_031",
        "title": "Jour 031 — EDO ordre 1",
        "code": "from sympy import symbols, Function, dsolve, Eq\nt = symbols('t')\ny = Function('y')\ndsolve(Eq(y(t).diff(t) - y(t), 0))",
        "output": "\\(y(t) = C_{1} e^{t}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_032",
        "title": "Jour 032 — EDO ordre 2",
        "code": "from sympy import symbols, Function, dsolve, Eq\nt = symbols('t')\ny = Function('y')\ndsolve(Eq(y(t).diff(t,2) + y(t), 0))",
        "output": "\\(y(t) = C_{1}\\cos t + C_{2}\\sin t\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_033",
        "title": "Jour 033 — Systèmes d'EDO",
        "code": "# Exemple: système couplé (concept)\n# dsolve peut résoudre certains cas",
        "output": "\\(\\text{Modes propres / solution en vecteurs}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_034",
        "title": "Jour 034 — Conditions initiales",
        "code": "# Exemple: appliquer CI dans dsolve\n# y(0)=1, y'(0)=0",
        "output": "\\(\\text{Solution explicite avec constantes évaluées}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_035",
        "title": "Jour 035 — Laplace (intro)",
        "code": "from sympy import symbols, laplace_transform, exp\nt, s = symbols('t s')\nlaplace_transform(exp(-t), t, s)",
        "output": "\\(\\mathcal{L}\\{e^{-t}\\} = \\frac{1}{s+1}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_037",
        "title": "Jour 037 — PDE intro",
        "code": "# Concept: séparation des variables\n# exemples pour la suite",
        "output": "\\(\\text{PDE : concepts et méthodes}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_038",
        "title": "Jour 038 — Séries de Fourier",
        "code": "from sympy import symbols, fourier_series\nx = symbols('x')\nf = fourier_series(abs(x),(x,-pi,pi)).truncate(5)\nf",
        "output": "\\(\\text{Série de Fourier (abs)}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_039",
        "title": "Jour 039 — Intégrales impropres",
        "code": "from sympy import symbols, integrate\nx = symbols('x')\nintegrate(1/(x**2+1),(x,-oo,oo))",
        "output": "\\(\\pi\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_040",
        "title": "Jour 040 — Intégration paramétrique",
        "code": "from sympy import symbols, integrate\na, x = symbols('a x', positive=True)\nintegrate(exp(-a*x),(x,0,oo))",
        "output": "\\(\\frac{1}{a}\\)",
        "exercises": [
            "Exercice 1 — Reproduire l'exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
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