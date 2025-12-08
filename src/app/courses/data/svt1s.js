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
### 1. Microscopie
**Microscope Optique (MO) :** Utilise la lumière ($G \\times 2000$). Permet de voir les cellules vivantes.

**Microscope Électronique (ME) :** Utilise des électrons ($G \\times 100 000$). Résolution nanométrique (Organites détaillés) mais cellules mortes.

### 2. Techniques de préparation
- Fixation (tuer la cellule en gardant sa structure).
- Coupe (Microtome).
- Coloration : Bleu de méthylène (noyau), Lugol (amidon).
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
### 1. Structure de base
Membrane plasmique, Cytoplasme, Noyau (chez les Eucaryotes).

### 2. Comparaison Animale / Végétale
- **Végétale :** Paroi pecto-cellulosique (forme rigide), vacuole géante, chloroplastes.
- **Animale :** Forme variable, pas de paroi, centrosome.

### 3. Ultrastructure (Organites)
Mitochondries (énergie), Réticulum endoplasmique (transport), Appareil de Golgi (maturation), Ribosomes (synthèse protéines).
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
### 1. Bactéries (Procaryotes)
Pas de noyau vrai (ADN libre). Paroi bactérienne. Division par scissiparité.

Formes : Coques (rondes), Bacilles (bâtonnets).

### 2. Virus (Acellulaires)
Parasites obligatoires. Constitué d'une capside (protéines) et d'un acide nucléique (ADN ou ARN).

Ne peuvent se reproduire qu'en détournant la machinerie d'une cellule hôte.
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
### 1. Perméabilité membranaire
La membrane est sélective.

### 2. Transports Passifs (Sens du gradient)
- **Diffusion simple :** Solutés vont du + concentré vers le - concentré.
- **Osmose :** L'eau va du milieu hypotonique (moins salé) vers hypertonique (plus salé).

### 3. Transports Actifs
Contre le gradient de concentration. Nécessitent de l'énergie (ATP). Ex: Pompe Na+/K+.

### 4. Endocytose / Exocytose
Transport de grosses particules par déformation de la membrane.
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
### 1. Transcription (Noyau)
Copie d'un gène de l'ADN en ARN messager (ARNm). L'enzyme est l'ARN polymérase.

