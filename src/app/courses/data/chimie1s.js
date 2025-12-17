export const chimie1sData = {
    id: 'chimie-1s',
    title: 'Chimie 1ère S',
    author: 'SymLab Team (Conforme Programme Sénégal)',
    description: 'Programme complet de Chimie 1ère S : Chimie Organique et Électrochimie.',
    chapters: [
        // ==========================================
        // PARTIE 1 : CHIMIE ORGANIQUE
        // ==========================================
        {
            id: 'c1s-01',
            part: 'Chimie Organique',
            title: 'C1. Généralités sur la chimie organique',
            simulation: { id: 'c1s-orga', title: '🧪 Galerie Moléculaire' },
            image: '/images/courses/c1s_chimie_organique.png',
            story: "La chimie du carbone est celle de la vie. Du plastique à l'ADN, le carbone est l'architecte des molécules complexes.",
            content: `
### 1. L'élément Carbone
Le carbone ($Z=6$) est tétravalent : il forme toujours 4 liaisons covalentes. Il peut former des chaînes linéaires, ramifiées ou cycliques.

### 2. Analyse Élémentaire
Elle permet de déterminer la formule brute $C_x H_y O_z$ d'un composé.
On brûle un échantillon et on dose le $CO_2$ et l'$H_2O$ produits.
$$ \\%C = \\frac{12x}{M} \\times 100 $$

### 3. Isomérie
Des isomères ont la même formule brute mais des formules développées différentes (donc des propriétés différentes).
            `,
            summary: [
                "Compose organique = Contient du Carbone (sauf CO, CO2, carbonates).",
                "Isomérie de chaîne : Squelette différent.",
                "Isomérie de position : Groupe fonctionnel placé différemment."
            ],
            exercises: [
                {
                    id: 'exo-c1s-01',
                    question: "Combien de liaisons forme toujours un atome de carbone ?",
                    options: ["2", "3", "4", "6"],
                    correctAnswer: 2,
                    explanation: "Le carbone est tétravalent, il a 4 électrons de valence à partager."
                }
            ]
        },
        {
            id: 'c1s-02',
            part: 'Chimie Organique',
            title: 'C2. Les Alcanes',
            simulation: { id: 'c1s-orga', title: '🧪 Galerie Moléculaire' },
            image: '/images/courses/c1s_alcanes.png',
            story: "Les hydrocarbures les plus simples. Le gaz naturel et l'essence en sont constitués.",
            content: `
### 1. Formule Générale
Les alcanes sont des hydrocarbures saturés (liaisons simples uniquement) de formule :
$$ C_n H_{2n+2} $$

### 2. Nomenclature (IUPAC)
- Chaîne principale la plus longue contenant les substituants.
- Numérotation pour avoir les indices les plus petits.
- Suffixe : **-ane**.

### 3. Propriétés Chimiques
**Combustion :** $C_n H_{2n+2} + \\frac{3n+1}{2} O_2 \\rightarrow n CO_2 + (n+1) H_2O$.
**Halogénation (Substitution) :** Réaction avec $Cl_2$ ou $Br_2$ à la lumière (photochimique).
            `,
            summary: [
                "Méthane ($CH_4$), Éthane ($C_2H_6$), Propane ($C_3H_8$).",
                "Les alcanes sont peu réactifs (d'où leur ancien nom 'paraffines')."
            ],
            exercises: [
                {
                    id: 'exo-c1s-02',
                    question: "Quelle est la formule brute du butane ?",
                    options: ["$C_3H_8$", "$C_4H_{10}$", "$C_5H_{12}$", "$C_4H_8$"],
                    correctAnswer: 1,
                    explanation: "Butane signifie n=4. Formule $C_4 H_{2(4)+2} = C_4 H_{10}$."
                }
            ]
        },
        {
            id: 'c1s-03',
            part: 'Chimie Organique',
            title: 'C3. Alcènes et Alcynes',
            simulation: { id: 'c1s-orga', title: '🧪 Galerie Moléculaire' },
            image: '/images/courses/c1s_alcenes_alcynes.png',
            story: "L'insaturation change tout. La double ou triple liaison est un site de réactivité intense.",
            content: `
### 1. Les Alcènes ($C=C$)
Hydrocarbures insaturés avec une double liaison. Formule : $C_n H_{2n}$.
**Réactions d'addition :** La double liaison s'ouvre pour fixer des atomes ($H_2$, $Cl_2$, $H_2O$ (hydratation)).
**Polymérisation :** Formation de plastiques (Polyéthylène, PVC) par addition successive.

### 2. Les Alcynes ($C \\equiv C$)
Hydrocarbures avec une triple liaison. Formule : $C_n H_{2n-2}$.
L'acétylène ($C_2H_2$) est utilisé pour la soudure (flamme très chaude).
            `,
            summary: [
                "Test de reconnaissance des insaturés : Décolorent l'eau de brome (orange -> incolore).",
                "Règle de Markovnikov pour l'addition asymétrique."
            ],
            exercises: [
                {
                    id: 'exo-c1s-03',
                    question: "L'hydratation de l'éthène ($C_2H_4$) produit...",
                    options: ["Du méthane", "De l'éthanol", "De l'éthane", "Du CO2"],
                    correctAnswer: 1,
                    explanation: "$C_2H_4 + H_2O \\rightarrow C_2H_5OH$ (Éthanol)."
                }
            ]
        },
        {
            id: 'c1s-04',
            part: 'Chimie Organique',
            title: 'C4. Le Benzène',
            simulation: { id: 'c1s-orga', title: '🧪 Galerie Moléculaire' },
            image: '/images/courses/c1s_benzene.png',
            story: "Un cycle parfait, une stabilité exceptionnelle. Le benzène inaugure la famille des aromatiques.",
            content: `
### 1. Structure du Benzène ($C_6H_6$)
Cycle hexagonal plan avec liaisons délocalisées (cercle au centre du cycle). Très stable grâce à la mésomérie.

### 2. Réactivité
Contrairement aux alcènes, le benzène préfère la **substitution** à l'addition.
- Halogénation (avec catalyseur $FeBr_3$).
- Nitration (avec acide nitrique et sulfurique).
- Sulfonation.
            `,
            summary: [
                "Benzène = Composé Aromatique.",
                "Toxique et cancérogène.",
                "Ne décolore pas l'eau de brome (preuve de stabilité)."
            ],
            exercises: [
                {
                    id: 'exo-c1s-04',
                    question: "La nitration du benzène donne...",
                    options: ["Le nitrobenzène", "Le chlorobenzène", "Le cyclohexane", "L'aniline"],
                    correctAnswer: 0,
                    explanation: "Substitution d'un H par un groupe nitro ($NO_2$). Donne le mononitrobenzène."
                }
            ]
        },
        {
            id: 'c1s-05',
            part: 'Chimie Organique',
            title: 'C5. Les composés oxygénés',
            simulation: { id: 'c1s-orga', title: '🧪 Galerie Moléculaire' },
            image: '/images/courses/c1s_composes_oxygenes.png',
            story: "Ajoutons un atome d'oxygène. L'alcool, le parfum des fruits, l'odeur du formol... tout change.",
            content: `
### 1. Les Alcools ($R-OH$)
Groupe hydroxyle. Classe : Primaire, Secondaire, Tertiaire selon le carbone porteur.
Oxydation ménagée :
- Alcool I $\\rightarrow$ Aldéhyde $\\rightarrow$ Acide Carboxylique.
- Alcool II $\\rightarrow$ Cétone.
- Alcool III $\\rightarrow$ Pas d'oxydation ménagée.

### 2. Composés Carbonylés
Aldéhydes ($R-CHO$) et Cétones ($R-CO-R'$).
Tests : DNPH (précipité jaune pour les deux), Liqueur de Fehling (rouge brique pour Aldéhydes seulement).
            `,
            summary: [
                "Aldéhyde : Groupe carbonyle en bout de chaîne.",
                "Cétone : Groupe carbonyle dans la chaîne.",
                "Réactif de Schiff rosit avec les aldéhydes."
            ],
            exercises: [
                {
                    id: 'exo-c1s-05',
                    question: "Quel réactif permet de distinguer un aldéhyde d'une cétone ?",
                    options: ["La DNPH", "L'eau bromée", "La liqueur de Fehling", "Le tournesol"],
                    correctAnswer: 2,
                    explanation: "La liqueur de Fehling ne réagit qu'avec le caractère réducteur des aldéhydes (précipité rouge $Cu_2O$)."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ÉLECTROCHIMIE
        // ==========================================
        {
            id: 'c1s-06',
            part: 'Électrochimie',
            title: 'C6. Notion de couple Oxydant-Réducteur',
            simulation: { id: 'c1s-redox', title: '⚗️ Expérience Redox' },
            image: '/images/courses/c1s_couple_redox.png',
            story: "L'oxydoréduction est un échange d'électrons, comme l'acide-base est un échange de protons.",
            content: `
### 1. Définitions
- **Oxydant (Ox) :** Capteur d'électrons.
- **Réducteur (Red) :** Donneur d'électrons.
- Demi-équation : $Ox + ne^- \\rightleftharpoons Red$.

### 2. Réaction d'Oxydoréduction
Transfert d'électrons entre l'oxydant d'un couple 1 et le réducteur d'un couple 2.
$$ Ox_1 + Red_2 \\rightarrow Red_1 + Ox_2 $$
            `,
            summary: [
                "Oxydation = Perte d'électrons.",
                "Réduction = Gain d'électrons.",
                "Moyen mnémotechnique : 'Oxydan**ant** prend **tant**'."
            ],
            exercises: [
                {
                    id: 'exo-c1s-06',
                    question: "Dans la réaction $Cu^{2+} + Zn \\rightarrow Cu + Zn^{2+}$, quel est l'oxydant ?",
                    options: ["$Cu$", "$Zn$", "$Cu^{2+}$", "$Zn^{2+}$"],
                    correctAnswer: 2,
                    explanation: "$Cu^{2+}$ gagne 2 électrons pour devenir $Cu$, c'est donc l'oxydant."
                }
            ]
        },
        {
            id: 'c1s-07',
            part: 'Électrochimie',
            title: 'C7-C8. Classification des couples Ion/Métal',
            simulation: { id: 'c1s-redox', title: '⚗️ Expérience Redox' },
            image: '/images/courses/c1s_classification_potentiels.png',
            story: "Qui est le plus fort ? Le fer rouille, l'or résiste. Il existe une hiérarchie dans la force des oxydants.",
            content: `
### 1. Classification Qualitative
Règle du gamma ($\\\gamma$) : L'oxydant le plus fort réagit avec le réducteur le plus fort.
Si $E^0(Ox_1/Red_1) > E^0(Ox_2/Red_2)$, alors réaction spontanée : $Ox_1 + Red_2$.

### 2. Classification Quantitative
On définit le Potentiel Standard d'oxydoréduction $E^0$ par rapport à l'électrode standard à hydrogène ($E^0(H^+/H_2) = 0.00 V$).
            `,
            summary: [
                "L'échelle des potentiels standard ($E^0$) classe les couples.",
                "Au sommet : Oxydants forts (ex: $Au^{3+}$).",
                "En bas : Réducteurs forts (ex: $Li$, $Na$)."
            ],
            exercises: [
                {
                    id: 'exo-c1s-07',
                    question: "Le potentiel du couple $Cu^{2+}/Cu$ est +0.34V et $Zn^{2+}/Zn$ est -0.76V. La réaction spontanée est...",
                    options: ["Cu attaque Zn2+", "Cu2+ attaque Zn", "Zn2+ attaque Cu", "Rien ne se passe"],
                    correctAnswer: 1,
                    explanation: "L'oxydant le plus fort ($Cu^{2+}$, potentiel le plus élevé) réagit avec le réducteur le plus fort ($Zn$)."
                }
            ]
        },
        {
            id: 'c1s-09',
            part: 'Électrochimie',
            title: "C9. Généralisation en solution aqueuse",
            simulation: { id: 'c1s-redox', title: '⚗️ Expérience Redox' },
            image: '/images/courses/c1s_dosage_redox.png',
            story: "Cela ne concerne pas que les métaux. Les ions permanganate, dichromate, ferreux... tout le monde joue.",
            content: `
### 1. Couples complexes
Équilibrer des demi-équations en milieu acide ou basique.
Exemple : $MnO_4^- / Mn^{2+}$ en milieu acide.
$$ MnO_4^- + 8H^+ + 5e^- \\rightleftharpoons Mn^{2+} + 4H_2O $$

### 2. Dosages d'oxydoréduction
Utiliser une réaction d'oxydoréduction rapide et totale pour titrer une espèce (ex: Manganimétrie, Iodométrie).
À l'équivalence : $\\frac{n(Ox_1)}{a} = \\frac{n(Red_2)}{b}$.
            `,
            summary: [
                "Toujours équilibrer les atomes (H avec H+, O avec H2O) puis les charges (e-)."
            ],
            exercises: [
                {
                    id: 'exo-c1s-09',
                    question: "Quelle est la couleur de l'ion permanganate $MnO_4^-$ ?",
                    options: ["Incolore", "Vert", "Violet", "Orange"],
                    correctAnswer: 2,
                    explanation: "L'ion permanganate est violet intense. Sa disparition (décoloration) sert souvent d'indicateur de fin de réaction."
                }
            ]
        },
        {
            id: 'c1s-10',
            part: 'Électrochimie',
            title: 'C10. Électrolyse',
            simulation: { id: 'c1s-redox', title: '⚡ Électrolyse' },
            image: '/images/courses/c1s_electrolyse.png',
            story: "Forcer la nature. Avec de l'énergie électrique, on peut inverser le sens spontané des réactions chimiques.",
            content: `
### 1. Principe
L'électrolyse est une transformation forcée par un générateur.
- Anode (+) : Oxydation (A.O. - Anode Oxydation).
- Cathode (-) : Réduction (C.R. - Cathode Réduction).

### 2. Bilan Quantitatif (Loi de Faraday)
Quantité d'électricité $Q = I \\times t$.
Nombre de moles d'électrons : $n(e^-) = \\frac{Q}{F}$ avec $F \\approx 96500 C/mol$.
            `,
            summary: [
                "Dans une pile : Anode (-) et Cathode (+).",
                "Dans une électrolyse : Anode (+) et Cathode (-) (Le générateur impose les signes)."
            ],
            exercises: [
                {
                    id: 'exo-c1s-10',
                    question: "À quelle électrode a lieu le dépôt de métal lors d'une électrolyse ?",
                    options: ["Anode", "Cathode", "Les deux", "Aucune"],
                    correctAnswer: 1,
                    explanation: "Le métal $M^{n+}$ capture des électrons pour devenir $M(s)$. C'est une réduction, donc à la cathode."
                }
            ]
        },
        {
            id: 'c1s-11',
            part: 'Électrochimie',
            title: 'C11. Oxydoréduction par voie sèche',
            story: "La métallurgie. Extraire le fer de son minerai dans un haut fourneau, c'est de la chimie sèche (sans eau).",
            image: '/images/courses/c1s_voie_seche.png',
            content: `
### 1. Réduction des oxydes métalliques
On utilise des réducteurs puissants à haute température (Carbone CO, Aluminium Al, Hydrogène H2).
Exemple : Aluminothermie.
$$ Fe_2O_3 + 2Al \\rightarrow 2Fe + Al_2O_3 $$

### 2. Combustion
C'est une oxydation brutale par le dioxygène de l'air.
            `,
            summary: [
                "Voie sèche = Pas de solvant eau.",
                "Applications industrielles majeures (Sidérurgie)."
            ],
            exercises: [
                {
                    id: 'exo-c1s-11',
                    question: "Quel gaz est souvent utilisé comme réducteur industriel ?",
                    options: ["Le dioxygène $O_2$", "Le monoxyde de carbone $CO$", "Le dioxyde de carbone $CO_2$", "L'azote $N_2$"],
                    correctAnswer: 1,
                    explanation: "Le CO capte l'oxygène des minerais pour devenir CO2, libérant le métal."
                }
            ]
        },
        {
            id: 'c1s-12',
            part: 'Thèmes',
            title: 'C12. Thèmes et Exposés',
            story: "La chimie au quotidien et dans l'industrie sénégalaise.",
            content: `
### 1. Les Phosphates et Engrais
Ressource clé du Sénégal (Taïba). Transformation du phosphate tricalcique en acide phosphorique puis en engrais (DAP, NPK) pour l'agriculture.

### 2. Les Matières Plastiques
Synthèse, usage et impact environnemental (pollution, recyclage). Distinction Thermoplastiques / Thermodurcissables.
            `,
            summary: [
                "L'industrie chimique valorise les ressources naturellles.",
                "Importance de la gestion des déchets plastiques."
            ],
            exercises: [
                {
                    id: 'exo-c1s-12',
                    question: "Que signifie NPK sur un sac d'engrais ?",
                    options: ["Nature Produit Kilo", "Azote Phosphore Potassium", "Nouveau Produit Kalorimétrique", "Nitrate Phosphate Karbonate"],
                    correctAnswer: 1,
                    explanation: "Ce sont les symboles chimiques des 3 éléments majeurs : Nitrogen (N), Phosphorus (P), Potassium (K)."
                }
            ]
        }
    ]
};
