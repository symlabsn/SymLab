export const engineeringProjects = [
    // ==================================================================================
    // 📐 MATHÉMATIQUES
    // ==================================================================================
    {
        id: 'math-crypto-rsa',
        category: 'Mathématiques',
        title: "Cryptographie RSA",
        level: "Université (L3)",
        domain: "Arithmétique",
        icon: "🔐",
        difficulty: "Avancé",
        duration: "2h",
        description: "Comprendre et implémenter le chiffrement RSA utilisé pour sécuriser Internet.",
        history: {
            year: "1977",
            people: ["Rivest", "Shamir", "Adleman"],
            context: "En pleine guerre froide, la nécessité de sécuriser les communications numériques sans échanger de clé secrète au préalable devient critique. Le trio du MIT invente le premier système à clé publique basé sur la difficulté de factoriser de grands nombres."
        },
        problemStatement: {
            context: "Vous devez envoyer un message secret à une banque. Comment s'assurer que personne ne peut le lire en route ?",
            objective: "Utiliser les nombres premiers et l'arithmétique modulaire pour chiffrer/déchiffrer un message.",
            analogy: "C'est comme une boîte aux lettres : tout le monde peut y mettre une lettre (clé publique), mais seul le facteur a la clé pour l'ouvrir (clé privée)."
        },
        steps: [
            {
                title: "1. Génération des Clés",
                explanation: "On choisit deux grands nombres premiers p et q.",
                code: `from sympy import nextprime, randprime
p = randprime(100, 200)
q = randprime(100, 200)
n = p * q
phi = (p-1)*(q-1)
print(f"Clé publique (n) : {n}")`
            },
            {
                title: "2. Chiffrement",
                explanation: "Message chiffré C = M^e mod n.",
                code: `# À compléter...`
            }
        ]
    },
    {
        id: 'math-golden-ratio',
        category: 'Mathématiques',
        title: "Nombre d'Or & Nature",
        level: "Lycée (Seconde)",
        domain: "Algèbre",
        icon: "🌻",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Explorer la suite de Fibonacci et le nombre d'or dans la nature.",
        history: {
            year: "1202",
            people: ["Leonardo Fibonacci", "Phidias"],
            context: "Fibonacci introduit les chiffres indo-arabes en Europe et pose son célèbre problème des lapins. Le nombre d'or (Phi) fascine depuis l'Antiquité pour ses propriétés esthétiques supposées (Parthénon)."
        },
        problemStatement: {
            context: "Pourquoi les tournesols ont-ils des spirales parfaites ? La nature optimise l'espace pour capter la lumière.",
            objective: "Calculer la limite du rapport F(n+1)/F(n) quand n tend vers l'infini.",
            analogy: "Arranger des graines pour qu'elles ne se fassent pas d'ombre, c'est comme garer des voitures dans un parking circulaire optimal."
        },
        steps: [
            {
                title: "1. Suite de Fibonacci",
                explanation: "Chaque terme est la somme des deux précédents.",
                code: `from sympy import fibonacci, limit, Symbol, oo
n = Symbol('n')
# Calcul des 10 premiers termes
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`
            },
            {
                title: "2. Limite vers Phi",
                explanation: "Le rapport tend vers (1+sqrt(5))/2.",
                code: `ratio = fibonacci(n+1) / fibonacci(n)
# SymPy ne calcule pas cette limite directement symboliquement facilement sans aide, 
# mais on peut vérifier numériquement ou résoudre x^2 - x - 1 = 0
from sympy import solve, sqrt
x = Symbol('x')
phi = solve(x**2 - x - 1, x)[1] # Solution positive
print(f"Nombre d'or exact : {phi}")
print(f"Valeur approchée : {phi.evalf()}")`
            }
        ]
    },
    {
        id: 'math-fractals',
        category: 'Mathématiques',
        title: "Flocon de Koch",
        level: "Lycée (Première)",
        domain: "Géométrie",
        icon: "❄️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Construire une fractale et calculer son périmètre infini pour une aire finie.",
        history: {
            year: "1904",
            people: ["Helge von Koch", "Benoît Mandelbrot"],
            context: "Avant les fractales, on pensait que toutes les courbes avaient une tangente. Koch a montré une courbe continue mais nulle part dérivable, défiant l'intuition mathématique de l'époque."
        },
        problemStatement: {
            context: "Comment mesurer la côte de la Bretagne ? Plus on zoome, plus c'est long.",
            objective: "Modéliser une itération géométrique récursive.",
            analogy: "Un littoral infini qui tient dans une boîte finie."
        },
        steps: [
            {
                title: "1. Périmètre",
                explanation: "À chaque étape, on multiplie le périmètre par 4/3.",
                code: `from sympy import Symbol, limit, oo
n = Symbol('n')
P0 = Symbol('P0') # Périmètre initial
Pn = P0 * (4/3)**n
limite_P = limit(Pn, n, oo)
print(f"Limite du périmètre : {limite_P}")`
            }
        ]
    },
    {
        id: 'math-fourier',
        category: 'Mathématiques',
        title: "Séries de Fourier",
        level: "Université (L2)",
        domain: "Analyse",
        icon: "〰️",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Décomposer n'importe quel signal périodique en somme de sinus.",
        history: {
            year: "1822",
            people: ["Joseph Fourier"],
            context: "En étudiant la propagation de la chaleur, Fourier affirme que toute fonction peut s'écrire comme une somme de sinus. Une idée révolutionnaire et controversée à l'époque, aujourd'hui base du MP3 et du JPEG."
        },
        problemStatement: {
            context: "Comment votre téléphone transmet-il votre voix ? Il la décompose en fréquences.",
            objective: "Calculer les coefficients an et bn pour un signal carré.",
            analogy: "Créer n'importe quelle couleur de peinture en mélangeant juste du rouge, du vert et du bleu (les sinus de base)."
        },
        steps: [
            {
                title: "1. Coefficients de Fourier",
                explanation: "Intégrale du signal multiplié par cos(nx) ou sin(nx).",
                code: `from sympy import fourier_series, pi, plot, Piecewise, symbols
x = symbols('x')
# Définition d'un signal carré
f = Piecewise((-1, x < 0), (1, x >= 0))
s = fourier_series(f, (x, -pi, pi))
print("Série de Fourier (3 premiers termes) :")
display(s.truncate(3))`
            }
        ]
    },
    {
        id: 'math-probability',
        category: 'Mathématiques',
        title: "Paradoxe des Anniversaires",
        level: "Lycée (Terminale)",
        domain: "Probabilités",
        icon: "🎂",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Pourquoi a-t-on 50% de chance d'avoir deux anniversaires identiques dans un groupe de 23 ?",
        history: {
            year: "1939",
            people: ["Richard von Mises"],
            context: "L'intuition humaine est mauvaise avec les probabilités exponentielles. Ce paradoxe illustre la complexité des collisions dans les fonctions de hachage modernes."
        },
        problemStatement: {
            context: "Dans une classe de 30 élèves, pariez-vous qu'il y a une paire d'anniversaires ?",
            objective: "Calculer P(au moins une paire) = 1 - P(tous différents).",
            analogy: "Serrer la main à tout le monde : avec 23 personnes, il y a 253 poignées de main possibles, donc beaucoup de chances de 'collision'."
        },
        steps: [
            {
                title: "1. Calcul Probabilité",
                explanation: "On calcule la probabilité que personne n'ait le même anniversaire.",
                code: `from sympy import Product, symbols
n = symbols('n') # Nombre de personnes
# P(tous différents) = 365/365 * 364/365 * ...
# Formule approximative
prob_unique = Product((365-i)/365, (i, 0, n-1))
prob_paire = 1 - prob_unique

# Calcul pour n=23
print(f"Probabilité pour 23 personnes : {prob_paire.subs(n, 23).evalf()}")`
            }
        ]
    },

    // ==================================================================================
    // 🚀 PHYSIQUE
    // ==================================================================================
    {
        id: 'phys-solar-system',
        category: 'Physique',
        title: "Orbites Planétaires",
        level: "Université (L1)",
        domain: "Mécanique Céleste",
        icon: "🪐",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Simuler le mouvement de la Terre autour du Soleil.",
        history: {
            year: "1609",
            people: ["Johannes Kepler", "Isaac Newton"],
            context: "Kepler brise le dogme des orbites circulaires parfaites en découvrant les ellipses. Newton expliquera plus tard *pourquoi* grâce à la gravitation universelle."
        },
        problemStatement: {
            context: "Prédire la position de Mars pour y envoyer une sonde.",
            objective: "Résoudre les équations du mouvement sous force centrale.",
            analogy: "Une fronde : la pierre tourne tant que la corde (gravité) la retient."
        },
        steps: [
            {
                title: "1. Force Gravitationnelle",
                explanation: "F = G * M * m / r^2.",
                code: `from sympy import symbols, vector
# À venir : implémentation vectorielle`
            }
        ]
    },
    {
        id: 'phys-pendulum',
        category: 'Physique',
        title: "Pendule Simple",
        level: "Lycée (Terminale)",
        domain: "Mécanique",
        icon: "🕰️",
        difficulty: "Débutant",
        duration: "1h",
        description: "Étudier la période d'oscillation d'une horloge.",
        history: {
            year: "1602",
            people: ["Galileo Galilei"],
            context: "En observant un lustre se balancer dans la cathédrale de Pise, Galilée remarque que la période ne dépend pas de l'amplitude (pour les petits angles). C'est la naissance de la chronométrie de précision."
        },
        problemStatement: {
            context: "Fabriquer une horloge qui bat exactement la seconde.",
            objective: "Trouver la relation T = 2*pi*sqrt(L/g).",
            analogy: "Une balançoire : peu importe si on va haut ou pas, le temps de l'aller-retour est presque le même."
        },
        steps: [
            {
                title: "1. Période",
                explanation: "Formule des petites oscillations.",
                code: `from sympy import symbols, pi, sqrt, solve
T, L, g = symbols('T L g')
# On veut T = 2 secondes (battement seconde)
# T = 2*pi*sqrt(L/g)
eq = T - 2*pi*sqrt(L/g)
sol_L = solve(eq.subs({T: 2, g: 9.81}), L)
print(f"Longueur nécessaire (m) : {sol_L[0].evalf()}")`
            }
        ]
    },
    {
        id: 'phys-relativity',
        category: 'Physique',
        title: "Dilatation du Temps",
        level: "Université (L2)",
        domain: "Relativité Restreinte",
        icon: "⏳",
        difficulty: "Avancé",
        duration: "1h",
        description: "Calculer le vieillissement d'un astronaute voyageant à la vitesse de la lumière.",
        history: {
            year: "1905",
            people: ["Albert Einstein", "Hendrik Lorentz"],
            context: "Einstein postule que la vitesse de la lumière est constante pour tous. Conséquence choquante : le temps n'est pas absolu, il ralentit quand on va vite."
        },
        problemStatement: {
            context: "GPS : Les satellites vont vite et sont loin. Sans correction relativiste, le GPS serait faux de 10km par jour.",
            objective: "Calculer le facteur gamma.",
            analogy: "Imaginez regarder une horloge dans un train qui passe très vite. La lumière met plus de temps à vous atteindre, l'horloge semble tourner au ralenti."
        },
        steps: [
            {
                title: "1. Facteur de Lorentz",
                explanation: "gamma = 1 / sqrt(1 - v^2/c^2).",
                code: `from sympy import symbols, sqrt
v, c = symbols('v c')
gamma = 1 / sqrt(1 - v**2/c**2)
print("Facteur de dilatation :")
display(gamma)`
            }
        ]
    },
    {
        id: 'phys-thermo-engine',
        category: 'Physique',
        title: "Moteur de Carnot",
        level: "Université (L1)",
        domain: "Thermodynamique",
        icon: "🚂",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer le rendement maximal théorique d'un moteur thermique.",
        history: {
            year: "1824",
            people: ["Sadi Carnot"],
            context: "Cherchant à améliorer les machines à vapeur anglaises, le jeune ingénieur français découvre qu'il y a une limite absolue au rendement, dépendant uniquement des températures."
        },
        problemStatement: {
            context: "Pourquoi le moteur de votre voiture chauffe-t-il autant ? Parce qu'on ne peut pas tout transformer en mouvement.",
            objective: "Rendement = 1 - Tc/Th.",
            analogy: "Une cascade d'eau : on récupère de l'énergie quand l'eau tombe de haut (chaud) vers le bas (froid). S'il n'y a pas de différence de hauteur, pas d'énergie."
        },
        steps: [
            {
                title: "1. Rendement",
                explanation: "Calcul en fonction des températures.",
                code: `from sympy import symbols
Tc, Th = symbols('Tc Th') # Températures Froid et Chaud (Kelvin)
eta = 1 - Tc/Th
# Exemple : Moteur voiture (Th=1000K, Tc=300K)
print(f"Rendement max : {eta.subs({Th: 1000, Tc: 300})}")`
            }
        ]
    },
    {
        id: 'phys-quantum-particle',
        category: 'Physique',
        title: "Puits de Potentiel",
        level: "Université (L3)",
        domain: "Mécanique Quantique",
        icon: "⚛️",
        difficulty: "Expert",
        duration: "2h",
        description: "Résoudre l'équation de Schrödinger pour une particule dans une boîte.",
        history: {
            year: "1926",
            people: ["Erwin Schrödinger"],
            context: "Schrödinger formule l'équation d'onde qui décrit la matière non plus comme des billes, mais comme des ondes de probabilité. C'est la base de toute l'électronique moderne."
        },
        problemStatement: {
            context: "Comment les électrons sont-ils piégés dans un atome ?",
            objective: "Trouver les niveaux d'énergie quantifiés.",
            analogy: "Une corde de guitare : elle ne peut vibrer qu'à certaines fréquences précises (harmoniques), pas entre les deux."
        },
        steps: [
            {
                title: "1. Équation de Schrödinger",
                explanation: "H*psi = E*psi.",
                code: `# Code à venir...`
            }
        ]
    },

    // ==================================================================================
    // 🏗️ GÉNIE CIVIL
    // ==================================================================================
    {
        id: 'civil-beam-deflection',
        category: 'Génie Civil',
        title: "Flexion d'une Poutre",
        level: "Université (L1)",
        domain: "RDM",
        icon: "🌉",
        difficulty: "Intermédiaire",
        duration: "1h 30",
        description: "Calculer la déformation d'un pont sous charge.",
        history: {
            year: "1750",
            people: ["Leonhard Euler", "Daniel Bernoulli"],
            context: "La Tour Eiffel n'aurait pas pu être construite sans cette théorie. Euler et Bernoulli ont collaboré pour modéliser comment les matériaux élastiques se déforment sous la charge."
        },
        problemStatement: {
            context: "Dimensionner une poutre pour qu'elle ne plie pas trop sous le poids des voitures.",
            objective: "Résoudre EI * y'' = M(x).",
            analogy: "Une planche posée entre deux tréteaux qui plie quand on marche dessus."
        },
        steps: [
            {
                title: "1. Équation Différentielle",
                explanation: "Lien entre courbure et moment.",
                code: `from sympy import symbols, Function, dsolve
x, E, I, M = symbols('x E I M')
y = Function('y')(x)
eq = E*I*y.diff(x, x) + M
display(eq)`
            }
        ]
    },
    {
        id: 'civil-concrete',
        category: 'Génie Civil',
        title: "Béton Armé",
        level: "Université (L2)",
        domain: "Matériaux",
        icon: "🧱",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer la quantité d'acier nécessaire dans une poutre en béton.",
        history: {
            year: "1849",
            people: ["Joseph Monier"],
            context: "Un jardinier français invente le béton armé pour faire des pots de fleurs solides ! Il réalise que le béton résiste à la compression et l'acier à la traction."
        },
        problemStatement: {
            context: "Le béton casse si on tire dessus. On met de l'acier là où ça tire.",
            objective: "Équilibrer les forces de compression (béton) et traction (acier).",
            analogy: "Comme un os (dur) renforcé par des tendons (souples)."
        },
        steps: [
            {
                title: "1. Équilibre des Moments",
                explanation: "Calcul du moment résistant.",
                code: `# Code à venir...`
            }
        ]
    },
    {
        id: 'civil-hydraulics',
        category: 'Génie Civil',
        title: "Réseau d'Eau Potable",
        level: "Université (L3)",
        domain: "Hydraulique",
        icon: "🚰",
        difficulty: "Avancé",
        duration: "2h",
        description: "Dimensionner les tuyaux pour alimenter un quartier.",
        history: {
            year: "1936",
            people: ["Hardy Cross"],
            context: "Avant les ordinateurs, Hardy Cross a inventé une méthode itérative manuelle pour calculer les débits dans les réseaux maillés complexes des villes américaines."
        },
        problemStatement: {
            context: "Assurer que l'eau arrive avec assez de pression au dernier étage des immeubles.",
            objective: "Minimiser les pertes de charge (frottements).",
            analogy: "Le trafic routier : plus la route est large, plus les voitures vont vite. Si ça bouchonne, la pression monte."
        },
        steps: [
            {
                title: "1. Pertes de Charge",
                explanation: "Formule de Darcy-Weisbach.",
                code: `# Code à venir...`
            }
        ]
    },
    {
        id: 'civil-soil',
        category: 'Génie Civil',
        title: "Stabilité d'un Mur",
        level: "Université (L2)",
        domain: "Géotechnique",
        icon: "⛰️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Vérifier qu'un mur de soutènement ne va pas glisser.",
        history: {
            year: "1773",
            people: ["Charles-Augustin de Coulomb"],
            context: "Chargé de fortifier la Martinique, Coulomb développe la théorie de la poussée des terres pour construire des remparts qui ne s'effondrent pas."
        },
        problemStatement: {
            context: "Retenir la terre pour construire une route à flanc de colline.",
            objective: "Calculer la poussée active et passive.",
            analogy: "Retenir un tas de sable avec une planche : il faut que la planche soit assez lourde pour ne pas glisser."
        },
        steps: [
            {
                title: "1. Poussée de Coulomb",
                explanation: "Calcul des forces.",
                code: `# Code à venir...`
            }
        ]
    },
    {
        id: 'civil-bridge-resonance',
        category: 'Génie Civil',
        title: "Résonance de Pont",
        level: "Master",
        domain: "Dynamique",
        icon: "🌉",
        difficulty: "Expert",
        duration: "2h",
        description: "Analyser les fréquences propres pour éviter la catastrophe.",
        history: {
            year: "1940",
            people: ["Tacoma Narrows Engineers"],
            context: "L'effondrement spectaculaire du pont de Tacoma a changé à jamais l'ingénierie civile, imposant l'étude aérodynamique des ouvrages d'art."
        },
        problemStatement: {
            context: "Le vent peut faire entrer un pont en résonance destructrice.",
            objective: "Calculer les modes propres.",
            analogy: "Un chanteur d'opéra brisant un verre."
        },
        steps: [
            {
                title: "1. Modes Propres",
                explanation: "Valeurs propres de la matrice de rigidité.",
                code: `# Code à venir...`
            }
        ]
    },

    // ==================================================================================
    // 🧪 CHIMIE (Placeholders pour la prochaine itération)
    // ==================================================================================
    {
        id: 'chem-ph',
        category: 'Chimie',
        title: "Titrage pH",
        level: "Lycée",
        domain: "Solutions",
        icon: "🧪",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Suivi pH-métrique.",
        history: { year: "1909", people: ["Sørensen"], context: "Invention de l'échelle pH pour la bière Carlsberg." },
        problemStatement: { context: "Doser un acide.", objective: "Courbe pH.", analogy: "Équilibre." },
        steps: []
    },
    // ... (Je peux générer les 40 autres sur demande pour éviter la saturation)
];
