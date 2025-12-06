export const svtTsData = {
    id: 'svt-ts',
    title: 'SVT Terminale S',
    chapters: [
        // ==========================================
        // PARTIE 1 : NEUROPHYSIOLOGIE & MUSCLE
        // ==========================================
        {
            id: 'neuro-ts-01',
            part: 'Partie 1 : Relations avec le milieu',
            title: '1. Organisation du Système Nerveux',
            story: "Le cerveau humain est l'objet le plus complexe de l'univers connu. Avant de comprendre comment il pense, regardons comment il est câblé : de l'encéphale protégé par le crâne jusqu'aux nerfs qui parcourent tout le corps.",
            content: `
                <h3>1. L'Encéphale</h3>
                <p>Composé du cerveau (hémisphères), du cervelet et du tronc cérébral. C'est le centre de contrôle.</p>
                <h3>2. La Moelle Épinière</h3>
                <p>Cordon nerveux protégé par la colonne vertébrale. Elle transmet les infos et gère les réflexes.</p>
                <h3>3. Le Tissu Nerveux</h3>
                <p>Constitué de neurones (unités fonctionnelles) et de cellules gliales (soutien et nutrition). Le neurone possède un corps cellulaire, des dendrites et un axone.</p>
            `,
            summary: [
                "Système Nerveux Central (SNC) : Encéphale + Moelle épinière.",
                "Système Nerveux Périphérique (SNP) : Nerfs.",
                "Le neurone est une cellule spécialisée excitable et sécrétrice."
            ],
            exercises: [
                {
                    id: 'ex-org-1',
                    question: "Quel élément ne fait PAS partie de l'encéphale ?",
                    options: ["Cervelet", "Moelle épinière", "Tronc cérébral", "Cerveau"],
                    correctAnswer: 1,
                    explanation: "La moelle épinière fait suite au tronc cérébral mais ne fait pas partie de l'encéphale."
                }
            ]
        },
        {
            id: 'neuro-ts-02',
            part: 'Partie 1 : Relations avec le milieu',
            title: '2. L\'Influx Nerveux et la Synapse',
            story: "Comment une pensée devient-elle un mouvement ? C'est une histoire d'électricité et de chimie. L'influx court le long du nerf comme un courant, puis saute d'un neurone à l'autre grâce à des messagers chimiques.",
            content: `
                <h3>1. Potentiel de Repos (PR)</h3>
                <p>Au repos, l'intérieur du neurone est négatif par rapport à l'extérieur (-70mV). Maintenu par la pompe Na+/K+.</p>
                <h3>2. Potentiel d'Action (PA)</h3>
                <p>Inversion brusque de la polarité suite à une stimulation. Loi du "Tout ou Rien".</p>
                <h3>3. La Synapse</h3>
                <p>Zone de jonction entre deux neurones. L'arrivée du PA libère des neurotransmetteurs (ex: Acétylcholine) qui se fixent sur le neurone suivant.</p>
            `,
            summary: [
                "PA : Dépolarisation -> Repolarisation -> Hyperpolarisation.",
                "La synapse transforme un signal électrique en signal chimique.",
                "La fréquence des PA code l'intensité du message."
            ],
            exercises: [
                {
                    id: 'ex-influx-1',
                    question: "Que se passe-t-il si la stimulation est inférieure au seuil d'excitation ?",
                    options: ["Un petit PA", "Rien (pas de PA)", "Un PA lent", "Une hyperpolarisation"],
                    correctAnswer: 1,
                    explanation: "C'est la loi du Tout ou Rien : pas de PA si le seuil n'est pas atteint."
                }
            ]
        },
        {
            id: 'neuro-ts-03',
            part: 'Partie 1 : Relations avec le milieu',
            title: '3. Activité Musculaire',
            story: "Le muscle est un moteur biologique capable de convertir l'énergie chimique (ATP) en énergie mécanique (mouvement). Tout cela grâce au glissement de minuscules filaments les uns contre les autres.",
            content: `
                <h3>1. Structure du muscle strié</h3>
                <p>Composé de faisceaux de fibres musculaires (cellules géantes). Chaque fibre contient des myofibrilles formées de sarcomères.</p>
                <h3>2. Le Sarcomère</h3>
                <p>Unité contractile. Alternance de filaments fins (Actine) et épais (Myosine).</p>
                <h3>3. Contraction</h3>
                <p>Arrivée du Ca2+ $\\rightarrow$ Ponts Actine-Myosine $\\rightarrow$ Pivotement des têtes de myosine (conso d'ATP) $\\rightarrow$ Raccourcissement du sarcomère.</p>
            `,
            summary: [
                "Le muscle a besoin de Calcium et d'ATP pour se contracter.",
                "La rigidité cadavérique est due à l'absence d'ATP (les ponts restent fixés).",
                "Phénomènes thermiques : chaleur initiale et retardée."
            ],
            exercises: [
                {
                    id: 'ex-musc-1',
                    question: "Quel ion est indispensable au déclenchement de la contraction ?",
                    options: ["Sodium", "Calcium", "Potassium", "Chlore"],
                    correctAnswer: 1,
                    explanation: "Le calcium libère les sites de fixation sur l'actine."
                }
            ]
        },
        {
            id: 'neuro-ts-04',
            part: 'Partie 1 : Relations avec le milieu',
            title: '4. Mouvements et Réflexes',
            story: "Retirer sa main d'une plaque brûlante sans réfléchir ? C'est un réflexe. Décider de saisir un verre ? C'est volontaire. Notre système moteur gère ces deux types de commandes en permanence.",
            content: `
                <h3>1. Le Réflexe Myotatique</h3>
                <p>Contraction involontaire d'un muscle suite à son propre étirement. Monosynaptique. Rôle : maintien de la posture.</p>
                <h3>2. Mouvement Volontaire</h3>
                <p>Commande part du cortex moteur (cerveau), transite par la moelle et atteint le muscle. Croisement des voies (hémisphère gauche commande côté droit).</p>
            `,
            summary: [
                "L'arc réflexe : Récepteur -> Afférent -> Centre -> Efférent -> Effecteur.",
                "Cortex moteur : aire de commande des mouvements volontaires.",
                "La moelle épinière est le centre des réflexes, mais simple conducteur pour le volontaire."
            ],
            exercises: [
                {
                    id: 'ex-mouv-1',
                    question: "Le réflexe myotatique est-il contrôlé par le cerveau ?",
                    options: ["Oui, toujours", "Non, c'est médullaire", "Seulement la nuit", "Oui, par le cervelet"],
                    correctAnswer: 1,
                    explanation: "C'est un réflexe dont le centre est la moelle épinière (médullaire)."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : FONCTIONNEMENT DE L'ORGANISME
        // ==========================================
        {
            id: 'fonc-ts-05',
            part: 'Partie 2 : Fonctionnement',
            title: '5. Activité Cardiaque et Pression',
            story: "Votre cœur bat 100 000 fois par jour sans que vous n'y pensiez. C'est une pompe automatique, mais qui sait accélérer quand vous courrez ou avez peur.",
            content: `
                <h3>1. Automatisme Cardiaque</h3>
                <p>Le cœur bat seul grâce au tissu nodal. Le nœud sinusal impose le rythme.</p>
                <h3>2. Régulation</h3>
                <p>Le système nerveux végétatif module le rythme :</p>
                <ul>
                    <li>Sympathique (Noradrénaline) : Accélérateur (Cardio-accélérateur).</li>
                    <li>Parasympathique (Acétylcholine) : Ralentisseur (Cardio-modérateur).</li>
                </ul>
                <h3>3. Pression Artérielle</h3>
                <p>Dépend du débit cardiaque et de la résistance des vaisseaux (vasoconstriction/dilatation). Régulée par le baroréflexe.</p>
            `,
            summary: [
                "Tissu nodal = pacemaker naturel.",
                "Nerf Vague (X) = Parasympathique (frein).",
                "L'homéostasie de la pression artérielle est vitale."
            ],
            exercises: [
                {
                    id: 'ex-cardio-1',
                    question: "Quel est l'effet de l'acétylcholine sur le cœur ?",
                    options: ["Accélération", "Ralentissement", "Arrêt définitif", "Aucun effet"],
                    correctAnswer: 1,
                    explanation: "L'acétylcholine (parasympathique) ralentit le rythme cardiaque."
                }
            ]
        },
        {
            id: 'fonc-ts-06',
            part: 'Partie 2 : Fonctionnement',
            title: '6. Milieu Intérieur et Glycémie',
            story: "Nos cellules baignent dans une 'mer intérieure' dont la composition doit rester constante. Le taux de sucre (glycémie) est surveillé de près par un organe chef : le pancréas.",
            content: `
                <h3>1. Milieu Intérieur</h3>
                <p>Sang + Lymphe + Liquide interstitiel. Doit être stable (pH, température, ions...).</p>
                <h3>2. Régulation de la Glycémie</h3>
                <p>Glycémie normale $\\approx 1g/L$.</p>
                <ul>
                    <li>Hyperglycémie $\\rightarrow$ insuline (cellules $\\beta$ pancréas) $\\rightarrow$ stockage glucose (foie, muscles, graisses).</li>
                    <li>Hypoglycémie $\\rightarrow$ glucagon (cellules $\\alpha$) $\\rightarrow$ libération glucose.</li>
                </ul>
            `,
            summary: [
                "L'insuline est la seule hormone hypoglycémiante.",
                "Le foie joue le rôle de 'tampon' glucidique.",
                "Diabète : dérèglement de ce système."
            ],
            exercises: [
                {
                    id: 'ex-glyc-1',
                    question: "Quelle hormone fait baisser le taux de sucre dans le sang ?",
                    options: ["Glucagon", "Adrénaline", "Insuline", "Cortisol"],
                    correctAnswer: 2,
                    explanation: "L'insuline favorise l'entrée du glucose dans les cellules, donc la baisse de la glycémie."
                }
            ]
        },
        {
            id: 'fonc-ts-07',
            part: 'Partie 2 : Fonctionnement',
            title: '7. Immunologie',
            story: "C'est la guerre permanente à l'échelle microscopique. Votre corps est une forteresse assiégée par des virus et bactéries. Vos soldats ? Les globules blancs.",
            content: `
                <h3>1. Le Soi et le Non-Soi</h3>
                <p>Le système immunitaire tolère le Soi (marqueurs HLA) et attaque le Non-Soi (antigènes étrangers).</p>
                <h3>2. Réponse Immunitaire</h3>
                <ul>
                    <li>Non spécifique : Phagocytose (immédiate).</li>
                    <li>Spécifique à médiation humorale : LB $\\rightarrow$ Anticorps.</li>
                    <li>Spécifique à médiation cellulaire : LT8 $\\rightarrow$ LT cytotoxiques (tueurs).</li>
                </ul>
                <h3>3. Le SIDA</h3>
                <p>Le VIH attaque les LT4, qui sont les 'généraux' du système immunitaire. Sans LT4, plus de défense organisée : c'est l'immunodéficience.</p>
            `,
            summary: [
                "Les anticorps neutralisent, les LTc tuent les cellules infectées.",
                "La vaccination repose sur la mémoire immunitaire.",
                "VIH : Virus de l'Immunodéficience Humaine."
            ],
            exercises: [
                {
                    id: 'ex-immu-1',
                    question: "Quelles cellules sont la cible principale du VIH ?",
                    options: ["Les globules rouges", "Les plaquettes", "Les LT4", "Les LB"],
                    correctAnswer: 2,
                    explanation: "Le VIH infecte et détruit les Lymphocytes T4, chefs d'orchestre de l'immunité."
                }
            ]
        },

        // ==========================================
        // PARTIE 3 : REPRODUCTION & GÉNÉTIQUE
        // ==========================================
        {
            id: 'rep-ts-08',
            part: 'Partie 3 : Reproduction',
            title: '8. Reproduction Humaine',
            story: "La pérennité de l'espèce repose sur la rencontre de deux cellules. Mais avant cela, une machinerie hormonale complexe prépare les corps à la fécondation.",
            content: `
                <h3>1. Gamétogenèse</h3>
                <p>Formation des spermatozoïdes (spermatogenèse, continue) et des ovules (ovogenèse, cyclique).</p>
                <h3>2. Cycles Sexuels chez la femme</h3>
                <p>Cycle ovarien (folliculaire -> ovulation -> lutéal) et cycle utérin sont synchronisés par les hormones.</p>
                <h3>3. Régulation Hormonale</h3>
                <p>Axe Hypothalamus-Hypophyse $\\rightarrow$ FSH/LH $\\rightarrow$ Ovaires/Testicules $\\rightarrow$ Oestrogènes/Progestérone/Testostérone $\\rightarrow$ Rétrocontrôle.</p>
            `,
            summary: [
                "Pic de LH = Ovulation.",
                "Rétrocontrôle négatif permet la stabilité, positif déclenche l'ovulation.",
                "La pilule contraceptive bloque l'ovulation en mimant la grossesse."
            ],
            exercises: [
                {
                    id: 'ex-rep-1',
                    question: "Quel événement déclenche l'ovulation ?",
                    options: ["Chute de FSH", "Pic de LH", "Pic de Progestérone", "Menstruations"],
                    correctAnswer: 1,
                    explanation: "Le pic de LH (hormone lutéinisante) provoque la rupture du follicule."
                }
            ]
        },
        {
            id: 'rep-ts-09',
            part: 'Partie 3 : Reproduction',
            title: '9. De la Fécondation à la Naissance',
            story: "La rencontre, la fusion, puis la multiplication vertigineuse des cellules pour former un être complet en 9 mois. Une chorégraphie biologique incroyable.",
            content: `
                <h3>1. Fécondation</h3>
                <p>Fusion d'un spermatozoïde et d'un ovule dans les trompes. Rétablissement de la diploïdie (2n chromosomes).</p>
                <h3>2. Gestation</h3>
                <p>Implantation (nidation) dans l'utérus. Le placenta assure les échanges mère-fœtus et sécrète des hormones (HCG, pui Progestérone) pour maintenir la grossesse.</p>
                <h3>3. Accouchement et Lactation</h3>
                <p>Contractions déclenchées par ocytocine. La prolactine stimule la production de lait.</p>
            `,
            summary: [
                "Embryon devient Fœtus à 3 mois.",
                "Le corps jaune puis le placenta maintiennent la muqueuse utérine.",
                "Lactation : réflexe neuro-hormonal."
            ],
            exercises: [
                {
                    id: 'ex-fec-1',
                    question: "Où a lieu normalement la fécondation ?",
                    options: ["Dans l'utérus", "Dans le vagin", "Dans les trompes", "Dans l'ovaire"],
                    correctAnswer: 2,
                    explanation: "La rencontre des gamètes se fait dans le tiers supérieur des trompes."
                }
            ]
        },
        {
            id: 'rep-ts-10',
            part: 'Partie 3 : Reproduction',
            title: '10. Reproduction des Spermaphytes',
            story: "Les plantes à fleurs aussi ont une sexualité ! Pollinisation par le vent ou les abeilles, double fécondation... C'est ainsi que naissent les graines et les fruits.",
            content: `
                <h3>1. Organisation de la fleur</h3>
                <p>Pièces stériles (sépales, pétales) et fertiles (étamines mâ/pistil fem).</p>
                <h3>2. Pollinisation et Germination</h3>
                <p>Le grain de pollen germe sur le stigmate et forme un tube pollinique.</p>
                <h3>3. Double Fécondation</h3>
                <p>Spécifique aux Angiospermes :<br>
                1 Spz + Oosphère $\\rightarrow$ Embryon (plante).<br>
                1 Spz + Noyaux polaires $\\rightarrow$ Albumen (réserves).</p>
            `,
            summary: [
                "Stériles : Calice + Corolle.",
                "Graine = Embryon + Réserves + Téguments.",
                "Fruit provient de la transformation de l'ovaire."
            ],
            exercises: [
                {
                    id: 'ex-plant-1',
                    question: "Qu'est-ce qui donne le fruit après fécondation ?",
                    options: ["L'ovule", "L'ovaire", "Le pétale", "Le stigmate"],
                    correctAnswer: 1,
                    explanation: "L'ovule devient la graine, l'ovaire devient le fruit."
                }
            ]
        },
        {
            id: 'gen-ts-11',
            part: 'Partie 3 : Génétique',
            title: '11. Génétique et Hérédité',
            story: "Pourquoi ressemble-t-on à nos parents ? Les lois de Mendel expliquent la transmission des caractères, dominant ou récessif, lié au sexe ou non.",
            content: `
                <h3>1. Monohybridisme</h3>
                <p>Étude de la transmission d'un seul caractère. Lois de Mendel (pureté des gamètes).</p>
                <h3>2. Dihybridisme</h3>
                <p>Étude de deux caractères. Gènes indépendants (brassage interchromosomique) ou liés (brassage intrachromosomique/crossing-over).</p>
                <h3>3. Hérédité Humaine</h3>
                <p>Complexifiée par l'impossibilité d'expérimentation. Utilisation des arbres généalogiques (pedigrees).</p>
            `,
            summary: [
                "Test-cross : croisement avec un récessif pour déterminer le génotype.",
                "Gènes liés : % de recombinés < 50%.",
                "Maladies liées à l'X touchent plus souvent les hommes."
            ],
            exercises: [
                {
                    id: 'ex-gen-1',
                    question: "Si on croise deux hétérozygotes (Bb) pour un gène dominant, quelle est la proportion de phénotype dominant ?",
                    options: ["25%", "50%", "75%", "100%"],
                    correctAnswer: 2,
                    explanation: "Grille de Punnett : BB, Bb, Bb, bb. Soit 3/4 de phénotype dominant."
                }
            ]
        },

        // ==========================================
        // PARTIE 4 : MÉTHODOLOGIE
        // ==========================================
        {
            id: 'meth-ts-12',
            part: 'Partie 4 : Savoir-faire',
            title: '12. Méthodologie en SVT',
            story: "La SVT, ce n'est pas que du par cœur. C'est une science. Il faut savoir observer, analyser des documents, raisonner et conclure. Voici la boîte à outils pour réussir le BAC.",
            content: `
                <h3>1. Analyse de Graphique</h3>
                <p>Décrire l'évolution ("J'observe que...") sans expliquer. Repérer les phases. Citer des valeurs chiffrées précises.</p>
                <h3>2. Raisonnement Scientifique (Roc ou Exploitation doc)</h3>
                <p>Problème posé $\\rightarrow$ Hypothèse $\\rightarrow$ Analyse des faits $\\rightarrow$ Mise en relation $\\rightarrow$ Conclusion.</p>
                <h3>3. Construction de Graphique</h3>
                <p>Titre complet, axes fléchés et nommés avec unités, échelle respectée, points précis, courbe à main levée (sauf si droite affine).</p>
            `,
            summary: [
                "Saisir des informations (Je vois).",
                "Mettre en relation avec ses connaissances (Je sais).",
                "Deduire/Conclure (Donc).",
                "Soignez la forme : orthographe, schémas clairs."
            ],
            exercises: [
                {
                    id: 'ex-meth-1',
                    question: "Dans une analyse de document, quelle phrase est à éviter ?",
                    options: ["La courbe augmente...", "La quantité d'ADN évolue...", "La courbe monte...", "On observe une croissance..."],
                    correctAnswer: 2,
                    explanation: "On évite 'la courbe monte/descend'. On parle de l'évolution de la variable (augmente, diminue, stagne)."
                }
            ]
        }
    ]
};