Complémentarité : A-U, G-C (l'Uracile remplace la Thymine).

### 2. Traduction (Cytoplasme)
Les Ribosomes lisent l'ARNm par codons (triplets). Chaque codon correspond à un acide aminé (Code génétique).

L'ARN de transfert (ARNt) apporte les acides aminés.
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
### 1. Structure
Constitués d'ADN et d'histones. Visibles seulement lors de la division.

Caryotype : Ensemble des chromosomes classés (Homme 2n=46 : 22 paires autosomes + XY).

### 2. Cycle Cellulaire
Interphase (G1, S, G2) : Réplication de l'ADN (Chromosomes simples $\\to$ doubles).

Mitose (M) : Séparation.
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
### 1. Les Phases
- **Prophase :** Condensation, disparition enveloppe nucléaire.
- **Métaphase :** Plaque équatoriale.
- **Anaphase :** Séparation des chromatides (ascension polaire).
- **Télophase :** Décondensation, cytodiérèse (séparation cytoplasme).

### 2. Importance
Assure la constance de l'information génétique. Croissance et renouvellement tissulaire.
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
### 1. Cyclose
Courant cytoplasmique (visible chez l'Elodée).

### 2. Mouvements amiboïdes
Déformation par pseudopodes (Globules blancs, Amibes).

### 3. Cils et Flagelles
Appendices locomoteurs (Spermatozoïdes, Paramécie).
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
### 1. Respiration Cellulaire (Aérobie)
Dégradation complète du glucose en présence d'$O_2$.

$$ C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + Énergie (38 ATP) $$

Lieu : Mitochondrie.

### 2. Fermentation (Anaérobie)
Dégradation incomplète sans $O_2$. Faible rendement (2 ATP). Fermentation lactique ou alcoolique.
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
### 1. Classification
- **Bâtisseurs :** Protides (Viande, poisson, légumineuses), Sels minéraux (Calcium).
- **Énergétiques :** Glucides (Sucres, féculents), Lipides (Graisses).
- **Fonctionnels :** Vitamines, Eau, Fibres.

### 2. Rôle
Les glucides sont l'énergie rapide, les lipides la réserve, les protides la structure.
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
### 1. Phénomènes Mécaniques
Mastication (Bouche), Brassage (Estomac), Péristaltisme (Intestin).

### 2. Phénomènes Chimiques (Enzymes)
- Salive (Amylase) : Amidon $\\to$ Maltose.
- Suc gastrique (Pepsine) : Protéines $\\to$ Peptides.
- Suc pancréatique et intestinal : Finition (Glucose, Acides aminés, Acides gras).

### 3. Absorption
Passage des nutriments dans le sang au niveau des villosités intestinales (Intestin grêle).
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
### 1. Besoins énergétiques
Dépendent de l'âge, du sexe, de l'activité physique et de l'état physiologique (Grossesse).

Métabolisme de base : Dépense minimale au repos.

### 2. Lois de l'équilibre (GPL)
421 GPL : 4 parts Glucides, 2 parts Protides, 1 part Lipides (environ). L'apport doit couvrir la dépense.

Carences (Kwashiorkor, Scorbut) vs Surabondance (Obésité, Diabète).
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
### 1. Milieu Intérieur
Sang + Lymphe + Liquide interstitiel. Baigne les cellules.

### 2. Constantes physiologiques
Glycémie (~1g/L), pH (7.4), Température (37°C).

Régulation nerveuse et hormonale (Adrénaline, Insuline...).
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
### 1. Temps Géologiques
Échelle stratigraphique : Précambrien, Primaire, Secondaire, Tertiaire, Quaternaire.

Principes : Actualisme, Superposition.
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
### 1. Modèle Sismique (PREM)
Les ondes sismiques (P et S) révèlent les couches.
- **Croûte :** Solide. Océanique (Basalte) ou Continentale (Granite).
- **Manteau :** Solide mais ductile (péridotite).
- **Noyau :** Externe liquide (arrête les ondes S), Interne solide (Graine).

Discontinuités : Moho, Gutenberg, Lehmann.
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
### 1. Mouvements
- **Divergence (Accrétion) :** Dorsales océaniques. Création de croûte.
- **Convergence (Subduction/Collision) :** Fosses. Destruction de croûte ou formation de montagnes (Orogenèse).
- **Coulissage :** Failles transformantes.

### 2. Moteur
Courants de convection dans le manteau (chaleur interne).
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
### 1. Granite (Plutonique)
Refroidissement lent en profondeur. Structure **grenue** (cristaux visibles). Roche acide (riche en silice). Continentale.

### 2. Basalte (Volcanique)
Refroidissement rapide en surface. Structure **microlitique** (pâte vitreuse + petits cristaux). Roche basique. Océanique.
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
### 1. Formation
Dépôt de particules (sables, argiles) ou précipitation chimique (calcaires) en couches (strates).

Contiennent souvent des fossiles.

### 2. Classification
Détritiques (Sables), Chimiques (Sel), Biologiques (Charbon).
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
### 1. Métamorphisme
Transformation à l'état solide sous l'effet de $P$ et $T$.
- De contact : Autour d'une intrusion magmatique (Cuisson).
- Régional : Lors des collisions (Orogenèse).

### 2. Exemples
Calcaire $\\to$ Marbre. Argile $\\to$ Schiste $\\to$ Gneiss.
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
### 1. Bassin Sédimentaire (Ouest)
Secondaire/Tertiaire/Quaternaire. Couvre 75% du pays. Sables, calcaires, argiles.

### 2. Socle (Sud-Est)
Précambrien (Boutonnière de Kédougou). Roches cristallines (Granites, andésites) et métamorphiques.
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
### 1. Ressources du Bassin
Phosphates (Taïba, Matam), Calcaires (Cimenteries Rufisque), Sables titanifères (Littoral), Pétrole/Gaz (Offshore).

### 2. Ressources du Socle
Or (Sabodala), Fer (Falémé), Marbre.
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
### 1. Classification
- Renouvelables : Eau (cycle), Solaire, Biomasse (si gérée).
- Non renouvelables : Énergies fossiles, Minerais.

### 2. Impact
Exploitation minière : Pollution, déforestation. Nécessité d'études d'impact.
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
### 1. Principes
Utiliser les fossiles (Faciès) pour reconstituer les milieux anciens (Lagune, Mer profonde, Continent).

Transgressions (Montée de la mer) et Régressions (Retrait).

### 2. Histoire du Sénégal
Plusieurs cycles de transgression marine ont déposé les sédiments du bassin.
            `,
            summary: ["Fossiles stratigraphiques (Datation) vs Fossiles de faciès (Milieu)."],
            exercises: [{ id: 'exo-svt1s-23', question: "Une transgression marine, c'est...", options: ["La mer qui avance sur les terres", "La mer qui recule", "Un tsunami", "Une pluie intense"], correctAnswer: 0, explanation: "Entraîne des dépôts marins sur le continent." }]
        }
    ]
};
