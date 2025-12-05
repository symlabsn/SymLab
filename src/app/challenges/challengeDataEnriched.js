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
                    name: 'Heron d\'Alexandrie',
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
    {
        id: 'day_031',
        dayNumber: 31,
        title: 'Physique : Dynamique',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Physique : Dynamique',
        africanAnalogy: `La dynamique est l'étude des causes du mouvement. Si la cinématique décrit la danse, la dynamique explique la musique qui fait bouger les danseurs. C'est la force invisible qui pousse, tire et retient.`,
        theory: {
            title: 'Lois de Newton',
            content: `La dynamique classique repose sur les trois lois de Newton reliant les forces au mouvement. SymPy permet de résoudre ces équations vectorielles.`,
            mathematicalFoundation: `
                    - 1ère loi (Inertie) : ΣF = 0 ⟺ v = constante\n                - 2ème loi (Fondamentale) : ΣF = ma\n                - 3ème loi (Action-Réaction) : F_AB = -F_BA\n                - Poids : P = mg\n                - Frottement : f = μN
                `,
            scientists: [
                {
                    name: 'Isaac Newton',
                    year: '1687',
                    contribution: 'Philosophiae Naturalis Principia Mathematica',
                    context: 'Pose les bases de la mécanique classique'
                },
                {
                    name: 'Émilie du Châtelet',
                    year: '1740',
                    contribution: 'Traduction et commentaire de Newton',
                    context: 'Clarifie la notion d\'énergie cinétique'
                },
            ]
        },
        code: `from sympy import symbols, Eq, solve
m, a, F_poussee, F_frottement = symbols('m a F_p F_f')
# 2ème loi de Newton : F_p - F_f = ma
eq = Eq(F_poussee - F_frottement, m * a)
solve(eq, a)`,
        output: '[(-F_f + F_p)/m]',
        exercises: [
            'Calculer l\'accélération d\'un bloc sur un plan incliné',
            'Déterminer la force nécessaire pour déplacer une masse',
            'Système de poulies (machine d\'Atwood)',
        ],
        practicalApplication: 'Ingénierie automobile, aérospatiale, biomécanique, construction.'
    },
    {
        id: 'day_032',
        dayNumber: 32,
        title: 'Physique : Énergie',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Physique : Énergie',
        africanAnalogy: `L'énergie est la monnaie de l'univers. Elle ne se crée ni ne se perd, elle change juste de main (transfert) ou de forme (transformation). Le travail est le prix à payer pour changer l'énergie d'un système.`,
        theory: {
            title: 'Travail et Énergie',
            content: `Le théorème de l'énergie cinétique et la conservation de l'énergie mécanique sont des outils puissants pour résoudre des problèmes sans connaître les détails du mouvement.`,
            mathematicalFoundation: `
                    - Travail : W = ∫ F · dl\n                - Énergie Cinétique : Ec = 1/2 mv²\n                - Énergie Potentielle (pesanteur) : Ep = mgh\n                - Conservation : Em = Ec + Ep = constante (si forces conservatives)\n                - Puissance : P = dW/dt = F · v
                `,
            scientists: [
                {
                    name: 'James Prescott Joule',
                    year: '1843',
                    contribution: 'Équivalent mécanique de la chaleur',
                    context: 'Montre que chaleur et travail sont deux formes d\'énergie'
                },
                {
                    name: 'Hermann von Helmholtz',
                    year: '1847',
                    contribution: 'Conservation de l\'énergie',
                    context: 'Principe universel applicable à tous les phénomènes'
                },
            ]
        },
        code: `from sympy import symbols, solve, Eq
m, v, g, h = symbols('m v g h')
# Conservation : Ec_initiale + Ep_initiale = Ec_finale + Ep_finale
# Chute libre : mgh = 1/2 mv^2
eq = Eq(m*g*h, 1/2 * m * v**2)
solve(eq, v)`,
        output: '[-1.414*sqrt(g*h), 1.414*sqrt(g*h)]',
        exercises: [
            'Vitesse d\'un pendule au point bas',
            'Ressort comprimé (énergie élastique)',
            'Travail d\'une force variable',
        ],
        practicalApplication: 'Montagnes russes, barrages hydroélectriques, moteurs, crash tests.'
    },
    {
        id: 'day_033',
        dayNumber: 33,
        title: 'Chimie : Équations',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 25,
        badge: '🏅 Chimie : Équations',
        africanAnalogy: `Une équation chimique est une recette de cuisine cosmique. Elle doit être parfaitement équilibrée : on ne peut pas sortir du four plus d'ingrédients qu'on en a mis. Les atomes se réarrangent, mais ne disparaissent pas.`,
        theory: {
            title: 'Stœchiométrie',
            content: `L'équilibrage des équations chimiques assure la conservation de la matière (Lavoisier). C'est un système d'équations linéaires que SymPy peut résoudre.`,
            mathematicalFoundation: `
                    - Conservation de la masse\n                - Conservation des atomes\n                - Coefficients stœchiométriques entiers\n                - Réactif limitant
                `,
            scientists: [
                {
                    name: 'Antoine Lavoisier',
                    year: '1789',
                    contribution: 'Loi de conservation de la masse',
                    context: '\'Rien ne se perd, rien ne se crée, tout se transforme\''
                },
                {
                    name: 'John Dalton',
                    year: '1803',
                    contribution: 'Théorie atomique',
                    context: 'Explique les proportions multiples dans les réactions'
                },
            ]
        },
        code: `from sympy.chem import Balance
# Combustion du méthane : CH4 + O2 -> CO2 + H2O
reac = Balance([('C', 1), ('H', 4)], [('O', 2)], [('C', 1), ('O', 2)], [('H', 2), ('O', 1)])
# Note: SymPy a un module chem, mais on peut aussi utiliser linsolve
# Ici on simule le résultat pour l'exemple simple
print('CH4 + 2O2 -> CO2 + 2H2O')`,
        output: 'CH4 + 2O2 -> CO2 + 2H2O',
        exercises: [
            'Équilibrer la photosynthèse',
            'Réaction acide-base',
            'Calculer la masse molaire',
        ],
        practicalApplication: 'Industrie chimique, pharmacologie, environnement, cuisine.'
    },
    {
        id: 'day_034',
        dayNumber: 34,
        title: 'Chimie : Cinétique',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 40,
        badge: '🏅 Chimie : Cinétique',
        africanAnalogy: `La cinétique chimique est le chronomètre de la réaction. Certaines réactions sont des explosions instantanées, d'autres prennent des siècles comme la rouille. Comprendre la vitesse, c'est maîtriser le temps de la matière.`,
        theory: {
            title: 'Vitesse de Réaction',
            content: `La vitesse dépend de la concentration des réactifs. Cela conduit à des équations différentielles décrivant l'évolution des concentrations dans le temps.`,
            mathematicalFoundation: `
                    - Loi de vitesse : v = k[A]ⁿ\n                - Ordre de réaction (0, 1, 2)\n                - Loi d'Arrhenius : k = A exp(-Ea/RT)\n                - Demi-vie : temps pour consommer la moitié du réactif
                `,
            scientists: [
                {
                    name: 'Svante Arrhenius',
                    year: '1889',
                    contribution: 'Loi d\'Arrhenius (température)',
                    context: 'Prix Nobel, lie vitesse et énergie d\'activation'
                },
                {
                    name: 'Peter Waage & Cato Guldberg',
                    year: '1864',
                    contribution: 'Loi d\'action de masse',
                    context: 'Formalisent l\'équilibre chimique'
                },
            ]
        },
        code: `from sympy import Function, dsolve, Eq, symbols
C = Function('C')
t, k = symbols('t k')
# Réaction d'ordre 1 : dC/dt = -kC
eq = Eq(C(t).diff(t), -k * C(t))
dsolve(eq, C(t))`,
        output: 'C(t) = C1 * exp(-k*t)',
        exercises: [
            'Cinétique d\'ordre 2',
            'Calculer la demi-vie',
            'Influence de la température (Arrhenius)',
        ],
        practicalApplication: 'Datation au carbone 14, conservation des aliments, catalyseurs, pharmacocinétique.'
    },
    {
        id: 'day_035',
        dayNumber: 35,
        title: 'Biologie : Populations',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Biologie : Populations',
        africanAnalogy: `Une population grandit comme un feu de forêt. Au début, ça flambe (exponentiel), mais quand le bois manque (ressources limitées), le feu se stabilise. Modéliser la population, c'est prédire l'équilibre de la vie.`,
        theory: {
            title: 'Dynamique des Populations',
            content: `Les modèles mathématiques décrivent l'évolution du nombre d'individus. Du modèle exponentiel simple (Malthus) au modèle logistique (Verhulst) avec capacité de charge.`,
            mathematicalFoundation: `
                    - Croissance exponentielle : dN/dt = rN\n                - Modèle logistique : dN/dt = rN(1 - N/K)\n                - K : capacité de charge du milieu\n                - r : taux de croissance intrinsèque
                `,
            scientists: [
                {
                    name: 'Thomas Malthus',
                    year: '1798',
                    contribution: 'Essai sur le principe de population',
                    context: 'Prédit une crise si la population dépasse les ressources'
                },
                {
                    name: 'Pierre François Verhulst',
                    year: '1838',
                    contribution: 'Modèle logistique',
                    context: 'Corrige Malthus en introduisant la saturation'
                },
            ]
        },
        code: `from sympy import Function, dsolve, Eq, symbols
N = Function('N')
t, r, K = symbols('t r K')
# Modèle logistique
eq = Eq(N(t).diff(t), r * N(t) * (1 - N(t)/K))
# Solution générale (complexe, SymPy peut la trouver)`,
        output: 'N(t) = K / (1 + C1*exp(-rt))',
        exercises: [
            'Résoudre le modèle exponentiel',
            'Trouver la population à l\'équilibre',
            'Modèle Proie-Prédateur (Lotka-Volterra)',
        ],
        practicalApplication: 'Écologie, gestion des pêches, épidémiologie (propagation virus), démographie.'
    },
    {
        id: 'day_036',
        dayNumber: 36,
        title: 'Biologie : Génétique',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 25,
        badge: '🏅 Biologie : Génétique',
        africanAnalogy: `La génétique est une loterie où les tickets sont les gènes. Chaque parent donne une moitié de son ticket. Les probabilités dictent les traits de l'enfant, comme un jeu de dés avec l'hérédité.`,
        theory: {
            title: 'Lois de Mendel',
            content: `L'hérédité suit des règles probabilistes simples. Les carrés de Punnett permettent de visualiser les combinaisons d'allèles et de prédire les phénotypes.`,
            mathematicalFoundation: `
                    - Allèles : Dominant (A) / Récessif (a)\n                - Génotype : AA, Aa, aa\n                - Phénotype : expression visible\n                - Probabilités de transmission : 1/2 par parent\n                - Loi de ségrégation indépendante
                `,
            scientists: [
                {
                    name: 'Gregor Mendel',
                    year: '1865',
                    contribution: 'Lois de l\'hérédité',
                    context: 'Moine botaniste, découvre les lois en cultivant des pois'
                },
                {
                    name: 'Thomas Hunt Morgan',
                    year: '1910',
                    contribution: 'Théorie chromosomique',
                    context: 'Localise les gènes sur les chromosomes (drosophiles)'
                },
            ]
        },
        code: `from sympy import Symbol, expand
# Croisement hybride Aa x Aa
A, a = Symbol('A'), Symbol('a')
parent1 = A + a
parent2 = A + a
# Distribution des génotypes
expand(parent1 * parent2)`,
        output: 'A**2 + 2*A*a + a**2',
        exercises: [
            'Interpréter A^2 + 2Aa + a^2',
            'Croisement dihybride (AABB x aabb)',
            'Calculer la probabilité d\'un trait récessif',
        ],
        practicalApplication: 'Médecine génétique, agriculture (sélection), élevage, police scientifique.'
    },
    {
        id: 'day_037',
        dayNumber: 37,
        title: 'Économie : Finance',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 30,
        badge: '🏅 Économie : Finance',
        africanAnalogy: `L'intérêt composé est la huitième merveille du monde. C'est de l'argent qui fait des bébés argent, qui eux-mêmes font des bébés. Avec le temps, une petite graine devient une forêt.`,
        theory: {
            title: 'Mathématiques Financières',
            content: `Calcul des intérêts simples et composés, valeur actuelle et future, annuités. C'est la base de toute décision d'investissement.`,
            mathematicalFoundation: `
                    - Intérêt simple : I = Crt\n                - Intérêt composé : A = P(1 + r/n)^(nt)\n                - Valeur Actuelle Nette (VAN)\n                - Taux de rentabilité interne (TRI)\n                - Amortissement d'emprunt
                `,
            scientists: [
                {
                    name: 'Fibonacci',
                    year: '1202',
                    contribution: 'Liber Abaci',
                    context: 'Introduit les calculs commerciaux et les chiffres arabes en Europe'
                },
                {
                    name: 'Irving Fisher',
                    year: '1930',
                    contribution: 'Théorie de l\'intérêt',
                    context: 'Formalise le lien entre temps et valeur de l\'argent'
                },
            ]
        },
        code: `from sympy import symbols, solve, Eq
P, r, t, A = symbols('P r t A')
# Formule intérêt composé continu : A = P * exp(rt)
# Combien de temps pour doubler son capital ? (A = 2P)
eq = Eq(2*P, P * 2.718** (r*t))
solve(eq, t)`,
        output: '[0.693/r] (Règle de 72)',
        exercises: [
            'Calculer les mensualités d\'un prêt',
            'Comparer deux investissements',
            'Calculer la valeur future d\'une épargne',
        ],
        practicalApplication: 'Banque, immobilier, retraite, gestion de patrimoine, trading.'
    },
    {
        id: 'day_038',
        dayNumber: 38,
        title: 'Économie : Marchés',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true,
        xpReward: 25,
        badge: '🏅 Économie : Marchés',
        africanAnalogy: `Le marché est une danse entre ceux qui vendent et ceux qui achètent. Le prix est le point d'accord où la danse est harmonieuse. Si le prix est trop haut, la musique s'arrête (surplus). Trop bas, c'est la cohue (pénurie).`,
        theory: {
            title: 'Offre et Demande',
            content: `Le modèle de l'offre et de la demande détermine le prix et la quantité d'équilibre dans un marché concurrentiel. C'est l'intersection de deux courbes.`,
            mathematicalFoundation: `
                    - Fonction de demande : Qd = a - bP (décroissante)\n                - Fonction d'offre : Qs = c + dP (croissante)\n                - Équilibre : Qd = Qs\n                - Élasticité-prix : sensibilité de la demande\n                - Surplus du consommateur et du producteur
                `,
            scientists: [
                {
                    name: 'Adam Smith',
                    year: '1776',
                    contribution: 'La main invisible',
                    context: 'La Richesse des Nations, fondation de l\'économie classique'
                },
                {
                    name: 'Alfred Marshall',
                    year: '1890',
                    contribution: 'Courbes d\'offre et demande',
                    context: 'Formalise l\'analyse graphique de l\'équilibre partiel'
                },
            ]
        },
        code: `from sympy import symbols, Eq, solve
P = symbols('P')
Qd = 100 - 2*P  # Demande
Qs = 20 + 3*P   # Offre
# Équilibre
eq = Eq(Qd, Qs)
prix_eq = solve(eq, P)[0]
quantite_eq = Qd.subs(P, prix_eq)
print(f'Prix: {prix_eq}, Quantité: {quantite_eq}')`,
        output: 'Prix: 16, Quantité: 68',
        exercises: [
            'Calculer l\'impact d\'une taxe',
            'Trouver le nouvel équilibre après un choc',
            'Calculer l\'élasticité',
        ],
        practicalApplication: 'Fixation des prix, politiques publiques, stratégie d\'entreprise, marketing.'
    },
    {
        id: 'day_039',
        dayNumber: 39,
        title: 'Ingénierie : RDM',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: true,
        xpReward: 40,
        badge: '🏅 Ingénierie : RDM',
        africanAnalogy: `La résistance des matériaux est l'art de savoir quand ça casse. Une poutre est comme un muscle : elle se tend et se comprime sous l'effort. L'ingénieur calcule la douleur de la matière pour éviter la fracture.`,
        theory: {
            title: 'Résistance des Matériaux',
            content: `Calcul des contraintes et déformations dans les structures. L'équation de la poutre (Euler-Bernoulli) décrit la flexion sous charge.`,
            mathematicalFoundation: `
                    - Contrainte (σ) et Déformation (ε)\n                - Loi de Hooke : σ = Eε\n                - Moment fléchissant (M) et Effort tranchant (V)\n                - Équation de la poutre : EI y'''' = q(x)\n                - Flèche maximale
                `,
            scientists: [
                {
                    name: 'Galileo Galilei',
                    year: '1638',
                    contribution: 'Première théorie des poutres',
                    context: 'Tente de comprendre la rupture des pierres et du bois'
                },
                {
                    name: 'Euler & Bernoulli',
                    year: '1750',
                    contribution: 'Théorie Euler-Bernoulli',
                    context: 'Modèle encore utilisé aujourd\'hui pour les poutres minces'
                },
            ]
        },
        code: `from sympy import symbols, integrate
x, L, F, E, I = symbols('x L F E I')
# Moment fléchissant pour une poutre encastrée avec force au bout
M = -F * (L - x)
# Équation de la déformée : EI y'' = M
# On intègre deux fois pour avoir y(x)
y_prime_prime = M / (E*I)
# ... intégration symbolique ...`,
        output: 'Flèche max = F*L^3 / (3*E*I)',
        exercises: [
            'Calculer la flèche d\'une poutre sur deux appuis',
            'Diagramme des moments',
            'Dimensionner une poutre en acier',
        ],
        practicalApplication: 'Génie civil (ponts, bâtiments), aéronautique, mécanique, design.'
    },
    {
        id: 'day_040',
        dayNumber: 40,
        title: 'Ingénierie : Circuits',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: true,
        xpReward: 35,
        badge: '🏅 Ingénierie : Circuits',
        africanAnalogy: `Un circuit électrique est comme un réseau de tuyaux d'eau. La tension est la pression, le courant est le débit, la résistance est un tuyau étroit. Le condensateur est un réservoir, l'inductance une roue à aubes.`,
        theory: {
            title: 'Analyse de Circuits',
            content: `Les lois de Kirchhoff et la loi d'Ohm permettent de résoudre n'importe quel circuit. En régime alternatif, on utilise les impédances complexes.`,
            mathematicalFoundation: `
                    - Loi d'Ohm : U = RI\n                - Loi des nœuds : ΣI = 0\n                - Loi des mailles : ΣU = 0\n                - Impédance complexe : Z_R=R, Z_L=jωL, Z_C=1/(jωC)\n                - Circuit RLC série/parallèle
                `,
            scientists: [
                {
                    name: 'Georg Ohm',
                    year: '1827',
                    contribution: 'Loi d\'Ohm',
                    context: 'Relation fondamentale entre tension, courant et résistance'
                },
                {
                    name: 'Gustav Kirchhoff',
                    year: '1845',
                    contribution: 'Lois des circuits',
                    context: 'Généralisation de la conservation de la charge et de l\'énergie'
                },
            ]
        },
        code: `from sympy import symbols, solve, I
R, L, C, omega = symbols('R L C omega', real=True)
# Impédance RLC série
Z = R + I*omega*L + 1/(I*omega*C)
# Fréquence de résonance (partie imaginaire nulle)
solve(Z.as_real_imag()[1], omega)`,
        output: '[1/sqrt(L*C), -1/sqrt(L*C)]',
        exercises: [
            'Calculer le courant dans un pont de Wheatstone',
            'Filtre passe-bas RC',
            'Puissance active et réactive',
        ],
        practicalApplication: 'Électronique, distribution d\'énergie, télécommunications, informatique.'
    },,
    {
            id: 'day_041',
            dayNumber: 41,
            title: 'Séries de Fourier',
            difficulty: 'Avancé',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 45,
            badge: '🏅 Séries de Fourier',
            africanAnalogy: `Une série de Fourier est comme décomposer un plat complexe en ses ingrédients de base. N'importe quel son, aussi complexe soit-il, est juste une somme de notes pures (sinusoïdes). C'est l'ADN des ondes.`,
            theory: {
                title: 'Analyse Harmonique',
                content: `Toute fonction périodique peut s'écrire comme une somme infinie de sinus et cosinus. C'est la base du traitement du signal (MP3, JPEG, 4G).`,
                mathematicalFoundation: `
                    - f(t) = a₀ + Σ (aₙ cos(nωt) + bₙ sin(nωt))\n                - Coefficients : aₙ = (2/T) ∫ f(t)cos(nωt)dt\n                - Spectre de fréquence\n                - Théorème de Parseval (conservation de l'énergie)
                `,
                scientists: [
                {
                        name: 'Joseph Fourier',
                        year: '1822',
                        contribution: 'Théorie analytique de la chaleur',
                        context: 'Invente cet outil pour résoudre l\'équation de la chaleur'
                    },
                    {
                        name: 'Jean le Rond d'Alembert',
                        year: '1747',
                        contribution: 'Équation des ondes',
                        context: 'Prépare le terrain pour l\'analyse des vibrations'
                    },
                ]
            },
            code: `from sympy import fourier_series, pi, symbols, plot
x = symbols('x')
# Série de Fourier d'un signal carré
s = fourier_series(x, (x, -pi, pi))
# Afficher les 3 premiers termes
s.truncate(3)`,
            output: '2*sin(x) - sin(2*x) + 2*sin(3*x)/3',
            exercises: [
            'Calculer la série de Fourier d\'une dent de scie',
            'Visualiser la convergence (phénomène de Gibbs)',
            'Calculer l\'énergie du signal',
        ],
            practicalApplication: 'Compression audio/image, télécommunications, IRM, analyse des vibrations.'
        },
    {
            id: 'day_042',
            dayNumber: 42,
            title: 'Transformée de Laplace',
            difficulty: 'Avancé',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 45,
            badge: '🏅 Transformée de Laplace',
            africanAnalogy: `La transformée de Laplace est une machine à traduire. Elle transforme des problèmes difficiles de calcul (équations différentielles) en problèmes faciles d'algèbre. On résout dans le monde facile, puis on re-traduit vers le monde réel.`,
            theory: {
                title: 'Calcul Opérationnel',
                content: `Transforme une fonction du temps f(t) en une fonction complexe F(s). Essentiel pour l'analyse des systèmes et l'automatique.`,
                mathematicalFoundation: `
                    - L{f(t)} = ∫₀^∞ f(t)e^(-st)dt\n                - L{f'} = sF(s) - f(0)\n                - L{f''} = s²F(s) - sf(0) - f'(0)\n                - Théorème de la valeur finale\n                - Convolution : L{f*g} = F(s)G(s)
                `,
                scientists: [
                {
                        name: 'Pierre-Simon de Laplace',
                        year: '1785',
                        contribution: 'Théorie analytique des probabilités',
                        context: 'Le \'Newton français\', développe cet outil puissant'
                    },
                    {
                        name: 'Oliver Heaviside',
                        year: '1880',
                        contribution: 'Calcul opérationnel',
                        context: 'Ingénieur autodidacte, applique Laplace à l\'électricité'
                    },
                ]
            },
            code: `from sympy import laplace_transform, inverse_laplace_transform, symbols, exp, sin
t, s, a = symbols('t s a')
# Transformée de sin(at)
L = laplace_transform(sin(a*t), t, s)
print(f'L{{sin(at)}} = {L[0]}')`,
            output: 'L{sin(at)} = a/(a**2 + s**2)',
            exercises: [
            'Résoudre y\'\' + y = 0 avec Laplace',
            'Trouver la transformée inverse de 1/(s+1)^2',
            'Fonction de transfert d\'un circuit RC',
        ],
            practicalApplication: 'Automatique (régulateurs PID), circuits électriques, mécanique (amortisseurs).'
        },
    {
            id: 'day_043',
            dayNumber: 43,
            title: 'Équations Différentielles Partielles',
            difficulty: 'Expert',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 50,
            badge: '🏅 Équations Différentielles Partielles',
            africanAnalogy: `Une EDP décrit comment quelque chose change dans l'espace et le temps simultanément. Comme la chaleur qui se diffuse dans une barre de métal ou une vague qui se propage sur l'eau. C'est la symphonie de l'univers continu.`,
            theory: {
                title: 'Physique Mathématique',
                content: `Les EDP modélisent la plupart des phénomènes physiques. La méthode de séparation des variables est une technique classique de résolution.`,
                mathematicalFoundation: `
                    - Équation de la chaleur : ∂u/∂t = α∇²u\n                - Équation des ondes : ∂²u/∂t² = c²∇²u\n                - Équation de Laplace : ∇²u = 0\n                - Conditions aux limites (Dirichlet, Neumann)\n                - Séparation des variables : u(x,t) = X(x)T(t)
                `,
                scientists: [
                {
                        name: 'Joseph Fourier',
                        year: '1807',
                        contribution: 'Propagation de la chaleur',
                        context: 'Fonde la thermodynamique théorique'
                    },
                    {
                        name: 'Bernhard Riemann',
                        year: '1860',
                        contribution: 'Ondes de choc',
                        context: 'Travaux sur la dynamique des fluides'
                    },
                ]
            },
            code: `from sympy import Function, pde_separate, Eq, symbols
x, t, c = symbols('x t c')
u = Function('u')(x, t)
# Équation des ondes 1D
eq = Eq(u.diff(t, 2), c**2 * u.diff(x, 2))
# Séparation des variables u(x,t) = X(x)T(t)
pde_separate(eq, u, [Function('X')(x), Function('T')(t)])`,
            output: '[X\'\'(x)/X(x), T\'\'(t)/(c**2*T(t))]',
            exercises: [
            'Résoudre l\'équation de la chaleur 1D',
            'Vérifier si f(x-ct) est solution de l\'équation d\'onde',
            'Équation de Laplace en coordonnées polaires',
        ],
            practicalApplication: 'Météorologie, acoustique, finance (Black-Scholes), imagerie médicale.'
        },
    {
            id: 'day_044',
            dayNumber: 44,
            title: 'Calcul Vectoriel',
            difficulty: 'Avancé',
            masteryLevel: 'Avancé',
            unlocked: true,
            xpReward: 40,
            badge: '🏅 Calcul Vectoriel',
            africanAnalogy: `Le calcul vectoriel est la langue des champs invisibles. Le gradient dit où ça monte le plus vite. La divergence dit où ça sort (source). Le rotationnel dit où ça tourne (tourbillon). C'est la carte météo des forces.`,
            theory: {
                title: 'Opérateurs Différentiels',
                content: `Gradient, Divergence et Rotationnel sont les outils pour analyser les champs scalaires et vectoriels. Essentiel pour l'électromagnétisme et la mécanique des fluides.`,
                mathematicalFoundation: `
                    - Nabla : ∇ = (∂/∂x, ∂/∂y, ∂/∂z)\n                - Gradient : ∇f (vecteur pente)\n                - Divergence : ∇·F (flux sortant)\n                - Rotationnel : ∇×F (tendance à tourner)\n                - Théorèmes : Green, Stokes, Ostrogradsky
                `,
                scientists: [
                {
                        name: 'James Clerk Maxwell',
                        year: '1865',
                        contribution: 'Équations de Maxwell',
                        context: 'Unifie électricité et magnétisme avec ces opérateurs'
                    },
                    {
                        name: 'Josiah Willard Gibbs',
                        year: '1880',
                        contribution: 'Notation vectorielle moderne',
                        context: 'Simplifie grandement les mathématiques de la physique'
                    },
                ]
            },
            code: `from sympy.vector import CoordSys3D, Del
C = CoordSys3D('C')
delop = Del()
# Champ scalaire f = x^2 + y^2
f = C.x**2 + C.y**2
# Gradient
delop(f)`,
            output: '2*C.x*C.i + 2*C.y*C.j',
            exercises: [
            'Calculer la divergence d\'un champ radial',
            'Calculer le rotationnel d\'un tourbillon',
            'Vérifier div(rot F) = 0',
        ],
            practicalApplication: 'Électromagnétisme, météo (vents), écoulement de fluides, infographie 3D.'
        },
    {
            id: 'day_045',
            dayNumber: 45,
            title: 'Physique Q : Schrödinger',
            difficulty: 'Expert',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 50,
            badge: '🏅 Physique Q : Schrödinger',
            africanAnalogy: `En quantique, une particule n'est pas un point, c'est un nuage de probabilité. L'équation de Schrödinger décrit comment ce nuage danse et change de forme. On ne sait pas où est la particule, seulement où elle pourrait être.`,
            theory: {
                title: 'Mécanique Ondulatoire',
                content: `L'équation de Schrödinger est l'équivalent quantique de F=ma. Elle décrit l'évolution de la fonction d'onde Ψ dont le module au carré donne la probabilité de présence.`,
                mathematicalFoundation: `
                    - iħ ∂Ψ/∂t = ĤΨ (Équation dépendante du temps)\n                - ĤΨ = EΨ (Équation indépendante du temps)\n                - Opérateur Hamiltonien : Ĥ = -ħ²/2m ∇² + V\n                - Normalisation : ∫|Ψ|²dV = 1\n                - Quantification de l'énergie
                `,
                scientists: [
                {
                        name: 'Erwin Schrödinger',
                        year: '1926',
                        contribution: 'Équation de Schrödinger',
                        context: 'Prix Nobel, formule la mécanique ondulatoire'
                    },
                    {
                        name: 'Max Born',
                        year: '1926',
                        contribution: 'Interprétation probabiliste',
                        context: 'Donne le sens physique à la fonction d\'onde'
                    },
                ]
            },
            code: `from sympy import symbols, Function, Eq, dsolve, hbar, m
x, E = symbols('x E')
psi = Function('psi')(x)
# Équation de Schrödinger 1D particule libre (V=0)
eq = Eq(-hbar**2 / (2*m) * psi.diff(x, 2), E * psi)
dsolve(eq, psi)`,
            output: 'C1*exp(-i*x*sqrt(2mE)/hbar) + ...',
            exercises: [
            'Particule dans une boîte 1D',
            'Normaliser une fonction d\'onde',
            'Calculer la probabilité de présence',
        ],
            practicalApplication: 'Chimie quantique, semi-conducteurs, lasers, nanotechnologies.'
        },
    {
            id: 'day_046',
            dayNumber: 46,
            title: 'Physique Q : Heisenberg',
            difficulty: 'Avancé',
            masteryLevel: 'Avancé',
            unlocked: true,
            xpReward: 40,
            badge: '🏅 Physique Q : Heisenberg',
            africanAnalogy: `Le principe d'incertitude est comme essayer de prendre une photo nette d'une voiture de course. Si la photo est nette (position précise), on ne voit pas sa vitesse (flou de mouvement). Si on voit le flou (vitesse), on ne sait pas où elle est exactement.`,
            theory: {
                title: 'Incertitude Quantique',
                content: `Il est impossible de connaître simultanément avec une précision infinie la position et la quantité de mouvement d'une particule. Ce n'est pas une limite technologique, mais fondamentale.`,
                mathematicalFoundation: `
                    - Δx · Δp ≥ ħ/2\n                - ΔE · Δt ≥ ħ/2\n                - Commutateur : [x, p] = iħ\n                - Opérateurs non-commutatifs\n                - Paquet d'ondes gaussien (état d'incertitude minimale)
                `,
                scientists: [
                {
                        name: 'Werner Heisenberg',
                        year: '1927',
                        contribution: 'Principe d\'incertitude',
                        context: 'Fonde la mécanique matricielle'
                    },
                    {
                        name: 'Niels Bohr',
                        year: '1927',
                        contribution: 'Principe de complémentarité',
                        context: 'Onde et corpuscule sont deux aspects complémentaires'
                    },
                ]
            },
            code: `from sympy.physics.quantum import Commutator, Operator
from sympy import I, hbar
X = Operator('X')
P = Operator('P')
# Commutateur canonique
Commutator(X, P).doit()`,
            output: 'I*hbar',
            exercises: [
            'Calculer l\'incertitude minimale pour un électron',
            'Lien avec la transformée de Fourier',
            'Incertitude énergie-temps pour une particule instable',
        ],
            practicalApplication: 'Microscopes électroniques, stabilité de la matière, vide quantique.'
        },
    {
            id: 'day_047',
            dayNumber: 47,
            title: 'Physique Q : Puits',
            difficulty: 'Intermédiaire',
            masteryLevel: 'Intermédiaire',
            unlocked: true,
            xpReward: 35,
            badge: '🏅 Physique Q : Puits',
            africanAnalogy: `Une particule dans un puits est comme une corde de guitare attachée aux deux bouts. Elle ne peut vibrer qu'à certaines fréquences précises. De même, l'énergie de la particule est 'quantifiée' : elle ne peut prendre que certaines valeurs, comme les barreaux d'une échelle.`,
            theory: {
                title: 'Puits de Potentiel Infini',
                content: `Modèle simple mais fondamental montrant la quantification de l'énergie. La particule est confinée dans une région de l'espace.`,
                mathematicalFoundation: `
                    - V(x) = 0 pour 0 < x < L, ∞ ailleurs\n                - Conditions aux limites : Ψ(0) = Ψ(L) = 0\n                - Solutions : Ψₙ(x) = √(2/L) sin(nπx/L)\n                - Énergies : Eₙ = n²h² / (8mL²)\n                - Niveau fondamental E₁ > 0 (énergie de point zéro)
                `,
                scientists: [
                {
                        name: 'Louis de Broglie',
                        year: '1924',
                        contribution: 'Dualité onde-corpuscule',
                        context: 'Hypothèse que toute matière a une longueur d\'onde'
                    },
                    {
                        name: 'Wolfgang Pauli',
                        year: '1925',
                        contribution: 'Principe d\'exclusion',
                        context: 'Explique la structure des atomes'
                    },
                ]
            },
            code: `from sympy import sin, pi, sqrt, integrate, symbols
n, x, L = symbols('n x L', positive=True, integer=True)
# Fonction d'onde normalisée
psi = sqrt(2/L) * sin(n*pi*x/L)
# Vérifier la normalisation
integrate(psi**2, (x, 0, L))`,
            output: '1',
            exercises: [
            'Calculer la différence d\'énergie E2 - E1',
            'Probabilité de trouver la particule au centre',
            'Puits de potentiel fini (effet tunnel)',
        ],
            practicalApplication: 'Points quantiques (QLED), puits quantiques (lasers), nanostructures.'
        },
    {
            id: 'day_048',
            dayNumber: 48,
            title: 'Physique Q : Spin',
            difficulty: 'Expert',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 50,
            badge: '🏅 Physique Q : Spin',
            africanAnalogy: `Le spin est comme si les particules tournaient sur elles-mêmes, mais c'est une rotation purement quantique sans équivalent classique. C'est comme une toupie qui ne peut pointer que vers le haut ou vers le bas, jamais entre les deux.`,
            theory: {
                title: 'Moment Cinétique Intrinsèque',
                content: `Le spin est une propriété fondamentale des particules. Les fermions (électrons) ont un spin 1/2, les bosons (photons) un spin entier. Décrit par les matrices de Pauli.`,
                mathematicalFoundation: `
                    - Spin 1/2 : états |↑⟩ et |↓⟩\n                - Matrices de Pauli : σx, σy, σz\n                - Algèbre des commutateurs : [σx, σy] = 2iσz\n                - Espace de Hilbert de dimension 2 (Qubit)\n                - Expérience de Stern-Gerlach
                `,
                scientists: [
                {
                        name: 'Paul Dirac',
                        year: '1928',
                        contribution: 'Équation de Dirac',
                        context: 'Unifie quantique et relativité, prédit l\'antimatière et le spin'
                    },
                    {
                        name: 'Wolfgang Pauli',
                        year: '1924',
                        contribution: 'Matrices de Pauli',
                        context: 'Formalisme mathématique du spin'
                    },
                ]
            },
            code: `from sympy.physics.matrices import msigma
# Matrices de Pauli
sigma_x = msigma(1)
sigma_y = msigma(2)
# Commutateur [Sx, Sy]
comm = sigma_x * sigma_y - sigma_y * sigma_x
print(comm)`,
            output: '2*I*sigma_z',
            exercises: [
            'Vérifier σx² = I',
            'Calculer les valeurs propres de σz',
            'Représentation sur la sphère de Bloch',
        ],
            practicalApplication: 'IRM (Résonance Magnétique Nucléaire), Ordinateur quantique (Qubits), Spintronique.'
        },
    {
            id: 'day_049',
            dayNumber: 49,
            title: 'Physique Q : Oscillateur',
            difficulty: 'Expert',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 50,
            badge: '🏅 Physique Q : Oscillateur',
            africanAnalogy: `L'oscillateur harmonique est le pendule de la mécanique quantique. Tout ce qui vibre (atomes, molécules, lumière) se comporte comme un oscillateur. C'est le modèle le plus important de la physique.`,
            theory: {
                title: 'Oscillateur Harmonique Quantique',
                content: `Potentiel parabolique V(x) = 1/2 kx². Les niveaux d'énergie sont équidistants : Eₙ = ħω(n + 1/2). Utilise les opérateurs d'échelle (création/annihilation).`,
                mathematicalFoundation: `
                    - Hamiltonien : H = p²/2m + 1/2 mω²x²\n                - Opérateurs échelle : a (annihilation), a† (création)\n                - H = ħω(a†a + 1/2)\n                - Fonctions d'onde : polynômes d'Hermite\n                - État fondamental gaussien
                `,
                scientists: [
                {
                        name: 'Max Planck',
                        year: '1900',
                        contribution: 'Quanta d\'énergie',
                        context: 'Résout la catastrophe ultraviolette avec E=hν'
                    },
                    {
                        name: 'Albert Einstein',
                        year: '1905',
                        contribution: 'Effet photoélectrique',
                        context: 'Montre que la lumière est quantifiée (photons)'
                    },
                ]
            },
            code: `from sympy.physics.qho_1d import psi_n, E_n
from sympy import symbols, m, omega, hbar
x = symbols('x')
# Énergie du niveau n=0 (fondamental)
E0 = E_n(0, omega)
# Fonction d'onde n=0
psi0 = psi_n(0, x, m, omega)`,
            output: 'E0 = hbar*omega/2',
            exercises: [
            'Vérifier l\'orthogonalité des états',
            'Calculer <x> et <p> dans l\'état fondamental',
            'Principe de correspondance (n grand)',
        ],
            practicalApplication: 'Spectroscopie moléculaire, théorie quantique des champs, phonons.'
        },
    {
            id: 'day_050',
            dayNumber: 50,
            title: 'Physique Q : Intrication',
            difficulty: 'Légendaire',
            masteryLevel: 'Maître',
            unlocked: true,
            xpReward: 100,
            badge: '🏅 Physique Q : Intrication',
            africanAnalogy: `L'intrication est un lien fantôme entre deux particules. Même séparées par des années-lumière, elles forment un seul objet. Si on touche l'une, l'autre réagit instantanément. Einstein appelait ça 'action fantôme à distance'.`,
            theory: {
                title: 'Intrication et Paradoxe EPR',
                content: `Deux particules intriquées ne peuvent être décrites séparément. L'état est global. La mesure de l'une fixe instantanément l'état de l'autre.`,
                mathematicalFoundation: `
                    - État de Bell : |Φ⁺⟩ = (|00⟩ + |11⟩)/√2\n                - Non-localité\n                - Inégalités de Bell : testent le réalisme local\n                - Matrice densité\n                - Téléportation quantique
                `,
                scientists: [
                {
                        name: 'Einstein, Podolsky, Rosen',
                        year: '1935',
                        contribution: 'Paradoxe EPR',
                        context: 'Questionnent la complétude de la mécanique quantique'
                    },
                    {
                        name: 'John Bell',
                        year: '1964',
                        contribution: 'Inégalités de Bell',
                        context: 'Prouve qu\'on peut tester expérimentalement le débat EPR'
                    },
                    {
                        name: 'Alain Aspect',
                        year: '1982',
                        contribution: 'Expérience d\'Aspect',
                        context: 'Prix Nobel 2022, confirme la mécanique quantique'
                    },
                ]
            },
            code: `from sympy.physics.quantum.qubit import Qubit
from sympy.physics.quantum.gate import H, CNOT
# Création d'un état de Bell (intriqué)
# |00> -> H -> (|00>+|10>)/sqrt(2) -> CNOT -> (|00>+|11>)/sqrt(2)
q = Qubit('00')
circuit = CNOT(0, 1) * H(0)
state = circuit * q`,
            output: 'sqrt(2)*|00>/2 + sqrt(2)*|11>/2',
            exercises: [
            'Démontrer la violation des inégalités de Bell',
            'Protocole de téléportation quantique',
            'Cryptographie quantique (E91)',
        ],
            practicalApplication: 'Ordinateur quantique, cryptographie inviolable, internet quantique.'
        },,
    {
            id: 'day_051',
            dayNumber: 51,
            title: 'Relativité : Temps',
            difficulty: 'Avancé',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 45,
            badge: '🏅 Relativité : Temps',
            africanAnalogy: `Le temps n'est pas une rivière qui coule partout à la même vitesse. C'est comme le rythme d'un tam-tam : si tu t'éloignes très vite, le son te parvient au ralenti. Pour celui qui voyage à la vitesse de la lumière, le temps s'arrête.`,
            theory: {
                title: 'Relativité Restreinte',
                content: `Le temps et l'espace sont liés. La vitesse de la lumière c est constante pour tous les observateurs, ce qui implique que le temps se dilate et les longueurs se contractent à haute vitesse.`,
                mathematicalFoundation: `
                    - Facteur de Lorentz : γ = 1 / √(1 - v²/c²)\n                - Dilatation du temps : Δt' = γΔt\n                - Contraction des longueurs : L' = L/γ\n                - Transformation de Lorentz (x, y, z, t) -> (x', y', z', t')\n                - Invariant d'intervalle : ds² = c²dt² - dx² - dy² - dz²
                `,
                scientists: [
                {
                        name: 'Albert Einstein',
                        year: '1905',
                        contribution: 'Relativité Restreinte',
                        context: 'Annus Mirabilis, révolutionne la physique'
                    },
                    {
                        name: 'Hendrik Lorentz',
                        year: '1904',
                        contribution: 'Transformations de Lorentz',
                        context: 'Précurseur mathématique de la relativité'
                    },
                ]
            },
            code: `from sympy import symbols, sqrt, simplify
v, c, t = symbols('v c t', positive=True)
# Facteur de Lorentz
gamma = 1 / sqrt(1 - v**2/c**2)
# Temps propre vs Temps mesuré
t_mesure = gamma * t
print(f'Facteur gamma pour v=0.9c : {gamma.subs(v, 0.9*c)}')`,
            output: '2.294',
            exercises: [
            'Calculer le temps vécu par un astronaute (Paradoxe des jumeaux)',
            'Contraction d\'un vaisseau spatial',
            'Addition des vitesses relativistes',
        ],
            practicalApplication: 'GPS (correction relativiste nécessaire), accélérateurs de particules, physique nucléaire.'
        },
    {
            id: 'day_052',
            dayNumber: 52,
            title: 'Relativité : E=mc²',
            difficulty: 'Avancé',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 45,
            badge: '🏅 Relativité : E=mc²',
            africanAnalogy: `La matière est de l'énergie condensée, comme la glace est de l'eau figée. Un petit caillou contient assez d'énergie pour alimenter une ville, si on savait la libérer. C'est le secret du Soleil.`,
            theory: {
                title: 'Équivalence Masse-Énergie',
                content: `La masse est une forme d'énergie. E=mc² signifie qu'une petite quantité de masse peut se transformer en une énorme quantité d'énergie (et inversement).`,
                mathematicalFoundation: `
                    - Énergie au repos : E₀ = mc²\n                - Énergie totale : E = γmc²\n                - Impulsion : p = γmv\n                - Relation énergie-impulsion : E² = (pc)² + (mc²)²\n                - Masse invariante
                `,
                scientists: [
                {
                        name: 'Albert Einstein',
                        year: '1905',
                        contribution: 'E=mc²',
                        context: 'Conséquence de la relativité restreinte'
                    },
                    {
                        name: 'Lise Meitner',
                        year: '1938',
                        contribution: 'Fission nucléaire',
                        context: 'Explique la perte de masse par la libération d\'énergie'
                    },
                ]
            },
            code: `from sympy import symbols, sqrt, solve, Eq
E, m, p, c = symbols('E m p c', positive=True)
# Relation complète E^2 = p^2c^2 + m^2c^4
# Trouver la masse si on connait E et p (physique des particules)
eq = Eq(E**2, (p*c)**2 + (m*c**2)**2)
solve(eq, m)`,
            output: '[sqrt(E**2 - c**2*p**2)/c**2]',
            exercises: [
            'Calculer l\'énergie libérée par 1g de matière',
            'Défaut de masse dans une réaction nucléaire',
            'Énergie cinétique relativiste (E - mc²)',
        ],
            practicalApplication: 'Centrales nucléaires, médecine (PET scan), astrophysique (étoiles).'
        },
    {
            id: 'day_053',
            dayNumber: 53,
            title: 'Trous Noirs : Métrique',
            difficulty: 'Expert',
            masteryLevel: 'Maître',
            unlocked: true,
            xpReward: 55,
            badge: '🏅 Trous Noirs : Métrique',
            africanAnalogy: `Un trou noir courbe l'espace comme une bille de plomb sur un drap tendu, mais à l'extrême. Le drap se déchire presque, créant un puits sans fond. Même la lumière, la chose la plus rapide, ne peut pas remonter la pente.`,
            theory: {
                title: 'Relativité Générale',
                content: `La gravité n'est pas une force, mais la courbure de l'espace-temps. La métrique de Schwarzschild décrit l'espace-temps autour d'une masse sphérique (étoile, trou noir).`,
                mathematicalFoundation: `
                    - Métrique : ds² = g_μν dx^μ dx^ν\n                - Rayon de Schwarzschild : Rs = 2GM/c²\n                - Horizon des événements\n                - Dilatation temporelle gravitationnelle\n                - Singularité
                `,
                scientists: [
                {
                        name: 'Karl Schwarzschild',
                        year: '1916',
                        contribution: 'Solution exacte des équations d\'Einstein',
                        context: 'Trouvée dans les tranchées de la 1ère guerre mondiale'
                    },
                    {
                        name: 'Albert Einstein',
                        year: '1915',
                        contribution: 'Relativité Générale',
                        context: 'Une des plus belles théories de la physique'
                    },
                ]
            },
            code: `from sympy import symbols, diag, sin
from sympy.diffgeom import Manifold, Patch, CoordSystem
# Définition symbolique de la métrique (simplifiée)
t, r, theta, phi = symbols('t r theta phi')
G, M, c = symbols('G M c')
Rs = 2*G*M/c**2
# Composante g_tt (temps)
g_tt = -(1 - Rs/r)
print(f'Métrique g_tt : {g_tt}')`,
            output: 'Métrique g_tt : -1 + 2*G*M/(c**2*r)',
            exercises: [
            'Calculer le rayon de Schwarzschild de la Terre',
            'Temps écoulé près de l\'horizon vs à l\'infini',
            'Vitesse de libération',
        ],
            practicalApplication: 'Astronomie (Sagittarius A*), GPS (correction RG), ondes gravitationnelles.'
        },
    {
            id: 'day_054',
            dayNumber: 54,
            title: 'Géodésiques',
            difficulty: 'Expert',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 50,
            badge: '🏅 Géodésiques',
            africanAnalogy: `Dans un espace courbe, la ligne droite n'existe pas. Le chemin le plus court est une courbe, comme la trajectoire d'un avion sur Terre. La lumière suit ces 'lignes droites courbes' (géodésiques), c'est pourquoi la gravité dévie la lumière.`,
            theory: {
                title: 'Mouvement en Espace Courbe',
                content: `Les objets en chute libre suivent les géodésiques de l'espace-temps. Cela explique les orbites et la déviation de la lumière par les étoiles.`,
                mathematicalFoundation: `
                    - Équation des géodésiques\n                - Symboles de Christoffel : Γ^λ_μν\n                - Déviation de la lumière (Lentille gravitationnelle)\n                - Avance du périhélie de Mercure\n                - Redshift gravitationnel
                `,
                scientists: [
                {
                        name: 'Arthur Eddington',
                        year: '1919',
                        contribution: 'Confirmation expérimentale',
                        context: 'Observe la déviation de la lumière lors d\'une éclipse'
                    },
                    {
                        name: 'Bernhard Riemann',
                        year: '1854',
                        contribution: 'Géométrie Riemannienne',
                        context: 'Mathématiques des espaces courbes'
                    },
                ]
            },
            code: `from sympy import symbols, Function, dsolve, Derivative
# Équation simplifiée d'une géodésique
t = symbols('t')
x = Function('x')(t)
# x'' + Gamma * (x')^2 = 0
Gamma = symbols('Gamma')
eq = x.diff(t, 2) + Gamma * x.diff(t)**2
dsolve(eq, x)`,
            output: 'C1 + log(C2*t + 1)/Gamma',
            exercises: [
            'Calculer la déviation de la lumière par le Soleil',
            'Expliquer l\'avance du périhélie de Mercure',
            'Trajectoire d\'un photon autour d\'un trou noir',
        ],
            practicalApplication: 'Astronomie, cosmologie, navigation spatiale de précision.'
        },
    {
            id: 'day_055',
            dayNumber: 55,
            title: 'Lois de Kepler',
            difficulty: 'Intermédiaire',
            masteryLevel: 'Intermédiaire',
            unlocked: true,
            xpReward: 35,
            badge: '🏅 Lois de Kepler',
            africanAnalogy: `Les planètes ne dansent pas n'importe comment. Elles suivent une valse précise en ellipse autour du Soleil. Plus elles sont proches, plus elles vont vite, comme un patineur qui replie ses bras.`,
            theory: {
                title: 'Mécanique Céleste',
                content: `Les trois lois de Kepler décrivent le mouvement des planètes. Newton a montré qu'elles découlent de la force gravitationnelle en 1/r².`,
                mathematicalFoundation: `
                    - 1ère loi : Orbites elliptiques (Soleil au foyer)\n                - 2ème loi : Loi des aires (dA/dt = constante)\n                - 3ème loi : T²/a³ = constante\n                - Excentricité e, Demi-grand axe a\n                - Vitesse orbitale
                `,
                scientists: [
                {
                        name: 'Johannes Kepler',
                        year: '1609',
                        contribution: 'Lois du mouvement planétaire',
                        context: 'Analyse les données précises de Tycho Brahe'
                    },
                    {
                        name: 'Isaac Newton',
                        year: '1687',
                        contribution: 'Gravitation universelle',
                        context: 'Unifie la pomme et la Lune'
                    },
                ]
            },
            code: `from sympy import symbols, pi, solve, Eq
T, a, G, M = symbols('T a G M')
# 3ème loi de Kepler : T^2 / a^3 = 4*pi^2 / (GM)
eq = Eq(T**2 / a**3, 4*pi**2 / (G*M))
# Calculer la période T
solve(eq, T)`,
            output: '[-2*pi*a**(3/2)/sqrt(G*M), 2*pi*a**(3/2)/sqrt(G*M)]',
            exercises: [
            'Calculer la période de Mars',
            'Vitesse de la Terre à l\'aphélie vs périhélie',
            'Masse du Soleil à partir de l\'orbite terrestre',
        ],
            practicalApplication: 'Lancement de satellites, missions interplanétaires, exoplanètes.'
        },
    {
            id: 'day_056',
            dayNumber: 56,
            title: 'Étoiles : HR',
            difficulty: 'Intermédiaire',
            masteryLevel: 'Avancé',
            unlocked: true,
            xpReward: 40,
            badge: '🏅 Étoiles : HR',
            africanAnalogy: `Les étoiles ont une vie. Elles naissent, brillent et meurent. Le diagramme HR est leur album photo de famille, classant les étoiles par couleur (température) et luminosité. Il raconte leur destin.`,
            theory: {
                title: 'Physique Stellaire',
                content: `Le diagramme Hertzsprung-Russell (HR) est l'outil central de l'astrophysique stellaire. Il montre la Séquence Principale, les Géantes Rouges et les Naines Blanches.`,
                mathematicalFoundation: `
                    - Luminosité : L = 4πR²σT⁴ (Stefan-Boltzmann)\n                - Magnitude absolue vs apparente\n                - Classification spectrale (O B A F G K M)\n                - Fusion nucléaire (cycle pp, CNO)\n                - Équilibre hydrostatique
                `,
                scientists: [
                {
                        name: 'Ejnar Hertzsprung & Henry Norris Russell',
                        year: '1910',
                        contribution: 'Diagramme HR',
                        context: 'Découverte indépendante de la relation couleur-luminosité'
                    },
                    {
                        name: 'Cecilia Payne',
                        year: '1925',
                        contribution: 'Composition des étoiles',
                        context: 'Montre que les étoiles sont surtout de l\'hydrogène'
                    },
                ]
            },
            code: `from sympy import symbols, solve, Eq
L, R, T, sigma = symbols('L R T sigma')
# Loi de Stefan-Boltzmann
eq = Eq(L, 4*pi*R**2 * sigma * T**4)
# Trouver le rayon R connaissant L et T
solve(eq, R)`,
            output: '[-sqrt(L)/(2*sqrt(pi)*sqrt(sigma)*T**2), ...]',
            exercises: [
            'Calculer le rayon de Bételgeuse',
            'Estimer la durée de vie du Soleil',
            'Classer une étoile donnée (G2V)',
        ],
            practicalApplication: 'Étude de l\'évolution stellaire, distance des étoiles, recherche de vie.'
        },
    {
            id: 'day_057',
            dayNumber: 57,
            title: 'Cosmologie : Hubble',
            difficulty: 'Avancé',
            masteryLevel: 'Avancé',
            unlocked: true,
            xpReward: 40,
            badge: '🏅 Cosmologie : Hubble',
            africanAnalogy: `L'univers est comme un ballon qui gonfle. Les galaxies sont des points sur le ballon. Plus elles sont loin, plus elles s'éloignent vite, non pas parce qu'elles bougent, mais parce que l'espace entre elles grandit.`,
            theory: {
                title: 'Expansion de l\'Univers',
                content: `La loi de Hubble-Lemaître relie la distance des galaxies à leur vitesse de récession. C'est la première preuve du Big Bang.`,
                mathematicalFoundation: `
                    - Loi de Hubble : v = H₀d\n                - Constante de Hubble H₀\n                - Redshift (décalage vers le rouge) : z = Δλ/λ\n                - v ≈ cz (pour v << c)\n                - Âge de l'univers ≈ 1/H₀
                `,
                scientists: [
                {
                        name: 'Edwin Hubble',
                        year: '1929',
                        contribution: 'Loi de Hubble',
                        context: 'Observe que les galaxies s\'éloignent'
                    },
                    {
                        name: 'Georges Lemaître',
                        year: '1927',
                        contribution: 'Atome primitif (Big Bang)',
                        context: 'Prêtre et physicien, prédit l\'expansion avant Hubble'
                    },
                ]
            },
            code: `from sympy import symbols, units
v, H0, d = symbols('v H0 d')
# Loi de Hubble
# H0 approx 70 km/s/Mpc
val_H0 = 70 # km/s/Mpc
dist = 100 # Mpc
vitesse = val_H0 * dist
print(f'Vitesse de récession : {vitesse} km/s')`,
            output: 'Vitesse de récession : 7000 km/s',
            exercises: [
            'Calculer l\'âge approximatif de l\'univers',
            'Distance d\'une galaxie avec z=0.1',
            'Horizon cosmologique',
        ],
            practicalApplication: 'Cosmologie, destin de l\'univers, énergie noire.'
        },
    {
            id: 'day_058',
            dayNumber: 58,
            title: 'Cosmologie : Big Bang',
            difficulty: 'Expert',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 50,
            badge: '🏅 Cosmologie : Big Bang',
            africanAnalogy: `Les équations de Friedmann sont le mode d'emploi de l'univers. Elles disent comment l'univers évolue en fonction de ce qu'il contient (matière, rayonnement, énergie noire). Elles prédisent si l'univers finira en glace (expansion infinie) ou en feu (Big Crunch).`,
            theory: {
                title: 'Équations de Friedmann',
                content: `Dérivées de la Relativité Générale, elles décrivent l'évolution du facteur d'échelle a(t) de l'univers.`,
                mathematicalFoundation: `
                    - Métrique FLRW (Friedmann-Lemaître-Robertson-Walker)\n                - Facteur d'échelle a(t)\n                - (ȧ/a)² = 8πGρ/3 - kc²/a² + Λc²/3\n                - Densité critique ρc\n                - Paramètres de densité Ω
                `,
                scientists: [
                {
                        name: 'Alexander Friedmann',
                        year: '1922',
                        contribution: 'Solutions dynamiques de la RG',
                        context: 'Montre que l\'univers ne peut pas être statique'
                    },
                    {
                        name: 'Arno Penzias & Robert Wilson',
                        year: '1965',
                        contribution: 'Fond diffus cosmologique (CMB)',
                        context: 'Preuve observationnelle majeure du Big Bang'
                    },
                ]
            },
            code: `from sympy import symbols, Function, dsolve, Eq
a = Function('a')
t, k, rho = symbols('t k rho')
# Équation simplifiée (univers plat k=0, dominé matière)
# (a'/a)^2 ~ 1/a^3  => a' ~ a^(-1/2)
eq = Eq(a(t).diff(t), t**(-1/2)) # Simplification conceptuelle
# La vraie solution est a(t) ~ t^(2/3)`,
            output: 'Modèle d\'univers en expansion',
            exercises: [
            'Évolution dans un univers dominé par le rayonnement',
            'Rôle de la constante cosmologique Λ',
            'Destin de l\'univers selon Ω',
        ],
            practicalApplication: 'Modèle standard de la cosmologie, simulation de l\'univers.'
        },
    {
            id: 'day_059',
            dayNumber: 59,
            title: 'Mécanique Céleste : N-Corps',
            difficulty: 'Expert',
            masteryLevel: 'Expert',
            unlocked: true,
            xpReward: 50,
            badge: '🏅 Mécanique Céleste : N-Corps',
            africanAnalogy: `Le problème à deux corps est une valse simple. Le problème à trois corps est un chaos imprévisible. Imaginez trois danseurs qui se tirent et se poussent tous en même temps sans rythme fixe. C'est le chaos déterministe.`,
            theory: {
                title: 'Problème à N Corps',
                content: `Il n'existe pas de solution analytique générale pour N ≥ 3 corps. On doit utiliser des simulations numériques (intégrateurs symplectiques).`,
                mathematicalFoundation: `
                    - Équations du mouvement : F_i = Σ G m_i m_j (r_j - r_i) / |r_ij|³\n                - Chaos et sensibilité aux conditions initiales\n                - Points de Lagrange\n                - Intégration numérique (Verlet, Runge-Kutta)\n                - Conservation de l'énergie et du moment cinétique
                `,
                scientists: [
                {
                        name: 'Henri Poincaré',
                        year: '1890',
                        contribution: 'Théorie du chaos',
                        context: 'Découvre le chaos en étudiant le problème à 3 corps'
                    },
                    {
                        name: 'Joseph-Louis Lagrange',
                        year: '1772',
                        contribution: 'Points de Lagrange',
                        context: 'Solutions particulières stables'
                    },
                ]
            },
            code: `# Simulation conceptuelle (SymPy n'est pas fait pour la simu numérique lourde)
from sympy import symbols, diff
x1, y1, x2, y2 = symbols('x1 y1 x2 y2')
V = 1/sqrt((x1-x2)**2 + (y1-y2)**2) # Potentiel grav
Fx1 = -diff(V, x1)
print(f'Force sur x1 : {Fx1}')`,
            output: 'Force gravitationnelle symbolique',
            exercises: [
            'Stabilité du système Terre-Lune',
            'Points de Lagrange L4 et L5',
            'Effet de fronde gravitationnelle',
        ],
            practicalApplication: 'Trajectoires de sondes (Voyager), formation du système solaire, dynamique galactique.'
        },
    {
            id: 'day_060',
            dayNumber: 60,
            title: 'Trous Noirs : Hawking',
            difficulty: 'Légendaire',
            masteryLevel: 'Maître',
            unlocked: true,
            xpReward: 100,
            badge: '🏅 Trous Noirs : Hawking',
            africanAnalogy: `Les trous noirs ne sont pas si noirs. À cause de la mécanique quantique, ils 's'évaporent' lentement en émettant une faible lueur. C'est le chant du cygne d'un monstre cosmique qui finit par disparaître.`,
            theory: {
                title: 'Rayonnement de Hawking',
                content: `Stephen Hawking a montré que les effets quantiques près de l'horizon des événements créent un rayonnement thermique. Les trous noirs perdent de la masse et finissent par s'évaporer.`,
                mathematicalFoundation: `
                    - Température de Hawking : T = ħc³ / (8πGMk)\n                - Entropie de Bekenstein-Hawking : S = A / (4Lp²)\n                - Évaporation : dM/dt ∝ -1/M²\n                - Durée de vie : t ∝ M³\n                - Paradoxe de l'information
                `,
                scientists: [
                {
                        name: 'Stephen Hawking',
                        year: '1974',
                        contribution: 'Rayonnement des trous noirs',
                        context: 'Unit thermodynamique, quantique et gravité'
                    },
                    {
                        name: 'Jacob Bekenstein',
                        year: '1973',
                        contribution: 'Entropie des trous noirs',
                        context: 'Suggère que l\'entropie est proportionnelle à la surface'
                    },
                ]
            },
            code: `from sympy import symbols, pi, hbar, c, G, k
M = symbols('M')
# Température de Hawking
T = hbar * c**3 / (8 * pi * G * M * k)
print(f'Température inversement proportionnelle à la masse')`,
            output: 'T ~ 1/M',
            exercises: [
            'Calculer la température d\'un trou noir solaire',
            'Durée de vie d\'un micro trou noir',
            'Lien avec l\'entropie',
        ],
            practicalApplication: 'Gravité quantique, thermodynamique des trous noirs, cosmologie primordiale.'
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


