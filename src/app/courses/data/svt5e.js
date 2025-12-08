export const svt5eData = {
    id: 'svt-5e',
    title: 'SVT 5ème - Sciences de la Vie et de la Terre',
    chapters: [
        // ==========================================
        // PARTIE 1 : SCIENCES DE LA VIE
        // ==========================================

        // THEME 1 : ENVIRONNEMENT
        {
            id: 'svt-5e-01',
            part: 'Partie 1 : Sciences de la Vie',
            title: '1. Le cadre de vie',
            story: "Imaginez votre quartier comme un immense aquarium. Il y a les habitants (les poissons), les maisons (les châteaux), l'air (l'eau). Tout ce petit monde interagit. Si l'eau devient sale, les poissons tombent malades. Votre cadre de vie fonctionne exactement pareil.",
            content: `
### 1. Qu'est-ce que le cadre de vie ?
C'est l'ensemble des éléments qui nous entourent au quotidien : notre maison, notre quartier, notre école, mais aussi l'air que l'on respire et les espaces verts.

### 2. Les composantes
- **L'environnement physique** : Les constructions (bâtiments, routes), l'eau, l'air.
- **L'environnement social** : Les relations entre les voisins, la sécurité, la propreté.

> **🏠 Analogie : La Chambre**
>
> Votre chambre est votre cadre de vie personnel. Si elle est rangée et aérée, vous dormez bien. Si elle est en désordre et poussiéreuse, vous vous sentez moins bien. C'est pareil pour une ville.
            `,
            summary: [
                "Le cadre de vie influence notre santé et notre bien-être.",
                "Il est composé d'éléments naturels et aménagés par l'homme.",
                "Chacun est responsable de l'entretien de son cadre de vie."
            ],
            exercises: [
                {
                    id: 'ex-cadre-1',
                    question: "Lequel de ces éléments ne fait PAS partie du cadre de vie physique ?",
                    options: ["Les routes", "L'amitié entre voisins", "Les parcs", "Les bâtiments"],
                    correctAnswer: 1,
                    explanation: "L'amitié fait partie de l'environnement social, pas physique."
                }
            ]
        },
        {
            id: 'svt-5e-02',
            part: 'Partie 1 : Sciences de la Vie',
            title: '2. Les pollutions et leurs conséquences',
            story: "C'est l'histoire d'une planète qui tousse. Imaginez que chaque papier jeté par terre est comme un petit virus pour la Terre. Au début, ce n'est rien. Mais quand des milliards de personnes le font, la Terre attrape une fièvre (réchauffement climatique).",
            content: `
### 1. Les types de pollution
- **Pollution de l'air** : Fumées des voitures, usines, poussière.
- **Pollution de l'eau** : Déchets plastiques, eaux usées non traitées, pétrole.
- **Pollution du sol** : Engrais chimiques, pesticides, décharges sauvages.

### 2. Les conséquences
Maladies respiratoires (asthme), disparition des animaux, réchauffement de la planète, inondations.
            `,
            summary: [
                "La pollution dégrade notre santé et la nature.",
                "Les déchets plastiques mettent des centaines d'années à disparaître.",
                "Recycler et ne pas jeter par terre sont des gestes vitaux."
            ],
            exercises: [
                {
                    id: 'ex-pol-1',
                    question: "Quelle est une conséquence directe de la pollution de l'air ?",
                    options: ["Les maux de ventre", "Les maladies respiratoires (asthme)", "Les caries dentaires", "La fatigue musculaire"],
                    correctAnswer: 1,
                    explanation: "L'air pollué irrite les poumons et provoque des difficultés respiratoires."
                }
            ]
        },

        // THEME 2 : FONCTION DE NUTRITION
        {
            id: 'svt-5e-03',
            part: 'Partie 1 : Sciences de la Vie',
            title: '3. Alimentation : Adaptation aux régimes',
            story: "Pourquoi le lion a-t-il de grandes dents pointues et la vache des dents plates ? C'est comme comparer un couteau à steak et une meule à grains. L'outil (la dent) est adapté au travail (la nourriture).",
            content: `
### 1. Les différents régimes
- **Zoophage (Carnivore)** : Mange de la viande (ex: Lion, Chat).
- **Phytophage (Herbivore)** : Mange des végétaux (ex: Vache, Mouton).
- **Omnivore** : Mange de tout (ex: Homme, Porc).

### 2. L'adaptation de la dentition
- Les carnivores ont des **crocs** pour tuer et déchirer.
- Les herbivores ont des **molaires** larges pour broyer l'herbe.
- Les omnivores ont un peu des deux.

> **🔧 Analogie : La Boîte à Outils**
>
> Si vous voulez couper du bois, vous prenez une scie (dents de carnivore). Si vous voulez écraser de l'ail, vous prenez un pilon (dents d'herbivore). La nature donne les bons outils aux animaux.
            `,
            summary: [
                "Le régime alimentaire détermine la forme des dents et du tube digestif.",
                "Les carnivores ont un intestin court, les herbivores un intestin très long.",
                "La vache est un ruminant."
            ],
            exercises: [
                {
                    id: 'ex-alim-1',
                    question: "Quel type de dents est très développé chez le carnivore ?",
                    options: ["Les molaires", "Les canines (crocs)", "Les incisives", "Les dents de sagesse"],
                    correctAnswer: 1,
                    explanation: "Les canines servent à saisir et tuer les proies."
                }
            ]
        },
        {
            id: 'svt-5e-04',
            part: 'Partie 1 : Sciences de la Vie',
            title: '4. Besoins de l’organisme humain',
            story: "Votre corps est comme une voiture de course. Elle a besoin de carburant (glucides), de pièces de rechange (protéines) et d'huiles pour le moteur (vitamines). Si vous mettez du soda à la place de l'essence, elle va tomber en panne !",
            content: `
### 1. Les groupes d'aliments
- **Bâtisseurs (Protéines)** : Pour construire les muscles et os (Viande, poisson, lait).
- **Énergétiques (Glucides/Lipides)** : Pour donner de la force (Riz, pain, huile).
- **Protecteurs (Vitamines)** : Pour éviter les maladies (Fruits, légumes).

### 2. Conséquences d'une mauvaise alimentation
- **Carences** : Le Kwashiorkor (manque de protéines), le Scorbut (manque de vit. C).
- **Excès** : L'obésité, le diabète (trop de sucre et de gras).
            `,
            summary: [
                "Manger équilibré, c'est manger un peu de tout.",
                "Le manque d'un aliment crée une carence.",
                "L'eau est l'aliment le plus important."
            ],
            exercises: [
                {
                    id: 'ex-hum-1',
                    question: "Quel groupe d'aliments donne de l'énergie pour bouger ?",
                    options: ["Les vitamines", "Les glucides (sucres lents)", "L'eau", "Les sels minéraux"],
                    correctAnswer: 1,
                    explanation: "Les glucides sont le carburant principal du corps."
                }
            ]
        },
        {
            id: 'svt-5e-05',
            part: 'Partie 1 : Sciences de la Vie',
            title: '5. La respiration chez les animaux',
            story: "Comment respirer sous l'eau ? Impossible pour nous ! Mais le poisson, lui, a des 'filtres' magiques appelés branchies. Chaque animal a inventé sa technique pour attraper l'oxygène, que ce soit dans l'air ou dans l'eau.",
            content: `
### 1. Respiration Aérienne
- **Poumons** : Homme, mammifères, oiseaux. L'air entre dans des sacs.
- **Trachées** : Insectes (criquet). Des petits tuyaux amènent l'air directement aux organes.

### 2. Respiration Aquatique
- **Branchies** : Poissons. L'eau riche en oxygène passe à travers les branchies (les 'lamelles rouges') qui capturent l'O2.

> **🤿 Analogie : Le Tuba vs La Bouteille**
>
> Les poumons sont comme une bouteille de plongée qu'on remplit. Les branchies sont comme un filtre qui tamise l'eau pour en garder l'oxygène.
            `,
            summary: [
                "Tous les animaux respirent (prennent de l'O2, rejettent du CO2).",
                "Milieu aérien = Poumons ou Trachées.",
                "Milieu aquatique = Branchies."
            ],
            exercises: [
                {
                    id: 'ex-resp-1',
                    question: "Comment respire le criquet ?",
                    options: ["Par des poumons", "Par des branchies", "Par des trachées", "Par la peau"],
                    correctAnswer: 2,
                    explanation: "Les insectes ont un réseau de tubes appelés trachées qui distribuent l'air dans tout le corps."
                }
            ]
        },

        // THEME 3 : FONCTION REPRODUCTION
        {
            id: 'svt-5e-06',
            part: 'Partie 1 : Sciences de la Vie',
            title: '6. Reproduction animale',
            story: "L'éternelle question : qui de la poule ou de l'œuf ? La reproduction, c'est la mission secrète de chaque animal pour ne pas disparaître. Certains pondent des œufs (comme des capsules spatiales), d'autres gardent les bébés au chaud dans le ventre.",
            content: `
### 1. Ovipares vs Vivipares
- **Ovipares** : Pondent des œufs (Oiseaux, reptiles, insectes). Le bébé grandit hors du corps de la mère.
- **Vivipares** : Le bébé grandit dans le ventre de la mère (Mammifères : vache, homme).

### 2. La Fécondation
C'est la rencontre entre un spermatozoïde (mâle) et un ovule (femelle) pour faire un œuf.
            `,
            summary: [
                "Ovipare = Œuf.",
                "Vivipare = Ventre (Vivant).",
                "La fécondation est nécessaire pour avoir un descendance sexuée."
            ],
            exercises: [
                {
                    id: 'ex-repro-1',
                    question: "La vache est un animal :",
                    options: ["Ovipare", "Vivipare", "Ovovivipare", "Asexué"],
                    correctAnswer: 1,
                    explanation: "Le veau se développe dans le ventre de la vache, c'est donc un vivipare."
                }
            ]
        },
        {
            id: 'svt-5e-07',
            part: 'Partie 1 : Sciences de la Vie',
            title: '7. Reproduction plantes à fleurs',
            story: "Les fleurs ne sont pas juste jolies pour faire plaisir. Ce sont des panneaux publicitaires pour attirer les abeilles ! Les abeilles sont les 'facteurs' qui transportent le pollen (le message d'amour) d'une fleur à l'autre.",
            content: `
### 1. Les organes de la fleur
- **Étamine (Mâle)** : Produit le pollen (poudre jaune).
- **Pistil (Femelle)** : Contient les ovules.

### 2. De la Fleur au Fruit
Une fois que le pollen arrive sur le pistil (pollinisation), la fleur fane, les pétales tombent, et le pistil gonfle pour devenir le **fruit**. Les ovules deviennent les **graines**.

> **📦 Analogie : Le Colis**
>
> Le fruit est un colis postal. L'emballage (la chair du fruit) protège le trésor à l'intérieur : les graines, qui serviront à faire pousser de nouvelles plantes.
            `,
            summary: [
                "Pollen = cellule reproductrice mâle.",
                "Pistil = organe reproducteur femelle.",
                "La fleur se transforme en fruit après fécondation."
            ],
            exercises: [
                {
                    id: 'ex-fleur-1',
                    question: "Que devient l'ovule après la fécondation ?",
                    options: ["Le fruit", "La graine", "Le pétale", "La racine"],
                    correctAnswer: 1,
                    explanation: "L'ovule devient la graine (qui donnera la plante), et le pistil devient le fruit."
                }
            ]
        },
        {
            id: 'svt-5e-08',
            part: 'Partie 1 : Sciences de la Vie',
            title: '8. Reproduction plantes sans fleurs',
            story: "Comment font les fougères ou les mousses ? Elles n'ont pas de fleurs ! Elles utilisent une technique de ninja : les spores. Ce sont des poussières invisibles qui s'envolent au vent pour coloniser de nouveaux territoires.",
            content: `
### 1. Les Spores
Regardez sous une feuille de fougère : il y a des petits tas jaunes/marrons appelés **sporanges**. Ils contiennent des milliers de spores.

### 2. Le Cycle
La spore tombe au sol humide $ \\rightarrow $ elle germe et donne une petite plante (le prothalle) $ \\rightarrow $ fécondation (grâce à l'eau) $ \\rightarrow $ nouvelle fougère.
            `,
            summary: [
                "Plantes sans fleurs = Fougères, mousses, algues.",
                "Elles se reproduisent grâce à des spores.",
                "Elles ont besoin d'eau (humidité) pour la reproduction."
            ],
            exercises: [
                {
                    id: 'ex-sfleur-1',
                    question: "Quel élément remplace les graines chez les fougères ?",
                    options: ["Les boutures", "Les spores", "Les pollens", "Les bulbes"],
                    correctAnswer: 1,
                    explanation: "Les spores jouent le rôle de dissémination."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : SCIENCES DE LA TERRE
        // ==========================================

        // THEME 4 : LES SOLS
        {
            id: 'svt-5e-09',
            part: 'Partie 2 : Sciences de la Terre',
            title: '9. Les sols : diversité et importance',
            story: "Le sol n'est pas juste de la 'terre sale'. C'est la peau vivante de la Terre. Dans une poignée de terre, il y a plus d'êtres vivants que d'humains sur la planète ! C'est ce qui nous permet de manger.",
            content: `
### 1. Composition du sol
- **Matière minérale** : Sable, argile, cailloux (vient de la roche).
- **Matière organique** : Feuilles mortes, racines, humus (vient du vivant).
- **Êtres vivants** : Vers de terre, bactéries, champignons.

### 2. Les types de sols
Sols sableux (légers mais gardent mal l'eau), sols argileux (lourds), sols humifères (riches pour l'agriculture).
            `,
            summary: [
                "Le sol est un mélange de minéral et d'organique.",
                "C'est le support de l'agriculture.",
                "Il abrite une immense biodiversité."
            ],
            exercises: [
                {
                    id: 'ex-sol-1',
                    question: "Qu'est-ce que l'humus ?",
                    options: ["Du sable fin", "De la roche dure", "De la matière organique décomposée", "Un type d'engrais chimique"],
                    correctAnswer: 2,
                    explanation: "L'humus est la couche noire et fertile formée par la décomposition des feuilles et débris."
                }
            ]
        },
        {
            id: 'svt-5e-10',
            part: 'Partie 2 : Sciences de la Terre',
            title: '10. Genèse et évolution des sols',
            story: "Fabriquer 1 cm de sol prend des siècles ! C'est une lente collaboration entre la pluie qui casse la roche et les plantes qui meurent pour faire du terreau. Le sol est une ressource très lente à renouveler.",
            content: `
### 1. Les étapes de formation
1. **Altération de la roche mère** : La pluie, le vent et le gel fissurent la roche dure du sous-sol.
2. **Installation de la vie** : Des mousses et lichens s'installent et meurent, créant un peu d'humus.
3. **Mélange** : Les vers de terre mélangent la roche en poudre et l'humus. Le sol s'épaissit.

### 2. L'érosion (Le danger)
Si on coupe les arbres (déforestation), la pluie emporte le sol. C'est l'érosion. Le sol disparaît et le désert avance.

> **🍰 Analogie : Le Gâteau**
>
> Le sol est un gâteau à étages. La roche mère est le plat dur en bas. Les débris de roche sont la pâte. L'humus est le glaçage au chocolat sur le dessus.
            `,
            summary: [
                "Le sol se forme à partir de la roche mère.",
                "Les êtres vivants participent à sa formation.",
                "L'érosion détruit le sol, il faut le protéger (reboisement)."
            ],
            exercises: [
                {
                    id: 'ex-gen-1',
                    question: "Quel est le rôle principal des racines des arbres pour le sol ?",
                    options: ["Le casser", "Le retenir contre l'érosion", "L'assécher", "Le chauffer"],
                    correctAnswer: 1,
                    explanation: "Les racines fixent la terre comme un filet et empêchent l'eau ou le vent de l'emporter."
                }
            ]
        },

        // THEME 5 : LES ROCHES SEDIMENTAIRES
        {
            id: 'svt-5e-11',
            part: 'Partie 2 : Sciences de la Terre',
            title: '11. Origine des roches sédimentaires',
            story: "Avez-vous déjà vu des couches de terre de différentes couleurs sur le bord d'une route ? Ce sont les pages du livre d'histoire de la Terre. Chaque couche (sédiment) s'est déposée il y a des millions d'années, souvent au fond de l'eau.",
            content: `
### 1. La Sédimentation
Les rivières transportent du sable, de la boue et des cailloux. Quand le courant ralentit (dans un lac ou la mer), tout se dépose au fond : ce sont les **sédiments**.

### 2. La Diagenèse (Durcissement)
Avec le temps et le poids des couches au-dessus, le sable mou se transforme en pierre dure (Grès), la boue devient de l'Argile, les coquillages deviennent du Calcaire.
            `,
            summary: [
                "Roches sédimentaires = roches formées par l'accumulation de dépôts.",
                "Elles sont souvent disposées en strates (couches).",
                "Elles contiennent souvent des fossiles."
            ],
            exercises: [
                {
                    id: 'ex-sed-1',
                    question: "Où se forment principalement les roches sédimentaires ?",
                    options: ["Au sommet des volcans", "Au fond des eaux (lacs, mers)", "Dans l'espace", "Au centre de la Terre"],
                    correctAnswer: 1,
                    explanation: "C'est l'accumulation de sédiments au fond de l'eau qui crée ces roches."
                }
            ]
        },
        {
            id: 'svt-5e-12',
            part: 'Partie 2 : Sciences de la Terre',
            title: '12. Gestion des roches sédimentaires',
            story: "Regardez autour de vous. Les murs de l'école (ciment), les vitres (sable), le plâtre (gypse)... Notre monde moderne est construit avec des roches sédimentaires. Ce sont des trésors géologiques.",
            content: `
### 1. Utilité
- **Construction** : Calcaire (ciment), Sable (béton, verre), Argile (briques, poteries).
- **Énergie** : Pétrole, Charbon (ce sont aussi des roches sédimentaires !).
- **Phosphates** : Pour faire des engrais (très important au Sénégal).

### 2. Gestion durable
Ce sont des ressources non renouvelables (elles mettent trop de temps à se former). Il faut éviter le gaspillage et penser au recyclage (ex: recycler le verre).

> **🧱 Analogie : Les Lego**
>
> Les roches sont les briques Lego de notre civilisation. Si on utilise toutes les briques pour faire des murs, on n'en aura plus pour faire des fenêtres. Il faut gérer le stock.
            `,
            summary: [
                "Le Sénégal est riche en ressources sédimentaires (Phosphates, Calcaire).",
                "Elles sont indispensables à la construction et à l'industrie.",
                "Leur exploitation doit être raisonnée."
            ],
            exercises: [
                {
                    id: 'ex-ges-1',
                    question: "A quoi sert principalement le sable de silice ?",
                    options: ["À faire du feu", "À fabriquer du verre", "À nourrir les animaux", "À faire du papier"],
                    correctAnswer: 1,
                    explanation: "Le verre est fabriqué en faisant fondre du sable à très haute température."
                }
            ]
        }
    ]
};
