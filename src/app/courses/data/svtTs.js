export const svtTsData = {
    id: 'svt-ts',
    title: 'SVT Terminale S',
    chapters: [
        // ==========================================
        // PARTIE 1 : RELATIONS AVEC LE MILIEU EXTÉRIEUR
        // ==========================================
        {
            id: 'svt-ts-01',
            part: 'Partie 1 : Relations avec le milieu',
            title: '1. Organisation du Système Nerveux',
            story: "Pour réagir à son environnement, l'organisme doit d'abord percevoir et analyser. Tout commence par l'architecture de notre centre de commande : le système nerveux.",
            content: `
                <h3>1. Organisation de l'encéphale</h3>
                <p>Centre nerveux supérieur situé dans la boîte crânienne. Il comprend le cerveau (deux hémisphères), le cervelet et le tronc cérébral.</p>
                
                <h3>2. Organisation de la moelle épinière</h3>
                <p>Cordon nerveux prolongeant l'encéphale le long de la colonne vertébrale. En coupe transversale : substance grise centrale (forme de papillon) et substance blanche périphérique.</p>
                
                <h3>3. Organisation du tissu nerveux</h3>
                <p>Le tissu est constitué de cellules spécialisées : les <strong>neurones</strong> (transmission) et les cellules gliales (soutien, nutrition, protection).</p>
            `,
            summary: [
                "Encéphale = Cerveau + Cervelet + Tronc cérébral.",
                "Moelle épinière = Centre des réflexes et voie de conduction.",
                "Neurone = Corps cellulaire + Dendrites + Axone."
            ],
            exercises: [
                {
                    id: 'ex-enc-1',
                    question: "Où se trouve la substance grise dans la moelle épinière ?",
                    options: ["En périphérie", "Au centre", "Absente", "Dans le canal de l'épendyme"],
                    correctAnswer: 1,
                    explanation: "Contrairement au cerveau, la substance grise est centrale dans la moelle."
                }
            ]
        },
        {
            id: 'svt-ts-02',
            part: 'Partie 1 : Relations avec le milieu',
            title: '2. Physiologie du Nerf',
            story: "Le nerf n'est pas qu'un simple câble inerte. C'est une structure vivante capable de générer et propager des signaux électriques complexes.",
            content: `
                <h3>1. Propriétés du tissu nerveux</h3>
                <p>Excitabilité (capacité à réagir à un stimulus) et Conductibilité (capacité à transmettre le signal).</p>

                <h3>2. Phénomènes électriques en rapport avec l'influx nerveux</h3>
                <ul>
                    <li><strong>Potentiel de Repos (PR)</strong> : Polarisation membranaire de -70mV (intérieur négatif).</li>
                    <li><strong>Potentiel d'Action (PA)</strong> : Inversion brutale et transitoire de la polarité (+30mV) suite à une stimulation seuil. Phase de dépolarisation, repolarisation, hyperpolarisation.</li>
                </ul>

                <h3>3. Conduction de l'influx nerveux</h3>
                <p>Propagation unidirectionnelle. Saltatoire (rapide) dans les fibres myélinisées, continue (lente) dans les fibres amyéliniques.</p>

                <h3>4. Notion de synapse</h3>
                <p>Zone de jonction fonctionnelle entre deux neurones (ou neurone-muscle). Transmission chimique via neurotransmetteurs (ex: Acétylcholine).</p>
            `,
            summary: [
                "Loi du Tout ou Rien pour le PA.",
                "Codage en fréquence de potentiels d'action.",
                "Synapse : conversion signal électrique → signal chimique."
            ],
            exercises: [
                {
                    id: 'ex-cond-1',
                    question: "Comment l'influx se propage-t-il dans une fibre myélinisée ?",
                    options: ["De proche en proche", "De manière saltatoire", "Dans les deux sens", "Il ne se propage pas"],
                    correctAnswer: 1,
                    explanation: "Il 'saute' d'un nœud de Ranvier à l'autre, ce qui accélère la conduction."
                }
            ]
        },
        {
            id: 'svt-ts-03',
            part: 'Partie 1 : Relations avec le milieu',
            title: '3. Motricité : Réflexes et Mouvements',
            story: "Du retrait de la main face au feu au tir de précision au football, notre système nerveux gère une gamme variée de réponses motrices.",
            content: `
                <h3>1. Mouvements involontaires ou réflexes</h3>
                <p>Réponse motrice stéréotypée, rapide et inéluctable à un stimulus. Exemple : <strong>Réflexe myotatique</strong> (contraction d'un muscle étiré). Le centre est la moelle épinière.</p>

                <h3>2. Mouvements volontaires ou spontanés</h3>
                <p>Intentionnels. Commandés par le cortex moteur (aire 4). Les voies motrices (faisceau pyramidal) croisent le bulbe rachid : l'hémisphère gauche commande le côté droit.</p>
            `,
            summary: [
                "Réflexe : Arc réflexe (Récepteur -> Afférent -> Centre -> Efférent -> Effecteur).",
                "Volontaire : Origine cortex cérébral, trajet croisé.",
                "Rôle intégrateur des motoneurones de la moelle."
            ],
            exercises: [
                {
                    id: 'ex-ref-1',
                    question: "Quel est le centre nerveux du réflexe myotatique ?",
                    options: ["Le cerveau", "Le cervelet", "La moelle épinière", "Le muscle"],
                    correctAnswer: 2,
                    explanation: "C'est un réflexe médullaire."
                }
            ]
        },
        {
            id: 'svt-ts-04',
            part: 'Partie 1 : Relations avec le milieu',
            title: '4. Fonctionnement du Muscle',
            story: "L'effecteur final du mouvement. Une machinerie biologique capable de convertir de l'énergie chimique en force mécanique.",
            content: `
                <h3>1. Structure du muscle strié squelettique</h3>
                <p>Muscle $\\rightarrow$ Faisceaux $\\rightarrow$ Fibres $\\rightarrow$ Myofibrilles $\\rightarrow$ Sarcomères (unités contractiles). Alternance de bandes claires (I) et sombres (A).</p>

                <h3>2. Différents aspects du fonctionnement (L'activité du muscle squelettique)</h3>
                <ul>
                    <li><strong>Mécanique</strong> : Raccourcissement du sarcomère par glissement Actine/Myosine.</li>
                    <li><strong>Thermique</strong> : Chaleur initiale (contraction) et retardée (restauration).</li>
                    <li><strong>Chimique</strong> : Consommation d'ATP et de Ca2+.</li>
                </ul>
            `,
            summary: [
                "L'ATP est indispensable au détachement des têtes de myosine.",
                "Le Calcium déclenche la contraction.",
                "Phénomènes : Secousse musculaire, Tétanos (fusion)."
            ],
            exercises: [
                {
                    id: 'ex-musc-2',
                    question: "Quelle est l'unité contractile du muscle ?",
                    options: ["La fibre", "Le sarcomère", "Le tendon", "L'actine"],
                    correctAnswer: 1,
                    explanation: "C'est le segment de myofibrille compris entre deux stries Z."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITÉ CARDIAQUE
        // ==========================================
        {
            id: 'svt-ts-05',
            part: 'Partie 2 : Activité Cardiaque',
            title: '5. Activité Cardiaque et Pression',
            story: "Le cœur est une pompe autonome mais sous surveillance, garantissant l'irrigation de tous nos organes.",
            content: `
                <h3>1. Automatisme cardiaque</h3>
                <p>Le cœur bat de façon autonome grâce au <strong>tissu nodal</strong>. Le nœud sinusal impose le rythme (pacemaker), relayé par le nœud septal et le faisceau de His.</p>

                <h3>2. Activité cardiaque et pression artérielle</h3>
                <p>Régulation nerveuse de la pression :</p>
                <ul>
                    <li><strong>Système Sympathique</strong> (Nerfs cardiaques) : Accélérateur (Augmente la fréquence et la pression).</li>
                    <li><strong>Système Parasympathique</strong> (Nerfs X ou Vagues) : Modérateur (Ralentit le cœur, baisse la pression).</li>
                    <li>Le <strong>Baroréflexe</strong> maintient la pression constante.</li>
                </ul>
            `,
            summary: [
                "Tissu nodal = Automatisme.",
                "Nerf Vague = Frein (Cardiomodérateur).",
                "Nerf Sympathique = Accélérateur.",
                "Barorécepteurs (sinus carotide) détectent les variations de pression."
            ],
            exercises: [
                {
                    id: 'ex-card-2',
                    question: "Quelle est l'action du système parasympathique sur le cœur ?",
                    options: ["Cardio-accélérateur", "Cardio-modérateur", "Aucune", "Arrêt cardiaque"],
                    correctAnswer: 1,
                    explanation: "Il ralentit le rythme cardiaque en permanence (tonus vagal)."
                }
            ]
        },

        // ==========================================
        // PARTIE 3 : MILIEU INTÉRIEUR ET IMMUNITÉ
        // ==========================================
        {
            id: 'svt-ts-06',
            part: 'Partie 3 : Milieu Intérieur',
            title: '6. Le Milieu Intérieur',
            story: "Nos cellules vivent dans un environnement stable, le milieu intérieur, dont l'équilibre est vital.",
            content: `
                <h3>1. Composition et rôle du milieu intérieur</h3>
                <p>Constitué du sang, de la lymphe (canalisée et interstitielle). Assure les échanges nutritifs et gazeux avec les cellules.</p>

                <h3>2. Régulation de la constance du milieu intérieur</h3>
                <p>L'homéostasie est le maintien des constantes physico-chimiques (pH, température, pression osmotique).</p>

                <h3>3. La régulation de la glycémie</h3>
                <p>Taux de glucose sanguin (~1g/L). Régulation hormonale par le pancréas :</p>
                <ul>
                    <li><strong>Insuline</strong> (Cellules $\\beta$) : Hypoglycémiante (stockage).</li>
                    <li><strong>Glucagon</strong> (Cellules $\\alpha$) : Hyperglycémiante (libération).</li>
                </ul>
            `,
            summary: [
                "Le foie stocke le glucose sous forme de glycogène.",
                "L'insuline est la seule hormone hypoglycémiante.",
                "Diabète = Hyperglycémie chronique."
            ],
            exercises: [
                {
                    id: 'ex-glyc-2',
                    question: "Quelle hormone est sécrétée en cas d'hypoglycémie ?",
                    options: ["Insuline", "Glucagon", "Thyroxine", "Calcitonine"],
                    correctAnswer: 1,
                    explanation: "Le glucagon stimule la libération de glucose par le foie."
                }
            ]
        },
        {
            id: 'svt-ts-07',
            part: 'Partie 3 : Immunologie',
            title: '7. Le Système Immunitaire',
            story: "L'intégrité de l'organisme est constamment menacée. Une armée cellulaire veille à notre protection.",
            content: `
                <h3>1. Intégrité de l'organisme : Le système immunitaire</h3>
                <p>Distinction entre le Soi (Marqueurs majeurs d'histocompatibilité CMH/HLA) et le Non-Soi (Antigènes). Acteurs : Leucocytes (Macrophages, Lymphocytes B et T).</p>

                <h3>2. La réponse immunitaire</h3>
                <ul>
                    <li><strong>Non spécifique</strong> : Phagocytose, inflammation.</li>
                    <li><strong>Spécifique Humorale</strong> : Lymphocytes B $\\rightarrow$ Plasmocytes $\\rightarrow$ Anticorps (neutralisation).</li>
                    <li><strong>Spécifique Cellulaire</strong> : Lymphocytes T8 $\\rightarrow$ LT Cytotoxiques (destruction cellulaire).</li>
                    <li>Rôle pivot des LT4 (Auxiliaires).</li>
                </ul>

                <h3>3. Dysfonctionnement : Le SIDA</h3>
                <p>Le virus VIH infecte les LT4. Effondrement des défenses immunitaires $\\rightarrow$ Maladies opportunistes.</p>
            `,
            summary: [
                "CMH = Carte d'identité biologique.",
                "Anticorps = Spécifique à un antigène.",
                "VIH cible les LT4, chefs d'orchestre de l'immunité."
            ],
            exercises: [
                {
                    id: 'ex-sida-1',
                    question: "Pourquoi le SIDA est-il une immunodéficience ?",
                    options: ["Car il détruit les globules rouges", "Car il détruit les LT4 coordinateurs", "Car il donne de la fièvre", "Car il augmente les anticorps"],
                    correctAnswer: 1,
                    explanation: "Sans LT4, ni la réponse humorale ni cellulaire ne peuvent s'activer efficacement."
                }
            ]
        },

        // ==========================================
        // PARTIE 4 : REPRODUCTION
        // ==========================================
        {
            id: 'svt-ts-08',
            part: 'Partie 4 : Reproduction',
            title: '8. Reproduction Humaine',
            story: "De la formation des gamètes à la naissance, une série de processus complexes et régulés assurent la pérennité de l'espèce.",
            content: `
                <h3>1. Organisation des appareils génitaux et Gamétogenèse</h3>
                <p>Formation des spermatozoïdes (spermatogenèse continue) et des ovules (ovogenèse cyclique).</p>

                <h3>2. Régulation du fonctionnement des appareils génitaux</h3>
                <p>Complexe Hypothalamo-Hypophysaire (GnRH, FSH, LH) contrôle les gonades (Testostérone / Oestrogènes, Progestérone). Rétrocontrôles positifs et négatifs chez la femme.</p>

                <h3>3. Fécondation et problèmes liés</h3>
                <p>Rencontre des gamètes, fusion des noyaux (caryogamie). Problèmes : stérilité, contraception.</p>

                <h3>4. Gestation, accouchement et lactation</h3>
                <p>Maintien du corps jaune puis placenta (HCG, Progestérone). Accouchement (Ocytocine). Lactation (Prolactine).</p>
            `,
            summary: [
                "Pic de LH déclenche l'ovulation.",
                "Fécondation rétablit la diploïdie.",
                "Placenta : organe d'échange et endocrine."
            ],
            exercises: [
                {
                    id: 'ex-reg-1',
                    question: "Quelle hormone déclenche l'ovulation ?",
                    options: ["FSH", "LH", "Progestérone", "Oestradiol"],
                    correctAnswer: 1,
                    explanation: "Le pic ovulatoire de LH est le signal déclencheur."
                }
            ]
        },
        {
            id: 'svt-ts-09',
            part: 'Partie 4 : Reproduction',
            title: '9. Reproduction des Spermaphytes',
            story: "Chez les plantes à fleurs, la reproduction sexuée présente des particularités fascinantes comme la double fécondation.",
            content: `
                <h3>1. Organisation de la fleur</h3>
                <p>Organes protecteurs (sépales, pétales) et reproducteurs (étamines, pistil).</p>

                <h3>2. Pollinisation et Germination</h3>
                <p>Transport du pollen (vent, insectes). Germination du tube pollinique dans le style.</p>

                <h3>3. La Double Fécondation</h3>
                <p>Propre aux Angiospermes : Un anthérozoïde féconde l'oosphère (Embryon), l'autre les noyaux polaires (Albumen).</p>

                <h3>4. La graine et le fruit</h3>
                <p>L'ovule devient la graine, l'ovaire devient le fruit.</p>
            `,
            summary: [
                "Graine = Embryon + Réserves + Téguments.",
                "Cycle de développement avec alternance de phases.",
                "Coévolution plantes-insectes."
            ],
            exercises: [
                {
                    id: 'ex-sperm-1',
                    question: "Que devient l'oosphère fécondée ?",
                    options: ["L'albumen", "L'embryon", "Le tégument", "Le fruit"],
                    correctAnswer: 1,
                    explanation: "Elle donne le zygote principal qui se développera en plantule (embryon)."
                }
            ]
        },

        // ==========================================
        // PARTIE 5 : GÉNÉTIQUE
        // ==========================================
        {
            id: 'svt-ts-10',
            part: 'Partie 5 : Génétique',
            title: '10. Hérédité et Génétique',
            story: "Les lois statistiques nous permettent de comprendre et prédire la transmission des caractères biologiques à travers les générations.",
            content: `
                <h3>1. Lois statistiques de la transformation des caractères (Mendel)</h3>
                <p>Monohybridisme et Dihybridisme. Notions de dominance, récessivité, codominance. Gènes indépendants (brassage interchromosomique) et liés (brassage intrachromosomique/crossing-over).</p>

                <h3>2. Hérédité chez l'espèce humaine</h3>
                <p>Méthodes d'étude : Arbres généalogiques (pedigrees). Maladies héréditaires (autosomes ou gonosomes/liées au sexe). Groupes sanguins.</p>

                <h3>3. La génétique</h3>
                <p>Nature chimique du gène (ADN), expression de l'information génétique (Transcription, Traduction), mutation.</p>
            `,
            summary: [
                "Lois de Mendel : Uniformité F1, Pureté des gamètes, Ségrégation indépendante.",
                "Test-cross pour déterminer le génotype.",
                "Hérédité liée au sexe : touche souvent les garçons (XY)."
            ],
            exercises: [
                {
                    id: 'ex-gen-2',
                    question: "Dans quel cas observe-t-on un crossing-over ?",
                    options: ["Gènes indépendants", "Gènes liés", "Toujours", "Jamais"],
                    correctAnswer: 1,
                    explanation: "Le crossing-over (échange de segments de chromatides) se produit entre gènes liés sur le même chromosome."
                }
            ]
        },

        // ==========================================
        // PARTIE 6 : MÉTHODOLOGIE
        // ==========================================
        {
            id: 'svt-ts-11',
            part: 'Partie 6 : Savoir-faire',
            title: '11. Méthodologie SVT',
            story: "La réussite à l'épreuve de SVT ne dépend pas que des connaissances, mais aussi de la maîtrise d'outils intellectuels et techniques spécifiques.",
            content: `
                <h3>1. Comment traiter un devoir de SVT</h3>
                <p>Lecture attentive du sujet, souligner les mots-clés, gestion du temps, structuration des réponses (Intro, Développement, Conclusion).</p>
                
                <h3>2. Comment construire un graphique</h3>
                <p>Choix des axes (x = variable, y = fonction), échelle, titre complet, légendes, tracé soigné.</p>

                <h3>3. Méthodologie d'analyse et d'interprétation</h3>
                <p>Décrire les variations ("J'observe que..."), mettre en relation avec les connaissances ("Or je sais que..."), déduire ("Donc..."). Ne pas confondre analyse (description) et interprétation (explication).</p>

                <h3>4. Comment faire un raisonnement scientifique</h3>
                <p>Démarche : Problème $\\rightarrow$ Hypothèse $\\rightarrow$ Expérience/Observation $\\rightarrow$ Résultats $\\rightarrow$ Interprétation $\\rightarrow$ Conclusion.</p>
            `,
            summary: [
                "Rigueur et précision du vocabulaire.",
                "Toujours justifier ses affirmations.",
                "Soigner la présentation et l'orthographe."
            ],
            exercises: [
                {
                    id: 'ex-meth-2',
                    question: "Quelle est la première étape d'une analyse de document ?",
                    options: ["Conclure", "Expliquer le phénomène", "Décrire les observations", "Recopier le texte"],
                    correctAnswer: 2,
                    explanation: "On commence toujours par une description objective des données ('Je vois que')."
                }
            ]
        }
    ]
};
