export const challenges = [
    {
        "id": "day_001",
        "title": "Jour 001 — Installation & premier notebook",
        "code": "import sympy as sp\nsp.__version__",
        "output": "<span class=\"latex\">\\(\\text{version (ex: 1.10)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_002",
        "title": "Jour 002 — Symbols & types",
        "code": "from sympy import symbols\nx, y = symbols(&#x27;x y&#x27;)\nexpr = x + 2*y\nexpr",
        "output": "<span class=\"latex\">\\(x + 2y\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_003",
        "title": "Jour 003 — Manipulations de base",
        "code": "from sympy import symbols, expand, factor\nx = symbols(&#x27;x&#x27;)\nexpand((x+1)**3)",
        "output": "<span class=\"latex\">\\((x+1)^3 = x^3 + 3x^2 + 3x + 1\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_004",
        "title": "Jour 004 — Résolution d&#x27;équations simples",
        "code": "from sympy import symbols, Eq, solve\nx = symbols(&#x27;x&#x27;)\nsolve(Eq(x**2-5*x+6,0), x)",
        "output": "<span class=\"latex\">\\(\\{2,\\,3\\}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_005",
        "title": "Jour 005 — Affichage mathématique",
        "code": "from sympy import symbols, integrate, sin, pi\nx = symbols(&#x27;x&#x27;)\nintegrate(sin(x)/x, (x,0,pi))",
        "output": "<span class=\"latex\">\\(\\int_{0}^{\\pi}\\frac{\\sin x}{x}\\,dx\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_006",
        "title": "Jour 006 — Polynômes",
        "code": "from sympy import symbols, Poly\nx = symbols(&#x27;x&#x27;)\nPoly(x**4-5*x**2+4, x).nroots()",
        "output": "<span class=\"latex\">\\(\\text{(liste de racines numériques)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_007",
        "title": "Jour 007 — Simplification rationnelle",
        "code": "from sympy import symbols, apart\nx = symbols(&#x27;x&#x27;)\napart((x**2+1)/(x*(x-1)))",
        "output": "<span class=\"latex\">\\(\\frac{x+1}{x}+\\frac{1}{x-1}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_008",
        "title": "Jour 008 — Numérique vs symbolique",
        "code": "import sympy as sp\nsp.N(sp.pi,50)",
        "output": "<span class=\"latex\">\\(\\pi \\text{ (valeur numérique à 50 déc.)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_009",
        "title": "Jour 009 — Dérivation symbolique",
        "code": "from sympy import symbols, diff, exp, sin\nx = symbols(&#x27;x&#x27;)\ndiff(exp(x)*sin(x), x)",
        "output": "<span class=\"latex\">\\(e^{x}\\sin x + e^{x}\\cos x\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_010",
        "title": "Jour 010 — Intégration symbolique",
        "code": "from sympy import symbols, integrate\nx = symbols(&#x27;x&#x27;)\nintegrate(exp(-x**2),(x,-oo,oo))",
        "output": "<span class=\"latex\">\\(\\sqrt{\\pi}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_011",
        "title": "Jour 011 — Limites",
        "code": "from sympy import symbols, limit, sin\nx = symbols(&#x27;x&#x27;)\nlimit(sin(x)/x, x, 0)",
        "output": "<span class=\"latex\">\\(1\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_012",
        "title": "Jour 012 — Paramètres & constantes",
        "code": "import sympy as sp\na = sp.symbols(&#x27;a&#x27;, positive=True)\nsp.solve(sp.Eq(a*sp.symbols(&#x27;x&#x27;),1), sp.symbols(&#x27;x&#x27;))",
        "output": "<span class=\"latex\">\\(\\frac{1}{a}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_013",
        "title": "Jour 013 — Séries de Taylor",
        "code": "from sympy import symbols, series, sin\nx = symbols(&#x27;x&#x27;)\nseries(sin(x), x, 0, 6)",
        "output": "<span class=\"latex\">\\(x - \\frac{x^{3}}{6} + \\frac{x^{5}}{120} + O(x^{6})\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_014",
        "title": "Jour 014 — Mini-projet 1",
        "code": "# Mini-projet: résumé des jours 1-13\n# livrable : notebook",
        "output": "<span class=\"latex\">\\(\\text{Mini-projet (document + notebook)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_015",
        "title": "Jour 015 — Factorisation avancée",
        "code": "from sympy import symbols, factor\nx = symbols(&#x27;x&#x27;)\nfactor(x**4-5*x**2+4)",
        "output": "<span class=\"latex\">\\((x - 2)(x - 1)(x + 1)(x + 2)\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_016",
        "title": "Jour 016 — PGCD & division euclidienne",
        "code": "from sympy import symbols, gcd\nx = symbols(&#x27;x&#x27;)\ngcd(x**3-1, x**2-1)",
        "output": "<span class=\"latex\">\\(x - 1\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_017",
        "title": "Jour 017 — Trigonométrie symbolique",
        "code": "from sympy import symbols, simplify, sin, cos\nx = symbols(&#x27;x&#x27;)\nsimplify(sin(x)**2 + cos(x)**2)",
        "output": "<span class=\"latex\">\\(1\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_018",
        "title": "Jour 018 — Polynômes supérieurs",
        "code": "from sympy import symbols, nroots\nx = symbols(&#x27;x&#x27;)\nnroots(x**5 - x + 1)",
        "output": "<span class=\"latex\">\\(\\text{(5 racines numériques)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_019",
        "title": "Jour 019 — Partial fractions",
        "code": "from sympy import symbols, apart\nx = symbols(&#x27;x&#x27;)\napart((x+2)/(x*(x-1)))",
        "output": "<span class=\"latex\">\\(\\frac{2}{x}+\\frac{1}{x-1}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_020",
        "title": "Jour 020 — Systèmes linéaires",
        "code": "from sympy import symbols, Eq, solve\nx,y = symbols(&#x27;x y&#x27;)\nsolve([Eq(2*x+3*y,6), Eq(x-y,1)], [x,y])",
        "output": "<span class=\"latex\">\\(\\{x:\\tfrac{9}{5},\\,y:\\tfrac{4}{5}\\}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_021",
        "title": "Jour 021 — Matrices symboliques",
        "code": "from sympy import Matrix\nA = Matrix([[1,2],[3,4]])\nA",
        "output": "<span class=\"latex\">\\(\\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_022",
        "title": "Jour 022 — Déterminant & trace",
        "code": "from sympy import Matrix\nA=Matrix([[1,2],[3,4]])\nA.det(), A.trace()",
        "output": "<span class=\"latex\">\\((-2,\\ 5)\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_023",
        "title": "Jour 023 — Inverse & systèmes matriciels",
        "code": "from sympy import Matrix\nA=Matrix([[1,2],[3,4]])\nA.inv()",
        "output": "<span class=\"latex\">\\(A^{-1} = \\begin{pmatrix}-2 & 1\\\\\\tfrac{3}{2} & -\\tfrac{1}{2}\\end{pmatrix}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_024",
        "title": "Jour 024 — Valeurs propres",
        "code": "from sympy import Matrix\nA=Matrix([[2,1],[1,2]])\nA.eigenvals()",
        "output": "<span class=\"latex\">\\(\\{1:1,\\,3:1\\}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_025",
        "title": "Jour 025 — Diagonalisation",
        "code": "from sympy import Matrix\nA=Matrix([[2,1],[1,2]])\nA.diagonalize()",
        "output": "<span class=\"latex\">\\((P,D) \\text{ with } D=\\operatorname{diag}(1,3)\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_026",
        "title": "Jour 026 — Dérivées partielles",
        "code": "from sympy import symbols, diff\nx,y = symbols(&#x27;x y&#x27;)\ndiff(x**2 + x*y + y**2, x)",
        "output": "<span class=\"latex\">\\(2x + y\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_027",
        "title": "Jour 027 — Hessian & convexité",
        "code": "from sympy import symbols, hessian\nx,y = symbols(&#x27;x y&#x27;)\nf = x**2 + x*y + y**2\nhessian(f,(x,y))",
        "output": "<span class=\"latex\">\\(\\begin{pmatrix}2 & 1\\\\1 & 2\\end{pmatrix}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_029",
        "title": "Jour 029 — Lagrangiens",
        "code": "from sympy import symbols\nx,y,lam = symbols(&#x27;x y lam&#x27;)\nL = x**2+y**2+lam*(x+y-1)\n[diff(L,v) for v in (x,y,lam)]",
        "output": "<span class=\"latex\">\\([2x+\\lambda,\\,2y+\\lambda,\\,x+y-1]\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_030",
        "title": "Jour 030 — Mini-projet 2",
        "code": "# Mini-projet: optimisation d&#x27;un exemple physique\n# livrable : notebook",
        "output": "<span class=\"latex\">\\(\\text{Mini-projet (rapport + notebook)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_031",
        "title": "Jour 031 — EDO ordre 1",
        "code": "from sympy import symbols, Function, dsolve, Eq\nt = symbols(&#x27;t&#x27;)\ny = Function(&#x27;y&#x27;)\ndsolve(Eq(y(t).diff(t) - y(t), 0))",
        "output": "<span class=\"latex\">\\(y(t) = C_{1} e^{t}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_032",
        "title": "Jour 032 — EDO ordre 2",
        "code": "from sympy import symbols, Function, dsolve, Eq\nt = symbols(&#x27;t&#x27;)\ny = Function(&#x27;y&#x27;)\ndsolve(Eq(y(t).diff(t,2) + y(t), 0))",
        "output": "<span class=\"latex\">\\(y(t) = C_{1}\\cos t + C_{2}\\sin t\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_033",
        "title": "Jour 033 — Systèmes d&#x27;EDO",
        "code": "# Exemple: système couplé (concept)\n# dsolve peut résoudre certains cas",
        "output": "<span class=\"latex\">\\(\\text{Modes propres / solution en vecteurs}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_034",
        "title": "Jour 034 — Conditions initiales",
        "code": "# Exemple: appliquer CI dans dsolve\n# y(0)=1, y&#x27;(0)=0",
        "output": "<span class=\"latex\">\\(\\text{Solution explicite avec constantes évaluées}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_035",
        "title": "Jour 035 — Laplace (intro)",
        "code": "from sympy import symbols, laplace_transform, exp\nt, s = symbols(&#x27;t s&#x27;)\nlaplace_transform(exp(-t), t, s)",
        "output": "<span class=\"latex\">\\(\\mathcal{L}\\{e^{-t}\\} = \\frac{1}{s+1}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_037",
        "title": "Jour 037 — PDE intro",
        "code": "# Concept: séparation des variables\n# exemples pour la suite",
        "output": "<span class=\"latex\">\\(\\text{PDE : concepts et méthodes}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_038",
        "title": "Jour 038 — Séries de Fourier",
        "code": "from sympy import symbols, fourier_series\nx = symbols(&#x27;x&#x27;)\nf = fourier_series(abs(x),(x,-pi,pi)).truncate(5)\nf",
        "output": "<span class=\"latex\">\\(\\text{Série de Fourier (abs)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_039",
        "title": "Jour 039 — Intégrales impropres",
        "code": "from sympy import symbols, integrate\nx = symbols(&#x27;x&#x27;)\nintegrate(1/(x**2+1),(x,-oo,oo))",
        "output": "<span class=\"latex\">\\(\\pi\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_040",
        "title": "Jour 040 — Intégration paramétrique",
        "code": "from sympy import symbols, integrate\na, x = symbols(&#x27;a x&#x27;, positive=True)\nintegrate(exp(-a*x),(x,0,oo))",
        "output": "<span class=\"latex\">\\(\\frac{1}{a}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_041",
        "title": "Jour 041 — Intégrales multiples",
        "code": "from sympy import symbols, integrate\nx,y = symbols(&#x27;x y&#x27;)\nintegrate(integrate(x*y,(x,0,1)),(y,0,1))",
        "output": "<span class=\"latex\">\\(\\frac{1}{4}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_042",
        "title": "Jour 042 — Changement de variables",
        "code": "# Jacobian example (symbolic)\n# montrer calcul du Jacobien",
        "output": "<span class=\"latex\">\\(\\text{Jacobian matrix}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_043",
        "title": "Jour 043 — Calcul vectoriel",
        "code": "# grad/div/curl via sympy.vector\n# exemple",
        "output": "<span class=\"latex\">\\(\\nabla f,\\ \\nabla\\cdot\\vec{F},\\ \\nabla\\times\\vec{F}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_044",
        "title": "Jour 044 — Champs scalaires & vectoriels",
        "code": "# Exemple: champ scalaire et gradient",
        "output": "<span class=\"latex\">\\(\\text{Gradient symbolique}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_045",
        "title": "Jour 045 — Analyse d&#x27;erreurs",
        "code": "# Symbolic vs numeric errors; Taylor remainder\n# exemple",
        "output": "<span class=\"latex\">\\(\\text{Expression d'erreur / majorant}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_046",
        "title": "Jour 046 — Séries de Laurent",
        "code": "from sympy import symbols, series\nx = symbols(&#x27;x&#x27;)\nseries(1/(1-x), x, 1, 3)",
        "output": "<span class=\"latex\">\\(\\text{Laurent autour de } x=1\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_047",
        "title": "Jour 047 — Résidus & intégrales complexes",
        "code": "# Résidu example using sympy.residue\n# compute residue",
        "output": "<span class=\"latex\">\\(\\text{Résidu (valeur numérique/simple)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_049",
        "title": "Jour 049 — Trigono avancée",
        "code": "from sympy import symbols, trigsimp\nx = symbols(&#x27;x&#x27;)\ntrigsimp(sin(x)*cos(x))",
        "output": "<span class=\"latex\">\\(\\frac{\\sin(2x)}{2}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_050",
        "title": "Jour 050 — Revue mi-parcours",
        "code": "# Récapitulatif et QCM\n# corriger exercices",
        "output": "<span class=\"latex\">\\(\\text{Revue / tests intermédiaires}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_052",
        "title": "Jour 052 — Régression symbolique",
        "code": "# Résoudre les équations normales symboliquement\n# exemple",
        "output": "<span class=\"latex\">\\(\\text{Solution } \\theta = (A^T A)^{-1}A^T b\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_053",
        "title": "Jour 053 — Gradients ML",
        "code": "# symbolic gradient of MSE\nfrom sympy import symbols, diff\n# example",
        "output": "<span class=\"latex\">\\(\\nabla J(\\theta) \\text{ symbolic}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_054",
        "title": "Jour 054 — Systèmes non-linéaires",
        "code": "# Jacobian &amp; Newton method example",
        "output": "<span class=\"latex\">\\(\\text{Jacobian matrix and Newton step}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_055",
        "title": "Jour 055 — Linéarisation",
        "code": "# Linearize f(x) around x0 using Jacobian\n# example",
        "output": "<span class=\"latex\">\\(\\text{Linear approximation: } f(x_0)+J(x_0)(x-x_0)\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_056",
        "title": "Jour 056 — Analyse de stabilité",
        "code": "# eigenvalues of Jacobian to classify fixed point",
        "output": "<span class=\"latex\">\\(\\text{Eigenvalues (stability)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_057",
        "title": "Jour 057 — Modèle SIR",
        "code": "# Define SIR ODEs symbolically\n# example",
        "output": "<span class=\"latex\">\\(\\dot S = -\\beta S I,\\ \\dot I = \\beta S I - \\gamma I\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_058",
        "title": "Jour 058 — Cinétique chimique",
        "code": "# Rate laws symbolic example",
        "output": "<span class=\"latex\">\\(\\text{Rate expressions symbolic}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_059",
        "title": "Jour 059 — Équations de conservation",
        "code": "# PDE conservation form example",
        "output": "<span class=\"latex\">\\(\\partial_t u + \\nabla\\cdot F(u)=0\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_060",
        "title": "Jour 060 — Circuits RLC",
        "code": "from sympy import symbols\ns,R,L,C = symbols(&#x27;s R L C&#x27;)\nH = 1/(L*C*s**2 + R*C*s + 1)\nH",
        "output": "<span class=\"latex\">\\(H(s)=\\frac{1}{LCs^{2}+RCs+1}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_061",
        "title": "Jour 061 — Pôles & zéros",
        "code": "# Solve denominator == 0 to get poles",
        "output": "<span class=\"latex\">\\(\\text{Poles = roots of } LCs^2+RCs+1\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_062",
        "title": "Jour 062 — Transformée Z",
        "code": "# Intro to Z-transform (symbolic)",
        "output": "<span class=\"latex\">\\(\\text{Z-transform (symbolic)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_063",
        "title": "Jour 063 — Laplace appliquée",
        "code": "# Circuit analysis via Laplace (example)",
        "output": "<span class=\"latex\">\\(H(s) \\text{ examples}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_064",
        "title": "Jour 064 — Énergie masse-ressort",
        "code": "# Define T (kinetic) and V (potential) symbolically",
        "output": "<span class=\"latex\">\\(T+V \\text{ symbolic}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_065",
        "title": "Jour 065 — Masse-ressort amorti",
        "code": "# Characteristic equation and discriminant",
        "output": "<span class=\"latex\">\\(\\text{Roots depend on damping (over/crit/under)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_067",
        "title": "Jour 067 — Analyse modale",
        "code": "# Build K and M matrices symbolically",
        "output": "<span class=\"latex\">\\(\\text{Generalized eigenproblem } Kx=\\lambda M x\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_068",
        "title": "Jour 068 — Thermodynamique symbolique",
        "code": "# PV=nRT manipulations",
        "output": "<span class=\"latex\">\\(PV=nRT\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_069",
        "title": "Jour 069 — Équilibre chimique",
        "code": "# K equilibrium expressions symbolic",
        "output": "<span class=\"latex\">\\(K = \\frac{[products]}{[reactants]}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_070",
        "title": "Jour 070 — Optique simplifiée",
        "code": "# Wave equation symbolic form",
        "output": "<span class=\"latex\">\\(\\text{Wave PDE (symbolic)}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_071",
        "title": "Jour 071 — Cinématique 2R",
        "code": "from sympy import symbols, Matrix, cos, sin\nth1,th2,l1,l2 = symbols(&#x27;th1 th2 l1 l2&#x27;)\nx = l1*cos(th1)+l2*cos(th1+th2)\ny = l1*sin(th1)+l2*sin(th1+th2)\nMatrix([x,y])",
        "output": "<span class=\"latex\">\\(\\begin{pmatrix}x\\\\y\\end{pmatrix}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_072",
        "title": "Jour 072 — Contrôle PID",
        "code": "# PID law symbolic\n# example: U = Kp*e + Ki*∫e + Kd*de/dt",
        "output": "<span class=\"latex\">\\(\\text{PID control law}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_073",
        "title": "Jour 073 — Optimisation contrainte",
        "code": "# KKT conditions symbolic example",
        "output": "<span class=\"latex\">\\(\\text{KKT system}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_074",
        "title": "Jour 074 — Hybrid symbolic-numeric",
        "code": "from sympy import symbols, lambdify\nx= symbols(&#x27;x&#x27;)\nf = lambdify(x, sin(x), &#x27;numpy&#x27;)",
        "output": "<span class=\"latex\">\\(\\text{Callable numpy function}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_075",
        "title": "Jour 075 — Réduction de modèle",
        "code": "# model order reduction ideas (symbolic)",
        "output": "<span class=\"latex\">\\(\\text{Reduced model form}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_076",
        "title": "Jour 076 — EDO non-linéaires pratiques",
        "code": "# Nonlinear ODE example and methods",
        "output": "<span class=\"latex\">\\(\\text{Qualitative solution / bifurcation}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_077",
        "title": "Jour 077 — Bifurcations",
        "code": "# illustrate saddle-node / pitchfork symbolically",
        "output": "<span class=\"latex\">\\(\\text{Bifurcation conditions}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_078",
        "title": "Jour 078 — Analyse fréquentielle",
        "code": "# Bode symbolic approx from transfer function",
        "output": "<span class=\"latex\">\\(\\text{Magnitude/phase symbolic}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_079",
        "title": "Jour 079 — lambdify: codegen",
        "code": "from sympy import symbols, lambdify\nx= symbols(&#x27;x&#x27;)\nf = lambdify(x, sin(x), &#x27;numpy&#x27;)",
        "output": "<span class=\"latex\">\\(\\text{Python callable function}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_080",
        "title": "Jour 080 — Validation vs simulation",
        "code": "# compare symbolic solution to numeric integration (concept)",
        "output": "<span class=\"latex\">\\(\\text{Comparison plots}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_081",
        "title": "Jour 081 — Reproductibilité notebooks",
        "code": "# best practices: seed, environment, outputs",
        "output": "<span class=\"latex\">\\(\\text{Reproducibility checklist}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_082",
        "title": "Jour 082 — Notebook -&gt; script",
        "code": "# nbconvert --to script usage and example",
        "output": "<span class=\"latex\">\\(\\text{Exported .py script}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_083",
        "title": "Jour 083 — Tests unitaires",
        "code": "# pytest example for a symbolic function",
        "output": "<span class=\"latex\">\\(\\text{Unit tests for symbolic code}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_084",
        "title": "Jour 084 — Performance & simplification",
        "code": "# simplify before lambdify for speed",
        "output": "<span class=\"latex\">\\(\\text{Timing improvements}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_085",
        "title": "Jour 085 — Visualisation",
        "code": "# plotting symbolic curves with sympy.plot",
        "output": "<span class=\"latex\">\\(\\text{Plot object / image}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_086",
        "title": "Jour 086 — Projet RLC complet",
        "code": "# RLC full symbolic walkthrough",
        "output": "<span class=\"latex\">\\(\\text{Transfer function, poles, step response}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_087",
        "title": "Jour 087 — Projet robot 2R",
        "code": "# dynamics &amp; IK symbolic",
        "output": "<span class=\"latex\">\\(\\text{Dynamics and IK expressions}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_088",
        "title": "Jour 088 — Projet SIR avancé",
        "code": "# SIR with parameter estimation symbolic setup",
        "output": "<span class=\"latex\">\\(\\text{Symbolic ODE + params}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_089",
        "title": "Jour 089 — Projet optimisation",
        "code": "# objective + constraints symbolic setup",
        "output": "<span class=\"latex\">\\(\\text{KKT system}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_090",
        "title": "Jour 090 — CI pour notebooks",
        "code": "# example GitHub Actions to run notebooks",
        "output": "<span class=\"latex\">\\(\\text{YAML workflow}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_091",
        "title": "Jour 091 — Slides from notebooks",
        "code": "# nbconvert --to slides usage",
        "output": "<span class=\"latex\">\\(\\text{HTML slides}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_092",
        "title": "Jour 092 — README techniques",
        "code": "# structure and metadata for notebooks",
        "output": "<span class=\"latex\">\\(\\text{README template}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_093",
        "title": "Jour 093 — Préparation démos",
        "code": "# packaging and reproducible demo run",
        "output": "<span class=\"latex\">\\(\\text{Runbook}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_094",
        "title": "Jour 094 — Peer review notebooks",
        "code": "# checklist items for reviewers",
        "output": "<span class=\"latex\">\\(\\text{Peer review checklist}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_095",
        "title": "Jour 095 — Packaging final",
        "code": "# zip, metadata, license",
        "output": "<span class=\"latex\">\\(\\text{Packaging manifest}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_096",
        "title": "Jour 096 — Projet final démarrage",
        "code": "# kickoff checklist for final project",
        "output": "<span class=\"latex\">\\(\\text{Kickoff tasks}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_097",
        "title": "Jour 097 — Projet final dev",
        "code": "# dev milestones and symbolic tests",
        "output": "<span class=\"latex\">\\(\\text{Dev tasks}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_098",
        "title": "Jour 098 — Projet final tests",
        "code": "# tests, CI, benchmarks",
        "output": "<span class=\"latex\">\\(\\text{Test plan}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_099",
        "title": "Jour 099 — Répétition générale",
        "code": "# rehearsal checklist for presentations",
        "output": "<span class=\"latex\">\\(\\text{Timing & checklist}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    },
    {
        "id": "day_100",
        "title": "Jour 100 — Clôture & certificats",
        "code": "# final wrap-up, certificates",
        "output": "<span class=\"latex\">\\(\\text{Certificate template}\\)</span>",
        "exercises": [
            "Exercice 1 — Reproduire l&#x27;exécution du code et vérifier la sortie attendue.",
            "Exercice 2 — Proposer une variante: modifier une partie du code pour obtenir un résultat connexe.",
            "Exercice 3 — Donner une application pratique (court texte) reliant le thème à un problème réel."
        ]
    }
];