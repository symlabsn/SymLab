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
    },
    {
        id: 'day_011',
        dayNumber: 11,
        title: 'Limites',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 25,
        badge: '🏅 Limites',
        africanAnalogy: `La limite est comme s'approcher d'un puits sans jamais tomber dedans. On peut être aussi près qu'on veut du bord, à une distance infinitésimale, mais on reste sur la terre ferme. C'est l'art de frôler l'infini.`,
        theory: {
            title: 'Calcul de Limites',
            content: `La limite décrit le comportement d'une fonction lorsqu'elle s'approche d'un point donné. C'est le concept fondateur de la continuité, de la dérivation et de l'intégration.`,
            mathematicalFoundation: `
                    - Définition (ε-δ) : ∀ε>0, ∃δ>0 t.q. |x-a|<δ ⇒ |f(x)-L|<ε\n                - Limites à l'infini : comportement asymptotique\n                - Continuité : lim f(x) = f(a)\n                - Règle de L'Hôpital : pour les formes indéterminées 0/0 ou ∞/∞
                `,
            scientists: [
                {
                    name: 'Augustin-Louis Cauchy',
                    year: '1821',
                    contribution: 'Définition rigoureuse de la limite',
                    context: 'Formalise l\'analyse mathématique moderne'
                },
                {
                    name: 'Karl Weierstrass',
                    year: '1872',
                    contribution: 'Définition epsilon-delta',
                    context: 'Le père de l\'analyse moderne, rigueur absolue'
                },
            ]
        },
        code: `from sympy import symbols, limit, sin, oo
x = symbols('x')
limit(sin(x)/x, x, 0)`,
        output: '1',
        exercises: [
            'Calculer la limite de (1+1/x)^x en l\'infini',
            'Trouver la limite de (x²-1)/(x-1) en 1',
            'Étudier la limite de tan(x) en pi/2',
        ],
        practicalApplication: 'Analyse de stabilité, comportement asymptotique des algorithmes, physique théorique.'
    },
    {
        id: 'day_012',
        dayNumber: 12,
        title: 'Séries de Taylor',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 35,
        badge: '🏅 Séries de Taylor',
        africanAnalogy: `Une série de Taylor est comme reconstruire un arbre entier à partir d'une seule graine et de son code génétique. En connaissant la fonction et toutes ses dérivées en un seul point, on peut (souvent) reconstruire la fonction partout.`,
        theory: {
            title: 'Développement en Série',
            content: `Les séries de Taylor permettent d'approximer des fonctions complexes par des polynômes. Plus on ajoute de termes, plus l'approximation est précise.`,
            mathematicalFoundation: `
                    - Formule : f(x) = Σ f⁽ⁿ⁾(a)/n! * (x-a)ⁿ\n                - Série de Maclaurin : Taylor en a=0\n                - Reste de Lagrange : erreur de l'approximation\n                - Rayon de convergence : domaine de validité
                `,
            scientists: [
                {
                    name: 'Brook Taylor',
                    year: '1715',
                    contribution: 'Théorème de Taylor',
                    context: 'Mathématicien anglais, travaux sur les cordes vibrantes'
                },
                {
                    name: 'Colin Maclaurin',
                    year: '1742',
                    contribution: 'Cas particulier en 0',
                    context: 'Prodige écossais, professeur à 19 ans'
                },
            ]
        },
        code: `from sympy import symbols, sin, series
x = symbols('x')
series(sin(x), x, 0, 6)`,
        output: 'x - x³/6 + x⁵/120 + O(x⁶)',
        exercises: [
            'Développer e^x à l\'ordre 5',
            'Trouver la série de cos(x)',
            'Approximer ln(1+x) autour de 0',
        ],
        practicalApplication: 'Calculatrices (sin, cos), physique (petites oscillations), méthodes numériques.'
    },
    {
        id: 'day_013',
        dayNumber: 13,
        title: 'Matrices',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Matrices',
        africanAnalogy: `Une matrice est comme un tableau de tissage. Chaque ligne et chaque colonne a sa place et son rôle. Multiplier des matrices, c'est comme croiser les fils pour créer un motif complexe à partir de motifs simples.`,
        theory: {
            title: 'Algèbre Linéaire',
            content: `Les matrices sont des tableaux de nombres permettant de représenter des transformations linéaires et de résoudre des systèmes d'équations.`,
            mathematicalFoundation: `
                    - Opérations : addition, multiplication, transposition\n                - Déterminant : mesure du changement de volume\n                - Inverse : A⁻¹ t.q. AA⁻¹ = I\n                - Rang : dimension de l'image
                `,
            scientists: [
                {
                    name: 'Arthur Cayley',
                    year: '1858',
                    contribution: 'Définition moderne de la multiplication matricielle',
                    context: 'Avocat et mathématicien, fonde la théorie des matrices'
                },
                {
                    name: 'James Sylvester',
                    year: '1850',
                    contribution: 'Invente le terme \'matrice\'',
                    context: 'Poète et mathématicien, ami de Cayley'
                },
            ]
        },
        code: `from sympy import Matrix, eye
A = Matrix([[1, 2], [3, 4]])
A.det()`,
        output: '-2',
        exercises: [
            'Calculer l\'inverse d\'une matrice 2x2',
            'Multiplier deux matrices 3x3',
            'Calculer la trace d\'une matrice',
        ],
        practicalApplication: 'Graphisme 3D, mécanique quantique, réseaux de neurones (Deep Learning).'
    },
    {
        id: 'day_014',
        dayNumber: 14,
        title: 'Valeurs Propres',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 40,
        badge: '🏅 Valeurs Propres',
        africanAnalogy: `Les vecteurs propres sont les piliers inébranlables d'une transformation. Quand tout tourne et se déforme autour d'eux, eux gardent leur direction, ne changeant que de taille (valeur propre). Ce sont les axes de stabilité du monde.`,
        theory: {
            title: 'Spectre d\'une Matrice',
            content: `Les valeurs propres (λ) et vecteurs propres (v) satisfont Av = λv. Ils caractérisent la transformation représentée par la matrice.`,
            mathematicalFoundation: `
                    - Équation caractéristique : det(A - λI) = 0\n                - Diagonalisation : A = PDP⁻¹\n                - Théorème spectral : matrices symétriques réelles\n                - Espaces propres : noyau de (A - λI)
                `,
            scientists: [
                {
                    name: 'David Hilbert',
                    year: '1900',
                    contribution: 'Théorie spectrale',
                    context: 'Géant des maths, pose les 23 problèmes du siècle'
                },
                {
                    name: 'John von Neumann',
                    year: '1932',
                    contribution: 'Fondements mathématiques de la mécanique quantique',
                    context: 'Utilise les opérateurs hermitiens pour les observables'
                },
            ]
        },
        code: `from sympy import Matrix
A = Matrix([[1, 2], [2, 1]])
A.eigenvals()`,
        output: '{-1: 1, 3: 1} (valeur: multiplicité)',
        exercises: [
            'Trouver les vecteurs propres de la matrice',
            'Diagonaliser une matrice 2x2',
            'Vérifier le théorème de Cayley-Hamilton',
        ],
        practicalApplication: 'Vibrations (modes propres), Google PageRank, reconnaissance faciale (Eigenfaces).'
    },
    {
        id: 'day_015',
        dayNumber: 15,
        title: 'Systèmes Linéaires',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Systèmes Linéaires',
        africanAnalogy: `Un système linéaire est comme un nœud complexe de cordes. Chaque équation est une corde qui tire. La solution est le point d'équilibre où toutes les tensions s'annulent.`,
        theory: {
            title: 'Résolution de Systèmes',
            content: `Un système linéaire Ax = b cherche le vecteur x. SymPy peut résoudre ces systèmes de manière exacte, même avec des paramètres symboliques.`,
            mathematicalFoundation: `
                    - Méthode de Gauss : échelonnement\n                - Règle de Cramer : xᵢ = det(Aᵢ)/det(A)\n                - Systèmes sous/sur-déterminés\n                - Solutions paramétriques
                `,
            scientists: [
                {
                    name: 'Carl Friedrich Gauss',
                    year: '1810',
                    contribution: 'Élimination de Gauss',
                    context: 'Utilisé pour calculer l\'orbite de l\'astéroïde Cérès'
                },
                {
                    name: 'Gabriel Cramer',
                    year: '1750',
                    contribution: 'Règle de Cramer',
                    context: 'Méthode élégante mais coûteuse pour les systèmes'
                },
            ]
        },
        code: `from sympy import symbols, linsolve
x, y, z = symbols('x y z')
linsolve([x + y + z - 1, x + y + 2*z - 3], (x, y, z))`,
        output: '{(1 - y - z, y, 2)}',
        exercises: [
            'Résoudre un système 3x3 unique',
            'Résoudre un système paramétrique',
            'Trouver l\'intersection de deux plans',
        ],
        practicalApplication: 'Circuits électriques (Kirchhoff), équilibre statique, optimisation linéaire.'
    },
    {
        id: 'day_016',
        dayNumber: 16,
        title: 'Équations Différentielles',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 45,
        badge: '🏅 Équations Différentielles',
        africanAnalogy: `Une équation différentielle est la règle du jeu de la nature. Elle ne dit pas où on est, mais comment on bouge. Résoudre l'EDO, c'est prédire tout le voyage à partir de la règle de mouvement.`,
        theory: {
            title: 'EDO (Équations Différentielles Ordinaires)',
            content: `Une EDO lie une fonction à ses dérivées. C'est le langage naturel de la physique pour décrire l'évolution des systèmes.`,
            mathematicalFoundation: `
                    - Ordre : dérivée la plus haute\n                - Linéarité : a(x)y'' + b(x)y' + c(x)y = f(x)\n                - Conditions initiales : y(0) = y₀\n                - Séparation des variables
                `,
            scientists: [
                {
                    name: 'Leonhard Euler',
                    year: '1750',
                    contribution: 'Méthodes de résolution et approximation',
                    context: 'Fonde la mécanique analytique'
                },
                {
                    name: 'Joseph-Louis Lagrange',
                    year: '1788',
                    contribution: 'Variation des constantes',
                    context: 'Mécanique céleste et analytique'
                },
            ]
        },
        code: `from sympy import Function, dsolve, Eq, Derivative, symbols
y = Function('y')
x = symbols('x')
dsolve(Eq(y(x).diff(x, x) - y(x), 0), y(x))`,
        output: 'y(x) = C1*exp(-x) + C2*exp(x)',
        exercises: [
            'Résoudre y\' + y = 0',
            'Résoudre l\'oscillateur harmonique y\'\' + y = 0',
            'Résoudre avec conditions initiales',
        ],
        practicalApplication: 'Dynamique des populations, circuits RLC, mécanique céleste, réaction chimique.'
    },
    {
        id: 'day_017',
        dayNumber: 17,
        title: 'Transformée de Laplace',
        difficulty: 'Avancé',
        masteryLevel: 'Expert',
        unlocked: true,
        xpReward: 50,
        badge: '🏅 Transformée de Laplace',
        africanAnalogy: `La transformée de Laplace est comme traduire un poème difficile dans une langue simple. On transforme des équations différentielles complexes (domaine temporel) en équations algébriques simples (domaine fréquentiel), on résout, puis on retraduit.`,
        theory: {
            title: 'Analyse Opérationnelle',
            content: `La transformée de Laplace convertit les dérivées en multiplications par s. Elle est idéale pour résoudre des EDO linéaires avec conditions initiales.`,
            mathematicalFoundation: `
                    - Définition : L{f(t)} = ∫₀^∞ e⁻ˢᵗ f(t) dt\n                - Propriété : L{f'} = sF(s) - f(0)\n                - Convolution : L{f*g} = F(s)G(s)\n                - Inverse : retour au domaine temporel
                `,
            scientists: [
                {
                    name: 'Pierre-Simon Laplace',
                    year: '1785',
                    contribution: 'Théorie des probabilités et transformée',
                    context: 'Le \'Newton français\', déterministe absolu'
                },
                {
                    name: 'Oliver Heaviside',
                    year: '1890',
                    contribution: 'Calcul opérationnel pour l\'électrotechnique',
                    context: 'Rend la méthode pratique pour les ingénieurs'
                },
            ]
        },
        code: `from sympy import laplace_transform, symbols, exp
t, s = symbols('t s')
laplace_transform(t * exp(-t), t, s)`,
        output: '(1/(s + 1)**2, 0, True)',
        exercises: [
            'Calculer la transformée de sin(t)',
            'Calculer la transformée inverse de 1/s',
            'Résoudre une EDO avec Laplace',
        ],
        practicalApplication: 'Automatique (systèmes de contrôle), traitement du signal, circuits électriques.'
    },
    {
        id: 'day_018',
        dayNumber: 18,
        title: 'Transformée de Fourier',
        difficulty: 'Avancé',
        masteryLevel: 'Expert',
        unlocked: true,
        xpReward: 50,
        badge: '🏅 Transformée de Fourier',
        africanAnalogy: `La transformée de Fourier est comme un prisme pour le son. Elle décompose n'importe quel bruit complexe en une somme de notes pures (fréquences). C'est l'oreille mathématique absolue.`,
        theory: {
            title: 'Analyse Harmonique',
            content: `La transformée de Fourier décompose une fonction en une somme de sinusoïdes. Elle permet d'analyser le contenu fréquentiel d'un signal.`,
            mathematicalFoundation: `
                    - Définition : F(k) = ∫₋∞^∞ f(x)e⁻²ⁱᵖᵏˣ dx\n                - Séries de Fourier : pour fonctions périodiques\n                - Identité de Parseval : conservation de l'énergie\n                - FFT : algorithme rapide (numérique)
                `,
            scientists: [
                {
                    name: 'Joseph Fourier',
                    year: '1822',
                    contribution: 'Théorie analytique de la chaleur',
                    context: 'Affirme que toute fonction peut s\'écrire comme somme de sinus'
                },
                {
                    name: 'Dirichlet',
                    year: '1829',
                    contribution: 'Conditions de convergence',
                    context: 'Donne une base rigoureuse à l\'intuition de Fourier'
                },
            ]
        },
        code: `from sympy import fourier_transform, exp, symbols, pi
x, k = symbols('x k')
fourier_transform(exp(-x**2), x, k)`,
        output: 'sqrt(pi)*exp(-pi**2*k**2)',
        exercises: [
            'Calculer la transformée d\'une porte (rect)',
            'Calculer la transformée de cos(x)',
            'Vérifier la linéarité',
        ],
        practicalApplication: 'MP3, JPEG, IRM, télécommunications (4G/5G), mécanique quantique.'
    },
    {
        id: 'day_019',
        dayNumber: 19,
        title: 'Géométrie : Points & Lignes',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 20,
        badge: '🏅 Géométrie : Points & Lignes',
        africanAnalogy: `La géométrie analytique est le mariage de l'algèbre et de l'espace. Un point n'est plus juste une tache d'encre, c'est un couple de nombres (x,y). Une ligne n'est plus un trait, c'est une équation.`,
        theory: {
            title: 'Géométrie Analytique',
            content: `SymPy possède un module de géométrie puissant pour manipuler des objets géométriques de manière exacte (intersections, distances, projections).`,
            mathematicalFoundation: `
                    - Point : P(x, y)\n                - Droite : ax + by + c = 0\n                - Segment : portion de droite\n                - Distance : d(A,B) = √((xB-xA)² + (yB-yA)²)
                `,
            scientists: [
                {
                    name: 'René Descartes',
                    year: '1637',
                    contribution: 'Géométrie cartésienne',
                    context: 'Je pense donc je suis. Transforme la géométrie en algèbre'
                },
                {
                    name: 'Euclide',
                    year: '-300',
                    contribution: 'Axiomes de la géométrie',
                    context: 'Les Éléments, livre le plus lu après la Bible'
                },
            ]
        },
        code: `from sympy import Point, Line
p1, p2 = Point(0, 0), Point(1, 1)
l = Line(p1, p2)
l.equation()`,
        output: '-x + y',
        exercises: [
            'Calculer la distance entre deux points',
            'Trouver l\'intersection de deux droites',
            'Projeter un point sur une droite',
        ],
        practicalApplication: 'CAO (Conception Assistée par Ordinateur), robotique, jeux vidéo.'
    },
    {
        id: 'day_020',
        dayNumber: 20,
        title: 'Géométrie : Polygones',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Géométrie : Polygones',
        africanAnalogy: `Un polygone est un enclos fermé. Calculer son aire, c'est mesurer la terre à l'intérieur. SymPy le fait sans arpenteur, juste avec les coordonnées des piquets de clôture.`,
        theory: {
            title: 'Polygones et Cercles',
            content: `Manipulation d'objets fermés : triangles, carrés, polygones réguliers et cercles. Calculs d'aires, de périmètres et d'intersections.`,
            mathematicalFoundation: `
                    - Aire (Shoelace formula) : 1/2 |Σ (xᵢyᵢ₊₁ - xᵢ₊₁yᵢ)|\n                - Centre de gravité : moyenne des coordonnées\n                - Cercle : (x-a)² + (y-b)² = R²\n                - Convexité
                `,
            scientists: [
                {
                    name: 'Archimède',
                    year: '-250',
                    contribution: 'Aire du cercle et de la parabole',
                    context: 'Précurseur du calcul intégral par la méthode d\'exhaustion'
                },
                {
                    name: 'Héron d\\'Alexandrie',
                    year: '60',
                    contribution: 'Formule de Héron (aire triangle)',
                    context: 'Ingénieur grec, inventeur de la machine à vapeur'
                },
            ]
        },
        code: `from sympy import Polygon, Point
t = Polygon(Point(0,0), Point(1,0), Point(0,1))
t.area`,
        output: '1/2',
        exercises: [
            'Calculer l\'aire d\'un hexagone régulier',
            'Vérifier si un point est dans un polygone',
            'Trouver les intersections cercle-droite',
        ],
        practicalApplication: 'Architecture, cartographie (SIG), infographie.'
    },
    {
        id: 'day_021',
        dayNumber: 21,
        title: 'Combinatoire',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 25,
        badge: '🏅 Combinatoire',
        africanAnalogy: `La combinatoire est l'art de compter sans compter. C'est comme savoir combien de colliers différents on peut faire avec des perles colorées sans avoir à tous les fabriquer. Le griot connaît toutes les histoires possibles sans avoir à toutes les raconter.`,
        theory: {
            title: 'Analyse Combinatoire',
            content: `La combinatoire étudie les arrangements, permutations et combinaisons d'objets. Elle répond à la question : 'De combien de façons peut-on...?'`,
            mathematicalFoundation: `
                    - Factorielle : n! = n × (n-1) × ... × 2 × 1\n                - Permutations : P(n,k) = n!/(n-k)!\n                - Combinaisons : C(n,k) = n!/(k!(n-k)!)\n                - Principe du tiroir (Pigeonhole)\n                - Formule du binôme : (a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ
                `,
            scientists: [
                {
                    name: 'Blaise Pascal',
                    year: '1654',
                    contribution: 'Triangle de Pascal et probabilités',
                    context: 'Correspondance avec Fermat, naissance de la théorie des probabilités'
                },
                {
                    name: 'Leonhard Euler',
                    year: '1736',
                    contribution: 'Problème des ponts de Königsberg, graphes',
                    context: 'Fonde la théorie des graphes en résolvant un problème de promenade'
                },
            ]
        },
        code: `from sympy import factorial, binomial
n, k = 5, 2
binomial(n, k)`,
        output: '10',
        exercises: [
            'Calculer 10!',
            'Combien de mains de 5 cartes dans un jeu de 52 ?',
            'Développer (x+y)⁴ avec les coefficients binomiaux',
        ],
        practicalApplication: 'Loteries, codes correcteurs d\'erreurs, algorithmes de recherche, cryptographie.'
    },
    {
        id: 'day_022',
        dayNumber: 22,
        title: 'Probabilités Discrètes',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Probabilités Discrètes',
        africanAnalogy: `Les probabilités sont comme prédire la pluie en observant les nuages. On ne sait pas exactement quand elle tombera, mais on peut dire : 'Il y a 70% de chances'. Le sage ne prédit pas l'avenir, il en mesure les possibilités.`,
        theory: {
            title: 'Théorie des Probabilités',
            content: `Une probabilité mesure la chance qu'un événement se produise, entre 0 (impossible) et 1 (certain). SymPy peut calculer des probabilités exactes pour des variables discrètes.`,
            mathematicalFoundation: `
                    - Probabilité : P(A) = |A| / |Ω|\n                - Événements indépendants : P(A∩B) = P(A)×P(B)\n                - Probabilité conditionnelle : P(A|B) = P(A∩B)/P(B)\n                - Théorème de Bayes : P(A|B) = P(B|A)P(A)/P(B)\n                - Espérance : E[X] = Σ xᵢ P(X=xᵢ)
                `,
            scientists: [
                {
                    name: 'Pierre de Fermat',
                    year: '1654',
                    contribution: 'Co-fondateur de la théorie des probabilités',
                    context: 'Problème des partis avec Pascal'
                },
                {
                    name: 'Thomas Bayes',
                    year: '1763',
                    contribution: 'Théorème de Bayes (probabilités conditionnelles)',
                    context: 'Publié après sa mort, révolutionne l\'inférence statistique'
                },
            ]
        },
        code: `from sympy.stats import Die, P, E
X = Die('X', 6)
P(X > 4)`,
        output: '1/3',
        exercises: [
            'Probabilité d\'obtenir un double six avec deux dés',
            'Calculer l\'espérance d\'un dé à 6 faces',
            'Appliquer le théorème de Bayes (test médical)',
        ],
        practicalApplication: 'Jeux de hasard, assurance, machine learning (classificateurs bayésiens), finance.'
    },
    {
        id: 'day_023',
        dayNumber: 23,
        title: 'Statistiques Descriptives',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 20,
        badge: '🏅 Statistiques Descriptives',
        africanAnalogy: `Les statistiques résument une foule en quelques chiffres. Au lieu de décrire chaque personne du village, on dit : 'La taille moyenne est 1m70, l'âge médian est 30 ans'. C'est le portrait du groupe, pas de l'individu.`,
        theory: {
            title: 'Statistiques et Données',
            content: `Les statistiques descriptives résument et visualisent des ensembles de données. Moyenne, médiane, écart-type caractérisent une distribution.`,
            mathematicalFoundation: `
                    - Moyenne : μ = (Σ xᵢ) / n\n                - Médiane : valeur centrale (50e percentile)\n                - Variance : σ² = Σ(xᵢ - μ)² / n\n                - Écart-type : σ = √variance\n                - Quartiles : Q1 (25%), Q2 (50%), Q3 (75%)
                `,
            scientists: [
                {
                    name: 'Carl Friedrich Gauss',
                    year: '1809',
                    contribution: 'Loi normale (courbe en cloche)',
                    context: 'Méthode des moindres carrés pour l\'astronomie'
                },
                {
                    name: 'Francis Galton',
                    year: '1886',
                    contribution: 'Corrélation et régression',
                    context: 'Étudie l\'hérédité, invente la régression vers la moyenne'
                },
            ]
        },
        code: `from sympy.stats import Normal, density, E, variance
X = Normal('X', 0, 1)
E(X), variance(X)`,
        output: '(0, 1)',
        exercises: [
            'Calculer la moyenne de [1, 2, 3, 4, 5]',
            'Trouver l\'écart-type d\'une distribution',
            'Calculer P(X < 1) pour X ~ N(0,1)',
        ],
        practicalApplication: 'Sondages, contrôle qualité, analyse de données, sciences sociales.'
    },
    {
        id: 'day_024',
        dayNumber: 24,
        title: 'Logique Booléenne',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 20,
        badge: '🏅 Logique Booléenne',
        africanAnalogy: `La logique booléenne est le langage du oui et du non, du vrai et du faux. C'est comme les portes d'un village : soit elles sont ouvertes (1), soit fermées (0). Pas de demi-mesure. Les ordinateurs pensent ainsi.`,
        theory: {
            title: 'Algèbre de Boole',
            content: `L'algèbre booléenne manipule des valeurs binaires (Vrai/Faux, 1/0) avec des opérateurs logiques (ET, OU, NON). C'est la base de l'électronique numérique.`,
            mathematicalFoundation: `
                    - Opérateurs : AND (∧), OR (∨), NOT (¬)\n                - Lois de De Morgan : ¬(A∧B) = ¬A∨¬B\n                - Tables de vérité\n                - XOR (ou exclusif) : A⊕B = (A∨B)∧¬(A∧B)\n                - Forme normale disjonctive (DNF)
                `,
            scientists: [
                {
                    name: 'George Boole',
                    year: '1854',
                    contribution: 'Algèbre booléenne',
                    context: 'Mathématicien autodidacte, révolutionne la logique'
                },
                {
                    name: 'Claude Shannon',
                    year: '1937',
                    contribution: 'Application aux circuits électriques',
                    context: 'Thèse de master fondatrice de l\'électronique numérique'
                },
            ]
        },
        code: `from sympy.logic import And, Or, Not, simplify_logic
from sympy import symbols
x, y = symbols('x y')
simplify_logic(Or(And(x, y), And(x, Not(y))))`,
        output: 'x',
        exercises: [
            'Simplifier (A∧B)∨(A∧¬B)',
            'Construire la table de vérité de XOR',
            'Appliquer les lois de De Morgan',
        ],
        practicalApplication: 'Circuits logiques, processeurs, bases de données (requêtes SQL), IA (logique formelle).'
    },
    {
        id: 'day_025',
        dayNumber: 25,
        title: 'Théorie des Nombres',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Théorie des Nombres',
        africanAnalogy: `Les nombres premiers sont les atomes des mathématiques. Tout nombre est fait de nombres premiers, comme toute matière est faite d'atomes. Trouver les nombres premiers, c'est découvrir les briques fondamentales de l'univers des nombres.`,
        theory: {
            title: 'Arithmétique et Primalité',
            content: `La théorie des nombres étudie les propriétés des entiers. Les nombres premiers (divisibles seulement par 1 et eux-mêmes) sont au cœur de cette théorie.`,
            mathematicalFoundation: `
                    - Nombre premier : p divisible uniquement par 1 et p\n                - Théorème fondamental : tout n = p₁^a₁ × p₂^a₂ × ...\n                - PGCD : Plus Grand Commun Diviseur\n                - PPCM : Plus Petit Commun Multiple\n                - Infinité des nombres premiers (Euclide)
                `,
            scientists: [
                {
                    name: 'Euclide',
                    year: '-300',
                    contribution: 'Infinité des nombres premiers',
                    context: 'Preuve élégante par l\'absurde dans Les Éléments'
                },
                {
                    name: 'Évariste Galois',
                    year: '1830',
                    contribution: 'Théorie de Galois (corps finis)',
                    context: 'Génie mort à 20 ans, révolutionne l\'algèbre abstraite'
                },
            ]
        },
        code: `from sympy import isprime, factorint, gcd
isprime(17), factorint(60)`,
        output: '(True, {2: 2, 3: 1, 5: 1})',
        exercises: [
            'Trouver tous les nombres premiers < 100',
            'Décomposer 1024 en facteurs premiers',
            'Calculer PGCD(48, 18)',
        ],
        practicalApplication: 'Cryptographie RSA, hachage, codes correcteurs, tests de primalité.'
    },
    {
        id: 'day_026',
        dayNumber: 26,
        title: 'Congruences',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Congruences',
        africanAnalogy: `Les congruences sont comme les jours de la semaine. Après dimanche vient lundi, après 7 jours on revient au même jour. En arithmétique modulaire, après 12 vient 1 (sur une horloge). Les nombres tournent en boucle.`,
        theory: {
            title: 'Arithmétique Modulaire',
            content: `Deux nombres sont congrus modulo n s'ils ont le même reste dans la division par n. Notation : a ≡ b (mod n).`,
            mathematicalFoundation: `
                    - Définition : a ≡ b (mod n) ⟺ n | (a-b)\n                - Propriétés : (a+b) mod n, (a×b) mod n\n                - Inverse modulaire : ax ≡ 1 (mod n)\n                - Petit théorème de Fermat : aᵖ⁻¹ ≡ 1 (mod p) si p premier\n                - Théorème chinois des restes
                `,
            scientists: [
                {
                    name: 'Carl Friedrich Gauss',
                    year: '1801',
                    contribution: 'Disquisitiones Arithmeticae, formalise les congruences',
                    context: 'Ouvrage fondateur de la théorie des nombres moderne'
                },
                {
                    name: 'Pierre de Fermat',
                    year: '1640',
                    contribution: 'Petit théorème de Fermat',
                    context: 'Magistrat et mathématicien amateur de génie'
                },
            ]
        },
        code: `from sympy import Mod, mod_inverse
Mod(17, 5), mod_inverse(3, 7)`,
        output: '(2, 5)',
        exercises: [
            'Calculer 2^100 mod 7',
            'Trouver l\'inverse de 5 modulo 11',
            'Résoudre 3x ≡ 1 (mod 7)',
        ],
        practicalApplication: 'Cryptographie (RSA, Diffie-Hellman), hachage, générateurs pseudo-aléatoires.'
    },
    {
        id: 'day_027',
        dayNumber: 27,
        title: 'Cryptographie RSA',
        difficulty: 'Avancé',
        masteryLevel: 'Expert',
        unlocked: true,
        xpReward: 50,
        badge: '🏅 Cryptographie RSA',
        africanAnalogy: `RSA est comme un cadenas magique. Tout le monde peut fermer le cadenas (chiffrer avec la clé publique), mais seul celui qui a la clé secrète peut l'ouvrir (déchiffrer). Le secret repose sur la difficulté de factoriser de très grands nombres.`,
        theory: {
            title: 'Cryptographie à Clé Publique',
            content: `RSA (Rivest-Shamir-Adleman) est un algorithme de chiffrement asymétrique basé sur la difficulté de factoriser le produit de deux grands nombres premiers.`,
            mathematicalFoundation: `
                    - Génération de clés : choisir p, q premiers, n = p×q\n                - φ(n) = (p-1)(q-1) (indicatrice d'Euler)\n                - Choisir e tel que pgcd(e, φ(n)) = 1\n                - Calculer d tel que ed ≡ 1 (mod φ(n))\n                - Chiffrement : c = mᵉ mod n\n                - Déchiffrement : m = cᵈ mod n
                `,
            scientists: [
                {
                    name: 'Ron Rivest, Adi Shamir, Leonard Adleman',
                    year: '1977',
                    contribution: 'Invention de RSA',
                    context: 'Révolutionne la cryptographie, permet le commerce électronique'
                },
                {
                    name: 'Whitfield Diffie, Martin Hellman',
                    year: '1976',
                    contribution: 'Concept de cryptographie à clé publique',
                    context: 'Prix Turing 2015, rendent RSA possible'
                },
            ]
        },
        code: `from sympy import randprime, mod_inverse, Mod
p, q = 61, 53
n = p * q
phi = (p-1) * (q-1)
e = 17
d = mod_inverse(e, phi)
print(f'Public: (e={e}, n={n}), Private: d={d}')`,
        output: 'Public: (e=17, n=3233), Private: d=...',
        exercises: [
            'Générer une paire de clés RSA avec p=11, q=13',
            'Chiffrer le message m=42',
            'Déchiffrer le message chiffré',
        ],
        practicalApplication: 'HTTPS (SSL/TLS), signatures numériques, blockchain, messagerie sécurisée.'
    },
    {
        id: 'day_028',
        dayNumber: 28,
        title: 'Théorie des Graphes',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 35,
        badge: '🏅 Théorie des Graphes',
        africanAnalogy: `Un graphe est comme un réseau de villages reliés par des chemins. Les villages sont les sommets, les chemins sont les arêtes. Trouver le plus court chemin entre deux villages, c'est résoudre un problème de graphe.`,
        theory: {
            title: 'Graphes et Réseaux',
            content: `Un graphe G = (V, E) est un ensemble de sommets V reliés par des arêtes E. Les graphes modélisent des réseaux : routes, internet, relations sociales.`,
            mathematicalFoundation: `
                    - Graphe orienté vs non-orienté\n                - Degré d'un sommet : nombre d'arêtes incidentes\n                - Chemin : suite de sommets reliés\n                - Cycle : chemin fermé\n                - Connexité : existence de chemins entre tous sommets\n                - Arbre : graphe connexe sans cycle
                `,
            scientists: [
                {
                    name: 'Leonhard Euler',
                    year: '1736',
                    contribution: 'Problème des ponts de Königsberg',
                    context: 'Premier problème de théorie des graphes'
                },
                {
                    name: 'Gustav Kirchhoff',
                    year: '1847',
                    contribution: 'Lois des circuits électriques (graphes)',
                    context: 'Applique les graphes à la physique'
                },
            ]
        },
        code: `# SymPy n'a pas de module graphe natif, utiliser NetworkX
# Exemple conceptuel
from sympy import Matrix
# Matrice d'adjacence
A = Matrix([[0,1,1],[1,0,1],[1,1,0]])
A.eigenvals()`,
        output: '{-1: 1, 2: 1}',
        exercises: [
            'Dessiner un graphe K₅ (complet à 5 sommets)',
            'Vérifier si un graphe est connexe',
            'Trouver le plus court chemin (Dijkstra)',
        ],
        practicalApplication: 'Réseaux sociaux, GPS (navigation), internet (routage), biologie (réseaux métaboliques).'
    },
    {
        id: 'day_029',
        dayNumber: 29,
        title: 'Optimisation Linéaire',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 40,
        badge: '🏅 Optimisation Linéaire',
        africanAnalogy: `L'optimisation linéaire cherche la meilleure solution sous contraintes. C'est comme un fermier qui veut maximiser sa récolte avec un terrain limité, un budget limité et des saisons fixes. Il doit trouver le meilleur équilibre.`,
        theory: {
            title: 'Programmation Linéaire',
            content: `Maximiser (ou minimiser) une fonction linéaire sous contraintes linéaires. Le simplexe est l'algorithme classique de résolution.`,
            mathematicalFoundation: `
                    - Forme standard : max c^T x sous Ax ≤ b, x ≥ 0\n                - Région admissible : polyèdre convexe\n                - Théorème : l'optimum est à un sommet\n                - Algorithme du simplexe (Dantzig, 1947)\n                - Dualité : tout problème a un dual
                `,
            scientists: [
                {
                    name: 'George Dantzig',
                    year: '1947',
                    contribution: 'Algorithme du simplexe',
                    context: 'Résout un problème d\'optimisation de l\'armée américaine'
                },
                {
                    name: 'Leonid Kantorovich',
                    year: '1939',
                    contribution: 'Programmation linéaire en économie',
                    context: 'Prix Nobel d\'économie 1975'
                },
            ]
        },
        code: `# SymPy peut résoudre symboliquement
from sympy import symbols, solve
x, y = symbols('x y', positive=True, real=True)
# Exemple : max 3x + 2y sous x + y <= 4
# Résolution manuelle ou avec solveurs externes`,
        output: 'Solution optimale au sommet du polyèdre',
        exercises: [
            'Résoudre un problème de production',
            'Problème du sac à dos (version continue)',
            'Trouver le dual d\'un problème',
        ],
        practicalApplication: 'Logistique, planification de production, allocation de ressources, finance (portefeuille).'
    },
    {
        id: 'day_030',
        dayNumber: 30,
        title: 'Physique : Cinématique',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Physique : Cinématique',
        africanAnalogy: `La cinématique décrit le mouvement sans se soucier des causes. C'est comme raconter le voyage d'un oiseau : où il est, à quelle vitesse il vole, comment il accélère. Peu importe pourquoi il vole, on décrit juste sa trajectoire.`,
        theory: {
            title: 'Mouvement et Trajectoires',
            content: `La cinématique étudie position, vitesse et accélération. SymPy peut résoudre symboliquement les équations du mouvement.`,
            mathematicalFoundation: `
                    - Position : x(t)\n                - Vitesse : v(t) = dx/dt\n                - Accélération : a(t) = dv/dt = d²x/dt²\n                - Mouvement rectiligne uniforme : x = x₀ + vt\n                - Mouvement uniformément accéléré : x = x₀ + v₀t + ½at²\n                - Chute libre : a = -g = -9.81 m/s²
                `,
            scientists: [
                {
                    name: 'Galileo Galilei',
                    year: '1638',
                    contribution: 'Lois de la chute des corps',
                    context: 'Expériences à la tour de Pise (légende), fonde la physique expérimentale'
                },
                {
                    name: 'Isaac Newton',
                    year: '1687',
                    contribution: 'Lois du mouvement',
                    context: 'Principia Mathematica, unifie mécanique terrestre et céleste'
                },
            ]
        },
        code: `from sympy import symbols, Function, Eq, dsolve
t = symbols('t', positive=True)
x = Function('x')
# Mouvement avec accélération constante
eq = Eq(x(t).diff(t, t), -9.81)
dsolve(eq, x(t))`,
        output: 'x(t) = C₁ + C₂*t - 4.905*t²',
        exercises: [
            'Calculer la vitesse finale après 5s de chute libre',
            'Trouver la hauteur maximale d\'un projectile',
            'Résoudre x\'\' = -g avec conditions initiales',
        ],
        practicalApplication: 'Balistique, robotique, jeux vidéo (moteurs physiques), aérospatiale.'
    },

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
