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
                <h3>I. Les Mélanges</h3>
                <p>Un <strong>mélange</strong> est constitué de plusieurs espèces chimiques différentes.</p>
                <ul>
                    <li><strong>Mélange homogène</strong> : On ne peut pas distinguer les constituants à l'œil nu (ex: eau salée, air, alliage).</li>
                    <li><strong>Mélange hétérogène</strong> : On peut distinguer au moins deux constituants (ex: eau + huile, eau boueuse).</li>
                </ul>

                <h3>II. Les Corps Purs</h3>
                <p>Un <strong>corps pur</strong> est constitué d'une seule espèce chimique. Il a des constantes physiques propres (Température de fusion $T_f$, Température d'ébullition $T_{eb}$, Masse volumique $\\rho$).</p>
                <ul>
                    <li><strong>Corps pur simple</strong> : Constitué d'un seul type d'atome (ex: $O_2$, $Fe$, $C$).</li>
                    <li><strong>Corps pur composé</strong> : Constitué de plusieurs types d'atomes (ex: $H_2O$, $CO_2$).</li>
                </ul>

                <h3>III. Techniques de Séparation</h3>
                <p>Pour obtenir un corps pur à partir d'un mélange, on utilise des techniques physiques :</p>
                <ul>
                    <li><strong>Filtration</strong> : Sépare solide/liquide (pour mélanges hétérogènes).</li>
                    <li><strong>Décantation</strong> : Sépare deux liquides non miscibles (densité différente).</li>
                    <li><strong>Distillation</strong> : Sépare les constituants d'un mélange liquide homogène (selon leur température d'ébullition).</li>
                    <li><strong>Chromatographie</strong> : Sépare les espèces chimiques selon leur vitesse de migration.</li>
                </ul>
            `,
            summary: [
                "<strong>Mélange</strong> : Plusieurs espèces chimiques.",
                "<strong>Corps pur</strong> : Une seule espèce chimique (constantes fixes).",
                "<strong>Homogène</strong> : Une seule phase visible.",
                "<strong>Séparation</strong> : Distillation, filtration, décantation."
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
                <h3>I. Structure de l'Atome</h3>
                <p>L'atome est électriquement neutre. Il est constitué de :</p>
                <ul>
                    <li><strong>Noyau</strong> (Positif) : Contient des <strong>nucléons</strong> (Protons + Neutrons).</li>
                    <li><strong>Nuage électronique</strong> (Négatif) : Contient des <strong>électrons</strong> en mouvement autour du noyau.</li>
                </ul>

                <h3>II. Caractéristiques (Notation Symbolique)</h3>
                <p>Un atome est représenté par :</p>
                <p>$$_Z^A X$$</p>
                <ul>
                    <li><strong>X</strong> : Symbole de l'élément (ex: C, H, O).</li>
                    <li><strong>Z</strong> : Numéro atomique = Nombre de protons (et d'électrons car neutre).</li>
                    <li><strong>A</strong> : Nombre de masse = Nombre de nucléons (Protons + Neutrons).</li>
                </ul>
                <p>Nombre de neutrons : $N = A - Z$.</p>

                <h3>III. Isotopes et Ions</h3>
                <ul>
                    <li><strong>Isotopes</strong> : Atomes ayant le même Z mais des A différents (nombre de neutrons différent). Exemple : $^{12}C$ et $^{14}C$.</li>
                    <li><strong>Ion</strong> : Atome ayant perdu ou gagné des électrons.
                        <ul>
                            <li><strong>Cation</strong> (+) : Perte d'électrons (ex: $Na^+$).</li>
                            <li><strong>Anion</strong> (-) : Gain d'électrons (ex: $Cl^-$).</li>
                        </ul>
                    </li>
                </ul>

                <h3>IV. Classification Périodique (Tableau de Mendeleïev)</h3>
                <p>Les éléments sont classés par Z croissant.</p>
                <ul>
                    <li><strong>Lignes (Périodes)</strong> : Même nombre de couches électroniques (K, L, M...).</li>
                    <li><strong>Colonnes (Familles)</strong> : Même nombre d'électrons de valence (propriétés chimiques semblables).
                        <ul>
                            <li>Col 1 : Alcalins ($Li, Na, K...$).</li>
                            <li>Col 2 : Alcalino-terreux.</li>
                            <li>Col 17 : Halogènes ($F, Cl, Br, I$).</li>
                            <li>Col 18 : Gaz nobles (Stables, $He, Ne, Ar...$).</li>
                        </ul>
                    </li>
                </ul>
            `,
            summary: [
                "<strong>Atome</strong> : Noyau (p+n) + Électrons (e-).",
                "<strong>Notation</strong> : $_Z^A X$.",
                "<strong>Protons</strong> = Z, <strong>Neutrons</strong> = A - Z.",
                "<strong>Isotopes</strong> : Même Z, A différents.",
                "<strong>Classification</strong> : Éléments d'une même colonne = Mêmes propriétés chimiques."
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
                <h3>I. La Règle de l'Octet (et du Duet)</h3>
                <p>Pour être stable, un atome cherche à acquérir la structure électronique du gaz noble le plus proche (saturer sa couche externe).</p>
                <ul>
                    <li><strong>Règle du Duet</strong> (Z < 5) : 2 électrons sur la couche K ($He$).</li>
                    <li><strong>Règle de l'Octet</strong> (Z > 4) : 8 électrons sur la couche externe ($Ne, Ar$).</li>
                </ul>

                <h3>II. La Liaison Covalente</h3>
                <p>C'est la mise en commun d'électrons célibataires entre deux atomes.</p>
                <ul>
                    <li><strong>Doublet liant</strong> : Paire d'électrons partagée (trait entre les symboles).</li>
                    <li><strong>Doublet non-liant</strong> : Paire d'électrons restant sur un atome.</li>
                </ul>
                <p>Exemple : La molécule d'eau $H_2O$. L'oxygène partage 2 électrons avec 2 hydrogènes.</p>

                <h3>III. Représentation de Lewis</h3>
                <p>On représente l'atome avec ses électrons de valence.</p>
                <ul>
                    <li>$H$ (1e-) : $H\\cdot$ (1 doublet liant possible).</li>
                    <li>$C$ (4e-) : $\\cdot \\dot C \\cdot$ (4 liaisons possibles).</li>
                    <li>$N$ (5e-) : 3 liaisons + 1 doublet non-liant.</li>
                    <li>$O$ (6e-) : 2 liaisons + 2 doublets non-liants.</li>
                </ul>

                <h3>IV. Liaison Ionique</h3>
                <p>Attraction électrostatique entre un cation et un anion (ex: $Na^+ + Cl^- \\rightarrow NaCl$). Il n'y a pas de mise en commun mais un transfert d'électron.</p>
            `,
            summary: [
                "<strong>Stabilité</strong> : Chercher 8 électrons périphériques (Octet).",
                "<strong>Liaison Covalente</strong> : Mise en commun d'électrons.",
                "<strong>Formule de Lewis</strong> : Montre tous les doublets (liants et non-liants).",
                "<strong>Valence</strong> : Nombre de liaisons qu'un atome peut former."
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
                <h3>I. La Mole (Unité de quantité de matière)</h3>
                <p>Une <strong>mole</strong> est un paquet contenant $6,02 \\times 10^{23}$ entités (atomes, molécules...).</p>
                <div class="law-box">
                    <p><strong>Constante d'Avogadro</strong> :</p>
                    <p>$$N_A \\approx 6,02 \\times 10^{23} \\text{ mol}^{-1}$$</p>
                </div>
                <p>Quantité de matière $n$ (en mol) : $n = \\frac{N}{N_A}$</p>

                <h3>II. Masse Molaire</h3>
                <h4>1. Masse Molaire Atomique ($M$)</h4>
                <p>Masse d'une mole d'atomes (indiquée dans le tableau périodique). Ex: $M(C) = 12 \\text{ g/mol}$, $M(H) = 1 \\text{ g/mol}$.</p>

                <h4>2. Masse Molaire Moléculaire</h4>
                <p>Somme des masses molaires atomiques. Ex: $M(H_2O) = 2 \\times 1 + 16 = 18 \\text{ g/mol}$.</p>

                <h4>3. Relation Masse - Quantité de matière</h4>
                <div class="law-box">
                    <p>$$n = \\frac{m}{M}$$</p>
                    <ul>
                        <li>$n$ : quantité de matière (mol)</li>
                        <li>$m$ : masse de l'échantillon (g)</li>
                        <li>$M$ : masse molaire (g/mol)</li>
                    </ul>
                </div>

                <h3>III. Volume Molaire des Gaz</h3>
                <p>Dans les mêmes conditions de température et de pression, une mole de n'importe quel gaz occupe le même volume.</p>
                <p>$$n = \\frac{V}{V_m}$$</p>
                <ul>
                    <li>$V$ : Volume du gaz (L)</li>
                    <li>$V_m$ : Volume molaire (L/mol). À 0°C et 1 atm, $V_m \\approx 22,4 \\text{ L/mol}$.</li>
                </ul>
            `,
            summary: [
                "<strong>Mole</strong> : Paquet de $6,02 \\times 10^{23}$ entités.",
                "<strong>Masse Molaire ($M$)</strong> : Masse d'une mole (g/mol).",
                "<strong>Formules clés</strong> : $n = m/M$ (solides/liquides) et $n = V/V_m$ (gaz).",
                "<strong>Avogadro</strong> : Le lien entre le microscopique et le macroscopique."
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
                <h3>I. La Réaction Chimique</h3>
                <p>Transformation au cours de laquelle des substances disparaissent (<strong>Réactifs</strong>) et de nouvelles apparaissent (<strong>Produits</strong>).</p>

                <h3>II. Lois de Conservation (Lavoisier)</h3>
                <p>Au cours d'une réaction chimique, il y a conservation :</p>
                <ol>
                    <li><strong>De la masse</strong> (Masse totale réactifs = Masse totale produits).</li>
                    <li><strong>Des éléments chimiques</strong> (On retrouve les mêmes atomes avant et après).</li>
                    <li><strong>De la charge électrique</strong>.</li>
                </ol>

                <h3>III. Équation-Bilan</h3>
                <p>Elle traduit le bilan de la réaction en utilisant les symboles chimiques et des cœfficients stœchiométriques.</p>
                <p><strong>Méthode d'équilibrage</strong> : Ajuster les cœfficients pour avoir le même nombre d'atomes de chaque type à gauche et à droite.</p>

                <div class="example">
                    <strong>Exemple : Combustion du Méthane</strong><br>
                    $CH_4 + O_2 \\rightarrow CO_2 + H_2O$ (Non équilibrée)<br>
                    $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$ (Équilibrée)<br>
                    <ul>
                        <li>C : 1 à gauche, 1 à droite.</li>
                        <li>H : 4 à gauche, 2x2=4 à droite.</li>
                        <li>O : 2x2=4 à gauche, 2+2=4 à droite.</li>
                    </ul>
                </div>

                <h3>IV. Bilan Molaire</h3>
                <p>L'équation indique les proportions molaires.</p>
                <p>Si $aA + bB \\rightarrow cC + dD$, alors les quantités réagies et formées vérifient :</p>
                <p>$$ \\frac{n(A)_{consommé}}{a} = \\frac{n(B)_{consommé}}{b} = \\frac{n(C)_{formé}}{c} $$</p>
            `,
            summary: [
                "<strong>Réactifs</strong> $\\rightarrow$ <strong>Produits</strong>.",
                "<strong>Conservation</strong> : Atomes (nombre et nature), Masse, Charge.",
                "<strong>Équilibrage</strong> : Ajouter des cœfficients, jamais toucher aux indices des formules.",
                "<strong>Stœchiométrie</strong> : C'est la proportion idéale de réaction."
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
                <h3>I. Définitions</h3>
                <ul>
                    <li><strong>Solvant</strong> : Liquide majoritaire (ex: Eau).</li>
                    <li><strong>Soluté</strong> : Espèce dissoute (Solide, Liquide ou Gaz).</li>
                    <li><strong>Solution</strong> : Mélange homogène solvant + soluté.</li>
                    <li><strong>Solution aqueuse</strong> : Le solvant est l'eau.</li>
                </ul>

                <h3>II. Concentrations</h3>
                
                <h4>1. Concentration Massique ($C_m$)</h4>
                <p>Masse de soluté dissoute par litre de solution.</p>
                <p>$$C_m = \\frac{m_{soluté}}{V_{solution}} \\quad (g.L^{-1})$$</p>

                <h4>2. Concentration Molaire ($C$)</h4>
                <p>Quantité de matière de soluté par litre de solution.</p>
                <p>$$C = \\frac{n_{soluté}}{V_{solution}} = \\frac{[X]}{V} \\quad (mol.L^{-1})$$</p>

                <div class="law-box">
                    <p><strong>Relation entre Cm et C</strong> :</p>
                    <p>$$C_m = C \\times M$$</p>
                </div>

                <h3>III. Préparation de Solutions</h3>
                
                <h4>1. Dissolution</h4>
                <p>On dissout une masse $m$ de solide dans un volume $V$.</p>
                <p>Calcul : $m = C \\times V \\times M$.</p>

                <h4>2. Dilution</h4>
                <p>Ajouter de l'eau pour diminuer la concentration. La quantité de matière de soluté ne change pas (Conservation).</p>
                <p>$$n_{initial} = n_{final} \\Rightarrow C_i \\times V_i = C_f \\times V_f$$</p>
                <p>$V_i$ est le volume à prélever de la solution mère.</p>
            `,
            summary: [
                "<strong>Solution</strong> = Solvant + Soluté.",
                "<strong>Concentration Molaire</strong> : $C = n/V$ (mol/L).",
                "<strong>Concentration Massique</strong> : $C_m = m/V$ (g/L).",
                "<strong>Dilution</strong> : $C_i V_i = C_f V_f$.",
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
                <h3>I. Définition (Arrhenius)</h3>
                <p>Un <strong>acide</strong> est une substance qui, en solution aqueuse, libère des ions hydrogène $H^+$ (ou protons).</p>
                <p>Dans l'eau, $H^+$ s'associe à $H_2O$ pour former l'ion <strong>Hydronium $H_3O^+$</strong>.</p>
                <div class="law-box">
                    <p>Une solution acide contient plus d'ions $H_3O^+$ que d'ions $OH^-$.</p>
                </div>

                <h3>II. Exemples Courants</h3>
                <ul>
                    <li><strong>Acide Chlorhydrique ($HCl$)</strong> : Acide fort.
                        <br>$HCl + H_2O \\rightarrow H_3O^+ + Cl^-$ (Réaction totale).</li>
                    <li><strong>Acide Sulfurique ($H_2SO_4$)</strong> : Diacide (libère 2 $H^+$).</li>
                    <li><strong>Acide Éthanoïque ($CH_3COOH$)</strong> : Acide faible (vinaigre).</li>
                </ul>

                <h3>III. Propriétés</h3>
                <ul>
                    <li>Conduisent le courant électrique (présence d'ions).</li>
                    <li>Attaquent certains métaux (Fer, Zinc) avec dégagement de $H_2$.</li>
                    <li>Rougissent le papier pH ou l'hélianthine.</li>
                </ul>
            `,
            summary: [
                "<strong>Acide</strong> : Libère $H^+$.",
                "<strong>Ion responsable</strong> : $H_3O^+$ (Hydronium).",
                "<strong>Exemples</strong> : $HCl$, $H_2SO_4$.",
                "<strong>Réaction</strong> : Transforme l'eau en $H_3O^+$."
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
                <h3>I. Définition (Arrhenius)</h3>
                <p>Une <strong>base</strong> est une substance qui, en solution aqueuse, libère des ions hydroxyde $OH^-$.</p>
                <div class="law-box">
                    <p>Une solution basique contient plus d'ions $OH^-$ que d'ions $H_3O^+$.</p>
                </div>

                <h3>II. Exemples Courants</h3>
                <ul>
                    <li><strong>Soude (Hydroxyde de Sodium $NaOH$)</strong> : Base forte.
                        <br>$NaOH_{(s)} \\xrightarrow{eau} Na^+_{(aq)} + OH^-_{(aq)}$ (Dissociation totale).</li>
                    <li><strong>Potasse ($KOH$)</strong>.</li>
                    <li><strong>Ammoniaque ($NH_3$)</strong> : Base faible.</li>
                </ul>

                <h3>III. Propriétés</h3>
                <ul>
                    <li>Conduisent le courant électrique.</li>
                    <li>Javelisent les indicateurs colorés.</li>
                    <li>Bleuissent le papier pH ou le bromothymol.</li>
                    <li>Réagissent violemment avec les acides (Réaction de neutralisation).</li>
                </ul>
            `,
            summary: [
                "<strong>Base</strong> : Libère $OH^-$.",
                "<strong>Ion responsable</strong> : $OH^-$ (Hydroxyde).",
                "<strong>Exemple</strong> : $NaOH$ (Soude).",
                "<strong>Propriété</strong> : Neutralise les acides."
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
                <h3>I. Le Potentiel Hydrogène (pH)</h3>
                <p>Le pH est une grandeur sans unité qui mesure l'acidité d'une solution (liée à la concentration en $H_3O^+$).</p>
                <p>Il se mesure avec un <strong>pH-mètre</strong> ou du <strong>papier pH</strong>.</p>

                <h3>II. Échelle de pH (à 25°C)</h3>
                <div class="analogy">
                    L'échelle va de 0 à 14.
                </div>
                <ul>
                    <li><strong>pH < 7</strong> : Solution <strong>Acide</strong> (L'acidité augmente quand le pH diminue vers 0).</li>
                    <li><strong>pH = 7</strong> : Solution <strong>Neutre</strong> (Eau pure).</li>
                    <li><strong>pH > 7</strong> : Solution <strong>Basique</strong> (La basicité augmente quand le pH augmente vers 14).</li>
                </ul>

                <h3>III. Relation pH et concentration</h3>
                <p>$$pH = -\\log[H_3O^+] \\quad \\iff \\quad [H_3O^+] = 10^{-pH}$$</p>
                <p>Si la concentration en $H_3O^+$ est divisée par 10 (dilution), le pH augmente de 1 unité.</p>

                <h3>IV. Indicateurs Colorés</h3>
                <p>Ce sont des substances organiques dont la couleur change selon le pH du milieu (Zone de virage).</p>
                <ul>
                    <li><strong>BBT (Bleu de Bromothymol)</strong> : Jaune (Acide) - Vert (Neutre) - Bleu (Basique).</li>
                    <li><strong>Phénolphtaléine</strong> : Incolore (Acide) - Rose (Basique).</li>
                    <li><strong>Hélianthine</strong> : Rouge (Acide) - Jaune (Basique).</li>
                </ul>
            `,
            summary: [
                "<strong>pH < 7</strong> : Acide.",
                "<strong>pH = 7</strong> : Neutre.",
                "<strong>pH > 7</strong> : Basique.",
                "<strong>Indicateur coloré</strong> : Change de couleur selon le pH.",
                "<strong>Mesure</strong> : pH-mètre (précis) ou papier pH (approximatif)."
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
                <h3>I. Principe des Tests</h3>
                <p>Pour identifier un ion dans une solution, on ajoute quelques gouttes d'un réactif spécifique. L'apparition d'un <strong>précipité</strong> (solide) d'une couleur caractéristique confirme la présence de l'ion.</p>

                <h3>II. Tests des Cations Métalliques (avec la Soude NaOH)</h3>
                <p>On ajoute de la Soude ($NaOH$).</p>
                <ul>
                    <li><strong>Ion Cuivre II ($Cu^{2+}$)</strong> : Précipité <strong>BLEU</strong> (Hydroxyde de cuivre).</li>
                    <li><strong>Ion Fer II ($Fe^{2+}$)</strong> : Précipité <strong>VERT</strong> (Hydroxyde de fer II).</li>
                    <li><strong>Ion Fer III ($Fe^{3+}$)</strong> : Précipité <strong>ROUILLE</strong> (Hydroxyde de fer III).</li>
                    <li><strong>Ion Zinc ($Zn^{2+}$)</strong> : Précipité <strong>BLANC</strong> qui se redissout dans un excès de soude.</li>
                    <li><strong>Ion Aluminium ($Al^{3+}$)</strong> : Précipité <strong>BLANC</strong>.</li>
                </ul>

                <h3>III. Tests des Anions</h3>
                <ul>
                    <li><strong>Ion Chlorure ($Cl^-$)</strong> : Réactif = Nitrate d'Argent ($AgNO_3$).
                        <br>$\rightarrow$ Précipité <strong>BLANC</strong> qui noircit à la lumière.</li>
                    <li><strong>Ion Sulfate ($SO_4^{2-}$)</strong> : Réactif = Chlorure de Baryum ($BaCl_2$).
                        <br>$\rightarrow$ Précipité <strong>BLANC</strong>.</li>
                </ul>

                <h3>IV. Tableau Récapitulatif</h3>
                <table class="w-full text-sm text-left border-collapse border border-gray-600 mt-2">
                    <tr class="bg-gray-800 text-white"><th>Ion</th><th>Réactif</th><th>Observation</th></tr>
                    <tr><td>$Cu^{2+}$</td><td>Soude</td><td>Précipité Bleu</td></tr>
                    <tr><td>$Fe^{2+}$</td><td>Soude</td><td>Précipité Vert</td></tr>
                    <tr><td>$Fe^{3+}$</td><td>Soude</td><td>Précipité Rouille</td></tr>
                    <tr><td>$Cl^-$</td><td>Nitrate d'Argent</td><td>Précipité Blanc (noircit)</td></tr>
                </table>
            `,
            summary: [
                "<strong>Cuivre ($Cu^{2+}$)</strong> : Bleu (avec Soude).",
                "<strong>Fer ($Fe^{2+} / Fe^{3+}$)</strong> : Vert / Rouille (avec Soude).",
                "<strong>Chlorure ($Cl^-$)</strong> : Blanc noircissant (avec Nitrate d'Argent).",
                "<strong>Sulfate ($SO_4^{2-}$)</strong> : Blanc (avec Chlorure de Baryum)."
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
