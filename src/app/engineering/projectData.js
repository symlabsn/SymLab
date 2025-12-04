export const engineeringProjects = [
    // ==================================================================================
    // 📐 MATHÉMATIQUES (10 projets)
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
                code: `from sympy import nextprime, randprime, gcd
p = randprime(100, 200)
q = randprime(100, 200)
n = p * q
phi = (p-1)*(q-1)
# Choix de e (exposant public)
e = 65537
print(f"Clé publique (n, e) : ({n}, {e})")`
            },
            {
                title: "2. Chiffrement",
                explanation: "Message chiffré C = M^e mod n.",
                code: `M = 42  # Message à chiffrer
C = pow(M, e, n)
print(f"Message chiffré : {C}")`
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
                code: `from sympy import fibonacci
# Calcul des 10 premiers termes
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`
            },
            {
                title: "2. Limite vers Phi",
                explanation: "Le rapport tend vers (1+sqrt(5))/2.",
                code: `from sympy import solve, sqrt, Symbol
x = Symbol('x')
phi = solve(x**2 - x - 1, x)[1]
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
P0 = Symbol('P0')
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
                code: `from sympy import fourier_series, pi, Piecewise, symbols
x = symbols('x')
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
                code: `from sympy import factorial
n = 23
prob_unique = factorial(365) / (factorial(365-n) * 365**n)
prob_paire = 1 - prob_unique
print(f"Probabilité pour {n} personnes : {prob_paire.evalf()}")`
            }
        ]
    },

    // ==================================================================================
    // 🚀 PHYSIQUE (10 projets)
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
                title: "1. Troisième Loi de Kepler",
                explanation: "T^2 / a^3 = constante.",
                code: `from sympy import symbols, solve
T, a, G, M = symbols('T a G M')
# T^2 = (4*pi^2 / GM) * a^3
eq = T**2 - (4*3.14159**2 / (G*M)) * a**3
print("Relation période-rayon :")
display(eq)`
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
Tc, Th = symbols('Tc Th')
eta = 1 - Tc/Th
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
                title: "1. Niveaux d'Énergie",
                explanation: "E_n = n^2 * h^2 / (8*m*L^2).",
                code: `from sympy import symbols, pi
n, h, m, L = symbols('n h m L')
E = n**2 * h**2 / (8*m*L**2)
print("Énergie du niveau n :")
display(E)`
            }
        ]
    },

    // ==================================================================================
    // 🧪 CHIMIE (10 projets)
    // ==================================================================================
    {
        id: 'chem-ph-titration',
        category: 'Chimie',
        title: "Titrage Acide-Base",
        level: "Lycée (Terminale)",
        domain: "Chimie des Solutions",
        icon: "🧪",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Simuler la courbe de pH lors d'un dosage.",
        history: {
            year: "1909",
            people: ["Søren Sørensen"],
            context: "Travaillant pour la brasserie Carlsberg, Sørensen invente l'échelle pH pour standardiser la qualité de la bière. Cette échelle logarithmique révolutionne la chimie analytique."
        },
        problemStatement: {
            context: "Vérifier la concentration d'un acide inconnu en laboratoire.",
            objective: "Tracer pH = f(Volume versé).",
            analogy: "Neutraliser l'acidité d'un plat en ajoutant du bicarbonate petit à petit."
        },
        steps: [
            {
                title: "1. Équation de Henderson-Hasselbalch",
                explanation: "pH = pKa + log([A-]/[AH]).",
                code: `from sympy import symbols, log
pKa, A_minus, AH = symbols('pKa A_minus AH')
pH = pKa + log(A_minus / AH, 10)
print("Formule du pH :")
display(pH)`
            }
        ]
    },
    {
        id: 'chem-equilibrium',
        category: 'Chimie',
        title: "Équilibre Chimique",
        level: "Université (L1)",
        domain: "Thermodynamique Chimique",
        icon: "⚖️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer les concentrations à l'équilibre avec la constante K.",
        history: {
            year: "1864",
            people: ["Cato Guldberg", "Peter Waage"],
            context: "Les deux chimistes norvégiens formulent la loi d'action de masse, montrant que l'équilibre chimique suit des lois mathématiques précises."
        },
        problemStatement: {
            context: "Prédire le rendement d'une synthèse industrielle.",
            objective: "Résoudre K = [C]^c [D]^d / [A]^a [B]^b.",
            analogy: "Un marché : le prix s'ajuste jusqu'à ce que l'offre égale la demande."
        },
        steps: [
            {
                title: "1. Constante d'Équilibre",
                explanation: "Calcul de K à partir des concentrations.",
                code: `from sympy import symbols, solve
A, B, C, D, K = symbols('A B C D K')
# Exemple : A + B <=> C + D
eq = K - (C * D) / (A * B)
print("Expression de K :")
display(eq)`
            }
        ]
    },
    {
        id: 'chem-kinetics',
        category: 'Chimie',
        title: "Cinétique Chimique",
        level: "Université (L1)",
        domain: "Chimie Physique",
        icon: "⏱️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Déterminer l'ordre d'une réaction et sa vitesse.",
        history: {
            year: "1889",
            people: ["Svante Arrhenius"],
            context: "Arrhenius établit la relation entre la vitesse de réaction et la température, expliquant pourquoi les aliments se conservent mieux au froid."
        },
        problemStatement: {
            context: "Savoir combien de temps prend un médicament pour agir.",
            objective: "Intégrer les lois de vitesse.",
            analogy: "La vitesse à laquelle une foule sort d'un stade dépend du nombre de portes."
        },
        steps: [
            {
                title: "1. Loi de Vitesse",
                explanation: "v = k[A]^n.",
                code: `from sympy import symbols, Function, dsolve, Eq
t, k, n = symbols('t k n')
A = Function('A')(t)
# Ordre 1 : dA/dt = -k*A
eq = Eq(A.diff(t), -k*A)
sol = dsolve(eq)
print("Solution pour ordre 1 :")
display(sol)`
            }
        ]
    },
    {
        id: 'chem-electrochemistry',
        category: 'Chimie',
        title: "Pile Électrochimique",
        level: "Lycée (Terminale)",
        domain: "Électrochimie",
        icon: "🔋",
        difficulty: "Débutant",
        duration: "1h",
        description: "Calculer la tension d'une pile avec l'équation de Nernst.",
        history: {
            year: "1889",
            people: ["Walther Nernst"],
            context: "Nernst établit la relation entre potentiel électrique et concentration, permettant de comprendre comment fonctionnent les batteries."
        },
        problemStatement: {
            context: "Concevoir une batterie pour un téléphone portable.",
            objective: "E = E° - (RT/nF) * ln(Q).",
            analogy: "Une cascade d'eau : plus la différence de hauteur est grande, plus l'énergie est forte."
        },
        steps: [
            {
                title: "1. Équation de Nernst",
                explanation: "Calcul du potentiel.",
                code: `from sympy import symbols, log
E0, R, T, n, F, Q = symbols('E0 R T n F Q')
E = E0 - (R*T / (n*F)) * log(Q)
print("Potentiel de la pile :")
display(E)`
            }
        ]
    },
    {
        id: 'chem-thermochemistry',
        category: 'Chimie',
        title: "Enthalpie de Réaction",
        level: "Université (L1)",
        domain: "Thermochimie",
        icon: "🔥",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer la chaleur dégagée par une combustion.",
        history: {
            year: "1840",
            people: ["Germain Hess"],
            context: "Hess découvre que la chaleur d'une réaction ne dépend que des états initial et final, pas du chemin. Loi fondamentale pour l'énergétique."
        },
        problemStatement: {
            context: "Dimensionner un système de chauffage au gaz.",
            objective: "ΔH = Σ ΔHf(produits) - Σ ΔHf(réactifs).",
            analogy: "Monter une montagne : peu importe le chemin, la différence d'altitude est la même."
        },
        steps: [
            {
                title: "1. Loi de Hess",
                explanation: "Calcul de l'enthalpie.",
                code: `from sympy import symbols
DH_prod, DH_react = symbols('DH_prod DH_react')
DH_reaction = DH_prod - DH_react
print("Enthalpie de réaction :")
display(DH_reaction)`
            }
        ]
    },

    // ==================================================================================
    // 🧬 BIOLOGIE (10 projets)
    // ==================================================================================
    {
        id: 'bio-pop-growth',
        category: 'Biologie',
        title: "Croissance Bactérienne",
        level: "Université (L1)",
        domain: "Écologie Mathématique",
        icon: "🧫",
        difficulty: "Débutant",
        duration: "1h",
        description: "Modéliser la croissance exponentielle et logistique d'une population.",
        history: {
            year: "1838",
            people: ["Pierre-François Verhulst"],
            context: "Verhulst améliore le modèle de Malthus en introduisant la capacité de charge, expliquant pourquoi les populations ne croissent pas indéfiniment."
        },
        problemStatement: {
            context: "Prévoir l'évolution d'une épidémie ou d'une culture de bactéries.",
            objective: "Résoudre dN/dt = rN(1 - N/K).",
            analogy: "Des lapins qui se reproduisent jusqu'à ce qu'il n'y ait plus assez d'herbe."
        },
        steps: [
            {
                title: "1. Modèle de Verhulst",
                explanation: "Équation logistique.",
                code: `from sympy import Function, dsolve, Eq, symbols
t, r, K = symbols('t r K')
N = Function('N')(t)
eq = Eq(N.diff(t), r*N*(1 - N/K))
sol = dsolve(eq)
print("Solution logistique :")
display(sol)`
            }
        ]
    },
    {
        id: 'bio-enzyme-kinetics',
        category: 'Biologie',
        title: "Cinétique Enzymatique",
        level: "Université (L2)",
        domain: "Biochimie",
        icon: "🧬",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Modéliser la vitesse d'une réaction catalysée par une enzyme.",
        history: {
            year: "1913",
            people: ["Leonor Michaelis", "Maud Menten"],
            context: "Le duo établit l'équation fondamentale de la catalyse enzymatique, base de toute la biochimie moderne et du développement de médicaments."
        },
        problemStatement: {
            context: "Optimiser la production d'insuline par des bactéries génétiquement modifiées.",
            objective: "v = Vmax * [S] / (Km + [S]).",
            analogy: "Un péage d'autoroute : au début, plus il y a de voitures, plus ça va vite. Mais à un moment, c'est saturé."
        },
        steps: [
            {
                title: "1. Équation de Michaelis-Menten",
                explanation: "Vitesse en fonction du substrat.",
                code: `from sympy import symbols
Vmax, S, Km = symbols('Vmax S Km')
v = Vmax * S / (Km + S)
print("Vitesse enzymatique :")
display(v)`
            }
        ]
    },
    {
        id: 'bio-genetics',
        category: 'Biologie',
        title: "Lois de Mendel",
        level: "Lycée (Seconde)",
        domain: "Génétique",
        icon: "🌱",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Prédire les proportions de descendants dans un croisement génétique.",
        history: {
            year: "1866",
            people: ["Gregor Mendel"],
            context: "Moine et botaniste, Mendel découvre les lois de l'hérédité en croisant des petits pois dans son jardin. Ses travaux, ignorés de son vivant, fondent la génétique moderne."
        },
        problemStatement: {
            context: "Prévoir la couleur des yeux d'un enfant à partir de ceux des parents.",
            objective: "Calculer les probabilités avec un tableau de Punnett.",
            analogy: "Tirer des boules dans un sac : si vous avez 3 rouges et 1 bleue, vous avez 75% de chances de tirer rouge."
        },
        steps: [
            {
                title: "1. Croisement Monohybride",
                explanation: "Aa x Aa => 1 AA : 2 Aa : 1 aa.",
                code: `from sympy import symbols, Rational
# Probabilités
P_AA = Rational(1, 4)
P_Aa = Rational(2, 4)
P_aa = Rational(1, 4)
print(f"P(AA) = {P_AA}, P(Aa) = {P_Aa}, P(aa) = {P_aa}")`
            }
        ]
    },
    {
        id: 'bio-photosynthesis',
        category: 'Biologie',
        title: "Rendement Photosynthétique",
        level: "Université (L1)",
        domain: "Physiologie Végétale",
        icon: "🌿",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Calculer l'efficacité de conversion de la lumière en biomasse.",
        history: {
            year: "1779",
            people: ["Jan Ingenhousz"],
            context: "Ingenhousz découvre que les plantes produisent de l'oxygène à la lumière, posant les bases de la compréhension de la photosynthèse."
        },
        problemStatement: {
            context: "Optimiser une serre agricole pour maximiser la production.",
            objective: "Modéliser la courbe de saturation lumineuse.",
            analogy: "Arroser des plantes : un peu d'eau c'est bien, trop d'eau ça noie."
        },
        steps: [
            {
                title: "1. Loi de Saturation",
                explanation: "P = Pmax * I / (K + I).",
                code: `from sympy import symbols
Pmax, I, K = symbols('Pmax I K')
P = Pmax * I / (K + I)
print("Production en fonction de la lumière :")
display(P)`
            }
        ]
    },
    {
        id: 'bio-epidemiology',
        category: 'Biologie',
        title: "Modèle SIR (Épidémies)",
        level: "Université (L2)",
        domain: "Épidémiologie",
        icon: "🦠",
        difficulty: "Avancé",
        duration: "2h",
        description: "Simuler la propagation d'une maladie infectieuse.",
        history: {
            year: "1927",
            people: ["Kermack", "McKendrick"],
            context: "En pleine pandémie de grippe espagnole, les deux chercheurs développent le modèle SIR pour comprendre et prédire la dynamique des épidémies."
        },
        problemStatement: {
            context: "Prédire le pic d'une épidémie de COVID-19 pour dimensionner les hôpitaux.",
            objective: "Résoudre le système dS/dt, dI/dt, dR/dt.",
            analogy: "Un feu de forêt : il se propage tant qu'il y a du bois (susceptibles), puis s'éteint quand tout est brûlé."
        },
        steps: [
            {
                title: "1. Équations SIR",
                explanation: "Système différentiel couplé.",
                code: `from sympy import symbols, Function
t, beta, gamma = symbols('t beta gamma')
S, I, R = Function('S')(t), Function('I')(t), Function('R')(t)
# dS/dt = -beta*S*I
# dI/dt = beta*S*I - gamma*I
# dR/dt = gamma*I
print("Système SIR défini.")`
            }
        ]
    },

    // ==================================================================================
    // ⚡ ÉLECTRONIQUE & INFORMATIQUE (10 projets)
    // ==================================================================================
    {
        id: 'elec-rlc-circuit',
        category: 'Élec & Info',
        title: "Circuit RLC Résonant",
        level: "Université (L2)",
        domain: "Électronique Analogique",
        icon: "📻",
        difficulty: "Avancé",
        duration: "2h",
        description: "Analyser la réponse d'un circuit RLC série pour concevoir un filtre passe-bande.",
        history: {
            year: "1887",
            people: ["Heinrich Hertz"],
            context: "Hertz utilise des circuits RLC pour générer et détecter les ondes radio, prouvant l'existence des ondes électromagnétiques prédites par Maxwell."
        },
        problemStatement: {
            context: "Capter une station radio spécifique (ex: 95.5 MHz) sans entendre les autres.",
            objective: "Calculer l'impédance complexe Z et trouver la fréquence de résonance.",
            analogy: "C'est comme une balançoire. Si vous poussez à la bonne fréquence (résonance), elle va très haut."
        },
        steps: [
            {
                title: "1. Impédance Complexe",
                explanation: "En régime alternatif, Z = R + jLω + 1/jCω.",
                code: `from sympy import symbols, I
R, L, C, omega = symbols('R L C omega', real=True)
Z = R + I*L*omega + 1/(I*C*omega)
print("Impédance totale :")
display(Z)`
            },
            {
                title: "2. Fréquence de Résonance",
                explanation: "La résonance se produit quand Im(Z) = 0.",
                code: `from sympy import solve, sqrt
partie_im = L*omega - 1/(C*omega)
omega_res = solve(partie_im, omega)[0]
print(f"Pulsation de résonance : {omega_res}")
# Résultat : 1/sqrt(LC)`
            }
        ]
    },
    {
        id: 'elec-transistor',
        category: 'Élec & Info',
        title: "Amplificateur à Transistor",
        level: "Université (L2)",
        domain: "Électronique",
        icon: "🔊",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer le gain d'un amplificateur à transistor bipolaire.",
        history: {
            year: "1947",
            people: ["Bardeen", "Brattain", "Shockley"],
            context: "L'invention du transistor aux Bell Labs révolutionne l'électronique, remplaçant les tubes à vide encombrants et ouvrant l'ère de la miniaturisation."
        },
        problemStatement: {
            context: "Amplifier le signal d'un microphone pour le rendre audible.",
            objective: "Calculer Av = -gm * Rc.",
            analogy: "Un levier : une petite force à l'entrée produit une grande force à la sortie."
        },
        steps: [
            {
                title: "1. Gain en Tension",
                explanation: "Av = Vout / Vin.",
                code: `from sympy import symbols
gm, Rc = symbols('gm Rc')
Av = -gm * Rc
print(f"Gain de l'amplificateur : {Av}")`
            }
        ]
    },
    {
        id: 'info-algorithm-complexity',
        category: 'Élec & Info',
        title: "Complexité Algorithmique",
        level: "Université (L2)",
        domain: "Informatique Théorique",
        icon: "⏱️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Analyser la complexité temporelle d'un algorithme de tri.",
        history: {
            year: "1962",
            people: ["Donald Knuth"],
            context: "Knuth formalise l'analyse d'algorithmes, créant les notations O, Ω et Θ pour comparer l'efficacité des programmes."
        },
        problemStatement: {
            context: "Choisir entre tri rapide et tri à bulles pour trier 1 million de données.",
            objective: "Comparer O(n log n) vs O(n²).",
            analogy: "Ranger des livres : par ordre alphabétique c'est plus rapide que de chercher au hasard."
        },
        steps: [
            {
                title: "1. Notation Big-O",
                explanation: "Compter les opérations dominantes.",
                code: `from sympy import symbols, log
n = symbols('n')
# Tri rapide
T_quick = n * log(n, 2)
# Tri à bulles
T_bubble = n**2
print(f"QuickSort : O(n log n) = {T_quick}")
print(f"BubbleSort : O(n²) = {T_bubble}")`
            }
        ]
    },
    {
        id: 'info-neural-net',
        category: 'Élec & Info',
        title: "Réseau de Neurones",
        level: "Master",
        domain: "Intelligence Artificielle",
        icon: "🧠",
        difficulty: "Expert",
        duration: "3h",
        description: "Comprendre la rétropropagation du gradient dans un perceptron.",
        history: {
            year: "1986",
            people: ["Rumelhart", "Hinton", "Williams"],
            context: "La publication de l'algorithme de backpropagation relance l'intérêt pour les réseaux de neurones après l'hiver de l'IA."
        },
        problemStatement: {
            context: "Entraîner une IA à reconnaître des chiffres manuscrits.",
            objective: "Calculer ∂E/∂w pour ajuster les poids.",
            analogy: "Descendre une montagne dans le brouillard en tâtant la pente avec ses pieds."
        },
        steps: [
            {
                title: "1. Fonction de Coût",
                explanation: "Erreur quadratique moyenne.",
                code: `from sympy import symbols, diff
w, x, y, y_pred = symbols('w x y y_pred')
# y_pred = w*x (simplifié)
E = (y - y_pred)**2
gradient = diff(E, w)
print("Gradient de l'erreur :")
display(gradient)`
            }
        ]
    },
    {
        id: 'info-cryptography',
        category: 'Élec & Info',
        title: "Hachage Cryptographique",
        level: "Université (L3)",
        domain: "Sécurité Informatique",
        icon: "🔒",
        difficulty: "Avancé",
        duration: "1h30",
        description: "Comprendre les fonctions de hachage (SHA, MD5).",
        history: {
            year: "1993",
            people: ["NSA"],
            context: "La NSA développe SHA-1 pour sécuriser les communications gouvernementales. Aujourd'hui, SHA-256 sécurise Bitcoin et HTTPS."
        },
        problemStatement: {
            context: "Vérifier l'intégrité d'un fichier téléchargé.",
            objective: "Calculer un hash irréversible.",
            analogy: "Un sceau de cire : on voit qu'il est intact, mais on ne peut pas recréer la lettre à partir du sceau."
        },
        steps: [
            {
                title: "1. Propriétés du Hash",
                explanation: "Déterministe, rapide, irréversible, résistant aux collisions.",
                code: `import hashlib
message = "SymLab est génial"
hash_obj = hashlib.sha256(message.encode())
print(f"SHA-256 : {hash_obj.hexdigest()}")`
            }
        ]
    },

    // ==================================================================================
    // 🏗️ GÉNIE CIVIL (5 projets supplémentaires)
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
                title: "1. Section d'Acier",
                explanation: "As = M / (fyd * z).",
                code: `from sympy import symbols
M, fyd, z = symbols('M fyd z')
As = M / (fyd * z)
print("Section d'acier nécessaire :")
display(As)`
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
                explanation: "ΔP = f * (L/D) * (ρv²/2).",
                code: `from sympy import symbols
f, L, D, rho, v = symbols('f L D rho v')
Delta_P = f * (L/D) * (rho*v**2/2)
print("Perte de charge :")
display(Delta_P)`
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
                explanation: "Pa = 0.5 * γ * H² * Ka.",
                code: `from sympy import symbols, tan, pi
gamma, H, phi = symbols('gamma H phi')
Ka = (1 - tan(phi)) / (1 + tan(phi))
Pa = 0.5 * gamma * H**2 * Ka
print("Poussée active :")
display(Pa)`
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
                title: "1. Fréquence Propre",
                explanation: "f = (1/2π) * sqrt(k/m).",
                code: `from sympy import symbols, sqrt, pi
k, m = symbols('k m')
f = (1/(2*pi)) * sqrt(k/m)
print("Fréquence propre :")
display(f)`
            }
        ]
    }
];
