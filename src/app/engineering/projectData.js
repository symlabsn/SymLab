export const engineeringProjects = [
    {
        id: 'solar-optimization',
        title: "Optimisation Panneau Solaire",
        level: "Lycée (Terminale S)",
        domain: "Génie Énergétique",
        icon: "☀️",
        difficulty: "Débutant",
        duration: "45 min",
        description: "Déterminer l'angle d'inclinaison optimal d'un panneau solaire à Dakar pour maximiser la production d'énergie en fonction de la position du soleil.",
        problemStatement: {
            context: "Vous êtes ingénieur à Dakar. Votre client veut installer des panneaux solaires sur son toit. Le soleil change de hauteur dans le ciel selon l'heure de la journée. Si le panneau est fixe, quel est le meilleur angle pour capter le maximum de rayons ?",
            objective: "Trouver l'angle θ qui maximise l'intensité reçue I(θ) = I_0 * sin(α + θ), où α est l'élévation du soleil.",
            analogy: "C'est comme orienter un seau pour recueillir le plus d'eau de pluie possible. Si la pluie tombe de biais, il faut pencher le seau pour qu'il soit face à la pluie."
        },
        tools: [
            { name: "SymPy", role: "Calcul de la dérivée et résolution d'équation" },
            { name: "Trigonométrie", role: "Modélisation géométrique" }
        ],
        steps: [
            {
                title: "1. Modélisation Mathématique",
                explanation: "L'énergie reçue dépend du sinus de l'angle entre les rayons du soleil et le panneau. Définissons une fonction d'intensité.",
                code: `from sympy import symbols, sin, cos, diff, solve, pi

# Définition des variables symboliques
theta = symbols('theta')  # Angle du panneau (ce qu'on cherche)
alpha = symbols('alpha')  # Angle d'élévation du soleil (donnée)
I0 = symbols('I0')        # Intensité solaire maximale

# Formule de l'intensité reçue (projection géométrique)
# I(theta) = I0 * sin(alpha + theta)
Intensite = I0 * sin(alpha + theta)

print("Modèle de l'intensité :")
display(Intensite)`
            },
            {
                title: "2. Recherche du Maximum (Dérivée)",
                explanation: "Pour trouver le maximum d'une fonction, on calcule sa dérivée et on cherche quand elle s'annule (pente nulle = sommet de la colline).",
                code: `# Calcul de la dérivée par rapport à theta
derivee = diff(Intensite, theta)

print("Dérivée de l'intensité :")
display(derivee)`
            },
            {
                title: "3. Résolution et Solution",
                explanation: "On résout l'équation Dérivée = 0 pour trouver l'angle optimal.",
                code: `# Résolution de l'équation derivee = 0
solution = solve(derivee, theta)

print(f"L'angle optimal theta est : {solution}")
# Interprétation : Le panneau doit être perpendiculaire aux rayons !`
            }
        ]
    },
    {
        id: 'beam-deflection',
        title: "Flexion d'une Poutre (Pont)",
        level: "Université (Licence 1)",
        domain: "Génie Civil",
        icon: "🌉",
        difficulty: "Intermédiaire",
        duration: "1h 30",
        description: "Calculer la déformation maximale d'une poutre de pont sous une charge répartie (voitures) pour éviter qu'elle ne casse.",
        problemStatement: {
            context: "Vous concevez un petit pont au-dessus d'une rivière en Casamance. Le pont est une simple poutre posée sur deux appuis. Il doit supporter son propre poids et celui des véhicules.",
            objective: "Résoudre l'équation différentielle de la ligne élastique EI * y''(x) = M(x) pour trouver la flèche maximale (déformation).",
            analogy: "Imaginez une planche de bois posée entre deux briques. Si vous marchez au milieu, elle plie. Nous allons calculer de combien de centimètres elle descend."
        },
        tools: [
            { name: "SymPy", role: "Intégration double et gestion des constantes" },
            { name: "Mécanique", role: "Théorie des poutres (Euler-Bernoulli)" }
        ],
        steps: [
            {
                title: "1. Définition des Charges et du Moment",
                explanation: "Le moment fléchissant M(x) dépend de la charge q répartie sur la longueur L.",
                code: `from sympy import symbols, integrate, dsolve, Function

x, L, E, I, q = symbols('x L E I q')
y = Function('y')(x) # La déformée (flèche)

# Moment fléchissant pour une poutre sur 2 appuis simples
# M(x) = (q*L*x)/2 - (q*x**2)/2
M = (q*L*x)/2 - (q*x**2)/2

print("Equation du Moment Fléchissant M(x) :")
display(M)`
            },
            {
                title: "2. Équation Différentielle",
                explanation: "La courbure de la poutre est proportionnelle au moment. On intègre deux fois pour trouver la position y(x).",
                code: `# Equation : E*I*y''(x) = -M(x)
# On intègre une première fois pour avoir la pente (rotation)
pente = integrate(-M, x) + symbols('C1')

# On intègre une deuxième fois pour avoir la déformée (position y)
deformee = integrate(pente, x) + symbols('C2')

print("Forme générale de la déformée (avec constantes) :")
display(deformee)`
            },
            {
                title: "3. Conditions aux Limites",
                explanation: "La poutre ne bouge pas aux appuis (x=0 et x=L). Cela nous permet de trouver les constantes C1 et C2.",
                code: `# Condition 1 : y(0) = 0 => C2 = 0
deformee = deformee.subs('C2', 0)

# Condition 2 : y(L) = 0 => On trouve C1
C1_sol = solve(deformee.subs(x, L), 'C1')[0]
deformee_finale = deformee.subs('C1', C1_sol)

print("Equation finale de la déformée y(x) :")
display(deformee_finale)`
            }
        ]
    },
    {
        id: 'rlc-circuit',
        title: "Circuit RLC & Résonance",
        level: "Université (Licence 2)",
        domain: "Génie Électrique",
        icon: "⚡",
        difficulty: "Avancé",
        duration: "2h 00",
        description: "Analyser la réponse d'un circuit RLC série pour concevoir un filtre passe-bande (sélection de fréquence radio).",
        problemStatement: {
            context: "Vous voulez capter une station radio spécifique (ex: 95.5 MHz) sans entendre les autres. Il faut un circuit qui laisse passer cette fréquence et bloque les autres.",
            objective: "Calculer l'impédance complexe Z et trouver la fréquence de résonance où l'impédance est minimale (courant maximal).",
            analogy: "C'est comme une balançoire. Si vous poussez à la bonne fréquence (résonance), elle va très haut. Si vous poussez trop vite ou trop lentement, elle bouge à peine."
        },
        tools: [
            { name: "SymPy", role: "Calcul complexe et simplification" },
            { name: "Physique", role: "Lois de Kirchhoff" }
        ],
        steps: [
            {
                title: "1. Impédance Complexe",
                explanation: "En régime alternatif, chaque composant a une impédance. R (résistance), L (inductance, jLω), C (condensateur, 1/jCω).",
                code: `from sympy import symbols, I, simplify, solve

R, L, C, omega = symbols('R L C omega', real=True, positive=True)

# Impédances
ZR = R
ZL = I * L * omega
ZC = 1 / (I * C * omega)

# Impédance totale (Série)
Z_total = ZR + ZL + ZC

print("Impédance complexe totale Z :")
display(Z_total)`
            },
            {
                title: "2. Module de l'Impédance",
                explanation: "Le courant est maximal quand le module de l'impédance |Z| est minimal.",
                code: `# Calcul du module carré |Z|^2 (plus simple à manipuler)
# Z = R + j(Lw - 1/Cw)
# |Z|^2 = R^2 + (Lw - 1/Cw)^2
partie_imaginaire = L*omega - 1/(C*omega)

print("Partie imaginaire à annuler pour la résonance :")
display(partie_imaginaire)`
            },
            {
                title: "3. Fréquence de Résonance",
                explanation: "La résonance se produit quand la partie imaginaire s'annule (Lω = 1/Cω).",
                code: `# Résolution de Im(Z) = 0 pour trouver omega
omega_res = solve(partie_imaginaire, omega)[0]

print(f"Pulsation de résonance omega_0 :")
display(omega_res)
# Résultat attendu : 1 / sqrt(LC)`
            }
        ]
    },
    {
        id: 'drone-pid',
        title: "Stabilisation d'un Drone (PID)",
        level: "Université (Master)",
        domain: "Automatique & Robotique",
        icon: "🚁",
        difficulty: "Expert",
        duration: "3h 00",
        description: "Concevoir un contrôleur PID pour maintenir un drone en vol stationnaire malgré le vent.",
        problemStatement: {
            context: "Un drone doit rester à une altitude fixe de 10m. Le vent le pousse vers le bas ou le haut. Le moteur doit corriger automatiquement la vitesse des hélices.",
            objective: "Modéliser la dynamique du drone et calculer les gains du correcteur PID pour assurer la stabilité.",
            analogy: "Imaginez tenir un balai en équilibre sur votre doigt. Si le balai penche à droite, vous bougez votre main à droite pour le redresser. Le PID est le cerveau qui calcule ce mouvement."
        },
        tools: [
            { name: "SymPy", role: "Transformée de Laplace" },
            { name: "Control Theory", role: "Fonctions de transfert" }
        ],
        steps: [
            {
                title: "1. Modélisation Physique",
                explanation: "Equation du mouvement : m*a = Force_moteur - Poids - Frottements.",
                code: `from sympy import symbols, Function, laplace_transform, inverse_laplace_transform, s, t

m, k, g = symbols('m k g') # masse, frottement, gravité
F = Function('F')(t)       # Force moteur (entrée)
z = Function('z')(t)       # Altitude (sortie)

# Equation différentielle : m*z''(t) + k*z'(t) = F(t) (simplifié autour de l'équilibre)
# En Laplace : (ms^2 + ks)Z(s) = F(s)
# Fonction de Transfert H(s) = Z(s)/F(s) = 1 / (s(ms + k))

H = 1 / (s * (m*s + k))
print("Fonction de Transfert du système (Open Loop) :")
display(H)`
            },
            {
                title: "2. Correcteur Proportionnel (P)",
                explanation: "On ajoute un correcteur Kp. La boucle fermée devient G(s) = (Kp*H) / (1 + Kp*H).",
                code: `Kp = symbols('Kp')
OpenLoop = Kp * H
ClosedLoop = OpenLoop / (1 + OpenLoop)

print("Fonction de Transfert en Boucle Fermée :")
display(simplify(ClosedLoop))`
            },
            {
                title: "3. Analyse de Stabilité",
                explanation: "On cherche les pôles du système (dénominateur = 0). Pour être stable, la partie réelle des pôles doit être négative.",
                code: `denom = simplify(ClosedLoop).as_numer_denom()[1]
poles = solve(denom, s)

print("Pôles du système (doivent être à partie réelle négative) :")
display(poles)`
            }
        ]
    }
];
