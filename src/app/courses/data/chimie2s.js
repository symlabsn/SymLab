export const chimie2sData = {
    id: 'chimie-2s',
    title: 'Chimie 2nde S',
    author: 'Wahab Diop / SymLab Team',
    description: 'Cours complet de Chimie pour la classe de Seconde S.',
    chapters: [
        {
            id: 'chim-2s-01',
            part: 'Chimie Générale',
            title: 'C1. Mélanges et Corps Purs (Introduction)',
            story: "L'air que nous respirons, l'eau de mer, le bronze des médailles... La matière qui nous entoure est rarement pure. La chimie commence par l'art de séparer et d'identifier les substances.",
            content: `
### I. Les Mélanges
Un **mélange** est constitué de plusieurs espèces chimiques différentes.
- **Mélange homogène** : On ne peut pas distinguer les constituants à l'œil nu (ex: eau salée, air, alliage).
- **Mélange hétérogène** : On peut distinguer au moins deux constituants (ex: eau + huile, eau boueuse).

### II. Les Corps Purs
Un **corps pur** est constitué d'une seule espèce chimique. Il a des constantes physiques propres (Température de fusion $T_f$, Température d'ébullition $T_{eb}$, Masse volumique $\\rho$).
- **Corps pur simple** : Constitué d'un seul type d'atome (ex: $O_2$, $Fe$, $C$).
- **Corps pur composé** : Constitué de plusieurs types d'atomes (ex: $H_2O$, $CO_2$).

### III. Techniques de Séparation
Pour obtenir un corps pur à partir d'un mélange, on utilise des techniques physiques :
- **Filtration** : Sépare solide/liquide (pour mélanges hétérogènes).
- **Décantation** : Sépare deux liquides non miscibles (densité différente).
- **Distillation** : Sépare les constituants d'un mélange liquide homogène (selon leur température d'ébullition).
- **Chromatographie** : Sépare les espèces chimiques selon leur vitesse de migration.
            `,
            summary: [
                "**Mélange** : Plusieurs espèces chimiques.",
                "**Corps pur** : Une seule espèce chimique (constantes fixes).",
                "**Homogène** : Une seule phase visible.",
                "**Séparation** : Distillation, filtration, décantation."
            ],
            exercises: [
                {
                    id: 'ex-chim1-1',
                    question: "L'eau minérale est-elle un corps pur ?",
                    options: ["Oui", "Non", "Cela dépend de la marque", "Uniquement si elle est gazeuse"],
                    correctAnswer: 1,
                    explanation: "Non, c'est un mélange homogène contenant de l'eau et des sels minéraux dissous. L'eau distillée, elle, est un corps pur."
                },
                {
                    id: 'ex-chim1-2',
                    question: "Quelle technique permet de séparer l'eau et l'alcool ?",
                    options: ["Filtration", "Décantation", "Distillation", "Aimantation"],
                    correctAnswer: 2,
                    explanation: "L'eau et l'alcool sont miscibles mais ont des températures d'ébullition différentes (100°C et 78°C). La distillation fractionnée permet de les séparer."
                }
            ]
        },
        {
            id: 'chim-2s-02',
            part: 'Structure de la Matière',
            title: 'C2. Éléments, Atomes et Classification',
            story: "Démocrite l'avait rêvé, Rutherford et Bohr l'ont dessiné. L'atome est la brique élémentaire de l'univers, un système solaire miniature avec un noyau soleil et des électrons planètes.",
            content: `
### I. Structure de l'Atome
L'atome est électriquement neutre. Il est constitué de :
- **Noyau** (Positif) : Contient des **nucléons** (Protons + Neutrons).
- **Nuage électronique** (Négatif) : Contient des **électrons** en mouvement autour du noyau.

### II. Caractéristiques (Notation Symbolique)
Un atome est représenté par :
$$_Z^A X$$

- **X** : Symbole de l'élément (ex: C, H, O).
- **Z** : Numéro atomique = Nombre de protons (et d'électrons car neutre).
- **A** : Nombre de masse = Nombre de nucléons (Protons + Neutrons).

Nombre de neutrons : $N = A - Z$.

### III. Isotopes et Ions
- **Isotopes** : Atomes ayant le même Z mais des A différents (nombre de neutrons différent). Exemple : $^{12}C$ et $^{14}C$.
- **Ion** : Atome ayant perdu ou gagné des électrons.
    - **Cation** (+) : Perte d'électrons (ex: $Na^+$).
    - **Anion** (-) : Gain d'électrons (ex: $Cl^-$).

### IV. Classification Périodique (Tableau de Mendeleïev)
Les éléments sont classés par Z croissant.
- **Lignes (Périodes)** : Même nombre de couches électroniques (K, L, M...).
- **Colonnes (Familles)** : Même nombre d'électrons de valence (propriétés chimiques semblables).
    - Col 1 : Alcalins ($Li, Na, K...$).
    - Col 2 : Alcalino-terreux.
    - Col 17 : Halogènes ($F, Cl, Br, I$).
    - Col 18 : Gaz nobles (Stables, $He, Ne, Ar...$).
            `,
            summary: [
                "**Atome** : Noyau (p+n) + Électrons (e-).",
                "**Notation** : $_Z^A X$.",
                "**Protons** = Z, **Neutrons** = A - Z.",
                "**Isotopes** : Même Z, A différents.",
                "**Classification** : Éléments d'une même colonne = Mêmes propriétés chimiques."
            ],
            exercises: [
                {
                    id: 'ex-chim2-1',
                    question: "Combien de neutrons possède l'atome de carbone 14 ($^{14}_6C$) ?",
                    options: ["6", "8", "14", "20"],
                    correctAnswer: 1,
                    explanation: "$N = A - Z = 14 - 6 = 8$ neutrons."
                },
                {
                    id: 'ex-chim2-2',
                    question: "L'ion $Mg^{2+}$ est un :",
                    options: ["Anion qui a gagné 2 électrons", "Cation qui a perdu 2 électrons", "Isotope du Magnésium", "Atome neutre"],
                    correctAnswer: 1,
                    explanation: "La charge positive 2+ indique une perte de 2 électrons négatifs. C'est un cation."
                }
            ]
        },
        {
            id: 'chim-2s-03',
            part: 'Structure de la Matière',
            title: 'C3. Liaisons Chimiques',
            story: "Les atomes sont sociables. Pour devenir stables comme les gaz nobles, ils cherchent des partenaires. Ils partagent ou échangent des électrons : c'est le mariage chimique.",
            content: `
### I. La Règle de l'Octet (et du Duet)
Pour être stable, un atome cherche à acquérir la structure électronique du gaz noble le plus proche (saturer sa couche externe).
- **Règle du Duet** (Z < 5) : 2 électrons sur la couche K ($He$).
- **Règle de l'Octet** (Z > 4) : 8 électrons sur la couche externe ($Ne, Ar$).

### II. La Liaison Covalente
C'est la mise en commun d'électrons célibataires entre deux atomes.
- **Doublet liant** : Paire d'électrons partagée (trait entre les symboles).
- **Doublet non-liant** : Paire d'électrons restant sur un atome.

Exemple : La molécule d'eau $H_2O$. L'oxygène partage 2 électrons avec 2 hydrogènes.

### III. Représentation de Lewis
On représente l'atome avec ses électrons de valence.
- $H$ (1e-) : $H\\cdot$ (1 doublet liant possible).
- $C$ (4e-) : $\\cdot \\dot C \\cdot$ (4 liaisons possibles).
- $N$ (5e-) : 3 liaisons + 1 doublet non-liant.
- $O$ (6e-) : 2 liaisons + 2 doublets non-liants.

### IV. Liaison Ionique
Attraction électrostatique entre un cation et un anion (ex: $Na^+ + Cl^- \\rightarrow NaCl$). Il n'y a pas de mise en commun mais un transfert d'électron.
            `,
            summary: [
                "**Stabilité** : Chercher 8 électrons périphériques (Octet).",
                "**Liaison Covalente** : Mise en commun d'électrons.",
                "**Formule de Lewis** : Montre tous les doublets (liants et non-liants).",
                "**Valence** : Nombre de liaisons qu'un atome peut former."
            ],
            exercises: [
                {
                    id: 'ex-chim3-1',
                    question: "Combien de liaisons covalentes l'atome de carbone (Z=6) forme-t-il généralement ?",
                    options: ["1", "2", "3", "4"],
                    correctAnswer: 3,
                    explanation: "Le carbone a 4 électrons de valence. Il lui en manque 4 pour l'octet. Il est tétravalent."
                },
                {
                    id: 'ex-chim3-2',
                    question: "Dans la molécule de diazote ($N_2$), la liaison est :",
                    options: ["Simple", "Double", "Triple", "Ionique"],
                    correctAnswer: 2,
                    explanation: "L'azote a 3 électrons célibataires. Pour satisfaire l'octet, deux atomes N partagent 3 paires d'électrons : liaison triple $N \\equiv N$."
                }
            ]
        },
        {
            id: 'chim-2s-04',
            part: 'Chimie Quantitative',
            title: 'C4. Mole et Grandeurs Molaires',
            story: "Comment compter des milliards de milliards d'atomes ? Les chimistes ont inventé une unité de paquet : la mole. C'est la douzaine du chimiste, mais une douzaine gigantesque.",
            content: `
### I. La Mole (Unité de quantité de matière)
Une **mole** est un paquet contenant $6,02 \\times 10^{23}$ entités (atomes, molécules...).

> **Constante d'Avogadro** :
> $$N_A \\approx 6,02 \\times 10^{23} \\text{ mol}^{-1}$$

Quantité de matière $n$ (en mol) : $n = \\frac{N}{N_A}$

### II. Masse Molaire

#### 1. Masse Molaire Atomique ($M$)
Masse d'une mole d'atomes (indiquée dans le tableau périodique). Ex: $M(C) = 12 \\text{ g/mol}$, $M(H) = 1 \\text{ g/mol}$.

#### 2. Masse Molaire Moléculaire
Somme des masses molaires atomiques. Ex: $M(H_2O) = 2 \\times 1 + 16 = 18 \\text{ g/mol}$.

#### 3. Relation Masse - Quantité de matière
> $$n = \\frac{m}{M}$$
> - $n$ : quantité de matière (mol)
> - $m$ : masse de l'échantillon (g)
> - $M$ : masse molaire (g/mol)

### III. Volume Molaire des Gaz
Dans les mêmes conditions de température et de pression, une mole de n'importe quel gaz occupe le même volume.
$$n = \\frac{V}{V_m}$$
- $V$ : Volume du gaz (L)
- $V_m$ : Volume molaire (L/mol). À 0°C et 1 atm, $V_m \\approx 22,4 \\text{ L/mol}$.
            `,
            summary: [
                "**Mole** : Paquet de $6,02 \\times 10^{23}$ entités.",
                "**Masse Molaire ($M$)** : Masse d'une mole (g/mol).",
                "**Formules clés** : $n = m/M$ (solides/liquides) et $n = V/V_m$ (gaz).",
                "**Avogadro** : Le lien entre le microscopique et le macroscopique."
            ],
            exercises: [
                {
                    id: 'ex-chim4-1',
                    question: "Quelle est la masse de 2 moles d'eau ($H_2O$) ?",
                    options: ["18 g", "36 g", "2 g", "20 g"],
                    correctAnswer: 1,
                    explanation: "$M(H_2O) = 18 \\text{ g/mol}$. Donc $m = n \\times M = 2 \\times 18 = 36 \\text{ g}$."
                },
                {
                    id: 'ex-chim4-2',
                    question: "Quel volume occupent 0,5 mol de dioxygène ($O_2$) à 0°C ($V_m = 22,4 L/mol$) ?",
                    options: ["11,2 L", "22,4 L", "44,8 L", "5,6 L"],
                    correctAnswer: 0,
                    explanation: "$V = n \\times V_m = 0,5 \\times 22,4 = 11,2 \\text{ L}$."
                }
            ]
        },
        {
            id: 'chim-2s-05',
            part: 'Chimie Quantitative',
            title: 'C5. Réactions Chimiques et Équation-Bilan',
            story: "Rien ne se perd, rien ne se crée, tout se transforme. Cette phrase de Lavoisier est le fondement de la chimie. Une réaction, c'est comme une recette de cuisine où les ingrédients (réactifs) deviennent le plat (produits) en respectant les quantités exactes.",
            content: `
### I. La Réaction Chimique
Transformation au cours de laquelle des substances disparaissent (**Réactifs**) et de nouvelles apparaissent (**Produits**).

### II. Lois de Conservation (Lavoisier)
Au cours d'une réaction chimique, il y a conservation :
1. **De la masse** (Masse totale réactifs = Masse totale produits).
2. **Des éléments chimiques** (On retrouve les mêmes atomes avant et après).
3. **De la charge électrique**.

### III. Équation-Bilan
Elle traduit le bilan de la réaction en utilisant les symboles chimiques et des cœfficients stœchiométriques.
**Méthode d'équilibrage** : Ajuster les cœfficients pour avoir le même nombre d'atomes de chaque type à gauche et à droite.

> **Exemple : Combustion du Méthane**
>
> $CH_4 + O_2 \\rightarrow CO_2 + H_2O$ (Non équilibrée)
> $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$ (Équilibrée)
> - C : 1 à gauche, 1 à droite.
> - H : 4 à gauche, 2x2=4 à droite.
> - O : 2x2=4 à gauche, 2+2=4 à droite.

### IV. Bilan Molaire
L'équation indique les proportions molaires.
Si $aA + bB \\rightarrow cC + dD$, alors les quantités réagies et formées vérifient :
$$ \\frac{n(A)_{consommé}}{a} = \\frac{n(B)_{consommé}}{b} = \\frac{n(C)_{formé}}{c} $$
            `,
            summary: [
                "**Réactifs** $\\rightarrow$ **Produits**.",
                "**Conservation** : Atomes (nombre et nature), Masse, Charge.",
                "**Équilibrage** : Ajouter des cœfficients, jamais toucher aux indices des formules.",
                "**Stœchiométrie** : C'est la proportion idéale de réaction."
            ],
            exercises: [
                {
                    id: 'ex-chim5-1',
                    question: "Équilibrez l'équation : $N_2 + H_2 \\rightarrow NH_3$",
                    options: [
                        "$N_2 + H_2 \\rightarrow 2NH_3$",
                        "$N_2 + 3H_2 \\rightarrow 2NH_3$",
                        "$2N_2 + H_2 \\rightarrow 2NH_3$",
                        "$N_2 + H_2 \\rightarrow NH_3$"
                    ],
                    correctAnswer: 1,
                    explanation: "Il faut 2 N à droite $\\rightarrow$ $2NH_3$. Cela fait $2 \\times 3 = 6$ H. Il faut donc $3H_2$ à gauche."
                },
                {
                    id: 'ex-chim5-2',
                    question: "Dans la réaction $2H_2 + O_2 \\rightarrow 2H_2O$, si on brûle 2 moles de $H_2$, combien de moles de $O_2$ sont nécessaires ?",
                    options: ["1 mol", "2 mol", "0,5 mol", "4 mol"],
                    correctAnswer: 0,
                    explanation: "D'après les cœfficients (2 pour 1), il faut deux fois moins de dioxygène que de dihydrogène. $2/2 = 1$ mol."
                }
            ]
        },
        {
            id: 'chim-2s-06',
            part: 'Chimie des Solutions',
            title: 'C6. Généralités sur les Solutions Aqueuses',
            story: "L'eau est le solvant universel de la vie. Sang, sève, océans... tout est solution aqueuse. Comprendre comment dissoudre et diluer est la base du travail en laboratoire.",
            content: `
### I. Définitions
- **Solvant** : Liquide majoritaire (ex: Eau).
- **Soluté** : Espèce dissoute (Solide, Liquide ou Gaz).
- **Solution** : Mélange homogène solvant + soluté.
- **Solution aqueuse** : Le solvant est l'eau.

### II. Concentrations

#### 1. Concentration Massique ($C_m$)
Masse de soluté dissoute par litre de solution.
$$C_m = \\frac{m_{soluté}}{V_{solution}} \\quad (g.L^{-1})$$

#### 2. Concentration Molaire ($C$)
Quantité de matière de soluté par litre de solution.
$$C = \\frac{n_{soluté}}{V_{solution}} = \\frac{[X]}{V} \\quad (mol.L^{-1})$$

> **Relation entre Cm et C** :
> $$C_m = C \\times M$$

### III. Préparation de Solutions

#### 1. Dissolution
On dissout une masse $m$ de solide dans un volume $V$.
Calcul : $m = C \\times V \\times M$.

#### 2. Dilution
Ajouter de l'eau pour diminuer la concentration. La quantité de matière de soluté ne change pas (Conservation).
$$n_{initial} = n_{final} \\Rightarrow C_i \\times V_i = C_f \\times V_f$$
$V_i$ est le volume à prélever de la solution mère.
            `,
            summary: [
                "**Solution** = Solvant + Soluté.",
                "**Concentration Molaire** : $C = n/V$ (mol/L).",
                "**Concentration Massique** : $C_m = m/V$ (g/L).",
                "**Dilution** : $C_i V_i = C_f V_f$.",
            ],
            exercises: [
                {
                    id: 'ex-chim6-1',
                    question: "On dissout 0,5 mol de NaCl dans 2 L d'eau. La concentration molaire est :",
                    options: ["0,5 mol/L", "1,0 mol/L", "0,25 mol/L", "2,5 mol/L"],
                    correctAnswer: 2,
                    explanation: "$C = n / V = 0,5 / 2 = 0,25$ mol/L."
                },
                {
                    id: 'ex-chim6-2',
                    question: "Lors d'une dilution, la concentration de la solution :",
                    options: ["Augmente", "Diminue", "Reste constante", "S'annule"],
                    correctAnswer: 1,
                    explanation: "On ajoute du solvant, donc il y a moins de soluté par unité de volume. La concentration diminue."
                }
            ]
        },
        {
            id: 'chim-2s-07',
            part: 'Chimie des Solutions',
            title: 'C7. Solution Aqueuse Acide',
            story: "Le citron, le vinaigre, l'acide gastrique... Le goût piquant est la signature des solutions acides. Mais attention, les acides concentrés du labo ne piquent pas, ils brûlent !",
            content: `
### I. Définition (Arrhenius)
Un **acide** est une substance qui, en solution aqueuse, libère des ions hydrogène $H^+$ (ou protons).
Dans l'eau, $H^+$ s'associe à $H_2O$ pour former l'ion **Hydronium $H_3O^+$**.

> Une solution acide contient plus d'ions $H_3O^+$ que d'ions $OH^-$.

### II. Exemples Courants
- **Acide Chlorhydrique ($HCl$)** : Acide fort.
    - $HCl + H_2O \\rightarrow H_3O^+ + Cl^-$ (Réaction totale).
- **Acide Sulfurique ($H_2SO_4$)** : Diacide (libère 2 $H^+$).
- **Acide Éthanoïque ($CH_3COOH$)** : Acide faible (vinaigre).

### III. Propriétés
- Conduisent le courant électrique (présence d'ions).
- Attaquent certains métaux (Fer, Zinc) avec dégagement de $H_2$.
- Rougissent le papier pH ou l'hélianthine.
            `,
            summary: [
                "**Acide** : Libère $H^+$.",
                "**Ion responsable** : $H_3O^+$ (Hydronium).",
                "**Exemples** : $HCl$, $H_2SO_4$.",
                "**Réaction** : Transforme l'eau en $H_3O^+$."
            ],
            exercises: [
                {
                    id: 'ex-chim7-1',
                    question: "Quel ion caractérise l'acidité d'une solution ?",
                    options: ["$OH^-$", "$Cl^-$", "$H_3O^+$", "$Na^+$"],
                    correctAnswer: 2,
                    explanation: "L'ion hydronium $H_3O^+$ est l'ion caractéristique des solutions acides."
                },
                {
                    id: 'ex-chim7-2',
                    question: "L'acide chlorhydrique a pour formule :",
                    options: ["NaCl", "HCl", "H2SO4", "NaOH"],
                    correctAnswer: 1,
                    explanation: "$HCl$ (Chlorure d'hydrogène) dissous dans l'eau donne l'acide chlorhydrique."
                }
            ]
        },
        {
            id: 'chim-2s-08',
            part: 'Chimie des Solutions',
            title: 'C8. Solution Aqueuse Basique',
            story: "Savon, soude caustique, eau de javel... Les bases sont glissantes au toucher et excellentes pour nettoyer (détruire les graisses). Ce sont les opposés chimiques des acides.",
            content: `
### I. Définition (Arrhenius)
Une **base** est une substance qui, en solution aqueuse, libère des ions hydroxyde $OH^-$.

> Une solution basique contient plus d'ions $OH^-$ que d'ions $H_3O^+$.

### II. Exemples Courants
- **Soude (Hydroxyde de Sodium $NaOH$)** : Base forte.
    - $NaOH_{(s)} \\xrightarrow{eau} Na^+_{(aq)} + OH^-_{(aq)}$ (Dissociation totale).
- **Potasse ($KOH$)**.
- **Ammoniaque ($NH_3$)** : Base faible.

### III. Propriétés
- Conduisent le courant électrique.
- Javelisent les indicateurs colorés.
- Bleuissent le papier pH ou le bromothymol.
- Réagissent violemment avec les acides (Réaction de neutralisation).
            `,
            summary: [
                "**Base** : Libère $OH^-$.",
                "**Ion responsable** : $OH^-$ (Hydroxyde).",
                "**Exemple** : $NaOH$ (Soude).",
                "**Propriété** : Neutralise les acides."
            ],
            exercises: [
                {
                    id: 'ex-chim8-1',
                    question: "Quel est le nom de l'ion $OH^-$ ?",
                    options: ["Hydronium", "Hydroxyde", "Oxygène", "Hydrure"],
                    correctAnswer: 1,
                    explanation: "C'est l'ion hydroxyde, responsable de la basicité."
                },
                {
                    id: 'ex-chim8-2',
                    question: "La dissolution de NaOH dans l'eau produit des ions :",
                    options: ["$Na^+$ et $H^+$", "$Na^+$ et $OH^-$", "$H_3O^+$ et $Cl^-$", "$Na^+$ et $O^{2-}$"],
                    correctAnswer: 1,
                    explanation: "$NaOH \\rightarrow Na^+ + OH^-$."
                }
            ]
        },
        {
            id: 'chim-2s-09',
            part: 'Chimie des Solutions',
            title: 'C9. Notion de pH et Indicateurs Colorés',
            story: "Acide ou Basique ? Pour le savoir sans goûter (danger !), on utilise le pH. C'est une échelle universelle pour mesurer l'acidité, comme le thermomètre mesure la température.",
            content: `
### I. Le Potentiel Hydrogène (pH)
Le pH est une grandeur sans unité qui mesure l'acidité d'une solution (liée à la concentration en $H_3O^+$).
Il se mesure avec un **pH-mètre** ou du **papier pH**.

### II. Échelle de pH (à 25°C)
> L'échelle va de 0 à 14.

- **pH < 7** : Solution **Acide** (L'acidité augmente quand le pH diminue vers 0).
- **pH = 7** : Solution **Neutre** (Eau pure).
- **pH > 7** : Solution **Basique** (La basicité augmente quand le pH augmente vers 14).

### III. Relation pH et concentration
$$pH = -\\log[H_3O^+] \\quad \\iff \\quad [H_3O^+] = 10^{-pH}$$
Si la concentration en $H_3O^+$ est divisée par 10 (dilution), le pH augmente de 1 unité.

### IV. Indicateurs Colorés
Ce sont des substances organiques dont la couleur change selon le pH du milieu (Zone de virage).
- **BBT (Bleu de Bromothymol)** : Jaune (Acide) - Vert (Neutre) - Bleu (Basique).
- **Phénolphtaléine** : Incolore (Acide) - Rose (Basique).
- **Hélianthine** : Rouge (Acide) - Jaune (Basique).
            `,
            summary: [
                "**pH < 7** : Acide.",
                "**pH = 7** : Neutre.",
                "**pH > 7** : Basique.",
                "**Indicateur coloré** : Change de couleur selon le pH.",
                "**Mesure** : pH-mètre (précis) ou papier pH (approximatif)."
            ],
            exercises: [
                {
                    id: 'ex-chim9-1',
                    question: "Une solution a un pH de 3. Elle est :",
                    options: ["Faiblement basique", "Neutre", "Acide", "Très basique"],
                    correctAnswer: 2,
                    explanation: "Tout pH inférieur à 7 est acide."
                },
                {
                    id: 'ex-chim9-2',
                    question: "Le BBT devient bleu dans une solution :",
                    options: ["Acide", "Neutre", "Basique", "Salée"],
                    correctAnswer: 2,
                    explanation: "Le Bleu de Bromothymol est bleu en milieu basique (pH > 7,6)."
                }
            ]
        },
        {
            id: 'chim-2s-10',
            part: 'Chimie des Solutions',
            title: 'C10. Caractérisation de Quelques Ions',
            story: "On vous donne un liquide incolore inconnu. Est-ce de l'eau, de l'eau salée, de l'acide ? Pour le savoir, on joue aux détectives chimiques avec des réactifs testeurs qui forment des précipités colorés.",
            content: `
### I. Principe des Tests
Pour identifier un ion dans une solution, on ajoute quelques gouttes d'un réactif spécifique. L'apparition d'un **précipité** (solide) d'une couleur caractéristique confirme la présence de l'ion.

### II. Tests des Cations Métalliques (avec la Soude NaOH)
On ajoute de la Soude ($NaOH$).
- **Ion Cuivre II ($Cu^{2+}$)** : Précipité **BLEU** (Hydroxyde de cuivre).
- **Ion Fer II ($Fe^{2+}$)** : Précipité **VERT** (Hydroxyde de fer II).
- **Ion Fer III ($Fe^{3+}$)** : Précipité **ROUILLE** (Hydroxyde de fer III).
- **Ion Zinc ($Zn^{2+}$)** : Précipité **BLANC** qui se redissout dans un excès de soude.
- **Ion Aluminium ($Al^{3+}$)** : Précipité **BLANC**.

### III. Tests des Anions
- **Ion Chlorure ($Cl^-$)** : Réactif = Nitrate d'Argent ($AgNO_3$).
    - $\\rightarrow$ Précipité **BLANC** qui noircit à la lumière.
- **Ion Sulfate ($SO_4^{2-}$)** : Réactif = Chlorure de Baryum ($BaCl_2$).
    - $\\rightarrow$ Précipité **BLANC**.

### IV. Tableau Récapitulatif
| Ion | Réactif | Observation |
| --- | --- | --- |
| $Cu^{2+}$ | Soude | Précipité Bleu |
| $Fe^{2+}$ | Soude | Précipité Vert |
| $Fe^{3+}$ | Soude | Précipité Rouille |
| $Cl^-$ | Nitrate d'Argent | Précipité Blanc (noircit) |
            `,
            summary: [
                "**Cuivre ($Cu^{2+}$)** : Bleu (avec Soude).",
                "**Fer ($Fe^{2+} / Fe^{3+}$)** : Vert / Rouille (avec Soude).",
                "**Chlorure ($Cl^-$)** : Blanc noircissant (avec Nitrate d'Argent).",
                "**Sulfate ($SO_4^{2-}$)** : Blanc (avec Chlorure de Baryum)."
            ],
            exercises: [
                {
                    id: 'ex-chim10-1',
                    question: "Quel réactif permet d'identifier les ions chlorure ($Cl^-$) ?",
                    options: ["La soude", "Le nitrate d'argent", "L'acide chlorhydrique", "L'eau de chaux"],
                    correctAnswer: 1,
                    explanation: "Le nitrate d'argent forme un précipité blanc de chlorure d'argent ($AgCl$) avec les ions chlorure."
                },
                {
                    id: 'ex-chim10-2',
                    question: "Un précipité vert avec la soude indique la présence d'ions :",
                    options: ["Cuivre ($Cu^{2+}$)", "Fer III ($Fe^{3+}$)", "Fer II ($Fe^{2+}$)", "Zinc ($Zn^{2+}$)"],
                    correctAnswer: 2,
                    explanation: "Le précipité vert est l'hydroxyde de fer II ($Fe(OH)_2$)."
                }
            ]
        }
    ]
};
