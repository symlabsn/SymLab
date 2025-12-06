export const svt2sData = {
    id: 'svt-2s',
    title: 'SVT 2nde S',
    author: 'SymLab Team (Conforme Programme Sénégal)',
    description: 'Programme complet de Sciences de la Vie et de la Terre : Écologie, Énergie et Géologie.',
    chapters: [
        // ==========================================
        // THÈME 1 : ÉCOLOGIE & ENVIRONNEMENT
        // ==========================================
        {
            id: 'svt-2s-01',
            part: 'Écologie',
            title: '1. Espace rural',
            story: "L'espace rural est le cœur nourricier de notre pays. Comprendre son organisation, c'est comprendre nos racines agricoles.",
            content: `
                <h3>1. Définition et Caractéristiques</h3>
                <p>L'espace rural se définit par une faible densité de population et une prédominance des activités agricoles (agriculture, élevage, sylviculture).</p>
                <p>Il s'oppose à l'espace urbain mais entretient des liens étroits avec lui (flux de produits, d'hommes).</p>

                <h3>2. Les Écosystèmes Ruraux</h3>
                <p>On y trouve l'agrosystème : un écosystème modifié par l'homme pour la production de biomasse (champs, vergers).</p>
                <p><strong>Problèmes actuels :</strong> Désertification, déboisement, et exode rural.</p>
            `,
            summary: [
                "L'espace rural est dominé par l'activité agricole.",
                "L'agrosystème est un écosystème artificiel.",
                "L'équilibre y est fragile (dépendance aux intrants)."
            ],
            exercises: [
                {
                    id: 'exo-svt-01',
                    question: "Qu'est-ce qu'un agrosystème ?",
                    options: ["Une forêt vierge", "Un écosystème modifié par l'homme pour l'agriculture", "Un parc urbain", "Un désert"],
                    correctAnswer: 1,
                    explanation: "Un agrosystème est un milieu cultivé (champ, pâturage) géré pour produire des ressources."
                }
            ]
        },
        {
            id: 'svt-2s-02',
            part: 'Écologie',
            title: "2. L'énergie",
            story: "L'énergie est le moteur de la vie. Du soleil à la plante, puis à l'animal, c'est un flux continu qui traverse la biosphère.",
            content: `
                <h3>1. Flux d'énergie</h3>
                <p>Le Soleil est la source d'énergie primaire. Les végétaux chlorophyliens (producteurs primaires) convertissent l'énergie lumineuse en énergie chimique (photosynthèse).</p>
                
                <h3>2. Transfert et Pertes</h3>
                <p>L'énergie circule d'un niveau trophique à l'autre. À chaque étape, il y a des pertes importantes (respiration, chaleur, déchets).</p>
                <p><strong>Rendement :</strong> Le rendement énergétique d'un écosystème est souvent faible (loi des 10%).</p>
            `,
            summary: [
                "Source primaire : Le Soleil.",
                "Flux unidirectionnel (ne boucle pas comme la matière).",
                "Pertes sous forme de chaleur et respiration."
            ],
            exercises: [
                {
                    id: 'exo-svt-02',
                    question: "Qui sont les convertisseurs d'énergie lumineuse en chimique ?",
                    options: ["Les herbivores", "Les décomposeurs", "Les producteurs primaires (plantes)", "Les carnivores"],
                    correctAnswer: 2,
                    explanation: "Grâce à la photosynthèse, les plantes stockent l'énergie solaire dans les liaisons chimiques des molécules organiques."
                }
            ]
        },
        {
            id: 'svt-2s-03',
            part: 'Écologie',
            title: '3. Espace urbain',
            story: "La ville est un écosystème vorace. Elle consomme énormément de ressources et rejette beaucoup de déchets.",
            content: `
                <h3>1. Caractéristiques</h3>
                <p>L'espace urbain se caractérise par une forte densité de population, une artificialisation des sols (béton, bitume) et une dépendance aux importations de ressources.</p>

                <h3>2. Problématiques Environnementales</h3>
                <ul>
                    <li><strong>Pollution :</strong> Air, eau, sol, sonore, lumineuse.</li>
                    <li><strong>Gestion des déchets :</strong> Nécessité de tri et recyclage.</li>
                    <li><strong>Ilots de chaleur :</strong> Températures plus élevées qu'en zone rurale.</li>
                </ul>
            `,
            summary: [
                "Écosystème hétérotrophe (dépend de l'extérieur).",
                "Forte empreinte écologique.",
                "Nécessité de végétalisation pour la durabilité."
            ],
            exercises: [
                {
                    id: 'exo-svt-03',
                    question: "Pourquoi dit-on que la ville est hétérotrophe ?",
                    options: ["Elle produit sa nourriture", "Elle dépend des ressources extérieures", "Elle est autosuffisante", "Elle ne consomme pas d'énergie"],
                    correctAnswer: 1,
                    explanation: "La ville ne produit pas sa propre biomasse alimentaire, elle doit l'importer de l'espace rural."
                }
            ]
        },
        {
            id: 'svt-2s-04',
            part: 'Écologie',
            title: "4. Évolution d'un écosystème",
            story: "Rien n'est figé. Un terrain nu devient pelouse, puis brousse, puis forêt. C'est la succession écologique.",
            content: `
                <h3>1. Succession Écologique</h3>
                <p>C'est le processus naturel d'évolution d'un écosystème.</p>
                <ul>
                    <li><strong>Stade pionnier :</strong> Installation des premières espèces (lichens, mousses).</li>
                    <li><strong>Stades intermédiaires :</strong> Herbacées, arbustes.</li>
                    <li><strong>Climax :</strong> Stade final d'équilibre stable (souvent la forêt).</li>
                </ul>

                <h3>2. Perturbations</h3>
                <p>Les incendies, inondations ou actions humaines peuvent faire régresser l'écosystème à un stade antérieur.</p>
            `,
            summary: [
                "Le Climax est l'état d'équilibre optimal.",
                "La succession va du simple au complexe.",
                "La biodiversité augmente au cours de la succession."
            ],
            exercises: [
                {
                    id: 'exo-svt-04',
                    question: "Qu'est-ce que le Climax ?",
                    options: ["Le début de la vie", "Un sol nu", "L'état d'équilibre final stable", "Une perturbation"],
                    correctAnswer: 2,
                    explanation: "Le climax est l'état stable atteint par un écosystème après une longue évolution sans perturbation majeure."
                }
            ]
        },
        {
            id: 'svt-2s-05',
            part: 'Écologie',
            title: '5. Les facteurs écologiques',
            story: "Pour survivre, une espèce doit composer avec son environnement. Ces contraintes sont appelées facteurs écologiques.",
            content: `
                <h3>1. Définition</h3>
                <p>Un facteur écologique est tout élément du milieu susceptible d'agir directement sur les êtres vivants (cycle de développement, comportement, répartition).</p>

                <h3>2. Classification</h3>
                <ul>
                    <li><strong>Facteurs Abiotiques :</strong> Physico-chimiques (Climat, Sol, Eau, Lumière).</li>
                    <li><strong>Facteurs Biotiques :</strong> Liés aux interactions entre êtres vivants (Prédation, Compétition, Parasitisme).</li>
                </ul>
            `,
            summary: [
                "Abiotique = Non-vivant (Temperature, Eau).",
                "Biotique = Vivant (Relations).",
                "Loi de tolérance : Chaque espèce a une zone optimale."
            ],
            exercises: [
                {
                    id: 'exo-svt-05',
                    question: "La température est un facteur...",
                    options: ["Biotique", "Abiotique", "Trophique", "Génétique"],
                    correctAnswer: 1,
                    explanation: "La température est une caractéristique physique du milieu, donc un facteur abiotique (non-vivant)."
                }
            ]
        },
        // ==========================================
        // THÈME 2 : INFLUENCE DE L'ENVIRONNEMENT
        // ==========================================
        {
            id: 'svt-2s-06',
            part: 'Facteurs Abiotiques',
            title: '6. Influence des facteurs climatiques',
            story: "Pourquoi n'a-t-on pas d'ours polaires au Sénégal ? Le climat dicte la répartition des espèces.",
            content: `
                <h3>1. La Température</h3>
                <p>Elle influence le métabolisme. On distingue :</p>
                <ul>
                    <li>Poïkilothermes (à sang froid) : Dépendent de la température externe.</li>
                    <li>Homéothermes (à sang chaud) : Maintiennent leur température constante.</li>
                </ul>
                <p>Certains animaux hibernent ou migrent pour résister au froid ou à la chaleur.</p>

                <h3>2. L'Eau et l'Humidité</h3>
                <p>L'eau est vitale. Adaptations des plantes (Xérophytes) : épines, racines profondes, cuticules épaisses pour limiter la transpiration (ex: Cactus, Baobab).</p>
            `,
            summary: [
                "Le climat (T°, Pluie, Lumière) est le principal déterminant de la répartition.",
                "Les êtres vivants développent des adaptations morphologiques et comportementales."
            ],
            exercises: [
                {
                    id: 'exo-svt-06',
                    question: "Le Baobab perd ses feuilles en saison sèche. C'est une adaptation pour...",
                    options: ["Attirer les oiseaux", "Limiter la perte d'eau", "Produire plus de fruits", "Capter plus de lumière"],
                    correctAnswer: 1,
                    explanation: "En perdant ses feuilles, l'arbre réduit sa surface d'évapotranspiration et économise l'eau."
                }
            ]
        },
        {
            id: 'svt-2s-11', // Reordered to group abiotiques
            part: 'Facteurs Abiotiques',
            title: '11. Facteurs édaphiques (Le Sol)',
            story: "Le sol n'est pas qu'un support, c'est un laboratoire chimique vivant. La nature du sol détermine quelles plantes peuvent pousser.",
            content: `
                <h3>1. Texture et Structure</h3>
                <p>Le sol est un mélange de particules minérales (sable, limon, argile) et organiques (humus). Sa capacité à retenir l'eau dépend de sa texture.</p>

                <h3>2. Le pH du sol</h3>
                <p>Certaines plantes préfèrent les sols acides (calcifuges), d'autres les sols basiques (calcicoles).</p>

                <h3>3. La Faune du sol</h3>
                <p>Les vers de terre et micro-organismes aèrent le sol et décomposent la matière organique.</p>
            `,
            summary: [
                "Édaphique = Relatif au sol.",
                "Le sol fournit eau et sels minéraux.",
                "L'humus est essentiel pour la fertilité."
            ],
            exercises: [
                {
                    id: 'exo-svt-11',
                    question: "Une plante halophile aime...",
                    options: ["Le soleil", "L'ombre", "Le sel", "L'acide"],
                    correctAnswer: 2,
                    explanation: "Les halophiles (du grec halos = sel) sont adaptées aux sols salés (ex: plantes de la mangrove)."
                }
            ]
        },
        // ==========================================
        // THÈME 3 : FACTEURS BIOTIQUES & POPULATIONS
        // ==========================================
        {
            id: 'svt-2s-07',
            part: 'Facteurs Biotiques',
            title: '7. Les facteurs biotiques',
            story: "Aucune espèce ne vit seule. Manger ou être mangé, coopérer ou parasiter...",
            content: `
                <h3>1. Relations Homospécifiques</h3>
                <p>Entre individus de la même espèce.</p>
                <ul>
                    <li><strong>Coopération :</strong> Vie en société (abeilles, fourmis), chasse en meute.</li>
                    <li><strong>Compétition :</strong> Pour la nourriture, le territoire, la reproduction.</li>
                    <li><strong>Effet de groupe :</strong> Avantage à vivre ensemble (protection).</li>
                    <li><strong>Effet de masse :</strong> Inconvénient du surpeuplement (stress, maladies).</li>
                </ul>

                <h3>2. Relations Hétérospécifiques</h3>
                <p>Entre espèces différentes (voir chapitre suivant influence).</p>
            `,
            summary: [
                "Homospécifique = Même espèce.",
                "L'effet de masse est négatif, l'effet de groupe est positif."
            ],
            exercises: [
                {
                    id: 'exo-svt-07',
                    question: "L'organisation d'une ruche d'abeilles est un exemple de...",
                    options: ["Compétition", "Prédation", "Société (Coopération)", "Parasitisme"],
                    correctAnswer: 2,
                    explanation: "Les abeilles vivent en société organisée avec répartition des tâches (reine, ouvrières, faux-bourdons)."
                }
            ]
        },
        {
            id: 'svt-2s-10',
            part: 'Facteurs Biotiques',
            title: '10. Influence des facteurs biotiques',
            story: "Comment les interactions entre espèces régulent les populations. L'équilibre naturel est dynamique.",
            content: `
                <h3>1. La Prédation</h3>
                <p>Relation +/-. Le prédateur tue sa proie. Régule les populations de proies.</p>

                <h3>2. Le Parasitisme</h3>
                <p>Relation +/-. Le parasite vit aux dépens de l'hôte sans nécessairement le tuer (ex: Tique, ténia).</p>

                <h3>3. Le Mutualisme et la Symbiose</h3>
                <p>Relation +/+. Bénéfice réciproque. La symbiose est obligatoire (ex: Lichen = Algue + Champignon, ou nodosités des légumineuses).</p>

                <h3>4. La Compétition</h3>
                <p>Relation -/-. Lutte pour une ressource limitée.</p>
            `,
            summary: [
                "La prédation régule les équilibres.",
                "Symbiose = Association à bénéfice réciproque obligatoire."
            ],
            exercises: [
                {
                    id: 'exo-svt-10',
                    question: "Le lichen est une association symbiotique entre...",
                    options: ["Une plante et un animal", "Une algue et un champignon", "Deux bactéries", "Un arbre et une fourmi"],
                    correctAnswer: 1,
                    explanation: "L'algue fournit la matière organique (photosynthèse) et le champignon fournit eau/minéraux et protection."
                }
            ]
        },
        {
            id: 'svt-2s-09',
            part: 'Facteurs Biotiques',
            title: '9. Pyramides et réseaux trophiques',
            story: "La chaîne alimentaire est le squelette de l'écosystème. Qui mange qui ?",
            content: `
                <h3>1. Chaines et Réseaux</h3>
                <p>Une <strong>chaîne trophique</strong> est une suite d'êtres vivants où chacun mange celui qui le précède.</p>
                <p>Un <strong>réseau trophique</strong> est l'ensemble des chaînes interconnectées.</p>

                <h3>2. Les Pyramides Écologiques</h3>
                <p>Représentation graphique quantitative.</p>
                <ul>
                    <li><strong>Pyramide des nombres :</strong> Nombre d'individus à chaque niveau (Base large, sommet étroit).</li>
                    <li><strong>Pyramide des biomasses :</strong> Masse totale de matière vivante.</li>
                    <li><strong>Pyramide des énergies :</strong> Quantité d'énergie (toujours droite, car pertes d'énergie).</li>
                </ul>
            `,
            summary: [
                "Producteurs Primaires $\\rightarrow$ Consommateurs I $\\rightarrow$ Consommateurs II.",
                "Les pyramides montrent la décroissance des ressources vers le sommet."
            ],
            exercises: [
                {
                    id: 'exo-svt-09',
                    question: "Dans une pyramide des énergies, le sommet est toujours...",
                    options: ["Plus large que la base", "Plus étroit que la base", "Égal à la base", "Inversé"],
                    correctAnswer: 1,
                    explanation: "À cause des pertes énergétiques (respiration, chaleur) à chaque transfert, il y a moins d'énergie disponible au sommet."
                }
            ]
        },
        {
            id: 'svt-2s-12',
            part: 'Biomasse',
            title: '12. Biomasse et Productivité',
            story: "Mesurer la performance d'un écosystème. Combien de matière vivante produit-il par an ?",
            content: `
                <h3>1. La Biomasse</h3>
                <p>Masse totale de matière organique vivante par unité de surface à un instant t.</p>

                <h3>2. La Productivité Primaire</h3>
                <ul>
                    <li><strong>Productivité Primaire Brut (PPB) :</strong> Tout ce qui est produit par photosynthèse.</li>
                    <li><strong>Productivité Primaire Nette (PPN) :</strong> PPB moins ce que la plante consomme pour respirer ($R$).</li>
                </ul>
                <p>$$ PPN = PPB - R $$</p>
                <p>C'est la PPN qui est disponible pour les herbivores.</p>
            `,
            summary: [
                "Productivité = Vitesse de production de biomasse ($g/m^2/an$).",
                "PPN est la vraie 'récolte' potentielle."
            ],
            exercises: [
                {
                    id: 'exo-svt-12',
                    question: "Si une forêt produit 10 tonnes de glucose (PPB) et en consomme 4 pour respirer (R), quelle est la PPN ?",
                    options: ["14 tonnes", "10 tonnes", "6 tonnes", "40 tonnes"],
                    correctAnswer: 2,
                    explanation: "$PPN = PPB - R = 10 - 4 = 6$ tonnes."
                }
            ]
        },
        // ==========================================
        // THÈME 4 : ESPÈCE & ÉVOLUTION
        // ==========================================
        {
            id: 'svt-2s-08',
            part: 'Biologie',
            title: '8. Espèce et variation',
            story: "Qu'est-ce qui fait qu'un chat est un chat ? La notion d'espèce est le pilier de la biologie.",
            content: `
                <h3>1. Notion d'Espèce</h3>
                <p>Critères principaux :</p>
                <ul>
                    <li><strong>Ressemblance :</strong> Critère morphologique (ils se ressemblent).</li>
                    <li><strong>Interfécondité :</strong> Ils peuvent se reproduire entre eux et avoir une descendance fertile (Critère fondamental).</li>
                </ul>

                <h3>2. La Variation</h3>
                <p>Au sein d'une espèce, les individus ne sont pas identiques (polymorphisme). Ces variations peuvent être génétiques ou environnementales.</p>
            `,
            summary: [
                "Espèce = Ressemblance + Interfécondité.",
                "Le mulet (Âne + Jument) est stérile, donc Âne et Cheval sont deux espèces différentes."
            ],
            exercises: [
                {
                    id: 'exo-svt-08',
                    question: "Quel est le critère décisif pour définir une espèce ?",
                    options: ["La couleur", "La taille", "L'interfécondité (descendance fertile)", "Le lieu de vie"],
                    correctAnswer: 2,
                    explanation: "La capacité à avoir des descendants eux-mêmes fertiles assure la continuité de l'espèce."
                }
            ]
        },
        {
            id: 'svt-2s-14',
            part: 'Biologie',
            title: "14. L'évolution des êtres vivants",
            story: "De l'ancêtre commun à la biodiversité actuelle. Darwin nous a appris que le vivant change au cours du temps.",
            content: `
                <h3>1. Théories de l'Évolution</h3>
                <ul>
                    <li>Lamarckism (Transformisme) : L'usage crée l'organe.</li>
                    <li><strong>Darwinisme (Sélection Naturelle) :</strong> Les individus les mieux adaptés à leur milieu survivent et se reproduisent plus.</li>
                </ul>

                <h3>2. Arguments de l'Évolution</h3>
                <p>Paléontologie (fossiles), Anatomie comparée (plans d'organisation communs), Biologie moléculaire (ADN).</p>
            `,
            summary: [
                "L'évolution est un fait scientifique.",
                "La sélection naturelle est le moteur principal.",
                "Tous les vivants partagent une parenté."
            ],
            exercises: [
                {
                    id: 'exo-svt-14',
                    question: "Selon Darwin, quel est le moteur de l'évolution ?",
                    options: ["L'effort individuel", "La sélection naturelle", "Le hasard pur", "La volonté divine"],
                    correctAnswer: 1,
                    explanation: "La nature 'sélectionne' les variations favorables, permettant aux porteurs de mieux survivre et transmettre leurs gènes."
                }
            ]
        },
        // ==========================================
        // THÈME 5 : GÉOLOGIE & PRATIQUE
        // ==========================================
        {
            id: 'svt-2s-13',
            part: 'Géologie',
            title: '13. La géologie du Sénégal',
            story: "Notre sous-sol raconte une histoire de millions d'années. C'est aussi la source de nos richesses (phosphates, or, pétrole).",
            content: `
                <h3>1. Le Bassin Sédimentaire</h3>
                <p>Il couvre la majeure partie du territoire (Ouest et Centre). Formé de dépôts sédimentaires (sables, calcaires, argiles) depuis le Secondaire.</p>
                <p>Richesses : Phosphates (Thiès, Taïba), Eau (Nappes aquifères), Pétrole/Gaz (Offshore).</p>

                <h3>2. Le Socle Précambrien</h3>
                <p>Au Sud-Est (Kédougou, Bakel). Roches magmatiques et métamorphiques très anciennes.</p>
                <p>Richesses : Or, Fer, Marbre.</p>
            `,
            summary: [
                "Bassin Sédimentaire (Ouest) vs Socle Ancien (Est).",
                "Le Sénégal a un grand potentiel minier."
            ],
            exercises: [
                {
                    id: 'exo-svt-13',
                    question: "Où trouve-t-on l'or au Sénégal ?",
                    options: ["À Dakar", "Dans le bassin sédimentaire", "Dans la région de Kédougou (Socle)", "Dans la mer"],
                    correctAnswer: 2,
                    explanation: "L'or est associé aux roches anciennes du socle précambrien dans la région de Kédougou."
                }
            ]
        },
        {
            id: 'svt-2s-15',
            part: 'Pratique',
            title: '15. Compte rendu de sortie écologique',
            story: "Le terrain est la vraie salle de classe du biologiste. Apprenons à observer, mesurer et rapporter.",
            content: `
                <h3>1. Objectifs de la Sortie</h3>
                <p>Identifier les êtres vivants (flore/faune), mesurer les facteurs abiotiques (T°, pH, humidité) et comprendre les relations.</p>

                <h3>2. Structure du Compte Rendu</h3>
                <ul>
                    <li><strong>Introduction :</strong> Lieu, date, but, matériel.</li>
                    <li><strong>Méthodologie :</strong> Techniques utilisées (transect, quadrats, relevés).</li>
                    <li><strong>Résultats :</strong> Tableaux, schémas, inventaires, profil topographique.</li>
                    <li><strong>Interprétation :</strong> Expliquer la répartition des êtres vivants par les facteurs mesurés.</li>
                    <li><strong>Conclusion.</strong></li>
                </ul>
            `,
            summary: [
                "Un bon compte rendu relie les observations (Quoi ?) aux explications (Pourquoi ?).",
                "La stratification verticale et horizontale doit être décrite."
            ],
            exercises: [
                {
                    id: 'exo-svt-15',
                    question: "Quelle technique utilise-t-on pour étudier la végétation le long d'une ligne ?",
                    options: ["Le transect", "Le microscope", "La pêche", "Le sondage"],
                    correctAnswer: 0,
                    explanation: "Le transect est une ligne virtuelle le long de laquelle on note la succession des espèces végétales."
                }
            ]
        }
    ]
};
