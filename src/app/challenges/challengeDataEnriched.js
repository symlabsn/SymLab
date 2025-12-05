// Données enrichies pour les challenges avec théorie, histoire, gamification et analogies africaines
export const challengesEnriched = [
    {
        "id": "day_001",
        "dayNumber": 1,
        "title": "Installation & Premier Notebook",
        "difficulty": "Débutant",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 10,
        "badge": "🎯 Premier Pas",
        "africanAnalogy": "Comme un griot qui transmet l'histoire exacte de génération en génération sans altération, le calcul symbolique préserve la vérité mathématique sans approximation. Tandis que le calcul numérique est comme raconter une histoire en résumé, le calcul symbolique garde chaque détail intact.",
        "theory": {
            "title": "Introduction au Calcul Symbolique",
            "content": "Le calcul symbolique permet de manipuler des expressions mathématiques de manière exacte, sans approximation numérique. Contrairement au calcul numérique qui travaille avec des nombres décimaux (ex: π ≈ 3.14159), le calcul symbolique conserve les symboles exacts (π reste π).",
            "mathematicalFoundation": "\n                **Fondements Mathématiques :**\n                - Algèbre symbolique : manipulation d'expressions avec variables\n                - Théorie des anneaux et corps\n                - Calcul formel vs calcul numérique\n                \n                **Exemple :**\n                Numérique : √2 ≈ 1.414213...\n                Symbolique : √2 reste √2 (exact)\n            ",
            "scientists": [
                {
                    "name": "Stephen Wolfram",
                    "year": "1988",
                    "contribution": "Créateur de Mathematica, pionnier du calcul symbolique moderne",
                    "context": "Révolutionne le calcul scientifique en rendant les mathématiques symboliques accessibles"
                },
                {
                    "name": "Ondřej Čertík",
                    "year": "2006",
                    "contribution": "Fondateur de SymPy, bibliothèque Python open-source",
                    "context": "Démocratise le calcul symbolique avec un outil gratuit et accessible à tous"
                }
            ]
        },
        "code": "import sympy as sp\nsp.__version__",
        "output": "version (ex: 1.12)",
        "exercises": [
            "Installer SymPy avec pip install sympy",
            "Vérifier la version installée",
            "Créer votre premier notebook Jupyter"
        ],
        "practicalApplication": "Le calcul symbolique est utilisé en physique théorique, ingénierie, cryptographie et IA."
    },
    {
        "id": "day_002",
        "dayNumber": 2,
        "title": "Symbols & Types",
        "difficulty": "Débutant",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 15,
        "badge": "🔤 Maître des Symboles",
        "africanAnalogy": "Les symboles mathématiques sont comme les tam-tams qui transmettent des messages à distance. Chaque symbole (x, y, z) porte une signification, tout comme chaque rythme de tam-tam a son message. Le mathématicien compose avec ces symboles comme le joueur de tam-tam compose ses rythmes.",
        "theory": {
            "title": "Théorie des Variables Symboliques",
            "content": "En mathématiques, une variable est un symbole représentant une quantité inconnue ou variable. SymPy permet de créer ces symboles et de les manipuler algébriquement.",
            "mathematicalFoundation": "\n                **Algèbre des Symboles :**\n                - Variable : x, y, z ∈ ℝ (ou ℂ)\n                - Expression : f(x) = ax² + bx + c\n                - Domaine de définition : ℝ, ℤ, ℚ, ℂ\n                \n                **Types de Symboles :**\n                - Réels : x ∈ ℝ\n                - Entiers : n ∈ ℤ\n                - Positifs : a > 0\n                - Complexes : z ∈ ℂ\n            ",
            "scientists": [
                {
                    "name": "François Viète",
                    "year": "1591",
                    "contribution": "Père de l'algèbre moderne, introduit les lettres pour les inconnues",
                    "context": "Révolutionne les mathématiques en créant un langage symbolique universel"
                },
                {
                    "name": "René Descartes",
                    "year": "1637",
                    "contribution": "Standardise la notation algébrique (x, y, z pour inconnues)",
                    "context": "Unifie géométrie et algèbre, créant la géométrie analytique"
                }
            ]
        },
        "code": "from sympy import symbols\nx, y = symbols('x y')\nexpr = x + 2*y\nexpr",
        "output": "x + 2*y",
        "exercises": [
            "Créer des symboles avec différentes propriétés (positif, entier, réel)",
            "Construire une expression polynomiale",
            "Substituer des valeurs dans une expression"
        ],
        "practicalApplication": "Variables symboliques essentielles en modélisation, optimisation et EDO."
    },
    {
        "id": "day_003",
        "dayNumber": 3,
        "title": "Manipulations de Base",
        "difficulty": "Débutant",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 20,
        "badge": "🔧 Manipulateur",
        "africanAnalogy": "Développer une expression mathématique, c'est comme déplier un pagne wax pour voir tous ses motifs. Factoriser, c'est replier le pagne pour retrouver sa forme compacte. Les deux vues (dépliée et pliée) montrent la même beauté, juste sous des formes différentes.",
        "theory": {
            "title": "Algèbre des Polynômes",
            "content": "Un polynôme est une expression de la forme P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. Les opérations de base incluent l'expansion, la factorisation et la simplification.",
            "mathematicalFoundation": "\n                **Identités Remarquables :**\n                - (a + b)² = a² + 2ab + b²\n                - (a - b)² = a² - 2ab + b²\n                - (a + b)³ = a³ + 3a²b + 3ab² + b³\n                - a² - b² = (a + b)(a - b)\n                \n                **Binôme de Newton :**\n                (a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ\n                où C(n,k) = n!/(k!(n-k)!)\n            ",
            "scientists": [
                {
                    "name": "Isaac Newton",
                    "year": "1665",
                    "contribution": "Formule du binôme de Newton pour développer (a+b)ⁿ",
                    "context": "Découverte pendant la peste de Londres, révolutionne l'analyse mathématique"
                },
                {
                    "name": "Blaise Pascal",
                    "year": "1654",
                    "contribution": "Triangle de Pascal pour les coefficients binomiaux",
                    "context": "Lie probabilités et combinatoire, fondant les mathématiques modernes"
                }
            ]
        },
        "code": "from sympy import symbols, expand, factor\nx = symbols('x')\nexpand((x+1)**3)",
        "output": "x³ + 3x² + 3x + 1",
        "exercises": [
            "Développer (x+2)⁴",
            "Factoriser x² - 4",
            "Simplifier (x²-1)/(x-1)"
        ],
        "practicalApplication": "Manipulation polynomiale cruciale en traitement du signal, compression et cryptographie RSA."
    },
    {
        "id": "day_004",
        "dayNumber": 4,
        "title": "Résolution d'Équations Simples",
        "difficulty": "Débutant",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 25,
        "badge": "🎯 Résolveur",
        "africanAnalogy": "Résoudre une équation, c'est comme retrouver l'équilibre d'une balance au marché. Le commerçant ajuste les poids (x) jusqu'à ce que les deux plateaux soient égaux. Les solutions sont les valeurs qui rétablissent parfaitement l'équilibre.",
        "theory": {
            "title": "Théorie des Équations Algébriques",
            "content": "Une équation est une égalité contenant une ou plusieurs inconnues. Résoudre une équation, c'est trouver toutes les valeurs qui rendent l'égalité vraie.",
            "mathematicalFoundation": "\n                **Équations du Second Degré :**\n                ax² + bx + c = 0\n                \n                **Formule de Viète (1591) :**\n                x = (-b ± √(b² - 4ac)) / 2a\n                \n                **Discriminant Δ :**\n                Δ = b² - 4ac\n                - Δ > 0 : 2 solutions réelles distinctes\n                - Δ = 0 : 1 solution double\n                - Δ < 0 : 2 solutions complexes conjuguées\n                \n                **Relations de Viète :**\n                Si x₁ et x₂ sont les racines :\n                - x₁ + x₂ = -b/a (somme)\n                - x₁ × x₂ = c/a (produit)\n            ",
            "scientists": [
                {
                    "name": "Al-Khwarizmi",
                    "year": "820",
                    "contribution": "Père de l'algèbre, méthodes de résolution d'équations quadratiques",
                    "context": "Mathématicien perse dont le nom a donné le mot \"algorithme\""
                },
                {
                    "name": "François Viète",
                    "year": "1591",
                    "contribution": "Formules reliant coefficients et racines d'un polynôme",
                    "context": "Cryptanalyste du roi de France, utilise l'algèbre pour décoder des messages"
                },
                {
                    "name": "Évariste Galois",
                    "year": "1832",
                    "contribution": "Théorie de Galois : conditions de résolubilité par radicaux",
                    "context": "Génie mort à 20 ans en duel, révolutionne l'algèbre moderne"
                }
            ]
        },
        "code": "from sympy import symbols, Eq, solve\nx = symbols('x')\nsolve(Eq(x**2-5*x+6,0), x)",
        "output": "[2, 3]",
        "exercises": [
            "Résoudre x² - 4 = 0",
            "Résoudre 2x² + 3x - 2 = 0",
            "Vérifier les solutions avec les relations de Viète"
        ],
        "practicalApplication": "Équations quadratiques pour trajectoires paraboliques, optimisation économique, circuits RLC."
    },
    {
        "id": "day_005",
        "dayNumber": 5,
        "title": "Affichage Mathématique",
        "difficulty": "Débutant",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 15,
        "badge": "📐 Visualiseur",
        "africanAnalogy": "LaTeX est comme l'écriture Tifinagh des Touaregs ou les symboles Adinkra des Akan : un système d'écriture qui capture la beauté et la précision des idées. Chaque symbole mathématique est soigneusement dessiné, comme les motifs sacrés sur les tissus traditionnels.",
        "theory": {
            "title": "Notation Mathématique et LaTeX",
            "content": "LaTeX est le langage standard pour écrire des formules mathématiques. Il permet une représentation précise et élégante des expressions.",
            "mathematicalFoundation": "\n                **Notations Fondamentales :**\n                - Fractions : \\frac{a}{b}\n                - Racines : \\sqrt{x}, \\sqrt[n]{x}\n                - Intégrales : \\int_{a}^{b} f(x) dx\n                - Sommes : \\sum_{i=1}^{n} a_i\n                - Limites : \\lim_{x \\to a} f(x)\n                \n                **Symboles Grecs :**\n                α (alpha), β (beta), γ (gamma), δ (delta)\n                π (pi), σ (sigma), ω (omega)\n                Δ (Delta), Σ (Sigma), Π (Pi)\n            ",
            "scientists": [
                {
                    "name": "Donald Knuth",
                    "year": "1978",
                    "contribution": "Créateur de TeX, système de composition typographique",
                    "context": "Informaticien légendaire, insatisfait de la qualité d'impression de ses livres"
                },
                {
                    "name": "Leslie Lamport",
                    "year": "1984",
                    "contribution": "Créateur de LaTeX, extension conviviale de TeX",
                    "context": "Rend TeX accessible aux scientifiques non-experts en typographie"
                }
            ]
        },
        "code": "from sympy import symbols, integrate, sin, pi, latex\nx = symbols('x')\nexpr = integrate(sin(x)/x, (x,0,pi))\nprint(latex(expr))",
        "output": "\\frac{\\pi}{2}",
        "exercises": [
            "Afficher une fraction en LaTeX",
            "Afficher une intégrale complexe",
            "Utiliser pprint() pour un affichage ASCII"
        ],
        "practicalApplication": "LaTeX est le standard dans les publications scientifiques, thèses et articles de recherche."
    },
    {
        "id": "day_006",
        "dayNumber": 6,
        "title": "Polynômes",
        "difficulty": "Débutant",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "📊 Analyste Polynomial",
        "africanAnalogy": "Un polynôme est comme un baobab : ses racines (solutions) sont cachées sous terre, mais déterminent toute la structure de l'arbre. Le théorème fondamental de l'algèbre garantit que chaque polynôme a ses racines, comme chaque baobab a les siennes, même si on ne les voit pas toujours.",
        "theory": {
            "title": "Théorie des Polynômes",
            "content": "Un polynôme de degré n a au plus n racines (réelles ou complexes). Le théorème fondamental de l'algèbre garantit l'existence de ces racines dans ℂ.",
            "mathematicalFoundation": "\n                **Théorème Fondamental de l'Algèbre (Gauss, 1799) :**\n                Tout polynôme de degré n ≥ 1 à coefficients complexes \n                possède exactement n racines dans ℂ (comptées avec multiplicité).\n                \n                **Décomposition en Facteurs :**\n                P(x) = aₙ(x - r₁)(x - r₂)...(x - rₙ)\n                où r₁, r₂, ..., rₙ sont les racines\n                \n                **Polynômes Remarquables :**\n                - Tchebychev : approximation optimale\n                - Legendre : solutions d'EDO\n                - Hermite : mécanique quantique\n            ",
            "scientists": [
                {
                    "name": "Carl Friedrich Gauss",
                    "year": "1799",
                    "contribution": "Démonstration du théorème fondamental de l'algèbre",
                    "context": "Prince des mathématiciens, génie précoce qui révolutionne plusieurs domaines"
                },
                {
                    "name": "Niels Henrik Abel",
                    "year": "1824",
                    "contribution": "Impossibilité de résoudre par radicaux les équations de degré ≥ 5",
                    "context": "Mathématicien norvégien mort à 26 ans dans la pauvreté, génie méconnu"
                }
            ]
        },
        "code": "from sympy import symbols, Poly\nx = symbols('x')\np = Poly(x**4-5*x**2+4, x)\np.all_roots()",
        "output": "[-2, -1, 1, 2]",
        "exercises": [
            "Trouver les racines de x³ - 6x² + 11x - 6",
            "Décomposer en facteurs premiers",
            "Calculer le PGCD de deux polynômes"
        ],
        "practicalApplication": "Polynômes pour courbes de Bézier (graphisme), filtres numériques, codes correcteurs."
    },
    {
        "id": "day_007",
        "dayNumber": 7,
        "title": "Simplification Rationnelle",
        "difficulty": "Débutant",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🔬 Simplificateur",
        "africanAnalogy": "Décomposer une fraction rationnelle, c'est comme partager équitablement la récolte entre plusieurs familles. Au lieu d'une grosse part complexe, on divise en parts simples que chacun peut comprendre et utiliser. Chaque famille (terme simple) reçoit sa juste part.",
        "theory": {
            "title": "Fractions Rationnelles et Décomposition",
            "content": "Une fraction rationnelle est le quotient de deux polynômes. La décomposition en éléments simples permet de simplifier l'intégration et l'analyse.",
            "mathematicalFoundation": "\n                **Décomposition en Éléments Simples :**\n                Pour F(x) = P(x)/Q(x) avec deg(P) < deg(Q)\n                \n                Si Q(x) = (x-a)ⁿ(x-b)ᵐ... alors :\n                F(x) = A₁/(x-a) + A₂/(x-a)² + ... + B₁/(x-b) + ...\n                \n                **Théorème de Heaviside (1893) :**\n                Méthode des résidus pour calculer les coefficients\n                \n                **Applications :**\n                - Transformée de Laplace inverse\n                - Intégration de fractions rationnelles\n                - Analyse de circuits électriques\n            ",
            "scientists": [
                {
                    "name": "Leonhard Euler",
                    "year": "1748",
                    "contribution": "Développement de la théorie des fractions rationnelles",
                    "context": "Mathématicien le plus prolifique de l'histoire, aveugle mais toujours productif"
                },
                {
                    "name": "Oliver Heaviside",
                    "year": "1893",
                    "contribution": "Méthode des résidus et calcul opérationnel",
                    "context": "Ingénieur autodidacte qui révolutionne l'électromagnétisme"
                }
            ]
        },
        "code": "from sympy import symbols, apart\nx = symbols('x')\napart((x**2+1)/(x*(x-1)))",
        "output": "-1/x + 2/(x-1) + 1",
        "exercises": [
            "Décomposer 1/(x²-1)",
            "Décomposer (x+1)/(x²+x)",
            "Intégrer une fraction rationnelle après décomposition"
        ],
        "practicalApplication": "Décomposition essentielle en automatique (fonction de transfert) et traitement du signal."
    },
    {
        "id": "day_008",
        "dayNumber": 8,
        "title": "Numérique vs Symbolique",
        "difficulty": "Débutant",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 25,
        "badge": "⚖️ Équilibriste",
        "africanAnalogy": "Le calcul exact est comme peser l'or avec une balance traditionnelle à fléau : précis et fiable. Le calcul numérique est comme estimer à l'œil : rapide mais approximatif. Pour le commerce de l'or (cryptographie), on préfère la balance exacte. Pour estimer un sac de mil (simulation), l'œil suffit.",
        "theory": {
            "title": "Calcul Exact vs Approximation",
            "content": "Le calcul symbolique conserve la précision exacte, tandis que le calcul numérique utilise des approximations en virgule flottante.",
            "mathematicalFoundation": "\n                **Arithmétique Exacte :**\n                - Rationnels : 1/3 reste 1/3 (pas 0.333...)\n                - Irrationnels : √2, π, e restent symboliques\n                - Précision arbitraire : calcul avec 1000 décimales\n                \n                **Erreurs Numériques :**\n                - Arrondi : 0.1 + 0.2 ≠ 0.3 en binaire\n                - Propagation : erreurs cumulatives\n                - Stabilité : algorithmes numériquement stables\n                \n                **Théorème (Wilkinson, 1963) :**\n                Certains problèmes sont mal conditionnés :\n                petite erreur → grande variation du résultat\n            ",
            "scientists": [
                {
                    "name": "John von Neumann",
                    "year": "1947",
                    "contribution": "Analyse de la stabilité numérique et arithmétique flottante",
                    "context": "Pionnier de l'informatique et de la bombe atomique"
                },
                {
                    "name": "James Wilkinson",
                    "year": "1963",
                    "contribution": "Analyse d'erreur et conditionnement des problèmes",
                    "context": "Expert en algèbre linéaire numérique, révèle les pièges du calcul flottant"
                }
            ]
        },
        "code": "import sympy as sp\n# Exact\nsp.sqrt(2)\n# Numérique avec 50 décimales\nsp.N(sp.pi, 50)",
        "output": "π avec 50 décimales",
        "exercises": [
            "Comparer √2 symbolique et numérique",
            "Calculer e avec 100 décimales",
            "Montrer l'erreur de 0.1 + 0.2 en Python standard"
        ],
        "practicalApplication": "Calcul exact crucial en cryptographie (grands nombres premiers) et vérification formelle."
    },
    {
        "id": "day_009",
        "dayNumber": 9,
        "title": "Dérivation Symbolique",
        "difficulty": "Débutant",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 35,
        "badge": "📈 Dérivateur",
        "africanAnalogy": "La dérivée mesure la pente, comme l'inclinaison d'une colline au Fouta Djallon. À chaque point du chemin, la dérivée indique si ça monte fort, doucement, ou si c'est plat. Le berger peul utilise cette connaissance pour guider son troupeau vers les meilleurs pâturages.",
        "theory": {
            "title": "Calcul Différentiel",
            "content": "La dérivée mesure le taux de variation instantané d'une fonction. C'est le concept fondamental du calcul infinitésimal.",
            "mathematicalFoundation": "\n                **Définition (Newton-Leibniz, 1670) :**\n                f'(x) = lim[h→0] (f(x+h) - f(x))/h\n                \n                **Règles de Dérivation :**\n                - (uv)' = u'v + uv' (Leibniz)\n                - (u/v)' = (u'v - uv')/v²\n                - (f∘g)' = f'(g)·g' (chaîne)\n                - (fⁿ)' = n·fⁿ⁻¹·f'\n                \n                **Dérivées Remarquables :**\n                - (eˣ)' = eˣ\n                - (ln x)' = 1/x\n                - (sin x)' = cos x\n                - (xⁿ)' = nxⁿ⁻¹\n            ",
            "scientists": [
                {
                    "name": "Isaac Newton",
                    "year": "1665",
                    "contribution": "Invention du calcul différentiel (fluxions)",
                    "context": "Découverte pendant la peste, révolutionne physique et mathématiques"
                },
                {
                    "name": "Gottfried Leibniz",
                    "year": "1675",
                    "contribution": "Notation moderne dy/dx et règles de dérivation",
                    "context": "Philosophe et mathématicien, invente le calcul indépendamment de Newton"
                },
                {
                    "name": "Augustin-Louis Cauchy",
                    "year": "1821",
                    "contribution": "Formalisation rigoureuse des limites et dérivées",
                    "context": "Rend le calcul infinitésimal mathématiquement rigoureux"
                }
            ]
        },
        "code": "from sympy import symbols, diff, exp, sin\nx = symbols('x')\ndiff(exp(x)*sin(x), x)",
        "output": "eˣ·sin(x) + eˣ·cos(x)",
        "exercises": [
            "Dériver x³·ln(x)",
            "Dériver sin(x²)",
            "Calculer la dérivée n-ième de eˣ"
        ],
        "practicalApplication": "Dérivées essentielles en optimisation (ML), physique (vitesse, accélération), économie (coût marginal)."
    },
    {
        "id": "day_010",
        "dayNumber": 10,
        "title": "Intégration Symbolique",
        "difficulty": "Débutant",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "∫ Intégrateur",
        "africanAnalogy": "L'intégrale calcule l'aire totale, comme mesurer la surface d'un champ de mil. Au lieu de compter chaque grain, on calcule l'aire totale du champ. De même, l'intégrale additionne une infinité de petites quantités pour obtenir le total. C'est la sagesse du tout qui dépasse la somme des parties.",
        "theory": {
            "title": "Calcul Intégral",
            "content": "L'intégrale est l'opération inverse de la dérivation. Elle permet de calculer des aires, volumes, et résoudre des équations différentielles.",
            "mathematicalFoundation": "\n                **Théorème Fondamental du Calcul (Newton-Leibniz) :**\n                ∫ₐᵇ f'(x)dx = f(b) - f(a)\n                \n                **Intégrales Remarquables :**\n                - ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C\n                - ∫ eˣ dx = eˣ + C\n                - ∫ 1/x dx = ln|x| + C\n                - ∫ sin(x) dx = -cos(x) + C\n                \n                **Méthodes d'Intégration :**\n                - Substitution : u = g(x)\n                - Parties : ∫ uv' = uv - ∫ u'v\n                - Fractions rationnelles : décomposition\n                \n                **Intégrales Spéciales :**\n                - Gaussienne : ∫₋∞^∞ e⁻ˣ² dx = √π\n                - Dirichlet : ∫₀^∞ sin(x)/x dx = π/2\n            ",
            "scientists": [
                {
                    "name": "Isaac Newton",
                    "year": "1665",
                    "contribution": "Théorème fondamental du calcul intégral",
                    "context": "Unifie dérivation et intégration, révolution mathématique"
                },
                {
                    "name": "Bernhard Riemann",
                    "year": "1854",
                    "contribution": "Définition rigoureuse de l'intégrale (sommes de Riemann)",
                    "context": "Génie qui révolutionne géométrie et analyse"
                },
                {
                    "name": "Henri Lebesgue",
                    "year": "1902",
                    "contribution": "Théorie de la mesure et intégrale de Lebesgue",
                    "context": "Généralise l'intégrale de Riemann, fondement de l'analyse moderne"
                }
            ]
        },
        "code": "from sympy import symbols, integrate, exp, oo\nx = symbols('x')\nintegrate(exp(-x**2), (x, -oo, oo))",
        "output": "√π",
        "exercises": [
            "Intégrer x·eˣ par parties",
            "Calculer ∫₀^π sin²(x) dx",
            "Intégrer 1/(1+x²) et retrouver arctan"
        ],
        "practicalApplication": "Intégrales pour probabilités (lois continues), énergies (physique), volumes (géométrie)."
    },
    {
        "id": "day_011",
        "dayNumber": 11,
        "title": "Limites",
        "difficulty": "Débutant",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 25,
        "badge": "🏅 Limites",
        "africanAnalogy": "La limite est comme s'approcher d'un puits sans jamais tomber dedans. On peut être aussi près qu'on veut du bord, à une distance infinitésimale, mais on reste sur la terre ferme. C'est l'art de frôler l'infini.",
        "theory": {
            "title": "Calcul de Limites",
            "content": "La limite décrit le comportement d'une fonction lorsqu'elle s'approche d'un point donné. C'est le concept fondateur de la continuité, de la dérivation et de l'intégration.",
            "mathematicalFoundation": "\n                    - Définition (ε-δ) : ∀ε>0, ∃δ>0 t.q. |x-a|<δ ⇒ |f(x)-L|<ε\n                - Limites à l'infini : comportement asymptotique\n                - Continuité : lim f(x) = f(a)\n                - Règle de L'Hôpital : pour les formes indéterminées 0/0 ou ∞/∞\n                ",
            "scientists": [
                {
                    "name": "Augustin-Louis Cauchy",
                    "year": "1821",
                    "contribution": "Définition rigoureuse de la limite",
                    "context": "Formalise l'analyse mathématique moderne"
                },
                {
                    "name": "Karl Weierstrass",
                    "year": "1872",
                    "contribution": "Définition epsilon-delta",
                    "context": "Le père de l'analyse moderne, rigueur absolue"
                }
            ]
        },
        "code": "from sympy import symbols, limit, sin, oo\nx = symbols('x')\nlimit(sin(x)/x, x, 0)",
        "output": "1",
        "exercises": [
            "Calculer la limite de (1+1/x)^x en l'infini",
            "Trouver la limite de (x²-1)/(x-1) en 1",
            "Étudier la limite de tan(x) en pi/2"
        ],
        "practicalApplication": "Analyse de stabilité, comportement asymptotique des algorithmes, physique théorique."
    },
    {
        "id": "day_012",
        "dayNumber": 12,
        "title": "Séries de Taylor",
        "difficulty": "Débutant",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Séries de Taylor",
        "africanAnalogy": "Une série de Taylor est comme reconstruire un arbre entier à partir d'une seule graine et de son code génétique. En connaissant la fonction et toutes ses dérivées en un seul point, on peut (souvent) reconstruire la fonction partout.",
        "theory": {
            "title": "Développement en Série",
            "content": "Les séries de Taylor permettent d'approximer des fonctions complexes par des polynômes. Plus on ajoute de termes, plus l'approximation est précise.",
            "mathematicalFoundation": "\n                    - Formule : f(x) = Σ f⁽ⁿ⁾(a)/n! * (x-a)ⁿ\n                - Série de Maclaurin : Taylor en a=0\n                - Reste de Lagrange : erreur de l'approximation\n                - Rayon de convergence : domaine de validité\n                ",
            "scientists": [
                {
                    "name": "Brook Taylor",
                    "year": "1715",
                    "contribution": "Théorème de Taylor",
                    "context": "Mathématicien anglais, travaux sur les cordes vibrantes"
                },
                {
                    "name": "Colin Maclaurin",
                    "year": "1742",
                    "contribution": "Cas particulier en 0",
                    "context": "Prodige écossais, professeur à 19 ans"
                }
            ]
        },
        "code": "from sympy import symbols, sin, series\nx = symbols('x')\nseries(sin(x), x, 0, 6)",
        "output": "x - x³/6 + x⁵/120 + O(x⁶)",
        "exercises": [
            "Développer e^x à l'ordre 5",
            "Trouver la série de cos(x)",
            "Approximer ln(1+x) autour de 0"
        ],
        "practicalApplication": "Calculatrices (sin, cos), physique (petites oscillations), méthodes numériques."
    },
    {
        "id": "day_013",
        "dayNumber": 13,
        "title": "Matrices",
        "difficulty": "Débutant",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Matrices",
        "africanAnalogy": "Une matrice est comme un tableau de tissage. Chaque ligne et chaque colonne a sa place et son rôle. Multiplier des matrices, c'est comme croiser les fils pour créer un motif complexe à partir de motifs simples.",
        "theory": {
            "title": "Algèbre Linéaire",
            "content": "Les matrices sont des tableaux de nombres permettant de représenter des transformations linéaires et de résoudre des systèmes d'équations.",
            "mathematicalFoundation": "\n                    - Opérations : addition, multiplication, transposition\n                - Déterminant : mesure du changement de volume\n                - Inverse : A⁻¹ t.q. AA⁻¹ = I\n                - Rang : dimension de l'image\n                ",
            "scientists": [
                {
                    "name": "Arthur Cayley",
                    "year": "1858",
                    "contribution": "Définition moderne de la multiplication matricielle",
                    "context": "Avocat et mathématicien, fonde la théorie des matrices"
                },
                {
                    "name": "James Sylvester",
                    "year": "1850",
                    "contribution": "Invente le terme 'matrice'",
                    "context": "Poète et mathématicien, ami de Cayley"
                }
            ]
        },
        "code": "from sympy import Matrix, eye\nA = Matrix([[1, 2], [3, 4]])\nA.det()",
        "output": "-2",
        "exercises": [
            "Calculer l'inverse d'une matrice 2x2",
            "Multiplier deux matrices 3x3",
            "Calculer la trace d'une matrice"
        ],
        "practicalApplication": "Graphisme 3D, mécanique quantique, réseaux de neurones (Deep Learning)."
    },
    {
        "id": "day_014",
        "dayNumber": 14,
        "title": "Valeurs Propres",
        "difficulty": "Débutant",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Valeurs Propres",
        "africanAnalogy": "Les vecteurs propres sont les piliers inébranlables d'une transformation. Quand tout tourne et se déforme autour d'eux, eux gardent leur direction, ne changeant que de taille (valeur propre). Ce sont les axes de stabilité du monde.",
        "theory": {
            "title": "Spectre d'une Matrice",
            "content": "Les valeurs propres (λ) et vecteurs propres (v) satisfont Av = λv. Ils caractérisent la transformation représentée par la matrice.",
            "mathematicalFoundation": "\n                    - Équation caractéristique : det(A - λI) = 0\n                - Diagonalisation : A = PDP⁻¹\n                - Théorème spectral : matrices symétriques réelles\n                - Espaces propres : noyau de (A - λI)\n                ",
            "scientists": [
                {
                    "name": "David Hilbert",
                    "year": "1900",
                    "contribution": "Théorie spectrale",
                    "context": "Géant des maths, pose les 23 problèmes du siècle"
                },
                {
                    "name": "John von Neumann",
                    "year": "1932",
                    "contribution": "Fondements mathématiques de la mécanique quantique",
                    "context": "Utilise les opérateurs hermitiens pour les observables"
                }
            ]
        },
        "code": "from sympy import Matrix\nA = Matrix([[1, 2], [2, 1]])\nA.eigenvals()",
        "output": "{-1: 1, 3: 1} (valeur: multiplicité)",
        "exercises": [
            "Trouver les vecteurs propres de la matrice",
            "Diagonaliser une matrice 2x2",
            "Vérifier le théorème de Cayley-Hamilton"
        ],
        "practicalApplication": "Vibrations (modes propres), Google PageRank, reconnaissance faciale (Eigenfaces)."
    },
    {
        "id": "day_015",
        "dayNumber": 15,
        "title": "Systèmes Linéaires",
        "difficulty": "Débutant",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Systèmes Linéaires",
        "africanAnalogy": "Un système linéaire est comme un nœud complexe de cordes. Chaque équation est une corde qui tire. La solution est le point d'équilibre où toutes les tensions s'annulent.",
        "theory": {
            "title": "Résolution de Systèmes",
            "content": "Un système linéaire Ax = b cherche le vecteur x. SymPy peut résoudre ces systèmes de manière exacte, même avec des paramètres symboliques.",
            "mathematicalFoundation": "\n                    - Méthode de Gauss : échelonnement\n                - Règle de Cramer : xᵢ = det(Aᵢ)/det(A)\n                - Systèmes sous/sur-déterminés\n                - Solutions paramétriques\n                ",
            "scientists": [
                {
                    "name": "Carl Friedrich Gauss",
                    "year": "1810",
                    "contribution": "Élimination de Gauss",
                    "context": "Utilisé pour calculer l'orbite de l'astéroïde Cérès"
                },
                {
                    "name": "Gabriel Cramer",
                    "year": "1750",
                    "contribution": "Règle de Cramer",
                    "context": "Méthode élégante mais coûteuse pour les systèmes"
                }
            ]
        },
        "code": "from sympy import symbols, linsolve\nx, y, z = symbols('x y z')\nlinsolve([x + y + z - 1, x + y + 2*z - 3], (x, y, z))",
        "output": "{(1 - y - z, y, 2)}",
        "exercises": [
            "Résoudre un système 3x3 unique",
            "Résoudre un système paramétrique",
            "Trouver l'intersection de deux plans"
        ],
        "practicalApplication": "Circuits électriques (Kirchhoff), équilibre statique, optimisation linéaire."
    },
    {
        "id": "day_016",
        "dayNumber": 16,
        "title": "Équations Différentielles",
        "difficulty": "Débutant",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Équations Différentielles",
        "africanAnalogy": "Une équation différentielle est la règle du jeu de la nature. Elle ne dit pas où on est, mais comment on bouge. Résoudre l'EDO, c'est prédire tout le voyage à partir de la règle de mouvement.",
        "theory": {
            "title": "EDO (Équations Différentielles Ordinaires)",
            "content": "Une EDO lie une fonction à ses dérivées. C'est le langage naturel de la physique pour décrire l'évolution des systèmes.",
            "mathematicalFoundation": "\n                    - Ordre : dérivée la plus haute\n                - Linéarité : a(x)y'' + b(x)y' + c(x)y = f(x)\n                - Conditions initiales : y(0) = y₀\n                - Séparation des variables\n                ",
            "scientists": [
                {
                    "name": "Leonhard Euler",
                    "year": "1750",
                    "contribution": "Méthodes de résolution et approximation",
                    "context": "Fonde la mécanique analytique"
                },
                {
                    "name": "Joseph-Louis Lagrange",
                    "year": "1788",
                    "contribution": "Variation des constantes",
                    "context": "Mécanique céleste et analytique"
                }
            ]
        },
        "code": "from sympy import Function, dsolve, Eq, Derivative, symbols\ny = Function('y')\nx = symbols('x')\ndsolve(Eq(y(x).diff(x, x) - y(x), 0), y(x))",
        "output": "y(x) = C1*exp(-x) + C2*exp(x)",
        "exercises": [
            "Résoudre y' + y = 0",
            "Résoudre l'oscillateur harmonique y'' + y = 0",
            "Résoudre avec conditions initiales"
        ],
        "practicalApplication": "Dynamique des populations, circuits RLC, mécanique céleste, réaction chimique."
    },
    {
        "id": "day_017",
        "dayNumber": 17,
        "title": "Transformée de Laplace",
        "difficulty": "Débutant",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Transformée de Laplace",
        "africanAnalogy": "La transformée de Laplace est comme traduire un poème difficile dans une langue simple. On transforme des équations différentielles complexes (domaine temporel) en équations algébriques simples (domaine fréquentiel), on résout, puis on retraduit.",
        "theory": {
            "title": "Analyse Opérationnelle",
            "content": "La transformée de Laplace convertit les dérivées en multiplications par s. Elle est idéale pour résoudre des EDO linéaires avec conditions initiales.",
            "mathematicalFoundation": "\n                    - Définition : L{f(t)} = ∫₀^∞ e⁻ˢᵗ f(t) dt\n                - Propriété : L{f'} = sF(s) - f(0)\n                - Convolution : L{f*g} = F(s)G(s)\n                - Inverse : retour au domaine temporel\n                ",
            "scientists": [
                {
                    "name": "Pierre-Simon Laplace",
                    "year": "1785",
                    "contribution": "Théorie des probabilités et transformée",
                    "context": "Le 'Newton français', déterministe absolu"
                },
                {
                    "name": "Oliver Heaviside",
                    "year": "1890",
                    "contribution": "Calcul opérationnel pour l'électrotechnique",
                    "context": "Rend la méthode pratique pour les ingénieurs"
                }
            ]
        },
        "code": "from sympy import laplace_transform, symbols, exp\nt, s = symbols('t s')\nlaplace_transform(t * exp(-t), t, s)",
        "output": "(1/(s + 1)**2, 0, True)",
        "exercises": [
            "Calculer la transformée de sin(t)",
            "Calculer la transformée inverse de 1/s",
            "Résoudre une EDO avec Laplace"
        ],
        "practicalApplication": "Automatique (systèmes de contrôle), traitement du signal, circuits électriques."
    },
    {
        "id": "day_018",
        "dayNumber": 18,
        "title": "Transformée de Fourier",
        "difficulty": "Débutant",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Transformée de Fourier",
        "africanAnalogy": "La transformée de Fourier est comme un prisme pour le son. Elle décompose n'importe quel bruit complexe en une somme de notes pures (fréquences). C'est l'oreille mathématique absolue.",
        "theory": {
            "title": "Analyse Harmonique",
            "content": "La transformée de Fourier décompose une fonction en une somme de sinusoïdes. Elle permet d'analyser le contenu fréquentiel d'un signal.",
            "mathematicalFoundation": "\n                    - Définition : F(k) = ∫₋∞^∞ f(x)e⁻²ⁱᵖᵏˣ dx\n                - Séries de Fourier : pour fonctions périodiques\n                - Identité de Parseval : conservation de l'énergie\n                - FFT : algorithme rapide (numérique)\n                ",
            "scientists": [
                {
                    "name": "Joseph Fourier",
                    "year": "1822",
                    "contribution": "Théorie analytique de la chaleur",
                    "context": "Affirme que toute fonction peut s'écrire comme somme de sinus"
                },
                {
                    "name": "Dirichlet",
                    "year": "1829",
                    "contribution": "Conditions de convergence",
                    "context": "Donne une base rigoureuse à l'intuition de Fourier"
                }
            ]
        },
        "code": "from sympy import fourier_transform, exp, symbols, pi\nx, k = symbols('x k')\nfourier_transform(exp(-x**2), x, k)",
        "output": "sqrt(pi)*exp(-pi**2*k**2)",
        "exercises": [
            "Calculer la transformée d'une porte (rect)",
            "Calculer la transformée de cos(x)",
            "Vérifier la linéarité"
        ],
        "practicalApplication": "MP3, JPEG, IRM, télécommunications (4G/5G), mécanique quantique."
    },
    {
        "id": "day_019",
        "dayNumber": 19,
        "title": "Géométrie : Points & Lignes",
        "difficulty": "Débutant",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 20,
        "badge": "🏅 Géométrie : Points & Lignes",
        "africanAnalogy": "La géométrie analytique est le mariage de l'algèbre et de l'espace. Un point n'est plus juste une tache d'encre, c'est un couple de nombres (x,y). Une ligne n'est plus un trait, c'est une équation.",
        "theory": {
            "title": "Géométrie Analytique",
            "content": "SymPy possède un module de géométrie puissant pour manipuler des objets géométriques de manière exacte (intersections, distances, projections).",
            "mathematicalFoundation": "\n                    - Point : P(x, y)\n                - Droite : ax + by + c = 0\n                - Segment : portion de droite\n                - Distance : d(A,B) = √((xB-xA)² + (yB-yA)²)\n                ",
            "scientists": [
                {
                    "name": "René Descartes",
                    "year": "1637",
                    "contribution": "Géométrie cartésienne",
                    "context": "Je pense donc je suis. Transforme la géométrie en algèbre"
                },
                {
                    "name": "Euclide",
                    "year": "-300",
                    "contribution": "Axiomes de la géométrie",
                    "context": "Les Éléments, livre le plus lu après la Bible"
                }
            ]
        },
        "code": "from sympy import Point, Line\np1, p2 = Point(0, 0), Point(1, 1)\nl = Line(p1, p2)\nl.equation()",
        "output": "-x + y",
        "exercises": [
            "Calculer la distance entre deux points",
            "Trouver l'intersection de deux droites",
            "Projeter un point sur une droite"
        ],
        "practicalApplication": "CAO (Conception Assistée par Ordinateur), robotique, jeux vidéo."
    },
    {
        "id": "day_020",
        "dayNumber": 20,
        "title": "PROJET : Architecte Géomètre",
        "difficulty": "Débutant",
        "masteryLevel": "Validé",
        "unlocked": true,
        "xpReward": 100,
        "badge": "🏛️ Architecte",
        "africanAnalogy": "Comme l'architecte qui trace les plans de la case à impluvium, vous utilisez maintenant tous les outils géométriques (points, lignes, polygones) pour construire une structure complète et solide.",
        "theory": {
            "title": "Polygones et Cercles",
            "content": "Manipulation d'objets fermés : triangles, carrés, polygones réguliers et cercles. Calculs d'aires, de périmètres et d'intersections.",
            "mathematicalFoundation": "\n                    - Aire (Shoelace formula) : 1/2 |Σ (xᵢyᵢ₊₁ - xᵢ₊₁yᵢ)|\n                - Centre de gravité : moyenne des coordonnées\n                - Cercle : (x-a)² + (y-b)² = R²\n                - Convexité\n                ",
            "scientists": [
                {
                    "name": "Archimède",
                    "year": "-250",
                    "contribution": "Aire du cercle et de la parabole",
                    "context": "Précurseur du calcul intégral par la méthode d'exhaustion"
                },
                {
                    "name": "Heron d'Alexandrie",
                    "year": "60",
                    "contribution": "Formule de Héron (aire triangle)",
                    "context": "Ingénieur grec, inventeur de la machine à vapeur"
                }
            ]
        },
        "code": "from sympy import Polygon, Point\nt = Polygon(Point(0,0), Point(1,0), Point(0,1))\nt.area",
        "output": "1/2",
        "exercises": [
            "Calculer l'aire d'un hexagone régulier",
            "Vérifier si un point est dans un polygone",
            "Trouver les intersections cercle-droite"
        ],
        "practicalApplication": "Architecture, cartographie (SIG), infographie."
    },
    {
        "id": "day_021",
        "dayNumber": 21,
        "title": "Combinatoire",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 25,
        "badge": "🏅 Combinatoire",
        "africanAnalogy": "La combinatoire est l'art de compter sans compter. C'est comme savoir combien de colliers différents on peut faire avec des perles colorées sans avoir à tous les fabriquer. Le griot connaît toutes les histoires possibles sans avoir à toutes les raconter.",
        "theory": {
            "title": "Analyse Combinatoire",
            "content": "La combinatoire étudie les arrangements, permutations et combinaisons d'objets. Elle répond à la question : 'De combien de façons peut-on...?'",
            "mathematicalFoundation": "\n                    - Factorielle : n! = n × (n-1) × ... × 2 × 1\n                - Permutations : P(n,k) = n!/(n-k)!\n                - Combinaisons : C(n,k) = n!/(k!(n-k)!)\n                - Principe du tiroir (Pigeonhole)\n                - Formule du binôme : (a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ\n                ",
            "scientists": [
                {
                    "name": "Blaise Pascal",
                    "year": "1654",
                    "contribution": "Triangle de Pascal et probabilités",
                    "context": "Correspondance avec Fermat, naissance de la théorie des probabilités"
                },
                {
                    "name": "Leonhard Euler",
                    "year": "1736",
                    "contribution": "Problème des ponts de Königsberg, graphes",
                    "context": "Fonde la théorie des graphes en résolvant un problème de promenade"
                }
            ]
        },
        "code": "from sympy import factorial, binomial\nn, k = 5, 2\nbinomial(n, k)",
        "output": "10",
        "exercises": [
            "Calculer 10!",
            "Combien de mains de 5 cartes dans un jeu de 52 ?",
            "Développer (x+y)⁴ avec les coefficients binomiaux"
        ],
        "practicalApplication": "Loteries, codes correcteurs d'erreurs, algorithmes de recherche, cryptographie."
    },
    {
        "id": "day_022",
        "dayNumber": 22,
        "title": "Probabilités Discrètes",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Probabilités Discrètes",
        "africanAnalogy": "Les probabilités sont comme prédire la pluie en observant les nuages. On ne sait pas exactement quand elle tombera, mais on peut dire : 'Il y a 70% de chances'. Le sage ne prédit pas l'avenir, il en mesure les possibilités.",
        "theory": {
            "title": "Théorie des Probabilités",
            "content": "Une probabilité mesure la chance qu'un événement se produise, entre 0 (impossible) et 1 (certain). SymPy peut calculer des probabilités exactes pour des variables discrètes.",
            "mathematicalFoundation": "\n                    - Probabilité : P(A) = |A| / |Ω|\n                - Événements indépendants : P(A∩B) = P(A)×P(B)\n                - Probabilité conditionnelle : P(A|B) = P(A∩B)/P(B)\n                - Théorème de Bayes : P(A|B) = P(B|A)P(A)/P(B)\n                - Espérance : E[X] = Σ xᵢ P(X=xᵢ)\n                ",
            "scientists": [
                {
                    "name": "Pierre de Fermat",
                    "year": "1654",
                    "contribution": "Co-fondateur de la théorie des probabilités",
                    "context": "Problème des partis avec Pascal"
                },
                {
                    "name": "Thomas Bayes",
                    "year": "1763",
                    "contribution": "Théorème de Bayes (probabilités conditionnelles)",
                    "context": "Publié après sa mort, révolutionne l'inférence statistique"
                }
            ]
        },
        "code": "from sympy.stats import Die, P, E\nX = Die('X', 6)\nP(X > 4)",
        "output": "1/3",
        "exercises": [
            "Probabilité d'obtenir un double six avec deux dés",
            "Calculer l'espérance d'un dé à 6 faces",
            "Appliquer le théorème de Bayes (test médical)"
        ],
        "practicalApplication": "Jeux de hasard, assurance, machine learning (classificateurs bayésiens), finance."
    },
    {
        "id": "day_023",
        "dayNumber": 23,
        "title": "Statistiques Descriptives",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 20,
        "badge": "🏅 Statistiques Descriptives",
        "africanAnalogy": "Les statistiques résument une foule en quelques chiffres. Au lieu de décrire chaque personne du village, on dit : 'La taille moyenne est 1m70, l'âge médian est 30 ans'. C'est le portrait du groupe, pas de l'individu.",
        "theory": {
            "title": "Statistiques et Données",
            "content": "Les statistiques descriptives résument et visualisent des ensembles de données. Moyenne, médiane, écart-type caractérisent une distribution.",
            "mathematicalFoundation": "\n                    - Moyenne : μ = (Σ xᵢ) / n\n                - Médiane : valeur centrale (50e percentile)\n                - Variance : σ² = Σ(xᵢ - μ)² / n\n                - Écart-type : σ = √variance\n                - Quartiles : Q1 (25%), Q2 (50%), Q3 (75%)\n                ",
            "scientists": [
                {
                    "name": "Carl Friedrich Gauss",
                    "year": "1809",
                    "contribution": "Loi normale (courbe en cloche)",
                    "context": "Méthode des moindres carrés pour l'astronomie"
                },
                {
                    "name": "Francis Galton",
                    "year": "1886",
                    "contribution": "Corrélation et régression",
                    "context": "Étudie l'hérédité, invente la régression vers la moyenne"
                }
            ]
        },
        "code": "from sympy.stats import Normal, density, E, variance\nX = Normal('X', 0, 1)\nE(X), variance(X)",
        "output": "(0, 1)",
        "exercises": [
            "Calculer la moyenne de [1, 2, 3, 4, 5]",
            "Trouver l'écart-type d'une distribution",
            "Calculer P(X < 1) pour X ~ N(0,1)"
        ],
        "practicalApplication": "Sondages, contrôle qualité, analyse de données, sciences sociales."
    },
    {
        "id": "day_024",
        "dayNumber": 24,
        "title": "Logique Booléenne",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 20,
        "badge": "🏅 Logique Booléenne",
        "africanAnalogy": "La logique booléenne est le langage du oui et du non, du vrai et du faux. C'est comme les portes d'un village : soit elles sont ouvertes (1), soit fermées (0). Pas de demi-mesure. Les ordinateurs pensent ainsi.",
        "theory": {
            "title": "Algèbre de Boole",
            "content": "L'algèbre booléenne manipule des valeurs binaires (Vrai/Faux, 1/0) avec des opérateurs logiques (ET, OU, NON). C'est la base de l'électronique numérique.",
            "mathematicalFoundation": "\n                    - Opérateurs : AND (∧), OR (∨), NOT (¬)\n                - Lois de De Morgan : ¬(A∧B) = ¬A∨¬B\n                - Tables de vérité\n                - XOR (ou exclusif) : A⊕B = (A∨B)∧¬(A∧B)\n                - Forme normale disjonctive (DNF)\n                ",
            "scientists": [
                {
                    "name": "George Boole",
                    "year": "1854",
                    "contribution": "Algèbre booléenne",
                    "context": "Mathématicien autodidacte, révolutionne la logique"
                },
                {
                    "name": "Claude Shannon",
                    "year": "1937",
                    "contribution": "Application aux circuits électriques",
                    "context": "Thèse de master fondatrice de l'électronique numérique"
                }
            ]
        },
        "code": "from sympy.logic import And, Or, Not, simplify_logic\nfrom sympy import symbols\nx, y = symbols('x y')\nsimplify_logic(Or(And(x, y), And(x, Not(y))))",
        "output": "x",
        "exercises": [
            "Simplifier (A∧B)∨(A∧¬B)",
            "Construire la table de vérité de XOR",
            "Appliquer les lois de De Morgan"
        ],
        "practicalApplication": "Circuits logiques, processeurs, bases de données (requêtes SQL), IA (logique formelle)."
    },
    {
        "id": "day_025",
        "dayNumber": 25,
        "title": "Théorie des Nombres",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Théorie des Nombres",
        "africanAnalogy": "Les nombres premiers sont les atomes des mathématiques. Tout nombre est fait de nombres premiers, comme toute matière est faite d'atomes. Trouver les nombres premiers, c'est découvrir les briques fondamentales de l'univers des nombres.",
        "theory": {
            "title": "Arithmétique et Primalité",
            "content": "La théorie des nombres étudie les propriétés des entiers. Les nombres premiers (divisibles seulement par 1 et eux-mêmes) sont au cœur de cette théorie.",
            "mathematicalFoundation": "\n                    - Nombre premier : p divisible uniquement par 1 et p\n                - Théorème fondamental : tout n = p₁^a₁ × p₂^a₂ × ...\n                - PGCD : Plus Grand Commun Diviseur\n                - PPCM : Plus Petit Commun Multiple\n                - Infinité des nombres premiers (Euclide)\n                ",
            "scientists": [
                {
                    "name": "Euclide",
                    "year": "-300",
                    "contribution": "Infinité des nombres premiers",
                    "context": "Preuve élégante par l'absurde dans Les Éléments"
                },
                {
                    "name": "Évariste Galois",
                    "year": "1830",
                    "contribution": "Théorie de Galois (corps finis)",
                    "context": "Génie mort à 20 ans, révolutionne l'algèbre abstraite"
                }
            ]
        },
        "code": "from sympy import isprime, factorint, gcd\nisprime(17), factorint(60)",
        "output": "(True, {2: 2, 3: 1, 5: 1})",
        "exercises": [
            "Trouver tous les nombres premiers < 100",
            "Décomposer 1024 en facteurs premiers",
            "Calculer PGCD(48, 18)"
        ],
        "practicalApplication": "Cryptographie RSA, hachage, codes correcteurs, tests de primalité."
    },
    {
        "id": "day_026",
        "dayNumber": 26,
        "title": "Congruences",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Congruences",
        "africanAnalogy": "Les congruences sont comme les jours de la semaine. Après dimanche vient lundi, après 7 jours on revient au même jour. En arithmétique modulaire, après 12 vient 1 (sur une horloge). Les nombres tournent en boucle.",
        "theory": {
            "title": "Arithmétique Modulaire",
            "content": "Deux nombres sont congrus modulo n s'ils ont le même reste dans la division par n. Notation : a ≡ b (mod n).",
            "mathematicalFoundation": "\n                    - Définition : a ≡ b (mod n) ⟺ n | (a-b)\n                - Propriétés : (a+b) mod n, (a×b) mod n\n                - Inverse modulaire : ax ≡ 1 (mod n)\n                - Petit théorème de Fermat : aᵖ⁻¹ ≡ 1 (mod p) si p premier\n                - Théorème chinois des restes\n                ",
            "scientists": [
                {
                    "name": "Carl Friedrich Gauss",
                    "year": "1801",
                    "contribution": "Disquisitiones Arithmeticae, formalise les congruences",
                    "context": "Ouvrage fondateur de la théorie des nombres moderne"
                },
                {
                    "name": "Pierre de Fermat",
                    "year": "1640",
                    "contribution": "Petit théorème de Fermat",
                    "context": "Magistrat et mathématicien amateur de génie"
                }
            ]
        },
        "code": "from sympy import Mod, mod_inverse\nMod(17, 5), mod_inverse(3, 7)",
        "output": "(2, 5)",
        "exercises": [
            "Calculer 2^100 mod 7",
            "Trouver l'inverse de 5 modulo 11",
            "Résoudre 3x ≡ 1 (mod 7)"
        ],
        "practicalApplication": "Cryptographie (RSA, Diffie-Hellman), hachage, générateurs pseudo-aléatoires."
    },
    {
        "id": "day_027",
        "dayNumber": 27,
        "title": "Cryptographie RSA",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Cryptographie RSA",
        "africanAnalogy": "RSA est comme un cadenas magique. Tout le monde peut fermer le cadenas (chiffrer avec la clé publique), mais seul celui qui a la clé secrète peut l'ouvrir (déchiffrer). Le secret repose sur la difficulté de factoriser de très grands nombres.",
        "theory": {
            "title": "Cryptographie à Clé Publique",
            "content": "RSA (Rivest-Shamir-Adleman) est un algorithme de chiffrement asymétrique basé sur la difficulté de factoriser le produit de deux grands nombres premiers.",
            "mathematicalFoundation": "\n                    - Génération de clés : choisir p, q premiers, n = p×q\n                - φ(n) = (p-1)(q-1) (indicatrice d'Euler)\n                - Choisir e tel que pgcd(e, φ(n)) = 1\n                - Calculer d tel que ed ≡ 1 (mod φ(n))\n                - Chiffrement : c = mᵉ mod n\n                - Déchiffrement : m = cᵈ mod n\n                ",
            "scientists": [
                {
                    "name": "Ron Rivest, Adi Shamir, Leonard Adleman",
                    "year": "1977",
                    "contribution": "Invention de RSA",
                    "context": "Révolutionne la cryptographie, permet le commerce électronique"
                },
                {
                    "name": "Whitfield Diffie, Martin Hellman",
                    "year": "1976",
                    "contribution": "Concept de cryptographie à clé publique",
                    "context": "Prix Turing 2015, rendent RSA possible"
                }
            ]
        },
        "code": "from sympy import randprime, mod_inverse, Mod\np, q = 61, 53\nn = p * q\nphi = (p-1) * (q-1)\ne = 17\nd = mod_inverse(e, phi)\nprint(f'Public: (e={e}, n={n}), Private: d={d}')",
        "output": "Public: (e=17, n=3233), Private: d=...",
        "exercises": [
            "Générer une paire de clés RSA avec p=11, q=13",
            "Chiffrer le message m=42",
            "Déchiffrer le message chiffré"
        ],
        "practicalApplication": "HTTPS (SSL/TLS), signatures numériques, blockchain, messagerie sécurisée."
    },
    {
        "id": "day_028",
        "dayNumber": 28,
        "title": "Théorie des Graphes",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Théorie des Graphes",
        "africanAnalogy": "Un graphe est comme un réseau de villages reliés par des chemins. Les villages sont les sommets, les chemins sont les arêtes. Trouver le plus court chemin entre deux villages, c'est résoudre un problème de graphe.",
        "theory": {
            "title": "Graphes et Réseaux",
            "content": "Un graphe G = (V, E) est un ensemble de sommets V reliés par des arêtes E. Les graphes modélisent des réseaux : routes, internet, relations sociales.",
            "mathematicalFoundation": "\n                    - Graphe orienté vs non-orienté\n                - Degré d'un sommet : nombre d'arêtes incidentes\n                - Chemin : suite de sommets reliés\n                - Cycle : chemin fermé\n                - Connexité : existence de chemins entre tous sommets\n                - Arbre : graphe connexe sans cycle\n                ",
            "scientists": [
                {
                    "name": "Leonhard Euler",
                    "year": "1736",
                    "contribution": "Problème des ponts de Königsberg",
                    "context": "Premier problème de théorie des graphes"
                },
                {
                    "name": "Gustav Kirchhoff",
                    "year": "1847",
                    "contribution": "Lois des circuits électriques (graphes)",
                    "context": "Applique les graphes à la physique"
                }
            ]
        },
        "code": "# SymPy n'a pas de module graphe natif, utiliser NetworkX\n# Exemple conceptuel\nfrom sympy import Matrix\n# Matrice d'adjacence\nA = Matrix([[0,1,1],[1,0,1],[1,1,0]])\nA.eigenvals()",
        "output": "{-1: 1, 2: 1}",
        "exercises": [
            "Dessiner un graphe K₅ (complet à 5 sommets)",
            "Vérifier si un graphe est connexe",
            "Trouver le plus court chemin (Dijkstra)"
        ],
        "practicalApplication": "Réseaux sociaux, GPS (navigation), internet (routage), biologie (réseaux métaboliques)."
    },
    {
        "id": "day_029",
        "dayNumber": 29,
        "title": "Optimisation Linéaire",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Optimisation Linéaire",
        "africanAnalogy": "L'optimisation linéaire cherche la meilleure solution sous contraintes. C'est comme un fermier qui veut maximiser sa récolte avec un terrain limité, un budget limité et des saisons fixes. Il doit trouver le meilleur équilibre.",
        "theory": {
            "title": "Programmation Linéaire",
            "content": "Maximiser (ou minimiser) une fonction linéaire sous contraintes linéaires. Le simplexe est l'algorithme classique de résolution.",
            "mathematicalFoundation": "\n                    - Forme standard : max c^T x sous Ax ≤ b, x ≥ 0\n                - Région admissible : polyèdre convexe\n                - Théorème : l'optimum est à un sommet\n                - Algorithme du simplexe (Dantzig, 1947)\n                - Dualité : tout problème a un dual\n                ",
            "scientists": [
                {
                    "name": "George Dantzig",
                    "year": "1947",
                    "contribution": "Algorithme du simplexe",
                    "context": "Résout un problème d'optimisation de l'armée américaine"
                },
                {
                    "name": "Leonid Kantorovich",
                    "year": "1939",
                    "contribution": "Programmation linéaire en économie",
                    "context": "Prix Nobel d'économie 1975"
                }
            ]
        },
        "code": "# SymPy peut résoudre symboliquement\nfrom sympy import symbols, solve\nx, y = symbols('x y', positive=True, real=True)\n# Exemple : max 3x + 2y sous x + y <= 4\n# Résolution manuelle ou avec solveurs externes",
        "output": "Solution optimale au sommet du polyèdre",
        "exercises": [
            "Résoudre un problème de production",
            "Problème du sac à dos (version continue)",
            "Trouver le dual d'un problème"
        ],
        "practicalApplication": "Logistique, planification de production, allocation de ressources, finance (portefeuille)."
    },
    {
        "id": "day_030",
        "dayNumber": 30,
        "title": "Physique : Cinématique",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Physique : Cinématique",
        "africanAnalogy": "La cinématique décrit le mouvement sans se soucier des causes. C'est comme raconter le voyage d'un oiseau : où il est, à quelle vitesse il vole, comment il accélère. Peu importe pourquoi il vole, on décrit juste sa trajectoire.",
        "theory": {
            "title": "Mouvement et Trajectoires",
            "content": "La cinématique étudie position, vitesse et accélération. SymPy peut résoudre symboliquement les équations du mouvement.",
            "mathematicalFoundation": "\n                    - Position : x(t)\n                - Vitesse : v(t) = dx/dt\n                - Accélération : a(t) = dv/dt = d²x/dt²\n                - Mouvement rectiligne uniforme : x = x₀ + vt\n                - Mouvement uniformément accéléré : x = x₀ + v₀t + ½at²\n                - Chute libre : a = -g = -9.81 m/s²\n                ",
            "scientists": [
                {
                    "name": "Galileo Galilei",
                    "year": "1638",
                    "contribution": "Lois de la chute des corps",
                    "context": "Expériences à la tour de Pise (légende), fonde la physique expérimentale"
                },
                {
                    "name": "Isaac Newton",
                    "year": "1687",
                    "contribution": "Lois du mouvement",
                    "context": "Principia Mathematica, unifie mécanique terrestre et céleste"
                }
            ]
        },
        "code": "from sympy import symbols, Function, Eq, dsolve\nt = symbols('t', positive=True)\nx = Function('x')\n# Mouvement avec accélération constante\neq = Eq(x(t).diff(t, t), -9.81)\ndsolve(eq, x(t))",
        "output": "x(t) = C₁ + C₂*t - 4.905*t²",
        "exercises": [
            "Calculer la vitesse finale après 5s de chute libre",
            "Trouver la hauteur maximale d'un projectile",
            "Résoudre x'' = -g avec conditions initiales"
        ],
        "practicalApplication": "Balistique, robotique, jeux vidéo (moteurs physiques), aérospatiale."
    },
    {
        "id": "day_031",
        "dayNumber": 31,
        "title": "Physique : Dynamique",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Physique : Dynamique",
        "africanAnalogy": "La dynamique est l'étude des causes du mouvement. Si la cinématique décrit la danse, la dynamique explique la musique qui fait bouger les danseurs. C'est la force invisible qui pousse, tire et retient.",
        "theory": {
            "title": "Lois de Newton",
            "content": "La dynamique classique repose sur les trois lois de Newton reliant les forces au mouvement. SymPy permet de résoudre ces équations vectorielles.",
            "mathematicalFoundation": "\n                    - 1ère loi (Inertie) : ΣF = 0 ⟺ v = constante\n                - 2ème loi (Fondamentale) : ΣF = ma\n                - 3ème loi (Action-Réaction) : F_AB = -F_BA\n                - Poids : P = mg\n                - Frottement : f = μN\n                ",
            "scientists": [
                {
                    "name": "Isaac Newton",
                    "year": "1687",
                    "contribution": "Philosophiae Naturalis Principia Mathematica",
                    "context": "Pose les bases de la mécanique classique"
                },
                {
                    "name": "Émilie du Châtelet",
                    "year": "1740",
                    "contribution": "Traduction et commentaire de Newton",
                    "context": "Clarifie la notion d'énergie cinétique"
                }
            ]
        },
        "code": "from sympy import symbols, Eq, solve\nm, a, F_poussee, F_frottement = symbols('m a F_p F_f')\n# 2ème loi de Newton : F_p - F_f = ma\neq = Eq(F_poussee - F_frottement, m * a)\nsolve(eq, a)",
        "output": "[(-F_f + F_p)/m]",
        "exercises": [
            "Calculer l'accélération d'un bloc sur un plan incliné",
            "Déterminer la force nécessaire pour déplacer une masse",
            "Système de poulies (machine d'Atwood)"
        ],
        "practicalApplication": "Ingénierie automobile, aérospatiale, biomécanique, construction."
    },
    {
        "id": "day_032",
        "dayNumber": 32,
        "title": "Physique : Énergie",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Physique : Énergie",
        "africanAnalogy": "L'énergie est la monnaie de l'univers. Elle ne se crée ni ne se perd, elle change juste de main (transfert) ou de forme (transformation). Le travail est le prix à payer pour changer l'énergie d'un système.",
        "theory": {
            "title": "Travail et Énergie",
            "content": "Le théorème de l'énergie cinétique et la conservation de l'énergie mécanique sont des outils puissants pour résoudre des problèmes sans connaître les détails du mouvement.",
            "mathematicalFoundation": "\n                    - Travail : W = ∫ F · dl\n                - Énergie Cinétique : Ec = 1/2 mv²\n                - Énergie Potentielle (pesanteur) : Ep = mgh\n                - Conservation : Em = Ec + Ep = constante (si forces conservatives)\n                - Puissance : P = dW/dt = F · v\n                ",
            "scientists": [
                {
                    "name": "James Prescott Joule",
                    "year": "1843",
                    "contribution": "Équivalent mécanique de la chaleur",
                    "context": "Montre que chaleur et travail sont deux formes d'énergie"
                },
                {
                    "name": "Hermann von Helmholtz",
                    "year": "1847",
                    "contribution": "Conservation de l'énergie",
                    "context": "Principe universel applicable à tous les phénomènes"
                }
            ]
        },
        "code": "from sympy import symbols, solve, Eq\nm, v, g, h = symbols('m v g h')\n# Conservation : Ec_initiale + Ep_initiale = Ec_finale + Ep_finale\n# Chute libre : mgh = 1/2 mv^2\neq = Eq(m*g*h, 1/2 * m * v**2)\nsolve(eq, v)",
        "output": "[-1.414*sqrt(g*h), 1.414*sqrt(g*h)]",
        "exercises": [
            "Vitesse d'un pendule au point bas",
            "Ressort comprimé (énergie élastique)",
            "Travail d'une force variable"
        ],
        "practicalApplication": "Montagnes russes, barrages hydroélectriques, moteurs, crash tests."
    },
    {
        "id": "day_033",
        "dayNumber": 33,
        "title": "Systèmes Linéaires",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Systèmes Linéaires",
        "africanAnalogy": "Un système d'équations linéaires est comme un marché où plusieurs produits ont des prix liés. Si 2 mangues + 3 bananes = 500F et 1 mangue + 1 banane = 200F, on peut trouver le prix de chaque fruit en résolvant le système.",
        "theory": {
            "title": "Algèbre Linéaire",
            "content": "Résolution de systèmes Ax=b par élimination de Gauss, matrices inverses, ou décomposition LU. SymPy peut résoudre symboliquement.",
            "mathematicalFoundation": "\n                - Forme matricielle : Ax = b\n                - Élimination de Gauss (échelonnement)\n                - Déterminant et inversibilité\n                - Rang de la matrice\n                - Espace des solutions (unique, infini, vide)\n            ",
            "scientists": [
                {
                    "name": "Carl Friedrich Gauss",
                    "year": "1809",
                    "contribution": "Méthode d'élimination",
                    "context": "Utilisée pour calculer l'orbite de Cérès"
                },
                {
                    "name": "Arthur Cayley",
                    "year": "1858",
                    "contribution": "Théorie des matrices",
                    "context": "Formalise l'algèbre matricielle"
                }
            ]
        },
        "code": "from sympy import symbols, Matrix, solve\nx, y, z = symbols('x y z')\n# Système 3x3\nA = Matrix([[2, 1, -1], [1, -1, 2], [3, 2, 1]])\nb = Matrix([8, -2, 14])\n# Solution\nA.LUsolve(b)",
        "output": "Matrix([[1], [2], [3]])",
        "exercises": [
            "Résoudre un système 2x2 à la main",
            "Système avec paramètre symbolique",
            "Interpréter géométriquement (intersection de plans)"
        ],
        "practicalApplication": "Circuits électriques, équilibre chimique, économie (Leontief), infographie 3D."
    },
    {
        "id": "day_034",
        "dayNumber": 34,
        "title": "Chimie : Cinétique",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Chimie : Cinétique",
        "africanAnalogy": "La cinétique chimique est le chronomètre de la réaction. Certaines réactions sont des explosions instantanées, d'autres prennent des siècles comme la rouille. Comprendre la vitesse, c'est maîtriser le temps de la matière.",
        "theory": {
            "title": "Vitesse de Réaction",
            "content": "La vitesse dépend de la concentration des réactifs. Cela conduit à des équations différentielles décrivant l'évolution des concentrations dans le temps.",
            "mathematicalFoundation": "\n                    - Loi de vitesse : v = k[A]ⁿ\n                - Ordre de réaction (0, 1, 2)\n                - Loi d'Arrhenius : k = A exp(-Ea/RT)\n                - Demi-vie : temps pour consommer la moitié du réactif\n                ",
            "scientists": [
                {
                    "name": "Svante Arrhenius",
                    "year": "1889",
                    "contribution": "Loi d'Arrhenius (température)",
                    "context": "Prix Nobel, lie vitesse et énergie d'activation"
                },
                {
                    "name": "Peter Waage & Cato Guldberg",
                    "year": "1864",
                    "contribution": "Loi d'action de masse",
                    "context": "Formalisent l'équilibre chimique"
                }
            ]
        },
        "code": "from sympy import Function, dsolve, Eq, symbols\nC = Function('C')\nt, k = symbols('t k')\n# Réaction d'ordre 1 : dC/dt = -kC\neq = Eq(C(t).diff(t), -k * C(t))\ndsolve(eq, C(t))",
        "output": "C(t) = C1 * exp(-k*t)",
        "exercises": [
            "Cinétique d'ordre 2",
            "Calculer la demi-vie",
            "Influence de la température (Arrhenius)"
        ],
        "practicalApplication": "Datation au carbone 14, conservation des aliments, catalyseurs, pharmacocinétique."
    },
    {
        "id": "day_035",
        "dayNumber": 35,
        "title": "Biologie : Populations",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Biologie : Populations",
        "africanAnalogy": "Une population grandit comme un feu de forêt. Au début, ça flambe (exponentiel), mais quand le bois manque (ressources limitées), le feu se stabilise. Modéliser la population, c'est prédire l'équilibre de la vie.",
        "theory": {
            "title": "Dynamique des Populations",
            "content": "Les modèles mathématiques décrivent l'évolution du nombre d'individus. Du modèle exponentiel simple (Malthus) au modèle logistique (Verhulst) avec capacité de charge.",
            "mathematicalFoundation": "\n                    - Croissance exponentielle : dN/dt = rN\n                - Modèle logistique : dN/dt = rN(1 - N/K)\n                - K : capacité de charge du milieu\n                - r : taux de croissance intrinsèque\n                ",
            "scientists": [
                {
                    "name": "Thomas Malthus",
                    "year": "1798",
                    "contribution": "Essai sur le principe de population",
                    "context": "Prédit une crise si la population dépasse les ressources"
                },
                {
                    "name": "Pierre François Verhulst",
                    "year": "1838",
                    "contribution": "Modèle logistique",
                    "context": "Corrige Malthus en introduisant la saturation"
                }
            ]
        },
        "code": "from sympy import Function, dsolve, Eq, symbols\nN = Function('N')\nt, r, K = symbols('t r K')\n# Modèle logistique\neq = Eq(N(t).diff(t), r * N(t) * (1 - N(t)/K))\n# Solution générale (complexe, SymPy peut la trouver)",
        "output": "N(t) = K / (1 + C1*exp(-rt))",
        "exercises": [
            "Résoudre le modèle exponentiel",
            "Trouver la population à l'équilibre",
            "Modèle Proie-Prédateur (Lotka-Volterra)"
        ],
        "practicalApplication": "Écologie, gestion des pêches, épidémiologie (propagation virus), démographie."
    },
    {
        "id": "day_036",
        "dayNumber": 36,
        "title": "Probabilités Symboliques",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Probabilités Symboliques",
        "africanAnalogy": "Les probabilités sont comme prédire la pluie. Si on sait qu'il pleut 3 jours sur 10, la probabilité de pluie est 3/10. SymPy permet de calculer des probabilités exactes avec des fractions, pas des décimales approximatives.",
        "theory": {
            "title": "Calcul des Probabilités",
            "content": "Variables aléatoires discrètes et continues. Espérance, variance, lois de probabilité. SymPy peut manipuler des distributions symboliquement.",
            "mathematicalFoundation": "\n                - Probabilité : P(A) ∈ [0,1]\n                - Espérance : E[X] = Σ x·P(X=x)\n                - Variance : Var(X) = E[(X-μ)²]\n                - Loi binomiale, géométrique, Poisson\n                - Théorème de Bayes\n            ",
            "scientists": [
                {
                    "name": "Blaise Pascal",
                    "year": "1654",
                    "contribution": "Fondements des probabilités",
                    "context": "Correspondance avec Fermat sur les jeux de hasard"
                },
                {
                    "name": "Andrey Kolmogorov",
                    "year": "1933",
                    "contribution": "Axiomes des probabilités",
                    "context": "Fonde la théorie moderne"
                }
            ]
        },
        "code": "from sympy.stats import Die, E, variance\nX = Die('X', 6)  # Dé à 6 faces\n# Espérance\nprint(f'E[X] = {E(X)}')\n# Variance\nprint(f'Var(X) = {variance(X)}')",
        "output": "E[X] = 7/2, Var(X) = 35/12",
        "exercises": [
            "Calculer P(X > 4) pour un dé",
            "Espérance d'une variable binomiale",
            "Loi de la somme de deux dés"
        ],
        "practicalApplication": "Jeux, assurance, finance quantitative, physique statistique."
    },
    {
        "id": "day_037",
        "dayNumber": 37,
        "title": "Économie : Finance",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 30,
        "badge": "🏅 Économie : Finance",
        "africanAnalogy": "L'intérêt composé est la huitième merveille du monde. C'est de l'argent qui fait des bébés argent, qui eux-mêmes font des bébés. Avec le temps, une petite graine devient une forêt.",
        "theory": {
            "title": "Mathématiques Financières",
            "content": "Calcul des intérêts simples et composés, valeur actuelle et future, annuités. C'est la base de toute décision d'investissement.",
            "mathematicalFoundation": "\n                    - Intérêt simple : I = Crt\n                - Intérêt composé : A = P(1 + r/n)^(nt)\n                - Valeur Actuelle Nette (VAN)\n                - Taux de rentabilité interne (TRI)\n                - Amortissement d'emprunt\n                ",
            "scientists": [
                {
                    "name": "Fibonacci",
                    "year": "1202",
                    "contribution": "Liber Abaci",
                    "context": "Introduit les calculs commerciaux et les chiffres arabes en Europe"
                },
                {
                    "name": "Irving Fisher",
                    "year": "1930",
                    "contribution": "Théorie de l'intérêt",
                    "context": "Formalise le lien entre temps et valeur de l'argent"
                }
            ]
        },
        "code": "from sympy import symbols, solve, Eq\nP, r, t, A = symbols('P r t A')\n# Formule intérêt composé continu : A = P * exp(rt)\n# Combien de temps pour doubler son capital ? (A = 2P)\neq = Eq(2*P, P * 2.718** (r*t))\nsolve(eq, t)",
        "output": "[0.693/r] (Règle de 72)",
        "exercises": [
            "Calculer les mensualités d'un prêt",
            "Comparer deux investissements",
            "Calculer la valeur future d'une épargne"
        ],
        "practicalApplication": "Banque, immobilier, retraite, gestion de patrimoine, trading."
    },
    {
        "id": "day_038",
        "dayNumber": 38,
        "title": "Économie : Marchés",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Fondamental",
        "unlocked": true,
        "xpReward": 25,
        "badge": "🏅 Économie : Marchés",
        "africanAnalogy": "Le marché est une danse entre ceux qui vendent et ceux qui achètent. Le prix est le point d'accord où la danse est harmonieuse. Si le prix est trop haut, la musique s'arrête (surplus). Trop bas, c'est la cohue (pénurie).",
        "theory": {
            "title": "Offre et Demande",
            "content": "Le modèle de l'offre et de la demande détermine le prix et la quantité d'équilibre dans un marché concurrentiel. C'est l'intersection de deux courbes.",
            "mathematicalFoundation": "\n                    - Fonction de demande : Qd = a - bP (décroissante)\n                - Fonction d'offre : Qs = c + dP (croissante)\n                - Équilibre : Qd = Qs\n                - Élasticité-prix : sensibilité de la demande\n                - Surplus du consommateur et du producteur\n                ",
            "scientists": [
                {
                    "name": "Adam Smith",
                    "year": "1776",
                    "contribution": "La main invisible",
                    "context": "La Richesse des Nations, fondation de l'économie classique"
                },
                {
                    "name": "Alfred Marshall",
                    "year": "1890",
                    "contribution": "Courbes d'offre et demande",
                    "context": "Formalise l'analyse graphique de l'équilibre partiel"
                }
            ]
        },
        "code": "from sympy import symbols, Eq, solve\nP = symbols('P')\nQd = 100 - 2*P  # Demande\nQs = 20 + 3*P   # Offre\n# Équilibre\neq = Eq(Qd, Qs)\nprix_eq = solve(eq, P)[0]\nquantite_eq = Qd.subs(P, prix_eq)\nprint(f'Prix: {prix_eq}, Quantité: {quantite_eq}')",
        "output": "Prix: 16, Quantité: 68",
        "exercises": [
            "Calculer l'impact d'une taxe",
            "Trouver le nouvel équilibre après un choc",
            "Calculer l'élasticité"
        ],
        "practicalApplication": "Fixation des prix, politiques publiques, stratégie d'entreprise, marketing."
    },
    {
        "id": "day_039",
        "dayNumber": 39,
        "title": "Ingénierie : RDM",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Ingénierie : RDM",
        "africanAnalogy": "La résistance des matériaux est l'art de savoir quand ça casse. Une poutre est comme un muscle : elle se tend et se comprime sous l'effort. L'ingénieur calcule la douleur de la matière pour éviter la fracture.",
        "theory": {
            "title": "Résistance des Matériaux",
            "content": "Calcul des contraintes et déformations dans les structures. L'équation de la poutre (Euler-Bernoulli) décrit la flexion sous charge.",
            "mathematicalFoundation": "\n                    - Contrainte (σ) et Déformation (ε)\n                - Loi de Hooke : σ = Eε\n                - Moment fléchissant (M) et Effort tranchant (V)\n                - Équation de la poutre : EI y'''' = q(x)\n                - Flèche maximale\n                ",
            "scientists": [
                {
                    "name": "Galileo Galilei",
                    "year": "1638",
                    "contribution": "Première théorie des poutres",
                    "context": "Tente de comprendre la rupture des pierres et du bois"
                },
                {
                    "name": "Euler & Bernoulli",
                    "year": "1750",
                    "contribution": "Théorie Euler-Bernoulli",
                    "context": "Modèle encore utilisé aujourd'hui pour les poutres minces"
                }
            ]
        },
        "code": "from sympy import symbols, integrate\nx, L, F, E, I = symbols('x L F E I')\n# Moment fléchissant pour une poutre encastrée avec force au bout\nM = -F * (L - x)\n# Équation de la déformée : EI y'' = M\n# On intègre deux fois pour avoir y(x)\ny_prime_prime = M / (E*I)\n# ... intégration symbolique ...",
        "output": "Flèche max = F*L^3 / (3*E*I)",
        "exercises": [
            "Calculer la flèche d'une poutre sur deux appuis",
            "Diagramme des moments",
            "Dimensionner une poutre en acier"
        ],
        "practicalApplication": "Génie civil (ponts, bâtiments), aéronautique, mécanique, design."
    },
    {
        "id": "day_040",
        "dayNumber": 40,
        "title": "Ingénierie : Circuits",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Ingénierie : Circuits",
        "africanAnalogy": "Un circuit électrique est comme un réseau de tuyaux d'eau. La tension est la pression, le courant est le débit, la résistance est un tuyau étroit. Le condensateur est un réservoir, l'inductance une roue à aubes.",
        "theory": {
            "title": "Analyse de Circuits",
            "content": "Les lois de Kirchhoff et la loi d'Ohm permettent de résoudre n'importe quel circuit. En régime alternatif, on utilise les impédances complexes.",
            "mathematicalFoundation": "\n                    - Loi d'Ohm : U = RI\n                - Loi des nœuds : ΣI = 0\n                - Loi des mailles : ΣU = 0\n                - Impédance complexe : Z_R=R, Z_L=jωL, Z_C=1/(jωC)\n                - Circuit RLC série/parallèle\n                ",
            "scientists": [
                {
                    "name": "Georg Ohm",
                    "year": "1827",
                    "contribution": "Loi d'Ohm",
                    "context": "Relation fondamentale entre tension, courant et résistance"
                },
                {
                    "name": "Gustav Kirchhoff",
                    "year": "1845",
                    "contribution": "Lois des circuits",
                    "context": "Généralisation de la conservation de la charge et de l'énergie"
                }
            ]
        },
        "code": "from sympy import symbols, solve, I\nR, L, C, omega = symbols('R L C omega', real=True)\n# Impédance RLC série\nZ = R + I*omega*L + 1/(I*omega*C)\n# Fréquence de résonance (partie imaginaire nulle)\nsolve(Z.as_real_imag()[1], omega)",
        "output": "[1/sqrt(L*C), -1/sqrt(L*C)]",
        "exercises": [
            "Calculer le courant dans un pont de Wheatstone",
            "Filtre passe-bas RC",
            "Puissance active et réactive"
        ],
        "practicalApplication": "Électronique, distribution d'énergie, télécommunications, informatique."
    },
    {
        "id": "day_041",
        "dayNumber": 41,
        "title": "Séries de Fourier",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Séries de Fourier",
        "africanAnalogy": "Une série de Fourier est comme décomposer un plat complexe en ses ingrédients de base. N'importe quel son, aussi complexe soit-il, est juste une somme de notes pures (sinusoïdes). C'est l'ADN des ondes.",
        "theory": {
            "title": "Analyse Harmonique",
            "content": "Toute fonction périodique peut s'écrire comme une somme infinie de sinus et cosinus. C'est la base du traitement du signal (MP3, JPEG, 4G).",
            "mathematicalFoundation": "\n                    - f(t) = a₀ + Σ (aₙ cos(nωt) + bₙ sin(nωt))\n                - Coefficients : aₙ = (2/T) ∫ f(t)cos(nωt)dt\n                - Spectre de fréquence\n                - Théorème de Parseval (conservation de l'énergie)\n                ",
            "scientists": [
                {
                    "name": "Joseph Fourier",
                    "year": "1822",
                    "contribution": "Théorie analytique de la chaleur",
                    "context": "Invente cet outil pour résoudre l'équation de la chaleur"
                },
                {
                    "name": "Jean le Rond d'Alembert",
                    "year": "1747",
                    "contribution": "Équation des ondes",
                    "context": "Prépare le terrain pour l'analyse des vibrations"
                }
            ]
        },
        "code": "from sympy import fourier_series, pi, symbols, plot\nx = symbols('x')\n# Série de Fourier d'un signal carré\ns = fourier_series(x, (x, -pi, pi))\n# Afficher les 3 premiers termes\ns.truncate(3)",
        "output": "2*sin(x) - sin(2*x) + 2*sin(3*x)/3",
        "exercises": [
            "Calculer la série de Fourier d'une dent de scie",
            "Visualiser la convergence (phénomène de Gibbs)",
            "Calculer l'énergie du signal"
        ],
        "practicalApplication": "Compression audio/image, télécommunications, IRM, analyse des vibrations."
    },
    {
        "id": "day_042",
        "dayNumber": 42,
        "title": "Transformée de Laplace",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Transformée de Laplace",
        "africanAnalogy": "La transformée de Laplace est une machine à traduire. Elle transforme des problèmes difficiles de calcul (équations différentielles) en problèmes faciles d'algèbre. On résout dans le monde facile, puis on re-traduit vers le monde réel.",
        "theory": {
            "title": "Calcul Opérationnel",
            "content": "Transforme une fonction du temps f(t) en une fonction complexe F(s). Essentiel pour l'analyse des systèmes et l'automatique.",
            "mathematicalFoundation": "\n                    - L{f(t)} = ∫₀^∞ f(t)e^(-st)dt\n                - L{f'} = sF(s) - f(0)\n                - L{f''} = s²F(s) - sf(0) - f'(0)\n                - Théorème de la valeur finale\n                - Convolution : L{f*g} = F(s)G(s)\n                ",
            "scientists": [
                {
                    "name": "Pierre-Simon de Laplace",
                    "year": "1785",
                    "contribution": "Théorie analytique des probabilités",
                    "context": "Le 'Newton français', développe cet outil puissant"
                },
                {
                    "name": "Oliver Heaviside",
                    "year": "1880",
                    "contribution": "Calcul opérationnel",
                    "context": "Ingénieur autodidacte, applique Laplace à l'électricité"
                }
            ]
        },
        "code": "from sympy import laplace_transform, inverse_laplace_transform, symbols, exp, sin\nt, s, a = symbols('t s a')\n# Transformée de sin(at)\nL = laplace_transform(sin(a*t), t, s)\nprint(f'L{{sin(at)}} = {L[0]}')",
        "output": "L{sin(at)} = a/(a**2 + s**2)",
        "exercises": [
            "Résoudre y'' + y = 0 avec Laplace",
            "Trouver la transformée inverse de 1/(s+1)^2",
            "Fonction de transfert d'un circuit RC"
        ],
        "practicalApplication": "Automatique (régulateurs PID), circuits électriques, mécanique (amortisseurs)."
    },
    {
        "id": "day_043",
        "dayNumber": 43,
        "title": "Équations Différentielles Partielles",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Équations Différentielles Partielles",
        "africanAnalogy": "Une EDP décrit comment quelque chose change dans l'espace et le temps simultanément. Comme la chaleur qui se diffuse dans une barre de métal ou une vague qui se propage sur l'eau. C'est la symphonie de l'univers continu.",
        "theory": {
            "title": "Physique Mathématique",
            "content": "Les EDP modélisent la plupart des phénomènes physiques. La méthode de séparation des variables est une technique classique de résolution.",
            "mathematicalFoundation": "\n                    - Équation de la chaleur : ∂u/∂t = α∇²u\n                - Équation des ondes : ∂²u/∂t² = c²∇²u\n                - Équation de Laplace : ∇²u = 0\n                - Conditions aux limites (Dirichlet, Neumann)\n                - Séparation des variables : u(x,t) = X(x)T(t)\n                ",
            "scientists": [
                {
                    "name": "Joseph Fourier",
                    "year": "1807",
                    "contribution": "Propagation de la chaleur",
                    "context": "Fonde la thermodynamique théorique"
                },
                {
                    "name": "Bernhard Riemann",
                    "year": "1860",
                    "contribution": "Ondes de choc",
                    "context": "Travaux sur la dynamique des fluides"
                }
            ]
        },
        "code": "from sympy import Function, pde_separate, Eq, symbols\nx, t, c = symbols('x t c')\nu = Function('u')(x, t)\n# Équation des ondes 1D\neq = Eq(u.diff(t, 2), c**2 * u.diff(x, 2))\n# Séparation des variables u(x,t) = X(x)T(t)\npde_separate(eq, u, [Function('X')(x), Function('T')(t)])",
        "output": "[X''(x)/X(x), T''(t)/(c**2*T(t))]",
        "exercises": [
            "Résoudre l'équation de la chaleur 1D",
            "Vérifier si f(x-ct) est solution de l'équation d'onde",
            "Équation de Laplace en coordonnées polaires"
        ],
        "practicalApplication": "Météorologie, acoustique, finance (Black-Scholes), imagerie médicale."
    },
    {
        "id": "day_044",
        "dayNumber": 44,
        "title": "Calcul Vectoriel",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Calcul Vectoriel",
        "africanAnalogy": "Le calcul vectoriel est la langue des champs invisibles. Le gradient dit où ça monte le plus vite. La divergence dit où ça sort (source). Le rotationnel dit où ça tourne (tourbillon). C'est la carte météo des forces.",
        "theory": {
            "title": "Opérateurs Différentiels",
            "content": "Gradient, Divergence et Rotationnel sont les outils pour analyser les champs scalaires et vectoriels. Essentiel pour l'électromagnétisme et la mécanique des fluides.",
            "mathematicalFoundation": "\n                    - Nabla : ∇ = (∂/∂x, ∂/∂y, ∂/∂z)\n                - Gradient : ∇f (vecteur pente)\n                - Divergence : ∇·F (flux sortant)\n                - Rotationnel : ∇×F (tendance à tourner)\n                - Théorèmes : Green, Stokes, Ostrogradsky\n                ",
            "scientists": [
                {
                    "name": "James Clerk Maxwell",
                    "year": "1865",
                    "contribution": "Équations de Maxwell",
                    "context": "Unifie électricité et magnétisme avec ces opérateurs"
                },
                {
                    "name": "Josiah Willard Gibbs",
                    "year": "1880",
                    "contribution": "Notation vectorielle moderne",
                    "context": "Simplifie grandement les mathématiques de la physique"
                }
            ]
        },
        "code": "from sympy.vector import CoordSys3D, Del\nC = CoordSys3D('C')\ndelop = Del()\n# Champ scalaire f = x^2 + y^2\nf = C.x**2 + C.y**2\n# Gradient\ndelop(f)",
        "output": "2*C.x*C.i + 2*C.y*C.j",
        "exercises": [
            "Calculer la divergence d'un champ radial",
            "Calculer le rotationnel d'un tourbillon",
            "Vérifier div(rot F) = 0"
        ],
        "practicalApplication": "Électromagnétisme, météo (vents), écoulement de fluides, infographie 3D."
    },
    {
        "id": "day_045",
        "dayNumber": 45,
        "title": "Physique Q : Schrödinger",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Physique Q : Schrödinger",
        "africanAnalogy": "En quantique, une particule n'est pas un point, c'est un nuage de probabilité. L'équation de Schrödinger décrit comment ce nuage danse et change de forme. On ne sait pas où est la particule, seulement où elle pourrait être.",
        "theory": {
            "title": "Mécanique Ondulatoire",
            "content": "L'équation de Schrödinger est l'équivalent quantique de F=ma. Elle décrit l'évolution de la fonction d'onde Ψ dont le module au carré donne la probabilité de présence.",
            "mathematicalFoundation": "\n                    - iħ ∂Ψ/∂t = ĤΨ (Équation dépendante du temps)\n                - ĤΨ = EΨ (Équation indépendante du temps)\n                - Opérateur Hamiltonien : Ĥ = -ħ²/2m ∇² + V\n                - Normalisation : ∫|Ψ|²dV = 1\n                - Quantification de l'énergie\n                ",
            "scientists": [
                {
                    "name": "Erwin Schrödinger",
                    "year": "1926",
                    "contribution": "Équation de Schrödinger",
                    "context": "Prix Nobel, formule la mécanique ondulatoire"
                },
                {
                    "name": "Max Born",
                    "year": "1926",
                    "contribution": "Interprétation probabiliste",
                    "context": "Donne le sens physique à la fonction d'onde"
                }
            ]
        },
        "code": "from sympy import symbols, Function, Eq, dsolve, hbar, m\nx, E = symbols('x E')\npsi = Function('psi')(x)\n# Équation de Schrödinger 1D particule libre (V=0)\neq = Eq(-hbar**2 / (2*m) * psi.diff(x, 2), E * psi)\ndsolve(eq, psi)",
        "output": "C1*exp(-i*x*sqrt(2mE)/hbar) + ...",
        "exercises": [
            "Particule dans une boîte 1D",
            "Normaliser une fonction d'onde",
            "Calculer la probabilité de présence"
        ],
        "practicalApplication": "Chimie quantique, semi-conducteurs, lasers, nanotechnologies."
    },
    {
        "id": "day_046",
        "dayNumber": 46,
        "title": "Physique Q : Heisenberg",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Physique Q : Heisenberg",
        "africanAnalogy": "Le principe d'incertitude est comme essayer de prendre une photo nette d'une voiture de course. Si la photo est nette (position précise), on ne voit pas sa vitesse (flou de mouvement). Si on voit le flou (vitesse), on ne sait pas où elle est exactement.",
        "theory": {
            "title": "Incertitude Quantique",
            "content": "Il est impossible de connaître simultanément avec une précision infinie la position et la quantité de mouvement d'une particule. Ce n'est pas une limite technologique, mais fondamentale.",
            "mathematicalFoundation": "\n                    - Δx · Δp ≥ ħ/2\n                - ΔE · Δt ≥ ħ/2\n                - Commutateur : [x, p] = iħ\n                - Opérateurs non-commutatifs\n                - Paquet d'ondes gaussien (état d'incertitude minimale)\n                ",
            "scientists": [
                {
                    "name": "Werner Heisenberg",
                    "year": "1927",
                    "contribution": "Principe d'incertitude",
                    "context": "Fonde la mécanique matricielle"
                },
                {
                    "name": "Niels Bohr",
                    "year": "1927",
                    "contribution": "Principe de complémentarité",
                    "context": "Onde et corpuscule sont deux aspects complémentaires"
                }
            ]
        },
        "code": "from sympy.physics.quantum import Commutator, Operator\nfrom sympy import I, hbar\nX = Operator('X')\nP = Operator('P')\n# Commutateur canonique\nCommutator(X, P).doit()",
        "output": "I*hbar",
        "exercises": [
            "Calculer l'incertitude minimale pour un électron",
            "Lien avec la transformée de Fourier",
            "Incertitude énergie-temps pour une particule instable"
        ],
        "practicalApplication": "Microscopes électroniques, stabilité de la matière, vide quantique."
    },
    {
        "id": "day_047",
        "dayNumber": 47,
        "title": "Physique Q : Puits",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Physique Q : Puits",
        "africanAnalogy": "Une particule dans un puits est comme une corde de guitare attachée aux deux bouts. Elle ne peut vibrer qu'à certaines fréquences précises. De même, l'énergie de la particule est 'quantifiée' : elle ne peut prendre que certaines valeurs, comme les barreaux d'une échelle.",
        "theory": {
            "title": "Puits de Potentiel Infini",
            "content": "Modèle simple mais fondamental montrant la quantification de l'énergie. La particule est confinée dans une région de l'espace.",
            "mathematicalFoundation": "\n                    - V(x) = 0 pour 0 < x < L, ∞ ailleurs\n                - Conditions aux limites : Ψ(0) = Ψ(L) = 0\n                - Solutions : Ψₙ(x) = √(2/L) sin(nπx/L)\n                - Énergies : Eₙ = n²h² / (8mL²)\n                - Niveau fondamental E₁ > 0 (énergie de point zéro)\n                ",
            "scientists": [
                {
                    "name": "Louis de Broglie",
                    "year": "1924",
                    "contribution": "Dualité onde-corpuscule",
                    "context": "Hypothèse que toute matière a une longueur d'onde"
                },
                {
                    "name": "Wolfgang Pauli",
                    "year": "1925",
                    "contribution": "Principe d'exclusion",
                    "context": "Explique la structure des atomes"
                }
            ]
        },
        "code": "from sympy import sin, pi, sqrt, integrate, symbols\nn, x, L = symbols('n x L', positive=True, integer=True)\n# Fonction d'onde normalisée\npsi = sqrt(2/L) * sin(n*pi*x/L)\n# Vérifier la normalisation\nintegrate(psi**2, (x, 0, L))",
        "output": "1",
        "exercises": [
            "Calculer la différence d'énergie E2 - E1",
            "Probabilité de trouver la particule au centre",
            "Puits de potentiel fini (effet tunnel)"
        ],
        "practicalApplication": "Points quantiques (QLED), puits quantiques (lasers), nanostructures."
    },
    {
        "id": "day_048",
        "dayNumber": 48,
        "title": "Physique Q : Spin",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Physique Q : Spin",
        "africanAnalogy": "Le spin est comme si les particules tournaient sur elles-mêmes, mais c'est une rotation purement quantique sans équivalent classique. C'est comme une toupie qui ne peut pointer que vers le haut ou vers le bas, jamais entre les deux.",
        "theory": {
            "title": "Moment Cinétique Intrinsèque",
            "content": "Le spin est une propriété fondamentale des particules. Les fermions (électrons) ont un spin 1/2, les bosons (photons) un spin entier. Décrit par les matrices de Pauli.",
            "mathematicalFoundation": "\n                    - Spin 1/2 : états |↑⟩ et |↓⟩\n                - Matrices de Pauli : σx, σy, σz\n                - Algèbre des commutateurs : [σx, σy] = 2iσz\n                - Espace de Hilbert de dimension 2 (Qubit)\n                - Expérience de Stern-Gerlach\n                ",
            "scientists": [
                {
                    "name": "Paul Dirac",
                    "year": "1928",
                    "contribution": "Équation de Dirac",
                    "context": "Unifie quantique et relativité, prédit l'antimatière et le spin"
                },
                {
                    "name": "Wolfgang Pauli",
                    "year": "1924",
                    "contribution": "Matrices de Pauli",
                    "context": "Formalisme mathématique du spin"
                }
            ]
        },
        "code": "from sympy.physics.matrices import msigma\n# Matrices de Pauli\nsigma_x = msigma(1)\nsigma_y = msigma(2)\n# Commutateur [Sx, Sy]\ncomm = sigma_x * sigma_y - sigma_y * sigma_x\nprint(comm)",
        "output": "2*I*sigma_z",
        "exercises": [
            "Vérifier σx² = I",
            "Calculer les valeurs propres de σz",
            "Représentation sur la sphère de Bloch"
        ],
        "practicalApplication": "IRM (Résonance Magnétique Nucléaire), Ordinateur quantique (Qubits), Spintronique."
    },
    {
        "id": "day_049",
        "dayNumber": 49,
        "title": "Physique Q : Oscillateur",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Physique Q : Oscillateur",
        "africanAnalogy": "L'oscillateur harmonique est le pendule de la mécanique quantique. Tout ce qui vibre (atomes, molécules, lumière) se comporte comme un oscillateur. C'est le modèle le plus important de la physique.",
        "theory": {
            "title": "Oscillateur Harmonique Quantique",
            "content": "Potentiel parabolique V(x) = 1/2 kx². Les niveaux d'énergie sont équidistants : Eₙ = ħω(n + 1/2). Utilise les opérateurs d'échelle (création/annihilation).",
            "mathematicalFoundation": "\n                    - Hamiltonien : H = p²/2m + 1/2 mω²x²\n                - Opérateurs échelle : a (annihilation), a† (création)\n                - H = ħω(a†a + 1/2)\n                - Fonctions d'onde : polynômes d'Hermite\n                - État fondamental gaussien\n                ",
            "scientists": [
                {
                    "name": "Max Planck",
                    "year": "1900",
                    "contribution": "Quanta d'énergie",
                    "context": "Résout la catastrophe ultraviolette avec E=hν"
                },
                {
                    "name": "Albert Einstein",
                    "year": "1905",
                    "contribution": "Effet photoélectrique",
                    "context": "Montre que la lumière est quantifiée (photons)"
                }
            ]
        },
        "code": "from sympy.physics.qho_1d import psi_n, E_n\nfrom sympy import symbols, m, omega, hbar\nx = symbols('x')\n# Énergie du niveau n=0 (fondamental)\nE0 = E_n(0, omega)\n# Fonction d'onde n=0\npsi0 = psi_n(0, x, m, omega)",
        "output": "E0 = hbar*omega/2",
        "exercises": [
            "Vérifier l'orthogonalité des états",
            "Calculer <x> et <p> dans l'état fondamental",
            "Principe de correspondance (n grand)"
        ],
        "practicalApplication": "Spectroscopie moléculaire, théorie quantique des champs, phonons."
    },
    {
        "id": "day_050",
        "dayNumber": 50,
        "title": "PROJET : Téléportation Quantique",
        "difficulty": "Intermédiaire",
        "masteryLevel": "Validé",
        "unlocked": true,
        "xpReward": 150,
        "badge": "⚛️ Ingénieur Quantique",
        "africanAnalogy": "Comme le message du tam-tam qui est entendu instantanément au village voisin, l'intrication quantique relie deux points distants. Ce projet consiste à construire le protocole complet de téléportation.",
        "theory": {
            "title": "Intrication et Paradoxe EPR",
            "content": "Deux particules intriquées ne peuvent être décrites séparément. L'état est global. La mesure de l'une fixe instantanément l'état de l'autre.",
            "mathematicalFoundation": "\n                    - État de Bell : |Φ⁺⟩ = (|00⟩ + |11⟩)/√2\n                - Non-localité\n                - Inégalités de Bell : testent le réalisme local\n                - Matrice densité\n                - Téléportation quantique\n                ",
            "scientists": [
                {
                    "name": "Einstein, Podolsky, Rosen",
                    "year": "1935",
                    "contribution": "Paradoxe EPR",
                    "context": "Questionnent la complétude de la mécanique quantique"
                },
                {
                    "name": "John Bell",
                    "year": "1964",
                    "contribution": "Inégalités de Bell",
                    "context": "Prouve qu'on peut tester expérimentalement le débat EPR"
                },
                {
                    "name": "Alain Aspect",
                    "year": "1982",
                    "contribution": "Expérience d'Aspect",
                    "context": "Prix Nobel 2022, confirme la mécanique quantique"
                }
            ]
        },
        "code": "from sympy.physics.quantum.qubit import Qubit\nfrom sympy.physics.quantum.gate import H, CNOT\n# Création d'un état de Bell (intriqué)\n# |00> -> H -> (|00>+|10>)/sqrt(2) -> CNOT -> (|00>+|11>)/sqrt(2)\nq = Qubit('00')\ncircuit = CNOT(0, 1) * H(0)\nstate = circuit * q",
        "output": "sqrt(2)*|00>/2 + sqrt(2)*|11>/2",
        "exercises": [
            "Démontrer la violation des inégalités de Bell",
            "Protocole de téléportation quantique",
            "Cryptographie quantique (E91)"
        ],
        "practicalApplication": "Ordinateur quantique, cryptographie inviolable, internet quantique."
    },
    {
        "id": "day_051",
        "dayNumber": 51,
        "title": "Relativité : Temps",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Relativité : Temps",
        "africanAnalogy": "Le temps n'est pas une rivière qui coule partout à la même vitesse. C'est comme le rythme d'un tam-tam : si tu t'éloignes très vite, le son te parvient au ralenti. Pour celui qui voyage à la vitesse de la lumière, le temps s'arrête.",
        "theory": {
            "title": "Relativité Restreinte",
            "content": "Le temps et l'espace sont liés. La vitesse de la lumière c est constante pour tous les observateurs, ce qui implique que le temps se dilate et les longueurs se contractent à haute vitesse.",
            "mathematicalFoundation": "\n                    - Facteur de Lorentz : γ = 1 / √(1 - v²/c²)\n                - Dilatation du temps : Δt' = γΔt\n                - Contraction des longueurs : L' = L/γ\n                - Transformation de Lorentz (x, y, z, t) -> (x', y', z', t')\n                - Invariant d'intervalle : ds² = c²dt² - dx² - dy² - dz²\n                ",
            "scientists": [
                {
                    "name": "Albert Einstein",
                    "year": "1905",
                    "contribution": "Relativité Restreinte",
                    "context": "Annus Mirabilis, révolutionne la physique"
                },
                {
                    "name": "Hendrik Lorentz",
                    "year": "1904",
                    "contribution": "Transformations de Lorentz",
                    "context": "Précurseur mathématique de la relativité"
                }
            ]
        },
        "code": "from sympy import symbols, sqrt, simplify\nv, c, t = symbols('v c t', positive=True)\n# Facteur de Lorentz\ngamma = 1 / sqrt(1 - v**2/c**2)\n# Temps propre vs Temps mesuré\nt_mesure = gamma * t\nprint(f'Facteur gamma pour v=0.9c : {gamma.subs(v, 0.9*c)}')",
        "output": "2.294",
        "exercises": [
            "Calculer le temps vécu par un astronaute (Paradoxe des jumeaux)",
            "Contraction d'un vaisseau spatial",
            "Addition des vitesses relativistes"
        ],
        "practicalApplication": "GPS (correction relativiste nécessaire), accélérateurs de particules, physique nucléaire."
    },
    {
        "id": "day_052",
        "dayNumber": 52,
        "title": "Relativité : E=mc²",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Relativité : E=mc²",
        "africanAnalogy": "La matière est de l'énergie condensée, comme la glace est de l'eau figée. Un petit caillou contient assez d'énergie pour alimenter une ville, si on savait la libérer. C'est le secret du Soleil.",
        "theory": {
            "title": "Équivalence Masse-Énergie",
            "content": "La masse est une forme d'énergie. E=mc² signifie qu'une petite quantité de masse peut se transformer en une énorme quantité d'énergie (et inversement).",
            "mathematicalFoundation": "\n                    - Énergie au repos : E₀ = mc²\n                - Énergie totale : E = γmc²\n                - Impulsion : p = γmv\n                - Relation énergie-impulsion : E² = (pc)² + (mc²)²\n                - Masse invariante\n                ",
            "scientists": [
                {
                    "name": "Albert Einstein",
                    "year": "1905",
                    "contribution": "E=mc²",
                    "context": "Conséquence de la relativité restreinte"
                },
                {
                    "name": "Lise Meitner",
                    "year": "1938",
                    "contribution": "Fission nucléaire",
                    "context": "Explique la perte de masse par la libération d'énergie"
                }
            ]
        },
        "code": "from sympy import symbols, sqrt, solve, Eq\nE, m, p, c = symbols('E m p c', positive=True)\n# Relation complète E^2 = p^2c^2 + m^2c^4\n# Trouver la masse si on connait E et p (physique des particules)\neq = Eq(E**2, (p*c)**2 + (m*c**2)**2)\nsolve(eq, m)",
        "output": "[sqrt(E**2 - c**2*p**2)/c**2]",
        "exercises": [
            "Calculer l'énergie libérée par 1g de matière",
            "Défaut de masse dans une réaction nucléaire",
            "Énergie cinétique relativiste (E - mc²)"
        ],
        "practicalApplication": "Centrales nucléaires, médecine (PET scan), astrophysique (étoiles)."
    },
    {
        "id": "day_053",
        "dayNumber": 53,
        "title": "Formes Différentielles",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Formes Différentielles",
        "africanAnalogy": "Une forme différentielle est comme une règle pour mesurer des surfaces courbes. Sur une sphère, mesurer une aire n'est pas comme sur un plan. Les formes différentielles généralisent l'intégration à des espaces courbes.",
        "theory": {
            "title": "Géométrie Différentielle",
            "content": "Les formes différentielles généralisent les intégrales de ligne et de surface. Essentielles en physique théorique (électromagnétisme, relativité).",
            "mathematicalFoundation": "\n                - 0-forme : fonction scalaire f\n                - 1-forme : ω = f dx + g dy\n                - 2-forme : ω = f dx∧dy\n                - Produit extérieur (wedge) : dx∧dy = -dy∧dx\n                - Dérivée extérieure : d(f dx) = df∧dx\n            ",
            "scientists": [
                {
                    "name": "Élie Cartan",
                    "year": "1899",
                    "contribution": "Calcul différentiel extérieur",
                    "context": "Unifie calcul vectoriel et tensoriel"
                },
                {
                    "name": "Georges de Rham",
                    "year": "1931",
                    "contribution": "Théorème de de Rham",
                    "context": "Lie topologie et analyse"
                }
            ]
        },
        "code": "from sympy import symbols, diff, Function\nfrom sympy.diffgeom import Manifold, Patch, CoordSystem\nM = Manifold('M', 2)\npatch = Patch('P', M)\nx, y = symbols('x y', real=True)\nrect = CoordSystem('rect', patch, [x, y])\n# 1-forme omega = x*dx + y*dy\n# Dérivée extérieure d(omega) = dx∧dy",
        "output": "d(omega) = dx∧dy",
        "exercises": [
            "Calculer d(f dx) pour f=x²y",
            "Vérifier que d(d(f)) = 0",
            "Intégrale de ligne d'une 1-forme"
        ],
        "practicalApplication": "Électromagnétisme (équations de Maxwell), relativité générale, mécanique analytique."
    },
    {
        "id": "day_054",
        "dayNumber": 54,
        "title": "Géodésiques",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Géodésiques",
        "africanAnalogy": "Dans un espace courbe, la ligne droite n'existe pas. Le chemin le plus court est une courbe, comme la trajectoire d'un avion sur Terre. La lumière suit ces 'lignes droites courbes' (géodésiques), c'est pourquoi la gravité dévie la lumière.",
        "theory": {
            "title": "Mouvement en Espace Courbe",
            "content": "Les objets en chute libre suivent les géodésiques de l'espace-temps. Cela explique les orbites et la déviation de la lumière par les étoiles.",
            "mathematicalFoundation": "\n                    - Équation des géodésiques\n                - Symboles de Christoffel : Γ^λ_μν\n                - Déviation de la lumière (Lentille gravitationnelle)\n                - Avance du périhélie de Mercure\n                - Redshift gravitationnel\n                ",
            "scientists": [
                {
                    "name": "Arthur Eddington",
                    "year": "1919",
                    "contribution": "Confirmation expérimentale",
                    "context": "Observe la déviation de la lumière lors d'une éclipse"
                },
                {
                    "name": "Bernhard Riemann",
                    "year": "1854",
                    "contribution": "Géométrie Riemannienne",
                    "context": "Mathématiques des espaces courbes"
                }
            ]
        },
        "code": "from sympy import symbols, Function, dsolve, Derivative\n# Équation simplifiée d'une géodésique\nt = symbols('t')\nx = Function('x')(t)\n# x'' + Gamma * (x')^2 = 0\nGamma = symbols('Gamma')\neq = x.diff(t, 2) + Gamma * x.diff(t)**2\ndsolve(eq, x)",
        "output": "C1 + log(C2*t + 1)/Gamma",
        "exercises": [
            "Calculer la déviation de la lumière par le Soleil",
            "Expliquer l'avance du périhélie de Mercure",
            "Trajectoire d'un photon autour d'un trou noir"
        ],
        "practicalApplication": "Astronomie, cosmologie, navigation spatiale de précision."
    },
    {
        "id": "day_055",
        "dayNumber": 55,
        "title": "Lois de Kepler",
        "difficulty": "Avancé",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Lois de Kepler",
        "africanAnalogy": "Les planètes ne dansent pas n'importe comment. Elles suivent une valse précise en ellipse autour du Soleil. Plus elles sont proches, plus elles vont vite, comme un patineur qui replie ses bras.",
        "theory": {
            "title": "Mécanique Céleste",
            "content": "Les trois lois de Kepler décrivent le mouvement des planètes. Newton a montré qu'elles découlent de la force gravitationnelle en 1/r².",
            "mathematicalFoundation": "\n                    - 1ère loi : Orbites elliptiques (Soleil au foyer)\n                - 2ème loi : Loi des aires (dA/dt = constante)\n                - 3ème loi : T²/a³ = constante\n                - Excentricité e, Demi-grand axe a\n                - Vitesse orbitale\n                ",
            "scientists": [
                {
                    "name": "Johannes Kepler",
                    "year": "1609",
                    "contribution": "Lois du mouvement planétaire",
                    "context": "Analyse les données précises de Tycho Brahe"
                },
                {
                    "name": "Isaac Newton",
                    "year": "1687",
                    "contribution": "Gravitation universelle",
                    "context": "Unifie la pomme et la Lune"
                }
            ]
        },
        "code": "from sympy import symbols, pi, solve, Eq\nT, a, G, M = symbols('T a G M')\n# 3ème loi de Kepler : T^2 / a^3 = 4*pi^2 / (GM)\neq = Eq(T**2 / a**3, 4*pi**2 / (G*M))\n# Calculer la période T\nsolve(eq, T)",
        "output": "[-2*pi*a**(3/2)/sqrt(G*M), 2*pi*a**(3/2)/sqrt(G*M)]",
        "exercises": [
            "Calculer la période de Mars",
            "Vitesse de la Terre à l'aphélie vs périhélie",
            "Masse du Soleil à partir de l'orbite terrestre"
        ],
        "practicalApplication": "Lancement de satellites, missions interplanétaires, exoplanètes."
    },
    {
        "id": "day_056",
        "dayNumber": 56,
        "title": "Étoiles : HR",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Étoiles : HR",
        "africanAnalogy": "Les étoiles ont une vie. Elles naissent, brillent et meurent. Le diagramme HR est leur album photo de famille, classant les étoiles par couleur (température) et luminosité. Il raconte leur destin.",
        "theory": {
            "title": "Physique Stellaire",
            "content": "Le diagramme Hertzsprung-Russell (HR) est l'outil central de l'astrophysique stellaire. Il montre la Séquence Principale, les Géantes Rouges et les Naines Blanches.",
            "mathematicalFoundation": "\n                    - Luminosité : L = 4πR²σT⁴ (Stefan-Boltzmann)\n                - Magnitude absolue vs apparente\n                - Classification spectrale (O B A F G K M)\n                - Fusion nucléaire (cycle pp, CNO)\n                - Équilibre hydrostatique\n                ",
            "scientists": [
                {
                    "name": "Ejnar Hertzsprung & Henry Norris Russell",
                    "year": "1910",
                    "contribution": "Diagramme HR",
                    "context": "Découverte indépendante de la relation couleur-luminosité"
                },
                {
                    "name": "Cecilia Payne",
                    "year": "1925",
                    "contribution": "Composition des étoiles",
                    "context": "Montre que les étoiles sont surtout de l'hydrogène"
                }
            ]
        },
        "code": "from sympy import symbols, solve, Eq\nL, R, T, sigma = symbols('L R T sigma')\n# Loi de Stefan-Boltzmann\neq = Eq(L, 4*pi*R**2 * sigma * T**4)\n# Trouver le rayon R connaissant L et T\nsolve(eq, R)",
        "output": "[-sqrt(L)/(2*sqrt(pi)*sqrt(sigma)*T**2), ...]",
        "exercises": [
            "Calculer le rayon de Bételgeuse",
            "Estimer la durée de vie du Soleil",
            "Classer une étoile donnée (G2V)"
        ],
        "practicalApplication": "Étude de l'évolution stellaire, distance des étoiles, recherche de vie."
    },
    {
        "id": "day_057",
        "dayNumber": 57,
        "title": "Cosmologie : Hubble",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Cosmologie : Hubble",
        "africanAnalogy": "L'univers est comme un ballon qui gonfle. Les galaxies sont des points sur le ballon. Plus elles sont loin, plus elles s'éloignent vite, non pas parce qu'elles bougent, mais parce que l'espace entre elles grandit.",
        "theory": {
            "title": "Expansion de l'Univers",
            "content": "La loi de Hubble-Lemaître relie la distance des galaxies à leur vitesse de récession. C'est la première preuve du Big Bang.",
            "mathematicalFoundation": "\n                    - Loi de Hubble : v = H₀d\n                - Constante de Hubble H₀\n                - Redshift (décalage vers le rouge) : z = Δλ/λ\n                - v ≈ cz (pour v << c)\n                - Âge de l'univers ≈ 1/H₀\n                ",
            "scientists": [
                {
                    "name": "Edwin Hubble",
                    "year": "1929",
                    "contribution": "Loi de Hubble",
                    "context": "Observe que les galaxies s'éloignent"
                },
                {
                    "name": "Georges Lemaître",
                    "year": "1927",
                    "contribution": "Atome primitif (Big Bang)",
                    "context": "Prêtre et physicien, prédit l'expansion avant Hubble"
                }
            ]
        },
        "code": "from sympy import symbols, units\nv, H0, d = symbols('v H0 d')\n# Loi de Hubble\n# H0 approx 70 km/s/Mpc\nval_H0 = 70 # km/s/Mpc\ndist = 100 # Mpc\nvitesse = val_H0 * dist\nprint(f'Vitesse de récession : {vitesse} km/s')",
        "output": "Vitesse de récession : 7000 km/s",
        "exercises": [
            "Calculer l'âge approximatif de l'univers",
            "Distance d'une galaxie avec z=0.1",
            "Horizon cosmologique"
        ],
        "practicalApplication": "Cosmologie, destin de l'univers, énergie noire."
    },
    {
        "id": "day_058",
        "dayNumber": 58,
        "title": "Cosmologie : Big Bang",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Cosmologie : Big Bang",
        "africanAnalogy": "Les équations de Friedmann sont le mode d'emploi de l'univers. Elles disent comment l'univers évolue en fonction de ce qu'il contient (matière, rayonnement, énergie noire). Elles prédisent si l'univers finira en glace (expansion infinie) ou en feu (Big Crunch).",
        "theory": {
            "title": "Équations de Friedmann",
            "content": "Dérivées de la Relativité Générale, elles décrivent l'évolution du facteur d'échelle a(t) de l'univers.",
            "mathematicalFoundation": "\n                    - Métrique FLRW (Friedmann-Lemaître-Robertson-Walker)\n                - Facteur d'échelle a(t)\n                - (ȧ/a)² = 8πGρ/3 - kc²/a² + Λc²/3\n                - Densité critique ρc\n                - Paramètres de densité Ω\n                ",
            "scientists": [
                {
                    "name": "Alexander Friedmann",
                    "year": "1922",
                    "contribution": "Solutions dynamiques de la RG",
                    "context": "Montre que l'univers ne peut pas être statique"
                },
                {
                    "name": "Arno Penzias & Robert Wilson",
                    "year": "1965",
                    "contribution": "Fond diffus cosmologique (CMB)",
                    "context": "Preuve observationnelle majeure du Big Bang"
                }
            ]
        },
        "code": "from sympy import symbols, Function, dsolve, Eq\na = Function('a')\nt, k, rho = symbols('t k rho')\n# Équation simplifiée (univers plat k=0, dominé matière)\n# (a'/a)^2 ~ 1/a^3  => a' ~ a^(-1/2)\neq = Eq(a(t).diff(t), t**(-1/2)) # Simplification conceptuelle\n# La vraie solution est a(t) ~ t^(2/3)",
        "output": "Modèle d'univers en expansion",
        "exercises": [
            "Évolution dans un univers dominé par le rayonnement",
            "Rôle de la constante cosmologique Λ",
            "Destin de l'univers selon Ω"
        ],
        "practicalApplication": "Modèle standard de la cosmologie, simulation de l'univers."
    },
    {
        "id": "day_059",
        "dayNumber": 59,
        "title": "Problème de Kepler",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Problème de Kepler",
        "africanAnalogy": "Le problème à 2 corps (Soleil-Terre) a une solution exacte et élégante. C'est comme une danse parfaitement chorégraphiée. Avec 3 corps (Soleil-Terre-Lune), la danse devient chaotique et imprévisible.",
        "theory": {
            "title": "Mécanique Céleste Analytique",
            "content": "Le problème à 2 corps sous gravitation newtonienne est complètement intégrable. Les orbites sont des coniques (ellipses, paraboles, hyperboles).",
            "mathematicalFoundation": "\n                - Force : F = -GMm/r²\n                - Énergie : E = 1/2 mv² - GMm/r\n                - Moment cinétique : L = r × mv (conservé)\n                - Équation de l'orbite : r(θ) = p/(1 + e cos θ)\n                - Excentricité e détermine le type de conique\n            ",
            "scientists": [
                {
                    "name": "Johannes Kepler",
                    "year": "1609",
                    "contribution": "Lois empiriques",
                    "context": "Orbites elliptiques"
                },
                {
                    "name": "Isaac Newton",
                    "year": "1687",
                    "contribution": "Dérivation théorique",
                    "context": "Montre que F=1/r² implique les lois de Kepler"
                }
            ]
        },
        "code": "from sympy import symbols, solve, sqrt, Eq\nG, M, m, r, v, E = symbols('G M m r v E')\n# Énergie totale\nE_eq = Eq(E, m*v**2/2 - G*M*m/r)\n# Vitesse de libération (E=0)\nv_lib = solve(E_eq.subs(E, 0), v)[1]\nprint(f'v_libération = {v_lib}')",
        "output": "sqrt(2*G*M/r)",
        "exercises": [
            "Calculer la période orbitale T(a)",
            "Relation énergie-excentricité",
            "Vitesse à l'aphélie vs périhélie"
        ],
        "practicalApplication": "Missions spatiales, satellites, astéroïdes, exoplanètes."
    },
    {
        "id": "day_060",
        "dayNumber": 60,
        "title": "Trous Noirs : Hawking",
        "difficulty": "Avancé",
        "masteryLevel": "Maître",
        "unlocked": true,
        "xpReward": 100,
        "badge": "🏅 Trous Noirs : Hawking",
        "africanAnalogy": "Les trous noirs ne sont pas si noirs. À cause de la mécanique quantique, ils 's'évaporent' lentement en émettant une faible lueur. C'est le chant du cygne d'un monstre cosmique qui finit par disparaître.",
        "theory": {
            "title": "Rayonnement de Hawking",
            "content": "Stephen Hawking a montré que les effets quantiques près de l'horizon des événements créent un rayonnement thermique. Les trous noirs perdent de la masse et finissent par s'évaporer.",
            "mathematicalFoundation": "\n                    - Température de Hawking : T = ħc³ / (8πGMk)\n                - Entropie de Bekenstein-Hawking : S = A / (4Lp²)\n                - Évaporation : dM/dt ∝ -1/M²\n                - Durée de vie : t ∝ M³\n                - Paradoxe de l'information\n                ",
            "scientists": [
                {
                    "name": "Stephen Hawking",
                    "year": "1974",
                    "contribution": "Rayonnement des trous noirs",
                    "context": "Unit thermodynamique, quantique et gravité"
                },
                {
                    "name": "Jacob Bekenstein",
                    "year": "1973",
                    "contribution": "Entropie des trous noirs",
                    "context": "Suggère que l'entropie est proportionnelle à la surface"
                }
            ]
        },
        "code": "from sympy import symbols, pi, hbar, c, G, k\nM = symbols('M')\n# Température de Hawking\nT = hbar * c**3 / (8 * pi * G * M * k)\nprint(f'Température inversement proportionnelle à la masse')",
        "output": "T ~ 1/M",
        "exercises": [
            "Calculer la température d'un trou noir solaire",
            "Durée de vie d'un micro trou noir",
            "Lien avec l'entropie"
        ],
        "practicalApplication": "Gravité quantique, thermodynamique des trous noirs, cosmologie primordiale."
    },
    {
        "id": "day_061",
        "dayNumber": 61,
        "title": "Régression Linéaire",
        "difficulty": "Avancé",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Régression Linéaire",
        "africanAnalogy": "La régression linéaire est comme tracer un chemin à travers une forêt d'arbres dispersés. On cherche la ligne droite qui passe au plus près de tous les arbres, minimisant la distance totale. C'est l'art de trouver la tendance cachée.",
        "theory": {
            "title": "Apprentissage Supervisé",
            "content": "La régression cherche à prédire une variable continue y à partir de x. La méthode des moindres carrés minimise l'erreur quadratique moyenne.",
            "mathematicalFoundation": "\n                    - Modèle : y = ax + b + ε\n                - Fonction de coût : J(a,b) = (1/2m) Σ(h(x) - y)²\n                - Solution analytique (Équation normale) : θ = (XᵀX)⁻¹Xᵀy\n                - Descente de gradient : θ := θ - α∇J(θ)\n                - Coefficient de détermination R²\n                ",
            "scientists": [
                {
                    "name": "Adrien-Marie Legendre",
                    "year": "1805",
                    "contribution": "Méthode des moindres carrés",
                    "context": "Développée pour calculer les orbites des comètes"
                },
                {
                    "name": "Carl Friedrich Gauss",
                    "year": "1809",
                    "contribution": "Justification probabiliste",
                    "context": "Montre que c'est l'estimateur du maximum de vraisemblance"
                }
            ]
        },
        "code": "from sympy import symbols, Sum, diff, solve\na, b, i, n = symbols('a b i n')\nx, y = symbols('x y', cls=Function)\n# Minimiser la somme des carrés des erreurs\nS = Sum((a*x(i) + b - y(i))**2, (i, 1, n))\n# Dérivées partielles nulles\neq1 = diff(S, a)\neq2 = diff(S, b)\nprint('Système à résoudre pour a et b')",
        "output": "Système d'équations normales",
        "exercises": [
            "Calculer la pente et l'ordonnée à l'origine pour 3 points",
            "Prouver que la droite passe par le point moyen (x̄, ȳ)",
            "Régression multivariée (concept)"
        ],
        "practicalApplication": "Prédiction des prix immobiliers, tendances économiques, calibration de capteurs."
    },
    {
        "id": "day_062",
        "dayNumber": 62,
        "title": "Classification : Logistique",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Classification : Logistique",
        "africanAnalogy": "La classification est comme trier des fruits. Est-ce une pomme ou une orange ? La régression logistique trace une frontière floue. Près de la frontière, on hésite (50% de chance). Loin, on est sûr.",
        "theory": {
            "title": "Classification Binaire",
            "content": "Prédit une probabilité d'appartenance à une classe (0 ou 1) en utilisant la fonction sigmoïde. C'est la brique de base des réseaux de neurones.",
            "mathematicalFoundation": "\n                    - Fonction Sigmoïde : σ(z) = 1 / (1 + e⁻ᶻ)\n                - Hypothèse : h(x) = σ(θᵀx)\n                - Frontière de décision : θᵀx = 0\n                - Coût Log-Loss (Entropie croisée)\n                - Maximum de vraisemblance\n                ",
            "scientists": [
                {
                    "name": "Pierre François Verhulst",
                    "year": "1838",
                    "contribution": "Fonction logistique",
                    "context": "Initialement pour la croissance des populations"
                },
                {
                    "name": "David Cox",
                    "year": "1958",
                    "contribution": "Régression logistique",
                    "context": "Formalise le modèle pour les statistiques médicales"
                }
            ]
        },
        "code": "from sympy import exp, plot, symbols\nz = symbols('z')\n# Fonction Sigmoïde (activation)\nsigmoid = 1 / (1 + exp(-z))\n# Dérivée de la sigmoïde (utile pour le gradient)\nd_sigmoid = sigmoid.diff(z).simplify()\nprint(f'Dérivée : {d_sigmoid}')",
        "output": "exp(-z)/(1 + exp(-z))**2",
        "exercises": [
            "Montrer que σ'(z) = σ(z)(1-σ(z))",
            "Tracer la fonction de coût pour y=1",
            "Calculer la probabilité pour z=0"
        ],
        "practicalApplication": "Détection de spam, diagnostic médical, scoring de crédit."
    },
    {
        "id": "day_063",
        "dayNumber": 63,
        "title": "Réseaux de Neurones",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Réseaux de Neurones",
        "africanAnalogy": "Un réseau de neurones est comme un cerveau simplifié. Chaque neurone écoute ses voisins, vote, et transmet l'info. En ajustant la force des connexions (poids) par l'expérience, le réseau apprend à reconnaître des visages ou traduire des langues.",
        "theory": {
            "title": "Deep Learning",
            "content": "Composé de couches de neurones artificiels. L'apprentissage se fait par rétropropagation du gradient (Backpropagation) pour minimiser l'erreur.",
            "mathematicalFoundation": "\n                    - Neurone : a = f(Wx + b)\n                - Fonctions d'activation : ReLU, Tanh, Softmax\n                - Propagation avant (Forward)\n                - Rétropropagation (Backward) : Règle de la chaîne\n                - Théorème d'approximation universelle\n                ",
            "scientists": [
                {
                    "name": "Frank Rosenblatt",
                    "year": "1957",
                    "contribution": "Perceptron",
                    "context": "Premier modèle de neurone artificiel apprenant"
                },
                {
                    "name": "Geoffrey Hinton",
                    "year": "1986",
                    "contribution": "Rétropropagation",
                    "context": "Prix Turing, parrain de l'IA moderne"
                }
            ]
        },
        "code": "from sympy import symbols, diff, Function\nx, w, b, y = symbols('x w b y')\n# Perceptron simple avec perte quadratique\na = x * w + b # Activation linéaire pour simplifier\nLoss = (a - y)**2\n# Gradient pour la mise à jour du poids w\ngrad_w = diff(Loss, w)\nprint(f'Gradient dw : {grad_w}')",
        "output": "2*x*(b + w*x - y)",
        "exercises": [
            "Calculer le gradient pour une activation Sigmoïde",
            "Architecture d'un réseau pour XOR",
            "Rôle du biais b"
        ],
        "practicalApplication": "Vision par ordinateur, reconnaissance vocale, traduction automatique, jeux (AlphaGo)."
    },
    {
        "id": "day_064",
        "dayNumber": 64,
        "title": "Clustering : K-Means",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Clustering : K-Means",
        "africanAnalogy": "Le clustering, c'est comme ranger une chambre en désordre. On regroupe les objets similaires : les livres avec les livres, les jouets avec les jouets. L'algorithme trouve tout seul les catégories naturelles sans qu'on lui dise quoi chercher.",
        "theory": {
            "title": "Apprentissage Non Supervisé",
            "content": "K-Means partitionne les données en K groupes (clusters) en minimisant la distance intra-classe. C'est un algorithme itératif.",
            "mathematicalFoundation": "\n                    - Centroïde : moyenne des points du cluster\n                - Distance Euclidienne : d(x,y) = ||x-y||₂\n                - Inertie intra-classe : Σ ||x - μ_k||²\n                - Algorithme EM (Expectation-Maximization)\n                - Voronoï tessellation\n                ",
            "scientists": [
                {
                    "name": "Stuart Lloyd",
                    "year": "1957",
                    "contribution": "Algorithme K-Means",
                    "context": "Initialement pour la modulation par impulsions codées"
                },
                {
                    "name": "Hugo Steinhaus",
                    "year": "1956",
                    "contribution": "Formalisation du clustering",
                    "context": "Pionnier de l'analyse mathématique des jeux"
                }
            ]
        },
        "code": "from sympy import symbols, sqrt\nx1, y1, cx, cy = symbols('x1 y1 cx cy')\n# Distance au carré entre un point et un centroïde\ndist_sq = (x1 - cx)**2 + (y1 - cy)**2\n# Le centroïde optimal minimise cette distance (moyenne)\n# C'est un problème d'optimisation géométrique",
        "output": "Minimisation de la variance",
        "exercises": [
            "Calculer le nouveau centroïde de 3 points",
            "Pourquoi K-Means converge-t-il toujours ?",
            "Choisir le bon K (méthode du coude)"
        ],
        "practicalApplication": "Segmentation client, compression d'image, détection d'anomalies."
    },
    {
        "id": "day_065",
        "dayNumber": 65,
        "title": "PCA : Réduction Dim.",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 PCA : Réduction Dim.",
        "africanAnalogy": "La PCA (Analyse en Composantes Principales) est comme prendre une photo d'une sculpture sous son meilleur angle. On passe de la 3D à la 2D en gardant le plus d'informations possible (l'ombre la plus large). On simplifie la réalité sans la trahir.",
        "theory": {
            "title": "Algèbre Linéaire Appliquée",
            "content": "Projette les données sur les axes de plus grande variance. Utilise la décomposition en valeurs propres de la matrice de covariance.",
            "mathematicalFoundation": "\n                    - Matrice de covariance : Σ = (1/m) XᵀX\n                - Valeurs propres (λ) et Vecteurs propres (v)\n                - Variance expliquée : λ_i / Σλ_j\n                - Projection orthogonale\n                - Décorrélation des variables\n                ",
            "scientists": [
                {
                    "name": "Karl Pearson",
                    "year": "1901",
                    "contribution": "Invention de la PCA",
                    "context": "Père des statistiques modernes"
                },
                {
                    "name": "Harold Hotelling",
                    "year": "1933",
                    "contribution": "Développement théorique",
                    "context": "Popularise la méthode en économétrie"
                }
            ]
        },
        "code": "from sympy import Matrix, eye\n# Matrice de covariance exemple (2D)\nC = Matrix([[4, 2], [2, 3]])\n# Diagonalisation pour trouver les axes principaux\nP, D = C.diagonalize()\nprint(f'Valeurs propres (Variance) : {D}')",
        "output": "Matrix([[2, 0], [0, 5]])",
        "exercises": [
            "Calculer les vecteurs propres d'une matrice 2x2",
            "Pourcentage de variance expliquée",
            "Lien avec la SVD (Singular Value Decomposition)"
        ],
        "practicalApplication": "Compression de données, reconnaissance de visages (Eigenfaces), visualisation de données complexes."
    },
    {
        "id": "day_066",
        "dayNumber": 66,
        "title": "Bayes Naïf",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Bayes Naïf",
        "africanAnalogy": "Le classifieur Bayes Naïf est comme un médecin qui diagnostique une maladie en combinant les symptômes. Fièvre ? Toux ? Fatigue ? Il calcule la probabilité de la grippe en supposant que chaque symptôme ajoute une preuve indépendante.",
        "theory": {
            "title": "Probabilités Bayésiennes",
            "content": "Utilise le théorème de Bayes avec l'hypothèse 'naïve' d'indépendance entre les caractéristiques. Très efficace pour le texte.",
            "mathematicalFoundation": "\n                    - P(y|x) ∝ P(y) Π P(x_i|y)\n                - Prior P(y) : probabilité a priori\n                - Vraisemblance P(x_i|y)\n                - Indépendance conditionnelle\n                - Lissage de Laplace (pour éviter proba 0)\n                ",
            "scientists": [
                {
                    "name": "Thomas Bayes",
                    "year": "1763",
                    "contribution": "Théorème de Bayes",
                    "context": "Fondement de l'inférence statistique"
                },
                {
                    "name": "Pierre-Simon Laplace",
                    "year": "1812",
                    "contribution": "Probabilités inverses",
                    "context": "Développe la forme moderne du théorème"
                }
            ]
        },
        "code": "from sympy import symbols\nP_Spam = 0.4\nP_Ham = 0.6\n# Mot 'Gratuit' : P(Gratuit|Spam)=0.8, P(Gratuit|Ham)=0.1\nP_G_S = 0.8\nP_G_H = 0.1\n# Proba que ce soit un Spam sachant 'Gratuit'\nP_S_G = (P_G_S * P_Spam) / (P_G_S * P_Spam + P_G_H * P_Ham)\nprint(f'P(Spam|Gratuit) = {P_S_G:.2f}')",
        "output": "P(Spam|Gratuit) = 0.84",
        "exercises": [
            "Calculer la probabilité avec deux mots",
            "Pourquoi l'hypothèse naïve est-elle fausse mais utile ?",
            "Gérer les mots inconnus"
        ],
        "practicalApplication": "Filtrage anti-spam, analyse de sentiment, classification de documents."
    },
    {
        "id": "day_067",
        "dayNumber": 67,
        "title": "Arbres de Décision",
        "difficulty": "Avancé",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Arbres de Décision",
        "africanAnalogy": "Un arbre de décision est comme le jeu 'Qui est-ce ?'. On pose une série de questions binaires : 'Est-ce un homme ?', 'A-t-il des lunettes ?'. Chaque réponse élimine des possibilités jusqu'à trouver la solution.",
        "theory": {
            "title": "Algorithmes Arborescents",
            "content": "Divise récursivement l'espace des données pour maximiser la pureté des nœuds. Interprétable et visuel.",
            "mathematicalFoundation": "\n                    - Entropie de Shannon : H(S) = -Σ p_i log₂ p_i\n                - Gain d'information : H(S) - Σ |Sv|/|S| H(Sv)\n                - Indice de Gini : 1 - Σ p_i²\n                - Élagage (Pruning) pour éviter le surapprentissage\n                - Forêts aléatoires (Ensemble learning)\n                ",
            "scientists": [
                {
                    "name": "Claude Shannon",
                    "year": "1948",
                    "contribution": "Théorie de l'information",
                    "context": "Définit l'entropie, mesure de l'incertitude"
                },
                {
                    "name": "Leo Breiman",
                    "year": "1984",
                    "contribution": "CART (Classification and Regression Trees)",
                    "context": "Algorithme standard pour les arbres"
                }
            ]
        },
        "code": "from sympy import log\n# Calcul de l'entropie d'un ensemble binaire (5 oui, 5 non)\np_oui = 0.5\np_non = 0.5\nEntropie = -(p_oui * log(p_oui, 2) + p_non * log(p_non, 2))\nprint(f'Entropie maximale (désordre) : {Entropie}')",
        "output": "Entropie maximale : 1.0",
        "exercises": [
            "Calculer l'entropie de (9 oui, 1 non)",
            "Calculer le gain d'information d'une division",
            "Différence entre Gini et Entropie"
        ],
        "practicalApplication": "Diagnostic médical, évaluation de risque crédit, systèmes experts."
    },
    {
        "id": "day_068",
        "dayNumber": 68,
        "title": "Séries Temporelles",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Séries Temporelles",
        "africanAnalogy": "Analyser une série temporelle, c'est comme prédire la météo ou la bourse. On regarde le passé pour deviner le futur, en séparant la tendance de fond (saisons) du bruit aléatoire (vent).",
        "theory": {
            "title": "Analyse Prédictive",
            "content": "Modélisation de données séquentielles. Décomposition en tendance, saisonnalité et résidus.",
            "mathematicalFoundation": "\n                    - Modèles AR (Auto-Régressif) : X_t = c + Σ φ_i X_{t-i} + ε_t\n                - Modèles MA (Moyenne Mobile)\n                - Stationnarité (Moyenne et variance constantes)\n                - Autocorrélation\n                - Bruit blanc\n                ",
            "scientists": [
                {
                    "name": "George Box & Gwilym Jenkins",
                    "year": "1970",
                    "contribution": "Méthode Box-Jenkins (ARIMA)",
                    "context": "Standardise l'analyse des séries temporelles"
                },
                {
                    "name": "Norbert Wiener",
                    "year": "1940",
                    "contribution": "Filtrage de Wiener",
                    "context": "Père de la cybernétique"
                }
            ]
        },
        "code": "from sympy import symbols, Function\nt = symbols('t', integer=True)\nX = Function('X')\nphi = 0.8\n# Processus AR(1) : X_t = 0.8 * X_{t-1}\n# C'est une récurrence linéaire\n# SymPy peut résoudre les récurrences (rsolve)",
        "output": "X(t) = C * 0.8^t",
        "exercises": [
            "Calculer l'autocorrélation d'un AR(1)",
            "Différence entre marche aléatoire et bruit blanc",
            "Lissage exponentiel"
        ],
        "practicalApplication": "Prévision des ventes, cours de bourse, consommation électrique, climat."
    },
    {
        "id": "day_069",
        "dayNumber": 69,
        "title": "Optimisation : Gradient",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Optimisation : Gradient",
        "africanAnalogy": "La descente de gradient, c'est comme descendre une montagne dans le brouillard. On ne voit pas le sommet ni la vallée, mais on sent la pente sous ses pieds. On fait un pas vers le bas, puis on recommence, jusqu'à trouver le point le plus bas.",
        "theory": {
            "title": "Optimisation Numérique",
            "content": "Algorithme fondamental pour entraîner les modèles de Machine Learning. Minimise une fonction de coût en suivant la direction opposée au gradient.",
            "mathematicalFoundation": "\n                    - Gradient : ∇f(x)\n                - Mise à jour : x_{k+1} = x_k - α∇f(x_k)\n                - Taux d'apprentissage α (Learning rate)\n                - Convexité (garantie de minimum global)\n                - Gradient stochastique (SGD)\n                ",
            "scientists": [
                {
                    "name": "Augustin-Louis Cauchy",
                    "year": "1847",
                    "contribution": "Méthode du gradient",
                    "context": "Invente la méthode pour résoudre des systèmes d'équations"
                },
                {
                    "name": "Herbert Robbins",
                    "year": "1951",
                    "contribution": "Approximation stochastique",
                    "context": "Adapte la méthode aux données bruitées (SGD)"
                }
            ]
        },
        "code": "from sympy import symbols, diff\nx = symbols('x')\n# Fonction convexe f(x) = x^2 - 4x + 5\nf = x**2 - 4*x + 5\n# Gradient (dérivée)\ngrad = diff(f, x)\n# Point critique (grad = 0)\nsolution = solve(grad, x)\nprint(f'Minimum en x = {solution[0]}')",
        "output": "Minimum en x = 2",
        "exercises": [
            "Effectuer 3 pas de descente manuellement",
            "Impact d'un taux d'apprentissage trop grand",
            "Problème des minimums locaux"
        ],
        "practicalApplication": "Entraînement des réseaux de neurones, optimisation logistique, design technique."
    },
    {
        "id": "day_070",
        "dayNumber": 70,
        "title": "Théorie de l'Information",
        "difficulty": "Avancé",
        "masteryLevel": "Maître",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Théorie de l'Information",
        "africanAnalogy": "L'information se mesure, comme l'eau ou l'électricité. Un message surprenant contient beaucoup d'information ('Il neige au Sahara'). Un message évident en contient peu ('Le soleil se lève'). Le bit est l'atome d'information.",
        "theory": {
            "title": "Entropie et Codage",
            "content": "Quantifie l'information, la compression et la transmission. L'entropie mesure l'incertitude moyenne d'une variable aléatoire.",
            "mathematicalFoundation": "\n                    - Information propre : I(x) = -log₂ p(x)\n                - Entropie : H(X) = E[I(x)]\n                - Divergence KL (Kullback-Leibler)\n                - Information mutuelle : I(X;Y) = H(X) - H(X|Y)\n                - Théorème du codage de source\n                ",
            "scientists": [
                {
                    "name": "Claude Shannon",
                    "year": "1948",
                    "contribution": "Théorie mathématique de la communication",
                    "context": "Fonde l'ère numérique (bits, compression, correction d'erreur)"
                },
                {
                    "name": "John von Neumann",
                    "year": "1932",
                    "contribution": "Entropie quantique",
                    "context": "Suggère le nom 'entropie' à Shannon"
                }
            ]
        },
        "code": "from sympy import log, Sum, symbols\np = symbols('p', positive=True)\n# Entropie d'une pièce biaisée (Bernoulli)\nH = -(p * log(p, 2) + (1-p) * log(1-p, 2))\n# Maximum pour p=0.5 (pièce équilibrée)\nprint('Entropie max pour p=0.5')",
        "output": "1 bit",
        "exercises": [
            "Calculer l'entropie d'un dé à 6 faces",
            "Lien entre compression ZIP et entropie",
            "Pourquoi le langage est-il redondant ?"
        ],
        "practicalApplication": "Compression (MP3, ZIP), cryptographie, télécommunications (5G, Fibre), Machine Learning."
    },
    {
        "id": "day_071",
        "dayNumber": 71,
        "title": "Arithmétique Modulaire",
        "difficulty": "Avancé",
        "masteryLevel": "Intermédiaire",
        "unlocked": true,
        "xpReward": 35,
        "badge": "🏅 Arithmétique Modulaire",
        "africanAnalogy": "L'arithmétique modulaire est comme une horloge. Après 12, on revient à 1. En modulo 7, après 6 on revient à 0. C'est la base de toute la cryptographie moderne.",
        "theory": {
            "title": "Congruences",
            "content": "Les congruences modulo n sont essentielles en cryptographie. SymPy peut calculer symboliquement avec des modulos.",
            "mathematicalFoundation": "\n                    - a ≡ b (mod n) ⟺ n | (a-b)\n                - Propriétés : (a+b) mod n, (a×b) mod n\n                - Inverse modulaire : ax ≡ 1 (mod n)\n                - Théorème d'Euler : a^φ(n) ≡ 1 (mod n)\n                - Petit théorème de Fermat : a^(p-1) ≡ 1 (mod p)\n                ",
            "scientists": [
                {
                    "name": "Carl Friedrich Gauss",
                    "year": "1801",
                    "contribution": "Disquisitiones Arithmeticae",
                    "context": "Fonde l'arithmétique modulaire moderne"
                },
                {
                    "name": "Leonhard Euler",
                    "year": "1763",
                    "contribution": "Fonction φ (indicatrice)",
                    "context": "Généralise Fermat"
                }
            ]
        },
        "code": "from sympy import mod_inverse, isprime\n# Inverse modulaire de 3 modulo 11\na = 3\nn = 11\ninv = mod_inverse(a, n)\nprint(f'{a} * {inv} ≡ 1 (mod {n})')\nprint(f'Vérification: {(a * inv) % n}')",
        "output": "3 * 4 ≡ 1 (mod 11), Vérification: 1",
        "exercises": [
            "Calculer 7^100 mod 13",
            "Résoudre 3x ≡ 5 (mod 11)",
            "Vérifier le théorème de Fermat pour p=7"
        ],
        "practicalApplication": "Cryptographie RSA, signatures numériques, blockchain, hachage."
    },
    {
        "id": "day_072",
        "dayNumber": 72,
        "title": "Cryptographie RSA",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Cryptographie RSA",
        "africanAnalogy": "RSA est comme un cadenas magique. Tout le monde peut fermer le cadenas (chiffrer avec la clé publique), mais seul celui qui a la clé privée peut l'ouvrir. C'est la magie des nombres premiers.",
        "theory": {
            "title": "Chiffrement Asymétrique",
            "content": "RSA repose sur la difficulté de factoriser de grands nombres. SymPy peut générer des clés et chiffrer/déchiffrer symboliquement.",
            "mathematicalFoundation": "\n                    - Choisir p, q premiers distincts\n                - n = p × q, φ(n) = (p-1)(q-1)\n                - Choisir e tel que pgcd(e, φ(n)) = 1\n                - Calculer d ≡ e^(-1) (mod φ(n))\n                - Chiffrement : c ≡ m^e (mod n)\n                - Déchiffrement : m ≡ c^d (mod n)\n                ",
            "scientists": [
                {
                    "name": "Rivest, Shamir, Adleman",
                    "year": "1977",
                    "contribution": "Algorithme RSA",
                    "context": "Révolutionne la cryptographie"
                },
                {
                    "name": "Whitfield Diffie & Martin Hellman",
                    "year": "1976",
                    "contribution": "Cryptographie à clé publique",
                    "context": "Concept fondateur"
                }
            ]
        },
        "code": "from sympy import nextprime, mod_inverse, gcd\n# Génération de clés RSA (petits nombres)\np, q = 61, 53\nn = p * q\nphi = (p-1) * (q-1)\ne = 17  # Exposant public\nd = mod_inverse(e, phi)  # Exposant privé\nprint(f'Clé publique: (e={e}, n={n})')\nprint(f'Clé privée: (d={d}, n={n})')",
        "output": "Clé publique: (e=17, n=3233), Clé privée: (d=2753, n=3233)",
        "exercises": [
            "Chiffrer le message m=123",
            "Déchiffrer c=855",
            "Pourquoi RSA est-il sûr ?"
        ],
        "practicalApplication": "HTTPS, signatures électroniques, Bitcoin, SSH."
    },
    {
        "id": "day_073",
        "dayNumber": 73,
        "title": "Diffie-Hellman",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Diffie-Hellman",
        "africanAnalogy": "Diffie-Hellman est comme mélanger deux couleurs en public. Alice a du rouge, Bob du bleu. Ils échangent leurs mélanges (rouge+jaune et bleu+jaune) mais personne ne peut deviner le mélange final (rouge+bleu+jaune) qu'ils partagent.",
        "theory": {
            "title": "Échange de Clés",
            "content": "Permet à deux parties de créer une clé secrète partagée sur un canal public. Repose sur le logarithme discret.",
            "mathematicalFoundation": "\n                    - Choisir p premier et g générateur\n                - Alice choisit a secret, envoie A = g^a mod p\n                - Bob choisit b secret, envoie B = g^b mod p\n                - Clé partagée : K = g^(ab) mod p\n                - Alice calcule K = B^a, Bob calcule K = A^b\n                - Problème du log discret : difficile de trouver a sachant g^a\n                ",
            "scientists": [
                {
                    "name": "Whitfield Diffie",
                    "year": "1976",
                    "contribution": "Échange de clés",
                    "context": "Prix Turing 2015"
                },
                {
                    "name": "Martin Hellman",
                    "year": "1976",
                    "contribution": "Protocole DH",
                    "context": "Fonde la crypto moderne"
                }
            ]
        },
        "code": "from sympy import isprime, primitive_root\n# Paramètres publics\np = 23  # Nombre premier\ng = 5   # Générateur\n# Secrets\na = 6  # Secret d'Alice\nb = 15 # Secret de Bob\n# Échange public\nA = pow(g, a, p)\nB = pow(g, b, p)\n# Clé partagée\nK_alice = pow(B, a, p)\nK_bob = pow(A, b, p)\nprint(f'Clé partagée: {K_alice} = {K_bob}')",
        "output": "Clé partagée: 2 = 2",
        "exercises": [
            "Vérifier que g=5 est un générateur mod 23",
            "Calculer la clé pour a=10, b=20",
            "Pourquoi le log discret est-il difficile ?"
        ],
        "practicalApplication": "TLS/SSL, VPN, Signal, WhatsApp (end-to-end encryption)."
    },
    {
        "id": "day_074",
        "dayNumber": 74,
        "title": "Courbes Elliptiques",
        "difficulty": "Avancé",
        "masteryLevel": "Maître",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Courbes Elliptiques",
        "africanAnalogy": "Une courbe elliptique est comme une route sinueuse sur laquelle on peut 'additionner' des points. Si on part d'un point et qu'on l'additionne à lui-même plusieurs fois, il est très difficile de retrouver combien de fois on l'a additionné.",
        "theory": {
            "title": "Cryptographie ECC",
            "content": "Les courbes elliptiques offrent la même sécurité que RSA avec des clés plus courtes. Utilisées dans Bitcoin et les smartphones.",
            "mathematicalFoundation": "\n                    - Équation : y² = x³ + ax + b\n                - Addition de points : P + Q = R\n                - Loi de groupe sur les points\n                - Multiplication scalaire : nP = P + P + ... + P\n                - Problème du log discret elliptique (ECDLP)\n                ",
            "scientists": [
                {
                    "name": "Neal Koblitz",
                    "year": "1987",
                    "contribution": "Cryptographie ECC",
                    "context": "Indépendamment de Miller"
                },
                {
                    "name": "Victor Miller",
                    "year": "1985",
                    "contribution": "Crypto sur courbes elliptiques",
                    "context": "Propose l'utilisation en crypto"
                }
            ]
        },
        "code": "from sympy import symbols, solve, Eq\nx, y = symbols('x y')\n# Courbe elliptique y^2 = x^3 + 7 (Bitcoin)\na, b = 0, 7\n# Points sur la courbe\neq = Eq(y**2, x**3 + a*x + b)\n# Trouver y pour x=2\nsolutions = solve(eq.subs(x, 2), y)\nprint(f'Points pour x=2: {solutions}')",
        "output": "Points pour x=2: [-sqrt(15), sqrt(15)]",
        "exercises": [
            "Vérifier qu'un point est sur la courbe",
            "Additionner deux points géométriquement",
            "Comparer ECC et RSA (taille de clé)"
        ],
        "practicalApplication": "Bitcoin, Ethereum, certificats SSL, cartes à puce."
    },
    {
        "id": "day_075",
        "dayNumber": 75,
        "title": "Hachage Cryptographique",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Hachage Cryptographique",
        "africanAnalogy": "Une fonction de hachage est comme une empreinte digitale pour les données. Deux fichiers différents ont des empreintes différentes. Impossible de reconstruire le fichier à partir de l'empreinte.",
        "theory": {
            "title": "Fonctions à Sens Unique",
            "content": "Les fonctions de hachage transforment des données de taille variable en une empreinte de taille fixe. Propriétés : déterministe, rapide, effet avalanche, résistance aux collisions.",
            "mathematicalFoundation": "\n                    - h : {0,1}* → {0,1}^n\n                - Déterministe : h(m) toujours identique\n                - Résistance à la préimage\n                - Résistance aux collisions\n                - Effet avalanche : 1 bit change → 50% de h change\n                ",
            "scientists": [
                {
                    "name": "Ralph Merkle",
                    "year": "1979",
                    "contribution": "Arbres de Merkle",
                    "context": "Structure de données pour hachage"
                },
                {
                    "name": "Ron Rivest",
                    "year": "1991",
                    "contribution": "MD5",
                    "context": "Fonction de hachage populaire (maintenant cassée)"
                }
            ]
        },
        "code": "from sympy import symbols, factorial, binomial\n# Paradoxe des anniversaires (collisions)\nn = symbols('n', positive=True, integer=True)\n# Probabilité de collision avec n personnes\n# P(collision) ≈ 1 - exp(-n²/2m) pour m=365\n# Pour hachage, m = 2^256 (SHA-256)\nprint('Avec SHA-256 (2^256 sorties):')\nprint('Besoin de 2^128 hachages pour 50% de collision')",
        "output": "Besoin de 2^128 hachages pour 50% de collision",
        "exercises": [
            "Calculer P(collision) pour n=23, m=365",
            "Pourquoi MD5 est-il cassé ?",
            "Applications des arbres de Merkle"
        ],
        "practicalApplication": "Blockchain, vérification d'intégrité, mots de passe, Git."
    },
    {
        "id": "day_076",
        "dayNumber": 76,
        "title": "Théorème Chinois",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Théorème Chinois",
        "africanAnalogy": "Le théorème chinois des restes est comme résoudre plusieurs énigmes indépendantes pour trouver un trésor. Si tu sais que le trésor est à 2 pas du baobab, 3 pas du puits, et 1 pas de la case, tu peux trouver sa position exacte.",
        "theory": {
            "title": "Systèmes de Congruences",
            "content": "Permet de résoudre des systèmes de congruences avec des modulos premiers entre eux. Essentiel pour RSA et le calcul rapide.",
            "mathematicalFoundation": "\n                    - x ≡ a₁ (mod n₁)\n                - x ≡ a₂ (mod n₂)\n                - ...\n                - Si pgcd(nᵢ, nⱼ) = 1, solution unique mod N = ∏nᵢ\n                - Construction : x = Σ aᵢ Mᵢ yᵢ mod N\n                ",
            "scientists": [
                {
                    "name": "Sun Tzu",
                    "year": "~300",
                    "contribution": "Premier énoncé",
                    "context": "Mathématicien chinois ancien"
                },
                {
                    "name": "Qin Jiushao",
                    "year": "1247",
                    "contribution": "Algorithme général",
                    "context": "Dynastie Song"
                }
            ]
        },
        "code": "from sympy.ntheory.modular import crt\n# Système : x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7)\nmoduli = [3, 5, 7]\nremainders = [2, 3, 2]\n# Solution\nx = crt(moduli, remainders)\nprint(f'Solution: x ≡ {x[0]} (mod {x[1]})')",
        "output": "Solution: x ≡ 23 (mod 105)",
        "exercises": [
            "Vérifier la solution manuellement",
            "Résoudre avec 4 congruences",
            "Application à RSA (optimisation)"
        ],
        "practicalApplication": "Optimisation RSA, calcul parallèle, calendriers."
    },
    {
        "id": "day_077",
        "dayNumber": 77,
        "title": "Test de Primalité",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 45,
        "badge": "🏅 Test de Primalité",
        "africanAnalogy": "Tester si un nombre est premier est comme vérifier si une porte est verrouillée. On peut essayer toutes les clés (division), ou utiliser un test rapide (Miller-Rabin) qui dit 'probablement verrouillée' avec grande confiance.",
        "theory": {
            "title": "Algorithmes Probabilistes",
            "content": "Les tests de primalité probabilistes (Miller-Rabin, Solovay-Strassen) sont rapides et fiables. Essentiels pour générer des clés RSA.",
            "mathematicalFoundation": "\n                    - Test de Fermat : si a^(n-1) ≢ 1 (mod n), n composé\n                - Nombres de Carmichael : passent Fermat mais composés\n                - Test de Miller-Rabin : plus robuste\n                - Témoin de compositeness\n                - AKS : déterministe polynomial (2002)\n                ",
            "scientists": [
                {
                    "name": "Gary Miller",
                    "year": "1976",
                    "contribution": "Test de Miller",
                    "context": "Déterministe sous hypothèse de Riemann"
                },
                {
                    "name": "Michael Rabin",
                    "year": "1980",
                    "contribution": "Version probabiliste",
                    "context": "Pratique et rapide"
                }
            ]
        },
        "code": "from sympy import isprime, randprime, nextprime\n# Tester la primalité\nn = 561  # Nombre de Carmichael\nprint(f'{n} est premier ? {isprime(n)}')\n# Générer un grand nombre premier\np = randprime(10**10, 10**10 + 1000)\nprint(f'Premier aléatoire: {p}')",
        "output": "561 est premier ? False, Premier aléatoire: ...",
        "exercises": [
            "Implémenter le test de Fermat",
            "Trouver un nombre de Carmichael",
            "Comparer temps : division vs Miller-Rabin"
        ],
        "practicalApplication": "Génération de clés RSA, cryptographie, sécurité informatique."
    },
    {
        "id": "day_078",
        "dayNumber": 78,
        "title": "Factorisation",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "unlocked": true,
        "xpReward": 50,
        "badge": "🏅 Factorisation",
        "africanAnalogy": "Factoriser un grand nombre est comme casser un code secret. Multiplier deux grands nombres premiers est facile, mais retrouver les facteurs à partir du produit est extrêmement difficile. C'est la sécurité de RSA.",
        "theory": {
            "title": "Algorithmes de Factorisation",
            "content": "La factorisation de grands nombres est un problème difficile. Les meilleurs algorithmes (GNFS) sont sous-exponentiels mais restent lents.",
            "mathematicalFoundation": "\n                    - Division par essais : O(√n)\n                - Rho de Pollard : O(n^(1/4))\n                - Crible quadratique : sous-exponentiel\n                - GNFS (General Number Field Sieve) : le plus rapide\n                - Algorithme de Shor (quantique) : polynomial\n                ",
            "scientists": [
                {
                    "name": "John Pollard",
                    "year": "1975",
                    "contribution": "Algorithme rho",
                    "context": "Méthode probabiliste élégante"
                },
                {
                    "name": "Carl Pomerance",
                    "year": "1981",
                    "contribution": "Crible quadratique",
                    "context": "Amélioration majeure"
                }
            ]
        },
        "code": "from sympy import factorint, nextprime\n# Factorisation\nn = 1234567890\nfactors = factorint(n)\nprint(f'Factorisation de {n}:')\nprint(factors)\n# Temps pour grands nombres\np = nextprime(10**15)\nq = nextprime(10**15 + 100)\nrsa_n = p * q\nprint(f'RSA-512 bits serait: {rsa_n}')",
        "output": "Factorisation de 1234567890: {2: 1, 3: 2, 5: 1, ...}",
        "exercises": [
            "Factoriser 8051 avec rho de Pollard",
            "Estimer le temps pour factoriser RSA-2048",
            "Impact de l'ordinateur quantique"
        ],
        "practicalApplication": "Cryptanalyse, sécurité RSA, challenge RSA."
    },
    {
        "id": "day_079",
        "dayNumber": 79,
        "title": "Générateurs Pseudo-Aléatoires",
        "difficulty": "Avancé",
        "masteryLevel": "Avancé",
        "unlocked": true,
        "xpReward": 40,
        "badge": "🏅 Générateurs Pseudo-Aléatoires",
        "africanAnalogy": "Un générateur pseudo-aléatoire est comme une machine à sous déterministe. Si tu connais la graine (seed), tu peux prédire tous les résultats. Mais sans la graine, les nombres semblent aléatoires.",
        "theory": {
            "title": "Aléatoire Cryptographique",
            "content": "Les PRNG cryptographiques doivent être imprévisibles même si on connaît une partie de la séquence. Essentiels pour les clés et les nonces.",
            "mathematicalFoundation": "\n                    - PRNG linéaire : Xₙ₊₁ = (aXₙ + c) mod m\n                - Période maximale : m\n                - Générateur de Blum Blum Shub : Xₙ₊₁ = Xₙ² mod M\n                - Tests statistiques (NIST)\n                - Entropie cryptographique\n                ",
            "scientists": [
                {
                    "name": "Blum, Blum, Shub",
                    "year": "1986",
                    "contribution": "Générateur BBS",
                    "context": "Prouvé cryptographiquement sûr"
                },
                {
                    "name": "Donald Knuth",
                    "year": "1969",
                    "contribution": "Analyse des PRNG",
                    "context": "The Art of Computer Programming"
                }
            ]
        },
        "code": "from sympy import nextprime, mod_inverse\n# Générateur Blum Blum Shub (simplifié)\np = nextprime(1000)\nq = nextprime(2000)\nM = p * q\nX0 = 7  # Graine\n# Générer 5 nombres\nX = X0\nfor i in range(5):\n    X = (X**2) % M\n    print(f'X{i+1} = {X}')",
        "output": "X1 = ..., X2 = ..., ...",
        "exercises": [
            "Implémenter un LCG",
            "Tester la période d'un PRNG",
            "Pourquoi /dev/random est-il sûr ?"
        ],
        "practicalApplication": "Génération de clés, nonces, IV (vecteurs d'initialisation), jeux."
    },
    {
        "id": "day_080",
        "dayNumber": 80,
        "title": "PROJET : Coffre-Fort Cryptographique",
        "difficulty": "Avancé",
        "masteryLevel": "Validé",
        "unlocked": true,
        "xpReward": 200,
        "badge": "🔐 Gardien du Secret",
        "africanAnalogy": "Le partage de secret de Shamir est comme une carte au trésor déchirée en morceaux. Il faut au moins k morceaux sur n pour reconstituer la carte. Avec k-1 morceaux, on ne sait rien du tout.",
        "theory": {
            "title": "Schéma de Shamir",
            "content": "Permet de partager un secret entre n personnes tel que k personnes (seuil) sont nécessaires pour le reconstituer. Basé sur l'interpolation polynomiale.",
            "mathematicalFoundation": "\n                    - Secret S, choisir polynôme P(x) = S + a₁x + ... + aₖ₋₁x^(k-1)\n                - Distribuer n points : (i, P(i)) pour i=1..n\n                - Reconstitution : interpolation de Lagrange\n                - k points suffisent, k-1 ne donnent aucune info\n                - Sécurité informationnelle théorique\n                ",
            "scientists": [
                {
                    "name": "Adi Shamir",
                    "year": "1979",
                    "contribution": "Secret sharing",
                    "context": "Le 'S' de RSA"
                },
                {
                    "name": "George Blakley",
                    "year": "1979",
                    "contribution": "Schéma géométrique",
                    "context": "Approche alternative"
                }
            ]
        },
        "code": "from sympy import symbols, interpolate\nx = symbols('x')\n# Secret S = 1234, seuil k=3\nS = 1234\n# Polynôme P(x) = 1234 + 166x + 94x^2 (aléatoire)\nP = S + 166*x + 94*x**2\n# Distribuer 5 parts\nshares = [(i, P.subs(x, i)) for i in range(1, 6)]\nprint(f'Parts: {shares[:3]}')\n# Reconstituer avec 3 parts\npoints = shares[:3]\nP_reconstructed = interpolate(points, x)\nprint(f'Secret reconstitué: {P_reconstructed.subs(x, 0)}')",
        "output": "Secret reconstitué: 1234",
        "exercises": [
            "Vérifier qu'avec 2 parts on ne peut rien",
            "Implémenter (3,5)-threshold",
            "Application aux portefeuilles crypto"
        ],
        "practicalApplication": "Gestion de clés, coffres-forts numériques, blockchain, sécurité militaire."
    },
    {
        "id": "day_081",
        "title": "Théorie du Chaos",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 60,
        "badge": "🌪️ Maître du Chaos",
        "africanAnalogy": "Le chaos est comme un marché bondé à Dakar. Au premier regard, c'est le désordre total, imprévisible. Mais si on observe longtemps, des motifs apparaissent, des flux se dessinent. L'ordre se cache dans le désordre.",
        "theory": {
            "title": "Systèmes Dynamiques Chaotiques",
            "content": "Le chaos déterministe montre comment de petites variations initiales peuvent entraîner des divergences énormes (effet papillon).",
            "mathematicalFoundation": "**Attracteur de Lorenz :**\ndx/dt = σ(y-x)\ndy/dt = x(ρ-z)-y\ndz/dt = xy-βz\n\nSensibilité aux conditions initiales.",
            "scientists": [
                {
                    "name": "Edward Lorenz",
                    "year": "1963",
                    "contribution": "Attracteur étrange",
                    "context": "Météorologie"
                }
            ]
        },
        "code": "from sympy import symbols, Function, dsolve\nt = symbols('t')\nx, y, z = symbols('x y z', cls=Function)\nsigma, rho, beta = 10, 28, 8/3\n# Le système ne se résout pas analytiquement !",
        "output": "Système non-intégrable symboliquement",
        "exercises": [
            "Tracer l'attracteur numériquement",
            "Calculer les points fixes",
            "Analyser la stabilité (Jacobienne)"
        ],
        "practicalApplication": "Météorologie, turbulence, cryptographie chaotique."
    },
    {
        "id": "day_082",
        "title": "Fractales",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 60,
        "badge": "❄️ Géomètre Fractal",
        "africanAnalogy": "Une fractale est comme un chou romanesco ou les tresses traditionnelles : le motif global est répété à l'infini dans chaque petite partie. L'infiniment petit ressemble à l'infiniment grand.",
        "theory": {
            "title": "Géométrie Fractale",
            "content": "Les objets fractals ont une dimension non-entière (dimension de Hausdorff). Ils sont auto-similaires.",
            "mathematicalFoundation": "**Ensemble de Mandelbrot :**\nz_{n+1} = z_n^2 + c\n\n**Dimension fractale :**\nD = log(N) / log(1/r)",
            "scientists": [
                {
                    "name": "Benoît Mandelbrot",
                    "year": "1975",
                    "contribution": "Objets fractals",
                    "context": "IBM"
                }
            ]
        },
        "code": "from sympy import I, Abs\nz = 0\nc = 0.2 + 0.5*I\n# Première itération\nz = z**2 + c",
        "output": "Suite complexe bornée ou divergente",
        "exercises": [
            "Générer le triangle de Sierpinski",
            "Calculer la dimension fractale",
            "Coder l'ensemble de Julia"
        ],
        "practicalApplication": "Antennes, compression d'image, modélisation de côtes, finance."
    },
    {
        "id": "day_083",
        "title": "Mécnique des Fluides",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 65,
        "badge": "💧 Maître des Eaux",
        "africanAnalogy": "Le fleuve Sénégal change de comportement selon la saison. Calme en étiage (laminaire), tumultueux en crue (turbulent). L'équation de Navier-Stokes capture cette danse de l'eau.",
        "theory": {
            "title": "Navier-Stokes",
            "content": "Ces équations décrivent le mouvement des fluides. C'est l'un des problèmes du millénaire non résolus (existence et unicité).",
            "mathematicalFoundation": "ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f\n\nConservation de la masse et de la quantité de mouvement.",
            "scientists": [
                {
                    "name": "Navier & Stokes",
                    "year": "1822",
                    "contribution": "Équations fondamentales",
                    "context": "Physique classique"
                }
            ]
        },
        "code": "from sympy.vector import CoordSys3D, Del\nC = CoordSys3D('C')\ndelop = Del()\n# Champ de vitesse v\nv = C.x*C.i + C.y*C.j\n# Divergence (incompressibilité ?)\ndelop.dot(v)",
        "output": "2 (Fluide compressible car div != 0)",
        "exercises": [
            "Vérifier l'incompressibilité",
            "Écoulement de Poiseuille",
            "Tourbillon potentiel"
        ],
        "practicalApplication": "Aérodynamique, météo, pipelines, hémodynamique."
    },
    {
        "id": "day_084",
        "title": "Épidémiologie (SIR)",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 60,
        "badge": "🦠 Épidémiologiste",
        "africanAnalogy": "Une épidémie se propage comme une rumeur au village. Au début, quelques personnes savent (Infectés), elles en parlent aux autres (Susceptibles), qui finissent par l'oublier ou ne plus écouter (Rétablis/Retirés).",
        "theory": {
            "title": "Modèle SIR",
            "content": "Modélisation compartimentale des maladies infectieuses : Susceptibles, Infectés, Rétablis.",
            "mathematicalFoundation": "dS/dt = -βSI\ndI/dt = βSI - γI\ndR/dt = γI\n\nR₀ = β/γ (Taux de reproduction)",
            "scientists": [
                {
                    "name": "Kermack & McKendrick",
                    "year": "1927",
                    "contribution": "Théorie SIR",
                    "context": "Peste et grippe espagnole"
                }
            ]
        },
        "code": "from sympy import symbols, Function, dsolve, Eq\nt, beta, gamma = symbols('t beta gamma')\nS, I, R = symbols('S I R', cls=Function)\n# Équation simplifiée pour I au début (S ~ 1)\neq = Eq(I(t).diff(t), (beta - gamma)*I(t))",
        "output": "Croissance exponentielle si β > γ",
        "exercises": [
            "Calculer le pic épidémique",
            "Intégrer la vaccination",
            "Modèle SEIR (Exposed)"
        ],
        "practicalApplication": "Gestion pandemies (COVID-19), propagation de virus informatiques."
    },
    {
        "id": "day_085",
        "title": "Neurosciences",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 65,
        "badge": "🧠 Neuro-Architecte",
        "africanAnalogy": "Le cerveau est comme un réseau de tam-tams qui communiquent. Chaque neurone accumule de l'énergie (tension) jusqu'à un seuil, puis \"frappe\" (spike) pour envoyer le message. C'est un code binaire biologique.",
        "theory": {
            "title": "Modèle Hodgkin-Huxley",
            "content": "Décrit comment les potentiels d'action sont initiés et propagés dans les neurones via les canaux ioniques.",
            "mathematicalFoundation": "C dV/dt = I - g_Na m³h(V-E_Na) - g_K n⁴(V-E_K) - g_L(V-E_L)\nSystème d'EDO non-linéaires couplées.",
            "scientists": [
                {
                    "name": "Hodgkin & Huxley",
                    "year": "1952",
                    "contribution": "Modèle du neurone géant de calmar",
                    "context": "Prix Nobel"
                }
            ]
        },
        "code": "from sympy import exp, symbols\nV = symbols('V')\n# Fonction d'ouverture canal potassium (n)\nalpha_n = 0.01 * (V + 55) / (1 - exp(-(V + 55) / 10))",
        "output": "Fonction de taux de transition",
        "exercises": [
            "Modèle \"Integrate and Fire\"",
            "Simuler un train d'impulsions",
            "Réseau de 2 neurones"
        ],
        "practicalApplication": "IA, prothèses neurales, compréhension de l'épilepsie."
    },
    {
        "id": "day_086",
        "title": "Mouvement Brownien",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 60,
        "badge": "🎲 Stochasticien",
        "africanAnalogy": "Imagine une feuille morte tombant dans un tourbillon de poussière, ou une chèvre errant au hasard pour brouter. Sa trajectoire est imprévisible à chaque pas, mais statistiquement modélisable.",
        "theory": {
            "title": "Processus de Wiener",
            "content": "Description mathématique du mouvement aléatoire des particules suspendues dans un fluide.",
            "mathematicalFoundation": "W_t - W_s ~ N(0, t-s)\nPropriété de Markov.\nTrajectoires continues mais nulle part différentiables.",
            "scientists": [
                {
                    "name": "Robert Brown",
                    "year": "1827",
                    "contribution": "Observation pollen",
                    "context": "Botaniste"
                },
                {
                    "name": "Albert Einstein",
                    "year": "1905",
                    "contribution": "Explication théorique",
                    "context": "Prouve l'existence des atomes"
                }
            ]
        },
        "code": "from sympy.stats import Normal, E, variance\nt = symbols('t', positive=True)\n# W(t) ~ N(0, t)\nW = Normal('W', 0, t)\nprint(f'Variance: {variance(W)}')",
        "output": "Variance: t",
        "exercises": [
            "Simuler une marche aléatoire 1D",
            "Calculer la traversée moyenne",
            "Lien avec équation de la chaleur"
        ],
        "practicalApplication": "Finance, diffusion physique, écologie."
    },
    {
        "id": "day_087",
        "title": "Calcul d'Itô",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 70,
        "badge": "📊 Maître d'Itô",
        "africanAnalogy": "En calcul classique, la courbe est lisse comme une dune. En calcul stochastique, la courbe est rugueuse comme un chemin de latérite. On ne peut pas glisser dessus, il faut une nouvelle façon de marcher (calcul d'Itô).",
        "theory": {
            "title": "Intégrale Stochastique",
            "content": "Extension du calcul intégral aux processus aléatoires. Fondamental car (dW)² = dt (terme non négligeable).",
            "mathematicalFoundation": "**Lemme d'Itô :**\ndf(t,X) = (∂f/∂t + μ∂f/∂x + ½σ²∂²f/∂x²)dt + σ(∂f/∂x)dW",
            "scientists": [
                {
                    "name": "Kiyosi Itô",
                    "year": "1944",
                    "contribution": "Calcul stochastique",
                    "context": "Japonais, père des probas modernes"
                }
            ]
        },
        "code": "from sympy import symbols, Function, diff\nS, t, mu, sigma = symbols('S t mu sigma')\nf = Function('f')(S, t)\n# Terme de correction d'Itô (1/2 * sigma^2 * S^2 * f'')\ncorrection = 1/2 * sigma**2 * S**2 * f.diff(S, 2)",
        "output": "Correction de convexité",
        "exercises": [
            "Appliquer le lemme à f(x) = x²",
            "Différence Stratonovich vs Itô",
            "Résoudre dX = X dW"
        ],
        "practicalApplication": "Modélisation financière, filtrage de signal, bruit électronique."
    },
    {
        "id": "day_088",
        "title": "Finance : Black-Scholes",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 75,
        "badge": "📈 Quant",
        "africanAnalogy": "Fixer le prix d'une option, c'est comme parier sur le prix futur du cacao. Black-Scholes donne la formule \"juste\" pour ne pas perdre d'argent, en éliminant le risque par une couverture dynamique.",
        "theory": {
            "title": "Évaluation d'Options",
            "content": "Modèle mathématique pour la dynamique d'un marché financier. Donne une EDP parabolique similaire à l'équation de la chaleur.",
            "mathematicalFoundation": "∂V/∂t + ½σ²S²∂²V/∂S² + rS∂V/∂S - rV = 0\n\nSolution : Call = S·N(d₁) - K·e⁻ʳᵗ·N(d₂)",
            "scientists": [
                {
                    "name": "Black, Scholes, Merton",
                    "year": "1973",
                    "contribution": "Formule d'évaluation",
                    "context": "Prix Nobel d'économie"
                }
            ]
        },
        "code": "from sympy import erf, log, exp, sqrt, symbols\nS, K, T, r, sigma = symbols('S K T r sigma')\n# d1 de Black-Scholes\nd1 = (log(S/K) + (r + sigma**2/2)*T) / (sigma*sqrt(T))",
        "output": "Formule analytique du prix",
        "exercises": [
            "Calculer le prix d'un Call",
            "Calculer les \"Greques\" (Delta, Gamma)",
            "Simuler un portefeuille de couverture"
        ],
        "practicalApplication": "Trading, gestion de risques bancaires, assurance."
    },
    {
        "id": "day_089",
        "title": "Introduction aux Tenseurs",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 65,
        "badge": "🏗️ Tensorflow",
        "africanAnalogy": "Un scalaire est un grain de sable (0D). Un vecteur est une flèche (1D). Une matrice est un tapis (2D). Un tenseur, c'est le tissage complet en 3D ou plus, capable de décrire des contraintes dans toutes les directions à la fois.",
        "theory": {
            "title": "Algèbre Tensorielle",
            "content": "Les tenseurs généralisent scalaires, vecteurs et matrices. Ils sont indépendants du système de coordonnées.",
            "mathematicalFoundation": "T_{ij} v^j = w_i (Convention de sommation d'Einstein)\nProduit tensoriel, contraction, métrique.",
            "scientists": [
                {
                    "name": "Gregorio Ricci-Curbastro",
                    "year": "1900",
                    "contribution": "Calcul tensoriel",
                    "context": "Outil clé pour Einstein"
                }
            ]
        },
        "code": "from sympy import Array, tensorproduct\nfrom sympy.abc import x, y, z\n# Tenseur de rang 2 (Matrice)\nA = Array([[x, y], [z, x**2]])\n# Produit tensoriel\ntensorproduct(A, A)",
        "output": "Tenseur de rang 4",
        "exercises": [
            "Calculer la trace comme contraction",
            "Manipuler des indices",
            "Tenseur métrique Euclidien"
        ],
        "practicalApplication": "Relativité générale, mécanique des milieux continus, Deep Learning."
    },
    {
        "id": "day_090",
        "title": "Symboles de Christoffel",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 70,
        "badge": "🌐 Navigateur Courbe",
        "africanAnalogy": "Marcher droit sur une terre courbe (comme la Terre), c'est suivre (dériver) la courbure. Les symboles de Christoffel sont les guides qui nous disent de combien il faut tourner pour avoir l'illusion d'aller tout droit.",
        "theory": {
            "title": "Dérivée Covariante",
            "content": "Dans un espace courbe, la dérivée classique ne marche plus. Il faut ajouter un terme de correction (Christoffel) pour tenir compte de la courbure du repère.",
            "mathematicalFoundation": "Γ^k_{ij} = ½ g^{kl} (∂g_{il}/∂x^j + ∂g_{jl}/∂x^i - ∂g_{ij}/∂x^l)\n\nPermet le transport parallèle.",
            "scientists": [
                {
                    "name": "Elwin Christoffel",
                    "year": "1869",
                    "contribution": "Géométrie différentielle",
                    "context": ""
                }
            ]
        },
        "code": "from sympy.diffgeom import Manifold, Patch, CoordSystem\nfrom sympy import symbols\n# Difficile en pur SymPy basique, nécessite diffgeom\n# Γ décrit comment les bases changent",
        "output": "Correction de courbure",
        "exercises": [
            "Calculer Γ pour les coordonnées polaires",
            "Calculer Γ pour une sphère",
            "Lien avec la force centrifuge"
        ],
        "practicalApplication": "GPS (Relativité), robotique (bras articulés), géodésie."
    },
    {
        "id": "day_091",
        "title": "Courbure de Riemann",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 80,
        "badge": "🍩 Topologue",
        "africanAnalogy": "Si tu fais le tour d'un baobab en gardant ton bras tendu \"tout droit\", à la fin ton bras ne pointe plus dans la même direction. Cette différence d'angle mesure la courbure de l'espace (Riemann).",
        "theory": {
            "title": "Tenseur de Riemann",
            "content": "Mesure intrinsèque de la courbure d'une variété. Si tous les composants sont nuls, l'espace est plat.",
            "mathematicalFoundation": "R^ρ_{σμν} = ∂_μ Γ^ρ_{νσ} - ... (Kommutateur de dérivées covariantes)\nIdentités de Bianchi.",
            "scientists": [
                {
                    "name": "Bernhard Riemann",
                    "year": "1854",
                    "contribution": "Géométrie Riemannienne",
                    "context": "Conférence habilitation légendaire"
                }
            ]
        },
        "code": "from sympy import sin, symbols\n# Pour une sphère de rayon R\n# K = 1/R^2 (Courbure sectionnelle constante)",
        "output": "R_1212 non nul sur la sphère",
        "exercises": [
            "Courbure d'un cylindre (nulle !)",
            "Courbure d'une selle de cheval (négative)",
            "Géodésiques déviées"
        ],
        "practicalApplication": "Relativité Générale, cartographie, défauts dans les cristaux."
    },
    {
        "id": "day_092",
        "title": "Métrique de Schwarzschild",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 85,
        "badge": "🕳️ Trou Noir",
        "africanAnalogy": "Autour d'un puits très profond (masse), le sol est tellement pentu que même la lumière ne peut en sortir si elle s'approche trop. La métrique de Schwarzschild est la carte de ce terrain extrême.",
        "theory": {
            "title": "Solution du Trou Noir",
            "content": "Première solution exacte des équations d'Einstein pour le vide autour d'une masse sphérique.",
            "mathematicalFoundation": "ds² = -(1-Rs/r)c²dt² + (1-Rs/r)⁻¹dr² + r²dΩ²\nRs = 2GM/c² (Rayon de Schwarzschild)",
            "scientists": [
                {
                    "name": "Karl Schwarzschild",
                    "year": "1916",
                    "contribution": "Solution exacte",
                    "context": "Trouvée dans les tranchées de la guerre 14-18"
                }
            ]
        },
        "code": "from sympy import symbols, diag, sin\n# Métrique g_mu_nu\ng = diag(-(1-2*M/r), 1/(1-2*M/r), r**2, r**2*sin(theta)**2)",
        "output": "Tenseur métrique 4x4",
        "exercises": [
            "Trouver l'horizon des événements",
            "Calculer le décalage spectral gravitationnel",
            "Orbites instables"
        ],
        "practicalApplication": "Compréhension du cosmos, corrections GPS avancées, astronomie."
    },
    {
        "id": "day_093",
        "title": "Génération de Code (C/Fortran)",
        "difficulty": "Expert",
        "masteryLevel": "Maître",
        "xpReward": 70,
        "badge": "🤖 Optimisateur",
        "africanAnalogy": "SymPy est le sage qui réfléchit (lent). C/Fortran est le guerrier qui agit (rapide). Le sage écrit les instructions parfaites pour le guerrier. On convertit les équations symboliques en code machine ultra-rapide.",
        "theory": {
            "title": "High Performance Computing",
            "content": "Transformer des formules symboliques complexes en fonctions C ou Fortran compilées pour la vitesse numérique.",
            "mathematicalFoundation": "codegen, autowrap, ufuncify.\nOptimisation des expressions (CSE - Common Subexpression Elimination).",
            "scientists": [
                {
                    "name": "Ondřej Čertík",
                    "year": "2006",
                    "contribution": "Vision de SymPy comme outil de metaprogrammation",
                    "context": ""
                }
            ]
        },
        "code": "from sympy.utilities.codegen import codegen\nfrom sympy import symbols, sin\nx, y = symbols('x y')\nexpr = (x + y)**10 * sin(x)\n# Générer du C\nprint(codegen(('f', expr), 'C')[0][1])",
        "output": "double f(double x, double y) { ... }",
        "exercises": [
            "Générer une fonction pour résoudre Ax=b",
            "Optimiser avec CSE",
            "Wrapper avec f2py"
        ],
        "practicalApplication": "Simulations numériques lourdes, moteurs de jeux, finance HFT."
    },
    {
        "id": "day_094",
        "title": "Optimisation (Lagrange)",
        "difficulty": "Expert",
        "masteryLevel": "Maître",
        "xpReward": 75,
        "badge": "⛰️ Optimisateur Contraint",
        "africanAnalogy": "Chercher le point le plus haut de la colline (max f) tout en restant sur le sentier (g=0). Les multiplicateurs de Lagrange sont la force qui nous maintient sur le sentier tout en montant.",
        "theory": {
            "title": "Multiplicateurs de Lagrange",
            "content": "Méthode pour trouver les extremums d'une fonction sous contraintes.",
            "mathematicalFoundation": "L(x, λ) = f(x) - λ·g(x)\n∇L = 0  => ∇f = λ∇g\nLes gradients sont colinéaires à l'optimum.",
            "scientists": [
                {
                    "name": "Joseph-Louis Lagrange",
                    "year": "1788",
                    "contribution": "Mécanique Analytique",
                    "context": "Pas de figures dans son livre !"
                }
            ]
        },
        "code": "from sympy import symbols, grad, solve\nx, y, l = symbols('x y l')\nf = 4*x*y\ng = x**2/9 + y**2/16 - 1\n# Gradients et système",
        "output": "Points critiques sur l'ellipse",
        "exercises": [
            "Maximiser le volume d'une boîte",
            "Entropie maximale sous contrainte de moyenne",
            "Support Vector Machines (Dual)"
        ],
        "practicalApplication": "Économie, recherche opérationnelle, Machine Learning (SVM)."
    },
    {
        "id": "day_095",
        "title": "Théorie du Contrôle",
        "difficulty": "Avancé",
        "masteryLevel": "Expert",
        "xpReward": 65,
        "badge": "🎛️ Contrôleur",
        "africanAnalogy": "Conduire une pirogue dans le courant. Si elle dévie à gauche, tu pagaies à droite (P - Proportionnel). Si elle dévie depuis longtemps, tu forces plus (I - Intégral). Si tu vois une vague arriver, tu anticipes (D - Dérivé).",
        "theory": {
            "title": "Systèmes Asservis (PID)",
            "content": "Maintenir un système à sa consigne malgré les perturbations.",
            "mathematicalFoundation": "u(t) = Kp e(t) + Ki ∫e(τ)dτ + Kd de/dt\nFonction de transfert en Laplace H(s).",
            "scientists": [
                {
                    "name": "James Watt",
                    "year": "1788",
                    "contribution": "Régulateur à boules",
                    "context": "Révolution industrielle"
                }
            ]
        },
        "code": "from sympy import symbols, inverse_laplace_transform\ns, t, Kp, Ki = symbols('s t Kp Ki')\n# Fonction de transfert boucle fermée\nH = 1 / (s**2 + Kp*s + Ki)\n# Réponse impulsionnelle",
        "output": "Amorti ou oscillant selon Kp",
        "exercises": [
            "Régler un PID",
            "Stabilité (Routh-Hurwitz)",
            "Pendule inversé"
        ],
        "practicalApplication": "Drones, régulateur de vitesse, thermostats, pilotage automatique."
    },
    {
        "id": "day_096",
        "title": "Mécanique Analytique (Lagrangien)",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 80,
        "badge": "⚖️ Lagrangien",
        "africanAnalogy": "La nature est économe. Entre deux points, elle choisit toujours le chemin qui \"coûte\" le moins d'action. Pas besoin de calculer les forces à chaque instant, suffit de minimiser le coût total.",
        "theory": {
            "title": "Principe de Moindre Action",
            "content": "Reformulation élégante de la mécanique de Newton.",
            "mathematicalFoundation": "L = T - V (Cinétique - Potentielle)\nAction S = ∫ L dt\nÉquations d'Euler-Lagrange : d/dt(∂L/∂v) - ∂L/∂x = 0",
            "scientists": [
                {
                    "name": "Lagrange & Hamilton",
                    "year": "1833",
                    "contribution": "Unification physique",
                    "context": ""
                }
            ]
        },
        "code": "from sympy import symbols, diff, Function\nt = symbols('t')\nq = Function('q')(t)\nL = 1/2 * m * q.diff(t)**2 - 1/2 * k * q**2 # Oscillateur harmonique\n# Euler-Lagrange",
        "output": "m*q'' + k*q = 0",
        "exercises": [
            "Pendule double (Chaos)",
            "Brachistochrone",
            "Champs classiques (Densité Lagrangienne)"
        ],
        "practicalApplication": "Physique des particules, robotique complexe, animation 3D."
    },
    {
        "id": "day_097",
        "title": "Mécanique Hamiltonienne",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 80,
        "badge": "🌀 Hamiltonien",
        "africanAnalogy": "Le Lagrangien regarde le film en entier (temps). L'Hamiltonien regarde l'état présent (énergie). C'est la porte d'entrée vers la mécanique quantique où l'opérateur Hamiltonien dicte tout.",
        "theory": {
            "title": "Espace des Phases",
            "content": "Description par position (q) et impulsion (p). Les équations sont du premier ordre.",
            "mathematicalFoundation": "H = Σ p q_dot - L\ndq/dt = ∂H/∂p\ndp/dt = -∂H/∂q\nCrochets de Poisson.",
            "scientists": [
                {
                    "name": "William Hamilton",
                    "year": "1833",
                    "contribution": "Formalisme canonique",
                    "context": ""
                }
            ]
        },
        "code": "from sympy import symbols, diff\np, q = symbols('p q')\nH = p**2/(2*m) + 1/2*k*q**2\n# Équations du mouvement",
        "output": "Flux dans l'espace des phases",
        "exercises": [
            "Théorème de Liouville",
            "Passage au quantique (H -> iħ∂/∂t)",
            "Systèmes intégrables"
        ],
        "practicalApplication": "Mécanique statistique, mécanique quantique, optique géométrique."
    },
    {
        "id": "day_098",
        "title": "Théorie des Perturbations",
        "difficulty": "Expert",
        "masteryLevel": "Expert",
        "xpReward": 75,
        "badge": "🎯 Perturbateur",
        "africanAnalogy": "Résoudre un problème compliqué en partant d'un problème simple que l'on pousse un peu. Comme prédire la trajectoire d'une pirogue par vent calme, puis ajouter l'effet d'une petite brise.",
        "theory": {
            "title": "Séries de Perturbation",
            "content": "Méthode pour trouver des solutions approchées à des problèmes non résolubles exactement, en ajoutant un petit paramètre ε.",
            "mathematicalFoundation": "x = x₀ + εx₁ + ε²x₂ + ...\nSubstituer dans l'équation et résoudre ordre par ordre.",
            "scientists": [
                {
                    "name": "Henri Poincaré",
                    "year": "1890",
                    "contribution": "Méthodes de perturbation",
                    "context": "Problème des 3 corps"
                }
            ]
        },
        "code": "from sympy import symbols, series, Function, Eq\neps = symbols('eps')\n# x^2 + x + eps = 0\n# Racine proche de 0 ?",
        "output": "Développement asymptotique",
        "exercises": [
            "Anharmonicité du pendule",
            "Effet Zeeman (Quantique)",
            "Précession de Mercure"
        ],
        "practicalApplication": "Mécanique céleste (orbites), chimie quantique, ingénierie."
    },
    {
        "id": "day_099",
        "title": "PROJET : Simulation Solaire",
        "difficulty": "Légendaire",
        "masteryLevel": "Maître",
        "xpReward": 150,
        "badge": "☀️ Architecte Stellaire",
        "africanAnalogy": "Avant le Grand Œuvre, il faut maîtriser le feu du soleil. Ce projet rassemble thermodynamique, gravité, nucléaire et mécanique des fluides pour modéliser une étoile.",
        "theory": {
            "title": "Modèle Stellaire Standard",
            "content": "Intégration de toutes les compétences : EDO, équilibre hydrostatique, transport d'énergie, réactions nucléaires.",
            "mathematicalFoundation": "dP/dr = -GMρ/r²\ndL/dr = 4πr²ρε\ndT/dr = ...\nSystème couplé complexe.",
            "scientists": [
                {
                    "name": "Arthur Eddington",
                    "year": "1920",
                    "contribution": "Structure interne des étoiles",
                    "context": ""
                }
            ]
        },
        "code": "from sympy import symbols\n# Projet libre : Construire un solver complet\n# Entrée : Masse étoile, Composition\n# Sortie : Rayon, Luminosité, Durée de vie",
        "output": "Le Soleil simulé",
        "exercises": [
            "Coder le système d'équations",
            "Résoudre numériquement (scipy/sympy)",
            "Tracer le diagramme HR"
        ],
        "practicalApplication": "Astrophysique, fusion nucléaire (Iter)."
    },
    {
        "id": "day_100",
        "title": "PROJET FINAL : Le Grand Œuvre",
        "difficulty": "Mythique",
        "masteryLevel": "Légende",
        "xpReward": 500,
        "badge": "👑 Maître SymPy",
        "africanAnalogy": "La construction de la Grande Mosquée de Djenné nécessite la coordination de tout le village, de l'eau, de la terre, du bois et du savoir-faire ancestral. Ce projet est votre monument. Il combine tout ce que vous avez appris en une simulation unique et personnelle.",
        "theory": {
            "title": "Synthèse Totale",
            "content": "Création d'un moteur scientifique complet capable de simuler un phénomène complexe du monde réel au choix (Météo, Finance, Univers, Cerveau).",
            "mathematicalFoundation": "Tout le curriculum.",
            "scientists": [
                {
                    "name": "Vous",
                    "year": "2024",
                    "contribution": "Maîtrise de SymPy",
                    "context": "Nouvelle génération de scientifiques"
                }
            ]
        },
        "code": "# LE GRAND ŒUVRE\n# 1. Choisir un domaine (Physique, Bio, Finance...)\n# 2. Modéliser (Équations)\n# 3. Résoudre (SymPy)\n# 4. Simuler (NumPy/C)\n# 5. Visualiser (Plot)\n# Votre chef-d'œuvre commence ici.",
        "output": "La connaissance absolue",
        "exercises": [
            "Valider le modèle",
            "Optimiser la performance",
            "Publier les résultats (Notebook)"
        ],
        "practicalApplication": "Carrière scientifique, R&D, Innovation."
    }
];

