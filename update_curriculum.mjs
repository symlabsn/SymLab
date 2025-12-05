
import fs from 'fs';
import { challengesEnriched } from './src/app/challenges/challengeDataEnriched.js';

// 1. Définition des nouveaux challenges (81-100)
const newChallenges = [
    {
        id: 'day_081',
        title: 'Théorie du Chaos',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 60,
        badge: '🌪️ Maître du Chaos',
        africanAnalogy: 'Le chaos est comme un marché bondé à Dakar. Au premier regard, c\'est le désordre total, imprévisible. Mais si on observe longtemps, des motifs apparaissent, des flux se dessinent. L\'ordre se cache dans le désordre.',
        theory: {
            title: 'Systèmes Dynamiques Chaotiques',
            content: 'Le chaos déterministe montre comment de petites variations initiales peuvent entraîner des divergences énormes (effet papillon).',
            mathematicalFoundation: '**Attracteur de Lorenz :**\ndx/dt = σ(y-x)\ndy/dt = x(ρ-z)-y\ndz/dt = xy-βz\n\nSensibilité aux conditions initiales.',
            scientists: [{ name: 'Edward Lorenz', year: '1963', contribution: 'Attracteur étrange', context: 'Météorologie' }]
        },
        code: `from sympy import symbols, Function, dsolve\nt = symbols('t')\nx, y, z = symbols('x y z', cls=Function)\nsigma, rho, beta = 10, 28, 8/3\n# Le système ne se résout pas analytiquement !`,
        output: 'Système non-intégrable symboliquement',
        exercises: ['Tracer l\'attracteur numériquement', 'Calculer les points fixes', 'Analyser la stabilité (Jacobienne)'],
        practicalApplication: 'Météorologie, turbulence, cryptographie chaotique.'
    },
    {
        id: 'day_082',
        title: 'Fractales',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 60,
        badge: '❄️ Géomètre Fractal',
        africanAnalogy: 'Une fractale est comme un chou romanesco ou les tresses traditionnelles : le motif global est répété à l\'infini dans chaque petite partie. L\'infiniment petit ressemble à l\'infiniment grand.',
        theory: {
            title: 'Géométrie Fractale',
            content: 'Les objets fractals ont une dimension non-entière (dimension de Hausdorff). Ils sont auto-similaires.',
            mathematicalFoundation: '**Ensemble de Mandelbrot :**\nz_{n+1} = z_n^2 + c\n\n**Dimension fractale :**\nD = log(N) / log(1/r)',
            scientists: [{ name: 'Benoît Mandelbrot', year: '1975', contribution: 'Objets fractals', context: 'IBM' }]
        },
        code: `from sympy import I, Abs\nz = 0\nc = 0.2 + 0.5*I\n# Première itération\nz = z**2 + c`,
        output: 'Suite complexe bornée ou divergente',
        exercises: ['Générer le triangle de Sierpinski', 'Calculer la dimension fractale', 'Coder l\'ensemble de Julia'],
        practicalApplication: 'Antennes, compression d\'image, modélisation de côtes, finance.'
    },
    {
        id: 'day_083',
        title: 'Mécnique des Fluides',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 65,
        badge: '💧 Maître des Eaux',
        africanAnalogy: 'Le fleuve Sénégal change de comportement selon la saison. Calme en étiage (laminaire), tumultueux en crue (turbulent). L\'équation de Navier-Stokes capture cette danse de l\'eau.',
        theory: {
            title: 'Navier-Stokes',
            content: 'Ces équations décrivent le mouvement des fluides. C\'est l\'un des problèmes du millénaire non résolus (existence et unicité).',
            mathematicalFoundation: 'ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f\n\nConservation de la masse et de la quantité de mouvement.',
            scientists: [{ name: 'Navier & Stokes', year: '1822', contribution: 'Équations fondamentales', context: 'Physique classique' }]
        },
        code: `from sympy.vector import CoordSys3D, Del\nC = CoordSys3D('C')\ndelop = Del()\n# Champ de vitesse v\nv = C.x*C.i + C.y*C.j\n# Divergence (incompressibilité ?)\ndelop.dot(v)`,
        output: '2 (Fluide compressible car div != 0)',
        exercises: ['Vérifier l\'incompressibilité', 'Écoulement de Poiseuille', 'Tourbillon potentiel'],
        practicalApplication: 'Aérodynamique, météo, pipelines, hémodynamique.'
    },
    {
        id: 'day_084',
        title: 'Épidémiologie (SIR)',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 60,
        badge: '🦠 Épidémiologiste',
        africanAnalogy: 'Une épidémie se propage comme une rumeur au village. Au début, quelques personnes savent (Infectés), elles en parlent aux autres (Susceptibles), qui finissent par l\'oublier ou ne plus écouter (Rétablis/Retirés).',
        theory: {
            title: 'Modèle SIR',
            content: 'Modélisation compartimentale des maladies infectieuses : Susceptibles, Infectés, Rétablis.',
            mathematicalFoundation: 'dS/dt = -βSI\ndI/dt = βSI - γI\ndR/dt = γI\n\nR₀ = β/γ (Taux de reproduction)',
            scientists: [{ name: 'Kermack & McKendrick', year: '1927', contribution: 'Théorie SIR', context: 'Peste et grippe espagnole' }]
        },
        code: `from sympy import symbols, Function, dsolve, Eq\nt, beta, gamma = symbols('t beta gamma')\nS, I, R = symbols('S I R', cls=Function)\n# Équation simplifiée pour I au début (S ~ 1)\neq = Eq(I(t).diff(t), (beta - gamma)*I(t))`,
        output: 'Croissance exponentielle si β > γ',
        exercises: ['Calculer le pic épidémique', 'Intégrer la vaccination', 'Modèle SEIR (Exposed)'],
        practicalApplication: 'Gestion pandemies (COVID-19), propagation de virus informatiques.'
    },
    {
        id: 'day_085',
        title: 'Neurosciences',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 65,
        badge: '🧠 Neuro-Architecte',
        africanAnalogy: 'Le cerveau est comme un réseau de tam-tams qui communiquent. Chaque neurone accumule de l\'énergie (tension) jusqu\'à un seuil, puis "frappe" (spike) pour envoyer le message. C\'est un code binaire biologique.',
        theory: {
            title: 'Modèle Hodgkin-Huxley',
            content: 'Décrit comment les potentiels d\'action sont initiés et propagés dans les neurones via les canaux ioniques.',
            mathematicalFoundation: 'C dV/dt = I - g_Na m³h(V-E_Na) - g_K n⁴(V-E_K) - g_L(V-E_L)\nSystème d\'EDO non-linéaires couplées.',
            scientists: [{ name: 'Hodgkin & Huxley', year: '1952', contribution: 'Modèle du neurone géant de calmar', context: 'Prix Nobel' }]
        },
        code: `from sympy import exp, symbols\nV = symbols('V')\n# Fonction d'ouverture canal potassium (n)\nalpha_n = 0.01 * (V + 55) / (1 - exp(-(V + 55) / 10))`,
        output: 'Fonction de taux de transition',
        exercises: ['Modèle "Integrate and Fire"', 'Simuler un train d\'impulsions', 'Réseau de 2 neurones'],
        practicalApplication: 'IA, prothèses neurales, compréhension de l\'épilepsie.'
    },
    {
        id: 'day_086',
        title: 'Mouvement Brownien',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 60,
        badge: '🎲 Stochasticien',
        africanAnalogy: 'Imagine une feuille morte tombant dans un tourbillon de poussière, ou une chèvre errant au hasard pour brouter. Sa trajectoire est imprévisible à chaque pas, mais statistiquement modélisable.',
        theory: {
            title: 'Processus de Wiener',
            content: 'Description mathématique du mouvement aléatoire des particules suspendues dans un fluide.',
            mathematicalFoundation: 'W_t - W_s ~ N(0, t-s)\nPropriété de Markov.\nTrajectoires continues mais nulle part différentiables.',
            scientists: [{ name: 'Robert Brown', year: '1827', contribution: 'Observation pollen', context: 'Botaniste' }, { name: 'Albert Einstein', year: '1905', contribution: 'Explication théorique', context: 'Prouve l\'existence des atomes' }]
        },
        code: `from sympy.stats import Normal, E, variance\nt = symbols('t', positive=True)\n# W(t) ~ N(0, t)\nW = Normal('W', 0, t)\nprint(f'Variance: {variance(W)}')`,
        output: 'Variance: t',
        exercises: ['Simuler une marche aléatoire 1D', 'Calculer la traversée moyenne', 'Lien avec équation de la chaleur'],
        practicalApplication: 'Finance, diffusion physique, écologie.'
    },
    {
        id: 'day_087',
        title: 'Calcul d\'Itô',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 70,
        badge: '📊 Maître d\'Itô',
        africanAnalogy: 'En calcul classique, la courbe est lisse comme une dune. En calcul stochastique, la courbe est rugueuse comme un chemin de latérite. On ne peut pas glisser dessus, il faut une nouvelle façon de marcher (calcul d\'Itô).',
        theory: {
            title: 'Intégrale Stochastique',
            content: 'Extension du calcul intégral aux processus aléatoires. Fondamental car (dW)² = dt (terme non négligeable).',
            mathematicalFoundation: '**Lemme d\'Itô :**\ndf(t,X) = (∂f/∂t + μ∂f/∂x + ½σ²∂²f/∂x²)dt + σ(∂f/∂x)dW',
            scientists: [{ name: 'Kiyosi Itô', year: '1944', contribution: 'Calcul stochastique', context: 'Japonais, père des probas modernes' }]
        },
        code: `from sympy import symbols, Function, diff\nS, t, mu, sigma = symbols('S t mu sigma')\nf = Function('f')(S, t)\n# Terme de correction d'Itô (1/2 * sigma^2 * S^2 * f'')\ncorrection = 1/2 * sigma**2 * S**2 * f.diff(S, 2)`,
        output: 'Correction de convexité',
        exercises: ['Appliquer le lemme à f(x) = x²', 'Différence Stratonovich vs Itô', 'Résoudre dX = X dW'],
        practicalApplication: 'Modélisation financière, filtrage de signal, bruit électronique.'
    },
    {
        id: 'day_088',
        title: 'Finance : Black-Scholes',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 75,
        badge: '📈 Quant',
        africanAnalogy: 'Fixer le prix d\'une option, c\'est comme parier sur le prix futur du cacao. Black-Scholes donne la formule "juste" pour ne pas perdre d\'argent, en éliminant le risque par une couverture dynamique.',
        theory: {
            title: 'Évaluation d\'Options',
            content: 'Modèle mathématique pour la dynamique d\'un marché financier. Donne une EDP parabolique similaire à l\'équation de la chaleur.',
            mathematicalFoundation: '∂V/∂t + ½σ²S²∂²V/∂S² + rS∂V/∂S - rV = 0\n\nSolution : Call = S·N(d₁) - K·e⁻ʳᵗ·N(d₂)',
            scientists: [{ name: 'Black, Scholes, Merton', year: '1973', contribution: 'Formule d\'évaluation', context: 'Prix Nobel d\'économie' }]
        },
        code: `from sympy import erf, log, exp, sqrt, symbols\nS, K, T, r, sigma = symbols('S K T r sigma')\n# d1 de Black-Scholes\nd1 = (log(S/K) + (r + sigma**2/2)*T) / (sigma*sqrt(T))`,
        output: 'Formule analytique du prix',
        exercises: ['Calculer le prix d\'un Call', 'Calculer les "Greques" (Delta, Gamma)', 'Simuler un portefeuille de couverture'],
        practicalApplication: 'Trading, gestion de risques bancaires, assurance.'
    },
    {
        id: 'day_089',
        title: 'Introduction aux Tenseurs',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 65,
        badge: '🏗️ Tensorflow',
        africanAnalogy: 'Un scalaire est un grain de sable (0D). Un vecteur est une flèche (1D). Une matrice est un tapis (2D). Un tenseur, c\'est le tissage complet en 3D ou plus, capable de décrire des contraintes dans toutes les directions à la fois.',
        theory: {
            title: 'Algèbre Tensorielle',
            content: 'Les tenseurs généralisent scalaires, vecteurs et matrices. Ils sont indépendants du système de coordonnées.',
            mathematicalFoundation: 'T_{ij} v^j = w_i (Convention de sommation d\'Einstein)\nProduit tensoriel, contraction, métrique.',
            scientists: [{ name: 'Gregorio Ricci-Curbastro', year: '1900', contribution: 'Calcul tensoriel', context: 'Outil clé pour Einstein' }]
        },
        code: `from sympy import Array, tensorproduct\nfrom sympy.abc import x, y, z\n# Tenseur de rang 2 (Matrice)\nA = Array([[x, y], [z, x**2]])\n# Produit tensoriel\ntensorproduct(A, A)`,
        output: 'Tenseur de rang 4',
        exercises: ['Calculer la trace comme contraction', 'Manipuler des indices', 'Tenseur métrique Euclidien'],
        practicalApplication: 'Relativité générale, mécanique des milieux continus, Deep Learning.'
    },
    {
        id: 'day_090',
        title: 'Symboles de Christoffel',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 70,
        badge: '🌐 Navigateur Courbe',
        africanAnalogy: 'Marcher droit sur une terre courbe (comme la Terre), c\'est suivre (dériver) la courbure. Les symboles de Christoffel sont les guides qui nous disent de combien il faut tourner pour avoir l\'illusion d\'aller tout droit.',
        theory: {
            title: 'Dérivée Covariante',
            content: 'Dans un espace courbe, la dérivée classique ne marche plus. Il faut ajouter un terme de correction (Christoffel) pour tenir compte de la courbure du repère.',
            mathematicalFoundation: 'Γ^k_{ij} = ½ g^{kl} (∂g_{il}/∂x^j + ∂g_{jl}/∂x^i - ∂g_{ij}/∂x^l)\n\nPermet le transport parallèle.',
            scientists: [{ name: 'Elwin Christoffel', year: '1869', contribution: 'Géométrie différentielle', context: '' }]
        },
        code: `from sympy.diffgeom import Manifold, Patch, CoordSystem\nfrom sympy import symbols\n# Difficile en pur SymPy basique, nécessite diffgeom\n# Γ décrit comment les bases changent`,
        output: 'Correction de courbure',
        exercises: ['Calculer Γ pour les coordonnées polaires', 'Calculer Γ pour une sphère', 'Lien avec la force centrifuge'],
        practicalApplication: 'GPS (Relativité), robotique (bras articulés), géodésie.'
    },
    {
        id: 'day_091',
        title: 'Courbure de Riemann',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 80,
        badge: '🍩 Topologue',
        africanAnalogy: 'Si tu fais le tour d\'un baobab en gardant ton bras tendu "tout droit", à la fin ton bras ne pointe plus dans la même direction. Cette différence d\'angle mesure la courbure de l\'espace (Riemann).',
        theory: {
            title: 'Tenseur de Riemann',
            content: 'Mesure intrinsèque de la courbure d\'une variété. Si tous les composants sont nuls, l\'espace est plat.',
            mathematicalFoundation: 'R^ρ_{σμν} = ∂_μ Γ^ρ_{νσ} - ... (Kommutateur de dérivées covariantes)\nIdentités de Bianchi.',
            scientists: [{ name: 'Bernhard Riemann', year: '1854', contribution: 'Géométrie Riemannienne', context: 'Conférence habilitation légendaire' }]
        },
        code: `from sympy import sin, symbols\n# Pour une sphère de rayon R\n# K = 1/R^2 (Courbure sectionnelle constante)`,
        output: 'R_1212 non nul sur la sphère',
        exercises: ['Courbure d\'un cylindre (nulle !)', 'Courbure d\'une selle de cheval (négative)', 'Géodésiques déviées'],
        practicalApplication: 'Relativité Générale, cartographie, défauts dans les cristaux.'
    },
    {
        id: 'day_092',
        title: 'Métrique de Schwarzschild',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 85,
        badge: '🕳️ Trou Noir',
        africanAnalogy: 'Autour d\'un puits très profond (masse), le sol est tellement pentu que même la lumière ne peut en sortir si elle s\'approche trop. La métrique de Schwarzschild est la carte de ce terrain extrême.',
        theory: {
            title: 'Solution du Trou Noir',
            content: 'Première solution exacte des équations d\'Einstein pour le vide autour d\'une masse sphérique.',
            mathematicalFoundation: 'ds² = -(1-Rs/r)c²dt² + (1-Rs/r)⁻¹dr² + r²dΩ²\nRs = 2GM/c² (Rayon de Schwarzschild)',
            scientists: [{ name: 'Karl Schwarzschild', year: '1916', contribution: 'Solution exacte', context: 'Trouvée dans les tranchées de la guerre 14-18' }]
        },
        code: `from sympy import symbols, diag, sin\n# Métrique g_mu_nu\ng = diag(-(1-2*M/r), 1/(1-2*M/r), r**2, r**2*sin(theta)**2)`,
        output: 'Tenseur métrique 4x4',
        exercises: ['Trouver l\'horizon des événements', 'Calculer le décalage spectral gravitationnel', 'Orbites instables'],
        practicalApplication: 'Compréhension du cosmos, corrections GPS avancées, astronomie.'
    },
    {
        id: 'day_093',
        title: 'Génération de Code (C/Fortran)',
        difficulty: 'Expert',
        masteryLevel: 'Maître',
        xpReward: 70,
        badge: '🤖 Optimisateur',
        africanAnalogy: 'SymPy est le sage qui réfléchit (lent). C/Fortran est le guerrier qui agit (rapide). Le sage écrit les instructions parfaites pour le guerrier. On convertit les équations symboliques en code machine ultra-rapide.',
        theory: {
            title: 'High Performance Computing',
            content: 'Transformer des formules symboliques complexes en fonctions C ou Fortran compilées pour la vitesse numérique.',
            mathematicalFoundation: 'codegen, autowrap, ufuncify.\nOptimisation des expressions (CSE - Common Subexpression Elimination).',
            scientists: [{ name: 'Ondřej Čertík', year: '2006', contribution: 'Vision de SymPy comme outil de metaprogrammation', context: '' }]
        },
        code: `from sympy.utilities.codegen import codegen\nfrom sympy import symbols, sin\nx, y = symbols('x y')\nexpr = (x + y)**10 * sin(x)\n# Générer du C\nprint(codegen(('f', expr), 'C')[0][1])`,
        output: 'double f(double x, double y) { ... }',
        exercises: ['Générer une fonction pour résoudre Ax=b', 'Optimiser avec CSE', 'Wrapper avec f2py'],
        practicalApplication: 'Simulations numériques lourdes, moteurs de jeux, finance HFT.'
    },
    {
        id: 'day_094',
        title: 'Optimisation (Lagrange)',
        difficulty: 'Expert',
        masteryLevel: 'Maître',
        xpReward: 75,
        badge: '⛰️ Optimisateur Contraint',
        africanAnalogy: 'Chercher le point le plus haut de la colline (max f) tout en restant sur le sentier (g=0). Les multiplicateurs de Lagrange sont la force qui nous maintient sur le sentier tout en montant.',
        theory: {
            title: 'Multiplicateurs de Lagrange',
            content: 'Méthode pour trouver les extremums d\'une fonction sous contraintes.',
            mathematicalFoundation: 'L(x, λ) = f(x) - λ·g(x)\n∇L = 0  => ∇f = λ∇g\nLes gradients sont colinéaires à l\'optimum.',
            scientists: [{ name: 'Joseph-Louis Lagrange', year: '1788', contribution: 'Mécanique Analytique', context: 'Pas de figures dans son livre !' }]
        },
        code: `from sympy import symbols, grad, solve\nx, y, l = symbols('x y l')\nf = 4*x*y\ng = x**2/9 + y**2/16 - 1\n# Gradients et système`,
        output: 'Points critiques sur l\'ellipse',
        exercises: ['Maximiser le volume d\'une boîte', 'Entropie maximale sous contrainte de moyenne', 'Support Vector Machines (Dual)'],
        practicalApplication: 'Économie, recherche opérationnelle, Machine Learning (SVM).'
    },
    {
        id: 'day_095',
        title: 'Théorie du Contrôle',
        difficulty: 'Avancé',
        masteryLevel: 'Expert',
        xpReward: 65,
        badge: '🎛️ Contrôleur',
        africanAnalogy: 'Conduire une pirogue dans le courant. Si elle dévie à gauche, tu pagaies à droite (P - Proportionnel). Si elle dévie depuis longtemps, tu forces plus (I - Intégral). Si tu vois une vague arriver, tu anticipes (D - Dérivé).',
        theory: {
            title: 'Systèmes Asservis (PID)',
            content: 'Maintenir un système à sa consigne malgré les perturbations.',
            mathematicalFoundation: 'u(t) = Kp e(t) + Ki ∫e(τ)dτ + Kd de/dt\nFonction de transfert en Laplace H(s).',
            scientists: [{ name: 'James Watt', year: '1788', contribution: 'Régulateur à boules', context: 'Révolution industrielle' }]
        },
        code: `from sympy import symbols, inverse_laplace_transform\ns, t, Kp, Ki = symbols('s t Kp Ki')\n# Fonction de transfert boucle fermée\nH = 1 / (s**2 + Kp*s + Ki)\n# Réponse impulsionnelle`,
        output: 'Amorti ou oscillant selon Kp',
        exercises: ['Régler un PID', 'Stabilité (Routh-Hurwitz)', 'Pendule inversé'],
        practicalApplication: 'Drones, régulateur de vitesse, thermostats, pilotage automatique.'
    },
    {
        id: 'day_096',
        title: 'Mécanique Analytique (Lagrangien)',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 80,
        badge: '⚖️ Lagrangien',
        africanAnalogy: 'La nature est économe. Entre deux points, elle choisit toujours le chemin qui "coûte" le moins d\'action. Pas besoin de calculer les forces à chaque instant, suffit de minimiser le coût total.',
        theory: {
            title: 'Principe de Moindre Action',
            content: 'Reformulation élégante de la mécanique de Newton.',
            mathematicalFoundation: 'L = T - V (Cinétique - Potentielle)\nAction S = ∫ L dt\nÉquations d\'Euler-Lagrange : d/dt(∂L/∂v) - ∂L/∂x = 0',
            scientists: [{ name: 'Lagrange & Hamilton', year: '1833', contribution: 'Unification physique', context: '' }]
        },
        code: `from sympy import symbols, diff, Function\nt = symbols('t')\nq = Function('q')(t)\nL = 1/2 * m * q.diff(t)**2 - 1/2 * k * q**2 # Oscillateur harmonique\n# Euler-Lagrange`,
        output: 'm*q\'\' + k*q = 0',
        exercises: ['Pendule double (Chaos)', 'Brachistochrone', 'Champs classiques (Densité Lagrangienne)'],
        practicalApplication: 'Physique des particules, robotique complexe, animation 3D.'
    },
    {
        id: 'day_097',
        title: 'Mécanique Hamiltonienne',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 80,
        badge: '🌀 Hamiltonien',
        africanAnalogy: 'Le Lagrangien regarde le film en entier (temps). L\'Hamiltonien regarde l\'état présent (énergie). C\'est la porte d\'entrée vers la mécanique quantique où l\'opérateur Hamiltonien dicte tout.',
        theory: {
            title: 'Espace des Phases',
            content: 'Description par position (q) et impulsion (p). Les équations sont du premier ordre.',
            mathematicalFoundation: 'H = Σ p q_dot - L\ndq/dt = ∂H/∂p\ndp/dt = -∂H/∂q\nCrochets de Poisson.',
            scientists: [{ name: 'William Hamilton', year: '1833', contribution: 'Formalisme canonique', context: '' }]
        },
        code: `from sympy import symbols, diff\np, q = symbols('p q')\nH = p**2/(2*m) + 1/2*k*q**2\n# Équations du mouvement`,
        output: 'Flux dans l\'espace des phases',
        exercises: ['Théorème de Liouville', 'Passage au quantique (H -> iħ∂/∂t)', 'Systèmes intégrables'],
        practicalApplication: 'Mécanique statistique, mécanique quantique, optique géométrique.'
    },
    {
        id: 'day_098',
        title: 'Théorie des Perturbations',
        difficulty: 'Expert',
        masteryLevel: 'Expert',
        xpReward: 75,
        badge: '🎯 Perturbateur',
        africanAnalogy: 'Résoudre un problème compliqué en partant d\'un problème simple que l\'on pousse un peu. Comme prédire la trajectoire d\'une pirogue par vent calme, puis ajouter l\'effet d\'une petite brise.',
        theory: {
            title: 'Séries de Perturbation',
            content: 'Méthode pour trouver des solutions approchées à des problèmes non résolubles exactement, en ajoutant un petit paramètre ε.',
            mathematicalFoundation: 'x = x₀ + εx₁ + ε²x₂ + ...\nSubstituer dans l\'équation et résoudre ordre par ordre.',
            scientists: [{ name: 'Henri Poincaré', year: '1890', contribution: 'Méthodes de perturbation', context: 'Problème des 3 corps' }]
        },
        code: `from sympy import symbols, series, Function, Eq\neps = symbols('eps')\n# x^2 + x + eps = 0\n# Racine proche de 0 ?`,
        output: 'Développement asymptotique',
        exercises: ['Anharmonicité du pendule', 'Effet Zeeman (Quantique)', 'Précession de Mercure'],
        practicalApplication: 'Mécanique céleste (orbites), chimie quantique, ingénierie.'
    },
    {
        id: 'day_099',
        title: 'PROJET : Simulation Solaire',
        difficulty: 'Légendaire',
        masteryLevel: 'Maître',
        xpReward: 150,
        badge: '☀️ Architecte Stellaire',
        africanAnalogy: 'Avant le Grand Œuvre, il faut maîtriser le feu du soleil. Ce projet rassemble thermodynamique, gravité, nucléaire et mécanique des fluides pour modéliser une étoile.',
        theory: {
            title: 'Modèle Stellaire Standard',
            content: 'Intégration de toutes les compétences : EDO, équilibre hydrostatique, transport d\'énergie, réactions nucléaires.',
            mathematicalFoundation: 'dP/dr = -GMρ/r²\ndL/dr = 4πr²ρε\ndT/dr = ...\nSystème couplé complexe.',
            scientists: [{ name: 'Arthur Eddington', year: '1920', contribution: 'Structure interne des étoiles', context: '' }]
        },
        code: `from sympy import symbols\n# Projet libre : Construire un solver complet\n# Entrée : Masse étoile, Composition\n# Sortie : Rayon, Luminosité, Durée de vie`,
        output: 'Le Soleil simulé',
        exercises: ['Coder le système d\'équations', 'Résoudre numériquement (scipy/sympy)', 'Tracer le diagramme HR'],
        practicalApplication: 'Astrophysique, fusion nucléaire (Iter).'
    },
    {
        id: 'day_100',
        title: 'PROJET FINAL : Le Grand Œuvre',
        difficulty: 'Mythique',
        masteryLevel: 'Légende',
        xpReward: 500,
        badge: '👑 Maître SymPy',
        africanAnalogy: 'La construction de la Grande Mosquée de Djenné nécessite la coordination de tout le village, de l\'eau, de la terre, du bois et du savoir-faire ancestral. Ce projet est votre monument. Il combine tout ce que vous avez appris en une simulation unique et personnelle.',
        theory: {
            title: 'Synthèse Totale',
            content: 'Création d\'un moteur scientifique complet capable de simuler un phénomène complexe du monde réel au choix (Météo, Finance, Univers, Cerveau).',
            mathematicalFoundation: 'Tout le curriculum.',
            scientists: [{ name: 'Vous', year: '2024', contribution: 'Maîtrise de SymPy', context: 'Nouvelle génération de scientifiques' }]
        },
        code: `# LE GRAND ŒUVRE\n# 1. Choisir un domaine (Physique, Bio, Finance...)\n# 2. Modéliser (Équations)\n# 3. Résoudre (SymPy)\n# 4. Simuler (NumPy/C)\n# 5. Visualiser (Plot)\n# Votre chef-d'œuvre commence ici.`,
        output: 'La connaissance absolue',
        exercises: ['Valider le modèle', 'Optimiser la performance', 'Publier les résultats (Notebook)'],
        practicalApplication: 'Carrière scientifique, R&D, Innovation.'
    }
];

