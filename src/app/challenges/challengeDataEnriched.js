// Données enrichies pour les challenges avec théorie, histoire, gamification
export const challengesEnriched = [
    {
        id: 'day_001',
        dayNumber: 1,
        title: 'Installation & Premier Notebook',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: true, // Toujours débloqué
        xpReward: 10,
        badge: '🎯 Premier Pas',
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
                    contribution: 'Créateur de Mathematica, pionnier du calcul symbolique moderne'
                },
                {
                    name: 'Ondřej Čertík',
                    year: '2006',
                    contribution: 'Fondateur de SymPy, bibliothèque Python de calcul symbolique'
                }
            ]
        },
        code: `import sympy as sp
sp.__version__`,
        output: 'version (ex: 1.12)',
        exercises: [
            'Installer SymPy avec pip install sympy',
            'Vérifier la version installée',
            'Créer votre premier notebook Jupyter'
        ],
        practicalApplication: 'Le calcul symbolique est utilisé en physique théorique, ingénierie, cryptographie et intelligence artificielle pour résoudre des problèmes complexes de manière exacte.'
    },
    {
        id: 'day_002',
        dayNumber: 2,
        title: 'Symbols & Types',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: false,
        requiredDay: 1,
        xpReward: 15,
        badge: '🔤 Maître des Symboles',
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
                    contribution: 'Père de l\'algèbre moderne, introduit les lettres pour représenter les inconnues'
                },
                {
                    name: 'René Descartes',
                    year: '1637',
                    contribution: 'Standardise la notation algébrique (x, y, z pour inconnues)'
                }
            ]
        },
        code: `from sympy import symbols
x, y = symbols('x y')
expr = x + 2*y
expr`,
        output: 'x + 2*y',
        exercises: [
            'Créer des symboles avec différentes propriétés (positif, entier, réel)',
            'Construire une expression polynomiale',
            'Substituer des valeurs dans une expression'
        ],
        practicalApplication: 'Les variables symboliques sont essentielles en modélisation mathématique, optimisation et résolution d\'équations différentielles.'
    },
    {
        id: 'day_003',
        dayNumber: 3,
        title: 'Manipulations de Base',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: false,
        requiredDay: 2,
        xpReward: 20,
        badge: '🔧 Manipulateur',
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
                    contribution: 'Formule du binôme de Newton pour développer (a+b)ⁿ'
                },
                {
                    name: 'Blaise Pascal',
                    year: '1654',
                    contribution: 'Triangle de Pascal pour les coefficients binomiaux'
                }
            ]
        },
        code: `from sympy import symbols, expand, factor
x = symbols('x')
expand((x+1)**3)`,
        output: 'x³ + 3x² + 3x + 1',
        exercises: [
            'Développer (x+2)⁴',
            'Factoriser x² - 4',
            'Simplifier (x²-1)/(x-1)'
        ],
        practicalApplication: 'La manipulation polynomiale est cruciale en traitement du signal, compression de données et cryptographie (RSA).'
    },
    {
        id: 'day_004',
        dayNumber: 4,
        title: 'Résolution d\'Équations Simples',
        difficulty: 'Débutant',
        masteryLevel: 'Intermédiaire',
        unlocked: false,
        requiredDay: 3,
        xpReward: 25,
        badge: '🎯 Résolveur',
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
                - x₁ + x₂ = -b/a
                - x₁ × x₂ = c/a
            `,
            scientists: [
                {
                    name: 'Al-Khwarizmi',
                    year: '820',
                    contribution: 'Père de l\'algèbre, méthodes de résolution d\'équations quadratiques'
                },
                {
                    name: 'François Viète',
                    year: '1591',
                    contribution: 'Formules reliant coefficients et racines d\'un polynôme'
                },
                {
                    name: 'Évariste Galois',
                    year: '1832',
                    contribution: 'Théorie de Galois : conditions de résolubilité par radicaux'
                }
            ]
        },
        code: `from sympy import symbols, Eq, solve
x = symbols('x')
solve(Eq(x**2-5*x+6,0), x)`,
        output: '[2, 3]',
        exercises: [
            'Résoudre x² - 4 = 0',
            'Résoudre 2x² + 3x - 2 = 0',
            'Vérifier les solutions avec les relations de Viète'
        ],
        practicalApplication: 'Les équations quadratiques modélisent les trajectoires paraboliques (projectiles), l\'optimisation économique et les circuits électriques (RLC).'
    },
    {
        id: 'day_005',
        dayNumber: 5,
        title: 'Affichage Mathématique',
        difficulty: 'Débutant',
        masteryLevel: 'Fondamental',
        unlocked: false,
        requiredDay: 4,
        xpReward: 15,
        badge: '📐 Visualiseur',
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
                α, β, γ, δ, π, σ, ω, Δ, Σ, Π
            `,
            scientists: [
                {
                    name: 'Donald Knuth',
                    year: '1978',
                    contribution: 'Créateur de TeX, système de composition typographique pour les mathématiques'
                },
                {
                    name: 'Leslie Lamport',
                    year: '1984',
                    contribution: 'Créateur de LaTeX, extension de TeX'
                }
            ]
        },
        code: `from sympy import symbols, integrate, sin, pi, latex
x = symbols('x')
expr = integrate(sin(x)/x, (x,0,pi))
print(latex(expr))`,
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
        unlocked: false,
        requiredDay: 5,
        xpReward: 30,
        badge: '📊 Analyste Polynomial',
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
                    contribution: 'Démonstration du théorème fondamental de l\'algèbre'
                },
                {
                    name: 'Niels Henrik Abel',
                    year: '1824',
                    contribution: 'Impossibilité de résoudre par radicaux les équations de degré ≥ 5'
                }
            ]
        },
        code: `from sympy import symbols, Poly
x = symbols('x')
p = Poly(x**4-5*x**2+4, x)
p.all_roots()`,
        output: '[-2, -1, 1, 2]',
        exercises: [
            'Trouver les racines de x³ - 6x² + 11x - 6',
            'Décomposer en facteurs premiers',
            'Calculer le PGCD de deux polynômes'
        ],
        practicalApplication: 'Les polynômes modélisent les courbes de Bézier (graphisme), les filtres numériques et les codes correcteurs d\'erreurs.'
    },
    {
        id: 'day_007',
        dayNumber: 7,
        title: 'Simplification Rationnelle',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Intermédiaire',
        unlocked: false,
        requiredDay: 6,
        xpReward: 30,
        badge: '🔬 Simplificateur',
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
                    contribution: 'Développement de la théorie des fractions rationnelles'
                },
                {
                    name: 'Oliver Heaviside',
                    year: '1893',
                    contribution: 'Méthode des résidus et calcul opérationnel'
                }
            ]
        },
        code: `from sympy import symbols, apart
x = symbols('x')
apart((x**2+1)/(x*(x-1)))`,
        output: '-1/x + 2/(x-1) + 1',
        exercises: [
            'Décomposer 1/(x²-1)',
            'Décomposer (x+1)/(x²+x)',
            'Intégrer une fraction rationnelle après décomposition'
        ],
        practicalApplication: 'La décomposition en éléments simples est essentielle en automatique (fonction de transfert) et en traitement du signal.'
    },
    {
        id: 'day_008',
        dayNumber: 8,
        title: 'Numérique vs Symbolique',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Fondamental',
        unlocked: false,
        requiredDay: 7,
        xpReward: 25,
        badge: '⚖️ Équilibriste',
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
                    contribution: 'Analyse de la stabilité numérique et arithmétique flottante'
                },
                {
                    name: 'James Wilkinson',
                    year: '1963',
                    contribution: 'Analyse d\'erreur et conditionnement des problèmes'
                }
            ]
        },
        code: `import sympy as sp
# Exact
sp.sqrt(2)
# Numérique avec 50 décimales
sp.N(sp.pi, 50)`,
        output: 'π avec 50 décimales',
        exercises: [
            'Comparer √2 symbolique et numérique',
            'Calculer e avec 100 décimales',
            'Montrer l\'erreur de 0.1 + 0.2 en Python standard'
        ],
        practicalApplication: 'Le calcul exact est crucial en cryptographie (grands nombres premiers) et en vérification formelle de logiciels.'
    },
    {
        id: 'day_009',
        dayNumber: 9,
        title: 'Dérivation Symbolique',
        difficulty: 'Intermédiaire',
        masteryLevel: 'Avancé',
        unlocked: false,
        requiredDay: 8,
        xpReward: 35,
        badge: '📈 Dérivateur',
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
                    contribution: 'Invention du calcul différentiel (fluxions)'
                },
                {
                    name: 'Gottfried Leibniz',
                    year: '1675',
                    contribution: 'Notation moderne dy/dx et règles de dérivation'
                },
                {
                    name: 'Augustin-Louis Cauchy',
                    year: '1821',
                    contribution: 'Formalisation rigoureuse des limites et dérivées'
                }
            ]
        },
        code: `from sympy import symbols, diff, exp, sin
x = symbols('x')
diff(exp(x)*sin(x), x)`,
        output: 'eˣ·sin(x) + eˣ·cos(x)',
        exercises: [
            'Dériver x³·ln(x)',
            'Dériver sin(x²)',
            'Calculer la dérivée n-ième de eˣ'
        ],
        practicalApplication: 'Les dérivées sont essentielles en optimisation (machine learning), physique (vitesse, accélération) et économie (coût marginal).'
    },
    {
        id: 'day_010',
        dayNumber: 10,
        title: 'Intégration Symbolique',
        difficulty: 'Avancé',
        masteryLevel: 'Avancé',
        unlocked: false,
        requiredDay: 9,
        xpReward: 40,
        badge: '∫ Intégrateur',
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
                    contribution: 'Théorème fondamental du calcul intégral'
                },
                {
                    name: 'Bernhard Riemann',
                    year: '1854',
                    contribution: 'Définition rigoureuse de l\'intégrale (sommes de Riemann)'
                },
                {
                    name: 'Henri Lebesgue',
                    year: '1902',
                    contribution: 'Théorie de la mesure et intégrale de Lebesgue'
                }
            ]
        },
        code: `from sympy import symbols, integrate, exp, oo
x = symbols('x')
integrate(exp(-x**2), (x, -oo, oo))`,
        output: '√π',
        exercises: [
            'Intégrer x·eˣ par parties',
            'Calculer ∫₀^π sin²(x) dx',
            'Intégrer 1/(1+x²) et retrouver arctan'
        ],
        practicalApplication: 'Les intégrales calculent des probabilités (lois continues), des énergies (physique) et des volumes (géométrie).'
    }
];

// Système de progression
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
        const challenge = challengesEnriched.find(c => c.dayNumber === dayNumber);
        if (!challenge) return false;
        if (challenge.unlocked) return true; // Jour 1 toujours débloqué

        // Vérifier si le jour requis est complété
        const requiredChallenge = challengesEnriched.find(c => c.dayNumber === challenge.requiredDay);
        return requiredChallenge && completedDays.includes(requiredChallenge.id);
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
