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
### 1. Définition et Caractéristiques
L'espace rural se définit par une faible densité de population et une prédominance des activités agricoles (agriculture, élevage, sylviculture).

Il s'oppose à l'espace urbain mais entretient des liens étroits avec lui (flux de produits, d'hommes).

### 2. Les Écosystèmes Ruraux
On y trouve l'agrosystème : un écosystème modifié par l'homme pour la production de biomasse (champs, vergers).

**Problèmes actuels :** Désertification, déboisement, et exode rural.
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
### 1. Flux d'énergie
Le Soleil est la source d'énergie primaire. Les végétaux chlorophyliens (producteurs primaires) convertissent l'énergie lumineuse en énergie chimique (photosynthèse).

### 2. Transfert et Pertes
L'énergie circule d'un niveau trophique à l'autre. À chaque étape, il y a des pertes importantes (respiration, chaleur, déchets).

**Rendement :** Le rendement énergétique d'un écosystème est souvent faible (loi des 10%).
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
### 1. Caractéristiques
L'espace urbain se caractérise par une forte densité de population, une artificialisation des sols (béton, bitume) et une dépendance aux importations de ressources.

### 2. Problématiques Environnementales
- **Pollution :** Air, eau, sol, sonore, lumineuse.
- **Gestion des déchets :** Nécessité de tri et recyclage.
- **Ilots de chaleur :** Températures plus élevées qu'en zone rurale.
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
### 1. Succession Écologique
C'est le processus naturel d'évolution d'un écosystème.
- **Stade pionnier :** Installation des premières espèces (lichens, mousses).
- **Stades intermédiaires :** Herbacées, arbustes.
- **Climax :** Stade final d'équilibre stable (souvent la forêt).

### 2. Perturbations
Les incendies, inondations ou actions humaines peuvent faire régresser l'écosystème à un stade antérieur.
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
### 1. Définition
Un facteur écologique est tout élément du milieu susceptible d'agir directement sur les êtres vivants (cycle de développement, comportement, répartition).

### 2. Classification
- **Facteurs Abiotiques :** Physico-chimiques (Climat, Sol, Eau, Lumière).
- **Facteurs Biotiques :** Liés aux interactions entre êtres vivants (Prédation, Compétition, Parasitisme).
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
### 1. La Température
Elle influence le métabolisme. On distingue :
- Poïkilothermes (à sang froid) : Dépendent de la température externe.
- Homéothermes (à sang chaud) : Maintiennent leur température constante.

Certains animaux hibernent ou migrent pour résister au froid ou à la chaleur.

### 2. L'Eau et l'Humidité
L'eau est vitale. Adaptations des plantes (Xérophytes) : épines, racines profondes, cuticules épaisses pour limiter la transpiration (ex: Cactus, Baobab).
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
### 1. Texture et Structure
Le sol est un mélange de particules minérales (sable, limon, argile) et organiques (humus). Sa capacité à retenir l'eau dépend de sa texture.

### 2. Le pH du sol
Certaines plantes préfèrent les sols acides (calcifuges), d'autres les sols basiques (calcicoles).

### 3. La Faune du sol
Les vers de terre et micro-organismes aèrent le sol et décomposent la matière organique.
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
### 1. Relations Homospécifiques
Entre individus de la même espèce.
- **Coopération :** Vie en société (abeilles, fourmis), chasse en meute.
- **Compétition :** Pour la nourriture, le territoire, la reproduction.
- **Effet de groupe :** Avantage à vivre ensemble (protection).
- **Effet de masse :** Inconvénient du surpeuplement (stress, maladies).

### 2. Relations Hétérospécifiques
Entre espèces différentes (voir chapitre suivant influence).
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
### 1. La Prédation
Relation +/-. Le prédateur tue sa proie. Régule les populations de proies.

### 2. Le Parasitisme
Relation +/-. Le parasite vit aux dépens de l'hôte sans nécessairement le tuer (ex: Tique, ténia).

### 3. Le Mutualisme et la Symbiose
Relation +/+. Bénéfice réciproque. La symbiose est obligatoire (ex: Lichen = Algue + Champignon, ou nodosités des légumineuses).

### 4. La Compétition
Relation -/-. Lutte pour une ressource limitée.
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
### 1. Chaines et Réseaux
Une **chaîne trophique** est une suite d'êtres vivants où chacun mange celui qui le précède.

Un **réseau trophique** est l'ensemble des chaînes interconnectées.

### 2. Les Pyramides Écologiques
Représentation graphique quantitative.
- **Pyramide des nombres :** Nombre d'individus à chaque niveau (Base large, sommet étroit).
- **Pyramide des biomasses :** Masse totale de matière vivante.
- **Pyramide des énergies :** Quantité d'énergie (toujours droite, car pertes d'énergie).
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
### 1. La Biomasse
Masse totale de matière organique vivante par unité de surface à un instant t.

### 2. La Productivité Primaire
- **Productivité Primaire Brut (PPB) :** Tout ce qui est produit par photosynthèse.
- **Productivité Primaire Nette (PPN) :** PPB moins ce que la plante consomme pour respirer ($R$).

$$ PPN = PPB - R $$

C'est la PPN qui est disponible pour les herbivores.
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
### 1. Notion d'Espèce
Critères principaux :
- **Ressemblance :** Critère morphologique (ils se ressemblent).
- **Interfécondité :** Ils peuvent se reproduire entre eux et avoir une descendance fertile (Critère fondamental).

### 2. La Variation
Au sein d'une espèce, les individus ne sont pas identiques (polymorphisme). Ces variations peuvent être génétiques ou environnementales.
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
### 1. Théories de l'Évolution
- Lamarckism (Transformisme) : L'usage crée l'organe.
- **Darwinisme (Sélection Naturelle) :** Les individus les mieux adaptés à leur milieu survivent et se reproduisent plus.

### 2. Arguments de l'Évolution
Paléontologie (fossiles), Anatomie comparée (plans d'organisation communs), Biologie moléculaire (ADN).
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
### 1. Le Bassin Sédimentaire
Il couvre la majeure partie du territoire (Ouest et Centre). Formé de dépôts sédimentaires (sables, calcaires, argiles) depuis le Secondaire.

Richesses : Phosphates (Thiès, Taïba), Eau (Nappes aquifères), Pétrole/Gaz (Offshore).

### 2. Le Socle Précambrien
Au Sud-Est (Kédougou, Bakel). Roches magmatiques et métamorphiques très anciennes.

Richesses : Or, Fer, Marbre.
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
### 1. Objectifs de la Sortie
Identifier les êtres vivants (flore/faune), mesurer les facteurs abiotiques (T°, pH, humidité) et comprendre les relations.

### 2. Structure du Compte Rendu
- **Introduction :** Lieu, date, but, matériel.
- **Méthodologie :** Techniques utilisées (transect, quadrats, relevés).
- **Résultats :** Tableaux, schémas, inventaires, profil topographique.
- **Interprétation :** Expliquer la répartition des êtres vivants par les facteurs mesurés.
- **Conclusion.**
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
