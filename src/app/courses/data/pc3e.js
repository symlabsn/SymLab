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
            summary: [
                "Lentille convergente = Image réelle (projetable).",
                "Lentille divergente = Image virtuelle.",
                "Plus f est petit, plus la lentille est puissante."
            ],
            exercises: [
                {
                    id: 'ex-lent-1',
                    question: "Quel type de lentille est utilisé dans une loupe ?",
                    options: ["Divergente", "Convergente", "Plane", "Cylindrique"],
                    correctAnswer: 1,
                    explanation: "La loupe grossit grâce à une lentille convergente."
                }
            ]
        },
        {
            id: 'phys-3e-02',
            part: 'Partie 1 : Physique',
            title: '2. Dispersion de la lumière',
            story: `Pourquoi voit-on un arc-en-ciel après la pluie ? Parce que les gouttes d'eau décomposent la lumière blanche en toutes ses couleurs. C'est la dispersion !`,
            content: `
### 1. Lumière blanche
La lumière du Soleil est un mélange de toutes les couleurs (spectre visible).

### 2. Le Prisme
Un prisme de verre sépare les couleurs car chaque couleur est déviée différemment (réfraction).

### 3. Les 7 couleurs
Rouge, Orange, Jaune, Vert, Bleu, Indigo, Violet (ROYGBIV).
            `,
            summary: [
                "Lumière blanche = Polychromatique.",
                "Lumière d'une seule couleur = Monochromatique.",
                "L'arc-en-ciel est un phénomène de dispersion naturel."
            ],
            exercises: [
                {
                    id: 'ex-disp-1',
                    question: "Combien de couleurs principales contient la lumière blanche ?",
                    options: ["3", "5", "7", "12"],
                    correctAnswer: 2,
                    explanation: "Le spectre visible contient 7 couleurs principales."
                }
            ]
        },
        {
            id: 'phys-3e-03',
            part: 'Partie 1 : Physique',
            title: '3. Forces',
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
            summary: [
                "Unité : le Newton (N).",
                "Instrument de mesure : Dynamomètre.",
                "Poids = Force de gravitation."
            ],
            exercises: [
                {
                    id: 'ex-force-1',
                    question: "Quelle est l'unité de la force ?",
                    options: ["Le kilogramme", "Le Newton", "Le Joule", "Le Watt"],
                    correctAnswer: 1,
                    explanation: "L'unité internationale de force est le Newton (N)."
                }
            ]
        },
        {
            id: 'phys-3e-04',
            part: 'Partie 1 : Physique',
            title: '4. Travail et Puissance',
            story: `Soulever un sac à dos, c'est fournir un travail. Plus le sac est lourd et plus vous montez haut, plus le travail est grand. La puissance, c'est la vitesse à laquelle vous fournissez ce travail.`,
            content: `
### 1. Travail d'une force
$W = F \\times d \\times \\cos(\\alpha)$
Si la force est dans le sens du déplacement : $W = F \\times d$ (en Joules J).

### 2. Puissance
$P = \\frac{W}{t}$ (en Watts W)
C'est le travail fourni par unité de temps.
            `,
            summary: [
                "Travail en Joules (J).",
                "Puissance en Watts (W).",
                "1 W = 1 J/s."
            ],
            exercises: [
                {
                    id: 'ex-trav-1',
                    question: "Si une force de 10 N déplace un objet de 5 m, quel est le travail ?",
                    options: ["2 J", "15 J", "50 J", "500 J"],
                    correctAnswer: 2,
                    explanation: "$W = F \\times d = 10 \\times 5 = 50$ Joules."
                }
            ]
        },
        {
            id: 'phys-3e-05',
            part: 'Partie 1 : Physique',
            title: '5. Électrisation par frottement',
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
            summary: [
                "Électron = Charge négative.",
                "Proton = Charge positive.",
                "Atome neutre : autant de + que de -."
            ],
            exercises: [
                {
                    id: 'ex-elec-1',
                    question: "Deux objets chargés positivement vont :",
                    options: ["S'attirer", "Se repousser", "Rester immobiles", "Exploser"],
                    correctAnswer: 1,
                    explanation: "Charges de même signe se repoussent."
                }
            ]
        },
        {
            id: 'phys-3e-06',
            part: 'Partie 1 : Physique',
            title: '6. Résistance électrique',
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
            summary: [
                "Plus R est grand, plus le courant est faible.",
                "Loi d'Ohm : $U = RI$.",
                "Instrument : Ohmmètre."
            ],
            exercises: [
                {
                    id: 'ex-res-1',
                    question: "Si U = 12V et R = 4Ω, que vaut I ?",
                    options: ["3 A", "8 A", "16 A", "48 A"],
                    correctAnswer: 0,
                    explanation: "$I = \\frac{U}{R} = \\frac{12}{4} = 3$ Ampères."
                }
            ]
        },
        {
            id: 'phys-3e-07',
            part: 'Partie 1 : Physique',
            title: '7. Transformation d\'énergies',
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
            summary: [
                "Unité d'énergie : le Joule (J).",
                "Aucune transformation n'est parfaite (pertes en chaleur).",
                "Rendement toujours inférieur à 100%."
            ],
            exercises: [
                {
                    id: 'ex-ener-1',
                    question: "Quelle transformation se produit dans une lampe ?",
                    options: ["Chimique → Mécanique", "Électrique → Lumineuse", "Thermique → Électrique", "Nucléaire → Chimique"],
                    correctAnswer: 1,
                    explanation: "La lampe transforme l'énergie électrique en lumière (et chaleur)."
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
            summary: [
                "Solution aqueuse = Eau comme solvant.",
                "Dilution : ajouter de l'eau diminue la concentration.",
                "Test d'identification : sulfate de cuivre anhydre (blanc → bleu avec l'eau)."
            ],
            exercises: [
                {
                    id: 'ex-sol-1',
                    question: "Dans l'eau salée, quel est le solvant ?",
                    options: ["Le sel", "L'eau", "Les deux", "Aucun"],
                    correctAnswer: 1,
                    explanation: "L'eau est le solvant, le sel est le soluté."
                }
            ]
        },
        {
            id: 'chim-3e-09',
            part: 'Partie 2 : Chimie',
            title: '9. Acides et Bases',
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
            summary: [
                "pH-mètre ou papier pH pour mesurer.",
                "Acide fort : pH proche de 0.",
                "Base forte : pH proche de 14."
            ],
            exercises: [
                {
                    id: 'ex-acid-1',
                    question: "Une solution de pH = 3 est :",
                    options: ["Neutre", "Acide", "Basique", "Salée"],
                    correctAnswer: 1,
                    explanation: "pH < 7 signifie que c'est acide."
                }
            ]
        },
        {
            id: 'chim-3e-10',
            part: 'Partie 2 : Chimie',
            title: '10. Propriétés chimiques des métaux',
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
            summary: [
                "Oxydation = Réaction avec l'oxygène.",
                "Corrosion = Dégradation du métal.",
                "Protection : peinture, galvanisation."
            ],
            exercises: [
                {
                    id: 'ex-met-1',
                    question: "Quel gaz se dégage quand un métal réagit avec un acide ?",
                    options: ["Oxygène", "Dihydrogène", "Dioxyde de carbone", "Azote"],
                    correctAnswer: 1,
                    explanation: "La réaction produit du dihydrogène (H₂), un gaz inflammable."
                }
            ]
        },
        {
            id: 'chim-3e-11',
            part: 'Partie 2 : Chimie',
            title: '11. Hydrocarbures',
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
            summary: [
                "Pétrole = Mélange d'hydrocarbures.",
                "Distillation fractionnée pour séparer.",
                "Combustion complète nécessite beaucoup d'oxygène."
            ],
            exercises: [
                {
                    id: 'ex-hydro-1',
                    question: "Quels éléments composent les hydrocarbures ?",
                    options: ["C et O", "H et O", "C et H", "C, H et O"],
                    correctAnswer: 2,
                    explanation: "Hydro (H) + Carbone (C) = Hydrocarbures."
                }
            ]
        }
    ]
};
