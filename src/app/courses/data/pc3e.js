export const pc3eData = {
    id: 'pc-3e',
    title: 'Physique-Chimie 3ème',
    chapters: [
        // ==========================================
        // PARTIE 1 : PHYSIQUE
        // ==========================================
        {
            id: 'phys-3e-01',
            part: 'Partie 1 : Physique',
            title: '1. Lentilles minces',
            image: '/simulations/pc3e/lens-optics-3e.png',
            simulation: {
                id: 'lens-optics-3e',
                title: "Vision Bionique : L'Œil de Lynx",
                type: 'chap1-lentilles-3e'
            },
            story: `Vos lunettes, l'appareil photo, le microscope... tous utilisent des lentilles. Ce sont des morceaux de verre courbés qui dévient la lumière pour agrandir, réduire ou corriger la vision.`,
            content: `
### 1. Types de lentilles
- **Convergente** : Plus épaisse au centre. Concentre les rayons (loupe).
- **Divergente** : Plus fine au centre. Écarte les rayons.

### 2. Foyer et Distance focale
Le foyer F est le point où convergent les rayons parallèles. La distance focale f = OF.

### 3. Construction d'images
Rayon passant par le centre O : non dévié.
Rayon parallèle à l'axe : passe par F'.
            `,
            analogy: {
                title: "🔍 La Lentille comme un Vendeur de Lunettes à Sandaga",
                content: `Les lentilles, c'est comme choisir des lunettes au marché Sandaga !

**Lentille CONVERGENTE** (loupe, lunettes pour hypermétropes) :
Elle est bombée au milieu, plus épaisse au centre.
Elle fait converger les rayons vers un point (le foyer).
Comme quand le vendeur te montre une loupe pour grossir le texte !

**Lentille DIVERGENTE** (lunettes pour myopes) :
Elle est creuse au milieu, plus fine au centre.
Elle écarte les rayons de lumière.
Comme quand on regarde à travers le fond d'une bouteille d'eau.

Le **FOYER (F)** est le point où tous les rayons se rencontrent.
Plus la distance focale est petite, plus la lentille est puissante !`
            },
            summary: [
                "Lentille convergente = Image réelle (projetable).",
                "Lentille divergente = Image virtuelle.",
                "Plus f est petit, plus la lentille est puissante."
            ],
            defis: [
                {
                    id: 'ex-lent-1',
                    question: "Quel type de lentille est utilisé dans une loupe ?",
                    options: ["Divergente", "Convergente", "Plane", "Cylindrique"],
                    correctAnswer: 1,
                    explanation: "La loupe grossit grâce à une lentille convergente.",
                    points: 10
                },
                {
                    id: 'ex-lent-2',
                    question: "Où se forme l'image d'un objet très éloigné avec une lentille convergente ?",
                    options: ["Au centre O", "Au foyer F'", "Très loin", "Nulle part"],
                    correctAnswer: 1,
                    explanation: "Les rayons parallèles (objet à l'infini) convergent au foyer image F'.",
                    points: 15
                }
            ]
        },
        {
            id: 'phys-3e-02',
            part: 'Partie 1 : Physique',
            title: '2. Dispersion de la lumière',
            image: '/simulations/pc3e/light-dispersion-3e.png',
            simulation: {
                id: 'light-dispersion-3e',
                title: "Prisme de Lumière : Le Spectre Secret",
                type: 'chap2-dispersion-3e'
            },
            story: `Pourquoi voit-on un arc-en-ciel après la pluie ? Parce que les gouttes d'eau décomposent la lumière blanche en toutes ses couleurs. C'est la dispersion !`,
            content: `
### 1. Lumière blanche
La lumière du Soleil est un mélange de toutes les couleurs (spectre visible).

### 2. Le Prisme
Un prisme de verre sépare les couleurs car chaque couleur est déviée différemment (réfraction).

### 3. Les 7 couleurs
Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet (ROYGBIV).
            `,
            analogy: {
                title: "🌈 L'Arc-en-ciel comme un Secret de la Lumière",
                content: `La dispersion, c'est découvrir un secret caché !

Après la pluie au Sénégal, regarde le ciel : l'arc-en-ciel apparaît !
C'est parce que les gouttes d'eau agissent comme des millions de petits prismes.

La lumière blanche du Soleil semble incolore, mais en réalité...
Elle contient **TOUTES les couleurs mélangées** !

Le **PRISME** (ou les gouttes d'eau) sépare ces couleurs :
🔴 Rouge (dévié le moins)
🟠 Orange → 🟡 Jaune → 🟢 Vert → 🔵 Bleu → 🟣 Indigo
🟣 Violet (dévié le plus)

**Moyen mnémotechnique** : « ROY G. BIV »

La lumière d'une seule couleur (laser rouge) ne peut pas être décomposée : elle est MONOCHROMATIQUE.`
            },
            summary: [
                "Lumière blanche = Polychromatique.",
                "Lumière d'une seule couleur = Monochromatique.",
                "L'arc-en-ciel est un phénomène de dispersion naturel."
            ],
            defis: [
                {
                    id: 'ex-disp-1',
                    question: "Combien de couleurs principales contient la lumière blanche ?",
                    options: ["3", "5", "7", "12"],
                    correctAnswer: 2,
                    explanation: "Le spectre visible contient 7 couleurs principales (ROYGBIV).",
                    points: 10
                },
                {
                    id: 'ex-disp-2',
                    question: "Quelle couleur est la plus déviée par un prisme ?",
                    options: ["Rouge", "Jaune", "Violet", "Vert"],
                    correctAnswer: 2,
                    explanation: "Le violet a la plus courte longueur d'onde, il est le plus dévié.",
                    points: 15
                }
            ]
        },
        {
            id: 'phys-3e-03',
            part: 'Partie 1 : Physique',
            title: '3. Forces',
            image: '/simulations/pc3e/forces-vectors-3e.png',
            simulation: {
                id: 'forces-vectors-3e',
                title: "Maître des Forces : L'Invisible Pouvoir",
                type: 'chap3-forces-3e'
            },
            story: `Une force, c'est une poussée ou une traction. Quand vous tirez une porte, vous exercez une force. La Terre aussi exerce une force sur vous : le poids. Les forces sont partout !`,
            content: `
### 1. Définition
Une force est caractérisée par :

- Point d'application
- Direction
- Sens
- Intensité (en Newton N)

### 2. Représentation
On la représente par une flèche (vecteur).

### 3. Exemples
Poids, Tension d'un fil, Force de frottement, Force magnétique.
            `,
            analogy: {
                title: "💪 Les Forces comme des Troupes de Danseurs de Sabar",
                content: `Les forces, c'est comme diriger des troupes de danseurs !

Une **FORCE** = une action qui peut :
- Mettre en mouvement (pousser une pirogue)
- Ralentir ou arrêter (freiner un vélo)
- Déformer (écraser une mangue)

La force a **4 caractéristiques** comme une flèche :
1. **POINT D'APPLICATION** : Où tu pousses
2. **DIRECTION** : Dans quel sens (horizontale, verticale)
3. **SENS** : Vers où (gauche ou droite)
4. **INTENSITÉ** : Avec quelle force (en Newton N)

Le **POIDS** est une force spéciale :
- Direction : verticale
- Sens : vers le bas
- Formule : **P = m × g**

Un sac de riz de 50 kg pèse : P = 50 × 10 = **500 N** !`
            },
            summary: [
                "Unité : le Newton (N).",
                "Instrument de mesure : Dynamomètre.",
                "Poids = Force de gravitation."
            ],
            defis: [
                {
                    id: 'ex-force-1',
                    question: "Quelle est l'unité de la force ?",
                    options: ["Le kilogramme", "Le Newton", "Le Joule", "Le Watt"],
                    correctAnswer: 1,
                    explanation: "L'unité internationale de force est le Newton (N).",
                    points: 10
                },
                {
                    id: 'ex-force-2',
                    question: "Un objet de masse 5 kg a un poids de (g = 10 N/kg) :",
                    options: ["5 N", "15 N", "50 N", "500 N"],
                    correctAnswer: 2,
                    explanation: "P = m × g = 5 × 10 = 50 Newton.",
                    points: 15
                }
            ]
        },
        {
            id: 'phys-3e-04',
            part: 'Partie 1 : Physique',
            title: '4. Travail et Puissance',
            image: '/simulations/pc3e/work-power-3e.png',
            simulation: {
                id: 'work-power-3e',
                title: "Titan de Puissance : Le Défi Hercule",
                type: 'chap4-travail-3e'
            },
            story: `Soulever un sac à dos, c'est fournir un travail. Plus le sac est lourd et plus vous montez haut, plus le travail est grand. La puissance, c'est la vitesse à laquelle vous fournissez ce travail.`,
            content: `
### 1. Travail d'une force
$W = F \\times d \\times \\cos(\\alpha)$
Si la force est dans le sens du déplacement : $W = F \\times d$ (en Joules J).

### 2. Puissance
$P = \\frac{W}{t}$ (en Watts W)
C'est le travail fourni par unité de temps.
            `,
            analogy: {
                title: "🏋️ Le Travail comme Porter des Sacs au Marché",
                content: `Le travail et la puissance, c'est comme porter des sacs de riz au marché !

Imagine : tu dois porter un sac de 50 kg (poids = 500 N) sur 10 mètres.

Le **TRAVAIL** c'est l'effort total :
**W = Force × Distance**
W = 500 N × 10 m = **5000 Joules (J)**

Comparons deux porteurs :
- Mamadou le fait en 10 secondes
- Ibrahima le fait en 50 secondes

Qui est le plus **PUISSANT** ?

La **PUISSANCE** c'est le travail par seconde :
**P = Travail / Temps**

Mamadou : P = 5000 J / 10 s = **500 Watts (W)**
Ibrahima : P = 5000 J / 50 s = **100 Watts (W)**

Mamadou est 5 fois plus puissant ! 💪`
            },
            summary: [
                "Travail en Joules (J).",
                "Puissance en Watts (W).",
                "1 W = 1 J/s."
            ],
            defis: [
                {
                    id: 'ex-trav-1',
                    question: "Si une force de 10 N déplace un objet de 5 m, quel est le travail ?",
                    options: ["2 J", "15 J", "50 J", "500 J"],
                    correctAnswer: 2,
                    explanation: "W = F × d = 10 × 5 = 50 Joules.",
                    points: 15
                },
                {
                    id: 'ex-trav-2',
                    question: "Si ce travail de 50 J est fait en 10 secondes, la puissance est :",
                    options: ["5 W", "50 W", "500 W", "5 J"],
                    correctAnswer: 0,
                    explanation: "P = W/t = 50/10 = 5 Watts.",
                    points: 20
                }
            ]
        },
        {
            id: 'phys-3e-05',
            part: 'Partie 1 : Physique',
            title: '5. Électrisation par frottement',
            image: '/simulations/pc3e/electrostatics-3e.png',
            simulation: {
                id: 'electrostatics-3e',
                title: "Maître de l'Orage : Électricité Statique",
                type: 'chap5-electrisation-3e'
            },
            story: `Frottez un ballon sur vos cheveux et collez-le au mur : il tient ! C'est l'électricité statique. Les objets se chargent électriquement par frottement.`,
            content: `
### 1. Les charges électriques
Il existe deux types de charges : **positive (+)** et **négative (-)**.

### 2. Loi de l'électrisation
- Charges de même signe : se repoussent.
- Charges de signes contraires : s'attirent.

### 3. Courant électrique
C'est un déplacement de charges électriques (électrons).
            `,
            analogy: {
                title: "⚡ L'Électricité Statique comme un Jeu d'Aimant Invisible",
                content: `L'électricité statique, c'est comme de la magie invisible !

Tu as déjà frotté un ballon sur tes cheveux et il colle au mur ?
C'est l'**électrisation par frottement** !

Il existe **DEUX types de charges** :
➕ Charge **POSITIVE** (comme les protons)
➖ Charge **NÉGATIVE** (comme les électrons)

Les règles du jeu :
🔄 Charges de **MÊME SIGNE** → se **REPOUSSENT**
❤️ Charges de **SIGNES OPPOSÉS** → s'**ATTIRENT**

Quand tu frottes une règle en plastique avec un tissu :
- Le plastique arrache des électrons au tissu
- La règle devient NÉGATIVE (trop d'électrons)
- Le tissu devient POSITIF (manque d'électrons)

⚠️ L'électricité statique peut créer des étincelles !
C'est dangereux près de l'essence ou du gaz.`
            },
            summary: [
                "Électron = Charge négative.",
                "Proton = Charge positive.",
                "Atome neutre : autant de + que de -."
            ],
            defis: [
                {
                    id: 'ex-elec-1',
                    question: "Deux objets chargés positivement vont :",
                    options: ["S'attirer", "Se repousser", "Rester immobiles", "Exploser"],
                    correctAnswer: 1,
                    explanation: "Charges de même signe se repoussent.",
                    points: 10
                },
                {
                    id: 'ex-elec-2',
                    question: "Lors du frottement, qu'est-ce qui est transféré ?",
                    options: ["Des protons", "Des électrons", "Des neutrons", "Des atomes"],
                    correctAnswer: 1,
                    explanation: "Ce sont les électrons qui sont transférés par frottement.",
                    points: 15
                }
            ]
        },
        {
            id: 'phys-3e-06',
            part: 'Partie 1 : Physique',
            title: '6. Résistance électrique',
            image: '/simulations/pc3e/resistance-ohm-3e.png',
            simulation: {
                id: 'resistance-ohm-3e',
                title: "Contrôle du Flux : La Résistance Ohm",
                type: 'chap6-ohm-3e'
            },
            story: `Un fil électrique, c'est comme un tuyau d'eau. Plus le tuyau est fin, plus l'eau a du mal à passer. La résistance, c'est la finesse du fil électrique qui freine le courant.`,
            content: `
### 1. Définition
La résistance s'oppose au passage du courant. Unité : l'Ohm ($\\Omega$).

### 2. Loi d'Ohm
$U = R \\times I$

- U : Tension (Volt V)
- R : Résistance (Ohm $\\Omega$)
- I : Intensité (Ampère A)

### 3. Résistances en série et parallèle
Série : $R_{total} = R_1 + R_2$
Parallèle : $\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2}$
            `,
            analogy: {
                title: "💧 La Résistance comme un Tuyau d'Arrosage",
                content: `La loi d'Ohm, c'est comme l'eau dans un tuyau d'arrosage !

Imagine un tuyau qui transporte l'eau du robinet au jardin :

La **TENSION (U)** en Volt = la pression de l'eau au robinet
Plus la pression est forte, plus l'eau pousse pour sortir.

L'**INTENSITÉ (I)** en Ampère = le débit de l'eau
C'est combien d'eau passe vraiment dans le tuyau.

La **RÉSISTANCE (R)** en Ohm (Ω) = la finesse du tuyau
Un tuyau fin laisse passer moins d'eau qu'un gros tuyau.

🔥 La **LOI D'OHM** dit :
**U = R × I** ou **I = U / R**

Plus la résistance est grande, moins le courant passe !Comme pincer le tuyau : moins d'eau sort.

📊 En **SÉRIE** : R_totale = R₁ + R₂
📊 En **PARALLÈLE** : 1/R_totale = 1/R₁ + 1/R₂`
            },
            summary: [
                "Plus R est grand, plus le courant est faible.",
                "Loi d'Ohm : $U = RI$.",
                "Instrument : Ohmmètre."
            ],
            defis: [
                {
                    id: 'ex-res-1',
                    question: "Si U = 12V et R = 4Ω, que vaut I ?",
                    options: ["3 A", "8 A", "16 A", "48 A"],
                    correctAnswer: 0,
                    explanation: "I = U/R = 12/4 = 3 Ampères.",
                    points: 15
                },
                {
                    id: 'ex-res-2',
                    question: "Deux résistances de 10Ω en série donnent :",
                    options: ["5 Ω", "10 Ω", "20 Ω", "100 Ω"],
                    correctAnswer: 2,
                    explanation: "En série : R_total = R₁ + R₂ = 10 + 10 = 20 Ω.",
                    points: 20
                }
            ]
        },
        {
            id: 'phys-3e-07',
            part: 'Partie 1 : Physique',
            title: '7. Transformation d\'énergies',
            image: '/simulations/pc3e/energy-transformations-3e.png',
            simulation: {
                id: 'energy-transformations-3e',
                title: "Convertisseur Universel : Flux d'Énergie",
                type: 'chap7-transformations-3e'
            },
            story: `L'énergie ne se crée pas, ne se détruit pas, elle se transforme. Une pile transforme l'énergie chimique en énergie électrique. Une lampe transforme l'énergie électrique en lumière et chaleur.`,
            content: `
### 1. Formes d'énergie
- Mécanique (mouvement)
- Électrique
- Thermique (chaleur)
- Lumineuse
- Chimique
- Nucléaire

### 2. Conservation de l'énergie
L'énergie totale reste constante, mais change de forme.

### 3. Rendement
$\\eta = \\frac{\\text{Énergie utile}}{\\text{Énergie totale}}$
            `,
            analogy: {
                title: "💰 L'Énergie comme de l'Argent qui Change de Forme",
                content: `L'énergie, c'est comme l'argent : elle peut changer de forme mais jamais disparaître !

Imagine tes différentes "monnaies d'énergie" :
⚡ Énergie ÉLECTRIQUE (la pile, la prise)
🔥 Énergie THERMIQUE (chaleur)
💡 Énergie LUMINEUSE (lumière)
🔊 Énergie SONORE (son)
🏃 Énergie MÉCANIQUE (mouvement)
🧪 Énergie CHIMIQUE (essence, nourriture)

Que fait une **AMPOULE** ?
Elle convertit : Électrique → Lumineuse + Thermique
(Oui, elle chauffe aussi ! C'est du "gaspillage")

🔑 **RÈGLE D'OR** (Conservation de l'énergie) :
"Rien ne se perd, rien ne se crée, tout se transforme"

📊 Le **RENDEMENT** mesure l'efficacité :
η = (Énergie utile / Énergie totale) × 100%

Une ampoule LED a un rendement de 40% (bien mieux que 5% pour une incandescente !)`
            },
            summary: [
                "Unité d'énergie : le Joule (J).",
                "Aucune transformation n'est parfaite (pertes en chaleur).",
                "Rendement toujours inférieur à 100%."
            ],
            defis: [
                {
                    id: 'ex-ener-1',
                    question: "Quelle transformation se produit dans une lampe ?",
                    options: ["Chimique → Mécanique", "Électrique → Lumineuse", "Thermique → Électrique", "Nucléaire → Chimique"],
                    correctAnswer: 1,
                    explanation: "La lampe transforme l'énergie électrique en lumière (et chaleur).",
                    points: 10
                },
                {
                    id: 'ex-ener-2',
                    question: "Un appareil reçoit 200 J et fournit 160 J utiles. Son rendement est :",
                    options: ["60%", "80%", "125%", "40 J"],
                    correctAnswer: 1,
                    explanation: "η = 160/200 = 0,8 = 80%.",
                    points: 20
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : CHIMIE
        // ==========================================

        {
            id: 'chim-3e-08',
            part: 'Partie 2 : Chimie',
            title: '8. Solutions aqueuses',
            image: '/simulations/pc3e/aqueous-solutions-3e.png',
            simulation: {
                id: 'aqueous-solutions-3e',
                title: "Maître des Potions : Solutions Aqueuses",
                type: 'chap8-solutions-3e'
            },
            story: `Une solution, c'est un mélange homogène. Le sel dans l'eau, le sucre dans le café... L'eau est le solvant universel. Elle dissout presque tout !`,
            content: `
### 1. Vocabulaire
- **Solvant** : Liquide qui dissout (souvent l'eau).
- **Soluté** : Substance dissoute (sel, sucre...).
- **Solution** : Mélange homogène des deux.

### 2. Concentration
$C = \\frac{m}{V}$ (en g/L)

### 3. Saturation
Quand on ne peut plus dissoudre de soluté, la solution est saturée.
            `,
            analogy: {
                title: "🍵 Les Solutions comme le Thé à la Menthe",
                content: `Les solutions aqueuses, c'est comme préparer l'ataya (thé sénégalais) !

Quand tu prépares le thé :
- L'**EAU** chaude = le **SOLVANT** (ce qui dissout)
- Le **SUCRE** et le **THÉ** = les **SOLUTÉS** (ce qui est dissous)
- Le mélange final = la **SOLUTION**

Combien de sucre ? C'est la **CONCENTRATION** !
**C = masse de soluté / volume de solution**
C = m / V (en grammes par litre, g/L)

Exemple : 50 g de sucre dans 500 mL d'eau
C = 50 / 0,5 = **100 g/L**

Et si tu mets **TROP** de sucre ?
Il reste au fond ! La solution est **SATURÉE**.

🌡️ La température aide :
- Eau chaude → peut dissoudre PLUS de sucre
- Eau froide → saturation plus rapide`
            },
            summary: [
                "Solution aqueuse = Eau comme solvant.",
                "Dilution : ajouter de l'eau diminue la concentration.",
                "Test d'identification : sulfate de cuivre anhydre (blanc → bleu avec l'eau)."
            ],
            defis: [
                {
                    id: 'ex-sol-1',
                    question: "Dans l'eau salée, quel est le solvant ?",
                    options: ["Le sel", "L'eau", "Les deux", "Aucun"],
                    correctAnswer: 1,
                    explanation: "L'eau est le solvant, le sel est le soluté.",
                    points: 10
                },
                {
                    id: 'ex-sol-2',
                    question: "20 g de sucre dans 500 mL d'eau. La concentration est :",
                    options: ["25 g/L", "40 g/L", "10 g/L", "100 g/L"],
                    correctAnswer: 1,
                    explanation: "C = m/V = 20/0,5 = 40 g/L.",
                    points: 20
                }
            ]
        },
        {
            id: 'chim-3e-09',
            part: 'Partie 2 : Chimie',
            title: '9. Acides et Bases',
            image: '/simulations/pc3e/acids-bases-ph-3e.png',
            simulation: {
                id: 'acids-bases-ph-3e',
                title: "Mission pH : Le Code Couleur Acide",
                type: 'ph-scale-3e'
            },
            story: `Le citron est acide, le savon est basique. Comment les reconnaître ? Avec le pH ! C'est une échelle de 0 à 14 qui mesure l'acidité.`,
            content: `
### 1. Le pH
- pH < 7 : Acide (citron, vinaigre)
- pH = 7 : Neutre (eau pure)
- pH > 7 : Basique (savon, javel)

### 2. Indicateurs colorés
Le papier pH change de couleur selon l'acidité.

### 3. Réaction Acide-Base
Acide + Base → Sel + Eau (Neutralisation)
            `,
            analogy: {
                title: "🧪 Le pH comme une Échelle de Saveur",
                content: `Le pH, c'est comme mesurer le "goût" chimique d'une solution !

Imagine une échelle de 0 à 14 :

🍋 **ACIDE** (pH < 7) = Goût aigre, piquant
   0-1-2-3-4-5-6
   Exemples : citron (pH 2), vinaigre (pH 3), estomac (pH 2) !

💧 **NEUTRE** (pH = 7) = Pas de goût particulier
   Exemple : eau pure

🧼 **BASIQUE** (pH > 7) = Goût amer, savonneux
   8-9-10-11-12-13-14
   Exemples : savon (pH 10), javel (pH 12)

Comment mesurer le pH ?
📏 **PAPIER pH** : Il change de couleur !
   Rouge = Acide → Vert = Neutre → Bleu = Basique

La réaction **ACIDE + BASE = NEUTRALISATION**
Acide + Base → Sel + Eau
Le pH se rapproche de 7 !`
            },
            summary: [
                "pH-mètre ou papier pH pour mesurer.",
                "Acide fort : pH proche de 0.",
                "Base forte : pH proche de 14."
            ],
            defis: [
                {
                    id: 'ex-acid-1',
                    question: "Une solution de pH = 3 est :",
                    options: ["Neutre", "Acide", "Basique", "Salée"],
                    correctAnswer: 1,
                    explanation: "pH < 7 signifie que c'est acide.",
                    points: 10
                },
                {
                    id: 'ex-acid-2',
                    question: "Acide + Base donne :",
                    options: ["Acide + Gaz", "Sel + Eau", "Base + Oxygène", "Métal + CO₂"],
                    correctAnswer: 1,
                    explanation: "La réaction de neutralisation : Acide + Base → Sel + Eau.",
                    points: 15
                }
            ]
        },
        {
            id: 'chim-3e-10',
            part: 'Partie 2 : Chimie',
            title: '10. Propriétés chimiques des métaux',
            image: '/simulations/pc3e/metals-properties-3e.png',
            simulation: {
                id: 'metals-properties-3e',
                title: "Métal Hurlant : Réactions Explosives",
                type: 'chap10-metaux-3e'
            },
            story: `Le fer rouille, l'aluminium résiste, l'or brille éternellement. Chaque métal a sa personnalité chimique. Certains réagissent violemment avec l'eau ou l'air, d'autres sont inertes.`,
            content: `
### 1. Réaction avec l'oxygène
Métal + Oxygène → Oxyde (ex: Fer → Rouille)

### 2. Réaction avec l'eau
Certains métaux (Sodium, Potassium) réagissent violemment avec l'eau.

### 3. Réaction avec les acides
Métal + Acide → Sel + Dihydrogène (H₂)

### 4. Métaux précieux
Or, Argent, Platine : très peu réactifs (d'où leur valeur).
            `,
            analogy: {
                title: "⚙️ Les Métaux comme des Personnalités Différentes",
                content: `Les métaux ont des "personnalités" très différentes !

Certains sont très **RÉACTIFS** (nerveux) :
🔥 Le **SODIUM** réagit violemment avec l'eau → explosion !
🔥 Le **POTASSIUM** aussi → flamme violette !
⚠️ Ne JAMAIS mettre ces métaux dans l'eau !

D'autres sont **MOYENNEMENT réactifs** :
🔩 Le **FER** rouille lentement (réaction avec O₂ + eau)
🔩 Le **ZINC** et l'**ALUMINIUM** réagissent avec les acides

Et certains sont très **CALMES** (nobles) :
👑 L'**OR** ne réagit presque jamais - d'où sa valeur !
👑 L'**ARGENT**, le **PLATINE** restent brillants

Réaction **MÉTAL + ACIDE** :
Fe + 2 HCl → FeCl₂ + H₂↑

Le gaz H₂ forme des bulles ! 💨
⚠️ L'hydrogène est inflammable - attention aux flammes !`
            },
            summary: [
                "Oxydation = Réaction avec l'oxygène.",
                "Corrosion = Dégradation du métal.",
                "Protection : peinture, galvanisation."
            ],
            defis: [
                {
                    id: 'ex-met-1',
                    question: "Quel gaz se dégage quand un métal réagit avec un acide ?",
                    options: ["Oxygène", "Dihydrogène", "Dioxyde de carbone", "Azote"],
                    correctAnswer: 1,
                    explanation: "La réaction produit du dihydrogène (H₂), un gaz inflammable.",
                    points: 15
                },
                {
                    id: 'ex-met-2',
                    question: "Quel métal ne rouille pratiquement pas ?",
                    options: ["Fer", "Zinc", "Or", "Sodium"],
                    correctAnswer: 2,
                    explanation: "L'or est un métal noble qui ne réagit presque pas.",
                    points: 15
                }
            ]
        },
        {
            id: 'chim-3e-11',
            part: 'Partie 2 : Chimie',
            title: '11. Hydrocarbures',
            image: '/simulations/pc3e/hydrocarbons-3e.png',
            simulation: {
                id: 'hydrocarbons-3e',
                title: "Combustion Fossile : L'Énergie du Feu",
                type: 'chap11-combustion-3e'
            },
            story: `Le pétrole, l'essence, le gaz naturel... ce sont tous des hydrocarbures. Des molécules faites uniquement de Carbone (C) et d'Hydrogène (H). Ils brûlent très bien et fournissent beaucoup d'énergie.`,
            content: `
### 1. Définition
Molécules composées uniquement de C et H.

### 2. Familles
- **Alcanes** : Liaisons simples (Méthane CH₄, Éthane C₂H₆)
- **Alcènes** : Au moins une liaison double

### 3. Combustion
Hydrocarbure + Oxygène → CO₂ + H₂O + Énergie

### 4. Danger
Combustion incomplète → CO (monoxyde de carbone, mortel)
            `,
            analogy: {
                title: "🛢️ Les Hydrocarbures comme la Cuisine du Feu",
                content: `Les hydrocarbures, c'est l'essence de la vie moderne !

Le **PÉTROLE** est un mélange d'hydrocarbures fossiles.
"Hydro" = Hydrogène (H)
"Carbone" = Carbone (C)
→ Les hydrocarbures = molécules avec uniquement C et H

Les **ALCANES** sont la famille la plus simple :
- CH₄ = Méthane (gaz de cuisine)
- C₃H₈ = Propane (bouteille de gaz)
- C₄H₁₀ = Butane (briquet)
- C₈H₁₈ ≈ Essence (voiture)

La **COMBUSTION** = brûler un carburant

**Combustion COMPLÈTE** (beaucoup d'oxygène) :
Hydrocarbure + O₂ → CO₂ + H₂O + Énergie
✅ Flamme bleue
✅ Produits : dioxyde de carbone + eau

**Combustion INCOMPLÈTE** (manque d'oxygène) :
⚠️ Flamme jaune/orange
⚠️ Production de **CO** (monoxyde de carbone)
💀 **CO = Gaz MORTEL**, inodore et incolore !
   → "Tueur silencieux" - Toujours bien aérer !`
            },
            summary: [
                "Pétrole = Mélange d'hydrocarbures.",
                "Distillation fractionnée pour séparer.",
                "Combustion complète nécessite beaucoup d'oxygène."
            ],
            defis: [
                {
                    id: 'ex-hydro-1',
                    question: "Quels éléments composent les hydrocarbures ?",
                    options: ["C et O", "H et O", "C et H", "C, H et O"],
                    correctAnswer: 2,
                    explanation: "Hydro (H) + Carbone (C) = Hydrocarbures.",
                    points: 10
                },
                {
                    id: 'ex-hydro-2',
                    question: "Quel gaz dangereux se forme lors d'une combustion incomplète ?",
                    options: ["CO₂", "O₂", "CO", "H₂"],
                    correctAnswer: 2,
                    explanation: "Le monoxyde de carbone (CO) est un gaz mortel produit par combustion incomplète.",
                    points: 20
                }
            ]
        }
    ]
};
