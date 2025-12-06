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
            title: 'Organisation du Système Nerveux',
            story: "Le centre de commande. De l'encéphale protégé par le crâne à la moelle épinière, tout est connecté pour percevoir et agir.",
            content: `
                <h3>1. Organisation de l'encéphale</h3>
                <p>Comprend le cerveau, le cervelet et le tronc cérébral.</p>
                <h3>2. Organisation de la moelle épinière</h3>
                <p>Cordon blanc en périphérie, gris au centre (papillon). Centre des réflexes.</p>
                <h3>3. Organisation et Propriétés du tissu nerveux</h3>
                <p>Le neurone (corps cellulaire, axone, dendrites) est l'unité fonctionnelle. Excitabilité et conductibilité.</p>
            `,
            summary: [
                "Substance grise = Corps cellulaires.",
                "Substance blanche = Axones (Fibres).",
                "Le nerf est un ensemble de fibres."
            ],
            exercises: [
                {
                    id: 'ex-enc',
                    question: "Quel organe ne fait pas partie de l'encéphale ?",
                    options: ["Cervelet", "Tronc cérébral", "Moelle épinière", "Cerveau"],
                    correctAnswer: 2,
                    explanation: "La moelle épinière fait suite à l'encéphale."
                }
            ]
        },
        {
            id: 'svt-ts-02',
            part: 'Partie 1 : Relations avec le milieu',
            title: 'Influx Nerveux et Synapse',
            story: "L'information circule sous forme électrique le long des nerfs et chimique entre eux. Une course de relais ultra-rapide.",
            content: `
                <h3>1. Phénomènes électriques</h3>
                <p>Potentiel de repos (-70mV) et Potentiel d'Action (Dépolarisation brusque).</p>
                <h3>2. Conduction de l'influx</h3>
                <p>Saltatoire (rapide) dans les fibres myélinisées.</p>
                <h3>3. Notion de synapse</h3>
                <p>Transmission chimique via neurotransmetteurs (Acétylcholine) au niveau des fentes synaptiques.</p>
            `,
            summary: [
                "Le message est codé en fréquence de PA.",
                "La synapse a un délai de transmission.",
                "Loi du tout ou rien."
            ],
            exercises: [
                {
                    id: 'ex-syn',
                    question: "Comment le message passe-t-il d'un neurone à l'autre ?",
                    options: ["Par contact direct", "Par messager chimique", "Par ondes radio", "Il ne passe pas"],
                    correctAnswer: 1,
                    explanation: "Via les neurotransmetteurs libérés dans la fente synaptique."
                }
            ]
        },
        {
            id: 'svt-ts-03',
            part: 'Partie 1 : Relations avec le milieu',
            title: 'Mouvements Réflexes et Volontaires',
            story: "Réagir vite ou agir avec intention. Deux circuits pour deux types de motricité.",
            content: `
                <h3>1. Mouvements involontaires (Réflexes)</h3>
                <p>Le réflexe myotatique (monosynaptique, médullaire) assure le tonus musculaire.</p>
                <h3>2. Mouvements volontaires</h3>
                <p>Commande corticale (Aire motrice). Trajet croisé (Hémisphère gauche -> Corps droit).</p>
            `,
            summary: [
                "Réflexe : involontaire, stéréotypé.",
                "Volontaire : intentionnel, complexe.",
                "La moelle est le centre du réflexe."
            ],
            exercises: [
                {
                    id: 'ex-mot',
                    question: "Où naît la commande du mouvement volontaire ?",
                    options: ["Dans le muscle", "Dans la moelle", "Dans le cortex cérébral", "Dans le cervelet"],
                    correctAnswer: 2,
                    explanation: "Dans l'aire motrice primaire du cortex."
                }
            ]
        },
        {
            id: 'svt-ts-04',
            part: 'Partie 1 : Relations avec le milieu',
            title: 'Le Muscle Squelettique',
            story: "Le moteur biologique. Une structure striée capable de se raccourcir sur commande.",
            content: `
                <h3>1. Structure du muscle strié</h3>
                <p>Fibres, myofibrilles, sarcomères (Actine + Myosine).</p>
                <h3>2. Fonctionnement</h3>
                <p>Glissement des filaments consommant de l'ATP et nécessitant du Calcium.</p>
            `,
            summary: [
                "Sarcomère = Unité contractile.",
                "ATP + Ca2+ indispensables.",
                "Phénomènes thermiques associés."
            ],
            exercises: [
                {
                    id: 'ex-musc',
                    question: "Quel ion déclenche la contraction ?",
                    options: ["Na+", "K+", "Ca2+", "Cl-"],
                    correctAnswer: 2,
                    explanation: "Le calcium libère les sites de fixation."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : ACTIVITÉ CARDIAQUE
        // ==========================================
        {
            id: 'svt-ts-05',
            part: 'Partie 2 : Activité Cardiaque',
            title: 'Activité Cardiaque et Pression',
            story: "Un cœur autonome mais sous influence. Une pression vitale à maintenir.",
            content: `
                <h3>1. Automatisme cardiaque</h3>
                <p>Tissu nodal (Nœud sinusal).</p>
                <h3>2. Activité et Pression Artérielle</h3>
                <p>Régulation nerveuse (Sympathique + / Parasympathique -) et Baroréflexe.</p>
            `,
            summary: [
                "Nerf Vague = Ralentisseur.",
                "Nerf Sympathique = Accélérateur.",
                "Barorécepteurs surveillent la pression."
            ],
            exercises: [
                {
                    id: 'ex-card',
                    question: "Quel système accélère le cœur ?",
                    options: ["Sympathique", "Parasympathique", "Digestif", "Lympathique"],
                    correctAnswer: 0,
                    explanation: "Le système sympathique prépare à l'action."
                }
            ]
        },

        // ==========================================
        // PARTIE 3 : MILIEU INTÉRIEUR
        // ==========================================
        {
            id: 'svt-ts-06',
            part: 'Partie 3 : Milieu Intérieur',
            title: 'Régulation du Milieu Intérieur',
            story: "L'équilibre intérieur est la condition de la vie libre. La glycémie en est l'exemple clé.",
            content: `
                <h3>1. Composition et Rôle</h3>
                <p>Sang, Lymphe. Homéostasie (pH, Température). Assure les échanges.</p>
                <h3>2. Régulation de la Glycémie</h3>
                <p>Insuline (Hypoglycémiante) et Glucagon (Hyperglycémiante) sécrétés par le pancréas.</p>
            `,
            summary: [
                "Glycémie normale ~1g/L.",
                "Foie = stockeur de glucose.",
                "Insuline = Clé d'entrée du glucose dans les cellules."
            ],
            exercises: [
                {
                    id: 'ex-glyc',
                    question: "Quelle est l'hormone du stockage ?",
                    options: ["Adrénaline", "Glucagon", "Insuline", "Cortisol"],
                    correctAnswer: 2,
                    explanation: "L'insuline favorise la mise en réserve."
                }
            ]
        },

        // ==========================================
        // PARTIE 4 : IMMUNOLOGIE
        // ==========================================
        {
            id: 'svt-ts-07',
            part: 'Partie 4 : Immunologie',
            title: 'Le Système Immunitaire',
            story: "Défendre le Soi contre le Non-Soi. Une armée biologique complexe.",
            content: `
                <h3>1. Le système immunitaire</h3>
                <p>Organes lymphoïdes, Leucocytes, Marqueurs du Soi (CMH).</p>
                <h3>2. La réponse immunitaire</h3>
                <p>Non spécifique (Phagocytose) et Spécifique (LB/Anticorps, LT8/Cytotoxiques).</p>
                <h3>3. Dysfonctionnement : Le SIDA</h3>
                <p>Attaque des LT4 (Chefs d'orchestre). Immunodéficience acquise.</p>
            `,
            summary: [
                "Anticorps = Spécificité.",
                "LT4 indispensables à toute réponse spécifique.",
                "Mémoire immunitaire = Base de la vaccination."
            ],
            exercises: [
                {
                    id: 'ex-imm',
                    question: "Quelle cellule produit les anticorps ?",
                    options: ["Macrophage", "Lymphocyte T", "Plasmocyte (LB)", "Hématie"],
                    correctAnswer: 2,
                    explanation: "Les LB se différencient en Plasmocytes sécréteurs d'anticorps."
                }
            ]
        },

        // ==========================================
        // PARTIE 5 : REPRODUCTION
        // ==========================================
        {
            id: 'svt-ts-08',
            part: 'Partie 5 : Reproduction',
            title: 'Reproduction Humaine',
            story: "Assurer la descendance. De la production des gamètes à la naissance.",
            content: `
                <h3>1. Gamétogenèse et Appareils</h3>
                <p>Spermatogenèse et Ovogenèse. Fonctionnement cyclique chez la femme.</p>
                <h3>2. Régulation hormonale & Fécondation</h3>
                <p>Axe Hypothalamo-Hypophysaire. Rencontre des gamètes.</p>
                <h3>3. Gestation, Accouchement, Lactation</h3>
                <p>Rôle du placenta. Ocytocine et Prolactine.</p>
            `,
            summary: [
                "Pic de LH = Ovulation.",
                "Fécondation dans les trompes.",
                "Rétrocontrôles hormonaux complexes."
            ],
            exercises: [
                {
                    id: 'ex-rep',
                    question: "Où a lieu la nidation ?",
                    options: ["Ovaire", "Trompes", "Utérus", "Vagin"],
                    correctAnswer: 2,
                    explanation: "L'embryon s'implante dans la muqueuse utérine."
                }
            ]
        },
        {
            id: 'svt-ts-09',
            part: 'Partie 5 : Reproduction',
            title: 'Reproduction des Spermaphytes',
            story: "Les fleurs et les graines. Une adaptation à la vie terrestre.",
            content: `
                <h3>1. La Fleur et la Pollinisation</h3>
                <p>Organes reproducteurs. Transport du pollen.</p>
                <h3>2. Double fécondation</h3>
                <p>Embryon (Plante) + Albumen (Réserves).</p>
                <h3>3. Graine et Fruit</h3>
                <p>Dissémination et germination.</p>
            `,
            summary: [
                "Double fécondation spécifique aux Angiospermes.",
                "Ovule -> Graine.",
                "Ovaire -> Fruit."
            ],
            exercises: [
                {
                    id: 'ex-plant',
                    question: "Que contient la graine ?",
                    options: ["Juste l'embryon", "Embryon + Réserves", "Juste des réserves", "De la terre"],
                    correctAnswer: 1,
                    explanation: "Elle contient la plantule et de quoi la nourrir au début."
                }
            ]
        },

        // ==========================================
        // PARTIE 6 : GÉNÉTIQUE
        // ==========================================
        {
            id: 'svt-ts-10',
            part: 'Partie 6 : Génétique',
            title: 'Hérédité et Génétique',
            story: "Les lois de la transmission. Du petit pois de Mendel aux maladies humaines.",
            content: `
                <h3>1. Lois statistiques (Mendel)</h3>
                <p>Monohybridisme et Dihybridisme. Dominance, Codominance, Gènes liés/indépendants.</p>
                <h3>2. Hérédité humaine</h3>
                <p>Arbres généalogiques. Maladies autosomiques ou gonosomiques.</p>
                <h3>3. La génétique moléculaire</h3>
                <p>ADN, Gènes, Allèles.</p>
            `,
            summary: [
                "Brassage génétique (Inter et Intra).",
                "Test-cross pour trouver le génotype.",
                "Hérédité liée au sexe (X)."
            ],
            exercises: [
                {
                    id: 'ex-gen',
                    question: "Sur quel chromosome sont les gènes de l'hérédité liée au sexe ?",
                    options: ["Chromosome 1", "Chromosome 21", "X ou Y", "Aucun"],
                    correctAnswer: 2,
                    explanation: "Les hétérochromosomes (sexuels)."
                }
            ]
        },

        // ==========================================
        // PARTIE 7 : SAVOIR-FAIRE
        // ==========================================
        {
            id: 'svt-ts-11',
            part: 'Partie 7 : Savoir-Faire',
            title: 'Méthodologie SVT',
            story: "La boîte à outils pour réussir l'épreuve.",
            content: `
                <h3>1. Traiter un devoir</h3>
                <p>Lecture, Gestion du temps, Plan structuré.</p>
                <h3>2. Graphiques</h3>
                <p>Titre, Axes, Échelle, Soin.</p>
                <h3>3. Analyse et Raisonnement</h3>
                <p>Observer -> Relier aux connaissances -> Conclure. Démarche scientifique (Hypothèse/Test).</p>
            `,
            summary: [
                "Ne jamais paraphraser, analyser.",
                "Justifier chaque étape.",
                "Conclure en répondant au problème."
            ],
            exercises: [
                {
                    id: 'ex-meth',
                    question: "Que faut-il faire avant de conclure ?",
                    options: ["Rien", "Analyser et Interpréter", "Inventer", "Dessiner"],
                    correctAnswer: 1,
                    explanation: "La conclusion découle logiquement de l'analyse des faits."
                }
            ]
        }
    ]
};
