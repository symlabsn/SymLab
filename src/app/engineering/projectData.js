export const engineeringProjects = [
    // --- MATHÉMATIQUES (10 Projets) ---
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
        id: 'solar-optimization',
        category: 'Thermodynamique',
        title: "Optimisation Panneau Solaire",
        level: "Lycée (Terminale S)",
        domain: "Génie Énergétique",
        icon: "☀️",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Déterminer l'angle d'inclinaison optimal d'un panneau solaire à Dakar.",
        problemStatement: {
            context: "Optimiser la production d'énergie solaire en fonction de la position du soleil.",
            objective: "Maximiser I(theta) = I0 * sin(alpha + theta).",
            analogy: "Orienter un seau pour recueillir le maximum de pluie."
        },
        steps: [
            {
                title: "1. Modélisation",
                explanation: "Définition de la fonction d'intensité.",
                code: `from sympy import symbols, sin, diff, solve
theta, alpha, I0 = symbols('theta alpha I0')
I = I0 * sin(alpha + theta)
display(I)`
            },
            {
                title: "2. Optimisation",
                explanation: "Calcul de la dérivée pour trouver le maximum.",
                code: `dI = diff(I, theta)
sol = solve(dI, theta)
print(f"Angle optimal : {sol}")`
            }
        ]
    },
    // --- PHYSIQUE : MÉCANIQUE (8 Projets) ---
    {
        id: 'beam-deflection',
        category: 'Génie Civil',
        title: "Flexion d'une Poutre",
        level: "Université (L1)",
        domain: "Résistance des Matériaux",
        icon: "🌉",
        difficulty: "Intermédiaire",
        duration: "1h 30",
        description: "Calculer la déformation d'un pont sous charge.",
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
        id: 'projectile-motion',
        category: 'Physique',
        title: "Trajectoire Balistique",
        level: "Lycée (Première)",
        domain: "Mécanique du Point",
        icon: "🚀",
        difficulty: "Débutant",
        duration: "1h",
        description: "Prédire la portée d'un projectile (ballon, fusée).",
        problemStatement: {
            context: "Lancer un satellite ou tirer un coup franc : il faut calculer l'angle et la vitesse.",
            objective: "Intégrer les équations de Newton avec gravité.",
            analogy: "Lancer une pierre le plus loin possible."
        },
        steps: [
            {
                title: "1. Lois de Newton",
                explanation: "F = ma => a = -g.",
                code: `from sympy import symbols, integrate
t, g, v0, alpha = symbols('t g v0 alpha')
# Accélération
ax = 0
ay = -g
# Vitesse (intégration)
vx = integrate(ax, t) + v0*cos(alpha)
vy = integrate(ay, t) + v0*sin(alpha)`
            }
        ]
    },
    // --- ÉLECTRICITÉ & ÉLECTRONIQUE (8 Projets) ---
    {
        id: 'rlc-circuit',
        category: 'Élec & Info',
        title: "Filtre Radio RLC",
        level: "Université (L2)",
        domain: "Électronique Analogique",
        icon: "📻",
        difficulty: "Avancé",
        duration: "2h",
        description: "Concevoir un circuit pour capter une fréquence radio spécifique.",
        problemStatement: {
            context: "Isoler la fréquence 95.5 MHz parmi tout le bruit électromagnétique.",
            objective: "Calculer la résonance d'un circuit RLC.",
            analogy: "Une balançoire qui ne va haut que si on la pousse à la bonne vitesse."
        },
        steps: [
            {
                title: "1. Impédance Complexe",
                explanation: "Calcul de Z = R + jLw + 1/jCw.",
                code: `from sympy import symbols, I
R, L, C, w = symbols('R L C w', real=True)
Z = R + I*L*w + 1/(I*C*w)
display(Z)`
            }
        ]
    },
    // --- CHIMIE (8 Projets) ---
    {
        id: 'ph-titration',
        category: 'Chimie',
        title: "Titrage Acide-Base",
        level: "Lycée (Terminale)",
        domain: "Chimie des Solutions",
        icon: "🧪",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Simuler la courbe de pH lors d'un dosage.",
        problemStatement: {
            context: "Vérifier la concentration d'un acide inconnu en laboratoire.",
            objective: "Tracer pH = f(Volume versé).",
            analogy: "Neutraliser l'acidité d'un plat en ajoutant du bicarbonate petit à petit."
        },
        steps: [
            {
                title: "1. Équation de Henderson-Hasselbalch",
                explanation: "pH = pKa + log([A-]/[AH]).",
                code: `# Code à venir...`
            }
        ]
    },
    // --- BIOLOGIE (8 Projets) ---
    {
        id: 'pop-growth',
        category: 'Biologie',
        title: "Croissance Bactérienne",
        level: "Université (L1)",
        domain: "Écologie Mathématique",
        icon: "🧫",
        difficulty: "Débutant",
        duration: "1h",
        description: "Modéliser la croissance exponentielle et logistique d'une population.",
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
display(sol)`
            }
        ]
    },
    // --- INFORMATIQUE & IA (6 Projets) ---
    {
        id: 'neural-net-grad',
        category: 'Élec & Info',
        title: "Descente de Gradient (IA)",
        level: "Master",
        domain: "Intelligence Artificielle",
        icon: "🧠",
        difficulty: "Expert",
        duration: "3h",
        description: "Comprendre comment un réseau de neurones apprend (Backpropagation).",
        problemStatement: {
            context: "Entraîner une IA à reconnaître des images.",
            objective: "Calculer le gradient de la fonction de coût.",
            analogy: "Descendre une montagne dans le brouillard en tâtant la pente avec ses pieds."
        },
        steps: [
            {
                title: "1. Fonction de Coût",
                explanation: "Erreur quadratique moyenne.",
                code: `# Code à venir...`
            }
        ]
    },
    // --- GÉNIE CIVIL & ARCHI (6 Projets) ---
    {
        id: 'bridge-resonance',
        category: 'Génie Civil',
        title: "Résonance d'un Pont",
        level: "Master",
        domain: "Dynamique des Structures",
        icon: "🌉",
        difficulty: "Expert",
        duration: "2h30",
        description: "Éviter la catastrophe du pont de Tacoma.",
        problemStatement: {
            context: "Le vent fait vibrer le pont. Si la fréquence correspond à la fréquence propre, c'est la destruction.",
            objective: "Calculer les modes propres de vibration.",
            analogy: "Un chanteur qui brise un verre avec sa voix."
        },
        steps: [
            {
                title: "1. Équation des Ondes",
                explanation: "Modélisation des vibrations.",
                code: `# Code à venir...`
            }
        ]
    },
    // --- ÉCONOMIE & FINANCE (4 Projets) ---
    {
        id: 'compound-interest',
        category: 'Mathématiques',
        title: "Intérêts Composés",
        level: "Lycée",
        domain: "Maths Financières",
        icon: "💰",
        difficulty: "Débutant",
        duration: "30 min",
        description: "Calculer la croissance d'un investissement.",
        problemStatement: {
            context: "Épargner pour la retraite ou rembourser un prêt.",
            objective: "Suite géométrique u_n = u_0 * (1+r)^n.",
            analogy: "Une boule de neige qui grossit en roulant."
        },
        steps: [
            {
                title: "1. Formule",
                explanation: "Calcul direct.",
                code: `# Code à venir...`
            }
        ]
    },
    // --- THERMODYNAMIQUE (Suite) ---
    {
        id: 'heat-transfer',
        category: 'Thermodynamique',
        title: "Isolation Thermique",
        level: "Université (L2)",
        domain: "Transfert Thermique",
        icon: "❄️",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer l'épaisseur d'isolant nécessaire pour une maison.",
        problemStatement: {
            context: "Garder une maison fraîche à Dakar sans climatisation excessive.",
            objective: "Loi de Fourier sur la conduction.",
            analogy: "Porter un manteau pour garder sa chaleur corporelle."
        },
        steps: [
            {
                title: "1. Loi de Fourier",
                explanation: "Flux = -k * dT/dx.",
                code: `# Code à venir...`
            }
        ]
    },
    // --- OPTIQUE ---
    {
        id: 'lens-design',
        category: 'Physique',
        title: "Conception de Lunettes",
        level: "Lycée (Première)",
        domain: "Optique Géométrique",
        icon: "👓",
        difficulty: "Débutant",
        duration: "1h",
        description: "Calculer la vergence nécessaire pour corriger la myopie.",
        problemStatement: {
            context: "Fabriquer des lunettes pour quelqu'un qui ne voit pas de loin.",
            objective: "Formule de conjugaison de Descartes.",
            analogy: "Ajuster la mise au point d'un projecteur."
        },
        steps: [
            {
                title: "1. Relation de Conjugaison",
                explanation: "1/OA' - 1/OA = C.",
                code: `# Code à venir...`
            }
        ]
    },
    // --- FLUIDES ---
    {
        id: 'bernoulli-pipe',
        category: 'Physique',
        title: "Débit d'un Barrage",
        level: "Université (L2)",
        domain: "Mécanique des Fluides",
        icon: "💧",
        difficulty: "Intermédiaire",
        duration: "1h30",
        description: "Calculer la vitesse de l'eau sortant d'un barrage.",
        problemStatement: {
            context: "Dimensionner une turbine hydroélectrique.",
            objective: "Théorème de Bernoulli.",
            analogy: "Vider une bouteille d'eau : plus elle est pleine, plus ça sort vite."
        },
        steps: [
            {
                title: "1. Bernoulli",
                explanation: "Conservation de l'énergie dans un fluide.",
                code: `# Code à venir...`
            }
        ]
    },
    // --- CHIMIE ORGANIQUE ---
    {
        id: 'reaction-kinetics',
        category: 'Chimie',
        title: "Cinétique Chimique",
        level: "Université (L1)",
        domain: "Chimie Physique",
        icon: "⏱️",
        difficulty: "Intermédiaire",
        duration: "1h",
        description: "Déterminer l'ordre d'une réaction et sa vitesse.",
        problemStatement: {
            context: "Savoir combien de temps prend un médicament pour agir.",
            objective: "Intégrer les lois de vitesse.",
            analogy: "La vitesse à laquelle une foule sort d'un stade dépend du nombre de portes."
        },
        steps: [
            {
                title: "1. Loi de Vitesse",
                explanation: "v = k[A]^n.",
                code: `# Code à venir...`
            }
        ]
    },
    // --- ROBOTIQUE ---
    {
        id: 'robot-arm',
        category: 'Élec & Info',
        title: "Bras Robotique 2D",
        level: "Master",
        domain: "Robotique",
        icon: "🤖",
        difficulty: "Expert",
        duration: "2h",
        description: "Cinématique inverse pour attraper un objet.",
        problemStatement: {
            context: "Programmer un robot pour qu'il saisisse une pièce sur un tapis roulant.",
            objective: "Calculer les angles des moteurs (theta1, theta2) pour atteindre (x, y).",
            analogy: "Votre cerveau calcule inconsciemment comment bouger l'épaule et le coude pour attraper un verre."
        },
        steps: [
            {
                title: "1. Géométrie",
                explanation: "Al-Kashi (Loi des cosinus).",
                code: `# Code à venir...`
            }
        ]
    }
    // Note: Ceci est un extrait représentatif. La liste complète contiendra 60+ projets.
];
