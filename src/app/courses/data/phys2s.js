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
                <h3>I. Les Trois Modes d'Électrisation</h3>
                
                <h4>1. Électrisation par Frottement</h4>
                <p>Lorsqu'on frotte deux corps initialement neutres, il y a <strong>transfert d'électrons</strong> de l'un vers l'autre.</p>
                <ul>
                    <li>Le corps qui <strong>perd des électrons</strong> devient <strong>chargé positivement</strong> (+)</li>
                    <li>Le corps qui <strong>gagne des électrons</strong> devient <strong>chargé négativement</strong> (-)</li>
                </ul>
                
                <div class="example">
                    <strong>📖 Exemple</strong> : En frottant une règle en plastique avec un chiffon de laine, la règle arrache des électrons à la laine. La règle devient négative (-), la laine devient positive (+).
                </div>

                <h4>2. Électrisation par Contact</h4>
                <p>Un corps chargé mis en contact avec un corps neutre lui transmet une partie de sa charge.</p>
                <p><strong>Principe</strong> : Les charges se répartissent entre les deux corps.</p>

                <h4>3. Électrisation par Influence</h4>
                <p>Un corps chargé approché (sans contact) d'un conducteur neutre provoque une <strong>redistribution des charges</strong> dans ce conducteur.</p>
                <ul>
                    <li>Les charges de signe opposé sont attirées</li>
                    <li>Les charges de même signe sont repoussées</li>
                </ul>

                <h3>II. Nature de la Charge Électrique</h3>
                <p>La charge électrique est une propriété fondamentale de la matière, portée par les particules élémentaires :</p>
                <ul>
                    <li><strong>Électron</strong> : charge $q_e = -e = -1,6 \\times 10^{-19}$ C (négative)</li>
                    <li><strong>Proton</strong> : charge $q_p = +e = +1,6 \\times 10^{-19}$ C (positive)</li>
                    <li><strong>Neutron</strong> : charge nulle</li>
                </ul>
                
                <p><strong>Unité SI</strong> : Le Coulomb (C)</p>
                <p><strong>Quantification</strong> : Toute charge est un multiple entier de la charge élémentaire $e$</p>

                <h3>III. Loi de Coulomb</h3>
                <p>Deux charges ponctuelles $q_1$ et $q_2$ séparées par une distance $r$ exercent l'une sur l'autre une force électrostatique :</p>
                <p>$$F = k \\frac{|q_1 q_2|}{r^2}$$</p>
                <p>Où $k = 9 \\times 10^9$ N·m²/C² (constante de Coulomb)</p>
                
                <ul>
                    <li><strong>Charges de même signe</strong> : Force répulsive</li>
                    <li><strong>Charges de signes opposés</strong> : Force attractive</li>
                </ul>

                <div class="analogy">
                    <strong>🧲 Analogie : Les Aimants</strong><br>
                    Comme les pôles magnétiques, les charges électriques de même signe se repoussent, et celles de signes opposés s'attirent. Mais contrairement aux aimants, on peut isoler une charge positive ou négative.
                </div>
            `,
            summary: [
                "<strong>Électrisation par frottement</strong> : Transfert d'électrons entre deux corps",
                "<strong>Électrisation par contact</strong> : Partage de charges entre corps",
                "<strong>Électrisation par influence</strong> : Redistribution sans contact",
                "<strong>Charge élémentaire</strong> : $e = 1,6 \\times 10^{-19}$ C",
                "<strong>Loi de Coulomb</strong> : $F = k\\frac{|q_1 q_2|}{r^2}$",
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
            ]
        },

        {
            id: 'elec-2s-02',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P2. Généralités sur le Courant Électrique',
            story: "En 1800, Alessandro Volta invente la première pile électrique, permettant pour la première fois de produire un courant électrique continu. Cette invention révolutionne la science et ouvre la voie à l'ère de l'électricité.",
            content: `
                <h3>I. Nature du Courant Électrique</h3>
                <p>Le <strong>courant électrique</strong> est un déplacement ordonné de porteurs de charges électriques.</p>
                
                <h4>Dans les Métaux (Conducteurs Solides)</h4>
                <ul>
                    <li><strong>Porteurs de charges</strong> : Électrons libres (charge négative)</li>
                    <li><strong>Sens réel</strong> : De la borne (-) vers la borne (+)</li>
                </ul>

                <h4>Dans les Solutions Ioniques (Électrolytes)</h4>
                <ul>
                    <li><strong>Porteurs de charges</strong> : Ions positifs (cations) et ions négatifs (anions)</li>
                    <li><strong>Mouvement</strong> : Cations vers la cathode (-), anions vers l'anode (+)</li>
                </ul>

                <h3>II. Sens Conventionnel du Courant</h3>
                <div class="important">
                    <p><strong>⚠️ Convention</strong> : Par convention, le sens du courant électrique est le sens de déplacement des charges <strong>positives</strong>.</p>
                </div>
                <p>Dans un circuit, le courant va de la borne <strong>(+)</strong> vers la borne <strong>(-)</strong> à l'extérieur du générateur.</p>
                
                <p><strong>Remarque</strong> : Ce sens est opposé au sens réel de déplacement des électrons dans les métaux, mais c'est la convention universellement adoptée.</p>

                <h3>III. Conducteurs et Isolants</h3>
                
                <h4>Conducteurs Électriques</h4>
                <p>Matériaux qui laissent passer le courant électrique (présence de charges mobiles).</p>
                <ul>
                    <li><strong>Métaux</strong> : Cuivre, aluminium, fer, or, argent</li>
                    <li><strong>Solutions ioniques</strong> : Eau salée, acides, bases</li>
                    <li><strong>Graphite</strong> (carbone)</li>
                </ul>

                <h4>Isolants (Diélectriques)</h4>
                <p>Matériaux qui ne laissent pas passer le courant (pas de charges mobiles).</p>
                <ul>
                    <li><strong>Plastiques</strong> : PVC, polyéthylène</li>
                    <li><strong>Verre, céramique</strong></li>
                    <li><strong>Caoutchouc, bois sec</strong></li>
                    <li><strong>Air sec</strong></li>
                </ul>

                <h3>IV. Circuit Électrique Simple</h3>
                <p>Un circuit électrique est constitué de :</p>
                <ol>
                    <li><strong>Générateur</strong> : Fournit l'énergie (pile, batterie, alternateur)</li>
                    <li><strong>Récepteurs</strong> : Utilisent l'énergie (lampe, moteur, résistance)</li>
                    <li><strong>Fils de connexion</strong> : Conducteurs reliant les éléments</li>
                    <li><strong>Interrupteur</strong> : Permet d'ouvrir ou fermer le circuit</li>
                </ol>

                <p><strong>Circuit fermé</strong> : Le courant circule (interrupteur fermé)</p>
                <p><strong>Circuit ouvert</strong> : Pas de courant (interrupteur ouvert ou coupure)</p>

                <div class="analogy">
                    <strong>💧 Analogie : Circuit Hydraulique</strong><br>
                    Le courant électrique est comme l'eau dans un tuyau. Le générateur est la pompe, les fils sont les tuyaux, les récepteurs sont les turbines. L'eau (charges) circule en boucle fermée.
                </div>
            `,
            summary: [
                "<strong>Courant électrique</strong> : Déplacement ordonné de charges",
                "<strong>Dans les métaux</strong> : Porteurs = électrons libres",
                "<strong>Sens conventionnel</strong> : De (+) vers (-) à l'extérieur du générateur",
                "<strong>Conducteurs</strong> : Laissent passer le courant (métaux, solutions ioniques)",
                "<strong>Isolants</strong> : Ne laissent pas passer le courant (plastique, verre)",
                "<strong>Circuit fermé</strong> : Nécessaire pour la circulation du courant"
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
            ]
        },

        {
            id: 'elec-2s-03',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P3. Intensité du Courant Électrique',
            story: "André-Marie Ampère (1775-1836) établit les lois fondamentales de l'électrodynamique. L'unité d'intensité du courant porte son nom en hommage à ses travaux révolutionnaires sur les interactions entre courants électriques.",
            content: `
                <h3>I. Définition de l'Intensité</h3>
                <p>L'<strong>intensité du courant électrique</strong> est la quantité de charge électrique qui traverse une section du conducteur par unité de temps.</p>
                
                <p><strong>Expression mathématique</strong> :</p>
                <p>$$I = \\frac{Q}{t}$$</p>
                
                <p>Où :</p>
                <ul>
                    <li>$I$ : Intensité du courant (en Ampère, A)</li>
                    <li>$Q$ : Charge électrique (en Coulomb, C)</li>
                    <li>$t$ : Durée (en seconde, s)</li>
                </ul>

                <p><strong>Unité SI</strong> : L'Ampère (A)</p>
                <p>$1 A = 1 C/s$ (1 Coulomb par seconde)</p>

                <h3>II. Mesure de l'Intensité</h3>
                
                <h4>Appareil de Mesure : L'Ampèremètre</h4>
                <ul>
                    <li><strong>Symbole</strong> : (A) dans un cercle</li>
                    <li><strong>Branchement</strong> : En <strong>série</strong> avec le dipôle</li>
                    <li><strong>Borne COM</strong> : Côté borne (-) du générateur</li>
                    <li><strong>Borne A</strong> : Côté borne (+) du générateur</li>
                </ul>

                <div class="important">
                    <p><strong>⚠️ Règle Fondamentale</strong> : L'ampèremètre se branche toujours en SÉRIE (le courant doit le traverser).</p>
                </div>

                <h4>Calibres et Précision</h4>
                <p>Un ampèremètre possède plusieurs calibres (200 mA, 2 A, 10 A, etc.)</p>
                <ul>
                    <li>Choisir un calibre <strong>supérieur</strong> à l'intensité attendue</li>
                    <li>Affiner ensuite avec un calibre plus petit pour plus de précision</li>
                </ul>

                <h3>III. Loi des Nœuds (1ère Loi de Kirchhoff)</h3>
                <p>Un <strong>nœud</strong> est un point du circuit où se rejoignent au moins trois fils.</p>
                
                <div class="law-box">
                    <p><strong>Énoncé</strong> : La somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en repartent.</p>
                </div>

                <p><strong>Expression mathématique</strong> :</p>
                <p>$$\\sum I_{arrivant} = \\sum I_{repartant}$$</p>

                <p><strong>Conséquence</strong> : La charge électrique se conserve (elle ne s'accumule pas au nœud).</p>

                <div class="example">
                    <strong>📖 Exemple</strong> : Si $I_1 = 2A$ et $I_2 = 3A$ arrivent à un nœud, et que $I_3$ en repart, alors :<br>
                    $I_1 + I_2 = I_3$<br>
                    $I_3 = 2 + 3 = 5A$
                </div>

                <h3>IV. Intensité dans un Circuit en Série</h3>
                <p>Dans un circuit en série, l'intensité est la <strong>même</strong> en tout point du circuit.</p>
                <p>$$I_1 = I_2 = I_3 = ... = I$$</p>

                <h3>V. Ordres de Grandeur</h3>
                <ul>
                    <li><strong>LED</strong> : 10-20 mA</li>
                    <li><strong>Lampe de poche</strong> : 0,5-1 A</li>
                    <li><strong>Fer à repasser</strong> : 5-10 A</li>
                    <li><strong>Éclair</strong> : 10 000 - 200 000 A</li>
                </ul>

                <div class="analogy">
                    <strong>💧 Analogie : Débit d'Eau</strong><br>
                    L'intensité est comme le débit d'eau dans un tuyau. Plus le débit est grand, plus il passe d'eau par seconde. L'ampèremètre est comme un compteur d'eau qui mesure le débit.
                </div>
            `,
            summary: [
                "<strong>Intensité</strong> : $I = \\frac{Q}{t}$ (quantité de charge par unité de temps)",
                "<strong>Unité SI</strong> : Ampère (A), avec $1A = 1C/s$",
                "<strong>Mesure</strong> : Ampèremètre branché en SÉRIE",
                "<strong>Loi des nœuds</strong> : $\\sum I_{arrivant} = \\sum I_{repartant}$",
                "<strong>Circuit série</strong> : Intensité identique partout",
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
            ]
        },

        {
            id: 'elec-2s-04',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P4. Tension Électrique',
            story: "Alessandro Volta donne son nom à l'unité de tension électrique. La tension, ou différence de potentiel, est la 'pression électrique' qui pousse les charges à circuler dans un circuit, tout comme la différence de pression pousse l'eau dans un tuyau.",
            content: `
                <h3>I. Définition de la Tension</h3>
                <p>La <strong>tension électrique</strong> (ou différence de potentiel) entre deux points A et B d'un circuit est la différence d'énergie potentielle électrique par unité de charge entre ces deux points.</p>
                
                <p><strong>Notation</strong> : $U_{AB}$ ou $U$ (tension entre A et B)</p>
                <p><strong>Unité SI</strong> : Le Volt (V)</p>

                <h3>II. Mesure de la Tension</h3>
                
                <h4>Appareil de Mesure : Le Voltmètre</h4>
                <ul>
                    <li><strong>Symbole</strong> : (V) dans un cercle</li>
                    <li><strong>Branchement</strong> : En <strong>parallèle</strong> (dérivation) aux bornes du dipôle</li>
                    <li><strong>Borne COM</strong> : Côté borne (-) ou potentiel le plus bas</li>
                    <li><strong>Borne V</strong> : Côté borne (+) ou potentiel le plus haut</li>
                </ul>

                <div class="important">
                    <p><strong>⚠️ Règle Fondamentale</strong> : Le voltmètre se branche toujours en PARALLÈLE (aux bornes du dipôle).</p>
                </div>

                <h3>III. Loi des Mailles (2ème Loi de Kirchhoff)</h3>
                <p>Une <strong>maille</strong> est un chemin fermé dans un circuit électrique.</p>
                
                <div class="law-box">
                    <p><strong>Énoncé</strong> : La somme algébrique des tensions le long d'une maille est nulle.</p>
                </div>

                <p><strong>Expression mathématique</strong> :</p>
                <p>$$\\sum U = 0$$</p>

                <p><strong>Convention de signe</strong> :</p>
                <ul>
                    <li>Tension <strong>positive</strong> si on va dans le sens de la flèche de tension</li>
                    <li>Tension <strong>négative</strong> si on va à contre-sens de la flèche</li>
                </ul>

                <div class="example">
                    <strong>📖 Exemple</strong> : Dans une maille avec un générateur ($U_G$) et deux résistances ($U_1$ et $U_2$) :<br>
                    $U_G - U_1 - U_2 = 0$<br>
                    Donc : $U_G = U_1 + U_2$
                </div>

                <h3>IV. Tension dans un Circuit en Série</h3>
                <p>Dans un circuit en série, la tension du générateur se répartit entre les dipôles :</p>
                <p>$$U_{générateur} = U_1 + U_2 + U_3 + ...$$</p>

                <h3>V. Tension dans un Circuit en Parallèle</h3>
                <p>Dans un circuit en parallèle (dérivation), la tension est la <strong>même</strong> aux bornes de tous les dipôles :</p>
                <p>$$U_1 = U_2 = U_3 = ... = U_{générateur}$$</p>

                <h3>VI. Ordres de Grandeur</h3>
                <ul>
                    <li><strong>Pile AA</strong> : 1,5 V</li>
                    <li><strong>Batterie de voiture</strong> : 12 V</li>
                    <li><strong>Prise domestique (Sénégal)</strong> : 220 V</li>
                    <li><strong>Ligne haute tension</strong> : 400 000 V</li>
                    <li><strong>Éclair</strong> : 100 millions de V</li>
                </ul>

                <div class="analogy">
                    <strong>💧 Analogie : Pression d'Eau</strong><br>
                    La tension est comme la différence de pression dans un tuyau. Plus la différence de pression est grande, plus l'eau circule vite. Le voltmètre est comme un manomètre qui mesure la pression.
                </div>
            `,
            summary: [
                "<strong>Tension</strong> : Différence de potentiel électrique entre deux points",
                "<strong>Unité SI</strong> : Volt (V)",
                "<strong>Mesure</strong> : Voltmètre branché en PARALLÈLE",
                "<strong>Loi des mailles</strong> : $\\sum U = 0$ dans une maille fermée",
                "<strong>Circuit série</strong> : $U_{total} = U_1 + U_2 + ...$",
                "<strong>Circuit parallèle</strong> : $U_1 = U_2 = ... = U_{générateur}$"
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
            ]
        },

        {
            id: 'elec-2s-05',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P5. Dipôles Passifs',
            story: "Georg Simon Ohm découvre en 1827 la relation fondamentale entre tension et intensité dans un conducteur. Cette loi, d'une simplicité remarquable, est la pierre angulaire de l'électricité et porte son nom : la loi d'Ohm.",
            content: `
                <h3>I. Définition d'un Dipôle Passif</h3>
                <p>Un <strong>dipôle passif</strong> est un composant électrique qui ne peut que consommer de l'énergie électrique (il ne peut pas en fournir).</p>
                
                <p><strong>Exemples</strong> : Résistance, lampe, moteur (en fonctionnement normal)</p>

                <h3>II. La Résistance Électrique</h3>
                
                <h4>1. Définition</h4>
                <p>La <strong>résistance électrique</strong> est la propriété d'un conducteur à s'opposer au passage du courant électrique.</p>
                
                <p><strong>Symbole</strong> : Rectangle ou zigzag</p>
                <p><strong>Unité SI</strong> : L'Ohm (Ω)</p>

                <h4>2. Loi d'Ohm</h4>
                <div class="law-box">
                    <p><strong>Énoncé</strong> : Pour un conducteur ohmique, la tension à ses bornes est proportionnelle à l'intensité qui le traverse.</p>
                </div>

                <p><strong>Expression mathématique</strong> :</p>
                <p>$$U = R \\times I$$</p>

                <p>Où :</p>
                <ul>
                    <li>$U$ : Tension aux bornes (en Volt, V)</li>
                    <li>$R$ : Résistance (en Ohm, Ω)</li>
                    <li>$I$ : Intensité du courant (en Ampère, A)</li>
                </ul>

                <p><strong>Formes dérivées</strong> :</p>
                <p>$$R = \\frac{U}{I} \\quad \\text{et} \\quad I = \\frac{U}{R}$$</p>

                <h4>3. Caractéristique d'un Conducteur Ohmique</h4>
                <p>La caractéristique $U = f(I)$ d'un conducteur ohmique est une <strong>droite passant par l'origine</strong>.</p>
                <p>La pente de cette droite est égale à la résistance $R$.</p>

                <h3>III. Association de Résistances</h3>

                <h4>1. Association en Série</h4>
                <p>Résistances branchées les unes à la suite des autres.</p>
                <p><strong>Résistance équivalente</strong> :</p>
                <p>$$R_{eq} = R_1 + R_2 + R_3 + ...$$</p>

                <p><strong>Propriétés</strong> :</p>
                <ul>
                    <li>Même intensité dans toutes les résistances</li>
                    <li>$R_{eq}$ est plus grande que chaque résistance</li>
                </ul>

                <h4>2. Association en Parallèle (Dérivation)</h4>
                <p>Résistances branchées entre les mêmes points.</p>
                <p><strong>Résistance équivalente</strong> :</p>
                <p>$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + ...$$</p>

                <p><strong>Cas particulier</strong> (2 résistances) :</p>
                <p>$$R_{eq} = \\frac{R_1 \\times R_2}{R_1 + R_2}$$</p>

                <p><strong>Propriétés</strong> :</p>
                <ul>
                    <li>Même tension aux bornes de toutes les résistances</li>
                    <li>$R_{eq}$ est plus petite que la plus petite résistance</li>
                </ul>

                <h3>IV. Conductance</h3>
                <p>La <strong>conductance</strong> $G$ est l'inverse de la résistance :</p>
                <p>$$G = \\frac{1}{R}$$</p>
                <p><strong>Unité SI</strong> : Le Siemens (S)</p>

                <h3>V. Puissance Dissipée par Effet Joule</h3>
                <p>Une résistance traversée par un courant s'échauffe : c'est l'<strong>effet Joule</strong>.</p>
                <p><strong>Puissance dissipée</strong> :</p>
                <p>$$P = U \\times I = R \\times I^2 = \\frac{U^2}{R}$$</p>
                <p><strong>Unité</strong> : Watt (W)</p>

                <p><strong>Énergie dissipée</strong> :</p>
                <p>$$E = P \\times t$$</p>
                <p><strong>Unité</strong> : Joule (J) ou kWh</p>

                <div class="example">
                    <strong>📖 Exemple</strong> : Une résistance de 10Ω est parcourue par un courant de 2A.<br>
                    - Tension : $U = R \\times I = 10 \\times 2 = 20V$<br>
                    - Puissance : $P = R \\times I^2 = 10 \\times 4 = 40W$
                </div>

                <div class="analogy">
                    <strong>🚰 Analogie : Robinet</strong><br>
                    La résistance est comme un robinet partiellement fermé. Plus il est fermé (grande résistance), moins l'eau (courant) passe. La pression (tension) doit être plus grande pour faire passer le même débit.
                </div>
            `,
            summary: [
                "<strong>Loi d'Ohm</strong> : $U = R \\times I$ (pour un conducteur ohmique)",
                "<strong>Unité de résistance</strong> : Ohm (Ω)",
                "<strong>Série</strong> : $R_{eq} = R_1 + R_2 + ...$",
                "<strong>Parallèle</strong> : $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...$",
                "<strong>Puissance dissipée</strong> : $P = U \\times I = RI^2 = \\frac{U^2}{R}$",
                "<strong>Effet Joule</strong> : Échauffement d'une résistance"
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
            ]
        }

        ,
        {
            id: 'elec-2s-06',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P6. Dipôles Actifs',
            story: "Contrairement aux résistances qui consomment bêtement de l'énergie, les dipôles actifs sont les 'moteurs' du circuit. Piles, batteries, panneaux solaires : ils convertissent une autre forme d'énergie (chimique, lumineuse...) en énergie électrique.",
            content: `
                <h3>I. Définition</h3>
                <p>Un <strong>dipôle actif</strong> est un générateur capable de fournir de l'énergie électrique au circuit de manière permanente.</p>
                <p><strong>Convention générateur</strong> : Le courant $I$ et la tension $U$ sont fléchés dans le <strong>même sens</strong>.</p>

                <h3>II. Caractéristiques d'un Générateur Linéaire</h3>
                <p>Un générateur réel est modélisé par l'association en série d'une source de tension idéale (Force Électromotrice $E$) et d'une résistance interne $r$.</p>

                <h4>1. Loi d'Ohm pour un Générateur</h4>
                <div class="law-box">
                    <p><strong>Énoncé</strong> : La tension aux bornes d'un générateur est égale à sa force électromotrice moins la chute de tension due à sa résistance interne.</p>
                </div>
                <p><strong>Expression mathématique</strong> :</p>
                <p>$$U_{PN} = E - r \\times I$$</p>
                
                <p>Où :</p>
                <ul>
                    <li>$U_{PN}$ : Tension aux bornes (V)</li>
                    <li>$E$ : Force Électromotrice (f.é.m) en Volts. C'est la tension à vide (quand $I=0$).</li>
                    <li>$r$ : Résistance interne en Ohms (Ω).</li>
                    <li>$I$ : Intensité du courant débité (A).</li>
                </ul>

                <h4>2. Courant de Court-Circuit</h4>
                <p>Si on relie directement les bornes P et N ($U=0$), le courant est maximal :</p>
                <p>$$I_{cc} = \\frac{E}{r}$$</p>
                <p><strong>⚠️ Danger</strong> : Ce courant fort peut détruire le générateur par échauffement.</p>

                <h3>III. Bilan Énergétique</h3>
                <p>En multipliant la loi d'Ohm par $I$, on obtient le bilan de puissance :</p>
                <p>$$U \\times I = E \\times I - r \\times I^2$$</p>
                
                <ul>
                    <li>$E \\times I$ : Puissance totale engendrée (transformée en électrique).</li>
                    <li>$U \\times I$ : Puissance utile (disponible pour le circuit extérieur).</li>
                    <li>$r \\times I^2$ : Puissance dissipée en chaleur (pertes par effet Joule).</li>
                </ul>

                <h4>Rendement</h4>
                <p>$$\\eta = \\frac{P_{utile}}{P_{totale}} = \\frac{U \\times I}{E \\times I} = \\frac{U}{E}$$</p>

                <div class="analogy">
                    <strong>🔋 Analogie : La Pompe à Eau</strong><br>
                    Le générateur est comme une pompe. $E$ est la pression maximale qu'elle peut fournir. $r$ représente les frottements internes de l'eau dans la pompe. Quand l'eau coule vide ($I$ grand), la pression de sortie ($U$) baisse un peu à cause de ces frottements.
                </div>
            `,
            summary: [
                "<strong>Loi d'Ohm générateur</strong> : $U = E - rI$",
                "<strong>f.é.m ($E$)</strong> : Tension à vide (caractéristique intrinsèque)",
                "<strong>Résistance interne ($r$)</strong> : Cause des pertes d'énergie",
                "<strong>Bilan</strong> : $P_{electrique} = P_{utile} + P_{thermique}$",
                "<strong>Court-circuit</strong> : $I_{cc} = E/r$ (Dangereux)"
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
            ]
        },

        {
            id: 'elec-2s-07',
            part: 'Première Partie : Électricité et Électronique',
            title: 'P7. Amplificateur Opérationnel (AOP)',
            story: "L'AOP est le couteau suisse de l'électronique analogique. C'est une puce à 8 pattes contenant des dizaines de transistors. Il peut additionner, soustraire, intégrer... et surtout amplifier des signaux, d'où son nom.",
            content: `
                <h3>I. Présentation de l'AOP</h3>
                <p>C'est un composant actif à deux entrées et une sortie.</p>
                <ul>
                    <li><strong>Entrée Inverseuse (-)</strong> ($v_-$)</li>
                    <li><strong>Entrée Non-Inverseuse (+)</strong> ($v_+$)</li>
                    <li><strong>Sortie (S)</strong> ($v_s$)</li>
                    <li><strong>Alimentation</strong> : Nécessite une alim symétrique $+V_{CC}$ et $-V_{CC}$ (ex: +15V/-15V).</li>
                </ul>

                <h3>II. Caractéristiques de l'AOP Idéal</h3>
                <ul>
                    <li><strong>Courants d'entrée nuls</strong> : $i_+ = i_- = 0$ (Impédance d'entrée infinie).</li>
                    <li><strong>Gain infini</strong> en boucle ouverte (l'AOP amplifie énormément la différence entre + et -).</li>
                </ul>

                <h3>III. Régimes de Fonctionnement</h3>
                
                <h4>1. Régime Saturé (Comparateur)</h4>
                <p>Pas de boucle de retour (feedback) de la sortie vers l'entrée -.</p>
                <ul>
                    <li>Si $v_+ > v_-$, alors $v_s = +V_{sat}$ (proche de $+V_{CC}$)</li>
                    <li>Si $v_+ < v_-$, alors $v_s = -V_{sat}$ (proche de $-V_{CC}$)</li>
                </ul>

                <h4>2. Régime Linéaire (Amplificateur)</h4>
                <p>Il y a une boucle de retour (contre-réaction) de la sortie vers l'entrée -.</p>
                <div class="important">
                    <p><strong>Loi fondamentale en régime linéaire</strong> : La tension entre les entrées est nulle.</p>
                    <p>$$\\epsilon = v_+ - v_- = 0 \\Rightarrow v_+ = v_-$$</p>
                </div>

                <h3>IV. Montages Fondamentaux</h3>

                <h4>1. Amplificateur Inverseur</h4>
                <p>Le signal d'entrée $U_e$ arrive sur l'entrée (-) via $R_1$. L'entrée (+) est à la masse.</p>
                <p><strong>Gain en tension</strong> :</p>
                <p>$$A_v = \\frac{U_s}{U_e} = -\\frac{R_2}{R_1}$$</p>
                <p>Le signal est amplifié et inversé (signe -).</p>

                <h4>2. Amplificateur Non-Inverseur</h4>
                <p>Le signal d'entrée $U_e$ arrive sur l'entrée (+).</p>
                <p><strong>Gain en tension</strong> :</p>
                <p>$$A_v = \\frac{U_s}{U_e} = 1 + \\frac{R_2}{R_1}$$</p>
                <p>Le signal est amplifié sans inversion.</p>

                <h4>3. Suiveur de Tension</h4>
                <p>Cas particulier du non-inverseur où $R_2=0$ et $R_1=\\infty$.</p>
                <p>$$U_s = U_e$$</p>
                <p>Sert à isoler deux parties d'un circuit (adaptation d'impédance).</p>

                <div class="analogy">
                    <strong>🔊 Analogie : Le Mégaphone</strong><br>
                    L'AOP est comme un mégaphone. Il prend un petit son (signal électrique faible) et utilise l'énergie de sa batterie (alimentation) pour produire un son fort (signal amplifié). En montage inverseur, c'est comme s'il répétait votre phrase à l'envers !
                </div>
            `,
            summary: [
                "<strong>Régime linéaire</strong> : Contre-réaction sur l'entrée (-) $\\Rightarrow v_+ = v_-$",
                "<strong>Régime saturé</strong> : Pas de contre-réaction $\\Rightarrow v_s = \\pm V_{sat}$",
                "<strong>Amplificateur Inverseur</strong> : $G = -R_2/R_1$",
                "<strong>Amplificateur Non-Inverseur</strong> : $G = 1 + R_2/R_1$",
                "<strong>Suiveur</strong> : $U_s = U_e$ (Isolateur)"
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
            ]
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
                <h3>I. Relativité du Mouvement</h3>
                <p>On ne peut parler de mouvement que par rapport à un <strong>référentiel</strong> (solide de référence).</p>
                <ul>
                    <li>Le passager est immobile par rapport au train.</li>
                    <li>Le passager est en mouvement par rapport au sol.</li>
                </ul>

                <h3>II. La Trajectoire</h3>
                <p>C'est l'ensemble des positions successives occupées par le mobile au cours du temps.</p>
                <ul>
                    <li><strong>Rectiligne</strong> : Une droite.</li>
                    <li><strong>Curviligne</strong> : Une courbe quelconque.</li>
                    <li><strong>Circulaire</strong> : Un cercle ou un arc de cercle.</li>
                </ul>

                <h3>III. La Vitesse</h3>
                <h4>1. Vitesse Moyenne</h4>
                <p>$$V_m = \\frac{d}{t}$$</p>
                <p>Où $d$ est la distance parcourue (m) et $t$ la durée (s).</p>
                
                <h4>2. Vecteur Vitesse Instantanée</h4>
                <p>À un instant $t$, le vecteur vitesse $\\vec{v}$ est tangent à la trajectoire au point M.</p>
                <ul>
                    <li><strong>Point d'application</strong> : Le mobile M.</li>
                    <li><strong>Direction</strong> : Tangente à la trajectoire.</li>
                    <li><strong>Sens</strong> : Celui du mouvement.</li>
                    <li><strong>Norme</strong> : Indiquée par le compteur de vitesse.</li>
                </ul>

                <div class="analogy">
                    <strong>📸 Analogie : La Photo Floue</strong><br>
                    La vitesse moyenne est comme dire "J'ai fait Dakar-Thiès en 1h". La vitesse instantanée est celle lue sur le compteur à un moment précis (ex: lors d'un dépassement).
                </div>
            `,
            summary: [
                "<strong>Mouvement relatif</strong> : Dépend du référentiel choisi.",
                "<strong>Trajectoire</strong> : Ligne décrite par le mobile.",
                "<strong>Vitesse moyenne</strong> : $V_m = d/t$.",
                "<strong>Vecteur vitesse</strong> : Toujours tangent à la trajectoire."
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
            ]
        },

        {
            id: 'meca-2s-09',
            part: 'Deuxième Partie : Mécanique',
            title: 'P9. Généralités sur les Forces',
            story: "Une force est invisible, mais on voit ses effets. Elle peut mettre en mouvement un ballon, déformer un ressort ou maintenir un pont. Isaac Newton a été le premier à formaliser ce concept comme une interaction.",
            content: `
                <h3>I. Définition et Effets</h3>
                <p>Une <strong>force</strong> modélise une action mécanique exercée par un objet sur un autre.</p>
                <p><strong>Effets possibles</strong> :</p>
                <ol>
                    <li>Mettre en mouvement ou modifier le mouvement (Effet dynamique).</li>
                    <li>Déformer un corps (Effet statique).</li>
                    <li>Maintenir en équilibre.</li>
                </ol>

                <h3>II. Caractéristiques Vectorielles</h3>
                <p>Une force est représentée par un vecteur force $\\vec{F}$ :</p>
                <ul>
                    <li><strong>Point d'application</strong> : Point où s'exerce l'action.</li>
                    <li><strong>Direction (Droite d'action)</strong> : La ligne selon laquelle la force agit.</li>
                    <li><strong>Sens</strong> : Vers où l'action pousse ou tire.</li>
                    <li><strong>Intensité (Norme)</strong> : Grandeur mesurée en Newton (N).</li>
                </ul>

                <h3>III. Mesure</h3>
                <p>On mesure l'intensité d'une force avec un <strong>Dynamomètre</strong> (basé sur l'allongement d'un ressort).</p>

                <div class="analogy">
                    <strong>🏹 Analogie : L'Archer</strong><br>
                    Quand un archer tire sur la corde : la direction est celle de la flèche, le sens est vers l'arrière, le point d'application est ses doigts, et l'intensité dépend de sa force musculaire.
                </div>
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
            ]
        },

        {
            id: 'meca-2s-10',
            part: 'Deuxième Partie : Mécanique',
            title: 'P10. Le Poids et la Masse',
            story: "Sur la Lune, les astronautes sautent comme des kangourous. Ont-ils perdu de la masse ? Non, ils ont perdu du poids ! La confusion entre ces deux notions est fréquente, mais en physique, la rigueur est de mise.",
            content: `
                <h3>I. Distinction Fondamentale</h3>
                
                <h4>1. La Masse ($m$)</h4>
                <p>C'est la quantité de matière contenue dans un corps. Elle mesure aussi son <strong>inertie</strong> (résistance au changement de mouvement).</p>
                <ul>
                    <li><strong>Unité</strong> : Kilogramme (kg).</li>
                    <li><strong>Propriété</strong> : Invariable (la même sur Terre, sur la Lune, ou dans l'espace).</li>
                    <li><strong>Mesure</strong> : Balance.</li>
                </ul>

                <h4>2. Le Poids ($\\vec{P}$)</h4>
                <p>C'est la force d'attraction gravitationnelle exercée par la Terre (ou un astre) sur un objet.</p>
                <ul>
                    <li><strong>Unité</strong> : Newton (N).</li>
                    <li><strong>Propriété</strong> : Variable selon le lieu (altitude, latitude, planète).</li>
                    <li><strong>Mesure</strong> : Dynamomètre.</li>
                </ul>

                <h3>II. Relation entre Poids et Masse</h3>
                <div class="law-box">
                    <p>Le poids est proportionnel à la masse :</p>
                    <p>$$\\vec{P} = m \\times \\vec{g}$$</p>
                </div>
                
                <p>Où $\\vec{g}$ est le vecteur champ de pesanteur (Intensité de la pesanteur).</p>
                <ul>
                    <li>Sur Terre : $g \\approx 9,81 \\, N/kg$.</li>
                    <li>Sur la Lune : $g \\approx 1,6 \\, N/kg$ (6 fois moins).</li>
                </ul>

                <h3>III. Caractéristiques du Vecteur Poids $\\vec{P}$</h3>
                <ul>
                    <li><strong>Point d'application</strong> : Centre de gravité $G$.</li>
                    <li><strong>Direction</strong> : Verticale du lieu (fil à plomb).</li>
                    <li><strong>Sens</strong> : Vers le bas (vers le centre de la Terre).</li>
                    <li><strong>Intensité</strong> : $P = mg$.</li>
                </ul>

                <div class="analogy">
                    <strong>🏋️ Analogie : L'Haltère Spatiale</strong><br>
                    Une haltère de 100kg est très difficile à soulever sur Terre (Poids énorme). Dans l'espace, elle ne pèse rien (Poids nul), mais elle est toujours aussi difficile à mettre en mouvement si on la pousse (Masse/Inertie inchangée). Si elle vous percute, ça fera tout aussi mal !
                </div>
            `,
            summary: [
                "<strong>Masse ($m$)</strong> : Quantité de matière (kg), Invariable.",
                "<strong>Poids ($P$)</strong> : Force d'attraction (N), Variable.",
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
            ]
        },

        {
            id: 'meca-2s-11',
            part: 'Deuxième Partie : Mécanique',
            title: 'P11. Équilibre soumis à 3 forces non parallèles',
            story: "Comment tient un hamac ? Ou une enseigne suspendue ? C'est une histoire d'équilibre vectoriel. Trois forces qui tirent dans des directions différentes peuvent s'annuler parfaitement.",
            content: `
                <h3>I. Conditions d'Équilibre</h3>
                <p>Un solide soumis à trois forces $\\vec{F_1}, \\vec{F_2}, \\vec{F_3}$ non parallèles est en équilibre si et seulement si :</p>
                
                <h4>1. Condition de Coplanarité</h4>
                <p>Les lignes d'action des trois forces doivent être situées dans un <strong>même plan</strong>.</p>

                <h4>2. Condition de Concourance</h4>
                <p>Les lignes d'action des trois forces doivent être <strong>concourantes</strong> (se couper en un même point I). Sinon, le solide tournerait.</p>

                <h4>3. Condition Vectorielle</h4>
                <div class="law-box">
                    <p>La somme vectorielle des forces est nulle (Polygone des forces fermé).</p>
                    <p>$$\\vec{F_1} + \\vec{F_2} + \\vec{F_3} = \\vec{0}$$</p>
                </div>

                <h3>II. Méthodes de Résolution</h3>
                
                <h4>1. Méthode Géométrique (Triangle des Forces)</h4>
                <p>Puisque la somme est nulle, si on met les flèches bout à bout, on forme un triangle fermé. On peut alors utiliser la trigonométrie (sinus, cosinus, Pythagore) ou l'échelle graphique pour trouver les intensités inconnues.</p>

                <h4>2. Méthode Analytique (Projection)</h4>
                <p>On choisit un repère $(O, x, y)$ et on projette la relation vectorielle :</p>
                <ul>
                    <li>Sur l'axe x : $F_{1x} + F_{2x} + F_{3x} = 0$</li>
                    <li>Sur l'axe y : $F_{1y} + F_{2y} + F_{3y} = 0$</li>
                </ul>
                <p>On résout ensuite le système d'équations.</p>
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
            ]
        },

        {
            id: 'meca-2s-12',
            part: 'Deuxième Partie : Mécanique',
            title: 'P12. Équilibre mobile autour d\'un axe',
            story: "Archimède a dit : 'Donnez-moi un point d'appui et je soulèverai le monde'. Il parlait de l'effet de levier. Une petite force peut vaincre une grande résistance si elle est appliquée loin de l'axe de rotation.",
            content: `
                <h3>I. Effet de Rotation et Moment d'une Force</h3>
                <p>L'efficacité d'une force pour faire tourner un objet dépend de son intensité mais aussi de sa distance à l'axe.</p>
                
                <h4>1. Définition du Moment</h4>
                <p>Le <strong>moment</strong> d'une force $\\vec{F}$ par rapport à un axe de rotation $\\Delta$ est :</p>
                <p>$$\\mathcal{M}_{\\Delta}(\\vec{F}) = \\pm F \\times d$$</p>
                
                <p>Où :</p>
                <ul>
                    <li>$F$ : Intensité de la force (N).</li>
                    <li>$d$ : <strong>Bras de levier</strong> (Distance orthogonale entre l'axe et la droite d'action de la force) en mètres (m).</li>
                    <li>$\\pm$ : Signe dépendant du sens de rotation choisi (positif ou négatif).</li>
                </ul>
                <p><strong>Unité</strong> : Newton-mètre (N·m)</p>

                <h3>II. Théorème des Moments</h3>
                <div class="law-box">
                    <p><strong>Condition d'équilibre</strong> : Un solide mobile autour d'un axe fixe est en équilibre si la somme algébrique des moments de toutes les forces appliquées est nulle.</p>
                    <p>$$\\sum \\mathcal{M}_{\\Delta}(\\vec{F}) = 0$$</p>
                </div>
                
                <p>Autrement dit : Somme des moments "Moteurs" = Somme des moments "Résistants".</p>

                <h3>III. Couple de Forces</h3>
                <p>Un <strong>couple</strong> est un ensemble de deux forces parallèles, de sens contraires et de même intensité, n'ayant pas la même droite d'action.</p>
                <p>Elles provoquent une rotation pure (comme tourner un volant ou un bouchon).</p>
                <p><strong>Moment du couple</strong> : $\\mathcal{M} = F \\times D$ (où D est la distance entre les deux forces).</p>

                <div class="analogy">
                    <strong>🚪 Analogie : La Porte</strong><br>
                    Essayez de pousser une porte près des gonds (charnières) : c'est très dur (bras de levier $d$ petit). Poussez près de la poignée : c'est facile (bras de levier $d$ grand). Pour le même moment (effet de rotation), il faut moins de force si $d$ est grand.
                </div>
            `,
            summary: [
                "<strong>Moment</strong> : $\\mathcal{M} = F \\times d$ (unité N·m).",
                "<strong>Bras de levier</strong> : Distance perpendiculaire axe-force.",
                "<strong>Théorème des moments</strong> : $\\sum \\mathcal{M} = 0$ à l'équilibre.",
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
            ]
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
                <h3>I. Sources et Milieux de Propagation</h3>
                
                <h4>1. Sources de Lumière</h4>
                <ul>
                    <li><strong>Sources primaires</strong> : Produisent leur propre lumière (Soleil, lampe, feu).</li>
                    <li><strong>Sources secondaires</strong> : Diffusent la lumière reçue (Lune, mur blanc, miroir).</li>
                </ul>

                <h4>2. Milieux de Propagation</h4>
                <ul>
                    <li><strong>Transparent</strong> : Laisse passer la lumière sans la déformer (Verre, Air, Vide). On voit net à travers.</li>
                    <li><strong>Translucide</strong> : Laisse passer la lumière mais la diffuse (Verre dépoli, papier calque). On voit flou.</li>
                    <li><strong>Opaque</strong> : Ne laisse pas passer la lumière (Bois, Mur).</li>
                </ul>

                <h3>II. Principe de Propagation Rectiligne</h3>
                <div class="law-box">
                    <p><strong>Énoncé</strong> : Dans un milieu transparent et homogène, la lumière se propage en ligne droite.</p>
                </div>
                <p>On modélise le trajet de la lumière par un <strong>rayon lumineux</strong> (une droite fléchée).</p>
                <p><strong>Vitesse de la lumière</strong> (célérité) dans le vide : $c \\approx 300~000 \\text{ km/s}$ ($3 \\times 10^8 \\text{ m/s}$).</p>

                <h3>III. Ombre et Pénombre</h3>
                <p>Lorsqu'une source éclaire un objet opaque :</p>
                <ul>
                    <li><strong>Ombre propre</strong> : Partie non éclairée de l'objet.</li>
                    <li><strong>Ombre portée</strong> : Zone sombre sur l'écran derrière l'objet.</li>
                    <li><strong>Cône d'ombre</strong> : Espace sombre entre l'objet et l'écran.</li>
                </ul>
                <p>Si la source est étendue, une zone de transition apparaît : la <strong>pénombre</strong>.</p>

                <div class="example">
                    <strong>🌑 Exemple : Les Éclipses</strong><br>
                    Une éclipse de Soleil se produit lorsque la Lune passe entre la Terre et le Soleil. La Terre traverse le cône d'ombre de la Lune. C'est une preuve spectaculaire de la propagation rectiligne !
                </div>
            `,
            summary: [
                "<strong>Milieu homogène transparent</strong> : Propagation en ligne droite.",
                "<strong>Vitesse (c)</strong> : $3 \\times 10^8$ m/s.",
                "<strong>Rayon lumineux</strong> : Modèle géométrique.",
                "<strong>Ombre/Pénombre</strong> : Conséquence de la propagation rectiligne."
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
            ]
        },

        {
            id: 'opt-2s-14',
            part: 'Troisième Partie : Optique',
            title: 'P14. Réflexion de la Lumière',
            story: "Narcisse est tombé amoureux de son reflet dans l'eau. Depuis l'antiquité, les miroirs fascinent. Mais comment la lumière rebondit-elle exactement ? Les lois sont aussi précises qu'un coup de billard.",
            content: `
                <h3>I. Phénomène de Réflexion</h3>
                <p>La lumière rencontre une surface et revient dans son milieu d'origine.</p>
                <ul>
                    <li><strong>Réflexion spéculaire</strong> : Sur une surface lisse (miroir), les rayons restent parallèles (image nette).</li>
                    <li><strong>Réflexion diffuse</strong> : Sur une surface rugueuse (mur), les rayons partent dans tous les sens (pas d'image).</li>
                </ul>

                <h3>II. Lois de la Réflexion (Snell-Descartes)</h3>
                <p>Soit un rayon incident arrivant sur un miroir plan :</p>
                <ul>
                    <li><strong>Normale (N)</strong> : Droite perpendiculaire au miroir au point d'incidence I.</li>
                    <li><strong>Angle d'incidence ($i$)</strong> : Angle entre le rayon incident et la normale.</li>
                    <li><strong>Angle de réflexion ($r$)</strong> : Angle entre le rayon réfléchi et la normale.</li>
                </ul>

                <div class="law-box">
                    <p><strong>1ère Loi</strong> : Le rayon réfléchi est dans le plan d'incidence (défini par le rayon incident et la normale).</p>
                    <p><strong>2ème Loi</strong> : L'angle de réflexion est égal à l'angle d'incidence.</p>
                    <p>$$i = r$$</p>
                </div>

                <h3>III. Image par un Miroir Plan</h3>
                <p>L'image A' d'un objet A donnée par un miroir plan est :</p>
                <ul>
                    <li><strong>Virtuelle</strong> : Elle semble être derrière le miroir (on ne peut pas la projeter sur un écran).</li>
                    <li><strong>Symétrique</strong> de l'objet par rapport au plan du miroir.</li>
                    <li><strong>De même taille</strong> que l'objet.</li>
                </ul>

                <div class="analogy">
                    <strong>🎱 Analogie : Le Billard</strong><br>
                    Si vous lancez une boule de billard contre la bande sans effet, elle rebondit avec le même angle. La lumière fait exactement pareil sur un miroir. L'angle d'arrivée égale l'angle de départ.
                </div>
            `,
            summary: [
                "<strong>Réflexion</strong> : Retour de la lumière dans le même milieu.",
                "<strong>Lois</strong> : $i = r$ (angles par rapport à la normale).",
                "<strong>Image</strong> : Virtuelle et symétrique.",
                "<strong>Miroir Plan</strong> : Surface réfléchissante plane."
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
            ]
        },

        {
            id: 'opt-2s-15',
            part: 'Troisième Partie : Optique',
            title: 'P15. Réfraction et Dispersion',
            story: "Mettez une paille dans un verre d'eau : elle semble brisée. C'est la réfraction ! La lumière change de vitesse en changeant de milieu, ce qui la fait dévier de sa trajectoire, comme une voiture qui mord sur le bas-côté.",
            content: `
                <h3>I. La Réfraction de la Lumière</h3>
                <p>C'est le changement de direction de la lumière lorsqu'elle traverse la surface de séparation (dioptre) entre deux milieux transparents différents.</p>

                <h4>Indice de Réfraction ($n$)</h4>
                <p>Il caractérise un milieu transparent. C'est le rapport entre la vitesse de la lumière dans le vide ($c$) et dans le milieu ($v$).</p>
                <p>$$n = \\frac{c}{v}$$</p>
                <p>Comme $v < c$, on a toujours $n > 1$. (Air : $n \\approx 1$, Eau : $n \\approx 1,33$, Verre : $n \\approx 1,5$).</p>

                <h3>II. Lois de la Réfraction (Snell-Descartes)</h3>
                <ul>
                    <li>Milieu 1 (indice $n_1$) $\\rightarrow$ Milieu 2 (indice $n_2$).</li>
                    <li>Angle d'incidence $i_1$, Angle de réfraction $i_2$.</li>
                </ul>

                <div class="law-box">
                    <p><strong>1ère Loi</strong> : Le rayon réfracté est dans le plan d'incidence.</p>
                    <p><strong>2ème Loi</strong> : Il existe une relation constante entre les sinus des angles :</p>
                    <p>$$n_1 \\times \\sin(i_1) = n_2 \\times \\sin(i_2)$$</p>
                </div>

                <h4>Conséquences :</h4>
                <ul>
                    <li>Si on passe d'un milieu moins réfringent à plus réfringent ($n_1 < n_2$, ex: air vers eau) : Le rayon se rapproche de la normale ($i_2 < i_1$).</li>
                    <li>Si on passe d'un milieu plus réfringent à moins réfringent ($n_1 > n_2$, ex: eau vers air) : Le rayon s'écarte de la normale ($i_2 > i_1$).</li>
                </ul>

                <h3>III. Réflexion Totale</h3>
                <p>Si $n_1 > n_2$ (ex: eau vers air), il existe un angle d'incidence limite $i_{lim}$.</p>
                <p>Si $i_1 > i_{lim}$, la lumière ne sort plus du tout : elle est <strong>totalement réfléchie</strong> vers l'intérieur.</p>
                <p><strong>Application</strong> : Fibres optiques (internet très haut débit).</p>

                <h3>IV. Dispersion de la Lumière</h3>
                <p>La lumière blanche du Soleil est composée de toutes les couleurs (arc-en-ciel).</p>
                <p>L'indice de réfraction $n$ dépend légèrement de la couleur (longueur d'onde). Le bleu est plus dévié que le rouge.</p>
                <p>Un <strong>prisme</strong> sépare ces couleurs : c'est la <strong>dispersion</strong>.</p>

                <div class="analogy">
                    <strong>🏎️ Analogie : La Voiture dans la Boue</strong><br>
                    Imaginez une voiture arrivant de biais sur une route boueuse (milieu plus lent). La roue avant droite touche la boue en premier et ralentit, tandis que la gauche continue vite sur le bitume. Résultat : la voiture pivote et change de direction ! C'est exactement ce qui arrive à la lumière.
                </div>
            `,
            summary: [
                "<strong>Réfraction</strong> : Déviation au changement de milieu.",
                "<strong>Loi fondamentale</strong> : $n_1 \\sin(i_1) = n_2 \\sin(i_2)$.",
                "<strong>Indice ($n$)</strong> : $n = c/v$.",
                "<strong>Réflexion totale</strong> : Possible si $n_1 > n_2$ (bases de la fibre optique).",
                "<strong>Dispersion</strong> : Décomposition de la lumière blanche (prisme)."
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
            ]
        }
    ]
};
