// Données enrichies pour les challenges avec théorie, histoire, gamification et analogies africaines
export const challengesEnriched = [
    {
        id: 'day_001',
        dayNumber: 1,
        title: 'Installation & Premier Notebook',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 10,
        badge: '🎯 Premier Pas',
        africanAnalogy: `Comme un griot qui transmet l'histoire exacte de génération en génération sans altération, le calcul symbolique préserve la vérité mathématique sans approximation. Tandis que le calcul numérique est comme raconter une histoire en résumé, le calcul symbolique garde chaque détail intact.`,
        theory: {
            title: 'Introduction au Calcul Symbolique',
            content: `Le calcul symbolique permet de manipuler des expressions mathématiques de manière exacte, sans approximation numérique. Contrairement au calcul numérique qui travaille avec des nombres décimaux (ex: π ≈ 3.14159), le calcul symbolique conserve les symboles exacts (π reste π).`,
            mathematicalFoundation: `
                **Fondements Mathématiques :**
                - Algèbre symbolique : manipulation d'expressions avec variables
                - Théorie des anneaux et corps
                - Calcul formel vs calcul numérique
                
                **Exemple :**
                Numérique : √2 ≈ 1.414213...
                Symbolique : √2 reste √2 (exact)
            `,
            scientists: [
                {
                    name: 'Stephen Wolfram',
                    year: '1988',
                    contribution: 'Créateur de Mathematica, pionnier du calcul symbolique moderne',
                    context: 'Révolutionne le calcul scientifique en rendant les mathématiques symboliques accessibles'
                },
                {
                    name: 'Ondřej Čertík',
                    year: '2006',
                    contribution: 'Fondateur de SymPy, bibliothèque Python open-source',
                    context: 'Démocratise le calcul symbolique avec un outil gratuit et accessible à tous'
                }
            ]
        },
        code: `import sympy as sp\nsp.__version__`,
        output: 'version (ex: 1.12)',
        exercises: [
            'Installer SymPy avec pip install sympy',
            'Vérifier la version installée',
            'Créer votre premier notebook Jupyter'
        ],
        practicalApplication: 'Le calcul symbolique est utilisé en physique théorique, ingénierie, cryptographie et IA.'
    },
    {
        id: 'day_002',
        dayNumber: 2,
        title: 'Symbols & Types',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 15,
        badge: '🔤 Maître des Symboles',
        africanAnalogy: `Les symboles mathématiques sont comme les tam-tams qui transmettent des messages à distance. Chaque symbole (x, y, z) porte une signification, tout comme chaque rythme de tam-tam a son message. Le mathématicien compose avec ces symboles comme le joueur de tam-tam compose ses rythmes.`,
        theory: {
            title: 'Théorie des Variables Symboliques',
            content: `En mathématiques, une variable est un symbole représentant une quantité inconnue ou variable. SymPy permet de créer ces symboles et de les manipuler algébriquement.`,
            mathematicalFoundation: `
                **Algèbre des Symboles :**
                - Variable : x, y, z ∈ ℝ (ou ℂ)
                - Expression : f(x) = ax² + bx + c
                - Domaine de définition : ℝ, ℤ, ℚ, ℂ
                
                **Types de Symboles :**
                - Réels : x ∈ ℝ
                - Entiers : n ∈ ℤ
                - Positifs : a > 0
                - Complexes : z ∈ ℂ
            `,
            scientists: [
                {
                    name: 'François Viète',
                    year: '1591',
                    contribution: 'Père de l\'algèbre moderne, introduit les lettres pour les inconnues',
                    context: 'Révolutionne les mathématiques en créant un langage symbolique universel'
                },
                {
                    name: 'René Descartes',
                    year: '1637',
                    contribution: 'Standardise la notation algébrique (x, y, z pour inconnues)',
                    context: 'Unifie géométrie et algèbre, créant la géométrie analytique'
                }
            ]
        },
        code: `from sympy import symbols\nx, y = symbols('x y')\nexpr = x + 2*y\nexpr`,
        output: 'x + 2*y',
        exercises: [
            'Créer des symboles avec différentes propriétés (positif, entier, réel)',
            'Construire une expression polynomiale',
            'Substituer des valeurs dans une expression'
        ],
        practicalApplication: 'Variables symboliques essentielles en modélisation, optimisation et EDO.'
    },
    {
        id: 'day_003',
        dayNumber: 3,
        title: 'Manipulations de Base',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 20,
        badge: '🔧 Manipulateur',
        africanAnalogy: `Développer une expression mathématique, c'est comme déplier un pagne wax pour voir tous ses motifs. Factoriser, c'est replier le pagne pour retrouver sa forme compacte. Les deux vues (dépliée et pliée) montrent la même beauté, juste sous des formes différentes.`,
        theory: {
            title: 'Algèbre des Polynômes',
            content: `Un polynôme est une expression de la forme P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. Les opérations de base incluent l'expansion, la factorisation et la simplification.`,
            mathematicalFoundation: `
                **Identités Remarquables :**
                - (a + b)² = a² + 2ab + b²
                - (a - b)² = a² - 2ab + b²
                - (a + b)³ = a³ + 3a²b + 3ab² + b³
                - a² - b² = (a + b)(a - b)
                
                **Binôme de Newton :**
                (a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ
                où C(n,k) = n!/(k!(n-k)!)
            `,
            scientists: [
                {
                    name: 'Isaac Newton',
                    year: '1665',
                    contribution: 'Formule du binôme de Newton pour développer (a+b)ⁿ',
                    context: 'Découverte pendant la peste de Londres, révolutionne l\'analyse mathématique'
                },
                {
                    name: 'Blaise Pascal',
                    year: '1654',
                    contribution: 'Triangle de Pascal pour les coefficients binomiaux',
                    context: 'Lie probabilités et combinatoire, fondant les mathématiques modernes'
                }
            ]
        },
        code: `from sympy import symbols, expand, factor\nx = symbols('x')\nexpand((x+1)**3)`,
        output: 'x³ + 3x² + 3x + 1',
        exercises: [
            'Développer (x+2)⁴',
            'Factoriser x² - 4',
            'Simplifier (x²-1)/(x-1)'
        ],
        practicalApplication: 'Manipulation polynomiale cruciale en traitement du signal, compression et cryptographie RSA.'
    },
    {
        id: 'day_004',
        dayNumber: 4,
        title: 'Résolution d\'Équations Simples',
        difficulty: 'Débutant',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 25,
        badge: '🎯 Résolveur',
        africanAnalogy: `Résoudre une équation, c'est comme retrouver l'équilibre d'une balance au marché. Le commerçant ajuste les poids (x) jusqu'à ce que les deux plateaux soient égaux. Les solutions sont les valeurs qui rétablissent parfaitement l'équilibre.`,
        theory: {
            title: 'Théorie des Équations Algébriques',
            content: `Une équation est une égalité contenant une ou plusieurs inconnues. Résoudre une équation, c'est trouver toutes les valeurs qui rendent l'égalité vraie.`,
            mathematicalFoundation: `
                **Équations du Second Degré :**
                ax² + bx + c = 0
                
                **Formule de Viète (1591) :**
                x = (-b ± √(b² - 4ac)) / 2a
                
                **Discriminant Δ :**
                Δ = b² - 4ac
                - Δ > 0 : 2 solutions réelles distinctes
                - Δ = 0 : 1 solution double
                - Δ < 0 : 2 solutions complexes conjuguées
                
                **Relations de Viète :**
                Si x₁ et x₂ sont les racines :
                - x₁ + x₂ = -b/a (somme)
                - x₁ × x₂ = c/a (produit)
            `,
            scientists: [
                {
                    name: 'Al-Khwarizmi',
                    year: '820',
                    contribution: 'Père de l\'algèbre, méthodes de résolution d\'équations quadratiques',
                    context: 'Mathématicien perse dont le nom a donné le mot "algorithme"'
                },
                {
                    name: 'François Viète',
                    year: '1591',
                    contribution: 'Formules reliant coefficients et racines d\'un polynôme',
                    context: 'Cryptanalyste du roi de France, utilise l\'algèbre pour décoder des messages'
                },
                {
                    name: 'Évariste Galois',
                    year: '1832',
                    contribution: 'Théorie de Galois : conditions de résolubilité par radicaux',
                    context: 'Génie mort à 20 ans en duel, révolutionne l\'algèbre moderne'
                }
            ]
        },
        code: `from sympy import symbols, Eq, solve\nx = symbols('x')\nsolve(Eq(x**2-5*x+6,0), x)`,
        output: '[2, 3]',
        exercises: [
            'Résoudre x² - 4 = 0',
            'Résoudre 2x² + 3x - 2 = 0',
            'Vérifier les solutions avec les relations de Viète'
        ],
        practicalApplication: 'Équations quadratiques pour trajectoires paraboliques, optimisation économique, circuits RLC.'
    },
    {
        id: 'day_005',
        dayNumber: 5,
        title: 'Affichage Mathématique',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 15,
        badge: '📐 Visualiseur',
        africanAnalogy: `LaTeX est comme l'écriture Tifinagh des Touaregs ou les symboles Adinkra des Akan : un système d'écriture qui capture la beauté et la précision des idées. Chaque symbole mathématique est soigneusement dessiné, comme les motifs sacrés sur les tissus traditionnels.`,
        theory: {
            title: 'Notation Mathématique et LaTeX',
            content: `LaTeX est le langage standard pour écrire des formules mathématiques. Il permet une représentation précise et élégante des expressions.`,
            mathematicalFoundation: `
                **Notations Fondamentales :**
                - Fractions : \\frac{a}{b}
                - Racines : \\sqrt{x}, \\sqrt[n]{x}
                - Intégrales : \\int_{a}^{b} f(x) dx
                - Sommes : \\sum_{i=1}^{n} a_i
                - Limites : \\lim_{x \\to a} f(x)
                
                **Symboles Grecs :**
                α (alpha), β (beta), γ (gamma), δ (delta)
                π (pi), σ (sigma), ω (omega)
                Δ (Delta), Σ (Sigma), Π (Pi)
            `,
            scientists: [
                {
                    name: 'Donald Knuth',
                    year: '1978',
                    contribution: 'Créateur de TeX, système de composition typographique',
                    context: 'Informaticien légendaire, insatisfait de la qualité d\'impression de ses livres'
                },
                {
                    name: 'Leslie Lamport',
                    year: '1984',
                    contribution: 'Créateur de LaTeX, extension conviviale de TeX',
                    context: 'Rend TeX accessible aux scientifiques non-experts en typographie'
                }
            ]
        },
        code: `from sympy import symbols, integrate, sin, pi, latex\nx = symbols('x')\nexpr = integrate(sin(x)/x, (x,0,pi))\nprint(latex(expr))`,
        output: '\\frac{\\pi}{2}',
        exercises: [
            'Afficher une fraction en LaTeX',
            'Afficher une intégrale complexe',
            'Utiliser pprint() pour un affichage ASCII'
        ],
        practicalApplication: 'LaTeX est le standard dans les publications scientifiques, thèses et articles de recherche.'
    },
    {
        id: 'day_006',
        dayNumber: 6,
        title: 'Polynômes',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '📊 Analyste Polynomial',
        africanAnalogy: `Un polynôme est comme un baobab : ses racines (solutions) sont cachées sous terre, mais déterminent toute la structure de l'arbre. Le théorème fondamental de l'algèbre garantit que chaque polynôme a ses racines, comme chaque baobab a les siennes, même si on ne les voit pas toujours.`,
        theory: {
            title: 'Théorie des Polynômes',
            content: `Un polynôme de degré n a au plus n racines (réelles ou complexes). Le théorème fondamental de l'algèbre garantit l'existence de ces racines dans ℂ.`,
            mathematicalFoundation: `
                **Théorème Fondamental de l'Algèbre (Gauss, 1799) :**
                Tout polynôme de degré n ≥ 1 à coefficients complexes 
                possède exactement n racines dans ℂ (comptées avec multiplicité).
                
                **Décomposition en Facteurs :**
                P(x) = aₙ(x - r₁)(x - r₂)...(x - rₙ)
                où r₁, r₂, ..., rₙ sont les racines
                
                **Polynômes Remarquables :**
                - Tchebychev : approximation optimale
                - Legendre : solutions d'EDO
                - Hermite : mécanique quantique
            `,
            scientists: [
                {
                    name: 'Carl Friedrich Gauss',
                    year: '1799',
                    contribution: 'Démonstration du théorème fondamental de l\'algèbre',
                    context: 'Prince des mathématiciens, génie précoce qui révolutionne plusieurs domaines'
                },
                {
                    name: 'Niels Henrik Abel',
                    year: '1824',
                    contribution: 'Impossibilité de résoudre par radicaux les équations de degré ≥ 5',
                    context: 'Mathématicien norvégien mort à 26 ans dans la pauvreté, génie méconnu'
                }
            ]
        },
        code: `from sympy import symbols, Poly\nx = symbols('x')\np = Poly(x**4-5*x**2+4, x)\np.all_roots()`,
        output: '[-2, -1, 1, 2]',
        exercises: [
            'Trouver les racines de x³ - 6x² + 11x - 6',
            'Décomposer en facteurs premiers',
            'Calculer le PGCD de deux polynômes'
        ],
        practicalApplication: 'Polynômes pour courbes de Bézier (graphisme), filtres numériques, codes correcteurs.'
    },
    {
        id: 'day_007',
        dayNumber: 7,
        title: 'Simplification Rationnelle',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🔬 Simplificateur',
        africanAnalogy: `Décomposer une fraction rationnelle, c'est comme partager équitablement la récolte entre plusieurs familles. Au lieu d'une grosse part complexe, on divise en parts simples que chacun peut comprendre et utiliser. Chaque famille (terme simple) reçoit sa juste part.`,
        theory: {
            title: 'Fractions Rationnelles et Décomposition',
            content: `Une fraction rationnelle est le quotient de deux polynômes. La décomposition en éléments simples permet de simplifier l'intégration et l'analyse.`,
            mathematicalFoundation: `
                **Décomposition en Éléments Simples :**
                Pour F(x) = P(x)/Q(x) avec deg(P) < deg(Q)
                
                Si Q(x) = (x-a)ⁿ(x-b)ᵐ... alors :
                F(x) = A₁/(x-a) + A₂/(x-a)² + ... + B₁/(x-b) + ...
                
                **Théorème de Heaviside (1893) :**
                Méthode des résidus pour calculer les coefficients
                
                **Applications :**
                - Transformée de Laplace inverse
                - Intégration de fractions rationnelles
                - Analyse de circuits électriques
            `,
            scientists: [
                {
                    name: 'Leonhard Euler',
                    year: '1748',
                    contribution: 'Développement de la théorie des fractions rationnelles',
                    context: 'Mathématicien le plus prolifique de l\'histoire, aveugle mais toujours productif'
                },
                {
                    name: 'Oliver Heaviside',
                    year: '1893',
                    contribution: 'Méthode des résidus et calcul opérationnel',
                    context: 'Ingénieur autodidacte qui révolutionne l\'électromagnétisme'
                }
            ]
        },
        code: `from sympy import symbols, apart\nx = symbols('x')\napart((x**2+1)/(x*(x-1)))`,
        output: '-1/x + 2/(x-1) + 1',
        exercises: [
            'Décomposer 1/(x²-1)',
            'Décomposer (x+1)/(x²+x)',
            'Intégrer une fraction rationnelle après décomposition'
        ],
        practicalApplication: 'Décomposition essentielle en automatique (fonction de transfert) et traitement du signal.'
    },
    {
        id: 'day_008',
        dayNumber: 8,
        title: 'Numérique vs Symbolique',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 25,
        badge: '⚖️ Équilibriste',
        africanAnalogy: `Le calcul exact est comme peser l'or avec une balance traditionnelle à fléau : précis et fiable. Le calcul numérique est comme estimer à l'œil : rapide mais approximatif. Pour le commerce de l'or (cryptographie), on préfère la balance exacte. Pour estimer un sac de mil (simulation), l'œil suffit.`,
        theory: {
            title: 'Calcul Exact vs Approximation',
            content: `Le calcul symbolique conserve la précision exacte, tandis que le calcul numérique utilise des approximations en virgule flottante.`,
            mathematicalFoundation: `
                **Arithmétique Exacte :**
                - Rationnels : 1/3 reste 1/3 (pas 0.333...)
                - Irrationnels : √2, π, e restent symboliques
                - Précision arbitraire : calcul avec 1000 décimales
                
                **Erreurs Numériques :**
                - Arrondi : 0.1 + 0.2 ≠ 0.3 en binaire
                - Propagation : erreurs cumulatives
                - Stabilité : algorithmes numériquement stables
                
                **Théorème (Wilkinson, 1963) :**
                Certains problèmes sont mal conditionnés :
                petite erreur → grande variation du résultat
            `,
            scientists: [
                {
                    name: 'John von Neumann',
                    year: '1947',
                    contribution: 'Analyse de la stabilité numérique et arithmétique flottante',
                    context: 'Pionnier de l\'informatique et de la bombe atomique'
                },
                {
                    name: 'James Wilkinson',
                    year: '1963',
                    contribution: 'Analyse d\'erreur et conditionnement des problèmes',
                    context: 'Expert en algèbre linéaire numérique, révèle les pièges du calcul flottant'
                }
            ]
        },
        code: `import sympy as sp\n# Exact\nsp.sqrt(2)\n# Numérique avec 50 décimales\nsp.N(sp.pi, 50)`,
        output: 'π avec 50 décimales',
        exercises: [
            'Comparer √2 symbolique et numérique',
            'Calculer e avec 100 décimales',
            'Montrer l\'erreur de 0.1 + 0.2 en Python standard'
        ],
        practicalApplication: 'Calcul exact crucial en cryptographie (grands nombres premiers) et vérification formelle.'
    },
    {
        id: 'day_009',
        dayNumber: 9,
        title: 'Dérivation Symbolique',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 35,
        badge: '📈 Dérivateur',
        africanAnalogy: `La dérivée mesure la pente, comme l'inclinaison d'une colline au Fouta Djallon. À chaque point du chemin, la dérivée indique si ça monte fort, doucement, ou si c'est plat. Le berger peul utilise cette connaissance pour guider son troupeau vers les meilleurs pâturages.`,
        theory: {
            title: 'Calcul Différentiel',
            content: `La dérivée mesure le taux de variation instantané d'une fonction. C'est le concept fondamental du calcul infinitésimal.`,
            mathematicalFoundation: `
                **Définition (Newton-Leibniz, 1670) :**
                f'(x) = lim[h→0] (f(x+h) - f(x))/h
                
                **Règles de Dérivation :**
                - (uv)' = u'v + uv' (Leibniz)
                - (u/v)' = (u'v - uv')/v²
                - (f∘g)' = f'(g)·g' (chaîne)
                - (fⁿ)' = n·fⁿ⁻¹·f'
                
                **Dérivées Remarquables :**
                - (eˣ)' = eˣ
                - (ln x)' = 1/x
                - (sin x)' = cos x
                - (xⁿ)' = nxⁿ⁻¹
            `,
            scientists: [
                {
                    name: 'Isaac Newton',
                    year: '1665',
                    contribution: 'Invention du calcul différentiel (fluxions)',
                    context: 'Découverte pendant la peste, révolutionne physique et mathématiques'
                },
                {
                    name: 'Gottfried Leibniz',
                    year: '1675',
                    contribution: 'Notation moderne dy/dx et règles de dérivation',
                    context: 'Philosophe et mathématicien, invente le calcul indépendamment de Newton'
                },
                {
                    name: 'Augustin-Louis Cauchy',
                    year: '1821',
                    contribution: 'Formalisation rigoureuse des limites et dérivées',
                    context: 'Rend le calcul infinitésimal mathématiquement rigoureux'
                }
            ]
        },
        code: `from sympy import symbols, diff, exp, sin\nx = symbols('x')\ndiff(exp(x)*sin(x), x)`,
        output: 'eˣ·sin(x) + eˣ·cos(x)',
        exercises: [
            'Dériver x³·ln(x)',
            'Dériver sin(x²)',
            'Calculer la dérivée n-ième de eˣ'
        ],
        practicalApplication: 'Dérivées essentielles en optimisation (ML), physique (vitesse, accélération), économie (coût marginal).'
    },
    {
        id: 'day_010',
        dayNumber: 10,
        title: 'Intégration Symbolique',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 40,
        badge: '∫ Intégrateur',
        africanAnalogy: `L'intégrale calcule l'aire totale, comme mesurer la surface d'un champ de mil. Au lieu de compter chaque grain, on calcule l'aire totale du champ. De même, l'intégrale additionne une infinité de petites quantités pour obtenir le total. C'est la sagesse du tout qui dépasse la somme des parties.`,
        theory: {
            title: 'Calcul Intégral',
            content: `L'intégrale est l'opération inverse de la dérivation. Elle permet de calculer des aires, volumes, et résoudre des équations différentielles.`,
            mathematicalFoundation: `
                **Théorème Fondamental du Calcul (Newton-Leibniz) :**
                ∫ₐᵇ f'(x)dx = f(b) - f(a)
                
                **Intégrales Remarquables :**
                - ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C
                - ∫ eˣ dx = eˣ + C
                - ∫ 1/x dx = ln|x| + C
                - ∫ sin(x) dx = -cos(x) + C
                
                **Méthodes d'Intégration :**
                - Substitution : u = g(x)
                - Parties : ∫ uv' = uv - ∫ u'v
                - Fractions rationnelles : décomposition
                
                **Intégrales Spéciales :**
                - Gaussienne : ∫₋∞^∞ e⁻ˣ² dx = √π
                - Dirichlet : ∫₀^∞ sin(x)/x dx = π/2
            `,
            scientists: [
                {
                    name: 'Isaac Newton',
                    year: '1665',
                    contribution: 'Théorème fondamental du calcul intégral',
                    context: 'Unifie dérivation et intégration, révolution mathématique'
                },
                {
                    name: 'Bernhard Riemann',
                    year: '1854',
                    contribution: 'Définition rigoureuse de l\'intégrale (sommes de Riemann)',
                    context: 'Génie qui révolutionne géométrie et analyse'
                },
                {
                    name: 'Henri Lebesgue',
                    year: '1902',
                    contribution: 'Théorie de la mesure et intégrale de Lebesgue',
                    context: 'Généralise l\'intégrale de Riemann, fondement de l\'analyse moderne'
                }
            ]
        },
        code: `from sympy import symbols, integrate, exp, oo\nx = symbols('x')\nintegrate(exp(-x**2), (x, -oo, oo))`,
        output: '√π',
        exercises: [
            'Intégrer x·eˣ par parties',
            'Calculer ∫₀^π sin²(x) dx',
            'Intégrer 1/(1+x²) et retrouver arctan'
        ],
        practicalApplication: 'Intégrales pour probabilités (lois continues), énergies (physique), volumes (géométrie).'
    }
];

// Système de progression (déverrouillage désactivé)
export const progressionSystem = {
    getTotalXP: (completedDays) => {
        return completedDays.reduce((total, dayId) => {
            const challenge = challengesEnriched.find(c => c.id === dayId);
            return total + (challenge?.xpReward || 0);
        }, 0);
    },

    getLevel: (xp) => {
        if (xp < 50) return { level: 1, title: 'Novice' };
        if (xp < 150) return { level: 2, title: 'Apprenti' };
        if (xp < 300) return { level: 3, title: 'Pratiquant' };
        if (xp < 500) return { level: 4, title: 'Expert' };
        return { level: 5, title: 'Maître SymPy' };
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
    '∫ Intégrateur': 'Maîtriser le calcul intégral'
};
