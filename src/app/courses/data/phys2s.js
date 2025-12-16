export const phys2sData = {
    id: 'phys-2s',
    title: 'Physique Seconde S',
    chapters: [
        // ==========================================
        // PREMIÈRE PARTIE : ÉLECTRICITÉ ET ÉLECTRONIQUE
        // ==========================================

        {
            id: 'elec-2s-01',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P1. Phénomènes d\'Électrisation',
            story: "En 600 av. J.-C., Thalès de Milet découvre qu'en frottant de l'ambre (elektron en grec), celle-ci attire de petits objets. Cette observation simple est à l'origine du mot 'électricité'. Aujourd'hui, nous comprenons que tout est question de charges électriques microscopiques.",
            content: `
### I. Les Trois Modes d'Électrisation

#### 1. Électrisation par Frottement
Lorsqu'on frotte deux corps initialement neutres, il y a **transfert d'électrons** de l'un vers l'autre.
- Le corps qui **perd des électrons** devient **chargé positivement** (+)
- Le corps qui **gagne des électrons** devient **chargé négativement** (-)

> **📖 Exemple** : En frottant une règle en plastique avec un chiffon de laine, la règle arrache des électrons à la laine. La règle devient négative (-), la laine devient positive (+).

#### 2. Électrisation par Contact
Un corps chargé mis en contact avec un corps neutre lui transmet une partie de sa charge.
**Principe** : Les charges se répartissent entre les deux corps.

#### 3. Électrisation par Influence
Un corps chargé approché (sans contact) d'un conducteur neutre provoque une **redistribution des charges** dans ce conducteur.
- Les charges de signe opposé sont attirées
- Les charges de même signe sont repoussées

### II. Nature de la Charge Électrique
La charge électrique est une propriété fondamentale de la matière, portée par les particules élémentaires :
- **Électron** : charge $q_e = -e = -1,6 \\times 10^{-19}$ C (négative)
- **Proton** : charge $q_p = +e = +1,6 \\times 10^{-19}$ C (positive)
- **Neutron** : charge nulle

**Unité SI** : Le Coulomb (C)
**Quantification** : Toute charge est un multiple entier de la charge élémentaire $e$

### III. Loi de Coulomb
Deux charges ponctuelles $q_1$ et $q_2$ séparées par une distance $r$ exercent l'une sur l'autre une force électrostatique :
$$F = k \\frac{|q_1 q_2|}{r^2}$$
Où $k = 9 \\times 10^9$ N·m²/C² (constante de Coulomb)

- **Charges de même signe** : Force répulsive
- **Charges de signes opposés** : Force attractive

> **🧲 Analogie : Les Aimants**
>
> Comme les pôles magnétiques, les charges électriques de même signe se repoussent, et celles de signes opposés s'attirent. Mais contrairement aux aimants, on peut isoler une charge positive ou négative.
            `,
            summary: [
                "**Électrisation par frottement** : Transfert d'électrons entre deux corps",
                "**Électrisation par contact** : Partage de charges entre corps",
                "**Électrisation par influence** : Redistribution sans contact",
                "**Charge élémentaire** : $e = 1,6 \\times 10^{-19}$ C",
                "**Loi de Coulomb** : $F = k\\frac{|q_1 q_2|}{r^2}$",
                "Charges de même signe se repoussent, de signes opposés s'attirent"
            ],
            exercises: [
                {
                    id: 'ex-elec1-1',
                    question: "Lorsqu'on frotte une règle en plastique avec de la laine, la règle devient négative. Cela signifie que :",
                    options: [
                        "La règle a gagné des protons",
                        "La règle a gagné des électrons",
                        "La règle a perdu des électrons",
                        "La laine a gagné des électrons"
                    ],
                    correctAnswer: 1,
                    explanation: "Un corps devient négatif quand il gagne des électrons (particules de charge négative). Les protons sont fixes dans le noyau."
                },
                {
                    id: 'ex-elec1-2',
                    question: "Deux charges de même signe :",
                    options: [
                        "S'attirent",
                        "Se repoussent",
                        "N'interagissent pas",
                        "Se neutralisent"
                    ],
                    correctAnswer: 1,
                    explanation: "D'après la loi de Coulomb, deux charges de même signe (++ ou --) se repoussent."
                }
            ],
            simulation: 'chap5-electrisation-3e'
        },

        {
            id: 'elec-2s-02',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P2. Généralités sur le Courant Électrique',
            story: "En 1800, Alessandro Volta invente la première pile électrique, permettant pour la première fois de produire un courant électrique continu. Cette invention révolutionne la science et ouvre la voie à l'ère de l'électricité.",
            content: `
### I. Nature du Courant Électrique
Le **courant électrique** est un déplacement ordonné de porteurs de charges électriques.

#### Dans les Métaux (Conducteurs Solides)
- **Porteurs de charges** : Électrons libres (charge négative)
- **Sens réel** : De la borne (-) vers la borne (+)

#### Dans les Solutions Ioniques (Électrolytes)
- **Porteurs de charges** : Ions positifs (cations) et ions négatifs (anions)
- **Mouvement** : Cations vers la cathode (-), anions vers l'anode (+)

### II. Sens Conventionnel du Courant
> **⚠️ Convention** : Par convention, le sens du courant électrique est le sens de déplacement des charges **positives**.

Dans un circuit, le courant va de la borne **(+)** vers la borne **(-)** à l'extérieur du générateur.

**Remarque** : Ce sens est opposé au sens réel de déplacement des électrons dans les métaux, mais c'est la convention universellement adoptée.

### III. Conducteurs et Isolants

#### Conducteurs Électriques
Matériaux qui laissent passer le courant électrique (présence de charges mobiles).
- **Métaux** : Cuivre, aluminium, fer, or, argent
- **Solutions ioniques** : Eau salée, acides, bases
- **Graphite** (carbone)

#### Isolants (Diélectriques)
Matériaux qui ne laissent pas passer le courant (pas de charges mobiles).
- **Plastiques** : PVC, polyéthylène
- **Verre, céramique**
- **Caoutchouc, bois sec**
- **Air sec**

### IV. Circuit Électrique Simple
Un circuit électrique est constitué de :
1. **Générateur** : Fournit l'énergie (pile, batterie, alternateur)
2. **Récepteurs** : Utilisent l'énergie (lampe, moteur, résistance)
3. **Fils de connexion** : Conducteurs reliant les éléments
4. **Interrupteur** : Permet d'ouvrir ou fermer le circuit

**Circuit fermé** : Le courant circule (interrupteur fermé)
**Circuit ouvert** : Pas de courant (interrupteur ouvert ou coupure)

> **💧 Analogie : Circuit Hydraulique**
>
> Le courant électrique est comme l'eau dans un tuyau. Le générateur est la pompe, les fils sont les tuyaux, les récepteurs sont les turbines. L'eau (charges) circule en boucle fermée.
            `,
            summary: [
                "**Courant électrique** : Déplacement ordonné de charges",
                "**Dans les métaux** : Porteurs = électrons libres",
                "**Sens conventionnel** : De (+) vers (-) à l'extérieur du générateur",
                "**Conducteurs** : Laissent passer le courant (métaux, solutions ioniques)",
                "**Isolants** : Ne laissent pas passer le courant (plastique, verre)",
                "**Circuit fermé** : Nécessaire pour la circulation du courant"
            ],
            exercises: [
                {
                    id: 'ex-elec2-1',
                    question: "Dans un fil de cuivre, les porteurs de charges sont :",
                    options: [
                        "Les protons",
                        "Les électrons libres",
                        "Les ions positifs",
                        "Les neutrons"
                    ],
                    correctAnswer: 1,
                    explanation: "Dans les métaux comme le cuivre, ce sont les électrons libres qui se déplacent et constituent le courant électrique."
                },
                {
                    id: 'ex-elec2-2',
                    question: "Le sens conventionnel du courant est :",
                    options: [
                        "De (-) vers (+)",
                        "De (+) vers (-)",
                        "Dans les deux sens",
                        "Il n'y a pas de sens"
                    ],
                    correctAnswer: 1,
                    explanation: "Par convention, le courant va de la borne positive (+) vers la borne négative (-) à l'extérieur du générateur."
                }
            ],
            simulation: 'intro-electricity'
        },

        {
            id: 'elec-2s-03',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P3. Intensité du Courant Électrique',
            story: "André-Marie Ampère (1775-1836) établit les lois fondamentales de l'électrodynamique. L'unité d'intensité du courant porte son nom en hommage à ses travaux révolutionnaires sur les interactions entre courants électriques.",
            content: `
### I. Définition de l'Intensité
L'**intensité du courant électrique** est la quantité de charge électrique qui traverse une section du conducteur par unité de temps.

**Expression mathématique** :
$$I = \\frac{Q}{t}$$

Où :
- $I$ : Intensité du courant (en Ampère, A)
- $Q$ : Charge électrique (en Coulomb, C)
- $t$ : Durée (en seconde, s)

**Unité SI** : L'Ampère (A)
$1 A = 1 C/s$ (1 Coulomb par seconde)

### II. Mesure de l'Intensité

#### Appareil de Mesure : L'Ampèremètre
- **Symbole** : (A) dans un cercle
- **Branchement** : En **série** avec le dipôle
- **Borne COM** : Côté borne (-) du générateur
- **Borne A** : Côté borne (+) du générateur

> **⚠️ Règle Fondamentale** : L'ampèremètre se branche toujours en SÉRIE (le courant doit le traverser).

#### Calibres et Précision
Un ampèremètre possède plusieurs calibres (200 mA, 2 A, 10 A, etc.)
- Choisir un calibre **supérieur** à l'intensité attendue
- Affiner ensuite avec un calibre plus petit pour plus de précision

### III. Loi des Nœuds (1ère Loi de Kirchhoff)
Un **nœud** est un point du circuit où se rejoignent au moins trois fils.

> **Énoncé** : La somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en repartent.

**Expression mathématique** :
$$\\sum I_{arrivant} = \\sum I_{repartant}$$

**Conséquence** : La charge électrique se conserve (elle ne s'accumule pas au nœud).

> **📖 Exemple** : Si $I_1 = 2A$ et $I_2 = 3A$ arrivent à un nœud, et que $I_3$ en repart, alors :
> $I_1 + I_2 = I_3$
> $I_3 = 2 + 3 = 5A$

### IV. Intensité dans un Circuit en Série
Dans un circuit en série, l'intensité est la **même** en tout point du circuit.
$$I_1 = I_2 = I_3 = ... = I$$

### V. Ordres de Grandeur
- **LED** : 10-20 mA
- **Lampe de poche** : 0,5-1 A
- **Fer à repasser** : 5-10 A
- **Éclair** : 10 000 - 200 000 A

> **💧 Analogie : Débit d'Eau**
>
> L'intensité est comme le débit d'eau dans un tuyau. Plus le débit est grand, plus il passe d'eau par seconde. L'ampèremètre est comme un compteur d'eau qui mesure le débit.
            `,
            summary: [
                "**Intensité** : $I = \\frac{Q}{t}$ (quantité de charge par unité de temps)",
                "**Unité SI** : Ampère (A), avec $1A = 1C/s$",
                "**Mesure** : Ampèremètre branché en SÉRIE",
                "**Loi des nœuds** : $\\sum I_{arrivant} = \\sum I_{repartant}$",
                "**Circuit série** : Intensité identique partout",
                "Conservation de la charge électrique"
            ],
            exercises: [
                {
                    id: 'ex-elec3-1',
                    question: "Une charge de 10 C traverse une section d'un conducteur en 2 s. L'intensité du courant est :",
                    options: ["5 A", "10 A", "20 A", "0,2 A"],
                    correctAnswer: 0,
                    explanation: "$I = \\frac{Q}{t} = \\frac{10}{2} = 5A$"
                },
                {
                    id: 'ex-elec3-2',
                    question: "Pour mesurer l'intensité du courant dans un circuit, l'ampèremètre doit être branché :",
                    options: [
                        "En série",
                        "En parallèle",
                        "N'importe comment",
                        "Aux bornes du générateur"
                    ],
                    correctAnswer: 0,
                    explanation: "L'ampèremètre se branche toujours en SÉRIE pour que le courant le traverse et soit mesuré."
                },
                {
                    id: 'ex-elec3-3',
                    question: "À un nœud arrivent deux courants de 3A et 5A. Un seul courant repart. Son intensité est :",
                    options: ["2 A", "8 A", "15 A", "3 A"],
                    correctAnswer: 1,
                    explanation: "D'après la loi des nœuds : $I_{repartant} = 3 + 5 = 8A$"
                }
            ],
            simulation: 'chap5-electricite'
        },

        {
            id: 'elec-2s-04',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P4. Tension Électrique',
            story: "Alessandro Volta donne son nom à l'unité de tension électrique. La tension, ou différence de potentiel, est la 'pression électrique' qui pousse les charges à circuler dans un circuit, tout comme la différence de pression pousse l'eau dans un tuyau.",
            content: `
### I. Définition de la Tension
La **tension électrique** (ou différence de potentiel) entre deux points A et B d'un circuit est la différence d'énergie potentielle électrique par unité de charge entre ces deux points.

**Notation** : $U_{AB}$ ou $U$ (tension entre A et B)
**Unité SI** : Le Volt (V)

### II. Mesure de la Tension

#### Appareil de Mesure : Le Voltmètre
- **Symbole** : (V) dans un cercle
- **Branchement** : En **parallèle** (dérivation) aux bornes du dipôle
- **Borne COM** : Côté borne (-) ou potentiel le plus bas
- **Borne V** : Côté borne (+) ou potentiel le plus haut

> **⚠️ Règle Fondamentale** : Le voltmètre se branche toujours en PARALLÈLE (aux bornes du dipôle).

### III. Loi des Mailles (2ème Loi de Kirchhoff)
Une **maille** est un chemin fermé dans un circuit électrique.

> **Énoncé** : La somme algébrique des tensions le long d'une maille est nulle.

**Expression mathématique** :
$$\\sum U = 0$$

**Convention de signe** :
- Tension **positive** si on va dans le sens de la flèche de tension
- Tension **négative** si on va à contre-sens de la flèche

> **📖 Exemple** : Dans une maille avec un générateur ($U_G$) et deux résistances ($U_1$ et $U_2$) :
> $U_G - U_1 - U_2 = 0$
> Donc : $U_G = U_1 + U_2$

### IV. Tension dans un Circuit en Série
Dans un circuit en série, la tension du générateur se répartit entre les dipôles :
$$U_{générateur} = U_1 + U_2 + U_3 + ...$$

### V. Tension dans un Circuit en Parallèle
Dans un circuit en parallèle (dérivation), la tension est la **même** aux bornes de tous les dipôles :
$$U_1 = U_2 = U_3 = ... = U_{générateur}$$

### VI. Ordres de Grandeur
- **Pile AA** : 1,5 V
- **Batterie de voiture** : 12 V
- **Prise domestique (Sénégal)** : 220 V
- **Ligne haute tension** : 400 000 V
- **Éclair** : 100 millions de V

> **💧 Analogie : Pression d'Eau**
>
> La tension est comme la différence de pression dans un tuyau. Plus la différence de pression est grande, plus l'eau circule vite. Le voltmètre est comme un manomètre qui mesure la pression.
            `,
            summary: [
                "**Tension** : Différence de potentiel électrique entre deux points",
                "**Unité SI** : Volt (V)",
                "**Mesure** : Voltmètre branché en PARALLÈLE",
                "**Loi des mailles** : $\\sum U = 0$ dans une maille fermée",
                "**Circuit série** : $U_{total} = U_1 + U_2 + ...$",
                "**Circuit parallèle** : $U_1 = U_2 = ... = U_{générateur}$"
            ],
            exercises: [
                {
                    id: 'ex-elec4-1',
                    question: "Pour mesurer la tension aux bornes d'une lampe, le voltmètre doit être branché :",
                    options: [
                        "En série avec la lampe",
                        "En parallèle avec la lampe",
                        "Avant la lampe",
                        "Après la lampe"
                    ],
                    correctAnswer: 1,
                    explanation: "Le voltmètre se branche toujours en PARALLÈLE (aux bornes) du dipôle dont on veut mesurer la tension."
                },
                {
                    id: 'ex-elec4-2',
                    question: "Dans un circuit série alimenté par une pile de 9V, si $U_1 = 5V$, alors $U_2$ vaut :",
                    options: ["4 V", "5 V", "9 V", "14 V"],
                    correctAnswer: 0,
                    explanation: "D'après la loi des mailles : $U_{pile} = U_1 + U_2$, donc $U_2 = 9 - 5 = 4V$"
                },
                {
                    id: 'ex-elec4-3',
                    question: "Dans un circuit en dérivation (parallèle), si la tension aux bornes de la première branche est 6V, la tension aux bornes de la deuxième branche est :",
                    options: ["3 V", "6 V", "12 V", "Cela dépend"],
                    correctAnswer: 1,
                    explanation: "En dérivation, la tension est la même aux bornes de toutes les branches : 6V."
                }
            ],
            simulation: 'chap5-electricite'
        },

        {
            id: 'elec-2s-05',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P5. Dipôles Passifs',
            story: "Georg Simon Ohm découvre en 1827 la relation fondamentale entre tension et intensité dans un conducteur. Cette loi, d'une simplicité remarquable, est la pierre angulaire de l'électricité et porte son nom : la loi d'Ohm.",
            content: `
### I. Définition d'un Dipôle Passif
Un **dipôle passif** est un composant électrique qui ne peut que consommer de l'énergie électrique (il ne peut pas en fournir).

**Exemples** : Résistance, lampe, moteur (en fonctionnement normal)

### II. La Résistance Électrique

#### 1. Définition
La **résistance électrique** est la propriété d'un conducteur à s'opposer au passage du courant électrique.

**Symbole** : Rectangle ou zigzag
**Unité SI** : L'Ohm (Ω)

#### 2. Loi d'Ohm
> **Énoncé** : Pour un conducteur ohmique, la tension à ses bornes est proportionnelle à l'intensité qui le traverse.

**Expression mathématique** :
$$U = R \\times I$$

Où :
- $U$ : Tension aux bornes (en Volt, V)
- $R$ : Résistance (en Ohm, Ω)
- $I$ : Intensité du courant (en Ampère, A)

**Formes dérivées** :
$$R = \\frac{U}{I} \\quad \\text{et} \\quad I = \\frac{U}{R}$$

#### 3. Caractéristique d'un Conducteur Ohmique
La caractéristique $U = f(I)$ d'un conducteur ohmique est une **droite passant par l'origine**.
La pente de cette droite est égale à la résistance $R$.

### III. Association de Résistances

#### 1. Association en Série
Résistances branchées les unes à la suite des autres.
**Résistance équivalente** :
$$R_{eq} = R_1 + R_2 + R_3 + ...$$

**Propriétés** :
- Même intensité dans toutes les résistances
- $R_{eq}$ est plus grande que chaque résistance

#### 2. Association en Parallèle (Dérivation)
Résistances branchées entre les mêmes points.
**Résistance équivalente** :
$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ...$$

**Cas particulier** (2 résistances) :
$$R_{eq} = \\frac{R_1 \\times R_2}{R_1 + R_2}$$

**Propriétés** :
- Même tension aux bornes de toutes les résistances
- $R_{eq}$ est plus petite que la plus petite résistance

### IV. Conductance
La **conductance** $G$ est l'inverse de la résistance :
$$G = \\frac{1}{R}$$
**Unité SI** : Le Siemens (S)

### V. Puissance Dissipée par Effet Joule
Une résistance traversée par un courant s'échauffe : c'est l'**effet Joule**.
**Puissance dissipée** :
$$P = U \\times I = R \\times I^2 = \\frac{U^2}{R}$$
**Unité** : Watt (W)

**Énergie dissipée** :
$$E = P \\times t$$
**Unité** : Joule (J) ou kWh

> **📖 Exemple** : Une résistance de 10Ω est parcourue par un courant de 2A.
> - Tension : $U = R \\times I = 10 \\times 2 = 20V$
> - Puissance : $P = R \\times I^2 = 10 \\times 4 = 40W$

> **🚰 Analogie : Robinet**
>
> La résistance est comme un robinet partiellement fermé. Plus il est fermé (grande résistance), moins l'eau (courant) passe. La pression (tension) doit être plus grande pour faire passer le même débit.
            `,
            summary: [
                "**Loi d'Ohm** : $U = R \\times I$ (pour un conducteur ohmique)",
                "**Unité de résistance** : Ohm (Ω)",
                "**Série** : $R_{eq} = R_1 + R_2 + ...$",
                "**Parallèle** : $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$",
                "**Puissance dissipée** : $P = U \\times I = RI^2 = \\frac{U^2}{R}$",
                "**Effet Joule** : Échauffement d'une résistance"
            ],
            exercises: [
                {
                    id: 'ex-elec5-1',
                    question: "Une résistance de 100Ω est soumise à une tension de 20V. L'intensité du courant est :",
                    options: ["0,2 A", "2 A", "5 A", "2000 A"],
                    correctAnswer: 0,
                    explanation: "$I = \\frac{U}{R} = \\frac{20}{100} = 0,2A$"
                },
                {
                    id: 'ex-elec5-2',
                    question: "Deux résistances de 10Ω et 20Ω sont en série. La résistance équivalente est :",
                    options: ["6,67 Ω", "15 Ω", "30 Ω", "200 Ω"],
                    correctAnswer: 2,
                    explanation: "En série : $R_{eq} = 10 + 20 = 30Ω$"
                },
                {
                    id: 'ex-elec5-3',
                    question: "Une résistance de 5Ω parcourue par 4A dissipe une puissance de :",
                    options: ["20 W", "40 W", "80 W", "160 W"],
                    correctAnswer: 2,
                    explanation: "$P = R \\times I^2 = 5 \\times 16 = 80W$"
                }
            ],
            simulation: 'chap6-loi-ohm'
        },

        {
            id: 'elec-2s-06',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P6. Dipôles Actifs',
            story: "Contrairement aux résistances qui consomment bêtement de l'énergie, les dipôles actifs sont les 'moteurs' du circuit. Piles, batteries, panneaux solaires : ils convertissent une autre forme d'énergie (chimique, lumineuse...) en énergie électrique.",
            content: `
### I. Définition
Un **dipôle actif** est un générateur capable de fournir de l'énergie électrique au circuit de manière permanente.
**Convention générateur** : Le courant $I$ et la tension $U$ sont fléchés dans le **même sens**.

### II. Caractéristiques d'un Générateur Linéaire
Un générateur réel est modélisé par l'association en série d'une source de tension idéale (Force Électromotrice $E$) et d'une résistance interne $r$.

#### 1. Loi d'Ohm pour un Générateur
> **Énoncé** : La tension aux bornes d'un générateur est égale à sa force électromotrice moins la chute de tension due à sa résistance interne.

**Expression mathématique** :
$$U_{PN} = E - r \\times I$$

Où :
- $U_{PN}$ : Tension aux bornes (V)
- $E$ : Force Électromotrice (f.é.m) en Volts. C'est la tension à vide (quand $I=0$).
- $r$ : Résistance interne en Ohms (Ω).
- $I$ : Intensité du courant débité (A).

#### 2. Courant de Court-Circuit
Si on relie directement les bornes P et N ($U=0$), le courant est maximal :
$$I_{cc} = \\frac{E}{r}$$
**⚠️ Danger** : Ce courant fort peut détruire le générateur par échauffement.

### III. Bilan Énergétique
En multipliant la loi d'Ohm par $I$, on obtient le bilan de puissance :
$$U \\times I = E \\times I - r \\times I^2$$

- $E \\times I$ : Puissance totale engendrée (transformée en électrique).
- $U \\times I$ : Puissance utile (disponible pour le circuit extérieur).
- $r \\times I^2$ : Puissance dissipée en chaleur (pertes par effet Joule).

#### Rendement
$$\\eta = \\frac{P_{utile}}{P_{totale}} = \\frac{U \\times I}{E \\times I} = \\frac{U}{E}$$

> **🔋 Analogie : La Pompe à Eau**
>
> Le générateur est comme une pompe. $E$ est la pression maximale qu'elle peut fournir. $r$ représente les frottements internes de l'eau dans la pompe. Quand l'eau coule vide ($I$ grand), la pression de sortie ($U$) baisse un peu à cause de ces frottements.
            `,
            summary: [
                "**Loi d'Ohm générateur** : $U = E - rI$",
                "**f.é.m ($E$)** : Tension à vide (caractéristique intrinsèque)",
                "**Résistance interne ($r$)** : Cause des pertes d'énergie",
                "**Bilan** : $P_{electrique} = P_{utile} + P_{thermique}$",
                "**Court-circuit** : $I_{cc} = E/r$ (Dangereux)"
            ],
            exercises: [
                {
                    id: 'ex-elec6-1',
                    question: "Une pile a une f.é.m E = 4,5 V et une résistance interne r = 1 Ω. Si elle débite 0,5 A, la tension à ses bornes est :",
                    options: ["4,5 V", "4,0 V", "5,0 V", "0,5 V"],
                    correctAnswer: 1,
                    explanation: "$U = E - rI = 4,5 - (1 \\times 0,5) = 4,0 V$."
                },
                {
                    id: 'ex-elec6-2',
                    question: "À quoi correspond la f.é.m (E) d'un générateur ?",
                    options: [
                        "À la tension quand le courant est maximal",
                        "À la tension à vide (quand I=0)",
                        "À la puissance maximale",
                        "À la résistance interne"
                    ],
                    correctAnswer: 1,
                    explanation: "Si $I=0$, alors $U = E - 0 = E$. C'est la tension maximale possible du générateur."
                }
            ],
            simulation: 'chap5-electricite'
        },

        {
            id: 'elec-2s-07',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P7. Amplificateur Opérationnel (AOP)',
            story: "L'AOP est le couteau suisse de l'électronique analogique. C'est une puce à 8 pattes contenant des dizaines de transistors. Il peut additionner, soustraire, intégrer... et surtout amplifier des signaux, d'où son nom.",
            content: `
### I. Présentation de l'AOP
C'est un composant actif à deux entrées et une sortie.
- **Entrée Inverseuse (-)** ($v_-$)
- **Entrée Non-Inverseuse (+)** ($v_+$)
- **Sortie (S)** ($v_s$)
- **Alimentation** : Nécessite une alim symétrique $+V_{CC}$ et $-V_{CC}$ (ex: +15V/-15V).

### II. Caractéristiques de l'AOP Idéal
- **Courants d'entrée nuls** : $i_+ = i_- = 0$ (Impédance d'entrée infinie).
- **Gain infini** en boucle ouverte (l'AOP amplifie énormément la différence entre + et -).

### III. Régimes de Fonctionnement

#### 1. Régime Saturé (Comparateur)
Pas de boucle de retour (feedback) de la sortie vers l'entrée -.
- Si $v_+ > v_-$, alors $v_s = +V_{sat}$ (proche de $+V_{CC}$)
- Si $v_+ < v_-$, alors $v_s = -V_{sat}$ (proche de $-V_{CC}$)

#### 2. Régime Linéaire (Amplificateur)
Il y a une boucle de retour (contre-réaction) de la sortie vers l'entrée -.

> **Loi fondamentale en régime linéaire** : La tension entre les entrées est nulle.
> $$\\epsilon = v_+ - v_- = 0 \\Rightarrow v_+ = v_-$$

### IV. Montages Fondamentaux

#### 1. Amplificateur Inverseur
Le signal d'entrée $U_e$ arrive sur l'entrée (-) via $R_1$. L'entrée (+) est à la masse.
**Gain en tension** :
$$A_v = \\frac{U_s}{U_e} = -\\frac{R_2}{R_1}$$
Le signal est amplifié et inversé (signe -).

#### 2. Amplificateur Non-Inverseur
Le signal d'entrée $U_e$ arrive sur l'entrée (+).
**Gain en tension** :
$$A_v = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1}$$
Le signal est amplifié sans inversion.

#### 3. Suiveur de Tension
Cas particulier du non-inverseur où $R_2=0$ et $R_1=\\infty$.
$$U_s = U_e$$
Sert à isoler deux parties d'un circuit (adaptation d'impédance).

> **🔊 Analogie : Le Mégaphone**
>
> L'AOP est comme un mégaphone. Il prend un petit son (signal électrique faible) et utilise l'énergie de sa batterie (alimentation) pour produire un son fort (signal amplifié). En montage inverseur, c'est comme s'il répétait votre phrase à l'envers !
            `,
            summary: [
                "**Régime linéaire** : Contre-réaction sur l'entrée (-) $\\Rightarrow v_+ = v_-$",
                "**Régime saturé** : Pas de contre-réaction $\\Rightarrow v_s = \\pm V_{sat}$",
                "**Amplificateur Inverseur** : $G = -R_2/R_1$",
                "**Amplificateur Non-Inverseur** : $G = 1 + R_2/R_1$",
                "**Suiveur** : $U_s = U_e$ (Isolateur)"
            ],
            exercises: [
                {
                    id: 'ex-elec7-1',
                    question: "Dans un montage amplificateur inverseur avec R1 = 1kΩ et R2 = 10kΩ, quel est le gain ?",
                    options: ["10", "-10", "11", "-0,1"],
                    correctAnswer: 1,
                    explanation: "$G = -R_2/R_1 = -10000/1000 = -10$. Le signal est amplifié 10 fois et inversé."
                },
                {
                    id: 'ex-elec7-2',
                    question: "En régime linéaire, quelle est la relation entre les tensions v+ et v- ?",
                    options: [
                        "v+ > v-",
                        "v+ < v-",
                        "v+ = v-",
                        "v+ = -v-"
                    ],
                    correctAnswer: 2,
                    explanation: "C'est la propriété fondamentale du régime linéaire (assuré par la contre-réaction négative)."
                }
            ],
            simulation: 'rc-circuit'
        },

        // ==========================================
        // DEUXIÈME PARTIE : MÉCANIQUE
        // ==========================================

        {
            id: 'meca-2s-08',
            part: 'Deuxième Partie : Mécanique',
            title: 'P8. Généralités sur le Mouvement',
            story: "Galilée a dit : 'Le mouvement est comme rien'. Si vous êtes dans un train qui roule à vitesse constante avec les rideaux fermés, impossible de savoir si vous bougez. Tout mouvement est relatif par rapport à un observateur.",
            content: `
### I. Relativité du Mouvement
On ne peut parler de mouvement que par rapport à un **référentiel** (solide de référence).
- Le passager est immobile par rapport au train.
- Le passager est en mouvement par rapport au sol.

### II. La Trajectoire
C'est l'ensemble des positions successives occupées par le mobile au cours du temps.
- **Rectiligne** : Une droite.
- **Curviligne** : Une courbe quelconque.
- **Circulaire** : Un cercle ou un arc de cercle.

### III. La Vitesse
#### 1. Vitesse Moyenne
$$V_m = \\frac{d}{t}$$
Où $d$ est la distance parcourue (m) et $t$ la durée (s).

#### 2. Vecteur Vitesse Instantanée
À un instant $t$, le vecteur vitesse $\\vec{v}$ est tangent à la trajectoire au point M.
- **Point d'application** : Le mobile M.
- **Direction** : Tangente à la trajectoire.
- **Sens** : Celui du mouvement.
- **Norme** : Indiquée par le compteur de vitesse.

> **📸 Analogie : La Photo Floue**
>
> La vitesse moyenne est comme dire "J'ai fait Dakar-Thiès en 1h". La vitesse instantanée est celle lue sur le compteur à un moment précis (ex: lors d'un dépassement).
            `,
            summary: [
                "**Mouvement relatif** : Dépend du référentiel choisi.",
                "**Trajectoire** : Ligne décrite par le mobile.",
                "**Vitesse moyenne** : $V_m = d/t$.",
                "**Vecteur vitesse** : Toujours tangent à la trajectoire."
            ],
            exercises: [
                {
                    id: 'ex-meca8-1',
                    question: "Un bus roule à 72 km/h. Quelle est sa vitesse en m/s ?",
                    options: ["72 m/s", "20 m/s", "200 m/s", "36 m/s"],
                    correctAnswer: 1,
                    explanation: "Pour passer de km/h à m/s, on divise par 3,6. $72 / 3,6 = 20 m/s$."
                },
                {
                    id: 'ex-meca8-2',
                    question: "Si la trajectoire est un cercle, le vecteur vitesse est :",
                    options: [
                        "Dirigé vers le centre",
                        "Tangent au cercle",
                        "Constant",
                        "Nul"
                    ],
                    correctAnswer: 1,
                    explanation: "Le vecteur vitesse est toujours tangent à la trajectoire, donc perpendiculaire au rayon."
                }
            ],
            simulation: 'rectilinear-motion'
        },

        {
            id: 'meca-2s-09',
            part: 'Deuxième Partie : Mécanique',
            title: 'P9. Généralités sur les Forces',
            story: "Une force est invisible, mais on voit ses effets. Elle peut mettre en mouvement un ballon, déformer un ressort ou maintenir un pont. Isaac Newton a été le premier à formaliser ce concept comme une interaction.",
            content: `
### I. Définition et Effets
Une **force** modélise une action mécanique exercée par un objet sur un autre.
**Effets possibles** :
1. Mettre en mouvement ou modifier le mouvement (Effet dynamique).
2. Déformer un corps (Effet statique).
3. Maintenir en équilibre.

### II. Caractéristiques Vectorielles
Une force est représentée par un vecteur force $\\vec{F}$ :
- **Point d'application** : Point où s'exerce l'action.
- **Direction (Droite d'action)** : La ligne selon laquelle la force agit.
- **Sens** : Vers où l'action pousse ou tire.
- **Intensité (Norme)** : Grandeur mesurée en Newton (N).

### III. Mesure
On mesure l'intensité d'une force avec un **Dynamomètre** (basé sur l'allongement d'un ressort).

> **🏹 Analogie : L'Archer**
>
> Quand un archer tire sur la corde : la direction est celle de la flèche, le sens est vers l'arrière, le point d'application est ses doigts, et l'intensité dépend de sa force musculaire.
            `,
            summary: [
                "Force = modélisation d'une action mécanique.",
                "Représentée par un vecteur $\\vec{F}$ (4 caractéristiques).",
                "Unité SI : Le Newton (N).",
                "Appareil de mesure : Dynamomètre."
            ],
            exercises: [
                {
                    id: 'ex-meca9-1',
                    question: "L'unité de mesure de l'intensité d'une force est :",
                    options: ["Le Kilogramme (kg)", "Le Joule (J)", "Le Newton (N)", "Le Watt (W)"],
                    correctAnswer: 2,
                    explanation: "En hommage à Isaac Newton. Le kg mesure la masse, pas la force."
                },
                {
                    id: 'ex-meca9-2',
                    question: "Le point d'application du poids d'un objet est :",
                    options: ["Sa surface", "Son centre de gravité", "Le sol", "N'importe où"],
                    correctAnswer: 1,
                    explanation: "Le poids est une force répartie, mais on modélise son action au centre de gravité (G)."
                }
            ],
            simulation: 'forces-inertia'
        },

        {
            id: 'meca-2s-10',
            part: 'Deuxième Partie : Mécanique',
            title: 'P10. Le Poids et la Masse',
            story: "Sur la Lune, les astronautes sautent comme des kangourous. Ont-ils perdu de la masse ? Non, ils ont perdu du poids ! La confusion entre ces deux notions est fréquente, mais en physique, la rigueur est de mise.",
            content: `
### I. Distinction Fondamentale

#### 1. La Masse ($m$)
C'est la quantité de matière contenue dans un corps. Elle mesure aussi son **inertie** (résistance au changement de mouvement).
- **Unité** : Kilogramme (kg).
- **Propriété** : Invariable (la même sur Terre, sur la Lune, ou dans l'espace).
- **Mesure** : Balance.

#### 2. Le Poids ($\\vec{P}$)
C'est la force d'attraction gravitationnelle exercée par la Terre (ou un astre) sur un objet.
- **Unité** : Newton (N).
- **Propriété** : Variable selon le lieu (altitude, latitude, planète).
- **Mesure** : Dynamomètre.

### II. Relation entre Poids et Masse
> Le poids est proportionnel à la masse :
> $$\\vec{P} = m \\times \\vec{g}$$

Où $\\vec{g}$ est le vecteur champ de pesanteur (Intensité de la pesanteur).
- Sur Terre : $g \\approx 9,81 \\, N/kg$.
- Sur la Lune : $g \\approx 1,6 \\, N/kg$ (6 fois moins).

### III. Caractéristiques du Vecteur Poids $\\vec{P}$
- **Point d'application** : Centre de gravité $G$.
- **Direction** : Verticale du lieu (fil à plomb).
- **Sens** : Vers le bas (vers le centre de la Terre).
- **Intensité** : $P = mg$.

> **🏋️ Analogie : L'Haltère Spatiale**
>
> Une haltère de 100kg est très difficile à soulever sur Terre (Poids énorme). Dans l'espace, elle ne pèse rien (Poids nul), mais elle est toujours aussi difficile à mettre en mouvement si on la pousse (Masse/Inertie inchangée). Si elle vous percute, ça fera tout aussi mal !
            `,
            summary: [
                "**Masse ($m$)** : Quantité de matière (kg), Invariable.",
                "**Poids ($P$)** : Force d'attraction (N), Variable.",
                "Relation fondamentale : $P = m \\times g$.",
                "$g$ dépend de l'astre et de l'altitude."
            ],
            exercises: [
                {
                    id: 'ex-meca10-1',
                    question: "Un astronaute de 80 kg va sur la Lune. Quelle est sa masse sur la Lune ?",
                    options: ["13,3 kg", "80 kg", "0 kg", "480 kg"],
                    correctAnswer: 1,
                    explanation: "La masse est invariable ! Elle ne change pas, peu importe où l'on se trouve."
                },
                {
                    id: 'ex-meca10-2',
                    question: "Quel est le poids sur Terre d'un objet de 10 kg ($g=9,8 N/kg$) ?",
                    options: ["10 N", "0,98 N", "98 N", "98 kg"],
                    correctAnswer: 2,
                    explanation: "$P = m \\times g = 10 \\times 9,8 = 98 N$."
                }
            ],
            simulation: 'chap4-poids-masse'
        },

        {
            id: 'meca-2s-11',
            part: 'Deuxième Partie : Mécanique',
            title: 'P11. Équilibre soumis à 3 forces non parallèles',
            story: "Comment tient un hamac ? Ou une enseigne suspendue ? C'est une histoire d'équilibre vectoriel. Trois forces qui tirent dans des directions différentes peuvent s'annuler parfaitement.",
            content: `
### I. Conditions d'Équilibre
Un solide soumis à trois forces $\\vec{F_1}, \\vec{F_2}, \\vec{F_3}$ non parallèles est en équilibre si et seulement si :

#### 1. Condition de Coplanarité
Les lignes d'action des trois forces doivent être situées dans un **même plan**.

#### 2. Condition de Concourance
Les lignes d'action des trois forces doivent être **concourantes** (se couper en un même point I). Sinon, le solide tournerait.

#### 3. Condition Vectorielle
> La somme vectorielle des forces est nulle (Polygone des forces fermé).
> $$\\vec{F_1} + \\vec{F_2} + \\vec{F_3} = \\vec{0}$$

### II. Méthodes de Résolution

#### 1. Méthode Géométrique (Triangle des Forces)
Puisque la somme est nulle, si on met les flèches bout à bout, on forme un triangle fermé. On peut alors utiliser la trigonométrie (sinus, cosinus, Pythagore) ou l'échelle graphique pour trouver les intensités inconnues.

#### 2. Méthode Analytique (Projection)
On choisit un repère $(O, x, y)$ et on projette la relation vectorielle :
- Sur l'axe x : $F_{1x} + F_{2x} + F_{3x} = 0$
- Sur l'axe y : $F_{1y} + F_{2y} + F_{3y} = 0$
On résout ensuite le système d'équations.
            `,
            summary: [
                "Forces coplanaires et concourantes.",
                "Somme vectorielle nulle : $\\sum \\vec{F} = \\vec{0}$.",
                "Le triangle des forces doit être fermé.",
                "Méthode analytique : projection sur les axes Ox et Oy."
            ],
            exercises: [
                {
                    id: 'ex-meca11-1',
                    question: "Si trois forces s'équilibrent, leur triangle des forces est :",
                    options: ["Ouvert", "Plat", "Fermé", "Nul"],
                    correctAnswer: 2,
                    explanation: "La relation $\\vec{F_1} + \\vec{F_2} + \\vec{F_3} = \\vec{0}$ signifie géométriquement que si on dessine les vecteurs bout à bout, on revient au point de départ (triangle fermé)."
                },
                {
                    id: 'ex-meca11-2',
                    question: "Que se passe-t-il si les droites d'action ne sont pas concourantes ?",
                    options: [
                        "Le solide est en translation",
                        "Le solide tourne sur lui-même",
                        "Le solide reste immobile",
                        "Rien de spécial"
                    ],
                    correctAnswer: 1,
                    explanation: "Si elles ne concourent pas au même point, elles créent un couple qui fait tourner le solide."
                }
            ],
            simulation: 'chap3-forces-3e'
        },

        {
            id: 'meca-2s-12',
            part: 'Deuxième Partie : Mécanique',
            title: 'P12. Équilibre mobile autour d\'un axe',
            story: "Archimède a dit : 'Donnez-moi un point d'appui et je soulèverai le monde'. Il parlait de l'effet de levier. Une petite force peut vaincre une grande résistance si elle est appliquée loin de l'axe de rotation.",
            content: `
### I. Effet de Rotation et Moment d'une Force
L'efficacité d'une force pour faire tourner un objet dépend de son intensité mais aussi de sa distance à l'axe.

#### 1. Définition du Moment
Le **moment** d'une force $\\vec{F}$ par rapport à un axe de rotation $\\Delta$ est :
$$\\mathcal{M}_{\\Delta}(\\vec{F}) = \\pm F \\times d$$

Où :
- $F$ : Intensité de la force (N).
- $d$ : **Bras de levier** (Distance orthogonale entre l'axe et la droite d'action de la force) en mètres (m).
- $\\pm$ : Signe dépendant du sens de rotation choisi (positif ou négatif).

**Unité** : Newton-mètre (N·m)

### II. Théorème des Moments
> **Condition d'équilibre** : Un solide mobile autour d'un axe fixe est en équilibre si la somme algébrique des moments de toutes les forces appliquées est nulle.
> $$\\sum \\mathcal{M}_{\\Delta}(\\vec{F}) = 0$$

Autrement dit : Somme des moments "Moteurs" = Somme des moments "Résistants".

### III. Couple de Forces
Un **couple** est un ensemble de deux forces parallèles, de sens contraires et de même intensité, n'ayant pas la même droite d'action.
Elles provoquent une rotation pure (comme tourner un volant ou un bouchon).
**Moment du couple** : $\\mathcal{M} = F \\times D$ (où D est la distance entre les deux forces).

> **🚪 Analogie : La Porte**
>
> Essayez de pousser une porte près des gonds (charnières) : c'est très dur (bras de levier $d$ petit). Poussez près de la poignée : c'est facile (bras de levier $d$ grand). Pour le même moment (effet de rotation), il faut moins de force si $d$ est grand.
            `,
            summary: [
                "**Moment** : $\\mathcal{M} = F \\times d$ (unité N·m).",
                "**Bras de levier** : Distance perpendiculaire axe-force.",
                "**Théorème des moments** : $\\sum \\mathcal{M} = 0$ à l'équilibre.",
                "Plus le bras de levier est grand, plus l'effet de rotation est fort."
            ],
            exercises: [
                {
                    id: 'ex-meca12-1',
                    question: "Pour dévisser un écrou bloqué, il vaut mieux utiliser :",
                    options: [
                        "Une clé très courte",
                        "Une clé très longue",
                        "Ses doigts",
                        "Une clé moyenne"
                    ],
                    correctAnswer: 1,
                    explanation: "Une clé longue augmente le bras de levier $d$. Pour une même force $F$, le moment $M = F \\times d$ sera plus grand, donc le dévissage plus facile."
                },
                {
                    id: 'ex-meca12-2',
                    question: "Si une force passe par l'axe de rotation, son moment est :",
                    options: ["Maximum", "Nul", "Égal à F", "Inifini"],
                    correctAnswer: 1,
                    explanation: "Si la force passe par l'axe, le bras de levier $d = 0$. Donc $\\mathcal{M} = F \\times 0 = 0$. Elle ne peut pas faire tourner l'objet."
                }
            ],
            simulation: 'power-energy'
        },

        // ==========================================
        // TROISIÈME PARTIE : OPTIQUE
        // ==========================================

        {
            id: 'opt-2s-13',
            part: 'Troisième Partie : Optique',
            title: 'P13. Propagation Rectiligne de la Lumière',
            story: "Pourquoi ne peut-on pas voir à travers un mur ? Pourquoi les ombres existent-elles ? Tout cela s'explique par une propriété fondamentale de la lumière : elle voyage en ligne droite tant que rien ne la dérange.",
            content: `
### I. Sources et Milieux de Propagation

#### 1. Sources de Lumière
- **Sources primaires** : Produisent leur propre lumière (Soleil, lampe, feu).
- **Sources secondaires** : Diffusent la lumière reçue (Lune, mur blanc, miroir).

#### 2. Milieux de Propagation
- **Transparent** : Laisse passer la lumière sans la déformer (Verre, Air, Vide). On voit net à travers.
- **Translucide** : Laisse passer la lumière mais la diffuse (Verre dépoli, papier calque). On voit flou.
- **Opaque** : Ne laisse pas passer la lumière (Bois, Mur).

### II. Principe de Propagation Rectiligne
> **Énoncé** : Dans un milieu transparent et homogène, la lumière se propage en ligne droite.

On modélise le trajet de la lumière par un **rayon lumineux** (une droite fléchée).
**Vitesse de la lumière** (célérité) dans le vide : $c \\approx 300~000 \\text{ km/s}$ ($3 \\times 10^8 \\text{ m/s}$).

### III. Ombre et Pénombre
Lorsqu'une source éclaire un objet opaque :
- **Ombre propre** : Partie non éclairée de l'objet.
- **Ombre portée** : Zone sombre sur l'écran derrière l'objet.
- **Cône d'ombre** : Espace sombre entre l'objet et l'écran.

Si la source est étendue, une zone de transition apparaît : la **pénombre**.

> **🌑 Exemple : Les Éclipses**
>
> Une éclipse de Soleil se produit lorsque la Lune passe entre la Terre et le Soleil. La Terre traverse le cône d'ombre de la Lune. C'est une preuve spectaculaire de la propagation rectiligne !
            `,
            summary: [
                "**Milieu homogène transparent** : Propagation en ligne droite.",
                "**Vitesse (c)** : $3 \\times 10^8$ m/s.",
                "**Rayon lumineux** : Modèle géométrique.",
                "**Ombre/Pénombre** : Conséquence de la propagation rectiligne."
            ],
            exercises: [
                {
                    id: 'ex-opt13-1',
                    question: "La Lune est une source de lumière :",
                    options: ["Primaire", "Secondaire", "Tertiaire", "Artificielle"],
                    correctAnswer: 1,
                    explanation: "La Lune ne produit pas de lumière, elle ne fait que réfléchir la lumière du Soleil. C'est donc une source secondaire."
                },
                {
                    id: 'ex-opt13-2',
                    question: "Dans quel milieu la lumière ne se propage-t-elle PAS en ligne droite ?",
                    options: [
                        "Le vide",
                        "L'air calme",
                        "L'eau pure",
                        "L'air chaud au-dessus d'une route (mirage)"
                    ],
                    correctAnswer: 3,
                    explanation: "Si l'air n'est pas homogène (différences de température), la lumière se courbe (réfraction graduelle), créant des mirages."
                }
            ],
            simulation: 'chap7-propagation-lumiere'
        },

        {
            id: 'opt-2s-14',
            part: 'Troisième Partie : Optique',
            title: 'P14. Réflexion de la Lumière',
            story: "Narcisse est tombé amoureux de son reflet dans l'eau. Depuis l'antiquité, les miroirs fascinent. Mais comment la lumière rebondit-elle exactement ? Les lois sont aussi précises qu'un coup de billard.",
            content: `
### I. Phénomène de Réflexion
La lumière rencontre une surface et revient dans son milieu d'origine.
- **Réflexion spéculaire** : Sur une surface lisse (miroir), les rayons restent parallèles (image nette).
- **Réflexion diffuse** : Sur une surface rugueuse (mur), les rayons partent dans tous les sens (pas d'image).

### II. Lois de la Réflexion (Snell-Descartes)
Soit un rayon incident arrivant sur un miroir plan :
- **Normale (N)** : Droite perpendiculaire au miroir au point d'incidence I.
- **Angle d'incidence ($i$)** : Angle entre le rayon incident et la normale.
- **Angle de réflexion ($r$)** : Angle entre le rayon réfléchi et la normale.

> **1ère Loi** : Le rayon réfléchi est dans le plan d'incidence (défini par le rayon incident et la normale).
> **2ème Loi** : L'angle de réflexion est égal à l'angle d'incidence.
> $$i = r$$

### III. Image par un Miroir Plan
L'image A' d'un objet A donnée par un miroir plan est :
- **Virtuelle** : Elle semble être derrière le miroir (on ne peut pas la projeter sur un écran).
- **Symétrique** de l'objet par rapport au plan du miroir.
- **De même taille** que l'objet.

> **🎱 Analogie : Le Billard**
>
> Si vous lancez une boule de billard contre la bande sans effet, elle rebondit avec le même angle. La lumière fait exactement pareil sur un miroir. L'angle d'arrivée égale l'angle de départ.
            `,
            summary: [
                "**Réflexion** : Retour de la lumière dans le même milieu.",
                "**Lois** : $i = r$ (angles par rapport à la normale).",
                "**Image** : Virtuelle et symétrique.",
                "**Miroir Plan** : Surface réfléchissante plane."
            ],
            exercises: [
                {
                    id: 'ex-opt14-1',
                    question: "Si un rayon lumineux arrive perpendiculairement à un miroir, l'angle de réflexion est :",
                    options: ["90°", "0°", "45°", "180°"],
                    correctAnswer: 1,
                    explanation: "Si le rayon est perpendiculaire au miroir, il est confondu avec la normale. Donc $i = 0°$, et par conséquent $r = 0°$ (il repart sur lui-même)."
                },
                {
                    id: 'ex-opt14-2',
                    question: "L'image d'un objet dans un miroir plan est :",
                    options: [
                        "Réelle et renversée",
                        "Virtuelle et symétrique",
                        "Plus petite que l'objet",
                        "Plus grande que l'objet"
                    ],
                    correctAnswer: 1,
                    explanation: "L'image est virtuelle (derrière le miroir) et de même taille, symétrique à l'objet."
                }
            ],
            simulation: 'light-reflection'
        },

        {
            id: 'opt-2s-15',
            part: 'Troisième Partie : Optique',
            title: 'P15. Réfraction et Dispersion',
            story: "Mettez une paille dans un verre d'eau : elle semble brisée. C'est la réfraction ! La lumière change de vitesse en changeant de milieu, ce qui la fait dévier de sa trajectoire, comme une voiture qui mord sur le bas-côté.",
            content: `
### I. La Réfraction de la Lumière
C'est le changement de direction de la lumière lorsqu'elle traverse la surface de séparation (dioptre) entre deux milieux transparents différents.

#### Indice de Réfraction ($n$)
Il caractérise un milieu transparent. C'est le rapport entre la vitesse de la lumière dans le vide ($c$) et dans le milieu ($v$).
$$n = \\frac{c}{v}$$
Comme $v < c$, on a toujours $n > 1$. (Air : $n \\approx 1$, Eau : $n \\approx 1,33$, Verre : $n \\approx 1,5$).

### II. Lois de la Réfraction (Snell-Descartes)
- Milieu 1 (indice $n_1$) $\\rightarrow$ Milieu 2 (indice $n_2$).
- Angle d'incidence $i_1$, Angle de réfraction $i_2$.

> **1ère Loi** : Le rayon réfracté est dans le plan d'incidence.
> **2ème Loi** : Il existe une relation constante entre les sinus des angles :
> $$n_1 \\times \\sin(i_1) = n_2 \\times \\sin(i_2)$$

#### Conséquences :
- Si on passe d'un milieu moins réfringent à plus réfringent ($n_1 < n_2$, ex: air vers eau) : Le rayon se rapproche de la normale ($i_2 < i_1$).
- Si on passe d'un milieu plus réfringent à moins réfringent ($n_1 > n_2$, ex: eau vers air) : Le rayon s'écarte de la normale ($i_2 > i_1$).

### III. Réflexion Totale
Si $n_1 > n_2$ (ex: eau vers air), il existe un angle d'incidence limite $i_{lim}$.
Si $i_1 > i_{lim}$, la lumière ne sort plus du tout : elle est **totalement réfléchie** vers l'intérieur.
**Application** : Fibres optiques (internet très haut débit).

### IV. Dispersion de la Lumière
La lumière blanche du Soleil est composée de toutes les couleurs (arc-en-ciel).
L'indice de réfraction $n$ dépend légèrement de la couleur (longueur d'onde). Le bleu est plus dévié que le rouge.
Un **prisme** sépare ces couleurs : c'est la **dispersion**.

> **🏎️ Analogie : La Voiture dans la Boue**
>
> Imaginez une voiture arrivant de biais sur une route boueuse (milieu plus lent). La roue avant droite touche la boue en premier et ralentit, tandis que la gauche continue vite sur le bitume. Résultat : la voiture pivote et change de direction ! C'est exactement ce qui arrive à la lumière.
            `,
            summary: [
                "**Réfraction** : Déviation au changement de milieu.",
                "**Loi fondamentale** : $n_1 \\sin(i_1) = n_2 \\sin(i_2)$.",
                "**Indice ($n$)** : $n = c/v$.",
                "**Réflexion totale** : Possible si $n_1 > n_2$ (bases de la fibre optique).",
                "**Dispersion** : Décomposition de la lumière blanche (prisme)."
            ],
            exercises: [
                {
                    id: 'ex-opt15-1',
                    question: "Un rayon passe de l'air ($n_1 = 1$) dans l'eau ($n_2 = 1,33$). Le rayon réfracté :",
                    options: [
                        "S'écarte de la normale",
                        "Se rapproche de la normale",
                        "Ne change pas de direction",
                        "Disparaît"
                    ],
                    correctAnswer: 1,
                    explanation: "Comme $n_2 > n_1$, le milieu est plus réfringent. D'après la loi de Descartes, l'angle $i_2$ sera plus petit que $i_1$, donc le rayon se rapproche de la normale."
                },
                {
                    id: 'ex-opt15-2',
                    question: "Pourquoi l'arc-en-ciel a-t-il des couleurs ?",
                    options: [
                        "À cause de la réflexion",
                        "Parce que l'eau est colorée",
                        "À cause de la dispersion",
                        "C'est une illusion"
                    ],
                    correctAnswer: 2,
                    explanation: "Les gouttes d'eau agissent comme des prismes. Elles dispersent la lumière blanche en déviant différemment chaque couleur (longueur d'onde)."
                }
            ],
            simulation: 'refraction-light'
        }
    ]
};
