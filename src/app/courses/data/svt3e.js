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
                <h3>1. Organisation</h3>
                <ul>
                    <li><strong>Système Nerveux Central (SNC)</strong> : Cerveau + Moelle épinière (le centre de commande).</li>
                    <li><strong>Système Nerveux Périphérique</strong> : Les nerfs qui partent dans tout le corps.</li>
                </ul>
                <h3>2. Le Neurone</h3>
                <p>Cellule nerveuse avec des prolongements (dendrites et axone). Le message nerveux est électrique.</p>
                <h3>3. L'Arc Réflexe</h3>
                <p>Réaction automatique et rapide (ex: retirer la main du feu). Récepteur → Nerf sensitif → Moelle → Nerf moteur → Muscle.</p>
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
                <h3>1. Anatomie de l'œil</h3>
                <ul>
                    <li><strong>Cornée</strong> : Vitre transparente à l'avant.</li>
                    <li><strong>Cristallin</strong> : Lentille qui fait la mise au point.</li>
                    <li><strong>Rétine</strong> : Écran sensible avec des photorécepteurs (cônes et bâtonnets).</li>
                    <li><strong>Nerf optique</strong> : Câble vers le cerveau.</li>
                </ul>
                <h3>2. Accommodation</h3>
                <p>Le cristallin change de forme pour voir net de près ou de loin.</p>
                <h3>3. Défauts</h3>
                <p>Myopie (voit flou de loin), Hypermétropie (voit flou de près).</p>
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
                <h3>1. Trajet de l'air</h3>
                <p>Nez/Bouche → Trachée → Bronches → Bronchioles → Alvéoles pulmonaires.</p>
                <h3>2. Les Alvéoles</h3>
                <p>Petits sacs entourés de capillaires sanguins. C'est là que se fait l'échange :</p>
                <ul>
                    <li>O₂ passe de l'air vers le sang.</li>
                    <li>CO₂ passe du sang vers l'air.</li>
                </ul>
                <h3>3. Mouvements respiratoires</h3>
                <p>Inspiration (diaphragme descend, cage thoracique s'ouvre). Expiration (inverse).</p>
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
                <h3>1. L'équation</h3>
                <p>Glucose + O₂ → CO₂ + H₂O + <strong>Énergie (ATP)</strong></p>
                <h3>2. Les Mitochondries</h3>
                <p>Organites cellulaires où se déroule cette réaction. Ce sont les centrales énergétiques de la cellule.</p>
                <h3>3. Lien avec la respiration</h3>
                <p>Les poumons apportent l'O₂ et évacuent le CO₂ produit par les cellules.</p>
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
                <h3>1. Définition</h3>
                <p>Dégradation du glucose <strong>sans oxygène</strong> pour produire de l'énergie.</p>
                <h3>2. Types</h3>
                <ul>
                    <li><strong>Fermentation alcoolique</strong> : Glucose → Alcool + CO₂ (Levures, vin, bière).</li>
                    <li><strong>Fermentation lactique</strong> : Glucose → Acide lactique (Yaourt, crampes musculaires).</li>
                </ul>
                <h3>3. Rendement</h3>
                <p>Beaucoup moins d'énergie que la respiration (2 ATP au lieu de 38).</p>
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
                <h3>1. Rôle du rein</h3>
                <ul>
                    <li>Filtrer le sang (éliminer l'urée, toxines).</li>
                    <li>Réguler l'eau et les sels minéraux.</li>
                    <li>Maintenir le pH sanguin.</li>
                </ul>
                <h3>2. Formation de l'urine</h3>
                <p>Filtration → Réabsorption → Excrétion.</p>
                <h3>3. Trajet</h3>
                <p>Rein → Uretère → Vessie → Urètre.</p>
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
                <h3>1. Les barrières naturelles</h3>
                <p>Peau, mucus, larmes, salive (première ligne de défense).</p>
                <h3>2. Réponse immunitaire non spécifique</h3>
                <p>Phagocytose : Les globules blancs (phagocytes) mangent les microbes.</p>
                <h3>3. Réponse immunitaire spécifique</h3>
                <p>Lymphocytes produisent des anticorps spécifiques contre un antigène précis.</p>
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
                <h3>1. Organes lymphoïdes</h3>
                <ul>
                    <li><strong>Moelle osseuse</strong> : Fabrique les cellules immunitaires.</li>
                    <li><strong>Thymus</strong> : Entraîne les lymphocytes T.</li>
                    <li><strong>Rate et ganglions</strong> : Lieux de combat.</li>
                </ul>
                <h3>2. Types de lymphocytes</h3>
                <ul>
                    <li>Lymphocytes B : Produisent des anticorps.</li>
                    <li>Lymphocytes T : Détruisent les cellules infectées.</li>
                </ul>
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
                <h3>1. Système ABO</h3>
                <ul>
                    <li>Groupe A : Antigène A, anticorps anti-B.</li>
                    <li>Groupe B : Antigène B, anticorps anti-A.</li>
                    <li>Groupe AB : Antigènes A et B, pas d'anticorps (Receveur universel).</li>
                    <li>Groupe O : Pas d'antigène, anticorps anti-A et anti-B (Donneur universel).</li>
                </ul>
                <h3>2. Système Rhésus</h3>
                <p>Rh+ (présence de l'antigène D) ou Rh- (absence).</p>
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
                <h3>1. Principe du vaccin</h3>
                <p>Injection d'un antigène affaibli ou tué. Le corps fabrique des anticorps et garde la mémoire.</p>
                <h3>2. Immunité active</h3>
                <p>Le corps fabrique lui-même ses anticorps (durable).</p>
                <h3>3. Sérothérapie</h3>
                <p>Injection directe d'anticorps (immunité passive, temporaire). Utilisée en urgence (morsure de serpent).</p>
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
                <h3>1. Le VIH (Virus de l'Immunodéficience Humaine)</h3>
                <p>Virus qui infecte et détruit les lymphocytes T CD4.</p>
                <h3>2. Transmission</h3>
                <ul>
                    <li>Rapports sexuels non protégés.</li>
                    <li>Sang contaminé (seringues, transfusion).</li>
                    <li>Mère → Enfant (grossesse, allaitement).</li>
                </ul>
                <h3>3. Évolution</h3>
                <p>VIH (infection) → SIDA (maladie déclarée quand le système immunitaire est effondré).</p>
                <h3>4. Prévention</h3>
                <p>Préservatif, dépistage, traitement antirétroviral (ARV).</p>
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
                <h3>1. Structure de la Terre (Rappel)</h3>
                <p>Croûte (fine) → Manteau (épais, chaud) → Noyau (fer liquide et solide).</p>
                <h3>2. Les Plaques tectoniques</h3>
                <p>La croûte est découpée en une douzaine de plaques rigides qui flottent sur le manteau.</p>
                <h3>3. Mouvements</h3>
                <ul>
                    <li><strong>Divergence</strong> : Les plaques s'écartent (dorsales océaniques, création de croûte).</li>
                    <li><strong>Convergence</strong> : Les plaques se rapprochent (subduction, montagnes).</li>
                    <li><strong>Coulissage</strong> : Les plaques glissent l'une contre l'autre (failles).</li>
                </ul>
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
                <h3>1. Définition</h3>
                <p>Transformation d'une roche à l'état solide sous l'effet de la température et/ou de la pression.</p>
                <h3>2. Exemples</h3>
                <ul>
                    <li>Calcaire → Marbre</li>
                    <li>Argile → Schiste → Gneiss</li>
                    <li>Grès → Quartzite</li>
                </ul>
                <h3>3. Conditions</h3>
                <p>Profondeur (pression), proximité d'un magma (chaleur), zones de subduction.</p>
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
                <h3>1. Les 3 types de roches</h3>
                <ul>
                    <li><strong>Magmatiques</strong> : Refroidissement du magma (Granite, Basalte).</li>
                    <li><strong>Sédimentaires</strong> : Accumulation de sédiments (Calcaire, Grès).</li>
                    <li><strong>Métamorphiques</strong> : Transformation (Marbre, Schiste).</li>
                </ul>
                <h3>2. Le Cycle</h3>
                <p>Érosion → Sédimentation → Enfouissement → Métamorphisme → Fusion → Magma → Refroidissement → Érosion...</p>
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
                <h3>1. Chronologie Relative</h3>
                <p>Principe de superposition : La couche du dessous est plus vieille que celle du dessus.</p>
                <p>Principe de continuité : Une même couche a le même âge partout.</p>
                <h3>2. Chronologie Absolue</h3>
                <p>Datation radioactive (Carbone 14, Uranium-Plomb). Mesure la désintégration d'éléments radioactifs.</p>
                <h3>3. Les Fossiles stratigraphiques</h3>
                <p>Fossiles caractéristiques d'une époque précise. Permettent de dater les couches.</p>
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
