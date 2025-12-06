export const svt1sData = {
    id: 'svt-1s',
    title: 'SVT 1ère S',
    author: 'SymLab Team (Conforme Programme Sénégal)',
    description: 'Programme complet de SVT 1ère S : Biologie Cellulaire, Physiologie et Géologie.',
    chapters: [
        // ==========================================
        // PARTIE 1 : BIOLOGIE CELLULAIRE
        // ==========================================
        {
            id: 'svt-1s-01',
            part: 'Biologie Cellulaire',
            title: "1. Techniques d'étude de la cellule",
            story: "L'invisible devient visible. Du microscope optique aux techniques de coloration, comment observer le vivant ?",
            content: `
                <h3>1. Microscopie</h3>
                <p><strong>Microscope Optique (MO) :</strong> Utilise la lumière ($G \\times 2000$). Permet de voir les cellules vivantes.</p>
                <p><strong>Microscope Électronique (ME) :</strong> Utilise des électrons ($G \\times 100 000$). Résolution nanométrique (Organites détaillés) mais cellules mortes.</p>

                <h3>2. Techniques de préparation</h3>
                <ul>
                    <li>Fixation (tuer la cellule en gardant sa structure).</li>
                    <li>Coupe (Microtome).</li>
                    <li>Coloration : Bleu de méthylène (noyau), Lugol (amidon).</li>
                </ul>
            `,
            summary: ["MO pour vue d'ensemble, ME pour ultrastructure."],
            exercises: [{ id: 'exo-svt1s-01', question: "Pour observer une cellule vivante, on utilise...", options: ["Un microscope optique", "Un microscope électronique à transmission", "Une loupe", "Un télescope"], correctAnswer: 0, explanation: "Le ME nécessite le vide, ce qui tue la cellule." }]
        },
        {
            id: 'svt-1s-02',
            part: 'Biologie Cellulaire',
            title: '2. Organisation d\'une cellule',
            story: "Eucaryote, Procaryote, Végétale, Animale... Une ville miniature fortifiée.",
            content: `
                <h3>1. Structure de base</h3>
                <p>Membrane plasmique, Cytoplasme, Noyau (chez les Eucaryotes).</p>

                <h3>2. Comparaison Animale / Végétale</h3>
                <ul>
                    <li><strong>Végétale :</strong> Paroi pecto-cellulosique (forme rigide), vacuole géante, chloroplastes.</li>
                    <li><strong>Animale :</strong> Forme variable, pas de paroi, centrosome.</li>
                </ul>

                <h3>3. Ultrastructure (Organites)</h3>
                <p>Mitochondries (énergie), Réticulum endoplasmique (transport), Appareil de Golgi (maturation), Ribosomes (synthèse protéines).</p>
            `,
            summary: ["Cellule végétale = Paroi + Vacuole + Plastes."],
            exercises: [{ id: 'exo-svt1s-02', question: "Quel organite est le siège de la respiration cellulaire ?", options: ["Chloroplaste", "Mitochondrie", "Noyau", "Ribosome"], correctAnswer: 1, explanation: "La mitochondrie est la centrale énergétique de la cellule." }]
        },
        {
            id: 'svt-1s-03',
            part: 'Biologie Cellulaire',
            title: '3. Bactéries et Virus',
            story: "Les microbes. Amis ou ennemis ?",
            content: `
                <h3>1. Bactéries (Procaryotes)</h3>
                <p>Pas de noyau vrai (ADN libre). Paroi bactérienne. Division par scissiparité.</p>
                <p>Formes : Coques (rondes), Bacilles (bâtonnets).</p>

                <h3>2. Virus (Acellulaires)</h3>
                <p>Parasites obligatoires. Constitué d'une capside (protéines) et d'un acide nucléique (ADN ou ARN).</p>
                <p>Ne peuvent se reproduire qu'en détournant la machinerie d'une cellule hôte.</p>
            `,
            summary: ["Procaryote = Sans noyau.", "Virus = Parasite absolu."],
            exercises: [{ id: 'exo-svt1s-03', question: "Le VIH est un...", options: ["Bactérie", "Virus à ARN (Retrovirus)", "Champignon", "Protiste"], correctAnswer: 1, explanation: "Le VIH est un rétrovirus qui infecte les lymphocytes T4." }]
        },
        {
            id: 'svt-1s-04',
            part: 'Biologie Cellulaire',
            title: '4. Les échanges cellulaires',
            story: "La douane cellulaire. Qui entre, qui sort ?",
            content: `
                <h3>1. Perméabilité membranaire</h3>
                <p>La membrane est sélective.</p>

                <h3>2. Transports Passifs (Sens du gradient)</h3>
                <ul>
                    <li><strong>Diffusion simple :</strong> Solutés vont du + concentré vers le - concentré.</li>
                    <li><strong>Osmose :</strong> L'eau va du milieu hypotonique (moins salé) vers hypertonique (plus salé).</li>
                </ul>

                <h3>3. Transports Actifs</h3>
                <p>Contre le gradient de concentration. Nécessitent de l'énergie (ATP). Ex: Pompe Na+/K+.</p>

                <h3>4. Endocytose / Exocytose</h3>
                <p>Transport de grosses particules par déformation de la membrane.</p>
            `,
            summary: ["Osmose = Mouvement d'eau.", "Turgescence (gonflée) vs Plasmolyse (rétrécie)."],
            exercises: [{ id: 'exo-svt1s-04', question: "Une cellule placée dans de l'eau distillée va...", options: ["Éclater (Turgescence/Hémolyse)", "Rétrécir (Plasmolyse)", "Ne rien faire", "Se diviser"], correctAnswer: 0, explanation: "L'eau distillée est hypotonique. L'eau entre massivement pour diluer le milieu intracellulaire." }]
        },
        {
            id: 'svt-1s-05',
            part: 'Biologie Cellulaire',
            title: '5. Synthèse des protéines',
            story: "Le dogme central : ADN -> ARN -> Protéine.",
            content: `
                <h3>1. Transcription (Noyau)</h3>
                <p>Copie d'un gène de l'ADN en ARN messager (ARNm). L'enzyme est l'ARN polymérase.</p>
                <p>Complémentarité : A-U, G-C (l'Uracile remplace la Thymine).</p>

                <h3>2. Traduction (Cytoplasme)</h3>
                <p>Les Ribosomes lisent l'ARNm par codons (triplets). Chaque codon correspond à un acide aminé (Code génétique).</p>
                <p>L'ARN de transfert (ARNt) apporte les acides aminés.</p>
            `,
            summary: ["ADN (Double hélice) -> ARNm (Simple brin) -> Polypeptide."],
            exercises: [{ id: 'exo-svt1s-05', question: "Si l'ADN est TAC, l'ARNm sera...", options: ["ATG", "AUG", "UAC", "GCA"], correctAnswer: 1, explanation: "T $\\to$ A, A $\\to$ U (dans ARN), C $\\to$ G." }]
        },
        {
            id: 'svt-1s-06',
            part: 'Biologie Cellulaire',
            title: '6. Les chromosomes',
            story: "Le support de l'hérédité. Condensés pour mieux voyager.",
            content: `
                <h3>1. Structure</h3>
                <p>Constitués d'ADN et d'histones. Visibles seulement lors de la division.</p>
                <p>Caryotype : Ensemble des chromosomes classés (Homme 2n=46 : 22 paires autosomes + XY).</p>

                <h3>2. Cycle Cellulaire</h3>
                <p>Interphase (G1, S, G2) : Réplication de l'ADN (Chromosomes simples $\\to$ doubles).</p>
                <p>Mitose (M) : Séparation.</p>
            `,
            summary: ["Chromatides sœurs sont identiques.", "Centromère lie les chromatides."],
            exercises: [{ id: 'exo-svt1s-06', question: "Chez l'homme, les cellules somatiques sont...", options: ["Haploïdes (n)", "Diploïdes (2n)", "Triploïdes", "Aneuploïdes"], correctAnswer: 1, explanation: "2n = 46. Seules les gamètes sont haploïdes (n=23)." }]
        },
        {
            id: 'svt-1s-07',
            part: 'Biologie Cellulaire',
            title: '7. La Mitose',
            story: "Une cellule mère donne deux cellules filles identiques. La photocopie conforme.",
            content: `
                <h3>1. Les Phases</h3>
                <ul>
                    <li><strong>Prophase :</strong> Condensation, disparition enveloppe nucléaire.</li>
                    <li><strong>Métaphase :</strong> Plaque équatoriale.</li>
                    <li><strong>Anaphase :</strong> Séparation des chromatides (ascension polaire).</li>
                    <li><strong>Télophase :</strong> Décondensation, cytodiérèse (séparation cytoplasme).</li>
                </ul>

                <h3>2. Importance</h3>
                <p>Assure la constance de l'information génétique. Croissance et renouvellement tissulaire.</p>
            `,
            summary: ["P-M-A-T.", "Conservation du nombre de chromosomes (2n $\\to$ 2n)."],
            exercises: [{ id: 'exo-svt1s-07', question: "À quelle phase les chromosomes sont-ils alignés au centre ?", options: ["Prophase", "Métaphase", "Anaphase", "Télophase"], correctAnswer: 1, explanation: "Plaque équatoriale = Métaphase." }]
        },
        {
            id: 'svt-1s-08',
            part: 'Biologie Cellulaire',
            title: '8. Mouvements cellulaires',
            story: "La cellule n'est pas statique. Elle bouge, se déforme, nage.",
            content: `
                <h3>1. Cyclose</h3>
                <p>Courant cytoplasmique (visible chez l'Elodée).</p>
                
                <h3>2. Mouvements amiboïdes</h3>
                <p>Déformation par pseudopodes (Globules blancs, Amibes).</p>
                
                <h3>3. Cils et Flagelles</h3>
                <p>Appendices locomoteurs (Spermatozoïdes, Paramécie).</p>
            `,
            summary: ["Le cytosquelette est le moteur de ces mouvements."],
            exercises: [{ id: 'exo-svt1s-08', question: "Les spermatozoïdes se déplacent grâce à...", options: ["Des cils", "Un flagelle", "Des pseudopodes", "La gravité"], correctAnswer: 1, explanation: "Le flagelle agit comme une hélice propulsive." }]
        },

        // ==========================================
        // PARTIE 2 : PHYSIOLOGIE & NUTRITION
        // ==========================================
        {
            id: 'svt-1s-09',
            part: 'Physiologie',
            title: '9. Respiration et Énergie',
            story: "Brûler du glucose pour produire de l'ATP. La centrale électrique cellulaire.",
            content: `
                <h3>1. Respiration Cellulaire (Aérobie)</h3>
                <p>Dégradation complète du glucose en présence d'$O_2$.</p>
                <p>$$ C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + Énergie (38 ATP) $$</p>
                <p>Lieu : Mitochondrie.</p>

                <h3>2. Fermentation (Anaérobie)</h3>
                <p>Dégradation incomplète sans $O_2$. Faible rendement (2 ATP). Fermentation lactique ou alcoolique.</p>
            `,
            summary: ["Respiration = Oxydation totale.", "ATP = Monnaie énergétique universelle."],
            exercises: [{ id: 'exo-svt1s-09', question: "Combien d'ATP rapporte la respiration complète d'une molécule de glucose ?", options: ["2", "36 à 38", "100", "0"], correctAnswer: 1, explanation: "C'est un processus très rentable énergétiquement." }]
        },
        {
            id: 'svt-1s-10',
            part: 'Physiologie',
            title: '10. Les Aliments',
            story: "Glucides, Lipides, Protides. Les briques du vivant et le carburant.",
            content: `
                <h3>1. Classification</h3>
                <ul>
                    <li><strong>Bâtisseurs :</strong> Protides (Viande, poisson, légumineuses), Sels minéraux (Calcium).</li>
                    <li><strong>Énergétiques :</strong> Glucides (Sucres, féculents), Lipides (Graisses).</li>
                    <li><strong>Fonctionnels :</strong> Vitamines, Eau, Fibres.</li>
                </ul>

                <h3>2. Rôle</h3>
                <p>Les glucides sont l'énergie rapide, les lipides la réserve, les protides la structure.</p>
            `,
            summary: ["Test : Eau iodée bleuit l'amidon. Liqueur de Fehling rouge brique les sucres réducteurs."],
            exercises: [{ id: 'exo-svt1s-10', question: "L'amidon est un...", options: ["Lipide", "Glucide simple", "Glucide complexe", "Protide"], correctAnswer: 2, explanation: "C'est un polysaccharide (chaîne de glucose)." }]
        },
        {
            id: 'svt-1s-11',
            part: 'Physiologie',
            title: '11. La Digestion',
            story: "Transformer les aliments (macromolécules) en nutriments (molécules simples) absorbables.",
            content: `
                <h3>1. Phénomènes Mécaniques</h3>
                <p>Mastication (Bouche), Brassage (Estomac), Péristaltisme (Intestin).</p>

                <h3>2. Phénomènes Chimiques (Enzymes)</h3>
                <ul>
                    <li>Salive (Amylase) : Amidon $\\to$ Maltose.</li>
                    <li>Suc gastrique (Pepsine) : Protéines $\\to$ Peptides.</li>
                    <li>Suc pancréatique et intestinal : Finition (Glucose, Acides aminés, Acides gras).</li>
                </ul>

                <h3>3. Absorption</h3>
                <p>Passage des nutriments dans le sang au niveau des villosités intestinales (Intestin grêle).</p>
            `,
            summary: ["Spécificité enzymatique.", "Grande surface d'absorption intestinale."],
            exercises: [{ id: 'exo-svt1s-11', question: "Où commence la digestion des protéines ?", options: ["Bouche", "Estomac", "Intestin grêle", "Colon"], correctAnswer: 1, explanation: "Par la pepsine en milieu acide." }]
        },
        {
            id: 'svt-1s-12',
            part: 'Physiologie',
            title: '12. Ration Alimentaire',
            story: "Manger ni trop, ni trop peu. L'équilibre quantitatif et qualitatif.",
            content: `
                <h3>1. Besoins énergétiques</h3>
                <p>Dépendent de l'âge, du sexe, de l'activité physique et de l'état physiologique (Grossesse).</p>
                <p>Métabolisme de base : Dépense minimale au repos.</p>

                <h3>2. Lois de l'équilibre (GPL)</h3>
                <p>421 GPL : 4 parts Glucides, 2 parts Protides, 1 part Lipides (environ). L'apport doit couvrir la dépense.</p>
                <p>Carences (Kwashiorkor, Scorbut) vs Surabondance (Obésité, Diabète).</p>
            `,
            summary: ["1g Lipides = 9 kcal (38 kJ).", "1g Glucides/Protides = 4 kcal (17 kJ)."],
            exercises: [{ id: 'exo-svt1s-12', question: "Quelle est la maladie due à une carence en protéines chez l'enfant ?", options: ["Le Scorbut", "Le Kwashiorkor", "Le Beri-Beri", "L'Anémie"], correctAnswer: 1, explanation: "Caractérisé par des œdèmes et un retard de croissance." }]
        },
        {
            id: 'svt-1s-13',
            part: 'Physiologie',
            title: '13. Intro Physiologie (Homéostasie)',
            story: "Le corps maintient son équilibre intérieur malgré les changements extérieurs.",
            content: `
                <h3>1. Milieu Intérieur</h3>
                <p>Sang + Lymphe + Liquide interstitiel. Baigne les cellules.</p>

                <h3>2. Constantes physiologiques</h3>
                <p>Glycémie (~1g/L), pH (7.4), Température (37°C).</p>
                <p>Régulation nerveuse et hormonale (Adrénaline, Insuline...).</p>
            `,
            summary: ["Homéostasie = Équilibre dynamique."],
            exercises: [{ id: 'exo-svt1s-13', question: "Quel est le pH normal du sang ?", options: ["7", "7.4", "2", "18"], correctAnswer: 1, explanation: "Légèrement basique." }]
        },

        // ==========================================
        // PARTIE 3 : GÉOLOGIE
        // ==========================================
        {
            id: 'svt-1s-14',
            part: 'Géologie',
            title: '14. Introduction à la Géologie',
            story: "La Terre est une archive. La géologie déchiffre son histoire.",
            content: `
                <h3>1. Temps Géologiques</h3>
                <p>Échelle stratigraphique : Précambrien, Primaire, Secondaire, Tertiaire, Quaternaire.</p>
                <p>Principes : Actualisme, Superposition.</p>
            `,
            summary: ["Géodynamique interne (Volcans, Séismes) et externe (Erosion, Sédimentation)."],
            exercises: [{ id: 'exo-svt1s-14', question: "L'ère des dinosaures, c'est...", options: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], correctAnswer: 1, explanation: "Le Mésozoïque (Trias, Jurassique, Crétacé)." }]
        },
        {
            id: 'svt-1s-15',
            part: 'Géologie',
            title: '15. Structure interne du globe',
            story: "Voyage au centre de la Terre. Croûte, Manteau, Noyau.",
            content: `
                <h3>1. Modèle Sismique (PREM)</h3>
                <p>Les ondes sismiques (P et S) révèlent les couches.</p>
                <ul>
                    <li><strong>Croûte :</strong> Solide. Océanique (Basalte) ou Continentale (Granite).</li>
                    <li><strong>Manteau :</strong> Solide mais ductile (péridotite).</li>
                    <li><strong>Noyau :</strong> Externe liquide (arrête les ondes S), Interne solide (Graine).</li>
                </ul>
                <p>Discontinuités : Moho, Gutenberg, Lehmann.</p>
            `,
            summary: ["Lithosphère (rigide) flotte sur Asthénosphère (visqueuse)."],
            exercises: [{ id: 'exo-svt1s-15', question: "La discontinuité de Moho sépare...", options: ["Noyau et Manteau", "Croûte et Manteau", "Manteau Sup et Inf", "Air et Terre"], correctAnswer: 1, explanation: "La frontière entre la croûte et le manteau supérieur." }]
        },
        {
            id: 'svt-1s-16',
            part: 'Géologie',
            title: '16. Tectonique des plaques',
            story: "La dérive des continents expliquée. Le ballet des plaques lithosphériques.",
            content: `
                <h3>1. Mouvements</h3>
                <ul>
                    <li><strong>Divergence (Accrétion) :</strong> Dorsales océaniques. Création de croûte.</li>
                    <li><strong>Convergence (Subduction/Collision) :</strong> Fosses. Destruction de croûte ou formation de montagnes (Orogenèse).</li>
                    <li><strong>Coulissage :</strong> Failles transformantes.</li>
                </ul>

                <h3>2. Moteur</h3>
                <p>Courants de convection dans le manteau (chaleur interne).</p>
            `,
            summary: ["Wegener avait raison.", "Le tapis roulant océanique."],
            exercises: [{ id: 'exo-svt1s-16', question: "Au niveau d'une dorsale, les plaques...", options: ["S'écartent", "Se rapprochent", "Coulissent", "Disparaissent"], correctAnswer: 0, explanation: "Divergence et production de nouveau plancher océanique." }]
        },
        {
            id: 'svt-1s-17',
            part: 'Géologie',
            title: '17. Roches Magmatiques (Granite/Basalte)',
            story: "Nées du feu. Refroidissement lent ou rapide ?",
            content: `
                <h3>1. Granite (Plutonique)</h3>
                <p>Refroidissement lent en profondeur. Structure <strong>grenue</strong> (cristaux visibles). Roche acide (riche en silice). Continentale.</p>
                
                <h3>2. Basalte (Volcanique)</h3>
                <p>Refroidissement rapide en surface. Structure <strong>microlitique</strong> (pâte vitreuse + petits cristaux). Roche basique. Océanique.</p>
            `,
            summary: ["Grenue = Cristaux jointifs.", "Microlitique = Verre + Microlites."],
            exercises: [{ id: 'exo-svt1s-17', question: "Une roche à structure microlitique provient d'un refroidissement...", options: ["Lent", "Rapide", "Très lent", "Glaciaire"], correctAnswer: 1, explanation: "Le magma n'a pas eu le temps de cristalliser entièrement." }]
        },
        {
            id: 'svt-1s-18',
            part: 'Géologie',
            title: '18. Roches Sédimentaires',
            story: "L'archive de la surface. Érosion, Transport, Sédimentation, Diagenèse.",
            content: `
                <h3>1. Formation</h3>
                <p>Dépôt de particules (sables, argiles) ou précipitation chimique (calcaires) en couches (strates).</p>
                <p>Contiennent souvent des fossiles.</p>

                <h3>2. Classification</h3>
                <p>Détritiques (Sables), Chimiques (Sel), Biologiques (Charbon).</p>
            `,
            summary: ["Diagenèse : Transformation des sédiments meubles en roche solide."],
            exercises: [{ id: 'exo-svt1s-18', question: "Le calcaire est une roche...", options: ["Magmatique", "Sédimentaire", "Métamorphique", "Spatiale"], correctAnswer: 1, explanation: "Formée par accumulation de coquilles ou précipitation." }]
        },
        {
            id: 'svt-1s-19',
            part: 'Géologie',
            title: '19. Roches Métamorphiques',
            story: "Transformées par la pression et la chaleur sans fondre.",
            content: `
                <h3>1. Métamorphisme</h3>
                <p>Transformation à l'état solide sous l'effet de $P$ et $T$.</p>
                <ul>
                    <li>De contact : Autour d'une intrusion magmatique (Cuisson).</li>
                    <li>Régional : Lors des collisions (Orogenèse).</li>
                </ul>

                <h3>2. Exemples</h3>
                <p>Calcaire $\\to$ Marbre. Argile $\\to$ Schiste $\\to$ Gneiss.</p>
            `,
            summary: ["Foliation/Schistosité : Feuillets dus à la pression."],
            exercises: [{ id: 'exo-svt1s-19', question: "Le marbre provient du métamorphisme du...", options: ["Granite", "Calcaire", "Basalte", "Sable"], correctAnswer: 1, explanation: "Recristallisation du calcaire." }]
        },
        {
            id: 'svt-1s-20',
            part: 'Géologie',
            title: '20. Ensembles géologiques du Sénégal',
            story: "Sénégal Occidental vs Oriental. Jeune vs Vieux.",
            content: `
                <h3>1. Bassin Sédimentaire (Ouest)</h3>
                <p>Secondaire/Tertiaire/Quaternaire. Couvre 75% du pays. Sables, calcaires, argiles.</p>
                
                <h3>2. Socle (Sud-Est)</h3>
                <p>Précambrien (Boutonnière de Kédougou). Roches cristallines (Granites, andésites) et métamorphiques.</p>
            `,
            summary: ["Dakar est sur le volcanisme tertiaire (Mamelles)."],
            exercises: [{ id: 'exo-svt1s-20', question: "Où trouve-t-on les roches les plus anciennes au Sénégal ?", options: ["Dakar", "Saint-Louis", "Kédougou", "Ziguinchor"], correctAnswer: 2, explanation: "Dans le socle précambrien à l'Est." }]
        },
        {
            id: 'svt-1s-21',
            part: 'Géologie',
            title: '21. Ressources géologiques du Sénégal',
            story: "L'or, le fer, le phosphate, le pétrole. Une richesse sous-terraine.",
            content: `
                <h3>1. Ressources du Bassin</h3>
                <p>Phosphates (Taïba, Matam), Calcaires (Cimenteries Rufisque), Sables titanifères (Littoral), Pétrole/Gaz (Offshore).</p>

                <h3>2. Ressources du Socle</h3>
                <p>Or (Sabodala), Fer (Falémé), Marbre.</p>
            `,
            summary: ["Le phosphate est la première richesse minière exploitée."],
            exercises: [{ id: 'exo-svt1s-21', question: "Quelle ressource exploite-t-on à Taïba ?", options: ["L'or", "Le fer", "Le phosphate", "Le diamant"], correctAnswer: 2, explanation: "C'est l'un des plus grands gisements au monde." }]
        },
        {
            id: 'svt-1s-22',
            part: 'Géologie',
            title: '22. Ressources Naturelles',
            story: "Renouvelables ou non ? Gérer le stock pour les futures générations.",
            content: `
                <h3>1. Classification</h3>
                <ul>
                    <li>Renouvelables : Eau (cycle), Solaire, Biomasse (si gérée).</li>
                    <li>Non renouvelables : Énergies fossiles, Minerais.</li>
                </ul>
                
                <h3>2. Impact</h3>
                <p>Exploitation minière : Pollution, déforestation. Nécessité d'études d'impact.</p>
            `,
            summary: ["Développement durable."],
            exercises: [{ id: 'exo-svt1s-22', question: "Le pétrole est une énergie...", options: ["Renouvelable", "Fossile non renouvelable", "Propre", "Illimitée"], correctAnswer: 1, explanation: "Il met des millions d'années à se former." }]
        },
        {
            id: 'svt-1s-23',
            part: 'Géologie',
            title: '23. Paléogéographie',
            story: "Reconstruire le passé. Quand le Sénégal était sous la mer.",
            content: `
                <h3>1. Principes</h3>
                <p>Utiliser les fossiles (Faciès) pour reconstituer les milieux anciens (Lagune, Mer profonde, Continent).</p>
                <p>Transgressions (Montée de la mer) et Régressions (Retrait).</p>

                <h3>2. Histoire du Sénégal</h3>
                <p>Plusieurs cycles de transgression marine ont déposé les sédiments du bassin.</p>
            `,
            summary: ["Fossiles stratigraphiques (Datation) vs Fossiles de faciès (Milieu)."],
            exercises: [{ id: 'exo-svt1s-23', question: "Une transgression marine, c'est...", options: ["La mer qui avance sur les terres", "La mer qui recule", "Un tsunami", "Une pluie intense"], correctAnswer: 0, explanation: "Entraîne des dépôts marins sur le continent." }]
        }
    ]
};
