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
            story: "La chimie du carbone est celle de la vie. Du plastique à l'ADN, le carbone est l'architecte des molécules complexes.",
            content: `
                <h3>1. L'élément Carbone</h3>
                <p>Le carbone ($Z=6$) est tétravalent : il forme toujours 4 liaisons covalentes. Il peut former des chaînes linéaires, ramifiées ou cycliques.</p>

                <h3>2. Analyse Élémentaire</h3>
                <p>Elle permet de déterminer la formule brute $C_x H_y O_z$ d'un composé.</p>
                <p>On brûle un échantillon et on dose le $CO_2$ et l'$H_2O$ produits.</p>
                <p>$$ \\%C = \\frac{12x}{M} \\times 100 $$</p>

                <h3>3. Isomérie</h3>
                <p>Des isomères ont la même formule brute mais des formules développées différentes (donc des propriétés différentes).</p>
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
            story: "Les hydrocarbures les plus simples. Le gaz naturel et l'essence en sont constitués.",
            content: `
                <h3>1. Formule Générale</h3>
                <p>Les alcanes sont des hydrocarbures saturés (liaisons simples uniquement) de formule :</p>
                <p>$$ C_n H_{2n+2} $$</p>

                <h3>2. Nomenclature (IUPAC)</h3>
                <ul>
                    <li>Chaîne principale la plus longue contenant les substituants.</li>
                    <li>Numérotation pour avoir les indices les plus petits.</li>
                    <li>Suffixe : <strong>-ane</strong>.</li>
                </ul>

                <h3>3. Propriétés Chimiques</h3>
                <p><strong>Combustion :</strong> $C_n H_{2n+2} + \\frac{3n+1}{2} O_2 \\rightarrow n CO_2 + (n+1) H_2O$.</p>
                <p><strong>Halogénation (Substitution) :</strong> Réaction avec $Cl_2$ ou $Br_2$ à la lumière (photochimique).</p>
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
            story: "L'insaturation change tout. La double ou triple liaison est un site de réactivité intense.",
            content: `
                <h3>1. Les Alcènes ($C=C$)</h3>
                <p>Hydrocarbures insaturés avec une double liaison. Formule : $C_n H_{2n}$.</p>
                <p><strong>Réactions d'addition :</strong> La double liaison s'ouvre pour fixer des atomes ($H_2$, $Cl_2$, $H_2O$ (hydratation)).</p>
                <p><strong>Polymérisation :</strong> Formation de plastiques (Polyéthylène, PVC) par addition successive.</p>

                <h3>2. Les Alcynes ($C \\equiv C$)</h3>
                <p>Hydrocarbures avec une triple liaison. Formule : $C_n H_{2n-2}$.</p>
                <p>L'acétylène ($C_2H_2$) est utilisé pour la soudure (flamme très chaude).</p>
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
            story: "Un cycle parfait, une stabilité exceptionnelle. Le benzène inaugure la famille des aromatiques.",
            content: `
                <h3>1. Structure du Benzène ($C_6H_6$)</h3>
                <p>Cycle hexagonal plan avec liaisons délocalisées (cercle au centre du cycle). Très stable grâce à la mésomérie.</p>

                <h3>2. Réactivité</h3>
                <p>Contrairement aux alcènes, le benzène préfère la <strong>substitution</strong> à l'addition.</p>
                <ul>
                    <li>Halogénation (avec catalyseur $FeBr_3$).</li>
                    <li>Nitration (avec acide nitrique et sulfurique).</li>
                    <li>Sulfonation.</li>
                </ul>
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
            story: "Ajoutons un atome d'oxygène. L'alcool, le parfum des fruits, l'odeur du formol... tout change.",
            content: `
                <h3>1. Les Alcools ($R-OH$)</h3>
                <p>Groupe hydroxyle. Classe : Primaire, Secondaire, Tertiaire selon le carbone porteur.</p>
                <p>Oxydation ménagée :</p>
                <ul>
                    <li>Alcool I $\\rightarrow$ Aldéhyde $\\rightarrow$ Acide Carboxylique.</li>
                    <li>Alcool II $\\rightarrow$ Cétone.</li>
                    <li>Alcool III $\\rightarrow$ Pas d'oxydation ménagée.</li>
                </ul>

                <h3>2. Composés Carbonylés</h3>
                <p>Aldéhydes ($R-CHO$) et Cétones ($R-CO-R'$).</p>
                <p>Tests : DNPH (précipité jaune pour les deux), Liqueur de Fehling (rouge brique pour Aldéhydes seulement).</p>
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
            story: "L'oxydoréduction est un échange d'électrons, comme l'acide-base est un échange de protons.",
            content: `
                <h3>1. Définitions</h3>
                <ul>
                    <li><strong>Oxydant (Ox) :</strong> Capteur d'électrons.</li>
                    <li><strong>Réducteur (Red) :</strong> Donneur d'électrons.</li>
                    <li>Demi-équation : $Ox + ne^- \\rightleftharpoons Red$.</li>
                </ul>

                <h3>2. Réaction d'Oxydoréduction</h3>
                <p>Transfert d'électrons entre l'oxydant d'un couple 1 et le réducteur d'un couple 2.</p>
                <p>$$ Ox_1 + Red_2 \\rightarrow Red_1 + Ox_2 $$</p>
            `,
            summary: [
                "Oxydation = Perte d'électrons.",
                "Réduction = Gain d'électrons.",
                "Moyen mnémotechnique : 'Oxydan<strong>ant</strong> prend <strong>tant</strong>'."
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
            story: "Qui est le plus fort ? Le fer rouille, l'or résiste. Il existe une hiérarchie dans la force des oxydants.",
            content: `
                <h3>1. Classification Qualitative</h3>
                <p>Règle du gamma ($\\\gamma$) : L'oxydant le plus fort réagit avec le réducteur le plus fort.</p>
                <p>Si $E^0(Ox_1/Red_1) > E^0(Ox_2/Red_2)$, alors réaction spontanée : $Ox_1 + Red_2$.</p>

                <h3>2. Classification Quantitative</h3>
                <p>On définit le Potentiel Standard d'oxydoréduction $E^0$ par rapport à l'électrode standard à hydrogène ($E^0(H^+/H_2) = 0.00 V$).</p>
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
            story: "Cela ne concerne pas que les métaux. Les ions permanganate, dichromate, ferreux... tout le monde joue.",
            content: `
                <h3>1. Couples complexes</h3>
                <p>Équilibrer des demi-équations en milieu acide ou basique.</p>
                <p>Exemple : $MnO_4^- / Mn^{2+}$ en milieu acide.</p>
                <p>$$ MnO_4^- + 8H^+ + 5e^- \\rightleftharpoons Mn^{2+} + 4H_2O $$</p>

                <h3>2. Dosages d'oxydoréduction</h3>
                <p>Utiliser une réaction d'oxydoréduction rapide et totale pour titrer une espèce (ex: Manganimétrie, Iodométrie).</p>
                <p>À l'équivalence : $\\frac{n(Ox_1)}{a} = \\frac{n(Red_2)}{b}$.</p>
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
            story: "Forcer la nature. Avec de l'énergie électrique, on peut inverser le sens spontané des réactions chimiques.",
            content: `
                <h3>1. Principe</h3>
                <p>L'électrolyse est une transformation forcée par un générateur.</p>
                <ul>
                    <li>Anode (+) : Oxydation (A.O. - Anode Oxydation).</li>
                    <li>Cathode (-) : Réduction (C.R. - Cathode Réduction).</li>
                </ul>

                <h3>2. Bilan Quantitatif (Loi de Faraday)</h3>
                <p>Quantité d'électricité $Q = I \\times t$.</p>
                <p>Nombre de moles d'électrons : $n(e^-) = \\frac{Q}{F}$ avec $F \\approx 96500 C/mol$.</p>
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
            content: `
                <h3>1. Réduction des oxydes métalliques</h3>
                <p>On utilise des réducteurs puissants à haute température (Carbone CO, Aluminium Al, Hydrogène H2).</p>
                <p>Exemple : Aluminothermie.</p>
                <p>$$ Fe_2O_3 + 2Al \\rightarrow 2Fe + Al_2O_3 $$</p>

                <h3>2. Combustion</h3>
                <p>C'est une oxydation brutale par le dioxygène de l'air.</p>
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
                <h3>1. Les Phosphates et Engrais</h3>
                <p>Ressource clé du Sénégal (Taïba). Transformation du phosphate tricalcique en acide phosphorique puis en engrais (DAP, NPK) pour l'agriculture.</p>

                <h3>2. Les Matières Plastiques</h3>
                <p>Synthèse, usage et impact environnemental (pollution, recyclage). Distinction Thermoplastiques / Thermodurcissables.</p>
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
