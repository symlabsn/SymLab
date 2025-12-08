export const svt3eData = {
    id: 'svt-3e',
    title: 'SVT 3ème - Sciences de la Vie et de la Terre',
    chapters: [
        // ==========================================
        // PARTIE 1 : SCIENCES DE LA VIE
        // ==========================================

        // THEME 1 : FONCTION DE RELATION
        {
            id: 'svt-3e-01',
            part: 'Partie 1 : Sciences de la Vie',
            title: '1. Le système nerveux',
            story: `Votre corps est une ville connectée. Le cerveau est la mairie, les nerfs sont les câbles téléphoniques, et les messages électriques circulent à 100 m/s ! C'est le système nerveux qui coordonne tout.`,
            content: `
### 1. Organisation
- **Système Nerveux Central (SNC)** : Cerveau + Moelle épinière (le centre de commande).
- **Système Nerveux Périphérique** : Les nerfs qui partent dans tout le corps.

### 2. Le Neurone
Cellule nerveuse avec des prolongements (dendrites et axone). Le message nerveux est électrique.

### 3. L'Arc Réflexe
Réaction automatique et rapide (ex: retirer la main du feu). Récepteur → Nerf sensitif → Moelle → Nerf moteur → Muscle.
            `,
            summary: [
                "Le cerveau analyse et décide.",
                "La moelle épinière gère les réflexes.",
                "Message nerveux = Signal électrique."
            ],
            exercises: [
                {
                    id: 'ex-nerv-1',
                    question: "Quel organe coordonne les mouvements volontaires ?",
                    options: ["Le cœur", "Le cerveau", "Les muscles", "Les nerfs"],
                    correctAnswer: 1,
                    explanation: "Le cerveau est le centre de commande des mouvements volontaires."
                }
            ]
        },
        {
            id: 'svt-3e-02',
            part: 'Partie 1 : Sciences de la Vie',
            title: '2. La Vision',
            story: `L'œil est un appareil photo biologique. La lumière entre, traverse la lentille (le cristallin), et se projette sur l'écran (la rétine). Le cerveau développe ensuite la photo !`,
            content: `
### 1. Anatomie de l'œil
- **Cornée** : Vitre transparente à l'avant.
- **Cristallin** : Lentille qui fait la mise au point.
- **Rétine** : Écran sensible avec des photorécepteurs (cônes et bâtonnets).
- **Nerf optique** : Câble vers le cerveau.

### 2. Accommodation
Le cristallin change de forme pour voir net de près ou de loin.

### 3. Défauts
Myopie (voit flou de loin), Hypermétropie (voit flou de près).
            `,
            summary: [
                "Image formée sur la rétine est inversée.",
                "Le cerveau la remet à l'endroit.",
                "Lunettes = Lentilles correctrices."
            ],
            exercises: [
                {
                    id: 'ex-vis-1',
                    question: "Quelle partie de l'œil contient les photorécepteurs ?",
                    options: ["La cornée", "Le cristallin", "La rétine", "L'iris"],
                    correctAnswer: 2,
                    explanation: "La rétine contient les cônes (couleurs) et bâtonnets (noir et blanc)."
                }
            ]
        },
        {
            id: 'svt-3e-03',
            part: 'Partie 1 : Sciences de la Vie',
            title: '3. La Respiration chez l\'Homme',
            story: `Inspirer, expirer... 20 000 fois par jour ! Vos poumons sont des éponges géantes qui capturent l'oxygène de l'air et rejettent le CO₂. C'est l'échange gazeux vital.`,
            content: `
### 1. Trajet de l'air
Nez/Bouche → Trachée → Bronches → Bronchioles → Alvéoles pulmonaires.

### 2. Les Alvéoles
Petits sacs entourés de capillaires sanguins. C'est là que se fait l'échange :
- O₂ passe de l'air vers le sang.
- CO₂ passe du sang vers l'air.

### 3. Mouvements respiratoires
Inspiration (diaphragme descend, cage thoracique s'ouvre). Expiration (inverse).
            `,
            summary: [
                "Surface d'échange énorme (100 m²).",
                "Tabac détruit les alvéoles (emphysème).",
                "Fréquence respiratoire augmente à l'effort."
            ],
            exercises: [
                {
                    id: 'ex-resp-1',
                    question: "Où se fait l'échange gazeux dans les poumons ?",
                    options: ["Dans la trachée", "Dans les bronches", "Dans les alvéoles", "Dans le diaphragme"],
                    correctAnswer: 2,
                    explanation: "Les alvéoles sont les sites d'échange entre l'air et le sang."
                }
            ]
        },
        {
            id: 'svt-3e-04',
            part: 'Partie 1 : Sciences de la Vie',
            title: '4. Phénomènes énergétiques (Respiration cellulaire)',
            story: `Vos cellules sont des mini-usines. Elles brûlent du glucose avec de l'oxygène pour fabriquer de l'énergie (ATP). C'est la respiration cellulaire, invisible mais essentielle.`,
            content: `
### 1. L'équation
Glucose + O₂ → CO₂ + H₂O + **Énergie (ATP)**

### 2. Les Mitochondries
Organites cellulaires où se déroule cette réaction. Ce sont les centrales énergétiques de la cellule.

### 3. Lien avec la respiration
Les poumons apportent l'O₂ et évacuent le CO₂ produit par les cellules.
            `,
            summary: [
                "ATP = Monnaie énergétique de la cellule.",
                "Sans O₂, pas d'ATP (asphyxie).",
                "Activité physique augmente les besoins en O₂."
            ],
            exercises: [
                {
                    id: 'ex-ener-1',
                    question: "Quel est le déchet de la respiration cellulaire ?",
                    options: ["L'oxygène", "Le glucose", "Le dioxyde de carbone", "L'eau seulement"],
                    correctAnswer: 2,
                    explanation: "La respiration cellulaire produit du CO₂ et de l'eau."
                }
            ]
        },
        {
            id: 'svt-3e-05',
            part: 'Partie 1 : Sciences de la Vie',
            title: '5. La Fermentation',
            story: `Pas d'oxygène ? Pas de problème pour certaines cellules ! Elles utilisent la fermentation. C'est moins efficace, mais ça permet de survivre. Le yaourt et le pain sont faits grâce à la fermentation.`,
            content: `
### 1. Définition
Dégradation du glucose **sans oxygène** pour produire de l'énergie.

### 2. Types
- **Fermentation alcoolique** : Glucose → Alcool + CO₂ (Levures, vin, bière).
- **Fermentation lactique** : Glucose → Acide lactique (Yaourt, crampes musculaires).

### 3. Rendement
Beaucoup moins d'énergie que la respiration (2 ATP au lieu de 38).
            `,
            summary: [
                "Fermentation = Respiration anaérobie (sans O₂).",
                "Utilisée par les levures et bactéries.",
                "Crampes musculaires = Accumulation d'acide lactique."
            ],
            exercises: [
                {
                    id: 'ex-ferm-1',
                    question: "Quel produit est fabriqué par fermentation alcoolique ?",
                    options: ["Le yaourt", "Le vin", "Le pain seulement", "Le fromage"],
                    correctAnswer: 1,
                    explanation: "Les levures transforment le sucre en alcool par fermentation alcoolique."
                }
            ]
        },
        {
            id: 'svt-3e-06',
            part: 'Partie 1 : Sciences de la Vie',
            title: '6. Le Rein et l\'excrétion urinaire',
            story: `Vos reins sont des filtres ultra-performants. Ils nettoient le sang 50 fois par jour ! Ils éliminent les déchets (urée) et régulent l'eau et les sels. Sans eux, on s'empoisonne.`,
            content: `
### 1. Rôle du rein
- Filtrer le sang (éliminer l'urée, toxines).
- Réguler l'eau et les sels minéraux.
- Maintenir le pH sanguin.

### 2. Formation de l'urine
Filtration → Réabsorption → Excrétion.

### 3. Trajet
Rein → Uretère → Vessie → Urètre.
            `,
            summary: [
                "2 reins, chacun contient 1 million de néphrons (unités filtrantes).",
                "Dialyse = Rein artificiel.",
                "Boire suffisamment d'eau aide les reins."
            ],
            exercises: [
                {
                    id: 'ex-rein-1',
                    question: "Quel est le principal déchet éliminé par les reins ?",
                    options: ["Le glucose", "L'urée", "L'oxygène", "Le CO₂"],
                    correctAnswer: 1,
                    explanation: "L'urée provient de la dégradation des protéines."
                }
            ]
        },

        // THEME 3 : IMMUNITE
        {
            id: 'svt-3e-07',
            part: 'Partie 1 : Sciences de la Vie',
            title: '7. L\'Immunité et la réponse immunitaire',
            story: `Votre corps est une forteresse assiégée par des millions d'ennemis invisibles (microbes). Heureusement, vous avez une armée : le système immunitaire. Il reconnaît, attaque et se souvient des intrus.`,
            content: `
### 1. Les barrières naturelles
Peau, mucus, larmes, salive (première ligne de défense).

### 2. Réponse immunitaire non spécifique
Phagocytose : Les globules blancs (phagocytes) mangent les microbes.

### 3. Réponse immunitaire spécifique
Lymphocytes produisent des anticorps spécifiques contre un antigène précis.
            `,
            summary: [
                "Antigène = Substance étrangère.",
                "Anticorps = Arme fabriquée sur mesure.",
                "Mémoire immunitaire = Réponse plus rapide la 2ème fois."
            ],
            exercises: [
                {
                    id: 'ex-imm-1',
                    question: "Quel type de cellule produit les anticorps ?",
                    options: ["Les globules rouges", "Les lymphocytes", "Les plaquettes", "Les neurones"],
                    correctAnswer: 1,
                    explanation: "Les lymphocytes B produisent des anticorps spécifiques."
                }
            ]
        },
        {
            id: 'svt-3e-08',
            part: 'Partie 1 : Sciences de la Vie',
            title: '8. Le Système immunitaire',
            story: `Votre armée immunitaire a plusieurs corps d'élite : les phagocytes (soldats de première ligne), les lymphocytes B (fabricants d'armes), les lymphocytes T (commandos). Ensemble, ils sont imbattables.`,
            content: `
### 1. Organes lymphoïdes
- **Moelle osseuse** : Fabrique les cellules immunitaires.
- **Thymus** : Entraîne les lymphocytes T.
- **Rate et ganglions** : Lieux de combat.

### 2. Types de lymphocytes
- Lymphocytes B : Produisent des anticorps.
- Lymphocytes T : Détruisent les cellules infectées.
            `,
            summary: [
                "Ganglions gonflés = Signe de combat immunitaire.",
                "Immunité acquise = Après contact avec l'antigène.",
                "Immunité innée = Présente dès la naissance."
            ],
            exercises: [
                {
                    id: 'ex-sys-1',
                    question: "Où sont fabriqués les globules blancs ?",
                    options: ["Dans le cœur", "Dans la moelle osseuse", "Dans les poumons", "Dans le foie"],
                    correctAnswer: 1,
                    explanation: "La moelle osseuse rouge produit toutes les cellules sanguines."
                }
            ]
        },
        {
            id: 'svt-3e-09',
            part: 'Partie 1 : Sciences de la Vie',
            title: '9. Les Groupes sanguins',
            story: `Pourquoi ne peut-on pas transfuser n'importe quel sang à n'importe qui ? Parce que chaque groupe sanguin a des marqueurs différents (A, B, AB, O). Si on se trompe, c'est la catastrophe (agglutination) !`,
            content: `
### 1. Système ABO
- Groupe A : Antigène A, anticorps anti-B.
- Groupe B : Antigène B, anticorps anti-A.
- Groupe AB : Antigènes A et B, pas d'anticorps (Receveur universel).
- Groupe O : Pas d'antigène, anticorps anti-A et anti-B (Donneur universel).

### 2. Système Rhésus
Rh+ (présence de l'antigène D) ou Rh- (absence).
            `,
            summary: [
                "Compatibilité essentielle pour les transfusions.",
                "O- = Donneur universel.",
                "AB+ = Receveur universel."
            ],
            exercises: [
                {
                    id: 'ex-sang-1',
                    question: "Quel groupe sanguin est donneur universel ?",
                    options: ["A", "B", "AB", "O"],
                    correctAnswer: 3,
                    explanation: "Le groupe O n'a pas d'antigènes A ou B, donc compatible avec tous."
                }
            ]
        },
        {
            id: 'svt-3e-10',
            part: 'Partie 1 : Sciences de la Vie',
            title: '10. Aide à l\'immunité (Vaccination)',
            story: `Le vaccin, c'est un entraînement pour votre armée. On lui montre une version affaiblie de l'ennemi. Elle apprend à le reconnaître. Le jour où le vrai ennemi arrive, elle est prête !`,
            content: `
### 1. Principe du vaccin
Injection d'un antigène affaibli ou tué. Le corps fabrique des anticorps et garde la mémoire.

### 2. Immunité active
Le corps fabrique lui-même ses anticorps (durable).

### 3. Sérothérapie
Injection directe d'anticorps (immunité passive, temporaire). Utilisée en urgence (morsure de serpent).
            `,
            summary: [
                "Vaccin = Prévention.",
                "Sérum = Traitement d'urgence.",
                "Vaccination collective protège toute la population (immunité de groupe)."
            ],
            exercises: [
                {
                    id: 'ex-vacc-1',
                    question: "Quelle est la différence entre vaccin et sérum ?",
                    options: ["Aucune", "Le vaccin prévient, le sérum traite", "Le sérum prévient, le vaccin traite", "Les deux sont identiques"],
                    correctAnswer: 1,
                    explanation: "Le vaccin stimule l'immunité avant la maladie, le sérum apporte des anticorps prêts."
                }
            ]
        },
        {
            id: 'svt-3e-11',
            part: 'Partie 1 : Sciences de la Vie',
            title: '11. Le VIH/SIDA',
            story: `Le SIDA est une maladie qui détruit l'armée immunitaire elle-même. Le virus VIH attaque les lymphocytes T, les commandants de la défense. Sans eux, le corps ne peut plus se défendre.`,
            content: `
### 1. Le VIH (Virus de l'Immunodéficience Humaine)
Virus qui infecte et détruit les lymphocytes T CD4.

### 2. Transmission
- Rapports sexuels non protégés.
- Sang contaminé (seringues, transfusion).
- Mère → Enfant (grossesse, allaitement).

### 3. Évolution
VIH (infection) → SIDA (maladie déclarée quand le système immunitaire est effondré).

### 4. Prévention
Préservatif, dépistage, traitement antirétroviral (ARV).
            `,
            summary: [
                "Pas de vaccin pour le moment.",
                "Les ARV permettent de vivre longtemps avec le VIH.",
                "Dépistage précoce = Meilleur pronostic."
            ],
            exercises: [
                {
                    id: 'ex-sida-1',
                    question: "Quelle cellule le VIH attaque-t-il principalement ?",
                    options: ["Les globules rouges", "Les lymphocytes T CD4", "Les plaquettes", "Les neurones"],
                    correctAnswer: 1,
                    explanation: "Le VIH cible et détruit les lymphocytes T CD4, affaiblissant l'immunité."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : SCIENCES DE LA TERRE
        // ==========================================

        // THEME 4 : TECTONIQUE DES PLAQUES
        {
            id: 'svt-3e-12',
            part: 'Partie 2 : Sciences de la Terre',
            title: '12. La Tectonique des plaques',
            story: `La Terre n'est pas un bloc solide. Sa surface est un puzzle géant de plaques qui bougent lentement (quelques cm par an). Quand elles se rencontrent, ça fait des tremblements de terre et des volcans !`,
            content: `
### 1. Structure de la Terre (Rappel)
Croûte (fine) → Manteau (épais, chaud) → Noyau (fer liquide et solide).

### 2. Les Plaques tectoniques
La croûte est découpée en une douzaine de plaques rigides qui flottent sur le manteau.

### 3. Mouvements
- **Divergence** : Les plaques s'écartent (dorsales océaniques, création de croûte).
- **Convergence** : Les plaques se rapprochent (subduction, montagnes).
- **Coulissage** : Les plaques glissent l'une contre l'autre (failles).
            `,
            summary: [
                "Moteur : Convection du manteau (chaleur interne).",
                "Séismes et volcans concentrés aux limites de plaques.",
                "Dérive des continents (Wegener)."
            ],
            exercises: [
                {
                    id: 'ex-tect-1',
                    question: "Que se passe-t-il à une zone de divergence ?",
                    options: ["Les plaques se rapprochent", "Les plaques s'écartent", "Les plaques glissent", "Rien"],
                    correctAnswer: 1,
                    explanation: "À une dorsale, les plaques s'écartent et du magma remonte, créant de la nouvelle croûte."
                }
            ]
        },
        {
            id: 'svt-3e-13',
            part: 'Partie 2 : Sciences de la Terre',
            title: '13. Formation des roches métamorphiques',
            story: `Imaginez une roche sédimentaire qui descend profondément dans la Terre. Sous l'effet de la pression et de la chaleur extrêmes, elle se transforme sans fondre. C'est le métamorphisme.`,
            content: `
### 1. Définition
Transformation d'une roche à l'état solide sous l'effet de la température et/ou de la pression.

### 2. Exemples
- Calcaire → Marbre
- Argile → Schiste → Gneiss
- Grès → Quartzite

### 3. Conditions
Profondeur (pression), proximité d'un magma (chaleur), zones de subduction.
            `,
            summary: [
                "Métamorphisme = Transformation sans fusion.",
                "Texture foliée (feuilletée) caractéristique.",
                "Roches très dures et résistantes."
            ],
            exercises: [
                {
                    id: 'ex-meta-1',
                    question: "Le marbre est une roche métamorphique issue de :",
                    options: ["Du granite", "Du calcaire", "Du basalte", "Du sable"],
                    correctAnswer: 1,
                    explanation: "Le calcaire se transforme en marbre sous l'effet de la chaleur et de la pression."
                }
            ]
        },

        // THEME 5 : CYCLE DES ROCHES
        {
            id: 'svt-3e-14',
            part: 'Partie 2 : Sciences de la Terre',
            title: '14. Le Cycle des roches',
            story: `Les roches ne sont pas éternelles. Elles naissent, se transforment et meurent dans un cycle sans fin. Une roche sédimentaire peut devenir magmatique, puis métamorphique, puis à nouveau sédimentaire.`,
            content: `
### 1. Les 3 types de roches
- **Magmatiques** : Refroidissement du magma (Granite, Basalte).
- **Sédimentaires** : Accumulation de sédiments (Calcaire, Grès).
- **Métamorphiques** : Transformation (Marbre, Schiste).

### 2. Le Cycle
Érosion → Sédimentation → Enfouissement → Métamorphisme → Fusion → Magma → Refroidissement → Érosion...
            `,
            summary: [
                "Cycle très lent (millions d'années).",
                "Érosion = Destruction des roches.",
                "Tectonique des plaques = Moteur du cycle."
            ],
            exercises: [
                {
                    id: 'ex-cycl-1',
                    question: "Quel processus transforme une roche sédimentaire en roche métamorphique ?",
                    options: ["L'érosion", "Le refroidissement", "La pression et la chaleur", "La sédimentation"],
                    correctAnswer: 2,
                    explanation: "Le métamorphisme nécessite pression et/ou chaleur."
                }
            ]
        },

        // THEME 6 : CHRONOLOGIE
        {
            id: 'svt-3e-15',
            part: 'Partie 2 : Sciences de la Terre',
            title: '15. La Chronologie en géologie',
            story: `Comment savoir qu'une couche de roche a 100 millions d'années ? Les géologues sont des détectives du temps. Ils utilisent les fossiles et la radioactivité pour dater les roches.`,
            content: `
### 1. Chronologie Relative
Principe de superposition : La couche du dessous est plus vieille que celle du dessus.

Principe de continuité : Une même couche a le même âge partout.

### 2. Chronologie Absolue
Datation radioactive (Carbone 14, Uranium-Plomb). Mesure la désintégration d'éléments radioactifs.

### 3. Les Fossiles stratigraphiques
Fossiles caractéristiques d'une époque précise. Permettent de dater les couches.
            `,
            summary: [
                "Relative = Ordre (avant/après).",
                "Absolue = Âge en années.",
                "Échelle des temps géologiques : Précambrien, Paléozoïque, Mésozoïque, Cénozoïque."
            ],
            exercises: [
                {
                    id: 'ex-chro-1',
                    question: "Quel principe dit que la couche inférieure est plus ancienne ?",
                    options: ["Principe de continuité", "Principe de superposition", "Principe de radioactivité", "Principe de fossilisation"],
                    correctAnswer: 1,
                    explanation: "C'est le principe de superposition : les couches se déposent les unes sur les autres."
                }
            ]
        }
    ]
};
