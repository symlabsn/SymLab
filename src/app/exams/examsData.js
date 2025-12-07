
// Banque d'exercices pour composer des sujets riches et variés sans répétition excessive
const exercisesBank = {
    math: {
        analysis: [
            {
                title: "Étude de Fonction Logarithme",
                content: `**Partie A**
Soit la fonction $g$ définie sur $]0; +\\infty[$ par $g(x) = x^2 + 1 - \\ln(x)$.
1. Étudier les variations de $g$ (calculer $g'(x)$ et son signe).
2. En déduire que $g(x) > 0$ pour tout $x > 0$.

**Partie B**
On considère $f(x) = x + \\frac{\\ln(x)}{x}$.
1. Déterminer les limites en $0^+$ et en $+\\infty$. Interpréter graphiquement.
2. Montrer que $f'(x) = \\frac{g(x)}{x^2}$.
3. Dresser le tableau de variations complet de $f$.
4. Montrer que la droite $(\\Delta): y = x$ est asymptote oblique. Étudier la position relative de $C_f$ et $(\\Delta)$.`,
                correction: `**Partie A**
1. $g'(x) = 2x - 1/x = (2x^2 - 1)/x$. S'annule en $1/\\sqrt{2}$. Minimum positif.
2. $g(x)$ admet un minimum strictement positif, donc $g(x) > 0$.

**Partie B**
1. En $0^+$ : $-\\infty$ (A.V.). En $+\\infty$ : $+\\infty$.
2. Dérivée $f'(x) = \\frac{x^2 - (1 - \\ln x)}{x^2}$... (Correction détaillée à suivre).`
            },
            {
                title: "Fonction Exponentielle et Suite",
                content: `On considère la fonction $f(x) = (x-1)e^{-x} + 2$.
1. Calculer la dérivée $f'(x)$ et étudier son signe.
2. Montrer que l'équation $f(x) = 0$ admet une solution unique $\\alpha$ sur $\\mathbb{R}$.
3. On définit la suite $u_n$ par $u_0 = 1$ et $u_{n+1} = f(u_n)$.
   a) Montrer que si $u_n \\in [1; 2]$, alors $u_{n+1} \\in [1; 2]$.
   b) Étudier la convergence de la suite.`,
                correction: `1. $f'(x) = e^{-x} - (x-1)e^{-x} = e^{-x}(2-x)$.
2. TVI sur l'intervalle approprié.
3. Utiliser le théorème du point fixe (croissance de f sur l'intervalle...).`
            }
        ],
        complex: [
            {
                title: "Nombres Complexes et Géométrie",
                content: `Le plan est rapporté à un repère orthonormal direct $(O, \\vec{u}, \\vec{v})$.
1. Résoudre dans $\\mathbb{C}$ l'équation $z^2 - 2z + 4 = 0$. Écrire les solutions sous forme exponentielle.
2. Soient les points $A(1 + i\\sqrt{3})$ et $B(1 - i\\sqrt{3})$.
   a) Placer les points.
   b) Montrer que le triangle $OAB$ est équilatéral.
3. Soit $R$ la rotation de centre $O$ et d'angle $\\frac{2\\pi}{3}$. Déterminer l'image de $A$ par $R$.`,
                correction: `1. $\\Delta = -12 = (2i\\sqrt{3})^2$. $z_1 = 1 + i\\sqrt{3} = 2e^{i\\pi/3}$.
2. $|z_A| = 2$, $|z_B| = 2$, $|z_A - z_B| = |2i\\sqrt{3}| = 2\\sqrt{3}$...`
            }
        ],
        arithmetic: [
            {
                title: "Arithmétique (Spécialité)",
                content: `1. On considère l'équation $(E) : 13x - 7y = 5$ où $x, y \\in \\mathbb{Z}$.
   a) Vérifier que le couple $(2, 3)$ est solution particulière.
   b) Résoudre l'équation générale.
2. Un code confidentiel est un nombre de 3 chiffres dont le reste modulo 13 est 5 et modulo 7 est 5. Trouver le plus petit nombre possible.`,
                correction: `1. $13(x-2) = 7(y-3)$. Comme 13 et 7 premiers entre eux, $x = 7k+2$, $y = 13k+3$.
2. $N \\equiv 5 [91]$. Plus petit nombre : 5 (si 1 chiffre) ou chercher dans les 3 chiffres.`
            }
        ],
        prob: [
            {
                title: "Probabilités Conditionnelles",
                content: `Une urne contient 10 boules : 5 rouges, 3 vertes, 2 noires.
1. On tire simultanément 3 boules.
   a) Calculer la probabilité d'avoir 3 boules de la même couleur.
   b) Calculer la probabilité d'avoir au moins une boule noire.
2. On répète l'expérience 5 fois avec remise. Loi binomiale.`,
                correction: `1. a) $C_5^3 + C_3^3 / C_{10}^3$.
   b) Événement contraire : aucune noire ($C_8^3/C_{10}^3$).`
            }
        ]
    },
    pc: {
        mech: [
            {
                title: "Mouvement d'un Projectile",
                content: `Un joueur frappe dans un ballon posé en $O$ avec une vitesse initiale $V_0$ faisant un angle $\\alpha$ avec l'horizontale.
1. Établir les équations horaires du mouvement dans le repère $(O, x, z)$. On néglige les frottements.
2. Déterminer l'équation de la trajectoire. Quelle est sa nature ?
3. Le but est situé à $x = 20$m et la barre transversale est à $h = 2.44$m.
   Si $V_0 = 15$m/s et $\\alpha = 45^\\circ$, le but est-il marqué ?`,
                correction: `1. $x(t) = V_0 \\cos\\alpha . t$ ; $z(t) = -\\frac{1}{2}gt^2 + V_0 \\sin\\alpha . t$.
2. Parabole.
3. Calculer $z(20)$. Si $0 < z < 2.44$ alors OUI.`
            },
            {
                title: "Pendule Élastique (Ressort)",
                content: `Un solide de masse $m$ est accroché à un ressort de raideur $k$.
1. Faire le bilan des forces et appliquer la 2ème loi de Newton.
2. Établir l'équation différentielle du mouvement.
3. La solution est de la forme $x(t) = X_m \\cos(\\omega_0 t + \\phi)$. Exprimer la période propre $T_0$.
4. Calculer l'énergie mécanique du système. Conservation ?`,
                correction: `2. $\\ddot{x} + \\frac{k}{m}x = 0$.
3. $T_0 = 2\\pi \\sqrt{\\frac{m}{k}}$.`
            }
        ],
        chem: [
            {
                title: "Dosage Acido-Basique",
                content: `On dose un volume $V_a = 20$mL d'une solution d'acide éthanoïque ($CH_3COOH$) par une solution d'hydroxyde de sodium ($C_b = 0.1$ mol/L).
1. Écrire l'équation de la réaction de dosage.
2. À l'équivalence, le volume de base versé est $V_{bE} = 15$mL. Calculer la concentration $C_a$.
3. Justifier le caractère basique du mélange à l'équivalence.
4. Quel indicateur coloré choisir parmi : Hélianthine (3.1-4.4), BBT (6.0-7.6), Phénolphtaléine (8.2-10.0) ?`,
                correction: `1. $CH_3COOH + HO^- \\rightarrow CH_3COO^- + H_2O$.
2. $C_a = \\frac{C_b V_{bE}}{V_a} = 0.075$ mol/L.
3. Base faible formée ($CH_3COO^-$).
4. Phénolphtaléine (zone de virage contenant le pH équivalent > 7).`
            },
            {
                title: "Estérification et Hydrolyse",
                content: `On mélange 1 mol d'acide éthanoïque et 1 mol d'éthanol.
1. Écrire l'équation de la réaction. Donner les caractéristiques de cette réaction.
2. Au bout d'un temps infini, il reste 1/3 mol d'acide.
   a) Calculer la composition finale du mélange.
   b) Calculer la constante d'équilibre $K$.
3. Comment déplacer l'équilibre pour améliorer le rendement ?`,
                correction: `1. Lente, limitée, athermique.
2. b) $K = \\frac{(2/3)^2}{(1/3)^2} = 4$.
3. Retirer l'eau ou mettre un réactif en excès.`
            }
        ],
        elec: [
            {
                title: "Circuit RC (Charge d'un condensateur)",
                content: `On réalise un circuit série avec un générateur $E$, une résistance $R$ et un condensateur $C$ initialement déchargé.
1. Établir l'équation différentielle vérifiée par la tension $u_C(t)$.
2. Vérifier que $u_C(t) = E(1 - e^{-t/\\tau})$ est solution.
3. Définir la constante de temps $\\tau$. Comment la déterminer graphiquement ?
4. Calculer l'énergie emmagasinée dans le condensateur en régime permanent.`,
                correction: `1. $RC \\frac{du_C}{dt} + u_C = E$.
3. $\\tau = RC$. Tangente à l'origine intercepte l'asymptote $E$ à $t=\\tau$.`
            }
        ]
    },
    bfem: {
        math: [
            {
                title: "Racines carrées et Inéquations",
                content: `**Exercice 1**
1. Mettre sous la forme $a\\sqrt{b}$ : $X = \\sqrt{50} - 2\\sqrt{18} + 4\\sqrt{2}$.
2. Résoudre dans $\\mathbb{R}$ l'inéquation : $\\frac{2x - 3}{4} \\geq \\frac{x + 1}{3}$. Représenter les solutions.

**Exercice 2**
Factoriser $A(x) = (3x - 1)^2 - (2x + 5)(3x - 1)$.
Résoudre $A(x) = 0$.`,
                correction: `1. $5\\sqrt{2} - 6\\sqrt{2} + 4\\sqrt{2} = 3\\sqrt{2}$.
2. $3(2x-3) \\geq 4(x+1) \\Rightarrow 6x - 9 \\geq 4x + 4 \\Rightarrow 2x \\geq 13 \\Rightarrow x \\geq 6.5$.`
            },
            {
                title: "Thalès et Trigonométrie",
                content: `**Problème de Géométrie**
Soit un triangle EFG rectangle en E tel que EF=6cm et EG=8cm.
1. Calculer FG.
2. Soit M sur [EF] tel que EM=2cm. La parallèle à (FG) passant par M coupe (EG) en N.
   Calculer EN et MN.
3. Calculer $\\sin(\\widehat{EFG})$.`,
                correction: `1. Pythagore : $FG = 10$.
2. Thalès : $EM/EF = EN/EG = MN/FG = 1/3$.
   $EN = 8/3$, $MN = 10/3$.`
            }
        ],
        pc: [
            {
                title: "Électricité et Optique",
                content: `**Physique**
1. Loi d'Ohm : On a un conducteur ohmique $R = 50\\Omega$ traversé par $I = 200$mA. Calculer $U$.
2. Lentille : Une lentille convergente a une vergence $C = 5\\delta$. Calculer sa distance focale $f$.
   Construire l'image d'un objet AB de 2cm situé à 30cm de la lentille.`,
                correction: `1. $U = R \\times I = 50 \\times 0.2 = 10$V.
2. $f = 1/C = 0.2$m $= 20$cm.`
            },
            {
                title: "Chimie et Mécanique",
                content: `**Chimie**
Une solution d'acide chlorhydrique réagit avec du fer.
1. Écrire l'équation bilan.
2. Quel gaz se dégage ? Comment l'identifier ?

**Mécanique**
Un objet de masse m=500g est suspendu.
1. Calculer son poids ($g=10$N/kg).
2. Représenter les forces à l'équilibre.`,
                correction: `Chimie : $2H^+ + Fe \\rightarrow H_2 + Fe^{2+}$. Détonation à la flamme.
Méca : $P = 0.5 \\times 10 = 5$N.`
            }
        ]
    }
};

