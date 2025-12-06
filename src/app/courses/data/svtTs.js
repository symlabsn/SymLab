export const svtTsData = {
    id: 'svt-ts',
    title: 'SVT Terminale S',
    chapters: [
        // =====================================
        // INTRODUCTION (1-3)
        // =====================================
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

        // =====================================
        // PREMIÈRE PARTIE : RELATIONS AVEC LE MILIEU (4-15)
        // =====================================
        {
            id: 'chap-5',
            part: 'Première partie : Relations avec le milieu',
            title: '5. Organisation de l\'encéphale',
            content: `<h3>Structure Globale</h3><p>Cerveau (télencéphale + diencéphale), Cervelet, Tronc cérébral.</p>`
        },
        {
            id: 'chap-6',
            part: 'Première partie : Relations avec le milieu',
            title: '6. Organisation de la moelle épinière',
            content: `<h3>Anatomie</h3><p>Substance blanche périphérique, substance grise centrale (cornes antérieures et postérieures).</p>`
        },
        {
            id: 'chap-7',
            part: 'Première partie : Relations avec le milieu',
            title: '7. Organisation du tissu nerveux',
            content: `<h3>Le Neurone</h3><p>Unités cellulaires : neurones (réseau) et cellules gliales (soutien).</p>`
        },
        {
            id: 'chap-8',
            part: 'Première partie : Relations avec le milieu',
            title: '8. Propriétés du tissu nerveux',
            content: `<h3>Physiologie</h3><p>Excitabilité (réponse aux stimuli) et Conductibilité (transmission du message).</p>`
        },
        {
            id: 'chap-9',
            part: 'Première partie : Relations avec le milieu',
            title: '9. Phénomènes électriques (Influx)',
            content: `<h3>Potentiels</h3><p>Potentiel de Repos (-70mV). Potentiel d'Action (+30mV, dépolarisation/repolarisation).</p>`
        },
        {
            id: 'chap-10',
            part: 'Première partie : Relations avec le milieu',
            title: '10. Conduction de l\'influx nerveux',
            content: `<h3>Propagation</h3><p>Saltatoire (fibres myélinisées) ou continue. Vitesse proportionnelle au diamètre de la fibre.</p>`
        },
        {
            id: 'chap-11',
            part: 'Première partie : Relations avec le milieu',
            title: '11. Notion de synapse',
            content: `<h3>Transmission</h3><p>Synapse chimique : libération de neurotransmetteurs (Ach, GABA) dans l'espace synaptique.</p>`
        },
        {
            id: 'chap-12',
            part: 'Première partie : Relations avec le milieu',
            title: '12. Mouvements involontaires ou réflexes',
            content: `<h3>Réflexe Myotatique</h3><p>Contraction suite à étirement. Centre : Moelle épinière. Monosynaptique.</p>`
        },
        {
            id: 'chap-13',
            part: 'Première partie : Relations avec le milieu',
            title: '13. Mouvements volontaires',
            content: `<h3>Motricité Volontaire</h3><p>Commande : Cortex moteur. Voie pyramidale croisée.</p>`
        },
        {
            id: 'chap-14',
            part: 'Première partie : Relations avec le milieu',
            title: '14. Structure du muscle strié',
            content: `<h3>Organisation</h3><p>Fibre musculaire (sarcolemme, sarcoplasme). Myofibrilles : alternance A/I, sarcomères.</p>`
        },
        {
            id: 'chap-15',
            part: 'Première partie : Relations avec le milieu',
            title: '15. Fonctionnement du muscle',
            content: `<h3>Contraction</h3><p>Glissement Actine/Myosine. Raccourcissement sarcomère. Nécessite ATP + Ca2+.</p>`
        },

        // =====================================
        // DEUXIÈME PARTIE : ACTIVITÉ CARDIAQUE (16-17)
        // =====================================
        {
            id: 'chap-16',
            part: 'Deuxième partie : Activité cardiaque',
            title: '16. Automatisme cardiaque',
            content: `
                <h3>Origine du battement</h3>
                <p>Le cœur est doué d'automatisme grâce au tissu nodal (cellules auto-excitables).</p>
                <ul>
                    <li>Nœud sinusal (Keith & Flack) : impose le rythme.</li>
                    <li>Nœud septal et Faisceau de His : conduction.</li>
                </ul>
            `,
            summary: ["Cœur isolé bat toujours.", "Rythme sinusal ~100 bpm sans innervation."],
            exercises: []
        },
        {
            id: 'chap-17',
            part: 'Deuxième partie : Activité cardiaque',
            title: '17. Activité cardiaque et pression artérielle',
            content: `
                <h3>Régulation</h3>
                <p>Le système nerveux végétatif adapte le rythme cardiaque :</p>
                <ul>
                    <li>Parasympathique (Nerfs X) : Cardio-modérateur (Acétylcholine).</li>
                    <li>Sympathique : Cardio-accélérateur (Noradrénaline).</li>
                </ul>
                <h3>Pression Artérielle</h3>
                <p>Régulée à court terme par le baroréflexe (boucle de régulation nerveuse).</p>
            `,
            summary: ["Barorécepteurs (sinus carotide).", "Centre bulbaire intègre les infos."],
            exercises: []
        },

        // =====================================
        // REPRODUCTION (18-21)
        // =====================================
        {
            id: 'chap-18',
            part: 'Reproduction',
            title: '18. Fécondation et problèmes liés',
            content: `
                <h3>La Fécondation</h3>
                <p>Rencontre des gamètes dans le tiers supérieur des trompes. Fusion des membranes, puis des pronuclei (Caryogamie). Rétablissement de la diploïdie.</p>
                <h3>Problèmes</h3>
                <p>Stérilité (masculine/féminine), Contraception (méthodes hormonales, mécaniques), PMA (FIVETE).</p>
            `,
            summary: ["Monospermie : un seul spermatozoïde féconde l'ovule.", "Capacitation des spermatozoïdes nécessaire."],
            exercises: []
        },
        {
            id: 'chap-19',
            part: 'Reproduction',
            title: '19. Régulation des appareils génitaux',
            content: `
                <h3>Chez l'homme</h3>
                <p>GnRH (Hypothalamus) -> FSH/LH (Hypophyse) -> Testostérone (Testicule). Rétrocontrôle négatif constant.</p>
                <h3>Chez la femme</h3>
                <p>Cycles sexuels. Rétrocontrôle négatif la plupart du temps, mais <strong>positif</strong> avant l'ovulation (Pic de LH).</p>
            `,
            summary: ["FSH stimule la gamétogenèse.", "LH stimule la production hormonale (testostérone/progestérone)."],
            exercises: []
        },
        {
            id: 'chap-20',
            part: 'Reproduction',
            title: '20. Gestation, accouchement et lactation',
            content: `
                <h3>Gestation</h3>
                <p>Maintien du corps jaune puis placenta. Sécrétion HCG, Oestrogènes, Progestérone (silence utérin).</p>
                <h3>Accouchement</h3>
                <p>Chute de progestérone + Pic d'Ocytocine (contractions).</p>
                <h3>Lactation</h3>
                <p>Préparée par oestrogènes/progestérone. Déclenchée par prolactine. Entretien par succion (réflexe).</p>
            `,
            summary: ["HCG = hormone de grossesse (détectée par tests).", "Ocytocine = Hormone de l'amour et de l'accouchement."],
            exercises: []
        },
        {
            id: 'chap-21',
            part: 'Reproduction',
            title: '21. Reproduction chez les spermaphytes',
            content: `
                <h3>Cycle de vie</h3>
                <p>Alternance de phases (Sporophyte 2n / Gamétophyte n).</p>
                <h3>Fécondation</h3>
                <p>Double fécondation des Angiospermes : Zygote principal (Plante) + Zygote accessoire (Albumen/Réserves).</p>
            `,
            summary: ["Fleur = Appareil reproducteur.", "Graine protégée par le fruit."],
            exercises: []
        },

        // =====================================
        // GÉNÉTIQUE & HÉRÉDITÉ (22-23, 29)
        // =====================================
        {
            id: 'chap-22',
            part: 'Génétique',
            title: '22. Lois statistiques de l\'hérédité',
            content: `
                <h3>Lois de Mendel</h3>
                <p>1. Uniformité des hybrides F1 (si parents purs).<br>2. Pureté des gamètes (disjonction des allèles).<br>3. Indépendance des caractères.</p>
                <h3>Cas particuliers</h3>
                <p>Codominance, Gènes liés (Linkage), Crossing-over.</p>
            `,
            summary: ["F1 hétérogène = Parents non purs.", "Test-cross révèle le génotype du dominant."],
            exercises: []
        },
        {
            id: 'chap-23',
            part: 'Génétique',
            title: '23. Hérédité humaine',
            content: `
                <h3>Particularités</h3>
                <p>Pas de croisements dirigés. Analyse de pedigree (arbres). Fécondité faible, génération longue.</p>
                <h3>Maladies</h3>
                <p>Autosomiques (Dominantes/Récessives). Gonosomiques (Liées à X ou Y). Anomalies chromosomiques (Trisomies).</p>
            `,
            summary: ["Garçon atteint, Mère saine -> Lié à X récessif probable.", "Consanguinité augmente le risque récessif."],
            exercises: []
        },

        // =====================================
        // IMMUNOLOGIE (24-26)
        // =====================================
        {
            id: 'chap-24',
            part: 'Immunologie',
            title: '24. Intégrité de l\'organisme (Système Immu)',
            content: `
                <h3>Le Soi et le Non-Soi</h3>
                <p>Marqueurs du Soi : CMH (HLA chez l'homme). Tout ce qui est différent est antigène.</p>
                <h3>Acteurs</h3>
                <p>Organes lymphoïdes (Moelle, Thymus, Ganglions, Rate). Cellules : Phagocytes, Lymphocytes B et T.</p>
            `,
            summary: ["Le système immunitaire surveille en permanence.", "CMH classe I (toutes cellules) et II (cellules immunitaires)."],
            exercises: []
        },
        {
            id: 'chap-25',
            part: 'Immunologie',
            title: '25. La réponse immunitaire',
            content: `
                <h3>RIM Non Spécifique (Innée)</h3>
                <p>Barrières, Inflammation, Phagocytose. Rapide et sans mémoire.</p>
                <h3>RIM Spécifique (Acquise)</h3>
                <p>Coopération cellulaire (Macrophage -> LT4).<br>- Humorale (LB -> Anticorps) : contre antigènes extracellulaires.<br>- Cellulaire (LT8 -> Cytotoxiques) : contre antigènes intracellulaires (virus, cancer).</p>
            `,
            summary: ["LT4 (Auxiliaires) = Pivot de la réponse spécifique.", "Interleukines = messagers chimiques."],
            exercises: []
        },
        {
            id: 'chap-26',
            part: 'Immunologie',
            title: '26. Dysfonctionnement et Aides',
            content: `
                <h3>Dysfonctionnements</h3>
                <p>Allergies (Hypersensibilité), Maladies auto-immunes, Immunodéficiences (VIH/SIDA).</p>
                <h3>Aides</h3>
                <p>Vaccination (Préventif, active la mémoire). Sérothérapie (Curatif, apporte des anticorps, transitoire).</p>
            `,
            summary: ["VIH cible les LT4.", "Vaccin = Antigène atténué."],
            exercises: []
        },

        // =====================================
        // MILIEU INTÉRIEUR (27-28)
        // =====================================
        {
            id: 'chap-27',
            part: 'Milieu Intérieur',
            title: '27. Composition et rôle du milieu intérieur',
            content: `
                <h3>Définition</h3>
                <p>Liquides extracellulaires (Sang + Lymphe + Liquide interstitiel) dans lesquels baignent les cellules.</p>
                <h3>Rôle</h3>
                <p>Interface d'échanges (Nutriments, Gaz, Déchets).</p>
            `,
            summary: ["Milieu intérieur = Mer intérieure de Claude Bernard.", "Stabilité vitale."],
            exercises: []
        },
        {
            id: 'chap-28',
            part: 'Milieu Intérieur',
            title: '28. Régulation de la constance (Homéostasie)',
            content: `
                <h3>Paramètres régulés</h3>
                <p>pH, Température, Volémie, Pression osmotique, Glycémie.</p>
                <h3>Systèmes de régulation</h3>
                <p>Nerveux (rapide) et Hormonal (durable). Boucle de régulation : Capteur -> Centre -> Effecteur.</p>
            `,
            summary: ["Homéostasie = Équilibre dynamique.", "Rein et Poumon régulent le pH."],
            exercises: []
        },

        // =====================================
        // GÉNÉTIQUE (SUITE) & CONSIGNES (29-30)
        // =====================================
        {
            id: 'chap-29',
            part: 'Génétique',
            title: '29. La génétique',
            content: `
                <h3> Support moléculaire</h3>
                <p>ADN (Double hélice). Gène (Séquence de nucléotides). Code génétique (Universel, dégénéré).</p>
                <h3>Expression</h3>
                <p>Transcription (Noyau : ADN->ARNm). Traduction (Cytoplasme : ARNm->Protéine).</p>
            `,
            summary: ["Mutation = Source de biodiversité (allèles).", "1 gène = 1 chaîne polypeptidique (souvent)."],
            exercises: []
        },
        {
            id: 'chap-30',
            part: 'Méthodologie',
            title: '30. Consignes générales',
            content: `
                <h3>Réussir son épreuve</h3>
                <p>Lire le sujet en entier. Gérer son temps. Soigner l'orthographe et la présentation.</p>
                <p>Structurer : Introduction (Problématique), Développement (paragraphes argumentés), Conclusion (Réponse).</p>
            `,
            summary: ["Logique scientifique.", "Schémas clairs et légendés."],
            exercises: []
        }
    ]
};