// 2. Mise à jour des challenges existants
const updatedChallenges = challengesEnriched.map(c => {
    // Cohérence des niveaux
    let newDifficulty = c.difficulty;
    const dayNum = c.dayNumber;

    if (dayNum >= 1 && dayNum <= 20) newDifficulty = 'Débutant';
    else if (dayNum >= 21 && dayNum <= 50) newDifficulty = 'Intermédiaire';
    else if (dayNum >= 51 && dayNum <= 80) newDifficulty = 'Avancé';

    // Transformation en Mini-Projets
    if (dayNum === 20) {
        c.title = 'PROJET : Architecte Géomètre';
        c.xpReward = 100;
        c.badge = '🏛️ Architecte';
        c.masteryLevel = 'Validé';
        c.africanAnalogy = 'Comme l\'architecte qui trace les plans de la case à impluvium, vous utilisez maintenant tous les outils géométriques (points, lignes, polygones) pour construire une structure complète et solide.';
    }
    if (dayNum === 50) {
        c.title = 'PROJET : Téléportation Quantique';
        c.xpReward = 150;
        c.badge = '⚛️ Ingénieur Quantique';
        c.masteryLevel = 'Validé';
        c.africanAnalogy = 'Comme le message du tam-tam qui est entendu instantanément au village voisin, l\'intrication quantique relie deux points distants. Ce projet consiste à construire le protocole complet de téléportation.';
    }
    if (dayNum === 80) {
        c.title = 'PROJET : Coffre-Fort Cryptographique';
        c.xpReward = 200;
        c.badge = '🔐 Gardien du Secret';
        c.masteryLevel = 'Validé';
    }

    return { ...c, difficulty: newDifficulty };
});

// 3. Fusion et écriture
const finalChallenges = [...updatedChallenges, ...newChallenges];

// Recréer le contenu du fichier
const fileContent = `// Données enrichies pour les challenges avec théorie, histoire, gamification et analogies africaines
export const challengesEnriched = ${JSON.stringify(finalChallenges, null, 4)};

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
    '📐 Visualiseur': 'Maîtriser l\\'affichage LaTeX',
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
`;

fs.writeFileSync('src/app/challenges/challengeDataEnriched.js', fileContent);
console.log('Fichier challengeDataEnriched.js mis à jour avec succès !');
