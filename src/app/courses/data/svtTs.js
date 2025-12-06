export const svtTsData = {
    id: 'svt-ts',
    title: 'SVT Terminale S',
    chunks: [
        {
            part: 'Introduction',
            chapters: [
                {
                    id: 'theme-1',
                    title: '1. Rôle du système nerveux dans le comportement moteur d\'un animal',
                    content: '<p>Le système nerveux perçoit, analyse et commande. Il permet d\'adapter le comportement aux contraintes du milieu.</p>'
                },
                {
                    id: 'theme-2',
                    title: '2. Immunologie',
                    content: '<p>L\'immunologie étudie les mécanismes de défense de l\'organisme contre les agressions (non-soi).</p>'
                },
                {
                    id: 'theme-3',
                    title: '3. Hérédité humaine',
                    content: '<p>L\'hérédité traite de la transmission des caractères d\'une génération à l\'autre.</p>'
                }
            ]
        },
        {
            part: 'Première partie : Relations de l\'organisme avec le milieu extérieur',
            chapters: [
                {
                    id: 'chap-5',
                    title: '5. Organisation de l\'encéphale',
                    content: '<h3>Organisation</h3><p>L\'encéphale est constitué du cerveau, du cervelet et du tronc cérébral.</p>'
                },
                {
                    id: 'chap-6',
                    title: '6. Organisation de la moelle épinière',
                    content: '<h3>Structure</h3><p>Cordon blanc (périphérie) et gris (centre, corne antérieure et postérieure).</p>'
                },
                {
                    id: 'chap-7',
                    title: '7. Organisation du tissu nerveux',
                    content: '<h3>Le Neurone</h3><p>Unité structurale et fonctionnelle : Corps cellulaire, axone, dendrites.</p>'
                },
                {
                    id: 'chap-8',
                    title: '8. Propriétés du tissu nerveux',
                    content: '<h3>Excitabilité et Conductibilité</h3><p>Le nerf réagit à des stimuli et transmet l\'information.</p>'
                },
                {
                    id: 'chap-9',
                    title: '9. Phénomènes électriques en rapport avec l\'influx nerveux',
                    content: '<h3>Potentiels</h3><p>Potentiel de repos (-70mV) et Potentiel d\'Action (dépolarisation suite à stimulus efficace).</p>'
                },
                {
                    id: 'chap-10',
                    title: '10. Conduction de l\'influx nerveux',
                    content: '<h3>Vitesse et Mode</h3><p>Conduction saltatoire (rapide) dans les fibres myélinisées, continue dans les fibres amyéliniques.</p>'
                },
                {
                    id: 'chap-11',
                    title: '11. Notion de synapse',
                    content: '<h3>Transmission synaptique</h3><p>Jonction inter-neuronale ou neuro-effectrice. Libération de neurotransmetteurs (ex: Acétylcholine).</p>'
                },
                {
                    id: 'chap-12',
                    title: '12. Mouvements involontaires ou réflexes',
                    content: '<h3>Le Réflexe</h3><p>Réponse motrice involontaire, rapide et stéréotypée. Centre : Moelle épinière.</p>'
                },
                {
                    id: 'chap-13',
                    title: '13. Mouvements volontaires ou spontanés',
                    content: '<h3>La Volonté</h3><p>Commande corticale (Aire motrice). Voies pyramidales croisées.</p>'
                },
                {
                    id: 'chap-14',
                    title: '14. Structure du muscle strié squelettique',
                    content: '<h3>Histologie</h3><p>Faisceaux de fibres musculaires. Myofibrilles constituées de sarcomères (stries Z).</p>'
                },
                {
                    id: 'chap-15',
                    title: '15. Différents aspects du fonctionnement du muscle',
                    content: '<h3>Physiologie musculaire</h3><p>Contraction (raccourcissement sarcomère). Phénomènes thermiques (chaleur). Consommation d\'ATP et besoins en Calcium.</p>'
                }
            ]
        }
    ],
    // To maintain compatibility with existing mapping structure, we flatten for the main array but grouped above for reference if needed.
    chapters: [
        // INTRO (1-3)
        {
            id: 'intro-1',
            part: 'Thèmes Généraux',
            title: '1. Rôle du système nerveux',
            content: `<p>Le système nerveux assure la relation de l'organisme avec son milieu. Il permet la perception (sensoriel), l'analyse (centres nerveux) et l'action (moteur).</p>`
        },
        {
            id: 'intro-2',
            part: 'Thèmes Généraux',
            title: '2. Immunologie',
            content: `<p>L'immunologie est l'étude du système immunitaire, chargé de maintenir l'intégrité de l'organisme en éliminant les éléments étrangers (antigènes).</p>`
        },
        {
            id: 'intro-3',
            part: 'Thèmes Généraux',
            title: '3. Hérédité humaine',
            content: `<p>L'hérédité humaine étudie la transmission des caractères génétiques chez l'homme, souvent compliquée par l'impossibilité d'expérimentation.</p>`
        },
        // PARTIE 1 (4-15)
        {
            id: 'chap-5',
            part: 'Première partie : Relations avec le milieu',
            title: '5. Organisation de l\'encéphale',
            content: `
                <h3>Structure Globale</h3>
                <p>L'encéphale est la partie supérieure du système nerveux central, logée dans la boîte crânienne. Il comprend :</p>
                <ul>
                    <li><strong>Le Cerveau :</strong> Deux hémisphères cérébraux à surface plissée (cortex).</li>
                    <li><strong>Le Cervelet :</strong> Situé en arrière, rôle dans l'équilibre.</li>
                    <li><strong>Le Tronc Cérébral :</strong> Bulbe rachid, protubérance annulaire, pédoncules cérébraux.</li>
                </ul>
            `,
            summary: ["Cerveau = Siège de la conscience.", "Tronc cérébral = Relais vital (respiration, cœur)."],
            exercises: []
        },
        {
            id: 'chap-6',
            part: 'Première partie : Relations avec le milieu',
            title: '6. Organisation de la moelle épinière',
            content: `
                <h3>Anatomie</h3>
                <p>Cordon blanc nacré situé dans le canal rachidien. Elle donne naissance aux nerfs rachidiens (mixtes).</p>
                <h3>Coupe Transversale</h3>
                <p>Substance grise centrale (forme de H ou papillon) contenant les corps cellulaires. Substance blanche périphérique contenant les fibres nerveuses.</p>
            `,
            summary: ["Substance Grise = Centre.", "Substance Blanche = Périphérie. Inverse de l'encéphale."],
            exercises: []
        },
        {
            id: 'chap-7',
            part: 'Première partie : Relations avec le milieu',
            title: '7. Organisation du tissu nerveux',
            content: `
                <h3>Le Neurone</h3>
                <p>Cellule nerveuse spécialisée, incapable de division. Composée de :</p>
                <ul>
                    <li><strong>Corps cellulaire (Soma) :</strong> Contient le noyau.</li>
                    <li><strong>Dendrites :</strong> Prolongements courts et ramifiés (réception).</li>
                    <li><strong>Axone :</strong> Prolongement long unique (émission).</li>
                </ul>
            `,
            summary: ["Neurone = Unité fonctionnelle.", "Cellules gliales = Nutrition et protection."],
            exercises: []
        },
        {
            id: 'chap-8',
            part: 'Première partie : Relations avec le milieu',
            title: '8. Propriétés du tissu nerveux',
            content: `
                <h3>Excitabilité</h3>
                <p>Capacité à réagir à un stimulus (mécanique, électrique, chimique) en modifiant son état électrique.</p>
                <h3>Conductibilité</h3>
                <p>Capacité à propager cette modification le long de la membrane (axone).</p>
            `,
            summary: ["Stimulus infraliminaire = Pas de réponse.", "Loi du tout ou rien."],
            exercises: []
        },
        {
            id: 'chap-9',
            part: 'Première partie : Relations avec le milieu',
            title: '9. Phénomènes électriques (Influx)',
            content: `
                <h3>Potentiel de Repos (PR)</h3>
                <p>Différence de potentiel de -70mV entre l'intérieur (-) et l'extérieur (+) de la membrane au repos.</p>
                <h3>Potentiel d'Action (PA)</h3>
                <p>Variation transitoire du potentiel (~1ms) : Dépolarisation (+30mV) -> Repolarisation -> Hyperpolarisation -> Retour au PR.</p>
            `,
            summary: ["PA = Signal élémentaire.", "L'amplitude du PA est constante."],
            exercises: []
        },
        {
            id: 'chap-10',
            part: 'Première partie : Relations avec le milieu',
            title: '10. Conduction de l\'influx nerveux',
            content: `
                <h3>Mécanisme</h3>
                <p>Courants locaux de proche en proche.</p>
                <h3>Vitesse</h3>
                <ul>
                    <li><strong>Fibres myélinisées :</strong> Conduction saltatoire (de nœud de Ranvier en nœud de Ranvier). Rapide (jusqu'à 100 m/s).</li>
                    <li><strong>Fibres amyéliniques :</strong> Conduction continue. Plus lente.</li>
                </ul>
            `,
            summary: ["Myéline = Isolant.", "Plus le diamètre est grand, plus ça va vite."],
            exercises: []
        },
        {
            id: 'chap-11',
            part: 'Première partie : Relations avec le milieu',
            title: '11. Notion de synapse',
            content: `
                <h3>Définition</h3>
                <p>Zone de contact fonctionnel entre deux neurones ou un neurone et un effecteur.</p>
                <h3>Fonctionnement (Synapse chimique)</h3>
                <p>1. Arrivée du PA pré-synaptique.<br>2. Entrée de Ca2+.<br>3. Exocytose des vésicules de neurotransmetteur (NT).<br>4. Fixation du NT sur les récepteurs post-synaptiques.<br>5. Création d'un PPS (Potentiel Post-Synaptique).</p>
            `,
            summary: ["Unidirectionnelle.", "Délai synaptique (0.5ms).", "Excitratrice (PPSE) ou Inhibitrice (PPSI)."],
            exercises: []
        },
        {
            id: 'chap-12',
            part: 'Première partie : Relations avec le milieu',
            title: '12. Mouvements involontaires ou réflexes',
            content: `
                <h3>Définition</h3>
                <p>Réaction motrice involontaire suite à une stimulation sensitive.</p>
                <h3>Le Réflexe Myotatique</h3>
                <p>Contraction d'un muscle en réponse à son propre étirement. Base du tonus musculaire. Circuit monosynaptique.</p>
            `,
            summary: ["Arc réflexe : Récepteur -> Moelle -> Effecteur.", "Pas d'intervention du cerveau."],
            exercises: []
        },
        {
            id: 'chap-13',
            part: 'Première partie : Relations avec le milieu',
            title: '13. Mouvements volontaires ou spontanés',
            content: `
                <h3>Commande</h3>
                <p>Cortex moteur (Lobe frontal, aire 4). Organisation somatotopique (Homonculus moteur).</p>
                <h3>Voies Descendantes</h3>
                <p>Faisceau pyramidal. Croisement au niveau du bulbe rachid (décussation). L'hémisphère gauche commande l'hémicorps droit.</p>
            `,
            summary: ["Le cervelet coordonne et lisse le mouvement.", "Lésion cortex gauche = Hémiplégie droite."],
            exercises: []
        },
        {
            id: 'chap-14',
            part: 'Première partie : Relations avec le milieu',
            title: '14. Structure du muscle strié',
            content: `
                <h3>Macroscopie</h3>
                <p>Muscle entouré d'aponévrose, formé de faisceaux.</p>
                <h3>Microscopie (Fibre)</h3>
                <p>Cellule géante plurinucléée (syncytium). Contient des myofibrilles striées.</p>
                <h3>Ultra-structure (Sarcomère)</h3>
                <p>Alternance de filaments fins d'Actine et épais de Myosine. Délimité par deux stries Z.</p>
            `,
            summary: ["Strie Z = Limite sarcomère.", "Bande A (sombre) = Myosine.", "Bande I (claire) = Actine seule."],
            exercises: []
        },
        {
            id: 'chap-15',
            part: 'Première partie : Relations avec le milieu',
            title: '15. Fonctionnement du muscle',
            content: `
                <h3>Mécanisme de la contraction</h3>
                <p>Glissement de l'actine vers le centre du sarcomère (rapprochement des stries Z). Nécessite hydrolyse de l'ATP (énergie) et ions Ca2+.</p>
                <h3>Phénomènes associés</h3>
                <p>Électriques (Potentiel de plaque motrice), Thermiques (Chaleur d'activation, secousse, retardée), Chimiques (Conso O2 et Glucose).</p>
            `,
            summary: ["ATP nécessaire pour fixer ET détacher la myosine.", "Tétanos = fusion de secousses."],
            exercises: []
        }
    ]
};
