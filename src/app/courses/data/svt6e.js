export const svt6eData = {
    id: 'svt-6e',
    title: 'SVT 6ème - Sciences de la Vie et de la Terre',
    chapters: [
        // ==========================================
        // PARTIE 1 : SCIENCES DE LA VIE
        // ==========================================

        // THEME 1 : ENVIRONNEMENT
        {
            id: 'bio-t1-l1',
            simulation: { id: 'EnvironmentExplorer', title: "Explorateur d'Environnement" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '1. Les composantes de l’environnement',
            image: '/courses/images/svt6e/svt_environment.png',
            story: "Imaginez que vous êtes un explorateur qui débarque sur une planète inconnue. Vous observez tout ce qui vous entoure. Il y a des choses qui bougent et respirent (les vivants) et des choses immobiles comme les rochers ou l'eau (les non-vivants). C'est cela, un environnement : un grand puzzle où tout cohabite.",
            content: `
### 1. Qu'est-ce que l'environnement ?
C'est tout ce qui nous entoure. On peut diviser l'environnement en deux grandes familles :
- **Le Vivant (Biocénose)** : Les animaux, les plantes, les champignons, les bactéries... Ils naissent, grandissent, se reproduisent et meurent.
- **Le Non-Vivant (Minéral)** : Les roches, l'eau, l'air, la température, la lumière... Ils ne sont pas nés et ne meurent pas.
- **Les aménagements humains** : Ce que l'homme a construit (maisons, routes, ponts).

> **🏠 Analogie : La Maison**
>
> Dans votre maison, il y a votre famille (le vivant) et les murs, les meubles, l'air (le non-vivant). Les deux sont nécessaires pour que la maison ou l'environnement "fonctionne".
            `,
            summary: [
                "L'environnement est composé d'éléments vivants et non-vivants.",
                "Le vivant se nourrit, grandit et se reproduit.",
                "Le non-vivant (minéral) inclut l'eau, l'air, le sol et la lumière."
            ],
            exercises: [
                {
                    id: 'ex-env-1',
                    question: "Lequel de ces éléments appartient au monde vivant ?",
                    options: ["Une pierre", "L'eau de la rivière", "Un arbre", "Le soleil"],
                    correctAnswer: 2,
                    explanation: "L'arbre naît (graine), grandit, se nourrit et meurt. C'est un être vivant."
                },
                {
                    id: 'ex-env-2',
                    question: "Dans l'environnement, l'eau et l'air font partie :",
                    options: ["Du monde vivant", "Du monde non-vivant (minéral)", "Des aménagements humains", "De la faune"],
                    correctAnswer: 1,
                    explanation: "L'eau et l'air sont des éléments naturels indispensables à la vie, mais ils ne sont pas eux-mêmes vivants."
                }
            ]
        },
        {
            id: 'bio-t1-l2',
            simulation: { id: 'VertebrateClassification', title: "Classification des Vertébrés" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '2. Classification et répartition des êtres vivants',
            story: "Dans une immense bibliothèque, les livres sont rangés par genre : Romans, BD, Dictionnaires. Les scientifiques font la même chose avec les êtres vivants. Ils regardent leurs points communs pour les ranger dans des 'boîtes' imaginaires qu'on appelle la classification.",
            content: `
### 1. Pourquoi classer ?
Il existe des millions d'espèces. Pour s'y retrouver, on les regroupe selon ce qu'ils ont en commun (leurs attributs).

### 2. Les grands groupes
- **Vertébrés** : Ils ont un squelette intérieur et une colonne vertébrale (ex: Mammifères, Oiseaux, Reptiles, Amphibiens, Poissons).
- **Invertébrés** : Ils n'ont pas de colonne vertébrale (ex: Insectes, Mollusques, Crustacés).
- **Végétaux** : Plantes à fleurs, fougères, mousses...

> **🗄 Analogie : Le Rangement**
>
> Classer les animaux, c'est comme ranger sa chambre. On met les chaussettes avec les chaussettes (Mammifères), les t-shirts avec les t-shirts (Oiseaux). On ne range pas un oiseau avec un poisson, ce n'est pas le même tiroir !
            `,
            summary: [
                "Classer, c'est regrouper selon les ressemblances (attributs).",
                "La présence de colonne vertébrale sépare les vertébrés des invertébrés.",
                "Les êtres vivants ne sont pas répartis au hasard : ils dépendent de leur milieu de vie."
            ],
            exercises: [
                {
                    id: 'ex-class-1',
                    question: "Le chien est un vertébré car :",
                    options: ["Il a des poils", "Il aboie", "Il a une colonne vertébrale", "Il vit avec l'homme"],
                    correctAnswer: 2,
                    explanation: "La colonne vertébrale est le critère pour définir les vertébrés."
                }
            ]
        },
        {
            id: 'bio-t1-l3',
            simulation: { id: 'FoodChain', title: "Chaîne Alimentaire" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '3. Les relations dans l’environnement',
            story: "Dans la nature, personne ne vit tout seul. C'est comme un grand réseau social ! Certains sont amis et s'entraident, d'autres sont rivaux. Le plus souvent, c'est une histoire de 'manger ou être mangé'.",
            content: `
### 1. La Chaîne Alimentaire
C'est une suite d'êtres vivants où chacun mange celui qui le précède.
- **Producteurs** : Les plantes (produisent leur propre nourriture grâce au soleil).
- **Consommateurs primaires** : Les végétariens (mangent les plantes).
- **Consommateurs secondaires** : Les carnivores (mangent les végétariens).
- **Décomposeurs** : Vers, bactéries (recyclent la matière morte en terreau).

> **🍽 Analogie : Le Restaurant**
>
> Le serveur (Plante) apporte le plat. Le client (Herbivore) mange le plat. Le patron (Carnivore) surveille le client. À la fin, l'équipe de nettoyage (Décomposeurs) débarrasse tout.
            `,
            summary: [
                "Une chaîne alimentaire commence toujours par un végétal.",
                "Les flèches signifient 'est mangé par'.",
                "Tous les maillons sont importants : si l'un disparaît, toute la chaîne est brisée."
            ],
            exercises: [
                {
                    id: 'ex-rel-1',
                    question: "Dans une chaîne alimentaire, par quoi commence-t-on toujours ?",
                    options: ["Un carnivore", "Un décomposeur", "Un végétal vert", "Un super-prédateur"],
                    correctAnswer: 2,
                    explanation: "Les végétaux sont les seuls capables de fabriquer de la matière organique à partir de rien (ou presque)."
                }
            ]
        },

        // THEME 2 : PRODUCTION D'ALIMENTS
        {
            id: 'bio-t2-l4',
            simulation: { id: 'Photosynthesis', title: "La Photosynthèse" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '4. La production d’aliments par les végétaux chlorophylliens',
            image: '/courses/images/svt6e/svt_photosynthesis.png',
            story: "Les plantes sont les seules cuisinières magiques de la Terre. Elles n'ont pas besoin de faire les courses. Il leur suffit d'un peu Soleil, d'air et d'eau pour préparer leur repas (le sucre) et fabriquer leur propre corps (feuilles, bois, fruits).",
            content: `
### 1. La Photosynthèse
Les plantes vertes sont des **producteurs primaires**. Elles fabriquent leur matière organique grâce à la chlorophylle (le pigment vert).

La recette magique :
- **Eau + Sels minéraux** (puisés par les racines).
- **Dioxyde de carbone (CO2)** (capté par les feuilles dans l'air).
- **Lumière du Soleil** (l'énergie qui fait cuire le tout).

Le résultat : La plante grandit et rejette de l'Oxygène (O2) que nous respirons !

> **☀️ Analogie : Le Panneau Solaire**
>
> Une feuille est comme un panneau solaire sophistiqué. Elle capte l'énergie du soleil pour faire fonctionner l'usine de la plante. Sans soleil, l'usine s'arrête.
            `,
            summary: [
                "Les plantes vertes ont besoin de Lumière, Eau, Sels minéraux et CO2.",
                "Ce processus s'appelle la photosynthèse.",
                "Elles produisent leur propre nourriture et rejettent de l'oxygène."
            ],
            exercises: [
                {
                    id: 'ex-photo-1',
                    question: "Quel ingrédient est INDISPENSABLE pour que la plante verte fabrique sa nourriture ?",
                    options: ["Du sucre", "De la lumière", "Des vitamines", "Du sang"],
                    correctAnswer: 1,
                    explanation: "Sans lumière, la photosynthèse ne peut pas avoir lieu (Photo = Lumière)."
                }
            ]
        },
        {
            id: 'bio-t2-l5',
            simulation: { id: 'AgricultureLab', title: "Laboratoire d'Agriculture" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '5. Amélioration de la production d’aliments',
            story: "L'agriculture, c'est l'art d'aider la nature à faire mieux. Comme un coach sportif aide un athlète à courir plus vite, l'agriculteur aide la plante ou l'animal à grandir plus gros et en meilleure santé.",
            content: `
### 1. Pour les Végétaux
- **Engrais** : C'est comme des vitamines pour la terre (naturel ou chimique).
- **Irrigation** : Apporter de l'eau quand il ne pleut pas.
- **Sélection** : Choisir les meilleures graines (les plus grosses tomates).

### 2. Pour les Animaux (Élevage)
- **Alimentation riche** : Donner de la bonne nourriture équilibrée.
- **Hygiène** : Vacciner, nettoyer les abris pour éviter les maladies.
- **Croisement** : Marier un taureau fort avec une vache qui donne beaucoup de lait.
            `,
            summary: [
                "L'homme intervient pour augmenter la quantité et la qualité des aliments.",
                "Les engrais enrichissent le sol.",
                "La sélection permet d'améliorer les races et les variétés."
            ],
            exercises: [
                {
                    id: 'ex-agr-1',
                    question: "Que peut utiliser un agriculteur pour enrichir son sol ?",
                    options: ["Des insecticides", "Des engrais", "Des herbicides", "Du sel"],
                    correctAnswer: 1,
                    explanation: "L'engrais apporte les sels minéraux nutritifs manquants à la plante."
                }
            ]
        },

        // THEME 3 : DEPLACEMENT
        {
            id: 'bio-t3-l6',
            simulation: { id: 'AnimalLocomotion', title: "Modes de Déplacement" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '6. Déplacement chez les animaux',
            story: "Imaginez porter une combinaison de plongée pour aller courir un marathon, ou des skis pour nager ! Impossible, n'est-ce pas ? Chaque animal possède le 'véhicule' adapté à son terrain : des pattes pour la terre, des ailes pour l'air, des nageoires pour l'eau.",
            content: `
### 1. En Milieu Terrestre (La Terre)
- **La Marche (Plantigrade)** : Ours, Homme (pose tout le pied).
- **La Course (Digitigrade/Onguligrade)** : Chien, Cheval (court sur les doigts ou les sabots pour aller vite).
- **Le Saut** : Lapin, Kangourou (pattes arrières puissantes en "Z").
- **La Reptation** : Serpent (ondule son corps).

### 2. En Milieu Aérien (L'Air)
L'adaptation reine est l'**aile**. Elle est légère, large et imperméable à l'air. Les os des oiseaux sont creux pour être légers.

### 3. En Milieu Aquatique (L'Eau)
L'adaptation reine est la forme **hydrodynamique** (en forme de fusée ou de torpille) et les **nageoires** pour propulser et diriger.

> **🚗 Analogie : Les Véhicules**
>
> • Terre = 4x4 (Pattes solides).
> <br>• Air = Avion (Ailes portantes, carlingue légère).
> <br>• Eau = Sous-marin (Forme lisse, hélice/queue).
            `,
            summary: [
                "Chaque milieu impose des contraintes physiques.",
                "Les organes de déplacement sont adaptés au milieu (Ailes, Nageoires, Pattes).",
                "La forme du corps aide aussi (fuselée pour l'eau et l'air)."
            ],
            exercises: [
                {
                    id: 'ex-dep-1',
                    question: "Quelle forme de corps facilite le déplacement dans l'eau ?",
                    options: ["La forme ronde comme un ballon", "La forme hydrodynamique (fuselée)", "La forme carrée", "La forme plate"],
                    correctAnswer: 1,
                    explanation: "La forme hydrodynamique (comme une torpille) permet de fendre l'eau avec le moins de résistance possible."
                },
                {
                    id: 'ex-dep-2',
                    question: "Le cheval est un animal qui marche sur :",
                    options: ["La plante des pieds (Plantigrade)", "Le bout des doigts/sabots (Onguligrade)", "Les genoux", "Le ventre"],
                    correctAnswer: 1,
                    explanation: "Le sabot est en fait un ongle géant. Cela allonge la jambe et permet de courir très vite."
                }
            ]
        },

        // THEME 4 : REPRODUCTION
        {
            id: 'bio-t4-l7',
            simulation: { id: 'CellDiscovery', title: "Microscope Virtuel" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '7. La cellule et la division cellulaire',
            story: "Une maison est faite de briques. Un être vivant, c'est pareil, mais les briques sont vivantes ! On les appelle des cellules. Une cellule, c'est comme une mini-usine autonome avec un chef (le noyau), une muraille (la membrane) et de la gelée magique (le cytoplasme).",
            content: `
### 1. La Cellule : Unité de Vie
Tous les êtres vivants sont faits de cellules. Microscopiques, elles sont les briques de la vie.
- **Membrane** : La peau qui protège.
- **Cytoplasme** : L'intérieur liquide.
- **Noyau** : Le cerveau qui contient les plans de construction.

### 2. La Division Cellulaire (Mitose)
Pour grandir, on ne gonfle pas comme un ballon. On multiplie nos briques ! Une cellule mère se coupe en deux pour donner deux cellules filles identiques. 1 devient 2, 2 deviennent 4, 4 deviennent 8...

> **📑 Analogie : La Photocopieuse**
>
> La division cellulaire, c'est comme photocopier une page importante. On fait une copie exacte pour que chaque nouveau bureau (nouvelle cellule) ait son propre document de travail.
            `,
            summary: [
                "La cellule est l'élément de base de tout être vivant.",
                "Elle comprend Membrane, Cytoplasme et Noyau.",
                "Grandir, c'est multiplier ses cellules par division."
            ],
            exercises: [
                {
                    id: 'ex-cell-1',
                    question: "Quel est le rôle du noyau dans la cellule ?",
                    options: ["Protéger la cellule", "Commander et contenir l'information", "Digérer les aliments", "Faire entrer l'air"],
                    correctAnswer: 1,
                    explanation: "Le noyau est le centre de contrôle, le 'cerveau' de la cellule."
                }
            ]
        },
        {
            id: 'bio-t4-l8',
            simulation: { id: 'PlantGrowth', title: "Croissance Végétale" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '8. Comment obtenir une nouvelle plante ?',
            story: "Pour faire une nouvelle plante, la nature a deux méthodes. Soit la méthode 'Amour' (les fleurs, le pollen, les graines), soit la méthode 'Clonage' (une bouture, un morceau de tige qui repousse).",
            content: `
### 1. La Reproduction Sexuée (La Graine)
Elle demande deux parents (fleur mâle et fleur femelle). Le pollen rencontre l'ovule, cela donne une graine. La graine germe et donne une nouvelle plante.

### 2. La Multiplication Végétative (Sans graine)
On prend un morceau de la plante mère, on le met en terre, et hop ! Ça repousse.
- **Bouturage** : Planter une tige coupée (manioc, géranium).
- **Marcottage** : Enterrer une branche sans la couper jusqu'à ce qu'elle fasse des racines.
- **Greffage** : Souder une branche sur une autre plante.

> **✂️ Analogie : Le Copier-Coller**
>
> La graine, c'est comme écrire un nouveau livre (mélange des idées de papa et maman). Le bouturage, c'est faire une photocopie (exactement pareil que l'original).
            `,
            summary: [
                "La graine vient de la reproduction sexuée (fleurs).",
                "Le bouturage et le greffage sont des techniques pour multiplier les plantes sans graines.",
                "Ces techniques sont très utilisées en agriculture."
            ],
            exercises: [
                {
                    id: 'ex-rep-pl-1',
                    question: "Le bouturage consiste à :",
                    options: ["Semer des graines", "Planter un morceau de tige", "Marier deux fleurs", "Arroser les feuilles"],
                    correctAnswer: 1,
                    explanation: "C'est la définition du bouturage : une tige coupée qui refait des racines."
                }
            ]
        },

        // THEME 5 : AGRESSIONS
        {
            id: 'bio-t5-l9',
            simulation: { id: 'MalariaCycle', title: "Cycle du Paludisme" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '9. Le Paludisme',
            story: "C'est l'histoire d'un petit vampire très dangereux : le moustique Anophèle femelle. Elle transporte un passager clandestin microscopique (le parasite Plasmodium) et l'injecte dans notre sang quand elle nous pique.",
            content: `
### 1. La Maladie
Le paludisme (ou malaria) est causé par un parasite du sang transmis par la piqûre de l'anophèle femelle.

### 2. Les Signes
Fièvre forte, frissons, maux de tête, vomissements, fatigue extrême.

### 3. La Lutte
- **Prévention** : Dormir sous moustiquaire imprégnée, détruire les gîtes larvaires (eaux stagnantes).
- **Traitement** : Aller vite au dispensaire pour prendre des médicaments (ACT).

> **🛡 Analogie : La Forteresse**
>
> La moustiquaire est comme le rempart d'un château fort. Elle empêche l'ennemi volant d'entrer pendant que vous dormez.
            `,
            summary: [
                "Le vecteur est le moustique Anophèle femelle.",
                "L'agent pathogène est le Plasmodium (parasite).",
                "Le meilleur remède reste la moustiquaire imprégnée (MILDA)."
            ],
            exercises: [
                {
                    id: 'ex-palu-1',
                    question: "Qui transmet le paludisme ?",
                    options: ["Une mouche", "L'anophèle femelle", "L'eau sale", "Le soleil"],
                    correctAnswer: 1,
                    explanation: "C'est uniquement la femelle moustique Anophèle qui a besoin de sang pour ses œufs."
                }
            ]
        },
        {
            id: 'bio-t5-l10',
            simulation: { id: 'AscarisPrevention', title: "Prévention Ascaridiase" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '10. L’Ascaridiase',
            story: "L'Ascaris est un ver qui se croit dans un parc d'attraction à l'intérieur de notre ventre. Il entre quand on mange des mains ou des fruits sales, il voyage dans le corps et s'installe dans l'intestin pour voler notre nourriture.",
            content: `
### 1. La Contamination
C'est une maladie du "péril fécal". Les œufs du ver sortent dans les selles. Si on ne se lave pas les mains ou si on mange des légumes mal lavés (contaminés par la terre/selles), on avale les œufs.

### 2. Les Signes
Mal au ventre, toux, fatigue, vers dans les selles.

### 3. La Prévention

> **🧼 Analogie : Le Bouclier Savon**
>
> Se laver les mains avant de manger et après les toilettes, c'est fermer la porte à clé pour que les voleurs (les vers) n'entrent pas.
            `,
            summary: [
                "L'ascaris est un ver parasite intestinal.",
                "On l'attrape par manque d'hygiène (mains sales, aliments non lavés).",
                "Il faut couper le cycle en utilisant les latrines et le savon."
            ],
            exercises: [
                {
                    id: 'ex-asc-1',
                    question: "Comment évite-t-on l'ascaridiase ?",
                    options: ["En dormant sous moustiquaire", "En se lavant les mains et les crudités", "En courant vite", "En portant des chaussures"],
                    correctAnswer: 1,
                    explanation: "C'est une maladie des mains sales. L'hygiène est la clé."
                }
            ]
        },
        {
            id: 'bio-t5-l11',
            simulation: { id: 'CholeraFilter', title: "Filtration Choléra" },
            part: 'Partie 1 : Sciences de la Vie',
            title: '11. Le Choléra',
            story: "Le choléra est une maladie 'éclair'. Elle arrive vite et frappe fort. C'est une bactérie (Vibrion) qui vit dans l'eau sale et qui vide le corps de toute son eau par des diarrhées terribles.",
            content: `
### 1. La transmission
Boire de l'eau souillée ou manger des aliments contaminés par des matières fécales.

### 2. Les Signes
Diarrhées très liquides (eau de riz), vomissements, déshydratation rapide. C'est une urgence vitale !

### 3. La Prévention
- Boire de l'eau potable (javellisée ou bouillie).
- Se laver les mains au savon.
- Protéger les aliments des mouches.
            `,
            summary: [
                "Maladie très contagieuse et mortelle sans traitement rapide.",
                "Cause principale : Eau sale.",
                "Traitement : Réhydratation immédiate (SVO) et antibiotiques."
            ],
            exercises: [
                {
                    id: 'ex-chol-1',
                    question: "Quel est le principal danger du choléra ?",
                    options: ["La fièvre", "La déshydratation (perte d'eau)", "La toux", "Les boutons"],
                    correctAnswer: 1,
                    explanation: "Le corps se vide de son eau en quelques heures, ce qui peut entraîner la mort."
                }
            ]
        },

        // ==========================================
        // PARTIE 2 : SCIENCES DE LA TERRE
        // ==========================================
        {
            id: 'geo-t6-l12',
            simulation: { id: 'LandscapeBuilder', title: "Constructeur de Paysage" },
            part: 'Partie 2 : Sciences de la Terre',
            title: '12. Les Paysages',
            story: "Regardez par la fenêtre. Ce que vous voyez, c'est un paysage. C'est le visage de la Terre. Il a été sculpté par le vent, l'eau, le soleil, mais aussi maquillé et coiffé par les hommes qui y ont construit des villes et des champs.",
            content: `
### 1. Les éléments du paysage
Un paysage est composé de plusieurs couches :
- **Le relief** : Montagnes, vallées, plaines (la forme du sol).
- **La végétation** : Forêts, savanes, prairies (les cheveux de la terre).
- **L'eau (Hydrographie)** : Rivières, lacs, mer.
- **Les traces de l'homme** : Routes, villages, champs.
- **Le sous-sol** : Les roches cachées dessous (affleurements).

> **🖼 Analogie : Le Tableau**
>
> Un paysage est comme une peinture. La toile c'est le relief (roches). La peinture verte c'est la végétation. La peinture bleue c'est l'eau. Et les petits détails ajoutés au pinceau fin, ce sont les maisons des hommes.
            `,
            summary: [
                "Un paysage évolue constamment (érosion, action de l'homme).",
                "Il est défini par son relief, sa végétation, son eau et l'activité humaine.",
                "La géologie étudie les roches qui soutiennent ce paysage."
            ],
            exercises: [
                {
                    id: 'ex-pays-1',
                    question: "Quel élément est une trace de l'activité humaine dans un paysage ?",
                    options: ["Une montagne", "Une rivière", "Un pont", "Un nuage"],
                    correctAnswer: 2,
                    explanation: "Le pont a été construit par l'homme. Les autres sont naturels."
                }
            ]
        }
    ]
};