const predefinedExams = [
    // --- BAC S1 (Niveau Expert) ---
    {
        id: 'bac-s1-math-1',
        type: 'BAC S1',
        subject: 'Mathématiques',
        title: 'BAC S1 Maths - Session Normale 1',
        duration: '4h',
        description: 'Sujet exigeant : Arithmétique, Similitudes et Analyse.',
        topics: ['Arithmétique', 'Similitudes', 'ln/exp'],
        difficulty: 'Expert',
        content: `### Exercice 1 (Arithmétique)
${exercisesBank.math.arithmetic[0].content}

### Exercice 2 (Analyses)
${exercisesBank.math.analysis[0].content}`,
        correction: `${exercisesBank.math.arithmetic[0].correction}

${exercisesBank.math.analysis[0].correction}`
    },
    {
        id: 'bac-s1-math-2',
        type: 'BAC S1',
        subject: 'Mathématiques',
        title: 'BAC S1 Maths - Session Remplacement',
        duration: '4h',
        description: 'Complexes géométriques, Suites et Intégrales.',
        topics: ['Complexes', 'Suites', 'Intégration'],
        difficulty: 'Expert',
        content: `### Exercice 1 (Complexes)
${exercisesBank.math.complex[0].content}

### Exercice 2 (Analyse)
${exercisesBank.math.analysis[1].content}`,
        correction: `${exercisesBank.math.complex[0].correction}

${exercisesBank.math.analysis[1].correction}`
    },
    {
        id: 'bac-s1-pc-1',
        type: 'BAC S1',
        subject: 'Physique-Chimie',
        title: 'BAC S1 PC - Session 1',
        duration: '4h',
        description: ' Mécanique Newtonienne et Électromagnétisme.',
        topics: ['Mécanique', 'Électromagnétisme'],
        difficulty: 'Expert',
        content: `### Physique 1 (Mécanique)
${exercisesBank.pc.mech[0].content}

### Physique 2 (Électricité)
${exercisesBank.pc.elec[0].content}`,
        correction: `${exercisesBank.pc.mech[0].correction}

${exercisesBank.pc.elec[0].correction}`
    },
    {
        id: 'bac-s1-pc-2',
        type: 'BAC S1',
        subject: 'Physique-Chimie',
        title: 'BAC S1 PC - Session 2',
        duration: '4h',
        description: 'Chimie Organique et Oscillations.',
        topics: ['Chimie', 'Oscillations'],
        difficulty: 'Expert',
        content: `### Chimie
${exercisesBank.pc.chem[0].content}

### Physique
${exercisesBank.pc.mech[1].content}`,
        correction: `${exercisesBank.pc.chem[0].correction}

${exercisesBank.pc.mech[1].correction}`
    },

    // --- BAC S2 (Niveau Difficile) ---
    {
        id: 'bac-s2-math-1',
        type: 'BAC S2',
        subject: 'Mathématiques',
        title: 'BAC S2 Maths - Sujet Type A',
        duration: '4h',
        description: 'Classique : Nombres complexes et étude de fonction.',
        topics: ['Complexes', 'Analyse'],
        difficulty: 'Difficile',
        content: `### Exercice 1 (Nombres Complexes)
${exercisesBank.math.complex[0].content}

### Problème (Analyse)
${exercisesBank.math.analysis[1].content}`,
        correction: 'Voir corrigés correspondants.'
    },
    {
        id: 'bac-s2-math-2',
        type: 'BAC S2',
        subject: 'Mathématiques',
        title: 'BAC S2 Maths - Sujet Type B',
        duration: '4h',
        description: 'Probabilités et Logarithme.',
        topics: ['Probabilités', 'Logarithme'],
        difficulty: 'Difficile',
        content: `### Exercice 1 (Probabilités)
${exercisesBank.math.prob[0].content}

### Problème (Fonction)
${exercisesBank.math.analysis[0].content}`,
        correction: 'Voir corrigés correspondants.'
    },
    {
        id: 'bac-s2-math-3',
        type: 'BAC S2',
        subject: 'Mathématiques',
        title: 'BAC S2 Maths - Sujet Type C',
        duration: '4h',
        description: 'Suites numériques et Exponentielle.',
        topics: ['Suites', 'Exponentielle'],
        difficulty: 'Difficile',
        content: `### Exercice 1
${exercisesBank.math.analysis[1].content.split('**Partie B**')[0]}

### Problème
${exercisesBank.math.analysis[0].content}`,
        correction: '...'
    },
    {
        id: 'bac-s2-pc-1',
        type: 'BAC S2',
        subject: 'Physique-Chimie',
        title: 'BAC S2 PC - Sujet Mécanique/Chimie',
        duration: '4h',
        description: 'Mouvements plans et Estérification.',
        topics: ['Mécanique', 'Chimie Orga'],
        difficulty: 'Difficile',
        content: `### Chimie
${exercisesBank.pc.chem[1].content}

### Physique
${exercisesBank.pc.mech[0].content}`,
        correction: '...'
    },
    {
        id: 'bac-s2-pc-2',
        type: 'BAC S2',
        subject: 'Physique-Chimie',
        title: 'BAC S2 PC - Sujet Électricité/Acide-Base',
        duration: '4h',
        description: 'Dipôle RC et Dosages.',
        topics: ['Électricité', 'Acides-Bases'],
        difficulty: 'Difficile',
        content: `### Chimie
${exercisesBank.pc.chem[0].content}

### Physique
${exercisesBank.pc.elec[0].content}`,
        correction: '...'
    },
    {
        id: 'bac-s2-pc-3',
        type: 'BAC S2',
        subject: 'Physique-Chimie',
        title: 'BAC S2 PC - Synthèse',
        duration: '4h',
        description: 'Oscillateurs mécaniques et Cinétique.',
        topics: ['Mécanique', 'Chimie'],
        difficulty: 'Difficile',
        content: `### Physique
${exercisesBank.pc.mech[1].content}

### Chimie
On s'intéresse à la cinétique de la réaction d'estérification.
(Voir Exercice ${exercisesBank.pc.chem[1].title})`,
        correction: '...'
    },

    // --- BFEM (Niveau Moyen) ---
    {
        id: 'bfem-math-1',
        type: 'BFEM',
        subject: 'Mathématiques',
        title: 'BFEM Maths - Sujet 1',
        duration: '2h',
        description: 'Algèbre et Thalès.',
        topics: ['Racines', 'Thalès'],
        difficulty: 'Moyen',
        content: `${exercisesBank.bfem.math[0].content}`,
        correction: `${exercisesBank.bfem.math[0].correction}`
    },
    {
        id: 'bfem-math-2',
        type: 'BFEM',
        subject: 'Mathématiques',
        title: 'BFEM Maths - Sujet 2',
        duration: '2h',
        description: 'Trigonométrie et Géométrie dans l\'espace.',
        topics: ['Trigo', 'Géométrie'],
        difficulty: 'Moyen',
        content: `${exercisesBank.bfem.math[1].content}`,
        correction: `${exercisesBank.bfem.math[1].correction}`
    },
    {
        id: 'bfem-math-3',
        type: 'BFEM',
        subject: 'Mathématiques',
        title: 'BFEM Maths - Sujet 3',
        duration: '2h',
        description: 'Statistiques et Calcul littéral.',
        topics: ['Statistiques', 'Factorisation'],
        difficulty: 'Moyen',
        content: `### Exercice 1 (Statistiques)
Les notes d'un élève : 12, 14, 09, 15, 11.
Calculer la moyenne.

### Exercice 2
${exercisesBank.bfem.math[0].content.split('**Exercice 2**')[1]}`,
        correction: 'Moyenne = 12.2'
    },
    {
        id: 'bfem-math-4',
        type: 'BFEM',
        subject: 'Mathématiques',
        title: 'BFEM Maths - Sujet 4',
        duration: '2h',
        description: 'Systèmes d\'équations et Pythagore.',
        topics: ['Systèmes', 'Géométrie'],
        difficulty: 'Moyen',
        content: `### Algèbre
Résoudre le système :
2x + y = 5
x - y = 1

### Géométrie
Triangle rectangle, calculer l'hypoténuse si côtés 3cm et 4cm.`,
        correction: 'x=2, y=1. Hyp=5.'
    },
    {
        id: 'bfem-pc-1',
        type: 'BFEM',
        subject: 'Physique-Chimie',
        title: 'BFEM PC - Sujet 1',
        duration: '1h30',
        description: 'Optique et Acides.',
        topics: ['Optique', 'Chimie'],
        difficulty: 'Moyen',
        content: `${exercisesBank.bfem.pc[0].content}`,
        correction: `${exercisesBank.bfem.pc[0].correction}`
    },
    {
        id: 'bfem-pc-2',
        type: 'BFEM',
        subject: 'Physique-Chimie',
        title: 'BFEM PC - Sujet 2',
        duration: '1h30',
        description: 'Mécanique et Ions.',
        topics: ['Poids', 'Ions'],
        difficulty: 'Moyen',
        content: `${exercisesBank.bfem.pc[1].content}`,
        correction: `${exercisesBank.bfem.pc[1].correction}`
    },
    {
        id: 'bfem-pc-3',
        type: 'BFEM',
        subject: 'Physique-Chimie',
        title: 'BFEM PC - Sujet 3',
        duration: '1h30',
        description: 'Électricité (Loi d\'Ohm) et Hydrocarbures.',
        topics: ['Électricité', 'Chimie Orga'],
        difficulty: 'Moyen',
        content: `### Physique
Reprendre l'exercice sur la loi d'Ohm avec R=100 Ohms.

### Chimie
Nommer les alcanes suivants : CH4, C2H6, C3H8.`,
        correction: 'Méthane, Éthane, Propane.'
    },
    {
        id: 'bfem-pc-4',
        type: 'BFEM',
        subject: 'Physique-Chimie',
        title: 'BFEM PC - Sujet 4',
        duration: '1h30',
        description: 'Lentilles minces et Solutions.',
        topics: ['Optique', 'pH'],
        difficulty: 'Moyen',
        content: `### Optique
Une lentille de 2 dioptries. Calculer f.

### Chimie
Une solution a un pH de 3. Est-elle acide ou basique ?`,
        correction: 'f=0.5m. Acide.'
    }
];

const examsData = [
    ...predefinedExams,
    {
        id: 'bac-s2-math-4',
        type: 'BAC S2',
        subject: 'Mathématiques',
        title: 'BAC S2 Maths - Sujet Type D',
        duration: '4h',
        description: 'Synthèse : Complexes et Probabilités.',
        topics: ['Complexes', 'Probabilités'],
        difficulty: 'Difficile',
        content: `### Exercice 1
${exercisesBank.math.complex[0].content}

### Exercice 2
${exercisesBank.math.prob[0].content}`,
        correction: '...'
    },
    {
        id: 'bac-s2-pc-4',
        type: 'BAC S2',
        subject: 'Physique-Chimie',
        title: 'BAC S2 PC - Sujet Type D',
        duration: '4h',
        description: 'Synthèse : Mécanique et Chimie.',
        topics: ['Mécanique', 'Chimie'],
        difficulty: 'Difficile',
        content: `### Physique
${exercisesBank.pc.mech[0].content}

### Chimie
${exercisesBank.pc.chem[0].content}`,
        correction: '...'
    }
];

export default examsData;