// Système de progression (déverrouillage désactivé)
export const progressionSystem = {
    getTotalXP: (completedDays) => {
        return completedDays.reduce((total, dayId) => {
            const challenge = challengesEnriched.find(c => c && c.id === dayId);
            return total + (challenge?.xpReward || 0);
        }, 0);
    },

    getLevel: (xp) => {
        if (xp < 500) return { level: 1, title: 'Novice' };
        if (xp < 1500) return { level: 2, title: 'Apprenti' };
        if (xp < 3000) return { level: 3, title: 'Pratiquant' };
        if (xp < 5000) return { level: 4, title: 'Expert' };
        if (xp < 8000) return { level: 5, title: 'Maître' };
        return { level: 6, title: 'Légende SymPy' };
    },

    isUnlocked: (dayNumber, completedDays) => {
        // Tous les jours sont déverrouillés pour le moment
        return true;
    }
};

// Badges et récompenses
export const badges = {
    '🎯 Premier Pas': 'Commencer le voyage SymPy',
    '🔤 Maître des Symboles': 'Maîtriser les variables symboliques',
    '🔧 Manipulateur': 'Exceller en manipulation algébrique',
    '🎯 Résolveur': 'Résoudre des équations complexes',
    '📐 Visualiseur': 'Maîtriser l\'affichage LaTeX',
    '📊 Analyste Polynomial': 'Expert en polynômes',
    '🔬 Simplificateur': 'Simplifier les expressions',
    '⚖️ Équilibriste': 'Comprendre exact vs numérique',
    '📈 Dérivateur': 'Maîtriser le calcul différentiel',
    '∫ Intégrateur': 'Maîtriser le calcul intégral',
    '🏛️ Architecte': 'Valider le niveau Débutant',
    '⚛️ Ingénieur Quantique': 'Valider le niveau Intermédiaire',
    '🔐 Gardien du Secret': 'Valider le niveau Avancé',
    '👑 Maître SymPy': 'Terminer le Grand Œuvre'
};
